import './index.css';
import '../client/main.js';

import * as Blockly from 'blockly';
import {blocks} from './blocks/text.js';
import forBlock from '../shared/forBlock.js';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import toolbox from '../shared/toolbox.js';
import textData from '../shared/textData.js';
import DarkTheme from '@blockly/theme-dark';
const { JSBlockData, JSBlockNames } = textData;

for(let i = 0; i < JSBlockNames.length; i++){
  Blockly.Blocks[JSBlockNames[i]] = JSBlockData[i](Blockly);
}

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);
window.generator = javascriptGenerator;

window.snap = 50;
window.snapGrid = (val) => {
  return Math.round(val / window.snap) * window.snap;
}

window.workspaceLoaded = false;
window.isEditor = true;

const zoom = {
  controls: true,
  wheel: true,
  startScale: 1.0,
  maxScale: 2,
  minScale: 0.3,
  scaleSpeed: 1.03,
  pinch: true
};

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');

const theme = Blockly.Theme.defineTheme('defaultTheme', {
  'base': DarkTheme,
  'blockStyles': {
    'motion_blocks': {
      'colourPrimary': '#07ced9'
    },
    //  'math_blocks': {...}
  },
  'categoryStyles': {
    // 'motion_category': {
    //   'colour': '#07ced9'
    // }
    'obstacle_category': {
      'colour': '#00626e'//'#07ced9'
    }
  },
  // 'componentStyles': {...},
  // 'fontStyle': {...},
  // 'startHats': true
});

function getCode(){
  return javascriptGenerator.workspaceToCode(ws);//.replaceAll('var ', 'let ');
}
window.getCode = getCode;

const runCode = () => {
  const code = getCode();

  codeDiv.innerText = code;

  window.resetGame();
  window.hasLoadedNewMusic = false;

  eval(code);

  if(window.hasLoadedNewMusic === false){
    window.stopMusic();
  }
};

const ws = window.ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});
load(ws);

// TODO: Get blockly div resizing when draggable dragged. Below works but is inefficient
// let lastW = blocklyDiv.clientHeight;
// setInterval(() => {
//   if(lastW !== blocklyDiv.clientHeight){
//     console.log('xd');
//     Blockly.svgResize(ws);
//   }
// }, 1000)

runCode();

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  runCode();
});

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

const publishBtn = document.getElementById('publish');
publishBtn.onclick = () => {
  if(confirm('Ready to publish?') !== true) return;
  alert('To prove your level is possible, you must clear it before uploading. Good Luck!');
  window.enterClearCheckMode();
}

const uploadUrl = `${location.origin}/upload`;
window.uploadCode = () => {
  save(ws);
  const blob = new Blob([localStorage.getItem("ws")], { type: 'application/javascript' });

  const formData = new FormData();
  formData.append('file', blob, 'upload.js');

  fetch(uploadUrl, {
      method: 'POST',
      body: formData,
  })  .then(response => response.json())
      .then(data => {
          console.log('File uploaded successfully:', data);
          alert('Code successfully uploaded to the servers!');
      })
      .catch(error => {
          console.error('Error uploading file:', error);
      });
  
  alert('Congrats! Your code was uploaded to the servers!');
}

import './createMode.js';

window.requestIdleCallback(() => {
  // overriding the duplicate function 
  const PASTE = Blockly.ShortcutItems.names.PASTE;
  const oldPasteShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[PASTE];
  const newPasteShortcut = {
    ...oldPasteShortcut,
    callback(workspace) {
      // this causes errors somehow... TODO: fix and allow pasting
      // window.workspaceLoaded = false;
      // const returnVal = oldPasteShortcut.callback.call(this, workspace);
      // window.workspaceLoaded = true;
      // return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newPasteShortcut, /*allowOverrides:*/ true);

  // removing the duplicate function from the menu
  Blockly.ContextMenuRegistry.registry.unregister('blockDuplicate');
}, {timeout: 100})