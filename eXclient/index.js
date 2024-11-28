shared.isExClient = true;
import './style.css';

// init rendering
import './render.js';

// handle client-server communication
import './networking.js';

// game stuff
import simulate from '../client/components.js';

// keyboard input
import './input.js';

// background music
import '../client/sound.js';

// mapName to difficulty dict
import '../eXserver/maps/_metadata.js';

// shared, like window but not accessible in console
import shared from '../shared/shared.js';

// joining game
const gui = shared.gui = document.querySelector('.gui');
shared.mapPath = '';
shared.username = '';
shared.authId = -1;

shared.startGame = () => {
    gui.classList.remove('hidden');
    lastTime = performance.now();
    shared.respawnPlayer();
    run();
    console.log('game starting');
}

// gameloop
let lastTime=0, now=0;
window.frames = 0; shared.accum = 0;
shared.FRAME_TIME = 1000 / 60;
function run(){
    requestAnimationFrame(run);

    now = performance.now();
    shared.accum += now - lastTime;
    lastTime = now;

    // TODO: Get the map from another player
    if(shared.accum > 2000) shared.accum = 0;

    while(shared.accum >= 0){
        shared.accum -= shared.FRAME_TIME;
        simulate();
    }

    sendUpdatePack();
    shared.render();
}

const u12 = new Uint8Array(12);
const f12 = new Float32Array(u12.buffer);

const u8 = new Uint8Array(8);
const f8 = new Float32Array(u8.buffer);

shared.u4 = new Uint8Array(4);

let lastX=Infinity, lastY=Infinity;
let lastRadius=Infinity, lastShipAngle = Infinity;
let lastDead = false;
function sendUpdatePack(){
    const player = shared.players[shared.selfId];
    if(Math.abs(player.pos.x - lastX) > .1 || Math.abs(player.pos.y - lastY) > .1){
        u12[0] = 4;// type 4 - player x and y
        f12[1] = player.pos.x;
        f12[2] = player.pos.y;
        shared.send(u12);
    }

    if(player.grapple === true){
        u12[0] = 11;
        f12[1] = player.grappleX;
        f12[2] = player.grappleY;
        shared.send(u12);
        u12[0] = 4;
    }

    if(player.ship === true && lastShipAngle !== player.shipAngle){
        lastShipAngle = player.shipAngle;
        u8[0] = 9;
        f8[1] = player.shipAngle;
        shared.send(u8);
    }

    if(player.deathTimer === true){
        u8[0] = 13;
        f8[1] = player.deathTime;
        shared.send(u8);
    }

    if(player.dead !== lastDead){
        lastDead = player.dead;
        shared.u4[0] = 15;
        shared.u4[1] = player.dead === true ? 1 : 0;
        shared.send(shared.u4);
    }

    if(player.sat.r !== lastRadius){
        lastRadius = player.sat.r;
        u8[0] = 22;
        f8[1] = player.sat.r;
        shared.send(u8);
    }
}