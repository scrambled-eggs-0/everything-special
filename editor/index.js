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

const codes = window.codes = {
  /*windowName: code*/
};

window.workspaceToId = {

}

// TODO: import all data into a fake blockly div so that it can be compiled to code (dependency injection)
// Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);

// const importData = { ...localStorage };

function getAllCode(){
  const code = javascriptGenerator.workspaceToCode(ws);

  codes[workspaceName] = code;

  return '{\n' + Object.keys(codes).map((c,i) => {window.workspaceToId[c] = i; return 'const e = {x:450,y:800,angle:0,img:undefined,drawImg:false,r:100,emoji:"😀"};\nI(e);\n' + codes[c];}).join('}\n{') + '\n}';
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

const newEntityContainer = document.getElementById('newentitybg');

const newEntityBtn = document.getElementById('newentity');
newEntityBtn.onclick = () => {
  // const newName = prompt('enter workspace');
  // if(newName === null) return;
  // changeWorkspace(newName);

  const minimumDimension = Math.min(window.innerWidth, window.innerHeight);

  newEntityContainer.classList.remove("hidden");

  const wsNames = Object.keys(window.workspaceToId);
  for(let i = 0; i < wsNames.length; i++){
    const wsName = wsNames[i];
    const id = window.workspaceToId[wsName];
    const entity = window.entities[id];

    const angle = Math.PI * 2 * (i+1) / (wsNames.length+1);

    const newBtn = document.createElement('button');
    newBtn.type = 'button';
    newBtn.classList.add('spriteworkspacebutton');

    // emoji or image
    if(entity.drawImg === true){
      const img = document.createElement('img');
      img.src = entity.img.src;
      img.classList.add('spriteworkspaceimg');
      newBtn.appendChild(img); 
    } else {
      const p = document.createElement('p');
      p.innerText = window.entities[id].emoji;
      p.style.margin = '0';
      newBtn.appendChild(p);
    }

    // label
    const l = document.createElement('p');
    l.innerText = wsName;
    l.classList.add('spriteworkspacelabel');
    newBtn.appendChild(l);

    newBtn.style.left = window.innerWidth / 2 + Math.cos(angle) * minimumDimension * 0.3 + 'px';
    newBtn.style.top = window.innerHeight / 2 + Math.sin(angle) * minimumDimension * 0.3 + 'px';

    newBtn.onclick = () => {
      changeWorkspace(wsName);
      while(newEntityContainer.firstChild){
        newEntityContainer.firstChild.remove();
      }
      newEntityContainer.classList.add('hidden');
    }

    newEntityContainer.appendChild(newBtn);
    // for now we will just take the sprite's emoji as the image. Eventually for custom images we should generate a canvas and stuff

    // TODO: resizing makes buttons in the wrong pos
  }

  // new workspace btn
  const newBtn = document.createElement('button');
  newBtn.type = 'button';
  newBtn.classList.add('spriteworkspacebutton');

  // new image
  const img = document.createElement('img');
  img.src = `data:image/svg+xml,<svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="%23000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>`;
  img.classList.add('spriteworkspaceimg');
  // black bg
  img.style.background = 'rgba(0,0,0,0.2)';
  img.style.borderRadius = '12px'; 
  newBtn.appendChild(img);

  // label
  const l = document.createElement('p');
  l.innerText = 'New';
  l.classList.add('spriteworkspacelabel');
  newBtn.appendChild(l);

  const angle = Math.PI * 2;
  newBtn.style.left = window.innerWidth / 2 + Math.cos(angle) * minimumDimension * 0.3 + 'px';
  newBtn.style.top = window.innerHeight / 2 + Math.sin(angle) * minimumDimension * 0.3 + 'px';

  newBtn.onclick = () => {
    const newName = prompt('enter workspace name');
    if(newName === null) return;
    changeWorkspace(newName);
    while(newEntityContainer.firstChild){
      newEntityContainer.firstChild.remove();
    }
    newEntityContainer.classList.add('hidden');
  }

  newEntityContainer.appendChild(newBtn);

  // Choose Sprite text
  const cs = document.createElement('p');
  cs.innerText = 'Choose Sprite';
  cs.classList.add('bigspriteworkspacelabel');
  newEntityContainer.appendChild(cs);
};

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
window.codeLoaded = true;