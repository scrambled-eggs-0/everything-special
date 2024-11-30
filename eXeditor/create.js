import shared from '../shared/shared.js';

const btn = document.getElementById('create-button');
btn.onclick = () => {[changeState, cancelState, cancelState, cancelState, () => {cancelState(); changeState()}][state]();}
const oldRender = shared.render;
shared.render = (...params) => {
    oldRender(...params);

    renderCreateMenu();
}

// 0 - disabled,        1 - choose shape,
// 2 - choose simulate, 3 - choose effect,
// 4 - chosen
// esc to cancel btw not like zero's space to create
let state = 0;
let obs = [], params={}, type=[0,[],[0]], previewObs;
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
    } else if(state === 4){
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
const modifyTypeMap = [
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

const extraObsMap = [/*lambda array, mostly texts*/];
function changeState(){
    obs.length = 0;
    state++;
    if(state >= 1 && state <= 3){
        const v = variantMaps[state-1];
        for(let i = 0; i < v.length; i++){
            modifyTypeMap[state-1](i);
            shared.C(...type, {...params, ...v[i]});
            obs.push(shared.obstacles.pop());
        }

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
        }
    } else if(state === 4){
        polyPts.length = 0;
        startX = startY = undefined;
    }
}

function cancelState(){
    state = 0;
    obs.length = 0;
    shared.stopEditorCreateDrag();
    params = {};
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

canvas.onmousedown = (e) => {
    const dimensions = canvas.getBoundingClientRect();
    const x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    const y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        const worldX = x + shared.camera.x - canvas.w/2;
        const worldY = y + shared.camera.y - canvas.h/2;
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

    for(let i = 0; i < bounds[state-1].length; i++){
        const b = bounds[state-1][i];
        if(x < b.x || x > b.x + b.w || y < b.y || y > b.y + b.h) continue;
        if(e.button !== 0){
            // if this is a middle or right click
            b.selected = false;
            return;
        }
        if(state === 1 || (state !== 1 && b.selected === true)){
            // we double clicked. Advance to the next state (shape->simulate simulate->effect).
            // but first, save our params and type
            const v = variantMaps[state-1];
            for(let key in v[i]){
                params[key] = v[i][key];
            }
            // going from shape to simulate we have to halve the size.
            if(state === 1) halveSizeMap[i](params);
            modifyTypeMap[state-1](i);
            changeState();
            return;
        }
        b.selected = !b.selected;
        return;
    }
}

canvas.onmouseup = (e) => {
    if(startX === undefined) return;
    const dimensions = canvas.getBoundingClientRect();
    const x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    const y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        const shape = type[0];
        if(shape === 2) return;
        const worldX = x + shared.camera.x - canvas.w/2;
        const worldY = y + shared.camera.y - canvas.h/2;
        endX = worldX; endY = worldY;
        createWithPos();
        shared.stopEditorCreateDrag();
        return;
    }
}

canvas.onmousemove = (e) => {
    if(startX === undefined) return;
    const dimensions = canvas.getBoundingClientRect();
    const x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w;
    const y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h;

    if(state === 4){
        const shape = type[0];
        const worldX = x + shared.camera.x - canvas.w/2;
        const worldY = y + shared.camera.y - canvas.h/2;
        endX = worldX; endY = worldY;
        if(shape === 2) polyPts.push([endX, endY]);
        createWithPos();
        previewObs = shared.obstacles.pop();
        if(shape === 2) polyPts.pop();
        return;
    }
}

function createWithPos(){
    generatePosParams[type[0]](params, startX, startY, endX, endY);
    // guaranteed not to be deep reffed
    // because we reset params right after
    shared.C(...type, {...structuredClone(params)});
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
        const wRatio = w / dimensions.w;
        const hRatio = h / dimensions.h;
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

// let obstacleOptions = [];
// let type = [0,[],[0]];
// let params = {};

// function initCreateMode(){
//     shared.onEditorReset();
//     state = 'shape';
//     // shape
//     for(let i = 0; i < shared.satDefaultMap.length; i++){
//         type[0] = i;
//         addObstacleOption(shared.satDefaultMap[i], i);
//     }
// }

// function addObstacleOption(extraParams, dif){
//     obstacleOptions.push(shared.obstacles.length);
//     shared.C(...type, {...params, ...extraParams});
//     const o = shared.obstacles[shared.obstacles.length-1];
//     o.desiredX = o.desiredY = 0;
//     o.selectionDifference = dif;
// }

// shared.onEditorResetFns.push(() => {
//     shared.C(0,[],[3],{x:-1E9,y:0,r:1,sf:(_,p)=>{
//         for(let i = 0; i < obstacleOptions.length; i++){
//             const ind = obstacleOptions[i];
//             const o = shared.obstacles[ind];
//             const angle = i / obstacleOptions.length * Math.PI * 2;
    
//             const r = Math.min(canvas.w, canvas.h) / 3;
//             o.desiredX = p.pos.x + Math.sin(angle) * r;
//             o.desiredY = p.pos.y - Math.cos(angle) * r;
    
//             o.pos.x -= (o.topLeft.x+o.dimensions.x/2) - o.desiredX;
//             o.pos.y -= (o.topLeft.y+o.dimensions.y/2) - o.desiredY;
    
//             o.topLeft = shared.generateTopLeftCoordinates(o);
//         }
//     }});
// })

// let res = new SAT.Response();
// let cursor = new SAT.Circle(new SAT.Vector(0,0), .1);
// let collided = false;
// canvas.onclick = (e) => {
//     const dimensions = canvas.getBoundingClientRect();
//     cursor.pos.x = ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w + shared.camera.x - canvas.w/2;
//     cursor.pos.y = ((e.pageY - dimensions.y) / dimensions.height) * canvas.h + shared.camera.y - canvas.h/2;

//     collided = false;
//     for(let j = 0; j < obstacleOptions.length; j++){
//         const i = obstacleOptions[j];
//         // TODO: fix the copypasting (this is really bad code quality lol)
//         if(shared.obstacles[i].sat.r !== undefined){
//             if(shared.obstacles[i].startSlice !== undefined){
//                 collided = shared.testCircleSliceCircle(shared.obstacles[i], {sat: cursor, pos: cursor.pos}, res);
//             } else {
//                 collided = SAT.testCircleCircle(shared.obstacles[i].sat, cursor, res);
//             }
//         } else {
//             collided = SAT.testPolygonCircle(shared.obstacles[i].sat, cursor, res);
//         }
//         res.clear();
//         if(collided === true){
//             selectObstacle(shared.obstacles[i].selectionDifference);
//             break;
//         }
//     }
// }

// let lastSelectedIndex = -1;
// function selectObstacle(i){
//     if(state === 'shape'){
//         // proceed to simulate
//         type[0] = i;
//         for(let i = 0; i < obstacleOptions.length; i++){
//             shared.R(obstacleOptions[i]);
//         }
//         obstacleOptions.length = 0;
//         state = 'simulate';
//         for(let key in shared.satDefaultMap[i]){
//             params[key] = shared.satDefaultMap[i][key];
//         }
//         // no simulate
//         type[1] = [];
//         addObstacleOption({}, 0);
//         for(let i = 0; i < /*shared.simulateDefaultMap.length*/3; i++){
//             type[1] = [i];
//             addObstacleOption(shared.simulateDefaultMap[i], i+1);
//         }
//     } else if(state === 'simulate'){
//         if(lastSelectedIndex === i){
//             // proceed to effect
//             type[1] = i === 0 ? [] : [i];
//             for(let i = 0; i < obstacleOptions.length; i++){
//                 shared.R(obstacleOptions[i]);
//             }
//             obstacleOptions.length = 0;
//             state = 'effect';
//             for(let key in shared.simulateDefaultMap[i]){
//                 params[key] = shared.simulateDefaultMap[i][key];
//             }
//             for(let i = 0; i < shared.effectDefaultMap.length; i++){
//                 type[2] = [i];
//                 addObstacleOption(shared.effectDefaultMap[i], i);
//             }
//         } else {
//             // add the obstacle to our selection
//             shared.selectedObstacles.push(shared.obstacles[obstacleOptions[i]]);
//             lastSelectedIndex = i;
//         }
//     } else if(state === 'effect'){
        
//     }
// }

// // UNUSED - used to be mass create in omni!

// import * as Blockly from 'blockly';

// let createBlock = null;
// let createBlockXML = null;
// let inCreateMode = false;

// let previewX = 0;
// let previewY = 0;
// let previewShape = -1;
// let previewPolygonPoints = [];
// let previewText = ''; let previewFontSize = 80;
// let isDragging = false;
// let generatorInit = false;
// window.inClearCheckMode = false;
// // let newBlockPos = {x: 0, y: 0};
// // let createBlockWidth = 0;
// // const blockPadding = 32; // const moveDist = 30;// Blockly.SNAP_RADIUS
// const createModeBg = document.getElementById('createmodebg');
// const createModeBtn = document.getElementById('createmode');
// const blocklyDiv = document.getElementById('blocklyDiv');
// const outputPane = document.getElementById('outputPane');
// const publishBtn = document.getElementById('publish');
// const canvas = document.getElementById('canvas');
// createModeBtn.onclick = () => {
//     alert('select a block to mass create!', false);
//     blocklyDiv.style.cursor = 'crosshair';
//     const cl = window.ws.addChangeListener((e) => {
//         if(e.blockId === undefined) return;
//         const block = window.ws.getBlockById(e.blockId);
//         if(block === null || block.type !== "create_obstacle") return;

//         window.fadeAlert();

//         window.setCreateBlock(block);
        
//         // const createBlockPos = block.getRelativeToSurfaceXY();
//         // createBlockWidth = block.width;
//         // newBlockPos.x = createBlockPos.x + createBlockWidth + blockPadding;//+ moveDist;
//         // newBlockPos.y = createBlockPos.y //+ moveDist;

//         createModeBg.classList.remove('hidden');
//         canvas.remove();
//         createModeBg.appendChild(canvas);
//         window.ws.removeChangeListener(cl);

//         // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
//         window.canvasDimensions = canvas.getBoundingClientRect();
//         window.onmousemove({pageX: window.pageX, pageY: window.pageY, movementY: 0});

//         blocklyDiv.style.cursor = '';
//     });
// }
// createModeBg.onmousedown = () => {
//     previewX = window.mouseX;
//     previewY = window.mouseY;
//     isDragging = true;

//     if(window.mouseOut === true || (createBlock && createBlock.disposed === true)){
//         // exit create mode
//         createModeBg.classList.add('hidden');
//         canvas.remove();
//         outputPane.insertBefore(canvas, publishBtn);
//         isDragging = false;
//         inCreateMode = false;
//         window.inClearCheckMode = false;
//     }
// }
// let fixedPts;
// window.onclick = () => {
//     if(inCreateMode === false) return;

//     // if we click the canvas, create a block
//     if(previewShape === 0){
//         if(snapGrid(window.mouseX) === snapGrid(previewX) && snapGrid(window.mouseY) === snapGrid(previewY)) {
//             isDragging = false;
//             return;
//         }
//     } else if(previewShape === 1){
//         if(snapGrid(window.mouseX) === snapGrid(previewX) || snapGrid(window.mouseY) === snapGrid(previewY)) {
//             isDragging = false;
//             return;
//         }
//     } else if(previewShape === 2){
//         const nextPt = [snapGrid(window.mouseX), snapGrid(window.mouseY)];
//         previewPolygonPoints.push(nextPt);

//         // if we're not at the start
//         if(previewPolygonPoints.length === 1 || previewPolygonPoints[0][0] !== nextPt[0] || previewPolygonPoints[0][1] !== nextPt[1]){
//             return;
//         }

//         fixedPts = fixPolygon(previewPolygonPoints);
//         if(fixedPts.length <= 2){
//             isDragging = false;
//             return;
//         }
//     }
    
//     const newBlock = Blockly.Xml.domToBlock(createBlockXML, window.ws);

//     // get last child and connect
//     let lastBlock = createBlock;
//     let nextBlock;
//     while((nextBlock = lastBlock.getNextBlock()) !== null){
//         lastBlock = nextBlock;
//     }
//     lastBlock.nextConnection.connect(newBlock.previousConnection);

//     // change x and y to reflect mouse pos
//     // newBlock.getInput(newBlock.shapeParamToId['x'])
//     // newBlock.setFieldValue(window.mouseX, newBlock.shapeParamToId['x'] + 'F');

//     if(previewShape === 0){
//         // circle
//         newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewX))));
//         newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewY))));

//         const dist = Math.sqrt((snapGrid(previewX) - snapGrid(window.mouseX)) ** 2 + (snapGrid(previewY) - snapGrid(window.mouseY)) ** 2);
//         newBlock.getInput(newBlock.shapeParamToId['r']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(Math.floor(dist * 1000) / 1000)));
//     } else if(previewShape === 1){
//         // rect
//         const minX = Math.min(previewX, window.mouseX);
//         const maxX = Math.max(previewX, window.mouseX);

//         const minY = Math.min(previewY, window.mouseY);
//         const maxY = Math.max(previewY, window.mouseY);

//         newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(minX))));
//         newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(minY))));

//         newBlock.getInput(newBlock.shapeParamToId['w']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(maxX) - snapGrid(minX))));
//         newBlock.getInput(newBlock.shapeParamToId['h']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(maxY) - snapGrid(minY))));
//     } else if(previewShape === 2){
//         // polygon
//         // points: [[300,700],[600,700],[450,900]]
//         newBlock.getInput(newBlock.shapeParamToId['points']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(fixedPts)));
//         previewPolygonPoints.length = 0;
//     } else if(previewShape === 3){
//         newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(window.mouseX))));
//         newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(window.mouseY))));
//         newBlock.getInput(newBlock.shapeParamToId['text']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(previewText)));
//         newBlock.getInput(newBlock.shapeParamToId['fontSize']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(previewFontSize)));
//     } else {
//         console.error('previewShapeToObs not defined | createMode.js');
//     }

//     if(generatorInit === false) {generatorInit = true; window.generator.init(window.ws);}

//     for(let key in lastBlock.simulateParamToId){
//         const shadow = lastBlock.getInput(lastBlock.simulateParamToId[key]).connection.getShadowDom(true).cloneNode(true);
//         newBlock.getInput(newBlock.simulateParamToId[key]).setShadowDom(shadow);
//     }

//     for(let key in lastBlock.effectParamToId){
//         const shadow = lastBlock.getInput(lastBlock.effectParamToId[key]).connection.getShadowDom(true).cloneNode(true);
//         newBlock.getInput(newBlock.effectParamToId[key]).setShadowDom(shadow);
//     }
    

//     isDragging = false;
//     // newBlock.moveBy(newBlockPos.x, newBlockPos.y);
//     // newBlockPos.x += createBlockWidth + blockPadding//moveDist;
//     // // newBlockPos.y += moveDist;
// }

// createModeBg.oncontextmenu = (e) => {
//     isDragging = false;
//     previewPolygonPoints.length = 0;
//     return e.preventDefault();
// }

// // btw if we have any more rendering effects that need to be done then create a sep file with maybe window.editorRenderFunctions
// const oldRender = window.render;
// window.render = () => {
//     oldRender();

//     // render preview
//     if(!isDragging || window.inClearCheckMode === true) return;
//     ctx.beginPath();
//     ctx.fillStyle = 'black';
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 8;

//     if(previewShape === 0){
//         // circle
//         const x = snapGrid(previewX);
//         const y = snapGrid(previewY);
//         const dist = Math.sqrt((x - snapGrid(window.mouseX)) ** 2 + (y - snapGrid(window.mouseY)) ** 2);
//         ctx.arc(x, y, dist, 0, Math.PI * 2);
//     } else if(previewShape === 1){
//         // rectangle
//         ctx.rect(snapGrid(previewX), snapGrid(previewY), snapGrid(window.mouseX)-snapGrid(previewX), snapGrid(window.mouseY)-snapGrid(previewY));
//     } else if(previewShape === 2){
//         // polygon
//         if(previewPolygonPoints.length !== 0){
//             ctx.setLineDash([15, 12]);
//             ctx.lineDashOffset = -window.time / 48;
//             ctx.arc(previewPolygonPoints[0][0], previewPolygonPoints[0][1], 26, 0, Math.PI * 2);
//             ctx.stroke();
//             ctx.closePath();
//             ctx.setLineDash([]);

//             ctx.beginPath();
//             ctx.moveTo(previewPolygonPoints[0][0], previewPolygonPoints[0][1]);
//             for(let i = 0; i < previewPolygonPoints.length; i++){
//                 ctx.lineTo(previewPolygonPoints[i][0], previewPolygonPoints[i][1]);
//             }
//             ctx.lineTo(previewPolygonPoints[0][0], previewPolygonPoints[0][1]);
//         }
//     } else if(previewShape === 3){
//         // text
//         const x = snapGrid(window.mouseX); const y = snapGrid(window.mouseY);

//         ctx.setLineDash([28,8]);
//         ctx.lineDashOffset = -window.time / 55;

//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         ctx.lineWidth = 4;
//         ctx.font = `${previewFontSize}px Inter`;

//         const dimensions = ctx.measureText(previewText);
//         const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
//         const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;
//         const wOffset = (dimensions.actualBoundingBoxRight - dimensions.actualBoundingBoxLeft) / 2;
//         const hOffset = (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2;
//         ctx.rect(x - w/2, y - h/2, w, h);

//         ctx.strokeText(previewText, x - wOffset * (window.wOffsetMult??1), y - hOffset * (window.hOffsetMult??1));

//         ctx.lineWidth = 8;

//         ctx.setLineDash([]);
//     } else {
//         console.error('previewShape not defined | createMode.js');
//     }
//     ctx.globalAlpha = 0.29;
//     ctx.fill();
//     ctx.globalAlpha = 1;
//     ctx.stroke();
//     ctx.closePath();
// }

// // upload mode! Same thing with the canvas
// window.enterClearCheckMode = () => {
//     const selected = Blockly.getSelected();
//     if(selected !== null) selected.unselect();
//     window.runCode();
//     window.respawnPlayer();
//     window.inClearCheckMode = true;
//     if(document.activeElement.classList.contains('blocklyHtmlInput') === true){
//         document.activeElement.blur();
//     }
//     createModeBg.classList.remove('hidden');
//     canvas.remove();
//     createModeBg.appendChild(canvas);

//     // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
//     window.canvasDimensions = canvas.getBoundingClientRect();
//     window.onmousemove({pageX: window.pageX, pageY: window.pageY, movementY: 0});

//     blocklyDiv.style.cursor = '';
// }

// window.exitClearCheckMode = () => {
//     let last = window.mouseOut;
//     window.mouseOut = true;
//     createModeBg.onmousedown();
//     window.mouseOut = last;
// }

// window.setCreateBlock = (block) => {
//     const lastPreviousConnection = block.previousConnection.targetConnection;
//     const lastNextConnection = block.nextConnection.targetConnection;

//     block.previousConnection.disconnect();
//     block.nextConnection.disconnect();

//     createBlock = block;
//     createBlockXML = Blockly.Xml.blockToDom(block);

//     if(lastPreviousConnection !== null) block.previousConnection.connect(lastPreviousConnection);
//     if(lastNextConnection !== null) block.nextConnection.connect(lastNextConnection);

//     previewShape = parseInt(block.getFieldValue('SHAPE_DROPDOWN'));
//     if(previewShape === 2) previewPolygonPoints.length = 0;
//     else if(previewShape === 3) {
//         if(generatorInit === false) {generatorInit = true; window.generator.init(window.ws);}
//         previewText = window.generator.valueToCode(createBlock, createBlock.shapeParamToId['text'], 0);
//         previewText = previewText.slice(1, previewText.length - 1);
//         previewFontSize = parseFloat(window.generator.valueToCode(createBlock, createBlock.shapeParamToId['fontSize'], 0));
//     }

//     inCreateMode = true;
// }