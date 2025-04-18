import Utils from './utils.js';
const { environment, blendColor, encodeAtPosition } = Utils;
import scroll from './scroll.js';
let toScroll = false;
import shared from '../shared/shared.js';

shared.respawnPlayer = () => {
    const player = shared.players[shared.selfId];
    if(player === undefined) return;
    player.pos.x = shared.spawnPosition.x;
    player.pos.y = shared.spawnPosition.y;
    player.renderRadius = 0;
    player.dead = false;
    player.forces.length = 0;
    if(shared.dragging === true) {window.onmouseup(); shared.dragging = true;}
    else window.onmouseup();
}

const SAT = window.SAT;
SAT.Circle.prototype.rotate = function (angle) {
    this.pos.rotate(angle);
}

function create(shape, simulates, effects, params){
    const e = {
        sat: satMap[shape](params),
        simulate: [],
        effect: [],
        renderShape: renderShapeMap[shape],
        renderEffect: effects.map(e => renderEffectMap[e]),
    };
    e.renderEffectTimer = 0;
    e.pos = e.sat.pos;
    if(shape === 0) e.sat.r = Math.max(e.sat.r, 0.001);
    else if(shape === 3) {e.isText = true; e.text = params.text; e.fontSize = params.fontSize; }
    else if(shape === 4){
        e.sat.r = Math.max(e.sat.r, 0.001); e.innerRadius = Math.max(params.innerRadius, 0);
        e.startSlice = params.startSlice; e.startSliceAngle = params.startSliceAngle;
        e.endSlice = params.endSlice; e.endSliceAngle = params.endSliceAngle;
        e.startSliceAngleRotateSpeed = params.startSliceAngleRotateSpeed;
        e.endSliceAngleRotateSpeed = params.endSliceAngleRotateSpeed;
        if(params.circleSliceRotate !== undefined) e.simulate.push(params.circleSliceRotate);
    }
    for(let key in shared.satConstraintsMap[shape]){
        // [min, max, mustBeInt, customValidator(e)]
        const c = shared.satConstraintsMap[shape][key];
        if(c[2] === true) e[key] = Math.round(e[key]);
        if(e[key] < c[0]) e[key] = c[0];
        else if(e[key] > c[1]) e[key] = c[1];
    }
    e.dimensions = generateDimensions(e);
    e.topLeft = generateTopLeftCoordinates(e);
    for(let i = 0; i < simulates.length; i++){
        e.simulate.push(simulateMap[simulates[i]]);
        initSimulateMap[simulates[i]](e, params);
        for(let key in shared.simulateConstraintsMap[simulates[i]]){
            // [min, max, mustBeInt, customValidator(e)]
            const c = shared.simulateConstraintsMap[simulates[i]][key];
            if(c[2] === true) e[key] = Math.round(e[key]);
            if(e[key] < c[0]) e[key] = c[0];
            else if(e[key] > c[1]) e[key] = c[1];
        }
    }
    for(let i = 0; i < effects.length; i++){
        e.effect.push(effectMap[effects[i]]);
        initEffectMap[effects[i]](e, params);
        if(idleEffectMap[effects[i]] !== undefined) e.simulate.push(idleEffectMap[effects[i]]);
        for(let key in shared.effectConstraintsMap[effects[i]]){
            // [min, max, mustBeInt, customValidator(e)]
            const c = shared.effectConstraintsMap[effects[i]][key];
            if(c[2] === true) e[key] = Math.round(e[key]);
            if(e[key] < c[0]) e[key] = c[0];
            else if(e[key] > c[1]) e[key] = c[1];
        }
    }
    if(params.sf !== undefined) e.simulate.push(params.sf);
    if(params.ef !== undefined) {e.effect.push(params.ef); e.renderEffect.push(renderEffectMap[3]);}
    if(params.sf !== undefined || params.ef !== undefined) {
        e.simulate.push(()=>{e.dimensions=generateDimensions(e);e.topLeft=generateTopLeftCoordinates(e);});
        if(params.customSync !== undefined && params.applyCustomSync !== undefined)
        {e.customSync = params.customSync; e.applyCustomSync = params.applyCustomSync;}
    };
    if(params.cr !== undefined) e.cr = params.cr;
    
    obstacles.push(e);

    // fixing polygon points if they're dynamically generated
    if(params.fixPoly !== undefined){
        if(environment === 'editor'){
            e.sat.setPoints(shared.fixPolygon(params.points).map(pt => new SAT.Vector(pt[0], pt[1])));
            e.dimensions = generateDimensions(e);
            e.topLeft = generateTopLeftCoordinates(e);
        } else {
            (async()=>{
                await import('../shared/fixPolygon.js');
                e.sat.setPoints(shared.fixPolygon(params.points).map(pt => new SAT.Vector(pt[0], pt[1])));
                e.dimensions = generateDimensions(e);
                e.topLeft = generateTopLeftCoordinates(e);
            })();
        }
    }
}
shared.C = create;
shared.idToObs = {};
shared.tickFns = [];
shared.R = remove;
function remove(i/*ndex*/){
    if(i === obstacles.length-1){
        do {
            obstacles.pop();
        } while(obstacles[obstacles.length-1].removed === true)
        return;
    }
    const o = obstacles[i];
    o.simulate.length = o.effect.length = 0;
    delete o.sf; delete o.ef; delete o.cr;
    o.pos.x = -1E9;
    o.removed = true;
}

function interpolate(start, end, t){
    return (1-t) * start + t * end;
}

let res = new SAT.Response();
let angle, collided = false;
function simulate(){
    // player simulation
    const player = shared.players[shared.selfId];

    if(shared.isExClient === true && player.dead === false) {
        if(shared.touchMode === true){
            player.xa = Math.cos(shared.touchAngle) * player.speed;
            player.ya = Math.sin(shared.touchAngle) * player.speed;
        } else {
            player.xa = (shared.input.right - shared.input.left) * player.speed;
            player.ya = (shared.input.down - shared.input.up) * player.speed;
        }

        if(shared.input.shift === true) {
            if(player.god === true){
                player.xa *= 5;
                player.ya *= 5;
            } else {
                player.xa *= 0.5;
                player.ya *= 0.5;
            }
        }

        if(player.ship === false){
            player.xv += player.xa * player.axisSpeedMultX;
            player.yv += player.ya * player.axisSpeedMultY;
        } else {
            player.shipAngle += player.xa * player.shipTurnSpeed;

            player.xv -= Math.cos(player.shipAngle) * player.ya * player.axisSpeedMultX;
            player.yv -= Math.sin(player.shipAngle) * player.ya * player.axisSpeedMultY;
        }

        player.pos.x += player.xv;
        player.pos.y += player.yv;

        player.xv *= player.friction;
        player.yv *= player.friction;
    } else if(shared.dragging === true && player.dead === false){
        if(player.axisSpeedMultX === 0 || player.axisSpeedMultY === 0) angle = Math.atan2((shared.mouseY - player.pos.y), (shared.mouseX - player.pos.x));
        else angle = Math.atan2((shared.mouseY - player.pos.y) * player.axisSpeedMultX, (shared.mouseX - player.pos.x) * player.axisSpeedMultY);
        player.xv = Math.cos(angle) * player.speed * player.axisSpeedMultX;
        player.yv = Math.sin(angle) * player.speed * player.axisSpeedMultY;
        if(Math.abs(player.xv) > Math.abs(player.pos.x - shared.mouseX)) player.xv = shared.mouseX - player.pos.x;
        if(Math.abs(player.yv) > Math.abs(player.pos.y - shared.mouseY)) player.yv = shared.mouseY - player.pos.y;
        player.pos.x += player.xv;
        player.pos.y += player.yv; 
    } else {
        player.xv = player.yv = 0;
    }
    player.axisSpeedMultX = player.axisSpeedMultY = 1;

    if(player.stopForces === true){
        player.stopForces = false;
        player.forces.length = 0;
    } else {
        for(let i = 0; i < player.forces.length; i+=3){
            player.pos.x += player.forces[i];
            player.pos.y += player.forces[i+1];

            player.forces[i] *= player.forces[i+2];
            player.forces[i+1] *= player.forces[i+2];

            if(Math.abs(player.forces[i]) < 0.01 && Math.abs(player.forces[i+1]) < 0.01){
                player.forces.splice(i,3);
                i-=3;
                continue;
            }
        }
    }

    if(player.dead === true){
        player.forces.length = 0;
        player.renderRadius = player.lastAliveRadius;
        for(let i = 0; i < obstacles.length; i++){
            // obstacle simulation
            for(let j = 0; j < obstacles[i].simulate.length; j++){
                obstacles[i].simulate[j](obstacles[i], player);
            }
        }
    } else {
        player.lastAliveRadius = player.sat.r;
        if(player.god !== true){
            if(player.pos.x - player.sat.r < 0) player.pos.x = player.sat.r;
            else if(player.pos.x + player.sat.r > shared.mapDimensions.x) player.pos.x = shared.mapDimensions.x - player.sat.r;
            if(player.pos.y - player.sat.r < 0) player.pos.y = player.sat.r;
            else if(player.pos.y + player.sat.r > shared.mapDimensions.y) player.pos.y = shared.mapDimensions.y - player.sat.r;
        
            for(let i = 0; i < obstacles.length; i++){
                // collision (done before simulation because that is what last rendered frame sees)
                if(obstacles[i].sat.r !== undefined){
                    if(obstacles[i].startSlice !== undefined){
                        collided = testCircleSliceCircle(obstacles[i], player, res);
                    } else {
                        collided = SAT.testCircleCircle(obstacles[i].sat, player.sat, res);
                    }
                } else {
                    collided = SAT.testPolygonCircle(obstacles[i].sat, player.sat, res);
                }
                if(collided === true){
                    for(let j = 0; j < obstacles[i].effect.length; j++){
                        obstacles[i].effect[j](player, res, obstacles[i], i);
                    }
                }
                res.clear();// TODO: test if this is really needed
        
                // obstacle simulation
                for(let j = 0; j < obstacles[i].simulate.length; j++){
                    obstacles[i].simulate[j](obstacles[i], player);
                }
            }
        } else {
            // just do simulation if in godmode
            for(let i = 0; i < obstacles.length; i++){
                for(let j = 0; j < obstacles[i].simulate.length; j++){
                    obstacles[i].simulate[j](obstacles[i], player);
                }
            }
        }

        if(player.grapple === true){
            if(shared.input.action1 === true && player.grappleX === -1){
                let resetRadius = player.sat.r;
                player.sat.r = player.grappleRange;
                let closestAngle = 0;
                let priorityResetRadius = 0;
                let grapPointPriority = false;
                for(let i = 0; i < obstacles.length; i++){
                    if(obstacles[i].isGrapplePoint === true && grapPointPriority === false){
                        priorityResetRadius = player.sat.r;
                        player.sat.r = player.grappleRange;
                    }

                    if(obstacles[i].sat.r !== undefined){
                        if(obstacles[i].startSlice !== undefined){
                            collided = testCircleSliceCircle(obstacles[i], player, res);
                        } else {
                            collided = SAT.testCircleCircle(obstacles[i].sat, player.sat, res);
                        }
                    } else {
                        collided = SAT.testPolygonCircle(obstacles[i].sat, player.sat, res);
                    }
                    
                    if(obstacles[i].isGrapplePoint === true){
                        if(collided === true){
                            grapPointPriority = true;
                            player.sat.r -= res.overlap;
                            closestAngle = Math.atan2(res.overlapN.y, res.overlapN.x);
                        } else if(grapPointPriority === false){
                            player.sat.r = priorityResetRadius;
                        }
                    } else if(collided === true && grapPointPriority === false){
                        player.sat.r -= res.overlap;
                        closestAngle = Math.atan2(res.overlapN.y, res.overlapN.x);
                    }
                    
                    res.clear();// TODO: test if this is really needed
                }

                if(player.sat.r < player.grappleRange){
                    player.sat.r = Math.max(player.sat.r, 0);
                    player.grappleX = player.pos.x - Math.cos(closestAngle) * player.sat.r;
                    player.grappleY = player.pos.y - Math.sin(closestAngle) * player.sat.r;
                }
                player.sat.r = resetRadius;
            } else if(player.grappleX !== -1){
                if(shared.input.action1 === false){
                    player.grappleX = player.grappleY = -1;
                } else {
                    let grappleLen = Math.sqrt((player.pos.x - player.grappleX) ** 2 + (player.pos.y - player.grappleY) ** 2);
                    let grappleAngle = Math.atan2(player.grappleY - player.pos.y, player.grappleX - player.pos.x);

                    player.forces.push(
                        Math.cos(grappleAngle) * grappleLen * player.grappleForce,
                        Math.sin(grappleAngle) * grappleLen * player.grappleForce,
                        player.grappleFric
                    );
                }
            }
        }

        const v = shared.colors.vignette;
        for(let key in v.innerInterp){
            v.innerInterp[key] = interpolate(v.innerInterp[key], v.inner[key], 0.03);
        }
        for(let key in v.outerInterp){
            v.outerInterp[key] = interpolate(v.outerInterp[key], v.outer[key], 0.03);
        }
    }

    for(let i = 0; i < shared.players.length; i++){
        const p = shared.players[i];
        if(p === undefined) continue;
        if((p.interpX-p.pos.x)**2+(p.interpY-p.pos.y)**2>352**2){
            p.interpX = p.pos.x;
            p.interpY = p.pos.y;
        }
        p.interpX = interpolate(p.interpX, p.pos.x, 0.4);
        p.interpY = interpolate(p.interpY, p.pos.y, 0.4);
        p.renderRadius = interpolate(p.renderRadius, p.sat.r, 1 / 5.4);
    }

    if(player.touchingNormalIndexes.length !== 0 || player.lastTouchingNormalIndexes.length !== 0){
        player.lastTouchingNormalIndexes = player.touchingNormalIndexes;
        player.touchingNormalIndexes = [];
    }

    if(player.onSafe === true){
        player.onSafe = false;
        if(player.timeTrapOverrideSafe === true){
            player.timeTrapOverrideSafe = false;
        } else {
            player.dead = false;
        }
    }

    if(player.deathTimer === true){
        player.deathTime--;
        if(player.deathTime < 0 || player.dead === true){
            player.deathTime = Infinity;
            player.deathTimer = false;
            player.dead = true;

            shared.u4[0] = 14;
            shared.send(shared.u4);
        }
    }

    // bounding the player by the walls
    player.touchingWall = false;
    if(player.sat.r > 900) player.sat.r = 900;

    if(player.god !== true){
        if(player.pos.x - player.sat.r < 0){
            player.pos.x = player.sat.r;
            player.touchingWall = true;
        } else if(player.pos.x + player.sat.r > shared.mapDimensions.x){
            player.pos.x = shared.mapDimensions.x - player.sat.r;
            player.touchingWall = true;
        }
        if(player.pos.y - player.sat.r < 0){
            player.pos.y = player.sat.r;
            player.touchingWall = true;
        } else if(player.pos.y + player.sat.r > shared.mapDimensions.y){
            player.pos.y = shared.mapDimensions.y - player.sat.r;
            player.touchingWall = true;
        }
    } else {
        player.dead = false;
    }

    if(shared.tickFns.length > 0){
        for(let i = 0; i < shared.tickFns.length; i++){
            shared.tickFns[i]();
        }
        shared.tickFns.length = 0;
    }

    // scrolling if specified by a simulate type
    if(toScroll === true){
        toScroll = false;
        if(shared.dragging === true) window.onmouseup();
        scroll();
    }

    window.frames++;
}

let runningOverlapN = new SAT.Vector(), runningOverlapV = new SAT.Vector();
const testCircleSliceCircle = shared.testCircleSliceCircle = (circleSlice, circle, res) => {
    let collisionAngle, collisionDistSq, gts, lte, angleOverflow, collided = false;

    // do circle first, then slices. If we collide with the circle then we don't want to collide w/ slices
    collisionAngle = Math.atan2(circle.pos.y - circleSlice.pos.y, circle.pos.x - circleSlice.pos.x);
    if(collisionAngle < 0) collisionAngle += Math.PI * 2;

    gts = circleSlice.startSliceAngle < collisionAngle;
    lte = collisionAngle < circleSlice.endSliceAngle;
    
    angleOverflow = circleSlice.startSliceAngle > circleSlice.endSliceAngle;

    if(angleOverflow === true ? (gts === true || lte === true) : (gts === true && lte === true)){
        collided = SAT.testCircleCircle(circleSlice.sat, circle.sat, res);

        if(collided === true){
            collisionDistSq = (circle.pos.y - circleSlice.pos.y) ** 2 + (circle.pos.x - circleSlice.pos.x) ** 2;

            if(collisionDistSq > ((circleSlice.innerRadius + circleSlice.sat.r + circle.sat.r) / 2) ** 2){
                // normal circle collision
                return true;
            } else {
                if(collisionDistSq <= (circleSlice.innerRadius - circle.sat.r) ** 2){
                    // we're too far inside, no collision
                    res.clear();
                    res.overlapN.x = res.overlapN.y = 0;
                    res.overlapV.x = res.overlapV.y = 0;
                    return false;
                } else {
                    // we're inside the circle - bound the opp way
                    res.overlapN = res.overlapN.scale(-1,-1);
                    res.overlap = (circleSlice.sat.r - circleSlice.innerRadius + circle.sat.r * 2) - res.overlap;
                    res.overlapV = new SAT.Vector(res.overlapN.x * res.overlap, res.overlapN.y * res.overlap);
                    return true;
                }
            }
        }
    }

    if(Math.abs((circleSlice.startSliceAngle - circleSlice.endSliceAngle) % (Math.PI * 2)) < 0.001){
        // circle slices are on top of each other. We missed collision with the circle, so we're done
        return false;
    }

    runningOverlapN.x = runningOverlapN.y = 0;
    runningOverlapV.x = runningOverlapV.y = 0;

    // collision with startSlice
    if(SAT.testPolygonCircle(circleSlice.startSlice, circle.sat, res) === true){
        collided = true;
        runningOverlapN.x += res.overlapN.x;
        runningOverlapN.y += res.overlapN.y;
        runningOverlapV.x += res.overlapV.x;
        runningOverlapV.y += res.overlapV.y;
        res.clear();
        res.overlapN.x = res.overlapN.y = 0;
        res.overlapV.x = res.overlapV.y = 0;
    }
    
    // collision with endSlice
    collided ||= SAT.testPolygonCircle(circleSlice.endSlice, circle.sat, res);

    res.overlapN.x += runningOverlapN.x;
    res.overlapN.y += runningOverlapN.y;
    res.overlapN = res.overlapN.normalize();
    res.overlapV.x += runningOverlapV.x;
    res.overlapV.y += runningOverlapV.y;
    res.overlap = res.overlapV.x / res.overlapN.x;

    return collided;
}

// 0 - circle, 1 - polygon
const collisionMatrix = [
    SAT.testCircleCircle, SAT.testCirclePolygon,
    SAT.testPolygonCircle, SAT.testPolygonPolygon
]
shared.collide = (a,b) => {
    res.hasCollided = collisionMatrix[(a.sat.r === undefined) * 2 + (b.sat.r === undefined)](a.sat, b.sat, res);
    return res;// make sure to clear after use!
}
shared.boundAB = (a,b) => {
    const res = shared.collide(a,b);
    if(res.hasCollided === true) {
        a.pos.x -= res.overlapV.x;
        a.pos.y -= res.overlapV.y;
    }
    res.clear();
}
shared.isABColliding = (a,b) => {
    if(a === undefined || b === undefined) return false;
    const res = shared.collide(a,b);
    const hasCollided = res.hasCollided;
    res.clear();
    return hasCollided;
}

const satMap = [
    /*circle*/
    (p) => {
        // x,y,r
        return new SAT.Circle(new SAT.Vector(p.x, p.y), p.r);
    },
    /*rectangle*/
    (p) => {
        // x,y,w,h
        return new SAT.Box(new SAT.Vector(p.x, p.y), p.w, p.h).toPolygon();
    },
    /*polygon*/
    (p) => {
        // points: [[x,y], ...]
        if(p.points.length < 2) p.points = shared.satDefaultMap[2].points;
        p.x = 0; p.y = 0;
        const s = new SAT.Polygon(new SAT.Vector(), p.points.map(pt => new SAT.Vector(pt[0], pt[1])));
        s.pos.x = p.x;
        s.pos.y = p.y;
        return s;
    },
    /*text*/
    (p) => {
        if(shared.isServer === true) return new SAT.Box(new SAT.Vector(p.x, p.y), 100, 100).toPolygon();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${p.fontSize}px Inter`;
        const dimensions = ctx.measureText(p.text);
        const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
        const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;
        const s = new SAT.Box(new SAT.Vector(p.x - w / 2, p.y - h / 2), w, h).toPolygon();
        return s;
    },
    /*circleSlice*/
    (p) => {
        const sat = new SAT.Circle(new SAT.Vector(p.x, p.y), p.r);
        const o = p;
        o.startSliceAngle %= Math.PI * 2;
        o.endSliceAngle %= Math.PI * 2;
        if(o.startSliceAngle < 0) o.startSliceAngle += Math.PI * 2;
        if(o.endSliceAngle < 0) o.endSliceAngle += Math.PI * 2;
        o.startSlice = new SAT.Polygon(new SAT.Vector(), [
            new SAT.Vector(Math.cos(o.startSliceAngle) * o.r, Math.sin(o.startSliceAngle) * o.r),
            new SAT.Vector(Math.cos(o.startSliceAngle) * o.innerRadius, Math.sin(o.startSliceAngle) * o.innerRadius),
        ]);
        o.endSlice = new SAT.Polygon(new SAT.Vector(), [
            new SAT.Vector(Math.cos(o.endSliceAngle) * o.r, Math.sin(o.endSliceAngle) * o.r),
            new SAT.Vector(Math.cos(o.endSliceAngle) * o.innerRadius, Math.sin(o.endSliceAngle) * o.innerRadius),
        ]);
        o.startSlice.pos = o.endSlice.pos = sat.pos;
        if(p.startSliceAngleRotateSpeed !== 0 || p.endSliceAngleRotateSpeed !== 0){
            p.circleSliceRotate = (o) => {
                o.startSliceAngle += o.startSliceAngleRotateSpeed;
                o.endSliceAngle += o.endSliceAngleRotateSpeed;
                o.startSliceAngle %= Math.PI * 2;
                o.endSliceAngle %= Math.PI * 2;
                if(o.startSliceAngle < 0) o.startSliceAngle += Math.PI * 2;
                if(o.endSliceAngle < 0) o.endSliceAngle += Math.PI * 2;
                o.startSlice.setPoints([
                    new SAT.Vector(Math.cos(o.startSliceAngle) * o.sat.r, Math.sin(o.startSliceAngle) * o.sat.r),
                    new SAT.Vector(Math.cos(o.startSliceAngle) * o.innerRadius, Math.sin(o.startSliceAngle) * o.innerRadius),
                ]);
                o.endSlice.setPoints([
                    new SAT.Vector(Math.cos(o.endSliceAngle) * o.sat.r, Math.sin(o.endSliceAngle) * o.sat.r),
                    new SAT.Vector(Math.cos(o.endSliceAngle) * o.innerRadius, Math.sin(o.endSliceAngle) * o.innerRadius),
                ])
                o.startSlice.pos = o.endSlice.pos = o.sat.pos;
            }
        }
        return sat;
    }
];

// font loading fix
function fixFonts() {
    const os = shared.obstacles;
    for(let i = 0; i < os.length; i++){
        if(os[i].isText !== true) continue;
        const oldDimensions = os[i].dimensions;
        os[i].dimensions = generateDimensions(os[i]);
        os[i].pos.x += (oldDimensions.x - os[i].dimensions.x) / 2;
        os[i].pos.y += (oldDimensions.y - os[i].dimensions.y) / 2;
        os[i].topLeft = generateTopLeftCoordinates(os[i]);
    }
}
setTimeout(fixFonts, 1000);
setTimeout(fixFonts, 3000);

function generateDimensions(o){
    const sat = o.sat;
    if(sat.r !== undefined){
        return {
            x: sat.r * 2,
            y: sat.r * 2
        }
    }
    
    // if(o.isText === true){
    //     ctx.textAlign = 'center';
    //     ctx.textBaseline = 'middle';
    //     ctx.font = `${o.fontSize}px Inter`;
    //     const dimensions = ctx.measureText(o.text);
    //     o.wOffset = (dimensions.actualBoundingBoxRight - dimensions.actualBoundingBoxLeft) / 2;
    //     o.hOffset = (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2; // *0.75?
    //     // if(o.rotation === undefined){
    //         // return {
    //         //     x: dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft,
    //         //     y: dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent,
    //         // }
    //     // }
    //     // const x = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
    //     // const y = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;

    //     // const c = Math.cos(o.rotation); const s = Math.sin(o.rotation);
    //     // return {
    //     //     x: x * c + y * s,
    //     //     y: x * s + y * c
    //     // }
    // }
    
    let top, right, bottom, left;
    bottom = right = -Infinity;
    top = left = Infinity;
    for(let p of sat.points){
        if(p.x < left) left = p.x;
        if(p.x > right) right = p.x;
        if(p.y > bottom) bottom = p.y;
        if(p.y < top) top = p.y;
    }

    return {
        x: right - left,
        y: bottom - top
    }
}
shared.generateDimensions = generateDimensions;

function generateTopLeftCoordinates(o){
    let topLeftX = o.pos.x, topLeftY = o.pos.y;
    if(o.sat.r !== undefined) {
        topLeftX -= o.sat.r;
        topLeftY -= o.sat.r; 
    } else {
        let minX = Infinity;
        let minY = Infinity;
        for(let i = 0; i < o.sat.points.length; i++){
            if(o.sat.points[i].x < minX) minX = o.sat.points[i].x;
            if(o.sat.points[i].y < minY) minY = o.sat.points[i].y;
        }
        topLeftX += minX;
        topLeftY += minY;
    }
    return {x: topLeftX, y: topLeftY};
}
shared.generateTopLeftCoordinates = generateTopLeftCoordinates;

shared.satMapI2N = [
    'circle',
    'rectangle',
    'polygon',
    'text',
    'circleSlice'
];

shared.satConstraintsMap = [
    undefined,
    undefined,
    undefined,
    {fontSize: [1]},
    undefined,
];

shared.satDefaultMap = [
    // circle
    {
        x: 300,
        y: 100,
        r: 100
    },
    // rectangle
    {
        x: 0,
        y: 0,
        w: 200,
        h: 200
    },
    // polygon
    {
        points: [[0,400],[50,200],[150,200],[200,400]],
    },
    // text
    {
        x: 300,
        y: 250,
        text: 'Text',
        fontSize: 80,
    },
    // circleSlice
    {
        x: 300,
        y: 300,
        r: 100,
        innerRadius: 50,
        startSliceAngle: 0,
        endSliceAngle: Math.PI,
        startSliceAngleRotateSpeed: 0,
        endSliceAngleRotateSpeed: 0
    }
]

const TAU = Math.PI * 2;
const renderShapeMap = [
    /*circle*/
    (o) => {
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, TAU);
    },
    /*rectangle*/
    (o) => {
        // o.sat.calcPoints[0] is at 0,0 so we can drop that from the first two args
        if(o.rotation !== undefined){
            renderShapeMap[2](o);
            return;
        }
        ctx.rect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y);
    },
    /*polygon*/
    (o) => {
        for(let i = 0; i < o.sat.points.length; i++){
            ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        }
        ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
    },
    /*text*/
    (o) => {
        // draw rectangle for clipping purposes
        renderShapeMap[1](o);
    },
    /*circleSlice*/
    (o) => {
        ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
        ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);
        if(o.innerRadius !== 0)ctx.arc(o.pos.x, o.pos.y, o.innerRadius, o.endSliceAngle, o.startSliceAngle, true);
    }
]

const initSimulateMap = [
    /*pathMove*/
    (o, init) => {
		o.path = init.path;// like [[x,y,speed], ...]

        // filtering out consecutive duplicates
        for(let i = o.path.length-1; i >= 1; i--){
            if(o.path[i][0] === o.path[i-1][0] && o.path[i][1] === o.path[i-1][1]) o.path.splice(i,1);
        }

        if(o.path.length < 2) o.path = shared.simulateDefaultMap[0].path;

        o.currentPoint = Math.floor(init.currentPoint) % o.path.length;

        o.pointOn = o.path[o.currentPoint];
        o.speed = o.pointOn[2];
        
        let nextPointIndex = o.currentPoint + 1;
        if (nextPointIndex === o.path.length) nextPointIndex = 0;
        
        o.pointTo = o.path[nextPointIndex];
        angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
        o.xv = Math.cos(angle) * o.speed;
        o.yv = Math.sin(angle) * o.speed;

        o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
        
        const fractionalPointOffset = init.currentPoint - Math.floor(init.currentPoint);
        if(fractionalPointOffset !== 0){
            const newTimeRemain = o.timeRemain * (1 - fractionalPointOffset);
            const delta = o.timeRemain - newTimeRemain;
            o.pos.x += delta * o.xv;
            o.pos.y += delta * o.yv;
            o.timeRemain = newTimeRemain;
        }

        o.pos.x += o.pointOn[0] - o.path[0][0];
        o.pos.y += o.pointOn[1] - o.path[0][1];
    },
    // /*rotate*/
    (o, init) => {
        o.pivotX = init.pivotX;
        o.pivotY = init.pivotY;
        o.rotation = 0;
        if(init.initialRotation !== 0 && init.initialRotation !== undefined){
            o.rotateSpeed = init.initialRotation;
            simulateMap[1](o);
        }
        o.rotateSpeed = init.rotateSpeed;
    },
    // /*grow*/
    (o, init) => {
        o.growSpeed = init.growSpeed;
        o.shrinkSpeed = init.shrinkSpeed;
        o.maxGrowth = init.maxGrowth;
        o.minGrowth = init.minGrowth;
        o.growing = init.toStartGrowing;
        o.growth = o.lastGrowth = init.startGrowth;
        o.growPivotX = init.growPivotX;
        o.growPivotY = init.growPivotY;
    },
    // /*custom*/
    () => {},
    // /*id*/
    (o, init) => {
        let id = init.id.toString().trim();
        if(shared.idToObs[id] !== undefined && environment === 'editor') alert(`Warning! Duplicate id "${id}" found! Duplicate ids override each other.`);
        shared.idToObs[id] = o;
    },
    // /*rotateHoming*/
    (o, init) => {
        o.toRest = init.toRest;
        o.restAngles = init.restAngles;
        o.homingRotateSpeed = init.homingRotateSpeed;
        o.rotation = 0;
        o.detectionRadiusSquared = init.detectionRadius ** 2;
        o.spokeAngles = init.spokeAngles;// array of angles of spokes
        o.pivotX = init.pivotX;
        o.pivotY = init.pivotY;
    }
]

const simulateMap = shared.simulateMap = [
    /*pathMove*/
    (o) => {
        o.pos.x += o.xv;
        o.pos.y += o.yv;

        o.timeRemain--;
        if (o.timeRemain <= 0) {
            o.currentPoint++;
            if (o.currentPoint === o.path.length) o.currentPoint = 0;
            
            o.pointOn = o.path[o.currentPoint];
            o.speed = o.pointOn[2];
    
            // snapping back to the point that we should be on
            o.pos.x += o.xv * o.timeRemain;
            o.pos.y += o.yv * o.timeRemain;
    
            let nextPointIndex = o.currentPoint + 1;
            if (nextPointIndex === o.path.length) nextPointIndex = 0;
            
            o.pointTo = o.path[nextPointIndex];
    
            angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
            o.xv = Math.cos(angle) * o.speed;
            o.yv = Math.sin(angle) * o.speed;
            
            let dist = Math.sqrt((o.pointOn[0]-o.xv*o.timeRemain - o.pointTo[0])**2 + (o.pointOn[1]-o.yv*o.timeRemain - o.pointTo[1])**2);
            
            if((o.xv ** 2 + o.yv ** 2) * (o.timeRemain ** 2) > dist){
                // we've overshot the next point, just stay on the inital point (no sync)
                dist = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2);
            } else {
                // correct to next pt (sync)
                o.pos.x -= o.xv * o.timeRemain;
                o.pos.y -= o.yv * o.timeRemain;
            }

            // time = distance / speed
            o.timeRemain = dist / o.speed;
        }

        o.topLeft = shared.generateTopLeftCoordinates(o);
    },
    /*rotate*/
    (o) => {
        if(o.sat.r !== undefined){
            o.pos.x -= o.pivotX;
            o.pos.y -= o.pivotY;
            o.sat.rotate(o.rotateSpeed);
            o.pos.x += o.pivotX;
            o.pos.y += o.pivotY;
        } else {
            o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
            o.sat.rotate(o.rotateSpeed);
            o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
        }
        
        o.rotation += o.rotateSpeed;
        o.dimensions = generateDimensions(o);
        o.topLeft = shared.generateTopLeftCoordinates(o);
    },
    /*grow*/
    (o) => {
        if(o.growing === true) {
            o.growth += o.growSpeed;
            if(o.growth >= o.maxGrowth){
                o.growing = false;
                o.growth = o.maxGrowth;
            }
        }
        else {
            o.growth -= o.shrinkSpeed;
            if(o.growth <= o.minGrowth){
                o.growing = true;
                o.growth = o.minGrowth;
            }
        }

        const growthRatio = o.growth / o.lastGrowth;

        if(o.sat.r !== undefined){
            // circle
            o.pos.x -= o.growPivotX;
            o.pos.y -= o.growPivotY;
            o.pos.x *= growthRatio;
            o.pos.y *= growthRatio;
            o.pos.x += o.growPivotX;
            o.pos.y += o.growPivotY;

            o.sat.r *= growthRatio;
        } else {
            // poly
            for(let i = 0; i < o.sat.points.length; i++){
                o.sat.points[i].x += o.pos.x - o.growPivotX;
                o.sat.points[i].y += o.pos.y - o.growPivotY;
                o.sat.points[i].x *= growthRatio;
                o.sat.points[i].y *= growthRatio;
                o.sat.points[i].x -= o.pos.x - o.growPivotX;
                o.sat.points[i].y -= o.pos.y - o.growPivotY;
            }
            o.sat.setPoints(o.sat.points);

            if(o.isText === true){
                o.fontSize *= growthRatio;
            }
        }

        o.topLeft = generateTopLeftCoordinates(o);
        o.dimensions = generateDimensions(o);
        o.lastGrowth = o.growth;
    },
    /*custom*/
    () => {},
    /*id*/
    () => {},
    /*rotateHoming*/
    (o, p) => {
        let middleX = o.topLeft.x + o.dimensions.x/2;
        let middleY = o.topLeft.y + o.dimensions.y/2; 

        if(p.dead === true || (p.pos.x - middleX)**2 + (p.pos.y - middleY) ** 2 > o.detectionRadiusSquared) {
            if(o.toRest === false) return;

            let minSpokeAngularDist = Infinity;

            for(let i = 0; i < o.restAngles.length; i++){
                let angleDist = shortAngleDist(o.rotation, o.restAngles[i]);
                if(Math.abs(angleDist) < Math.abs(minSpokeAngularDist)){
                    minSpokeAngularDist = angleDist;
                }
            }

            if(minSpokeAngularDist === Infinity) return;

            if(Math.abs(minSpokeAngularDist) < o.homingRotateSpeed) o.rotateSpeed = minSpokeAngularDist;
            else o.rotateSpeed = Math.sign(minSpokeAngularDist) * o.homingRotateSpeed;
            simulateMap[1](o);
            return;
        }

        angle = Math.atan2(p.pos.y - middleY, p.pos.x - middleX);

        let minSpokeAngularDist = Infinity;

        for(let i = 0; i < o.spokeAngles.length; i++){
            let angleDist = shortAngleDist(o.spokeAngles[i] + o.rotation, angle);
            if(Math.abs(angleDist) < Math.abs(minSpokeAngularDist)){
                minSpokeAngularDist = angleDist;
            }
        }

        if(minSpokeAngularDist === Infinity) return;

        if(Math.abs(minSpokeAngularDist) < o.homingRotateSpeed) o.rotateSpeed = minSpokeAngularDist;
        else o.rotateSpeed = Math.sign(minSpokeAngularDist) * o.homingRotateSpeed;

        simulateMap[1](o);
    }
]

function shortAngleDist(a0,a1) {
    let da = (a1 - a0) % TAU;
    return 2*da % TAU - da;
}

shared.simulateMapI2N = [
    'pathMove',
    'rotate',
    'grow',
    'custom',
    'id',
    'rotateHoming',
]

shared.simulateDefaultMap = [
    // pathMove
    {
        currentPoint: 0,
        path: [[0,0,2],[50,0,1],[-50,0,2]],
    },
    // rotate
    {
        initialRotation: 0,
        rotateSpeed: 0.01,
        pivotX: 300,
        pivotY: 100
    },
    // grow
    {
        growSpeed: 0.006,
        shrinkSpeed: 0.006,
        maxGrowth: 1.25,
        minGrowth: 1,
        startGrowth: 1,
        toStartGrowing: true,
        growPivotX: 100,
        growPivotY: 300
    },
    // custom
    {},
    // id
    {
        id: 'uniqueId'
    },
    // rotateHoming
    {
        toRest: true,
        restAngles: [0, Math.PI],
        homingRotateSpeed: 0.01,
        detectionRadius: 200,
        spokeAngles: [0, Math.PI],
        pivotX: 300,
        pivotY: 300
    }
]

shared.simulateConstraintsMap = [
    {currentPoint: [0]},
    undefined,
    {growSpeed: [0], shrinkSpeed: [0], minGrowth: [0.001], maxGrowth: [0.001]},
    undefined,
    undefined,
];

const simulateSyncKeys = [
    /*pathMove*/
    (o, sync) => {
        sync.x = o.pos.x;
        sync.y = o.pos.y;
        const maxTimeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
        sync.currentPoint = o.currentPoint + (1 - o.timeRemain / maxTimeRemain);
    },
    // /*rotate*/
    (o, sync) => {
        if(o.rotateSpeed === 0) return false;
        sync.initialRotation = o.rotation;
    },
    // /*grow*/
    undefined,
    // /*custom*/
    undefined,
    // /*id*/
    undefined,
    // /*rotateHoming*/
    undefined,
]

const applySimulateSyncKeys = [
    /*pathMove*/
    (o, init) => {
        if(Number.isFinite(init.x + init.y + init.currentPoint) === false) return;
        init.path = o.path;
        initSimulateMap[0](o, init);
        o.pos.x = init.x;
        o.pos.y = init.y;
    },
    // /*rotate*/
    (o, init) => {
        if(Number.isFinite(init.initialRotation) === false) return;
        const r = init.initialRotation;
        init.initialRotation -= o.rotation;
        init.pivotX = o.pivotX;
        init.pivotY = o.pivotY;
        init.rotateSpeed = o.rotateSpeed;
        initSimulateMap[1](o, init);
        o.rotation = r;
    },
    // /*grow*/
    undefined,
    // /*custom*/
    undefined,
    // /*id*/
    undefined,
    // /*rotateHoming*/
    undefined,
]

const initEffectMap = [
    /*bound*/
    () => {},
    /*kill*/
    (o, params) => {
        o.boundPlayer = params.boundPlayer ?? false;
    },
    /*bounce*/
    (o, params) => {
        // bounciness, decay
        o.bounciness = params.bounciness;
        o.decay = params.decay;
    },
    /*custom*/
    () => {},
    /*customImage*/
    (o, params) => {
        o.img = typeof Image === 'undefined' ? {} : new Image();
        o.img.src = params.url;
        o.imgLoaded = false;
        o.img.onload = () => {o.imgLoaded = true;}
    },
    /*stopForces*/
    () => {},
    /*winpad*/
    (o, params) => {
        o.isWinpad = true;
    },
    /*coin*/
    (o, params) => {
        o.collected = false;
        o.coinAmount = params.coinAmount;
        o.color = params.color;
    },
    /*coindoor*/
    (o, params) => {
        o.isCoindoor = true;
        o.maxCoins = o.coins = params.coindoorCoinAmount;
        o.coinDoorColor = params.coinDoorColor;
    },
    /*checkpoint*/
    (o, params) => {
        o.checkpointCollected = false;
        o.checkpointOffsetX = params.checkpointOffsetX;
        o.checkpointOffsetY = params.checkpointOffsetY;
    },
    /*breakable*/
    (o, params) => {
        o.maxStrength = params.maxStrength;//60
        o.strength = o.maxStrength;
        o.regenTime = params.regenTime;
        o.lastBrokeTime = -1E99;
        o.healSpeed = params.healSpeed;
    },
    /*safe*/
    () => {},
    /*tp*/
    (o, params) => {
        o.tpx = params.tpx;
        o.tpy = params.tpy;
    },
    /*conveyor*/
    (o, params) => {
        o.conveyorForce = params.conveyorForce;
        o.conveyorAngle = params.conveyorAngle * Math.PI / 180;
        o.conveyorAngleRotateSpeed = params.conveyorAngleRotateSpeed * Math.PI/180;
        o.conveyorFriction = params.conveyorFriction;
    },
    /*platformer*/
    (o, params) => {
        o.platformerForce = params.platformerForce;
        o.platformerAngle = params.platformerAngle * Math.PI/180;
        o.platformerAngleRotateSpeed = params.platformerAngleRotateSpeed * Math.PI/180;
        o.platformerFriction = params.platformerFriction;

        // o.maxJumps = params.maxJumps// TODO: IMPLEMENT JUMPS. also TODO: add a preserve jump parameter that makes jumps conserve even if you are not bounded that frame. If disabled, platformer only lets you jump when you're on a plat THAT FRAME
        o.maxJumpCooldown = params.maxJumpCooldown;// in ticks
        o.jumpCooldown = 0;
        o.jumpForce = params.jumpForce;
        o.jumpFriction = params.jumpDecay;

        o.canJumpMidair = params.canJumpMidair;
        o.midairStoredJump = false;
        o.justJumped = false;

        o.jumpForceObj = {playerForceId: undefined};

        o.touchingPlatformer = false;
        o.canJump = false;
    },
    /*restrictAxis*/
    (o, params) => {
        o.axisSpeedMultX = params.axisSpeedMultX;
        o.axisSpeedMultY = params.axisSpeedMultY;
    },
    /*snapGrid*/
    (o, params) => {
        o.toSnapX = params.toSnapX;
        o.toSnapY = params.toSnapY;
        o.snapDistanceX = params.snapDistanceX;
        o.snapDistanceY = params.snapDistanceY;
        o.snapCooldown = o.maxSnapCooldown = params.snapCooldown;
        o.snapAngle = params.snapAngle * Math.PI / 180;
        o.snapCollided = false;
        o.snapAngleRotateSpeed = params.snapAngleRotateSpeed * Math.PI/180;

        o.interpolatePlayerData = {time: 0, nextX: -1, nextY: -1};
        // o.snapDistanceX = Math.max(35, o.snapDistanceX);
        // o.snapDistanceY = Math.max(35, o.snapDistanceY);
        
        o.snapMagnitude = Math.sqrt(o.snapDistanceX ** 2 + o.snapDistanceY ** 2); //(o.snapDistanceX + o.snapDistanceY)/2
    },
    /*timeTrap*/
    (o, params) => {
        o.timeTrapTime = o.timeTrapMaxTime = params.timeTrapMaxTime;
        o.timeTrapRecoverySpeed = params.timeTrapRecoverySpeed;
        o.timeTrapToKill = params.timeTrapToKill;
        o.timeTrapToShowTenth = params.timeTrapToShowTenth;
        o.timeTrapIntersecting = false;
    },
    /*changeSize*/
    (o, params) => {
        o.sizeMult = params.sizeMult;
        o.sizeChangePermanent = params.sizeChangePermanent;
        o.lastChangeSizeColliding = o.changeSizeColliding = false;
    },
    /*changeSpeed*/
    (o, params) => {
        o.speedMult = params.speedMult;
        o.speedChangePermanent = params.speedChangePermanent;
    },
    /*solidColor*/
    (o, params) => {
        o.hex = params.hex;
        o.alpha = params.alpha;
    },
    /*invisible*/
    (o, params) => {
        o.cr = ()=>{};
    },
    /*changeMap*/
    (o, params) => {
        o.mapName = params.mapName;
        o.difficulty = shared.mapDifficulties[params.mapName] ?? 0;
        o.toCustomPlanet = params.toCustomPlanet;
    },
    /*tornado*/
    (o, params) => {
        o.tornadoStrength = params.tornadoStrength;
    },
    /*changeVignette*/
    (o, params) => {
        o.innerR = params.innerR;
        o.innerG = params.innerG;
        o.innerB = params.innerB;
        o.innerSize = params.innerSize;
        o.innerOpacity = params.innerOpacity;

        o.outerR = params.outerR;
        o.outerG = params.outerG;
        o.outerB = params.outerB;
        o.outerSize = params.outerSize;
        o.outerOpacity = params.outerOpacity;
    },
    /*pushable*/
    (o, params) => {
        o.lastPushAngle = o.pushAngle = params.pushAngle * Math.PI / 180;
        o.maxPushDistance = params.maxPushDistance;
        o.idlePushBackSpeed = params.idlePushBackSpeed;
        o.pushConversionRatio = params.pushConversionRatio;
        o.positiveDirectionOnly = params.positiveDirectionOnly;
        o.pushAngleVecX = Math.cos(o.pushAngle);
        o.pushAngleVecY = Math.sin(o.pushAngle);
        o.pushPercent = 0;
    },
    /*changeMusic*/
    (o, params) => {
        // either a youtube url (https://youtube.com/watch/...) or a local filepath
        // that the client can access via a fetch req, e.g. sounds/... .mp3
        o.musicPath = params.musicPath;
        o.musicStartTime = params.musicStartTime;
    },
    /*changeShip*/
    (o, params) => {
        o.changeShipStateTo = params.changeShipStateTo;
        o.initialShipAngle = params.initialShipAngle;
        o.shipTurnSpeed = params.shipTurnSpeed;
    },
    /*changeGrapple*/
    (o, params) => {
        o.changeGrappleStateTo = params.changeGrappleStateTo;
        o.grappleRange = params.grappleRange;
        o.grappleForce = params.grappleForce;
        o.grappleFric = params.grappleFric;
    },
    /*changeDeathTimer*/
    (o, params) => {
        o.changeDeathTimerStateTo = params.changeDeathTimerStateTo;
        o.drainAmountWhileStandingOn = params.drainAmountWhileStandingOn;
        o.deathTime = params.deathTime;

        // for vignette
        for(let key in shared.effectDefaultMap[24]){
            o[key] = shared.effectDefaultMap[24][key];
        }

        o.innerR = o.outerR = 255;
    }
]

let freeVariable = -1;
const effectMap = [
    /*bound*/
    (p, res, o, id) => {
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
        p.touchingNormalIndexes.push(id);
    },
    /*kill*/
    (p, res, o) => {
        if(res.overlap > 1) {
            p.dead = true;
            if(o.boundPlayer === true){
                p.pos.x += res.overlapV.x;
                p.pos.y += res.overlapV.y;
            }
        }
    },
    /*bounce*/
    (p, res, o) => {
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;

        angle = Math.atan2(res.overlapV.y, res.overlapV.x);

        p.forces.push(
            Math.cos(angle) * o.bounciness,
            Math.sin(angle) * o.bounciness,
            o.decay
        )
    },
    /*custom*/
    () => {},
    /*customImage*/
    () => {},
    /*stopForces*/
    (p) => {
        p.stopForces = true;
    },
    /*winpad*/
    (p, res, o) => {
        if(environment === 'editor' || shared.standalone === true){
            if(shared.isExClient === true){
                if(shared.inClearCheckMode === true){
                    shared.inClearCheckMode = false;
                    shared.uploadCode();
                } else {
                    shared.respawnPlayer();
                }
            } else {
                // respawn
                shared.respawnPlayer();
                if(shared.inClearCheckMode === true){
                    shared.exitClearCheckMode();
                    uploadCode();
                }
            }
        } else if(shared.won !== true){
            shared.won = true;
            if(shared.isExClient === true){
                if(shared.mapPath === '/maps/winroom') shared.changeMap('/maps/hub');
                else {
                    shared.changeMap('/maps/winroom');
                    shared.mapsBeaten[shared.mapPath] = true;
                    localStorage.setItem('mapsBeaten', Object.keys(shared.mapsBeaten).join('|'));
                }
            } else {
                // scroll
                toScroll = true;

                if(shared.tutorial === true){
                    shared.beatCurrentTutorialMap();
                }
            }
        }
    },
    /*coin*/
    (p, res, o) => {
        if(o.collected === true){
            return;
        }
        o.collected = true;
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].isCoindoor === true && obstacles[i].coinDoorColor === o.color){
                obstacles[i].coins -= o.coinAmount;
            }
        }
    },
    /*coindoor*/
    (p, res, o) => {
        if(o.coins > 0){
            p.pos.x += res.overlapV.x;
            p.pos.y += res.overlapV.y;
        }
    },
    /*checkpoint*/
    (p, res, o) => {
        if(o.checkpointCollected === true) return;
        o.checkpointCollected = true;
        
        shared.spawnPosition.x = o.topLeft.x + o.dimensions.x / 2;
        shared.spawnPosition.y = o.topLeft.y + o.dimensions.y / 2;
    },
    /*breakable*/
    (p, res, o, id) => {
        if(o.strength > 0){
            p.pos.x += res.overlapV.x;
            p.pos.y += res.overlapV.y;
            o.strength--;
            if(o.strength < 0) o.strength = 0;
            p.touchingNormalIndexes.push(id);
        }

        // breakable obs shouldn't regenerate on top of you
        o.lastBrokeTime = window.frames;
    },
    /*safe*/
    (p, res, o) => {
        p.onSafe = true;
    },
    /*tp*/
    (p, res, o) => {
        // whoosh sound effect?
        p.pos.x = o.tpx;
        p.pos.y = o.tpy;
        p.renderRadius = Math.min(p.renderRadius, p.sat.r / 2);
    },
    /*conveyor*/
    (p, res, o) => {
        p.forces.push(Math.cos(o.conveyorAngle) * o.conveyorForce, Math.sin(o.conveyorAngle) * o.conveyorForce, o.conveyorFriction);
    },
    /*platformer*/
    (p, res, o, id) => {
        o.touchingPlatformer = true;
        o.jumpCooldown--;

        // add conveyor force
        p.forces.push(Math.cos(o.platformerAngle) * o.platformerForce, Math.sin(o.platformerAngle) * o.platformerForce, o.platformerFriction);

        // idea: find the amount of x/y the player moves in the platformer and move the opposite to effectively lock the player's motion perpendicular to the platformer's direction
        const playerVelAngle = Math.atan2(p.yv, p.xv);

        const angleBetween = o.platformerAngle - playerVelAngle;

        const distMovedOnPlatAngle = Math.cos(angleBetween) * Math.sqrt(p.yv ** 2 + p.xv ** 2) / p.friction;

        p.pos.x -= Math.cos(o.platformerAngle) * distMovedOnPlatAngle;
        p.pos.y -= Math.sin(o.platformerAngle) * distMovedOnPlatAngle;

        const touchingNormalThisFrame = p.touchingNormalIndexes.length !== 0 || (p.lastTouchingNormalIndexes[p.lastTouchingNormalIndexes.length-1] >= id && o.justJumped === false) || p.touchingWall === true;
        o.justJumped = false;

        // checking if we were either intersecting with a normal last frame that's indexed after the obs or we are intersecting with a normal rn
        if(o.jumpCooldown <= 0 && (touchingNormalThisFrame === true || (o.canJumpMidair === true && o.midairStoredJump === true))){
            o.midairStoredJump = o.midairStoredJump || touchingNormalThisFrame;
            o.canJump = true;
            if(Math.abs(shortAngleDist(o.platformerAngle + Math.PI, playerVelAngle)) < Math.PI * 0.48 && -Math.sqrt(p.xv**2+p.yv**2)*Math.cos(angleBetween)>.1){
                p.forces.push(-Math.cos(o.platformerAngle) * o.jumpForce, -Math.sin(o.platformerAngle) * o.jumpForce, o.jumpFriction);
                o.jumpCooldown = o.maxJumpCooldown;
                o.midairStoredJump = false;
                o.justJumped = true;
            }
        } else {
            o.canJump = false;
        }
    },
    /*restrictAxis*/
    (p, res, o) => {
        p.axisSpeedMultX *= o.axisSpeedMultX;
        p.axisSpeedMultY *= o.axisSpeedMultY;
    },
    /*snapGrid*/
    (p, res, o) => {
        // for those who haven't seen it, this is kind of my magnum opus of simulation functions.
        // Developed a few years back later presented at a conference. Ask me (serum) about it!
        // the basic idea of how it works is we have to snap to a rotated snap grid in space, so we
        // translate the player to the snapGrid until its like the snap grid is unrotated. Then we snap
        // by moduloing the x to the grid and then rotate back to get the final position.
        o.snapCooldown--;
        o.snapCollided = true;

        if(o.snapCooldown <= 0 && ((o.toSnapX === true && Math.abs(p.xv) > 0.01) || (o.toSnapY === true && Math.abs(p.yv) > 0.01))){
            o.snapCooldown = o.maxSnapCooldown;
            let playerSnapAngle = Math.atan2(o.toSnapY === true ? p.yv : 0, o.toSnapX === true ? p.xv : 0);
            o.interpolatePlayerData = {
                time: Math.min(o.maxSnapCooldown-1, 5),
                nextX: p.pos.x + Math.cos(playerSnapAngle) * o.snapMagnitude * 0.95,
                nextY: p.pos.y + Math.sin(playerSnapAngle) * o.snapMagnitude * 0.95
            };
        }

        if(o.interpolatePlayerData.time > 1){
            o.interpolatePlayerData.time--;
            p.pos.x = p.pos.x * 0.8 + 0.2 * o.interpolatePlayerData.nextX;
            p.pos.y = p.pos.y * 0.8 + 0.2 * o.interpolatePlayerData.nextY;
        } else {
            let middleX = o.topLeft.x + o.dimensions.x / 2;
            let middleY = o.topLeft.y + o.dimensions.y / 2;
            // in order to snap correctly, rotate both the p and the o the negative snapAngle relative to the o's center
            // this means that the player will be relatively correct to the obs and the obs will be axis-aligned
            let prt = {
                angle: Math.atan2(p.pos.y - middleY, p.pos.x - middleX) - o.snapAngle,
                distance: Math.sqrt((p.pos.y - middleY)**2 + (p.pos.x - middleX)**2)
            }

            prt.x = Math.cos(prt.angle) * prt.distance;
            prt.y = Math.sin(prt.angle) * prt.distance;

            // applying the transform just like the norotate snap that i coded earlier
            // in other words, snap the relative p to the relative grid
            if(o.toSnapX === true) prt.x = prt.x * 0.4 + 0.6 * (Math.round(prt.x / o.snapDistanceX) * o.snapDistanceX);
            if(o.toSnapY === true) prt.y = prt.y * 0.4 + 0.6 * (Math.round(prt.y / o.snapDistanceY) * o.snapDistanceY);

            prt.angle = Math.atan2(prt.y, prt.x) + o.snapAngle;
            prt.distance = Math.sqrt(prt.y**2 + prt.x**2);

            // rotating back
            // translating the relative coordinates back to absolute ones
            p.pos.x = Math.cos(prt.angle) * prt.distance + middleX;
            p.pos.y = Math.sin(prt.angle) * prt.distance + middleY;

            // checking if the original point was outside of the snapgrid as a result of rotation. If so, apply translations to make it right
            // if(p.pos.x < o.topLeft.x - p.speed || p.pos.x > o.topLeft.x + o.dimensions.x + p.speed){
            //     p.pos.x += Math.sign(p.xv) * o.snapDistanceX*0.6;
            // }

            // if(p.pos.y < o.topLeft.y - p.speed || p.pos.y > o.topLeft.y + o.dimensions.y + p.speed){
            //     p.pos.y += Math.sign(p.yv) * o.snapDistanceY*0.6;
            // }
        }
    },
    /*timeTrap*/
    (p, res, o) => {
        o.timeTrapIntersecting = true;
        o.timeTrapTime--;
        if(o.timeTrapTime < 0){
            if(o.timeTrapToKill === true) p.dead = p.timeTrapOverrideSafe = true;
            o.timeTrapTime = 0;
        }
    },
    /*changeSize*/
    (p, res, o) => {
        if(o.sizeMult < 1 && o.lastChangeSizeColliding === false){
            // if the player would not be colliding with the obstacle with the smaller radius,
            // don't scale the player to avoid frame 1 yes frame 2 no jitter effects

            // basically, we do this by effectively decreasing the obstacle's border radius (so poly would just be smaller poly)
            // if the player has not already collided. If the player is colliding, we already decreased the radius so there's no need to decrease the border
            res.clear();
            p.sat.r *= o.sizeMult;
            if(o.sat.r !== undefined){
                collided = SAT.testCircleCircle(o.sat, p.sat, res);
            } else {
                collided = SAT.testPolygonCircle(o.sat, p.sat, res);
            }
            p.sat.r /= o.sizeMult;
            if(collided === false){
                return;
            }
        }
        if(o.sizeChangePermanent === true){
            if(o.permanentSizeChangeDone === undefined){
                o.permanentSizeChangeDone = true;
                p.sat.r *= o.sizeMult;
            }
        }
        o.changeSizeColliding = true;
    },
    /*changeSpeed*/
    (p, res, o) => {
        if(o.speedChangePermanent === true){
            if(o.permanentSpeedChangeDone === undefined){
                o.permanentSpeedChangeDone = true;
                p.speed *= o.speedMult;
            }
        } else {
            p.axisSpeedMultX *= o.speedMult;
            p.axisSpeedMultY *= o.speedMult;
        }
    },
    /*solidColor*/
    (p, res, o) => {},
    /*invisible*/
    (p, res, o) => {},
    /*changeMap*/
    (p, res, o) => {
        if(shared.won === true) return;
        shared.won = true;
        if(shared.isExClient === true){
            if(o.toCustomPlanet === true && o.changeMapBroken === undefined){
                const headers = new Headers();
                headers.append('mapname', o.mapName);
                shared.changeMap('/customPlanet', 'GET', headers, ()=>{shared.won = false;o.changeMapBroken=true;});
            }
            else shared.changeMap('/maps/' + o.mapName);
        } else {
            // TODO: send user to the specified omni
        }
    },
    /*tornado*/
    (p, res, o) => {
        p.pos.x += Math.cos(Math.random() * 360) * o.tornadoStrength;
        p.pos.y += Math.sin(Math.random() * 360) * o.tornadoStrength;
    },
    /*changeVignette*/
    (p, res, o) => {
        const v = shared.colors.vignette;
        v.inner.r = o.innerR;
        v.inner.g = o.innerG;
        v.inner.b = o.innerB;
        v.inner.size = o.innerSize;
        v.inner.opacity = o.innerOpacity;

        v.outer.r = o.outerR;
        v.outer.g = o.outerG;
        v.outer.b = o.outerB;
        v.outer.size = o.outerSize;
        v.outer.opacity = o.outerOpacity;
    },
    /*pushable*/
    (p, res, o) => {
        if(o.pushAngle !== o.lastPushAngle){
            o.lastPushAngle = o.pushAngle;
            o.pushAngleVecX = Math.cos(o.pushAngle);
            o.pushAngleVecY = Math.sin(o.pushAngle);
        }

        // dot product of the two vectors = amount they are pointing together
        // freeVariable = pushDelta
        freeVariable = -(o.pushAngleVecX * res.overlapV.x + o.pushAngleVecY * res.overlapV.y) * o.pushConversionRatio;

        if(o.positiveDirectionOnly === false || freeVariable > 0){
            o.pushPercent += freeVariable / o.maxPushDistance;

            if(o.pushPercent > 1){
                freeVariable -= (o.pushPercent-1) * o.maxPushDistance;
                o.pushPercent = 1;
            } else if(o.pushPercent < 0){
                freeVariable -= o.pushPercent * o.maxPushDistance;
                o.pushPercent = 0;
            }

            o.pos.x += o.pushAngleVecX * freeVariable;
            o.pos.y += o.pushAngleVecY * freeVariable;
        }

        // test collision again to bound the player
        res.clear();
        if(o.sat.r !== undefined){
            collided = SAT.testCircleCircle(o.sat, p.sat, res);
        } else {
            collided = SAT.testPolygonCircle(o.sat, p.sat, res);
        }

        if(collided === true){
            p.pos.x += res.overlapV.x;
            p.pos.y += res.overlapV.y;
        }
    },
    /*changeMusic*/
    (p, res, o) => {
        shared.playMusic(o.musicPath, o.musicStartTime);
    },
    /*changeShip*/
    (p, res, o) => {
        if(p.ship === o.changeShipStateTo) return;
            
        if(shared.isExClient === true && o.changeShipStateTo === false) {
            // send disable ship
            shared.u4[0] = 10;
            shared.send(shared.u4);
        }
        if(p.ship === false && o.changeShipStateTo === true) {p.shipAngle = o.initialShipAngle; p.shipTurnSpeed = o.shipTurnSpeed; }
        
        p.ship = o.changeShipStateTo;
    },
    /*changeGrapple*/
    (p, res, o) => {
        if(p.grapple === true && o.changeGrappleStateTo === false){
            if(shared.isExClient === true){
                // send disable grapple
                shared.u4[0] = 12;
                shared.send(shared.u4);
            }
            p.grappleX = p.grappleY = -1;
        }

        p.grapple = o.changeGrappleStateTo;
        p.grappleRange = o.grappleRange;
        p.grappleForce = o.grappleForce;
        p.grappleFric = o.grappleFric;
    },
    /*changeDeathTimer*/
    (p, res, o) => {
        if(shared.isExClient === true && p.deathTimer === true && o.changeDeathTimerStateTo === false){
            // send disable death timer
            shared.u4[0] = 14;
            shared.send(shared.u4);
        }

        if(o.changeDeathTimerStateTo === true){
            if(p.deathTimer === false) p.deathTime = o.deathTime;
            else p.deathTime = Math.min(p.deathTime, o.deathTime);
            p.deathTime -= o.drainAmountWhileStandingOn;

            // changeVignette
            effectMap[24](p, res, o);
        }
        p.deathTimer = o.changeDeathTimerStateTo;
    }
]

const idleEffectMap = [
    // 'bound',
    undefined,
    // 'kill',
    undefined,
    // 'bounce',
    undefined,
    // 'custom'
    undefined,
    // 'customImage'
    undefined,
    // 'stopForces',
    undefined,
    // 'winpad',
    undefined,
    // 'coin',
    undefined,
    // 'coindoor',
    undefined,
    // 'checkpoint',
    undefined,
    // 'breakable',
    (o) => {
        if (o.strength < o.maxStrength && window.frames-o.lastBrokeTime > o.regenTime) {
            o.strength += o.healSpeed;
            if(o.strength >= o.maxStrength){
                o.lastBrokeTime = window.frames;
                o.strength = o.maxStrength;
            }
        }
    },
    // 'safe',
    undefined,
    // 'tp',
    undefined,
    // 'conveyor',
    (o) => {
        o.conveyorAngle += o.conveyorAngleRotateSpeed;
    },
    // 'platformer',
    (o) => {
        o.platformerAngle += o.platformerAngleRotateSpeed;
    },
    // 'restrictAxis',
    undefined,
    // 'snapGrid',
    (o) => {
        o.snapAngle += o.snapAngleRotateSpeed;
        if(o.snapCollided === false) o.interpolatePlayerData.time = -1;
        o.snapCollided = false;
    },
    // 'timeTrap'
    (o) => {
        if(o.timeTrapIntersecting !== true) o.timeTrapTime += o.timeTrapRecoverySpeed;
        if(o.timeTrapTime > o.timeTrapMaxTime) o.timeTrapTime = o.timeTrapMaxTime;
        o.timeTrapIntersecting = false;
    },
    // 'changeSize'
    (o, p) => {
        if(o.sizeChangePermanent === true) return;

        if(o.lastChangeSizeColliding === true && o.changeSizeColliding === false){
            // exit
            p.sat.r /= o.sizeMult;
        } else if(o.lastChangeSizeColliding === false && o.changeSizeColliding === true){
            // enter
            p.sat.r *= o.sizeMult;
        }

        o.lastChangeSizeColliding = o.changeSizeColliding;
        o.changeSizeColliding = false;
    },
    // 'changeSpeed'
    undefined,
    // 'solidColor'
    undefined,
    // 'invisible'
    undefined,
    // 'changeMap'
    undefined,
    // 'tornado'
    undefined,
    // 'changeVignette'
    undefined,
    // 'pushable'
    (o, p) => {
        // freeVariable = pushDelta
        freeVariable = -o.idlePushBackSpeed;
        o.pushPercent += freeVariable / o.maxPushDistance;

        if(o.pushPercent > 1){
            freeVariable -= (o.pushPercent-1) * o.maxPushDistance;
            o.pushPercent = 1;
        } else if(o.pushPercent < 0){
            freeVariable -= o.pushPercent * o.maxPushDistance;
            o.pushPercent = 0;
        }

        o.pos.x += freeVariable * Math.cos(o.pushAngle);
        o.pos.y += freeVariable * Math.sin(o.pushAngle);
    },
    // changeMusic
    undefined,
    // changeShip
    undefined,
    // changeGrapple
    undefined,
    // changeDeathTimer
    undefined,
]

shared.effectConstraintsMap = [
    /*bound*/
    undefined,
    /*kill*/
    undefined,
    /*bounce*/
    {decay: [undefined, 1]},
    /*custom*/
    undefined,
    /*customImage*/
    undefined,
    /*stopForces*/
    undefined,
    /*winpad*/
    undefined,
    /*coin*/
    {coinAmount: [1]},
    /*coindoor*/
    {coins: [1], maxCoins: [1]},
    /*checkpoint*/
    undefined,
    /*breakable*/
    {maxStrength: [1], regenTime: [0], healSpeed: [0]},
    /*safe*/
    undefined,
    /*tp*/
    undefined,
    /*conveyor*/
    {conveyorFriction: [undefined, 1]},
    /*platformer*/
    {platformerFriction: [undefined, 1], jumpFriction: [undefined, 1]},
    /*restrictAxis*/
    undefined,
    /*snapGrid*/
    {snapDistanceX: [0.1], snapDistanceY: [0.1], snapCooldown: [0]},
    /*timeTrap*/
    {timeTrapTime: [0], timeTrapMaxTime: [0]},
    /*changeSize*/
    undefined,
    /*changeSpeed*/
    undefined,
    /*solidColor*/
    undefined,
    /*invisible*/
    undefined,
    /*changeMap*/
    undefined,
    /*tornado*/
    undefined,
    /*changeVignette*/
    undefined,
    /*pushable*/
    {maxPushDistance: [0]},
    /*changeMusic*/
    undefined,
    /*changeShip*/
    undefined,
    /*changeGrapple*/
    undefined,
    /*changeDeathTimer*/
    undefined,
]

shared.effectMapI2N = [
    'bound',
    'kill',
    'bounce',
    'custom',
    'customImage',
    'stopForces',
    'winpad',
    'coin',
    'coindoor',
    'checkpoint',
    'breakable',
    'safe',
    'tp',
    'conveyor',
    'platformer',
    'restrictAxis',
    'snapGrid',
    'timeTrap',
    'changeSize',
    'changeSpeed',
    'solidColor',
    'invisible',
    'changeMap',
    'tornado',
    'changeVignette',
    'pushable',
    'changeMusic',
    'changeShip',
    'changeGrapple',
    'changeDeathTimer',
]

shared.effectDefaultMap = [
    // bound
    {},
    // kill
    {
        boundPlayer: false,
    },
    // bounce
    {
        bounciness: 1,
        decay: 0.98
    },
    // custom
    {},
    // customImage
    {
        url: 'http://tinyurl.com/dwayne-t-rj'
    },
    // stopForces
    {},
    // winpad
    {},
    // coin
    {
        coinAmount: 1,
        color: '#d6d611'
    },
    // coindoor
    {
        coindoorCoinAmount: 3,
        coinDoorColor: '#d6d611'
    },
    // checkpoint
    {
        checkpointOffsetX: 0,
        checkpointOffsetY: 0
    },
    // breakable
    {
        maxStrength: 60,
        regenTime: 100,
        healSpeed: 1
    },
    // safe
    {},
    // tp
    {
        tpx: 100,
        tpy: 100
    },
    // conveyor
    {
        conveyorForce: 0.3,
        conveyorAngle: 90,
        conveyorAngleRotateSpeed: 0,
        conveyorFriction: 0.8
    },
    // platformer
    {
        platformerForce: 1,
        platformerAngle: 90,
        platformerAngleRotateSpeed: 0,
        platformerFriction: 0.875,
        maxJumpCooldown: 30,
        jumpForce: 20,
        jumpDecay: 0.95,
        // maxJumps: 1
    },
    // restrictAxis
    {
        axisSpeedMultX: 0,
        axisSpeedMultY: 1
    },
    // snapGrid
    {
        toSnapX: true,
        toSnapY: true,
        snapDistanceX: 100,
        snapDistanceY: 100,
        snapCooldown: 40,
        snapAngle: 0,
        snapAngleRotateSpeed: 0
    },
    // timeTrap
    {
        timeTrapMaxTime: 300,
        timeTrapRecoverySpeed: 1.5,
        timeTrapToKill: true,
        timeTrapToShowTenth: false
    },
    // changeSize
    {
        sizeMult: 1.5,
        sizeChangePermanent: false
    },
    // changeSpeed
    {
        speedMult: 2.5,
        speedChangePermanent: false
    },
    // solidColor
    {
        hex: '#FFFFFF',
        alpha: 1
    },
    // invisible
    {},
    // changeMap
    {mapName: 'hub', toCustomPlanet: false},
    // tornado
    {tornadoStrength: 1},
    // changeVignette
    {
        innerR: 0, innerG: 0, innerB: 0, innerSize: 0.1, innerOpacity: 0,
        outerR: 0, outerG: 0, outerB: 0, outerSize: 0.5, outerOpacity: 1
    },
    // pushable
    {
        pushAngle: 180,
        maxPushDistance: 100,
        idlePushBackSpeed: 0.25,
        positiveDirectionOnly: false,
        pushConversionRatio: 0.8
    },
    // changeMusic
    {musicPath: 'https://www.youtube.com/watch?v=OidXKRVVV70', musicStartTime: 0},
    // changeShip
    {changeShipStateTo: true, initialShipAngle: 0, shipTurnSpeed: Math.PI / 100},
    // changeGrapple
    {changeGrappleStateTo: true, grappleRange: 488, grappleForce: 0.01, grappleFric: 0.4},
    // changeDeathTimer
    {changeDeathTimerStateTo: true, drainAmountWhileStandingOn: 0, deathTime: 10},
]

const idleEffectSyncKeys = [
    // 'bound',
    undefined,
    // 'kill',
    undefined,
    // 'bounce',
    undefined,
    // 'custom'
    undefined,
    // 'customImage'
    undefined,
    // 'stopForces',
    undefined,
    // 'winpad',
    undefined,
    // 'coin',
    undefined,
    // 'coindoor',
    undefined,
    // 'checkpoint',
    undefined,
    // 'breakable',
    undefined,
    // 'safe',
    undefined,
    // 'tp',
    undefined,
    // 'conveyor',
    (o, sync) => {
        if(o.conveyorAngleRotateSpeed === 0) return false;
        sync.conveyorAngle = o.conveyorAngle;
    },
    // 'platformer',
    (o, sync) => {
        if(o.platformerAngleRotateSpeed === 0) return false;
        sync.platformerAngle = o.platformerAngle;
    },
    // 'restrictAxis',
    undefined,
    // 'snapGrid',
    (o, sync) => {
        if(o.snapAngleRotateSpeed === 0) return false;
        sync.snapAngle = o.snapAngle;
    },
    // 'timeTrap'
    undefined,
    // 'changeSize'
    undefined,
    // 'changeSpeed'
    undefined,
    // 'solidColor'
    undefined,
    // 'invisible'
    undefined,
    // 'changeMap'
    undefined,
    // 'tornado'
    undefined,
    // 'changeVignette'
    undefined,
    // 'pushable'
    undefined,
    // changeMusic
    undefined,
    // changeShip
    undefined,
    // changeGrapple
    undefined,
    // changeDeathTimer
    undefined,
]

const applyIdleEffectSyncKeys = [
    // 'bound',
    undefined,
    // 'kill',
    undefined,
    // 'bounce',
    undefined,
    // 'custom'
    undefined,
    // 'customImage'
    undefined,
    // 'stopForces',
    undefined,
    // 'winpad',
    undefined,
    // 'coin',
    undefined,
    // 'coindoor',
    undefined,
    // 'checkpoint',
    undefined,
    // 'breakable',
    undefined,
    // 'safe',
    undefined,
    // 'tp',
    undefined,
    // 'conveyor',
    (o) => {
        if(Number.isFinite(o.conveyorAngle) === false) return;
        o.conveyorAngle = conveyorAngle;
    },
    // 'platformer',
    (o) => {
        if(Number.isFinite(o.platformerAngle) === false) return;
        o.platformerAngle = platformerAngle;
    },
    // 'restrictAxis',
    undefined,
    // 'snapGrid',
    (o) => {
        if(Number.isFinite(o.snapAngle) === false) return;
        o.snapAngle = snapAngle;
    },
    // 'timeTrap'
    undefined,
    // 'changeSize'
    undefined,
    // 'changeSpeed'
    undefined,
    // 'solidColor'
    undefined,
    // 'invisible'
    undefined,
    // 'changeMap'
    undefined,
    // 'tornado'
    undefined,
    // 'changeVignette'
    undefined,
    // 'pushable'
    undefined,
    // changeMusic
    undefined,
    // changeShip
    undefined,
    // changeGrapple
    undefined,
    // changeDeathTimer
    undefined,
]

shared.generateSyncMaps = () => {
    if(shared.simulateToSync !== undefined) return;
    shared.simulateToSync = new Map(); shared.idleEffectToSync = new Map();
    for(let i = 0; i < simulateMap.length; i++){
        if(simulateSyncKeys[i] !== undefined){
            shared.simulateToSync.set(simulateMap[i], simulateSyncKeys[i]);
        }
    }

    for(let i = 0; i < idleEffectMap.length; i++){
        if(idleEffectSyncKeys[i] !== undefined){
            shared.idleEffectToSync.set(idleEffectMap[i], idleEffectSyncKeys[i]);
        }
    }
}

shared.generateApplySyncMaps = () => {
    if(shared.simulateToApplySync !== undefined) return;
    shared.simulateToApplySync = new Map(); shared.idleEffectToApplySync = new Map();
    for(let i = 0; i < simulateMap.length; i++){
        if(applySimulateSyncKeys[i] !== undefined){
            shared.simulateToApplySync.set(simulateMap[i], applySimulateSyncKeys[i]);
        }
    }

    for(let i = 0; i < idleEffectMap.length; i++){
        if(applyIdleEffectSyncKeys[i] !== undefined){
            shared.idleEffectToApplySync.set(idleEffectMap[i], applyIdleEffectSyncKeys[i]);
        }
    }
}

const renderEffectMap = [
    /*bound*/
    (o) => { 
        ctx.fillStyle = shared.colors.tile;
    },
    /*kill*/
    (o) => {
        ctx.fillStyle = o.boundPlayer === true ? '#c70000' : '#9e0000';
        ctx.strokeStyle = 'black';
        ctx.toStroke = true;
        ctx.lineWidth = 4;
    },
    /*bounce*/
    (o) => {
        ctx.fillStyle = 'blue';
    },
    /*custom*/
    (o) => {
        ctx.toFill = false;

        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            ctx.drawImage(shared.starImg, o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y);

            ctx.restore();
        }
    },
    /*customImage*/
    (o) => {
        ctx.toFill = false;
        if(o.imgLoaded === false) return;

        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            ctx.drawImage(o.img, o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y);

            ctx.restore();
        }
    },
    /*stopForces*/
    (o) => {
        ctx.fillStyle = 'orange';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 6;
        ctx.globalAlpha = 0.1;
        ctx.toStroke = true;
    },
    /*winpad*/
    (o) => {
        ctx.fillStyle = `hsl(${window.frames*1000/60/12},50%,50%)`;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 15;
        ctx.cleanUpFunction = () => {
            ctx.shadowBlur = 0;
        }
    },
    /*coin*/
    (o) => {
        ctx.fillStyle = o.color;
        if(o.collected === true){
            ctx.globalAlpha = 0.2;
        } else {
            ctx.globalAlpha = 0.8;
        }
        if(o.coinAmount !== 1){
            ctx.cleanUpFunction = () => {
                let middleX = o.topLeft.x + o.dimensions.x/2;
                let middleY = o.topLeft.y + o.dimensions.y/2; 

                ctx.fillStyle = shared.colors.tile;//'#313131';
                ctx.font = `${Math.min(60, o.dimensions.x/4, o.dimensions.y/4)}px Inter`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(
                    Math.max(0, o.coinAmount),
                    middleX,
                    middleY
                );
            }
        }
    },
    /*coindoor*/
    (o) => {
        ctx.fillStyle = shared.colors.tile;
        ctx.globalAlpha = o.coins <= 0 ? 0.5 : 1;
        ctx.cleanUpFunction = () => {
            ctx.fillStyle = o.coinDoorColor;

            let middleX = o.topLeft.x + o.dimensions.x/2;
            let middleY = o.topLeft.y + o.dimensions.y/2; 

            ctx.beginPath();
            ctx.roundRect(middleX-o.dimensions.x/4, middleY-o.dimensions.y/4, o.dimensions.x/2, o.dimensions.y/2, Math.min(o.dimensions.x,o.dimensions.y)/20);
            ctx.fill();
            ctx.closePath();
    
            ctx.fillStyle = shared.colors.tile;//'#313131'//'#484a00';
            ctx.font = `${Math.min(60, o.dimensions.x/4, o.dimensions.y/4)}px Inter`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                Math.max(0, o.coins),
                middleX,
                middleY
            );
        }
    },
    /*checkpoint*/
    (o) => {
        if (o.checkpointCollected === true) {
            ctx.fillStyle = '#0fba09';
            ctx.globalAlpha = 0.15;
        } else {
            ctx.fillStyle = '#05962b';
            ctx.globalAlpha = 0.8;
        }
        // ctx.cleanUpFunction = () => {
        //     ctx.globalAlpha /= 5;
        //     const grd = ctx.createRadialGradient(o.pos.x, o.pos.y, 0, o.pos.x, o.pos.y, (o.dimensions.x + o.dimensions.y)/3);

        //     grd.addColorStop(0, "rgba(255,255,255,1)");
        //     grd.addColorStop(1, "rgba(255,255,255,0)");

        //     ctx.fillStyle = grd;
        //     renderEffectMap[7](o);
        // }
    },
    /*breakable*/
    (o) => {
        ctx.fillStyle = shared.colors.tile;// to make it into hex
        ctx.fillStyle = blendColor('#000000', ctx.fillStyle, 0.5);
        ctx.globalAlpha = o.strength / o.maxStrength;
    },
    /*safe*/
    (o) => {
        // #8c8c8c hex, .25 globalAlpha
        ctx.fillStyle = 'rgba(140,140,140,.25)';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.toStroke = true;

        // ctx.fillStyle = shared.safeColor || "#8c8c8c",
        // ctx.globalAlpha = .25,
        // ctx.beginPath(),
        // ctx.arc(pos.x, pos.y, obstacle.r, 0, 2 * Math.PI),
        // ctx.fill(),
        // ctx.strokeStyle = "black",
        // ctx.lineWidth = lineWidth,
        // ctx.globalAlpha = 1,
        // ctx.stroke();
    },
    /*tp*/
    (o) => {
        ctx.fillStyle = '#38ab30';
    },
    /*conveyor*/
    (o) => {
        ctx.fillStyle = shared.colors.tile;
        ctx.globalAlpha = 0.1;
        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            ctx.globalAlpha = 1;
            for(let x = o.topLeft.x + 50; x <= o.topLeft.x + o.dimensions.x + 50; x += 100){
                for(let y = o.topLeft.y + 50; y <= o.topLeft.y + o.dimensions.y + 50; y += 100){
                    ctx.translate(x,y);
                    ctx.rotate(o.conveyorAngle+Math.PI/2);
                    ctx.drawImage(shared.arrowImg, -50, -50, 100, 100);
                    ctx.rotate(-o.conveyorAngle-Math.PI/2);
                    ctx.translate(-x,-y);
                }
            }

            ctx.restore();
            // ctx.beginPath();
            // ctx.fillStyle = 'red';
            // ctx.arc(o.topLeft.x, o.topLeft.y, 30, 0, Math.PI * 2);
            // ctx.fill();
            // ctx.closePath();
        }
    },
    /*platformer*/
    (o) => {
        ctx.fillStyle = shared.colors.tile;
        ctx.globalAlpha = 0.1;
        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            const offsetX = (window.frames*1000/60 * o.platformerForce * Math.cos(o.platformerAngle) / 10) % 100 - 100;
            const offsetY = (window.frames*1000/60 * o.platformerForce * Math.sin(o.platformerAngle) / 10) % 100 - 100;

            ctx.globalAlpha = 1;
            for(let x = o.topLeft.x + offsetX + 50; x <= o.topLeft.x + o.dimensions.x + 50; x += 100){
                for(let y = o.topLeft.y + offsetY + 50; y <= o.topLeft.y + o.dimensions.y + 50; y += 100){
                    ctx.translate(x,y);
                    ctx.rotate(o.platformerAngle+Math.PI/2);
                    ctx.drawImage(shared.arrowImg, -50, -50, 100, 100);
                    ctx.rotate(-o.platformerAngle-Math.PI/2);
                    ctx.translate(-x,-y);
                }
            }

            ctx.restore();

            // rendering 👍 if player can jump
            // if there ever is to be more emojis like this, then make an array of emojis that i can push to that render on top of each other every frame (w/ priority? sorted?)
            if(o.canJump === true && o.touchingPlatformer === true){
                const player = shared.players[shared.selfId];
                if(player !== undefined){
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = 'white';
                    ctx.font = `56px Inter`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('👍', player.pos.x, player.pos.y - player.sat.r - 50);
                }
            }
            o.touchingPlatformer = false;
        }
    },
    /*restrictAxis*/
    (o) => {
        if(o.axisSpeedMultX < 0 && o.axisSpeedMultY < 0){
            ctx.strokeStyle = 'red';
        } else if(o.axisSpeedMultX < 0 || o.axisSpeedMultY < 0){
            ctx.strokeStyle = '#ff6969';
        } else if(o.axisSpeedMultY > 1 || o.axisSpeedMultY > 1){
            ctx.strokeStyle = '#c5c500';
        } else {
            ctx.strokeStyle = 'white';
        }
        ctx.lineWidth = 4;
        ctx.toFill = false;
        ctx.toStroke = true;
        ctx.cleanUpFunction = () => {
            ctx.lineWidth = 3;
            ctx.save();

            ctx.translate(o.topLeft.x + o.dimensions.x / 2, o.topLeft.y + o.dimensions.y / 2);

            ctx.clip();

            ctx.globalAlpha = o.axisSpeedMultX > 1 ? 0.8 : (Math.max(0.3,o.axisSpeedMultX < 0 ? -o.axisSpeedMultX : 1-o.axisSpeedMultX));
            ctx.strokeStyle = o.axisSpeedMultX < 0 ? 'red' : (o.axisSpeedMultX > 1 ? '#c5c500' : 'white');

            ctx.beginPath();
            for(let x = -o.dimensions.x/2; x <= o.dimensions.x/2; x += 100){
                ctx.moveTo(x,-o.dimensions.y/2);
                ctx.lineTo(x,o.dimensions.y/2);
            }
            ctx.stroke();
            ctx.closePath();

            ctx.globalAlpha = o.axisSpeedMultY > 1 ? 0.8 : (Math.max(0.3,o.axisSpeedMultY < 0 ? -o.axisSpeedMultY : 1-o.axisSpeedMultY));
            ctx.strokeStyle = o.axisSpeedMultY < 0 ? 'red' : (o.axisSpeedMultY > 1 ? '#c5c500' : 'white');

            ctx.beginPath();
            for(let y = -o.dimensions.y/2; y <= o.dimensions.y/2; y += 100){
                ctx.moveTo(-o.dimensions.x/2,y);
                ctx.lineTo(o.dimensions.x/2,y);
            }
            ctx.stroke();
            ctx.closePath();

            ctx.restore();
        }
    },
    /*snapGrid*/
    (o) => {
        ctx.fillStyle = '#00008a';
        ctx.globalAlpha = 0.1;
        ctx.toClip = true;

        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            ctx.strokeStyle = blendColor('#0f0000', '#000000', Math.max(0,o.snapCooldown) / o.maxSnapCooldown);
            ctx.lineWidth = 4;
            ctx.globalAlpha = 0.17;

            let middleX = o.topLeft.x + o.dimensions.x/2;
            let middleY = o.topLeft.y + o.dimensions.y/2; 
            ctx.translate(middleX, middleY);

            o.snapRotateMovementExpansion = {
                base: (Math.max(o.dimensions.x,o.dimensions.y)**2/Math.sqrt(o.dimensions.x**2+o.dimensions.y**2))
            }
            o.snapRotateMovementExpansion.x = Math.ceil(o.snapRotateMovementExpansion.base/o.snapDistanceX+1)*o.snapDistanceX;
            o.snapRotateMovementExpansion.y = Math.ceil(o.snapRotateMovementExpansion.base/o.snapDistanceY+1)*o.snapDistanceY;

            ctx.rotate(o.snapAngle);

            let renderPath = new Path2D();
            if(o.toSnapX === true){
                for(let x = -o.snapRotateMovementExpansion.x; x <= o.snapRotateMovementExpansion.x; x += o.snapDistanceX){
                    renderPath.rect(-10 + x, -o.snapRotateMovementExpansion.x - 10, 20, 2 * o.snapRotateMovementExpansion.x + 20);
                    // ctx.moveTo(x,-o.snapRotateMovementExpansion);
                    // ctx.lineTo(x,o.snapRotateMovementExpansion);
                }
            }

            if(o.toSnapY === true){
                for(let y = -o.snapRotateMovementExpansion.y; y <= o.snapRotateMovementExpansion.y; y += o.snapDistanceY){
                    renderPath.rect(-o.snapRotateMovementExpansion.y - 10, -10 + y, 2 * o.snapRotateMovementExpansion.y + 20, 20);
                    // ctx.moveTo(-o.snapRotateMovementExpansion,y);
                    // ctx.lineTo(o.snapRotateMovementExpansion,y);
                }
            }
            ctx.stroke(renderPath);
            ctx.closePath();
            
            // drawing snapMagnitude indicator
            const player = shared.players[shared.selfId];
            if(player.pos.x + o.snapMagnitude < middleX - o.dimensions.x/2 || player.pos.x - o.snapMagnitude > middleX + o.dimensions.x/2 || player.pos.y + o.snapMagnitude < middleY - o.dimensions.y/2 || player.pos.y - o.snapMagnitude > middleY + o.dimensions.y/2){
                ctx.restore();
                return;
            }
            ctx.strokeStyle = 'grey';
            ctx.fillStyle = 'black';
            ctx.globalAlpha = 0.2;
            ctx.beginPath();

            ctx.clip(renderPath);

            ctx.rotate(-o.snapAngle);
            ctx.translate(-middleX,-middleY);

            ctx.arc(player.pos.x, player.pos.y, o.snapMagnitude, 0, Math.PI*2);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }
    },
    /*timeTrap*/
    (o) => {
        let middleX = o.topLeft.x + o.dimensions.x/2;
        let middleY = o.topLeft.y + o.dimensions.y/2; 

        let grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (o.dimensions.x + o.dimensions.y)/3));

        if(o.timeTrapToKill === false){
            grd.addColorStop(0, "rgba(199,199,199,0)");
            grd.addColorStop(1, "rgba(199,199,199,1)");
        } else {
            grd.addColorStop(0, "rgba(199,0,0,0)");
            grd.addColorStop(1, "rgba(199,0,0,1)");
        }

        ctx.fillStyle = grd;
        ctx.globalAlpha = Math.max(0.12, 0.5 - o.timeTrapTime / o.timeTrapMaxTime / 2);
        
        ctx.cleanUpFunction = () => {
            ctx.globalAlpha = Math.max(0.3, o.timeTrapTime / o.timeTrapMaxTime / 3);
            ctx.fillStyle = 'white';
            ctx.font = `${Math.min(o.dimensions.x, o.dimensions.y)/2}px Inter`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.fillText(o.timeTrapToShowTenth === true ? Math.round(o.timeTrapTime/60 * 10) / 10 : Math.round(o.timeTrapTime/60), middleX, middleY);
        }
    },
    /*changeSize*/
    (o) => {
        if(o.sizeChangePermanent === true){
            ctx.toStroke = true;
            ctx.lineWidth = 10;
            ctx.lineDashOffset = -window.frames*1000/60 / 15;
            if (o.sizeMult > 1){
                ctx.strokeStyle = '#0e30ad';
            } else {
                ctx.strokeStyle = '#1c1852';
            }
            ctx.setLineDash([30, 40]);

            ctx.cleanUpFunction = () => {
                ctx.setLineDash([]);
            }
        }
        
        if(o.permanentSizeChangeDone === true) {
            ctx.toFill = false;
        } else {
            if (o.sizeMult > 1){
                ctx.fillStyle = '#0e30ad';
            } else {
                ctx.fillStyle = '#1c1852';
            }
        }
        
        ctx.globalAlpha = 0.28;
    },
    /*changeSpeed*/
    (o) => {
        if(o.speedChangePermanent === true){
            ctx.toStroke = true;
            ctx.lineWidth = 10;
            ctx.lineDashOffset = -window.frames*1000/60 / 15;
            ctx.strokeStyle = '#eba500';
            ctx.setLineDash([30, 40]);

            ctx.cleanUpFunction = () => {
                ctx.setLineDash([]);
            }
        }

        if(o.permanentSpeedChangeDone === true) {
            ctx.toFill = false;
        } else {
            ctx.fillStyle = '#eba500';
            ctx.toStroke = true;
            ctx.lineWidth = 3;
            ctx.strokeStyle = ctx.fillStyle;
        }
        ctx.globalAlpha = 0.25;

        // permanents should dissapear upon use i think
    },
    /*solidColor*/
    (o) => {
        ctx.fillStyle = o.hex;
        if(o.isText === true)ctx.globalAlpha = 0;
        else ctx.globalAlpha = o.alpha;
    },
    /*invisible*/
    (o) => {},
    /*changeMap*/
    (o) => {
        // ctx.fillStyle = `hsl(${window.frames*1000/60/12},50%,50%)`;
        // ctx.shadowColor = ctx.fillStyle;
        // ctx.shadowBlur = 15;
        // ctx.cleanUpFunction = () => {
        //     ctx.shadowBlur = 0;
        // }

        if(o.toCustomPlanet === true){
            ctx.fillStyle = '#646464';

            ctx.cleanUpFunction = () => {
                ctx.font = `1000 ${Math.min(o.dimensions.x, o.dimensions.y)/2}px Inter`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#464646';
                ctx.translate(o.topLeft.x + o.dimensions.x/2, o.topLeft.y + o.dimensions.y/2);

                if(o.randomSineOffset === undefined) o.randomSineOffset = Math.random() * Math.PI * 2;
                const r = Math.sin(window.frames / 36 + o.randomSineOffset) * 0.32;
                ctx.rotate(r);
                ctx.fillText('?', 0, 0);
                ctx.rotate(-r);
                ctx.translate(-(o.topLeft.x + o.dimensions.x/2), -(o.topLeft.y + o.dimensions.y/2));

                ctx.fillStyle = 'white';
                ctx.font = `${o.dimensions.x / 3.5}px Inter`;

                // same fillText
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                ctx.globalAlpha = Math.min(1,((shared.players[shared.selfId].pos.y + canvas.h/2) - (o.topLeft.y)) / (o.dimensions.y));

                ctx.globalAlpha *= 0.8;
                ctx.fillText(
                    o.mapName,
                    o.topLeft.x + o.dimensions.x / 2,
                    o.topLeft.y - o.dimensions.y / 4
                );
                ctx.globalAlpha = 1;
            }
            return;
        }

        let t = (1+Math.sin(window.frames/36))/2 * (o.difficulty % 1);

        ctx.fillStyle = blendColor(difficultyImageColors[Math.floor(o.difficulty)],difficultyImageColors[Math.min(8,Math.ceil(o.difficulty))],t);

        ctx.cleanUpFunction = () => {
            if(o.dimensions.x > o.dimensions.y){
                ctx.translate(o.dimensions.x - o.dimensions.y + o.topLeft.x, o.topLeft.y);
            } else {
                ctx.translate(o.topLeft.x, o.dimensions.y - o.dimensions.x + o.topLeft.y);
            }

            ctx.lineCap = 'round';
            ctx.globalAlpha = t;
            difficultyImageMap[Math.min(8,Math.ceil(o.difficulty))](Math.min(o.dimensions.x, o.dimensions.y));

            ctx.globalAlpha = 1 - t;
            difficultyImageMap[Math.floor(o.difficulty)](Math.min(o.dimensions.x, o.dimensions.y));
            ctx.lineCap = 'square';
            ctx.globalAlpha = 1;

            if(o.dimensions.x > o.dimensions.y){
                ctx.translate(-(o.dimensions.x - o.dimensions.y + o.topLeft.x), -o.topLeft.y);
            } else {
                ctx.translate(-o.topLeft.x, -(o.dimensions.y - o.dimensions.x + o.topLeft.y));
            }

            ctx.font = `${o.dimensions.x / 3.5}px Inter`;

            if(shared.mapsBeaten['/maps/' + o.mapName] === true){
                const baseColor = blendColor(
                    difficultyImageColors[Math.floor(o.difficulty)],
                    difficultyImageColors[Math.ceil(o.difficulty)],
                    t
                );
                ctx.fillStyle = shared.blendColor(baseColor, '#000000', 0.12);//'#5fbe50'
            } else {
                ctx.fillStyle = 'white';
            }
            
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.globalAlpha = Math.min(1,((shared.players[shared.selfId].pos.y + canvas.h/2) - (o.topLeft.y)) / (o.dimensions.y));
            ctx.fillText(
                o.mapName.toUpperCase().replace('O','o'),
                o.topLeft.x + o.dimensions.x / 2,
                o.topLeft.y - o.dimensions.y / 4
            );
            ctx.globalAlpha = 1;

            // // line marking - scrapped
            // ctx.fillStyle = 'black';
            // ctx.fillRect(
            //     topX,
            //     topY + (1 - o.difficulty%1) * (o.dimensions.y*0.95),
            //     o.dimensions.x / 5,
            //     o.dimensions.y * .05
            // )
        }
    },
    /*tornado*/
    (o) => {
        ctx.fillStyle = '#c0bbc9';
        ctx.globalAlpha = 0.25;
    },
    /*changeVignette*/
    (o) => {
        ctx.toFill = false;
    },
    /*pushable*/
    (o) => {
        ctx.fillStyle = shared.colors.tile;
        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.globalAlpha = 0.25;
            ctx.beginPath();
            o.topLeft = generateTopLeftCoordinates(o);
            ctx.lineTo(o.topLeft.x, o.topLeft.y);
            ctx.lineTo(o.topLeft.x + o.dimensions.x, o.topLeft.y + o.dimensions.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineTo(o.topLeft.x + o.dimensions.x, o.topLeft.y);
            ctx.lineTo(o.topLeft.x, o.topLeft.y + o.dimensions.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.lineWidth = 3;

            ctx.restore();

            // TODO: white lines where the angles are? oneDirectional parameter?
            // also TODO: 
        }
    },
    /*changeMusic*/
    (o) => {
        ctx.toFill = false;
    },
    /*changeShip*/
    (o) => {
        ctx.fillStyle = o.changeShipStateTo === true ? 'rgba(0,0,255,0.3)' : 'rgba(255,255,0,0.3)';
        ctx.strokeStyle = o.changeShipStateTo === true ? 'blue' : 'yellow';
        ctx.lineDashOffset = -window.frames*1000/60 * 150 / 1000;
        ctx.lineWidth = 4;
        ctx.setLineDash([30, 30]);
        ctx.toStroke = true;

        ctx.cleanUpFunction = () => {
            ctx.setLineDash([]);
        }
    },
    /*changeGrapple*/
    (o) => {
        let middleX = o.topLeft.x + o.dimensions.x/2;
        let middleY = o.topLeft.y + o.dimensions.y/2; 

        let grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.sqrt(o.dimensions.x**2 + o.dimensions.y**2)/2);

        let t;
        if(o.changeGrappleStateTo === true){
            t = (window.frames*1000/60 / 1600) % 0.33;
            grd.addColorStop(1, "rgba(127,127,255,0)");
            grd.addColorStop((0.67+t), "rgba(127,127,255,1)");

            grd.addColorStop((0.66+t), "rgba(127,127,255,0)");
            grd.addColorStop((0.34+t), "rgba(127,127,255,1)");

            grd.addColorStop((0.33+t), "rgba(127,127,255,0)");
            grd.addColorStop((0.0101+t), "rgba(127,127,255,1)");

            if(0.01+t > 0)grd.addColorStop(0.01+t, "rgba(127,127,255,0)");
            grd.addColorStop(0, "rgba(127,127,255,1)");
        } else {
            t = 0.33 - (window.frames*1000/60 / 1600) % 0.33;
            grd.addColorStop(1, "rgba(255,255,127,0)");
            grd.addColorStop((0.67+t), "rgba(255,255,127,1)");

            grd.addColorStop((0.66+t), "rgba(255,255,127,0)");
            grd.addColorStop((0.34+t), "rgba(255,255,127,1)");

            grd.addColorStop((0.33+t), "rgba(255,255,127,0)");
            grd.addColorStop((0.0101+t), "rgba(255,255,127,1)");

            if(0.01+t > 0)grd.addColorStop(0.01+t, "rgba(255,255,127,0)");
            grd.addColorStop(0, "rgba(255,255,127,1)");
        }

        ctx.fillStyle = grd;
        // ctx.globalAlpha = Math.abs(Math.sin(window.frames*1000/60 / 760));
    },
    /*changeDeathTimer*/
    (o) => {
        if(shared.skullImg === undefined){
            shared.skullImg = new Image();
            shared.skullImg.src = 'https://svgsilh.com/svg/1294357.svg';
            shared.skullImg.onload = () => {
                shared.skullImgLoaded = true;
            }
            return;
        }

        ctx.fillStyle = o.changeDeathTimerStateTo === true ? 'red' : 'white';
        ctx.globalAlpha = 0.4;

        if(shared.skullImgLoaded === false) return;

        ctx.cleanUpFunction = () => {
            ctx.globalAlpha = 1;
            let middleX = o.topLeft.x + o.dimensions.x/2;
            let middleY = o.topLeft.y + o.dimensions.y/2; 

            let minDimension = Math.min(o.dimensions.x, o.dimensions.y);

            ctx.drawImage(shared.skullImg, middleX - minDimension/2, middleY - minDimension/2, minDimension, minDimension);
        }
    },
]

const difficultyImageColors = shared.difficultyImageColors = [
    /*0 - Peaceful*/
    "#6cd95b",
    /*1 - Moderate*/
    "#58ccb3",
    /*2 - Difficult*/
    "#0a77bf",
    /*3 - Hardcore*/
    "#3528e0",
    /*4 - Exhausting*/
    "#a142c9",
    /*5 - Relentless*/
    "#e32d8b",
    /*6 - Agonizing*/
    "#fc5434",
    /*7 - Terrorizing*/
    "#fc3a3a",
    /*8 - Cataclysmic*/
    "#c95d5d"
]

const difficultyImageMap = shared.difficultyImageMap = [
    /*0 - Peaceful*/
    (size) => {
        ctx.globalAlpha *= 0.3;
        ctx.strokeStyle = "black";
        ctx.lineWidth = size * 3 / 40;

        ctx.beginPath();
        ctx.arc(size/2, size/2, size / 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    },
    /*1 - Moderate*/
    (size) => {
        ctx.strokeStyle = "#288a75";
        ctx.lineWidth = size * 3 / 40;

        ctx.beginPath();
        ctx.arc(size * 5/12, size * 5/12, size / 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(size * 7/12, size * 7/12, size / 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    },
    /*2 - Difficult*/
    (size) => {
        ctx.globalAlpha *= 0.3;
        ctx.strokeStyle = "black";
        ctx.lineWidth = size * 3 / 40;
        ctx.strokeRect(size / 4, size / 4, size / 2, size / 2);
    },
    /*3 - Hardcore*/
    (size) => {
        ctx.globalAlpha *= 0.3;
        ctx.strokeStyle = "black";
        ctx.lineWidth = size * 3 / 40;
        ctx.strokeRect(size / 6, size / 6, size * 5 / 12, size * 5 / 12);
        ctx.strokeRect(size * 5 / 12, size * 5 / 12, size * 5 / 12, size * 5 / 12);
    },
    /*4 - Exhausting*/
    (size) => {
        ctx.globalAlpha *= 0.3;
        ctx.strokeStyle = "black";
        ctx.lineWidth = size * 3 / 40;

        ctx.beginPath();
        ctx.lineTo(size * 5 / 24, size * 12 / 24);
        ctx.lineTo(size * 12 / 24, size * 19 / 24);
        ctx.lineTo(size * 19 / 24, size * 12 / 24);
        ctx.lineTo(size * 12 / 24, size * 5 / 24);
        ctx.lineTo(size * 5 / 24, size * 12 / 24);
        ctx.stroke();
        ctx.closePath();
    },
    /*5 - Relentless*/
    (size) => {
        ctx.strokeStyle = "#991d5d";
        ctx.lineWidth = size * 3 / 40;
        ctx.beginPath();
        ctx.lineTo(size * 1 / 6, size * 3 / 6);
        ctx.lineTo(size * 3 / 6, size * 5 / 6);
        ctx.lineTo(size * 5 / 6, size * 3 / 6);
        ctx.lineTo(size * 3 / 6, size * 1 / 6);
        ctx.lineTo(size * 1 / 6, size * 3 / 6);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeRect(size * 5 / 24, size * 5 / 24, size * 14 / 24, size * 14 / 24);
    },
    /*6 - Agonizing*/
    (size) => {
        ctx.fillStyle = "#d94a2e";
        ctx.fillRect(0, size * 80 / 120, size * 120 / 120, size * 40 / 120);
        ctx.fillRect(size * 40 / 120, size * 60 / 120, size * 40 / 120, size * 20 / 120);
        ctx.beginPath();
        ctx.lineTo(0, size * 80 / 120);
        ctx.lineTo(size * 20 / 120, size * 40 / 120);
        ctx.lineTo(size * 40 / 120, size * 80 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 40 / 120, size * 60 / 120);
        ctx.lineTo(size * 60 / 120, size * 20 / 120);
        ctx.lineTo(size * 80 / 120, size * 60 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 80 / 120, size * 80 / 120);
        ctx.lineTo(size * 100 / 120, size * 40 / 120);
        ctx.lineTo(size * 120 / 120, size * 80 / 120);
        ctx.fill();
        ctx.closePath();
    },
    /*7 - Terrorizing*/
    (size) => {
        ctx.fillStyle = "#d63131";

        ctx.fillRect(size * 40 / 120, 0, size * 40 / 120, size * 20 / 120);
        ctx.fillRect(size * 40 / 120, size * 100 / 120, size * 40 / 120, size * 20 / 120);

        ctx.beginPath();
        ctx.lineTo(0, size * 120 / 120);
        ctx.lineTo(size * 20 / 120, size * 80 / 120);
        ctx.lineTo(size * 40 / 120, size * 120 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 40 / 120, size * 100 / 120);
        ctx.lineTo(size * 60 / 120, size * 60 / 120);
        ctx.lineTo(size * 80 / 120, size * 100 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 80 / 120, size * 120 / 120);
        ctx.lineTo(size * 100 / 120, size * 80 / 120);
        ctx.lineTo(size * 120 / 120, size * 120 / 120);
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.lineTo(0, 0);
        ctx.lineTo(size * 20 / 120, size * 40 / 120);
        ctx.lineTo(size * 40 / 120, 0);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 40 / 120, size * 20 / 120);
        ctx.lineTo(size * 60 / 120, size * 60 / 120);
        ctx.lineTo(size * 80 / 120, size * 20 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 80 / 120, 0);
        ctx.lineTo(size * 100 / 120, size * 40 / 120);
        ctx.lineTo(size * 120 / 120, 0);
        ctx.fill();
        ctx.closePath();
    },
    /*8 - Cataclysmic*/
    (size) => {
        ctx.fillStyle = "#8c4141";

        ctx.beginPath();
        ctx.lineTo(0, 0);
        ctx.lineTo(size * 40 / 120, 0);
        ctx.lineTo(0, size * 40 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 40 / 120, 0);
        ctx.lineTo(size * 60 / 120, size * 20 / 120);
        ctx.lineTo(size * 80 / 120, 0);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 120 / 120, 0);
        ctx.lineTo(size * 80 / 120, 0);
        ctx.lineTo(size * 120 / 120, size * 40 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 120 / 120, size * 40 / 120);
        ctx.lineTo(size * 100 / 120, size * 60 / 120);
        ctx.lineTo(size * 120 / 120, size * 80 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 120 / 120, size * 120 / 120);
        ctx.lineTo(size * 80 / 120, size * 120 / 120);
        ctx.lineTo(size * 120 / 120, size * 80 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(size * 40 / 120, size * 120 / 120);
        ctx.lineTo(size * 60 / 120, size * 100 / 120);
        ctx.lineTo(size * 80 / 120, size * 120 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(0, size * 120 / 120);
        ctx.lineTo(size * 40 / 120, size * 120 / 120);
        ctx.lineTo(0, size * 80 / 120);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(0, size * 80 / 120);
        ctx.lineTo(size * 20 / 120, size * 60 / 120);
        ctx.lineTo(0, size * 40 / 120);
        ctx.fill();
        ctx.closePath();
    },
];

// an obstacle is an ECS
const obstacles = shared.obstacles = [];

shared.spawnPosition = {x: 100, y: 100};
// a player is also an ecs
shared.createPlayer = () => {
    create(0/*circle*/, [], [], /*no simulate/ effects*/ {x: shared.spawnPosition.x, y: shared.spawnPosition.y, r: /*24.5*/49.5})
    const player = obstacles.pop();
    player.axisSpeedMultX = player.axisSpeedMultY = 1;
    player.touchingNormalIndexes = [];
    player.lastTouchingNormalIndexes = [];
    player.renderRadius = player.lastAliveRadius = player.sat.r;
    player.xv = player.yv = player.xa = player.ya = 0;
    player.interpX = player.interpY = 0;
    player.speed = player.baseSpeed = 7.167;
    player.dead = false;
    player.onSafe = false;
    player.touchingWall = false;
    player.stopForces = false;
    player.forces = [];
    player.id = undefined;
    player.dev = !shared.isProd; /*dev only for players[selfId]*/ player.god = false;
    player.friction = 0.4;
    player.ship = false; player.shipAngle = 0; player.shipTurnSpeed = Math.PI / 100;
    player.deathTime = 0; player.deathTimer = false;
    player.grappleX = -1; player.grappleY = -1; player.grapple = false;
    player.grappleRange = 488; player.grappleForce = 0.01; player.grappleFric = 0.414;
    player.timeTrapOverrideSafe = false;
    return player;
}

shared.players = [];

if(shared.isExClient !== true || shared.isEditor === true) {shared.players.push(shared.createPlayer()); shared.selfId = 0; shared.mapDimensions = {x:2000,y:2000}}
if(shared.isExClient === true || environment === 'server') shared.mapDimensions = {x: 2000, y: 2000};

export default simulate;