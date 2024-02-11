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
import './scroll.js';

import Utils from './utils.js';
const { isEditor } = Utils;

const TAU = Math.PI * 2;
window.render = () => {
    if(window.scrollAnimation < 1){
        window.scrollAnimation += 0.032;// TODO: dt
        if(window.scrollAnimation > 1) window.scrollAnimation = 1;
        ctx.translate(0, (1-window.scrollAnimation) * canvas.height);

        ctx.drawImage(window.lastGameImg, 0, -canvas.height);
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < entities.length; i++){
        // i'll just render them as circles before we get images working
        // (TODO: image support)
        if(entities[i].drawImg === true){
            ctx.drawImage(entities[i].img, entities[i].x - entities[i].r, entities[i].y - entities[i].r, entities[i].r*2, entities[i].r*2);
            continue;
        }

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(entities[i].x, entities[i].y, entities[i].r, 0, TAU);
        ctx.fill();
        ctx.closePath();
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
// TODO: convert this to be fixed if significantly greater or less than 60fps
(function run(){
    tick();
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
    }
    window.addEventListener("resize", resize);
    resize();
}