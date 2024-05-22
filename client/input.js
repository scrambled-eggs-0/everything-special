import scroll from './scroll.js';
import Utils from './utils.js';
const { SCROLL_PARAMS } = Utils;

// scrolling
window.dragging = false;
let totalDist = 0;
let dragStartTime;

// input
const canvas = document.getElementById('canvas');
window.mouseX = -1;
window.mouseY = -1;
window.scrollLocked = false;
window.mouseDownFunctions = [];
window.mouseMoveFunctions = [];
window.mouseUpFunctions = [];
window.mouseOut = false;
window.pageX = -1;
window.pageY = -1;

window.onmousedown = (e) => {
    // scrolling
    dragging = true;
    totalDist = 0;
    dragStartTime = Date.now();
    
    for(let i = 0; i < window.mouseDownFunctions.length; i++){
        window.mouseDownFunctions[i]();
    }
}

window.onmousemove = (e, param2) => {
    // input
    window.mouseX = ((e.pageX - window.canvasDimensions.x) / window.canvasDimensions.width) * canvas.width;//Math.min(1, Math.max(0, ) ;
    window.mouseY = ((e.pageY - window.canvasDimensions.y) / window.canvasDimensions.height) * canvas.height;

    window.pageX = e.pageX;
    window.pageY = e.pageY;

    window.mouseOut = false;

    if(window.mouseX < 0){
        window.mouseX = 0;
        window.mouseOut = true;
    } else if(window.mouseX > canvas.width){
        window.mouseX = canvas.width;
        window.mouseOut = true;
    }

    if(window.mouseY < 0){
        window.mouseY = 0;
        window.mouseOut = true;
    } else if(window.mouseY > canvas.height){
        window.mouseY = canvas.height;
        window.mouseOut = true;
    }

    for(let i = 0; i < window.mouseMoveFunctions.length; i++){
        window.mouseMoveFunctions[i]();
    }

    // scrolling
    if(dragging === false) return;

    totalDist -= e.movementY * window.innerHeight;

    if(totalDist > SCROLL_PARAMS.sensitivity && (window.mouseX < SCROLL_PARAMS.edgeMargin || window.mouseX > canvas.width - SCROLL_PARAMS.edgeMargin) && window.scrollLocked !== true){
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

    for(let i = 0; i < window.mouseUpFunctions.length; i++){
        window.mouseUpFunctions[i]();
    }
}

// window.onmouseout = () => {
//     // scrolling
//     dragging = false;

//     for(let i = 0; i < window.mouseUpFunctions.length; i++){
//         window.mouseUpFunctions[i]();
//     }
// }

// mobile
document.body.ontouchstart = (e) => {
    const touch = (e.changedTouches || e.originalEvent.touches)[0];
    window.onmousemove({pageX: touch.pageX, pageY: touch.pageY, movementY: touch.pageY - lastTouchY});
    window.onmousedown();
    lastTouchY = touch.pageY;
    return absorbEvent_(e);
}

let lastTouchY = 0;
document.body.ontouchmove = (e) => {
    const touch = (e.changedTouches || e.originalEvent.touches)[0];
    window.onmousemove({pageX: touch.pageX, pageY: touch.pageY, movementY: touch.pageY - lastTouchY});
    lastTouchY = touch.pageY;
    return absorbEvent_(e);
}

document.body.ontouchend = (e) => {
    window.onmouseup();
    return absorbEvent_(e);
}

document.body.ontouchcancel = (e) => {
    document.body.ontouchend();
    return absorbEvent_(e);
}

window.oncontextmenu = (e) => { return e.preventDefault(); };

function absorbEvent_(e) {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}

window.addEventListener('keydown', e => {
    if (e.repeat === true) return;
    if (window.scrollLocked !== true && e.code === "ArrowDown" 
        && window.scrollAnimation === 1) {
        scroll()    
    }
})