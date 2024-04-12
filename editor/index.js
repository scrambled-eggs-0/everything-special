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
      'colour': 194
    },
    'game_category': {
      'colour': 121//'#07ced9'
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

let runCode = () => {
  window.loopTrap = 1000;

  const code = getCode();

  window.resetGame();
  window.hasLoadedNewMusic = false;

  eval(code);

  if(window.hasLoadedNewMusic === false){
    window.stopMusic();
  }

  return code;
};

if(location.origin === 'http://localhost:8080'){
  const outputPane = document.getElementById('outputPane');
  const generatedCodeContainer = document.createElement('pre');
  generatedCodeContainer.id = "generatedCode";
  const codeDiv = document.createElement('code');
  generatedCodeContainer.appendChild(codeDiv);
  let oldRunCode = runCode;
  runCode = () => {
    const code = oldRunCode();
    codeDiv.innerText = code;
  }
  outputPane.insertBefore(generatedCodeContainer, outputPane.firstChild);
}

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
  let hasWinpad = false;
  for(let i = 0; i < window.obstacles.length; i++){
    if(window.obstacles[i].isWinpad === true) { hasWinpad = true; break; }
  }
  if(hasWinpad === false) { alert('You must add an obstacle with the "winpad" effect before you can upload!'); return; }
  if(confirm('Ready to publish?') !== true) return;
  alert('To prove your level is possible, you must clear it before uploading. Good Luck!');
  window.enterClearCheckMode();
}

let username = localStorage.getItem('username');
let hashedPassword = localStorage.getItem('hashedPassword');

const uploadUrl = `${location.origin}/upload`;
window.uploadCode = () => {
  // direct user to login page if we don't have a saved username
  if(username === null){
    const childWindowOrigin = `${location.origin}/account`;

    const loginWindow = document.createElement('iframe');
    loginWindow.src = childWindowOrigin;
    loginWindow.classList.add('loginWindow');
    const handleMessage = function(event) {
      if (event.origin === location.origin) {
        loginWindow.remove();
        window.removeEventListener('message', handleMessage);
        username = localStorage.getItem('username');
        hashedPassword = localStorage.getItem('hashedPassword');
        window.uploadCode();
      }
    }
    window.addEventListener('message', handleMessage);

    document.body.appendChild(loginWindow);

    return;
  }

  save(ws);
  const blob = new Blob([localStorage.getItem("ws")], { type: 'application/javascript' });

  const formData = new FormData();
  formData.append('file', blob, 'upload.js');

  const headers = new Headers();
  headers.append('u', username);
  headers.append('hp', hashedPassword);

  fetch(uploadUrl, {
      method: 'POST',
      body: formData,
      headers: headers
  }).then(_ => {
        alert('Congrats! Your code was uploaded to the servers!');
        
        if(!location.origin.startsWith('http://localhost')) ws.clear();
    })
    .catch(error => {
        console.error('Error uploading file:', error);
    });
}

import './createMode.js';

window.requestIdleCallback(() => {
  // overriding the duplicate function 
  const PASTE = Blockly.ShortcutItems.names.PASTE;
  const oldPasteShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[PASTE];
  const newPasteShortcut = {
    ...oldPasteShortcut,
    callback(workspace) {
      window.workspaceLoaded = false;
      const returnVal = oldPasteShortcut.callback.call(this, workspace);
      window.workspaceLoaded = true;
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newPasteShortcut, /*allowOverrides:*/ true);

  const UNDO = Blockly.ShortcutItems.names.UNDO;
  const oldUndoShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[UNDO];
  const newUndoShortcut = {
    ...oldUndoShortcut,
    callback(workspace) {
      window.workspaceLoaded = false;
      const returnVal = oldUndoShortcut.callback.call(this, workspace);
      window.workspaceLoaded = true;
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newUndoShortcut, /*allowOverrides:*/ true);

  // removing the duplicate function from the menu
  Blockly.ContextMenuRegistry.registry.unregister('blockDuplicate');
}, {timeout: 100})

javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--window.loopTrap == 0) break;\n';