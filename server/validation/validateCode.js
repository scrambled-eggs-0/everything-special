// ok so we DO have to do this on the server because we are going to store both the workspace and code in the db because it's too hard to calculate on the client
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Blockly = require('blockly');// THIS is the error
const libraryBlocks = require('blockly/blocks');
const { javascriptGenerator } = require('blockly/javascript');

global.window = {workspaceNames: [], codeLoaded: false/*triggers safeties for dynamic dropdowns*/, initialLocalStorageLen: 0};
global.entities = [];

import blocks from './text.js';
import forBlock from '../../shared/forBlock.js';
import concatCode from "../../shared/concatCode.js";

Blockly.common.defineBlocks(libraryBlocks);
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

const validatorWorkspace = new Blockly.Workspace();
Blockly.Events.disable();

// Blockly.serialization.workspaces.load(
//     {"blocks":{"languageVersion":0,"blocks":[{"type":"variables_set","id":"+*ZDQSPdP%!W=4-_nMt^","x":92,"y":76,"fields":{"VAR":{"id":"eCs5J7=klmcjIf0AoJia"}}}]},"variables":[{"name":"c","id":"eCs5J7=klmcjIf0AoJia"}]},
//     validatorWorkspace
// );
// const code = javascriptGenerator.workspaceToCode(validatorWorkspace);
// console.log(code);

export default function validate(workspaces) {
    const codes = [];
    try {
        window.initialLocalStorageLen = workspaces.length;
        for(let i = 0; i < workspaces.length; i++){
            Blockly.serialization.workspaces.load(JSON.parse(workspaces[i]), validatorWorkspace);
            const code = javascriptGenerator.workspaceToCode(validatorWorkspace);
            codes[i] = code;
        }
    } catch(e) {
        console.log('upload failed!', e);
        return false;
    }
    
    // console.log(concatCode(codes).replaceAll('var ', 'let '));
    // return false;
    return concatCode(codes).replaceAll('var ', 'let ');
}