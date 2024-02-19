import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Blockly = require('blockly/core');
const libraryBlocks = require('blockly/blocks');
const { javascriptGenerator } = require('blockly/javascript');

global.window = {workspaceToId: {}};
global.entities = [];

import textData from '../shared/textData.js';
const { blockData, extensionNames, extensionFns } = textData;
import forBlock from '../shared/forBlock.js';
import concatCode from "../shared/concatCode.js";

for(let i = 0; i < extensionNames.length; i++){
  Blockly.Extensions.register(extensionNames[i], extensionFns[i](Blockly));
}

const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);

Blockly.common.defineBlocks(libraryBlocks);
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

const validatorWorkspace = new Blockly.Workspace();

export default function validate(workspaces) {
    const codes = [];
    try {
        for(let i = 0; i < workspaces.length; i++){
            Blockly.serialization.workspaces.load(JSON.parse(workspaces[i]), validatorWorkspace);
            const code = javascriptGenerator.workspaceToCode(validatorWorkspace);
            codes[i] = code;
        }
    } catch(e) {
        console.log('upload failed!', e);
        return false;
    }

    return concatCode(codes);
}