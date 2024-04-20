import * as Blockly from 'blockly';

let createBlock = null;
let createBlockXML = null;

let previewX = 0;
let previewY = 0;
let previewShape = -1;
let previewPolygonPoints = [];
let previewText = ''; let previewFontSize = 80;
let isDragging = false;
let generatorInit = false;
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
    alert('select a block to mass create!', false);
    blocklyDiv.style.cursor = 'crosshair';
    const cl = window.ws.addChangeListener((e) => {
        if(e.blockId === undefined) return;
        const block = window.ws.getBlockById(e.blockId);
        if(block.type !== "create_obstacle") return;

        window.fadeAlert();

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
            if(generatorInit === false) {generatorInit = true; window.generator.init(window.ws);}
            previewText = window.generator.valueToCode(createBlock, createBlock.shapeParamToId['text'], 0);
            previewText = previewText.slice(1, previewText.length - 1);
            previewFontSize = parseFloat(window.generator.valueToCode(createBlock, createBlock.shapeParamToId['fontSize'], 0));
        }

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
let fixedPts;
createModeBg.onclick = () => {
    // if we click the canvas, create a block
    if(window.mouseOut === false && window.inClearCheckMode === false) {
        if(previewShape === 0){
            if(snapGrid(window.mouseX) === snapGrid(previewX) && snapGrid(window.mouseY) === snapGrid(previewY)) {
                isDragging = false;
                return;
            }
        } else if(previewShape === 1){
            if(snapGrid(window.mouseX) === snapGrid(previewX) || snapGrid(window.mouseY) === snapGrid(previewY)) {
                isDragging = false;
                return;
            }
        } else if(previewShape === 2){
            const nextPt = [snapGrid(window.mouseX), snapGrid(window.mouseY)];
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
        
        const newBlock = Blockly.Xml.domToBlock(createBlockXML, window.ws);

        // get last child and connect
        let lastBlock = createBlock;
        let nextBlock;
        while((nextBlock = lastBlock.getNextBlock()) !== null){
            lastBlock = nextBlock;
        }
        lastBlock.nextConnection.connect(newBlock.previousConnection);

        // change x and y to reflect mouse pos
        // newBlock.getInput(newBlock.shapeParamToId['x'])
        // newBlock.setFieldValue(window.mouseX, newBlock.shapeParamToId['x'] + 'F');

        if(previewShape === 0){
            // circle
            newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewX))));
            newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(previewY))));

            const dist = Math.sqrt((snapGrid(previewX) - snapGrid(window.mouseX)) ** 2 + (snapGrid(previewY) - snapGrid(window.mouseY)) ** 2);
            newBlock.getInput(newBlock.shapeParamToId['r']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(Math.floor(dist * 1000) / 1000)));
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
            newBlock.getInput(newBlock.shapeParamToId['points']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(fixedPts)));
            previewPolygonPoints.length = 0;
        } else if(previewShape === 3){
            newBlock.getInput(newBlock.shapeParamToId['x']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(window.mouseX))));
            newBlock.getInput(newBlock.shapeParamToId['y']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(snapGrid(window.mouseY))));
            newBlock.getInput(newBlock.shapeParamToId['text']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(previewText)));
            newBlock.getInput(newBlock.shapeParamToId['fontSize']).setShadowDom(Blockly.utils.xml.textToDom(window.generateShadowBlock(previewFontSize)));
        } else {
            console.error('previewShapeToObs not defined | createMode.js');
        }

        if(generatorInit === false) {generatorInit = true; window.generator.init(window.ws);}

        for(let key in lastBlock.simulateParamToId){
            const shadow = lastBlock.getInput(lastBlock.simulateParamToId[key]).connection.getShadowDom(true).cloneNode(true);
            newBlock.getInput(newBlock.simulateParamToId[key]).setShadowDom(shadow);
        }

        for(let key in lastBlock.effectParamToId){
            const shadow = lastBlock.getInput(lastBlock.effectParamToId[key]).connection.getShadowDom(true).cloneNode(true);
            newBlock.getInput(newBlock.effectParamToId[key]).setShadowDom(shadow);
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
    } else if(previewShape === 1){
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
    } else if(previewShape === 3){
        // text
        const x = snapGrid(window.mouseX); const y = snapGrid(window.mouseY);

        ctx.setLineDash([28,8]);
        ctx.lineDashOffset = -window.time / 55;

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

        ctx.strokeText(previewText, x - wOffset * (window.wOffsetMult??1), y - hOffset * (window.hOffsetMult??1));

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
window.enterClearCheckMode = () => {
    window.spawnPosition.x = 100
    window.spawnPosition.y = 1500;
    window.respawnPlayer();
    window.inClearCheckMode = true;
    if(document.activeElement.classList.contains('blocklyHtmlInput') === true){
        document.activeElement.blur();
    }
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

// takes in a series of points and computes the minimum convex hull
// which is what we need for SAT polygons.
window.fixPolygon = (points) => {
    return new GrahamScan(points).hull;
}

const X = 0;
const Y = 1;
const REMOVED = -1;
class GrahamScan {
    constructor(points=[[0,1],[1,1]]){
        this.points = points;
        this.hull = this.getHull();
    }
    getHull() {
        const pivot = this.preparePivotPoint();

        let indexes = Array.from(this.points, (point, i) => i);
        const angles = Array.from(this.points, (point) => this.getAngle(pivot, point));
        const distances = Array.from(this.points, (point) => this.euclideanDistanceSquared(pivot, point));

        // sort by angle and distance
        indexes.sort((i, j) => {
            const angleA = angles[i];
            const angleB = angles[j];
            if (angleA === angleB) {
                const distanceA = distances[i];
                const distanceB = distances[j];
                return distanceA - distanceB;
            }
            return angleA - angleB;
        });

        // remove points with repeated angle (but never the pivot, so start from i=1)
        for (let i = 1; i < indexes.length - 1; i++) {
            if (angles[indexes[i]] === angles[indexes[i + 1]]) {  // next one has same angle and is farther
                indexes[i] = REMOVED;  // remove it logically to avoid O(n) operation to physically remove it
            }
        }

        const hull = [];
        for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const point = this.points[index];

            if (index !== REMOVED) {
                if (hull.length < 3) {
                    hull.push(point);
                } else {
                    while (this.checkOrientation(hull[hull.length - 2], hull[hull.length - 1], point) > 0) {
                        hull.pop();
                    }
                    hull.push(point);
                }
            }
        }

        return hull.length < 3 ? [] : hull;
    }
    checkOrientation(p1, p2, p3) {
        return (p2[Y] - p1[Y]) * (p3[X] - p2[X]) - (p3[Y] - p2[Y]) * (p2[X] - p1[X]);
    }
    getAngle(a, b) {
        return Math.atan2(b[Y] - a[Y], b[X] - a[X]);
    }
    euclideanDistanceSquared(p1, p2) {
        const a = p2[X] - p1[X];
        const b = p2[Y] - p1[Y];
        return a * a + b * b;
    }
    preparePivotPoint() {
        let pivot = this.points[0];
        for (let i = 1; i < this.points.length; i++) {
            const point = this.points[i];
            if (point[Y] < pivot[Y] || point[Y] === pivot[Y] && point[X] < pivot[X]) {
                pivot = point;
            }
        }
        return pivot;
    }
}