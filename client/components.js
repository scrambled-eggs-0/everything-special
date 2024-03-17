import './SAT.js';
import Utils from './utils.js';
const { isEditor } = Utils;
import scroll from './scroll.js';
let toScroll = false;

window.respawnPlayer = () => {
    player.pos.x = window.spawnPosition.x;
    player.pos.y = window.spawnPosition.y;
    player.dead = false;
    player.forces.length = 0;
    window.onmouseup();
}
window.mouseDownFunctions.push(()=>{if(player.dead===true){window.respawnPlayer()}});

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
        initialDimensions: dimensionsMap[shape](params)
    };
    e.renderEffectTimer = 0;
    e.pos = e.sat.pos;
    for(let i = 0; i < simulates.length; i++){
        e.simulate.push(simulateMap[simulates[i]]);
        initSimulateMap[simulates[i]](e, params);
    }
    for(let i = 0; i < effects.length; i++){
        e.effect.push(effectMap[effects[i]]);
        initEffectMap[effects[i]](e, params);
    }
    if(params.tf !== undefined) e.simulate.push(params.tf);
    
    obstacles.push(e);
}
window.C = create;

let angle, speed, distSq;
let res = new SAT.Response();
let collided = false;
function simulate(){
    // player simulation
    if(window.dragging === true && player.dead === false){
        distSq = (window.mouseY - player.pos.y) ** 2 + (window.mouseX - player.pos.x) ** 2;
        if(player.speed ** 2 < distSq) speed = player.speed;
        else speed = Math.sqrt(distSq);
        angle = Math.atan2(window.mouseY - player.pos.y, window.mouseX - player.pos.x);
        player.pos.x += Math.cos(angle) * speed;
        player.pos.y += Math.sin(angle) * speed;
    }

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
                obstacles[i].effect[j](player, res, obstacles[i]);
            }
        }
        res.clear();// TODO: test if this is really needed

        // obstacle simulation
        for(let j = 0; j < obstacles[i].simulate.length; j++){
            obstacles[i].simulate[j](obstacles[i]);
        }
    }

    // bounding the player by the walls
    if(player.pos.x - player.sat.r < 0){
        player.pos.x = player.sat.r;
    } else if(player.pos.x + player.sat.r > canvas.width){
        player.pos.x = canvas.width - player.sat.r;
    }
    if(player.pos.y - player.sat.r < 0){
        player.pos.y = player.sat.r;
    } else if(player.pos.y + player.sat.r > canvas.height){
        player.pos.y = canvas.height - player.sat.r;
    }

    // scrolling if specified by a simulate type
    if(toScroll === true){
        toScroll = false;
        if(window.dragging === true) window.onmouseup();
        scroll();
        respawnPlayer();
    }

    // (rendering happens in between)
}

// TODO: separate these off into different files
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
        p.x = 0; p.y = 0;
        const s = new SAT.Polygon(new SAT.Vector(), p.points.map(pt => new SAT.Vector(pt[0], pt[1])));
        s.pos.x = p.x;
        s.pos.y = p.y;
        return s;
    },
];

const dimensionsMap = [
    /*circle*/
    (p) => {
        // x,y,r
        return {
            x: p.r * 2,
            y: p.r * 2
        }
    },
    /*rectangle*/
    (p) => {
        // x,y,w,h
        return {
            x: p.w,
            y: p.h
        }
    },
    /*polygon*/
    (p) => {
        let top, right, bottom, left;
        top = right = bottom = left = null;
        for(let [px, py] of p.points){
            if(px < left || left === null){
                left = px;
            }
            if(px > right || right === null){
                right = px;
            }
            if(py > bottom || bottom === null){
                bottom = py;
            }
            if(py < top || top === null){
                top = py;
            }
        }

        return {
            x: right - left,
            y: bottom - top
        }
    },
]

window.satMapI2N = [
    'circle',
    'rectangle',
    'polygon'
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
        if(o.hasRotated === true){
            renderShapeMap[2](o);
            return;
        }
        ctx.rect(o.pos.x, o.pos.y, o.sat.calcPoints[2].x - o.sat.calcPoints[0].x, o.sat.calcPoints[2].y - o.sat.calcPoints[0].y);
    },
    /*polygon*/
    (o) => {
        for(let i = 0; i < o.sat.points.length; i++){
            ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        }
        ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
    },
]

const initSimulateMap = [
    /*pathMove*/
    (o, init) => {
		o.currentPoint = Math.floor(init.currentPoint);
        
		o.path = init.path;// like [[x,y,speed], ...]

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
        o.rotateSpeed = init.rotateSpeed;
        o.pivotX = init.pivotX;
        o.pivotY = init.pivotY;
    }
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
    // /*rotate*/
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
        
        o.hasRotated = true;
    }
]

window.simulateMapI2N = [
    'pathMove',
    'rotate'
]

window.simulateDefaultMap = [
    // pathMove
    {
        currentPoint: 0,
        path: [[0,0,1],[100,0,2],[0,100,3]]
    },
    // rotate
    {
        rotateSpeed: 0.01,
        pivotX: 450,
        pivotY: 800
    }
]

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
    /*stopForces*/
    () => {},
    /*winpad*/
    () => {},
    /*coin*/
    (o, params) => {
        o.collected = false;
        o.coinAmount = params.coinAmount;
        o.color = params.color;
    },
    /*coindoor*/
    (o, params) => {
        o.isCoindoor = true;
        o.maxCoins = o.coins = params.coinAmount;
        o.color = params.color;
    },
]

const effectMap = [
    /*bound*/
    (p, res) => {
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
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
    /*stopForces*/
    (p) => {
        p.forces.length = 0;
    },
    /*winpad*/
    (p) => {
        // TODO: make winpad have a param that, if true, sends
        // players that beat this level to another level of the
        // level maker's choosing
        if(isEditor === true){
            // respawn
            respawnPlayer();
        } else {
            // scroll
            toScroll = true;
        }
    },
    /*coin*/
    (p, res, o) => {
        if(o.collected === true){
            return;
        }
        o.collected = true;
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].isCoindoor === true && obstacles[i].color === o.color){
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
]

window.effectMapI2N = [
    'bound',
    'kill',
    'bounce',
    'stopForces',
    'winpad',
    'coin',
    'coindoor'
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
        coinAmount: 3,
        color: '#d6d611'
    }
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
                ctx.fillStyle = window.colors.tile;//'#313131';
                ctx.font = `${Math.min(60, o.initialDimensions.x/4, o.initialDimensions.y/4)}px Inter`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(
                    Math.max(0, o.coinAmount),
                    o.pos.x,
                    o.pos.y
                );
            }
        }
    },
    /*coindoor*/
    (o) => {
        ctx.fillStyle = window.colors.tile;
        ctx.globalAlpha = o.coins <= 0 ? 0.5 : 1;
        ctx.cleanUpFunction = () => {
            ctx.fillStyle = o.color;

            ctx.beginPath();
            ctx.roundRect(o.pos.x-o.initialDimensions.x/4, o.pos.y-o.initialDimensions.y/4, o.initialDimensions.x/2, o.initialDimensions.y/2, Math.min(o.initialDimensions.x,o.initialDimensions.y)/20);
            ctx.fill();
            ctx.closePath();
    
            ctx.fillStyle = colors.tile;//'#313131'//'#484a00';
            ctx.font = `${Math.min(60, o.initialDimensions.x/4, o.initialDimensions.y/4)}px Inter`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                Math.max(0, o.coins),
                o.pos.x,
                o.pos.y
            );
        }
    },
]

// an obstacle is an ECS
const obstacles = window.obstacles = [];

window.spawnPosition = {x: 100, y: 1500};
// a player is also an ecs
create(0/*circle*/, [], [], /*no simulate/ effects*/ {x: window.spawnPosition.x, y: window.spawnPosition.y, r: /*24.5*/49.5})
const player = window.player = obstacles.pop();
player.speed = 4;
player.dead = false;
player.forces = [];

export default simulate;