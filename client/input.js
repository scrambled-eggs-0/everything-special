import shared from '../shared/shared.js';
import scroll from './scroll.js';
import Utils from './utils.js';
const { SCROLL_PARAMS } = Utils;

// scrolling
shared.dragging = false;
let totalDist = 0;
let dragStartTime;

// input
const canvas = document.getElementById('canvas');
shared.mouseX = -1;
shared.mouseY = -1;
shared.scrollLocked = false;
shared.mouseDownFunctions = [];
shared.mouseMoveFunctions = [];
shared.mouseUpFunctions = [];
shared.mouseOut = false;
shared.pageX = -1;
shared.pageY = -1;

shared.onmousedown = (e) => {
    // scrolling
    dragging = true;
    totalDist = 0;
    dragStartTime = Date.now();
    
    for(let i = 0; i < shared.mouseDownFunctions.length; i++){
        shared.mouseDownFunctions[i]();
    }
}

shared.onmousemove = (e) => {
    // input
    shared.mouseX = ((e.pageX - shared.canvasDimensions.x) / shared.canvasDimensions.width) * canvas.width;//Math.min(1, Math.max(0, ) ;
    shared.mouseY = ((e.pageY - shared.canvasDimensions.y) / shared.canvasDimensions.height) * canvas.height;

    shared.pageX = e.pageX;
    shared.pageY = e.pageY;

    shared.mouseOut = false;

    if(shared.mouseX < 0){
        shared.mouseX = 0;
        shared.mouseOut = true;
    } else if(shared.mouseX > canvas.width){
        shared.mouseX = canvas.width;
        shared.mouseOut = true;
    }

    if(shared.mouseY < 0){
        shared.mouseY = 0;
        shared.mouseOut = true;
    } else if(shared.mouseY > canvas.height){
        shared.mouseY = canvas.height;
        shared.mouseOut = true;
    }

    for(let i = 0; i < shared.mouseMoveFunctions.length; i++){
        shared.mouseMoveFunctions[i]();
    }

    // scrolling
    if(dragging === false) return;

    totalDist -= e.movementY * window.innerHeight;

    if(Math.abs(totalDist) > SCROLL_PARAMS.sensitivity && (shared.mouseX < SCROLL_PARAMS.edgeMargin || shared.mouseX > canvas.width - SCROLL_PARAMS.edgeMargin) && shared.scrollLocked !== true){
        const scrollTime = (Date.now() - dragStartTime);
        const averageSpeed = totalDist / scrollTime;
        if(scrollTime < SCROLL_PARAMS.maxScrollTime){
            if(averageSpeed > SCROLL_PARAMS.minAvgSpeed){
                dragging = false;
                scroll(false);
            } else if(averageSpeed < -SCROLL_PARAMS.minAvgSpeed){
                dragging = false;
                scroll(true);
            }
        }
    }
}

shared.onmouseup = () => {
    // scrolling
    dragging = false;

    for(let i = 0; i < shared.mouseUpFunctions.length; i++){
        shared.mouseUpFunctions[i]();
    }
}

// shared.onmouseout = () => {
//     // scrolling
//     dragging = false;

//     for(let i = 0; i < shared.mouseUpFunctions.length; i++){
//         shared.mouseUpFunctions[i]();
//     }
// }

// mobile
document.body.ontouchstart = (e) => {
    const touch = (e.changedTouches || e.originalEvent.touches)[0];
    shared.onmousemove({pageX: touch.pageX, pageY: touch.pageY, movementY: touch.pageY - lastTouchY});
    shared.onmousedown();
    lastTouchY = touch.pageY;
    return absorbEvent_(e);
}

let lastTouchY = 0;
document.body.ontouchmove = (e) => {
    const touch = (e.changedTouches || e.originalEvent.touches)[0];
    shared.onmousemove({pageX: touch.pageX, pageY: touch.pageY, movementY: touch.pageY - lastTouchY});
    lastTouchY = touch.pageY;
    return absorbEvent_(e);
}

document.body.ontouchend = (e) => {
    shared.onmouseup();
    return absorbEvent_(e);
}

document.body.ontouchcancel = (e) => {
    document.body.ontouchend();
    return absorbEvent_(e);
}

shared.oncontextmenu = (e) => { return e.preventDefault(); };

function absorbEvent_(e) {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}

window.addEventListener('keydown', e => {
    if (e.repeat === true) return;
    if (shared.scrollLocked !== true &&
        (e.code === "ArrowDown" || e.code === "ArrowUp") &&
        shared.scrollAnimation === 1) {
        scroll(e.code === "ArrowUp");
    }
})