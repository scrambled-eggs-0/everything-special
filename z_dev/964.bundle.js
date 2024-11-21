"use strict";(self.webpackChunkomniserver=self.webpackChunkomniserver||[]).push([[964],{964:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ONLY thing the api does is copy over the canvas to a webgl canvas\r\n// with shader effects. This means to draw anything we must draw it\r\n// on the canvas first and then do 1 draw call per each transformation.\r\n// This is the best even though drawing on webgl directly would be faster,\r\n// all our obstacles are tied to the canvas anyways and canvas can do pretty\r\n// much everything besides nonlinear transformations.\r\n\r\n// For the notable exception of doing something with some parameters not encoded\r\n// in the 2d image (e.g. z-coordinate) we should eventually implement a system\r\n// to add a buffer (see texCoordinates in serum's threedrenderer example)\r\n\r\nconst placeholder = document.getElementById('webglplaceholder');\r\nlet glCanvas;\r\n\r\nfunction initNonlinearTransform(vs, fs, uniformNames, uniformLambdas){\r\n    if(window.distortionsActive === true) unInitNonlinearTransform();\r\n    window.distortionsActive = true;\r\n\r\n    // set up canvas and resizing\r\n    glCanvas = document.createElement('canvas');\r\n    const gl = glCanvas.getContext('webgl2');\r\n    placeholder.appendChild(glCanvas);\r\n    \r\n    window.resizeWebGl = () => {\r\n        glCanvas.width = window.innerWidth;\r\n        glCanvas.height = window.innerHeight;\r\n        gl.viewport(0, 0, glCanvas.width, glCanvas.height);\r\n    }\r\n    window.resizeWebGl();\r\n    window.resizeFns.push(window.resizeWebGl);\r\n    \r\n    let vertexData = [];\r\n    let indicies = [];\r\n    \r\n    const jmp = 1;//10\r\n    const resX = Math.ceil(glCanvas.width / jmp);\r\n    const resY = Math.ceil(glCanvas.height / jmp);\r\n    \r\n    // forming verticies\r\n    for(let y = 0; y < resY; y++){\r\n        for(let x = 0; x < resX; x++){\r\n            // vertex positions in space. Scaled from -1 to 1\r\n            vertexData.push(\r\n                (x / (resX-1)) * 2 - 1,\r\n                (y / (resY-1)) * 2 - 1,\r\n            );\r\n        }\r\n    }\r\n    \r\n    // forming triangles\r\n    // we form triangles from y layer n to y layer n+1\r\n    for(let y = 0; y < resY-1; y++){\r\n        for(let x = 0; x < resX-1; x++){\r\n            const i = y * (resX) + x;\r\n            indicies.push(\r\n                i,\r\n                i+1,\r\n                i+resX,\r\n            );\r\n            indicies.push(\r\n                i+1,\r\n                i+resX,\r\n                i+resX+1,\r\n            );\r\n        }\r\n    }\r\n    \r\n    vertexData = new Float32Array(vertexData);\r\n    indicies = new Uint32Array(indicies);\r\n    \r\n    // Create vertex buffer\r\n    const vertexBuffer = gl.createBuffer();\r\n    {\r\n        // Bind buffer\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)\r\n    \r\n        // Feed vertex buffer with data\r\n        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);\r\n    }\r\n    \r\n    // Create index buffer\r\n    const indexBuffer = gl.createBuffer();\r\n    {\r\n        // Bind buffer\r\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);\r\n    \r\n        // Feed index buffer with data\r\n        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicies, gl.STATIC_DRAW);\r\n    }\r\n    \r\n    // Use shader program\r\n    function createShaderProgram() {\r\n        function compileShader(str, type) {\r\n            // create shader\r\n            const shader = gl.createShader(type)\r\n        \r\n            // give it source code and compile\r\n            gl.shaderSource(shader, str);\r\n            gl.compileShader(shader)\r\n        \r\n            const errors = gl.getShaderInfoLog(shader)\r\n            if (errors.length != 0) {\r\n                console.log('Error Compiling Shader!');\r\n                console.log(errors);\r\n                return null;\r\n            }\r\n            else return shader;\r\n        }\r\n\r\n        // Create shader program\r\n        const program = gl.createProgram();\r\n    \r\n        // Attach vertex shader\r\n        const vertexShader = compileShader(vs, gl.VERTEX_SHADER)\r\n        gl.attachShader(program, vertexShader)\r\n    \r\n        // Attach fragment shader\r\n        const fragmentShader = compileShader(fs, gl.FRAGMENT_SHADER)\r\n        gl.attachShader(program, fragmentShader)\r\n    \r\n        // Link and validate program\r\n        gl.linkProgram(program);\r\n        gl.validateProgram(program);\r\n    \r\n        // Check for errors\r\n        const errors = gl.getProgramInfoLog(program)\r\n        if (errors.length !== 0) {\r\n            console.log('Error Compiling Program!');\r\n            console.log(errors);\r\n        }\r\n    \r\n        // Free GPU memory\r\n        gl.deleteShader(vertexShader);\r\n        gl.deleteShader(fragmentShader);\r\n    \r\n        return program;\r\n    }\r\n    const program = createShaderProgram();\r\n    \r\n    gl.useProgram(program);\r\n    \r\n    {// Specify locations of pos in the typed arrays\r\n        let posLocation = gl.getAttribLocation(program, \"pos\");\r\n        gl.enableVertexAttribArray(posLocation);\r\n        gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);// for second to last 0\r\n    }\r\n    \r\n    // Texture\r\n    const texture = gl.createTexture();\r\n    updateTexture();\r\n    \r\n    function updateTexture(){\r\n        // use texture unit 0\r\n        gl.activeTexture(gl.TEXTURE0 + 0);\r\n    \r\n        // bind to the TEXTURE_2D bind point of texture unit 0\r\n        gl.bindTexture(gl.TEXTURE_2D, texture);\r\n        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);\r\n    \r\n        // canvas is not a power of 2. If it was, it would be higher quality to do\r\n        // gl.generateMipmap(gl.TEXTURE_2D);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);// gl.LINEAR\r\n    }\r\n\r\n    const uniforms = [];\r\n    for(let i = 0; i < uniformNames.length; i++){\r\n        uniforms.push(gl.getUniformLocation(program, uniformNames[i]));\r\n    }\r\n    \r\n    //TODO: flipY gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);\r\n    window.renderGl = () => {\r\n        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);\r\n\r\n        // get new canvas data\r\n        updateTexture();\r\n    \r\n        // setup uniforms\r\n        for(let i = 0; i < uniformLambdas.length; i++){\r\n            gl.uniform1f(uniforms[i], uniformLambdas[i]());\r\n        }\r\n        // let t = Date.now() / 1000;\r\n        // t -= Math.floor(t/100)*100;\r\n        // gl.uniform1f(uTime, t);\r\n        \r\n        gl.clearColor(0, 0, 0, 1.0);\r\n        gl.clear(gl.COLOR_BUFFER_BIT);\r\n    \r\n        gl.drawElements(gl.TRIANGLES,\r\n            indicies.length, // how many vertecies we want to draw\r\n            gl.UNSIGNED_INT, // Uint32 for created indicies array \r\n            0 // offset in index array (0 = start from beginning)\r\n        )\r\n    }\r\n}\r\n\r\nfunction unInitNonlinearTransform(){\r\n    if(window.distortionsActive === false) return;\r\n    window.resizeFns = window.resizeFns.filter(f => f !== window.resizeWebGl);\r\n    window.distortionsActive = false;\r\n    glCanvas.remove();\r\n}\r\n\r\n// window.initDistortion(`#version 300 es\r\n//     in highp vec4 pos;\r\n    \r\n//     uniform float uTime;\r\n    \r\n//     out highp vec2 vTextureCoord;\r\n    \r\n//     void main()\r\n//     {\r\n//         gl_Position = pos;\r\n//         gl_Position.x += 0.1*sin(6.0*uTime + 3.0*pos.y);\r\n//         gl_Position.y += 0.2*sin(6.0*uTime - 6.0*pos.x);\r\n    \r\n//         // texture coordinate is just pos but within 0-1 instead of -1 to 1.\r\n//         // So scale in that range.\r\n//         vTextureCoord = (pos.xy+1.)*0.5;\r\n//     }`,\r\n//     `#version 300 es\r\n//     in highp vec2 vTextureCoord;\r\n    \r\n//     out highp vec4 outColor;\r\n    \r\n//     uniform sampler2D uSampler;\r\n    \r\n//     void main()\r\n//     {\r\n//         // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);\r\n//         outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);\r\n// }`, ['uTime'], [() => {return window.frames * 1000 / 60}]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({initNonlinearTransform, unInitNonlinearTransform});\r\n\r\n// // CONE MAP\r\n// window.initDistortion(`#version 300 es\r\n//     in highp vec4 pos;\r\n    \r\n//     uniform float uTime;\r\n    \r\n//     out highp vec2 vTextureCoord;\r\n    \r\n//     void main()\r\n//     {\r\n//         float angle = atan(pos.y, pos.x);\r\n//         float dist = sqrt(pos.y*pos.y + pos.x*pos.x);\r\n\r\n//         // calculating max distance along the angle from the origin to end of screen\r\n\r\n//         float p = max(abs(cos(angle)), abs(sin(angle)));\r\n//         // float maxDistAlongAngle = 0.5/p;\r\n\r\n//         // above 2 lines equivalent to:\r\n//         float x = cos(angle) / p;\r\n//         float y = sin(angle) / p;\r\n//         float maxDistAlongAngle = sqrt(x*x + y*y);\r\n\r\n//         // just setting x,y to gl_Position.xy results in oval shape. What we're doing is extruding to 3d.\r\n//         x = cos(angle) * dist / maxDistAlongAngle;\r\n//         y = sin(angle) * dist / maxDistAlongAngle;\r\n//         float z = dist / maxDistAlongAngle;\r\n\r\n//         float a = 2.;\r\n//         float b = 3.14/4.;\r\n\r\n//         float sa = sin(a);\r\n//         float sb = sin(b);\r\n//         float ca = cos(a);\r\n//         float cb = cos(b);\r\n\r\n//         float coneX = x * ca - y * sa;\r\n//         float coneY = (x * sa + y * ca) * sb - z * cb;\r\n\r\n//         float t = uTime - floor(uTime);\r\n\r\n//         gl_Position = pos;\r\n//         gl_Position.x = coneX * t + pos.x * (1.-t);\r\n//         gl_Position.y = coneY * t + pos.y * (1.-t) + .5;\r\n    \r\n//         // texture coordinate is just pos but within 0-1 instead of -1 to 1.\r\n//         // So scale in that range.\r\n//         vTextureCoord = (pos.xy+1.)*0.5;\r\n//     }`,\r\n//     `#version 300 es\r\n//     in highp vec2 vTextureCoord;\r\n    \r\n//     out highp vec4 outColor;\r\n    \r\n//     uniform sampler2D uSampler;\r\n    \r\n//     void main()\r\n//     {\r\n//         // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);\r\n//         outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);\r\n// }`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbW5pc2VydmVyLy4vZVhjbGllbnQvZXh0cmFzL2Rpc3RvcnQuanM/MDEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPTkxZIHRoaW5nIHRoZSBhcGkgZG9lcyBpcyBjb3B5IG92ZXIgdGhlIGNhbnZhcyB0byBhIHdlYmdsIGNhbnZhc1xyXG4vLyB3aXRoIHNoYWRlciBlZmZlY3RzLiBUaGlzIG1lYW5zIHRvIGRyYXcgYW55dGhpbmcgd2UgbXVzdCBkcmF3IGl0XHJcbi8vIG9uIHRoZSBjYW52YXMgZmlyc3QgYW5kIHRoZW4gZG8gMSBkcmF3IGNhbGwgcGVyIGVhY2ggdHJhbnNmb3JtYXRpb24uXHJcbi8vIFRoaXMgaXMgdGhlIGJlc3QgZXZlbiB0aG91Z2ggZHJhd2luZyBvbiB3ZWJnbCBkaXJlY3RseSB3b3VsZCBiZSBmYXN0ZXIsXHJcbi8vIGFsbCBvdXIgb2JzdGFjbGVzIGFyZSB0aWVkIHRvIHRoZSBjYW52YXMgYW55d2F5cyBhbmQgY2FudmFzIGNhbiBkbyBwcmV0dHlcclxuLy8gbXVjaCBldmVyeXRoaW5nIGJlc2lkZXMgbm9ubGluZWFyIHRyYW5zZm9ybWF0aW9ucy5cclxuXHJcbi8vIEZvciB0aGUgbm90YWJsZSBleGNlcHRpb24gb2YgZG9pbmcgc29tZXRoaW5nIHdpdGggc29tZSBwYXJhbWV0ZXJzIG5vdCBlbmNvZGVkXHJcbi8vIGluIHRoZSAyZCBpbWFnZSAoZS5nLiB6LWNvb3JkaW5hdGUpIHdlIHNob3VsZCBldmVudHVhbGx5IGltcGxlbWVudCBhIHN5c3RlbVxyXG4vLyB0byBhZGQgYSBidWZmZXIgKHNlZSB0ZXhDb29yZGluYXRlcyBpbiBzZXJ1bSdzIHRocmVlZHJlbmRlcmVyIGV4YW1wbGUpXHJcblxyXG5jb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbHBsYWNlaG9sZGVyJyk7XHJcbmxldCBnbENhbnZhcztcclxuXHJcbmZ1bmN0aW9uIGluaXROb25saW5lYXJUcmFuc2Zvcm0odnMsIGZzLCB1bmlmb3JtTmFtZXMsIHVuaWZvcm1MYW1iZGFzKXtcclxuICAgIGlmKHdpbmRvdy5kaXN0b3J0aW9uc0FjdGl2ZSA9PT0gdHJ1ZSkgdW5Jbml0Tm9ubGluZWFyVHJhbnNmb3JtKCk7XHJcbiAgICB3aW5kb3cuZGlzdG9ydGlvbnNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIC8vIHNldCB1cCBjYW52YXMgYW5kIHJlc2l6aW5nXHJcbiAgICBnbENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgZ2wgPSBnbENhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGdsQ2FudmFzKTtcclxuICAgIFxyXG4gICAgd2luZG93LnJlc2l6ZVdlYkdsID0gKCkgPT4ge1xyXG4gICAgICAgIGdsQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgZ2xDYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsQ2FudmFzLndpZHRoLCBnbENhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlc2l6ZVdlYkdsKCk7XHJcbiAgICB3aW5kb3cucmVzaXplRm5zLnB1c2god2luZG93LnJlc2l6ZVdlYkdsKTtcclxuICAgIFxyXG4gICAgbGV0IHZlcnRleERhdGEgPSBbXTtcclxuICAgIGxldCBpbmRpY2llcyA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBqbXAgPSAxOy8vMTBcclxuICAgIGNvbnN0IHJlc1ggPSBNYXRoLmNlaWwoZ2xDYW52YXMud2lkdGggLyBqbXApO1xyXG4gICAgY29uc3QgcmVzWSA9IE1hdGguY2VpbChnbENhbnZhcy5oZWlnaHQgLyBqbXApO1xyXG4gICAgXHJcbiAgICAvLyBmb3JtaW5nIHZlcnRpY2llc1xyXG4gICAgZm9yKGxldCB5ID0gMDsgeSA8IHJlc1k7IHkrKyl7XHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHJlc1g7IHgrKyl7XHJcbiAgICAgICAgICAgIC8vIHZlcnRleCBwb3NpdGlvbnMgaW4gc3BhY2UuIFNjYWxlZCBmcm9tIC0xIHRvIDFcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgKHggLyAocmVzWC0xKSkgKiAyIC0gMSxcclxuICAgICAgICAgICAgICAgICh5IC8gKHJlc1ktMSkpICogMiAtIDEsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBmb3JtaW5nIHRyaWFuZ2xlc1xyXG4gICAgLy8gd2UgZm9ybSB0cmlhbmdsZXMgZnJvbSB5IGxheWVyIG4gdG8geSBsYXllciBuKzFcclxuICAgIGZvcihsZXQgeSA9IDA7IHkgPCByZXNZLTE7IHkrKyl7XHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHJlc1gtMTsgeCsrKXtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHkgKiAocmVzWCkgKyB4O1xyXG4gICAgICAgICAgICBpbmRpY2llcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIGkrMSxcclxuICAgICAgICAgICAgICAgIGkrcmVzWCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaW5kaWNpZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGkrMSxcclxuICAgICAgICAgICAgICAgIGkrcmVzWCxcclxuICAgICAgICAgICAgICAgIGkrcmVzWCsxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdmVydGV4RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4RGF0YSk7XHJcbiAgICBpbmRpY2llcyA9IG5ldyBVaW50MzJBcnJheShpbmRpY2llcyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSB2ZXJ0ZXggYnVmZmVyXHJcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIHtcclxuICAgICAgICAvLyBCaW5kIGJ1ZmZlclxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpXHJcbiAgICBcclxuICAgICAgICAvLyBGZWVkIHZlcnRleCBidWZmZXIgd2l0aCBkYXRhXHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZlcnRleERhdGEsIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIGluZGV4IGJ1ZmZlclxyXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIHtcclxuICAgICAgICAvLyBCaW5kIGJ1ZmZlclxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGV4QnVmZmVyKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEZlZWQgaW5kZXggYnVmZmVyIHdpdGggZGF0YVxyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljaWVzLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVzZSBzaGFkZXIgcHJvZ3JhbVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hhZGVyUHJvZ3JhbSgpIHtcclxuICAgICAgICBmdW5jdGlvbiBjb21waWxlU2hhZGVyKHN0ciwgdHlwZSkge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgc2hhZGVyXHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBnaXZlIGl0IHNvdXJjZSBjb2RlIGFuZCBjb21waWxlXHJcbiAgICAgICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHN0cik7XHJcbiAgICAgICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcilcclxuICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIENvbXBpbGluZyBTaGFkZXIhJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHNoYWRlciBwcm9ncmFtXHJcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEF0dGFjaCB2ZXJ0ZXggc2hhZGVyXHJcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gY29tcGlsZVNoYWRlcih2cywgZ2wuVkVSVEVYX1NIQURFUilcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKVxyXG4gICAgXHJcbiAgICAgICAgLy8gQXR0YWNoIGZyYWdtZW50IHNoYWRlclxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gY29tcGlsZVNoYWRlcihmcywgZ2wuRlJBR01FTlRfU0hBREVSKVxyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcilcclxuICAgIFxyXG4gICAgICAgIC8vIExpbmsgYW5kIHZhbGlkYXRlIHByb2dyYW1cclxuICAgICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBnbC52YWxpZGF0ZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgZXJyb3JzXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcclxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgQ29tcGlsaW5nIFByb2dyYW0hJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gRnJlZSBHUFUgbWVtb3J5XHJcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oKTtcclxuICAgIFxyXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgIFxyXG4gICAgey8vIFNwZWNpZnkgbG9jYXRpb25zIG9mIHBvcyBpbiB0aGUgdHlwZWQgYXJyYXlzXHJcbiAgICAgICAgbGV0IHBvc0xvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJwb3NcIik7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zTG9jYXRpb24pO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMiAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgMCk7Ly8gZm9yIHNlY29uZCB0byBsYXN0IDBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVGV4dHVyZVxyXG4gICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIHVwZGF0ZVRleHR1cmUoKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGV4dHVyZSgpe1xyXG4gICAgICAgIC8vIHVzZSB0ZXh0dXJlIHVuaXQgMFxyXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyAwKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGJpbmQgdG8gdGhlIFRFWFRVUkVfMkQgYmluZCBwb2ludCBvZiB0ZXh0dXJlIHVuaXQgMFxyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgY2FudmFzKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGNhbnZhcyBpcyBub3QgYSBwb3dlciBvZiAyLiBJZiBpdCB3YXMsIGl0IHdvdWxkIGJlIGhpZ2hlciBxdWFsaXR5IHRvIGRvXHJcbiAgICAgICAgLy8gZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpOy8vIGdsLkxJTkVBUlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVuaWZvcm1zID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdW5pZm9ybU5hbWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB1bmlmb3Jtcy5wdXNoKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtTmFtZXNbaV0pKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9UT0RPOiBmbGlwWSBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcclxuICAgIHdpbmRvdy5yZW5kZXJHbCA9ICgpID0+IHtcclxuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IG5ldyBjYW52YXMgZGF0YVxyXG4gICAgICAgIHVwZGF0ZVRleHR1cmUoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIHNldHVwIHVuaWZvcm1zXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHVuaWZvcm1MYW1iZGFzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zW2ldLCB1bmlmb3JtTGFtYmRhc1tpXSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHQgPSBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgICAgICAvLyB0IC09IE1hdGguZmxvb3IodC8xMDApKjEwMDtcclxuICAgICAgICAvLyBnbC51bmlmb3JtMWYodVRpbWUsIHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMS4wKTtcclxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuICAgIFxyXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsXHJcbiAgICAgICAgICAgIGluZGljaWVzLmxlbmd0aCwgLy8gaG93IG1hbnkgdmVydGVjaWVzIHdlIHdhbnQgdG8gZHJhd1xyXG4gICAgICAgICAgICBnbC5VTlNJR05FRF9JTlQsIC8vIFVpbnQzMiBmb3IgY3JlYXRlZCBpbmRpY2llcyBhcnJheSBcclxuICAgICAgICAgICAgMCAvLyBvZmZzZXQgaW4gaW5kZXggYXJyYXkgKDAgPSBzdGFydCBmcm9tIGJlZ2lubmluZylcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuSW5pdE5vbmxpbmVhclRyYW5zZm9ybSgpe1xyXG4gICAgaWYod2luZG93LmRpc3RvcnRpb25zQWN0aXZlID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgd2luZG93LnJlc2l6ZUZucyA9IHdpbmRvdy5yZXNpemVGbnMuZmlsdGVyKGYgPT4gZiAhPT0gd2luZG93LnJlc2l6ZVdlYkdsKTtcclxuICAgIHdpbmRvdy5kaXN0b3J0aW9uc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZ2xDYW52YXMucmVtb3ZlKCk7XHJcbn1cclxuXHJcbi8vIHdpbmRvdy5pbml0RGlzdG9ydGlvbihgI3ZlcnNpb24gMzAwIGVzXHJcbi8vICAgICBpbiBoaWdocCB2ZWM0IHBvcztcclxuICAgIFxyXG4vLyAgICAgdW5pZm9ybSBmbG9hdCB1VGltZTtcclxuICAgIFxyXG4vLyAgICAgb3V0IGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZDtcclxuICAgIFxyXG4vLyAgICAgdm9pZCBtYWluKClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBnbF9Qb3NpdGlvbiA9IHBvcztcclxuLy8gICAgICAgICBnbF9Qb3NpdGlvbi54ICs9IDAuMSpzaW4oNi4wKnVUaW1lICsgMy4wKnBvcy55KTtcclxuLy8gICAgICAgICBnbF9Qb3NpdGlvbi55ICs9IDAuMipzaW4oNi4wKnVUaW1lIC0gNi4wKnBvcy54KTtcclxuICAgIFxyXG4vLyAgICAgICAgIC8vIHRleHR1cmUgY29vcmRpbmF0ZSBpcyBqdXN0IHBvcyBidXQgd2l0aGluIDAtMSBpbnN0ZWFkIG9mIC0xIHRvIDEuXHJcbi8vICAgICAgICAgLy8gU28gc2NhbGUgaW4gdGhhdCByYW5nZS5cclxuLy8gICAgICAgICB2VGV4dHVyZUNvb3JkID0gKHBvcy54eSsxLikqMC41O1xyXG4vLyAgICAgfWAsXHJcbi8vICAgICBgI3ZlcnNpb24gMzAwIGVzXHJcbi8vICAgICBpbiBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmQ7XHJcbiAgICBcclxuLy8gICAgIG91dCBoaWdocCB2ZWM0IG91dENvbG9yO1xyXG4gICAgXHJcbi8vICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcclxuICAgIFxyXG4vLyAgICAgdm9pZCBtYWluKClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICAvLyBvdXRDb2xvciA9IHZlYzQodlRleHR1cmVDb29yZC54LCAwLjAsIDAuMCwgMS4wKTtcclxuLy8gICAgICAgICBvdXRDb2xvciA9IHRleHR1cmUodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpOy8vdmVjNCgxLCAwLCAwLjUsIDEpO1xyXG4vLyB9YCwgWyd1VGltZSddLCBbKCkgPT4ge3JldHVybiB3aW5kb3cuZnJhbWVzICogMTAwMCAvIDYwfV0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge2luaXROb25saW5lYXJUcmFuc2Zvcm0sIHVuSW5pdE5vbmxpbmVhclRyYW5zZm9ybX07XHJcblxyXG4vLyAvLyBDT05FIE1BUFxyXG4vLyB3aW5kb3cuaW5pdERpc3RvcnRpb24oYCN2ZXJzaW9uIDMwMCBlc1xyXG4vLyAgICAgaW4gaGlnaHAgdmVjNCBwb3M7XHJcbiAgICBcclxuLy8gICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICBcclxuLy8gICAgIG91dCBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmQ7XHJcbiAgICBcclxuLy8gICAgIHZvaWQgbWFpbigpXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgZmxvYXQgYW5nbGUgPSBhdGFuKHBvcy55LCBwb3MueCk7XHJcbi8vICAgICAgICAgZmxvYXQgZGlzdCA9IHNxcnQocG9zLnkqcG9zLnkgKyBwb3MueCpwb3MueCk7XHJcblxyXG4vLyAgICAgICAgIC8vIGNhbGN1bGF0aW5nIG1heCBkaXN0YW5jZSBhbG9uZyB0aGUgYW5nbGUgZnJvbSB0aGUgb3JpZ2luIHRvIGVuZCBvZiBzY3JlZW5cclxuXHJcbi8vICAgICAgICAgZmxvYXQgcCA9IG1heChhYnMoY29zKGFuZ2xlKSksIGFicyhzaW4oYW5nbGUpKSk7XHJcbi8vICAgICAgICAgLy8gZmxvYXQgbWF4RGlzdEFsb25nQW5nbGUgPSAwLjUvcDtcclxuXHJcbi8vICAgICAgICAgLy8gYWJvdmUgMiBsaW5lcyBlcXVpdmFsZW50IHRvOlxyXG4vLyAgICAgICAgIGZsb2F0IHggPSBjb3MoYW5nbGUpIC8gcDtcclxuLy8gICAgICAgICBmbG9hdCB5ID0gc2luKGFuZ2xlKSAvIHA7XHJcbi8vICAgICAgICAgZmxvYXQgbWF4RGlzdEFsb25nQW5nbGUgPSBzcXJ0KHgqeCArIHkqeSk7XHJcblxyXG4vLyAgICAgICAgIC8vIGp1c3Qgc2V0dGluZyB4LHkgdG8gZ2xfUG9zaXRpb24ueHkgcmVzdWx0cyBpbiBvdmFsIHNoYXBlLiBXaGF0IHdlJ3JlIGRvaW5nIGlzIGV4dHJ1ZGluZyB0byAzZC5cclxuLy8gICAgICAgICB4ID0gY29zKGFuZ2xlKSAqIGRpc3QgLyBtYXhEaXN0QWxvbmdBbmdsZTtcclxuLy8gICAgICAgICB5ID0gc2luKGFuZ2xlKSAqIGRpc3QgLyBtYXhEaXN0QWxvbmdBbmdsZTtcclxuLy8gICAgICAgICBmbG9hdCB6ID0gZGlzdCAvIG1heERpc3RBbG9uZ0FuZ2xlO1xyXG5cclxuLy8gICAgICAgICBmbG9hdCBhID0gMi47XHJcbi8vICAgICAgICAgZmxvYXQgYiA9IDMuMTQvNC47XHJcblxyXG4vLyAgICAgICAgIGZsb2F0IHNhID0gc2luKGEpO1xyXG4vLyAgICAgICAgIGZsb2F0IHNiID0gc2luKGIpO1xyXG4vLyAgICAgICAgIGZsb2F0IGNhID0gY29zKGEpO1xyXG4vLyAgICAgICAgIGZsb2F0IGNiID0gY29zKGIpO1xyXG5cclxuLy8gICAgICAgICBmbG9hdCBjb25lWCA9IHggKiBjYSAtIHkgKiBzYTtcclxuLy8gICAgICAgICBmbG9hdCBjb25lWSA9ICh4ICogc2EgKyB5ICogY2EpICogc2IgLSB6ICogY2I7XHJcblxyXG4vLyAgICAgICAgIGZsb2F0IHQgPSB1VGltZSAtIGZsb29yKHVUaW1lKTtcclxuXHJcbi8vICAgICAgICAgZ2xfUG9zaXRpb24gPSBwb3M7XHJcbi8vICAgICAgICAgZ2xfUG9zaXRpb24ueCA9IGNvbmVYICogdCArIHBvcy54ICogKDEuLXQpO1xyXG4vLyAgICAgICAgIGdsX1Bvc2l0aW9uLnkgPSBjb25lWSAqIHQgKyBwb3MueSAqICgxLi10KSArIC41O1xyXG4gICAgXHJcbi8vICAgICAgICAgLy8gdGV4dHVyZSBjb29yZGluYXRlIGlzIGp1c3QgcG9zIGJ1dCB3aXRoaW4gMC0xIGluc3RlYWQgb2YgLTEgdG8gMS5cclxuLy8gICAgICAgICAvLyBTbyBzY2FsZSBpbiB0aGF0IHJhbmdlLlxyXG4vLyAgICAgICAgIHZUZXh0dXJlQ29vcmQgPSAocG9zLnh5KzEuKSowLjU7XHJcbi8vICAgICB9YCxcclxuLy8gICAgIGAjdmVyc2lvbiAzMDAgZXNcclxuLy8gICAgIGluIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZDtcclxuICAgIFxyXG4vLyAgICAgb3V0IGhpZ2hwIHZlYzQgb3V0Q29sb3I7XHJcbiAgICBcclxuLy8gICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xyXG4gICAgXHJcbi8vICAgICB2b2lkIG1haW4oKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIC8vIG91dENvbG9yID0gdmVjNCh2VGV4dHVyZUNvb3JkLngsIDAuMCwgMC4wLCAxLjApO1xyXG4vLyAgICAgICAgIG91dENvbG9yID0gdGV4dHVyZSh1U2FtcGxlciwgdlRleHR1cmVDb29yZCk7Ly92ZWM0KDEsIDAsIDAuNSwgMSk7XHJcbi8vIH1gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///964\n")}}]);