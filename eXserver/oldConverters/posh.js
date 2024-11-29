(async () => {
    const shared = (await import('/shared/shared.js')).default;
    await import('/maps/_converter.js');
    const convertOldExMap = shared.convertOldExMap;
    const C = shared.C;
    let counter = 0;

    const obs = [
        {
            "x": 5600,
            "y": 0,
            "w": 250,
            "h": 1000,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": -3000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 5875,
            "y": 900,
            "w": 650,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 500,
            "w": 750,
            "h": 500,
            "type": "platformer",
            "force": 2800,
            "dir": {
                "x": 0,
                "y": 2800
            },
            "direction": "down",
            "jumpHeight": 120,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 3600,
            "y": 350,
            "w": 550,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 1,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 3600,
            "y": 450,
            "w": 100,
            "h": 50,
            "type": "grav",
            "force": 2000,
            "dir": {
                "x": 2000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3675,
            "y": 450,
            "w": 25,
            "h": 50,
            "type": "tp",
            "tpx": 3975,
            "tpy": 975,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3600,
            "y": 350,
            "w": 100,
            "h": 100,
            "type": "grav",
            "force": 2000,
            "dir": {
                "x": 0,
                "y": 2000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 4150,
            "y": 0,
            "w": 200,
            "h": 400,
            "type": "grav",
            "force": 4500,
            "dir": {
                "x": 0,
                "y": 4500
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3950,
            "y": 0,
            "w": 400,
            "h": 200,
            "type": "grav",
            "force": 4500,
            "dir": {
                "x": 4500,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 4150,
            "y": 200,
            "w": 200,
            "h": 200,
            "type": "grav",
            "force": 4500,
            "dir": {
                "x": -4500,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 3700,
            "y": 350,
            "w": 450,
            "h": 50,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": -3000,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 3675,
            "y": 425,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        3675,
                        500
                    ],
                    [
                        3675,
                        550
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3675,
                        350
                    ],
                    [
                        3675,
                        300
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 300,
            "h": 300,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 5600,
            "y": 0,
            "w": 50,
            "h": 350,
            "type": "tp",
            "tpx": 6175,
            "tpy": 175,
            "bgColor": "#4a1698",
            "tileColor": "#6b53ac",
            "changeColor": false,
            "inView": false
        },
        {
            "points": [
                [
                    5650,
                    650
                ],
                [
                    5700,
                    725
                ],
                [
                    5650,
                    800
                ],
                [
                    5600,
                    775
                ],
                [
                    5600,
                    675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5600,
                "right": 5700,
                "top": 650,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3700,
            "y": 400,
            "w": 650,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 3625,
                "y": 25
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#001224",
            "tileColor": "#0a4075",
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 5,
            "inView": false
        },
        {
            "x": 4150,
            "y": 200,
            "radius": 275,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        4150,
                        0
                    ],
                    [
                        4150,
                        -75
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4150,
                        400
                    ],
                    [
                        4150,
                        475
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 200,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1925,
            "y": 0,
            "w": 375,
            "h": 100,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 1901.3333333319945,
            "y": 3.6576117734697134e-14,
            "w": 150,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    1900,
                    0
                ],
                [
                    2200,
                    0
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "pointOn": {
                "x": 2200,
                "y": 0
            },
            "pointTo": {
                "x": 1900,
                "y": 0
            },
            "xv": -160,
            "yv": 1.9594348786357652e-14,
            "inView": false
        },
        {
            "x": 2198.6666666680053,
            "y": 0,
            "w": 150,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    1900,
                    0
                ],
                [
                    2200,
                    0
                ]
            ],
            "speed": 160,
            "currentPoint": 0,
            "pointOn": {
                "x": 1900,
                "y": 0
            },
            "pointTo": {
                "x": 2200,
                "y": 0
            },
            "xv": 160,
            "yv": 0,
            "inView": false
        },
        {
            "x": 2650,
            "y": 600,
            "w": 600,
            "h": 400,
            "type": "platformer",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": 2600
            },
            "direction": "down",
            "jumpHeight": -200,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 1900,
            "y": -25,
            "w": 425,
            "h": 250,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 2198.6666666680053,
            "y": 0,
            "w": 150,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    1900,
                    0
                ],
                [
                    2200,
                    0
                ]
            ],
            "speed": 160,
            "currentPoint": 0,
            "pointOn": {
                "x": 1900,
                "y": 0
            },
            "pointTo": {
                "x": 2200,
                "y": 0
            },
            "xv": 160,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1901.3333333319945,
            "y": 3.6576117734697134e-14,
            "w": 150,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    1900,
                    0
                ],
                [
                    2200,
                    0
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "pointOn": {
                "x": 2200,
                "y": 0
            },
            "pointTo": {
                "x": 1900,
                "y": 0
            },
            "xv": -160,
            "yv": 1.9594348786357652e-14,
            "inView": false
        },
        {
            "x": 1650,
            "y": 300,
            "w": 100,
            "h": 650,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 1650,
            "y": 250,
            "w": 100,
            "h": 700,
            "type": "grav",
            "force": 2500,
            "dir": {
                "x": 0,
                "y": 2500
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 1800,
            "y": 225,
            "w": 550,
            "h": 575,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "speed",
            "speedInc": 0.65,
            "inView": false
        },
        {
            "x": 325,
            "y": 575,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 1.780235837034216,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        299.0110386477801,
                        697.2684500917258
                    ],
                    [
                        288.6154541068922,
                        746.175830128416
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        200,
                        575
                    ],
                    [
                        150,
                        575
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 1800,
            "y": 800,
            "w": 125,
            "h": 50,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 1925,
            "y": 800,
            "w": 25,
            "h": 25,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 1050,
            "y": 600,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1050,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1350,
            "y": 150,
            "w": 50,
            "h": 200,
            "type": "grav",
            "force": 500,
            "dir": {
                "x": 0,
                "y": -500
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 200,
            "y": 700,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 600,
            "y": 0,
            "w": 300,
            "h": 150,
            "type": "grav",
            "force": 1700,
            "dir": {
                "x": 1700,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "points": [
                [
                    2275,
                    400
                ],
                [
                    2300,
                    450
                ],
                [
                    2250,
                    450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2250,
                "right": 2300,
                "top": 400,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2275,
            "y": 450,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 1325,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "grav",
            "force": 4000,
            "dir": {
                "x": 0,
                "y": -4000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 1050,
            "y": 900,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1450,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "grav",
            "force": 4000,
            "dir": {
                "x": 0,
                "y": 4000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 1125,
            "y": 325,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": -29439.666666679605,
            "rotateSpeed": -110,
            "pivotX": 1125,
            "pivotY": 325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1125,
            "y": 125,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 29439.666666679605,
            "rotateSpeed": 110,
            "pivotX": 1125,
            "pivotY": 125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 775,
            "y": 175,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": -3.141592653589793,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        600,
                        174.99999999999997
                    ],
                    [
                        475,
                        174.99999999999997
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        775,
                        0
                    ],
                    [
                        775,
                        -125
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
            "x": 450,
            "y": 450,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": -1.9198621771937625,
            "endAngle": 1.0471975511965976,
            "startPolygon": {
                "points": [
                    [
                        415.7979856674331,
                        356.0307379214091
                    ],
                    [
                        398.6969785011497,
                        309.04610688211375
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        500,
                        536.6025403784439
                    ],
                    [
                        525,
                        579.9038105676658
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 1375,
            "y": 600,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1200,
            "y": 775,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1375,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1400,
            "y": 800,
            "radius": 250,
            "type": "circle-hollow-slice",
            "startAngle": 5.585053606381854,
            "endAngle": 4.4505895925855405,
            "startPolygon": {
                "points": [
                    [
                        1553.2088886237955,
                        671.4424780626921
                    ],
                    [
                        1591.5111107797445,
                        639.3030975783652
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1348.2361909794959,
                        606.8148347421863
                    ],
                    [
                        1335.29523872437,
                        558.5185434277329
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 200,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1550,
            "y": 775,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1500,
            "y": 550,
            "radius": 100,
            "type": "circle-hollow-slice",
            "startAngle": -1.5707963267948966,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        1500,
                        500
                    ],
                    [
                        1500,
                        450
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1550,
                        550
                    ],
                    [
                        1600,
                        550
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 50,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 500,
            "y": 425,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": false,
            "inView": true
        },
        {
            "x": 2050,
            "y": 975,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 3.3161255787892263,
            "endAngle": -0.17453292519943295,
            "startPolygon": {
                "points": [
                    [
                        1902.2788370481687,
                        948.9527733499605
                    ],
                    [
                        1853.0384493975585,
                        940.270364466614
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2197.721162951831,
                        948.9527733499605
                    ],
                    [
                        2246.9615506024415,
                        940.270364466614
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 150,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2350,
            "y": 0,
            "w": 250,
            "h": 700,
            "type": "grav",
            "force": 1500,
            "dir": {
                "x": 0,
                "y": -1500
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 2360.4166666718165,
            "y": 375,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2350,
                    375
                ],
                [
                    2550,
                    375
                ]
            ],
            "speed": 125,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2550,
                "y": 375
            },
            "pointTo": {
                "x": 2350,
                "y": 375
            },
            "xv": -125,
            "yv": 1.5308084989341916e-14,
            "inView": false
        },
        {
            "x": 3150,
            "y": 0,
            "w": 100,
            "h": 600,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 0,
                "y": -5000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 3200,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "cure",
            "inView": false
        },
        {
            "x": 3450,
            "y": 50,
            "w": 100,
            "h": 950,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 2975,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 2675,
            "tpy": 525,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3025,
            "y": 125,
            "w": 50,
            "h": 250,
            "type": "rotate-lava",
            "angle": -29349.666666679484,
            "rotateSpeed": -110,
            "pivotX": 3025,
            "pivotY": 125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 900,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 2,
            "inView": false
        },
        {
            "x": 600,
            "y": 150,
            "w": 300,
            "h": 850,
            "type": "grav",
            "force": 1700,
            "dir": {
                "x": 0,
                "y": -1700
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 350,
            "y": 300,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 450,
            "y": 0,
            "w": 100,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 50,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 25,
            "tpy": 525,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": true
        },
        {
            "x": 50,
            "y": 150,
            "w": 50,
            "h": 300,
            "type": "size",
            "size": 12,
            "inView": true
        },
        {
            "x": 50,
            "y": 450,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 325,
            "y": 575,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.17453292519943295,
            "endAngle": 1.361356816555577,
            "startPolygon": {
                "points": [
                    [
                        448.100969126526,
                        596.7060222083663
                    ],
                    [
                        497.3413567771364,
                        605.3884310917128
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        350.9889613522199,
                        697.2684500917258
                    ],
                    [
                        361.3845458931079,
                        746.175830128416
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 550,
            "y": 0,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 325,
            "y": 575,
            "w": 50,
            "h": 225,
            "type": "rotate-lava",
            "angle": 25455.5,
            "rotateSpeed": 90,
            "pivotX": 325,
            "pivotY": 575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 115.2443057161611,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 100,
            "y": 350,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": true
        },
        {
            "x": 5600,
            "y": 50,
            "w": 250,
            "h": 950,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 50,
            "y": 200,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": true
        },
        {
            "x": 100,
            "y": 100,
            "w": 100,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 150,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 25,
            "tpy": 900,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": true
        },
        {
            "x": 150,
            "y": 500,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 200,
            "y": 750,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 50,
            "y": 200,
            "w": 50,
            "h": 250,
            "type": "grav",
            "force": 1000,
            "dir": {
                "x": 0,
                "y": -1000
            },
            "direction": "up",
            "inView": true
        },
        {
            "x": 250,
            "y": 500,
            "w": 150,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 500,
            "y": 600,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 0,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 950,
                "y": 50
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    600,
                    550
                ],
                [
                    750,
                    675
                ],
                [
                    600,
                    800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 600,
                "right": 750,
                "top": 550,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    900,
                    375
                ],
                [
                    900,
                    625
                ],
                [
                    750,
                    500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 750,
                "right": 900,
                "top": 375,
                "bottom": 625
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 817.5,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    600,
                    150
                ],
                [
                    850,
                    150
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 600,
                "y": 150
            },
            "pointTo": {
                "x": 850,
                "y": 150
            },
            "xv": 150,
            "yv": 0,
            "inView": true
        },
        {
            "points": [
                [
                    600,
                    200
                ],
                [
                    750,
                    325
                ],
                [
                    600,
                    450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 600,
                "right": 750,
                "top": 200,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 100,
            "y": 900,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        100,
                        1000
                    ],
                    [
                        100.00000000000001,
                        1050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        99.99999999999999,
                        800
                    ],
                    [
                        99.99999999999997,
                        750
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 800,
            "y": 900,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        900,
                        900
                    ],
                    [
                        950,
                        900
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        800,
                        1000
                    ],
                    [
                        800,
                        1050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    750,
                    775
                ],
                [
                    825,
                    850
                ],
                [
                    750,
                    925
                ],
                [
                    675,
                    850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 675,
                "right": 825,
                "top": 775,
                "bottom": 925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 632.5,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    600,
                    150
                ],
                [
                    850,
                    150
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 850,
                "y": 150
            },
            "pointTo": {
                "x": 600,
                "y": 150
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": true
        },
        {
            "x": 75,
            "y": 25,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 175,
            "y": 75,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 150,
            "y": 75,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 50,
            "y": -25,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 875,
            "y": 0,
            "w": 25,
            "h": 100,
            "type": "color",
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "inView": false
        },
        {
            "x": 900,
            "y": 100,
            "w": 100,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1300,
            "y": 450,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1150,
            "y": 550,
            "w": 50,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1300,
            "y": 400,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 7,
            "currentCoins": 7,
            "inView": false
        },
        {
            "x": 1350,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 1675,
            "tpy": 25,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 1,
            "inView": true
        },
        {
            "x": 1450,
            "y": 400,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 8,
            "currentCoins": 8,
            "inView": false
        },
        {
            "x": 75,
            "y": 675,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1350,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1650,
            "y": 950,
            "w": 100,
            "h": 50,
            "type": "tp",
            "tpx": 1825,
            "tpy": 975,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1800,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 3,
            "inView": false
        },
        {
            "x": 1800,
            "y": 950,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 1825,
                "y": 975
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1800,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 2050,
            "y": 975,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 420.0120300511652,
            "endAngle": 422.1064251535545,
            "startPolygon": {
                "points": [
                    [
                        2135.8576632339673,
                        852.0021883771802
                    ],
                    [
                        2164.4768843119564,
                        811.0029178362403
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2113.5903978588026,
                        1110.8538232813462
                    ],
                    [
                        2134.78719714507,
                        1156.1384310417948
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 150,
            "toRotate": true,
            "rotateSpeed": 1.4835298641951802,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1750,
            "y": 900,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2200,
            "y": 800,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2050,
            "y": 975,
            "w": 300,
            "h": 50,
            "type": "rotate-lava",
            "angle": 11464.416666663868,
            "rotateSpeed": 42.5,
            "pivotX": 2050,
            "pivotY": 975,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 152.0690632574555,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1900,
            "y": 1000,
            "w": 300,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2050,
            "y": 975,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2000,
            "y": 975,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 700,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2150,
            "y": 700,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2625,
            "y": 50,
            "w": 25,
            "h": 675,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#003367",
            "tileColor": "#00468c",
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 2675,
                "y": 25
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2250,
            "y": 700,
            "w": 400,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2300,
            "y": 0,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2300,
            "y": 250,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2800,
            "y": 125,
            "w": 228,
            "h": 50,
            "type": "rotate-lava",
            "angle": 29439.666666679605,
            "rotateSpeed": 110,
            "pivotX": 2800,
            "pivotY": 125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 116.70903992407786,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 2800,
            "y": 325,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": -29439.666666679605,
            "rotateSpeed": -110,
            "pivotX": 2800,
            "pivotY": 325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 3025,
            "y": 325,
            "w": 245,
            "h": 50,
            "type": "rotate-lava",
            "angle": 29439.666666679605,
            "rotateSpeed": 110,
            "pivotX": 3025,
            "pivotY": 325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 125.02499750049988,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1000,
            "y": 550,
            "w": 50,
            "h": 475,
            "type": "roundedcorners",
            "circles": [
                {
                    "x": 1010,
                    "y": 560,
                    "radius": 10
                },
                {
                    "x": 1040,
                    "y": 560,
                    "radius": 10
                },
                {
                    "x": 1010,
                    "y": 1015,
                    "radius": 10
                },
                {
                    "x": 1040,
                    "y": 1015,
                    "radius": 10
                }
            ],
            "rects": [
                {
                    "x": 1010,
                    "y": 550,
                    "w": 30,
                    "h": 475
                },
                {
                    "x": 1000,
                    "y": 560,
                    "w": 50,
                    "h": 455
                }
            ],
            "roundRadius": 10,
            "inView": false
        },
        {
            "x": 1100,
            "y": 600,
            "w": 50,
            "h": 475,
            "type": "roundedcorners",
            "circles": [
                {
                    "x": 1110,
                    "y": 610,
                    "radius": 10
                },
                {
                    "x": 1140,
                    "y": 610,
                    "radius": 10
                },
                {
                    "x": 1110,
                    "y": 1065,
                    "radius": 10
                },
                {
                    "x": 1140,
                    "y": 1065,
                    "radius": 10
                }
            ],
            "rects": [
                {
                    "x": 1110,
                    "y": 600,
                    "w": 30,
                    "h": 475
                },
                {
                    "x": 1100,
                    "y": 610,
                    "w": 50,
                    "h": 455
                }
            ],
            "roundRadius": 10,
            "inView": false
        },
        {
            "x": 975,
            "y": 550,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "mark",
            "time": 12.5,
            "inView": false
        },
        {
            "x": 2800,
            "y": 125,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 50,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2800,
            "y": 125,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        2800,
                        0
                    ],
                    [
                        2800,
                        -50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2800,
                        250
                    ],
                    [
                        2800,
                        300
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2800,
            "y": 325,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2800,
            "y": 325,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        2800,
                        450
                    ],
                    [
                        2800,
                        500
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2800,
                        200
                    ],
                    [
                        2800,
                        150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 175,
            "w": 25,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3025,
            "y": 325,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3025,
            "y": 325,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        2900,
                        325
                    ],
                    [
                        2850,
                        325
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3025,
                        200
                    ],
                    [
                        3025,
                        150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2825,
            "y": 325,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        2950,
                        325
                    ],
                    [
                        3000,
                        325
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2825,
                        450
                    ],
                    [
                        2825,
                        500
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2800,
            "y": 450,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2825,
            "y": 325,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3025,
            "y": 125,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3025,
            "y": 125,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        3025,
                        0
                    ],
                    [
                        3025,
                        -50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3025,
                        250
                    ],
                    [
                        3025,
                        300
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 400,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 450,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3150,
            "y": -25,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 50,
            "w": 25,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2825,
            "y": 450,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2925,
            "y": 400,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3150,
            "y": 125,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3100,
            "y": 250,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 500,
            "w": 600,
            "h": 50,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 3200,
            "y": 0,
            "w": 50,
            "h": 550,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 2975,
            "y": 275,
            "w": 175,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2950,
            "y": 450,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3150,
            "y": 300,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 450,
            "w": 600,
            "h": 50,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 3150,
            "y": 0,
            "w": 50,
            "h": 550,
            "type": "size",
            "size": 10,
            "inView": false
        },
        {
            "x": 3200,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 450,
            "w": 650,
            "h": 100,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 5000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3250,
            "y": 0,
            "w": 50,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3075,
            "y": 375,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        3250,
                        375
                    ],
                    [
                        3300,
                        375
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3075,
                        550
                    ],
                    [
                        3075,
                        600
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 175,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 550,
            "w": 650,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 3200,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3200,
            "y": 500,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 3075,
            "y": 375,
            "radius": 125,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 450,
            "w": 425,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3150,
            "y": 0,
            "w": 50,
            "h": 375,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3200,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 2675,
            "tpy": 975,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3250,
            "y": 0,
            "w": 50,
            "h": 1000,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 75,
            "y": 675,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        150,
                        675
                    ],
                    [
                        200,
                        675
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        0,
                        675
                    ],
                    [
                        -50,
                        675
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1150,
            "y": 575,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1175,
            "y": 950,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1550,
            "y": 950,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1200,
            "y": 550,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 725,
            "w": 75,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1300,
            "y": 1000,
            "w": 150,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1417.5,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1350,
                    300
                ],
                [
                    1550,
                    300
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 1350,
                "y": 300
            },
            "pointTo": {
                "x": 1550,
                "y": 300
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1450,
            "y": 332.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1450,
                    400
                ],
                [
                    1450,
                    0
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 1450,
                "y": 400
            },
            "pointTo": {
                "x": 1450,
                "y": 0
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 1482.5,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1350,
                    100
                ],
                [
                    1550,
                    100
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1550,
                "y": 100
            },
            "pointTo": {
                "x": 1350,
                "y": 100
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 1300,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1400,
            "y": 50,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1525,
            "y": 100,
            "w": 25,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1400,
            "y": 100,
            "w": 25,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1450,
            "y": 375,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1500,
            "y": 350,
            "radius": 141,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1600,
                        350
                    ],
                    [
                        1641,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1500,
                        450
                    ],
                    [
                        1500,
                        491
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1500,
            "y": 100,
            "radius": 135,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        1500,
                        0
                    ],
                    [
                        1500,
                        -35
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1600,
                        100
                    ],
                    [
                        1635,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1450,
            "y": 100,
            "radius": 50,
            "type": "circle-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        1450,
                        100
                    ],
                    [
                        1400,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1450,
                        100
                    ],
                    [
                        1450,
                        50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1500,
            "y": 100,
            "radius": 50,
            "type": "circle-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        1500,
                        100
                    ],
                    [
                        1500,
                        50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1500,
                        100
                    ],
                    [
                        1550,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1425,
            "y": 75,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1450,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1500,
            "y": 350,
            "radius": 50,
            "type": "circle-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1500,
                        350
                    ],
                    [
                        1550,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1500,
                        350
                    ],
                    [
                        1500,
                        400
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1450,
            "y": 350,
            "radius": 50,
            "type": "circle-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        1450,
                        350
                    ],
                    [
                        1450,
                        400
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1450,
                        350
                    ],
                    [
                        1400,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1425,
            "y": 350,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1450,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1400,
            "y": 150,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1500,
            "y": 150,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1425,
            "y": 100,
            "w": 100,
            "h": 250,
            "type": "trans",
            "collide": true,
            "opaq": 0.8,
            "inView": false
        },
        {
            "x": 500,
            "y": 550,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 500,
            "y": 600,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 450,
            "y": 650,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 475,
            "y": 625,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    530,
                    515
                ],
                [
                    540,
                    610
                ],
                [
                    460,
                    570
                ]
            ],
            "type": "poly",
            "most": {
                "left": 460,
                "right": 540,
                "top": 515,
                "bottom": 610
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 50,
            "y": 475,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1775,
            "y": 100,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1775,
                        0
                    ],
                    [
                        1775,
                        -50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1775,
                        200
                    ],
                    [
                        1775,
                        250
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1125,
            "y": 450,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 975,
            "y": 450,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 975,
            "y": 475,
            "w": 75,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1150,
            "y": 600,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1400,
            "y": 50,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1775,
            "y": 250,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1650,
            "y": -50,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1300,
            "y": 0,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1600,
            "y": 50,
            "w": 50,
            "h": 1000,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1600,
            "y": -25,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1575,
            "y": -25,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1550,
            "y": 250,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 0.6981317007977318,
            "startPolygon": {
                "points": [
                    [
                        1612.5,
                        250
                    ],
                    [
                        1675,
                        250
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1597.8777776949362,
                        290.1742256054087
                    ],
                    [
                        1645.7555553898724,
                        330.3484512108174
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 62.5,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1775,
            "y": 350,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 3.490658503988659,
            "startPolygon": {
                "points": [
                    [
                        1650,
                        350
                    ],
                    [
                        1625,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1657.5384224017614,
                        307.2474820842914
                    ],
                    [
                        1634.0461068821137,
                        298.6969785011497
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    375
                ],
                [
                    1700,
                    400
                ],
                [
                    1650,
                    425
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1700,
                "top": 375,
                "bottom": 425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    600
                ],
                [
                    1750,
                    650
                ],
                [
                    1700,
                    625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1750,
                "top": 600,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    825
                ],
                [
                    1700,
                    850
                ],
                [
                    1650,
                    875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1700,
                "top": 825,
                "bottom": 875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    425
                ],
                [
                    1700,
                    450
                ],
                [
                    1650,
                    475
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1700,
                "top": 425,
                "bottom": 475
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    650
                ],
                [
                    1750,
                    700
                ],
                [
                    1700,
                    675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1750,
                "top": 650,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    875
                ],
                [
                    1700,
                    900
                ],
                [
                    1650,
                    925
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1700,
                "top": 875,
                "bottom": 925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    400
                ],
                [
                    1675,
                    425
                ],
                [
                    1650,
                    450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1675,
                "top": 400,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    625
                ],
                [
                    1750,
                    675
                ],
                [
                    1725,
                    650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1725,
                "right": 1750,
                "top": 625,
                "bottom": 675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    850
                ],
                [
                    1675,
                    875
                ],
                [
                    1650,
                    900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1675,
                "top": 850,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2125,
            "y": 800,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2175,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1875,
            "y": 650,
            "w": 250,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2325,
            "y": 804.5833333320459,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2325,
                    750
                ],
                [
                    2325,
                    950
                ]
            ],
            "speed": 175,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2325,
                "y": 950
            },
            "pointTo": {
                "x": 2325,
                "y": 750
            },
            "xv": 1.0715659492539341e-14,
            "yv": -175,
            "inView": false
        },
        {
            "x": 2475,
            "y": 895.4166666679541,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2475,
                    750
                ],
                [
                    2475,
                    950
                ]
            ],
            "speed": 175,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 2475,
                "y": 750
            },
            "pointTo": {
                "x": 2475,
                "y": 950
            },
            "xv": 1.0715659492539341e-14,
            "yv": 175,
            "inView": false
        },
        {
            "x": 2468.125,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2550,
                    850
                ],
                [
                    2250,
                    850
                ]
            ],
            "speed": 262.5,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2250,
                "y": 850
            },
            "pointTo": {
                "x": 2550,
                "y": 850
            },
            "xv": 262.5,
            "yv": 0,
            "inView": false
        },
        {
            "x": 2275,
            "y": 900,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 900,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 800,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2275,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2225,
            "y": 800,
            "w": 325,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2250,
            "y": 800,
            "w": 25,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2250,
            "y": 925,
            "w": 300,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2275,
            "y": 825,
            "w": 250,
            "h": 100,
            "type": "trans",
            "collide": true,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 1750,
            "y": 975,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1750,
            "y": 1025,
            "w": 900,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1850,
            "y": 700,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1750,
            "y": 275,
            "w": 50,
            "h": 725,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2525,
            "y": 800,
            "w": 25,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2025,
                    500
                ],
                [
                    2125,
                    500
                ],
                [
                    2075,
                    575
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2025,
                "right": 2125,
                "top": 500,
                "bottom": 575
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2100,
                    275
                ],
                [
                    2100,
                    425
                ],
                [
                    2000,
                    350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 2100,
                "top": 275,
                "bottom": 425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2100,
            "y": 350,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    225
                ],
                [
                    2000,
                    275
                ],
                [
                    1950,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1950,
                "right": 2000,
                "top": 225,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1975,
                    250
                ],
                [
                    2025,
                    250
                ],
                [
                    2000,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1975,
                "right": 2025,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2000,
            "y": 250,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "points": [
                [
                    1875,
                    175
                ],
                [
                    1950,
                    225
                ],
                [
                    1875,
                    275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1875,
                "right": 1950,
                "top": 175,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1875,
            "y": 225,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 2050,
            "y": 400,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.1887902047863905,
            "startPolygon": {
                "points": [
                    [
                        1800,
                        400.00000000000006
                    ],
                    [
                        1750,
                        400.00000000000006
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1925,
                        183.49364905389038
                    ],
                    [
                        1899.9999999999998,
                        140.19237886466846
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1875,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1900,
            "y": -25,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2300,
            "y": -75,
            "w": 50,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2200,
            "y": 150,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2275,
            "y": 200,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2025,
            "y": 100,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1925,
            "y": -150,
            "w": 425,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2300,
            "y": -50,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1875,
            "y": 0,
            "w": 50,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1875,
            "y": -50,
            "w": 475,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2300,
            "y": -25,
            "w": 50,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2075,
                    -25
                ],
                [
                    2175,
                    -25
                ],
                [
                    2125,
                    50
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2075,
                "right": 2175,
                "top": -25,
                "bottom": 50
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2050,
                    50
                ],
                [
                    2100,
                    125
                ],
                [
                    2000,
                    125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2000,
                "right": 2100,
                "top": 50,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2225,
                    -25
                ],
                [
                    2325,
                    0
                ],
                [
                    2325,
                    125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2225,
                "right": 2325,
                "top": -25,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    50
                ],
                [
                    2250,
                    125
                ],
                [
                    2150,
                    125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2150,
                "right": 2250,
                "top": 50,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1925,
                    -15
                ],
                [
                    2020,
                    -15
                ],
                [
                    1910,
                    160
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1910,
                "right": 2020,
                "top": -15,
                "bottom": 160
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2000,
            "y": 125,
            "w": 250,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1900,
            "y": 100,
            "w": 50,
            "h": 100,
            "type": "roundedcorners",
            "circles": [
                {
                    "x": 1910,
                    "y": 110,
                    "radius": 10
                },
                {
                    "x": 1940,
                    "y": 110,
                    "radius": 10
                },
                {
                    "x": 1910,
                    "y": 190,
                    "radius": 10
                },
                {
                    "x": 1940,
                    "y": 190,
                    "radius": 10
                }
            ],
            "rects": [
                {
                    "x": 1910,
                    "y": 100,
                    "w": 30,
                    "h": 100
                },
                {
                    "x": 1900,
                    "y": 110,
                    "w": 50,
                    "h": 80
                }
            ],
            "roundRadius": 10,
            "inView": false
        },
        {
            "x": 2200,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2025,
            "y": 100,
            "w": 225,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2250,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 2475,
            "tpy": 675,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2300,
            "y": 0,
            "w": 53,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2125,
            "y": 650,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2200,
            "y": 625,
            "w": 125,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2250,
            "y": 575,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2275,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 50,
            "w": 50,
            "h": 650,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2600,
            "y": -25,
            "w": 50,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2539.5833333281835,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2350,
                    50
                ],
                [
                    2550,
                    50
                ]
            ],
            "speed": 125,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 2350,
                "y": 50
            },
            "pointTo": {
                "x": 2550,
                "y": 50
            },
            "xv": 125,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    2350,
                    400
                ],
                [
                    2550,
                    525
                ],
                [
                    2350,
                    650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2350,
                "right": 2550,
                "top": 400,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2600,
                    150
                ],
                [
                    2600,
                    400
                ],
                [
                    2400,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2600,
                "top": 150,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2575,
            "y": 175,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2325,
            "y": 425,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2350,
            "y": 425,
            "w": 50,
            "h": 200,
            "type": "trans",
            "collide": true,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 2550,
            "y": 175,
            "w": 50,
            "h": 200,
            "type": "trans",
            "collide": true,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 2150,
            "y": 750,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1775,
            "y": 850,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1925,
                    600
                ],
                [
                    1975,
                    600
                ],
                [
                    1950,
                    650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1925,
                "right": 1975,
                "top": 600,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2050,
            "y": 400,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.1887902047863905,
            "startPolygon": {
                "points": [
                    [
                        1800,
                        400.00000000000006
                    ],
                    [
                        1750,
                        400.00000000000006
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1925,
                        183.49364905389038
                    ],
                    [
                        1899.9999999999998,
                        140.19237886466846
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2050,
            "y": 400,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 2.234021442552742,
            "startPolygon": {
                "points": [
                    [
                        2050,
                        150
                    ],
                    [
                        2050,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1896.0846311685855,
                        597.0026884016805
                    ],
                    [
                        1865.3015574023025,
                        636.4032260820165
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    2075,
                    425
                ],
                [
                    2125,
                    500
                ],
                [
                    2025,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2025,
                "right": 2125,
                "top": 425,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2075,
            "y": 500,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "points": [
                [
                    1950,
                    575
                ],
                [
                    1950,
                    625
                ],
                [
                    1900,
                    600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1900,
                "right": 1950,
                "top": 575,
                "bottom": 625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1950,
            "y": 600,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 1850,
            "y": 350,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2925,
            "y": 50,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2925,
            "y": 0,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3450,
            "y": 0,
            "w": 100,
            "h": 1000,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": -3000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": -75,
            "y": 100,
            "w": 100,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "points": [
                [
                    3500,
                    650
                ],
                [
                    3425,
                    775
                ],
                [
                    3425,
                    675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3425,
                "right": 3500,
                "top": 650,
                "bottom": 775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3425,
                    650
                ],
                [
                    3500,
                    700
                ],
                [
                    3425,
                    725
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3425,
                "right": 3500,
                "top": 650,
                "bottom": 725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3500,
                    400
                ],
                [
                    3575,
                    425
                ],
                [
                    3575,
                    525
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3500,
                "right": 3575,
                "top": 400,
                "bottom": 525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3575,
                    400
                ],
                [
                    3575,
                    475
                ],
                [
                    3500,
                    450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3500,
                "right": 3575,
                "top": 400,
                "bottom": 475
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3550,
            "y": 0,
            "w": 50,
            "h": 1000,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "points": [
                [
                    3500,
                    150
                ],
                [
                    3425,
                    275
                ],
                [
                    3425,
                    175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3425,
                "right": 3500,
                "top": 150,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3425,
                    150
                ],
                [
                    3500,
                    200
                ],
                [
                    3425,
                    225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3425,
                "right": 3500,
                "top": 150,
                "bottom": 225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3400,
            "y": 0,
            "w": 50,
            "h": 899,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3450,
            "y": 0,
            "w": 100,
            "h": 50,
            "type": "tp",
            "tpx": 3625,
            "tpy": 25,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3325,
            "y": 25,
            "w": 0,
            "h": 0,
            "type": "invpu",
            "amount": 0,
            "maxAmount": 0,
            "inView": false
        },
        {
            "x": 3200,
            "y": 600,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 3350,
            "tpy": 25,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2600,
            "y": 1000,
            "w": 700,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 150,
            "y": 575,
            "w": 51,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 450,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": true
        },
        {
            "x": 150,
            "y": 400,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": true
        },
        {
            "x": 1475,
            "y": 575,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1575,
            "y": 660,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1425,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1550,
            "y": 500,
            "w": 75,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1575,
            "y": 600,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1300,
                    575
                ],
                [
                    1375,
                    575
                ],
                [
                    1375,
                    600
                ],
                [
                    1275,
                    625
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1275,
                "right": 1375,
                "top": 575,
                "bottom": 625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1325,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1375,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": false
        },
        {
            "x": 1400,
            "y": 800,
            "w": 400,
            "h": 50,
            "type": "rotate-lava",
            "angle": 20340.133333341357,
            "rotateSpeed": 76,
            "pivotX": 1400,
            "pivotY": 800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 201.55644370746373,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1400,
            "y": 800,
            "radius": 150,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 325,
            "y": 125,
            "w": 50,
            "h": 225,
            "type": "rotate-lava",
            "angle": 25480.5,
            "rotateSpeed": 90,
            "pivotX": 325,
            "pivotY": 125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 115.2443057161611,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 450,
            "y": 450,
            "w": 50,
            "h": 175,
            "type": "rotate-lava",
            "angle": 25400.5,
            "rotateSpeed": 90,
            "pivotX": 450,
            "pivotY": 450,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 91.00137361600648,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 325,
            "y": 325,
            "w": 50,
            "h": 225,
            "type": "rotate-lava",
            "angle": -25480.5,
            "rotateSpeed": -90,
            "pivotX": 325,
            "pivotY": 325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 115.2443057161611,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 325,
            "y": 125,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 325,
            "y": 325,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 325,
            "y": 575,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 500,
            "y": 595,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 3.3161255787892263,
            "endAngle": 4.363323129985823,
            "startPolygon": {
                "points": [
                    [
                        401.5192246987792,
                        577.635182233307
                    ],
                    [
                        327.6586432228636,
                        564.6115689082872
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        465.79798566743307,
                        501.0307379214092
                    ],
                    [
                        440.14647491800787,
                        430.5537913624661
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 250,
            "y": 475,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 250,
            "y": 450,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 450,
            "y": 455,
            "radius": 50,
            "type": "circle-slice",
            "startAngle": -3.141592653589793,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        450,
                        455
                    ],
                    [
                        400,
                        455
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        450,
                        455
                    ],
                    [
                        450,
                        505
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 0,
            "y": 100,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 325,
            "y": 125,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        325,
                        0
                    ],
                    [
                        324.99999999999994,
                        -100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        325,
                        250
                    ],
                    [
                        325,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 385,
            "y": 362.5,
            "w": 100,
            "h": 25,
            "type": "rotate-normal",
            "angle": -28,
            "rotateSpeed": 0,
            "pivotX": 385,
            "pivotY": 362.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 375,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 400,
            "y": 300,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 325,
            "y": 325,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        200,
                        325
                    ],
                    [
                        100,
                        325
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        325,
                        200
                    ],
                    [
                        324.99999999999994,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": true
        },
        {
            "x": 1125,
            "y": 325,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        1125,
                        450
                    ],
                    [
                        1125,
                        500
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1000,
                        325
                    ],
                    [
                        950,
                        325
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 100,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 325,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        1000,
                        325
                    ],
                    [
                        900,
                        325
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1125,
                        200
                    ],
                    [
                        1125,
                        100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1125,
            "y": 325,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1125,
            "y": 125,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 100,
            "w": 175,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 250,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 125,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1125,
                        0
                    ],
                    [
                        1125,
                        -100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1125,
                        250
                    ],
                    [
                        1125,
                        350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1075,
            "y": 475,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 575,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": -3.141592653589793,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1050,
                        575
                    ],
                    [
                        1000,
                        575
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1125,
                        500
                    ],
                    [
                        1125,
                        450
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1100,
            "y": 450,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1925,
                    375
                ],
                [
                    1950,
                    425
                ],
                [
                    1900,
                    425
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1900,
                "right": 1950,
                "top": 375,
                "bottom": 425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1925,
            "y": 425,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 2275,
            "y": -75,
            "w": 175,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2900,
            "y": -25,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2800,
                    500
                ],
                [
                    2850,
                    500
                ],
                [
                    2825,
                    525
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2800,
                "right": 2850,
                "top": 500,
                "bottom": 525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3100,
                    475
                ],
                [
                    3100,
                    500
                ],
                [
                    3075,
                    525
                ],
                [
                    3050,
                    500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3050,
                "right": 3100,
                "top": 475,
                "bottom": 525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2950,
                    525
                ],
                [
                    2975,
                    550
                ],
                [
                    2925,
                    550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2925,
                "right": 2975,
                "top": 525,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3250,
                    300
                ],
                [
                    3250,
                    350
                ],
                [
                    3225,
                    325
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3225,
                "right": 3250,
                "top": 300,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3200,
                    175
                ],
                [
                    3225,
                    200
                ],
                [
                    3200,
                    225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3200,
                "right": 3225,
                "top": 175,
                "bottom": 225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3250,
                    50
                ],
                [
                    3250,
                    100
                ],
                [
                    3225,
                    75
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3225,
                "right": 3250,
                "top": 50,
                "bottom": 100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3050,
            "y": 800,
            "radius": 250,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        3250,
                        800
                    ],
                    [
                        3300,
                        800
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3050,
                        1000
                    ],
                    [
                        3050,
                        1050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 200,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2850,
            "y": 800,
            "radius": 250,
            "type": "circle-hollow-slice",
            "startAngle": -3.141592653589793,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        2650,
                        800
                    ],
                    [
                        2600,
                        800
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2850,
                        600
                    ],
                    [
                        2850,
                        550
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 200,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3200,
            "y": 950,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2625,
            "y": 575,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3300,
            "y": 50,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 35,
            "currentStrength": 35,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 350,
            "y": 700,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1775,
            "y": 100,
            "w": 185,
            "h": 50,
            "type": "rotate-lava",
            "angle": 24087,
            "rotateSpeed": 90,
            "pivotX": 1775,
            "pivotY": 100,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 95.818839483684,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1775,
            "y": 100,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1625,
            "y": 50,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1775,
            "y": 250,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        1675,
                        250
                    ],
                    [
                        1600,
                        250.00000000000003
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1775,
                        150
                    ],
                    [
                        1775,
                        75
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 100,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1850,
            "y": 800,
            "radius": 100,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        1850,
                        850
                    ],
                    [
                        1850,
                        900
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1800,
                        800
                    ],
                    [
                        1750,
                        800
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 50,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1875,
            "y": 775,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1850,
            "y": 725,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1900,
            "y": 750,
            "w": 25,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1800,
            "y": 600,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1825,
            "y": 400,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 300,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "x": 2750,
            "y": 900,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2950,
            "y": 800,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3100,
            "y": 800,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2700,
            "y": 906.4666666656367,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    2700,
                    1000
                ],
                [
                    2700,
                    900
                ]
            ],
            "speed": 124,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 2700,
                "y": 900
            },
            "pointTo": {
                "x": 2700,
                "y": 1000
            },
            "xv": 7.59281015471359e-15,
            "yv": 124,
            "inView": false
        },
        {
            "x": 2850,
            "y": 806.4666666656367,
            "w": 100,
            "h": 50,
            "type": "move",
            "points": [
                [
                    2850,
                    900
                ],
                [
                    2850,
                    800
                ]
            ],
            "speed": 124,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 2850,
                "y": 800
            },
            "pointTo": {
                "x": 2850,
                "y": 900
            },
            "xv": 7.59281015471359e-15,
            "yv": 124,
            "inView": false
        },
        {
            "x": 3000,
            "y": 893.5333333343633,
            "w": 100,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3000,
                    900
                ],
                [
                    3000,
                    800
                ]
            ],
            "speed": 124,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 3000,
                "y": 900
            },
            "pointTo": {
                "x": 3000,
                "y": 800
            },
            "xv": 7.59281015471359e-15,
            "yv": -124,
            "inView": false
        },
        {
            "x": 3200,
            "y": 793.5333333343633,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3200,
                    800
                ],
                [
                    3200,
                    700
                ]
            ],
            "speed": 124,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 3200,
                "y": 800
            },
            "pointTo": {
                "x": 3200,
                "y": 700
            },
            "xv": 7.59281015471359e-15,
            "yv": -124,
            "inView": false
        },
        {
            "x": 3150,
            "y": 606.4666666656367,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3150,
                    700
                ],
                [
                    3150,
                    600
                ]
            ],
            "speed": 124,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3150,
                "y": 600
            },
            "pointTo": {
                "x": 3150,
                "y": 700
            },
            "xv": 7.59281015471359e-15,
            "yv": 124,
            "inView": false
        },
        {
            "points": [
                [
                    2175,
                    250
                ],
                [
                    2175,
                    300
                ],
                [
                    2125,
                    275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2125,
                "right": 2175,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2175,
            "y": 275,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 2350,
            "y": 0,
            "w": 250,
            "h": 50,
            "type": "tp",
            "tpx": 2675,
            "tpy": 25,
            "bgColor": "#6f5568",
            "tileColor": "#9f8598",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2200,
            "y": 825,
            "w": 75,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#30365f",
            "tileColor": "#4f5a96",
            "inView": false
        },
        {
            "x": 1800,
            "y": 950,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#026178",
            "tileColor": "#34a1c7",
            "inView": false
        },
        {
            "x": 3575,
            "y": 50,
            "w": 175,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3575,
            "y": -50,
            "w": 250,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3800,
            "y": 0,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3650,
            "y": 200,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 300,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2925,
            "y": 175,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3800,
            "y": -25,
            "w": 50,
            "h": 275,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3900,
            "y": 50,
            "w": 250,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4150,
            "y": 200,
            "radius": 150,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4300,
            "y": -25,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4300,
            "y": 350,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4350,
            "y": 0,
            "w": 50,
            "h": 375,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4350,
            "y": 425,
            "w": 50,
            "h": 600,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 1550,
            "y": 575,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5550,
            "y": 1000,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "points": [
                [
                    5600,
                    650
                ],
                [
                    5725,
                    725
                ],
                [
                    5600,
                    800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5600,
                "right": 5725,
                "top": 650,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5800,
                    425
                ],
                [
                    5850,
                    450
                ],
                [
                    5850,
                    550
                ],
                [
                    5800,
                    575
                ],
                [
                    5750,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5750,
                "right": 5850,
                "top": 425,
                "bottom": 575
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5850,
                    425
                ],
                [
                    5850,
                    575
                ],
                [
                    5725,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5725,
                "right": 5850,
                "top": 425,
                "bottom": 575
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5650,
                    225
                ],
                [
                    5700,
                    300
                ],
                [
                    5650,
                    375
                ],
                [
                    5600,
                    350
                ],
                [
                    5600,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5600,
                "right": 5700,
                "top": 225,
                "bottom": 375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5600,
                    225
                ],
                [
                    5725,
                    300
                ],
                [
                    5600,
                    375
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5600,
                "right": 5725,
                "top": 225,
                "bottom": 375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5850,
            "y": -25,
            "w": 50,
            "h": 1050,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5525,
            "y": -100,
            "w": 325,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 4350,
            "y": -25,
            "w": 1250,
            "h": 1050,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 550,
            "w": 750,
            "h": 50,
            "type": "tp",
            "tpx": 5725,
            "tpy": 975,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 0,
            "y": 1000,
            "w": 6575,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3674,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3600,
                    0
                ],
                [
                    3750,
                    0
                ]
            ],
            "speed": 120,
            "currentPoint": 0,
            "pointOn": {
                "x": 3600,
                "y": 0
            },
            "pointTo": {
                "x": 3750,
                "y": 0
            },
            "xv": 120,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3750,
            "y": 76,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3750,
                    0
                ],
                [
                    3750,
                    150
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "pointOn": {
                "x": 3750,
                "y": 150
            },
            "pointTo": {
                "x": 3750,
                "y": 0
            },
            "xv": 7.34788079488412e-15,
            "yv": -120,
            "inView": false
        },
        {
            "x": 3676,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3750,
                    150
                ],
                [
                    3600,
                    150
                ]
            ],
            "speed": 120,
            "currentPoint": 0,
            "pointOn": {
                "x": 3750,
                "y": 150
            },
            "pointTo": {
                "x": 3600,
                "y": 150
            },
            "xv": -120,
            "yv": 1.469576158976824e-14,
            "inView": false
        },
        {
            "x": 3600,
            "y": 200.66666666698853,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3600,
                    150
                ],
                [
                    3600,
                    250
                ]
            ],
            "speed": 80,
            "currentPoint": 1,
            "pointOn": {
                "x": 3600,
                "y": 250
            },
            "pointTo": {
                "x": 3600,
                "y": 150
            },
            "xv": 4.898587196589413e-15,
            "yv": -80,
            "inView": false
        },
        {
            "x": 3661.6666666718165,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3600,
                    250
                ],
                [
                    3725,
                    250
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "pointOn": {
                "x": 3600,
                "y": 250
            },
            "pointTo": {
                "x": 3725,
                "y": 250
            },
            "xv": 100,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3788.3333333281835,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3725,
                    250
                ],
                [
                    3850,
                    250
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "pointOn": {
                "x": 3850,
                "y": 250
            },
            "pointTo": {
                "x": 3725,
                "y": 250
            },
            "xv": -100,
            "yv": 1.2246467991473532e-14,
            "inView": false
        },
        {
            "x": 3850,
            "y": 188.3333333330243,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3850,
                    250
                ],
                [
                    3850,
                    125
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "pointOn": {
                "x": 3850,
                "y": 250
            },
            "pointTo": {
                "x": 3850,
                "y": 125
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": false
        },
        {
            "x": 3850,
            "y": 61.666666666604115,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3850,
                    125
                ],
                [
                    3850,
                    0
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "pointOn": {
                "x": 3850,
                "y": 0
            },
            "pointTo": {
                "x": 3850,
                "y": 125
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": false
        },
        {
            "x": 3675,
            "y": 425,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3675,
            "y": 400,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 500,
            "w": 750,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3600,
                    550
                ],
                [
                    3800,
                    550
                ],
                [
                    3600,
                    1000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3600,
                "right": 3800,
                "top": 550,
                "bottom": 1000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4150,
                    550
                ],
                [
                    4350,
                    550
                ],
                [
                    4350,
                    1000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4150,
                "right": 4350,
                "top": 550,
                "bottom": 1000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3800,
                    900
                ],
                [
                    4150,
                    900
                ],
                [
                    4175,
                    950
                ],
                [
                    3775,
                    950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3775,
                "right": 4175,
                "top": 900,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3875,
                    750
                ],
                [
                    4075,
                    750
                ],
                [
                    4100,
                    800
                ],
                [
                    3850,
                    800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3850,
                "right": 4100,
                "top": 750,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3950,
                    600
                ],
                [
                    4000,
                    600
                ],
                [
                    4025,
                    650
                ],
                [
                    3925,
                    650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3925,
                "right": 4025,
                "top": 600,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3839,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3800,
                    850
                ],
                [
                    4100,
                    850
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 4100,
                "y": 850
            },
            "pointTo": {
                "x": 3800,
                "y": 850
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 3876,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3850,
                    800
                ],
                [
                    4050,
                    800
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 4050,
                "y": 800
            },
            "pointTo": {
                "x": 3850,
                "y": 800
            },
            "xv": -120,
            "yv": 1.469576158976824e-14,
            "inView": false
        },
        {
            "x": 3894.5,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3875,
                    700
                ],
                [
                    4025,
                    700
                ]
            ],
            "speed": 90,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 4025,
                "y": 700
            },
            "pointTo": {
                "x": 3875,
                "y": 700
            },
            "xv": -90,
            "yv": 1.1021821192326179e-14,
            "inView": false
        },
        {
            "x": 3931.5,
            "y": 650,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    3925,
                    650
                ],
                [
                    3975,
                    650
                ]
            ],
            "speed": 30,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3975,
                "y": 650
            },
            "pointTo": {
                "x": 3925,
                "y": 650
            },
            "xv": -30,
            "yv": 3.67394039744206e-15,
            "inView": false
        },
        {
            "x": 6000,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 50,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6250,
            "y": 75,
            "w": 100,
            "h": 275,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6000,
            "y": 250,
            "w": 325,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6000,
            "y": 75,
            "w": 100,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 0,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 6675,
                "y": 25
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 5600,
            "y": 0,
            "w": 250,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5900,
            "y": 132.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    0
                ],
                [
                    5900,
                    300
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5900,
                "y": 300
            },
            "pointTo": {
                "x": 5900,
                "y": 0
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 5950,
            "y": 167.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5950,
                    0
                ],
                [
                    5950,
                    300
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5950,
                "y": 0
            },
            "pointTo": {
                "x": 5950,
                "y": 300
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 6350,
            "y": 167.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6350,
                    0
                ],
                [
                    6350,
                    300
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6350,
                "y": 0
            },
            "pointTo": {
                "x": 6350,
                "y": 300
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 6400,
            "y": 132.5,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6400,
                    0
                ],
                [
                    6400,
                    300
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6400,
                "y": 300
            },
            "pointTo": {
                "x": 6400,
                "y": 0
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 6132.5,
            "y": 2.051283388571814e-14,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6000,
                    0
                ],
                [
                    6300,
                    0
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6300,
                "y": 0
            },
            "pointTo": {
                "x": 6000,
                "y": 0
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6250,
            "y": 511.6666666618883,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    6000,
                    450
                ],
                [
                    6250,
                    450
                ],
                [
                    6250,
                    700
                ],
                [
                    6000,
                    700
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6250,
                "y": 450
            },
            "pointTo": {
                "x": 6250,
                "y": 700
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": false
        },
        {
            "x": 6239,
            "y": 800,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    350
                ],
                [
                    6350,
                    350
                ],
                [
                    6350,
                    800
                ],
                [
                    5900,
                    800
                ]
            ],
            "speed": 180,
            "currentPoint": 2,
            "collidable": true,
            "pointOn": {
                "x": 6350,
                "y": 800
            },
            "pointTo": {
                "x": 5900,
                "y": 800
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 6650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 6,
            "inView": false
        },
        {
            "x": 5550,
            "y": 1000,
            "w": 350,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6625,
            "y": 50,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6625,
            "y": 200,
            "w": 373,
            "h": 200,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 6825,
            "y": -25,
            "w": 125,
            "h": 275,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 6650,
            "y": 700,
            "w": 1150,
            "h": 900,
            "type": "speed",
            "speedInc": 2,
            "inView": false
        },
        {
            "x": 6908.867056794541,
            "y": 70.53609649849565,
            "w": 75,
            "h": 50,
            "type": "rotatingsafe",
            "angle": 24087,
            "rotateSpeed": 90,
            "pivotX": 6825,
            "pivotY": 125,
            "distToPivot": 100,
            "canCollide": true,
            "cullingRadius": 145.06939094329988,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 6600,
            "y": -75,
            "w": 400,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6825,
            "y": 125,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        6825,
                        0
                    ],
                    [
                        6825,
                        -50
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6825,
                        250
                    ],
                    [
                        6825,
                        300
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6900,
            "y": 225,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6950,
            "y": 0,
            "w": 50,
            "h": 275,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6725,
            "y": 250,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6825,
            "y": 125,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6925,
            "y": -25,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6725,
            "y": 275,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6725,
            "y": 275,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        6725,
                        350
                    ],
                    [
                        6725,
                        400
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6725,
                        200
                    ],
                    [
                        6725,
                        150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6776.666666656367,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    6600,
                    300
                ],
                [
                    7000,
                    300
                ]
            ],
            "speed": 200,
            "currentPoint": 1,
            "pointOn": {
                "x": 7000,
                "y": 300
            },
            "pointTo": {
                "x": 6600,
                "y": 300
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 6697.768048249248,
            "y": 316.93352839727083,
            "w": 50,
            "h": 50,
            "type": "rotatingsafe",
            "angle": -23997,
            "rotateSpeed": -90,
            "pivotX": 6725,
            "pivotY": 275,
            "distToPivot": 50,
            "canCollide": true,
            "cullingRadius": 85.35533905932738,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 6725,
            "y": 250,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6725,
            "y": 275,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        6725,
                        350
                    ],
                    [
                        6725,
                        400
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6725,
                        200
                    ],
                    [
                        6725,
                        150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6600,
            "y": 350,
            "w": 475,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6625,
            "y": 350,
            "w": 925,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 50,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 50,
            "w": 100,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": -25,
            "w": 100,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7350,
            "y": 50,
            "w": 100,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 7550,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 6650,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 7450,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 6625,
            "y": 50,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 0,
            "w": 250,
            "h": 700,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 450,
            "w": 1150,
            "h": 250,
            "type": "raxis",
            "rx": true,
            "ry": false,
            "inView": false
        },
        {
            "x": 6700,
            "y": 700,
            "w": 1150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7800,
            "y": -25,
            "w": 50,
            "h": 825,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": -50,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 0,
            "w": 250,
            "h": 700,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": 3000
            },
            "direction": "down",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    225
                ],
                [
                    7625,
                    225
                ],
                [
                    7675,
                    300
                ],
                [
                    7550,
                    350
                ],
                [
                    7550,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7550,
                "right": 7675,
                "top": 225,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7550,
                    200
                ],
                [
                    7675,
                    275
                ],
                [
                    7550,
                    350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7550,
                "right": 7675,
                "top": 200,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7175,
                    600
                ],
                [
                    7200,
                    700
                ],
                [
                    7075,
                    700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7075,
                "right": 7200,
                "top": 600,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    550
                ],
                [
                    7200,
                    700
                ],
                [
                    7075,
                    700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7075,
                "right": 7200,
                "top": 550,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6800,
                    450
                ],
                [
                    6925,
                    450
                ],
                [
                    6900,
                    550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6800,
                "right": 6925,
                "top": 450,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6800,
                    450
                ],
                [
                    6925,
                    450
                ],
                [
                    6825,
                    600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6800,
                "right": 6925,
                "top": 450,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6450,
            "y": -25,
            "w": 200,
            "h": 1675,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6700,
            "y": 800,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6700,
            "y": 1000,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 1400,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6600,
            "y": 1600,
            "w": 1150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7800,
            "y": 800,
            "w": 50,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6725,
            "y": 1050,
            "w": 375,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6800,
            "y": 850,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6850,
            "y": 900,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6800,
            "y": 1250,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6900,
            "y": 1350,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6600,
            "y": 1500,
            "w": 325,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7000,
            "y": 1400,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 1150,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6800,
            "y": 1150,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 1200,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6900,
            "y": 1000,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7000,
            "y": 950,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7150,
            "y": 850,
            "w": 50,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 850,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6900,
            "y": 800,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 1500,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 1250,
            "w": 250,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 1150,
            "w": 50,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7400,
            "y": 1000,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7250,
            "y": 1050,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7175,
            "y": 1150,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 950,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7250,
            "y": 850,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7450,
            "y": 900,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 1000,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 850,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7600,
            "y": 925,
            "w": 150,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7600,
            "y": 1250,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 1350,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7600,
            "y": 1450,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7600,
            "y": 1550,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7700,
            "y": 1475,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7750,
            "y": 1600,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 7775,
                "y": 1625
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 7750,
            "y": 1600,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 7,
            "inView": false
        },
        {
            "x": 7800,
            "y": 1625,
            "w": 50,
            "h": 800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7450,
            "y": 1625,
            "w": 50,
            "h": 725,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7650,
            "y": 1800,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7550,
            "y": 2050,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7725,
            "y": 2200,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7750,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 7500,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 7750,
            "y": 2000,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7500,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 7400,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 7450,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": false
        },
        {
            "x": 7550,
            "y": 2250,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7650,
            "y": 1800,
            "w": 300,
            "h": 50,
            "type": "rotate-normal",
            "angle": 36130.5,
            "rotateSpeed": 135,
            "pivotX": 7650,
            "pivotY": 1800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 152.0690632574555,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 7750,
            "y": 2000,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": -35995.5,
            "rotateSpeed": -135,
            "pivotX": 7750,
            "pivotY": 2000,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 7725,
            "y": 2200,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": -35995.5,
            "rotateSpeed": -135,
            "pivotX": 7725,
            "pivotY": 2200,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 7775,
            "y": 2300,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7750,
            "y": 2200,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7750,
            "y": 1950,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7450,
            "y": 1950,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7475,
            "y": 2200,
            "w": 75,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7725,
            "y": 2125,
            "w": 125,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7775,
            "y": 2325,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7375,
            "y": 2425,
            "w": 25,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "mark",
            "time": 15,
            "inView": false
        },
        {
            "x": 7750,
            "y": 1600,
            "w": 50,
            "h": 50,
            "type": "cure",
            "inView": false
        },
        {
            "x": 7650,
            "y": 2400,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6650,
            "y": 450,
            "w": 1150,
            "h": 250,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": -3000,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 6000,
            "y": 638.3333333381075,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    6000,
                    450
                ],
                [
                    6250,
                    450
                ],
                [
                    6250,
                    700
                ],
                [
                    6000,
                    700
                ]
            ],
            "speed": 100,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 6000,
                "y": 700
            },
            "pointTo": {
                "x": 6000,
                "y": 450
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": false
        },
        {
            "x": 6011,
            "y": 350,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    5900,
                    350
                ],
                [
                    6350,
                    350
                ],
                [
                    6350,
                    800
                ],
                [
                    5900,
                    800
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5900,
                "y": 350
            },
            "pointTo": {
                "x": 6350,
                "y": 350
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7025,
            "y": 50,
            "w": 25,
            "h": 200,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7175,
            "y": 150,
            "w": 25,
            "h": 150,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7200,
            "y": 300,
            "w": 100,
            "h": 25,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7300,
            "y": 150,
            "w": 25,
            "h": 150,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7450,
            "y": 50,
            "w": 25,
            "h": 200,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7400,
            "y": 25,
            "w": 50,
            "h": 25,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7050,
            "y": 25,
            "w": 50,
            "h": 25,
            "type": "tp",
            "tpx": 7025,
            "tpy": 325,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7000,
            "y": 0,
            "w": 550,
            "h": 350,
            "type": "size",
            "size": 12,
            "inView": false
        },
        {
            "x": 7350,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "invpu",
            "amount": 15,
            "maxAmount": 15,
            "inView": false
        },
        {
            "x": 7050,
            "y": 2300,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7150,
            "y": 2300,
            "w": 325,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 2300,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 10,
            "currentStrength": 10,
            "time": 0.05,
            "timer": 0.05,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 7050,
            "y": 2200,
            "w": 50,
            "h": 100,
            "type": "bounce",
            "effect": 1000,
            "inView": false
        },
        {
            "x": 7050,
            "y": 2200,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 2200,
            "w": 25,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7175,
            "y": 2250,
            "w": 150,
            "h": 50,
            "type": "timetrap",
            "time": 0,
            "maxTime": 0.5,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 7400,
            "y": 2250,
            "w": 50,
            "h": 50,
            "type": "grav",
            "force": 5000,
            "dir": {
                "x": 0,
                "y": -5000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 7350,
            "y": 2100,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6750,
            "y": 1650,
            "w": 698,
            "h": 475,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 7250,
            "y": 2100,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 1700,
            "w": 25,
            "h": 525,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 1700,
            "w": 50,
            "h": 525,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6950,
            "y": 1716.25,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    6950,
                    1650
                ],
                [
                    6950,
                    1800
                ]
            ],
            "speed": 75,
            "currentPoint": 1,
            "pointOn": {
                "x": 6950,
                "y": 1800
            },
            "pointTo": {
                "x": 6950,
                "y": 1650
            },
            "xv": 4.592425496802574e-15,
            "yv": -75,
            "inView": false
        },
        {
            "x": 6782.5,
            "y": 1900,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    6750,
                    1900
                ],
                [
                    7000,
                    1900
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 7000,
                "y": 1900
            },
            "pointTo": {
                "x": 6750,
                "y": 1900
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2100,
            "w": 300,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6925,
            "y": 2275,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.17453292519943295,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        7048.100969126526,
                        2296.7060222083664
                    ],
                    [
                        7097.341356777137,
                        2305.388431091713
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6800,
                        2275
                    ],
                    [
                        6750,
                        2275
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6850,
            "y": 2200,
            "w": 150,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6750,
            "y": 2200,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6925,
            "y": 2275,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6900,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 6750,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 6925,
            "y": 2275,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": 36130.5,
            "rotateSpeed": 135,
            "pivotX": 6925,
            "pivotY": 2275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 6925,
            "y": 2275,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": 36220.5,
            "rotateSpeed": 135,
            "pivotX": 6925,
            "pivotY": 2275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2150,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 6725,
                "y": 2175
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 8,
            "inView": false
        },
        {
            "x": 5850,
            "y": 1650,
            "w": 900,
            "h": 750,
            "type": "platformer",
            "force": 2000,
            "dir": {
                "x": 0,
                "y": 2000
            },
            "direction": "down",
            "jumpHeight": 150,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 6700,
            "y": 1625,
            "w": 50,
            "h": 525,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 1650,
            "w": 50,
            "h": 700,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6500,
            "y": 2350,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5800,
            "y": 2350,
            "w": 650,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 5800,
            "y": 1700,
            "w": 50,
            "h": 675,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6300,
            "y": 2200,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6200,
            "y": 1900,
            "w": 100,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5900,
            "y": 1575,
            "w": 100,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6050,
            "y": 1700,
            "w": 100,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 1625,
            "w": 100,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6000,
            "y": 1900,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5825,
            "y": 1900,
            "w": 75,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6275,
            "y": 1625,
            "w": 400,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6450,
            "y": 1825,
            "w": 200,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5825,
            "y": 2150,
            "w": 375,
            "h": 225,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 5489.126844502204,
            "y": 1677.5871532950825,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 6021.75,
            "rotateSpeed": 22.5,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5757.202388217982,
            "y": 2017.6393593774574,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 6141.75,
            "rotateSpeed": 22.5,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5328.670767279816,
            "y": 2079.7734873274603,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 6261.75,
            "rotateSpeed": 22.5,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5694.432999788983,
            "y": 2108.827252012607,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": -5352.666666667462,
            "rotateSpeed": -20,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5281.084429954499,
            "y": 1979.8196560494341,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": -5232.6666666672445,
            "rotateSpeed": -20,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5599.4825702581475,
            "y": 1686.3530919376071,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": -5112.666666667021,
            "rotateSpeed": -20,
            "pivotX": 5525,
            "pivotY": 1925,
            "distToPivot": 250,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 285.3553390593274,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 5500,
            "y": 1900,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 5775,
            "tpy": 2375,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5200,
            "y": 1625,
            "w": 50,
            "h": 625,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5475,
            "y": 1875,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": false
        },
        {
            "x": 5250,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5250,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5750,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5750,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 5200,
            "y": 2250,
            "w": 600,
            "h": 150,
            "type": "grav",
            "force": 1000,
            "dir": {
                "x": -1000,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 5250,
            "y": 2347.0833333281835,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5250,
                    2225
                ],
                [
                    5250,
                    2375
                ]
            ],
            "speed": 25,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5250,
                "y": 2375
            },
            "pointTo": {
                "x": 5250,
                "y": 2225
            },
            "xv": 1.5308084989341915e-15,
            "yv": -25,
            "inView": false
        },
        {
            "x": 5500,
            "y": 2252.9166666718165,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5500,
                    2225
                ],
                [
                    5500,
                    2375
                ]
            ],
            "speed": 25,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5500,
                "y": 2225
            },
            "pointTo": {
                "x": 5500,
                "y": 2375
            },
            "xv": 1.5308084989341915e-15,
            "yv": 25,
            "inView": false
        },
        {
            "x": 5200,
            "y": 2200,
            "w": 625,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5200,
            "y": 2250,
            "w": 50,
            "h": 150,
            "type": "tp",
            "tpx": 5175,
            "tpy": 1675,
            "bgColor": "#4d2353",
            "tileColor": "#8a2aac",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 2350,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 4725,
                "y": 2375
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 5150,
            "y": 1700,
            "w": 50,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4700,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 9,
            "inView": false
        },
        {
            "x": 4700,
            "y": 1625,
            "w": 100,
            "h": 725,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4800,
            "y": 1998.3333333325659,
            "w": 350,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    4800,
                    1625
                ],
                [
                    4800,
                    2375
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 4800,
                "y": 1625
            },
            "pointTo": {
                "x": 4800,
                "y": 2375
            },
            "xv": 1.2246467991473532e-14,
            "yv": 200,
            "inView": false
        },
        {
            "x": 4800,
            "y": 2001.6666666674787,
            "w": 350,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    4800,
                    1625
                ],
                [
                    4800,
                    2375
                ]
            ],
            "speed": 200,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 4800,
                "y": 2375
            },
            "pointTo": {
                "x": 4800,
                "y": 1625
            },
            "xv": 1.2246467991473532e-14,
            "yv": -200,
            "inView": false
        },
        {
            "x": 4750,
            "y": 1600,
            "w": 450,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5600,
            "y": 900,
            "w": 250,
            "h": 50,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 6275,
            "y": 2000,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4800,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4800,
            "y": 2000,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5100,
            "y": 2000,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5100,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4400,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 4575,
            "y": 2275,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 21410.666666669847,
            "rotateSpeed": 80,
            "pivotX": 4575,
            "pivotY": 2275,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 4575,
            "y": 2075,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": -21410.666666669847,
            "rotateSpeed": -80,
            "pivotX": 4575,
            "pivotY": 2075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 250,
            "y": 1650,
            "w": 2500,
            "h": 500,
            "type": "raxis",
            "rx": true,
            "ry": false,
            "inView": false
        },
        {
            "x": 250,
            "y": 1650,
            "w": 2450,
            "h": 500,
            "type": "timetrap",
            "time": 0,
            "maxTime": 15,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 4575,
            "y": 1875,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 21410.666666669847,
            "rotateSpeed": 80,
            "pivotX": 4575,
            "pivotY": 1875,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 4575,
            "y": 1800,
            "w": 125,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4450,
            "y": 2000,
            "w": 125,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4575,
            "y": 2200,
            "w": 125,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2250,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4650,
            "y": 1825,
            "w": 75,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4400,
            "y": 1700,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4575,
            "y": 2075,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        4575,
                        1950
                    ],
                    [
                        4575,
                        1900
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4575,
                        2200
                    ],
                    [
                        4575,
                        2250
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4575,
            "y": 1875,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        4575,
                        2000
                    ],
                    [
                        4575,
                        2050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4575,
                        1750
                    ],
                    [
                        4575,
                        1700
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4575,
            "y": 2075,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4575,
            "y": 1875,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4400,
            "y": 1700,
            "w": 50,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4575,
            "y": 2275,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        4575,
                        2400
                    ],
                    [
                        4575,
                        2450
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4575,
                        2150
                    ],
                    [
                        4575,
                        2100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 125,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4575,
            "y": 2275,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4562.5,
            "y": 1762.5,
            "w": 25,
            "h": 25,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 4625,
            "y": 1725,
            "radius": 125,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        4625,
                        1650
                    ],
                    [
                        4625,
                        1600
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4625,
                        1800
                    ],
                    [
                        4625,
                        1850
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4625,
            "y": 1725,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4562.5,
            "y": 2162.5,
            "w": 25,
            "h": 25,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 0,
            "y": 1650,
            "w": 100,
            "h": 100,
            "type": "winpad",
            "inView": false
        },
        {
            "x": -25,
            "y": 2400,
            "w": 7875,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4250,
            "y": 1650,
            "w": 50,
            "h": 700,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4300,
            "y": 1650,
            "w": 100,
            "h": 750,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 4300,
            "y": 1650,
            "w": 100,
            "h": 750,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": 3000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 4350,
            "y": 1961.6666666640917,
            "w": 50,
            "h": 50,
            "type": "tpmove",
            "points": [
                [
                    4350,
                    1650
                ],
                [
                    4350,
                    2000
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "tpx": 4425,
            "tpy": 1675,
            "pointOn": {
                "x": 4350,
                "y": 1650
            },
            "pointTo": {
                "x": 4350,
                "y": 2000
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": false
        },
        {
            "x": 4300,
            "y": 2311.6666666707483,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    4300,
                    2000
                ],
                [
                    4300,
                    2350
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4300,
                "y": 2000
            },
            "pointTo": {
                "x": 4300,
                "y": 2350
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": false
        },
        {
            "x": 5900,
            "y": 1925,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5800,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 5950,
            "y": 1900,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 5950,
            "y": 1899,
            "w": 100,
            "h": 10,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 2150,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 2175,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6200,
            "y": 2050,
            "w": 50,
            "h": 100,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 3000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 4750,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 4725,
            "tpy": 2375,
            "bgColor": "#4d2353",
            "tileColor": "#8a2aac",
            "changeColor": true,
            "inView": false
        },
        {
            "x": 4750,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": false
        },
        {
            "x": 4200,
            "y": 2325,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4050,
            "y": 2200,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4225,
            "y": 2150,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4125,
            "y": 1925,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4100,
            "y": 2000,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4000,
            "y": 1700,
            "w": 50,
            "h": 725,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4225,
            "y": 1750,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 4250,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "mark",
            "time": 10,
            "inView": false
        },
        {
            "x": 4000,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "cure",
            "inView": false
        },
        {
            "x": 3600,
            "y": 1650,
            "w": 400,
            "h": 50,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": -3000,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 3600,
            "y": 1650,
            "w": 50,
            "h": 150,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": 3000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3600,
            "y": 1750,
            "w": 150,
            "h": 50,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 3000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3700,
            "y": 1750,
            "w": 50,
            "h": 250,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": 3000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3700,
            "y": 1950,
            "w": 200,
            "h": 50,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 3000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3850,
            "y": 1800,
            "w": 50,
            "h": 200,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": -3000
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 3850,
            "y": 1800,
            "w": 150,
            "h": 50,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 3000,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3950,
            "y": 1800,
            "w": 50,
            "h": 250,
            "type": "grav",
            "force": 3000,
            "dir": {
                "x": 0,
                "y": 3000
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3550,
            "y": 1650,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3550,
            "y": 1800,
            "w": 150,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3675,
            "y": 2000,
            "w": 275,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3650,
            "y": 1700,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3750,
            "y": 1725,
            "w": 100,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3825,
            "y": 1750,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3900,
            "y": 1850,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3650,
            "y": 1750,
            "w": 50,
            "h": 50,
            "type": "switchlava",
            "onTime": 3,
            "offTime": 3,
            "state": true,
            "timer": 1.8833333333340887,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3750,
            "y": 1950,
            "w": 50,
            "h": 50,
            "type": "switchlava",
            "onTime": 3,
            "offTime": 3,
            "state": false,
            "timer": 1.8833333333340887,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3900,
            "y": 1800,
            "w": 50,
            "h": 50,
            "type": "switchlava",
            "onTime": 3,
            "offTime": 3,
            "state": true,
            "timer": 1.8833333333340887,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 2050,
            "w": 400,
            "h": 350,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 3550,
            "y": 2025,
            "w": 50,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 2150,
            "w": 325,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3752.416910496588,
            "y": 2209.0399396884404,
            "w": 50,
            "h": 50,
            "type": "rotatingsafe",
            "angle": -24087,
            "rotateSpeed": -90,
            "pivotX": 3700,
            "pivotY": 2175,
            "distToPivot": 62.5,
            "canCollide": true,
            "cullingRadius": 97.85533905932738,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 3647.5830895034132,
            "y": 2140.9600603115573,
            "w": 50,
            "h": 50,
            "type": "rotatingsafe",
            "angle": -23907,
            "rotateSpeed": -90,
            "pivotX": 3700,
            "pivotY": 2175,
            "distToPivot": 62.5,
            "canCollide": true,
            "cullingRadius": 97.85533905932738,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 3950,
            "y": 2332.5,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    3950,
                    2200
                ],
                [
                    3950,
                    2350
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 3950,
                "y": 2350
            },
            "pointTo": {
                "x": 3950,
                "y": 2200
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 3700,
            "y": 2175,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3950,
            "y": 2350,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 2725,
            "tpy": 1675,
            "bgColor": "#721d4f",
            "tileColor": "#8d3399",
            "changeColor": true,
            "inView": false
        },
        {
            "x": 2700,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 10,
            "inView": false
        },
        {
            "x": 2700,
            "y": 1650,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 2725,
                "y": 1675
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2750,
            "y": 1650,
            "w": 825,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5850,
            "y": 1899,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 1750,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 3700,
            "y": 1950,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 3850,
            "y": 1800,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 5,
            "currentStrength": 5,
            "time": 0.1,
            "timer": 0.1,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 5250,
            "y": 1800,
            "w": 25,
            "h": 350,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5775,
            "y": 1700,
            "w": 25,
            "h": 350,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 1650,
            "w": 350,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5400,
            "y": 2175,
            "w": 350,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5825,
            "y": 1700,
            "w": 25,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6150,
            "y": 600,
            "w": 50,
            "h": 52,
            "type": "tp",
            "tpx": 6675,
            "tpy": 25,
            "bgColor": "#4a1698",
            "tileColor": "#6b53ac",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2600,
            "y": 1800,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 2350,
            "y": 1725,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 2400,
            "y": 1925,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "x": 2600,
            "y": 2050,
            "r": 79,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 79,
            "inView": false
        },
        {
            "x": 2200,
            "y": 2100,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 2150,
            "y": 1850,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1750,
            "y": 1800,
            "w": 275,
            "h": 50,
            "type": "rotate-lava",
            "angle": 30831.359999979697,
            "rotateSpeed": 115.2,
            "pivotX": 1750,
            "pivotY": 1800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 139.75424859373686,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1750,
            "y": 2000,
            "w": 275,
            "h": 50,
            "type": "rotate-lava",
            "angle": -30831.359999979697,
            "rotateSpeed": -115.2,
            "pivotX": 1750,
            "pivotY": 2000,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 139.75424859373686,
            "unSim": 15.483333333333094,
            "inView": false
        },
        {
            "x": 1950,
            "y": 1725,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1950,
            "y": 2050,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "points": [
                [
                    1325,
                    1750
                ],
                [
                    1475,
                    1900
                ],
                [
                    1325,
                    2050
                ],
                [
                    1175,
                    1900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1175,
                "right": 1475,
                "top": 1750,
                "bottom": 2050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    975,
                    1650
                ],
                [
                    1175,
                    1650
                ],
                [
                    1025,
                    1800
                ],
                [
                    975,
                    1800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 975,
                "right": 1175,
                "top": 1650,
                "bottom": 1800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    975,
                    2000
                ],
                [
                    1025,
                    2000
                ],
                [
                    1175,
                    2150
                ],
                [
                    975,
                    2150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 975,
                "right": 1175,
                "top": 2000,
                "bottom": 2150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 52.5,
            "y": 2050,
            "w": 45,
            "h": 45,
            "type": "tp",
            "tpx": 2725,
            "tpy": 1675,
            "bgColor": "#323c81",
            "tileColor": "#5260ab",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 50,
            "y": 1750,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 2000,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": false
        },
        {
            "x": 1550,
            "y": 1875,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 1300,
            "y": 2100,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 650,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 2150,
            "y": 1650,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": -25,
            "y": 2150,
            "w": 3500,
            "h": 575,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    250,
                    1650
                ],
                [
                    550,
                    1650
                ],
                [
                    250,
                    2100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 250,
                "right": 550,
                "top": 1650,
                "bottom": 2100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1751.6666666666188,
            "y": 1650,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 2125,
                "y": 1650
            },
            "pointTo": {
                "x": 1500,
                "y": 1650
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 1751.6666666666188,
            "y": 1650,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 2125,
                "y": 1650
            },
            "pointTo": {
                "x": 1500,
                "y": 1650
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 1126.6666666666085,
            "y": 1650,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 2,
            "alongWith": false,
            "pointOn": {
                "x": 1500,
                "y": 1650
            },
            "pointTo": {
                "x": 875,
                "y": 1650
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 501.6666666666336,
            "y": 1650,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 3,
            "alongWith": false,
            "pointOn": {
                "x": 875,
                "y": 1650
            },
            "pointTo": {
                "x": 250,
                "y": 1650
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 250,
            "y": 1276.6666666666083,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 4,
            "alongWith": false,
            "pointOn": {
                "x": 250,
                "y": 1650
            },
            "pointTo": {
                "x": 250,
                "y": 1025
            },
            "xv": 1.2246467991473532e-14,
            "yv": -200,
            "inView": false
        },
        {
            "x": 623.3333333333751,
            "y": 1025,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 5,
            "alongWith": false,
            "pointOn": {
                "x": 250,
                "y": 1025
            },
            "pointTo": {
                "x": 875,
                "y": 1025
            },
            "xv": 200,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1248.333333333381,
            "y": 1025,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 6,
            "alongWith": false,
            "pointOn": {
                "x": 875,
                "y": 1025
            },
            "pointTo": {
                "x": 1500,
                "y": 1025
            },
            "xv": 200,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1873.3333333333915,
            "y": 1025,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 7,
            "alongWith": false,
            "pointOn": {
                "x": 1500,
                "y": 1025
            },
            "pointTo": {
                "x": 2125,
                "y": 1025
            },
            "xv": 200,
            "yv": 0,
            "inView": false
        },
        {
            "x": 2498.333333333342,
            "y": 1025,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 8,
            "alongWith": false,
            "pointOn": {
                "x": 2125,
                "y": 1025
            },
            "pointTo": {
                "x": 2750,
                "y": 1025
            },
            "xv": 200,
            "yv": 0,
            "inView": false
        },
        {
            "x": 2376.6666666666597,
            "y": 1650,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 2750,
                "y": 1650
            },
            "pointTo": {
                "x": 2125,
                "y": 1650
            },
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "inView": false
        },
        {
            "x": 2750,
            "y": 1398.3333333333921,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    2750,
                    1650
                ],
                [
                    2125,
                    1650
                ],
                [
                    1500,
                    1650
                ],
                [
                    875,
                    1650
                ],
                [
                    250,
                    1650
                ],
                [
                    250,
                    1025
                ],
                [
                    875,
                    1025
                ],
                [
                    1500,
                    1025
                ],
                [
                    2125,
                    1025
                ],
                [
                    2750,
                    1025
                ]
            ],
            "speed": 200,
            "currentPoint": 9,
            "alongWith": false,
            "pointOn": {
                "x": 2750,
                "y": 1025
            },
            "pointTo": {
                "x": 2750,
                "y": 1650
            },
            "xv": 1.2246467991473532e-14,
            "yv": 200,
            "inView": false
        },
        {
            "x": 100,
            "y": 1650,
            "w": 150,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 50,
            "y": 2050,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 12,
            "currentStrength": 12,
            "time": 0.3,
            "timer": 0.3,
            "regenTime": 3,
            "inView": false
        }
    ];
    
    const enemies = [
        {
            "type": "turret",
            "angle": 2.4235347361601702,
            "shootSpeed": 4,
            "timer": 3.5416666666667473,
            "pRadius": 22,
            "pSpeed": 236,
            "projectiles": [
                {
                    "x": 1075,
                    "y": 866.8333333333317,
                    "angle": -1.5707963267948966
                }
            ],
            "shootDirections": [
                -1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 24,
            "speed": 0,
            "x": 1075,
            "y": 975,
            "renderX": 1075,
            "renderY": 975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 1050,
                "y": 500,
                "w": 50,
                "h": 500
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 2.8357111416781473,
            "shootSpeed": 0.18,
            "timer": 0.12166666666667184,
            "pRadius": 13,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 125,
                    "y": 904,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 125,
                    "y": 924,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 125,
                    "y": 946,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 125,
                    "y": 968,
                    "angle": -1.5707963267948966
                }
            ],
            "shootDirections": [
                -1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 125,
                    "y": 861,
                    "angle": -1.5707963267948966,
                    "life": 0.2124999999999998
                },
                {
                    "x": 125,
                    "y": 881,
                    "angle": -1.5707963267948966,
                    "life": 0.7958333333333333
                }
            ],
            "radius": 22,
            "speed": 0,
            "x": 125,
            "y": 975,
            "renderX": 125,
            "renderY": 975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 100,
                "y": 875,
                "w": 50,
                "h": 125
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 0.8274157468514435,
            "shootSpeed": 0.18,
            "timer": 0.12166666666667184,
            "pRadius": 13,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 425,
                    "y": 904,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 425,
                    "y": 924,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 425,
                    "y": 946,
                    "angle": -1.5707963267948966
                },
                {
                    "x": 425,
                    "y": 968,
                    "angle": -1.5707963267948966
                }
            ],
            "shootDirections": [
                -1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 425,
                    "y": 861,
                    "angle": -1.5707963267948966,
                    "life": 0.2124999999999998
                },
                {
                    "x": 425,
                    "y": 881,
                    "angle": -1.5707963267948966,
                    "life": 0.7958333333333333
                }
            ],
            "radius": 22,
            "speed": 0,
            "x": 425,
            "y": 975,
            "renderX": 425,
            "renderY": 975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 400,
                "y": 875,
                "w": 50,
                "h": 125
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 4.013456957920454,
            "shootSpeed": 0.18,
            "timer": 0.12166666666667184,
            "pRadius": 13,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 275,
                    "y": 896,
                    "angle": 1.5707963267948966
                },
                {
                    "x": 275,
                    "y": 876,
                    "angle": 1.5707963267948966
                },
                {
                    "x": 275,
                    "y": 854,
                    "angle": 1.5707963267948966
                },
                {
                    "x": 275,
                    "y": 832,
                    "angle": 1.5707963267948966
                }
            ],
            "shootDirections": [
                1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 275,
                    "y": 939,
                    "angle": 1.5707963267948966,
                    "life": 0.2124999999999998
                },
                {
                    "x": 275,
                    "y": 919,
                    "angle": 1.5707963267948966,
                    "life": 0.7958333333333333
                }
            ],
            "radius": 22,
            "speed": 0,
            "x": 275,
            "y": 825,
            "renderX": 275,
            "renderY": 825,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 250,
                "y": 800,
                "w": 50,
                "h": 125
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 2.298151798027445,
            "shootSpeed": 3,
            "timer": 2.041666666666742,
            "pRadius": 22,
            "pSpeed": 236,
            "projectiles": [
                {
                    "x": 3375,
                    "y": 800.7999999999965,
                    "angle": -1.5707963267948966
                }
            ],
            "shootDirections": [
                -1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 3375,
                    "y": 90.83333333332877,
                    "angle": -1.5707963267948966,
                    "life": 0.5624999999999999
                }
            ],
            "radius": 20,
            "speed": 0,
            "x": 3375,
            "y": 1025,
            "renderX": 3375,
            "renderY": 1025,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3350,
                "y": 100,
                "w": 50,
                "h": 950
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 5.200365031059507,
            "shootSpeed": 3,
            "timer": 0.541666666666742,
            "pRadius": 22,
            "pSpeed": 236,
            "projectiles": [
                {
                    "x": 3325,
                    "y": 446.799999999993,
                    "angle": -1.5707963267948966
                }
            ],
            "shootDirections": [
                -1.5707963267948966
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 20,
            "speed": 0,
            "x": 3325,
            "y": 1025,
            "renderX": 3325,
            "renderY": 1025,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3300,
                "y": 100,
                "w": 50,
                "h": 950
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 3.4042346702311117,
            "switchTime": 2,
            "switchTimer": 1.958333333333271,
            "currentSwitch": false,
            "radius": 24,
            "speed": 0,
            "x": 26,
            "y": 674,
            "renderX": 26,
            "renderY": 674,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 650,
                "w": 50,
                "h": 50
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 4.426178428559605,
            "switchTime": 2,
            "switchTimer": 1.958333333333271,
            "currentSwitch": false,
            "radius": 24,
            "speed": 0,
            "x": 125,
            "y": 676,
            "renderX": 125,
            "renderY": 676,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 100,
                "y": 650,
                "w": 50,
                "h": 50
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 6.085253293381526,
            "shootSpeed": 0.8,
            "timer": 0.04166666666667837,
            "pRadius": 13,
            "pSpeed": 120,
            "projectiles": [],
            "shootDirections": [
                1.5707963267948966,
                -1.5707963267948966
            ],
            "csd": 1,
            "deadProjectiles": [
                {
                    "x": 575,
                    "y": 992,
                    "angle": 1.5707963267948966,
                    "life": 0.12499999999999978
                }
            ],
            "radius": 22,
            "speed": 0,
            "x": 575,
            "y": 900,
            "renderX": 575,
            "renderY": 900,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 550,
                "y": 825,
                "w": 50,
                "h": 150
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 2.2686891733984527,
            "shootSpeed": 0.8,
            "timer": 0.3416666666666785,
            "pRadius": 13,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 575,
                    "y": 955,
                    "angle": 1.5707963267948966
                }
            ],
            "shootDirections": [
                1.5707963267948966,
                -1.5707963267948966
            ],
            "csd": 1,
            "deadProjectiles": [],
            "radius": 22,
            "speed": 0,
            "x": 575,
            "y": 900,
            "renderX": 575,
            "renderY": 900,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 550,
                "y": 825,
                "w": 50,
                "h": 150
            },
            "inView": true
        },
        {
            "type": "normal",
            "angle": 1.319735436713421,
            "radius": 10,
            "speed": 200,
            "x": 7140.147420311733,
            "y": 2378.6353930184055,
            "renderX": 7140.147420311733,
            "renderY": 2378.6353930184055,
            "xv": 49.68634588293321,
            "yv": -193.72988162078025,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.7869227499167477,
            "radius": 10,
            "speed": 200,
            "x": 7233.120511649689,
            "y": 2363.579085727101,
            "renderX": 7233.120511649689,
            "renderY": 2363.579085727101,
            "xv": 42.889556303460914,
            "yv": 195.34709099470166,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.2512519693793913,
            "radius": 10,
            "speed": 200,
            "x": 7310.981728491864,
            "y": 2382.6750387112193,
            "renderX": 7310.981728491864,
            "renderY": 2382.6750387112193,
            "xv": 125.8294507955006,
            "yv": -155.45722663325336,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.9751116168838199,
            "radius": 10,
            "speed": 200,
            "x": 7296.702112820764,
            "y": 2369.1783997149423,
            "renderX": 7296.702112820764,
            "renderY": 2369.1783997149423,
            "xv": 78.67786990717535,
            "yv": -183.87439404895287,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.1047936190470171,
            "radius": 10,
            "speed": 200,
            "x": 7325.558944486523,
            "y": 2380.4355219233958,
            "renderX": 7325.558944486523,
            "renderY": 2380.4355219233958,
            "xv": -89.86376353545296,
            "yv": 178.67429586609316,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.832142195266307,
            "radius": 10,
            "speed": 200,
            "x": 7295.068474758822,
            "y": 2382.1404305430883,
            "renderX": 7295.068474758822,
            "renderY": 2382.1404305430883,
            "xv": 190.500213702259,
            "yv": -60.90704868398774,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.537205384381146,
            "radius": 10,
            "speed": 200,
            "x": 7301.894616022558,
            "y": 2363.5093007953797,
            "renderX": 7301.894616022558,
            "renderY": 2363.5093007953797,
            "xv": -164.5700882495928,
            "yv": 113.65159943230556,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.306337836711427,
            "radius": 10,
            "speed": 200,
            "x": 7309.04350699007,
            "y": 2369.0387550939995,
            "renderX": 7309.04350699007,
            "renderY": 2369.0387550939995,
            "xv": -197.29203551745215,
            "yv": 32.80019392290836,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.0473012980952734,
            "radius": 10,
            "speed": 200,
            "x": 7138.827716181974,
            "y": 2381.464898593258,
            "renderX": 7138.827716181974,
            "renderY": 2381.464898593258,
            "xv": 199.11157256093108,
            "yv": 18.83033914492986,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.623207971523909,
            "radius": 10,
            "speed": 200,
            "x": 7291.99027133162,
            "y": 2375.554567889328,
            "renderX": 7291.99027133162,
            "renderY": 2375.554567889328,
            "xv": -17.812568536583896,
            "yv": -199.20520174465702,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.9322760141269684,
            "radius": 10,
            "speed": 200,
            "x": 7323.953123113821,
            "y": 2375.2527322489755,
            "renderX": 7323.953123113821,
            "renderY": 2375.2527322489755,
            "xv": 140.67194479095718,
            "yv": -142.1668173264419,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.4404882217594173,
            "radius": 10,
            "speed": 200,
            "x": 7202.744962284636,
            "y": 2375.549692289625,
            "renderX": 7202.744962284636,
            "renderY": 2375.549692289625,
            "xv": 191.13245766736668,
            "yv": 58.892984523050615,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.5494025119513166,
            "radius": 10,
            "speed": 200,
            "x": 7300.778375507786,
            "y": 2376.84398836712,
            "renderX": 7300.778375507786,
            "renderY": 2376.84398836712,
            "xv": 170.56733384824216,
            "yv": 104.43555249005152,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.5625789158421464,
            "radius": 10,
            "speed": 200,
            "x": 7141.7596881662685,
            "y": 2376.7527244223807,
            "renderX": 7141.7596881662685,
            "renderY": 2376.7527244223807,
            "xv": -167.4005476661392,
            "yv": 109.43973977069142,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.469290384392925,
            "radius": 10,
            "speed": 200,
            "x": 7172.110989366463,
            "y": 2371.243087693759,
            "renderX": 7172.110989366463,
            "renderY": 2371.243087693759,
            "xv": 189.3571739862404,
            "yv": -64.37282547740685,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.1824809113002472,
            "radius": 10,
            "speed": 200,
            "x": 7280.006895047056,
            "y": 2373.4301937844107,
            "renderX": 7280.006895047056,
            "renderY": 2373.4301937844107,
            "xv": -199.83283832918522,
            "yv": -8.175373098624606,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.486666406228374,
            "radius": 10,
            "speed": 200,
            "x": 7309.710869951327,
            "y": 2367.888373251771,
            "renderX": 7309.710869951327,
            "renderY": 2367.888373251771,
            "xv": 158.61857060925144,
            "yv": 121.82015045910062,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.17316839207376214,
            "radius": 10,
            "speed": 200,
            "x": 7241.036496661739,
            "y": 2383.467727826744,
            "renderX": 7241.036496661739,
            "renderY": 2383.467727826744,
            "xv": 197.00875695954792,
            "yv": 34.46084272407996,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.9238245090626769,
            "radius": 10,
            "speed": 200,
            "x": 7146.732566212759,
            "y": 2389.82886518822,
            "renderX": 7146.732566212759,
            "renderY": 2389.82886518822,
            "xv": -69.14816454677717,
            "yv": 187.66601008123936,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.120637167835834,
            "radius": 10,
            "speed": 200,
            "x": 7177.065997913263,
            "y": 2371.501935128307,
            "renderX": 7177.065997913263,
            "renderY": 2371.501935128307,
            "xv": -104.5103070790961,
            "yv": -170.52154032330645,
            "bound": {
                "x": 7100,
                "y": 2350,
                "w": 250,
                "h": 50
            },
            "isLava": false,
            "inView": false
        }
    ]
    
    const safes = [
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 3900,
            "y": 0,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 6650,
            "y": 0,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 7200,
            "y": 2050,
            "w": 200,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 7150,
            "y": 2050,
            "w": 25,
            "h": 100,
            "renderAbove": true
        },
        {
            "x": 7350,
            "y": 1875,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 7175,
            "y": 1875,
            "w": 150,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 7125,
            "y": 1725,
            "w": 25,
            "h": 175,
            "renderAbove": true
        },
        {
            "x": 6950,
            "y": 1675,
            "w": 200,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 6825,
            "y": 1800,
            "w": 175,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 6775,
            "y": 1800,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 7000,
            "y": 1950,
            "w": 25,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 4962.5,
            "y": 1900,
            "w": 25,
            "h": 250,
            "renderAbove": true
        },
        {
            "x": 4800,
            "y": 1750,
            "w": 25,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 3975,
            "y": 2000,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 3675,
            "y": 2100,
            "w": 275,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 3675,
            "y": 2225,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 3725,
            "y": 2350,
            "w": 125,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 3825,
            "y": 2250,
            "w": 25,
            "h": 75,
            "renderAbove": true
        },
        {
            "x": 3875,
            "y": 2250,
            "w": 100,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 5100,
            "y": 1650,
            "w": 25,
            "h": 300,
            "renderAbove": true
        },
        {
            "x": 4800,
            "y": 2100,
            "w": 25,
            "h": 300,
            "renderAbove": true
        },
        {
            "x": 5125,
            "y": 2100,
            "w": 25,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 5150,
            "y": 1650,
            "w": 50,
            "h": 50,
            "renderAbove": true
        }
    ]
    
    const texts = [
        {
            "x": 4075,
            "y": -25,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Speed Check!",
            "angle": 0,
            "story": false
        },
        {
            "x": 7700,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Exit! > ",
            "angle": 0,
            "story": false
        },
        {
            "x": 7125,
            "y": 2225,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Bounce!",
            "angle": 0,
            "story": false
        },
        {
            "x": 425,
            "y": 725,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "< Button",
            "angle": 0,
            "story": false
        },
        {
            "x": 175,
            "y": -110,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Planet of Slight Hurdles (PoSH)",
            "angle": 0,
            "story": false
        },
        {
            "x": 175,
            "y": -75,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Creator: Smelty",
            "angle": 0,
            "story": false
        },
        {
            "x": 175,
            "y": -40,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Difficulty: Low Moderate",
            "angle": 0,
            "story": false
        },
        {
            "x": 2575,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Approaching the end...",
            "angle": 0,
            "story": false
        },
        {
            "x": 175,
            "y": 2025,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "v Need Coins? ",
            "angle": 0,
            "story": false
        }
    ]
    
    const str = convertOldExMap(obs, enemies, safes, texts, counter, 'posh');
    
    // eval(str);
    console.log(str);

    spawnPosition.x=50;
    spawnPosition.y=50;
    shared.respawnPlayer();
    colors.background='#5260ab'; colors.tile='#323c81';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
    });

    mapDimensions.x=24000;
    mapDimensions.y=12000;
})();