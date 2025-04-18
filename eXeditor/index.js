import './index.css';
import './utils.js';
import './divider.js';
import '../eXclient/index.js';

import shared from '../shared/shared.js';
import * as Blockly from 'blockly';
import '../shared/fixPolygon.js';
import {javascriptGenerator} from 'blockly/javascript';
javascriptGenerator.addReservedWords('C');
import {save, load} from './serialization';

const blocklyDiv = document.getElementById('blocklyDiv');

const zoom = {
  controls: true,
  wheel: true,
  startScale: 1.0,
  maxScale: 2,
  minScale: 0.3,
  scaleSpeed: 1.03,
  pinch: true
};

import DarkTheme from '@blockly/theme-dark';
const theme = Blockly.Theme.defineTheme('defaultTheme', {
  'base': DarkTheme,
  'blockStyles': {
    'motion_blocks': {
      'colourPrimary': '#07ced9'
    },
    'list_blocks': {
      'colourPrimary': '#4a148c'
    }
  },
  'categoryStyles': {
    'obstacle_category': {
      'colour': 194
    },
    'game_category': {
      'colour': 121
    }
  },
});

import toolbox from '../shared/toolbox.js';
const ws = shared.ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});

window.getCode = () => {
  return `window.editorRunCode((shared) => {\nconst C=shared.C;\nshared.resetGame();\n${javascriptGenerator.workspaceToCode(ws)}\n})`;
}

window.editorRunCode = (I) => {
  shared.resetGame();
  I(shared);
}

let runCode = shared.runCode = () => {
  window.loopTrap = 1000;

  const code = getCode();

  shared.resetGame();
  shared.hasLoadedNewMusic = false;

  eval(code);

  if(shared.hasLoadedNewMusic === false){
    shared.stopMusic();
  }

  for(let i = 0; i < shared.editorRunFns.length; i++){
    shared.editorRunFns[i]();
  }

  return code;
};

load(ws);

runCode();

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  if (e.isUiEvent || e.type === Blockly.Events.FINISHED_LOADING || ws.isDragging()) {
    return;
  } else if(e.type === Blockly.Events.BLOCK_DELETE){
    ws.trashcan.emptyContents();
  }
  runCode();
});

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  if (e.isUiEvent === true) {
    if(e.type === Blockly.Events.SELECTED || e.type === Blockly.Events.BLOCK_DRAG){
      shared.selectCorrespondingObs(e.newElementId);
    }
    return;
  }
  save(ws);
});

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

// shared.ws.registerButtonCallback("returnToMainGame", ()=>{location.replace(location.origin)});

import './overrides.js';
import './menu.js';
import './playMode.js';

let username = localStorage.getItem('username');
shared.players[shared.selfId].name = username ?? '';
shared.players[shared.selfId].cr = () => {};
shared.players[shared.selfId].god = true;
shared.startGame();

// importing and exporting
const importBtn = document.getElementById('import-button');
importBtn.onclick = () => {
  if(shared.inClearCheckMode === true) return;
  navigator.clipboard.readText().then((txt) => {
    const lastWS = localStorage.getItem('ws') ?? '';
    try {
      shared.workspaceLoaded = false;
      localStorage.setItem('ws', txt);
      load(shared.ws);
    } catch (err) {
      shared.workspaceLoaded = true;
      console.error(err);
      alert('Map Import Failed! ' + err, true, 22);
      localStorage.setItem('ws', lastWS);
      load(shared.ws);
    }
  });
}

const exportBtn = document.getElementById('export-button');
exportBtn.onclick = () => {
  save(shared.ws);
  navigator.clipboard.writeText(localStorage.getItem('ws'));
  alert('Copied To clipboard!', true, 3);
};

// undo, redo, and clear
const undoBtn = document.getElementById('undo-button');
undoBtn.onclick = () => {
  if(shared.inClearCheckMode === true) return;
  shared.ws.undo(false);
}
const redoBtn = document.getElementById('redo-button');
redoBtn.onclick = () => {
  if(shared.inClearCheckMode === true) return;
  shared.ws.undo(true);
}
const clearBtn = document.getElementById('clear-button');
clearBtn.onclick = () => {
  if(shared.inClearCheckMode === true) return;
  if(confirm('Are you sure you want to clear the map?') !== true) return;
  localStorage.removeItem('ws');
  load(shared.ws);
  shared.runCode();
}