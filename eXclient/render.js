import shared from '../shared/shared.js';

let canvas = window.canvas = document.getElementById('canvas');
let ctx = window.ctx = canvas.getContext('2d');

const camera = shared.camera = {
    x: 0, y: 0, scale: 1,
    numControlledBy: 0,
    angle: 0,
    /*3d*/
    z: 1,
    basis1: [1, 0, 0],
    basis2: [0, 1, 0],
    normal: [0, 0, 1]
}

shared.defaultColors = {
    tile: '#1f2229',// the stroke and outside of arena
    background: '#323645',// the fillcolor
    vignette: {
        inner: {size:0.1,r:0,g:0,b:0,opacity:0},
        outer: {size:0.6,r:0,g:0,b:0,opacity:1},
        innerInterp: {size:0.1,r:0,g:0,b:0,opacity:0},
        outerInterp: {size:0.6,r:0,g:0,b:0,opacity:1},
        holeFunctions: []
    }
}

shared.colors = {
    tile: shared.defaultColors.tile,
    background: shared.defaultColors.background,
    vignette: {
        inner: {size:0.1,r:0,g:0,b:0,opacity:0},
        outer: {size:0.6,r:0,g:0,b:0,opacity:1},
        innerInterp: {size:0.1,r:0,g:0,b:0,opacity:0},
        outerInterp: {size:0.6,r:0,g:0,b:0,opacity:1},
        holeFunctions: []
    }
}

shared.selfId = undefined;
shared.tileSize = 100;
shared.renderDebug = false;
shared.distortionsActive = false;
shared.skullImgLoaded = false;
shared.skullImg = undefined;
const fullscreen = {
    ratio: 9 / 16,
    zoom: 1800,
}
// const width = 1600;
// const height = 900;

// shared.tileImage = undefined;
// shared.tileImageColors = {
//     tile: '', background: ''
// }

// function generateTileImage({tile, background}) {
//     const canv = document.createElement('canvas');
//     const w = canvas.w + ctx.lineWidth + shared.tileSize;
//     const h = canvas.h + ctx.lineWidth + shared.tileSize;
    
//     const cx = canv.getContext('2d');
//     canv.width = w;
//     canv.height = h;
//     cx.imageSmoothingEnabled = false;

//     // tile background
//     cx.globalAlpha = 0.75;
//     cx.strokeStyle = tile;
//     cx.fillStyle = background;

//     cx.lineWidth = 3;
//     for (let x = -camera.x%shared.tileSize; x < canvas.w + ctx.lineWidth + shared.tileSize; x += shared.tileSize) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.h);
//         ctx.stroke();
//         ctx.closePath();
//     }

//     for (let y = -camera.y%shared.tileSize; y < canvas.h + ctx.lineWidth + shared.tileSize; y += shared.tileSize) {
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
//     const shared.tileSize = 100;
//     // const size =
//     //     Math.round(Math.max(canvas.width, canvas.height) / shared.tileSize) *
//     //         shared.tileSize +
//     //     200;
//     const canv = document.createElement('canvas');
//     if(scale < 0.1){
//         return canv;
//     }
    
//     const w = canvas.width/scale + shared.tileSize;
//     const h = canvas.height/scale + shared.tileSize;
    
//     const cx = canv.getContext('2d');
//     canv.width = w//size / scale;
//     canv.height = h//size / scale;
//     cx.imageSmoothingEnabled = false;

//     // tile background
//     cx.globalAlpha = 0.75;
//     cx.strokeStyle = colors.tile//colors.background;
//     cx.lineWidth = thicc ? 4 : 2;
//     for (let y = 0; y <= h; y += shared.tileSize) {
//         for (let x = 0; x <= w; x += shared.tileSize) {
//             cx.strokeRect(x, y, shared.tileSize, shared.tileSize);
//         }
//     }
//     cx.globalAlpha = 1;
//     return canv;
// }

let opaqIndex, len, lastX, lastY, lastR, lastPlayerRadius, diagonalStartOffset, diagonalDist, overRenderTiles = false, lastGA, j = false, lastNLDX = 0, lastNLDY = 0, cullingMinX=0, cullingMaxX=0, cullingMinY=0, cullingMaxY=0, canvSum=0;
shared.render = (os=shared.obstacles, cols=shared.colors, players=shared.players) => {
    overRenderTiles = false;
    if(shared.selfId !== undefined){
        const me = players[shared.selfId];

        if(camera.numControlledBy === 0){
            camera.x = me.pos.x;
            camera.y = me.pos.y;
            camera.angle = 0;
            if(me.ship === true){
                camera.angle = Math.PI/2+me.shipAngle;
                overRenderTiles = true;
            }
        }

        if(camera.angle !== 0){
            ctx.translate(canvas.w/2, canvas.h/2);
            ctx.rotate(-camera.angle);
            ctx.translate(-canvas.w/2, -canvas.h/2);
        }
    }

    // tile background
    // ctx.strokeStyle = cols.tile;
    // ctx.fillStyle = cols.background;

    // if(tileImg === undefined){
    //     tileImg = createTileImg(1);
    // }

    // const img = tileImg;
    //ctx.translate(pos.x , pos.y + (gridOffset.y % 50));
    // ctx.drawImage(img, (canvas.w/2-camera.x)%shared.tileSize, (canvas.h/2-camera.y)%shared.tileSize);
    

    if(overRenderTiles === true){
        ctx.fillStyle = cols.tile;

        canvSum = (canvas.w + canvas.h)/2;
        ctx.fillRect(-canvSum,-canvSum,4*canvSum, 4*canvSum);

        cullingMinX = camera.x-canvSum;
        cullingMaxX = camera.x+canvSum;
        cullingMinY = camera.y-canvSum;
        cullingMaxY = camera.y+canvSum;

        ctx.fillStyle = cols.background;
        // add 1 to all dimensions so that we don't get gap artifacts on the edge of the arena
        ctx.fillRect(-(camera.x-canvas.w/2)+1, -(camera.y-canvas.h/2)+1, shared.mapDimensions.x-2, shared.mapDimensions.y-2);

        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 4.8;
        ctx.strokeStyle = cols.tile;

        // accounting for rotation and such
        diagonalDist = Math.sqrt(canvas.w ** 2 + canvas.h ** 2);
        diagonalStartOffset = (diagonalDist/2) % shared.tileSize - shared.tileSize - diagonalDist / 2;
        for (let x = (canvas.w/2-camera.x)%shared.tileSize + diagonalStartOffset; x < diagonalDist + ctx.lineWidth + shared.tileSize; x += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, diagonalStartOffset);
            ctx.lineTo(x, canvas.h - diagonalStartOffset);
            ctx.stroke();
            ctx.closePath();
        }
    
        for (let y = (canvas.h/2-camera.y)%shared.tileSize + diagonalStartOffset; y < diagonalDist + ctx.lineWidth + shared.tileSize; y += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(diagonalStartOffset, y);
            ctx.lineTo(canvas.w - diagonalStartOffset, y);
            ctx.stroke();
            ctx.closePath();
        }
    } else {
        ctx.fillStyle = cols.tile;
        ctx.fillRect(0,0,canvas.w, canvas.h);

        cullingMinX = camera.x-canvas.w/2;
        cullingMaxX = camera.x+canvas.w/2;
        cullingMinY = camera.y-canvas.h/2;
        cullingMaxY = camera.y+canvas.h/2;

        ctx.fillStyle = cols.background;
        // add 1 to all dimensions so that we don't get gap artifacts on the edge of the arena
        ctx.fillRect(-(camera.x-canvas.w/2)+1, -(camera.y-canvas.h/2)+1, shared.mapDimensions.x-2, shared.mapDimensions.y-2);

        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 4.8;
        ctx.strokeStyle = cols.tile;

        for (let x = (canvas.w/2-camera.x)%shared.tileSize; x < canvas.w + ctx.lineWidth + shared.tileSize; x += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.h);
            ctx.stroke();
            ctx.closePath();
        }
    
        for (let y = (canvas.h/2-camera.y)%shared.tileSize; y < canvas.h + ctx.lineWidth + shared.tileSize; y += shared.tileSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.w, y);
            ctx.stroke();
            ctx.closePath();
        }
    }

    ctx.globalAlpha = 1;

    // TODO: test if it's faster to draw tiles or image
    // if(shared.tileImageColors.tile !== shared.colors.tile || shared.tileImageColors.background !== shared.colors.background){
    //     // TODO: optimize even further with just generating lines and using clearRect and having another canvas in the background with the solid bg color fill
    //     shared.tileImage = generateTileImage(shared.colors);
    // }

    // ctx.drawImage(shared.tileImage, -camera.x % shared.tileSize, -camera.y % shared.tileSize);
    ctx.translate(-(camera.x-canvas.w/2), -(camera.y-canvas.h/2));

    // render obstacles
    renderObstacles(os, cols);

    // render players
    for(let i = 0; i < players.length; i++){
        const player = players[i];
        if(player === undefined) continue;
        if(player.cr !== undefined){
            player.cr(player);
            continue;
        }
        ctx.fillStyle = player.dead === true ? 'red' : 'black';

        lastR = player.sat.r;
        player.sat.r = Math.abs(player.renderRadius);

        lastX = player.pos.x;
        lastY = player.pos.y;
        if(i !== shared.selfId){
            player.pos.x = player.interpX;
            player.pos.y = player.interpY;
        }
        
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
            ctx.lineDashOffset = (-shared.frames / 1.56) % diameter;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.setLineDash([]);
        }
        if(player.god === true) {ctx.strokeStyle = 'purple'; ctx.lineWidth = 10; ctx.stroke(); }
        if (player.ship === true) {
            ctx.strokeStyle = '#0033ed';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.moveTo(player.pos.x,player.pos.y);
            ctx.lineTo(player.pos.x + Math.cos(player.shipAngle) * player.sat.r, player.pos.y + Math.sin(player.shipAngle) * player.sat.r);
            ctx.stroke();
        }
        if(player.grapple === true){
            ctx.beginPath();
            ctx.strokeStyle = '#969696';
            ctx.globalAlpha = 0.75;
            ctx.lineWidth = 12;
            ctx.arc(player.pos.x, player.pos.y, Math.abs(player.renderRadius) / 2, 0, Math.PI * 2);

            if(player.grappleX === -1 && player.id === shared.selfId && shared.input.action1 === true){
                ctx.strokeStyle = 'white';
                ctx.stroke();
                ctx.closePath();

                // failed grapple - big circle
                ctx.beginPath();
                ctx.globalAlpha = 0.2;
                ctx.arc(player.pos.x, player.pos.y, player.grappleRange, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            } else if(player.grappleX !== -1){
                ctx.strokeStyle = 'white';
                ctx.stroke();
                ctx.closePath();

                // successful grapple - line to grap pt
                ctx.beginPath();
                ctx.moveTo(player.pos.x, player.pos.y);
                ctx.lineTo(player.grappleX, player.grappleY);
                ctx.stroke();
                ctx.closePath();

                // and circle at the point
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.arc(player.grappleX, player.grappleY, 10, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            } else {
                ctx.stroke();
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
        if(player.deathTimer === true){
            ctx.fillStyle = 'red';
            ctx.font = '60px Inter';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowBlur = 2;
            ctx.shadowColor = 'red';
            ctx.fillText(~~(player.deathTime / 60), player.pos.x, player.pos.y);
            ctx.shadowBlur = 0;
        }
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

        player.pos.x = lastX;
        player.pos.y = lastY;
        player.sat.r = lastR;
    }

    // debug
    if(shared.renderDebug === true){
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        for(let i = 0; i < os.length; i++){
            if(os[i].topLeft.x > cullingMaxX || os[i].topLeft.x + os[i].dimensions.x < cullingMinX || os[i].topLeft.y > cullingMaxY || os[i].topLeft.y + os[i].dimensions.y < cullingMinY) continue;
            ctx.beginPath();
            ctx.arc(os[i].pos.x, os[i].pos.y, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            ctx.strokeRect(os[i].topLeft.x, os[i].topLeft.y, os[i].dimensions.x, os[i].dimensions.y);
        }

        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for(let i = 0; i < players.length; i++){
            const player = players[i];
            if(player === undefined) continue;
            ctx.font = `${1.2 * 15 * ((Math.abs(player.renderRadius) + 0.5) / 25)}px Inter`;
            ctx.fillText(
                `(${Math.round(player.pos.x/50)*50},${Math.round(player.pos.y/50)*50})`,
                player.pos.x,
                player.pos.y - player.renderRadius * 4/3 - 3 * 1.5
            );
        }
    }

    ctx.translate(camera.x-canvas.w/2, camera.y-canvas.h/2);

    if(camera.angle !== 0){
        ctx.translate(canvas.w/2, canvas.h/2);
        ctx.rotate(camera.angle);
        ctx.translate(-canvas.w/2, -canvas.h/2);
    }

    // vignette
    const v = shared.colors.vignette;
    ctx.beginPath();
    const grd = ctx.createRadialGradient(
        canvas.w / 2,
        canvas.h / 2,
        (Math.max(canvas.w,canvas.h) * v.innerInterp.size),
        canvas.w / 2,
        canvas.h / 2,
        (Math.max(canvas.w,canvas.h) * v.outerInterp.size)
    );

    grd.addColorStop(
        0,
        `rgba(${v.innerInterp.r},${v.innerInterp.g},${v.innerInterp.b},${v.innerInterp.opacity})`
    );
    grd.addColorStop(
        1,
        `rgba(${v.outerInterp.r},${v.outerInterp.g},${v.outerInterp.b},${v.outerInterp.opacity})`
    );
    ctx.fillStyle = grd;
    ctx.rect(0,0,canvas.w,canvas.h);
    if(v.holeFunctions.length !== 0){
        if(shared.selfId !== undefined){
            const me = players[shared.selfId];
            if(me.ship === true){
                ctx.translate(canvas.w/2, canvas.h/2);
                ctx.rotate(-me.shipAngle-Math.PI/2);
                ctx.translate(-canvas.w/2, -canvas.h/2);
            }
        }
        ctx.translate(canvas.w/2-camera.x, canvas.h/2-camera.y);
        for(let i = 0; i < v.holeFunctions.length; i++){
            v.holeFunctions[i]();
        }
        ctx.translate(camera.x-canvas.w/2, camera.y-canvas.h/2);
        if(shared.selfId !== undefined){
            const me = players[shared.selfId];
            if(me.ship === true){
                ctx.translate(canvas.w/2, canvas.h/2);
                ctx.rotate(me.shipAngle+Math.PI/2);
                ctx.translate(-canvas.w/2, -canvas.h/2);
            }
        }
    }
    ctx.fill('evenodd');
    ctx.closePath();

    shared.colors.vignette.inner = {size:0.1,r:0,g:0,b:0,opacity:0};
    shared.colors.vignette.outer = {size:0.6,r:0,g:0,b:0,opacity:1};
    shared.colors.vignette.holeFunctions.length=0;
    // shared.colors = {
    //     tile: shared.defaultColors.tile,
    //     background: shared.defaultColors.background,
    //     vignette: {
    //         inner: {size:0.1,r:0,g:0,b:0,opacity:0},
    //         outer: {size:0.6,r:0,g:0,b:0,opacity:1},
    //         innerInterp: {size:0.1,r:0,g:0,b:0,opacity:0},
    //         outerInterp: {size:0.6,r:0,g:0,b:0,opacity:1}
    //     }
    // }

    if(shared.disconnected === true){
        let txt = 'Disconected From Server.'.split('');
        for(let i = 0; i < txt.length; i++) {if(Math.random() < 0.03) txt[i] = '#';}
        txt = txt.join('');
        ctx.font = '81px Inter';
        ctx.fillStyle = '#00ff41';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.fillText(txt, canvas.w - 30, canvas.h - 50);
        ctx.font = '28px Inter';
        ctx.fillText('You may still play the current map but cannot win or leave.', canvas.w - 30, canvas.h - 18);
    }

    if(shared.distortionsActive === true) shared.renderGl();
}

shared.disableCulling = () => {
    cullingMinX = cullingMinY = -Infinity;
    cullingMaxX = cullingMaxY =  Infinity;
}

const renderObstacles = shared.renderObstacles = (os, cols=shared.colors) => {
    for(let i = 0; i < os.length; i++){
        if(os[i].cr !== undefined) { os[i].cr(os[i]); continue; }

        // culling
        if(os[i].topLeft.x > cullingMaxX || os[i].topLeft.x + os[i].dimensions.x < cullingMinX || os[i].topLeft.y > cullingMaxY || os[i].topLeft.y + os[i].dimensions.y < cullingMinY) continue;

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
}

function interpolate(start, end, t){
    return (1-t) * start + t * end;
}

function renderTextSpecials(o, cols){
    lastGA = ctx.globalAlpha;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${o.fontSize}px Inter`;
    ctx.translate(o.topLeft.x+o.dimensions.x/2, o.topLeft.y+o.dimensions.y/2);
    if(o.rotation !== undefined) ctx.rotate(o.rotation);
    if(ctx.globalAlpha < 0.5) ctx.globalAlpha = 0.5;
    if(ctx.toFill === true) ctx.fillText(o.text, 0, 0);
    if(ctx.toStroke === true) ctx.strokeText(o.text, 0, 0);
    else if(ctx.toFill === false) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = cols.tile;
        ctx.fillText(o.text, 0, 0);
    }
    if(o.rotation !== undefined) ctx.rotate(-o.rotation);
    ctx.translate(-o.topLeft.x-o.dimensions.x/2, -o.topLeft.y-o.dimensions.y/2);
    ctx.globalAlpha = Math.min(0.5, lastGA);
}

// canvas resizing
shared.resizeFns = [];
const gui = document.querySelector('.gui') ?? {style:{}};
let lastScale=1,w,h;
if(shared.isEditor === undefined) shared.isEditor = false;
shared.resize = () => {
    if(shared.isEditor === true){
        const dimensions = shared.left.getBoundingClientRect();
        w = dimensions.width;
        h = dimensions.height;
    } else {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    lastScale = shared.camera.scale;
    shared.changeCameraScale(1);
    const dpi = window.devicePixelRatio;
    gui.style.width = canvas.style.width = Math.ceil(w) + 'px';
    gui.style.height = canvas.style.height = Math.ceil(h) + 'px';
    gui.width = canvas.width = Math.ceil(w) * dpi;
    gui.height = canvas.height = Math.ceil(h) * dpi;
    canvas.zoom = Math.max(0.1, Math.round((Math.max(canvas.height, canvas.width * fullscreen.ratio) / fullscreen.zoom * camera.scale) * 100) / 100);
    // w and h are calced with zoom
    canvas.w = canvas.width / canvas.zoom;
    canvas.h = canvas.height / canvas.zoom;
    ctx.scale(canvas.zoom, canvas.zoom);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    for(let i = 0; i < shared.resizeFns.length; i++){
        shared.resizeFns[i]();
    }
    shared.changeCameraScale(lastScale);
}

shared.changeCameraScale = (scale) => {
    ctx.translate(-(1-1/shared.camera.scale)*canvas.w/2, -(1-1/shared.camera.scale)*canvas.h/2);

    ctx.translate(canvas.w/2, canvas.h/2);
    ctx.scale(1/shared.camera.scale, 1/shared.camera.scale);
    ctx.translate(-canvas.w/2, -canvas.h/2);

    shared.camera.scale = scale;
    canvas.w = canvas.width / canvas.zoom / shared.camera.scale;
    canvas.h = canvas.height / canvas.zoom / shared.camera.scale;

    ctx.translate(canvas.w/2, canvas.h/2);
    ctx.scale(shared.camera.scale, shared.camera.scale);
    ctx.translate(-canvas.w/2, -canvas.h/2);
    
    ctx.translate((1-1/shared.camera.scale)*canvas.w/2, (1-1/shared.camera.scale)*canvas.h/2);
}
  
window.addEventListener('resize', function () {
    shared.resize();
});
shared.resize();

// if there's ever more extras, make an array system
let nonLinearFns;
shared.initDistortion = async (vs, fs, uniformNames=[], uniformLambdas=[]) => {
    if(nonLinearFns === undefined) nonLinearFns = (await import('./extras/distort.js')).default;
    nonLinearFns.initNonlinearTransform(vs, fs, uniformNames, uniformLambdas);
}

shared.unInitDistortion = () => {
    // can't be active if not loaded
    if(nonLinearFns === undefined) return;
    nonLinearFns.unInitNonlinearTransform();
}

let noiseFns;
shared.importNoise = async() => {
    if(noiseFns !== undefined) return noiseFns;
    return noiseFns = (await import('./extras/noise.js')).default;
}

let importedYT = false;
shared.importYoutube = async() => {
    if(importedYT === true) return;
    const p1 = import('./extras/youtube.js');
    const p2 = new Promise((res) => {
        const s = document.createElement('script');
        s.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(s);

        window.onYouTubeIframeAPIReady = () => {
            res();
        }
    })

    importedYT = true;

    return Promise.all([p1, p2]);
}

shared.unTaintCanvas = () => {
    const transform = ctx.getTransform();

    const newCanvas = document.createElement('canvas');

    document.body.insertBefore(newCanvas, canvas);

    canvas.remove();

    canvas = window.canvas = newCanvas;
    canvas.id = "canvas";
    ctx = window.ctx = canvas.getContext('2d');
    shared.resize();

    ctx.setTransform(transform);
}

// mouse coordinates ranging (0,canvas.w) to world position (same coordinates as obstacle rendering)sD
// TODO: test angle !== 0
shared.translateScreenToWorld = () => {
    ctx.translate(-(camera.x-canvas.w/2), -(camera.y-canvas.h/2));
    // if(camera.angle !== 0){
    //     ctx.translate(canvas.w/2, canvas.h/2);
    //     ctx.rotate(-camera.angle);
    //     ctx.translate(-canvas.w/2, -canvas.h/2);
    // }
}

shared.translateWorldToScreen = () => {
    // if(camera.angle !== 0){
    //     ctx.translate(canvas.w/2, canvas.h/2);
    //     ctx.rotate(camera.angle);
    //     ctx.translate(-canvas.w/2, -canvas.h/2);
    // }
    ctx.translate((camera.x-canvas.w/2), (camera.y-canvas.h/2));
}

shared.screenToWorld = (x,y) => {
    // if(camera.angle === 0){
        return [
            x + (camera.x-canvas.w/2),
            y + (camera.y-canvas.h/2)
        ];
    // } else {
    //     x += -(camera.x-canvas.w/2) + canvas.w/2;
    //     y += -(camera.y-canvas.h/2) + canvas.h/2;
    //     const mag = Math.sqrt(x**2 + y **2);
    //     const angle = Math.atan2(y,x) + camera.angle;
    //     return [
    //         Math.cos(angle) * mag,
    //         Math.sin(angle) * mag
    //     ]
    // }
}

shared.worldToScreen = (x,y) => {
    // if(camera.angle === 0){
        return [
            x - (camera.x-canvas.w/2),
            y - (camera.y-canvas.h/2)
        ]
    // } else {
    //     x -= canvas.w/2;
    //     y -= canvas.h/2;
    //     const mag = Math.sqrt(x**2 + y**2);
    //     const angle = Math.atan2(y,x) - camera.angle;
    //     return [
    //         Math.cos(angle) * mag - (camera.x-canvas.w/2),
    //         Math.sin(angle) * mag - (camera.y-canvas.h/2),
    //     ]
    // }
}

export default shared.render;