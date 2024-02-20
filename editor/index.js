import './index.css';
import '../client/main.js';

import * as Blockly from 'blockly';
import {blocks} from './blocks/text.js';
import forBlock from '../shared/forBlock.js';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import toolbox from '../shared/toolbox.js';
import concatCode from '../shared/concatCode.js';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

const zoom = {
  controls: true,
  wheel: true,
  startScale: 1.0,
  maxScale: 2,
  minScale: 0.6,
  scaleSpeed: 1.03,
  pinch: true
};

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');

const theme = Blockly.Theme.defineTheme('defaultTheme', {
  'base': Blockly.Themes.Classic,
  'blockStyles': {
    'motion_blocks': {
      'colourPrimary': '#07ced9'
    },
    //  'math_blocks': {...}
  },
  'categoryStyles': {
    'motion_category': {
      'colour': '#07ced9'
    }
  },
  // 'componentStyles': {...},
  // 'fontStyle': {...},
  // 'startHats': true
});

// ids go 0-n
// codes
// entities
// workspaceNames

// to change: window.codes from object of windowName index to array with id index, ✅
// workspaceToId obselete, use workspaceNames from id ✅
// changeWorkspace from name to id ✅
// workspaceName changed to workspaceId ✅
// save, load from name to id ✅
// updating window.workspaceNames upon creating a new workspace ✅

const codes = window.codes = [
  /*id: code*/
];

window.workspaceNames = [
  /*id: workspaceName*/
]

function getAllCode(){
  const code = javascriptGenerator.workspaceToCode(ws).replaceAll('var ', 'let ');

  codes[window.workspaceId] = code;

  return concatCode(codes);
}

const runCode = () => {
  const allCode = getAllCode();

  codeDiv.innerText = allCode;

  window.resetGame();
  window.hasLoadedNewMusic = false;

  eval(allCode);

  if(window.hasLoadedNewMusic === false){
    window.stopMusic();
  }
};

let ws;
export const changeWorkspace = window.changeWorkspace = (id) => {
  // save and previous if it exists
  if(ws) {
    save(ws, window.workspaceId);
    (document.querySelector('.injectionDiv') ?? {remove:()=>{}}).remove();
  }

  ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});
  window.workspaceId = id;
  load(ws, window.workspaceId);

  // run code again
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
    save(ws, window.workspaceId);
  });
}

import './spritemenu.js';

const publishBtn = document.getElementById('publish');
publishBtn.onclick = () => {
  if(confirm('Ready to publish?') !== true) return;
  uploadCode();
}

const uploadUrl = `${location.origin}/upload`;
function uploadCode(){
  const blob = new Blob([codes.join('Z__DLMTR')], { type: 'application/javascript' });

  const formData = new FormData();
  formData.append('file', blob, 'upload.js');

  console.log(codes.join('Z__DLMTR'));
  console.log({uploadUrl});

  fetch(uploadUrl, {
      method: 'POST',
      body: formData,
  })  .then(response => response.json())
      .then(data => {
          console.log('File uploaded successfully:', data);
      })
      .catch(error => {
          console.error('Error uploading file:', error);
      });
}

Blockly.Events.disable();

window.initialLocalStorageLen = parseInt(localStorage.getItem('wsLen') ?? 0);
const initialWorkspaceNames = (localStorage.getItem('wsNames') ?? '').split(',');

window.workspaceNames[0] = 'default';
changeWorkspace(0);

for(let i = 0; i < window.initialLocalStorageLen; i++){
  window.workspaceId = i;
  load(ws, i);
  window.codes[i] = javascriptGenerator.workspaceToCode(ws);
  window.workspaceNames[i] = initialWorkspaceNames[i];
}
changeWorkspace(0);
Blockly.Events.enable();
delete window.initialLSLen;
window.codeLoaded = true;

window.onbeforeunload = () => {
  localStorage.setItem('wsNames', window.workspaceNames.join(','));
  localStorage.setItem('wsLen', window.workspaceNames.length);
  // TODO: savedWorkspace
  return null;
}