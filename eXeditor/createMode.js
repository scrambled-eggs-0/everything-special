import shared from '../shared/shared.js';
import * as Blockly from 'blockly';

let createBlock = null;
let createBlockXML = null;
let inCreateMode = false;

let previewX = 0;
let previewY = 0;
let previewShape = -1;
let previewPolygonPoints = [];
let previewText = ''; let previewFontSize = 80;
let isDragging = false;
let generatorInit = false;
shared.inClearCheckMode = false;
// let newBlockPos = {x: 0, y: 0};
// let createBlockWidth = 0;
// const blockPadding = 32; // const moveDist = 30;// Blockly.SNAP_RADIUS
const createModeBg = document.getElementById('createmodebg');
const createModeBtn = document.getElementById('createmode');
const blocklyDiv = document.getElementById('blocklyDiv');
const outputPane = document.getElementById('outputPane');
const publishBtn = document.getElementById('publish');
const canvas = document.getElementById('canvas');
createModeBtn.onclick = () => {
    alert('select a block to mass create!', false);
    blocklyDiv.style.cursor = 'crosshair';
    const cl = shared.ws.addChangeListener((e) => {
        if(e.blockId === undefined) return;
        const block = shared.ws.getBlockById(e.blockId);
        if(block === null || block.type !== "create_obstacle") return;

        shared.fadeAlert();

        shared.setCreateBlock(block);
        
        // const createBlockPos = block.getRelativeToSurfaceXY();
        // createBlockWidth = block.width;
        // newBlockPos.x = createBlockPos.x + createBlockWidth + blockPadding;//+ moveDist;
        // newBlockPos.y = createBlockPos.y //+ moveDist;

        createModeBg.classList.remove('hidden');
        canvas.remove();
        createModeBg.appendChild(canvas);
        shared.ws.removeChangeListener(cl);

        // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
        shared.canvasDimensions = canvas.getBoundingClientRect();
        shared.onmousemove({pageX: shared.pageX, pageY: shared.pageY, movementY: 0});

        blocklyDiv.style.cursor = '';
    });
}
createModeBg.onmousedown = () => {
    previewX = shared.mouseX;
    previewY = shared.mouseY;
    isDragging = true;

    if(shared.mouseOut === true || (createBlock && createBlock.disposed === true)){
        // exit create mode
        createModeBg.classList.add('hidden');
        canvas.remove();
        outputPane.insertBefore(canvas, publishBtn);
        isDragging = false;
        inCreateMode = false;
        shared.inClearCheckMode = false;
    }
}
let fixedPts;
shared.onclick = () => {
    if(inCreateMode === false) return;

    // if we click the canvas, create a block
    if(previewShape === 0){
        if(snapGrid(shared.mouseX) === snapGrid(previewX) && snapGrid(shared.mouseY) === snapGrid(previewY)) {
            isDragging = false;
            return;
        }
    } else if(previewShape === 1){
        if(snapGrid(shared.mouseX) === snapGrid(previewX) || snapGrid(shared.mouseY) === snapGrid(previewY)) {
            isDragging = false;
            return;
        }
    } else if(previewShape === 2){
        const nextPt = [snapGrid(shared.mouseX), snapGrid(shared.mouseY)];
        previewPolygonPoints.push(nextPt);

        // if we're not at the start
        if(previewPolygonPoints.length === 1 || previewPolygonPoints[0][0] !== nextPt[0] || previewPolygonPoints[0][1] !== nextPt[1]){
            return;
        }

        fixedPts = fixPolygon(previewPolygonPoints);
        if(fixedPts.length <= 2){
            isDragging = false;
            return;
        }
    }
    
    const newBlock = Blockly.Xml.domToBlock(createBlockXML, shared.ws);

    // get last child and connect
    let lastBlock = createBlock;
    let nextBlock;
    while((nextBlock = lastBlock.getNextBlock()) !== null){
        lastBlock = nextBlock;
    }
    lastBlock.nextConnection.connect(newBlock.previousConnection);

    // change x and y to reflect mouse pos
    // newBlock.getInput(newBlock.shapeParamToId['x'])
    // newBlock.setFieldValue(shared.mouseX, newBlock.shapeParamToId['x'] + 'F');

    if(previewShape === 0){
        // circle
        newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(previewX))));
        newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(previewY))));

        const dist = Math.sqrt((snapGrid(previewX) - snapGrid(shared.mouseX)) ** 2 + (snapGrid(previewY) - snapGrid(shared.mouseY)) ** 2);
        newBlock.getInput(newBlock.shapeParamToId['r']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(Math.floor(dist * 1000) / 1000)));
    } else if(previewShape === 1){
        // rect
        const minX = Math.min(previewX, shared.mouseX);
        const maxX = Math.max(previewX, shared.mouseX);

        const minY = Math.min(previewY, shared.mouseY);
        const maxY = Math.max(previewY, shared.mouseY);

        newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(minX))));
        newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(minY))));

        newBlock.getInput(newBlock.shapeParamToId['w']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(maxX) - snapGrid(minX))));
        newBlock.getInput(newBlock.shapeParamToId['h']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(maxY) - snapGrid(minY))));
    } else if(previewShape === 2){
        // polygon
        // points: [[300,700],[600,700],[450,900]]
        newBlock.getInput(newBlock.shapeParamToId['points']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(fixedPts)));
        previewPolygonPoints.length = 0;
    } else if(previewShape === 3){
        newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(shared.mouseX))));
        newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(snapGrid(shared.mouseY))));
        newBlock.getInput(newBlock.shapeParamToId['text']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(previewText)));
        newBlock.getInput(newBlock.shapeParamToId['fontSize']).setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(previewFontSize)));
    } else {
        console.error('previewShapeToObs not defined | createMode.js');
    }

    if(generatorInit === false) {generatorInit = true; shared.generator.init(shared.ws);}

    for(let key in lastBlock.simulateParamToId){
        const shadow = lastBlock.getInput(lastBlock.simulateParamToId[key]).connection.getShadowDom(true).cloneNode(true);
        newBlock.getInput(newBlock.simulateParamToId[key]).setShadowDom(shadow);
    }

    for(let key in lastBlock.effectParamToId){
        const shadow = lastBlock.getInput(lastBlock.effectParamToId[key]).connection.getShadowDom(true).cloneNode(true);
        newBlock.getInput(newBlock.effectParamToId[key]).setShadowDom(shadow);
    }
    

    isDragging = false;
    // newBlock.moveBy(newBlockPos.x, newBlockPos.y);
    // newBlockPos.x += createBlockWidth + blockPadding//moveDist;
    // // newBlockPos.y += moveDist;
}

createModeBg.oncontextmenu = (e) => {
    isDragging = false;
    previewPolygonPoints.length = 0;
    return e.preventDefault();
}

// btw if we have any more rendering effects that need to be done then create a sep file with maybe shared.editorRenderFunctions
const oldRender = shared.render;
shared.render = () => {
    oldRender();

    // render preview
    if(!isDragging || shared.inClearCheckMode === true) return;
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;

    if(previewShape === 0){
        // circle
        const x = snapGrid(previewX);
        const y = snapGrid(previewY);
        const dist = Math.sqrt((x - snapGrid(shared.mouseX)) ** 2 + (y - snapGrid(shared.mouseY)) ** 2);
        ctx.arc(x, y, dist, 0, Math.PI * 2);
    } else if(previewShape === 1){
        // rectangle
        ctx.rect(snapGrid(previewX), snapGrid(previewY), snapGrid(shared.mouseX)-snapGrid(previewX), snapGrid(shared.mouseY)-snapGrid(previewY));
    } else if(previewShape === 2){
        // polygon
        if(previewPolygonPoints.length !== 0){
            ctx.setLineDash([15, 12]);
            ctx.lineDashOffset = -shared.time / 48;
            ctx.arc(previewPolygonPoints[0][0], previewPolygonPoints[0][1], 26, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            ctx.setLineDash([]);

            ctx.beginPath();
            ctx.moveTo(previewPolygonPoints[0][0], previewPolygonPoints[0][1]);
            for(let i = 0; i < previewPolygonPoints.length; i++){
                ctx.lineTo(previewPolygonPoints[i][0], previewPolygonPoints[i][1]);
            }
            ctx.lineTo(previewPolygonPoints[0][0], previewPolygonPoints[0][1]);
        }
    } else if(previewShape === 3){
        // text
        const x = snapGrid(shared.mouseX); const y = snapGrid(shared.mouseY);

        ctx.setLineDash([28,8]);
        ctx.lineDashOffset = -shared.time / 55;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 4;
        ctx.font = `${previewFontSize}px Inter`;

        const dimensions = ctx.measureText(previewText);
        const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
        const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent;
        const wOffset = (dimensions.actualBoundingBoxRight - dimensions.actualBoundingBoxLeft) / 2;
        const hOffset = (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2;
        ctx.rect(x - w/2, y - h/2, w, h);

        ctx.strokeText(previewText, x - wOffset * (shared.wOffsetMult??1), y - hOffset * (shared.hOffsetMult??1));

        ctx.lineWidth = 8;

        ctx.setLineDash([]);
    } else {
        console.error('previewShape not defined | createMode.js');
    }
    ctx.globalAlpha = 0.29;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.stroke();
    ctx.closePath();
}

// upload mode! Same thing with the canvas
shared.enterClearCheckMode = () => {
    const selected = Blockly.getSelected();
    if(selected !== null) selected.unselect();
    shared.runCode();
    shared.respawnPlayer();
    shared.inClearCheckMode = true;
    if(document.activeElement.classList.contains('blocklyHtmlInput') === true){
        document.activeElement.blur();
    }
    createModeBg.classList.remove('hidden');
    canvas.remove();
    createModeBg.appendChild(canvas);

    // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
    shared.canvasDimensions = canvas.getBoundingClientRect();
    shared.onmousemove({pageX: shared.pageX, pageY: shared.pageY, movementY: 0});

    blocklyDiv.style.cursor = '';
}

shared.exitClearCheckMode = () => {
    let last = shared.mouseOut;
    shared.mouseOut = true;
    createModeBg.onmousedown();
    shared.mouseOut = last;
}

shared.setCreateBlock = (block) => {
    const lastPreviousConnection = block.previousConnection.targetConnection;
    const lastNextConnection = block.nextConnection.targetConnection;

    block.previousConnection.disconnect();
    block.nextConnection.disconnect();

    createBlock = block;
    createBlockXML = Blockly.Xml.blockToDom(block);

    if(lastPreviousConnection !== null) block.previousConnection.connect(lastPreviousConnection);
    if(lastNextConnection !== null) block.nextConnection.connect(lastNextConnection);

    previewShape = parseInt(block.getFieldValue('SHAPE_DROPDOWN'));
    if(previewShape === 2) previewPolygonPoints.length = 0;
    else if(previewShape === 3) {
        if(generatorInit === false) {generatorInit = true; shared.generator.init(shared.ws);}
        previewText = shared.generator.valueToCode(createBlock, createBlock.shapeParamToId['text'], 0);
        previewText = previewText.slice(1, previewText.length - 1);
        previewFontSize = parseFloat(shared.generator.valueToCode(createBlock, createBlock.shapeParamToId['fontSize'], 0));
    }

    inCreateMode = true;
}