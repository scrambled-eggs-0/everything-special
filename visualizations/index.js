// flying tiles visualization

const frameDiv = document.getElementById('frameDiv');

const reqUrl = `${location.origin}/game`;
async function createTile() {
    const response = await fetch(reqUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);

    const fileNameWithoutTheDotJS = response.headers.get('Fn').replaceAll('.js', '');

    const frame = document.createElement('iframe');
    frame.frameborder = "0";
    frame.setAttribute("frameBorder", "0");
    frame.width = "180vh";
    frame.height = "300vh";
    frame.z = 100;
    // const range = 0.2;
    frame.x = frame.originalX = (Math.random()-0.5)/3 * window.innerWidth; //(window.innerWidth*(1-range/2)) + Math.random() * window.innerWidth * range;//canvas.width;
    frame.y = frame.originalY = (Math.random()-0.5)/3 * window.innerHeight;//0//(window.innerHeight*(1-range/2)) + Math.random() * window.innerHeight * range;//canvas.height;
    frame.style.position = "fixed";// TODO: center frames instead of making them. Also go for more of a field effect by making the stars slwoer and smaller
    frame.originalDistSq = frame.x ** 2 + frame.y ** 2 + frame.z ** 2;

    // div.fixed {
    //     position: fixed;
    //     bottom: 0;
    //     right: 0;
    //     width: 300px;
    //     border: 3px solid #73AD21;
    //   }
    frame.src = `${location.origin}/standalone/${fileNameWithoutTheDotJS}`;

    frameDiv.appendChild(frame);

    tiles.push(frame);
}

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

function render(){
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0,0,canvas.width,canvas.height);

    simulateTiles();

    // TODO a star field?

    requestAnimationFrame(render);
}

// camera lives at x = y = z = 0. The squared distance to the camera is just x^2+y^2+z^2 which is our scalar for size. The projected coordinates are 

let maxSpawnCooldown, spawnCooldown;
maxSpawnCooldown = spawnCooldown = 4;
let tiles = [];
function simulateTiles(){
    spawnCooldown--;
    if(spawnCooldown < 0){
        spawnCooldown = maxSpawnCooldown;
        createTile();
    }

    for(let i = 0; i < tiles.length; i++){
        const t = tiles[i];
        t.z -= 1;

        if(t.z <= 0) {t.dead = true; continue;}

        const distSq = t.x ** 2 + t.y ** 2 + t.z ** 2;
        const ratio = t.originalDistSq / distSq;

        t.style.transform = `translate(${t.x*ratio+window.innerWidth / 2}px,${t.y*ratio+window.innerHeight / 2}px)`;

        t.width = `${180*ratio}vh`;
        t.height = `${300*ratio}vh`;

        // t.x = t.originalX * t.z / 100;
        // t.y = t.originalY * t.z / 100;
    }
    tiles = tiles.filter(t => t.dead === undefined);
}

requestAnimationFrame(render);