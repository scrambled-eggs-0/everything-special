import {blocks} from './blocks/text.js';
import forBlock from '../shared/forBlock.js';
import {javascriptGenerator} from 'blockly/javascript';
import * as Blockly from 'blockly';
import shared from '../shared/shared.js';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
forBlock['modify_existing'](javascriptGenerator, Blockly);
Blockly.Msg.MATH_ATAN2_TITLE = 'angle from (0,0) to X:%1 Y:%2';
Object.assign(javascriptGenerator.forBlock, forBlock);
shared.generator = javascriptGenerator;

import textData from '../shared/textData.js';
const { JSBlockData, JSBlockNames } = textData;

for(let i = 0; i < JSBlockNames.length; i++){
  Blockly.Blocks[JSBlockNames[i]] = JSBlockData[i](Blockly);
}

shared.onEditorResetFns = [];
shared.onEditorReset = () => {
  for(let i = 0; i < shared.onEditorResetFns.length; i++){
    shared.onEditorResetFns[i]();
  }
}

shared.snap = 50;
shared.snapGrid = (val) => {
  return Math.round(val / shared.snap) * shared.snap;
}

shared.workspaceLoaded = false;
shared.isEditor = true;

shared.left = document.getElementById('left');

javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--window.loopTrap == 0){window.onLoopTrap();throw "Infinite loop!";}\n';
window.onLoopTrap = () => {
  // if(!!confirm("Infinite loop detected. Would you like to undo?")) // newUndoShortcut.callback(shared.ws);
  shared.infiniteLoop = true;
  alert("Infinite loop detected. Code execution paused.");
}

// if(location.origin === 'http://localhost:8080'){
//   const outputPane = document.getElementById('outputPane');
//   const generatedCodeContainer = document.createElement('pre');
//   generatedCodeContainer.id = "generatedCode";
//   const codeDiv = document.createElement('code');
//   generatedCodeContainer.appendChild(codeDiv);
//   let oldRunCode = runCode;
//   runCode = () => {
//     const code = oldRunCode();
//     codeDiv.innerText = code;
//   }
//   outputPane.insertBefore(generatedCodeContainer, outputPane.firstChild);
// }

const messageText = document.getElementById('messagetext');
window.alert = (msg, toFade=true) => {
  messageText.innerText = msg;
  messageText.style.opacity = "1";
  if(toFade === true) shared.fadeAlert();
}

shared.fadeAlert = () => {
  messageText.style.opacity = "0";
  messageText.style.animation = 'none';
  messageText.offsetHeight; /* trigger reflow */
  messageText.style.animation = "fadeOut 3s ease-in-out 1";
}