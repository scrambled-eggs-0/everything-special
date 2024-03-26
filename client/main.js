// 1 file project? Why not
const canvas = window.canvas = document.getElementById('canvas');
const ctx = window.ctx = canvas.getContext('2d');

import './input.js';
import simulate from './components.js';

// run code
// import gameData from './code.js';
// const {tickFunctions, entities} = gameData;

window.scrollAnimation = 1;

window.defaultColors = {
    tile: '#0d0d0d',// the stroke and outside of arena
    background: '#383838',// the fillcolor
}

window.colors = {
    tile: window.defaultColors.tile,
    background: window.defaultColors.background,
}

window.lastColors = {
    tile: window.defaultColors.tile,
    background: window.defaultColors.background,
}
window.lastPlayerData = [0, 0];
let renderUi = () => {};

import Utils from './utils.js';
const { isEditor } = Utils;

// let cachedFontSize = -1;
// const TAU = Math.PI * 2;
window.render = () => {
    if(window.scrollAnimation < 1){
        window.scrollAnimation += (Date.now() - firstTime - offtabTime) / window.frames * .00384;// at 120fps this is +0.032/s;
        if(window.scrollAnimation > 1) window.scrollAnimation = 1;
        ctx.translate(0, -window.scrollAnimation * canvas.height);// not the same as the exit transform because we also want to translate (-canvas.height) in addition to (1 - window.scrollAnimation) * canvas.height

        _render(window.lastObstacles, window.lastColors, window.lastPlayerData);
        ctx.translate(0, canvas.height);
    }

    _render(window.obstacles, window.colors, undefined);

    if(window.scrollAnimation < 1){
        ctx.translate(0, (window.scrollAnimation-1) * canvas.height);
    }
}

window.tileSize = 100; // 50
let opaqIndex, len, lastPlayerX, lastPlayerY, lastPlayerRadius, j = false;
function _render(os, cols, playerData=undefined){
    ctx.fillStyle = cols.background;
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // render tiles
    ctx.strokeStyle = cols.tile;
    ctx.lineWidth = window.isEditor === true ? 4 : 2;

    for (let x = 0; x < canvas.width + ctx.lineWidth + window.tileSize; x += window.tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        ctx.closePath();
    }

    for (let y = 0; y < canvas.height + ctx.lineWidth + window.tileSize; y += window.tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
        ctx.closePath();
    }

    // render obstacles
    for(let i = 0; i < os.length; i++){
        len = os[i].effect.length;
        if(len === 1){
            j = 0;
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 2;
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();
            ctx.globalAlpha = 1;
        } else {
            // so we want to fade between the effect renders. We render a previous one with 1 opacity and then raise the next one from 0-1 opacity, until the next one becomes the previous and the cycle repeats
            os[i].renderEffectTimer += 1/128;
            if(os[i].renderEffectTimer >= len) os[i].renderEffectTimer -= len;

            opaqIndex = Math.floor(os[i].renderEffectTimer);
            /*let fullIndex*/j = opaqIndex - 1;
            if(/*fullIndex*/j === -1) /*fullIndex*/j = len-1;
            // j = fullIndex;

            // render full index
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 2;
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            ctx.globalAlpha = 1;
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();

            // render opaq index
            j = opaqIndex;
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 2;
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            ctx.globalAlpha = os[i].renderEffectTimer - opaqIndex;
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    }
    ctx.globalAlpha = 1;

    // render player
    ctx.fillStyle = player.dead === true ? 'red' : 'black';

    // overriding data for player rendering specifics
    if(playerData !== undefined){
        lastPlayerX = player.pos.x;
        lastPlayerY = player.pos.y;

        player.pos.x = playerData[0];
        player.pos.y = playerData[1];
    } else {
        lastPlayerRadius = player.sat.r;
        player.sat.r = player.renderRadius;
    }
    
    
    ctx.beginPath();
    player.renderShape(player);
    ctx.fill();
    ctx.closePath();

    if(playerData !== undefined){
        player.pos.x = lastPlayerX;
        player.pos.y = lastPlayerY;
    } else {
        player.sat.r = lastPlayerRadius;
    }

    // if(player.dead === true){
    //     ctx.fillStyle = 'white';
    //     ctx.fillText('Tap to respawn', canvas.width / 2, canvas.height - 85);
    // }

    renderUi(canvas, ctx, playerData !== undefined);
}

// gameloop
let lastTime, now, firstTime, accum, dt, offtabTime;
lastTime = now = firstTime = Date.now();
accum = dt = window.frames = offtabTime = 0;
window.time = 0;
const FRAME_TIME = 1000 / 60;
(function run(){
    now = Date.now();
    dt = now - lastTime;
    accum += dt;
    window.time += dt;
    lastTime = now;

    if(dt > 2000) offtabTime += dt;
    
    // if we're not ahead
    if(accum > 0){
        // simulate the frame as usual
        window.frames++;
        accum -= FRAME_TIME;
        simulate();
    } else {
        // we don't want to re-render, we have no interpolation! So just wait until next frame ig
        requestAnimationFrame(run);
        return;
    }

    requestAnimationFrame(run);

    // if we're behind
    if(accum > FRAME_TIME){
        // if we're too far behind then give up
        if(accum > 2000) accum = 0;

        // otherwise simulate an extra catch-up tick
        accum -= FRAME_TIME;
        simulate();
    }

    window.render();
})();

if(isEditor !== true){
    // resizing canvas
    function resize(){
        let scale = window.innerWidth / canvas.width;
        if(window.innerHeight / canvas.height < window.innerWidth / canvas.width){
            scale = window.innerHeight / canvas.height;
        }

        canvas.style.transform = `scale(${scale})`;
        canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";
        canvas.style.top =  (window.innerHeight - canvas.height) / 2 +"px";

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        window.canvasDimensions = canvas.getBoundingClientRect();
    }
    window.addEventListener("resize", resize);
    resize();

    (async () => {
        renderUi = await import('./sideMenu.js');
        renderUi = renderUi.default;
    })();
} else {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    window.canvasDimensions = canvas.getBoundingClientRect();
    setInterval(() => {
        window.canvasDimensions = canvas.getBoundingClientRect();
    }, 1000)

    window.updateSettingsCog = () => {};
    window.addSideMenuEvtListeners = () => {};
}

import './sound.js';