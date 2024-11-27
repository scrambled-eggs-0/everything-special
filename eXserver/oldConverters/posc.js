import shared from '../../shared/shared.js';
import '/maps/_converter.js';
{
    let counter = 7000;

    const obs = [
        {
            "x": 1800,
            "y": 0,
            "w": 50,
            "h": 50,
            "renderAbove": false,
            type: 'safe'
        },
        {
            "x": 6600,
            "y": 4150,
            "w": 800,
            "h": 100,
            "renderAbove": false,
            type: 'safe'
        },
        {
            "x": 7325,
            "y": 0,
            "w": 75,
            "h": 75,
            "type": "tp",
            "tpx": 8525,
            "tpy": 1725,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7300,
            "y": 0,
            "w": 25,
            "h": 75,
            "type": "breakable",
            "maxStrength": 10,
            "currentStrength": 10,
            "time": 0.2,
            "timer": 0.2,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 0,
            "y": 4750,
            "w": 50,
            "h": 250,
            "type": "ship",
            "state": false,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 0,
            "y": 4750,
            "w": 50,
            "h": 250,
            "type": "zone",
            "value": 6,
            "inView": false
        },
        {
            "x": 0,
            "y": 4750,
            "w": 50,
            "h": 250,
            "type": "color",
            "bgColor": "#431c6b",
            "tileColor": "#720b98",
            "inView": false
        },
        {
            "x": 0,
            "y": 4750,
            "w": 1350,
            "h": 250,
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
            "x": 0,
            "y": 2250,
            "w": 250,
            "h": 250,
            "type": "typing",
            "text": "Relax. This planet will only get a little bit harder.",
            "active": true,
            "currentChar": 0,
            "inView": false
        },
        {
            "x": 6400,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "musicchange",
            "musicPath": 'https://www.youtube.com/watch?v=5e-EvVDXNU0',// https://www.youtube.com/watch?v=5IOVkstxkdE old i liked
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2050,
            "w": 100,
            "h": 100,
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
            "x": 6400,
            "y": 2050,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 9,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2050,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 6450,
                "y": 2075
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2050,
            "w": 100,
            "h": 50,
            "type": "invpu",
            "amount": 1,
            "maxAmount": 1,
            "inView": false
        },
        {
            "x": 8550,
            "y": 0,
            "w": 1450,
            "h": 350,
            "type": "speed",
            "speedInc": 1.5,
            "inView": false
        },
        {
            "x": 9550,
            "y": 50,
            "radius": 100,
            "type": "circle-hollow-slice",
            "startAngle": -3.141592653589793,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9500,
                        49.99999999999999
                    ],
                    [
                        9450,
                        49.999999999999986
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9550,
                        0
                    ],
                    [
                        9550,
                        -50
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
            "x": 9825,
            "y": 175,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": -1.5707963267948966,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9825,
                        0
                    ],
                    [
                        9825,
                        -125
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9825,
                        350
                    ],
                    [
                        9825,
                        475
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
            "x": 6450,
            "y": 750,
            "w": 750,
            "h": 100,
            "type": "grav",
            "force": 1750,
            "dir": {
                "x": -1750,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 6500,
            "y": 750,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6400,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "zone",
            "value": 7,
            "inView": false
        },
        {
            "x": 6400,
            "y": 200,
            "w": 700,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 6600,
            "y": 300,
            "w": 500,
            "h": 350,
            "type": "platformer",
            "force": 1500,
            "dir": {
                "x": 0,
                "y": 1500
            },
            "direction": "down",
            "jumpHeight": 115,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 6825,
            "y": 675,
            "r": 68,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 68,
            "inView": false
        },
        {
            "x": 6825,
            "y": 375,
            "r": 68,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 68,
            "inView": false
        },
        {
            "x": 1400,
            "y": 3450,
            "w": 1000,
            "h": 1550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5000,
            "y": -50,
            "w": 50,
            "h": 1250,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2400,
            "y": 4800,
            "w": 350,
            "h": 50,
            "type": "breakable",
            "maxStrength": 33,
            "currentStrength": 33,
            "time": 0,
            "timer": 0,
            "regenTime": 4,
            "inView": false
        },
        {
            "x": 2547.5,
            "y": 4900,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2400,
                    4900
                ],
                [
                    2650,
                    4900
                ]
            ],
            "speed": 60,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2650,
                "y": 4900
            },
            "pointTo": {
                "x": 2400,
                "y": 4900
            },
            "xv": -60,
            "yv": 7.34788079488412e-15,
            "inView": false
        },
        {
            "x": 2650 - (2547.5 - 2400),//2400 + 102.5,//2547.5,
            "y": 4850, //250-147.5 = 
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2650,
                    4850
                ],
                [
                    2400,
                    4850
                ]
            ],
            "speed": 60,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2400,
                "y": 4850
            },
            "pointTo": {
                "x": 2650,
                "y": 4850
            },
            "xv": 60,
            "yv": 7.34788079488412e-15,
            "inView": false
        },
        {
            "x": 2400,
            "y": 3500,
            "w": 375,
            "h": 50,
            "type": "zone",
            "value": 5,
            "inView": false
        },
        {
            "x": 2400,
            "y": 3500,
            "w": 350,
            "h": 50,
            "type": "ship",
            "state": true,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 2400,
            "y": 3500,
            "w": 350,
            "h": 50,
            "spawn": {
                "x": 2575,
                "y": 3525
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1400,
            "y": 2950,
            "w": 2350,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2950,
            "y": 1850,
            "w": 800,
            "h": 1250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 4400,
            "y": 2100,
            "w": 600,
            "h": 1500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4000,
            "y": 2125,
            "w": 150,
            "h": 75,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 4000,
            "y": 2150,
            "w": 150,
            "h": 50,
            "spawn": {
                "x": 4075,
                "y": 2175
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 4350,
            "y": 1150,
            "w": 50,
            "h": 50,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 3750,
            "y": 0,
            "w": 1250,
            "h": 1200,
            "type": "platformer",
            "force": 1500,
            "dir": {
                "x": 0,
                "y": 1500
            },
            "direction": "down",
            "jumpHeight": 145,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 125,
            "y": 50,
            "w": 400,
            "h": 50,
            "type": "zone",
            "value": 1,
            "inView": false
        },
        {
            "x": 125,
            "y": 50,
            "w": 425,
            "h": 50,
            "spawn": {
                "x": 337.5,
                "y": 75
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1800,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 2,
            "inView": false
        },
        {
            "x": 2775,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 325,
            "tpy": 75,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": true
        },
        {
            "x": 2150,
            "y": 2450,
            "w": 300,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 5,
            "cdmult": 3,
            "trapType": "death",
            "inView": true
        },
        {
            "x": 2450,
            "y": 2550,
            "w": 100,
            "h": 300,
            "type": "size",
            "size": 18.75,
            "inView": true
        },
        {
            "x": 2600,
            "y": 2431.666666666408,
            "w": 50,
            "h": 50,
            "type": "tpmove",
            "points": [
                [
                    2600,
                    2400
                ],
                [
                    2600,
                    2550
                ]
            ],
            "speed": 40,
            "currentPoint": 1,
            "tpx": 2500,
            "tpy": 2500,
            "pointOn": {
                "x": 2600,
                "y": 2550
            },
            "pointTo": {
                "x": 2600,
                "y": 2400
            },
            "xv": 2.4492935982947065e-15,
            "yv": -40,
            "inView": true
        },
        {
            "points": [
                [
                    2450,
                    2050
                ],
                [
                    2450,
                    2450
                ],
                [
                    2050,
                    2450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2050,
                "right": 2450,
                "top": 2050,
                "bottom": 2450
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    2550,
                    2050
                ],
                [
                    2950,
                    2450
                ],
                [
                    2550,
                    2450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2550,
                "right": 2950,
                "top": 2050,
                "bottom": 2450
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    2550,
                    2550
                ],
                [
                    2950,
                    2550
                ],
                [
                    2550,
                    2950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2550,
                "right": 2950,
                "top": 2550,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    2050,
                    2550
                ],
                [
                    2450,
                    2550
                ],
                [
                    2450,
                    2950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2050,
                "right": 2450,
                "top": 2550,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 2175,
            "y": 2475,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2050,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2450,
            "y": 2850,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2850,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 2450,
            "y": 2050,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1400,
            "y": 1750,
            "w": 650,
            "h": 1250,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 1250,
            "y": 1400,
            "w": 2500,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2475,
            "y": 2175,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2675,
            "y": 2475,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2475,
            "y": 2775,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": true
        },
        {
            "x": 2450,
            "y": 2360.416666666408,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    2450,
                    2250
                ],
                [
                    2450,
                    2400
                ]
            ],
            "speed": 50,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 2450,
                "y": 2250
            },
            "pointTo": {
                "x": 2450,
                "y": 2400
            },
            "xv": 3.061616997868383e-15,
            "yv": 50,
            "inView": true
        },
        {
            "x": 2500,
            "y": 2289.583333333592,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    2500,
                    2250
                ],
                [
                    2500,
                    2400
                ]
            ],
            "speed": 50,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 2500,
                "y": 2400
            },
            "pointTo": {
                "x": 2500,
                "y": 2250
            },
            "xv": 3.061616997868383e-15,
            "yv": -50,
            "inView": true
        },
        {
            "x": 2500,
            "y": 2700,
            "w": 100,
            "h": 25,
            "type": "rotate-normal",
            "angle": -710.4166666666579,
            "rotateSpeed": -50,
            "pivotX": 2500,
            "pivotY": 2700,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2500,
            "y": 2600,
            "w": 100,
            "h": 25,
            "type": "rotate-normal",
            "angle": -620.4166666666663,
            "rotateSpeed": -50,
            "pivotX": 2500,
            "pivotY": 2600,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 0,
            "inView": true
        },
        {
            "x": 2250,
            "y": 2525,
            "w": 50,
            "h": 25,
            "type": "bounce",
            "effect": 30,
            "inView": true
        },
        {
            "x": 2350,
            "y": 2450,
            "w": 50,
            "h": 25,
            "type": "bounce",
            "effect": 30,
            "inView": true
        },
        {
            "x": 2450,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=n3EIyZ8my8o",
            "volume": 1,
            "startTime": 0,
            "inView": true
        },
        {
            "x": 2750,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": true
        },
        {
            "x": -50,
            "y": 1400,
            "w": 1500,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -75,
            "y": 850,
            "w": 1250,
            "h": 825,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 650,
            "y": -175,
            "w": 850,
            "h": 1625,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 50,
            "y": -50,
            "w": 650,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2425,
            "y": 2425,
            "w": 150,
            "h": 150,
            "type": "zone",
            "value": 1,
            "inView": true
        },
        {
            "x": -200,
            "y": -25,
            "w": 200,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1400,
            "y": 850,
            "w": 2350,
            "h": 700,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2150,
            "y": -50,
            "w": 1600,
            "h": 900,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 1500,
            "y": 0,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1850,
            "y": 0,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1800,
            "y": 0,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 1825,
                "y": 25
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1500,
            "y": 800,
            "w": 650,
            "h": 50,
            "type": "tp",
            "tpx": 4375,
            "tpy": 1175,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3750,
            "y": 1200,
            "w": 1350,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 600,
            "y": 50,
            "w": 300,
            "h": 825,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 50,
            "y": 75,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 325,
            "y": 200,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 600,
            "y": 75,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 425,
            "y": 675,
            "radius": 35,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 100,
            "y": 275,
            "radius": 35,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 525,
            "y": 350,
            "radius": 56,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 300,
            "y": 550,
            "radius": 56,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 200,
            "y": 400,
            "radius": 79,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 50,
            "y": 650,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 75,
            "y": 525,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 200,
            "y": 700,
            "radius": 79,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 375,
            "y": 400,
            "radius": 35,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 500,
            "y": 500,
            "radius": 79,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 550,
            "y": 700,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 0,
            "y": 800,
            "w": 600,
            "h": 50,
            "type": "tp",
            "tpx": 1825,
            "tpy": 25,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1800,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "breakable",
            "maxStrength": 23,
            "currentStrength": 23,
            "time": 0.016,
            "timer": 0.016,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 3750,
            "y": 1150,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4450,
            "y": 1150,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4300,
            "y": 1200,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4450,
            "y": 1200,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4200,
            "y": 1000,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4400,
            "y": 900,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4650,
            "y": 600,
            "w": 100,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4350,
            "y": 500,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3975,
                    600
                ],
                [
                    4025,
                    600
                ],
                [
                    4050,
                    700
                ],
                [
                    3950,
                    700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3950,
                "right": 4050,
                "top": 600,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3875,
            "y": 475,
            "w": 50,
            "h": 50,
            "type": "rotate-normal",
            "angle": 0.5833333333333334,
            "rotateSpeed": 35,
            "pivotX": 3875,
            "pivotY": 475,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 35.35533905932738,
            "unSim": 14.191666666666501,
            "inView": false
        },
        {
            "x": 4025,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "rotate-normal",
            "angle": -22.583333333333336,
            "rotateSpeed": -35,
            "pivotX": 4025,
            "pivotY": 350,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 35.35533905932738,
            "unSim": 14.191666666666501,
            "inView": false
        },
        {
            "x": 4210.958333333747,
            "y": 250,
            "w": 150,
            "h": 50,
            "type": "move",
            "points": [
                [
                    4200,
                    250
                ],
                [
                    4300,
                    250
                ]
            ],
            "speed": 43,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 4200,
                "y": 250
            },
            "pointTo": {
                "x": 4300,
                "y": 250
            },
            "xv": 43,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4600,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4750,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4825,
            "y": 75,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3750,
            "y": -49,
            "w": 1250,
            "h": 75,
            "type": "tp",
            "tpx": 4075,
            "tpy": 2175,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4300,
            "y": 1100,
            "w": 150,
            "h": 100,
            "type": "color",
            "bgColor": "#6376c1",
            "tileColor": "#9ec0ed",
            "inView": false
        },
        {
            "x": 3750,
            "y": 2100,
            "w": 250,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2100,
            "w": 250,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    2150
                ],
                [
                    4050,
                    2150
                ],
                [
                    4000,
                    2200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4000,
                "right": 4050,
                "top": 2150,
                "bottom": 2200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4100,
                    2150
                ],
                [
                    4150,
                    2150
                ],
                [
                    4150,
                    2200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4100,
                "right": 4150,
                "top": 2150,
                "bottom": 2200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4400,
            "y": 3525,
            "w": 75,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2750,
            "y": 3600,
            "w": 2300,
            "h": 1450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2925,
            "y": 3400,
            "w": 825,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3750,
            "y": 3550,
            "w": 650,
            "h": 50,
            "type": "tp",
            "tpx": 2575,
            "tpy": 3525,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2750,
            "y": 3475,
            "w": 200,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2500,
                    3650
                ],
                [
                    2550,
                    3700
                ],
                [
                    2500,
                    3750
                ],
                [
                    2450,
                    3700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2550,
                "top": 3650,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2650,
                    3800
                ],
                [
                    2700,
                    3850
                ],
                [
                    2650,
                    3900
                ],
                [
                    2600,
                    3850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2600,
                "right": 2700,
                "top": 3800,
                "bottom": 3900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2500,
                    3950
                ],
                [
                    2550,
                    4000
                ],
                [
                    2500,
                    4050
                ],
                [
                    2450,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2550,
                "top": 3950,
                "bottom": 4050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2400,
            "y": 4950,
            "w": 350,
            "h": 50,
            "type": "tp",
            "tpx": 25,
            "tpy": 4875,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2400,
            "y": 4100,
            "w": 350,
            "h": 50,
            "type": "breakable",
            "maxStrength": 33,
            "currentStrength": 33,
            "time": 0,
            "timer": 0,
            "regenTime": 4,
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    3825
                ],
                [
                    2425,
                    3850
                ],
                [
                    2400,
                    3875
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2425,
                "top": 3825,
                "bottom": 3875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2750,
                    3975
                ],
                [
                    2750,
                    4025
                ],
                [
                    2725,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2725,
                "right": 2750,
                "top": 3975,
                "bottom": 4025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2750,
                    3675
                ],
                [
                    2750,
                    3725
                ],
                [
                    2725,
                    3700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2725,
                "right": 2750,
                "top": 3675,
                "bottom": 3725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": -25,
            "y": 2950,
            "w": 1425,
            "h": 1800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 2500,
            "w": 1450,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 250,
            "y": 2175,
            "w": 1225,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1350,
            "y": 4750,
            "w": 50,
            "h": 250,
            "type": "tp",
            "tpx": 125,
            "tpy": 2275,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "points": [
                [
                    -25,
                    4725
                ],
                [
                    75,
                    4725
                ],
                [
                    -25,
                    4825
                ]
            ],
            "type": "poly",
            "most": {
                "left": -25,
                "right": 75,
                "top": 4725,
                "bottom": 4825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    -25,
                    4925
                ],
                [
                    75,
                    5025
                ],
                [
                    -25,
                    5025
                ]
            ],
            "type": "poly",
            "most": {
                "left": -25,
                "right": 75,
                "top": 4925,
                "bottom": 5025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 92,
            "y": 2475,//2490,
            "w": 66,
            "h": 25,//0,
            "type": "tp",
            "tpx": 6450,
            "tpy": 50,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5000,
            "y": -75,
            "w": 1400,
            "h": 5100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 100,
            "w": 725,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 100,
            "w": 100,
            "h": 650,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7300,
            "y": 75,
            "w": 100,
            "h": 875,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 850,
            "w": 900,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6500,
            "y": 300,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6600,
            "y": 650,
            "w": 500,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6600,
            "y": 300,
            "w": 400,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6400,
                    200
                ],
                [
                    6500,
                    200
                ],
                [
                    6400,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6400,
                "right": 6500,
                "top": 200,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6550,
                    250
                ],
                [
                    6550,
                    300
                ],
                [
                    6500,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6500,
                "right": 6550,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6625,
                    200
                ],
                [
                    6675,
                    200
                ],
                [
                    6675,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6625,
                "right": 6675,
                "top": 200,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6775,
                    250
                ],
                [
                    6775,
                    300
                ],
                [
                    6725,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6725,
                "right": 6775,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6850,
                    200
                ],
                [
                    6900,
                    200
                ],
                [
                    6900,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6850,
                "right": 6900,
                "top": 200,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6950,
                    250
                ],
                [
                    7000,
                    300
                ],
                [
                    6950,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6950,
                "right": 7000,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7000,
                    200
                ],
                [
                    7100,
                    200
                ],
                [
                    7100,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7000,
                "right": 7100,
                "top": 200,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6400,
            "y": 0,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 6450,
                "y": 50
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 6450,
            "y": 700,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 550,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 404.33333333337856,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6400,
                    300
                ],
                [
                    6400,
                    450
                ]
            ],
            "speed": 56,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6400,
                "y": 450
            },
            "pointTo": {
                "x": 6400,
                "y": 300
            },
            "xv": 3.429011037612589e-15,
            "yv": -56,
            "inView": false
        },
        {
            "x": 6450,
            "y": 345.66666666662144,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6450,
                    300
                ],
                [
                    6450,
                    450
                ]
            ],
            "speed": 56,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6450,
                "y": 300
            },
            "pointTo": {
                "x": 6450,
                "y": 450
            },
            "xv": 3.429011037612589e-15,
            "yv": 56,
            "inView": false
        },
        {
            "x": 7200,
            "y": 0,
            "w": 100,
            "h": 850,
            "type": "size",
            "size": 8,
            "inView": false
        },
        {
            "x": 7100,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 6950,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 6800,
            "y": 750,
            "w": 50,
            "h": 50,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 6650,
            "y": 800,
            "w": 50,
            "h": 50,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 6607.166666666253,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6500,
                    0
                ],
                [
                    6700,
                    0
                ]
            ],
            "speed": 92,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6500,
                "y": 0
            },
            "pointTo": {
                "x": 6700,
                "y": 0
            },
            "xv": 92,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6592.833333333747,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6500,
                    50
                ],
                [
                    6700,
                    50
                ]
            ],
            "speed": 92,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 6700,
                "y": 50
            },
            "pointTo": {
                "x": 6500,
                "y": 50
            },
            "xv": -92,
            "yv": 1.126675055215565e-14,
            "inView": false
        },
        {
            "x": 6857.166666666332,
            "y": 0,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6800,
                    0
                ],
                [
                    7000,
                    0
                ],
                [
                    7000,
                    50
                ],
                [
                    6800,
                    50
                ]
            ],
            "speed": 92,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6800,
                "y": 0
            },
            "pointTo": {
                "x": 7000,
                "y": 0
            },
            "xv": 92,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6942.833333333668,
            "y": 50,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6800,
                    0
                ],
                [
                    7000,
                    0
                ],
                [
                    7000,
                    50
                ],
                [
                    6800,
                    50
                ]
            ],
            "speed": 92,
            "currentPoint": 2,
            "alongWith": false,
            "pointOn": {
                "x": 7000,
                "y": 50
            },
            "pointTo": {
                "x": 6800,
                "y": 50
            },
            "xv": -92,
            "yv": 1.126675055215565e-14,
            "inView": false
        },
        {
            "x": 7100,
            "y": 7.166666666665339,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    7100,
                    0
                ],
                [
                    7100,
                    50
                ]
            ],
            "speed": 92,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 7100,
                "y": 0
            },
            "pointTo": {
                "x": 7100,
                "y": 50
            },
            "xv": 5.633375276077825e-15,
            "yv": 92,
            "inView": false
        },
        {
            "x": 7150,
            "y": 0,
            "w": 50,
            "h": 100,
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
            "x": 6400,
            "y": 300,
            "w": 100,
            "h": 550,
            "type": "size",
            "size": 22.5,
            "inView": false
        },
        {
            "x": 6600,
            "y": 400,
            "w": 50,
            "h": 250,
            "type": "tp",
            "tpx": 8525,
            "tpy": 325,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7400,
            "y": 0,
            "w": 1100,
            "h": 2150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6375,
            "y": 950,
            "w": 1025,
            "h": 1100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8750,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "mark",
            "time": 5.2,
            "inView": false
        },
        {
            "x": 8500,
            "y": 350,
            "w": 1500,
            "h": 1350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 0,
            "w": 300,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8800,
                    0
                ],
                [
                    9100,
                    0
                ],
                [
                    8800,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8800,
                "right": 9100,
                "top": 0,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9150,
                    50
                ],
                [
                    9450,
                    350
                ],
                [
                    8850,
                    350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8850,
                "right": 9450,
                "top": 50,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    0
                ],
                [
                    9500,
                    0
                ],
                [
                    9500,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9200,
                "right": 9500,
                "top": 0,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9600,
            "y": 50,
            "w": 100,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9500,
                    250
                ],
                [
                    9550,
                    300
                ],
                [
                    9500,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9500,
                "right": 9550,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    175
                ],
                [
                    9600,
                    275
                ],
                [
                    9550,
                    225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9550,
                "right": 9600,
                "top": 175,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9500,
                    100
                ],
                [
                    9550,
                    150
                ],
                [
                    9500,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9500,
                "right": 9550,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9825,
            "y": 175,
            "radius": 125,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9700,
            "y": 50,
            "w": 125,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9575,
            "y": 50,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9550,
                    75
                ],
                [
                    9600,
                    75
                ],
                [
                    9600,
                    125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9550,
                "right": 9600,
                "top": 75,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9575,
            "y": 75,
            "radius": 25,
            "type": "circle-slice",
            "startAngle": -3.141592653589793,
            "endAngle": -1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9575,
                        75
                    ],
                    [
                        9550,
                        75
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9575,
                        75
                    ],
                    [
                        9575,
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
            "x": 9750,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "cure",
            "inView": false
        },
        {
            "x": 8500,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": 1,
            "inView": false
        },
        {
            "x": 8550,
            "y": 300,
            "w": 200,
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
            "x": 9700,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 6450,
            "tpy": 2075,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8500,
            "y": 300,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 8525,
                "y": 325
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 7000,
            "y": 2150,
            "w": 1500,
            "h": 1450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2750,
            "w": 600,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6500,
            "y": 2050,
            "w": 900,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 2150,
            "w": 600,
            "h": 600,
            "type": "tptrap",
            "time": 0,
            "maxTime": 10,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 7000,
            "tpy": 3625,
            "inView": false
        },
        {
            "x": 7600,
            "y": 2000,
            "w": 2625,
            "h": 3000,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 3600,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 3600,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6400,
            "y": 4950,
            "w": 1200,
            "h": 50,
            "type": "winpad",
            "inView": false
        },
        {
            "x": 8500,
            "y": 300,
            "w": 50,
            "h": 50,
            "type": "color",
            "bgColor": "#000000",
            "tileColor": "#707070",
            "inView": false
        },
        {
            "x": 6400,
            "y": 2100,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 55,
            "currentStrength": 55,
            "time": 0.016,
            "timer": 0.016,
            "regenTime": 10,
            "inView": false
        },
        {
            "x": 6375,
            "y": 2050,
            "w": 150,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 1,
            "inView": false
        },
        {
            "x": 6950,
            "y": 3600,
            "w": 100,
            "h": 50,
            "type": "zone",
            "value": 10,
            "inView": false
        },
        {
            "x": 6950,
            "y": 3600,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 7000,
                "y": 3625
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 6400,
            "y": 3650,
            "w": 550,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7050,
            "y": 3650,
            "w": 550,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6950,
            "y": 3650,
            "w": 100,
            "h": 500,
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
            "x": 6900,
            "y": 3725,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 6900,
                "y": 3725,
                "w": 200,
                "h": 25,
                "pivotX": 7000,
                "pivotY": 3737.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 6900,
            "y": 3825,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 6900,
                "y": 3825,
                "w": 200,
                "h": 25,
                "pivotX": 7000,
                "pivotY": 3837.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 6900,
            "y": 3925,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 6900,
                "y": 3925,
                "w": 200,
                "h": 25,
                "pivotX": 7000,
                "pivotY": 3937.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 6900,
            "y": 4025,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 6900,
                "y": 4025,
                "w": 200,
                "h": 25,
                "pivotX": 7000,
                "pivotY": 4037.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 7100,
            "y": 3725,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 7100,
                "y": 3725,
                "w": 200,
                "h": 25,
                "pivotX": 7200,
                "pivotY": 3737.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 7100,
            "y": 3825,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 7100,
                "y": 3825,
                "w": 200,
                "h": 25,
                "pivotX": 7200,
                "pivotY": 3837.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 7100,
            "y": 3925,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 7100,
                "y": 3925,
                "w": 200,
                "h": 25,
                "pivotX": 7200,
                "pivotY": 3937.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "x": 7100,
            "y": 4025,
            "r": 36,
            "angle": -270,
            "type": "circle-sentry",
            "speed": 108,
            "laser": {
                "x": 7100,
                "y": 4025,
                "w": 200,
                "h": 25,
                "pivotX": 7200,
                "pivotY": 4037.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 36,
            "inView": false
        },
        {
            "points": [
                [
                    7000,
                    4250
                ],
                [
                    7350,
                    5025
                ],
                [
                    6650,
                    5025
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6650,
                "right": 7350,
                "top": 4250,
                "bottom": 5025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6400,
                    4150
                ],
                [
                    6700,
                    4150
                ],
                [
                    6400,
                    4850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6400,
                "right": 6700,
                "top": 4150,
                "bottom": 4850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7300,
                    4150
                ],
                [
                    7600,
                    4150
                ],
                [
                    7600,
                    4850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7300,
                "right": 7600,
                "top": 4150,
                "bottom": 4850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    250,
                    4750
                ],
                [
                    550,
                    4750
                ],
                [
                    400,
                    4900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 250,
                "right": 550,
                "top": 4750,
                "bottom": 4900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    250,
                    4900
                ],
                [
                    350,
                    5000
                ],
                [
                    150,
                    5000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 150,
                "right": 350,
                "top": 4900,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    550,
                    4900
                ],
                [
                    650,
                    5000
                ],
                [
                    450,
                    5000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 450,
                "right": 650,
                "top": 4900,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 775,
            "y": 4875,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 4775,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 4975,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 900,
            "y": 4975,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 4725,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1175,
            "y": 4875,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": 0.75,
            "rotateSpeed": 45,
            "pivotX": 1175,
            "pivotY": 4875,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 14.191666666666501,
            "inView": false
        },
        {
            "x": 1175,
            "y": 4875,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7100,
            "y": 0,
            "w": 100,
            "h": 100,
            "type": "size",
            "size": 8,
            "inView": false
        },
        {
            "x": 7300,
            "y": -25,
            "w": 100,
            "h": 125,
            "type": "trans",
            "collide": false,
            "opaq": 1,
            "inView": false
        },
        {
            "x": 8800,
            "y": 1650,
            "w": 1250,
            "h": 475,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8750,
            "y": 1700,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 1,
            "active": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1750,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8600,
            "y": 1750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1850,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8750,
            "y": 1850,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8650,
            "y": 1900,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1950,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1800,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "x": 8650,
            "y": 1950,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "x": 8550,
            "y": 1750,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 1,
            "active": true,
            "inView": false
        },
        {
            "x": 8700,
            "y": 1850,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "x": 8550,
            "y": 1900,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1700,
            "w": 50,
            "h": 50,
            "type": "zone",
            "value": -1,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1700,
            "w": 50,
            "h": 50,
            "spawn": {
                "x": 8525,
                "y": 1725
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8600,
            "y": 1800,
            "w": 50,
            "h": 50,
            "type": "pushbox",
            "weight": 22,
            "initX": 8600,
            "initY": 1800,
            "pusherId": 0.00603314892176221,
            "resetId": -1,
            "lastPos": {
                "x": 8600,
                "y": 1800
            },
            "inView": false
        },
        {
            "x": 8500,
            "y": 1900,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 8525,
            "tpy": 325,
            "bgColor": "#27811b",
            "tileColor": "#6ab95a",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7300,
            "y": -20,
            "w": 200,
            "h": 220,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 19150/2,
            "y": 150/2,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 19000/2,
            "y": 0,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 20000/2,
            "y": 0,
            "radius": 85,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 20000/2,
            "y": 350,
            "radius": 85,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
    ]
    const enemies = [
        {
            "type": "square",
            "angle": 2.096646552493198,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7417.607700050056,
            "y": 4427.6566883631895,
            "renderX": 7417.607700050056,
            "renderY": 4427.6566883631895,
            "xv": 42.66562624665778,
            "yv": -73.51628620231375,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.3581206337034444,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7540.235631133861,
            "y": 4381.9897254300795,
            "renderX": 7540.235631133861,
            "renderY": 4381.9897254300795,
            "xv": -60.21973391212874,
            "yv": 59.98819590179731,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.734495227935228,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7170.590533228817,
            "y": 4645.3589842442525,
            "renderX": 7170.590533228817,
            "renderY": 4645.3589842442525,
            "xv": -78.05328584018666,
            "yv": -33.65537950387895,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.2392916181642184,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7482.484738222737,
            "y": 4325.758256673077,
            "renderX": 7482.484738222737,
            "renderY": 4325.758256673077,
            "xv": -82.57801980473252,
            "yv": 20.14623153667217,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.13553030361071738,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7074.145070260299,
            "y": 4843.963680485092,
            "renderX": 7074.145070260299,
            "renderY": 4843.963680485092,
            "xv": 84.22053454261524,
            "yv": 11.484840501990167,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 3.949171239542174,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7237.726335506365,
            "y": 4816.587059714815,
            "renderX": 7237.726335506365,
            "renderY": 4816.587059714815,
            "xv": 58.756267767378176,
            "yv": -61.42231677532325,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.6997228135983145,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7037.517897101272,
            "y": 4287.187837520333,
            "renderX": 7037.517897101272,
            "renderY": 4287.187837520333,
            "xv": -76.83605968869841,
            "yv": -36.34858912688049,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.542492875873878,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7121.5959229819355,
            "y": 4760.01188767658,
            "renderX": 7121.5959229819355,
            "renderY": 4760.01188767658,
            "xv": 2.405472133526731,
            "yv": 84.96595614606375,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.539949726943346,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7320.764334174726,
            "y": 4361.965619210572,
            "renderX": 7320.764334174726,
            "renderY": 4361.965619210572,
            "xv": 14.584804424318365,
            "yv": 83.73937831094989,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 5.595379888482249,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7311.254992375064,
            "y": 4761.466819111731,
            "renderX": 7311.254992375064,
            "renderY": 4761.466819111731,
            "xv": -65.67449258561585,
            "yv": 53.96166253574744,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 3.1430531126446692,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7165.11993977095,
            "y": 4477.951050482923,
            "renderX": 7165.11993977095,
            "renderY": 4477.951050482923,
            "xv": 84.99990935003844,
            "yv": -0.12413897553427167,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.08941312146871278,
            "size": 34,
            "radius": 17,
            "speed": 85,
            "x": 7304.111555754083,
            "y": 4308.934975125887,
            "renderX": 7304.111555754083,
            "renderY": 4308.934975125887,
            "xv": 84.66045128911504,
            "yv": -7.589992590469345,
            "bound": {
                "x": 7000,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.7763201078201147,
            "radius": 16,
            "speed": 85,
            "x": 6768.127461318194,
            "y": 4567.139507862657,
            "renderX": 6768.127461318194,
            "renderY": 4567.139507862657,
            "xv": 68.44483344038996,
            "yv": -50.40143624260401,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.874603837535309,
            "radius": 16,
            "speed": 85,
            "x": 6898.622849512051,
            "y": 4711.556031428228,
            "renderX": 6898.622849512051,
            "renderY": 4711.556031428228,
            "xv": 78.00325384310767,
            "yv": 33.77117691001763,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.19865438043841,
            "radius": 16,
            "speed": 85,
            "x": 6927.050615132404,
            "y": 4675.876576032205,
            "renderX": 6927.050615132404,
            "renderY": 4675.876576032205,
            "xv": 41.77182085589378,
            "yv": -74.02779871361243,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.2757029459489453,
            "radius": 16,
            "speed": 85,
            "x": 6474.964920503516,
            "y": 4477.664781319824,
            "renderX": 6474.964920503516,
            "renderY": 4477.664781319824,
            "xv": 84.23675822739536,
            "yv": -11.365234856321287,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.1899255682959406,
            "radius": 16,
            "speed": 85,
            "x": 6759.881704114504,
            "y": 4893.4194746682015,
            "renderX": 6759.881704114504,
            "renderY": 4893.4194746682015,
            "xv": 49.32773114521837,
            "yv": -69.22264759502524,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.528733988926158,
            "radius": 16,
            "speed": 85,
            "x": 6944.122993949434,
            "y": 4602.34109912099,
            "renderX": 6944.122993949434,
            "renderY": 4602.34109912099,
            "xv": 78.70932938449752,
            "yv": 32.091143137050686,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.3230100206102309,
            "radius": 16,
            "speed": 85,
            "x": 6755.790790177536,
            "y": 4396.300141699274,
            "renderX": 6755.790790177536,
            "renderY": 4396.300141699274,
            "xv": 80.60416274106414,
            "yv": 26.98089970353187,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.7090161382337469,
            "radius": 16,
            "speed": 85,
            "x": 6542.651878726793,
            "y": 4481.141897768519,
            "renderX": 6542.651878726793,
            "renderY": 4481.141897768519,
            "xv": -64.51523996955737,
            "yv": -55.34242325441151,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.782396835894051,
            "radius": 16,
            "speed": 85,
            "x": 6882.192966899127,
            "y": 4836.820614019344,
            "renderX": 6882.192966899127,
            "renderY": 4836.820614019344,
            "xv": -5.9458081065606185,
            "yv": -84.79178831679373,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.2181085672893186,
            "radius": 16,
            "speed": 85,
            "x": 6786.022891275794,
            "y": 4895.494186040433,
            "renderX": 6786.022891275794,
            "renderY": 4895.494186040433,
            "xv": -29.360816772905828,
            "yv": 79.76805399674642,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.568760195085709,
            "radius": 16,
            "speed": 85,
            "x": 6820.534770741167,
            "y": 4543.34203963187,
            "renderX": 6820.534770741167,
            "renderY": 4543.34203963187,
            "xv": 64.21495194964585,
            "yv": 55.69057322478081,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.0675705995691476,
            "radius": 16,
            "speed": 85,
            "x": 6915.2311732372855,
            "y": 4829.822415244738,
            "renderX": 6915.2311732372855,
            "renderY": 4829.822415244738,
            "xv": 40.99157991667556,
            "yv": -74.46267773814476,
            "bound": {
                "x": 6400,
                "y": 4250,
                "w": 600,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "turret",
            "angle": 3.6232766945442836,
            "shootSpeed": 3.58,
            "timer": 2.2316666666694256,
            "pRadius": 32,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 4291,
                    "y": 3450,
                    "angle": 0
                },
                {
                    "x": 3862,
                    "y": 3450,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 32,
            "speed": 0,
            "x": 3700,
            "y": 3450,
            "renderX": 3700,
            "renderY": 3450,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3650,
                "y": 3400,
                "w": 850,
                "h": 100
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 5.902169559299281,
            "shootSpeed": 3.58,
            "timer": 2.2316666666694256,
            "pRadius": 32,
            "pSpeed": 120,
            "projectiles": [
                {
                    "x": 3859,
                    "y": 3450,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4288,
                    "y": 3450,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 32,
            "speed": 0,
            "x": 4450,
            "y": 3450,
            "renderX": 4450,
            "renderY": 3450,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3650,
                "y": 3400,
                "w": 850,
                "h": 100
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 3.745942870474324,
            "shootSpeed": 2.12,
            "timer": 0.09166666666895476,
            "pRadius": 32,
            "pSpeed": 110,
            "projectiles": [
                {
                    "x": 3760.666666666605,
                    "y": 2550,
                    "angle": 3.141592653589793
                },
                {
                    "x": 3993.4999999999,
                    "y": 2550,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4226.333333333259,
                    "y": 2550,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 32,
            "speed": 0,
            "x": 4450,
            "y": 2550,
            "renderX": 4450,
            "renderY": 2550,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3650,
                "y": 2500,
                "w": 850,
                "h": 100
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 0.8875579133425956,
            "shootSpeed": 2.28,
            "timer": 0.7316666666689096,
            "pRadius": 32,
            "pSpeed": 100,
            "projectiles": [
                {
                    "x": 4309.9999999999945,
                    "y": 2350,
                    "angle": 0
                },
                {
                    "x": 4083.333333333403,
                    "y": 2350,
                    "angle": 0
                },
                {
                    "x": 3855.000000000028,
                    "y": 2350,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 32,
            "speed": 0,
            "x": 3700,
            "y": 2350,
            "renderX": 3700,
            "renderY": 2350,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3650,
                "y": 2300,
                "w": 850,
                "h": 100
            },
            "inView": true
        },
        {
            "type": "normal",
            "angle": 0.26456994994512156,
            "radius": 18,
            "speed": 60,
            "x": 1998.7690079685906,
            "y": 401.88924484184935,
            "renderX": 1998.7690079685906,
            "renderY": 401.88924484184935,
            "xv": 57.91230274376554,
            "yv": -15.6896523516121,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.291673582371732,
            "radius": 18,
            "speed": 60,
            "x": 1725.2692197455503,
            "y": 754.8476401236654,
            "renderX": 1725.2692197455503,
            "renderY": 754.8476401236654,
            "xv": 16.5307470654497,
            "yv": -57.67785018062069,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.3695999873588156,
            "radius": 18,
            "speed": 60,
            "x": 1683.1990756583866,
            "y": 378.05226779243844,
            "renderX": 1683.1990756583866,
            "renderY": 378.05226779243844,
            "xv": 42.99132480219314,
            "yv": 41.853864717040565,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.0466600331371079,
            "radius": 18,
            "speed": 60,
            "x": 1580.5192003171876,
            "y": 764.38381743579,
            "renderX": 1580.5192003171876,
            "renderY": 764.38381743579,
            "xv": -30.02792592244085,
            "yv": 51.94539117954937,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.673386369963326,
            "radius": 18,
            "speed": 60,
            "x": 1697.4747014900893,
            "y": 294.17253590217115,
            "renderX": 1697.4747014900893,
            "renderY": 294.17253590217115,
            "xv": 49.185791016197996,
            "yv": -34.36215886859988,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.0726790153402064,
            "radius": 18,
            "speed": 60,
            "x": 2115.125801935219,
            "y": 430.6152985552246,
            "renderX": 2115.125801935219,
            "renderY": 430.6152985552246,
            "xv": 28.864614155967256,
            "yv": -52.600703889084365,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.2329961690917228,
            "radius": 32,
            "speed": 45,
            "x": 2100.6663982983177,
            "y": 168.0478675100702,
            "renderX": 2100.6663982983177,
            "renderY": 168.0478675100702,
            "xv": -14.913556888591376,
            "yv": 42.45687012640886,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.6772982573084705,
            "radius": 32,
            "speed": 45,
            "x": 1939.5381862865593,
            "y": 592.747141481084,
            "renderX": 1939.5381862865593,
            "renderY": 592.747141481084,
            "xv": -4.783531895149346,
            "yv": -44.74503126167294,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.3853166306507845,
            "radius": 32,
            "speed": 45,
            "x": 1549.373556602237,
            "y": 455.66998017220686,
            "renderX": 1549.373556602237,
            "renderY": 455.66998017220686,
            "xv": 14.457238313633866,
            "yv": 42.6144137627493,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.102020348924363,
            "radius": 11,
            "speed": 80,
            "x": 1622.6077685626592,
            "y": 244.850513539631,
            "renderX": 1622.6077685626592,
            "renderY": 244.850513539631,
            "xv": -30.387795097739016,
            "yv": 74.0039317137801,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.5375375610811295,
            "radius": 11,
            "speed": 80,
            "x": 1981.4700341013618,
            "y": 442.22149798169966,
            "renderX": 1981.4700341013618,
            "renderY": 442.22149798169966,
            "xv": -13.916945945388491,
            "yv": 78.7801917714925,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.16173596558015,
            "radius": 11,
            "speed": 80,
            "x": 1762.5534091541228,
            "y": 562.3390242904336,
            "renderX": 1762.5534091541228,
            "renderY": 562.3390242904336,
            "xv": 41.85950628647299,
            "yv": -68.1746414251863,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.3675033541797488,
            "radius": 11,
            "speed": 80,
            "x": 1973.5069929339286,
            "y": 339.525544016842,
            "renderX": 1973.5069929339286,
            "renderY": 339.525544016842,
            "xv": 77.96724158129875,
            "yv": -17.91952120463598,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.474648564958841,
            "radius": 11,
            "speed": 80,
            "x": 1841.3673327021029,
            "y": 113.20962366339029,
            "renderX": 1841.3673327021029,
            "renderY": 113.20962366339029,
            "xv": -62.857254493730125,
            "yv": 49.48702413270012,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 6.260618802527029,
            "radius": 11,
            "speed": 80,
            "x": 1763.8046646809703,
            "y": 208.23353141551803,
            "renderX": 1763.8046646809703,
            "renderY": 208.23353141551803,
            "xv": 79.97963097913811,
            "yv": 1.8051671504023326,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.357677300090449,
            "radius": 11,
            "speed": 80,
            "x": 1751.5293341797988,
            "y": 234.60237039821882,
            "renderX": 1751.5293341797988,
            "renderY": 234.60237039821882,
            "xv": 78.13955304199192,
            "yv": 17.152558129845584,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.15167868187611241,
            "radius": 11,
            "speed": 80,
            "x": 2073.0355759061285,
            "y": 227.0657345141039,
            "renderX": 2073.0355759061285,
            "renderY": 227.0657345141039,
            "xv": 79.08150606436665,
            "yv": -12.08782025807556,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.694867355728471,
            "radius": 11,
            "speed": 80,
            "x": 1875.2313599069112,
            "y": 757.6923567650093,
            "renderX": 1875.2313599069112,
            "renderY": 757.6923567650093,
            "xv": -1.4016582500356367,
            "yv": 79.98772002095139,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 6.206776394797365,
            "radius": 11,
            "speed": 80,
            "x": 1612.0575837609508,
            "y": 205.2408728562712,
            "renderX": 1612.0575837609508,
            "renderY": 205.2408728562712,
            "xv": 79.76658072224163,
            "yv": -6.106766728974464,
            "bound": {
                "x": 1500,
                "y": 100,
                "w": 650,
                "h": 700
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "turret",
            "angle": 2.803410860152458,
            "shootSpeed": 3.68,
            "timer": 0.09166666666946768,
            "pRadius": 64,
            "pSpeed": 88,
            "projectiles": [
                {
                    "x": 3910.533333333237,
                    "y": 2800,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4233.933333333229,
                    "y": 2800,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 3586.3999999999974,
                    "y": 2800,
                    "angle": 3.141592653589793,
                    "life": 0.9125
                }
            ],
            "radius": 64,
            "speed": 0,
            "x": 4550,
            "y": 2800,
            "renderX": 4550,
            "renderY": 2800,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3525,
                "y": 2725,
                "w": 1125,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 1.5542473806477388,
            "shootSpeed": 0.364,
            "timer": 0.047666666665839824,
            "pRadius": 14,
            "pSpeed": 155,
            "projectiles": [
                {
                    "x": 3950.124999999934,
                    "y": 3175,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4006.749040334551,
                    "y": 3144.0048734997436,
                    "angle": 3.211405823669566
                },
                {
                    "x": 4062.155410292732,
                    "y": 3202.1207356877244,
                    "angle": 3.07177948351002
                },
                {
                    "x": 4118.041666666589,
                    "y": 3175,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4175.545190672266,
                    "y": 3155.8082501611784,
                    "angle": 3.211405823669566
                },
                {
                    "x": 4230.951560630447,
                    "y": 3190.3173590262895,
                    "angle": 3.07177948351002
                },
                {
                    "x": 4287.249999999962,
                    "y": 3175,
                    "angle": 3.141592653589793
                },
                {
                    "x": 4344.34134100998,
                    "y": 3167.6116268226133,
                    "angle": 3.211405823669566
                },
                {
                    "x": 4401.036231199747,
                    "y": 3178.4238802529353,
                    "angle": 3.07177948351002
                }
            ],
            "shootDirections": [
                3.141592653589793,
                3.211405823669566,
                3.07177948351002
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 3895.9363004181887,
                    "y": 3213.7439081253206,
                    "angle": 3.07177948351002,
                    "life": 0.12499999999999978
                }
            ],
            "radius": 14,
            "speed": 0,
            "x": 4450,
            "y": 3175,
            "renderX": 4450,
            "renderY": 3175,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3850,
                "y": 3125,
                "w": 650,
                "h": 100
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 2.0820217151858125,
            "shootSpeed": 0.922,
            "timer": 0.36766666666747516,
            "pRadius": 14,
            "pSpeed": 155,
            "projectiles": [
                {
                    "x": 4214.083333333315,
                    "y": 2975,
                    "angle": 0
                },
                {
                    "x": 4071.9999999999563,
                    "y": 2975,
                    "angle": 0
                },
                {
                    "x": 3929.9166666666397,
                    "y": 2975,
                    "angle": 0
                },
                {
                    "x": 3786.5416666666565,
                    "y": 2975,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 14,
            "speed": 0,
            "x": 3700,
            "y": 2975,
            "renderX": 3700,
            "renderY": 2975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3650,
                "y": 2925,
                "w": 650,
                "h": 100
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 1.3200476689814697,
            "shootSpeed": 0.436,
            "timer": 0.005666666665495031,
            "pRadius": 14,
            "pSpeed": 155,
            "projectiles": [
                {
                    "x": 3832.5354029586033,
                    "y": 3361.595345274729,
                    "angle": 0.08726646259971647
                },
                {
                    "x": 3766.911077221819,
                    "y": 3355.8539607212224,
                    "angle": 0.08726646259971647
                }
            ],
            "shootDirections": [
                0.08726646259971647
            ],
            "csd": 0,
            "deadProjectiles": [
                {
                    "x": 3902.0199831504924,
                    "y": 3367.674458331383,
                    "angle": 0.08726646259971647,
                    "life": 0.6499999999999999
                }
            ],
            "radius": 14,
            "speed": 0,
            "x": 3700,
            "y": 3350,
            "renderX": 3700,
            "renderY": 3350,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 3450,
                "y": 3300,
                "w": 450,
                "h": 100
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 6.249158814296417,
            "shootSpeed": 0.436,
            "timer": 0.2236666666654944,
            "pRadius": 14,
            "pSpeed": 155,
            "projectiles": [
                {
                    "x": 4282.722306945452,
                    "y": 3364.634901803056,
                    "angle": 3.0543261909900763
                },
                {
                    "x": 4349.633384167271,
                    "y": 3358.7809410818336,
                    "angle": 3.0543261909900763
                },
                {
                    "x": 4416.54446138909,
                    "y": 3352.926980360611,
                    "angle": 3.0543261909900763
                }
            ],
            "shootDirections": [
                3.0543261909900763
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 14,
            "speed": 0,
            "x": 4450,
            "y": 3350,
            "renderX": 4450,
            "renderY": 3350,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 4250,
                "y": 3300,
                "w": 300,
                "h": 100
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 0.6586898029125109,
            "switchTime": 3.2,
            "switchTimer": 2.3083333333306277,
            "currentSwitch": true,
            "radius": 25,
            "speed": 22,
            "x": 2557.5655869230604,
            "y": 4628.602260600484,
            "renderX": 2557.5655869230604,
            "renderY": 4628.602260600484,
            "xv": -17.397486856740482,
            "yv": 13.465788171122483,
            "bound": {
                "x": 2400,
                "y": 4150,
                "w": 350,
                "h": 650
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 4.734094126232346,
            "switchTime": 3.2,
            "switchTimer": 2.3083333333306277,
            "currentSwitch": false,
            "radius": 25,
            "speed": 22,
            "x": 2576.5905493852115,
            "y": 4590.669720385718,
            "renderX": 2576.5905493852115,
            "renderY": 4590.669720385718,
            "xv": 0.4774757157232222,
            "yv": -21.99481795653,
            "bound": {
                "x": 2400,
                "y": 4150,
                "w": 350,
                "h": 650
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 6.21012038917064,
            "switchTime": 3.2,
            "switchTimer": 2.3083333333306277,
            "currentSwitch": false,
            "radius": 25,
            "speed": 22,
            "x": 2528.147219232508,
            "y": 4317.977602727014,
            "renderX": 2528.147219232508,
            "renderY": 4317.977602727014,
            "xv": 21.941302815114696,
            "yv": -1.6059983734238152,
            "bound": {
                "x": 2400,
                "y": 4150,
                "w": 350,
                "h": 650
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 6.147365126941647,
            "switchTime": 3.2,
            "switchTimer": 2.3083333333306277,
            "currentSwitch": true,
            "radius": 25,
            "speed": 22,
            "x": 2699.8199605411173,
            "y": 4279.283296943154,
            "renderX": 2699.8199605411173,
            "renderY": 4279.283296943154,
            "xv": 21.797393411555138,
            "yv": -2.9788656334069037,
            "bound": {
                "x": 2400,
                "y": 4150,
                "w": 350,
                "h": 650
            },
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.8732321000895242,
            "radius": 8,
            "speed": 70,
            "x": 7268.730619400048,
            "y": 441.63343528568953,
            "renderX": 7268.730619400048,
            "renderY": 441.63343528568953,
            "xv": -20.849241756625137,
            "yv": 66.82296849268072,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.9640979081033831,
            "radius": 8,
            "speed": 70,
            "x": 7241.036232000743,
            "y": 396.0348152216952,
            "renderX": 7241.036232000743,
            "renderY": 396.0348152216952,
            "xv": 26.826799995174998,
            "yv": 64.65541587538416,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 3.0742550997158578,
            "radius": 8,
            "speed": 70,
            "x": 7227.109956155404,
            "y": 390.825947546476,
            "renderX": 7227.109956155404,
            "renderY": 390.825947546476,
            "xv": -69.84135784280399,
            "yv": 4.7100673746138915,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.787007169247565,
            "radius": 8,
            "speed": 70,
            "x": 7260.295317975704,
            "y": 279.25431352159114,
            "renderX": 7260.295317975704,
            "renderY": 279.25431352159114,
            "xv": 61.55859125193613,
            "yv": 33.32476321111754,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.679101931953879,
            "radius": 8,
            "speed": 70,
            "x": 7237.432614599957,
            "y": 52.84736191730232,
            "renderX": 7237.432614599957,
            "renderY": 52.84736191730232,
            "xv": -57.611616540495,
            "yv": 39.76055381393679,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 0.7004560618629558,
            "radius": 8,
            "speed": 70,
            "x": 7212.21961603305,
            "y": 302.45280937619884,
            "renderX": 7212.21961603305,
            "renderY": 302.45280937619884,
            "xv": 53.51838132447758,
            "yv": -45.11965049075412,
            "bound": {
                "x": 7200,
                "y": 0,
                "w": 100,
                "h": 850
            },
            "isLava": false,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.1418200453149727,
            "radius": 32,
            "speed": 200,
            "x": 6492.9696056310595,
            "y": 2627.8907488977316,
            "renderX": 6492.9696056310595,
            "renderY": 2627.8907488977316,
            "xv": 108.09872708734201,
            "yv": -168.26962055610736,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.959779525230282,
            "radius": 32,
            "speed": 200,
            "x": 6949.783374058934,
            "y": 2550.474667121217,
            "renderX": 6949.783374058934,
            "renderY": 2550.474667121217,
            "xv": -196.7034944417647,
            "yv": 36.16262261505169,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.328611668278748,
            "radius": 32,
            "speed": 200,
            "x": 6837.532492158779,
            "y": 2583.091752863586,
            "renderX": 6837.532492158779,
            "renderY": 2583.091752863586,
            "xv": -137.4672566376295,
            "yv": -145.26786758441835,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 2.5702558979670442,
            "radius": 32,
            "speed": 200,
            "x": 6565.89539308412,
            "y": 2401.6720847706215,
            "renderX": 6565.89539308412,
            "renderY": 2401.6720847706215,
            "xv": -168.23577339977257,
            "yv": -108.15139642455098,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 1.0466248333283024,
            "radius": 32,
            "speed": 200,
            "x": 6872.545785870411,
            "y": 2606.1562708793567,
            "renderX": 6872.545785870411,
            "renderY": 2606.1562708793567,
            "xv": 100.09918123891872,
            "yv": -173.14778056705808,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.722859366579719,
            "radius": 32,
            "speed": 200,
            "x": 6526.085142907754,
            "y": 2363.023249574991,
            "renderX": 6526.085142907754,
            "renderY": 2363.023249574991,
            "xv": -2.094038977287831,
            "yv": -199.98903720144662,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 5.4284796560212,
            "radius": 32,
            "speed": 200,
            "x": 6699.8623859403915,
            "y": 2359.0014774324923,
            "renderX": 6699.8623859403915,
            "renderY": 2359.0014774324923,
            "xv": -131.2881176765759,
            "yv": 150.8755452581417,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        },
        {
            "type": "normal",
            "angle": 4.3763730196206865,
            "radius": 32,
            "speed": 200,
            "x": 6911.801531146729,
            "y": 2644.2370900667884,
            "renderX": 6911.801531146729,
            "renderY": 2644.2370900667884,
            "xv": -65.94569677093939,
            "yv": 188.8151611428365,
            "bound": {
                "x": 6400,
                "y": 2150,
                "w": 600,
                "h": 600
            },
            "isLava": true,
            "inView": false
        }
    ]
    const safes = [];
    const texts = [
        {
            "x": 2325,
            "y": 2325,
            "angle": -45,
            "text": "Planet",
            "size": 45,
            "story": false
        },
        {
            "x": 2675,
            "y": 2325,
            "angle": 45,
            "text": "of",
            "size": 45,
            "story": false
        },
        {
            "x": 2325,
            "y": 2675,
            "angle": 45,
            "text": "Simple",
            "size": 45,
            "story": false
        },
        {
            "x": 2675,
            "y": 2675,
            "angle": -45,
            "text": "Challenges",
            "size": 45,
            "story": false
        },
        {
            "x": 2500,
            "y": 2500,
            "angle": 0,
            "text": "Welcome!",
            "size": 30,
            "story": false
        },
        {
            "x": 1825,
            "y": -50,
            "angle": 0,
            "text": "Challenge 2: Dodge!",
            "size": 30,
            "story": false
        },
        {
            "x": 325,
            "y": -50,
            "angle": 0,
            "text": "Challenge 1: Navigate!",
            "size": 30,
            "story": false
        },
        {
            "x": 4375,
            "y": 1250,
            "angle": 0,
            "text": "Challenge 3: platform!",
            "size": 30,
            "story": false
        },
        {
            "x": 4700,
            "y": 750,
            "angle": 0,
            "text": "Walljump!",
            "size": 18,
            "story": false
        },
        {
            "x": 4400,
            "y": 525,
            "angle": 0,
            "text": "<-",
            "size": 24,
            "story": false
        },
        {
            "x": 4250,
            "y": 1025,
            "angle": 90,
            "text": "<-",
            "size": 24,
            "story": false
        },
        {
            "x": 4450,
            "y": 925,
            "angle": 135,
            "text": "<-",
            "size": 24,
            "story": false
        },
        {
            "x": 4075,
            "y": 2100,
            "angle": 0,
            "text": "Challenge 4: Cross!",
            "size": 30,
            "story": false
        },
        {
            "x": 2575,
            "y": 3450,
            "angle": 180,
            "text": "Challenge 5: Drive!",
            "size": 30,
            "story": false
        },
        {
            "x": 250,
            "y": 4725,
            "angle": 0,
            "text": "Challenge 6: Fall!",
            "size": 30,
            "story": false
        },
        {
            "x": 125,
            "y": 2225,
            "angle": 0,
            "text": "Challenge 6: Typing!",
            "size": 30,
            "story": false
        },
        {
            "x": 6525,
            "y": -25,
            "angle": 0,
            "text": "Challenge 7: Spiral!",
            "size": 30,
            "story": false
        },
        {
            "x": 8625,
            "y": 275,
            "angle": 0,
            "text": "Challenge 8: Speedrun!",
            "size": 30,
            "story": false
        },
        {
            "x": 6675,
            "y": 2100,
            "angle": 0,
            "text": "Challenge 9: Survive!",
            "size": 30,
            "story": false
        },
        {
            "x": 7000,
            "y": 3550,
            "angle": 0,
            "text": "FINAL CHALLENGE: Escape!",
            "size": 30,
            "story": false
        },
        {
            "x": 6450,
            "y": 2100,
            "angle": 90,
            "text": "->",
            "size": 30,
            "story": false
        },
        {
            "x": 8650,
            "y": 1675,
            "angle": 0,
            "text": "Secret Challenge -1: Push!",
            "size": 30,
            "story": false
        }
    ]

    shared.linkDoors = {};
    shared.linkButtons = {};
    shared.morphsTriggered = {};

    const str = `shared.C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
        // render links
        ctx.strokeStyle = '#969696';
        ctx.setLineDash([50, 70]);
        ctx.lineDashOffset = -window.frames / 60 * 100 * 2;
        ctx.lineWidth = 10;
        for(let id in shared.linkButtons){
            if(shared.linkDoors[id] === undefined) continue;
            const btnPos = {x: shared.linkButtons[id].pos.x + shared.linkButtons[id].dimensions.x/2, y: shared.linkButtons[id].pos.y + shared.linkButtons[id].dimensions.y/2};
            const doorPos = {x: shared.linkDoors[id].pos.x + shared.linkDoors[id].dimensions.x/2, y: shared.linkDoors[id].pos.y + shared.linkDoors[id].dimensions.y/2};
            
            ctx.globalAlpha = shared.morphsTriggered[id] === true ? 0.3 : 0.8;
            
            ctx.beginPath();
            ctx.lineTo(btnPos.x, btnPos.y);
            ctx.lineTo(doorPos.x, doorPos.y);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.globalAlpha = 1;
        ctx.setLineDash([]);
    }});\n` + convertOldExMap(obs, enemies, safes, texts, counter, 'posc');
    
    eval(str);

    if(shared.isServer !== true) obstacles.splice(319,4);
    
    mapDimensions.x=20000;
    mapDimensions.y=10000;

    spawnPosition.x=5000;
    spawnPosition.y=5000;
    shared.respawnPlayer();
    colors.background='#6ab95a'; colors.tile='#27811b';
}

// var counter = 2000;// add 1000 for every new map so color changers dont conflict
// var flashLava = false;
// var lavaType = flashLava === true ? [0,1] : [1];

// var typeMap = {
//     'normal': {
//         type: [1,[],[0]],
//     },
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
//             p.conveyorForce = params.force / 10000 * 1.5 * 5 / 16.66;
//             return p;
//         }
//     },
//     // 'trans': {
//     //     type: [1,[],[20]],
//     //     customMap: () => {
//     //         return {hex: '#000000'}
//     //     }
//     // },
//     'block': {
//         type: [1,[],[20]],
//         customMap: (params) => {
//             return {hex: params.color};
//         }
//     },
//     'circle-normal': {
//         type: [0,[],[0]],
//         radius: 'r' // this means map radius to r
//         // all other params filled in 1:1, so x will be filled in from x, y from y, etc.
//     },
//     'circle-lava': {
//         type: [0,[],lavaType],
//         radius: 'r',
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
//         customMap: (params) => {
//             if(params.canCollide === false){
//                 return {type: [1,[],[1]]};
//             }
//             const upper = {
//                 "x": 11793.206102995191,
//                 "y": 5413.695972970335
//             };
//             const lower = {
//                 "x": 13407.869308854297,
//                 "y": 6437.125547622557
//             }
//             const x = params.x * 2;
//             const y = params.y * 2;
//             if(x > upper.x && x < lower.x && y > upper.y && y < lower.y){
//                 return {type: [1,[],[0,1]]};
//             }
//             return {type: [1,[],lavaType]};
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
//     'poly-lava': {
//         type: [2,[],lavaType],
//         customMap: (params) => {
//             const p = {points: []};
//             for(let i = 0; i < params.points.length; i++){
//                 p.points.push([
//                     params.points[i][0]*2,
//                     params.points[i][1]*2
//                 ])
//             }
//             const upper = {
//                 "x": 11793.206102995191,
//                 "y": 5413.695972970335
//             };
//             const lower = {
//                 "x": 13407.869308854297,
//                 "y": 6437.125547622557
//             }

//             const upper2 = {
//                 "x": 8809.477705153893,
//                 "y": 5885.871786067637
//             }
//             const lower2 = {
//                 "x": 8982.848374859475,
//                 "y": 6257.883149949322
//             }
//             const x = params.points[0][0] * 2;
//             const y = params.points[0][1] * 2;
//             if(x > upper.x && x < lower.x && y > upper.y && y < lower.y){
//                 p.type = [2,[],[0,1]];
//             } else if(x > upper2.x && x < lower2.x && y > upper2.y && y < lower2.y){
//                 p.type = [2,[],[0,1]];
//             }
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

//             if(params.collidable) p.type = [1,[0],lavaType]
//             else p.type = [1,[0],[1]]
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
//     'timetrap': {
//         type: [1,[],[17]],
//         customMap: (params) => {
//             //shared.C(1,[],[17],{h:200,w:300,y:700,x:300,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});
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
//         type: [0,[],lavaType],
//         customMap: (params) => {
//             return {r: Math.min(params.radius, params.radius2)*2};
//         }
//     },
//     'safe': {
//         type: [1,[],[11]],
//     },
//     'circle-safe': {
//         type: [0,[],[11]],
//         r: 'r'
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
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle * 180 / Math.PI,
//                 rotateSpeed: params.rotateSpeed / 360 / 220,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
//             };
//         }
//     },
//     'rotate-lava': {
//         type: [1,[1],[0,1]],
//         customMap: (params) => {
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle * 180 / Math.PI,
//                 rotateSpeed: params.rotateSpeed / 360 / 220,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
//             };
//         }
//     },
//     'rotatingsafe': {
//         type: [1,[1],[11]],
//         customMap: (params) => {
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: params.angle * 180 / Math.PI,
//                 rotateSpeed: params.rotateSpeed / 360 / 220,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
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
//         //shared.C(1,[],[18],{h:200,w:300,y:700,x:300,sizeChangePermanent:false,sizeMult:1.5,});
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
//                 toSnapX: params.toSnapX,
//                 toSnapY: params.toSnapY
//             }
//         }
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
//             return {
//                 color: '#d6d612',
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
//             return {
//                 coinDoorColor: '#d6d612',
//                 coindoorCoinAmount: coinAmount
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
//     },//shared.C(3,[],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,hex:colourRgb(100,100,100),});
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
//             }//"shared.C(3,[1],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,pivotY:800,pivotX:450,rotateSpeed:0,initialRotation:45,hex:colourRgb(100,100,100),});"
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
//             p.platformerFriction = 0.98;
//             p.platformerAngleRotateSpeed = 0;
//             p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 5 / 16.66;
//             p.jumpForce = params.jumpHeight / 8.2 * 2.32;
//             p.jumpDecay = 0.98;
//             p.maxJumpCooldown = 32 * 16.6;
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
//     'musicchange': {
//         type: [1,[],[26]],
//         customMap: (params) => {
//             return {
//                 x: params.x * 2,
//                 y: params.y * 2,
//                 w: params.w * 2,
//                 h: params.h * 2,
//                 musicPath: params.musicPath
//             };
//         }
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
//         var xv${counter} = ${params.xv/42*1.5};
//         var yv${counter} = ${params.yv/42*1.5};
//         shared.C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
//         shared.C(1,[3],[1],{w:${size},h:${size},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
//         shared.C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
//             shared.C(0,[3],[1],{r:${projectileParams.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
//             e.pos.y += yv${counter};
//             e.pos.x += xv${counter};
//             /*delete obstacle*/
//             if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
//                 shared.tickFns.push(()=>{
//                     for(let i = 0; i < obstacles.length; i++){
//                         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
//                     }
//                     /*for(let key in shared.idToObs){
//                         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
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
//         shared.C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{

//             if(switchState${counter} === true){
//                 e.pos.y += yv${counter};
//                 e.pos.x += xv${counter};
//                 if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
//                     xv${counter} = xv${counter} * -1;
//                 }
//                 if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
//                     yv${counter} = yv${counter} * -1;
//                 }
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
//                 pos${counter} = {
//                     x: e.pos.x,
//                     y: e.pos.y
//                 }
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
// }

// var safes =.map(p => {
//     p.type = "safe";
//     return p;
// });

// var texts = .map(p => {
//     p.type = "text";
//     return p;
// });

// var enemies = 

// obs.unshift(...safes);
// obs.push(...texts);

// var alreadyLogged = {color: true, resetcoins: true, roundedcorners: true, roundedlava: true};// already covered by special if statements

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
//         counter++;
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
//         shared.C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = shared.players[shared.selfId];
//             if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {
//                 colors.background="${o.tileColor}"; colors.tile="${o.bgColor}";
//             }
//         },});\n`;
//     } else if(o.type === 'resetcoins'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         const minX = o.x - 100;
//         const minY = o.y - 100;
//         const maxX = o.x + o.w + 100;
//         const maxY = o.y + o.h + 100;
        
//         counter++;
//         let c = counter;
//         str += `var insideResetCoins${c} = false;
//         var minX${c}, minY${c}, maxX${c}, maxY${c};
//         minX${c} = ${minX};minY${c} = ${minY};maxX${c} = ${maxX};maxY${c} = ${maxY};
//         minX${c} = ${minX};minY${c} = ${minY};maxX${c} = ${maxX};maxY${c} = ${maxY};
//         shared.C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = shared.players[shared.selfId];
//             if ((player.pos.x) > md(minX${c}) && (player.pos.x) < md(maxX${c}) && (player.pos.y) > md(minY${c}) && (player.pos.y) < md(maxY${c})) {
//                 if(insideResetCoins${c} === false){
//                     insideResetCoins${c} = true;
//                     for(let z = 0; z < shared.obstacles.length; z++){
//                         const obz = shared.obstacles[z];
//                         if(obz.isCoindoor === true){
//                             // coindoor
//                             obz.coins = obz.maxCoins
//                         } else if(obz.coinAmount !== undefined){
//                             // coin
//                             obz.collected = false;
//                         }
//                     }
//                 }
//             } else {
//                 insideResetCoins${c} = false;
//             }
//         },});\n`;
//     } else if(o.type === 'tptrap'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         counter++;

//         str += `shared.C(1,[],[17],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:${o.maxTime*1000},sf:(e)=>{
//             if(e.timeTrapTime <= 0){
//                 players[selfId].pos.x = ${o.tpx*2};
//                 players[selfId].pos.y = ${o.tpy*2};
//             }
//         },});`;
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

//     //shared.C(1,[],[0],{h:100,w:1100,y:4300,x:4600,});
//     str += `shared.C(${typeString},${paramString})\n`;
// }

// // console.log(str);
// eval(str);

// obstacles todo
// breakable, tptrap, square enemy, turret enemy, switch enemy

// maybe typing, circleSlice (circle-slice and circle-hollow-slice), sentry (circle-sentry two obs, one with customCode), tptrap (custom code + nokill tt), pusher