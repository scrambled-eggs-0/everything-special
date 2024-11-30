import './index.css';
import '../client/main.js';

import * as Blockly from 'blockly';
import {blocks} from './blocks/text.js';
import forBlock from '../shared/forBlock.js';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import '../shared/fixPolygon.js';
import toolbox from '../shared/toolbox.js';
import textData from '../shared/textData.js';
import DarkTheme from '@blockly/theme-dark';
const { JSBlockData, JSBlockNames } = textData;

for(let i = 0; i < JSBlockNames.length; i++){
  Blockly.Blocks[JSBlockNames[i]] = JSBlockData[i](Blockly);
}

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
forBlock['modify_existing'](javascriptGenerator, Blockly);
Blockly.Msg.MATH_ATAN2_TITLE = 'angle from (0,0) to X:%1 Y:%2';
Object.assign(javascriptGenerator.forBlock, forBlock);
shared.generator = javascriptGenerator;

shared.snap = 50;
shared.snapGrid = (val) => {
  return Math.round(val / shared.snap) * shared.snap;
}

shared.workspaceLoaded = false;

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
    'list_blocks': {
      'colourPrimary': '#4a148c'
    }
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

javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--shared.loopTrap == 0){shared.onLoopTrap();throw "Infinite loop!";}\n';
shared.onLoopTrap = () => {
  // if(!!confirm("Infinite loop detected. Would you like to undo?")) // newUndoShortcut.callback(shared.ws);
  shared.infiniteLoop = true;
  alert("Infinite loop detected. Code execution paused.");
}
window.getCode = () => {
  return javascriptGenerator.workspaceToCode(ws);//.replaceAll('var ', 'let ');
}

let runCode = shared.runCode = () => {
  shared.loopTrap = 1000;

  const code = getCode();

  shared.resetGame();
  shared.hasLoadedNewMusic = false;

  eval(code);

  if(shared.hasLoadedNewMusic === false){
    shared.stopMusic();
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

const messageText = document.getElementById('messagetext');
shared.alert = (msg, toFade=true) => {
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

const ws = shared.ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});
load(ws);

runCode();

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type === Blockly.Events.FINISHED_LOADING || ws.isDragging()) {
    return;
  } else if(e.type === Blockly.Events.BLOCK_DELETE){
    // rip trashcan :( Your functionality will be missed
    ws.trashcan.emptyContents();
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
  if(shared.infiniteLoop === true) {alert('Cannot upload because there is an infinite loop!'); return;}
  let hasWinpad = false;
  for(let i = 0; i < shared.obstacles.length; i++){
    if(shared.obstacles[i].isWinpad === true) { hasWinpad = true; break; }
  }
  if(hasWinpad === false) { alert('You must add an obstacle with the "winpad" effect before you can upload!'); return; }
  if(confirm('Ready to publish?') !== true) return;
  alert('To prove your level is possible, you must clear it before uploading. Good Luck!');
  shared.enterClearCheckMode();
}

let username = localStorage.getItem('username');
let hashedPassword = localStorage.getItem('hashedPassword');

const uploadUrl = `${location.origin}/upload`;
shared.uploadCode = () => {
  // direct user to login page if we don't have a saved username
  if(username === null){
    const childsharedOrigin = `${location.origin}/account`;

    const loginshared = document.createElement('iframe');
    loginshared.src = childsharedOrigin;
    loginshared.classList.add('loginshared');
    const handleMessage = function(event) {
      if (event.origin === location.origin) {
        loginshared.remove();
        shared.removeEventListener('message', handleMessage);
        username = localStorage.getItem('username');
        hashedPassword = localStorage.getItem('hashedPassword');
        shared.uploadCode();
      }
    }
    window.addEventListener('message', handleMessage);

    document.body.appendChild(loginshared);

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
  }).then(async (d) => {
        const failed = (await d.text()) === 'n';
        if(failed === true){
          alert('Upload failed! If you think this might be a bug, please contact a developer!');
          return;
        }
        alert('Congrats! Your code was uploaded to the servers!');
        
        if(!location.origin.startsWith('http://localhost')) {ws.clear(); localStorage.removeItem('ws');}
    })
    .catch(error => {
        console.error('Error uploading file:', error);
    });
}

import './create.js';

window.requestIdleCallback(() => {
  // overriding the duplicate function 
  const PASTE = Blockly.ShortcutItems.names.PASTE;
  const oldPasteShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[PASTE];
  const newPasteShortcut = {
    ...oldPasteShortcut,
    callback(workspace) {
      if(shared.inClearCheckMode === true) return false;
      shared.onWorkspaceLoadFunctions.length = 0;
      shared.workspaceLoaded = false;
      shared.importNeedsStructuredClone = true;
      const returnVal = oldPasteShortcut.callback.call(this, workspace);
      shared.workspaceLoaded = true;
      delete shared.importNeedsStructuredClone;
      for(let i = 0; i < shared.onWorkspaceLoadFunctions.length; i++) shared.onWorkspaceLoadFunctions[i]();
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newPasteShortcut, /*allowOverrides:*/ true);

  const UNDO = Blockly.ShortcutItems.names.UNDO;
  const oldUndoShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[UNDO];
  const newUndoShortcut = {
    ...oldUndoShortcut,
    callback(workspace) {
      if(shared.inClearCheckMode === true) return false;
      shared.onWorkspaceLoadFunctions.length = 0;
      const toWSUnload = shared.ws.undoStack_[shared.ws.undoStack_.length-1]?.type === 'delete';
      if(toWSUnload === true) shared.workspaceLoaded = false;
      shared.importNeedsStructuredClone = true;
      const returnVal = oldUndoShortcut.callback.call(this, workspace);
      if(toWSUnload === true) shared.workspaceLoaded = true;
      delete shared.importNeedsStructuredClone;
      for(let i = 0; i < shared.onWorkspaceLoadFunctions.length; i++) shared.onWorkspaceLoadFunctions[i]();
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newUndoShortcut, /*allowOverrides:*/ true);
  shared.undoShortcut = newUndoShortcut.callback;

  // removing the duplicate function from the menu
  Blockly.ContextMenuRegistry.registry.unregister('blockDuplicate');
}, {timeout: 100})

ws.registerButtonCallback("returnToMainGame", ()=>{location.replace(location.origin)});