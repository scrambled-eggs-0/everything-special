const THREE = await import("https://cdn.skypack.dev/pin/three@v0.129.0-XYKMzgCzb23GRdwfqj2I/mode=imports,min/optimized/three.js");
import noise from "../eXclient/extras/noise.js";

const starColors = [
    0xCCCCCC,
    0xDDDDDD,
    0xEEEEEE
];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.0001, 10000 );

const renderer = new THREE.WebGLRenderer(/*{antialias: true}*/);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.insertBefore(renderer.domElement, document.body.firstChild);

const ambientLight = new THREE.AmbientLight( 0x000000, 0.5 );
scene.add( ambientLight );

const light1 = new THREE.PointLight( 0xffffff, 1, 0 );
light1.position.set( 0, 200, 0 );
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 1, 0 );
light2.position.set( 100, 200, 100 );
scene.add( light2 );

const light3 = new THREE.PointLight( 0xffffff, 1, 0 );
light3.position.set( - 100, - 200, - 100 );
scene.add( light3 );

const tunnelRadius = 3;
const tunnelThickness = 0.15;
const outerStarsRadius = 4;
const starLineAmt = 345;
const outerStarsAmt = 1000;

// torus stars
for(let i = 0; i < starLineAmt; i++){
    generateStarLine(randomTorusPosition(), addStarsWithinRadius);
}

// outer stars
for(let i = 0; i < outerStarsAmt; i++){
    const angle1 = Math.random() * Math.PI * 2;
    const angle2 = Math.random() * Math.PI * 2;

    const pos = [
        Math.cos(angle1) * Math.sin(angle2) * outerStarsRadius,
        Math.sin(angle1) * Math.sin(angle2) * outerStarsRadius,
        Math.cos(angle2) * outerStarsRadius
    ];

    addStar(...pos, /*rMult*/5);
}

function randomTorusPosition(){
    const angleAroundTorus = Math.random() * Math.PI * 2;
    const zRotation = Math.random() * Math.PI * 2;
    const radiusAroundShell = (Math.random()-0.5)*2 * tunnelThickness;

    return [
        Math.cos(angleAroundTorus) * (tunnelRadius + radiusAroundShell * Math.cos(zRotation)),
        Math.sin(angleAroundTorus) * (tunnelRadius + radiusAroundShell * Math.cos(zRotation)),
        Math.sin(zRotation) * tunnelThickness
    ]
}

function generateStarLine(position, createFn=addStar, recursiveAmount=0){
    if(recursiveAmount > 3) return;
    let movementAngle1 = Math.random() * Math.PI * 2;
    let movementAngle2 = Math.random() * Math.PI * 2;

    for(let j = 0; j < 10+20*Math.random(); j++){
        // for some reason perlin noise has an average of about -0.2
        movementAngle1 += (noise.perlin2(j/0.287+0.754, 0.2137) + 0.2) * 1;//*2/3
        movementAngle2 += (noise.perlin2(0.7132, j/0.287+0.478) + 0.2) * 1;
        
        const fac = (Math.abs((noise.perlin2(j/0.327+0.439, 0.73684) + 0.2)) + Math.random() / 10) / 17;
        position[0] += Math.cos(movementAngle1) * Math.cos(movementAngle2) * fac;
        position[1] += Math.sin(movementAngle1) * Math.cos(movementAngle2) * fac;
        position[2] += Math.sin(movementAngle2) * fac;

        const angleToMid = Math.atan2(position[1], position[0]);
        const torusMidpoint = [
            Math.cos(angleToMid) * tunnelRadius,
            Math.sin(angleToMid) * tunnelRadius,
            0
        ];
        const distToMidpt = Math.sqrt((position[0]-torusMidpoint[0])**2+(position[1]-torusMidpoint[1])**2+(position[2])**2);
        if(distToMidpt > tunnelThickness){
            movementAngle1 += (noise.perlin2(Math.random()*10, Math.random()*10) + 0.2)*12;
            movementAngle2 += (noise.perlin2(Math.random()*10, Math.random()*10) + 0.2)*12;
        }

        createFn(...position);
        if(Math.random() < 0.032) {
            generateStarLine(structuredClone(position), createFn, recursiveAmount+1);
        }
    }
}

function addStarsWithinRadius(x,y,z,r=0.01){
    for(let i = 0; i < Math.floor(Math.abs(noise.perlin3(x/0.287+0.754, y/0.458+0.2137,z/0.328+0.1981) + 0.2)*2*3+1); i++){
        addStar(x+(Math.random()-0.5)*r,y+(Math.random()-0.5)*r,z+(Math.random()-0.5)*r);
    }
}

function addStar(x,y,z,rMult=1){
    const geometry = new THREE.SphereGeometry( Math.random() * 0.001 * rMult );
    const material = new THREE.MeshBasicMaterial( { color: starColors[Math.floor(Math.random() * starColors.length)]} );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x,y,z);
    scene.add( mesh );

    return mesh;
}

let lastTime = performance.now();
let dt = 0;

let timeScale = 1.8/1000;
let t = 0;

let cameraOffset = {
    radius: 0,
    radiusMag: tunnelRadius/32 * 0.6 * 0.6,
    z: 0,
    zMag: tunnelRadius/12 * 0.6 * 0.6
}
function cameraPos(t){
    let rNoise = (noise.simplex2(t*3.5/2+.18273,0.4578)+0.15)*cameraOffset.zMag;
    let zNoise = (noise.simplex2(0.78342,t*3.5/2+5.2)+0.15)*cameraOffset.zMag;
    // console.log(noise, rNoise);
    cameraOffset.radius = interpolate(cameraOffset.radius, rNoise, 0.02);
    cameraOffset.z = interpolate(cameraOffset.z, zNoise, 0.02);
    return new THREE.Vector3(
        /*x:*/ Math.cos(t/6*2*Math.PI) * (tunnelRadius+cameraOffset.radius),
        /*y:*/ Math.sin(t/6*2*Math.PI) * (tunnelRadius+cameraOffset.radius),
        /*z:*/ cameraOffset.z//0//3
    )
}

function interpolate(start, end, t){
    return (1-t) * start + t*end;
}

function shortAngleDist(a0,a1) {
    const max = Math.PI*2;
    const da = (a1 - a0) % max;
    return 2*da % max - da;
}

function interpolateDirection(a0,a1,t) {
    return a0 + shortAngleDist(a0,a1)*t;
}

let nextCameraPosQueue = [];
for(let i = 0; i < 10; i++){
    nextCameraPosQueue.push(cameraPos(t));
    t += timeScale;
}

Array.prototype.last = function() {
    return this[this.length-1];
}

function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

resize();
window.onresize = resize;

// rendering loop

function render(){
    requestAnimationFrame(render);
    let now = performance.now();
    dt = now - lastTime;
    lastTime = now;
    const nextCameraPos = nextCameraPosQueue.shift();
    
    camera.position.set(nextCameraPos.x, nextCameraPos.y, nextCameraPos.z);
    nextCameraPosQueue.push(cameraPos(t));
    t += timeScale * dt * 60 / 1000;
    
    let lastRotation = camera.rotation.clone();
    camera.lookAt(nextCameraPosQueue.last());
    camera.rotation.x = interpolateDirection(lastRotation.x, camera.rotation.x, 0.006);
    camera.rotation.y = interpolateDirection(lastRotation.y, camera.rotation.y, 0.006);
    camera.rotation.z = interpolateDirection(lastRotation.z, camera.rotation.z, 0.006);

    camera.rotation.x = -Math.PI / 2;
    camera.rotation.y = Math.PI-Math.atan2(camera.position.y, camera.position.x);
    camera.rotation.z = Math.PI / 2;
    
    renderer.render( scene, camera );
}

render();