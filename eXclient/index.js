window.isExClient = true;
import './style.css';

// init rendering
import render from './render.js';

// handle client-server communication
import './networking.js';

// game stuff
import simulate from '../client/components.js';

// keyboard input
import './input.js';

// background music
import '../client/sound.js';

// used for encoding messages sent to the server
import Utils from '../client/utils.js';
const {encodeAtPosition} = Utils;

// mapName to difficulty dict
import '../eXserver/maps/_difficulty.js';

// joining game
const gui = window.gui = document.querySelector('.gui');
window.state = 'menu';
window.username = ''

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');
if(username === null || password === null){
    const buf = new Uint8Array(1);
    buf[0] = 11;
    window.send(buf);
    window.state = 'game';
    window.onkeydown({code: 'KeyZ', repeat: false, type: 'keydown'});
    window.state = 'menu';
} else {
    const buf = new Uint8Array(1 + 64 + username.length);
    buf[0] = 0;// type 0 - set username and join game
    encodeAtPosition(password, buf, 1);
    encodeAtPosition(username, buf, 1 + 64);
    window.send(buf);
}

window.startGame = () => {
    window.state = 'game';
    gui.classList.remove('hidden');
    lastTime = now = performance.now();
    window.respawnPlayer();
    run();
    console.log('game starting');
}

// gameloop
let lastTime, accum, offtabTime;
accum = window.frames = offtabTime = 0;
window.time = window.now = 0;
window.dt = 1;
// const FRAME_TIME = 1000 / 60;
function run(){
    requestAnimationFrame(run);

    now = performance.now();
    dt = now - lastTime;
    if(dt === 0) dt = 0.1;
    else if(dt > 2000) dt = 1;// TODO: get map from other players if other players are in the map
    accum += dt;
    window.time += dt;
    lastTime = now;

    simulate();

    // if(dt > 2000) offtabTime += dt;
    
    // // if we're not ahead
    // if(accum > 0){
    //     // simulate the frame as usual
    //     window.frames++;
    //     accum -= FRAME_TIME;
    //     simulate();
    // } else {
    //     // we don't want to re-render, we have no interpolation! So just wait until next frame ig
    //     requestAnimationFrame(run);
    //     return;
    // }

    // requestAnimationFrame(run);

    // // if we're behind
    // if(accum > FRAME_TIME){
    //     // if we're too far behind then give up
    //     if(accum > 2000) accum = 0;

    //     // otherwise simulate an extra catch-up tick
    //     accum -= FRAME_TIME;
    //     simulate();
    // }

    sendUpdatePack();

    window.render();
}

const buf = new ArrayBuffer(12);// 12 bytes = 3 floats. First pos occupied by uint type, second two are position floats
const uview = new Uint8Array(buf);
uview[0] = 4;// type 4 - player x and y
const fview = new Float32Array(buf);

const buf2 = new ArrayBuffer(8);
const u2 = new Uint8Array(buf);
const f2 = new Float32Array(buf);

let lastShipAngle = Infinity;
let lastDead = false;
function sendUpdatePack(){
    const player = window.players[window.selfId];
    fview[1] = player.pos.x;
    fview[2] = player.pos.y;

    send(buf);

    if(player.ship === true && lastShipAngle !== player.shipAngle){
        lastShipAngle = player.shipAngle;
        uview[0] = 10;
        fview[1] = player.shipAngle;
        fview[2] = 0;
        send(buf);
        uview[0] = 4;
    }

    if(player.grapple === true){
        uview[0] = 12;
        fview[1] = player.grappleX;
        fview[2] = player.grappleY;
        send(buf);
        uview[0] = 4;
    }

    if(player.deathTimer === true){
        u2[0] = 13;
        f2[1] = player.deathTime;
        send(buf);
    }

    if(player.dead !== lastDead){
        lastDead = player.dead;
        u2[0] = 14;
        // float is wasteful but we want to give server space to put id
        f2[1] = player.dead === true ? 1 : 0;
        send(buf);
    }
}