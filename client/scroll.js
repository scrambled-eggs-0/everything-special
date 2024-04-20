import Utils from './utils.js';
const { until, isEditor } = Utils;

let nextCode;
const nextCodeLoaded = () => { return nextCode !== undefined; };
const isServer = typeof location === 'undefined';
let reqUrl = isServer === true ? '' : `${location.origin}/game`;
let loadingCurrent = false;
let nextFileName = '';
window.levelFileName = '';

// never get code from server in editor
if(isEditor === true || isServer === true){
    getNextCode = async () => {
        await until(() => { return false; })
    };
    scroll = () => {};
} else if(location.href.includes('standalone') === true){
    window.standalone = true;
    const split = location.href.split('/');
    reqUrl += '/' + split[split.length - 1];
    scroll = () => {};
} else if(localStorage.getItem('tutorialCompleted') === null) {
    let getNextCodeLoaded = false;
    getNextCode = async () => {
        await until(() => {return getNextCodeLoaded !== false});
        return getNextCode();
    };
    window.tutorial = true;
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

    if(window.standalone === true){
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
async function scroll(){
    // don't allow scrolling if we're loading the current code
    // it'll look the same to the user anyways
    if(loadingCurrent === true) return;
    
    // get old canvas for use as image
    window.scrollAnimation = 1;
    window.render();
    // window.lastGameImg = new Image();
    // window.lastGameImg.src = canvas.toDataURL();
    window.lastObstacles = [];
    for(let i = 0; i < obstacles.length; i++){
        window.lastObstacles.push(obstacles[i]);
    }
    for(let key in window.colors){
        window.lastColors[key] = window.colors[key];
        window.colors[key] = window.defaultColors[key];
    }
    window.lastPlayerData = [player.pos.x, player.pos.y];

    // if we already have the next code
    if(nextCode !== undefined){
        // append new script to run second game
        replaceScript();

        // animation timer
        window.scrollAnimation = 0;

        // fetch new next code
        nextCode = await getNextCode();
    } else {
        // loading current, nextcode
        loadingCurrent = true;

        // load blank screen for now
        removeScript();

        // animation timer
        window.scrollAnimation = 0;

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

window.won = false;
async function getNextCode(){
    const response = await fetch(reqUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);
    nextFileName = response.headers.get('Fn');
    return response.text();
}

// replaces code running with nextCode
async function replaceScript(){
    removeScript();

    window.resetGame();
    stopMusic();

    const scriptElement = document.createElement('script');
    scriptElement.id = "gameScript";
    scriptElement.text = nextCode;
    document.body.appendChild(scriptElement);

    nextCode = undefined;
    window.levelFileName = nextFileName;
}

window.removeScript = function removeScript(){
    const last = document.getElementById("gameScript");
    if(last !== null) last.remove();
    window.resetGame();
    stopMusic();
}

window.resetGame = () => {
    window.obstacles.length = window.mouseUpFunctions.length = window.mouseDownFunctions.length = window.mouseMoveFunctions.length = 0;
    if(window.isEditor !== true) {window.respawnPlayer(); /*player.renderRadius = player.sat.r;*/ }
    for(let key in window.defaultColors) { window.colors[key] = window.defaultColors[key]; }
    window.mouseDownFunctions.push(() => {
        if(player.dead === true) window.respawnPlayer();
    })
    if(window.addSideMenuEvtListeners !== undefined) window.addSideMenuEvtListeners(nextFileName);
    window.spawnPosition.x = 100;
    window.spawnPosition.y = 1500;
    player.sat.r = 49.5;
    player.speed = player.baseSpeed = 4;
}

export default scroll;