import * as Blockly from 'blockly';

let createBlock = null;
let createBlockXML = null;
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
createModeBg.onclick = () => {
    // if we click the canvas, create a block
    if(window.mouseOut === false) {
        const newBlock = Blockly.Xml.domToBlock(createBlockXML, ws);

        createBlock.nextConnection.connect(newBlock.previousConnection);
        // newBlock.moveBy(newBlockPos.x, newBlockPos.y);
        // newBlockPos.x += createBlockWidth + blockPadding//moveDist;
        // // newBlockPos.y += moveDist;
        return;
    }
    
    // otherwise, exit
    createModeBg.classList.add('hidden');
    canvas.remove();
    outputPane.insertBefore(canvas, publishBtn);
}