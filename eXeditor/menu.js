import shared from '../shared/shared.js';
import utils from "../client/utils.js";
import * as Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
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

const settings = {
    snap: 50,
    snapEnabled: true,
}

function changeSettings(key, val){
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
    }

    const input = document.createElement('input');
    input.spellcheck = 'false';
    input.value = value;

    input.oninput = ((e) => {
        const targetValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
        changeFn(key, targetValue);
        
        return e.preventDefault();
    })

    if(typeToFolderModifier[type] !== undefined){
        typeToFolderModifier[type](key, value, input, prop, o, changeFn);
    } else {
        input.classList.add('property-text-input');
        prop.appendChild(input);
    }

    if(type === 'object') prop.style.height = 'auto';

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
            set(key, input.checked);
        }

        prop.appendChild(label);
    },
    // always an array because params are not objects.
    object: (key, obj, input, prop, o, set) => {
        prop.appendChild(createFolder(obj, (k,v)=>{obj[k]=v;set(key,obj)}, formatName(key)));
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
    // old codebase also has "options" type
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