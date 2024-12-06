import * as Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
import {save} from './serialization';
import shared from '../shared/shared.js';
shared.selectedObstacles = [];

let state = 'select'; // select - rotate - resize
let startX, startY, endX, endY;

let transformX, transformY;

let tMinX, tMinY, tMaxX, tMaxY;

let draggingMinX = false;
let draggingMinY = false;
let draggingMaxX = false;
let draggingMaxY = false;

let rotateAngle, startRotateAngle, rotating=false;

// transformBoundX = transformBoundY = 100;
// transformBoundW = transformBoundH = 500;

const stateDivs = [
    document.getElementById('select'),
    document.getElementById('rotate'),
    document.getElementById('resize')
];
let highlightedText = stateDivs[0].children[1];
for(let i = 0; i < stateDivs.length; i++){
    const btn = stateDivs[i].children[0];
    const text = stateDivs[i].children[1];
    btn.onclick = () => {
        highlightedText.classList.remove('red');
        text.classList.add('red');
        highlightedText = stateDivs[i].children[1];
        state = stateDivs[i].id;
        startRotateAngle = rotateAngle = undefined;
        rotating = false;
        updateTransformBounds();
    }
}

function renderSelection(){
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 12;
    shared.translateScreenToWorld();
    for(let i = 0; i < shared.selectedObstacles.length; i++){
        ctx.beginPath();
        shared.selectedObstacles[i].renderShape(shared.selectedObstacles[i]);
        ctx.stroke();
        ctx.closePath();
    }
    shared.translateWorldToScreen();

    if(startX !== undefined){
        shared.translateScreenToWorld();
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.rect(startX, startY, endX - startX, endY - startY);
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.closePath();
        shared.translateWorldToScreen();
    }

    if(tMinX !== undefined && state !== 'select'){
        shared.translateScreenToWorld();
        ctx.lineWidth = 10 * Math.max(1, 1 / shared.camera.scale);
        ctx.lineDashOffset = -window.frames;
        ctx.globalAlpha = 0.767;
        ctx.strokeStyle = shared.blendColor('#0e30ad','#1c1852', 0.72);
        ctx.setLineDash([50, 50]);
        if(rotateAngle !== undefined){
            ctx.translate((tMinX+tMaxX)/2,(tMinY+tMaxY)/2);
            ctx.rotate(rotateAngle-startRotateAngle);
            ctx.strokeRect(tMinX-(tMinX+tMaxX)/2, tMinY-(tMinY+tMaxY)/2, tMaxX - tMinX, tMaxY - tMinY);
            ctx.rotate(-rotateAngle+startRotateAngle);
            ctx.translate(-(tMinX+tMaxX)/2,-(tMinY+tMaxY)/2);
        } else {
            ctx.strokeRect(tMinX, tMinY, tMaxX - tMinX, tMaxY - tMinY);
        }
        
        ctx.setLineDash([]);
        shared.translateWorldToScreen();
        ctx.globalAlpha = 1;
    }
}

let lastSimulating = shared.simulateMode;
function stopSimulation(){
    lastSimulating = shared.simulateMode;
    if(lastSimulating === false) return;
    shared.toggleSimulateMode();
}

function restartSimulation(){
    if(lastSimulating === false) return;
    shared.toggleSimulateMode();
    lastSimulating = shared.simulateMode;
}

let singleFlag = false;// TODO: pausing simulation!!
shared.editorMouseDownFns.push((e) => {
    // creating obs
    [startX, startY] = getWorldPos(e);

    if(state !== 'select'){
        // scale - check if we're close to the rect selection rect and if so determine which bounds we're dragging
        if(tMinX !== undefined){
            const cursor = new SAT.Circle(new SAT.Vector(startX, startY), 50);
            const selection = new SAT.Box(new SAT.Vector(tMinX, tMinY), tMaxX - tMinX, tMaxY - tMinY).toPolygon();
            const collided = SAT.testCirclePolygon(cursor, selection, new SAT.Response());

            if(state === 'rotate'){
                // rotate
                if(collided === false){
                    shared.selectedObstacles.length = 0;
                    updateTransformBounds();
                } else {
                    const middleX = (tMinX + tMaxX)/2;
                    const middleY = (tMinY + tMaxY)/2;
                    startRotateAngle = rotateAngle = Math.atan2(startY - middleY, startX - middleX);
                    rotating = true;

                    for(let i = 0; i < shared.selectedObstacles.length; i++){
                        const o = shared.selectedObstacles[i];
                        if(o.pivotX !== undefined){
                            o.alreadyHasRotateType = true;// used upon adding block
                            continue;
                        }
                        // giving them the *params* of the rotate type. We will officially add the type when we add to the block.
                        o.pivotX = middleX;
                        o.pivotY = middleY;
                        o.rotateSpeed = o.rotation = 0;
                    }
                    startX = startY = undefined;
                    stopSimulation();
                    return;
                }
            } else {
                // resize
                if(collided === false){
                    shared.selectedObstacles.length = 0;
                    updateTransformBounds();
                    tMinX = tMinY = tMaxX = tMaxY = undefined;
                } else {
                    const tolerance = 50;
                    if(Math.abs(startX - tMinX) < tolerance){
                        draggingMinX = true;
                    } else if(Math.abs(startX - tMaxX) < tolerance){
                        draggingMaxX = true;
                    }
    
                    if(Math.abs(startY - tMinY) < tolerance){
                        draggingMinY = true;
                    } else if(Math.abs(startY - tMaxY) < tolerance){
                        draggingMaxY = true;
                    }
                    startX = startY = undefined;
                    if(draggingMinX === false && draggingMinY === false && draggingMaxX === false && draggingMaxY === false){
                        tMinX = tMinY = tMaxX = tMaxY = undefined;
                        shared.selectedObstacles.length = 0;
                        updateTransformBounds();
                    }
                    stopSimulation();
                }
            }
        } else {
            shared.selectedObstacles.length = 0;
            updateTransformBounds();
            tMinX = tMinY = tMaxX = tMaxY = undefined;
        }
    }
    
    // immediate selection - if we're intersecting with an obs right now then select it and only it.
    shared.C(0,[],[0],{x:startX, y:startY, r:25});
    const selection = shared.obstacles.pop();
    const res = new SAT.Response(); let collided = false;
    // looping in render order - we want to select the topmost obs
    let i;
    for(i = shared.obstacles.length-1; i >= 0; i--){
        if(shared.obstacles[i].sat.r !== undefined){
            collided = SAT.testCircleCircle(shared.obstacles[i].sat, selection.sat, res);
        } else {
            collided = SAT.testPolygonCircle(shared.obstacles[i].sat, selection.sat, res);
        }
        if(collided === true){
            // start transform
            if(state === 'select'){
                transformX = startX;
                transformY = startY;
            }
            
            // if we're not included start a single drag.
            if(shared.selectedObstacles.includes(shared.obstacles[i]) === false){
                // set this obstacle to be the only one
                shared.selectedObstacles = [shared.obstacles[i]];
                startX = startY = undefined;
                singleFlag = true;
                selectCorrespondingBlock(shared.selectedObstacles[0]);

                // if we're not in transform mode set the bounds
                if(state !== 'select'){
                    const o = shared.obstacles[i];
                    tMinX = o.topLeft.x;
                    tMinY = o.topLeft.y;
                    tMaxX = o.topLeft.x + o.dimensions.x;
                    tMaxY = o.topLeft.y + o.dimensions.y;
                    startX = startY = undefined;
                    rotating = false;
                }
            }
            startX = startY = undefined;
            stopSimulation();
            break;
        }
        res.clear();
    }
    if(i === -1 && state === 'select') shared.selectedObstacles.length = 0;
    shared.regenerateMenu();
})

shared.editorMouseMoveFns.push((e) => {
    if(startX !== undefined){
        [endX, endY] = getWorldPos(e);
        return;
    }
    if(transformX !== undefined){
        // transform
        let [newX, newY] = shared.snapPt(getWorldPos(e));
        let deltaX = newX - transformX;
        let deltaY = newY - transformY;
        transformX = newX; transformY = newY;

        // just add pos for now, on update we'll make it official with the blocks.
        for(let i = 0; i < shared.selectedObstacles.length; i++){
            shared.selectedObstacles[i].pos.x += deltaX;
            shared.selectedObstacles[i].pos.y += deltaY;
            shared.selectedObstacles[i].topLeft = shared.generateTopLeftCoordinates(shared.selectedObstacles[i]);
        }
        return;
    }
    if(rotating === true){
        let [newX, newY] = shared.snapPt(getWorldPos(e));
        const middleX = (tMinX + tMaxX)/2;
        const middleY = (tMinY + tMaxY)/2;
        const angle = Math.atan2(newY - middleY, newX - middleX);
        setObstaclesMatchingRotate(middleX, middleY, angle);
        return;
    }
    if(draggingMinX === true || draggingMaxX === true || draggingMinY === true || draggingMaxY === true){
        let [newX, newY] = shared.snapPt(getWorldPos(e));
        setObstaclesMatchingResize(newX, newY);
    }
})

shared.editorMouseUpFns.push((e) => {
    if((transformX !== undefined && state === 'select') || (tMinX !== undefined && state !== 'select')){
        setBlocksMatchingTransform();
        restartSimulation();
        return;
    }
    if(singleFlag === true){
        // so that if we drag a single obs we don't let go of it on mouse up 
        singleFlag = false;
        return;
    }
    shared.selectedObstacles.length = 0;
    shared.unInitMenu();
    if(startX === undefined) return;
    [endX, endY] = getWorldPos(e);

    const params = {x: Math.min(startX, endX), y: Math.min(startY, endY), w: Math.abs(startX - endX), h: Math.abs(startY - endY)};
    if(params.w !== 0 && params.h !== 0){
        shared.C(1,[],[0],params);
        const selection = shared.obstacles.pop();
        const res = new SAT.Response(); let collided = false;
        for(let i = 0; i < shared.obstacles.length; i++){
            if(shared.obstacles[i].sat.r !== undefined){
                collided = SAT.testPolygonCircle(selection.sat, shared.obstacles[i].sat, res);
            } else {
                collided = SAT.testPolygonPolygon(selection.sat, shared.obstacles[i].sat, res);
            }
            if(collided === true){
                shared.selectedObstacles.push(shared.obstacles[i]);
            }
            res.clear();
        }
        if(shared.selectedObstacles.length !== 0){
            selectCorrespondingBlock(shared.selectedObstacles[shared.selectedObstacles.length-1]);
        }
    }
    startX = startY = endX = endY = undefined;
    shared.regenerateMenu();
    if(state !== 'select') updateTransformBounds();
})

function getWorldPos(e){
    const dimensions = canvas.getBoundingClientRect();
    return shared.screenToWorld(
        ((e.pageX - dimensions.x) / dimensions.width ) * canvas.w,
        ((e.pageY - dimensions.y) / dimensions.height) * canvas.h
    );
}

// selection
shared.obstacleToBlock = new Map();
shared.blockToObstacle = new Map();

shared.CB2O = (id) => {
  const block = shared.ws.getBlockById(id);
  const obstacle = shared.obstacles[shared.obstacles.length-1];

  shared.obstacleToBlock.set(obstacle, block);
  shared.blockToObstacle.set(block, obstacle);
}
const lastSelectedObsBlocks = [];
shared.onEditorResetFns.push(() => {
    // try to reselect. We delete all obs but not blocks
    // so save the blocks in hopes of getting them later
    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const block = shared.obstacleToBlock.get(shared.selectedObstacles[i]);
        if(block === undefined || block === null) continue;
        lastSelectedObsBlocks.push(block);
    }
    shared.selectedObstacles.length = 0;
    shared.obstacleToBlock = new Map();
    shared.blockToObstacle = new Map();
    shared.allowMenuGeneration(false);
});
shared.editorRunFns.push(() => {
    shared.allowMenuGeneration(true);
    if(lastSelectedObsBlocks.length === 0) return;
    shared.selectedObstacles.length = 0;
    for(let i = 0; i < lastSelectedObsBlocks.length; i++){
        const obs = shared.blockToObstacle.get(lastSelectedObsBlocks[i]);
        if(obs === undefined) continue;
        shared.selectedObstacles.push(obs);
    }
    lastSelectedObsBlocks.length = 0;
})
shared.selectCorrespondingObs = (id) => {
    const block = shared.ws.getBlockById(id);
    if(block === null) return;
    const obstacle = shared.blockToObstacle.get(block);
    if(obstacle === undefined || obstacle === null) return;
    if(shared.selectedObstacles.includes(obstacle)) return;
    shared.selectedObstacles.push(obstacle);
    if(shared.playMode === false){
        shared.players[shared.selfId].pos.x = obstacle.topLeft.x + obstacle.dimensions.x/2;
        shared.players[shared.selfId].pos.y = obstacle.topLeft.y + obstacle.dimensions.y/2;
    }
    shared.regenerateMenu();
}
function selectCorrespondingBlock(o) {
    const block = shared.obstacleToBlock.get(o);
    if(block !== null && block !== undefined){
        shared.ws.centerOnBlock(block.id);
        block.select();
    }
}

shared.deleteSelectedObs = () => {
    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const block = shared.obstacleToBlock.get(shared.selectedObstacles[i]);
        if(block === null) continue;
        block.dispose();
    }
    transformX = transformY = tMinX = tMaxX = tMinY = tMaxY = undefined;
    shared.selectedObstacles.length = 0;
    shared.unInitMenu();
}
document.getElementById('delete-button').onclick = shared.deleteSelectedObs;

function updateTransformBounds(){
    if(shared.selectedObstacles.length === 0){
        tMinX = tMinY = tMaxX = tMaxY = undefined;
        return;
    }
    tMinX = tMinY = Infinity;
    tMaxX = tMaxY = -Infinity;
    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const o = shared.selectedObstacles[i];
        if(o.topLeft.x < tMinX){
            tMinX = o.topLeft.x;
        }
        if(o.topLeft.y < tMinY){
            tMinY = o.topLeft.y;
        }
        if(o.topLeft.x + o.dimensions.x > tMaxX){
            tMaxX = o.topLeft.x + o.dimensions.x;
        }
        if(o.topLeft.y + o.dimensions.y > tMaxY){
            tMaxY = o.topLeft.y + o.dimensions.y;
        }
    }
}

// shared.onEditorResetFns.push(() => {
//     shared.C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
//         ctx.strokeStyle = 'blue';
//         ctx.lineWidth = 12;
//         for(let i = 0; i < shared.selectedObstacles.length; i++){
//             ctx.beginPath();
//             shared.selectedObstacles[i].renderShape(shared.selectedObstacles[i]);
//             ctx.stroke();
//             ctx.closePath();
//         }
//     }})
// })

function setObstaclesMatchingRotate(middleX, middleY, angle){
    const delta = angle - rotateAngle;
    rotateAngle = angle;
    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const o = shared.selectedObstacles[i];

        if(o.alreadyHasRotateType === true) continue;

        if(o.sat.r !== undefined){
            o.pos.x -= o.pivotX;
            o.pos.y -= o.pivotY;
            o.sat.rotate(delta);
            o.pos.x += o.pivotX;
            o.pos.y += o.pivotY;
        } else {
            o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
            o.sat.rotate(delta);
            o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
        }
        
        o.rotation += delta;
        o.dimensions = shared.generateDimensions(o);
        o.topLeft = shared.generateTopLeftCoordinates(o);
    }
}

function setObstaclesMatchingResize(newX, newY){
    let lastCoords = [];

    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const o = shared.selectedObstacles[i];
        lastCoords.push([
            ((o.topLeft.x + o.dimensions.x/2) - tMinX) / (tMaxX - tMinX),
            ((o.topLeft.y + o.dimensions.y/2) - tMinY) / (tMaxY - tMinY),
        ])
    }

    const dx = tMaxX - tMinX;
    const dy = tMaxY - tMinY;

    if(draggingMinX === true) tMinX = newX;
    if(draggingMaxX === true) tMaxX = newX;

    if(draggingMinY === true) tMinY = newY;
    if(draggingMaxY === true) tMaxY = newY;

    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const o = shared.selectedObstacles[i];
        const coord = lastCoords[i];

        if(o.sat.r !== undefined){
            if(shared.selectedObstacles.length === 1){
                o.pos.x = (tMaxX+tMinX)/2;
                o.pos.y = (tMaxY+tMinY)/2;
                if(o.innerRadius !== undefined) {
                    const lastR = o.sat.r;
                    o.sat.r = Math.min(tMaxX - tMinX, tMaxY - tMinY) / 2;
                    o.innerRadius *= o.sat.r / lastR;
                } else {
                    o.sat.r = Math.min(tMaxX - tMinX, tMaxY - tMinY) / 2;
                }
            } else {
                o.sat.r *= (tMaxX - tMinX) / dx;
                o.innerRadius *= (tMaxX - tMinX) / dx;

                const lastX = o.topLeft.x;
                const lastY = o.topLeft.y;
                o.topLeft.x = -o.dimensions.x/2 + tMinX + coord[0] * (tMaxX - tMinX);
                o.topLeft.y = -o.dimensions.y/2 + tMinY + coord[1] * (tMaxY - tMinY);

                o.pos.x += o.topLeft.x - lastX;
                o.pos.y += o.topLeft.y - lastY;
            }
        } else if(o.text !== undefined){
            const scaleX = (tMaxX - tMinX) / dx;
            o.fontSize *= scaleX;
            o.dimensions.x *= scaleX;
            o.dimensions.y *= scaleX;

            o.pos.x = -o.dimensions.x/2 + tMinX + coord[0] * (tMaxX - tMinX);
            o.pos.y = -o.dimensions.y/2 + tMinY + coord[1] * (tMaxY - tMinY);

            o.topLeft = shared.generateTopLeftCoordinates(o);
        } else {
            const scaleX = (tMaxX - tMinX) / dx;
            const scaleY = (tMaxY - tMinY) / dy;

            for(let i = 0; i < o.sat.points.length; i++){
                o.sat.points[i].x += o.pos.x - (o.topLeft.x + o.dimensions.x/2);
                o.sat.points[i].y += o.pos.y - (o.topLeft.y + o.dimensions.y/2);

                o.sat.points[i].x *= scaleX;
                o.sat.points[i].y *= scaleY;

                o.sat.points[i].x -= o.pos.x - (o.topLeft.x + o.dimensions.x/2);
                o.sat.points[i].y -= o.pos.y - (o.topLeft.y + o.dimensions.y/2);
            }

            const lastX = o.topLeft.x;
            const lastY = o.topLeft.y;
            o.topLeft.x = -o.dimensions.x/2 + tMinX + coord[0] * (tMaxX - tMinX);
            o.topLeft.y = -o.dimensions.y/2 + tMinY + coord[1] * (tMaxY - tMinY);

            o.pos.x += o.topLeft.x - lastX;
            o.pos.y += o.topLeft.y - lastY;

            o.topLeft = shared.generateTopLeftCoordinates(o);
            o.dimensions = shared.generateDimensions(o);
        }
    }
}

function setBlocksMatchingTransform(){
    Blockly.Events.disable();
    shared.allowMenuGeneration(false);

    if(state === 'select'){
        for(let i = 0; i < shared.selectedObstacles.length; i++){
            const o = shared.selectedObstacles[i];
            const block = shared.obstacleToBlock.get(o);
            if(block === null || block === undefined) continue;

            if(block.shapeParamToId.points !== undefined){
                const points = [];
                for(let i = 0; i < o.sat.points.length; i++){
                    points.push([
                        o.sat.points[i].x + o.pos.x,
                        o.sat.points[i].y + o.pos.y
                    ]);
                }
                shared.setValueInput(block, 'points', points);
            } else if(o.text !== undefined){
                shared.setValueInput(block, 'x', o.pos.x + o.dimensions.x/2);
                shared.setValueInput(block, 'y', o.pos.y + o.dimensions.y/2);
            } else {
                shared.setValueInput(block, 'x', o.pos.x);
                shared.setValueInput(block, 'y', o.pos.y);
            }
        }
        transformX = transformY = undefined;
    } else if(state === 'rotate'){
        const centerX = (tMinX+tMaxX)/2;
        const centerY = (tMinY+tMaxY)/2;
        let alerted = false;
        for(let i = 0; i < shared.selectedObstacles.length; i++){
            const o = shared.selectedObstacles[i];
            const block = shared.obstacleToBlock.get(o);
            if(block === null || block === undefined) continue;

            if(o.alreadyHasRotateType === true){
                if(o.pivotX !== centerX || o.pivotY !== centerY) {
                    if(alerted === false) {alert('Shapes were contained within your selection that had a rotate type with a different pivot, and could not be rotated! Just FYI. Also FYI I love you <3', true, 22); alerted = true;}
                    continue;
                }
                delete o.alreadyHasRotateType;

                const inputName = block.simulateParamToId.initialRotation;
                if(inputName === undefined) continue;

                const input = block.getInput(inputName)?.connection?.targetConnection?.sourceBlock_;
                if(input === null || input === undefined || input.isShadow() === false) continue;

                javascriptGenerator.init(shared.ws);
                let generated = javascriptGenerator.blockToCode(input, true);
                if(Array.isArray(generated) === true) generated = generated[0];

                eval(`window.temp = ${generated};`);

                if(Number.isFinite(window.temp) === false) continue;

                shared.setValueInput(block, 'initialRotation', window.temp + rotateAngle - startRotateAngle);

                delete window.temp;

                continue;
            }

            // add the rotate simulate
            const numSimulates = block.getFieldValue("NUM_SIMULATES_DROPDOWN");

            // add a simulate
            block.setFieldValue(numSimulates + 1, "NUM_SIMULATES_DROPDOWN");

            // set it to the rotate type
            block.setFieldValue("1", `SIMULATE_DROPDOWN${numSimulates}`);

            // change its fields
            shared.setValueInput(block, 'pivotX', centerX);
            shared.setValueInput(block, 'pivotY', centerY);
            shared.setValueInput(block, 'rotateSpeed', 0);
            shared.setValueInput(block, 'initialRotation', rotateAngle - startRotateAngle);
        }
        rotating = false;
    } else if(state === 'resize'){
        for(let i = 0; i < shared.selectedObstacles.length; i++){
            const o = shared.selectedObstacles[i];
            const block = shared.obstacleToBlock.get(o);
            if(block === null || block === undefined) continue;

            if(block.shapeParamToId.points !== undefined){
                const points = [];
                for(let i = 0; i < o.sat.points.length; i++){
                    points.push([
                        o.sat.points[i].x + o.pos.x,
                        o.sat.points[i].y + o.pos.y
                    ]);
                }
                shared.setValueInput(block, 'points', points);
            } else if(o.text !== undefined){
                shared.setValueInput(block, 'x', o.pos.x + o.dimensions.x/2);
                shared.setValueInput(block, 'y', o.pos.y + o.dimensions.y/2);
                shared.setValueInput(block, 'fontSize', o.fontSize);
            } else if(o.sat.r !== undefined){
                shared.setValueInput(block, 'x', o.pos.x);
                shared.setValueInput(block, 'y', o.pos.y);
                shared.setValueInput(block, 'r', o.sat.r);
                if(block.shapeParamToId.innerRadius !== undefined) shared.setValueInput(block, 'innerRadius', o.innerRadius);
            } else {
                shared.setValueInput(block, 'x', o.topLeft.x);
                shared.setValueInput(block, 'y', o.topLeft.y);
                shared.setValueInput(block, 'w', o.dimensions.x);
                shared.setValueInput(block, 'h', o.dimensions.y);
            }
        }
        draggingMinX = draggingMinY = draggingMaxX = draggingMaxY = false;
    }
    shared.allowMenuGeneration(true);
    shared.regenerateMenu();
    Blockly.Events.enable();
    shared.runCode();
    save(shared.ws);
    singleFlag = false;
}

export default renderSelection;