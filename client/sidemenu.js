import Utils from './utils.js';
const { until } = Utils;

let gearImageRotation = 0, renderGearImageRotation = 0;
let gearImg = new Image(); let gearImgLoaded = false;
let cachedBg = window.defaultColors.tile;
let winpadIndex = 0;
let lastWinpadIndex = 0;
let hoveringOverCog = false;
let settingsMenuActive = false;
let settingsGradient;
let settingsMenuAnimation = 0;
let hoveringOverLock = false;
gearImg.src = updateGearImage(window.defaultColors.tile);
async function updateGearImage(col){
    gearImg.src = await generateGearImage(col);
}
async function generateGearImage(col){
    gearImgLoaded = false;
    await until(()=>{return window.gearImg !== undefined});
    const c = document.createElement('canvas');
    const x = c.getContext('2d');
    c.width = window.gearImg.width;
    c.height = window.gearImg.height;
    x.drawImage(window.gearImg, 0, 0);
    x.globalCompositeOperation = 'source-atop';
    x.fillStyle = col;
    cachedBg = col;
    x.fillRect(0,0,c.width,c.height);
    gearImgLoaded = true;
    
    return c.toDataURL();
}

export default function drawUi(canvas, ctx, isLast=false){
    const o = window.obstacles[isLast === true ? lastWinpadIndex : winpadIndex];
    if(o === undefined) return;
    let [middleX, middleY] = window.generateTopLeftCoordinates(o);
    middleX += o.dimensions.x / 2;
    middleY += o.dimensions.y / 2;
    const imageSize = Math.max(50, Math.min(o.dimensions.x, o.dimensions.y) * 0.72);

    if((window.mouseX - middleX) ** 2 + (window.mouseY - middleY) ** 2 < imageSize ** 2 / 4){
        gearImageRotation += 0.012;
        hoveringOverCog = true;
    } else {
        hoveringOverCog = false;
    }
    renderGearImageRotation = interpolateDirection(renderGearImageRotation, gearImageRotation, 0.1);

    if(gearImgLoaded === true){
        ctx.globalAlpha = 0.3;
        ctx.translate(middleX, middleY);
        if(renderGearImageRotation !== 0)ctx.rotate(renderGearImageRotation);
        ctx.drawImage(gearImg, -imageSize/2, -imageSize/2, imageSize, imageSize);
        if(renderGearImageRotation !== 0)ctx.rotate(-renderGearImageRotation);
        ctx.translate(-middleX, -middleY);
        ctx.globalAlpha = 1;
    }

    if(settingsMenuActive === true && settingsMenuAnimation !== 1){
        settingsMenuAnimation += 0.03;
        if(settingsMenuAnimation > 1) settingsMenuAnimation = 1;
    } else if(settingsMenuAnimation !== 0) {
        settingsMenuAnimation -= 0.03;
        if(settingsMenuAnimation < 0) settingsMenuAnimation = 0;
    }

    if(settingsMenuAnimation !== 0){
        // rendering
        const smoothAnim = smoothstep(settingsMenuAnimation);
        ctx.translate((1-smoothAnim) * canvas.width, 0);
        ctx.fillStyle = settingsGradient;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.drawImage(window.scrollLocked === true ? window.lockImg : window.unlockedImg, 100, 100, 700, 700);
        if(window.mouseX > 100 && window.mouseX < 800 && window.mouseY > 100 && window.mouseY < 800){
            hoveringOverLock = true;
        } else {
            hoveringOverLock = false;
        }

        ctx.translate((smoothAnim-1) * canvas.width, 0);
    }
}

function shortAngleDist(a0,a1) {
    var max = Math.PI*2;
    var da = (a1 - a0) % max;
    return 2*da % max - da;
}

function interpolateDirection(d1, d2, time) {
    return d1 + shortAngleDist(d1, d2) * time;
}

function smoothstep(t){
    return t * t * (1-t) + (1 - (1 - t) * (1 - t)) * t;
}

window.updateSettingsCog = () => {
    if(window.colors.tile !== cachedBg) updateGearImage(window.colors.tile);
    lastWinpadIndex = winpadIndex;
    for(let i = 0; i < window.obstacles.length; i++){
        if(window.obstacles[i].isWinpad === true){
            winpadIndex = i;
            break;
        }
    }
}

let settingsDrag = false; // whether the user is in the midst of a settings drag

window.addSideMenuEvtListeners = () => {
    window.mouseDownFunctions.push(() => {
        if(hoveringOverLock === true){
            window.scrollLocked = !window.scrollLocked;
            return;   
        }

        if(hoveringOverCog === true) {
            settingsDrag = true;
            dragging = false;
        } else {
            settingsDrag = false;
        }
    })
    
    window.mouseUpFunctions.push(() => {
        if(settingsDrag === true && hoveringOverCog === true) {
            toggleSettingsMenu();
        }
        settingsDrag = false;
    })
}

function toggleSettingsMenu() {
    settingsMenuActive = !settingsMenuActive;
    if(settingsGradient === undefined){
        settingsGradient = window.ctx.createLinearGradient(0,0,1600,0);
        settingsGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        settingsGradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
    }
}