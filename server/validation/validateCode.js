import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Blockly = require('blockly');
const libraryBlocks = require('blockly/blocks');
const { javascriptGenerator } = require('blockly/javascript');

import './SAT.js';
import '../../client/components.js';
import textData from "../../shared/textData.js";
const { JSBlockData, JSBlockNames } = textData;
import '../../shared/fixPolygon.js';

for(let i = 0; i < JSBlockNames.length; i++){
  Blockly.Blocks[JSBlockNames[i]] = JSBlockData[i](Blockly);
}

for(let key in global.window){
    global[key] = global.window[key];
}
global.isServer = true;
global.window.isServer = true;
global.window.onWorkspaceLoadFunctions=[];
global.window.workspaceLoaded = false;

import blocks from './text.js';
import forBlock from '../../shared/forBlock.js';

Blockly.common.defineBlocks(libraryBlocks);
Blockly.common.defineBlocks(blocks);
forBlock['modify_existing'](javascriptGenerator, Blockly);
javascriptGenerator.addReservedWords('code');
javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--window.loopTrap == 0){try{eval("break;")}catch(e){eval("return;")}}\n';
Object.assign(javascriptGenerator.forBlock, forBlock);

const validatorWorkspace = new Blockly.Workspace();
Blockly.Events.disable();

export default function validate(wsData) {
    let code;
    try {
        Blockly.serialization.workspaces.load(JSON.parse(wsData), validatorWorkspace);
        code = javascriptGenerator.workspaceToCode(validatorWorkspace);
    } catch(e) {
        console.log('upload failed!', e);
        return false;
    }
    
    // console.log(code.replaceAll('var ', 'let '));
    // return false;
    return code;
}