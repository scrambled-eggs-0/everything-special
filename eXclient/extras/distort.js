// ONLY thing the api does is copy over the canvas to a webgl canvas
// with shader effects. This means to draw anything we must draw it
// on the canvas first and then do 1 draw call per each transformation.
// This is the best even though drawing on webgl directly would be faster,
// all our obstacles are tied to the canvas anyways and canvas can do pretty
// much everything besides nonlinear transformations.

// For the notable exception of doing something with some parameters not encoded
// in the 2d image (e.g. z-coordinate) we should eventually implement a system
// to add a buffer (see texCoordinates in serum's threedrenderer example)

const placeholder = document.getElementById('webglplaceholder');
let glCanvas;

function initNonlinearTransform(vs, fs, uniformNames, uniformLambdas){
    if(window.distortionsActive === true) unInitNonlinearTransform();
    window.distortionsActive = true;

    // set up canvas and resizing
    glCanvas = document.createElement('canvas');
    const gl = glCanvas.getContext('webgl2');
    placeholder.appendChild(glCanvas);
    
    window.resizeWebGl = () => {
        glCanvas.width = window.innerWidth;
        glCanvas.height = window.innerHeight;
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    }
    window.resizeWebGl();
    window.resizeFns.push(window.resizeWebGl);
    
    let vertexData = [];
    let indicies = [];
    
    const jmp = 1;//10
    const resX = Math.ceil(glCanvas.width / jmp);
    const resY = Math.ceil(glCanvas.height / jmp);
    
    // forming verticies
    for(let y = 0; y < resY; y++){
        for(let x = 0; x < resX; x++){
            // vertex positions in space. Scaled from -1 to 1
            vertexData.push(
                (x / (resX-1)) * 2 - 1,
                (y / (resY-1)) * 2 - 1,
            );
        }
    }
    
    // forming triangles
    // we form triangles from y layer n to y layer n+1
    for(let y = 0; y < resY-1; y++){
        for(let x = 0; x < resX-1; x++){
            const i = y * (resX) + x;
            indicies.push(
                i,
                i+1,
                i+resX,
            );
            indicies.push(
                i+1,
                i+resX,
                i+resX+1,
            );
        }
    }
    
    vertexData = new Float32Array(vertexData);
    indicies = new Uint32Array(indicies);
    
    // Create vertex buffer
    const vertexBuffer = gl.createBuffer();
    {
        // Bind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    
        // Feed vertex buffer with data
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
    }
    
    // Create index buffer
    const indexBuffer = gl.createBuffer();
    {
        // Bind buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    
        // Feed index buffer with data
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicies, gl.STATIC_DRAW);
    }
    
    // Use shader program
    function createShaderProgram() {
        function compileShader(str, type) {
            // create shader
            const shader = gl.createShader(type)
        
            // give it source code and compile
            gl.shaderSource(shader, str);
            gl.compileShader(shader)
        
            const errors = gl.getShaderInfoLog(shader)
            if (errors.length != 0) {
                console.log('Error Compiling Shader!');
                console.log(errors);
                return null;
            }
            else return shader;
        }

        // Create shader program
        const program = gl.createProgram();
    
        // Attach vertex shader
        const vertexShader = compileShader(vs, gl.VERTEX_SHADER)
        gl.attachShader(program, vertexShader)
    
        // Attach fragment shader
        const fragmentShader = compileShader(fs, gl.FRAGMENT_SHADER)
        gl.attachShader(program, fragmentShader)
    
        // Link and validate program
        gl.linkProgram(program);
        gl.validateProgram(program);
    
        // Check for errors
        const errors = gl.getProgramInfoLog(program)
        if (errors.length !== 0) {
            console.log('Error Compiling Program!');
            console.log(errors);
        }
    
        // Free GPU memory
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
    
        return program;
    }
    const program = createShaderProgram();
    
    gl.useProgram(program);
    
    {// Specify locations of pos in the typed arrays
        let posLocation = gl.getAttribLocation(program, "pos");
        gl.enableVertexAttribArray(posLocation);
        gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);// for second to last 0
    }
    
    // Texture
    const texture = gl.createTexture();
    updateTexture();
    
    function updateTexture(){
        // use texture unit 0
        gl.activeTexture(gl.TEXTURE0 + 0);
    
        // bind to the TEXTURE_2D bind point of texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    
        // canvas is not a power of 2. If it was, it would be higher quality to do
        // gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);// gl.LINEAR
    }

    const uniforms = [];
    for(let i = 0; i < uniformNames.length; i++){
        uniforms.push(gl.getUniformLocation(program, uniformNames[i]));
    }
    
    //TODO: flipY gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    window.renderGl = () => {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        // get new canvas data
        updateTexture();
    
        // setup uniforms
        for(let i = 0; i < uniformLambdas.length; i++){
            gl.uniform1f(uniforms[i], uniformLambdas[i]());
        }
        // let t = Date.now() / 1000;
        // t -= Math.floor(t/100)*100;
        // gl.uniform1f(uTime, t);
        
        gl.clearColor(0, 0, 0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    
        gl.drawElements(gl.TRIANGLES,
            indicies.length, // how many vertecies we want to draw
            gl.UNSIGNED_INT, // Uint32 for created indicies array 
            0 // offset in index array (0 = start from beginning)
        )
    }
}

function unInitNonlinearTransform(){
    if(window.distortionsActive === false) return;
    window.resizeFns = window.resizeFns.filter(f => f !== window.resizeWebGl);
    window.distortionsActive = false;
    glCanvas.remove();
}

// window.initDistortion(`#version 300 es
//     in highp vec4 pos;
    
//     uniform float uTime;
    
//     out highp vec2 vTextureCoord;
    
//     void main()
//     {
//         gl_Position = pos;
//         gl_Position.x += 0.1*sin(6.0*uTime + 3.0*pos.y);
//         gl_Position.y += 0.2*sin(6.0*uTime - 6.0*pos.x);
    
//         // texture coordinate is just pos but within 0-1 instead of -1 to 1.
//         // So scale in that range.
//         vTextureCoord = (pos.xy+1.)*0.5;
//     }`,
//     `#version 300 es
//     in highp vec2 vTextureCoord;
    
//     out highp vec4 outColor;
    
//     uniform sampler2D uSampler;
    
//     void main()
//     {
//         // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);
//         outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);
// }`, ['uTime'], [() => {return window.frames * 1000 / 60}]);

export default {initNonlinearTransform, unInitNonlinearTransform};

// // CONE MAP
// window.initDistortion(`#version 300 es
//     in highp vec4 pos;
    
//     uniform float uTime;
    
//     out highp vec2 vTextureCoord;
    
//     void main()
//     {
//         float angle = atan(pos.y, pos.x);
//         float dist = sqrt(pos.y*pos.y + pos.x*pos.x);

//         // calculating max distance along the angle from the origin to end of screen

//         float p = max(abs(cos(angle)), abs(sin(angle)));
//         // float maxDistAlongAngle = 0.5/p;

//         // above 2 lines equivalent to:
//         float x = cos(angle) / p;
//         float y = sin(angle) / p;
//         float maxDistAlongAngle = sqrt(x*x + y*y);

//         // just setting x,y to gl_Position.xy results in oval shape. What we're doing is extruding to 3d.
//         x = cos(angle) * dist / maxDistAlongAngle;
//         y = sin(angle) * dist / maxDistAlongAngle;
//         float z = dist / maxDistAlongAngle;

//         float a = 2.;
//         float b = 3.14/4.;

//         float sa = sin(a);
//         float sb = sin(b);
//         float ca = cos(a);
//         float cb = cos(b);

//         float coneX = x * ca - y * sa;
//         float coneY = (x * sa + y * ca) * sb - z * cb;

//         float t = uTime - floor(uTime);

//         gl_Position = pos;
//         gl_Position.x = coneX * t + pos.x * (1.-t);
//         gl_Position.y = coneY * t + pos.y * (1.-t) + .5;
    
//         // texture coordinate is just pos but within 0-1 instead of -1 to 1.
//         // So scale in that range.
//         vTextureCoord = (pos.xy+1.)*0.5;
//     }`,
//     `#version 300 es
//     in highp vec2 vTextureCoord;
    
//     out highp vec4 outColor;
    
//     uniform sampler2D uSampler;
    
//     void main()
//     {
//         // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);
//         outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);
// }`);