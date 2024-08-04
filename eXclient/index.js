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

// used for encoding messages sent to the server
import Utils from '../client/utils.js';
const {encodeAtPosition} = Utils;

// joining game
const menu = document.querySelector('.menu');
const form = document.querySelector('.playForm');
const usernameInput = document.querySelector('.nameInput');
window.state = 'menu';
form.onsubmit = (e) => {
    window.username = usernameInput.value;

    const buf = new Uint8Array(window.username.length + 1);
    buf[0] = 0;// type 0 - set username and join game
    encodeAtPosition(window.username, buf, 1);
    window.send(buf);
    return e.preventDefault();
}

window.startGame = () => {
    window.state = 'game';
    usernameInput.value = '';
    menu.classList.add('hidden');
    lastTime = now = Date.now();
    window.respawnPlayer();
    run();
}

// gameloop
let lastTime, now, accum, dt, offtabTime;
accum = dt = window.frames = offtabTime = 0;
window.time = 0;
const FRAME_TIME = 1000 / 60;
function run(){
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

    sendUpdatePack();

    window.render();
}

const buf = new ArrayBuffer(12);// 12 bytes = 3 floats. First pos occupied by uint type, second two are position floats
const uview = new Uint8Array(buf);
uview[0] = 4;// type 4 - player x and y
const fview = new Float32Array(buf); 
function sendUpdatePack(){
    const player = window.players[window.selfId];
    fview[1] = player.pos.x;
    fview[2] = player.pos.y;

    send(buf);
}