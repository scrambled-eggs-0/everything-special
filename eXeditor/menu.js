import shared from '../shared/shared.js';
import utils from "../client/utils.js";
import * as Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
import {save} from './serialization';
const { stringHTMLSafe } = utils;
let open = false; let allowGeneration = false;
const toggle = document.querySelector('.toggle-gui');
const gui = document.querySelector('.data-gui');
toggle.onclick = (e) => {
    open = !open;
    if(open === true){
        toggle.innerText = 'Close Menu';
        toggle.dataset.usage = 'on';
        gui.classList.remove('hidden');
        initMenu();
    } else {
        toggle.innerText = 'Open Menu';
        toggle.dataset.usage = 'off';
        gui.classList.add('hidden');
        shared.unInitMenu();
    }
    allowGeneration = open;
    return e.preventDefault();
}

function dropdown(options=[1,2,3], onChange=()=>{}){
    return {
        specialType: 'dropdown',
        options, onChange,
        selectedIndex: 0
    }
}

function button(name, onClick=()=>{}){
    return {
        specialType: 'button',
        name, onClick
    }
}

const settings = {
    snap: 50,
    snapEnabled: true,
    difficulty: dropdown(['Peaceful', 'Moderate','Difficult','Hardcore','Exhausting','Relentless','Agonizing','Terrorizing','Cataclysmic']),
    subDifficulty: 0.5,
    mapName: 'Planet of Creative Name',
    uploadBtn: button("Upload! 🔥", uploadCode),
}

const nameToDifficulty = {Peaceful: 0, Moderate: 1, Difficult: 2, Hardcore: 3, Exhausting: 4, Relentless: 5, Agonizing: 6, Terrorizing: 7, Cataclysmic: 8};

let difficulty = 0.5; let mapName = 'Planet of Creative Name';
function changeSettings(key, val, input){
    if(key === 'difficulty'){
        difficulty = (difficulty % 1) + nameToDifficulty[val];
        console.log(difficulty);
        return;
    } else if(key === 'subDifficulty'){
        if(Number.isFinite(val) === false || val < 0) input.value = 0;
        else if(val >= 1) val = input.value = 0.9999;
        difficulty = Math.floor(difficulty) + val;
        return;
    } else if(key === 'mapName') mapName = val;
    shared[key] = val;
}

function initMenu() {
    javascriptGenerator.init(shared.ws);
    window.runCodeNoReset = (I) => {
        I(shared);
    }

    for(let i = 0; i < shared.selectedObstacles.length; i++){
        const block = shared.obstacleToBlock.get(shared.selectedObstacles[i]);
        if(block === undefined || block === null) continue;

        const shape = parseInt(block.getFieldValue("SHAPE_DROPDOWN"));

        const numSimulates = block.getFieldValue("NUM_SIMULATES_DROPDOWN");

        const numEffects = block.getFieldValue("NUM_EFFECTS_DROPDOWN");

        const type = [shape,[],[]];

        for(let i = 0; i < numSimulates; i++){
            type[1].push(parseInt(block.getFieldValue(`SIMULATE_DROPDOWN${i}`)));
        }

        for(let i = 0; i < numEffects; i++){
            type[2].push(parseInt(block.getFieldValue(`EFFECT_DROPDOWN${i}`)));
        }

        shared.params = {};
        const keyToName = {...block.shapeParamToId, ...block.simulateParamToId, ...block.effectParamToId};

        for(let key in block.shapeParamToId){
            getValueInput(block, key, block.shapeParamToId[key]);
        }
        for(let key in block.simulateParamToId){
            getValueInput(block, key, block.simulateParamToId[key]);
        }
        for(let key in block.effectParamToId){
            getValueInput(block, key, block.effectParamToId[key]);
        }
        
        delete shared.key;

        const changeFn = (key, val) => {
            const name = keyToName[key];
            if(name === undefined) return;
            setValueInput(block, val, name);
        }

        const shapeName = shared.satMapI2N[type[0]];
        const simulateNames = type[1].map(t => shared.simulateMapI2N[t]).join('-');
        const effectNames = type[2].map(t => shared.effectMapI2N[t]).join('-');
        let folderName = `${shapeName}${simulateNames.length === 0 ? '' : '-[' + simulateNames + ']'}-[${effectNames}]`;

        createFolder(shared.params, changeFn, folderName);

        delete shared.params;
    }
    delete window.runCodeNoReset;
}

function getValueInput(block, key, inputName) {
    const input = block.getInput(inputName)?.connection?.targetConnection?.sourceBlock_;
    if(input === null || input === undefined || input.isShadow() === false) return;
    shared.key = key;

    let generated = javascriptGenerator.blockToCode(input, true);
    if(Array.isArray(generated) === true) generated = generated[0];
    eval(`window.runCodeNoReset((shared) => {\nshared.params[shared.key] = ${generated}\n})`);
}

function setValueInput(block, value, inputName) {
    const input = block.getInput(inputName);
    if(input === null || input === undefined) return;

    input.setShadowDom(Blockly.utils.xml.textToDom(shared.generateShadowBlock(value)));
}

shared.setValueInput = (block, key, value) => {
    let inputName;
    if(block.shapeParamToId[key] !== undefined) inputName = block.shapeParamToId[key];
    else if(block.simulateParamToId[key] !== undefined) inputName = block.simulateParamToId[key];
    else if(block.effectParamToId[key] !== undefined) inputName = block.effectParamToId[key];
    else return;
    setValueInput(block, value, inputName);
}

shared.unInitMenu = () => {
    if(allowGeneration === false) return;
    // dont remove settings, that's always there
    while(gui.children[1]) {gui.children[1].remove();}
}

shared.onEditorResetFns.push(shared.unInitMenu);

shared.regenerateMenu = () => {
    if(allowGeneration === false) return;
    shared.unInitMenu();
    initMenu();
}

shared.allowMenuGeneration = (s) => {
    if(open === false) return;
    allowGeneration = s;
}

function createFolder(params, changeFn=(key,val)=>{}, folderName) {
    const f = createFolderShell(folderName);
    const content = f.getElementsByClassName('folder-content')[0];

    for(let key in params){
        content.appendChild(createProperty(params, key, changeFn));
    }

    for(let i = 0; i < content.children.length; i++){
        content.children[i].classList.add('hidden');
    }

    gui.appendChild(f);

    return f;
}

function createFolderShell(folderName){
    const f = document.createElement('div');
    f.classList.add('folder');
    f.isOpen = false;

    const btn = document.createElement('button');
    btn.classList.add('folder-button');
    btn.onmousedown = () => {clickFolder(f);}
    
    f.folderName = stringHTMLSafe(folderName);
    btn.innerHTML = '<span class="or">▸</span>&nbsp;' + f.folderName;
    f.appendChild(btn);

    const content = document.createElement('div');
    content.classList.add('folder-content');
    f.appendChild(content);

    return f;
}

function clickFolder(f){
    f.isOpen = !f.isOpen;
    const content = f.getElementsByClassName('folder-content')[0];
    const btn = f.getElementsByClassName('folder-button')[0];
    if(f.isOpen === true){
        btn.innerHTML = '<span class="ro">▸</span>&nbsp;' + f.folderName;
        for(let i = 0; i < content.children.length; i++){
            content.children[i].classList.remove('hidden');
        }
    } else {
        btn.innerHTML = '<span class="or">▸</span>&nbsp;' + f.folderName;
        for(let i = 0; i < content.children.length; i++){
            content.children[i].classList.add('hidden');
        }
    }
}

function createProperty(o, key, changeFn){
    const value = o[key];

    const prop = document.createElement('div');
    prop.classList.add('property');
    prop.classList.add('text');

    const type = typeof value;

    if(type !== 'object'){
        const propName = document.createElement('span');
        propName.classList.add('property-name');
        propName.innerText = formatName(key);
        prop.appendChild(propName);
    } else if(value?.specialType === 'dropdown'){
        const propName = document.createElement('span');
        propName.classList.add('property-name');
        propName.innerText = formatName(key);
        prop.appendChild(propName);
    }

    const input = document.createElement('input');
    input.spellcheck = 'false';
    input.value = value;

    input.oninput = ((e) => {
        const targetValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
        changeFn(key, targetValue, input);
        
        return e.preventDefault();
    })

    if(typeToFolderModifier[type] !== undefined){
        typeToFolderModifier[type](key, value, input, prop, o, changeFn);
    } else {
        input.classList.add('property-text-input');
        prop.appendChild(input);
    }

    if(type === 'object' && value?.specialType !== 'dropdown') prop.style.height = 'auto';

    return prop;
}

const typeToFolderModifier = {
    string: (key, value, input, prop, o) => {
        if(isHex(value) === true){
            typeToFolderModifier.color(key, value, input, prop, o);
            return;
        }

        input.classList.add('property-text-input');
        prop.appendChild(input);
    },
    boolean: (key, value, input, prop, o, set) => {
        input.checked = value;

        const label = document.createElement('label');
        label.classList.add('switch');
        label.classList.add('property-checkbox-input');
        label.appendChild(input);

        const span = document.createElement('span');
        span.classList.add('slider');
        if(input.checked == true) span.classList.add('inputChecked'); 
        label.appendChild(span);

        prop.onmousedown = (e) => {
            input.checked = !input.checked;
            if(input.checked == true) span.classList.add('inputChecked'); 
            else span.classList.remove('inputChecked');
            set(key, input.checked, input);
        }

        prop.appendChild(label);
    },
    // always an array because params are not objects.
    object: (key, obj, input, prop, o, set) => {
        if(obj.specialType !== undefined){
            typeToFolderModifier[obj.specialType](key, obj, input, prop, o, set);
            return;
        }

        prop.appendChild(createFolder(obj, (k,v)=>{obj[k]=v;set(key,obj,input)}, formatName(key)));
    },
    color: (key, value, input, prop) => {
        input.classList.add('property-color-input');
        input.type = 'color';

        input.id = Math.random();
        
        const text = document.createTextNode(input.value);
        text.nodeValue = input.value;

        const label = document.createElement('label');
        label.classList.add('color-label');
        label.style.background = input.value;
        label.htmlFor = input.id;
        label.appendChild(input);
        label.appendChild(text);

        input.oninput = () => {
            text.nodeValue = input.value;
            label.style.background = input.value;
        }

        prop.appendChild(label);
    },
    button: (key, obj, input, prop) => {
        // class to add a property to an object
        input.classList.add('property-button-input');
        input.type = 'button';
        input.value = obj.name;

        input.onclick = obj.onClick;

        prop.appendChild(input);
    },
    dropdown: (key, value, input, prop, o, set) => {
        const select = document.createElement('select');
        select.classList.add('property-option-input');
        
        value.options.forEach((data) => {
            const option = document.createElement('option');
            option.value = data;
            option.classList.add('select-items');
            option.innerText = data;
            select.appendChild(option);
        });

        if(value.selectedOption === undefined) value.selectedOption = value.options[0];
        else select.value = value.selectedOption;
        // processChange(key, value);

        select.onchange = (e) => {
            value.selectedIndex = select.selectedIndex;
            set(key, value.options[value.selectedIndex], input);
        }
        
        prop.appendChild(select);
    }
}

function isHex(s){
    if(s[0] !== '#' || (s.length !== 4 && s.length !== 7)) return false;
    const sl = s.slice(1);
    return parseInt(sl,16).toString(16) === sl.toLowerCase();
}

function formatName(s){
    if(s.length > 1) s = s[0].toUpperCase() + s.slice(1);
    
    for(let i = 0; i < s.length; i++){
        if(s[i].toUpperCase() === s[i]){
            s = s.slice(0, i) + ' ' + s[i].toLowerCase() + s.slice(i+1);
            i++;
        }
    }
    return s;
}

createFolder(settings, changeSettings, "Settings");

let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

// Upload code!
const uploadUrl = `${location.origin}/upload`;
let exclams = '';
function uploadCode() {
  // direct user to login page if we don't have a saved username
  if(username === null){
    exclams += '!';
    alert(`Stop pressing me >:( ${exclams} I am an angry troll that doesnt let people without an account pass, so GO AWAY! Stop! Head on down to the land of evadesX.io/create or /login to get an account, and then maybe i'll let you upload your little level, ha!`, true, 22);
    return;
  }

  save(shared.ws);
  const blob = new Blob([localStorage.getItem("ws")], { type: 'application/javascript' });

  const formData = new FormData();
  formData.append('file', blob, 'upload.js');

  const headers = new Headers();
  headers.append('u', username);
  headers.append('p', password);

  if(difficulty === 9) difficulty = 8.9999;
  headers.append('difficulty', difficulty);
  headers.append('mapname', mapName);

  fetch(uploadUrl, {
    method: 'POST',
    body: formData,
    headers: headers
  }).then(async (d) => {
      const txt = await d.text();
      if(txt === 'taken'){
        const txt = prompt(`Upload failed because your planet name (${mapName}) is taken! Type a new map name here and click ok to retry, or hit cancel and change the name in game menu.`);
        console.log(txt);
        if(txt === null) return;
        mapName = txt;
        uploadCode();
        return;
      }
      if(txt === 'n'){
        alert('Upload failed! If you think this might be a bug, please dm a developer on discord!', true, 22);
        return;
      }
      alert(`Congrats! ${mapName} was uploaded to the servers!`, true, 22*3);
      
      if(!location.origin.startsWith('http://localhost')) {ws.clear(); localStorage.removeItem('ws'); load(shared.ws); }
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
}