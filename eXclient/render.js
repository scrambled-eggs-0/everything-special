const canvas = window.canvas = document.getElementById('canvas');
const ctx = window.ctx = canvas.getContext('2d');

const camera = window.camera = {
    x: 0, y: 0, scale: 1
}

window.defaultColors = {
    tile: '#1f2229',// the stroke and outside of arena
    background: '#323645',// the fillcolor
    vignette: {
        inner: {size:0.1,r:0,g:0,b:0},
        outer: {size:0.6,r:0,g:0,b:0},
        innerInterp: {size:0.1,r:0,g:0,b:0},
        outerInterp: {size:0.6,r:0,g:0,b:0}
    }
}

window.colors = {
    tile: window.defaultColors.tile,
    background: window.defaultColors.background,
    vignette: {
        inner: {size:0.1,r:0,g:0,b:0},
        outer: {size:0.6,r:0,g:0,b:0},
        innerInterp: {size:0.1,r:0,g:0,b:0},
        outerInterp: {size:0.6,r:0,g:0,b:0}
    }
}

window.selfId = undefined;
window.tileSize = 100;
const fullscreen = {
    ratio: 9 / 16,
    zoom: 1800,
}

// window.tileImage = undefined;
// window.tileImageColors = {
//     tile: '', background: ''
// }

// function generateTileImage({tile, background}) {
//     const canv = document.createElement('canvas');
//     const w = canvas.w + ctx.lineWidth + window.tileSize;
//     const h = canvas.h + ctx.lineWidth + window.tileSize;
    
//     const cx = canv.getContext('2d');
//     canv.width = w;
//     canv.height = h;
//     cx.imageSmoothingEnabled = false;

//     // tile background
//     cx.globalAlpha = 0.75;
//     cx.strokeStyle = tile;
//     cx.fillStyle = background;

//     cx.lineWidth = 3;
//     for (let x = -camera.x%tileSize; x < canvas.w + ctx.lineWidth + window.tileSize; x += window.tileSize) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.h);
//         ctx.stroke();
//         ctx.closePath();
//     }

//     for (let y = -camera.y%tileSize; y < canvas.h + ctx.lineWidth + window.tileSize; y += window.tileSize) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvas.w, y);
//         ctx.stroke();
//         ctx.closePath();//
//     }

//     cx.globalAlpha = 1;
//     return canv;
// }

// let tileImg;
// function createTileImg(scale, thicc) {
//     const tileSize = 100;
//     // const size =
//     //     Math.round(Math.max(canvas.width, canvas.height) / tileSize) *
//     //         tileSize +
//     //     200;
//     const canv = document.createElement('canvas');
//     if(scale < 0.1){
//         return canv;
//     }
    
//     const w = canvas.width/scale + tileSize;
//     const h = canvas.height/scale + tileSize;
    
//     const cx = canv.getContext('2d');
//     canv.width = w//size / scale;
//     canv.height = h//size / scale;
//     cx.imageSmoothingEnabled = false;

//     // tile background
//     cx.globalAlpha = 0.75;
//     cx.strokeStyle = colors.tile//colors.background;
//     cx.lineWidth = thicc ? 4 : 2;
//     for (let y = 0; y <= h; y += tileSize) {
//         for (let x = 0; x <= w; x += tileSize) {
//             cx.strokeRect(x, y, tileSize, tileSize);
//         }
//     }
//     cx.globalAlpha = 1;
//     return canv;
// }

let opaqIndex, len, lastPlayerX, lastPlayerY, lastPlayerRadius, lastGA, j = false, lastNLDX = 0, lastNLDY = 0;
window.render = (os=window.obstacles, cols=window.colors, players=window.players) => {
    // TODO: obstacle interpolation

    if(window.selfId !== undefined){
        const me = players[window.selfId];
        camera.x = me.pos.x;
        camera.y = me.pos.y;
    }
    
    ctx.fillStyle = cols.tile;
    ctx.fillRect(0,0,canvas.w, canvas.h);

    ctx.fillStyle = cols.background;
    ctx.fillRect(-(camera.x-canvas.w/2), -(camera.y-canvas.h/2), window.mapDimensions.x, window.mapDimensions.y);

    // tile background
    // ctx.strokeStyle = cols.tile;
    // ctx.fillStyle = cols.background;

    // if(tileImg === undefined){
    //     tileImg = createTileImg(1);
    // }

    // const img = tileImg;
    //ctx.translate(pos.x , pos.y + (gridOffset.y % 50));
    // ctx.drawImage(img, (canvas.w/2-camera.x)%tileSize, (canvas.h/2-camera.y)%tileSize);
    ctx.globalAlpha = 0.75;
    ctx.lineWidth = 5.2;
    ctx.strokeStyle = cols.tile;
    for (let x = (canvas.w/2-camera.x)%tileSize; x < canvas.w + ctx.lineWidth + window.tileSize; x += window.tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.h);
        ctx.stroke();
        ctx.closePath();
    }

    for (let y = (canvas.h/2-camera.y)%tileSize; y < canvas.h + ctx.lineWidth + window.tileSize; y += window.tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.w, y);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.globalAlpha = 1;

    // TODO: test if it's faster to draw tiles or image
    // if(window.tileImageColors.tile !== window.colors.tile || window.tileImageColors.background !== window.colors.background){
    //     // TODO: optimize even further with just generating lines and using clearRect and having another canvas in the background with the solid bg color fill
    //     window.tileImage = generateTileImage(window.colors);
    // }

    // ctx.drawImage(window.tileImage, -camera.x % tileSize, -camera.y % tileSize);
    ctx.translate(-(camera.x-canvas.w/2), -(camera.y-canvas.h/2));

    // render obstacles
    for(let i = 0; i < os.length; i++){
        len = os[i].effect.length;
        if(len === 1){
            j = 0;
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 4; 
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            if(os[i].isText === true) renderTextSpecials(os[i], cols);
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();
            ctx.globalAlpha = 1;
        } else {
            // so we want to fade between the effect renders. We render a previous one with 1 opacity and then raise the next one from 0-1 opacity, until the next one becomes the previous and the cycle repeats
            os[i].renderEffectTimer += 1/128;
            if(os[i].renderEffectTimer >= len) os[i].renderEffectTimer -= len;

            opaqIndex = Math.floor(os[i].renderEffectTimer);
            /*let fullIndex*/j = opaqIndex - 1;
            if(/*fullIndex*/j === -1) /*fullIndex*/j = len-1;
            // j = fullIndex;

            // render full index
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 2;
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            if(os[i].isText === true) renderTextSpecials(os[i], cols);
            ctx.globalAlpha = 1;
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();

            // render opaq index
            j = opaqIndex;
            ctx.toFill = true;
            ctx.toStroke = false;
            ctx.lineWidth = 2;
            ctx.beginPath();
            os[i].renderShape(os[i]);
            os[i].renderEffect[j](os[i]);
            if(os[i].isText === true) renderTextSpecials(os[i], cols);
            ctx.globalAlpha = os[i].renderEffectTimer - opaqIndex;
            if(ctx.toFill === true) ctx.fill();
            if(ctx.toStroke === true) ctx.stroke();
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    }

    // render players
    for(let i = 0; i < players.length; i++){
        const player = players[i];
        if(player === undefined) continue;
        ctx.fillStyle = player.dead === true ? 'red' : 'black';

        const lastRadius = player.sat.r;
        player.sat.r = player.renderRadius;
        
        ctx.beginPath();
        player.renderShape(player);
        
        if(player.renderRadius >= 0) ctx.fill();
        else {
            // negative radius
            const diameter = 2 * Math.PI * Math.abs(player.dead === true ? player.sat.r : lastPlayerRadius);
            const timesAround = Math.max(3, Math.floor(diameter / 42));
            lastNLDX = lastNLDX * 0.96 + 2/7*diameter/timesAround * 0.04;
            lastNLDY = lastNLDY * 0.96 + 5/7*diameter/timesAround * 0.04;
            ctx.setLineDash([lastNLDX, lastNLDY]);
            ctx.lineDashOffset = (-window.time / 26) % diameter;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.setLineDash([]);
        }
        if(player.god === true) {ctx.strokeStyle = 'purple'; ctx.lineWidth = 10; ctx.stroke(); }
        ctx.closePath();

        ctx.fillStyle = 'white';
        ctx.font = `${15 * ((Math.abs(player.renderRadius) + 0.5) / 25)}px Inter`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
            player.name,
            player.pos.x,
            player.pos.y + player.renderRadius * 4/3 + 3
        );

        player.sat.r = lastRadius;
    }

    ctx.translate(camera.x-canvas.w/2, camera.y-canvas.h/2);

    // vignette
    const v = window.colors.vignette;
    for(let key in v.innerInterp){
        v.innerInterp[key] = interpolate(v.innerInterp[key], v.inner[key], 0.03);
    }
    for(let key in v.outerInterp){
        v.outerInterp[key] = interpolate(v.outerInterp[key], v.outer[key], 0.03);
    }
    ctx.beginPath();
    const grd = ctx.createRadialGradient(
        canvas.w / 2,
        canvas.h / 2,
        (canvas.w * v.innerInterp.size),
        canvas.w / 2,
        canvas.h / 2,
        (canvas.w * v.outerInterp.size)
    );

    grd.addColorStop(
        0,
        `rgba(${v.inner.r},${v.inner.g},${v.inner.b},0)`
    );
    grd.addColorStop(
        1,
        `rgba(${v.outer.r},${v.outer.g},${v.outer.b},1)`
    );
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canvas.w,canvas.h);
    ctx.fill();
    ctx.closePath();
}

function interpolate(start, end, t){
    return (1-t) * start + t * end;
}

function renderTextSpecials(o, cols){
    lastGA = ctx.globalAlpha;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${o.fontSize}px Inter`;
    ctx.translate(o.sat.points[0].x + o.sat.pos.x, o.sat.points[0].y + o.sat.pos.y);
    if(o.rotation !== undefined) ctx.rotate(o.rotation);
    if(ctx.globalAlpha < 0.5) ctx.globalAlpha = 0.5;
    if(ctx.toFill === true) ctx.fillText(o.text, o.dimensions.x/2 - o.dimensions.wOffset, o.dimensions.y/2 - o.dimensions.hOffset);
    if(ctx.toStroke === true) ctx.strokeText(o.text, o.dimensions.x/2 - o.dimensions.wOffset, o.dimensions.y/2 - o.dimensions.hOffset);
    else if(ctx.toFill === false) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = cols.tile;
        ctx.fillText(o.text, o.dimensions.x/2 - o.dimensions.wOffset, o.dimensions.y/2 - o.dimensions.hOffset);
    }
    if(o.rotation !== undefined) ctx.rotate(-o.rotation);
    ctx.translate(-o.sat.points[0].x - o.sat.pos.x, -o.sat.points[0].y - o.sat.pos.y);
    ctx.globalAlpha = Math.min(0.5, lastGA);
}

// canvas resizing
function resize(){
    const dpi = window.devicePixelRatio;
    canvas.style.width = Math.ceil(window.innerWidth) + 'px';
    canvas.style.height = Math.ceil(window.innerHeight) + 'px';
    canvas.width = Math.ceil(window.innerWidth) * dpi;
    canvas.height = Math.ceil(window.innerHeight) * dpi;
    canvas.zoom = Math.max(0.1, Math.round((Math.max(canvas.height, canvas.width * fullscreen.ratio) / fullscreen.zoom * camera.scale) * 100) / 100);
    // w and h are calced with zoom
    canvas.w = canvas.width / canvas.zoom;
    canvas.h = canvas.height / canvas.zoom;
    ctx.scale(canvas.zoom, canvas.zoom);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.imageSmoothingEnabled = false;
}

window.resize = function (elements) {
    for (const element of elements) {
        if (element.width !== width) {
            element.width = width;
            element.style.width = `${width}px`;
        }
        if (element.height !== height) {
            element.height = height;
            element.style.height = `${height}px`;
        }
        let scaleMult = element?._scaleMult ?? 1;
        element.style.transform = `scale(${
            Math.min(window.innerWidth / width, window.innerHeight / height) *
            scaleMult
        })`;
        element.style.left = `${(window.innerWidth - width) / 2}px`;
        element.style.top = `${(window.innerHeight - height) / 2}px`;
    }
    return Math.min(window.innerWidth / width, window.innerHeight / height);
};
  
window.addEventListener('resize', function () {
    resize();
});
resize();

export default render;