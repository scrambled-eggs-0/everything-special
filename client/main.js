// 1 file project? Why not
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// run code
// import gameData from './code.js';
// const {tickFunctions, entities} = gameData;
window.scrollAnimation = 1;
window.tickFunctions = [];
window.entities = [];
window.background = {
    drawImg: false,
    color: 'white',
    img: undefined,
    // TODO: preserve dimensions instead of drawing it stretched... or maybe a crop menu?
    // width: canvas.width,
    // height: canvas.height,
    // offsetX: 0,
    // offsetY: 0
};
window.defaultBackground = {
    drawImg: false,
    color: 'white',
    img: undefined,
    // TODO: preserve dimensions instead of drawing it stretched... or maybe a crop menu?
    // width: canvas.width,
    // height: canvas.height,
    // offsetX: 0,
    // offsetY: 0
};
window.lastBackground = {
    drawImg: false,
    color: 'white',
    img: undefined,
    // TODO: preserve dimensions instead of drawing it stretched... or maybe a crop menu?
    // width: canvas.width,
    // height: canvas.height,
    // offsetX: 0,
    // offsetY: 0
};

import './gamefns.js';
import './input.js';

import Utils from './utils.js';
const { isEditor } = Utils;

let cachedFontSize = -1;

// const TAU = Math.PI * 2;
window.render = () => {
    if(window.scrollAnimation < 1){
        window.scrollAnimation += (Date.now() - firstTime) / frames * .00384;// at 120fps this is +0.032/s;
        if(window.scrollAnimation > 1) window.scrollAnimation = 1;
        ctx.translate(0, -window.scrollAnimation * canvas.height);// not the same as the exit transform because we also want to translate (-canvas.height) in addition to (1 - window.scrollAnimation) * canvas.height

        // ctx.drawImage(window.lastGameImg, 0, -canvas.height);

        _render(window.lastEntities, window.lastBackground);
        ctx.translate(0, canvas.height);
    }

    _render(window.entities, window.background);

    if(window.scrollAnimation < 1){
        ctx.translate(0, (window.scrollAnimation-1) * canvas.height);
    }
}

function _render(es, bg){
    // can't if-else this bc what if the image isnt loaded
    ctx.fillStyle = bg.color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(bg.drawImg === true){
        ctx.drawImage(bg.img, 0, 0, canvas.width, canvas.height);
    }
    

    for(let i = 0; i < es.length; i++){
        if(es[i].drawImg === true){
            ctx.drawImage(es[i].img, es[i].x - es[i].r, es[i].y - es[i].r, es[i].r*2, es[i].r*2);
            continue;
        }

        // if(es[i].emoji !== undefined){
            if(cachedFontSize !== es[i].r * 2){
                ctx.font = `${es[i].r*2}px "Times New Roman"`;
                cachedFontSize = es[i].r * 2;
            }
            ctx.fillText(es[i].emoji, es[i].x, es[i].y);
        //     continue;
        // }

        // ctx.fillStyle = 'black';
        // ctx.beginPath();
        // ctx.arc(es[i].x, es[i].y, es[i].r, 0, TAU);
        // ctx.fill();
        // ctx.closePath();
    }
}

function tick(){
    for(let i = 0; i < tickFunctions.length; i++){
        for(let j = 0; j < tickFunctions[i].length; j++){
            tickFunctions[i][j]();
        }
    }
}

// gameloop
let lastTime, now, firstTime, accum, dt, frames;
lastTime = now = firstTime = Date.now();
accum = dt = frames = 0;
const FRAME_TIME = 1000 / 60;
(function run(){
    now = Date.now();
    dt = now - lastTime;
    accum += dt;
    lastTime = now;
    
    // if we're not ahead
    if(accum > 0){
        // simulate the frame as usual
        frames++;
        accum -= FRAME_TIME;
        tick();
    } else {
        // we don't want to re-render, we have no interpolation! So just wait until next frame ig
        requestAnimationFrame(run);
        return;
    }

    // if we're behind
    if(accum > FRAME_TIME){
        // if we're too behind then give up
        if(accum > 2000) accum = 0;

        // otherwise simulate an extra catch-up tick
        accum -= FRAME_TIME;
        tick();
    }

    render();

    requestAnimationFrame(run);
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
} else {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    window.canvasDimensions = canvas.getBoundingClientRect();
    setInterval(() => {
        window.canvasDimensions = canvas.getBoundingClientRect();
    }, 100)
}

import './sound.js';