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

javascriptGenerator.INFINITE_LOOP_TRAP = 'if(--window.loopTrap == 0){window.onLoopTrap();throw "Infinite loop!";}\n';
window.onLoopTrap = () => {
  // if(!!confirm("Infinite loop detected. Would you like to undo?")) // newUndoShortcut.callback(window.ws);
  window.infiniteLoop = true;
  alert("Infinite loop detected. Code execution paused.");
}
function getCode(){
  return javascriptGenerator.workspaceToCode(ws);//.replaceAll('var ', 'let ');
}
window.getCode = getCode;

let runCode = window.runCode = () => {
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

const messageText = document.getElementById('messagetext');
window.alert = (msg, toFade=true) => {
  messageText.innerText = msg;
  messageText.style.opacity = "1";
  if(toFade === true) window.fadeAlert();
}

window.fadeAlert = () => {
  messageText.style.opacity = "0";
  messageText.style.animation = 'none';
  messageText.offsetHeight; /* trigger reflow */
  messageText.style.animation = "fadeOut 3s ease-in-out 1";
}

const ws = window.ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});
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
  if(window.infiniteLoop === true) {alert('Cannot upload because there is an infinite loop!'); return;}
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

import './createMode.js';

window.requestIdleCallback(() => {
  // overriding the duplicate function 
  const PASTE = Blockly.ShortcutItems.names.PASTE;
  const oldPasteShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[PASTE];
  const newPasteShortcut = {
    ...oldPasteShortcut,
    callback(workspace) {
      if(window.inClearCheckMode === true) return false;
      window.onWorkspaceLoadFunctions.length = 0;
      window.workspaceLoaded = false;
      window.importNeedsStructuredClone = true;
      const returnVal = oldPasteShortcut.callback.call(this, workspace);
      window.workspaceLoaded = true;
      delete window.importNeedsStructuredClone;
      for(let i = 0; i < window.onWorkspaceLoadFunctions.length; i++) window.onWorkspaceLoadFunctions[i]();
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newPasteShortcut, /*allowOverrides:*/ true);

  const UNDO = Blockly.ShortcutItems.names.UNDO;
  const oldUndoShortcut = Blockly.ShortcutRegistry.registry.getRegistry()[UNDO];
  const newUndoShortcut = {
    ...oldUndoShortcut,
    callback(workspace) {
      if(window.inClearCheckMode === true) return false;
      window.onWorkspaceLoadFunctions.length = 0;
      const toWSUnload = window.ws.undoStack_[window.ws.undoStack_.length-1]?.type === 'delete';
      if(toWSUnload === true) window.workspaceLoaded = false;
      window.importNeedsStructuredClone = true;
      const returnVal = oldUndoShortcut.callback.call(this, workspace);
      if(toWSUnload === true) window.workspaceLoaded = true;
      delete window.importNeedsStructuredClone;
      for(let i = 0; i < window.onWorkspaceLoadFunctions.length; i++) window.onWorkspaceLoadFunctions[i]();
      return returnVal;
    }
  }
  Blockly.ShortcutRegistry.registry.register(newUndoShortcut, /*allowOverrides:*/ true);
  window.undoShortcut = newUndoShortcut.callback;

  // removing the duplicate function from the menu
  Blockly.ContextMenuRegistry.registry.unregister('blockDuplicate');
}, {timeout: 100})

ws.registerButtonCallback("returnToMainGame", ()=>{location.replace(location.origin)});

window.updateBlockId = (id) => {
  const allBlocks = window.ws.getAllBlocks();
  for(let i = allBlocks.length-1; i >= 0; i--){
    if(allBlocks[i].obstacleId === id){
      const block = allBlocks[i];
      for(let j = 0; j < block.childBlocks_.length; j++){
        if(block.childBlocks_[j].type === 'text'){
          const textBlock = block.childBlocks_[j];
          let oldId = textBlock.getFieldValue("TEXT");
          let duplicateNum = 2;
          // if we already have a (2) at the end,
          // make it a (3) instead of a (2) (2).
          if(oldId[oldId.length-1] === ')'){
            let n, char, isDup = true;
            for(n = oldId.length-2; n >= 0; n--){
              char = oldId[n];
              if(char === '(') break;
              if(Number.isFinite(parseInt(char)) === false) {isDup = false; break;}
            }
            if(isDup === true && n !== oldId.length-2){
              duplicateNum = parseInt(oldId.slice(n+1,oldId.length-1));
              oldId = oldId.slice(0, n-1);
            }
          }
          let newId = oldId + ` (${duplicateNum})`;
          while(window.idToObs[newId] !== undefined){newId = oldId + ` (${++duplicateNum})`;}
          Blockly.Events.disable();  
          textBlock.setFieldValue(newId, "TEXT");
          Blockly.Events.enable();
          break;
        }
      }
      break;
    }
  }
}