window.mouse = {
    screen: {
        x: -1,
        y: -1
    },
    world: {
        x: -1,
        y: -1
    }
}

window.mouseX = -1;
window.mouseY = -1;
window.scrollLocked = false;
window.mouseDownFunctions = [];
window.mouseMoveFunctions = [];
window.mouseUpFunctions = [];
window.mouseOut = false;
window.pageX = -1;
window.pageY = -1;

window.dragging = false;

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

window.input = {
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

function handleKey(e){
    if(window.state !== 'game') return;
    if(chatOpen){
        if(e.type === 'keydown' && e.code === 'Enter'){
            let msg = chat.value.trim();
            if(msg === '/reset'){
                const mapName = 'hub';
                const buf = new Uint8Array(1 + mapName.length);
                buf[0] = 2; // type 2 - change map
                encodeAtPosition(mapName, buf, 1);
                send(buf);
            }
            else if(msg.slice(0,6) === '/scale'){
                const num = parseFloat(msg.slice(7));
                changeCameraScale(num);
            }
            else if(msg.length !== 0){
                msg = window.username + ': ' + msg;
                const buf = new Uint8Array(msg.length + 2);
                buf[0] = 7;// type 0 - set username and join game
                // ['normal', 'system', 'dev', 'guest']
                if(window.players[window.selfId].dev === true) buf[1] = 2;
                else if(window.players[window.selfId].guest === true) buf[1] = 3; 
                encodeAtPosition(msg, buf, 2);
                send(buf);
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
            if(e.code === 'KeyO' && window.players[window.selfId].dev === true){
                window.players[window.selfId].god = !window.players[window.selfId].god;
                const buf = new Uint8Array(2);
                buf[0] = 8;
                buf[1] = window.players[window.selfId].god;
                send(buf);
                return e.preventDefault();
            } else if(e.code === 'KeyR' && window.players[window.selfId].dead === true){
                window.respawnPlayer();
            } else if(e.code === 'Enter'){
                chatOpen = true;
                chatDiv.classList.remove('hidden');
                chat.focus();
            } else if (e.code === 'KeyZ') {
                if (!zenMode) {
                    chat.blur();
                    if (!visChatDiv.classList.contains('hidden')) {
                        visChatDiv.classList.add('hidden');
                    }
                    // if (!ref.lb.classList.contains('hide')) {
                    //     ref.lb.classList.add('hide');
                    // }
                } else {
                    if (visChatDiv.classList.contains('hidden')) {
                        visChatDiv.classList.remove('hidden');
                        visChatDiv.scrollTop = visChatDiv.scrollHeight;
                    }
                    // if (ref.lb.classList.contains('hide')) {
                    //     ref.lb.classList.remove('hide');
                    // }
                }
                zenMode = !zenMode;
            } else if (e.code === 'KeyU'){
                window.renderDebug = !window.renderDebug;
            }
        }

        if (Controls[e.code] != undefined) {
            window.input[Controls[e.code]] = e.type === 'keydown';
            e.preventDefault();
        }
    }
}