import noise from "../eXclient/extras/noise.js";

// const placeholder = document.getElementById('canvasPlaceholder');
let canvas = document.createElement('canvas');
canvas.id = 'canvas';

document.body.insertBefore(canvas, document.body.firstChild);

let ctx = canvas.getContext('2d');

const scaleMult = 0.25;
const divisor = 700 * scaleMult;
const width = 960 * 2 * scaleMult;
const height = 540 * 2 * scaleMult;

function resize(elements) {
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
            Math.max(window.innerWidth / width, window.innerHeight / height) *
            scaleMult
        })`;
        element.style.left = `${(window.innerWidth - width) / 2}px`;
        element.style.top = `${(window.innerHeight - height) / 2}px`;
    }
    return Math.max(window.innerWidth / width, window.innerHeight / height);
};

window.onresize = () => {
    resize([canvas]);

    image = ctx.createImageData(canvas.width, canvas.height);
    data = image.data;
}
resize([canvas]);

let image = ctx.createImageData(canvas.width, canvas.height);
let data = image.data;

let z = 0;

const path = location.href.split('/');
const subPath = path[path.length-1];

function drawFrame() {
    let cWidth = canvas.width;
    let cHeight = canvas.height;
  
    let noisefn = noise.simplex3;
    let value, cell;
    for (let x = 0; x < cWidth; x++) {
      for (let y = 0; y < cHeight; y++) {
          value = (noisefn(x / divisor, y / divisor, z / divisor)+0.5) ** 2 * 255;
          cell = (x + y * cWidth) * 4;
          if(subPath === 'login'){
            data[cell+2] = value;
            data[cell] = data[cell + 1] = 0;
          } else {
            data[cell+1] = value;
            data[cell] = data[cell + 2] = 0;
          }
          
          data[cell + 3] = 255;
      }
    }
  
    ctx.fillColor = 'black';
    ctx.fillRect(0, 0, 100, 100);
    ctx.putImageData(image, 0, 0);
  
    z++;
    requestAnimationFrame(drawFrame);
}

drawFrame();