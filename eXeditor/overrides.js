import shared from '../shared/shared.js';
import renderCreateMenu from './create.js';
import renderSelection from './transform.js';

// camera scroll
const maxScale = 10;
const minScale = 0.1;
shared.camera.numControlledBy++;// TODO: disable this when entering play mode.
let desiredScrollScale = 1, lastMouseMoveEvent, lastScale=1;
canvas.onwheel = (e) => {
    desiredScrollScale = Math.max(minScale, Math.min(maxScale, shared.camera.scale * (1 - e.deltaY/750)));
    if(lastMouseMoveEvent !== undefined) {
        lastScale = shared.camera.scale;
        shared.changeCameraScale(desiredScrollScale);
        canvas.onmousemove(lastMouseMoveEvent);
        shared.changeCameraScale(lastScale);
    }
};

const interpolate = (start, end, time) => {
    return (1-time) * start + end * time;
}

const oldRender = shared.render;
shared.render = (...params) => {
    oldRender(...params);

    renderSelection();
    renderCreateMenu();

    shared.changeCameraScale(interpolate(shared.camera.scale, desiredScrollScale, 0.3));
}

canvas.onmousedown = (e) => {
    shared.breakFns = false;
    for(let i = 0; i < shared.editorMouseDownFns.length; i++){
        shared.editorMouseDownFns[i](e);
        if(shared.breakFns === true) break;
    }
}
canvas.onmousemove = (e) => {
    shared.breakFns = false;
    for(let i = 0; i < shared.editorMouseMoveFns.length; i++){
        shared.editorMouseMoveFns[i](e);
        if(shared.breakFns === true) break;
    }
    lastMouseMoveEvent = e;
}
canvas.onmouseup = (e) => {
    shared.breakFns = false;
    for(let i = 0; i < shared.editorMouseUpFns.length; i++){
        shared.editorMouseUpFns[i](e);
        if(shared.breakFns === true) break;
    }
}

// TODO: hide vignette when in playmode also write transition functions

// keydown and keyup are the same function
const oldInput = window.onkeydown;
window.onkeydown = window.onkeyup = (e) => {
    if(document.activeElement?.type === 'text') return;
    oldInput(e);

    if(e.type !== 'keydown' || e.repeat === true) return;

    if(e.code === 'KeyZ'){
        shared.stopEditorCreateDrag();
    } else if(e.code === 'Escape'){
        shared.cancelCreate();
    } else if(e.code === 'Delete'){
        shared.deleteSelectedObs();
    } // scrapped because blockly has all the undo stuff we really need
    /* else if(e.code === 'KeyZ' && e.ctrlKey === true){
        let val = 'alsoUndoNext';
        while (shared.undoFns.length !== 0 && val === 'alsoUndoNext') val = shared.undoFns.pop()();
    }*/
}