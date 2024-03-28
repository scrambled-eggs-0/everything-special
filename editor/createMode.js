import * as Blockly from 'blockly';

let createBlock = null;
let createBlockXML = null;

let previewX = 0;
let previewY = 0;
let previewShape = -1;
let previewPolygonPoints = [];
let isDragging = false;
window.inClearCheckMode = false;
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
    alert('select a block to mass create!');// probably TEMP, might get some html text like the old "create obstacle" text so that user doesn't have to go thru annoying popup
    blocklyDiv.style.cursor = 'crosshair';
    const cl = window.ws.addChangeListener((e) => {
        if(e.blockId === undefined) return;
        const block = window.ws.getBlockById(e.blockId);
        if(block.type !== "create_obstacle") return;

        createBlock = block;
        createBlockXML = Blockly.Xml.blockToDom(block);

        previewShape = parseInt(block.getFieldValue('SHAPE_DROPDOWN'));
        if(previewShape === 2) previewPolygonPoints.length = 0;

        // const createBlockPos = block.getRelativeToSurfaceXY();
        // createBlockWidth = block.width;
        // newBlockPos.x = createBlockPos.x + createBlockWidth + blockPadding;//+ moveDist;
        // newBlockPos.y = createBlockPos.y //+ moveDist;

        createModeBg.classList.remove('hidden');
        canvas.remove();
        createModeBg.appendChild(canvas);
        window.ws.removeChangeListener(cl);

        // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
        window.canvasDimensions = canvas.getBoundingClientRect();
        window.onmousemove({pageX: window.pageX, pageY: window.pageY, movementY: 0});

        blocklyDiv.style.cursor = '';
    });
}
createModeBg.onmousedown = () => {
    previewX = window.mouseX;
    previewY = window.mouseY;
    isDragging = true;

    if(window.mouseOut === true){
        // exit create mode
        createModeBg.classList.add('hidden');
        canvas.remove();
        outputPane.insertBefore(canvas, publishBtn);
        isDragging = false;
        window.inClearCheckMode = false;
    }
}
createModeBg.onclick = () => {
    // if we click the canvas, create a block
    if(window.mouseOut === false && window.inClearCheckMode === false) {
        if(previewShape === 2){
            const nextPt = [snapGrid(window.mouseX), snapGrid(window.mouseY)];
            previewPolygonPoints.push(nextPt);

            // if we're not at the start
            if(previewPolygonPoints.length === 1 || previewPolygonPoints[0][0] !== nextPt[0] || previewPolygonPoints[0][1] !== nextPt[1]){
                return;
            }
        }
        const newBlock = Blockly.Xml.domToBlock(createBlockXML, window.ws);

        createBlock.nextConnection.connect(newBlock.previousConnection);

        // change x and y to reflect mouse pos
        // newBlock.getInput(newBlock.shapeParamToId['x'])
        // newBlock.setFieldValue(window.mouseX, newBlock.shapeParamToId['x'] + 'F');

        if(previewShape === 0){
            // circle
            newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewX))));
            newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewY))));

            const dist = Math.sqrt((snapGrid(previewX) - snapGrid(window.mouseX)) ** 2 + (snapGrid(previewY) - snapGrid(window.mouseY)) ** 2);
            newBlock.getInput(newBlock.shapeParamToId['r']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(dist)));
        } else if(previewShape === 1){
            // rect
            const minX = Math.min(previewX, window.mouseX);
            const maxX = Math.max(previewX, window.mouseX);

            const minY = Math.min(previewY, window.mouseY);
            const maxY = Math.max(previewY, window.mouseY);

            newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(minX))));
            newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(minY))));

            newBlock.getInput(newBlock.shapeParamToId['w']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(maxX) - snapGrid(minX))));
            newBlock.getInput(newBlock.shapeParamToId['h']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(maxY) - snapGrid(minY))));
        } else if(previewShape === 2){
            // polygon
            // points: [[300,700],[600,700],[450,900]]
            newBlock.getInput(newBlock.shapeParamToId['points']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(previewPolygonPoints)));
            previewPolygonPoints.length = 0;
        } else if(previewShape === 3){
            // text
            const minX = snapGrid(Math.min(previewX, window.mouseX));
            const maxX = snapGrid(Math.max(previewX, window.mouseX));

            const minY = snapGrid(Math.min(previewY, window.mouseY));
            const maxY = snapGrid(Math.max(previewY, window.mouseY));

            const text = newBlock.getInput(newBlock.shapeParamToId['text']);

            
            ctx.font = '1px Inter';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const metrics = ctx.measureText(text);

            // console.log(metrics.width);
            // const height = metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent;

            const ratioX = (maxX - minX) / metrics.width;

            // console.log(window.devicePixelRatio);

            // const ratioY = (maxY - minY) / height;

            // maximum font size that would fit within the bounds
            const maxFontSize = ratioX * window.devicePixelRatio;//Math.min(ratioX, ratioY) * 2;

            newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock((minX+maxX)/2)));
            newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock((minY+maxY)/2)));

            newBlock.getInput(newBlock.shapeParamToId['fontSize']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(maxFontSize)));
        } else {
            console.error('previewShapeToObs not defined | createMode.js');
        }

        isDragging = false;
        // console.log(newBlock.shapeParamToId['x'])

        // newBlock.moveBy(newBlockPos.x, newBlockPos.y);
        // newBlockPos.x += createBlockWidth + blockPadding//moveDist;
        // // newBlockPos.y += moveDist;
        return;
    }
}

createModeBg.oncontextmenu = (e) => {
    isDragging = false;
    previewPolygonPoints.length = 0;
    return e.preventDefault();
}

// btw if we have any more rendering effects that need to be done then create a sep file with maybe window.editorRenderFunctions
const oldRender = window.render;
window.render = () => {
    oldRender();

    // render preview
    if(!isDragging || window.inClearCheckMode === true) return;
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;

    if(previewShape === 0){
        // circle
        const x = snapGrid(previewX);
        const y = snapGrid(previewY);
        const dist = Math.sqrt((x - snapGrid(window.mouseX)) ** 2 + (y - snapGrid(window.mouseY)) ** 2);
        ctx.arc(x, y, dist, 0, Math.PI * 2);
    } else if(previewShape === 1 || previewShape === 3){
        // rectangle
        ctx.rect(snapGrid(previewX), snapGrid(previewY), snapGrid(window.mouseX)-snapGrid(previewX), snapGrid(window.mouseY)-snapGrid(previewY));
    } else if(previewShape === 2){
        // polygon
        if(previewPolygonPoints.length !== 0){
            ctx.setLineDash([15, 12]);
            ctx.lineDashOffset = -window.time / 48;
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
window.enterClearCheckMode = () => {
    window.spawnPosition.x = 100
    window.spawnPosition.y = 1500;
    window.respawnPlayer();
    window.inClearCheckMode = true;
    createModeBg.classList.remove('hidden');
    canvas.remove();
    createModeBg.appendChild(canvas);

    // resetting mouseOut checks in case mouse isnt moved between the time of 2 clicks
    window.canvasDimensions = canvas.getBoundingClientRect();
    window.onmousemove({pageX: window.pageX, pageY: window.pageY, movementY: 0});

    blocklyDiv.style.cursor = '';
}

window.exitClearCheckMode = () => {
    let last = window.mouseOut;
    window.mouseOut = true;
    createModeBg.onmousedown();
    window.mouseOut = last;
}