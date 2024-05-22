// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

// import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// // import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// // flying tiles visualization
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// // const frameDiv = document.getElementById('frameDiv');

// const reqUrl = `${location.origin}/game`;
// async function createTile() {
//     const response = await fetch(reqUrl);
//     if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);

//     // const fileNameWithoutTheDotJS = response.headers.get('Fn').replaceAll('.js', '');

//     const div = document.createElement( 'div' );
//     div.style.width = '480px';
//     div.style.height = '360px';
//     div.style.backgroundColor = '#F00';

//     // const frame = document.createElement('iframe');
//     // frame.frameborder = "0";
//     // frame.setAttribute("frameBorder", "0");
//     // frame.width = "180vh";
//     // frame.height = "300vh";
//     // frame.z = 100;
//     // // const range = 0.2;
//     // frame.x = frame.originalX = (Math.random()-0.5)/3 * window.innerWidth; //(window.innerWidth*(1-range/2)) + Math.random() * window.innerWidth * range;//canvas.width;
//     // frame.y = frame.originalY = (Math.random()-0.5)/3 * window.innerHeight;//0//(window.innerHeight*(1-range/2)) + Math.random() * window.innerHeight * range;//canvas.height;
//     // frame.style.position = "fixed";// TODO: center frames instead of making them. Also go for more of a field effect by making the stars slwoer and smaller
//     // frame.originalDistSq = frame.x ** 2 + frame.y ** 2 + frame.z ** 2;
//     // frame.style.border = "0px";
//     // frame.src = `${location.origin}/standalone/${fileNameWithoutTheDotJS}`;

//     // tiles.push(frame);
//     // div.appendChild(frame);

//     const object = new CSS3DObject( div );

//     console.log(object);

//     scene.add(object);

//     return object;

//     // object.position.set( x, y, z );
//     // object.rotation.y = ry;

//     // div.fixed {
//     //     position: fixed;
//     //     bottom: 0;
//     //     right: 0;
//     //     width: 300px;
//     //     border: 3px solid #73AD21;
//     //   }
// }

// // const canvas = document.getElementById('canvas');
// // const ctx = canvas.getContext('2d');

// // post processing
// // const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
// // bloomPass.threshold = 0;
// // bloomPass.strength = 0.5;
// // bloomPass.radius = 0;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// new OrbitControls( camera, renderer.domElement );
// /*const controls =*/
// // controls.maxPolarAngle = Math.PI/2;

// const composer = new EffectComposer( renderer );
// composer.addPass( new RenderPass(scene, camera) );
// // composer.addPass( bloomPass );

// camera.position.z = 5;

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// function render() {
// 	if(Document.visibilityState === 'hidden'){
// 		requestAnimationFrame( render );
// 		return;
// 	}

//     simulateTiles();

// 	requestAnimationFrame( render );

// 	composer.render( scene, camera );
// }

// // camera lives at x = y = z = 0. The squared distance to the camera is just x^2+y^2+z^2 which is our scalar for size. The projected coordinates are 

// let maxSpawnCooldown, spawnCooldown;
// maxSpawnCooldown = spawnCooldown = 4;
// let tiles = [];
// function simulateTiles(){
//     spawnCooldown--;
//     if(spawnCooldown < 0){
//         spawnCooldown = Infinity;//maxSpawnCooldown;
//         createTile();
//     }

//     for(let i = 0; i < tiles.length; i++){
//         const t = tiles[i];
//         t.z -= 1;

//         if(t.z <= 0) {t.dead = true; continue;}

//         const distSq = t.x ** 2 + t.y ** 2 + t.z ** 2;
//         const ratio = t.originalDistSq / distSq;

//         t.style.transform = `translate(${t.x*ratio+window.innerWidth / 2}px,${t.y*ratio+window.innerHeight / 2}px)`;

//         t.width = `${180*ratio}vh`;
//         t.height = `${300*ratio}vh`;

//         // t.x = t.originalX * t.z / 100;
//         // t.y = t.originalY * t.z / 100;
//     }
//     tiles = tiles.filter(t => t.dead === undefined);
// }

// requestAnimationFrame(render);

// window.addEventListener( 'resize', onWindowResize, false );
// function onWindowResize(){
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );
// }

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

let camera, scene, renderer;
let controls;
let tiles = [];

const reqUrl = `${location.origin}/game`;
async function createTile() {
    const response = await fetch(reqUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${reqUrl}`);

    const fileNameWithoutTheDotJS = response.headers.get('Fn').replaceAll('.js', '');

    // const div = document.createElement( 'div' );
    // div.style.width = '225px';
    // div.style.height = '400px';
    // div.style.backgroundColor = '#000';

    const iframe = document.createElement( 'iframe' );
    iframe.style.width = '450px';
    iframe.style.height = '800px';
    iframe.style.border = '0px';
    iframe.src = `${location.origin}/standalone/${fileNameWithoutTheDotJS}`;//[ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
    // div.appendChild( iframe );

    const object = new CSS3DObject( iframe ); // div
    object.position.set( (Math.random()-0.5) * 2 * 1920, (Math.random()-0.5) * 2 * 1080, -10000 );
    object.rotation.z = (Math.random()-0.5) * 2 * Math.PI / 33;

    // object.rotation.y = ry;

    // wait until loaded
    setTimeout(() => {
        tiles.push(object);
        scene.add(object);
        iframe.style.animation="fadeIn 2s 1";
    }, 2000)    

    return object;

    // const div = document.createElement( 'div' );
    // div.style.width = '480px';
    // div.style.height = '360px';
    // div.style.backgroundColor = '#F00';

    // // const frame = document.createElement('iframe');
    // // frame.frameborder = "0";
    // // frame.setAttribute("frameBorder", "0");
    // // frame.width = "180vh";
    // // frame.height = "300vh";
    // // frame.z = 100;
    // // // const range = 0.2;
    // // frame.x = frame.originalX = (Math.random()-0.5)/3 * window.innerWidth; //(window.innerWidth*(1-range/2)) + Math.random() * window.innerWidth * range;//canvas.width;
    // // frame.y = frame.originalY = (Math.random()-0.5)/3 * window.innerHeight;//0//(window.innerHeight*(1-range/2)) + Math.random() * window.innerHeight * range;//canvas.height;
    // // frame.style.position = "fixed";// TODO: center frames instead of making them. Also go for more of a field effect by making the stars slwoer and smaller
    // // frame.originalDistSq = frame.x ** 2 + frame.y ** 2 + frame.z ** 2;
    // // frame.style.border = "0px";
    // // frame.src = ;

    // // tiles.push(frame);
    // // div.appendChild(frame);

    // const object = new CSS3DObject( div );

    // console.log(object);

    // scene.add(object);

    // return object;

    // // object.position.set( x, y, z );
    // // object.rotation.y = ry;

    // // div.fixed {
    // //     position: fixed;
    // //     bottom: 0;
    // //     right: 0;
    // //     width: 300px;
    // //     border: 3px solid #73AD21;
    // //   }
}

const container = document.getElementById('container');

function init() {

    camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0, 0, 1000 );

    scene = new THREE.Scene();

    renderer = new CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    createTile( 0, 0, 240, 0 );
    createTile( 240, 0, 0, Math.PI / 2 );
    createTile( 0, 0, - 240, Math.PI );
    createTile( - 240, 0, 0, - Math.PI / 2 );

    controls = new OrbitControls( camera, renderer.domElement );
    // controls.rotateSpeed = 4;

    window.addEventListener( 'resize', onWindowResize );

    // Block iframe events when dragging camera

    // const blocker = document.getElementById( 'blocker' );
    // blocker.style.display = 'none';

    // controls.addEventListener( 'start', function () {

    //     blocker.style.display = '';

    // } );
    // controls.addEventListener( 'end', function () {

    //     blocker.style.display = 'none';

    // } );

}

let maxSpawnCooldown, spawnCooldown;
maxSpawnCooldown = spawnCooldown = 20;
function simulateTiles(){
    spawnCooldown--;
    if(spawnCooldown < 0){
        spawnCooldown = maxSpawnCooldown;
        createTile();
    }

    for(let i = 0; i < tiles.length; i++){
        const t = tiles[i];
        t.position.z += 10;

        if(t.position.z > camera.position.z) {scene.remove(t);t.remove();t.dead = true; continue;}
    }
    tiles = tiles.filter(t => t.dead === undefined);
}

function animate() {

    requestAnimationFrame( animate );
    controls.update();
    simulateTiles();
    renderer.render( scene, camera );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

init();
animate();