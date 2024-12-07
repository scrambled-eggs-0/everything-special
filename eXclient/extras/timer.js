import shared from '../../shared/shared.js';

let lastMapPath;
let checkpoints = [];
let cpTimer = -1;
let cpDisplay = '';
let lastT = Infinity, lastTxt = 0;

export default function renderTimerFn() {
    ctx.font = `${50 + (cpTimer < 0 ? 0 : smootherStep(cpTimer / 30) * 20)}px monospace`;
    ctx.textAlign = 'middle';
    ctx.textBaseline = 'top';

    ctx.globalAlpha = 0.95;

    const t = (window.frames - shared.mapEntryTime) / 60;
    let txt;

    if((shared.mapPath === '/maps/winroom' || shared.won === true) && lastTxt !== undefined){
        txt = lastTxt;
    }
    else if(cpTimer >= 0){
        cpTimer--;
        txt = toRenderTime(cpDisplay);
    }
    else txt = toRenderTime(t);

    if(lastT < t) lastTxt = txt;
    lastT = t;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const dimensions = ctx.measureText(txt);
    const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft + 60;
    const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent + 50;
    const hOffset = (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2;

    // let mapName = shared.mapPath.split('/');
    // let mapDifficulty = Math.floor(shared.mapDifficulties[mapName[mapName.length-1]] ?? 0);

    const col = shared.colors.background//shared.difficultyImageColors[mapDifficulty];

    const colInt = parseInt(col.slice(1), 16);

    const r = (colInt >> 16) & 255;
    const g = (colInt >> 8) & 255;
    const b = colInt & 255;

    ctx.translate(canvas.w/2, 15 + h/2 - hOffset);
    ctx.scale(w/h, 1);

    const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, h/2);

    grd.addColorStop(0, `rgba(${r},${g},${b},0.5)`);
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`);

    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(0, 0, h/2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.scale(h/w, 1);
    ctx.translate(-canvas.w/2, -(15 + h/2 - hOffset));

    if(cpTimer > 0) {
        if(cpTimer < 3) ctx.fillStyle = shared.blendColor('#ffff00','#ffffff',smootherStep(1 - cpTimer/3));
        else ctx.fillStyle = '#ffff00';
    } else ctx.fillStyle = 'white';
    ctx.fillText(txt, canvas.w/2, 15);

    if(lastMapPath !== shared.mapPath){
        lastMapPath = shared.mapPath;
        checkpoints.length = 0;
        for(let i = 0; i < shared.obstacles.length; i++){
            if(shared.obstacles[i].checkpointOffsetX === undefined) continue;
            checkpoints.push(shared.obstacles[i]);
        }
    }

    for(let i = 0; i < checkpoints.length; i++){
        if(checkpoints[i].checkpointCollected === true){
            checkpoints.splice(i,1);
            cpDisplay = t;
            cpTimer = 30;
            break;
        }
    }
}

const toRenderTime = (t) => {
    let ms = ((~~(t*100))%100).toString();
    let seconds = (~~(t%60)).toString();
    if(ms.length === 1) ms = '0' + ms;

    if(seconds.length === 1) seconds = '0' + seconds;
    const minutes = (~~((t / 60)%60)).toString();

    let displayTime = `${minutes}:${seconds}.${ms}`;

    if(t > 3600) {
        if(minutes.length === 1) minutes = '0' + minutes;
        const hours = (~~(t / 3600)).toString();
        displayTime = `${hours}:${minutes}:${seconds}.${ms}`;
    }
    return displayTime;
}

function smootherStep(t){
    return t * t * t * (t * (t * 6. - 15.) + 10.);
}