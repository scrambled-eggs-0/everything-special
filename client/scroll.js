import shared from '../shared/shared.js';
import Utils from './utils.js';
const { until, environment } = Utils;

let nextCode;
const nextCodeLoaded = () => { return nextCode !== undefined; };
const isServer = typeof location === 'undefined';
let reqUrl = isServer === true ? '' : `${location.origin}/game`;
let loadingCurrent = false;
let nextFileName = '';
let lastFileNameStack = [];
let forwardFileNameStack = [];
shared.levelFileName = '';

shared.isExClient = true;// TEMP

// never get code from server in editor
if(environment === 'editor' || environment === 'server' || shared.isExClient === true){
    getNextCode = async () => {
        await until(() => { return false; })
    };
    scroll = () => {};
} else if(location.href.includes('standalone') === true){
    shared.standalone = true;
    const split = location.href.split('/');
    reqUrl += '/' + split[split.length - 1];
    scroll = () => {};
} else if(localStorage.getItem('tutorialCompleted') === null) {
    let getNextCodeLoaded = false;
    getNextCode = async () => {
        await until(() => {return getNextCodeLoaded !== false});
        return getNextCode();
    };
    shared.tutorial = true;
    (async () => {
        const exps = await import('./tutorial.js');
        getNextCode = exps.default;
        getNextCodeLoaded = true;
    })();
}

// get first code
getNextCode().then(async (code) => {
    // load first request
    nextCode = code;
    replaceScript();

    if(shared.standalone === true){
        getNextCode = async () => {
            await until(() => { return false; })
        };
        return;
    }

    // load next code when it arrives
    nextCode = await firstNextCode;
})

// get next code
let firstNextCode = getNextCode();

// on scroll
async function scroll(up=false){
    // don't allow scrolling if we're loading the current code
    // it'll look the same to the user anyways
    if(loadingCurrent === true) return;
    if(up === true){
        if(lastFileNameStack.length === 0) return;
        var lastCode = nextCode;
        forwardFileNameStack.push(shared.levelFileName);
        nextCode = await getLastCode(lastFileNameStack.pop());
    } else if(shared.levelFileName !== ''){
        lastFileNameStack.push(shared.levelFileName);
        if(lastFileNameStack.length > 42) lastFileNameStack.shift();
        if(forwardFileNameStack.length !== 0) nextCode = await getLastCode(forwardFileNameStack.pop());
    }

    shared.scrollingUp = up === true;
    shared.lastObstacles = [];
    for(let i = 0; i < obstacles.length; i++){
        shared.lastObstacles.push(obstacles[i]);
    }
    for(let key in shared.colors){
        shared.lastColors[key] = shared.colors[key];
        shared.colors[key] = shared.defaultColors[key];
    }
    shared.lastPlayerData = [player.pos.x, player.pos.y];

    // if we already have the next code
    if(nextCode !== undefined){
        // append new script to run second game
        replaceScript();

        // animation timer
        shared.scrollAnimation = 0;

        // fetch new next code
        if(up === true) nextCode = lastCode;
        else nextCode = await getNextCode();
    } else {
        // loading current, nextcode
        loadingCurrent = true;

        // load blank screen for now
        removeScript();

        // animation timer
        shared.scrollAnimation = 0;

        // code is on its way, wait until it gets here
        await until(nextCodeLoaded, 16.66);

        // set code
        replaceScript();

        // unlock mutex
        loadingCurrent = false;

        // fetch new next code
        nextCode = await getNextCode();
    }
}

shared.won = false;
async function getNextCode(){
    const response = await fetch(reqUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);
    nextFileName = response.headers.get('Fn');
    return response.text();
}

async function getLastCode(fileName){
    const fileNameWithoutTheJS = fileName.slice(0, fileName.length-3);
    const response = await fetch(reqUrl + '/' + fileNameWithoutTheJS);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);
    nextFileName = fileName;
    return response.text();
}

// replaces code running with nextCode
async function replaceScript(){
    removeScript();

    shared.resetGame();
    stopMusic();

    const scriptElement = document.createElement('script');
    scriptElement.id = "gameScript";
    scriptElement.text = nextCode;
    document.body.appendChild(scriptElement);

    nextCode = undefined;
    shared.levelFileName = nextFileName;
}

shared.removeScript = function removeScript(){
    const last = document.getElementById("gameScript");
    if(last !== null) last.remove();
    shared.resetGame();
    stopMusic();
}

shared.resetFns = [];
shared.resetGame = () => {
    for(let i = 0; i < shared.resetFns.length; i++){
        shared.resetFns[i]();
    }
    shared.resetFns.length = shared.obstacles.length = shared.mouseUpFunctions.length = shared.mouseDownFunctions.length = shared.mouseMoveFunctions.length = shared.resizeFns.length = 0;
    if(shared.environment !== 'editor') {shared.respawnPlayer(); shared.changeCameraScale(1); /*player.renderRadius = player.sat.r;*/ }
    else {shared.infiniteLoop = false; shared.onEditorReset();}
    for(let key in shared.defaultColors) { shared.colors[key] = shared.defaultColors[key]; }
    if(shared.colors.vignette !== undefined) shared.colors.vignette = structuredClone(shared.defaultColors.vignette);
    shared.mouseDownFunctions.push(() => {
        if(player.dead === true) shared.respawnPlayer();
    })
    if(shared.addSideMenuEvtListeners !== undefined) shared.addSideMenuEvtListeners(nextFileName);
    shared.spawnPosition.x = 100;
    shared.spawnPosition.y = 100;
    shared.camera.numControlledBy = 0;
    const player = shared.players[shared.selfId];
    if(player !== undefined){
        player.sat.r = 49.5;
        player.speed = player.baseSpeed = 7.167;
    }
    shared.idToObs = {};
}

export default scroll;