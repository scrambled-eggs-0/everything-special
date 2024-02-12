// 1 file project? Why not
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// run code
// import gameData from './code.js';
// const {tickFunctions, entities} = gameData;
window.scrollAnimation = 1;
window.tickFunctions = [];
window.entities = [];

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
        ctx.translate(0, (1-window.scrollAnimation) * canvas.height);

        ctx.drawImage(window.lastGameImg, 0, -canvas.height);
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < entities.length; i++){
        if(entities[i].drawImg === true){
            ctx.drawImage(entities[i].img, entities[i].x - entities[i].r, entities[i].y - entities[i].r, entities[i].r*2, entities[i].r*2);
            continue;
        }

        // if(entities[i].emoji !== undefined){
            if(cachedFontSize !== entities[i].r * 2){
                ctx.font = `${entities[i].r*2}px "Times New Roman"`;
                cachedFontSize = entities[i].r * 2;
            }
            ctx.fillText(entities[i].emoji, entities[i].x, entities[i].y);
        //     continue;
        // }

        // ctx.fillStyle = 'black';
        // ctx.beginPath();
        // ctx.arc(entities[i].x, entities[i].y, entities[i].r, 0, TAU);
        // ctx.fill();
        // ctx.closePath();
    }

    if(window.scrollAnimation < 1){
        ctx.translate(0, (window.scrollAnimation-1) * canvas.height);
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