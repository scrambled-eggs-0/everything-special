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
let lastTime, accum, now;
lastTime = accum = now = 0;
window.frames = 0;
const FRAME_TIME = 1000 / 60;
function run(){
    requestAnimationFrame(run);

    now = performance.now();
    accum += now - lastTime;
    lastTime = now;

    // TODO: Get the map from another player
    if(accum > 2000) accum = 0;

    while(accum >= 0){
        accum -= FRAME_TIME;
        simulate();
    }

    sendUpdatePack();
    shared.render();
}

const u12 = new Uint8Array(12);
u12[0] = 4;// type 4 - player x and y
const f12 = new Float32Array(u12.buffer);

const u8 = new Uint8Array(8);
const f8 = new Float32Array(u8.buffer);

shared.u4 = new Uint8Array(4);

let lastShipAngle = Infinity;
let lastDead = false;
function sendUpdatePack(){
    const player = shared.players[shared.selfId];
    f12[1] = player.pos.x;
    f12[2] = player.pos.y;
    shared.send(u12);

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
}