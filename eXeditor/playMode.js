import shared from '../shared/shared.js';
// simulate and play buttons.

shared.playMode = false;
shared.simulateMode = true;

let lastCameraX, lastCameraY, lastCameraScale;

// const playButtonText = document.getElementById("play-button-text");
shared.togglePlayMode = () => {
    shared.playMode = !shared.playMode;

    const p = shared.players[shared.selfId];
    if(shared.playMode === true){
        delete p.cr;
        p.god = false;
        lastCameraX = p.pos.x;
        lastCameraY = p.pos.y;
        lastCameraScale = shared.camera.scale;
        shared.respawnPlayer();
        shared.changeCameraScale(1);
    } else {
        p.cr = () => {};
        p.god = true;
        if(lastCameraX !== undefined){
            p.pos.x = lastCameraX;
            p.pos.y = lastCameraY;
            shared.changeCameraScale(lastCameraScale);
        }
    }

    playBtn.innerHTML = shared.playMode === true ? '<span style="margin: 2px; font-size: 1.4rem;">l</span><span style="margin: 2px; font-size: 1.4rem;">l</span>' : '▶';
    // playButtonText.innerText = shared.playMode === true ? 'Pause Testing' : 'Test';
}

const lastSimulates = [];
const lastCreate = shared.C;

// const simulateButtonText = document.getElementById("simulate-button-text");
shared.toggleSimulateMode = () => {
    shared.simulateMode = !shared.simulateMode;

    if(shared.simulateMode === false){
        for(let i = 0; i < shared.obstacles.length; i++){
            const o = shared.obstacles[i];
            lastSimulates[i] = o.simulate;
            o.simulate = [];
        }
    
        shared.C = (...params) => {
            lastCreate(...params);
    
            const o = shared.obstacles[shared.obstacles.length-1];
            lastSimulates[shared.obstacles.length-1] = o.simulate;
            o.simulate = [];
        }
    } else {
        const len = Math.min(shared.obstacles.length, lastSimulates.length);
        for(let i = 0; i < len; i++){
            if(lastSimulates[i] === undefined) return;
            shared.obstacles[i].simulate = lastSimulates[i];
        }
        lastSimulates.length = 0;
        shared.C = lastCreate;
    }

    simulateBtn.innerHTML = shared.simulateMode === true ? '<span style="margin: 2px; font-size: 1.4rem;">l</span><span style="margin: 2px; font-size: 1.4rem;">l</span>' : '▶';
    // simulateButtonText.innerText = shared.simulateMode === true ? 'Simulate' : 'Pause';
}

const playBtn = document.getElementById('play-button');
playBtn.onclick = shared.togglePlayMode;

const simulateBtn = document.getElementById('simulate-button');
simulateBtn.onclick = shared.toggleSimulateMode;