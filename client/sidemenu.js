import Utils from './utils.js';
const { until } = Utils;

let gearImageRotation = 0, renderGearImageRotation = 0;
let gearImgLoaded = false;
let gearRadius = 60, gearX = 850, gearY = 1550;
let hoveringOverCog = false;
let settingsMenuActive = false;
let settingsGradient;
let settingsMenuAnimation = 0;
let hoverFn = undefined;
let editorRotation = 0;
let remixRotation = 0;

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
let editorImg = new Image();
editorImg.src = './gfx/pencil.png';
let remixImg = new Image();
remixImg.src = './gfx/paintbrush.png';
let standaloneImg = new Image();
standaloneImg.src = './gfx/standalone.png';
let creatorImg = new Image();
creatorImg.src = './gfx/creator.png';
let closeImg = new Image();
closeImg.src = './gfx/close.png';
closeImg.onload = () => {closeImg = generateModifiedImg(closeImg, 'blue');}
lockImg.onload = () => {lockImg = generateModifiedImg(lockImg, 'red');}
unlockedImg.onload = () => {unlockedImg = generateModifiedImg(unlockedImg, 'blue');}
editorImg.onload = () => {editorImg = generateModifiedImg(editorImg, 'red');}
remixImg.onload = () => {remixImg = generateModifiedImg(remixImg, 'green');}
thumbImg.onload = () => {
    likeImg = generateModifiedImg(thumbImg, 'green');
    dislikeImg = generateModifiedImg(thumbImg, 'red');
}

gearImg.onload = () => {gearImgLoaded = true;}

function generateModifiedImg(img, col='black'){
    if(img.complete === false){
        setTimeout(() => {
            generateModifiedImg(img, col);
        }, 200)
        return;
    }
    // if(img.generatedCol === col) return;
    const c = document.createElement('canvas');
    const x = c.getContext('2d');
    c.width = img.width;
    c.height = img.height;
    x.drawImage(img, 0, 0);
    x.globalCompositeOperation = 'source-atop';
    x.fillStyle = col;
    x.fillRect(0,0,c.width,c.height);
    
    let newImg = new Image();
    newImg.src = c.toDataURL();
    newImg.generatedCol = col;
    return newImg;
}

let liked = false;
let disliked = false;
let messageAlpha = 0;
let messageText = '';
let username = localStorage.getItem('username');
let hashedPassword = localStorage.getItem('hashedPassword');
let likedLevels = {}; let dislikedLevels = {};
requestIdleCallback(() => {
    const likedLevelsArr = (localStorage.getItem('likedLevels')??"").split('|');
    const dislikedLevelsArr = (localStorage.getItem('dislikedLevels')??"").split('|');
    for(let i = 0; i < likedLevelsArr.length; i++){ likedLevels[likedLevelsArr[i]] = true; }
    for(let i = 0; i < dislikedLevelsArr.length; i++){ dislikedLevels[dislikedLevelsArr[i]] = true; }
})

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
        x: 100, y: 465,
        imgScale: 1.2,
        img: () => {return likeImg;},
        hoverFn: async () => {
            await processLogin();
            const headers = new Headers();
            headers.append('u', username);
            headers.append('hp', hashedPassword);

            fetch(`${location.origin}/like/${window.levelFileName}`, {
                method: 'POST', headers
            })  .then(_ => {
                    liked = !liked;
                    const withoutTheJs = window.levelFileName.slice(0, window.levelFileName.length-3);
                    console.log({lfn: window.levelFileName, withoutTheJs});
                    if(liked === true) likedLevels[withoutTheJs] = true;
                    else delete likedLevels[withoutTheJs];
                    localStorage.setItem('likedLevels', Object.keys(likedLevels).join('|'));
                }).catch(e => { console.error('err: ',e);});
        },
        imgAlphaFn: () => {return liked === true ? 0.67 : 1},
        textFn: () => {return liked === true ? 'Unlike' : 'Like'}
    },
    {
        x: 550, y: 465,
        imgScale: 1.2,
        img: () => {return dislikeImg;},
        hoverFn: async () => {
            await processLogin();
            const headers = new Headers();
            headers.append('u', username);
            headers.append('hp', hashedPassword);

            fetch(`${location.origin}/dislike/${window.levelFileName}`, {
                method: 'POST', headers
            })  .then(_ => {
                    disliked = !disliked;
                    const withoutTheJs = window.levelFileName.slice(0, window.levelFileName.length-3);
                    if(disliked === true) dislikedLevels[withoutTheJs] = true;
                    else delete dislikedLevels[withoutTheJs];
                    localStorage.setItem('dislikedLevels', Object.keys(dislikedLevels).join('|'));
                }).catch(e => { console.error('err: ',e);});
        },
        imgAlphaFn: () => {return disliked === true ? 0.67 : 1},
        textFn: () => {return disliked === true ? 'Un-dislike' : 'Dislike'},
        label: 'Dislike'
    },
    {
        x: 100, y: 830,
        // fontSize: 38,
        img: () => {return editorImg;},
        text: 'Editor',
        label: 'Editor',
        imgScale: 1.18,
        hoverFn: () => {
            location.replace(location.origin + '/editor');
        }
    },
    {
        x: 550, y: 830,
        // fontSize: 38,
        img: () => {return remixImg;},
        imgScale: 0.9,
        text: 'Remix',
        label: 'Remix',
        hoverFn: () => {
            fetch(`${location.origin}/remix/${window.levelFileName}`, {
                method: 'GET',
            })  .then(async (d) => {
                    const levelData = await d.text();
                    localStorage.setItem('ws', levelData);
                    location.replace(location.origin + '/editor');
                }).catch(e => { console.error('err: ',e);});
        }
    },
    {
        x: 100, y: 1195,
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
        x: 550, y: 1195,
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

async function processLogin(){
    if(username !== null) return true;

    const childWindowOrigin = `${location.origin}/account`;

    let clientLoggedIn = false;

    const loginWindow = document.createElement('iframe');
    loginWindow.src = childWindowOrigin;
    loginWindow.classList.add('loginWindow');
    const handleMessage = function(event) {
        if (event.origin === location.origin) {
            loginWindow.remove();
            window.removeEventListener('message', handleMessage);
            clientLoggedIn = true;
        }
    }
    window.addEventListener('message', handleMessage);

    document.body.appendChild(loginWindow);

    await until(()=>{return clientLoggedIn});

    username = localStorage.getItem('username');
    hashedPassword = localStorage.getItem('hashedPassword');

    return true;
    // const headers = new Headers();
    // headers.append('u', localStorage.getItem('username'));
    // headers.append('hp', localStorage.getItem('hashedPassword'));
    // // plgn = player login
    // fetch(`${location.origin}/plgn`, {
    //     method: 'POST', headers
    // }).catch(e=>{console.error('err: ',e);});
}

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
            if(d.imgAlphaFn !== undefined) ctx.globalAlpha = d.imgAlphaFn();
            if(d.imgScale !== undefined){
                ctx.translate(d.x+125, d.y+125);
                ctx.scale(d.imgScale, d.imgScale);
                if(d.textFn !== undefined) d.text = d.textFn();
                if(d.label === 'Dislike') ctx.rotate(Math.PI);
                else if(d.label === 'Editor') ctx.rotate(editorRotation = editorRotation + 0.023);
                else if(d.label === 'Remix') ctx.rotate(remixRotation = remixRotation - 0.024);
                ctx.drawImage(d.img(), -125, -125, 250, 250);
                if(d.label === 'Dislike') ctx.rotate(-Math.PI);
                else if(d.label === 'Editor') ctx.rotate(-editorRotation);
                else if(d.label === 'Remix') ctx.rotate(-remixRotation);
                ctx.scale(1/d.imgScale, 1/d.imgScale);
                ctx.translate(-d.x-125, -d.y-125);
            } else {
                ctx.drawImage(d.img(), d.x, d.y, 250, 250);
            }
            ctx.globalAlpha = 1;

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

window.addSideMenuEvtListeners = (nextFileName) => {
    window.mouseDownFunctions.push(() => {
        if(hoveringOverCog === true) {
            settingsDrag = true;
            dragging = false;

            lastMouseX = window.mouseX;
            lastMouseY = window.mouseY;
        } else {
            settingsDrag = false;

            if(hoverFn !== undefined) {hoverFn(); dragging = false; }
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

    const withoutTheJs = nextFileName.slice(0, nextFileName.length-3);
    liked = likedLevels[withoutTheJs] === true;
    disliked = dislikedLevels[withoutTheJs] === true;
}

function toggleSettingsMenu() {
    settingsMenuActive = !settingsMenuActive;
    if(settingsGradient === undefined){
        settingsGradient = window.ctx.createLinearGradient(0,0,1600,0);
        settingsGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        settingsGradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
    }
}