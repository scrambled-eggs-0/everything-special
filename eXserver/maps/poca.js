var counter = 5000;// add 1000 for every new map so color changers dont conflict
var flashLava = false;
var lavaType = flashLava === true ? [0,1] : [1];
var obs = [
    {
        "x": 4300,
        "y": 1150,
        "w": 50,
        "h": 50,
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
        "y": 950,
        "w": 1100,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2400,
        "y": 2550,
        "w": 800,
        "h": 600,
        "type": "platformer",
        "force": 2450,
        "dir": {
            "x": 0,
            "y": 2450
        },
        "direction": "down",
        "jumpHeight": 128,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 2400,
        "y": 2550,
        "w": 800,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 8,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2400,
        "y": 2550,
        "w": 800,
        "h": 50,
        "type": "tp",
        "tpx": 450,
        "tpy": 5100,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3002.5,
        "y": 2550,
        "w": 350,
        "h": 600,
        "type": "lavamove",
        "points": [
            [
                2900,
                2550
            ],
            [
                3150,
                2550
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 3150,
            "y": 2550
        },
        "pointTo": {
            "x": 2900,
            "y": 2550
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 2252.5,
        "y": 2550,
        "w": 300,
        "h": 600,
        "type": "lavamove",
        "points": [
            [
                2150,
                2550
            ],
            [
                2400,
                2550
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2400,
            "y": 2550
        },
        "pointTo": {
            "x": 2150,
            "y": 2550
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 50,
        "y": 1000,
        "w": 3250,
        "h": 800,
        "type": "grav",
        "force": 2875,
        "dir": {
            "x": -2875,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 50,
        "y": 1000,
        "w": 3250,
        "h": 800,
        "type": "raxis",
        "rx": true,
        "ry": false,
        "inView": false
    },
    {
        "x": 10950,
        "y": 3700,
        "w": 1000,
        "h": 2300,
        "type": "platformer",
        "force": 2800,
        "dir": {
            "x": 0,
            "y": 2800
        },
        "direction": "down",
        "jumpHeight": 200,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    // {
    //     "x": 11275,
    //     "y": 3700,
    //     "w": 450,
    //     "h": 50,
    //     "type": "door",
    //     "id": -100000000000,
    //     "active": false,
    //     "inView": false
    // },
    {
        "x": 7600,
        "y": 1600,
        "w": 400,
        "h": 400,
        "type": "button",
        "id": -100000,
        "active": true,
        "inView": false
    },
    {
        "x": 9150,
        "y": 0,
        "w": 2800,
        "h": 600,
        "type": "raxis",
        "rx": true,
        "ry": false,
        "inView": false
    },
    {
        "x": 9150,
        "y": 0,
        "w": 2800,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 15,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 9650,
        "y": 200,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9150,
        "y": 0,
        "w": 500,
        "h": 600,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10250,
        "y": 0,
        "w": 1750,
        "h": 600,
        "type": "grav",
        "force": 5200,
        "dir": {
            "x": 5200,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 0,
        "y": 2550,
        "w": 900,
        "h": 2100,
        "type": "grav",
        "force": 3376.5,
        "dir": {
            "x": 0,
            "y": 3376.5
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 375,
        "y": 2600,
        "w": 100,
        "h": 100,
        "type": "breakable",
        "maxStrength": 30,
        "currentStrength": 30,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 11950,
        "y": 150,
        "w": 50,
        "h": 300,
        "type": "tp",
        "tpx": 8350,
        "tpy": 3600,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 10150,
        "y": 250,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9750,
        "y": 0,
        "w": 400,
        "h": 200,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9650,
        "y": 150,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9650,
        "y": 400,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9950,
        "y": 200,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9750,
        "y": 400,
        "w": 400,
        "h": 200,
        "type": "grav",
        "force": 3800,
        "dir": {
            "x": 3800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9550,
        "y": 1650,
        "w": 100,
        "h": 300,
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
        "x": 9250,
        "y": 1550,
        "w": 100,
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
        "x": 9550,
        "y": 1650,
        "w": 100,
        "h": 300,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9250,
        "y": 1550,
        "w": 100,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10950,
        "y": 1550,
        "w": 1000,
        "h": 500,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7550,
        "y": 1550,
        "w": 500,
        "h": 500,
        "type": "grav",
        "force": 4600,
        "dir": {
            "x": 4600,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3400,
        "y": 250,
        "w": 550,
        "h": 550,
        "type": "trans",
        "collide": false,
        "opaq": 0.15,
        "inView": false
    },
    {
        "x": 2500,
        "y": 1550,
        "w": 100,
        "h": 250,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 2500,
        "y": 1000,
        "w": 100,
        "h": 250,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 1900,
        "y": 1000,
        "w": 100,
        "h": 375,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 1900,
        "y": 1425,
        "w": 100,
        "h": 375,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 2200,
        "y": 1600,
        "w": 100,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 2200,
        "y": 1350,
        "w": 100,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 2200,
        "y": 1100,
        "w": 100,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 1725,
        "y": 1800,
        "w": 1125,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 2800,
        "w": 250,
        "h": 250,
        "type": "button",
        "id": 10,
        "active": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 4150,
        "w": 250,
        "h": 250,
        "type": "button",
        "id": 8,
        "active": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 2800,
        "w": 250,
        "h": 250,
        "type": "button",
        "id": 9,
        "active": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 4150,
        "w": 250,
        "h": 250,
        "type": "button",
        "id": 7,
        "active": true,
        "inView": false
    },
    {
        "x": 9950,
        "y": 3000,
        "w": 1025,
        "h": 2650,
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
        "x": 9950,
        "y": 3000,
        "w": 925,
        "h": 2650,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 9950,
        "y": 3000,
        "w": 900,
        "h": 200,
        "spawn": {
            "x": 10400,
            "y": 3100
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 10400,
        "y": 5650,
        "w": 550,
        "h": 300,
        "type": "grav",
        "force": 3750,
        "dir": {
            "x": 0,
            "y": 3750
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 9950,
        "y": 5650,
        "w": 450,
        "h": 300,
        "type": "platformer",
        "force": 2800,
        "dir": {
            "x": 0,
            "y": 2800
        },
        "direction": "down",
        "jumpHeight": 170,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 8300,
        "y": 3550,
        "w": 100,
        "h": 100,
        "type": "button",
        "id": -100,
        "active": true,
        "inView": false
    },
    {
        "x": 8050,
        "y": 1550,
        "w": 1200,
        "h": 500,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7550,
        "y": 0,
        "w": 600,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 11,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4200,
        "y": 2550,
        "w": 1800,
        "h": 1650,
        "type": "platformer",
        "force": 2200,
        "dir": {
            "x": 0,
            "y": 2200
        },
        "direction": "down",
        "jumpHeight": 160,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 4200,
        "y": 3400,
        "w": 1800,
        "h": 350,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 2400,
        "y": 4500,
        "w": 200,
        "h": 150,
        "type": "grav",
        "force": 1750,
        "dir": {
            "x": 0,
            "y": -1750
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 2550,
        "y": 4500,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    2550,
                    4650
                ],
                [
                    2550,
                    4800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2400,
                    4500
                ],
                [
                    2250,
                    4500
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
        "x": 4150,
        "y": 4950,
        "w": 1050,
        "h": 1000,
        "type": "grav",
        "force": 4444,
        "dir": {
            "x": 0,
            "y": 4444
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 3650,
        "y": 4200,
        "w": 200,
        "h": 300,
        "type": "grav",
        "force": 1750,
        "dir": {
            "x": 0,
            "y": 1750
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2400,
        "y": 4300,
        "w": 200,
        "h": 200,
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
        "x": 2400,
        "y": 4350,
        "w": 150,
        "h": 100,
        "type": "ship",
        "state": false,
        "shipAngle": 1.5707963267948966,
        "inView": false
    },
    {
        "x": 2950,
        "y": 4950,
        "w": 600,
        "h": 300,
        "type": "grav",
        "force": 1525,
        "dir": {
            "x": 0,
            "y": -1525
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 3900,
        "y": 5000,
        "w": 200,
        "h": 200,
        "type": "button",
        "id": 5,
        "active": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 1000,
        "w": 100,
        "h": 175,
        "spawn": {
            "x": 1400,
            "y": 1087.5
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 1350,
        "y": 1625,
        "w": 100,
        "h": 175,
        "spawn": {
            "x": 1400,
            "y": 1712.5
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 1000,
        "y": 250,
        "w": 900,
        "h": 500,
        "type": "grav",
        "force": 1250,
        "dir": {
            "x": 1250,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 1700,
        "y": 5450,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2100,
        "y": 5450,
        "w": 200,
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
        "x": 1900,
        "y": 5450,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1500,
        "y": 5450,
        "w": 200,
        "h": 200,
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
        "x": 1300,
        "y": 5450,
        "w": 200,
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
        "x": 1100,
        "y": 5450,
        "w": 200,
        "h": 200,
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
        "x": 900,
        "y": 5450,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 50,
        "y": 4700,
        "w": 800,
        "h": 800,
        "type": "button",
        "id": 3,
        "active": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 4450,
        "w": 200,
        "h": 200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    // {
    //     "x": 0,
    //     "y": 4600,
    //     "w": 900,
    //     "h": 50,
    //     "type": "door",
    //     "id": 3,
    //     "active": false,
    //     "inView": false
    // },
    {
        "x": 3300,
        "y": 1200,
        "w": 2150,
        "h": 150,
        "type": "platformer",
        "force": 2450,
        "dir": {
            "x": 0,
            "y": 2450
        },
        "direction": "down",
        "jumpHeight": 128,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 4075,
        "y": 1200,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4250,
        "y": 1350,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 5450,
        "y": 250,
        "w": 575,
        "h": 1100,
        "type": "grav",
        "force": 5000,
        "dir": {
            "x": 0,
            "y": 5000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 5450,
        "y": 825,
        "w": 550,
        "h": 525,
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
        "x": 5300,
        "y": 250,
        "w": 700,
        "h": 575,
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
        "x": 3400,
        "y": 250,
        "w": 1900,
        "h": 550,
        "type": "grav",
        "force": 1200,
        "dir": {
            "x": 1200,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3350,
        "y": 500,
        "w": 50,
        "h": 50,
        "type": "button",
        "id": 1,
        "active": true,
        "inView": false
    },
    {
        "x": 2550,
        "y": 0,
        "w": 300,
        "h": 550,
        "type": "grav",
        "force": 1850,
        "dir": {
            "x": 0,
            "y": 1850
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2450,
        "y": 400,
        "w": 450,
        "h": 150,
        "type": "grav",
        "force": 1850,
        "dir": {
            "x": 1850,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2450,
        "y": 150,
        "w": 400,
        "h": 250,
        "type": "grav",
        "force": 1850,
        "dir": {
            "x": -1850,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 2450,
        "y": 0,
        "w": 400,
        "h": 150,
        "type": "grav",
        "force": 1850,
        "dir": {
            "x": 1850,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2900,
        "y": 525,
        "w": 350,
        "h": 175,
        "type": "grav",
        "force": 1400,
        "dir": {
            "x": 0,
            "y": 1400
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2900,
        "y": 350,
        "w": 350,
        "h": 175,
        "type": "grav",
        "force": 1400,
        "dir": {
            "x": 0,
            "y": -1400
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1850,
        "y": 375,
        "w": 50,
        "h": 250,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 1900,
        "y": 0,
        "w": 100,
        "h": 550,
        "type": "grav",
        "force": 1300,
        "dir": {
            "x": 0,
            "y": -1300
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1900,
        "y": 0,
        "w": 550,
        "h": 150,
        "type": "grav",
        "force": 1300,
        "dir": {
            "x": 1300,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2300,
        "y": 0,
        "w": 150,
        "h": 550,
        "type": "grav",
        "force": 1300,
        "dir": {
            "x": 0,
            "y": -1300
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1900,
        "y": 450,
        "w": 550,
        "h": 100,
        "type": "grav",
        "force": 1300,
        "dir": {
            "x": 1300,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 1000,
        "y": 250,
        "w": 900,
        "h": 250,
        "type": "grav",
        "force": 1125,
        "dir": {
            "x": 0,
            "y": 1125
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1000,
        "y": 500,
        "w": 900,
        "h": 250,
        "type": "grav",
        "force": 1125,
        "dir": {
            "x": 0,
            "y": -1125
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 100,
        "y": 250,
        "w": 900,
        "h": 500,
        "type": "grav",
        "force": 1250,
        "dir": {
            "x": 1250,
            "y": 0
        },
        "direction": "right",
        "inView": true
    },
    {
        "x": 0,
        "y": 550,
        "w": 100,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": true,
        "sat": {
            "pos": {
                "x": 0,
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
                    "x": 100,
                    "y": 0
                },
                {
                    "x": 100,
                    "y": 450
                },
                {
                    "x": 0,
                    "y": 450
                }
            ],
            "edges": [
                {
                    "x": 100,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": 450
                },
                {
                    "x": -100,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": -450
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
                    "y": 450
                },
                {
                    "x": 0,
                    "y": 450
                }
            ]
        }
    },
    {
        "x": 7.654042494670958e-16,
        "y": 0,
        "w": 100,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 100,
        "y": 750,
        "w": 900,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 100,
        "y": 0,
        "w": 900,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "points": [
            [
                250,
                400
            ],
            [
                250,
                600
            ],
            [
                150,
                500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 150,
            "right": 250,
            "top": 400,
            "bottom": 600
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                100,
                250
            ],
            [
                300,
                250
            ],
            [
                100,
                450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 300,
            "top": 250,
            "bottom": 450
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                100,
                550
            ],
            [
                300,
                750
            ],
            [
                100,
                750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 300,
            "top": 550,
            "bottom": 750
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 325,
        "y": 500,
        "radius": 125,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 800,
        "y": 500,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 0,
        "y": 450,
        "w": 100,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.5,
        "sat": {
            "pos": {
                "x": 0,
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
                    "y": 100
                },
                {
                    "x": 0,
                    "y": 100
                }
            ],
            "edges": [
                {
                    "x": 100,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": 100
                },
                {
                    "x": -100,
                    "y": 0
                },
                {
                    "x": 0,
                    "y": -100
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
                    "y": 100
                },
                {
                    "x": 0,
                    "y": 100
                }
            ]
        },
        "inView": true
    },
    {
        "x": 500,
        "y": 325,
        "radius": 62.5,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "points": [
            [
                462.5,
                275
            ],
            [
                462.5,
                375
            ],
            [
                412.5,
                325
            ]
        ],
        "type": "poly",
        "most": {
            "left": 412.5,
            "right": 462.5,
            "top": 275,
            "bottom": 375
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 500,
        "y": 687.5,
        "radius": 62.5,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "points": [
            [
                462.5,
                637.5
            ],
            [
                462.5,
                737.5
            ],
            [
                412.5,
                687.5
            ]
        ],
        "type": "poly",
        "most": {
            "left": 412.5,
            "right": 462.5,
            "top": 637.5,
            "bottom": 737.5
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 600,
        "y": 250,
        "w": 50,
        "h": 500,
        "type": "breakable",
        "maxStrength": 50,
        "currentStrength": 50,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": true
    },
    {
        "x": 900,
        "y": 250,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 900,
        "y": 750,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 975,
        "y": -25,
        "w": 725,
        "h": 275,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 850,
        "y": 475,
        "w": 400,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                800,
                400
            ],
            [
                1250,
                475
            ],
            [
                800,
                475
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1250,
            "top": 400,
            "bottom": 475
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                800,
                525
            ],
            [
                1250,
                525
            ],
            [
                800,
                600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1250,
            "top": 525,
            "bottom": 600
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 950,
        "y": 750,
        "w": 950,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1675,
        "y": 0,
        "w": 225,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1900,
                550
            ],
            [
                1900,
                750
            ],
            [
                1650,
                750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1650,
            "right": 1900,
            "top": 550,
            "bottom": 750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1650,
                250
            ],
            [
                1900,
                250
            ],
            [
                1900,
                450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1650,
            "right": 1900,
            "top": 250,
            "bottom": 450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1900,
        "y": 550,
        "w": 1000,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2450,
        "y": 75,
        "w": 100,
        "h": 575,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2175,
        "y": 275,
        "radius": 225,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2175,
        "y": 275,
        "radius": 375,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2450,
                    275
                ],
                [
                    2550,
                    275
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2175,
                    550
                ],
                [
                    2175,
                    650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 275,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2175,
        "y": 275,
        "radius": 400,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1900,
                    274.99999999999994
                ],
                [
                    1775,
                    274.99999999999994
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2175,
                    0
                ],
                [
                    2175,
                    -125
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 275,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1875,
        "y": -25,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2425,
        "y": 525,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1850,
        "y": 625,
        "w": 1050,
        "h": 375,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 675,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1550,
        "y": 525,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1325,
        "y": 425,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1600,
        "y": 375,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1575,
        "y": 725,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1425,
        "y": 625,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1725,
        "y": 575,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1750,
        "y": 475,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1075,
        "y": 325,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 1425,
        "y": 275,
        "radius": 50,
        "radius2": 25,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 2700,
        "y": 150,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2700,
                    0
                ],
                [
                    2700,
                    -50
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2700,
                    300
                ],
                [
                    2700,
                    350
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
        "x": 2700,
        "y": 400,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2700,
                    550
                ],
                [
                    2700,
                    600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2700,
                    250
                ],
                [
                    2700,
                    200
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
        "x": 2525,
        "y": 525,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2525,
        "y": 50,
        "w": 175,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2525,
        "y": 225,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2700,
        "y": 150,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2700,
        "y": 400,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2700,
        "y": 300,
        "w": 200,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2850,
        "y": -25,
        "w": 50,
        "h": 525,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2825,
        "y": 275,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2825,
        "y": -25,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 250,
        "w": 350,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 700,
        "w": 350,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 600,
        "w": 100,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 250,
        "w": 100,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2875,
        "y": -25,
        "w": 475,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2875,
        "y": 775,
        "w": 475,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 700,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3250,
        "y": 700,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3250,
        "y": 350,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2900,
        "y": 350,
        "radius": 150,
        "type": "circle-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2900,
                    350
                ],
                [
                    3050,
                    350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2900,
                    350
                ],
                [
                    2900,
                    500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3250,
        "y": 550,
        "w": 150,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 0,
        "w": 150,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 500,
        "w": 100,
        "h": 50,
        "spawn": {
            "x": 3350,
            "y": 525
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 3400,
        "y": 800,
        "w": 1900,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3350,
        "y": -25,
        "w": 2650,
        "h": 275,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 500,
        "w": 50,
        "h": 50,
        "type": "door",
        "id": 1,
        "active": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 350,
        "w": 50,
        "h": 50,
        "type": "button",
        "id": 1,
        "active": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "button",
        "id": 2,
        "active": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 500,
        "w": 50,
        "h": 50,
        "type": "door",
        "id": 2,
        "active": true,
        "inView": false
    },
    {
        "x": 3350,
        "y": 500,
        "w": 50,
        "h": 50,
        "type": "zone",
        "value": 2,
        "inView": false
    },
    {
        "x": 5450,
        "y": 800,
        "radius": 1000,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    5450,
                    250
                ],
                [
                    5450,
                    -200
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5450,
                    1350
                ],
                [
                    5450,
                    1800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 550,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                3400,
                550
            ],
            [
                3450,
                800
            ],
            [
                3400,
                800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3400,
            "right": 3450,
            "top": 550,
            "bottom": 800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3400,
                250
            ],
            [
                3450,
                250
            ],
            [
                3400,
                500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3400,
            "right": 3450,
            "top": 250,
            "bottom": 500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5450,
        "y": 800,
        "radius": 400,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                5275,
                450
            ],
            [
                5250,
                800
            ],
            [
                4700,
                800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4700,
            "right": 5275,
            "top": 450,
            "bottom": 800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3300,
        "y": 925,
        "w": 1000,
        "h": 275,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 1350,
        "w": 2150,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5200,
        "y": 1300,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5000,
        "y": 1250,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4775,
                1275
            ],
            [
                4850,
                1350
            ],
            [
                4700,
                1350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4700,
            "right": 4850,
            "top": 1275,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4600,
                1200
            ],
            [
                4700,
                1200
            ],
            [
                4650,
                1250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4600,
            "right": 4700,
            "top": 1200,
            "bottom": 1250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4550,
                1300
            ],
            [
                4600,
                1350
            ],
            [
                4500,
                1350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4500,
            "right": 4600,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3700,
        "y": 1275,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3500,
        "y": 1275,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3325,
                1300
            ],
            [
                3350,
                1350
            ],
            [
                3300,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3300,
            "right": 3350,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3375,
                1300
            ],
            [
                3400,
                1350
            ],
            [
                3350,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3350,
            "right": 3400,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3425,
                1300
            ],
            [
                3450,
                1350
            ],
            [
                3400,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3400,
            "right": 3450,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3475,
                1300
            ],
            [
                3500,
                1350
            ],
            [
                3450,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3450,
            "right": 3500,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3525,
                1300
            ],
            [
                3550,
                1350
            ],
            [
                3500,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3500,
            "right": 3550,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3575,
                1300
            ],
            [
                3600,
                1350
            ],
            [
                3550,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3550,
            "right": 3600,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3625,
                1300
            ],
            [
                3650,
                1350
            ],
            [
                3600,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3600,
            "right": 3650,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3675,
                1300
            ],
            [
                3700,
                1350
            ],
            [
                3650,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3650,
            "right": 3700,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3725,
                1300
            ],
            [
                3750,
                1350
            ],
            [
                3700,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3700,
            "right": 3750,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3775,
                1300
            ],
            [
                3800,
                1350
            ],
            [
                3750,
                1350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3750,
            "right": 3800,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4350,
                1200
            ],
            [
                4500,
                1200
            ],
            [
                4425,
                1275
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4350,
            "right": 4500,
            "top": 1200,
            "bottom": 1275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3340.5833333347155,
        "y": 1275,
        "w": 50,
        "h": 25,
        "type": "move",
        "points": [
            [
                3300,
                1275
            ],
            [
                3350,
                1275
            ]
        ],
        "speed": 35,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 3350,
            "y": 1275
        },
        "pointTo": {
            "x": 3300,
            "y": 1275
        },
        "xv": -35,
        "yv": 4.2862637970157365e-15,
        "inView": false
    },
    {
        "x": 5450,
        "y": 1550,
        "w": 650,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9.860761315262648e-31,
        "y": 1000,
        "w": 50,
        "h": 800,
        "type": "tp",
        "tpx": 425,
        "tpy": 2575,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 0,
        "y": 2550,
        "w": 350,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 500,
        "y": 2550,
        "w": 400,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 900,
        "y": 2550,
        "w": 700,
        "h": 2100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3100,
                1000
            ],
            [
                3300,
                1000
            ],
            [
                3300,
                1200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3100,
            "right": 3300,
            "top": 1000,
            "bottom": 1200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3300,
                1350
            ],
            [
                3300,
                1800
            ],
            [
                2850,
                1800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2850,
            "right": 3300,
            "top": 1350,
            "bottom": 1800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2975,
                1075
            ],
            [
                3175,
                1275
            ],
            [
                2975,
                1475
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2975,
            "right": 3175,
            "top": 1075,
            "bottom": 1475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2200,
        "y": 982,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                2200,
                850
            ],
            [
                2200,
                1100
            ]
        ],
        "speed": 120,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2200,
            "y": 1100
        },
        "pointTo": {
            "x": 2200,
            "y": 850
        },
        "xv": 7.34788079488412e-15,
        "yv": -120,
        "inView": false
    },
    {
        "x": 1900,
        "y": 693,
        "w": 100,
        "h": 500,
        "type": "lavamove",
        "points": [
            [
                1900,
                575
            ],
            [
                1900,
                875
            ]
        ],
        "speed": 120,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1900,
            "y": 575
        },
        "pointTo": {
            "x": 1900,
            "y": 875
        },
        "xv": 7.34788079488412e-15,
        "yv": 120,
        "inView": false
    },
    {
        "x": 1900,
        "y": 1543,
        "w": 100,
        "h": 450,
        "type": "lavamove",
        "points": [
            [
                1900,
                1425
            ],
            [
                1900,
                1725
            ]
        ],
        "speed": 120,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1900,
            "y": 1425
        },
        "pointTo": {
            "x": 1900,
            "y": 1725
        },
        "xv": 7.34788079488412e-15,
        "yv": 120,
        "inView": false
    },
    {
        "points": [
            [
                1400,
                1100
            ],
            [
                1650,
                1400
            ],
            [
                1400,
                1700
            ],
            [
                1150,
                1400
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1150,
            "right": 1650,
            "top": 1100,
            "bottom": 1700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1750,
                1600
            ],
            [
                1975,
                1900
            ],
            [
                1500,
                1900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1500,
            "right": 1975,
            "top": 1600,
            "bottom": 1900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1500,
                900
            ],
            [
                1975,
                900
            ],
            [
                1750,
                1200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1500,
            "right": 1975,
            "top": 900,
            "bottom": 1200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2700,
                1650
            ],
            [
                2850,
                1800
            ],
            [
                2700,
                1800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2700,
            "right": 2850,
            "top": 1650,
            "bottom": 1800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2700,
                1000
            ],
            [
                2850,
                1000
            ],
            [
                2700,
                1150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2700,
            "right": 2850,
            "top": 1000,
            "bottom": 1150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 200,
        "y": 4100,
        "w": 500,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                900,
                4200
            ],
            [
                900,
                4450
            ],
            [
                800,
                4325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 800,
            "right": 900,
            "top": 4200,
            "bottom": 4450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                200,
                4100
            ],
            [
                200,
                4250
            ],
            [
                100,
                4150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 100,
            "right": 200,
            "top": 4100,
            "bottom": 4250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 51.13333333334662,
        "y": 4600,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                0,
                4600
            ],
            [
                150,
                4600
            ]
        ],
        "speed": 52,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 0,
            "y": 4600
        },
        "pointTo": {
            "x": 150,
            "y": 4600
        },
        "xv": 52,
        "yv": 0,
        "inView": false
    },
    {
        "points": [
            [
                0,
                4225
            ],
            [
                125,
                4350
            ],
            [
                0,
                4475
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 125,
            "top": 4225,
            "bottom": 4475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                700,
                4400
            ],
            [
                750,
                4450
            ],
            [
                700,
                4450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 750,
            "top": 4400,
            "bottom": 4450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                200,
                4450
            ],
            [
                200,
                4550
            ],
            [
                150,
                4500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 150,
            "right": 200,
            "top": 4450,
            "bottom": 4550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 750,
        "y": 4500,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 4600,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 4650,
        "w": 900,
        "h": 900,
        "spawn": {
            "x": 450,
            "y": 5100
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 0,
        "y": 4650,
        "w": 900,
        "h": 900,
        "type": "zone",
        "value": 4,
        "inView": false
    },
    {
        "x": 0,
        "y": 5550,
        "w": 2400,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 2550,
        "w": 800,
        "h": 2100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2300,
        "y": 5200,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2300,
        "y": 4650,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 900,
        "y": 4650,
        "w": 200,
        "h": 200,
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
        "x": 1100,
        "y": 4650,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1300,
        "y": 4650,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1100,
        "y": 4850,
        "w": 200,
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
        "x": 1700,
        "y": 4650,
        "w": 200,
        "h": 200,
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
        "x": 2100,
        "y": 4850,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2100,
        "y": 4650,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1700,
        "y": 5050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 900,
        "y": 4850,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 900,
        "y": 5050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 900,
        "y": 5250,
        "w": 200,
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
        "x": 1300,
        "y": 5250,
        "w": 200,
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
        "x": 1100,
        "y": 5050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1300,
        "y": 5050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1100,
        "y": 5250,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1500,
        "y": 5250,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2100,
        "y": 5250,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1900,
        "y": 5250,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1500,
        "y": 4850,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1700,
        "y": 4850,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1300,
        "y": 4850,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1500,
        "y": 5050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1500,
        "y": 4650,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2100,
        "y": 5050,
        "w": 200,
        "h": 200,
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
        "x": 1900,
        "y": 4850,
        "w": 200,
        "h": 200,
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
        "x": 1900,
        "y": 5050,
        "w": 200,
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
        "x": 1700,
        "y": 5250,
        "w": 200,
        "h": 200,
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
        "x": 1900,
        "y": 4650,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2400,
        "y": 5250,
        "w": 1450,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2400,
        "y": 4650,
        "w": 1450,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                350,
                2825
            ],
            [
                450,
                2925
            ],
            [
                350,
                3025
            ],
            [
                250,
                2925
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 250,
            "right": 450,
            "top": 2825,
            "bottom": 3025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                475,
                2950
            ],
            [
                575,
                3050
            ],
            [
                475,
                3150
            ],
            [
                375,
                3050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 375,
            "right": 575,
            "top": 2950,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                675,
                2700
            ],
            [
                775,
                2800
            ],
            [
                675,
                2900
            ],
            [
                575,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 575,
            "right": 775,
            "top": 2700,
            "bottom": 2900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                2825
            ],
            [
                900,
                2925
            ],
            [
                800,
                3025
            ],
            [
                700,
                2925
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 900,
            "top": 2825,
            "bottom": 3025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                3150
            ],
            [
                900,
                3250
            ],
            [
                800,
                3350
            ],
            [
                700,
                3250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 900,
            "top": 3150,
            "bottom": 3350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                675,
                3275
            ],
            [
                775,
                3375
            ],
            [
                675,
                3475
            ],
            [
                575,
                3375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 575,
            "right": 775,
            "top": 3275,
            "bottom": 3475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                350,
                3075
            ],
            [
                450,
                3175
            ],
            [
                350,
                3275
            ],
            [
                250,
                3175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 250,
            "right": 450,
            "top": 3075,
            "bottom": 3275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                225,
                3200
            ],
            [
                325,
                3300
            ],
            [
                225,
                3400
            ],
            [
                125,
                3300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 125,
            "right": 325,
            "top": 3200,
            "bottom": 3400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                225,
                2700
            ],
            [
                325,
                2800
            ],
            [
                225,
                2900
            ],
            [
                125,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 125,
            "right": 325,
            "top": 2700,
            "bottom": 2900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                225,
                2950
            ],
            [
                325,
                3050
            ],
            [
                225,
                3150
            ],
            [
                125,
                3050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 125,
            "right": 325,
            "top": 2950,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                2825
            ],
            [
                200,
                2925
            ],
            [
                100,
                3025
            ],
            [
                0,
                2925
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 200,
            "top": 2825,
            "bottom": 3025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                3075
            ],
            [
                200,
                3175
            ],
            [
                100,
                3275
            ],
            [
                0,
                3175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 200,
            "top": 3075,
            "bottom": 3275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                3325
            ],
            [
                200,
                3425
            ],
            [
                100,
                3525
            ],
            [
                0,
                3425
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 200,
            "top": 3325,
            "bottom": 3525
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2300,
        "y": 5000,
        "w": 650,
        "h": 200,
        "type": "grav",
        "force": 1525,
        "dir": {
            "x": 0,
            "y": 1525
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1350,
        "y": 1000,
        "w": 100,
        "h": 800,
        "type": "zone",
        "value": 3,
        "inView": false
    },
    {
        "x": 3550,
        "y": 4950,
        "w": 300,
        "h": 300,
        "type": "grav",
        "force": 2800,
        "dir": {
            "x": -2800,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 3850,
        "y": 4950,
        "w": 300,
        "h": 300,
        "spawn": {
            "x": 4000,
            "y": 5100
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 3550,
        "y": 4950,
        "w": 300,
        "h": 300,
        "type": "door",
        "id": 5,
        "active": false,
        "inView": false
    },
    {
        "x": 3550,
        "y": 4950,
        "w": 300,
        "h": 300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "points": [
            [
                2400,
                5200
            ],
            [
                3500,
                5200
            ],
            [
                3550,
                5250
            ],
            [
                3500,
                5250
            ],
            [
                2400,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2400,
            "right": 3550,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3850,
        "y": 5250,
        "w": 300,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3850,
        "y": 4200,
        "w": 1350,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5200,
        "y": 4200,
        "w": 800,
        "h": 1800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2400,
                4950
            ],
            [
                3550,
                4950
            ],
            [
                3500,
                5000
            ],
            [
                2400,
                5000
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2400,
            "right": 3550,
            "top": 4950,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4150,
        "y": 5250,
        "w": 50,
        "h": 700,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 5150,
        "y": 4950,
        "w": 50,
        "h": 1000,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 4250,
        "y": 5025,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4775,
        "y": 5350,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4500,
        "y": 5450,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5050,
        "y": 5700,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5000,
        "y": 5475,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4725,
        "y": 5625,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4350,
        "y": 5675,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5025,
        "y": 5225,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4350,
        "y": 5225,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4875,
        "y": 5025,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4575,
        "y": 5100,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4350,
        "y": 5800,
        "w": 50,
        "h": 150,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 4750,
        "y": 5800,
        "w": 50,
        "h": 150,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 4950,
        "y": 5800,
        "w": 50,
        "h": 150,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 4550,
        "y": 5800,
        "w": 50,
        "h": 150,
        "type": "bounce",
        "effect": 30,
        "inView": false
    },
    {
        "x": 4775,
        "y": 5950,
        "w": 200,
        "h": 50,
        "type": "tp",
        "tpx": 2425,
        "tpy": 4225,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 2400,
        "y": 3150,
        "w": 800,
        "h": 1050,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3200,
        "y": 2550,
        "w": 1000,
        "h": 1650,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 2550,
        "y": 4300,
        "w": 1150,
        "h": 200,
        "type": "roundedcorners",
        "circles": [
            {
                "x": 2600,
                "y": 4350,
                "radius": 50
            },
            {
                "x": 3650,
                "y": 4350,
                "radius": 50
            },
            {
                "x": 2600,
                "y": 4450,
                "radius": 50
            },
            {
                "x": 3650,
                "y": 4450,
                "radius": 50
            }
        ],
        "rects": [
            {
                "x": 2600,
                "y": 4300,
                "w": 1050,
                "h": 200
            },
            {
                "x": 2550,
                "y": 4350,
                "w": 1150,
                "h": 100
            }
        ],
        "roundRadius": 50,
        "inView": false
    },
    {
        "x": 2416.566666666943,
        "y": 4350,
        "w": 50,
        "h": 50,
        "type": "tpmove",
        "points": [
            [
                2400,
                4350
            ],
            [
                2500,
                4350
            ]
        ],
        "speed": 34,
        "currentPoint": 1,
        "tpx": 7800,
        "tpy": 1800,
        "pointOn": {
            "x": 2500,
            "y": 4350
        },
        "pointTo": {
            "x": 2400,
            "y": 4350
        },
        "xv": -34,
        "yv": 4.1637991171010006e-15,
        "inView": false
    },
    {
        "x": 2400,
        "y": 4200,
        "w": 150,
        "h": 100,
        "type": "ship",
        "state": true,
        "shipAngle": 1.5707963267948966,
        "inView": false
    },
    {
        "x": 2550,
        "y": 4200,
        "w": 1100,
        "h": 100,
        "type": "grav",
        "force": 1750,
        "dir": {
            "x": 1750,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2775,
        "y": 4175,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3000,
        "y": 4325,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3275,
        "y": 4175,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3600,
        "y": 4350,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3600,
        "y": 4150,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3700,
        "y": 4350,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    3700,
                    4200
                ],
                [
                    3700,
                    4050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3850,
                    4350
                ],
                [
                    4000,
                    4350
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
        "x": 2600,
        "y": 4500,
        "w": 1250,
        "h": 150,
        "type": "grav",
        "force": 300,
        "dir": {
            "x": -300,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 3775,
        "y": 4400,
        "w": 200,
        "h": 50,
        "type": "rotate-normal",
        "angle": 1309.983333333352,
        "rotateSpeed": 53,
        "pivotX": 3775,
        "pivotY": 4400,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 103.07764064044152,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 3700,
        "y": 4500,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    3850,
                    4500
                ],
                [
                    4000,
                    4500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3700,
                    4650
                ],
                [
                    3700,
                    4800
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
        "points": [
            [
                3500,
                4550
            ],
            [
                3650,
                4650
            ],
            [
                3500,
                4650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3500,
            "right": 3650,
            "top": 4550,
            "bottom": 4650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3300,
                4500
            ],
            [
                3450,
                4500
            ],
            [
                3300,
                4600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3300,
            "right": 3450,
            "top": 4500,
            "bottom": 4600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3100,
                4550
            ],
            [
                3200,
                4650
            ],
            [
                3000,
                4650
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3000,
            "right": 3200,
            "top": 4550,
            "bottom": 4650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2725,
                4500
            ],
            [
                2925,
                4500
            ],
            [
                2825,
                4600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2725,
            "right": 2925,
            "top": 4500,
            "bottom": 4600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2600,
        "y": 4516.566666662797,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                2600,
                4500
            ],
            [
                2600,
                4600
            ]
        ],
        "speed": 34,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2600,
            "y": 4600
        },
        "pointTo": {
            "x": 2600,
            "y": 4500
        },
        "xv": 2.0818995585505003e-15,
        "yv": -34,
        "inView": false
    },
    {
        "x": 2500,
        "y": 4550,
        "radius": 33,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4575,
        "y": 5950,
        "w": 200,
        "h": 50,
        "type": "tp",
        "tpx": 4000,
        "tpy": 5100,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 4375,
        "y": 5950,
        "w": 200,
        "h": 50,
        "type": "tp",
        "tpx": 4575,
        "tpy": 3325,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 4150,
        "y": 5950,
        "w": 225,
        "h": 50,
        "type": "tp",
        "tpx": 4225,
        "tpy": 4125,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 4400,
        "y": 4150,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4550,
        "y": 4100,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4700,
        "y": 4050,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4900,
        "y": 4050,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5100,
        "y": 4000,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5350,
        "y": 4050,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5702.5,
        "y": 4050,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                5400,
                4050
            ],
            [
                5850,
                4050
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 5850,
            "y": 4050
        },
        "pointTo": {
            "x": 5400,
            "y": 4050
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 5950,
        "y": 3750,
        "w": 50,
        "h": 450,
        "type": "tp",
        "tpx": 7800,
        "tpy": 1800,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3900,
        "y": 4950,
        "w": 250,
        "h": 300,
        "type": "zone",
        "value": 5,
        "inView": false
    },
    {
        "x": 4975,
        "y": 5800,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4775,
        "y": 5800,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4575,
        "y": 5800,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4375,
        "y": 5800,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6000,
        "y": 0,
        "w": 1550,
        "h": 6000,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4975,
        "y": 5950,
        "w": 225,
        "h": 50,
        "type": "tp",
        "tpx": 7575,
        "tpy": 25,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7550,
        "y": 600,
        "w": 4450,
        "h": 950,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8150,
        "y": 0,
        "w": 1000,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 0,
        "w": 300,
        "h": 300,
        "type": "grav",
        "force": 2300,
        "dir": {
            "x": 2300,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7850,
        "y": 0,
        "w": 300,
        "h": 300,
        "type": "grav",
        "force": 2300,
        "dir": {
            "x": 0,
            "y": 2300
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 7850,
        "y": 300,
        "w": 300,
        "h": 300,
        "type": "grav",
        "force": 2300,
        "dir": {
            "x": -2300,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 7550,
        "y": 300,
        "w": 300,
        "h": 300,
        "type": "grav",
        "force": 2300,
        "dir": {
            "x": 0,
            "y": -2300
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 7825,
        "y": 275,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 7800,
        "tpy": 1800,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7800,
        "y": 250,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 20,
        "currentCoins": 20,
        "inView": false
    },
    {
        "x": 7675,
        "y": 125,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7600,
        "y": 200,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7750,
        "y": 150,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7850,
        "y": 75,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7950,
        "y": 125,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7925,
        "y": 250,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 8075,
        "y": 325,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7950,
        "y": 450,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7800,
        "y": 400,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7600,
        "y": 500,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7650,
        "y": 375,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7575,
        "y": 300,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 8050,
        "y": 25,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 8075,
        "y": 525,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7800,
        "y": 50,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8125,
        "y": 175,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8050,
        "y": 275,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7975,
        "y": 375,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8075,
        "y": 475,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7875,
        "y": 550,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7750,
        "y": 500,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7600,
        "y": 450,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7700,
        "y": 300,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7875,
        "y": 175,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8000,
        "y": 550,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7650,
        "y": 0,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 7550,
        "y": 100,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "points": [
            [
                4775,
                4150
            ],
            [
                4800,
                4200
            ],
            [
                4750,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4750,
            "right": 4800,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4825,
                4150
            ],
            [
                4850,
                4200
            ],
            [
                4800,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4800,
            "right": 4850,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4875,
                4150
            ],
            [
                4900,
                4200
            ],
            [
                4850,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4850,
            "right": 4900,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4925,
                4150
            ],
            [
                4950,
                4200
            ],
            [
                4900,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4900,
            "right": 4950,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4975,
                4150
            ],
            [
                5000,
                4200
            ],
            [
                4950,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4950,
            "right": 5000,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5025,
                4150
            ],
            [
                5050,
                4200
            ],
            [
                5000,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5000,
            "right": 5050,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5075,
                4150
            ],
            [
                5100,
                4200
            ],
            [
                5050,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5050,
            "right": 5100,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5125,
                4150
            ],
            [
                5150,
                4200
            ],
            [
                5100,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5100,
            "right": 5150,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5175,
                4150
            ],
            [
                5200,
                4200
            ],
            [
                5150,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5150,
            "right": 5200,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5225,
                4150
            ],
            [
                5250,
                4200
            ],
            [
                5200,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5200,
            "right": 5250,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5275,
                4150
            ],
            [
                5300,
                4200
            ],
            [
                5250,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5250,
            "right": 5300,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5325,
                4150
            ],
            [
                5350,
                4200
            ],
            [
                5300,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5300,
            "right": 5350,
            "top": 4150,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5437.5,
                4125
            ],
            [
                5475,
                4200
            ],
            [
                5400,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5475,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5512.5,
                4125
            ],
            [
                5550,
                4200
            ],
            [
                5475,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5475,
            "right": 5550,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5587.5,
                4125
            ],
            [
                5625,
                4200
            ],
            [
                5550,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5550,
            "right": 5625,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5662.5,
                4125
            ],
            [
                5700,
                4200
            ],
            [
                5625,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5625,
            "right": 5700,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5737.5,
                4125
            ],
            [
                5775,
                4200
            ],
            [
                5700,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5700,
            "right": 5775,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5812.5,
                4125
            ],
            [
                5850,
                4200
            ],
            [
                5775,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5775,
            "right": 5850,
            "top": 4125,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5900,
                4100
            ],
            [
                5950,
                4200
            ],
            [
                5850,
                4200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5950,
            "top": 4100,
            "bottom": 4200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4450,
        "y": 3150,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4200,
        "y": 3300,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4650,
        "y": 3300,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4500,
                3300
            ],
            [
                4550,
                3350
            ],
            [
                4500,
                3350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4500,
            "right": 4550,
            "top": 3300,
            "bottom": 3350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4650,
                3300
            ],
            [
                4650,
                3350
            ],
            [
                4600,
                3350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4600,
            "right": 4650,
            "top": 3300,
            "bottom": 3350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4650,
        "y": 3050,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4550,
        "y": 2900,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4650,
        "y": 2700,
        "w": 150,
        "h": 50,
        "type": "rotate-normal",
        "angle": -692.0666666666881,
        "rotateSpeed": -28,
        "pivotX": 4650,
        "pivotY": 2700,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 79.05694150420949,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 4250,
        "y": 2475,
        "radius": 225,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                4200,
                3100
            ],
            [
                4400,
                3300
            ],
            [
                4200,
                3300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4200,
            "right": 4400,
            "top": 3100,
            "bottom": 3300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4950,
                3100
            ],
            [
                4950,
                3300
            ],
            [
                4750,
                3300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4750,
            "right": 4950,
            "top": 3100,
            "bottom": 3300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4975,
        "y": 2525,
        "r": 225,
        "tpx": 7800,
        "tpy": 1800,
        "type": "circle-tp",
        "renderType": "circleR",
        "radius": 225,
        "inView": false
    },
    {
        "x": 4950,
        "y": 2550,
        "w": 1050,
        "h": 800,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 4200,
        "y": 3350,
        "w": 1800,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 1000,
        "w": 100,
        "h": 800,
        "type": "color",
        "bgColor": "#407d6c",
        "tileColor": "#7db290",
        "inView": false
    },
    {
        "x": 7550,
        "y": 1550,
        "w": 500,
        "h": 500,
        "spawn": {
            "x": 7800,
            "y": 1800
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 7550,
        "y": 1550,
        "w": 500,
        "h": 500,
        "type": "zone",
        "value": 6,
        "inView": false
    },
    {
        "x": 7550,
        "y": 2050,
        "w": 4450,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8300,
        "y": 1900,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8350,
        "y": 1900,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8350,
        "y": 1700,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8650,
        "y": 1800,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8650,
        "y": 1650,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8925,
        "y": 1725,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8925,
        "y": 1875,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8600,
        "y": 1550,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8875,
        "y": 1550,
        "w": 100,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8875,
        "y": 1875,
        "w": 100,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8650,
        "y": 1950,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8600,
        "y": 1950,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8300,
        "y": 1550,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 1850,
        "w": 100,
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
        "x": 9850,
        "y": 1550,
        "w": 100,
        "h": 50,
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
        "x": 9950,
        "y": 1550,
        "w": 100,
        "h": 150,
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
        "x": 10050,
        "y": 1550,
        "w": 100,
        "h": 250,
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
        "x": 10150,
        "y": 1550,
        "w": 100,
        "h": 350,
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
        "x": 10250,
        "y": 1550,
        "w": 100,
        "h": 450,
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
        "x": 9850,
        "y": 1800,
        "w": 100,
        "h": 250,
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
        "x": 9950,
        "y": 1900,
        "w": 100,
        "h": 150,
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
        "x": 10050,
        "y": 2000,
        "w": 100,
        "h": 50,
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
        "x": 10350,
        "y": 1900,
        "w": 350,
        "h": 100,
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
        "x": 10850,
        "y": 1650,
        "w": 100,
        "h": 400,
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
        "x": 10500,
        "y": 1650,
        "w": 350,
        "h": 100,
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
        "x": 11050,
        "y": 1550,
        "w": 900,
        "h": 500,
        "type": "snap",
        "snapDistance": 50,
        "snapWait": 0.4,
        "snapX": true,
        "snapY": true,
        "inView": false
    },
    {
        "points": [
            [
                11250,
                1550
            ],
            [
                11950,
                1550
            ],
            [
                11600,
                1900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11250,
            "right": 11950,
            "top": 1550,
            "bottom": 1900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                11250,
                1850
            ],
            [
                11450,
                2050
            ],
            [
                11050,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11050,
            "right": 11450,
            "top": 1850,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                11950,
                1850
            ],
            [
                11950,
                2050
            ],
            [
                11750,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11750,
            "right": 11950,
            "top": 1850,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 11000,
        "y": 2050,
        "w": 975,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11025,
        "y": 1500,
        "w": 975,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11950,
        "y": 1550,
        "w": 50,
        "h": 300,
        "type": "tp",
        "tpx": 9175,
        "tpy": 300,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 11150,
        "y": 0,
        "w": 50,
        "h": 275,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11150,
        "y": 375,
        "w": 50,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11250,
        "y": 0,
        "w": 50,
        "h": 425,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11250,
        "y": 525,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11350,
        "y": 275,
        "w": 50,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11350,
        "y": 0,
        "w": 50,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11450,
        "y": 0,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11450,
        "y": 400,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11550,
        "y": -1.25,
        "w": 50,
        "h": 300,
        "type": "move",
        "points": [
            [
                11550,
                -100
            ],
            [
                11550,
                0
            ]
        ],
        "speed": 75,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11550,
            "y": -100
        },
        "pointTo": {
            "x": 11550,
            "y": 0
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 11550,
        "y": 398.75,
        "w": 50,
        "h": 300,
        "type": "move",
        "points": [
            [
                11550,
                300
            ],
            [
                11550,
                400
            ]
        ],
        "speed": 75,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11550,
            "y": 300
        },
        "pointTo": {
            "x": 11550,
            "y": 400
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 11850,
        "y": 200,
        "w": 275,
        "h": 50,
        "type": "rotate-normal",
        "angle": -1502.4333333333,
        "rotateSpeed": -62,
        "pivotX": 11850,
        "pivotY": 200,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 139.75424859373686,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "points": [
            [
                11600,
                0
            ],
            [
                11800,
                0
            ],
            [
                11600,
                200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11600,
            "right": 11800,
            "top": 0,
            "bottom": 200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                11600,
                400
            ],
            [
                11800,
                600
            ],
            [
                11600,
                600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11600,
            "right": 11800,
            "top": 400,
            "bottom": 600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                12000,
                400
            ],
            [
                12000,
                600
            ],
            [
                11800,
                600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11800,
            "right": 12000,
            "top": 400,
            "bottom": 600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                11800,
                0
            ],
            [
                12000,
                0
            ],
            [
                12000,
                200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11800,
            "right": 12000,
            "top": 0,
            "bottom": 200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 11850,
        "y": 400,
        "w": 275,
        "h": 50,
        "type": "rotate-normal",
        "angle": 1502.4333333333,
        "rotateSpeed": 62,
        "pivotX": 11850,
        "pivotY": 400,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 139.75424859373686,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 9350,
        "y": 0,
        "w": 100,
        "h": 200,
        "type": "breakable",
        "maxStrength": 20,
        "currentStrength": 20,
        "time": 0,
        "timer": 0,
        "regenTime": 5,
        "inView": false
    },
    {
        "x": 9650,
        "y": 0,
        "w": 100,
        "h": 150,
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
        "x": 9650,
        "y": 450,
        "w": 100,
        "h": 150,
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
        "x": 9850,
        "y": 200,
        "w": 100,
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
        "x": 10150,
        "y": 350,
        "w": 100,
        "h": 250,
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
        "x": 10150,
        "y": 0,
        "w": 100,
        "h": 250,
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
        "x": 10450,
        "y": 450,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10450,
        "y": 150,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10725,
        "y": 300,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11000,
        "y": 150,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11000,
        "y": 450,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7550,
        "y": 4400,
        "w": 2400,
        "h": 1600,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 9150,
        "y": 2800,
        "w": 800,
        "h": 1600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3500,
        "w": 200,
        "h": 200,
        "spawn": {
            "x": 8350,
            "y": 3600
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3500,
        "w": 200,
        "h": 200,
        "type": "zone",
        "value": 7,
        "inView": false
    },
    {
        "x": 11950,
        "y": 2750,
        "w": 100,
        "h": 3300,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 10850,
        "y": 2800,
        "w": 200,
        "h": 2800,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 10950,
        "y": 5600,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10950,
        "y": 5950,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9950,
        "y": 2850,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10200,
        "y": 2850,
        "radius": 251,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10525,
        "y": 2950,
        "radius": 177,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10750,
        "y": 2975,
        "radius": 230,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9825,
        "y": 3275,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10150,
        "y": 3250,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10400,
        "y": 3325,
        "radius": 127,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10100,
        "y": 3550,
        "radius": 103,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10625,
        "y": 3625,
        "radius": 182,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10300,
        "y": 3725,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10625,
        "y": 3925,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 10150,
        "y": 3925,
        "radius": 103,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11050,
        "y": 2800,
        "w": 900,
        "h": 900,
        "type": "winpad",
        "inView": false
    },
    {
        "x": 11197.5,
        "y": 3700,
        "w": 350,
        "h": 50,
        "type": "move",
        "points": [
            [
                11000,
                3700
            ],
            [
                11200,
                3700
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11000,
            "y": 3700
        },
        "pointTo": {
            "x": 11200,
            "y": 3700
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 11647.5,
        "y": 3700,
        "w": 400,
        "h": 50,
        "type": "move",
        "points": [
            [
                11450,
                3700
            ],
            [
                11650,
                3700
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11450,
            "y": 3700
        },
        "pointTo": {
            "x": 11650,
            "y": 3700
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 10975,
        "y": 3700,
        "w": 375,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11850,
        "y": 3700,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 10050,
        "y": 4225,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10050,
        "pivotY": 4225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10175,
        "y": 4350,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10175,
        "pivotY": 4350,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10750,
        "y": 4225,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10750,
        "pivotY": 4225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10625,
        "y": 4350,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10625,
        "pivotY": 4350,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10425,
        "y": 4625,
        "w": 225,
        "h": 225,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10425,
        "pivotY": 4625,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 159.0990257669732,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10050,
        "y": 4800,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10050,
        "pivotY": 4800,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10175,
        "y": 4925,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10175,
        "pivotY": 4925,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10300,
        "y": 5050,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10300,
        "pivotY": 5050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10750,
        "y": 5100,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10750,
        "pivotY": 5100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10625,
        "y": 5225,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10625,
        "pivotY": 5225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10500,
        "y": 5525,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10500,
        "pivotY": 5525,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10375,
        "y": 5400,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10375,
        "pivotY": 5400,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10250,
        "y": 5525,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10250,
        "pivotY": 5525,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10125,
        "y": 5650,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10125,
        "pivotY": 5650,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10625,
        "y": 5650,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10625,
        "pivotY": 5650,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10750,
        "y": 5350,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10750,
        "pivotY": 5350,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10375,
        "y": 5725,
        "w": 225,
        "h": 225,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10375,
        "pivotY": 5725,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 159.0990257669732,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10175,
        "y": 5175,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10175,
        "pivotY": 5175,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10050,
        "y": 5300,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10050,
        "pivotY": 5300,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10050,
        "y": 5050,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10050,
        "pivotY": 5050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10050,
        "y": 4475,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10050,
        "pivotY": 4475,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10750,
        "y": 4475,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10750,
        "pivotY": 4475,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 10000,
        "y": 5700,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9925,
        "y": 5950,
        "w": 2025,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 10125,
        "y": 5950,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10125,
        "pivotY": 5950,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 3900,
        "y": 5000,
        "w": 200,
        "h": 200,
        "type": "color",
        "bgColor": "#4c1968",
        "tileColor": "#884ca0",
        "inView": false
    },
    {
        "x": 9950,
        "y": 2975,
        "w": 900,
        "h": 225,
        "type": "zone",
        "value": 8,
        "inView": false
    },
    {
        "x": 10750,
        "y": 4800,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 10750,
        "pivotY": 4800,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11350,
        "y": 5750,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11550,
        "y": 5650,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                11750,
                5475
            ],
            [
                11850,
                5475
            ],
            [
                11825,
                5575
            ],
            [
                11775,
                5575
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11750,
            "right": 11850,
            "top": 5475,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 11500,
        "y": 5252.5,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                11500,
                5250
            ],
            [
                11650,
                5250
            ],
            [
                11650,
                5400
            ],
            [
                11500,
                5400
            ]
        ],
        "speed": 150,
        "currentPoint": 3,
        "alongWith": false,
        "pointOn": {
            "x": 11500,
            "y": 5400
        },
        "pointTo": {
            "x": 11500,
            "y": 5250
        },
        "xv": 9.184850993605149e-15,
        "yv": -150,
        "inView": false
    },
    {
        "x": 11647.5,
        "y": 5250,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                11500,
                5250
            ],
            [
                11650,
                5250
            ],
            [
                11650,
                5400
            ],
            [
                11500,
                5400
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11500,
            "y": 5250
        },
        "pointTo": {
            "x": 11650,
            "y": 5250
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 11650,
        "y": 5397.5,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                11500,
                5250
            ],
            [
                11650,
                5250
            ],
            [
                11650,
                5400
            ],
            [
                11500,
                5400
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 11650,
            "y": 5250
        },
        "pointTo": {
            "x": 11650,
            "y": 5400
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 11502.5,
        "y": 5400,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                11500,
                5250
            ],
            [
                11650,
                5250
            ],
            [
                11650,
                5400
            ],
            [
                11500,
                5400
            ]
        ],
        "speed": 150,
        "currentPoint": 2,
        "alongWith": false,
        "pointOn": {
            "x": 11650,
            "y": 5400
        },
        "pointTo": {
            "x": 11500,
            "y": 5400
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 11275,
        "y": 5225,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": -1038.1000000000433,
        "rotateSpeed": -42,
        "pivotX": 11275,
        "pivotY": 5225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11275,
        "y": 5225,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": -948.1000000000417,
        "rotateSpeed": -42,
        "pivotX": 11275,
        "pivotY": 5225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11475,
        "y": 4975,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11650,
        "y": 4775,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11283.666666661138,
        "y": 4650,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                11200,
                4650
            ],
            [
                11400,
                4650
            ]
        ],
        "speed": 220,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 11400,
            "y": 4650
        },
        "pointTo": {
            "x": 11200,
            "y": 4650
        },
        "xv": -220,
        "yv": 2.694222958124177e-14,
        "inView": false
    },
    {
        "x": 11316.333333338862,
        "y": 4500,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                11200,
                4500
            ],
            [
                11400,
                4500
            ]
        ],
        "speed": 220,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 11200,
            "y": 4500
        },
        "pointTo": {
            "x": 11400,
            "y": 4500
        },
        "xv": 220,
        "yv": 0,
        "inView": false
    },
    {
        "x": 11575,
        "y": 4375,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11300,
        "y": 4200,
        "w": 100,
        "h": 50,
        "type": "breakable",
        "maxStrength": 30,
        "currentStrength": 30,
        "time": 0,
        "timer": 0,
        "regenTime": 4,
        "inView": false
    },
    {
        "x": 11475,
        "y": 4025,
        "w": 50,
        "h": 50,
        "type": "breakable",
        "maxStrength": 30,
        "currentStrength": 30,
        "time": 0,
        "timer": 0,
        "regenTime": 4,
        "inView": false
    },
    {
        "x": 11500,
        "y": 3850,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3900,
        "y": 5000,
        "w": 200,
        "h": 200,
        "type": "musicchange",
        "musicPath": "https://www.youtube.com/watch?v=DmGUZgnT1q4",
        "volume": 1,
        "startTime": 0,
        "inView": false
    },
    {
        "x": 7800,
        "y": 1800,
        "radius": 400,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 4.71238898038469,
        "startPolygon": {
            "points": [
                [
                    7800,
                    2050
                ],
                [
                    7800,
                    2200
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7800,
                    1550
                ],
                [
                    7800,
                    1400
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
        "x": 11950,
        "y": 1850,
        "w": 75,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 3700,
        "w": 450,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3500,
        "w": 200,
        "h": 200,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 8450,
        "y": 3700,
        "w": 150,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8450,
        "y": 3050,
        "w": 450,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 3050,
        "w": 450,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8750,
        "y": 3700,
        "w": 150,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 4000,
        "w": 150,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 3700,
        "w": 150,
        "h": 150,
        "type": "door",
        "id": 7,
        "active": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 3700,
        "w": 150,
        "h": 150,
        "type": "door",
        "id": 8,
        "active": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 3700,
        "w": 150,
        "h": 150,
        "type": "door",
        "id": 9,
        "active": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 3700,
        "w": 150,
        "h": 150,
        "type": "door",
        "id": 10,
        "active": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 3850,
        "w": 150,
        "h": 150,
        "type": "tp",
        "tpx": 10400,
        "tpy": 3175,
        "bgColor": "#24324c",
        "tileColor": "#3c5f8c",
        "changeColor": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 3500,
        "w": 450,
        "h": 200,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 8250,
        "y": 3050,
        "w": 200,
        "h": 450,
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
        "x": 8450,
        "y": 3500,
        "w": 450,
        "h": 200,
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
        "x": 8250,
        "y": 3700,
        "w": 200,
        "h": 450,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 8350,
        "y": 2800,
        "w": 550,
        "h": 250,
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
        "x": 7800,
        "y": 2800,
        "w": 550,
        "h": 250,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 7550,
        "y": 3050,
        "w": 250,
        "h": 500,
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
        "x": 7550,
        "y": 3550,
        "w": 250,
        "h": 600,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 7800,
        "y": 4150,
        "w": 550,
        "h": 250,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": -500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 8350,
        "y": 4150,
        "w": 550,
        "h": 250,
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
        "x": 8900,
        "y": 3050,
        "w": 250,
        "h": 550,
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
        "x": 8900,
        "y": 3600,
        "w": 250,
        "h": 550,
        "type": "grav",
        "force": 500,
        "dir": {
            "x": 0,
            "y": 500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 8619.966666664455,
        "y": 3500,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8450,
                3500
            ],
            [
                8800,
                3500
            ]
        ],
        "speed": 122,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 8450,
            "y": 3500
        },
        "pointTo": {
            "x": 8800,
            "y": 3500
        },
        "xv": 122,
        "yv": 0,
        "inView": false
    },
    {
        "x": 8630.033333335545,
        "y": 3600,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8450,
                3600
            ],
            [
                8800,
                3600
            ]
        ],
        "speed": 122,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 8800,
            "y": 3600
        },
        "pointTo": {
            "x": 8450,
            "y": 3600
        },
        "xv": -122,
        "yv": 1.494069094959771e-14,
        "inView": false
    },
    {
        "x": 7980.033333335545,
        "y": 3500,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                7800,
                3500
            ],
            [
                8150,
                3500
            ]
        ],
        "speed": 122,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 8150,
            "y": 3500
        },
        "pointTo": {
            "x": 7800,
            "y": 3500
        },
        "xv": -122,
        "yv": 1.494069094959771e-14,
        "inView": false
    },
    {
        "x": 7969.966666664455,
        "y": 3600,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                7800,
                3600
            ],
            [
                8150,
                3600
            ]
        ],
        "speed": 122,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7800,
            "y": 3600
        },
        "pointTo": {
            "x": 8150,
            "y": 3600
        },
        "xv": 122,
        "yv": 0,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3230.0333333313984,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8250,
                3050
            ],
            [
                8250,
                3400
            ]
        ],
        "speed": 122,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 8250,
            "y": 3400
        },
        "pointTo": {
            "x": 8250,
            "y": 3050
        },
        "xv": 7.470345474798855e-15,
        "yv": -122,
        "inView": false
    },
    {
        "x": 8350,
        "y": 3219.9666666686016,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8350,
                3050
            ],
            [
                8350,
                3400
            ]
        ],
        "speed": 122,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 8350,
            "y": 3050
        },
        "pointTo": {
            "x": 8350,
            "y": 3400
        },
        "xv": 7.470345474798855e-15,
        "yv": 122,
        "inView": false
    },
    {
        "x": 8350,
        "y": 3880.0333333313984,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8350,
                3700
            ],
            [
                8350,
                4050
            ]
        ],
        "speed": 122,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 8350,
            "y": 4050
        },
        "pointTo": {
            "x": 8350,
            "y": 3700
        },
        "xv": 7.470345474798855e-15,
        "yv": -122,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3869.9666666686016,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                8250,
                3700
            ],
            [
                8250,
                4050
            ]
        ],
        "speed": 122,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 8250,
            "y": 3700
        },
        "pointTo": {
            "x": 8250,
            "y": 4050
        },
        "xv": 7.470345474798855e-15,
        "yv": 122,
        "inView": false
    },
    {
        "points": [
            [
                9150,
                4150
            ],
            [
                9150,
                4400
            ],
            [
                8900,
                4400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8900,
            "right": 9150,
            "top": 4150,
            "bottom": 4400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7550,
                4150
            ],
            [
                7800,
                4400
            ],
            [
                7550,
                4400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7550,
            "right": 7800,
            "top": 4150,
            "bottom": 4400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7550,
                2800
            ],
            [
                7800,
                2800
            ],
            [
                7550,
                3050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7550,
            "right": 7800,
            "top": 2800,
            "bottom": 3050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8900,
                2800
            ],
            [
                9150,
                2800
            ],
            [
                9150,
                3050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8900,
            "right": 9150,
            "top": 2800,
            "bottom": 3050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                11950,
                5700
            ],
            [
                11950,
                5950
            ],
            [
                11700,
                5950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11700,
            "right": 11950,
            "top": 5700,
            "bottom": 5950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2200,
        "y": 1232,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                2200,
                1100
            ],
            [
                2200,
                1350
            ]
        ],
        "speed": 120,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2200,
            "y": 1350
        },
        "pointTo": {
            "x": 2200,
            "y": 1100
        },
        "xv": 7.34788079488412e-15,
        "yv": -120,
        "inView": false
    },
    {
        "x": 2200,
        "y": 1482,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                2200,
                1350
            ],
            [
                2200,
                1600
            ]
        ],
        "speed": 120,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2200,
            "y": 1600
        },
        "pointTo": {
            "x": 2200,
            "y": 1350
        },
        "xv": 7.34788079488412e-15,
        "yv": -120,
        "inView": false
    },
    {
        "x": 2200,
        "y": 1732,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                2200,
                1600
            ],
            [
                2200,
                1850
            ]
        ],
        "speed": 120,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2200,
            "y": 1850
        },
        "pointTo": {
            "x": 2200,
            "y": 1600
        },
        "xv": 7.34788079488412e-15,
        "yv": -120,
        "inView": false
    },
    {
        "x": 1900,
        "y": 550,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2500,
        "y": 1668,
        "w": 100,
        "h": 450,
        "type": "lavamove",
        "points": [
            [
                2500,
                1550
            ],
            [
                2500,
                1700
            ]
        ],
        "speed": 120,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2500,
            "y": 1550
        },
        "pointTo": {
            "x": 2500,
            "y": 1700
        },
        "xv": 7.34788079488412e-15,
        "yv": 120,
        "inView": false
    },
    {
        "x": 2500,
        "y": 768,
        "w": 100,
        "h": 450,
        "type": "lavamove",
        "points": [
            [
                2500,
                650
            ],
            [
                2500,
                800
            ]
        ],
        "speed": 120,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2500,
            "y": 650
        },
        "pointTo": {
            "x": 2500,
            "y": 800
        },
        "xv": 7.34788079488412e-15,
        "yv": 120,
        "inView": false
    },
    {
        "x": 2475,
        "y": 50,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2475,
        "y": 75,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5450,
        "y": 800,
        "r": 350,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 350,
        "inView": false
    },
    {
        "x": 1875,
        "y": 575,
        "w": 800,
        "h": 425,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1825,
        "y": 1800,
        "w": 800,
        "h": 425,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2550,
                1325
            ],
            [
                2625,
                1400
            ],
            [
                2550,
                1475
            ],
            [
                2475,
                1400
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2475,
            "right": 2625,
            "top": 1325,
            "bottom": 1475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1500,
        "y": 5550,
        "radius": 202,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1900,
        "y": 5550,
        "radius": 202,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2300,
        "y": 5550,
        "radius": 202,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1500,
        "y": 4650,
        "radius": 202,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1900,
        "y": 4650,
        "radius": 202,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2300,
        "y": 4650,
        "radius": 200,
        "type": "circle-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.3161255787892263,
        "startPolygon": {
            "points": [
                [
                    2300,
                    4650
                ],
                [
                    2300,
                    4850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2300,
                    4650
                ],
                [
                    2103.0384493975585,
                    4615.2703644666135
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1100,
        "y": 4650,
        "radius": 200,
        "type": "circle-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1100,
                    4650
                ],
                [
                    1300,
                    4650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1100,
                    4650
                ],
                [
                    1100,
                    4850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1100,
        "y": 5550,
        "radius": 200,
        "type": "circle-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    1100,
                    5550
                ],
                [
                    1100,
                    5350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1100,
                    5550
                ],
                [
                    1300,
                    5550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                1100,
                5350
            ],
            [
                1100,
                5550
            ],
            [
                900,
                5550
            ]
        ],
        "type": "poly",
        "most": {
            "left": 900,
            "right": 1100,
            "top": 5350,
            "bottom": 5550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                900,
                4650
            ],
            [
                1100,
                4650
            ],
            [
                1100,
                4850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 900,
            "right": 1100,
            "top": 4650,
            "bottom": 4850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2300,
                4675
            ],
            [
                2300,
                5000
            ],
            [
                2125,
                4750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2125,
            "right": 2300,
            "top": 4675,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2300,
                5200
            ],
            [
                2300,
                5525
            ],
            [
                2125,
                5450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2125,
            "right": 2300,
            "top": 5200,
            "bottom": 5525
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2900,
        "y": 5000,
        "w": 100,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.25,
        "inView": false
    },
    {
        "points": [
            [
                3900,
                5200
            ],
            [
                3950,
                5250
            ],
            [
                3850,
                5250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3850,
            "right": 3950,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3850,
                4950
            ],
            [
                3950,
                4950
            ],
            [
                3900,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3850,
            "right": 3950,
            "top": 4950,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4000,
                5200
            ],
            [
                4050,
                5250
            ],
            [
                3950,
                5250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3950,
            "right": 4050,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4100,
                5200
            ],
            [
                4150,
                5250
            ],
            [
                4050,
                5250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4050,
            "right": 4150,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3950,
                4950
            ],
            [
                4050,
                4950
            ],
            [
                4000,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3950,
            "right": 4050,
            "top": 4950,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4050,
                4950
            ],
            [
                4150,
                4950
            ],
            [
                4100,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4050,
            "right": 4150,
            "top": 4950,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 0,
        "y": 1800,
        "w": 6000,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8050,
                1550
            ],
            [
                8300,
                1550
            ],
            [
                8300,
                1600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8050,
            "right": 8300,
            "top": 1550,
            "bottom": 1600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8300,
                2000
            ],
            [
                8300,
                2050
            ],
            [
                8050,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8050,
            "right": 8300,
            "top": 2000,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8600,
                2000
            ],
            [
                8600,
                2050
            ],
            [
                8400,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8400,
            "right": 8600,
            "top": 2000,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8875,
                2000
            ],
            [
                8875,
                2050
            ],
            [
                8700,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8700,
            "right": 8875,
            "top": 2000,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8700,
                1550
            ],
            [
                8875,
                1550
            ],
            [
                8875,
                1600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8700,
            "right": 8875,
            "top": 1550,
            "bottom": 1600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8400,
                1550
            ],
            [
                8600,
                1550
            ],
            [
                8600,
                1600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8400,
            "right": 8600,
            "top": 1550,
            "bottom": 1600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8975,
                1550
            ],
            [
                9225,
                1550
            ],
            [
                8975,
                1600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8975,
            "right": 9225,
            "top": 1550,
            "bottom": 1600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8975,
                2000
            ],
            [
                9225,
                2050
            ],
            [
                8975,
                2050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8975,
            "right": 9225,
            "top": 2000,
            "bottom": 2050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9250,
        "y": 1750,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9350,
        "y": 1550,
        "w": 200,
        "h": 500,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9550,
        "y": 1550,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9550,
        "y": 1950,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9650,
        "y": 1550,
        "w": 200,
        "h": 500,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9850,
        "y": 1600,
        "w": 100,
        "h": 200,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9950,
        "y": 1700,
        "w": 100,
        "h": 200,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10050,
        "y": 1800,
        "w": 100,
        "h": 200,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10150,
        "y": 1900,
        "w": 100,
        "h": 150,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10250,
        "y": 2000,
        "w": 450,
        "h": 50,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10350,
        "y": 1750,
        "w": 500,
        "h": 150,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10700,
        "y": 1900,
        "w": 150,
        "h": 150,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10350,
        "y": 1550,
        "w": 150,
        "h": 200,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 10500,
        "y": 1550,
        "w": 450,
        "h": 100,
        "type": "grav",
        "force": 1800,
        "dir": {
            "x": 1800,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 9250,
        "y": 1850,
        "w": 100,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9850,
        "y": 1800,
        "w": 100,
        "h": 250,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9850,
        "y": 1550,
        "w": 500,
        "h": 50,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9950,
        "y": 1600,
        "w": 400,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10050,
        "y": 1700,
        "w": 300,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10150,
        "y": 1800,
        "w": 200,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9950,
        "y": 1900,
        "w": 100,
        "h": 150,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10050,
        "y": 2000,
        "w": 100,
        "h": 50,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10250,
        "y": 1900,
        "w": 450,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10850,
        "y": 1650,
        "w": 100,
        "h": 400,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10500,
        "y": 1650,
        "w": 350,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9350,
        "y": 400,
        "w": 100,
        "h": 200,
        "type": "breakable",
        "maxStrength": 20,
        "currentStrength": 20,
        "time": 0,
        "timer": 0,
        "regenTime": 5,
        "inView": false
    },
    {
        "points": [
            [
                9450,
                100
            ],
            [
                9450,
                500
            ],
            [
                9250,
                300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9250,
            "right": 9450,
            "top": 100,
            "bottom": 500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9150,
                350
            ],
            [
                9400,
                600
            ],
            [
                9150,
                600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9150,
            "right": 9400,
            "top": 350,
            "bottom": 600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9150,
                0
            ],
            [
                9400,
                0
            ],
            [
                9150,
                250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9150,
            "right": 9400,
            "top": 0,
            "bottom": 250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9650,
        "y": 0,
        "w": 100,
        "h": 150,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9850,
        "y": 200,
        "w": 100,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 9650,
        "y": 450,
        "w": 100,
        "h": 150,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10150,
        "y": 350,
        "w": 100,
        "h": 250,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 10150,
        "y": 0,
        "w": 100,
        "h": 250,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 11650,
        "y": 450,
        "w": 300,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11650,
        "y": 0,
        "w": 300,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11700,
        "y": 400,
        "w": 275,
        "h": 50,
        "type": "rotate-normal",
        "angle": 1532.433333333299,
        "rotateSpeed": 62,
        "pivotX": 11700,
        "pivotY": 400,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 139.75424859373686,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11700,
        "y": 200,
        "w": 275,
        "h": 50,
        "type": "rotate-normal",
        "angle": -1532.433333333299,
        "rotateSpeed": -62,
        "pivotX": 11700,
        "pivotY": 200,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 139.75424859373686,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11700,
        "y": 200,
        "r": 15,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 15,
        "inView": false
    },
    {
        "x": 11850,
        "y": 200,
        "r": 15,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 15,
        "inView": false
    },
    {
        "x": 11850,
        "y": 400,
        "r": 15,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 15,
        "inView": false
    },
    {
        "x": 11700,
        "y": 400,
        "r": 15,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 15,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3500,
        "w": 50,
        "h": 200,
        "type": "breakable",
        "maxStrength": 25,
        "currentStrength": 25,
        "time": 0,
        "timer": 0,
        "regenTime": 20,
        "inView": false
    },
    {
        "x": 8400,
        "y": 3500,
        "w": 50,
        "h": 200,
        "type": "breakable",
        "maxStrength": 25,
        "currentStrength": 25,
        "time": 0,
        "timer": 0,
        "regenTime": 20,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3500,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 25,
        "currentStrength": 25,
        "time": 0,
        "timer": 0,
        "regenTime": 20,
        "inView": false
    },
    {
        "x": 8250,
        "y": 3650,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 25,
        "currentStrength": 25,
        "time": 0,
        "timer": 0,
        "regenTime": 20,
        "inView": false
    },
    {
        "points": [
            [
                350,
                2550
            ],
            [
                400,
                2650
            ],
            [
                350,
                2650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 350,
            "right": 400,
            "top": 2550,
            "bottom": 2650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                500,
                2550
            ],
            [
                500,
                2650
            ],
            [
                450,
                2650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 450,
            "right": 500,
            "top": 2550,
            "bottom": 2650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 350,
        "y": 2650,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 450,
        "y": 2650,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11175,
        "y": 375,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11175,
        "y": 275,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11275,
        "y": 425,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11275,
        "y": 525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11375,
        "y": 275,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11375,
        "y": 175,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11475,
        "y": 200,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11475,
        "y": 400,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11475,
        "y": 300,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 800,
        "y": 3693.383333333886,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                800,
                3500
            ],
            [
                800,
                3750
            ]
        ],
        "speed": 83,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 800,
            "y": 3750
        },
        "pointTo": {
            "x": 800,
            "y": 3500
        },
        "xv": 5.082284216461516e-15,
        "yv": -83,
        "inView": false
    },
    {
        "points": [
            [
                100,
                3850
            ],
            [
                800,
                3850
            ],
            [
                700,
                4100
            ],
            [
                200,
                4100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 800,
            "top": 3850,
            "bottom": 4100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                725,
                4038
            ],
            [
                800,
                4150
            ],
            [
                700,
                4250
            ],
            [
                700,
                4100
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 800,
            "top": 4038,
            "bottom": 4250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 11475,
        "y": 5050,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 11425,
        "y": 4975,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 11600,
        "y": 5350,
        "w": 100,
        "h": 100,
        "type": "rotate-normal",
        "angle": 2224.5,
        "rotateSpeed": 90,
        "pivotX": 11600,
        "pivotY": 5350,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 70.71067811865476,
        "unSim": 51.2666666666644,
        "inView": false
    },
    {
        "x": 11275,
        "y": 5225,
        "radius": 63,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                11575,
                4800
            ],
            [
                11725,
                4800
            ],
            [
                11650,
                4950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 11575,
            "right": 11725,
            "top": 4800,
            "bottom": 4950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 11050,
        "y": 3750,
        "w": 50,
        "h": 1850,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 11900,
        "y": 3750,
        "w": 50,
        "h": 1950,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6.616666666653055,
        "y": 3650,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                0,
                3650
            ],
            [
                150,
                3650
            ]
        ],
        "speed": 83,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 0,
            "y": 3650
        },
        "pointTo": {
            "x": 150,
            "y": 3650
        },
        "xv": 83,
        "yv": 0,
        "inView": false
    },
    {
        "points": [
            [
                450,
                3500
            ],
            [
                800,
                3850
            ],
            [
                100,
                3850
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 100,
            "right": 800,
            "top": 3500,
            "bottom": 3850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4162.5,
        "y": 1275,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 450,
        "y": 3400,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                4200,
                3750
            ],
            [
                4400,
                3750
            ],
            [
                4200,
                3950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4200,
            "right": 4400,
            "top": 3750,
            "bottom": 3950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                3400
            ],
            [
                900,
                3500
            ],
            [
                800,
                3600
            ],
            [
                700,
                3500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 900,
            "top": 3400,
            "bottom": 3600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 0,
        "y": 450,
        "w": 100,
        "h": 100,
        "type": "zone",
        "value": 1,
        "inView": true
    },
    {
        "points": [
            [
                50,
                1500
            ],
            [
                1000,
                1500
            ],
            [
                1250,
                1800
            ],
            [
                50,
                1800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 50,
            "right": 1250,
            "top": 1500,
            "bottom": 1800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                50,
                1000
            ],
            [
                1250,
                1000
            ],
            [
                1000,
                1300
            ],
            [
                50,
                1300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 50,
            "right": 1250,
            "top": 1000,
            "bottom": 1300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 900,
        "y": 1400,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 775,
        "y": 1425,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                800,
                1300
            ],
            [
                1000,
                1300
            ],
            [
                950,
                1350
            ],
            [
                850,
                1350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1000,
            "top": 1300,
            "bottom": 1350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                850,
                1450
            ],
            [
                950,
                1450
            ],
            [
                1000,
                1500
            ],
            [
                800,
                1500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1000,
            "top": 1450,
            "bottom": 1500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 625,
        "y": 1325,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 575,
        "y": 1425,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 375,
        "y": 1425,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 425,
        "y": 1375,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 275,
        "y": 1425,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 675,
        "y": 1475,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 525,
        "y": 1325,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 475,
        "y": 1475,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 325,
        "y": 1325,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 50,
        "y": 1300,
        "w": 200,
        "h": 200,
        "type": "coindoor",
        "coins": 10,
        "currentCoins": 10,
        "inView": false
    },
    {
        "x": 250,
        "y": 1475,
        "w": 50,
        "h": 25,
        "type": "tp",
        "tpx": 925,
        "tpy": 1400,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 250,
        "y": 1300,
        "w": 50,
        "h": 25,
        "type": "tp",
        "tpx": 925,
        "tpy": 1400,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 4300,
        "y": 1100,
        "w": 50,
        "h": 50,
        "type": "coin",//"tp",
        "tpx": 2800,
        "tpy": 3025,
        "bgColor": "#588293",
        "tileColor": "#b6becd",
        "changeColor": false,
        "inView": false,
        // added
        "collected": false,
    },
    {
        "x": 2700,
        "y": 3050,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 200,
        "currentStrength": 200,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "points": [
            [
                2475,
                3100
            ],
            [
                2500,
                3150
            ],
            [
                2450,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2450,
            "right": 2500,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2525,
                3100
            ],
            [
                2550,
                3150
            ],
            [
                2500,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2500,
            "right": 2550,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2575,
                3100
            ],
            [
                2600,
                3150
            ],
            [
                2550,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2550,
            "right": 2600,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2625,
                3100
            ],
            [
                2650,
                3150
            ],
            [
                2600,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2600,
            "right": 2650,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2425,
                3100
            ],
            [
                2450,
                3150
            ],
            [
                2400,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2400,
            "right": 2450,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2775,
                3100
            ],
            [
                2800,
                3150
            ],
            [
                2750,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2750,
            "right": 2800,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2725,
                3100
            ],
            [
                2750,
                3150
            ],
            [
                2700,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2700,
            "right": 2750,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2675,
                3100
            ],
            [
                2700,
                3150
            ],
            [
                2650,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2650,
            "right": 2700,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2825,
                3100
            ],
            [
                2850,
                3150
            ],
            [
                2800,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2800,
            "right": 2850,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2875,
                3100
            ],
            [
                2900,
                3150
            ],
            [
                2850,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2850,
            "right": 2900,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2925,
                3100
            ],
            [
                2950,
                3150
            ],
            [
                2900,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2900,
            "right": 2950,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2975,
                3100
            ],
            [
                3000,
                3150
            ],
            [
                2950,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2950,
            "right": 3000,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3025,
                3100
            ],
            [
                3050,
                3150
            ],
            [
                3000,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3000,
            "right": 3050,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3075,
                3100
            ],
            [
                3100,
                3150
            ],
            [
                3050,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3050,
            "right": 3100,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3125,
                3100
            ],
            [
                3150,
                3150
            ],
            [
                3100,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3100,
            "right": 3150,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3175,
                3100
            ],
            [
                3200,
                3150
            ],
            [
                3150,
                3150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3150,
            "right": 3200,
            "top": 3100,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2450,
        "y": 2975,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2950,
        "y": 2975,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2450,
        "y": 2825,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2950,
        "y": 2825,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2450,
        "y": 2650,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2950,
        "y": 2650,
        "w": 200,
        "h": 50,
        "type": "breakable",
        "maxStrength": 40,
        "currentStrength": 40,
        "time": 0,
        "timer": 0,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 2800,
        "y": 2850,
        "radius": 84,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4275,
        "y": 975,
        "w": 100,
        "h": 225,
        "type": "trans",
        "collide": false,
        "opaq": 1,
        "inView": false
    },
    {
        "x": 4275,
        "y": 975,
        "w": 125,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 350,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 10900/2,
        "y": 2700/2,
        "w": 1100/2,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
]

var poses = [
    {x: 3800, y: 0},
    {
        "x": 4900,
        "y": 1100
    },
    {
        "x": 5100,
        "y": 1100
    },
    {
        "x": 5100,
        "y": 500
    },
    {
        "x": 5700,
        "y": 0
    }
]

for(let i = 0; i < poses.length; i++){
    obs.push({
        "x": poses[i].x/2,
        "y": poses[i].y/2,
        "radius": i < 2 ? 112 : 55,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },)
}

var typeMap = {
    'normal': {
        type: [1,[],[0]],
    },
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
    // 'trans': {
    //     type: [1,[],[20]],
    //     customMap: () => {
    //         return {hex: '#000000'}
    //     }
    // },
    'block': {
        type: [1,[],[20]],
        customMap: (params) => {
            return {hex: params.color};
        }
    },
    'circle-normal': {
        type: [0,[],[0]],
        radius: 'r' // this means map radius to r
        // all other params filled in 1:1, so x will be filled in from x, y from y, etc.
    },
    'circle-lava': {
        type: [0,[],lavaType],
        radius: 'r',
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
        customMap: (params) => {
            if(params.canCollide === false){
                return {type: [1,[],[1]]};
            }
            const upper = {
                "x": 11793.206102995191,
                "y": 5413.695972970335
            };
            const lower = {
                "x": 13407.869308854297,
                "y": 6437.125547622557
            }
            const x = params.x * 2;
            const y = params.y * 2;
            if(x > upper.x && x < lower.x && y > upper.y && y < lower.y){
                return {type: [1,[],[0,1]]};
            }
            return {type: [1,[],lavaType]};
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
    'poly-lava': {
        type: [2,[],lavaType],
        customMap: (params) => {
            const p = {points: []};
            for(let i = 0; i < params.points.length; i++){
                p.points.push([
                    params.points[i][0]*2,
                    params.points[i][1]*2
                ])
            }
            const upper = {
                "x": 11793.206102995191,
                "y": 5413.695972970335
            };
            const lower = {
                "x": 13407.869308854297,
                "y": 6437.125547622557
            }

            const upper2 = {
                "x": 8809.477705153893,
                "y": 5885.871786067637
            }
            const lower2 = {
                "x": 8982.848374859475,
                "y": 6257.883149949322
            }
            const x = params.points[0][0] * 2;
            const y = params.points[0][1] * 2;
            if(x > upper.x && x < lower.x && y > upper.y && y < lower.y){
                p.type = [2,[],[0,1]];
            } else if(x > upper2.x && x < lower2.x && y > upper2.y && y < lower2.y){
                p.type = [2,[],[0,1]];
            }
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

            if(params.collidable) p.type = [1,[0],lavaType]
            else p.type = [1,[0],[1]]
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
        type: [0,[],lavaType],
        customMap: (params) => {
            return {r: Math.min(params.radius, params.radius2)*2};
        }
    },
    'safe': {
        type: [1,[],[11]],
    },
    'circle-safe': {
        type: [0,[],[11]],
        r: 'r'
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
            return {bounciness: params.effect/3 / 10, decay: 0.5};
        }
    },
    'rotate-normal': {
        type: [1,[1],[0]],
        customMap: (params) => {
            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle * 180 / Math.PI,
                rotateSpeed: params.rotateSpeed / 360 / 220,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2
            };
        }
    },
    'rotate-lava': {
        type: [1,[1],[0,1]],
        customMap: (params) => {
            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle * 180 / Math.PI,
                rotateSpeed: params.rotateSpeed / 360 / 220,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2
            };
        }
    },
    'rotatingsafe': {
        type: [1,[1],[11]],
        customMap: (params) => {
            return {
                x: params.x * 2 - params.w,
                y: params.y * 2 - params.h,
                initialRotation: params.angle * 180 / Math.PI,
                rotateSpeed: params.rotateSpeed / 360 / 220,
                pivotX: params.pivotX * 2,
                pivotY: params.pivotY * 2
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
                    initialRotation: params.angle * 1.5,
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
                maxStrength: params.maxStrength * 1000 / 60,
                regenTime: params.regenTime * 1000 / 15,
                healSpeed: 1
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
        var xv${counter} = ${params.xv/42};
        var yv${counter} = ${params.yv/42};
        C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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

var safes = [
    {
        "x": 3300,
        "y": 500,
        "w": 100,
        "h": 50,
        "renderAbove": false
    }
].map(p => {
    p.type = "safe";
    return p;
});

var texts = [
    {
        "x": 375,
        "y": 225,
        "angle": 0,
        "text": "No Pressure.",
        "size": 30,
        "story": false
    },
    {
        "x": 4700,
        "y": 4900,
        "angle": 0,
        "text": "Plinko!",
        "size": 63,
        "story": false
    },
    {
        "x": 3700,
        "y": 5100,
        "angle": 0,
        "text": "RESIST!",
        "size": 36,
        "story": false
    },
    {
        "x": 4275,
        "y": 5800,
        "angle": 0,
        "text": "Parkour!",
        "size": 30,
        "story": false
    },
    {
        "x": 4475,
        "y": 5800,
        "angle": 0,
        "text": "Platform!",
        "size": 30,
        "story": false
    },
    {
        "x": 4675,
        "y": 5825,
        "angle": 0,
        "text": "Again!",
        "size": 30,
        "story": false
    },
    {
        "x": 4675,
        "y": 5800,
        "angle": 0,
        "text": "Shoot",
        "size": 30,
        "story": false
    },
    {
        "x": 4875,
        "y": 5800,
        "angle": 0,
        "text": "Obstacle",
        "size": 30,
        "story": false
    },
    {
        "x": 4875,
        "y": 5825,
        "angle": 0,
        "text": "Course!",
        "size": 30,
        "story": false
    },
    {
        "x": 5075,
        "y": 5825,
        "angle": 0,
        "text": "1000 coins!",
        "size": 30,
        "story": false
    },
    {
        "x": 5075,
        "y": 5800,
        "angle": 0,
        "text": "Isle of",
        "size": 30,
        "story": false
    },
    {
        "x": 5375,
        "y": 1275,
        "angle": 0,
        "text": "Platform!",
        "size": 32,
        "story": false
    },
    {
        "x": 2525,
        "y": 5100,
        "angle": 90,
        "text": "->",
        "size": 50,
        "story": false
    },
    {
        "x": 3225,
        "y": 5100,
        "angle": -90,
        "text": "->",
        "size": 50,
        "story": false
    },
    {
        "x": 11475,
        "y": 4962.5,
        "angle": 90,
        "text": ":)",
        "size": 30,
        "story": true
    },
    {
        "x": 437.5,
        "y": 3387.5,
        "angle": 0,
        "text": "Press ",
        "size": 30,
        "story": false
    },
    {
        "x": 487.5,
        "y": 3387.5,
        "angle": -90,
        "text": "->",
        "size": 30,
        "story": false
    },
    {
        "x": 450,
        "y": 3412.5,
        "angle": 0,
        "text": "To Wait.",
        "size": 30,
        "story": false
    },
    {
        "x": 16700/2,
        "y": 7200/2-12.5,
        "angle": 0,
        "text": "This area resets your coins!",
        "size": 30,
        "story": false
    },
    {
        "x": 16700/2,
        "y": 7200/2+12.5,
        "angle": 0,
        "text": "Try to open the coindoor! Good luck!",
        "size": 30,
        "story": false
    },
].map(p => {
    p.type = "text";
    return p;
});

var enemies = [
    {
        "type": "normal",
        "angle": 3.1204117230980084,
        "radius": 12,
        "speed": 98,
        "x": 3631.6999719140244,
        "y": 410.1658060987881,
        "renderX": 3631.6999719140244,
        "renderY": 410.1658060987881,
        "xv": 97.97801786283388,
        "yv": 2.075575985167485,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 0.8414860639552842,
        "radius": 12,
        "speed": 98,
        "x": 3820.30812252683,
        "y": 709.2825721367578,
        "renderX": 3820.30812252683,
        "renderY": 709.2825721367578,
        "xv": -65.30283919019776,
        "yv": -73.07215060266923,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 1.7590797634783395,
        "radius": 12,
        "speed": 98,
        "x": 3439.1906243387766,
        "y": 453.9706018162887,
        "renderX": 3439.1906243387766,
        "renderY": 453.9706018162887,
        "xv": 18.34294862106065,
        "yv": -96.26804368992407,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 4.1139753075758945,
        "radius": 12,
        "speed": 98,
        "x": 3456.7849500986895,
        "y": 314.62412531414327,
        "renderX": 3456.7849500986895,
        "renderY": 314.62412531414327,
        "xv": 55.20658609502695,
        "yv": 80.9705678115967,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 1.663954722197265,
        "radius": 12,
        "speed": 98,
        "x": 3832.781092762762,
        "y": 598.0502045332387,
        "renderX": 3832.781092762762,
        "renderY": 598.0502045332387,
        "xv": -9.116323404725087,
        "yv": -97.57506160684943,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 1.9224470759921193,
        "radius": 12,
        "speed": 98,
        "x": 3474.384050357829,
        "y": 293.9199884067906,
        "renderX": 3474.384050357829,
        "renderY": 293.9199884067906,
        "xv": 33.75590481431235,
        "yv": 92.00292870429226,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 1.4291545516674957,
        "radius": 12,
        "speed": 98,
        "x": 3808.420643421313,
        "y": 647.8481559371359,
        "renderX": 3808.420643421313,
        "renderY": 647.8481559371359,
        "xv": 13.834526508637982,
        "yv": -97.01858521067906,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 1.9639715979733272,
        "radius": 12,
        "speed": 98,
        "x": 3438.2520397215744,
        "y": 358.81487084607545,
        "renderX": 3438.2520397215744,
        "renderY": 358.81487084607545,
        "xv": 37.546086406091135,
        "yv": 90.52232539869013,
        "bound": {
            "x": 3400,
            "y": 250,
            "w": 550,
            "h": 550
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "turret",
        "angle": 5.025084654883073,
        "shootSpeed": 1,
        "timer": 0.175000000000007,
        "pRadius": 20,
        "pSpeed": 100,
        "projectiles": [
            {
                "x": 4275.757437626538,
                "y": 509.977463082639,
                "angle": 0.6632251157578452
            },
            {
                "x": 4197.613037893901,
                "y": 448.9243667795079,
                "angle": 0.6632251157578452
            },
            {
                "x": 4118.811962533257,
                "y": 387.35821924693875,
                "angle": 0.6632251157578452
            },
            {
                "x": 4040.0108871725756,
                "y": 325.79207171436957,
                "angle": 0.6632251157578452
            }
        ],
        "shootDirections": [
            0.6632251157578452
        ],
        "csd": 0,
        "deadProjectiles": [],
        "radius": 24.5,
        "speed": 0,
        "x": 3975,
        "y": 275,
        "renderX": 3975,
        "renderY": 275,
        "xv": 0,
        "yv": 0,
        "bound": {
            "x": 3950,
            "y": 250,
            "w": 350,
            "h": 550
        },
        "inView": false
    },
    {
        "type": "turret",
        "angle": 3.0689277152507137,
        "shootSpeed": 1,
        "timer": 0.175000000000007,
        "pRadius": 20,
        "pSpeed": 100,
        "projectiles": [
            {
                "x": 4575.757437626455,
                "y": 540.022536917387,
                "angle": -0.6632251157578452
            },
            {
                "x": 4497.613037893817,
                "y": 601.0756332205113,
                "angle": -0.6632251157578452
            },
            {
                "x": 4418.811962533174,
                "y": 662.6417807530737,
                "angle": -0.6632251157578452
            },
            {
                "x": 4340.010887172531,
                "y": 724.2079282856361,
                "angle": -0.6632251157578452
            }
        ],
        "shootDirections": [
            -0.6632251157578452
        ],
        "csd": 0,
        "deadProjectiles": [],
        "radius": 24.5,
        "speed": 0,
        "x": 4275,
        "y": 775,
        "renderX": 4275,
        "renderY": 775,
        "xv": 0,
        "yv": 0,
        "bound": {
            "x": 4250,
            "y": 250,
            "w": 350,
            "h": 550
        },
        "inView": false
    },
    {
        "type": "turret",
        "angle": 5.075624469131379,
        "shootSpeed": 1,
        "timer": 0.175000000000007,
        "pRadius": 20,
        "pSpeed": 100,
        "projectiles": [
            {
                "x": 4875.757437626455,
                "y": 509.977463082639,
                "angle": 0.6632251157578452
            },
            {
                "x": 4797.613037893817,
                "y": 448.9243667795079,
                "angle": 0.6632251157578452
            },
            {
                "x": 4718.811962533174,
                "y": 387.35821924693875,
                "angle": 0.6632251157578452
            },
            {
                "x": 4640.010887172531,
                "y": 325.79207171436957,
                "angle": 0.6632251157578452
            }
        ],
        "shootDirections": [
            0.6632251157578452
        ],
        "csd": 0,
        "deadProjectiles": [],
        "radius": 24.5,
        "speed": 0,
        "x": 4575,
        "y": 275,
        "renderX": 4575,
        "renderY": 275,
        "xv": 0,
        "yv": 0,
        "bound": {
            "x": 4550,
            "y": 250,
            "w": 350,
            "h": 550
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 4.276012327226416,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1218.6509659132764,
        "y": 5043.727697450428,
        "renderX": 1218.6509659132764,
        "renderY": 5043.727697450428,
        "xv": -42.6885031628821,
        "yv": 91.53519376563642,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 1.7488210687512207,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1320.9302755849503,
        "y": 4905.569503923988,
        "renderX": 1320.9302755849503,
        "renderY": 4905.569503923988,
        "xv": -17.885673906955287,
        "yv": -99.4037356888264,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 2.8108662291862,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1395.0317957120942,
        "y": 5212.8446251811665,
        "renderX": 1395.0317957120942,
        "renderY": 5212.8446251811665,
        "xv": -95.5264768187534,
        "yv": 32.79774727928995,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 1.0902647553440126,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 2183.6409027413547,
        "y": 5412.741518892876,
        "renderX": 2183.6409027413547,
        "renderY": 5412.741518892876,
        "xv": 46.687311756980336,
        "yv": -89.56168221346965,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 2.6575755005250703,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1505.1441213126323,
        "y": 5147.7695541237845,
        "renderX": 1505.1441213126323,
        "renderY": 5147.7695541237845,
        "xv": 89.39840605313339,
        "yv": 46.99920206938714,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 4.2892257881262985,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1119.9309744619507,
        "y": 5052.522777953013,
        "renderX": 1119.9309744619507,
        "renderY": 5052.522777953013,
        "xv": -41.47531509714495,
        "yv": 92.09124951694672,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 0.4329650127175159,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1637.2819620207074,
        "y": 5365.215996397563,
        "renderX": 1637.2819620207074,
        "renderY": 5365.215996397563,
        "xv": -91.68029860502355,
        "yv": 42.37597016817099,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 2.5173811427517085,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1230.6650062888607,
        "y": 5418.118726626062,
        "renderX": 1230.6650062888607,
        "renderY": 5418.118726626062,
        "xv": -81.95384523239923,
        "yv": -59.03022320493082,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 3.8912355297169556,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1518.4608006081353,
        "y": 4928.309514784522,
        "renderX": 1518.4608006081353,
        "renderY": 4928.309514784522,
        "xv": -73.9251574200469,
        "yv": -68.81911871290772,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 3.9791937007987843,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1339.3288724653705,
        "y": 4908.804112613988,
        "renderX": 1339.3288724653705,
        "renderY": 4908.804112613988,
        "xv": 67.59397398760474,
        "yv": -75.04701646676577,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 5.559134166485213,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1483.3928703315319,
        "y": 4861.626060465352,
        "renderX": 1483.3928703315319,
        "renderY": 4861.626060465352,
        "xv": 75.66195902292786,
        "yv": 66.90491728425336,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 0.020921661136653592,
        "size": 84,
        "radius": 42,
        "speed": 101,
        "x": 1893.1741412449642,
        "y": 5099.4207719754395,
        "renderX": 1893.1741412449642,
        "renderY": 5099.4207719754395,
        "xv": 100.97789615309655,
        "yv": 2.1129336228212745,
        "bound": {
            "x": 900,
            "y": 4650,
            "w": 1400,
            "h": 900
        },
        "inView": false
    },
    {
        "type": "normal",
        "angle": 2.652735917860337,
        "radius": 12,
        "speed": 92,
        "x": 8100.645718771253,
        "y": 4165.872414584931,
        "renderX": 8100.645718771253,
        "renderY": 4165.872414584931,
        "xv": -81.22407050975056,
        "yv": 43.2047493897033,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 4.1015636402058,
        "radius": 12,
        "speed": 92,
        "x": 8539.87187727134,
        "y": 4204.6400625825945,
        "renderX": 8539.87187727134,
        "renderY": 4204.6400625825945,
        "xv": -52.766025308255266,
        "yv": -75.36409339445784,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 4.103711795295548,
        "radius": 12,
        "speed": 92,
        "x": 8162.022367743205,
        "y": 4212.867638892487,
        "renderX": 8162.022367743205,
        "renderY": 4212.867638892487,
        "xv": 52.60400992573783,
        "yv": -75.47726902672669,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 0.31090240472646874,
        "radius": 12,
        "speed": 92,
        "x": 8884.202847221846,
        "y": 4348.914149063271,
        "renderX": 8884.202847221846,
        "renderY": 4348.914149063271,
        "xv": -87.58932641440819,
        "yv": -28.144447023707112,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 2.8163900716512003,
        "radius": 12,
        "speed": 92,
        "x": 7828.010737554483,
        "y": 4362.385475166573,
        "renderX": 7828.010737554483,
        "renderY": 4362.385475166573,
        "xv": -87.17791391147307,
        "yv": -29.394069572684074,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 3.4657603660202736,
        "radius": 12,
        "speed": 92,
        "x": 7921.803446340264,
        "y": 4206.998681273549,
        "renderX": 7921.803446340264,
        "renderY": 4206.998681273549,
        "xv": -87.20828625056079,
        "yv": 29.30383608403941,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 2.1980608851000087,
        "radius": 12,
        "speed": 92,
        "x": 8219.465243751487,
        "y": 4285.370478525778,
        "renderX": 8219.465243751487,
        "renderY": 4285.370478525778,
        "xv": -53.997766483313846,
        "yv": 74.48651700014914,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "normal",
        "angle": 0.7435360561350122,
        "radius": 12,
        "speed": 92,
        "x": 8398.184397796354,
        "y": 4226.022343452578,
        "renderX": 8398.184397796354,
        "renderY": 4226.022343452578,
        "xv": 67.71932568440924,
        "yv": 62.27433603699771,
        "bound": {
            "x": 7800,
            "y": 4150,
            "w": 1100,
            "h": 250
        },
        "isLava": true,
        "inView": false
    },
    {
        "type": "square",
        "angle": 5.118169301724968,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 8163.242775299415,
        "y": 2931.452711639343,
        "renderX": 8163.242775299415,
        "renderY": 2931.452711639343,
        "xv": 37.10516854199381,
        "yv": 86.36669767607323,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 3.429474999425267,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 8009.148468877243,
        "y": 2881.1503876957076,
        "renderX": 8009.148468877243,
        "renderY": 2881.1503876957076,
        "xv": 90.13164379157841,
        "yv": 26.688701493853618,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 3.249999739233838,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 7909.783911789879,
        "y": 2882.4124222454643,
        "renderX": 7909.783911789879,
        "renderY": 2882.4124222454643,
        "xv": 93.44819220364938,
        "yv": 10.170318277704107,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 3.052759871004047,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 7916.979655801131,
        "y": 3013.084253495698,
        "renderX": 7916.979655801131,
        "renderY": 3013.084253495698,
        "xv": -93.62935446134999,
        "yv": -8.339303517133786,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 1.6182031885274908,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 8839.597518651099,
        "y": 2857.8292218899087,
        "renderX": 8839.597518651099,
        "renderY": 2857.8292218899087,
        "xv": -4.4545760217549635,
        "yv": 93.89439148568142,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "square",
        "angle": 1.387072460783643,
        "size": 48,
        "radius": 24,
        "speed": 94,
        "x": 8562.206069107726,
        "y": 2829.7528357958176,
        "renderX": 8562.206069107726,
        "renderY": 2829.7528357958176,
        "xv": 17.17305041863901,
        "yv": 92.41799791879762,
        "bound": {
            "x": 7800,
            "y": 2800,
            "w": 1100,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.965586627643608,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 8916.19949963385,
        "y": 3930.944479863444,
        "renderX": 8916.19949963385,
        "renderY": 3930.944479863444,
        "xv": 90.57868126503546,
        "yv": 16.109081298668602,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.642420206108596,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 8961.71697889698,
        "y": 3835.5751830124436,
        "renderX": 8961.71697889698,
        "renderY": 3835.5751830124436,
        "xv": -80.7740690261627,
        "yv": 44.04031985529513,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.4239769201087913,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 9061.142937224127,
        "y": 3761.8553388958358,
        "renderX": 9061.142937224127,
        "renderY": 3761.8553388958358,
        "xv": -13.45891029679864,
        "yv": -91.01020675519163,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.2332371638288127,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 8941.734932023954,
        "y": 3955.536926913602,
        "renderX": 8941.734932023954,
        "renderY": 3955.536926913602,
        "xv": -91.61392937382524,
        "yv": -8.419497888102335,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 0.04753495710068428,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 9050.809259108817,
        "y": 3951.8359605167047,
        "renderX": 9050.809259108817,
        "renderY": 3951.8359605167047,
        "xv": -91.89607925150476,
        "yv": 4.371569306456982,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 4.320407586484858,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 9034.870531801738,
        "y": 3446.7237399539567,
        "renderX": 9034.870531801738,
        "renderY": 3446.7237399539567,
        "xv": 35.14586546545296,
        "yv": -85.02216264412638,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.00987203611424,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 8943.539262060543,
        "y": 4109.53158347896,
        "renderX": 8943.539262060543,
        "renderY": 4109.53158347896,
        "xv": -91.20303852597618,
        "yv": -12.083284471918386,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.428749910420286,
        "flSize": 60,
        "flAngle": 1.1868238913561442,
        "flashlightDir": 0,
        "radius": 12,
        "speed": 92,
        "x": 8983.189310434347,
        "y": 3471.1617465283216,
        "renderX": 8983.189310434347,
        "renderY": 3471.1617465283216,
        "xv": 88.23286599779435,
        "yv": -26.056886955568306,
        "bound": {
            "x": 8900,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 3.6184654360798696,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7583.151872481535,
        "y": 3107.7919560038526,
        "renderX": 7583.151872481535,
        "renderY": 3107.7919560038526,
        "xv": -81.73598937999466,
        "yv": -42.228284834615266,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 0.2873060692666169,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7647.837160776517,
        "y": 3883.927864760585,
        "renderX": 7647.837160776517,
        "renderY": 3883.927864760585,
        "xv": -88.22898743201836,
        "yv": 26.070016814738466,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 5.271790973632267,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7654.213619555939,
        "y": 3504.1908433469293,
        "renderX": 7654.213619555939,
        "renderY": 3504.1908433469293,
        "xv": 48.82250835988239,
        "yv": 77.97668034386443,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 3.6074108268492595,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7597.000004534836,
        "y": 3520.9762334266616,
        "renderX": 7597.000004534836,
        "renderY": 3520.9762334266616,
        "xv": 82.19780286221967,
        "yv": -41.32216360046593,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 2.908251497967085,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7580.883441189961,
        "y": 3262.188950269165,
        "renderX": 7580.883441189961,
        "renderY": 3262.188950269165,
        "xv": 89.50673130983871,
        "yv": 21.27310626655962,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 0.37047280734119026,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7722.699079968023,
        "y": 3630.3350897022024,
        "renderX": 7722.699079968023,
        "renderY": 3630.3350897022024,
        "xv": -85.75837656143291,
        "yv": 33.30917065235149,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 2.168132071818582,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7737.157060227573,
        "y": 3686.829025453463,
        "renderX": 7737.157060227573,
        "renderY": 3686.829025453463,
        "xv": 51.74462420912171,
        "yv": -76.06900725957172,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 1.2598968345610408,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7636.915890143513,
        "y": 4045.7977122244706,
        "renderX": 7636.915890143513,
        "renderY": 4045.7977122244706,
        "xv": -28.14419192032159,
        "yv": 87.58940838453076,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 0.6474301241600982,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7675.835909366281,
        "y": 3627.7107100269072,
        "renderX": 7675.835909366281,
        "renderY": 3627.7107100269072,
        "xv": 73.38255082293594,
        "yv": 55.488748721873556,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 1.7001210805507607,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7574.023149842016,
        "y": 3649.3434656742375,
        "renderX": 7574.023149842016,
        "renderY": 3649.3434656742375,
        "xv": -11.86473994984135,
        "yv": -91.23172664113422,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 4.582671724627408,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": true,
        "radius": 12,
        "speed": 92,
        "x": 7646.778762150187,
        "y": 3485.375297211669,
        "renderX": 7646.778762150187,
        "renderY": 3485.375297211669,
        "xv": -11.900547670293356,
        "yv": -91.22706267959676,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    },
    {
        "type": "switch",
        "angle": 1.6179214779481912,
        "switchTime": 1,
        "switchTimer": 0.8249999999999929,
        "currentSwitch": false,
        "radius": 12,
        "speed": 92,
        "x": 7729.421068477015,
        "y": 3851.797084820071,
        "renderX": 7729.421068477015,
        "renderY": 3851.797084820071,
        "xv": -4.333909380609348,
        "yv": -91.89786303000014,
        "bound": {
            "x": 7550,
            "y": 3050,
            "w": 250,
            "h": 1100
        },
        "inView": false
    }
]

obs.unshift(...safes);
obs.push(...texts);

var alreadyLogged = {color: true, resetcoins: true, roundedcorners: true, roundedlava: true};// already covered by special if statements

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
        counter++;
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
    } else if(o.type === 'resetcoins'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        const minX = o.x - 100;
        const minY = o.y - 100;
        const maxX = o.x + o.w + 100;
        const maxY = o.y + o.h + 100;
        
        counter++;
        let c = counter;
        str += `var insideResetCoins${c} = false;
        var minX${c}, minY${c}, maxX${c}, maxY${c};
        minX${c} = ${minX};minY${c} = ${minY};maxX${c} = ${maxX};maxY${c} = ${maxY};
        minX${c} = ${minX};minY${c} = ${minY};maxX${c} = ${maxX};maxY${c} = ${maxY};
        C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
            const player = window.players[window.selfId];
            if ((player.pos.x) > md(minX${c}) && (player.pos.x) < md(maxX${c}) && (player.pos.y) > md(minY${c}) && (player.pos.y) < md(maxY${c})) {
                if(insideResetCoins${c} === false){
                    insideResetCoins${c} = true;
                    for(let z = 0; z < window.obstacles.length; z++){
                        const obz = window.obstacles[z];
                        if(obz.isCoindoor === true){
                            // coindoor
                            obz.coins = obz.maxCoins
                        } else if(obz.coinAmount !== undefined){
                            // coin
                            obz.collected = false;
                        }
                    }
                }
            } else {
                insideResetCoins${c} = false;
            }
        },});\n`;
    } else if(o.type === 'tptrap'){
        o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
        const minX = o.x - 100;
        const minY = o.y - 100;
        const maxX = o.x + o.w + 100;
        const maxY = o.y + o.h + 100;
        // {
        //     "x": 6400,
        //     "y": 2150,
        //     "w": 600,
        //     "h": 600,
        //     "type": "tptrap",
        //     "time": 0,
        //     "maxTime": 10,
        //     "cdmult": 3,
        //     "trapType": "death",
        //     "tpx": 7000,
        //     "tpy": 3625,
        //     "inView": false
        // },
        counter++;
        str += `var minX${counter}, minY${counter}, maxX${counter}, maxY${counter};
        minX${counter} = ${minX};minY${counter} = ${minY};maxX${counter} = ${maxX};maxY${counter} = ${maxY};
        var time${counter} = ${o.maxTime*1000/15}; 
        C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
            const player = window.players[window.selfId];
            if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {
                time${counter}--;
                if(time${counter} < 0){
                    time${counter} = ${o.maxTime};
                    player.pos.x = ${o.tpx*2};
                    player.pos.y = ${o.tpy*2};
                }
            }
        },});\n`;
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

// console.log(str);
eval(str);

mapDimensions.x=24000;
mapDimensions.y=12000;

spawnPosition.x=100;
spawnPosition.y=1000;
window.respawnPlayer();
colors.background='#b6becd'; colors.tile='#588293';

C(0,[],[26],{
    x: spawnPosition.x,
    y: spawnPosition.y,
    r: 50,
    musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
});

// obstacles todo
// breakable, tptrap, square enemy, turret enemy, switch enemy

// maybe typing, circleSlice (circle-slice and circle-hollow-slice), sentry (circle-sentry two obs, one with customCode), tptrap (custom code + nokill tt), pusher