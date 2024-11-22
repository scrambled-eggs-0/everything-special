if(window.isServer !== true){

var counter = 10000;// add 1000 for every new map so color changers dont conflict

var obs = [
    {
        "x": 4000,
        "y": 1100,
        "w": 1600,
        "h": 900,
        "type": "zone",
        "value": 2,
        "inView": true
    },
    {
        "x": 750,
        "y": 1050,
        "w": 1600,
        "h": 900,
        "type": "zone",
        "value": 1,
        "inView": true
    },
    {
        "x": -75,
        "y": -75,
        "w": 825,
        "h": 3200,
        "type": "normal",
        "canJump": true,
        "sat": {
            "pos": {
                "x": -75,
                "y": -75
            },
            "angle": 0,
            "offset": {
                "x": 0,
                "y": 0
            },
            "calcPoints": [
                {
                    "x": 0,
                    "y": 0
                },
                {
                    "x": 825,
                    "y": 0
                },
                {
                    "x": 825,
                    "y": 3200
                },
                {
                    "x": 0,
                    "y": 3200
                }
            ],
            "edges": [
                {
                    "x": 825,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": 3200
                },
                {
                    "x": -825,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": -3200
                }
            ],
            "normals": [
                {
                    "x": 0,
                    "y": -1
                },
                {
                    "x": 1,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": 1
                },
                {
                    "x": -1,
                    "y": 0
                }
            ],
            "points": [
                {
                    "x": 0,
                    "y": 0
                },
                {
                    "x": 825,
                    "y": 0
                },
                {
                    "x": 825,
                    "y": 3200
                },
                {
                    "x": 0,
                    "y": 3200
                }
            ]
        },
        "inView": true
    },
    {
        "x": 675,
        "y": 1950,
        "w": 2100,
        "h": 1150,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 2350,
        "y": -100,
        "w": 1450,
        "h": 3225,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 625,
        "y": -150,
        "w": 2175,
        "h": 1200,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "points": [
            [
                3800,
                550
            ],
            [
                4550,
                550
            ],
            [
                3800,
                1300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3800,
            "right": 4550,
            "top": 550,
            "bottom": 1300
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                5050,
                550
            ],
            [
                5800,
                550
            ],
            [
                5800,
                1300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5050,
            "right": 5800,
            "top": 550,
            "bottom": 1300
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                3800,
                1800
            ],
            [
                4550,
                2550
            ],
            [
                3800,
                2550
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3800,
            "right": 4550,
            "top": 1800,
            "bottom": 2550
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                5800,
                1800
            ],
            [
                5800,
                2550
            ],
            [
                5050,
                2550
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5050,
            "right": 5800,
            "top": 1800,
            "bottom": 2550
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 3650,
        "y": 2550,
        "w": 2350,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 5800,
        "y": -25,
        "w": 1700,
        "h": 3100,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 3600,
        "y": -225,
        "w": 2375,
        "h": 775,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 7400,
        "y": -150,
        "w": 2675,
        "h": 1600,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 7350,
        "y": 1650,
        "w": 2600,
        "h": 1375,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 7700,
        "y": 1425,
        "w": 2600,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 9750,
        "y": 1825,
        "w": 550,
        "h": 1125,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 7500,
        "y": 1450,
        "w": 200,
        "h": 200,
        "type": "zone",
        "value": 3,
        "inView": true
    },
    {
        "x": 9950,
        "y": 2950,
        "w": 50,
        "h": 50,
        "type": "winpad",
        "inView": true
    },

    // {"type":"poly-safe","points":[[4762.5,1450],[4837.5,1450],[4900,1512.5],[4900,1587.5],[4837.5,1650],[4762.5,1650],[4700,1587.5],[4700,1512.5]]}
]

var dt = 1000 / 60;
window.time = window.frames / 60;

var mainSafeCollided=false;
var thisFrameCol=false;
C(2,[],[11],{x:0,y:0,points:[
    [
        9525,
        2900
    ],
    [
        9675,
        2900
    ],
    [
        9800,
        3025
    ],
    [
        9800,
        3175
    ],
    [
        9675,
        3300
    ],
    [
        9525,
        3300
    ],
    [
        9400,
        3175
    ],
    [
        9400,
        3025
    ]
], sf:()=>{
    mainSafeCollided = thisFrameCol;
    thisFrameCol = false;
    window.time = window.frames / 60;
}, cr:(o)=>{
    ctx.beginPath();
    o.renderShape(o);
    o.renderEffect[0](o);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}});
// remove custom render
obstacles[obstacles.length-1].effect.push(()=>{thisFrameCol = true;});

// C(0,[],[20], {
//     x: 9600, y: 3100,
//     r: 50,
//     hex: '#000000',
//     alpha: 1,
// })

// EFFECTMAPI2N
// 0:"bound"
// 1:"kill"
// 2:"bounce"
// 3:"custom"
// 4:"customImage"
// 5:"stopForces"
// 6:"winpad"
// 7:"coin"
// 8:"coindoor"
// 9:"checkpoint"
// 10:"breakable"
// 11:"safe"
// 12:"tp"
// 13:"conveyor"
// 14:"platformer"
// 15:"restrictAxis"
// 16:"snapGrid"
// 17:"timeTrap"
// 18:"changeSize"
// 19:"changeSpeed"
// 20:"solidColor"
// 21:"decoration"
// 22:"changeMap"
// 23:"tornado"
// 24:"changeVignette"
// 25:"pushable"
// 26:"changeMusic"
// 27:"changeShip"

// SATMAPI2N
// 0: "circle"
// 1: "rectangle"
// 2: "polygon"
// 3: "text"
// 4: "circleSlice"

// C(0,[],[1], {
//     x: 9350, y: 3000, r: 50,
//     collidable: false
// })

// C(0,[],[0], {
//     x: 9850, y: 3050, r: 50
// })

// C(0,[],[12], {
//     x: 9600, y: 3350, r: 50,
//     tpx: 9600, tpy: 3100
// })

// C(0,[],[2], {
//     x: 9650, y: 2850, r: 50,
//     bounciness: 1, decay: 0.98
// })

// first layer, mostly 100x100 circles.

//// random obstacle generator, scrapped bc i want it to feel more natural
// const circle = {
//     x: 9600,y:3100,r:2000
// };
// let randStr = '';
// const excludedEffects = [3/*custom*/, 4/*customImage*/, 13/*conveyor*/, 21/*decoration*/, 22/*changeMap*/, 26/*changeMusic*/, 6/*winpad*/];
// for(let x = 7600; x <= 11600; x += 200){
//     for(let y = 1100; y < 5100; y += 200){
//         const angle = Math.random() * Math.PI * 2;
//         const r = Math.sqrt(Math.random()) * circle.r;
        
//         let x = circle.x + Math.cos(angle) * r;
//         let y = circle.y + Math.sin(angle) * r;
//         x = Math.round((x-20) / 100) * 100;
//         y = Math.round((y-20) / 100) * 100;

//         const shapeOptions = [0,1,2,4];
//         const shape = shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
//         const shapeDefaults = window.satDefaultMap[shape];

//         // let simulate = '';
//         // let simulateDefaults = {};
//         // while(Math.random() < 0.1){
//         //     const newSimulate = Math.floor(Math.random() * (window.simulateDefaultMap.length - 1));
//         //     simulate += newSimulate + ',';
//         //     for(let key in window.simulateDefaultMap[newSimulate]){
//         //         simulateDefaults[key] = window.simulateDefaultMap[newSimulate][key];
//         //     }
//         // }

//         let effect = '';
//         let effectDefaults = {};
//         let freebie = true;
//         while(freebie === true || Math.random() < 0.1){
//             freebie = false;
//             let newEffect;
//             do {
//                 newEffect = Math.floor(Math.random() * window.effectDefaultMap.length);
//             } while(excludedEffects.includes(newEffect))
//             effect += newEffect + ',';
//             for(let key in window.effectDefaultMap[newEffect]){
//                 effectDefaults[key] = window.effectDefaultMap[newEffect][key];
//             }
//         }

//         // simulate = simulate.substring(0,simulate.length-1);
//         effect = effect.substring(0,effect.length-1);

//         let obj = {...shapeDefaults, /*...simulateDefaults,*/ ...effectDefaults, x:x, y:y, pivotX: x, pivotY: y, r:100,w:200,h:200,innerRadius: 120};

//         if(shape === 0){
//             obj.x += 100;
//             obj.y += 100;
//         } else if(shape === 2){
//             // poly

//         }

//         randStr += `C(${shape},[],[${effect}],${JSON.stringify(obj)})\n`;
//     }
    
// }

// console.log(randStr);
// eval(randStr);

var simulateMapN2I = {};
for(let i = 0; i < simulateMapI2N.length; i++){
    simulateMapN2I[simulateMapI2N[i]] = i;
}

var effectMapN2I = {};
for(let i = 0; i < effectMapI2N.length; i++){
    effectMapN2I[effectMapI2N[i]] = i;
}

var shapeOptions = [0,1,2,4];
function randomShape(){
    return shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
}

var pointsOptions = [
    // spike
    [[0,0],[200,0],[100,200]],

    // diamond
    [[0,100],[100,200],[200,100],[100,0]],

    // trapezoid or rhombus or whatever its called
    [[0,50],[0,150],[200,200],[200,0]],

    // smol > (like zerotix)
    [[50,50],[50,150],[150,100]],
]

var l = pointsOptions.length;
for(let i = 0; i < l; i++){
    // making rotations
    const p = pointsOptions[i];
    pointsOptions.push(rotatePts(p));
    pointsOptions.push(rotatePts(pointsOptions[pointsOptions.length-1]));
    pointsOptions.push(rotatePts(pointsOptions[pointsOptions.length-1]));
}
function rotatePts(pts){
    // rotate by 90 deg, idk which way
    return pts.map((p) => {
        let c = [p[0], p[1]];
        c[0] -= 100;
        c[1] -= 100;
        return [
            -c[1]+100,
            c[0]+100,
        ]
    });
}

window.obsArr = [];
function createAtPos(effectName, shape=randomShape(), simulateName=undefined, extraParams=undefined){
    let effect = effectMapN2I[effectName];
    let simulate = simulateName === undefined ? undefined : simulateMapN2I[simulateName];

    const p = players[selfId];
    let x = Math.round(p.pos.x / 100) * 100 - 100;
    let y = Math.round(p.pos.y / 100) * 100 - 100;

    let params = {};

    if(shape === 0){
        // circle
        x += 100;
        y += 100;
        params.r = 100;
    } else if(shape === 1){
        // rect
        params.w = 200;
        params.h = 200;
    } else if(shape === 2){
        // poly
        params.points = structuredClone(pointsOptions[Math.floor(Math.random() * pointsOptions.length)]);

        for(let i = 0; i < params.points.length; i++){
            const pt = params.points[i];

            pt[0] += x;
            pt[1] += y;
        }
        x = y = 0;
    } else if(shape === 4){
        // circleSlice
        x += 100;
        y += 100;
        params.r = 100;
        params.innerRadius = Math.random() * 100;
        params.startSliceAngle = Math.random() * Math.PI * 2;
        params.endSliceAngle = Math.random() * Math.PI * 2;
        if(Math.random() < 0.38){
            params.endSliceAngleRotateSpeed = (Math.random()-.5) / 100;
            params.startSliceAngleRotateSpeed = (Math.random()-.5) / 100;
        } else {
            params.endSliceAngleRotateSpeed = params.startSliceAngleRotateSpeed = 0;
        }
    }

    params = {...params, ...window.effectDefaultMap[effect], x, y};
    if(simulate !== undefined){
        params = {...params, ...window.simulateDefaultMap[simulate]};
    }

    if(extraParams !== undefined){
        for(let key in extraParams){
            params[key] = extraParams[key];
        }
    }

    const add2str = `C(${shape},[${simulate === undefined ? '' : simulate}],[${effect}],${JSON.stringify(params)})`;
    window.obsArr.push(add2str);

    console.log(add2str);
    eval(add2str);
}

function undoCreate(){
    obstacles.pop();
    window.obsArr.pop();
}

function modifyLast(newText){
    obstacles.pop();
    window.obsArr.pop();

    eval(newText);
    window.obsArr.push(newText);
}

function createRawFromText(txt){
    eval(txt);
    window.obsArr.push(txt);
}

// C(1,[],[28],)

// LAYER 0
// C(2,[],[1],{"points":[[9400,2900],[9200,2900],[9300,2700]],"boundPlayer":true,"x":0,"y":0})
// C(0,[],[2],{"r":100,"bounciness":1,"decay":0.98,"x":9900,"y":2800})
// C(1,[],[0],{"w":200,"h":200,"x":9200,"y":3300})

// LAYER 1
/*
[
    "C(2,[],[1],{\"points\":[[9400,2900],[9200,2900],[9300,2700]],\"boundPlayer\":true,\"x\":0,\"y\":0})",
    "C(0,[],[2],{\"r\":100,\"bounciness\":1,\"decay\":0.98,\"x\":9900,\"y\":2800})",
    "C(1,[],[0],{\"w\":200,\"h\":200,\"x\":9200,\"y\":3300})",
    "C(4,[],[12],{\"r\":100,\"innerRadius\":40.64241808749951,\"startSliceAngle\":0.30379966049688445,\"endSliceAngle\":1.0130537215644402,\"endSliceAngleRotateSpeed\":0.004801857239320743,\"startSliceAngleRotateSpeed\":-0.0004234700543029213,\"tpx\":100,\"tpy\":100,\"x\":9900,\"y\":3400})",
    "C(1,[],[16],{\"w\":200,\"h\":200,\"toSnapX\":true,\"toSnapY\":true,\"snapDistanceX\":100,\"snapDistanceY\":100,\"snapCooldown\":40,\"snapAngle\":0,\"snapAngleRotateSpeed\":0,\"x\":9500,\"y\":3400})",
    "C(0,[],[7],{\"r\":100,\"coinAmount\":1,\"color\":\"#d6d611\",\"x\":9200,\"y\":3100})",
    "C(4,[],[8],{\"r\":100,\"innerRadius\":80,\"startSliceAngle\":0.38006924183255364,\"endSliceAngle\":5.781138491161774,\"startSliceAngleRotateSpeed\":0,\"endSliceAngleRotateSpeed\":0,\"coindoorCoinAmount\":3,\"coinDoorColor\":\"#d6d611\",\"x\":10000,\"y\":3100})",
    "C(2,[],[10],{\"points\":[[9600,2800],[9700,2700],[9600,2600],[9500,2700]],\"maxStrength\":60,\"regenTime\":100,\"healSpeed\":1,\"x\":0,\"y\":0})"
]
*/

// `var tutorialMorphTriggered = false;
// C(1,[],[5],{h:200,w:200,y:2700,x:8900,
//     cr:(e)=>{
//         ctx.globalAlpha = 0.8;
//         if (tutorialMorphTriggered === true) {
//             ctx.globalAlpha = 0.3;
//         }

//         ctx.strokeStyle = ctx.fillStyle = 'white';

//         let [topX, topY] = generateTopLeftCoordinates(e);

//         ctx.fillRect(topX, topY, e.dimensions.x, e.dimensions.y);
//         ctx.globalAlpha *= 1 / 0.8;
//         ctx.strokeRect(topX, topY, e.dimensions.x, e.dimensions.y);

//         ctx.fillStyle = colors.tile;
//         ctx.fillRect(
//             topX + 15,
//             topY + 15,
//             e.dimensions.x - 30,
//             e.dimensions.y - 30
//         );

//         ctx.globalAlpha = 1;
//     },
//     ef:(e) => {
//         tutorialMorphTriggered = true;    
//     }
// });`

// `var tutorialMorphTriggered = false;
// C(0,[],[0],{r:100,y:3100,x:8900,
//     cr:(e)=>{
//         if(tutorialMorphTriggered){
//             e.pos.x = -1E9;
//             return;
//         }
//         ctx.beginPath();
//         let [middleX, middleY] = generateTopLeftCoordinates(e);
//         middleX += e.dimensions.x / 2;
//         middleY += e.dimensions.y / 2;
//         ctx.translate(middleX, middleY);
//         ctx.fillStyle = colors.tile;
//         for(let i = 0; i < 100; i++){
//             const t = Math.PI * 2 * i / 100;
//             const a = Math.sin(window.time / 1000) * 8;

//             let x = Math.cos(t) * 100 * (Math.cos(8*t + a) / 8 + 0.9);
//             let y = Math.sin(t) * 100 * (Math.sin(8*t + a) / 8 + 0.9);

//             if(i === 0){
//                 ctx.moveTo(x,y);
//             } else {
//                 ctx.lineTo(x,y);
//             }
//         }
//         ctx.fill();
//         ctx.closePath();
//         ctx.translate(-middleX, -middleY);
//     }
// });`;

// `C(0,[],[3],{
//     x:9900,y:3700,r:100,ef:()=>{
//         if(window.camera.scale>0.3){changeCameraScale(window.camera.scale*0.999);}
//         else {changeCameraScale(0.5)}
//     }
// })`

// // These 2 make up sentry

// `C(1,[5],[1],{h:60,w:200,y:2500-30,x:10000,
//     boundPlayer: true,
//     restAngles: [0, Math.PI],
//     toRest: true,
//     homingRotateSpeed: 0.01,
//     detectionRadius: 100,
//     spokeAngles: [0, Math.PI],
//     pivotX: 10100,
//     pivotY: 2500
// });`
// `C(0,[],[0],{x:10100,y:2500,r:42,cr:(e)=>{
//     ctx.fillStyle = window.colors.tile;
//     ctx.beginPath();
//     ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();

//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 15;
//     ctx.beginPath();
//     ctx.arc(
//         e.pos.x,
//         e.pos.y,
//         Math.max(e.sat.r - 30, 0),
//         0,
//         Math.PI * 2
//     );
//     ctx.stroke();
//     ctx.closePath();
// }});`

//httups://www.youtube.com/watch?v=LlXqegSTUr0

// // LAYER 2


window.obsArr.push(...[
    "C(2,[],[1],{\"points\":[[9400,2900],[9200,2900],[9300,2700]],\"boundPlayer\":true,\"x\":0,\"y\":0})",
    "C(0,[],[2],{\"r\":100,\"bounciness\":1,\"decay\":0.98,\"x\":9900,\"y\":2800})",
    "C(1,[],[0],{\"w\":200,\"h\":200,\"x\":9200,\"y\":3300})",
    "C(4,[],[12],{\"r\":100,\"innerRadius\":40.64241808749951,\"startSliceAngle\":0.30379966049688445,\"endSliceAngle\":1.0130537215644402,\"endSliceAngleRotateSpeed\":0.004801857239320743,\"startSliceAngleRotateSpeed\":-0.0004234700543029213,\"tpx\":9600,\"tpy\":3100,\"x\":9900,\"y\":3400})",
    "C(1,[],[16],{\"w\":200,\"h\":200,\"toSnapX\":true,\"toSnapY\":true,\"snapDistanceX\":100,\"snapDistanceY\":100,\"snapCooldown\":676,\"snapAngle\":0,\"snapAngleRotateSpeed\":-0.023,\"x\":9500,\"y\":3400})",
    "C(0,[],[7],{\"r\":100,\"coinAmount\":3,\"color\":\"#d6d611\",\"x\":9200,\"y\":3100})",
    "C(4,[],[8],{\"r\":100,\"innerRadius\":80,\"startSliceAngle\":0.38006924183255364,\"endSliceAngle\":5.781138491161774,\"startSliceAngleRotateSpeed\":0,\"endSliceAngleRotateSpeed\":0,\"coindoorCoinAmount\":3,\"coinDoorColor\":\"#d6d611\",\"x\":10000,\"y\":3100})",
    "C(2,[],[10],{\"points\":[[9500,2700],[9600,2800],[9700,2700],[9600,2600]],\"maxStrength\":1000,\"regenTime\":600,\"healSpeed\":0.6,\"x\":0,\"y\":0})",
    "C(0,[],[13],{\"r\":100,\"conveyorForce\":0.3,\"conveyorAngle\":90,\"conveyorAngleRotateSpeed\":0,\"conveyorFriction\":0.8,\"x\":9400,\"y\":2500})",
    "C(4,[],[15],{\"r\":100,\"innerRadius\":15.551755296935532,\"startSliceAngle\":0.5554132385054658,\"endSliceAngle\":5.067483808732879,\"endSliceAngleRotateSpeed\":0.0031502474922624635,\"startSliceAngleRotateSpeed\":0.0001404600416380597,\"axisSpeedMultX\":0,\"axisSpeedMultY\":1,\"x\":9800,\"y\":2500})",
    "C(1,[],[27],{\"w\":200,\"h\":200,\"changeShipStateTo\":true,\"initialShipAngle\":-Math.PI/2,\"shipTurnSpeed\":0.0031415926535897934,\"x\":10100,\"y\":2700})",
    "C(0,[],[27],{\"r\":100,\"changeShipStateTo\":false,\"initialShipAngle\":0,\"shipTurnSpeed\":0.031415926535897934,\"x\":10300,\"y\":3100})",
    "C(2,[],[18],{\"points\":[[10100,3500],[10150,3300],[10250,3300],[10300,3500]],\"sizeMult\":0.5,\"sizeChangePermanent\":false,\"x\":0,\"y\":0})",
    "C(0,[],[4],{\"r\":100,\"url\":\"https://images.pexels.com/photos/12043242/pexels-photo-12043242.jpeg\",\"x\":9000,\"y\":3400})",
    "C(4,[],[23],{\"r\":100,\"innerRadius\":0,\"startSliceAngle\":5.3197196411114005,\"endSliceAngle\":0.6615698517358614,\"endSliceAngleRotateSpeed\":-0.0021034335423010786,\"startSliceAngleRotateSpeed\":-0.000723994345467791,\"tornadoStrength\":7,\"x\":9300,\"y\":3700})",
    "var tutorialMorphTriggered = false;\nC(1,[],[5],{h:200,w:200,y:2700,x:8900,\n    cr:(e)=>{\n        ctx.globalAlpha = 0.8;\n        if (tutorialMorphTriggered === true) {\n            ctx.globalAlpha = 0.3;\n        }\n\n        ctx.strokeStyle = ctx.fillStyle = 'white';\n\n        let topX = e.topLeft.x; let topY = e.topLeft.y;\n\n        ctx.fillRect(topX, topY, e.dimensions.x, e.dimensions.y);\n        ctx.globalAlpha *= 1 / 0.8;\n        ctx.strokeRect(topX, topY, e.dimensions.x, e.dimensions.y);\n\n        ctx.fillStyle = colors.tile;\n        ctx.fillRect(\n            topX + 15,\n            topY + 15,\n            e.dimensions.x - 30,\n            e.dimensions.y - 30\n        );\n\n        ctx.globalAlpha = 1;\n    },\n    ef:(e) => {\n        tutorialMorphTriggered = true;    \n    }\n});",
    "var tutorialMorphTriggered = false;\nC(0,[],[0],{r:100,y:3100,x:8900,\n    cr:(e)=>{\n        if(tutorialMorphTriggered){\n            e.pos.x = -1E9;\n            return;\n        }\n        ctx.beginPath();\n        let middleX = e.topLeft.x; let middleY = e.topLeft.y;\n        middleX += e.dimensions.x / 2;\n        middleY += e.dimensions.y / 2;\n        ctx.translate(middleX, middleY);\n        ctx.fillStyle = colors.tile;\n        for(let i = 0; i < 100; i++){\n            const t = Math.PI * 2 * i / 100;\n            const a = Math.sin(window.time / 1000) * 8;\n\n            let x = Math.cos(t) * 100 * (Math.cos(8*t + a) / 8 + 0.9);\n            let y = Math.sin(t) * 100 * (Math.sin(8*t + a) / 8 + 0.9);\n\n            if(i === 0){\n                ctx.moveTo(x,y);\n            } else {\n                ctx.lineTo(x,y);\n            }\n        }\n        ctx.fill();\n        ctx.closePath();\n        ctx.translate(-middleX, -middleY);\n    }\n});",
    "C(2,[1],[0],{\"points\":[[9500,3850],[9500,3750],[9700,3700],[9700,3900]],\"x\":0,\"y\":0,\"initialRotation\":0,\"rotateSpeed\":0.001,\"pivotX\":9600,\"pivotY\":3800})",
    "C(0,[],[5],{\"r\":100,\"x\":9100,\"y\":2500})",
    "C(1,[5],[1],{h:60,w:200,y:2500-30,x:10000,\n    boundPlayer: true,\n    restAngles: [0, Math.PI],\n    toRest: true,\n    homingRotateSpeed: 0.0007,\n    detectionRadius: 150,\n    spokeAngles: [0, Math.PI],\n    pivotX: 10100,\n    pivotY: 2500\n});",
    "C(0,[],[0],{x:10100,y:2500,r:59,cr:(e)=>{\n    ctx.fillStyle = window.colors.tile;\n    ctx.beginPath();\n    ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.closePath();\n\n    ctx.strokeStyle = 'red';\n    ctx.lineWidth = 15;\n    ctx.beginPath();\n    ctx.arc(\n        e.pos.x,\n        e.pos.y,\n        Math.max(e.sat.r - 30, 0),\n        0,\n        Math.PI * 2\n    );\n    ctx.stroke();\n    ctx.closePath();\n}});",
    "C(1,[],[17],{\"w\":200,\"h\":200,\"timeTrapMaxTime\":1000,\"timeTrapRecoverySpeed\":3,\"timeTrapToKill\":true,\"timeTrapToShowTenth\":true,\"x\":9200,\"y\":2100})",
    // "C(0,[],[26],{\"r\":100,\"musicPath\":\"https://www.youtube.com/watch?v=LlXqegSTUr0\",\"x\":9600,\"y\":3100})", // what we did in the desert is goated asf
    "C(4,[],[9],{\"r\":100,\"innerRadius\":0,\"startSliceAngle\":0,\"endSliceAngle\":Math.PI*3/2,\"endSliceAngleRotateSpeed\":-0.001,\"startSliceAngleRotateSpeed\":-0.001,\"checkpointOffsetX\":0,\"checkpointOffsetY\":0,\"x\":9600,\"y\":2200})",
    "C(2,[],[25],{\"points\":[[10000,2100],[10000,2300],[9800,2200]],\"pushAngle\":0,\"maxPushDistance\":100,\"idlePushBackSpeed\":0.25,\"positiveDirectionOnly\":false,\"pushConversionRatio\":0.8,\"x\":0,\"y\":0})"
])

// // LAYER 2.5 
window.obsArr.push(...[
    `C(0,[2],[1],{"r":100,"boundPlayer":false,"x":8700,"y":3400,"growSpeed":0.0006,"shrinkSpeed":0.0006,"maxGrowth":1,"minGrowth":0.5,"startGrowth":1,"toStartGrowing":true})`,
    `C(2,[],[19],{"points":[[8900,3600],[9100,3600],[9000,3800]],"speedMult":2.5,"speedChangePermanent":false,"x":0,"y":0})`,
    `C(0,[],[15],{"r":100,"axisSpeedMultX":-1,"axisSpeedMultY":-1,"x":10200,"y":3700})`,
    `C(0,[2],[1],{"r":100,"boundPlayer":false,"x":8700,"y":3400,"growSpeed":0.0006,"shrinkSpeed":0.0006,"maxGrowth":1,"minGrowth":0.5,"startGrowth":1,"toStartGrowing":true})`,
    `C(0,[0],[16],{
        x: 10500, y: 2800, r: 100,
        snapDistanceX: 100, snapDistanceY: 100,
        toSnapX: false,
        toSnapY: true,
        snapDistanceX: 100,
        snapDistanceY: 100,
        snapCooldown: 800,
        snapAngle: 0, snapAngleRotateSpeed: 0,
        currentPoint: 0,
        path: [[0,0,0.3],[100,300,0.3]]
    })`,
    `C(1,[1],[12],{
        x: 8700, y: 2450,
        w: 200, h: 100,
        initialRotation: 0,
        rotateSpeed: 0.0016,
        pivotX: 8800,
        pivotY: 2500,
        tpx: 9600, tpy: 3100
    })`,
    "C(2,[],[18],{\"points\":[[10600,3300],[10550,3500],[10450,3500],[10400,3300]],\"sizeMult\":1.2,\"sizeChangePermanent\":true,\"x\":0,\"y\":0})",
    "C(1,[],[28],{h:200,w:200,y:2700,x:8600,changeGrappleStateTo: true, grappleRange: 488, grappleForce: 0.008, grappleFric: 0.99});",
    "C(0,[],[28],{h:70.71*2,w:70.71*2,y:3100,x:8600,r:100,changeGrappleStateTo: false, grappleRange: 488, grappleForce: 0.08, grappleFric: 0.99});",
    `C(1,[],[29],{"w":200,"h":200,"changeDeathTimerStateTo":true,"drainAmountWhileStandingOn":0,"deathTime":10,"x":10300,"y":2400})`,
    `C(0,[],[29],{"r":100,"changeDeathTimerStateTo":false,"drainAmountWhileStandingOn":0,"deathTime":10,"x":10200,"y":2200})`,
    `var ang = Math.random() * Math.PI * 2;
    var mag = 0.3;
    var xv_ = Math.cos(ang) * mag;
    var yv_ = Math.sin(ang) * mag;
    var topX = 0;
    var topY = 0;
    C(0,[],[1],{r:30,y:3700,x:8700,collidable:false,sf:(e)=>{
        window.time = Date.now();
        e.pos.y += yv_ * dt;
        e.pos.x += xv_ * dt;
        topX = e.pos.x; topY = e.pos.y;
        if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
            xv_ = xv_ * -1;
            e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
            e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
        }
        if ((e.pos.y - e.sat.r) < 3600 || e.pos.y + e.sat.r > 3800) {
            yv_ = yv_ * -1;
            e.pos.y = Math.max(3600 + e.sat.r, e.pos.y);
            e.pos.y = Math.min(3800 - e.sat.r, e.pos.y);
        }
    }});`,

    // pass a ball between this one and the above.
    `C(0,[],[1],{r:30,y:3700,x:8700,collidable:false,sf:(e)=>{
        e.pos.x = topX - 300;
        e.pos.y = topY + 300;
    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#9e1200';
        
        ctx.beginPath();
        ctx.arc(o.pos.x,o.pos.y,o.sat.r,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});`,

    // the ball
    `C(0,[],[1],{r:30,y:3700,x:8700,collidable:true,sf:(e)=>{
        let t = (window.time / 500) % 2;
        if(t > 1) t = 2 - t; 
        e.pos.x = topX + t * (-300);
        e.pos.y = topY + t * (300);
    },cr:(o)=>{
        let t = (window.time / 500) % 2;
        if(t > 1) t = 2 - t; 
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = blendColor('#9e1200','#9e0000',1-t);
        
        ctx.beginPath();
        ctx.arc(o.pos.x,o.pos.y,o.sat.r,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});`,

    `var ang2 = Math.random() * Math.PI * 2;
    var mag2 = 0.3;
    var xv2_ = Math.cos(ang2) * mag2;
    var yv2_ = Math.sin(ang2) * mag2;
    C(0,[],[1],{r:27,y:3700,x:8700,collidable:false,sf:(e)=>{
        e.pos.y += yv2_ * dt;
        e.pos.x += xv2_ * dt;
        if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
            xv2_ = xv2_ * -1;
            e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
            e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
        }
        if ((e.pos.y - e.sat.r) < 3600 || e.pos.y + e.sat.r > 3800) {
            yv2_ = yv2_ * -1;
            e.pos.y = Math.max(3600 + e.sat.r, e.pos.y);
            e.pos.y = Math.min(3800 - e.sat.r, e.pos.y);
        }
    }});`,
    `var ang3 = Math.random() * Math.PI * 2;
    var mag3 = 0.3;
    var xv3_ = Math.cos(ang3) * mag3;
    var yv3_ = Math.sin(ang3) * mag3;
    C(0,[],[1],{r:24,y:3700,x:8700,collidable:false,sf:(e)=>{
        e.pos.y += yv3_ * dt;
        e.pos.x += xv3_ * dt;
        if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
            xv3_ = xv3_ * -1;
            e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
            e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
        }// TODO: min and max because now pos isnt consistent so things can get stuck in a wall
        if ((e.pos.y - e.sat.r) < 3600 || e.pos.y + e.sat.r > 3800) {
            yv3_ = yv3_ * -1;
            e.pos.y = Math.max(3600 + e.sat.r, e.pos.y);
            e.pos.y = Math.min(3800 - e.sat.r, e.pos.y);
        }
    }});`,
    `C(1,[],[0,2],{"w":200,"h":200,"x":8900,"y":2100,"bounciness":0.3,"decay":0.996})`,

    // weirdGrid (made after all obs around here but put here because layering w/ pushboxes breaks illusion)
    `var weirdAngle; C(1,[],[3],{x:11000+2,y:3600+2,w:200-4,h:200-4,cr:(o)=>{
        ctx.fillStyle = colors.background;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);

        const weirdAngle = (window.time / 1000) % (Math.PI * 2);
        const mag = 35;

        const pts = [
            [o.pos.x,o.pos.y + o.dimensions.y/2],
            [o.pos.x + o.dimensions.x/2,o.pos.y],
            [o.pos.x + o.dimensions.x, o.pos.y + o.dimensions.y/2],
            [o.pos.x + o.dimensions.x/2, o.pos.y + o.dimensions.y]
        ]

        const midX = o.pos.x + o.dimensions.x/2;
        const midY = o.pos.y + o.dimensions.y/2
        ctx.lineWidth = 4;
        ctx.strokeStyle = colors.tile;
        for(let i = 0; i < pts.length; i++){
            ctx.beginPath();
            ctx.moveTo(pts[i][0], pts[i][1]);
            ctx.quadraticCurveTo(midX, midY, midX + Math.cos(weirdAngle) * mag, midY + Math.sin(weirdAngle) * mag);
            ctx.stroke();
            ctx.closePath();
        }
    }})`,

    // pushBoxButton
    `var btnsPressed=0;var proTxt;var pbButtonSteppedOn=false;var pbButtonActivated=false;C(1,[],[3],{
        x: 9800, y: 4200, w: 200, h: 200,
        cr: (o) => {
            ctx.globalAlpha = 0.8;
            if (pbButtonSteppedOn === true || pbButtonActivated === true) {
                ctx.globalAlpha = 0.3;
            }

            ctx.fillStyle = 'white';
            if (pbButtonSteppedOn === true && pbButtonActivated === false) {ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.3); ctx.globalAlpha = 0.8;}
            else if(pbButtonActivated === true) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.5);}

            // outside
            ctx.fillRect(o.pos.x, o.pos.y, 200, 200);

            // grey inside
            if(!pbButtonActivated) ctx.globalAlpha = 1;
            ctx.fillStyle = colors.tile;
            ctx.fillRect(
                o.pos.x + 15,
                o.pos.y + 15,
                200 - 30,
                200 - 30
            );

            // rim
            ctx.globalAlpha = 0.5;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'white';
            ctx.strokeRect(
                o.pos.x + 23,
                o.pos.y + 23,
                200 - 46,
                200 - 46
            );
            ctx.globalAlpha = 1;
            // ctx.globalAlpha = 1;
            // if (pbButtonSteppedOn === false && pbButtonActivated === false) {
            //     ctx.globalAlpha = 0.3;
            // }

            // colors.tile = '#55894d'
            // colors.background = '#8bc482'

            pbButtonSteppedOn = false;
        },
        sf: (o) => {
            const res = new SAT.Response();
            let colliding = false;

            collided = SAT.testPolygonCircle(o.sat, pushCircle.sat, res);

            if(collided === false){
                res.clear();

                collided = SAT.testPolygonPolygon(pushBox.sat, o.sat, res);
            }

            if(collided === true && pbButtonActivated === false){
                pbButtonActivated = true;
                C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9900,y:4450,fontSize: 48, text: 'pro', alpha: 1});
                proTxt = obstacles[obstacles.length-1];
                btnsPressed++;
                if(btnsPressed === 3){
                    proTxt.pos.x = -100;
                    C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9600,y:4550,fontSize: 48, text: 'super pro', alpha: 1})
                }
            }
        },
        ef: (p,res,o) => {
            pbButtonSteppedOn = true;    
        }
    })`,

    // squareOnlyPushBoxButton
    `var sqCcircle=false;var sqOnlyPbButtonSteppedOn = false; var sqOnlyPbButtonActivated = false;C(1,[],[3],{
        x: 9200, y: 4200, w: 200, h: 200,
        cr: (o) => {
            ctx.globalAlpha = 0.8;
            if (pbButtonSteppedOn === true || sqOnlyPbButtonActivated === true) {
                ctx.globalAlpha = 0.3;
            }

            ctx.fillStyle = 'white';
            if(sqCcircle === true && sqOnlyPbButtonActivated === false) {sqCcircle = false; ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.1); ctx.globalAlpha = 0.9;}
            else if ((sqOnlyPbButtonSteppedOn === true && sqOnlyPbButtonActivated === false)) {ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.3); ctx.globalAlpha = 0.8;}
            else if(sqOnlyPbButtonActivated === true) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.5);}

            // outside
            ctx.fillRect(o.pos.x, o.pos.y, 200, 200);

            // grey inside
            if(!sqOnlyPbButtonActivated) ctx.globalAlpha = 1;
            ctx.fillStyle = colors.tile;
            ctx.fillRect(
                o.pos.x + 15,
                o.pos.y + 15,
                200 - 30,
                200 - 30
            );

            // rim
            ctx.globalAlpha = 0.5;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'white';
            ctx.strokeRect(
                o.pos.x + 23,
                o.pos.y + 23,
                200 - 46,
                200 - 46
            );
            ctx.globalAlpha = 1;

            // square pushBox
            ctx.globalAlpha = 0.3;
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'white';
            const w = 40 + Math.sin(window.time / 1200) * 10;
            ctx.strokeRect(o.pos.x+w, o.pos.y+w, 200-w*2, 200-w*2, 0, Math.PI * 2);
            ctx.globalAlpha = 1;

            sqOnlyPbButtonSteppedOn = false;
        },
        sf: (o) => {
            const res = new SAT.Response();
            let colliding = false;

            collided = SAT.testPolygonPolygon(pushBox.sat, o.sat, res);

            if(collided === true && sqOnlyPbButtonActivated === false){
                sqOnlyPbButtonActivated = true;
                btnsPressed++;
                if(btnsPressed === 3){
                    proTxt.pos.x = -100;
                    C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9600,y:4550,fontSize: 48, text: 'super pro', alpha: 1})
                }
            }

            res.clear();

            sqCcircle = SAT.testPolygonCircle(o.sat, pushCircle.sat, res);
        },
        ef: (p,res,o) => {
            sqOnlyPbButtonSteppedOn = true;    
        }
    })`,

    // crowdPushBoxButton
    `var crAmt=0;var crButtonSteppedOn=false;var crButtonActivated=false;C(1,[],[3],{
        x: 9500, y: 4300, w: 200, h: 200,
        cr: (o) => {
            ctx.globalAlpha = 0.8;
            if (crButtonSteppedOn === true || crButtonActivated === true) {
                ctx.globalAlpha = 0.3;
            }

            ctx.fillStyle = 'white';
            if (crAmt !== 0) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.7); if(ctx.globalAlpha !== 1){ctx.globalAlpha = 0.8;}}
            else if(crButtonActivated === true) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.5);}

            // outside
            ctx.fillRect(o.pos.x, o.pos.y, 200, 200);

            // grey inside
            if(!crButtonActivated) ctx.globalAlpha = 1;
            ctx.fillStyle = colors.tile;
            ctx.fillRect(
                o.pos.x + 15,
                o.pos.y + 15,
                200 - 30,
                200 - 30
            );

            // rim
            ctx.globalAlpha = 0.5;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'white';
            ctx.strokeRect(
                o.pos.x + 23,
                o.pos.y + 23,
                200 - 46,
                200 - 46
            );
            ctx.globalAlpha = 1;

            // x/3
            // if(crAmt !== 0){
                ctx.font = '30px Inter';
                ctx.fillStyle = 'white';
                ctx.fillText((crButtonActivated === true ? 3 : crAmt) + '/3', o.pos.x + o.dimensions.x/2, o.pos.y + o.dimensions.y/2);
            // }

            crButtonSteppedOn = false;
        },
        sf: (o) => {
            if(crButtonActivated === true) {crButtonSteppedOn = false; return;}
            crAmt = 0;
            
            const res = new SAT.Response();
            let colliding = false;

            collided = SAT.testPolygonCircle(o.sat, pushCircle.sat, res);
            if(collided === true) crAmt++;

            res.clear();
            collided = SAT.testPolygonPolygon(pushBox.sat, o.sat, res);
            if(collided === true) crAmt++;

            if(crButtonSteppedOn === true) crAmt++;

            if(crAmt === 3 && crButtonActivated === false){
                crButtonActivated = true;
                btnsPressed++;
                if(btnsPressed === 3){
                    proTxt.pos.x = -100;
                    C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9600,y:4550,fontSize: 48, text: 'super pro', alpha: 1})
                }
            }
        },
        ef: (p,res,o) => {
            crButtonSteppedOn = true;    
        }
    })`,

    // pushCircle
    `C(0,[],[3],{"r":100,"x":9000,"y":4300,ef:(p, res, o)=>{
        p.pos.x += res.overlapV.x * 0.5;
        p.pos.y += res.overlapV.y * 0.5;
        o.pos.x -= res.overlapV.x * 0.5;
        o.pos.y -= res.overlapV.y * 0.5;
    },cr:(e)=>{
        ctx.fillStyle = window.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, Math.max(0, e.sat.r - 8*2), 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }}); var pushCircle = obstacles[obstacles.length-1];`,

    // pushBox
    `C(1,[],[3],{w:200,h:200,"x":10100,"y":4200,ef:(p, res, o)=>{
        p.pos.x += res.overlapV.x * 0.5;
        p.pos.y += res.overlapV.y * 0.5;
        o.pos.x -= res.overlapV.x * 0.5;
        o.pos.y -= res.overlapV.y * 0.5;
    },cr:(e)=>{
        ctx.fillStyle = window.colors.tile;
        ctx.fillRect(e.pos.x, e.pos.y, 200, 200);

        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'white';
        ctx.strokeRect(e.pos.x+8, e.pos.y+8, 200-8*2, 200-8*2);
        ctx.globalAlpha = 1;
    },sf:(e)=>{
        // collide w/ pushCircle
        const res = new SAT.Response();
        const collided = SAT.testPolygonCircle(e.sat, pushCircle.sat, res);
        if(collided === true){
            pushCircle.pos.x += res.overlapV.x * 0.5;
            pushCircle.pos.y += res.overlapV.y * 0.5;
            e.pos.x -= res.overlapV.x * 0.5;
            e.pos.y -= res.overlapV.y * 0.5;
        }
    }});var pushBox = obstacles[obstacles.length-1]`,

    // resetPushboxes
    `var touchingReset=false;C(2,[],[3],{"points":[[9600,4000],[9700,4100],[9600,4200],[9500,4100]],"x":0,"y":0,
        cr:(o)=>{
            if(touchingReset === true){
                ctx.globalAlpha = 0.8;
                touchingReset = false;
            } else {
                ctx.globalAlpha = 0.4;
            }
            ctx.fillStyle = '#ff1d19';
            ctx.lineWidth = 10;

            ctx.beginPath();
            for(let i = 0; i < o.sat.points.length; i++){
                ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
            }
            ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
            ctx.fill();
            ctx.closePath();

            
            // ctx.save();

            ctx.strokeStyle = 'white';

            var sc = 15;
            ctx.fillStyle = colors.tile;

            ctx.beginPath();
            ctx.translate(9600,4100);
            ctx.moveTo(0,-100+sc);
            ctx.lineTo(100-sc, 0);
            ctx.lineTo(0, 100-sc);
            ctx.lineTo(-100+sc, 0);
            ctx.lineTo(0,-100+sc);
            ctx.fill();
            ctx.closePath();

            sc = 23;

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'white';
            ctx.beginPath();
            ctx.moveTo(0,-100+sc);
            ctx.lineTo(100-sc, 0);
            ctx.lineTo(0, 100-sc);
            ctx.lineTo(-100+sc, 0);
            ctx.lineTo(0,-100+sc);
            ctx.stroke();
            ctx.closePath();
            ctx.translate(-9600,-4100);


            ctx.strokeStyle = '#969696';
            ctx.setLineDash([50, 70]);
            ctx.lineDashOffset = -window.time / 10;
            ctx.lineWidth = 5;
            ctx.globalAlpha = 0.8;

            ctx.beginPath();
            ctx.moveTo(9600, 4100);
            ctx.quadraticCurveTo(9000, 4300, pushCircle.pos.x, pushCircle.pos.y);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(9600, 4100);
            ctx.quadraticCurveTo(10200, 4300, pushBox.pos.x + 100, pushBox.pos.y + 100);
            ctx.stroke();
            ctx.closePath();

            ctx.globalAlpha = 1;

            ctx.setLineDash([]);
        },
        ef:(e)=>{
            pushBox.pos.x = 10100;
            pushBox.pos.y = 4200;

            pushCircle.pos.x = 9000;
            pushCircle.pos.y = 4300;
            touchingReset = true;
        }
    })`,

    // moving grapplepoints
    `C(0,[0],[3],{r:20+12/2,
        cr:(e)=>{
            e.isGrapplePoint = true;
            ctx.strokeStyle = '#c9c9c9';
            ctx.lineWidth = 12;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        },currentPoint:0,x:8350,y:2750,path:[[0,0,0.45],[100,0,0.45],[100,100,0.45],[0,100,0.45]]
    });\n`,
    `C(0,[0],[3],{r:20+12/2,
        cr:(e)=>{
            e.isGrapplePoint = true;
            ctx.strokeStyle = '#c9c9c9';
            ctx.lineWidth = 12;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        },currentPoint:1,x:8350,y:2750,path:[[0,0,0.45],[100,0,0.45],[100,100,0.45],[0,100,0.45]]
    });\n`,
    `C(0,[0],[3],{r:20+12/2,
        cr:(e)=>{
            e.isGrapplePoint = true;
            ctx.strokeStyle = '#c9c9c9';
            ctx.lineWidth = 12;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        },currentPoint:2,x:8350,y:2750,path:[[0,0,0.45],[100,0,0.45],[100,100,0.45],[0,100,0.45]]
    });\n`,
    `C(0,[0],[3],{r:20+12/2,
        cr:(e)=>{
            e.isGrapplePoint = true;
            ctx.strokeStyle = '#c9c9c9';
            ctx.lineWidth = 12;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        },currentPoint:3,x:8350,y:2750,path:[[0,0,0.45],[100,0,0.45],[100,100,0.45],[0,100,0.45]]
    });\n`,

    `C(0,[],[1,11],{"r":100,"boundPlayer":false,"x":8500,"y":2500})`,

    `var circles=[];C(1,[],[3],{"w":200,"h":200,"x":8300,"y":3300,cr:(o)=>{
        ctx.fillStyle = '#f0f0f0'; // CHECK

        ctx.save();
        ctx.beginPath();
        ctx.rect(o.pos.x,o.pos.y,200,200);
        ctx.fill();
        ctx.clip();
        ctx.closePath();

        ctx.fillStyle = 'black';

        for(let i = 0; i < circles.length; i+=3){
            ctx.fillStyle = circles[i+3] === 0 ? '#0f0f0f' : '#f0f0f0';
            ctx.beginPath();
            ctx.arc(circles[i], circles[i+1], circles[i+2], 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        
        ctx.restore();
    },ef:(p,res,e)=>{
        var p = window.players[window.selfId];
        circles.push(p.pos.x, p.pos.y, p.renderRadius, 0);
    }})`,

    `C(1,[],[3],{"w":200,"h":200,"x":8300,"y":3600,cr:(o)=>{
        ctx.fillStyle = '#0f0f0f';

        ctx.save();
        ctx.beginPath();
        ctx.rect(o.pos.x,o.pos.y,200,200);
        ctx.fill();
        ctx.clip();
        ctx.closePath();

        ctx.fillStyle = 'black';

        for(let i = 0; i < circles.length; i+=3){
            ctx.fillStyle = circles[i+3] === 1 ? '#0f0f0f' : '#f0f0f0';
            ctx.beginPath();
            ctx.arc(circles[i], circles[i+1]+300, circles[i+2], 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        
        ctx.restore();
    },ef:(p,res,e)=>{
        var p = window.players[window.selfId];
        circles.push(p.pos.x, p.pos.y-300, p.renderRadius, 1);
    }})`,

    `C(3,[],[27],{x:8250,y:3100,text:"Welcome.", fontSize: 98, changeShipStateTo: false, inbitialShipAngle: 0, shipTurnSpeed: 0.03})`,
    // `C(3,[],[27],{x:8200,y:3100,text:"Welcome.", fontSize: 120, changeShipStateTo: false, inbitialShipAngle: 0, shipTurnSpeed: 0.03})`,

    `C(1,[],[24],{x:10700,y:3300,w: 200,h:200,innerR: 0, innerG: 255, innerB: 0, innerSize: 0.1, innerOpacity: 0.1, outerR: 0, outerG: 0, outerB: 255, outerSize: 0.8, outerOpacity: 1,
    
    cr:(e)=>{
        ctx.beginPath();
        let middleX = e.topLeft.x + e.dimensions.x/2;
        let middleY = e.topLeft.y + e.dimensions.y/2;
        ctx.translate(middleX, middleY);
        const range = 0.25;
        ctx.fillStyle = blendColor('#00FF00','#0000FF', ((Math.sin(Date.now()/300)+1)/2 * range) + (0.5 - range / 2) );
        ctx.globalAlpha = 0.3;
        for(let i = 0; i < 200; i++){
            const t = Math.PI * 2 * i / 200;
            const a = -(window.time / 1000)%(Math.PI * 2) * 14;

            const p = Math.max(Math.abs(Math.cos(t)),Math.abs(Math.sin(t)));
            let x = e.dimensions.x/2 *Math.cos(t) / p * (Math.cos(14*t + a) / 14 + 0.9);
            let y = e.dimensions.y/2 * Math.sin(t) / p * (Math.sin(14*t + a) / 14 + 0.9);

            if(i === 0){
                ctx.moveTo(x,y);
            } else {
                ctx.lineTo(x,y);
            }
        }
        ctx.fill();
        ctx.closePath();
        ctx.translate(-middleX, -middleY);
        ctx.globalAlpha = 1;
    }
    })`,

    // slip
    // `C(1,[],[3],{x:8900,y:3900,w:200,h:200,cr:(e)=>{
    //     ctx.fillStyle = '#a83291';
    //     ctx.globalAlpha = 0.25;
    //     ctx.fillRect(8900,3900,200,200);
    //     ctx.globalAlpha = 1;
    // }})`,

    // RotateMovement
    `var rmColliding=false;var rmLastX;var rmLastY;var rotateAngle=Math.PI*2*(30/360);C(1,[],[3],{x:10400,y:3600,w:200,h:200,ef:(p, res, e)=>{
        if(rmLastX !== undefined){
            let movementX = p.pos.x - rmLastX;
            let movementY = p.pos.y - rmLastY;
            p.pos.x = rmLastX;
            p.pos.y = rmLastY;

            let angle = Math.atan2(movementY, movementX);
            const mag = Math.sqrt(movementX**2 + movementY**2);

            angle += rotateAngle;

            p.pos.x += Math.cos(angle) * mag;
            p.pos.y += Math.sin(angle) * mag;
        }

        rmLastX = p.pos.x;
        rmLastY = p.pos.y;
        rmColliding = true;
    },sf:()=>{
        if(rmColliding === false){
            rmLastX = rmLastY = undefined;
        }
        rmColliding=false;
        rotateAngle += 0.0006 * dt;
    },cr:(o)=>{
        o.rotateMovementAngle = (Math.PI / 2+rotateAngle)%(Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.setLineDash([15, 25]);
        ctx.lineDashOffset = -Date.now() / 20;
        ctx.lineWidth = 1;    

        ctx.save();
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 200, 200);
        ctx.stroke();
        ctx.clip();

        ctx.translate(o.dimensions.x / 2, o.dimensions.y/2);

        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.translate(o.pos.x,o.pos.y);
        ctx.rotate(o.rotateMovementAngle);
        o.rotateMovementExpansion = Math.ceil((Math.max(o.dimensions.x,o.dimensions.y)**2/Math.sqrt(o.dimensions.x**2+o.dimensions.y**2))/50+1)*50;

        ctx.globalAlpha = o.axisSpeedMult > 1 ? 1 : Math.max(0,1-Math.abs(o.axisSpeedMult));
        
        for(let x = -o.rotateMovementExpansion; x <= o.rotateMovementExpansion; x += 50){
            ctx.moveTo(x,-o.rotateMovementExpansion);
            ctx.lineTo(x,o.rotateMovementExpansion);
        }

        for(let y = -o.rotateMovementExpansion; y <= o.rotateMovementExpansion; y += 50){
            ctx.moveTo(-o.rotateMovementExpansion,y);
            ctx.lineTo(o.rotateMovementExpansion,y);
        }

        ctx.stroke();
        ctx.closePath();
        ctx.rotate(-o.rotateMovementAngle);
        ctx.translate(-o.pos.x,-o.pos.y);

        ctx.globalAlpha = 1;

        // render circle showing angle
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.setLineDash([15, 25]);
        
        o.renderCircleSize = Math.min(o.dimensions.x, o.dimensions.y)/4;
        if(o.rotateMovementAngle <= Math.PI/2 && o.rotateMovementAngle === 0){
            ctx.translate(-o.renderCircleSize, -o.renderCircleSize)
            o.renderCircleSize *= 2;
        }

        ctx.moveTo(o.pos.x, o.pos.y);
        ctx.lineTo(o.pos.x + o.renderCircleSize, o.pos.y);
        ctx.arc(o.pos.x, o.pos.y, o.renderCircleSize, 0, o.rotateMovementAngle);
        
        ctx.lineTo(o.pos.x, o.pos.y);

        ctx.stroke();
        ctx.grd = ctx.createRadialGradient(o.pos.x, o.pos.y, 0, o.pos.x, o.pos.y, o.renderCircleSize);

        ctx.grd.addColorStop(0, "rgba(255,255,255,0)");
        ctx.grd.addColorStop(1, "rgba(255,255,255,0.12)");

        ctx.fillStyle = ctx.grd;
        ctx.fill();
        
        ctx.closePath();

        ctx.restore();
        ctx.setLineDash([]);

        // ctx.translate(-o.dimensions.x / 2, -o.dimensions.y/2);
    }})`,

    `var lastCollidingSC=false,collidingSC=false;C(0,[],[3],{
    x:9900,y:3700,r:100,ef:()=>{
        if(window.camera.scale>0.3){
            changeCameraScale(window.camera.scale*0.999);
        }
        collidingSC = true;
    },sf:()=>{
        if(collidingSC === false && lastCollidingSC === true){
            changeCameraScale(1);
        }
        lastCollidingSC = collidingSC;
        collidingSC = false;
    }})`,

    // C(3,[],[20],{x:10900,y:3100,fontSize:60,text:"ShearScreen (perlin render)",hex:'#FFFFFF',alpha:1})
    // idea: perlin noise obs, obs that setTransforms when you stand on it (skew along middle of canvas y axis, symmetrical on the top and bottom)

    // maybe make circle?
    `var lastTransform2;var tOffset = 0;var lastPcollided=false;var Pcollided = false;var noiseFns;var importedNois=false;C(1,[],[3],{x:11000,y:3300,w:200,h:200,cr:(o)=>{
        if(importedNois===false) {
            (async()=>{
                noiseFns = await window.importNoise();
            })();
        }
        if(noiseFns === undefined) return;

        const t = (Date.now() / 1000) % 1000;
        // ctx.fillStyle = 'black';
        // ctx.fillRect(o.pos.x, o.pos.y, 200,200);
        for(let x = 0; x < 200; x+=5){
            for(let y = 0; y < 200; y+=5){
                ctx.fillStyle = '#0000FF';
                ctx.globalAlpha = Math.max(0,Math.min(1,noiseFns.simplex3(x / 100 + 2, y / 100 + 3, t)));
                ctx.fillRect(o.pos.x + x, o.pos.y + y, 5, 5);
            }
        }
        ctx.globalAlpha = 1;
    },ef:()=>{
        if(lastPcollided === false){
            tOffset = (Date.now() / 290) % (Math.PI) * (-1);
            lastTransform2 = ctx.getTransform();
        }
        Pcollided = true;
        
        const mag = Math.sin(Date.now()/290 + tOffset)/3 * 2;
        ctx.setTransform(lastTransform2.a+0.5*mag,0,0,lastTransform2.d,0,0);    
        ctx.translate(-canvas.w/2*mag,0);
    },sf:()=>{
        if(lastPcollided === true && Pcollided === false){
            // ctx.setTransform(1,0,0,1,0,0);
            ctx.setTransform(lastTransform2);
        }
        lastPcollided = Pcollided;
        Pcollided = false;    
    }}); var oldRender = window.render; window.render = (...params) => {
        oldRender(...params);
        const p = window.players[window.selfId];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1000;
        ctx.strokeRect(-1000/2,-1000/2,canvas.w+1000,canvas.h+1000);
    }`,

    `var lastTransform;var tOffset2 = 0;var lastPcollided2=false;var Pcollided2 = false;C(1,[],[3],{x:10800,y:3000,w:200,h:200,cr:(o)=>{
        if(importedNois===false) {
            (async()=>{
                noiseFns = await window.importNoise();
            })();
        }
        if(noiseFns === undefined) return;

        const t = (Date.now() / 1000) % 1000;
        // ctx.fillStyle = 'black';
        // ctx.fillRect(o.pos.x, o.pos.y, 200,200);
        for(let x = 0; x < 200; x+=5){
            for(let y = 0; y < 200; y+=5){
                ctx.fillStyle = '#00FF00';
                ctx.globalAlpha = Math.max(0,Math.min(1,noiseFns.simplex3(x / 100, y / 100, t)));
                ctx.fillRect(o.pos.x + x, o.pos.y + y, 5, 5);
            }
        }
        ctx.globalAlpha = 1;
    },ef:()=>{
        if(lastPcollided2 === false){
            tOffset = (Date.now() / 600) % (Math.PI) * (-1);
            lastTransform = ctx.getTransform();
        }
        Pcollided2 = true;
        // TODO: fill black rect on all sides of canvas
        const mag = Math.sin(Date.now()/600 + tOffset)/3 * 2;
        ctx.setTransform(lastTransform.a,0,0.5*mag,lastTransform.d,0,0);
        ctx.translate(-canvas.w/2*mag,0);
    },sf:()=>{
        if(lastPcollided2 === true && Pcollided2 === false){
            // ctx.setTransform(1,0,0,1,0,0);
            ctx.setTransform(lastTransform);
        }
        lastPcollided2 = Pcollided2;
        Pcollided2 = false;    
    }})`,

    // gaura
    `C(0,[],[3],{x:9000,y:4000,r:100,cr:(e)=>{
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#320745';

        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.closePath();

        ctx.globalAlpha = 1;
    },ef:(p,res,o)=>{
        const dist = Math.sqrt((p.pos.x-o.pos.x)**2 + (p.pos.y-o.pos.y)**2);
        const angle = Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x);

        p.pos.x += Math.cos(angle) * dist * dt / 290;
        p.pos.y += Math.sin(angle) * dist * dt / 290;
    }})`,

    // jumping
    `{let ang = Math.random() * Math.PI * 2;
    let mag = 0.03;
    let xvel = Math.cos(ang) * mag;
    let yvel = Math.sin(ang) * mag;
    let jumping = false;
    let timer = 0;
    let vz = 0;
    let z = 0;
    let gravity = 50;
    let baseRadius = 26;
    let maxTimer = 0.28;
    let jumpHeight = 50;
    C(0,[],[3],{r:26,y:2700,x:8600,collidable:false,sf:(e)=>{
        if (jumping === true) {
            e.pos.y += yvel * dt * z;
            e.pos.x += xvel * dt * z;
            if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
                xvel = xvel * -1;
                e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
                e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
            }
            if ((e.pos.y - e.sat.r) < 3900 || e.pos.y + e.sat.r > 4100) {
                yvel = yvel * -1;
                e.pos.y = Math.max(3900 + e.sat.r, e.pos.y);
                e.pos.y = Math.min(4100 - e.sat.r, e.pos.y);
            }

            vz -= gravity * 1 / 60;
            z += vz * 1 / 60;
            e.sat.r = baseRadius + z;
            if (z < 0) {
                e.sat.r = baseRadius;
                z = 0;
                jumping = false;
            }
        } else {
            timer += 1 / 60;
            if (timer >= maxTimer) {
                timer = 0;
                jumping = true;
                vz = jumpHeight;
            }
        }
    },cr:(o)=>{
        ctx.fillStyle = '#2c0073';
        ctx.globalAlpha = Math.max(0.2,1-z/jumpHeight*2.2);
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.globalAlpha = 1;
    },ef:(p,res,o)=>{
        if(z === 0) p.dead = true;
    }});}`,

    `{let ang = Math.random() * Math.PI * 2;
    let mag = 0.03;
    let xvel = Math.cos(ang) * mag;
    let yvel = Math.sin(ang) * mag;
    let jumping = false;
    let timer = 0;
    let vz = 0;
    let z = 0;
    let gravity = 50;
    let baseRadius = 26;
    let maxTimer = 0.28;
    let jumpHeight = 50;
    C(0,[],[3],{r:26,y:2700,x:8600,collidable:false,sf:(e)=>{
        if (jumping === true) {
            e.pos.y += yvel * dt * z;
            e.pos.x += xvel * dt * z;
            if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
                xvel = xvel * -1;
                e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
                e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
            }
            if ((e.pos.y - e.sat.r) < 3900 || e.pos.y + e.sat.r > 4100) {
                yvel = yvel * -1;
                e.pos.y = Math.max(3900 + e.sat.r, e.pos.y);
                e.pos.y = Math.min(4100 - e.sat.r, e.pos.y);
            }

            vz -= gravity * 1 / 60;
            z += vz * 1 / 60;
            e.sat.r = baseRadius + z;
            if (z < 0) {
                e.sat.r = baseRadius;
                z = 0;
                jumping = false;
            }
        } else {
            timer += 1 / 60;
            if (timer >= maxTimer) {
                timer = 0;
                jumping = true;
                vz = jumpHeight;
            }
        }
    },cr:(o)=>{
        ctx.fillStyle = '#2c0073';
        ctx.globalAlpha = Math.max(0.2,1-z/jumpHeight*2.2);
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.globalAlpha = 1;
    },ef:(p,res,o)=>{
        if(z === 0) p.dead = true;
    }});}`,

    // idit
    `var iditangle = 0;C(4,[],[3],{"r":100,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":Math.PI/2,"endSliceAngleRotateSpeed":0.0032,"startSliceAngleRotateSpeed":0.005,"x":9300,"y":4000,
        cr:(o)=>{
            ctx.save();
            // render shape and clip
            ctx.beginPath();
            ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
            ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
            ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);

            ctx.fillStyle = '#4e859c';
            ctx.globalAlpha = 0.25;
            ctx.fill();

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.globalAlpha = 0.3;
            ctx.stroke();

            ctx.clip();
            ctx.closePath();

            // swirl
            let angle = -o.endSliceAngle % (Math.PI * 2);
            let magnitude = 0;

            ctx.lineWidth = 5;
            ctx.strokeStyle = '#87CEEB';
            ctx.globalAlpha = 0.8;

            ctx.translate(o.pos.x, o.pos.y);
            ctx.moveTo(0,0);
            for(magitude = 0; magnitude < o.sat.r; magnitude ++){
                angle += 0.12;
                ctx.lineTo(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.translate(-o.pos.x, -o.pos.y);
            ctx.globalAlpha = 1;

            ctx.restore();
        },
        ef:(p, res, o) => {
            // subtracting last angle
            p.pos.x -= Math.cos(iditangle) * 50;
            p.pos.y -= Math.sin(iditangle) * 50;

            // inc idit angle
            iditangle += 1 / 60 * 5;

            // moving to this angle
            p.pos.x += Math.cos(iditangle) * 50;
            p.pos.y += Math.sin(iditangle) * 50;
        }
    })`,

    `C(4,[],[3],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI,"endSliceAngle":Math.PI*3/2,"endSliceAngleRotateSpeed":0.0032,"startSliceAngleRotateSpeed":0.005,"x":9300,"y":4000,
        cr:(o)=>{
            ctx.save();
            // render shape and clip
            ctx.beginPath();
            ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
            ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
            ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);

            ctx.fillStyle = '#4e859c';
            ctx.globalAlpha = 0.25;
            ctx.fill();

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.globalAlpha = 0.3;
            ctx.stroke();

            ctx.clip();
            ctx.closePath();

            // swirl
            let angle = -o.endSliceAngle % (Math.PI * 2);
            let magnitude = 0;

            ctx.lineWidth = 5;
            ctx.strokeStyle = '#87CEEB';
            ctx.globalAlpha = 0.8;

            ctx.translate(o.pos.x, o.pos.y);
            ctx.moveTo(0,0);
            for(magitude = 0; magnitude < o.sat.r; magnitude ++){
                angle += 0.12;
                ctx.lineTo(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.translate(-o.pos.x, -o.pos.y);
            ctx.globalAlpha = 1;

            ctx.restore();
        },
        ef:(p, res, o) => {
            // subtracting last angle
            p.pos.x -= Math.cos(iditangle) * 50;
            p.pos.y -= Math.sin(iditangle) * 50;

            // inc idit angle
            iditangle += 1 / 60 * 5;

            // moving to this angle
            p.pos.x += Math.cos(iditangle) * 50;
            p.pos.y += Math.sin(iditangle) * 50;
        }
    })`,
    // `C(4,[],[3],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI,"endSliceAngle":Math.PI*3/2,"endSliceAngleRotateSpeed":0.005,"startSliceAngleRotateSpeed":0.005,"x":9300,"y":4000})`,

    // circle ring!
    // `C(4,[],[0],{"r":1250*Math.sqrt(2),"innerRadius":1250*Math.sqrt(2) - 300,"startSliceAngle":0,"endSliceAngle":Math.PI*2-0.0001,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":9600,"y":3100})`

    // CircleSnap
    `C(4,[],[3],{"r":100,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":Math.PI*3/2,"startSliceAngleRotateSpeed":0.001,"endSliceAngleRotateSpeed":0.001,"x":10800,"y":3700,cr:(o)=>{
        // ctx.globalAlpha = 0.2;
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = 'white';
        ctx.setLineDash([30, 50]);
        ctx.lineDashOffset = -window.time / 1000 * 60 / 2;
        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
        ctx.stroke();
        ctx.closePath();

        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
    },ef:(p,res,o)=>{
        const angle = Math.PI + Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x);
        p.pos.x = o.pos.x + Math.cos(angle) * o.sat.r;
        p.pos.y = o.pos.y + Math.sin(angle) * o.sat.r;
    }})`,

    // :) inside
    `C(3,[1],[20],{x:10800,hex:'#FFFFFF',alpha:1,y:3700,text:":)", fontSize: 65,initialRotation:Math.PI/2,rotateSpeed:0,pivotX:10800,pivotY:3700})`,

    // The Everything Obstacle
    `C(2,[],[0,1,2,3,4,5,7,8,9,10,11,13,14,15,16,17,18,19,20,23,24,25,28],{
        "boundPlayer": false,
        "bounciness": 1,
        "decay": 0.98,
        "url": "http://tinyurl.com/dwayne-t-rj",
        "coinAmount": 1,
        "color": "#d6d611",
        "coindoorCoinAmount": 3,
        "coinDoorColor": "#d6d611",
        "checkpointOffsetX": 0,
        "checkpointOffsetY": 0,
        "maxStrength": 60,
        "regenTime": 100,
        "healSpeed": 1,
        "tpx": 9600,
        "tpy": 3050,
        "conveyorForce": 0.3,
        "conveyorAngle": 90,
        "conveyorAngleRotateSpeed": 0,
        "conveyorFriction": 0.8,
        "platformerForce": 1,
        "platformerAngle": 90,
        "platformerAngleRotateSpeed": 0,
        "platformerFriction": 0.875,
        "maxJumpCooldown": 30,
        "jumpForce": 20,
        "jumpDecay": 0.95,
        "axisSpeedMultX": 0,
        "axisSpeedMultY": 1,
        "toSnapX": true,
        "toSnapY": true,
        "snapDistanceX": 100,
        "snapDistanceY": 100,
        "snapCooldown": 40,
        "snapAngle": 0,
        "snapAngleRotateSpeed": 0,
        "timeTrapMaxTime": 300,
        "timeTrapRecoverySpeed": 1.5,
        "timeTrapToKill": true,
        "timeTrapToShowTenth": false,
        "sizeMult": 1.5,
        "sizeChangePermanent": false,
        "speedMult": 2.5,
        "speedChangePermanent": false,
        "hex": "#FFFFFF",
        "alpha": 1,
        "tornadoStrength": 1,
        "innerR": 0,
        "innerG": 0,
        "innerB": 0,
        "innerSize": 0.1,
        "innerOpacity": 0,
        "outerR": 0,
        "outerG": 0,
        "outerB": 0,
        "outerSize": 0.5,
        "outerOpacity": 1,
        "pushAngle": 180,
        "maxPushDistance": 100,
        "idlePushBackSpeed": 0.25,
        "positiveDirectionOnly": false,
        "pushConversionRatio": 0.8,
        "changeShipStateTo": true,
        "initialShipAngle": -Math.PI/2,
        "shipTurnSpeed": 0.0031415926535897934,
        "changeGrappleStateTo": true,
        "grappleRange": 488,
        "grappleForce": 0.001,
        "grappleFric": 0.4,
        "changeDeathTimerStateTo": true,
        "drainAmountWhileStandingOn": 0,
        "deathTime": 100,
        "points":[[9650,1800],[9700,2000],[9500,2000],[9550,1800]],"x":0,"y":0
    })`,

    `C(2,[],[17],{
        x:0,y:0,points:[[10400,2200],[10600,2100],[10600,2300]],
        "timeTrapMaxTime":1000,"timeTrapRecoverySpeed":1.65,"timeTrapToKill":false,"timeTrapToShowTenth":false,
        sf:(o,p)=>{
            if(o.timeTrapTime <= 0){
                p.pos.x = 10200;
                p.pos.y = 2200;
            }
        }
    })`,

    // spring
    `var springXV=0;var springYV=0;var springX=9300;var springY=1900;var springStrength=0.048;C(4,[],[4],{
        "r":100,
        startSliceAngle: 0,
        "endSliceAngle":Math.PI*2 - 0.01,
        "startSliceAngleRotateSpeed":0,
        "endSliceAngleRotateSpeed":0,
        "x":9300,
        "y":1900,
        innerRadius: 50
    ,ef:(p,res,o)=>{
        o.pos.x -= res.overlapV.x;
        o.pos.y -= res.overlapV.y;
    },sf:(o)=>{
        // let fric = Math.exp(dt * (-4.8/3/1000));
        springXV *= Math.exp(-dt/ 1000 / 3);
        springYV *= Math.exp(-dt/ 1000 / 3);

        const angle = Math.atan2(springY - o.pos.y, springX - o.pos.x);
        springXV += Math.cos(angle) * springStrength;
        springYV += Math.sin(angle) * springStrength;

        o.pos.x += springXV * dt;
        o.pos.y += springYV * dt;
    },cr:(o)=>{
        // spring
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(o.pos.x, o.pos.y);
        ctx.lineTo(springX, springY);
        ctx.stroke();
        ctx.closePath();

        // main body circleSlice w/ innerRadius 75

        ctx.fillStyle = colors.tile;
        
        ctx.beginPath();
        ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
        ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);
        ctx.arc(o.pos.x, o.pos.y, o.innerRadius, o.endSliceAngle, o.startSliceAngle, true);
        ctx.fill();
        ctx.closePath();
    }}
    )`,

    `var fangle=0;C(0,[],[0],{x:9000,y:1900,r:40,cr:(o)=>{
        const radius = o.sat.r;
        const p = window.players[window.selfId];

        function shortAngleDist(a0,a1) {
            const max = Math.PI*2;
            const da = (a1 - a0) % max;
            return 2*da % max - da;
        }

        function interpolateDirection(a0,a1,t) {
            return a0 + shortAngleDist(a0,a1)*t;
        }

        fangle = interpolateDirection(fangle, Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x), 0.2 * dt/16.66);
        const angle = fangle;
        const x = o.pos.x; const y = o.pos.y;

        ctx.fillStyle = '#ffe763';
        ctx.strokeStyle = '#cebb50';
        ctx.lineWidth = radius/8;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // eyes
        ctx.fillStyle = '#212219';
        ctx.beginPath();
        ctx.ellipse(x - radius/3.5, y - radius*5/23.5, radius*3/23.5, radius*5.85/23.5, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(x + radius/3.5, y - radius*5/23.5, radius*3/23.5, radius*5.85/23.5, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        // mouth
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius/15;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(x + radius/4, y + radius*9.5/23.5);
        ctx.quadraticCurveTo(x, y + 1.07*radius*15/23.5*61.1/70, x - radius/4, y + radius*9.5/23.5);
        ctx.stroke();
        
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(x + radius/3.5, y - radius*5/23.5, radius*2.5/23.5, radius*5/23.5, 0, 0, Math.PI*2);
        ctx.clip();
        ctx.closePath();

        // circle
        const eyeOffset = {
            x: Math.cos(angle)*radius*2/23,
            y: Math.sin(angle)*radius*3.5/23
        }
        ctx.fillStyle = '#eeeeee';
        ctx.beginPath();
        ctx.ellipse(x + radius/3.5 + eyeOffset.x, y - radius*5/23.5 + eyeOffset.y, radius*2.92/23.5, radius*2.92/23.5, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

        ctx.restore();

        ctx.save();

        // oval clipping path
        ctx.beginPath();
        ctx.ellipse(x - radius/3.5, y - radius*5/23.5, radius*2.5/23.5, radius*5/23.5, 0, 0, Math.PI*2);
        ctx.clip();
        ctx.closePath();

        ctx.fillStyle = '#eeeeee';
        ctx.beginPath();
        ctx.ellipse(x - radius/3.5 + eyeOffset.x, y - radius*5/23.5 + eyeOffset.y, radius*3/23.5, radius*3/23.5, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
        
        ctx.restore();    
    }})`,

    // particles
    `var ps=[];var pcol=false;C(0,[],[3],{
        x: 10800, y: 4000, r: 100,
        cr:(o)=>{
            ps.push([
                o.pos.x,
                o.pos.y,
                Math.PI * Math.random() * 2,
                400,
                pcol === true ? 'yellow' : 'white'
            ]);
            //0.012,     2,             3,            0.4
            //spawnRate, particleSpeed, particleSize, particleLifespan
            for (let p = 0; p < ps.length; p++) {
                let speed = 8;
                speed *= ps[p][3] / 400;
                ps[p][0] += Math.cos(ps[p][2]) * speed;
                ps[p][1] += Math.sin(ps[p][2]) * speed;
                ps[p][3] -= dt;
                if (ps[p][3] < 0) {
                    ps.splice(p, 1);
                }
            }
            ctx.globalAlpha = 1;
            for (let p = 0; p < ps.length; p++) {
                ctx.fillStyle = ps[p][4];
                ctx.globalAlpha = ps[p][3] / 400;
                ctx.beginPath();
                ctx.arc(
                    ps[p][0],
                    ps[p][1],
                    6,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
                ctx.closePath();
            }
            pcol = false;
        },
        ef:()=>{
            pcol = true;
        }
    })`,

    `C(1,[],[14],{"w":200,h:200,"platformerForce":0.1,"platformerAngle":90,"platformerAngleRotateSpeed":0,"platformerFriction":0.875,"maxJumpCooldown":30,"jumpForce":0.3,"jumpDecay":0.95,"x":11000,"y":3900})`,

    // C(3,[],[20],{x:8700,y:2200,fontSize:28,text:"Digdig diamond that looks like a normal",hex:'#FFFFFF',alpha:1})

    // turret-sentry

    `{const recyclableInds=[];let cdTimer=333,maxcdTimer=333;C(0,[5],[3],{r:100,y:2500,x:10700,
        boundPlayer: true,
        restAngles: [Math.PI/3, Math.PI, Math.PI*5/3],
        toRest: true,
        homingRotateSpeed: 0.0021,
        detectionRadius: 150,
        spokeAngles: [0, Math.PI*2/3, Math.PI*4/3],
        pivotX: 10700,
        pivotY: 2500,
        cr:(o)=>{
            for(let i = 0; i < 3; i++){
                ctx.translate(o.pos.x, o.pos.y);
                ctx.rotate(Math.PI * 2 * (i/3) + o.rotation);

                ctx.globalAlpha = 0.4 + 0.2 * Math.abs(Math.sin(window.time / 1200));
                ctx.strokeStyle = 'black';
                ctx.fillStyle = '#053564';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.rect(0, -30, 100, 60);
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.stroke();
                ctx.closePath();

                ctx.rotate(-Math.PI * 2 * (i/3) - o.rotation);
                ctx.translate(-o.pos.x, -o.pos.y);
            }
        },
        ef:(p,res,o)=>{
            cdTimer -= dt;
            if(cdTimer < 0){
                cdTimer += maxcdTimer;

                // find minimum angle
                let minSpokeAngularDist = Infinity;
                let minAngle = 0;

                function shortAngleDist(a0,a1) {
                    let da = (a1 - a0) % (Math.PI*2);
                    return 2*da % (Math.PI*2) - da;
                }

                let angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);

                for(let i = 0; i < o.spokeAngles.length; i++){
                    let angleDist = shortAngleDist(o.spokeAngles[i] + o.rotation, angle);
                    if(Math.abs(angleDist) < Math.abs(minSpokeAngularDist)){
                        minSpokeAngularDist = angleDist;
                        minAngle = o.spokeAngles[i] + o.rotation;
                    }
                }

                if(minSpokeAngularDist === Infinity) return;
                
                angle = minAngle;
                let mag = 0;

                let thisInd;
                C(0,[],[1],{x:o.pos.x,y:o.pos.y,r:30,sf:(e)=>{
                    if(mag > 400){
                        if(e.pos.x < 1E8){
                            recyclableInds.push(thisInd);
                            e.pos.x = 1E9;
                        }
                    } else {
                        mag += dt * 0.12;
                        e.pos.x = o.pos.x + Math.cos(angle) * mag;
                        e.pos.y = o.pos.y + Math.sin(angle) * mag;
                    }
                },cr:(e)=>{
                    if(mag > 400) return;

                    if(mag > 300){
                        ctx.globalAlpha = (400 - mag) / 100;
                    }

                    ctx.lineWidth = 6;
                    ctx.fillStyle = '#107691';
                    ctx.strokeStyle = 'black';

                    ctx.beginPath();
                    ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke()
                    ctx.closePath();

                    ctx.globalAlpha = 1;
                }});

                if(recyclableInds.length > 0){
                    const ind = recyclableInds.pop();
                    obstacles[ind] = obstacles.pop();
                    thisInd = ind;
                } else {
                    thisInd = obstacles.length-1;
                }
            }
        }
    });}`,
    // circle part of the turret sentry
    "C(0,[],[0],{x:10700,y:2500,r:59,cr:(e)=>{\n    ctx.fillStyle = window.colors.tile;\n    ctx.beginPath();\n    ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.closePath();\n\n    ctx.strokeStyle = '#053564';\n    ctx.lineWidth = 15;\n    ctx.beginPath();\n    ctx.arc(\n        e.pos.x,\n        e.pos.y,\n        Math.max(e.sat.r - 30, 0),\n        0,\n        Math.PI * 2\n    );\n    ctx.stroke();\n    ctx.closePath();\n}});",

    // switchmove

    // wallboost - boost
    `C(1,[],[3],{"w":200,"h":200,"x":9800,"y":3900,cr:(o)=>{
        ctx.save();
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 200, 200);
        ctx.fillStyle = '#feb41e';
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.clip();
        ctx.closePath();

        ctx.globalAlpha = 1;
        ctx.fillStyle = '#d87903';
        const amt = 16;
        ctx.translate(o.pos.x + 100, o.pos.y + 100);
        for(let a = 0; a < amt; a+=2){// draw every other
            const angle = a / amt * Math.PI * 2 + window.time / 1200;
            const angle2 = (a+1) / amt * Math.PI * 2 + window.time / 1200;

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(Math.cos(angle) * 1000, Math.sin(angle)*1000);
            ctx.lineTo(Math.cos(angle2) * 1000, Math.sin(angle2)*1000);
            ctx.lineTo(0,0)
            ctx.fill();
            ctx.closePath();
        }
        ctx.translate(-o.pos.x - 100, -o.pos.y - 100);

        ctx.restore();
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;

        if(input.shift === false) return;

        angle = Math.atan2(res.overlapV.y, res.overlapV.x);

        function addForce(p, o, xv, yv, xa, ya, vfric, afric){
            if(p.forces[o.playerForceId] === undefined) {
                o.playerForceId = p.forces.length;
                p.forces[o.playerForceId] = [xv, yv, xa, ya, vfric, afric];
            } else {
                p.forces[o.playerForceId][0] += xv;
                p.forces[o.playerForceId][1] += yv;
                p.forces[o.playerForceId][2] += xa;
                p.forces[o.playerForceId][3] += ya;
            }
        }

        addForce(p, o, 0, 0, Math.cos(angle) * 3 * dt, Math.sin(angle) * 3 * dt, -0.1, -0.1);
    }})`,

    // normal-boostd

    // 10800 2800 oval going in and out in x and y offset (sin and cosine), ctx.filter on effect fn;

    // 9[2]00 1600 slip w/ render like oldEx

    // 8900 1600 cloud (white vinette comes in, covering most of screen) - render can be a cloud or just a white gradient circle
    `C(0,[],[24],{
        "r":100,
        "innerR":255,"innerG":255,"innerB":255,"innerSize":0,"innerOpacity":1,
        "outerR":255,"outerG":255,"outerB":255,"outerSize":0.03,"outerOpacity":0.03,
        "x":8900,"y":1600,
        cr:(o)=>{
            let grd = ctx.createRadialGradient(o.pos.x, o.pos.y, 0, o.pos.x, o.pos.y, o.sat.r*11/12);

            grd.addColorStop(0, "rgba(255,255,255,0.5)");
            grd.addColorStop(1, "rgba(255,255,255,0)");

            ctx.fillStyle = grd;

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    })`,

    // 9900 1900 speed and size timetrap (should render as a gradient)
    `{let lastCollided = false;let c=false;C(4,[],[3,17],{
        "r":100,"x":9900,"y":1900,innerRadius: 30, startSliceAngle: Math.PI/6 - Math.PI/2, endSliceAngle: -Math.PI/6 - Math.PI/2, startSliceAngleRotateSpeed:0, endSliceAngleRotateSpeed: 0,
        "timeTrapMaxTime":4000,"timeTrapRecoverySpeed":3,"timeTrapToKill":false,"timeTrapToShowTenth":true,
        cr:(o)=>{
            let middleX = o.topLeft.x + o.dimensions.x/2;
            let middleY = o.topLeft.y + o.dimensions.y/2;

            // changeSpeed '#eba500'
            // changeSize (<1) '#1c1852'

            const ga = 0.1 + (0.25 + 0.28) / 2 * (4000 - o.timeTrapTime) / 4000;
            const fs = blendColor('#eba500', '#1c1852', (Math.sin(window.time / 1000) + 1) / 2);

            let grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (o.dimensions.x + o.dimensions.y)/5));

            function hexToRgb(hex) {
                let bi = parseInt(hex.slice(1), 16);
                let r = (bi >> 16) & 255;
                let g = (bi >> 8) & 255;
                let b = bi & 255;

                return r + "," + g + "," + b;
            }

            const str = "rgba(" + hexToRgb(fs);

            grd.addColorStop(0, str + ",0)");
            grd.addColorStop(1, str + "," + ga + ")");

            ctx.fillStyle = grd;

            ctx.beginPath();
            ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
            ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
            ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);
            if(o.innerRadius !== 0)ctx.arc(o.pos.x, o.pos.y, o.innerRadius, o.endSliceAngle, o.startSliceAngle, true);
            ctx.fill();
            ctx.closePath();

            ctx.globalAlpha = Math.max(0.3, o.timeTrapTime / o.timeTrapMaxTime / 3);
            ctx.fillStyle = 'white';
            ctx.font = (Math.min(o.dimensions.x, o.dimensions.y)/2).toString() + 'px Inter';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.fillText(Math.round(o.timeTrapTime/1000 * 10) / 10, middleX, middleY);

            ctx.globalAlpha = 1;
        },
        ef:(p,res,o)=>{
            p.axisSpeedMultX *= 1.6;
            p.axisSpeedMultY *= 1.6;
            
            const t = 1 - o.timeTrapTime / o.timeTrapMaxTime;
            p.sat.r = 49.5 * (1-t) + 10 * t;
            c = true;
        },
        sf:(o,p)=>{
            if(c === false && lastCollided === true){
                p.sat.r = 49.5;
            }

            lastCollided = c;
            c = false;
        }
    })}`,

    // 8100 2800 obs that turns debug mode on (and off if outside). Renders like the debug bounding box for a square (pt top left corner)
    `{let collided=false;let lastCollided=false;C(1,[],[3],{
        x: 8100, y: 2400, w: 200, h: 200,
        cr:(o)=>{
            ctx.fillStyle = 'red';
            ctx.beginPath();    
            ctx.arc(o.pos.x, o.pos.y, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;

            ctx.strokeRect(o.pos.x, o.pos.y, 200, 200);
        },
        ef:(p,res,o)=>{
            window.renderDebug = true;   
            collided = true; 
        },
        sf:(o)=>{
            if(lastCollided === true && collided === false){
                window.renderDebug = false;
            }
            lastCollided = collided;
            collided = false;
        }
    })}`,

    // rotating coming out of the walls (left above the portal?) that's text that says "hello" and bounds
    `C(3,[1],[0],{
        x: 8400, y: 1900, fontSize: 60, text: "Hello",
        pivotX: 8150, pivotY: 1650, initialRotation: 0,
        rotateSpeed: 0.001
    })`,

    `C(3,[1],[1],{
        x: 8400+75, y: 1900+75, fontSize: 60, text: "How are you?",
        pivotX: 8150+75, pivotY: 1650+75, initialRotation: 180,
        rotateSpeed: 0.001
    })`,

    // light switch that inverts
    `{const top = 3900+20-50;const bottom =4100-20-50;const sideMargin=10;C(1,[],[3],{
        x: 10400+sideMargin, y: top, w: 200 - sideMargin * 2, h: 100, // maybe scale from 200 -> 200 - 20*2?
        cr:(o)=>{
            ctx.strokeStyle = 'grey';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(10500, top+o.dimensions.y/2);
            ctx.lineTo(10500, bottom+o.dimensions.y/2);
            ctx.stroke();
            ctx.closePath();

            ctx.fillStyle = colors.tile;
            ctx.beginPath();
            ctx.roundRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y, 6);
            ctx.fill();
            ctx.closePath();

            if(o.pos.y !== top){
                const t = (o.pos.y - top) / (bottom - top); 
                // canvas.style.filter = "invert(" + t*100 + "%)"; 
                canvas.style.filter = "hue-rotate(" + Math.floor(t*360) + "deg)";
            } else if(canvas.style.filter !== ''){
                canvas.style.filter = '';
            }
        },
        ef:(p,res,o)=>{
            p.pos.x += res.overlapV.x;
            o.pos.y -= res.overlapV.y;
            
            if(o.pos.y < top || o.pos.y > bottom){
                if(o.pos.y < top) o.pos.y = top;
                else o.pos.y = bottom;

                const res = new SAT.Response();

                const collided = SAT.testPolygonCircle(o.sat, p.sat, res);

                if(collided === true){
                    p.pos.y += res.overlapV.y;
                }
            }
        }
    })}`,

    // slip
    `{let lastX=undefined;let lastY=undefined;let xv;let yv;let slipX;let slipY;let collided=false;let lastCollided=false;C(2,[],[3],{
        x: 0, y: 0,
        points: [
            [10700,2850],
            [10800,2700],
            [10900,2850],
            [10800,2900]
        ],
        cr:(o) => {
            ctx.fillStyle = '#a83291';
            ctx.globalAlpha = 0.25;

            ctx.beginPath();
            ctx.moveTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y)
            for(let i = 1; i < o.sat.points.length; i++){
                ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
            }
            ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);

            ctx.fill();

            ctx.globalAlpha = 1;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        },
        ef:(p,res,o)=>{
            if(xv !== undefined){
                if(slipX === undefined){
                    slipX = p.pos.x;
                    slipY = p.pos.y;
                }
                slipX += xv * dt;
                slipY += yv * dt;

                p.pos.x = slipX;
                p.pos.y = slipY;
            } else if(lastX !== undefined){
                xv = (p.pos.x - lastX) / dt / 3;
                yv = (p.pos.y - lastY) / dt / 3;
            }

            lastX = p.pos.x;
            lastY = p.pos.y;

            collided = true;
        },
        sf:(o)=>{
            if(collided === false && lastCollided === true){
                lastX = lastY = xv = yv = slipX = slipY = undefined;
            }

            lastCollided = collided;
            collided = false;
        }
    })}`,

    // negative size
    // `C(3,[],[20],{hex:'#FFFFFF',alpha:1,text:"TODO: cooler render", fontSize: 48,x:10800,y:2100})`,// Idea: maybe smth with circle going inside out -> sine wave from max to 0 radius and when its negative it renders as a hollow o
    `C(0,[],[18],{"r":100,"sizeMult":-0.5,"sizeChangePermanent":false,x:11400,y:3400,cr:(o)=>{//"x":10800,"y":2100
        const r = Math.sin(window.time / 420) * o.sat.r;
        ctx.setLineDash([30, 40]);
        ctx.lineDashOffset = -window.time / 15;

        ctx.strokeStyle = '#1c1852';
        ctx.lineWidth = 10;
        ctx.globalAlpha = (o.sat.r - Math.abs(r)) / o.sat.r; 

        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.setLineDash([]);


        ctx.globalAlpha = 0.28;
        if(r > 0){
            ctx.fillStyle = '#1c1852';
            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, -r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.globalAlpha = 1;
    }})`,
    // `C(0,[],[29],{"r":24,changeDeathTimerStateTo:true,deathTime:1,drainAmountWhileStandingOn:0,"x":11100,"y":2700})`,

    // player inside recreating oldest eX
    // player should have collision w/ real player so make it a sep obs

    // background
    `C(1,[],[3],{
        x: 10100, y: 3900, w: 200, h: 200,
        cr:(o)=>{
            ctx.fillStyle = 'rgba(0,0,0,.2)';
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 8;
            
            ctx.beginPath();
            ctx.roundRect(o.pos.x + ctx.lineWidth/2, o.pos.y + ctx.lineWidth / 2, 200 - ctx.lineWidth, 200 - ctx.lineWidth, 25);

            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
    })`,
    // player
    `{let lastPosX,lastPosY;C(0,[],[0],{
        x: 10200, y: 4000, r: 25,
        cr:(o)=>{
            ctx.fillStyle = 'white';
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'white';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.shadowBlur = 0;
        },sf:(o,p)=>{
            if(lastPosX !== undefined){
                const xv = (p.pos.x - lastPosX) / 2;
                const yv = (p.pos.y - lastPosY) / 2;
                
                o.pos.x += xv;
                o.pos.y += yv;

                if(o.pos.x - o.sat.r < 10100 + 4) o.pos.x = o.sat.r + 10100 + 4;
                if(o.pos.x + o.sat.r > 10300 - 4) o.pos.x = -o.sat.r + 10300 - 4;

                if(o.pos.y - o.sat.r < 3900 + 4) o.pos.y = o.sat.r + 3900 + 4;
                if(o.pos.y + o.sat.r > 4100 - 4) o.pos.y = -o.sat.r + 4100 - 4;
            }
            lastPosX = p.pos.x;
            lastPosY = p.pos.y;
        }
    })}`,

    // fixCamera
    `{function interpolate(s,e,t){return (1-t) * s + t*e;}let lastCollided=false;let collided=false;let fadeOutTimer=-1;C(0,[],[3],{
        x: 11000,y:2400,r:100,
        cr:(o) => {
            ctx.strokeStyle = '#c2c2c2';
            ctx.lineWidth = 16;
            ctx.beginPath();
            ctx.arc(
                o.pos.x,
                o.pos.y,
                Math.max(o.sat.r - 8, 0),
                0,
                Math.PI * 2
            );
            ctx.stroke();
            ctx.globalAlpha = 1;
            const lightgrad = ctx.createRadialGradient(
                o.pos.x,
                o.pos.y,
                o.sat.r,
                o.pos.x,
                o.pos.y,
                o.sat.r + 20
            );
            lightgrad.addColorStop(0, 'rgba(255, 0, 0, 0.75)');
            lightgrad.addColorStop(1, 'rgba(255, 0, 0, 0)');

            ctx.strokeStyle = lightgrad;
            ctx.lineWidth = 30;
            ctx.beginPath();
            ctx.arc(
                o.pos.x,
                o.pos.y,
                o.sat.r + 30 / 2 - 2,
                0,
                Math.PI * 2
            );
            ctx.stroke();
            ctx.closePath();

            // ctx.fillStyle = '#7c94eb';
            // ctx.globalAlpha = 0.5;
            // ctx.beginPath();
            // ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            // ctx.fill();
            // ctx.closePath();
        },
        ef:(p,res,o)=>{
            fadeOutTimer = -1;
            window.camera.x = interpolate(window.camera.x, 9600, 0.1);
            window.camera.y = interpolate(window.camera.y, 3100, 0.1);

            p.pos.x += res.overlapV.x;
            p.pos.y += res.overlapV.y;

            window.camera.numControlledBy = 1;

            collided = true;
        },
        sf:(o,p)=>{
            if(lastCollided === true && collided === false) {
                fadeOutTimer = 2000;
            }

            if(fadeOutTimer !== -1){
                fadeOutTimer -= dt;

                const t = Math.max(0.1,1 - (fadeOutTimer / 2000) ** 2);

                window.camera.x = interpolate(window.camera.x, p.pos.x, t);
                window.camera.y = interpolate(window.camera.y, p.pos.y, t);

                if(fadeOutTimer <= 0) {
                    window.camera.numControlledBy = 0;
                    lastCameraX = lastCameraY = undefined;
                    fadeOutTimer = -1;
                }
            }

            lastCollided = collided;
            collided = false;
        }
    })}`,

    // frictionChanger
    `{let collided = false; let lastCollided = false;C(1,[],[3],{
        x: 9100, y: 1200, w: 200, h: 200,
        cr:(o) => {
            ctx.fillStyle = ctx.strokeStyle = '#1c1852';
            ctx.globalAlpha = 0.28;

            ctx.beginPath();
            ctx.rect(o.pos.x, o.pos.y, 200, 200);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
        },
        ef:(p) => {
            p.friction = 0.993;
            p.axisSpeedMultX = 0.01;
            p.axisSpeedMultY = 0.01;
            collided = true;
        },
        sf:(o,p) => {
            if(collided === false && lastCollided === true){
                p.friction = 0.4;
                p.xv = p.yv = 0;
            }    

            lastCollided = collided;
            collided = false;
        }
    })}`,

    // yellow sentry that notices the player, ! over the head, and lunges towards the player
    `{let spd =0.03;let xv=0,yv=0;let state = 'idle';let stateTime = 0;C(0,[],[0],{x:11300,y:2500,r:59,cr:(o)=>{
        ctx.globalAlpha = 0.3 * (Math.sin(Date.now() / 800)+1)/2;
        ctx.fillStyle = '#cad41c';
        ctx.beginPath();
        ctx.arc(11300,2500,100,0,Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        ctx.fillStyle = window.colors.tile;
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    
        ctx.strokeStyle = '#cad41c';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            o.pos.x,
            o.pos.y,
            Math.max(o.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();

        // warn
        if(state === 'warn'){// TODO: MAKE EXTERIOR FADING IN RED STROKE ON WARN, ALSO MAKE CURVES MORE SATISFYING. ALSO WE"RE LEAKING ALPHA SOMEWHERE (can tell by the destructable hexagon)
            if(stateTime > 350){
                ctx.globalAlpha = (500 - stateTime) / 150;
            }

            ctx.font = "40px Inter";
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#cad41c';
            ctx.fillStyle = 'white';
            ctx.textBaseline = 'center';
            ctx.textAlign = 'middle';
            ctx.strokeText('!',o.pos.x, o.pos.y - o.sat.r*3/2);
            ctx.fillText('!',o.pos.x, o.pos.y - o.sat.r*3/2);

            ctx.globalAlpha = 1;
        }
    },sf:(o,p)=>{
        stateTime -= dt;

        if(state === 'return'){
            function interpolate(s,e,t){
                return (1-t)*s + e*t;
            }
            o.pos.x = interpolate(o.pos.x, 11300, 0.1);
            o.pos.y = interpolate(o.pos.y, 2500, 0.1);

            const distToStart = Math.sqrt((11300-o.pos.x)**2+(2500-o.pos.y)**2); 
            if(distToStart < 1) {state = 'idle'; stateTime = 0; xv = yv = 0;}
        }
        else if(state === 'rideOut'){
            xv *= 0.98;
            yv *= 0.98;

            if(Math.sqrt(xv**2 + yv**2) < 1){
                state = 'return';
            }

            o.pos.x += xv * dt;
            o.pos.y += yv * dt;
        }
        else if(state === 'lunge'){
            let angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);

            if(stateTime > 60){
                xv += Math.cos(angle) * spd * dt;
                yv += Math.sin(angle) * spd * dt;
            }
            
            xv *= 0.98;
            yv *= 0.98;

            o.pos.x += xv * dt;
            o.pos.y += yv * dt;

            if(stateTime < 0){
                state = 'rideOut';
                stateTime = Infinity;
            }
        }
        else if(state === 'warn'){
            if(stateTime < 0){
                state = 'lunge';
                stateTime = 120;
            }
        }
        else {
            const dist = Math.sqrt((p.pos.x-o.pos.x)**2+(p.pos.y-o.pos.y)**2);
            if(dist < 200 + p.sat.r){
                // !
                state = 'warn';
                stateTime = 500;
            }
        }
    }});}`,

    
    // we're also prolly gonna need a speedChanger too
    // `C(1,[],[19],{"w":200,"h":200,"speedMult":0.2,"speedChangePermanent":false,"x":9100,"y":1200,cr:()=>{}})`,
    
    // Invert
    // `C(0,[],[3],{
    
    // })`

    // wallbounce to the right of it, basically same render but blue and arrows pointing outwards and 

    // maybe evades.io pumpkin that has a ! above its head when it notices you (fades out) and then lunges after you and then returns to spawn idk 

    // crystals

    // top - octahedron
    `window.numGemsCollected=0;{let fadeTextOffset;const fadeInTime=400;const stayTime=600;const fadeOutTime=400;let fadeText='';let fadeTimer=-1;let collided=false;let particles=[];C(2,[],[3],{"x":0,"y":0,points:[[9600-43*2,1400],[9600,1400-61*2],[9600+43*2,1400],[9600,1400+61*2]],cr:(o)=>{
        let offsetX = 0;
        let offsetY = crystalOffset - 1700;
        let offsetAngle = Math.atan2(offsetY, offsetX) + crystalRotation + Math.PI;

        ctx.translate(Math.cos(offsetAngle) * offsetY, Math.sin(offsetAngle) * offsetY + 1700);
        
        const rx = 9600;
        const ry = 1400;
        
        ctx.save();
        // ctx.filter = "hue-rotate(" + ((window.time / 10) % 360) + "deg)";
        // center is 0,0 and sides are 100 units away
        ctx.translate(rx, ry);
        ctx.scale(2,2);
        ctx.translate(0, Math.sin(window.time / 1000) * 8);

        // line point definitions

        const width = 43;
        const height = 55 + 6;
        const topVertex = [0,-height];//85
        const bottomVertex = [0,height];
        const angle = (window.time / 1000) % (Math.PI/2);// /2
        const sideVertex1 = [Math.cos(angle) * width, 0];
        const sideVertex2 = [-Math.cos(angle) * width, 0];
        const sideVertex3 = [Math.sin(angle) * width, 0];
        const sideVertex4 = [-Math.sin(angle) * width, 0];

        const glassColor = collided === true ? '#1aff00' : '#FFBF00';
        const orbColor = collided === true ?
            {r: 86, g: 255, b: 71}:
            {r: 255, g: 212, b: 71};//same as"#FFD447"//'white'

        // 46 -> 115 so +69 nice

        const glassAlpha = 0.3;
        const orbAlpha = 0.82;

        const lineColor = collided === true ? '#028500' : '#856f00'//'#FFE878'//'#A67C00'//'black';
        const lineWidth = 6;
        const polyRatio = (84 - lineWidth) / 84;
        ctx.lineWidth = lineWidth;

        function drawVertex([x,y]){
            // ctx.shadowColor = lineColor;
            // ctx.shadowBlur = 3;
            ctx.beginPath();
            ctx.moveTo(...topVertex);
            ctx.lineTo(x,y);
            ctx.lineTo(...bottomVertex);
            ctx.stroke();
            ctx.closePath();
            // ctx.shadowBlur = 0;
        }

        function drawPolygon(v1, v2, offset){
            ctx.fillStyle = blendColor(glassColor, '#FFFFFF', (Math.sin(angle + offset)+1)/2 * 0.3);
            ctx.beginPath();
            ctx.moveTo(0,-height*polyRatio);
            ctx.lineTo(v1[0]*polyRatio, 0);
            ctx.lineTo(0,height*polyRatio);
            ctx.lineTo(v2[0]*polyRatio, 0);
            ctx.lineTo(0,-height*polyRatio);
            // ctx.moveTo(...topVertex);
            // ctx.lineTo(...v1);
            // ctx.lineTo(...bottomVertex);
            // ctx.lineTo(...v2);
            // ctx.lineTo(...topVertex);
            ctx.fill();
            ctx.closePath();
        }

        // first drawing black backgruond
        ctx.shadowColor = 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0.3)';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 10;
        const maxRight = Math.max(Math.abs(Math.cos(angle)), Math.abs(Math.sin(angle))) * width;
        const maxLeft = -maxRight;
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.beginPath();
        ctx.moveTo(...topVertex);
        ctx.lineTo(maxRight, 0);
        ctx.lineTo(...bottomVertex);
        ctx.lineTo(maxLeft, 0);
        ctx.lineTo(...topVertex);
        ctx.stroke();
        ctx.closePath();
        ctx.shadowBlur = 0;
        ctx.lineJoin = 'miter';

        ctx.globalAlpha = glassAlpha;
        drawPolygon(sideVertex2, sideVertex3, Math.PI);

        if(angle >= Math.PI / 4)drawPolygon(sideVertex2, sideVertex4, Math.PI/2);
        else drawPolygon(sideVertex1, sideVertex3, -Math.PI/2);

        ctx.globalAlpha = 1;
        ctx.strokeStyle = lineColor;
        drawVertex(sideVertex2);
        drawVertex(sideVertex3);

        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);

        grd.addColorStop(0.8, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',1)');
        grd.addColorStop(1, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0)');

        ctx.fillStyle = grd;

        // draw middle circle
        // ctx.shadowColor = orbColor;
        // ctx.shadowBlur = 60;
        ctx.globalAlpha = orbAlpha;
        ctx.fillStyle = orbColor;
        ctx.beginPath();
        ctx.arc(0,0, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        // ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        ctx.globalAlpha = glassAlpha;
        
        if(angle < Math.PI / 4)drawPolygon(sideVertex2, sideVertex4, Math.PI/2);
        else drawPolygon(sideVertex1, sideVertex3, -Math.PI/2);

        drawPolygon(sideVertex1, sideVertex4, 0);

        ctx.globalAlpha = 1;

        drawVertex(sideVertex1);
        drawVertex(sideVertex4);

        // draw horizontal line
        ctx.beginPath();
        ctx.moveTo(...sideVertex1);
        ctx.lineTo(0,0);
        ctx.lineTo(...sideVertex2);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(...sideVertex3);
        ctx.lineTo(0,0);
        ctx.lineTo(...sideVertex4);
        ctx.stroke();
        ctx.closePath();
        
        ctx.restore();

        for(let i = 0; i < particles.length; i++){
            const p = particles[i];
            p.mag += 0.6 * dt * p.vMult;
            p.r *= Math.exp(-dt / 16.66 * 0.03);

            // ctx.fillStyle = p.col;
            const t = Math.max(0,Math.min(1, 1 - p.mag / 150));
            ctx.fillStyle = blendColor('#028500','#FFFFFF',t);
            ctx.globalAlpha = t;

            ctx.beginPath();
            ctx.arc(rx + Math.cos(p.angle) * p.mag, ry + Math.sin(p.angle) * p.mag, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        if(particles.length !== 0) particles = particles.filter(p => p.mag <= 150 && p.r > 0); 
        
        if(fadeTimer > 0){
            fadeTimer -= dt;
            ctx.fillStyle = 'white';
            ctx.font = "48px Inter";
            if(fadeTimer > stayTime + fadeOutTime) ctx.globalAlpha = (fadeInTime+fadeOutTime+stayTime - fadeTimer) / fadeInTime;
            else if(fadeTimer > fadeInTime) ctx.globalAlpha = 1;
            else ctx.globalAlpha = Math.max(0, fadeTimer / fadeOutTime);

            ctx.fillText(fadeText, rx, ry - 164 + fadeTextOffset);
        }
        
        ctx.globalAlpha = 1;

        // ctx.translate(0, -crystalOffset);

        // ctx.translate(9600, 3100);
        // ctx.rotate(-crystalRotation);
        // ctx.translate(-9600, -3100);

        ctx.translate(-Math.cos(offsetAngle) * offsetY, -Math.sin(offsetAngle) * offsetY - 1700);
    },ef:(p, res, o)=>{
        if(collided === true) return;
        collided = true;

        // should also fade in / fade out 1 / 4. When fade ends jump should start
        window.numGemsCollected++;
        fadeText = window.numGemsCollected + " / 4";
        fadeTimer = fadeInTime + fadeOutTime + stayTime;
        fadeTextOffset = Math.sin(window.time / 1000) * 8;

        for(let i = 0; i < 50; i++){
            particles.push({r: Math.random() * 10 + 8, vMult: Math.random()*.5 + 0.5, mag: 0, angle: Math.random() * Math.PI * 2, col: blendColor('#028500','#FFFFFF',Math.random())})
        }
    }})}`,

    // right - cube
    `{let fadeTextOffset;const fadeInTime=400;const stayTime=600;const fadeOutTime=400;let fadeText='';let fadeTimer=-1;let collided=false;let particles=[];C(1,[],[3],{"x":11200,"y":3000,w:200,h:200,cr:(o)=>{
        let offsetX = 0;
        let offsetY = crystalOffset - 1700;
        let offsetAngle = Math.atan2(offsetY, offsetX) + crystalRotation + Math.PI*3/2;

        ctx.translate(Math.cos(offsetAngle) * offsetY - 1700, Math.sin(offsetAngle) * offsetY);

        const rx = 11300;
        const ry = 3100;
        ctx.save();
        // center is 0,0 and sides are 100 units away
        ctx.translate(rx, ry);
        ctx.scale(2,2);
        ctx.translate(0, Math.sin(window.time / 1000) * 8);

        // --- definitions and initialization ---
        ctx.lineJoin = 'round';

        const scaleFac = 0.78;
        const ellipseDist = 33*scaleFac;
        const ellipseRx = 30*2*scaleFac;
        const ellipseRy = 30*scaleFac;

        // colors
        const glassColor = collided === true ? '#1aff00' : '#FFBF00';
        const orbColor = collided === true ?
            {r: 86, g: 255, b: 71}:
            {r: 255, g: 212, b: 71};//same as"#FFD447"//'white'
        const glassAlpha = 0.3;
        const orbAlpha = 0.82;
        const lineColor = collided === true ? '#028500' : '#856f00'//'#FFE878'//'#A67C00'//'black';
        const lineWidth = 6;
        const polyRatio = (88 - lineWidth) / 88;
        ctx.lineWidth = lineWidth;

        // x,y,rx,ry
        const angle = (window.time / 1000) % (Math.PI/2);

        // first ellipse
        const vertex1 = [Math.cos(angle) * ellipseRx, Math.sin(angle) * ellipseRy - ellipseDist];
        const vertex2 = [Math.cos(angle+Math.PI/2) * ellipseRx, Math.sin(angle+Math.PI/2) * ellipseRy - ellipseDist];
        const vertex3 = [Math.cos(angle+Math.PI) * ellipseRx, Math.sin(angle+Math.PI) * ellipseRy - ellipseDist];
        const vertex4 = [Math.cos(angle+Math.PI*3/2) * ellipseRx, Math.sin(angle+Math.PI*3/2) * ellipseRy - ellipseDist];

        // second ellipse
        const vertex5 = [Math.cos(angle) * ellipseRx, Math.sin(angle) * ellipseRy + ellipseDist];
        const vertex6 = [Math.cos(angle+Math.PI/2) * ellipseRx, Math.sin(angle+Math.PI/2) * ellipseRy + ellipseDist];
        const vertex7 = [Math.cos(angle+Math.PI) * ellipseRx, Math.sin(angle+Math.PI) * ellipseRy + ellipseDist];
        const vertex8 = [Math.cos(angle+Math.PI*3/2) * ellipseRx, Math.sin(angle+Math.PI*3/2) * ellipseRy + ellipseDist];

        function drawLine(v1, v2){
            ctx.beginPath();
            ctx.moveTo(...v1);
            ctx.lineTo(...v2);
            ctx.stroke();
            ctx.closePath();
        }

        function drawPoly(v1, v2, v3, v4, offset){
            ctx.fillStyle = offset === undefined ? glassColor : blendColor(glassColor, '#FFFFFF', (Math.sin(angle + offset)+1)/2 * 0.3);
            ctx.beginPath();
            ctx.moveTo(v1[0]*polyRatio,v1[1]*polyRatio);
            ctx.lineTo(v2[0]*polyRatio,v2[1]*polyRatio);
            ctx.lineTo(v3[0]*polyRatio,v3[1]*polyRatio);
            ctx.lineTo(v4[0]*polyRatio,v4[1]*polyRatio);
            ctx.lineTo(v1[0]*polyRatio,v1[1]*polyRatio);
            ctx.fill();
            ctx.closePath();
        }

        // --- drawing background ---
        ctx.shadowColor = 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0.3)';
        ctx.lineJoin = 'bevel';

        // const verticies = [vertex1, vertex2, vertex3, vertex4, vertex5, vertex6, vertex7, vertex8];

        // for(let i = 0; i < verticies.length; i++){
        //     ctx.fillStyle = 'white';
        //     ctx.fillText(i+1, ...verticies[i])
        // }

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 10;
        if(angle < Math.PI / 4){
            ctx.beginPath();
            ctx.moveTo(...vertex3);
            ctx.lineTo(...vertex4);
            ctx.lineTo(...vertex1);
            ctx.lineTo(...vertex5);
            ctx.lineTo(...vertex6);
            ctx.lineTo(...vertex7);
            ctx.lineTo(...vertex3);
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.moveTo(...vertex2);
            ctx.lineTo(...vertex3);
            ctx.lineTo(...vertex4);
            ctx.lineTo(...vertex8);
            ctx.lineTo(...vertex5);
            ctx.lineTo(...vertex6);
            ctx.lineTo(...vertex2);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.shadowBlur = 0;
        ctx.lineJoin = 'miter';

        // --- draw stuff behind ---
        ctx.strokeStyle = lineColor;
        drawLine(vertex3, vertex4);
        drawLine(vertex7, vertex8);

        // vertical lines
        ctx.globalAlpha = 1;
        drawLine(vertex3, vertex7);
        drawLine(vertex4, vertex8);

        if(angle < Math.PI/4){
            drawLine(vertex4, vertex1);
            drawLine(vertex8, vertex5);

            ctx.fillStyle = glassColor;
            ctx.globalAlpha = glassAlpha;
            drawPoly(vertex1, vertex4, vertex8, vertex5, -Math.PI/2);
        } else {
            drawLine(vertex3, vertex2);
            drawLine(vertex6, vertex7);

            ctx.fillStyle = glassColor;
            ctx.globalAlpha = glassAlpha;
            drawPoly(vertex3, vertex2, vertex6, vertex7, Math.PI/2);
        }

        ctx.fillStyle = glassColor;
        ctx.globalAlpha = glassAlpha;
        drawPoly(vertex3, vertex4, vertex8, vertex7, Math.PI);
        drawPoly(vertex5, vertex6, vertex7, vertex8, undefined);

        // --- draw middle circle ---
        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
        grd.addColorStop(0.8, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',1)');
        grd.addColorStop(1, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0)');
        ctx.fillStyle = grd;
        ctx.globalAlpha = orbAlpha;
        ctx.fillStyle = orbColor;
        ctx.beginPath();
        ctx.arc(0,0, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        // --- draw stuff ahead ---
        ctx.fillStyle = glassColor;
        ctx.globalAlpha = glassAlpha;
        drawPoly(vertex1, vertex2, vertex6, vertex5, 0);
        drawPoly(vertex1, vertex2, vertex3, vertex4, undefined);

        ctx.globalAlpha = 1;
        drawLine(vertex1, vertex2);
        drawLine(vertex5, vertex6);

        if(angle < Math.PI/4){
            ctx.fillStyle = glassColor;
            ctx.globalAlpha = glassAlpha;
            drawPoly(vertex3, vertex2, vertex6, vertex7, Math.PI/2);

            ctx.globalAlpha = 1;
            drawLine(vertex3, vertex2);
            drawLine(vertex6, vertex7);
        } else {
            ctx.fillStyle = glassColor;
            ctx.globalAlpha = glassAlpha;
            drawPoly(vertex1, vertex4, vertex8, vertex5, -Math.PI/2);

            ctx.globalAlpha = 1;
            drawLine(vertex4, vertex1);
            drawLine(vertex8, vertex5);
        }

        // vertical lines
        ctx.globalAlpha = 1;
        drawLine(vertex1, vertex5);
        drawLine(vertex2, vertex6);

        ctx.restore();

        for(let i = 0; i < particles.length; i++){
            const p = particles[i];
            p.mag += 0.6 * dt * p.vMult;
            p.r *= Math.exp(-dt / 16.66 * 0.03);

            // ctx.fillStyle = p.col;
            const t = Math.max(0,Math.min(1, 1 - p.mag / 150));
            ctx.fillStyle = blendColor('#028500','#FFFFFF',t);
            ctx.globalAlpha = t;

            ctx.beginPath();
            ctx.arc(rx + Math.cos(p.angle) * p.mag, ry + Math.sin(p.angle) * p.mag, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        if(particles.length !== 0) particles = particles.filter(p => p.mag <= 150 && p.r > 0); 
        
        if(fadeTimer > 0){
            fadeTimer -= dt;
            ctx.fillStyle = 'white';
            ctx.font = "48px Inter";
            if(fadeTimer > stayTime + fadeOutTime) ctx.globalAlpha = (fadeInTime+fadeOutTime+stayTime - fadeTimer) / fadeInTime;
            else if(fadeTimer > fadeInTime) ctx.globalAlpha = 1;
            else ctx.globalAlpha = Math.max(0, fadeTimer / fadeOutTime);

            ctx.fillText(fadeText, rx, ry - 164 + fadeTextOffset);
        }
        
        ctx.globalAlpha = 1;

        ctx.translate(-Math.cos(offsetAngle) * offsetY + 1700, -Math.sin(offsetAngle) * offsetY);
    },ef:(p, res, o)=>{
        if(collided === true) return;
        collided = true;

        // should also fade in / fade out 1 / 4. When fade ends jump should start
        window.numGemsCollected++;
        fadeText = window.numGemsCollected + " / 4";
        fadeTimer = fadeInTime + fadeOutTime + stayTime;
        fadeTextOffset = Math.sin(window.time / 1000) * 8;

        for(let i = 0; i < 50; i++){
            particles.push({r: Math.random() * 10 + 8, vMult: Math.random()*.5 + 0.5, mag: 0, angle: Math.random() * Math.PI * 2, col: blendColor('#028500','#FFFFFF',Math.random())})
        }
    }})}`,

    // bottom - tetrahedron
    `window.numGemsCollected=0;{let fadeTextOffset;const fadeInTime=400;const stayTime=600;const fadeOutTime=400;let fadeText='';let fadeTimer=-1;let collided=false;let particles=[];C(2,[],[3],{"x":0,"y":0,points:[[9600,4650],[9750,4900],[9450,4900]],cr:(o)=>{
        let offsetX = 0;
        let offsetY = crystalOffset - 1700;
        let offsetAngle = Math.atan2(offsetY, offsetX) + crystalRotation;

        ctx.translate(Math.cos(offsetAngle) * offsetY, Math.sin(offsetAngle) * offsetY - 1700);
        
        const rx = 9600;
        const ry = 4800;
        
        ctx.save();
        // ctx.filter = "hue-rotate(" + ((window.time / 10) % 360) + "deg)";
        // center is 0,0 and sides are 100 units away
        ctx.translate(rx, ry);
        ctx.scale(2,2);
        ctx.translate(0, Math.sin(window.time / 1000) * 8);

        // --- init ---
        const extendDownMult = 0.45;
        const width = 43*2 * 0.84;
        const height = 60;
        const topVertex = [0,-height];//85
        const angle = (window.time / 1000) % (Math.PI/1.5);
        const tilt = 20;
        const sideVertex1 = [Math.sin(angle) * width, height*extendDownMult + Math.cos(angle)*tilt];
        const sideVertex2 = [Math.sin(angle+Math.PI*2/3) * width, height*extendDownMult + Math.cos(angle+Math.PI*2/3)*tilt];
        const sideVertex3 = [Math.sin(angle+Math.PI*4/3) * width, height*extendDownMult + Math.cos(angle+Math.PI*4/3)*tilt];
        const glassColor = collided === true ? '#1aff00' : '#FFBF00';
        const orbColor = collided === true ?
            {r: 86, g: 255, b: 71}:
            {r: 255, g: 212, b: 71};//same as"#FFD447"//'white'
        const glassAlpha = 0.3;
        const orbAlpha = 0.82;
        const lineColor = collided === true ? '#028500' : '#856f00';
        const lineWidth = 6;
        const polyRatio = (79 - lineWidth) / 79;
        ctx.lineWidth = lineWidth;
        function drawVertex([x,y]){
            // ctx.shadowColor = lineColor;
            // ctx.shadowBlur = 3;
            ctx.beginPath();
            ctx.moveTo(...topVertex);
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.closePath();
            // ctx.shadowBlur = 0;
        }

        function drawPoly(v1, v2, offset){
            let pr = polyRatio;
            ctx.fillStyle = blendColor(glassColor, '#FFFFFF', (Math.sin(angle + offset)+1)/2 * 0.3);
            ctx.beginPath();
            ctx.moveTo(v1[0]*pr, v1[1]*pr);
            ctx.lineTo(0,-height*pr);
            ctx.lineTo(v2[0]*pr, v2[1]*pr);
            ctx.lineTo(v1[0]*pr, v1[1]*pr);
            ctx.fill();
            ctx.closePath();
        }

        // --- drawing background ---
        const verticies = [sideVertex1, sideVertex2, sideVertex3];

        let maxX = -Infinity, minX = Infinity, maxY = -Infinity;
        let maxXv, minXv, maxYv;
        for(let i = 0; i < verticies.length; i++){
            // ctx.fillStyle = 'white';
            // ctx.fillText(i+1, verticies[i][0], verticies[i][1]);

            if(verticies[i][0] > maxX){
                maxX = verticies[i][0];
                maxXv = verticies[i];
            }
            if(verticies[i][1] > maxY){
                maxY = verticies[i][1];
                maxYv = verticies[i];
            }
            if(verticies[i][0] < minX){
                minX = verticies[i][0];
                minXv = verticies[i];
            }
        }
        
        // between the top, vertex with the least x, vertex with the most y, vertex with the most x
        ctx.shadowColor = 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0.3)';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 10;
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.beginPath();
        ctx.moveTo(...topVertex);
        ctx.lineTo(...minXv);
        ctx.lineTo(...maxYv);
        ctx.lineTo(...maxXv);
        ctx.lineTo(...topVertex);
        ctx.stroke();
        ctx.closePath();
        ctx.shadowBlur = 0;
        ctx.lineJoin = 'miter';

        // --- drawing stuff b4 ---
        ctx.globalAlpha = glassAlpha;

        if(angle > Math.PI/6) drawPoly(sideVertex1, sideVertex2, Math.PI);        // this one
        if(angle < Math.PI / 2) drawPoly(sideVertex2, sideVertex3, Math.PI*3/2);

        // bottom polygon
        ctx.lineJoin = 'bevel';
        ctx.beginPath();
        ctx.moveTo(...sideVertex1);
        ctx.lineTo(...sideVertex2);
        ctx.lineTo(...sideVertex3);
        ctx.lineTo(...sideVertex1);
        ctx.fillStyle = blendColor(glassColor, '#FFFFFF', .05);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = lineColor;
        ctx.stroke();
        ctx.closePath();
        ctx.lineJoin = 'miter';

        drawVertex(sideVertex2);

        if(angle < Math.PI / 3){
            drawVertex(sideVertex3);
        } else {
            drawVertex(sideVertex1); 
        }

        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);

        grd.addColorStop(0.8, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',1)');
        grd.addColorStop(1, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0)');

        ctx.fillStyle = grd;

        // --- orb ---
        ctx.globalAlpha = orbAlpha;
        ctx.fillStyle = orbColor;
        ctx.beginPath();
        ctx.arc(0,0, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        ctx.globalAlpha = glassAlpha;
        
        // --- after ---

        if(angle < Math.PI/6) drawPoly(sideVertex1, sideVertex2, Math.PI);
        
        if(angle >= Math.PI / 2)drawPoly(sideVertex2, sideVertex3, Math.PI*3/2);
        drawPoly(sideVertex3, sideVertex1, Math.PI/2);

        // bottom polygon
        ctx.lineJoin = 'bevel';
        ctx.beginPath();
        ctx.moveTo(...sideVertex1);
        ctx.lineTo(...sideVertex3);
        ctx.lineTo(...sideVertex1);
        ctx.stroke();
        ctx.closePath();
        ctx.lineJoin = 'miter';

        ctx.globalAlpha = 1;

        if(angle < Math.PI / 3){
            drawVertex(sideVertex1);
        } else {
            drawVertex(sideVertex3); 
        }
        
        ctx.restore();

        for(let i = 0; i < particles.length; i++){
            const p = particles[i];
            p.mag += 0.6 * dt * p.vMult;
            p.r *= Math.exp(-dt / 16.66 * 0.03);

            // ctx.fillStyle = p.col;
            const t = Math.max(0,Math.min(1, 1 - p.mag / 150));
            ctx.fillStyle = blendColor('#028500','#FFFFFF',t);
            ctx.globalAlpha = t;

            ctx.beginPath();
            ctx.arc(rx + Math.cos(p.angle) * p.mag, ry + Math.sin(p.angle) * p.mag, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        if(particles.length !== 0) particles = particles.filter(p => p.mag <= 150 && p.r > 0); 
        
        if(fadeTimer > 0){
            fadeTimer -= dt;
            ctx.fillStyle = 'white';
            ctx.font = "48px Inter";
            if(fadeTimer > stayTime + fadeOutTime) ctx.globalAlpha = (fadeInTime+fadeOutTime+stayTime - fadeTimer) / fadeInTime;
            else if(fadeTimer > fadeInTime) ctx.globalAlpha = 1;
            else ctx.globalAlpha = Math.max(0, fadeTimer / fadeOutTime);

            ctx.fillText(fadeText, rx, ry - 164 + fadeTextOffset);
        }
        
        ctx.globalAlpha = 1;

        ctx.translate(-Math.cos(offsetAngle) * offsetY, -Math.sin(offsetAngle) * offsetY + 1700);
    },ef:(p, res, o)=>{
        if(collided === true) return;
        collided = true;

        // should also fade in / fade out 1 / 4. When fade ends jump should start
        window.numGemsCollected++;
        fadeText = window.numGemsCollected + " / 4";
        fadeTimer = fadeInTime + fadeOutTime + stayTime;
        fadeTextOffset = Math.sin(window.time / 1000) * 8;

        for(let i = 0; i < 50; i++){
            particles.push({r: Math.random() * 10 + 8, vMult: Math.random()*.5 + 0.5, mag: 0, angle: Math.random() * Math.PI * 2, col: blendColor('#028500','#FFFFFF',Math.random())})
        }
    }})}`,

    // left - circle w/ radial lines
    `{let fadeTextOffset;const fadeInTime=400;const stayTime=600;const fadeOutTime=400;let fadeText='';let fadeTimer=-1;let collided=false;let particles=[];C(0,[],[3],{"x":7900,"y":3100,r:100,cr:(o)=>{
        let offsetX = 0;
        let offsetY = crystalOffset - 1700;
        let offsetAngle = Math.atan2(offsetY, offsetX) + crystalRotation + Math.PI/2;

        ctx.translate(Math.cos(offsetAngle) * offsetY + 1700, Math.sin(offsetAngle) * offsetY);

        const rx = 7900;
        const ry = 3100;
        ctx.save();
        // center is 0,0 and sides are 100 units away
        ctx.translate(rx, ry);
        ctx.scale(2,2);
        ctx.translate(0, Math.sin(window.time / 1000) * 8);

        // --- definitions and initialization ---
        ctx.lineJoin = 'round';

        const r = 50;
        const tilt = 18;

        // colors
        const glassColor = collided === true ? '#1aff00' : '#FFBF00';
        const orbColor = collided === true ?
            {r: 86, g: 255, b: 71}:
            {r: 255, g: 212, b: 71};//same as"#FFD447"//'white'
        const glassAlpha = 0.3;
        const orbAlpha = 0.82;
        const lineColor = collided === true ? '#028500' : '#856f00'//'#FFE878'//'#A67C00'//'black';
        const lineWidth = 6;
        const polyRatio = (88 - lineWidth) / 88;
        ctx.lineWidth = lineWidth;

        // x,y,rx,ry
        const angle = (window.time / 1000) % (Math.PI/2);

        // --- drawing background --- TODO
        ctx.shadowColor = 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0.3)';
        ctx.lineJoin = 'bevel';

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(0,0,r,0,Math.PI*2);
        ctx.stroke();
        ctx.closePath();
        ctx.shadowBlur = 0;
        ctx.lineJoin = 'miter';
        

        // --- draw stuff behind ---

        function drawEllipse(v){
            ctx.beginPath();
            ctx.moveTo(0, r);
            ctx.ellipse()
        }

        // for speed no lighting on the sphere, but still blendColor fillStyle bc time averaging

        // outline and back fill
        ctx.strokeStyle = lineColor;
        ctx.beginPath();
        ctx.arc(0,0,r,0,Math.PI*2);
        ctx.fillStyle = blendColor(glassColor, '#FFFFFF', (Math.sin(window.time / 1000)+1)/2 * 0.3);
        ctx.globalAlpha = glassAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.closePath();

        // stuff behind orb
        ctx.beginPath();
        ctx.ellipse(0,0,r,Math.abs(tilt*Math.sin(window.time / 1000)),0,0,Math.PI,Math.sin(window.time / 1000) < 0);
        ctx.stroke();
        ctx.closePath();

        // vertical lines
        ctx.beginPath();
        ctx.ellipse(0,0,Math.abs(r*Math.cos(angle+Math.PI/2)),r,0,Math.PI/2,Math.PI*3/2,true);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(0,0,Math.abs(r*Math.cos(angle)),r,0,Math.PI/2,Math.PI*3/2,false);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = lineColor;
        ctx.beginPath();
        ctx.arc(0,0,r,0,Math.PI*2);
        ctx.fillStyle = blendColor(glassColor, '#FFFFFF', (Math.sin(window.time / 1000)+1)/2 * 0.3);
        ctx.globalAlpha = glassAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.closePath();

        // orb
        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
        grd.addColorStop(0.8, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',1)');
        grd.addColorStop(1, 'rgba('+orbColor.r+','+orbColor.g+','+orbColor.b+',0)');
        ctx.fillStyle = grd;
        ctx.globalAlpha = orbAlpha;
        ctx.fillStyle = orbColor;
        ctx.beginPath();
        ctx.arc(0,0, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        // stuff ahead of orb
        ctx.beginPath();
        ctx.ellipse(0,0,r,Math.abs(tilt*Math.sin(window.time / 1000)),0,0,Math.PI,Math.sin(window.time / 1000) >= 0);
        ctx.stroke();
        ctx.closePath();

        // vertical lines
        
        ctx.beginPath();
        ctx.ellipse(0,0,Math.abs(r*Math.cos(angle+Math.PI/2)),r,0,Math.PI/2,Math.PI*3/2,false);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(0,0,Math.abs(r*Math.cos(angle)),r,0,Math.PI/2,Math.PI*3/2,true);
        ctx.stroke();
        ctx.closePath();

        ctx.restore();

        for(let i = 0; i < particles.length; i++){
            const p = particles[i];
            p.mag += 0.6 * dt * p.vMult;
            p.r *= Math.exp(-dt / 16.66 * 0.03);

            // ctx.fillStyle = p.col;
            const t = Math.max(0,Math.min(1, 1 - p.mag / 150));
            ctx.fillStyle = blendColor('#028500','#FFFFFF',t);
            ctx.globalAlpha = t;

            ctx.beginPath();
            ctx.arc(rx + Math.cos(p.angle) * p.mag, ry + Math.sin(p.angle) * p.mag, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        if(particles.length !== 0) particles = particles.filter(p => p.mag <= 150 && p.r > 0); 
        
        if(fadeTimer > 0){
            fadeTimer -= dt;
            ctx.fillStyle = 'white';
            ctx.font = "48px Inter";
            if(fadeTimer > stayTime + fadeOutTime) ctx.globalAlpha = (fadeInTime+fadeOutTime+stayTime - fadeTimer) / fadeInTime;
            else if(fadeTimer > fadeInTime) ctx.globalAlpha = 1;
            else ctx.globalAlpha = Math.max(0, fadeTimer / fadeOutTime);

            ctx.fillText(fadeText, rx, ry - 164 + fadeTextOffset);
        }
        
        ctx.globalAlpha = 1;

        ctx.translate(-Math.cos(offsetAngle) * offsetY - 1700, -Math.sin(offsetAngle) * offsetY);
    },ef:(p, res, o)=>{
        if(collided === true) return;
        collided = true;

        // should also fade in / fade out 1 / 4. When fade ends jump should start
        window.numGemsCollected++;
        fadeText = window.numGemsCollected + " / 4";
        fadeTimer = fadeInTime + fadeOutTime + stayTime;
        fadeTextOffset = Math.sin(window.time / 1000) * 8;

        for(let i = 0; i < 50; i++){
            particles.push({r: Math.random() * 10 + 8, vMult: Math.random()*.5 + 0.5, mag: 0, angle: Math.random() * Math.PI * 2, col: blendColor('#028500','#FFFFFF',Math.random())})
        }
    }})}`,

    // mirror which is a grey wall but you can see yourself rendered on the other side
    `{let collided=false;let lastCollided = false;let renderPlayer;let fadeOut=false;C(1,[],[0],{x: 9900, w: 200, y: 1300 - 20, h: 40,cr: (o)=>{
        ctx.fillStyle = '#1c1c1c';
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:()=>{
        collided = true;

        if(lastCollided === false){
            if(renderPlayer !== undefined){
                players[renderPlayer.id] = undefined;
                renderPlayer = undefined;
            }
            renderPlayer = window.createPlayer();
            renderPlayer.id = window.players.length;
            renderPlayer.name = 'Clone';
            renderPlayer.renderRadius = 0;
            window.players.push(renderPlayer);
            fadeOut = false;
        }
    },sf:(o,p)=>{
        if(renderPlayer !== undefined){
            renderPlayer.pos.x = p.pos.x;
            renderPlayer.pos.y = (o.pos.y+o.dimensions.y/2) - (p.pos.y - (o.pos.y+o.dimensions.y/2));
            if(renderPlayer.pos.y < 1230.5) renderPlayer.pos.y = 1230.5;
            else if(renderPlayer.pos.y > 1369.5) renderPlayer.pos.y = 1369.5;
            if(renderPlayer.pos.x > 10100) renderPlayer.pos.x = 10100;
            else if(renderPlayer.pos.x < 9900) renderPlayer.pos.x = 9900;

            const keys = ['ship', 'shipAngle', 'grapple', 'deathTimer', 'deathTime'];
            for(let i = 0; i < keys.length; i++){
                renderPlayer[keys[i]] = window.players[window.selfId][keys[i]];
            }

            if(fadeOut === true){
                renderPlayer.renderRadius *= 0.9;
                if(renderPlayer.renderRadius < 5){
                    fadeOut = false;
                    players[renderPlayer.id] = undefined;
                    renderPlayer = undefined;
                }
            } else {
                renderPlayer.renderRadius = (49.5) * 0.1 + 0.9 * renderPlayer.renderRadius; 
            }
        }
        if(lastCollided === true && collided === false){
            fadeOut = true;
        }

        lastCollided = collided;
        collided = false;
    }})}`,

    // player with zzz from the top (or blue z with alpha fading on middle?) that will swap places with you looking like you took their place when collided 10000 1600
    `{let spawnTimer=0;let maxSpawnTimer = 600;let zs=[];let moved=false;C(0,[],[0],{x: 10000, y: 1600, r: 49.5,ef:(p,res,o)=>{
        const tmp1 = o.pos.x;
        const tmp2 = o.pos.y;

        o.pos.x = p.pos.x;
        o.pos.y = p.pos.y;

        p.pos.x = tmp1;
        p.pos.y = tmp2;

        moved = true;
    },cr:(o)=>{
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        // z's coming up in sine wave horizontally
        ctx.fillStyle = 'white';

        if(moved === false){
            spawnTimer -= dt;

            if(spawnTimer < 0){
                spawnTimer += maxSpawnTimer;

                const x = o.pos.x + Math.sin(window.time / 300 + i*Math.PI) * 20;
                const y = o.pos.y - 100*i - ((window.time * 0.1) % 100);
                ctx.globalAlpha = Math.max(0,(o.pos.y - y) / 300);
                
                zs.push({x: o.pos.x, y: o.pos.y, alpha: 1, dead: false, xangle: 0, xvMul: Math.random() - 0.5})
            }
        }

        if(zs.length === 0) return;

        for(let i = 0; i < zs.length; i++){
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.globalAlpha = zs[i].alpha;
            zs[i].alpha -= dt * 0.0006;

            zs[i].xangle += dt * 0.003; //* zs[i].xvMul;
            zs[i].x = o.pos.x + Math.sin(zs[i].xangle) * 18;
            zs[i].y -= 0.1 * dt;

            ctx.font = '62px Inter';

            ctx.fillText('z', zs[i].x, zs[i].y);
            if(zs[i].alpha < 0) zs[i].dead = true;
        }
        zs = zs.filter(z => z.dead === false);

        ctx.globalAlpha = 1;
    }})}`,

    // typing! - If we ever make this into a real obs render I think we should make obs flash red when you type an
    // incorrect key and a param to "type over" correct keys with incorrect letters so that you have to backspace
    `var typingVinette;C(1,[],[24],{x:11300,y:3600,w: 200,h:200,innerR: 0, innerG: 0, innerB: 0, innerSize: 0, innerOpacity: 0, outerR: 0, outerG: 0, outerB: 0, outerSize: 0.42, outerOpacity: 0.9});typingVinette=obstacles[obstacles.length-1]`,
    `{let completed = false;let active = false;let curChar = 0;let text="Type me to continue!";let freezeX, freezeY;C(2,[],[3],{"x":0,"y":0,points:[[11400, 3600], [11500, 3700],[11400, 3800], [11300, 3700]],ef:(p)=>{
        if(completed === true) return;
        if(active === true) {
            p.pos.x = freezeX;
            p.pos.y = freezeY;
            return;
        }
        active = true;

        freezeX = p.pos.x;
        freezeY = p.pos.y;

        let oldKeyDown = window.onkeydown;
        let oldKeyUp = window.onkeyup;

        for(let key in window.input){window.input[key] = false;}

        window.onkeyup = () => {};
        window.onkeydown = (e) => {
            if(e.type !== 'keydown') return;
            if(text[curChar] === e.key) curChar++;
            if(curChar >= text.length) {window.onkeydown = oldKeyDown; window.onkeyup = oldKeyUp; completed = true; active = false;typingVinette.pos.x = -1E9;}
        }
    },cr:(o)=>{
        if (completed === true) ctx.globalAlpha = 0.2;
        ctx.fillStyle = 'white';
        ctx.font = (o.dimensions.x / 10) + "px Inter";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const aheadChar = Math.min(
            text.length,
            curChar + 15
        );
        const textToDisplay = text.slice(curChar, aheadChar);
        ctx.fillText(
            textToDisplay,
            11400, 3700,
        );
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.17;
        if (completed === true) ctx.globalAlpha = 0.05;

        ctx.beginPath();
        for(let i = 0; i < o.sat.points.length; i++){
            ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        }
        ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha = 1;
    }})}`,

    // teleport to mouse cursor (render is a mouse cursor but the white bit in the middle fades green) 11400 3400
    // also cursor is lava obs in here as well
    `{let mouseX,mouseY;let hint = undefined;
    const oldMouseMove = window.onmousemove;
    window.onmousemove = (...params) => {
        oldMouseMove(...params);
        const e = params[0];
        mouseX = e.pageX; mouseY = e.pageY;
    }
    C(0,[],[3],{
        x: 10000, y: 4600, r: 52,
        cr: (o) => {
            const p = window.players[window.selfId];
            const angle = Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x) - 1.1;
            const s = 100 / 17;
            ctx.translate(o.pos.x, o.pos.y);

            ctx.rotate(angle);
            ctx.translate(-11*s/2, -17*s/2);

            ctx.beginPath();
            ctx.fillStyle = blendColor('#FFFFFF', '#38ab30', (Math.sin(window.time / 520)+1)/2 * 0.8);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 6;
            ctx.moveTo(0, 0);
            ctx.lineTo(11*s,11*s);
            ctx.lineTo(7*s, 11*s);
            ctx.lineTo(9*s, 16*s);
            ctx.lineTo(8*s, 17*s);
            ctx.lineTo(7*s, 17*s);
            ctx.lineTo(6*s, 16*s);
            ctx.lineTo(4*s, 12*s);
            ctx.lineTo(1*s, 15*s);
            ctx.lineTo(0  , 15*s);
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.translate(11*s/2, 17*s/2);
            ctx.rotate(-angle);
            ctx.translate(-o.pos.x, -o.pos.y);
        },
        ef:(p, res, o) => {
            const c = canvas.getBoundingClientRect();

            const worldX = p.pos.x + ((mouseX - c.x) / c.width) * canvas.w - canvas.w/2;
            const worldY = p.pos.y + ((mouseY - c.y) / c.height) * canvas.h - canvas.h/2;

            const worldSAT = new SAT.Circle(new SAT.Vector(worldX, worldY), 0.1);

            let collided = false;
            if(hint !== undefined){
                const o = obstacles[hint];
                res.clear();
                if(o.sat.r !== undefined){
                    collided = SAT.testCircleCircle(o.sat, worldSAT);
                } else {
                    collided = SAT.testPolygonCircle(o.sat, worldSAT, res);
                }
                if(collided === true) return;
            }

            for(let i = 0; i < obstacles.length; i++){
                const o = obstacles[i];
                if(o.dimensions.x + o.dimensions.y < 300) continue;

                res.clear();
                if(o.sat.r !== undefined){
                    collided = SAT.testCircleCircle(o.sat, worldSAT);
                } else {
                    collided = SAT.testPolygonCircle(o.sat, worldSAT, res);
                }
                
                if(collided === true) {hint = i;return;}
            }

            hint = undefined;

            p.pos.x = worldX;
            p.pos.y = worldY;
        }
    })
    
    // cursor is lava

    // lava obs
    C(0,[],[1],{x: -1E9, y: 0, r: 49.5});
    const lavaObs = obstacles[obstacles.length - 1];

    let clcollided = false; let cllastcollided=false;
    C(0,[],[3],{
        x: 9300, y: 4600, r: 52,
        cr: (o) => {
            const p = window.players[window.selfId];
            const angle = Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x) - 1.1;
            const s = 100 / 17;
            ctx.translate(o.pos.x, o.pos.y);

            ctx.rotate(angle);
            ctx.translate(-11*s/2, -17*s/2);

            ctx.beginPath();
            ctx.fillStyle = blendColor('#FFFFFF', '#9e0000', (Math.sin(window.time / 520)+1)/2 * 0.8);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 6;
            ctx.moveTo(0, 0);
            ctx.lineTo(11*s,11*s);
            ctx.lineTo(7*s, 11*s);
            ctx.lineTo(9*s, 16*s);
            ctx.lineTo(8*s, 17*s);
            ctx.lineTo(7*s, 17*s);
            ctx.lineTo(6*s, 16*s);
            ctx.lineTo(4*s, 12*s);
            ctx.lineTo(1*s, 15*s);
            ctx.lineTo(0  , 15*s);
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.translate(11*s/2, 17*s/2);
            ctx.rotate(-angle);
            ctx.translate(-o.pos.x, -o.pos.y);
        },
        ef:(p, res, o) => {
            const c = canvas.getBoundingClientRect();

            const worldX = p.pos.x + ((mouseX - c.x) / c.width) * canvas.w - canvas.w/2;
            const worldY = p.pos.y + ((mouseY - c.y) / c.height) * canvas.h - canvas.h/2;

            const worldSAT = new SAT.Circle(new SAT.Vector(worldX, worldY), 0.1);

            lavaObs.pos.x = worldX;
            lavaObs.pos.y = worldY;

            clcollided = true;
        },
        sf:(o)=>{
            if(cllastcollided === true && clcollided === false) {lavaObs.pos.x = -1E9;}

            cllastcollided = clcollided;
            clcollided = false;    
        }
    })

    }`,

    // hole (teleports you to the other side of it)
    `{let colliding = false;let lastColliding = false;let t,angle;C(0,[],[0], {
        x: 8100, y: 2800, r: 100,
        cr: (o) => {
            ctx.fillStyle = colors.background;
            // ctx.setLineDash([30, 30]);
            // ctx.lineDashOffset = -window.time / 15;
            ctx.lineWidth = 4.8;
            ctx.strokeStyle = colors.tile;

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r-2, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 0.75;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(8000, 2800);
            ctx.quadraticCurveTo(8100, 2800, 8100, 2700);
            ctx.quadraticCurveTo(8100, 2800, 8200, 2800);
            ctx.quadraticCurveTo(8100, 2800, 8100, 2900);
            ctx.quadraticCurveTo(8100, 2800, 8000, 2800);
            ctx.stroke();
            ctx.closePath();

            // ctx.beginPath();
            // ctx.moveTo(8000, 2800);
            // ctx.lineTo(8200, 2800);
            // ctx.stroke();
            // ctx.closePath();

            // ctx.beginPath();
            // ctx.moveTo(8100, 2700);
            // ctx.lineTo(8100, 2900);
            // ctx.stroke();
            // ctx.closePath();

            // ctx.setLineDash([]);
            
            ctx.globalAlpha = 1;
        }, ef:(p, res, o) => {
            colliding = true;
            if(lastColliding === false){
                t = 0;
                angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);
            }
        }, sf: (o,p) => {
            // rotate player around
            if(t !== undefined){
                angle += 0.01 * dt;
                t += 0.01 * dt;
                if(t > Math.PI){
                    angle -= t - Math.PI;
                    t = undefined;
                }
                
                p.pos.x = o.pos.x + Math.cos(angle) * (o.sat.r+p.sat.r-3);
                p.pos.y = o.pos.y + Math.sin(angle) * (o.sat.r+p.sat.r-3);
            }

            lastColliding = colliding;
            colliding = false;
        }
    })}`,

    // 7800 2800 4 lavas with .1 opacity. When you stand on them they get less and less opaque until they become full opaq and kill (or maybe lavas and normals in checkerboard?)
    // `{let opaq=0.1;C(0,[],[1],{boundPlayer: true,x:-1E9, y:3400, r: 50},ef:(p,res,o)=>{
    //     opaq += dt;
    // });}`,

    // rotating oval 10600 1800
    `{
        const x = 10600;
        const y = 1800;
        const r1 = 100;
        const r2 = 50;
    
        let pts = [];
        for(let i = 0; i < 20; i++){
            const angle = i / 20 * Math.PI * 2;
            pts.push([x + Math.cos(angle) * r1, y + Math.sin(angle) * r2]);
        }
    
        C(2,[1],[0],{x:0,y:0,points: pts,initialRotation:0,pivotX:x,pivotY:y,rotateSpeed:0.002,cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(x,y,r1,r2,o.rotation,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();    
        }})}`,

    // pacman
    `{
        function shortAngleDist(a0,a1) {
            const max = Math.PI*2;
            const da = (a1 - a0) % max;
            return 2*da % max - da;
        }

        function interpolateDirection(a0,a1,t) {
            return a0 + shortAngleDist(a0,a1)*t;
        }
        let angle=Math.PI;let state='idle';
        let accel = 0.001; let xv=0,yv=0;let fric = 0.03;
        let offset = 0;
        let angleOffMult = 1;
        C(4,[],[1],{x: 10800, y: 2100, r: 100, innerRadius: 0, startSliceAngle: angle+Math.PI/4, endSliceAngle: angle-Math.PI/4, startSliceAngleRotateSpeed: 0, endSliceAngleRotateSpeed: 0, boundPlayer: true,
            cr:(o)=>{
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'yellow';
                ctx.lineWidth = 4;
                
                ctx.beginPath();
                ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
                ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
                ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);

                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.fillStyle = 'black';
                ctx.beginPath();
                const eyeAngle = (o.startSliceAngle + o.endSliceAngle) / 2 + Math.PI/2;
                ctx.arc(o.pos.x + Math.cos(eyeAngle) * 42, o.pos.y + Math.sin(eyeAngle) * 42, 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            },
            sf:(o,p)=>{
                const dist = Math.sqrt((o.pos.x-p.pos.x)**2+(o.pos.y-p.pos.y)**2);

                if(state === 'idle'){
                    offset = undefined;
                    if(dist < 100 + o.sat.r + p.sat.r){
                        state = 'aggro';
                    }
                } else if(state === 'interpAngleBack'){
                    angle = interpolateDirection(angle, Math.PI, 0.1);
                    if(shortAngleDist(angle, Math.PI) < 0.01) {state = 'idle'; angleOffMult = 0; return;}

                    const sang = (Math.sin(window.time / 200 + offset)+1)/2 * Math.PI/4 * angleOffMult;

                    angleOffMult *= 0.7;

                    o.startSliceAngle = angle + Math.PI/4 - sang;
                    o.endSliceAngle = angle - Math.PI/4 + sang;
                } else if(state === 'return'){
                    if(dist < 100 + o.sat.r + p.sat.r){
                        state = 'aggro';
                    }

                    const homeX = 10800;
                    const homeY = 2100;

                    const homeDist = Math.sqrt((homeY - o.pos.y) ** 2 + (homeX - o.pos.x) ** 2);
                    if(homeDist < 20){
                        xv = yv = 0;
                        state = 'interpAngleBack';
                        angleOffMult = 1;
                    }

                    const fang = Math.atan2(homeY - o.pos.y, homeX - o.pos.x);

                    angle = interpolateDirection(angle, fang, 0.33);

                    const sang = (Math.sin(window.time / 200 + offset)+1)/2 * Math.PI/4;

                    o.startSliceAngle = angle + Math.PI/4 - sang;
                    o.endSliceAngle = angle - Math.PI/4 + sang;

                    xv += Math.cos(angle) * accel * dt;
                    yv += Math.sin(angle) * accel * dt;
                    xv *= Math.pow(fric, dt/1000); yv *= Math.pow(fric, dt/1000);
                    o.pos.x += xv * dt;
                    o.pos.y += yv * dt;
                } else /*if(state === 'aggro')*/{

                    if(offset === undefined) offset = -(window.time/200 + Math.PI/2) % (Math.PI*2);

                    if(dist > 500 + o.sat.r + p.sat.r){
                        state = 'return';
                    }

                    const fang = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);

                    angle = interpolateDirection(angle, fang, 0.33);

                    const sang = (Math.sin(window.time / 200 + offset)+1)/2 * Math.PI/4;

                    o.startSliceAngle = angle + Math.PI/4 - sang;
                    o.endSliceAngle = angle - Math.PI/4 + sang;

                    xv += Math.cos(angle) * accel * dt;
                    yv += Math.sin(angle) * accel * dt;
                    xv *= Math.pow(fric, dt/1000); yv *= Math.pow(fric, dt/1000);
                    o.pos.x += xv * dt;
                    o.pos.y += yv * dt;
                }
            }
        })
    }`,

    // normal but if you touch it it grows, also oscillates
    `{let baseSize = 70; let maxBaseSize = 170; let oscilAmt=30;C(0,[],[0],{
        x: 7800, y: 2800, r: 100,
        sf:(o)=>{
            o.sat.r = baseSize + oscilAmt * Math.sin(window.time / 450);
            o.dimensions = generateDimensions(o);
        },
        ef:(o)=>{
            baseSize += dt * 0.01;
            if(baseSize > maxBaseSize) baseSize = maxBaseSize; 
        },
        cr:(o)=>{
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 8;

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r - ctx.lineWidth / 2, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            
            ctx.lineWidth = 3;
            ctx.lineDashOffset = -time / 15;
            ctx.setLineDash([30, 30]);
            for(let i = 0; i < 3; i++){
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r * (i/3) + (window.time / 200) % (o.sat.r/3), 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            }
            ctx.setLineDash([]);
        }
    })}`,

    // pong!

    // conveyors
    `C(1,[],[13],{"w":100,"h":200,"conveyorForce":0.1,"conveyorAngle":180,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":7800,"y":3300})`,
    `C(1,[],[13],{"w":100,"h":200,"conveyorForce":0.1,"conveyorAngle":0,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":8000,"y":3300})`,

    `C(1,[],[13],{"w":100,"h":100,"conveyorForce":0.3,"conveyorAngle":-90,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":7900,"y":3300})`,
    `C(1,[],[13],{"w":100,"h":100,"conveyorForce":0.3,"conveyorAngle":90,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":7900,"y":3400})`,

    // bounding circles
    `C(1,[],[18],{"w":300,"h":200,"sizeMult":0.5,"sizeChangePermanent":false,"x":7800,"y":3300})`,

    `C(4,[],[15],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI/2,"endSliceAngle":-Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":8100,"y":3400,axisSpeedMultX:0, axisSpeedMultY:1})`,
    `C(4,[],[0],{"r":100,"innerRadius":0,"startSliceAngle":-Math.PI/2,"endSliceAngle":Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":8100,"y":3400})`,
    
    `C(4,[],[15],{"r":100,"innerRadius":0,"startSliceAngle":-Math.PI/2,"endSliceAngle":Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":7800,"y":3400,axisSpeedMultX:0, axisSpeedMultY:1})`,
    `C(4,[],[0],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI/2,"endSliceAngle":-Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":7800,"y":3400})`,

    // fix camera to position
    `var scoreLeft=0;var scoreRight=0;var scoreObs;{function interpolate(s,e,t){return (1-t) * s + t*e;}let lastCollided=false;let collided=false;let fadeOutTimer=-1;let interpScale;C(1,[],[3],{
        x: 7800,y:3300,w:300,h:200,
        cr:(o) => {},
        ef:(p,res,o)=>{
            if(lastCollided === false){
                interpScale = window.camera.scale;

                scoreObs.text = '0 - 0';
                scoreObs.alpha = 0;
                scoreLeft = scoreRight = 0;
            }

            fadeOutTimer = -1;
            window.camera.x = interpolate(window.camera.x, 7950, 0.1);
            window.camera.y = interpolate(window.camera.y, 3400, 0.1);

            scoreObs.alpha = interpolate(scoreObs.alpha, 1, 0.01);

            interpScale = interpolate(interpScale, 3, Math.pow(0.01, dt / 16));
            changeCameraScale(interpScale);

            window.camera.numControlledBy = 1;

            collided = true;
        },
        sf:(o,p)=>{
            if(lastCollided === true && collided === false) {
                fadeOutTimer = 2000;
            }

            if(fadeOutTimer !== -1){
                fadeOutTimer -= dt;

                scoreObs.alpha = interpolate(scoreObs.alpha, 0, 0.03);

                const t = Math.max(0.1,1 - (fadeOutTimer / 2000) ** 2);

                window.camera.x = interpolate(window.camera.x, p.pos.x, t);
                window.camera.y = interpolate(window.camera.y, p.pos.y, t);

                interpScale = interpolate(interpScale, 1, Math.pow(0.1, dt / 16));
                changeCameraScale(interpScale);

                if(fadeOutTimer <= 0) {
                    scoreObs.text = '';
                    changeCameraScale(1);
                    window.camera.numControlledBy = 0;
                    lastCameraX = lastCameraY = undefined;
                    fadeOutTimer = -1;
                }
            }

            lastCollided = collided;
            collided = false;
        }
    })}`,

    // ball
    `var pongPlayer;var pongBall;{let ang = Math.random() * Math.PI * 2;
    let mag = 0.3;
    let xv = Math.cos(ang) * mag;
    let yv = Math.sin(ang) * mag;
    let topX = 0;
    let topY = 0;
    const bounds = [7800, 3300, 8100, 3500];
    C(0,[],[3],{r:30,x: 7950, y: 3400, r: 24.75,collidable:false,sf:(e)=>{
        e.pos.y += yv * dt;
        e.pos.x += xv * dt;
        topX = e.pos.x; topY = e.pos.y;
        if ((e.pos.x - e.sat.r) < bounds[0] || e.pos.x + e.sat.r > bounds[2]) {
            xv = xv * -1;
            e.pos.x = Math.max(bounds[0] + e.sat.r, e.pos.x);
            e.pos.x = Math.min(bounds[2] - e.sat.r, e.pos.x);

            if(e.pos.x < 7950) scoreLeft++;
            else scoreRight++;

            if(scoreObs.text !== ''){
                scoreObs.text = scoreRight + ' - ' + scoreLeft;
                e.pos.x = 7950;
                e.pos.y = 3400;
            }
        }
        if ((e.pos.y - e.sat.r) < bounds[1] || e.pos.y + e.sat.r > bounds[3]) {
            yv = yv * -1;
            e.pos.y = Math.max(bounds[1] + e.sat.r, e.pos.y);
            e.pos.y = Math.min(bounds[3] - e.sat.r, e.pos.y);
        }


        if(pongPlayer !== undefined){
            const res = new SAT.Response();
            const col = SAT.testCircleCircle(e.sat, pongPlayer.sat, res);

            if(col === true){
                const angle = Math.atan2(e.pos.y - pongPlayer.pos.y, e.pos.x - pongPlayer.pos.x);

                e.pos.x -= res.overlapV.x;
                e.pos.y -= res.overlapV.y;

                xv = Math.cos(angle) * mag;
                yv = Math.sin(angle) * mag;
            }
        }
        
    },ef:(p,res,o)=>{
        const angle = Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x);

        o.pos.x -= res.overlapV.x;
        o.pos.y -= res.overlapV.y;

        xv = Math.cos(angle) * mag;
        yv = Math.sin(angle) * mag;
    },cr:(o)=>{
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }});}pongBall = obstacles[obstacles.length-1]`,

    // cloning thing that makes a clone on the other side
    `{let collided=false;let lastCollided = false;let fadeOut=false;C(1,[],[3],{x: 7800, w: 300, y: 3300, h: 200,cr: (o)=>{},
    ef:()=>{
        collided = true;

        if(lastCollided === false){
            if(pongPlayer !== undefined){
                players[pongPlayer.id] = undefined;
                pongPlayer = undefined;
            }
            pongPlayer = window.createPlayer();
            pongPlayer.id = window.players.length;
            pongPlayer.name = 'Opponent';
            pongPlayer.pos = pongPlayer.sat.pos;
            pongPlayer.renderRadius = 0;
            window.players.push(pongPlayer);
            fadeOut = false;
        }
    },sf:(o,p)=>{
        if(pongPlayer !== undefined){
            pongPlayer.pos.x = (o.pos.x+o.dimensions.x/2) - (p.pos.x - (o.pos.x+o.dimensions.x/2));
            // pongPlayer.pos.y = p.pos.y;
            function interpolate(s,e,t){return s * (1-t) + e*t};
            pongPlayer.pos.y = interpolate(pongPlayer.pos.y, pongBall.pos.y, 0.05 * dt / 16)
            if(pongPlayer.pos.y < 3300) pongPlayer.pos.y = 3300;
            else if(pongPlayer.pos.y > 3500) pongPlayer.pos.y = 3500;
            if(pongPlayer.pos.x > 8100) pongPlayer.pos.x = 8100;
            else if(pongPlayer.pos.x < 7800) pongPlayer.pos.x = 7800;

            if(fadeOut === true){
                pongPlayer.renderRadius *= 0.9;
                if(pongPlayer.renderRadius < 5){
                    fadeOut = false;
                    players[pongPlayer.id] = undefined;
                    pongPlayer = undefined;
                }
            } else {
                pongPlayer.sat.r = pongPlayer.renderRadius = (49.5/2) * 0.1 + 0.9 * pongPlayer.renderRadius; 
            }
        }
        if(lastCollided === true && collided === false){
            fadeOut = true;
        }

        lastCollided = collided;
        collided = false;
    }})}`,

    // score text
    `C(3,[],[20],{hex:"#FFFFFF",alpha:1,x:7950,y:3400,fontSize: 34,text:'',cr:(o)=>{
        ctx.fillStyle = 'white';
        ctx.globalAlpha = o.alpha;
        ctx.font = o.fontSize + "px Inter";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(o.text, 7950, 3400);
        ctx.globalAlpha = 1;
    }});scoreObs = obstacles[obstacles.length-1];`,

    // lava that only kills you if you're fully inside. Rendered w/ turning enemy arcs
    // `C(1,[],[3],{"w":200,"h":200,"x":10500,"y":1800,cr:(o)=>{

    // }})`

    // cent movement
    `{
    const minX = 7900 - 100;
    const maxX = 7900 + 100;
    const minY = 2500 - 100;
    const maxY = 2500 + 100;
    let lastX;let lastY;let collided=false;let lastCollided=false;
    C(1,[],[3],{x:7800,y:2400,w:200,h:200,cr:(o)=>{
            ctx.strokeStyle = colors.tile;
            ctx.lineWidth = 3;//(Math.sin(window.time / 800)+1)/2 * 1 + 3;

            // ctx.save();
            ctx.beginPath();
            ctx.rect(o.pos.x+2, o.pos.y+2, o.dimensions.x-4, o.dimensions.y-4);

            ctx.globalAlpha = 1;
            ctx.fillStyle = colors.background;
            ctx.fill();

            // ctx.globalAlpha = 1;
            // ctx.stroke();
            // ctx.clip();
            ctx.closePath();

            ctx.globalAlpha = 0.8;

            // ctx.globalAlpha = 0.3;
            // ctx.strokeStyle = 'white';//'#808080';
            // ctx.lineWidth = 4;

            // tic tac toe board of sine waves
            function drawHorizontalSine(start, end, y, offset){
                ctx.beginPath();
                ctx.moveTo(start,y + Math.sin(start / 22 + offset) * 10);
                for(let x = start; x <= end; x += 10){
                    ctx.lineTo(x,y + Math.sin(x / 22 + offset) * 10);
                }
                ctx.stroke();
                ctx.closePath();
            }

            function drawVerticalSine(start, end, x, offset){
                ctx.beginPath();
                ctx.moveTo(x + Math.sin(start / 22 + offset) * 10, start);
                for(let y = start; y <= end; y += 10){
                    ctx.lineTo(x + Math.sin(y / 22 + offset) * 10, y);
                }
                ctx.stroke();
                ctx.closePath();
            }

            
            drawHorizontalSine(minX, maxX, interpolate(minY, maxY, 1/3.16), window.time / 800);
            drawHorizontalSine(minX, maxX, interpolate(minY, maxY, 2.16/3.16), -window.time / 800);

            drawVerticalSine(minY, maxY, interpolate(minX, maxX, 1/3.16), window.time / 800);
            drawVerticalSine(minY, maxY, interpolate(minX, maxX, 2.16/3.16), -window.time / 800);

            // ctx.restore();

            ctx.globalAlpha = 1;
    },ef:(p)=>{
        if(lastX !== undefined){
            const xv = p.pos.x - lastX;
            const yv = p.pos.y - lastY;

            const scaleFac = (Math.sin(window.time / 100)+1)/10;

            p.pos.x = lastX + xv * scaleFac;
            p.pos.y = lastY + yv * scaleFac;
        }

        lastX = p.pos.x;
        lastY = p.pos.y;
        collided = true;
    },sf:(o)=>{
        if(lastCollided === true && collided === false){
            lastX = lastY = undefined;
        }

        lastCollided = collided;
        collided = false;
    }})}`,

    // flashlight enemy
    `C(0,[],[3],{x:10300,y:1600,r:42,cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#2b2b2b';

        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
    }})`,

    // flashlight part of the flashlight
    `{let angle=0;C(4,[],[1],{"r":100*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":-Math.PI/4,"endSliceAngle":Math.PI/4,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":10300,"y":1600,sf:(o,p)=>{
        function shortAngleDist(a0,a1) {
            const max = Math.PI*2;
            const da = (a1 - a0) % max;
            return 2*da % max - da;
        }
        
        function interpolateDirection(a0,a1,t) {
            return a0 + shortAngleDist(a0,a1)*t;
        }

        angle = interpolateDirection(angle, Math.atan2(p.pos.y - 1600, p.pos.x - 10300), 0.032)

        o.startSliceAngle = angle - Math.PI/4;
        o.endSliceAngle = angle + Math.PI / 4;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, o.sat.r*3/2);
              
        grd.addColorStop(0, "rgba(230, 230, 21, 0.3)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r*3/2*1.5, angle-Math.PI/4, angle+Math.PI/4);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();
    }}) 
    }`,

    // obs you can rotate, rendering has a notch at the center (white circle stroked)
    `var angularVel=0;C(1,[1],[0],{"w":200,"h":100-20,"x":8000,"y":3650+20/2,"initialRotation":0,"rotateSpeed":0,"pivotX":8100,"pivotY":3700,ef:(p,res,o)=>{
        // p.pos.x += res.overlapV.x;
        // p.pos.y += res.overlapV.y;

        // const angle = Math.atan2(p.pos.y - 3700, p.pos.x - 8100);

        const overlapAngle = Math.atan2(res.overlapN.y, res.overlapN.x);
        const angle = o.rotation;

        const relativeAngle = Math.atan2(p.pos.y - o.pivotY, p.pos.x - o.pivotX);

        const magMult = Math.cos(relativeAngle - angle) * Math.cos(overlapAngle - angle + Math.PI/2);

        // finding collision point
        const collisionPoint = [
            p.pos.x + Math.cos(overlapAngle) * (p.sat.r - res.overlap),
            p.pos.y + Math.sin(overlapAngle) * (p.sat.r - res.overlap),
        ]

        const dist = Math.sqrt((collisionPoint[0]-o.pivotX)**2 + (collisionPoint[1]-o.pivotY)**2);

        // f * d * perpMult = torque
        // console.log(magMult, res.overlap, dist);
        angularVel += magMult * res.overlap * dist / 10000000;

        // desiredAngle = angle + Math.PI/2;//(angle + Math.PI/2) - o.rotation;
    },sf:(o,p)=>{
        function shortAngleDist(a0,a1) {
            const max = Math.PI*2;
            const da = (a1 - a0) % max;
            return 2*da % max - da;
        }
        
        function interpolateDirection(a0,a1,t) {
            return a0 + shortAngleDist(a0,a1)*t;
        }

        const d = Math.pow(0.99, dt / 16.66);

        angularVel *= d;

        let angleDelta = angularVel * dt;
        // let angleDelta = interpolateDirection(o.rotation, desiredAngle, d) - o.rotation;
        // if(Math.abs(shortAngleDist(o.rotation, desiredAngle)) > Math.abs(shortAngleDist(o.rotation, desiredAngle + Math.PI))){
        //     angleDelta = interpolateDirection(o.rotation, desiredAngle + Math.PI, d) - o.rotation;
        // }

        o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
        o.sat.rotate(angleDelta);
        o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
        
        o.rotation += angleDelta;
        o.dimensions = generateDimensions(o);
    },cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.strokeStyle = '#f0f0f0';

        ctx.beginPath();
        for(let i = 0; i < o.sat.points.length; i++){
            ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        }
        ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
        ctx.fill();
        // ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(o.pivotX, o.pivotY, 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }})`,

    // one way door out the top
    `{let collided=false;let lastCollided=false;let t=0;let lastY;C(1,[],[],{x:10400,y:4200,w:200,h:200,cr:(o)=>{
        const grd = ctx.createLinearGradient(o.pos.x, o.pos.y, o.pos.x, o.pos.y + o.dimensions.y*2);

        t = (Math.sin(window.time/600)+1)/2 * o.dimensions.y;// translation fac

        grd.addColorStop(0, "rgb(0,0,0)");
        grd.addColorStop(0.5, "rgb(255,255,255)");
        grd.addColorStop(1, "rgb(0,0,0)");

        ctx.fillStyle = grd;

        ctx.globalAlpha = 0.3;

        ctx.translate(0,-t);

        ctx.fillRect(o.pos.x, o.pos.y+t, o.dimensions.x, o.dimensions.y);

        ctx.translate(0,t);

        // ctx.fillStyle = 'cyan';
        // ctx.globalAlpha = 0.1;
        // ctx.fillRect(o.pos.x, o.pos.y + (o.dimensions.y-t), 200, 5);

        // ctx.fillStyle = 'red';
        // ctx.fillRect(o.pos.x, o.pos.y + (o.dimensions.y-t) - 5, 200, 5);

        ctx.globalAlpha = 1;
    },sf:(o,p)=>{
        if(collided === false && lastCollided === true){
            lastY = undefined;
        }

        if(collided === true){
            if(lastY !== undefined){
                const boundary = o.pos.y + (o.dimensions.y-t);
                if(p.pos.y > boundary){
                    // can only move downwards
                    p.pos.y = Math.max(p.pos.y, lastY);
                    lastY -= dt * 0.1;
                    p.pos.y -= dt * 0.1;
                } else {
                    lastY += dt * 0.1;
                    p.pos.y += dt * 0.1;
                    // can only move upwards
                    p.pos.y = Math.min(p.pos.y, lastY);
                }
            }

            lastY = p.pos.y;
        }

        lastCollided = collided;
        collided = false;
    },ef:(p,res,o)=>{
        collided = true;
    }})}`,

    // eyeball that shoots lasers at you 10000 4900
    // also button for lasers
    `{const res = new SAT.Response();let laserMirror;let cooldown=300;const detectionDist=0;let detected=false;let lastDetected=false;let eyeDist=0;let reusableInds=[];let friendly=false;let eyeObs;C(0,[],[0],{x: 10300, y: 4600, r: 58, cr:(o)=>{
        // intentionally using the gradient from last obs because it looks good
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        
        const p = window.players[window.selfId];
        const a = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);

        const eyeX = o.pos.x + Math.cos(a) * eyeDist;
        const eyeY = o.pos.y + Math.sin(a) * eyeDist;

        const interpolate = (s,e,t) => { return s * (1-t) + e*t; };
        if(detected) eyeDist = interpolate(eyeDist, 12, 0.1);
        else eyeDist = interpolate(eyeDist, 0, 0.1);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.fillStyle = '#f0f0f0';
        ctx.beginPath();
        ctx.arc(eyeX, eyeY, o.sat.r * 0.38 * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(eyeX, eyeY, o.sat.r * 0.08 * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        const grad = ctx.createRadialGradient(eyeX, eyeY, 0, eyeX, eyeY, o.sat.r * 0.08 * 4);

        if(friendly === false){
            grad.addColorStop(0, 'rgba(255,0,0,1)');
            grad.addColorStop(1, 'rgba(255,0,0,0)');
        } else {
            grad.addColorStop(0, 'rgba(0,255,0,1)');
            grad.addColorStop(1, 'rgba(0,255,0,0)');
        }

        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.arc(eyeX, eyeY, o.sat.r * 0.08 * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // ctx.globalAlpha = 0.1;

        // const eyeAngle = a;

        // ctx.strokeStyle = 'red';
        // for(let a = 0; a < Math.PI * 2; a += Math.PI / 5){
        //     ctx.beginPath();
        //     ctx.moveTo(eyeX + Math.cos(eyeAngle + a) * o.sat.r/5, eyeY + Math.sin(eyeAngle + a) * o.sat.r/5);
        //     ctx.lineTo(eyeX + Math.cos(eyeAngle + a) * o.sat.r*3/5, eyeY + Math.sin(eyeAngle + a) * o.sat.r*3/5);
        //     ctx.stroke();
        //     ctx.closePath();
        // }

        // ctx.globalAlpha = 1;

        // ctx.fillStyle = 'white';
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = 'red';
        // for(let i = 0; i < lasers.length; i++){
        //     let l = lasers[i];

        //     ctx.moveTo()
        //     ctx.beginPath();
        // }
        // ctx.globalAlpha = 1;
        // ctx.shadowBlur = 0;
    },sf:(o,p)=>{
        const dist = Math.sqrt((o.pos.x-p.pos.x)**2 + (o.pos.y-p.pos.y)**2);
        detected = dist < 480 && p.dead === false;
        if(detected === false) {cooldown = 300; return;}

        cooldown -= dt;
        if(cooldown <= 0){
            cooldown += 300;

            const w = 100;
            const h = 18;

            const x = o.pos.x;
            const y = o.pos.y;
            let angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x) + (Math.random()*2-1) * 0.05;

            let xv = Math.cos(angle) * 1.2;
            let yv = Math.sin(angle) * 1.2;

            // let startX = x;
            // let startY = y;

            // let endX = x + Math.cos(angle);

            let lifetime = 3000;

            let index;

            let collidedWMirror = false;

            function shortAngleDist(a0,a1) {
                const max = Math.PI*2;
                const da = (a1 - a0) % max;
                return 2*da % max - da;
            }
            
            function interpolateDirection(a0,a1,t) {
                return a0 + shortAngleDist(a0,a1)*t;
            }
            
            C(1,[1],[3],{x,y:y-h/2,w,h,pivotX:x,pivotY:y,initialRotation:angle*180/Math.PI,rotateSpeed:0,boundPlayer:false,sf:(o,p)=>{
                o.pos.x += xv * dt;
                o.pos.y += yv * dt;
                o.pivotX += xv * dt;
                o.pivotY += yv * dt;
                lifetime -= dt;
                if(lifetime < 0){
                    reusableInds.push(index);
                    o.pos.x = -1E9;
                    o.pivotX = -1E9;
                    return;
                }

                if(friendly === true){
                    const angleToPlayer = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);
                    const newAngle = interpolateDirection(angle, angleToPlayer, 0.15);
                    angle = newAngle;
                    xv = Math.cos(newAngle) * 1.2;
                    yv = Math.sin(newAngle) * 1.2;

                    o.rotateSpeed = (newAngle - o.rotation) / dt;
                    return;
                } else if(lifetime < 2900){
                    const collidedWithEye = SAT.testPolygonCircle(o.sat, eyeObs.sat, res);

                    if(collidedWithEye) friendly = true;
                }

                if(collidedWMirror === true) return;
                res.clear();

                let collided = SAT.testPolygonPolygon(o.sat, laserMirror.sat, res);

                if(collided === true){
                    collidedWMirror = true;
                    // angle in = angle out. 
                    const mirrorAngle = Math.PI / 4 + Math.sin(window.time / 520) * 0.28 + Math.PI/2;

                    const newAngle = Math.PI - (mirrorAngle - angle*2);
                    angle = newAngle;
                    xv = Math.cos(newAngle) * 1.2;
                    yv = Math.sin(newAngle) * 1.2;

                    o.rotateSpeed = (newAngle - o.rotation) / dt;

                    o.pos.x += res.overlapV.x;
                    o.pos.y += res.overlapV.y;
                    o.pivotX += res.overlapV.x;
                    o.pivotY += res.overlapV.y;
                }// else {
                // //     o.rotateSpeed = 0; 
                // // }
            },cr:(o)=>{
                ctx.strokeStyle = 'white';
                ctx.shadowColor = friendly === true ? 'green' : 'red';
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.moveTo(o.pos.x, o.pos.y);
                ctx.lineTo(o.pos.x + Math.cos(angle) * w, o.pos.y + Math.sin(angle) * w);
                ctx.stroke();
                ctx.closePath();
                ctx.shadowBlur = 0;
            },ef:(p,res,o)=>{
                if(friendly === false) p.dead = true;
                else p.dead = false;
            }});

            if(reusableInds.length !== 0){
                index = reusableInds.pop();
                obstacles[index] = obstacles.pop();
            } else {
                index = obstacles.length-1; 
            }

            // lasers.push(obstacles[obstacles.length-1]);
        }
    }});

    eyeObs = obstacles[obstacles.length-1];
    
    // mirror for lasers
    const h = 20;
    C(1,[1],[0],{
        x: 9900, y: 4900-h/2, w: 200, h,
        initialRotation: 0,
        pivotX: 10000, pivotY: 4900,
        rotateSpeed: 0,
        sf:(o)=>{
            const rotation = Math.PI / 4 + Math.sin(window.time / 520) * 0.28;
            o.rotateSpeed = (rotation - o.rotation) / dt;
        },
        cr:(o)=>{
            // clip
            ctx.lineWidth = 2;
            ctx.save();
            ctx.fillStyle = 'black';
            ctx.beginPath();
            for(let i = 0; i < o.sat.points.length; i++){
                ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
            }
            ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
            ctx.stroke();
            ctx.clip();
            ctx.closePath();

            const x = 9900;
            let y = 4800;
            const w = 200; const h = 200;

            // draw rect w/ highlight
            ctx.fillStyle = '#9ed6dd';
            ctx.fillRect(x,y,w,h);

            // drawing mirror highlights
            ctx.fillStyle = '#e9f7fa';
            ctx.fillRect(x+w*0.24,y,w*0.1,h);

            ctx.fillRect(x+w*0.41,y,w*0.1,h);

            ctx.fillRect(x+w*0.58,y,w*0.18,h);

            // ctx.strokeStyle = '#e9f7fa';
            // ctx.lineWidth = 20;

            // y -= 40;
            // for(; y < 5050; y += 40){
            //     ctx.beginPath();
            //     ctx.moveTo(x+w, y);
            //     ctx.lineTo(x, y + h*0.3);
            //     ctx.stroke();
            //     ctx.closePath();
            // }
            
            ctx.restore();
        }
    });

    // scrapped button in favor of mirror
    // let steppedOn = false;
    // let angle = 0;
    // C(1,[],[3],{
    //     x: 9900, y: 4800, w: 200, h: 200,
    //     cr: (o) => {
    //         ctx.globalAlpha = 0.8;
    //         if (steppedOn === true || friendly === true) {
    //             ctx.globalAlpha = 0.3;
    //         }

    //         ctx.fillStyle = 'white';
    //         if (steppedOn === true && friendly === false) {ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.3); ctx.globalAlpha = 0.8;}
    //         else if (friendly === false) {ctx.fillStyle = 'white'; if(ctx.globalAlpha !== 1){ctx.globalAlpha = 0.8;}}
    //         else if(friendly === true) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.5);}

    //         if(window.players[window.selfId].dead === true) {ctx.globalAlpha = 0.1;ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.1);}

    //         // outside
    //         ctx.fillRect(o.pos.x, o.pos.y, 200, 200);

    //         // grey inside
    //         if(!friendly) ctx.globalAlpha = 1;
    //         ctx.fillStyle = colors.tile;
    //         ctx.fillRect(
    //             o.pos.x + 15,
    //             o.pos.y + 15,
    //             200 - 30,
    //             200 - 30
    //         );

    //         // rim
    //         ctx.globalAlpha = 0.5;
    //         ctx.lineWidth = 4;
    //         ctx.strokeStyle = 'white';
    //         ctx.strokeRect(
    //             o.pos.x + 23,
    //             o.pos.y + 23,
    //             200 - 46,
    //             200 - 46
    //         );
    //         ctx.globalAlpha = 1;

    //         // render laser rotating in sine wave
    //         ctx.shadowColor = 'red';
    //         ctx.shadowBlur = 5;
    //         ctx.lineWidth = 4;
    //         ctx.beginPath();
    //         angle += 0.0009 * dt;//Math.sin(window.time / 2000) / 300 * dt;
    //         const mag = 38;
    //         ctx.moveTo(o.pos.x + 100 - Math.cos(angle) * mag, o.pos.y + 100 - Math.sin(angle) * mag);
    //         ctx.lineTo(o.pos.x + 100 + Math.cos(angle) * mag, o.pos.y + 100 + Math.sin(angle) * mag);
    //         ctx.stroke();
    //         ctx.closePath();

    //         // angle += Math.PI / 2;

    //         // ctx.beginPath();
    //         // ctx.moveTo(o.pos.x + 100 - Math.cos(angle) * mag, o.pos.y + 100 - Math.sin(angle) * mag);
    //         // ctx.lineTo(o.pos.x + 100 + Math.cos(angle) * mag, o.pos.y + 100 + Math.sin(angle) * mag);
    //         // ctx.stroke();
    //         // ctx.closePath();
    //         ctx.shadowBlur = 0;

    //         // angle -= Math.PI / 2;

    //         steppedOn = false;
    //     },
    //     ef: (p,res,o) => {
    //         steppedOn = true;    
    //     }
    // });

    laserMirror = obstacles[obstacles.length-1];
    
    }`,

    // 'rotate-lava': {
    //     type: [1,[1],[1]],
    //     customMap: (params) => {
    //         params.x = params.distToPivot + params.pivotX;
    //         params.y = params.pivotY;
    //         return {
    //             x: params.x * 2 - params.w,
    //             y: params.y * 2 - params.h,
    //             initialRotation: params.angle,
    //             rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
    //             pivotX: params.pivotX * 2,
    //             pivotY: params.pivotY * 2,
    //             boundPlayer: params.canCollide
    //         };
    //     }
    // },

    // ascii text rotating polygon in square - # for obstacle . for air

    // FINAL OBS - ascii text rendering. rotating poly, # for if obstacle is there
    `{

    const x = 9200;
    const y = 4900;

    let pts = [];

    // let shrunkPts = []

    for(let angle = 0; angle <= Math.PI * 2; angle += Math.PI * 2 / 3){
        pts.push([Math.cos(angle) * 76 + x, Math.sin(angle) * 76 + y]);
        // shrunkPts.push([Math.cos(angle) * (76-30) + x, Math.sin(angle) * (76-30) + y]);
    }

    const interpolate = (s,e,t)=>{return (1-t) * s + t*e;};

    let chosenOpaq = 0;
    let colliding = false;

    const last = [];
    C(2,[1],[0],{"points":pts,"x":0,"y":0,"initialRotation":0,"rotateSpeed":0.002,"pivotX":9200,"pivotY":4900,
        cr:(o)=>{
            const vec = new SAT.Vector(0,0);
            ctx.font = '1000 30px Inter';
            ctx.textAlign = 'middle'; ctx.textBaseline = 'center';
            ctx.fillStyle = blendColor('#00ff41','#00ff41',0.5);
            
            for(let x = 9100; x < 9300; x += 20){
                for(let y = 4800; y < 5000; y += 20){
                    vec.x = x; vec.y = y;
                    if(SAT.pointInPolygon(vec, o.sat)){
                        ctx.fillText('#',x,y);
                    }
                }
            }

            if(colliding === false) chosenOpaq = interpolate(chosenOpaq, 0, 0.03);
            colliding = false;

            if(chosenOpaq > 0.001){
                ctx.setLineDash([10,10]);
                ctx.globalAlpha = chosenOpaq;

                let txt = 'You Are The Chosen One.'.split('');
                for(let i = 0; i < txt.length; i++){
                    if(last[i] !== undefined) {last[i]--;txt[i] = '#'; if(last[i] === 0) {last[i] = undefined;}}
                    if(Math.random() < 0.01) {last[i]=3;txt[i] = '#';}
                }

                txt = txt.join('');

                ctx.font = '32px Inter';
                ctx.fillText(txt, 9200, 4800 - 12 - (chosenOpaq-1)*38);
                ctx.setLineDash([]);
            }

            ctx.globalAlpha = 1;
        },
        ef:(o)=>{
            chosenOpaq = interpolate(chosenOpaq, 1, 0.03);
            colliding = true;
        }
    })
    }`
])

// complex-valued fourier transform
{
    var radii = [0,50,30,20];
    let spinSpeeds = [0,2,-3,5];

    for(let i = 0; i < spinSpeeds; i++){
        spinSpeeds[i] /= 1000000;
    }

    // x,y,angle
    
    // simulator
    window.obsArr.push(`var fourierLineSegments=[];var radii=[${radii}]; var spinSpeeds=[${spinSpeeds}];var baseX=9000;var baseY=4600;var fourierPts = [
        [baseX, baseY, 0],
        [baseX+radii[1], baseY, 0],
        [baseX+radii[1]+radii[2], baseY, 0],
        [baseX+radii[1]+radii[2]+radii[3], baseY, 0],
    ];C(0,[],[3],{x:-1E9,y:0,r:1,sf:()=>{
        for(let i = 1; i < fourierPts.length; i++){
            fourierPts[i][2] += spinSpeeds[i] * 1 / 60;

            fourierPts[i][0] = fourierPts[i-1][0] + Math.cos(fourierPts[i][2]) * radii[i];
            fourierPts[i][1] = fourierPts[i-1][1] + Math.sin(fourierPts[i][2]) * radii[i];
        }
    },cr:()=>{
            if(fourierLineSegments.length > 390) fourierLineSegments.shift();
            else if(fourierLineSegments.length < 2) return;
            // ctx.fillStyle = '#f0f0f0';

            const grd = ctx.createRadialGradient(9000,4600,0,9000,4600,320);
            grd.addColorStop(0.1,'#f0f0f0');
            grd.addColorStop(1,'#000000');
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.roundRect(8900,4500,200,200,6);
            ctx.fill();
            ctx.closePath();
            ctx.strokeStyle = '#0f0f0f';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(...fourierLineSegments[0]);
            for(let i = 1; i < fourierLineSegments.length; i++){
                ctx.lineTo(...fourierLineSegments[i]);
            }
            ctx.stroke();
            ctx.closePath();
    }})`);

    for(let i = 1; i < radii.length; i++){
        window.obsArr.push(`{
            const p1 = fourierPts[${i-1}];
            const p2 = fourierPts[${i}];

            const h = 20;

            C(1,[1],[0],{
                x: p1[0],
                y: p1[1] - h/2,
                w: p2[0] - p1[0],
                h: h,
                pivotX: p1[0] + (p2[0] - p1[0])/2,
                pivotY: p1[1],
                intialRotation: 0,
                rotateSpeed: 0,
                sf:(o)=>{
                    // o.pos.y += h/2;
                    o.pos.x = o.pivotX = p1[0];
                    o.pos.y = o.pivotY = p1[1];

                    const rotation = (Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) - o.rotation);

                    o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
                    o.sat.rotate(rotation);
                    o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
                    
                    o.rotation += rotation;

                    // o.pos.y -= h/2;
                    o.dimensions = generateDimensions(o);

                    ${i === radii.length-1 ? `fourierLineSegments.push([o.pos.x, o.pos.y])` : ''}
                }
            })
        }`)
    }
}

// 1/r gravity simulation 8100 3700
{
    const startX = 8600; const endX = 8800;
    const startY = 4200; const endY = 4400;
    const interpolate = (s,e,t) => {return s * (1-t) + e*t};
    for(let i = 0; i < 10; i++){
        const x = interpolate(startX, endX, Math.random());
        const y = interpolate(startY, endY, Math.random());
        window.obsArr.push(`${i === 0 ? 'var gravPositions=[[8700, 4300]];' : ''}{
            const gravPos = [${x},${y}];
            let ang = Math.random() * Math.PI * 2;
            let mag = 0.009;
            let xv = Math.cos(ang) * mag;
            let yv = Math.sin(ang) * mag;
            C(0,[],[0],{x:gravPos[0],y:gravPos[1],r:20,sf:(o)=>{
                for(let i = 0; i < gravPositions.length; i++){
                    // f prop. to 1/r^2
                    let rSq = (gravPos[0] - gravPositions[i][0])**2 + (gravPos[1] - gravPositions[i][1])**2;
                    if(rSq === 0) continue;

                    
                    rSq = Math.max(38, rSq);
                    const angle = Math.atan2(gravPositions[i][1] - gravPos[1], gravPositions[i][0] - gravPos[0]);

                    // if(rSq < (o.sat.r*2) ** 2){
                    //     const r = rSq 
                    //     const dif = angle - o.sat.r
                    // }

                    xv += Math.cos(angle) / (rSq**0.5) * dt / 18;
                    yv += Math.sin(angle) / (rSq**0.5) * dt / 18;
                }

                o.pos.x += xv * dt;
                o.pos.y += yv * dt;

                gravPos[0] = o.pos.x;
                gravPos[1] = o.pos.y;

                if(o.pos.x < ${startX}){
                    o.pos.x = ${startX};
                    xv *= -0.9;
                } else if(o.pos.x > ${endX}){
                    o.pos.x = ${endX}; 
                    xv *= -0.9;
                }

                if(o.pos.y < ${startY}){
                    o.pos.y = ${startY};
                    yv *= -0.9;
                } else if(o.pos.y > ${endY}){
                    o.pos.y = ${endY}; 
                    yv *= -0.9;
                }

                xv *= 0.99;
                yv *= 0.99;

                ${i === 0 ? `const a = (window.time / 1000)%(Math.PI*2);gravPositions[0][0] = 8700 + Math.cos(a) * 50;gravPositions[0][1] = 4300 + Math.sin(a) * 50` : ''}
            }});

            // gravPositions.push(gravPos);
        }`)
    }
}

// V made of two polygons with pivots at the y center so that you can go through and it makes a reverse v on the other side (9200 4900)

// cluster of circles rotating around center (but unevenly?) 10300 4600

// printer you can go inside that prints you out slowly and sine wave at a time 10500 4300
// or maybe infinite tunnel and camera zooms in and draws lots of tiles going by really fast so you think you're moving fast but you're not

// baloons? 10300 1600

// flower enemy from og eX

// trapper spitting out traps that selfCollide forming a pile 9000, 4600
// `{let reusableIndexes=[];let spawns=[];let timer=120;let curAngle=0;C(0,[],[0],{x: 8000, y: 3700, r: 20, sf:(o)=>{
//     timer -= dt;

//     if(timer < 0){
//         timer += 120;
        
//         const angle = curAngle;//Math.PI * Math.random() * 2;
//         curAngle += Math.PI / 8;
//         let vel = 0.08;//(0.7 + Math.random() * 0.3) * 0.09;
//         let timeAlive = 2000;
//         let pushedIndex = false;
//         let index;
//         C(0,[],[0],{x: o.pos.x, y: o.pos.y, r: o.sat.r, sf:(o)=>{
//             o.pos.x += Math.cos(angle) * vel * dt;
//             o.pos.y += Math.sin(angle) * vel * dt;

//             vel *= Math.pow(0.99, dt / 16);

//             timeAlive -= dt;

//             if(timeAlive <= 0 && pushedIndex === false){
//                 reusableIndexes.push(index);
//             }
//         },cr:(o)=>{
//             if(timeAlive <= 0) return;
//             if(timeAlive < 200){
//                 ctx.globalAlpha = Math.max(0,timeAlive / 200);
//             }

//             ctx.fillStyle = colors.tile;

//             ctx.beginPath();
//             ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.closePath();

//             ctx.globalAlpha = 1;
//         }})

//         if(reusableIndexes.length === 0){
//             index = obstacles.length-1;
//         } else {
//             index = reusableIndexes.pop();
//             const o = obstacles.pop();
//             obstacles[index] = o; 
//         }
//     }
// }})}`


/*,cr:(e)=>{
ctx.lineWidth = 4;
ctx.fillStyle = '#053564';
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.closePath();
}*/

// cent scrapped rendering
// // const t = (Math.sin(window.time / 800)+1)/2;
// // ctx.fillStyle = '#808080'//blendColor('#0f0f0f', '#808080', 1-t);

// const r = 30;

// const s = Math.sin(window.time / 400) * o.sat.r;

// offsetX = s;
// offsetY = -s;
// // if(s >= 0) offsetX += s;
// // else offsetY += s;

// for(let x = o.pos.x-o.dimensions.x/2-(offsetX%(o.sat.r)); x <= o.pos.x+o.dimensions.x/2; x += o.sat.r){
//     for(let y = o.pos.y-o.dimensions.y/2-(offsetY%(o.sat.r)); y <= o.pos.y+o.dimensions.y/2; y += o.sat.r){
//         ctx.beginPath();
//         ctx.arc(x,y,r,0,Math.PI*2);
//         ctx.fill();
//         ctx.closePath();
//     }
// }

// ctx.restore();

// // const s = Math.sin(window.time / 400) * 2;
// // offsetX -= 2.2 * dt / 16 / 2;
// // offsetY += 3/100 * dt / 16 / 2;

// // for(let mag = -(offsetX%(r*2)); mag <= o.sat.r + r; mag += r*2){
// //     for(let angle = offsetY; angle < Math.PI*2+offsetY-0.01;angle += Math.PI/3){
// //         ctx.globalAlpha = mag < 0 ? 0 : Math.min(1,mag / 200);
// //         const x = o.pos.x + Math.cos(angle) * mag;
// //         const y = o.pos.y + Math.sin(angle) * mag;

// //         ctx.beginPath();
// //         ctx.arc(x,y,r,0,Math.PI*2);
// //         ctx.fill();
// //         ctx.closePath();

// //         ctx.globalAlpha = 1;
// //     }
// // }

// // ctx.globalAlpha = 0.6;
// // const a = Math.sin(window.time / 800);
// // ctx.fillStyle = 'white';
// // ctx.globalAlpha = 1;
// // ctx.font = (a*20+64) + "px Inter";
// // ctx.textAlign = 'middle';
// // ctx.textBaseline = 'center';
// // ctx.fillText('¢', o.pos.x, o.pos.y);

// // scrapped camera (originally sine wave turret)
// `{let ang = Math.random() * Math.PI * 2;
// let mag = 0.01;
// let xv = Math.cos(ang) * mag;
// let yv = Math.sin(ang) * mag;
// let topX = 0;
// let topY = 0;
// let timer = 300;
// const recyclableInds=[];
// C(1,[],[0],{w:76,h:100,y:3650,x:7900,collidable:false,sf:(e)=>{
//     timer -= dt;
//     if(timer < 0){
//         timer += 300;

//         // let thisInd;
//         // if(recyclableInds.length > 0){
//         //     thisInd = recyclableInds.pop();
//         // } else {
//         //     thisInd = obstacles.length;
//         // }

//         // C(0,[],[1],{x:e.pos.x+e.dimensions.x,y:e.pos.y+e.dimensions.y/2,r:20,sf:(e)=>{
//         //     e.pos.x += dt * 0.06;
//         //     e.pos.y += Math.sin(window.time / 600) * 0.05 * dt;

//         //     if(e.pos.x > 8600){
//         //         recyclableInds.push(thisInd);
//         //         e.pos.x = 1E9;
//         //     }
//         // },cr:(e)=>{
//         //     if(e.pos.x > 8500){
//         //         ctx.globalAlpha = (8600 - e.pos.x) / 100;
//         //     }

//         //     ctx.lineWidth = 4;
//         //     ctx.fillStyle = '#107691';
//         //     ctx.strokeStyle = 'black';

//         //     ctx.beginPath();
//         //     ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//         //     ctx.fill();
//         //     // ctx.globalAlpha = 0.5;
//         //     ctx.stroke()
//         //     ctx.closePath();

//         //     ctx.globalAlpha = 1;
//         // }})
//         // const o = obstacles.pop();
//         // obstacles[thisInd] = o;
//     }
// }})}`,
// // camera poly part
// `C(2,[],[0],{x:0,y:0,points:[[7950,3700],[8050-50,3650],[8050-50,3750]]})`

// slingshot
// slingshot: white circles w/ black insides, rope is just an ellipse or parabola
for(let i = 0; i < 10; i++){
    // rope
    window.obsArr.push(`${i === 0 ? 'var ropeOffset = 0;var ropePolys=[];' : ''}{let colliding=false;let lastColliding=false;C(2,[],[3],{
        x: 0, y: 0, points: [[10100, 1900], [10300, 1900]],
        ef:(p,res,o)=>{
            colliding = true;
            p.pos.y += res.overlapV.y * 2/3;

            ropeOffset -= res.overlapV.y * 1/3;
            // o.pos.y = offset;
            
            // o.dimensions = generateDimensions(o);
        },
        cr:(o)=>{
            if(Math.abs(ropeOffset) > 0.1){
                ${i === 0 ? "ropeOffset *= Math.pow(0.9, dt/16);" : ''}

                function ptOnEllipse(angle){
                    const x = 10200 + Math.cos(angle) * 100;
                    const y = 1900 + Math.sin(angle) * ropeOffset;
                    return new SAT.Vector(x,y);
                }

                for(let i = 0; i < ropePolys.length; i++){
                    // console.log(  [ptOnEllipse(i/10*Math.PI), ptOnEllipse((i+1)/10*Math.PI)]  )
                    ropePolys[i].sat.setPoints([ptOnEllipse(i/10*Math.PI), ptOnEllipse((i+1)/10*Math.PI)]);
                }
            }

            if(lastColliding === true && colliding === false){
                const p = window.players[window.selfId];
                function addForce(p, o, xv, yv, xa, ya, vfric, afric){
                    if(p.forces[o.playerForceId] === undefined) {
                        o.playerForceId = p.forces.length;
                        p.forces[o.playerForceId] = [xv, yv, xa, ya, vfric, afric];
                    } else {
                        p.forces[o.playerForceId][0] += xv;
                        p.forces[o.playerForceId][1] += yv;
                        p.forces[o.playerForceId][2] += xa;
                        p.forces[o.playerForceId][3] += ya;
                    }
                }

                addForce(p, o, 0, 0, 0, -ropeOffset/10, -0.1, -0.1);
            }

            lastColliding = colliding;
            colliding = false;
        }
    });ropePolys.push(obstacles[obstacles.length-1]);}`)
}

// rendering the rope
window.obsArr.push(`C(0,[],[3],{x:0,y:0,r:1,cr:(o)=>{
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    
    ctx.globalAlpha = Math.max(0.1,1 - Math.abs(ropeOffset)/100);

    ctx.beginPath();
    ctx.ellipse(10200, 1900, 100, Math.abs(ropeOffset), 0, Math.PI, 0, ropeOffset >= 0);
    ctx.stroke();
    ctx.closePath();

    ctx.globalAlpha = 1;
}})`);

// circles on the edges
window.obsArr.push(
`C(0,[],[0],{
    x: 10100, y: 1900, r: 25,
    cr:(o) => {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.lineWidth = 8;
        
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
})`,
`C(0,[],[0],{
    x: 10300, y: 1900, r: 25,
    cr:(o) => {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.lineWidth = 8;
        
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
})`);

// // 4 corners one is empty rect idea
// `C(1,[],[0],{"w":100,"h":200,"x":8000,"y":3700,sf:(o)=>{
//     const a = (window.time / 1000) % (Math.PI * 2);

//     // move 0-pi/2 rest pi/2-pi move pi-pi*3/2 rest pi*3/2-2pi
//     o.pos.x = 8000;
//     if(a < Math.PI/2){
//         o.pos.x += Math.sin(a) * 100;
//     } else if(a < Math.PI){
//         o.pos.x += 100; 
//     } else if(a < Math.PI * 3/2){
//         o.pos.x += 100 + Math.sin(a) * 100;
//     }
// },cr:(o)=>{
//     ctx.fillStyle = colors.tile;
//     ctx.beginPath();
//     ctx.roundRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y, 6);
//     ctx.fill();
//     ctx.closePath();
// }})`,
// `C(1,[],[0],{"w":200,"h":100,"x":8000,"y":3700,sf:(o)=>{
//     const a = (window.time / 1000 + Math.PI/2) % (Math.PI * 2);

//     // move 0-pi/2 rest pi/2-pi move pi-pi*3/2 rest pi*3/2-2pi
//     o.pos.y = 3700;
//     if(a < Math.PI/2){
//         o.pos.y += Math.sin(a) * 100;
//     } else if(a < Math.PI){
//         o.pos.y += 100;
//     } else if(a < Math.PI * 3/2){
//         o.pos.y += 100 + Math.sin(a) * 100;
//     }
// },cr:(o)=>{
//     ctx.fillStyle = colors.tile;
//     ctx.beginPath();
//     ctx.roundRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y, 6);
//     ctx.fill();
//     ctx.closePath();
// }})`,

// 9600 1700 4 moving circles below top crystal 50 rad, moving across the 4x2 in the mirror pattern
// C(3,[],[20],{x:9000,y:4000,fontSize:80,text:"Slip",hex:'#FFFFFF',alpha:1})
// C(3,[],[20],{x:9300,y:4000,fontSize:80,text:"PointAccel",hex:'#FFFFFF',alpha:1})
// lets get decoration working again or at least update defaults (it doesnt have a decofilepath default rn)

// draw obstacle
// draw obstacle. Draws from 10200, 4500 to 10400 4200
// scrapped, just wasn't interesting enough
// window.obsArr.push(`{const drawOffsetX=-300;const drawOffsetY=0;let activated=false;C(0,[],[3],{
//     x: 8050, y: 3350, r: 50,
//     cr:(o) => {
//         // ctx.save();

//         // draw obs
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 4;
//         ctx.setLineDash([30, 30]);
//         ctx.lineDashOffset = -window.time / 15;

//         ctx.globalAlpha = (Math.sin(window.time/720)+1)/2 * 0.5 + 0.1;
//         ctx.fillStyle = '#680094';

//         ctx.beginPath();
//         ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.globalAlpha = 1;
//         ctx.stroke();
//         ctx.closePath();

//         ctx.setLineDash([]);

//         // // draw transparent lava where spawn will be
//         ctx.globalAlpha = (Math.sin(window.time/720)+1)/2 * 0.6;

//         ctx.fillStyle = '#c70000';
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 4;
//         ctx.beginPath();
//         ctx.arc(o.pos.x + drawOffsetX, o.pos.y + drawOffsetY, 50, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke();
//         ctx.closePath();


//         // ctx.fillStyle = "#4881db"
//         // ctx.beginPath();
//         // ctx.moveTo(o.pos.x, o.pos.y - o.dimensions.y/2);
//         // ctx.lineTo(o.pos.x + drawOffsetX, o.pos.y + drawOffsetY);
//         // ctx.stroke();
//         // ctx.closePath();

//         // ctx.beginPath();
//         // ctx.moveTo(o.pos.x, o.pos.y + o.dimensions.y/2);
//         // ctx.lineTo(o.pos.x + drawOffsetX, o.pos.y + drawOffsetY);
//         // ctx.stroke();
//         // ctx.closePath();

//         // ctx.globalAlpha = 1;
        
//         // // const angle = Math.atan2(drawOffsetY, drawOffsetX);
//         // // const mag = Math.sqrt(drawOffsetX ** 2 + drawOffsetY ** 2);

//         // // ctx.moveTo(o.pos.x, o.pos.y);
//         // // for(let i = 0; i < 30; i++){
//         // //     ctx.lineTo(
//         // //         o.pos.x + Math.cos(angle) * i/30 * mag,
//         // //         o.pos.y + Math.sin(angle) * i/30 * mag + Math.sin(i / 2 - window.time / 220) * 14
//         // //     );
//         // // }
//         // // ctx.stroke();
//         // // ctx.closePath();
//     },
//     ef:(p,res,o)=>{
//         if(activated === true) return;
//         activated = true;
        
//         C(0,[],[1],{boundPlayer: true,x:o.pos.x + drawOffsetX, y: o.pos.y + drawOffsetY, r: 50});
//     }
// })}`);

// flowr.fun flower petals
for(let i = 0; i < 5; i++){
    window.obsArr.push(`C(0,[1],[2],{
        x: 8900, y: 1900, r: 10*40/25,
        "bounciness": 2, decay: 0.985,
        "initialRotation": ${i / 5 * Math.PI * 2},
        "rotateSpeed": 0.0023,
        "pivotX": 9000,
        "pivotY": 1900,
        cr:(o)=>{
            ctx.beginPath();
            ctx.lineWidth = 3 * 40 / 25;
            ctx.fillStyle = 'white';
            ctx.strokeStyle = '#cfcfcf';

            ctx.arc(o.pos.x,o.pos.y,o.sat.r,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
    })`);
}

// was going to be change friction but now the render just looks like a spinning table so im running with it
for(let i = 0; i < 4; i++){
    window.obsArr.push(`${
        i === 0 ? `window.cfarcs = [];
        for(let i = 0; i < 5; i++){
            cfarcs.push({
                radius: Math.random() * 98,
                startAngle: Math.random() * Math.PI * 2,
                endAngle: Math.random() * Math.PI * 2,
                startAngleRotateSpeed: 0.003,
                endAngleRotateSpeed: 0.003 * (Math.random()*0.67+0.34),
                thickness: (Math.random() ** 2) * 7,
                thicknessOverTimeVariance: Math.random() * 0.3// sine wave
            }); // linedash?
        }` : ''
    }C(4,[],[3],{
        "r":100,"innerRadius":0,"startSliceAngle":${i/4 * Math.PI * 2},
        "endSliceAngle":${(i+.8)/4 * Math.PI * 2},"startSliceAngleRotateSpeed":0.005,
        "endSliceAngleRotateSpeed":0.005,"x":9200,"y":1600,
        cr:(o) => {
            // some arcs orbiting the center
            ctx.save();

            ctx.fillStyle = blendColor('#000000','#0000FF', (Math.sin(window.time / 300)+1)/2 * 0.1);
            ctx.globalAlpha = 0.32;
            
            ctx.beginPath();
            ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
            ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
            ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);
            ctx.fill();
            ctx.clip();
            ctx.closePath();

            ctx.strokeStyle = 'white';
            ctx.globalAlpha = 1;
            const arcs = window.cfarcs;
            for(let i = 0; i < arcs.length; i++){
                const a = arcs[i];
                ctx.lineWidth = a.thickness + Math.sin(window.time / 1000) * a.thicknessOverTimeVariance;
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, a.radius, a.startAngle, a.endAngle);
                ctx.stroke();
                ctx.closePath();

                a.startAngle += a.startAngleRotateSpeed * dt;
                a.endAngle += a.endAngleRotateSpeed * dt;
            }
            ctx.lineWidth = 5;

            ctx.restore();
        },ef:(p,res,o)=>{
            let angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);
            let magnitude = Math.sqrt((o.pos.x-p.pos.x)**2+(o.pos.y-p.pos.y)**2);

            angle += o.startSliceAngleRotateSpeed;

            p.pos.x = o.pos.x + Math.cos(angle) * magnitude;
            p.pos.y = o.pos.y + Math.sin(angle) * magnitude;
        }
    })`);
}

// noodle of normals moving up and down with fancy sine wave render 11100 2800
{const w = 10;
let i = 1;
const h = 60;
for(let x = 11000 + 10 + w; x < 11200 - 10; x += w){
    window.obsArr.push(`{const offset=${i};C(1,[],[0],{"w":${w},"h":${h},"x":${x-w/2},"y":2750,cr:()=>{},sf:(o)=>{
        o.pos.y = 2800 - ${h}/2 + Math.sin(window.time / 1000 + offset * 0.4) * 25;
    }});}`);
    i++;
}

// the renderer
window.obsArr.push(`C(0,[],[3],{x:-1E9,y:0,cr:()=>{
    ctx.fillStyle = colors.tile;
    ctx.beginPath();
    
    function getY(x){
        const offset = (x - (11000 + 10)) / ${w};
        return 2800 - ${h}/2 + Math.sin(window.time / 1000 + offset * 0.4) * 25;d
    }
    ctx.moveTo(11010, getY(11010));
    for(let x = 11000 + 10 + ${w}; x <= 11200 - 10; x += ${w}){
        ctx.lineTo(x, getY(x));
    }
    for(let x = 11200 - 10; x >= 11000 + 10 + ${w}; x -= ${w}){
        ctx.lineTo(x, getY(x) + ${h});
    }
    ctx.lineTo(11010, getY(11010) + ${h});
    ctx.lineTo(11010, getY(11010));
    ctx.fill();
    ctx.closePath();
}})`)}

// diggable pixels like digdig (fr this time) 11400 2800
{
    const w = 40;
    const centerX = 11400;
    const centerY = 2800;
    for(let x = 11300; x < 11500; x += w){
        for(let y = 2700; y < 2900; y += w){
            const manhattan = Math.abs(x+w/2 - centerX) + Math.abs(y+w/2 - centerY);
            if(manhattan <= 130 - w){
                window.obsArr.push(`C(1,[],[2,10],{x:${x},y:${y},w:${w},h:${w},bounciness:20,decay:0.95,maxStrength:100,regenTime:Infinity,healSpeed:0,ef:(p,res,o)=>{
                    o.pos.x = -1E9;
                }})`);
            }
        }
    }
}

window.polyObs = [];
// polygon w/ pushable sides
{
    window.polyObsPts = [[8600, 2200],[8650,2100],[8750,2100],[8800,2200],[8750,2300],[8650,2300]];
    for(let i = 0; i < window.polyObsPts.length; i++){
        window.obsArr.push(`{let f=${i};let l=${(i+1)%(window.polyObsPts.length)};C(2,[],[3],{"points":[window.polyObsPts[f], window.polyObsPts[l]],"x":0,"y":0,cr:(o)=>{o.f=f;o.l=l},ef:(p,res,o)=>{
            // if(res.overlapV.x > 1E9 || res.overlapV.x < -1E9) return;
            // o.pos.x -= res.overlapV.x;
            // o.pos.y -= res.overlapV.y;
            window.polyObsPts[f][0] -= res.overlapV.x;
            window.polyObsPts[f][1] -= res.overlapV.y;

            window.polyObsPts[l][0] -= res.overlapV.x;
            window.polyObsPts[l][1] -= res.overlapV.y;

            for(let i = 0; i < window.polyObs.length; i++){
                const o2 = window.polyObs[i];
                o2.sat.setPoints([new SAT.Vector(...window.polyObsPts[o2.f]), new SAT.Vector(...window.polyObsPts[o2.l])]);
            }
            
        }});window.polyObs.push(window.obstacles[window.obstacles.length-1])}`);
    }
}
// the one that renders (a separate obstacle that renders the obs above)
window.obsArr.push(`C(0,[],[3],{x:0,y:0,r:1,cr:(o)=>{
    for(let i = 0; i < window.polyObs.length; i++){
        const p = window.polyObs[i];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(p.sat.points[0].x + p.pos.x, p.sat.points[0].y + p.pos.y);
        ctx.lineTo(p.sat.points[1].x + p.pos.x, p.sat.points[1].y + p.pos.y);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.beginPath();
    const p = window.polyObs[0];
    ctx.moveTo(p.sat.points[0].x + p.pos.x, p.sat.points[0].y + p.pos.y);
    for(let i = 0; i < window.polyObs.length; i++){
        const p = window.polyObs[i];
        ctx.lineTo(p.sat.points[1].x + p.pos.x, p.sat.points[1].y + p.pos.y);
    }
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}})`);

// Wallboost scrapped render (arrows around a square)
// ctx.strokeStyle = ctx.fillStyle = '#0c8a0e'//'#7e96e0';
// ctx.lineWidth = 6;//#32a852

// const arrowW = 150; const arrowH = 150;

// // ctx.fillRect(o.pos.x + arrowW, o.pos.y + arrowH, o.dimensions.x - arrowW*2, o.dimensions.y - arrowH*2);
// // let inset = 15;
// // ctx.beginPath();
// // ctx.roundRect(o.pos.x + inset, o.pos.y + inset, o.dimensions.x - inset*2, o.dimensions.y - inset*2, 12);
// // ctx.stroke();
// // ctx.closePath();

// ctx.lineWidth = 8;


// function drawArrow(x,y,angle){
//     ctx.translate(x,y);
//     ctx.rotate(angle);
//     ctx.beginPath();
//     ctx.moveTo(arrowW/2, -arrowH/2);
//     ctx.lineTo(0,0);
//     ctx.lineTo(-arrowW/2, -arrowH/2);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.rotate(-angle);
//     ctx.translate(-x,-y);
// }

// ctx.save();
// ctx.beginPath();
// ctx.rect(o.pos.x, o.pos.y, 200, 200);
// ctx.clip();
// ctx.closePath();

// let amt = 20;
// ctx.lineCap = 'butt';
// ctx.lineJoin = 'round';
// for(let i = 0; i < amt; i++){
//     const t = Math.PI * 2 * i / amt + window.time / 3000;
//     const p = Math.max(Math.abs(Math.cos(t)),Math.abs(Math.sin(t)));
//     let x = (o.dimensions.x-arrowW)/2*Math.cos(t) / p;
//     let y = (o.dimensions.y-arrowH)/2*Math.sin(t) / p;

//     let angle = 0;
//     let percent = (t+Math.PI/4) % (Math.PI*2) / (Math.PI*2);
//     if(percent < 0.25) angle = 0;
//     else if(percent < 0.5) angle = Math.PI/2;
//     else if(percent < 0.75) angle = Math.PI;
//     else angle = Math.PI*3/2;

//     ctx.lineWidth = 8;
//     drawArrow(o.pos.x+100+x,o.pos.y+100+y,t);
// }
// ctx.lineCap = 'round';
// ctx.lineJoin = 'miter';

// ctx.restore();

// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.rect(o.pos.x, o.pos.y, 200, 200);
// ctx.globalAlpha = 0.1;
// ctx.fill();
// ctx.globalAlpha = 1;
// ctx.stroke();
// ctx.closePath();
// // ctx.strokeRect(o.pos.x + arrowW, o.pos.y + arrowH, 200 - arrowW*2, 200 - arrowH*2);

// for(let i = 0; i < 3; i++){
//     // selfCollide
//     window.obsArr.push(`${i === 0 ? 'var scs=[];' : ''}{let ang = Math.random() * Math.PI * 2;
//     let mag = 0.3;
//     let ene;
//     let xv = Math.cos(ang) * mag;
//     let yv = Math.sin(ang) * mag;
//     let topX = 0;
//     let topY = 0;
//     C(0,[],[1],{r:24,y:3700,x:8700,collidable:false,sf:(e)=>{
//         e.pos.y += yv * dt;
//         e.pos.x += xv * dt;
//         topX = e.pos.x; topY = e.pos.y;
//         if ((e.pos.x - e.sat.r) < 8600 || e.pos.x + e.sat.r > 8800) {
//             xv = xv * -1;
//             e.pos.x = Math.max(8600 + e.sat.r, e.pos.x);
//             e.pos.x = Math.min(8800 - e.sat.r, e.pos.x);
//         }
//         if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4400) {
//             yv = yv * -1;
//             e.pos.y = Math.max(4200 + e.sat.r, e.pos.y);
//             e.pos.y = Math.min(4400 - e.sat.r, e.pos.y);
//         }
//         for(let i = 0; i < scs.length; i++){
//             if(${i} >= i) continue;

//             const enemy2 = scs[i]; 

//             let dist = Math.sqrt(
//                 (enemy2.pos.x - ene.pos.x) ** 2 + (enemy2.pos.y - ene.pos.y) ** 2
//             );
//             if (
//                 dist < ene.sat.r + enemy2.sat.r &&
//                 dist !== 0
//             ) {
//                 //colliding
//                 let angle = Math.atan2(enemy2.pos.y - ene.pos.y, enemy2.pos.x - ene.pos.x);
//                 let magnitude = (1 / dist) * dt;
//                 xv -= Math.cos(angle) * magnitude;
//                 yv -= Math.sin(angle) * magnitude;

//                 const v = Math.sqrt(xv ** 2 + yv ** 2) * 1/.3;

//                 xv /= v;
//                 yv /= v;
//                 // if (ene.xv > mag) {
//                 //     ene.xv = mag;
//                 // } else if (ene.xv < -mag) {
//                 //     ene.xv = -mag;
//                 // }
//                 // if (ene.yv > mag) {
//                 //     ene.yv = mag;
//                 // } else if (ene.yv < -mag) {
//                 //     ene.yv = -mag;
//                 // }
//                 // enemy2.xv += Math.cos(angle) * magnitude;
//                 // enemy2.yv += Math.sin(angle) * magnitude;
//             }
//         }
//     }});
//     ene=obstacles[obstacles.length-1]
//     scs.push(ene);
//     }`)
// }

// turret that shoots in a sine wave - scrapped, standing oscillating wave
// `{let ang = Math.random() * Math.PI * 2;
// let mag = 0.01;
// let xv = Math.cos(ang) * mag;
// let yv = Math.sin(ang) * mag;
// let topX = 0;
// let topY = 0;
// let timer = 300;
// const recyclableInds=[];
// C(0,[],[1],{r:30,y:4200,x:8300,collidable:false,sf:(e)=>{
//     e.pos.x = 8400; e.pos.y = 4300;
//     // e.pos.y += yv * dt;
//     // e.pos.x += xv * dt;
//     // topX = e.pos.x; topY = e.pos.y;
//     // if ((e.pos.x - e.sat.r) < 8300 || e.pos.x + e.sat.r > 8500) {
//     //     xv = xv * -1;
//     //     e.pos.x = Math.max(8300 + e.sat.r, e.pos.x);
//     //     e.pos.x = Math.min(8500 - e.sat.r, e.pos.x);
//     // }
//     // if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4400) {
//     //     yv = yv * -1;
//     //     e.pos.y = Math.max(4200 + e.sat.r, e.pos.y);
//     //     e.pos.y = Math.min(4400 - e.sat.r, e.pos.y);
//     // }

//     timer -= dt;
//     if(timer < 0){
//         timer += 300;

//         let thisInd;
//         if(recyclableInds.length > 0){
//             thisInd = recyclableInds.pop();
//         } else {
//             thisInd = obstacles.length;
//         }

//         C(0,[],[1],{x:e.pos.x,y:e.pos.y,r:e.sat.r,sf:(e)=>{
//             e.pos.x += dt * 0.12;
//             e.pos.y += Math.sin(window.time / 600) * 0.1 * dt;

//             if(e.pos.x > 8800){
//                 recyclableInds.push(thisInd);
//                 e.pos.x = 1E9;
//             }
//         },cr:(e)=>{
//             if(e.pos.x > 8700){
//                 ctx.globalAlpha = (8800 - e.pos.x) / 100;
//             }

//             ctx.lineWidth = 6;
//             ctx.fillStyle = '#107691';
//             ctx.strokeStyle = 'black';

//             ctx.beginPath();
//             ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//             ctx.fill();
//             // ctx.globalAlpha = 0.5;
//             ctx.stroke()
//             ctx.closePath();

//             ctx.globalAlpha = 1;
//         }})
//         const o = obstacles.pop();
//         obstacles[thisInd] = o;
//     }
// },cr:(e)=>{
//     ctx.lineWidth = 6;
//     ctx.fillStyle = '#053564';
//     ctx.strokeStyle = 'black';
//     ctx.beginPath();
//     ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
// }})}`,

// Scrapped - vertically oscillating enemies
// for(let x = 8600+30; x <= 8700; x += 40){
//     window.obsArr.push(`C(0,[],[1],{x:${x},y:4200,r:30,sf:(e)=>{
//         e.pos.y = 4200 + Math.sin(window.time / 600 + ${x}/3) * (100 - 30)
//     },cr:(e)=>{
//         ctx.lineWidth = 6;
//         ctx.fillStyle = 'hsl(' + (window.time / 12 + ${x}/3) + ', 20%, 30%)';
//         ctx.strokeStyle = 'black';

//         ctx.beginPath();
//         ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke()
//         ctx.closePath();

//         ctx.globalAlpha = 1;
//     }})`);

//     window.obsArr.push(`C(0,[],[1],{x:${x},y:4200,r:30,sf:(e)=>{
//         e.pos.y = 4200 - Math.sin(window.time / 600 + ${x}/3) * (100 - 30);
//     },cr:(e)=>{
//         ctx.lineWidth = 6;
//         ctx.fillStyle = 'hsl(' + (window.time / 12 + ${x}/3) + ', 20%, 30%)';
//         ctx.strokeStyle = 'black';

//         ctx.beginPath();
//         ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke()
//         ctx.closePath();

//         ctx.globalAlpha = 1;
//     }})`);

//     window.obsArr.push(`C(0,[],[1],{x:${8600+8800-x},y:4200,r:30,sf:(e)=>{
//         e.pos.y = 4200 + Math.sin(window.time / 600 + ${x}/3) * (100 - 30)
//     },cr:(e)=>{
//         ctx.lineWidth = 6;
//         ctx.fillStyle = 'hsl(' + (window.time / 12 + ${x}/3) + ', 20%, 30%)';
//         ctx.strokeStyle = 'black';

//         ctx.beginPath();
//         ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke()
//         ctx.closePath();

//         ctx.globalAlpha = 1;
//     }})`);

//     window.obsArr.push(`C(0,[],[1],{x:${8600+8800-x},y:4200,r:30,sf:(e)=>{
//         e.pos.y = 4200 - Math.sin(window.time / 600 + ${x}/3) * (100 - 30);
//     },cr:(e)=>{
//         ctx.lineWidth = 6;
//         ctx.fillStyle = 'hsl(' + (window.time / 12 + ${x}/3) + ', 20%, 30%)';
//         ctx.strokeStyle = 'black';

//         ctx.beginPath();
//         ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.stroke()
//         ctx.closePath();

//         ctx.globalAlpha = 1;
//     }})`);
// }


// IN USE
// window.markerObs = ``;
// function createMarkerAtPos(markerText='Hi',fontSize=80){
//     const p = players[selfId];
//     let x = Math.round(p.pos.x / 100) * 100;
//     let y = Math.round(p.pos.y / 100) * 100;

//     const add2str = `C(3,[],[20],{x:${x},y:${y},fontSize:${fontSize},text:"${markerText}",hex:'#FFFFFF',alpha:1})`;

//     window.markerObs += add2str + '\n';
//     console.log(add2str);
//     eval(add2str);
// }

// generating circle ring
// var gap = 0.03;// gap in radians between each obs
// var radiansLeft = Math.PI * 2 - gap * (obsArr.length - 4);
// var obsSize = radiansLeft / (obsArr.length - 4);
// var rotateSpeed = 0.0003;
// var ang = 0;

// var circleRingStr = '';

// shuffleArray(obsArr);

// for(let i = 0; i < obsArr.length; i++){
//     // if(i !== 9) continue;
//     if(obsArr[i].includes('changeDeathTimerStateTo') || obsArr[i].includes('coinDoorColor') || obsArr[i].includes('timeTrapMaxTime')) continue;
//     // parsing text
//     let t = obsArr[i];

//     // let [shape,simulate,effect,params] = t.split(',');

//     // remove C( start
//     t = t.split('C(')[1];
    
//     // split into rough shape, simulate, effects param
//     let split1 = splitTimes(t, ',[', 2);
    
//     // cleanup and extraction
//     let shape = split1[0];

//     let split2 = splitTimes(split1[2],'],',1);

//     let effects = split2[0];

//     let params = split2[1].split('})')[0] + '}';

//     // console.log({shape, effects, params});

//     // // eval doesn't return anything
//     eval(`window.grabParams = ${params}`);

//     let effectObj = window.grabParams;

//     delete window.grabParams;

//     effectObj.r = 1250 * Math.sqrt(2);
//     effectObj.innerRadius = effectObj.r - 300;
//     effectObj.startSliceAngle = ang;
//     effectObj.endSliceAngle = ang + obsSize;
//     effectObj.startSliceAngleRotateSpeed = rotateSpeed * ((i%2)*2-1);
//     effectObj.endSliceAngleRotateSpeed = rotateSpeed * ((i%2)*2-1);
//     effectObj.x = 9600;
//     effectObj.y = 3100;

//     // console.log(effectObj);

//     circleRingStr += `C(4,[],[${effects}],${JSON.stringify(effectObj)});\n`;

//     ang += obsSize + gap;
// }

// eval(circleRingStr);

// function splitTimes(str, chars, amount){
//     amount--;
//     if(amount < 0) return [str];
//     let arr = [], last = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str.substring(i, i + chars.length) === chars){
//             arr.push(str.substring(last, i));
//             last = i + chars.length;
//             i += chars.length - 1;
//             amount--;
//             if(amount < 0) break;
//         }
//     }
//     arr.push(str.substring(last, str.length));
//     return arr;
// }

// function shuffleArray(array) {
//     for (var i = array.length - 1; i >= 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

var typeMap = {
    'normal': {
        type: [1,[],[0]],
    },
    // 'trans': {
    //     type: [1,[],[20]],
    //     customMap: (params) => {
    //         return {hex: '#000000', alpha: params.opaq};
    //     }
    // },
    // 'block': {
    //     type: [1,[],[20]],
    //     customMap: (params) => {
    //         return {hex: params.color, alpha: 1};
    //     }
    // },
    'grav': {
        type: [1,[],[13]],
        customMap: (params) => {
            const p = {};
            if(params.direction === 'right'){
                p.conveyorAngle = 0
            } else if(params.direction === 'down'){
                p.conveyorAngle = 90;
            } else if(params.direction === 'left'){
                p.conveyorAngle = 180;
            } else {
                p.conveyorAngle = 270;
            }
            p.conveyorFriction = 0.8;
            p.conveyorAngleRotateSpeed = 0;
            p.conveyorForce = params.force / 10000 * 7.08 * 5 / 16.66;
            return p;
        }
    },
    'circle-normal': {
        type: [0,[],[0]],
        radius: 'r' // this means map radius to r
        // all other params filled in 1:1, so x will be filled in from x, y from y, etc.
    },
    'circle-lava': {
        type: [0,[],[1]],
        radius: 'r',
        customMap: (params) => {
            return {
                boundPlayer: true,
            }
        }
    },
    'circle-tp': {
        type: [0,[],[12]],
        customMap: (params) => {
            return {
                tpx: params.tpx * 2,
                tpy: params.tpy * 2
            }
        }
    },
    'lava': {
        type: [1,[],[1]],
        customMap: (params) => {
            return {
                boundPlayer: params.canCollide
            };
        }
    },
    'poly': {
        type: [2,[],[0]],
        customMap: (params) => {
            const p = {points: []};
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            return p;
        }
    },
    'poly-tp': {
        type: [2,[],[12]],
        customMap: (params) => {
            const p = {points: []};
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            p.tpx = params.tpx * 2;
            p.tpy = params.tpy * 2;
            return p;
        }
    },
    'poly-safe': {
        type: [2,[],[11]],
        customMap: (params) => {
            const p = {points: []};
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            return p;
        }
    },
    'poly-vinette': {
        type: [2,[],[24]],
        customMap: (params) => {
            const p = {points: [],
                innerR: params.vc.r,
                innerG: params.vc.g,
                innerB: params.vc.b,
                innerSize: params.ir,
                outerR: params.vc.r,
                outerG: params.vc.g,
                outerB: params.vc.b,
                outerSize: params.or,
                innerOpacity: 0,
                outerOpacity: params.o
            };
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            return p;
        }
    },
    'poly-lava': {
        type: [2,[],[1]],
        customMap: (params) => {
            const p = {points: []};
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            p.boundPlayer = true;//params.canCollide;
            return p;
        }
    },
    'move': {
        type: [1,[0],[0]],
        customMap: (params) => {
            const p = {path: []};
            for(let i = 0; i < params.points.length; i++){
                p.path.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2,
                    params.speed * 2 / 1000
                ])
            }

            p.currentPoint = params.currentPoint;
            p.x = p.path[0][0];
            p.y = p.path[0][1];
            return p;
        }
    },
    'lavamove': {
        type: [1,[0],[1]],
        customMap: (params) => {
            const p = {path: []};
            for(let i = 0; i < params.points.length; i++){
                p.path.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2,
                    params.speed * 2 / 1000
                ])
            }

            p.currentPoint = params.currentPoint;

            const currentPoint = p.path[p.currentPoint];
            let nextPointIndex = p.currentPoint+1;
            if(nextPointIndex === p.path.length) nextPointIndex = 0;
            const nextPoint = p.path[nextPointIndex];

            const totalDist = Math.sqrt((nextPoint[0]-currentPoint[0])**2+(nextPoint[1]-currentPoint[1])**2);
            const fractionCovered = Math.sqrt((params.x*2-currentPoint[0])**2+(params.y*2-currentPoint[1])**2);
            
            p.currentPoint += fractionCovered / totalDist;

            p.x = p.path[0][0];
            p.y = p.path[0][1];

            p.boundPlayer = false;
            if(params.collidable) p.boundPlayer = true;
            return p;
        }
    },
    'tornado': {
        type: [1,[],[23]],
        spinRadius: 'tornadoStrength' 
    },
    'vinette': {
        type: [1,[],[24]],
        customMap: (params) => {
            return {
                innerR: params.vc.r,
                innerG: params.vc.g,
                innerB: params.vc.b,
                innerSize: params.ir,
                outerR: params.vc.r,
                outerG: params.vc.g,
                outerB: params.vc.b,
                outerSize: params.or,
                innerOpacity: 0,
                outerOpacity: params.o
            }
        }
    },
    'tpmove': {
        type: [1,[0],[12]],
        customMap: (params) => {
            const p = {path: []};
            for(let i = 0; i < params.points.length; i++){
                p.path.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2,
                    params.speed * 2 / 1000
                ])
            }
            
            p.currentPoint = params.currentPoint;
            p.x = p.path[0][0];
            p.y = p.path[0][1];
            p.tpx = params.tpx * 2; p.tpy = params.tpy * 2;
            return p;
        }
    },
    'movingsafe': {
        type: [1,[0],[11]],
        customMap: (params) => {
            const p = {path: []};
            for(let i = 0; i < params.points.length; i++){
                p.path.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2,
                    params.speed * 2 / 1000
                ])
            }
            p.currentPoint = params.currentPoint;
            p.x = p.path[0][0];
            p.y = p.path[0][1];
            return p;
        }
    },
    'movingvinette': {
        type: [1,[0],[24]],
        customMap: (params) => {
            const p = {path: [],
                innerR: params.vc.r,
                innerG: params.vc.g,
                innerB: params.vc.b,
                innerSize: params.ir,
                outerR: params.vc.r,
                outerG: params.vc.g,
                outerB: params.vc.b,
                outerSize: params.or,
                innerOpacity: 0,
                outerOpacity: params.o
            };
            for(let i = 0; i < params.points.length; i++){
                p.path.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2,
                    params.speed * 2 / 1000
                ])
            }
            p.currentPoint = params.currentPoint;
            p.x = p.path[0][0];
            p.y = p.path[0][1];
            return p;
        }
    },
    'timetrap': {
        type: [1,[],[17]],
        customMap: (params) => {
            //C(1,[],[17],{h:200,w:300,y:700,x:300,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});
            const p = {timeTrapToShowTenth:false,timeTrapToKill:true,timeTrapRecoverySpeed:params.cdmult};

            p.timeTrapMaxTime = params.maxTime * 1000;
            return p;
        }
    },
    'oval': {
        type: [0,[],[0]],
        customMap: (params) => {
            return {r: Math.min(params.radius, params.radius2)*2};
        }
    },
    'lava-oval': {
        type: [0,[],[1]],
        customMap: (params) => {
            return {r: Math.min(params.radius, params.radius2)*2, boundPlayer: true};
        }
    },
    'safe': {
        type: [1,[],[11]],
    },
    'circle-safe': {
        type: [0,[],[11]],
        r: 'r'
    },
    'circle-vinette': {
        type: [0,[],[24]],
        customMap: (params) => {
            return {
                innerR: params.vc.r,
                innerG: params.vc.g,
                innerB: params.vc.b,
                innerSize: params.ir,
                outerR: params.vc.r,
                outerG: params.vc.g,
                outerB: params.vc.b,
                outerSize: params.or,
                innerOpacity: 0,
                outerOpacity: params.o,
                r: params.r ?? params.radius
            }
        }
    },
    'circle-coin': {
        radius: 'r',
        type: [0,[],[7]],
        customMap: (params) => {
            return {
                color: '#d5d612',
                coinAmount: 1
            }
        }
    },
    'bounce': {
        type: [1,[],[2]],
        customMap: (params) => {
            return {bounciness: params.effect/3/10, decay: 0.5};
        }
    },
    'rotate-normal': {
        type: [1,[1],[0]],
        customMap: (params) => {
            params.x = params.distToPivot + params.pivotX;
            params.y = params.pivotY;
            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle * 180 / Math.PI,
                rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2
            };
        }
    },
    'rotate-lava': {
        type: [1,[1],[1]],
        customMap: (params) => {
            params.x = params.distToPivot + params.pivotX;
            params.y = params.pivotY;
            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle,
                rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2,
                boundPlayer: params.canCollide
            };
        }
    },
    'rotatingsafe': {
        type: [1,[1],[11]],
        customMap: (params) => {
            // console.log(params.angle - lastRotAngle);
            // lastRotAngle = params.angle;
            // lastRotAngle += Math.PI * 3/2;

            // 0: params.y += 1, x += 0
            // 90: params.x -= 1, y += 0

            // params.angle = 0;

            // const rotation = params.angle * Math.PI / 180;

            // {
            //     "x": 896.5984655296048,
            //     "y": 1720.8819734868184,
            //     "w": 25,
            //     "h": 25,
            //     "type": "rotatingsafe",
            //     "angle": -66493.5,
            //     "rotateSpeed": -90,
            //     "pivotX": 925,
            //     "pivotY": 1625,
            //     "distToPivot": 100,
            //     "canCollide": true,
            //     "cullingRadius": 117.67766952966369,
            //     "unSim": 0,
            //     "inView": false
            // },

            // in eX, position is set like this
        //     obj.x =
        //     Math.cos((obj.angle * Math.PI) / 180) *
        //         obj.distToPivot +
        //     obj.pivotX;
        // obj.y =
        //     Math.sin((obj.angle * Math.PI) / 180) *
        //         obj.distToPivot +
        //     obj.pivotY;

            // and we render like this

            // ctx.translate(center.x, center.y);
            // ctx.rotate(degToRad(obstacle.angle));
            // ctx.rect(
            //     -obstacle.w / 2,
            //     -obstacle.h / 2,
            //     obstacle.w,
            //     obstacle.h
            // );

            // so obj.x, obj.y = centerX. 

            // let angle = params.angle;

            // lets try setting angle to 0 and see what happens
            // params.angle = 45;
            params.x = params.distToPivot + params.pivotX;
            params.y = params.pivotY;

            // they're in a straight line like o - ---

            // so now, lets rotate the angle around the obs center. We know that the center point of the safe is its center so lets calculate our own distToPivot from that

            // const middleX = params.x + params.w / 2;
            // const middleY = params.y + params.h / 2

            // const realDistToPivot = Math.sqrt((params.x - params.pivotX) ** 2 + (params.y - params.pivotY) ** 2);

            // // // now we have that, we can set the x and y

            // // // params.angle = angle;
            // const x = Math.cos(params.angle * Math.PI / 180) * dist + params.pivotX - params.w / 2;
            // const y = Math.sin(params.angle * Math.PI / 180) * dist + params.pivotY - params.h / 2;

            return {
                // x:x*2,y:y*2,initialRotation: 0,
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle,
                rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2
            };
        }
    },
    'rotatingvinette': {
        type: [1,[1],[24]],
        customMap: (params) => {
            params.x = params.distToPivot + params.pivotX;
            params.y = params.pivotY;

            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle,
                rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2,
                
                innerR: params.vc.r,
                innerG: params.vc.g,
                innerB: params.vc.b,
                innerSize: params.ir,
                outerR: params.vc.r,
                outerG: params.vc.g,
                outerB: params.vc.b,
                outerSize: params.or,
                innerOpacity: 0,
                outerOpacity: params.o
            
            };
        }
    },
    'check': {
        type: [1,[],[9]],
        customMap: (params) => {
            return {
                checkpointOffsetX: 0,
                checkpointOffsetY: 0
            }
        }
    },
    'tp': {
        type: [1,[],[12]],
        customMap: (params) => {
            return {
                tpx: params.tpx * 2,
                tpy: params.tpy * 2
            }
        }
    },
    'winpad': {
        type: [1,[],[6]]
    },
    'speed': {
        type: [1,[],[19]],
        customMap: (params) => {
            return {
                speedChangePermanent: false,
                speedMult: params.speedInc
            }
        }
    },
    'size': {
        type: [1,[],[18]],
        customMap: (params) => {
            return {
                sizeChangePermanent: false,
                sizeMult: params.size / 24.5
            }
        }
        //C(1,[],[18],{h:200,w:300,y:700,x:300,sizeChangePermanent:false,sizeMult:1.5,});
    },
    'snap': {
        type: [1,[],[16]],
        customMap: (params) => {
            return {
                snapAngleRotateSpeed: 0,
                snapAngle: 0,
                snapCooldown: params.snapWait,
                snapDistanceY: params.snapDistance,
                snapDistanceX: params.snapDistance,
                toSnapX: params.snapX,
                toSnapY: params.snapY
            }
        }
        // {
        //     "x": 11050,
        //     "y": 1550,
        //     "w": 900,
        //     "h": 500,
        //     "type": "snap",
        //     "snapDistance": 50,
        //     "snapWait": 0.4,
        //     "snapX": true,
        //     "snapY": true,
        //     "inView": false
        // },
    },
    'coin': {
        type: [1,[],[7]],
        customMap: (params) => {
            return {
                color: '#d5d612',
                coinAmount: 1
            }
        }
    },
    'coindoor': {
        type: [1,[],[8]],
        customMap: (params) => {
            return {
                coinDoorColor: '#d5d612',
                coindoorCoinAmount: params.coins
            }
        }
    },
    'button': {
        type: [1,[],[7]],
        customMap: (params) => {
            const top = {
                "x": 14941.438100925527,
                "y": 5495.870128796381
            };
            const bottom = {
                "x": 18420.158621406357,
                "y": 8873.08670452917
            };
            const x = params.x * 2;
            const y = params.y * 2;
            const inside = x > top.x && x < bottom.x && y > top.y && y < bottom.y;
            return {
                color: inside ? '#00FF00' : '#d6d612',
                coinAmount: 1
            }
        }
    },
    'door': {
        type: [1,[],[8]],
        customMap: (params) => {
            const id = params.id;
            let coinAmount = 0;
            for(let i = 0; i < obs.length; i++){
                if(obs[i].type === 'button' && obs[i].id === id){
                    coinAmount++;
                }
            }
            const top = {
                "x": 14941.438100925527,
                "y": 5495.870128796381
            };
            const bottom = {
                "x": 18420.158621406357,
                "y": 8873.08670452917
            };
            const x = params.x * 2;
            const y = params.y * 2;
            const inside = x > top.x && x < bottom.x && y > top.y && y < bottom.y;
            return {
                coinDoorColor: inside ? '#00FF00' : '#d6d612',
                coindoorCoinAmount: inside ? 5 : coinAmount
            }
        }
    },
    'raxis': {
        type: [1,[],[15]],
        customMap: (params) => {
            return {
                axisSpeedMultY: params.ry === true ? 0 : 1,
                axisSpeedMultX: params.rx === true ? 0 : 1
            }
        }
    },
    'push': {
        type: [1,[],[25]],
        customMap: (params) => {
            return {
                pushAngle: {'right': 180, 'down': 270, 'left': 0, 'right': 90}[params.dir],
                maxPushDistance: params.max * 2,
                idlePushBackSpeed: params.pushBack / 20,
                positiveDirectionOnly: true,
                pushConversionRatio: 0.86
            }
        }
    },//C(3,[],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,hex:colourRgb(100,100,100),});
    'text': {
        customMap: (params) => {
            // {
            //     "x": 300,
            //     "y": 75,
            //     "angle": 0,
            //     "text": "Welcome to the",
            //     "size": 30,
            //     "story": false,
            //     "element": {
            //         "tWidth": 0,
            //         "tHeight": 0
            //     }
            // },
            if(params.angle !== 0) {
                return {
                    type: [3,[1],[20]],
                    fontSize: params.size * 2,
                    text: params.text,
                    hex: '#FFFFFF',
                    pivotX: params.x * 2,
                    pivotY: params.y * 2,
                    rotateSpeed: 0,
                    initialRotation: params.angle,
                }
            }//"C(3,[1],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,pivotY:800,pivotX:450,rotateSpeed:0,initialRotation:45,hex:colourRgb(100,100,100),});"
            else {
                return {
                    type: [3,[],[20]],
                    fontSize: params.size * 2,
                    text: params.text,
                    hex: '#FFFFFF'
                }
            }
        }
    },
    'platformer': {
        type: [1,[],[14]],
        customMap: (params) => {
            const p = {};
            if(params.direction === 'right'){
                p.platformerAngle = 0
            } else if(params.direction === 'down'){
                p.platformerAngle = 90;
            } else if(params.direction === 'left'){
                p.platformerAngle = 180;
            } else {
                p.platformerAngle = 270;
            }
            p.platformerFriction = 0.9;
            p.platformerAngleRotateSpeed = 0;
            p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 5 / 16.66;
            p.jumpForce = params.jumpHeight / 8.2 * 2.32 / 1.2;
            p.jumpDecay = 0.9525;
            p.maxJumpCooldown = 20;
            return p;
        }
        // {
        //     "x": 6600,
        //     "y": 300,
        //     "w": 500,
        //     "h": 350,
        //     "type": "platformer",
        //     "force": 1500,
        //     "dir": {
        //         "x": 0,
        //         "y": 1500
        //     },
        //     "direction": "down",
        //     "jumpHeight": 145,
        //     "maxForce": 1000,
        //     "variableJumpHeight": false,
        //     "platformerFriction": 0.8,
        //     "inView": false
        // },
    },
    'breakable': {
        type: [1,[],[10]],
        customMap: (params) => {
            return {
                maxStrength: Math.max(200,params.maxStrength * Math.max(1,params.timer * 1000 / 60)),
                regenTime: params.regenTime * 1000 / 15,
                healSpeed: 1
            }
        }
    },
    // C(1,[],[10],{h:200,w:300,y:700,x:300,healSpeed:1,regenTime:100,maxStrength:60,});
    // {
    //     "x": 2950,
    //     "y": 2650,
    //     "w": 200,
    //     "h": 50,
    //     "type": "breakable",
    //     "maxStrength": 40,
    //     "currentStrength": 40,
    //     "time": 0,
    //     "timer": 0,
    //     "regenTime": 3,
    //     "inView": false
    // },
    

    // {
    //     "x": 8550,
    //     "y": 9500,
    //     "radius": 300,
    //     "type": "circle-hollow-slice",
    //     "startAngle": 1.5707963267948966,
    //     "endAngle": -1.5707963267948966,
    //     "startPolygon": {
    //         "points": [
    //             [
    //                 8550,
    //                 9650
    //             ],
    //             [
    //                 8550,
    //                 9800
    //             ]
    //         ],
    //         "type": "poly",
    //         "props": {}
    //     },
    //     "endPolygon": {
    //         "points": [
    //             [
    //                 8550,
    //                 9350
    //             ],
    //             [
    //                 8550,
    //                 9200
    //             ]
    //         ],
    //         "type": "poly",
    //         "props": {}
    //     },
    //     "innerRadius": 150,
    //     "toRotate": false,
    //     "rotateSpeed": 0,
    //     "renderType": "circle",
    //     "inView": false
    // },
    'circle-hollow-slice': {
        type: [4,[],[0]],
        customMap: (params) => {
            return {
                r: params.radius * 2,
                innerRadius: params.innerRadius * 2,
                startSliceAngle: params.startAngle,
                endSliceAngle: params.endAngle,
                startSliceAngleRotateSpeed: params.rotateSpeed,
                endSliceAngleRotateSpeed: params.rotateSpeed
            }
        }
    },

    'circle-slice': {
        type: [4,[],[0]],
        customMap: (params) => {
            return {
                r: params.radius * 2,
                innerRadius: 0,
                startSliceAngle: params.startAngle,
                endSliceAngle: params.endAngle,
                startSliceAngleRotateSpeed: 0,
                endSliceAngleRotateSpeed: 0
            }
        }
    },

    'ship': {
        type: [1,[],[27]],
        customMap: (params) => {
            return {
                changeShipStateTo: params.state,
                initialShipAngle: -Math.PI / 2,
                shipTurnSpeed: Math.PI / 20
            }
        }
    },

    'musicchange': {
        type: [1,[],[26]],
        customMap: (params) => {
            return {
                x: params.x * 2,
                y: params.y * 2,
                w: params.w * 2,
                h: params.h * 2,
                musicPath: params.musicPath
            };
        }
    }
}

var enemyTypeMap = {
    normal: (params) => {
        const bounds = {
            x: params.bound.x * 2,
            y: params.bound.y * 2,
            w: params.bound.w * 2,
            h: params.bound.h * 2
        };
        counter++;
        return `
        var xv${counter} = ${params.xv/30};
        var yv${counter} = ${params.yv/30};
        C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
        e.pos.y += yv${counter};
        e.pos.x += xv${counter};
        if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
            xv${counter} = xv${counter} * -1;
        }
        if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
            yv${counter} = yv${counter} * -1;
        }
        },});
        `
        // {
        //     "type": "normal",
        //     "angle": 5.874603837535309,
        //     "radius": 16,
        //     "speed": 85,
        //     "x": 6898.622849512051,
        //     "y": 4711.556031428228,
        //     "renderX": 6898.622849512051,
        //     "renderY": 4711.556031428228,
        //     "xv": 78.00325384310767,
        //     "yv": 33.77117691001763,
        //     "bound": {
        //         "x": 6400,
        //         "y": 4250,
        //         "w": 600,
        //         "h": 700
        //     },
        //     "isLava": false,
        //     "inView": false
        // },
    },
    square: (params) => {
        const bounds = {
            x: params.bound.x * 2,
            y: params.bound.y * 2,
            w: params.bound.w * 2,
            h: params.bound.h * 2
        };
        const size = params.size;
        counter++;
        return `
        var xv${counter} = ${params.xv/42};
        var yv${counter} = ${params.yv/42};
        C(1,[3],[1],{w:${size},h:${size},y:${params.y*2},x:${params.x*2},sf:(e)=>{
        e.pos.y += yv${counter};
        e.pos.x += xv${counter};
        if ((e.pos.x) < ${bounds.x} || e.pos.x + ${size} > ${bounds.x + bounds.w}) {
            xv${counter} = xv${counter} * -1;
        }
        if ((e.pos.y) < ${bounds.y} || e.pos.y + ${size} > ${bounds.y + bounds.h}) {
            yv${counter} = yv${counter} * -1;
        }
        },});
        `
        // {
        //     "type": "normal",
        //     "angle": 5.874603837535309,
        //     "radius": 16,
        //     "speed": 85,
        //     "x": 6898.622849512051,
        //     "y": 4711.556031428228,
        //     "renderX": 6898.622849512051,
        //     "renderY": 4711.556031428228,
        //     "xv": 78.00325384310767,
        //     "yv": 33.77117691001763,
        //     "bound": {
        //         "x": 6400,
        //         "y": 4250,
        //         "w": 600,
        //         "h": 700
        //     },
        //     "isLava": false,
        //     "inView": false
        // },
    },
    turret: (params) => {
        // {
        //     "type": "turret",
        //     "angle": 3.6232766945442836,
        //     "shootSpeed": 3.58,
        //     "timer": 2.2316666666694256,
        //     "pRadius": 32,
        //     "pSpeed": 120,
        //     "projectiles": [
        //         {
        //             "x": 4291,
        //             "y": 3450,
        //             "angle": 0
        //         },
        //         {
        //             "x": 3862,
        //             "y": 3450,
        //             "angle": 0
        //         }
        //     ],
        //     "shootDirections": [
        //         0
        //     ],
        //     "csd": 0,
        //     "deadProjectiles": [],
        //     "radius": 32,
        //     "speed": 0,
        //     "x": 3700,
        //     "y": 3450,
        //     "renderX": 3700,
        //     "renderY": 3450,
        //     "xv": 0,
        //     "yv": 0,
        //     "bound": {
        //         "x": 3650,
        //         "y": 3400,
        //         "w": 850,
        //         "h": 100
        //     },
        //     "inView": true
        // },
        const bounds = {
            x: params.bound.x * 2,
            y: params.bound.y * 2,
            w: params.bound.w * 2,
            h: params.bound.h * 2
        };
        counter++;
        const shootSpeed = params.shootSpeed * 1000 / 15;
        const projectileParams = {
            speed: params.pSpeed / 42,
            radius: params.pRadius * 2,
            shootDirections: params.shootDirections,
        }
        const c = counter;
        return `
        var xv${c} = ${params.xv/42};
        var yv${c} = ${params.yv/42};
        var shootDirectionIndex${c} = 0;
        var timer${c} = ${shootSpeed};
        C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
        e.pos.y += yv${c};
        e.pos.x += xv${c};
        if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
            xv${c} = xv${c} * -1;
        }
        if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
            yv${c} = yv${c} * -1;
        }

        timer${c}--;
        if(timer${c} < 0){
            timer${c} = ${shootSpeed};

            shootDirectionIndex${c}++;
            const shootDirections = [${projectileParams.shootDirections.toString()}];
            if(shootDirectionIndex${c} >= shootDirections.length){
                shootDirectionIndex${c} = 0;
            }
            let dir = shootDirections[shootDirectionIndex${c}];

            counter++;
            /*scoped using let*/
            let xv${counter} = Math.cos(dir) * ${projectileParams.speed};
            let yv${counter} = Math.sin(dir) * ${projectileParams.speed};
            C(0,[3],[1],{r:${projectileParams.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            /*delete obstacle*/
            if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                window.tickFns.push(()=>{
                    for(let i = 0; i < obstacles.length; i++){
                        if(obstacles[i] === e) {obstacles.splice(i,1); break;}
                    }
                    /*for(let key in window.idToObs){
                        if(window.idToObs[key] === e){delete window.idToObs[key]; break;}
                    }*/
                });
            }
            },});
        }

        },});
        `
    },
    switch: (params) => {
        // {
        //     "type": "switch",
        //     "angle": 0.6586898029125109,
        //     "switchTime": 3.2,
        //     "switchTimer": 2.3083333333306277,
        //     "currentSwitch": true,
        //     "radius": 25,
        //     "speed": 22,
        //     "x": 2557.5655869230604,
        //     "y": 4628.602260600484,
        //     "renderX": 2557.5655869230604,
        //     "renderY": 4628.602260600484,
        //     "xv": -17.397486856740482,
        //     "yv": 13.465788171122483,
        //     "bound": {
        //         "x": 2400,
        //         "y": 4150,
        //         "w": 350,
        //         "h": 650
        //     },
        //     "inView": false
        // },
        const bounds = {
            x: params.bound.x * 2,
            y: params.bound.y * 2,
            w: params.bound.w * 2,
            h: params.bound.h * 2
        };
        counter++;
        const maxSwitchTime = params.switchTime*1000/16; 
        return `
        var xv${counter} = ${params.xv/42*4};
        var yv${counter} = ${params.yv/42*4};
        var switchTime${counter} = ${maxSwitchTime*Math.random()*2};
        var switchState${counter} = true;
        var pos${counter} = {
            x: ${params.x*2}, y: ${params.y*2} 
        }
        C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
            pos${counter}.y += yv${counter};
            pos${counter}.x += xv${counter};
            if ((pos${counter}.x - e.sat.r) < ${bounds.x} || pos${counter}.x + e.sat.r > ${bounds.x + bounds.w}) {
                xv${counter} = xv${counter} * -1;
            }
            if ((pos${counter}.y - e.sat.r) < ${bounds.y} || pos${counter}.y + e.sat.r > ${bounds.y + bounds.h}) {
                yv${counter} = yv${counter} * -1;
            }

            if(switchState${counter} === true){
                e.pos.x = pos${counter}.x;
                e.pos.y = pos${counter}.y;
            } else {
                e.pos.x = -100000;
            }

            switchTime${counter}--;
            if(switchTime${counter} <= 0){
                switchTime${counter} = ${params.switchTimer*1000/15};
                switchState${counter} = !switchState${counter};
                if(switchState${counter} === true){
                    /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                    e.pos.x = pos${counter}.x;
                    e.pos.y = pos${counter}.y;
                }
            }
        }});
        C(0,[3],[0],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
            if(switchState${counter} === true){
                e.pos.x = -100000;
            } else {
                e.pos.x = pos${counter}.x;
                e.pos.y = pos${counter}.y;
            }
        }});
        `
        // {
        //     "type": "normal",
        //     "angle": 5.874603837535309,
        //     "radius": 16,
        //     "speed": 85,
        //     "x": 6898.622849512051,
        //     "y": 4711.556031428228,
        //     "renderX": 6898.622849512051,
        //     "renderY": 4711.556031428228,
        //     "xv": 78.00325384310767,
        //     "yv": 33.77117691001763,
        //     "bound": {
        //         "x": 6400,
        //         "y": 4250,
        //         "w": 600,
        //         "h": 700
        //     },
        //     "isLava": false,
        //     "inView": false
        // },
    },
    flashlight: (params) => {
        if(Math.random() < 0.5) return '';
        return enemyTypeMap.turret({
            "type": "turret",
            "angle": params.angle,
            "shootSpeed": 1.54,
            "timer": 0,
            "pRadius": params.radius * (Math.random()*0.8 + 0.2),
            "pSpeed": params.speed * (1.65+Math.random()),
            "projectiles": [],
            "shootDirections": [
                0, Math.PI / 2, Math.PI, Math.PI * 3/2
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": params.radius,
            "speed": params.speed,
            "x": params.x,
            "y": params.y,
            "renderX": params.renderX,
            "renderY": params.renderY,
            "xv": params.xv,
            "yv": params.yv,
            "bound": params.bound,
            "inView": false
        },)
    }
}

var enemies = [];

var safes = [];

var texts = [];

obs.push(...safes, ...texts);

var a = obs.splice(86,1);
obs.unshift(...a);

var len = obs.length;
// {
//     "x": 850,
//     "y": 14375,
//     "w": 1150,
//     "h": 50,
//     "type": "vinette",
//     "ir": 0.02,
//     "or": 0.06,
//     "o": 1,
//     "vc": {
//         "r": 0,
//         "g": 0,
//         "b": 0
//     },
//     "inView": false
// },

var alreadyLogged = {};

var str = '';

var alreadyLoggedEnemy = {};
for(let i = 0; i < enemies.length; i++){
    if(enemyTypeMap[enemies[i].type] !== undefined){
        str += '\n' + enemyTypeMap[enemies[i].type](enemies[i]);
    } else if(alreadyLoggedEnemy[enemies[i].type] === undefined){
        alreadyLoggedEnemy[enemies[i].type] = true;
        console.log(`no enemy type def for ${enemies[i].type}`);
    }
}

for(let i = 0; i < obs.length; i++){
    const o = obs[i];
    const typeDef = typeMap[o.type];

    if(o.type === 'roundedcorners' || o.type === 'roundedlava'){
        const circleType = o.type === 'roundedcorners' ? 'circle-normal' : 'circle-lava';
        for(let i = 0; i < o.circles.length; i++){
            obs.push({
                x: o.circles[i].x,
                y: o.circles[i].y,
                radius: o.circles[i].radius,
                "renderType": "circle",
                "inView": false,
                type: circleType
            })
        }
        const rectType = o.type === 'roundedcorners' ? 'normal' : 'lava';
        for(let i = 0; i < o.rects.length; i++){
            obs.push({
                x: o.rects[i].x,
                y: o.rects[i].y,
                w: o.rects[i].w,
                h: o.rects[i].h,
                type: rectType
            })
        }
        continue;
    } else if(o.type === 'color'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        const minX = o.x - 100;
        const minY = o.y - 100;
        const maxX = o.x + o.w + 100;
        const maxY = o.y + o.h + 100;
        // "type": "color",
        // "bgColor": "#201813",
        // "tileColor": "#5c4337",
        // "inView": false
        str += `var minX${counter}, minY${counter}, maxX${counter}, maxY${counter};
        minX${counter} = ${minX};minY${counter} = ${minY};maxX${counter} = ${maxX};maxY${counter} = ${maxY};
        C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
            const player = window.players[window.selfId];
            if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {
                colors.background="${o.tileColor}"; colors.tile="${o.bgColor}";
            }
        },});\n`;
        counter++;
    } else if(o.type === 'switchlava'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        // {
        //     "x": 400,
        //     "y": 1000,
        //     "w": 150,
        //     "h": 400,
        //     "type": "switchlava",
        //     "onTime": 0.9,
        //     "offTime": 0.9,
        //     "state": true,
        //     "timer": 0.08333333333388027,
        //     "collidable": false,
        //     "inView": false
        // },
        // let timer = params.timer;
        // let state = params.state;
        // let x = params.x * 2;
        str += `var timer${counter} = ${o.timer}; var state${counter} =${o.state}; var x${counter} = ${o.x}; 
        C(1,[],[1],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},sf:(e)=>{
                timer${counter} -= 1 / 60;
                if(timer${counter} < 0){
                    state${counter} = !state${counter};
                    if(state${counter} === true){
                        // on
                        timer${counter} += ${o.onTime};
                        e.pos.x = x${counter};
                    } else {
                        // off
                        timer${counter} += ${o.offTime};
                        e.pos.x = -1E9;
                    }
                }
            },
            cr:(e)=>{
                ctx.beginPath();
                  
                if (state${counter}) {
                    if (timer${counter} < 0.2 && ${o.onTime} > 0.2) {
                        ctx.globalAlpha = timer${counter} / 0.2;
                    }
                } else {
                    ctx.globalAlpha = 0.3;
                    if (timer${counter} < 0.2 && ${o.offTime} > 0.2) {
                        ctx.globalAlpha = 0.9 * (1 - timer${counter} / 0.2) + 0.1;
                    }
                }
                ctx.fillStyle = ${o.collidable} ? '#c70000' : '#9e0000';
                /*if (obstacle.collidable) {
                     ctx.fillStyle = '#c70000';
                }*/ 

                ctx.lineWidth = 4;
                ctx.strokeStyle = 'black';
                ctx.rect(x${counter}, e.pos.y, e.dimensions.x, e.dimensions.y);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });\n`;
        counter++;
    } else if(o.type === 'block' || o.type === 'trans'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        // 'block': {
        //     type: [1,[],[20]],
        //     customMap: (params) => {
        //         return {hex: params.color, alpha: 1};
        //     }
        // },
            // 'trans': {
    //     type: [1,[],[20]],
    //     customMap: (params) => {
    //         return {hex: '#000000', alpha: params.opaq};
    //     }
    // },
        str += `C(1,[],[20],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
            cr:(e)=>{
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.background" : "'" + (o.hex ?? o.color) + "'"};
                ctx.globalAlpha = ${o.opaq ?? 1};
                ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });\n`;
        counter++;
        continue;
    }

    if(typeDef === undefined) {
        if(alreadyLogged[o.type] === undefined){
            alreadyLogged[o.type] = true;
            console.log('no type def for ' + o.type);
        }
        
        continue;
    }

    const params = {type: typeDef.type};

    for(let key in o){
        if(key === 'type') continue;
        if(typeDef[key] !== undefined) {
            params[typeDef[key]] = o[key];// o.r instead of o.radius set to o[key] 
        } else {
            params[key] = o[key];
        }
    }

    params.x *= 2;
    params.y *= 2;
    if(params.w) params.w *= 2;
    if(params.h) params.h *= 2;
    if(params.r !== undefined) params.r *= 2;

    if(typeDef.customMap !== undefined){
        const moreParams = typeDef.customMap(o);
        for(let key in moreParams){
            params[key] = moreParams[key];
        }
    }
    
    let paramString = `{`;
    for(let key in params){
        paramString += `${key}:${JSON.stringify(params[key])},`;
    }
    paramString += '}';

    let typeString = JSON.stringify(params.type);
    typeString = typeString.slice(1, typeString.length-1);

    //C(1,[],[0],{h:100,w:1100,y:4300,x:4600,});
    str += `C(${typeString},${paramString})\n`;
}

// cone render mapping
// idea: first map everything to a circle and then use the 3d renderer to extrude it down with some h that's in a constant ratio to the w
// C(0,[],[0],{x:-1000,y:0,r:10,cr:(e)=>{
//     // cancelAnimationFrame(window.runRAF);
//     // const imgData = ctx.getImageData(0,0,canvas.w,canvas.h);
//     // // console.log(canvas.w, canvas.h);

//     // setTimeout(() => {
//     //     // ctx.save();
//     //     // ctx.translate(players[selfId].pos.x + canvas.w / 2, players[selfId].pos.y - canvas.h / 2)
//     //     ctx.fillStyle = 'blue';
//     //     ctx.fillRect(0,0,canvas.w, canvas.h);

//     //     const r = Math.round(canvas.w / 5);
//     //     const newImgData = ctx.createImageData(r*2,r*2);
//     //     // // fill circle
//     //     for(let x = -r; x <= r; x++){
//     //         for(let y = -r; y <= r; y++){
//     //             const dist = Math.sqrt(x**2+y**2);
//     //             if(dist > r) continue; // dist inside square but not in circle
//     //             const angle = Math.atan2(y,x);

//     //             // multiply by w/h to get the respective dimension
//     //             const maxCanvDist = 1 / 2 / Math.cos(angle);

//     //             const coord = [
//     //                 /*x*/canvas.w / 2 + Math.cos(angle) * dist/r * maxCanvDist * canvas.w,
//     //                 /*y*/canvas.h / 2 + Math.sin(angle) * dist/r * maxCanvDist * canvas.h,
//     //             ];

//     //             const indFrom = (Math.round(coord[0]) * imgData.width + Math.round(coord[1])) * 4;
//     //             const indTo = ((x+r)*newImgData.width + (y+r)) * 4;

//     //             if(Math.random() < 0.01)console.log(indFrom, indTo);

//     //             newImgData[indTo] = imgData[indFrom];
//     //             newImgData[indTo+1] = imgData[indFrom+1];
//     //             newImgData[indTo+2] = imgData[indFrom+2];
//     //             newImgData[indTo+3] = imgData[indFrom+3];
//     //         }   
//     //     }// TODO

//     //     // ctx.putImageData(imgData, 0,0 );
//     //     ctx.putImageData(newImgData,0,0);
//     //     // requestAnimationFrame(window.runFn);
//     //     // ctx.restore();
//     // }, 100)

    
//     // ctx.translate(canvas.w / 2, canvas.h / 2);
//     // ctx.scale(ratio, ratio);
//     // ctx.translate(-canvas.w / 2, -canvas.h / 2);
//     // ctx.translate(-r, -r);

//     // console.log(savedTransform);
// }})

// var transformed = false;

// var startedConeRender = false;
// setTimeout(() => {
//     startedConeRender = true;
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0,0,canvas.w,canvas.h);
//     ctx.beginPath();
//     ctx.arc(canvas.w / 2, canvas.h / 2, canvas.w / 5, 0, Math.PI * 2);
//     ctx.clip();
//     // ctx.fillStyle = 'red';
//     // ctx.fill();
//     ctx.closePath();

//     window.changeCameraScale(.2);

//     // cancelAnimationFrame(window.runRAF)
// }, 1000)

// C(0,[],[0],{x:-1000,y:0,r:10,cr:(e)=>{
//     // ctx.save();
//     ctx.beginPath();
//     ctx.fillStyle = 'red';
//     ctx.arc(window.camera.x, window.camera.y, canvas.w / 5, 0, Math.PI * 2);
//     ctx.clip();
//     ctx.closePath();
// }})

// starfieldrender
// only on client
// TODO: uncomment
var initCanvases = () => {};
var isSecond = false;
if(window.importNoise !== undefined){
    initCanvases = async() => {
        let animState = 'welcome';
        let animT = 0;

        if(isSecond === true){
            // what we did in the desert changing to the grand cathedral
            // TODO (when i get back): Make is the unexpected have a bit more delay, fix oval skipping some of the animation again? Also test the ++ time thing instead of date.now (dt?) and maybe the canvas zooms as well or like sine waves from -1 to 1 so it inverts even after anim?
            if(musicObs !== undefined) {musicObs.musicPath = 'https://www.youtube.com/watch?v=pM7xCwaCV6g'; musicObs.musicStartTime = 17;}
        }

        let oldRender = window.render;
        window.render = (...params) => {
            oldRender(...params);
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,canvas.w,canvas.h);
            document.body.style.backgroundColor = 'black';
        }
        
        const THREE = await import("https://cdn.skypack.dev/pin/three@v0.129.0-XYKMzgCzb23GRdwfqj2I/mode=imports,min/optimized/three.js");
        const noise = await window.importNoise();

        const starColors = [
            0xCCCCCC,
            0xDDDDDD,
            0xEEEEEE
        ];

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.0001, 10000 );

        const renderer = new THREE.WebGLRenderer(/*{antialias: true}*/);
        renderer.setSize( window.innerWidth, window.innerHeight );

        const placeholder = document.getElementById('webglplaceholder');
        renderer.domElement.style.opacity = 0;
        placeholder.appendChild( renderer.domElement );

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

        let removedRendererDOMel = false;

        const webglResize = () => {
            camera.aspect = 1600 / 900;
            camera.updateProjectionMatrix();
        
            renderer.setSize(1600, 900);

            renderer.domElement.style.width = window.innerWidth + "px";
            renderer.domElement.style.height = window.innerHeight + "px";
            // window.resizeElements([renderer.domElement]);
        }

        webglResize();
        window.resizeFns.push(webglResize);

        // second canvas that overlays the starfield and says things
        const canvas2 = document.createElement('canvas');
        placeholder.appendChild(canvas2);

        const c = canvas2.getContext('2d');
        
        const canvas2resize = () => {
            // canvas2.w = canvas2.width = window.innerWidth;
            // canvas2.h = canvas2.height = window.innerHeight;
            const width = 1920;
            const height = 1080;
            if (canvas2.width !== width) {
                canvas2.width = width;
                canvas2.style.width = `${width}px`;
            }
            if (canvas2.height !== height) {
                canvas2.height = height;
                canvas2.style.height = `${height}px`;
            }
            let scaleMult = canvas2?._scaleMult ?? 1;
            canvas2.style.transform = `scale(${
                Math.max(window.innerWidth / width, window.innerHeight / height) *
                scaleMult
            })`;
            canvas2.style.left = `${(window.innerWidth - width) / 2}px`;
            canvas2.style.top = `${(window.innerHeight - height) / 2}px`;

            canvas2.w = canvas2.width;
            canvas2.h = canvas2.height;

            
            // canvas2.w = canvas2.width = window.innerWidth;
            // canvas2.h = canvas2.height = window.innerHeight;
        };

        canvas2resize();
        window.resizeFns.push(canvas2resize);

        function interpolateBetween(startPos, endPos, startT, endT){
            if(animT < startT) return startPos;
            else if(animT > endT) return endPos;
        
            const ratio = (animT - startT) / (endT - startT);
        
            return interpolate(startPos, endPos, smootherStep(ratio));
        }

        function smootherStep(t){
            return t * t * t * (t * (t * 6. - 15.) + 10.);
        }

        const fadeTime = 100;
        const solidTime = 200;
        const texts = isSecond === false ? ['Welcome, Traveler.', 'Welcome to Evades X.'] : 
        ["Good job!", "Now, you're almost ready to be released into the wide world of Evades X.", "But before I let you in, I must warn you.", "Evades X is a game where anything is possible.", "So you should expect...","the unexpected!"];
        let curText = 0;
        let state = 'fadeIn';
        let stateTime = fadeTime;
        let stateStartTime = animT;
        let stateEndTime = animT + stateTime;
        const nextStateMap = {
            'fadeIn': 'hold',
            'hold': 'fadeOut',
            'fadeOut': 'fadeIn'
        }

        let secondTimeDomElFade = 0;

        // let movedAround = false;

        let playerX = 0;
        let playerY = 0;

        let alreadyInnittedCone = false;
        let inittedFade = false;

        // let tps;

        let firstRenderTime = undefined;
        let inittedFinalObs = false;

        let curText5Time = undefined;

        let scaleRenderApplied = false;
        let scaleRenderStartTime = 0;
        
        let renderCanvas2 = () => {
            c.clearRect(0,0,canvas2.w,canvas2.h);

            // const w = canvas2.w;
            // const h = canvas2.h;

            // if(animState === 'welcome'){
                c.shadowBlur = 10;
                c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
                c.shadowColor = 'white';
                c.fillStyle = 'white';
                c.textAlign = 'center';
                c.textBaseline = 'middle';

                if(curText === 5) {
                    if(curText5Time === undefined) curText5Time = Date.now();
                    c.font = `${Math.min(canvas2.w,canvas2.h)*(0.05 + 0.01 * Math.pow(1.1, (Date.now() - curText5Time) / 12) )}px Inter`;
                    c.fillStyle = c.shadowColor = 'red';
                    scaleRenderApplied = true;
                }

                stateTime -= timeScale * dt * 60;
                if(stateTime < 0){
                    const nextState = nextStateMap[state];
                    state = nextState;
                    stateStartTime = animT + stateTime;
                    if(nextState === 'fadeIn' || nextState === 'fadeOut'){
                        stateTime += fadeTime;
                        stateEndTime = stateStartTime + fadeTime;
                    } else {
                        stateTime += solidTime;
                        stateEndTime = stateStartTime + solidTime;
                    }
                    if(state === 'fadeIn')curText++;
                    if(curText === 2 && isSecond === false){
                        c.shadowBlur = 0;
                        animState = 'anim';
                        animT = 0;
                        renderCanvas2 = renderCanvas2anim;
                        renderCanvas2();
                        return;
                    } else if(curText === 4 && isSecond === true && inittedFade === false){
                        secondTimeDomElFade = Date.now();
                        inittedFade = true;
                        stateEndTime += 1400;

                        scaleRenderApplied = true;
                        scaleRenderStartTime = window.time;

                        C(1,[],[0],{x:7500,y:1050,w:10000,h:5000});
                    }
                }

                // idea for arena: Taste the edge text above and winpad below (whole wall). But of course the winpad is a custom and will just refresh the page. Also switch to the grand cathedral w/ timestap whatever it works out to be
                if(isSecond === true && curText > 5) return;// no undefineds

                if(secondTimeDomElFade !== 0){
                    const opaq = Math.min(1,Math.max(0,1 - (Date.now() - secondTimeDomElFade) / 2000));
                    releasePlayer = true;
                    if(scaleRenderApplied === true){
                        window.render = (...params) => {
                            changeCameraScale(Math.abs(Math.cos((window.time - scaleRenderStartTime) / 800)));
                            oldRender(...params);
                        }
                    }
                    else window.render = oldRender;
                    if(opaq <= 0 && alreadyInnittedCone === false){
                        let hasRefreshed = false;
                        const centerX = 3100;
                        const centerY = 3000;
                        const rx = 1200;
                        const ry = 700;
                        for(let a = 0; a < 8; a++){
                            const angleOffset = Math.PI * 2 * ((a%4)/4);
                            const sign = (a < 4) ? 1 : -1;
                            C(0,[],[3],{x:0,y:0,r:100,cr:(o)=>{
                                if(firstRenderTime < 50) return;
                                ctx.globalAlpha = 1;
                                ctx.fillStyle = `hsl(${window.time/12},50%,50%)`;
                                ctx.shadowColor = ctx.fillStyle;
                                ctx.shadowBlur = 15;
                                ctx.beginPath();
                                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.closePath();
                                ctx.shadowBlur = 0;
                            },ef:()=>{
                                if(hasRefreshed === true) return;
                                hasRefreshed = true;
                                localStorage.setItem('tutorialCompleted', 't');
                                location.replace(location.origin + '/create');
                            },sf:(o)=>{
                                const angle = angleOffset + window.time * 0.0026 * sign;
                                o.pos.x = centerX + Math.cos(angle) * rx;
                                o.pos.y = centerY + Math.sin(angle) * ry;
                            }})
                        }

                        // feel the flame
                        // taste the edge
                        // feed the X
                        // darkness hold

                        // texts
                        {
                            const rx = 560;
                            const ry = 560;
                            const rotateSpeed = 0.00043 * 2.5;
                            C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Taste the edge.",sf:(o)=>{
                                const angle = window.time * rotateSpeed + Math.PI*3/2;
                                o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                                o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            },cr:(o)=>{
                                if(firstRenderTime < 50) return;
                                ctx.font = `${o.fontSize}px Inter`;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = 'white';
                                const a = Math.PI/2 + Math.sin(window.frames / 42);
                                ctx.translate(o.pos.x, o.pos.y);
                                ctx.rotate(a);
                                ctx.fillText(o.text, 0,0);
                                ctx.rotate(-a);
                                ctx.translate(-o.pos.x, -o.pos.y);
                            }})
                            C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Feed The X.",sf:(o)=>{
                                const angle = window.time * rotateSpeed * -1 + Math.PI;
                                o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                                o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            },cr:(o)=>{
                                if(firstRenderTime < 50) return;
                                ctx.font = `${o.fontSize}px Inter`;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = 'white';
                                const a = Math.PI/2 + Math.sin(window.frames / 42);
                                ctx.translate(o.pos.x, o.pos.y);
                                ctx.rotate(a);
                                ctx.fillText(o.text, 0,0);
                                ctx.rotate(-a);
                                ctx.translate(-o.pos.x, -o.pos.y);
                            }})
                            C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Feel the flame.",sf:(o)=>{
                                const angle = window.time * rotateSpeed + Math.PI/2;
                                o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                                o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            },cr:(o)=>{
                                if(firstRenderTime < 50) return;
                                ctx.font = `${o.fontSize}px Inter`;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = 'white';
                                const a = Math.PI/2 + Math.sin(window.frames / 42);
                                ctx.translate(o.pos.x, o.pos.y);
                                ctx.rotate(a);
                                ctx.fillText(o.text, 0,0);
                                ctx.rotate(-a);
                                ctx.translate(-o.pos.x, -o.pos.y);
                            }})
                            C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Darkness Hold.",sf:(o)=>{
                                const angle = window.time * rotateSpeed * -1;
                                o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                                o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            },cr:(o)=>{
                                if(firstRenderTime < 50) return;
                                ctx.font = `${o.fontSize}px Inter`;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = 'white';
                                ctx.translate(o.pos.x, o.pos.y);
                                const a = Math.PI/2 + Math.sin(window.frames / 42);
                                ctx.translate(o.pos.x, o.pos.y);
                                ctx.rotate(a);
                                ctx.fillText(o.text, 0,0);
                                ctx.rotate(-a);
                                ctx.translate(-o.pos.x, -o.pos.y);
                            }})
                        }

                        alreadyInnittedCone = true;
                        renderer.domElement.remove();
                        // removedRendererDOMel = true;
                        window.resizeFns = window.resizeFns.filter(f => f !== webglResize);

                        // creating a new canvas

                        // CONE DISTORTION
                        (async()=>{
                            obstacles = obstacles.filter(o => o.img === undefined && o.deathTime === undefined);
                            window.unTaintCanvas();
                            await window.initDistortion(`#version 300 es
                                in highp vec4 pos;
                                
                                uniform float uTime;
                                
                                out highp vec2 vTextureCoord;
                                
                                void main()
                                {
                                    float angle = atan(pos.y, pos.x);
                                    float dist = sqrt(pos.y*pos.y + pos.x*pos.x);
                            
                                    // calculating max distance along the angle from the origin to end of screen
                            
                                    float p = max(abs(cos(angle)), abs(sin(angle)));
                                    // float maxDistAlongAngle = 0.5/p;
                            
                                    // above 2 lines equivalent to:
                                    float x = cos(angle) / p;
                                    float y = sin(angle) / p;
                                    float maxDistAlongAngle = sqrt(x*x + y*y);
                            
                                    // just setting x,y to gl_Position.xy results in oval shape. What we're doing is extruding to 3d.
                                    x = cos(angle) * dist / maxDistAlongAngle;
                                    y = sin(angle) * dist / maxDistAlongAngle;
                                    float z = dist / maxDistAlongAngle;
                            
                                    float a = 2.;
                                    float b = 3.14/4.;
                            
                                    float sa = sin(a);
                                    float sb = sin(b);
                                    float ca = cos(a);
                                    float cb = cos(b);
                            
                                    float coneX = x * ca - y * sa;
                                    float coneY = (x * sa + y * ca) * sb - z * cb;
                            
                                    float t = uTime;
                            
                                    gl_Position = pos;
                                    gl_Position.x = coneX * t + pos.x * (1.-t);
                                    gl_Position.y = coneY * t + pos.y * (1.-t) + .5;
                                
                                    // texture coordinate is just pos but within 0-1 instead of -1 to 1.
                                    // So scale in that range.
                                    vTextureCoord = (pos.xy+1.)*0.5;
                                }`,
                                `#version 300 es
                                in highp vec2 vTextureCoord;
                                
                                out highp vec4 outColor;
                                
                                uniform sampler2D uSampler;
                                
                                void main()
                                {
                                    // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);
                                    outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);
                            }`,
                            /*uniformNames*/['uTime'],
                            /*uniformLambdas*/[()=>{
                                if(firstRenderTime === undefined) firstRenderTime = 0;
                                else firstRenderTime++;
                                return Math.max(0,Math.min(1, (firstRenderTime) / 42));
                            }]);
                            // swapping our webglcanvas 
                            const c = document.getElementById('webglplaceholder');
                            const f = c.firstChild;
                            f.remove();
                            c.appendChild(f);

                            // let hasRefreshed = false;
                            // const centerX = 3100;
                            // const centerY = 3000;
                            // const rx = 1200;
                            // const ry = 700;
                            // for(let a = 0; a < 8; a++){
                            //     const angleOffset = Math.PI * 2 * ((a%4)/4);
                            //     const sign = (a < 4) ? 1 : -1;
                            //     C(0,[],[3],{x:0,y:0,r:100,cr:(o)=>{
                            //         ctx.globalAlpha = 1;
                            //         ctx.fillStyle = `hsl(${window.time/12},50%,50%)`;
                            //         ctx.shadowColor = ctx.fillStyle;
                            //         ctx.shadowBlur = 15;
                            //         ctx.beginPath();
                            //         ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                            //         ctx.fill();
                            //         ctx.closePath();
                            //         ctx.shadowBlur = 0;

                            //         if(Math.random() < 0.01) console.log(o.pos.x, o.pos.y, o.sat.r);
                            //     },ef:()=>{
                            //         if(hasRefreshed === true) return;
                            //         hasRefreshed = true;
                            //         localStorage.setItem('tutorialCompleted', 't');
                            //         location.replace(location.origin + '/create');
                            //     },sf:(o)=>{
                            //         const angle = angleOffset + window.time * 0.0026 * sign;
                            //         o.pos.x = centerX + Math.cos(angle) * rx;
                            //         o.pos.y = centerY + Math.sin(angle) * ry;
                            //     }})
                            // }

                            // // feel the flame
                            // // taste the edge
                            // // feed the X
                            // // darkness hold

                            // // texts
                            // {
                            //     const rx = 560;
                            //     const ry = 560;
                            //     const rotateSpeed = 0.00043 * 2.5;
                            //     C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Taste the edge.",sf:(o)=>{
                            //         const angle = window.time * rotateSpeed + Math.PI*3/2;
                            //         o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                            //         o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            //     }})
                            //     C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Feed The X.",sf:(o)=>{
                            //         const angle = window.time * rotateSpeed * -1 + Math.PI;
                            //         o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                            //         o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            //     }})
                            //     C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Feel the flame.",sf:(o)=>{
                            //         const angle = window.time * rotateSpeed + Math.PI/2;
                            //         o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                            //         o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            //     }})
                            //     C(3,[],[20],{hex:'#ffffff',alpha:1,x:0,y:0,fontSize:48,text:"Darkness Hold.",sf:(o)=>{
                            //         const angle = window.time * rotateSpeed * -1;
                            //         o.pos.x = centerX + Math.cos(angle) * rx - o.dimensions.x/2;
                            //         o.pos.y = centerY + Math.sin(angle) * ry - o.dimensions.y/2;
                            //     }})
                            // }
                            // safe in the middle
                            // C(1,[],[11],{x:3100,y:3000,r:100});
                        })();

                        // canvas2.remove();
                        // window.resizeFns = window.resizeFns.filter(f => f !== canvas2resize);
                            
                        // init nonlinear transform
                    }
                    renderer.domElement.style.opacity = opaq;
                }

                if(state === 'fadeIn'){
                    c.globalAlpha = interpolateBetween(0, 1, stateStartTime, stateEndTime);
                } else if(state === 'fadeOut'){
                    c.globalAlpha = interpolateBetween(1, 0, stateStartTime, stateEndTime);
                }
                if(curText === 5) {c.globalAlpha = ctx.globalAlpha = Math.random();c.globalAlpha}
                c.fillText(texts[curText], canvas2.w/2, canvas2.h/2);

                c.globalAlpha = 1;
            // } else if(animState === 'entrance') {
            //     const startTime = 0;
            //     const moveInTime = 100;
            //     const textFadeOutTime = 250;
            //     const expandBGTime = 450;
            //     const zoomCameraTime = 550;
            //     const canvasFadeOutTime = 700;

            //     const r = 50;
            //     const tileW = interpolateBetween(300,Math.max(w,h)*2,textFadeOutTime,expandBGTime);
            //     const t1 = c.getTransform();

            //     let px = interpolateBetween(-tileW/2, w/2, startTime, moveInTime);
            
            //     const scale = interpolateBetween(1.5, 0.5, expandBGTime, zoomCameraTime);
            
            //     c.translate(w/2, h/2);
            //     c.scale(scale, scale);
            //     c.translate(-w/2,-h/2);
            
            //     // tiles
            //     renderTiles(px - tileW/2, h/2 - tileW/2, tileW, tileW, tileW/2, 0);
            
            //     // player
            //     c.fillStyle = 'black';
            //     c.beginPath();
            //     c.arc(px+playerX,h/2+playerY,r,0,Math.PI * 2);
            //     c.fill();
            //     c.closePath();

            //     // text
            //     c.shadowBlur = 10;
            //     c.shadowColor = 'white';
            //     c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
            //     c.fillStyle = 'white';
            //     c.textAlign = 'center';
            //     c.textBaseline = 'bottom';
            //     if(animT < moveInTime) c.globalAlpha = interpolateBetween(0, 1, startTime, moveInTime);
            //     else c.globalAlpha = Math.min(1,interpolateBetween(3, 0, moveInTime, textFadeOutTime));
                
            //     c.fillText("You are a circle, moving on an infinite grid.", px, h/2 - tileW * 0.55);

            //     c.shadowBlur = 0;
            //     c.globalAlpha = 1;

            //     c.setTransform(t1);

            //     if(animT > zoomCameraTime){
            //         // if(window.input.up || window.input.down || window.input.left || window.input.right) movedAround = true;

            //         // movePlayer();
            //         canvas2.style.opacity = interpolateBetween(1, 0, zoomCameraTime, canvasFadeOutTime);
            //         window.render = oldRender;
            //         if(animT > canvasFadeOutTime){
            //             canvas2.remove();
            //             obsAnimatingTutorial.cr = () => {};
            //             window.resizeFns = window.resizeFns.filter(f => f !== canvas2resize);
            //         }

            //         if(!removedRendererDOMel){
            //             renderer.domElement.remove();
            //             removedRendererDOMel = true;
            //         }
            //         return;
            //     }

            //     // if(movedAround === true && animT > wasdToMoveAroundTime){
            //     //     animState = 'teleport';
            //     //     playerX += px;
            //     //     playerY += h/2;
            //     //     animT = 0;
            //     //     return;
            //     // }
            // }
        }

        // else if(animState === 'teleport'){
        //     const WASDFadeOutTime = 100;

        //     // tps in, no text. Once the player touches one they move onto the next part.

        //     const r = 50;
        //     const tileW = Math.max(w,h)*2;
        //     const t1 = c.getTransform();

        //     let px = w/2;
        
        //     const scale = 0.5;
        
        //     c.translate(w/2, h/2);
        //     c.scale(scale, scale);
        //     c.translate(-w/2,-h/2);
        
        //     // tiles
        //     renderTiles(px - tileW/2, h/2 - tileW/2, tileW, tileW, tileW/2, 0);
        
        //     // player
        //     c.fillStyle = 'black';
        //     c.beginPath();
        //     c.arc(playerX,playerY,r,0,Math.PI * 2);
        //     c.fill();
        //     c.closePath();

        //     // text
        //     c.shadowBlur = 10;
        //     c.shadowColor = 'white';
        //     c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
        //     c.fillStyle = 'white';
        //     c.textAlign = 'center';
        //     c.textBaseline = 'bottom';

        //     c.globalAlpha = interpolateBetween(1, 0, 0, WASDFadeOutTime);

        //     c.fillText("WASD or arrow keys to move around, try it!", px, h/2 - r * 1.5);

        //     c.shadowBlur = 0;
        //     c.globalAlpha = 1;

        //     if(tps === undefined){
        //         let mx = Math.max(w,h) * 1.2;
        //         tps = [
        //             {
        //                 angle: 0,
        //                 r: mx
        //             },
        //             {
        //                 angle: Math.PI/2,
        //                 r: mx
        //             },
        //             {
        //                 angle: Math.PI,
        //                 r: mx
        //             },
        //             {
        //                 angle: Math.PI*3/2,
        //                 r: mx
        //             }
        //         ];
        //     }
        //     let mn = Math.min(w,h) * 0.4;

        //     // tp simulation, collision, and rendering.
        //     for(let i = 0; i < tps.length; i++){
        //         const tp = tps[i];

        //         tp.angle += 1 / 60;
        //         // approximation of dt consistency of course
        //         tp.r = interpolate(tp.r, mn, 1 / 60);

                
        //         const x = w/2 + Math.cos(tp.angle) * tp.r;
        //         const y = h/2 + Math.sin(tp.angle) * tp.r;

        //         c.fillStyle = 'green';
        //         c.beginPath();
        //         c.arc(x,y,68*3,0,Math.PI * 2);
        //         c.fill();
        //         c.closePath();

        //         const dist = Math.sqrt((x - playerX)**2 + (y - playerY)**2);
        //         if(dist < r + 68*3){
        //             animState = 'teleport';
        //             animT = 0;
        //             return;
        //         }
        //     }

        //     c.fillStyle = 'black';
        //     c.beginPath();
        //     c.arc(playerX,playerY,r,0,Math.PI * 2);
        //     c.fill();
        //     c.closePath();

        //     c.setTransform(t1);

        //     movePlayer();

        //     // circle cut anim out (zooms into the player and tp) into networked area. Obstacle explanation animation then that gets transitioned away revealing the networked map w/ obstacles. [this is when you should join the game in netcode].
        //     // do the 4 doors and get the cp inspired by color game and then cone unexpected, where you have to find the winpad (might be best to have camera fixed on winpad so that it appears at the top of the cone, camera rotates to keep up with the player).
        //     // Once you find winpad, page reloads and you drop into the main hub
        // }

        const tileSize = 100;
        function renderTiles(x0,y0,w,h,offset=0,offsetX=0){
            // c.fillStyle = window.defaultColors.background;
            // c.strokeStyle = window.defaultColors.tile;
            c.fillStyle='#383838'; c.strokeStyle='#0d0d0d';
            c.save();
            c.beginPath();
            c.rect(x0,y0,w,h);
            c.fill();
            c.clip();
            c.closePath();
        
            const o = (offset % tileSize) - tileSize;
            const ox = (offsetX % tileSize) - tileSize;
        
            c.lineWidth = 2;
            c.globalAlpha = 0.6;
            for(let x = x0+o+ox; x <= w+x0+c.lineWidth; x+=tileSize){
                c.beginPath();
                c.moveTo(x, y0);
                c.lineTo(x, y0+h);
                c.stroke();
                c.closePath();
            }
        
            for(let y = y0+o; y <= h+y0+c.lineWidth; y+=tileSize){
                c.beginPath();
                c.moveTo(x0, y);
                c.lineTo(x0 + w, y);
                c.stroke();
                c.closePath();
            }
            c.globalAlpha = 1;
        
            c.restore();
        }

        let renderCanvas2anim;

        if(isSecond === false){
            function smoothstep(t){
                return t * t * (1-t) + (1 - (1 - t) * (1 - t)) * t;
            }

            c.lineCap = 'round';
            
            const w = canvas2.w;
            const h = canvas2.h;
            
            // global animation timer
            let t = 50;

            let interpolateBetween = (startPos, endPos, startT, endT) => {
                if(t < startT) return startPos;
                else if(t > endT) return endPos;
            
                const ratio = (t - startT) / (endT - startT);

                function smoothstep(t){
                    return t * t * (1-t) + (1 - (1 - t) * (1 - t)) * t;
                }
            
                return interpolate(startPos, endPos, smoothstep(ratio));
            }
            
            const timings = [
                // [duration, 'name']
                [0,'start'],
                [100,'moveIn'],
                [30,'wait0'],
                [100,'nameFade'],
                [100,'expandBG'],
                [100,'zoomCamera'],
                [100,'obsIn'],
                [10,'wait1'],
                [100,'blurAndObsCenter'],
                [10,'wait2'],
                [100,'obsMove'],
                [150,'effect'],
                [30,'wait3'],
                [100,'canvasFadeOut'],
            ]
            
            // we accumulate these so that we get absolute times
            for(let i = 1; i < timings.length; i++){
                timings[i][0] += timings[i-1][0];
            }
            
            // put them into an object
            const ts = {};
            
            for(let i = 0; i < timings.length; i++){
                ts[timings[i][1]] = timings[i][0];
            }
            
            let px, vx, ax, gx, addOff=0;
            px=vx=ax=gx=0;
            let wScale, hScale;
            renderCanvas2anim = () => {
                if(t < ts.wait3){
                    players[selfId].pos.x = 9600;
                    players[selfId].pos.y = 3100;
                }
                // c.fillStyle = blendColor('#2c3036', '#000000', 0.62);
                // c.fillRect(0,0,w,h);
                c.clearRect(0,0,w,h);

                wScale = w / 1920;
                hScale = h / 1080;
            
                const r = 50;
                const tileW = interpolateBetween(300,Math.max(w,h),ts.nameFade,ts.expandBG);
                const t1 = c.getTransform();

                c.scale(wScale, hScale);
            
                addOff = 0;
                if(t > ts.obsMove) {
                    ax=0.43+gx;
            
                    vx+=ax;
                    px += vx * 16.66;
                    if(px > 1338.5 - r){
                        px = 1338.5-r;
                        gx = -1;
                    }
                    vx *= 0.4
                    gx *= 0.98;
            
                    c.translate(w/2-px,0);
                    addOff = w/2-px;
                }
                else px = interpolateBetween(-tileW/2, w/2, ts.start, ts.moveIn);
            
                const scale = interpolateBetween(3, 1, ts.expandBG, ts.zoomCamera);
            
                c.translate(w/2, h/2);
                c.scale(scale, scale);
                c.translate(-w/2,-h/2);
            
                // tiles
                renderTiles(px - tileW/2, h/2 - tileW/2, tileW, tileW, tileW/2, addOff);
            
                // player
                c.fillStyle = 'black';
                c.beginPath();
                c.arc(px,h/2,r,0,Math.PI * 2);
                c.fill();
                c.closePath();
            
                // player nanme
                c.fillStyle = 'white';
                c.font = `${15 * ((Math.abs(50) + 0.5) / 25)}px Inter`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';

                // preventing artifacting
                if(t > ts.zoomCamera){
                    // canvas2.style.opacity = "0";
                    if(renderer.domElement !== undefined)renderer.domElement.style.opacity = 0;
                }
            
                c.globalAlpha = interpolateBetween(0, 1, ts.wait0, ts.nameFade) * interpolateBetween(1, 0, ts.expandBG, ts.zoomCamera);
                c.shadowBlur = 10;
                c.shadowColor = 'white';
                c.fillText("This is you.", px, h/2 + 50 + 50/3 + 3);
                c.globalAlpha = 1;
                c.shadowBlur = 0;
            
                c.setTransform(t1);
            
                const t2 = c.getTransform();
            
                // obstacles
                c.translate(2,2);
                let oldS = smoothstep;
                smoothstep = smootherStep;
                if(t > ts.obsMove){
                    for(let i = 0; i < effectObstacleRenders.length; i++) {
                        effectObstacleRenders[i]();
                    }
                }
                else if(t > ts.wait2){
                    for(let i = 0; i < simulateObstacleRenders.length; i++) {
                        simulateObstacleRenders[i]();
                    }
                }
                else if(t > ts.wait1){
                    for(let i = 0; i < shapeObstacleRenders.length; i++) {
                        shapeObstacleRenders[i]();
                    }
                } else {
                    for(let i = 0; i < obstacleRenders.length; i++) {
                        obstacleRenders[i]();
                    }
                }

                // other texts
                c.fillStyle = 'white';
                if(t > ts.zoomCamera && t < ts.obsIn){
                    c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
                    c.globalAlpha = Math.min(1,interpolateBetween(0, 4, ts.zoomCamera, ts.obsIn)) * Math.min(1,interpolateBetween(4, 0, ts.zoomCamera, ts.obsIn));
                    c.shadowBlur = 10;
                    c.shadowColor = 'white';
                    c.fillText("Everything is made out of obstacles.", w/2, /*50 + 50/3*/ h/4);
                    c.globalAlpha = 1;
                    c.shadowBlur = 0;
                } else if(t > ts.wait1 && t < ts.blurAndObsCenter){
                    c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
                    c.globalAlpha = Math.min(1,interpolateBetween(0, 4, ts.wait1, ts.blurAndObsCenter)) * Math.min(1,interpolateBetween(4, 0, ts.wait1, ts.blurAndObsCenter));
                    c.shadowBlur = 10;
                    c.shadowColor = 'white';
                    c.fillText("Obstacles have a shape,", w/2, h/2);
                    c.globalAlpha = 1;
                    c.shadowBlur = 0;
                }

                smoothstep = oldS;
                c.setTransform(t2);

                if(t > ts.wait3){
                    canvas2.style.opacity = interpolateBetween(1, 0, ts.wait3, ts.canvasFadeOut);
                    window.render = oldRender;
                    if(t > ts.canvasFadeOut){
                        canvas2.remove();
                        obsAnimatingTutorial.cr = () => {};
                        window.resizeFns = window.resizeFns.filter(f => f !== canvas2resize);
                    }

                    if(!removedRendererDOMel){
                        renderer.domElement.remove();
                        removedRendererDOMel = true;
                        window.resizeFns = window.resizeFns.filter(f => f !== webglResize);

                        for(let i = 0; i < obsArr.length; i++){
                            eval(obsArr[i]);
                        }
                        eval(str);

                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].rotateSpeed !== undefined){
                                obstacles[i].rotateSpeed *= 1000 / 60;
                            }
                            if(obstacles[i].startSliceAngleRotateSpeed !== undefined){
                                obstacles[i].startSliceAngleRotateSpeed *= 1000 / 60;
                                obstacles[i].endSliceAngleRotateSpeed *= 1000 / 60;
                            }
                            if(obstacles[i].path !== undefined){
                                for(let j = 0; j < obstacles[i].path.length; j++){
                                    obstacles[i].path[j][2] *= 1000 / 60
                                }
                            }
                        }
                        
                        // tutorial text obs. Two texts fade:
                        // top: "Welcome. WASD or Arrow Keys to move" 9600 2800
                        // bottom: "Collect the four crystals on the sides of the map to continue." 9600 3400
                        // after bottom fades in, crystals fly in from the edge of the screen (screen pos) to near the diamond (world pos) and then fly to their respective places again.

                        let textAlphaMult = 1;
                        let playedSecond = false;
                        {
                            const interpolate = (s,e,t) => {return (1-t)*s+e*t};
                            function smootherStep(t){
                                return t * t * t * (t * (t * 6. - 15.) + 10.);
                            }
                            
                            C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
                                if(justStarted === true){
                                    justStarted = false;
                                }
                                ctx.fillStyle = 'white';
                                ctx.shadowBlur = 10;
                                ctx.shadowColor = 'white';
                                ctx.textAlign = 'center';
                                ctx.textBasline = 'middle';

                                if(mainSafeCollided === true) textAlphaMult = interpolate(textAlphaMult, 1, 0.05 * dt/16.66);
                                else {textAlphaMult = interpolate(textAlphaMult, 0, 0.1 * dt/16.66);}

                                ctx.globalAlpha = Math.min(1,Math.max(0,pt-800) / 800) * textAlphaMult;
                                ctx.fillText("Welcome. WASD or Arrow Keys to move.",9600,2800);

                                ctx.globalAlpha = Math.min(1,Math.max(0,pt-3000) / 800) * textAlphaMult;
                                ctx.fillText("Collect the four crystals to continue.",9600,3400);
                                ctx.shadowBlur = 0;
                                ctx.globalAlpha = 1;

                                if(mainSafeCollided === true){
                                    if(pt > 3000 + 1600 + 2400 && pt < 3000 + 1600 + 2400 + 1600){
                                        crystalOffset = interpolate(1175,0, smootherStep((pt-(3000 + 1600 + 2400)) / 1600));
                                    }
                                    else if(pt > 3000 + 1600 && pt < 3000 + 1600 + 2400){
                                        crystalOffset = 1175;
                                    }
                                    else if(pt > 2800 && pt < 3000 + 1600){
                                        crystalOffset = interpolate(0,1175, Math.min(1,smootherStep((pt-2800) / 1600)));
                                    } else {
                                        crystalOffset = 0;
                                    }
                        
                                    if(pt > 4600 && pt < 5200 + 1800){
                                        crystalRotation = interpolate(0, Math.PI * 2, Math.min(1, smootherStep((pt-4600)/2300)));
                                    } else {
                                        crystalRotation = 0;
                                    }
                                } else {
                                    if(crystalRotation > Math.PI) crystalRotation = interpolate(crystalRotation, Math.PI*2, dt/16.66 * 0.03);
                                    else crystalRotation = interpolate(crystalRotation, 0, dt/16.66 * 0.023);
                                    crystalOffset = interpolate(crystalOffset, 0, dt/16.66 * 0.023);
                                    pt = Infinity;
                                }

                                ctx.globalAlpha = 1;
                                // 1500 2100 | 4700 3900
                                // 3100 3000
                                if(window.numGemsCollected === 4){
                                    const p = window.players[window.selfId];

                                    if(releasePlayer === false){
                                        p.pos.x = 3100;
                                        p.pos.y = 3000;
                                    }
                                    
                                    if(playedSecond === false){
                                        playedSecond = true;
                                        isSecond = true;
                                        initCanvases();
                                    }
                                    // "Good job!" 
                                    // "Now, you're almost ready to be released into the wide world of Evades X."
                                    // "But before I let you in, I want to warn you."
                                    // "Evades X is a game where anything is possible."
                                    // "So the only thing you should expect..."
                                    // "is the unexpected." [oval, winpad at edges that you have to reach]
                                }
                            },sf:()=>{pt += dt;}})
                        }
                    }
                }
            
                t++;
            }
            
            const tileSize = 100;
            function renderTiles(x0,y0,w,h,offset=0,offsetX=0){
                c.fillStyle = window.defaultColors.background;
                c.strokeStyle = window.defaultColors.tile;
                c.save();
                c.beginPath();
                c.rect(x0,y0,w,h);
                c.fill();
                c.clip();
                c.closePath();
            
                const o = (offset % tileSize) - tileSize;
                const ox = (offsetX % tileSize) - tileSize;
            
                c.lineWidth = 2;
                c.globalAlpha = 0.6;
                for(let x = x0+o+ox; x <= w+x0+c.lineWidth; x+=tileSize){
                    c.beginPath();
                    c.moveTo(x, y0);
                    c.lineTo(x, y0+h);
                    c.stroke();
                    c.closePath();
                }
            
                for(let y = y0+o; y <= h+y0+c.lineWidth; y+=tileSize){
                    c.beginPath();
                    c.moveTo(x0, y);
                    c.lineTo(x0 + w, y);
                    c.stroke();
                    c.closePath();
                }
                c.globalAlpha = 1;
            
                c.restore();
            }
            
            const obstacleRenders = [
                // ts.zoomCamera - ts.obsIn
                () => {
                    c.fillStyle = 'red';
                    c.strokeStyle = 3;
                    c.strokeStyle = 'black';
            
                    const x = /*window.ovrX || */interpolateBetween(-505, 359, ts.zoomCamera, ts.obsIn);
                    const y = /*window.ovrY || */740;
                    
                    c.save();
                    c.translate(x,y);
            
                    const scale = 0.6;//window.ovrS || 0.5;
            
                    c.beginPath();
                    c.moveTo(0,0);
                    c.lineTo(500*scale,0);
                    c.lineTo(250*scale,200);
                    c.lineTo(0,0);
                    c.fill();
                    c.stroke();
                    c.closePath();
            
                    c.restore();
                },
                () => {
                    c.fillStyle = '#38ab30';
            
                    const r = /*window.ovrR || */100;
                    const x = /*window.ovrX || */659;
                    const y = /*window.ovrY || */interpolateBetween(-r-5, 238, ts.zoomCamera, ts.obsIn);
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();
                },
                () => {
                    c.fillStyle = 'blue';
            
                    const x = /*window.ovrX ||*/ interpolateBetween(1925, 1207, ts.zoomCamera, ts.obsIn);
                    const y = /*window.ovrY ||*/ interpolateBetween(1060, 638, ts.zoomCamera, ts.obsIn);
            
                    c.beginPath();
                    c.fillRect(x,y,200,200);
                    c.closePath();
                },
                // timetrap
                () => {
                    const x = /*window.ovrX || */interpolateBetween(1050, 1411, ts.zoomCamera, ts.obsIn);
                    const y = /*window.ovrY || */interpolateBetween(-300, 195, ts.zoomCamera, ts.obsIn);
                    let middleX = x; let middleY = y;
                    let hexR = /*window.ovrR || */120;
            
                    const hexSides = [];
            
                    for(let i = 0; i < 6; i++){
                        const angle = Math.PI * 2 * i / 6;
            
                        hexSides.push([
                            Math.cos(angle) * hexR,
                            Math.sin(angle) * hexR
                        ])
                    }
            
                    let grd = c.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (hexR*2 + hexR*2)/3));
                    grd.addColorStop(0, "rgba(199,0,0,0)");
                    grd.addColorStop(1, "rgba(199,0,0,1)");
            
                    c.fillStyle = grd;
                    c.globalAlpha = 0.22;
                    
                    c.save();
                    c.translate(middleX, middleY);
                    c.beginPath();
                    c.moveTo(hexSides[0][0], hexSides[0][1]);
                    for(let i = 1; i < hexSides.length; i++){
                        c.lineTo(hexSides[i][0], hexSides[i][1]);
                    }
                    c.fill();
                    c.closePath();
                    c.restore();
                    
                    c.globalAlpha = 1/3;
                    c.fillStyle = 'white';
                    c.font = `${Math.min(hexR*2, hexR*2)/2}px Inter`;
                    c.textAlign = 'center';
                    c.textBaseline = 'middle';
            
                    c.fillText("6", middleX, middleY);
                    c.globalAlpha = 1;
                }
            ]
            
            const sorScaleFac = 7/6;
            const shapeObstacleRenders = [
                // ts.wait1 - ts.blurAndObsCenter
                () => {
                    c.fillStyle = 'red';
                    c.strokeStyle = 3;
                    c.strokeStyle = 'black';
            
                    const scale = interpolateBetween(0.6, sorScaleFac*.6, ts.wait1, ts.blurAndObsCenter);//window.ovrS || 0.5;
            
                    const thisW = 500*scale;
                    const thisH = 200*scale/.6;
            
                    const x = /*window.ovrX || */interpolateBetween(359, w/2-thisW/2, ts.wait1, ts.blurAndObsCenter);
                    const y = /*window.ovrY || */interpolateBetween(740, h/2-thisH/2, ts.wait1, ts.blurAndObsCenter);
                    
                    c.save();
                    c.translate(x,y);
            
                    const ga = interpolateBetween(0, 1, ts.wait1, ts.blurAndObsCenter);;
            
                    c.beginPath();
                    c.moveTo(0,0);
                    c.lineTo(500*scale,0);
                    c.lineTo(250*scale,200*scale/.6);
                    c.lineTo(0,0);
                    c.fill();
                    c.globalAlpha = 1-ga;
                    c.stroke();
                    c.globalAlpha = 1;
                    c.closePath();
            
                    c.globalAlpha = ga;
                    c.fillStyle = window.defaultColors.tile;//'#1f2229'
            
                    c.beginPath();
                    c.moveTo(0,0);
                    c.lineTo(500*scale,0);
                    c.lineTo(250*scale,200*scale/.6);
                    c.lineTo(0,0);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = 1;
            
                    c.restore();
                },
                () => {
                    c.fillStyle = '#38ab30';
            
                    const r = /*window.ovrR || */interpolateBetween(100, 100*sorScaleFac*1.05/**(window.ovrR||1)*/, ts.wait1, ts.blurAndObsCenter);
                    const x = /*window.ovrX || */interpolateBetween(659, 459, ts.wait1, ts.blurAndObsCenter);
                    const y = /*window.ovrY || */interpolateBetween(238, h/2, ts.wait1, ts.blurAndObsCenter);
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = interpolateBetween(0, 1, ts.wait1, ts.blurAndObsCenter);
                    c.fillStyle = window.defaultColors.tile;//'#1f2229'
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = 1;
                },
                () => {
                    c.fillStyle = 'blue';
            
                    // 1461 - w/2
            
                    const size = interpolateBetween(200, 200*sorScaleFac, ts.wait1, ts.blurAndObsCenter);
                    const thisH = size;
            
                    const x = /*window.ovrX ||*/ interpolateBetween(1207, 1461-size/2, ts.wait1, ts.blurAndObsCenter);
                    const y = /*window.ovrY ||*/ interpolateBetween(638, h/2-thisH/2, ts.wait1, ts.blurAndObsCenter);
            
                    c.beginPath();
                    c.fillRect(x,y,size,size);
                    c.closePath();
            
                    c.globalAlpha = interpolateBetween(0, 1, ts.wait1, ts.blurAndObsCenter);
                    c.fillStyle = window.defaultColors.tile;//'#1f2229'
            
                    c.beginPath();
                    c.fillRect(x,y,size,size);
                    c.closePath();
            
                    c.globalAlpha = 1;
                },
                // timetrap
                () => {
                    const x = /*window.ovrX || */interpolateBetween(1411, 1050, ts.wait1, ts.blurAndObsCenter);
                    const y = /*window.ovrY || */interpolateBetween(195, -300, ts.wait1, ts.blurAndObsCenter);
                    let middleX = x; let middleY = y;
                    let hexR = /*window.ovrR || */120;
            
                    const hexSides = [];
            
                    for(let i = 0; i < 6; i++){
                        const angle = Math.PI * 2 * i / 6;
            
                        hexSides.push([
                            Math.cos(angle) * hexR,
                            Math.sin(angle) * hexR
                        ])
                    }
            
                    let grd = c.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (hexR*2 + hexR*2)/3));
                    grd.addColorStop(0, "rgba(199,0,0,0)");
                    grd.addColorStop(1, "rgba(199,0,0,1)");
            
                    c.fillStyle = grd;
                    c.globalAlpha = 0.22;
                    
                    c.save();
                    c.translate(middleX, middleY);
                    c.beginPath();
                    c.moveTo(hexSides[0][0], hexSides[0][1]);
                    for(let i = 1; i < hexSides.length; i++){
                        c.lineTo(hexSides[i][0], hexSides[i][1]);
                    }
                    c.fill();
                    c.closePath();
                    c.restore();
                    
                    c.globalAlpha = 1/3;
                    c.fillStyle = 'white';
                    c.font = `${Math.min(hexR*2, hexR*2)/2}px Inter`;
                    c.textAlign = 'center';
                    c.textBaseline = 'middle';
            
                    c.fillText("6", middleX, middleY);
                    c.globalAlpha = 1;
                }
            ]
            
            const simulateObstacleRenders = [
                // ts.wait2 - ts.obsMove
                () => {
                    const scale = interpolateBetween(sorScaleFac*.6, 0, ts.wait2, ts.obsMove);//window.ovrS || 0.5;
            
                    const thisW = 500*scale;
                    const thisH = 200*scale/.6;
            
                    const x = /*window.ovrX || */w/2-thisW/2;
                    const y = /*window.ovrY || */h/2-thisH/2;
                    
                    c.save();
                    c.translate(x,y);
            
                    // const ga = interpolateBetween(1, 0, ts.wait2, ts.obsMove);
            
                    // c.globalAlpha = ga;
                    c.fillStyle = window.defaultColors.tile;//'#1f2229'
            
                    c.beginPath();
                    c.moveTo(0,0);
                    c.lineTo(500*scale,0);
                    c.lineTo(250*scale,200*scale/.6);
                    c.lineTo(0,0);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = 1;
            
                    c.restore();
                },
                () => {
                    c.fillStyle = window.defaultColors.tile;
            
                    const completion = interpolateBetween(0,Math.PI,ts.wait2,ts.obsMove);
                    const pathRx = 501;//1920/2-459
                    const pathRy = 320;
            
                    const r = /*window.ovrR || */100*sorScaleFac*1.05;
                    const x = w/2 - Math.cos(completion) * pathRx;
                    const y = h/2 + Math.sin(completion) * pathRy;
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = interpolateBetween(0, 1, interpolate(ts.wait2, ts.obsMove, 0.6), ts.obsMove);
                    c.fillStyle = 'blue';
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();
            
                    c.globalAlpha = 1;

                    c.fillStyle = 'white';
                    c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
                    c.globalAlpha = Math.min(1,interpolateBetween(0, 4, ts.wait2, ts.obsMove)) * Math.min(1,interpolateBetween(4, 0, ts.wait2, ts.obsMove));
                    c.shadowBlur = 10;
                    c.shadowColor = 'white';
                    c.fillText("simulate,", x, y - r - 50 - 50/3);
                    c.globalAlpha = 1;
                    c.shadowBlur = 0;
                },
                () => {
                    c.fillStyle = window.defaultColors.tile;
            
                    // 1461 - w/2
            
                    const size = interpolateBetween(200*sorScaleFac, 0, ts.wait2, ts.obsMove);
                    const thisH = size;
            
                    const x = /*window.ovrX ||*/ 1461-size/2;
                    const y = /*window.ovrY ||*/ h/2-thisH/2;
            
                    c.beginPath();
                    c.fillRect(x,y,size,size);
                    c.closePath();
            
                    c.globalAlpha = 1;
                },
            ]
            
            const effectObstacleRenders = [
                () => {
                    c.fillStyle = 'blue';
            
                    const r = /*window.ovrR || */100*sorScaleFac*1.05;
                    const x = 1461 + addOff;
                    const y = h/2;
            
                    c.beginPath();
                    c.arc(x,y,r, 0, Math.PI * 2);
                    c.fill();
                    c.closePath();

                    c.shadowColor = 'blue';
                    c.font = `${Math.min(canvas2.w,canvas2.h)*0.05}px Inter`;
                    c.globalAlpha = Math.min(1,interpolateBetween(0, 4, ts.obsMove, ts.effect)) //* Math.min(1,interpolateBetween(4, 0, ts.obsMove, ts.effect));
                    c.shadowBlur = 10;
                    c.fillText("and effect.", x, y - r - 50/3 - 50);
                    c.globalAlpha = 1;
                    c.shadowBlur = 0;
                },
            ]
        }

        // function term(d,f){
        //     return (1 - Math.exp(f*d)) / (Math.exp(f*d) * d);
        // }

        // let xv,yv,xa,ya,fac;
        // xv=yv=xa=ya=0;
        // function movePlayer(){
        //     fac = term(dt, -0.91629073187 / 16.66);
        //     xa = (input.right - input.left) * .717;
        //     ya = (input.down - input.up) * .717;

        //     if(input.shift === true) {
        //         xa *= 0.5;
        //         ya *= 0.5;
        //     }

        //     xv += xa * dt;
        //     yv += ya * dt;

        //     xv *= Math.exp(-0.91629073187 / 16.66 * dt);
        //     yv *= Math.exp(-0.91629073187 / 16.66 * dt);

        //     playerX += xv * dt * fac;
        //     playerY += yv * dt * fac;
        // }

        // Welcome, Traveler.
        // Welcome To Evades X.

        // You are a circle, moving on an infinite grid.
        
        // in anim move to tp w/ text Move here /n to continue /n v (centered, sine wave up and down oscill)

        // [wasd to move, go into a tp]

        // Now this is an obstacle.
        // obstacles can have a shape, simulate, and effect.

        // Good luck :)

        // rendering loop
        
        C(0,[],[0],{x:-1000,y:0,r:10,cr:(e)=>{
            let now = performance.now();
            dt = now - lastTime;
            lastTime = now;
            const nextCameraPos = nextCameraPosQueue.shift();
            // console.log(nextCameraPos);
            camera.position.set(nextCameraPos.x, nextCameraPos.y, nextCameraPos.z);
            nextCameraPosQueue.push(cameraPos(t));
            t += timeScale * dt * 60 / 1000;
            animT += timeScale * dt * 60;
            renderer.domElement.style.opacity = animState === 'welcome' ? Math.min(1, animT / 100) : 1;
            renderCanvas2();

            if(removedRendererDOMel) return;
            
            let lastRotation = camera.rotation.clone();
            camera.lookAt(nextCameraPosQueue.last());
            camera.rotation.x = interpolateDirection(lastRotation.x, camera.rotation.x, 0.006);
            camera.rotation.y = interpolateDirection(lastRotation.y, camera.rotation.y, 0.006);
            camera.rotation.z = interpolateDirection(lastRotation.z, camera.rotation.z, 0.006);
        
            camera.rotation.x = -Math.PI / 2;
            camera.rotation.y = Math.PI-Math.atan2(camera.position.y, camera.position.x);
            camera.rotation.z = Math.PI / 2;
            
            renderer.render( scene, camera );
        }})
        const obsAnimatingTutorial = obstacles[obstacles.length-1];
    }
    initCanvases();
}

// for(let i = 0; i < obsArr.length; i++){
//     eval(obsArr[i]);
// }
// eval(str);

}

mapDimensions.x=20000;
mapDimensions.y=6000;

spawnPosition.x=4800*2;
spawnPosition.y=1550*2;
window.respawnPlayer();
colors.background='#383838'; colors.tile='#0d0d0d';

// physical time - for physical time in the arena
var pt = 0;
var crystalOffset = 0;
var crystalRotation = 0;
var releasePlayer = false;
var justStarted = true;

var musicObs;
if(window.isServer !== true){
    // npc (should render above)
    {let fadeState = -1;
    let lastInside = false;
    const texts=["Why hello there!", "I am an npc", "Please help me i am continually assaulted by this rotating text this is not ok please i've been stuck here for 42 years"];
    let alpha = 0;
    let canAdvance = false;
    let curText = 0;// if you're looking at this later to implement npcs, there are better names for the variables (dialogue, isFading, etc.) and a better system.
    C(0,[],[0],{
        x: 8700, y: 1900, r: 50,
        cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = 'black';
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
    
            const p = window.players[window.selfId];
            const dist = Math.sqrt((o.pos.y - p.pos.y) ** 2 + (o.pos.x - p.pos.x) ** 2);
    
            ctx.fillStyle = 'white';
            ctx.font = '40px "Inter"';
    
            const inside = dist < 400;
    
            if(inside === true && lastInside === false){
                fadeState = 1;
                canAdvance = true;
            } else if(inside === false && lastInside === true){
                fadeState = -1; 
            }
    
            alpha += 0.05 * dt / 16.66 * fadeState;
    
            if(alpha > 1) alpha = 1;
            if(alpha < 0) {alpha = 0; if(canAdvance === true) {canAdvance = false; curText = (curText+1)%texts.length;}}
    
            ctx.globalAlpha = alpha;
    
            ctx.fillText(
                texts[curText],
                o.pos.x,
                o.pos.y - o.sat.r*3/2
            );
    
            ctx.globalAlpha = 1;
            lastInside = inside;
        }
    })}

    // music
    C(1,[],[26],{x:0,y:0,w:1E6,h:1E6,musicPath:'https://www.youtube.com/watch?v=dHID5Yv-Z0s'});
    musicObs = obstacles[obstacles.length-1];
}