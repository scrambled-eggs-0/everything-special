import * as Blockly from 'blockly';
import shared from '../shared/shared.js';
import {save} from './serialization';

const btn = document.getElementById('create-button');
btn.onclick = () => {[() => {/*shared.undoFns.push(cancelState);*/ changeState()}, cancelState, cancelState, cancelState, () => {cancelState(); changeState()}][state]();}

// 0 - disabled,        1 - choose shape,
// 2 - choose simulate, 3 - choose effect,
// 4 - chosen
// esc to cancel btw not like zero's space to create
let state = 0;
let obs = [], params={}, type=[0,[],[0]], previewObs, lastScale=1;
shared.snapDistance = 50;
let gridSizes = [
    /*choose shape*/
    [400,400],
    /*choose simulate*/
    [400,400],
    /*choose effect*/
    new Array(2).fill(Math.ceil(Math.sqrt(shared.effectDefaultMap.length)) * shared.tileSize)
];
gridSizes[2][1] += shared.tileSize;
function renderCreateMenu(){
    if(state >= 1 && state <= 3){
        lastScale = shared.camera.scale;
        if(lastScale !== 1) shared.changeCameraScale(1);

        const [w,h] = gridSizes[state-1];
        const cols = shared.colors;

        // render tiles
        ctx.fillStyle = cols.background;
        ctx.fillRect(0,0,w,h);

        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 4.8;
        ctx.strokeStyle = cols.tile;

        for (let x = 0; x <= w; x += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.closePath();
        }
    
        for (let y = 0; y <= h; y += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
            ctx.closePath();
        }

        ctx.globalAlpha = 1;

        shared.disableCulling();
        shared.renderObstacles(obs);

        // rendering bounds
        const b = bounds[state-1];

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 12;// or 10 idk
        for(let i = 0; i < b.length; i++){
            if(b[i].selected === false) continue;
            ctx.strokeRect(b[i].x, b[i].y, b[i].w, b[i].h);
        }

        // simulate
        if(state !== 1){
            for(let i = 0; i < obs.length; i++){
                // obstacle simulation
                for(let j = 0; j < obs[i].simulate.length; j++){
                    obs[i].simulate[j](obs[i], shared.players[shared.selfId]);
                }
            }
        }

        if(lastScale !== 1) shared.changeCameraScale(lastScale);
    } else if(state === 4){
        ctx.globalAlpha = 0.6 + Math.sin(window.frames / 36) * 0.05;
        ctx.fillStyle = 'white';
        ctx.font = `${54/shared.camera.scale}px Inter`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText('Create Mode (Esc to exit)', 10/shared.camera.scale, canvas.h - 20/shared.camera.scale);
        ctx.globalAlpha = 1;

        if(previewObs === undefined) return;
        // TODO: account for ship mode (devise a general system for getting cam translations, maybe a method in render.js?)
        ctx.translate(-(shared.camera.x-canvas.w/2), -(shared.camera.y-canvas.h/2));
        shared.renderObstacles([previewObs]);
        ctx.translate(shared.camera.x-canvas.w/2, shared.camera.y-canvas.h/2);
    }
}
const variantMaps = [shared.satDefaultMap, structuredClone(shared.simulateDefaultMap), shared.effectDefaultMap];
// remove custom and id simulate types, add "none"
variantMaps[1].splice(3,2); variantMaps[1].push({});
const setTypeMap = [
    (i) => {
        type[0] = i;
    },
    (i) => {
        if(i === variantMaps[1].length-1) type[1] = [];
        else type[1] = [[0,1,2,5][i]];        
    },
    (i) => {
        type[2] = [i];
    }
];
const resetTypeMap = [
    () => {},
    () => {type[1] = [];},
    () => {type[2] = [];}
]
const addTypeMap = [
    (i) => {
        type[0] = i;
    },
    (i) => {
        if(i === variantMaps[1].length-1) type[1] = [];
        else type[1].push([0,1,2,5][i]);    
    },
    (i) => {
        type[2].push(i);
    }
]
const removeTypeMap = [
    (i) => {},
    (i) => {type[1].filter(t => t!==i);},
    (i) => {type[2].filter(t => t!==i);},
]

const wrap = gridSizes[2][0]/shared.tileSize-1;
const bounds = [
    [
        /*circle*/
        {x:200,y:0,w:200,h:200},
        /*square*/
        {x:0,y:0,w:200,h:200},
        /*poly*/
        {x:0,y:200,w:200,h:200},
        /*text*/
        {x:200,y:200,w:200,h:100},
        /*circleSlice*/
        {x:200,y:300,w:200,h:100}
    ],
    [
        /*move*/
        {x:0,y:100,w:200,h:100},
        /*rotate*/
        {x:200,y:0,w:200,h:200},
        /*grow*/
        {x:0,y:200,w:200,h:200},
        /*homingRotate*/
        {x:200,y:200,w:200,h:200},
        /*none*/
        {x:0,y:0,w:200,h:100},
    ],
    new Array(shared.effectDefaultMap.length).fill(1).map((_,i) => {
        return {
            x: (i % wrap) * shared.tileSize + 50,
            y: Math.floor(i / wrap) * shared.tileSize + 50,
            w: 100, h: 100
        }
    })
]
for(let i = 0; i < bounds.length; i++){
    for(let j = 0; j < bounds[i].length; j++){
        bounds[i][j].selected = false;
    }
}

const extraObsMap = [
    () => {},
    ()=>{
        const C = (...params) => {
            shared.C(...params);
            obs.push(shared.obstacles.pop());
        }
        C(3,[],[20],{x:100,y:50,fontSize:36,text:'None',alpha:1,hex:"#FFFFFF"});
        C(3,[],[20],{x:300,y:300-36,fontSize:36,text:'Rotate',alpha:1,hex:"#FFFFFF"});
        C(3,[],[20],{x:300,y:300,fontSize:36,text:'Towards',alpha:1,hex:"#FFFFFF"});
        C(3,[],[20],{x:300,y:300+36,fontSize:36,text:'Player',alpha:1,hex:"#FFFFFF"});
        const shape = type[0];
        if(shape === 0) C(3,[],[20],{x:300,y:100,fontSize:36,text:'Rotate',alpha:1,hex:"#FFFFFF"});
    },
    ()=>{
        const C = (...params) => {
            shared.C(...params);
            obs.push(shared.obstacles.pop());
        }
        C(3,[],[20],{x:100,y:500-32/2,fontSize:32,text:'Solid',alpha:1,hex:"#000000"});
        C(3,[],[20],{x:100,y:500+32/2,fontSize:32,text:'Color',alpha:1,hex:"#000000"});
        C(3,[],[20],{x:200,y:500,fontSize:32,text:'Invis',alpha:1,hex:"#FFFFFF"});
        C(3,[],[20],{x:500,y:500,fontSize:26,text:'Vignette',alpha:1,hex:"#FFFFFF"});
        C(3,[],[20],{x:200,y:600,fontSize:32,text:'Music',alpha:1,hex:"#FFFFFF"});
    }
];
function changeState(){
    if(shared.inClearCheckMode === true) return;
    lastSelected = undefined;
    obs.length = 0;
    state++;
    if(state >= 1 && state <= 3){
        const v = variantMaps[state-1];
        for(let i = 0; i < v.length; i++){
            setTypeMap[state-1](i);
            shared.C(...type, {...params, ...v[i]});
            obs.push(shared.obstacles.pop());
        }
        resetTypeMap[state-1]();

        if(state !== 1){
            for(let i = 0; i < obs.length; i++){
                // offset into the bounds
                const middleX = obs[i].topLeft.x + obs[i].dimensions.x/2;
                const middleY = obs[i].topLeft.y + obs[i].dimensions.y/2;

                const b = bounds[state-1][i];
                const desiredX = b.x + b.w/2;
                const desiredY = b.y + b.h/2;

                // deltaX = desiredX - middleX
                obs[i].pos.x += desiredX - middleX;
                obs[i].pos.y += desiredY - middleY;

                obs[i].topLeft = shared.generateTopLeftCoordinates(obs[i]);
            }

            if(state === 3){
                for(let i = 0; i < obs.length; i++){
                    if(obs[i].pivotX !== undefined){
                        obs[i].pivotX = obs[i].topLeft.x + obs[i].dimensions.x/2;
                        obs[i].pivotY = obs[i].topLeft.y + obs[i].dimensions.y/2;
                    }
                    if(obs[i].growPivotX !== undefined){
                        obs[i].growPivotX = obs[i].topLeft.x + obs[i].dimensions.x/2;
                        obs[i].growPivotY = obs[i].topLeft.y + obs[i].dimensions.y/2;
                    }
                }
            }
        }

        extraObsMap[state-1]();
    } else if(state === 4){
        polyPts.length = 0;
        startX = startY = undefined;
    }
}

const cancelState = shared.cancelCreate = () => {
    lastSelected = undefined;
    state = 0;
    obs.length = 0;
    shared.stopEditorCreateDrag();
    params = {};
    type = [0,[],[0]];
}

let startX, startY, endX, endY, polyPts=[];
const halveSizeMap = [
    /*circle*/
    (p) => {
        p.r /= 2;
    },
    /*square*/
    (p) => {
        p.w /= 2; p.h /= 2;
    },
    /*poly*/
    (p) => {
        params.points = structuredClone(params.points);
        for(let i = 0; i < params.points.length; i++){
            params.points[i][0] /= 2;
            params.points[i][1] /= 2;
        }
    },
    /*text*/
    (p) => {
        params.fontSize /= 2;
    },
    /*circleSlice*/
    (p) => {
        params.r /= 2;
        params.innerRadius /= 2;
    }
]

let lastSelected;
shared.editorMouseDownFns.push((e) => {
    const dimensions = canvas.getBoundingClientRect();
    let x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    let y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        shared.breakFns = true;
        const [worldX, worldY] = shared.snapPt(shared.screenToWorld(x,y));
        const shape = type[0]; 
        startX = worldX; startY = worldY;
        if(shape === 2) {
            const pt = [worldX,worldY];
            const dist = polyPts.length === 0 ? Infinity : Math.sqrt((pt[0] - polyPts[0][0]) ** 2 + (pt[1] - polyPts[0][1]));
            if(dist < Math.max(10, shared.snapDistance)){
                endX = startX; endY = startY;

                createWithPos();
                shared.stopEditorCreateDrag();
                return;
            }
            polyPts.push(pt);
            return;
        }
        if(shape === 2) polyPts.push([worldX,worldY]);
        return;
    }

    if(state === 0 || state > 3) return;

    lastScale = shared.camera.scale;
    shared.changeCameraScale(1);

    x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    shared.changeCameraScale(lastScale);
    shared.breakFns = true;
    for(let i = 0; i < bounds[state-1].length; i++){
        const b = bounds[state-1][i];
        if(x < b.x || x > b.x + b.w || y < b.y || y > b.y + b.h) continue;
        if(e.button !== 0){
            // if this is a middle or right click
            b.selected = false;
            return;
        }
        if((state === 1 && lastSelected === i) || (state !== 1 && b.selected === true)){
            // UNDO
            // {
            //     let lastParams = structuredClone(params);
            //     let lastType = structuredClone(type);
            //     let lastObs = [];
            //     for(let i = 0; i < obs.length; i++){lastObs.push(obs[i]);}
            //     let lastState = state;
            //     let last_lastSelected = lastSelected;
            //     shared.undoFns.push(()=>{
            //         cancelState();
            //         type = lastType;
            //         params = lastParams;
            //         obs = lastObs;
            //         state = lastState;
            //         lastSelected = last_lastSelected;
            //     })
            // }
            // we double clicked. Advance to the next state (shape->simulate simulate->effect).
            // going from shape to simulate we have to halve the size.
            if(state === 1) halveSizeMap[i](params);
            changeState();
            return;
        }
        if(state === 1){
            // you can only select one shape (but multiple sims/ effects)
            if(lastSelected !== undefined && lastSelected !== i) {
                bounds[state-1][lastSelected].selected = false;
                const v = variantMaps[state-1];
                for(let key in v[lastSelected]){
                    delete params[key];
                }
            }
            lastSelected = i;
        }
        
        b.selected = !b.selected;

        // add or remove the type and params
        const v = variantMaps[state-1];
        if(b.selected === true) {
            addTypeMap[state-1](i);
            for(let key in v[i]){
                params[key] = v[i][key];
            }
        }
        else {
            removeTypeMap[state-1](i);
            for(let key in v[i]){
                delete params[key];
            }
        }
        // if this gets any more complex factor out add and remove into sep functions (just the const v and for loop)
        return;
    }
});

shared.editorMouseUpFns.push((e) => {
    if(startX === undefined) return;
    const dimensions = canvas.getBoundingClientRect();
    const x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    const y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        const shape = type[0];
        if(shape === 2) return;
        [endX, endY] = shared.snapPt(shared.screenToWorld(x,y));
        createWithPos();
        shared.stopEditorCreateDrag();
        shared.breakFns = true;
        return;
    }
});

shared.editorMouseMoveFns.push((e) => {
    if(startX === undefined) return;
    const dimensions = canvas.getBoundingClientRect();
    const x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    const y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        const shape = type[0];
        [endX, endY] = shared.snapPt(shared.screenToWorld(x,y));
        if(shape === 2) polyPts.push([endX, endY]);
        previewWithPos();
        previewObs = shared.obstacles.pop();
        if(shape === 2) polyPts.pop();
        shared.breakFns = true;
        return;
    }
});

function previewWithPos(){
    generatePosParams[type[0]](params, startX, startY, endX, endY);
    // guaranteed not to be deep reffed
    // because we reset params right after
    shared.C(...type, {...structuredClone(params)});
}

let offset = 0;
function createWithPos(){
    if(startX === endX && startY === endY && type[0] !== 2){
        shared.stopEditorCreateDrag();
        return;
    }
    Blockly.Events.disable();
    generatePosParams[type[0]](params, startX, startY, endX, endY);
    const [block, extraState] = shared.createBlock(type, true);

    console.log(block);
    block.moveBy((offset++)*7, (offset++)*7);

    // set shape params we got from 
    for(let key in extraState.shapeParamToId){
        const input = block.getInput(extraState.shapeParamToId[key]);
        input.setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(params[key])));
    }
    Blockly.Events.enable();
    shared.runCode();
    save(shared.ws);
}

const generatePosParams = [
    /*circle*/
    (params, x0,y0,x1,y1) => {
        params.x = x0;
        params.y = y0;

        const dist = Math.sqrt((x0-x1)**2+(y0-y1)**2);

        params.r = dist;
    },
    /*square*/
    (params, x0,y0,x1,y1) => {
        params.x = Math.min(x0,x1);
        params.y = Math.min(y0,y1);
        params.w = Math.abs(x0-x1);
        params.h = Math.abs(y0-y1);
    },
    /*poly*/
    (params, x0,y0,x1,y1) => {
        params.points = polyPts;
    },
    /*text*/
    (params, x0,y0,x1,y1) => {
        ctx.font = '1px Inter';
        const dimensions = ctx.measureText(shared.effectDefaultMap[3].text);

        params.x = (x0+x1)/2;
        params.y = (y0+y1)/2;
        const w = Math.abs(x0-x1);
        const h = Math.abs(y0-y1);

        const dimensionsW = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
        const dimensionsH = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;

        const wRatio = w / dimensionsW;
        const hRatio = h / dimensionsH;
        if(wRatio < hRatio){
            // text is tall, we're capped by h
            params.fontSize = Math.round(hRatio);
        } else {
            params.fontSize = Math.round(wRatio);
        }
    },
    /*circleSlice*/
    (params, x0,y0,x1,y1) => {
        params.x = x0;
        params.y = y0;

        const dist = Math.sqrt((x0-x1)**2+(y0-y1)**2);

        // TODO: snap to grid (ask haha if it should be like zero's editor with sqrts included,
        // e.g. 1.414 by moving up and left one or if it should be strictly 25's)
        params.r = dist;
        params.innerRadius = dist/2;

        params.startSliceAngle = 0;
        params.endSliceAngle = Math.PI * 2 - 0.001;
        params.startSliceAngleRotateSpeed = 0;
        params.endSliceAngleRotateSpeed = 0;
    }
]

shared.stopEditorCreateDrag = () => {
    startX = startY = endX = endY = undefined;
    polyPts.length = 0; previewObs = undefined;
    for(let i = 0; i < bounds.length; i++){
        for(let j = 0; j < bounds[i].length; j++){
            bounds[i][j].selected = false;
        }
    }
}

shared.createBlock = (type, toFocus=false) => {
    const ws = shared.ws;
    let block = ws.newBlock('create_obstacle');
    block.initSvg();
    block.render();
    shared.workspaceLoaded = false;

    const shape = type[0];
    const numSimulates = type[1].length;
    const numEffects = type[2].length;

    block.setFieldValue(shape.toString(), "SHAPE_DROPDOWN");
    block.setFieldValue(numSimulates.toString(), "NUM_SIMULATES_DROPDOWN");
    block.setFieldValue(numEffects.toString(), "NUM_EFFECTS_DROPDOWN");

    const shapeKeys = Object.keys(shared.satDefaultMap[shape]);

    const simulateKeys = [];
    for(let i = 0; i < numSimulates; i++){
        simulateKeys.push(...Object.keys(shared.simulateDefaultMap[type[1][i]]));
    }

    const effectKeys = [];
    for(let i = 0; i < numEffects; i++){
        effectKeys.push(...Object.keys(shared.effectDefaultMap[type[2][i]]));
    }

    const extraState = {};
    extraState.lastShape = shape;

    extraState.shapeParamToId = {};
    for(let i = 0; i < shapeKeys.length; i++){
        extraState.shapeParamToId[shapeKeys[i]] = `SHAPE${i}`;
    }
    extraState.lastShapeIdGen = shapeKeys.length;

    extraState.simulateParamToId = {};
    for(let i = 0; i < simulateKeys.length; i++){
        extraState.simulateParamToId[simulateKeys[i]] = `SIMULATE${i}`;
    }
    extraState.lastSimulateIdGen = simulateKeys.length;

    extraState.effectParamToId = {};
    for(let i = 0; i < effectKeys.length; i++){
        extraState.effectParamToId[effectKeys[i]] = `EFFECT${i}`;
    }
    extraState.lastEffectIdGen = effectKeys.length;

    extraState.numSimulateFields = numSimulates;
    extraState.numEffectFields = numEffects;

    extraState.sditk = type[1].map(s => s.toString());
    extraState.editk = type[2].map(s => s.toString());

    block.loadExtraState(extraState);

    // rotate
    for(let i = 0; i < numSimulates; i++){
        block.setFieldValue(type[1][i].toString(), `SIMULATE_DROPDOWN${i}`);
    }

    for(let i = 0; i < numEffects; i++){
        block.setFieldValue(type[2][i].toString(), `EFFECT_DROPDOWN${i}`);
    }
    
    shared.workspaceLoaded = true;
    // block.moveBy(x, y);
    if(toFocus === true) {ws.centerOnBlock(block.id);}
    for(let i = 0; i < shared.onWorkspaceLoadFunctions.length; i++){
        shared.onWorkspaceLoadFunctions[i]();
    }
    shared.onWorkspaceLoadFunctions.length = 0;

    return [block, extraState];
}

export default renderCreateMenu;