import shared from '../../shared/shared.js';
export default function renderTimerFn() {
    ctx.font = '50px monospace';
    ctx.textAlign = 'middle';
    ctx.textBaseline = 'top';

    ctx.globalAlpha = 0.95;

    const t = (window.frames - shared.mapEntryTime) / 60;
    const txt = toRenderTime(t);

    // let minutes = (~~((t / 60)%60));

    // const hue = hues[minutes % 10];
    // const saturation = saturations[(~~(minutes / 10)) % 10];
    // const lightness = lightnesses[(~~(minutes / 100)) % 10];

    // minutes++;
    // const nextHue = hues[minutes % 10];
    // const nextSaturation = saturations[(~~(minutes / 10)) % 10];
    // const nextLightness = lightnesses[(~~(minutes / 100)) % 10];

    // const hue = t / 60

    // const blendFac = (t%60) / 60;// seconds

    // ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    // const col1 = ctx.fillStyle;

    // ctx.fillStyle = `hsl(${nextHue}, ${nextSaturation}%, ${nextLightness}%)`;
    // const col2 = ctx.fillStyle;

    // ctx.fillStyle = shared.blendColor(col1, col2, blendFac);

    ctx.fillStyle = 'white';

    ctx.fillText(txt, canvas.w/2, 15);

    const dimensions = ctx.measureText(txt);
    const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft + 60;
    const h = dimensions.actualBoundingBoxDescent + dimensions.actualBoundingBoxAscent + 50;
    const hOffset = (dimensions.actualBoundingBoxDescent - dimensions.actualBoundingBoxAscent) / 2;

    let mapName = shared.mapPath.split('/');
    let mapDifficulty = Math.floor(shared.mapDifficulties[mapName[mapName.length-1]] ?? 0);

    console.log(mapName[mapName.length-1], mapDifficulty);

    const period = 30;
    const offset = (-window.frames) % period;
    const alphaMult = 0.2;
    for(let r = offset; r <= h; r += period){
        // if(r < h * 0.5) ctx.globalAlpha = Math.max(0, (r) / (h * 0.5)) * alphaMult;
        // else ctx.globalAlpha = (1 - Math.min(1, r / h)) * alphaMult;
        ctx.globalAlpha = alphaMult * Math.max(0,r / h);
        ctx.strokeStyle = shared.difficultyImageColors[mapDifficulty];//`hsl(0, 100%, 50%)`;//`hsl(${window.frames / 1000}, 100%, 50%)`;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(canvas.w/2 - w/2 + r/2, 15 + hOffset - h/2 + r/2, w - r, h - r, (h-r)/2);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.globalAlpha = 1;
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

// repeats every 10
const hues = [
    180,// cyan
    0,// red
    60,// yellow
    120,// green
    240,// blue
    30, // orange
    300, // purple
    210, // light-dark blue
    90, // greenish-yellow
    ~~(Math.random() * 360)
]

// repeats every 100
const saturations = [
    100,
    60,
    20,
    80,
    40,
    30,
    70,
    0,
    50,
    90
];

// repeats every 1000
const lightnesses = [
    50,
    10,
    100,
    20,
    40,
    70,
    20,
    60,
    30,
    90,
];