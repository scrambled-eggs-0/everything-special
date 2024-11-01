// ONLY thing the api does is copy over the canvas to a webgl canvas
// with shader effects. This means to draw anything we must draw it
// on the canvas first and then do 1 draw call per each transformation.
// This is the best even though drawing on webgl directly would be faster,
// all our obstacles are tied to the canvas anyways and canvas can do pretty
// much everything besides nonlinear transformations.

// For the notable exception of doing something with some parameters not encoded
// in the 2d image (e.g. z-coordinate) we should eventually implement a system
// to get a dynamic buffer

const placeholder = document.getElementById('webglplaceholder');
let webGlCanvas, gtx;
let fragmentShader, vertexShader, glProgram;
let vertexBuff, triangleBuff;
let vloc, tloc, uloc/*, sloc*/;
let tex;

// // Example vs, fs
// const vs = `
// 	attribute vec2 aVertex;
// 	attribute vec2 aUV;
// 	varying vec2 vTex;
// 	uniform vec2 pos;
//  precision mediump float;
//  uniform vec2 res;
// 	void main(void) {
// 		gl_Position = vec4(aVertex + pos, 0.0, 1.0);
// 		vTex = aUV;
// 	}`;//aVertex.x + pos.x, (aVertex.y + pos.y)*0.5

// const fs = `
// 	precision highp float;
// 	varying vec2 vTex;
// 	uniform sampler2D sampler0;
// 	void main(void){
// 		gl_FragColor = vec4(1,1,1,1) - texture2D(sampler0, vTex);
// 	}`;

// should not be called directly. Instead, call window.initDistortions from render.js
// which will make sure the file is imported
window._initDistortions = (vs, fs) => {
    webGlCanvas = document.createElement('canvas');
    gtx = webGlCanvas.getContext('webgl2');
    placeholder.appendChild(webGlCanvas);
    window.distortionsActive = true;

    // window.resizeFns.push(resizeGtx);
    resizeGtx();

    _createImageBuffers();

    setVertexShader(vs, false);
    setFragmentShader(fs, true);
}

window.unInitDistortions = () => {
    window.distortionsActive = false;
    webGlCanvas = gtx = undefined;
    fragmentShader = vertexShader = glProgram = undefined;
    vertexBuff = triangleBuff = undefined;
    vloc = tloc = uloc = /*sloc =*/ undefined;
    tex = undefined;
    placeholder.firstChild.remove();

    // window.resizeFns = window.resizeFns.filter(f => f !== resizeGtx);
}

// these are unchanging since we're just drawing a static image
// for now assume a constant resolution, maybe far far future in
// a galaxy far far away we'll let mapmaker customize resolution
let vertexLen = 0;
function _createImageBuffers(){
    // let vertexData = [
    //     -1, 1, -1, -1, 1, -1, 1, 1
    // ];
    // let indicies = [0, 1, 0, 0, 1, 0, 1, 1];

    let vertexData = [
        -1, -1,// 0
        -1, +1,// 1
        +1, -1,// 2
        +1, +1 // 3
    ];

    let triangleData = [
        0,1,2,
        1,2,3
    ]

    // let vertexData = [];// [-1, 1, -1, -1, 1, -1, 1, 1];
    // let indicies = [];// [0, 1, 0, 0, 1, 0, 1, 1]

    // // 10x10 pixel grid will be represented by 4 verticies (square)
    // const jmp = 10;
    // const resX = Math.floor(canvas.w / jmp);
    // const resY = Math.floor(canvas.h / jmp);

    // // forming verticies
    // for(let y = 0; y <= resY; y++){
    //     for(let x = 0; x <= resX; x++){
    //         // vertex positions in space. Scaled from -1 to 1
    //         vertexData.push(
    //             (x*jmp)/canvas.w*2-1,
    //             (y*jmp)/canvas.h*2-1
    //         );
    //     }
    // }

    // // forming triangles
    // // we form triangles from y layer n to y layer n+1
    // let curIndex = 0;
    // for(let y = 0; y <= resY-1; y++){
    //     for(let x = 0; x <= resX-1; x++){
    //         indicies.push(
    //             curIndex,
    //             curIndex+1,
    //             curIndex+resX,
    //         );
    //         indicies.push(
    //             curIndex+1,
    //             curIndex+resX,
    //             curIndex+resX+1,
    //         );
    //         curIndex++;
    //     }
    // }

    vertexLen = vertexData.length;

    vertexData = new Float32Array(vertexData);
    triangleData = new Uint32Array(triangleData);

    vertexBuff = gtx.createBuffer();
    gtx.bindBuffer(gtx.ARRAY_BUFFER, vertexBuff);
    gtx.bufferData(gtx.ARRAY_BUFFER, vertexData, gtx.STATIC_DRAW);

    triangleBuff = gtx.createBuffer();
    gtx.bindBuffer(gtx.ARRAY_BUFFER, triangleBuff);
    gtx.bufferData(gtx.ARRAY_BUFFER, triangleData, gtx.STATIC_DRAW);
}

window.setVertexShader = (str, toUpdate=true) => {
    vertexShader = gtx.createShader(gtx.VERTEX_SHADER);
    gtx.shaderSource(vertexShader, str);
    gtx.compileShader(vertexShader);

    if(toUpdate === true) _updateProgram();
}

window.setFragmentShader = (str, toUpdate=true) => {
    fragmentShader = gtx.createShader(gtx.FRAGMENT_SHADER);
    gtx.shaderSource(fragmentShader, str);
    gtx.compileShader(fragmentShader);

    if(toUpdate === true) _updateProgram();
}

function _updateProgram(){
    glProgram = gtx.createProgram();
    gtx.attachShader(glProgram, vertexShader);
    gtx.attachShader(glProgram, fragmentShader);

    gtx.linkProgram(glProgram);
    gtx.useProgram(glProgram);

    vloc = gtx.getAttribLocation(glProgram, "aVertex"); 
    tloc = gtx.getAttribLocation(glProgram, "aUV");
    uloc = gtx.getUniformLocation(glProgram, "pos");
    // sloc = gtx.getUniformLocation(glProgram, "res");
}

function _tellGlLocations(){
    gtx.enableVertexAttribArray(vloc);
    gtx.bindBuffer(gtx.ARRAY_BUFFER, vertexBuff);
    gtx.vertexAttribPointer(vloc, 2, gtx.FLOAT, false, 0, 0);

    gtx.enableVertexAttribArray(tloc);
    gtx.bindBuffer(gtx.ARRAY_BUFFER, triangleBuff);
    gtx.bindTexture(gtx.TEXTURE_2D, tex);
    gtx.vertexAttribPointer(tloc, 2, gtx.UNSIGNED_INT, false, 0, 0);
}

// copies the canvas contents onto webgl
window.drawGtx = (img=canvas) => {
    // setting texture
    tex = gtx.createTexture();
    gtx.bindTexture(gtx.TEXTURE_2D, tex);
    
    gtx.texParameteri(gtx.TEXTURE_2D, gtx.TEXTURE_WRAP_S, gtx.CLAMP_TO_EDGE);
    gtx.texParameteri(gtx.TEXTURE_2D, gtx.TEXTURE_WRAP_T, gtx.CLAMP_TO_EDGE);
    gtx.texParameteri(gtx.TEXTURE_2D, gtx.TEXTURE_MIN_FILTER, gtx.NEAREST);// gtx.LINEAR

    gtx.texImage2D(gtx.TEXTURE_2D, 0,  gtx.RGBA,  gtx.RGBA, gtx.UNSIGNED_BYTE, img);


    // gtx.enableVertexAttribArray(sloc);
    // gtx.uniform2f(sloc, canvas.width, canvas.height);

    // gtx.drawArrays(gtx.TRIANGLE_FAN, 0, 4);
    // gtx.clearColor(0, 0, 0, 1.0);
    // gtx.clear(gtx.COLOR_BUFFER_BIT);
    
    gtx.drawElements(
        gtx.TRIANGLES,
        vertexLen,
        gtx.UNSIGNED_INT,
        0,
    )
    // gtx.drawArrays(gtx.TRIANGLE_FAN, 0, 4);
}

window.resizeGtx = () => {
    window.resizeElements([webGlCanvas]);
    gtx.viewport(0, 0, webGlCanvas.width, webGlCanvas.height);
}


// () => {
// // const vs = `
// // 	attribute vec2 aVertex;
// // 	attribute vec2 aUV;
// // 	varying vec2 vTex;
// // 	uniform vec2 pos;
// //     // precision mediump float;
// //     // uniform vec2 res;
// // 	void main(void) {
// //         // // coords go from -1 to 1
// //         // float angle = 0.;//atan(pos.y, pos.x + 1e-10);

// //         // float dist = sqrt(pos.x*pos.x+pos.y*pos.y);
// //         // float p = max(abs(cos(angle)), abs(sin(angle)));
        
// //         // // maxDistAlongAngle = 1. / (p * p);
// //         // // mag = 0.2 * dist / maxDistAlongAngle;
// //         // float mag = 0.1;//0.2 * dist * p * p;

// //         // gl_Position = vec4(aVertex.x + pos.x., aVertex.y + pos.y, 0.0, 1.0);
// // 		// gl_Position = vec4(cos(angle) * mag, sin(angle) * mag, 0.0, 1.0);
// //         gl_Position = vec4(aVertex + pos, 0.0, 1.0);
// // 		vTex = aUV;
// // 	}`;

// const vs = `
// 	attribute vec2 aVertex;
// 	attribute vec2 aUV;
// 	varying vec2 vTex;
// 	uniform vec2 pos;
// 	void main(void) {
//         float angle = atan(aVertex.y + pos.y, aVertex.x + pos.x + 1e-10);

//         gl_Position = vec4((aVertex.x + pos.x)*(cos(angle)+1.), aVertex.y + pos.y, 0.0, 1.0);
// 		vTex = aUV;
// 	}`;

// const fs = `
// 	precision highp float;
// 	varying vec2 vTex;
// 	uniform sampler2D sampler0;
// 	void main(void){
// 		gl_FragColor = texture2D(sampler0, vTex);
// 	}`;// vec4(1,1,1,1) - 
// initDistortions(vs, fs);
// }
