(async()=>{

if(window.isServer !== true) await import('/maps/_converter.js');
else require('./_converter.js');
{
    let counter = 1000;

    console.log('xd');

    const obs = [
        {
            "x": 20400,
            "y": 1100,
            "w": 100,
            "h": 500,
            "type": "grav",
            "force": 15000,
            "dir": {
                "x": 0,
                "y": -15000
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 19500,
            "y": 800,
            "w": 750,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13300,
            "y": 50,
            "w": 1500,
            "h": 50,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 5000,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 14800,
            "y": 50,
            "w": 250,
            "h": 250,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=2ACyqve0L78",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 14600,
            "y": 50,
            "w": 200,
            "h": 50,
            "type": "color",
            "bgColor": "#4f2222",
            "tileColor": "#a34d4d",
            "inView": true
        },
        {
            "x": 11350,
            "y": -325,
            "w": 50,
            "h": 2150,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=2ACyqve0L78",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 11150,
            "y": -150,
            "w": 50,
            "h": 1925,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=yJPewKpHDsQ",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 8750,
            "y": 800,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 8775,
                "y": 825
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 12800,
            "y": 500,
            "w": 125,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 501,
            "y": 875,
            "w": 50,
            "h": 75,
            "color": "#bd0000",
            "type": "block",
            "inView": true
        },
        {
            "x": 550,
            "y": 850,
            "w": 25,
            "h": 100,
            "color": "#bd0000",
            "type": "block",
            "inView": true
        },
        {
            "x": 575,
            "y": 900,
            "w": 50,
            "h": 50,
            "color": "#bd0000",
            "type": "block",
            "inView": true
        },
        {
            "x": 11800,
            "y": 1550,
            "w": 450,
            "h": 50,
            "type": "speed",
            "speedInc": 0.25,
            "inView": true
        },
        {
            "x": 11575,
            "y": 1325,
            "w": 200,
            "h": 25,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 11575,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 100.77822185373186,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11575,
            "y": 1325,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": -959.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 11575,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11400,
            "y": 1300,
            "w": 175,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11575,
            "y": 1325,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": true
        },
        {
            "x": 12100,
            "y": 1475,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 1500,
            "w": 11650,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10850,
            "y": 1525,
            "w": 250,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10500,
            "y": 1075,
            "w": 300,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 10500,
            "pivotY": 1075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 152.0690632574555,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12450,
            "y": 450,
            "w": 100,
            "h": 350,
            "spawn": {
                "x": 12500,
                "y": 625
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 10850,
            "y": 550,
            "w": 250,
            "h": 250,
            "type": "trans",
            "collide": false,
            "opaq": 0.2,
            "inView": true
        },
        {
            "x": 10850,
            "y": 550,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10725,
            "y": -25,
            "w": 450,
            "h": 450,
            "type": "vinette",
            "ir": 0.3,
            "or": 0.7,
            "o": 0.9,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": true
        },
        {
            "x": 10725,
            "y": -25,
            "w": 450,
            "h": 450,
            "type": "timetrap",
            "time": 0,
            "maxTime": 8,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "points": [
                [
                    10900,
                    200
                ],
                [
                    10860,
                    340
                ],
                [
                    10850,
                    350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10850,
                "right": 10900,
                "top": 200,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    10900,
                    200
                ],
                [
                    10950,
                    200
                ],
                [
                    10925,
                    250
                ],
                [
                    10875,
                    275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10875,
                "right": 10950,
                "top": 200,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 9950,
            "y": 575,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 250,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11425,
            "y": 175,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11450,
            "y": 200,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11500,
            "y": 75,
            "w": 25,
            "h": 43.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11575,
            "y": 175,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11525,
            "y": 75,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11625,
            "y": 0,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11600,
            "y": 175,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11725,
            "y": 100,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11825,
            "y": 125,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11800,
            "y": 250,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11675,
            "y": 350,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11625,
            "y": 200,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11650,
            "y": 250,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        11650,
                        500
                    ],
                    [
                        11650,
                        550
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        11400,
                        250.00000000000003
                    ],
                    [
                        11350,
                        250.00000000000003
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 11650,
            "y": 250,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 6.283185307179586,
            "startPolygon": {
                "points": [
                    [
                        11650,
                        0
                    ],
                    [
                        11650,
                        -50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        11900,
                        249.99999999999994
                    ],
                    [
                        11950,
                        249.99999999999991
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 12149.345520221432,
            "y": 550.0042836212997,
            "w": 100,
            "h": 50,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 12150,
            "pivotY": 600,
            "distToPivot": 50,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 105.90169943749474,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12193.62480035364,
            "y": 624.4310620748474,
            "w": 100,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1109.2499999999995,
            "rotateSpeed": 90,
            "pivotX": 12150,
            "pivotY": 600,
            "distToPivot": 50,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 105.90169943749474,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12107.029679424928,
            "y": 625.564654303853,
            "w": 100,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1229.2499999999995,
            "rotateSpeed": 90,
            "pivotX": 12150,
            "pivotY": 600,
            "distToPivot": 50,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 105.90169943749474,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11350,
            "y": 0,
            "w": 50,
            "h": 1500,
            "type": "color",
            "bgColor": "#4f2222",
            "tileColor": "#a34d4d",
            "inView": true
        },
        {
            "x": 12044.166666667466,
            "y": 950,
            "w": 50,
            "h": 51,
            "type": "lavamove",
            "points": [
                [
                    11350,
                    950
                ],
                [
                    12050,
                    950
                ]
            ],
            "speed": 700,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11350,
                "y": 950
            },
            "pointTo": {
                "x": 12050,
                "y": 950
            },
            "xv": 700,
            "yv": 0,
            "inView": true
        },
        {
            "x": 11725,
            "y": 598.75,
            "w": 75,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11725,
                    550
                ],
                [
                    11725,
                    600
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11725,
                "y": 550
            },
            "pointTo": {
                "x": 11725,
                "y": 600
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 11725,
            "y": 698.75,
            "w": 75,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11725,
                    650
                ],
                [
                    11725,
                    700
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11725,
                "y": 650
            },
            "pointTo": {
                "x": 11725,
                "y": 700
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 10150,
            "y": -48.75,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10150,
                    0
                ],
                [
                    10150,
                    -50
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10150,
                "y": 0
            },
            "pointTo": {
                "x": 10150,
                "y": -50
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 10325,
            "y": 100,
            "radius": 175,
            "radius2": 50,
            "type": "lava-oval",
            "canCollide": true,
            "renderType": "oval",
            "inView": true
        },
        {
            "x": 10150,
            "y": 100,
            "w": 350,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 0,
            "w": 50,
            "h": 1500,
            "type": "color",
            "bgColor": "#a13636",
            "tileColor": "#dc5050",
            "inView": true
        },
        {
            "x": 10000,
            "y": 0,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 10050,
                "y": 50
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 9875,
            "y": 325,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9625,
            "y": 75,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 8750,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#a15636",
            "tileColor": "#dc8150",
            "inView": true
        },
        {
            "x": 9100,
            "y": 450,
            "w": 200,
            "h": 250,
            "type": "size",
            "size": 22,
            "inView": true
        },
        {
            "x": 8900,
            "y": 700,
            "w": 400,
            "h": 450,
            "type": "size",
            "size": 4,
            "inView": true
        },
        {
            "x": 9075,
            "y": 575,
            "w": 100,
            "h": 25,
            "type": "rotate-lava",
            "angle": 36877.04166666646,
            "rotateSpeed": 3355,
            "pivotX": 9075,
            "pivotY": 575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9100,
            "y": 150,
            "w": 200,
            "h": 300,
            "type": "size",
            "size": 4,
            "inView": true
        },
        {
            "x": 5150,
            "y": 1050,
            "w": 400,
            "h": 450,
            "type": "timetrap",
            "time": 0,
            "maxTime": 8,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 3000,
            "y": 0,
            "w": 200,
            "h": 50,
            "spawn": {
                "x": 3100,
                "y": 25
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 2850,
            "y": 350,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": true
        },
        {
            "x": 2975,
            "y": 525,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": true
        },
        {
            "x": 1300,
            "y": 475,
            "w": 50,
            "h": 75,
            "color": "#c31818",
            "type": "block",
            "inView": true
        },
        {
            "x": 1325,
            "y": 0,
            "w": 75,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1175,
            "y": 175,
            "w": 225,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 150,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 250,
            "y": 0,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 250,
            "y": 250,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 175,
            "y": 350,
            "w": 125,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 200,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 300,
            "w": 25,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 500,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 300,
            "y": 200,
            "w": 50,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 250,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 250,
            "y": 775,
            "r": 150,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 150,
            "inView": true
        },
        {
            "x": 0,
            "y": 525,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 925,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 25,
            "y": 975,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 225,
            "y": 0,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 450,
            "y": 950,
            "w": 175,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 500,
            "y": 650,
            "w": 50,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 475,
            "y": 425,
            "w": 100,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 550,
            "y": 125,
            "w": 25,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 399.16666666664685,
            "y": 250,
            "w": 25,
            "h": 125,
            "type": "lavamove",
            "points": [
                [
                    350,
                    250
                ],
                [
                    525,
                    250
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 350,
                "y": 250
            },
            "pointTo": {
                "x": 525,
                "y": 250
            },
            "xv": 100,
            "yv": 0,
            "inView": true
        },
        {
            "x": 425,
            "y": 100,
            "w": 175,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 300,
            "y": 0,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 500,
            "y": 0,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 700,
            "y": 0,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 650,
            "y": 200,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 575,
            "y": 350,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 750,
            "y": 125,
            "w": 50,
            "h": 375,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 675,
            "y": 550,
            "w": 200,
            "h": 25,
            "type": "rotate-normal",
            "angle": 494.625,
            "rotateSpeed": 45,
            "pivotX": 675,
            "pivotY": 550,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 100.77822185373186,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 775,
            "y": 500,
            "w": 25,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 750,
            "y": 600,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 650,
            "y": 700,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 550,
            "y": 800,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 625,
            "y": 900,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 675,
            "y": 750,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 750,
            "y": 800,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 750,
            "y": 925,
            "w": 50,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 1000,
            "w": 4250,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1000,
            "y": 50,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2000,
            "y": 0,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3000,
            "y": 50,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4000,
            "y": 0,
            "w": 50,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 800,
            "y": 750,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 900,
            "y": 650,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": -659.5,
            "rotateSpeed": -60,
            "pivotX": 900,
            "pivotY": 650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 900,
            "y": 475,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 800,
            "y": 250,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 950,
            "y": 250,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 850,
            "y": 50,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1050,
            "y": 50,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1000,
            "y": 0,
            "w": 25,
            "h": 50,
            "type": "color",
            "bgColor": "#4d8977",
            "tileColor": "#82c4b0",
            "inView": true
        },
        {
            "x": 1175,
            "y": 250,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": true
        },
        {
            "x": 1050,
            "y": 100,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1050,
            "y": 400,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1300,
            "y": 250,
            "w": 50,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1350,
            "y": 425,
            "w": 200,
            "h": 25,
            "type": "rotate-lava",
            "angle": -659.4999999999995,
            "rotateSpeed": -60,
            "pivotX": 1350,
            "pivotY": 425,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 100.77822185373186,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 1450,
            "y": 350,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1150,
            "y": 550,
            "w": 200,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1050,
            "y": 450,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1300,
            "y": 600,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1050,
            "y": 669.4166666667167,
            "w": 125,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1050,
                    600
                ],
                [
                    1050,
                    950
                ]
            ],
            "speed": 70,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 1050,
                "y": 600
            },
            "pointTo": {
                "x": 1050,
                "y": 950
            },
            "xv": 4.2862637970157365e-15,
            "yv": 70,
            "inView": true
        },
        {
            "x": 1175,
            "y": 880.5833333332833,
            "w": 125,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1175,
                    950
                ],
                [
                    1175,
                    600
                ]
            ],
            "speed": 70,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 1175,
                "y": 950
            },
            "pointTo": {
                "x": 1175,
                "y": 600
            },
            "xv": 4.2862637970157365e-15,
            "yv": -70,
            "inView": true
        },
        {
            "x": 1500,
            "y": 500,
            "w": 50,
            "h": 500,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "points": [
                [
                    1350,
                    675
                ],
                [
                    1375,
                    700
                ],
                [
                    1425,
                    825
                ],
                [
                    1350,
                    850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1350,
                "right": 1425,
                "top": 675,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    1450,
                    550
                ],
                [
                    1500,
                    550
                ],
                [
                    1500,
                    725
                ],
                [
                    1450,
                    600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1450,
                "right": 1500,
                "top": 550,
                "bottom": 725
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 1500,
            "y": 200,
            "w": 300,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1475,
            "y": 200,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1400,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1500.833333333389,
            "y": 100,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    1500,
                    0
                ],
                [
                    1600,
                    0
                ],
                [
                    1600,
                    100
                ],
                [
                    1500,
                    100
                ]
            ],
            "speed": 100,
            "currentPoint": 2,
            "collidable": true,
            "pointOn": {
                "x": 1600,
                "y": 100
            },
            "pointTo": {
                "x": 1500,
                "y": 100
            },
            "xv": -100,
            "yv": 1.2246467991473532e-14,
            "inView": true
        },
        {
            "x": 1700,
            "y": 100,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1800,
            "y": 100.8333333333325,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    1800,
                    0
                ],
                [
                    1800,
                    300
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1800,
                "y": 300
            },
            "pointTo": {
                "x": 1800,
                "y": 0
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": true
        },
        {
            "x": 1900,
            "y": 400,
            "w": 100,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1550,
            "y": 600.8333333332893,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1550,
                    500
                ],
                [
                    1550,
                    650
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1550,
                "y": 650
            },
            "pointTo": {
                "x": 1550,
                "y": 500
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": true
        },
        {
            "x": 1750,
            "y": 600,
            "w": 250,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1875,
            "y": 575,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1650,
            "y": 700,
            "w": 350,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1550,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1650,
            "y": 875,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1675,
            "y": 900,
            "w": 75,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1775,
            "y": 800,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1750,
            "y": 925,
            "w": 175,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1900,
            "y": 875,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 1925,
            "y": 975,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#4d6c89",
            "tileColor": "#828dc4",
            "inView": true
        },
        {
            "x": 2050,
            "y": 800,
            "w": 350,
            "h": 200,
            "type": "lava",
            "canCollide": false,
            "inView": true
        },
        {
            "x": 2400,
            "y": 50,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2275,
            "y": 900,
            "w": 50,
            "h": 200,
            "type": "rotatingsafe",
            "angle": -989.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 2275,
            "pivotY": 900,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 103.07764064044152,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2050,
            "y": 700,
            "w": 175,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2325,
            "y": 700,
            "w": 75,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2125,
            "y": 550,
            "w": 275,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2201.25,
            "y": 450,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2050,
                    450
                ],
                [
                    2350,
                    450
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2350,
                "y": 450
            },
            "pointTo": {
                "x": 2050,
                "y": 450
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 2050,
            "y": 350,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2325,
            "y": 350,
            "w": 25,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2200,
            "y": 350,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2225,
            "y": 175,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 2225,
            "pivotY": 175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2050,
            "y": 275,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2050,
            "y": 0,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2225,
            "y": 150,
            "w": 175,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2050,
            "y": 450,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2300,
            "y": 400,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2175,
            "y": 162.5,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2125,
            "y": 0,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2125,
            "y": 325,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2375,
            "y": 200,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2375,
            "y": 100,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2525,
            "y": 225,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 2525,
            "pivotY": 225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2675,
            "y": 75,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": -989.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 2675,
            "pivotY": 75,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2450,
            "y": 0,
            "w": 300,
            "h": 300,
            "type": "size",
            "size": 10,
            "inView": true
        },
        {
            "x": 2750,
            "y": 0,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2650,
            "y": 400,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2650,
            "y": 375,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2450,
            "y": 300,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2550,
            "y": 425,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2601.25,
            "y": 450,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2450,
                    450
                ],
                [
                    2750,
                    450
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2750,
                "y": 450
            },
            "pointTo": {
                "x": 2450,
                "y": 450
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 2598.75,
            "y": 550,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2750,
                    550
                ],
                [
                    2450,
                    550
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2450,
                "y": 550
            },
            "pointTo": {
                "x": 2750,
                "y": 550
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 2800,
            "y": 400,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2601.25,
            "y": 650,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2450,
                    650
                ],
                [
                    2750,
                    650
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2750,
                "y": 650
            },
            "pointTo": {
                "x": 2450,
                "y": 650
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 2598.75,
            "y": 750,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2750,
                    750
                ],
                [
                    2450,
                    750
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2450,
                "y": 750
            },
            "pointTo": {
                "x": 2750,
                "y": 750
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 2601.25,
            "y": 850,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    2450,
                    850
                ],
                [
                    2750,
                    850
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2750,
                "y": 850
            },
            "pointTo": {
                "x": 2450,
                "y": 850
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 2450,
            "y": 950,
            "w": 400,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2800,
            "y": 750,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2475,
            "y": 875,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2800,
            "y": 650,
            "w": 50,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": true
        },
        {
            "x": 2950,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2900,
            "y": 900,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2850,
            "y": 800,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2925,
            "y": 650,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2850,
            "y": 150,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 2925,
            "y": 87.5,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1318.999999999999,
            "rotateSpeed": 120,
            "pivotX": 2925,
            "pivotY": 87.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3050,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 0,
            "w": 100,
            "h": 50,
            "type": "color",
            "bgColor": "#333286",
            "tileColor": "#7351d2",
            "inView": true
        },
        {
            "x": 3200,
            "y": 31,
            "w": 150,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    3200,
                    0
                ],
                [
                    3200,
                    225
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3200,
                "y": 225
            },
            "pointTo": {
                "x": 3200,
                "y": 0
            },
            "xv": 7.34788079488412e-15,
            "yv": -120,
            "inView": true
        },
        {
            "x": 3350,
            "y": 0,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3200,
            "y": 250,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3200,
            "y": 494,
            "w": 150,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    3200,
                    525
                ],
                [
                    3200,
                    300
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3200,
                "y": 300
            },
            "pointTo": {
                "x": 3200,
                "y": 525
            },
            "xv": 7.34788079488412e-15,
            "yv": 120,
            "inView": true
        },
        {
            "x": 3050,
            "y": 400,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3350,
            "y": 400,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3400,
            "y": 250,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3500,
            "y": 300,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3150,
            "y": 550,
            "w": 400,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3250,
            "y": 300,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3250,
            "y": 525,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 100,
            "w": 75,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3125,
            "y": 275,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 375,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3450,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3450,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3475,
            "y": 400,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 450,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3150,
            "y": 600,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 750,
            "w": 200,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3275,
            "y": 675,
            "w": 125,
            "h": 12.5,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 3275,
            "pivotY": 675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 62.81172263200556,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3425,
            "y": 675,
            "w": 125,
            "h": 12.5,
            "type": "rotate-lava",
            "angle": -989.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 3425,
            "pivotY": 675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 62.81172263200556,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3500,
            "y": 650,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3550,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3600,
            "y": 600,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3050,
            "y": 800,
            "w": 500,
            "h": 200,
            "type": "lava",
            "canCollide": false,
            "inView": true
        },
        {
            "x": 3475,
            "y": 900,
            "w": 150,
            "h": 50,
            "type": "rotatingsafe",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 3475,
            "pivotY": 900,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3300,
            "y": 900,
            "w": 150,
            "h": 50,
            "type": "rotatingsafe",
            "angle": -989.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 3300,
            "pivotY": 900,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3125,
            "y": 900,
            "w": 150,
            "h": 50,
            "type": "rotatingsafe",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 3125,
            "pivotY": 900,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3050,
            "y": 875,
            "w": 25,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 3600,
            "y": 900,
            "w": 50,
            "h": 100,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": true
        },
        {
            "x": 3800,
            "y": 50,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3669.4166666668666,
            "y": 750,
            "w": 25,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3650,
                    750
                ],
                [
                    3775,
                    750
                ]
            ],
            "speed": 70,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3650,
                "y": 750
            },
            "pointTo": {
                "x": 3775,
                "y": 750
            },
            "xv": 70,
            "yv": 0,
            "inView": true
        },
        {
            "x": 3755.5833333331334,
            "y": 650,
            "w": 25,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3775,
                    650
                ],
                [
                    3650,
                    650
                ]
            ],
            "speed": 70,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3775,
                "y": 650
            },
            "pointTo": {
                "x": 3650,
                "y": 650
            },
            "xv": -70,
            "yv": 8.572527594031473e-15,
            "inView": true
        },
        {
            "x": 3669.4166666668666,
            "y": 550,
            "w": 25,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3650,
                    550
                ],
                [
                    3775,
                    550
                ]
            ],
            "speed": 70,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3650,
                "y": 550
            },
            "pointTo": {
                "x": 3775,
                "y": 550
            },
            "xv": 70,
            "yv": 0,
            "inView": true
        },
        {
            "x": 3650,
            "y": 450,
            "w": 150,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3750,
            "y": 475,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3550,
            "y": 400,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3675,
            "y": 300,
            "w": 250,
            "h": 100,
            "type": "rotate-lava",
            "angle": -659.4999999999995,
            "rotateSpeed": -60,
            "pivotX": 3675,
            "pivotY": 300,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 134.6291201783626,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3625,
            "y": 125,
            "w": 175,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3775,
            "y": 150,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3475,
            "y": 100,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3625,
            "y": 100,
            "w": 175,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3500,
            "y": 0,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3625,
            "y": 75,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3750,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3400,
            "y": 0,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3400,
            "y": 200,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3425,
            "y": 225,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3925,
            "y": 175,
            "w": 150,
            "h": 12.5,
            "type": "rotate-lava",
            "angle": -659.4999999999995,
            "rotateSpeed": -60,
            "pivotX": 3925,
            "pivotY": 175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 75.25996611745185,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3925,
            "y": 275,
            "w": 150,
            "h": 12.5,
            "type": "rotate-lava",
            "angle": 659.4999999999995,
            "rotateSpeed": 60,
            "pivotX": 3925,
            "pivotY": 275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 75.25996611745185,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3925,
            "y": 375,
            "w": 150,
            "h": 12.5,
            "type": "rotate-lava",
            "angle": -659.4999999999995,
            "rotateSpeed": -60,
            "pivotX": 3925,
            "pivotY": 375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 75.25996611745185,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 3874.5833333331334,
            "y": 500,
            "w": 62.5,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3850,
                    500
                ],
                [
                    3937.5,
                    500
                ]
            ],
            "speed": 50,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3850,
                "y": 500
            },
            "pointTo": {
                "x": 3937.5,
                "y": 500
            },
            "xv": 50,
            "yv": 0,
            "inView": true
        },
        {
            "x": 3898.75,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3850,
                    700
                ],
                [
                    3950,
                    700
                ],
                [
                    3950,
                    800
                ],
                [
                    3850,
                    800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3850,
                "y": 700
            },
            "pointTo": {
                "x": 3950,
                "y": 700
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 3900,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3901.25,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3950,
                    800
                ],
                [
                    3850,
                    800
                ],
                [
                    3850,
                    700
                ],
                [
                    3950,
                    700
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3950,
                "y": 800
            },
            "pointTo": {
                "x": 3850,
                "y": 800
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 3900,
            "y": 862.5,
            "w": 112.5,
            "h": 87.5,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3850,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 3937.5,
            "y": 1037.5,
            "w": 175,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1099.1666666666767,
            "rotateSpeed": 100,
            "pivotX": 3937.5,
            "pivotY": 1037.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 88.38834764831844,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4025,
            "y": 950,
            "w": 25,
            "h": 50,
            "type": "color",
            "bgColor": "#6e4893",
            "tileColor": "#9978c9",
            "inView": true
        },
        {
            "x": 4012.5,
            "y": 650,
            "w": 37.5,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2850,
            "y": 500,
            "w": 150,
            "h": 50,
            "type": "coindoor",
            "coins": 2,
            "currentCoins": 2,
            "inView": true
        },
        {
            "x": 4150,
            "y": 900,
            "w": 175,
            "h": 25,
            "type": "rotate-lava",
            "angle": -1648.749999999999,
            "rotateSpeed": -150,
            "pivotX": 4150,
            "pivotY": 900,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 88.38834764831844,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4212.5,
            "y": 962.5,
            "w": 37.5,
            "h": 37.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4212.5,
            "y": 800,
            "w": 37.5,
            "h": 37.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4250,
            "y": 800,
            "w": 50,
            "h": 700,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4100,
            "y": 750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4050,
            "y": 875,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4125,
            "y": 650,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4200,
            "y": 500,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4050,
            "y": 450,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4150,
            "y": 651.25,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    4150,
                    500
                ],
                [
                    4150,
                    725
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4150,
                "y": 725
            },
            "pointTo": {
                "x": 4150,
                "y": 500
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 4300,
            "y": 550,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4350,
            "y": 50,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4291.333333333622,
            "y": 350,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4050,
                    350
                ],
                [
                    4300,
                    350
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4300,
                "y": 350
            },
            "pointTo": {
                "x": 4050,
                "y": 350
            },
            "xv": -160,
            "yv": 1.9594348786357652e-14,
            "inView": true
        },
        {
            "x": 4067.3333333336186,
            "y": 250,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4050,
                    250
                ],
                [
                    4300,
                    250
                ]
            ],
            "speed": 320,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4050,
                "y": 250
            },
            "pointTo": {
                "x": 4300,
                "y": 250
            },
            "xv": 320,
            "yv": 0,
            "inView": true
        },
        {
            "x": 4100,
            "y": 200,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4082.25,
            "y": 2.6666684051433585e-14,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4050,
                    0
                ],
                [
                    4300,
                    0
                ]
            ],
            "speed": 270,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4300,
                "y": 0
            },
            "pointTo": {
                "x": 4050,
                "y": 0
            },
            "xv": -270,
            "yv": 3.3065463576978534e-14,
            "inView": true
        },
        {
            "x": 4071.5,
            "y": 100,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4050,
                    100
                ],
                [
                    4300,
                    100
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4300,
                "y": 100
            },
            "pointTo": {
                "x": 4050,
                "y": 100
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": true
        },
        {
            "x": 4550,
            "y": 0,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4600,
            "y": 350,
            "w": 100,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4400,
            "y": 300,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4500,
            "y": 200,
            "w": 200,
            "h": 50,
            "type": "rotate-lava",
            "angle": 3517.333333333274,
            "rotateSpeed": 320,
            "pivotX": 4500,
            "pivotY": 200,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4550,
            "y": 500,
            "w": 200,
            "h": 50,
            "type": "rotate-lava",
            "angle": -3517.333333333274,
            "rotateSpeed": -320,
            "pivotX": 4550,
            "pivotY": 500,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4600,
            "y": 0,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4400,
            "y": 350,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4450,
            "y": 650,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4350,
            "y": 760.9375,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    4350,
                    700
                ],
                [
                    4350,
                    950
                ]
            ],
            "speed": 187.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4350,
                "y": 700
            },
            "pointTo": {
                "x": 4350,
                "y": 950
            },
            "xv": 1.1481063742006436e-14,
            "yv": 187.5,
            "inView": true
        },
        {
            "x": 4450,
            "y": 851.25,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4450,
                    900
                ],
                [
                    4450,
                    700
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4450,
                "y": 900
            },
            "pointTo": {
                "x": 4450,
                "y": 700
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 4550,
            "y": 700,
            "w": 150,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4350,
            "y": 1000,
            "w": 100,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4450,
            "y": 1150,
            "w": 400,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4650,
            "y": 1125,
            "w": 200,
            "h": 50,
            "type": "rotate-lava",
            "angle": 3956.9999999999977,
            "rotateSpeed": 360,
            "pivotX": 4650,
            "pivotY": 1125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4850,
            "y": 950,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4700.833333333733,
            "y": 850,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4800,
                    850
                ],
                [
                    4700,
                    850
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4800,
                "y": 850
            },
            "pointTo": {
                "x": 4700,
                "y": 850
            },
            "xv": -100,
            "yv": 1.2246467991473532e-14,
            "inView": true
        },
        {
            "x": 4900,
            "y": 150,
            "w": 50,
            "h": 1350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4800,
            "y": 618.5833333332833,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4800,
                    750
                ],
                [
                    4800,
                    550
                ]
            ],
            "speed": 170,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4800,
                "y": 550
            },
            "pointTo": {
                "x": 4800,
                "y": 750
            },
            "xv": 1.0409497792752502e-14,
            "yv": 170,
            "inView": true
        },
        {
            "x": 4700,
            "y": 418.5833333333448,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4700,
                    550
                ],
                [
                    4700,
                    350
                ]
            ],
            "speed": 170,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4700,
                "y": 350
            },
            "pointTo": {
                "x": 4700,
                "y": 550
            },
            "xv": 1.0409497792752502e-14,
            "yv": 170,
            "inView": true
        },
        {
            "x": 4800,
            "y": 218.58333333333775,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4800,
                    350
                ],
                [
                    4800,
                    150
                ]
            ],
            "speed": 170,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 4800,
                "y": 150
            },
            "pointTo": {
                "x": 4800,
                "y": 350
            },
            "xv": 1.0409497792752502e-14,
            "yv": 170,
            "inView": true
        },
        {
            "x": 4700,
            "y": 100,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4650,
            "y": 325,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4725,
            "y": 150,
            "w": 175,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4825,
            "y": 12.5,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 4825,
            "pivotY": 12.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 4450,
            "y": 350,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4500,
            "y": 625,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4750,
            "y": 1100,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 4450,
            "y": 1100,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5100,
            "y": 0,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5100,
            "y": 400,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4950,
            "y": 400,
            "w": 200,
            "h": 1100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 400,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5300,
            "y": 50,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5238.416666666267,
            "y": 200,
            "w": 25,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5150,
                    200
                ],
                [
                    5275,
                    200
                ]
            ],
            "speed": 190,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5150,
                "y": 200
            },
            "pointTo": {
                "x": 5275,
                "y": 200
            },
            "xv": 190,
            "yv": 0,
            "inView": true
        },
        {
            "x": 5186.583333333733,
            "y": 100,
            "w": 25,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5275,
                    100
                ],
                [
                    5150,
                    100
                ]
            ],
            "speed": 190,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5275,
                "y": 100
            },
            "pointTo": {
                "x": 5150,
                "y": 100
            },
            "xv": -190,
            "yv": 2.326828918379971e-14,
            "inView": true
        },
        {
            "x": 5350,
            "y": 52.083333333537425,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5350,
                    0
                ],
                [
                    5450,
                    0
                ],
                [
                    5450,
                    100
                ],
                [
                    5350,
                    100
                ]
            ],
            "speed": 250,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 5350,
                "y": 100
            },
            "pointTo": {
                "x": 5350,
                "y": 0
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 5550,
            "y": 52.083333333537425,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5550,
                    0
                ],
                [
                    5650,
                    0
                ],
                [
                    5650,
                    100
                ],
                [
                    5550,
                    100
                ]
            ],
            "speed": 250,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 5550,
                "y": 100
            },
            "pointTo": {
                "x": 5550,
                "y": 0
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 5550,
            "y": 252.08333333353772,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5550,
                    200
                ],
                [
                    5650,
                    200
                ],
                [
                    5650,
                    300
                ],
                [
                    5550,
                    300
                ]
            ],
            "speed": 250,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 5550,
                "y": 300
            },
            "pointTo": {
                "x": 5550,
                "y": 200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 5350,
            "y": 252.08333333353772,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5350,
                    200
                ],
                [
                    5450,
                    200
                ],
                [
                    5450,
                    300
                ],
                [
                    5350,
                    300
                ]
            ],
            "speed": 250,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 5350,
                "y": 300
            },
            "pointTo": {
                "x": 5350,
                "y": 200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 5750,
            "y": 0,
            "w": 100,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5350,
            "y": 400,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5100,
            "y": 350,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 5125,
                "y": 375
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 5100,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#894d5f",
            "tileColor": "#c48293",
            "inView": true
        },
        {
            "x": 5600,
            "y": 500,
            "w": 250,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5600,
            "y": 600,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5200,
            "y": 800,
            "w": 450,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5300,
            "y": 850,
            "w": 100,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 1000,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 5200,
            "y": 949.1666666667167,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5200,
                    850
                ],
                [
                    5200,
                    950
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5200,
                "y": 850
            },
            "pointTo": {
                "x": 5200,
                "y": 950
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": true
        },
        {
            "x": 5200,
            "y": 850,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5325,
            "y": 1000,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 1050,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 1150,
            "w": 125,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 450,
            "w": 350,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 475,
            "w": 25,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5300,
            "y": 775,
            "w": 300,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5575,
            "y": 600,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5350,
            "y": 1000,
            "w": 25,
            "h": 250,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5375,
            "y": 1000,
            "w": 25,
            "h": 350,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5150,
            "y": 1300,
            "w": 150,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5300,
            "y": 1425,
            "w": 200,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5500,
            "y": 1300,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5475,
            "y": 1250,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5400,
            "y": 1125,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5525,
            "y": 1225,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5550,
            "y": 1000,
            "w": 50,
            "h": 500,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5525,
            "y": 1050,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5400,
            "y": 850,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5650,
            "y": 600,
            "w": 250,
            "h": 350,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5725,
            "y": 1075,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": -1978.4999999999989,
            "rotateSpeed": -180,
            "pivotX": 5725,
            "pivotY": 1075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 5725,
            "y": 1200,
            "w": 250,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1978.4999999999989,
            "rotateSpeed": 180,
            "pivotX": 5725,
            "pivotY": 1200,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 125.62344526401112,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 5850,
            "y": 950,
            "w": 50,
            "h": 400,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5725,
            "y": 1325,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": -1978.4999999999989,
            "rotateSpeed": -180,
            "pivotX": 5725,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 5850,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5750,
            "y": 1450,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5600,
            "y": 1450,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5700,
            "y": 1475,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6098.333333333733,
            "y": 1200,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    1200
                ],
                [
                    6100,
                    1200
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5900,
                "y": 1200
            },
            "pointTo": {
                "x": 6100,
                "y": 1200
            },
            "xv": 200,
            "yv": 0,
            "inView": true
        },
        {
            "x": 6098.333333333733,
            "y": 1000,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    1000
                ],
                [
                    6100,
                    1000
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5900,
                "y": 1000
            },
            "pointTo": {
                "x": 6100,
                "y": 1000
            },
            "xv": 200,
            "yv": 0,
            "inView": true
        },
        {
            "x": 6200,
            "y": 500,
            "w": 100,
            "h": 1000,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6098.333333333733,
            "y": 800,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    800
                ],
                [
                    6100,
                    800
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5900,
                "y": 800
            },
            "pointTo": {
                "x": 6100,
                "y": 800
            },
            "xv": 200,
            "yv": 0,
            "inView": true
        },
        {
            "x": 5900,
            "y": 1100,
            "w": 300,
            "h": 100,
            "type": "grav",
            "force": 1800,
            "dir": {
                "x": 1800,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 5900,
            "y": 900,
            "w": 300,
            "h": 100,
            "type": "grav",
            "force": 1800,
            "dir": {
                "x": -1800,
                "y": 0
            },
            "direction": "left",
            "inView": true
        },
        {
            "x": 5900,
            "y": 600,
            "w": 100,
            "h": 100,
            "type": "grav",
            "force": 1800,
            "dir": {
                "x": -1800,
                "y": 0
            },
            "direction": "left",
            "inView": true
        },
        {
            "x": 6000,
            "y": 600,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5850,
            "y": 100,
            "w": 100,
            "h": 400,
            "type": "grav",
            "force": 3600,
            "dir": {
                "x": 3600,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 5975,
            "y": 100,
            "w": 325,
            "h": 400,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5950,
            "y": 325,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5950,
            "y": 100,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5950,
            "y": 225,
            "w": 25,
            "h": 100,
            "type": "bounce",
            "effect": 60,
            "inView": true
        },
        {
            "x": 6000,
            "y": 0,
            "w": 54,
            "h": 28,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6100,
            "y": 75,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6194,
            "y": 0,
            "w": 56,
            "h": 30,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6400,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6300,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6400,
            "y": 250,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6525,
            "y": 175,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": -494.6249999999997,
            "rotateSpeed": -45,
            "pivotX": 6525,
            "pivotY": 175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 6500,
            "y": 0,
            "w": 250,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6475,
            "y": 550,
            "w": 375,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 6475,
            "pivotY": 550,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 189.15932438026945,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 6450,
            "y": 350,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6550,
            "y": 425,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6500,
            "y": 475,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6625,
            "y": 550,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6500,
            "y": 500,
            "w": 50,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6550,
            "y": 625,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6650,
            "y": 575,
            "w": 50,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6350,
            "y": 675,
            "w": 150,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6350,
            "y": 650,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6300,
            "y": 500,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6650,
            "y": 350,
            "w": 50,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6500,
            "y": 700,
            "w": 200,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6450,
            "y": 475,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6500,
            "y": 350,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6550,
            "y": 500,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6550,
            "y": 600,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6700,
            "y": 350,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6350,
            "y": 750,
            "w": 400,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6350,
            "y": 850,
            "w": 400,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6300,
            "y": 850,
            "w": 50,
            "h": 650,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6750,
            "y": 775,
            "w": 2000,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6750,
            "y": 850,
            "w": 2000,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 6750,
            "y": 0,
            "w": 2000,
            "h": 775,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6750,
            "y": 875,
            "w": 2000,
            "h": 625,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 6300,
            "y": 800,
            "w": 2450,
            "h": 50,
            "type": "grav",
            "force": 4500,
            "dir": {
                "x": 4500,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 6375,
            "y": 825,
            "w": 25,
            "h": 25,
            "type": "color",
            "bgColor": "#a15636",
            "tileColor": "#dc8150",
            "inView": true
        },
        {
            "x": 8750,
            "y": 850,
            "w": 100,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8800,
            "y": 750,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8850,
            "y": 450,
            "w": 50,
            "h": 1050,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 0,
            "w": 150,
            "h": 150,
            "type": "color",
            "bgColor": "#55894d",
            "tileColor": "#8bc482",
            "inView": true
        },
        {
            "x": 750,
            "y": 0,
            "w": 25,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3250,
            "y": 750,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4237.5,
            "y": 837.5,
            "w": 12.5,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5543.75,
            "y": 993.75,
            "w": 6.25,
            "h": 6.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5568.75,
            "y": 918.75,
            "w": 12.5,
            "h": 81.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5568.75,
            "y": 850,
            "w": 12.5,
            "h": 6.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 5025,
            "y": 175,
            "w": 25,
            "h": 125,
            "type": "rotate-lava",
            "angle": 4396.666666666707,
            "rotateSpeed": 400,
            "pivotX": 5025,
            "pivotY": 175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 63.73774391990981,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 6000,
            "y": 0,
            "w": 250,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 2.5,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 8750,
            "y": 522.0833333332876,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    8750,
                    725
                ],
                [
                    8750,
                    500
                ]
            ],
            "speed": 350,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8750,
                "y": 500
            },
            "pointTo": {
                "x": 8750,
                "y": 725
            },
            "xv": 2.1431318985078682e-14,
            "yv": 350,
            "inView": true
        },
        {
            "x": 8825,
            "y": 702.9166666667127,
            "w": 25,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    8825,
                    500
                ],
                [
                    8825,
                    725
                ]
            ],
            "speed": 350,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8825,
                "y": 725
            },
            "pointTo": {
                "x": 8825,
                "y": 500
            },
            "xv": 2.1431318985078682e-14,
            "yv": -350,
            "inView": true
        },
        {
            "x": 8825,
            "y": 475,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 8825,
            "y": 450,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8795.416666667066,
            "y": 300,
            "w": 150,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    8750,
                    300
                ],
                [
                    8900,
                    300
                ],
                [
                    8900,
                    150
                ],
                [
                    8750,
                    150
                ]
            ],
            "speed": 550,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8750,
                "y": 300
            },
            "pointTo": {
                "x": 8900,
                "y": 300
            },
            "xv": 550,
            "yv": 0,
            "inView": true
        },
        {
            "x": 8900,
            "y": 450,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9050,
            "y": 100,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8825,
            "y": 100,
            "w": 237.5,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8928.333333332534,
            "y": 50,
            "w": 25,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8825,
                    50
                ],
                [
                    9075,
                    50
                ]
            ],
            "speed": 400,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 9075,
                "y": 50
            },
            "pointTo": {
                "x": 8825,
                "y": 50
            },
            "xv": -400,
            "yv": 4.898587196589413e-14,
            "inView": true
        },
        {
            "x": 8971.666666667466,
            "y": 0,
            "w": 25,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    9075,
                    0
                ],
                [
                    8825,
                    0
                ]
            ],
            "speed": 400,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8825,
                "y": 0
            },
            "pointTo": {
                "x": 9075,
                "y": 0
            },
            "xv": 400,
            "yv": 0,
            "inView": true
        },
        {
            "x": 9100,
            "y": 0,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9150,
            "y": 50,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9200,
            "y": 100,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9150,
            "y": 300,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": -1978.4999999999989,
            "rotateSpeed": -180,
            "pivotX": 9150,
            "pivotY": 300,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9250,
            "y": 200,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 1978.4999999999989,
            "rotateSpeed": 180,
            "pivotX": 9250,
            "pivotY": 200,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9300,
            "y": 150,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9250,
            "y": 400,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 1978.4999999999989,
            "rotateSpeed": 180,
            "pivotX": 9250,
            "pivotY": 400,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9200,
            "y": 450,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9250,
            "y": 550,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 36877.04166666646,
            "rotateSpeed": 3355,
            "pivotX": 9250,
            "pivotY": 550,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9075,
            "y": 650,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 36877.04166666646,
            "rotateSpeed": 3355,
            "pivotX": 9075,
            "pivotY": 650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 8900,
            "y": 500,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8900,
            "y": 600,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8900,
            "y": 700,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9300,
            "y": 500,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9250,
            "y": 625,
            "w": 100,
            "h": 25,
            "type": "rotate-lava",
            "angle": 36877.04166666646,
            "rotateSpeed": 3355,
            "pivotX": 9250,
            "pivotY": 625,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9225,
            "y": 700,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9300,
            "y": 750,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8950,
            "y": 950,
            "w": 400,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9147.083333332534,
            "y": 750,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    8900,
                    750
                ],
                [
                    9200,
                    750
                ]
            ],
            "speed": 350,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8900,
                "y": 750
            },
            "pointTo": {
                "x": 9200,
                "y": 750
            },
            "xv": 350,
            "yv": 0,
            "inView": true
        },
        {
            "x": 9077.916666667466,
            "y": 850,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    9075,
                    850
                ],
                [
                    9200,
                    850
                ],
                [
                    8900,
                    850
                ]
            ],
            "speed": 350,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 9200,
                "y": 850
            },
            "pointTo": {
                "x": 8900,
                "y": 850
            },
            "xv": -350,
            "yv": 4.2862637970157365e-14,
            "inView": true
        },
        {
            "x": 9052.916666667466,
            "y": 1000,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    9100,
                    1000
                ],
                [
                    9000,
                    1000
                ]
            ],
            "speed": 350,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 9100,
                "y": 1000
            },
            "pointTo": {
                "x": 9000,
                "y": 1000
            },
            "xv": -350,
            "yv": 4.2862637970157365e-14,
            "inView": true
        },
        {
            "x": 8947.083333332534,
            "y": 1000,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    8900,
                    1000
                ],
                [
                    9000,
                    1000
                ]
            ],
            "speed": 350,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8900,
                "y": 1000
            },
            "pointTo": {
                "x": 9000,
                "y": 1000
            },
            "xv": 350,
            "yv": 0,
            "inView": true
        },
        {
            "x": 9200,
            "y": 1050,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8900,
            "y": 1100,
            "w": 12.5,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8912.5,
            "y": 1125,
            "w": 287.5,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9150,
            "y": 1100,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9200,
            "y": 1025,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9250,
            "y": 1000,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9350,
            "y": 950,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9450,
            "y": 1000,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8950,
            "y": 1300,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9197.5,
            "y": 1150,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    8900,
                    1150
                ],
                [
                    9400,
                    1150
                ]
            ],
            "speed": 300,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8900,
                "y": 1150
            },
            "pointTo": {
                "x": 9400,
                "y": 1150
            },
            "xv": 300,
            "yv": 0,
            "inView": true
        },
        {
            "x": 9102.5,
            "y": 1200,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    9400,
                    1200
                ],
                [
                    8900,
                    1200
                ]
            ],
            "speed": 300,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 9400,
                "y": 1200
            },
            "pointTo": {
                "x": 8900,
                "y": 1200
            },
            "xv": -300,
            "yv": 3.6739403974420595e-14,
            "inView": true
        },
        {
            "x": 9250,
            "y": 1150,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9050,
            "y": 1200,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9100,
            "y": 1275,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9175,
            "y": 1150,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 8900,
            "y": 1150,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9375,
            "y": 1225,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9205.833333332534,
            "y": 1350,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    8900,
                    1350
                ],
                [
                    9400,
                    1350
                ]
            ],
            "speed": 700,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 9400,
                "y": 1350
            },
            "pointTo": {
                "x": 8900,
                "y": 1350
            },
            "xv": -700,
            "yv": 8.572527594031473e-14,
            "inView": true
        },
        {
            "x": 9094.166666667466,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    9400,
                    1425
                ],
                [
                    8900,
                    1425
                ]
            ],
            "speed": 700,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8900,
                "y": 1425
            },
            "pointTo": {
                "x": 9400,
                "y": 1425
            },
            "xv": 700,
            "yv": 0,
            "inView": true
        },
        {
            "x": 9450,
            "y": 1350,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9200,
            "y": 0,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9350,
            "y": 100,
            "w": 200,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9500,
            "y": 1200,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9450,
            "y": 1450,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 9500,
                "y": 1475
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 9750,
            "y": 1175,
            "w": 75,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9625,
            "y": 1375,
            "w": 50,
            "h": 50,
            "type": "pushbox",
            "weight": 50,
            "initX": 9625,
            "initY": 1375,
            "pusherId": 0.24533575009092412,
            "resetId": -1,
            "lastPos": {
                "x": 9625,
                "y": 1375
            },
            "inView": true
        },
        {
            "x": 9550,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9675,
            "y": 1000,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9550,
            "y": 1250,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9700,
            "y": 1375,
            "w": 50,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9550,
            "y": 600,
            "w": 275,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10025,
            "y": 100,
            "w": 50,
            "h": 525,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10050,
            "y": 825,
            "w": 25,
            "h": 675,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10075,
            "y": 100,
            "w": 75,
            "h": 1400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9925,
            "y": 925,
            "w": 125,
            "h": 575,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9850,
            "y": 975,
            "w": 75,
            "h": 525,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9750,
            "y": 1250,
            "w": 75,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9775,
            "y": 1200,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9775,
            "y": 225,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": -0.7853981633974483,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9898.743686707647,
                        101.25631329235419
                    ],
                    [
                        9934.099025766973,
                        65.90097423302683
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9775,
                        400
                    ],
                    [
                        9775,
                        450
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 175,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 9775,
            "y": 225,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 2.356194490192345,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9651.256313292353,
                        348.7436867076458
                    ],
                    [
                        9615.900974233027,
                        384.0990257669732
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9775,
                        50
                    ],
                    [
                        9775,
                        0
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 175,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 9550,
            "y": 475,
            "w": 150,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9700,
            "y": 525,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9900,
            "y": 350,
            "w": 100,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9950,
            "y": 100,
            "w": 75,
            "h": 275,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9550,
            "y": -25,
            "w": 50,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9575,
            "y": -25,
            "w": 75,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9625,
            "y": -25,
            "w": 125,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9725,
            "y": -25,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9775,
            "y": 225,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 2967.749999999998,
            "rotateSpeed": 270,
            "pivotX": 9775,
            "pivotY": 225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 9725,
            "y": 175,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10000,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#a13636",
            "tileColor": "#dc5050",
            "inView": true
        },
        {
            "x": 11150,
            "y": 700,
            "w": 250,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 3025,
            "y": 0,
            "w": 150,
            "h": 50,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=OHG77tPsw6M",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 8375,
            "y": 800,
            "w": 150,
            "h": 50,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=yJPewKpHDsQ",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 10598.75,
            "y": 0,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    10450,
                    0
                ],
                [
                    10600,
                    0
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10450,
                "y": 0
            },
            "pointTo": {
                "x": 10600,
                "y": 0
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10575,
            "y": 100,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10650,
            "y": 0,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10675,
            "y": 0,
            "w": 75,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10125,
            "y": -100,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10500,
            "y": 248.75,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    10500,
                    100
                ],
                [
                    10500,
                    250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10500,
                "y": 100
            },
            "pointTo": {
                "x": 10500,
                "y": 250
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 10450,
            "y": 225,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10600,
            "y": 150,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10625,
            "y": 150,
            "w": 125,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10450,
            "y": 250,
            "w": 175,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 150,
            "w": 212.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10275,
            "y": 323.75,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10275,
                    175
                ],
                [
                    10275,
                    325
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10275,
                "y": 175
            },
            "pointTo": {
                "x": 10275,
                "y": 325
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 10275,
            "y": 177.5,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10275,
                    175
                ],
                [
                    10275,
                    325
                ]
            ],
            "speed": 300,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 10275,
                "y": 325
            },
            "pointTo": {
                "x": 10275,
                "y": 175
            },
            "xv": 1.8369701987210297e-14,
            "yv": -300,
            "inView": true
        },
        {
            "x": 10350,
            "y": 176.25,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10350,
                    325
                ],
                [
                    10350,
                    175
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10350,
                "y": 325
            },
            "pointTo": {
                "x": 10350,
                "y": 175
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 10150,
            "y": 175,
            "w": 100,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10425,
            "y": 225,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10275,
            "y": 212.5,
            "w": 37.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10362.5,
            "y": 287.5,
            "w": 37.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10300,
            "y": 400,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10325,
            "y": 425,
            "w": 125,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10300,
            "y": 425,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10200,
            "y": 498.75,
            "w": 450,
            "h": 50,
            "type": "move",
            "points": [
                [
                    10200,
                    450
                ],
                [
                    10200,
                    550
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 10200,
                "y": 450
            },
            "pointTo": {
                "x": 10200,
                "y": 550
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 10200,
            "y": 598.75,
            "w": 450,
            "h": 50,
            "type": "move",
            "points": [
                [
                    10200,
                    550
                ],
                [
                    10200,
                    650
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 10200,
                "y": 550
            },
            "pointTo": {
                "x": 10200,
                "y": 650
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 11400,
            "y": 700,
            "w": 525,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10300,
            "y": 450,
            "w": 350,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 675,
            "w": 600,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10325,
            "y": 475,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10400,
            "y": 600,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10475,
            "y": 475,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10550,
            "y": 600,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10350,
            "y": 475,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10450,
            "y": 475,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10425,
            "y": 625,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10525,
            "y": 625,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10375,
            "y": 625,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10250,
            "y": 625,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10225,
            "y": 650,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10200,
            "y": 600,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10175,
            "y": 625,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 650,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 350,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10650,
            "y": 450,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 550,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10675,
            "y": 450,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10700,
            "y": 450,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10725,
            "y": 450,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10500,
            "y": 475,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11597.916666667466,
            "y": 750,
            "w": 50,
            "h": 150,
            "type": "move",
            "points": [
                [
                    11850,
                    750
                ],
                [
                    11350,
                    750
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 11350,
                "y": 750
            },
            "pointTo": {
                "x": 11850,
                "y": 750
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 11747.916666667466,
            "y": 750,
            "w": 50,
            "h": 150,
            "type": "move",
            "points": [
                [
                    12000,
                    750
                ],
                [
                    11500,
                    750
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 11500,
                "y": 750
            },
            "pointTo": {
                "x": 12000,
                "y": 750
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 11500,
            "y": 900,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12050,
            "y": 700,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11875,
            "y": 750,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11850,
            "y": 750,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11750,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11750,
            "y": 750,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11675,
            "y": 750,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11575,
            "y": 806.25,
            "w": 25,
            "h": 93.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 750,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 825,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11475,
            "y": 750,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 500,
            "w": 650,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 100,
            "w": 250,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 650,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11300,
            "y": 650,
            "w": 68.75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11300,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11250,
            "y": 550,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11250,
            "y": 675,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11250,
            "y": 651.25,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11250,
                    550
                ],
                [
                    11250,
                    675
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 11250,
                "y": 675
            },
            "pointTo": {
                "x": 11250,
                "y": 550
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 10150,
            "y": 700,
            "w": 800,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11000,
            "y": 700,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11000,
            "y": 600,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10850,
            "y": 450,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11000,
            "y": 400,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11000,
            "y": 750,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10900,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10898.75,
            "y": 650,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    10850,
                    650
                ],
                [
                    10950,
                    650
                ],
                [
                    10950,
                    750
                ],
                [
                    10950,
                    650
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10850,
                "y": 650
            },
            "pointTo": {
                "x": 10950,
                "y": 650
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 11001.25,
            "y": 650,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    11050,
                    650
                ],
                [
                    10950,
                    650
                ],
                [
                    10950,
                    550
                ],
                [
                    10950,
                    650
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11050,
                "y": 650
            },
            "pointTo": {
                "x": 10950,
                "y": 650
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 11050,
            "y": 400,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10800,
            "y": 450,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10750,
            "y": 450,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10775,
            "y": 450,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10825,
            "y": 450,
            "w": 25,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10750,
            "y": 400,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10675,
            "y": 650,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11325,
            "y": 600,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 11350,
                "y": 625
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 11087.5,
            "y": 587.5,
            "w": 75,
            "h": 25,
            "type": "rotate-lava",
            "angle": -5935.499999999996,
            "rotateSpeed": -540,
            "pivotX": 11087.5,
            "pivotY": 587.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 39.528470752104745,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 10412.5,
            "y": 225,
            "w": 12.5,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 598.75,
            "w": 76,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    11400,
                    550
                ],
                [
                    11400,
                    650
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11400,
                "y": 550
            },
            "pointTo": {
                "x": 11400,
                "y": 650
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 11524,
            "y": 601.25,
            "w": 76,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    11524,
                    650
                ],
                [
                    11524,
                    550
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11524,
                "y": 650
            },
            "pointTo": {
                "x": 11524,
                "y": 550
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 11400,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11550,
            "y": 650,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11368.75,
            "y": 675,
            "w": 31.25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11600,
            "y": 600,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11800,
            "y": 656.25,
            "w": 50,
            "h": 43.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11650,
            "y": 675,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11900,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11925,
            "y": 673.75,
            "w": 75,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11925,
                    675
                ],
                [
                    11925,
                    600
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 11925,
                "y": 600
            },
            "pointTo": {
                "x": 11925,
                "y": 675
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 11925,
            "y": 725,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11925,
            "y": 700,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12025,
            "y": 750,
            "w": 25,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 1100,
            "w": 800,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12144.166666667466,
            "y": 1049,
            "w": 50,
            "h": 51,
            "type": "lavamove",
            "points": [
                [
                    11450,
                    1049
                ],
                [
                    12150,
                    1049
                ]
            ],
            "speed": 700,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11450,
                "y": 1049
            },
            "pointTo": {
                "x": 12150,
                "y": 1049
            },
            "xv": 700,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12200,
            "y": 900,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 900,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 12150,
                "y": 925
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 11400,
            "y": 998,
            "w": 50,
            "h": 102,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11550,
            "y": 1049,
            "w": 12.5,
            "h": 51,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11625,
            "y": 950,
            "w": 25,
            "h": 51,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11950,
            "y": 950,
            "w": 25,
            "h": 51,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12031.25,
            "y": 1050,
            "w": 168.75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11750,
            "y": 1087.5,
            "w": 100,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11650,
            "y": 950,
            "w": 300,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12125,
            "y": 1024,
            "w": 75,
            "h": 26,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11975,
            "y": 950,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12250,
            "y": 400,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12148.75,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12100,
                    850
                ],
                [
                    12200,
                    850
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12100,
                "y": 850
            },
            "pointTo": {
                "x": 12200,
                "y": 850
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12151.25,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12200,
                    750
                ],
                [
                    12100,
                    750
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12200,
                "y": 750
            },
            "pointTo": {
                "x": 12100,
                "y": 750
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 12200,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 800,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12225,
            "y": 825,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 700,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12125,
            "y": 575,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12050,
            "y": 675,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12050,
            "y": 500,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12175,
            "y": 587.5,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12237.5,
            "y": 562.5,
            "w": 12.5,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 450,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 400,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 75,
            "w": 50,
            "h": 375,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12275,
            "y": 275,
            "w": 250,
            "h": 37.5,
            "type": "rotate-lava",
            "angle": -1978.4999999999989,
            "rotateSpeed": -180,
            "pivotX": 12275,
            "pivotY": 275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 126.39842760097928,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12275,
            "y": 275,
            "w": 250,
            "h": 37.5,
            "type": "rotate-lava",
            "angle": -1888.4999999999989,
            "rotateSpeed": -180,
            "pivotX": 12275,
            "pivotY": 275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 126.39842760097928,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12225,
            "y": 225,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12275,
            "y": 393.75,
            "w": 125,
            "h": 6.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12393.75,
            "y": 150,
            "w": 6.25,
            "h": 243.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12200,
            "y": 0,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12225,
            "y": 150,
            "w": 168.75,
            "h": 6.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12150,
            "y": 262.5,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12150,
            "y": 250,
            "w": 12.5,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12125,
            "y": 50,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": -2.0833333333329365,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12100,
                    -50
                ],
                [
                    12100,
                    25
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12100,
                "y": -50
            },
            "pointTo": {
                "x": 12100,
                "y": 25
            },
            "xv": 1.5308084989341916e-14,
            "yv": 250,
            "inView": true
        },
        {
            "x": 12050,
            "y": 0,
            "w": 25,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 0,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 100,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 12050,
                "y": 150
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 11950,
            "y": 0,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 297.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12000,
                    200
                ],
                [
                    12000,
                    400
                ]
            ],
            "speed": 300,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12000,
                "y": 200
            },
            "pointTo": {
                "x": 12000,
                "y": 400
            },
            "xv": 1.8369701987210297e-14,
            "yv": 300,
            "inView": true
        },
        {
            "x": 12050,
            "y": 363.4375,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12050,
                    400
                ],
                [
                    12050,
                    325
                ]
            ],
            "speed": 112.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12050,
                "y": 400
            },
            "pointTo": {
                "x": 12050,
                "y": 325
            },
            "xv": 6.8886382452038615e-15,
            "yv": -112.5,
            "inView": true
        },
        {
            "x": 12050,
            "y": 238.4375,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12050,
                    275
                ],
                [
                    12050,
                    200
                ]
            ],
            "speed": 112.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12050,
                "y": 275
            },
            "pointTo": {
                "x": 12050,
                "y": 200
            },
            "xv": 6.8886382452038615e-15,
            "yv": -112.5,
            "inView": true
        },
        {
            "x": 11900,
            "y": 0,
            "w": 50,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11650,
            "y": 250,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -1318.999999999999,
            "rotateSpeed": -120,
            "pivotX": 11650,
            "pivotY": 250,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11225,
            "y": -25,
            "w": 175,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 0,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 10900,
            "y": 800,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 10950,
                "y": 850
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 10900,
            "y": 900,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9500,
            "y": 1175,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9550,
            "y": 850,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9775,
            "y": 875,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9650,
            "y": 725,
            "w": 175,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9600,
            "y": 825,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9550,
            "y": 650,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9925,
            "y": 900,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9825,
            "y": 950,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10050,
            "y": 650,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9987.5,
            "y": 662.5,
            "w": 50,
            "h": 50,
            "type": "bbutton",
            "id": 1,
            "active": true,
            "tempActive": false,
            "inView": true
        },
        {
            "x": 9837.5,
            "y": 575,
            "w": 75,
            "h": 25,
            "type": "door",
            "id": 1,
            "active": true,
            "inView": true
        },
        {
            "x": 9750,
            "y": 1200,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9750,
            "y": 950,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9825,
            "y": 1050,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9750,
            "y": 1000,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9825,
            "y": 975,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9825,
            "y": 1175,
            "w": 25,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9650,
            "y": 1125,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9500,
            "y": 950,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9500,
            "y": 1025,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9825,
            "y": 725,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9800,
            "y": 850,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9775,
            "y": 575,
            "w": 62.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10000,
            "y": 375,
            "w": 25,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10043.75,
            "y": 725,
            "w": 6.25,
            "h": 18.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9975,
            "y": 725,
            "w": 6.25,
            "h": 18.75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9912.5,
            "y": 575,
            "w": 37.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9975,
            "y": 625,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 9975,
            "y": 525,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 9912.5,
            "y": 500,
            "w": 112.5,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11725,
            "y": 550,
            "w": 75,
            "h": 6.25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "points": [
                [
                    10900,
                    75
                ],
                [
                    11150,
                    100
                ],
                [
                    11000,
                    225
                ],
                [
                    10900,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10900,
                "right": 11150,
                "top": 75,
                "bottom": 225
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    10750,
                    0
                ],
                [
                    11150,
                    0
                ],
                [
                    11150,
                    25
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10750,
                "right": 11150,
                "top": 0,
                "bottom": 25
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    10750,
                    0
                ],
                [
                    10850,
                    0
                ],
                [
                    10825,
                    175
                ],
                [
                    10750,
                    400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10750,
                "right": 10850,
                "top": 0,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    10950,
                    325
                ],
                [
                    10950,
                    400
                ],
                [
                    10900,
                    400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10900,
                "right": 10950,
                "top": 325,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 10900,
            "y": 400,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "points": [
                [
                    11100,
                    250
                ],
                [
                    11050,
                    350
                ],
                [
                    10950,
                    350
                ],
                [
                    10950,
                    325
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10950,
                "right": 11100,
                "top": 250,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    11150,
                    300
                ],
                [
                    11150,
                    400
                ],
                [
                    11125,
                    400
                ],
                [
                    11125,
                    375
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 11125,
                "right": 11150,
                "top": 300,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 10700,
            "y": -50,
            "w": 525,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 0,
            "w": 75,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11225,
            "y": 0,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "points": [
                [
                    10950,
                    350
                ],
                [
                    10975,
                    350
                ],
                [
                    10950,
                    375
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10950,
                "right": 10975,
                "top": 350,
                "bottom": 375
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 10750,
            "y": 750,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 1350,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12125,
            "y": 1275,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 12125,
            "pivotY": 1275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12050,
            "y": 1325,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 1250,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 1225,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": -959.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 12000,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12050,
            "y": 1150,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11900,
            "y": 1150,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11900,
            "y": 1175,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11950,
            "y": 1300,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11875,
            "y": 1325,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": -959.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 11875,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11800,
            "y": 1250,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11800,
            "y": 1150,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11775,
            "y": 1150,
            "w": 25,
            "h": 250,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11800,
            "y": 1375,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11775,
            "y": 1400,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12000,
            "y": 1400,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": -959.2499999999994,
            "rotateSpeed": -90,
            "pivotX": 12000,
            "pivotY": 1400,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11900,
            "y": 1425,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11900,
            "y": 1475,
            "w": 175,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12075,
            "y": 1450,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11750,
            "y": 1150,
            "w": 25,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11775,
            "y": 1425,
            "w": 125,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11850,
            "y": 1450,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11850,
            "y": 1500,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12100,
            "y": 1150,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12200,
            "y": 1275,
            "w": 50,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1425,
            "w": 50,
            "h": 50,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 5000,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 12100,
            "y": 1500,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1400,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12350,
            "y": 1350,
            "w": 50,
            "h": 50,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 0,
                "y": -5000
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 12300,
            "y": 1448.75,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    12300,
                    1400
                ],
                [
                    12300,
                    1500
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12300,
                "y": 1400
            },
            "pointTo": {
                "x": 12300,
                "y": 1500
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": true
        },
        {
            "x": 12400,
            "y": 0,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12400,
            "y": 800,
            "w": 150,
            "h": 625,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12400,
            "y": 1575,
            "w": 150,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12450,
            "y": 1425,
            "w": 100,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1475,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1150,
            "w": 150,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": true
        },
        {
            "x": 12150,
            "y": 1425,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 2,
            "active": true,
            "inView": true
        },
        {
            "x": 12550,
            "y": 550,
            "w": 150,
            "h": 1050,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12500,
            "y": 0,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12400,
            "y": 550,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12450,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12450,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12455,
            "y": 455,
            "w": 90,
            "h": 90,
            "color": "#950e0e",
            "type": "block",
            "inView": true
        },
        {
            "x": 12450,
            "y": 600,
            "w": 100,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 10600,
            "y": 900,
            "w": 300,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10847.916666667466,
            "y": 800,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    10600,
                    800
                ],
                [
                    10850,
                    800
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10600,
                "y": 800
            },
            "pointTo": {
                "x": 10850,
                "y": 800
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10697.916666667466,
            "y": 750,
            "w": 50,
            "h": 125,
            "type": "lavamove",
            "points": [
                [
                    10450,
                    750
                ],
                [
                    10700,
                    750
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10450,
                "y": 750
            },
            "pointTo": {
                "x": 10700,
                "y": 750
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10450,
            "y": 750,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10600,
            "y": 950,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10200,
            "y": 1050,
            "w": 450,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10400,
            "y": 1025,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10350,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10350,
            "y": 900,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10550,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10425,
            "y": 750,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10300,
            "y": 750,
            "w": 125,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 750,
            "w": 150,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10298.75,
            "y": 850,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    10150,
                    850
                ],
                [
                    10300,
                    850
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10150,
                "y": 850
            },
            "pointTo": {
                "x": 10300,
                "y": 850
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10151.25,
            "y": 950,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    10300,
                    950
                ],
                [
                    10150,
                    950
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10300,
                "y": 950
            },
            "pointTo": {
                "x": 10150,
                "y": 950
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 10150,
            "y": 850,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10250,
            "y": 1025,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 1200,
            "w": 325,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10375,
            "y": 1175,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10475,
            "y": 1100,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10575,
            "y": 1175,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10152.5,
            "y": 1100,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10150,
                    1100
                ],
                [
                    10300,
                    1100
                ]
            ],
            "speed": 300,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 10300,
                "y": 1100
            },
            "pointTo": {
                "x": 10150,
                "y": 1100
            },
            "xv": -300,
            "yv": 3.6739403974420595e-14,
            "inView": true
        },
        {
            "x": 10297.5,
            "y": 1175,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    10300,
                    1175
                ],
                [
                    10150,
                    1175
                ]
            ],
            "speed": 300,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 10150,
                "y": 1175
            },
            "pointTo": {
                "x": 10300,
                "y": 1175
            },
            "xv": 300,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10550,
            "y": 1200,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 1250,
            "w": 325,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10150,
            "y": 1300,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10550,
            "y": 1250,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10650,
            "y": 1175,
            "w": 100,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10700,
            "y": 1150,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10725,
            "y": 1025,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10750,
            "y": 1000,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10650,
            "y": 1325,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10800,
            "y": 950,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 10850,
                "y": 1000
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 10650,
            "y": 950,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10900,
            "y": 950,
            "w": 250,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 1450,
            "w": 250,
            "h": 50,
            "type": "door",
            "id": 3,
            "active": true,
            "inView": true
        },
        {
            "x": 10200,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 3,
            "active": true,
            "inView": true
        },
        {
            "x": 10975,
            "y": 1225,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 10975,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 10975,
            "y": 1225,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 554.6249999999998,
            "rotateSpeed": 45,
            "pivotX": 10975,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 10975,
            "y": 1225,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 614.6249999999998,
            "rotateSpeed": 45,
            "pivotX": 10975,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "points": [
                [
                    11025,
                    1050
                ],
                [
                    11150,
                    1050
                ],
                [
                    11100,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 11025,
                "right": 11150,
                "top": 1050,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    11150,
                    1050
                ],
                [
                    11150,
                    1175
                ],
                [
                    11100,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 11100,
                "right": 11150,
                "top": 1050,
                "bottom": 1175
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    11150,
                    1275
                ],
                [
                    11150,
                    1400
                ],
                [
                    11100,
                    1350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 11100,
                "right": 11150,
                "top": 1275,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    11100,
                    1350
                ],
                [
                    11150,
                    1400
                ],
                [
                    11025,
                    1400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 11025,
                "right": 11150,
                "top": 1350,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    10800,
                    1150
                ],
                [
                    10975,
                    1225
                ],
                [
                    10800,
                    1300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 10800,
                "right": 10975,
                "top": 1150,
                "bottom": 1300
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 10800,
            "y": 1400,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 10975,
            "y": 1225,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": true
        },
        {
            "x": 10748.75,
            "y": 1350,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10600,
                    1350
                ],
                [
                    10750,
                    1350
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10600,
                "y": 1350
            },
            "pointTo": {
                "x": 10750,
                "y": 1350
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10601.25,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10750,
                    1425
                ],
                [
                    10600,
                    1425
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10750,
                "y": 1425
            },
            "pointTo": {
                "x": 10600,
                "y": 1425
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 10548.75,
            "y": 1350,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10400,
                    1350
                ],
                [
                    10550,
                    1350
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10400,
                "y": 1350
            },
            "pointTo": {
                "x": 10550,
                "y": 1350
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10401.25,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10550,
                    1425
                ],
                [
                    10400,
                    1425
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10550,
                "y": 1425
            },
            "pointTo": {
                "x": 10400,
                "y": 1425
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 10348.75,
            "y": 1350,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10200,
                    1350
                ],
                [
                    10350,
                    1350
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10200,
                "y": 1350
            },
            "pointTo": {
                "x": 10350,
                "y": 1350
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 10201.25,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    10350,
                    1425
                ],
                [
                    10200,
                    1425
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 10350,
                "y": 1425
            },
            "pointTo": {
                "x": 10200,
                "y": 1425
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 10150,
            "y": 1350,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 10975,
            "y": 1525,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 4836.333333333326,
            "rotateSpeed": 440,
            "pivotX": 10975,
            "pivotY": 1525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 11000,
            "y": 1525,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 4836.333333333326,
            "rotateSpeed": 440,
            "pivotX": 11000,
            "pivotY": 1525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 10950,
            "y": 1525,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 4836.333333333326,
            "rotateSpeed": 440,
            "pivotX": 10950,
            "pivotY": 1525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1200,
            "w": 150,
            "h": 150,
            "spawn": {
                "x": 12325,
                "y": 1275
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 11225,
            "y": 1450,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 11275,
                "y": 1475
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 11550,
            "y": 1150,
            "w": 50,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11675,
            "y": 1300,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11550,
            "y": 1425,
            "w": 50,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 1150,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11700,
            "y": 1150,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11150,
            "y": 1200,
            "w": 100,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11300,
            "y": 1250,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 11250,
            "y": 1200,
            "w": 50,
            "h": 250,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 0,
                "y": 5000
            },
            "direction": "down",
            "inView": true
        },
        {
            "x": 11650,
            "y": 1500,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11300,
            "y": 1200,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 4,
            "active": true,
            "inView": true
        },
        {
            "x": 11700,
            "y": 1450,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 4,
            "active": true,
            "inView": true
        },
        {
            "x": 11525,
            "y": 1475,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11400,
            "y": 1275,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11725,
            "y": 1275,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11525,
            "y": 1150,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11795,
            "y": 1450,
            "w": 55,
            "h": 55,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11700,
            "y": 1545,
            "w": 55,
            "h": 55,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 11800,
            "y": 1550,
            "w": 450,
            "h": 50,
            "type": "vinette",
            "ir": 0.1,
            "or": 0.3,
            "o": 1,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": true
        },
        {
            "x": 11800,
            "y": 1550,
            "w": 450,
            "h": 50,
            "type": "size",
            "size": 5,
            "inView": true
        },
        {
            "x": 11911.25,
            "y": 1550,
            "w": 5,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11850,
                    1550
                ],
                [
                    11945,
                    1550
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 11945,
                "y": 1550
            },
            "pointTo": {
                "x": 11850,
                "y": 1550
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 11883.75,
            "y": 1575,
            "w": 5,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    11945,
                    1575
                ],
                [
                    11850,
                    1575
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 11850,
                "y": 1575
            },
            "pointTo": {
                "x": 11945,
                "y": 1575
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12005.825944096956,
            "y": 1562.3303776387856,
            "w": 25,
            "h": 20,
            "type": "lavamove",
            "points": [
                [
                    11975,
                    1550
                ],
                [
                    12050,
                    1580
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11975,
                "y": 1550
            },
            "pointTo": {
                "x": 12050,
                "y": 1580
            },
            "xv": 139.2715036327889,
            "yv": 55.708601453115556,
            "inView": true
        },
        {
            "x": 12005.825944096956,
            "y": 1567.6696223612144,
            "w": 25,
            "h": 20,
            "type": "lavamove",
            "points": [
                [
                    11975,
                    1580
                ],
                [
                    12050,
                    1550
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 11975,
                "y": 1580
            },
            "pointTo": {
                "x": 12050,
                "y": 1550
            },
            "xv": 139.2715036327889,
            "yv": -55.708601453115556,
            "inView": true
        },
        {
            "x": 12123.75,
            "y": 1550,
            "w": 25,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12100,
                    1575
                ],
                [
                    12100,
                    1550
                ],
                [
                    12125,
                    1550
                ],
                [
                    12125,
                    1575
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 12100,
                "y": 1550
            },
            "pointTo": {
                "x": 12125,
                "y": 1550
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12173.75,
            "y": 1550,
            "w": 25,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12150,
                    1575
                ],
                [
                    12150,
                    1550
                ],
                [
                    12175,
                    1550
                ],
                [
                    12175,
                    1575
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 12150,
                "y": 1550
            },
            "pointTo": {
                "x": 12175,
                "y": 1550
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12375,
            "y": 600,
            "w": 25,
            "h": 104,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 450,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12450,
            "y": 450,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#55894d",
            "tileColor": "#8bc482",
            "inView": true
        },
        {
            "x": 12700,
            "y": 100,
            "w": 100,
            "h": 1500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12600,
            "y": 350,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12675,
            "y": 150,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 979.2666666666867,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    12300,
                    1050
                ],
                [
                    12300,
                    850
                ]
            ],
            "speed": 152,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12300,
                "y": 1050
            },
            "pointTo": {
                "x": 12300,
                "y": 850
            },
            "xv": 9.307315673519884e-15,
            "yv": -152,
            "inView": true
        },
        {
            "x": 12250,
            "y": 1011.8916666666867,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12250,
                    950
                ],
                [
                    12250,
                    1125
                ]
            ],
            "speed": 133,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12250,
                "y": 950
            },
            "pointTo": {
                "x": 12250,
                "y": 1125
            },
            "xv": 8.143901214329898e-15,
            "yv": 133,
            "inView": true
        },
        {
            "x": 12336.5625,
            "y": 750,
            "w": 25,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12300,
                    750
                ],
                [
                    12375,
                    750
                ]
            ],
            "speed": 112.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12300,
                "y": 750
            },
            "pointTo": {
                "x": 12375,
                "y": 750
            },
            "xv": 112.5,
            "yv": 0,
            "inView": true
        },
        {
            "x": 12300,
            "y": 536.5625,
            "w": 25,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    12300,
                    500
                ],
                [
                    12300,
                    575
                ]
            ],
            "speed": 112.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 12300,
                "y": 500
            },
            "pointTo": {
                "x": 12300,
                "y": 575
            },
            "xv": 6.8886382452038615e-15,
            "yv": 112.5,
            "inView": true
        },
        {
            "x": 12425,
            "y": 525,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 925,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12375,
            "y": 850,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 1050,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 750,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12300,
            "y": 500,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12700,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#4d8977",
            "tileColor": "#82c4b0",
            "inView": true
        },
        {
            "x": 1900,
            "y": 199.1666666666677,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    1900,
                    300
                ],
                [
                    1900,
                    0
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1900,
                "y": 0
            },
            "pointTo": {
                "x": 1900,
                "y": 300
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": true
        },
        {
            "x": 1550,
            "y": 500,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 500,
            "y": 875,
            "w": 1,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 574,
            "y": 850,
            "w": 1,
            "h": 51,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 574,
            "y": 900,
            "w": 54,
            "h": 1,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 12900,
            "y": 0,
            "w": 100,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 225,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12900,
            "y": 150,
            "w": 100,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12850,
            "y": 350,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2000,
            "y": 950,
            "w": 25,
            "h": 50,
            "type": "color",
            "bgColor": "#4d6c89",
            "tileColor": "#828dc4",
            "inView": true
        },
        {
            "x": 12925,
            "y": 525,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 12925,
            "pivotY": 525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 13025,
            "y": 400,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13025,
            "y": 625,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13050,
            "y": 400,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12850,
            "y": 650,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12475,
            "y": 475,
            "w": 50,
            "h": 50,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=f55-fXTHQyQ",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 12800,
            "y": 650,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#333286",
            "tileColor": "#7351d2",
            "inView": true
        },
        {
            "x": 12600,
            "y": 0,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 750,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12950,
            "y": 700,
            "w": 200,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12900,
            "y": 850,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 800,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 950,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13000,
            "y": 850,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13100,
            "y": 900,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12850,
            "y": 1100,
            "w": 600,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12925,
            "y": 1050.4166666666129,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12925,
                    1000
                ],
                [
                    12925,
                    1075
                ]
            ],
            "speed": 50,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 12925,
                "y": 1075
            },
            "pointTo": {
                "x": 12925,
                "y": 1000
            },
            "xv": 3.061616997868383e-15,
            "yv": -50,
            "inView": true
        },
        {
            "x": 12800,
            "y": 1100,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#6e4893",
            "tileColor": "#9978c9",
            "inView": true
        },
        {
            "x": 12950,
            "y": 1150,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12850,
            "y": 1300,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 12800,
            "y": 1400,
            "w": 300,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13050,
            "y": 1150,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 12900,
            "y": 1301.25,
            "w": 50,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    12900,
                    1150
                ],
                [
                    12900,
                    1375
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 12900,
                "y": 1375
            },
            "pointTo": {
                "x": 12900,
                "y": 1150
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": true
        },
        {
            "x": 13050,
            "y": 1350,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#894d5f",
            "tileColor": "#c48293",
            "inView": true
        },
        {
            "x": 13100,
            "y": 1150,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13100,
            "y": 1250,
            "w": 400,
            "h": 350,
            "type": "timetrap",
            "time": 0,
            "maxTime": 4,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 13150,
            "y": 1400,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13125,
            "y": 1250,
            "w": 100,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13275,
            "y": 1525,
            "w": 100,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13300,
            "y": 1250,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13450,
            "y": 1400,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13425,
            "y": 1250,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13150,
            "y": 800,
            "w": 250,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13450,
            "y": 800,
            "w": 50,
            "h": 450,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 0,
                "y": -5000
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 13450,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13400,
            "y": 1000,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13275,
            "y": 675,
            "w": 250,
            "h": 45,
            "type": "rotate-lava",
            "angle": 1538.8333333333517,
            "rotateSpeed": 140,
            "pivotX": 13275,
            "pivotY": 675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.00885795880538,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 13400,
            "y": 650,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13150,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13150,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13100,
            "y": 500,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13150,
            "y": 500,
            "w": 250,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13275,
            "y": 650,
            "w": 125,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13425,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#a15636",
            "tileColor": "#dc8150",
            "inView": true
        },
        {
            "x": 13150,
            "y": 625,
            "w": 12.5,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13225,
            "y": 787.5,
            "w": 50,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13400,
            "y": 500,
            "w": 100,
            "h": 50,
            "type": "color",
            "bgColor": "#a13636",
            "tileColor": "#dc5050",
            "inView": true
        },
        {
            "x": 13150,
            "y": 300,
            "w": 350,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13447.083333332534,
            "y": 350,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    13100,
                    350
                ],
                [
                    13450,
                    350
                ]
            ],
            "speed": 350,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 13100,
                "y": 350
            },
            "pointTo": {
                "x": 13450,
                "y": 350
            },
            "xv": 350,
            "yv": 0,
            "inView": true
        },
        {
            "x": 13102.916666667466,
            "y": 425,
            "w": 50,
            "h": 75,
            "type": "lavamove",
            "points": [
                [
                    13450,
                    425
                ],
                [
                    13100,
                    425
                ]
            ],
            "speed": 350,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 13450,
                "y": 425
            },
            "pointTo": {
                "x": 13100,
                "y": 425
            },
            "xv": -350,
            "yv": 4.2862637970157365e-14,
            "inView": true
        },
        {
            "x": 13100,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#4f2222",
            "tileColor": "#a34d4d",
            "inView": true
        },
        {
            "x": 13000,
            "y": 50,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13050,
            "y": 50,
            "w": 105,
            "h": 105,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13195,
            "y": 195,
            "w": 105,
            "h": 105,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 13000,
            "y": 0,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13300,
            "y": 100,
            "w": 200,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13500,
            "y": 100,
            "w": 1300,
            "h": 1500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13500,
            "y": 0,
            "w": 2000,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 13300,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#55894d",
            "tileColor": "#8bc482",
            "inView": true
        },
        {
            "x": 13450,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#4d8977",
            "tileColor": "#82c4b0",
            "inView": true
        },
        {
            "x": 13600,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#4d6c89",
            "tileColor": "#828dc4",
            "inView": true
        },
        {
            "x": 13750,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#333286",
            "tileColor": "#7351d2",
            "inView": true
        },
        {
            "x": 13900,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#6e4893",
            "tileColor": "#9978c9",
            "inView": true
        },
        {
            "x": 14050,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "color",
            "bgColor": "#894d5f",
            "tileColor": "#c48293",
            "inView": true
        },
        {
            "x": 14200,
            "y": 50,
            "w": 200,
            "h": 50,
            "type": "color",
            "bgColor": "#a15636",
            "tileColor": "#dc8150",
            "inView": true
        },
        {
            "x": 14400,
            "y": 50,
            "w": 200,
            "h": 50,
            "type": "color",
            "bgColor": "#a13636",
            "tileColor": "#dc5050",
            "inView": true
        },
        {
            "x": 15050,
            "y": 100,
            "w": 450,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 14850,
            "y": 300,
            "w": 100,
            "h": 1300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 14950,
            "y": 350,
            "w": 550,
            "h": 1250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 15050,
            "y": 50,
            "w": 450,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 15450,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "winpad",
            "inView": true
        },
        {
            "x": 15000,
            "y": 300,
            "w": 450,
            "h": 50,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 5000,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 13225,
            "y": 550,
            "w": 50,
            "h": 12.5,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 14900,
            "y": 300,
            "w": 100,
            "h": 100,
            "type": "roundedcorners",
            "circles": [
                {
                    "x": 14925,
                    "y": 325,
                    "radius": 25
                },
                {
                    "x": 14975,
                    "y": 325,
                    "radius": 25
                },
                {
                    "x": 14925,
                    "y": 375,
                    "radius": 25
                },
                {
                    "x": 14975,
                    "y": 375,
                    "radius": 25
                }
            ],
            "rects": [
                {
                    "x": 14925,
                    "y": 300,
                    "w": 50,
                    "h": 100
                },
                {
                    "x": 14900,
                    "y": 325,
                    "w": 100,
                    "h": 50
                }
            ],
            "roundRadius": 25,
            "inView": true
        },
        {
            "x": 14800,
            "y": 300,
            "w": 50,
            "h": 1250,
            "type": "trans",
            "collide": false,
            "opaq": 0.95,
            "inView": true
        },
        {
            "x": 15500,
            "y": 0,
            "w": 2500,
            "h": 1600,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 14800,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 18100,
            "tpy": 100,
            "bgColor": "#55894d",
            "tileColor": "#8bc482",
            "changeColor": false,
            "inView": true
        },
        {
            "x": 18000,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 14925,
            "tpy": 175,
            "bgColor": "#55894d",
            "tileColor": "#8bc482",
            "changeColor": false,
            "inView": true
        },
        {
            "x": 18000,
            "y": 200,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 0,
            "w": 250,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 0,
            "w": 200,
            "h": 200,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=grd-K33tOSM",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 14850,
            "y": 125,
            "w": 150,
            "h": 100,
            "type": "color",
            "bgColor": "#4f2222",
            "tileColor": "#a34d4d",
            "inView": true
        },
        {
            "x": 18050,
            "y": 50,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#224f2b",
            "tileColor": "#4da34e",
            "inView": true
        },
        {
            "x": 18448.75,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18300,
                    150
                ],
                [
                    18450,
                    150
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18300,
                "y": 150
            },
            "pointTo": {
                "x": 18450,
                "y": 150
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18448.75,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18300,
                    250
                ],
                [
                    18450,
                    250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18300,
                "y": 250
            },
            "pointTo": {
                "x": 18450,
                "y": 250
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18000,
            "y": 300,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18450,
            "y": 0,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18500,
            "y": 150,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18025,
            "y": 25,
            "w": 150,
            "h": 150,
            "spawn": {
                "x": 18100,
                "y": 100
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 18648.75,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18500,
                    0
                ],
                [
                    18650,
                    0
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18500,
                "y": 0
            },
            "pointTo": {
                "x": 18650,
                "y": 0
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18773.75,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18625,
                    0
                ],
                [
                    18775,
                    0
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18625,
                "y": 0
            },
            "pointTo": {
                "x": 18775,
                "y": 0
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18637.5,
            "y": 50,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18550,
            "y": 150,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18825,
            "y": 0,
            "w": 75,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18850,
            "y": 100,
            "w": 50,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18600,
            "y": 300,
            "w": 250,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18598.75,
            "y": 200,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18550,
                    200
                ],
                [
                    18600,
                    200
                ],
                [
                    18600,
                    250
                ],
                [
                    18550,
                    250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18550,
                "y": 200
            },
            "pointTo": {
                "x": 18600,
                "y": 200
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18698.75,
            "y": 200,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18650,
                    200
                ],
                [
                    18700,
                    200
                ],
                [
                    18700,
                    250
                ],
                [
                    18650,
                    250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18650,
                "y": 200
            },
            "pointTo": {
                "x": 18700,
                "y": 200
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18798.75,
            "y": 200,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    200
                ],
                [
                    18800,
                    200
                ],
                [
                    18800,
                    250
                ],
                [
                    18750,
                    250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 200
            },
            "pointTo": {
                "x": 18800,
                "y": 200
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18050,
            "y": 550,
            "w": 850,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18548.75,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18000,
                    350
                ],
                [
                    18550,
                    350
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18000,
                "y": 350
            },
            "pointTo": {
                "x": 18550,
                "y": 350
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18548.75,
            "y": 450,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    18000,
                    450
                ],
                [
                    18550,
                    450
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18000,
                "y": 450
            },
            "pointTo": {
                "x": 18550,
                "y": 450
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18001.25,
            "y": 350,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    18550,
                    350
                ],
                [
                    18000,
                    350
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18550,
                "y": 350
            },
            "pointTo": {
                "x": 18000,
                "y": 350
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 18001.25,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18550,
                    500
                ],
                [
                    18000,
                    500
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18550,
                "y": 500
            },
            "pointTo": {
                "x": 18000,
                "y": 500
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 18350,
            "y": 425,
            "w": 50,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 350,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 350,
            "w": 50,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 525,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18150,
            "y": 600,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 750,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18150,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 900,
            "w": 350,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18298.75,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    18150,
                    850
                ],
                [
                    18300,
                    850
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 18150,
                "y": 850
            },
            "pointTo": {
                "x": 18300,
                "y": 850
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18300,
            "y": 800,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18250,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 600,
            "w": 200,
            "h": 200,
            "type": "mashing",
            "amount": 1000,
            "active": true,
            "currentNum": 0,
            "inView": true
        },
        {
            "x": 18550,
            "y": 600,
            "w": 50,
            "h": 450,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 800,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18500,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 600,
            "w": 200,
            "h": 200,
            "type": "timetrap",
            "time": 0,
            "maxTime": 15,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 18498.75,
            "y": 850,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    18350,
                    850
                ],
                [
                    18500,
                    850
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18350,
                "y": 850
            },
            "pointTo": {
                "x": 18500,
                "y": 850
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18498.75,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18350,
                    1000
                ],
                [
                    18500,
                    1000
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18350,
                "y": 1000
            },
            "pointTo": {
                "x": 18500,
                "y": 1000
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18050,
            "y": 1050,
            "w": 550,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18100,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 950,
            "w": 300,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 18900,
            "y": 0,
            "w": 1600,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 1200,
            "w": 600,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18050,
            "y": 1100,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 1100,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18500,
            "y": 1150,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 1150,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18547.916666665067,
            "y": 1150,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18000,
                    1150
                ],
                [
                    18550,
                    1150
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18000,
                "y": 1150
            },
            "pointTo": {
                "x": 18550,
                "y": 1150
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18002.083333334933,
            "y": 1100,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18550,
                    1100
                ],
                [
                    18000,
                    1100
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18550,
                "y": 1100
            },
            "pointTo": {
                "x": 18000,
                "y": 1100
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18600,
            "y": 600,
            "w": 150,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18650,
            "y": 1100,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 18176,
            "y": 1426,
            "w": 194,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 18176,
            "pivotY": 1426,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 100.16985574512923,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 18052.068858429553,
            "y": 1549.5509310771556,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 18175,
            "pivotY": 1425,
            "distToPivot": 175,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 210.35533905932738,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 18297.931141570447,
            "y": 1300.4490689228446,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 674.6249999999998,
            "rotateSpeed": 45,
            "pivotX": 18175,
            "pivotY": 1425,
            "distToPivot": 175,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 210.35533905932738,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 18350,
            "y": 1250,
            "w": 100,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18350,
            "y": 1500,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18150,
            "y": 1350,
            "w": 50,
            "h": 250,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 1250,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18300,
            "y": 1250,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18150,
            "y": 1250,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18000,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18100,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18200,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18300,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18050,
            "y": 1500,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 5,
            "active": true,
            "inView": true
        },
        {
            "x": 18650,
            "y": 1550,
            "w": 100,
            "h": 50,
            "type": "door",
            "id": 5,
            "active": true,
            "inView": true
        },
        {
            "x": 18450,
            "y": 1250,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18500,
            "y": 1400,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18600,
            "y": 1300,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18500,
            "y": 1450,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18450,
            "y": 1550,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 18552.083333334933,
            "y": 1300,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18600,
                    1300
                ],
                [
                    18450,
                    1300
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18600,
                "y": 1300
            },
            "pointTo": {
                "x": 18450,
                "y": 1300
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18552.083333334933,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18600,
                    1400
                ],
                [
                    18450,
                    1400
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 18600,
                "y": 1400
            },
            "pointTo": {
                "x": 18450,
                "y": 1400
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18750,
            "y": 600,
            "w": 450,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19150,
            "y": 1250,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19047.916666665067,
            "y": 1300,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19100,
                    1300
                ],
                [
                    18750,
                    1300
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 1300
            },
            "pointTo": {
                "x": 19100,
                "y": 1300
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19047.916666665067,
            "y": 1400,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19100,
                    1400
                ],
                [
                    18750,
                    1400
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 1400
            },
            "pointTo": {
                "x": 19100,
                "y": 1400
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19047.916666665067,
            "y": 1500,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19100,
                    1500
                ],
                [
                    18750,
                    1500
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 1500
            },
            "pointTo": {
                "x": 19100,
                "y": 1500
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 18802.083333334933,
            "y": 1450,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    1450
                ],
                [
                    19100,
                    1450
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19100,
                "y": 1450
            },
            "pointTo": {
                "x": 18750,
                "y": 1450
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18802.083333334933,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    1550
                ],
                [
                    19100,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19100,
                "y": 1550
            },
            "pointTo": {
                "x": 18750,
                "y": 1550
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18802.083333334933,
            "y": 1350,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    1350
                ],
                [
                    19100,
                    1350
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19100,
                "y": 1350
            },
            "pointTo": {
                "x": 18750,
                "y": 1350
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 18750,
            "y": 1252.0833333334333,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    1200
                ],
                [
                    18750,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 1550
            },
            "pointTo": {
                "x": 18750,
                "y": 1200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 18850,
            "y": 1252.0833333334333,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18850,
                    1200
                ],
                [
                    18850,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18850,
                "y": 1550
            },
            "pointTo": {
                "x": 18850,
                "y": 1200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 18950,
            "y": 1252.0833333334333,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18950,
                    1200
                ],
                [
                    18950,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18950,
                "y": 1550
            },
            "pointTo": {
                "x": 18950,
                "y": 1200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 19000,
            "y": 1497.9166666665667,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19000,
                    1550
                ],
                [
                    19000,
                    1200
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19000,
                "y": 1200
            },
            "pointTo": {
                "x": 19000,
                "y": 1550
            },
            "xv": 1.5308084989341916e-14,
            "yv": 250,
            "inView": true
        },
        {
            "x": 18900,
            "y": 1497.9166666665667,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18900,
                    1550
                ],
                [
                    18900,
                    1200
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18900,
                "y": 1200
            },
            "pointTo": {
                "x": 18900,
                "y": 1550
            },
            "xv": 1.5308084989341916e-14,
            "yv": 250,
            "inView": true
        },
        {
            "x": 18800,
            "y": 1497.9166666665667,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18800,
                    1550
                ],
                [
                    18800,
                    1200
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18800,
                "y": 1200
            },
            "pointTo": {
                "x": 18800,
                "y": 1550
            },
            "xv": 1.5308084989341916e-14,
            "yv": 250,
            "inView": true
        },
        {
            "x": 19100,
            "y": 1497.9166666665667,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19100,
                    1550
                ],
                [
                    19100,
                    1200
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19100,
                "y": 1200
            },
            "pointTo": {
                "x": 19100,
                "y": 1550
            },
            "xv": 1.5308084989341916e-14,
            "yv": 250,
            "inView": true
        },
        {
            "x": 19050,
            "y": 1252.0833333334333,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19050,
                    1200
                ],
                [
                    19050,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19050,
                "y": 1550
            },
            "pointTo": {
                "x": 19050,
                "y": 1200
            },
            "xv": 1.5308084989341916e-14,
            "yv": -250,
            "inView": true
        },
        {
            "x": 18802.083333334933,
            "y": 1250,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    18750,
                    1250
                ],
                [
                    19100,
                    1250
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19100,
                "y": 1250
            },
            "pointTo": {
                "x": 18750,
                "y": 1250
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19047.916666665067,
            "y": 1200,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19100,
                    1200
                ],
                [
                    18750,
                    1200
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 18750,
                "y": 1200
            },
            "pointTo": {
                "x": 19100,
                "y": 1200
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19200,
            "y": 1250,
            "w": 250,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19450,
            "y": 650,
            "w": 50,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19200,
            "y": 650,
            "w": 250,
            "h": 600,
            "type": "grav",
            "force": 15000,
            "dir": {
                "x": 0,
                "y": -15000
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 19200,
            "y": 600,
            "w": 300,
            "h": 50,
            "type": "grav",
            "force": 15000,
            "dir": {
                "x": 15000,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 19500,
            "y": 600,
            "w": 150,
            "h": 150,
            "spawn": {
                "x": 19575,
                "y": 675
            },
            "type": "check",
            "collected": false,
            "inView": true
        },
        {
            "x": 19500,
            "y": 750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19650,
            "y": 600,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19525,
            "y": 625,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#787878",
            "tileColor": "#cccccc",
            "inView": true
        },
        {
            "x": 19700,
            "y": 600,
            "w": 150,
            "h": 200,
            "type": "grav",
            "force": 1500,
            "dir": {
                "x": 1500,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 19700,
            "y": 600,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19800,
            "y": 650,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19700,
            "y": 750,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20000,
            "y": 600,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19952.083333334933,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20200,
                    700
                ],
                [
                    19950,
                    700
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20200,
                "y": 700
            },
            "pointTo": {
                "x": 19950,
                "y": 700
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19852.083333334933,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20100,
                    700
                ],
                [
                    19850,
                    700
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20100,
                "y": 700
            },
            "pointTo": {
                "x": 19850,
                "y": 700
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19850,
            "y": 750,
            "w": 400,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20300,
            "y": 600,
            "w": 200,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20300,
            "y": 800,
            "w": 200,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 19550,
            "y": 1050,
            "w": 950,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 20100,
            "y": 900,
            "w": 50,
            "h": 52,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20100,
            "y": 998,
            "w": 50,
            "h": 52,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19897.916666665067,
            "y": 900,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    19950,
                    900
                ],
                [
                    19850,
                    900
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19850,
                "y": 900
            },
            "pointTo": {
                "x": 19950,
                "y": 900
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19797.916666665067,
            "y": 950,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    19850,
                    950
                ],
                [
                    19750,
                    950
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19750,
                "y": 950
            },
            "pointTo": {
                "x": 19850,
                "y": 950
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19697.916666665067,
            "y": 900,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    19750,
                    900
                ],
                [
                    19650,
                    900
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19650,
                "y": 900
            },
            "pointTo": {
                "x": 19750,
                "y": 900
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19800,
            "y": 900,
            "w": 50,
            "h": 4,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19550,
            "y": 1100,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19500,
            "y": 1200,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19500,
            "y": 1175,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19625,
            "y": 1175,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19600,
            "y": 1100,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19700,
            "y": 1100,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19750,
            "y": 1100,
            "w": 50,
            "h": 450,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19625,
            "y": 1375,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 19625,
            "pivotY": 1375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19625,
            "y": 1375,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 989.2499999999994,
            "rotateSpeed": 90,
            "pivotX": 19625,
            "pivotY": 1375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19625,
            "y": 1375,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1483.874999999999,
            "rotateSpeed": 135,
            "pivotX": 19625,
            "pivotY": 1375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19625,
            "y": 1375,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1978.4999999999989,
            "rotateSpeed": 180,
            "pivotX": 19625,
            "pivotY": 1375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19550,
            "y": 1500,
            "w": 200,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20097.916666665067,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20150,
                    1550
                ],
                [
                    19800,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 19800,
                "y": 1550
            },
            "pointTo": {
                "x": 20150,
                "y": 1550
            },
            "xv": 250,
            "yv": 0,
            "inView": true
        },
        {
            "x": 19802.083333334933,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20050,
                    1550
                ],
                [
                    19800,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20050,
                "y": 1550
            },
            "pointTo": {
                "x": 19800,
                "y": 1550
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19902.083333334933,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19950,
                    1550
                ],
                [
                    19800,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 19950,
                "y": 1550
            },
            "pointTo": {
                "x": 19800,
                "y": 1550
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19802.083333334933,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    19850,
                    1550
                ],
                [
                    19800,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 19850,
                "y": 1550
            },
            "pointTo": {
                "x": 19800,
                "y": 1550
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 19800,
            "y": 1500,
            "w": 400,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20200,
            "y": 1500,
            "w": 100,
            "h": 100,
            "type": "mashing",
            "amount": 50,
            "active": true,
            "currentNum": 0,
            "inView": true
        },
        {
            "x": 20300,
            "y": 1450,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20200,
            "y": 1500,
            "w": 100,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 0.01,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 20150,
            "y": 1400,
            "w": 200,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19975,
            "y": 1325,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 494.6249999999997,
            "rotateSpeed": 45,
            "pivotX": 19975,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19800,
            "y": 1100,
            "w": 350,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20150,
            "y": 1100,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19975,
            "y": 1325,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19975,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19975,
            "y": 1225,
            "w": 150,
            "h": 50,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19975,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20075,
            "y": 1325,
            "w": 150,
            "h": 50,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20075,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19975,
            "y": 1425,
            "w": 150,
            "h": 50,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19975,
            "pivotY": 1425,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19875,
            "y": 1325,
            "w": 150,
            "h": 50,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19875,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 79.05694150420949,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19975,
            "y": 1325,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": -49462.49999999997,
            "rotateSpeed": -4500,
            "pivotX": 19975,
            "pivotY": 1325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20150,
            "y": 1250,
            "w": 50,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 19875,
            "y": 1225,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19875,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20075,
            "y": 1225,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20075,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20075,
            "y": 1425,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20075,
            "pivotY": 1425,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 19875,
            "y": 1425,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 19875,
            "pivotY": 1425,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20249.07499999904,
            "y": 1100,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20300,
                    1100
                ],
                [
                    20200,
                    1100
                ]
            ],
            "speed": 696969,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20300,
                "y": 1100
            },
            "pointTo": {
                "x": 20200,
                "y": 1100
            },
            "xv": -696969,
            "yv": 8.535408549549316e-11,
            "inView": true
        },
        {
            "x": 20250.92500000096,
            "y": 1200,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20200,
                    1200
                ],
                [
                    20300,
                    1200
                ]
            ],
            "speed": 696969,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20200,
                "y": 1200
            },
            "pointTo": {
                "x": 20300,
                "y": 1200
            },
            "xv": 696969,
            "yv": 0,
            "inView": true
        },
        {
            "x": 20200,
            "y": 1300,
            "w": 150,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20350,
            "y": 1150,
            "w": 50,
            "h": 450,
            "type": "lava",
            "canCollide": true,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1150.9249999996441,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20450,
                    1100
                ],
                [
                    20450,
                    1500
                ]
            ],
            "speed": 696969,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20450,
                "y": 1100
            },
            "pointTo": {
                "x": 20450,
                "y": 1500
            },
            "xv": 4.267704274774658e-11,
            "yv": 696969,
            "inView": true
        },
        {
            "x": 20400,
            "y": 1449.0750000002918,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20400,
                    1500
                ],
                [
                    20400,
                    1100
                ]
            ],
            "speed": 696969,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20400,
                "y": 1500
            },
            "pointTo": {
                "x": 20400,
                "y": 1100
            },
            "xv": 4.267704274774658e-11,
            "yv": -696969,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1225,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1225,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1300,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1300,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1375,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1450,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1450,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1525,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1150,
            "w": 150,
            "h": 25,
            "type": "rotate-lava",
            "angle": 98924.99999999994,
            "rotateSpeed": 9000,
            "pivotX": 20450,
            "pivotY": 1150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 76.03453162872775,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20400.92500000096,
            "y": 1175,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20450,
                    1175
                ],
                [
                    20400,
                    1175
                ]
            ],
            "speed": 696969,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 20400,
                "y": 1175
            },
            "pointTo": {
                "x": 20450,
                "y": 1175
            },
            "xv": 696969,
            "yv": 0,
            "inView": true
        },
        {
            "x": 20449.07499999904,
            "y": 1275,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20400,
                    1275
                ],
                [
                    20450,
                    1275
                ]
            ],
            "speed": 696969,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 20450,
                "y": 1275
            },
            "pointTo": {
                "x": 20400,
                "y": 1275
            },
            "xv": -696969,
            "yv": 8.535408549549316e-11,
            "inView": true
        },
        {
            "x": 20400.92500000096,
            "y": 1375,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20450,
                    1375
                ],
                [
                    20400,
                    1375
                ]
            ],
            "speed": 696969,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 20400,
                "y": 1375
            },
            "pointTo": {
                "x": 20450,
                "y": 1375
            },
            "xv": 696969,
            "yv": 0,
            "inView": true
        },
        {
            "x": 20449.07499999904,
            "y": 1475,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    20400,
                    1475
                ],
                [
                    20450,
                    1475
                ]
            ],
            "speed": 696969,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 20450,
                "y": 1475
            },
            "pointTo": {
                "x": 20400,
                "y": 1475
            },
            "xv": -696969,
            "yv": 8.535408549549316e-11,
            "inView": true
        },
        {
            "x": 20350,
            "y": 1350,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": -49462.49999999997,
            "rotateSpeed": -4500,
            "pivotX": 20350,
            "pivotY": 1350,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20400,
            "y": 1300,
            "w": 100,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 0.01,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1300,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1300
                ],
                [
                    20400,
                    1300
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1300
            },
            "pointTo": {
                "x": 20400,
                "y": 1300
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1375,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1375
                ],
                [
                    20400,
                    1375
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1375
            },
            "pointTo": {
                "x": 20400,
                "y": 1375
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1450,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1450
                ],
                [
                    20400,
                    1450
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1450
            },
            "pointTo": {
                "x": 20400,
                "y": 1450
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1225,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1225
                ],
                [
                    20400,
                    1225
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1225
            },
            "pointTo": {
                "x": 20400,
                "y": 1225
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1150,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1150
                ],
                [
                    20400,
                    1150
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1150
            },
            "pointTo": {
                "x": 20400,
                "y": 1150
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20427.083333334933,
            "y": 1550,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    20475,
                    1550
                ],
                [
                    20400,
                    1550
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 20475,
                "y": 1550
            },
            "pointTo": {
                "x": 20400,
                "y": 1550
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": true
        },
        {
            "x": 20450,
            "y": 1350,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1978.4999999999989,
            "rotateSpeed": 180,
            "pivotX": 20450,
            "pivotY": 1350,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 20400,
            "y": 1575,
            "w": 100,
            "h": 25,
            "type": "winpad",
            "inView": true
        },
        {
            "x": 19200,
            "y": 800,
            "w": 250,
            "h": 250,
            "type": "tptrap",
            "time": 0,
            "maxTime": 1,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 19325,
            "tpy": 925,
            "inView": true
        },
        {
            "x": -25,
            "y": -25,
            "w": 200,
            "h": 200,
            "type": "zone",
            "value": 1,
            "inView": true
        },
        {
            "x": 1025,
            "y": -25,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 2,
            "inView": true
        },
        {
            "x": 1975,
            "y": 925,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 3,
            "inView": true
        },
        {
            "x": 3025,
            "y": -25,
            "w": 150,
            "h": 100,
            "type": "zone",
            "value": 4,
            "inView": true
        },
        {
            "x": 4000,
            "y": 925,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 5,
            "inView": true
        },
        {
            "x": 5075,
            "y": 325,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 6,
            "inView": true
        },
        {
            "x": 8450,
            "y": 775,
            "w": 375,
            "h": 100,
            "type": "zone",
            "value": 7,
            "inView": true
        },
        {
            "x": 9975,
            "y": -75,
            "w": 150,
            "h": 225,
            "type": "zone",
            "value": 8,
            "inView": true
        },
        {
            "x": 11300,
            "y": -25,
            "w": 100,
            "h": 1700,
            "type": "zone",
            "value": 9,
            "inView": true
        },
        {
            "x": 12475,
            "y": 425,
            "w": 50,
            "h": 300,
            "type": "zone",
            "value": 10,
            "inView": true
        },
        {
            "x": 17975,
            "y": -25,
            "w": 1500,
            "h": 1675,
            "type": "zone",
            "value": 11,
            "inView": true
        },
        {
            "x": 19475,
            "y": -25,
            "w": 1500,
            "h": 1675,
            "type": "zone",
            "value": 12,
            "inView": true
        },
        {
            "x": 11150,
            "y": -175,
            "w": 100,
            "h": 1900,
            "type": "zone",
            "value": 8,
            "inView": true
        }
    ];
    const enemies = [
        {
            "type": "normal",
            "angle": 0.8816665541152524,
            "radius": 12,
            "speed": 220,
            "x": 5516.8607413091995,
            "y": 713.2661605650935,
            "renderX": 5516.8607413091995,
            "renderY": 713.2661605650935,
            "xv": -139.89047202467214,
            "yv": 169.7959240874598,
            "bound": {
                "x": 5150,
                "y": 450,
                "w": 450,
                "h": 350
            },
            "isLava": true,
            "inView": true
        },
        {
            "type": "normal",
            "angle": 0.22674754312758852,
            "radius": 12,
            "speed": 220,
            "x": 5254.690258667007,
            "y": 701.1973023250505,
            "renderX": 5254.690258667007,
            "renderY": 701.1973023250505,
            "xv": -214.36860077878063,
            "yv": -49.45809337355995,
            "bound": {
                "x": 5150,
                "y": 450,
                "w": 450,
                "h": 350
            },
            "isLava": true,
            "inView": true
        },
        {
            "type": "normal",
            "angle": 2.5846835133712167,
            "radius": 12,
            "speed": 220,
            "x": 5415.25762030152,
            "y": 538.0353814218141,
            "renderX": 5415.25762030152,
            "renderY": 538.0353814218141,
            "xv": -186.7564343410861,
            "yv": -116.28428196537828,
            "bound": {
                "x": 5150,
                "y": 450,
                "w": 450,
                "h": 350
            },
            "isLava": true,
            "inView": true
        },
        {
            "type": "normal",
            "angle": 3.3012261670168694,
            "radius": 12,
            "speed": 220,
            "x": 5504.32680372844,
            "y": 689.295621158232,
            "renderX": 5504.32680372844,
            "renderY": 689.295621158232,
            "xv": -217.20283311307463,
            "yv": -34.97040588345877,
            "bound": {
                "x": 5150,
                "y": 450,
                "w": 450,
                "h": 350
            },
            "isLava": true,
            "inView": true
        },
        {
            "type": "normal",
            "angle": 0.8964176468717652,
            "radius": 12,
            "speed": 220,
            "x": 5456.743531386462,
            "y": 592.2635360397024,
            "renderX": 5456.743531386462,
            "renderY": 592.2635360397024,
            "xv": 137.37066799252918,
            "yv": -171.84091356625848,
            "bound": {
                "x": 5150,
                "y": 450,
                "w": 450,
                "h": 350
            },
            "isLava": true,
            "inView": true
        },
        {
            "type": "square",
            "angle": 4.527139500816137,
            "size": 25,
            "radius": 12.5,
            "speed": 200,
            "x": 18100.27145939796,
            "y": 656.8485830545164,
            "renderX": 18100.27145939796,
            "renderY": 656.8485830545164,
            "xv": -36.83835006255969,
            "yv": 196.57806582797662,
            "bound": {
                "x": 18000,
                "y": 600,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.9108701908293295,
            "size": 25,
            "radius": 12.5,
            "speed": 200,
            "x": 18107.992784010683,
            "y": 619.9403461452644,
            "renderX": 18107.992784010683,
            "renderY": 619.9403461452644,
            "xv": -66.71134537881841,
            "yv": -188.54600605090525,
            "bound": {
                "x": 18000,
                "y": 600,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 5.789282498771945,
            "size": 25,
            "radius": 12.5,
            "speed": 200,
            "x": 18072.620251408414,
            "y": 644.717904077121,
            "renderX": 18072.620251408414,
            "renderY": 644.717904077121,
            "xv": 176.09787615989308,
            "yv": 94.81317425323847,
            "bound": {
                "x": 18000,
                "y": 600,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 5.410387378995851,
            "size": 25,
            "radius": 12.5,
            "speed": 200,
            "x": 18051.22897120225,
            "y": 623.1373740314388,
            "renderX": 18051.22897120225,
            "renderY": 623.1373740314388,
            "xv": 128.537097715313,
            "yv": 153.22602426129862,
            "bound": {
                "x": 18000,
                "y": 600,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.1811568079918393,
            "size": 25,
            "radius": 12.5,
            "speed": 200,
            "x": 18123.241355838036,
            "y": 658.8135173290026,
            "renderX": 18123.241355838036,
            "renderY": 658.8135173290026,
            "xv": 114.6325781143022,
            "yv": 163.88829132939424,
            "bound": {
                "x": 18000,
                "y": 600,
                "w": 150,
                "h": 150
            },
            "inView": false
        }
    ];
    const safes = [
        {
            "x": 2000,
            "y": 950,
            "w": 225,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 2250,
            "y": 800,
            "w": 50,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 3550,
            "y": 875,
            "w": 25,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 3400,
            "y": 50,
            "w": 25,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 4050,
            "y": 212.5,
            "w": 50,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 8750,
            "y": 100,
            "w": 75,
            "h": 12.5,
            "renderAbove": true
        },
        {
            "x": 8750,
            "y": 462.5,
            "w": 75,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 8900,
            "y": 1300,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 11400,
            "y": 918.75,
            "w": 100,
            "h": 12.5,
            "renderAbove": true
        },
        {
            "x": 10150,
            "y": 1050,
            "w": 50,
            "h": 50,
            "renderAbove": true
        }
    ];
    const texts = [
        {
            "x": 75,
            "y": 175,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Peaceful",
            "angle": 0,
            "story": false
        },
        {
            "x": 1125,
            "y": 75,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Moderate",
            "angle": 0,
            "story": false
        },
        {
            "x": 2025,
            "y": 1025,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Difficult",
            "angle": 0,
            "story": false
        },
        {
            "x": 3100,
            "y": 75,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Hardcore",
            "angle": 0,
            "story": false
        },
        {
            "x": 4150,
            "y": 1025,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Exhausting",
            "angle": 0,
            "story": false
        },
        {
            "x": 5125,
            "y": 425,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Relentless",
            "angle": 0,
            "story": false
        },
        {
            "x": 8625,
            "y": 900,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Welcome to the",
            "angle": 0,
            "story": false
        },
        {
            "x": 8625,
            "y": 925,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "heart-wrenching",
            "angle": 0,
            "story": false
        },
        {
            "x": 8625,
            "y": 950,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "difficulties...",
            "angle": 0,
            "story": false
        },
        {
            "x": 8625,
            "y": 1000,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "good luck...",
            "angle": 0,
            "story": false
        },
        {
            "x": 8625,
            "y": 725,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "AGONIZING",
            "angle": 0,
            "story": false
        },
        {
            "x": 9500,
            "y": 1525,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "have fun on this pushbox",
            "angle": 0,
            "story": false
        },
        {
            "x": 10050,
            "y": -25,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "TERRORIZING",
            "angle": 0,
            "story": false
        },
        {
            "x": 10050,
            "y": 125,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Here we go.",
            "angle": 0,
            "story": false
        },
        {
            "x": 11275,
            "y": 525,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "CATACLYSMIC",
            "angle": 0,
            "story": false
        },
        {
            "x": 11275,
            "y": 725,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Keep fighting.",
            "angle": 0,
            "story": false
        },
        {
            "x": 12500,
            "y": 415,
            "w": 25,
            "h": 25,
            "size": 13,
            "text": "Welcome to the Final Stretch",
            "angle": 0,
            "story": false
        },
        {
            "x": 12500,
            "y": 430,
            "w": 25,
            "h": 25,
            "size": 13,
            "text": "(It's on a softlock. Don't die)",
            "angle": 0,
            "story": false
        },
        {
            "x": 12500,
            "y": 650,
            "w": 25,
            "h": 25,
            "size": 25,
            "text": "RIP",
            "angle": 0,
            "story": false
        },
        {
            "x": 13475,
            "y": 760,
            "w": 25,
            "h": 25,
            "size": 10,
            "text": "if u died",
            "angle": 0,
            "story": false
        },
        {
            "x": 13475,
            "y": 770,
            "w": 25,
            "h": 25,
            "size": 10,
            "text": "here,",
            "angle": 0,
            "story": false
        },
        {
            "x": 13475,
            "y": 790,
            "w": 25,
            "h": 25,
            "size": 14,
            "text": "u suck",
            "angle": 0,
            "story": false
        },
        {
            "x": 14925,
            "y": 175,
            "w": 25,
            "h": 25,
            "size": 150,
            "text": "GG",
            "angle": 0,
            "story": false
        },
        {
            "x": 14825,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 50,
            "text": "Turn back.",
            "angle": 0,
            "story": false
        },
        {
            "x": 18100,
            "y": -25,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "GRASS",
            "angle": 0,
            "story": false
        },
        {
            "x": 18100,
            "y": 225,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Top left to go back.",
            "angle": 0,
            "story": false
        },
        {
            "x": 18100,
            "y": 250,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "You have no chance.",
            "angle": 0,
            "story": false
        },
        {
            "x": 19575,
            "y": 575,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "SNOW",
            "angle": 0,
            "story": false
        },
        {
            "x": 19575,
            "y": 775,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Have fun!",
            "angle": 0,
            "story": false
        },
        {
            "x": 19975,
            "y": 575,
            "w": 25,
            "h": 25,
            "size": 10,
            "text": "Low snow - looks possible but it's not due to friction",
            "angle": 0,
            "story": false
        },
        {
            "x": 20125,
            "y": 875,
            "w": 25,
            "h": 25,
            "size": 10,
            "text": "Mid snow - just pixels off being possible",
            "angle": 0,
            "story": false
        },
        {
            "x": 19675,
            "y": 1075,
            "w": 25,
            "h": 25,
            "size": 10,
            "text": "High snow - Just no. No.",
            "angle": 0,
            "story": false
        }
    ];

    const str = convertOldExMap(obs, enemies, safes, texts, counter);
    
    eval(str);

    mapDimensions.x=20500 * 2;
    mapDimensions.y=1600 * 2;

    spawnPosition.x=150;
    spawnPosition.y=150;
    window.respawnPlayer();
    colors.background='#55894d'; colors.tile='#8bc482';

    C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=asTqGTrsB8M'
    });
}

// old converter loop:
/*
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
*/

// Old type map
/*
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
            const p = {timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:params.cdmult};

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
            p.maxJumpCooldown = 20 * 16.6;
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
    'ship': {
        type: [1,[],[27]],
        customMap: (params) => {
            return {
                changeShipStateTo: params.state,
                initialShipAngle: -Math.PI / 2,
                shipTurnSpeed: Math.PI / 800
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
            let xv${counter} = Math.cos(dir) * ${projectileParams.speed};
            let yv${counter} = Math.sin(dir) * ${projectileParams.speed};
            C(0,[3],[1],{r:${projectileParams.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                window.tickFns.push(()=>{
                    for(let i = 0; i < obstacles.length; i++){
                        if(obstacles[i] === e) {obstacles.splice(i,1); break;}
                    }
                    /*for(let key in window.idToObs){
                        if(window.idToObs[key] === e){delete window.idToObs[key]; break;}
                    }
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

*/

})();