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
};

window.input = {
    up: false,
    down: false,
    left: false,
    right: false,
    shift: false
};

let chatOpen = false;
window.onkeydown = handleKey;
window.onkeyup = handleKey;

function handleKey(e){
    if(window.state !== 'game') return;
    if(chatOpen){
        // TODO
    } else {
        if (e.repeat) return e.preventDefault();

        if(e.type === 'keydown'){
            if(e.code === 'KeyO'){
                window.players[window.selfId].god = !window.players[window.selfId].god;
                return e.preventDefault();
            } else if(e.code === 'KeyR' && window.players[window.selfId].dead === true){
                window.respawnPlayer();
            }
        }

        if (Controls[e.code] != undefined) {
            window.input[Controls[e.code]] = e.type === 'keydown';
            e.preventDefault();
        }
    }
}