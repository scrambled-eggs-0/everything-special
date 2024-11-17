(async()=>{

    if(window.isServer !== true) await import('/maps/_converter.js');
    else require('./_converter.js');
    {
        let counter = 6000;
    
        const obs = [
            {
                "x": 1150,
                "y": 300,
                "w": 350,
                "h": 300,
                "type": "grav",
                "force": 1200,
                "dir": {
                    "x": 0,
                    "y": -1200
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 800,
                "y": 5730,
                "w": 400,
                "h": 200,
                "type": "move",
                "points": [
                    [
                        800,
                        5800
                    ],
                    [
                        800,
                        5650
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 800,
                    "y": 5800
                },
                "pointTo": {
                    "x": 800,
                    "y": 5650
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 800,
                "y": 5480,
                "w": 400,
                "h": 200,
                "type": "move",
                "points": [
                    [
                        800,
                        5550
                    ],
                    [
                        800,
                        5400
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 800,
                    "y": 5550
                },
                "pointTo": {
                    "x": 800,
                    "y": 5400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 925,
                "y": 5550,
                "w": 150,
                "h": 300,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "points": [
                    [
                        2550,
                        4000
                    ],
                    [
                        2550,
                        4100
                    ],
                    [
                        2450,
                        4100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2450,
                    "right": 2550,
                    "top": 4000,
                    "bottom": 4100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1425,
                "y": 2500,
                "w": 25,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 550,
                "y": 1000,
                "w": 50,
                "h": 50,
                "morphId": 3,
                "type": "morphbutton",
                "active": true,
                "maxTimedObstacles": 0,
                "timedObstacles": 0,
                "inView": false
            },
            {
                "x": 100,
                "y": 925,
                "w": 50,
                "h": 50,
                "type": "color",
                "bgColor": "#1b2550",
                "tileColor": "#48497a",
                "inView": false
            },
            {
                "x": 50,
                "y": 900,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 2,
                "inView": false
            },
            {
                "x": 2000,
                "y": 6000,
                "w": 215,
                "h": 80,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 4000,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 6,
                "inView": false
            },
            {
                "x": 2350,
                "y": 8400,
                "w": 1600,
                "h": 1600,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2575,
                "y": 9775,
                "w": 1350,
                "h": 200,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2375,
                "y": 8625,
                "w": 200,
                "h": 1350,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2375,
                "y": 8425,
                "w": 1350,
                "h": 200,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 3725,
                "y": 8425,
                "w": 200,
                "h": 1350,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2675,
                "y": 9525,
                "w": 800,
                "h": 150,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2675,
                "y": 8725,
                "w": 150,
                "h": 800,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2825,
                "y": 8725,
                "w": 800,
                "h": 150,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 3475,
                "y": 8875,
                "w": 150,
                "h": 800,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 3025,
                "y": 9325,
                "w": 350,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 3275,
                "y": 8975,
                "w": 100,
                "h": 350,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2925,
                "y": 9075,
                "w": 100,
                "h": 350,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 2925,
                "y": 8975,
                "w": 350,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.25,
                "inView": false
            },
            {
                "x": 100,
                "y": 9050,
                "w": 2050,
                "h": 50,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1775,
                "y": 8525,
                "w": 1000,
                "h": 25,
                "type": "rotate-lava",
                "angle": 45,
                "rotateSpeed": 0,
                "pivotX": 1775,
                "pivotY": 8525,
                "distToPivot": 0,
                "canCollide": false,
                "renderType": "rotating",
                "cullingRadius": 500.15622559356393,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1686.6295090389995,
                "y": 8436.629509038932,
                "w": 75,
                "h": 75,
                "type": "movingsafe",
                "points": [
                    [
                        1425,
                        8175
                    ],
                    [
                        2050,
                        8800
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1425,
                    "y": 8175
                },
                "pointTo": {
                    "x": 2050,
                    "y": 8800
                },
                "xv": 106.06601717798213,
                "yv": 106.06601717798212,
                "inView": false
            },
            {
                "x": 1788.370490961,
                "y": 8538.370490961068,
                "w": 75,
                "h": 75,
                "type": "movingsafe",
                "points": [
                    [
                        1425,
                        8175
                    ],
                    [
                        2050,
                        8800
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2050,
                    "y": 8800
                },
                "pointTo": {
                    "x": 1425,
                    "y": 8175
                },
                "xv": -106.06601717798212,
                "yv": -106.06601717798213,
                "inView": false
            },
            {
                "x": 3875,
                "y": 6875,
                "r": 125,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 125,
                "inView": false
            },
            {
                "x": 3875,
                "y": 6875,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 100,
                "y": 7125,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 100,
                "y": 7125,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 200,
                "y": 6700,
                "w": 3600,
                "h": 550,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 200,
                "y": 6700,
                "w": 3600,
                "h": 550,
                "type": "speed",
                "speedInc": 2,
                "inView": false
            },
            {
                "x": 225,
                "y": 6700,
                "w": 3550,
                "h": 550,
                "type": "timetrap",
                "time": 0,
                "maxTime": 5.65,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 2600,
                "y": 5725,
                "w": 75,
                "h": 75,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2637.5,
                "y": 5762.5,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2655,
                "y": 5745,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1250,
                "y": 6000,
                "w": 150,
                "h": 150,
                "spawn": {
                    "x": 1325,
                    "y": 6075
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 200,
                "y": 0,
                "w": 100,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1.5308084989341915e-15,
                "y": 100,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 100,
                "y": 55,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        100,
                        0
                    ],
                    [
                        100,
                        250
                    ]
                ],
                "speed": 225,
                "currentPoint": 0,
                "collidable": false,
                "pointOn": {
                    "x": 100,
                    "y": 0
                },
                "pointTo": {
                    "x": 100,
                    "y": 250
                },
                "xv": 1.3777276490407723e-14,
                "yv": 225,
                "inView": true
            },
            {
                "x": 100,
                "y": 300,
                "w": 200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 0,
                "y": 200,
                "w": 100,
                "h": 200,
                "type": "lava",
                "canCollide": false,
                "inView": true
            },
            {
                "x": 100,
                "y": 250,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": -50,
                "y": 300,
                "w": 225,
                "h": 30,
                "type": "rotatingsafe",
                "angle": 296,
                "rotateSpeed": 120,
                "pivotX": -50,
                "pivotY": 300,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 113.49559462816167,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 1.3777276490407726e-14,
                "y": 450,
                "w": 100,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "sat": {
                    "pos": {
                        "x": 1.3777276490407726e-14,
                        "y": 450
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
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 100,
                            "y": 700
                        },
                        {
                            "x": 0,
                            "y": 700
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 700
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -700
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
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 100,
                            "y": 700
                        },
                        {
                            "x": 0,
                            "y": 700
                        }
                    ]
                },
                "inView": false
            },
            {
                "x": 130,
                "y": 400,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        100,
                        400
                    ],
                    [
                        300,
                        400
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 300,
                    "y": 400
                },
                "pointTo": {
                    "x": 100,
                    "y": 400
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true
            },
            {
                "x": 130,
                "y": 500,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        100,
                        500
                    ],
                    [
                        300,
                        500
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 300,
                    "y": 500
                },
                "pointTo": {
                    "x": 100,
                    "y": 500
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 250,
                "y": 475,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 100,
                "y": 550,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "sat": {
                    "pos": {
                        "x": 100,
                        "y": 550
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
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 300,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -50
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
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 300,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                },
                "inView": false
            },
            {
                "x": 350,
                "y": 500,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 400,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": 300,
                "y": 350,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "points": [
                    [
                        600,
                        350
                    ],
                    [
                        600,
                        500
                    ],
                    [
                        450,
                        500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 600,
                    "top": 350,
                    "bottom": 500
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 400,
                "y": 500,
                "w": 200,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 450,
                "y": 350,
                "w": 150,
                "h": 25,
                "type": "rotate-lava",
                "angle": 370,
                "rotateSpeed": 150,
                "pivotX": 450,
                "pivotY": 350,
                "distToPivot": 0,
                "canCollide": false,
                "renderType": "rotating",
                "cullingRadius": 76.03453162872775,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 500,
                "y": 400,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": true
            },
            {
                "x": 300,
                "y": 250,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "points": [
                    [
                        300,
                        300
                    ],
                    [
                        500,
                        300
                    ],
                    [
                        400,
                        350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 300,
                    "right": 500,
                    "top": 300,
                    "bottom": 350
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        300,
                        300
                    ],
                    [
                        400,
                        350
                    ],
                    [
                        300,
                        350
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 300,
                    "right": 400,
                    "top": 300,
                    "bottom": 350
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 300,
                "y": 0,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 550,
                "y": 43.33333333333338,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        150
                    ],
                    [
                        550,
                        0
                    ]
                ],
                "speed": 200,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 550,
                    "y": 0
                },
                "pointTo": {
                    "x": 550,
                    "y": 150
                },
                "xv": 1.2246467991473532e-14,
                "yv": 200,
                "inView": true
            },
            {
                "x": 700,
                "y": 43.33333333333338,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        150
                    ],
                    [
                        700,
                        0
                    ]
                ],
                "speed": 200,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 700,
                    "y": 0
                },
                "pointTo": {
                    "x": 700,
                    "y": 150
                },
                "xv": 1.2246467991473532e-14,
                "yv": 200,
                "inView": true
            },
            {
                "x": 675,
                "y": 150,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": true
            },
            {
                "x": 675,
                "y": 250,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 600,
                "y": 250,
                "w": 100,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 800,
                "y": 0,
                "w": 50,
                "h": 350,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": 700,
                "y": 400,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": 700,
                "y": 600,
                "w": 150,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 0,
                "w": 200,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 0,
                "w": 100,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 350,
                "w": 200,
                "h": 400,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 900,
                "y": 395,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        900,
                        375
                    ],
                    [
                        900,
                        550
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 900,
                    "y": 375
                },
                "pointTo": {
                    "x": 900,
                    "y": 550
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 950,
                "y": 705,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        950,
                        550
                    ],
                    [
                        950,
                        725
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 950,
                    "y": 725
                },
                "pointTo": {
                    "x": 950,
                    "y": 550
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 700,
                "y": 450,
                "w": 200,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 550,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 750,
                "w": 200,
                "h": 50,
                "type": "grav",
                "force": 2000,
                "dir": {
                    "x": -2000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        350
                    ],
                    [
                        1050,
                        350
                    ],
                    [
                        1050,
                        450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 350,
                    "bottom": 450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        0
                    ],
                    [
                        800,
                        0
                    ],
                    [
                        625,
                        50
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 800,
                    "top": 0,
                    "bottom": 50
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 850,
                "y": 800,
                "w": 200,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 870,
                "w": 100,
                "h": 75,
                "type": "lavamove",
                "points": [
                    [
                        650,
                        750
                    ],
                    [
                        650,
                        875
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 650,
                    "y": 750
                },
                "pointTo": {
                    "x": 650,
                    "y": 875
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 550,
                "y": 755,
                "w": 100,
                "h": 75,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        875
                    ],
                    [
                        550,
                        750
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 875
                },
                "pointTo": {
                    "x": 550,
                    "y": 750
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 500,
                "y": 750,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 750,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 750,
                "w": 50,
                "h": 150,
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
                "x": 400,
                "y": 950,
                "w": 750,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 950,
                "r": 10,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 650,
                "y": 950,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 150,
                "y": 900,
                "w": 250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 866.6666666666779,
                "w": 100,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        750
                    ],
                    [
                        400,
                        875
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 750
                },
                "pointTo": {
                    "x": 400,
                    "y": 875
                },
                "xv": 1.5308084989341916e-14,
                "yv": 250,
                "inView": false
            },
            {
                "points": [
                    [
                        250,
                        775
                    ],
                    [
                        275,
                        900
                    ],
                    [
                        225,
                        900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 225,
                    "right": 275,
                    "top": 775,
                    "bottom": 900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 0,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "inView": true
            },
            {
                "x": 100,
                "y": 1100,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 1000,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 1100,
                "w": 50,
                "h": 100,
                "type": "grav",
                "force": 3500,
                "dir": {
                    "x": 0,
                    "y": 3500
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 50,
                "y": 1200,
                "w": 300,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 30,
                "y": 1150,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        0,
                        1150
                    ],
                    [
                        200,
                        1150
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 200,
                    "y": 1150
                },
                "pointTo": {
                    "x": 0,
                    "y": 1150
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 0,
                "y": 1150,
                "w": 200,
                "h": 50,
                "type": "grav",
                "force": 3500,
                "dir": {
                    "x": 0,
                    "y": 3500
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 170,
                "y": 1150,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        200,
                        1150
                    ],
                    [
                        0,
                        1150
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 0,
                    "y": 1150
                },
                "pointTo": {
                    "x": 200,
                    "y": 1150
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        1300
                    ],
                    [
                        150,
                        1450
                    ],
                    [
                        0,
                        1450
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 0,
                    "right": 150,
                    "top": 1300,
                    "bottom": 1450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 1450,
                "w": 750,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 1350,
                "w": 200,
                "h": 50,
                "type": "rotate-lava",
                "angle": -3,
                "rotateSpeed": -180,
                "pivotX": 250,
                "pivotY": 1350,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 103.07764064044152,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "points": [
                    [
                        150,
                        1250
                    ],
                    [
                        350,
                        1250
                    ],
                    [
                        250,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 150,
                    "right": 350,
                    "top": 1250,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 350,
                "y": 1000,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 1000,
                "w": 150,
                "h": 400,
                "type": "switchlava",
                "onTime": 0.9,
                "offTime": 0.9,
                "state": true,
                "timer": 0.23333333333333534,
                "collidable": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 1050,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 476.66666666666106,
                "y": 1175,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        400,
                        1175
                    ],
                    [
                        500,
                        1175
                    ]
                ],
                "speed": 50,
                "currentPoint": 1,
                "pointOn": {
                    "x": 500,
                    "y": 1175
                },
                "pointTo": {
                    "x": 400,
                    "y": 1175
                },
                "xv": -50,
                "yv": 6.123233995736766e-15,
                "inView": false
            },
            {
                "x": 550,
                "y": 1000,
                "w": 50,
                "h": 50,
                "type": "grav",
                "force": 500,
                "dir": {
                    "x": 500,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 630,
                "y": 1100,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        600,
                        1100
                    ],
                    [
                        800,
                        1100
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 800,
                    "y": 1100
                },
                "pointTo": {
                    "x": 600,
                    "y": 1100
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 770,
                "y": 1200,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        600,
                        1200
                    ],
                    [
                        800,
                        1200
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": false,
                "pointOn": {
                    "x": 600,
                    "y": 1200
                },
                "pointTo": {
                    "x": 800,
                    "y": 1200
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 630,
                "y": 1300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        600,
                        1300
                    ],
                    [
                        800,
                        1300
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 800,
                    "y": 1300
                },
                "pointTo": {
                    "x": 600,
                    "y": 1300
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 850,
                "y": 1000,
                "w": 150,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 625,
                "y": 1175,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 775,
                "y": 1175,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3.520859547548638e-14,
                "y": 1500,
                "w": 750,
                "h": 1500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 1450,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 925,
                "y": 1625,
                "w": 350,
                "h": 50,
                "type": "rotate-lava",
                "angle": 0.75,
                "rotateSpeed": 45,
                "pivotX": 925,
                "pivotY": 1625,
                "distToPivot": 0,
                "canCollide": false,
                "renderType": "rotating",
                "cullingRadius": 176.7766952966369,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 925,
                "y": 1625,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 900,
                "y": 1450,
                "w": 50,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 1800,
                "w": 350,
                "h": 1200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 1750,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 1750,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1024.9657324975558,
                "y": 1622.3823051692127,
                "w": 25,
                "h": 25,
                "type": "rotatingsafe",
                "angle": -1.5,
                "rotateSpeed": -90,
                "pivotX": 925,
                "pivotY": 1625,
                "distToPivot": 100,
                "canCollide": true,
                "cullingRadius": 117.67766952966369,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 825.0342675024443,
                "y": 1627.6176948307873,
                "w": 25,
                "h": 25,
                "type": "rotatingsafe",
                "angle": 178.5,
                "rotateSpeed": -90,
                "pivotX": 925,
                "pivotY": 1625,
                "distToPivot": 100,
                "canCollide": true,
                "cullingRadius": 117.67766952966369,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1000,
                "y": 1000,
                "w": 450,
                "h": 450,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1200,
                "y": 1450,
                "w": 500,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 600,
                "w": 50,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 900,
                "w": 200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1320,
                "y": 1380,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1380
                    ],
                    [
                        1360,
                        1380
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1360,
                    "y": 1380
                },
                "pointTo": {
                    "x": 1030,
                    "y": 1380
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1215,
                "y": 1330,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1330
                    ],
                    [
                        1360,
                        1330
                    ]
                ],
                "speed": 75,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1030,
                    "y": 1330
                },
                "pointTo": {
                    "x": 1360,
                    "y": 1330
                },
                "xv": 75,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1135,
                "y": 1280,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1280
                    ],
                    [
                        1360,
                        1280
                    ]
                ],
                "speed": 225,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1360,
                    "y": 1280
                },
                "pointTo": {
                    "x": 1030,
                    "y": 1280
                },
                "xv": -225,
                "yv": 2.7554552980815446e-14,
                "inView": false
            },
            {
                "x": 1320,
                "y": 1230,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1230
                    ],
                    [
                        1360,
                        1230
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1360,
                    "y": 1230
                },
                "pointTo": {
                    "x": 1030,
                    "y": 1230
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1070,
                "y": 1180,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1180
                    ],
                    [
                        1360,
                        1180
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1030,
                    "y": 1180
                },
                "pointTo": {
                    "x": 1360,
                    "y": 1180
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1276.6666666666442,
                "y": 1130,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1130
                    ],
                    [
                        1360,
                        1130
                    ]
                ],
                "speed": 100,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1030,
                    "y": 1130
                },
                "pointTo": {
                    "x": 1360,
                    "y": 1130
                },
                "xv": 100,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1196.6666666666442,
                "y": 1080,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1080
                    ],
                    [
                        1360,
                        1080
                    ]
                ],
                "speed": 200,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1360,
                    "y": 1080
                },
                "pointTo": {
                    "x": 1030,
                    "y": 1080
                },
                "xv": -200,
                "yv": 2.4492935982947064e-14,
                "inView": false
            },
            {
                "x": 1113.3333333333558,
                "y": 1030,
                "w": 70,
                "h": 40,
                "type": "movingsafe",
                "points": [
                    [
                        1030,
                        1030
                    ],
                    [
                        1360,
                        1030
                    ]
                ],
                "speed": 100,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1360,
                    "y": 1030
                },
                "pointTo": {
                    "x": 1030,
                    "y": 1030
                },
                "xv": -100,
                "yv": 1.2246467991473532e-14,
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        1075
                    ],
                    [
                        175,
                        1100
                    ],
                    [
                        100,
                        1100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 175,
                    "top": 1075,
                    "bottom": 1100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        175,
                        1000
                    ],
                    [
                        250,
                        1000
                    ],
                    [
                        250,
                        1025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 175,
                    "right": 250,
                    "top": 1000,
                    "bottom": 1025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        700
                    ],
                    [
                        1350,
                        900
                    ],
                    [
                        1150,
                        900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1350,
                    "top": 700,
                    "bottom": 900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        600
                    ],
                    [
                        1450,
                        600
                    ],
                    [
                        1450,
                        800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1450,
                    "top": 600,
                    "bottom": 800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1186.0491817317106,
                "y": 636.0491817317106,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        600
                    ],
                    [
                        1350,
                        800
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": false,
                "pointOn": {
                    "x": 1150,
                    "y": 600
                },
                "pointTo": {
                    "x": 1350,
                    "y": 800
                },
                "xv": 176.7766952966369,
                "yv": 176.77669529663686,
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        690
                    ],
                    [
                        1360,
                        700
                    ],
                    [
                        1250,
                        810
                    ],
                    [
                        1240,
                        800
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1240,
                    "right": 1360,
                    "top": 690,
                    "bottom": 810
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1250,
                "y": 500,
                "w": 250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 450,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 250,
                "w": 350,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 300,
                "w": 250,
                "h": 25,
                "type": "rotate-lava",
                "angle": -1.5,
                "rotateSpeed": -90,
                "pivotX": 1375,
                "pivotY": 300,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 125.62344526401112,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1150,
                "y": 0,
                "w": 350,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 350,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 1500,
                "y": 0,
                "w": 200,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 0,
                "w": 1300,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        525
                    ],
                    [
                        1575,
                        600
                    ],
                    [
                        1500,
                        750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1500,
                    "right": 1575,
                    "top": 525,
                    "bottom": 750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1625,
                        500
                    ],
                    [
                        1700,
                        500
                    ],
                    [
                        1700,
                        575
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1625,
                    "right": 1700,
                    "top": 500,
                    "bottom": 575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1520,
                "y": 525,
                "w": 25,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1500,
                        525
                    ],
                    [
                        1675,
                        525
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1500,
                    "y": 525
                },
                "pointTo": {
                    "x": 1675,
                    "y": 525
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1700,
                "y": 650,
                "w": 100,
                "h": 100,
                "type": "switchlava",
                "onTime": 0.7,
                "offTime": 0.7,
                "state": false,
                "timer": 0.3333333333333335,
                "collidable": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 750,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1575,
                        600
                    ],
                    [
                        1600,
                        750
                    ],
                    [
                        1500,
                        750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1500,
                    "right": 1600,
                    "top": 600,
                    "bottom": 750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1800,
                "y": 800,
                "w": 100,
                "h": 100,
                "spawn": {
                    "x": 1850,
                    "y": 850
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 1900,
                "y": 650,
                "w": 1100,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 650,
                "w": 100,
                "h": 150,
                "type": "grav",
                "force": 7500,
                "dir": {
                    "x": 0,
                    "y": 7500
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 1800,
                "y": 775,
                "w": 100,
                "h": 75,
                "type": "color",
                "bgColor": "#4b1452",
                "tileColor": "#804181",
                "inView": false
            },
            {
                "x": 1800,
                "y": 900,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 800,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1000,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 950,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1200,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1750,
                "y": 1046.6666666666624,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1750,
                        850
                    ],
                    [
                        1750,
                        1150
                    ]
                ],
                "speed": 650,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 1150
                },
                "pointTo": {
                    "x": 1750,
                    "y": 850
                },
                "xv": 3.980102097228898e-14,
                "yv": -650,
                "inView": false
            },
            {
                "x": 1750,
                "y": 800,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1725,
                "y": 975,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1593.3333333333558,
                "y": 800,
                "w": 25,
                "h": 250,
                "type": "lavamove",
                "points": [
                    [
                        1675,
                        800
                    ],
                    [
                        1500,
                        800
                    ]
                ],
                "speed": 175,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1675,
                    "y": 800
                },
                "pointTo": {
                    "x": 1500,
                    "y": 800
                },
                "xv": -175,
                "yv": 2.1431318985078682e-14,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1050,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 1050,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        800
                    ],
                    [
                        1700,
                        800
                    ],
                    [
                        1500,
                        900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1500,
                    "right": 1700,
                    "top": 800,
                    "bottom": 900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1650,
                "y": 1336.6666666666442,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        1150
                    ],
                    [
                        1650,
                        1350
                    ]
                ],
                "speed": 400,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1650,
                    "y": 1150
                },
                "pointTo": {
                    "x": 1650,
                    "y": 1350
                },
                "xv": 2.4492935982947064e-14,
                "yv": 400,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1350,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1725,
                "y": 1325,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1500,
                "y": 1300,
                "w": 150,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 1400,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 1150,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1250,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1750,
                "y": 1486.6666666666442,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1750,
                        1300
                    ],
                    [
                        1750,
                        1500
                    ]
                ],
                "speed": 400,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 1300
                },
                "pointTo": {
                    "x": 1750,
                    "y": 1500
                },
                "xv": 2.4492935982947064e-14,
                "yv": 400,
                "inView": false
            },
            {
                "x": 1800,
                "y": 1400,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 1300,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1450,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1750,
                "y": 1550,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1825,
                "y": 1375,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1625,
                "y": 1275,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1300,
                "w": 150,
                "h": 50,
                "type": "push",
                "dir": "down",
                "max": 350,
                "pushBack": 20,
                "startX": 1850,
                "startY": 1300,
                "pusherId": 0.720266595942173,
                "xv": 0,
                "yv": 0,
                "pushing": false,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1075,
                "w": 150,
                "h": 5,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1250,
                "w": 150,
                "h": 5,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2000,
                "y": 1050,
                "w": 50,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1950,
                "y": 900,
                "w": 1050,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2000,
                "y": 950,
                "w": 1000,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1970,
                "y": 1050,
                "w": 25,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1850,
                        1050
                    ],
                    [
                        1975,
                        1050
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1850,
                    "y": 1050
                },
                "pointTo": {
                    "x": 1975,
                    "y": 1050
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1855,
                "y": 1225,
                "w": 25,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1975,
                        1225
                    ],
                    [
                        1850,
                        1225
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1975,
                    "y": 1225
                },
                "pointTo": {
                    "x": 1850,
                    "y": 1225
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1400,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2050,
                "y": 1050,
                "w": 150,
                "h": 300,
                "type": "grav",
                "force": 50000,
                "dir": {
                    "x": 0,
                    "y": 50000
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 2200,
                "y": 1000,
                "w": 800,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2075,
                "y": 1400,
                "w": 100,
                "h": 50,
                "type": "timetrap",
                "time": 0,
                "maxTime": 0.09,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 2050,
                "y": 1175,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2125,
                "y": 1200,
                "w": 150,
                "h": 25,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 2125,
                "pivotY": 1200,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 76.03453162872775,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "points": [
                    [
                        2200,
                        1450
                    ],
                    [
                        2200,
                        1650
                    ],
                    [
                        2050,
                        1650
                    ],
                    [
                        2050,
                        1600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2050,
                    "right": 2200,
                    "top": 1450,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1900,
                "y": 1600,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1850,
                        1450
                    ],
                    [
                        2050,
                        1450
                    ],
                    [
                        1850,
                        1550
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1850,
                    "right": 2050,
                    "top": 1450,
                    "bottom": 1550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1713.3333333333558,
                "y": 1600,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        1600
                    ],
                    [
                        1850,
                        1600
                    ]
                ],
                "speed": 350,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1650,
                    "y": 1600
                },
                "pointTo": {
                    "x": 1850,
                    "y": 1600
                },
                "xv": 350,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1713.3333333333558,
                "y": 1700,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        1700
                    ],
                    [
                        1850,
                        1700
                    ]
                ],
                "speed": 350,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1650,
                    "y": 1700
                },
                "pointTo": {
                    "x": 1850,
                    "y": 1700
                },
                "xv": 350,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1800,
                "y": 1675,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1900,
                "y": 1650,
                "w": 1100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1750,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1600,
                "w": 500,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 1700,
                "w": 450,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 1750,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 1650,
                "w": 50,
                "h": 50,
                "type": "switchlava",
                "onTime": 0.5,
                "offTime": 0.5,
                "state": true,
                "timer": 0.033333333333329745,
                "collidable": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 1625,
                "w": 100,
                "h": 25,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 1325,
                "pivotY": 1625,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 51.53882032022076,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1580,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        1550
                    ],
                    [
                        1150,
                        1650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 1650
                },
                "pointTo": {
                    "x": 1150,
                    "y": 1550
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1450,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1850,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 1800,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1900,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 1800,
                "w": 150,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 1950,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 1850,
                "w": 50,
                "h": 1150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2000,
                "w": 275,
                "h": 1000,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 1900,
                "w": 100,
                "h": 100,
                "spawn": {
                    "x": 1400,
                    "y": 1950
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 1325,
                "y": 1900,
                "w": 100,
                "h": 75,
                "type": "color",
                "bgColor": "#521414",
                "tileColor": "#814141",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        600
                    ],
                    [
                        875,
                        600
                    ],
                    [
                        850,
                        725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 875,
                    "top": 600,
                    "bottom": 725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1450,
                "y": 1800,
                "w": 1550,
                "h": 1400,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 0,
                "y": 3000,
                "w": 1450,
                "h": 1000,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 1800,
                "w": 1550,
                "h": 1400,
                "type": "speed",
                "speedInc": 1.37,
                "inView": false
            },
            {
                "x": 1450,
                "y": 1800,
                "w": 1550,
                "h": 1400,
                "type": "timetrap",
                "time": 0,
                "maxTime": 17,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "points": [
                    [
                        1625,
                        1925
                    ],
                    [
                        1925,
                        2225
                    ],
                    [
                        1875,
                        2225
                    ],
                    [
                        1625,
                        1975
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1625,
                    "right": 1925,
                    "top": 1925,
                    "bottom": 2225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1550,
                "y": 2625,
                "r": 115,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 115,
                "inView": false
            },
            {
                "x": 1575,
                "y": 2600,
                "w": 175,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 2625,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 1425,
                "y": 2000,
                "w": 25,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 2750,
                "w": 25,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1625,
                        2700
                    ],
                    [
                        1825,
                        2900
                    ],
                    [
                        1800,
                        2925
                    ],
                    [
                        1600,
                        2725
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1600,
                    "right": 1825,
                    "top": 2700,
                    "bottom": 2925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2090,
                        2140
                    ],
                    [
                        2145,
                        2140
                    ],
                    [
                        2050,
                        2725
                    ],
                    [
                        2000,
                        2725
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2000,
                    "right": 2145,
                    "top": 2140,
                    "bottom": 2725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2250,
                "y": 2050,
                "w": 350,
                "h": 75,
                "type": "rotatingsafe",
                "angle": 2,
                "rotateSpeed": 120,
                "pivotX": 2250,
                "pivotY": 2050,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 178.97276329095442,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2250,
                "y": 2050,
                "w": 350,
                "h": 75,
                "type": "rotatingsafe",
                "angle": 92,
                "rotateSpeed": 120,
                "pivotX": 2250,
                "pivotY": 2050,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 178.97276329095442,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2250,
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
                        2575,
                        2025
                    ],
                    [
                        2900,
                        2350
                    ],
                    [
                        2850,
                        2350
                    ],
                    [
                        2575,
                        2075
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2575,
                    "right": 2900,
                    "top": 2025,
                    "bottom": 2350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2325,
                "y": 2395,
                "w": 400,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        2325,
                        2325
                    ],
                    [
                        2325,
                        2475
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2325,
                    "y": 2325
                },
                "pointTo": {
                    "x": 2325,
                    "y": 2475
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 2350,
                "y": 2950,
                "r": 175,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 175,
                "inView": false
            },
            {
                "x": 2450,
                "y": 2800,
                "w": 75,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 2950,
                "r": 150,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 150,
                "inView": false
            },
            {
                "x": 2350,
                "y": 2950,
                "w": 400,
                "h": 50,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 2350,
                "pivotY": 2950,
                "distToPivot": 0,
                "canCollide": false,
                "renderType": "rotating",
                "cullingRadius": 201.55644370746373,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "points": [
                    [
                        2775,
                        2650
                    ],
                    [
                        2775,
                        2700
                    ],
                    [
                        2525,
                        2950
                    ],
                    [
                        2500,
                        2900
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2500,
                    "right": 2775,
                    "top": 2650,
                    "bottom": 2950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2975,
                "y": 3225,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 2850,
                "y": 3200,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1450,
                "y": 3200,
                "w": 1500,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1625,
                "y": 2525,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2850,
                "y": 3250,
                "w": 150,
                "h": 150,
                "spawn": {
                    "x": 2925,
                    "y": 3325
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 2500,
                "y": 3400,
                "w": 400,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 3300,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2700,
                "y": 3350,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2450,
                "y": 3250,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2500,
                "y": 3350,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2800,
                        3325
                    ],
                    [
                        2825,
                        3400
                    ],
                    [
                        2800,
                        3400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2800,
                    "right": 2825,
                    "top": 3325,
                    "bottom": 3400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2900,
                "y": 3250,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#163c28",
                "tileColor": "#326247",
                "inView": false
            },
            {
                "x": 2670,
                "y": 3350,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2500,
                        3350
                    ],
                    [
                        2700,
                        3350
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 2500,
                    "y": 3350
                },
                "pointTo": {
                    "x": 2700,
                    "y": 3350
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 2530,
                "y": 3350,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2500,
                        3350
                    ],
                    [
                        2700,
                        3350
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2700,
                    "y": 3350
                },
                "pointTo": {
                    "x": 2500,
                    "y": 3350
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1200,
                "y": 1900,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 1250,
                "y": 1950,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 2250,
                "y": 3250,
                "w": 200,
                "h": 200,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2370,
                "y": 3300,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        2300,
                        3300
                    ],
                    [
                        2450,
                        3300
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2300,
                    "y": 3300
                },
                "pointTo": {
                    "x": 2450,
                    "y": 3300
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 2400,
                "y": 3475,
                "w": 200,
                "h": 35,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 2400,
                "pivotY": 3475,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 101.51970252123476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2100,
                "y": 3600,
                "w": 900,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2500,
                        3575
                    ],
                    [
                        2500,
                        3600
                    ],
                    [
                        2475,
                        3600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2475,
                    "right": 2500,
                    "top": 3575,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2250,
                "y": 3450,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2275,
                "y": 3575,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 2200,
                "y": 3451.6666666667115,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2200,
                        3250
                    ],
                    [
                        2200,
                        3550
                    ]
                ],
                "speed": 325,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 2200,
                    "y": 3250
                },
                "pointTo": {
                    "x": 2200,
                    "y": 3550
                },
                "xv": 1.990051048614449e-14,
                "yv": 325,
                "inView": false
            },
            {
                "x": 2150,
                "y": 3500,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2150,
                "y": 3410,
                "w": 30,
                "h": 30,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2100,
                "y": 3300,
                "w": 75,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2100,
                "y": 3350,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 3250,
                "w": 600,
                "h": 150,
                "type": "grav",
                "force": 2000,
                "dir": {
                    "x": -2000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 1500,
                "y": 3250,
                "w": 600,
                "h": 150,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 1500,
                "y": 3400,
                "w": 600,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 3250,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1850,
                "y": 3250,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1825,
                "y": 3330,
                "w": 100,
                "h": 37.5,
                "type": "movingsafe",
                "points": [
                    [
                        1825,
                        3250
                    ],
                    [
                        1825,
                        3362.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1825,
                    "y": 3362.5
                },
                "pointTo": {
                    "x": 1825,
                    "y": 3250
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1575,
                "y": 3282.5,
                "w": 100,
                "h": 37.5,
                "type": "movingsafe",
                "points": [
                    [
                        1575,
                        3250
                    ],
                    [
                        1575,
                        3362.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1575,
                    "y": 3250
                },
                "pointTo": {
                    "x": 1575,
                    "y": 3362.5
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 1450,
                "y": 3250,
                "w": 50,
                "h": 150,
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
                "x": 1525,
                "y": 3450,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1525,
                "y": 3550,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 3450,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 3600,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1825,
                "y": 3550,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1825,
                "y": 3450,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1975,
                "y": 3450,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1975,
                "y": 3600,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1491.6666666666442,
                "y": 3475,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1450,
                        3475
                    ],
                    [
                        2025,
                        3475
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1450,
                    "y": 3475
                },
                "pointTo": {
                    "x": 2025,
                    "y": 3475
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1983.3333333333558,
                "y": 3575,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1450,
                        3575
                    ],
                    [
                        2025,
                        3575
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2025,
                    "y": 3575
                },
                "pointTo": {
                    "x": 1450,
                    "y": 3575
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1491.6666666666442,
                "y": 3575,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1450,
                        3575
                    ],
                    [
                        2025,
                        3575
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1450,
                    "y": 3575
                },
                "pointTo": {
                    "x": 2025,
                    "y": 3575
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1983.3333333333558,
                "y": 3475,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1450,
                        3475
                    ],
                    [
                        2025,
                        3475
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2025,
                    "y": 3475
                },
                "pointTo": {
                    "x": 1450,
                    "y": 3475
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 2175,
                "y": 3775,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -2.6666666666666665,
                "rotateSpeed": -160,
                "pivotX": 2175,
                "pivotY": 3775,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2150,
                "y": 3650,
                "w": 50,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2050,
                "y": 3900,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2300,
                "y": 3900,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1450,
                "y": 3650,
                "w": 600,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2050,
                "y": 3900,
                "w": 250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2300,
                "y": 3850,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 3650,
                "w": 200,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2375,
                "y": 3775,
                "w": 250,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 92.66666666666666,
                "rotateSpeed": 160,
                "pivotX": 2375,
                "pivotY": 3775,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 127.47548783981962,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2460,
                "y": 3925,
                "r": 35,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 2375,
                "y": 3775,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2140,
                "y": 4000,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        2050,
                        4000
                    ],
                    [
                        2650,
                        4000
                    ]
                ],
                "speed": 450,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2650,
                    "y": 4000
                },
                "pointTo": {
                    "x": 2050,
                    "y": 4000
                },
                "xv": -450,
                "yv": 5.510910596163089e-14,
                "inView": false
            },
            {
                "x": 2325,
                "y": 4000,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2250,
                "y": 4000,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2175,
                "y": 4000,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2100,
                "y": 4000,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2050,
                "y": 4100,
                "w": 500,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2550,
                "y": 3650,
                "w": 450,
                "h": 1450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2000,
                "y": 4050,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1600,
                "y": 4000,
                "w": 350,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 4150,
                "w": 800,
                "h": 800,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2400,
                "y": 4150,
                "w": 150,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 4950,
                "w": 850,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 4000,
                "w": 50,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2000,
                "y": 4150,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2349.9700146509026,
                "y": 4554.58135844997,
                "w": 100,
                "h": 100,
                "type": "rotatingsafe",
                "angle": 0.75,
                "rotateSpeed": 45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 350,
                "canCollide": true,
                "cullingRadius": 420.71067811865476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1995.4186415500294,
                "y": 4899.970014650902,
                "w": 100,
                "h": 100,
                "type": "rotatingsafe",
                "angle": 90.75,
                "rotateSpeed": 45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 350,
                "canCollide": true,
                "cullingRadius": 420.71067811865476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1650.0299853490976,
                "y": 4545.41864155003,
                "w": 100,
                "h": 100,
                "type": "rotatingsafe",
                "angle": 180.75,
                "rotateSpeed": 45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 350,
                "canCollide": true,
                "cullingRadius": 420.71067811865476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2004.5813584499706,
                "y": 4200.029985349098,
                "w": 100,
                "h": 100,
                "type": "rotatingsafe",
                "angle": 270.75,
                "rotateSpeed": 45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 350,
                "canCollide": true,
                "cullingRadius": 420.71067811865476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2249.9785818935015,
                "y": 4546.7276011071635,
                "w": 100,
                "h": 75,
                "type": "rotatingsafe",
                "angle": -0.75,
                "rotateSpeed": -45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 250,
                "canCollide": true,
                "cullingRadius": 312.5,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1877.8446896257612,
                "y": 4768.124001768199,
                "w": 100,
                "h": 75,
                "type": "rotatingsafe",
                "angle": 119.25,
                "rotateSpeed": -45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 250,
                "canCollide": true,
                "cullingRadius": 312.5,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1872.176728480737,
                "y": 4335.148397124637,
                "w": 100,
                "h": 75,
                "type": "rotatingsafe",
                "angle": 239.25,
                "rotateSpeed": -45,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 250,
                "canCollide": true,
                "cullingRadius": 312.5,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2149.9485987463336,
                "y": 4553.926542246181,
                "w": 100,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 150,
                "canCollide": true,
                "cullingRadius": 205.90169943749476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1850.0514012536664,
                "y": 4546.073457753819,
                "w": 100,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 181.5,
                "rotateSpeed": 90,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 150,
                "canCollide": true,
                "cullingRadius": 205.90169943749476,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2000,
                "y": 4550,
                "w": 150,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 178,
                "rotateSpeed": -120,
                "pivotX": 2000,
                "pivotY": 4550,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 79.05694150420949,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1990,
                "y": 4540,
                "w": 20,
                "h": 20,
                "type": "tp",
                "tpx": 1425,
                "tpy": 4025,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 1250,
                "y": 4000,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 4150,
                "w": 100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 4000,
                "w": 125,
                "h": 125,
                "type": "color",
                "bgColor": "#223f2f",
                "tileColor": "#456352",
                "inView": false
            },
            {
                "x": 900,
                "y": 4050,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 4000,
                "w": 300,
                "h": 300,
                "type": "grav",
                "force": 7000,
                "dir": {
                    "x": -7000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 1250,
                "y": 4150,
                "w": 100,
                "h": 150,
                "type": "grav",
                "force": 7000,
                "dir": {
                    "x": -7000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 950,
                "y": 4000,
                "w": 300,
                "h": 300,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 750,
                "y": 4150,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 700,
                "y": 4000,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 4000,
                "w": 150,
                "h": 325,
                "type": "size",
                "size": 5,
                "inView": false
            },
            {
                "x": 925,
                "y": 4175,
                "w": 300,
                "h": 60,
                "type": "rotatingsafe",
                "angle": -1.5,
                "rotateSpeed": -90,
                "pivotX": 925,
                "pivotY": 4175,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 152.97058540778355,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 750,
                "y": 4350,
                "w": 700,
                "h": 250,
                "type": "switchlava",
                "onTime": 0.3,
                "offTime": 1.25,
                "state": false,
                "timer": 0.6333333333333373,
                "collidable": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 4600,
                "w": 650,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 925,
                "y": 4350,
                "w": 50,
                "h": 107.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 925,
                "y": 4550,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 4425,
                "w": 50,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 4350,
                "w": 50,
                "h": 145,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1303,
                "y": 4555,
                "w": 35,
                "h": 35,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 4575,
                "w": 25,
                "h": 25,
                "type": "rotatingsafe",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 900,
                "pivotY": 4575,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 17.67766952966369,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 1000,
                "y": 4375,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1300,
                "y": 4375,
                "w": 25,
                "h": 100,
                "type": "rotatingsafe",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 1300,
                "pivotY": 4375,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 51.53882032022076,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 800,
                "y": 4450,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "points": [
                    [
                        1175,
                        4425
                    ],
                    [
                        1125,
                        4600
                    ],
                    [
                        1075,
                        4525
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1075,
                    "right": 1175,
                    "top": 4425,
                    "bottom": 4600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        4500
                    ],
                    [
                        1275,
                        4500
                    ],
                    [
                        1200,
                        4600
                    ],
                    [
                        1175,
                        4600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1275,
                    "top": 4500,
                    "bottom": 4600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 900,
                "y": 4300,
                "w": 550,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 4450,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        4425
                    ],
                    [
                        850,
                        4600
                    ],
                    [
                        750,
                        4600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 750,
                    "right": 850,
                    "top": 4425,
                    "bottom": 4600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1400,
                "y": 4600,
                "w": 50,
                "h": 100,
                "type": "grav",
                "force": 7500,
                "dir": {
                    "x": 0,
                    "y": 7500
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 700,
                "y": 4700,
                "w": 750,
                "h": 250,
                "type": "grav",
                "force": 7500,
                "dir": {
                    "x": -7500,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 700,
                "y": 4700,
                "w": 750,
                "h": 250,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 650,
                "y": 4700,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 4705,
                "w": 550,
                "h": 62.5,
                "type": "movingsafe",
                "points": [
                    [
                        700,
                        4700
                    ],
                    [
                        700,
                        4887.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 700,
                    "y": 4887.5
                },
                "pointTo": {
                    "x": 700,
                    "y": 4700
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 750,
                "y": 4950,
                "w": 700,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 725,
                "y": 4975,
                "r": 13,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "x": 0,
                "y": 4000,
                "w": 700,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 4700,
                "w": 650,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 4950,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        5000
                    ],
                    [
                        650,
                        5000
                    ],
                    [
                        100,
                        5550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 650,
                    "top": 5000,
                    "bottom": 5550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        5100
                    ],
                    [
                        750,
                        5650
                    ],
                    [
                        200,
                        5650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 200,
                    "right": 750,
                    "top": 5100,
                    "bottom": 5650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 750,
                "y": 5050,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1.0715659492539341e-14,
                "y": 5000,
                "w": 100,
                "h": 1000,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 5100,
                "w": 300,
                "h": 25,
                "type": "rotate-lava",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 500,
                "pivotY": 5100,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 150.5199322349037,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 399.16666666666345,
                "y": 5375,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        512.5,
                        5375
                    ],
                    [
                        137.5,
                        5375
                    ]
                ],
                "speed": 350,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 512.5,
                    "y": 5375
                },
                "pointTo": {
                    "x": 137.5,
                    "y": 5375
                },
                "xv": -350,
                "yv": 4.2862637970157365e-14,
                "inView": false
            },
            {
                "x": 500,
                "y": 5100,
                "w": 300,
                "h": 25,
                "type": "rotate-lava",
                "angle": 91.5,
                "rotateSpeed": 90,
                "pivotX": 500,
                "pivotY": 5100,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 150.5199322349037,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 369.83554417054887,
                "y": 5643.719685250847,
                "w": 50,
                "h": 50,
                "type": "rotate-lava",
                "angle": -3,
                "rotateSpeed": -180,
                "pivotX": 250,
                "pivotY": 5650,
                "distToPivot": 120,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 155.35533905932738,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 325,
                "y": 5475,
                "r": 12,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12,
                "inView": false
            },
            {
                "x": 450,
                "y": 5300,
                "r": 12,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12,
                "inView": false
            },
            {
                "x": 130.16445582945113,
                "y": 5656.280314749153,
                "w": 50,
                "h": 50,
                "type": "rotate-lava",
                "angle": 177,
                "rotateSpeed": -180,
                "pivotX": 250,
                "pivotY": 5650,
                "distToPivot": 120,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 155.35533905932738,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 237.5,
                "y": 5650,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        5775
                    ],
                    [
                        125,
                        5800
                    ],
                    [
                        100,
                        5800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 125,
                    "top": 5775,
                    "bottom": 5800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 425,
                "y": 5750,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        5650
                    ],
                    [
                        750,
                        5650
                    ],
                    [
                        750,
                        5750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 600,
                    "right": 750,
                    "top": 5650,
                    "bottom": 5750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 550,
                "y": 5825,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 100,
                "y": 5800,
                "w": 700,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 5850,
                "w": 800,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 5750,
                "w": 400,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 5100,
                "w": 50,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 5050,
                "w": 400,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        5612.5
                    ],
                    [
                        1100,
                        5762.5
                    ],
                    [
                        1100,
                        5787.5
                    ],
                    [
                        900,
                        5637.5
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 900,
                    "right": 1100,
                    "top": 5612.5,
                    "bottom": 5787.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1250,
                "y": 5100,
                "w": 300,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 5100,
                "w": 50,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 5700,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1275,
                "y": 5475,
                "w": 250,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1450,
                "y": 5633.333333333379,
                "w": 100,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        1250,
                        5650
                    ],
                    [
                        1450,
                        5650
                    ],
                    [
                        1450,
                        5450
                    ],
                    [
                        1250,
                        5450
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1450,
                    "y": 5650
                },
                "pointTo": {
                    "x": 1450,
                    "y": 5450
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1250,
                "y": 5466.666666666621,
                "w": 100,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        1250,
                        5650
                    ],
                    [
                        1450,
                        5650
                    ],
                    [
                        1450,
                        5450
                    ],
                    [
                        1250,
                        5450
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "pointOn": {
                    "x": 1250,
                    "y": 5450
                },
                "pointTo": {
                    "x": 1250,
                    "y": 5650
                },
                "xv": 1.5308084989341916e-14,
                "yv": 250,
                "inView": false
            },
            {
                "x": 1250,
                "y": 5300,
                "w": 100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 5300,
                "w": 100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 5350,
                "r": 35,
                "tpx": 2300,
                "tpy": 5800,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 1400,
                "y": 6000,
                "w": 200,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2150,
                "y": 5650,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5650,
                "w": 100,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2425,
                "y": 5850,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2150,
                "y": 5850,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 5700,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 5450,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 5450,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 5575,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 5525,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 5575,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2175,
                "y": 5650,
                "w": 75,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2425,
                "y": 5675,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5925,
                "w": 75,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2175,
                "y": 5925,
                "w": 75,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5725,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5725,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5850,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5850,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2175,
                "y": 5725,
                "w": 50,
                "h": 25,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2175,
                "y": 5850,
                "w": 50,
                "h": 25,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2375,
                "y": 5850,
                "w": 50,
                "h": 25,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2375,
                "y": 5725,
                "w": 50,
                "h": 25,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5675,
                "w": 25,
                "h": 50,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5675,
                "w": 25,
                "h": 50,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5875,
                "w": 25,
                "h": 50,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "x": 2350,
                "y": 5875,
                "w": 25,
                "h": 50,
                "type": "coindoor",
                "coins": 4,
                "currentCoins": 4,
                "inView": false
            },
            {
                "points": [
                    [
                        1600,
                        5075
                    ],
                    [
                        2175,
                        5650
                    ],
                    [
                        2150,
                        5675
                    ],
                    [
                        1575,
                        5100
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1575,
                    "right": 2175,
                    "top": 5075,
                    "bottom": 5675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2150,
                        5925
                    ],
                    [
                        2175,
                        5950
                    ],
                    [
                        1600,
                        6525
                    ],
                    [
                        1575,
                        6500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1575,
                    "right": 2175,
                    "top": 5925,
                    "bottom": 6525
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2450,
                        5925
                    ],
                    [
                        3025,
                        6500
                    ],
                    [
                        3000,
                        6525
                    ],
                    [
                        2425,
                        5950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2425,
                    "right": 3025,
                    "top": 5925,
                    "bottom": 6525
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3000,
                        5075
                    ],
                    [
                        3025,
                        5100
                    ],
                    [
                        2450,
                        5675
                    ],
                    [
                        2425,
                        5650
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2425,
                    "right": 3025,
                    "top": 5075,
                    "bottom": 5675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2200,
                "y": 5700,
                "r": 15,
                "tpx": 1325,
                "tpy": 6075,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2150,
                "y": 5550,
                "w": 300,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 2250,
                "y": 5750,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#142124",
                "tileColor": "#324848",
                "inView": false
            },
            {
                "x": 2050,
                "y": 5450,
                "w": 500,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 1950,
                "y": 5350,
                "w": 700,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 2180,
                "y": 5550,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        2150,
                        5550
                    ],
                    [
                        2350,
                        5550
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2350,
                    "y": 5550
                },
                "pointTo": {
                    "x": 2150,
                    "y": 5550
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 2390,
                "y": 5450,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        2450,
                        5450
                    ],
                    [
                        2050,
                        5450
                    ]
                ],
                "speed": 300,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2050,
                    "y": 5450
                },
                "pointTo": {
                    "x": 2450,
                    "y": 5450
                },
                "xv": 300,
                "yv": 0,
                "inView": false
            },
            {
                "x": 2040,
                "y": 5350,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1950,
                        5350
                    ],
                    [
                        2550,
                        5350
                    ]
                ],
                "speed": 450,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2550,
                    "y": 5350
                },
                "pointTo": {
                    "x": 1950,
                    "y": 5350
                },
                "xv": -450,
                "yv": 5.510910596163089e-14,
                "inView": false
            },
            {
                "x": 2050,
                "y": 5350,
                "w": 500,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2700,
                "y": 5200,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2550,
                "y": 5175,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1900,
                "y": 5200,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1900,
                "y": 5175,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2050,
                "y": 5175,
                "w": 50,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2500,
                "y": 5175,
                "w": 50,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2650,
                        5300
                    ],
                    [
                        2800,
                        5300
                    ],
                    [
                        2650,
                        5450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2650,
                    "right": 2800,
                    "top": 5300,
                    "bottom": 5450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        5300
                    ],
                    [
                        1950,
                        5300
                    ],
                    [
                        1950,
                        5450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1800,
                    "right": 1950,
                    "top": 5300,
                    "bottom": 5450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2700,
                "y": 5200,
                "w": 200,
                "h": 25,
                "type": "rotate-lava",
                "angle": -3,
                "rotateSpeed": -180,
                "pivotX": 2700,
                "pivotY": 5200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 100.77822185373186,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "points": [
                    [
                        2825,
                        5100
                    ],
                    [
                        3000,
                        5100
                    ],
                    [
                        2825,
                        5275
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2825,
                    "right": 3000,
                    "top": 5100,
                    "bottom": 5275
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1600,
                        5100
                    ],
                    [
                        1775,
                        5100
                    ],
                    [
                        1775,
                        5275
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1600,
                    "right": 1775,
                    "top": 5100,
                    "bottom": 5275
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1900,
                "y": 5200,
                "w": 200,
                "h": 25,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 1900,
                "pivotY": 5200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 100.77822185373186,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2000,
                "y": 5300,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2600,
                "y": 5300,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2950,
                "y": 3400,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2900,
                "y": 3450,
                "w": 50,
                "h": 50,
                "type": "tp",
                "tpx": 1475,
                "tpy": 3275,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 2900,
                "y": 3500,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3000,
                "y": 0,
                "w": 1000,
                "h": 3250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3000,
                "y": 3400,
                "w": 1000,
                "h": 3300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3100,
                "y": 3250,
                "w": 900,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 4000,
                "w": 50,
                "h": 50,
                "morphId": 1,
                "type": "morphbutton",
                "active": true,
                "maxTimedObstacles": 0,
                "timedObstacles": 0,
                "inView": false
            },
            {
                "x": 2900,
                "y": 3400,
                "w": 50,
                "h": 50,
                "type": "morphnormal",
                "active": true,
                "morphId": 1,
                "inView": false
            },
            {
                "x": 3000,
                "y": 3300,
                "w": 50,
                "h": 50,
                "type": "morphnormal",
                "active": true,
                "morphId": 2,
                "inView": false
            },
            {
                "x": 3000,
                "y": 3350,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3000,
                "y": 3250,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3050,
                "y": 3300,
                "w": 50,
                "h": 50,
                "type": "tp",
                "tpx": 775,
                "tpy": 4300,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 2275,
                "y": 5775,
                "w": 50,
                "h": 50,
                "morphId": 2,
                "type": "morphbutton",
                "active": true,
                "maxTimedObstacles": 0,
                "timedObstacles": 0,
                "inView": false
            },
            {
                "x": 2050,
                "y": 5100,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2550,
                "y": 5100,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2100,
                "y": 5191.666666666577,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2100,
                        5100
                    ],
                    [
                        2100,
                        5300
                    ]
                ],
                "speed": 125,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2100,
                    "y": 5300
                },
                "pointTo": {
                    "x": 2100,
                    "y": 5100
                },
                "xv": 7.654042494670958e-15,
                "yv": -125,
                "inView": false
            },
            {
                "x": 2400,
                "y": 5191.666666666577,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2400,
                        5100
                    ],
                    [
                        2400,
                        5300
                    ]
                ],
                "speed": 125,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 2400,
                    "y": 5300
                },
                "pointTo": {
                    "x": 2400,
                    "y": 5100
                },
                "xv": 7.654042494670958e-15,
                "yv": -125,
                "inView": false
            },
            {
                "x": 2200,
                "y": 5116.666666666577,
                "w": 200,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2200,
                        5100
                    ],
                    [
                        2200,
                        5300
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 2200,
                    "y": 5100
                },
                "pointTo": {
                    "x": 2200,
                    "y": 5300
                },
                "xv": 1.5308084989341916e-14,
                "yv": 250,
                "inView": false
            },
            {
                "x": 2275,
                "y": 5125,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": false
            },
            {
                "x": 2287.5,
                "y": 5200,
                "w": 25,
                "h": 25,
                "type": "tp",
                "tpx": 2300,
                "tpy": 5800,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 2175,
                "y": 5750,
                "w": 50,
                "h": 100,
                "type": "breakable",
                "maxStrength": 3,
                "currentStrength": 3,
                "time": 0.1,
                "timer": 0.1,
                "regenTime": 9999999999999,
                "inView": false
            },
            {
                "x": 2375,
                "y": 5750,
                "w": 50,
                "h": 100,
                "type": "breakable",
                "maxStrength": 3,
                "currentStrength": 3,
                "time": 0.1,
                "timer": 0.1,
                "regenTime": 9999999999999,
                "inView": false
            },
            {
                "x": 2250,
                "y": 5675,
                "w": 100,
                "h": 50,
                "type": "breakable",
                "maxStrength": 3,
                "currentStrength": 3,
                "time": 0.1,
                "timer": 0.1,
                "regenTime": 9999999999999,
                "inView": false
            },
            {
                "x": 2250,
                "y": 5875,
                "w": 100,
                "h": 50,
                "type": "breakable",
                "maxStrength": 3,
                "currentStrength": 3,
                "time": 0.1,
                "timer": 0.1,
                "regenTime": 9999999999999,
                "inView": false
            },
            {
                "x": 2000,
                "y": 5650,
                "w": 150,
                "h": 300,
                "type": "grav",
                "force": 8500,
                "dir": {
                    "x": 0,
                    "y": 8500
                },
                "direction": "down",
                "inView": false
            },
            {
                "points": [
                    [
                        2000,
                        5500
                    ],
                    [
                        2150,
                        5650
                    ],
                    [
                        2000,
                        5650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2000,
                    "right": 2150,
                    "top": 5500,
                    "bottom": 5650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2000,
                "y": 5650,
                "w": 150,
                "h": 300,
                "type": "raxis",
                "rx": false,
                "ry": true,
                "inView": false
            },
            {
                "x": 2000,
                "y": 5950,
                "w": 225,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1950,
                "y": 5500,
                "w": 50,
                "h": 400,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1975,
                "y": 5975,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1600,
                "y": 6000,
                "w": 350,
                "h": 150,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 1600,
                "y": 6000,
                "w": 350,
                "h": 150,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 1600,
                "y": 5900,
                "w": 50,
                "h": 300,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1900,
                "y": 5550,
                "w": 50,
                "h": 450,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 5950,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 5925,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1675,
                "y": 6225,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1700,
                "y": 6150,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1575,
                "y": 6425,
                "w": 50,
                "h": 50,
                "type": "button",
                "id": 1,
                "active": true,
                "inView": false
            },
            {
                "x": 1950,
                "y": 5900,
                "w": 200,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 1650,
                "y": 5950,
                "w": 50,
                "h": 250,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 1575,
                "y": 6275,
                "w": 175,
                "h": 75,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 2018.3333333333392,
                "y": 5900,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1950,
                        5900
                    ],
                    [
                        2075,
                        5900
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2075,
                    "y": 5900
                },
                "pointTo": {
                    "x": 1950,
                    "y": 5900
                },
                "xv": -175,
                "yv": 2.1431318985078682e-14,
                "inView": false
            },
            {
                "x": 1650,
                "y": 6033.333333333423,
                "w": 50,
                "h": 75,
                "type": "movingsafe",
                "points": [
                    [
                        1650,
                        5950
                    ],
                    [
                        1650,
                        6125
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1650,
                    "y": 6125
                },
                "pointTo": {
                    "x": 1650,
                    "y": 5950
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1645,
                "y": 6275,
                "w": 25,
                "h": 75,
                "type": "lavamove",
                "points": [
                    [
                        1575,
                        6275
                    ],
                    [
                        1725,
                        6275
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1575,
                    "y": 6275
                },
                "pointTo": {
                    "x": 1725,
                    "y": 6275
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1625,
                "y": 5625,
                "w": 250,
                "h": 250,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 1758.3333333333887,
                "y": 5625,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1625,
                        5775
                    ],
                    [
                        1775,
                        5775
                    ],
                    [
                        1775,
                        5625
                    ],
                    [
                        1625,
                        5625
                    ]
                ],
                "speed": 250,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 1775,
                    "y": 5625
                },
                "pointTo": {
                    "x": 1625,
                    "y": 5625
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1641.6666666666113,
                "y": 5775,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1625,
                        5775
                    ],
                    [
                        1775,
                        5775
                    ],
                    [
                        1775,
                        5625
                    ],
                    [
                        1625,
                        5625
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1625,
                    "y": 5775
                },
                "pointTo": {
                    "x": 1775,
                    "y": 5775
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1750,
                "y": 5925,
                "w": 150,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 5550,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 5737.5,
                "w": 150,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 5350,
                "w": 100,
                "h": 200,
                "type": "timetrap",
                "time": 0,
                "maxTime": 0.2,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 1650,
                "y": 5425,
                "w": 200,
                "h": 50,
                "type": "grav",
                "force": 20000,
                "dir": {
                    "x": 20000,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 1900,
                "y": 5425,
                "w": 25,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1925,
                "y": 5450,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 5275,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 5200,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1725,
                "y": 5375,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1700,
                "y": 5433.333333333423,
                "w": 100,
                "h": 25,
                "type": "movingsafe",
                "points": [
                    [
                        1700,
                        5350
                    ],
                    [
                        1700,
                        5525
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1700,
                    "y": 5525
                },
                "pointTo": {
                    "x": 1700,
                    "y": 5350
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1850,
                "y": 5425,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": false
            },
            {
                "x": 1862.5,
                "y": 5512.5,
                "w": 25,
                "h": 25,
                "type": "tp",
                "tpx": 2300,
                "tpy": 5800,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 1800,
                "y": 5900,
                "w": 100,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1900,
                "y": 5900,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1900,
                "y": 5600,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1675,
                "y": 6200,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1675,
                "y": 5950,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1650,
                "y": 5950,
                "w": 50,
                "h": 50,
                "type": "door",
                "id": 1,
                "active": true,
                "inView": false
            },
            {
                "x": 2450,
                "y": 5650,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2500,
                "y": 5750,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2512.5,
                "y": 5900,
                "w": 25,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2450,
                "y": 5663.666666666577,
                "w": 50,
                "h": 25,
                "type": "movingsafe",
                "points": [
                    [
                        2450,
                        5650
                    ],
                    [
                        2450,
                        5700
                    ]
                ],
                "speed": 35,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2450,
                    "y": 5700
                },
                "pointTo": {
                    "x": 2450,
                    "y": 5650
                },
                "xv": 2.1431318985078682e-15,
                "yv": -35,
                "inView": false
            },
            {
                "x": 2450,
                "y": 5686.333333333423,
                "w": 50,
                "h": 25,
                "type": "movingsafe",
                "points": [
                    [
                        2450,
                        5650
                    ],
                    [
                        2450,
                        5700
                    ]
                ],
                "speed": 35,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2450,
                    "y": 5650
                },
                "pointTo": {
                    "x": 2450,
                    "y": 5700
                },
                "xv": 2.1431318985078682e-15,
                "yv": 35,
                "inView": false
            },
            {
                "x": 2625,
                "y": 5750,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2550,
                "y": 5800,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 5675,
                "w": 25,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2550,
                "y": 5650,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2675,
                        5650
                    ],
                    [
                        2750,
                        5650
                    ],
                    [
                        2750,
                        5725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2675,
                    "right": 2750,
                    "top": 5650,
                    "bottom": 5725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2500,
                "y": 5600,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2475,
                "y": 5625,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 5650,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2575,
                "y": 5900,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 5900,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2875,
                "y": 5900,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2525,
                "y": 5912.5,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2580,
                "y": 5895,
                "w": 60,
                "h": 60,
                "type": "movingsafe",
                "points": [
                    [
                        2575,
                        5895
                    ],
                    [
                        2940,
                        5895
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2575,
                    "y": 5895
                },
                "pointTo": {
                    "x": 2940,
                    "y": 5895
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 2935,
                "y": 5895,
                "w": 60,
                "h": 60,
                "type": "movingsafe",
                "points": [
                    [
                        2575,
                        5895
                    ],
                    [
                        2940,
                        5895
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2940,
                    "y": 5895
                },
                "pointTo": {
                    "x": 2575,
                    "y": 5895
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 2725,
                "y": 5800,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 5950,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 6150,
                "w": 50,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 6225,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2900,
                "y": 6050,
                "w": 100,
                "h": 325,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2900,
                "y": 6375,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2950,
                "y": 6425,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2950,
                "y": 6000,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 2950,
                "y": 6000,
                "r": 22,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 22,
                "inView": false
            },
            {
                "x": 2600,
                "y": 6025,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2550,
                "y": 6025,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 6025,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2800,
                "y": 5700,
                "w": 125,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2975,
                "y": 5700,
                "w": 25,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2800,
                "y": 5600,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2875,
                "y": 5600,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2850,
                "y": 5525,
                "w": 50,
                "h": 275,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 2850,
                "pivotY": 5525,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 139.75424859373686,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2850,
                "y": 5525,
                "w": 50,
                "h": 275,
                "type": "rotatingsafe",
                "angle": 91.5,
                "rotateSpeed": 90,
                "pivotX": 2850,
                "pivotY": 5525,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 139.75424859373686,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2800,
                "y": 5475,
                "w": 100,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 5425,
                "w": 25,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 5375,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2715,
                        5425
                    ],
                    [
                        2715,
                        5590
                    ],
                    [
                        2550,
                        5590
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2550,
                    "right": 2715,
                    "top": 5425,
                    "bottom": 5590
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2750,
                "y": 5375,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2900,
                "y": 5500,
                "w": 100,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2837.5,
                "y": 5450,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2925,
                "y": 5275,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": false
            },
            {
                "x": 2950,
                "y": 5225,
                "w": 25,
                "h": 25,
                "type": "tp",
                "tpx": 2300,
                "tpy": 5800,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 2250,
                "y": 5975,
                "w": 200,
                "h": 525,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2450,
                "y": 6100,
                "w": 150,
                "h": 400,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2000,
                "y": 6080,
                "w": 215,
                "h": 420,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2600,
                "y": 6250,
                "w": 150,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1850,
                "y": 6250,
                "w": 150,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2600,
                "y": 6175,
                "w": 75,
                "h": 75,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "points": [
                    [
                        2775,
                        6300
                    ],
                    [
                        2975,
                        6500
                    ],
                    [
                        2775,
                        6500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2775,
                    "right": 2975,
                    "top": 6300,
                    "bottom": 6500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2450,
                        5975
                    ],
                    [
                        2575,
                        6100
                    ],
                    [
                        2450,
                        6100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2450,
                    "right": 2575,
                    "top": 5975,
                    "bottom": 6100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2000,
                        6100
                    ],
                    [
                        2000,
                        6250
                    ],
                    [
                        1850,
                        6250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1850,
                    "right": 2000,
                    "top": 6100,
                    "bottom": 6250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1750,
                "y": 6350,
                "w": 100,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "points": [
                    [
                        1850,
                        6250
                    ],
                    [
                        1850,
                        6350
                    ],
                    [
                        1750,
                        6350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1750,
                    "right": 1850,
                    "top": 6250,
                    "bottom": 6350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2075,
                "y": 6125,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 6125,
                "w": 200,
                "h": 100,
                "type": "grav",
                "force": 25000,
                "dir": {
                    "x": -25000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "points": [
                    [
                        2575,
                        6150
                    ],
                    [
                        2650,
                        6225
                    ],
                    [
                        2575,
                        6225
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2575,
                    "right": 2650,
                    "top": 6150,
                    "bottom": 6225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2287.5,
                "y": 6107.5,
                "w": 25,
                "h": 25,
                "type": "movingsafe",
                "points": [
                    [
                        2287.5,
                        6037.5
                    ],
                    [
                        2287.5,
                        6112.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2287.5,
                    "y": 6037.5
                },
                "pointTo": {
                    "x": 2287.5,
                    "y": 6112.5
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 2287.5,
                "y": 6282.5,
                "w": 25,
                "h": 25,
                "type": "movingsafe",
                "points": [
                    [
                        2287.5,
                        6212.5
                    ],
                    [
                        2287.5,
                        6287.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2287.5,
                    "y": 6212.5
                },
                "pointTo": {
                    "x": 2287.5,
                    "y": 6287.5
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "points": [
                    [
                        2275,
                        6350
                    ],
                    [
                        2325,
                        6350
                    ],
                    [
                        2425,
                        6475
                    ],
                    [
                        2425,
                        6500
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2275,
                    "right": 2425,
                    "top": 6350,
                    "bottom": 6500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2525,
                "y": 6500,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 2525,
                "y": 6500,
                "w": 100,
                "h": 20,
                "type": "rotatingsafe",
                "angle": 3,
                "rotateSpeed": 180,
                "pivotX": 2525,
                "pivotY": 6500,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 50.99019513592785,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2650,
                "y": 6480,
                "w": 25,
                "h": 20,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2400,
                "y": 6390,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 2750,
                "y": 6275,
                "w": 25,
                "h": 225,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2775,
                "y": 6250,
                "w": 300,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 2775,
                "pivotY": 6250,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 152.0690632574555,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2775,
                "y": 6250,
                "w": 300,
                "h": 50,
                "type": "rotatingsafe",
                "angle": 91.5,
                "rotateSpeed": 90,
                "pivotX": 2775,
                "pivotY": 6250,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 152.0690632574555,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 2220,
                "y": 6105,
                "w": 25,
                "h": 150,
                "type": "timetrap",
                "time": 0,
                "maxTime": 0.1,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 2125,
                "y": 6225,
                "w": 50,
                "h": 250,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 1750,
                "y": 6425,
                "w": 375,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.4,
                "inView": false
            },
            {
                "x": 2060,
                "y": 6425,
                "w": 75,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        2100,
                        6425
                    ],
                    [
                        1750,
                        6425
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2100,
                    "y": 6425
                },
                "pointTo": {
                    "x": 1750,
                    "y": 6425
                },
                "xv": -300,
                "yv": 3.6739403974420595e-14,
                "inView": false
            },
            {
                "x": 2125,
                "y": 6380,
                "w": 50,
                "h": 75,
                "type": "movingsafe",
                "points": [
                    [
                        2125,
                        6225
                    ],
                    [
                        2125,
                        6400
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2125,
                    "y": 6400
                },
                "pointTo": {
                    "x": 2125,
                    "y": 6225
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1800,
                "y": 6425,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": false
            },
            {
                "x": 1762.5,
                "y": 6437.5,
                "w": 25,
                "h": 25,
                "type": "tp",
                "tpx": 2300,
                "tpy": 5800,
                "bgColor": "#141f52",
                "tileColor": "#414381",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 1550,
                "y": 4000,
                "w": 50,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 4000,
                "w": 50,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 4550,
                "w": 50,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 5050,
                "w": 350,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 5000,
                "w": 700,
                "h": 50,
                "type": "grav",
                "force": 10000,
                "dir": {
                    "x": 10000,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 1500,
                "y": 4550,
                "w": 50,
                "h": 500,
                "type": "grav",
                "force": 10000,
                "dir": {
                    "x": 0,
                    "y": -10000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 750,
                "y": 5000,
                "w": 800,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.75,
                "inView": false
            },
            {
                "x": 1500,
                "y": 4500,
                "w": 50,
                "h": 500,
                "type": "trans",
                "collide": false,
                "opaq": 0.75,
                "inView": false
            },
            {
                "x": 1450,
                "y": 4500,
                "w": 50,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.75,
                "inView": false
            },
            {
                "points": [
                    [
                        1875,
                        6275
                    ],
                    [
                        2000,
                        6275
                    ],
                    [
                        1875,
                        6350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1875,
                    "right": 2000,
                    "top": 6275,
                    "bottom": 6350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2075,
                        6275
                    ],
                    [
                        2075,
                        6375
                    ],
                    [
                        1900,
                        6375
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1900,
                    "right": 2075,
                    "top": 6275,
                    "bottom": 6375
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2200,
                        6025
                    ],
                    [
                        2125,
                        6125
                    ],
                    [
                        2050,
                        6125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2050,
                    "right": 2200,
                    "top": 6025,
                    "bottom": 6125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2025,
                        6025
                    ],
                    [
                        2175,
                        6025
                    ],
                    [
                        2050,
                        6100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2025,
                    "right": 2175,
                    "top": 6025,
                    "bottom": 6100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1825,
                "y": 6450,
                "r": 20,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 20,
                "inView": false
            },
            {
                "x": 2200,
                "y": 5900,
                "r": 15,
                "tpx": 1325,
                "tpy": 6075,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2400,
                "y": 5900,
                "r": 15,
                "tpx": 1325,
                "tpy": 6075,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 2400,
                "y": 5700,
                "r": 15,
                "tpx": 1325,
                "tpy": 6075,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1250,
                "y": 6150,
                "w": 150,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1275,
                "y": 6025,
                "w": 100,
                "h": 100,
                "type": "ship",
                "state": true,
                "shipAngle": 1.5707963267948966,
                "inView": false
            },
            {
                "x": 1275,
                "y": 6000,
                "w": 100,
                "h": 150,
                "type": "color",
                "bgColor": "#241414",
                "tileColor": "#483232",
                "inView": false
            },
            {
                "x": 0,
                "y": 6000,
                "w": 1050,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 6175,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1175,
                "y": 6200,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 6325,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 6375,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 6525,
                "w": 50,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 6575,
                "w": 50,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 6625,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 6550,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 6450,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 975,
                "y": 6475,
                "w": 200,
                "h": 25,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 975,
                "pivotY": 6475,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 100.77822185373186,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 975,
                "y": 6475,
                "w": 200,
                "h": 25,
                "type": "rotatingsafe",
                "angle": 91.5,
                "rotateSpeed": 90,
                "pivotX": 975,
                "pivotY": 6475,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 100.77822185373186,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 200,
                "y": 6450,
                "w": 600,
                "h": 200,
                "type": "grav",
                "force": 5000,
                "dir": {
                    "x": -5000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 700,
                "y": 6575,
                "w": 50,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 6450,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        6775
                    ],
                    [
                        725,
                        6850
                    ],
                    [
                        725,
                        6925
                    ],
                    [
                        400,
                        6850
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 400,
                    "right": 725,
                    "top": 6775,
                    "bottom": 6925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        725,
                        6850
                    ],
                    [
                        1000,
                        6975
                    ],
                    [
                        1000,
                        7050
                    ],
                    [
                        725,
                        6925
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 725,
                    "right": 1000,
                    "top": 6850,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        6975
                    ],
                    [
                        1325,
                        7025
                    ],
                    [
                        1325,
                        7100
                    ],
                    [
                        1000,
                        7050
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1000,
                    "right": 1325,
                    "top": 6975,
                    "bottom": 7100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1875,
                        6975
                    ],
                    [
                        1875,
                        7050
                    ],
                    [
                        1550,
                        7100
                    ],
                    [
                        1550,
                        7025
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1550,
                    "right": 1875,
                    "top": 6975,
                    "bottom": 7100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2150,
                        6850
                    ],
                    [
                        2150,
                        6925
                    ],
                    [
                        1875,
                        7050
                    ],
                    [
                        1875,
                        6975
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1875,
                    "right": 2150,
                    "top": 6850,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2475,
                        6800
                    ],
                    [
                        2475,
                        6875
                    ],
                    [
                        2150,
                        6925
                    ],
                    [
                        2150,
                        6850
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2150,
                    "right": 2475,
                    "top": 6800,
                    "bottom": 6925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2700,
                        6800
                    ],
                    [
                        3025,
                        6875
                    ],
                    [
                        3025,
                        6950
                    ],
                    [
                        2700,
                        6875
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2700,
                    "right": 3025,
                    "top": 6800,
                    "bottom": 6950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3025,
                        6875
                    ],
                    [
                        3300,
                        7000
                    ],
                    [
                        3300,
                        7075
                    ],
                    [
                        3025,
                        6950
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 3025,
                    "right": 3300,
                    "top": 6875,
                    "bottom": 7075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3300,
                        7000
                    ],
                    [
                        3575,
                        7125
                    ],
                    [
                        3575,
                        7200
                    ],
                    [
                        3300,
                        7075
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 3300,
                    "right": 3575,
                    "top": 7000,
                    "bottom": 7200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3575,
                        7125
                    ],
                    [
                        3850,
                        7150
                    ],
                    [
                        3850,
                        7225
                    ],
                    [
                        3575,
                        7200
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 3575,
                    "right": 3850,
                    "top": 7125,
                    "bottom": 7225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 275,
                "y": 6925,
                "w": 75,
                "h": 325,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 7075,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 7100,
                "r": 125,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 125,
                "inView": false
            },
            {
                "x": 500,
                "y": 7100,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        6925
                    ],
                    [
                        525,
                        7250
                    ],
                    [
                        350,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 525,
                    "top": 6925,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        375,
                        7025
                    ],
                    [
                        475,
                        7225
                    ],
                    [
                        375,
                        7225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 375,
                    "right": 475,
                    "top": 7025,
                    "bottom": 7225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        725,
                        7025
                    ],
                    [
                        800,
                        7025
                    ],
                    [
                        775,
                        7250
                    ],
                    [
                        700,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 800,
                    "top": 7025,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        7075
                    ],
                    [
                        900,
                        7075
                    ],
                    [
                        875,
                        7250
                    ],
                    [
                        800,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 900,
                    "top": 7075,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        925,
                        7125
                    ],
                    [
                        1000,
                        7125
                    ],
                    [
                        975,
                        7250
                    ],
                    [
                        900,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 1000,
                    "top": 7125,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 800,
                "y": 6750,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 825,
                "y": 6762.5,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 850,
                "y": 6775,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        6700
                    ],
                    [
                        875,
                        6700
                    ],
                    [
                        975,
                        6875
                    ],
                    [
                        875,
                        6875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 825,
                    "right": 975,
                    "top": 6700,
                    "bottom": 6875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        6700
                    ],
                    [
                        1150,
                        6700
                    ],
                    [
                        1050,
                        6875
                    ],
                    [
                        1000,
                        6875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 1150,
                    "top": 6700,
                    "bottom": 6875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1025,
                "y": 6725,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 200,
                "y": 6650,
                "w": 1050,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1175,
                        6700
                    ],
                    [
                        1425,
                        6700
                    ],
                    [
                        1375,
                        6950
                    ],
                    [
                        1050,
                        6925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1050,
                    "right": 1425,
                    "top": 6700,
                    "bottom": 6950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        6725
                    ],
                    [
                        1400,
                        6725
                    ],
                    [
                        1350,
                        6925
                    ],
                    [
                        1100,
                        6900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1400,
                    "top": 6725,
                    "bottom": 6925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1225,
                        6750
                    ],
                    [
                        1375,
                        6750
                    ],
                    [
                        1325,
                        6900
                    ],
                    [
                        1150,
                        6875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1375,
                    "top": 6750,
                    "bottom": 6900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1275,
                "y": 6825,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 1275,
                "y": 6825,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        7175
                    ],
                    [
                        1450,
                        7175
                    ],
                    [
                        1100,
                        7250
                    ],
                    [
                        1025,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1025,
                    "right": 1450,
                    "top": 7175,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        7175
                    ],
                    [
                        1575,
                        7175
                    ],
                    [
                        1225,
                        7250
                    ],
                    [
                        1150,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1575,
                    "top": 7175,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1625,
                        7175
                    ],
                    [
                        1750,
                        7200
                    ],
                    [
                        1750,
                        7250
                    ],
                    [
                        1275,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1275,
                    "right": 1750,
                    "top": 7175,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1775,
                "y": 7225,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 1775,
                "y": 7225,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 1475,
                "y": 6700,
                "w": 25,
                "h": 225,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 6700,
                "w": 25,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1525,
                "y": 6700,
                "w": 25,
                "h": 175,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1575,
                "y": 6700,
                "w": 25,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1625,
                "y": 6700,
                "w": 25,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 6700,
                "w": 25,
                "h": 225,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1725,
                "y": 6700,
                "w": 25,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1425,
                        6700
                    ],
                    [
                        1825,
                        6700
                    ],
                    [
                        1925,
                        6750
                    ],
                    [
                        1775,
                        6775
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1425,
                    "right": 1925,
                    "top": 6700,
                    "bottom": 6775
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1875,
                        6700
                    ],
                    [
                        2275,
                        6700
                    ],
                    [
                        2375,
                        6750
                    ],
                    [
                        2075,
                        6800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1875,
                    "right": 2375,
                    "top": 6700,
                    "bottom": 6800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1950,
                        6775
                    ],
                    [
                        2025,
                        6800
                    ],
                    [
                        1925,
                        6825
                    ],
                    [
                        1825,
                        6800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1825,
                    "right": 2025,
                    "top": 6775,
                    "bottom": 6825
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2025,
                        7075
                    ],
                    [
                        2425,
                        7200
                    ],
                    [
                        2050,
                        7250
                    ],
                    [
                        1925,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1925,
                    "right": 2425,
                    "top": 7075,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2525,
                        7200
                    ],
                    [
                        2675,
                        7250
                    ],
                    [
                        2300,
                        7250
                    ],
                    [
                        2175,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2175,
                    "right": 2675,
                    "top": 7200,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2300,
                        6950
                    ],
                    [
                        2600,
                        7175
                    ],
                    [
                        2475,
                        7175
                    ],
                    [
                        2050,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2050,
                    "right": 2600,
                    "top": 6950,
                    "bottom": 7175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2300,
                        7000
                    ],
                    [
                        2525,
                        7150
                    ],
                    [
                        2125,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2125,
                    "right": 2525,
                    "top": 7000,
                    "bottom": 7150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2350,
                        6950
                    ],
                    [
                        2525,
                        6950
                    ],
                    [
                        2700,
                        7200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2350,
                    "right": 2700,
                    "top": 6950,
                    "bottom": 7200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2800,
                "y": 7250,
                "r": 200,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 200,
                "inView": false
            },
            {
                "x": 2800,
                "y": 7250,
                "r": 175,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 175,
                "inView": false
            },
            {
                "x": 0,
                "y": 7250,
                "w": 3800,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2650,
                "y": 7000,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 2450,
                "y": 6700,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 2575,
                "y": 6700,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 2700,
                "y": 6700,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 1600,
                "y": 6500,
                "w": 1400,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2775,
                        6700
                    ],
                    [
                        3175,
                        6700
                    ],
                    [
                        2975,
                        6775
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2775,
                    "right": 3175,
                    "top": 6700,
                    "bottom": 6775
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3250,
                        6700
                    ],
                    [
                        3300,
                        6850
                    ],
                    [
                        3200,
                        6875
                    ],
                    [
                        3000,
                        6800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3000,
                    "right": 3300,
                    "top": 6700,
                    "bottom": 6875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3325,
                        6875
                    ],
                    [
                        3525,
                        6950
                    ],
                    [
                        3425,
                        6975
                    ],
                    [
                        3225,
                        6900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3225,
                    "right": 3525,
                    "top": 6875,
                    "bottom": 6975
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3550,
                        6975
                    ],
                    [
                        3750,
                        7050
                    ],
                    [
                        3650,
                        7075
                    ],
                    [
                        3450,
                        7000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3450,
                    "right": 3750,
                    "top": 6975,
                    "bottom": 7075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3450,
                        6825
                    ],
                    [
                        3650,
                        6900
                    ],
                    [
                        3550,
                        6925
                    ],
                    [
                        3350,
                        6850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3350,
                    "right": 3650,
                    "top": 6825,
                    "bottom": 6925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3675,
                        6925
                    ],
                    [
                        3775,
                        7025
                    ],
                    [
                        3575,
                        6950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3575,
                    "right": 3775,
                    "top": 6925,
                    "bottom": 7025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3575,
                        6775
                    ],
                    [
                        3775,
                        6850
                    ],
                    [
                        3675,
                        6875
                    ],
                    [
                        3475,
                        6800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3475,
                    "right": 3775,
                    "top": 6775,
                    "bottom": 6875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3275,
                        6725
                    ],
                    [
                        3475,
                        6725
                    ],
                    [
                        3575,
                        6750
                    ],
                    [
                        3325,
                        6825
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3275,
                    "right": 3575,
                    "top": 6725,
                    "bottom": 6825
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2750,
                "y": 7000,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        2800,
                        7000
                    ],
                    [
                        2975,
                        7000
                    ],
                    [
                        2900,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2800,
                    "right": 2975,
                    "top": 7000,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3000,
                        7000
                    ],
                    [
                        3100,
                        7250
                    ],
                    [
                        2925,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2925,
                    "right": 3100,
                    "top": 7000,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3050,
                        7050
                    ],
                    [
                        3525,
                        7250
                    ],
                    [
                        3125,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3050,
                    "right": 3525,
                    "top": 7050,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3100,
                        7100
                    ],
                    [
                        3475,
                        7250
                    ],
                    [
                        3150,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3100,
                    "right": 3475,
                    "top": 7100,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3150,
                        7150
                    ],
                    [
                        3425,
                        7250
                    ],
                    [
                        3175,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3150,
                    "right": 3425,
                    "top": 7150,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        6925
                    ],
                    [
                        275,
                        7250
                    ],
                    [
                        100,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 275,
                    "top": 6925,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        250,
                        7025
                    ],
                    [
                        250,
                        7225
                    ],
                    [
                        150,
                        7225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 150,
                    "right": 250,
                    "top": 7025,
                    "bottom": 7225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        7125
                    ],
                    [
                        275,
                        7250
                    ],
                    [
                        0,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 275,
                    "top": 7125,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        7150
                    ],
                    [
                        200,
                        7250
                    ],
                    [
                        0,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 200,
                    "top": 7150,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        7025
                    ],
                    [
                        75,
                        7250
                    ],
                    [
                        0,
                        7250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 75,
                    "top": 7025,
                    "bottom": 7250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3850,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3875,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3900,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3925,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3950,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3800,
                        6700
                    ],
                    [
                        4000,
                        6700
                    ],
                    [
                        4000,
                        7050
                    ],
                    [
                        3975,
                        7050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3800,
                    "right": 4000,
                    "top": 6700,
                    "bottom": 7050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 3450,
                "y": 7450,
                "w": 300,
                "h": 400,
                "type": "speed",
                "speedInc": 5,
                "inView": false
            },
            {
                "x": 3500,
                "y": 7450,
                "w": 250,
                "h": 400,
                "type": "timetrap",
                "time": 0,
                "maxTime": 1,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 3450,
                "y": 7450,
                "w": 50,
                "h": 400,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 3300,
                "y": 7450,
                "w": 100,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3300,
                "y": 7725,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2600,
                "y": 7450,
                "w": 700,
                "h": 700,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2950,
                "y": 7800,
                "w": 525,
                "h": 175,
                "type": "rotatingsafe",
                "angle": 1.5,
                "rotateSpeed": 90,
                "pivotX": 2950,
                "pivotY": 7800,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 276.69929526473317,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "points": [
                    [
                        3175,
                        7725
                    ],
                    [
                        3350,
                        7800
                    ],
                    [
                        3350,
                        7825
                    ],
                    [
                        3175,
                        7800
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 3175,
                    "right": 3350,
                    "top": 7725,
                    "bottom": 7825
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2725,
                        7725
                    ],
                    [
                        2725,
                        7825
                    ],
                    [
                        2550,
                        7825
                    ],
                    [
                        2550,
                        7775
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 2550,
                    "right": 2725,
                    "top": 7725,
                    "bottom": 7825
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2950,
                "y": 7800,
                "r": 127,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 127,
                "inView": false
            },
            {
                "points": [
                    [
                        3525,
                        7700
                    ],
                    [
                        3525,
                        7725
                    ],
                    [
                        3350,
                        7825
                    ],
                    [
                        3350,
                        7800
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 3350,
                    "right": 3525,
                    "top": 7700,
                    "bottom": 7825
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 3400,
                "y": 7450,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 7750,
                "w": 150,
                "h": 400,
                "type": "grav",
                "force": 50000,
                "dir": {
                    "x": 0,
                    "y": 50000
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 0,
                "y": 7450,
                "w": 2250,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2500,
                "y": 7900,
                "w": 100,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2250,
                "y": 7450,
                "w": 350,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2350,
                "y": 8075,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 2470,
                "y": 8050,
                "w": 25,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        2350,
                        8050
                    ],
                    [
                        2475,
                        8050
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2350,
                    "y": 8050
                },
                "pointTo": {
                    "x": 2475,
                    "y": 8050
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 2350,
                "y": 8150,
                "w": 150,
                "h": 150,
                "spawn": {
                    "x": 2425,
                    "y": 8225
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 2375,
                "y": 8150,
                "w": 100,
                "h": 150,
                "type": "color",
                "bgColor": "#280f2a",
                "tileColor": "#4d2346",
                "inView": false
            },
            {
                "x": 2375,
                "y": 8175,
                "w": 100,
                "h": 100,
                "type": "ship",
                "state": false,
                "shipAngle": 1.5707963267948966,
                "inView": false
            },
            {
                "x": 2300,
                "y": 7750,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2250,
                "y": 7700,
                "w": 50,
                "h": 450,
                "type": "grav",
                "force": 50000,
                "dir": {
                    "x": 0,
                    "y": -50000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 2250,
                "y": 7700,
                "w": 50,
                "h": 450,
                "type": "trans",
                "collide": false,
                "opaq": 0.75,
                "inView": false
            },
            {
                "x": 2300,
                "y": 7700,
                "w": 200,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.75,
                "inView": false
            },
            {
                "x": 2200,
                "y": 8150,
                "w": 50,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2300,
                "y": 8275,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        4000,
                        7300
                    ],
                    [
                        4000,
                        7600
                    ],
                    [
                        3850,
                        7600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3850,
                    "right": 4000,
                    "top": 7300,
                    "bottom": 7600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        4000,
                        7050
                    ],
                    [
                        4000,
                        7600
                    ],
                    [
                        3950,
                        7600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3950,
                    "right": 4000,
                    "top": 7050,
                    "bottom": 7600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3450,
                        7450
                    ],
                    [
                        3600,
                        7450
                    ],
                    [
                        3450,
                        7650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3450,
                    "right": 3600,
                    "top": 7450,
                    "bottom": 7650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3450,
                        7450
                    ],
                    [
                        3575,
                        7450
                    ],
                    [
                        3450,
                        7600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3450,
                    "right": 3575,
                    "top": 7450,
                    "bottom": 7600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 3725,
                "y": 7800,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 3725,
                "y": 7800,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 3750,
                "y": 7600,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        3750,
                        7800
                    ],
                    [
                        3750,
                        7850
                    ],
                    [
                        3600,
                        7850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3600,
                    "right": 3750,
                    "top": 7800,
                    "bottom": 7850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2600,
                        7450
                    ],
                    [
                        2750,
                        7450
                    ],
                    [
                        2600,
                        7600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2600,
                    "right": 2750,
                    "top": 7450,
                    "bottom": 7600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3150,
                        7450
                    ],
                    [
                        3300,
                        7450
                    ],
                    [
                        3300,
                        7600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3150,
                    "right": 3300,
                    "top": 7450,
                    "bottom": 7600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3300,
                        8000
                    ],
                    [
                        3300,
                        8150
                    ],
                    [
                        3150,
                        8150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3150,
                    "right": 3300,
                    "top": 8000,
                    "bottom": 8150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2600,
                        8000
                    ],
                    [
                        2750,
                        8150
                    ],
                    [
                        2600,
                        8150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2600,
                    "right": 2750,
                    "top": 8000,
                    "bottom": 8150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2625,
                        7475
                    ],
                    [
                        2775,
                        7475
                    ],
                    [
                        2625,
                        7625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2625,
                    "right": 2775,
                    "top": 7475,
                    "bottom": 7625
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3125,
                        7475
                    ],
                    [
                        3275,
                        7475
                    ],
                    [
                        3275,
                        7625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3125,
                    "right": 3275,
                    "top": 7475,
                    "bottom": 7625
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        3275,
                        7975
                    ],
                    [
                        3275,
                        8125
                    ],
                    [
                        3125,
                        8125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3125,
                    "right": 3275,
                    "top": 7975,
                    "bottom": 8125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2630,
                        7970
                    ],
                    [
                        2780,
                        8120
                    ],
                    [
                        2630,
                        8120
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2630,
                    "right": 2780,
                    "top": 7970,
                    "bottom": 8120
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2825,
                "y": 8125,
                "w": 250,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2825,
                "y": 7450,
                "w": 250,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2925,
                "y": 8100,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2925,
                "y": 7475,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2950,
                "y": 7800,
                "r": 85,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 85,
                "inView": false
            },
            {
                "x": 2150,
                "y": 8350,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2150,
                "y": 8150,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 8900,
                "w": 1200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2150,
                "y": 8400,
                "w": 50,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 8150,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2125,
                "y": 8375,
                "w": 25,
                "h": 525,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 8875,
                "w": 575,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 8150,
                "w": 25,
                "h": 500,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 8150,
                "w": 725,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 8200,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 8375.866666666532,
                "w": 150,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1050,
                        8150
                    ],
                    [
                        1050,
                        8850
                    ]
                ],
                "speed": 476,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 1050,
                    "y": 8850
                },
                "pointTo": {
                    "x": 1050,
                    "y": 8150
                },
                "xv": 2.914659381970701e-14,
                "yv": -476,
                "inView": false
            },
            {
                "x": 1200,
                "y": 8624.133333333457,
                "w": 150,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1200,
                        8850
                    ],
                    [
                        1200,
                        8150
                    ]
                ],
                "speed": 476,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 1200,
                    "y": 8150
                },
                "pointTo": {
                    "x": 1200,
                    "y": 8850
                },
                "xv": 2.914659381970701e-14,
                "yv": 476,
                "inView": false
            },
            {
                "x": 1175,
                "y": 8675,
                "w": 175,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 8675,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 8325,
                "w": 175,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1275,
                "y": 8325,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1122.599999999973,
                "y": 8625,
                "w": 75,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        1050,
                        8625
                    ],
                    [
                        1275,
                        8625
                    ]
                ],
                "speed": 153,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1275,
                    "y": 8625
                },
                "pointTo": {
                    "x": 1050,
                    "y": 8625
                },
                "xv": -153,
                "yv": 1.8737096026954503e-14,
                "inView": false
            },
            {
                "x": 1202.400000000027,
                "y": 8275,
                "w": 75,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        1050,
                        8275
                    ],
                    [
                        1275,
                        8275
                    ]
                ],
                "speed": 153,
                "currentPoint": 0,
                "pointOn": {
                    "x": 1050,
                    "y": 8275
                },
                "pointTo": {
                    "x": 1275,
                    "y": 8275
                },
                "xv": 153,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1375,
                "y": 8875,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 0,
                "y": 8150,
                "w": 1000,
                "h": 800,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1025,
                "y": 8175,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 850,
                "y": 8150,
                "w": 100,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 890,
                "y": 8300,
                "w": 10,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 830,
                "y": 8340,
                "w": 10,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 810,
                "y": 8360,
                "w": 10,
                "h": 130,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 690,
                "y": 8410,
                "w": 70,
                "h": 70,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 710,
                "y": 8400,
                "w": 30,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 660,
                "y": 8460,
                "w": 10,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 640,
                "y": 8425,
                "w": 10,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 8520,
                "w": 60,
                "h": 60,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 580,
                "y": 8550,
                "w": 130,
                "h": 10,
                "type": "rotate-lava",
                "angle": 2,
                "rotateSpeed": 120,
                "pivotX": 580,
                "pivotY": 8550,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 65.19202405202648,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 500,
                "y": 8630,
                "w": 10,
                "h": 10,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        8630
                    ],
                    [
                        570,
                        8630
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 8630
                },
                "pointTo": {
                    "x": 570,
                    "y": 8630
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 420,
                "y": 8620,
                "w": 10,
                "h": 10,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        8620
                    ],
                    [
                        570,
                        8620
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 570,
                    "y": 8620
                },
                "pointTo": {
                    "x": 350,
                    "y": 8620
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        8150
                    ],
                    [
                        850,
                        8150
                    ],
                    [
                        0,
                        8770
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 850,
                    "top": 8150,
                    "bottom": 8770
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        8440
                    ],
                    [
                        1000,
                        8950
                    ],
                    [
                        150,
                        8950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 150,
                    "right": 1000,
                    "top": 8440,
                    "bottom": 8950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 340,
                "y": 8750,
                "r": 63,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 63,
                "inView": false
            },
            {
                "x": 200,
                "y": 8760,
                "w": 160,
                "h": 10,
                "type": "rotatingsafe",
                "angle": 2.5,
                "rotateSpeed": 150,
                "pivotX": 200,
                "pivotY": 8760,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 80.15609770940699,
                "unSim": 2.449999999999994,
                "inView": false
            },
            {
                "x": 110,
                "y": 8860,
                "w": 80,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 50,
                "y": 8860,
                "w": 10,
                "h": 80,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 743.9865792556727,
                "y": 8437.305000650797,
                "w": 10,
                "h": 20,
                "type": "lavamove",
                "points": [
                    [
                        660,
                        8260
                    ],
                    [
                        750,
                        8450
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 660,
                    "y": 8260
                },
                "pointTo": {
                    "x": 750,
                    "y": 8450
                },
                "xv": 107.02158618476118,
                "yv": 225.9344597233847,
                "inView": false
            },
            {
                "x": 50,
                "y": 8950,
                "w": 2150,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 9100,
                "w": 2200,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 9050,
                "w": 2200,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 6000,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 0,
                "y": 9050,
                "w": 2150,
                "h": 50,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 3950,
                "y": 8400,
                "w": 50,
                "h": 1600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 869.5479459337637,
                "y": 8366.482878350975,
                "w": 10,
                "h": 20,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        8210
                    ],
                    [
                        880,
                        8390
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 880,
                    "y": 8390
                },
                "pointTo": {
                    "x": 800,
                    "y": 8210
                },
                "xv": -101.5346165133619,
                "yv": -228.45288715506427,
                "inView": false
            },
            {
                "x": 900,
                "y": 375,
                "w": 50,
                "h": 225,
                "type": "trans",
                "collide": false,
                "opaq": 0.2,
                "inView": false
            },
            {
                "x": 950,
                "y": 550,
                "w": 50,
                "h": 225,
                "type": "trans",
                "collide": false,
                "opaq": 0.2,
                "inView": false
            },
            {
                "x": 0,
                "y": 9025,
                "w": 2200,
                "h": 100,
                "type": "size",
                "size": 10,
                "inView": false
            },
            {
                "x": 2375,
                "y": 9165,
                "w": 200,
                "h": 200,
                "type": "movingsafe",
                "points": [
                    [
                        2375,
                        8425
                    ],
                    [
                        2375,
                        9775
                    ],
                    [
                        3725,
                        9775
                    ],
                    [
                        3725,
                        8425
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2375,
                    "y": 8425
                },
                "pointTo": {
                    "x": 2375,
                    "y": 9775
                },
                "xv": 1.8369701987210297e-14,
                "yv": 300,
                "inView": false
            },
            {
                "x": 3115,
                "y": 9775,
                "w": 200,
                "h": 200,
                "type": "movingsafe",
                "points": [
                    [
                        2375,
                        8425
                    ],
                    [
                        2375,
                        9775
                    ],
                    [
                        3725,
                        9775
                    ],
                    [
                        3725,
                        8425
                    ]
                ],
                "speed": 300,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2375,
                    "y": 9775
                },
                "pointTo": {
                    "x": 3725,
                    "y": 9775
                },
                "xv": 300,
                "yv": 0,
                "inView": false
            },
            {
                "x": 3725,
                "y": 9035,
                "w": 200,
                "h": 200,
                "type": "movingsafe",
                "points": [
                    [
                        2375,
                        8425
                    ],
                    [
                        2375,
                        9775
                    ],
                    [
                        3725,
                        9775
                    ],
                    [
                        3725,
                        8425
                    ]
                ],
                "speed": 300,
                "currentPoint": 2,
                "pointOn": {
                    "x": 3725,
                    "y": 9775
                },
                "pointTo": {
                    "x": 3725,
                    "y": 8425
                },
                "xv": 1.8369701987210297e-14,
                "yv": -300,
                "inView": false
            },
            {
                "x": 2985,
                "y": 8425,
                "w": 200,
                "h": 200,
                "type": "movingsafe",
                "points": [
                    [
                        2375,
                        8425
                    ],
                    [
                        2375,
                        9775
                    ],
                    [
                        3725,
                        9775
                    ],
                    [
                        3725,
                        8425
                    ]
                ],
                "speed": 300,
                "currentPoint": 3,
                "pointOn": {
                    "x": 3725,
                    "y": 8425
                },
                "pointTo": {
                    "x": 2375,
                    "y": 8425
                },
                "xv": -300,
                "yv": 3.6739403974420595e-14,
                "inView": false
            },
            {
                "x": 2675,
                "y": 9465,
                "w": 150,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        2675,
                        8725
                    ],
                    [
                        2675,
                        9525
                    ],
                    [
                        3475,
                        9525
                    ],
                    [
                        3475,
                        8725
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2675,
                    "y": 8725
                },
                "pointTo": {
                    "x": 2675,
                    "y": 9525
                },
                "xv": 1.8369701987210297e-14,
                "yv": 300,
                "inView": false
            },
            {
                "x": 3415,
                "y": 9525,
                "w": 150,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        2675,
                        8725
                    ],
                    [
                        2675,
                        9525
                    ],
                    [
                        3475,
                        9525
                    ],
                    [
                        3475,
                        8725
                    ]
                ],
                "speed": 300,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2675,
                    "y": 9525
                },
                "pointTo": {
                    "x": 3475,
                    "y": 9525
                },
                "xv": 300,
                "yv": 0,
                "inView": false
            },
            {
                "x": 3475,
                "y": 8785,
                "w": 150,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        2675,
                        8725
                    ],
                    [
                        2675,
                        9525
                    ],
                    [
                        3475,
                        9525
                    ],
                    [
                        3475,
                        8725
                    ]
                ],
                "speed": 300,
                "currentPoint": 2,
                "pointOn": {
                    "x": 3475,
                    "y": 9525
                },
                "pointTo": {
                    "x": 3475,
                    "y": 8725
                },
                "xv": 1.8369701987210297e-14,
                "yv": -300,
                "inView": false
            },
            {
                "x": 2735,
                "y": 8725,
                "w": 150,
                "h": 150,
                "type": "movingsafe",
                "points": [
                    [
                        2675,
                        8725
                    ],
                    [
                        2675,
                        9525
                    ],
                    [
                        3475,
                        9525
                    ],
                    [
                        3475,
                        8725
                    ]
                ],
                "speed": 300,
                "currentPoint": 3,
                "pointOn": {
                    "x": 3475,
                    "y": 8725
                },
                "pointTo": {
                    "x": 2675,
                    "y": 8725
                },
                "xv": -300,
                "yv": 3.6739403974420595e-14,
                "inView": false
            },
            {
                "x": 3275,
                "y": 9285,
                "w": 100,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        2925,
                        8975
                    ],
                    [
                        2925,
                        9325
                    ],
                    [
                        3275,
                        9325
                    ],
                    [
                        3275,
                        8975
                    ]
                ],
                "speed": 300,
                "currentPoint": 2,
                "pointOn": {
                    "x": 3275,
                    "y": 9325
                },
                "pointTo": {
                    "x": 3275,
                    "y": 8975
                },
                "xv": 1.8369701987210297e-14,
                "yv": -300,
                "inView": false
            },
            {
                "x": 3125,
                "y": 9175,
                "w": 50,
                "h": 50,
                "type": "winpad",
                "inView": false
            },
            {
                "x": 2350,
                "y": 9225,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2500,
                "y": 9375,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2450,
                "y": 9600,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 2375,
                "y": 9600,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 2200,
                "y": 9150,
                "w": 150,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        2350,
                        9575
                    ],
                    [
                        2500,
                        9600
                    ],
                    [
                        2350,
                        9725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 2350,
                    "right": 2500,
                    "top": 9575,
                    "bottom": 9725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 2575,
                "y": 9725,
                "w": 50,
                "h": 95,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2575,
                "y": 9900,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2725,
                "y": 9850,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2925,
                "y": 9845,
                "w": 75,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        2925,
                        9775
                    ],
                    [
                        2925,
                        9925
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 2925,
                    "y": 9775
                },
                "pointTo": {
                    "x": 2925,
                    "y": 9925
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 3075,
                "y": 9855,
                "w": 75,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        3075,
                        9775
                    ],
                    [
                        3075,
                        9925
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 3075,
                    "y": 9925
                },
                "pointTo": {
                    "x": 3075,
                    "y": 9775
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 3300,
                "y": 9750,
                "w": 50,
                "h": 200,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3400,
                "y": 9950,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3500,
                "y": 9750,
                "w": 50,
                "h": 200,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3350,
                "y": 9800,
                "w": 150,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3725,
                "y": 9975,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 3625,
                "y": 10000,
                "w": 200,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3900,
                "y": 9825,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 3950,
                "y": 9725,
                "w": 100,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3700,
                "y": 9775,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 3850,
                "y": 9550,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 3700,
                "y": 9250,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3750,
                "y": 9275,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3875,
                "y": 9200,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3780,
                "y": 9025,
                "w": 150,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3725,
                "y": 8800,
                "w": 75,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3800,
                "y": 8675,
                "w": 125,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3700,
                "y": 8500,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3525,
                "y": 8400,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3225,
                "y": 8370,
                "w": 175,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        3225,
                        8340
                    ],
                    [
                        3225,
                        8440
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 3225,
                    "y": 8440
                },
                "pointTo": {
                    "x": 3225,
                    "y": 8340
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 3225,
                "y": 8535,
                "w": 175,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        3225,
                        8505
                    ],
                    [
                        3225,
                        8605
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 3225,
                    "y": 8605
                },
                "pointTo": {
                    "x": 3225,
                    "y": 8505
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 3225,
                "y": 8605,
                "w": 175,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3225,
                "y": 8340,
                "w": 175,
                "h": 105,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3055,
                "y": 8385,
                "w": 20,
                "h": 200,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2975,
                "y": 8620,
                "w": 12.5,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2775,
                "y": 8400,
                "w": 25,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2787.5,
                "y": 8545,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 2605,
                "y": 8460,
                "r": 88,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 88,
                "inView": false
            },
            {
                "x": 2385,
                "y": 8635,
                "r": 88,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 88,
                "inView": false
            },
            {
                "x": 2450,
                "y": 8950,
                "r": 37.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 37.5,
                "inView": false
            },
            {
                "x": 2675,
                "y": 8975,
                "w": 150,
                "h": 150,
                "type": "grav",
                "force": 2000,
                "dir": {
                    "x": -2000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 2675,
                "y": 9275,
                "w": 150,
                "h": 150,
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
                "x": 2225,
                "y": 9000,
                "w": 100,
                "h": 150,
                "type": "color",
                "bgColor": "#5e1d62",
                "tileColor": "#843978",
                "inView": false
            },
            {
                "x": 2925,
                "y": 9575,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3075,
                "y": 9475,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3225,
                "y": 9525,
                "w": 150,
                "h": 150,
                "type": "grav",
                "force": 1000,
                "dir": {
                    "x": 1000,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 3375,
                "y": 9625,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3175,
                "y": 9525,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3475,
                "y": 9275,
                "w": 150,
                "h": 150,
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
                "x": 3425,
                "y": 9325,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3475,
                "y": 9050,
                "w": 150,
                "h": 150,
                "type": "grav",
                "force": 2000,
                "dir": {
                    "x": -2000,
                    "y": 0
                },
                "direction": "left",
                "inView": false
            },
            {
                "x": 3575,
                "y": 9100,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3425,
                "y": 8950,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3450,
                "y": 8800,
                "w": 100,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3375,
                "y": 8705,
                "w": 25,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3300,
                "y": 8825,
                "w": 25,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3150,
                "y": 8725,
                "w": 150,
                "h": 150,
                "type": "grav",
                "force": 2000,
                "dir": {
                    "x": 0,
                    "y": -2000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 3000,
                "y": 9125,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2875,
                "y": 9200,
                "w": 75,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3000,
                "y": 9275,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3240,
                "y": 9275,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3325,
                "y": 9350,
                "w": 75,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3200,
                "y": 9300,
                "w": 25,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3075,
                "y": 9385,
                "w": 25,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3175,
                "y": 9350,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3100,
                "y": 9400,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2975,
                "y": 9300,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3000,
                "y": 9300,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3250,
                "y": 9050,
                "w": 75,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3175,
                "y": 8900,
                "w": 25,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 3450,
                "y": 9500,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 2925,
                "y": 9015,
                "w": 100,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        2925,
                        8975
                    ],
                    [
                        2925,
                        9325
                    ],
                    [
                        3275,
                        9325
                    ],
                    [
                        3275,
                        8975
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "pointOn": {
                    "x": 2925,
                    "y": 8975
                },
                "pointTo": {
                    "x": 2925,
                    "y": 9325
                },
                "xv": 1.8369701987210297e-14,
                "yv": 300,
                "inView": false
            },
            {
                "x": -25,
                "y": -25,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 1,
                "inView": true
            },
            {
                "x": 1775,
                "y": 775,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 3,
                "inView": false
            },
            {
                "x": 1325,
                "y": 1875,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 4,
                "inView": false
            },
            {
                "x": 2850,
                "y": 3250,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 5,
                "inView": false
            },
            {
                "x": 700,
                "y": 4225,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 6,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5725,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 7,
                "inView": false
            },
            {
                "x": 700,
                "y": 4225,
                "w": 150,
                "h": 150,
                "type": "color",
                "bgColor": "#223f2f",
                "tileColor": "#456352",
                "inView": false
            },
            {
                "x": 2350,
                "y": 8150,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 9,
                "inView": false
            },
            {
                "x": 1275,
                "y": 6025,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 8,
                "inView": false
            },
            {
                "x": 2200,
                "y": 9000,
                "w": 150,
                "h": 150,
                "type": "zone",
                "value": 10,
                "inView": false
            },
            {
                "x": -50,
                "y": 300,
                "w": 225,
                "h": 30,
                "type": "rotatingsafe",
                "angle": 386,
                "rotateSpeed": 120,
                "pivotX": -50,
                "pivotY": 300,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 113.49559462816167,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 1975,
                "y": 6025,
                "r": 20,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 20,
                "inView": false
            },
            {
                "x": 965,
                "y": 775,
                "r": 21,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 21,
                "inView": false
            },
            {
                "x": 200,
                "y": 250,
                "w": 50,
                "h": 50,
                "type": "morphnormal",
                "active": true,
                "morphId": 3,
                "inView": true
            },
            {
                "x": 275,
                "y": 275,
                "r": 15,
                "tpx": 1025,
                "tpy": 775,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 15,
                "inView": true
            },
            {
                "x": 2380,
                "y": 3300,
                "w": 50,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        2300,
                        3300
                    ],
                    [
                        2450,
                        3300
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 2450,
                    "y": 3300
                },
                "pointTo": {
                    "x": 2300,
                    "y": 3300
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 2400,
                "y": 3962.5,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2450,
                "y": 4000,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2387.5,
                "y": 3900,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1025,
                "y": 5625,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 975,
                "y": 5775,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 2575,
                "y": 5250,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 2025,
                "y": 5250,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 2600,
                "y": 8150,
                "w": 700,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3300,
                "y": 7850,
                "w": 700,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2300,
                "y": 8300,
                "w": 300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2200,
                "y": 8400,
                "w": 150,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": -25,
                "y": -25,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=qgdsW7bbG24",
                "volume": 1,
                "startTime": 0,
                "inView": true
            },
            {
                "x": 1775,
                "y": 775,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=4ySri_PGaf4",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1350,
                "y": 1875,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=AzE0EgM_zVY",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 2850,
                "y": 3250,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=4nHf6gdiAMc",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 2225,
                "y": 5725,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=yHjj9fWTZdY",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1250,
                "y": 6000,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=ZmwHJ3NWwdw",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 2350,
                "y": 8150,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=4qe8FvP4RPA",//'https://www.youtube.com/watch?v=P0_kuFlM9wI',
                "volume": 1,
                "startTime": 0,
                "inView": false
            }
        ]
        const enemies = [
            {
                "type": "normal",
                "angle": 1.4235250921910347,
                "radius": 18,
                "speed": 75,
                "x": 2032.1467992027265,
                "y": 8408.997407886389,
                "renderX": 2031.9633748837891,
                "renderY": 8407.760938914183,
                "xv": 11.005459136253561,
                "yv": 74.18813833221759,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 3.6202720511115727,
                "radius": 18,
                "speed": 75,
                "x": 1687.793264463995,
                "y": 8331.787629978964,
                "renderX": 1688.9027694338329,
                "renderY": 8332.363389235863,
                "xv": -66.57029819026594,
                "yv": -34.54555541396134,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 0.45062375950427097,
                "radius": 18,
                "speed": 75,
                "x": 1979.4675115370337,
                "y": 8590.572515700667,
                "renderX": 1980.5927310536754,
                "renderY": 8590.028106810798,
                "xv": -67.51317099849015,
                "yv": 32.66453339217672,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 2.951890672553216,
                "radius": 18,
                "speed": 75,
                "x": 1616.3188121176172,
                "y": 8866.884752681159,
                "renderX": 1617.546387711417,
                "renderY": 8866.649044892773,
                "xv": -73.65453562800374,
                "yv": 14.142467303236982,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 3.358793900104755,
                "radius": 18,
                "speed": 75,
                "x": 1482.3466864918519,
                "y": 8642.132967021433,
                "renderX": 1483.5673169885285,
                "renderY": 8642.402338865882,
                "xv": -73.2378298005924,
                "yv": -16.162310667087834,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 2.128157631551917,
                "radius": 18,
                "speed": 75,
                "x": 1999.1444899012085,
                "y": 8402.000952682822,
                "renderX": 1999.8056757802547,
                "renderY": 8400.940135434965,
                "xv": -39.67115274276629,
                "yv": 63.64903487139539,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 2.346648186696365,
                "radius": 18,
                "speed": 75,
                "x": 1795.4399845153803,
                "y": 8466.057572246398,
                "renderX": 1796.3153900254115,
                "renderY": 8465.165291352841,
                "xv": -52.52433060186426,
                "yv": 53.53685361343218,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 2.1678193334817806,
                "radius": 18,
                "speed": 75,
                "x": 1809.996153075168,
                "y": 8662.997385026014,
                "renderX": 1810.698881770606,
                "renderY": 8661.963618910973,
                "xv": -42.16372172628964,
                "yv": 62.02596690248376,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 1.4315272095048226,
                "radius": 18,
                "speed": 75,
                "x": 1629.6815789520424,
                "y": 8405.208778453627,
                "renderX": 1629.508054769934,
                "renderY": 8403.970881301913,
                "xv": 10.411450926503502,
                "yv": 74.27382910288797,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.892418246224299,
                "radius": 24,
                "speed": 75,
                "x": 1481.125797776769,
                "y": 8213.01011378956,
                "renderX": 1480.901974818818,
                "renderY": 8211.780315723414,
                "xv": 13.42937747706488,
                "yv": 73.78788396870114,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.686343612870412,
                "radius": 24,
                "speed": 75,
                "x": 1626.1821517598,
                "y": 8597.062744860785,
                "renderX": 1626.21470478845,
                "renderY": 8598.312320909023,
                "xv": -1.9531817189871725,
                "yv": -74.97456289417508,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.659628946765509,
                "radius": 24,
                "speed": 75,
                "x": 1874.2439214552014,
                "y": 8486.257425233038,
                "renderX": 1874.3098409048284,
                "renderY": 8487.505685873355,
                "xv": -3.9551669776135427,
                "yv": -74.89563841893062,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 2.793666677262043,
                "radius": 24,
                "speed": 75,
                "x": 1859.0848540282623,
                "y": 8717.075526169996,
                "renderX": 1860.2599563659091,
                "renderY": 8716.64934018236,
                "xv": -70.50614025880158,
                "yv": 25.57115925816032,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.007648194763872,
                "radius": 24,
                "speed": 75,
                "x": 1822.1502683863055,
                "y": 8528.07079141619,
                "renderX": 1822.9600638701818,
                "renderY": 8529.023015798513,
                "xv": -48.58772903256562,
                "yv": -57.13346293948915,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 0.42940950588950166,
                "radius": 24,
                "speed": 75,
                "x": 1700.2041739245888,
                "y": 8701.021788309343,
                "renderX": 1699.067659235909,
                "renderY": 8700.501370820766,
                "xv": 68.19088132077536,
                "yv": 31.225049314547604,
                "bound": {
                    "x": 1400,
                    "y": 8150,
                    "w": 750,
                    "h": 750
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.698052848572002,
                "radius": 12,
                "speed": 150,
                "x": 1480.695812923861,
                "y": 8306.961978586398,
                "renderX": 1480.7316520257268,
                "renderY": 8304.462235487841,
                "xv": -2.150346111939264,
                "yv": 149.98458591334932,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 3.87315691796051,
                "radius": 12,
                "speed": 150,
                "x": 1631.6717776527275,
                "y": 8513.82724668963,
                "renderX": 1633.5321034793983,
                "renderY": 8515.497332860647,
                "xv": -111.61954960024937,
                "yv": -100.20517026100735,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.9764583136191405,
                "radius": 12,
                "speed": 150,
                "x": 1692.5740608749638,
                "y": 8465.174258263462,
                "renderX": 1691.9215334366195,
                "renderY": 8462.7609186806,
                "xv": 39.151646300671594,
                "yv": 144.80037497170753,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 5.516665575309225,
                "radius": 12,
                "speed": 150,
                "x": 1811.521750071368,
                "y": 8417.35597271916,
                "renderX": 1809.7209274357506,
                "renderY": 8419.090053984572,
                "xv": 108.04935813702792,
                "yv": -104.04487592465225,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 3.3757055102443756,
                "radius": 12,
                "speed": 150,
                "x": 1732.906593774549,
                "y": 8706.167350281772,
                "renderX": 1730.4747924652615,
                "renderY": 8706.747300617706,
                "xv": 145.908078557245,
                "yv": -34.79702015593887,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 3.491412348110275,
                "radius": 12,
                "speed": 150,
                "x": 1566.5907738544884,
                "y": 8744.190481700905,
                "renderX": 1564.2421875446607,
                "renderY": 8745.047302770494,
                "xv": 140.91517858966628,
                "yv": -51.409264175267616,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 1.5574001842388754,
                "radius": 12,
                "speed": 150,
                "x": 1955.9564244987141,
                "y": 8875.966801019094,
                "renderX": 1955.922935143993,
                "renderY": 8873.467025336533,
                "xv": 2.0093612832757013,
                "yv": 149.98654095362446,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 4.127844036704608,
                "radius": 12,
                "speed": 150,
                "x": 1608.1733775099074,
                "y": 8212.56641410914,
                "renderX": 1606.7938276618675,
                "renderY": 8210.4815059057,
                "xv": 82.77299088239363,
                "yv": 125.09449220642442,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 0.8913039905993697,
                "radius": 12,
                "speed": 150,
                "x": 1911.5073330689665,
                "y": 8688.180021421009,
                "renderX": 1909.9363375752573,
                "renderY": 8690.124751006002,
                "xv": 94.25972962255551,
                "yv": -116.68377509955158,
                "bound": {
                    "x": 1400,
                    "y": 8175,
                    "w": 750,
                    "h": 725
                },
                "isLava": true,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 1.6467923728408678,
                "radius": 12,
                "speed": 150,
                "x": 331.908521110071,
                "y": 696.9320653098148,
                "renderX": 332.0983283998678,
                "renderY": 694.4392810847485,
                "xv": -11.388437387806125,
                "yv": 149.56705350398536,
                "bound": {
                    "x": 100,
                    "y": 600,
                    "w": 300,
                    "h": 300
                },
                "isLava": false,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 1.3107743923055344,
                "radius": 12,
                "speed": 150,
                "x": 219.12764716737092,
                "y": 652.5622054194255,
                "renderX": 218.48489279461842,
                "renderY": 650.1462445719969,
                "xv": 38.56526236515075,
                "yv": 144.9576508457111,
                "bound": {
                    "x": 100,
                    "y": 600,
                    "w": 300,
                    "h": 300
                },
                "isLava": false,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 1.7625160446651105,
                "radius": 12,
                "speed": 150,
                "x": 153.49746751022758,
                "y": 678.2208596880564,
                "renderX": 153.9738359729963,
                "renderY": 675.7666646901641,
                "xv": -28.58210776612268,
                "yv": 147.25169987353542,
                "bound": {
                    "x": 100,
                    "y": 600,
                    "w": 300,
                    "h": 300
                },
                "isLava": false,
                "inView": false
            },
            {
                "type": "normal",
                "angle": 0.6571347128267584,
                "radius": 12,
                "speed": 150,
                "x": 264.054075430231,
                "y": 730.9852100459857,
                "renderX": 266.03343978543217,
                "renderY": 732.5123370051344,
                "xv": -118.76186131206912,
                "yv": -91.62761754892931,
                "bound": {
                    "x": 100,
                    "y": 600,
                    "w": 300,
                    "h": 300
                },
                "isLava": false,
                "inView": false
            }
        ]
        const safes = [
            {
                "x": 712.5,
                "y": 1162.5,
                "w": 25,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 712.5,
                "y": 1312.5,
                "w": 25,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1025,
                "y": 1425,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1380,
                "y": 910,
                "w": 40,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 100,
                "y": 140,
                "w": 100,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 0,
                "y": 400,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 825,
                "y": 387.5,
                "w": 50,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1425,
                "y": 1925,
                "w": 200,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1875,
                "y": 2225,
                "w": 50,
                "h": 275,
                "renderAbove": true
            },
            {
                "x": 1575,
                "y": 2450,
                "w": 300,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1825,
                "y": 2925,
                "w": 50,
                "h": 225,
                "renderAbove": true
            },
            {
                "x": 1875,
                "y": 3100,
                "w": 75,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1950,
                "y": 2800,
                "w": 50,
                "h": 350,
                "renderAbove": true
            },
            {
                "x": 1975,
                "y": 2750,
                "w": 75,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2400,
                "y": 2025,
                "w": 175,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2850,
                "y": 2350,
                "w": 50,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 2725,
                "y": 2400,
                "w": 125,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2300,
                "y": 2325,
                "w": 25,
                "h": 225,
                "renderAbove": true
            },
            {
                "x": 2250,
                "y": 2575,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2300,
                "y": 2650,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2250,
                "y": 2725,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2775,
                "y": 2575,
                "w": 50,
                "h": 125,
                "renderAbove": true
            },
            {
                "x": 2825,
                "y": 2575,
                "w": 125,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2900,
                "y": 2625,
                "w": 50,
                "h": 225,
                "renderAbove": true
            },
            {
                "x": 2775,
                "y": 2850,
                "w": 175,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2775,
                "y": 2900,
                "w": 50,
                "h": 125,
                "renderAbove": true
            },
            {
                "x": 2675,
                "y": 3025,
                "w": 150,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2675,
                "y": 3075,
                "w": 50,
                "h": 125,
                "renderAbove": true
            },
            {
                "x": 2725,
                "y": 3150,
                "w": 275,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1525,
                "y": 2750,
                "w": 75,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2050,
                "y": 4037.5,
                "w": 337.5,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 750,
                "y": 4300,
                "w": 150,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2575,
                "y": 5725,
                "w": 20,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 2655,
                "y": 5805,
                "w": 20,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 2275,
                "y": 5950,
                "w": 50,
                "h": 75,
                "renderAbove": true
            },
            {
                "x": 2125,
                "y": 6150,
                "w": 450,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2275,
                "y": 6325,
                "w": 50,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2425,
                "y": 6475,
                "w": 325,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2725,
                "y": 6437.5,
                "w": 25,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2725,
                "y": 6400,
                "w": 25,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 2137.5,
                "y": 6200,
                "w": 25,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1325,
                "y": 7025,
                "w": 225,
                "h": 75,
                "renderAbove": true
            },
            {
                "x": 2475,
                "y": 6800,
                "w": 225,
                "h": 75,
                "renderAbove": true
            },
            {
                "x": 175,
                "y": 6775,
                "w": 225,
                "h": 75,
                "renderAbove": true
            },
            {
                "x": 890,
                "y": 8250,
                "w": 50,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 950,
                "y": 8150,
                "w": 50,
                "h": 110,
                "renderAbove": true
            },
            {
                "x": 880,
                "y": 8280,
                "w": 10,
                "h": 70,
                "renderAbove": true
            },
            {
                "x": 840,
                "y": 8360,
                "w": 10,
                "h": 70,
                "renderAbove": true
            },
            {
                "x": 770,
                "y": 8450,
                "w": 40,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 800,
                "y": 8490,
                "w": 30,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 820,
                "y": 8450,
                "w": 40,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 660,
                "y": 8420,
                "w": 10,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 685,
                "y": 8390,
                "w": 90,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 640,
                "y": 8450,
                "w": 10,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 625,
                "y": 8390,
                "w": 10,
                "h": 40,
                "renderAbove": true
            },
            {
                "x": 610,
                "y": 8490,
                "w": 10,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 580,
                "y": 8580,
                "w": 30,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 580,
                "y": 8600,
                "w": 10,
                "h": 60,
                "renderAbove": true
            },
            {
                "x": 350,
                "y": 8620,
                "w": 230,
                "h": 20,
                "renderAbove": true
            },
            {
                "x": 340,
                "y": 8620,
                "w": 10,
                "h": 60,
                "renderAbove": true
            },
            {
                "x": 300,
                "y": 8680,
                "w": 10,
                "h": 60,
                "renderAbove": true
            },
            {
                "x": 270,
                "y": 8710,
                "w": 30,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 190,
                "y": 8820,
                "w": 10,
                "h": 60,
                "renderAbove": true
            },
            {
                "x": 100,
                "y": 8870,
                "w": 90,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 20,
                "y": 8850,
                "w": 80,
                "h": 10,
                "renderAbove": true
            },
            {
                "x": 20,
                "y": 8880,
                "w": 10,
                "h": 90,
                "renderAbove": true
            },
            {
                "x": 300,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 150,
                "y": 9087.5,
                "w": 150,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 0,
                "y": 9050,
                "w": 150,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 400,
                "y": 9050,
                "w": 150,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 950,
                "y": 9062.5,
                "w": 100,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 650,
                "y": 9087.5,
                "w": 200,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 550,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 850,
                "y": 9075,
                "w": 100,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1050,
                "y": 9050,
                "w": 100,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1150,
                "y": 9050,
                "w": 150,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 2325,
                "y": 9062.5,
                "w": 100,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1400,
                "y": 9087.5,
                "w": 250,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 1300,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1750,
                "y": 9050,
                "w": 50,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 1650,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1900,
                "y": 9050,
                "w": 50,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 1800,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2050,
                "y": 9090,
                "w": 50,
                "h": 12.5,
                "renderAbove": true
            },
            {
                "x": 1950,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2100,
                "y": 9050,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 2525,
                "y": 8825,
                "w": 200,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 3100,
                "y": 8825,
                "w": 25,
                "h": 200,
                "renderAbove": true
            },
            {
                "x": 3200,
                "y": 9187.5,
                "w": 125,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 3100,
                "y": 9150,
                "w": 100,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 605,
                "y": 8635,
                "w": 10,
                "h": 50,
                "renderAbove": true
            }
        ]
        const texts =  [
            {
                "x": 125,
                "y": 950,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "2",
                "angle": 0,
                "story": false
            },
            {
                "x": 1850,
                "y": 850,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "3",
                "angle": 0,
                "story": false
            },
            {
                "x": 2025,
                "y": 1375,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "You need speed to pass",
                "angle": 0,
                "story": false
            },
            {
                "x": 1400,
                "y": 1950,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "4",
                "angle": 0,
                "story": false
            },
            {
                "x": 2925,
                "y": 3325,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "5",
                "angle": 0,
                "story": false
            },
            {
                "x": 1375,
                "y": 4075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "6",
                "angle": 0,
                "story": false
            },
            {
                "x": 1375,
                "y": 3975,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Look ahead!",
                "angle": 0,
                "story": false
            },
            {
                "x": 2300,
                "y": 5800,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "7",
                "angle": 0,
                "story": false
            },
            {
                "x": 2925,
                "y": 3525,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "(6 button progress)",
                "angle": 0,
                "story": false
            },
            {
                "x": 3125,
                "y": 3325,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "(7 button progress)",
                "angle": -90,
                "story": false
            },
            {
                "x": 1325,
                "y": 6075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "8",
                "angle": 0,
                "story": false
            },
            {
                "x": 2525,
                "y": 6550,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Hold SHIFT",
                "angle": 0,
                "story": false
            },
            {
                "x": 3875,
                "y": 7625,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Aim and GO!!!!",
                "angle": 0,
                "story": false
            },
            {
                "x": 2425,
                "y": 8225,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "9",
                "angle": 0,
                "story": false
            },
            {
                "x": 2275,
                "y": 9075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "10",
                "angle": 0,
                "story": false
            },
            {
                "x": 350,
                "y": 225,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "button progress",
                "angle": 5,
                "story": false
            },
            {
                "x": 2090,
                "y": 5975,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!!",
                "angle": 0,
                "story": false
            },
            {
                "x": 1625,
                "y": 6080,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!!",
                "angle": 0,
                "story": false
            },
            {
                "x": 2325,
                "y": 7950,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "this conveyor is VERY fast",
                "angle": -90,
                "story": false
            },
            {
                "x": 1200,
                "y": 8925,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Hint: abuse the safes!",
                "angle": 0,
                "story": false
            },
            {
                "x": 175,
                "y": 9125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 425,
                "y": 9025,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 675,
                "y": 9125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 1175,
                "y": 9025,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 1425,
                "y": 9125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 1775,
                "y": 9025,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            },
            {
                "x": 2075,
                "y": 9125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "!",
                "angle": 0,
                "story": false
            }
        ]
    
        const str = convertOldExMap(obs, enemies, safes, texts, counter, 'pos');
        
        eval(str);
    
        mapDimensions.x=8000;
        mapDimensions.y=20000;

        spawnPosition.x=100;
        spawnPosition.y=100;
        window.respawnPlayer();
        colors.background='#141f52'; colors.tile='#414381';

        // C(0,[],[26],{
        //     x: spawnPosition.x,
        //     y: spawnPosition.y,
        //     r: 50,
        //     musicPath: 'https://www.youtube.com/watch?v=2C4lFUpI_4U'
        // });
    }
})();

// var counter = 6000;// add 1000 for every new map so color changers dont conflict
// // var lastRotAngle = 0;
// var typeMap = {
//     'normal': {
//         type: [1,[],[0]],
//     },
//     // 'trans': {
//     //     type: [1,[],[20]],
//     //     customMap: (params) => {
//     //         return {hex: '#000000', alpha: params.opaq};
//     //     }
//     // },
//     // 'block': {
//     //     type: [1,[],[20]],
//     //     customMap: (params) => {
//     //         return {hex: params.color, alpha: 1};
//     //     }
//     // },
//     'grav': {
//         type: [1,[],[13]],
//         customMap: (params) => {
//             const p = {};
//             if(params.direction === 'right'){
//                 p.conveyorAngle = 0
//             } else if(params.direction === 'down'){
//                 p.conveyorAngle = 90;
//             } else if(params.direction === 'left'){
//                 p.conveyorAngle = 180;
//             } else {
//                 p.conveyorAngle = 270;
//             }
//             p.conveyorFriction = 0.8;
//             p.conveyorAngleRotateSpeed = 0;
//             p.conveyorForce = params.force / 10000 * 7.08 * 5 / 16.66;

//             if(params.x === 2000 && params.y === 11300/2){
//                 p.conveyorForce /= 2;
//             } else if(params.x === 3200/2 && params.y === 12000/2){
//                 p.conveyorForce /= 2;
//             }
//             return p;
//         }
//     },
//     'circle-normal': {
//         type: [0,[],[0]],
//         radius: 'r' // this means map radius to r
//         // all other params filled in 1:1, so x will be filled in from x, y from y, etc.
//     },
//     'circle-lava': {
//         type: [0,[],[1]],
//         radius: 'r',
//         customMap: (params) => {
//             return {
//                 boundPlayer: true,
//             }
//         }
//     },
//     'circle-tp': {
//         type: [0,[],[12]],
//         customMap: (params) => {
//             return {
//                 tpx: params.tpx * 2,
//                 tpy: params.tpy * 2
//             }
//         }
//     },
//     'lava': {
//         type: [1,[],[1]],
//         customMap: (params) => {
//             return {
//                 boundPlayer: params.canCollide
//             };
//         }
//     },
//     'poly': {
//         type: [2,[],[0]],
//         customMap: (params) => {
//             const p = {points: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             return p;
//         }
//     },
//     'poly-tp': {
//         type: [2,[],[12]],
//         customMap: (params) => {
//             const p = {points: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             p.tpx = params.tpx * 2;
//             p.tpy = params.tpy * 2;
//             return p;
//         }
//     },
//     'poly-safe': {
//         type: [2,[],[11]],
//         customMap: (params) => {
//             const p = {points: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             return p;
//         }
//     },
//     'poly-vinette': {
//         type: [2,[],[24]],
//         customMap: (params) => {
//             const p = {points: [],
//                 innerR: params.vc.r,
//                 innerG: params.vc.g,
//                 innerB: params.vc.b,
//                 innerSize: params.ir,
//                 outerR: params.vc.r,
//                 outerG: params.vc.g,
//                 outerB: params.vc.b,
//                 outerSize: params.or,
//                 innerOpacity: 0,
//                 outerOpacity: params.o
//             };
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             return p;
//         }
//     },
//     'poly-lava': {
//         type: [2,[],[1]],
//         customMap: (params) => {
//             const p = {points: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             p.boundPlayer = true;//params.canCollide;
//             return p;
//         }
//     },
//     'move': {
//         type: [1,[0],[0]],
//         customMap: (params) => {
//             const p = {path: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.path.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2,
//                     params.speed * 2 / 1000
//                 ])
//             }

//             p.currentPoint = params.currentPoint;
//             p.x = p.path[0][0];
//             p.y = p.path[0][1];
//             return p;
//         }
//     },
//     'lavamove': {
//         type: [1,[0],[1]],
//         customMap: (params) => {
//             const p = {path: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.path.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2,
//                     params.speed * 2 / 1000
//                 ])
//             }

//             p.currentPoint = params.currentPoint;

//             const currentPoint = p.path[p.currentPoint];
//             let nextPointIndex = p.currentPoint+1;
//             if(nextPointIndex === p.path.length) nextPointIndex = 0;
//             const nextPoint = p.path[nextPointIndex];

//             const totalDist = Math.sqrt((nextPoint[0]-currentPoint[0])**2+(nextPoint[1]-currentPoint[1])**2);
//             const fractionCovered = Math.sqrt((params.x*2-currentPoint[0])**2+(params.y*2-currentPoint[1])**2);
            
//             p.currentPoint += fractionCovered / totalDist;

//             p.x = p.path[0][0];
//             p.y = p.path[0][1];

//             p.boundPlayer = false;
//             if(params.collidable) p.boundPlayer = true;
//             return p;
//         }
//     },
//     'tornado': {
//         type: [1,[],[23]],
//         spinRadius: 'tornadoStrength' 
//     },
//     'vinette': {
//         type: [1,[],[24]],
//         customMap: (params) => {
//             return {
//                 innerR: params.vc.r,
//                 innerG: params.vc.g,
//                 innerB: params.vc.b,
//                 innerSize: params.ir,
//                 outerR: params.vc.r,
//                 outerG: params.vc.g,
//                 outerB: params.vc.b,
//                 outerSize: params.or,
//                 innerOpacity: 0,
//                 outerOpacity: params.o
//             }
//         }
//     },
//     'tpmove': {
//         type: [1,[0],[12]],
//         customMap: (params) => {
//             const p = {path: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.path.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2,
//                     params.speed * 2 / 1000
//                 ])
//             }
            
//             p.currentPoint = params.currentPoint;
//             p.x = p.path[0][0];
//             p.y = p.path[0][1];
//             p.tpx = params.tpx * 2; p.tpy = params.tpy * 2;
//             return p;
//         }
//     },
//     'movingsafe': {
//         type: [1,[0],[11]],
//         customMap: (params) => {
//             const p = {path: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.path.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2,
//                     params.speed * 2 / 1000
//                 ])
//             }
//             p.currentPoint = params.currentPoint;
//             p.x = p.path[0][0];
//             p.y = p.path[0][1];
//             return p;
//         }
//     },
//     'movingvinette': {
//         type: [1,[0],[24]],
//         customMap: (params) => {
//             const p = {path: [],
//                 innerR: params.vc.r,
//                 innerG: params.vc.g,
//                 innerB: params.vc.b,
//                 innerSize: params.ir,
//                 outerR: params.vc.r,
//                 outerG: params.vc.g,
//                 outerB: params.vc.b,
//                 outerSize: params.or,
//                 innerOpacity: 0,
//                 outerOpacity: params.o
//             };
//             for(let i = 0; i < params.points.length; i++){
//                 p.path.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2,
//                     params.speed * 2 / 1000
//                 ])
//             }
//             p.currentPoint = params.currentPoint;
//             p.x = p.path[0][0];
//             p.y = p.path[0][1];
//             return p;
//         }
//     },
//     'timetrap': {
//         type: [1,[],[17]],
//         customMap: (params) => {
//             //C(1,[],[17],{h:200,w:300,y:700,x:300,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});
//             const p = {timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:params.cdmult};

//             p.timeTrapMaxTime = params.maxTime * 1000;
//             return p;
//         }
//     },
//     'oval': {
//         type: [0,[],[0]],
//         customMap: (params) => {
//             return {r: Math.min(params.radius, params.radius2)*2};
//         }
//     },
//     'lava-oval': {
//         type: [0,[],[1]],
//         customMap: (params) => {
//             return {r: Math.min(params.radius, params.radius2)*2, boundPlayer: true};
//         }
//     },
//     'safe': {
//         type: [1,[],[11]],
//     },
//     'circle-safe': {
//         type: [0,[],[11]],
//         r: 'r'
//     },
//     'circle-vinette': {
//         type: [0,[],[24]],
//         customMap: (params) => {
//             return {
//                 innerR: params.vc.r,
//                 innerG: params.vc.g,
//                 innerB: params.vc.b,
//                 innerSize: params.ir,
//                 outerR: params.vc.r,
//                 outerG: params.vc.g,
//                 outerB: params.vc.b,
//                 outerSize: params.or,
//                 innerOpacity: 0,
//                 outerOpacity: params.o,
//                 r: (params.r ?? params.radius) * 2
//             }
//         }
//     },
//     'circle-coin': {
//         radius: 'r',
//         type: [0,[],[7]],
//         customMap: (params) => {
//             return {
//                 color: '#d5d612',
//                 coinAmount: 1
//             }
//         }
//     },
//     'bounce': {
//         type: [1,[],[2]],
//         customMap: (params) => {
//             return {bounciness: params.effect/3/10, decay: 0.5};
//         }
//     },
//     'rotate-normal': {
//         type: [1,[1],[0]],
//         customMap: (params) => {
//             params.x = params.distToPivot + params.pivotX;
//             params.y = params.pivotY;
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle * 180 / Math.PI,
//                 rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
//             };
//         }
//     },
//     'rotate-lava': {
//         type: [1,[1],[1]],
//         customMap: (params) => {
//             params.x = params.distToPivot + params.pivotX;
//             params.y = params.pivotY;
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle,
//                 rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2,
//                 boundPlayer: params.canCollide
//             };
//         }
//     },
//     'rotatingsafe': {
//         type: [1,[1],[11]],
//         customMap: (params) => {
//             // console.log(params.angle - lastRotAngle);
//             // lastRotAngle = params.angle;
//             // lastRotAngle += Math.PI * 3/2;

//             // 0: params.y += 1, x += 0
//             // 90: params.x -= 1, y += 0

//             // params.angle = 0;

//             // const rotation = params.angle * Math.PI / 180;

//             // {
//             //     "x": 896.5984655296048,
//             //     "y": 1720.8819734868184,
//             //     "w": 25,
//             //     "h": 25,
//             //     "type": "rotatingsafe",
//             //     "angle": -66493.5,
//             //     "rotateSpeed": -90,
//             //     "pivotX": 925,
//             //     "pivotY": 1625,
//             //     "distToPivot": 100,
//             //     "canCollide": true,
//             //     "cullingRadius": 117.67766952966369,
//             //     "unSim": 0,
//             //     "inView": false
//             // },

//             // in eX, position is set like this
//         //     obj.x =
//         //     Math.cos((obj.angle * Math.PI) / 180) *
//         //         obj.distToPivot +
//         //     obj.pivotX;
//         // obj.y =
//         //     Math.sin((obj.angle * Math.PI) / 180) *
//         //         obj.distToPivot +
//         //     obj.pivotY;

//             // and we render like this

//             // ctx.translate(center.x, center.y);
//             // ctx.rotate(degToRad(obstacle.angle));
//             // ctx.rect(
//             //     -obstacle.w / 2,
//             //     -obstacle.h / 2,
//             //     obstacle.w,
//             //     obstacle.h
//             // );

//             // so obj.x, obj.y = centerX. 

//             // let angle = params.angle;

//             // lets try setting angle to 0 and see what happens
//             // params.angle = 45;
//             params.x = params.distToPivot + params.pivotX;
//             params.y = params.pivotY;

//             // they're in a straight line like o - ---

//             // so now, lets rotate the angle around the obs center. We know that the center point of the safe is its center so lets calculate our own distToPivot from that

//             // const middleX = params.x + params.w / 2;
//             // const middleY = params.y + params.h / 2

//             // const realDistToPivot = Math.sqrt((params.x - params.pivotX) ** 2 + (params.y - params.pivotY) ** 2);

//             // // // now we have that, we can set the x and y

//             // // // params.angle = angle;
//             // const x = Math.cos(params.angle * Math.PI / 180) * dist + params.pivotX - params.w / 2;
//             // const y = Math.sin(params.angle * Math.PI / 180) * dist + params.pivotY - params.h / 2;

//             return {
//                 // x:x*2,y:y*2,initialRotation: 0,
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle,
//                 rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
//             };
//         }
//     },
//     'rotatingvinette': {
//         type: [1,[1],[24]],
//         customMap: (params) => {
//             params.x = params.distToPivot + params.pivotX;
//             params.y = params.pivotY;

//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle,
//                 rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2,
                
//                 innerR: params.vc.r,
//                 innerG: params.vc.g,
//                 innerB: params.vc.b,
//                 innerSize: params.ir,
//                 outerR: params.vc.r,
//                 outerG: params.vc.g,
//                 outerB: params.vc.b,
//                 outerSize: params.or,
//                 innerOpacity: 0,
//                 outerOpacity: params.o
            
//             };
//         }
//     },
//     'check': {
//         type: [1,[],[9]],
//         customMap: (params) => {
//             return {
//                 checkpointOffsetX: 0,
//                 checkpointOffsetY: 0
//             }
//         }
//     },
//     'tp': {
//         type: [1,[],[12]],
//         customMap: (params) => {
//             return {
//                 tpx: params.tpx * 2,
//                 tpy: params.tpy * 2
//             }
//         }
//     },
//     'winpad': {
//         type: [1,[],[6]]
//     },
//     'speed': {
//         type: [1,[],[19]],
//         customMap: (params) => {
//             return {
//                 speedChangePermanent: false,
//                 speedMult: params.speedInc
//             }
//         }
//     },
//     'size': {
//         type: [1,[],[18]],
//         customMap: (params) => {
//             return {
//                 sizeChangePermanent: false,
//                 sizeMult: params.size / 24.5
//             }
//         }
//         //C(1,[],[18],{h:200,w:300,y:700,x:300,sizeChangePermanent:false,sizeMult:1.5,});
//     },
//     'snap': {
//         type: [1,[],[16]],
//         customMap: (params) => {
//             return {
//                 snapAngleRotateSpeed: 0,
//                 snapAngle: 0,
//                 snapCooldown: params.snapWait,
//                 snapDistanceY: params.snapDistance,
//                 snapDistanceX: params.snapDistance,
//                 toSnapX: params.snapX,
//                 toSnapY: params.snapY
//             }
//         }
//         // {
//         //     "x": 11050,
//         //     "y": 1550,
//         //     "w": 900,
//         //     "h": 500,
//         //     "type": "snap",
//         //     "snapDistance": 50,
//         //     "snapWait": 0.4,
//         //     "snapX": true,
//         //     "snapY": true,
//         //     "inView": false
//         // },
//     },
//     'coin': {
//         type: [1,[],[7]],
//         customMap: (params) => {
//             return {
//                 color: '#d5d612',
//                 coinAmount: 1
//             }
//         }
//     },
//     'coindoor': {
//         type: [1,[],[8]],
//         customMap: (params) => {
//             return {
//                 coinDoorColor: '#d5d612',
//                 coindoorCoinAmount: params.coins
//             }
//         }
//     },
//     'button': {
//         type: [1,[],[7]],
//         customMap: (params) => {
//             const top = {
//                 "x": 14941.438100925527,
//                 "y": 5495.870128796381
//             };
//             const bottom = {
//                 "x": 18420.158621406357,
//                 "y": 8873.08670452917
//             };
//             const x = params.x * 2;
//             const y = params.y * 2;
//             const inside = x > top.x && x < bottom.x && y > top.y && y < bottom.y;
//             return {
//                 color: inside ? '#00FF00' : '#d6d612',
//                 coinAmount: 1
//             }
//         }
//     },
//     'door': {
//         type: [1,[],[8]],
//         customMap: (params) => {
//             const id = params.id;
//             let coinAmount = 0;
//             for(let i = 0; i < obs.length; i++){
//                 if(obs[i].type === 'button' && obs[i].id === id){
//                     coinAmount++;
//                 }
//             }
//             const top = {
//                 "x": 14941.438100925527,
//                 "y": 5495.870128796381
//             };
//             const bottom = {
//                 "x": 18420.158621406357,
//                 "y": 8873.08670452917
//             };
//             const x = params.x * 2;
//             const y = params.y * 2;
//             const inside = x > top.x && x < bottom.x && y > top.y && y < bottom.y;
//             return {
//                 coinDoorColor: inside ? '#00FF00' : '#d6d612',
//                 coindoorCoinAmount: inside ? 5 : coinAmount
//             }
//         }
//     },
//     'raxis': {
//         type: [1,[],[15]],
//         customMap: (params) => {
//             return {
//                 axisSpeedMultY: params.ry === true ? 0 : 1,
//                 axisSpeedMultX: params.rx === true ? 0 : 1
//             }
//         }
//     },
//     'push': {
//         type: [1,[],[25]],
//         customMap: (params) => {
//             return {
//                 pushAngle: {'right': 180, 'down': 270, 'left': 0, 'right': 90}[params.dir],
//                 maxPushDistance: params.max * 2,
//                 idlePushBackSpeed: params.pushBack / 20,
//                 positiveDirectionOnly: true,
//                 pushConversionRatio: 0.86
//             }
//         }
//     },//C(3,[],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,hex:colourRgb(100,100,100),});
//     'text': {
//         customMap: (params) => {
//             // {
//             //     "x": 300,
//             //     "y": 75,
//             //     "angle": 0,
//             //     "text": "Welcome to the",
//             //     "size": 30,
//             //     "story": false,
//             //     "element": {
//             //         "tWidth": 0,
//             //         "tHeight": 0
//             //     }
//             // },
//             if(params.angle !== 0) {
//                 return {
//                     type: [3,[1],[20]],
//                     fontSize: params.size * 2,
//                     text: params.text,
//                     hex: '#FFFFFF',
//                     pivotX: params.x * 2,
//                     pivotY: params.y * 2,
//                     rotateSpeed: 0,
//                     initialRotation: params.angle,
//                 }
//             }//"C(3,[1],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,pivotY:800,pivotX:450,rotateSpeed:0,initialRotation:45,hex:colourRgb(100,100,100),});"
//             else {
//                 return {
//                     type: [3,[],[20]],
//                     fontSize: params.size * 2,
//                     text: params.text,
//                     hex: '#FFFFFF'
//                 }
//             }
//         }
//     },
//     'platformer': {
//         type: [1,[],[14]],
//         customMap: (params) => {
//             const p = {};
//             if(params.direction === 'right'){
//                 p.platformerAngle = 0
//             } else if(params.direction === 'down'){
//                 p.platformerAngle = 90;
//             } else if(params.direction === 'left'){
//                 p.platformerAngle = 180;
//             } else {
//                 p.platformerAngle = 270;
//             }
//             p.platformerFriction = 0.9;
//             p.platformerAngleRotateSpeed = 0;
//             p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 5 / 16.66;
//             p.jumpForce = params.jumpHeight / 8.2 * 2.32 / 1.2;
//             p.jumpDecay = 0.9525;
//             p.maxJumpCooldown = 20 * 16.6;
//             return p;
//         }
//         // {
//         //     "x": 6600,
//         //     "y": 300,
//         //     "w": 500,
//         //     "h": 350,
//         //     "type": "platformer",
//         //     "force": 1500,
//         //     "dir": {
//         //         "x": 0,
//         //         "y": 1500
//         //     },
//         //     "direction": "down",
//         //     "jumpHeight": 145,
//         //     "maxForce": 1000,
//         //     "variableJumpHeight": false,
//         //     "platformerFriction": 0.8,
//         //     "inView": false
//         // },
//     },
//     'breakable': {
//         type: [1,[],[10]],
//         customMap: (params) => {
//             return {
//                 maxStrength: Math.max(200,params.maxStrength * Math.max(1,params.timer * 1000 / 60)),
//                 regenTime: params.regenTime * 1000 / 15,
//                 healSpeed: 1
//             }
//         }
//     },
//     'ship': {
//         type: [1,[],[27]],
//         customMap: (params) => {
//             return {
//                 changeShipStateTo: params.state,
//                 initialShipAngle: -Math.PI / 2,
//                 shipTurnSpeed: Math.PI / 80 / 20
//             }
//         }
//     },
//     // C(1,[],[10],{h:200,w:300,y:700,x:300,healSpeed:1,regenTime:100,maxStrength:60,});
//     // {
//     //     "x": 2950,
//     //     "y": 2650,
//     //     "w": 200,
//     //     "h": 50,
//     //     "type": "breakable",
//     //     "maxStrength": 40,
//     //     "currentStrength": 40,
//     //     "time": 0,
//     //     "timer": 0,
//     //     "regenTime": 3,
//     //     "inView": false
//     // },
//     'musicchange': {
//         type: [1,[],[26]],
//         customMap: (params) => {
//             return {
//                 musicPath: params.musicPath,
//             }
//         }
//         // C(0,[],[26],{
//         //     x: spawnPosition.x,
//         //     y: spawnPosition.y,
//         //     r: 50,
//         //     musicPath: 'https://www.youtube.com/watch?v=2C4lFUpI_4U'
//         // });
//     }
// }

// var enemyTypeMap = {
//     normal: (params) => {
//         const bounds = {
//             x: params.bound.x * 2,
//             y: params.bound.y * 2,
//             w: params.bound.w * 2,
//             h: params.bound.h * 2
//         };
//         counter++;
//         return `
//         var xv${counter} = ${params.xv/30};
//         var yv${counter} = ${params.yv/30};
//         C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//         e.pos.y += yv${counter};
//         e.pos.x += xv${counter};
//         if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
//             xv${counter} = xv${counter} * -1;
//         }
//         if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
//             yv${counter} = yv${counter} * -1;
//         }
//         },});
//         `
//         // {
//         //     "type": "normal",
//         //     "angle": 5.874603837535309,
//         //     "radius": 16,
//         //     "speed": 85,
//         //     "x": 6898.622849512051,
//         //     "y": 4711.556031428228,
//         //     "renderX": 6898.622849512051,
//         //     "renderY": 4711.556031428228,
//         //     "xv": 78.00325384310767,
//         //     "yv": 33.77117691001763,
//         //     "bound": {
//         //         "x": 6400,
//         //         "y": 4250,
//         //         "w": 600,
//         //         "h": 700
//         //     },
//         //     "isLava": false,
//         //     "inView": false
//         // },
//     },
//     square: (params) => {
//         const bounds = {
//             x: params.bound.x * 2,
//             y: params.bound.y * 2,
//             w: params.bound.w * 2,
//             h: params.bound.h * 2
//         };
//         const size = params.size;
//         counter++;
//         return `
//         var xv${counter} = ${params.xv/42};
//         var yv${counter} = ${params.yv/42};
//         C(1,[3],[1],{w:${size},h:${size},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//         e.pos.y += yv${counter};
//         e.pos.x += xv${counter};
//         if ((e.pos.x) < ${bounds.x} || e.pos.x + ${size} > ${bounds.x + bounds.w}) {
//             xv${counter} = xv${counter} * -1;
//         }
//         if ((e.pos.y) < ${bounds.y} || e.pos.y + ${size} > ${bounds.y + bounds.h}) {
//             yv${counter} = yv${counter} * -1;
//         }
//         },});
//         `
//         // {
//         //     "type": "normal",
//         //     "angle": 5.874603837535309,
//         //     "radius": 16,
//         //     "speed": 85,
//         //     "x": 6898.622849512051,
//         //     "y": 4711.556031428228,
//         //     "renderX": 6898.622849512051,
//         //     "renderY": 4711.556031428228,
//         //     "xv": 78.00325384310767,
//         //     "yv": 33.77117691001763,
//         //     "bound": {
//         //         "x": 6400,
//         //         "y": 4250,
//         //         "w": 600,
//         //         "h": 700
//         //     },
//         //     "isLava": false,
//         //     "inView": false
//         // },
//     },
//     turret: (params) => {
//         // {
//         //     "type": "turret",
//         //     "angle": 3.6232766945442836,
//         //     "shootSpeed": 3.58,
//         //     "timer": 2.2316666666694256,
//         //     "pRadius": 32,
//         //     "pSpeed": 120,
//         //     "projectiles": [
//         //         {
//         //             "x": 4291,
//         //             "y": 3450,
//         //             "angle": 0
//         //         },
//         //         {
//         //             "x": 3862,
//         //             "y": 3450,
//         //             "angle": 0
//         //         }
//         //     ],
//         //     "shootDirections": [
//         //         0
//         //     ],
//         //     "csd": 0,
//         //     "deadProjectiles": [],
//         //     "radius": 32,
//         //     "speed": 0,
//         //     "x": 3700,
//         //     "y": 3450,
//         //     "renderX": 3700,
//         //     "renderY": 3450,
//         //     "xv": 0,
//         //     "yv": 0,
//         //     "bound": {
//         //         "x": 3650,
//         //         "y": 3400,
//         //         "w": 850,
//         //         "h": 100
//         //     },
//         //     "inView": true
//         // },
//         const bounds = {
//             x: params.bound.x * 2,
//             y: params.bound.y * 2,
//             w: params.bound.w * 2,
//             h: params.bound.h * 2
//         };
//         counter++;
//         const shootSpeed = params.shootSpeed * 1000 / 15;
//         const projectileParams = {
//             speed: params.pSpeed / 42,
//             radius: params.pRadius * 2,
//             shootDirections: params.shootDirections,
//         }
//         const c = counter;
//         return `
//         var xv${c} = ${params.xv/42};
//         var yv${c} = ${params.yv/42};
//         var shootDirectionIndex${c} = 0;
//         var timer${c} = ${shootSpeed};
//         C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//         e.pos.y += yv${c};
//         e.pos.x += xv${c};
//         if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
//             xv${c} = xv${c} * -1;
//         }
//         if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
//             yv${c} = yv${c} * -1;
//         }

//         timer${c}--;
//         if(timer${c} < 0){
//             timer${c} = ${shootSpeed};

//             shootDirectionIndex${c}++;
//             const shootDirections = [${projectileParams.shootDirections.toString()}];
//             if(shootDirectionIndex${c} >= shootDirections.length){
//                 shootDirectionIndex${c} = 0;
//             }
//             let dir = shootDirections[shootDirectionIndex${c}];

//             counter++;
//             /*scoped using let*/
//             let xv${counter} = Math.cos(dir) * ${projectileParams.speed};
//             let yv${counter} = Math.sin(dir) * ${projectileParams.speed};
//             C(0,[3],[1],{r:${projectileParams.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{
//             e.pos.y += yv${counter};
//             e.pos.x += xv${counter};
//             /*delete obstacle*/
//             if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
//                 window.tickFns.push(()=>{
//                     for(let i = 0; i < obstacles.length; i++){
//                         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
//                     }
//                     /*for(let key in window.idToObs){
//                         if(window.idToObs[key] === e){delete window.idToObs[key]; break;}
//                     }*/
//                 });
//             }
//             },});
//         }

//         },});
//         `
//     },
//     switch: (params) => {
//         // {
//         //     "type": "switch",
//         //     "angle": 0.6586898029125109,
//         //     "switchTime": 3.2,
//         //     "switchTimer": 2.3083333333306277,
//         //     "currentSwitch": true,
//         //     "radius": 25,
//         //     "speed": 22,
//         //     "x": 2557.5655869230604,
//         //     "y": 4628.602260600484,
//         //     "renderX": 2557.5655869230604,
//         //     "renderY": 4628.602260600484,
//         //     "xv": -17.397486856740482,
//         //     "yv": 13.465788171122483,
//         //     "bound": {
//         //         "x": 2400,
//         //         "y": 4150,
//         //         "w": 350,
//         //         "h": 650
//         //     },
//         //     "inView": false
//         // },
//         const bounds = {
//             x: params.bound.x * 2,
//             y: params.bound.y * 2,
//             w: params.bound.w * 2,
//             h: params.bound.h * 2
//         };
//         counter++;
//         const maxSwitchTime = params.switchTime*1000/16; 
//         return `
//         var xv${counter} = ${params.xv/42*4};
//         var yv${counter} = ${params.yv/42*4};
//         var switchTime${counter} = ${maxSwitchTime*Math.random()*2};
//         var switchState${counter} = true;
//         var pos${counter} = {
//             x: ${params.x*2}, y: ${params.y*2} 
//         }
//         C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//             pos${counter}.y += yv${counter};
//             pos${counter}.x += xv${counter};
//             if ((pos${counter}.x - e.sat.r) < ${bounds.x} || pos${counter}.x + e.sat.r > ${bounds.x + bounds.w}) {
//                 xv${counter} = xv${counter} * -1;
//             }
//             if ((pos${counter}.y - e.sat.r) < ${bounds.y} || pos${counter}.y + e.sat.r > ${bounds.y + bounds.h}) {
//                 yv${counter} = yv${counter} * -1;
//             }

//             if(switchState${counter} === true){
//                 e.pos.x = pos${counter}.x;
//                 e.pos.y = pos${counter}.y;
//             } else {
//                 e.pos.x = -100000;
//             }

//             switchTime${counter}--;
//             if(switchTime${counter} <= 0){
//                 switchTime${counter} = ${params.switchTimer*1000/15};
//                 switchState${counter} = !switchState${counter};
//                 if(switchState${counter} === true){
//                     /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
//                     e.pos.x = pos${counter}.x;
//                     e.pos.y = pos${counter}.y;
//                 }
//             }
//         }});
//         C(0,[3],[0],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//             if(switchState${counter} === true){
//                 e.pos.x = -100000;
//             } else {
//                 e.pos.x = pos${counter}.x;
//                 e.pos.y = pos${counter}.y;
//             }
//         }});
//         `
//         // {
//         //     "type": "normal",
//         //     "angle": 5.874603837535309,
//         //     "radius": 16,
//         //     "speed": 85,
//         //     "x": 6898.622849512051,
//         //     "y": 4711.556031428228,
//         //     "renderX": 6898.622849512051,
//         //     "renderY": 4711.556031428228,
//         //     "xv": 78.00325384310767,
//         //     "yv": 33.77117691001763,
//         //     "bound": {
//         //         "x": 6400,
//         //         "y": 4250,
//         //         "w": 600,
//         //         "h": 700
//         //     },
//         //     "isLava": false,
//         //     "inView": false
//         // },
//     },
//     flashlight: (params) => {
//         if(Math.random() < 0.5) return '';
//         return enemyTypeMap.turret({
//             "type": "turret",
//             "angle": params.angle,
//             "shootSpeed": 1.54,
//             "timer": 0,
//             "pRadius": params.radius * (Math.random()*0.8 + 0.2),
//             "pSpeed": params.speed * (1.65+Math.random()),
//             "projectiles": [],
//             "shootDirections": [
//                 0, Math.PI / 2, Math.PI, Math.PI * 3/2
//             ],
//             "csd": 0,
//             "deadProjectiles": [],
//             "radius": params.radius,
//             "speed": params.speed,
//             "x": params.x,
//             "y": params.y,
//             "renderX": params.renderX,
//             "renderY": params.renderY,
//             "xv": params.xv,
//             "yv": params.yv,
//             "bound": params.bound,
//             "inView": false
//         },)
//     }
// }

// obs.push(...safes, ...texts);


// // {
// //     "x": 850,
// //     "y": 14375,
// //     "w": 1150,
// //     "h": 50,
// //     "type": "vinette",
// //     "ir": 0.02,
// //     "or": 0.06,
// //     "o": 1,
// //     "vc": {
// //         "r": 0,
// //         "g": 0,
// //         "b": 0
// //     },
// //     "inView": false
// // },

// var alreadyLogged = {switchLava: true, color: true};

// var str = '';

// var alreadyLoggedEnemy = {};
// for(let i = 0; i < enemies.length; i++){
//     if(enemyTypeMap[enemies[i].type] !== undefined){
//         str += '\n' + enemyTypeMap[enemies[i].type](enemies[i]);
//     } else if(alreadyLoggedEnemy[enemies[i].type] === undefined){
//         alreadyLoggedEnemy[enemies[i].type] = true;
//         console.log(`no enemy type def for ${enemies[i].type}`);
//     }
// }

// for(let i = 0; i < obs.length; i++){
//     const o = obs[i];
//     const typeDef = typeMap[o.type];

//     if(o.type === 'roundedcorners' || o.type === 'roundedlava'){
//         const circleType = o.type === 'roundedcorners' ? 'circle-normal' : 'circle-lava';
//         for(let i = 0; i < o.circles.length; i++){
//             obs.push({
//                 x: o.circles[i].x,
//                 y: o.circles[i].y,
//                 radius: o.circles[i].radius,
//                 "renderType": "circle",
//                 "inView": false,
//                 type: circleType
//             })
//         }
//         const rectType = o.type === 'roundedcorners' ? 'normal' : 'lava';
//         for(let i = 0; i < o.rects.length; i++){
//             obs.push({
//                 x: o.rects[i].x,
//                 y: o.rects[i].y,
//                 w: o.rects[i].w,
//                 h: o.rects[i].h,
//                 type: rectType
//             })
//         }
//         continue;
//     } else if(o.type === 'color'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         const minX = o.x - 100;
//         const minY = o.y - 100;
//         const maxX = o.x + o.w + 100;
//         const maxY = o.y + o.h + 100;
//         // "type": "color",
//         // "bgColor": "#201813",
//         // "tileColor": "#5c4337",
//         // "inView": false
//         str += `var minX${counter}, minY${counter}, maxX${counter}, maxY${counter};
//         minX${counter} = ${minX};minY${counter} = ${minY};maxX${counter} = ${maxX};maxY${counter} = ${maxY};
//         C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = window.players[window.selfId];
//             if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {
//                 colors.background="${o.tileColor}"; colors.tile="${o.bgColor}";
//             }
//         },});\n`;
//         counter++;
//     } else if(o.type === 'switchlava'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         // {
//         //     "x": 400,
//         //     "y": 1000,
//         //     "w": 150,
//         //     "h": 400,
//         //     "type": "switchlava",
//         //     "onTime": 0.9,
//         //     "offTime": 0.9,
//         //     "state": true,
//         //     "timer": 0.08333333333388027,
//         //     "collidable": false,
//         //     "inView": false
//         // },
//         // let timer = params.timer;
//         // let state = params.state;
//         // let x = params.x * 2;
//         str += `var timer${counter} = ${o.timer}; var state${counter} =${o.state}; var x${counter} = ${o.x}; 
//         C(1,[],[1],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},sf:(e)=>{
//                 timer${counter} -= 1 / 60;
//                 if(timer${counter} < 0){
//                     state${counter} = !state${counter};
//                     if(state${counter} === true){
//                         // on
//                         timer${counter} += ${o.onTime};
//                         e.pos.x = x${counter};
//                     } else {
//                         // off
//                         timer${counter} += ${o.offTime};
//                         e.pos.x = -1E9;
//                     }
//                 }
//             },
//             cr:(e)=>{
//                 ctx.beginPath();
                  
//                 if (state${counter}) {
//                     if (timer${counter} < 0.2 && ${o.onTime} > 0.2) {
//                         ctx.globalAlpha = timer${counter} / 0.2;
//                     }
//                 } else {
//                     ctx.globalAlpha = 0.3;
//                     if (timer${counter} < 0.2 && ${o.offTime} > 0.2) {
//                         ctx.globalAlpha = 0.9 * (1 - timer${counter} / 0.2) + 0.1;
//                     }
//                 }
//                 ctx.fillStyle = ${o.collidable} ? '#c70000' : '#9e0000';
//                 /*if (obstacle.collidable) {
//                      ctx.fillStyle = '#c70000';
//                 }*/ 

//                 ctx.lineWidth = 4;
//                 ctx.strokeStyle = 'black';
//                 ctx.rect(x${counter}, e.pos.y, e.dimensions.x, e.dimensions.y);
//                 ctx.fill();
//                 ctx.stroke();
//                 ctx.closePath();
//                 ctx.globalAlpha = 1;
//             }
//         });\n`;
//         counter++;
//     } else if(o.type === 'block' || o.type === 'trans'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         // 'block': {
//         //     type: [1,[],[20]],
//         //     customMap: (params) => {
//         //         return {hex: params.color, alpha: 1};
//         //     }
//         // },
//             // 'trans': {
//     //     type: [1,[],[20]],
//     //     customMap: (params) => {
//     //         return {hex: '#000000', alpha: params.opaq};
//     //     }
//     // },
//         str += `C(1,[],[20],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
//             cr:(e)=>{
//                 ctx.beginPath();
//                 ctx.lineWidth = 2;
//                 ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.tile" : (o.hex ?? o.color)};
//                 ctx.globalAlpha = ${o.opaq ?? 1};
//                 ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
//                 ctx.fill();
//                 ctx.stroke();
//                 ctx.closePath();
//                 ctx.globalAlpha = 1;
//             }
//         });\n`;
//         counter++;
//         continue;
//     } else if(o.type === 'morphnormal'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         str += `var morphTriggered${o.morphId} = false;
//         C(1,[],[0],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
//             cr:(e)=>{
//                 if(morphTriggered${o.morphId}){
//                     e.pos.x = -1E9;
//                     return;
//                 }
//                 ctx.beginPath();
//                 let [middleX, middleY] = generateTopLeftCoordinates(e);
//                 middleX += e.dimensions.x / 2;
//                 middleY += e.dimensions.y / 2;
//                 ctx.translate(middleX, middleY);
//                 ctx.fillStyle = colors.tile;
//                 for(let i = 0; i < 100; i++){
//                     const t = Math.PI * 2 * i / 100;
//                     const a = Math.sin(window.time / 1000) * 8;

//                     const p = Math.max(Math.abs(Math.cos(t)),Math.abs(Math.sin(t)));
//                     let x = e.dimensions.x/2 *Math.cos(t) / p * (Math.cos(8*t + a) / 8 + 0.9);
//                     let y = e.dimensions.y/2 * Math.sin(t) / p * (Math.sin(8*t + a) / 8 + 0.9);

//                     if(i === 0){
//                         ctx.moveTo(x,y);
//                     } else {
//                         ctx.lineTo(x,y);
//                     }
//                 }
//                 ctx.fill();
//                 ctx.closePath();
//                 ctx.translate(-middleX, -middleY);
//             }
//         });\n`;
//         // {
//         //     "x": 2900,
//         //     "y": 3400,
//         //     "w": 50,
//         //     "h": 50,
//         //     "type": "morphnormal",
//         //     "active": true,
//         //     "morphId": 1,
//         //     "inView": false
//         // },
//         continue;
//     } else if(o.type === 'morphbutton'){
//         // {
//         //     "x": 550,
//         //     "y": 1000,
//         //     "w": 50,
//         //     "h": 50,
//         //     "morphId": 3,
//         //     "type": "morphbutton",
//         //     "active": true,
//         //     "maxTimedObstacles": 0,
//         //     "timedObstacles": 0,
//         //     "inView": false
//         // },
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         str += `var morphTriggered${o.morphId} = false;
//         C(1,[],[5],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
//             cr:(e)=>{
//                 ctx.globalAlpha = 0.8;
//                 if (morphTriggered${o.morphId} === true) {
//                     ctx.globalAlpha = 0.3;
//                 }

//                 ctx.strokeStyle = ctx.fillStyle = 'white';

//                 let [topX, topY] = generateTopLeftCoordinates(e);

//                 ctx.fillRect(topX, topY, e.dimensions.x, e.dimensions.y);
//                 ctx.globalAlpha *= 1 / 0.8;
//                 ctx.strokeRect(topX, topY, e.dimensions.x, e.dimensions.y);


//                 ctx.fillStyle = colors.tile; //'rgb(12, 12, 12)'//"#c4c4c4"//'#0652cc';
//                 ctx.fillRect(
//                     topX + 15,
//                     topY + 15,
//                     e.dimensions.x - 30,
//                     e.dimensions.y - 30
//                 );

//                 ctx.globalAlpha = 1;
//             },
//             ef:(e) => {
//                 morphTriggered${o.morphId} = true;    
//             }
//         });\n`;
//         // {
//         //     "x": 2900,
//         //     "y": 3400,
//         //     "w": 50,
//         //     "h": 50,
//         //     "type": "morphnormal",
//         //     "active": true,
//         //     "morphId": 1,
//         //     "inView": false
//         // },
//         continue;
//     }

//     if(typeDef === undefined) {
//         if(alreadyLogged[o.type] === undefined){
//             alreadyLogged[o.type] = true;
//             console.log('no type def for ' + o.type);
//         }
        
//         continue;
//     }

//     const params = {type: typeDef.type};

//     for(let key in o){
//         if(key === 'type') continue;
//         if(typeDef[key] !== undefined) {
//             params[typeDef[key]] = o[key];// o.r instead of o.radius set to o[key] 
//         } else {
//             params[key] = o[key];
//         }
//     }

//     params.x *= 2;
//     params.y *= 2;
//     if(params.w) params.w *= 2;
//     if(params.h) params.h *= 2;
//     if(params.r !== undefined) params.r *= 2;

//     if(typeDef.customMap !== undefined){
//         const moreParams = typeDef.customMap(o);
//         for(let key in moreParams){
//             params[key] = moreParams[key];
//         }
//     }
    
//     let paramString = `{`;
//     for(let key in params){
//         paramString += `${key}:${JSON.stringify(params[key])},`;
//     }
//     paramString += '}';

//     let typeString = JSON.stringify(params.type);
//     typeString = typeString.slice(1, typeString.length-1);

//     //C(1,[],[0],{h:100,w:1100,y:4300,x:4600,});
//     str += `C(${typeString},${paramString})\n`;
// }

// C(0,[],[5],{y:11850,x:3950,r:35});
// eval(str);