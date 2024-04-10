let gearImageRotation = 0, renderGearImageRotation = 0;
let gearImgLoaded = false;
let gearRadius = 60, gearX = 850, gearY = 1550;
let hoveringOverCog = false;
let settingsMenuActive = false;
let settingsGradient;
let settingsMenuAnimation = 0;
let hoverFn = undefined;

let gearImg = new Image(); 
gearImg.src = './gfx/yellowgear.png';
let lockImg = new Image();
lockImg.src = './gfx/locked.png';
let unlockedImg = new Image();
unlockedImg.src = './gfx/unlocked.png';
let thumbImg = new Image();
thumbImg.src = './gfx/thumbsup.png';
let likeImg = new Image()
let dislikeImg = new Image();
let standaloneImg = new Image();
standaloneImg.src = './gfx/standalone.png';
let creatorImg = new Image();
creatorImg.src = './gfx/creator.png';
let closeImg = new Image();
closeImg.src = './gfx/close.png';
closeImg.onload = () => {closeImg = generateModifiedImg(closeImg, 'blue');}
lockImg.onload = () => {lockImg = generateModifiedImg(lockImg, 'red');}
unlockedImg.onload = () => {unlockedImg = generateModifiedImg(unlockedImg, 'blue');}
thumbImg.onload = () => {
    likeImg = generateModifiedImg(thumbImg, 'green');
    dislikeImg = generateModifiedImg(thumbImg, 'red');
}

gearImg.onload = () => {gearImgLoaded = true;}

function generateModifiedImg(img, col='black', alpha=1){
    if(img.complete === false){
        setTimeout(() => {
            generateModifiedImg(img, col, alpha);
        }, 200)
        return;
    }
    // if(img.generatedCol === col) return;
    const c = document.createElement('canvas');
    const x = c.getContext('2d');
    c.width = img.width;
    c.height = img.height;
    x.globalAlpha = alpha;
    x.drawImage(img, 0, 0);
    x.globalAlpha = 1;
    x.globalCompositeOperation = 'source-atop';
    x.fillStyle = col;
    x.fillRect(0,0,c.width,c.height);
    
    let newImg = new Image();
    newImg.src = c.toDataURL();
    newImg.generatedCol = col;
    newImg.alpha = alpha;
    return newImg;
}

let liked = false;
let disliked = false;
let messageAlpha = 0;
let messageText = '';

// 250 w by 250 h
const iconData = [
    {
        x: 100, y: 100,
        img: () => {return window.scrollLocked === true ? lockImg : unlockedImg},
        hoverFn: () => {window.scrollLocked = !window.scrollLocked;},
        text: 'Lock/Unlock Scroll',
        fontSize: 38
    },
    {
        x: 550, y: 100,
        imgScale: 0.92,
        img: () => {return creatorImg;},
        hoverFn: () => {
            fetch(`${location.origin}/getUser/${window.levelFileName}`, {
                method: 'GET',
            })  .then(async (d) => {
                    const creatorName = await d.text();
                    location.replace(`${location.origin}/profile/${creatorName}`);
                }).catch(e => { console.error('err: ',e);});
        },
        text: 'View Creator'
    },
    {
        x: 100, y: 550,
        imgScale: 1.2,
        img: () => {return likeImg;},
        hoverFn: () => {
            fetch(`${location.origin}/like/${window.levelFileName}`, {
                method: 'POST',
            })  .then(_ => {
                    liked = !liked;
                    likeImg = generateModifiedImg(thumbImg, 'green', liked === true ? 0.5 : 2);
                }).catch(e => { console.error('err: ',e);});
        },
        textFn: () => {return liked === true ? 'Unlike' : 'Like'}
    },
    {
        x: 550, y: 550,
        imgScale: 1.2,
        img: () => {return dislikeImg;},
        hoverFn: () => {
            fetch(`${location.origin}/dislike/${window.levelFileName}`, {
                method: 'POST',
            })  .then(_ => {
                    disliked = !disliked;
                    dislikeImg = generateModifiedImg(thumbImg, 'red', disliked === true ? 0.5 : 2);
                }).catch(e => { console.error('err: ',e);});
        },
        textFn: () => {return disliked === true ? 'Un-dislike' : 'Dislike'},
        label: 'Dislike'
    },
    {
        x: 100, y: 1000,
        // fontSize: 38,
        img: () => {return standaloneImg;},
        text: 'Share This Level',
        fontSize: 38,
        hoverFn: () => {
            navigator.clipboard.writeText(`${location.origin}/standalone/${window.levelFileName.split('.')[0]}`);
            messageAlpha = 1;
            messageText = 'Link Copied to Clipboard!';
        }
    },
    {
        x: 550, y: 1000,
        // fontSize: 38,
        img: () => {return closeImg;},
        hoverFn: () => {
            if(settingsMenuActive === true){
                toggleSettingsMenu();
                settingsDrag = false;
            }
        },
        text: 'Close',
    }
]

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
    } else if(settingsMenuActive === false && settingsMenuAnimation !== 0) {
        settingsMenuAnimation -= 0.03;
        if(settingsMenuAnimation < 0) settingsMenuAnimation = 0;
    }

    if(settingsMenuAnimation !== 0){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // rendering
        const smoothAnim = smoothstep(settingsMenuAnimation);
        const translateAmount = (1-smoothAnim) * canvas.width;
        ctx.translate(translateAmount, 0);
        ctx.fillStyle = settingsGradient;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        hoverFn = undefined;
        for(let i = 0; i < iconData.length; i++){
            const d = iconData[i];
            if(d.imgScale !== undefined){
                ctx.translate(d.x+125, d.y+125);
                ctx.scale(d.imgScale, d.imgScale);
                if(d.textFn !== undefined) d.text = d.textFn();
                if(d.label === 'Dislike') ctx.rotate(Math.PI);
                ctx.drawImage(d.img(), -125, -125, 250, 250);
                if(d.label === 'Dislike') ctx.rotate(-Math.PI);
                ctx.scale(1/d.imgScale, 1/d.imgScale);
                ctx.translate(-d.x-125, -d.y-125);
            } else {
                ctx.drawImage(d.img(), d.x, d.y, 250, 250);
            }

            ctx.font = `${d.fontSize ?? 56}px Inter`;
            ctx.fillStyle = 'white';
            ctx.fillText(d.text, d.x + 125, d.y + 283);
            
            if(window.mouseX > d.x + translateAmount && window.mouseX < d.x + translateAmount + 250 && window.mouseY > d.y && window.mouseY < d.y + 250){
                hoverFn = d.hoverFn;
            }
        }

        ctx.translate(-translateAmount, 0);
    }

    if(messageAlpha > 0){
        ctx.font = `56px Inter`;
        ctx.globalAlpha = messageAlpha;
        messageAlpha -= 0.012;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(messageText, 450, 930);
        ctx.globalAlpha = 1;
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
let settingsDragMove = false; // whether the gear is being dragged around
let minDragDistSq = 40 ** 2;

let lastMouseX, lastMouseY;
lastMouseX = lastMouseY = 0;

window.addSideMenuEvtListeners = () => {
    window.mouseDownFunctions.push(() => {
        if(hoveringOverCog === true) {
            settingsDrag = true;
            dragging = false;

            lastMouseX = window.mouseX;
            lastMouseY = window.mouseY;
        } else {
            settingsDrag = false;

            if(hoverFn !== undefined) {hoverFn(); dragging = false;}
        }
    })

    window.mouseMoveFunctions.push(() => {
        if(settingsDrag === true){
            if(settingsDragMove === true || ((lastMouseX - window.mouseX) ** 2 + (lastMouseY - window.mouseY) ** 2 > minDragDistSq)){
                settingsDragMove = true;
                gearX = window.mouseX;
                gearY = window.mouseY;
            }
        }
    })
    
    window.mouseUpFunctions.push(() => {
        if(settingsDrag === true && hoveringOverCog === true && settingsDragMove === false) {
            toggleSettingsMenu();
        }
        // resetting to satisfying position if the gear is close
        if(settingsDragMove === true && gearX > 800-gearRadius/2 && gearY > 1500-gearRadius/2){
            gearX = 850; gearY = 1550;
        }
        settingsDrag = false;
        settingsDragMove = false;
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