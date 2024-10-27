var counter = 7000;// add 1000 for every new map so color changers dont conflict
// var lastRotAngle = 0;
var obs = [
    {
        "x": 8250,
        "y": 8850,
        "w": 1750,
        "h": 1150,
        "type": "speed",
        "speedInc": 2,
        "inView": false
    },
    {
        "x": 8400,
        "y": 9350,
        "w": 450,
        "h": 150,
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
        "y": 9800,
        "w": 500,
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
        "x": 8550,
        "y": 9600,
        "w": 200,
        "h": 400,
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
        "x": 8350,
        "y": 9350,
        "w": 200,
        "h": 300,
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
        "x": 8250,
        "y": 9600,
        "w": 500,
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
        "x": 8550,
        "y": 9500,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    8550,
                    9650
                ],
                [
                    8550,
                    9800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8550,
                    9350
                ],
                [
                    8550,
                    9200
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
        "x": 8400,
        "y": 9500,
        "w": 500,
        "h": 100,
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
        "x": 8550,
        "y": 9800,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    8550,
                    9600
                ],
                [
                    8550,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8550,
                    10000
                ],
                [
                    8550,
                    10100
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
        "x": 5300,
        "y": 6650,
        "w": 350,
        "h": 500,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 9400,
        "y": 5900,
        "w": 500,
        "h": 450,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 9750,
        "y": 5000,
        "w": 100,
        "h": 200,
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
        "x": 8800,
        "y": 7050,
        "w": 450,
        "h": 100,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 8600,
        "y": 6350,
        "w": 850,
        "h": 700,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 8900,
        "y": 7100,
        "w": 350,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 5300,
        "y": 5000,
        "w": 350,
        "h": 350,
        "type": "zone",
        "value": 10,
        "inView": false
    },
    {
        "x": 9400,
        "y": 6050,
        "w": 500,
        "h": 300,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 9750,
        "y": 6050,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    9900,
                    6050
                ],
                [
                    10050,
                    6050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9600,
                    6050
                ],
                [
                    9450,
                    6050
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
        "x": 8600,
        "y": 6350,
        "w": 850,
        "h": 700,
        "type": "speed",
        "speedInc": 3,
        "inView": false
    },
    {
        "x": 9300,
        "y": 6350,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9450,
                    6350
                ],
                [
                    9600,
                    6350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9300,
                    6500
                ],
                [
                    9300,
                    6650
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
        "y": 6300,
        "w": 200,
        "h": 50,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5700,
        "w": 50,
        "h": 50,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 2350,
        "y": 6150,
        "w": 100,
        "h": 200,
        "type": "grav",
        "force": 4350,
        "dir": {
            "x": 4350,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3200,
        "y": 6350,
        "w": 300,
        "h": 250,
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
        "x": 9500,
        "y": 6325,
        "w": 525,
        "h": 650,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9450,
        "y": 6200,
        "w": 575,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9525,
        "y": 6225,
        "w": 475,
        "h": 575,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7125,
        "y": 6175,
        "w": 525,
        "h": 975,
        "color": "#ff0000",
        "type": "block",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6300,
        "w": 100,
        "h": 300,
        "type": "size",
        "size": 11.75,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6200,
        "w": 500,
        "h": 600,
        "type": "tptrap",
        "time": 0,
        "maxTime": 5.5,
        "cdmult": 3,
        "trapType": "death",
        "tpx": 5775,
        "tpy": 5675,
        "inView": false
    },
    {
        "x": 7450,
        "y": 7100,
        "w": 100,
        "h": 50,
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
        "x": 7350,
        "y": 6800,
        "w": 50,
        "h": 50,
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
        "x": 7150,
        "y": 6800,
        "w": 200,
        "h": 350,
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
        "x": 7400,
        "y": 6800,
        "w": 50,
        "h": 350,
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
        "x": 7500,
        "y": 6800,
        "w": 150,
        "h": 300,
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
        "x": 6350,
        "y": 5650,
        "w": 50,
        "h": 50,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": -3500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 6150,
        "y": 5650,
        "w": 250,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6250,
        "y": 5650,
        "w": 100,
        "h": 150,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": -3500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 6400,
        "y": 5350,
        "w": 50,
        "h": 50,
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
        "x": 8900,
        "y": 7100,
        "w": 350,
        "h": 50,
        "color": "#ff0000",
        "type": "block",
        "inView": false
    },
    {
        "x": 8800,
        "y": 7050,
        "w": 100,
        "h": 100,
        "type": "speed",
        "speedInc": 3,
        "inView": false
    },
    {
        "x": 9400,
        "y": 5900,
        "w": 250,
        "h": 150,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 9300,
        "y": 6600,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9150,
                    6600
                ],
                [
                    9000,
                    6600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9300,
                    6450
                ],
                [
                    9300,
                    6300
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
                9400,
                5900
            ],
            [
                9475,
                5900
            ],
            [
                9400,
                6000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9400,
            "right": 9475,
            "top": 5900,
            "bottom": 6000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9575,
                5900
            ],
            [
                9650,
                5900
            ],
            [
                9650,
                6000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9575,
            "right": 9650,
            "top": 5900,
            "bottom": 6000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9525,
                5950
            ],
            [
                9600,
                6050
            ],
            [
                9450,
                6050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9450,
            "right": 9600,
            "top": 5950,
            "bottom": 6050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8600,
        "y": 5500,
        "w": 1075,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 5200,
        "w": 450,
        "h": 175,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 0,
            "y": -2500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 9375,
        "y": 7125,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9850,
        "y": 5200,
        "w": 150,
        "h": 850,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 9850,
        "y": 5200,
        "w": 150,
        "h": 850,
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
        "points": [
            [
                9850,
                5500
            ],
            [
                9950,
                5500
            ],
            [
                9850,
                5600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9850,
            "right": 9950,
            "top": 5500,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                10000,
                5550
            ],
            [
                10000,
                5750
            ],
            [
                9900,
                5650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9900,
            "right": 10000,
            "top": 5550,
            "bottom": 5750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8525,
        "y": 5000,
        "w": 1325,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 8600,
        "y": 5000,
        "w": 1250,
        "h": 350,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 1500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6200,
        "w": 100,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6200,
        "w": 100,
        "h": 350,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6800,
        "w": 500,
        "h": 375,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.6,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7975,
        "y": 4975,
        "w": 625,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6800,
        "w": 500,
        "h": 350,
        "type": "speed",
        "speedInc": 2.35,
        "inView": false
    },
    {
        "x": 7350,
        "y": 6200,
        "w": 325,
        "h": 100,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7500,
        "y": 6200,
        "w": 200,
        "h": 600,
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
        "x": 7150,
        "y": 6550,
        "w": 300,
        "h": 150,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7300,
        "y": 6200,
        "w": 200,
        "h": 500,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 0,
            "y": -3500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6550,
        "w": 150,
        "h": 150,
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
        "x": 6550,
        "y": 5950,
        "w": 300,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6700,
        "y": 5775,
        "w": 250,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6650,
        "y": 5650,
        "w": 250,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6400,
        "y": 5650,
        "w": 250,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 1500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 6000,
        "y": 6075,
        "w": 300,
        "h": 50,
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
        "x": 5975,
        "y": 6100,
        "w": 50,
        "h": 100,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 1500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 5750,
        "y": 6075,
        "w": 250,
        "h": 50,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 5750,
        "y": 5650,
        "w": 400,
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
        "x": 5750,
        "y": 5650,
        "w": 1150,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 11.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 5750,
        "y": 5650,
        "w": 1150,
        "h": 550,
        "type": "speed",
        "speedInc": 1.95,
        "inView": false
    },
    {
        "x": 6600,
        "y": 6150,
        "w": 300,
        "h": 50,
        "type": "tp",
        "tpx": 7200,
        "tpy": 6225,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 6800,
        "y": 5750,
        "radius": 150,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    6800,
                    5650
                ],
                [
                    6800,
                    5600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    6900,
                    5750
                ],
                [
                    6950,
                    5750
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
        "x": 5900,
        "y": 6650,
        "w": 100,
        "h": 350,
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
        "x": 5900,
        "y": 6200,
        "w": 600,
        "h": 950,
        "type": "speed",
        "speedInc": 2.5,
        "inView": false
    },
    {
        "x": 5900,
        "y": 6300,
        "w": 300,
        "h": 875,
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
        "x": 6200,
        "y": 6300,
        "w": 300,
        "h": 200,
        "type": "grav",
        "force": 15000,
        "dir": {
            "x": 0,
            "y": 15000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6000,
        "y": 6300,
        "w": 400,
        "h": 200,
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
        "x": 6250,
        "y": 6450,
        "w": 175,
        "h": 50,
        "type": "tp",
        "tpx": 5775,
        "tpy": 5675,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 5975,
        "y": 7075,
        "radius": 150,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    6050,
                    7075
                ],
                [
                    6125,
                    7075
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5900,
                    7075
                ],
                [
                    5825,
                    7075
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
        "x": 7850,
        "y": 6250,
        "w": 475,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7850,
        "y": 6300,
        "w": 450,
        "h": 500,
        "type": "raxis",
        "rx": true,
        "ry": true,
        "inView": false
    },
    {
        "x": 8100,
        "y": 6300,
        "w": 50,
        "h": 600,
        "type": "grav",
        "force": 1000,
        "dir": {
            "x": 0,
            "y": -1000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 7900,
        "y": 6000,
        "w": 50,
        "h": 250,
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
        "x": 7850,
        "y": 6250,
        "w": 175,
        "h": 50,
        "type": "speed",
        "speedInc": 4,
        "inView": false
    },
    {
        "x": 7850,
        "y": 6250,
        "w": 225,
        "h": 600,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": 6000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 7750,
        "y": 6300,
        "w": 250,
        "h": 600,
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
        "x": 8150,
        "y": 6300,
        "w": 225,
        "h": 600,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": -6000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 8100,
        "y": 6250,
        "w": 225,
        "h": 50,
        "type": "tp",
        "tpx": 5975,
        "tpy": 7075,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7850,
        "y": 6250,
        "w": 200,
        "h": 50,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 8100,
        "y": 6300,
        "w": 200,
        "h": 50,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 7200,
        "y": 5000,
        "w": 650,
        "h": 750,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7700,
        "y": 5700,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7250,
        "y": 5550,
        "w": 600,
        "h": 200,
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
        "x": 7800,
        "y": 5821.666666666885,
        "w": 50,
        "h": 75,
        "type": "move",
        "points": [
            [
                7800,
                5625
            ],
            [
                7800,
                5825
            ]
        ],
        "speed": 400,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 7800,
            "y": 5825
        },
        "pointTo": {
            "x": 7800,
            "y": 5625
        },
        "xv": 2.4492935982947064e-14,
        "yv": -400,
        "inView": false
    },
    {
        "x": 8025,
        "y": 6800,
        "w": 150,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7850,
        "y": 5700,
        "w": 600,
        "h": 550,
        "type": "speed",
        "speedInc": 1.2,
        "inView": false
    },
    {
        "x": 7850,
        "y": 5700,
        "w": 600,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7900,
        "y": 6100,
        "w": 100,
        "h": 150,
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
        "x": 7900,
        "y": 6000,
        "w": 550,
        "h": 100,
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
        "y": 5800,
        "w": 100,
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
        "x": 7850,
        "y": 5700,
        "w": 600,
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
        "x": 6500,
        "y": 5000,
        "w": 575,
        "h": 500,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 6400,
        "y": 5000,
        "w": 100,
        "h": 500,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 8000,
        "y": 6100,
        "w": 450,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8450,
        "y": 5700,
        "w": 150,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8000,
        "y": 5550,
        "w": 600,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8287.5,
        "y": 5625,
        "radius": 287.5,
        "radius2": 50,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 8287.5,
        "y": 6175,
        "radius": 287.5,
        "radius2": 50,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 7850,
        "y": 5800,
        "w": 500,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7850,
        "y": 5000,
        "w": 150,
        "h": 700,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7200,
        "y": 5000,
        "w": 575,
        "h": 200,
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
        "x": 7200,
        "y": 5000,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7350,
        "y": 5000,
        "w": 400,
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
        "x": 7200,
        "y": 5200,
        "w": 575,
        "h": 350,
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
        "x": 6400,
        "y": 5400,
        "w": 150,
        "h": 100,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 6400,
        "y": 5000,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6400,
        "y": 5000,
        "w": 100,
        "h": 525,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 6400,
        "y": 5000,
        "w": 100,
        "h": 500,
        "type": "platformer",
        "force": 1850,
        "dir": {
            "x": 0,
            "y": 1850
        },
        "direction": "down",
        "jumpHeight": 240,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 6400,
        "y": 5000,
        "w": 100,
        "h": 500,
        "type": "size",
        "size": 11.75,
        "inView": false
    },
    {
        "x": 6500,
        "y": 5000,
        "w": 550,
        "h": 500,
        "type": "platformer",
        "force": 3050,
        "dir": {
            "x": 0,
            "y": 3050
        },
        "direction": "down",
        "jumpHeight": 240,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 7950,
        "y": 9700,
        "w": 300,
        "h": 300,
        "type": "zone",
        "value": 9,
        "inView": false
    },
    {
        "x": 3900,
        "y": 8850,
        "w": 200,
        "h": 200,
        "type": "zone",
        "value": 8,
        "inView": false
    },
    {
        "x": 5500,
        "y": 5500,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": -2500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 5300,
        "y": 5500,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 5550,
        "y": 5950,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": -2500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 5500,
        "y": 6200,
        "w": 50,
        "h": 50,
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
        "x": 5550,
        "y": 6100,
        "w": 100,
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
        "x": 5450,
        "y": 6250,
        "w": 100,
        "h": 100,
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
        "x": 5400,
        "y": 6200,
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
        "x": 5400,
        "y": 6100,
        "w": 100,
        "h": 100,
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
        "x": 5300,
        "y": 6100,
        "w": 100,
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
        "x": 5300,
        "y": 6500,
        "w": 150,
        "h": 150,
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
        "x": 5300,
        "y": 5000,
        "w": 350,
        "h": 350,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 5300,
        "y": 7100,
        "w": 50,
        "h": 50,
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
        "x": 5300,
        "y": 5350,
        "w": 350,
        "h": 650,
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
        "x": 5300,
        "y": 6000,
        "w": 350,
        "h": 350,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 1500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 5300,
        "y": 6350,
        "w": 350,
        "h": 250,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": -1500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 5650,
        "y": 5000,
        "w": 625,
        "h": 350,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 6275,
        "y": 5000,
        "w": 125,
        "h": 125,
        "color": "#000000",
        "type": "block",
        "inView": false
    },
    {
        "x": 5650,
        "y": 5000,
        "w": 625,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 5300,
        "y": 5350,
        "w": 350,
        "h": 1300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 5300,
        "y": 5350,
        "w": 350,
        "h": 1800,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 5350,
        "y": 6750,
        "w": 300,
        "h": 150,
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
        "x": 5450,
        "y": 7050,
        "w": 200,
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
        "x": 5300,
        "y": 6900,
        "w": 200,
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
        "x": 5350,
        "y": 6650,
        "w": 250,
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
        "x": 5550,
        "y": 6800,
        "w": 100,
        "h": 350,
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
        "x": 5400,
        "y": 6900,
        "w": 100,
        "h": 250,
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
        "x": 5300,
        "y": 6900,
        "w": 100,
        "h": 250,
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
        "x": 0,
        "y": 0,
        "w": 900,
        "h": 750,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 5550,
        "y": 7050,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    5650,
                    7050
                ],
                [
                    5750,
                    7050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5450,
                    7050
                ],
                [
                    5350,
                    7050
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
        "x": 9400,
        "y": 9300,
        "w": 150,
        "h": 150,
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
        "x": 9650,
        "y": 8850,
        "w": 150,
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
        "x": 9400,
        "y": 9300,
        "w": 350,
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
        "x": 9400,
        "y": 9400,
        "w": 600,
        "h": 100,
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
        "x": 9950,
        "y": 9400,
        "w": 50,
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
        "x": 9850,
        "y": 9850,
        "w": 150,
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
        "x": 9600,
        "y": 9550,
        "w": 100,
        "h": 100,
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
        "x": 9700,
        "y": 9550,
        "w": 250,
        "h": 400,
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
        "x": 9450,
        "y": 9550,
        "w": 250,
        "h": 150,
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
        "x": 9450,
        "y": 9700,
        "w": 250,
        "h": 150,
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
        "x": 9450,
        "y": 9650,
        "w": 250,
        "h": 100,
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
        "x": 9450,
        "y": 9750,
        "w": 250,
        "h": 250,
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
        "x": 8400,
        "y": 8850,
        "w": 1050,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8850,
        "y": 9350,
        "w": 350,
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
        "x": 8850,
        "y": 9650,
        "w": 350,
        "h": 300,
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
        "x": 8850,
        "y": 9350,
        "w": 350,
        "h": 300,
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
        "y": 9650,
        "w": 300,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8550,
        "y": 9800,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8750,
        "y": 9575,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8550,
        "y": 9400,
        "w": 300,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8775,
        "y": 9600,
        "w": 75,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8850,
                9400
            ],
            [
                9100,
                9650
            ],
            [
                8850,
                9900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8850,
            "right": 9100,
            "top": 9400,
            "bottom": 9900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8550,
        "y": 9500,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8400,
        "y": 9200,
        "w": 750,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8850,
        "y": 9950,
        "w": 825,
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
        "x": 8000,
        "y": 8950,
        "w": 100,
        "h": 100,
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
        "x": 8950,
        "y": 9900,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    8950,
                    10000
                ],
                [
                    8950,
                    10100
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8850,
                    9900
                ],
                [
                    8750,
                    9900
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
        "x": 8050,
        "y": 9600,
        "w": 100,
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
        "x": 8000,
        "y": 8850,
        "w": 200,
        "h": 750,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7700,
        "y": 9250,
        "w": 50,
        "h": 100,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": -2500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 7150,
        "y": 9050,
        "w": 325,
        "h": 300,
        "type": "speed",
        "speedInc": 1.2,
        "inView": false
    },
    {
        "x": 7450,
        "y": 9350,
        "w": 300,
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
        "x": 7150,
        "y": 9350,
        "w": 300,
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
        "x": 300,
        "y": 9450,
        "w": 1300,
        "h": 150,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 300,
        "y": 9450,
        "w": 1150,
        "h": 150,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 950,
        "y": 9450,
        "w": 500,
        "h": 150,
        "type": "speed",
        "speedInc": 1,
        "inView": false
    },
    {
        "x": 1950,
        "y": 9600,
        "w": 200,
        "h": 200,
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
        "x": 700,
        "y": 8850,
        "w": 900,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1450,
        "y": 8850,
        "w": 150,
        "h": 550,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 1450,
        "y": 8850,
        "w": 150,
        "h": 600,
        "type": "size",
        "size": 12.5,
        "inView": false
    },
    {
        "x": 1400,
        "y": 8850,
        "w": 200,
        "h": 600,
        "type": "speed",
        "speedInc": 1.2,
        "inView": false
    },
    {
        "x": 1250,
        "y": 9450,
        "w": 350,
        "h": 150,
        "type": "size",
        "size": 12.5,
        "inView": false
    },
    {
        "x": 1450,
        "y": 9450,
        "w": 150,
        "h": 150,
        "type": "speed",
        "speedInc": 0.8,
        "inView": false
    },
    {
        "x": 1450,
        "y": 9450,
        "w": 150,
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
        "x": 1450,
        "y": 8850,
        "w": 150,
        "h": 750,
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
        "x": 700,
        "y": 8850,
        "w": 700,
        "h": 600,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 700,
        "y": 8850,
        "w": 650,
        "h": 350,
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
        "y": 8975,
        "w": 175,
        "h": 100,
        "type": "grav",
        "force": 100,
        "dir": {
            "x": 0,
            "y": -100
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1075,
        "y": 8975,
        "w": 175,
        "h": 100,
        "type": "grav",
        "force": 100,
        "dir": {
            "x": 0,
            "y": 100
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 7650,
        "y": 9050,
        "w": 300,
        "h": 225,
        "type": "tornado",
        "spinRadius": 1,
        "inView": false
    },
    {
        "x": 7800,
        "y": 9050,
        "w": 150,
        "h": 250,
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
        "x": 7650,
        "y": 9050,
        "w": 275,
        "h": 175,
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
        "x": 7650,
        "y": 9050,
        "w": 150,
        "h": 350,
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
        "x": 7850,
        "y": 9075,
        "w": 50,
        "h": 50,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 7650,
        "y": 9225,
        "w": 50,
        "h": 50,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 9200,
        "r": 200,
        "type": "circle-safe",
        "renderType": "circleR",
        "radius": 200,
        "inView": false
    },
    {
        "x": 7150,
        "y": 9075,
        "w": 300,
        "h": 275,
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
        "x": 7200,
        "y": 9400,
        "w": 350,
        "h": 100,
        "type": "grav",
        "force": 750,
        "dir": {
            "x": -750,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 7450,
        "y": 9400,
        "w": 50,
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
        "x": 7150,
        "y": 9350,
        "w": 600,
        "h": 450,
        "type": "speed",
        "speedInc": 1.75,
        "inView": false
    },
    {
        "x": 7150,
        "y": 9350,
        "w": 600,
        "h": 450,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 7450.833333333115,
        "y": 9400,
        "w": 50,
        "h": 250,
        "type": "move",
        "points": [
            [
                7450,
                9400
            ],
            [
                7600,
                9400
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7450,
            "y": 9400
        },
        "pointTo": {
            "x": 7600,
            "y": 9400
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6450,
        "y": 9050,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": 6000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 6450,
        "y": 9250,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 0,
            "y": -8000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 300,
        "y": 9450,
        "w": 450,
        "h": 150,
        "type": "speed",
        "speedInc": 1.4,
        "inView": false
    },
    {
        "x": 800,
        "y": 9450,
        "w": 100,
        "h": 150,
        "type": "speed",
        "speedInc": 1.2,
        "inView": false
    },
    {
        "x": 700,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    700,
                    9450
                ],
                [
                    700,
                    9400
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    750,
                    9500
                ],
                [
                    800,
                    9500
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
        "x": 1250,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1200,
                    9500
                ],
                [
                    1150,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1250,
                    9450
                ],
                [
                    1250,
                    9400
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
        "x": 375,
        "y": 9525,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    375,
                    9600
                ],
                [
                    375,
                    9650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    375,
                    9450
                ],
                [
                    375,
                    9400
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
        "x": 850,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    900,
                    9500
                ],
                [
                    950,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    850,
                    9550
                ],
                [
                    850,
                    9600
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
        "x": 900,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    850,
                    9500
                ],
                [
                    800,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    900,
                    9450
                ],
                [
                    900,
                    9400
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
        "x": 1750,
        "y": 9600,
        "w": 2350,
        "h": 400,
        "type": "timetrap",
        "time": 0,
        "maxTime": 6,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1750,
        "y": 9600,
        "w": 2350,
        "h": 400,
        "type": "speed",
        "speedInc": 1.35,
        "inView": false
    },
    {
        "x": 1850,
        "y": 9600,
        "w": 1950,
        "h": 300,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 1700,
        "y": 9600,
        "w": 150,
        "h": 300,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 1500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 6450,
        "y": 9000,
        "w": 1000,
        "h": 300,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 7150,
        "y": 9350,
        "radius": 400,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    7150,
                    9050
                ],
                [
                    7150,
                    8950
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7450,
                    9350
                ],
                [
                    7550,
                    9350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 300,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6450,
        "y": 9050,
        "w": 700,
        "h": 250,
        "type": "tornado",
        "spinRadius": 1,
        "inView": false
    },
    {
        "x": 6450,
        "y": 9000,
        "w": 700,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6450,
        "y": 9300,
        "w": 700,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 9000,
        "w": 250,
        "h": 300,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 5100,
        "y": 8850,
        "w": 850,
        "h": 500,
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
        "x": 5850,
        "y": 9350,
        "w": 100,
        "h": 600,
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
        "x": 5100,
        "y": 8825,
        "w": 875,
        "h": 525,
        "type": "speed",
        "speedInc": 5,
        "inView": false
    },
    {
        "x": 5825,
        "y": 9350,
        "w": 125,
        "h": 600,
        "type": "speed",
        "speedInc": 5,
        "inView": false
    },
    {
        "x": 5350,
        "y": 9450,
        "radius": 625,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    5350,
                    8850
                ],
                [
                    5350,
                    8825
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5950,
                    9450
                ],
                [
                    5975,
                    9450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 600,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5250,
        "y": 9850,
        "w": 50,
        "h": 50,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3950,
        "y": 9050,
        "w": 75,
        "h": 50,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3900,
        "y": 9650,
        "w": 200,
        "h": 150,
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
        "x": 4300,
        "y": 9800,
        "w": 1025,
        "h": 250,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": -4000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 3850,
        "y": 9950,
        "w": 150,
        "h": 50,
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
        "x": 3950,
        "y": 9800,
        "w": 150,
        "h": 200,
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
        "x": 3600,
        "y": 9600,
        "w": 500,
        "h": 50,
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
        "x": 3900,
        "y": 9050,
        "w": 200,
        "h": 450,
        "type": "grav",
        "force": 6500,
        "dir": {
            "x": 0,
            "y": -6500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 4050,
        "y": 9350,
        "w": 1150,
        "h": 150,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": -6000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 5000,
        "y": 9350,
        "w": 200,
        "h": 450,
        "type": "grav",
        "force": 5500,
        "dir": {
            "x": 0,
            "y": -5500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 4200,
        "y": 9600,
        "w": 900,
        "h": 200,
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
        "x": 4150,
        "y": 9600,
        "w": 250,
        "h": 400,
        "type": "grav",
        "force": 4500,
        "dir": {
            "x": 0,
            "y": -4500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 5350,
        "y": 9450,
        "radius": 500,
        "type": "circle-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    5350,
                    9450
                ],
                [
                    5350,
                    8950
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5350,
                    9450
                ],
                [
                    5850,
                    9450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3900,
        "y": 9950,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 5275,
        "tpy": 9875,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3900,
        "y": 8850,
        "w": 200,
        "h": 200,
        "type": "zone",
        "value": 8,
        "inView": false
    },
    {
        "x": 3900,
        "y": 8850,
        "w": 200,
        "h": 200,
        "spawn": {
            "x": 4000,
            "y": 8950
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 1450,
        "y": 9450,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1600,
                    9450
                ],
                [
                    1750,
                    9450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1450,
                    9600
                ],
                [
                    1450,
                    9750
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
        "x": 1900,
        "y": 9750,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1900,
                    9900
                ],
                [
                    1900,
                    10050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1900,
                    9600
                ],
                [
                    1900,
                    9450
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
        "x": 1200,
        "y": 7550,
        "w": 150,
        "h": 850,
        "type": "size",
        "size": 10,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7550,
        "w": 150,
        "h": 850,
        "type": "speed",
        "speedInc": 0.5,
        "inView": false
    },
    {
        "x": 1175,
        "y": 7550,
        "w": 175,
        "h": 850,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3.99,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1200,
        "y": 8000,
        "w": 100,
        "h": 350,
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
        "x": 1200,
        "y": 7650,
        "w": 100,
        "h": 350,
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
        "x": 1350,
        "y": 7550,
        "w": 325,
        "h": 350,
        "type": "musicchange",
        "musicPath": "/sounds/sonic wave.mp3",
        "volume": 1,
        "startTime": 0,
        "inView": false
    },
    {
        "x": 200,
        "y": 8850,
        "w": 500,
        "h": 500,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 200,
        "y": 8850,
        "w": 500,
        "h": 500,
        "type": "zone",
        "value": 7,
        "inView": false
    },
    {
        "x": 200,
        "y": 8850,
        "w": 500,
        "h": 500,
        "spawn": {
            "x": 450,
            "y": 9100
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 4600,
        "y": 7150,
        "w": 5050,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1675,
        "y": 7550,
        "w": 8325,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 20,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1700,
        "y": 7550,
        "w": 8300,
        "h": 350,
        "type": "speed",
        "speedInc": 1.85,
        "inView": false
    },
    {
        "x": 3200,
        "y": 5900,
        "w": 100,
        "h": 300,
        "type": "grav",
        "force": 10000,
        "dir": {
            "x": 0,
            "y": 10000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 3200,
        "y": 6000,
        "w": 100,
        "h": 100,
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
        "x": 3150,
        "y": 5950,
        "w": 100,
        "h": 500,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3150,
        "y": 5950,
        "w": 650,
        "h": 700,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1.4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3150,
        "y": 6200,
        "w": 200,
        "h": 400,
        "type": "grav",
        "force": 10000,
        "dir": {
            "x": 0,
            "y": 10000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 3250,
        "y": 6450,
        "w": 225,
        "h": 150,
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
        "x": 3350,
        "y": 6250,
        "w": 200,
        "h": 400,
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
        "x": 3150,
        "y": 6250,
        "w": 400,
        "h": 400,
        "type": "raxis",
        "rx": true,
        "ry": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 6025,
        "w": 50,
        "h": 175,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 5950,
        "w": 500,
        "h": 300,
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
        "x": 3350,
        "y": 6200,
        "w": 250,
        "h": 50,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3375,
        "y": 6025,
        "w": 275,
        "h": 225,
        "type": "tornado",
        "spinRadius": 3,
        "inView": false
    },
    {
        "x": 3350,
        "y": 5700,
        "w": 250,
        "h": 550,
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
        "x": 1350,
        "y": 7800,
        "w": 350,
        "h": 100,
        "type": "grav",
        "force": 1500,
        "dir": {
            "x": 0,
            "y": 1500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2850,
        "y": 8050,
        "w": 150,
        "h": 600,
        "type": "speed",
        "speedInc": 0.7,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7600,
        "w": 350,
        "h": 300,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 1350,
        "y": 7600,
        "w": 350,
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
        "x": 1600,
        "y": 7600,
        "w": 100,
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
        "x": 1350,
        "y": 7700,
        "w": 350,
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
        "x": 1350,
        "y": 7700,
        "w": 100,
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
        "x": 1350,
        "y": 7800,
        "w": 350,
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
        "x": 1350,
        "y": 7550,
        "w": 350,
        "h": 350,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 1200,
        "y": 7550,
        "w": 150,
        "h": 800,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 1225,
        "y": 7550,
        "w": 125,
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
        "x": 525,
        "y": 7550,
        "w": 200,
        "h": 175,
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
        "x": 525,
        "y": 7600,
        "w": 200,
        "h": 100,
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
        "x": 1500,
        "y": 7150,
        "w": 1100,
        "h": 100,
        "type": "size",
        "size": 11.75,
        "inView": false
    },
    {
        "x": 400,
        "y": 8175,
        "w": 700,
        "h": 225,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 400,
        "y": 8200,
        "w": 250,
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
        "x": 650,
        "y": 8200,
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
        "x": 1050,
        "y": 8350,
        "w": 150,
        "h": 250,
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
        "x": 1000,
        "y": 8200,
        "w": 50,
        "h": 200,
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
        "x": 1050,
        "y": 8350,
        "w": 100,
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
        "x": 1100,
        "y": 8350,
        "w": 50,
        "h": 100,
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
        "x": 1100,
        "y": 8400,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    1100,
                    8350
                ],
                [
                    1100,
                    8300
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1150,
                    8400
                ],
                [
                    1200,
                    8400
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
        "x": 850,
        "y": 8200,
        "w": 150,
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
        "x": 400,
        "y": 8150,
        "w": 700,
        "h": 275,
        "type": "vinette",
        "ir": 0.25,
        "or": 0.7,
        "o": 0.599,
        "vc": {
            "r": 0,
            "g": 0,
            "b": 0
        },
        "inView": false
    },
    {
        "x": 400,
        "y": 8175,
        "w": 700,
        "h": 225,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.1,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 150,
        "y": 7550,
        "w": 625,
        "h": 400,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1200,
        "y": 8400,
        "w": 100,
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
        "x": 1100,
        "y": 8450,
        "w": 200,
        "h": 150,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 350,
        "y": 8250,
        "w": 50,
        "h": 100,
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
        "x": 325,
        "y": 8300,
        "w": 75,
        "h": 50,
        "type": "grav",
        "force": 7000,
        "dir": {
            "x": 0,
            "y": -7000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1200,
        "y": 8500,
        "radius": 150,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    1300,
                    8500
                ],
                [
                    1350,
                    8500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1100,
                    8500
                ],
                [
                    1050,
                    8500
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
        "x": 550,
        "y": 8350,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": -6000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 400,
        "y": 8200,
        "w": 150,
        "h": 50,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": 6000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 650,
        "y": 8200,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 600,
        "y": 8200,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 500,
        "y": 8200,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 550,
        "y": 8200,
        "w": 50,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 400,
        "y": 8050,
        "w": 500,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 900,
        "y": 7550,
        "w": 250,
        "h": 650,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                400,
                8150
            ],
            [
                900,
                8150
            ],
            [
                900,
                8200
            ],
            [
                400,
                8250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 400,
            "right": 900,
            "top": 8150,
            "bottom": 8250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 850,
        "y": 8375,
        "w": 50,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 8350,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 750,
        "y": 8300,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 800,
        "y": 8325,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                400,
                8315
            ],
            [
                900,
                8410
            ],
            [
                900,
                8480
            ],
            [
                400,
                8480
            ]
        ],
        "type": "poly",
        "most": {
            "left": 400,
            "right": 900,
            "top": 8315,
            "bottom": 8480
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 900,
        "y": 8400,
        "w": 200,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 400,
        "y": 8450,
        "w": 500,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 750,
        "y": 8462.5,
        "radius": 325,
        "radius2": 62.5,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 750,
        "y": 8112.5,
        "radius": 325,
        "radius2": 62.5,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 325,
        "y": 8300,
        "w": 100,
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
        "x": 150,
        "y": 8200,
        "w": 150,
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
        "x": 150,
        "y": 8200,
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
        "x": 0,
        "y": 8250,
        "w": 350,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1.2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 8275,
        "w": 175,
        "h": 350,
        "type": "grav",
        "force": 6500,
        "dir": {
            "x": 0,
            "y": -6500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 125,
        "y": 8250,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 0,
        "y": 8400,
        "w": 350,
        "h": 175,
        "type": "grav",
        "force": 6500,
        "dir": {
            "x": -6500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 175,
        "y": 8300,
        "w": 175,
        "h": 300,
        "type": "grav",
        "force": 6500,
        "dir": {
            "x": 0,
            "y": 6500
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 150,
        "y": 8250,
        "w": 200,
        "h": 200,
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
        "x": 0,
        "y": 8250,
        "w": 175,
        "h": 150,
        "type": "grav",
        "force": 15000,
        "dir": {
            "x": 15000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 0,
        "y": 8050,
        "w": 300,
        "h": 150,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 8000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 0,
        "y": 7550,
        "w": 150,
        "h": 625,
        "type": "grav",
        "force": 7000,
        "dir": {
            "x": 0,
            "y": 7000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 0,
        "y": 7950,
        "w": 300,
        "h": 225,
        "type": "size",
        "size": 11.75,
        "inView": false
    },
    {
        "x": 150,
        "y": 8050,
        "w": 150,
        "h": 150,
        "type": "grav",
        "force": 9000,
        "dir": {
            "x": 0,
            "y": 9000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 7100,
        "y": 9475,
        "w": 50,
        "h": 325,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7100,
        "y": 9450,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7100.833333333115,
        "y": 9350,
        "w": 50,
        "h": 450,
        "type": "move",
        "points": [
            [
                7100,
                9350
            ],
            [
                7250,
                9350
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7100,
            "y": 9350
        },
        "pointTo": {
            "x": 7250,
            "y": 9350
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7725,
        "y": 9450,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7700,
        "y": 9475,
        "w": 50,
        "h": 325,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 4450,
        "y": 6350,
        "w": 150,
        "h": 150,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 0,
        "y": 5700,
        "w": 800,
        "h": 800,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 0,
        "y": 7150,
        "w": 3950,
        "h": 100,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.99,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 7150,
        "w": 3950,
        "h": 100,
        "type": "raxis",
        "rx": true,
        "ry": false,
        "inView": false
    },
    {
        "x": 0,
        "y": 7150,
        "w": 3950,
        "h": 100,
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
        "x": 3650,
        "y": 7200,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 30000,
        "dir": {
            "x": 0,
            "y": -30000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 4150,
        "y": 7150,
        "w": 150,
        "h": 250,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3800,
        "y": 6550,
        "w": 800,
        "h": 600,
        "type": "size",
        "size": 12.75,
        "inView": false
    },
    {
        "x": 3800,
        "y": 6500,
        "w": 800,
        "h": 500,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4150,
        "y": 7150,
        "w": 150,
        "h": 250,
        "type": "size",
        "size": 15,
        "inView": false
    },
    {
        "x": 4250,
        "y": 7350,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4300,
                    7350
                ],
                [
                    4350,
                    7350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4250,
                    7400
                ],
                [
                    4250,
                    7450
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
        "x": 4200,
        "y": 7350,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    4200,
                    7400
                ],
                [
                    4200,
                    7450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4150,
                    7350
                ],
                [
                    4100,
                    7350
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
        "x": 3800,
        "y": 6800,
        "w": 500,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 3800,
        "y": 6550,
        "w": 500,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 4350,
        "y": 6550,
        "w": 200,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.3,
        "inView": false
    },
    {
        "x": 3800,
        "y": 6600,
        "w": 50,
        "h": 300,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": 4000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3824.2850000000262,
        "y": 6800,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3800,
                6800
            ],
            [
                3900,
                6800
            ],
            [
                3900,
                6900
            ],
            [
                3800,
                6900
            ]
        ],
        "speed": 370.2,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3800,
            "y": 6800
        },
        "pointTo": {
            "x": 3900,
            "y": 6800
        },
        "xv": 370.2,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4075.7149999999738,
        "y": 6900,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4000,
                6800
            ],
            [
                4100,
                6800
            ],
            [
                4100,
                6900
            ],
            [
                4000,
                6900
            ]
        ],
        "speed": 370.2,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 4100,
            "y": 6900
        },
        "pointTo": {
            "x": 4000,
            "y": 6900
        },
        "xv": -370.2,
        "yv": 4.5336424504435016e-14,
        "inView": false
    },
    {
        "x": 4200,
        "y": 6824.285000000026,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4200,
                6900
            ],
            [
                4300,
                6900
            ],
            [
                4300,
                6800
            ],
            [
                4200,
                6800
            ]
        ],
        "speed": 370.2,
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 4200,
            "y": 6800
        },
        "pointTo": {
            "x": 4200,
            "y": 6900
        },
        "xv": 2.2668212252217508e-14,
        "yv": 370.2,
        "inView": false
    },
    {
        "x": 4425.714999999974,
        "y": 6650,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4350,
                6550
            ],
            [
                4450,
                6550
            ],
            [
                4450,
                6650
            ],
            [
                4350,
                6650
            ]
        ],
        "speed": 370.2,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 4450,
            "y": 6650
        },
        "pointTo": {
            "x": 4350,
            "y": 6650
        },
        "xv": -370.2,
        "yv": 4.5336424504435016e-14,
        "inView": false
    },
    {
        "x": 4350,
        "y": 6550,
        "w": 150,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4450,
        "y": 5700,
        "w": 675,
        "h": 650,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 4450,
        "y": 5700,
        "w": 650,
        "h": 650,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4.4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4450,
        "y": 5700,
        "w": 550,
        "h": 50,
        "type": "raxis",
        "rx": true,
        "ry": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5700,
        "w": 350,
        "h": 250,
        "type": "raxis",
        "rx": true,
        "ry": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5700,
        "w": 350,
        "h": 250,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.25,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2950,
        "y": 5700,
        "w": 350,
        "h": 250,
        "type": "vinette",
        "ir": 0.25,
        "or": 0.75,
        "o": 0.8,
        "vc": {
            "r": 0,
            "g": 0,
            "b": 0
        },
        "inView": false
    },
    {
        "x": 3000,
        "y": 5900,
        "w": 300,
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
        "x": 3800,
        "y": 6050,
        "w": 475,
        "h": 400,
        "type": "timetrap",
        "time": 0,
        "maxTime": 0.7,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3850,
        "y": 6250,
        "w": 450,
        "h": 200,
        "type": "grav",
        "force": 10000,
        "dir": {
            "x": -10000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 4100,
        "y": 6050,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 10000,
        "dir": {
            "x": 0,
            "y": 10000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 4075,
        "y": 6250,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4075,
                    6050
                ],
                [
                    4075,
                    5950
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4075,
                    6450
                ],
                [
                    4075,
                    6550
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
        "x": 1850,
        "y": 5750,
        "w": 950,
        "h": 750,
        "type": "raxis",
        "rx": true,
        "ry": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5750,
        "w": 50,
        "h": 200,
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
        "x": 3275,
        "y": 6600,
        "w": 200,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3000,
        "y": 5900,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    3000,
                    5950
                ],
                [
                    3000,
                    6000
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2950,
                    5900
                ],
                [
                    2900,
                    5900
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
        "x": 4450,
        "y": 5750,
        "w": 525,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2450,
        "y": 6150,
        "w": 250,
        "h": 50,
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
        "x": 4450,
        "y": 6350,
        "w": 150,
        "h": 150,
        "type": "zone",
        "value": 5,
        "inView": false
    },
    {
        "x": 4450,
        "y": 6350,
        "w": 150,
        "h": 150,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 2350,
        "y": 6150,
        "w": 200,
        "h": 300,
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
        "x": 2550,
        "y": 6150,
        "w": 250,
        "h": 300,
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
        "x": 2700,
        "y": 6450,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 0,
            "y": -8000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 2550,
        "y": 6150,
        "w": 250,
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
        "x": 2250,
        "y": 6450,
        "w": 450,
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
        "x": 1400,
        "y": 6150,
        "w": 200,
        "h": 300,
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
        "x": 800,
        "y": 6300,
        "w": 800,
        "h": 200,
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
        "x": 1850,
        "y": 5750,
        "w": 350,
        "h": 50,
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
        "x": 2000,
        "y": 5950,
        "w": 225,
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
        "x": 1950,
        "y": 5950,
        "w": 150,
        "h": 200,
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
        "x": 2100,
        "y": 5800,
        "w": 125,
        "h": 200,
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
        "x": 1950,
        "y": 5950,
        "w": 100,
        "h": 200,
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
        "x": 1950,
        "y": 6150,
        "w": 300,
        "h": 150,
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
        "x": 2150,
        "y": 6150,
        "w": 100,
        "h": 250,
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
        "x": 2150,
        "y": 6150,
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
        "x": 1950,
        "y": 6350,
        "w": 300,
        "h": 50,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": -4000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1900,
        "y": 6350,
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
        "x": 1900,
        "y": 6400,
        "w": 50,
        "h": 100,
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
        "x": 1900,
        "y": 6450,
        "w": 800,
        "h": 50,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 8000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 1850,
        "y": 5700,
        "w": 950,
        "h": 800,
        "type": "speed",
        "speedInc": 1.25,
        "inView": false
    },
    {
        "x": 1850,
        "y": 5725,
        "w": 950,
        "h": 775,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4.2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 950,
        "y": 5900,
        "w": 200,
        "h": 300,
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
        "x": 950,
        "y": 6050,
        "w": 850,
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
        "x": 950,
        "y": 5700,
        "w": 900,
        "h": 350,
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
        "x": 2350,
        "y": 6350,
        "w": 150,
        "h": 50,
        "type": "tp",
        "tpx": 2987,
        "tpy": 5750,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 800,
        "y": 5725,
        "w": 1050,
        "h": 775,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2.7,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1912.5,
        "y": 5925,
        "w": 0,
        "h": 175,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 1100,
        "y": 6050,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1100,
        "y": 6050,
        "radius": 250,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1100,
                    6200
                ],
                [
                    1100,
                    6300
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1100,
                    5900
                ],
                [
                    1100,
                    5800
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
        "x": 3575,
        "y": 5625,
        "w": 875,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 6150,
        "w": 475,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 5700,
        "w": 800,
        "h": 800,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 5700,
        "w": 800,
        "h": 800,
        "type": "zone",
        "value": 4,
        "inView": false
    },
    {
        "x": 0,
        "y": 5700,
        "w": 800,
        "h": 800,
        "spawn": {
            "x": 400,
            "y": 6100
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 800,
        "y": 2900,
        "w": 100,
        "h": 250,
        "type": "speed",
        "speedInc": 2.5,
        "inView": false
    },
    {
        "x": 800,
        "y": 2900,
        "w": 100,
        "h": 250,
        "color": "#ff0000",
        "type": "block",
        "inView": false
    },
    {
        "x": 900,
        "y": 2475,
        "w": 525,
        "h": 675,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 900,
        "y": 2500,
        "w": 525,
        "h": 650,
        "type": "speed",
        "speedInc": 2.5,
        "inView": false
    },
    {
        "x": 0,
        "y": 3050,
        "w": 250,
        "h": 350,
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
        "x": 0,
        "y": 2900,
        "w": 800,
        "h": 1025,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 2900,
        "w": 800,
        "h": 300,
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
        "x": 0,
        "y": 2900,
        "w": 800,
        "h": 250,
        "type": "speed",
        "speedInc": 2,
        "inView": false
    },
    {
        "x": 0,
        "y": 2500,
        "w": 900,
        "h": 300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 2500,
        "w": 150,
        "h": 50,
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
        "x": 275,
        "y": 2500,
        "w": 50,
        "h": 300,
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
        "x": 575,
        "y": 2500,
        "w": 50,
        "h": 300,
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
        "x": 850,
        "y": 2500,
        "w": 50,
        "h": 300,
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
        "x": 800,
        "y": 3300,
        "w": 700,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2800,
        "y": 3800,
        "w": 2150,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2800,
        "y": 3800,
        "w": 2200,
        "h": 50,
        "type": "grav",
        "force": 10000,
        "dir": {
            "x": -10000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 3150,
        "y": 4950,
        "w": 1800,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3150,
        "y": 4950,
        "w": 1850,
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
        "x": 3150,
        "y": 3950,
        "w": 350,
        "h": 1000,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 800,
        "y": 3650,
        "w": 250,
        "h": 175,
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
        "x": 0,
        "y": 3300,
        "w": 1400,
        "h": 600,
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
        "y": 3150,
        "w": 1500,
        "h": 750,
        "type": "speed",
        "speedInc": 1.8,
        "inView": false
    },
    {
        "x": 1500,
        "y": 3300,
        "w": 500,
        "h": 975,
        "type": "timetrap",
        "time": 0,
        "maxTime": 8,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1500,
        "y": 3300,
        "w": 400,
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
        "x": 1900,
        "y": 3300,
        "w": 100,
        "h": 300,
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
        "y": 4200,
        "w": 350,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1500,
        "y": 3400,
        "w": 400,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1700,
        "y": 3800,
        "w": 300,
        "h": 300,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1250,
        "y": 4275,
        "w": 750,
        "h": 700,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1250,
        "y": 4300,
        "w": 550,
        "h": 675,
        "type": "grav",
        "force": 3200,
        "dir": {
            "x": 0,
            "y": 3200
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1250,
        "y": 4300,
        "w": 550,
        "h": 675,
        "type": "grav",
        "force": 3200,
        "dir": {
            "x": -3200,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1800,
        "y": 4100,
        "w": 300,
        "h": 400,
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
        "y": 4100,
        "w": 400,
        "h": 200,
        "type": "grav",
        "force": 3200,
        "dir": {
            "x": 3200,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 1500,
        "y": 3700,
        "w": 200,
        "h": 400,
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
        "x": 1500,
        "y": 3600,
        "w": 200,
        "h": 100,
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
        "x": 1700,
        "y": 3600,
        "w": 300,
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
        "x": 1925,
        "y": 3325,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 1925,
        "y": 3625,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 1500,
        "y": 3700,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 1575,
        "y": 4050,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 1925,
        "y": 4175,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 150,
        "y": 4800,
        "w": 1100,
        "h": 200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 150,
        "y": 3250,
        "w": 75,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 3225,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 475,
        "y": 3375,
        "radius": 325,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1075,
        "y": 2825,
        "radius": 400,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1075,
                    2500
                ],
                [
                    1075,
                    2425
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1075,
                    3150
                ],
                [
                    1075,
                    3225
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 325,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 850,
        "y": 2875,
        "w": 150,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 850,
        "y": 2900,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 150,
        "y": 3050,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    0,
                    3050
                ],
                [
                    -75,
                    3050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    150,
                    2900
                ],
                [
                    150,
                    2825
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
                3150,
                0
            ],
            [
                3200,
                0
            ],
            [
                3200,
                50
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3150,
            "right": 3200,
            "top": 0,
            "bottom": 50
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 0,
        "y": 2350,
        "w": 150,
        "h": 150,
        "type": "zone",
        "value": 3,
        "inView": false
    },
    {
        "x": 0,
        "y": 2350,
        "w": 150,
        "h": 150,
        "spawn": {
            "x": 75,
            "y": 2425
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 3900,
        "y": 3200,
        "w": 800,
        "h": 100,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3600,
        "y": 3200,
        "w": 200,
        "h": 400,
        "type": "size",
        "size": 14.5,
        "inView": false
    },
    {
        "x": 4800,
        "y": 3200,
        "w": 200,
        "h": 400,
        "type": "size",
        "size": 14.5,
        "inView": false
    },
    {
        "x": 4800,
        "y": 3300,
        "w": 200,
        "h": 300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3600,
        "y": 3300,
        "w": 200,
        "h": 300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4200,
        "y": 3249.375,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4200,
                3200
            ],
            [
                4250,
                3200
            ],
            [
                4250,
                3250
            ],
            [
                4200,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 4200,
            "y": 3250
        },
        "pointTo": {
            "x": 4200,
            "y": 3200
        },
        "xv": 4.592425496802574e-15,
        "yv": -75,
        "inView": false
    },
    {
        "x": 4100,
        "y": 1650,
        "w": 600,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4100,
        "y": 1650,
        "w": 600,
        "h": 350,
        "type": "speed",
        "speedInc": 2,
        "inView": false
    },
    {
        "x": 4100,
        "y": 1650,
        "w": 600,
        "h": 350,
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
        "x": 3150,
        "y": 3950,
        "w": 300,
        "h": 150,
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
        "y": 2950,
        "w": 550,
        "h": 2000,
        "type": "timetrap",
        "time": 0,
        "maxTime": 7,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3500,
        "y": 1500,
        "w": 600,
        "h": 750,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1.5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3500,
        "y": 1550,
        "w": 600,
        "h": 575,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 3950,
        "y": 1900,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    3950,
                    2000
                ],
                [
                    3950,
                    2100
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3850,
                    1900
                ],
                [
                    3750,
                    1900
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
        "y": 2600,
        "w": 600,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1500,
        "y": 2950,
        "w": 700,
        "h": 200,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": 3500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2100,
        "y": 2900,
        "w": 550,
        "h": 2000,
        "type": "grav",
        "force": 3200,
        "dir": {
            "x": 0,
            "y": 3200
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1500,
        "y": 2600,
        "w": 450,
        "h": 250,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": -3500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 2100,
        "y": 2300,
        "w": 1450,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2000,
        "y": 2600,
        "w": 1200,
        "h": 350,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": -3500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 2950,
        "y": 1550,
        "w": 550,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3150,
        "y": 1900,
        "w": 350,
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
        "x": 3225,
        "y": 1825,
        "radius": 325,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    3225,
                    2100
                ],
                [
                    3225,
                    2150
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3500,
                    1825
                ],
                [
                    3550,
                    1825
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
        "x": 4775,
        "y": 650,
        "w": 225,
        "h": 100,
        "type": "grav",
        "force": 4500,
        "dir": {
            "x": 0,
            "y": -4500
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 4750,
        "y": 550,
        "w": 250,
        "h": 250,
        "type": "grav",
        "force": 50,
        "dir": {
            "x": -50,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 4775,
        "y": 550,
        "w": 225,
        "h": 250,
        "type": "size",
        "size": 4,
        "inView": false
    },
    {
        "x": 4450,
        "y": 550,
        "w": 550,
        "h": 250,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4450,
        "y": 550,
        "w": 550,
        "h": 250,
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
        "x": 4300,
        "y": 800,
        "w": 650,
        "h": 600,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 1550,
        "w": 200,
        "h": 200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 10,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 0,
        "y": 1550,
        "w": 200,
        "h": 200,
        "type": "typing",
        "text": "There's no way you're beating this next area.",
        "active": true,
        "currentChar": 0,
        "inView": false
    },
    {
        "x": 4950,
        "y": 3800,
        "w": 50,
        "h": 1200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4950,
        "y": 3800,
        "w": 50,
        "h": 1200,
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
        "x": 2750,
        "y": 3900,
        "w": 400,
        "h": 1100,
        "type": "timetrap",
        "time": 0,
        "maxTime": 5,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2750,
        "y": 3900,
        "w": 400,
        "h": 1100,
        "type": "size",
        "size": 20,
        "inView": false
    },
    {
        "x": 2750,
        "y": 3900,
        "w": 400,
        "h": 1100,
        "type": "speed",
        "speedInc": 1.5,
        "inView": false
    },
    {
        "x": 4900,
        "y": 3900,
        "w": 50,
        "h": 1000,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 1750,
        "w": 200,
        "h": 350,
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
        "x": 3300,
        "y": 1750,
        "w": 200,
        "h": 150,
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
        "x": 2950,
        "y": 4850,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2950,
                    4700
                ],
                [
                    2950,
                    4650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2950,
                    5000
                ],
                [
                    2950,
                    5050
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
        "x": 3100,
        "y": 0,
        "w": 150,
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
        "x": 3200,
        "y": 0,
        "w": 450,
        "h": 550,
        "type": "timetrap",
        "time": 0,
        "maxTime": 8,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3200,
        "y": 0,
        "w": 550,
        "h": 800,
        "type": "platformer",
        "force": 4000,
        "dir": {
            "x": 0,
            "y": 4000
        },
        "direction": "down",
        "jumpHeight": 300,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 3200,
        "y": 0,
        "w": 450,
        "h": 450,
        "type": "size",
        "size": 12,
        "inView": false
    },
    {
        "x": 3100,
        "y": 0,
        "w": 100,
        "h": 100,
        "type": "ship",
        "state": false,
        "shipAngle": 1.5707963267948966,
        "inView": false
    },
    {
        "x": 1800,
        "y": 2850,
        "w": 200,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1500,
        "y": 2600,
        "w": 200,
        "h": 350,
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
        "x": 3300,
        "y": 2100,
        "w": 200,
        "h": 200,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 2100,
        "w": 200,
        "h": 200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 0.3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3300,
        "y": 2100,
        "w": 200,
        "h": 200,
        "type": "grav",
        "force": 6000,
        "dir": {
            "x": 0,
            "y": 6000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1800,
        "y": 2025,
        "w": 700,
        "h": 175,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1800,
        "y": 1900,
        "w": 950,
        "h": 300,
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
        "x": 1800,
        "y": 2050,
        "w": 650,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 1550,
        "w": 200,
        "h": 200,
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
        "x": 3500,
        "y": 1900,
        "w": 100,
        "h": 200,
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
        "x": 1950,
        "y": 2600,
        "w": 50,
        "h": 250,
        "type": "grav",
        "force": 3500,
        "dir": {
            "x": -3500,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 1750,
        "y": 1550,
        "w": 750,
        "h": 300,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4.2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1750,
        "y": 1550,
        "w": 1000,
        "h": 300,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": 4000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 4600,
        "y": 1400,
        "w": 100,
        "h": 250,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4600,
        "y": 1400,
        "w": 100,
        "h": 250,
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
        "x": 2500,
        "y": 1550,
        "w": 250,
        "h": 475,
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
        "x": 3300,
        "y": 2350,
        "w": 200,
        "h": 500,
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
        "x": 3200,
        "y": 2600,
        "w": 300,
        "h": 250,
        "type": "grav",
        "force": 3300,
        "dir": {
            "x": -3300,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 3800,
        "y": 1750,
        "w": 250,
        "h": 100,
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
        "x": 3600,
        "y": 1750,
        "w": 200,
        "h": 100,
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
        "x": 4000,
        "y": 1850,
        "w": 100,
        "h": 200,
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
        "x": 3750,
        "y": 1550,
        "w": 100,
        "h": 200,
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
        "x": 2000,
        "y": 0,
        "w": 1100,
        "h": 850,
        "type": "timetrap",
        "time": 0,
        "maxTime": 15,
        "cdmult": 3,
        "trapType": "death",
        "inView": true
    },
    {
        "x": 2000,
        "y": 0,
        "w": 1200,
        "h": 850,
        "type": "speed",
        "speedInc": 1.8,
        "inView": true
    },
    {
        "x": 4450,
        "y": 0,
        "w": 550,
        "h": 550,
        "type": "zone",
        "value": 2,
        "inView": false
    },
    {
        "x": 4450,
        "y": 0,
        "w": 550,
        "h": 550,
        "spawn": {
            "x": 4725,
            "y": 275
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 3050,
        "y": 0,
        "w": 200,
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
        "x": 3750,
        "y": 0,
        "w": 650,
        "h": 750,
        "type": "timetrap",
        "time": 0,
        "maxTime": 12,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3750,
        "y": 0,
        "w": 650,
        "h": 400,
        "type": "platformer",
        "force": 2400,
        "dir": {
            "x": 0,
            "y": 2400
        },
        "direction": "down",
        "jumpHeight": 140,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 3200,
        "y": 550,
        "w": 550,
        "h": 200,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 3750,
        "y": 400,
        "w": 650,
        "h": 350,
        "type": "platformer",
        "force": 3050,
        "dir": {
            "x": 0,
            "y": 3050
        },
        "direction": "down",
        "jumpHeight": 240,
        "maxForce": 1000,
        "variableJumpHeight": false,
        "platformerFriction": 0.8,
        "inView": false
    },
    {
        "x": 3200,
        "y": 550,
        "w": 550,
        "h": 200,
        "type": "grav",
        "force": 900,
        "dir": {
            "x": 900,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 3250,
        "y": 525,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3650,
        "y": 525,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3430,
        "y": 675,
        "w": 140,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3200,
        "y": 450,
        "w": 450,
        "h": 50,
        "type": "size",
        "size": 3,
        "inView": false
    },
    {
        "x": 2750,
        "y": 450,
        "w": 350,
        "h": 400,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 2800,
        "y": 500,
        "w": 250,
        "h": 300,
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
        "x": 2750,
        "y": 500,
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
        "x": 2200,
        "y": 400,
        "w": 250,
        "h": 350,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": true
    },
    {
        "x": 2200,
        "y": 700,
        "w": 250,
        "h": 50,
        "type": "tp",
        "tpx": 2025,
        "tpy": 50,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": true
    },
    {
        "x": 1000,
        "y": 0,
        "w": 900,
        "h": 500,
        "type": "speed",
        "speedInc": 2,
        "inView": true
    },
    {
        "x": 1800,
        "y": 500,
        "w": 100,
        "h": 250,
        "type": "speed",
        "speedInc": 2,
        "inView": true
    },
    {
        "x": 1000,
        "y": 0,
        "w": 900,
        "h": 500,
        "type": "timetrap",
        "time": 0,
        "maxTime": 4,
        "cdmult": 3,
        "trapType": "death",
        "inView": true
    },
    {
        "x": 1000,
        "y": 600,
        "w": 800,
        "h": 150,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": true
    },
    {
        "x": 300,
        "y": 200,
        "radius": 71,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 225,
        "y": 500,
        "radius": 35,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 175,
        "y": 125,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 125,
        "y": 350,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 425,
        "y": 400,
        "radius": 35,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 575,
        "y": 250,
        "radius": 90,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 425,
        "y": 575,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 625,
        "y": 475,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 850,
        "y": 150,
        "radius": 90,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 75,
        "y": 650,
        "radius": 90,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 275,
        "y": 750,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 600,
        "y": 725,
        "radius": 103,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 900,
        "y": 425,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 0,
        "y": 750,
        "w": 2000,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 900,
        "y": 0,
        "w": 100,
        "h": 650,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1150,
        "y": 600,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1300,
        "y": 700,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1600,
        "y": 700,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1450,
        "y": 600,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 900,
        "y": 650,
        "w": 100,
        "h": 100,
        "type": "grav",
        "force": 3000,
        "dir": {
            "x": 3000,
            "y": 0
        },
        "direction": "right",
        "inView": true
    },
    {
        "x": 975,
        "y": 500,
        "w": 825,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1900,
        "y": 100,
        "w": 100,
        "h": 650,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1800,
        "y": 550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "points": [
            [
                1900,
                650
            ],
            [
                1900,
                750
            ],
            [
                1800,
                750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1800,
            "right": 1900,
            "top": 650,
            "bottom": 750
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                2650,
                0
            ],
            [
                2900,
                0
            ],
            [
                2550,
                150
            ],
            [
                2500,
                150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2500,
            "right": 2900,
            "top": 0,
            "bottom": 150
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 1800,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "mark",
        "time": 1,
        "inView": true
    },
    {
        "x": 1800,
        "y": 450,
        "w": 50,
        "h": 50,
        "type": "cure",
        "inView": true
    },
    {
        "x": 1800,
        "y": 400,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 1650,
        "y": 250,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 1300,
        "y": 250,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 950,
        "y": 250,
        "radius": 100,
        "type": "circle-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    950,
                    250
                ],
                [
                    950,
                    150
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    950,
                    250
                ],
                [
                    950,
                    350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 1000,
        "y": 450,
        "w": 650,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": true
    },
    {
        "x": 1000,
        "y": 0,
        "w": 750,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": true
    },
    {
        "x": 1100,
        "y": 225,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": true
    },
    {
        "x": 1450,
        "y": 225,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": true
    },
    {
        "x": 1800,
        "y": 225,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": true
    },
    {
        "x": 1900,
        "y": 0,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 3,
        "currentCoins": 3,
        "inView": true
    },
    {
        "x": 2000,
        "y": 0,
        "w": 200,
        "h": 100,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 8000,
            "y": 0
        },
        "direction": "right",
        "inView": true
    },
    {
        "x": 2000,
        "y": 100,
        "w": 200,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 2000,
        "y": 0,
        "w": 0,
        "h": 100,
        "type": "ship",
        "state": true,
        "shipAngle": 1.5707963267948966,
        "inView": true
    },
    {
        "x": 2500,
        "y": 0,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 2200,
        "y": 250,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 2450,
        "y": 400,
        "w": 300,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 2150,
        "y": 750,
        "w": 325,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "points": [
            [
                2325,
                450
            ],
            [
                2375,
                500
            ],
            [
                2325,
                575
            ],
            [
                2275,
                500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2275,
            "right": 2375,
            "top": 450,
            "bottom": 575
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                2450,
                575
            ],
            [
                2450,
                625
            ],
            [
                2400,
                625
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2400,
            "right": 2450,
            "top": 575,
            "bottom": 625
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                2325,
                625
            ],
            [
                2375,
                750
            ],
            [
                2275,
                750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2275,
            "right": 2375,
            "top": 625,
            "bottom": 750
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "points": [
            [
                2200,
                575
            ],
            [
                2250,
                625
            ],
            [
                2200,
                625
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2200,
            "right": 2250,
            "top": 575,
            "bottom": 625
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 2225,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": true
    },
    {
        "x": 2375,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": true
    },
    {
        "x": 3050,
        "y": 250,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3099,
        "y": 0,
        "w": 101,
        "h": 100,
        "type": "coindoor",
        "coins": 8,
        "currentCoins": 8,
        "inView": false
    },
    {
        "x": 3100,
        "y": 100,
        "w": 100,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 100,
        "w": 75,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 850,
        "w": 3200,
        "h": 700,
        "type": "normal",
        "canJump": true,
        "inView": true
    },
    {
        "x": 2850,
        "y": 550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3000,
        "y": 550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3000,
        "y": 750,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2850,
        "y": 750,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2800,
        "y": 550,
        "w": 250,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2850,
        "y": 500,
        "w": 150,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 350,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 400,
        "w": 50,
        "h": 400,
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
        "x": 2800,
        "y": 800,
        "w": 300,
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
        "x": 2750,
        "y": 500,
        "w": 50,
        "h": 350,
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
        "x": 2750,
        "y": 400,
        "w": 300,
        "h": 100,
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
        "x": 2900,
        "y": 800,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 3050,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 2750,
        "y": 650,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 3100,
        "y": 850,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2750,
        "y": 850,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                1750,
                600
            ],
            [
                1800,
                600
            ],
            [
                1800,
                650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1750,
            "right": 1800,
            "top": 600,
            "bottom": 650
        },
        "renderType": "poly",
        "inView": true
    },
    {
        "x": 2775,
        "y": 425,
        "w": 150,
        "h": 50,
        "type": "rotate-normal",
        "angle": -11,
        "rotateSpeed": -330,
        "pivotX": 2775,
        "pivotY": 425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 79.05694150420949,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2700,
        "y": 350,
        "w": 100,
        "h": 50,
        "type": "tp",
        "tpx": 2025,
        "tpy": 50,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 2600,
        "y": 400,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": true
    },
    {
        "x": 3100,
        "y": 400,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3650,
        "y": 0,
        "w": 100,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3200,
                100
            ],
            [
                3600,
                150
            ],
            [
                3200,
                200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3200,
            "right": 3600,
            "top": 100,
            "bottom": 200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3200,
                250
            ],
            [
                3600,
                300
            ],
            [
                3200,
                350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3200,
            "right": 3600,
            "top": 250,
            "bottom": 350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3200,
                400
            ],
            [
                3600,
                450
            ],
            [
                3200,
                500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3200,
            "right": 3600,
            "top": 400,
            "bottom": 500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3650,
                325
            ],
            [
                3650,
                425
            ],
            [
                3250,
                375
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3250,
            "right": 3650,
            "top": 325,
            "bottom": 425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3650,
                175
            ],
            [
                3650,
                275
            ],
            [
                3250,
                225
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3250,
            "right": 3650,
            "top": 175,
            "bottom": 275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3200,
        "y": 100,
        "w": 400,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3375,
        "y": 50,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3550,
        "y": 0,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3200,
        "y": 0,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3200,
        "y": 50,
        "w": 0,
        "h": 50,
        "type": "ship",
        "state": false,
        "shipAngle": 1.5707963267948966,
        "inView": false
    },
    {
        "x": 3250,
        "y": 500,
        "w": 500,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3175,
        "y": 750,
        "w": 1275,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4400,
        "y": 50,
        "w": 50,
        "h": 725,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 600,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 3500,
        "y": 675,
        "r": 65,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 65,
        "inView": false
    },
    {
        "x": 3700,
        "y": 600,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 3750,
        "y": 0,
        "w": 50,
        "h": 550,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 4350,
        "y": 100,
        "w": 50,
        "h": 650,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3800,
        "y": 350,
        "w": 450,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3875,
        "y": 100,
        "w": 525,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3950,
        "y": 550,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4200,
        "y": 600,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3950,
        "y": 600,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 4200,
        "y": 550,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 250,
        "w": 50,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3800,
        "y": 0,
        "w": 25,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3950,
        "y": 340,
        "w": 50,
        "h": 50,
        "type": "rotate-normal",
        "angle": 3,
        "rotateSpeed": 90,
        "pivotX": 3950,
        "pivotY": 340,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 35.35533905932738,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 4150,
        "y": 340,
        "w": 50,
        "h": 50,
        "type": "rotate-normal",
        "angle": -3,
        "rotateSpeed": -90,
        "pivotX": 4150,
        "pivotY": 340,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 35.35533905932738,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 600,
        "y": 25,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 350,
        "y": -25,
        "radius": 56,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4400,
        "y": 0,
        "w": 50,
        "h": 50,
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
        "x": 4250,
        "y": 800,
        "w": 50,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4250,
        "y": 1400,
        "w": 350,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4700,
        "y": 1400,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4275,
        "y": 1450,
        "w": 300,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4550,
        "y": 1600,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4225,
        "y": 1575,
        "w": 325,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4550,
        "y": 1425,
        "w": 50,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4700,
        "y": 1450,
        "w": 300,
        "h": 850,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3825,
        "y": 2000,
        "w": 875,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4000,
        "y": 1625,
        "w": 100,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4050,
        "y": 1850,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4625,
        "y": 925,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 4575,
        "y": 1100,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 4675,
        "y": 1225,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 3200,
        "y": 500,
        "w": 50,
        "h": 150,
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
        "x": 3500,
        "y": 2100,
        "w": 625,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 2100,
        "w": 350,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 1550,
        "w": 350,
        "h": 200,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": 4000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 2750,
        "y": 1525,
        "w": 200,
        "h": 775,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3150,
        "y": 800,
        "w": 350,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4000,
        "y": 775,
        "w": 275,
        "h": 875,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3450,
        "y": 800,
        "w": 600,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3750,
        "y": 1750,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3800,
        "y": 1750,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3500,
        "y": 1550,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3550,
        "y": 1900,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3700,
        "y": 1650,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    3600,
                    1650
                ],
                [
                    3500,
                    1650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3700,
                    1550
                ],
                [
                    3700,
                    1450
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
        "x": 3900,
        "y": 1650,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    3900,
                    1550
                ],
                [
                    3900,
                    1450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4000,
                    1650
                ],
                [
                    4100,
                    1650
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
        "x": 3200,
        "y": 2275,
        "w": 100,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3250,
        "y": 2600,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3500,
        "y": 2275,
        "w": 100,
        "h": 575,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2000,
        "y": 2850,
        "w": 1600,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 2200,
        "w": 1175,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2000,
        "y": 3150,
        "w": 100,
        "h": 1850,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2850,
        "y": 2800,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2800,
        "y": 2750,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2750,
        "y": 2725,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2700,
        "y": 2750,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2650,
        "y": 2800,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1575,
        "y": 2275,
        "w": 1625,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2550,
        "y": 2600,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2500,
        "y": 2600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2450,
        "y": 2600,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2400,
        "y": 2600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2350,
        "y": 2600,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2250,
        "y": 2800,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2200,
        "y": 2750,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2150,
        "y": 2725,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2100,
        "y": 2750,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 2600,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3000,
        "y": 2600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3050,
        "y": 2600,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3100,
        "y": 2600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3150,
        "y": 2600,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1500,
        "y": 1525,
        "w": 250,
        "h": 1075,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 1850,
        "w": 750,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3525,
                2725
            ],
            [
                3525,
                2875
            ],
            [
                3375,
                2875
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3375,
            "right": 3525,
            "top": 2725,
            "bottom": 2875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1750,
        "y": 1550,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 1775,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1750,
                1750
            ],
            [
                1850,
                1775
            ],
            [
                1750,
                1775
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1750,
            "right": 1850,
            "top": 1750,
            "bottom": 1775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1750,
                1625
            ],
            [
                1850,
                1625
            ],
            [
                1750,
                1650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1750,
            "right": 1850,
            "top": 1625,
            "bottom": 1650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2650,
        "y": 2950,
        "w": 200,
        "h": 850,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1500,
                2600
            ],
            [
                1725,
                2600
            ],
            [
                1500,
                2825
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1500,
            "right": 1725,
            "top": 2600,
            "bottom": 2825
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1500,
                2975
            ],
            [
                1700,
                3175
            ],
            [
                1500,
                3175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1500,
            "right": 1700,
            "top": 2975,
            "bottom": 3175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2050,
        "y": 2775,
        "w": 50,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1925,
        "y": 2050,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 3,
        "rotateSpeed": 90,
        "pivotX": 1925,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2175,
        "y": 2050,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 43,
        "rotateSpeed": 90,
        "pivotX": 2175,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2300,
        "y": 2050,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 63,
        "rotateSpeed": 90,
        "pivotX": 2300,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2425,
        "y": 2050,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 83,
        "rotateSpeed": 90,
        "pivotX": 2425,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1925,
        "y": 2050,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2175,
        "y": 2050,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2300,
        "y": 2050,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2425,
        "y": 2050,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 1850,
        "y": 1550,
        "w": 650,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1850,
        "y": 1800,
        "w": 650,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1975,
        "y": 1700,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": 3,
        "rotateSpeed": 90,
        "pivotX": 1975,
        "pivotY": 1700,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2175,
        "y": 1700,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": 93,
        "rotateSpeed": 90,
        "pivotX": 2175,
        "pivotY": 1700,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2375,
        "y": 1700,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": 3,
        "rotateSpeed": 90,
        "pivotX": 2375,
        "pivotY": 1700,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1975,
        "y": 1700,
        "r": 24,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 24,
        "inView": false
    },
    {
        "x": 2175,
        "y": 1700,
        "r": 24,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 24,
        "inView": false
    },
    {
        "x": 2375,
        "y": 1700,
        "r": 24,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 24,
        "inView": false
    },
    {
        "x": 2300,
        "y": 2950,
        "w": 25,
        "h": 50,
        "type": "trans",
        "collide": true,
        "opaq": 0,
        "inView": false
    },
    {
        "x": 2425,
        "y": 2950,
        "w": 25,
        "h": 50,
        "type": "trans",
        "collide": true,
        "opaq": 0,
        "inView": false
    },
    {
        "x": 4350,
        "y": 1000,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 4525,
        "y": 1025,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4400,
        "y": 875,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4750,
        "y": 850,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4850,
        "y": 775,
        "r": 62.5,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 62.5,
        "inView": false
    },
    {
        "x": 4875,
        "y": 950,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 4750,
        "y": 1075,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4425,
        "y": 1150,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4400,
        "y": 1300,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4550,
        "y": 1300,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 4800,
        "y": 1225,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 4825,
        "y": 1350,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4950,
        "y": 1300,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4950,
        "y": 800,
        "w": 75,
        "h": 850,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4900,
        "y": 1150,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 1750,
        "y": 1725,
        "w": 150,
        "h": 25,
        "type": "trans",
        "collide": true,
        "opaq": 0,
        "inView": false
    },
    {
        "x": 2825,
        "y": 3650,
        "w": 2250,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2650,
        "y": 3800,
        "w": 100,
        "h": 1050,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2200,
        "y": 4500,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2200,
        "pivotY": 4500,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2200,
        "y": 4775,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2200,
        "pivotY": 4775,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2550,
        "y": 4500,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2550,
        "pivotY": 4500,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2550,
        "y": 4775,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2550,
        "pivotY": 4775,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2375,
        "y": 4637.5,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2375,
        "pivotY": 4637.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 3225,
        "y": 1825,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                2925,
                1975
            ],
            [
                3100,
                2150
            ],
            [
                2925,
                2150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2925,
            "right": 3100,
            "top": 1975,
            "bottom": 2150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2925,
                1500
            ],
            [
                3100,
                1525
            ],
            [
                2925,
                1675
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2925,
            "right": 3100,
            "top": 1500,
            "bottom": 1675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3350,
                1525
            ],
            [
                3525,
                1550
            ],
            [
                3525,
                1675
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3350,
            "right": 3525,
            "top": 1525,
            "bottom": 1675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1400,
        "y": 2500,
        "w": 100,
        "h": 675,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3650,
        "y": 2000,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    3750,
                    2000
                ],
                [
                    3850,
                    2000
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3650,
                    2100
                ],
                [
                    3650,
                    2200
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
        "x": 1400,
        "y": 3150,
        "w": 600,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2550,
        "y": 3425,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 41,
        "rotateSpeed": -120,
        "pivotX": 2550,
        "pivotY": 3425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2200,
        "y": 3425,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 49,
        "rotateSpeed": 120,
        "pivotX": 2200,
        "pivotY": 3425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1775,
        "y": 2900,
        "w": 500,
        "h": 50,
        "type": "rotate-normal",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 1775,
        "pivotY": 2900,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 251.24689052802225,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1775,
        "y": 2900,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2375,
        "y": 3025,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 41,
        "rotateSpeed": -120,
        "pivotX": 2375,
        "pivotY": 3025,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2100,
        "y": 4900,
        "w": 650,
        "h": 100,
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
        "x": 2700,
        "y": 4825,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2700,
        "y": 4850,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2925,
        "y": 4600,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2925,
                    4750
                ],
                [
                    2925,
                    4800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2925,
                    4450
                ],
                [
                    2925,
                    4400
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
        "x": 2950,
        "y": 4350,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2950,
                    4200
                ],
                [
                    2950,
                    4150
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2950,
                    4500
                ],
                [
                    2950,
                    4550
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
        "x": 2950,
        "y": 4500,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 4250,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 3900,
        "w": 650,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3450,
        "y": 3950,
        "w": 100,
        "h": 950,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2750,
                3900
            ],
            [
                2950,
                3900
            ],
            [
                2750,
                4025
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2750,
            "right": 2950,
            "top": 3900,
            "bottom": 4025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4150
            ],
            [
                3150,
                4350
            ],
            [
                3025,
                4175
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3025,
            "right": 3150,
            "top": 4150,
            "bottom": 4350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2950,
                4650
            ],
            [
                3150,
                4650
            ],
            [
                3100,
                4750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2950,
            "right": 3150,
            "top": 4650,
            "bottom": 4750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4850
            ],
            [
                3150,
                5000
            ],
            [
                3050,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3050,
            "right": 3150,
            "top": 4850,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2750,
                4625
            ],
            [
                2825,
                4725
            ],
            [
                2750,
                4900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2750,
            "right": 2825,
            "top": 4625,
            "bottom": 4900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4650
            ],
            [
                3150,
                4850
            ],
            [
                3100,
                4750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3100,
            "right": 3150,
            "top": 4650,
            "bottom": 4850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4350
            ],
            [
                3150,
                4650
            ],
            [
                3025,
                4525
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3025,
            "right": 3150,
            "top": 4350,
            "bottom": 4650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3075,
                4475
            ],
            [
                3150,
                4650
            ],
            [
                2900,
                4650
            ],
            [
                2900,
                4525
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2900,
            "right": 3150,
            "top": 4475,
            "bottom": 4650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2950,
                4150
            ],
            [
                3150,
                4150
            ],
            [
                3025,
                4175
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2950,
            "right": 3150,
            "top": 4150,
            "bottom": 4175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2750,
                4350
            ],
            [
                2850,
                4425
            ],
            [
                2750,
                4600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2750,
            "right": 2850,
            "top": 4350,
            "bottom": 4600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2725,
                4225
            ],
            [
                2800,
                4225
            ],
            [
                2950,
                4300
            ],
            [
                2950,
                4425
            ],
            [
                2725,
                4450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2725,
            "right": 2950,
            "top": 4225,
            "bottom": 4450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2725,
                4050
            ],
            [
                2800,
                4200
            ],
            [
                2825,
                4275
            ],
            [
                2700,
                4250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2700,
            "right": 2825,
            "top": 4050,
            "bottom": 4275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3425,
        "y": 3925,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4900
            ],
            [
                3225,
                5000
            ],
            [
                3150,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3150,
            "right": 3225,
            "top": 4900,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2050,
        "y": 2050,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 23,
        "rotateSpeed": 90,
        "pivotX": 2050,
        "pivotY": 2050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2050,
        "y": 2050,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 3550,
        "y": 3900,
        "w": 1350,
        "h": 1000,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3500,
        "y": 4900,
        "w": 1400,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                3350,
                4900
            ],
            [
                3500,
                4900
            ],
            [
                3500,
                4950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3350,
            "right": 3500,
            "top": 4900,
            "bottom": 4950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4900,
        "y": 4900,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 2750,
        "y": 3850,
        "w": 2150,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 4900,
        "y": 3900,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 4950,
        "y": 3850,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    4950,
                    3800
                ],
                [
                    4950,
                    3750
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5000,
                    3850
                ],
                [
                    5050,
                    3850
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
        "x": 4950,
        "y": 4950,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    5000,
                    4950
                ],
                [
                    5050,
                    4950
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4950,
                    5000
                ],
                [
                    4950,
                    5050
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
        "x": 2925,
        "y": 4600,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2925,
        "y": 4100,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2925,
                    4250
                ],
                [
                    2925,
                    4300
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2925,
                    3950
                ],
                [
                    2925,
                    3900
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
        "x": 2925,
        "y": 4500,
        "w": 150,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2950,
        "y": 4350,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2925,
        "y": 4100,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2925,
        "y": 4000,
        "w": 225,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2725,
        "y": 4750,
        "w": 150,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2700,
                4900
            ],
            [
                2875,
                4900
            ],
            [
                2950,
                4949
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2700,
            "right": 2950,
            "top": 4900,
            "bottom": 4949
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2950,
        "y": 4850,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2800,
        "y": 4750,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4925,
        "y": 625,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 4950,
        "y": 750,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 4775,
        "y": 625,
        "r": 62.5,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 62.5,
        "inView": false
    },
    {
        "x": 4987.5,
        "y": 787.5,
        "w": 12.5,
        "h": 12.5,
        "type": "tp",
        "tpx": 75,
        "tpy": 2425,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": -25,
        "y": 1750,
        "w": 675,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 1475,
        "w": 1325,
        "h": 875,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 75,
        "y": 1725,
        "w": 50,
        "h": 25,
        "type": "tp",
        "tpx": 75,
        "tpy": 2425,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 2750,
        "y": 3800,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 75,
        "tpy": 2425,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 1400,
        "y": 2325,
        "w": 125,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3150,
                4000
            ],
            [
                3250,
                4100
            ],
            [
                3150,
                4125
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3150,
            "right": 3250,
            "top": 4000,
            "bottom": 4125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3450,
                4000
            ],
            [
                3450,
                4125
            ],
            [
                3350,
                4100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3350,
            "right": 3450,
            "top": 4000,
            "bottom": 4125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3350,
        "y": 4900,
        "w": 100,
        "h": 5,
        "type": "trans",
        "collide": true,
        "opaq": 0,
        "inView": false
    },
    {
        "x": 3150,
        "y": 4900,
        "w": 100,
        "h": 5,
        "type": "trans",
        "collide": true,
        "opaq": 0,
        "inView": false
    },
    {
        "x": 3700,
        "y": 2400,
        "w": 1200,
        "h": 800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2825,
        "y": 2925,
        "w": 775,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3997.5,
        "y": 2300,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3600,
                2300
            ],
            [
                4150,
                2300
            ]
        ],
        "speed": 300,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4150,
            "y": 2300
        },
        "pointTo": {
            "x": 3600,
            "y": 2300
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
        "inView": false
    },
    {
        "x": 3752.5,
        "y": 2350,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3600,
                2350
            ],
            [
                4150,
                2350
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3600,
            "y": 2350
        },
        "pointTo": {
            "x": 4150,
            "y": 2350
        },
        "xv": 300,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4552.5,
        "y": 2300,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4950,
                2300
            ],
            [
                4400,
                2300
            ]
        ],
        "speed": 300,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4400,
            "y": 2300
        },
        "pointTo": {
            "x": 4950,
            "y": 2300
        },
        "xv": 300,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4797.5,
        "y": 2350,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4950,
                2350
            ],
            [
                4400,
                2350
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4950,
            "y": 2350
        },
        "pointTo": {
            "x": 4400,
            "y": 2350
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
        "inView": false
    },
    {
        "x": 3600,
        "y": 2802.5,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3600,
                2300
            ],
            [
                3600,
                2950
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3600,
            "y": 2300
        },
        "pointTo": {
            "x": 3600,
            "y": 2950
        },
        "xv": 1.8369701987210297e-14,
        "yv": 300,
        "inView": false
    },
    {
        "x": 3650,
        "y": 2447.5,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3650,
                2300
            ],
            [
                3650,
                2950
            ]
        ],
        "speed": 300,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 3650,
            "y": 2950
        },
        "pointTo": {
            "x": 3650,
            "y": 2300
        },
        "xv": 1.8369701987210297e-14,
        "yv": -300,
        "inView": false
    },
    {
        "x": 4950,
        "y": 2802.5,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4950,
                2300
            ],
            [
                4950,
                2950
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4950,
            "y": 2300
        },
        "pointTo": {
            "x": 4950,
            "y": 2950
        },
        "xv": 1.8369701987210297e-14,
        "yv": 300,
        "inView": false
    },
    {
        "x": 4900,
        "y": 2447.5,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4900,
                2300
            ],
            [
                4900,
                2950
            ]
        ],
        "speed": 300,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4900,
            "y": 2950
        },
        "pointTo": {
            "x": 4900,
            "y": 2300
        },
        "xv": 1.8369701987210297e-14,
        "yv": -300,
        "inView": false
    },
    {
        "x": 3647.5,
        "y": 3150,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3600,
                3000
            ],
            [
                3650,
                3000
            ],
            [
                3650,
                3150
            ],
            [
                3600,
                3150
            ]
        ],
        "speed": 300,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 3650,
            "y": 3150
        },
        "pointTo": {
            "x": 3600,
            "y": 3150
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
        "inView": false
    },
    {
        "x": 4902.5,
        "y": 3150,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4950,
                3000
            ],
            [
                4900,
                3000
            ],
            [
                4900,
                3150
            ],
            [
                4950,
                3150
            ]
        ],
        "speed": 300,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 4900,
            "y": 3150
        },
        "pointTo": {
            "x": 4950,
            "y": 3150
        },
        "xv": 300,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4023.75,
        "y": 50,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                3875,
                50
            ],
            [
                4050,
                50
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 4050,
            "y": 50
        },
        "pointTo": {
            "x": 3875,
            "y": 50
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 4151.25,
        "y": 50,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                4125,
                50
            ],
            [
                4300,
                50
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 4125,
            "y": 50
        },
        "pointTo": {
            "x": 4300,
            "y": 50
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 3125,
        "y": 4100,
        "w": 125,
        "h": 900,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3350,
        "y": 4100,
        "w": 100,
        "h": 800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2375,
        "y": 4250,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2375,
        "pivotY": 4250,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2150,
        "y": 4375,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2150,
        "pivotY": 4375,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2600,
        "y": 4375,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 2600,
        "pivotY": 4375,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                2000,
                2950
            ],
            [
                2100,
                2950
            ],
            [
                2100,
                2975
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2000,
            "right": 2100,
            "top": 2950,
            "bottom": 2975
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2100,
                3125
            ],
            [
                2100,
                3150
            ],
            [
                2000,
                3150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 2000,
            "right": 2100,
            "top": 3125,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3300,
        "y": 4100,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    3300,
                    3950
                ],
                [
                    3300,
                    3900
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3450,
                    4100
                ],
                [
                    3500,
                    4100
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
        "x": 4400,
        "y": 1825,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4100,
        "y": 1625,
        "radius": 150,
        "type": "circle-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5882496193148399,
        "startPolygon": {
            "points": [
                [
                    4100,
                    1625
                ],
                [
                    4100,
                    1475
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4100,
                    1625
                ],
                [
                    4097.382139034407,
                    1774.9771542734586
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4700,
        "y": 2025,
        "radius": 150,
        "type": "circle-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4700,
                    2025
                ],
                [
                    4550,
                    2025
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4700,
                    2025
                ],
                [
                    4700,
                    1875
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4250,
        "y": 1725,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 2375,
        "y": 3725,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 49,
        "rotateSpeed": 120,
        "pivotX": 2375,
        "pivotY": 3725,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2175,
        "y": 3975,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 49,
        "rotateSpeed": 120,
        "pivotX": 2175,
        "pivotY": 3975,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2250,
        "y": 4050,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 49,
        "rotateSpeed": 120,
        "pivotX": 2250,
        "pivotY": 4050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2575,
        "y": 3975,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 41,
        "rotateSpeed": -120,
        "pivotX": 2575,
        "pivotY": 3975,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2500,
        "y": 4050,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 41,
        "rotateSpeed": -120,
        "pivotX": 2500,
        "pivotY": 4050,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2150,
        "y": 4100,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 49,
        "rotateSpeed": 120,
        "pivotX": 2150,
        "pivotY": 4100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2600,
        "y": 4100,
        "w": 75,
        "h": 75,
        "type": "rotate-lava",
        "angle": 41,
        "rotateSpeed": -120,
        "pivotX": 2600,
        "pivotY": 4100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 53.033008588991066,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2350,
        "y": 4450,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 4300,
        "y": 3200,
        "w": 0,
        "h": 100,
        "type": "tp",
        "tpx": 450,
        "tpy": 9100,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3650.625,
        "y": 3300,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3600,
                3300
            ],
            [
                3700,
                3300
            ]
        ],
        "speed": 75,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3600,
            "y": 3300
        },
        "pointTo": {
            "x": 3700,
            "y": 3300
        },
        "xv": 75,
        "yv": 0,
        "inView": false
    },
    {
        "x": 3649.375,
        "y": 3400,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3600,
                3400
            ],
            [
                3700,
                3400
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 3700,
            "y": 3400
        },
        "pointTo": {
            "x": 3600,
            "y": 3400
        },
        "xv": -75,
        "yv": 9.184850993605149e-15,
        "inView": false
    },
    {
        "x": 3800,
        "y": 3200,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3850,
        "y": 3550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3650.625,
        "y": 3500,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3600,
                3500
            ],
            [
                3700,
                3500
            ]
        ],
        "speed": 75,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3600,
            "y": 3500
        },
        "pointTo": {
            "x": 3700,
            "y": 3500
        },
        "xv": 75,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4850.625,
        "y": 3400,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4800,
                3400
            ],
            [
                4900,
                3400
            ]
        ],
        "speed": 75,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4800,
            "y": 3400
        },
        "pointTo": {
            "x": 4900,
            "y": 3400
        },
        "xv": 75,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4849.375,
        "y": 3300,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4800,
                3300
            ],
            [
                4900,
                3300
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4900,
            "y": 3300
        },
        "pointTo": {
            "x": 4800,
            "y": 3300
        },
        "xv": -75,
        "yv": 9.184850993605149e-15,
        "inView": false
    },
    {
        "x": 4849.375,
        "y": 3500,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                4800,
                3500
            ],
            [
                4900,
                3500
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4900,
            "y": 3500
        },
        "pointTo": {
            "x": 4800,
            "y": 3500
        },
        "xv": -75,
        "yv": 9.184850993605149e-15,
        "inView": false
    },
    {
        "x": 4700,
        "y": 3200,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4750,
        "y": 3550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3950,
        "y": 3600,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4100,
        "y": 3600,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4250,
        "y": 3300,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3900,
        "y": 3500,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4400,
        "y": 3500,
        "w": 300,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4198.333333333329,
        "y": 3450,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3900,
                3450
            ],
            [
                4200,
                3450
            ]
        ],
        "speed": 200,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4200,
            "y": 3450
        },
        "pointTo": {
            "x": 3900,
            "y": 3450
        },
        "xv": -200,
        "yv": 2.4492935982947064e-14,
        "inView": false
    },
    {
        "x": 3901.66666666667,
        "y": 3400,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3900,
                3400
            ],
            [
                4200,
                3400
            ]
        ],
        "speed": 200,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3900,
            "y": 3400
        },
        "pointTo": {
            "x": 4200,
            "y": 3400
        },
        "xv": 200,
        "yv": 0,
        "inView": false
    },
    {
        "x": 3902.5,
        "y": 3550,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3900,
                3550
            ],
            [
                4200,
                3550
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3900,
            "y": 3550
        },
        "pointTo": {
            "x": 4200,
            "y": 3550
        },
        "xv": 300,
        "yv": 0,
        "inView": false
    },
    {
        "x": 3950,
        "y": 3300,
        "w": 300,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3950,
        "y": 3200.625,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3900,
                3200
            ],
            [
                3950,
                3200
            ],
            [
                3950,
                3250
            ],
            [
                3900,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 3950,
            "y": 3200
        },
        "pointTo": {
            "x": 3950,
            "y": 3250
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 4000,
        "y": 3249.375,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4000,
                3200
            ],
            [
                4050,
                3200
            ],
            [
                4050,
                3250
            ],
            [
                4000,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 4000,
            "y": 3250
        },
        "pointTo": {
            "x": 4000,
            "y": 3200
        },
        "xv": 4.592425496802574e-15,
        "yv": -75,
        "inView": false
    },
    {
        "x": 4150,
        "y": 3200.625,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4100,
                3200
            ],
            [
                4150,
                3200
            ],
            [
                4150,
                3250
            ],
            [
                4100,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4150,
            "y": 3200
        },
        "pointTo": {
            "x": 4150,
            "y": 3250
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 4350,
        "y": 3300,
        "w": 300,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4400,
        "y": 3600,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4550,
        "y": 3600,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4647.5,
        "y": 3550,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4650,
                3550
            ],
            [
                4350,
                3550
            ]
        ],
        "speed": 300,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4650,
            "y": 3550
        },
        "pointTo": {
            "x": 4350,
            "y": 3550
        },
        "xv": -300,
        "yv": 3.6739403974420595e-14,
        "inView": false
    },
    {
        "x": 4351.666666666885,
        "y": 3450,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4650,
                3450
            ],
            [
                4350,
                3450
            ]
        ],
        "speed": 200,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4350,
            "y": 3450
        },
        "pointTo": {
            "x": 4650,
            "y": 3450
        },
        "xv": 200,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4648.333333333115,
        "y": 3400,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4650,
                3400
            ],
            [
                4350,
                3400
            ]
        ],
        "speed": 200,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4650,
            "y": 3400
        },
        "pointTo": {
            "x": 4350,
            "y": 3400
        },
        "xv": -200,
        "yv": 2.4492935982947064e-14,
        "inView": false
    },
    {
        "x": 4600,
        "y": 3200.625,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4650,
                3200
            ],
            [
                4600,
                3200
            ],
            [
                4600,
                3250
            ],
            [
                4650,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4600,
            "y": 3200
        },
        "pointTo": {
            "x": 4600,
            "y": 3250
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 4550,
        "y": 3249.375,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4550,
                3200
            ],
            [
                4500,
                3200
            ],
            [
                4500,
                3250
            ],
            [
                4550,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 4550,
            "y": 3250
        },
        "pointTo": {
            "x": 4550,
            "y": 3200
        },
        "xv": 4.592425496802574e-15,
        "yv": -75,
        "inView": false
    },
    {
        "x": 4400,
        "y": 3200.625,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4450,
                3200
            ],
            [
                4400,
                3200
            ],
            [
                4400,
                3250
            ],
            [
                4450,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4400,
            "y": 3200
        },
        "pointTo": {
            "x": 4400,
            "y": 3250
        },
        "xv": 4.592425496802574e-15,
        "yv": 75,
        "inView": false
    },
    {
        "x": 4350,
        "y": 3249.375,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4350,
                3200
            ],
            [
                4300,
                3200
            ],
            [
                4300,
                3250
            ],
            [
                4350,
                3250
            ]
        ],
        "speed": 75,
        "currentPoint": 3,
        "collidable": true,
        "pointOn": {
            "x": 4350,
            "y": 3250
        },
        "pointTo": {
            "x": 4350,
            "y": 3200
        },
        "xv": 4.592425496802574e-15,
        "yv": -75,
        "inView": false
    },
    {
        "x": 3600,
        "y": 3600,
        "w": 300,
        "h": 50,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": 4000,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 4700,
        "y": 3600,
        "w": 300,
        "h": 50,
        "type": "grav",
        "force": 4000,
        "dir": {
            "x": -4000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 4650,
        "y": 3300,
        "w": 50,
        "h": 100,
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
        "x": 3900,
        "y": 3300,
        "w": 50,
        "h": 100,
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
        "x": 4200,
        "y": 3500,
        "w": 50,
        "h": 50,
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
        "x": 4350,
        "y": 3500,
        "w": 50,
        "h": 50,
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
        "x": 3900,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4050,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4200,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4350,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4500,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 4650,
        "y": 3600,
        "w": 50,
        "h": 50,
        "type": "timetrap",
        "time": 0,
        "maxTime": 3,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 150,
        "y": 2350,
        "w": 1275,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 150,
        "y": 2650,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 450,
        "y": 2650,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 150,
        "y": 2650,
        "w": 300,
        "h": 50,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 150,
        "pivotY": 2650,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 152.0690632574555,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 0,
        "y": 2800,
        "w": 950,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 750,
        "y": 2650,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 450,
        "y": 2650,
        "w": 300,
        "h": 50,
        "type": "rotate-lava",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 450,
        "pivotY": 2650,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 152.0690632574555,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 750,
        "y": 2650,
        "w": 300,
        "h": 50,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 750,
        "pivotY": 2650,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 152.0690632574555,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                300,
                2750
            ],
            [
                325,
                2800
            ],
            [
                275,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 275,
            "right": 325,
            "top": 2750,
            "bottom": 2800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                600,
                2750
            ],
            [
                625,
                2800
            ],
            [
                575,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 575,
            "right": 625,
            "top": 2750,
            "bottom": 2800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                275,
                2500
            ],
            [
                325,
                2500
            ],
            [
                300,
                2550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 275,
            "right": 325,
            "top": 2500,
            "bottom": 2550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                575,
                2500
            ],
            [
                625,
                2500
            ],
            [
                600,
                2550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 575,
            "right": 625,
            "top": 2500,
            "bottom": 2550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                0,
                2750
            ],
            [
                50,
                2800
            ],
            [
                0,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 50,
            "top": 2750,
            "bottom": 2800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                925,
                2750
            ],
            [
                900,
                2800
            ],
            [
                850,
                2800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 850,
            "right": 925,
            "top": 2750,
            "bottom": 2800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                850,
                2500
            ],
            [
                900,
                2500
            ],
            [
                900,
                2550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 850,
            "right": 900,
            "top": 2500,
            "bottom": 2550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 150,
        "y": 3150,
        "w": 1250,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1325,
        "y": 2450,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 2500,
        "w": 25,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 3050,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 3100,
        "w": 75,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1075,
        "y": 2825,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1000,
        "y": 4300,
        "radius": 500,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 0,
        "y": 3900,
        "w": 100,
        "h": 1100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 250,
        "y": 3900,
        "w": 100,
        "h": 900,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                900,
                3800
            ],
            [
                1000,
                4800
            ],
            [
                350,
                4800
            ],
            [
                350,
                3900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 350,
            "right": 1000,
            "top": 3800,
            "bottom": 4800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 900,
        "y": 3800,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2000,
                4275
            ],
            [
                2000,
                5000
            ],
            [
                1225,
                5000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1225,
            "right": 2000,
            "top": 4275,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 0,
        "y": 3900,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                1025,
                4650
            ],
            [
                1350,
                4650
            ],
            [
                1250,
                4800
            ],
            [
                1025,
                4800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1025,
            "right": 1350,
            "top": 4650,
            "bottom": 4800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                3050
            ],
            [
                900,
                3150
            ],
            [
                800,
                3150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 900,
            "top": 3050,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 250,
        "y": 3050,
        "w": 550,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 250,
        "y": 3150,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 475,
        "y": 3375,
        "w": 1125,
        "h": 50,
        "type": "rotate-lava",
        "angle": 9,
        "rotateSpeed": -180,
        "pivotX": 475,
        "pivotY": 3375,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 563.0552814777604,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 0,
        "y": 3900,
        "w": 300,
        "h": 900,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 5000,
        "w": 5025,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 5000,
        "w": 5000,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5000,
        "y": 0,
        "w": 300,
        "h": 5250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1500,
                3400
            ],
            [
                1500,
                4250
            ],
            [
                900,
                3800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 900,
            "right": 1500,
            "top": 3400,
            "bottom": 4250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1625,
        "y": 3425,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 66,
        "rotateSpeed": 180,
        "pivotX": 1625,
        "pivotY": 3425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1750,
        "y": 3425,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 36,
        "rotateSpeed": 180,
        "pivotX": 1750,
        "pivotY": 3425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1875,
        "y": 3425,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 1875,
        "pivotY": 3425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                1025,
                3575
            ],
            [
                1250,
                3575
            ],
            [
                950,
                3775
            ]
        ],
        "type": "poly",
        "most": {
            "left": 950,
            "right": 1250,
            "top": 3575,
            "bottom": 3775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1875,
        "y": 3550,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 96,
        "rotateSpeed": 180,
        "pivotX": 1875,
        "pivotY": 3550,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1750,
        "y": 3550,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 66,
        "rotateSpeed": 180,
        "pivotX": 1750,
        "pivotY": 3550,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1625,
        "y": 3550,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 36,
        "rotateSpeed": 180,
        "pivotX": 1625,
        "pivotY": 3550,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1750,
        "y": 3925,
        "w": 500,
        "h": 50,
        "type": "rotate-lava",
        "angle": 144,
        "rotateSpeed": -180,
        "pivotX": 1750,
        "pivotY": 3925,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 251.24689052802225,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1875,
        "y": 3750,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 84,
        "rotateSpeed": -180,
        "pivotX": 1875,
        "pivotY": 3750,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1875,
        "y": 3875,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 174,
        "rotateSpeed": -180,
        "pivotX": 1875,
        "pivotY": 3875,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1875,
        "y": 4000,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 204,
        "rotateSpeed": -180,
        "pivotX": 1875,
        "pivotY": 4000,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1625,
        "y": 4250,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 46,
        "rotateSpeed": 180,
        "pivotX": 1625,
        "pivotY": 4250,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1725,
        "y": 4250,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 16,
        "rotateSpeed": 180,
        "pivotX": 1725,
        "pivotY": 4250,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1750,
        "y": 3750,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 114,
        "rotateSpeed": -180,
        "pivotX": 1750,
        "pivotY": 3750,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1625,
        "y": 3750,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 144,
        "rotateSpeed": -180,
        "pivotX": 1625,
        "pivotY": 3750,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 100,
        "y": 4800,
        "w": 50,
        "h": 200,
        "type": "tp",
        "tpx": 400,
        "tpy": 6100,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 1050,
        "y": 4800,
        "w": 100,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 850,
        "y": 4900,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 800,
        "y": 4950,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 4800,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 650,
        "y": 4800,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 500,
        "y": 4950,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 450,
        "y": 4900,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 400,
        "y": 4850,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 4800,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 150,
        "y": 4800,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 250,
        "y": 4800,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 350,
        "y": 4950,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 900,
        "y": 2625,
        "w": 50,
        "h": 50,
        "type": "mark",
        "time": 5,
        "inView": false
    },
    {
        "x": 1450,
        "y": 3325,
        "w": 50,
        "h": 50,
        "type": "cure",
        "inView": false
    },
    {
        "x": 1400,
        "y": 3305,
        "w": 100,
        "h": 175,
        "type": "move",
        "points": [
            [
                1400,
                3300
            ],
            [
                1400,
                3600
            ]
        ],
        "speed": 600,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 1400,
            "y": 3300
        },
        "pointTo": {
            "x": 1400,
            "y": 3600
        },
        "xv": 3.6739403974420595e-14,
        "yv": 600,
        "inView": false
    },
    {
        "x": 1825,
        "y": 4250,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -14,
        "rotateSpeed": 180,
        "pivotX": 1825,
        "pivotY": 4250,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 3350,
        "y": 4900,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    3350,
                    5000
                ],
                [
                    3350,
                    5100
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3250,
                    4900
                ],
                [
                    3150,
                    4900
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
        "x": 1075,
        "y": 2825,
        "w": 650,
        "h": 50,
        "type": "rotate-lava",
        "angle": 96,
        "rotateSpeed": 180,
        "pivotX": 1075,
        "pivotY": 2825,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 325.96012026013244,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 175,
        "y": 2350,
        "w": 875,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 2175,
        "w": 150,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 175,
        "y": 2175,
        "w": 875,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -200,
        "y": 2175,
        "w": 175,
        "h": 325,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 4575,
        "w": 1150,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 5025,
        "w": 1975,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -200,
        "y": 4575,
        "w": 275,
        "h": 650,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -200,
        "y": 2525,
        "w": 175,
        "h": 275,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1075,
        "y": 2825,
        "r": 125,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 125,
        "inView": false
    },
    {
        "x": -200,
        "y": 2825,
        "w": 1000,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -200,
        "y": 2900,
        "w": 175,
        "h": 900,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 650,
        "y": 3175,
        "w": 1425,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2025,
        "y": 3300,
        "w": 50,
        "h": 1700,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                2025,
                4300
            ],
            [
                2025,
                5000
            ],
            [
                1275,
                5000
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1275,
            "right": 2025,
            "top": 4300,
            "bottom": 5000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": -200,
        "y": 3925,
        "w": 1450,
        "h": 625,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 3600,
        "w": 200,
        "h": 650,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1050,
        "y": 3600,
        "w": 200,
        "h": 300,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -200,
        "y": 3825,
        "w": 175,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                0,
                3825
            ],
            [
                75,
                3825
            ],
            [
                75,
                3900
            ],
            [
                0,
                3900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 0,
            "right": 75,
            "top": 3825,
            "bottom": 3900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                975,
                3800
            ],
            [
                1025,
                3600
            ],
            [
                1025,
                3900
            ],
            [
                425,
                3900
            ],
            [
                925,
                3825
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 425,
            "right": 1025,
            "top": 3600,
            "bottom": 3900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1475,
                3450
            ],
            [
                1475,
                3575
            ],
            [
                1275,
                3575
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1275,
            "right": 1475,
            "top": 3450,
            "bottom": 3575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1075,
                2450
            ],
            [
                1475,
                2450
            ],
            [
                1475,
                3150
            ],
            [
                1175,
                3150
            ],
            [
                1275,
                3125
            ],
            [
                1400,
                3000
            ],
            [
                1425,
                2875
            ],
            [
                1425,
                2700
            ],
            [
                1350,
                2575
            ],
            [
                1250,
                2500
            ],
            [
                1175,
                2475
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1075,
            "right": 1475,
            "top": 2450,
            "bottom": 3150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 475,
        "y": 3375,
        "r": 275,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 275,
        "inView": false
    },
    {
        "points": [
            [
                1275,
                4275
            ],
            [
                1475,
                4275
            ],
            [
                1425,
                4500
            ],
            [
                1275,
                4725
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1275,
            "right": 1475,
            "top": 4275,
            "bottom": 4725
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": -875,
        "y": 2175,
        "w": 650,
        "h": 3050,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1075,
        "y": 2175,
        "w": 400,
        "h": 250,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1500,
        "y": 2175,
        "w": 225,
        "h": 400,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": -875,
        "y": 1800,
        "w": 2600,
        "h": 350,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 2225,
        "w": 250,
        "h": 350,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1566.0229612913781,
        "y": 4100,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                1150,
                4100
            ],
            [
                1850,
                4100
            ],
            [
                1250,
                4800
            ],
            [
                1150,
                4800
            ]
        ],
        "speed": 605.488611432,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1150,
            "y": 4100
        },
        "pointTo": {
            "x": 1850,
            "y": 4100
        },
        "xv": 605.488611432,
        "yv": 0,
        "inView": false
    },
    {
        "x": -25,
        "y": 5250,
        "w": 5325,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 800,
        "y": 5700,
        "w": 100,
        "h": 700,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 175,
        "y": 5875,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 625,
        "y": 5875,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 625,
        "y": 6325,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 175,
        "y": 6325,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": -75,
        "y": 6100,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 400,
        "y": 5650,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 400,
        "y": 6575,
        "radius": 175,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 850,
        "y": 6100,
        "radius": 175,
        "type": "circle-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    850,
                    6100
                ],
                [
                    850,
                    6275
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    850,
                    6100
                ],
                [
                    850,
                    5925
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": -25,
        "y": 5675,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 825,
        "y": 5675,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": -25,
        "y": 6525,
        "radius": 79,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2225,
        "y": 5650,
        "w": 575,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2800,
        "y": 5650,
        "w": 112.5,
        "h": 1100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3150,
        "y": 5750,
        "w": 0,
        "h": 0,
        "type": "breakable",
        "maxStrength": 10,
        "currentStrength": 10,
        "time": 0.016,
        "timer": 0.016,
        "regenTime": 10,
        "inView": false
    },
    {
        "x": 3525,
        "y": 6250,
        "w": 25,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4075,
        "y": 6250,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3600,
        "y": 5800,
        "w": 500,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3625,
        "y": 6350,
        "w": 175,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1450,
        "y": 6300,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1100,
        "y": 6300,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1450,
        "y": 6300,
        "radius": 290,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1450,
                    6150
                ],
                [
                    1450,
                    6010
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1450,
                    6450
                ],
                [
                    1450,
                    6590
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
        "x": 1625,
        "y": 6450,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1450,
        "y": 6000,
        "w": 275,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 6050,
        "w": 125,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1775,
                5800
            ],
            [
                1775,
                6000
            ],
            [
                1450,
                6000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1450,
            "right": 1775,
            "top": 5800,
            "bottom": 6000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1700,
        "y": 5925,
        "w": 150,
        "h": 575,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1050,
        "y": 5850,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1450,
        "y": 6050,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 900,
        "y": 6200,
        "w": 200,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1100,
        "y": 5950,
        "w": 450,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1100,
        "y": 6050,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 1100,
        "y": 6200,
        "w": 350,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1450,
        "y": 6300,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 1600,
        "y": 6050,
        "w": 125,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1575,
        "y": 6050,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1075,
        "y": 5800,
        "w": 425,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1500,
                5700
            ],
            [
                1825,
                5700
            ],
            [
                1500,
                5900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1500,
            "right": 1825,
            "top": 5700,
            "bottom": 5900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 875,
        "y": 5675,
        "w": 625,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1450,
                6450
            ],
            [
                1450,
                6500
            ],
            [
                800,
                6500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1450,
            "top": 6450,
            "bottom": 6500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                6400
            ],
            [
                1450,
                6400
            ],
            [
                800,
                6450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 800,
            "right": 1450,
            "top": 6400,
            "bottom": 6450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1725,
        "y": 5675,
        "w": 500,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3450,
        "y": 5950,
        "w": 650,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3800,
        "y": 6350,
        "w": 50,
        "h": 100,
        "type": "tp",
        "tpx": 4475,
        "tpy": 5725,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3750,
        "y": 6450,
        "w": 700,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 5950,
        "w": 150,
        "h": 525,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4075,
        "y": 5925,
        "w": 250,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 6500,
        "w": 2900,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2875,
        "y": 5675,
        "w": 75,
        "h": 1075,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2925,
        "y": 6150,
        "w": 225,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 6000,
        "w": 100,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 6650,
        "w": 775,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2925,
        "y": 6225,
        "w": 125,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 6300,
        "w": 75,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3150,
        "y": 6200,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2100,
        "y": 6275,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2100,
        "y": 6075,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2100,
        "y": 5875,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2100,
        "y": 5975,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1975,
        "y": 5875,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2100,
        "y": 6175,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1825,
        "y": 5900,
        "w": 75,
        "h": 625,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1775,
        "y": 5800,
        "w": 325,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2100,
        "y": 5875,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 1900,
        "y": 5950,
        "w": 50,
        "h": 325,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2250,
        "y": 5950,
        "w": 50,
        "h": 475,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2100,
        "y": 6000,
        "w": 150,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1875,
        "y": 6200,
        "w": 225,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2100,
        "y": 6275,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 2250,
        "y": 5950,
        "w": 575,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2225,
        "y": 5700,
        "w": 575,
        "h": 275,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 5700,
        "w": 450,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2300,
        "y": 6400,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2300,
        "y": 6125,
        "w": 50,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1975,
        "y": 6425,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1975,
                    6500
                ],
                [
                    1975,
                    6550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1975,
                    6350
                ],
                [
                    1975,
                    6300
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
        "x": 1975,
        "y": 6425,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1975,
        "y": 6400,
        "w": 275,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2125,
        "y": 6275,
        "radius": 175,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2250,
                    6275
                ],
                [
                    2300,
                    6275
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2125,
                    6400
                ],
                [
                    2125,
                    6450
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
        "x": 2250,
        "y": 6275,
        "w": 75,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1975,
        "y": 6425,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 2450,
        "y": 6425,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2700,
        "y": 6425,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2450,
        "y": 6400,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2637.5,
        "y": 6337.5,
        "w": 225,
        "h": 50,
        "type": "rotate-normal",
        "angle": 55.0079798015,
        "rotateSpeed": 0,
        "pivotX": 2637.5,
        "pivotY": 6337.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 115.2443057161611,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2575,
        "y": 6250,
        "radius": 26,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2700,
        "y": 6425,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 2512.5,
        "y": 6337.5,
        "w": 225,
        "h": 50,
        "type": "rotate-normal",
        "angle": -55.0079798015,
        "rotateSpeed": 0,
        "pivotX": 2512.5,
        "pivotY": 6337.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 115.2443057161611,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2550,
        "y": 6275,
        "w": 50,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2500,
        "y": 6350,
        "w": 150,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2525,
        "y": 6325,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2475,
        "y": 6375,
        "w": 200,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2750,
        "y": 6225,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": 55,
        "rotateSpeed": 0,
        "pivotX": 2750,
        "pivotY": 6225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2400,
        "y": 6225,
        "w": 250,
        "h": 50,
        "type": "rotate-normal",
        "angle": -55,
        "rotateSpeed": 0,
        "pivotX": 2400,
        "pivotY": 6225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2225,
        "y": 6375,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2900,
        "y": 6025,
        "w": 75,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2725,
        "y": 5675,
        "w": 100,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2100,
        "y": 5875,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2100,
                    5750
                ],
                [
                    2100,
                    5675
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2100,
                    6000
                ],
                [
                    2100,
                    6075
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
        "x": 2100,
        "y": 6075,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4450,
        "y": 6350,
        "w": 150,
        "h": 150,
        "spawn": {
            "x": 4525,
            "y": 6425
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 3675,
        "y": 6325,
        "w": 125,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2750,
        "y": 6450,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2800,
                    6450
                ],
                [
                    2850,
                    6450
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2750,
                    6500
                ],
                [
                    2750,
                    6550
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
        "x": 2642,
        "y": 6200,
        "radius": 75,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": -0.7853981633974483,
        "startPolygon": {
            "points": [
                [
                    2642,
                    6150
                ],
                [
                    2642,
                    6125
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2677.3553390593274,
                    6164.644660940673
                ],
                [
                    2695.033008588991,
                    6146.966991411009
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
        "x": 2508,
        "y": 6200,
        "radius": 75,
        "type": "circle-hollow-slice",
        "startAngle": -2.356194490192345,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2472.6446609406726,
                    6164.644660940673
                ],
                [
                    2454.966991411009,
                    6146.966991411009
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    2508,
                    6150
                ],
                [
                    2508,
                    6125
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
        "x": 5100,
        "y": 5700,
        "w": 150,
        "h": 1450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2350,
                6150
            ],
            [
                2500,
                6150
            ],
            [
                2350,
                6350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2350,
            "right": 2500,
            "top": 6150,
            "bottom": 6350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2650,
                6150
            ],
            [
                2800,
                6150
            ],
            [
                2800,
                6350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2650,
            "right": 2800,
            "top": 6150,
            "bottom": 6350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4975,
        "y": 5825,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4975,
        "y": 5825,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4575,
        "y": 6025,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4575,
        "y": 5950,
        "w": 550,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4450,
        "y": 6150,
        "w": 525,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4975,
        "y": 6225,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4575,
        "y": 6025,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4975,
        "y": 6225,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4600,
        "y": 6350,
        "w": 500,
        "h": 800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4975,
        "y": 6225,
        "radius": 180,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4975,
                    6100
                ],
                [
                    4975,
                    6045
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4975,
                    6350
                ],
                [
                    4975,
                    6405
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
        "x": 4975,
        "y": 5825,
        "radius": 180,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4975,
                    5700
                ],
                [
                    4975,
                    5645
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4975,
                    5950
                ],
                [
                    4975,
                    6005
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
        "y": 6025,
        "radius": 180,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4575,
                    6150
                ],
                [
                    4575,
                    6205
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4575,
                    5900
                ],
                [
                    4575,
                    5845
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
                4450,
                6300
            ],
            [
                4500,
                6300
            ],
            [
                4450,
                6350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4450,
            "right": 4500,
            "top": 6300,
            "bottom": 6350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3050,
                6250
            ],
            [
                3150,
                6250
            ],
            [
                3350,
                6650
            ],
            [
                3050,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3050,
            "right": 3350,
            "top": 6250,
            "bottom": 6650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3525,
                6250
            ],
            [
                3650,
                6350
            ],
            [
                3650,
                6650
            ],
            [
                3350,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3350,
            "right": 3650,
            "top": 6250,
            "bottom": 6650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3600,
        "y": 6150,
        "w": 450,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3300,
                6200
            ],
            [
                3400,
                6200
            ],
            [
                3350,
                6400
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3300,
            "right": 3400,
            "top": 6200,
            "bottom": 6400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3525,
        "y": 6250,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 6050,
        "w": 125,
        "h": 400,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3350,
        "y": 6325,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 3250,
        "y": 5750,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    3250,
                    5700
                ],
                [
                    3250,
                    5650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3300,
                    5750
                ],
                [
                    3350,
                    5750
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
        "x": 3000,
        "y": 5750,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    2950,
                    5750
                ],
                [
                    2900,
                    5750
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3000,
                    5700
                ],
                [
                    3000,
                    5650
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
        "x": 3000,
        "y": 5750,
        "w": 250,
        "h": 150,
        "type": "roundedcorners",
        "circles": [
            {
                "x": 3050,
                "y": 5800,
                "radius": 50
            },
            {
                "x": 3200,
                "y": 5800,
                "radius": 50
            },
            {
                "x": 3050,
                "y": 5850,
                "radius": 50
            },
            {
                "x": 3200,
                "y": 5850,
                "radius": 50
            }
        ],
        "rects": [
            {
                "x": 3050,
                "y": 5750,
                "w": 150,
                "h": 150
            },
            {
                "x": 3000,
                "y": 5800,
                "w": 250,
                "h": 50
            }
        ],
        "roundRadius": 50,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5700,
        "w": 300,
        "h": 50,
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
        "y": 5700,
        "w": 50,
        "h": 200,
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
        "x": 3125,
        "y": 5725,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3125,
        "y": 5925,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2975,
        "y": 5825,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3275,
        "y": 5825,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3125,
        "y": 5825,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "points": [
            [
                3600,
                6150
            ],
            [
                3600,
                6250
            ],
            [
                3525,
                6250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3525,
            "right": 3600,
            "top": 6150,
            "bottom": 6250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3175,
        "y": 5950,
        "w": 150,
        "h": 50,
        "type": "coindoor",
        "coins": 6,
        "currentCoins": 6,
        "inView": false
    },
    {
        "x": 2950,
        "y": 5750,
        "w": 50,
        "h": 50,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 0,
            "y": -8000
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 4450,
        "y": 5700,
        "w": 550,
        "h": 50,
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
        "x": 3450,
        "y": 6025,
        "w": 125,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3575,
                6050
            ],
            [
                3625,
                6050
            ],
            [
                3575,
                6100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3575,
            "right": 3625,
            "top": 6050,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3400,
                6000
            ],
            [
                3475,
                6000
            ],
            [
                3575,
                6100
            ],
            [
                3400,
                6100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3400,
            "right": 3575,
            "top": 6000,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2900,
        "y": 5950,
        "w": 300,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3300,
        "y": 5675,
        "w": 300,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3400,
                6100
            ],
            [
                3575,
                6100
            ],
            [
                3400,
                6150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3400,
            "right": 3575,
            "top": 6100,
            "bottom": 6150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3200,
        "y": 5975,
        "w": 100,
        "h": 0,
        "state": false,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3200,
        "y": 6125,
        "w": 100,
        "h": 0,
        "state": true,
        "type": "grpu",
        "grapplePoints": true,
        "inView": false
    },
    {
        "x": 3625,
        "y": 6725,
        "w": 50,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 6750,
        "w": 3800,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5250,
        "y": 5700,
        "w": 50,
        "h": 1450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 6950,
        "w": 3800,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3800,
        "y": 6900,
        "w": 350,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 6800,
        "w": 300,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4450,
                6500
            ],
            [
                4500,
                6550
            ],
            [
                4450,
                6550
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4450,
            "right": 4500,
            "top": 6500,
            "bottom": 6550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3900,
        "y": 6750,
        "w": 675,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4024.2850000000262,
        "y": 6550,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3800,
                6550
            ],
            [
                4200,
                6550
            ]
        ],
        "speed": 370.2,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3800,
            "y": 6550
        },
        "pointTo": {
            "x": 4200,
            "y": 6550
        },
        "xv": 370.2,
        "yv": 0,
        "inView": false
    },
    {
        "x": 3975.7149999999738,
        "y": 6650,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                3800,
                6650
            ],
            [
                4200,
                6650
            ]
        ],
        "speed": 370.2,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 4200,
            "y": 6650
        },
        "pointTo": {
            "x": 3800,
            "y": 6650
        },
        "xv": -370.2,
        "yv": 4.5336424504435016e-14,
        "inView": false
    },
    {
        "points": [
            [
                4250,
                6550
            ],
            [
                4350,
                6550
            ],
            [
                4350,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4250,
            "right": 4350,
            "top": 6550,
            "bottom": 6650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4150,
                6600
            ],
            [
                4200,
                6650
            ],
            [
                4150,
                6700
            ],
            [
                4100,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4100,
            "right": 4200,
            "top": 6600,
            "bottom": 6700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3800,
                6550
            ],
            [
                4050,
                6550
            ],
            [
                3800,
                6800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3800,
            "right": 4050,
            "top": 6550,
            "bottom": 6800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4300,
                6975
            ],
            [
                4300,
                7000
            ],
            [
                4275,
                7000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4275,
            "right": 4300,
            "top": 6975,
            "bottom": 7000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4550,
        "y": 6550,
        "w": 100,
        "h": 475,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4600,
                6500
            ],
            [
                4600,
                6550
            ],
            [
                4550,
                6550
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4550,
            "right": 4600,
            "top": 6500,
            "bottom": 6550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4100,
                6850
            ],
            [
                4100,
                6900
            ],
            [
                4050,
                6900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4050,
            "right": 4100,
            "top": 6850,
            "bottom": 6900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4150,
                6950
            ],
            [
                4200,
                6950
            ],
            [
                4150,
                7000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4150,
            "right": 4200,
            "top": 6950,
            "bottom": 7000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4100,
        "y": 6850,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3800,
                6800
            ],
            [
                3900,
                6900
            ],
            [
                3800,
                6900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3800,
            "right": 3900,
            "top": 6800,
            "bottom": 6900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4150,
        "y": 7225,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4150,
            "y": 7225,
            "w": 200,
            "h": 25,
            "pivotX": 4250,
            "pivotY": 7237.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4150,
        "y": 7275,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4150,
            "y": 7275,
            "w": 200,
            "h": 25,
            "pivotX": 4250,
            "pivotY": 7287.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4150,
        "y": 7175,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4150,
            "y": 7175,
            "w": 200,
            "h": 25,
            "pivotX": 4250,
            "pivotY": 7187.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4300,
        "y": 7175,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4300,
            "y": 7175,
            "w": 200,
            "h": 25,
            "pivotX": 4400,
            "pivotY": 7187.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4300,
        "y": 7225,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4300,
            "y": 7225,
            "w": 200,
            "h": 25,
            "pivotX": 4400,
            "pivotY": 7237.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4300,
        "y": 7275,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 430,
        "laser": {
            "x": 4300,
            "y": 7275,
            "w": 200,
            "h": 25,
            "pivotX": 4400,
            "pivotY": 7287.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 4100,
        "y": 7150,
        "w": 50,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 7150,
        "w": 50,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4100,
        "y": 7400,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4225,
        "y": 7375,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 3800,
        "y": 7000,
        "w": 250,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4050,
        "y": 7100,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4050,
        "y": 7000,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4050,
                7150
            ],
            [
                4100,
                7150
            ],
            [
                4100,
                7450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4050,
            "right": 4100,
            "top": 7150,
            "bottom": 7450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4350,
                7150
            ],
            [
                4400,
                7150
            ],
            [
                4350,
                7450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4350,
            "right": 4400,
            "top": 7150,
            "bottom": 7450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4100,
        "y": 7050,
        "w": 50,
        "h": 50,
        "type": "coindoor",
        "coins": 1,
        "currentCoins": 1,
        "inView": false
    },
    {
        "x": 4050,
        "y": 7050,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 3925,
        "tpy": 7175,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3950,
        "y": 7150,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 7200,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2600,
        "y": 7150,
        "w": 50,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3550,
        "y": 7225,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2650,
        "y": 7150,
        "w": 25,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2675,
        "y": 7150,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 2600,
        "y": 7150,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3600,
        "y": 7225,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3625,
        "y": 7200,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3550,
        "y": 7225,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 3150,
        "y": 7150,
        "w": 50,
        "h": 50,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 3700,
        "y": 7150,
        "w": 50,
        "h": 100,
        "type": "breakable",
        "maxStrength": 16,
        "currentStrength": 16,
        "time": 0.016,
        "timer": 0.016,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 150,
        "y": 7150,
        "w": 400,
        "h": 50,
        "type": "tp",
        "tpx": 575,
        "tpy": 7575,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 150,
        "y": 7950,
        "w": 600,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4075,
        "y": 6250,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": -150,
        "y": 7575,
        "w": 150,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": -100,
        "y": 7625,
        "w": 100,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": -25,
        "y": 8175,
        "w": 175,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 300,
        "y": 8175,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 300,
        "y": 8025,
        "w": 100,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7350,
        "y": 9750,
        "w": 200,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7300.833333333115,
        "y": 9400,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7300,
                9400
            ],
            [
                7450,
                9400
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7300,
            "y": 9400
        },
        "pointTo": {
            "x": 7450,
            "y": 9400
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7400.833333333115,
        "y": 9500,
        "w": 50,
        "h": 200,
        "type": "move",
        "points": [
            [
                7400,
                9500
            ],
            [
                7550,
                9500
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7400,
            "y": 9500
        },
        "pointTo": {
            "x": 7550,
            "y": 9500
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7200.833333333115,
        "y": 9450,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7200,
                9450
            ],
            [
                7350,
                9450
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7200,
            "y": 9450
        },
        "pointTo": {
            "x": 7350,
            "y": 9450
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7150.833333333115,
        "y": 9650,
        "w": 200,
        "h": 150,
        "type": "move",
        "points": [
            [
                7150,
                9650
            ],
            [
                7300,
                9650
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7150,
            "y": 9650
        },
        "pointTo": {
            "x": 7300,
            "y": 9650
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7300.833333333115,
        "y": 9600,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7300,
                9600
            ],
            [
                7450,
                9600
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7300,
            "y": 9600
        },
        "pointTo": {
            "x": 7450,
            "y": 9600
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7300.833333333115,
        "y": 9750,
        "w": 300,
        "h": 50,
        "type": "move",
        "points": [
            [
                7300,
                9750
            ],
            [
                7450,
                9750
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7300,
            "y": 9750
        },
        "pointTo": {
            "x": 7450,
            "y": 9750
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7500.833333333115,
        "y": 9700,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7500,
                9700
            ],
            [
                7650,
                9700
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7500,
            "y": 9700
        },
        "pointTo": {
            "x": 7650,
            "y": 9700
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7550.833333333115,
        "y": 9450,
        "w": 50,
        "h": 300,
        "type": "move",
        "points": [
            [
                7550,
                9450
            ],
            [
                7700,
                9450
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7550,
            "y": 9450
        },
        "pointTo": {
            "x": 7700,
            "y": 9450
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7200.833333333115,
        "y": 9500,
        "w": 200,
        "h": 50,
        "type": "move",
        "points": [
            [
                7200,
                9500
            ],
            [
                7350,
                9500
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7200,
            "y": 9500
        },
        "pointTo": {
            "x": 7350,
            "y": 9500
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7550,
        "w": 350,
        "h": 400,
        "type": "zone",
        "value": 6,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7550,
        "w": 350,
        "h": 350,
        "spawn": {
            "x": 1525,
            "y": 7725
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 225,
        "y": 8025,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 50,
        "y": 7975,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 50,
        "pivotY": 7975,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 70.71067811865476,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 100,
        "y": 8100,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 66,
        "rotateSpeed": 180,
        "pivotX": 100,
        "pivotY": 8100,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 70.71067811865476,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 225,
        "y": 8175,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": 126,
        "rotateSpeed": 180,
        "pivotX": 225,
        "pivotY": 8175,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 70.71067811865476,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                150,
                8175
            ],
            [
                175,
                8250
            ],
            [
                150,
                8250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 150,
            "right": 175,
            "top": 8175,
            "bottom": 8250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                275,
                8100
            ],
            [
                375,
                8250
            ],
            [
                275,
                8250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 275,
            "right": 375,
            "top": 8100,
            "bottom": 8250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 50,
        "y": 7825,
        "w": 100,
        "h": 100,
        "type": "rotatingsafe",
        "angle": -54,
        "rotateSpeed": 180,
        "pivotX": 50,
        "pivotY": 7825,
        "distToPivot": 0,
        "canCollide": true,
        "cullingRadius": 70.71067811865476,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 100,
        "y": 7850,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                100,
                8000
            ],
            [
                150,
                8000
            ],
            [
                150,
                8050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 150,
            "top": 8000,
            "bottom": 8050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                7825
            ],
            [
                200,
                7850
            ],
            [
                100,
                7850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 200,
            "top": 7825,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                7750
            ],
            [
                200,
                7750
            ],
            [
                100,
                7775
            ]
        ],
        "type": "poly",
        "most": {
            "left": 100,
            "right": 200,
            "top": 7750,
            "bottom": 7775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 100,
        "y": 7850,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 7850,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": -75,
        "y": 7775,
        "w": 75,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 50,
        "y": 7800,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    0,
                    7800
                ],
                [
                    -75,
                    7800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    50,
                    7750
                ],
                [
                    50.00000000000001,
                    7675
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
        "x": 150,
        "y": 8025,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    150,
                    8175
                ],
                [
                    150,
                    8250
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    0,
                    8025
                ],
                [
                    -75,
                    8025
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
        "x": -125,
        "y": 7875,
        "w": 125,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 175,
        "y": 8425,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": -0.5235987755982988,
        "endAngle": 4.6600291028248595,
        "startPolygon": {
            "points": [
                [
                    326.55444566227675,
                    8337.5
                ],
                [
                    369.8557158514987,
                    8312.5
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    165.84120765748474,
                    8250.23983141795
                ],
                [
                    163.22440984533753,
                    8200.30835468022
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
        "x": -25,
        "y": 8250,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 150,
        "y": 8200,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    150,
                    8050
                ],
                [
                    150,
                    7975
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    300,
                    8200
                ],
                [
                    375,
                    8200
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
        "x": -25,
        "y": 8600,
        "w": 200,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": -25,
        "y": 8550,
        "w": 75,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 175,
        "y": 8425,
        "radius": 125,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 350,
        "y": 8450,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 8600,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 300,
        "y": 8550,
        "w": 75,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 465.1288325973382,
        "y": 8360.03220814934,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                425,
                8350
            ],
            [
                625,
                8400
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 425,
            "y": 8350
        },
        "pointTo": {
            "x": 625,
            "y": 8400
        },
        "xv": 339.54987505086615,
        "yv": 84.88746876271654,
        "inView": false
    },
    {
        "x": 634.8711674026619,
        "y": 8414.96779185066,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                475,
                8375
            ],
            [
                675,
                8425
            ]
        ],
        "speed": 350,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 675,
            "y": 8425
        },
        "pointTo": {
            "x": 475,
            "y": 8375
        },
        "xv": -339.54987505086615,
        "yv": -84.88746876271661,
        "inView": false
    },
    {
        "x": 734.8711674026619,
        "y": 8414.96779185066,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                575,
                8375
            ],
            [
                775,
                8425
            ]
        ],
        "speed": 350,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 775,
            "y": 8425
        },
        "pointTo": {
            "x": 575,
            "y": 8375
        },
        "xv": -339.54987505086615,
        "yv": -84.88746876271661,
        "inView": false
    },
    {
        "x": 859.8711674026619,
        "y": 8439.96779185066,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                700,
                8400
            ],
            [
                900,
                8450
            ]
        ],
        "speed": 350,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 900,
            "y": 8450
        },
        "pointTo": {
            "x": 700,
            "y": 8400
        },
        "xv": -339.54987505086615,
        "yv": -84.88746876271661,
        "inView": false
    },
    {
        "x": 665.1288325973381,
        "y": 8410.03220814934,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                625,
                8400
            ],
            [
                825,
                8450
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 625,
            "y": 8400
        },
        "pointTo": {
            "x": 825,
            "y": 8450
        },
        "xv": 339.54987505086615,
        "yv": 84.88746876271654,
        "inView": false
    },
    {
        "x": 790.1288325973381,
        "y": 8410.03220814934,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                750,
                8400
            ],
            [
                950,
                8450
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 750,
            "y": 8400
        },
        "pointTo": {
            "x": 950,
            "y": 8450
        },
        "xv": 339.54987505086615,
        "yv": 84.88746876271654,
        "inView": false
    },
    {
        "x": 584.871167402662,
        "y": 8135.032208149339,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                425,
                8175
            ],
            [
                625,
                8125
            ]
        ],
        "speed": 350,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 625,
            "y": 8125
        },
        "pointTo": {
            "x": 425,
            "y": 8175
        },
        "xv": -339.54987505086615,
        "yv": 84.88746876271661,
        "inView": false
    },
    {
        "x": 755.9058470735852,
        "y": 8134.5470764632055,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                725,
                8150
            ],
            [
                775,
                8125
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 725,
            "y": 8150
        },
        "pointTo": {
            "x": 775,
            "y": 8125
        },
        "xv": 313.04951684997053,
        "yv": -156.52475842498527,
        "inView": false
    },
    {
        "x": 690.1288325973378,
        "y": 8139.967791850661,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                650,
                8150
            ],
            [
                850,
                8100
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 650,
            "y": 8150
        },
        "pointTo": {
            "x": 850,
            "y": 8100
        },
        "xv": 339.54987505086615,
        "yv": -84.88746876271654,
        "inView": false
    },
    {
        "x": 909.8711674026622,
        "y": 8085.032208149339,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                750,
                8125
            ],
            [
                950,
                8075
            ]
        ],
        "speed": 350,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 950,
            "y": 8075
        },
        "pointTo": {
            "x": 750,
            "y": 8125
        },
        "xv": -339.54987505086615,
        "yv": 84.88746876271661,
        "inView": false
    },
    {
        "x": 890.1288325973478,
        "y": 8139.967791850659,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                850,
                8150
            ],
            [
                1050,
                8100
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 850,
            "y": 8150
        },
        "pointTo": {
            "x": 1050,
            "y": 8100
        },
        "xv": 339.54987505086615,
        "yv": -84.88746876271654,
        "inView": false
    },
    {
        "x": 540.1288325973379,
        "y": 8139.967791850661,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                500,
                8150
            ],
            [
                700,
                8100
            ]
        ],
        "speed": 350,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 500,
            "y": 8150
        },
        "pointTo": {
            "x": 700,
            "y": 8100
        },
        "xv": 339.54987505086615,
        "yv": -84.88746876271654,
        "inView": false
    },
    {
        "x": 450,
        "y": 8075,
        "w": 125,
        "h": 100,
        "type": "roundedlava",
        "circles": [
            {
                "x": 460,
                "y": 8085,
                "radius": 10
            },
            {
                "x": 565,
                "y": 8085,
                "radius": 10
            },
            {
                "x": 460,
                "y": 8165,
                "radius": 10
            },
            {
                "x": 565,
                "y": 8165,
                "radius": 10
            }
        ],
        "rects": [
            {
                "x": 460,
                "y": 8075,
                "w": 105,
                "h": 100
            },
            {
                "x": 450,
                "y": 8085,
                "w": 125,
                "h": 80
            }
        ],
        "roundRadius": 10,
        "inView": false
    },
    {
        "x": 800,
        "y": 8050,
        "w": 100,
        "h": 100,
        "type": "roundedlava",
        "circles": [
            {
                "x": 810,
                "y": 8060,
                "radius": 10
            },
            {
                "x": 890,
                "y": 8060,
                "radius": 10
            },
            {
                "x": 810,
                "y": 8140,
                "radius": 10
            },
            {
                "x": 890,
                "y": 8140,
                "radius": 10
            }
        ],
        "rects": [
            {
                "x": 810,
                "y": 8050,
                "w": 80,
                "h": 100
            },
            {
                "x": 800,
                "y": 8060,
                "w": 100,
                "h": 80
            }
        ],
        "roundRadius": 10,
        "inView": false
    },
    {
        "x": 525,
        "y": 8400,
        "w": 100,
        "h": 75,
        "type": "roundedlava",
        "circles": [
            {
                "x": 535,
                "y": 8410,
                "radius": 10
            },
            {
                "x": 615,
                "y": 8410,
                "radius": 10
            },
            {
                "x": 535,
                "y": 8465,
                "radius": 10
            },
            {
                "x": 615,
                "y": 8465,
                "radius": 10
            }
        ],
        "rects": [
            {
                "x": 535,
                "y": 8400,
                "w": 80,
                "h": 75
            },
            {
                "x": 525,
                "y": 8410,
                "w": 100,
                "h": 55
            }
        ],
        "roundRadius": 10,
        "inView": false
    },
    {
        "x": 825,
        "y": 8450,
        "w": 125,
        "h": 100,
        "type": "roundedlava",
        "circles": [
            {
                "x": 835,
                "y": 8460,
                "radius": 10
            },
            {
                "x": 940,
                "y": 8460,
                "radius": 10
            },
            {
                "x": 835,
                "y": 8540,
                "radius": 10
            },
            {
                "x": 940,
                "y": 8540,
                "radius": 10
            }
        ],
        "rects": [
            {
                "x": 835,
                "y": 8450,
                "w": 105,
                "h": 100
            },
            {
                "x": 825,
                "y": 8460,
                "w": 125,
                "h": 80
            }
        ],
        "roundRadius": 10,
        "inView": false
    },
    {
        "x": 575,
        "y": 8475,
        "w": 125,
        "h": 125,
        "type": "rotate-lava",
        "angle": 13.333333333333334,
        "rotateSpeed": 400,
        "pivotX": 575,
        "pivotY": 8475,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 88.38834764831844,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 825,
        "y": 8500,
        "w": 75,
        "h": 100,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 825,
        "pivotY": 8500,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 975,
        "y": 8525,
        "w": 50,
        "h": 50,
        "type": "rotate-lava",
        "angle": 101.5,
        "rotateSpeed": 45,
        "pivotX": 975,
        "pivotY": 8525,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 35.35533905932738,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 700,
        "y": 8475,
        "w": 100,
        "h": 75,
        "type": "rotate-lava",
        "angle": -13.333333333333334,
        "rotateSpeed": -400,
        "pivotX": 700,
        "pivotY": 8475,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 675,
        "y": 8100,
        "w": 125,
        "h": 125,
        "type": "rotate-lava",
        "angle": 13.333333333333334,
        "rotateSpeed": 400,
        "pivotX": 675,
        "pivotY": 8100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 88.38834764831844,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 925,
        "y": 8500,
        "w": 125,
        "h": 125,
        "type": "rotate-lava",
        "angle": 13.333333333333334,
        "rotateSpeed": 400,
        "pivotX": 925,
        "pivotY": 8500,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 88.38834764831844,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 525,
        "y": 8125,
        "w": 75,
        "h": 100,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 525,
        "pivotY": 8125,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 875,
        "y": 8100,
        "w": 75,
        "h": 100,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 875,
        "pivotY": 8100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 800,
        "y": 8100,
        "w": 100,
        "h": 75,
        "type": "rotate-lava",
        "angle": -13.333333333333334,
        "rotateSpeed": -400,
        "pivotX": 800,
        "pivotY": 8100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 550,
        "y": 8150,
        "w": 100,
        "h": 75,
        "type": "rotate-lava",
        "angle": -13.333333333333334,
        "rotateSpeed": -400,
        "pivotX": 550,
        "pivotY": 8150,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 600,
        "y": 8175,
        "w": 100,
        "h": 100,
        "type": "rotate-lava",
        "angle": 14,
        "rotateSpeed": 420,
        "pivotX": 600,
        "pivotY": 8175,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 70.71067811865476,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1050,
        "y": 8500,
        "w": 100,
        "h": 75,
        "type": "rotate-lava",
        "angle": -13.333333333333334,
        "rotateSpeed": -400,
        "pivotX": 1050,
        "pivotY": 8500,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1000,
        "y": 8100,
        "w": 100,
        "h": 75,
        "type": "rotate-lava",
        "angle": -13.333333333333334,
        "rotateSpeed": -400,
        "pivotX": 1000,
        "pivotY": 8100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 62.5,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 0,
        "y": 7550,
        "w": 200,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 7550,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4150,
        "y": 7000,
        "w": 150,
        "h": 150,
        "type": "timetrap",
        "time": 0,
        "maxTime": 1,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 1050,
        "y": 8200,
        "w": 50,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1000,
        "y": 8200,
        "w": 50,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1150,
        "y": 7550,
        "w": 50,
        "h": 850,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1100,
        "y": 8600,
        "w": 200,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 7700,
        "w": 50,
        "h": 950,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 8400,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1200,
        "y": 8350,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                775,
                8200
            ],
            [
                900,
                8200
            ],
            [
                1000,
                8275
            ]
        ],
        "type": "poly",
        "most": {
            "left": 775,
            "right": 1000,
            "top": 8200,
            "bottom": 8275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                900,
                8200
            ],
            [
                1000,
                8200
            ],
            [
                1000,
                8275
            ]
        ],
        "type": "poly",
        "most": {
            "left": 900,
            "right": 1000,
            "top": 8200,
            "bottom": 8275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1200,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7650,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 7700,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 7675,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1325,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1250,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1225,
        "y": 7550,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7575,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7600,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7625,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1325,
        "y": 7675,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 7675,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 7725,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7675,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7700,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 7725,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1100,
        "y": 8200,
        "w": 50,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 7575,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1325,
        "y": 7650,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 7650,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                1200,
                8250
            ],
            [
                1225,
                8250
            ],
            [
                1200,
                8275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1200,
            "right": 1225,
            "top": 8250,
            "bottom": 8275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1225,
                8325
            ],
            [
                1250,
                8350
            ],
            [
                1225,
                8350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1225,
            "right": 1250,
            "top": 8325,
            "bottom": 8350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1275,
                8200
            ],
            [
                1300,
                8200
            ],
            [
                1300,
                8225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1275,
            "right": 1300,
            "top": 8200,
            "bottom": 8225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1250,
                8125
            ],
            [
                1275,
                8125
            ],
            [
                1250,
                8150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1250,
            "right": 1275,
            "top": 8125,
            "bottom": 8150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1287.5,
        "y": 8162.5,
        "radius": 12.5,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1212.5,
        "y": 8062.5,
        "w": 25,
        "h": 25,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 1212.5,
        "pivotY": 8062.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 17.67766952966369,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1287.5,
        "y": 8037.5,
        "w": 25,
        "h": 25,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 1287.5,
        "pivotY": 8037.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 17.67766952966369,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1250,
        "y": 7887.5,
        "w": 25,
        "h": 25,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 1250,
        "pivotY": 7887.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 17.67766952966369,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                1200,
                7750
            ],
            [
                1225,
                7750
            ],
            [
                1200,
                7775
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1200,
            "right": 1225,
            "top": 7750,
            "bottom": 7775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1275,
                7750
            ],
            [
                1300,
                7750
            ],
            [
                1300,
                7775
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1275,
            "right": 1300,
            "top": 7750,
            "bottom": 7775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 275,
        "y": 8200,
        "w": 25,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 275,
        "y": 8225,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                275,
                8100
            ],
            [
                275,
                8225
            ],
            [
                250,
                8225
            ]
        ],
        "type": "poly",
        "most": {
            "left": 250,
            "right": 275,
            "top": 8100,
            "bottom": 8225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 175,
        "y": 8425,
        "r": 25,
        "angle": -280,
        "type": "circle-sentry",
        "speed": 650,
        "laser": {
            "x": 175,
            "y": 8425,
            "w": 400,
            "h": 25,
            "pivotX": 375,
            "pivotY": 8437.5,
            "distToPivot": 0
        },
        "rest": -100,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                400,
                8312
            ],
            [
                400,
                8325
            ],
            [
                329,
                8325
            ]
        ],
        "type": "poly",
        "most": {
            "left": 329,
            "right": 400,
            "top": 8312,
            "bottom": 8325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 375,
        "y": 8325,
        "w": 25,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 325,
        "y": 8325,
        "w": 25,
        "h": 12,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2150,
        "y": 7150,
        "w": 50,
        "h": 50,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 2150,
        "y": 7200,
        "w": 50,
        "h": 50,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 1550,
        "y": 7225,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1550,
        "y": 7150,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1575,
        "y": 7225,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1550,
        "y": 7150,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 7150,
        "w": 100,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                1850,
                7150
            ],
            [
                1875,
                7150
            ],
            [
                1850,
                7175
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1850,
            "right": 1875,
            "top": 7150,
            "bottom": 7175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1850,
                7225
            ],
            [
                1875,
                7250
            ],
            [
                1850,
                7250
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1850,
            "right": 1875,
            "top": 7225,
            "bottom": 7250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1600,
        "y": 7225,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 7150,
        "w": 250,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 7125,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1150,
                7150
            ],
            [
                1200,
                7150
            ],
            [
                1175,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1150,
            "right": 1200,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                550,
                7150
            ],
            [
                600,
                7150
            ],
            [
                575,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 550,
            "right": 600,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                600,
                7150
            ],
            [
                650,
                7150
            ],
            [
                625,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 600,
            "right": 650,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                650,
                7150
            ],
            [
                700,
                7150
            ],
            [
                675,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 650,
            "right": 700,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                700,
                7150
            ],
            [
                750,
                7150
            ],
            [
                725,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 700,
            "right": 750,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                750,
                7150
            ],
            [
                800,
                7150
            ],
            [
                775,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 750,
            "right": 800,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                800,
                7150
            ],
            [
                850,
                7150
            ],
            [
                825,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 800,
            "right": 850,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                850,
                7150
            ],
            [
                900,
                7150
            ],
            [
                875,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 850,
            "right": 900,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                900,
                7150
            ],
            [
                950,
                7150
            ],
            [
                925,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 900,
            "right": 950,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                950,
                7150
            ],
            [
                1000,
                7150
            ],
            [
                975,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 950,
            "right": 1000,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1000,
                7150
            ],
            [
                1050,
                7150
            ],
            [
                1025,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1000,
            "right": 1050,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1050,
                7150
            ],
            [
                1100,
                7150
            ],
            [
                1075,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1050,
            "right": 1100,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1100,
                7150
            ],
            [
                1150,
                7150
            ],
            [
                1125,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1100,
            "right": 1150,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                7200
            ],
            [
                150,
                7225
            ],
            [
                100,
                7250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 100,
            "right": 150,
            "top": 7200,
            "bottom": 7250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                100,
                7150
            ],
            [
                150,
                7175
            ],
            [
                100,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 100,
            "right": 150,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1300,
        "y": 7150,
        "w": 100,
        "h": 50,
        "type": "grav",
        "force": 25000,
        "dir": {
            "x": 0,
            "y": 25000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 1900,
        "y": 7150,
        "w": 50,
        "h": 100,
        "type": "breakable",
        "maxStrength": 16,
        "currentStrength": 16,
        "time": 0.016,
        "timer": 0.016,
        "regenTime": 3,
        "inView": false
    },
    {
        "x": 100,
        "y": 7625,
        "w": 200,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 475,
        "y": 7550,
        "w": 50,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 500,
        "y": 7750,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 350,
        "y": 7550,
        "w": 125,
        "h": 50,
        "type": "tp",
        "tpx": 50,
        "tpy": 7775,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 525,
        "y": 7550,
        "w": 125,
        "h": 50,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "x": 525,
        "y": 7550,
        "w": 200,
        "h": 400,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 0,
            "y": 8000
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 300,
        "y": 7775,
        "w": 400,
        "h": 175,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": -8000,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "x": 300,
        "y": 7600,
        "w": 175,
        "h": 350,
        "type": "grav",
        "force": 8000,
        "dir": {
            "x": 0,
            "y": -8000
        },
        "direction": "up",
        "inView": false
    },
    {
        "points": [
            [
                300,
                7550
            ],
            [
                400,
                7550
            ],
            [
                300,
                7650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 300,
            "right": 400,
            "top": 7550,
            "bottom": 7650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 275,
        "y": 7625,
        "w": 175,
        "h": 325,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "up",
        "inView": false
    },
    {
        "x": 550,
        "y": 7525,
        "w": 200,
        "h": 400,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "down",
        "inView": false
    },
    {
        "x": 700,
        "y": 7550,
        "w": 200,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 325,
        "y": 7750,
        "w": 350,
        "h": 175,
        "type": "grav",
        "force": 0,
        "dir": {
            "x": 0,
            "y": 0
        },
        "direction": "left",
        "inView": false
    },
    {
        "points": [
            [
                700,
                7850
            ],
            [
                700,
                7950
            ],
            [
                600,
                7950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 600,
            "right": 700,
            "top": 7850,
            "bottom": 7950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                300,
                7850
            ],
            [
                400,
                7950
            ],
            [
                300,
                7950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 300,
            "right": 400,
            "top": 7850,
            "bottom": 7950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 500,
        "y": 7750,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                525,
                7550
            ],
            [
                550,
                7550
            ],
            [
                525,
                7625
            ]
        ],
        "type": "poly",
        "most": {
            "left": 525,
            "right": 550,
            "top": 7550,
            "bottom": 7625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                600,
                7550
            ],
            [
                700,
                7550
            ],
            [
                700,
                7650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 600,
            "right": 700,
            "top": 7550,
            "bottom": 7650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": -50,
        "y": 7250,
        "w": 1450,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                450,
                7550
            ],
            [
                475,
                7550
            ],
            [
                475,
                7625
            ]
        ],
        "type": "poly",
        "most": {
            "left": 450,
            "right": 475,
            "top": 7550,
            "bottom": 7625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1274.7916666667213,
        "y": 7787.5,
        "w": 25,
        "h": 25,
        "type": "lavamove",
        "points": [
            [
                1200,
                7787.5
            ],
            [
                1275,
                7787.5
            ]
        ],
        "speed": 25,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 1275,
            "y": 7787.5
        },
        "pointTo": {
            "x": 1200,
            "y": 7787.5
        },
        "xv": -25,
        "yv": 3.061616997868383e-15,
        "inView": false
    },
    {
        "x": 1200.2083333332787,
        "y": 7950,
        "w": 25,
        "h": 25,
        "type": "lavamove",
        "points": [
            [
                1200,
                7950
            ],
            [
                1275,
                7950
            ]
        ],
        "speed": 25,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 1200,
            "y": 7950
        },
        "pointTo": {
            "x": 1275,
            "y": 7950
        },
        "xv": 25,
        "yv": 0,
        "inView": false
    },
    {
        "x": 500,
        "y": 7750,
        "r": 25,
        "angle": -300,
        "type": "circle-sentry",
        "speed": 480,
        "laser": {
            "x": 500,
            "y": 7750,
            "w": 400,
            "h": 33,
            "pivotX": 700,
            "pivotY": 7766.5,
            "distToPivot": 0
        },
        "rest": 60,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 1225,
        "y": 7600,
        "w": 100,
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
        "x": 1237.5,
        "y": 7587.5,
        "w": 75,
        "h": 25,
        "type": "rotate-lava",
        "angle": -8,
        "rotateSpeed": -240,
        "pivotX": 1237.5,
        "pivotY": 7587.5,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 39.528470752104745,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1250,
        "y": 8350,
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
        "x": 2950,
        "y": 7500,
        "w": 1550,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4450,
        "y": 7150,
        "w": 100,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7900,
        "w": 1500,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 7675,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1600,
                    7600
                ],
                [
                    1600,
                    7575
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1600,
                    7750
                ],
                [
                    1600,
                    7775
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
        "x": 1350,
        "y": 7550,
        "w": 350,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7650,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1450,
        "y": 7750,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1700,
                7675
            ],
            [
                1700,
                7750
            ],
            [
                1650,
                7750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1650,
            "right": 1700,
            "top": 7675,
            "bottom": 7750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1700,
                7575
            ],
            [
                1700,
                7675
            ],
            [
                1650,
                7600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1650,
            "right": 1700,
            "top": 7575,
            "bottom": 7675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1600,
        "y": 7675,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1450,
        "y": 7775,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1450,
                    7850
                ],
                [
                    1450,
                    7900
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1450,
                    7700
                ],
                [
                    1450,
                    7650
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
        "x": 1350,
        "y": 7850,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1350,
                7775
            ],
            [
                1400,
                7875
            ],
            [
                1350,
                7850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1350,
            "right": 1400,
            "top": 7775,
            "bottom": 7875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1350,
                7700
            ],
            [
                1400,
                7700
            ],
            [
                1350,
                7775
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1350,
            "right": 1400,
            "top": 7700,
            "bottom": 7775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1450,
        "y": 7775,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2350,
        "y": 7250,
        "w": 1650,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2325,
        "y": 7475,
        "w": 650,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                1450,
                7850
            ],
            [
                1700,
                7900
            ],
            [
                1450,
                7900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1450,
            "right": 1700,
            "top": 7850,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1450,
                7800
            ],
            [
                1700,
                7800
            ],
            [
                1700,
                7850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 1450,
            "right": 1700,
            "top": 7800,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1500,
        "y": 7250,
        "w": 900,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1400,
        "y": 7250,
        "w": 100,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3000,
        "y": 7900,
        "w": 6600,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1375,
        "y": 7500,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2925,
        "y": 8225,
        "w": 150,
        "h": 25,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 2925,
        "pivotY": 8225,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 76.03453162872775,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2925,
        "y": 8325,
        "w": 150,
        "h": 25,
        "type": "rotate-lava",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 2925,
        "pivotY": 8325,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 76.03453162872775,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2925,
        "y": 8425,
        "w": 150,
        "h": 25,
        "type": "rotate-lava",
        "angle": -6,
        "rotateSpeed": -180,
        "pivotX": 2925,
        "pivotY": 8425,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 76.03453162872775,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 2851.25,
        "y": 8500,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                2850,
                8500
            ],
            [
                2950,
                8500
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 2850,
            "y": 8500
        },
        "pointTo": {
            "x": 2950,
            "y": 8500
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 2948.75,
        "y": 8600,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                2850,
                8600
            ],
            [
                2950,
                8600
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 2950,
            "y": 8600
        },
        "pointTo": {
            "x": 2850,
            "y": 8600
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 1450,
        "y": 7500,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 4275,
        "tpy": 2350,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 1450,
        "y": 7450,
        "w": 50,
        "h": 50,
        "type": "coindoor",
        "coins": 1,
        "currentCoins": 1,
        "inView": false
    },
    {
        "x": 3275,
        "y": 7775,
        "radius": 25,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 2850,
        "y": 7900,
        "w": 150,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1550,
        "y": 8050,
        "r": 79,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 79,
        "inView": false
    },
    {
        "x": 1900,
        "y": 8225,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2050,
        "y": 8050,
        "r": 103,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 103,
        "inView": false
    },
    {
        "x": 1625,
        "y": 8225,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 2175,
        "y": 8275,
        "r": 100,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 100,
        "inView": false
    },
    {
        "x": 2425,
        "y": 8150,
        "r": 125,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 125,
        "inView": false
    },
    {
        "x": 2625,
        "y": 8375,
        "r": 127,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 127,
        "inView": false
    },
    {
        "x": 2625,
        "y": 8075,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 2250,
        "y": 7975,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 1675,
        "y": 8000,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 1775,
        "y": 8075,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 1800,
        "y": 8375,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 1900,
        "y": 8375,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 2075,
        "y": 8450,
        "r": 100,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 100,
        "inView": false
    },
    {
        "x": 2425,
        "y": 8375,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2350,
        "y": 8450,
        "r": 79,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 79,
        "inView": false
    },
    {
        "x": 2000,
        "y": 8250,
        "r": 35,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 35,
        "inView": false
    },
    {
        "x": 1650,
        "y": 8425,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "x": 1775,
        "y": 8250,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "x": 2750,
        "y": 8175,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "x": 2725,
        "y": 8000,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 2225,
        "y": 8100,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "x": 2525,
        "y": 7975,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "points": [
            [
                1700,
                7550
            ],
            [
                2000,
                7550
            ],
            [
                1700,
                7850
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 1700,
            "right": 2000,
            "top": 7550,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2150,
                7600
            ],
            [
                2150,
                7900
            ],
            [
                1850,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 1850,
            "right": 2150,
            "top": 7600,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2150,
        "y": 7600,
        "w": 300,
        "h": 300,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                2450,
                7600
            ],
            [
                2650,
                7600
            ],
            [
                2450,
                7800
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 2450,
            "right": 2650,
            "top": 7600,
            "bottom": 7800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2900,
                7550
            ],
            [
                2900,
                7850
            ],
            [
                2600,
                7850
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 2600,
            "right": 2900,
            "top": 7550,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 2900,
        "y": 7550,
        "w": 250,
        "h": 300,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3350,
        "y": 7600,
        "w": 150,
        "h": 300,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                3675,
                7550
            ],
            [
                4025,
                7550
            ],
            [
                3850,
                7725
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 3675,
            "right": 4025,
            "top": 7550,
            "bottom": 7725
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3500,
                7700
            ],
            [
                3700,
                7900
            ],
            [
                3500,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 3500,
            "right": 3700,
            "top": 7700,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3575,
                7600
            ],
            [
                3800,
                7825
            ],
            [
                3775,
                7850
            ],
            [
                3550,
                7625
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 3550,
            "right": 3800,
            "top": 7600,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3150,
        "y": 7600,
        "w": 50,
        "h": 250,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 3150,
        "y": 7550,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 1425,
        "tpy": 7475,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                4150,
                7700
            ],
            [
                4350,
                7900
            ],
            [
                3950,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 3950,
            "right": 4350,
            "top": 7700,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4250,
                7550
            ],
            [
                4600,
                7550
            ],
            [
                4425,
                7725
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 4250,
            "right": 4600,
            "top": 7550,
            "bottom": 7725
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4675,
                7725
            ],
            [
                4850,
                7900
            ],
            [
                4500,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 4500,
            "right": 4850,
            "top": 7725,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4675,
                7550
            ],
            [
                4775,
                7550
            ],
            [
                4725,
                7600
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 4675,
            "right": 4775,
            "top": 7550,
            "bottom": 7600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4950,
                7625
            ],
            [
                5050,
                7725
            ],
            [
                4950,
                7825
            ],
            [
                4850,
                7725
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 4850,
            "right": 5050,
            "top": 7625,
            "bottom": 7825
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5050,
                7550
            ],
            [
                5250,
                7550
            ],
            [
                5150,
                7650
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5050,
            "right": 5250,
            "top": 7550,
            "bottom": 7650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5375,
                7600
            ],
            [
                5500,
                7725
            ],
            [
                5375,
                7850
            ],
            [
                5250,
                7725
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5250,
            "right": 5500,
            "top": 7600,
            "bottom": 7850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5750,
                7700
            ],
            [
                5950,
                7900
            ],
            [
                5550,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5550,
            "right": 5950,
            "top": 7700,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                7550
            ],
            [
                5625,
                7550
            ],
            [
                5550,
                7625
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5475,
            "right": 5625,
            "top": 7550,
            "bottom": 7625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5825,
                7550
            ],
            [
                6275,
                7550
            ],
            [
                6050,
                7775
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5825,
            "right": 6275,
            "top": 7550,
            "bottom": 7775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6175,
                7825
            ],
            [
                6250,
                7900
            ],
            [
                6100,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 6100,
            "right": 6250,
            "top": 7825,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6100,
                7550
            ],
            [
                6500,
                7550
            ],
            [
                6300,
                7750
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 6100,
            "right": 6500,
            "top": 7550,
            "bottom": 7750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6525,
                7750
            ],
            [
                6675,
                7900
            ],
            [
                6375,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 6375,
            "right": 6675,
            "top": 7750,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                7550
            ],
            [
                7050,
                7550
            ],
            [
                6800,
                7800
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 6550,
            "right": 7050,
            "top": 7550,
            "bottom": 7800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6800,
        "y": 7550,
        "w": 250,
        "h": 250,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7025,
        "y": 7650,
        "w": 125,
        "h": 150,
        "type": "tp",
        "tpx": 1375,
        "tpy": 7625,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 100,
        "y": 8750,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 9200,
        "w": 100,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 9350,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 8750,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 8750,
        "w": 100,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 8750,
        "w": 175,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 9200,
        "w": 100,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 550,
        "y": 9350,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 550,
        "y": 8750,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 8750,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 100,
        "y": 9350,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7275,
        "y": 7725,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7450,
        "y": 7850,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7475,
        "y": 7625,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7875,
        "y": 7825,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7850,
        "y": 7600,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7675,
        "y": 7700,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "points": [
            [
                5150,
                7825
            ],
            [
                5225,
                7900
            ],
            [
                5075,
                7900
            ]
        ],
        "type": "poly-tp",
        "tpx": 1375,
        "tpy": 7625,
        "most": {
            "left": 5075,
            "right": 5225,
            "top": 7825,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8050,
        "y": 7550,
        "w": 650,
        "h": 350,
        "type": "trans",
        "collide": false,
        "opaq": 0.5,
        "inView": false
    },
    {
        "x": 8050,
        "y": 7550,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8050,
        "y": 7750,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8050,
                7750
            ],
            [
                8050,
                7900
            ],
            [
                7900,
                7900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7900,
            "right": 8050,
            "top": 7750,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7900,
                7550
            ],
            [
                8050,
                7550
            ],
            [
                8050,
                7700
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7900,
            "right": 8050,
            "top": 7550,
            "bottom": 7700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                7650
            ],
            [
                7275,
                7725
            ],
            [
                7150,
                7800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7150,
            "right": 7275,
            "top": 7650,
            "bottom": 7800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8250,
        "y": 7854.166666666711,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8250,
                7450
            ],
            [
                8250,
                7900
            ],
            [
                8450,
                7900
            ],
            [
                8450,
                7450
            ]
        ],
        "speed": 500,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 8250,
            "y": 7450
        },
        "pointTo": {
            "x": 8250,
            "y": 7900
        },
        "xv": 3.061616997868383e-14,
        "yv": 500,
        "inView": false
    },
    {
        "x": 8404.166666666677,
        "y": 7900,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8250,
                7650
            ],
            [
                8250,
                7900
            ],
            [
                8450,
                7900
            ],
            [
                8450,
                7450
            ],
            [
                8250,
                7450
            ]
        ],
        "speed": 500,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 8250,
            "y": 7900
        },
        "pointTo": {
            "x": 8450,
            "y": 7900
        },
        "xv": 500,
        "yv": 0,
        "inView": false
    },
    {
        "x": 8450,
        "y": 7745.833333333334,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8250,
                7850
            ],
            [
                8250,
                7900
            ],
            [
                8450,
                7900
            ],
            [
                8450,
                7450
            ],
            [
                8250,
                7450
            ]
        ],
        "speed": 500,
        "currentPoint": 2,
        "alongWith": false,
        "pointOn": {
            "x": 8450,
            "y": 7900
        },
        "pointTo": {
            "x": 8450,
            "y": 7450
        },
        "xv": 3.061616997868383e-14,
        "yv": -500,
        "inView": false
    },
    {
        "x": 8345.833333333312,
        "y": 7450,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8450,
                7750
            ],
            [
                8450,
                7450
            ],
            [
                8250,
                7450
            ],
            [
                8250,
                7900
            ],
            [
                8450,
                7900
            ]
        ],
        "speed": 500,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 8450,
            "y": 7450
        },
        "pointTo": {
            "x": 8250,
            "y": 7450
        },
        "xv": -500,
        "yv": 6.123233995736766e-14,
        "inView": false
    },
    {
        "x": 8250,
        "y": 7554.166666666666,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8450,
                7550
            ],
            [
                8450,
                7450
            ],
            [
                8250,
                7450
            ],
            [
                8250,
                7900
            ],
            [
                8450,
                7900
            ]
        ],
        "speed": 500,
        "currentPoint": 2,
        "alongWith": false,
        "pointOn": {
            "x": 8250,
            "y": 7450
        },
        "pointTo": {
            "x": 8250,
            "y": 7900
        },
        "xv": 3.061616997868383e-14,
        "yv": 500,
        "inView": false
    },
    {
        "x": 8450,
        "y": 7545.8333333333,
        "w": 100,
        "h": 100,
        "type": "move",
        "points": [
            [
                8400,
                7900
            ],
            [
                8450,
                7900
            ],
            [
                8450,
                7450
            ],
            [
                8250,
                7450
            ],
            [
                8250,
                7900
            ]
        ],
        "speed": 500,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 8450,
            "y": 7900
        },
        "pointTo": {
            "x": 8450,
            "y": 7450
        },
        "xv": 3.061616997868383e-14,
        "yv": -500,
        "inView": false
    },
    {
        "x": 9825,
        "y": 7725,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9825,
                    7550
                ],
                [
                    9825,
                    7425
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9825,
                    7900
                ],
                [
                    9825,
                    8025
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
        "x": 9825,
        "y": 7725,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9962.5,
        "y": 7725,
        "radius": 37.5,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7050,
        "y": 7550,
        "w": 99,
        "h": 100,
        "type": "tp",
        "tpx": 450,
        "tpy": 9100,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7050,
        "y": 7550,
        "w": 100,
        "h": 100,
        "color": "#23e743",
        "type": "block",
        "inView": false
    },
    {
        "x": 7050,
        "y": 7550,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 2,
        "currentCoins": 2,
        "inView": false
    },
    {
        "x": 8725,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 350,
        "laser": {
            "x": 8725,
            "y": 7725,
            "w": 1,
            "h": 25,
            "pivotX": 8725.5,
            "pivotY": 7737.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 8925,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 8925,
            "y": 7725,
            "w": 400,
            "h": 33,
            "pivotX": 9125,
            "pivotY": 7741.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 9125,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 370,
        "laser": {
            "x": 9125,
            "y": 7725,
            "w": 400,
            "h": 33,
            "pivotX": 9325,
            "pivotY": 7741.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 9325,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 380,
        "laser": {
            "x": 9325,
            "y": 7725,
            "w": 400,
            "h": 33,
            "pivotX": 9525,
            "pivotY": 7741.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 9525,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 390,
        "laser": {
            "x": 9525,
            "y": 7725,
            "w": 400,
            "h": 33,
            "pivotX": 9725,
            "pivotY": 7741.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 9825,
        "y": 7725,
        "r": 35,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 400,
        "laser": {
            "x": 9825,
            "y": 7725,
            "w": 400,
            "h": 33,
            "pivotX": 10025,
            "pivotY": 7741.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "points": [
            [
                8100,
                7550
            ],
            [
                8250,
                7550
            ],
            [
                8100,
                7700
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8100,
            "right": 8250,
            "top": 7550,
            "bottom": 7700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8100,
                7750
            ],
            [
                8250,
                7900
            ],
            [
                8100,
                7900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8100,
            "right": 8250,
            "top": 7750,
            "bottom": 7900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3250,
        "y": 4100,
        "w": 50,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.1,
        "inView": false
    },
    {
        "x": 3300,
        "y": 4300,
        "w": 50,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.1,
        "inView": false
    },
    {
        "x": 3250,
        "y": 4500,
        "w": 50,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.1,
        "inView": false
    },
    {
        "x": 3300,
        "y": 4700,
        "w": 50,
        "h": 200,
        "type": "trans",
        "collide": false,
        "opaq": 0.1,
        "inView": false
    },
    {
        "x": 3300,
        "y": 4301.25,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3300,
                4300
            ],
            [
                3300,
                4450
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3300,
            "y": 4300
        },
        "pointTo": {
            "x": 3300,
            "y": 4450
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 3250,
        "y": 4101.25,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3250,
                4100
            ],
            [
                3250,
                4250
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3250,
            "y": 4100
        },
        "pointTo": {
            "x": 3250,
            "y": 4250
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 3250,
        "y": 4501.25,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3250,
                4500
            ],
            [
                3250,
                4650
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3250,
            "y": 4500
        },
        "pointTo": {
            "x": 3250,
            "y": 4650
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 3300,
        "y": 4701.25,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                3300,
                4700
            ],
            [
                3300,
                4850
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 3300,
            "y": 4700
        },
        "pointTo": {
            "x": 3300,
            "y": 4850
        },
        "xv": 9.184850993605149e-15,
        "yv": 150,
        "inView": false
    },
    {
        "x": 0,
        "y": 9350,
        "w": 800,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 8650,
        "w": 200,
        "h": 700,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 200,
        "y": 8650,
        "w": 600,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 800,
        "y": 9350,
        "w": 400,
        "h": 100,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 800,
        "y": 8650,
        "w": 9200,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 700,
        "y": 9150,
        "w": 325,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                200,
                8850
            ],
            [
                350,
                8850
            ],
            [
                200,
                9000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 200,
            "right": 350,
            "top": 8850,
            "bottom": 9000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                200,
                9200
            ],
            [
                350,
                9350
            ],
            [
                200,
                9350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 200,
            "right": 350,
            "top": 9200,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                700,
                9200
            ],
            [
                700,
                9350
            ],
            [
                550,
                9350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 550,
            "right": 700,
            "top": 9200,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                550,
                8850
            ],
            [
                700,
                8850
            ],
            [
                700,
                9000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 550,
            "right": 700,
            "top": 8850,
            "bottom": 9000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 800,
        "y": 9200,
        "w": 550,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 8950,
        "w": 100,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 8850,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 2,
        "currentCoins": 2,
        "inView": false
    },
    {
        "x": 875,
        "y": 8850,
        "w": 50,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1050,
        "y": 9025,
        "w": 50,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1225,
        "y": 8850,
        "w": 50,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1250,
        "y": 9025,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1075,
        "y": 9025,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1125,
        "y": 9150,
        "w": 225,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 962.5,
        "y": 9000,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 1137.5,
        "y": 9000,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 700,
        "y": 9000,
        "w": 175,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 900,
        "y": 9025,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 950,
        "y": 8850,
        "w": 250,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 1600,
        "y": 8850,
        "w": 150,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9800,
        "y": 7900,
        "w": 200,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9575,
        "y": 7900,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 8000,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 8050,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9700,
        "y": 8100,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 8050,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9700,
        "y": 8000,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 8100,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 8150,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 8150,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9550,
        "y": 8200,
        "w": 250,
        "h": 475,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9800,
        "y": 7150,
        "w": 200,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9550,
        "y": 7450,
        "w": 275,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7400,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9700,
        "y": 7400,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 7350,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 7350,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9700,
        "y": 7300,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7300,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 7250,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 7250,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7150,
        "w": 200,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7350,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9650,
        "y": 7400,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9750,
        "y": 7400,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9700,
        "y": 7350,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9750,
        "y": 7300,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9700,
        "y": 7250,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9650,
        "y": 7300,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7250,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9600,
        "y": 8050,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9650,
        "y": 8100,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9600,
        "y": 8150,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9700,
        "y": 8150,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9750,
        "y": 8100,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9700,
        "y": 8050,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9650,
        "y": 8000,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 9750,
        "y": 8000,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 150,
        "y": 9600,
        "w": 650,
        "h": 150,
        "type": "normal",
        "canJump": false,
        "inView": false
    },
    {
        "x": 1600,
        "y": 9475,
        "w": 150,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": -325,
        "y": 9700,
        "w": 1975,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 0,
        "y": 9450,
        "w": 250,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2025,
        "y": 8850,
        "w": 1875,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 8825,
        "w": 400,
        "h": 775,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 800,
        "y": 9600,
        "w": 650,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1750,
        "y": 9900,
        "w": 2150,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 2850,
        "y": 8050,
        "w": 150,
        "h": 50,
        "type": "tp",
        "tpx": 4000,
        "tpy": 8950,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 2925,
        "y": 8125,
        "w": 150,
        "h": 25,
        "type": "rotate-lava",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 2925,
        "pivotY": 8125,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 76.03453162872775,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 1700,
        "y": 7550,
        "w": 8300,
        "h": 350,
        "type": "trans",
        "collide": false,
        "opaq": 0.24,
        "inView": false
    },
    {
        "x": 1600,
        "y": 8850,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "points": [
            [
                1450,
                8975
            ],
            [
                1500,
                8975
            ],
            [
                1525,
                9025
            ],
            [
                1450,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1525,
            "top": 8975,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1525,
                9225
            ],
            [
                1575,
                9225
            ],
            [
                1600,
                9250
            ],
            [
                1550,
                9275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1525,
            "right": 1600,
            "top": 9225,
            "bottom": 9275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1550,
                9200
            ],
            [
                1600,
                9200
            ],
            [
                1600,
                9250
            ],
            [
                1525,
                9225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1525,
            "right": 1600,
            "top": 9200,
            "bottom": 9250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1450,
                8975
            ],
            [
                1500,
                8975
            ],
            [
                1450,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1500,
            "top": 8975,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1550,
                9200
            ],
            [
                1600,
                9200
            ],
            [
                1600,
                9250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1550,
            "right": 1600,
            "top": 9200,
            "bottom": 9250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1525,
                9025
            ],
            [
                1525,
                9075
            ],
            [
                1450,
                9125
            ],
            [
                1450,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1525,
            "top": 9025,
            "bottom": 9125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1525,
                9025
            ],
            [
                1450,
                9125
            ],
            [
                1450,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1525,
            "top": 9025,
            "bottom": 9125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1600,
                9125
            ],
            [
                1600,
                9200
            ],
            [
                1550,
                9200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1550,
            "right": 1600,
            "top": 9125,
            "bottom": 9200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1450,
                9325
            ],
            [
                1500,
                9450
            ],
            [
                1450,
                9400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1500,
            "top": 9325,
            "bottom": 9450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1450,
                9400
            ],
            [
                1500,
                9450
            ],
            [
                1450,
                9450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1500,
            "top": 9400,
            "bottom": 9450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1450,
                9325
            ],
            [
                1500,
                9400
            ],
            [
                1475,
                9400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1450,
            "right": 1500,
            "top": 9325,
            "bottom": 9400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                1475,
                9400
            ],
            [
                1500,
                9400
            ],
            [
                1500,
                9450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1475,
            "right": 1500,
            "top": 9400,
            "bottom": 9450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 1450,
        "y": 8950,
        "w": 50,
        "h": 25,
        "type": "trans",
        "collide": true,
        "opaq": 0.01,
        "inView": false
    },
    {
        "x": 900,
        "y": 9500,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1000,
        "y": 9500,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 250,
        "y": 9550,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 375,
        "y": 9500,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 250,
        "y": 9450,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 375,
        "y": 9525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 400,
        "y": 9450,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 1775,
        "tpy": 9750,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                1950,
                9600
            ],
            [
                2200,
                9600
            ],
            [
                2150,
                9800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 1950,
            "right": 2200,
            "top": 9600,
            "bottom": 9800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2450,
                9725
            ],
            [
                2450,
                9900
            ],
            [
                2250,
                9900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2250,
            "right": 2450,
            "top": 9725,
            "bottom": 9900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2225,
                9600
            ],
            [
                2375,
                9600
            ],
            [
                2300,
                9675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2225,
            "right": 2375,
            "top": 9600,
            "bottom": 9675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3000,
                9725
            ],
            [
                3200,
                9900
            ],
            [
                2800,
                9900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2800,
            "right": 3200,
            "top": 9725,
            "bottom": 9900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3100,
                9600
            ],
            [
                3400,
                9600
            ],
            [
                3650,
                9850
            ],
            [
                3400,
                9850
            ],
            [
                3350,
                9850
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3100,
            "right": 3650,
            "top": 9600,
            "bottom": 9850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3600,
                9650
            ],
            [
                3900,
                9650
            ],
            [
                3850,
                9900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3600,
            "right": 3900,
            "top": 9650,
            "bottom": 9900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2500,
                9600
            ],
            [
                2700,
                9600
            ],
            [
                2600,
                9700
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2500,
            "right": 2700,
            "top": 9600,
            "bottom": 9700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2600,
                9800
            ],
            [
                2700,
                9900
            ],
            [
                2500,
                9900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2500,
            "right": 2700,
            "top": 9800,
            "bottom": 9900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4100,
        "y": 9050,
        "w": 200,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3900,
        "y": 9800,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    3900,
                    9600
                ],
                [
                    3900,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3900,
                    10000
                ],
                [
                    3900,
                    10100
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
        "x": 4100,
        "y": 9500,
        "w": 100,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 3900,
        "y": 9500,
        "w": 275,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5000,
        "y": 9550,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    5000,
                    9350
                ],
                [
                    5000,
                    9250
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5000,
                    9750
                ],
                [
                    5000,
                    9850
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
        "x": 4400,
        "y": 9800,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    4400,
                    10000
                ],
                [
                    4400,
                    10100
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    4400,
                    9600
                ],
                [
                    4400,
                    9500
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
        "x": 4400,
        "y": 9500,
        "w": 600,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4350,
        "y": 9750,
        "w": 950,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5200,
        "y": 9250,
        "w": 150,
        "h": 525,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4200,
        "y": 9250,
        "w": 1150,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4200,
        "y": 9500,
        "w": 200,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4100,
        "y": 9300,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    4100,
                    9500
                ],
                [
                    4100,
                    9600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    3900,
                    9300
                ],
                [
                    3800,
                    9300
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
        "x": 4100,
        "y": 9300,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5000,
        "y": 9550,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 4400,
        "y": 9800,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                5250,
                9900
            ],
            [
                5250,
                10000
            ],
            [
                4550,
                10000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4550,
            "right": 5250,
            "top": 9900,
            "bottom": 10000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4550,
                9850
            ],
            [
                5250,
                9850
            ],
            [
                4550,
                9950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4550,
            "right": 5250,
            "top": 9850,
            "bottom": 9950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4400,
        "y": 9850,
        "w": 150,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5250,
        "y": 9900,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4450,
                9600
            ],
            [
                4950,
                9600
            ],
            [
                4950,
                9700
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4450,
            "right": 4950,
            "top": 9600,
            "bottom": 9700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4950,
        "y": 9650,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                4100,
                9350
            ],
            [
                5000,
                9350
            ],
            [
                4100,
                9450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4100,
            "right": 5000,
            "top": 9350,
            "bottom": 9450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5000,
                9400
            ],
            [
                5000,
                9500
            ],
            [
                4100,
                9500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4100,
            "right": 5000,
            "top": 9400,
            "bottom": 9500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4100,
                8950
            ],
            [
                4100,
                9200
            ],
            [
                3950,
                9200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3950,
            "right": 4100,
            "top": 8950,
            "bottom": 9200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3950,
        "y": 9200,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                3900,
                9050
            ],
            [
                3975,
                9050
            ],
            [
                3900,
                9200
            ]
        ],
        "type": "poly",
        "most": {
            "left": 3900,
            "right": 3975,
            "top": 9050,
            "bottom": 9200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4450,
                9650
            ],
            [
                4950,
                9750
            ],
            [
                4450,
                9750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4450,
            "right": 4950,
            "top": 9650,
            "bottom": 9750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4400,
        "y": 9650,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5300,
        "y": 9450,
        "w": 550,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4300,
        "y": 10000,
        "w": 1050,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4400,
        "y": 9800,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 5000,
        "y": 9550,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4100,
        "y": 9325,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 4100,
        "y": 8950,
        "w": 1250,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5032.92499999996,
        "y": 8900,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4900,
                8850
            ],
            [
                5050,
                8850
            ],
            [
                5050,
                8900
            ],
            [
                4900,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 5050,
            "y": 8900
        },
        "pointTo": {
            "x": 4900,
            "y": 8900
        },
        "xv": -369,
        "yv": 4.518946688853733e-14,
        "inView": false
    },
    {
        "x": 4917.07500000004,
        "y": 8850,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                4900,
                8850
            ],
            [
                5050,
                8850
            ],
            [
                5050,
                8900
            ],
            [
                4900,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 4900,
            "y": 8850
        },
        "pointTo": {
            "x": 5050,
            "y": 8850
        },
        "xv": 369,
        "yv": 0,
        "inView": false
    },
    {
        "points": [
            [
                4150,
                8900
            ],
            [
                4200,
                8950
            ],
            [
                4100,
                8950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4100,
            "right": 4200,
            "top": 8900,
            "bottom": 8950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4225,
                8850
            ],
            [
                4325,
                8850
            ],
            [
                4275,
                8900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4225,
            "right": 4325,
            "top": 8850,
            "bottom": 8900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4475,
                8850
            ],
            [
                4525,
                8850
            ],
            [
                4500,
                8875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4475,
            "right": 4525,
            "top": 8850,
            "bottom": 8875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4400,
                8925
            ],
            [
                4425,
                8950
            ],
            [
                4375,
                8950
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 4375,
            "right": 4425,
            "top": 8925,
            "bottom": 8950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5300,
                8900
            ],
            [
                5350,
                8950
            ],
            [
                5150,
                8950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5150,
            "right": 5350,
            "top": 8900,
            "bottom": 8950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5300,
                8850
            ],
            [
                5450,
                8850
            ],
            [
                5600,
                8900
            ],
            [
                5450,
                8900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5300,
            "right": 5600,
            "top": 8850,
            "bottom": 8900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 4832.92499999996,
        "y": 8900,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                4700,
                8850
            ],
            [
                4850,
                8850
            ],
            [
                4850,
                8900
            ],
            [
                4700,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 2,
        "alongWith": false,
        "pointOn": {
            "x": 4850,
            "y": 8900
        },
        "pointTo": {
            "x": 4700,
            "y": 8900
        },
        "xv": -369,
        "yv": 4.518946688853733e-14,
        "inView": false
    },
    {
        "x": 4717.07500000004,
        "y": 8850,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                4700,
                8850
            ],
            [
                4850,
                8850
            ],
            [
                4850,
                8900
            ],
            [
                4700,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 4700,
            "y": 8850
        },
        "pointTo": {
            "x": 4850,
            "y": 8850
        },
        "xv": 369,
        "yv": 0,
        "inView": false
    },
    {
        "x": 5400,
        "y": 8781.700000000044,
        "w": 100,
        "h": 100,
        "type": "lavamove",
        "points": [
            [
                5100,
                8750
            ],
            [
                5100,
                8850
            ],
            [
                5400,
                8850
            ],
            [
                5400,
                8750
            ]
        ],
        "speed": 1476,
        "currentPoint": 2,
        "collidable": true,
        "pointOn": {
            "x": 5400,
            "y": 8850
        },
        "pointTo": {
            "x": 5400,
            "y": 8750
        },
        "xv": 9.037893377707467e-14,
        "yv": -1476,
        "inView": false
    },
    {
        "x": 5950,
        "y": 9200,
        "w": 250,
        "h": 800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5975,
        "y": 8850,
        "w": 225,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                5350,
                8950
            ],
            [
                5500,
                8950
            ],
            [
                5500,
                8975
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5350,
            "right": 5500,
            "top": 8950,
            "bottom": 8975
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5500,
                8975
            ],
            [
                5650,
                9025
            ],
            [
                5650,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5500,
            "right": 5650,
            "top": 8975,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5650,
                9050
            ],
            [
                5750,
                9125
            ],
            [
                5750,
                9150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5650,
            "right": 5750,
            "top": 9050,
            "bottom": 9150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5752,
                9150
            ],
            [
                5825,
                9250
            ],
            [
                5813,
                9263
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5752,
            "right": 5825,
            "top": 9150,
            "bottom": 9263
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5816,
                9264
            ],
            [
                5869,
                9388
            ],
            [
                5846,
                9393
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5816,
            "right": 5869,
            "top": 9264,
            "bottom": 9393
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                9400
            ],
            [
                5875,
                9525
            ],
            [
                5850,
                9525
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5875,
            "top": 9400,
            "bottom": 9525
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                9525
            ],
            [
                5875,
                9650
            ],
            [
                5850,
                9650
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5875,
            "top": 9525,
            "bottom": 9650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                9800
            ],
            [
                5875,
                9950
            ],
            [
                5850,
                9950
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5875,
            "top": 9800,
            "bottom": 9950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                9650
            ],
            [
                5875,
                9800
            ],
            [
                5850,
                9800
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5875,
            "top": 9650,
            "bottom": 9800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5850,
        "y": 9950,
        "w": 100,
        "h": 50,
        "type": "bounce",
        "effect": 1600,
        "inView": false
    },
    {
        "x": 5800,
        "y": 8850,
        "w": 175,
        "h": 175,
        "type": "tp",
        "tpx": 6225,
        "tpy": 9175,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                5525,
                8850
            ],
            [
                5800,
                8850
            ],
            [
                5800,
                8900
            ],
            [
                5800,
                9025
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5525,
            "right": 5800,
            "top": 8850,
            "bottom": 9025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5800,
                9025
            ],
            [
                6125,
                9025
            ],
            [
                6125,
                9275
            ],
            [
                5950,
                9275
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5800,
            "right": 6125,
            "top": 9025,
            "bottom": 9275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6175,
        "y": 8800,
        "w": 275,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 9350,
        "w": 950,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6350,
        "y": 8850,
        "w": 800,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6175,
        "y": 8825,
        "w": 175,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 8950,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6175,
        "y": 9300,
        "w": 275,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                6450,
                9000
            ],
            [
                6500,
                9000
            ],
            [
                6450,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6450,
            "right": 6500,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6450,
                9300
            ],
            [
                6500,
                9350
            ],
            [
                6450,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6450,
            "right": 6500,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7100,
                9000
            ],
            [
                7150,
                9000
            ],
            [
                7150,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7100,
            "right": 7150,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                9300
            ],
            [
                6600,
                9350
            ],
            [
                6500,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6500,
            "right": 6600,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6650,
                9300
            ],
            [
                6700,
                9350
            ],
            [
                6600,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6600,
            "right": 6700,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6750,
                9300
            ],
            [
                6800,
                9350
            ],
            [
                6700,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6700,
            "right": 6800,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6850,
                9300
            ],
            [
                6900,
                9350
            ],
            [
                6800,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6800,
            "right": 6900,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6950,
                9300
            ],
            [
                7000,
                9350
            ],
            [
                6900,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6900,
            "right": 7000,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                9300
            ],
            [
                7100,
                9350
            ],
            [
                7000,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7000,
            "right": 7100,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                9300
            ],
            [
                7150,
                9350
            ],
            [
                7100,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7100,
            "right": 7150,
            "top": 9300,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7000,
                9000
            ],
            [
                7100,
                9000
            ],
            [
                7050,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7000,
            "right": 7100,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6900,
                9000
            ],
            [
                7000,
                9000
            ],
            [
                6950,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6900,
            "right": 7000,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6800,
                9000
            ],
            [
                6900,
                9000
            ],
            [
                6850,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6800,
            "right": 6900,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6700,
                9000
            ],
            [
                6800,
                9000
            ],
            [
                6750,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6700,
            "right": 6800,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                9000
            ],
            [
                6700,
                9000
            ],
            [
                6650,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6600,
            "right": 6700,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                9000
            ],
            [
                6600,
                9000
            ],
            [
                6550,
                9050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6500,
            "right": 6600,
            "top": 9000,
            "bottom": 9050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7150,
        "y": 8850,
        "w": 600,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7475,
        "y": 9050,
        "w": 175,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7400,
        "y": 9000,
        "w": 100,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7750,
        "y": 9200,
        "w": 100,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 9500,
        "w": 900,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7100,
        "y": 9800,
        "w": 750,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6625,
        "y": 9025,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 6625,
            "y": 9025,
            "w": 400,
            "h": 25,
            "pivotX": 6825,
            "pivotY": 9037.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 6625,
        "y": 9325,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 6625,
            "y": 9325,
            "w": 400,
            "h": 25,
            "pivotX": 6825,
            "pivotY": 9337.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 6825,
        "y": 9325,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 6825,
            "y": 9325,
            "w": 400,
            "h": 25,
            "pivotX": 7025,
            "pivotY": 9337.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 7125,
        "y": 9325,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 7125,
            "y": 9325,
            "w": 400,
            "h": 25,
            "pivotX": 7325,
            "pivotY": 9337.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 6825,
        "y": 9025,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 6825,
            "y": 9025,
            "w": 400,
            "h": 25,
            "pivotX": 7025,
            "pivotY": 9037.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 7025,
        "y": 9025,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 7025,
            "y": 9025,
            "w": 400,
            "h": 25,
            "pivotX": 7225,
            "pivotY": 9037.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                6200,
                9200
            ],
            [
                6450,
                9300
            ],
            [
                6200,
                9300
            ]
        ],
        "type": "poly",
        "most": {
            "left": 6200,
            "right": 6450,
            "top": 9200,
            "bottom": 9300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6200,
                9050
            ],
            [
                6450,
                9050
            ],
            [
                6200,
                9150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 6200,
            "right": 6450,
            "top": 9050,
            "bottom": 9150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7250.833333333115,
        "y": 9375,
        "w": 100,
        "h": 25,
        "type": "move",
        "points": [
            [
                7250,
                9375
            ],
            [
                7400,
                9375
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7250,
            "y": 9375
        },
        "pointTo": {
            "x": 7400,
            "y": 9375
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7750,
        "y": 8825,
        "w": 250,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7950,
        "y": 9025,
        "w": 50,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7925,
        "y": 9050,
        "w": 25,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 9225,
        "w": 200,
        "h": 375,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7925,
        "y": 9200,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7750,
        "y": 9225,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7700,
        "y": 9325,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    7700,
                    9275
                ],
                [
                    7700,
                    9225
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7750,
                    9325
                ],
                [
                    7800,
                    9325
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
        "x": 7700,
        "y": 9225,
        "w": 75,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7700,
        "y": 9300,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    7700,
                    9350
                ],
                [
                    7700,
                    9400
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7650,
                    9300
                ],
                [
                    7600,
                    9300
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
        "x": 7650,
        "y": 9025,
        "w": 25,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7900,
        "y": 9150,
        "r": 50,
        "tpx": 8100,
        "tpy": 8875,
        "type": "circle-tp",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 7700,
        "y": 9225,
        "w": 200,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7775,
        "y": 9250,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7800,
        "y": 9200,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": 0.7853981633974483,
        "startPolygon": {
            "points": [
                [
                    7650,
                    9200
                ],
                [
                    7600,
                    9200
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7906.066017177982,
                    9306.066017177982
                ],
                [
                    7941.42135623731,
                    9341.42135623731
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
        "x": 7800,
        "y": 9075,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7950,
                    9075
                ],
                [
                    8000,
                    9075
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7800,
                    9225
                ],
                [
                    7800,
                    9275
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
        "x": 950,
        "y": 9500,
        "w": 75,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 850,
        "y": 9550,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 850,
        "y": 9550,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    800,
                    9550
                ],
                [
                    750,
                    9550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    850,
                    9500
                ],
                [
                    850,
                    9450
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
        "x": 800,
        "y": 9550,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    850,
                    9550
                ],
                [
                    900,
                    9550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    800,
                    9600
                ],
                [
                    800,
                    9650
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
        "x": 750,
        "y": 9550,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    750,
                    9600
                ],
                [
                    750,
                    9650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    700,
                    9550
                ],
                [
                    650,
                    9550
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
        "x": 650,
        "y": 9525,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 550,
        "y": 9525,
        "w": 125,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 675,
        "y": 9525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 550,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    500,
                    9500
                ],
                [
                    450,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    550,
                    9450
                ],
                [
                    550,
                    9400
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
        "x": 450,
        "y": 9425,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 575,
        "y": 9525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 575,
        "y": 9500,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 750,
        "y": 9450,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 750,
        "y": 9475,
        "w": 25,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 500,
        "y": 9550,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    550,
                    9550
                ],
                [
                    600,
                    9550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    500,
                    9600
                ],
                [
                    500,
                    9650
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
        "x": 1325,
        "y": 9550,
        "radius": 75,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1325,
                    9600
                ],
                [
                    1325,
                    9625
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1325,
                    9500
                ],
                [
                    1325,
                    9475
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
        "x": 1150,
        "y": 9450,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1375,
        "y": 9475,
        "radius": 75,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1375,
                    9425
                ],
                [
                    1375,
                    9400
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1375,
                    9525
                ],
                [
                    1375,
                    9550
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
        "x": 1425,
        "y": 9450,
        "w": 25,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1250,
        "y": 9550,
        "w": 25,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1250,
        "y": 9475,
        "w": 25,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1275,
        "y": 9475,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 9550,
        "radius": 75,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    1250,
                    9550
                ],
                [
                    1275,
                    9550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1200,
                    9600
                ],
                [
                    1200,
                    9625
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
        "x": 1375,
        "y": 9525,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1300,
        "y": 9350,
        "w": 150,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1425,
        "y": 9425,
        "w": 25,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1200,
        "y": 9350,
        "w": 225,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1325,
        "y": 9550,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1325,
        "y": 9475,
        "w": 75,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1050,
        "y": 9500,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    1050,
                    9450
                ],
                [
                    1050,
                    9400
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1100,
                    9500
                ],
                [
                    1150,
                    9500
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
        "x": 1100,
        "y": 9425,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1125,
        "y": 9525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1125,
        "y": 9525,
        "w": 50,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1175,
        "y": 9525,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 1100,
        "y": 9550,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    1100,
                    9600
                ],
                [
                    1100,
                    9650
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    1050,
                    9550
                ],
                [
                    1000,
                    9550
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
        "x": 1325,
        "y": 9525,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 4617.07500000004,
        "y": 8850,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                4600,
                8850
            ],
            [
                4750,
                8850
            ],
            [
                4750,
                8900
            ],
            [
                4600,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 4600,
            "y": 8850
        },
        "pointTo": {
            "x": 4750,
            "y": 8850
        },
        "xv": 369,
        "yv": 0,
        "inView": false
    },
    {
        "x": 4732.92499999996,
        "y": 8900,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                4600,
                8850
            ],
            [
                4750,
                8850
            ],
            [
                4750,
                8900
            ],
            [
                4600,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 2,
        "alongWith": false,
        "pointOn": {
            "x": 4750,
            "y": 8900
        },
        "pointTo": {
            "x": 4600,
            "y": 8900
        },
        "xv": -369,
        "yv": 4.518946688853733e-14,
        "inView": false
    },
    {
        "x": 4600,
        "y": 8817.075000000525,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                4600,
                8800
            ],
            [
                4600,
                8900
            ]
        ],
        "speed": 369,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 4600,
            "y": 8800
        },
        "pointTo": {
            "x": 4600,
            "y": 8900
        },
        "xv": 2.2594733444268666e-14,
        "yv": 369,
        "inView": false
    },
    {
        "x": 7200.833333333115,
        "y": 9550,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7200,
                9550
            ],
            [
                7350,
                9550
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7200,
            "y": 9550
        },
        "pointTo": {
            "x": 7350,
            "y": 9550
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7450,
        "y": 9350,
        "w": 250,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7150.833333333115,
        "y": 9350,
        "w": 100,
        "h": 50,
        "type": "move",
        "points": [
            [
                7150,
                9350
            ],
            [
                7300,
                9350
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 7150,
            "y": 9350
        },
        "pointTo": {
            "x": 7300,
            "y": 9350
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7250.833333333115,
        "y": 9350,
        "w": 100,
        "h": 25,
        "type": "tpmove",
        "points": [
            [
                7250,
                9350
            ],
            [
                7400,
                9350
            ]
        ],
        "speed": 100,
        "currentPoint": 0,
        "tpx": 7500,
        "tpy": 9425,
        "pointOn": {
            "x": 7250,
            "y": 9350
        },
        "pointTo": {
            "x": 7400,
            "y": 9350
        },
        "xv": 100,
        "yv": 0,
        "inView": false
    },
    {
        "x": 225,
        "y": 9475,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                2750,
                9700
            ],
            [
                2800,
                9750
            ],
            [
                2750,
                9800
            ],
            [
                2700,
                9750
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2700,
            "right": 2800,
            "top": 9700,
            "bottom": 9800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2850,
                9600
            ],
            [
                2950,
                9600
            ],
            [
                2900,
                9650
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2850,
            "right": 2950,
            "top": 9600,
            "bottom": 9650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2000,
                9625
            ],
            [
                2175,
                9625
            ],
            [
                2125,
                9725
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2000,
            "right": 2175,
            "top": 9625,
            "bottom": 9725
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2425,
                9775
            ],
            [
                2425,
                9875
            ],
            [
                2300,
                9875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2300,
            "right": 2425,
            "top": 9775,
            "bottom": 9875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2550,
                9625
            ],
            [
                2650,
                9625
            ],
            [
                2600,
                9675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2550,
            "right": 2650,
            "top": 9625,
            "bottom": 9675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2600,
                9825
            ],
            [
                2650,
                9875
            ],
            [
                2550,
                9875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2550,
            "right": 2650,
            "top": 9825,
            "bottom": 9875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2750,
                9725
            ],
            [
                2775,
                9750
            ],
            [
                2750,
                9775
            ],
            [
                2725,
                9750
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2725,
            "right": 2775,
            "top": 9725,
            "bottom": 9775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3000,
                9750
            ],
            [
                3150,
                9875
            ],
            [
                2850,
                9875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2850,
            "right": 3150,
            "top": 9750,
            "bottom": 9875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3150,
                9625
            ],
            [
                3400,
                9625
            ],
            [
                3600,
                9825
            ],
            [
                3350,
                9825
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3150,
            "right": 3600,
            "top": 9625,
            "bottom": 9825
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                3650,
                9675
            ],
            [
                3825,
                9675
            ],
            [
                3775,
                9775
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 3650,
            "right": 3825,
            "top": 9675,
            "bottom": 9775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 3900,
        "y": 9800,
        "r": 150,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 150,
        "inView": false
    },
    {
        "x": 3900,
        "y": 9800,
        "r": 125,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 125,
        "inView": false
    },
    {
        "points": [
            [
                2275,
                9625
            ],
            [
                2325,
                9625
            ],
            [
                2300,
                9650
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2275,
            "right": 2325,
            "top": 9625,
            "bottom": 9650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                4600,
                8900
            ],
            [
                4650,
                8950
            ],
            [
                4550,
                8950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 4550,
            "right": 4650,
            "top": 8900,
            "bottom": 8950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                2875,
                9600
            ],
            [
                2925,
                9600
            ],
            [
                2900,
                9625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 2875,
            "right": 2925,
            "top": 9600,
            "bottom": 9625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7800,
        "y": 9200,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7800,
        "y": 9225,
        "type": "grapplepoint",
        "renderType": "grapple",
        "inView": false
    },
    {
        "x": 7700,
        "y": 9200,
        "w": 25,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 1350,
        "y": 7600,
        "w": 50,
        "h": 50,
        "type": "size",
        "size": 12,
        "inView": false
    },
    {
        "x": 8200,
        "y": 8850,
        "w": 200,
        "h": 750,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8000,
        "y": 8850,
        "w": 200,
        "h": 750,
        "type": "raxis",
        "rx": false,
        "ry": true,
        "inView": false
    },
    {
        "x": 8000,
        "y": 8850,
        "w": 200,
        "h": 750,
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
        "points": [
            [
                8000,
                8950
            ],
            [
                8100,
                9050
            ],
            [
                8000,
                9150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8000,
            "right": 8100,
            "top": 8950,
            "bottom": 9150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8200,
                9150
            ],
            [
                8200,
                9350
            ],
            [
                8100,
                9350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8100,
            "right": 8200,
            "top": 9150,
            "bottom": 9350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8000,
                9400
            ],
            [
                8050,
                9600
            ],
            [
                8000,
                9600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8000,
            "right": 8050,
            "top": 9400,
            "bottom": 9600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8200,
                9400
            ],
            [
                8200,
                9575
            ],
            [
                8150,
                9600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8150,
            "right": 8200,
            "top": 9400,
            "bottom": 9600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7850,
        "y": 9600,
        "w": 150,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7950,
        "y": 9700,
        "w": 300,
        "h": 300,
        "spawn": {
            "x": 8100,
            "y": 9850
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 7825,
        "y": 9675,
        "w": 125,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5175,
        "y": -100,
        "w": 5025,
        "h": 5100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9900,
        "y": 7050,
        "w": 100,
        "h": 100,
        "type": "winpad",
        "inView": false
    },
    {
        "x": 9850,
        "y": 10000,
        "w": 175,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 10000,
        "y": 8875,
        "w": 175,
        "h": 1225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8000,
        "y": 9600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8150,
        "y": 9600,
        "w": 50,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8200,
        "y": 9600,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8175,
        "y": 9575,
        "r": 35,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8175,
            "y": 9575,
            "w": 200,
            "h": 25,
            "pivotX": 8275,
            "pivotY": 9587.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 8250,
        "y": 9600,
        "w": 150,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8550,
        "y": 9800,
        "r": 25,
        "angle": -40,
        "type": "circle-sentry",
        "speed": 380,
        "laser": {
            "x": 8550,
            "y": 9800,
            "w": 400,
            "h": 25,
            "pivotX": 8750,
            "pivotY": 9812.5,
            "distToPivot": 0
        },
        "rest": -40,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8025,
        "y": 9575,
        "r": 35,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8025,
            "y": 9575,
            "w": 200,
            "h": 25,
            "pivotX": 8125,
            "pivotY": 9587.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 35,
        "inView": false
    },
    {
        "x": 8550,
        "y": 9500,
        "r": 25,
        "angle": -320,
        "type": "circle-sentry",
        "speed": 520,
        "laser": {
            "x": 8550,
            "y": 9500,
            "w": 300,
            "h": 25,
            "pivotX": 8700,
            "pivotY": 9512.5,
            "distToPivot": 0
        },
        "rest": 40,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8550,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8550,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 8750,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8600,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8600,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 8800,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8650,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8650,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 8850,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8700,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8700,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 8900,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8750,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8750,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 8950,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8800,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8800,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 9000,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8850,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8850,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 9050,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8900,
        "y": 9275,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8900,
            "y": 9275,
            "w": 400,
            "h": 25,
            "pivotX": 9100,
            "pivotY": 9287.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9000,
        "y": 9900,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9150,
        "y": 9800,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                9145,
                9740
            ],
            [
                9215,
                9805
            ],
            [
                9150,
                9800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9145,
            "right": 9215,
            "top": 9740,
            "bottom": 9805
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9575,
        "y": 9875,
        "radius": 275,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9575,
                    9750
                ],
                [
                    9575,
                    9600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9575,
                    10000
                ],
                [
                    9575,
                    10150
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
        "x": 9250,
        "y": 9800,
        "w": 325,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9875,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9150,
        "y": 9200,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 9555,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8900,
            "y": 9555,
            "w": 398,
            "h": 25,
            "pivotX": 9099,
            "pivotY": 9567.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8900,
        "y": 9750,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8900,
            "y": 9750,
            "w": 398,
            "h": 25,
            "pivotX": 9099,
            "pivotY": 9762.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                9200,
                9650
            ],
            [
                9200,
                9950
            ],
            [
                8950,
                9900
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8950,
            "right": 9200,
            "top": 9650,
            "bottom": 9950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9000,
        "y": 9900,
        "radius": 50,
        "type": "circle-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    9000,
                    9900
                ],
                [
                    9000,
                    9950
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9000,
                    9900
                ],
                [
                    8950,
                    9900
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9575,
        "y": 9675,
        "radius": 175,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9575,
                    9800
                ],
                [
                    9575,
                    9850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9575,
                    9550
                ],
                [
                    9575,
                    9500
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
        "x": 9575,
        "y": 9675,
        "radius": 75,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9375,
        "y": 9700,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9300,
        "y": 9200,
        "w": 125,
        "h": 650,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9425,
        "y": 9450,
        "w": 225,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9400,
        "y": 9500,
        "w": 50,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9425,
        "y": 9525,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9875,
        "radius": 375,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    9575,
                    9550
                ],
                [
                    9575,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9900,
                    9875
                ],
                [
                    9950,
                    9875
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 325,
        "toRotate": false,
        "rotateSpeed": 0,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9650,
        "y": 9450,
        "w": 200,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9775,
        "y": 9525,
        "w": 125,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9825,
        "y": 9600,
        "w": 75,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 9525,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9925,
        "y": 9875,
        "radius": 150,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    10000,
                    9875
                ],
                [
                    10075,
                    9875
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9850,
                    9875
                ],
                [
                    9775,
                    9875
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
        "x": 9800,
        "y": 9975,
        "w": 100,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9925,
        "y": 9875,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9900,
        "y": 9550,
        "w": 50,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9850,
        "y": 9600,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9850,
        "y": 9550,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8325,
        "y": 9200,
        "w": 75,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8900,
                9350
            ],
            [
                9200,
                9350
            ],
            [
                9200,
                9650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8900,
            "right": 9200,
            "top": 9350,
            "bottom": 9650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9200,
        "y": 9200,
        "w": 100,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9900,
        "y": 9500,
        "radius": 150,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    9900,
                    9400
                ],
                [
                    9900,
                    9350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    10000,
                    9500
                ],
                [
                    10050,
                    9500
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
        "x": 9500,
        "y": 9375,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9500,
                    9450
                ],
                [
                    9500,
                    9500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9500,
                    9300
                ],
                [
                    9500,
                    9250
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
        "x": 9500,
        "y": 9350,
        "w": 550,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9500,
        "y": 9375,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9425,
        "y": 9200,
        "w": 225,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9800,
        "y": 9200,
        "w": 200,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9025,
        "radius": 125,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9875,
        "y": 9025,
        "radius": 125,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9425,
        "y": 8850,
        "w": 225,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9800,
        "y": 8850,
        "w": 275,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9200,
        "y": 10075,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9200,
            "y": 10075,
            "w": 400,
            "h": 25,
            "pivotX": 9400,
            "pivotY": 10087.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9400,
        "y": 10075,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9400,
            "y": 10075,
            "w": 400,
            "h": 25,
            "pivotX": 9600,
            "pivotY": 10087.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9175,
        "y": 9500,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 380,
        "laser": {
            "x": 9175,
            "y": 9500,
            "w": 400,
            "h": 25,
            "pivotX": 9375,
            "pivotY": 9512.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9175,
        "y": 9775,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 380,
        "laser": {
            "x": 9175,
            "y": 9775,
            "w": 400,
            "h": 25,
            "pivotX": 9375,
            "pivotY": 9787.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9675,
        "y": 9275,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9750,
                    9275
                ],
                [
                    9800,
                    9275
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9675,
                    9350
                ],
                [
                    9675,
                    9400
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
        "x": 9750,
        "y": 9025,
        "w": 275,
        "h": 325,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9625,
        "y": 9025,
        "w": 75,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 9250,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9325,
        "y": 9650,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 380,
        "laser": {
            "x": 9325,
            "y": 9650,
            "w": 400,
            "h": 25,
            "pivotX": 9525,
            "pivotY": 9662.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9200,
        "y": 9900,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9200,
            "y": 9900,
            "w": 400,
            "h": 25,
            "pivotX": 9400,
            "pivotY": 9912.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9400,
        "y": 9900,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9400,
            "y": 9900,
            "w": 400,
            "h": 25,
            "pivotX": 9600,
            "pivotY": 9912.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9600,
        "y": 9875,
        "r": 25,
        "angle": -30,
        "type": "circle-sentry",
        "speed": 830,
        "laser": {
            "x": 9600,
            "y": 9875,
            "w": 200,
            "h": 25,
            "pivotX": 9700,
            "pivotY": 9887.5,
            "distToPivot": 0
        },
        "rest": -30,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9675,
        "r": 25,
        "angle": -330,
        "type": "circle-sentry",
        "speed": 650,
        "laser": {
            "x": 9575,
            "y": 9675,
            "w": 250,
            "h": 25,
            "pivotX": 9700,
            "pivotY": 9687.5,
            "distToPivot": 0
        },
        "rest": 30,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9500,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9575,
            "y": 9500,
            "w": 400,
            "h": 25,
            "pivotX": 9775,
            "pivotY": 9512.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9750,
        "y": 9525,
        "r": 25,
        "angle": -340,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9750,
            "y": 9525,
            "w": 300,
            "h": 25,
            "pivotX": 9900,
            "pivotY": 9537.5,
            "distToPivot": 0
        },
        "rest": 20,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9825,
        "y": 9575,
        "r": 25,
        "angle": -320,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9825,
            "y": 9575,
            "w": 300,
            "h": 25,
            "pivotX": 9975,
            "pivotY": 9587.5,
            "distToPivot": 0
        },
        "rest": 40,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9925,
        "y": 10075,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 480,
        "laser": {
            "x": 9925,
            "y": 10075,
            "w": 400,
            "h": 25,
            "pivotX": 10125,
            "pivotY": 10087.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9550,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9550,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9562.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9750,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9750,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9762.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9700,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9700,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9712.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9650,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9650,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9662.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9600,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9600,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9612.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9800,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9800,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9812.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 9850,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10100,
            "y": 9850,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 9862.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10025,
        "y": 9375,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 10025,
            "y": 9375,
            "w": 400,
            "h": 25,
            "pivotX": 10225,
            "pivotY": 9387.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9475,
        "y": 9225,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 150,
        "laser": {
            "x": 9475,
            "y": 9225,
            "w": 400,
            "h": 25,
            "pivotX": 9675,
            "pivotY": 9237.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9375,
        "y": 9375,
        "r": 25,
        "angle": -275.17699835307866,
        "type": "circle-sentry",
        "speed": 180,
        "laser": {
            "x": 9375,
            "y": 9375,
            "w": 400,
            "h": 25,
            "pivotX": 9575,
            "pivotY": 9387.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9875,
        "y": 9100,
        "r": 25,
        "angle": -79.99999999999994,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9875,
            "y": 9100,
            "w": 400,
            "h": 33,
            "pivotX": 10075,
            "pivotY": 9116.5,
            "distToPivot": 0
        },
        "rest": 100,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9575,
        "y": 9100,
        "r": 25,
        "angle": -280,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9575,
            "y": 9100,
            "w": 400,
            "h": 33,
            "pivotX": 9775,
            "pivotY": 9116.5,
            "distToPivot": 0
        },
        "rest": 80,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9725,
        "y": 8850,
        "r": 75,
        "tpx": 5325,
        "tpy": 7125,
        "type": "circle-tp",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 9625,
        "y": 8750,
        "w": 200,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5400,
        "y": 7000,
        "radius": 200,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    5300,
                    7000
                ],
                [
                    5200,
                    7000
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5500,
                    7000
                ],
                [
                    5600,
                    7000
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
        "x": 5350,
        "y": 7000,
        "w": 100,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5400,
        "y": 7000,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5550,
        "y": 7050,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5500,
        "y": 7000,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5650,
        "y": 5350,
        "w": 100,
        "h": 1800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5400,
        "y": 7000,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    5400,
                    6750
                ],
                [
                    5400,
                    6700
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5650,
                    7000
                ],
                [
                    5700,
                    7000
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
        "x": 5300,
        "y": 6800,
        "w": 100,
        "h": 25,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5400,
        "y": 6750,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    5400,
                    6800
                ],
                [
                    5400,
                    6850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    5350,
                    6750
                ],
                [
                    5300,
                    6750
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
        "x": 5275,
        "y": 6650,
        "w": 75,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5400,
        "y": 6650,
        "w": 250,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5550,
        "y": 6750,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5625,
        "y": 6775,
        "w": 50,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                5300,
                6600
            ],
            [
                5350,
                6650
            ],
            [
                5300,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5300,
            "right": 5350,
            "top": 6600,
            "bottom": 6650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5450,
                6600
            ],
            [
                5650,
                6650
            ],
            [
                5400,
                6650
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5400,
            "right": 5650,
            "top": 6600,
            "bottom": 6650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5450,
        "y": 6600,
        "w": 200,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5300,
        "y": 5000,
        "w": 350,
        "h": 350,
        "spawn": {
            "x": 5475,
            "y": 5175
        },
        "type": "check",
        "collected": false,
        "inView": false
    },
    {
        "x": 5750,
        "y": 5350,
        "w": 625,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5750,
        "y": 5300,
        "w": 525,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6275,
        "y": 5125,
        "w": 125,
        "h": 475,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5975,
        "y": 5150,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5800,
        "y": 5150,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6150,
        "y": 5150,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 5862.5,
        "y": 5125,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 6037.5,
        "y": 5125,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 6212.5,
        "y": 5125,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 6275,
        "y": 5000,
        "w": 125,
        "h": 125,
        "type": "coindoor",
        "coins": 3,
        "currentCoins": 3,
        "inView": false
    },
    {
        "points": [
            [
                5600,
                6350
            ],
            [
                5650,
                6400
            ],
            [
                5600,
                6450
            ],
            [
                5550,
                6400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5550,
            "right": 5650,
            "top": 6350,
            "bottom": 6450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5350,
                6000
            ],
            [
                5400,
                6050
            ],
            [
                5350,
                6100
            ],
            [
                5300,
                6050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5300,
            "right": 5400,
            "top": 6000,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                5600
            ],
            [
                5550,
                5675
            ],
            [
                5475,
                5750
            ],
            [
                5400,
                5675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5550,
            "top": 5600,
            "bottom": 5750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5425,
                6025
            ],
            [
                5450,
                6050
            ],
            [
                5425,
                6075
            ],
            [
                5400,
                6050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5450,
            "top": 6025,
            "bottom": 6075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                6025
            ],
            [
                5500,
                6050
            ],
            [
                5475,
                6075
            ],
            [
                5450,
                6050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5450,
            "right": 5500,
            "top": 6025,
            "bottom": 6075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5525,
                6025
            ],
            [
                5550,
                6050
            ],
            [
                5525,
                6075
            ],
            [
                5500,
                6050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5500,
            "right": 5550,
            "top": 6025,
            "bottom": 6075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5525,
                6375
            ],
            [
                5550,
                6400
            ],
            [
                5525,
                6425
            ],
            [
                5500,
                6400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5500,
            "right": 5550,
            "top": 6375,
            "bottom": 6425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                6375
            ],
            [
                5500,
                6400
            ],
            [
                5475,
                6425
            ],
            [
                5450,
                6400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5450,
            "right": 5500,
            "top": 6375,
            "bottom": 6425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5425,
                6375
            ],
            [
                5450,
                6400
            ],
            [
                5425,
                6425
            ],
            [
                5400,
                6400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5450,
            "top": 6375,
            "bottom": 6425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5375,
                5650
            ],
            [
                5400,
                5675
            ],
            [
                5375,
                5700
            ],
            [
                5350,
                5675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5350,
            "right": 5400,
            "top": 5650,
            "bottom": 5700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5425,
                5600
            ],
            [
                5450,
                5625
            ],
            [
                5425,
                5650
            ],
            [
                5400,
                5625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5450,
            "top": 5600,
            "bottom": 5650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                5550
            ],
            [
                5500,
                5575
            ],
            [
                5475,
                5600
            ],
            [
                5450,
                5575
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5450,
            "right": 5500,
            "top": 5550,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5525,
                5600
            ],
            [
                5550,
                5625
            ],
            [
                5525,
                5650
            ],
            [
                5500,
                5625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5500,
            "right": 5550,
            "top": 5600,
            "bottom": 5650
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5575,
                5650
            ],
            [
                5600,
                5675
            ],
            [
                5575,
                5700
            ],
            [
                5550,
                5675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5550,
            "right": 5600,
            "top": 5650,
            "bottom": 5700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5525,
                5700
            ],
            [
                5550,
                5725
            ],
            [
                5525,
                5750
            ],
            [
                5500,
                5725
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5500,
            "right": 5550,
            "top": 5700,
            "bottom": 5750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5475,
                5750
            ],
            [
                5500,
                5775
            ],
            [
                5475,
                5800
            ],
            [
                5450,
                5775
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5450,
            "right": 5500,
            "top": 5750,
            "bottom": 5800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5425,
                5700
            ],
            [
                5450,
                5725
            ],
            [
                5425,
                5750
            ],
            [
                5400,
                5725
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5400,
            "right": 5450,
            "top": 5700,
            "bottom": 5750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5300,
        "y": 6350,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 3,
        "currentCoins": 3,
        "inView": false
    },
    {
        "x": 5350,
        "y": 6500,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5450,
        "y": 6500,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5550,
        "y": 6500,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5375,
        "y": 6275,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5450,
        "y": 6200,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5525,
        "y": 6125,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5450,
        "y": 5875,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5450,
        "y": 5500,
        "w": 50,
        "h": 50,
        "type": "coin",
        "collected": false,
        "inView": false
    },
    {
        "x": 5550,
        "y": 6000,
        "w": 100,
        "h": 100,
        "type": "coindoor",
        "coins": 6,
        "currentCoins": 6,
        "inView": false
    },
    {
        "x": 5250,
        "y": 5350,
        "w": 150,
        "h": 150,
        "type": "coindoor",
        "coins": 8,
        "currentCoins": 8,
        "inView": false
    },
    {
        "x": 5550,
        "y": 5350,
        "w": 150,
        "h": 150,
        "type": "coindoor",
        "coins": 8,
        "currentCoins": 8,
        "inView": false
    },
    {
        "x": 5400,
        "y": 5350,
        "w": 150,
        "h": 150,
        "type": "coindoor",
        "coins": 8,
        "currentCoins": 8,
        "inView": false
    },
    {
        "x": 5225,
        "y": 5325,
        "w": 75,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5650,
        "y": 5350,
        "w": 125,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5300,
        "y": 7100,
        "w": 50,
        "h": 50,
        "type": "resetcoins",
        "inView": false
    },
    {
        "x": 5650,
        "y": 5100,
        "w": 100,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5650,
        "y": 5000,
        "w": 100,
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
        "x": 6400,
        "y": 5500,
        "w": 750,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7050,
        "y": 5000,
        "w": 100,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6500,
        "y": 5000,
        "w": 100,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                6400,
                5125
            ],
            [
                6475,
                5175
            ],
            [
                6400,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6400,
            "right": 6475,
            "top": 5125,
            "bottom": 5225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                5225
            ],
            [
                6500,
                5325
            ],
            [
                6425,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6425,
            "right": 6500,
            "top": 5225,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6450,
                5350
            ],
            [
                6475,
                5400
            ],
            [
                6425,
                5400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6425,
            "right": 6475,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6400,
                5000
            ],
            [
                6500,
                5000
            ],
            [
                6500,
                5100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 6400,
            "right": 6500,
            "top": 5000,
            "bottom": 5100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6701.25,
        "y": 5350,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                6600,
                5350
            ],
            [
                7000,
                5350
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "pointOn": {
            "x": 6600,
            "y": 5350
        },
        "pointTo": {
            "x": 7000,
            "y": 5350
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6751.25,
        "y": 5250,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                6600,
                5250
            ],
            [
                6650,
                5250
            ],
            [
                7000,
                5250
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6650,
            "y": 5250
        },
        "pointTo": {
            "x": 7000,
            "y": 5250
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6801.25,
        "y": 5150,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                6600,
                5150
            ],
            [
                6700,
                5150
            ],
            [
                7000,
                5150
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6700,
            "y": 5150
        },
        "pointTo": {
            "x": 7000,
            "y": 5150
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6851.25,
        "y": 5050,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                6600,
                5050
            ],
            [
                6750,
                5050
            ],
            [
                7000,
                5050
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6750,
            "y": 5050
        },
        "pointTo": {
            "x": 7000,
            "y": 5050
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6600,
        "y": 5050,
        "w": 25,
        "h": 350,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7025,
        "y": 5000,
        "w": 25,
        "h": 400,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                7025,
                5400
            ],
            [
                7050,
                5400
            ],
            [
                7050,
                5500
            ],
            [
                6950,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6950,
            "right": 7050,
            "top": 5400,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                5400
            ],
            [
                6600,
                5400
            ],
            [
                6550,
                5450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6500,
            "right": 6600,
            "top": 5400,
            "bottom": 5450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5350
            ],
            [
                6625,
                5375
            ],
            [
                6600,
                5400
            ],
            [
                6575,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5300
            ],
            [
                6625,
                5325
            ],
            [
                6600,
                5350
            ],
            [
                6575,
                5325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5300,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5050
            ],
            [
                7075,
                5075
            ],
            [
                7050,
                5100
            ],
            [
                7025,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5050,
            "bottom": 5100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5250
            ],
            [
                6625,
                5275
            ],
            [
                6600,
                5300
            ],
            [
                6575,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5250,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5200
            ],
            [
                6625,
                5225
            ],
            [
                6600,
                5250
            ],
            [
                6575,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5150
            ],
            [
                6625,
                5175
            ],
            [
                6600,
                5200
            ],
            [
                6575,
                5175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5150,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5100
            ],
            [
                6625,
                5125
            ],
            [
                6600,
                5150
            ],
            [
                6575,
                5125
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5100,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5050
            ],
            [
                6625,
                5075
            ],
            [
                6600,
                5100
            ],
            [
                6575,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6575,
            "right": 6625,
            "top": 5050,
            "bottom": 5100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5100
            ],
            [
                7075,
                5125
            ],
            [
                7050,
                5150
            ],
            [
                7025,
                5125
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5100,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5150
            ],
            [
                7075,
                5175
            ],
            [
                7050,
                5200
            ],
            [
                7025,
                5175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5150,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5200
            ],
            [
                7075,
                5225
            ],
            [
                7050,
                5250
            ],
            [
                7025,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5250
            ],
            [
                7075,
                5275
            ],
            [
                7050,
                5300
            ],
            [
                7025,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5250,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5300
            ],
            [
                7075,
                5325
            ],
            [
                7050,
                5350
            ],
            [
                7025,
                5325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5300,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5350
            ],
            [
                7075,
                5375
            ],
            [
                7050,
                5400
            ],
            [
                7025,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5400
            ],
            [
                7050,
                5500
            ],
            [
                6975,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6975,
            "right": 7050,
            "top": 5400,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5425
            ],
            [
                7050,
                5500
            ],
            [
                7000,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7000,
            "right": 7050,
            "top": 5425,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5450
            ],
            [
                7050,
                5500
            ],
            [
                7025,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7050,
            "top": 5450,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5325
            ],
            [
                7125,
                5350
            ],
            [
                7075,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5325,
            "bottom": 5375
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5275
            ],
            [
                7125,
                5300
            ],
            [
                7075,
                5325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5275,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5225
            ],
            [
                7125,
                5250
            ],
            [
                7075,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5225,
            "bottom": 5275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5175
            ],
            [
                7125,
                5200
            ],
            [
                7075,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5175,
            "bottom": 5225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5125
            ],
            [
                7125,
                5150
            ],
            [
                7075,
                5175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5075
            ],
            [
                7125,
                5100
            ],
            [
                7075,
                5125
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5075,
            "bottom": 5125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                5025
            ],
            [
                7125,
                5050
            ],
            [
                7075,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7075,
            "right": 7125,
            "top": 5025,
            "bottom": 5075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6400,
                5150
            ],
            [
                6475,
                5175
            ],
            [
                6400,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6400,
            "right": 6475,
            "top": 5150,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                5250
            ],
            [
                6500,
                5300
            ],
            [
                6425,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6425,
            "right": 6500,
            "top": 5250,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6525,
                5400
            ],
            [
                6575,
                5400
            ],
            [
                6550,
                5450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5400,
            "bottom": 5450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5325
            ],
            [
                6575,
                5375
            ],
            [
                6525,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5325,
            "bottom": 5375
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5275
            ],
            [
                6575,
                5325
            ],
            [
                6525,
                5300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5275,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5225
            ],
            [
                6575,
                5275
            ],
            [
                6525,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5225,
            "bottom": 5275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5175
            ],
            [
                6575,
                5225
            ],
            [
                6525,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5175,
            "bottom": 5225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5125
            ],
            [
                6575,
                5175
            ],
            [
                6525,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6575,
                5075
            ],
            [
                6575,
                5125
            ],
            [
                6525,
                5100
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5075,
            "bottom": 5125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6425,
                5000
            ],
            [
                6500,
                5000
            ],
            [
                6500,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6425,
            "right": 6500,
            "top": 5000,
            "bottom": 5075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5000
            ],
            [
                6600,
                5000
            ],
            [
                6575,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6550,
            "right": 6600,
            "top": 5000,
            "bottom": 5075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                5000
            ],
            [
                6550,
                5000
            ],
            [
                6525,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6500,
            "right": 6550,
            "top": 5000,
            "bottom": 5075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5025
            ],
            [
                7150,
                5075
            ],
            [
                7125,
                5050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5025,
            "bottom": 5075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5075
            ],
            [
                7150,
                5125
            ],
            [
                7125,
                5100
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5075,
            "bottom": 5125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6625,
                5000
            ],
            [
                6625,
                5050
            ],
            [
                6600,
                5050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6600,
            "right": 6625,
            "top": 5000,
            "bottom": 5050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6450,
                5350
            ],
            [
                6475,
                5400
            ],
            [
                6450,
                5400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6450,
            "right": 6475,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5125
            ],
            [
                7150,
                5175
            ],
            [
                7125,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5175
            ],
            [
                7150,
                5225
            ],
            [
                7125,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5175,
            "bottom": 5225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5225
            ],
            [
                7150,
                5275
            ],
            [
                7125,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5225,
            "bottom": 5275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5275
            ],
            [
                7150,
                5325
            ],
            [
                7125,
                5300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5275,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5325
            ],
            [
                7150,
                5375
            ],
            [
                7125,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7125,
            "right": 7150,
            "top": 5325,
            "bottom": 5375
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5400
            ],
            [
                7100,
                5475
            ],
            [
                7075,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7100,
            "top": 5400,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7150,
                5400
            ],
            [
                7125,
                5500
            ],
            [
                7100,
                5475
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7100,
            "right": 7150,
            "top": 5400,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5400
            ],
            [
                7150,
                5400
            ],
            [
                7100,
                5475
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7150,
            "top": 5400,
            "bottom": 5475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7100,
                5475
            ],
            [
                7150,
                5525
            ],
            [
                7050,
                5525
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7150,
            "top": 5475,
            "bottom": 5525
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7100,
                5525
            ],
            [
                7150,
                5600
            ],
            [
                7050,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7150,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7000,
                5525
            ],
            [
                7050,
                5600
            ],
            [
                6950,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6950,
            "right": 7050,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6900,
                5525
            ],
            [
                6950,
                5600
            ],
            [
                6850,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6850,
            "right": 6950,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6800,
                5525
            ],
            [
                6850,
                5600
            ],
            [
                6750,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6750,
            "right": 6850,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6700,
                5525
            ],
            [
                6750,
                5600
            ],
            [
                6650,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6650,
            "right": 6750,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6600,
                5525
            ],
            [
                6650,
                5600
            ],
            [
                6550,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6550,
            "right": 6650,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6500,
                5525
            ],
            [
                6550,
                5600
            ],
            [
                6450,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6450,
            "right": 6550,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6400,
                5525
            ],
            [
                6450,
                5600
            ],
            [
                6350,
                5600
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6350,
            "right": 6450,
            "top": 5525,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5450
            ],
            [
                6400,
                5525
            ],
            [
                6350,
                5600
            ],
            [
                6300,
                5525
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6300,
            "right": 6400,
            "top": 5450,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5300
            ],
            [
                6400,
                5375
            ],
            [
                6350,
                5450
            ],
            [
                6300,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6300,
            "right": 6400,
            "top": 5300,
            "bottom": 5450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5150
            ],
            [
                6400,
                5225
            ],
            [
                6350,
                5300
            ],
            [
                6300,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6300,
            "right": 6400,
            "top": 5150,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6450,
                5525
            ],
            [
                6475,
                5550
            ],
            [
                6450,
                5575
            ],
            [
                6425,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6425,
            "right": 6475,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5525
            ],
            [
                6575,
                5550
            ],
            [
                6550,
                5575
            ],
            [
                6525,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6650,
                5525
            ],
            [
                6675,
                5550
            ],
            [
                6650,
                5575
            ],
            [
                6625,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6625,
            "right": 6675,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6750,
                5525
            ],
            [
                6775,
                5550
            ],
            [
                6750,
                5575
            ],
            [
                6725,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6725,
            "right": 6775,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6850,
                5525
            ],
            [
                6875,
                5550
            ],
            [
                6850,
                5575
            ],
            [
                6825,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6825,
            "right": 6875,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5525
            ],
            [
                7075,
                5550
            ],
            [
                7050,
                5575
            ],
            [
                7025,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5425
            ],
            [
                6375,
                5450
            ],
            [
                6350,
                5475
            ],
            [
                6325,
                5450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5425,
            "bottom": 5475
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5275
            ],
            [
                6375,
                5300
            ],
            [
                6350,
                5325
            ],
            [
                6325,
                5300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5275,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5125
            ],
            [
                6375,
                5150
            ],
            [
                6350,
                5175
            ],
            [
                6325,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5000
            ],
            [
                7150,
                5000
            ],
            [
                7125,
                5050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7150,
            "top": 5000,
            "bottom": 5050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7125,
                5350
            ],
            [
                7150,
                5400
            ],
            [
                7050,
                5400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7050,
            "right": 7150,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6898.75,
        "y": 5350,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                6600,
                5350
            ],
            [
                7000,
                5350
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 7000,
            "y": 5350
        },
        "pointTo": {
            "x": 6600,
            "y": 5350
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5350
            ],
            [
                6575,
                5375
            ],
            [
                6550,
                5400
            ],
            [
                6525,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5300
            ],
            [
                6575,
                5325
            ],
            [
                6550,
                5350
            ],
            [
                6525,
                5325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5300,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5225
            ],
            [
                6575,
                5250
            ],
            [
                6550,
                5350
            ],
            [
                6525,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5225,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5100
            ],
            [
                6575,
                5200
            ],
            [
                6550,
                5225
            ],
            [
                6525,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5100,
            "bottom": 5225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5050
            ],
            [
                6575,
                5075
            ],
            [
                6550,
                5100
            ],
            [
                6525,
                5075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6525,
            "right": 6575,
            "top": 5050,
            "bottom": 5100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6600,
        "y": 5000,
        "w": 425,
        "h": 50,
        "type": "tp",
        "tpx": 7225,
        "tpy": 5025,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 7150,
        "y": 5000,
        "w": 50,
        "h": 600,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5600,
        "w": 1500,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                5775,
                5350
            ],
            [
                6275,
                5425
            ],
            [
                5775,
                5500
            ],
            [
                5725,
                5425
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5725,
            "right": 6275,
            "top": 5350,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6225,
                5450
            ],
            [
                6275,
                5525
            ],
            [
                6225,
                5600
            ],
            [
                5725,
                5525
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5725,
            "right": 6275,
            "top": 5450,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                5350
            ],
            [
                6275,
                5350
            ],
            [
                6325,
                5425
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 6325,
            "top": 5350,
            "bottom": 5425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6848.75,
        "y": 5250,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7000,
                5250
            ],
            [
                6950,
                5250
            ],
            [
                6600,
                5250
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6950,
            "y": 5250
        },
        "pointTo": {
            "x": 6600,
            "y": 5250
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 6798.75,
        "y": 5150,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7000,
                5150
            ],
            [
                6900,
                5150
            ],
            [
                6600,
                5150
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6900,
            "y": 5150
        },
        "pointTo": {
            "x": 6600,
            "y": 5150
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 6748.75,
        "y": 5050,
        "w": 50,
        "h": 50,
        "type": "move",
        "points": [
            [
                7000,
                5050
            ],
            [
                6850,
                5050
            ],
            [
                6600,
                5050
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "pointOn": {
            "x": 6850,
            "y": 5050
        },
        "pointTo": {
            "x": 6600,
            "y": 5050
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7550,
        "y": 5200,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7550,
                    5000
                ],
                [
                    7550,
                    4900
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7550,
                    5400
                ],
                [
                    7550,
                    5500
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
        "x": 7200,
        "y": 5050,
        "w": 350,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 5200,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7550,
        "y": 5550,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7550,
                    5750
                ],
                [
                    7550,
                    5850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7550,
                    5350
                ],
                [
                    7550,
                    5250
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
        "x": 7550,
        "y": 5550,
        "radius": 150,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7175,
        "y": 5325,
        "w": 150,
        "h": 525,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7250,
        "y": 5750,
        "w": 300,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 5400,
        "w": 300,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7550,
        "y": 5750,
        "w": 300,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7450,
        "y": 5212.5,
        "radius": 175,
        "radius2": 112.5,
        "type": "oval",
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 7437.5,
        "y": 5212.5,
        "radius": 237.5,
        "radius2": 112.5,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 7687.5,
        "y": 5512.5,
        "radius": 237.5,
        "radius2": 112.5,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "points": [
            [
                7950,
                5025
            ],
            [
                7950,
                5425
            ],
            [
                7700,
                5400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7700,
            "right": 7950,
            "top": 5025,
            "bottom": 5425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7275,
                5400
            ],
            [
                7350,
                5825
            ],
            [
                7200,
                5825
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7200,
            "right": 7350,
            "top": 5400,
            "bottom": 5825
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7200,
                5400
            ],
            [
                7350,
                5400
            ],
            [
                7275,
                5825
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7200,
            "right": 7350,
            "top": 5400,
            "bottom": 5825
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7975,
                5550
            ],
            [
                7975,
                5675
            ],
            [
                7825,
                5675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7825,
            "right": 7975,
            "top": 5550,
            "bottom": 5675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7700,
        "y": 5850,
        "w": 150,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7975,
        "y": 5850,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": 6,
        "rotateSpeed": 180,
        "pivotX": 7975,
        "pivotY": 5850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 8075,
        "y": 5850,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -24,
        "rotateSpeed": 180,
        "pivotX": 8075,
        "pivotY": 5850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 8200,
        "y": 5850,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -54,
        "rotateSpeed": 180,
        "pivotX": 8200,
        "pivotY": 5850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 8300,
        "y": 5850,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -84,
        "rotateSpeed": 180,
        "pivotX": 8300,
        "pivotY": 5850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 8300,
        "y": 5950,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -104,
        "rotateSpeed": 180,
        "pivotX": 8300,
        "pivotY": 5950,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 8175,
        "y": 5950,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -134,
        "rotateSpeed": 180,
        "pivotX": 8175,
        "pivotY": 5950,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                8475,
                5700
            ],
            [
                8575,
                5700
            ],
            [
                8525,
                5775
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 5700,
            "bottom": 5775
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8475,
                5775
            ],
            [
                8575,
                5775
            ],
            [
                8525,
                5850
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 5775,
            "bottom": 5850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8475,
                5850
            ],
            [
                8575,
                5850
            ],
            [
                8525,
                5925
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 5850,
            "bottom": 5925
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8475,
                5925
            ],
            [
                8575,
                5925
            ],
            [
                8525,
                6000
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 5925,
            "bottom": 6000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8475,
                6000
            ],
            [
                8575,
                6000
            ],
            [
                8525,
                6075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 6000,
            "bottom": 6075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8475,
                6075
            ],
            [
                8575,
                6075
            ],
            [
                8525,
                6150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8475,
            "right": 8575,
            "top": 6075,
            "bottom": 6150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8275,
                6125
            ],
            [
                8575,
                6175
            ],
            [
                8275,
                6225
            ],
            [
                8000,
                6175
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8000,
            "right": 8575,
            "top": 6125,
            "bottom": 6225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8275,
                5575
            ],
            [
                8575,
                5625
            ],
            [
                8275,
                5675
            ],
            [
                8000,
                5625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8000,
            "right": 8575,
            "top": 5575,
            "bottom": 5675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8150,
        "y": 6150,
        "w": 250,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8150,
        "y": 5600,
        "w": 250,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                8225,
                5600
            ],
            [
                8325,
                5600
            ],
            [
                8275,
                5675
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8225,
            "right": 8325,
            "top": 5600,
            "bottom": 5675
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8275,
                6125
            ],
            [
                8325,
                6200
            ],
            [
                8225,
                6200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8225,
            "right": 8325,
            "top": 6125,
            "bottom": 6200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7525,
                5475
            ],
            [
                7850,
                5475
            ],
            [
                7700,
                5625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7525,
            "right": 7850,
            "top": 5475,
            "bottom": 5625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7275,
                5150
            ],
            [
                7600,
                5150
            ],
            [
                7450,
                5300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7275,
            "right": 7600,
            "top": 5150,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7373.75,
        "y": 5150,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7275,
                5150
            ],
            [
                7475,
                5150
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7475,
            "y": 5150
        },
        "pointTo": {
            "x": 7275,
            "y": 5150
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7426.25,
        "y": 5225,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7325,
                5225
            ],
            [
                7525,
                5225
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7325,
            "y": 5225
        },
        "pointTo": {
            "x": 7525,
            "y": 5225
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7501.25,
        "y": 5175,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7400,
                5175
            ],
            [
                7600,
                5175
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7400,
            "y": 5175
        },
        "pointTo": {
            "x": 7600,
            "y": 5175
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7501.25,
        "y": 5175,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7400,
                5175
            ],
            [
                7600,
                5175
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7400,
            "y": 5175
        },
        "pointTo": {
            "x": 7600,
            "y": 5175
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7451.25,
        "y": 5125,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7350,
                5125
            ],
            [
                7550,
                5125
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7350,
            "y": 5125
        },
        "pointTo": {
            "x": 7550,
            "y": 5125
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7498.75,
        "y": 5225,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7400,
                5225
            ],
            [
                7600,
                5225
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7600,
            "y": 5225
        },
        "pointTo": {
            "x": 7400,
            "y": 5225
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7523.75,
        "y": 5200,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7425,
                5200
            ],
            [
                7625,
                5200
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7625,
            "y": 5200
        },
        "pointTo": {
            "x": 7425,
            "y": 5200
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7626.25,
        "y": 5475,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7525,
                5475
            ],
            [
                7725,
                5475
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7525,
            "y": 5475
        },
        "pointTo": {
            "x": 7725,
            "y": 5475
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7598.75,
        "y": 5525,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7500,
                5525
            ],
            [
                7700,
                5525
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7700,
            "y": 5525
        },
        "pointTo": {
            "x": 7500,
            "y": 5525
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7751.25,
        "y": 5550,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7650,
                5550
            ],
            [
                7850,
                5550
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7650,
            "y": 5550
        },
        "pointTo": {
            "x": 7850,
            "y": 5550
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7798.75,
        "y": 5475,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7700,
                5475
            ],
            [
                7900,
                5475
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7900,
            "y": 5475
        },
        "pointTo": {
            "x": 7700,
            "y": 5475
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7851.25,
        "y": 5550,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7750,
                5550
            ],
            [
                7950,
                5550
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7750,
            "y": 5550
        },
        "pointTo": {
            "x": 7950,
            "y": 5550
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7851.25,
        "y": 5550,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7750,
                5550
            ],
            [
                7950,
                5550
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7750,
            "y": 5550
        },
        "pointTo": {
            "x": 7950,
            "y": 5550
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7698.75,
        "y": 5500,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7600,
                5500
            ],
            [
                7800,
                5500
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7800,
            "y": 5500
        },
        "pointTo": {
            "x": 7600,
            "y": 5500
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7723.75,
        "y": 5450,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7625,
                5450
            ],
            [
                7825,
                5450
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7825,
            "y": 5450
        },
        "pointTo": {
            "x": 7625,
            "y": 5450
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7873.75,
        "y": 5575,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7775,
                5575
            ],
            [
                7975,
                5575
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 7975,
            "y": 5575
        },
        "pointTo": {
            "x": 7775,
            "y": 5575
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 7876.25,
        "y": 5500,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7775,
                5500
            ],
            [
                7975,
                5500
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7775,
            "y": 5500
        },
        "pointTo": {
            "x": 7975,
            "y": 5500
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7876.25,
        "y": 5500,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7775,
                5500
            ],
            [
                7975,
                5500
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7775,
            "y": 5500
        },
        "pointTo": {
            "x": 7975,
            "y": 5500
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7326.25,
        "y": 5200,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7225,
                5200
            ],
            [
                7425,
                5200
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 7225,
            "y": 5200
        },
        "pointTo": {
            "x": 7425,
            "y": 5200
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 7400,
        "y": 5775,
        "w": 425,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7850,
        "y": 6000,
        "w": 50,
        "h": 250,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                8350,
                5700
            ],
            [
                8450,
                5700
            ],
            [
                8450,
                5800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8350,
            "right": 8450,
            "top": 5700,
            "bottom": 5800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8450,
                6000
            ],
            [
                8450,
                6100
            ],
            [
                8350,
                6100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8350,
            "right": 8450,
            "top": 6000,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7900,
                6000
            ],
            [
                8000,
                6000
            ],
            [
                7900,
                6100
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7900,
            "right": 8000,
            "top": 6000,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8050,
        "y": 5950,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -164,
        "rotateSpeed": 180,
        "pivotX": 8050,
        "pivotY": 5950,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                7700,
                6250
            ],
            [
                7850,
                6250
            ],
            [
                8075,
                6850
            ],
            [
                7700,
                6850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7700,
            "right": 8075,
            "top": 6250,
            "bottom": 6850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8300,
                6250
            ],
            [
                8450,
                6250
            ],
            [
                8450,
                6850
            ],
            [
                8075,
                6850
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8075,
            "right": 8450,
            "top": 6250,
            "bottom": 6850
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7700,
        "y": 6850,
        "w": 850,
        "h": 375,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8000,
                6250
            ],
            [
                8150,
                6250
            ],
            [
                8075,
                6450
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8000,
            "right": 8150,
            "top": 6250,
            "bottom": 6450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8050,
        "y": 6150,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -176,
        "rotateSpeed": -180,
        "pivotX": 8050,
        "pivotY": 6150,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                7050,
                5000
            ],
            [
                7075,
                5025
            ],
            [
                7050,
                5050
            ],
            [
                7025,
                5025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7025,
            "right": 7075,
            "top": 5000,
            "bottom": 5050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8091.247854069336,
        "y": 6342.504291861353,
        "w": 0,
        "h": 0,
        "type": "movinggrapplepoint",
        "points": [
            [
                8050,
                6325
            ],
            [
                8075,
                6375
            ],
            [
                8100,
                6325
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "alongWith": false,
        "renderType": "grapple",
        "pointOn": {
            "x": 8075,
            "y": 6375
        },
        "pointTo": {
            "x": 8100,
            "y": 6325
        },
        "xv": 67.0820393249937,
        "yv": -134.16407864998737,
        "inView": false
    },
    {
        "x": 8063.6686938124885,
        "y": 6325,
        "w": 0,
        "h": 0,
        "type": "movinggrapplepoint",
        "points": [
            [
                8050,
                6325
            ],
            [
                8075,
                6375
            ],
            [
                8100,
                6325
            ]
        ],
        "speed": 150,
        "currentPoint": 2,
        "alongWith": false,
        "renderType": "grapple",
        "pointOn": {
            "x": 8100,
            "y": 6325
        },
        "pointTo": {
            "x": 8050,
            "y": 6325
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 8068.887174294342,
        "y": 6362.774348588654,
        "w": 0,
        "h": 0,
        "type": "movinggrapplepoint",
        "points": [
            [
                8050,
                6325
            ],
            [
                8075,
                6375
            ],
            [
                8100,
                6325
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "alongWith": false,
        "renderType": "grapple",
        "pointOn": {
            "x": 8050,
            "y": 6325
        },
        "pointTo": {
            "x": 8075,
            "y": 6375
        },
        "xv": 67.0820393249937,
        "yv": 134.16407864998737,
        "inView": false
    },
    {
        "x": 6487.5,
        "y": 5387.5,
        "radius": 12.5,
        "type": "circle-coin",
        "collected": false,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6851.25,
        "y": 4950,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                6600,
                4950
            ],
            [
                6750,
                4950
            ],
            [
                7000,
                4950
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 6750,
            "y": 4950
        },
        "pointTo": {
            "x": 7000,
            "y": 4950
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "x": 6748.75,
        "y": 4950,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                7000,
                4950
            ],
            [
                6850,
                4950
            ],
            [
                6600,
                4950
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 6850,
            "y": 4950
        },
        "pointTo": {
            "x": 6600,
            "y": 4950
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "x": 6050,
        "y": 6650,
        "w": 350,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5750,
        "y": 6650,
        "w": 150,
        "h": 500,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                5900,
                6650
            ],
            [
                6000,
                6650
            ],
            [
                5900,
                7000
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5900,
            "right": 6000,
            "top": 6650,
            "bottom": 7000
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6200,
        "y": 6500,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 3.141592653589793,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    6000,
                    6500
                ],
                [
                    5900,
                    6500
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    6200,
                    6700
                ],
                [
                    6200,
                    6800
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
        "x": 6200,
        "y": 6500,
        "radius": 152,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6050,
        "y": 6500,
        "w": 150,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5725,
        "y": 6200,
        "w": 275,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6000,
        "y": 6200,
        "w": 200,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 6500,
        "w": 225,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6400,
        "y": 6200,
        "w": 100,
        "h": 975,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6175,
        "y": 6200,
        "w": 250,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6200,
        "y": 6475,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 1050,
        "laser": {
            "x": 6200,
            "y": 6475,
            "w": 400,
            "h": 25,
            "pivotX": 6400,
            "pivotY": 6487.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 7150,
        "y": 5650,
        "w": 25,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7150,
        "y": 5850,
        "w": 550,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                6950,
                5525
            ],
            [
                6975,
                5550
            ],
            [
                6950,
                5575
            ],
            [
                6925,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6925,
            "right": 6975,
            "top": 5525,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6200,
        "w": 100,
        "h": 350,
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
        "x": 7250,
        "y": 6200,
        "w": 100,
        "h": 350,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7300,
        "y": 6550,
        "radius": 250,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    7450,
                    6550
                ],
                [
                    7550,
                    6550
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7150,
                    6550
                ],
                [
                    7050,
                    6550
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
        "x": 7150,
        "y": 6700,
        "w": 400,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7475,
        "y": 6550,
        "w": 75,
        "h": 175,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7300,
        "y": 6550,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7150,
        "y": 6250,
        "w": 100,
        "h": 50,
        "type": "breakable",
        "maxStrength": 25,
        "currentStrength": 25,
        "time": 0.016,
        "timer": 0.016,
        "regenTime": 10,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6350,
        "w": 25,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7175,
        "y": 6375,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6350,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7200,
        "y": 6500,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 6475,
        "w": 25,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7200,
        "y": 6525,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 6500,
        "w": 25,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7175,
        "y": 6350,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7150,
        "y": 6400,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 6500,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                5750,
                5750
            ],
            [
                6100,
                5750
            ],
            [
                5750,
                6100
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 5750,
            "right": 6100,
            "top": 5750,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5750,
                6100
            ],
            [
                5850,
                6200
            ],
            [
                5750,
                6200
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 5750,
            "right": 5850,
            "top": 6100,
            "bottom": 6200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5950,
                6100
            ],
            [
                6050,
                6100
            ],
            [
                6000,
                6150
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 5950,
            "right": 6050,
            "top": 6100,
            "bottom": 6150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                5800
            ],
            [
                6550,
                6200
            ],
            [
                6150,
                6200
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 6150,
            "right": 6550,
            "top": 5800,
            "bottom": 6200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6900,
                5875
            ],
            [
                7000,
                5975
            ],
            [
                6900,
                6075
            ],
            [
                6800,
                5975
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 6800,
            "right": 7000,
            "top": 5875,
            "bottom": 6075
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6550,
                6050
            ],
            [
                6700,
                6200
            ],
            [
                6550,
                6200
            ],
            [
                6450,
                6150
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 6450,
            "right": 6700,
            "top": 6050,
            "bottom": 6200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6500,
        "y": 6200,
        "w": 650,
        "h": 950,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6900,
        "y": 5650,
        "w": 250,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 6851.25,
        "y": 5450,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                6925,
                5450
            ],
            [
                6850,
                5450
            ]
        ],
        "speed": 150,
        "currentPoint": 1,
        "collidable": true,
        "pointOn": {
            "x": 6850,
            "y": 5450
        },
        "pointTo": {
            "x": 6925,
            "y": 5450
        },
        "xv": 150,
        "yv": 0,
        "inView": false
    },
    {
        "points": [
            [
                6850,
                5450
            ],
            [
                6850,
                5500
            ],
            [
                6800,
                5500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 6800,
            "right": 6850,
            "top": 5450,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6923.75,
        "y": 5450,
        "w": 50,
        "h": 50,
        "type": "lavamove",
        "points": [
            [
                6925,
                5450
            ],
            [
                6850,
                5450
            ]
        ],
        "speed": 150,
        "currentPoint": 0,
        "collidable": true,
        "pointOn": {
            "x": 6925,
            "y": 5450
        },
        "pointTo": {
            "x": 6850,
            "y": 5450
        },
        "xv": -150,
        "yv": 1.8369701987210297e-14,
        "inView": false
    },
    {
        "points": [
            [
                6650,
                5700
            ],
            [
                6750,
                5800
            ],
            [
                6525,
                6025
            ],
            [
                6550,
                5800
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 6525,
            "right": 6750,
            "top": 5700,
            "bottom": 6025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5775,
                5550
            ],
            [
                6250,
                5625
            ],
            [
                5825,
                5625
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5775,
            "right": 6250,
            "top": 5550,
            "bottom": 5625
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6850,
        "y": 6000,
        "w": 50,
        "h": 200,
        "type": "tp",
        "tpx": 7200,
        "tpy": 6225,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "points": [
            [
                5750,
                5700
            ],
            [
                6150,
                5700
            ],
            [
                6100,
                5750
            ],
            [
                5750,
                5750
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5750,
            "right": 6150,
            "top": 5700,
            "bottom": 5750
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5300,
                5500
            ],
            [
                5400,
                5500
            ],
            [
                5300,
                5600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5300,
            "right": 5400,
            "top": 5500,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5550,
                5500
            ],
            [
                5650,
                5500
            ],
            [
                5650,
                5600
            ]
        ],
        "type": "poly",
        "most": {
            "left": 5550,
            "right": 5650,
            "top": 5500,
            "bottom": 5600
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6400,
                5650
            ],
            [
                6475,
                5650
            ],
            [
                6050,
                6100
            ],
            [
                5950,
                6100
            ]
        ],
        "type": "poly-tp",
        "tpx": 5775,
        "tpy": 5675,
        "most": {
            "left": 5950,
            "right": 6475,
            "top": 5650,
            "bottom": 6100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5750,
        "y": 5650,
        "w": 1150,
        "h": 550,
        "type": "trans",
        "collide": false,
        "opaq": 0.2,
        "inView": false
    },
    {
        "x": 7500,
        "y": 6350,
        "radius": 250,
        "type": "circle-hollow-slice",
        "startAngle": 3.141592653589793,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    7350,
                    6350
                ],
                [
                    7250,
                    6350
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7650,
                    6350
                ],
                [
                    7750,
                    6350
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
        "x": 7650,
        "y": 6350,
        "w": 100,
        "h": 800,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7450,
        "y": 6350,
        "w": 100,
        "h": 200,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7500,
        "y": 6350,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6950,
        "y": 7150,
        "w": 750,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                7550,
                6600
            ],
            [
                7575,
                6800
            ],
            [
                7550,
                6800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7550,
            "right": 7575,
            "top": 6600,
            "bottom": 6800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7500,
        "y": 7100,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7550,
                    7100
                ],
                [
                    7600,
                    7100
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7500,
                    7150
                ],
                [
                    7500,
                    7200
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
        "x": 7450,
        "y": 7100,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": 3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    7450,
                    7150
                ],
                [
                    7450,
                    7200
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7400,
                    7100
                ],
                [
                    7350,
                    7100
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
        "x": 7450,
        "y": 6800,
        "w": 25,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7350,
        "y": 6875,
        "w": 50,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7400,
        "y": 6850,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    7400,
                    6800
                ],
                [
                    7400,
                    6750
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7450,
                    6850
                ],
                [
                    7500,
                    6850
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
        "x": 7375,
        "y": 6875,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7475,
        "y": 7075,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7450,
        "y": 6800,
        "w": 50,
        "h": 300,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 6875,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7225,
                    6950
                ],
                [
                    7225,
                    7000
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7225,
                    6800
                ],
                [
                    7225,
                    6750
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
        "x": 7225,
        "y": 6850,
        "w": 150,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 6875,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7225,
        "y": 6950,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7275,
        "y": 6975,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": 4.71238898038469,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7275,
                    6900
                ],
                [
                    7275,
                    6850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7275,
                    7050
                ],
                [
                    7275,
                    7100
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
        "x": 7225,
        "y": 7075,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7225,
                    7150
                ],
                [
                    7225,
                    7200
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7225,
                    7000
                ],
                [
                    7225,
                    6950
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
        "x": 7275,
        "y": 7050,
        "w": 100,
        "h": 125,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7225,
        "y": 7050,
        "w": 50,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7250,
        "y": 6950,
        "w": 25,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7275,
        "y": 6975,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7225,
        "y": 7075,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                7650,
                6600
            ],
            [
                7650,
                6800
            ],
            [
                7625,
                6800
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7625,
            "right": 7650,
            "top": 6600,
            "bottom": 6800
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7575,
        "y": 6800,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7625,
                    6800
                ],
                [
                    7675,
                    6800
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7575,
                    6850
                ],
                [
                    7575,
                    6900
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
        "x": 7575,
        "y": 6875,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7575,
                    6950
                ],
                [
                    7575,
                    6975
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7575,
                    6800
                ],
                [
                    7575,
                    6775
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
        "x": 7500,
        "y": 6950,
        "w": 75,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                7450,
                6800
            ],
            [
                7550,
                6800
            ],
            [
                7450,
                6875
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7450,
            "right": 7550,
            "top": 6800,
            "bottom": 6875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7575,
        "y": 6875,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "points": [
            [
                7500,
                6900
            ],
            [
                7525,
                6975
            ],
            [
                7475,
                6950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7475,
            "right": 7525,
            "top": 6900,
            "bottom": 6975
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7575,
        "y": 6975,
        "radius": 125,
        "type": "circle-hollow-slice",
        "startAngle": 4.71238898038469,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7575,
                    6900
                ],
                [
                    7575,
                    6850
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7575,
                    7050
                ],
                [
                    7575,
                    7100
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
        "x": 7575,
        "y": 6975,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7550,
        "y": 7075,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 7575,
        "y": 7075,
        "radius": 25,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 7550,
        "y": 7050,
        "radius": 100,
        "type": "circle-hollow-slice",
        "startAngle": -3.141592653589793,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    7500,
                    7050
                ],
                [
                    7450,
                    7050
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    7550,
                    7000
                ],
                [
                    7550,
                    6950
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
        "points": [
            [
                7625,
                6850
            ],
            [
                7725,
                6850
            ],
            [
                7650,
                6925
            ]
        ],
        "type": "poly",
        "most": {
            "left": 7625,
            "right": 7725,
            "top": 6850,
            "bottom": 6925
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7250,
        "y": 7100,
        "w": 50,
        "h": 50,
        "type": "tp",
        "tpx": 8625,
        "tpy": 5175,
        "bgColor": "#0d0d0d",
        "tileColor": "#383838",
        "changeColor": false,
        "inView": false
    },
    {
        "x": 8425,
        "y": 6250,
        "w": 175,
        "h": 925,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 5350,
        "w": 1250,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 5000,
        "w": 150,
        "h": 350,
        "type": "grav",
        "force": 2500,
        "dir": {
            "x": 2500,
            "y": 0
        },
        "direction": "right",
        "inView": false
    },
    {
        "points": [
            [
                8600,
                5000
            ],
            [
                8750,
                5000
            ],
            [
                8600,
                5150
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8600,
            "right": 8750,
            "top": 5000,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8600,
                5200
            ],
            [
                8750,
                5350
            ],
            [
                8600,
                5350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 8600,
            "right": 8750,
            "top": 5200,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9100,
                5150
            ],
            [
                9400,
                5350
            ],
            [
                8800,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8800,
            "right": 9400,
            "top": 5150,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9100,
                5000
            ],
            [
                9500,
                5000
            ],
            [
                9400,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9100,
            "right": 9500,
            "top": 5000,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9700,
                5200
            ],
            [
                9850,
                5350
            ],
            [
                9450,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9450,
            "right": 9850,
            "top": 5200,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9700,
                5000
            ],
            [
                9850,
                5000
            ],
            [
                9850,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9700,
            "right": 9850,
            "top": 5000,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9850,
        "y": 4975,
        "w": 150,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                8750,
                5000
            ],
            [
                8950,
                5000
            ],
            [
                8850,
                5100
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8750,
            "right": 8950,
            "top": 5000,
            "bottom": 5100
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9850,
                5200
            ],
            [
                10000,
                5200
            ],
            [
                10000,
                5350
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9850,
            "right": 10000,
            "top": 5200,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9850,
                5350
            ],
            [
                9950,
                5450
            ],
            [
                9850,
                5500
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9850,
            "right": 9950,
            "top": 5350,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9850,
        "y": 5450,
        "w": 100,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9650,
        "y": 5500,
        "w": 200,
        "h": 550,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                9850,
                5750
            ],
            [
                9950,
                5850
            ],
            [
                9850,
                5950
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9850,
            "right": 9950,
            "top": 5750,
            "bottom": 5950
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                10000,
                5950
            ],
            [
                10000,
                6050
            ],
            [
                9900,
                6050
            ]
        ],
        "type": "poly",
        "most": {
            "left": 9900,
            "right": 10000,
            "top": 5950,
            "bottom": 6050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9900,
        "y": 6050,
        "w": 100,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 6050,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9450,
        "y": 6050,
        "w": 50,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 6950,
        "w": 750,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9400,
        "y": 7125,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9500,
        "y": 7050,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9875,
        "y": 7100,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9725,
        "y": 7050,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9600,
        "y": 7125,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7050,
        "w": 25,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7050,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9850,
        "y": 7125,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9725,
        "y": 7075,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9500,
        "y": 7075,
        "w": 25,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9475,
        "y": 7050,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7050,
        "w": 650,
        "h": 100,
        "type": "timetrap",
        "time": 0,
        "maxTime": 2,
        "cdmult": 3,
        "trapType": "death",
        "inView": false
    },
    {
        "x": 8600,
        "y": 5900,
        "w": 800,
        "h": 450,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9300,
        "y": 6350,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9300,
        "y": 6600,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9050,
        "y": 6600,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 0,
        "endAngle": 1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    9200,
                    6600
                ],
                [
                    9350,
                    6600
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    9050,
                    6750
                ],
                [
                    9050,
                    6900
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
        "x": 8750,
        "y": 6850,
        "radius": 300,
        "type": "circle-hollow-slice",
        "startAngle": 1.5707963267948966,
        "endAngle": -1.5707963267948966,
        "startPolygon": {
            "points": [
                [
                    8750,
                    7000
                ],
                [
                    8750,
                    7150
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8750,
                    6700
                ],
                [
                    8750,
                    6550
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
        "x": 8575,
        "y": 6350,
        "w": 575,
        "h": 250,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8750,
        "y": 6750,
        "w": 300,
        "h": 150,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8750,
        "y": 6850,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8750,
        "y": 6600,
        "w": 300,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9050,
        "y": 6600,
        "radius": 100,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8750,
        "y": 7050,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": -1.5707963267948966,
        "endAngle": 0,
        "startPolygon": {
            "points": [
                [
                    8750,
                    6950
                ],
                [
                    8750,
                    6825
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8850,
                    7050
                ],
                [
                    8975,
                    7050
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
        "x": 8900,
        "y": 7050,
        "radius": 225,
        "type": "circle-hollow-slice",
        "startAngle": -4.71238898038469,
        "endAngle": -3.141592653589793,
        "startPolygon": {
            "points": [
                [
                    8900,
                    7150
                ],
                [
                    8900,
                    7275
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    8800,
                    7050
                ],
                [
                    8675,
                    7050
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
        "x": 8550,
        "y": 7100,
        "w": 200,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8750,
        "y": 7050,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 8900,
        "y": 7050,
        "w": 350,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 6575,
        "w": 250,
        "h": 400,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 6825,
        "w": 350,
        "h": 225,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 7050,
        "radius": 50,
        "type": "circle-normal",
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 9750,
        "y": 6050,
        "r": 25,
        "angle": -60,
        "type": "circle-sentry",
        "speed": 540,
        "laser": {
            "x": 9750,
            "y": 6050,
            "w": 300,
            "h": 33,
            "pivotX": 9900,
            "pivotY": 6066.5,
            "distToPivot": 0
        },
        "rest": 120,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9525,
        "y": 6025,
        "r": 25,
        "angle": -280,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9525,
            "y": 6025,
            "w": 250,
            "h": 33,
            "pivotX": 9650,
            "pivotY": 6041.5,
            "distToPivot": 0
        },
        "rest": 80,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9275,
        "y": 6575,
        "r": 25,
        "angle": -30.000000000000057,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9275,
            "y": 6575,
            "w": 250,
            "h": 33,
            "pivotX": 9400,
            "pivotY": 6591.5,
            "distToPivot": 0
        },
        "rest": 150,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8750,
        "y": 6850,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 8750,
            "y": 6850,
            "w": 300,
            "h": 33,
            "pivotX": 8900,
            "pivotY": 6866.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8875,
        "y": 6600,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8875,
            "y": 6600,
            "w": 300,
            "h": 33,
            "pivotX": 9025,
            "pivotY": 6616.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8850,
        "y": 6600,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8850,
            "y": 6600,
            "w": 300,
            "h": 33,
            "pivotX": 9000,
            "pivotY": 6616.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 8825,
        "y": 6600,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8825,
            "y": 6600,
            "w": 300,
            "h": 33,
            "pivotX": 8975,
            "pivotY": 6616.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9650,
        "y": 6325,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9650,
            "y": 6325,
            "w": 250,
            "h": 33,
            "pivotX": 9775,
            "pivotY": 6341.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9800,
        "y": 6325,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9800,
            "y": 6325,
            "w": 250,
            "h": 33,
            "pivotX": 9925,
            "pivotY": 6341.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9650,
        "y": 6475,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9650,
            "y": 6475,
            "w": 250,
            "h": 33,
            "pivotX": 9775,
            "pivotY": 6491.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9800,
        "y": 6475,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9800,
            "y": 6475,
            "w": 250,
            "h": 33,
            "pivotX": 9925,
            "pivotY": 6491.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9650,
        "y": 6625,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9650,
            "y": 6625,
            "w": 250,
            "h": 33,
            "pivotX": 9775,
            "pivotY": 6641.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9800,
        "y": 6625,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9800,
            "y": 6625,
            "w": 250,
            "h": 33,
            "pivotX": 9925,
            "pivotY": 6641.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9650,
        "y": 6775,
        "r": 25,
        "angle": -315,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9650,
            "y": 6775,
            "w": 250,
            "h": 33,
            "pivotX": 9775,
            "pivotY": 6791.5,
            "distToPivot": 0
        },
        "rest": 45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9800,
        "y": 6775,
        "r": 25,
        "angle": -45,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9800,
            "y": 6775,
            "w": 250,
            "h": 33,
            "pivotX": 9925,
            "pivotY": 6791.5,
            "distToPivot": 0
        },
        "rest": -45,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9725,
        "y": 6700,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 9725,
        "pivotY": 6700,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 9725,
        "y": 6400,
        "w": 150,
        "h": 150,
        "type": "rotate-lava",
        "angle": 45,
        "rotateSpeed": 0,
        "pivotX": 9725,
        "pivotY": 6400,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 106.06601717798213,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7050,
        "w": 650,
        "h": 100,
        "type": "trans",
        "collide": false,
        "opaq": 0.23,
        "inView": false
    },
    {
        "x": 5725,
        "y": 5100,
        "w": 75,
        "h": 100,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5800,
        "y": 5150,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5750,
        "y": 5150,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5200,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5300,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5400,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5500,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5600,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5675,
        "y": 5625,
        "w": 50,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5975,
        "y": 5150,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 6150,
        "y": 5150,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5850,
        "y": 4900,
        "radius": 550,
        "radius2": 75,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 5700,
        "y": 4850,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5850,
        "y": 4850,
        "w": 125,
        "h": 50,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "x": 5750,
        "y": 4875,
        "w": 75,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5900,
        "y": 4875,
        "w": 75,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5800,
        "y": 4850,
        "w": 25,
        "h": 75,
        "type": "rotate-lava",
        "angle": -62.5,
        "rotateSpeed": 0,
        "pivotX": 5800,
        "pivotY": 4850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 39.528470752104745,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "x": 5950,
        "y": 4850,
        "w": 25,
        "h": 75,
        "type": "rotate-lava",
        "angle": -62.5,
        "rotateSpeed": 0,
        "pivotX": 5950,
        "pivotY": 4850,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 39.528470752104745,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                5700,
                4850
            ],
            [
                5725,
                4850
            ],
            [
                5700,
                4875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5700,
            "right": 5725,
            "top": 4850,
            "bottom": 4875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5850,
                4850
            ],
            [
                5875,
                4850
            ],
            [
                5850,
                4875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5850,
            "right": 5875,
            "top": 4850,
            "bottom": 4875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5687.5,
        "y": 5125,
        "w": 25,
        "h": 500,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5450,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5350,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5250,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5150,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5700,
        "y": 5550,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                5700,
                5125
            ],
            [
                5725,
                5150
            ],
            [
                5675,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5725,
            "top": 5125,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5700,
                5225
            ],
            [
                5725,
                5250
            ],
            [
                5675,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5725,
            "top": 5225,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5700,
                5325
            ],
            [
                5725,
                5350
            ],
            [
                5675,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5725,
            "top": 5325,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5700,
                5425
            ],
            [
                5725,
                5450
            ],
            [
                5675,
                5450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5725,
            "top": 5425,
            "bottom": 5450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5700,
                5525
            ],
            [
                5725,
                5550
            ],
            [
                5675,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5725,
            "top": 5525,
            "bottom": 5550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5750,
                5125
            ],
            [
                5775,
                5150
            ],
            [
                5725,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5725,
            "right": 5775,
            "top": 5125,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5800,
                5125
            ],
            [
                5825,
                5150
            ],
            [
                5775,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5775,
            "right": 5825,
            "top": 5125,
            "bottom": 5150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5975,
                5125
            ],
            [
                6000,
                5150
            ],
            [
                5975,
                5175
            ],
            [
                5950,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5950,
            "right": 6000,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6150,
                5125
            ],
            [
                6175,
                5150
            ],
            [
                6150,
                5175
            ],
            [
                6125,
                5150
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6125,
            "right": 6175,
            "top": 5125,
            "bottom": 5175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5200
            ],
            [
                6375,
                5225
            ],
            [
                6350,
                5250
            ],
            [
                6325,
                5225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5350
            ],
            [
                6375,
                5375
            ],
            [
                6350,
                5400
            ],
            [
                6325,
                5375
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5350,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6350,
                5500
            ],
            [
                6375,
                5525
            ],
            [
                6350,
                5550
            ],
            [
                6325,
                5525
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6325,
            "right": 6375,
            "top": 5500,
            "bottom": 5550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5025,
                4900
            ],
            [
                5275,
                5225
            ],
            [
                5025,
                5550
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5025,
            "right": 5275,
            "top": 4900,
            "bottom": 5550
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5050,
                4950
            ],
            [
                5275,
                5225
            ],
            [
                5050,
                5500
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5050,
            "right": 5275,
            "top": 4950,
            "bottom": 5500
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5075,
                5000
            ],
            [
                5275,
                5225
            ],
            [
                5075,
                5450
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5075,
            "right": 5275,
            "top": 5000,
            "bottom": 5450
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5100,
                5050
            ],
            [
                5275,
                5225
            ],
            [
                5100,
                5400
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5100,
            "right": 5275,
            "top": 5050,
            "bottom": 5400
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5125,
                5100
            ],
            [
                5275,
                5225
            ],
            [
                5125,
                5350
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5125,
            "right": 5275,
            "top": 5100,
            "bottom": 5350
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5150,
                5150
            ],
            [
                5275,
                5225
            ],
            [
                5150,
                5300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5150,
            "right": 5275,
            "top": 5150,
            "bottom": 5300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5175,
                5175
            ],
            [
                5275,
                5225
            ],
            [
                5175,
                5275
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5175,
            "right": 5275,
            "top": 5175,
            "bottom": 5275
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5200,
                5200
            ],
            [
                5275,
                5225
            ],
            [
                5200,
                5250
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5200,
            "right": 5275,
            "top": 5200,
            "bottom": 5250
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5275,
                5250
            ],
            [
                5275,
                5900
            ],
            [
                5025,
                5575
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5025,
            "right": 5275,
            "top": 5250,
            "bottom": 5900
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                5025,
                4875
            ],
            [
                5275,
                4875
            ],
            [
                5275,
                5200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5025,
            "right": 5275,
            "top": 4875,
            "bottom": 5200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5100,
        "y": 5925,
        "w": 175,
        "h": 1600,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5100,
        "y": 7350,
        "w": 4475,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9825,
        "y": 7350,
        "w": 4475,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 10025,
        "y": 2550,
        "w": 175,
        "h": 4975,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5125,
        "y": 4650,
        "w": 16000,
        "h": 175,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6675,
        "y": 6900,
        "r": 401,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 401,
        "inView": false
    },
    {
        "x": 6400,
        "y": 6625,
        "w": 550,
        "h": 550,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                6675,
                6625
            ],
            [
                6950,
                6900
            ],
            [
                6675,
                7175
            ],
            [
                6400,
                6900
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6400,
            "right": 6950,
            "top": 6625,
            "bottom": 7175
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6675,
        "y": 6900,
        "r": 175,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 175,
        "inView": false
    },
    {
        "x": 6675,
        "y": 6900,
        "radius": 177,
        "type": "circle-hollow-slice",
        "startAngle": 31.459559767197604,
        "endAngle": 33.03035609399247,
        "startPolygon": {
            "points": [
                [
                    6763.415767609995,
                    6903.860315781816
                ],
                [
                    6851.831535219991,
                    6907.720631563631
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    6671.1396842181875,
                    6988.415767609995
                ],
                [
                    6667.279368436374,
                    7076.831535219991
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 88.5,
        "toRotate": true,
        "rotateSpeed": 5.235987755982989,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6675,
        "y": 6900,
        "radius": 177,
        "type": "circle-hollow-slice",
        "startAngle": 34.60115242078733,
        "endAngle": 36.1719487475822,
        "startPolygon": {
            "points": [
                [
                    6586.584232390004,
                    6896.13968421819
                ],
                [
                    6498.168464780009,
                    6892.2793684363805
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "endPolygon": {
            "points": [
                [
                    6678.860315781807,
                    6811.584232390004
                ],
                [
                    6682.720631563615,
                    6723.168464780009
                ]
            ],
            "type": "poly",
            "props": {}
        },
        "innerRadius": 88.5,
        "toRotate": true,
        "rotateSpeed": 5.235987755982989,
        "renderType": "circle",
        "inView": false
    },
    {
        "x": 6950,
        "y": 5850,
        "w": 750,
        "h": 325,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7725,
        "y": 5850,
        "w": 100,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7725,
        "y": 6075,
        "w": 100,
        "h": 225,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7850,
        "y": 6100,
        "w": 250,
        "h": 50,
        "type": "rotate-lava",
        "angle": -149,
        "rotateSpeed": 180,
        "pivotX": 7850,
        "pivotY": 6100,
        "distToPivot": 0,
        "canCollide": true,
        "renderType": "rotating",
        "cullingRadius": 127.47548783981962,
        "unSim": 5.975000000000087,
        "inView": false
    },
    {
        "points": [
            [
                7700,
                6300
            ],
            [
                7825,
                6300
            ],
            [
                8050,
                6875
            ],
            [
                7700,
                6875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7700,
            "right": 8050,
            "top": 6300,
            "bottom": 6875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8325,
                6300
            ],
            [
                8450,
                6300
            ],
            [
                8450,
                6875
            ],
            [
                8100,
                6875
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8100,
            "right": 8450,
            "top": 6300,
            "bottom": 6875
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8325,
        "y": 6250,
        "w": 100,
        "h": 50,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8450,
        "y": 6225,
        "w": 125,
        "h": 675,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8525,
        "y": 6850,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8525,
            "y": 6850,
            "w": 350,
            "h": 33,
            "pivotX": 8700,
            "pivotY": 6866.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 6950,
        "y": 5850,
        "w": 750,
        "h": 325,
        "type": "snap",
        "snapDistance": 10,
        "snapWait": 0.5,
        "snapX": true,
        "snapY": true,
        "inView": false
    },
    {
        "points": [
            [
                8275,
                6900
            ],
            [
                8500,
                7300
            ],
            [
                8075,
                7300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8075,
            "right": 8500,
            "top": 6900,
            "bottom": 7300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8100,
                6900
            ],
            [
                8325,
                7300
            ],
            [
                7900,
                7300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7900,
            "right": 8325,
            "top": 6900,
            "bottom": 7300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7900,
                6900
            ],
            [
                8125,
                7300
            ],
            [
                7700,
                7300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7700,
            "right": 8125,
            "top": 6900,
            "bottom": 7300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 7575,
        "y": 7100,
        "w": 75,
        "h": 75,
        "type": "normal",
        "canJump": true,
        "inView": false
    },
    {
        "points": [
            [
                9500,
                5000
            ],
            [
                9700,
                5000
            ],
            [
                9575,
                5125
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9500,
            "right": 9700,
            "top": 5000,
            "bottom": 5125
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5675,
        "y": 6225,
        "w": 300,
        "h": 375,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6425,
        "y": 6225,
        "w": 700,
        "h": 250,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7500,
        "y": 6350,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 7300,
        "y": 6550,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 7300,
        "y": 6400,
        "radius": 25,
        "radius2": 125,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 7500,
        "y": 6512.5,
        "radius": 25,
        "radius2": 137.5,
        "type": "lava-oval",
        "canCollide": true,
        "renderType": "oval",
        "inView": false
    },
    {
        "x": 7500,
        "y": 6675,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 7300,
        "y": 6250,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 9250,
        "y": 6975,
        "w": 750,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7000,
        "w": 750,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7175,
        "w": 750,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9250,
        "y": 7200,
        "w": 750,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                9200,
                7175
            ],
            [
                9250,
                7175
            ],
            [
                9250,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9200,
            "right": 9250,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9250,
                6975
            ],
            [
                9250,
                7025
            ],
            [
                9200,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9200,
            "right": 9250,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9275,
                6975
            ],
            [
                9325,
                6975
            ],
            [
                9300,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9275,
            "right": 9325,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8600,
                6925
            ],
            [
                8825,
                7150
            ],
            [
                8675,
                7075
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8600,
            "right": 8825,
            "top": 6925,
            "bottom": 7150
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8850,
                7150
            ],
            [
                9175,
                7175
            ],
            [
                9000,
                7200
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8850,
            "right": 9175,
            "top": 7150,
            "bottom": 7200
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8325,
                6900
            ],
            [
                8550,
                6900
            ],
            [
                8775,
                7300
            ],
            [
                8550,
                7300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8325,
            "right": 8775,
            "top": 6900,
            "bottom": 7300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 8800,
        "y": 7250,
        "w": 775,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9825,
        "y": 7250,
        "w": 175,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9500,
        "y": 6825,
        "w": 475,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8875,
        "y": 6975,
        "w": 300,
        "h": 100,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8650,
        "y": 5375,
        "w": 450,
        "h": 1150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8800,
        "y": 6600,
        "r": 25,
        "angle": 0,
        "type": "circle-sentry",
        "speed": 300,
        "laser": {
            "x": 8800,
            "y": 6600,
            "w": 300,
            "h": 33,
            "pivotX": 8950,
            "pivotY": 6616.5,
            "distToPivot": 0
        },
        "rest": 0,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9050,
        "y": 6600,
        "r": 25,
        "angle": -45.00000000000006,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9050,
            "y": 6600,
            "w": 250,
            "h": 33,
            "pivotX": 9175,
            "pivotY": 6616.5,
            "distToPivot": 0
        },
        "rest": 135,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 7975,
        "y": 4850,
        "w": 600,
        "h": 700,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8600,
        "y": 4850,
        "w": 1400,
        "h": 125,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9875,
        "y": 5000,
        "w": 125,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                9900,
                5225
            ],
            [
                10000,
                5225
            ],
            [
                10000,
                5325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9900,
            "right": 10000,
            "top": 5225,
            "bottom": 5325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9850,
                5375
            ],
            [
                9945,
                5475
            ],
            [
                9850,
                5575
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9850,
            "right": 9945,
            "top": 5375,
            "bottom": 5575
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9850,
                5775
            ],
            [
                9925,
                5850
            ],
            [
                9850,
                5925
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9850,
            "right": 9925,
            "top": 5775,
            "bottom": 5925
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                10000,
                5575
            ],
            [
                10000,
                5725
            ],
            [
                9925,
                5650
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9925,
            "right": 10000,
            "top": 5575,
            "bottom": 5725
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 10100,
        "y": 5850,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 10100,
            "y": 5850,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 5862.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 10100,
        "y": 5575,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 10100,
            "y": 5575,
            "w": 400,
            "h": 25,
            "pivotX": 10300,
            "pivotY": 5587.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9125,
        "y": 5375,
        "w": 700,
        "h": 500,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9750,
        "y": 5850,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 9750,
            "y": 5850,
            "w": 400,
            "h": 25,
            "pivotX": 9950,
            "pivotY": 5862.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9750,
        "y": 5575,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 360,
        "laser": {
            "x": 9750,
            "y": 5575,
            "w": 400,
            "h": 25,
            "pivotX": 9950,
            "pivotY": 5587.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9125,
        "y": 5900,
        "w": 250,
        "h": 500,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9325,
        "y": 6225,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9325,
            "y": 6225,
            "w": 400,
            "h": 25,
            "pivotX": 9525,
            "pivotY": 6237.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9350,
        "y": 6200,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9350,
            "y": 6200,
            "w": 400,
            "h": 25,
            "pivotX": 9550,
            "pivotY": 6212.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9300,
        "y": 6200,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9300,
            "y": 6200,
            "w": 400,
            "h": 25,
            "pivotX": 9500,
            "pivotY": 6212.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9325,
        "y": 6175,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 240,
        "laser": {
            "x": 9325,
            "y": 6175,
            "w": 400,
            "h": 25,
            "pivotX": 9525,
            "pivotY": 6187.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9250,
        "y": 6550,
        "w": 250,
        "h": 300,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 8900,
        "y": 6775,
        "w": 350,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 9050,
        "y": 6875,
        "r": 25,
        "angle": -339.2920065876978,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9050,
            "y": 6875,
            "w": 300,
            "h": 33,
            "pivotX": 9200,
            "pivotY": 6891.5,
            "distToPivot": 0
        },
        "rest": 1e+100,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9200,
        "y": 6875,
        "r": 25,
        "angle": -339.2920065876978,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9200,
            "y": 6875,
            "w": 300,
            "h": 33,
            "pivotX": 9350,
            "pivotY": 6891.5,
            "distToPivot": 0
        },
        "rest": 1e+100,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 9350,
        "y": 6875,
        "r": 25,
        "angle": -339.2920065876978,
        "type": "circle-sentry",
        "speed": 720,
        "laser": {
            "x": 9350,
            "y": 6875,
            "w": 300,
            "h": 33,
            "pivotX": 9500,
            "pivotY": 6891.5,
            "distToPivot": 0
        },
        "rest": 1e+100,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                5675,
                6625
            ],
            [
                5975,
                6625
            ],
            [
                5875,
                6975
            ],
            [
                5675,
                6975
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 5675,
            "right": 5975,
            "top": 6625,
            "bottom": 6975
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 6075,
        "y": 6500,
        "w": 175,
        "h": 825,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6125,
        "y": 7075,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 400,
        "laser": {
            "x": 6125,
            "y": 7075,
            "w": 300,
            "h": 25,
            "pivotX": 6275,
            "pivotY": 7087.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "points": [
            [
                6275,
                6525
            ],
            [
                6450,
                6525
            ],
            [
                6275,
                6700
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6275,
            "right": 6450,
            "top": 6525,
            "bottom": 6700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6850,
                6500
            ],
            [
                7075,
                6500
            ],
            [
                7075,
                6700
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6850,
            "right": 7075,
            "top": 6500,
            "bottom": 6700
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                7075,
                7100
            ],
            [
                7075,
                7300
            ],
            [
                6850,
                7300
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6850,
            "right": 7075,
            "top": 7100,
            "bottom": 7300
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                6275,
                7125
            ],
            [
                6500,
                7325
            ],
            [
                6275,
                7325
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 6275,
            "right": 6500,
            "top": 7125,
            "bottom": 7325
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 5300,
        "y": 7175,
        "w": 750,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5675,
        "y": 6975,
        "w": 200,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 5825,
        "y": 7075,
        "r": 25,
        "angle": -270,
        "type": "circle-sentry",
        "speed": 400,
        "laser": {
            "x": 5825,
            "y": 7075,
            "w": 300,
            "h": 25,
            "pivotX": 5975,
            "pivotY": 7087.5,
            "distToPivot": 0
        },
        "rest": 90,
        "renderType": "circleSentry",
        "lastNoticed": false,
        "radius": 25,
        "inView": false
    },
    {
        "x": 5500,
        "y": 6675,
        "r": 56,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 56,
        "inView": false
    },
    {
        "x": 5600,
        "y": 6725,
        "r": 75,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 75,
        "inView": false
    },
    {
        "x": 5575,
        "y": 6675,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 5650,
        "y": 6675,
        "r": 25,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 25,
        "inView": false
    },
    {
        "x": 5625,
        "y": 6775,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 5475,
        "y": 6700,
        "r": 50,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 50,
        "inView": false
    },
    {
        "x": 5500,
        "y": 6650,
        "r": 35,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 35,
        "inView": false
    },
    {
        "x": 5550,
        "y": 7050,
        "r": 45,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 45,
        "inView": false
    },
    {
        "x": 5400,
        "y": 7000,
        "r": 45,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 45,
        "inView": false
    },
    {
        "x": 7125,
        "y": 7175,
        "w": 550,
        "h": 150,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6950,
        "y": 5625,
        "w": 225,
        "h": 200,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 6925,
        "y": 5625,
        "w": 25,
        "h": 600,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7025,
        "y": 6200,
        "r": 100,
        "type": "circle-lava",
        "renderType": "circleR",
        "radius": 100,
        "inView": false
    },
    {
        "x": 6950,
        "y": 5625,
        "w": 225,
        "h": 200,
        "type": "mark",
        "time": 7,
        "inView": false
    },
    {
        "x": 6450,
        "y": 4850,
        "w": 1475,
        "h": 75,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "x": 7075,
        "y": 4950,
        "w": 875,
        "h": 25,
        "type": "lava",
        "canCollide": true,
        "inView": false
    },
    {
        "points": [
            [
                7950,
                4950
            ],
            [
                7950,
                5425
            ],
            [
                7700,
                5000
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 7700,
            "right": 7950,
            "top": 4950,
            "bottom": 5425
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9350,
                6975
            ],
            [
                9400,
                6975
            ],
            [
                9375,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9350,
            "right": 9400,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9425,
                6975
            ],
            [
                9475,
                6975
            ],
            [
                9450,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9425,
            "right": 9475,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9500,
                6975
            ],
            [
                9550,
                6975
            ],
            [
                9525,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9500,
            "right": 9550,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9575,
                6975
            ],
            [
                9625,
                6975
            ],
            [
                9600,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9575,
            "right": 9625,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9650,
                6975
            ],
            [
                9700,
                6975
            ],
            [
                9675,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9650,
            "right": 9700,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9725,
                6975
            ],
            [
                9775,
                6975
            ],
            [
                9750,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9725,
            "right": 9775,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9800,
                6975
            ],
            [
                9850,
                6975
            ],
            [
                9825,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9800,
            "right": 9850,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9875,
                6975
            ],
            [
                9925,
                6975
            ],
            [
                9900,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9875,
            "right": 9925,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9950,
                6975
            ],
            [
                10000,
                6975
            ],
            [
                9975,
                7025
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9950,
            "right": 10000,
            "top": 6975,
            "bottom": 7025
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9975,
                7175
            ],
            [
                10000,
                7225
            ],
            [
                9950,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9950,
            "right": 10000,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9900,
                7175
            ],
            [
                9925,
                7225
            ],
            [
                9875,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9875,
            "right": 9925,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9300,
                7175
            ],
            [
                9325,
                7225
            ],
            [
                9275,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9275,
            "right": 9325,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9375,
                7175
            ],
            [
                9400,
                7225
            ],
            [
                9350,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9350,
            "right": 9400,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9450,
                7175
            ],
            [
                9475,
                7225
            ],
            [
                9425,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9425,
            "right": 9475,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9525,
                7175
            ],
            [
                9550,
                7225
            ],
            [
                9500,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9500,
            "right": 9550,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9600,
                7175
            ],
            [
                9625,
                7225
            ],
            [
                9575,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9575,
            "right": 9625,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9675,
                7175
            ],
            [
                9700,
                7225
            ],
            [
                9650,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9650,
            "right": 9700,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9750,
                7175
            ],
            [
                9775,
                7225
            ],
            [
                9725,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9725,
            "right": 9775,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9825,
                7175
            ],
            [
                9850,
                7225
            ],
            [
                9800,
                7225
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9800,
            "right": 9850,
            "top": 7175,
            "bottom": 7225
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8900,
                7000
            ],
            [
                8950,
                7000
            ],
            [
                8925,
                7050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8900,
            "right": 8950,
            "top": 7000,
            "bottom": 7050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                8950,
                7000
            ],
            [
                9000,
                7000
            ],
            [
                8975,
                7050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 8950,
            "right": 9000,
            "top": 7000,
            "bottom": 7050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9000,
                7000
            ],
            [
                9050,
                7000
            ],
            [
                9025,
                7050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9000,
            "right": 9050,
            "top": 7000,
            "bottom": 7050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9050,
                7000
            ],
            [
                9100,
                7000
            ],
            [
                9075,
                7050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9050,
            "right": 9100,
            "top": 7000,
            "bottom": 7050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "points": [
            [
                9100,
                7000
            ],
            [
                9150,
                7000
            ],
            [
                9125,
                7050
            ]
        ],
        "type": "poly-lava",
        "most": {
            "left": 9100,
            "right": 9150,
            "top": 7000,
            "bottom": 7050
        },
        "renderType": "poly",
        "inView": false
    },
    {
        "x": 9775,
        "y": 5025,
        "w": 75,
        "h": 75,
        "type": "mark",
        "time": 7,
        "inView": false
    },
    {
        "x": 5300,
        "y": 5000,
        "w": 350,
        "h": 350,
        "type": "musicchange",
        "musicPath": "/sounds/drop it like its hot.mp3",
        "volume": 1,
        "startTime": 0,
        "inView": false
    },
    {
        "x": 1500,
        "y": 7700,
        "w": 50,
        "h": 50,
        "type": "resettimetraps",
        "lastIntersecting": false,
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
        "type": "flashlight",
        "angle": 1.9007591953913445,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9334.408952418293,
        "y": 6577.146512919338,
        "renderX": 9334.408952418293,
        "renderY": 6577.146512919338,
        "xv": -136.0833181224114,
        "yv": -397.34283752043973,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.8004006220819155,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9202.641476004304,
        "y": 6527.165579538054,
        "renderX": 9202.641476004304,
        "renderY": 6527.165579538054,
        "xv": 395.78971685516603,
        "yv": -140.53647224726916,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.9314007391498045,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9226.555834896382,
        "y": 6519.577746324019,
        "renderX": 9226.555834896382,
        "renderY": 6519.577746324019,
        "xv": -148.1927313293256,
        "yv": 392.9871682143761,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.6867462227468017,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9355.027472050417,
        "y": 6461.810668565657,
        "renderX": 9355.027472050417,
        "renderY": 6461.810668565657,
        "xv": 377.2979722861864,
        "yv": 184.51623264290907,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.95326138842435,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9448.609264467814,
        "y": 6581.615897445561,
        "renderX": 9448.609264467814,
        "renderY": 6581.615897445561,
        "xv": 289.08130870918785,
        "yv": 304.6834372836555,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.238457856248985,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9339.132682804542,
        "y": 6374.225608571956,
        "renderX": 9339.132682804542,
        "renderY": 6374.225608571956,
        "xv": -418.03113801465406,
        "yv": 40.619793822387194,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.6472268735135125,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9313.667912702134,
        "y": 6516.6493608517885,
        "renderX": 9313.667912702134,
        "renderY": 6516.6493608517885,
        "xv": -369.7133190981628,
        "yv": 199.27885407493702,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.368356537029413,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9349.91782004296,
        "y": 6582.077429311292,
        "renderX": 9349.91782004296,
        "renderY": 6582.077429311292,
        "xv": 84.445155283546,
        "yv": -411.4231589849286,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.426919645426106,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9382.883856289904,
        "y": 6496.469338688403,
        "renderX": 9382.883856289904,
        "renderY": 6496.469338688403,
        "xv": 403.01925936824125,
        "yv": 118.21791986951166,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.590592434437892,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9341.889881715222,
        "y": 6363.387267437218,
        "renderX": 9341.889881715222,
        "renderY": 6363.387267437218,
        "xv": -357.8405434467228,
        "yv": 219.88666504759698,
        "bound": {
            "x": 9200,
            "y": 6350,
            "w": 250,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 4.730064674842206,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9072.867412069521,
        "y": 6701.329728819983,
        "renderX": 9072.867412069521,
        "renderY": 6701.329728819983,
        "xv": -7.423405108774082,
        "yv": 419.9343913715463,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.1205064886609213,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8920.199919375838,
        "y": 6559.579806811682,
        "renderX": 8920.199919375838,
        "renderY": 6559.579806811682,
        "xv": 419.9066319257735,
        "yv": -8.855533002195667,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 6.029528715963393,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8937.01406990701,
        "y": 6556.657488706434,
        "renderX": 8937.01406990701,
        "renderY": 6556.657488706434,
        "xv": 406.5605422580603,
        "yv": 105.39698989455036,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.6116943622359132,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9098.702911196844,
        "y": 6723.086806934392,
        "renderX": 9098.702911196844,
        "renderY": 6723.086806934392,
        "xv": 362.40056292873584,
        "yv": 212.28714513350866,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.7400085594526096,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9007.558967673824,
        "y": 6496.637484697905,
        "renderX": 9007.558967673824,
        "renderY": 6496.637484697905,
        "xv": 347.01619085188173,
        "yv": 236.60042959946284,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 0.2448803232878781,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8955.976475176569,
        "y": 6536.273124211366,
        "renderX": 8955.976475176569,
        "renderY": 6536.273124211366,
        "xv": -407.46986547481947,
        "yv": 101.82489248672218,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.9850026603039845,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9117.711176979938,
        "y": 6655.463506724056,
        "renderX": 9117.711176979938,
        "renderY": 6655.463506724056,
        "xv": 169.0346726531573,
        "yv": 384.4831328433537,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 4.692445981309325,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8976.883028965654,
        "y": 6752.600772370566,
        "renderX": 8976.883028965654,
        "renderY": 6752.600772370566,
        "xv": 8.375504397138972,
        "yv": 419.9164808936338,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.0025304796906265,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 9043.018161267144,
        "y": 6499.474605023923,
        "renderX": 9043.018161267144,
        "renderY": 6499.474605023923,
        "xv": -415.9454997231642,
        "yv": 58.21804926349916,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 5.85167013477618,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8926.045590943482,
        "y": 6728.476154542914,
        "renderX": 8926.045590943482,
        "renderY": 6728.476154542914,
        "xv": 381.4998916693658,
        "yv": -175.6639765468782,
        "bound": {
            "x": 8900,
            "y": 6475,
            "w": 300,
            "h": 300
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.12592594695017,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8837.902218538162,
        "y": 6714.204271899369,
        "renderX": 8837.902218538162,
        "renderY": 6714.204271899369,
        "xv": 419.9484574578985,
        "yv": -6.579747619144064,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 5.63483086494508,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8659.73859198828,
        "y": 6777.6492511965735,
        "renderX": 8659.73859198828,
        "renderY": 6777.6492511965735,
        "xv": -334.7730075679512,
        "yv": 253.62774572965887,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 4.7676872877612615,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8615.212416973402,
        "y": 6720.870764186846,
        "renderX": 8615.212416973402,
        "renderY": 6720.870764186846,
        "xv": -23.21345412839201,
        "yv": 419.358004034058,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 3.7041423612827815,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8628.219777048645,
        "y": 6747.994675003578,
        "renderX": 8628.219777048645,
        "renderY": 6747.994675003578,
        "xv": -355.27715535498254,
        "yv": 224.004783169627,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.7394423727409314,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8835.81042624922,
        "y": 6725.513798780965,
        "renderX": 8835.81042624922,
        "renderY": 6725.513798780965,
        "xv": -70.49605832313244,
        "yv": -414.04143000538187,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.638933783158134,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8627.446929483864,
        "y": 6812.842089704853,
        "renderX": 8627.446929483864,
        "renderY": 6812.842089704853,
        "xv": -368.04798699063195,
        "yv": -202.3380321940085,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 5.200108715736337,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8820.46573234602,
        "y": 6767.903110439624,
        "renderX": 8820.46573234602,
        "renderY": 6767.903110439624,
        "xv": 196.81733986104936,
        "yv": 371.02956045309946,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 1.7093593794008732,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8818.975305078515,
        "y": 6720.837614777873,
        "renderX": 8818.975305078515,
        "renderY": 6720.837614777873,
        "xv": -58.01043476470045,
        "yv": -415.9745057793932,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 5.695579620287331,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8611.830192590634,
        "y": 6730.600964964935,
        "renderX": 8611.830192590634,
        "renderY": 6730.600964964935,
        "xv": 349.55356738548574,
        "yv": -232.83535712619056,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    },
    {
        "type": "flashlight",
        "angle": 2.3357588774366844,
        "flSize": 100,
        "flAngle": 6.283185307179586,
        "flashlightDir": 0,
        "radius": 0,
        "speed": 420,
        "x": 8750.765645492575,
        "y": 6855.2466566056755,
        "renderX": 8750.765645492575,
        "renderY": 6855.2466566056755,
        "xv": 290.8541927640175,
        "yv": -302.9914826386903,
        "bound": {
            "x": 8600,
            "y": 6700,
            "w": 300,
            "h": 250
        },
        "inView": false
    }
]

var safes = [
    {
        "x": 7975,
        "y": 6150,
        "w": 25,
        "h": 50,
        "renderAbove": false
    },
    {
        "x": 4075,
        "y": 7000,
        "w": 225,
        "h": 150,
        "renderAbove": false
    },
    {
        "x": 7650,
        "y": 9450,
        "w": 50,
        "h": 350,
        "renderAbove": false
    },
    {
        "x": 2900,
        "y": 8550,
        "w": 50,
        "h": 50,
        "renderAbove": true
    },
    {
        "x": 8600,
        "y": 6250,
        "w": 850,
        "h": 800,
        "renderAbove": false
    }
].map(p => {
    p.type = "safe";
    return p;
});

var texts = [
    {
        "x": 100,
        "y": -50,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Good Luck!",
        "angle": 0,
        "story": false
    },
    {
        "x": 3150,
        "y": -50,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Give up.",
        "angle": 0,
        "story": false
    },
    {
        "x": 4725,
        "y": 275,
        "w": 25,
        "h": 25,
        "size": 200,
        "text": "2",
        "angle": 0,
        "story": false
    },
    {
        "x": 75,
        "y": 2425,
        "w": 25,
        "h": 25,
        "size": 100,
        "text": "3",
        "angle": 0,
        "story": false
    },
    {
        "x": 400,
        "y": 6100,
        "w": 25,
        "h": 25,
        "size": 200,
        "text": "4",
        "angle": 0,
        "story": false
    },
    {
        "x": 400,
        "y": 6200,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "C or Y to grapple.",
        "angle": 0,
        "story": false
    },
    {
        "x": 4725,
        "y": 375,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Stay focused.",
        "angle": 0,
        "story": false
    },
    {
        "x": 4525,
        "y": 6425,
        "w": 25,
        "h": 25,
        "size": 100,
        "text": "5",
        "angle": 0,
        "story": false
    },
    {
        "x": 4575,
        "y": 5650,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "How's your execution?",
        "angle": 0,
        "story": false
    },
    {
        "x": 1525,
        "y": 7725,
        "w": 25,
        "h": 25,
        "size": 50,
        "text": "6",
        "angle": 0,
        "story": false
    },
    {
        "x": 450,
        "y": 9100,
        "w": 25,
        "h": 25,
        "size": 175,
        "text": "7",
        "angle": 0,
        "story": false
    },
    {
        "x": 450,
        "y": 9200,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Ready?",
        "angle": 0,
        "story": false
    },
    {
        "x": 1900,
        "y": 9750,
        "w": 25,
        "h": 25,
        "size": 35,
        "text": "Feel The Energy!",
        "angle": 0,
        "story": false
    },
    {
        "x": 4000,
        "y": 8950,
        "w": 25,
        "h": 25,
        "size": 100,
        "text": "8",
        "angle": 0,
        "story": false
    },
    {
        "x": 5887.5,
        "y": 8937.5,
        "w": 25,
        "h": 25,
        "size": 80,
        "text": "!",
        "angle": 0,
        "story": false
    },
    {
        "x": 5900,
        "y": 9975,
        "w": 25,
        "h": 25,
        "size": 25,
        "text": "!",
        "angle": 0,
        "story": false
    },
    {
        "x": 8100,
        "y": 9850,
        "w": 25,
        "h": 25,
        "size": 150,
        "text": "9",
        "angle": 0,
        "story": false
    },
    {
        "x": 8100,
        "y": 9925,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Brace yourself...",
        "angle": 0,
        "story": false
    },
    {
        "x": 5475,
        "y": 5175,
        "w": 25,
        "h": 25,
        "size": 100,
        "text": "10",
        "angle": 0,
        "story": false
    },
    {
        "x": 5475,
        "y": 5100,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Good Luck.",
        "angle": 0,
        "story": false
    },
    {
        "x": 5475,
        "y": 5250,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "You'll need it.",
        "angle": 0,
        "story": false
    },
    {
        "x": 8075,
        "y": 6275,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "Grapple!",
        "angle": 0,
        "story": false
    },
    {
        "x": 9075,
        "y": 7125,
        "w": 25,
        "h": 25,
        "size": 30,
        "text": "! Get Ready. !",
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

eval(str);

mapDimensions.x=20000;
mapDimensions.y=20000;

spawnPosition.x=100;
spawnPosition.y=100;
window.respawnPlayer();
colors.background='#383838'; colors.tile='#0d0d0d';