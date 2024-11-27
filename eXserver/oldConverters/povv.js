import shared from '../../shared/shared.js';
import '/maps/_converter.js';
{
    let counter = 10_000;

    const obs = [
        {
            "x": 9050,
            "y": 4700,
            "w": 0.001,
            "h": 0.001,
            "morphId": 1,
            "type": "morphmovereset",
            "active": true,
            "time": null,
            "timer": null,
            "resetPoint": 0,
            "inView": false
        },
        {
            "x": 4550,
            "y": 8000,
            "w": 200,
            "h": 500,
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
            "x": 4550,
            "y": 7800,
            "w": 200,
            "h": 700,
            "spawn": {
                "x": 4650,
                "y": 8150
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 5250,
            "y": 7975,
            "w": 100,
            "h": 525,
            "spawn": {
                "x": 5300,
                "y": 8237.5
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 4600,
            "w": 500,
            "h": 100,
            "type": "push",
            "dir": "up",
            "max": 400,
            "pushBack": 30,
            "startX": 8000,
            "startY": 4600,
            "pusherId": 0.9004933079280821,
            "xv": 0,
            "yv": 0,
            "pushing": false,
            "inView": false
        },
        {
            "x": 8100,
            "y": 4500,
            "w": 100,
            "h": 500,
            "type": "push",
            "dir": "left",
            "max": 400,
            "pushBack": 30,
            "startX": 8100,
            "startY": 4500,
            "pusherId": 0.5287050746740534,
            "xv": 0,
            "yv": 0,
            "pushing": false,
            "inView": false
        },
        {
            "x": 8317.453169361099,
            "y": 4882.546830638901,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8425,
                    4775
                ],
                [
                    8275,
                    4925
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8425,
                "y": 4775
            },
            "pointTo": {
                "x": 8275,
                "y": 4925
            },
            "xv": -106.06601717798212,
            "yv": 106.06601717798213,
            "inView": false
        },
        {
            "x": 8382.546830638901,
            "y": 4817.453169361099,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8425,
                    4775
                ],
                [
                    8275,
                    4925
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8275,
                "y": 4925
            },
            "pointTo": {
                "x": 8425,
                "y": 4775
            },
            "xv": 106.06601717798213,
            "yv": -106.06601717798212,
            "inView": false
        },
        {
            "x": 8132.546830638901,
            "y": 4567.453169361099,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8175,
                    4525
                ],
                [
                    8025,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8025,
                "y": 4675
            },
            "pointTo": {
                "x": 8175,
                "y": 4525
            },
            "xv": 106.06601717798213,
            "yv": -106.06601717798212,
            "inView": false
        },
        {
            "x": 8067.453169361099,
            "y": 4632.546830638901,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8175,
                    4525
                ],
                [
                    8025,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8175,
                "y": 4525
            },
            "pointTo": {
                "x": 8025,
                "y": 4675
            },
            "xv": -106.06601717798212,
            "yv": 106.06601717798213,
            "inView": false
        },
        {
            "x": 8267.453169361099,
            "y": 4682.546830638901,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8300,
                    4650
                ],
                [
                    8225,
                    4725
                ],
                [
                    8150,
                    4800
                ],
                [
                    8225,
                    4725
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8300,
                "y": 4650
            },
            "pointTo": {
                "x": 8225,
                "y": 4725
            },
            "xv": -106.06601717798212,
            "yv": 106.06601717798213,
            "inView": false
        },
        {
            "x": 8182.546830638901,
            "y": 4767.453169361099,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8300,
                    4650
                ],
                [
                    8225,
                    4725
                ],
                [
                    8150,
                    4800
                ],
                [
                    8225,
                    4725
                ]
            ],
            "speed": 150,
            "currentPoint": 2,
            "collidable": true,
            "pointOn": {
                "x": 8150,
                "y": 4800
            },
            "pointTo": {
                "x": 8225,
                "y": 4725
            },
            "xv": 106.06601717798213,
            "yv": -106.06601717798212,
            "inView": false
        },
        {
            "x": 8250,
            "y": 3750,
            "w": 0.001,
            "h": 0.001,
            "type": "tp",
            "tpx": 8050,
            "tpy": 4550,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 6500,
            "w": 500,
            "h": 500,
            "type": "timetrap",
            "time": 0,
            "maxTime": 8,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 7350,
            "y": 4050,
            "w": 250,
            "h": 100,
            "type": "grav",
            "force": 650,
            "dir": {
                "x": 0,
                "y": -650
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 7100,
            "y": 2900,
            "w": 500,
            "h": 4700,
            "type": "platformer",
            "force": 1800,
            "dir": {
                "x": 0,
                "y": 1800
            },
            "direction": "down",
            "jumpHeight": 132,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 7575,
            "y": 4125,
            "w": 25,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 5800,
            "w": 300,
            "h": 100,
            "type": "grav",
            "force": 650,
            "dir": {
                "x": 0,
                "y": -650
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 7200,
            "y": 5425,
            "w": 300,
            "h": 100,
            "type": "grav",
            "force": 650,
            "dir": {
                "x": 0,
                "y": -650
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 7150,
            "y": 5100,
            "w": 400,
            "h": 100,
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
            "x": 7100,
            "y": 4500,
            "w": 25,
            "h": 325,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7575,
            "y": 4475,
            "w": 25,
            "h": 325,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6950,
            "y": 7100,
            "w": 150,
            "h": 500,
            "type": "grav",
            "force": 3400,
            "dir": {
                "x": 0,
                "y": 3400
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 6950,
            "y": 7100,
            "w": 150,
            "h": 500,
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
            "x": 6950,
            "y": 7100,
            "w": 150,
            "h": 500,
            "spawn": {
                "x": 7025,
                "y": 7350
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    5100
                ],
                [
                    7200,
                    5300
                ],
                [
                    7150,
                    5225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7150,
                "right": 7200,
                "top": 5100,
                "bottom": 5300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7550,
                    5100
                ],
                [
                    7550,
                    5225
                ],
                [
                    7500,
                    5300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7500,
                "right": 7550,
                "top": 5100,
                "bottom": 5300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7200,
                    5425
                ],
                [
                    7300,
                    5487.5
                ],
                [
                    7200,
                    5550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7200,
                "right": 7300,
                "top": 5425,
                "bottom": 5550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    5425
                ],
                [
                    7500,
                    5550
                ],
                [
                    7400,
                    5487.5
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7400,
                "right": 7500,
                "top": 5425,
                "bottom": 5550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7122.423796984881,
            "y": 7077.576203015119,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    7100,
                    7100
                ],
                [
                    7100,
                    7450
                ],
                [
                    7400,
                    7125
                ],
                [
                    7400,
                    6800
                ]
            ],
            "speed": 222,
            "currentPoint": 3,
            "pointOn": {
                "x": 7400,
                "y": 6800
            },
            "pointTo": {
                "x": 7100,
                "y": 7100
            },
            "xv": -156.97770542341354,
            "yv": 156.97770542341357,
            "inView": false
        },
        {
            "x": 7361.533353164048,
            "y": 7166.672200739011,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    7100,
                    7100
                ],
                [
                    7100,
                    7450
                ],
                [
                    7400,
                    7125
                ],
                [
                    7400,
                    6800
                ]
            ],
            "speed": 222,
            "currentPoint": 1,
            "pointOn": {
                "x": 7100,
                "y": 7450
            },
            "pointTo": {
                "x": 7400,
                "y": 7125
            },
            "xv": 150.5781828067406,
            "yv": -163.12636470730232,
            "inView": false
        },
        {
            "x": 7141.092319775782,
            "y": 7405.483320242913,
            "w": 150,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    7100,
                    7100
                ],
                [
                    7100,
                    7450
                ],
                [
                    7400,
                    7125
                ],
                [
                    7400,
                    6800
                ]
            ],
            "speed": 222,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 7100,
                "y": 7450
            },
            "pointTo": {
                "x": 7400,
                "y": 7125
            },
            "xv": 150.5781828067406,
            "yv": -163.12636470730232,
            "inView": false
        },
        {
            "x": 7369.911170400183,
            "y": 6830.088829599817,
            "w": 150,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    7100,
                    7100
                ],
                [
                    7100,
                    7450
                ],
                [
                    7400,
                    7125
                ],
                [
                    7400,
                    6800
                ]
            ],
            "speed": 222,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 7400,
                "y": 6800
            },
            "pointTo": {
                "x": 7100,
                "y": 7100
            },
            "xv": -156.97770542341354,
            "yv": 156.97770542341357,
            "inView": false
        },
        {
            "points": [
                [
                    7450,
                    6050
                ],
                [
                    7425,
                    6175
                ],
                [
                    7350,
                    6225
                ],
                [
                    7375,
                    6075
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 7350,
                "right": 7450,
                "top": 6050,
                "bottom": 6225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7250,
                    6050
                ],
                [
                    7325,
                    6075
                ],
                [
                    7350,
                    6225
                ],
                [
                    7275,
                    6175
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 7250,
                "right": 7350,
                "top": 6050,
                "bottom": 6225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7520.211579910236,
            "y": 6385.105789955118,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7550,
                    6400
                ],
                [
                    7450,
                    6350
                ]
            ],
            "speed": 84,
            "currentPoint": 1,
            "pointOn": {
                "x": 7450,
                "y": 6350
            },
            "pointTo": {
                "x": 7550,
                "y": 6400
            },
            "xv": 75.13188404399293,
            "yv": 37.56594202199646,
            "inView": false
        },
        {
            "x": 7479.788420089764,
            "y": 6364.894210044882,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7550,
                    6400
                ],
                [
                    7450,
                    6350
                ]
            ],
            "speed": 84,
            "currentPoint": 0,
            "pointOn": {
                "x": 7550,
                "y": 6400
            },
            "pointTo": {
                "x": 7450,
                "y": 6350
            },
            "xv": -75.13188404399293,
            "yv": -37.56594202199648,
            "inView": false
        },
        {
            "x": 7479.788420089764,
            "y": 6285.105789955118,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7550,
                    6250
                ],
                [
                    7450,
                    6300
                ]
            ],
            "speed": 84,
            "currentPoint": 0,
            "pointOn": {
                "x": 7550,
                "y": 6250
            },
            "pointTo": {
                "x": 7450,
                "y": 6300
            },
            "xv": -75.13188404399293,
            "yv": 37.56594202199648,
            "inView": false
        },
        {
            "x": 7520.211579910236,
            "y": 6264.894210044882,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7550,
                    6250
                ],
                [
                    7450,
                    6300
                ]
            ],
            "speed": 84,
            "currentPoint": 1,
            "pointOn": {
                "x": 7450,
                "y": 6300
            },
            "pointTo": {
                "x": 7550,
                "y": 6250
            },
            "xv": 75.13188404399293,
            "yv": -37.56594202199646,
            "inView": false
        },
        {
            "x": 7390.1324440271055,
            "y": 6540.1324440271055,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7200,
                    6350
                ],
                [
                    7400,
                    6550
                ]
            ],
            "speed": 163,
            "currentPoint": 1,
            "pointOn": {
                "x": 7400,
                "y": 6550
            },
            "pointTo": {
                "x": 7200,
                "y": 6350
            },
            "xv": -115.25840533340724,
            "yv": -115.25840533340725,
            "inView": false
        },
        {
            "x": 7209.8675559728945,
            "y": 6359.8675559728945,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7200,
                    6350
                ],
                [
                    7400,
                    6550
                ]
            ],
            "speed": 163,
            "currentPoint": 0,
            "pointOn": {
                "x": 7200,
                "y": 6350
            },
            "pointTo": {
                "x": 7400,
                "y": 6550
            },
            "xv": 115.25840533340725,
            "yv": 115.25840533340724,
            "inView": false
        },
        {
            "x": 8500,
            "y": 3000,
            "r": 65,
            "tpx": 8250,
            "tpy": 3950,
            "type": "circle-tp",
            "renderType": "circleR",
            "radius": 65,
            "inView": false
        },
        {
            "x": 9000,
            "y": 4150,
            "w": 100,
            "h": 100,
            "type": "speed",
            "speedInc": 0.5,
            "inView": false
        },
        {
            "x": 8900,
            "y": 2200,
            "w": 300,
            "h": 1525,
            "type": "size",
            "size": 20.5,
            "inView": false
        },
        {
            "x": 8875.208333321838,
            "y": 2750,
            "w": 25,
            "h": 300,
            "type": "lavamove",
            "points": [
                [
                    8875,
                    2750
                ],
                [
                    8900,
                    2750
                ]
            ],
            "speed": 25,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8900,
                "y": 2750
            },
            "pointTo": {
                "x": 8875,
                "y": 2750
            },
            "xv": -25,
            "yv": 3.061616997868383e-15,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3900
                ],
                [
                    9000,
                    4000
                ],
                [
                    8900,
                    4100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 3900,
                "bottom": 4100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9175,
            "y": 4175,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 8900,
            "y": 4175,
            "w": 25,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 8000,
            "y": 8000,
            "w": 500,
            "h": 500,
            "type": "ship",
            "state": true,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 8000,
            "y": 8000,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 8250,
                "y": 8250
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 8000,
            "w": 500,
            "h": 500,
            "type": "zone",
            "value": 13,
            "inView": false
        },
        {
            "x": 8500,
            "y": 1075,
            "w": 400,
            "h": 7800,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 8925,
            "y": 1775,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9150,
            "y": 1775,
            "w": 25,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    1800
                ],
                [
                    9000,
                    1900
                ],
                [
                    8900,
                    2000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 1800,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    1825
                ],
                [
                    8975,
                    1900
                ],
                [
                    8900,
                    1975
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 8975,
                "top": 1825,
                "bottom": 1975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    1800
                ],
                [
                    9200,
                    2000
                ],
                [
                    9100,
                    1900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 1800,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    1825
                ],
                [
                    9200,
                    1975
                ],
                [
                    9125,
                    1900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9125,
                "right": 9200,
                "top": 1825,
                "bottom": 1975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9175.208333321838,
            "y": 2750,
            "w": 25,
            "h": 300,
            "type": "lavamove",
            "points": [
                [
                    9175,
                    2750
                ],
                [
                    9200,
                    2750
                ]
            ],
            "speed": 25,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 9200,
                "y": 2750
            },
            "pointTo": {
                "x": 9175,
                "y": 2750
            },
            "xv": -25,
            "yv": 3.061616997868383e-15,
            "inView": false
        },
        {
            "x": 8900,
            "y": 3175,
            "w": 25,
            "h": 325,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9175,
            "y": 3175,
            "w": 25,
            "h": 325,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 8950,
            "y": 3100,
            "w": 200,
            "h": 575,
            "type": "snap",
            "snapDistance": 50,
            "snapWait": 0.2,
            "snapX": true,
            "snapY": false,
            "inView": false
        },
        {
            "x": 8925,
            "y": 1500,
            "w": 250,
            "h": 50,
            "type": "bounce",
            "effect": 120,
            "inView": false
        },
        {
            "x": 8900,
            "y": 5850,
            "w": 300,
            "h": 350,
            "type": "raxis",
            "rx": true,
            "ry": true,
            "inView": false
        },
        {
            "x": 8900,
            "y": 5150,
            "w": 300,
            "h": 1050,
            "type": "vinette",
            "ir": 0.25,
            "or": 0.75,
            "o": 0.5,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 8950,
            "y": 5950,
            "w": 200,
            "h": 200,
            "morphId": 0,
            "type": "morphbutton",
            "active": true,
            "maxTimedObstacles": 1,
            "timedObstacles": 0,
            "inView": false
        },
        {
            "x": 8900,
            "y": 5900,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 9050,
                "y": 6050
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8925,
            "y": 5925,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 9,
            "inView": false
        },
        {
            "x": 8925,
            "y": 6175,
            "w": 250,
            "h": 50,
            "type": "tp",
            "tpx": 9050,
            "tpy": 6050,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8900,
            "y": 4800,
            "w": 300,
            "h": 400,
            "type": "size",
            "size": 17.6069588515,
            "inView": false
        },
        {
            "x": 9000,
            "y": 1600,
            "w": 100,
            "h": 100,
            "morphId": 1,
            "type": "morphbutton",
            "active": true,
            "maxTimedObstacles": 1,
            "timedObstacles": 0,
            "inView": false
        },
        {
            "x": 8900,
            "y": 4550,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 9050,
                "y": 4700
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    4700
                ],
                [
                    9202,
                    4800
                ],
                [
                    9075,
                    4850
                ]
            ],
            "type": "poly-tp",
            "tpx": 9050,
            "tpy": 4225,
            "most": {
                "left": 9075,
                "right": 9202,
                "top": 4700,
                "bottom": 4850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    4700
                ],
                [
                    9025,
                    4850
                ],
                [
                    8900,
                    4800
                ]
            ],
            "type": "poly-tp",
            "tpx": 9050,
            "tpy": 4225,
            "most": {
                "left": 8900,
                "right": 9025,
                "top": 4700,
                "bottom": 4850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9000,
            "y": 4150,
            "w": 100,
            "h": 100,
            "morphId": 1,
            "type": "morphbutton",
            "active": true,
            "maxTimedObstacles": 1,
            "timedObstacles": 0,
            "inView": false
        },
        {
            "x": 5000,
            "y": 2400,
            "w": 300,
            "h": 500,
            "type": "tornado",
            "spinRadius": 5,
            "inView": false
        },
        {
            "x": 6525,
            "y": 2400,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 21,
            "active": true,
            "inView": false
        },
        {
            "x": 6525,
            "y": 2750,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 21,
            "active": true,
            "inView": false
        },
        {
            "x": 6125,
            "y": 2750,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 22,
            "active": true,
            "inView": false
        },
        {
            "x": 6125,
            "y": 2400,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 22,
            "active": true,
            "inView": false
        },
        {
            "x": 5725,
            "y": 2400,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 23,
            "active": true,
            "inView": false
        },
        {
            "x": 5725,
            "y": 2750,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 23,
            "active": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 2750,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 24,
            "active": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 2400,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 24,
            "active": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 3100,
            "w": 500,
            "h": 350,
            "type": "grav",
            "force": 800,
            "dir": {
                "x": 0,
                "y": 800
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 7050,
            "y": 3050,
            "w": 600,
            "h": 400,
            "type": "tptrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 7350,
            "tpy": 2650,
            "inView": false
        },
        {
            "x": 7100,
            "y": 3100,
            "w": 500,
            "h": 350,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 7475,
            "y": 3750,
            "w": 750,
            "h": 100,
            "type": "rotate-lava",
            "angle": 9520.616666664913,
            "rotateSpeed": 62,
            "pivotX": 7475,
            "pivotY": 3750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 378.3186487605389,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7475,
            "y": 3750,
            "w": 750,
            "h": 100,
            "type": "rotate-lava",
            "angle": 9610.61666666487,
            "rotateSpeed": 62,
            "pivotX": 7475,
            "pivotY": 3750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 378.3186487605389,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7125,
            "y": 5525,
            "w": 75,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 5525,
            "w": 75,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7450,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 7350,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 7250,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 7150,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 7100,
            "y": 4200,
            "w": 50,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 4225,
            "w": 50,
            "h": 225,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1225,
            "y": 2775,
            "w": 70,
            "h": 435,
            "type": "rotate-lava",
            "angle": 8855.987142856728,
            "rotateSpeed": 57.0857142857,
            "pivotX": 1225,
            "pivotY": 2775,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 220.29809350060205,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2900,
            "y": 7100,
            "w": 1850,
            "h": 500,
            "type": "grav",
            "force": 1920,
            "dir": {
                "x": -1920,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 2900,
            "y": 7100,
            "w": 1850,
            "h": 500,
            "type": "platformer",
            "force": 2780,
            "dir": {
                "x": 0,
                "y": 2780
            },
            "direction": "down",
            "jumpHeight": 152,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 2900,
            "y": 7100,
            "w": 1850,
            "h": 500,
            "type": "raxis",
            "rx": true,
            "ry": false,
            "inView": false
        },
        {
            "x": 3825,
            "y": 7350,
            "w": 1850,
            "h": 500,
            "type": "rotate-lava",
            "angle": 0,
            "rotateSpeed": 0,
            "pivotX": 3825,
            "pivotY": 7350,
            "distToPivot": 0,
            "canCollide": false,
            "renderType": "rotating",
            "cullingRadius": 958.18839483684,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4650,
            "y": 7425,
            "w": 100,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4725,
            "y": 9200,
            "w": 600,
            "h": 300,
            "type": "color",
            "bgColor": "#926e03",
            "tileColor": "#c39e22",
            "inView": false
        },
        {
            "points": [
                [
                    4525,
                    8250
                ],
                [
                    4575,
                    8250
                ],
                [
                    4525,
                    8275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4525,
                "right": 4575,
                "top": 8250,
                "bottom": 8275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4350,
                    8325
                ],
                [
                    4400,
                    8350
                ],
                [
                    4350,
                    8350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4350,
                "right": 4400,
                "top": 8325,
                "bottom": 8350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4325,
                    8150
                ],
                [
                    4375,
                    8150
                ],
                [
                    4325,
                    8175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4325,
                "right": 4375,
                "top": 8150,
                "bottom": 8175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4650,
            "y": 6875,
            "w": 100,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6050,
            "y": 7100,
            "w": 100,
            "h": 500,
            "type": "timetrap",
            "time": 0,
            "maxTime": 8,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 6150,
            "y": 7100,
            "w": 800,
            "h": 500,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 6665.654166674713,
            "y": 7450,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6750,
                    7450
                ],
                [
                    6150,
                    7450
                ],
                [
                    6350,
                    7450
                ]
            ],
            "speed": 161.5,
            "currentPoint": 2,
            "pointOn": {
                "x": 6350,
                "y": 7450
            },
            "pointTo": {
                "x": 6750,
                "y": 7450
            },
            "xv": 161.5,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6434.345833325287,
            "y": 7100,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7100
                ],
                [
                    6750,
                    7100
                ]
            ],
            "speed": 161.5,
            "currentPoint": 1,
            "pointOn": {
                "x": 6750,
                "y": 7100
            },
            "pointTo": {
                "x": 6150,
                "y": 7100
            },
            "xv": -161.5,
            "yv": 1.9778045806229755e-14,
            "inView": false
        },
        {
            "x": 6281.453333327356,
            "y": 7275,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6750,
                    7275
                ],
                [
                    6350,
                    7275
                ],
                [
                    6150,
                    7275
                ]
            ],
            "speed": 161.6,
            "currentPoint": 2,
            "pointOn": {
                "x": 6150,
                "y": 7275
            },
            "pointTo": {
                "x": 6750,
                "y": 7275
            },
            "xv": 161.6,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4700,
            "y": 2400,
            "w": 600,
            "h": 500,
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
            "x": 4400,
            "y": 2400,
            "w": 500,
            "h": 500,
            "type": "switchlava",
            "onTime": 1,
            "offTime": 5,
            "state": false,
            "timer": 3.0083333333323408,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3900,
            "y": 2400,
            "w": 500,
            "h": 500,
            "type": "switchlava",
            "onTime": 1,
            "offTime": 5,
            "state": true,
            "timer": 0.5083333333323915,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3400,
            "y": 2400,
            "w": 500,
            "h": 500,
            "type": "switchlava",
            "onTime": 1,
            "offTime": 5,
            "state": false,
            "timer": 3.0083333333323408,
            "collidable": true,
            "inView": false
        },
        {
            "x": 2900,
            "y": 2400,
            "w": 500,
            "h": 500,
            "type": "switchlava",
            "onTime": 1,
            "offTime": 5,
            "state": true,
            "timer": 0.5083333333323915,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3400,
            "y": 2650,
            "radius": 50,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3900,
            "y": 2650,
            "radius": 50,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4400,
            "y": 2650,
            "radius": 50,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4700,
            "y": 2600,
            "w": 300,
            "h": 300,
            "type": "coindoor",
            "coins": 6,
            "currentCoins": 6,
            "inView": false
        },
        {
            "x": 5300,
            "y": 2400,
            "w": 1800,
            "h": 500,
            "type": "size",
            "size": 49.5,
            "inView": false
        },
        {
            "x": 3300,
            "y": 3300,
            "w": 400,
            "h": 3400,
            "type": "platformer",
            "force": 3200,
            "dir": {
                "x": 0,
                "y": 3200
            },
            "direction": "down",
            "jumpHeight": 148,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 3600,
            "y": 5800,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 3400,
            "y": 5800,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "points": [
                [
                    3400,
                    5850
                ],
                [
                    3600,
                    5850
                ],
                [
                    3500,
                    6100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3400,
                "right": 3600,
                "top": 5850,
                "bottom": 6100
            },
            "renderType": "poly",
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
                    6250
                ],
                [
                    3300,
                    6300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3300,
                "right": 3400,
                "top": 6200,
                "bottom": 6300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2050,
            "y": 8050,
            "w": 2600,
            "h": 400,
            "type": "snap",
            "snapDistance": 100,
            "snapWait": 0.36,
            "snapX": true,
            "snapY": true,
            "inView": false
        },
        {
            "points": [
                [
                    4525,
                    8225
                ],
                [
                    4650,
                    8225
                ],
                [
                    4675,
                    8250
                ],
                [
                    4650,
                    8275
                ],
                [
                    4525,
                    8275
                ],
                [
                    4500,
                    8250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4500,
                "right": 4675,
                "top": 8225,
                "bottom": 8275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4250,
                    8325
                ],
                [
                    4375,
                    8325
                ],
                [
                    4400,
                    8350
                ],
                [
                    4375,
                    8375
                ],
                [
                    4250,
                    8375
                ],
                [
                    4225,
                    8350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4225,
                "right": 4400,
                "top": 8325,
                "bottom": 8375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4250,
                    8125
                ],
                [
                    4375,
                    8125
                ],
                [
                    4400,
                    8150
                ],
                [
                    4375,
                    8175
                ],
                [
                    4250,
                    8175
                ],
                [
                    4225,
                    8150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4225,
                "right": 4400,
                "top": 8125,
                "bottom": 8175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3950,
                    8225
                ],
                [
                    4075,
                    8225
                ],
                [
                    4100,
                    8250
                ],
                [
                    4075,
                    8275
                ],
                [
                    3950,
                    8275
                ],
                [
                    3925,
                    8250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3925,
                "right": 4100,
                "top": 8225,
                "bottom": 8275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6300,
            "y": 3300,
            "w": 400,
            "h": 3400,
            "type": "grav",
            "force": 3800,
            "dir": {
                "x": 0,
                "y": 3800
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 8000,
            "y": 7500,
            "w": 500,
            "h": 500,
            "type": "size",
            "size": 12.25,
            "inView": false
        },
        {
            "x": 8000,
            "y": 7500,
            "w": 500,
            "h": 450,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 8000,
            "y": 7500,
            "w": 500,
            "h": 500,
            "type": "speed",
            "speedInc": 0.48,
            "inView": false
        },
        {
            "x": 8000,
            "y": 7500,
            "w": 500,
            "h": 500,
            "type": "grav",
            "force": 1200,
            "dir": {
                "x": 0,
                "y": 1200
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 8400,
            "y": 7500,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 8450,
                "y": 7525
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2400,
            "y": 2900,
            "w": 500,
            "h": 4200,
            "type": "timetrap",
            "time": 0,
            "maxTime": 8,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 2400,
            "y": 2900,
            "w": 500,
            "h": 4200,
            "type": "speed",
            "speedInc": 2.2,
            "inView": false
        },
        {
            "x": 2375,
            "y": 4200,
            "w": 75,
            "h": 175,
            "type": "tp",
            "tpx": 2650,
            "tpy": 4100,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2600,
            "y": 5650,
            "w": 100,
            "h": 150,
            "type": "speed",
            "speedInc": 0.5,
            "inView": false
        },
        {
            "x": 2600,
            "y": 5550,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 2425,
            "tpy": 5000,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 2600,
            "y": 5580,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": false
        },
        {
            "x": 2650,
            "y": 6050,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.511676116405342,
            "startPolygon": {
                "points": [
                    [
                        2400,
                        6050
                    ],
                    [
                        2350,
                        6050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2600.1580163957005,
                        5805.018823844793
                    ],
                    [
                        2590.1896196748407,
                        5756.022588613751
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
            "x": 2650,
            "y": 6050,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 4.9131018443640375,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        2699.8419836042995,
                        5805.018823844793
                    ],
                    [
                        2709.8103803251593,
                        5756.022588613751
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2900,
                        6050
                    ],
                    [
                        2950,
                        6050
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
            "x": 2650,
            "y": 6050,
            "radius": 200,
            "type": "circle-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        2650,
                        6050
                    ],
                    [
                        2450,
                        6050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2650,
                        6050
                    ],
                    [
                        2850,
                        6050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2400,
            "y": 2400,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 2650,
                "y": 2650
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2400,
            "y": 7100,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 2650,
                "y": 7350
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    6300,
                    6050
                ],
                [
                    6450,
                    6050
                ],
                [
                    6300,
                    6300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6300,
                "right": 6450,
                "top": 6050,
                "bottom": 6300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    6100
                ],
                [
                    6700,
                    6300
                ],
                [
                    6525,
                    6350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6525,
                "right": 6700,
                "top": 6100,
                "bottom": 6350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6700,
            "y": 6700,
            "r": 400,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 400,
            "inView": false
        },
        {
            "x": 6300,
            "y": 5900,
            "r": 275,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 275,
            "inView": false
        },
        {
            "x": 6700,
            "y": 6700,
            "r": 400,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 400,
            "inView": false
        },
        {
            "x": 7100,
            "y": 2400,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 7350,
                "y": 2650
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 7100,
            "y": 4800,
            "w": 500,
            "h": 300,
            "spawn": {
                "x": 7350,
                "y": 4950
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 4750,
            "y": 7600,
            "w": 500,
            "h": 900,
            "type": "grav",
            "force": 200,
            "dir": {
                "x": 0,
                "y": -200
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 5350,
            "y": 8000,
            "w": 2650,
            "h": 500,
            "type": "grav",
            "force": 3860,
            "dir": {
                "x": 0,
                "y": 3860
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 5800,
            "y": 8000,
            "w": 75,
            "h": 150,
            "type": "grav",
            "force": 1600,
            "dir": {
                "x": 1600,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 5700,
            "y": 8051.25,
            "w": 100,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    5700,
                    7950
                ],
                [
                    5700,
                    8300
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 5700,
                "y": 8300
            },
            "pointTo": {
                "x": 5700,
                "y": 7950
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 5450,
            "y": 8000,
            "w": 150,
            "h": 500,
            "type": "grav",
            "force": 3400,
            "dir": {
                "x": -3400,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 5450,
            "y": 8350,
            "w": 125,
            "h": 50,
            "type": "bounce",
            "effect": 60,
            "inView": false
        },
        {
            "x": 6500,
            "y": 8450,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 5600,
            "y": 8101.25,
            "w": 200,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5600,
                    8000
                ],
                [
                    5600,
                    8350
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5600,
                "y": 8350
            },
            "pointTo": {
                "x": 5600,
                "y": 8000
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 8000,
            "y": 8000,
            "radius": 400,
            "type": "circle-slice",
            "startAngle": 0,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        8000,
                        8000
                    ],
                    [
                        8400,
                        8000
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8000,
                        8000
                    ],
                    [
                        7600,
                        8000
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5000,
            "y": 8250,
            "radius": 350,
            "type": "circle-hollow-slice",
            "startAngle": 148.1010772308089,
            "endAngle": 143.3886882504182,
            "startPolygon": {
                "points": [
                    [
                        4774.479062231748,
                        8142.109747297877
                    ],
                    [
                        4684.270687124446,
                        8098.953646217027
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        5107.890252700768,
                        8024.479062231099
                    ],
                    [
                        5151.046353781076,
                        7934.270687123539
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": true,
            "rotateSpeed": 0.9075712110370514,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5000,
            "y": 8250,
            "radius": 350,
            "type": "circle-hollow-slice",
            "startAngle": 144.95948457721508,
            "endAngle": 146.530280904012,
            "startPolygon": {
                "points": [
                    [
                        5225.520937768687,
                        8357.890252701216
                    ],
                    [
                        5315.729312876161,
                        8401.046353781701
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4892.109747298331,
                        8475.52093776847
                    ],
                    [
                        4848.953646217663,
                        8565.729312875857
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 250,
            "toRotate": true,
            "rotateSpeed": 0.9075712110370514,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8000,
            "y": 7500,
            "w": 100,
            "h": 50,
            "spawn": {
                "x": 8050,
                "y": 7525
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8299.791666678162,
            "y": 7550,
            "w": 50,
            "h": 400,
            "type": "lavamove",
            "points": [
                [
                    8250,
                    7550
                ],
                [
                    8300,
                    7550
                ]
            ],
            "speed": 25,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8250,
                "y": 7550
            },
            "pointTo": {
                "x": 8300,
                "y": 7550
            },
            "xv": 25,
            "yv": 0,
            "inView": false
        },
        {
            "x": 8300,
            "y": 7475,
            "w": 100,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8199.791666663648,
            "y": 7550,
            "w": 50,
            "h": 400,
            "type": "lavamove",
            "points": [
                [
                    8150,
                    7550
                ],
                [
                    8200,
                    7550
                ]
            ],
            "speed": 25,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8150,
                "y": 7550
            },
            "pointTo": {
                "x": 8200,
                "y": 7550
            },
            "xv": 25,
            "yv": 0,
            "inView": false
        },
        {
            "x": 8175,
            "y": 7950,
            "w": 125,
            "h": 50,
            "type": "tp",
            "tpx": 8450,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 7950,
            "w": 125,
            "h": 50,
            "type": "tp",
            "tpx": 8250,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 5600,
            "w": 500,
            "h": 300,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 1425,
            "y": 5150,
            "w": 150,
            "h": 150,
            "tpx": 5175,
            "tpy": 4825,
            "type": "rotate-tp",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 1425,
            "pivotY": 5150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4500,
            "y": 800,
            "w": 1000,
            "h": 700,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 8000,
            "y": 1500,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 8250,
                "y": 1750
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1500,
            "y": 2000,
            "w": 500,
            "h": 6000,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": 2600
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 6150,
            "y": 1650,
            "w": 700,
            "h": 200,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 6150,
            "y": 1650,
            "w": 700,
            "h": 200,
            "type": "breakable",
            "maxStrength": 28,
            "currentStrength": 28,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5500,
            "y": 1950,
            "w": 150,
            "h": 50,
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
            "x": 7150,
            "y": 1500,
            "w": 700,
            "h": 500,
            "type": "vinette",
            "ir": 0.25,
            "or": 0.65,
            "o": 1,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 7850,
            "y": 1650,
            "w": 150,
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
            "x": 7850,
            "y": 1675,
            "w": 150,
            "h": 150,
            "type": "cure",
            "inView": false
        },
        {
            "x": 6150,
            "y": 1295.1000000017243,
            "w": 700,
            "h": 350,
            "type": "lavamove",
            "points": [
                [
                    6150,
                    1150
                ],
                [
                    6150,
                    1500
                ]
            ],
            "speed": 132,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6150,
                "y": 1500
            },
            "pointTo": {
                "x": 6150,
                "y": 1150
            },
            "xv": 8.082668874372531e-15,
            "yv": -132,
            "inView": false
        },
        {
            "x": 6150,
            "y": 1795.1000000017243,
            "w": 700,
            "h": 350,
            "type": "lavamove",
            "points": [
                [
                    6150,
                    1650
                ],
                [
                    6150,
                    2000
                ]
            ],
            "speed": 132,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6150,
                "y": 2000
            },
            "pointTo": {
                "x": 6150,
                "y": 1650
            },
            "xv": 8.082668874372531e-15,
            "yv": -132,
            "inView": false
        },
        {
            "x": 6850,
            "y": 1500,
            "w": 150,
            "h": 150,
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
            "x": 5850,
            "y": 1500,
            "w": 150,
            "h": 150,
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
            "x": 5650,
            "y": 2009,
            "w": 200,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5650,
                    2050
                ],
                [
                    5650,
                    1950
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5650,
                "y": 1950
            },
            "pointTo": {
                "x": 5650,
                "y": 2050
            },
            "xv": 7.34788079488412e-15,
            "yv": 120,
            "inView": false
        },
        {
            "x": 5650,
            "y": 1441,
            "w": 200,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5650,
                    1400
                ],
                [
                    5650,
                    1500
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5650,
                "y": 1500
            },
            "pointTo": {
                "x": 5650,
                "y": 1400
            },
            "xv": 7.34788079488412e-15,
            "yv": -120,
            "inView": false
        },
        {
            "x": 2150,
            "y": 1500,
            "w": 1700,
            "h": 500,
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
            "x": 4350,
            "y": 1850,
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
            "x": 1500,
            "y": 8000,
            "w": 500,
            "h": 500,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 2150,
            "y": 1500,
            "w": 1700,
            "h": 500,
            "type": "raxis",
            "rx": true,
            "ry": false,
            "inView": false
        },
        {
            "points": [
                [
                    2150,
                    1750
                ],
                [
                    2200,
                    1800
                ],
                [
                    2150,
                    1850
                ],
                [
                    2100,
                    1800
                ]
            ],
            "type": "poly-tp",
            "tpx": 3775,
            "tpy": 1575,
            "most": {
                "left": 2100,
                "right": 2200,
                "top": 1750,
                "bottom": 1850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2500,
            "y": 1960,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3850,
            "y": 1500,
            "w": 500,
            "h": 500,
            "type": "timetrap",
            "time": 0,
            "maxTime": 9,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 3737.5,
            "y": 1537.5,
            "w": 75,
            "h": 75,
            "type": "ship",
            "state": false,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 4225,
            "y": 1625,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4050,
            "y": 1800,
            "radius": 450,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        4050,
                        1500
                    ],
                    [
                        4050,
                        1350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        4350,
                        1800
                    ],
                    [
                        4500,
                        1800
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
            "x": 3975,
            "y": 1875,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4150,
            "y": 1700,
            "radius": 450,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        4150,
                        2000
                    ],
                    [
                        4150,
                        2150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3850,
                        1700
                    ],
                    [
                        3700,
                        1700
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
            "x": 5000,
            "y": 1500,
            "w": 500,
            "h": 500,
            "type": "grav",
            "force": 4200,
            "dir": {
                "x": 4200,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 4500,
            "y": 1500,
            "w": 500,
            "h": 500,
            "type": "grav",
            "force": 4200,
            "dir": {
                "x": -4200,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 4500,
            "y": 1500,
            "w": 1000,
            "h": 500,
            "type": "grav",
            "force": 4200,
            "dir": {
                "x": 0,
                "y": 4200
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3400,
            "y": 1700,
            "radius": 450,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        3700,
                        1700
                    ],
                    [
                        3850,
                        1700
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3400,
                        2000
                    ],
                    [
                        3400,
                        2150
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
            "x": 2450,
            "y": 1800,
            "radius": 450,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        2150,
                        1800
                    ],
                    [
                        2000,
                        1800
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2450,
                        1500
                    ],
                    [
                        2450,
                        1350
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
            "x": 8900,
            "y": 6750,
            "w": 300,
            "h": 300,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 9050,
            "y": 6425,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "x": 5850,
            "y": 950,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 5500,
            "y": 850,
            "w": 250,
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
            "x": 5700,
            "y": 676.25,
            "w": 275,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    5700,
                    525
                ],
                [
                    5700,
                    750
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5700,
                "y": 750
            },
            "pointTo": {
                "x": 5700,
                "y": 525
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 5700,
            "y": 1023.75,
            "w": 275,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    5700,
                    1175
                ],
                [
                    5700,
                    950
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5700,
                "y": 950
            },
            "pointTo": {
                "x": 5700,
                "y": 1175
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 7623.75,
            "y": 925,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    7425,
                    925
                ],
                [
                    7675,
                    925
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 7425,
                "y": 925
            },
            "pointTo": {
                "x": 7675,
                "y": 925
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7623.75,
            "y": 975,
            "w": 50,
            "h": 125,
            "type": "lavamove",
            "points": [
                [
                    7425,
                    975
                ],
                [
                    7675,
                    975
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 7425,
                "y": 975
            },
            "pointTo": {
                "x": 7675,
                "y": 975
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7623.75,
            "y": 800,
            "w": 50,
            "h": 125,
            "type": "lavamove",
            "points": [
                [
                    7425,
                    800
                ],
                [
                    7675,
                    800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 7425,
                "y": 800
            },
            "pointTo": {
                "x": 7675,
                "y": 800
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6050,
            "y": 825,
            "w": 650,
            "h": 250,
            "type": "size",
            "size": 18,
            "inView": false
        },
        {
            "x": 6400,
            "y": 800,
            "w": 300,
            "h": 300,
            "type": "snap",
            "snapDistance": 25,
            "snapWait": 0.35,
            "snapX": true,
            "snapY": true,
            "inView": false
        },
        {
            "x": 6625,
            "y": 875,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6625,
            "y": 975,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6425,
            "y": 875,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6425,
            "y": 975,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6525,
            "y": 825,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6525,
            "y": 1025,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6750,
            "y": 960.875,
            "w": 300,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6750,
                    800
                ],
                [
                    6750,
                    1050
                ]
            ],
            "speed": 105,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6750,
                "y": 1050
            },
            "pointTo": {
                "x": 6750,
                "y": 800
            },
            "xv": 6.429395695523604e-15,
            "yv": -105,
            "inView": false
        },
        {
            "x": 6050,
            "y": 825,
            "w": 300,
            "h": 250,
            "type": "timetrap",
            "time": 0,
            "maxTime": 4,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "points": [
                [
                    6375,
                    1000
                ],
                [
                    6525,
                    1100
                ],
                [
                    6225,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6225,
                "right": 6525,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    800
                ],
                [
                    6250,
                    825
                ],
                [
                    6200,
                    850
                ],
                [
                    6150,
                    825
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6150,
                "right": 6250,
                "top": 800,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    1050
                ],
                [
                    6250,
                    1075
                ],
                [
                    6200,
                    1100
                ],
                [
                    6150,
                    1075
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6150,
                "right": 6250,
                "top": 1050,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6125,
                    825
                ],
                [
                    6175,
                    850
                ],
                [
                    6125,
                    875
                ],
                [
                    6075,
                    850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6075,
                "right": 6175,
                "top": 825,
                "bottom": 875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6275,
                    825
                ],
                [
                    6325,
                    850
                ],
                [
                    6275,
                    875
                ],
                [
                    6225,
                    850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6225,
                "right": 6325,
                "top": 825,
                "bottom": 875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6275,
                    1025
                ],
                [
                    6325,
                    1050
                ],
                [
                    6275,
                    1075
                ],
                [
                    6225,
                    1050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6225,
                "right": 6325,
                "top": 1025,
                "bottom": 1075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6125,
                    1025
                ],
                [
                    6175,
                    1050
                ],
                [
                    6125,
                    1075
                ],
                [
                    6075,
                    1050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6075,
                "right": 6175,
                "top": 1025,
                "bottom": 1075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6750,
            "y": 889.125,
            "w": 300,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6750,
                    800
                ],
                [
                    6750,
                    1050
                ]
            ],
            "speed": 105,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6750,
                "y": 800
            },
            "pointTo": {
                "x": 6750,
                "y": 1050
            },
            "xv": 6.429395695523604e-15,
            "yv": 105,
            "inView": false
        },
        {
            "x": 7075,
            "y": 800,
            "w": 350,
            "h": 275,
            "spawn": {
                "x": 7250,
                "y": 937.5
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 5850,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        5958.253175473054,
                        1012.5
                    ],
                    [
                        6001.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        5741.746824526946,
                        1012.5
                    ],
                    [
                        5698.4455543377235,
                        1037.5
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
            "x": 7950,
            "y": 950,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": -330.89697288552446,
            "endAngle": -329.3261765587319,
            "startPolygon": {
                "points": [
                    [
                        7950,
                        950
                    ],
                    [
                        7872.744288753144,
                        1078.5750950990991
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7950,
                        950
                    ],
                    [
                        7821.42490490072,
                        872.7442887534443
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -2.0943951023931953,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7950,
            "y": 950,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": -327.75538023193934,
            "endAngle": -326.1845839051467,
            "startPolygon": {
                "points": [
                    [
                        7950,
                        950
                    ],
                    [
                        8027.2557112462555,
                        821.4249049005399
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7950,
                        950
                    ],
                    [
                        8078.575095099636,
                        1027.2557112459624
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -2.0943951023931953,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8750,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        8858.253175473055,
                        1012.5
                    ],
                    [
                        8901.554445662277,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8641.746824526945,
                        1012.5
                    ],
                    [
                        8598.445554337723,
                        1037.5
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
            "x": 8750,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        8641.746824526945,
                        887.5
                    ],
                    [
                        8598.445554337723,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8858.253175473055,
                        887.5
                    ],
                    [
                        8901.554445662277,
                        862.5
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
            "x": 4500,
            "y": 800,
            "w": 1000,
            "h": 700,
            "spawn": {
                "x": 5000,
                "y": 1150
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8900,
            "y": 800,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 9050,
                "y": 950
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9050,
            "y": 950,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": -1.5707963267948966,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        9050,
                        800
                    ],
                    [
                        9050,
                        650
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9050,
                        1100
                    ],
                    [
                        9050,
                        1250
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
            "x": 1100,
            "y": 800,
            "w": 3400,
            "h": 300,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "x": 1550,
            "y": 800,
            "w": 450,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": -2600
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 1650,
            "y": 925,
            "w": 350,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1100,
            "y": 800,
            "w": 450,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": 2600
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 1100,
            "y": 800,
            "w": 350,
            "h": 175,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2000,
            "y": 800,
            "w": 450,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": 2600
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 2450,
            "y": 800,
            "w": 450,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": -2600
            },
            "direction": "up",
            "inView": false
        },
        {
            "x": 2900,
            "y": 800,
            "w": 150,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 0,
                "y": 2600
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 3050,
            "y": 800,
            "w": 750,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 2600,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 3800,
            "y": 800,
            "w": 700,
            "h": 300,
            "type": "grav",
            "force": 2600,
            "dir": {
                "x": 2600,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 1225,
            "y": 2775,
            "w": 70,
            "h": 435,
            "type": "rotate-lava",
            "angle": 8765.987142856706,
            "rotateSpeed": 57.0857142857,
            "pivotX": 1225,
            "pivotY": 2775,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 220.29809350060205,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1021.185714290764,
            "y": 2350,
            "w": 100,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    1100,
                    2350
                ],
                [
                    1000,
                    2350
                ]
            ],
            "speed": 63.4285714286,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1000,
                "y": 2350
            },
            "pointTo": {
                "x": 1100,
                "y": 2350
            },
            "xv": 63.4285714286,
            "yv": 0,
            "inView": false
        },
        {
            "x": 900,
            "y": 2950,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1000,
            "y": 2950,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1100,
            "y": 2575,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 800,
            "y": 5800,
            "w": 300,
            "h": 300,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 1448.75,
            "y": 7300,
            "w": 250,
            "h": 700,
            "type": "tpmove",
            "points": [
                [
                    1250,
                    7300
                ],
                [
                    1500,
                    7300
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1250,
                "y": 7300
            },
            "pointTo": {
                "x": 1500,
                "y": 7300
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 2000,
            "y": 5075,
            "w": 150,
            "h": 150,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2000,
            "pivotY": 5075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1450,
            "y": 5025,
            "w": 500,
            "h": 58,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": 10441.966666669316,
            "rotateSpeed": 68,
            "pivotX": 1450,
            "pivotY": 5025,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 251.67637950352037,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1500,
            "y": 5075,
            "w": 150,
            "h": 150,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 1500,
            "pivotY": 5075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1600,
            "y": 3075,
            "w": 300,
            "h": 300,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": 6910.125,
            "rotateSpeed": 45,
            "pivotX": 1600,
            "pivotY": 3075,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 212.13203435596427,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1525,
            "y": 3750,
            "w": 150,
            "h": 150,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": -6932.125,
            "rotateSpeed": -45,
            "pivotX": 1525,
            "pivotY": 3750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1078.814285709236,
            "y": 2150,
            "w": 100,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    1100,
                    2150
                ],
                [
                    1000,
                    2150
                ]
            ],
            "speed": 63.4285714286,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 1100,
                "y": 2150
            },
            "pointTo": {
                "x": 1000,
                "y": 2150
            },
            "xv": -63.4285714286,
            "yv": 7.767759697452425e-15,
            "inView": false
        },
        {
            "x": 1100,
            "y": 1100,
            "w": 400,
            "h": 7800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 778.814285709236,
            "y": 2150,
            "w": 100,
            "h": 400,
            "type": "lavamove",
            "points": [
                [
                    700,
                    2150
                ],
                [
                    800,
                    2150
                ]
            ],
            "speed": 63.4285714286,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 800,
                "y": 2150
            },
            "pointTo": {
                "x": 700,
                "y": 2150
            },
            "xv": -63.4285714286,
            "yv": 7.767759697452425e-15,
            "inView": false
        },
        {
            "x": 925,
            "y": 1275,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 950,
            "tpy": 950,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 925,
            "y": 1200,
            "w": 175,
            "h": 50,
            "type": "tp",
            "tpx": 950,
            "tpy": 3150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 1200,
            "w": 150,
            "h": 50,
            "type": "tp",
            "tpx": 950,
            "tpy": 3150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 4300,
            "w": 300,
            "h": 300,
            "type": "speed",
            "speedInc": 2,
            "inView": false
        },
        {
            "x": 800,
            "y": 4300,
            "w": 300,
            "h": 400,
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
            "y": 4300,
            "w": 300,
            "h": 300,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 5500,
            "w": 300,
            "h": 300,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 3300,
            "w": 300,
            "h": 900,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 3300,
            "w": 25,
            "h": 900,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 800,
            "y": 3300,
            "w": 25,
            "h": 900,
            "type": "bounce",
            "effect": 30,
            "inView": false
        },
        {
            "x": 4700,
            "y": 2900,
            "w": 600,
            "h": 100,
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
            "x": 4700,
            "y": 3200,
            "w": 600,
            "h": 100,
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
            "x": 4700,
            "y": 2900,
            "w": 600,
            "h": 400,
            "spawn": {
                "x": 5000,
                "y": 3100
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1500,
            "y": 7300,
            "w": 500,
            "h": 700,
            "type": "tptrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 1750,
            "tpy": 2050,
            "inView": false
        },
        {
            "x": 1500,
            "y": 6850,
            "w": 500,
            "h": 450,
            "type": "tptrap",
            "time": 0,
            "maxTime": 2,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 1750,
            "tpy": 2050,
            "inView": false
        },
        {
            "x": 1575,
            "y": 6750,
            "w": 375,
            "h": 100,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 12,
            "inView": false
        },
        {
            "x": 2050,
            "y": 5025,
            "w": 500,
            "h": 58,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": -10441.966666669316,
            "rotateSpeed": -68,
            "pivotX": 2050,
            "pivotY": 5025,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 251.67637950352037,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1500,
            "y": 1500,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 1750,
                "y": 1750
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1900,
            "y": 3850,
            "w": 300,
            "h": 300,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": -6932.125,
            "rotateSpeed": -45,
            "pivotX": 1900,
            "pivotY": 3850,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 212.13203435596427,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1900,
            "y": 3575,
            "w": 300,
            "h": 300,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": -6932.125,
            "rotateSpeed": -45,
            "pivotX": 1900,
            "pivotY": 3575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 212.13203435596427,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 1948.75,
            "y": 7300,
            "w": 250,
            "h": 700,
            "type": "tpmove",
            "points": [
                [
                    1750,
                    7300
                ],
                [
                    2000,
                    7300
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1750,
                "y": 7300
            },
            "pointTo": {
                "x": 2000,
                "y": 7300
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1500,
            "y": 8000,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 1750,
                "y": 8250
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 400,
            "y": 650,
            "w": 400,
            "h": 8950,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5250,
            "y": 9625,
            "w": 100,
            "h": 275,
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
            "x": 4700,
            "y": 9600,
            "w": 100,
            "h": 275,
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
            "x": 4800,
            "y": 9200,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 5000,
                "y": 9400
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    6875
                ],
                [
                    9200,
                    6875
                ],
                [
                    9200,
                    7000
                ]
            ],
            "type": "poly-tp",
            "tpx": 9050,
            "tpy": 6050,
            "most": {
                "left": 9050,
                "right": 9200,
                "top": 6875,
                "bottom": 7000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9000,
            "y": 6425,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    6875
                ],
                [
                    9200,
                    7000
                ],
                [
                    9150,
                    7050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9050,
                "right": 9200,
                "top": 6875,
                "bottom": 7050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8900,
            "y": 7750,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 9050,
                "y": 7900
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8887,
            "y": 8329,
            "w": 65,
            "h": 46,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9050,
            "y": 8200,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": -1.0471975511965976,
            "endAngle": 1.0471975511965976,
            "startPolygon": {
                "points": [
                    [
                        9125,
                        8070.0961894323345
                    ],
                    [
                        9150,
                        8026.794919243112
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9125,
                        8329.903810567666
                    ],
                    [
                        9150,
                        8373.205080756888
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
            "x": 9050,
            "y": 8200,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 2.0943951023931953,
            "endAngle": 4.1887902047863905,
            "startPolygon": {
                "points": [
                    [
                        8975,
                        8329.903810567666
                    ],
                    [
                        8950,
                        8373.205080756888
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8975,
                        8070.0961894323345
                    ],
                    [
                        8950,
                        8026.794919243112
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
            "x": 8949,
            "y": 8417,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 8871,
            "y": 8564,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 950,
            "y": 6350,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": -553.0657511359926,
            "endAngle": -551.494954809196,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6350
                    ],
                    [
                        1098.4162457902687,
                        6328.2602211252615
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6350
                    ],
                    [
                        971.7397788744776,
                        6498.416245790307
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -3.490658503988659,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 800,
            "y": 7450,
            "w": 300,
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
            "x": 800,
            "y": 7600,
            "w": 300,
            "h": 1000,
            "type": "speed",
            "speedInc": 0.4,
            "inView": false
        },
        {
            "x": 800,
            "y": 8900,
            "w": 8100,
            "h": 300,
            "type": "grav",
            "force": 750,
            "dir": {
                "x": 750,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 400,
            "y": 9600,
            "w": 2000,
            "h": 400,
            "type": "platformer",
            "force": 3200,
            "dir": {
                "x": 0,
                "y": 3200
            },
            "direction": "down",
            "jumpHeight": 180,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 400,
            "y": 9600,
            "w": 1050,
            "h": 400,
            "type": "speed",
            "speedInc": 1.8,
            "inView": false
        },
        {
            "x": 3100,
            "y": 9600,
            "w": 6500,
            "h": 400,
            "type": "platformer",
            "force": 3200,
            "dir": {
                "x": 0,
                "y": 3200
            },
            "direction": "down",
            "jumpHeight": 180,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 4200,
            "y": 9850,
            "w": 450,
            "h": 100,
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
            "x": 4200,
            "y": 9850,
            "w": 475,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 1100,
            "y": 9900,
            "w": 350,
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
            "x": 3975,
            "y": 9625,
            "w": 150,
            "h": 100,
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
            "x": 3950,
            "y": 9600,
            "w": 200,
            "h": 150,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 3975,
            "y": 9875,
            "w": 150,
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
            "x": 2550,
            "y": 9600,
            "w": 450,
            "h": 400,
            "type": "timetrap",
            "time": 0,
            "maxTime": 4,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 2400,
            "y": 9600,
            "w": 600,
            "h": 400,
            "type": "platformer",
            "force": 1800,
            "dir": {
                "x": 0,
                "y": 1800
            },
            "direction": "down",
            "jumpHeight": -1,
            "maxForce": 1000,
            "variableJumpHeight": false,
            "platformerFriction": 0.8,
            "inView": false
        },
        {
            "x": 8650,
            "y": 9950,
            "w": 150,
            "h": 50,
            "type": "bounce",
            "effect": 50,
            "inView": false
        },
        {
            "x": 8900,
            "y": 9950,
            "w": 150,
            "h": 50,
            "type": "bounce",
            "effect": 50,
            "inView": false
        },
        {
            "x": 7800,
            "y": 9600,
            "w": 550,
            "h": 100,
            "type": "timetrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 6300,
            "y": 9900,
            "w": 100,
            "h": 100,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 1575,
            "y": 9600,
            "w": 150,
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
            "x": 3100,
            "y": 9950,
            "w": 2675,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6550,
            "y": 9900,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        6650,
                        9900
                    ],
                    [
                        6750,
                        9900
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6550,
                        10000
                    ],
                    [
                        6550,
                        10100
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
            "x": 6500,
            "y": 9700,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        6400,
                        9700
                    ],
                    [
                        6300,
                        9700
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6500,
                        9600
                    ],
                    [
                        6500,
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
            "x": 0,
            "y": 6300,
            "w": 400,
            "h": 3300,
            "type": "timetrap",
            "time": 0,
            "maxTime": 32,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 225,
            "y": 6625,
            "radius": 350,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        400,
                        6625
                    ],
                    [
                        575,
                        6625
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        225,
                        6800
                    ],
                    [
                        225.00000000000003,
                        6975
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
            "x": 9600,
            "y": 6600,
            "w": 400,
            "h": 3000,
            "type": "grav",
            "force": 2022,
            "dir": {
                "x": 0,
                "y": 2022
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 9600,
            "y": 6600,
            "w": 400,
            "h": 3000,
            "type": "raxis",
            "rx": false,
            "ry": true,
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    7850
                ],
                [
                    9700,
                    7850
                ],
                [
                    9600,
                    7950
                ]
            ],
            "type": "poly-tp",
            "tpx": 9975,
            "tpy": 7775,
            "most": {
                "left": 9600,
                "right": 9700,
                "top": 7850,
                "bottom": 7950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9600,
            "y": 1800,
            "w": 200,
            "h": 150,
            "spawn": {
                "x": 9700,
                "y": 1875
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 0,
            "y": 6300,
            "w": 400,
            "h": 50,
            "type": "invpu",
            "amount": 0,
            "maxAmount": 0,
            "inView": false
        },
        {
            "x": 0,
            "y": 3700,
            "w": 400,
            "h": 400,
            "type": "invpu",
            "amount": 0.5,
            "maxAmount": 0.5,
            "inView": false
        },
        {
            "x": 0,
            "y": 1900,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 200,
            "tpy": 2450,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 150,
            "y": 3250,
            "w": 100,
            "h": 450,
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
            "x": -1.2246467991473534e-14,
            "y": 400,
            "w": 400,
            "h": 3300,
            "type": "size",
            "size": 49.5,
            "inView": false
        },
        {
            "x": 0,
            "y": 400,
            "w": 400,
            "h": 2850,
            "type": "speed",
            "speedInc": 5,
            "inView": false
        },
        {
            "x": 0,
            "y": 0,
            "w": 400,
            "h": 400,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": -25,
            "y": 7250,
            "w": 450,
            "h": 2300,
            "type": "vinette",
            "ir": 0.01,
            "or": 0.36,
            "o": 1.5,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 9200,
            "y": 400,
            "w": 400,
            "h": 8950,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 10000,
            "y": 7450,
            "w": 400,
            "h": 725,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 1350,
            "w": 200,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9600,
            "y": 2750,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 1100,
            "w": 400,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5200,
            "y": 9200,
            "w": 4400,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 275,
            "y": 8525,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 125,
            "y": 8525,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 0,
            "y": 9600,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 200,
                "y": 9800
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9600,
            "y": 4100,
            "w": 50,
            "h": 1800,
            "color": "#d0a81b",
            "type": "block",
            "inView": false
        },
        {
            "x": 9950,
            "y": 4100,
            "w": 50,
            "h": 1800,
            "color": "#d0a81b",
            "type": "block",
            "inView": false
        },
        {
            "x": 9709,
            "y": 4100,
            "w": 400,
            "h": 1800,
            "type": "move",
            "points": [
                [
                    9650,
                    4100
                ],
                [
                    10000,
                    4100
                ]
            ],
            "speed": 120,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 9650,
                "y": 4100
            },
            "pointTo": {
                "x": 10000,
                "y": 4100
            },
            "xv": 120,
            "yv": 0,
            "inView": false
        },
        {
            "x": 9259,
            "y": 4100,
            "w": 400,
            "h": 1800,
            "type": "move",
            "points": [
                [
                    9200,
                    4100
                ],
                [
                    9550,
                    4100
                ]
            ],
            "speed": 120,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 9200,
                "y": 4100
            },
            "pointTo": {
                "x": 9550,
                "y": 4100
            },
            "xv": 120,
            "yv": 0,
            "inView": false
        },
        {
            "x": 9550,
            "y": 4100,
            "w": 50,
            "h": 1800,
            "type": "breakable",
            "maxStrength": 1000,
            "currentStrength": 1000,
            "time": 100,
            "timer": 100,
            "regenTime": 0,
            "inView": false
        },
        {
            "x": 10000,
            "y": 4100,
            "w": 50,
            "h": 1800,
            "type": "breakable",
            "maxStrength": 1000,
            "currentStrength": 1000,
            "time": 100,
            "timer": 100,
            "regenTime": 0,
            "inView": false
        },
        {
            "x": 9700,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 9700,
            "tpy": 1275,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4600,
            "y": -125,
            "w": 825,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 400,
            "y": 0,
            "w": 4300,
            "h": 400,
            "type": "grav",
            "force": 1750,
            "dir": {
                "x": -1750,
                "y": 0
            },
            "direction": "left",
            "inView": true
        },
        {
            "x": 450,
            "y": 100,
            "w": 225,
            "h": 50,
            "type": "tptrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "tpx": 2600,
            "tpy": 175,
            "inView": false
        },
        {
            "x": 0,
            "y": 0,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 200,
                "y": 200
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9600,
            "y": 0,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 9800,
                "y": 200
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 525,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    1700,
                    150
                ],
                [
                    1900,
                    300
                ],
                [
                    1800,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1900,
                "top": 150,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6700,
            "y": 0,
            "w": 2900,
            "h": 400,
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
            "x": 7800,
            "y": 300,
            "radius": 100,
            "radius2": 50,
            "type": "lava-oval",
            "canCollide": true,
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 8250,
            "y": 0,
            "w": 1350,
            "h": 400,
            "type": "size",
            "size": 12.5,
            "inView": false
        },
        {
            "points": [
                [
                    9350,
                    250
                ],
                [
                    9450,
                    300
                ],
                [
                    9350,
                    350
                ],
                [
                    9100,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9450,
                "top": 250,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8350,
                    225
                ],
                [
                    8650,
                    300
                ],
                [
                    8275,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8275,
                "right": 8650,
                "top": 225,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5300,
            "y": 0,
            "w": 1250,
            "h": 400,
            "type": "grav",
            "force": 1750,
            "dir": {
                "x": 1750,
                "y": 0
            },
            "direction": "right",
            "inView": true
        },
        {
            "x": 5300,
            "y": 300,
            "w": 4200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "points": [
                [
                    9350,
                    50
                ],
                [
                    9450,
                    100
                ],
                [
                    9350,
                    150
                ],
                [
                    9100,
                    100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9450,
                "top": 50,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4650,
            "y": -125,
            "w": 700,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 400,
            "y": 400,
            "w": 9200,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 400,
            "y": 9200,
            "w": 4400,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1100,
            "y": 8500,
            "w": 7800,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1100,
            "y": 1100,
            "w": 3400,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5500,
            "y": 1100,
            "w": 3775,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2000,
            "y": 2000,
            "w": 400,
            "h": 6000,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7600,
            "y": 2000,
            "w": 400,
            "h": 6000,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2000,
            "y": 7600,
            "w": 2750,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5250,
            "y": 7600,
            "w": 2750,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2900,
            "y": 6700,
            "w": 4200,
            "h": 400,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2900,
            "y": 2900,
            "w": 400,
            "h": 4200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2900,
            "w": 400,
            "h": 4200,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2900,
            "y": 2900,
            "w": 1800,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 2900,
            "w": 1800,
            "h": 400,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 3700,
            "y": 3700,
            "w": 400,
            "h": 2600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 3700,
            "w": 2600,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5900,
            "y": 3700,
            "w": 400,
            "h": 2600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 425,
            "y": 0,
            "w": 4275,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "points": [
                [
                    4700,
                    300
                ],
                [
                    4800,
                    400
                ],
                [
                    4700,
                    400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 4800,
                "top": 300,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    4700,
                    0
                ],
                [
                    4800,
                    0
                ],
                [
                    4700,
                    100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 4800,
                "top": 0,
                "bottom": 100
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    5200,
                    0
                ],
                [
                    5300,
                    0
                ],
                [
                    5300,
                    100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5200,
                "right": 5300,
                "top": 0,
                "bottom": 100
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    5300,
                    300
                ],
                [
                    5300,
                    400
                ],
                [
                    5200,
                    400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5200,
                "right": 5300,
                "top": 300,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 9500,
            "y": 0,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9500,
            "y": 400,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    5550,
                    200
                ],
                [
                    5600,
                    300
                ],
                [
                    5500,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5500,
                "right": 5600,
                "top": 200,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    4400,
                    100
                ],
                [
                    4500,
                    100
                ],
                [
                    4450,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4400,
                "right": 4500,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    4175,
                    175
                ],
                [
                    4250,
                    300
                ],
                [
                    4100,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4100,
                "right": 4250,
                "top": 175,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    3850,
                    100
                ],
                [
                    3950,
                    100
                ],
                [
                    3900,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3850,
                "right": 3950,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3900,
                    275
                ],
                [
                    3950,
                    300
                ],
                [
                    3850,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3850,
                "right": 3950,
                "top": 275,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6050,
                    200
                ],
                [
                    6100,
                    300
                ],
                [
                    6000,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6000,
                "right": 6100,
                "top": 200,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5750,
                    100
                ],
                [
                    5850,
                    100
                ],
                [
                    5800,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5750,
                "right": 5850,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 6351.25,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6350,
                    100
                ],
                [
                    6350,
                    250
                ],
                [
                    6500,
                    250
                ],
                [
                    6500,
                    100
                ]
            ],
            "speed": 150,
            "currentPoint": 3,
            "collidable": true,
            "pointOn": {
                "x": 6500,
                "y": 100
            },
            "pointTo": {
                "x": 6350,
                "y": 100
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6498.75,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6350,
                    100
                ],
                [
                    6350,
                    250
                ],
                [
                    6500,
                    250
                ],
                [
                    6500,
                    100
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6350,
                "y": 250
            },
            "pointTo": {
                "x": 6500,
                "y": 250
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    6550,
                    100
                ],
                [
                    6850,
                    100
                ],
                [
                    6700,
                    150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6550,
                "right": 6850,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    250
                ],
                [
                    6850,
                    300
                ],
                [
                    6550,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6550,
                "right": 6850,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6450,
            "y": 200,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    6950,
                    150
                ],
                [
                    7100,
                    200
                ],
                [
                    6950,
                    250
                ],
                [
                    6800,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6800,
                "right": 7100,
                "top": 150,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7200,
                    250
                ],
                [
                    7350,
                    300
                ],
                [
                    7050,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7050,
                "right": 7350,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7050,
                    100
                ],
                [
                    7350,
                    100
                ],
                [
                    7200,
                    150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7050,
                "right": 7350,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6950,
            "y": 250,
            "w": 0.001,
            "h": 50,
            "type": "tp",
            "tpx": 6975,
            "tpy": 125,
            "bgColor": "#d89002",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 6950,
            "y": 100,
            "w": 0.001,
            "h": 50,
            "type": "tp",
            "tpx": 6975,
            "tpy": 275,
            "bgColor": "#d89002",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7500,
            "y": 200,
            "radius": 100,
            "radius2": 50,
            "type": "lava-oval",
            "canCollide": true,
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 7175,
            "y": 175,
            "w": 50,
            "h": 50,
            "type": "mark",
            "time": 8,
            "inView": false
        },
        {
            "x": 7800,
            "y": 100,
            "radius": 100,
            "radius2": 50,
            "type": "lava-oval",
            "canCollide": true,
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 5300,
            "y": 0,
            "w": 4200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 8300,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "cure",
            "inView": false
        },
        {
            "x": 7950,
            "y": 159,
            "w": 150,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    7950,
                    100
                ],
                [
                    7950,
                    250
                ]
            ],
            "speed": 120,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 7950,
                "y": 100
            },
            "pointTo": {
                "x": 7950,
                "y": 250
            },
            "xv": 7.34788079488412e-15,
            "yv": 120,
            "inView": false
        },
        {
            "points": [
                [
                    3800,
                    275
                ],
                [
                    3850,
                    300
                ],
                [
                    3750,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3750,
                "right": 3850,
                "top": 275,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    275
                ],
                [
                    3750,
                    300
                ],
                [
                    3650,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3650,
                "right": 3750,
                "top": 275,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3750,
                    100
                ],
                [
                    3850,
                    100
                ],
                [
                    3800,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3750,
                "right": 3850,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    100
                ],
                [
                    3750,
                    100
                ],
                [
                    3700,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3650,
                "right": 3750,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3200,
                    100
                ],
                [
                    3400,
                    100
                ],
                [
                    3300,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3200,
                "right": 3400,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    100
                ],
                [
                    3200,
                    100
                ],
                [
                    3125,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3050,
                "right": 3200,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2700,
            "y": 100,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2950,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    150
                ],
                [
                    2950,
                    150
                ],
                [
                    3100,
                    300
                ],
                [
                    3000,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2850,
                "right": 3100,
                "top": 150,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2575,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 1,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    2575,
                    75
                ],
                [
                    2675,
                    75
                ],
                [
                    2850,
                    250
                ],
                [
                    2750,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2575,
                "right": 2850,
                "top": 75,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2525,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 1,
            "active": true,
            "inView": false
        },
        {
            "x": 2200,
            "y": 0,
            "w": 500,
            "h": 50,
            "type": "rotate-lava",
            "angle": -6910.125,
            "rotateSpeed": -45,
            "pivotX": 2200,
            "pivotY": 0,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 251.24689052802225,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2325,
            "y": 150,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "x": 2275,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    1100,
                    100
                ],
                [
                    1500,
                    100
                ],
                [
                    1350,
                    250
                ],
                [
                    1250,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1100,
                "right": 1500,
                "top": 100,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    875,
                    150
                ],
                [
                    975,
                    150
                ],
                [
                    1125,
                    300
                ],
                [
                    725,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 725,
                "right": 1125,
                "top": 150,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    650,
                    100
                ],
                [
                    750,
                    100
                ],
                [
                    600,
                    250
                ],
                [
                    500,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 500,
                "right": 750,
                "top": 100,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 400,
            "y": 250,
            "w": 50,
            "h": 50,
            "type": "door",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "x": 400,
            "y": 300,
            "w": 4300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 400,
            "y": 0,
            "w": 50,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    150,
                    0
                ],
                [
                    400,
                    0
                ],
                [
                    400,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 150,
                "right": 400,
                "top": 0,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    450,
                    100
                ],
                [
                    525,
                    100
                ],
                [
                    450,
                    175
                ]
            ],
            "type": "poly",
            "most": {
                "left": 450,
                "right": 525,
                "top": 100,
                "bottom": 175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    100
                ],
                [
                    6250,
                    100
                ],
                [
                    6225,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6200,
                "right": 6250,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6225,
                    250
                ],
                [
                    6250,
                    300
                ],
                [
                    6200,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6200,
                "right": 6250,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8275,
                    100
                ],
                [
                    8650,
                    100
                ],
                [
                    8575,
                    175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8275,
                "right": 8650,
                "top": 100,
                "bottom": 175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8950,
                    150
                ],
                [
                    9050,
                    200
                ],
                [
                    8950,
                    250
                ],
                [
                    8700,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8700,
                "right": 9050,
                "top": 150,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    150
                ],
                [
                    9600,
                    250
                ],
                [
                    9500,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9500,
                "right": 9600,
                "top": 150,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2300,
                    100
                ],
                [
                    2400,
                    100
                ],
                [
                    2350,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2300,
                "right": 2400,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    100
                ],
                [
                    2300,
                    100
                ],
                [
                    2250,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2200,
                "right": 2300,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2250,
                    100
                ],
                [
                    2350,
                    100
                ],
                [
                    2300,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2250,
                "right": 2350,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2050,
                    100
                ],
                [
                    2150,
                    100
                ],
                [
                    2250,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2050,
                "right": 2250,
                "top": 100,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2100,
                    100
                ],
                [
                    2200,
                    100
                ],
                [
                    2350,
                    250
                ],
                [
                    2250,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2100,
                "right": 2350,
                "top": 100,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1600,
                    150
                ],
                [
                    1700,
                    150
                ],
                [
                    1850,
                    300
                ],
                [
                    1450,
                    300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1450,
                "right": 1850,
                "top": 150,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    250
                ],
                [
                    3700,
                    300
                ],
                [
                    3600,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3600,
                "right": 3700,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3750,
                    250
                ],
                [
                    3800,
                    300
                ],
                [
                    3700,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3700,
                "right": 3800,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3850,
                    250
                ],
                [
                    3900,
                    300
                ],
                [
                    3800,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3800,
                "right": 3900,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3950,
                    250
                ],
                [
                    4000,
                    300
                ],
                [
                    3900,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3900,
                "right": 4000,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3550,
                    200
                ],
                [
                    3650,
                    300
                ],
                [
                    3450,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3450,
                "right": 3650,
                "top": 200,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3600,
                    100
                ],
                [
                    3700,
                    100
                ],
                [
                    3650,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3600,
                "right": 3700,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    100
                ],
                [
                    3800,
                    100
                ],
                [
                    3750,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3700,
                "right": 3800,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3800,
                    100
                ],
                [
                    3900,
                    100
                ],
                [
                    3850,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3800,
                "right": 3900,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3900,
                    100
                ],
                [
                    4000,
                    100
                ],
                [
                    3950,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3900,
                "right": 4000,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4175,
                    175
                ],
                [
                    4225,
                    300
                ],
                [
                    4125,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4125,
                "right": 4225,
                "top": 175,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    4425,
                    100
                ],
                [
                    4475,
                    100
                ],
                [
                    4450,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4425,
                "right": 4475,
                "top": 100,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    3250,
                    125
                ],
                [
                    3350,
                    125
                ],
                [
                    3300,
                    175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3250,
                "right": 3350,
                "top": 125,
                "bottom": 175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3550,
                    225
                ],
                [
                    3600,
                    275
                ],
                [
                    3500,
                    275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3500,
                "right": 3600,
                "top": 225,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    100
                ],
                [
                    2300,
                    100
                ],
                [
                    2250,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2200,
                "right": 2300,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2300,
                    100
                ],
                [
                    2400,
                    100
                ],
                [
                    2350,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2300,
                "right": 2400,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2250,
                    100
                ],
                [
                    2350,
                    100
                ],
                [
                    2300,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2250,
                "right": 2350,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2325,
                    75
                ],
                [
                    2425,
                    75
                ],
                [
                    2600,
                    250
                ],
                [
                    2500,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2325,
                "right": 2600,
                "top": 75,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1875,
            "y": -325,
            "w": 650,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1975,
                    175
                ],
                [
                    2025,
                    200
                ],
                [
                    1975,
                    225
                ],
                [
                    1925,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1925,
                "right": 2025,
                "top": 175,
                "bottom": 225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5550,
                    250
                ],
                [
                    5600,
                    300
                ],
                [
                    5500,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5500,
                "right": 5600,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    6050,
                    250
                ],
                [
                    6100,
                    300
                ],
                [
                    6000,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6000,
                "right": 6100,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5750,
                    100
                ],
                [
                    5850,
                    100
                ],
                [
                    5800,
                    150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5750,
                "right": 5850,
                "top": 100,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    6225,
                    275
                ],
                [
                    6250,
                    300
                ],
                [
                    6200,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6200,
                "right": 6250,
                "top": 275,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    100
                ],
                [
                    6250,
                    100
                ],
                [
                    6225,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6200,
                "right": 6250,
                "top": 100,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 0,
            "y": 5900,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 200,
                "y": 6100
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9600,
            "y": 3700,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 9800,
                "y": 3900
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9600,
            "y": 5900,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 9800,
                "y": 6100
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9600,
            "y": 400,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 2.0083333333337405,
            "inView": false
        },
        {
            "x": 9600,
            "y": 500,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 3.0083333333337383,
            "inView": false
        },
        {
            "x": 9700,
            "y": 500,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": false,
            "timer": 0.5083333333337408,
            "inView": false
        },
        {
            "x": 9800,
            "y": 500,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 0.008333333333740726,
            "inView": false
        },
        {
            "x": 9900,
            "y": 500,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 1.0083333333337432,
            "inView": false
        },
        {
            "x": 9900,
            "y": 600,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 2.0083333333337405,
            "inView": false
        },
        {
            "x": 9900,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 3.0083333333337383,
            "inView": false
        },
        {
            "x": 9900,
            "y": 800,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": false,
            "timer": 0.5083333333337408,
            "inView": false
        },
        {
            "x": 9900,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 0.008333333333740726,
            "inView": false
        },
        {
            "x": 9800,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 1.0083333333337432,
            "inView": false
        },
        {
            "x": 9700,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 2.0083333333337405,
            "inView": false
        },
        {
            "x": 9600,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 3.0083333333337383,
            "inView": false
        },
        {
            "x": 9600,
            "y": 800,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": false,
            "timer": 0.5083333333337408,
            "inView": false
        },
        {
            "x": 9600,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 3.5,
            "offTime": 1.5,
            "state": true,
            "timer": 0.008333333333740726,
            "inView": false
        },
        {
            "x": 9800,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 1000,
            "w": 400,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9700,
            "y": 800,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 600,
            "w": 300,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9700,
            "y": 400,
            "w": 300,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4200,
            "y": 4200,
            "w": 400,
            "h": 1600,
            "type": "winpad",
            "inView": false
        },
        {
            "x": 4925,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4825,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4725,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4625,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4525,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4425,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4325,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4225,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5725,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5625,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5525,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5425,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5325,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5225,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5125,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5025,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4625,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4725,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4825,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4525,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4325,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4425,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4225,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 4925,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 5025,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 5125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 5225,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 5825,
            "y": 5325,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 5325,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 5225,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 5125,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 5025,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4925,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4825,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4725,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4625,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4525,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4425,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4325,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4125,
            "y": 4225,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 4250,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4250,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4250,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4250,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4550,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4550,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4550,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4550,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4850,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4850,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4850,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": -27640.5,
            "rotateSpeed": -180,
            "pivotX": 4850,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5750,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5750,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5750,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5750,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5450,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5450,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5450,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5450,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5150,
            "y": 5950,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5150,
            "pivotY": 5950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5150,
            "y": 6150,
            "w": 300,
            "h": 35,
            "type": "rotate-lava",
            "angle": 27640.5,
            "rotateSpeed": 180,
            "pivotX": 5150,
            "pivotY": 6150,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 151.01738310538957,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4100,
            "y": 6300,
            "w": 1800,
            "h": 400,
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
            "x": 5900,
            "y": 6300,
            "w": 400,
            "h": 400,
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
            "x": 3700,
            "y": 6300,
            "w": 400,
            "h": 400,
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
            "x": 4100,
            "y": 5400,
            "w": 100,
            "h": 400,
            "type": "breakable",
            "maxStrength": 500,
            "currentStrength": 500,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 5800,
            "y": 5400,
            "w": 100,
            "h": 400,
            "type": "breakable",
            "maxStrength": 500,
            "currentStrength": 500,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        // {
        //     "x": 3925,
        //     "y": 5800,
        //     "w": 2200,
        //     "h": 900,
        //     "type": "vinette",
        //     "ir": 0.25,
        //     "or": 0.65,
        //     "o": 0.85,
        //     "vc": {
        //         "r": 0,
        //         "g": 0,
        //         "b": 0
        //     },
        //     "inView": false
        // },
        {
            "x": 9600,
            "y": 4100,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9950,
            "y": 4100,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9650,
            "y": 4950,
            "w": 300,
            "h": 50,
            "type": "breakable",
            "maxStrength": 20,
            "currentStrength": 20,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 9600,
            "y": 4700,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9950,
            "y": 4700,
            "w": 50,
            "h": 300,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    5050
                ],
                [
                    9875,
                    5125
                ],
                [
                    9800,
                    5200
                ],
                [
                    9725,
                    5125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9725,
                "right": 9875,
                "top": 5050,
                "bottom": 5200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    5300
                ],
                [
                    9700,
                    5400
                ],
                [
                    9725,
                    5475
                ],
                [
                    9700,
                    5550
                ],
                [
                    9600,
                    5650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9600,
                "right": 9725,
                "top": 5300,
                "bottom": 5650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    5300
                ],
                [
                    10000,
                    5650
                ],
                [
                    9900,
                    5550
                ],
                [
                    9875,
                    5475
                ],
                [
                    9900,
                    5400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9875,
                "right": 10000,
                "top": 5300,
                "bottom": 5650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    5650
                ],
                [
                    9900,
                    5750
                ],
                [
                    9900,
                    5900
                ],
                [
                    9700,
                    5900
                ],
                [
                    9700,
                    5750
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9700,
                "right": 9900,
                "top": 5650,
                "bottom": 5900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9891,
            "y": 5750,
            "w": 50,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    9600,
                    5750
                ],
                [
                    9950,
                    5750
                ]
            ],
            "speed": 120,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 9950,
                "y": 5750
            },
            "pointTo": {
                "x": 9600,
                "y": 5750
            },
            "xv": -120,
            "yv": 1.469576158976824e-14,
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    5125
                ],
                [
                    9875,
                    5200
                ],
                [
                    9800,
                    5275
                ],
                [
                    9725,
                    5200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9725,
                "right": 9875,
                "top": 5125,
                "bottom": 5275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    5125
                ],
                [
                    9837.5,
                    5162.5
                ],
                [
                    9800,
                    5200
                ],
                [
                    9762.5,
                    5162.5
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9762.5,
                "right": 9837.5,
                "top": 5125,
                "bottom": 5200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9600,
            "y": 6300,
            "w": 150,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9850,
            "y": 6300,
            "w": 150,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 9600,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 9800,
                "y": 9800
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9750,
            "y": 6300,
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
            "x": 9650,
            "y": 8375,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9875,
            "y": 8600,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9700,
            "y": 8875,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9925,
            "y": 8200,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 10000,
            "y": 8525,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 10000,
            "y": 8675,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9625,
            "y": 8800,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9625,
            "y": 8975,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9550,
            "y": 8450,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9575,
            "y": 8250,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9950,
            "y": 8100,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 10075,
            "y": 8175,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9625,
            "y": 5925,
            "w": 350,
            "h": 350,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 0,
            "y": 6300,
            "w": 400,
            "h": 50,
            "type": "ship",
            "state": true,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 0,
            "y": 9550,
            "w": 400,
            "h": 50,
            "type": "ship",
            "state": false,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 0,
            "y": 6300,
            "w": 400,
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
            "x": 0,
            "y": 9550,
            "w": 400,
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
            "x": 200,
            "y": 6575,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 225,
            "y": 6900,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": -50,
            "y": 6475,
            "w": 250,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 225,
            "y": 6800,
            "w": 175,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -50,
            "y": 7125,
            "w": 475,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 275,
            "y": 7000,
            "w": 125,
            "h": 125,
            "type": "tp",
            "tpx": 200,
            "tpy": 7375,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "points": [
                [
                    -25,
                    7325
                ],
                [
                    175,
                    7325
                ],
                [
                    -25,
                    7475
                ]
            ],
            "type": "poly",
            "most": {
                "left": -25,
                "right": 175,
                "top": 7325,
                "bottom": 7475
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    225,
                    7325
                ],
                [
                    425,
                    7325
                ],
                [
                    425,
                    7475
                ]
            ],
            "type": "poly",
            "most": {
                "left": 225,
                "right": 425,
                "top": 7325,
                "bottom": 7475
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    200,
                    7450
                ],
                [
                    300,
                    7575
                ],
                [
                    200,
                    7700
                ],
                [
                    100,
                    7575
                ]
            ],
            "type": "poly",
            "most": {
                "left": 100,
                "right": 300,
                "top": 7450,
                "bottom": 7700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    100,
                    8100
                ],
                [
                    150,
                    8175
                ],
                [
                    100,
                    8250
                ],
                [
                    50,
                    8175
                ]
            ],
            "type": "poly",
            "most": {
                "left": 50,
                "right": 150,
                "top": 8100,
                "bottom": 8250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    300,
                    8100
                ],
                [
                    350,
                    8175
                ],
                [
                    300,
                    8250
                ],
                [
                    250,
                    8175
                ]
            ],
            "type": "poly",
            "most": {
                "left": 250,
                "right": 350,
                "top": 8100,
                "bottom": 8250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    200,
                    8225
                ],
                [
                    250,
                    8300
                ],
                [
                    200,
                    8375
                ],
                [
                    150,
                    8300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 150,
                "right": 250,
                "top": 8225,
                "bottom": 8375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    8225
                ],
                [
                    50,
                    8300
                ],
                [
                    0,
                    8375
                ],
                [
                    -50,
                    8300
                ]
            ],
            "type": "poly",
            "most": {
                "left": -50,
                "right": 50,
                "top": 8225,
                "bottom": 8375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    400,
                    8225
                ],
                [
                    450,
                    8300
                ],
                [
                    400,
                    8375
                ],
                [
                    350,
                    8300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 350,
                "right": 450,
                "top": 8225,
                "bottom": 8375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    300,
                    8350
                ],
                [
                    350,
                    8425
                ],
                [
                    300,
                    8500
                ],
                [
                    250,
                    8425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 250,
                "right": 350,
                "top": 8350,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 0,
            "y": 8550,
            "w": 400,
            "h": 1000,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 150,
            "y": 8600,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 175,
            "y": 8675,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 325,
            "y": 8825,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 225,
            "y": 8975,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 75,
            "y": 9125,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 75,
            "y": 9475,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 250,
            "y": 8750,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 9050,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 8750,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 8700,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 8750,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 100,
            "y": 8600,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 100,
            "y": 8650,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 8900,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 8900,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 8800,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 8850,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 150,
            "y": 9000,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 100,
            "y": 9000,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 8900,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 8750,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 8950,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 9000,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 8900,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 100,
            "y": 9050,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 9100,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 150,
            "y": 9100,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 75,
            "y": 9300,
            "r": 50,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 50,
            "y": 9400.833333321838,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    50,
                    9100
                ],
                [
                    50,
                    9450
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "pointOn": {
                "x": 50,
                "y": 9450
            },
            "pointTo": {
                "x": 50,
                "y": 9100
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": false
        },
        {
            "x": 50,
            "y": 9149.166666678162,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    50,
                    9100
                ],
                [
                    50,
                    9450
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "pointOn": {
                "x": 50,
                "y": 9100
            },
            "pointTo": {
                "x": 50,
                "y": 9450
            },
            "xv": 6.123233995736766e-15,
            "yv": 100,
            "inView": false
        },
        {
            "x": 250,
            "y": 9250,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 9300,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 9350,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 9450,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 9400,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 9350,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 9500,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 9400,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 9300,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 9200,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 9150,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 9250,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 9450,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 350,
            "y": 9500,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "points": [
                [
                    100,
                    8350
                ],
                [
                    150,
                    8425
                ],
                [
                    100,
                    8500
                ],
                [
                    50,
                    8425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 50,
                "right": 150,
                "top": 8350,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 250,
            "y": 8600,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 300,
            "y": 8600,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 250,
            "y": 8650,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 200,
            "y": 8600,
            "r": 25,
            "type": "circle-safe",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "points": [
                [
                    9925,
                    9025
                ],
                [
                    10000,
                    9025
                ],
                [
                    10000,
                    9200
                ],
                [
                    10000,
                    9600
                ],
                [
                    9650,
                    9200
                ],
                [
                    9650,
                    9150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9650,
                "right": 10000,
                "top": 9025,
                "bottom": 9600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    9225
                ],
                [
                    9925,
                    9600
                ],
                [
                    9600,
                    9600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9600,
                "right": 9925,
                "top": 9225,
                "bottom": 9600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 10025,
            "y": 8975,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9925,
            "y": 9100,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1175,
            "w": 225,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1350,
            "w": 200,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9600,
            "y": 1500,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1650,
            "w": 200,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9600,
            "y": 1650,
            "w": 200,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9800,
            "y": 1800,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9600,
            "y": 2350,
            "w": 450,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9750,
            "y": 2100,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 9950,
            "tpy": 2800,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1650,
            "w": 200,
            "h": 150,
            "type": "breakable",
            "maxStrength": 140,
            "currentStrength": 140,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 9600,
            "y": 1650,
            "w": 200,
            "h": 150,
            "type": "breakable",
            "maxStrength": 140,
            "currentStrength": 140,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1350,
            "w": 200,
            "h": 150,
            "type": "breakable",
            "maxStrength": 140,
            "currentStrength": 140,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 9600,
            "y": 1350,
            "w": 200,
            "h": 150,
            "type": "breakable",
            "maxStrength": 140,
            "currentStrength": 140,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 9800,
            "y": 1500,
            "w": 200,
            "h": 150,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9800,
            "y": 1500,
            "w": 200,
            "h": 150,
            "type": "breakable",
            "maxStrength": 140,
            "currentStrength": 140,
            "time": 0,
            "timer": 0,
            "regenTime": 8,
            "inView": false
        },
        {
            "x": 9648.958333327142,
            "y": 1400,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    9600,
                    1350
                ],
                [
                    9600,
                    1400
                ],
                [
                    9800,
                    1400
                ],
                [
                    9800,
                    1650
                ],
                [
                    9600,
                    1650
                ],
                [
                    9600,
                    1700
                ],
                [
                    9900,
                    1700
                ],
                [
                    9900,
                    1350
                ]
            ],
            "speed": 125,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 9600,
                "y": 1400
            },
            "pointTo": {
                "x": 9800,
                "y": 1400
            },
            "xv": 125,
            "yv": 0,
            "inView": false
        },
        {
            "x": 9648.958333327142,
            "y": 1650,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    9600,
                    1350
                ],
                [
                    9900,
                    1350
                ],
                [
                    9900,
                    1700
                ],
                [
                    9600,
                    1700
                ],
                [
                    9600,
                    1650
                ],
                [
                    9800,
                    1650
                ],
                [
                    9800,
                    1400
                ],
                [
                    9600,
                    1400
                ]
            ],
            "speed": 125,
            "currentPoint": 4,
            "collidable": false,
            "pointOn": {
                "x": 9600,
                "y": 1650
            },
            "pointTo": {
                "x": 9800,
                "y": 1650
            },
            "xv": 125,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    7250
                ],
                [
                    9675,
                    7500
                ],
                [
                    9600,
                    7600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9600,
                "right": 9675,
                "top": 7250,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9850,
                    6600
                ],
                [
                    10000,
                    6600
                ],
                [
                    10000,
                    6950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9850,
                "right": 10000,
                "top": 6600,
                "bottom": 6950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9600,
                    6600
                ],
                [
                    9750,
                    6600
                ],
                [
                    9600,
                    6950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9600,
                "right": 9750,
                "top": 6600,
                "bottom": 6950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    6850
                ],
                [
                    9875,
                    7025
                ],
                [
                    9900,
                    7200
                ],
                [
                    9800,
                    7400
                ],
                [
                    9700,
                    7200
                ],
                [
                    9725,
                    7025
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9700,
                "right": 9900,
                "top": 6850,
                "bottom": 7400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    7550
                ],
                [
                    10000,
                    7650
                ],
                [
                    9600,
                    8050
                ],
                [
                    9600,
                    7950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9600,
                "right": 10000,
                "top": 7550,
                "bottom": 8050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    7250
                ],
                [
                    10000,
                    7600
                ],
                [
                    9925,
                    7500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9925,
                "right": 10000,
                "top": 7250,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 200,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 3700,
            "w": 400,
            "h": 400,
            "spawn": {
                "x": 200,
                "y": 3900
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 100,
            "y": 500,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 400,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 275,
            "y": 400,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 400,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 350,
            "y": 550,
            "radius": 35,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 300,
            "y": 700,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "x": 300,
            "y": 1000,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 1200,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -25,
            "y": 1100,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -3.061616997868383e-15,
            "y": 1200,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 50,
            "tpy": 1350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 100,
            "y": 900,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -25,
            "y": 800,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 800,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": -25,
            "y": 3250,
            "w": 175,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 250,
            "y": 3250,
            "w": 200,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 1300,
            "w": 100,
            "h": 100,
            "type": "switchnormal",
            "onTime": 1.2,
            "offTime": 1.2,
            "state": false,
            "timer": 0.4083333333335682,
            "inView": false
        },
        {
            "x": 200,
            "y": 1498.75,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    200,
                    1400
                ],
                [
                    200,
                    1600
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 200,
                "y": 1400
            },
            "pointTo": {
                "x": 200,
                "y": 1600
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 300,
            "y": 1100,
            "w": 100,
            "h": 600,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 1500,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 1698.75,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    100,
                    1600
                ],
                [
                    100,
                    1800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 100,
                "y": 1600
            },
            "pointTo": {
                "x": 100,
                "y": 1800
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": -3.0616169978683834e-15,
            "y": 1400,
            "w": 100,
            "h": 500,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 300,
            "y": 1800,
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
            "x": 200,
            "y": 1700,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 2000,
            "w": 100,
            "h": 100,
            "type": "breakable",
            "maxStrength": 7,
            "currentStrength": 7,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 200,
            "y": 2200,
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
            "x": 300,
            "y": 1900,
            "w": 100,
            "h": 500,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 1900,
            "w": 200,
            "h": 400,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": -3.061616997868383e-15,
            "y": 2200,
            "w": 200,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 2300,
            "w": 300,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 1900,
            "w": 100,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 300,
            "y": 2600,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": -1.5308084989341915e-15,
            "y": 2850,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": -1.5308084989341915e-15,
            "y": 2600,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 100,
            "y": 3000,
            "w": 200,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 300,
            "y": 2850,
            "w": 100,
            "h": 50,
            "type": "breakable",
            "maxStrength": 30,
            "currentStrength": 30,
            "time": 0,
            "timer": 0,
            "regenTime": 3,
            "inView": false
        },
        {
            "x": 100,
            "y": 2750,
            "w": 200,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 2500,
            "w": 200,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 102.08333333332577,
            "y": 3150,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    0,
                    3150
                ],
                [
                    300,
                    3150
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 300,
                "y": 3150
            },
            "pointTo": {
                "x": 0,
                "y": 3150
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": false
        },
        {
            "x": 197.91666666667433,
            "y": 2900,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    0,
                    2900
                ],
                [
                    300,
                    2900
                ]
            ],
            "speed": 250,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 0,
                "y": 2900
            },
            "pointTo": {
                "x": 300,
                "y": 2900
            },
            "xv": 250,
            "yv": 0,
            "inView": false
        },
        {
            "x": 102.08333333332577,
            "y": 2650,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    0,
                    2650
                ],
                [
                    300,
                    2650
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 300,
                "y": 2650
            },
            "pointTo": {
                "x": 0,
                "y": 2650
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": false
        },
        {
            "x": 0,
            "y": 1900,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 50,
            "tpy": 1950,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 0,
            "y": 4100,
            "w": 400,
            "h": 1800,
            "type": "vinette",
            "ir": 0.25,
            "or": 0.75,
            "o": 0.6,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 9600,
            "y": 6300,
            "radius": 150,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 10000,
            "y": 6300,
            "radius": 150,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 0,
            "y": 7700,
            "w": 400,
            "h": 400,
            "type": "trans",
            "collide": false,
            "opaq": 0.2,
            "inView": false
        },
        {
            "x": 0,
            "y": 9600,
            "w": 400,
            "h": 400,
            "type": "color",
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "inView": false
        },
        {
            "x": 225,
            "y": 6900,
            "radius": 375,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.625122517784973,
            "startPolygon": {
                "points": [
                    [
                        225,
                        7125
                    ],
                    [
                        225.00000000000003,
                        7275
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        205.3899578817769,
                        6675.856192929357
                    ],
                    [
                        192.31659646962817,
                        6526.426988215595
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 225,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 150,
            "y": 6325,
            "radius": 350,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        150,
                        6475
                    ],
                    [
                        150.00000000000003,
                        6675
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        0,
                        6325
                    ],
                    [
                        -200,
                        6325
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
            "x": 25,
            "y": 5900,
            "w": 350,
            "h": 375,
            "type": "color",
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    9900
                ],
                [
                    9600,
                    10000
                ],
                [
                    9200,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9200,
                "right": 9600,
                "top": 9900,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    9600
                ],
                [
                    9600,
                    9600
                ],
                [
                    9400,
                    9700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9200,
                "right": 9600,
                "top": 9600,
                "bottom": 9700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9400,
            "y": 9800,
            "radius": 50,
            "radius2": 25,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 9050,
            "y": 9700,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8800,
            "y": 9800,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8550,
            "y": 9750,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7900,
            "y": 9950,
            "w": 650,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    8600,
                    9800
                ],
                [
                    8650,
                    9850
                ],
                [
                    8650,
                    10000
                ],
                [
                    8550,
                    10000
                ],
                [
                    8550,
                    9850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8550,
                "right": 8650,
                "top": 9800,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9100,
                    9750
                ],
                [
                    9150,
                    9800
                ],
                [
                    9150,
                    10000
                ],
                [
                    9050,
                    10000
                ],
                [
                    9050,
                    9800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9050,
                "right": 9150,
                "top": 9750,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8061.5,
            "y": 9900,
            "w": 100,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7900,
                    9900
                ],
                [
                    8450,
                    9900
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "pointOn": {
                "x": 8450,
                "y": 9900
            },
            "pointTo": {
                "x": 7900,
                "y": 9900
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 8288.5,
            "y": 9900,
            "w": 100,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7900,
                    9900
                ],
                [
                    8450,
                    9900
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "pointOn": {
                "x": 7900,
                "y": 9900
            },
            "pointTo": {
                "x": 8450,
                "y": 9900
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7200,
            "y": 9900,
            "w": 600,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    7275,
                    9825
                ],
                [
                    7350,
                    9900
                ],
                [
                    7200,
                    9900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7200,
                "right": 7350,
                "top": 9825,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7575,
                    9825
                ],
                [
                    7650,
                    9900
                ],
                [
                    7500,
                    9900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7500,
                "right": 7650,
                "top": 9825,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7425,
                    9825
                ],
                [
                    7500,
                    9900
                ],
                [
                    7350,
                    9900
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 7350,
                "right": 7500,
                "top": 9825,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7725,
                    9825
                ],
                [
                    7800,
                    9900
                ],
                [
                    7650,
                    9900
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 7650,
                "right": 7800,
                "top": 9825,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6950,
            "y": 9600,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6650,
            "y": 9650,
            "w": 100,
            "h": 375,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 6750,
            "y": 9950,
            "w": 150,
            "h": 50,
            "type": "switchnormal",
            "onTime": 2,
            "offTime": 2,
            "state": true,
            "timer": 0.008333333333701646,
            "inView": false
        },
        {
            "x": 6800,
            "y": 9850,
            "w": 150,
            "h": 50,
            "type": "switchnormal",
            "onTime": 2,
            "offTime": 2,
            "state": false,
            "timer": 0.008333333333701646,
            "inView": false
        },
        {
            "x": 6750,
            "y": 9750,
            "w": 150,
            "h": 50,
            "type": "switchnormal",
            "onTime": 2,
            "offTime": 2,
            "state": true,
            "timer": 0.008333333333701646,
            "inView": false
        },
        {
            "x": 6800,
            "y": 9650,
            "w": 150,
            "h": 50,
            "type": "switchnormal",
            "onTime": 2,
            "offTime": 2,
            "state": false,
            "timer": 0.008333333333701646,
            "inView": false
        },
        {
            "x": 6300,
            "y": 9600,
            "w": 100,
            "h": 300,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "points": [
                [
                    5000,
                    9700
                ],
                [
                    5600,
                    10000
                ],
                [
                    4400,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4400,
                "right": 5600,
                "top": 9700,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    9600
                ],
                [
                    4800,
                    9600
                ],
                [
                    4400,
                    9800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4000,
                "right": 4800,
                "top": 9600,
                "bottom": 9800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5200,
                    9600
                ],
                [
                    6000,
                    9600
                ],
                [
                    5600,
                    9800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5200,
                "right": 6000,
                "top": 9600,
                "bottom": 9800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6050,
                    9700
                ],
                [
                    6050,
                    10000
                ],
                [
                    5600,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5600,
                "right": 6050,
                "top": 9700,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6148.75,
            "y": 9950,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6050,
                    9950
                ],
                [
                    6250,
                    9950
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6050,
                "y": 9950
            },
            "pointTo": {
                "x": 6250,
                "y": 9950
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6151.25,
            "y": 9850,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6050,
                    9850
                ],
                [
                    6250,
                    9850
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 6250,
                "y": 9850
            },
            "pointTo": {
                "x": 6050,
                "y": 9850
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6148.75,
            "y": 9750,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6050,
                    9750
                ],
                [
                    6250,
                    9750
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6050,
                "y": 9750
            },
            "pointTo": {
                "x": 6250,
                "y": 9750
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6148.75,
            "y": 9950,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6050,
                    9950
                ],
                [
                    6250,
                    9950
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6050,
                "y": 9950
            },
            "pointTo": {
                "x": 6250,
                "y": 9950
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6151.25,
            "y": 9650,
            "w": 50,
            "h": 50,
            "type": "move",
            "points": [
                [
                    6050,
                    9650
                ],
                [
                    6250,
                    9650
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 6250,
                "y": 9650
            },
            "pointTo": {
                "x": 6050,
                "y": 9650
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6150,
            "y": 9772.8125,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6150,
                    9600
                ],
                [
                    6150,
                    9950
                ]
            ],
            "speed": 262.5,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6150,
                "y": 9600
            },
            "pointTo": {
                "x": 6150,
                "y": 9950
            },
            "xv": 1.607348923880901e-14,
            "yv": 262.5,
            "inView": false
        },
        {
            "x": 6150,
            "y": 9777.1875,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    6150,
                    9600
                ],
                [
                    6150,
                    9950
                ]
            ],
            "speed": 262.5,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6150,
                "y": 9950
            },
            "pointTo": {
                "x": 6150,
                "y": 9600
            },
            "xv": 1.607348923880901e-14,
            "yv": -262.5,
            "inView": false
        },
        {
            "points": [
                [
                    6025,
                    9875
                ],
                [
                    6175,
                    10025
                ],
                [
                    6025,
                    10025
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6025,
                "right": 6175,
                "top": 9875,
                "bottom": 10025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6175,
                    9575
                ],
                [
                    6325,
                    9575
                ],
                [
                    6325,
                    9725
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6175,
                "right": 6325,
                "top": 9575,
                "bottom": 9725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7050,
                    9675
                ],
                [
                    7100,
                    9725
                ],
                [
                    7050,
                    9775
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7050,
                "right": 7100,
                "top": 9675,
                "bottom": 9775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7225,
            "y": 9650,
            "w": 50,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7388.5,
            "y": 9650,
            "w": 50,
            "h": 25,
            "type": "move",
            "points": [
                [
                    7350,
                    9650
                ],
                [
                    7550,
                    9650
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 7350,
                "y": 9650
            },
            "pointTo": {
                "x": 7550,
                "y": 9650
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7650,
            "y": 9600,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7800,
            "y": 9650,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8000,
            "y": 9650,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4575,
            "y": 4200,
            "w": 1225,
            "h": 400,
            "type": "winpad",
            "inView": false
        },
        {
            "x": 4575,
            "y": 5400,
            "w": 1225,
            "h": 400,
            "type": "winpad",
            "inView": false
        },
        {
            "x": 5400,
            "y": 4550,
            "w": 400,
            "h": 875,
            "type": "winpad",
            "inView": false
        },
        {
            "x": 4750,
            "y": 4800,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 4800,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 4850,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4850,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4800,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 4850,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4800,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4850,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4700,
            "y": 4700,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 6925,
            "tpy": 9975,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4925,
            "y": 4700,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 6925,
            "tpy": 9975,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 4700,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 6925,
            "tpy": 9975,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 4925,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 6925,
            "tpy": 9975,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4775,
            "y": 4775,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4850,
            "y": 4775,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4775,
            "y": 4775,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4775,
            "y": 4850,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "points": [
                [
                    8850,
                    9850
                ],
                [
                    8900,
                    9900
                ],
                [
                    8900,
                    10000
                ],
                [
                    8800,
                    10000
                ],
                [
                    8800,
                    9900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8800,
                "right": 8900,
                "top": 9850,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4950,
            "y": 4600,
            "w": 100,
            "h": 800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4600,
            "y": 4950,
            "w": 800,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4600,
            "y": 4600,
            "w": 100,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4600,
            "y": 4600,
            "w": 800,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 4625,
            "w": 100,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4600,
            "y": 5300,
            "w": 800,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3075,
            "y": 10000,
            "w": 3025,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    400,
                    9600
                ],
                [
                    700,
                    9600
                ],
                [
                    400,
                    9900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 400,
                "right": 700,
                "top": 9600,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    800,
                    9700
                ],
                [
                    1100,
                    9700
                ],
                [
                    800,
                    10000
                ],
                [
                    500,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 500,
                "right": 1100,
                "top": 9700,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1400,
                    9600
                ],
                [
                    1750,
                    9600
                ],
                [
                    1450,
                    9900
                ],
                [
                    1100,
                    9900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1100,
                "right": 1750,
                "top": 9600,
                "bottom": 9900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1575,
            "y": 9600,
            "w": 150,
            "h": 350,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 7000,
            "y": 9800,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6950,
            "y": 9775,
            "w": 75,
            "h": 175,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 8250,
            "y": 9650,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 8400,
            "y": 9600,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 8350,
            "y": 9600,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 4825,
            "tpy": 4825,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8300,
            "y": 9575,
            "w": 125,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.95,
            "inView": false
        },
        {
            "x": 6425,
            "y": 9800,
            "w": 225,
            "h": 50,
            "type": "rotate-lava",
            "angle": 17198.533333327166,
            "rotateSpeed": 112,
            "pivotX": 6425,
            "pivotY": 9800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 115.2443057161611,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 6625,
            "y": 9800,
            "w": 225,
            "h": 50,
            "type": "rotate-lava",
            "angle": -17198.533333327166,
            "rotateSpeed": -112,
            "pivotX": 6625,
            "pivotY": 9800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 115.2443057161611,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2650,
            "y": 9950,
            "w": 150,
            "h": 50,
            "type": "bounce",
            "effect": 460,
            "inView": false
        },
        {
            "x": 2800,
            "y": 9700,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 2825,
            "y": 9750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "x": 3000,
            "y": 9575,
            "w": 100,
            "h": 475,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2225,
            "y": 9650,
            "w": 150,
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
            "x": 2225,
            "y": 9650,
            "w": 175,
            "h": 350,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 1550,
            "y": 9950,
            "w": 650,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    1550,
                    9950
                ],
                [
                    1550,
                    10000
                ],
                [
                    1500,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1500,
                "right": 1550,
                "top": 9950,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    9950
                ],
                [
                    2250,
                    10000
                ],
                [
                    2200,
                    10000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2200,
                "right": 2250,
                "top": 9950,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2950,
            "y": 9800,
            "w": 50,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2800,
            "y": 9950,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 9950,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2400,
            "y": 9700,
            "w": 150,
            "h": 325,
            "type": "normal",
            "canJump": false,
            "inView": false
        },
        {
            "points": [
                [
                    2550,
                    9750
                ],
                [
                    2600,
                    9800
                ],
                [
                    2600,
                    10000
                ],
                [
                    2550,
                    10000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2550,
                "right": 2600,
                "top": 9750,
                "bottom": 10000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2750,
            "y": 9600,
            "w": 100,
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
            "x": 2750,
            "y": 9600,
            "w": 100,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 2850,
            "y": 9600,
            "w": 150,
            "h": 150,
            "type": "tp",
            "tpx": 3125,
            "tpy": 9725,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3100,
            "y": 9750,
            "w": 200,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3400,
            "y": 9600,
            "w": 200,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3400,
            "y": 9900,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 9800,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 9550,
            "w": 200,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3950,
            "y": 9850,
            "w": 200,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.4,
            "inView": false
        },
        {
            "x": 415.32036581285763,
            "y": 9884.67963418713,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    400,
                    9900
                ],
                [
                    700,
                    9600
                ]
            ],
            "speed": 172,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 400,
                "y": 9900
            },
            "pointTo": {
                "x": 700,
                "y": 9600
            },
            "xv": 121.62236636408618,
            "yv": -121.62236636408616,
            "inView": false
        },
        {
            "x": 1184.6796341869656,
            "y": 9615.320365813044,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    1200,
                    9600
                ],
                [
                    900,
                    9900
                ]
            ],
            "speed": 172,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 1200,
                "y": 9600
            },
            "pointTo": {
                "x": 900,
                "y": 9900
            },
            "xv": -121.62236636408616,
            "yv": 121.62236636408618,
            "inView": false
        },
        {
            "x": 684.6796341871416,
            "y": 9615.32036581287,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    700,
                    9600
                ],
                [
                    400,
                    9900
                ]
            ],
            "speed": 172,
            "currentPoint": 0,
            "pointOn": {
                "x": 700,
                "y": 9600
            },
            "pointTo": {
                "x": 400,
                "y": 9900
            },
            "xv": -121.62236636408616,
            "yv": 121.62236636408618,
            "inView": false
        },
        {
            "x": 915.3203658130345,
            "y": 9884.679634186956,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    900,
                    9900
                ],
                [
                    1200,
                    9600
                ]
            ],
            "speed": 172,
            "currentPoint": 0,
            "pointOn": {
                "x": 900,
                "y": 9900
            },
            "pointTo": {
                "x": 1200,
                "y": 9600
            },
            "xv": 121.62236636408618,
            "yv": -121.62236636408616,
            "inView": false
        },
        {
            "x": 4825,
            "y": 9250,
            "w": 350,
            "h": 325,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=dkYHgxfQZBA",
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "points": [
                [
                    4800,
                    8900
                ],
                [
                    5200,
                    8900
                ],
                [
                    5000,
                    9100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4800,
                "right": 5200,
                "top": 8900,
                "bottom": 9100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 800,
            "y": 8600,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 950,
                "y": 8750
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    4875,
                    8950
                ],
                [
                    5125,
                    8950
                ],
                [
                    5000,
                    9075
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4875,
                "right": 5125,
                "top": 8950,
                "bottom": 9075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8900,
            "y": 8900,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 9050,
                "y": 9050
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    4600,
                    9000
                ],
                [
                    4800,
                    9200
                ],
                [
                    4400,
                    9200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4400,
                "right": 4800,
                "top": 9000,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5400,
                    9000
                ],
                [
                    5600,
                    9200
                ],
                [
                    5200,
                    9200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5200,
                "right": 5600,
                "top": 9000,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3200,
                    9000
                ],
                [
                    3400,
                    9200
                ],
                [
                    3000,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3000,
                "right": 3400,
                "top": 9000,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2250,
                    8900
                ],
                [
                    2650,
                    8900
                ],
                [
                    2450,
                    9100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2250,
                "right": 2650,
                "top": 8900,
                "bottom": 9100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    8900
                ],
                [
                    1700,
                    8900
                ],
                [
                    1600,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1300,
                    8900
                ],
                [
                    1500,
                    8900
                ],
                [
                    1400,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1300,
                "right": 1500,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1700,
                    8900
                ],
                [
                    1900,
                    8900
                ],
                [
                    1800,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1900,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1300,
                    8900
                ],
                [
                    1400,
                    8900
                ],
                [
                    1350,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1300,
                "right": 1400,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1400,
                    8900
                ],
                [
                    1500,
                    8900
                ],
                [
                    1450,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1400,
                "right": 1500,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    8900
                ],
                [
                    1600,
                    8900
                ],
                [
                    1550,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1500,
                "right": 1600,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1600,
                    8900
                ],
                [
                    1700,
                    8900
                ],
                [
                    1650,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1600,
                "right": 1700,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1700,
                    8900
                ],
                [
                    1800,
                    8900
                ],
                [
                    1750,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1800,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1800,
                    8900
                ],
                [
                    1900,
                    8900
                ],
                [
                    1850,
                    8950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1800,
                "right": 1900,
                "top": 8900,
                "bottom": 8950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1400,
                    9150
                ],
                [
                    1500,
                    9200
                ],
                [
                    1300,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1300,
                "right": 1500,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1600,
                    9150
                ],
                [
                    1700,
                    9200
                ],
                [
                    1500,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1800,
                    9150
                ],
                [
                    1900,
                    9200
                ],
                [
                    1700,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1900,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1350,
                    9150
                ],
                [
                    1400,
                    9200
                ],
                [
                    1300,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1300,
                "right": 1400,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1450,
                    9150
                ],
                [
                    1500,
                    9200
                ],
                [
                    1400,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1400,
                "right": 1500,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1550,
                    9150
                ],
                [
                    1600,
                    9200
                ],
                [
                    1500,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1500,
                "right": 1600,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    9150
                ],
                [
                    1700,
                    9200
                ],
                [
                    1600,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1600,
                "right": 1700,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    9150
                ],
                [
                    1800,
                    9200
                ],
                [
                    1700,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1700,
                "right": 1800,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1850,
                    9150
                ],
                [
                    1900,
                    9200
                ],
                [
                    1800,
                    9200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1800,
                "right": 1900,
                "top": 9150,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1019.25,
            "y": 8100,
            "w": 50,
            "h": 500,
            "type": "move",
            "points": [
                [
                    800,
                    8100
                ],
                [
                    1050,
                    8100
                ]
            ],
            "speed": 90,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 800,
                "y": 8100
            },
            "pointTo": {
                "x": 1050,
                "y": 8100
            },
            "xv": 90,
            "yv": 0,
            "inView": false
        },
        {
            "x": 800,
            "y": 8100,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 8200,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8250,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 8300,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 8400,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8450,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 8500,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8550,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8100,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 8150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8200,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 8250,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8300,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8400,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 8450,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8500,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 8550,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1019.25,
            "y": 7600,
            "w": 50,
            "h": 500,
            "type": "lavamove",
            "points": [
                [
                    800,
                    7600
                ],
                [
                    1050,
                    7600
                ]
            ],
            "speed": 90,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 800,
                "y": 7600
            },
            "pointTo": {
                "x": 1050,
                "y": 7600
            },
            "xv": 90,
            "yv": 0,
            "inView": false
        },
        {
            "x": 800,
            "y": 8000,
            "w": 25,
            "h": 125,
            "type": "tp",
            "tpx": 1050,
            "tpy": 8050,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 7900,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 7950,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 7800,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 7850,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 7700,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 7750,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 7600,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 1050,
            "tpy": 7650,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 8000,
            "w": 25,
            "h": 125,
            "type": "tp",
            "tpx": 850,
            "tpy": 8050,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 7900,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 7950,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 7800,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 7850,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 7700,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 7750,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 1075,
            "y": 7600,
            "w": 25,
            "h": 100,
            "type": "tp",
            "tpx": 850,
            "tpy": 7650,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "points": [
                [
                    975,
                    7475
                ],
                [
                    1100,
                    7475
                ],
                [
                    1100,
                    7600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 975,
                "right": 1100,
                "top": 7475,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    800,
                    7475
                ],
                [
                    925,
                    7475
                ],
                [
                    800,
                    7600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 800,
                "right": 925,
                "top": 7475,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 950,
            "y": 7250,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1100,
            "y": 7475,
            "radius": 125,
            "type": "circle-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        1100,
                        7475
                    ],
                    [
                        975,
                        7475
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1100,
                        7475
                    ],
                    [
                        1100,
                        7350
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
            "y": 7475,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.101523742186674,
            "startPolygon": {
                "points": [
                    [
                        925,
                        7475
                    ],
                    [
                        875,
                        7475
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        999.6241236385669,
                        7331.648392249426
                    ],
                    [
                        970.9453018210146,
                        7290.690790034977
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
            "x": 950,
            "y": 7250,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 0.8377580409572781,
            "startPolygon": {
                "points": [
                    [
                        950,
                        7100
                    ],
                    [
                        950,
                        7025
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1050.3695909538287,
                        7361.471723821609
                    ],
                    [
                        1100.554386430743,
                        7417.2075857324135
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
            "x": 750,
            "y": 7150,
            "w": 175,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 7150,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 950,
            "y": 7000,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        950,
                        7150
                    ],
                    [
                        950,
                        7225
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6850
                    ],
                    [
                        950,
                        6775
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
            "y": 7000,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 800,
            "y": 6750,
            "w": 150,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1000,
            "y": 6900,
            "w": 125,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 950,
            "y": 6750,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        1100,
                        6750
                    ],
                    [
                        1175,
                        6750
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6900
                    ],
                    [
                        950,
                        6975
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
            "y": 6750,
            "radius": 100,
            "type": "circle-slice",
            "startAngle": 0,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6750
                    ],
                    [
                        1050,
                        6750
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6750
                    ],
                    [
                        950,
                        6850
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 925,
            "y": 7600,
            "w": 50,
            "h": 1000,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 950,
            "y": 7600,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 825,
            "y": 8300,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 975,
            "y": 7975,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 825,
            "y": 7600,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 800,
            "y": 5800,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 950,
                "y": 5950
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 950,
            "y": 6600,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 551.494954809196,
            "endAngle": 553.0657511359926,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6600
                    ],
                    [
                        971.7397788744776,
                        6451.583754209693
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6600
                    ],
                    [
                        1098.4162457902687,
                        6621.7397788747385
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 3.490658503988659,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 6350,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": -549.9241584823993,
            "endAngle": -548.3533621556027,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6350
                    ],
                    [
                        801.5837542096548,
                        6371.739778874216
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6350
                    ],
                    [
                        928.2602211260439,
                        6201.583754209617
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -3.490658503988659,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 6600,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.979350694547071,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6750
                    ],
                    [
                        950,
                        6825
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        849.6304090461713,
                        6488.528276178391
                    ],
                    [
                        799.4456135692568,
                        6432.7924142675865
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
            "y": 6350,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 4.71238898038469,
            "endAngle": 0.8377580409572781,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6200
                    ],
                    [
                        950,
                        6125
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        1050.3695909538287,
                        6461.471723821609
                    ],
                    [
                        1100.554386430743,
                        6517.2075857324135
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
            "y": 6100,
            "w": 175,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 602.0833333326746,
            "y": 6100,
            "w": 150,
            "h": 100,
            "type": "move",
            "points": [
                [
                    500,
                    6100
                ],
                [
                    725,
                    6100
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 725,
                "y": 6100
            },
            "pointTo": {
                "x": 500,
                "y": 6100
            },
            "xv": -250,
            "yv": 3.061616997868383e-14,
            "inView": false
        },
        {
            "x": 997.9166666666689,
            "y": 6100,
            "w": 150,
            "h": 100,
            "type": "move",
            "points": [
                [
                    1100,
                    6100
                ],
                [
                    875,
                    6100
                ]
            ],
            "speed": 250,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 875,
                "y": 6100
            },
            "pointTo": {
                "x": 1100,
                "y": 6100
            },
            "xv": 250,
            "yv": 0,
            "inView": false
        },
        {
            "x": 950,
            "y": 6600,
            "radius": 150,
            "type": "circle-hollow-slice",
            "startAngle": 554.6365474627893,
            "endAngle": 556.2073437895859,
            "startPolygon": {
                "points": [
                    [
                        950,
                        6600
                    ],
                    [
                        928.260221125001,
                        6748.41624579023
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        950,
                        6600
                    ],
                    [
                        801.5837542098076,
                        6578.26022112474
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 3.490658503988659,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 6600,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 950,
            "y": 6350,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8977,
            "y": 8836,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9128,
            "y": 8724,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9148,
            "y": 8838,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 8953,
            "y": 8702,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9045,
            "y": 8559,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9143,
            "y": 8600,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9141,
            "y": 8430,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9159,
            "y": 8516,
            "radius": 26,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9050,
            "y": 8200,
            "r": 35,
            "angle": 0,
            "type": "circle-sentry",
            "speed": 120,
            "laser": {
                "x": 9050,
                "y": 8200,
                "w": 300,
                "h": 33,
                "pivotX": 9200,
                "pivotY": 8216.5,
                "distToPivot": 0
            },
            "rest": 0,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 35,
            "inView": false
        },
        {
            "x": 9150,
            "y": 8027,
            "w": 65,
            "h": 46,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8885,
            "y": 8027,
            "w": 65,
            "h": 46,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8925,
            "y": 7600,
            "r": 35,
            "angle": -310.048676807924,
            "type": "circle-sentry",
            "speed": 180,
            "laser": {
                "x": 8925,
                "y": 7600,
                "w": 300,
                "h": 33,
                "pivotX": 9075,
                "pivotY": 7616.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 35,
            "inView": false
        },
        {
            "x": 9175,
            "y": 7600,
            "r": 35,
            "angle": -310.048676807924,
            "type": "circle-sentry",
            "speed": 180,
            "laser": {
                "x": 9175,
                "y": 7600,
                "w": 300,
                "h": 33,
                "pivotX": 9325,
                "pivotY": 7616.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 35,
            "inView": false
        },
        {
            "x": 9050,
            "y": 7225,
            "r": 35,
            "angle": -310.048676807924,
            "type": "circle-sentry",
            "speed": 180,
            "laser": {
                "x": 9050,
                "y": 7225,
                "w": 300,
                "h": 33,
                "pivotX": 9200,
                "pivotY": 7241.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 35,
            "inView": false
        },
        {
            "x": 8900,
            "y": 7400,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
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
            "x": 9200,
            "y": 7050,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9200,
            "y": 7400,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9050,
            "y": 6425,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        8900,
                        6425
                    ],
                    [
                        8825,
                        6425
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9200,
                        6425
                    ],
                    [
                        9275,
                        6425
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
            "x": 8850,
            "y": 6200,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9175,
            "y": 6225,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8875,
            "y": 6225,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5200,
            "y": 4775,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 4775,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 4775,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 4850,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5100,
            "y": 4850,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 4800,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5150,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5200,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 4800,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 4850,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5200,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5150,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 4750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 4900,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5050,
            "y": 4700,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 1750,
            "tpy": 4725,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5275,
            "y": 4700,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 1750,
            "tpy": 4725,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5050,
            "y": 4700,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 1750,
            "tpy": 4725,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5050,
            "y": 4925,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 1750,
            "tpy": 4725,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 9150,
            "y": 6200,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 800,
            "y": 800,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 950,
                "y": 950
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 1875,
            "y": 9775,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": 14127.366666664027,
            "rotateSpeed": 92,
            "pivotX": 1875,
            "pivotY": 9775,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2075,
            "y": 9775,
            "w": 250,
            "h": 50,
            "type": "rotate-normal",
            "angle": 14127.366666664027,
            "rotateSpeed": 92,
            "pivotX": 2075,
            "pivotY": 9775,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    2000
                ],
                [
                    1700,
                    2150
                ],
                [
                    1500,
                    2750
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 2000,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    2000
                ],
                [
                    2000,
                    2750
                ],
                [
                    1800,
                    2150
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1800,
                "right": 2000,
                "top": 2000,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1550,
                    4200
                ],
                [
                    1950,
                    4200
                ],
                [
                    1750,
                    4400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1550,
                "right": 1950,
                "top": 4200,
                "bottom": 4400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1511.5,
            "y": 4600,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    1500,
                    4450
                ],
                [
                    1900,
                    4450
                ],
                [
                    1900,
                    4600
                ],
                [
                    1500,
                    4600
                ]
            ],
            "speed": 180,
            "currentPoint": 2,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1900,
                "y": 4600
            },
            "pointTo": {
                "x": 1500,
                "y": 4600
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 1738.5,
            "y": 4600,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    1500,
                    4450
                ],
                [
                    1500,
                    4600
                ],
                [
                    1900,
                    4600
                ],
                [
                    1900,
                    4450
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1500,
                "y": 4600
            },
            "pointTo": {
                "x": 1900,
                "y": 4600
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 1661.5,
            "y": 4450,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    1500,
                    4450
                ],
                [
                    1500,
                    4600
                ],
                [
                    1900,
                    4600
                ],
                [
                    1900,
                    4450
                ]
            ],
            "speed": 180,
            "currentPoint": 3,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1900,
                "y": 4450
            },
            "pointTo": {
                "x": 1500,
                "y": 4450
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 1888.5,
            "y": 4450,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    1500,
                    4450
                ],
                [
                    1900,
                    4450
                ],
                [
                    1900,
                    4600
                ],
                [
                    1500,
                    4600
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 2050,
            "pointOn": {
                "x": 1500,
                "y": 4450
            },
            "pointTo": {
                "x": 1900,
                "y": 4450
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    1550,
                    4750
                ],
                [
                    1950,
                    4750
                ],
                [
                    1750,
                    4950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1550,
                "right": 1950,
                "top": 4750,
                "bottom": 4950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    4900
                ],
                [
                    1700,
                    5100
                ],
                [
                    1650,
                    5150
                ],
                [
                    1500,
                    5000
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 4900,
                "bottom": 5150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    4900
                ],
                [
                    2000,
                    5000
                ],
                [
                    1850,
                    5150
                ],
                [
                    1800,
                    5100
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1800,
                "right": 2000,
                "top": 4900,
                "bottom": 5150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1750,
            "y": 5375,
            "w": 150,
            "h": 150,
            "tpx": 1750,
            "tpy": 2050,
            "type": "rotate-tp",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 1750,
            "pivotY": 5375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    5500
                ],
                [
                    1700,
                    5700
                ],
                [
                    1500,
                    5900
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 5500,
                "bottom": 5900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    5500
                ],
                [
                    2000,
                    5900
                ],
                [
                    1800,
                    5700
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1800,
                "right": 2000,
                "top": 5500,
                "bottom": 5900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    5850
                ],
                [
                    1925,
                    6025
                ],
                [
                    1750,
                    6550
                ],
                [
                    1575,
                    6025
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1575,
                "right": 1925,
                "top": 5850,
                "bottom": 6550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    6250
                ],
                [
                    1700,
                    6850
                ],
                [
                    1500,
                    7000
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1500,
                "right": 1700,
                "top": 6250,
                "bottom": 7000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    6250
                ],
                [
                    2000,
                    7000
                ],
                [
                    1800,
                    6850
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1800,
                "right": 2000,
                "top": 6250,
                "bottom": 7000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1500,
                    7100
                ],
                [
                    1550,
                    7300
                ],
                [
                    1500,
                    7350
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1500,
                "right": 1550,
                "top": 7100,
                "bottom": 7350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    7100
                ],
                [
                    2000,
                    7350
                ],
                [
                    1950,
                    7300
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1950,
                "right": 2000,
                "top": 7100,
                "bottom": 7350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    7000
                ],
                [
                    1850,
                    7100
                ],
                [
                    1750,
                    7175
                ],
                [
                    1650,
                    7100
                ]
            ],
            "type": "poly-tp",
            "tpx": 1750,
            "tpy": 2050,
            "most": {
                "left": 1650,
                "right": 1850,
                "top": 7000,
                "bottom": 7175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1500,
            "y": 6850,
            "w": 500,
            "h": 1125,
            "type": "vinette",
            "ir": 0.25,
            "or": 0.5,
            "o": 1,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 950,
            "y": 5648.75,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    800,
                    5500
                ],
                [
                    950,
                    5500
                ],
                [
                    950,
                    5650
                ],
                [
                    800,
                    5650
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 950,
                "y": 5500
            },
            "pointTo": {
                "x": 950,
                "y": 5650
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 800,
            "y": 5501.25,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    800,
                    5500
                ],
                [
                    950,
                    5500
                ],
                [
                    950,
                    5650
                ],
                [
                    800,
                    5650
                ]
            ],
            "speed": 150,
            "currentPoint": 3,
            "pointOn": {
                "x": 800,
                "y": 5650
            },
            "pointTo": {
                "x": 800,
                "y": 5500
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 800,
            "y": 4800,
            "w": 300,
            "h": 600,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 800,
            "y": 5101.25,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    800,
                    5100
                ],
                [
                    800,
                    5250
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 800,
                "y": 5250
            },
            "pointTo": {
                "x": 800,
                "y": 5100
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 950,
            "y": 5098.75,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    950,
                    4950
                ],
                [
                    950,
                    5100
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 950,
                "y": 4950
            },
            "pointTo": {
                "x": 950,
                "y": 5100
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 800,
            "y": 4801.25,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    800,
                    4800
                ],
                [
                    800,
                    4950
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "pointOn": {
                "x": 800,
                "y": 4950
            },
            "pointTo": {
                "x": 800,
                "y": 4800
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 950,
            "y": 4050,
            "w": 400,
            "h": 100,
            "type": "rotatingsafe",
            "angle": 13820.25,
            "rotateSpeed": 90,
            "pivotX": 950,
            "pivotY": 4050,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 206.15528128088303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 950,
            "y": 3450,
            "w": 400,
            "h": 100,
            "type": "rotatingsafe",
            "angle": 13820.25,
            "rotateSpeed": 90,
            "pivotX": 950,
            "pivotY": 3450,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 206.15528128088303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 950,
            "y": 3750,
            "w": 400,
            "h": 100,
            "type": "rotatingsafe",
            "angle": -13820.25,
            "rotateSpeed": -90,
            "pivotX": 950,
            "pivotY": 3750,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 206.15528128088303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 800,
            "y": 3000,
            "w": 300,
            "h": 300,
            "spawn": {
                "x": 950,
                "y": 3150
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 950,
            "y": 3450,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 950,
            "y": 3750,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 950,
            "y": 4050,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1025,
            "y": 3950,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1025,
            "y": 3550,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 875,
            "y": 3650,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 875,
            "y": 3850,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1025,
            "y": 4150,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 1025,
            "y": 3350,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 925,
            "y": 5248.75,
            "w": 50,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    925,
                    5100
                ],
                [
                    925,
                    5250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 925,
                "y": 5100
            },
            "pointTo": {
                "x": 925,
                "y": 5250
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 925,
            "y": 4948.75,
            "w": 50,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    925,
                    4800
                ],
                [
                    925,
                    4950
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 925,
                "y": 4800
            },
            "pointTo": {
                "x": 925,
                "y": 4950
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 925,
            "y": 4951.25,
            "w": 50,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    925,
                    4950
                ],
                [
                    925,
                    5100
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 925,
                "y": 5100
            },
            "pointTo": {
                "x": 925,
                "y": 4950
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "points": [
                [
                    825,
                    4125
                ],
                [
                    900,
                    4200
                ],
                [
                    825,
                    4200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 825,
                "right": 900,
                "top": 4125,
                "bottom": 4200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    825,
                    3300
                ],
                [
                    900,
                    3300
                ],
                [
                    825,
                    3375
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 825,
                "right": 900,
                "top": 3300,
                "bottom": 3375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    800,
                    5650
                ],
                [
                    850,
                    5800
                ],
                [
                    800,
                    5850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 800,
                "right": 850,
                "top": 5650,
                "bottom": 5850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    800,
                    5450
                ],
                [
                    850,
                    5500
                ],
                [
                    800,
                    5650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 800,
                "right": 850,
                "top": 5450,
                "bottom": 5650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1100,
                    5450
                ],
                [
                    1100,
                    5650
                ],
                [
                    1050,
                    5500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1050,
                "right": 1100,
                "top": 5450,
                "bottom": 5650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1100,
                    5650
                ],
                [
                    1100,
                    5850
                ],
                [
                    1050,
                    5800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1050,
                "right": 1100,
                "top": 5650,
                "bottom": 5850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 875,
            "y": 4450,
            "r": 76,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 76,
            "inView": false
        },
        {
            "points": [
                [
                    875,
                    4375
                ],
                [
                    950,
                    4450
                ],
                [
                    875,
                    4525
                ],
                [
                    800,
                    4450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 800,
                "right": 950,
                "top": 4375,
                "bottom": 4525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 875,
            "y": 4450,
            "r": 54,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 54,
            "inView": false
        },
        {
            "x": 1075,
            "y": 4575,
            "r": 76,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 76,
            "inView": false
        },
        {
            "x": 1075,
            "y": 4325,
            "r": 76,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 76,
            "inView": false
        },
        {
            "points": [
                [
                    1075,
                    4500
                ],
                [
                    1150,
                    4575
                ],
                [
                    1075,
                    4650
                ],
                [
                    1000,
                    4575
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1000,
                "right": 1150,
                "top": 4500,
                "bottom": 4650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1075,
                    4250
                ],
                [
                    1150,
                    4325
                ],
                [
                    1075,
                    4400
                ],
                [
                    1000,
                    4325
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1000,
                "right": 1150,
                "top": 4250,
                "bottom": 4400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1075,
            "y": 4575,
            "r": 54,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 54,
            "inView": false
        },
        {
            "x": 1075,
            "y": 4325,
            "r": 54,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 54,
            "inView": false
        },
        {
            "points": [
                [
                    925,
                    4300
                ],
                [
                    975,
                    4300
                ],
                [
                    1025,
                    4450
                ],
                [
                    975,
                    4450
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 925,
                "right": 1025,
                "top": 4300,
                "bottom": 4450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    975,
                    4450
                ],
                [
                    1025,
                    4450
                ],
                [
                    975,
                    4600
                ],
                [
                    925,
                    4600
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 925,
                "right": 1025,
                "top": 4450,
                "bottom": 4600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4750,
            "y": 7100,
            "w": 500,
            "h": 500,
            "spawn": {
                "x": 5000,
                "y": 7350
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 9050,
            "y": 6875,
            "r": 50,
            "angle": -285.07301521188066,
            "type": "circle-sentry",
            "speed": 270,
            "laser": {
                "x": 9050,
                "y": 6875,
                "w": 300,
                "h": 50,
                "pivotX": 9200,
                "pivotY": 6900,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 50,
            "inView": false
        },
        {
            "x": 9050,
            "y": 6725,
            "r": 50,
            "angle": -285.07301521188066,
            "type": "circle-sentry",
            "speed": 270,
            "laser": {
                "x": 9050,
                "y": 6725,
                "w": 300,
                "h": 50,
                "pivotX": 9200,
                "pivotY": 6750,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 50,
            "inView": false
        },
        {
            "x": 9050,
            "y": 6575,
            "r": 50,
            "angle": -285.07301521188066,
            "type": "circle-sentry",
            "speed": 270,
            "laser": {
                "x": 9050,
                "y": 6575,
                "w": 300,
                "h": 50,
                "pivotX": 9200,
                "pivotY": 6600,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 50,
            "inView": false
        },
        {
            "x": 900,
            "y": 2850,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    900,
                    2900
                ],
                [
                    1000,
                    2900
                ],
                [
                    950,
                    3000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 900,
                "right": 1000,
                "top": 2900,
                "bottom": 3000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 900,
            "y": 1250,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 2,
            "currentCoins": 2,
            "inView": false
        },
        {
            "x": 750,
            "y": 1100,
            "w": 375,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 2550,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 2250,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 1950,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 1650,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 1350,
            "w": 100,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 800,
            "y": 2624.1499999982757,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    2550
                ],
                [
                    800,
                    2900
                ]
            ],
            "speed": 222,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 800,
                "y": 2550
            },
            "pointTo": {
                "x": 800,
                "y": 2900
            },
            "xv": 1.359357947053562e-14,
            "yv": 222,
            "inView": false
        },
        {
            "x": 950,
            "y": 1400,
            "w": 0.001,
            "h": 1475,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 850,
            "y": 1300,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1050,
            "y": 1300,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 833.983333333046,
            "y": 1350,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1350
                ],
                [
                    1000,
                    1350
                ]
            ],
            "speed": 242,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 800,
                "y": 1350
            },
            "pointTo": {
                "x": 1000,
                "y": 1350
            },
            "xv": 242,
            "yv": 0,
            "inView": false
        },
        {
            "x": 966.016666666954,
            "y": 1450,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1450
                ],
                [
                    1000,
                    1450
                ]
            ],
            "speed": 242,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1000,
                "y": 1450
            },
            "pointTo": {
                "x": 800,
                "y": 1450
            },
            "xv": -242,
            "yv": 2.963645253936595e-14,
            "inView": false
        },
        {
            "x": 800,
            "y": 1954.9333333321838,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1950
                ],
                [
                    800,
                    2100
                ]
            ],
            "speed": 112,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 800,
                "y": 2100
            },
            "pointTo": {
                "x": 800,
                "y": 1950
            },
            "xv": 6.858022075225178e-15,
            "yv": -112,
            "inView": false
        },
        {
            "x": 850,
            "y": 2095.066666667816,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    850,
                    1950
                ],
                [
                    850,
                    2100
                ]
            ],
            "speed": 112,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 850,
                "y": 1950
            },
            "pointTo": {
                "x": 850,
                "y": 2100
            },
            "xv": 6.858022075225178e-15,
            "yv": 112,
            "inView": false
        },
        {
            "x": 1050,
            "y": 1995.0666666675443,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1000,
                    1950
                ],
                [
                    1050,
                    1950
                ],
                [
                    1050,
                    2100
                ],
                [
                    1000,
                    2100
                ]
            ],
            "speed": 112,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 1050,
                "y": 1950
            },
            "pointTo": {
                "x": 1050,
                "y": 2100
            },
            "xv": 6.858022075225178e-15,
            "yv": 112,
            "inView": false
        },
        {
            "x": 1000,
            "y": 2054.933333332456,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1000,
                    1950
                ],
                [
                    1050,
                    1950
                ],
                [
                    1050,
                    2100
                ],
                [
                    1000,
                    2100
                ]
            ],
            "speed": 112,
            "currentPoint": 3,
            "collidable": false,
            "pointOn": {
                "x": 1000,
                "y": 2100
            },
            "pointTo": {
                "x": 1000,
                "y": 1950
            },
            "xv": 6.858022075225178e-15,
            "yv": -112,
            "inView": false
        },
        {
            "x": 1000,
            "y": 1788.5,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1550
                ],
                [
                    1000,
                    1550
                ],
                [
                    1000,
                    1850
                ],
                [
                    800,
                    1850
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "collidable": false,
            "pointOn": {
                "x": 1000,
                "y": 1550
            },
            "pointTo": {
                "x": 1000,
                "y": 1850
            },
            "xv": 1.1021821192326179e-14,
            "yv": 180,
            "inView": false
        },
        {
            "x": 861.5,
            "y": 1850,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1550
                ],
                [
                    1000,
                    1550
                ],
                [
                    1000,
                    1850
                ],
                [
                    800,
                    1850
                ]
            ],
            "speed": 180,
            "currentPoint": 2,
            "collidable": false,
            "pointOn": {
                "x": 1000,
                "y": 1850
            },
            "pointTo": {
                "x": 800,
                "y": 1850
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 800,
            "y": 1611.5,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1550
                ],
                [
                    1000,
                    1550
                ],
                [
                    1000,
                    1850
                ],
                [
                    800,
                    1850
                ]
            ],
            "speed": 180,
            "currentPoint": 3,
            "collidable": false,
            "pointOn": {
                "x": 800,
                "y": 1850
            },
            "pointTo": {
                "x": 800,
                "y": 1550
            },
            "xv": 1.1021821192326179e-14,
            "yv": -180,
            "inView": false
        },
        {
            "x": 938.5,
            "y": 1550,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    800,
                    1550
                ],
                [
                    1000,
                    1550
                ],
                [
                    1000,
                    1850
                ],
                [
                    800,
                    1850
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "collidable": false,
            "pointOn": {
                "x": 800,
                "y": 1550
            },
            "pointTo": {
                "x": 1000,
                "y": 1550
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 725,
            "y": 1200,
            "w": 50,
            "h": 1800,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 725,
            "y": 1125,
            "w": 450,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 1200,
            "w": 50,
            "h": 1800,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4300,
            "y": 800,
            "w": 200,
            "h": 300,
            "type": "switchlava",
            "onTime": 0.5,
            "offTime": 1,
            "state": true,
            "timer": 0.008333333333367636,
            "collidable": true,
            "inView": false
        },
        {
            "x": 3950,
            "y": 800,
            "w": 200,
            "h": 300,
            "type": "switchlava",
            "onTime": 0.5,
            "offTime": 1,
            "state": false,
            "timer": 0.25833333333336844,
            "collidable": true,
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    925
                ],
                [
                    2050,
                    950
                ],
                [
                    2000,
                    975
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 2050,
                "top": 925,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2075,
                    1050
                ],
                [
                    2100,
                    1100
                ],
                [
                    2050,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2050,
                "right": 2100,
                "top": 1050,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2025,
                    1050
                ],
                [
                    2050,
                    1100
                ],
                [
                    2000,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 2050,
                "top": 1050,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2125,
                    1050
                ],
                [
                    2150,
                    1100
                ],
                [
                    2100,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2100,
                "right": 2150,
                "top": 1050,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    800
                ],
                [
                    2650,
                    800
                ],
                [
                    2450,
                    975
                ],
                [
                    2200,
                    975
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2200,
                "right": 2650,
                "top": 800,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    925
                ],
                [
                    2200,
                    975
                ],
                [
                    2150,
                    950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2150,
                "right": 2200,
                "top": 925,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    875
                ],
                [
                    2200,
                    925
                ],
                [
                    2150,
                    900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2150,
                "right": 2200,
                "top": 875,
                "bottom": 925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    825
                ],
                [
                    2200,
                    875
                ],
                [
                    2150,
                    850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2150,
                "right": 2200,
                "top": 825,
                "bottom": 875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2800,
                    850
                ],
                [
                    3050,
                    1100
                ],
                [
                    2550,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2550,
                "right": 3050,
                "top": 850,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    800
                ],
                [
                    3650,
                    800
                ],
                [
                    3550,
                    900
                ],
                [
                    3150,
                    900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3050,
                "right": 3650,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3150,
                    1000
                ],
                [
                    3550,
                    1000
                ],
                [
                    3650,
                    1100
                ],
                [
                    3050,
                    1100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3050,
                "right": 3650,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3700,
            "y": 852.883333333477,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3700,
                    800
                ],
                [
                    3700,
                    1000
                ]
            ],
            "speed": 106,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3700,
                "y": 1000
            },
            "pointTo": {
                "x": 3700,
                "y": 800
            },
            "xv": 6.490628035480972e-15,
            "yv": -106,
            "inView": false
        },
        {
            "x": 1187.5,
            "y": 887.5,
            "r": 87.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 87.5,
            "inView": false
        },
        {
            "x": 1362.5,
            "y": 887.5,
            "r": 87.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 87.5,
            "inView": false
        },
        {
            "x": 1737.5,
            "y": 1012.5,
            "r": 87.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 87.5,
            "inView": false
        },
        {
            "x": 1912.5,
            "y": 1012.5,
            "r": 87.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 87.5,
            "inView": false
        },
        {
            "points": [
                [
                    1175,
                    800
                ],
                [
                    1275,
                    875
                ],
                [
                    1200,
                    975
                ],
                [
                    1100,
                    900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1100,
                "right": 1275,
                "top": 800,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1375,
                    800
                ],
                [
                    1450,
                    900
                ],
                [
                    1350,
                    975
                ],
                [
                    1275,
                    875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1275,
                "right": 1450,
                "top": 800,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1750,
                    925
                ],
                [
                    1825,
                    1025
                ],
                [
                    1725,
                    1100
                ],
                [
                    1650,
                    1000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1650,
                "right": 1825,
                "top": 925,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1900,
                    925
                ],
                [
                    2000,
                    1000
                ],
                [
                    1925,
                    1100
                ],
                [
                    1825,
                    1025
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1825,
                "right": 2000,
                "top": 925,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3975
                ],
                [
                    9000,
                    4150
                ],
                [
                    8900,
                    4225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 3975,
                "bottom": 4225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8875,
            "y": 1450,
            "w": 375,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8825,
            "y": 1450,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9125,
            "y": 1450,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    1040
                ],
                [
                    8950,
                    1100
                ],
                [
                    8825,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8825,
                "right": 8950,
                "top": 1040,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8790,
                    800
                ],
                [
                    8950,
                    800
                ],
                [
                    8900,
                    860
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8790,
                "right": 8950,
                "top": 800,
                "bottom": 860
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8350,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        8241.746824526945,
                        887.5
                    ],
                    [
                        8198.445554337723,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8458.253175473055,
                        887.5
                    ],
                    [
                        8501.554445662277,
                        862.5
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
            "x": 8350,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        8458.253175473055,
                        1012.5
                    ],
                    [
                        8501.554445662277,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8241.746824526945,
                        1012.5
                    ],
                    [
                        8198.445554337723,
                        1037.5
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
                    8400,
                    800
                ],
                [
                    8700,
                    800
                ],
                [
                    8550,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8400,
                "right": 8700,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8550,
                    1000
                ],
                [
                    8700,
                    1100
                ],
                [
                    8400,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8400,
                "right": 8700,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    1000
                ],
                [
                    8300,
                    1100
                ],
                [
                    8000,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8300,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8750,
            "y": 950,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 8292.149999997824,
            "rotateSpeed": 54,
            "pivotX": 8750,
            "pivotY": 950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 8325,
            "y": 925,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 8750,
            "y": 950,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 8312.149999997857,
            "rotateSpeed": 54,
            "pivotX": 8750,
            "pivotY": 950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 8750,
            "y": 950,
            "w": 250,
            "h": 50,
            "type": "rotate-lava",
            "angle": 8332.14999999789,
            "rotateSpeed": 54,
            "pivotX": 8750,
            "pivotY": 950,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 127.47548783981962,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 8750,
            "y": 950,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 8323.75,
            "y": 925,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8225,
                    925
                ],
                [
                    8425,
                    925
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8225,
                "y": 925
            },
            "pointTo": {
                "x": 8425,
                "y": 925
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 8325,
            "y": 923.75,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8325,
                    825
                ],
                [
                    8325,
                    1025
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8325,
                "y": 825
            },
            "pointTo": {
                "x": 8325,
                "y": 1025
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 8325,
            "y": 926.25,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8325,
                    825
                ],
                [
                    8325,
                    1025
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8325,
                "y": 1025
            },
            "pointTo": {
                "x": 8325,
                "y": 825
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 8326.25,
            "y": 925,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8225,
                    925
                ],
                [
                    8425,
                    925
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8425,
                "y": 925
            },
            "pointTo": {
                "x": 8225,
                "y": 925
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 7600,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        7708.253175473054,
                        1012.5
                    ],
                    [
                        7751.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7491.746824526946,
                        1012.5
                    ],
                    [
                        7448.4455543377235,
                        1037.5
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
            "x": 5850,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        5741.746824526946,
                        887.5
                    ],
                    [
                        5698.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        5958.253175473054,
                        887.5
                    ],
                    [
                        6001.5544456622765,
                        862.5
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
            "x": 7950,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        8058.253175473054,
                        1012.5
                    ],
                    [
                        8101.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7841.746824526946,
                        1012.5
                    ],
                    [
                        7798.4455543377235,
                        1037.5
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
            "x": 7950,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        7841.746824526946,
                        887.5
                    ],
                    [
                        7798.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8058.253175473054,
                        887.5
                    ],
                    [
                        8101.5544456622765,
                        862.5
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
                    8000,
                    800
                ],
                [
                    8300,
                    800
                ],
                [
                    8150,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8300,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7950,
            "y": 950,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "points": [
                [
                    7775,
                    1000
                ],
                [
                    7925,
                    1100
                ],
                [
                    7625,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7625,
                "right": 7925,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7250,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        7358.253175473054,
                        1012.5
                    ],
                    [
                        7401.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7141.746824526946,
                        1012.5
                    ],
                    [
                        7098.4455543377235,
                        1037.5
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
                    7425,
                    1000
                ],
                [
                    7575,
                    1100
                ],
                [
                    7275,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7275,
                "right": 7575,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7075,
                    1000
                ],
                [
                    7225,
                    1100
                ],
                [
                    6925,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6925,
                "right": 7225,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6900,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        7008.253175473054,
                        1012.5
                    ],
                    [
                        7051.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6791.746824526946,
                        1012.5
                    ],
                    [
                        6748.4455543377235,
                        1037.5
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
                    6725,
                    1000
                ],
                [
                    6875,
                    1100
                ],
                [
                    6575,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6575,
                "right": 6875,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6550,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        6658.253175473054,
                        1012.5
                    ],
                    [
                        6701.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6441.746824526946,
                        1012.5
                    ],
                    [
                        6398.4455543377235,
                        1037.5
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
            "x": 6200,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": 0.5235987755982988,
            "endAngle": 2.6179938779914944,
            "startPolygon": {
                "points": [
                    [
                        6308.253175473054,
                        1012.5
                    ],
                    [
                        6351.5544456622765,
                        1037.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6091.746824526946,
                        1012.5
                    ],
                    [
                        6048.4455543377235,
                        1037.5
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
                    6025,
                    1000
                ],
                [
                    6175,
                    1100
                ],
                [
                    5875,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5875,
                "right": 6175,
                "top": 1000,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5500,
                    975
                ],
                [
                    5900,
                    1100
                ],
                [
                    5500,
                    1100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5500,
                "right": 5900,
                "top": 975,
                "bottom": 1100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5500,
                    800
                ],
                [
                    5900,
                    800
                ],
                [
                    5500,
                    925
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5500,
                "right": 5900,
                "top": 800,
                "bottom": 925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6200,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        6091.746824526946,
                        887.5
                    ],
                    [
                        6048.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6308.253175473054,
                        887.5
                    ],
                    [
                        6351.5544456622765,
                        862.5
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
            "x": 6550,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        6441.746824526946,
                        887.5
                    ],
                    [
                        6398.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6658.253175473054,
                        887.5
                    ],
                    [
                        6701.5544456622765,
                        862.5
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
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        6791.746824526946,
                        887.5
                    ],
                    [
                        6748.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7008.253175473054,
                        887.5
                    ],
                    [
                        7051.5544456622765,
                        862.5
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
            "x": 7250,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        7141.746824526946,
                        887.5
                    ],
                    [
                        7098.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7358.253175473054,
                        887.5
                    ],
                    [
                        7401.5544456622765,
                        862.5
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
            "x": 7600,
            "y": 950,
            "radius": 175,
            "type": "circle-hollow-slice",
            "startAngle": -2.6179938779914944,
            "endAngle": -0.5235987755982988,
            "startPolygon": {
                "points": [
                    [
                        7491.746824526946,
                        887.5
                    ],
                    [
                        7448.4455543377235,
                        862.5
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7708.253175473054,
                        887.5
                    ],
                    [
                        7751.5544456622765,
                        862.5
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
                    7625,
                    800
                ],
                [
                    7925,
                    800
                ],
                [
                    7775,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7625,
                "right": 7925,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7275,
                    800
                ],
                [
                    7575,
                    800
                ],
                [
                    7425,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7275,
                "right": 7575,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6925,
                    800
                ],
                [
                    7225,
                    800
                ],
                [
                    7075,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6925,
                "right": 7225,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6575,
                    800
                ],
                [
                    6875,
                    800
                ],
                [
                    6725,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6575,
                "right": 6875,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6225,
                    800
                ],
                [
                    6525,
                    800
                ],
                [
                    6375,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6225,
                "right": 6525,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5875,
                    800
                ],
                [
                    6175,
                    800
                ],
                [
                    6025,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5875,
                "right": 6175,
                "top": 800,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    925
                ],
                [
                    6300,
                    950
                ],
                [
                    6250,
                    975
                ],
                [
                    6200,
                    950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6200,
                "right": 6300,
                "top": 925,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6150,
                    925
                ],
                [
                    6200,
                    950
                ],
                [
                    6150,
                    975
                ],
                [
                    6100,
                    950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6100,
                "right": 6200,
                "top": 925,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    925
                ],
                [
                    6250,
                    950
                ],
                [
                    6200,
                    975
                ],
                [
                    6150,
                    950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6150,
                "right": 6250,
                "top": 925,
                "bottom": 975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6525,
            "y": 925,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9050,
            "y": 6425,
            "r": 50,
            "angle": -285.07301521188066,
            "type": "circle-sentry",
            "speed": 270,
            "laser": {
                "x": 9050,
                "y": 6425,
                "w": 300,
                "h": 50,
                "pivotX": 9200,
                "pivotY": 6450,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 50,
            "inView": false
        },
        {
            "x": 4350,
            "y": 1425,
            "w": 150,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 1650,
            "w": 150,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3700,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "coindoor",
            "coins": 8,
            "currentCoins": 8,
            "inView": false
        },
        {
            "x": 2000,
            "y": 1425,
            "w": 150,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2000,
            "y": 1850,
            "w": 150,
            "h": 150,
            "type": "coindoor",
            "coins": 10,
            "currentCoins": 10,
            "inView": false
        },
        {
            "points": [
                [
                    5000,
                    1600
                ],
                [
                    5500,
                    2000
                ],
                [
                    4500,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4500,
                "right": 5500,
                "top": 1600,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5500,
            "y": 1375,
            "w": 150,
            "h": 475,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3350,
            "y": 1650,
            "w": 200,
            "h": 200,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 3350,
            "pivotY": 1650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 141.4213562373095,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3125,
            "y": 1925,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 3125,
            "pivotY": 1925,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3175,
            "y": 1575,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 3175,
            "pivotY": 1575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3525,
            "y": 1575,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 3525,
            "pivotY": 1575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2500,
            "y": 1575,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2500,
            "pivotY": 1575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2775,
            "y": 1925,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2775,
            "pivotY": 1925,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2900,
            "y": 1575,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2900,
            "pivotY": 1575,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2950,
            "y": 1850,
            "w": 200,
            "h": 200,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2950,
            "pivotY": 1850,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 141.4213562373095,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3450,
            "y": 1925,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 3450,
            "pivotY": 1925,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3575,
            "y": 1850,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2725,
            "y": 1725,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4125,
            "y": 1925,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4250,
            "y": 1900,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3950,
            "y": 1600,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4075,
            "y": 1575,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4275,
            "y": 1775,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3925,
            "y": 1725,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4100,
            "y": 1750,
            "w": 175,
            "h": 175,
            "type": "rotate-normal",
            "angle": 6910.125,
            "rotateSpeed": 45,
            "pivotX": 4100,
            "pivotY": 1750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 123.74368670764582,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4100,
            "y": 1750,
            "w": 175,
            "h": 175,
            "type": "rotate-normal",
            "angle": -6910.125,
            "rotateSpeed": -45,
            "pivotX": 4100,
            "pivotY": 1750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 123.74368670764582,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4100,
            "y": 1750,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 4350,
            "y": 1850,
            "w": 150,
            "h": 150,
            "type": "ship",
            "state": true,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 2500,
            "y": 1850,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2500,
            "pivotY": 1850,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2275,
            "y": 1675,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2275,
            "pivotY": 1675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2275,
            "y": 1925,
            "w": 100,
            "h": 100,
            "type": "rotate-lava",
            "angle": 45,
            "rotateSpeed": 0,
            "pivotX": 2275,
            "pivotY": 1925,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 70.71067811865476,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3037.5,
            "y": 1575,
            "radius": 38,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4350,
            "y": 1850,
            "w": 150,
            "h": 150,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 5500,
            "y": 1850,
            "w": 150,
            "h": 150,
            "type": "mark",
            "time": 6,
            "inView": false
        },
        {
            "x": 5850,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "cure",
            "inView": false
        },
        {
            "x": 5850,
            "y": 1650,
            "w": 300,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6000,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "mark",
            "time": 10,
            "inView": false
        },
        {
            "points": [
                [
                    5750,
                    1800
                ],
                [
                    5800,
                    1875
                ],
                [
                    5750,
                    1950
                ],
                [
                    5700,
                    1875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5700,
                "right": 5800,
                "top": 1800,
                "bottom": 1950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5750,
                    1550
                ],
                [
                    5800,
                    1625
                ],
                [
                    5750,
                    1700
                ],
                [
                    5700,
                    1625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5700,
                "right": 5800,
                "top": 1550,
                "bottom": 1700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5738.5,
            "y": 1700,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5800,
                    1700
                ],
                [
                    5650,
                    1700
                ]
            ],
            "speed": 180,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5650,
                "y": 1700
            },
            "pointTo": {
                "x": 5800,
                "y": 1700
            },
            "xv": 180,
            "yv": 0,
            "inView": false
        },
        {
            "x": 5711.5,
            "y": 1750,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    5800,
                    1750
                ],
                [
                    5650,
                    1750
                ]
            ],
            "speed": 180,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5800,
                "y": 1750
            },
            "pointTo": {
                "x": 5650,
                "y": 1750
            },
            "xv": -180,
            "yv": 2.2043642384652358e-14,
            "inView": false
        },
        {
            "x": 5650,
            "y": 1500,
            "w": 200,
            "h": 500,
            "type": "size",
            "size": 10.2,
            "inView": false
        },
        {
            "points": [
                [
                    6150,
                    1500
                ],
                [
                    6850,
                    1500
                ],
                [
                    6500,
                    1850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6150,
                "right": 6850,
                "top": 1500,
                "bottom": 1850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6150,
                    1650
                ],
                [
                    6500,
                    2000
                ],
                [
                    6150,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6150,
                "right": 6500,
                "top": 1650,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6850,
                    1650
                ],
                [
                    6850,
                    2000
                ],
                [
                    6500,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6500,
                "right": 6850,
                "top": 1650,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4825,
            "y": 1075,
            "radius": 177,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5275,
            "y": 1075,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5150,
            "y": 1350,
            "radius": 152,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4550,
            "y": 1400,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5075,
            "y": 800,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5525,
            "y": 1400,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4600,
            "y": 825,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4825,
            "y": 1425,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5475,
            "y": 850,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6850,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "cure",
            "inView": false
        },
        {
            "x": 6850,
            "y": 1650,
            "w": 300,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7850,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7850,
            "y": 1850,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7000,
            "y": 1500,
            "w": 150,
            "h": 150,
            "type": "mark",
            "time": 6,
            "inView": false
        },
        {
            "x": 7925,
            "y": 1850,
            "radius": 75,
            "radius2": 50,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 7925,
            "y": 1650,
            "radius": 75,
            "radius2": 50,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    1650
                ],
                [
                    7250,
                    2000
                ],
                [
                    7150,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7150,
                "right": 7250,
                "top": 1650,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7400,
                    1500
                ],
                [
                    7600,
                    1500
                ],
                [
                    7500,
                    1650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7400,
                "right": 7600,
                "top": 1500,
                "bottom": 1650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    1850
                ],
                [
                    7600,
                    2000
                ],
                [
                    7400,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7400,
                "right": 7600,
                "top": 1850,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7975,
            "y": 2000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7925,
            "y": 3000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    1800
                ],
                [
                    8500,
                    2000
                ],
                [
                    8300,
                    2000
                ]
            ],
            "type": "poly-tp",
            "tpx": 8050,
            "tpy": 2950,
            "most": {
                "left": 8300,
                "right": 8500,
                "top": 1800,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8300,
                    1500
                ],
                [
                    8500,
                    1500
                ],
                [
                    8500,
                    1700
                ]
            ],
            "type": "poly-tp",
            "tpx": 8050,
            "tpy": 2950,
            "most": {
                "left": 8300,
                "right": 8500,
                "top": 1500,
                "bottom": 1700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7950,
            "y": 4000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7975,
            "y": 5000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7950,
            "y": 6000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7950,
            "y": 7000,
            "w": 600,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7975,
            "y": 5475,
            "w": 225,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8300,
            "y": 5450,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8300,
            "y": 5900,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7975,
            "y": 5900,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8100,
            "y": 5700,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8200,
            "y": 5900,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 8250,
            "tpy": 6750,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 6950,
            "w": 500,
            "h": 50,
            "type": "tp",
            "tpx": 8050,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8098.75,
            "y": 5600,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8000,
                    5600
                ],
                [
                    8200,
                    5600
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8000,
                "y": 5600
            },
            "pointTo": {
                "x": 8200,
                "y": 5600
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 8298.75,
            "y": 5600,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8200,
                    5600
                ],
                [
                    8400,
                    5600
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8200,
                "y": 5600
            },
            "pointTo": {
                "x": 8400,
                "y": 5600
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 8400,
            "y": 5698.75,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8400,
                    5600
                ],
                [
                    8400,
                    5800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8400,
                "y": 5600
            },
            "pointTo": {
                "x": 8400,
                "y": 5800
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 8301.25,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8400,
                    5800
                ],
                [
                    8200,
                    5800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8400,
                "y": 5800
            },
            "pointTo": {
                "x": 8200,
                "y": 5800
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 8101.25,
            "y": 5800,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8200,
                    5800
                ],
                [
                    8000,
                    5800
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8200,
                "y": 5800
            },
            "pointTo": {
                "x": 8000,
                "y": 5800
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 8000,
            "y": 5701.25,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    8000,
                    5800
                ],
                [
                    8000,
                    5600
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 8000,
                "y": 5800
            },
            "pointTo": {
                "x": 8000,
                "y": 5600
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "points": [
                [
                    2050,
                    8450
                ],
                [
                    4700,
                    8450
                ],
                [
                    4750,
                    8500
                ],
                [
                    2000,
                    8500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 4750,
                "top": 8450,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2000,
                    8000
                ],
                [
                    4750,
                    8000
                ],
                [
                    4700,
                    8050
                ],
                [
                    2050,
                    8050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 4750,
                "top": 8000,
                "bottom": 8050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5042.496154966374,
            "y": 8367.554569511669,
            "w": 250,
            "h": 100,
            "type": "rotate-lava",
            "angle": 6910.125,
            "rotateSpeed": 45,
            "pivotX": 5000,
            "pivotY": 8250,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 259.6291201783626,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    7550
                ],
                [
                    8075,
                    7625
                ],
                [
                    8000,
                    7700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8075,
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
                    7700
                ],
                [
                    8100,
                    7850
                ],
                [
                    8025,
                    7775
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8025,
                "right": 8100,
                "top": 7700,
                "bottom": 7850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    7850
                ],
                [
                    8025,
                    7950
                ],
                [
                    8000,
                    7950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8000,
                "right": 8025,
                "top": 7850,
                "bottom": 7950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8100,
                    7850
                ],
                [
                    8100,
                    7950
                ],
                [
                    8075,
                    7950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8075,
                "right": 8100,
                "top": 7850,
                "bottom": 7950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8400,
                    7750
                ],
                [
                    8425,
                    7800
                ],
                [
                    8400,
                    7850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8400,
                "right": 8425,
                "top": 7750,
                "bottom": 7850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    7750
                ],
                [
                    8500,
                    7850
                ],
                [
                    8475,
                    7800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8475,
                "right": 8500,
                "top": 7750,
                "bottom": 7850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8450,
                    7625
                ],
                [
                    8475,
                    7675
                ],
                [
                    8450,
                    7725
                ],
                [
                    8425,
                    7675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8425,
                "right": 8475,
                "top": 7625,
                "bottom": 7725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8450,
                    7875
                ],
                [
                    8475,
                    7925
                ],
                [
                    8450,
                    7975
                ],
                [
                    8425,
                    7925
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8425,
                "right": 8475,
                "top": 7875,
                "bottom": 7975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8400,
                    7975
                ],
                [
                    8412.5,
                    8000
                ],
                [
                    8400,
                    8000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8400,
                "right": 8412.5,
                "top": 7975,
                "bottom": 8000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    7975
                ],
                [
                    8500,
                    8000
                ],
                [
                    8487.5,
                    8000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8487.5,
                "right": 8500,
                "top": 7975,
                "bottom": 8000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8100,
            "y": 7475,
            "w": 100,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4892.158201752774,
            "y": 8186.792828327754,
            "w": 250,
            "h": 100,
            "type": "rotate-lava",
            "angle": 20730.375,
            "rotateSpeed": 135,
            "pivotX": 5000,
            "pivotY": 8250,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 259.6291201783626,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5000,
            "y": 8250,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 8000,
            "y": 7550,
            "w": 100,
            "h": 450,
            "type": "breakable",
            "maxStrength": 40,
            "currentStrength": 40,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 8200,
            "y": 7550,
            "w": 100,
            "h": 450,
            "type": "breakable",
            "maxStrength": 62,
            "currentStrength": 62,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "points": [
                [
                    7375,
                    8250
                ],
                [
                    7625,
                    8500
                ],
                [
                    7125,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7125,
                "right": 7625,
                "top": 8250,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6575,
            "y": 8400,
            "radius": 200,
            "type": "circle-hollow-slice",
            "startAngle": 1.5707963267948966,
            "endAngle": 3.0543261909900763,
            "startPolygon": {
                "points": [
                    [
                        6575,
                        8500
                    ],
                    [
                        6575,
                        8600
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        6475.380530190825,
                        8408.715574274765
                    ],
                    [
                        6375.761060381651,
                        8417.431148549531
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
            "x": 6375,
            "y": 8425,
            "w": 75,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6202,
                    8348
                ],
                [
                    6375,
                    8425
                ],
                [
                    6375,
                    8500
                ],
                [
                    6075,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6075,
                "right": 6375,
                "top": 8348,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6038,
                    8368
                ],
                [
                    6175,
                    8400
                ],
                [
                    6175,
                    8500
                ],
                [
                    5875,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5875,
                "right": 6175,
                "top": 8368,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5856,
                    8304
                ],
                [
                    6000,
                    8400
                ],
                [
                    6000,
                    8500
                ],
                [
                    5650,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5650,
                "right": 6000,
                "top": 8304,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5595,
                    8267
                ],
                [
                    5800,
                    8400
                ],
                [
                    5800,
                    8500
                ],
                [
                    5450,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5450,
                "right": 5800,
                "top": 8267,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6750,
                    8350
                ],
                [
                    7000,
                    8500
                ],
                [
                    6625,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6625,
                "right": 7000,
                "top": 8350,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7075,
            "y": 8500,
            "radius": 182,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    6425,
                    8350
                ],
                [
                    6474,
                    8409
                ],
                [
                    6366,
                    8425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6366,
                "right": 6474,
                "top": 8350,
                "bottom": 8425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5350,
                    8300
                ],
                [
                    5450,
                    8300
                ],
                [
                    5650,
                    8500
                ],
                [
                    5250,
                    8500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5250,
                "right": 5650,
                "top": 8300,
                "bottom": 8500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5350,
            "y": 8000,
            "w": 100,
            "h": 300,
            "type": "ship",
            "state": false,
            "shipAngle": 1.5707963267948966,
            "inView": false
        },
        {
            "x": 6450,
            "y": 8450,
            "w": 300,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6575,
                    8350
                ],
                [
                    6675,
                    8450
                ],
                [
                    6491,
                    8450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6491,
                "right": 6675,
                "top": 8350,
                "bottom": 8450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5250,
                    8000
                ],
                [
                    5450,
                    8000
                ],
                [
                    5350,
                    8200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5250,
                "right": 5450,
                "top": 8000,
                "bottom": 8200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6325,
            "y": 8300,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": 16584.29999999565,
            "rotateSpeed": 108,
            "pivotX": 6325,
            "pivotY": 8300,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    6075,
                    8050
                ],
                [
                    6150,
                    8150
                ],
                [
                    6000,
                    8150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6000,
                "right": 6150,
                "top": 8050,
                "bottom": 8150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5875,
                    8050
                ],
                [
                    5950,
                    8150
                ],
                [
                    5800,
                    8150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5800,
                "right": 5950,
                "top": 8050,
                "bottom": 8150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6300,
                    8050
                ],
                [
                    6350,
                    8050
                ],
                [
                    6350,
                    8150
                ],
                [
                    6200,
                    8150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6200,
                "right": 6350,
                "top": 8050,
                "bottom": 8150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6448.75,
            "y": 8050,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    6350,
                    8050
                ],
                [
                    6550,
                    8050
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 6350,
                "y": 8050
            },
            "pointTo": {
                "x": 6550,
                "y": 8050
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6651.25,
            "y": 8050,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    6550,
                    8050
                ],
                [
                    6750,
                    8050
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 6750,
                "y": 8050
            },
            "pointTo": {
                "x": 6550,
                "y": 8050
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 6850,
            "y": 8050,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 8100,
            "w": 175,
            "h": 50,
            "type": "tp",
            "tpx": 4825,
            "tpy": 5175,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 7350,
            "y": 7975,
            "w": 325,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7200,
                    8075
                ],
                [
                    7275,
                    8150
                ],
                [
                    7200,
                    8150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7200,
                "right": 7275,
                "top": 8075,
                "bottom": 8150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7350,
                    8075
                ],
                [
                    7350,
                    8150
                ],
                [
                    7275,
                    8150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7275,
                "right": 7350,
                "top": 8075,
                "bottom": 8150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7300,
                    8000
                ],
                [
                    7350,
                    8000
                ],
                [
                    7350,
                    8050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7300,
                "right": 7350,
                "top": 8000,
                "bottom": 8050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4700,
            "y": 5050,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 6000,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4925,
            "y": 5050,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 6000,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 5275,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 6000,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 5050,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 6000,
            "tpy": 8350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4775,
            "y": 5200,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4775,
            "y": 5125,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4775,
            "y": 5125,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4850,
            "y": 5125,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4900,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 5200,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4800,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 5200,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4850,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4800,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4900,
            "y": 5150,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4850,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 4750,
            "y": 5150,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2400,
            "y": 8200,
            "w": 100,
            "h": 100,
            "type": "door",
            "id": 6,
            "active": true,
            "inView": false
        },
        {
            "x": 2100,
            "y": 8200,
            "w": 100,
            "h": 100,
            "type": "button",
            "id": 6,
            "active": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 8255.316666658553,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    2600,
                    8100
                ],
                [
                    2600,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 2600,
                "y": 8100
            },
            "pointTo": {
                "x": 2600,
                "y": 8300
            },
            "xv": 5.021051876504148e-15,
            "yv": 82,
            "inView": false
        },
        {
            "x": 2625,
            "y": 8280.316666656372,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2625,
                    8125
                ],
                [
                    2625,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 2625,
                "y": 8125
            },
            "pointTo": {
                "x": 2625,
                "y": 8325
            },
            "xv": 5.021051876504148e-15,
            "yv": 82,
            "inView": false
        },
        {
            "points": [
                [
                    2025,
                    8125
                ],
                [
                    2475,
                    8125
                ],
                [
                    2500,
                    8150
                ],
                [
                    2475,
                    8175
                ],
                [
                    2025,
                    8175
                ],
                [
                    2000,
                    8150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 2500,
                "top": 8125,
                "bottom": 8175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2025,
                    8325
                ],
                [
                    2475,
                    8325
                ],
                [
                    2500,
                    8350
                ],
                [
                    2475,
                    8375
                ],
                [
                    2025,
                    8375
                ],
                [
                    2000,
                    8350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2000,
                "right": 2500,
                "top": 8325,
                "bottom": 8375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4825,
            "y": 7675,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": -12284.666666664434,
            "rotateSpeed": -80,
            "pivotX": 4825,
            "pivotY": 7675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4825,
            "y": 7825,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": -12284.666666664434,
            "rotateSpeed": -80,
            "pivotX": 4825,
            "pivotY": 7825,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4825,
            "y": 7975,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": -12284.666666664434,
            "rotateSpeed": -80,
            "pivotX": 4825,
            "pivotY": 7975,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5175,
            "y": 7675,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": 12284.666666664434,
            "rotateSpeed": 80,
            "pivotX": 5175,
            "pivotY": 7675,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5175,
            "y": 7825,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": 12284.666666664434,
            "rotateSpeed": 80,
            "pivotX": 5175,
            "pivotY": 7825,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 5175,
            "y": 7975,
            "w": 150,
            "h": 150,
            "type": "rotate-lava",
            "angle": 12284.666666664434,
            "rotateSpeed": 80,
            "pivotX": 5175,
            "pivotY": 7975,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 106.06601717798213,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2700,
            "y": 8144.683333341505,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    2700,
                    8100
                ],
                [
                    2700,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 2700,
                "y": 8300
            },
            "pointTo": {
                "x": 2700,
                "y": 8100
            },
            "xv": 5.021051876504148e-15,
            "yv": -82,
            "inView": false
        },
        {
            "x": 2725,
            "y": 8169.683333343687,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2725,
                    8125
                ],
                [
                    2725,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 2725,
                "y": 8325
            },
            "pointTo": {
                "x": 2725,
                "y": 8125
            },
            "xv": 5.021051876504148e-15,
            "yv": -82,
            "inView": false
        },
        {
            "x": 2800,
            "y": 8255.316666658553,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    2800,
                    8100
                ],
                [
                    2800,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 2800,
                "y": 8100
            },
            "pointTo": {
                "x": 2800,
                "y": 8300
            },
            "xv": 5.021051876504148e-15,
            "yv": 82,
            "inView": false
        },
        {
            "x": 2825,
            "y": 8280.316666656372,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    2825,
                    8125
                ],
                [
                    2825,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 2825,
                "y": 8125
            },
            "pointTo": {
                "x": 2825,
                "y": 8325
            },
            "xv": 5.021051876504148e-15,
            "yv": 82,
            "inView": false
        },
        {
            "x": 3100,
            "y": 8200,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 1750,
            "tpy": 8250,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3125,
            "y": 8225,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 3155.3166666632205,
            "y": 8100,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3000,
                    8100
                ],
                [
                    3200,
                    8100
                ],
                [
                    3200,
                    8300
                ],
                [
                    3000,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3000,
                "y": 8100
            },
            "pointTo": {
                "x": 3200,
                "y": 8100
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3180.3166666621655,
            "y": 8125,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3025,
                    8125
                ],
                [
                    3225,
                    8125
                ],
                [
                    3225,
                    8325
                ],
                [
                    3025,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3025,
                "y": 8125
            },
            "pointTo": {
                "x": 3225,
                "y": 8125
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3044.683333336784,
            "y": 8300,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3000,
                    8100
                ],
                [
                    3200,
                    8100
                ],
                [
                    3200,
                    8300
                ],
                [
                    3000,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 2,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3200,
                "y": 8300
            },
            "pointTo": {
                "x": 3000,
                "y": 8300
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3069.6833333378318,
            "y": 8325,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3025,
                    8125
                ],
                [
                    3225,
                    8125
                ],
                [
                    3225,
                    8325
                ],
                [
                    3025,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 2,
            "collidable": true,
            "pointOn": {
                "x": 3225,
                "y": 8325
            },
            "pointTo": {
                "x": 3025,
                "y": 8325
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3644.683333332184,
            "y": 8100,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3400,
                    8100
                ],
                [
                    3700,
                    8100
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3700,
                "y": 8100
            },
            "pointTo": {
                "x": 3400,
                "y": 8100
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3669.683333332184,
            "y": 8125,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3425,
                    8125
                ],
                [
                    3725,
                    8125
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3725,
                "y": 8125
            },
            "pointTo": {
                "x": 3425,
                "y": 8125
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3455.316666667816,
            "y": 8200,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3400,
                    8200
                ],
                [
                    3700,
                    8200
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3400,
                "y": 8200
            },
            "pointTo": {
                "x": 3700,
                "y": 8200
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3480.316666667816,
            "y": 8225,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3425,
                    8225
                ],
                [
                    3725,
                    8225
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3425,
                "y": 8225
            },
            "pointTo": {
                "x": 3725,
                "y": 8225
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3644.683333332184,
            "y": 8300,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3400,
                    8300
                ],
                [
                    3700,
                    8300
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3700,
                "y": 8300
            },
            "pointTo": {
                "x": 3400,
                "y": 8300
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3669.683333332184,
            "y": 8325,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3425,
                    8325
                ],
                [
                    3725,
                    8325
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3725,
                "y": 8325
            },
            "pointTo": {
                "x": 3425,
                "y": 8325
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 4174.150000004004,
            "y": 8100,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3900,
                    8100
                ],
                [
                    4400,
                    8100
                ],
                [
                    4400,
                    8200
                ],
                [
                    3900,
                    8200
                ]
            ],
            "speed": 222,
            "currentPoint": 0,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3900,
                "y": 8100
            },
            "pointTo": {
                "x": 4400,
                "y": 8100
            },
            "xv": 222,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4174.150000004037,
            "y": 8300,
            "w": 100,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3900,
                    8200
                ],
                [
                    3900,
                    8300
                ],
                [
                    4400,
                    8300
                ],
                [
                    4400,
                    8200
                ]
            ],
            "speed": 222,
            "currentPoint": 1,
            "tpx": 1750,
            "tpy": 8250,
            "pointOn": {
                "x": 3900,
                "y": 8300
            },
            "pointTo": {
                "x": 4400,
                "y": 8300
            },
            "xv": 222,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4199.15000000442,
            "y": 8125,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3925,
                    8125
                ],
                [
                    4425,
                    8125
                ],
                [
                    4425,
                    8225
                ],
                [
                    3925,
                    8225
                ]
            ],
            "speed": 222,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3925,
                "y": 8125
            },
            "pointTo": {
                "x": 4425,
                "y": 8125
            },
            "xv": 222,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4199.15000000442,
            "y": 8325,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    3925,
                    8225
                ],
                [
                    3925,
                    8325
                ],
                [
                    4425,
                    8325
                ],
                [
                    4425,
                    8225
                ]
            ],
            "speed": 222,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3925,
                "y": 8325
            },
            "pointTo": {
                "x": 4425,
                "y": 8325
            },
            "xv": 222,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    7100
                ],
                [
                    7600,
                    7600
                ],
                [
                    7100,
                    7600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7600,
                "top": 7100,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    6600
                ],
                [
                    7350,
                    6850
                ],
                [
                    7100,
                    7100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7350,
                "top": 6600,
                "bottom": 7100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7600,
            "y": 7000,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7500,
            "y": 7000,
            "w": 125,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 6200,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7600,
            "y": 6200,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    4875
                ],
                [
                    7200,
                    4875
                ],
                [
                    7300,
                    4950
                ],
                [
                    7200,
                    5025
                ],
                [
                    7100,
                    5025
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7300,
                "top": 4875,
                "bottom": 5025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    4875
                ],
                [
                    7600,
                    4875
                ],
                [
                    7600,
                    5025
                ],
                [
                    7500,
                    5025
                ],
                [
                    7400,
                    4950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7400,
                "right": 7600,
                "top": 4875,
                "bottom": 5025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    5025
                ],
                [
                    7200,
                    5025
                ],
                [
                    7150,
                    5100
                ],
                [
                    7100,
                    5100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7200,
                "top": 5025,
                "bottom": 5100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    4750
                ],
                [
                    7150,
                    4800
                ],
                [
                    7200,
                    4875
                ],
                [
                    7100,
                    4875
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7200,
                "top": 4750,
                "bottom": 4875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    4750
                ],
                [
                    7600,
                    4875
                ],
                [
                    7500,
                    4875
                ],
                [
                    7550,
                    4800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7600,
                "top": 4750,
                "bottom": 4875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7350,
            "y": 4725,
            "r": 125,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 125,
            "inView": false
        },
        {
            "x": 7292.453169361099,
            "y": 4792.453169361099,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    7300,
                    4550
                ],
                [
                    7425,
                    4675
                ],
                [
                    7300,
                    4800
                ],
                [
                    7175,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 2,
            "alongWith": false,
            "pointOn": {
                "x": 7300,
                "y": 4800
            },
            "pointTo": {
                "x": 7175,
                "y": 4675
            },
            "xv": -106.06601717798212,
            "yv": -106.06601717798213,
            "inView": false
        },
        {
            "x": 7307.546830638901,
            "y": 4792.453169361099,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    7300,
                    4550
                ],
                [
                    7175,
                    4675
                ],
                [
                    7300,
                    4800
                ],
                [
                    7425,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 2,
            "alongWith": false,
            "pointOn": {
                "x": 7300,
                "y": 4800
            },
            "pointTo": {
                "x": 7425,
                "y": 4675
            },
            "xv": 106.06601717798213,
            "yv": -106.06601717798212,
            "inView": false
        },
        {
            "x": 7292.453169361099,
            "y": 4557.546830638901,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    7300,
                    4550
                ],
                [
                    7175,
                    4675
                ],
                [
                    7300,
                    4800
                ],
                [
                    7425,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 7300,
                "y": 4550
            },
            "pointTo": {
                "x": 7175,
                "y": 4675
            },
            "xv": -106.06601717798212,
            "yv": 106.06601717798213,
            "inView": false
        },
        {
            "x": 7307.546830638901,
            "y": 4557.546830638901,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    7300,
                    4550
                ],
                [
                    7425,
                    4675
                ],
                [
                    7300,
                    4800
                ],
                [
                    7175,
                    4675
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 7300,
                "y": 4550
            },
            "pointTo": {
                "x": 7425,
                "y": 4675
            },
            "xv": 106.06601717798213,
            "yv": 106.06601717798212,
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    4375
                ],
                [
                    7300,
                    4450
                ],
                [
                    7100,
                    4525
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7300,
                "top": 4375,
                "bottom": 4525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    4375
                ],
                [
                    7600,
                    4525
                ],
                [
                    7400,
                    4450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7400,
                "right": 7600,
                "top": 4375,
                "bottom": 4525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    3750
                ],
                [
                    7350,
                    4050
                ],
                [
                    7400,
                    4150
                ],
                [
                    7100,
                    4250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7400,
                "top": 3750,
                "bottom": 4250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    2900
                ],
                [
                    7300,
                    2900
                ],
                [
                    7100,
                    3350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7300,
                "top": 2900,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7400,
                    2900
                ],
                [
                    7600,
                    2900
                ],
                [
                    7600,
                    3350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7400,
                "right": 7600,
                "top": 2900,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7100,
            "y": 2900,
            "w": 525,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7100,
                    3350
                ],
                [
                    7300,
                    3450
                ],
                [
                    7100,
                    3750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7100,
                "right": 7300,
                "top": 3350,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    3350
                ],
                [
                    7600,
                    4150
                ],
                [
                    7450,
                    4050
                ],
                [
                    7200,
                    3750
                ],
                [
                    7400,
                    3450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7200,
                "right": 7600,
                "top": 3350,
                "bottom": 4150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7300,
                    4300
                ],
                [
                    7400,
                    4300
                ],
                [
                    7350,
                    4375
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7300,
                "right": 7400,
                "top": 4300,
                "bottom": 4375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6300,
                    3300
                ],
                [
                    6700,
                    3300
                ],
                [
                    6700,
                    3700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6300,
                "right": 6700,
                "top": 3300,
                "bottom": 3700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6300,
                    3700
                ],
                [
                    6600,
                    4000
                ],
                [
                    6300,
                    4825
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6300,
                "right": 6600,
                "top": 3700,
                "bottom": 4825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    4150
                ],
                [
                    6700,
                    4950
                ],
                [
                    6475,
                    4825
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6475,
                "right": 6700,
                "top": 4150,
                "bottom": 4950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6300,
                    5000
                ],
                [
                    6425,
                    5075
                ],
                [
                    6300,
                    5150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6300,
                "right": 6425,
                "top": 5000,
                "bottom": 5150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6550,
                    5150
                ],
                [
                    6650,
                    5250
                ],
                [
                    6475,
                    5300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6475,
                "right": 6650,
                "top": 5150,
                "bottom": 5300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6575,
                    4900
                ],
                [
                    6650,
                    5025
                ],
                [
                    6475,
                    4950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6475,
                "right": 6650,
                "top": 4900,
                "bottom": 5025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6400,
                    5400
                ],
                [
                    6475,
                    5475
                ],
                [
                    6350,
                    5525
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6350,
                "right": 6475,
                "top": 5400,
                "bottom": 5525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6625,
                    5500
                ],
                [
                    6650,
                    5675
                ],
                [
                    6525,
                    5575
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6525,
                "right": 6650,
                "top": 5500,
                "bottom": 5675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    6600
                ],
                [
                    2600,
                    7100
                ],
                [
                    2400,
                    7100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2600,
                "top": 6600,
                "bottom": 7100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    6600
                ],
                [
                    2900,
                    7100
                ],
                [
                    2700,
                    7100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2700,
                "right": 2900,
                "top": 6600,
                "bottom": 7100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2650,
                    6350
                ],
                [
                    2850,
                    6550
                ],
                [
                    2650,
                    7050
                ],
                [
                    2450,
                    6550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2850,
                "top": 6350,
                "bottom": 7050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    6100
                ],
                [
                    2600,
                    6300
                ],
                [
                    2400,
                    6500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2600,
                "top": 6100,
                "bottom": 6500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    6100
                ],
                [
                    2900,
                    6500
                ],
                [
                    2700,
                    6300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2700,
                "right": 2900,
                "top": 6100,
                "bottom": 6500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2450,
                    6050
                ],
                [
                    2850,
                    6050
                ],
                [
                    2650,
                    6250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2850,
                "top": 6050,
                "bottom": 6250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2375,
            "y": 5750,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 5775,
            "w": 125,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 5800,
            "w": 75,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 5850,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2425,
            "y": 5800,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2700,
            "y": 5750,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2875,
            "y": 5775,
            "w": 50,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2800,
            "y": 5775,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2825,
            "y": 5800,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2850,
            "y": 5825,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    5500
                ],
                [
                    2600,
                    5750
                ],
                [
                    2400,
                    5750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2600,
                "top": 5500,
                "bottom": 5750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    5500
                ],
                [
                    2900,
                    5750
                ],
                [
                    2700,
                    5750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2700,
                "right": 2900,
                "top": 5500,
                "bottom": 5750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2650,
            "y": 5400,
            "radius": 350,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 0,
            "startPolygon": {
                "points": [
                    [
                        2400,
                        5400
                    ],
                    [
                        2300,
                        5400
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2900,
                        5400
                    ],
                    [
                        3000,
                        5400
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
            "x": 2375,
            "y": 5050,
            "w": 550,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 5100,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2825,
            "y": 5100,
            "w": 100,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2425,
            "y": 5400,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2875,
            "y": 5400,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 5175,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2650,
            "y": 5400,
            "radius": 200,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    2600,
                    5425
                ],
                [
                    2600,
                    5675
                ],
                [
                    2450,
                    5475
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2600,
                "top": 5425,
                "bottom": 5675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    5400
                ],
                [
                    2700,
                    5675
                ],
                [
                    2700,
                    5525
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2700,
                "right": 2850,
                "top": 5400,
                "bottom": 5675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2450,
            "y": 5400,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2700,
                    5425
                ],
                [
                    2850,
                    5475
                ],
                [
                    2700,
                    5675
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2700,
                "right": 2850,
                "top": 5425,
                "bottom": 5675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2800,
            "y": 5400,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2425,
            "y": 7125,
            "w": 450,
            "h": 450,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 2400,
            "y": 4650,
            "radius": 300,
            "type": "circle-slice",
            "startAngle": -1.5707963267948966,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        2400,
                        4650
                    ],
                    [
                        2400,
                        4350
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2400,
                        4650
                    ],
                    [
                        2400,
                        4950
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2400,
            "y": 4650,
            "radius": 500,
            "type": "circle-hollow-slice",
            "startAngle": -1.5707963267948966,
            "endAngle": 1.5707963267948966,
            "startPolygon": {
                "points": [
                    [
                        2400,
                        4250
                    ],
                    [
                        2400,
                        4150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        2400,
                        5050
                    ],
                    [
                        2400,
                        5150
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 400,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2825,
            "y": 4150,
            "w": 125,
            "h": 950,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2375,
            "y": 4150,
            "w": 500,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 4175,
            "w": 225,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2750,
            "y": 4300,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2775,
            "y": 4875,
            "w": 75,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2675,
            "y": 4950,
            "w": 150,
            "h": 125,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    4000
                ],
                [
                    2650,
                    4150
                ],
                [
                    2400,
                    4150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2650,
                "top": 4000,
                "bottom": 4150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    4000
                ],
                [
                    2900,
                    4150
                ],
                [
                    2650,
                    4150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2650,
                "right": 2900,
                "top": 4000,
                "bottom": 4150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    2900
                ],
                [
                    2550,
                    2900
                ],
                [
                    2400,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2550,
                "top": 2900,
                "bottom": 3150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2750,
                    2900
                ],
                [
                    2900,
                    2900
                ],
                [
                    2900,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2750,
                "right": 2900,
                "top": 2900,
                "bottom": 3150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2650,
                    2900
                ],
                [
                    2800,
                    3150
                ],
                [
                    2650,
                    3400
                ],
                [
                    2500,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2500,
                "right": 2800,
                "top": 2900,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2400,
                    3150
                ],
                [
                    2550,
                    3400
                ],
                [
                    2400,
                    3600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2400,
                "right": 2550,
                "top": 3150,
                "bottom": 3600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    3150
                ],
                [
                    2900,
                    3600
                ],
                [
                    2750,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2750,
                "right": 2900,
                "top": 3150,
                "bottom": 3600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2400,
            "y": 3650,
            "w": 400,
            "h": 400,
            "type": "rotate-normal",
            "angle": -12591.783333328467,
            "rotateSpeed": -82,
            "pivotX": 2400,
            "pivotY": 3650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 282.842712474619,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 2900,
            "y": 3650,
            "w": 400,
            "h": 400,
            "type": "rotate-normal",
            "angle": 12591.783333328467,
            "rotateSpeed": 82,
            "pivotX": 2900,
            "pivotY": 3650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 282.842712474619,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    2650,
                    3800
                ],
                [
                    2850,
                    3925
                ],
                [
                    2650,
                    4050
                ],
                [
                    2450,
                    3925
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2450,
                "right": 2850,
                "top": 3800,
                "bottom": 4050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8475,
                    7550
                ],
                [
                    8500,
                    7550
                ],
                [
                    8500,
                    7600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8475,
                "right": 8500,
                "top": 7550,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8400,
                    7550
                ],
                [
                    8425,
                    7550
                ],
                [
                    8400,
                    7600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8400,
                "right": 8425,
                "top": 7550,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8400,
            "y": 7550,
            "w": 100,
            "h": 450,
            "type": "breakable",
            "maxStrength": 62,
            "currentStrength": 62,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4700,
            "y": 3000,
            "w": 600,
            "h": 300,
            "type": "color",
            "bgColor": "#56430b",
            "tileColor": "#c39e22",
            "inView": false
        },
        {
            "x": 4500,
            "y": 800,
            "w": 1000,
            "h": 700,
            "type": "color",
            "bgColor": "#7e6006",
            "tileColor": "#c39e22",
            "inView": false
        },
        {
            "x": 4750,
            "y": 7100,
            "w": 500,
            "h": 500,
            "type": "color",
            "bgColor": "#6a5108",
            "tileColor": "#c39e22",
            "inView": false
        },
        {
            "x": 3700,
            "y": 3700,
            "radius": 600,
            "type": "circle-hollow-slice",
            "startAngle": 3.141592653589793,
            "endAngle": 4.71238898038469,
            "startPolygon": {
                "points": [
                    [
                        3300,
                        3700
                    ],
                    [
                        3100,
                        3700
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3700,
                        3300
                    ],
                    [
                        3700,
                        3100
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 400,
            "toRotate": false,
            "rotateSpeed": 0,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    6300
                ],
                [
                    3700,
                    6700
                ],
                [
                    3300,
                    6700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3300,
                "right": 3700,
                "top": 6300,
                "bottom": 6700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3600,
            "y": 3900,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 3400,
            "y": 3900,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 3400,
            "y": 3850,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    4000
                ],
                [
                    3450,
                    4075
                ],
                [
                    3300,
                    4150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3300,
                "right": 3450,
                "top": 4000,
                "bottom": 4150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    4000
                ],
                [
                    3700,
                    4150
                ],
                [
                    3550,
                    4075
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3550,
                "right": 3700,
                "top": 4000,
                "bottom": 4150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3500,
                    4175
                ],
                [
                    3600,
                    4250
                ],
                [
                    3550,
                    4350
                ],
                [
                    3500,
                    4400
                ],
                [
                    3450,
                    4350
                ],
                [
                    3400,
                    4250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3400,
                "right": 3600,
                "top": 4175,
                "bottom": 4400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3500,
            "y": 4275,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 1.8325957145940461,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        3448.236190979496,
                        4468.185165257813
                    ],
                    [
                        3422.3542864692436,
                        4564.77774788672
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3300,
                        4275
                    ],
                    [
                        3200,
                        4275
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
            "x": 3500,
            "y": 4275,
            "radius": 300,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 1.3089969389957472,
            "startPolygon": {
                "points": [
                    [
                        3700,
                        4275
                    ],
                    [
                        3800,
                        4275
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        3551.763809020504,
                        4468.185165257813
                    ],
                    [
                        3577.6457135307564,
                        4564.77774788672
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
            "x": 3271,
            "y": 4471,
            "w": 152,
            "h": 97,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3579,
            "y": 4468,
            "w": 152,
            "h": 97,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    4550
                ],
                [
                    3422,
                    4568
                ],
                [
                    3300,
                    4650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3300,
                "right": 3422,
                "top": 4550,
                "bottom": 4650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    4550
                ],
                [
                    3700,
                    4650
                ],
                [
                    3580,
                    4565
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3580,
                "right": 3700,
                "top": 4550,
                "bottom": 4650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3400,
            "y": 4800,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 3600,
            "y": 4800,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 3400,
            "y": 4750,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3500,
                    4675
                ],
                [
                    3600,
                    4750
                ],
                [
                    3400,
                    4750
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3400,
                "right": 3600,
                "top": 4675,
                "bottom": 4750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3400,
                    4850
                ],
                [
                    3600,
                    4850
                ],
                [
                    3500,
                    4925
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3400,
                "right": 3600,
                "top": 4850,
                "bottom": 4925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3315.1499999982757,
            "y": 5000,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3200,
                    5000
                ],
                [
                    3700,
                    5000
                ]
            ],
            "speed": 102,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 3200,
                "y": 5000
            },
            "pointTo": {
                "x": 3700,
                "y": 5000
            },
            "xv": 102,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3584.8500000017243,
            "y": 5000,
            "w": 100,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3200,
                    5000
                ],
                [
                    3700,
                    5000
                ]
            ],
            "speed": 102,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3700,
                "y": 5000
            },
            "pointTo": {
                "x": 3200,
                "y": 5000
            },
            "xv": -102,
            "yv": 1.2491397351303002e-14,
            "inView": false
        },
        {
            "x": 3244.683333332184,
            "y": 5200,
            "w": 200,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3000,
                    5200
                ],
                [
                    3300,
                    5200
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3300,
                "y": 5200
            },
            "pointTo": {
                "x": 3000,
                "y": 5200
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3744.683333332184,
            "y": 5200,
            "w": 200,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3500,
                    5200
                ],
                [
                    3800,
                    5200
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3800,
                "y": 5200
            },
            "pointTo": {
                "x": 3500,
                "y": 5200
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3244.683333332184,
            "y": 5200,
            "w": 200,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3000,
                    5200
                ],
                [
                    3300,
                    5200
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 3300,
                "y": 5200
            },
            "pointTo": {
                "x": 3000,
                "y": 5200
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3055.316666667816,
            "y": 5550,
            "w": 200,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3000,
                    5550
                ],
                [
                    3300,
                    5550
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 3000,
                "y": 5550
            },
            "pointTo": {
                "x": 3300,
                "y": 5550
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3255.316666667816,
            "y": 5550,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3200,
                    5550
                ],
                [
                    3500,
                    5550
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3200,
                "y": 5550
            },
            "pointTo": {
                "x": 3500,
                "y": 5550
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3555.316666667816,
            "y": 5550,
            "w": 200,
            "h": 100,
            "type": "move",
            "points": [
                [
                    3500,
                    5550
                ],
                [
                    3800,
                    5550
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "alongWith": false,
            "pointOn": {
                "x": 3500,
                "y": 5550
            },
            "pointTo": {
                "x": 3800,
                "y": 5550
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3455.316666667816,
            "y": 5550,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3400,
                    5550
                ],
                [
                    3700,
                    5550
                ]
            ],
            "speed": 82,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 3400,
                "y": 5550
            },
            "pointTo": {
                "x": 3700,
                "y": 5550
            },
            "xv": 82,
            "yv": 0,
            "inView": false
        },
        {
            "x": 3444.683333332184,
            "y": 5200,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3200,
                    5200
                ],
                [
                    3500,
                    5200
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3500,
                "y": 5200
            },
            "pointTo": {
                "x": 3200,
                "y": 5200
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3644.683333332184,
            "y": 5200,
            "w": 100,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    3400,
                    5200
                ],
                [
                    3700,
                    5200
                ]
            ],
            "speed": 82,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 3700,
                "y": 5200
            },
            "pointTo": {
                "x": 3400,
                "y": 5200
            },
            "xv": -82,
            "yv": 1.0042103753008296e-14,
            "inView": false
        },
        {
            "x": 3500,
            "y": 5400,
            "radius": 100,
            "radius2": 50,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 3300,
            "y": 5400,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3700,
            "y": 5400,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3300,
            "y": 6050,
            "w": 325,
            "h": 100,
            "type": "rotate-normal",
            "angle": 14741.599999995356,
            "rotateSpeed": 96,
            "pivotX": 3300,
            "pivotY": 6050,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 170.01838135919303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3700,
            "y": 6050,
            "w": 325,
            "h": 100,
            "type": "rotate-lava",
            "angle": -14741.599999995356,
            "rotateSpeed": -96,
            "pivotX": 3700,
            "pivotY": 6050,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 170.01838135919303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3300,
            "y": 6050,
            "w": 325,
            "h": 100,
            "type": "rotate-lava",
            "angle": 14831.599999995276,
            "rotateSpeed": 96,
            "pivotX": 3300,
            "pivotY": 6050,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 170.01838135919303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3400,
            "y": 5750,
            "w": 200,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    6200
                ],
                [
                    3700,
                    6300
                ],
                [
                    3600,
                    6250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3600,
                "right": 3700,
                "top": 6200,
                "bottom": 6300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3575,
            "y": 6375,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3575,
            "y": 6375,
            "w": 200,
            "h": 50,
            "type": "rotate-lava",
            "angle": -17198.533333327166,
            "rotateSpeed": -112,
            "pivotX": 3575,
            "pivotY": 6375,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3525,
            "y": 3550,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 6950,
            "y": 9900,
            "w": 250,
            "h": 100,
            "type": "switchnormal",
            "onTime": 2,
            "offTime": 3,
            "state": false,
            "timer": 2.0083333333337405,
            "inView": false
        },
        {
            "x": 3700,
            "y": 6050,
            "w": 325,
            "h": 100,
            "type": "rotate-normal",
            "angle": -14651.59999999544,
            "rotateSpeed": -96,
            "pivotX": 3700,
            "pivotY": 6050,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 170.01838135919303,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    2400
                ],
                [
                    5300,
                    2400
                ],
                [
                    5000,
                    2900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 5300,
                "top": 2400,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2000,
            "y": 2000,
            "w": 6000,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5300,
            "y": 2550,
            "w": 1800,
            "h": 200,
            "type": "timetrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "points": [
                [
                    7000,
                    2550
                ],
                [
                    7100,
                    2550
                ],
                [
                    7100,
                    2750
                ],
                [
                    7000,
                    2750
                ],
                [
                    6900,
                    2650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6900,
                "right": 7100,
                "top": 2550,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6600,
                    2550
                ],
                [
                    6700,
                    2650
                ],
                [
                    6600,
                    2750
                ],
                [
                    6500,
                    2650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6500,
                "right": 6700,
                "top": 2550,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    2550
                ],
                [
                    6300,
                    2650
                ],
                [
                    6200,
                    2750
                ],
                [
                    6100,
                    2650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6100,
                "right": 6300,
                "top": 2550,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5800,
                    2550
                ],
                [
                    5900,
                    2650
                ],
                [
                    5800,
                    2750
                ],
                [
                    5700,
                    2650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5700,
                "right": 5900,
                "top": 2550,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5300,
                    2550
                ],
                [
                    5400,
                    2550
                ],
                [
                    5500,
                    2650
                ],
                [
                    5400,
                    2750
                ],
                [
                    5300,
                    2750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5300,
                "right": 5500,
                "top": 2550,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8138.591666665749,
            "rotateSpeed": 53,
            "pivotX": 3150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8228.59166666581,
            "rotateSpeed": 53,
            "pivotX": 3150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -8048.59166666576,
            "rotateSpeed": -53,
            "pivotX": 3650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 3650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -8138.591666665749,
            "rotateSpeed": -53,
            "pivotX": 3650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8138.591666665749,
            "rotateSpeed": 53,
            "pivotX": 4150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8183.591666665742,
            "rotateSpeed": 53,
            "pivotX": 4150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -8138.591666665749,
            "rotateSpeed": -53,
            "pivotX": 4650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -8093.591666665754,
            "rotateSpeed": -53,
            "pivotX": 4650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    2400
                ],
                [
                    3000,
                    2400
                ],
                [
                    2900,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2900,
                "right": 3000,
                "top": 2400,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    2400
                ],
                [
                    3500,
                    2400
                ],
                [
                    3400,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3300,
                "right": 3500,
                "top": 2400,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3400,
                    2800
                ],
                [
                    3500,
                    2900
                ],
                [
                    3300,
                    2900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3300,
                "right": 3500,
                "top": 2800,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3900,
                    2800
                ],
                [
                    4000,
                    2900
                ],
                [
                    3800,
                    2900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3800,
                "right": 4000,
                "top": 2800,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4400,
                    2800
                ],
                [
                    4500,
                    2900
                ],
                [
                    4300,
                    2900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4300,
                "right": 4500,
                "top": 2800,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4300,
                    2400
                ],
                [
                    4500,
                    2400
                ],
                [
                    4400,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4300,
                "right": 4500,
                "top": 2400,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3800,
                    2400
                ],
                [
                    4000,
                    2400
                ],
                [
                    3900,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3800,
                "right": 4000,
                "top": 2400,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    2800
                ],
                [
                    3000,
                    2900
                ],
                [
                    2900,
                    2900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2900,
                "right": 3000,
                "top": 2800,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3150,
            "y": 2650,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 3650,
            "y": 2650,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8273.591666665898,
            "rotateSpeed": 53,
            "pivotX": 4150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": 8318.591666665985,
            "rotateSpeed": 53,
            "pivotX": 4150,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2650,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -8003.591666665767,
            "rotateSpeed": -53,
            "pivotX": 4650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2650,
            "w": 500,
            "h": 100,
            "type": "rotate-lava",
            "angle": -7958.591666665772,
            "rotateSpeed": -53,
            "pivotX": 4650,
            "pivotY": 2650,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 254.95097567963924,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 4650,
            "y": 2650,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 6465.654166674713,
            "y": 7100,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7100
                ],
                [
                    6750,
                    7100
                ]
            ],
            "speed": 161.5,
            "currentPoint": 0,
            "pointOn": {
                "x": 6150,
                "y": 7100
            },
            "pointTo": {
                "x": 6750,
                "y": 7100
            },
            "xv": 161.5,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6618.546666672644,
            "y": 7275,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7275
                ],
                [
                    6550,
                    7275
                ],
                [
                    6750,
                    7275
                ]
            ],
            "speed": 161.6,
            "currentPoint": 2,
            "pointOn": {
                "x": 6750,
                "y": 7275
            },
            "pointTo": {
                "x": 6150,
                "y": 7275
            },
            "xv": -161.6,
            "yv": 1.9790292274221226e-14,
            "inView": false
        },
        {
            "x": 6234.345833325287,
            "y": 7450,
            "w": 200,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7450
                ],
                [
                    6750,
                    7450
                ],
                [
                    6550,
                    7450
                ]
            ],
            "speed": 161.5,
            "currentPoint": 2,
            "pointOn": {
                "x": 6550,
                "y": 7450
            },
            "pointTo": {
                "x": 6150,
                "y": 7450
            },
            "xv": -161.5,
            "yv": 1.9778045806229755e-14,
            "inView": false
        },
        {
            "x": 6150,
            "y": 7250,
            "w": 800,
            "h": 25,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7250
                ],
                [
                    6175,
                    7250
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "pointOn": {
                "x": 6150,
                "y": 7250
            },
            "pointTo": {
                "x": 6175,
                "y": 7250
            },
            "xv": 0,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6150,
            "y": 7425,
            "w": 800,
            "h": 25,
            "type": "movingsafe",
            "points": [
                [
                    6150,
                    7425
                ],
                [
                    6175,
                    7425
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "pointOn": {
                "x": 6150,
                "y": 7425
            },
            "pointTo": {
                "x": 6175,
                "y": 7425
            },
            "xv": 0,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    6275,
                    7175
                ],
                [
                    6375,
                    7350
                ],
                [
                    6275,
                    7525
                ],
                [
                    6175,
                    7350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6175,
                "right": 6375,
                "top": 7175,
                "bottom": 7525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6575,
                    7175
                ],
                [
                    6675,
                    7350
                ],
                [
                    6575,
                    7525
                ],
                [
                    6475,
                    7350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6475,
                "right": 6675,
                "top": 7175,
                "bottom": 7525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6875,
                    7175
                ],
                [
                    6975,
                    7350
                ],
                [
                    6875,
                    7525
                ],
                [
                    6775,
                    7350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6775,
                "right": 6975,
                "top": 7175,
                "bottom": 7525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6725,
                    7450
                ],
                [
                    6825,
                    7600
                ],
                [
                    6625,
                    7600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6625,
                "right": 6825,
                "top": 7450,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6425,
                    7450
                ],
                [
                    6525,
                    7600
                ],
                [
                    6325,
                    7600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6325,
                "right": 6525,
                "top": 7450,
                "bottom": 7600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6325,
                    7100
                ],
                [
                    6525,
                    7100
                ],
                [
                    6425,
                    7250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6325,
                "right": 6525,
                "top": 7100,
                "bottom": 7250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6625,
                    7100
                ],
                [
                    6825,
                    7100
                ],
                [
                    6725,
                    7250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6625,
                "right": 6825,
                "top": 7100,
                "bottom": 7250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5250,
            "y": 7425,
            "w": 800,
            "h": 25,
            "type": "fulldeath",
            "inView": false
        },
        {
            "x": 5250,
            "y": 7250,
            "w": 800,
            "h": 25,
            "type": "fulldeath",
            "inView": false
        },
        {
            "x": 5418.691666667816,
            "y": 7275,
            "w": 200,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    5250,
                    7275
                ],
                [
                    5650,
                    7275
                ],
                [
                    5850,
                    7275
                ]
            ],
            "speed": 323,
            "currentPoint": 2,
            "collidable": true,
            "pointOn": {
                "x": 5850,
                "y": 7275
            },
            "pointTo": {
                "x": 5250,
                "y": 7275
            },
            "xv": -323,
            "yv": 3.955609161245951e-14,
            "inView": false
        },
        {
            "x": 5818.691666667816,
            "y": 7100,
            "w": 200,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    5250,
                    7100
                ],
                [
                    5850,
                    7100
                ]
            ],
            "speed": 323,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 5850,
                "y": 7100
            },
            "pointTo": {
                "x": 5250,
                "y": 7100
            },
            "xv": -323,
            "yv": 3.955609161245951e-14,
            "inView": false
        },
        {
            "x": 5481.308333332184,
            "y": 7450,
            "w": 200,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    5250,
                    7450
                ],
                [
                    5850,
                    7450
                ],
                [
                    5650,
                    7450
                ]
            ],
            "speed": 323,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 5250,
                "y": 7450
            },
            "pointTo": {
                "x": 5850,
                "y": 7450
            },
            "xv": 323,
            "yv": 0,
            "inView": false
        },
        {
            "points": [
                [
                    6100,
                    7175
                ],
                [
                    6150,
                    7225
                ],
                [
                    6175,
                    7350
                ],
                [
                    6150,
                    7475
                ],
                [
                    6100,
                    7525
                ],
                [
                    6050,
                    7475
                ],
                [
                    6025,
                    7350
                ],
                [
                    6050,
                    7225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6025,
                "right": 6175,
                "top": 7175,
                "bottom": 7525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2900,
            "y": 7050,
            "w": 100,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4275,
            "y": 7100,
            "w": 100,
            "h": 200,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3075,
            "y": 7150,
            "radius": 33,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9625,
            "y": 25,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 2,
            "inView": false
        },
        {
            "x": 9625,
            "y": 1825,
            "w": 150,
            "h": 125,
            "type": "zone",
            "value": 3,
            "inView": false
        },
        {
            "x": 9625,
            "y": 3725,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 9625,
            "y": 5925,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 9625,
            "y": 9625,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 5,
            "inView": false
        },
        {
            "x": 4825,
            "y": 9225,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 6,
            "inView": false
        },
        {
            "x": 25,
            "y": 9625,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 5,
            "inView": false
        },
        {
            "x": 25,
            "y": 5925,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 25,
            "y": 3725,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 3,
            "inView": false
        },
        {
            "x": 25,
            "y": 25,
            "w": 350,
            "h": 350,
            "type": "zone",
            "value": 2,
            "inView": false
        },
        {
            "x": 3100,
            "y": 9600,
            "w": 200,
            "h": 150,
            "type": "zone",
            "value": 6,
            "inView": false
        },
        {
            "x": 8925,
            "y": 8925,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 7,
            "inView": false
        },
        {
            "x": 8925,
            "y": 7775,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 8,
            "inView": false
        },
        {
            "x": 8925,
            "y": 825,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 10,
            "inView": false
        },
        {
            "x": 7125,
            "y": 825,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 12,
            "inView": false
        },
        {
            "x": 4525,
            "y": 825,
            "w": 950,
            "h": 650,
            "type": "zone",
            "value": 11,
            "inView": false
        },
        {
            "x": 825,
            "y": 8625,
            "w": 250,
            "h": 275,
            "type": "zone",
            "value": 7,
            "inView": false
        },
        {
            "x": 825,
            "y": 5825,
            "w": 250,
            "h": 275,
            "type": "zone",
            "value": 8,
            "inView": false
        },
        {
            "x": 825,
            "y": 3025,
            "w": 250,
            "h": 275,
            "type": "zone",
            "value": 9,
            "inView": false
        },
        {
            "x": 825,
            "y": 825,
            "w": 250,
            "h": 250,
            "type": "zone",
            "value": 10,
            "inView": false
        },
        {
            "x": 1525,
            "y": 1525,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 12,
            "inView": false
        },
        {
            "x": 1525,
            "y": 8025,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 13,
            "inView": false
        },
        {
            "x": 4775,
            "y": 7125,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 14,
            "inView": false
        },
        {
            "x": 8000,
            "y": 1500,
            "w": 500,
            "h": 500,
            "type": "zone",
            "value": 12,
            "inView": false
        },
        {
            "x": 2425,
            "y": 7125,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 15,
            "inView": false
        },
        {
            "x": 2425,
            "y": 2425,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 16,
            "inView": false
        },
        {
            "x": 4725,
            "y": 2925,
            "w": 550,
            "h": 350,
            "type": "zone",
            "value": 17,
            "inView": false
        },
        {
            "x": 7125,
            "y": 2425,
            "w": 450,
            "h": 450,
            "type": "zone",
            "value": 16,
            "inView": false
        },
        {
            "x": 4975,
            "y": 4125,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 5175,
            "tpy": 5175,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5100,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5150,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5200,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 5100,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 5150,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 5200,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5250,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5200,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5150,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 5250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 5200,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5100,
            "y": 5150,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 5050,
            "y": 5275,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 5100,
            "tpy": 4150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5050,
            "y": 5050,
            "w": 250,
            "h": 25,
            "type": "tp",
            "tpx": 4900,
            "tpy": 4150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5275,
            "y": 5050,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 5100,
            "tpy": 4150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5050,
            "y": 5050,
            "w": 25,
            "h": 250,
            "type": "tp",
            "tpx": 4900,
            "tpy": 4150,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 5200,
            "y": 5125,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 5125,
            "w": 25,
            "h": 100,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 5125,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 5125,
            "y": 5200,
            "w": 100,
            "h": 25,
            "type": "breakable",
            "maxStrength": 60,
            "currentStrength": 60,
            "time": 0,
            "timer": 0,
            "regenTime": 1e+99,
            "inView": false
        },
        {
            "x": 4775,
            "y": 7125,
            "w": 450,
            "h": 450,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=P0_kuFlM9wI",
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 3525,
            "y": 7450,
            "w": 100,
            "h": 150,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3525,
            "y": 7100,
            "w": 100,
            "h": 150,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3900,
            "y": 7375,
            "w": 100,
            "h": 225,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3900,
            "y": 7100,
            "w": 100,
            "h": 75,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4275,
            "y": 7500,
            "w": 100,
            "h": 100,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 4700,
            "y": 0,
            "w": 625,
            "h": 425,
            "type": "zone",
            "value": 1,
            "inView": true
        },
        {
            "x": 800,
            "y": 1950,
            "w": 300,
            "h": 600,
            "type": "size",
            "size": 12,
            "inView": false
        },
        {
            "x": 0,
            "y": 6325,
            "w": 425,
            "h": 50,
            "type": "color",
            "bgColor": "#56430b",
            "tileColor": "#c39e22",
            "inView": false
        },
        {
            "x": 9025,
            "y": 4375,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 9050,
            "tpy": 950,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 9050,
            "y": 1800,
            "radius": 35,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9000,
            "y": 4350,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    4250
                ],
                [
                    9125,
                    4350
                ],
                [
                    8975,
                    4350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 4250,
                "bottom": 4350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6525,
                    9100
                ],
                [
                    6650,
                    9200
                ],
                [
                    6400,
                    9200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6400,
                "right": 6650,
                "top": 9100,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6400,
                    8900
                ],
                [
                    6650,
                    8900
                ],
                [
                    6525,
                    9000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6400,
                "right": 6650,
                "top": 8900,
                "bottom": 9000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7650,
                    8900
                ],
                [
                    7900,
                    8900
                ],
                [
                    7775,
                    9000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7650,
                "right": 7900,
                "top": 8900,
                "bottom": 9000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7775,
                    9100
                ],
                [
                    7900,
                    9200
                ],
                [
                    7650,
                    9200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7650,
                "right": 7900,
                "top": 9100,
                "bottom": 9200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 875,
            "y": 8975,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": 943.0563727237735,
            "endAngle": 943.8417708871704,
            "startPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        926.9089937047404,
                        9008.903633618851
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        887.731712214475,
                        9035.678690691937
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 9125,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": -943.8417708871704,
            "endAngle": -943.0563727237735,
            "startPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        887.731712214475,
                        9064.321309308063
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        926.9089937047404,
                        9091.096366381149
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 8975,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": 944.6271690505673,
            "endAngle": 945.4125672139642,
            "startPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        841.0963663812063,
                        9026.908993704777
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        814.3213093080766,
                        8987.731712214541
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 9125,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": -942.2709745603765,
            "endAngle": -941.4855763969796,
            "startPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        935.678690691951,
                        9137.731712214409
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        908.9036336189006,
                        9176.908993704708
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 9125,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": -940.7001782335827,
            "endAngle": -939.9147800701859,
            "startPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        862.2682877856568,
                        9185.678690691964
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        823.0910062953333,
                        9158.903633618962
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 9125,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": -939.1293819067889,
            "endAngle": -938.343983743392,
            "startPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        814.3213093080213,
                        9112.268287785722
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        9125
                    ],
                    [
                        841.0963663809868,
                        9073.091006295366
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 8975,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": 946.1979653773611,
            "endAngle": 946.983363540758,
            "startPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        823.091006295186,
                        8941.096366381262
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        862.2682877853933,
                        8914.32130930809
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 875,
            "y": 8975,
            "radius": 62,
            "type": "circle-hollow-slice",
            "startAngle": 947.7687617041549,
            "endAngle": 948.5541598675518,
            "startPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        908.903633618681,
                        8923.09100629515
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        875,
                        8975
                    ],
                    [
                        935.6786906918958,
                        8962.268287785328
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 5.969026041820607,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    4175
                ],
                [
                    7600,
                    4275
                ],
                [
                    7500,
                    4225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7600,
                "top": 4175,
                "bottom": 4275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7600,
            "y": 5825,
            "radius": 125,
            "radius2": 225,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 7125,
            "y": 4825,
            "w": 450,
            "h": 250,
            "type": "zone",
            "value": 15,
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    5025
                ],
                [
                    7600,
                    5025
                ],
                [
                    7600,
                    5100
                ],
                [
                    7550,
                    5100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7600,
                "top": 5025,
                "bottom": 5100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7350,
            "y": 4250,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7100,
            "y": 5425,
            "radius": 125,
            "radius2": 225,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 7600,
            "y": 5425,
            "radius": 125,
            "radius2": 225,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 7350,
            "y": 5625,
            "radius": 132,
            "type": "circle-hollow-slice",
            "startAngle": -366.25559820172015,
            "endAngle": -361.71774214653897,
            "startPolygon": {
                "points": [
                    [
                        7330.7150405161465,
                        5552.521794050169
                    ],
                    [
                        7316.058471308417,
                        5497.438357528297
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7281.971698927071,
                        5656.57768600026
                    ],
                    [
                        7230.270190111646,
                        5680.576727360457
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": true,
            "rotateSpeed": -2.303834612632515,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7550,
            "y": 5075,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 5050,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 6000,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 6000,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 5825,
            "radius": 125,
            "radius2": 225,
            "type": "oval",
            "renderType": "oval",
            "inView": false
        },
        {
            "x": 4700,
            "y": 2925,
            "w": 600,
            "h": 350,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=6DpNIql7uPk",// should be moyai2!
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 7350,
            "y": 6000,
            "radius": 35,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6975,
            "y": 7100,
            "w": 100,
            "h": 500,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 7438.498575177109,
            "y": 3279.4603530153863,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7138,
                    3269
                ],
                [
                    7211,
                    3100
                ],
                [
                    7385,
                    3103
                ],
                [
                    7461,
                    3268
                ],
                [
                    7300,
                    3350
                ]
            ],
            "speed": 112,
            "currentPoint": 3,
            "pointOn": {
                "x": 7461,
                "y": 3268
            },
            "pointTo": {
                "x": 7300,
                "y": 3350
            },
            "xv": -99.80115380961655,
            "yv": 50.83040131918358,
            "inView": false
        },
        {
            "x": 7274.361331931366,
            "y": 3337.180665965683,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7138,
                    3269
                ],
                [
                    7211,
                    3100
                ],
                [
                    7385,
                    3103
                ],
                [
                    7461,
                    3268
                ],
                [
                    7300,
                    3350
                ]
            ],
            "speed": 112,
            "currentPoint": 4,
            "pointOn": {
                "x": 7300,
                "y": 3350
            },
            "pointTo": {
                "x": 7138,
                "y": 3269
            },
            "xv": -100.17584539199058,
            "yv": -50.0879226959953,
            "inView": false
        },
        {
            "x": 7146.553074338432,
            "y": 3249.199047079526,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7138,
                    3269
                ],
                [
                    7211,
                    3100
                ],
                [
                    7385,
                    3103
                ],
                [
                    7461,
                    3268
                ],
                [
                    7300,
                    3350
                ]
            ],
            "speed": 112,
            "currentPoint": 0,
            "pointOn": {
                "x": 7138,
                "y": 3269
            },
            "pointTo": {
                "x": 7211,
                "y": 3100
            },
            "xv": 44.41248751101985,
            "yv": -102.81795053921036,
            "inView": false
        },
        {
            "x": 7230.135817816722,
            "y": 3100.329927893389,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7138,
                    3269
                ],
                [
                    7211,
                    3100
                ],
                [
                    7385,
                    3103
                ],
                [
                    7461,
                    3268
                ],
                [
                    7300,
                    3350
                ]
            ],
            "speed": 112,
            "currentPoint": 1,
            "pointOn": {
                "x": 7211,
                "y": 3100
            },
            "pointTo": {
                "x": 7385,
                "y": 3103
            },
            "xv": 111.98335686148772,
            "yv": 1.9307475320946161,
            "inView": false
        },
        {
            "x": 7395.790369928006,
            "y": 3126.4264610279174,
            "w": 100,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    7138,
                    3269
                ],
                [
                    7211,
                    3100
                ],
                [
                    7385,
                    3103
                ],
                [
                    7461,
                    3268
                ],
                [
                    7300,
                    3350
                ]
            ],
            "speed": 112,
            "currentPoint": 2,
            "pointOn": {
                "x": 7385,
                "y": 3103
            },
            "pointTo": {
                "x": 7461,
                "y": 3268
            },
            "xv": 46.85630790509703,
            "yv": 101.72751058343431,
            "inView": false
        },
        {
            "x": 7350,
            "y": 3275,
            "r": 79,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 79,
            "inView": false
        },
        {
            "x": 6725,
            "y": 2575,
            "w": 150,
            "h": 150,
            "type": "button",
            "id": 21,
            "active": true,
            "inView": false
        },
        {
            "x": 6325,
            "y": 2575,
            "w": 150,
            "h": 150,
            "type": "button",
            "id": 22,
            "active": true,
            "inView": false
        },
        {
            "x": 5925,
            "y": 2575,
            "w": 150,
            "h": 150,
            "type": "button",
            "id": 23,
            "active": true,
            "inView": false
        },
        {
            "x": 5525,
            "y": 2575,
            "w": 150,
            "h": 150,
            "type": "button",
            "id": 24,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    5700
                ],
                [
                    9000,
                    5900
                ],
                [
                    8900,
                    5950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 5700,
                "bottom": 5950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    5700
                ],
                [
                    9200,
                    5950
                ],
                [
                    9100,
                    5900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 5700,
                "bottom": 5950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8875,
            "y": 6200,
            "w": 350,
            "h": 75,
            "type": "morphmove",
            "points": [
                [
                    8875,
                    6200
                ],
                [
                    8875,
                    4850
                ]
            ],
            "speed": 320,
            "currentPoint": 0,
            "alongWith": false,
            "active": false,
            "morphId": 0,
            "pointOn": {
                "x": 8875,
                "y": 6200
            },
            "pointTo": {
                "x": 8875,
                "y": 4850
            },
            "xv": 1.9594348786357652e-14,
            "yv": -320,
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5450
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5750
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5450,
                "bottom": 5750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    5250
                ],
                [
                    9200,
                    5500
                ],
                [
                    9100,
                    5300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 5250,
                "bottom": 5500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    5250
                ],
                [
                    9000,
                    5300
                ],
                [
                    8900,
                    5525
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 5250,
                "bottom": 5525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8937.5,
            "y": 5600,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9162.5,
            "y": 5600,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9000,
            "y": 5250,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 1,
            "currentCoins": 1,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    5025
                ],
                [
                    9025,
                    5150
                ],
                [
                    8900,
                    5250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9025,
                "top": 5025,
                "bottom": 5250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    5025
                ],
                [
                    9200,
                    5250
                ],
                [
                    9075,
                    5150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9075,
                "right": 9200,
                "top": 5025,
                "bottom": 5250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9075,
                    5050
                ],
                [
                    9175,
                    5050
                ],
                [
                    9075,
                    5150
                ],
                [
                    9025,
                    5100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9025,
                "right": 9175,
                "top": 5050,
                "bottom": 5150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8875,
                    5000
                ],
                [
                    8975,
                    5000
                ],
                [
                    9025,
                    5050
                ],
                [
                    8975,
                    5100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8875,
                "right": 9025,
                "top": 5000,
                "bottom": 5100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9075,
                    4950
                ],
                [
                    9200,
                    4950
                ],
                [
                    9200,
                    5050
                ],
                [
                    9075,
                    5050
                ],
                [
                    9025,
                    5000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9025,
                "right": 9200,
                "top": 4950,
                "bottom": 5050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    4900
                ],
                [
                    8975,
                    4900
                ],
                [
                    9025,
                    4950
                ],
                [
                    8975,
                    5000
                ],
                [
                    8900,
                    5000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9025,
                "top": 4900,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    4800
                ],
                [
                    9200,
                    4950
                ],
                [
                    9075,
                    4950
                ],
                [
                    9025,
                    4900
                ],
                [
                    9075,
                    4850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9025,
                "right": 9200,
                "top": 4800,
                "bottom": 4950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    4800
                ],
                [
                    9025,
                    4850
                ],
                [
                    8975,
                    4900
                ],
                [
                    8900,
                    4900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9025,
                "top": 4800,
                "bottom": 4900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5475
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5725
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5475,
                "bottom": 5725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5500
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5700
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5500,
                "bottom": 5700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5525
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5675
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5525,
                "bottom": 5675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5550
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5650
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5550,
                "bottom": 5650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5575
                ],
                [
                    9125,
                    5600
                ],
                [
                    9050,
                    5625
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5575,
                "bottom": 5625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    5575
                ],
                [
                    9125,
                    5600
                ],
                [
                    8975,
                    5600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8975,
                "right": 9125,
                "top": 5575,
                "bottom": 5600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8900,
            "y": 4450,
            "w": 300,
            "h": 100,
            "type": "morphmove",
            "points": [
                [
                    8900,
                    4450
                ],
                [
                    8900,
                    1400
                ]
            ],
            "speed": 270,
            "currentPoint": 0,
            "alongWith": false,
            "active": false,
            "morphId": 1,
            "pointOn": {
                "x": 8900,
                "y": 4450
            },
            "pointTo": {
                "x": 8900,
                "y": 1400
            },
            "xv": 1.6532731788489267e-14,
            "yv": -270,
            "inView": false
        },
        {
            "x": 8950,
            "y": 5225,
            "r": 33,
            "angle": -287.84808872255326,
            "type": "circle-sentry",
            "speed": 260,
            "laser": {
                "x": 8950,
                "y": 5225,
                "w": 300,
                "h": 33,
                "pivotX": 9100,
                "pivotY": 5241.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 9150,
            "y": 5225,
            "r": 33,
            "angle": -287.84808872255326,
            "type": "circle-sentry",
            "speed": 260,
            "laser": {
                "x": 9150,
                "y": 5225,
                "w": 300,
                "h": 33,
                "pivotX": 9300,
                "pivotY": 5241.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 8925,
            "y": 5337.5,
            "r": 33,
            "angle": -290.62316223322614,
            "type": "circle-sentry",
            "speed": 250,
            "laser": {
                "x": 8925,
                "y": 5337.5,
                "w": 245,
                "h": 33,
                "pivotX": 9047.5,
                "pivotY": 5354,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 9175,
            "y": 5337.5,
            "r": 33,
            "angle": -290.62316223322614,
            "type": "circle-sentry",
            "speed": 250,
            "laser": {
                "x": 9175,
                "y": 5337.5,
                "w": 245,
                "h": 33,
                "pivotX": 9297.5,
                "pivotY": 5354,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 9175,
            "y": 5825,
            "r": 33,
            "angle": -293.39823574389874,
            "type": "circle-sentry",
            "speed": 240,
            "laser": {
                "x": 9175,
                "y": 5825,
                "w": 300,
                "h": 33,
                "pivotX": 9325,
                "pivotY": 5841.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 8925,
            "y": 5825,
            "r": 33,
            "angle": -293.39823574389874,
            "type": "circle-sentry",
            "speed": 240,
            "laser": {
                "x": 8925,
                "y": 5825,
                "w": 300,
                "h": 33,
                "pivotX": 9075,
                "pivotY": 5841.5,
                "distToPivot": 0
            },
            "rest": 90,
            "renderType": "circleSentry",
            "lastNoticed": false,
            "radius": 33,
            "inView": false
        },
        {
            "x": 9050,
            "y": 6050,
            "radius": 225,
            "type": "circle-hollow-slice",
            "startAngle": 0,
            "endAngle": 3.141592653589793,
            "startPolygon": {
                "points": [
                    [
                        9200,
                        6050
                    ],
                    [
                        9275,
                        6050
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        8900,
                        6050
                    ],
                    [
                        8825,
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
            "points": [
                [
                    8900,
                    4300
                ],
                [
                    8975,
                    4450
                ],
                [
                    8900,
                    4500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 8975,
                "top": 4300,
                "bottom": 4500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    4300
                ],
                [
                    9200,
                    4500
                ],
                [
                    9125,
                    4450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9125,
                "right": 9200,
                "top": 4300,
                "bottom": 4500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3675
                ],
                [
                    9050,
                    3825
                ],
                [
                    8900,
                    3975
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9050,
                "top": 3675,
                "bottom": 3975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3600
                ],
                [
                    8950,
                    3650
                ],
                [
                    8900,
                    3700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 8950,
                "top": 3600,
                "bottom": 3700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3525
                ],
                [
                    8950,
                    3575
                ],
                [
                    8900,
                    3625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 8950,
                "top": 3525,
                "bottom": 3625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3450
                ],
                [
                    8950,
                    3500
                ],
                [
                    8900,
                    3550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 8950,
                "top": 3450,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3575
                ],
                [
                    9200,
                    3775
                ],
                [
                    9100,
                    3675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 3575,
                "bottom": 3775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3900
                ],
                [
                    9200,
                    4100
                ],
                [
                    9100,
                    4000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 3900,
                "bottom": 4100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3975
                ],
                [
                    9200,
                    4225
                ],
                [
                    9100,
                    4150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 3975,
                "bottom": 4225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    3250
                ],
                [
                    9100,
                    3300
                ],
                [
                    9050,
                    3350
                ],
                [
                    9000,
                    3300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9000,
                "right": 9100,
                "top": 3250,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3000
                ],
                [
                    9000,
                    3100
                ],
                [
                    8900,
                    3200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 3000,
                "bottom": 3200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3000
                ],
                [
                    9200,
                    3200
                ],
                [
                    9100,
                    3100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 3000,
                "bottom": 3200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3500
                ],
                [
                    9200,
                    3600
                ],
                [
                    9150,
                    3550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9150,
                "right": 9200,
                "top": 3500,
                "bottom": 3600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3425
                ],
                [
                    9200,
                    3525
                ],
                [
                    9150,
                    3475
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9150,
                "right": 9200,
                "top": 3425,
                "bottom": 3525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    2400
                ],
                [
                    9000,
                    2500
                ],
                [
                    8900,
                    2850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 2400,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    2400
                ],
                [
                    9200,
                    2850
                ],
                [
                    9100,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 2400,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    2650
                ],
                [
                    9100,
                    2800
                ],
                [
                    9050,
                    2900
                ],
                [
                    9000,
                    2800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9000,
                "right": 9100,
                "top": 2650,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    2375
                ],
                [
                    9075,
                    2400
                ],
                [
                    9050,
                    2425
                ],
                [
                    9025,
                    2400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9025,
                "right": 9075,
                "top": 2375,
                "bottom": 2425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    2200
                ],
                [
                    9000,
                    2300
                ],
                [
                    8900,
                    2400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 2200,
                "bottom": 2400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    2200
                ],
                [
                    9200,
                    2400
                ],
                [
                    9100,
                    2300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9200,
                "top": 2200,
                "bottom": 2400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9075,
                    1500
                ],
                [
                    9200,
                    1500
                ],
                [
                    9200,
                    1975
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9075,
                "right": 9200,
                "top": 1500,
                "bottom": 1975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    1500
                ],
                [
                    9025,
                    1500
                ],
                [
                    8900,
                    1975
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9025,
                "top": 1500,
                "bottom": 1975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8875,
            "y": 1775,
            "w": 25,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9200,
            "y": 1775,
            "w": 50,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9200,
            "y": 3975,
            "w": 25,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8925,
                    3725
                ],
                [
                    9025,
                    3825
                ],
                [
                    8925,
                    3925
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8925,
                "right": 9025,
                "top": 3725,
                "bottom": 3925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3600
                ],
                [
                    9200,
                    3750
                ],
                [
                    9125,
                    3675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9125,
                "right": 9200,
                "top": 3600,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9050,
            "y": 3300,
            "radius": 25,
            "type": "circle-hollow-slice",
            "startAngle": 441.1959638475308,
            "endAngle": 442.7667601743259,
            "startPolygon": {
                "points": [
                    [
                        9050,
                        3300
                    ],
                    [
                        9054.912915236911,
                        3324.512512394182
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9050,
                        3300
                    ],
                    [
                        9025.487487605817,
                        3304.9129152369055
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 2.792526803190927,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9050,
            "y": 3300,
            "radius": 25,
            "type": "circle-hollow-slice",
            "startAngle": 444.337556501121,
            "endAngle": 445.90835282791613,
            "startPolygon": {
                "points": [
                    [
                        9050,
                        3300
                    ],
                    [
                        9045.0870847631,
                        3275.4874876058157
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9050,
                        3300
                    ],
                    [
                        9074.512512394185,
                        3295.0870847631054
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": 2.792526803190927,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    8925,
                    2450
                ],
                [
                    8975,
                    2500
                ],
                [
                    8925,
                    2700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8925,
                "right": 8975,
                "top": 2450,
                "bottom": 2700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9175,
                    2450
                ],
                [
                    9175,
                    2700
                ],
                [
                    9125,
                    2500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9125,
                "right": 9175,
                "top": 2450,
                "bottom": 2700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    2725
                ],
                [
                    9075,
                    2800
                ],
                [
                    9050,
                    2850
                ],
                [
                    9025,
                    2800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9025,
                "right": 9075,
                "top": 2725,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9175,
                    2250
                ],
                [
                    9175,
                    2350
                ],
                [
                    9125,
                    2300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9125,
                "right": 9175,
                "top": 2250,
                "bottom": 2350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8925,
                    2250
                ],
                [
                    8975,
                    2300
                ],
                [
                    8925,
                    2350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8925,
                "right": 8975,
                "top": 2250,
                "bottom": 2350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8900,
            "y": 4450,
            "w": 300,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9200,
            "y": 4300,
            "w": 37.5,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8862.5,
            "y": 4300,
            "w": 37.5,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9050,
            "y": 2400,
            "radius": 15,
            "type": "circle-hollow-slice",
            "startAngle": -496.3454593285255,
            "endAngle": -494.77466300172955,
            "startPolygon": {
                "points": [
                    [
                        9050,
                        2400
                    ],
                    [
                        9064.99485987468,
                        2400.3926542228473
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9050,
                        2400
                    ],
                    [
                        9049.607345777136,
                        2414.994859874679
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -3.141592653589793,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9050,
            "y": 2400,
            "radius": 15,
            "type": "circle-hollow-slice",
            "startAngle": -493.2038666749336,
            "endAngle": -491.6330703481376,
            "startPolygon": {
                "points": [
                    [
                        9050,
                        2400
                    ],
                    [
                        9035.00514012532,
                        2399.607345777121
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        9050,
                        2400
                    ],
                    [
                        9050.392654222895,
                        2385.0051401253213
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 0,
            "toRotate": true,
            "rotateSpeed": -3.141592653589793,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8975,
            "y": 4625,
            "w": 150,
            "h": 100,
            "type": "resetcoins",
            "inView": false
        },
        {
            "x": 7375,
            "y": 6325,
            "w": 150,
            "h": 50,
            "type": "rotate-normal",
            "angle": 16584.29999999565,
            "rotateSpeed": 108,
            "pivotX": 7375,
            "pivotY": 6325,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 79.05694150420949,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7385.233333328735,
            "y": 6000,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7250,
                    6000
                ],
                [
                    7400,
                    6000
                ]
            ],
            "speed": 92,
            "currentPoint": 0,
            "pointOn": {
                "x": 7250,
                "y": 6000
            },
            "pointTo": {
                "x": 7400,
                "y": 6000
            },
            "xv": 92,
            "yv": 0,
            "inView": false
        },
        {
            "x": 7264.766666671265,
            "y": 6000,
            "w": 50,
            "h": 50,
            "type": "movingsafe",
            "points": [
                [
                    7250,
                    6000
                ],
                [
                    7400,
                    6000
                ]
            ],
            "speed": 92,
            "currentPoint": 1,
            "pointOn": {
                "x": 7400,
                "y": 6000
            },
            "pointTo": {
                "x": 7250,
                "y": 6000
            },
            "xv": -92,
            "yv": 1.126675055215565e-14,
            "inView": false
        },
        {
            "x": 7600,
            "y": 6750,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": 11670.433333331654,
            "rotateSpeed": 76,
            "pivotX": 7600,
            "pivotY": 6750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7600,
            "y": 6750,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": 11760.433333331635,
            "rotateSpeed": 76,
            "pivotX": 7600,
            "pivotY": 6750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7100,
            "y": 6450,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": -11670.433333331654,
            "rotateSpeed": -76,
            "pivotX": 7100,
            "pivotY": 6450,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7100,
            "y": 6450,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": -11580.43333333167,
            "rotateSpeed": -76,
            "pivotX": 7100,
            "pivotY": 6450,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 4.433333333333343,
            "inView": false
        },
        {
            "x": 7350,
            "y": 5350,
            "radius": 132,
            "type": "circle-hollow-slice",
            "startAngle": 361.71774214653897,
            "endAngle": 366.25559820172015,
            "startPolygon": {
                "points": [
                    [
                        7281.971698927071,
                        5318.42231399974
                    ],
                    [
                        7230.270190111646,
                        5294.423272639543
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "endPolygon": {
                "points": [
                    [
                        7330.7150405161465,
                        5422.478205949831
                    ],
                    [
                        7316.058471308417,
                        5477.561642471703
                    ]
                ],
                "type": "poly",
                "props": {}
            },
            "innerRadius": 75,
            "toRotate": true,
            "rotateSpeed": 2.303834612632515,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    7250,
                    5100
                ],
                [
                    7350,
                    5175
                ],
                [
                    7300,
                    5200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7250,
                "right": 7350,
                "top": 5100,
                "bottom": 5200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7450,
                    5100
                ],
                [
                    7400,
                    5200
                ],
                [
                    7350,
                    5175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7350,
                "right": 7450,
                "top": 5100,
                "bottom": 5200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7350,
                    5025
                ],
                [
                    7450,
                    5100
                ],
                [
                    7350,
                    5175
                ],
                [
                    7250,
                    5100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7250,
                "right": 7450,
                "top": 5025,
                "bottom": 5175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7400,
                    6950
                ],
                [
                    7400,
                    7125
                ],
                [
                    7100,
                    7450
                ],
                [
                    7100,
                    7250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7100,
                "right": 7400,
                "top": 6950,
                "bottom": 7450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7200,
                    6350
                ],
                [
                    7500,
                    6650
                ],
                [
                    7500,
                    6850
                ],
                [
                    7200,
                    6550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7200,
                "right": 7500,
                "top": 6350,
                "bottom": 6850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7600,
                    6250
                ],
                [
                    7600,
                    6450
                ],
                [
                    7450,
                    6350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7450,
                "right": 7600,
                "top": 6250,
                "bottom": 6450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7250,
                    6050
                ],
                [
                    7450,
                    6050
                ],
                [
                    7350,
                    6225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7250,
                "right": 7450,
                "top": 6050,
                "bottom": 6225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7100,
            "y": 3100,
            "w": 525,
            "h": 350,
            "type": "size",
            "size": 26.25,
            "inView": false
        },
        {
            "x": 8000,
            "y": 6500,
            "w": 500,
            "h": 50,
            "type": "tp",
            "tpx": 8050,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8000,
            "y": 6500,
            "w": 50,
            "h": 500,
            "type": "tp",
            "tpx": 8050,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 8450,
            "y": 6500,
            "w": 50,
            "h": 500,
            "type": "tp",
            "tpx": 8050,
            "tpy": 7525,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3150,
            "y": 7100,
            "w": 100,
            "h": 250,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3150,
            "y": 7550,
            "w": 100,
            "h": 50,
            "type": "tp",
            "tpx": 5000,
            "tpy": 7350,
            "bgColor": "#a67c00",
            "tileColor": "#fac203",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 3000,
            "y": 7064.766666671265,
            "w": 175,
            "h": 100,
            "type": "tpmove",
            "points": [
                [
                    3000,
                    7000
                ],
                [
                    3000,
                    7100
                ]
            ],
            "speed": 92,
            "currentPoint": 1,
            "tpx": 5000,
            "tpy": 7350,
            "pointOn": {
                "x": 3000,
                "y": 7100
            },
            "pointTo": {
                "x": 3000,
                "y": 7000
            },
            "xv": 5.633375276077825e-15,
            "yv": -92,
            "inView": false
        },
        {
            "x": 2975,
            "y": 6950,
            "w": 1675,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    3500
                ],
                [
                    8250,
                    3500
                ],
                [
                    8000,
                    3750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8250,
                "top": 3500,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    3750
                ],
                [
                    8250,
                    4000
                ],
                [
                    8000,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8250,
                "top": 3750,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    3750
                ],
                [
                    8500,
                    4000
                ],
                [
                    8250,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8250,
                "right": 8500,
                "top": 3750,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8250,
                    3500
                ],
                [
                    8500,
                    3500
                ],
                [
                    8500,
                    3750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8250,
                "right": 8500,
                "top": 3500,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8200,
                    3725
                ],
                [
                    8200,
                    3775
                ],
                [
                    8175,
                    3750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8175,
                "right": 8200,
                "top": 3725,
                "bottom": 3775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8250,
                    3675
                ],
                [
                    8275,
                    3700
                ],
                [
                    8225,
                    3700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8225,
                "right": 8275,
                "top": 3675,
                "bottom": 3700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8300,
                    3725
                ],
                [
                    8325,
                    3750
                ],
                [
                    8300,
                    3775
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8300,
                "right": 8325,
                "top": 3725,
                "bottom": 3775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8225,
                    3800
                ],
                [
                    8275,
                    3800
                ],
                [
                    8250,
                    3825
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8225,
                "right": 8275,
                "top": 3800,
                "bottom": 3825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8200,
            "y": 3700,
            "w": 100,
            "h": 100,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": false
        },
        {
            "x": 8100,
            "y": 3750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8250,
            "y": 3600,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 8400,
            "y": 3750,
            "radius": 25,
            "type": "circle-coin",
            "collected": false,
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    4900
                ],
                [
                    8500,
                    5000
                ],
                [
                    8400,
                    5000
                ]
            ],
            "type": "poly-tp",
            "tpx": 8250,
            "tpy": 5550,
            "most": {
                "left": 8400,
                "right": 8500,
                "top": 4900,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8100,
                    4500
                ],
                [
                    8500,
                    4500
                ],
                [
                    8500,
                    4900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8100,
                "right": 8500,
                "top": 4500,
                "bottom": 4900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    4600
                ],
                [
                    8400,
                    5000
                ],
                [
                    8000,
                    5000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8000,
                "right": 8400,
                "top": 4600,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    9000
                ],
                [
                    2900,
                    9050
                ],
                [
                    2850,
                    9100
                ],
                [
                    2800,
                    9050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2800,
                "right": 2900,
                "top": 9000,
                "bottom": 9100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1100,
            "y": 5425,
            "w": 50,
            "h": 475,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4525,
            "y": 825,
            "w": 950,
            "h": 650,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=hUpV1872pWs",
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 4650,
            "y": 8000,
            "w": 700,
            "h": 500,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=hUpV1872pWs",
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 6825,
            "y": 8050,
            "w": 800,
            "h": 450,
            "type": "musicchange",
            "musicPath": "https://www.youtube.com/watch?v=MOznJh6T5gE",
            "volume": 1,
            "startTime": 0,
            "inView": false
        },
        {
            "x": 4500,
            "y": 1450,
            "w": 500,
            "h": 550,
            "type": "switchnormal",
            "onTime": 100,
            "offTime": 100,
            "state": false,
            "timer": 42.00833333328029,
            "inView": false
        },
        {
            "x": 5000,
            "y": 1450,
            "w": 500,
            "h": 550,
            "type": "switchnormal",
            "onTime": 100,
            "offTime": 100,
            "state": true,
            "timer": 42.00833333328029,
            "inView": false
        },
        {
            // "x": 3700,
            // "y": 3300,
            // "w": 2600,
            // "h": 400,
            x: 3300,y:3300,w:3450,h:3450,
            "type": "vinette",
            "ir": 0,
            "or": 0.3 * 0.3,
            "o": 1.5,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            // "x": 3700,
            // "y": 3300,
            // "w": 2600,
            // "h": 400,
            x: 4500,y:4500,w:1000,h:1000,
            "type": "vinette",
            "ir": 0.2,
            "or": 1.2,
            "o": 1,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
    ]
    const enemies = [
        {
            "type": "enemymove",
            "parentId": 32,
            "angle": 1.5707963267948966,
            "points": [
                [
                    6325,
                    8975
                ],
                [
                    6325,
                    9125
                ]
            ],
            "speed": 117,
            "currentPoint": 0,
            "radius": 1,
            "x": 6325,
            "y": 9036.575000005172,
            "renderX": 6325,
            "renderY": 9036.575000005172,
            "xv": 7.164183775012016e-15,
            "yv": 117,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 6325,
                "y": 9125
            },
            "pointOn": {
                "x": 6325,
                "y": 8975
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 31,
            "angle": 0,
            "points": [
                [
                    7575,
                    8975
                ],
                [
                    7575,
                    9125
                ],
                [
                    7425,
                    9125
                ],
                [
                    7425,
                    8975
                ]
            ],
            "speed": 161,
            "currentPoint": 3,
            "radius": 1,
            "x": 7449.475000000462,
            "y": 8975,
            "renderX": 7449.475000000462,
            "renderY": 8975,
            "xv": 161,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7575,
                "y": 8975
            },
            "pointOn": {
                "x": 7425,
                "y": 8975
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 33,
            "angle": 1.5707963267948966,
            "points": [
                [
                    7975,
                    8975
                ],
                [
                    7975,
                    9125
                ]
            ],
            "speed": 37.5,
            "currentPoint": 0,
            "radius": 1,
            "x": 7975,
            "y": 9067.8125,
            "renderX": 7975,
            "renderY": 9067.8125,
            "xv": 2.296212748401287e-15,
            "yv": 37.5,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7975,
                "y": 9125
            },
            "pointOn": {
                "x": 7975,
                "y": 8975
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 34,
            "angle": -1.5707963267948966,
            "points": [
                [
                    8825,
                    8975
                ],
                [
                    8825,
                    9125
                ]
            ],
            "speed": 37.5,
            "currentPoint": 1,
            "radius": 1,
            "x": 8825,
            "y": 9032.1875,
            "renderX": 8825,
            "renderY": 9032.1875,
            "xv": 2.296212748401287e-15,
            "yv": -37.5,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8825,
                "y": 8975
            },
            "pointOn": {
                "x": 8825,
                "y": 9125
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 12,
            "angle": 3.141592653589793,
            "points": [
                [
                    5375,
                    2475
                ],
                [
                    7025,
                    2475
                ]
            ],
            "speed": 192,
            "currentPoint": 1,
            "radius": 5,
            "x": 5727.799999994828,
            "y": 2475,
            "renderX": 5727.799999994828,
            "renderY": 2475,
            "xv": -192,
            "yv": 2.351321854362918e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 5375,
                "y": 2475
            },
            "pointOn": {
                "x": 7025,
                "y": 2475
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 13,
            "angle": 0,
            "points": [
                [
                    5375,
                    2475
                ],
                [
                    7025,
                    2475
                ]
            ],
            "speed": 192,
            "currentPoint": 0,
            "radius": 5,
            "x": 6672.200000005172,
            "y": 2475,
            "renderX": 6672.200000005172,
            "renderY": 2475,
            "xv": 192,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7025,
                "y": 2475
            },
            "pointOn": {
                "x": 5375,
                "y": 2475
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 17,
            "angle": 3.141592653589793,
            "points": [
                [
                    5375,
                    2475
                ],
                [
                    7025,
                    2475
                ],
                [
                    6200,
                    2475
                ]
            ],
            "speed": 192,
            "currentPoint": 1,
            "radius": 5,
            "x": 6552.799999994828,
            "y": 2475,
            "renderX": 6552.799999994828,
            "renderY": 2475,
            "xv": -192,
            "yv": 2.351321854362918e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 6200,
                "y": 2475
            },
            "pointOn": {
                "x": 7025,
                "y": 2475
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 16,
            "angle": 0,
            "points": [
                [
                    6200,
                    2475
                ],
                [
                    7025,
                    2475
                ],
                [
                    5375,
                    2475
                ]
            ],
            "speed": 192,
            "currentPoint": 2,
            "radius": 5,
            "x": 5847.200000005172,
            "y": 2475,
            "renderX": 5847.200000005172,
            "renderY": 2475,
            "xv": 192,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 6200,
                "y": 2475
            },
            "pointOn": {
                "x": 5375,
                "y": 2475
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 14,
            "angle": 0,
            "points": [
                [
                    6200,
                    2825
                ],
                [
                    7025,
                    2825
                ],
                [
                    5375,
                    2825
                ]
            ],
            "speed": 192,
            "currentPoint": 2,
            "radius": 5,
            "x": 5847.200000005172,
            "y": 2825,
            "renderX": 5847.200000005172,
            "renderY": 2825,
            "xv": 192,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 6200,
                "y": 2825
            },
            "pointOn": {
                "x": 5375,
                "y": 2825
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 11,
            "angle": 3.141592653589793,
            "points": [
                [
                    5375,
                    2825
                ],
                [
                    7025,
                    2825
                ]
            ],
            "speed": 192,
            "currentPoint": 1,
            "radius": 5,
            "x": 5727.799999994828,
            "y": 2825,
            "renderX": 5727.799999994828,
            "renderY": 2825,
            "xv": -192,
            "yv": 2.351321854362918e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 5375,
                "y": 2825
            },
            "pointOn": {
                "x": 7025,
                "y": 2825
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 10,
            "angle": 0,
            "points": [
                [
                    5375,
                    2825
                ],
                [
                    7025,
                    2825
                ]
            ],
            "speed": 192,
            "currentPoint": 0,
            "radius": 5,
            "x": 6672.200000005172,
            "y": 2825,
            "renderX": 6672.200000005172,
            "renderY": 2825,
            "xv": 192,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7025,
                "y": 2825
            },
            "pointOn": {
                "x": 5375,
                "y": 2825
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "parentId": 15,
            "angle": 3.141592653589793,
            "points": [
                [
                    5375,
                    2825
                ],
                [
                    7025,
                    2825
                ],
                [
                    6200,
                    2825
                ]
            ],
            "speed": 192,
            "currentPoint": 1,
            "radius": 5,
            "x": 6552.799999994828,
            "y": 2825,
            "renderX": 6552.799999994828,
            "renderY": 2825,
            "xv": -192,
            "yv": 2.351321854362918e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 6200,
                "y": 2825
            },
            "pointOn": {
                "x": 7025,
                "y": 2825
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.8074594018953554,
            "childId": 10,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 6672.200000005172,
            "y": 2825,
            "renderX": 6672.200000005172,
            "renderY": 2825,
            "xv": -0.23446002715209213,
            "yv": -0.9721257612407153,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 10,
                "angle": 0,
                "points": [
                    [
                        5375,
                        2825
                    ],
                    [
                        7025,
                        2825
                    ]
                ],
                "speed": 192,
                "currentPoint": 0,
                "radius": 5,
                "x": 6672.200000005172,
                "y": 2825,
                "renderX": 6672.200000005172,
                "renderY": 2825,
                "xv": 192,
                "yv": 0,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 7025,
                    "y": 2825
                },
                "pointOn": {
                    "x": 5375,
                    "y": 2825
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 3.026445005711696,
            "childId": 11,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 5727.799999994828,
            "y": 2825,
            "renderX": 5727.799999994828,
            "renderY": 2825,
            "xv": 0.9933778313812659,
            "yv": -0.114893359774415,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 11,
                "angle": 3.141592653589793,
                "points": [
                    [
                        5375,
                        2825
                    ],
                    [
                        7025,
                        2825
                    ]
                ],
                "speed": 192,
                "currentPoint": 1,
                "radius": 5,
                "x": 5727.799999994828,
                "y": 2825,
                "renderX": 5727.799999994828,
                "renderY": 2825,
                "xv": -192,
                "yv": 2.351321854362918e-14,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 5375,
                    "y": 2825
                },
                "pointOn": {
                    "x": 7025,
                    "y": 2825
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.5780251472622098,
            "childId": 12,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 5727.799999994828,
            "y": 2475,
            "renderX": 5727.799999994828,
            "renderY": 2475,
            "xv": 0.8453547133657348,
            "yv": 0.5342053992523255,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 12,
                "angle": 3.141592653589793,
                "points": [
                    [
                        5375,
                        2475
                    ],
                    [
                        7025,
                        2475
                    ]
                ],
                "speed": 192,
                "currentPoint": 1,
                "radius": 5,
                "x": 5727.799999994828,
                "y": 2475,
                "renderX": 5727.799999994828,
                "renderY": 2475,
                "xv": -192,
                "yv": 2.351321854362918e-14,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 5375,
                    "y": 2475
                },
                "pointOn": {
                    "x": 7025,
                    "y": 2475
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.5480290627920197,
            "childId": 13,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 6672.200000005172,
            "y": 2475,
            "renderX": 6672.200000005172,
            "renderY": 2475,
            "xv": -0.022765297158382613,
            "yv": 0.9997408370399253,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 13,
                "angle": 0,
                "points": [
                    [
                        5375,
                        2475
                    ],
                    [
                        7025,
                        2475
                    ]
                ],
                "speed": 192,
                "currentPoint": 0,
                "radius": 5,
                "x": 6672.200000005172,
                "y": 2475,
                "renderX": 6672.200000005172,
                "renderY": 2475,
                "xv": 192,
                "yv": 0,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 7025,
                    "y": 2475
                },
                "pointOn": {
                    "x": 5375,
                    "y": 2475
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.3022187646217995,
            "childId": 14,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 5847.200000005172,
            "y": 2825,
            "renderX": 5847.200000005172,
            "renderY": 2825,
            "xv": -0.6679289242554443,
            "yv": -0.7442250682038096,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 14,
                "angle": 0,
                "points": [
                    [
                        6200,
                        2825
                    ],
                    [
                        7025,
                        2825
                    ],
                    [
                        5375,
                        2825
                    ]
                ],
                "speed": 192,
                "currentPoint": 2,
                "radius": 5,
                "x": 5847.200000005172,
                "y": 2825,
                "renderX": 5847.200000005172,
                "renderY": 2825,
                "xv": 192,
                "yv": 0,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 6200,
                    "y": 2825
                },
                "pointOn": {
                    "x": 5375,
                    "y": 2825
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.6828258778195577,
            "childId": 15,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 6552.799999994828,
            "y": 2825,
            "renderX": 6552.799999994828,
            "renderY": 2825,
            "xv": -0.8965993035719693,
            "yv": -0.44284273600710633,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 15,
                "angle": 3.141592653589793,
                "points": [
                    [
                        5375,
                        2825
                    ],
                    [
                        7025,
                        2825
                    ],
                    [
                        6200,
                        2825
                    ]
                ],
                "speed": 192,
                "currentPoint": 1,
                "radius": 5,
                "x": 6552.799999994828,
                "y": 2825,
                "renderX": 6552.799999994828,
                "renderY": 2825,
                "xv": -192,
                "yv": 2.351321854362918e-14,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 6200,
                    "y": 2825
                },
                "pointOn": {
                    "x": 7025,
                    "y": 2825
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 3.0827822898258876,
            "childId": 16,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 5847.200000005172,
            "y": 2475,
            "renderX": 5847.200000005172,
            "renderY": 2475,
            "xv": -0.9982711689295726,
            "yv": 0.05877646879478949,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 16,
                "angle": 0,
                "points": [
                    [
                        6200,
                        2475
                    ],
                    [
                        7025,
                        2475
                    ],
                    [
                        5375,
                        2475
                    ]
                ],
                "speed": 192,
                "currentPoint": 2,
                "radius": 5,
                "x": 5847.200000005172,
                "y": 2475,
                "renderX": 5847.200000005172,
                "renderY": 2475,
                "xv": 192,
                "yv": 0,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 6200,
                    "y": 2475
                },
                "pointOn": {
                    "x": 5375,
                    "y": 2475
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.30583873606459216,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 6060.411515081583,
            "y": 3351.0960804426245,
            "renderX": 6060.411515081583,
            "renderY": 3351.0960804426245,
            "xv": -17.164705506768293,
            "yv": 5.419675715937092,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.053661276085508,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5640.264763753346,
            "y": 3508.5650064256074,
            "renderX": 5640.264763753346,
            "renderY": 3508.5650064256074,
            "xv": -6.024353123003174,
            "yv": 16.96193295144636,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.327258442156592,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4737.681562961916,
            "y": 3518.937066660937,
            "renderX": 4737.681562961916,
            "renderY": 3518.937066660937,
            "xv": 12.354349550225512,
            "yv": 13.09083829213556,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.8272024736450458,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4398.172875499492,
            "y": 3303.831918478994,
            "renderX": 4398.172875499492,
            "renderY": 3303.831918478994,
            "xv": -4.5649050390948736,
            "yv": 17.411537611137227,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.0119901126185806,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4623.665027477783,
            "y": 3642.6108199268347,
            "renderX": 4623.665027477783,
            "renderY": 3642.6108199268347,
            "xv": 17.849040113763277,
            "yv": 2.3263204889415894,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.81940337094691,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 6270.717419644658,
            "y": 3420.03843832275,
            "renderX": 6270.717419644658,
            "renderY": 3420.03843832275,
            "xv": -16.09860797939382,
            "yv": -8.052007273084003,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.363728628736546,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5135.43759906219,
            "y": 3318.2370943685087,
            "renderX": 5135.43759906219,
            "renderY": 3318.2370943685087,
            "xv": -6.149503278598756,
            "yv": 16.91696218079662,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.1006894904490374,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4441.121456019765,
            "y": 3502.90561466611,
            "renderX": 4441.121456019765,
            "renderY": 3502.90561466611,
            "xv": -9.097940864976247,
            "yv": -15.531499348659011,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.0939820739827952,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5926.263841400316,
            "y": 3663.688637838042,
            "renderX": 5926.263841400316,
            "renderY": 3663.688637838042,
            "xv": -8.261119718050972,
            "yv": 15.992307557198536,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.49175297523807987,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5842.856703286696,
            "y": 3598.0698745075233,
            "renderX": 5842.856703286696,
            "renderY": 3598.0698745075233,
            "xv": 15.86711714102139,
            "yv": -8.499093694806827,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.9547282292699344,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5164.539519683874,
            "y": 3450.8184681104567,
            "renderX": 5164.539519683874,
            "renderY": 3450.8184681104567,
            "xv": 12.37003181836583,
            "yv": -13.076020526621123,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 6.280646318391131,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4502.456873693582,
            "y": 3333.5854852759326,
            "renderX": 4502.456873693582,
            "renderY": 3333.5854852759326,
            "xv": -17.999941981854555,
            "yv": -0.04570174908971103,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.557564863772234,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5848.43299647315,
            "y": 3648.3779341409263,
            "renderX": 5848.43299647315,
            "renderY": 3648.3779341409263,
            "xv": -15.273829951674497,
            "yv": 9.524185981349326,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.9829586875231526,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4315.773694262947,
            "y": 3642.122201596089,
            "renderX": 4315.773694262947,
            "renderY": 3642.122201596089,
            "xv": 17.77399193299362,
            "yv": -2.843450503504095,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.075017316713127,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5835.485571859994,
            "y": 3434.8653620696805,
            "renderX": 5835.485571859994,
            "renderY": 3434.8653620696805,
            "xv": 6.385191575094221,
            "yv": 16.829418544600575,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.2489595909162263,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4264.884604437567,
            "y": 3637.32715813195,
            "renderX": 4264.884604437567,
            "renderY": 3637.32715813195,
            "xv": 11.292547832339897,
            "yv": -14.017073997604331,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.6833847768333499,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5942.664453734518,
            "y": 3456.4624487420047,
            "renderX": 5942.664453734518,
            "renderY": 3456.4624487420047,
            "xv": 13.957919001796197,
            "yv": -11.365583889061602,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.3640213384632993,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4789.822452980529,
            "y": 3432.877338971722,
            "renderX": 4789.822452980529,
            "renderY": 3432.877338971722,
            "xv": 3.6954838824859024,
            "yv": -17.61656603524895,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.919358182474502,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4376.406089762963,
            "y": 3419.6128051508595,
            "renderX": 4376.406089762963,
            "renderY": 3419.6128051508595,
            "xv": 12.824697951129998,
            "yv": -12.630404683234898,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.3604550019902206,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5794.263034591179,
            "y": 3531.452030631368,
            "renderX": 5794.263034591179,
            "renderY": 3531.452030631368,
            "xv": 3.75828685033483,
            "yv": -17.60327469394829,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.2145027897562906,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4135.119684551725,
            "y": 3587.2227927909275,
            "renderX": 4135.119684551725,
            "renderY": 3587.2227927909275,
            "xv": -10.80295687228019,
            "yv": -14.3977818713736,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.311349968378936,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4971.824351980865,
            "y": 3619.024773199271,
            "renderX": 4971.824351980865,
            "renderY": 3619.024773199271,
            "xv": 12.144539793039302,
            "yv": 13.285712371389232,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.731889779508835,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 3769.0584975335414,
            "y": 3641.4731642181277,
            "renderX": 3769.0584975335414,
            "renderY": 3641.4731642181277,
            "xv": 16.510305950897717,
            "yv": 7.170062580462696,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.3965715137071616,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5709.955726516356,
            "y": 3481.714955952474,
            "renderX": 5709.955726516356,
            "renderY": 3481.714955952474,
            "xv": -16.603032483490164,
            "yv": 6.952647866257172,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.7101653014478835,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 3925.9633189897195,
            "y": 3423.2284919046897,
            "renderX": 3925.9633189897195,
            "renderY": 3423.2284919046897,
            "xv": -15.168066520404215,
            "yv": 9.691736584977576,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.9824107883892507,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5108.605292053116,
            "y": 3670.9357415401055,
            "renderX": 5108.605292053116,
            "renderY": 3670.9357415401055,
            "xv": 9.990337978952077,
            "yv": 14.97308074733813,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.1410477594840356,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5052.510420751024,
            "y": 3483.361628687033,
            "renderX": 5052.510420751024,
            "renderY": 3483.361628687033,
            "xv": 7.499560419934036,
            "yv": -16.363269646001648,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.9735259160969565,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 3797.502367912709,
            "y": 3454.2742013330235,
            "renderX": 3797.502367912709,
            "renderY": 3454.2742013330235,
            "xv": 17.746379978134566,
            "yv": -3.0109795202997574,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.590817263787067,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 5250.498413478022,
            "y": 3646.6616717586403,
            "renderX": 5250.498413478022,
            "renderY": 3646.6616717586403,
            "xv": -13.855257113534668,
            "yv": -11.490511316640655,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.23226665036228514,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4587.7150475989765,
            "y": 3480.1213298286857,
            "renderX": 4587.7150475989765,
            "renderY": 3480.1213298286857,
            "xv": -17.516648680340616,
            "yv": -4.143310151258447,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.8305291817580782,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4118.313441127103,
            "y": 3524.978666843557,
            "renderX": 4118.313441127103,
            "renderY": 3524.978666843557,
            "xv": -4.622802775838466,
            "yv": -17.39625518597897,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.662429998585782,
            "flSize": 99,
            "flAngle": 0.20943951023931953,
            "flashlightDir": 0,
            "radius": 1,
            "speed": 18,
            "x": 4947.779873972337,
            "y": 3454.1710137182454,
            "renderX": 4947.779873972337,
            "renderY": 3454.1710137182454,
            "xv": 15.613250677110106,
            "yv": 8.956919297041857,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.275511580386772,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5543.637414015557,
            "y": 3453.446436018797,
            "renderX": 5543.637414015557,
            "renderY": 3453.446436018797,
            "xv": -16.014877282041585,
            "yv": 25.36776903161073,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.695284547684131,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4577.209534331724,
            "y": 3649.269905892363,
            "renderX": 4577.209534331724,
            "renderY": 3649.269905892363,
            "xv": -0.5131079608802367,
            "yv": -29.995611682719215,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.6141120658988304,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5543.149152541482,
            "y": 3335.9399268415236,
            "renderX": 5543.149152541482,
            "renderY": 3335.9399268415236,
            "xv": 25.922339333517378,
            "yv": -15.100739169920717,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.568714380945258,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4201.977360498224,
            "y": 3540.8079542618666,
            "renderX": 4201.977360498224,
            "renderY": 3540.8079542618666,
            "xv": -22.663200164651208,
            "yv": 19.656534747939514,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.6821685130262165,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 3906.0267731357685,
            "y": 3674.2297364404103,
            "renderX": 3906.0267731357685,
            "renderY": 3674.2297364404103,
            "xv": 3.3342626979246806,
            "yv": 29.814135779210975,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.535619728612749,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4209.98480568432,
            "y": 3622.136031602195,
            "renderX": 4209.98480568432,
            "renderY": 3622.136031602195,
            "xv": -5.275502800722217,
            "yv": -29.532508701422103,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.2167765870662341,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 6045.155617773919,
            "y": 3495.16053234457,
            "renderX": 6045.155617773919,
            "renderY": 3495.16053234457,
            "xv": 10.400131823396602,
            "yv": -28.1396030188056,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.1693716429864753,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 6261.752697277271,
            "y": 3382.705825452862,
            "renderX": 6261.752697277271,
            "renderY": 3382.705825452862,
            "xv": 11.72190502030996,
            "yv": 27.615157843018608,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.300045016735674,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4395.606131300847,
            "y": 3625.653094444908,
            "renderX": 4395.606131300847,
            "renderY": 3625.653094444908,
            "xv": -12.022737866222098,
            "yv": -27.48551935474586,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.924246796924529,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5280.261528523447,
            "y": 3590.5390374244575,
            "renderX": 5280.261528523447,
            "renderY": 3590.5390374244575,
            "xv": -28.088106954840427,
            "yv": 10.53841770350012,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.2208548037382667,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5846.091076708293,
            "y": 3401.5773913381727,
            "renderX": 5846.091076708293,
            "renderY": 3401.5773913381727,
            "xv": 29.905812000053132,
            "yv": -2.375375468737147,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.3302199865091464,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5639.113843956267,
            "y": 3402.659189498024,
            "renderX": 5639.113843956267,
            "renderY": 3402.659189498024,
            "xv": 20.65510735563771,
            "yv": 21.756988305532566,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.205297944913272,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 3750.9268176429323,
            "y": 3371.9863906460837,
            "renderX": 3750.9268176429323,
            "renderY": 3371.9863906460837,
            "xv": -14.569092064605607,
            "yv": 26.224827099774096,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.118903507478085,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4417.022354935794,
            "y": 3558.4037415444373,
            "renderX": 4417.022354935794,
            "renderY": 3558.4037415444373,
            "xv": 15.632178560350566,
            "yv": -25.605370402658032,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.9428201791085853,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4271.9755011946745,
            "y": 3390.116483423507,
            "renderX": 4271.9755011946745,
            "renderY": 3390.116483423507,
            "xv": 10.905047488444866,
            "yv": 27.947807414442412,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.3030496587330886,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 6172.309058983946,
            "y": 3361.3897630974584,
            "renderX": 6172.309058983946,
            "renderY": 3361.3897630974584,
            "xv": 7.936771968598711,
            "yv": -28.931084506434697,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.270804845005531,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4729.0124322929405,
            "y": 3548.311349939518,
            "renderX": 4729.0124322929405,
            "renderY": 3548.311349939518,
            "xv": -12.8211653742417,
            "yv": 27.12227347488307,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.8117727500792924,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5995.321632529952,
            "y": 3572.875654224332,
            "renderX": 5995.321632529952,
            "renderY": 3572.875654224332,
            "xv": -28.383020615928324,
            "yv": -9.716179327070273,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.6860706962643732,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5518.828548638375,
            "y": 3480.625140058237,
            "renderX": 5518.828548638375,
            "renderY": 3480.625140058237,
            "xv": 26.94094575762517,
            "yv": 13.197933235347817,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.1430430139814955,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5360.775713272392,
            "y": 3395.7217674586573,
            "renderX": 5360.775713272392,
            "renderY": 3395.7217674586573,
            "xv": 12.52395622095443,
            "yv": 27.260787233233323,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.4602458888243879,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5453.124036441133,
            "y": 3659.5531563676955,
            "renderX": 5453.124036441133,
            "renderY": 3659.5531563676955,
            "xv": 3.309761860693784,
            "yv": 29.816865637177507,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.9978710916046336,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 3841.9340471879,
            "y": 3488.086730205366,
            "renderX": 3841.9340471879,
            "renderY": 3488.086730205366,
            "xv": 19.657599047837145,
            "yv": -22.662277018747965,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.5002921025329179,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5176.350054665184,
            "y": 3648.9092588531844,
            "renderX": 5176.350054665184,
            "renderY": 3648.9092588531844,
            "xv": -26.323274491164412,
            "yv": 14.390455867095138,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.14062869201453,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4374.748407448835,
            "y": 3445.9456960996836,
            "renderX": 4374.748407448835,
            "renderY": 3445.9456960996836,
            "xv": -16.233396012246544,
            "yv": 25.228492898101898,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.8541247206976104,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4689.600834255316,
            "y": 3342.4568948278525,
            "renderX": 4689.600834255316,
            "renderY": 3342.4568948278525,
            "xv": 8.386586488742042,
            "yv": -28.80390888519906,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.1416702189538614,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5048.160791859762,
            "y": 3435.0149042779044,
            "renderX": 5048.160791859762,
            "renderY": 3435.0149042779044,
            "xv": -12.482289159282155,
            "yv": -27.279891080135698,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.1002555357450183,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5507.2137570467885,
            "y": 3653.1193877927144,
            "renderX": 5507.2137570467885,
            "renderY": 3653.1193877927144,
            "xv": 29.974372289930862,
            "yv": -1.2397603900047696,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.6746250520983911,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5289.339739231966,
            "y": 3540.000716061554,
            "renderX": 5289.339739231966,
            "renderY": 3540.000716061554,
            "xv": -23.42823600559139,
            "yv": 18.73813645126727,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.9345707841357702,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 4872.3828575229345,
            "y": 3384.6617144767915,
            "renderX": 4872.3828575229345,
            "renderY": 3384.6617144767915,
            "xv": -10.67412654553363,
            "yv": 28.03681548410829,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.427726815458067,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 3724.151500233927,
            "y": 3558.2148341998027,
            "renderX": 3724.151500233927,
            "renderY": 3558.2148341998027,
            "xv": 8.424996836760354,
            "yv": 28.792697482184227,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.788960211914397,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 5028.545626052311,
            "y": 3419.4705954461065,
            "renderX": 5028.545626052311,
            "renderY": 3419.4705954461065,
            "xv": 28.154004018132078,
            "yv": -10.361083811407125,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.1910297547402786,
            "flSize": 40,
            "flAngle": 2.792526803190927,
            "flashlightDir": 0,
            "radius": 24,
            "speed": 30,
            "x": 6170.5735654130185,
            "y": 3431.9860705804904,
            "renderX": 6170.5735654130185,
            "renderY": 3431.9860705804904,
            "xv": 11.121110490949507,
            "yv": -27.862535804339362,
            "bound": {
                "x": 3700,
                "y": 3300,
                "w": 2600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 3.2684928570298974,
            "shootSpeed": 3,
            "timer": 0.025000000000314576,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 4927.933333333391,
                    "y": 8975,
                    "angle": 0
                },
                {
                    "x": 3575.700000000081,
                    "y": 8975,
                    "angle": 0
                },
                {
                    "x": 2219.700000000005,
                    "y": 8975,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 875,
            "y": 8975,
            "renderX": 875,
            "renderY": 8975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 800,
                "y": 8900,
                "w": 4600,
                "h": 150
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 4.651408024909597,
            "shootSpeed": 3,
            "timer": 1.525000000000317,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 4249.933333333434,
                    "y": 9125,
                    "angle": 0
                },
                {
                    "x": 2897.700000000043,
                    "y": 9125,
                    "angle": 0
                },
                {
                    "x": 1541.6999999999973,
                    "y": 9125,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 875,
            "y": 9125,
            "renderX": 875,
            "renderY": 9125,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 800,
                "y": 9050,
                "w": 4600,
                "h": 150
            },
            "inView": true
        },
        {
            "type": "square",
            "angle": 3.5831259802935054,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 99.09049644391408,
            "y": 5095.173072702984,
            "renderX": 99.09049644391408,
            "renderY": 5095.173072702984,
            "xv": -119.34086941174097,
            "yv": -56.407064167972685,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.19333190829212116,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 83.3435883181923,
            "y": 4223.339874111266,
            "renderX": 83.3435883181923,
            "renderY": 4223.339874111266,
            "xv": 129.54077728059264,
            "yv": -25.361132102883246,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.950961557635106,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 67.40262689043927,
            "y": 5093.1989228037255,
            "renderX": 67.40262689043927,
            "renderY": 5093.1989228037255,
            "xv": 129.60880039578316,
            "yv": 25.011174701841572,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 5.205486345659229,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 53.68081958500304,
            "y": 5236.323814296363,
            "renderX": 53.68081958500304,
            "renderY": 5236.323814296363,
            "xv": 62.48306241472952,
            "yv": -116.27496252967367,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 6.2475312062798,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 315.2390213610806,
            "y": 4210.534339550665,
            "renderX": 315.2390213610806,
            "renderY": 4210.534339550665,
            "xv": -131.91610870342964,
            "yv": -4.705344253604725,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.151980710505327,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 73.52953601037507,
            "y": 5475.57587738809,
            "renderX": 73.52953601037507,
            "renderY": 5475.57587738809,
            "xv": -70.16223223456122,
            "yv": 111.80903884688169,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.1015886200219602,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 158.50360945822396,
            "y": 4274.57607038711,
            "renderX": 158.50360945822396,
            "renderY": 4274.57607038711,
            "xv": 59.687728292537315,
            "yv": 117.734341172303,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 5.635794867276407,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 264.3710166717017,
            "y": 5444.808173855956,
            "renderX": 264.3710166717017,
            "renderY": 5444.808173855956,
            "xv": 105.29116705357059,
            "yv": 79.61011330539037,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.2592324161057598,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 29.0063810460283,
            "y": 5583.220191450828,
            "renderX": 29.0063810460283,
            "renderY": 5583.220191450828,
            "xv": 40.46428682039354,
            "yv": -125.64490237218908,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.449004989747113,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 318.52504087853583,
            "y": 4480.39142918255,
            "renderX": 318.52504087853583,
            "renderY": 4480.39142918255,
            "xv": 34.366111338920355,
            "yv": 127.44791246403736,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.9156486687173921,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 64.71015448985675,
            "y": 4507.168160566215,
            "renderX": 64.71015448985675,
            "renderY": 4507.168160566215,
            "xv": -80.42447643393243,
            "yv": -104.67045232694778,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.67725847476151,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 348.2824389770375,
            "y": 4787.050722678415,
            "renderX": 348.2824389770375,
            "renderY": 4787.050722678415,
            "xv": 4.636272960345423,
            "yv": 131.91855431681006,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.19685925835214926,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 362.35035502739026,
            "y": 4422.776774688166,
            "renderX": 362.35035502739026,
            "renderY": 4422.776774688166,
            "xv": -129.45051399006192,
            "yv": 25.817909049897608,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.958778416340068,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 202.65798497823164,
            "y": 5117.401441427519,
            "renderX": 202.65798497823164,
            "renderY": 5117.401441427519,
            "xv": -32.19533247538954,
            "yv": 128.0135171253377,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.954856890672989,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 364.8769350120288,
            "y": 4161.792848273489,
            "renderX": 364.8769350120288,
            "renderY": 4161.792848273489,
            "xv": 76.2597757755812,
            "yv": 107.74250135697648,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 1.5973062473664958,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 270.5321369966386,
            "y": 5723.794928821598,
            "renderX": 270.5321369966386,
            "renderY": 5723.794928821598,
            "xv": 3.4988996581274887,
            "yv": -131.95361950769805,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.1657056962369685,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 180.88418758849315,
            "y": 4821.586809803624,
            "renderX": 180.88418758849315,
            "renderY": 4821.586809803624,
            "xv": 68.62109464096692,
            "yv": -112.76145338844947,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 3.7304206916522005,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 156.02003495887016,
            "y": 4167.472291197956,
            "renderX": 156.02003495887016,
            "renderY": 4167.472291197956,
            "xv": 109.77016277660903,
            "yv": -73.31105894745187,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.9380062237529905,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 172.32064506284044,
            "y": 4296.744144565187,
            "renderX": 172.32064506284044,
            "renderY": 4296.744144565187,
            "xv": -78.06439632781,
            "yv": 106.44223797898373,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.49451766340749204,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 243.14828102424917,
            "y": 4814.238913657128,
            "renderX": 243.14828102424917,
            "renderY": 4814.238913657128,
            "xv": 116.18610070499392,
            "yv": 62.648144449528694,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 2.8297264748640654,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 233.33005364404033,
            "y": 5817.49434258876,
            "renderX": 233.33005364404033,
            "renderY": 5817.49434258876,
            "xv": 125.63266557201217,
            "yv": -40.50226340923362,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.907617062348886,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 124.24406428911061,
            "y": 4386.381356178952,
            "renderX": 124.24406428911061,
            "renderY": 4386.381356178952,
            "xv": -25.606718174389634,
            "yv": -129.49245531820526,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.763323976419147,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 340.7872606643871,
            "y": 4462.418068537969,
            "renderX": 340.7872606643871,
            "renderY": 4462.418068537969,
            "xv": -6.720512676393991,
            "yv": 131.82880834387615,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.599271279175286,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 181.24360376607314,
            "y": 4259.246745338009,
            "renderX": 181.24360376607314,
            "renderY": 4259.246745338009,
            "xv": 14.89971389547173,
            "yv": -131.15638957303258,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.857428458841192,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 273.28467152377476,
            "y": 4831.496789670189,
            "renderX": 273.28467152377476,
            "renderY": 4831.496789670189,
            "xv": 19.078157176819072,
            "yv": 130.6140265007422,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.762173226666684,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 287.760674606215,
            "y": 5001.323968796624,
            "renderX": 287.760674606215,
            "renderY": 5001.323968796624,
            "xv": -6.568806291571135,
            "yv": 131.8364546849763,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 0.32797681015432606,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 358.90514860168076,
            "y": 5296.331478643189,
            "renderX": 358.90514860168076,
            "renderY": 5296.331478643189,
            "xv": -124.9638729807839,
            "yv": -42.520941307107805,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 6.11486323602551,
            "size": 52,
            "radius": 26,
            "speed": 132,
            "x": 256.68224531068245,
            "y": 5789.925928839656,
            "renderX": 256.68224531068245,
            "renderY": 5789.925928839656,
            "xv": 130.13447769833863,
            "yv": 22.11374491533729,
            "bound": {
                "x": 0,
                "y": 4100,
                "w": 400,
                "h": 1800
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.720139374129988,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 4891.232397386118,
            "y": 130.66800553749948,
            "renderX": 4891.232397386118,
            "renderY": 130.66800553749948,
            "xv": 52.747266489901,
            "yv": -34.44888790430493,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.61380838899289,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5027.092635367696,
            "y": 142.95421201646639,
            "renderX": 5027.092635367696,
            "renderY": 142.95421201646639,
            "xv": 56.105445329096895,
            "yv": -28.6562210422749,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.138045673952052,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 4918.473135738353,
            "y": 85.05904450757487,
            "renderX": 4918.473135738353,
            "renderY": 85.05904450757487,
            "xv": 33.85079667220555,
            "yv": -53.13307411261838,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.5646656777187482,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5229.2816703872195,
            "y": 326.195721627027,
            "renderX": 5229.2816703872195,
            "renderY": 326.195721627027,
            "xv": 53.22035594336746,
            "yv": 33.71340554232503,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.718171888646765,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 4807.749741717847,
            "y": 54.97117104201013,
            "renderX": 4807.749741717847,
            "renderY": 54.97117104201013,
            "xv": -52.81494204075969,
            "yv": -34.3450418143754,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 1.6669153920039816,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5195.678696717168,
            "y": 311.47240361603735,
            "renderX": 5195.678696717168,
            "renderY": 311.47240361603735,
            "xv": -6.046181078549588,
            "yv": 62.70919943967862,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 5.948750916065735,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5037.394545120231,
            "y": 247.07894746062266,
            "renderX": 5037.394545120231,
            "renderY": 247.07894746062266,
            "xv": 59.509555139282355,
            "yv": -20.678801878365995,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.233360742977899,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5225.635931206313,
            "y": 202.31203941492225,
            "renderX": 5225.635931206313,
            "renderY": 202.31203941492225,
            "xv": -38.7538642649453,
            "yv": -49.670292978139315,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 6.01831141762555,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5214.624517033843,
            "y": 52.96269751265138,
            "renderX": 5214.624517033843,
            "renderY": 52.96269751265138,
            "xv": 60.802907930195154,
            "yv": 16.49261614275342,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.3986481029975013,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 4762.653305611543,
            "y": 16.292720246182146,
            "renderX": 4762.653305611543,
            "renderY": 16.292720246182146,
            "xv": 58.059956156268534,
            "yv": 24.4548868558449,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.4416433141041508,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 4891.234949621629,
            "y": 238.27322191639342,
            "renderX": 4891.234949621629,
            "renderY": 238.27322191639342,
            "xv": -56.9551808430591,
            "yv": 26.927817868041846,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.42249211298616773,
            "flSize": 120,
            "flAngle": 6.283185307179586,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 63,
            "x": 5021.378516260662,
            "y": 54.46828765517182,
            "renderX": 5021.378516260662,
            "renderY": 54.46828765517182,
            "xv": -57.460405011524095,
            "yv": 25.832186433045436,
            "bound": {
                "x": 4700,
                "y": 0,
                "w": 600,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.556918706881588,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 373.3390501618894,
            "y": 8009.392956910468,
            "renderX": 373.3390501618894,
            "renderY": 8009.392956910468,
            "xv": 109.7981772539508,
            "yv": 48.41859427647607,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.183535399827556,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 53.496602874347495,
            "y": 8011.12520406986,
            "renderX": 53.496602874347495,
            "renderY": 8011.12520406986,
            "xv": 119.8944638351917,
            "yv": 5.031653969810371,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 2.6457854062062607,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 98.94069326930045,
            "y": 7768.378134824907,
            "renderX": 98.94069326930045,
            "renderY": 7768.378134824907,
            "xv": -105.55019461262522,
            "yv": -57.089021862674635,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.210366729584201,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 23.390944368695546,
            "y": 7716.990439667551,
            "renderX": 23.390944368695546,
            "renderY": 7716.990439667551,
            "xv": 119.71631942915052,
            "yv": 8.246384804118541,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.941762526714524,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 339.4840596227484,
            "y": 8069.6428557895615,
            "renderX": 339.4840596227484,
            "renderY": 8069.6428557895615,
            "xv": 27.284102634502673,
            "yv": 116.85708255570103,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.209288011151939,
            "flSize": 40,
            "flAngle": 1.3962634015954636,
            "flashlightDir": 0,
            "radius": 6,
            "speed": 120,
            "x": 50.56341037359606,
            "y": 7739.689988965765,
            "renderX": 50.56341037359606,
            "renderY": 7739.689988965765,
            "xv": -119.72514530176255,
            "yv": 8.117239830868867,
            "bound": {
                "x": 0,
                "y": 7700,
                "w": 400,
                "h": 400
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 3.141592653589793,
            "points": [
                [
                    9700,
                    2050
                ],
                [
                    9900,
                    2050
                ],
                [
                    9900,
                    2250
                ],
                [
                    9700,
                    2250
                ]
            ],
            "speed": 200,
            "currentPoint": 2,
            "radius": 100,
            "x": 9805.0000000054,
            "y": 2250,
            "renderX": 9805.0000000054,
            "renderY": 2250,
            "xv": -200,
            "yv": 2.4492935982947064e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9700,
                "y": 2250
            },
            "pointOn": {
                "x": 9900,
                "y": 2250
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0,
            "points": [
                [
                    9700,
                    2050
                ],
                [
                    9900,
                    2050
                ],
                [
                    9900,
                    2250
                ],
                [
                    9700,
                    2250
                ]
            ],
            "speed": 200,
            "currentPoint": 0,
            "radius": 100,
            "x": 9794.9999999946,
            "y": 2050,
            "renderX": 9794.9999999946,
            "renderY": 2050,
            "xv": 200,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9900,
                "y": 2050
            },
            "pointOn": {
                "x": 9700,
                "y": 2050
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    9700,
                    2950
                ],
                [
                    9900,
                    2950
                ],
                [
                    9900,
                    3600
                ],
                [
                    9700,
                    3600
                ]
            ],
            "speed": 200,
            "currentPoint": 3,
            "radius": 100,
            "x": 9700,
            "y": 3055.000000003668,
            "renderX": 9700,
            "renderY": 3055.000000003668,
            "xv": 1.2246467991473532e-14,
            "yv": -200,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9700,
                "y": 2950
            },
            "pointOn": {
                "x": 9700,
                "y": 3600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    9700,
                    2950
                ],
                [
                    9900,
                    2950
                ],
                [
                    9900,
                    3600
                ],
                [
                    9700,
                    3600
                ]
            ],
            "speed": 200,
            "currentPoint": 1,
            "radius": 100,
            "x": 9900,
            "y": 3494.999999996332,
            "renderX": 9900,
            "renderY": 3494.999999996332,
            "xv": 1.2246467991473532e-14,
            "yv": 200,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9900,
                "y": 3600
            },
            "pointOn": {
                "x": 9900,
                "y": 2950
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    9700,
                    2950
                ],
                [
                    9900,
                    2950
                ],
                [
                    9900,
                    3600
                ],
                [
                    9700,
                    3600
                ]
            ],
            "speed": 400,
            "currentPoint": 1,
            "radius": 100,
            "x": 9900,
            "y": 3390.000000003658,
            "renderX": 9900,
            "renderY": 3390.000000003658,
            "xv": 2.4492935982947064e-14,
            "yv": 400,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9900,
                "y": 3600
            },
            "pointOn": {
                "x": 9900,
                "y": 2950
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    9700,
                    2950
                ],
                [
                    9900,
                    2950
                ],
                [
                    9900,
                    3600
                ],
                [
                    9700,
                    3600
                ]
            ],
            "speed": 400,
            "currentPoint": 3,
            "radius": 100,
            "x": 9700,
            "y": 3159.999999996342,
            "renderX": 9700,
            "renderY": 3159.999999996342,
            "xv": 2.4492935982947064e-14,
            "yv": -400,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 9700,
                "y": 2950
            },
            "pointOn": {
                "x": 9700,
                "y": 3600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    100,
                    4200
                ],
                [
                    300,
                    4200
                ],
                [
                    300,
                    5800
                ],
                [
                    100,
                    5800
                ]
            ],
            "speed": 240,
            "currentPoint": 3,
            "radius": 100,
            "x": 100,
            "y": 4566,
            "renderX": 100,
            "renderY": 4566,
            "xv": 1.469576158976824e-14,
            "yv": -240,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 100,
                "y": 4200
            },
            "pointOn": {
                "x": 100,
                "y": 5800
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    100,
                    4200
                ],
                [
                    300,
                    4200
                ],
                [
                    300,
                    5800
                ],
                [
                    100,
                    5800
                ]
            ],
            "speed": 240,
            "currentPoint": 1,
            "radius": 100,
            "x": 300,
            "y": 5434,
            "renderX": 300,
            "renderY": 5434,
            "xv": 1.469576158976824e-14,
            "yv": 240,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 300,
                "y": 5800
            },
            "pointOn": {
                "x": 300,
                "y": 4200
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 3.117735380624604,
            "switchTime": 2,
            "switchTimer": 0.4749999999997386,
            "currentSwitch": true,
            "radius": 56,
            "speed": 1,
            "x": 4741.44128542787,
            "y": 9735.826222301592,
            "renderX": 4741.44128542787,
            "renderY": 9735.826222301592,
            "xv": 0.9997154287611548,
            "yv": 0.023855009891012385,
            "bound": {
                "x": 4675,
                "y": 9650,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 3.143795677811743,
            "switchTime": 2,
            "switchTimer": 0.4749999999997386,
            "currentSwitch": true,
            "radius": 56,
            "speed": 1,
            "x": 5261.474712506293,
            "y": 9725.26100307614,
            "renderX": 5261.474712506293,
            "renderY": 9725.26100307614,
            "xv": 0.9999975733431202,
            "yv": 0.0022030224399549173,
            "bound": {
                "x": 5175,
                "y": 9650,
                "w": 150,
                "h": 150
            },
            "inView": false
        },
        {
            "type": "switch",
            "angle": 1.0646350971995866,
            "switchTime": 2,
            "switchTimer": 0.4749999999997386,
            "currentSwitch": false,
            "radius": 56,
            "speed": 1,
            "x": 5808.439451410107,
            "y": 9789.619665333938,
            "renderX": 5808.439451410107,
            "renderY": 9789.619665333938,
            "xv": 0.48482339240027866,
            "yv": 0.874612072968059,
            "bound": {
                "x": 5750,
                "y": 9725,
                "w": 125,
                "h": 125
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 1.625078171100368,
            "childId": 34,
            "shootSpeed": 2,
            "timer": 1.5250000000002768,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 8610.300000000014,
                    "y": 9049.6875,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 8825,
            "y": 9032.1875,
            "renderX": 8825,
            "renderY": 9032.1875,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 7900,
                "y": 8900,
                "w": 1000,
                "h": 300
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 34,
                "angle": -1.5707963267948966,
                "points": [
                    [
                        8825,
                        8975
                    ],
                    [
                        8825,
                        9125
                    ]
                ],
                "speed": 37.5,
                "currentPoint": 1,
                "radius": 1,
                "x": 8825,
                "y": 9032.1875,
                "renderX": 8825,
                "renderY": 9032.1875,
                "xv": 2.296212748401287e-15,
                "yv": -37.5,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 8825,
                    "y": 8975
                },
                "pointOn": {
                    "x": 8825,
                    "y": 9125
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 5.204601275311672,
            "childId": 31,
            "shootSpeed": 1.5,
            "timer": 0.02500000000022798,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 6823.724999999607,
                    "y": 9125,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 7449.475000000462,
            "y": 8975,
            "renderX": 7449.475000000462,
            "renderY": 8975,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 6650,
                "y": 8900,
                "w": 1000,
                "h": 300
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 31,
                "angle": 0,
                "points": [
                    [
                        7575,
                        8975
                    ],
                    [
                        7575,
                        9125
                    ],
                    [
                        7425,
                        9125
                    ],
                    [
                        7425,
                        8975
                    ]
                ],
                "speed": 161,
                "currentPoint": 3,
                "radius": 1,
                "x": 7449.475000000462,
                "y": 8975,
                "renderX": 7449.475000000462,
                "renderY": 8975,
                "xv": 161,
                "yv": 0,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 7575,
                    "y": 8975
                },
                "pointOn": {
                    "x": 7425,
                    "y": 8975
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "turret",
            "angle": 1.556253965295807,
            "childId": 32,
            "shootSpeed": 2,
            "timer": 1.5250000000002768,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 6110.300000000014,
                    "y": 8981.975000005152,
                    "angle": 3.141592653589793
                }
            ],
            "shootDirections": [
                3.141592653589793
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 6325,
            "y": 9036.575000005172,
            "renderX": 6325,
            "renderY": 9036.575000005172,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 5400,
                "y": 8900,
                "w": 1000,
                "h": 300
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 32,
                "angle": 1.5707963267948966,
                "points": [
                    [
                        6325,
                        8975
                    ],
                    [
                        6325,
                        9125
                    ]
                ],
                "speed": 117,
                "currentPoint": 0,
                "radius": 1,
                "x": 6325,
                "y": 9036.575000005172,
                "renderX": 6325,
                "renderY": 9036.575000005172,
                "xv": 7.164183775012016e-15,
                "yv": 117,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 6325,
                    "y": 9125
                },
                "pointOn": {
                    "x": 6325,
                    "y": 8975
                },
                "inView": false
            },
            "inView": true
        },
        {
            "type": "turret",
            "angle": 2.813185643962782,
            "childId": 33,
            "shootSpeed": 2,
            "timer": 1.5250000000002768,
            "pRadius": 62,
            "pSpeed": 452,
            "projectiles": [
                {
                    "x": 8189.699999999986,
                    "y": 9050.3125,
                    "angle": 0
                }
            ],
            "shootDirections": [
                0
            ],
            "csd": 0,
            "deadProjectiles": [],
            "radius": 62,
            "speed": 0,
            "x": 7975,
            "y": 9067.8125,
            "renderX": 7975,
            "renderY": 9067.8125,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 7900,
                "y": 8900,
                "w": 1000,
                "h": 300
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 33,
                "angle": 1.5707963267948966,
                "points": [
                    [
                        7975,
                        8975
                    ],
                    [
                        7975,
                        9125
                    ]
                ],
                "speed": 37.5,
                "currentPoint": 0,
                "radius": 1,
                "x": 7975,
                "y": 9067.8125,
                "renderX": 7975,
                "renderY": 9067.8125,
                "xv": 2.296212748401287e-15,
                "yv": 37.5,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 7975,
                    "y": 9125
                },
                "pointOn": {
                    "x": 7975,
                    "y": 8975
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    7250,
                    1600
                ],
                [
                    7250,
                    1900
                ]
            ],
            "speed": 245,
            "currentPoint": 0,
            "radius": 100,
            "x": 7250,
            "y": 1826.3750000010775,
            "renderX": 7250,
            "renderY": 1826.3750000010775,
            "xv": 1.5001923289555078e-14,
            "yv": 245,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7250,
                "y": 1900
            },
            "pointOn": {
                "x": 7250,
                "y": 1600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    7450,
                    1600
                ],
                [
                    7450,
                    1900
                ]
            ],
            "speed": 245,
            "currentPoint": 1,
            "radius": 100,
            "x": 7450,
            "y": 1673.6249999989225,
            "renderX": 7450,
            "renderY": 1673.6249999989225,
            "xv": 1.5001923289555078e-14,
            "yv": -245,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7450,
                "y": 1600
            },
            "pointOn": {
                "x": 7450,
                "y": 1900
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    7650,
                    1600
                ],
                [
                    7650,
                    1900
                ]
            ],
            "speed": 245,
            "currentPoint": 0,
            "radius": 100,
            "x": 7650,
            "y": 1826.3750000010775,
            "renderX": 7650,
            "renderY": 1826.3750000010775,
            "xv": 1.5001923289555078e-14,
            "yv": 245,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7650,
                "y": 1900
            },
            "pointOn": {
                "x": 7650,
                "y": 1600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    7850,
                    1550
                ],
                [
                    7850,
                    1600
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "radius": 100,
            "x": 7850,
            "y": 1550,
            "renderX": 7850,
            "renderY": 1550,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7850,
                "y": 1600
            },
            "pointOn": {
                "x": 7850,
                "y": 1550
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    7850,
                    1950
                ],
                [
                    7850,
                    2000
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "radius": 100,
            "x": 7850,
            "y": 1950,
            "renderX": 7850,
            "renderY": 1950,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 7850,
                "y": 2000
            },
            "pointOn": {
                "x": 7850,
                "y": 1950
            },
            "inView": false
        },
        {
            "type": "square",
            "angle": 4.43258160930424,
            "childId": 17,
            "size": 150,
            "radius": 75,
            "speed": 1,
            "x": 6552.799999994828,
            "y": 2475,
            "renderX": 6552.799999994828,
            "renderY": 2475,
            "xv": -0.2761705163673366,
            "yv": 0.9611086545700225,
            "bound": {
                "x": 5300,
                "y": 2400,
                "w": 1800,
                "h": 500
            },
            "parentIdEnemy": {
                "type": "enemymove",
                "parentId": 17,
                "angle": 3.141592653589793,
                "points": [
                    [
                        5375,
                        2475
                    ],
                    [
                        7025,
                        2475
                    ],
                    [
                        6200,
                        2475
                    ]
                ],
                "speed": 192,
                "currentPoint": 1,
                "radius": 5,
                "x": 6552.799999994828,
                "y": 2475,
                "renderX": 6552.799999994828,
                "renderY": 2475,
                "xv": -192,
                "yv": 2.351321854362918e-14,
                "bound": {
                    "x": 0,
                    "y": 0,
                    "w": 0.001,
                    "h": 0
                },
                "pointTo": {
                    "x": 6200,
                    "y": 2475
                },
                "pointOn": {
                    "x": 7025,
                    "y": 2475
                },
                "inView": false
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 3.002403022079388,
            "flSize": 140 * (4/5 + 5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 0,
            "x": 8900,
            "y": 2100,
            "renderX": 8903,
            "renderY": 2106,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 8900,
                "y": 2100,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.7020289239240158,
            "flSize": 140 * (4/5 + 5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 0,
            "x": 8900,
            "y": 2100,
            "renderX": 8906,
            "renderY": 2102,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 8900,
                "y": 2100,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.08159755565273513,
            "flSize": 140 * (4/5 + 5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 3.141592653589793,
            "radius": 0.001,
            "speed": 0,
            "x": 9200,
            "y": 2100,
            "renderX": 9209,
            "renderY": 2101,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 9200,
                "y": 2100,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.086849891630726,
            "flSize": 140 * (4/5 + 5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 3.141592653589793,
            "radius": 0.001,
            "speed": 0,
            "x": 9200,
            "y": 2100,
            "renderX": 9203,
            "renderY": 2109,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 9200,
                "y": 2100,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 4.496876563418181,
            "flSize": 140 * (4/5+5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 3.141592653589793,
            "radius": 0.001,
            "speed": 0,
            "x": 9200,
            "y": 2025,
            "renderX": 9200,
            "renderY": 2029,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 9200,
                "y": 2025,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.8747696498922279,
            "flSize": 140 * (4/5+5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 3.141592653589793,
            "radius": 0.001,
            "speed": 0,
            "x": 9200,
            "y": 2175,
            "renderX": 9203,
            "renderY": 2182,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 9200,
                "y": 2175,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 0.7079220268419916,
            "flSize": 140 * (4/5+5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 0,
            "x": 8900,
            "y": 2025,
            "renderX": 8900,
            "renderY": 2031,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 8900,
                "y": 2025,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "flashlight",
            "angle": 6.238346449858291,
            "flSize": 140 * (4/5+5/6)/2,
            "flAngle": 1.5707963267948966,
            "flashlightDir": 0,
            "radius": 0.001,
            "speed": 0,
            "x": 8900,
            "y": 2175,
            "renderX": 8908,
            "renderY": 2175,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 8900,
                "y": 2175,
                "w": 10,
                "h": 10
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0,
            "points": [
                [
                    8100,
                    2600
                ],
                [
                    8400,
                    2600
                ],
                [
                    8400,
                    2900
                ],
                [
                    8100,
                    2900
                ]
            ],
            "speed": 224,
            "currentPoint": 0,
            "radius": 100,
            "x": 8238.400000001724,
            "y": 2600,
            "renderX": 8238.400000001724,
            "renderY": 2600,
            "xv": 224,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8400,
                "y": 2600
            },
            "pointOn": {
                "x": 8100,
                "y": 2600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8100,
                    2600
                ],
                [
                    8400,
                    2600
                ],
                [
                    8400,
                    2900
                ],
                [
                    8100,
                    2900
                ]
            ],
            "speed": 224,
            "currentPoint": 1,
            "radius": 100,
            "x": 8400,
            "y": 2738.400000001724,
            "renderX": 8400,
            "renderY": 2738.400000001724,
            "xv": 1.3716044150450356e-14,
            "yv": 224,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8400,
                "y": 2900
            },
            "pointOn": {
                "x": 8400,
                "y": 2600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 3.141592653589793,
            "points": [
                [
                    8100,
                    2600
                ],
                [
                    8400,
                    2600
                ],
                [
                    8400,
                    2900
                ],
                [
                    8100,
                    2900
                ]
            ],
            "speed": 224,
            "currentPoint": 2,
            "radius": 100,
            "x": 8261.599999998276,
            "y": 2900,
            "renderX": 8261.599999998276,
            "renderY": 2900,
            "xv": -224,
            "yv": 2.743208830090071e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8100,
                "y": 2900
            },
            "pointOn": {
                "x": 8400,
                "y": 2900
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    8100,
                    2600
                ],
                [
                    8400,
                    2600
                ],
                [
                    8400,
                    2900
                ],
                [
                    8100,
                    2900
                ]
            ],
            "speed": 224,
            "currentPoint": 3,
            "radius": 100,
            "x": 8100,
            "y": 2761.599999998276,
            "renderX": 8100,
            "renderY": 2761.599999998276,
            "xv": 1.3716044150450356e-14,
            "yv": -224,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8100,
                "y": 2600
            },
            "pointOn": {
                "x": 8100,
                "y": 2900
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8250,
                    2750
                ],
                [
                    8250,
                    2775
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "radius": 100,
            "x": 8250,
            "y": 2750,
            "renderX": 8250,
            "renderY": 2750,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8250,
                "y": 2775
            },
            "pointOn": {
                "x": 8250,
                "y": 2750
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8500,
                    2500
                ],
                [
                    8500,
                    2525
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "radius": 56,
            "x": 8500,
            "y": 2500,
            "renderX": 8500,
            "renderY": 2500,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8500,
                "y": 2525
            },
            "pointOn": {
                "x": 8500,
                "y": 2500
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8000,
                    2500
                ],
                [
                    8000,
                    2525
                ]
            ],
            "speed": 0,
            "currentPoint": 0,
            "radius": 65,
            "x": 8000,
            "y": 2500,
            "renderX": 8000,
            "renderY": 2500,
            "xv": 0,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8000,
                "y": 2525
            },
            "pointOn": {
                "x": 8000,
                "y": 2500
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    8075,
                    6575
                ],
                [
                    8425,
                    6575
                ],
                [
                    8425,
                    6925
                ],
                [
                    8075,
                    6925
                ]
            ],
            "speed": 282,
            "currentPoint": 3,
            "radius": 25,
            "x": 8075,
            "y": 6765.049999994828,
            "renderX": 8075,
            "renderY": 6765.049999994828,
            "xv": 1.726751986797768e-14,
            "yv": -282,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8075,
                "y": 6575
            },
            "pointOn": {
                "x": 8075,
                "y": 6925
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8075,
                    6575
                ],
                [
                    8425,
                    6575
                ],
                [
                    8425,
                    6925
                ],
                [
                    8075,
                    6925
                ]
            ],
            "speed": 282,
            "currentPoint": 1,
            "radius": 25,
            "x": 8425,
            "y": 6734.950000005172,
            "renderX": 8425,
            "renderY": 6734.950000005172,
            "xv": 1.726751986797768e-14,
            "yv": 282,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8425,
                "y": 6925
            },
            "pointOn": {
                "x": 8425,
                "y": 6575
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 1.5707963267948966,
            "points": [
                [
                    8125,
                    6625
                ],
                [
                    8375,
                    6625
                ],
                [
                    8375,
                    6875
                ],
                [
                    8125,
                    6875
                ]
            ],
            "speed": 282,
            "currentPoint": 1,
            "radius": 25,
            "x": 8375,
            "y": 6784.950000005172,
            "renderX": 8375,
            "renderY": 6784.950000005172,
            "xv": 1.726751986797768e-14,
            "yv": 282,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8375,
                "y": 6875
            },
            "pointOn": {
                "x": 8375,
                "y": 6625
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -1.5707963267948966,
            "points": [
                [
                    8125,
                    6625
                ],
                [
                    8375,
                    6625
                ],
                [
                    8375,
                    6875
                ],
                [
                    8125,
                    6875
                ]
            ],
            "speed": 282,
            "currentPoint": 3,
            "radius": 25,
            "x": 8125,
            "y": 6715.049999994828,
            "renderX": 8125,
            "renderY": 6715.049999994828,
            "xv": 1.726751986797768e-14,
            "yv": -282,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8125,
                "y": 6625
            },
            "pointOn": {
                "x": 8125,
                "y": 6875
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 3.141592653589793,
            "points": [
                [
                    8175,
                    6675
                ],
                [
                    8325,
                    6675
                ],
                [
                    8325,
                    6825
                ],
                [
                    8175,
                    6825
                ]
            ],
            "speed": 282,
            "currentPoint": 2,
            "radius": 25,
            "x": 8215.049999994828,
            "y": 6825,
            "renderX": 8215.049999994828,
            "renderY": 6825,
            "xv": -282,
            "yv": 3.453503973595536e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8175,
                "y": 6825
            },
            "pointOn": {
                "x": 8325,
                "y": 6825
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0,
            "points": [
                [
                    8175,
                    6675
                ],
                [
                    8325,
                    6675
                ],
                [
                    8325,
                    6825
                ],
                [
                    8175,
                    6825
                ]
            ],
            "speed": 282,
            "currentPoint": 0,
            "radius": 25,
            "x": 8284.950000005172,
            "y": 6675,
            "renderX": 8284.950000005172,
            "renderY": 6675,
            "xv": 282,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8325,
                "y": 6675
            },
            "pointOn": {
                "x": 8175,
                "y": 6675
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -2.356194490192345,
            "points": [
                [
                    8100,
                    3750
                ],
                [
                    8250,
                    3900
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "radius": 50,
            "x": 8196.083855825542,
            "y": 3846.083855825542,
            "renderX": 8196.083855825542,
            "renderY": 3846.083855825542,
            "xv": -113.1370849898476,
            "yv": -113.13708498984761,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8100,
                "y": 3750
            },
            "pointOn": {
                "x": 8250,
                "y": 3900
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": -0.7853981633974483,
            "points": [
                [
                    8250,
                    3600
                ],
                [
                    8100,
                    3750
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "radius": 50,
            "x": 8153.916144174458,
            "y": 3696.083855825542,
            "renderX": 8153.916144174458,
            "renderY": 3696.083855825542,
            "xv": 113.13708498984761,
            "yv": -113.1370849898476,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8250,
                "y": 3600
            },
            "pointOn": {
                "x": 8100,
                "y": 3750
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0.7853981633974483,
            "points": [
                [
                    8400,
                    3750
                ],
                [
                    8250,
                    3600
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "radius": 50,
            "x": 8303.916144174458,
            "y": 3653.916144174458,
            "renderX": 8303.916144174458,
            "renderY": 3653.916144174458,
            "xv": 113.13708498984761,
            "yv": 113.1370849898476,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8400,
                "y": 3750
            },
            "pointOn": {
                "x": 8250,
                "y": 3600
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 2.356194490192345,
            "points": [
                [
                    8250,
                    3900
                ],
                [
                    8400,
                    3750
                ]
            ],
            "speed": 160,
            "currentPoint": 1,
            "radius": 50,
            "x": 8346.083855825542,
            "y": 3803.916144174458,
            "renderX": 8346.083855825542,
            "renderY": 3803.916144174458,
            "xv": -113.1370849898476,
            "yv": 113.13708498984761,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8250,
                "y": 3900
            },
            "pointOn": {
                "x": 8400,
                "y": 3750
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 3.141592653589793,
            "points": [
                [
                    8125,
                    6625
                ],
                [
                    8375,
                    6625
                ],
                [
                    8375,
                    6875
                ],
                [
                    8125,
                    6875
                ]
            ],
            "speed": 282,
            "currentPoint": 2,
            "radius": 25,
            "x": 8215.049999994828,
            "y": 6875,
            "renderX": 8215.049999994828,
            "renderY": 6875,
            "xv": -282,
            "yv": 3.453503973595536e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8125,
                "y": 6875
            },
            "pointOn": {
                "x": 8375,
                "y": 6875
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0,
            "points": [
                [
                    8125,
                    6625
                ],
                [
                    8375,
                    6625
                ],
                [
                    8375,
                    6875
                ],
                [
                    8125,
                    6875
                ]
            ],
            "speed": 282,
            "currentPoint": 0,
            "radius": 25,
            "x": 8284.950000005172,
            "y": 6625,
            "renderX": 8284.950000005172,
            "renderY": 6625,
            "xv": 282,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8375,
                "y": 6625
            },
            "pointOn": {
                "x": 8125,
                "y": 6625
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 0,
            "points": [
                [
                    8075,
                    6575
                ],
                [
                    8425,
                    6575
                ],
                [
                    8425,
                    6925
                ],
                [
                    8075,
                    6925
                ]
            ],
            "speed": 282,
            "currentPoint": 0,
            "radius": 25,
            "x": 8234.950000005172,
            "y": 6575,
            "renderX": 8234.950000005172,
            "renderY": 6575,
            "xv": 282,
            "yv": 0,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8425,
                "y": 6575
            },
            "pointOn": {
                "x": 8075,
                "y": 6575
            },
            "inView": false
        },
        {
            "type": "enemymove",
            "angle": 3.141592653589793,
            "points": [
                [
                    8075,
                    6575
                ],
                [
                    8425,
                    6575
                ],
                [
                    8425,
                    6925
                ],
                [
                    8075,
                    6925
                ]
            ],
            "speed": 282,
            "currentPoint": 2,
            "radius": 25,
            "x": 8265.049999994828,
            "y": 6925,
            "renderX": 8265.049999994828,
            "renderY": 6925,
            "xv": -282,
            "yv": 3.453503973595536e-14,
            "bound": {
                "x": 0,
                "y": 0,
                "w": 0.001,
                "h": 0
            },
            "pointTo": {
                "x": 8075,
                "y": 6925
            },
            "pointOn": {
                "x": 8425,
                "y": 6925
            },
            "inView": false
        }
    ]
    const safes = [
        {
            "x": 4700,
            "y": 0,
            "w": 600,
            "h": 400,
            "renderAbove": false
        },
        {
            "x": 6550,
            "y": 100,
            "w": 150,
            "h": 200,
            "renderAbove": false
        },
        {
            "x": 9600,
            "y": 0,
            "w": 400,
            "h": 400,
            "renderAbove": false
        },
        {
            "x": 0,
            "y": 0,
            "w": 400,
            "h": 400,
            "renderAbove": false
        },
        {
            "x": 0,
            "y": 9550,
            "w": 400,
            "h": 50,
            "renderAbove": false
        },
        {
            "x": 9600,
            "y": 1800,
            "w": 200,
            "h": 150,
            "renderAbove": false
        },
        {
            "x": 9900,
            "y": 2750,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 9600,
            "y": 1200,
            "w": 200,
            "h": 150,
            "renderAbove": false
        },
        {
            "x": 0,
            "y": 1300,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 25,
            "y": 2125,
            "w": 250,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 25,
            "y": 1925,
            "w": 50,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 150,
            "y": 2400,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 300,
            "y": 3150,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 0,
            "y": 3150,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 7600,
            "y": 9600,
            "w": 50,
            "h": 100,
            "renderAbove": true
        },
        {
            "x": 7700,
            "y": 9600,
            "w": 50,
            "h": 100,
            "renderAbove": true
        },
        {
            "x": 800,
            "y": 5800,
            "w": 300,
            "h": 300,
            "renderAbove": false
        },
        {
            "x": 800,
            "y": 4700,
            "w": 300,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 800,
            "y": 5400,
            "w": 300,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 800,
            "y": 4200,
            "w": 300,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 800,
            "y": 2000,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 1000,
            "y": 2100,
            "w": 100,
            "h": 50,
            "renderAbove": false
        },
        {
            "x": 1000,
            "y": 1950,
            "w": 100,
            "h": 50,
            "renderAbove": false
        },
        {
            "x": 800,
            "y": 1550,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 1000,
            "y": 1750,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 1000,
            "y": 1550,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 7550,
            "y": 900,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 8200,
            "y": 5500,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 8200,
            "y": 6700,
            "w": 100,
            "h": 100,
            "renderAbove": true
        },
        {
            "x": 8200,
            "y": 7500,
            "w": 100,
            "h": 50,
            "renderAbove": false
        },
        {
            "x": 3800,
            "y": 8050,
            "w": 100,
            "h": 400,
            "renderAbove": true
        },
        {
            "x": 3300,
            "y": 8050,
            "w": 100,
            "h": 400,
            "renderAbove": true
        },
        {
            "x": 2900,
            "y": 8050,
            "w": 100,
            "h": 400,
            "renderAbove": true
        },
        {
            "x": 2500,
            "y": 8050,
            "w": 100,
            "h": 400,
            "renderAbove": true
        },
        {
            "x": 7275,
            "y": 3450,
            "w": 150,
            "h": 25,
            "renderAbove": false
        },
        {
            "x": 8400,
            "y": 7500,
            "w": 100,
            "h": 50,
            "renderAbove": false
        },
        {
            "x": 6050,
            "y": 7100,
            "w": 100,
            "h": 500,
            "renderAbove": false
        },
        {
            "x": 6950,
            "y": 7100,
            "w": 150,
            "h": 500,
            "renderAbove": false
        },
        {
            "x": 2900,
            "y": 7100,
            "w": 1850,
            "h": 500,
            "renderAbove": false
        },
        {
            "x": 8000,
            "y": 2900,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 8200,
            "y": 3500,
            "w": 100,
            "h": 500,
            "renderAbove": false
        },
        {
            "x": 8000,
            "y": 3700,
            "w": 500,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 8000,
            "y": 4500,
            "w": 100,
            "h": 100,
            "renderAbove": false
        },
        {
            "x": 8000,
            "y": 8000,
            "w": 500,
            "h": 500,
            "renderAbove": false
        }
    ]
    const texts =  [
        {
            "x": 5000,
            "y": -50,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Welcome to PoVV!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": -25,
            "w": 25,
            "h": 25,
            "size": 14,
            "text": "Infiltrate the vault as fast as possible.",
            "angle": 0,
            "story": false
        },
        {
            "x": 2350,
            "y": 175,
            "w": 25,
            "h": 25,
            "size": 22,
            "text": "Watch Out!",
            "angle": 0,
            "story": false
        },
        {
            "x": 9650,
            "y": 450,
            "w": 25,
            "h": 25,
            "size": 36,
            "text": "!",
            "angle": 0,
            "story": false
        },
        {
            "x": 200,
            "y": 3200,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "Diagonal FTW!",
            "angle": 0,
            "story": false
        },
        {
            "x": 200,
            "y": 5000,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "The Land of Giants...",
            "angle": 90,
            "story": true
        },
        {
            "x": 9800,
            "y": 2900,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "There's A Right Timing",
            "angle": 0,
            "story": false
        },
        {
            "x": 9800,
            "y": 2950,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "And A Wrong Timing...",
            "angle": 0,
            "story": false
        },
        {
            "x": 50,
            "y": 450,
            "w": 25,
            "h": 25,
            "size": 48,
            "text": "!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 5000,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "Secrets!",
            "angle": 0,
            "story": false
        },
        {
            "x": 4825,
            "y": 4825,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "1",
            "angle": 0,
            "story": false
        },
        {
            "x": 5175,
            "y": 4825,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "2",
            "angle": 0,
            "story": false
        },
        {
            "x": 4825,
            "y": 5175,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "3",
            "angle": 0,
            "story": false
        },
        {
            "x": 5175,
            "y": 5175,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "4",
            "angle": 0,
            "story": false
        },
        {
            "x": 2775,
            "y": 9850,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Shoot a basket!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 8925,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "To Defy or Accept...",
            "angle": 0,
            "story": false
        },
        {
            "x": 950,
            "y": 8475,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "Wrap Around!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8950,
            "y": 6975,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "Run!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8950,
            "y": 6925,
            "w": 25,
            "h": 25,
            "size": 48,
            "text": "->",
            "angle": -90,
            "story": false
        },
        {
            "x": 1950,
            "y": 4850,
            "w": 25,
            "h": 25,
            "size": 38,
            "text": "!",
            "angle": 0,
            "story": false
        },
        {
            "x": 1550,
            "y": 4850,
            "w": 25,
            "h": 25,
            "size": 38,
            "text": "!",
            "angle": 0,
            "story": false
        },
        {
            "x": 950,
            "y": 1225,
            "w": 25,
            "h": 25,
            "size": 22,
            "text": "Collect Both and Come back!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5850,
            "y": 950,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Watch Out!",
            "angle": 0,
            "story": false
        },
        {
            "x": 4700,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 180,
            "text": "->",
            "angle": 180,
            "story": false
        },
        {
            "x": 5300,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 180,
            "text": "->",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 1850,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "Your path is predetermined.",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 1900,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "Do not try and fight it.",
            "angle": 0,
            "story": false
        },
        {
            "x": 7500,
            "y": 1750,
            "w": 25,
            "h": 25,
            "size": 38,
            "text": "Don't Choke this...",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 8350,
            "w": 25,
            "h": 25,
            "size": 34,
            "text": "You're late!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 8150,
            "w": 25,
            "h": 25,
            "size": 34,
            "text": "Hurry up!",
            "angle": 0,
            "story": false
        },
        {
            "x": 7375,
            "y": 8375,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "Hill Climb",
            "angle": 0,
            "story": false
        },
        {
            "x": 7375,
            "y": 8425,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "Racing!",
            "angle": 0,
            "story": false
        },
        {
            "x": 7450,
            "y": 4125,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "!",
            "angle": 0,
            "story": false
        },
        {
            "x": 5000,
            "y": 3100,
            "w": 25,
            "h": 25,
            "size": 48,
            "text": "Almost there!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8250,
            "y": 1625,
            "w": 25,
            "h": 25,
            "size": 36,
            "text": "Welcome to the Boxes!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8250,
            "y": 1725,
            "w": 25,
            "h": 25,
            "size": 28,
            "text": "Survive each one in order",
            "angle": 0,
            "story": false
        },
        {
            "x": 8250,
            "y": 1775,
            "w": 25,
            "h": 25,
            "size": 28,
            "text": "To proceed to the next!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8250,
            "y": 1875,
            "w": 25,
            "h": 25,
            "size": 36,
            "text": "Good Luck!",
            "angle": 0,
            "story": false
        },
        {
            "x": 2750,
            "y": 2375,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Good Luck on the hardest section of the map lol",
            "angle": 0,
            "story": false
        },
        {
            "x": 7350,
            "y": 3275,
            "w": 25,
            "h": 25,
            "size": 30,
            "text": "Survive!",
            "angle": 0,
            "story": false
        },
        {
            "x": 6800,
            "y": 2375,
            "w": 25,
            "h": 25,
            "size": 32,
            "text": "And Finally... Here we go into the vault!",
            "angle": 0,
            "story": false
        },
        {
            "x": 8975,
            "y": 4400,
            "w": 25,
            "h": 25,
            "size": 34,
            "text": "->",
            "angle": 0,
            "story": false
        },
        {
            "x": 9125,
            "y": 4400,
            "w": 25,
            "h": 25,
            "size": 34,
            "text": "->",
            "angle": 180,
            "story": false
        },
        {
            "x": 9050,
            "y": 1525,
            "w": 25,
            "h": 25,
            "size": 42,
            "text": "->",
            "angle": 90,
            "story": false
        },
        {
            "x": 9050,
            "y": 2975,
            "w": 25,
            "h": 25,
            "size": 16,
            "text": "You Might Want to use Shift here...",
            "angle": 0,
            "story": false
        },
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
    }});\n` + convertOldExMap(obs, enemies, safes, texts, counter, 'povv');

    shared.C(1,[],[15],{
        x:0,y:19100,w:800,h:100,
        axisSpeedMultX: 1.5,
        axisSpeedMultY: 0
    })

    shared.C(1,[],[18],{
        x: 16400, y: 7400,
        w: 200, h: 200,
        sizeChangePermanent: false,
        sizeMult: 0.75
    })

    // if(shared.isServer !== true){
    //     shared.C(1,[],[5],{
    //         x: 9000, y: 3000, h: 0, w: 2000,
    //         sf:(o)=>{
    //             if(shared.input.up === true){
    //                 o.pos.x = 9000;
    //             } else {
    //                 o.pos.x = -1E9;
    //             }
    //         }
    //     })
    // }
    
    
    eval(str);

    spawnPosition.x=10000;
    spawnPosition.y=400;
    shared.respawnPlayer();
    colors.background="#fac203"; colors.tile="#a67c00";

    mapDimensions.x=20000;
    mapDimensions.y=20000;

    // for platformer

    for(let i = 0; i < shared.obstacles.length; i++){
        if(shared.obstacles[i].boundPlayer === undefined)continue;

        const oldEffect = shared.obstacles[i].effect[0];
        shared.obstacles[i].effect[0] = (p, res, o, id) => {
            oldEffect(p, res, o, id);
            p.touchingNormalIndexes.push(id);
        }
        if(shared.obstacles[i].cr !== undefined) continue;
        shared.obstacles[i].cr = (o) => {
            // base render
            ctx.lineWidth = 4; 
            ctx.beginPath();
            o.renderShape(o);
            o.renderEffect[0](o);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            // spooky
            if(shared.colors.vignette.outer.size < 0.4){
                let middleX = o.topLeft.x + o.dimensions.x/2;
                let middleY = o.topLeft.y + o.dimensions.y/2;

                ctx.globalAlpha = 1 - shared.colors.vignette.outer.size / 0.4;
                const grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.sqrt(o.dimensions.x**2+o.dimensions.y**2));
                grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
                grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
                ctx.fillStyle = grd;

                ctx.beginPath();
                o.renderShape(o);

                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = 1;

                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x, o.pos.y);
                    o.renderShape(o);
                })
            }
        }
    }

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=q9LqCb8WnSw'
    });

    shared.C(1,[],[3],{x:16900,y:19200,w:2000,h:0,cr:()=>{},ef:(p)=>{
        p.axisSpeedMultY = 0;
        p.touchingNormalIndexes.length = 0;
    }})

    if(shared.isServer !== true){
        const ids = [1809, 1793, 1806, 1791];
        for(let i = 0; i < ids.length; i++){
            const id = ids[i];
            obstacles[id].pivotX = obstacles[id].pos.x = -1E9;
            obstacles[id].pos.y = obstacles[id].pivotY = 0;
        }
        // 1809 1793 1806 1791
        // shared.obstacles[1924].pivotX = shared.obstacles[1940].pivotX = shared.obstacles[1922].pivotX = shared.obstacles[1937].pivotX = -1E9;
        // shared.obstacles[1924].pivotY = shared.obstacles[1940].pivotY = shared.obstacles[1922].pivotY = shared.obstacles[1937].pivotY = 0;
        // shared.obstacles[1924].pos.x = shared.obstacles[1940].pos.x = shared.obstacles[1922].pos.x = shared.obstacles[1937].pos.x = -1E9;
        // shared.obstacles[1924].pos.y = shared.obstacles[1940].pos.y = shared.obstacles[1922].pos.y = shared.obstacles[1937].pos.y = 0;

        // invincibility powerup
        // safe rendering on the player
        {
            const maxInv = 30;// half a second
            let inv = maxInv;
            shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
                if(p.pos.x > 800 || p.pos.y < 7400 || p.pos.y > 11850){
                    inv = maxInv;
                    o.pos.x = -1E9;
                    return;
                }

                if(p.pos.y < 8200){
                    inv = maxInv;
                }

                if(inv <= 0){
                    o.pos.x = -1E9;
                    return;
                }

                if(p.dead === true){
                    inv--;
                }

                o.sat.r = p.sat.r + inv; 
                o.pos.x = p.pos.x;
                o.pos.y = p.pos.y;
            }})
        } 

        {
            let scale = 1; let colliding = false; let lastColliding = false;
            // custom obs that slowly zooms out, resets on death
            shared.C(1,[],[3],{x:6600,y:6600,w:6900,h:6800,cr:()=>{},ef:(p)=>{
                if(p.pos.x > 8850 && p.pos.x < 11150 && p.pos.y < 11200 && p.pos.y > 8750) return; /*inside middle secrets*/
                const t = (p.pos.y - 6600) / 6600;
                scale = (1-t) * 1 + (t) * 0.15;
                shared.changeCameraScale(scale);
                colliding = true;
            },sf:()=>{
                if(lastColliding === true && colliding === false){
                    scale = 1;
                    shared.changeCameraScale(scale);
                }
                lastColliding = colliding;
                colliding = false;
            }})
        }
    }
}

// {
//     "x": 5000,
//     "y": 5600,
//     "w": 25,
//     "h": 25,
//     "size": 62,
//     "text": "Total Coins Collected: {shared.totalCoins} ",
//     "angle": 0,
//     "story": false
// }