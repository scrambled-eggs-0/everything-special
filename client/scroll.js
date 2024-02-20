import Utils from './utils.js';
const { until, isEditor } = Utils;

let nextCode;
const nextCodeLoaded = () => { return nextCode !== undefined; };
const reqUrl = `${location.origin}/game`;
let loadingCurrent = false;

// never get code from server in editor
if(isEditor === true){
    getNextCode = async () => {
        await until(() => { return false; })
    };
    scroll = () => {};
}

// get first code
getNextCode().then(async (code) => {
    // load first request
    nextCode = code;
    replaceScript();

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
    window.lastEntities = [];
    for(let i = 0; i < entities.length; i++){
        window.lastEntities.push(entities[i]);
    }
    for(let key in window.background){
        window.lastBackground[key] = window.background[key];
        window.background[key] = window.defaultBackground[key];
    }

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

async function getNextCode(){
    const response = await fetch(reqUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);
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
}

window.removeScript = function removeScript(){
    const last = document.getElementById("gameScript");
    if(last !== null) last.remove();
    window.resetGame();
    stopMusic();
}

window.resetGame = () => {
    window.entities.length = window.tickFunctions.length = window.mouseUpFunctions.length = window.mouseDownFunctions.length = 0;
    for(let key in defaultBackground) { window.background[key] = defaultBackground[key]; }
}  

export default scroll;