import shared from '../shared/shared.js';
shared.mouse = {
    screen: {
        x: -1,
        y: -1
    },
    world: {
        x: -1,
        y: -1
    }
}

shared.mouseX = -1;
shared.mouseY = -1;
shared.scrollLocked = false;
shared.mouseDownFunctions = [];
shared.mouseMoveFunctions = [];
shared.mouseUpFunctions = [];
shared.mouseOut = false;
shared.pageX = -1;
shared.pageY = -1;

shared.dragging = false;

window.onmousedown = (e) => {}

window.onmousemove = (e) => {}

window.onmouseup = () => {}

window.oncontextmenu = (e) => { return e.preventDefault(); };

const Controls = {
    KeyW: 'up',
    KeyS: 'down',
    KeyA: 'left',
    KeyD: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ShiftLeft: 'shift',
    ShiftRight: 'shift',
    KeyC: 'action1',
    KeyJ: 'action1',
    KeyY: 'action1'
};

shared.input = {
    up: false,
    down: false,
    left: false,
    right: false,
    shift: false,
    action1: false,// grapple
};

let chatOpen = false, zenMode = false;
window.onkeydown = handleKey;
window.onkeyup = handleKey;

import Utils from '../client/utils.js';
const {encodeAtPosition} = Utils;

const chat = document.querySelector('.chat');
const chatDiv = document.querySelector('.chatDiv');
const visChatDiv = document.querySelector('.chat-div');
const lbDiv = document.querySelector('.leaderboard-div');

function handleKey(e){
    if(chatOpen === true){
        if(e.type === 'keydown' && e.code === 'Enter'){
            let msg = chat.value.trim();
            if(msg === '/reset'){
                shared.changeMap('/maps/hub');
            }
            else if(shared.isProd === false && msg.slice(0,6) === '/tpmap'){
                shared.changeMap(`/maps/` + msg.slice(7).toLowerCase());
            }
            else if(shared.isProd === false && msg.slice(0,6) === '/scale'){
                const num = parseFloat(msg.slice(7));
                shared.changeCameraScale(num);
            }
            else if(shared.isProd === false && msg.slice(0,4) === '/map'){
                shared.initImportMap(msg.slice(5));
            }
            // else if(shared.zones !== undefined && msg.slice(0,7).toLowerCase() === '/tpzone'){
            //     const num = parseInt(msg.slice(8));
            //     for(let i = 0; i < shared.zones.length; i++){
            //         if(shared.zones[i].zone === num){
            //             shared.players[shared.selfId].pos.x = shared.zones[i].x;
            //             shared.players[shared.selfId].pos.y = shared.zones[i].y;
            //             break;
            //         }
            //     }
            // }
            else if(msg.slice(0,5) === '/mute' && (shared.username === 'trit' || shared.username === 'Serum0017')){
                const user = msg.slice(6);
                const buf = new Uint8Array(user.length + 1);
                buf[0] = 5;
                encodeAtPosition(user, buf, 1);
                shared.send(buf);
            }
            else if(msg.length !== 0){
                msg = shared.username + ': ' + msg;
                const buf = new Uint8Array(msg.length + 2);
                buf[0] = 7;// type 0 - set username and join game
                // ['normal', 'system', 'dev', 'guest']
                if(shared.players[shared.selfId].dev === true) buf[1] = 2;
                else if(shared.players[shared.selfId].guest === true) buf[1] = 3; 
                encodeAtPosition(msg, buf, 2);
                shared.send(buf);
            }
            chat.value = '';
            chat.blur();
            chatDiv.classList.add('hidden');
            chatOpen = false;
        }
        // TODO
    } else {
        if (e.repeat) return e.preventDefault();

        if(e.type === 'keydown'){
            if(e.code === 'KeyO' && shared.isProd === false && shared.players[shared.selfId].dev === true){
                shared.players[shared.selfId].god = !shared.players[shared.selfId].god;
                const buf = new Uint8Array(2);
                buf[0] = 8;
                buf[1] = shared.players[shared.selfId].god;
                shared.send(buf);
                return e.preventDefault();
            } else if(e.code === 'KeyR' && shared.players[shared.selfId].dead === true){
                shared.respawnPlayer();
            } else if(e.code === 'Enter'){
                chatOpen = true;
                chatDiv.classList.remove('hidden');
                chat.focus();
            } else if (e.code === 'KeyZ') {
                if (!zenMode) {
                    chat.blur();
                    if (!visChatDiv.classList.contains('hideChat')) {
                        visChatDiv.classList.add('hideChat');
                    }
                    if (!lbDiv.classList.contains('hideLB')) {
                        lbDiv.classList.add('hideLB');
                    }
                } else {
                    if (visChatDiv.classList.contains('hideChat')) {
                        visChatDiv.classList.remove('hideChat');
                        visChatDiv.scrollTop = visChatDiv.scrollHeight;
                    }
                    if (lbDiv.classList.contains('hideLB')) {
                        lbDiv.classList.remove('hideLB');
                    }
                }
                zenMode = !zenMode;
            } else if (e.code === 'KeyU' && shared.isProd === false){
                shared.renderDebug = !shared.renderDebug;
            }
        }

        if (Controls[e.code] != undefined) {
            shared.input[Controls[e.code]] = e.type === 'keydown';
            e.preventDefault();
        }
    }
}

let importMapFn;
shared.initImportMap = async (str) => {
    if(importMapFn === undefined) importMapFn = (await import('./extras/importMap.js')).default;
    importMapFn(str);
}

shared.touchMode = false;
shared.touchAngle = -1;
window.ontouchstart = () => {
    shared.touchMode = true;
}
window.ontouchmove = (e) => {
    const t = e.changedTouches[0];
    if(t === undefined) return;

    if(t.pageX < window.innerWidth / 2){
        shared.input.left = true;
        shared.input.right = false;
    } else {
        shared.input.left = false;
        shared.input.right = true;
    }

    if(t.pageY < window.innerHeight / 2){
        shared.input.up = true;
        shared.input.down = false;
    } else {
        shared.input.up = false;
        shared.input.down = true;
    }
    shared.touchAngle = Math.atan2(t.pageY - window.innerHeight / 2, t.pageX - window.innerWidth/2);
}
window.ontouchend = () => {
    shared.touchMode = false;
}