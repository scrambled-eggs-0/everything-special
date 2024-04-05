let gearImageRotation = 0, renderGearImageRotation = 0;
let gearImg = new Image(); let gearImgLoaded = false;
let cachedBg = window.defaultColors.tile;
let gearRadius = 60, gearX = 850, gearY = 1550;
let hoveringOverCog = false;
let settingsMenuActive = false;
let settingsGradient;
let settingsMenuAnimation = 0;
let hoveringOverLock = false;
gearImg.src = './gfx/yellowgear.png';
gearImg.onload = () => {gearImgLoaded = true;}

export default function drawUi(canvas, ctx, isLast=false){
    if((window.mouseX - gearX) ** 2 + (window.mouseY - gearY) ** 2 < gearRadius ** 2 / 4){
        gearImageRotation += 0.012;
        hoveringOverCog = true;
    } else {
        hoveringOverCog = false;
    }
    renderGearImageRotation = interpolateDirection(renderGearImageRotation, gearImageRotation, 0.1);

    if(gearImgLoaded === true){
        ctx.globalAlpha = 0.3;
        ctx.translate(gearX, gearY);
        if(renderGearImageRotation !== 0)ctx.rotate(renderGearImageRotation);
        ctx.drawImage(gearImg, -gearRadius/2, -gearRadius/2, gearRadius, gearRadius);
        if(renderGearImageRotation !== 0)ctx.rotate(-renderGearImageRotation);
        ctx.translate(-gearX, -gearY);
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

        ctx.drawImage(window.scrollLocked === true ? window.lockImg : window.unlockedImg, 100, 100, 700, 700);// TODO: make lockImg red and unlockedImg green
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

let settingsDrag = false; // whether the user is in the midst of a settings drag

window.addSideMenuEvtListeners = () => {
    window.mouseDownFunctions.push(() => {
        if(hoveringOverCog === true) {
            settingsDrag = true;
            dragging = false;
        } else {
            settingsDrag = false;

            if(hoveringOverLock === true){
                window.scrollLocked = !window.scrollLocked;
            }
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