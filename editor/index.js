import './index.css';
import '../client/main.js';

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

const zoom = {
  controls: true,
  wheel: true,
  startScale: 1.0,
  maxScale: 3,
  minScale: 0.3,
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

const codes = {
  /*windowName: code*/
};

// TODO: import all data into a fake blockly div so that it can be compiled to code (dependency injection)
// Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);

// const importData = { ...localStorage };

function getAllCode(){
  const code = javascriptGenerator.workspaceToCode(ws);

  codes[workspaceName] = code;

  return '{\n' + Object.values(codes).map(c => 'const e = {x: 900/2, y: 1600/2, angle: 0};\nI(e);\n' + c).join('}\n{') + '\n}';
}

const runCode = () => {
  const allCode = getAllCode();

  codeDiv.innerText = allCode;

  window.entities.length = window.tickFunctions.length = 0;

  eval(allCode);
};

let ws;
export const changeWorkspace = (name) => {
  // save and previous if it exists
  if(ws) {
    save(ws, workspaceName);
    (document.querySelector('.injectionDiv') ?? {remove:()=>{}}).remove();
  }

  ws = Blockly.inject(blocklyDiv, {toolbox, zoom, theme});
  window.workspaceName = name;
  load(ws, workspaceName);

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
    save(ws, workspaceName);
  });
}

const newEntityBtn = document.getElementById('newentity');
newEntityBtn.onclick = () => {
  const newName = prompt('enter workspace');
  if(newName === null) return;
  changeWorkspace(newName);
}

const publishBtn = document.getElementById('publish');
publishBtn.onclick = () => {
  if(confirm('Ready to publish?') !== true) return;
  uploadCode(getAllCode());
}

const uploadUrl = `${location.origin}/upload`;
function uploadCode(code){
  const blob = new Blob([code], { type: 'application/javascript' });

  const formData = new FormData();
  formData.append('file', blob, 'upload.js');

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

changeWorkspace('default');

const ls = { ...localStorage };
for(let key in ls){
  window.workspaceName = key;
  load(ws, workspaceName);
  codes[workspaceName] = javascriptGenerator.workspaceToCode(ws);
}

changeWorkspace('default');