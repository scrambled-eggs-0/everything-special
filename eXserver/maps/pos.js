var counter = 6000;// add 1000 for every new map so color changers dont conflict
// var lastRotAngle = 0;
var obs = [
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
        "y": 5677.5,
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
        "y": 5427.5,
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
        "unSim": 0,
        "inView": true
    },
    {
        "x": 1811.6587419707762,
        "y": 8561.658741970838,
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
        "x": 1663.3412580292259,
        "y": 8413.341258029164,
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
        "y": 233.75,
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
        "angle": 88658,
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
        "inView": true
    },
    {
        "x": 122.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 100,
            "y": 400
        },
        "pointTo": {
            "x": 300,
            "y": 400
        },
        "xv": 150,
        "yv": 0,
        "inView": true
    },
    {
        "x": 122.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 100,
            "y": 500
        },
        "pointTo": {
            "x": 300,
            "y": 500
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 250,
        "y": 475,
        "r": 15,
        "type": "circle-safe",
        "renderType": "circleR",
        "radius": 15,
        "inView": true
    },
    {
        "x": 100,
        "y": 550,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
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
        "angle": 110822.5,
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
        "y": 13.333333333347337,
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
        "y": 13.333333333347337,
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
        "y": 502.5,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 900,
            "y": 550
        },
        "pointTo": {
            "x": 900,
            "y": 375
        },
        "xv": 9.184850993605149e-15,
        "yv": -150,
        "inView": false
    },
    {
        "x": 950,
        "y": 597.5,
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
        "currentPoint": 0,
        "pointOn": {
            "x": 950,
            "y": 550
        },
        "pointTo": {
            "x": 950,
            "y": 725
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 700,
        "y": 450,
        "w": 200,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": true
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
        "y": 822.5,
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
        "y": 802.5,
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
        "y": 795.8333333299736,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 400,
            "y": 875
        },
        "pointTo": {
            "x": 400,
            "y": 750
        },
        "xv": 1.5308084989341916e-14,
        "yv": -250,
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
        "x": 22.5,
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
        "currentPoint": 0,
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
        "x": 177.5,
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
        "currentPoint": 0,
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
        "angle": -132987,
        "rotateSpeed": -180,
        "pivotX": 250,
        "pivotY": 1350,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 103.07764064044152,
        "unSim": 0,
        "inView": true
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
        "timer": 0.08333333333388027,
        "collidable": false,
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
        "x": 459.1666666649868,
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
        "x": 622.5,
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
        "currentPoint": 0,
        "collidable": false,
        "pointOn": {
            "x": 600,
            "y": 1100
        },
        "pointTo": {
            "x": 800,
            "y": 1100
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 777.5,
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
        "currentPoint": 1,
        "collidable": false,
        "pointOn": {
            "x": 800,
            "y": 1200
        },
        "pointTo": {
            "x": 600,
            "y": 1200
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 622.5,
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
        "currentPoint": 0,
        "collidable": false,
        "pointOn": {
            "x": 600,
            "y": 1300
        },
        "pointTo": {
            "x": 800,
            "y": 1300
        },
        "xv": 150,
        "yv": 0,
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
        "angle": 33246.75,
        "rotateSpeed": 45,
        "pivotX": 925,
        "pivotY": 1625,
        "distToPivot": 0,
        "canCollide": false,
        "renderType": "rotating",
        "cullingRadius": 176.7766952966369,
        "unSim": 0,
        "inView": true
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
        "x": 896.5984655296048,
        "y": 1720.8819734868184,
        "w": 25,
        "h": 25,
        "type": "rotatingsafe",
        "angle": -66493.5,
        "rotateSpeed": -90,
        "pivotX": 925,
        "pivotY": 1625,
        "distToPivot": 100,
        "canCollide": true,
        "cullingRadius": 117.67766952966369,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 953.4015344704051,
        "y": 1529.1180265131845,
        "w": 25,
        "h": 25,
        "type": "rotatingsafe",
        "angle": -66313.5,
        "rotateSpeed": -90,
        "pivotX": 925,
        "pivotY": 1625,
        "distToPivot": 100,
        "canCollide": true,
        "cullingRadius": 117.67766952966369,
        "unSim": 0,
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
        "x": 1087.5,
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
        "x": 1058.75,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 1360,
            "y": 1330
        },
        "pointTo": {
            "x": 1030,
            "y": 1330
        },
        "xv": -75,
        "yv": 9.184850993605149e-15,
        "inView": false
    },
    {
        "x": 1116.25,
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
        "x": 1087.5,
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
        "x": 1302.5,
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
        "x": 1068.3333333400528,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 1360,
            "y": 1130
        },
        "pointTo": {
            "x": 1030,
            "y": 1130
        },
        "xv": -100,
        "yv": 1.2246467991473532e-14,
        "inView": false
    },
    {
        "x": 1106.6666666599472,
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
        "x": 1321.6666666599472,
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
        "currentPoint": 0,
        "pointOn": {
            "x": 1030,
            "y": 1030
        },
        "pointTo": {
            "x": 1360,
            "y": 1030
        },
        "xv": 100,
        "yv": 0,
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
        "x": 1344.4312365878336,
        "y": 794.4312365878336,
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
        "currentPoint": 1,
        "collidable": false,
        "pointOn": {
            "x": 1350,
            "y": 800
        },
        "pointTo": {
            "x": 1150,
            "y": 600
        },
        "xv": -176.77669529663686,
        "yv": -176.7766952966369,
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
        "angle": -66493.5,
        "rotateSpeed": -90,
        "pivotX": 1375,
        "pivotY": 300,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 125.62344526401112,
        "unSim": 0,
        "inView": true
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
        "x": 1627.5,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 1675,
            "y": 525
        },
        "pointTo": {
            "x": 1500,
            "y": 525
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
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
        "timer": 0.38333333333333364,
        "collidable": false,
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
        "y": 1080.8333333341866,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1750,
            "y": 850
        },
        "pointTo": {
            "x": 1750,
            "y": 1150
        },
        "xv": 3.980102097228898e-14,
        "yv": 650,
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
        "x": 1532.0833333400528,
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
        "y": 1223.3333333400528,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 1650,
            "y": 1350
        },
        "pointTo": {
            "x": 1650,
            "y": 1150
        },
        "xv": 2.4492935982947064e-14,
        "yv": -400,
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
        "y": 1373.3333333400528,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 1750,
            "y": 1500
        },
        "pointTo": {
            "x": 1750,
            "y": 1300
        },
        "xv": 2.4492935982947064e-14,
        "yv": -400,
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
        "pusherId": 0.11302054786367344,
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
        "x": 1922.5,
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
        "x": 1902.5,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 2125,
        "pivotY": 1200,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 76.03453162872775,
        "unSim": 0,
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
        "x": 1835.8333333400528,
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
        "x": 1835.8333333400528,
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
        "state": false,
        "timer": 0.18333333333226673,
        "collidable": false,
        "inView": false
    },
    {
        "x": 1325,
        "y": 1625,
        "w": 100,
        "h": 25,
        "type": "rotate-lava",
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 1325,
        "pivotY": 1625,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 51.53882032022076,
        "unSim": 0,
        "inView": true
    },
    {
        "x": 1150,
        "y": 1572.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1150,
            "y": 1550
        },
        "pointTo": {
            "x": 1150,
            "y": 1650
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
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
        "angle": 88658,
        "rotateSpeed": 120,
        "pivotX": 2250,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 178.97276329095442,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2250,
        "y": 2050,
        "w": 350,
        "h": 75,
        "type": "rotatingsafe",
        "angle": 88748,
        "rotateSpeed": 120,
        "pivotX": 2250,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 178.97276329095442,
        "unSim": 0,
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
        "y": 2447.5,
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 2350,
        "pivotY": 2950,
        "distToPivot": 0,
        "canCollide": false,
        "renderType": "rotating",
        "cullingRadius": 201.55644370746373,
        "unSim": 0,
        "inView": true
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
        "x": 2677.5,
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
        "x": 2522.5,
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
        "x": 2422.5,
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 2400,
        "pivotY": 3475,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 101.51970252123476,
        "unSim": 0,
        "inView": true
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
        "y": 3365.4166666801057,
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
        "y": 3352.5,
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
        "y": 3260,
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
        "x": 1579.1666666599472,
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
        "x": 1895.8333333400528,
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
        "x": 1579.1666666599472,
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
        "x": 1895.8333333400528,
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
        "angle": -118210.66666652271,
        "rotateSpeed": -160,
        "pivotX": 2175,
        "pivotY": 3775,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 0,
        "inView": true
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
        "angle": 118300.66666652239,
        "rotateSpeed": 160,
        "pivotX": 2375,
        "pivotY": 3775,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 127.47548783981962,
        "unSim": 0,
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
        "x": 2117.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2050,
            "y": 4000
        },
        "pointTo": {
            "x": 2650,
            "y": 4000
        },
        "xv": 450,
        "yv": 0,
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
        "x": 1790.5863898002738,
        "y": 4830.438834441875,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 33246.75,
        "rotateSpeed": 45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 350,
        "canCollide": true,
        "cullingRadius": 420.71067811865476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 1719.5611655581124,
        "y": 4340.586389800291,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 33336.75,
        "rotateSpeed": 45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 350,
        "canCollide": true,
        "cullingRadius": 420.71067811865476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2209.4136101997233,
        "y": 4269.561165558123,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 33426.75,
        "rotateSpeed": 45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 350,
        "canCollide": true,
        "cullingRadius": 420.71067811865476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2280.4388344418658,
        "y": 4759.413610199737,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 33516.75,
        "rotateSpeed": 45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 350,
        "canCollide": true,
        "cullingRadius": 420.71067811865476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 1850.4188498573383,
        "y": 4349.686546827233,
        "w": 100,
        "h": 75,
        "type": "rotatingsafe",
        "angle": -33246.75,
        "rotateSpeed": -45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 250,
        "canCollide": true,
        "cullingRadius": 312.5,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2248.267114238734,
        "y": 4520.615650635562,
        "w": 100,
        "h": 75,
        "type": "rotatingsafe",
        "angle": -33126.75,
        "rotateSpeed": -45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 250,
        "canCollide": true,
        "cullingRadius": 312.5,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 1901.3140359039242,
        "y": 4779.697802537221,
        "w": 100,
        "h": 75,
        "type": "rotatingsafe",
        "angle": -33006.75,
        "rotateSpeed": -45,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 250,
        "canCollide": true,
        "cullingRadius": 312.5,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 1957.397698294407,
        "y": 4406.177039769773,
        "w": 100,
        "h": 50,
        "type": "rotatingsafe",
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 150,
        "canCollide": true,
        "cullingRadius": 205.90169943749476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2042.6023017056107,
        "y": 4693.822960230223,
        "w": 100,
        "h": 50,
        "type": "rotatingsafe",
        "angle": 66673.5,
        "rotateSpeed": 90,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 150,
        "canCollide": true,
        "cullingRadius": 205.90169943749476,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2000,
        "y": 4550,
        "w": 150,
        "h": 50,
        "type": "rotatingsafe",
        "angle": -88478,
        "rotateSpeed": -120,
        "pivotX": 2000,
        "pivotY": 4550,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 79.05694150420949,
        "unSim": 0,
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
        "angle": -66493.5,
        "rotateSpeed": -90,
        "pivotX": 925,
        "pivotY": 4175,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 152.97058540778355,
        "unSim": 0,
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
        "timer": 0.5333333333341814,
        "collidable": false,
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 900,
        "pivotY": 4575,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 17.67766952966369,
        "unSim": 0,
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 1300,
        "pivotY": 4375,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 51.53882032022076,
        "unSim": 0,
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
        "y": 4877.5,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 500,
        "pivotY": 5100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 150.5199322349037,
        "unSim": 0,
        "inView": true
    },
    {
        "x": 348.3333333342063,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 137.5,
            "y": 5375
        },
        "pointTo": {
            "x": 512.5,
            "y": 5375
        },
        "xv": 350,
        "yv": 0,
        "inView": false
    },
    {
        "x": 500,
        "y": 5100,
        "w": 300,
        "h": 25,
        "type": "rotate-lava",
        "angle": 66583.5,
        "rotateSpeed": 90,
        "pivotX": 500,
        "pivotY": 5100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 150.5199322349037,
        "unSim": 0,
        "inView": true
    },
    {
        "x": 149.35953184655315,
        "y": 5584.64331579819,
        "w": 50,
        "h": 50,
        "type": "rotate-lava",
        "angle": -132987,
        "rotateSpeed": -180,
        "pivotX": 250,
        "pivotY": 5650,
        "distToPivot": 120,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 155.35533905932738,
        "unSim": 0,
        "inView": true
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
        "x": 350.640468153455,
        "y": 5715.356684201797,
        "w": 50,
        "h": 50,
        "type": "rotate-lava",
        "angle": -132807,
        "rotateSpeed": -180,
        "pivotX": 250,
        "pivotY": 5650,
        "distToPivot": 120,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 155.35533905932738,
        "unSim": 0,
        "inView": true
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
        "y": 5545.833333350127,
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
        "y": 5554.166666649873,
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
        "x": 2172.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2150,
            "y": 5550
        },
        "pointTo": {
            "x": 2350,
            "y": 5550
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 2405,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2450,
            "y": 5450
        },
        "pointTo": {
            "x": 2050,
            "y": 5450
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
        "inView": false
    },
    {
        "x": 2017.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1950,
            "y": 5350
        },
        "pointTo": {
            "x": 2550,
            "y": 5350
        },
        "xv": 450,
        "yv": 0,
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
        "angle": -132987,
        "rotateSpeed": -180,
        "pivotX": 2700,
        "pivotY": 5200,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 100.77822185373186,
        "unSim": 0,
        "inView": true
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 1900,
        "pivotY": 5200,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 100.77822185373186,
        "unSim": 0,
        "inView": true
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
        "y": 5147.916666639789,
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
        "y": 5147.916666639789,
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
        "y": 5204.166666639789,
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
        "x": 1992.9166666642461,
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
        "currentPoint": 0,
        "pointOn": {
            "x": 1950,
            "y": 5900
        },
        "pointTo": {
            "x": 2075,
            "y": 5900
        },
        "xv": 175,
        "yv": 0,
        "inView": false
    },
    {
        "x": 1650,
        "y": 6045.833333360211,
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
        "x": 1697.5,
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
        "x": 1775,
        "y": 5720.833333350127,
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
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 1775,
            "y": 5775
        },
        "pointTo": {
            "x": 1775,
            "y": 5625
        },
        "xv": 1.5308084989341916e-14,
        "yv": -250,
        "inView": false
    },
    {
        "x": 1625,
        "y": 5679.166666649873,
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
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 1625,
            "y": 5625
        },
        "pointTo": {
            "x": 1625,
            "y": 5775
        },
        "xv": 1.5308084989341916e-14,
        "yv": 250,
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
        "y": 5445.833333360211,
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
        "y": 5691.416666639789,
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
        "y": 5658.583333360211,
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
        "x": 2802.5,
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
        "x": 2712.5,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 2850,
        "pivotY": 5525,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 139.75424859373686,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2850,
        "y": 5525,
        "w": 50,
        "h": 275,
        "type": "rotatingsafe",
        "angle": 66583.5,
        "rotateSpeed": 90,
        "pivotX": 2850,
        "pivotY": 5525,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 139.75424859373686,
        "unSim": 0,
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
        "y": 6065,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 2287.5,
            "y": 6112.5
        },
        "pointTo": {
            "x": 2287.5,
            "y": 6037.5
        },
        "xv": 9.184850993605149e-15,
        "yv": -150,
        "inView": false
    },
    {
        "x": 2287.5,
        "y": 6240,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 2287.5,
            "y": 6287.5
        },
        "pointTo": {
            "x": 2287.5,
            "y": 6212.5
        },
        "xv": 9.184850993605149e-15,
        "yv": -150,
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
        "angle": 132987,
        "rotateSpeed": 180,
        "pivotX": 2525,
        "pivotY": 6500,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 50.99019513592785,
        "unSim": 0,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 2775,
        "pivotY": 6250,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 152.0690632574555,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 2775,
        "y": 6250,
        "w": 300,
        "h": 50,
        "type": "rotatingsafe",
        "angle": 66583.5,
        "rotateSpeed": 90,
        "pivotX": 2775,
        "pivotY": 6250,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 152.0690632574555,
        "unSim": 0,
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
        "x": 1845,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 1750,
            "y": 6425
        },
        "pointTo": {
            "x": 2100,
            "y": 6425
        },
        "xv": 300,
        "yv": 0,
        "inView": false
    },
    {
        "x": 2125,
        "y": 6272.5,
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
        "currentPoint": 0,
        "pointOn": {
            "x": 2125,
            "y": 6225
        },
        "pointTo": {
            "x": 2125,
            "y": 6400
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 975,
        "pivotY": 6475,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 100.77822185373186,
        "unSim": 0,
        "inView": false
    },
    {
        "x": 975,
        "y": 6475,
        "w": 200,
        "h": 25,
        "type": "rotatingsafe",
        "angle": 66583.5,
        "rotateSpeed": 90,
        "pivotX": 975,
        "pivotY": 6475,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 100.77822185373186,
        "unSim": 0,
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
        "angle": 66493.5,
        "rotateSpeed": 90,
        "pivotX": 2950,
        "pivotY": 7800,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 276.69929526473317,
        "unSim": 0,
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
        "x": 2422.5,
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
        "y": 8426.733333371307,
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
        "currentPoint": 0,
        "collidable": false,
        "pointOn": {
            "x": 1050,
            "y": 8150
        },
        "pointTo": {
            "x": 1050,
            "y": 8850
        },
        "xv": 2.914659381970701e-14,
        "yv": 476,
        "inView": false
    },
    {
        "x": 1200,
        "y": 8573.266666628684,
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
        "currentPoint": 0,
        "collidable": false,
        "pointOn": {
            "x": 1200,
            "y": 8850
        },
        "pointTo": {
            "x": 1200,
            "y": 8150
        },
        "xv": 2.914659381970701e-14,
        "yv": -476,
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
        "y": 8330,
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
        "x": 1138.9500000080634,
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
        "currentPoint": 0,
        "pointOn": {
            "x": 1050,
            "y": 8625
        },
        "pointTo": {
            "x": 1275,
            "y": 8625
        },
        "xv": 153,
        "yv": 0,
        "inView": false
    },
    {
        "x": 1186.0499999919366,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 1275,
            "y": 8275
        },
        "pointTo": {
            "x": 1050,
            "y": 8275
        },
        "xv": -153,
        "yv": 1.8737096026954503e-14,
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
        "angle": 88658,
        "rotateSpeed": 120,
        "pivotX": 580,
        "pivotY": 8550,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 65.19202405202648,
        "unSim": 0,
        "inView": true
    },
    {
        "x": 512.5,
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
        "x": 407.5,
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
        "angle": 110822.5,
        "rotateSpeed": 150,
        "pivotX": 200,
        "pivotY": 8760,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 80.15609770940699,
        "unSim": 0,
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
        "x": 709.3315663753498,
        "y": 8364.144417903475,
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
        "x": 824.5330763372402,
        "y": 8265.199421758827,
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
        "y": 8670,
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
        "x": 2620,
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
        "y": 9530,
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
        "x": 3480,
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
        "x": 2720,
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
        "y": 9480,
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
        "x": 3430,
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
        "x": 2675,
        "y": 8770,
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
        "x": 3020,
        "y": 9325,
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
        "currentPoint": 1,
        "pointOn": {
            "x": 2925,
            "y": 9325
        },
        "pointTo": {
            "x": 3275,
            "y": 9325
        },
        "xv": 300,
        "yv": 0,
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
        "w": 175,
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
        "y": 9825,
        "w": 50,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2925,
        "y": 9897.5,
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
        "y": 9802.5,
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
        "y": 9250,
        "w": 75,
        "h": 100,
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
        "y": 9000,
        "w": 150,
        "h": 150,
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
        "y": 8475,
        "w": 50,
        "h": 175,
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
        "y": 8362.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3225,
            "y": 8340
        },
        "pointTo": {
            "x": 3225,
            "y": 8440
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 3225,
        "y": 8527.5,
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
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3225,
            "y": 8505
        },
        "pointTo": {
            "x": 3225,
            "y": 8605
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
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
        "y": 9560,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3075,
        "y": 9485,
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
        "y": 9600,
        "w": 50,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3175,
        "y": 9525,
        "w": 50,
        "h": 75,
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
        "x": 3440,
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
        "x": 3560,
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
        "w": 125,
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
        "x": 2890,
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
        "y": 9385,
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
        "x": 3440,
        "y": 9500,
        "w": 125,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3180,
        "y": 8975,
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
        "currentPoint": 3,
        "pointOn": {
            "x": 3275,
            "y": 8975
        },
        "pointTo": {
            "x": 2925,
            "y": 8975
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
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
        "angle": 88748,
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
        "x": 2327.5,
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
    }
]
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
            p.conveyorForce = params.force / 10000 * 7.08;
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
                r: (params.r ?? params.radius) * 2
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
            return {bounciness: params.effect/3, decay: 0.5};
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
            p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6;
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
    'ship': {
        type: [1,[],[27]],
        customMap: (params) => {
            return {
                changeShipStateTo: params.state,
                initialShipAngle: -Math.PI / 2,
                shipTurnSpeed: Math.PI / 80
            }
        }
    }
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

var enemies = [
    {
        "type": "normal",
        "angle": 4.18098634432203,
        "radius": 18,
        "speed": 75,
        "x": 1856.0022372066496,
        "y": 8410.26736757438,
        "renderX": 1856.0022372066496,
        "renderY": 8410.26736757438,
        "xv": 38.005728587267335,
        "yv": 64.6572857035537,
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
        "angle": 5.002224244357532,
        "radius": 18,
        "speed": 75,
        "x": 2068.376108379476,
        "y": 8494.993687874845,
        "renderX": 2068.376108379476,
        "renderY": 8494.993687874845,
        "xv": -21.434577295227736,
        "yv": 71.87182268577101,
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
        "angle": 4.048890880334231,
        "radius": 18,
        "speed": 75,
        "x": 1865.4810175148834,
        "y": 8527.731101608297,
        "renderX": 1865.4810175148834,
        "renderY": 8527.731101608297,
        "xv": -46.19074252060909,
        "yv": -59.08819937512731,
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
        "angle": 2.6213927636289642,
        "radius": 18,
        "speed": 75,
        "x": 1459.5258919276162,
        "y": 8444.31005095818,
        "renderX": 1459.5258919276162,
        "renderY": 8444.31005095818,
        "xv": -65.07898807422983,
        "yv": -37.27901971933076,
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
        "angle": 4.050256254796846,
        "radius": 18,
        "speed": 75,
        "x": 1976.3738338986286,
        "y": 8271.943457258307,
        "renderX": 1976.3738338986286,
        "renderY": 8271.943457258307,
        "xv": 46.11002197172789,
        "yv": 59.15121193827538,
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
        "angle": 3.839695630295975,
        "radius": 18,
        "speed": 75,
        "x": 1532.1408698945356,
        "y": 8800.112197443097,
        "renderX": 1532.1408698945356,
        "renderY": 8800.112197443097,
        "xv": -57.45471797198265,
        "yv": 48.20742041179899,
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
        "angle": 5.237196130756915,
        "radius": 18,
        "speed": 75,
        "x": 1690.3524561521742,
        "y": 8397.891402029009,
        "renderX": 1690.3524561521742,
        "renderY": 8397.891402029009,
        "xv": -37.5784588465863,
        "yv": 64.90654382044555,
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
        "angle": 2.0600816925707717,
        "radius": 18,
        "speed": 75,
        "x": 2069.2407715722884,
        "y": 8731.269568193757,
        "renderX": 2069.2407715722884,
        "renderY": 8731.269568193757,
        "xv": -35.24964170941439,
        "yv": 66.20017189825049,
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
        "angle": 0.02403825872326112,
        "radius": 18,
        "speed": 75,
        "x": 2063.450823836208,
        "y": 8580.906640393798,
        "renderX": 2063.450823836208,
        "renderY": 8580.906640393798,
        "xv": -74.9783321228151,
        "yv": 1.8026957815544689,
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
        "angle": 3.678106448233562,
        "radius": 24,
        "speed": 75,
        "x": 1478.9173354628379,
        "y": 8781.228656623407,
        "renderX": 1478.9173354628379,
        "renderY": 8781.228656623407,
        "xv": -64.46218869377596,
        "yv": -38.33570436040042,
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
        "angle": 0.13034071931420596,
        "radius": 24,
        "speed": 75,
        "x": 1977.7813493541412,
        "y": 8451.050401397824,
        "renderX": 1977.7813493541412,
        "renderY": 8451.050401397824,
        "xv": -74.36382504783262,
        "yv": 9.747898453273972,
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
        "angle": 4.95265302719848,
        "radius": 24,
        "speed": 75,
        "x": 1716.7177751204454,
        "y": 8277.872835902093,
        "renderX": 1716.7177751204454,
        "renderY": 8277.872835902093,
        "xv": -17.846932262634596,
        "yv": 72.84563822778226,
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
        "angle": 2.7220484846884188,
        "radius": 24,
        "speed": 75,
        "x": 1576.729332988953,
        "y": 8180.112098598234,
        "renderX": 1576.729332988953,
        "renderY": 8180.112098598234,
        "xv": -68.49560365045865,
        "yv": -30.550814728240493,
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
        "angle": 3.4042493956861795,
        "radius": 24,
        "speed": 75,
        "x": 1622.232068673768,
        "y": 8291.509107322861,
        "renderX": 1622.232068673768,
        "renderY": 8291.509107322861,
        "xv": -72.42776787680802,
        "yv": 19.473531790181692,
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
        "angle": 4.447079755651774,
        "radius": 24,
        "speed": 75,
        "x": 1503.612694345755,
        "y": 8284.388478009872,
        "renderX": 1503.612694345755,
        "renderY": 8284.388478009872,
        "xv": 19.665576457028955,
        "yv": 72.37585994385661,
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
        "angle": 3.061083028746892,
        "radius": 12,
        "speed": 150,
        "x": 2119.3379396979103,
        "y": 8884.415097900583,
        "renderX": 2119.3379396979103,
        "renderY": 8884.415097900583,
        "xv": 149.51412755214176,
        "yv": -12.063401772381063,
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
        "angle": 5.3139598860287265,
        "radius": 12,
        "speed": 150,
        "x": 1456.0284494686196,
        "y": 8435.45423301381,
        "renderX": 1456.0284494686196,
        "renderY": 8435.45423301381,
        "xv": -84.89074508113877,
        "yv": 123.66713953014809,
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
        "angle": 3.5183723409526424,
        "radius": 12,
        "speed": 150,
        "x": 2065.6316956936626,
        "y": 8522.34716616932,
        "renderX": 2065.6316956936626,
        "renderY": 8522.34716616932,
        "xv": 139.47814471095472,
        "yv": -55.18919412339676,
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
        "angle": 1.139434353393338,
        "radius": 12,
        "speed": 150,
        "x": 2082.6846197796917,
        "y": 8641.901901259673,
        "renderX": 2082.6846197796917,
        "renderY": 8641.901901259673,
        "xv": 62.71626038681678,
        "yv": -136.25957097794267,
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
        "angle": 1.5007945312645157,
        "radius": 12,
        "speed": 150,
        "x": 2043.8168151033813,
        "y": 8285.512825856096,
        "renderX": 2043.8168151033813,
        "renderY": 8285.512825856096,
        "xv": 10.491695770582128,
        "yv": -149.63263120007463,
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
        "angle": 1.4751862266272124,
        "radius": 12,
        "speed": 150,
        "x": 2052.5453635374993,
        "y": 8244.044138969271,
        "renderX": 2052.5453635374993,
        "renderY": 8244.044138969271,
        "xv": 14.319675015525759,
        "yv": 149.31492526686583,
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
        "angle": 0.8962519831555786,
        "radius": 12,
        "speed": 150,
        "x": 1468.4213747479575,
        "y": 8571.772200560454,
        "renderX": 1468.4213747479575,
        "renderY": 8571.772200560454,
        "xv": -93.68122766706878,
        "yv": -117.14874127702281,
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
        "angle": 1.1090726241397952,
        "radius": 12,
        "speed": 150,
        "x": 1864.157615646581,
        "y": 8286.166452685726,
        "renderX": 1864.157615646581,
        "renderY": 8286.166452685726,
        "xv": -66.82379621273165,
        "yv": -134.2928898330783,
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
        "angle": 3.8612144490008165,
        "radius": 12,
        "speed": 150,
        "x": 2038.1205263423526,
        "y": 8788.338524803052,
        "renderX": 2038.1205263423526,
        "renderY": 8788.338524803052,
        "xv": -112.80825865126945,
        "yv": 98.86504326640579,
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
        "angle": 2.3949458415173512,
        "radius": 12,
        "speed": 150,
        "x": 112.21043739793606,
        "y": 714.3870240267669,
        "renderX": 112.21043739793606,
        "renderY": 714.3870240267669,
        "xv": -110.09556209226966,
        "yv": 101.87721633214758,
        "bound": {
            "x": 100,
            "y": 600,
            "w": 300,
            "h": 300
        },
        "isLava": false,
        "inView": true
    },
    {
        "type": "normal",
        "angle": 1.8686177558635015,
        "radius": 12,
        "speed": 150,
        "x": 333.28182094912273,
        "y": 633.7674350580157,
        "renderX": 333.28182094912273,
        "renderY": 633.7674350580157,
        "xv": -44.01573580624304,
        "yv": 143.39670498806802,
        "bound": {
            "x": 100,
            "y": 600,
            "w": 300,
            "h": 300
        },
        "isLava": false,
        "inView": true
    },
    {
        "type": "normal",
        "angle": 5.320245708551325,
        "radius": 12,
        "speed": 150,
        "x": 278.5849141938176,
        "y": 847.2087633532071,
        "renderX": 278.5849141938176,
        "renderY": 847.2087633532071,
        "xv": 85.66641257549742,
        "yv": 123.13109175364546,
        "bound": {
            "x": 100,
            "y": 600,
            "w": 300,
            "h": 300
        },
        "isLava": false,
        "inView": true
    },
    {
        "type": "normal",
        "angle": 4.408028427964355,
        "radius": 12,
        "speed": 150,
        "x": 266.387928780679,
        "y": 862.0370839365113,
        "renderX": 266.387928780679,
        "renderY": 862.0370839365113,
        "xv": -44.952476809757925,
        "yv": 143.10581689319332,
        "bound": {
            "x": 100,
            "y": 600,
            "w": 300,
            "h": 300
        },
        "isLava": false,
        "inView": true
    }
]

var safes = [
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
        "y": 145,
        "w": 100,
        "h": 10,
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
        "w": 450,
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
        "x": 680,
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
        "x": 620,
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
        "y": 9087.5,
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
        "x": 2112.5,
        "y": 9062.5,
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
    }
].map(p => {
    p.type = "safe";
    return p;
});

var texts = [
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
    }
].map(p => {
    p.type = "text";
    return p;
});

obs.push(...safes, ...texts);

var a = obs.splice(86,1);
obs.unshift(...a);

var len = obs.length;
for(let i = 0; i < len; i++){
    if(obs[i].type.includes('safe')){
        obs.push({
            ...obs[i],
            type: obs[i].type.replaceAll('safe', 'vinette'),
            "ir": 0.1,
            "or": 0.6,
            "o": 1,
            "vc": {
                "r": 255,
                "g": 255,
                "b": 255
            },
            // window.colors.vignette.inner = {size:0.1,r:0,g:0,b:0,opacity:0};
            // window.colors.vignette.outer = {size:0.6,r:0,g:0,b:0,opacity:1};
        })
    }
}
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

var alreadyLogged = {switchLava: true, color: true};

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
                timer${counter} -= dt / 1000;
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
                ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.tile" : (o.hex ?? o.color)};
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
    } else if(o.type === 'morphnormal'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        str += `var morphTriggered${o.morphId} = false;
        C(1,[],[0],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
            cr:(e)=>{
                if(morphTriggered${o.morphId}){
                    e.pos.x = -1E9;
                    return;
                }
                ctx.beginPath();
                let [middleX, middleY] = generateTopLeftCoordinates(e);
                middleX += e.dimensions.x / 2;
                middleY += e.dimensions.y / 2;
                ctx.translate(middleX, middleY);
                ctx.fillStyle = colors.tile;
                for(let i = 0; i < 100; i++){
                    const t = Math.PI * 2 * i / 100;
                    const a = Math.sin(window.time / 1000) * 8;

                    const p = Math.max(Math.abs(Math.cos(t)),Math.abs(Math.sin(t)));
                    let x = e.dimensions.x/2 *Math.cos(t) / p * (Math.cos(8*t + a) / 8 + 0.9);
                    let y = e.dimensions.y/2 * Math.sin(t) / p * (Math.sin(8*t + a) / 8 + 0.9);

                    if(i === 0){
                        ctx.moveTo(x,y);
                    } else {
                        ctx.lineTo(x,y);
                    }
                }
                ctx.fill();
                ctx.closePath();
                ctx.translate(-middleX, -middleY);
            }
        });\n`;
        // {
        //     "x": 2900,
        //     "y": 3400,
        //     "w": 50,
        //     "h": 50,
        //     "type": "morphnormal",
        //     "active": true,
        //     "morphId": 1,
        //     "inView": false
        // },
        continue;
    } else if(o.type === 'morphbutton'){
        // {
        //     "x": 550,
        //     "y": 1000,
        //     "w": 50,
        //     "h": 50,
        //     "morphId": 3,
        //     "type": "morphbutton",
        //     "active": true,
        //     "maxTimedObstacles": 0,
        //     "timedObstacles": 0,
        //     "inView": false
        // },
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        str += `var morphTriggered${o.morphId} = false;
        C(1,[],[5],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (morphTriggered${o.morphId} === true) {
                    ctx.globalAlpha = 0.3;
                }

                ctx.strokeStyle = ctx.fillStyle = 'white';

                let [topX, topY] = generateTopLeftCoordinates(e);

                ctx.fillRect(topX, topY, e.dimensions.x, e.dimensions.y);
                ctx.globalAlpha *= 1 / 0.8;
                ctx.strokeRect(topX, topY, e.dimensions.x, e.dimensions.y);


                ctx.fillStyle = colors.tile; //'rgb(12, 12, 12)'//"#c4c4c4"//'#0652cc';
                ctx.fillRect(
                    topX + 15,
                    topY + 15,
                    e.dimensions.x - 30,
                    e.dimensions.y - 30
                );

                ctx.globalAlpha = 1;
            },
            ef:(e) => {
                morphTriggered${o.morphId} = true;    
            }
        });\n`;
        // {
        //     "x": 2900,
        //     "y": 3400,
        //     "w": 50,
        //     "h": 50,
        //     "type": "morphnormal",
        //     "active": true,
        //     "morphId": 1,
        //     "inView": false
        // },
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

C(1,[],[0],{h:100,w:100,y:11900,x:3900});
eval(str);

mapDimensions.x=8000;
mapDimensions.y=20000;

spawnPosition.x=100;
spawnPosition.y=100;
window.respawnPlayer();
colors.background='#141f52'; colors.tile='#414381';