import scroll from './scroll.js';
import Utils from './utils.js';
const { SCROLL_PARAMS } = Utils;

// scrolling
let dragging = false;
let totalDist = 0;
let dragStartTime;

// input
const canvas = document.getElementById('canvas');
window.mouseX = -1;
window.mouseY = -1;

window.onmousedown = () => {
    // scrolling
    dragging = true;
    totalDist = 0;
    dragStartTime = Date.now();
}

window.onmousemove = (e) => {
    // input
    window.mouseX = Math.min(1, Math.max(0, (e.pageX - window.canvasDimensions.x) / window.canvasDimensions.width)) * canvas.width;
    window.mouseY = Math.min(1, Math.max(0, (e.pageY - window.canvasDimensions.y) / window.canvasDimensions.height)) * canvas.height;

    // scrolling
    if(dragging === false) return;

    totalDist -= e.movementY * window.innerHeight;

    if(totalDist > SCROLL_PARAMS.sensitivity){
        const scrollTime = (Date.now() - dragStartTime);
        const averageSpeed = totalDist / scrollTime;
        if(averageSpeed > SCROLL_PARAMS.minAvgSpeed && scrollTime < SCROLL_PARAMS.maxScrollTime){
            dragging = false;
            scroll();
        }
    }
}

window.onmouseup = () => {
    // scrolling
    dragging = false;
}

window.onmouseout = () => {
    // scrolling
    dragging = false;
}

// mobile
window.ontouchstart = (e) => {
    if(dragging === true) return; // ignore >1 touches
    window.onmousedown();
    lastTouchY = (e.touches || e.originalEvent.touches)[0].pageY;
}

let lastTouchY = 0;
window.ontouchmove = (e) => {
    const touch = (e.touches || e.originalEvent.touches)[0];
    window.onmousemove({pageX: touch.pageX, pageY: touch.pageY, movementY: touch.pageY - lastTouchY});
    lastTouchY = touch.pageY;
}

window.ontouchend = (e) => {
    if(dragging === false) return;// ignore >1 touches
    window.onmouseup();
    lastTouchY = (e.touches || e.originalEvent.touches)[0].pageY;
}

window.ontouchcancel = (e) => {
    window.ontouchend();
}