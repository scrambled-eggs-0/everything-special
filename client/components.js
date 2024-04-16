import './SAT.js';
import Utils from './utils.js';
const { isEditor, blendColor } = Utils;
import scroll from './scroll.js';
let toScroll = false;

window.respawnPlayer = () => {
    player.pos.x = window.spawnPosition.x;
    player.pos.y = window.spawnPosition.y;
    player.renderRadius = 0;
    player.dead = false;
    player.forces.length = 0;
    if(dragging === true) {window.onmouseup(); dragging = true;}
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
    for(let key in window.satConstraintsMap[shape]){
        // [min, max, mustBeInt, customValidator(e)]
        const c = window.satConstraintsMap[shape][key];
        if(c[2] === true) e[key] = Math.round(e[key]);
        if(e[key] < c[0]) e[key] = c[0];
        else if(e[key] > c[1]) e[key] = c[1];
    }
    e.dimensions = generateDimensions(e);
    for(let i = 0; i < simulates.length; i++){
        e.simulate.push(simulateMap[simulates[i]]);
        initSimulateMap[simulates[i]](e, params);
        for(let key in window.simulateConstraintsMap[simulates[i]]){
            // [min, max, mustBeInt, customValidator(e)]
            const c = window.simulateConstraintsMap[simulates[i]][key];
            if(c[2] === true) e[key] = Math.round(e[key]);
            if(e[key] < c[0]) e[key] = c[0];
            else if(e[key] > c[1]) e[key] = c[1];
        }
    }
    for(let i = 0; i < effects.length; i++){
        e.effect.push(effectMap[effects[i]]);
        initEffectMap[effects[i]](e, params);
        if(idleEffectMap[effects[i]] !== undefined) e.simulate.push(idleEffectMap[effects[i]]);
        for(let key in window.effectConstraintsMap[effects[i]]){
            // [min, max, mustBeInt, customValidator(e)]
            const c = window.effectConstraintsMap[effects[i]][key];
            if(c[2] === true) e[key] = Math.round(e[key]);
            if(e[key] < c[0]) e[key] = c[0];
            else if(e[key] > c[1]) e[key] = c[1];
        }
    }
    if(params.sf !== undefined) e.simulate.push(params.sf);
    if(params.ef !== undefined) {e.effect.push(params.ef); e.renderEffect.push(renderEffectMap[3]);}
    
    obstacles.push(e);
}
window.C = create;

let res = new SAT.Response();
let angle, collided = false;
function simulate(){
    // player simulation
    player.renderRadius = player.renderRadius * 0.83 + player.sat.r * 0.17;
    if(window.dragging === true && player.dead === false){
        angle = Math.atan2((window.mouseY - player.pos.y) / player.axisSpeedMultY, (window.mouseX - player.pos.x) / player.axisSpeedMultX);
        player.xv = Math.cos(angle) * player.speed * player.axisSpeedMultX;
        player.yv = Math.sin(angle) * player.speed * player.axisSpeedMultY;
        if(Math.abs(player.xv) > Math.abs(player.pos.x - window.mouseX)) player.xv = window.mouseX - player.pos.x;
        if(Math.abs(player.yv) > Math.abs(player.pos.y - window.mouseY)) player.yv = window.mouseY - player.pos.y;
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
        for(let i = 0; i < player.forces.length; i++){
            // [x, y, decay]
            player.pos.x += player.forces[i][0];
            player.pos.y += player.forces[i][1];
            player.forces[i][0] *= player.forces[i][2];
            player.forces[i][1] *= player.forces[i][2];
            if(Math.abs(player.forces[i][0]) < 0.01 && Math.abs(player.forces[i][1]) < 0.01){
                player.forces.splice(i,1);
                i--;
                continue;
            }
        }
    }    

    if(player.dead === true){
        for(let i = 0; i < obstacles.length; i++){
            // obstacle simulation
            for(let j = 0; j < obstacles[i].simulate.length; j++){
                obstacles[i].simulate[j](obstacles[i]);
            }
        }
    } else {
        for(let i = 0; i < obstacles.length; i++){
            // collision (done before simulation because that is what last rendered frame sees)
            // TODO: bounding box check
            if(obstacles[i].sat.r !== undefined){
                collided = SAT.testCircleCircle(obstacles[i].sat, player.sat, res);
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
                obstacles[i].simulate[j](obstacles[i]);
            }
        }
    }

    if(player.touchingNormalIndexes.length !== 0 || player.lastTouchingNormalIndexes.length !== 0){
        player.lastTouchingNormalIndexes = player.touchingNormalIndexes;
        player.touchingNormalIndexes = [];
    }

    if(player.onSafe === true){
        player.onSafe = false;
        player.dead = false;
    }

    // bounding the player by the walls
    player.touchingWall = false;
    if(player.sat.r > 900) player.sat.r = 900;
    if(player.pos.x - player.sat.r < 0){
        player.pos.x = player.sat.r;
        player.touchingWall = true;
    } else if(player.pos.x + player.sat.r > canvas.width){
        player.pos.x = canvas.width - player.sat.r;
        player.touchingWall = true;
    }
    if(player.pos.y - player.sat.r < 0){
        player.pos.y = player.sat.r;
        player.touchingWall = true;
    } else if(player.pos.y + player.sat.r > canvas.height){
        player.pos.y = canvas.height - player.sat.r;
        player.touchingWall = true;
    }

    // scrolling if specified by a simulate type
    if(toScroll === true){
        toScroll = false;
        if(window.dragging === true) window.onmouseup();
        scroll();
    }

    // (rendering happens in between)
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
        if(p.points.length < 2) p.points = window.satDefaultMap[2].points;
        p.x = 0; p.y = 0;
        const s = new SAT.Polygon(new SAT.Vector(), p.points.map(pt => new SAT.Vector(pt[0], pt[1])));
        s.pos.x = p.x;
        s.pos.y = p.y;
        return s;
    },
    /*text*/
    (p) => {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${p.fontSize}px Inter`;
        const dimensions = ctx.measureText(p.text);
        const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
        const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;
        const s = new SAT.Box(new SAT.Vector(p.x - w / 2, p.y - h / 2), w, h).toPolygon();
        return s;
    }
];

// font loading fix
setTimeout(() => {
    const os = window.obstacles;
    for(let i = 0; i < os.length; i++){
        if(os[i].isText !== true) continue;

        const oldDimensions = os[i].dimensions;
        os[i].dimensions = generateDimensions(os[i]);
        os[i].pos.x += (oldDimensions.x - os[i].dimensions.x) / 2;
        os[i].pos.y += (oldDimensions.y - os[i].dimensions.y) / 2;
    }
}, 1000)

function generateDimensions(o){
    const sat = o.sat;
    if(sat.r !== undefined){
        return {
            x: sat.r * 2,
            y: sat.r * 2
        }
    }
    
    if(o.isText === true){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${o.fontSize}px Inter`;
        const dimensions = ctx.measureText(o.text);
        return {
            x: dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft,
            wOffset: (dimensions.actualBoundingBoxRight - dimensions.actualBoundingBoxLeft) / 2,
            y: dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent,
            hOffset: (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2// *0.75?
        }
    }
    
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
    return [topLeftX, topLeftY];
}
window.generateTopLeftCoordinates = generateTopLeftCoordinates;

window.satMapI2N = [
    'circle',
    'rectangle',
    'polygon',
    'text'
];

window.satConstraintsMap = [
    undefined,
    undefined,
    undefined,
    {fontSize: [1]}
];

window.satDefaultMap = [
    // circle
    {
        x: 450,
        y: 800,
        r: 120
    },
    // rectangle
    {
        x: 300,
        y: 700,
        w: 300,
        h: 200
    },
    // polygon
    {
        points: [[300,700],[600,700],[450,900]],
    },
    // text
    {
        x: 450,
        y: 800,
        text: ['Why hello there', 'I am a text :D', 'Evades X', 'Taste the Edge.'][Math.floor(Math.random() * 4)],
        fontSize: 80,
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
        ctx.rect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
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
    }
]

const initSimulateMap = [
    /*pathMove*/
    (o, init) => {
		o.currentPoint = Math.floor(init.currentPoint);
        
		o.path = init.path;// like [[x,y,speed], ...]
        if(o.path.length < 2) o.path = window.simulateDefaultMap[0].path;

        o.pointOn = o.path[o.currentPoint];
        o.speed = o.pointOn[2];
        
        let nextPointIndex = o.currentPoint + 1;
        if (nextPointIndex >= o.path.length) nextPointIndex = 0;
        
        o.pointTo = o.path[nextPointIndex];
        angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
        o.xv = Math.cos(angle) * o.speed;
        o.yv = Math.sin(angle) * o.speed;

        o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
        
        // TODO: make this relative and not absolute, so point (0,0) and x:400,y:0 means the o would move starting from 400,0 instead of 0,0
        // const fractionalPointOffset = init.currentPoint - o.currentPoint;
        // if(fractionalPointOffset !== 0){
        //     o.timeRemain *= 1 - fractionalPointOffset;// 0.8 of the way there means timeRemain should be divided by 5
        //     o.pos.x = o.pointOn[0] * (1 - fractionalPointOffset) + fractionalPointOffset * o.pointTo[0];
        //     o.pos.y = o.pointOn[1] * (1 - fractionalPointOffset) + fractionalPointOffset * o.pointTo[1];
        // } else {
        //     o.pos.x = o.pointOn[0];
        //     o.pos.y = o.pointOn[1];
        // }
    },
    // /*rotate*/
    (o, init) => {
        o.pivotX = init.pivotX;
        o.pivotY = init.pivotY;
        o.rotation = 0;
        if(init.initialRotation !== 0 && init.initialRotation !== undefined){
            o.rotateSpeed = init.initialRotation * Math.PI / 180;
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
    },
    // /*custom*/
    () => {},
]

const simulateMap = [
    /*pathMove*/
    (o) => {
        // TODO: make it dt consistent
        o.pos.x += o.xv //* timeStep;
        o.pos.y += o.yv //* timeStep;

        o.timeRemain--;
        if (o.timeRemain <= 0) {
            o.currentPoint++;
            if (o.currentPoint > o.path.length - 1) {
                o.currentPoint = 0;
            }
            
            o.pointOn = o.path[o.currentPoint];
            o.speed = o.pointOn[2];
    
            // snapping back to the point that we should be on
            // TODO: make sure this is pixel perfect and remaining time is not skipped
            o.pos.x += o.xv * o.timeRemain;
            o.pos.y += o.yv * o.timeRemain;
    
            let nextPointIndex = o.currentPoint + 1;
            if (nextPointIndex >= o.path.length) {
                nextPointIndex = 0;
            }
            
            o.pointTo = o.path[nextPointIndex];
    
            angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
            o.xv = Math.cos(angle) * o.speed;
            o.yv = Math.sin(angle) * o.speed;

            // distance / speed
            o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
        }
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
            o.sat.r *= growthRatio;
        } else {
            // poly
            let [middleX, middleY] = generateTopLeftCoordinates(o);
            middleX += o.dimensions.x / 2;
            middleY += o.dimensions.y / 2;

            for(let i = 0; i < o.sat.points.length; i++){
                o.sat.points[i].x = (o.sat.points[i].x + o.pos.x - middleX) * growthRatio - o.pos.x + middleX;
                o.sat.points[i].y = (o.sat.points[i].y + o.pos.y - middleY) * growthRatio - o.pos.y + middleY;
            }
            o.sat.setPoints(o.sat.points);

            if(o.isText === true){
                o.fontSize *= growthRatio;
            }
        }

        o.dimensions = generateDimensions(o);
        o.lastGrowth = o.growth;
    },
    /*custom*/
    () => {}
]

window.simulateMapI2N = [
    'pathMove',
    'rotate',
    'grow',
    'custom'
]

window.simulateDefaultMap = [
    // pathMove
    {
        currentPoint: 0,
        path: [[0,0,1],[100,0,2],[0,100,3]],
    },
    // rotate
    {
        initialRotation: 0,
        rotateSpeed: 0.01,
        pivotX: 450,
        pivotY: 800
    },
    // grow
    {
        growSpeed: 0.006,
        shrinkSpeed: 0.006,
        maxGrowth: 1.25,
        minGrowth: 1,
        startGrowth: 1,
        toStartGrowing: true,
    },
    // custom
    {},
]

window.simulateConstraintsMap = [
    {currentPoint: [0, true]},
    undefined,
    {growSpeed: [0], shrinkSpeed: [0], minGrowth: [0.001], maxGrowth: [0.001]},
    undefined,
];

const initEffectMap = [
    /*bound*/
    () => {},
    /*kill*/
    () => {},
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
    (o) => {
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
        o.collected = false;
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

        o.touchingPlatformer = false;
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
        o.snapAngleRotateSpeed = params.snapAngleRotateSpeed * Math.PI/180;

        o.interpolatePlayerData = {};
        // o.snapDistanceX = Math.max(35, o.snapDistanceX);
        // o.snapDistanceY = Math.max(35, o.snapDistanceY);

        o.snapToShowVelocity = Math.min(o.snapDistanceX, o.snapDistanceY) > 40;
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
    },
    /*decoration*/
    (o, params) => {
        o.decoFilePath = params.decoFilePath;
    }
]

const effectMap = [
    /*bound*/
    (p, res, o, id) => {
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
        p.touchingNormalIndexes.push(id);
    },
    /*kill*/
    (p) => {
        p.dead = true;
    },
    /*bounce*/
    (p, res, o) => {
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;

        angle = Math.atan2(res.overlapV.y, res.overlapV.x);

        p.forces.push([Math.cos(angle) * o.bounciness, Math.sin(angle) * o.bounciness, o.decay]);
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
    (p) => {
        // TODO: make winpad have a param that, if true, sends
        // players that beat this level to another level of the
        // level maker's choosing
        if(isEditor === true || window.standalone === true){
            // respawn
            window.respawnPlayer();
            if(window.inClearCheckMode === true){
                window.exitClearCheckMode();
                uploadCode();
            }
        } else {
            // scroll
            toScroll = true;

            if(window.tutorial === true){
                window.beatCurrentTutorialMap();
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
        if(o.collected === true) return;
        o.collected = true;

        let [topLeftX, topLeftY] = generateTopLeftCoordinates(o);
        
        window.spawnPosition.x = topLeftX + o.dimensions.x / 2;
        window.spawnPosition.y = topLeftY + o.dimensions.y / 2;
    },
    /*breakable*/
    (p, res, o) => {
        if(o.strength > 0){
            p.pos.x += res.overlapV.x;
            p.pos.y += res.overlapV.y;
            o.strength--;
            // if(o.strength < 0) o.strength = 0;
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
        player.pos.x = o.tpx;
        player.pos.y = o.tpy;
    },
    /*conveyor*/
    (p, res, o) => {
        p.forces.push([Math.cos(o.conveyorAngle) * o.conveyorForce, Math.sin(o.conveyorAngle) * o.conveyorForce, o.conveyorFriction]);
    },
    /*platformer*/
    (p, res, o, id) => {
        o.touchingPlatformer = true;
        o.jumpCooldown--;

        // add conveyor force
        p.forces.push([Math.cos(o.platformerAngle) * o.platformerForce, Math.sin(o.platformerAngle) * o.platformerForce, o.platformerFriction]);

        // idea: find the amount of x/y the player moves in the platformer and move the opposite to effectively lock the player's motion perpendicular to the platformer's direction
        const playerVelAngle = Math.atan2(p.yv, p.xv);

        const angleBetween = o.platformerAngle - playerVelAngle;

        const distMovedOnPlatAngle = Math.cos(angleBetween) * Math.sqrt(p.yv ** 2 + p.xv ** 2);

        p.pos.x -= Math.cos(o.platformerAngle) * distMovedOnPlatAngle;
        p.pos.y -= Math.sin(o.platformerAngle) * distMovedOnPlatAngle;

        // checking if we were either intersecting with a normal last frame that's indexed after the obs or we are intersecting with a normal rn
        if(o.jumpCooldown <= 0 && (p.touchingNormalIndexes.length !== 0 || p.lastTouchingNormalIndexes[p.lastTouchingNormalIndexes.length-1] >= id || p.touchingWall === true)){
            o.canJump = true;
            // OLD: if we're within 30 degrees, jump; NEW: if the mouse is above the thumbs up in the rendering
            if(/*Math.abs(shortAngleDist(o.platformerAngle + Math.PI, playerVelAngle)) < Math.PI / 6*/window.dragging === true && player.pos.y - window.mouseY > player.sat.r + 50){
                p.forces.push([-Math.cos(o.platformerAngle) * o.jumpForce, -Math.sin(o.platformerAngle) * o.jumpForce, o.jumpFriction]);
                o.jumpCooldown = o.maxJumpCooldown;
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
        // Developed back in 8th grade and later presented for my math final. Ask me (serum) about it!
        // the basic idea of how it works is we have to snap to a rotated snap grid in space, so we
        // translate the player to the snapGrid until its like the snap grid is unrotated. Then we snap
        // by moduloing the x to the grid and then rotate back to get the final position.
        o.snapCooldown--; 

        if(o.snapCooldown <= 0 && (Math.abs(p.xv) > 0.01 || Math.abs(p.yv) > 0.01)){
            o.snapCooldown = o.maxSnapCooldown;
            let playerSnapAngle = Math.atan2(p.yv, p.xv);
            o.interpolatePlayerData = {
                time: Math.min(o.maxSnapCooldown-1, 5),
                nextX: p.pos.x + Math.cos(playerSnapAngle) * o.snapMagnitude * 0.95,
                nextY: p.pos.y + Math.sin(playerSnapAngle) * o.snapMagnitude * 0.95
            };
            // p.pos.x += Math.cos(o.pSnapAngle) * o.snapDistanceX;
            // p.pos.y += Math.sin(o.pSnapAngle) * o.snapDistanceY;
        }

        if(o.interpolatePlayerData.time > 1){
            o.interpolatePlayerData.time--;
            p.pos.x = p.pos.x * 0.8 + 0.2 * o.interpolatePlayerData.nextX;
            p.pos.y = p.pos.y * 0.8 + 0.2 * o.interpolatePlayerData.nextY;
        } else {
            let [topLeftX, topLeftY] = generateTopLeftCoordinates(o);
            let middleX = topLeftX + o.dimensions.x / 2;
            let middleY = topLeftY + o.dimensions.y / 2;
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
            prt.x = prt.x * 0.4 + 0.6 * (Math.round(prt.x / o.snapDistanceX) * o.snapDistanceX + p.xv * (o.snapToShowVelocity*2-1));
            prt.y = prt.y * 0.4 + 0.6 * (Math.round(prt.y / o.snapDistanceY) * o.snapDistanceY + p.yv * (o.snapToShowVelocity*2-1));

            prt.angle = Math.atan2(prt.y, prt.x) + o.snapAngle;
            prt.distance = Math.sqrt(prt.y**2 + prt.x**2);

            // rotating back
            // translating the relative coordinates back to absolute ones
            p.pos.x = Math.cos(prt.angle) * prt.distance + middleX;
            p.pos.y = Math.sin(prt.angle) * prt.distance + middleY;

            // checking if the original point was outside of the snapgrid as a result of rotation. If so, apply translations to make it right
            if(p.pos.x < topLeftX - p.speed || p.pos.x > topLeftX + o.dimensions.x + p.speed){
                p.pos.x += Math.sign(p.xv) * o.snapDistanceX*0.6;
            }

            if(p.pos.y < topLeftY - p.speed || p.pos.y > topLeftY + o.dimensions.y + p.speed){
                p.pos.y += Math.sign(p.yv) * o.snapDistanceY*0.6;
            }
        }
    },
    /*timeTrap*/
    (p, res, o) => {
        o.timeTrapIntersecting = true;
        o.timeTrapTime--;
        if(o.timeTrapTime < 0){
            if(o.timeTrapToKill === true) p.dead = true;
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
    /*decoration*/
    (p, res, o) => {},
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
    },
    // 'timeTrap'
    (o) => {
        if(o.timeTrapIntersecting !== true) o.timeTrapTime += o.timeTrapRecoverySpeed;
        if(o.timeTrapTime > o.timeTrapMaxTime) o.timeTrapTime = o.timeTrapMaxTime;
        o.timeTrapIntersecting = false;
    },
    // 'changeSize'
    (o) => {
        if(o.sizeChangePermanent === true) return;

        if(o.lastChangeSizeColliding === true && o.changeSizeColliding === false){
            // exit
            player.sat.r /= o.sizeMult;
        } else if(o.lastChangeSizeColliding === false && o.changeSizeColliding === true){
            // enter
            player.sat.r *= o.sizeMult;
        }

        o.lastChangeSizeColliding = o.changeSizeColliding;
        o.changeSizeColliding = false;
    },
    // 'changeSpeed'
    undefined,
    // 'solidColor'
    undefined,
    // 'decoration'
    undefined
]

window.effectConstraintsMap = [
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
    /*decoration*/
    undefined,
]

window.effectMapI2N = [
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
    'decoration'
]

window.effectDefaultMap = [
    // bound
    {},
    // kill
    {},
    // bounce
    {
        bounciness: 1,
        decay: 0.98
    },
    // custom
    {},
    // customEffect
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
        hex: '#FFFFFF'
    },
    // decoration
    {},
]

const renderEffectMap = [
    /*bound*/
    (o) => { 
        ctx.fillStyle = window.colors.tile;
    },
    /*kill*/
    (o) => {
        ctx.fillStyle = '#c70000';
        ctx.strokeStyle = 'black';
        ctx.toStroke = true;
        ctx.lineWidth = 2;
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

            const [topLeftX, topLeftY] = generateTopLeftCoordinates(o);
            ctx.drawImage(window.starImg, topLeftX, topLeftY, o.dimensions.x, o.dimensions.y);

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

            const [topLeftX, topLeftY] = generateTopLeftCoordinates(o);
            ctx.drawImage(o.img, topLeftX, topLeftY, o.dimensions.x, o.dimensions.y);

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
        ctx.fillStyle = `hsl(${window.time/12},50%,50%)`;
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
                let [middleX, middleY] = generateTopLeftCoordinates(o);
                middleX += o.dimensions.x / 2; middleY += o.dimensions.y / 2;

                ctx.fillStyle = window.colors.tile;//'#313131';
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
        ctx.fillStyle = window.colors.tile;
        ctx.globalAlpha = o.coins <= 0 ? 0.5 : 1;
        ctx.cleanUpFunction = () => {
            ctx.fillStyle = o.coinDoorColor;

            let [middleX, middleY] = generateTopLeftCoordinates(o);
            middleX += o.dimensions.x / 2; middleY += o.dimensions.y / 2;

            ctx.beginPath();
            ctx.roundRect(middleX-o.dimensions.x/4, middleY-o.dimensions.y/4, o.dimensions.x/2, o.dimensions.y/2, Math.min(o.dimensions.x,o.dimensions.y)/20);
            ctx.fill();
            ctx.closePath();
    
            ctx.fillStyle = window.colors.tile;//'#313131'//'#484a00';
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
        if (o.collected === true) {
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
        ctx.fillStyle = window.colors.tile;// to make it into hex
        ctx.fillStyle = blendColor('#000000', ctx.fillStyle, 0.5);
        ctx.globalAlpha = o.strength / o.maxStrength;
    },
    /*safe*/
    (o) => {
        ctx.fillStyle = '#8c8c8c';
        ctx.globalAlpha = 0.25;
    },
    /*tp*/
    (o) => {
        ctx.fillStyle = 'green';
    },
    /*conveyor*/
    (o) => {
        ctx.fillStyle = window.colors.tile;
        ctx.globalAlpha = 0.1;
        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();
            let [topLeftX, topLeftY] = generateTopLeftCoordinates(o);

            ctx.globalAlpha = 1;
            for(let x = topLeftX + 50; x <= topLeftX + o.dimensions.x + 50; x += 100){
                for(let y = topLeftY + 50; y <= topLeftY + o.dimensions.y + 50; y += 100){
                    ctx.translate(x,y);
                    ctx.rotate(o.conveyorAngle+Math.PI/2);
                    ctx.drawImage(window.arrowImg, -50, -50, 100, 100);
                    ctx.rotate(-o.conveyorAngle-Math.PI/2);
                    ctx.translate(-x,-y);
                }
            }

            ctx.restore();
            // ctx.beginPath();
            // ctx.fillStyle = 'red';
            // ctx.arc(topLeftX, topLeftY, 30, 0, Math.PI * 2);
            // ctx.fill();
            // ctx.closePath();
        }
    },
    /*platformer*/
    (o) => {
        ctx.fillStyle = window.colors.tile;
        ctx.globalAlpha = 0.1;
        ctx.cleanUpFunction = () => {
            ctx.save();
            ctx.clip();
            let [topLeftX, topLeftY] = generateTopLeftCoordinates(o);

            const offsetX = (window.time * o.platformerForce * Math.cos(o.platformerAngle) / 10) % 100 - 100;
            const offsetY = (window.time * o.platformerForce * Math.sin(o.platformerAngle) / 10) % 100 - 100;

            ctx.globalAlpha = 1;
            for(let x = topLeftX + offsetX + 50; x <= topLeftX + o.dimensions.x + 50; x += 100){
                for(let y = topLeftY + offsetY + 50; y <= topLeftY + o.dimensions.y + 50; y += 100){
                    ctx.translate(x,y);
                    ctx.rotate(o.platformerAngle+Math.PI/2);
                    ctx.drawImage(window.arrowImg, -50, -50, 100, 100);
                    ctx.rotate(-o.platformerAngle-Math.PI/2);
                    ctx.translate(-x,-y);
                }
            }

            ctx.restore();

            // rendering 👍 if player can jump
            // if there ever is to be more emojis like this, then make an array of emojis that i can push to that render on top of each other every frame (w/ priority? sorted?)
            if(o.canJump === true && o.touchingPlatformer === true){
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'white';
                ctx.font = `56px Inter`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('👍', player.pos.x, player.pos.y - player.sat.r - 50);
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

            let [topLeftX, topLeftY] = generateTopLeftCoordinates(o);
            ctx.translate(topLeftX + o.dimensions.x / 2, topLeftY + o.dimensions.y / 2);

            ctx.clip();

            ctx.globalAlpha = o.axisSpeedMultX > 1 ? 0.8 : (Math.max(0.3,o.axisSpeedMultX < 0 ? -o.axisSpeedMultX : 1-o.axisSpeedMultX));
            ctx.strokeStyle = o.axisSpeedMultX < 0 ? 'red' : (o.axisSpeedMultX > 1 ? '#c5c500' : 'white');

            ctx.beginPath();
            for(let x = -o.dimensions.x/2; x <= o.dimensions.x/2; x += 50){
                ctx.moveTo(x,-o.dimensions.y/2);
                ctx.lineTo(x,o.dimensions.y/2);
            }
            ctx.stroke();
            ctx.closePath();

            ctx.globalAlpha = o.axisSpeedMultY > 1 ? 0.8 : (Math.max(0.3,o.axisSpeedMultY < 0 ? -o.axisSpeedMultY : 1-o.axisSpeedMultY));
            ctx.strokeStyle = o.axisSpeedMultY < 0 ? 'red' : (o.axisSpeedMultY > 1 ? '#c5c500' : 'white');

            ctx.beginPath();
            for(let y = -o.dimensions.y/2; y <= o.dimensions.y/2; y += 50){
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

            let [middleX, middleY] = generateTopLeftCoordinates(o);
            middleX += o.dimensions.x / 2; middleY += o.dimensions.y / 2;
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
        let [middleX, middleY] = generateTopLeftCoordinates(o);
        middleX += o.dimensions.x / 2; middleY += o.dimensions.y/2;

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

            ctx.fillText(o.timeTrapToShowTenth === true ? Math.round(o.timeTrapTime / 60 * 10) / 10 : Math.round(o.timeTrapTime / 60), middleX, middleY);
        }
    },
    /*changeSize*/
    (o) => {
        if(o.sizeChangePermanent === true){
            ctx.toStroke = true;
            ctx.lineWidth = 10;
            ctx.lineDashOffset = -window.time / 15;
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
            ctx.lineDashOffset = -window.time / 15;
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
        }
        ctx.globalAlpha = 0.25;

        // permanents should dissapear upon use i think
    },
    /*solidColor*/
    (o) => {
        ctx.fillStyle = o.hex;
        if(o.isText === true)ctx.globalAlpha = 0;
    },
    /*decoration*/
    (o) => {
        ctx.toFill = false;

        const decoImg = decorationImgs[o.decoFilePath];
        if(decoImg === undefined){
            decorationImgs[o.decoFilePath] = 'loading';
            let img = new Image();
            if(o.decoFilePath.slice(0,4) === 'http'){
                img.src = o.decoFilePath;
                img.onload = () => {
                    decorationImgs[o.decoFilePath] = img;
                }
            } else {
                if(isEditor === true){
                    import(`./gfx/decorations/${o.decoFilePath}`).then(data => {
                        img.src = data.default;
                        decorationImgs[o.decoFilePath] = img;
                    });
                } else {
                    img.src = `./gfx/decorations/${o.decoFilePath}`;
                    img.onload = () => {
                        decorationImgs[o.decoFilePath] = img;
                    }
                }
            }
            return;
        } else if(decoImg === 'loading') {
            return;
        }

        let [middleX, middleY] = generateTopLeftCoordinates(o);
        middleX += o.dimensions.x / 2;
        middleY += o.dimensions.y / 2;
        const maxDimension = Math.max(o.dimensions.x, o.dimensions.y);

        ctx.translate(middleX, middleY);
        if(o.rotation !== undefined) ctx.rotate(o.rotation);
        ctx.drawImage(decoImg, -maxDimension / 2, -maxDimension / 2, maxDimension, maxDimension);
        if(o.rotation !== undefined) ctx.rotate(-o.rotation);
        ctx.translate(-middleX, -middleY);
    }
]

// an obstacle is an ECS
const obstacles = window.obstacles = [];

window.spawnPosition = {x: 100, y: 1500};
// a player is also an ecs
create(0/*circle*/, [], [], /*no simulate/ effects*/ {x: window.spawnPosition.x, y: window.spawnPosition.y, r: /*24.5*/49.5})
const player = window.player = obstacles.pop();
player.axisSpeedMultX = player.axisSpeedMultY = 1;
player.touchingNormalIndexes = [];
player.lastTouchingNormalIndexes = [];
player.renderRadius = player.sat.r;
player.xv = player.yv = 0;
player.speed = player.baseSpeed = 4;
player.dead = false;
player.onSafe = false;
player.touchingWall = false;
player.stopForces = false;
player.forces = [];

export default simulate;