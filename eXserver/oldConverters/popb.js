import shared from '../../shared/shared.js';
import '/maps/_converter.js';
{
    let counter = 4000;

    const obs = [
        {
            "x": 200,
            "y": 3050,
            "w": 200,
            "h": 200,
            "spawn": {
                "x": 300,
                "y": 3150
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 425,
            "y": 4425,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 4,
            "active": true,
            "inView": false
        },
        {
            "x": 425,
            "y": 4425,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "x": 425,
            "y": 4425,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    4025
                ],
                [
                    125,
                    4025
                ],
                [
                    0,
                    4175
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 0,
                "right": 125,
                "top": 4025,
                "bottom": 4175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 275,
            "y": 4025,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "x": 275,
            "y": 4325,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 2500,
            "y": 3850,
            "w": 150,
            "h": 150,
            "type": "speed",
            "speedInc": 0.5,
            "inView": false
        },
        {
            "x": 2700,
            "y": 3450,
            "w": 350,
            "h": 150,
            "type": "speed",
            "speedInc": 0.5,
            "inView": false
        },
        {
            "x": 400,
            "y": 3050,
            "w": 200,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 500,
            "y": 2975,
            "w": 100,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 100,
            "y": 2875,
            "r": 79,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 79,
            "inView": false
        },
        {
            "x": 425,
            "y": 2825,
            "r": 79,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 79,
            "inView": false
        },
        {
            "x": 2300,
            "y": 3450,
            "w": 200,
            "h": 150,
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
            "x": 1.5308084989341915e-15,
            "y": 2475,
            "w": 600,
            "h": 100,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 650,
            "y": 2000,
            "w": 550,
            "h": 850,
            "type": "vinette",
            "ir": 0.2,
            "or": 0.4,
            "o": 1,
            "vc": {
                "r": 0,
                "g": 0,
                "b": 0
            },
            "inView": false
        },
        {
            "x": 650,
            "y": 2000,
            "w": 550,
            "h": 850,
            "type": "size",
            "size": 15,
            "inView": false
        },
        {
            "x": 425,
            "y": 2175,
            "w": 350,
            "h": 50,
            "type": "rotate-lava",
            "angle": -1.5,
            "rotateSpeed": -90,
            "pivotX": 425,
            "pivotY": 2175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 176.7766952966369,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 650,
            "y": 2450,
            "w": 100,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1100,
            "y": 2375,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 650,
            "y": 2175,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 2000,
            "w": 75,
            "h": 75,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1125,
            "y": 2100,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 1000,
            "y": 2700,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 1200,
            "y": 3275,
            "w": 150,
            "h": 125,
            "type": "speed",
            "speedInc": 2,
            "inView": false
        },
        {
            "x": 1675,
            "y": 3300,
            "w": 425,
            "h": 700,
            "type": "timetrap",
            "time": 0,
            "maxTime": 6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    3075
                ],
                [
                    3650,
                    3412.5
                ],
                [
                    3550,
                    3412.5
                ],
                [
                    3462.5,
                    3150
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3462.5,
                "right": 3650,
                "top": 3075,
                "bottom": 3412.5
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3600,
            "y": 1900,
            "r": 175,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 175,
            "inView": false
        },
        {
            "x": 4450,
            "y": 750,
            "w": 400,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1,
            "rotateSpeed": 60,
            "pivotX": 4450,
            "pivotY": 750,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 201.55644370746373,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 6500,
            "y": -100,
            "w": 650,
            "h": 1650,
            "type": "size",
            "size": 18.5,
            "inView": false
        },
        {
            "x": 4150,
            "y": 2350,
            "w": 100,
            "h": 250,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4250,
            "y": 2300,
            "r": 125,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 125,
            "inView": false
        },
        {
            "x": 4137.5,
            "y": 2300,
            "w": 375,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1.5,
            "rotateSpeed": 90,
            "pivotX": 4137.5,
            "pivotY": 2300,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 189.15932438026945,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3825,
            "y": 2300,
            "r": 125,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 125,
            "inView": false
        },
        {
            "x": 3900,
            "y": 2800,
            "w": 200,
            "h": 162.5,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 7275,
            "y": 3350,
            "w": 100,
            "h": 275,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 7275,
            "y": 3458.75,
            "w": 100,
            "h": 25,
            "type": "lavamove",
            "points": [
                [
                    7275,
                    3300
                ],
                [
                    7275,
                    3600
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 7275,
                "y": 3600
            },
            "pointTo": {
                "x": 7275,
                "y": 3300
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "points": [
                [
                    7325,
                    3275
                ],
                [
                    7275,
                    3350
                ],
                [
                    7250,
                    3300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7250,
                "right": 7325,
                "top": 3275,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    3875
                ],
                [
                    9350,
                    3925
                ],
                [
                    9300,
                    3925
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9300,
                "right": 9400,
                "top": 3875,
                "bottom": 3925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9550,
                    3875
                ],
                [
                    9575,
                    3900
                ],
                [
                    9550,
                    3900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9550,
                "right": 9575,
                "top": 3875,
                "bottom": 3900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9700,
                    3700
                ],
                [
                    9675,
                    3750
                ],
                [
                    9650,
                    3750
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9650,
                "right": 9700,
                "top": 3700,
                "bottom": 3750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9850,
                    3725
                ],
                [
                    9900,
                    3725
                ],
                [
                    9825,
                    3775
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9825,
                "right": 9900,
                "top": 3725,
                "bottom": 3775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9325,
                    2975
                ],
                [
                    9300,
                    3025
                ],
                [
                    9250,
                    3000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9250,
                "right": 9325,
                "top": 2975,
                "bottom": 3025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8700,
                    1150
                ],
                [
                    8775,
                    1175
                ],
                [
                    8825,
                    1275
                ],
                [
                    8725,
                    1225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8700,
                "right": 8825,
                "top": 1150,
                "bottom": 1275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4650,
                    1225
                ],
                [
                    4550,
                    1350
                ],
                [
                    4525,
                    1275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4525,
                "right": 4650,
                "top": 1225,
                "bottom": 1350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6225,
            "y": 1975,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 8,
            "inView": false
        },
        {
            "x": 8125,
            "y": 2825,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 7,
            "inView": false
        },
        {
            "x": 4275,
            "y": 2975,
            "w": 50,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4275,
            "y": 2750,
            "w": 50,
            "h": 162.5,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5925,
            "y": 3000,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6000,
            "y": 2875,
            "w": 25,
            "h": 125,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6275,
            "y": 3800,
            "w": 425,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 6250,
            "y": 3100,
            "w": 550,
            "h": 450,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 6407.2916666653955,
            "y": 3800,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    6275,
                    3800
                ],
                [
                    6650,
                    3800
                ]
            ],
            "speed": 125,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 6650,
                "y": 3800
            },
            "pointTo": {
                "x": 6275,
                "y": 3800
            },
            "xv": -125,
            "yv": 1.5308084989341916e-14,
            "inView": false
        },
        {
            "x": 4275,
            "y": 725,
            "w": 175,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    7225,
                    3700
                ],
                [
                    7275,
                    3800
                ],
                [
                    7175,
                    3725
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7175,
                "right": 7275,
                "top": 3700,
                "bottom": 3800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7175,
            "y": 3600,
            "w": 225,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7150,
            "y": 3087.5,
            "w": 125,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    7375,
                    2925
                ],
                [
                    7475,
                    2925
                ],
                [
                    7475,
                    3125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7375,
                "right": 7475,
                "top": 2925,
                "bottom": 3125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7275,
            "y": 3100,
            "w": 250,
            "h": 25,
            "type": "rotate-lava",
            "angle": 0.75,
            "rotateSpeed": 45,
            "pivotX": 7275,
            "pivotY": 3100,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 125.62344526401112,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 7175,
            "y": 2650,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7275,
            "y": 2825,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 2750,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 7325,
            "y": 2825,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 6275,
            "y": 775,
            "w": 25,
            "h": 75,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": false
        },
        {
            "x": 8000,
            "y": 2000,
            "w": 100,
            "h": 100,
            "type": "bounce",
            "effect": 360,
            "inView": false
        },
        {
            "x": 7500,
            "y": 2450,
            "w": 600,
            "h": 50,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 7758.75,
            "y": 2450,
            "w": 50,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    7500,
                    2450
                ],
                [
                    8050,
                    2450
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8050,
                "y": 2450
            },
            "pointTo": {
                "x": 7500,
                "y": 2450
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 8000,
            "y": 2700,
            "w": 25,
            "h": 275,
            "type": "rotate-lava",
            "angle": -0.75,
            "rotateSpeed": -45,
            "pivotX": 8000,
            "pivotY": 2700,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 138.06701271484076,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 9825,
            "y": 2825,
            "w": 75,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 8150,
            "y": 3600,
            "w": 150,
            "h": 400,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 7375,
            "y": -25,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 4,
            "inView": false
        },
        {
            "x": 7800,
            "y": 600,
            "w": 425,
            "h": 150,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 4700,
            "y": 400,
            "w": 250,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.5,
            "inView": false
        },
        {
            "x": 7550,
            "y": 3775,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7725,
            "y": 3600,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7875,
            "y": 3775,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7725,
            "y": 3925,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7750,
                    3975
                ],
                [
                    7800,
                    4000
                ],
                [
                    7700,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7700,
                "right": 7800,
                "top": 3975,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7700,
                    3600
                ],
                [
                    7800,
                    3600
                ],
                [
                    7750,
                    3625
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7700,
                "right": 7800,
                "top": 3600,
                "bottom": 3625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7950,
                    3750
                ],
                [
                    7950,
                    3850
                ],
                [
                    7925,
                    3800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7925,
                "right": 7950,
                "top": 3750,
                "bottom": 3850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7550,
                    3750
                ],
                [
                    7575,
                    3800
                ],
                [
                    7550,
                    3850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7550,
                "right": 7575,
                "top": 3750,
                "bottom": 3850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8850,
            "y": 2775,
            "w": 350,
            "h": 375,
            "type": "size",
            "size": 2,
            "inView": false
        },
        {
            "x": 9425,
            "y": 1975,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 6,
            "inView": false
        },
        {
            "x": 8575,
            "y": 3625,
            "w": 275,
            "h": 25,
            "type": "rotate-lava",
            "angle": -1.5,
            "rotateSpeed": -90,
            "pivotX": 8575,
            "pivotY": 3625,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 138.06701271484076,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 8150,
            "y": 3941.25,
            "w": 150,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    8150,
                    3600
                ],
                [
                    8150,
                    3950
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 8150,
                "y": 3600
            },
            "pointTo": {
                "x": 8150,
                "y": 3950
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 9450,
            "y": 2000,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 9725,
                "y": 2275
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8850,
            "y": 2825,
            "w": 350,
            "h": 325,
            "type": "speed",
            "speedInc": 0.35,
            "inView": false
        },
        {
            "x": 9050,
            "y": 3325,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9050,
            "y": 3350,
            "w": 300,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1.5,
            "rotateSpeed": 90,
            "pivotX": 9050,
            "pivotY": 3350,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 152.0690632574555,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 8900,
            "y": 3575,
            "w": 150,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9625,
            "y": 3350,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 9450,
            "y": 3500,
            "r": 28,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 28,
            "inView": false
        },
        {
            "x": 9550,
            "y": 3212.5,
            "w": 187.5,
            "h": 25,
            "type": "rotate-lava",
            "angle": -1.0833333333333333,
            "rotateSpeed": -65,
            "pivotX": 9550,
            "pivotY": 3212.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 94.57966219013473,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    9500,
                    3050
                ],
                [
                    9550,
                    3075
                ],
                [
                    9475,
                    3100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9475,
                "right": 9550,
                "top": 3050,
                "bottom": 3100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9650,
            "y": 2925,
            "r": 25,
            "tpx": 9900,
            "tpy": 2970,
            "type": "circle-tp",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 9775,
            "y": 3025,
            "r": 25,
            "tpx": 9900,
            "tpy": 2970,
            "type": "circle-tp",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 9750,
            "y": 2725,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 9600,
            "y": 2600,
            "r": 35,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 35,
            "inView": false
        },
        {
            "x": 8850,
            "y": 2525,
            "r": 62.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 62.5,
            "inView": false
        },
        {
            "x": 9050,
            "y": 2512.5,
            "r": 37.5,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 37.5,
            "inView": false
        },
        {
            "x": 9025,
            "y": 2250,
            "r": 56,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 56,
            "inView": false
        },
        {
            "x": 9225,
            "y": 2450,
            "r": 56,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 56,
            "inView": false
        },
        {
            "x": 8825,
            "y": 825,
            "w": 575,
            "h": 600,
            "type": "zone",
            "value": 5,
            "inView": false
        },
        {
            "x": 9450,
            "y": 525,
            "w": 550,
            "h": 550,
            "type": "size",
            "size": 12.5,
            "inView": false
        },
        {
            "x": 9450,
            "y": 1100,
            "w": 550,
            "h": 400,
            "type": "timetrap",
            "time": 0,
            "maxTime": 3,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 9437.5,
            "y": 1087.5,
            "w": 575,
            "h": 425,
            "type": "speed",
            "speedInc": 1.5,
            "inView": false
        },
        {
            "x": 5075,
            "y": -25,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 3,
            "inView": false
        },
        {
            "x": 3050,
            "y": 675,
            "w": 575,
            "h": 600,
            "type": "zone",
            "value": 2,
            "inView": false
        },
        {
            "x": -25,
            "y": -25,
            "w": 650,
            "h": 650,
            "type": "zone",
            "value": 1,
            "inView": true
        },
        {
            "x": 600,
            "y": 0,
            "w": 50,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 0,
            "y": 600,
            "w": 650,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "x": 600,
            "y": 375,
            "w": 50,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "points": [
                [
                    0,
                    0
                ],
                [
                    100,
                    0
                ],
                [
                    0,
                    50
                ]
            ],
            "type": "poly",
            "most": {
                "left": 0,
                "right": 100,
                "top": 0,
                "bottom": 50
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    550,
                    0
                ],
                [
                    600,
                    0
                ],
                [
                    600,
                    100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 550,
                "right": 600,
                "top": 0,
                "bottom": 100
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    600,
                    550
                ],
                [
                    600,
                    600
                ],
                [
                    500,
                    600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 500,
                "right": 600,
                "top": 550,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    0,
                    500
                ],
                [
                    50,
                    600
                ],
                [
                    0,
                    600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 0,
                "right": 50,
                "top": 500,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    650,
                    350
                ],
                [
                    650,
                    375
                ],
                [
                    600,
                    375
                ]
            ],
            "type": "poly",
            "most": {
                "left": 600,
                "right": 650,
                "top": 350,
                "bottom": 375
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    600,
                    225
                ],
                [
                    650,
                    225
                ],
                [
                    650,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 600,
                "right": 650,
                "top": 225,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "x": 287.5,
            "y": 187.5,
            "w": 25,
            "h": 225,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 250,
            "y": 162.5,
            "w": 100,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 250,
            "y": 412.5,
            "w": 100,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "points": [
                [
                    650,
                    0
                ],
                [
                    1050,
                    0
                ],
                [
                    1050,
                    200
                ],
                [
                    650,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 650,
                "right": 1050,
                "top": 0,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    1050,
                    300
                ],
                [
                    1050,
                    650
                ],
                [
                    650,
                    650
                ],
                [
                    650,
                    350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 650,
                "right": 1050,
                "top": 300,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    800,
                    231.25
                ],
                [
                    750,
                    250
                ],
                [
                    700,
                    243.75
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 700,
                "right": 800,
                "top": 231.25,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    950,
                    300
                ],
                [
                    1050,
                    300
                ],
                [
                    950,
                    312.5
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 950,
                "right": 1050,
                "top": 300,
                "bottom": 312.5
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    1050,
                    0
                ],
                [
                    1450,
                    0
                ],
                [
                    1450,
                    250
                ],
                [
                    1050,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1050,
                "right": 1450,
                "top": 0,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    1250,
                    225
                ],
                [
                    1450,
                    250
                ],
                [
                    1250,
                    325
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1250,
                "right": 1450,
                "top": 225,
                "bottom": 325
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    1450,
                    475
                ],
                [
                    1450,
                    550
                ],
                [
                    1375,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 1375,
                "right": 1450,
                "top": 475,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 0,
            "y": 650,
            "w": 1450,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": true
        },
        {
            "points": [
                [
                    1450,
                    0
                ],
                [
                    1650,
                    0
                ],
                [
                    1650,
                    150
                ],
                [
                    1450,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1450,
                "right": 1650,
                "top": 0,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1650,
                    0
                ],
                [
                    1850,
                    0
                ],
                [
                    1850,
                    175
                ],
                [
                    1650,
                    150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1650,
                "right": 1850,
                "top": 0,
                "bottom": 175
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1850,
                    0
                ],
                [
                    1950,
                    0
                ],
                [
                    1950,
                    275
                ],
                [
                    1850,
                    175
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1850,
                "right": 1950,
                "top": 0,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1450,
                    550
                ],
                [
                    1650,
                    625
                ],
                [
                    1650,
                    700
                ],
                [
                    1450,
                    700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1450,
                "right": 1650,
                "top": 550,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1650,
            "y": 625,
            "w": 175,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1950,
                    525
                ],
                [
                    1950,
                    700
                ],
                [
                    1825,
                    700
                ],
                [
                    1825,
                    625
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1825,
                "right": 1950,
                "top": 525,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1700,
            "y": 400,
            "r": 112,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 112,
            "inView": false
        },
        {
            "x": 1450,
            "y": 700,
            "w": 500,
            "h": 800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2075,
                    425
                ],
                [
                    2175,
                    475
                ],
                [
                    1950,
                    600
                ],
                [
                    1950,
                    525
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1950,
                "right": 2175,
                "top": 425,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1950,
                    0
                ],
                [
                    2400,
                    0
                ],
                [
                    2275,
                    375
                ],
                [
                    1950,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1950,
                "right": 2400,
                "top": 0,
                "bottom": 375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2350,
                    500
                ],
                [
                    2425,
                    500
                ],
                [
                    2425,
                    550
                ],
                [
                    2350,
                    800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2350,
                "right": 2425,
                "top": 500,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2500,
                    500
                ],
                [
                    2575,
                    500
                ],
                [
                    2575,
                    800
                ],
                [
                    2500,
                    550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2500,
                "right": 2575,
                "top": 500,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2575,
            "y": 500,
            "w": 325,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2850,
            "y": 0,
            "w": 50,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2200,
            "y": 725,
            "w": 150,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    400
                ],
                [
                    2850,
                    500
                ],
                [
                    2800,
                    500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2800,
                "right": 2850,
                "top": 400,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2350,
                    150
                ],
                [
                    2700,
                    250
                ],
                [
                    2300,
                    300
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2300,
                "right": 2700,
                "top": 150,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2550,
                    0
                ],
                [
                    2850,
                    0
                ],
                [
                    2625,
                    50
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2550,
                "right": 2850,
                "top": 0,
                "bottom": 50
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2425,
            "y": 500,
            "w": 75,
            "h": 50,
            "type": "coindoor",
            "coins": 2,
            "currentCoins": 2,
            "inView": false
        },
        {
            "x": 2450,
            "y": 75,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    2350,
                    500
                ],
                [
                    2350,
                    725
                ],
                [
                    2100,
                    725
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2100,
                "right": 2350,
                "top": 500,
                "bottom": 725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2050,
            "y": 1000,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 2300,
            "y": 800,
            "w": 50,
            "h": 700,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2200,
                    800
                ],
                [
                    2300,
                    800
                ],
                [
                    2300,
                    1225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2200,
                "right": 2300,
                "top": 800,
                "bottom": 1225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1950,
                    1100
                ],
                [
                    2050,
                    1100
                ],
                [
                    1950,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1950,
                "right": 2050,
                "top": 1100,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2300,
                    1225
                ],
                [
                    2300,
                    1500
                ],
                [
                    1950,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1950,
                "right": 2300,
                "top": 1225,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 1950,
            "y": 1000,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2025,
            "y": 1300,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "x": 470,
            "y": 250,
            "w": 20,
            "h": 20,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 400,
            "y": 290,
            "w": 130,
            "h": 20,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 490,
            "y": 310,
            "w": 20,
            "h": 20,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 490,
            "y": 270,
            "w": 20,
            "h": 20,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 470,
            "y": 330,
            "w": 20,
            "h": 20,
            "color": "#000000",
            "type": "block",
            "inView": true
        },
        {
            "x": 2575,
            "y": 550,
            "w": 325,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2350,
            "y": 800,
            "w": 700,
            "h": 150,
            "type": "grav",
            "force": 850,
            "dir": {
                "x": 850,
                "y": 0
            },
            "direction": "right",
            "inView": false
        },
        {
            "x": 2350,
            "y": 950,
            "w": 550,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2900,
            "y": 0,
            "w": 150,
            "h": 800,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2900,
            "y": 950,
            "w": 150,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2750,
                    925
                ],
                [
                    2825,
                    950
                ],
                [
                    2675,
                    950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2675,
                "right": 2825,
                "top": 925,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    800
                ],
                [
                    2950,
                    800
                ],
                [
                    2900,
                    875
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2850,
                "right": 2950,
                "top": 800,
                "bottom": 875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    875
                ],
                [
                    3050,
                    950
                ],
                [
                    2950,
                    950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2950,
                "right": 3050,
                "top": 875,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3050,
            "y": 1250,
            "w": 950,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3050,
            "y": 0,
            "w": 550,
            "h": 700,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3600,
            "y": 0,
            "w": 50,
            "h": 1100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3050,
            "y": 700,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 3325,
                "y": 975
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 3350,
            "y": 875,
            "w": 25,
            "h": 200,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3250,
            "y": 1075,
            "w": 150,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3250,
            "y": 850,
            "w": 150,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3275,
            "y": 875,
            "w": 25,
            "h": 200,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "points": [
                [
                    3525,
                    675
                ],
                [
                    3625,
                    675
                ],
                [
                    3625,
                    850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3525,
                "right": 3625,
                "top": 675,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3025,
                    675
                ],
                [
                    3175,
                    675
                ],
                [
                    3025,
                    775
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3025,
                "right": 3175,
                "top": 675,
                "bottom": 775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    1150
                ],
                [
                    3100,
                    1250
                ],
                [
                    3050,
                    1250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3050,
                "right": 3100,
                "top": 1150,
                "bottom": 1250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    1200
                ],
                [
                    3650,
                    1250
                ],
                [
                    3550,
                    1250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3550,
                "right": 3650,
                "top": 1200,
                "bottom": 1250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3600,
                    1100
                ],
                [
                    3650,
                    1100
                ],
                [
                    3650,
                    1125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3600,
                "right": 3650,
                "top": 1100,
                "bottom": 1125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3650,
            "y": 1200,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    550
                ],
                [
                    3900,
                    550
                ],
                [
                    3650,
                    1125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3650,
                "right": 3900,
                "top": 550,
                "bottom": 1125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3750,
            "y": 950,
            "radius": 106,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3975,
            "y": 825,
            "w": 25,
            "h": 275,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4000,
            "y": 775,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3975,
            "y": 1175,
            "radius": 125,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3725,
            "y": 150,
            "w": 275,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3700,
                    150
                ],
                [
                    3725,
                    150
                ],
                [
                    3725,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3700,
                "right": 3725,
                "top": 150,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3949.996694704022,
            "y": 375.9090176398027,
            "w": 50,
            "h": 50,
            "type": "rotate-normal",
            "angle": 0.4166666666666667,
            "rotateSpeed": 25,
            "pivotX": 3825,
            "pivotY": 375,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3700.003305295978,
            "y": 374.09098236019724,
            "w": 50,
            "h": 50,
            "type": "rotate-normal",
            "angle": 180.41666666666669,
            "rotateSpeed": 25,
            "pivotX": 3825,
            "pivotY": 375,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    0
                ],
                [
                    4000,
                    0
                ],
                [
                    3650,
                    50
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3650,
                "right": 4000,
                "top": 0,
                "bottom": 50
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3850,
            "y": 25,
            "w": 100,
            "h": 25,
            "type": "rotate-normal",
            "angle": 0.75,
            "rotateSpeed": 45,
            "pivotX": 3850,
            "pivotY": 25,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 51.53882032022076,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 4000,
            "y": 150,
            "w": 200,
            "h": 1350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    0
                ],
                [
                    4350,
                    0
                ],
                [
                    4200,
                    50
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4000,
                "right": 4350,
                "top": 0,
                "bottom": 50
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4350,
                    0
                ],
                [
                    4400,
                    0
                ],
                [
                    4400,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4350,
                "right": 4400,
                "top": 0,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4275,
                    175
                ],
                [
                    4200,
                    325
                ],
                [
                    4200,
                    200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4200,
                "right": 4275,
                "top": 175,
                "bottom": 325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4275,
            "y": 175,
            "w": 225,
            "h": 25,
            "type": "rotate-normal",
            "angle": 1.25,
            "rotateSpeed": 75,
            "pivotX": 4275,
            "pivotY": 175,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 113.19231422671771,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 4400,
            "y": 0,
            "w": 250,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4400,
                    300
                ],
                [
                    4650,
                    300
                ],
                [
                    4650,
                    750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4400,
                "right": 4650,
                "top": 300,
                "bottom": 750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4200,
                    325
                ],
                [
                    4300,
                    750
                ],
                [
                    4200,
                    1150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4200,
                "right": 4300,
                "top": 325,
                "bottom": 1150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4650,
                    750
                ],
                [
                    4650,
                    1200
                ],
                [
                    4250,
                    1200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4250,
                "right": 4650,
                "top": 750,
                "bottom": 1200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4250,
                    550
                ],
                [
                    4375,
                    550
                ],
                [
                    4275,
                    650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4250,
                "right": 4375,
                "top": 550,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4450,
                    975
                ],
                [
                    4325,
                    1125
                ],
                [
                    4325,
                    1075
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4325,
                "right": 4450,
                "top": 975,
                "bottom": 1125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4650,
            "y": 0,
            "w": 50,
            "h": 1200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4250,
                    1200
                ],
                [
                    4700,
                    1200
                ],
                [
                    4475,
                    1300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4250,
                "right": 4700,
                "top": 1200,
                "bottom": 1300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4675,
                    1350
                ],
                [
                    4750,
                    1500
                ],
                [
                    4525,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4525,
                "right": 4750,
                "top": 1350,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    1200
                ],
                [
                    4850,
                    1200
                ],
                [
                    4850,
                    1400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 4850,
                "top": 1200,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    1000
                ],
                [
                    4850,
                    1200
                ],
                [
                    4700,
                    1200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 4850,
                "top": 1000,
                "bottom": 1200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4300,
            "y": 1450,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "points": [
                [
                    4200,
                    1400
                ],
                [
                    4425,
                    1500
                ],
                [
                    4200,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4200,
                "right": 4425,
                "top": 1400,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    1400
                ],
                [
                    4750,
                    1475
                ],
                [
                    4750,
                    1500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4700,
                "right": 4750,
                "top": 1400,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4850,
                    1200
                ],
                [
                    4900,
                    1300
                ],
                [
                    4850,
                    1400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4850,
                "right": 4900,
                "top": 1200,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5000,
                    975
                ],
                [
                    5000,
                    1500
                ],
                [
                    4950,
                    1300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4950,
                "right": 5000,
                "top": 975,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5000,
            "y": 600,
            "w": 300,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4950,
            "y": 925,
            "radius": 125,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    850
                ],
                [
                    4725,
                    900
                ],
                [
                    4750,
                    1075
                ],
                [
                    4700,
                    1000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4700,
                "right": 4750,
                "top": 850,
                "bottom": 1075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4825,
            "y": 600,
            "w": 175,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4775,
            "y": 700,
            "w": 50,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 4847.0833333346045,
            "y": 400,
            "w": 50,
            "h": 100,
            "type": "lavamove",
            "points": [
                [
                    4700,
                    400
                ],
                [
                    4900,
                    400
                ]
            ],
            "speed": 50,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 4700,
                "y": 400
            },
            "pointTo": {
                "x": 4900,
                "y": 400
            },
            "xv": 50,
            "yv": 0,
            "inView": false
        },
        {
            "x": 4950,
            "y": 275,
            "w": 150,
            "h": 325,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4950,
                    525
                ],
                [
                    4950,
                    600
                ],
                [
                    4825,
                    600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4825,
                "right": 4950,
                "top": 525,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4700,
                    275
                ],
                [
                    4825,
                    275
                ],
                [
                    4700,
                    350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4700,
                "right": 4825,
                "top": 275,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4700,
            "y": 0,
            "w": 125,
            "h": 275,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4825,
                    0
                ],
                [
                    4950,
                    0
                ],
                [
                    4825,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4825,
                "right": 4950,
                "top": 0,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5100,
                    75
                ],
                [
                    5100,
                    275
                ],
                [
                    4950,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4950,
                "right": 5100,
                "top": 75,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5100,
            "y": 550,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5650,
            "y": 0,
            "w": 425,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5100,
            "y": 0,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 5375,
                "y": 275
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 5362.5,
            "y": 150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 5312.5,
            "y": 150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 5412.5,
            "y": 150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 5287.5,
            "y": 150,
            "w": 175,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 5287.5,
            "y": 400,
            "w": 175,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "points": [
                [
                    5650,
                    500
                ],
                [
                    5650,
                    550
                ],
                [
                    5500,
                    550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5500,
                "right": 5650,
                "top": 500,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5100,
                    475
                ],
                [
                    5175,
                    550
                ],
                [
                    5100,
                    550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5100,
                "right": 5175,
                "top": 475,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5525,
                    0
                ],
                [
                    5650,
                    0
                ],
                [
                    5650,
                    75
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5525,
                "right": 5650,
                "top": 0,
                "bottom": 75
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4950,
                    0
                ],
                [
                    5175,
                    0
                ],
                [
                    5100,
                    25
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4950,
                "right": 5175,
                "top": 0,
                "bottom": 25
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5650,
            "y": 425,
            "w": 50,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    5700,
                    400
                ],
                [
                    5700,
                    425
                ],
                [
                    5650,
                    425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5650,
                "right": 5700,
                "top": 400,
                "bottom": 425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5650,
                    300
                ],
                [
                    6075,
                    300
                ],
                [
                    6075,
                    450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5650,
                "right": 6075,
                "top": 300,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    125
                ],
                [
                    4025,
                    150
                ],
                [
                    3975,
                    150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3975,
                "right": 4025,
                "top": 125,
                "bottom": 150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5300,
                    600
                ],
                [
                    5700,
                    600
                ],
                [
                    5300,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5300,
                "right": 5700,
                "top": 600,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6075,
            "y": 850,
            "w": 425,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5575,
            "y": 600,
            "w": 500,
            "h": 250,
            "type": "size",
            "size": 12,
            "inView": false
        },
        {
            "x": 5675,
            "y": 750,
            "w": 400,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6075,
            "y": 1450,
            "w": 425,
            "h": 50,
            "type": "speed",
            "speedInc": 3,
            "inView": false
        },
        {
            "x": 5300,
            "y": 850,
            "w": 775,
            "h": 650,
            "type": "size",
            "size": 6,
            "inView": false
        },
        {
            "x": 6000,
            "y": 1250,
            "w": 75,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5950,
            "y": 1275,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "x": 5600,
            "y": 1400,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 5625,
            "y": 1400,
            "r": 75,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 75,
            "inView": false
        },
        {
            "points": [
                [
                    5575,
                    875
                ],
                [
                    5825,
                    1375
                ],
                [
                    5500,
                    1050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 5500,
                "right": 5825,
                "top": 875,
                "bottom": 1375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6100,
            "y": 1450,
            "w": 375,
            "h": 50,
            "type": "coindoor",
            "coins": 3,
            "currentCoins": 3,
            "inView": false
        },
        {
            "x": 5375,
            "y": 1425,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    1300
                ],
                [
                    7150,
                    1500
                ],
                [
                    6600,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6600,
                "right": 7150,
                "top": 1300,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6500,
                    850
                ],
                [
                    6900,
                    1200
                ],
                [
                    6500,
                    1300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6500,
                "right": 6900,
                "top": 850,
                "bottom": 1300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    1250
                ],
                [
                    6650,
                    1375
                ],
                [
                    6600,
                    1275
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6600,
                "right": 6700,
                "top": 1250,
                "bottom": 1375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6875,
                    1325
                ],
                [
                    6950,
                    1375
                ],
                [
                    6750,
                    1450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6750,
                "right": 6950,
                "top": 1325,
                "bottom": 1450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    1025
                ],
                [
                    7150,
                    1375
                ],
                [
                    7000,
                    1375
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7000,
                "right": 7150,
                "top": 1025,
                "bottom": 1375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7150,
            "y": 100,
            "w": 250,
            "h": 1400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6725,
                    1050
                ],
                [
                    7025,
                    1075
                ],
                [
                    6900,
                    1200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6725,
                "right": 7025,
                "top": 1050,
                "bottom": 1200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    675
                ],
                [
                    7150,
                    950
                ],
                [
                    6675,
                    875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6675,
                "right": 7150,
                "top": 675,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6825,
            "y": 525,
            "w": 575,
            "h": 50,
            "type": "rotate-lava",
            "angle": -0.75,
            "rotateSpeed": -45,
            "pivotX": 6825,
            "pivotY": 525,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 288.5849095153799,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 6500,
            "y": 500,
            "w": 325,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    6500,
                    550
                ],
                [
                    6550,
                    750
                ],
                [
                    6500,
                    775
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6500,
                "right": 6550,
                "top": 550,
                "bottom": 775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    100
                ],
                [
                    7150,
                    450
                ],
                [
                    7000,
                    225
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7000,
                "right": 7150,
                "top": 100,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6500,
                    0
                ],
                [
                    6975,
                    0
                ],
                [
                    6500,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6500,
                "right": 6975,
                "top": 0,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7400,
                    50
                ],
                [
                    7400,
                    100
                ],
                [
                    7150,
                    100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7150,
                "right": 7400,
                "top": 50,
                "bottom": 100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7400,
            "y": 0,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 7675,
                "y": 275
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 7400,
            "y": 550,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7950,
            "y": 525,
            "w": 200,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7950,
            "y": 0,
            "w": 50,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7375,
            "y": 0,
            "w": 50,
            "h": 75,
            "type": "color",
            "bgColor": "#16372d",
            "tileColor": "#477655",
            "inView": false
        },
        {
            "x": 7550,
            "y": 150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7525,
            "y": 400,
            "w": 75,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7525,
            "y": 125,
            "w": 75,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7675,
            "y": 125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7700,
            "y": 225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7725,
            "y": 325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7750,
            "y": 400,
            "w": 25,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7775,
            "y": 325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7800,
            "y": 225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 7825,
            "y": 125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 0,
            "y": 1500,
            "w": 9900,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7950,
                    425
                ],
                [
                    8000,
                    425
                ],
                [
                    8000,
                    450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7950,
                "right": 8000,
                "top": 425,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    500
                ],
                [
                    8000,
                    525
                ],
                [
                    7950,
                    525
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7950,
                "right": 8000,
                "top": 500,
                "bottom": 525
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    300
                ],
                [
                    8075,
                    450
                ],
                [
                    8000,
                    450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8000,
                "right": 8075,
                "top": 300,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    50
                ],
                [
                    8150,
                    500
                ],
                [
                    8075,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8075,
                "right": 8150,
                "top": 50,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8000,
            "y": 500,
            "w": 150,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8150,
            "y": 50,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8000,
                    0
                ],
                [
                    8075,
                    0
                ],
                [
                    8000,
                    200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8000,
                "right": 8075,
                "top": 0,
                "bottom": 200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8200,
            "y": 500,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8300,
            "y": 0,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8200,
                    100
                ],
                [
                    8250,
                    150
                ],
                [
                    8200,
                    400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8200,
                "right": 8250,
                "top": 100,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8305,
                    400
                ],
                [
                    8345,
                    400
                ],
                [
                    8325,
                    450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8305,
                "right": 8345,
                "top": 400,
                "bottom": 450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8200,
                    450
                ],
                [
                    8275,
                    500
                ],
                [
                    8200,
                    500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8200,
                "right": 8275,
                "top": 450,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8500,
                    425
                ],
                [
                    8550,
                    500
                ],
                [
                    8450,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8450,
                "right": 8550,
                "top": 425,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8350,
            "y": 0,
            "w": 225,
            "h": 225,
            "type": "normal",
            "canJump": true,
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
                    225
                ],
                [
                    8575,
                    350
                ],
                [
                    8350,
                    400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8350,
                "right": 8650,
                "top": 225,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8575,
            "y": 0,
            "w": 75,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8550,
                    500
                ],
                [
                    8850,
                    550
                ],
                [
                    8550,
                    600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8550,
                "right": 8850,
                "top": 500,
                "bottom": 600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8775,
                    325
                ],
                [
                    8850,
                    550
                ],
                [
                    8550,
                    500
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8550,
                "right": 8850,
                "top": 325,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8650,
            "y": 0,
            "w": 275,
            "h": 225,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8650,
                    225
                ],
                [
                    8925,
                    225
                ],
                [
                    8925,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8650,
                "right": 8925,
                "top": 225,
                "bottom": 275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8225,
            "y": 750,
            "w": 825,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8925,
                    700
                ],
                [
                    8925,
                    750
                ],
                [
                    8400,
                    725
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8400,
                "right": 8925,
                "top": 700,
                "bottom": 750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8925,
            "y": 0,
            "w": 125,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8425,
                    600
                ],
                [
                    8525,
                    600
                ],
                [
                    8475,
                    625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8425,
                "right": 8525,
                "top": 600,
                "bottom": 625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8650,
                    700
                ],
                [
                    8700,
                    710
                ],
                [
                    8600,
                    715
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8600,
                "right": 8700,
                "top": 700,
                "bottom": 715
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8225,
                    600
                ],
                [
                    8375,
                    600
                ],
                [
                    8300,
                    700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8225,
                "right": 8375,
                "top": 600,
                "bottom": 700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7808.75,
            "y": 600,
            "w": 50,
            "h": 150,
            "type": "lavamove",
            "points": [
                [
                    7800,
                    600
                ],
                [
                    8175,
                    600
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 8175,
                "y": 600
            },
            "pointTo": {
                "x": 7800,
                "y": 600
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 7800,
            "y": 825,
            "w": 425,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8225,
                    750
                ],
                [
                    8225,
                    825
                ],
                [
                    8100,
                    825
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8100,
                "right": 8225,
                "top": 750,
                "bottom": 825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7800,
                    750
                ],
                [
                    7925,
                    825
                ],
                [
                    7800,
                    825
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7800,
                "right": 7925,
                "top": 750,
                "bottom": 825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7825,
                    575
                ],
                [
                    8175,
                    575
                ],
                [
                    8050,
                    675
                ],
                [
                    7975,
                    675
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7825,
                "right": 8175,
                "top": 575,
                "bottom": 675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7775,
            "y": 700,
            "w": 25,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7775,
                    700
                ],
                [
                    7775,
                    850
                ],
                [
                    7500,
                    775
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7775,
                "top": 700,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7550,
                    600
                ],
                [
                    7650,
                    600
                ],
                [
                    7600,
                    625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7550,
                "right": 7650,
                "top": 600,
                "bottom": 625
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7400,
                    600
                ],
                [
                    7500,
                    600
                ],
                [
                    7400,
                    675
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7400,
                "right": 7500,
                "top": 600,
                "bottom": 675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7525,
                    750
                ],
                [
                    7550,
                    762.5
                ],
                [
                    7500,
                    775
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7500,
                "right": 7550,
                "top": 750,
                "bottom": 775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7400,
            "y": 1050,
            "w": 450,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7850,
            "y": 850,
            "w": 300,
            "h": 650,
            "type": "timetrap",
            "time": 0,
            "maxTime": 5,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "x": 8150,
            "y": 850,
            "w": 400,
            "h": 575,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    850
                ],
                [
                    8150,
                    1200
                ],
                [
                    7900,
                    1125
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7900,
                "right": 8150,
                "top": 850,
                "bottom": 1200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7850,
                    1250
                ],
                [
                    8075,
                    1300
                ],
                [
                    7850,
                    1375
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7850,
                "right": 8075,
                "top": 1250,
                "bottom": 1375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    1400
                ],
                [
                    8150,
                    1450
                ],
                [
                    8100,
                    1425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8100,
                "right": 8150,
                "top": 1400,
                "bottom": 1450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8350,
            "y": 1450,
            "w": 150,
            "h": 50,
            "type": "timetrap",
            "time": 0,
            "maxTime": 0.6,
            "cdmult": 3,
            "trapType": "death",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    1425
                ],
                [
                    8225,
                    1425
                ],
                [
                    8150,
                    1450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8150,
                "right": 8225,
                "top": 1425,
                "bottom": 1450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8225,
                    1425
                ],
                [
                    8300,
                    1425
                ],
                [
                    8300,
                    1450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8225,
                "right": 8300,
                "top": 1425,
                "bottom": 1450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8300,
            "y": 1425,
            "w": 250,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8225,
                    1475
                ],
                [
                    8250,
                    1500
                ],
                [
                    8200,
                    1500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8200,
                "right": 8250,
                "top": 1475,
                "bottom": 1500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8625,
            "y": 1450,
            "w": 225,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8675,
                    1250
                ],
                [
                    8675,
                    1450
                ],
                [
                    8625,
                    1450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8625,
                "right": 8675,
                "top": 1250,
                "bottom": 1450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8675,
            "y": 1250,
            "w": 175,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8800,
            "y": 950,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8550,
                    850
                ],
                [
                    8750,
                    850
                ],
                [
                    8550,
                    1050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8550,
                "right": 8750,
                "top": 850,
                "bottom": 1050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8700,
            "y": 1150,
            "r": 79,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 79,
            "inView": false
        },
        {
            "points": [
                [
                    8700,
                    900
                ],
                [
                    8700,
                    925
                ],
                [
                    8650,
                    950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8650,
                "right": 8700,
                "top": 900,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8850,
            "y": 850,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 9125,
                "y": 1125
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8850,
            "y": 1400,
            "w": 600,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9400,
            "y": 700,
            "w": 50,
            "h": 700,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9150,
            "y": 700,
            "w": 250,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9062.5,
            "y": 1075,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9087.5,
            "y": 1175,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9112.5,
            "y": 1250,
            "w": 25,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9137.5,
            "y": 1175,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9162.5,
            "y": 1075,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9187.5,
            "y": 975,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "points": [
                [
                    9150,
                    700
                ],
                [
                    9150,
                    850
                ],
                [
                    9125,
                    800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9125,
                "right": 9150,
                "top": 700,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9050,
            "y": 550,
            "w": 150,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9250,
            "y": 550,
            "w": 100,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9350,
            "y": 300,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9250,
            "y": 650,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9200,
            "y": 650,
            "w": 50,
            "h": 50,
            "color": "#ffffff",
            "type": "block",
            "inView": false
        },
        {
            "points": [
                [
                    9350,
                    300
                ],
                [
                    9350,
                    550
                ],
                [
                    9275,
                    475
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9275,
                "right": 9350,
                "top": 300,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    375
                ],
                [
                    9125,
                    550
                ],
                [
                    9050,
                    550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9050,
                "right": 9125,
                "top": 375,
                "bottom": 550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9500,
            "y": 1050,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    250
                ],
                [
                    9200,
                    300
                ],
                [
                    9150,
                    275
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9150,
                "right": 9200,
                "top": 250,
                "bottom": 300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    0
                ],
                [
                    9200,
                    0
                ],
                [
                    9050,
                    150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9050,
                "right": 9200,
                "top": 0,
                "bottom": 150
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
                    9175,
                    125
                ],
                [
                    9100,
                    100
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9100,
                "right": 9175,
                "top": 50,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9300,
                    150
                ],
                [
                    9350,
                    250
                ],
                [
                    9275,
                    250
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9275,
                "right": 9350,
                "top": 150,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9350,
                    0
                ],
                [
                    9425,
                    0
                ],
                [
                    9525,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9350,
                "right": 9525,
                "top": 0,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9800,
            "y": 125,
            "w": 250,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1.4166666666666667,
            "rotateSpeed": 85,
            "pivotX": 9800,
            "pivotY": 125,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 125.62344526401112,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    9925,
                    100
                ],
                [
                    9925,
                    250
                ],
                [
                    9350,
                    250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9350,
                "right": 9925,
                "top": 100,
                "bottom": 250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9450,
                    0
                ],
                [
                    9500,
                    0
                ],
                [
                    9550,
                    125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9450,
                "right": 9550,
                "top": 0,
                "bottom": 125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9950,
                    0
                ],
                [
                    10000,
                    0
                ],
                [
                    10000,
                    75
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9950,
                "right": 10000,
                "top": 0,
                "bottom": 75
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9925,
            "y": 175,
            "w": 25,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 9425,
            "y": 350,
            "w": 50,
            "h": 50,
            "type": "coin",
            "collected": false,
            "inView": false
        },
        {
            "points": [
                [
                    9925,
                    300
                ],
                [
                    9950,
                    400
                ],
                [
                    9400,
                    325
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9400,
                "right": 9950,
                "top": 300,
                "bottom": 400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    425
                ],
                [
                    9950,
                    500
                ],
                [
                    9400,
                    500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9400,
                "right": 9950,
                "top": 425,
                "bottom": 500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9200,
            "y": 250,
            "w": 725,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    325
                ],
                [
                    9575,
                    350
                ],
                [
                    9475,
                    350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9400,
                "right": 9575,
                "top": 325,
                "bottom": 350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9775,
                    475
                ],
                [
                    9850,
                    475
                ],
                [
                    9850,
                    487.5
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9775,
                "right": 9850,
                "top": 475,
                "bottom": 487.5
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9950,
            "y": 500,
            "w": 50,
            "h": 50,
            "type": "coindoor",
            "coins": 4,
            "currentCoins": 4,
            "inView": false
        },
        {
            "points": [
                [
                    9450,
                    550
                ],
                [
                    9750,
                    550
                ],
                [
                    9450,
                    850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9450,
                "right": 9750,
                "top": 550,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9400,
            "y": 550,
            "w": 50,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    750
                ],
                [
                    10000,
                    1050
                ],
                [
                    9700,
                    1050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9700,
                "right": 10000,
                "top": 750,
                "bottom": 1050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9700,
                    600
                ],
                [
                    9900,
                    725
                ],
                [
                    9600,
                    700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9600,
                "right": 9900,
                "top": 600,
                "bottom": 725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9900,
                    850
                ],
                [
                    9800,
                    950
                ],
                [
                    9750,
                    875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9750,
                "right": 9900,
                "top": 850,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9575,
                    725
                ],
                [
                    9600,
                    850
                ],
                [
                    9475,
                    825
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9475,
                "right": 9600,
                "top": 725,
                "bottom": 850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9750,
                    1000
                ],
                [
                    9700,
                    1050
                ],
                [
                    9525,
                    1050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9525,
                "right": 9750,
                "top": 1000,
                "bottom": 1050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9400,
            "y": 500,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9575,
            "y": 1275,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9750,
            "y": 1175,
            "radius": 56,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9750,
            "y": 1325,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9600,
            "y": 1450,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9875,
            "y": 1325,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9925,
            "y": 1175,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9825,
            "y": 1475,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    300
                ],
                [
                    9925,
                    300
                ],
                [
                    9400,
                    325
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9400,
                "right": 9925,
                "top": 300,
                "bottom": 325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9900,
                    1500
                ],
                [
                    9925,
                    2000
                ],
                [
                    9900,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9900,
                "right": 9925,
                "top": 1500,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    1500
                ],
                [
                    10000,
                    2000
                ],
                [
                    9975,
                    2000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9975,
                "right": 10000,
                "top": 1500,
                "bottom": 2000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9900,
            "y": 1500,
            "w": 100,
            "h": 500,
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
            "x": 9900,
            "y": 1800,
            "w": 100,
            "h": 50,
            "type": "color",
            "bgColor": "#162737",
            "tileColor": "#475e76",
            "inView": false
        },
        {
            "x": 9037.5,
            "y": 975,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9550,
            "y": 2125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9575,
            "y": 2225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9600,
            "y": 2325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9625,
            "y": 2400,
            "w": 25,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9650,
            "y": 2325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9675,
            "y": 2225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9700,
            "y": 2125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9825,
            "y": 2150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9775,
            "y": 2400,
            "w": 125,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9775,
            "y": 2125,
            "w": 125,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 9400,
            "y": 2000,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9400,
            "y": 2400,
            "w": 50,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9450,
            "y": 2550,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    1200
                ],
                [
                    9400,
                    1400
                ],
                [
                    9350,
                    1400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9350,
                "right": 9400,
                "top": 1200,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8850,
                    1325
                ],
                [
                    8900,
                    1400
                ],
                [
                    8850,
                    1400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8850,
                "right": 8900,
                "top": 1325,
                "bottom": 1400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9350,
                    850
                ],
                [
                    9400,
                    850
                ],
                [
                    9400,
                    925
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9350,
                "right": 9400,
                "top": 850,
                "bottom": 925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8700,
                    850
                ],
                [
                    8900,
                    850
                ],
                [
                    8700,
                    900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8700,
                "right": 8900,
                "top": 850,
                "bottom": 900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8825,
                    925
                ],
                [
                    8850,
                    950
                ],
                [
                    8800,
                    950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8800,
                "right": 8850,
                "top": 925,
                "bottom": 950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    2475
                ],
                [
                    10000,
                    2550
                ],
                [
                    9950,
                    2550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9950,
                "right": 10000,
                "top": 2475,
                "bottom": 2550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9450,
                    2475
                ],
                [
                    9500,
                    2550
                ],
                [
                    9450,
                    2550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9450,
                "right": 9500,
                "top": 2475,
                "bottom": 2550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9450,
                    2000
                ],
                [
                    9500,
                    2000
                ],
                [
                    9450,
                    2075
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9450,
                "right": 9500,
                "top": 2000,
                "bottom": 2075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 10000,
            "y": 1075,
            "w": 100,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    2300
                ],
                [
                    9450,
                    2300
                ],
                [
                    9400,
                    2325
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9400,
                "right": 9450,
                "top": 2300,
                "bottom": 2325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    2375
                ],
                [
                    9450,
                    2400
                ],
                [
                    9400,
                    2400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9400,
                "right": 9450,
                "top": 2375,
                "bottom": 2400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    2000
                ],
                [
                    9400,
                    2000
                ],
                [
                    9400,
                    2325
                ],
                [
                    9050,
                    2225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9050,
                "right": 9400,
                "top": 2000,
                "bottom": 2325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9400,
                    2375
                ],
                [
                    9400,
                    2600
                ],
                [
                    9050,
                    2550
                ],
                [
                    9050,
                    2475
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9050,
                "right": 9400,
                "top": 2375,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8700,
                    2000
                ],
                [
                    9050,
                    2000
                ],
                [
                    9050,
                    2225
                ],
                [
                    8850,
                    2600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8700,
                "right": 9050,
                "top": 2000,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8700,
            "y": 2000,
            "w": 150,
            "h": 1050,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9900,
                    2700
                ],
                [
                    9850,
                    2950
                ],
                [
                    8850,
                    2825
                ],
                [
                    8850,
                    2750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8850,
                "right": 9900,
                "top": 2700,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9575,
                    3000
                ],
                [
                    10000,
                    3050
                ],
                [
                    10000,
                    3300
                ],
                [
                    9575,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9575,
                "right": 10000,
                "top": 3000,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9250,
                    2875
                ],
                [
                    9650,
                    2925
                ],
                [
                    9250,
                    3000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9250,
                "right": 9650,
                "top": 2875,
                "bottom": 3000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9575,
                    3050
                ],
                [
                    9575,
                    3150
                ],
                [
                    9450,
                    3100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9450,
                "right": 9575,
                "top": 3050,
                "bottom": 3150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9200,
            "y": 2800,
            "w": 50,
            "h": 1150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9050,
                    2550
                ],
                [
                    9300,
                    2587.5
                ],
                [
                    9325,
                    2725
                ],
                [
                    9075,
                    2737.5
                ]
            ],
            "type": "poly-tp",
            "tpx": 9412.5,
            "tpy": 2660,
            "most": {
                "left": 9050,
                "right": 9325,
                "top": 2550,
                "bottom": 2737.5
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9362.5,
            "y": 2587.5,
            "w": 25,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9925,
                    2600
                ],
                [
                    10000,
                    2600
                ],
                [
                    10000,
                    2675
                ],
                [
                    9950,
                    2650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9925,
                "right": 10000,
                "top": 2600,
                "bottom": 2675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9375,
            "y": 3212.5,
            "w": 187.5,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1.0833333333333333,
            "rotateSpeed": 65,
            "pivotX": 9375,
            "pivotY": 3212.5,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 94.57966219013473,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    9250,
                    3100
                ],
                [
                    9375,
                    3200
                ],
                [
                    9375,
                    3225
                ],
                [
                    9250,
                    3250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9250,
                "right": 9375,
                "top": 3100,
                "bottom": 3250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9575,
                    3300
                ],
                [
                    9575,
                    3350
                ],
                [
                    9300,
                    3350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9300,
                "right": 9575,
                "top": 3300,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9300,
            "y": 3350,
            "w": 275,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    9250,
                    3450
                ],
                [
                    9950,
                    3600
                ],
                [
                    9250,
                    3950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9250,
                "right": 9950,
                "top": 3450,
                "bottom": 3950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9800,
                    3525
                ],
                [
                    9775,
                    3562.5
                ],
                [
                    9725,
                    3550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9725,
                "right": 9800,
                "top": 3525,
                "bottom": 3562.5
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    3300
                ],
                [
                    9950,
                    3400
                ],
                [
                    9787.5,
                    3350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9787.5,
                "right": 10000,
                "top": 3300,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    3450
                ],
                [
                    10000,
                    3500
                ],
                [
                    9975,
                    3475
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9975,
                "right": 10000,
                "top": 3450,
                "bottom": 3500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    10000,
                    3675
                ],
                [
                    10000,
                    4000
                ],
                [
                    9350,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9350,
                "right": 10000,
                "top": 3675,
                "bottom": 4000
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
                    9000,
                    4000
                ],
                [
                    8900,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9000,
                "top": 3600,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 9050,
            "y": 3600,
            "w": 300,
            "h": 50,
            "type": "rotate-lava",
            "angle": -1.5,
            "rotateSpeed": -90,
            "pivotX": 9050,
            "pivotY": 3600,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 152.0690632574555,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    9200,
                    3775
                ],
                [
                    9200,
                    3900
                ],
                [
                    9075,
                    3850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9075,
                "right": 9200,
                "top": 3775,
                "bottom": 3900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8850,
            "y": 3100,
            "w": 50,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8900,
                    3100
                ],
                [
                    9125,
                    3150
                ],
                [
                    9125,
                    3175
                ],
                [
                    8900,
                    3225
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8900,
                "right": 9125,
                "top": 3100,
                "bottom": 3225
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9075,
                    2975
                ],
                [
                    9100,
                    3150
                ],
                [
                    9000,
                    3125
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 9000,
                "right": 9100,
                "top": 2975,
                "bottom": 3150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8850,
                    2825
                ],
                [
                    9050,
                    2850
                ],
                [
                    8975,
                    3000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8850,
                "right": 9050,
                "top": 2825,
                "bottom": 3000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8850,
                    3100
                ],
                [
                    8850,
                    4000
                ],
                [
                    8700,
                    4000
                ],
                [
                    8700,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8700,
                "right": 8850,
                "top": 3100,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8700,
                    3050
                ],
                [
                    8825,
                    3050
                ],
                [
                    8700,
                    3075
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8700,
                "right": 8825,
                "top": 3050,
                "bottom": 3075
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8150,
            "y": 2850,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 8425,
                "y": 3125
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 8262.5,
            "y": 3075,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8312.5,
            "y": 3250,
            "w": 25,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8287.5,
            "y": 3175,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8237.5,
            "y": 2975,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8337.5,
            "y": 3175,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8362.5,
            "y": 3075,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8387.5,
            "y": 2975,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8500,
            "y": 3000,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8575,
            "y": 3000,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8475,
            "y": 3250,
            "w": 150,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8475,
            "y": 2975,
            "w": 150,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 8150,
            "y": 2000,
            "w": 550,
            "h": 850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8100,
            "y": 2000,
            "w": 50,
            "h": 1950,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 8150,
            "y": 3400,
            "w": 450,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    8725,
                    3350
                ],
                [
                    8725,
                    3450
                ],
                [
                    8675,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8675,
                "right": 8725,
                "top": 3350,
                "bottom": 3450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8600,
                    2850
                ],
                [
                    8700,
                    2850
                ],
                [
                    8700,
                    2900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8600,
                "right": 8700,
                "top": 2850,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    2850
                ],
                [
                    8250,
                    2850
                ],
                [
                    8150,
                    2900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8150,
                "right": 8250,
                "top": 2850,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    3250
                ],
                [
                    8200,
                    3400
                ],
                [
                    8150,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8150,
                "right": 8200,
                "top": 3250,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8600,
                    3400
                ],
                [
                    8625,
                    3450
                ],
                [
                    8600,
                    3450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8600,
                "right": 8625,
                "top": 3400,
                "bottom": 3450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8150,
                    3450
                ],
                [
                    8625,
                    3450
                ],
                [
                    8150,
                    3675
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8150,
                "right": 8625,
                "top": 3450,
                "bottom": 3675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8575,
                    3625
                ],
                [
                    8700,
                    3625
                ],
                [
                    8700,
                    4000
                ],
                [
                    8300,
                    4000
                ],
                [
                    8300,
                    3900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8300,
                "right": 8700,
                "top": 3625,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8350,
                    3575
                ],
                [
                    8300,
                    3650
                ],
                [
                    8300,
                    3600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8300,
                "right": 8350,
                "top": 3575,
                "bottom": 3650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7950,
                    3850
                ],
                [
                    8100,
                    3850
                ],
                [
                    8100,
                    3950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7950,
                "right": 8100,
                "top": 3850,
                "bottom": 3950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7950,
            "y": 3600,
            "w": 150,
            "h": 250,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 3550,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 3700,
            "w": 50,
            "h": 300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7899.987149136101,
            "y": 3801.963439335702,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 0.75,
            "rotateSpeed": 45,
            "pivotX": 7750,
            "pivotY": 3800,
            "distToPivot": 150,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 185.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 7748.036560664298,
            "y": 3949.987149136101,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 90.75,
            "rotateSpeed": 45,
            "pivotX": 7750,
            "pivotY": 3800,
            "distToPivot": 150,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 185.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 7600.012850863899,
            "y": 3798.036560664298,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 180.75,
            "rotateSpeed": 45,
            "pivotX": 7750,
            "pivotY": 3800,
            "distToPivot": 150,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 185.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 7751.963439335702,
            "y": 3650.012850863899,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 270.75,
            "rotateSpeed": 45,
            "pivotX": 7750,
            "pivotY": 3800,
            "distToPivot": 150,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 185.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 7750,
            "y": 3800,
            "radius": 37.5,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    3650
                ],
                [
                    7550,
                    3700
                ],
                [
                    7500,
                    3700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7550,
                "top": 3650,
                "bottom": 3700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7450,
            "y": 2150,
            "w": 50,
            "h": 1850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9575,
            "y": 2600,
            "radius": 35,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 9850,
            "y": 2900,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 9725,
            "y": 3025,
            "w": 350,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7500,
            "y": 3250,
            "w": 600,
            "h": 300,
            "type": "grav",
            "force": 700,
            "dir": {
                "x": -700,
                "y": 0
            },
            "direction": "left",
            "inView": false
        },
        {
            "x": 7500,
            "y": 3200,
            "w": 500,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    3250
                ],
                [
                    7550,
                    3250
                ],
                [
                    7500,
                    3350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 7550,
                "top": 3250,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8100,
                    3450
                ],
                [
                    8100,
                    3550
                ],
                [
                    8050,
                    3550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 8050,
                "right": 8100,
                "top": 3450,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7750,
                    3425
                ],
                [
                    7750,
                    3550
                ],
                [
                    7650,
                    3550
                ],
                [
                    7650,
                    3475
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7650,
                "right": 7750,
                "top": 3425,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7850,
                    3250
                ],
                [
                    8000,
                    3250
                ],
                [
                    7975,
                    3350
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7850,
                "right": 8000,
                "top": 3250,
                "bottom": 3350
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7500,
            "y": 2900,
            "w": 600,
            "h": 300,
            "type": "grav",
            "force": 700,
            "dir": {
                "x": 0,
                "y": 700
            },
            "direction": "down",
            "inView": false
        },
        {
            "x": 7575,
            "y": 2850,
            "w": 525,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7575,
                    2900
                ],
                [
                    8100,
                    2900
                ],
                [
                    8100,
                    2950
                ],
                [
                    7850,
                    2950
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7575,
                "right": 8100,
                "top": 2900,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    3150
                ],
                [
                    7700,
                    3150
                ],
                [
                    7975,
                    3200
                ],
                [
                    7500,
                    3200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7500,
                "right": 7975,
                "top": 3150,
                "bottom": 3200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7500,
                    2600
                ],
                [
                    8000,
                    2700
                ],
                [
                    7500,
                    2800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7500,
                "right": 8000,
                "top": 2600,
                "bottom": 2800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8100,
                    2100
                ],
                [
                    8100,
                    2500
                ],
                [
                    7600,
                    2425
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7600,
                "right": 8100,
                "top": 2100,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7950,
                    2475
                ],
                [
                    8100,
                    2500
                ],
                [
                    8100,
                    2550
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7950,
                "right": 8100,
                "top": 2475,
                "bottom": 2550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    8100,
                    2825
                ],
                [
                    8100,
                    2850
                ],
                [
                    8075,
                    2850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 8075,
                "right": 8100,
                "top": 2825,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7750,
                    2750
                ],
                [
                    7700,
                    2775
                ],
                [
                    7625,
                    2775
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7625,
                "right": 7750,
                "top": 2750,
                "bottom": 2775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7675,
                    2575
                ],
                [
                    7750,
                    2650
                ],
                [
                    7625,
                    2625
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7625,
                "right": 7750,
                "top": 2575,
                "bottom": 2650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7500,
            "y": 2150,
            "w": 50,
            "h": 100,
            "type": "bounce",
            "effect": 360,
            "inView": false
        },
        {
            "x": 7500,
            "y": 2250,
            "w": 75,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7450,
            "y": 2100,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7550,
            "y": 2100,
            "w": 300,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    7550,
                    2125
                ],
                [
                    7850,
                    2125
                ],
                [
                    7550,
                    2150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7550,
                "right": 7850,
                "top": 2125,
                "bottom": 2150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7975,
            "y": 2100,
            "w": 125,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7250,
            "y": 2000,
            "w": 100,
            "h": 50,
            "type": "bounce",
            "effect": 720,
            "inView": false
        },
        {
            "x": 7350,
            "y": 2000,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7200,
            "y": 2000,
            "w": 50,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7100,
            "y": 2050,
            "w": 50,
            "h": 1850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 7150,
            "y": 2250,
            "w": 300,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6800,
            "y": 2000,
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
            "x": 6075,
            "y": 0,
            "w": 425,
            "h": 775,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6075,
            "y": 775,
            "w": 425,
            "h": 75,
            "type": "trans",
            "collide": false,
            "opaq": 0.98,
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    2400
                ],
                [
                    7400,
                    2600
                ],
                [
                    7150,
                    2725
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7150,
                "right": 7400,
                "top": 2400,
                "bottom": 2725
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7450,
                    2800
                ],
                [
                    7450,
                    3000
                ],
                [
                    7200,
                    2925
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7200,
                "right": 7450,
                "top": 2800,
                "bottom": 3000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7325,
                    2750
                ],
                [
                    7400,
                    2825
                ],
                [
                    7300,
                    2875
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7300,
                "right": 7400,
                "top": 2750,
                "bottom": 2875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7200,
                    2700
                ],
                [
                    7200,
                    2800
                ],
                [
                    7150,
                    2825
                ],
                [
                    7150,
                    2725
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 7150,
                "right": 7200,
                "top": 2700,
                "bottom": 2825
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    3050
                ],
                [
                    7250,
                    3100
                ],
                [
                    7150,
                    3375
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7150,
                "right": 7250,
                "top": 3050,
                "bottom": 3375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7450,
                    3000
                ],
                [
                    7450,
                    3450
                ],
                [
                    7275,
                    3350
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7275,
                "right": 7450,
                "top": 3000,
                "bottom": 3450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7150,
                    3450
                ],
                [
                    7400,
                    3600
                ],
                [
                    7150,
                    3775
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7150,
                "right": 7400,
                "top": 3450,
                "bottom": 3775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    7450,
                    3800
                ],
                [
                    7450,
                    4000
                ],
                [
                    7200,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 7200,
                "right": 7450,
                "top": 3800,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 7275,
            "y": 3800,
            "w": 175,
            "h": 25,
            "type": "rotate-lava",
            "angle": 1.0833333333333333,
            "rotateSpeed": 65,
            "pivotX": 7275,
            "pivotY": 3800,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 88.38834764831844,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    6800,
                    3900
                ],
                [
                    7150,
                    3900
                ],
                [
                    7100,
                    3950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6800,
                "right": 7150,
                "top": 3900,
                "bottom": 3950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6800,
            "y": 2050,
            "w": 300,
            "h": 1850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6800,
            "y": 1925,
            "w": 350,
            "h": 200,
            "type": "trans",
            "collide": false,
            "opaq": 0.9,
            "inView": false
        },
        {
            "x": 6875,
            "y": 4000,
            "r": 25,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 25,
            "inView": false
        },
        {
            "x": 6825,
            "y": 4000,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    3750
                ],
                [
                    6750,
                    4000
                ],
                [
                    6600,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6600,
                "right": 6750,
                "top": 3750,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6300,
            "y": 3550,
            "w": 500,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6450,
                    3650
                ],
                [
                    6575,
                    3650
                ],
                [
                    6525,
                    3800
                ],
                [
                    6475,
                    3800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6450,
                "right": 6575,
                "top": 3650,
                "bottom": 3800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6475,
                    3900
                ],
                [
                    6525,
                    3900
                ],
                [
                    6575,
                    4000
                ],
                [
                    6450,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6450,
                "right": 6575,
                "top": 3900,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6250,
            "y": 3800,
            "w": 25,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 3100,
            "w": 50,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 3050,
            "w": 550,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    3100
                ],
                [
                    6350,
                    3100
                ],
                [
                    6250,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6250,
                "right": 6350,
                "top": 3100,
                "bottom": 3150
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6800,
                    3500
                ],
                [
                    6800,
                    3550
                ],
                [
                    6700,
                    3550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6700,
                "right": 6800,
                "top": 3500,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6744.1666666653955,
            "y": 3100,
            "w": 50,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    6250,
                    3100
                ],
                [
                    6750,
                    3100
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6250,
                "y": 3100
            },
            "pointTo": {
                "x": 6750,
                "y": 3100
            },
            "xv": 100,
            "yv": 0,
            "inView": false
        },
        {
            "x": 6255.8333333346045,
            "y": 3350,
            "w": 50,
            "h": 200,
            "type": "lavamove",
            "points": [
                [
                    6750,
                    3350
                ],
                [
                    6250,
                    3350
                ]
            ],
            "speed": 100,
            "currentPoint": 0,
            "collidable": true,
            "pointOn": {
                "x": 6750,
                "y": 3350
            },
            "pointTo": {
                "x": 6250,
                "y": 3350
            },
            "xv": -100,
            "yv": 1.2246467991473532e-14,
            "inView": false
        },
        {
            "x": 6250,
            "y": 3300,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6750,
            "y": 3300,
            "w": 50,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6650,
            "y": 2550,
            "w": 50,
            "h": 500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    2900
                ],
                [
                    6750,
                    3050
                ],
                [
                    6700,
                    3050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6700,
                "right": 6750,
                "top": 2900,
                "bottom": 3050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6250,
            "y": 2000,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 6525,
                "y": 2275
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 6500,
            "y": 2550,
            "w": 150,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 2550,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6200,
            "y": 2000,
            "w": 50,
            "h": 550,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6750,
                    2550
                ],
                [
                    6800,
                    2550
                ],
                [
                    6800,
                    2700
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6750,
                "right": 6800,
                "top": 2550,
                "bottom": 2700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6700,
            "y": 2775,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6775,
            "y": 2775,
            "w": 25,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6725,
            "y": 2775,
            "w": 50,
            "h": 50,
            "type": "tp",
            "tpx": 6750,
            "tpy": 2675,
            "bgColor": "#163721",
            "tileColor": "#517647",
            "changeColor": false,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2750,
            "w": 100,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    6700,
                    2700
                ],
                [
                    6800,
                    2750
                ],
                [
                    6700,
                    2750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6700,
                "right": 6800,
                "top": 2700,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6787.5,
            "y": 2825,
            "w": 12.5,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    6750,
                    2100
                ],
                [
                    6800,
                    2100
                ],
                [
                    6800,
                    2200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6750,
                "right": 6800,
                "top": 2100,
                "bottom": 2200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6650,
                    2000
                ],
                [
                    6700,
                    2000
                ],
                [
                    6700,
                    2050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6650,
                "right": 6700,
                "top": 2000,
                "bottom": 2050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6750,
            "y": 2000,
            "w": 50,
            "h": 100,
            "type": "trans",
            "collide": false,
            "opaq": 0.8,
            "inView": false
        },
        {
            "x": 6700,
            "y": 2000,
            "w": 50,
            "h": 50,
            "type": "trans",
            "collide": false,
            "opaq": 0.8,
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    2000
                ],
                [
                    6350,
                    2000
                ],
                [
                    6250,
                    2100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6250,
                "right": 6350,
                "top": 2000,
                "bottom": 2100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    2400
                ],
                [
                    6325,
                    2550
                ],
                [
                    6250,
                    2550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6250,
                "right": 6325,
                "top": 2400,
                "bottom": 2550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6400,
                    2550
                ],
                [
                    6425,
                    2600
                ],
                [
                    6400,
                    2600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6400,
                "right": 6425,
                "top": 2550,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6500,
                    2550
                ],
                [
                    6500,
                    2600
                ],
                [
                    6475,
                    2600
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6475,
                "right": 6500,
                "top": 2550,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6325,
            "y": 2125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6350,
            "y": 2225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6375,
            "y": 2325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6400,
            "y": 2400,
            "w": 25,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6425,
            "y": 2325,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6450,
            "y": 2225,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6475,
            "y": 2125,
            "w": 25,
            "h": 100,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6550,
            "y": 2150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6600,
            "y": 2150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6650,
            "y": 2150,
            "w": 25,
            "h": 250,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6525,
            "y": 2125,
            "w": 175,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6525,
            "y": 2400,
            "w": 175,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 6200,
            "y": 2600,
            "w": 50,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 6250,
            "y": 2750,
            "w": 225,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6425,
            "y": 2850,
            "w": 225,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6550,
            "y": 2750,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 6250,
            "y": 2850,
            "w": 100,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    6550,
                    2800
                ],
                [
                    6650,
                    2800
                ],
                [
                    6650,
                    2850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6550,
                "right": 6650,
                "top": 2800,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    2800
                ],
                [
                    6350,
                    2850
                ],
                [
                    6250,
                    2850
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6250,
                "right": 6350,
                "top": 2800,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6350,
                    2850
                ],
                [
                    6375,
                    2900
                ],
                [
                    6350,
                    2900
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6350,
                "right": 6375,
                "top": 2850,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6525,
                    2750
                ],
                [
                    6550,
                    2750
                ],
                [
                    6550,
                    2800
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6525,
                "right": 6550,
                "top": 2750,
                "bottom": 2800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6650,
                    3000
                ],
                [
                    6650,
                    3050
                ],
                [
                    6300,
                    3050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 6300,
                "right": 6650,
                "top": 3000,
                "bottom": 3050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6650,
                    2725
                ],
                [
                    6650,
                    2750
                ],
                [
                    6525,
                    2750
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6525,
                "right": 6650,
                "top": 2725,
                "bottom": 2750
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6250,
                    2900
                ],
                [
                    6375,
                    2900
                ],
                [
                    6250,
                    2975
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 6250,
                "right": 6375,
                "top": 2900,
                "bottom": 2975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    6200,
                    3050
                ],
                [
                    6200,
                    3400
                ],
                [
                    5800,
                    3400
                ],
                [
                    5800,
                    3150
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5800,
                "right": 6200,
                "top": 3050,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5150,
            "y": 3400,
            "w": 1050,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5200,
            "y": 2000,
            "w": 1000,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    5800,
                    2600
                ],
                [
                    6200,
                    2600
                ],
                [
                    6200,
                    2950
                ],
                [
                    5800,
                    2850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5800,
                "right": 6200,
                "top": 2600,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5150,
            "y": 2650,
            "w": 50,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5200,
            "y": 2600,
            "w": 600,
            "h": 800,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "points": [
                [
                    5325,
                    3025
                ],
                [
                    5400,
                    3025
                ],
                [
                    5350,
                    3275
                ],
                [
                    5275,
                    3275
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5275,
                "right": 5400,
                "top": 3025,
                "bottom": 3275
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5600,
                    2850
                ],
                [
                    5600,
                    2925
                ],
                [
                    5400,
                    3025
                ],
                [
                    5400,
                    2950
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5400,
                "right": 5600,
                "top": 2850,
                "bottom": 3025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5500,
                    2675
                ],
                [
                    5575,
                    2675
                ],
                [
                    5675,
                    2850
                ],
                [
                    5600,
                    2850
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5500,
                "right": 5675,
                "top": 2675,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5200,
                    2650
                ],
                [
                    5250,
                    2650
                ],
                [
                    5250,
                    2675
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5200,
                "right": 5250,
                "top": 2650,
                "bottom": 2675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5250,
                    2600
                ],
                [
                    5275,
                    2650
                ],
                [
                    5250,
                    2650
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5250,
                "right": 5275,
                "top": 2600,
                "bottom": 2650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5400,
                    2950
                ],
                [
                    5400,
                    3025
                ],
                [
                    5325,
                    3025
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5325,
                "right": 5400,
                "top": 2950,
                "bottom": 3025
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5600,
                    2850
                ],
                [
                    5675,
                    2850
                ],
                [
                    5600,
                    2925
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5600,
                "right": 5675,
                "top": 2850,
                "bottom": 2925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5550,
                    2650
                ],
                [
                    5575,
                    2675
                ],
                [
                    5550,
                    2675
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5550,
                "right": 5575,
                "top": 2650,
                "bottom": 2675
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5675,
                    3275
                ],
                [
                    5725,
                    3275
                ],
                [
                    5675,
                    3325
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5675,
                "right": 5725,
                "top": 3275,
                "bottom": 3325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5275,
                    3275
                ],
                [
                    5325,
                    3275
                ],
                [
                    5325,
                    3325
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5275,
                "right": 5325,
                "top": 3275,
                "bottom": 3325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5725,
                    3000
                ],
                [
                    5725,
                    3050
                ],
                [
                    5675,
                    3050
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5675,
                "right": 5725,
                "top": 3000,
                "bottom": 3050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4550,
            "y": 2000,
            "w": 600,
            "h": 500,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 4550,
            "y": 2500,
            "w": 500,
            "h": 1500,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 5050,
            "y": 2650,
            "w": 100,
            "h": 1350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    5050,
                    2575
                ],
                [
                    5100,
                    2650
                ],
                [
                    5050,
                    2650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5050,
                "right": 5100,
                "top": 2575,
                "bottom": 2650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5100,
                    2500
                ],
                [
                    5150,
                    2500
                ],
                [
                    5150,
                    2575
                ]
            ],
            "type": "poly",
            "most": {
                "left": 5100,
                "right": 5150,
                "top": 2500,
                "bottom": 2575
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 5016.25,
            "y": 2250,
            "w": 150,
            "h": 150,
            "type": "movingsafe",
            "points": [
                [
                    4675,
                    2250
                ],
                [
                    5025,
                    2250
                ]
            ],
            "speed": 150,
            "currentPoint": 0,
            "pointOn": {
                "x": 4675,
                "y": 2250
            },
            "pointTo": {
                "x": 5025,
                "y": 2250
            },
            "xv": 150,
            "yv": 0,
            "inView": false
        },
        {
            "x": 5150,
            "y": 2000,
            "w": 50,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4725,
                    2100
                ],
                [
                    4775,
                    2125
                ],
                [
                    4725,
                    2125
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4725,
                "right": 4775,
                "top": 2100,
                "bottom": 2125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5075,
                    2275
                ],
                [
                    5125,
                    2325
                ],
                [
                    5075,
                    2325
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5075,
                "right": 5125,
                "top": 2275,
                "bottom": 2325
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4725,
                    2350
                ],
                [
                    4775,
                    2350
                ],
                [
                    4775,
                    2400
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4725,
                "right": 4775,
                "top": 2350,
                "bottom": 2400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5075,
                    2550
                ],
                [
                    5125,
                    2550
                ],
                [
                    5125,
                    2600
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5075,
                "right": 5125,
                "top": 2550,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    5825,
                    3000
                ],
                [
                    5875,
                    3050
                ],
                [
                    5825,
                    3050
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 5825,
                "right": 5875,
                "top": 3000,
                "bottom": 3050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4500,
                    2100
                ],
                [
                    4525,
                    2100
                ],
                [
                    4525,
                    2125
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4500,
                "right": 4525,
                "top": 2100,
                "bottom": 2125
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4250,
            "y": 2000,
            "w": 300,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4450,
            "y": 2150,
            "w": 100,
            "h": 1850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 4350,
            "y": 2150,
            "w": 100,
            "h": 475,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 4250,
            "y": 2075,
            "w": 100,
            "h": 625,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4375,
                    2225
                ],
                [
                    4400,
                    2250
                ],
                [
                    4375,
                    2250
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4375,
                "right": 4400,
                "top": 2225,
                "bottom": 2250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4375,
                    2475
                ],
                [
                    4400,
                    2500
                ],
                [
                    4375,
                    2500
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4375,
                "right": 4400,
                "top": 2475,
                "bottom": 2500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4400,
                    2525
                ],
                [
                    4425,
                    2525
                ],
                [
                    4425,
                    2550
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4400,
                "right": 4425,
                "top": 2525,
                "bottom": 2550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4400,
                    2275
                ],
                [
                    4425,
                    2275
                ],
                [
                    4425,
                    2300
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4400,
                "right": 4425,
                "top": 2275,
                "bottom": 2300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4375,
                    2400
                ],
                [
                    4400,
                    2400
                ],
                [
                    4375,
                    2425
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4375,
                "right": 4400,
                "top": 2400,
                "bottom": 2425
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4425,
                    2350
                ],
                [
                    4425,
                    2375
                ],
                [
                    4400,
                    2375
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 4400,
                "right": 4425,
                "top": 2350,
                "bottom": 2375
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4250,
                    2700
                ],
                [
                    4350,
                    2700
                ],
                [
                    4300,
                    2850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4250,
                "right": 4350,
                "top": 2700,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4300,
                    3000
                ],
                [
                    4350,
                    3100
                ],
                [
                    4250,
                    3100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 4250,
                "right": 4350,
                "top": 3000,
                "bottom": 3100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4250,
            "y": 3100,
            "w": 200,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    4450,
                    2950
                ],
                [
                    4450,
                    3100
                ],
                [
                    4425,
                    3025
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4425,
                "right": 4450,
                "top": 2950,
                "bottom": 3100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1050,
                    300
                ],
                [
                    1450,
                    550
                ],
                [
                    1450,
                    650
                ],
                [
                    1050,
                    650
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1050,
                "right": 1450,
                "top": 300,
                "bottom": 650
            },
            "renderType": "poly",
            "inView": true
        },
        {
            "points": [
                [
                    2100,
                    725
                ],
                [
                    2200,
                    725
                ],
                [
                    2200,
                    800
                ],
                [
                    2100,
                    750
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2100,
                "right": 2200,
                "top": 725,
                "bottom": 800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    9850,
                    2925
                ],
                [
                    9950,
                    2925
                ],
                [
                    9850,
                    2950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 9850,
                "right": 9950,
                "top": 2925,
                "bottom": 2950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 8000,
            "y": 3225,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 3800,
            "y": 3100,
            "w": 450,
            "h": 900,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3650,
            "y": 2150,
            "w": 150,
            "h": 1850,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3800,
                    2150
                ],
                [
                    4000,
                    3100
                ],
                [
                    3800,
                    3100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3800,
                "right": 4000,
                "top": 2150,
                "bottom": 3100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 4000,
            "y": 3100,
            "radius": 200,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    2550
                ],
                [
                    4250,
                    2575
                ],
                [
                    4250,
                    2700
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4000,
                "right": 4250,
                "top": 2550,
                "bottom": 2700
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    4000,
                    2000
                ],
                [
                    4250,
                    2000
                ],
                [
                    4250,
                    2200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 4000,
                "right": 4250,
                "top": 2000,
                "bottom": 2200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    2000
                ],
                [
                    3600,
                    2000
                ],
                [
                    3300,
                    2200
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3300,
                "right": 3600,
                "top": 2000,
                "bottom": 2200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3100,
            "y": 2000,
            "w": 200,
            "h": 1450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3599.9892909467508,
            "y": 2426.6361994464182,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 0.75,
            "rotateSpeed": 45,
            "pivotX": 3475,
            "pivotY": 2425,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3411.0883642403687,
            "y": 2532.4258014376815,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 120.75,
            "rotateSpeed": 45,
            "pivotX": 3475,
            "pivotY": 2425,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3413.9223448128805,
            "y": 2315.9379991159003,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 240.75,
            "rotateSpeed": 45,
            "pivotX": 3475,
            "pivotY": 2425,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3411.0883642403687,
            "y": 2617.5741985623185,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 239.25,
            "rotateSpeed": -45,
            "pivotX": 3475,
            "pivotY": 2725,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3413.9223448128805,
            "y": 2834.0620008840997,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": 119.25,
            "rotateSpeed": -45,
            "pivotX": 3475,
            "pivotY": 2725,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 3599.9892909467508,
            "y": 2723.3638005535818,
            "w": 50,
            "h": 50,
            "type": "rotate-lava",
            "angle": -0.75,
            "rotateSpeed": -45,
            "pivotX": 3475,
            "pivotY": 2725,
            "distToPivot": 125,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 160.35533905932738,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    2500
                ],
                [
                    3350,
                    2575
                ],
                [
                    3300,
                    2650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3300,
                "right": 3350,
                "top": 2500,
                "bottom": 2650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    2500
                ],
                [
                    3650,
                    2650
                ],
                [
                    3600,
                    2575
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3600,
                "right": 3650,
                "top": 2500,
                "bottom": 2650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3650,
            "y": 3025,
            "radius": 182,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    3350,
                    3000
                ],
                [
                    3400,
                    3000
                ],
                [
                    3550,
                    3450
                ],
                [
                    3500,
                    3450
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 3350,
                "right": 3550,
                "top": 3000,
                "bottom": 3450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3300,
                    3175
                ],
                [
                    3400,
                    3175
                ],
                [
                    3475,
                    3400
                ],
                [
                    3300,
                    3400
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3300,
                "right": 3475,
                "top": 3175,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 3300,
            "y": 3400,
            "w": 175,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3562.5,
            "y": 3425,
            "w": 87.5,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3100,
            "y": 3450,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 3375,
                "y": 3725
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 3275,
            "y": 3612.5,
            "w": 25,
            "h": 225,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3225,
            "y": 3587.5,
            "w": 125,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3225,
            "y": 3837.5,
            "w": 125,
            "h": 25,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3400,
            "y": 3587.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3425,
            "y": 3637.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3450,
            "y": 3687.5,
            "w": 25,
            "h": 75,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3475,
            "y": 3637.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3500,
            "y": 3587.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3425,
            "y": 3762.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3400,
            "y": 3812.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3475,
            "y": 3762.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3500,
            "y": 3812.5,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 3050,
            "y": 2000,
            "w": 50,
            "h": 1750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 3050,
            "y": 3900,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    3850
                ],
                [
                    3100,
                    3900
                ],
                [
                    3050,
                    3900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3050,
                "right": 3100,
                "top": 3850,
                "bottom": 3900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3050,
                    3750
                ],
                [
                    3100,
                    3750
                ],
                [
                    3100,
                    3800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3050,
                "right": 3100,
                "top": 3750,
                "bottom": 3800
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2900,
            "y": 3850,
            "w": 150,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2850,
            "y": 3550,
            "w": 50,
            "h": 450,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    2900,
                    3750
                ],
                [
                    2950,
                    3850
                ],
                [
                    2900,
                    3850
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2900,
                "right": 2950,
                "top": 3750,
                "bottom": 3850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2700,
            "y": 3450,
            "w": 350,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2700,
            "y": 3300,
            "w": 350,
            "h": 150,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2650,
            "y": 3300,
            "w": 50,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    3000,
                    3450
                ],
                [
                    3050,
                    3450
                ],
                [
                    3050,
                    3600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 3000,
                "right": 3050,
                "top": 3450,
                "bottom": 3600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2700,
                    3450
                ],
                [
                    2750,
                    3450
                ],
                [
                    2700,
                    3600
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 2700,
                "right": 2750,
                "top": 3450,
                "bottom": 3600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 2725,
            "y": 3775,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 2775,
                "y": 3825
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2500,
            "y": 3950,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 3850,
            "w": 50,
            "h": 50,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2600,
            "y": 3950,
            "w": 50,
            "h": 50,
            "type": "trans",
            "collide": false,
            "opaq": 0.3,
            "inView": false
        },
        {
            "x": 2300,
            "y": 3600,
            "w": 200,
            "h": 400,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2525,
            "y": 3675,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 2575,
                "y": 3725
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2300,
            "y": 3575,
            "w": 200,
            "h": 25,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2150,
            "y": 3300,
            "w": 500,
            "h": 150,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 2150,
            "y": 2000,
            "w": 900,
            "h": 1300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2050,
            "y": 2000,
            "w": 100,
            "h": 1925,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2175,
            "y": 3675,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 2225,
                "y": 3725
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 2250,
            "y": 3900,
            "w": 50,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 1850,
            "y": 3575,
            "w": 50,
            "h": 425,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1900,
            "y": 3750,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2000,
            "y": 3750,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1900,
            "y": 3750,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2050,
            "y": 3750,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1875,
            "y": 3550,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1825,
            "y": 3550,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1975,
            "y": 3450,
            "w": 100,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2025,
            "y": 3625,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2025,
            "y": 3450,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1550,
            "y": 2000,
            "w": 500,
            "h": 1350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1675,
            "y": 3450,
            "w": 100,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1725,
            "y": 3450,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1725,
            "y": 3625,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1850,
            "y": 3750,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1800,
            "y": 3750,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1700,
            "y": 3750,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1700,
            "y": 3750,
            "w": 50,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1550,
            "y": 3350,
            "w": 150,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1875,
            "y": 3350,
            "radius": 100,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2025,
            "y": 3400,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1725,
            "y": 3400,
            "radius": 75,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1700,
            "y": 3850,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 2050,
            "y": 3850,
            "radius": 50,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 1425,
            "y": 3875,
            "w": 100,
            "h": 100,
            "spawn": {
                "x": 1475,
                "y": 3925
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 600,
            "y": 3400,
            "w": 750,
            "h": 600,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1350,
            "y": 3541.25,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1350,
                    3700
                ],
                [
                    1350,
                    3400
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1350,
                "y": 3400
            },
            "pointTo": {
                "x": 1350,
                "y": 3700
            },
            "xv": 9.184850993605149e-15,
            "yv": 150,
            "inView": false
        },
        {
            "x": 1150,
            "y": 3750,
            "w": 300,
            "h": 75,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1350,
            "y": 3825,
            "w": 50,
            "h": 175,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1450,
            "y": 3558.75,
            "w": 100,
            "h": 50,
            "type": "lavamove",
            "points": [
                [
                    1450,
                    3400
                ],
                [
                    1450,
                    3700
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "collidable": true,
            "pointOn": {
                "x": 1450,
                "y": 3700
            },
            "pointTo": {
                "x": 1450,
                "y": 3400
            },
            "xv": 9.184850993605149e-15,
            "yv": -150,
            "inView": false
        },
        {
            "x": 1450,
            "y": 3300,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1200,
            "y": 2000,
            "w": 350,
            "h": 1275,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    1350,
                    3300
                ],
                [
                    1450,
                    3300
                ],
                [
                    1450,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1350,
                "right": 1450,
                "top": 3300,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1400,
                    3825
                ],
                [
                    1450,
                    3825
                ],
                [
                    1400,
                    3875
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1400,
                "right": 1450,
                "top": 3825,
                "bottom": 3875
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1400,
                    3950
                ],
                [
                    1450,
                    4000
                ],
                [
                    1400,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1400,
                "right": 1450,
                "top": 3950,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1875,
                    3975
                ],
                [
                    1950,
                    4000
                ],
                [
                    1800,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1800,
                "right": 1950,
                "top": 3975,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2150,
                    3300
                ],
                [
                    2200,
                    3300
                ],
                [
                    2150,
                    3500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2150,
                "right": 2200,
                "top": 3300,
                "bottom": 3500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2600,
                    3300
                ],
                [
                    2650,
                    3300
                ],
                [
                    2650,
                    3500
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2600,
                "right": 2650,
                "top": 3300,
                "bottom": 3500
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2850,
                    3850
                ],
                [
                    2850,
                    4000
                ],
                [
                    2800,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2800,
                "right": 2850,
                "top": 3850,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2650,
                    3900
                ],
                [
                    2700,
                    3900
                ],
                [
                    2675,
                    3925
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2650,
                "right": 2700,
                "top": 3900,
                "bottom": 3925
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    2050,
                    3925
                ],
                [
                    2150,
                    3925
                ],
                [
                    2125,
                    3950
                ],
                [
                    2075,
                    3950
                ]
            ],
            "type": "poly",
            "most": {
                "left": 2050,
                "right": 2150,
                "top": 3925,
                "bottom": 3950
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 650,
            "y": 2850,
            "w": 550,
            "h": 550,
            "spawn": {
                "x": 925,
                "y": 3125
            },
            "type": "check",
            "collected": false,
            "inView": false
        },
        {
            "x": 600,
            "y": 2100,
            "w": 50,
            "h": 1300,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 912.5,
            "y": 3100,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 937.5,
            "y": 3150,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 962.5,
            "y": 3200,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 987.5,
            "y": 3250,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 937.5,
            "y": 3050,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 962.5,
            "y": 3000,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 987.5,
            "y": 2950,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 887.5,
            "y": 3050,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 862.5,
            "y": 3000,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 837.5,
            "y": 2950,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 887.5,
            "y": 3150,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 862.5,
            "y": 3200,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "x": 837.5,
            "y": 3250,
            "w": 25,
            "h": 50,
            "color": "#000000",
            "type": "block",
            "inView": false
        },
        {
            "points": [
                [
                    3650,
                    3950
                ],
                [
                    3650,
                    4000
                ],
                [
                    3550,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3550,
                "right": 3650,
                "top": 3950,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3600,
                    3450
                ],
                [
                    3650,
                    3450
                ],
                [
                    3650,
                    3550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3600,
                "right": 3650,
                "top": 3450,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3100,
                    3450
                ],
                [
                    3175,
                    3450
                ],
                [
                    3100,
                    3550
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3100,
                "right": 3175,
                "top": 3450,
                "bottom": 3550
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    3100,
                    3950
                ],
                [
                    3200,
                    4000
                ],
                [
                    3100,
                    4000
                ]
            ],
            "type": "poly",
            "most": {
                "left": 3100,
                "right": 3200,
                "top": 3950,
                "bottom": 4000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    650,
                    3300
                ],
                [
                    700,
                    3400
                ],
                [
                    650,
                    3400
                ]
            ],
            "type": "poly",
            "most": {
                "left": 650,
                "right": 700,
                "top": 3300,
                "bottom": 3400
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    1100,
                    2850
                ],
                [
                    1200,
                    2850
                ],
                [
                    1200,
                    2900
                ]
            ],
            "type": "poly",
            "most": {
                "left": 1100,
                "right": 1200,
                "top": 2850,
                "bottom": 2900
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 750,
            "y": 2750,
            "w": 450,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1225,
            "y": 3275,
            "w": 325,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1225,
            "y": 3275,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    750,
                    2750
                ],
                [
                    750,
                    2850
                ],
                [
                    725,
                    2800
                ]
            ],
            "type": "poly",
            "most": {
                "left": 725,
                "right": 750,
                "top": 2750,
                "bottom": 2850
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 750,
            "y": 2500,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 1075,
            "y": 2400,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 825,
            "y": 2200,
            "r": 100,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 100,
            "inView": false
        },
        {
            "x": 650,
            "y": 2775,
            "w": 50,
            "h": 75,
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
            "x": 400,
            "y": 2150,
            "w": 200,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 425,
            "y": 2175,
            "r": 50,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 50,
            "inView": false
        },
        {
            "x": 0,
            "y": 2000,
            "w": 250,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": -7.654042494670956e-15,
            "y": 2350,
            "w": 500,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 250,
            "y": 2000,
            "radius": 56,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 250,
            "y": 2350,
            "radius": 56,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "points": [
                [
                    625,
                    2075
                ],
                [
                    650,
                    2100
                ],
                [
                    600,
                    2100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 600,
                "right": 650,
                "top": 2075,
                "bottom": 2100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    500,
                    2350
                ],
                [
                    525,
                    2400
                ],
                [
                    500,
                    2450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 500,
                "right": 525,
                "top": 2350,
                "bottom": 2450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    575,
                    2200
                ],
                [
                    600,
                    2200
                ],
                [
                    600,
                    2300
                ]
            ],
            "type": "poly",
            "most": {
                "left": 575,
                "right": 600,
                "top": 2200,
                "bottom": 2300
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    600,
                    2450
                ],
                [
                    600,
                    2500
                ],
                [
                    0,
                    2600
                ],
                [
                    0,
                    2550
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 0,
                "right": 600,
                "top": 2450,
                "bottom": 2600
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 0,
            "y": 2450,
            "w": 400,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 2575,
            "w": 400,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 400,
            "y": 2450,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 200,
            "y": 2600,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 175,
            "y": 2600,
            "w": 425,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 200,
            "y": 2650,
            "radius": 25,
            "type": "circle-normal",
            "renderType": "circle",
            "inView": false
        },
        {
            "x": 200,
            "y": 2650,
            "w": 400,
            "h": 25,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    2700
                ],
                [
                    200,
                    3050
                ],
                [
                    0,
                    3050
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 0,
                "right": 200,
                "top": 2700,
                "bottom": 3050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    250,
                    2675
                ],
                [
                    600,
                    2675
                ],
                [
                    600,
                    3000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 250,
                "right": 600,
                "top": 2675,
                "bottom": 3000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 475,
            "y": 2925,
            "r": 125,
            "type": "circle-lava",
            "renderType": "circleR",
            "radius": 125,
            "inView": false
        },
        {
            "x": 300,
            "y": 3150,
            "r": 56,
            "tpx": 500,
            "tpy": 4375,
            "type": "circle-tp",
            "renderType": "circleR",
            "radius": 56,
            "inView": false
        },
        {
            "x": 0,
            "y": 3050,
            "w": 200,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 2.1431318985078676e-14,
            "y": 3250,
            "w": 600,
            "h": 750,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 1000,
            "y": 4000,
            "w": 9000,
            "h": 1000,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 450,
            "y": 4000,
            "w": 100,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 450,
            "y": 4650,
            "w": 100,
            "h": 350,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 650,
            "y": 4450,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 0,
            "y": 4450,
            "w": 350,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 425,
            "y": 4425,
            "w": 150,
            "h": 150,
            "type": "door",
            "id": 1,
            "active": true,
            "inView": false
        },
        {
            "x": 450,
            "y": 4450,
            "w": 100,
            "h": 100,
            "type": "winpad",
            "inView": false
        },
        {
            "points": [
                [
                    225,
                    4200
                ],
                [
                    325,
                    4450
                ],
                [
                    100,
                    4450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 100,
                "right": 325,
                "top": 4200,
                "bottom": 4450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    225,
                    4000
                ],
                [
                    450,
                    4000
                ],
                [
                    450,
                    4250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 225,
                "right": 450,
                "top": 4000,
                "bottom": 4250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    4000
                ],
                [
                    225,
                    4000
                ],
                [
                    0,
                    4100
                ]
            ],
            "type": "poly",
            "most": {
                "left": 0,
                "right": 225,
                "top": 4000,
                "bottom": 4100
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    175,
                    4300
                ],
                [
                    100,
                    4450
                ],
                [
                    0,
                    4450
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 0,
                "right": 175,
                "top": 4300,
                "bottom": 4450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 25,
            "y": 4275,
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
                    1000,
                    4300
                ],
                [
                    1000,
                    4450
                ],
                [
                    650,
                    4450
                ]
            ],
            "type": "poly",
            "most": {
                "left": 650,
                "right": 1000,
                "top": 4300,
                "bottom": 4450
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 808.75,
            "y": 4250,
            "w": 50,
            "h": 200,
            "type": "move",
            "points": [
                [
                    650,
                    4250
                ],
                [
                    950,
                    4250
                ]
            ],
            "speed": 150,
            "currentPoint": 1,
            "alongWith": false,
            "pointOn": {
                "x": 950,
                "y": 4250
            },
            "pointTo": {
                "x": 650,
                "y": 4250
            },
            "xv": -150,
            "yv": 1.8369701987210297e-14,
            "inView": false
        },
        {
            "x": 550,
            "y": 4250,
            "w": 100,
            "h": 100,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 550,
            "y": 4050,
            "w": 250,
            "h": 200,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 4200,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "x": 900,
            "y": 4100,
            "w": 200,
            "h": 50,
            "type": "rotate-normal",
            "angle": -1.5,
            "rotateSpeed": -90,
            "pivotX": 900,
            "pivotY": 4100,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 103.07764064044152,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    1000,
                    4150
                ],
                [
                    1000,
                    4200
                ],
                [
                    950,
                    4200
                ]
            ],
            "type": "poly",
            "most": {
                "left": 950,
                "right": 1000,
                "top": 4150,
                "bottom": 4200
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    950,
                    4000
                ],
                [
                    1000,
                    4000
                ],
                [
                    1000,
                    4050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 950,
                "right": 1000,
                "top": 4000,
                "bottom": 4050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 800,
            "y": 4075,
            "w": 100,
            "h": 50,
            "type": "normal",
            "canJump": true,
            "inView": false
        },
        {
            "points": [
                [
                    550,
                    4000
                ],
                [
                    600,
                    4050
                ],
                [
                    550,
                    4050
                ]
            ],
            "type": "poly",
            "most": {
                "left": 550,
                "right": 600,
                "top": 4000,
                "bottom": 4050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    550,
                    4000
                ],
                [
                    600,
                    4000
                ],
                [
                    650,
                    4050
                ],
                [
                    600,
                    4050
                ]
            ],
            "type": "poly-tp",
            "tpx": 625,
            "tpy": 4375,
            "most": {
                "left": 550,
                "right": 650,
                "top": 4000,
                "bottom": 4050
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 675,
            "y": 4000,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 2,
            "active": true,
            "inView": false
        },
        {
            "x": 225,
            "y": 4775,
            "w": 450,
            "h": 50,
            "type": "rotate-lava",
            "angle": 1.25,
            "rotateSpeed": 75,
            "pivotX": 225,
            "pivotY": 4775,
            "distToPivot": 0,
            "canCollide": true,
            "renderType": "rotating",
            "cullingRadius": 226.38462845343543,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "points": [
                [
                    450,
                    4850
                ],
                [
                    450,
                    5000
                ],
                [
                    350,
                    5000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 350,
                "right": 450,
                "top": 4850,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    4875
                ],
                [
                    125,
                    5000
                ],
                [
                    0,
                    5000
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 0,
                "right": 125,
                "top": 4875,
                "bottom": 5000
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    0,
                    4550
                ],
                [
                    150,
                    4550
                ],
                [
                    0,
                    4650
                ]
            ],
            "type": "poly-lava",
            "most": {
                "left": 0,
                "right": 150,
                "top": 4550,
                "bottom": 4650
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 75,
            "y": 4875,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 3,
            "active": true,
            "inView": false
        },
        {
            "x": 650,
            "y": 4650,
            "w": 350,
            "h": 350,
            "type": "lava",
            "canCollide": false,
            "inView": false
        },
        {
            "x": 700,
            "y": 4550,
            "w": 300,
            "h": 100,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "x": 550,
            "y": 4700,
            "w": 100,
            "h": 200,
            "type": "lava",
            "canCollide": true,
            "inView": false
        },
        {
            "points": [
                [
                    700,
                    4650
                ],
                [
                    975,
                    4725
                ],
                [
                    975,
                    4775
                ],
                [
                    700,
                    4700
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 700,
                "right": 975,
                "top": 4650,
                "bottom": 4775
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    975,
                    4850
                ],
                [
                    975,
                    4900
                ],
                [
                    675,
                    4975
                ],
                [
                    675,
                    4925
                ]
            ],
            "type": "poly-safe",
            "most": {
                "left": 675,
                "right": 975,
                "top": 4850,
                "bottom": 4975
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 950,
            "y": 4705.8333333346045,
            "w": 50,
            "h": 100,
            "type": "movingsafe",
            "points": [
                [
                    950,
                    4700
                ],
                [
                    950,
                    4825
                ]
            ],
            "speed": 100,
            "currentPoint": 1,
            "pointOn": {
                "x": 950,
                "y": 4825
            },
            "pointTo": {
                "x": 950,
                "y": 4700
            },
            "xv": 6.123233995736766e-15,
            "yv": -100,
            "inView": false
        },
        {
            "x": 600,
            "y": 4950,
            "w": 150,
            "h": 50,
            "type": "rotatingsafe",
            "angle": 1.5,
            "rotateSpeed": 90,
            "pivotX": 600,
            "pivotY": 4950,
            "distToPivot": 0,
            "canCollide": true,
            "cullingRadius": 79.05694150420949,
            "unSim": 34.92499999999866,
            "inView": false
        },
        {
            "x": 575,
            "y": 4925,
            "w": 50,
            "h": 50,
            "type": "button",
            "id": 4,
            "active": true,
            "inView": false
        },
        {
            "points": [
                [
                    400,
                    3200
                ],
                [
                    400,
                    3250
                ],
                [
                    350,
                    3250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 350,
                "right": 400,
                "top": 3200,
                "bottom": 3250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "points": [
                [
                    200,
                    3200
                ],
                [
                    250,
                    3250
                ],
                [
                    200,
                    3250
                ]
            ],
            "type": "poly",
            "most": {
                "left": 200,
                "right": 250,
                "top": 3200,
                "bottom": 3250
            },
            "renderType": "poly",
            "inView": false
        },
        {
            "x": 6675,
            "y": 2550,
            "w": 100,
            "h": 50,
            "type": "color",
            "bgColor": "#242656",
            "tileColor": "#635f9b",
            "inView": false
        },
        {
            "x": 3475,
            "y": 3400,
            "w": 100,
            "h": 50,
            "type": "color",
            "bgColor": "#332456",
            "tileColor": "#6f5f9b",
            "inView": false
        },
        {
            "x": 1225,
            "y": 3300,
            "w": 100,
            "h": 100,
            "type": "color",
            "bgColor": "#653c80",
            "tileColor": "#9d75b8",
            "inView": false
        },
        {
            "x": 3075,
            "y": 3425,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 9,
            "inView": false
        },
        {
            "x": 625,
            "y": 2825,
            "w": 600,
            "h": 600,
            "type": "zone",
            "value": 10,
            "inView": false
        }
    ];
    const enemies = [];
    const safes = [
        {
            "x": 600,
            "y": 4600,
            "w": 100,
            "h": 100,
            "renderAbove": true
        },
        {
            "x": 5950,
            "y": 3050,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 6250,
            "y": 2725,
            "w": 400,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 5725,
            "y": 3000,
            "w": 100,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 5325,
            "y": 3275,
            "w": 350,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 5675,
            "y": 3050,
            "w": 50,
            "h": 225,
            "renderAbove": true
        },
        {
            "x": 5200,
            "y": 2600,
            "w": 50,
            "h": 50,
            "renderAbove": true
        },
        {
            "x": 5250,
            "y": 2650,
            "w": 300,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 4525,
            "y": 2100,
            "w": 200,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 5075,
            "y": 2325,
            "w": 50,
            "h": 225,
            "renderAbove": true
        },
        {
            "x": 4725,
            "y": 2125,
            "w": 50,
            "h": 225,
            "renderAbove": true
        },
        {
            "x": 4350,
            "y": 2075,
            "w": 25,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 4375,
            "y": 2250,
            "w": 50,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 4425,
            "y": 2250,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 4375,
            "y": 2375,
            "w": 50,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 4350,
            "y": 2375,
            "w": 25,
            "h": 150,
            "renderAbove": true
        },
        {
            "x": 4375,
            "y": 2500,
            "w": 50,
            "h": 25,
            "renderAbove": true
        },
        {
            "x": 4425,
            "y": 2500,
            "w": 25,
            "h": 200,
            "renderAbove": true
        },
        {
            "x": 4400,
            "y": 2925,
            "w": 50,
            "h": 50,
            "renderAbove": true
        }
    ];
    const texts = [];

    const str = convertOldExMap(obs, enemies, safes, texts, counter, 'popb');
    
    eval(str);

    mapDimensions.x=20000;
    mapDimensions.y=10000;

    spawnPosition.x=600;
    spawnPosition.y=600;
    shared.respawnPlayer();
    colors.background='#517647'; colors.tile='#163721';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=u9xSFk1ZDgw'
    });

    shared.C(1,[],[0],{x:12950,y:-250,w:2000,h:250});

    shared.C(0,[],[26],{
        x: 19900,
        y: 4100,
        r: 100,
        musicPath: 'https://www.youtube.com/watch?v=u9xSFk1ZDgw'
    });

    obstacles[788].maxCoins = obstacles[788].coins = 4;
}

// var counter = 0;
// var flashLava = false;
// var lavaType = flashLava === true ? [0,1] : [1];
// var obs = 

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
//             p.conveyorForce = params.force / 10000 * 8 * 5 / 16.66;
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
//     'bounce': {
//         type: [1,[],[2]],
//         customMap: (params) => {
//             return {bounciness: params.effect/1.5/10, decay: 0.5};
//         }
//     },
//     'rotate-normal': {
//         type: [1,[1],[0]],
//         customMap: (params) => {
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: 0,
//                 rotateSpeed: params.rotateSpeed / 360 / 220,
//                 pivotX: params.pivotX * 2,
//                 pivotY: params.pivotY * 2
//             };
//         }
//     },
//     'rotate-lava': {
//         type: [1,[1],lavaType],
//         customMap: (params) => {
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: 0,
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
//                 initialRotation: 0,
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
//             return {
//                 coinDoorColor: '#d6d612',
//                 coindoorCoinAmount: 4
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
//                     type: [3,[],[20]],
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
// }

// var safes = .map(p => {
//     p.type = "safe";
//     return p;
// });

// var texts = [
//     {
//         "x": 300,
//         "y": 75,
//         "angle": 0,
//         "text": "Welcome to the",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 300,
//         "y": 475,
//         "angle": 0,
//         "text": "In this map, you will learn",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 300,
//         "y": 125,
//         "angle": 0,
//         "text": "Planet of Peaceful Beginnings!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 300,
//         "y": 550,
//         "angle": 0,
//         "text": "the basics of this game!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2475,
//         "y": 425,
//         "angle": 0,
//         "text": "Go both ways and come back to unlock this!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 650,
//         "y": 300,
//         "angle": 0,
//         "text": "Avoid red!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2600,
//         "y": 875,
//         "angle": 0,
//         "text": "This moves you!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 3325,
//         "y": 1175,
//         "angle": 0,
//         "text": "You will respawn here if you die!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 3825,
//         "y": 375,
//         "angle": 0,
//         "text": "Some objects move!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 4825,
//         "y": 450,
//         "angle": 0,
//         "text": "Careful!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 3325,
//         "y": 775,
//         "angle": 0,
//         "text": "Welcome to Zone 2!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5375,
//         "y": 75,
//         "angle": 0,
//         "text": "Welcome to Zone 3!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5375,
//         "y": 475,
//         "angle": 0,
//         "text": "You're doing well!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5887.5,
//         "y": 475,
//         "angle": 0,
//         "text": "Sometimes, your size ",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5887.5,
//         "y": 525,
//         "angle": 0,
//         "text": "or speed may be",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5887.5,
//         "y": 575,
//         "angle": 0,
//         "text": "changed.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5875,
//         "y": 950,
//         "angle": 0,
//         "text": "Shift slows you down!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5875,
//         "y": 1000,
//         "angle": 0,
//         "text": "Helps with precision!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7675,
//         "y": 75,
//         "angle": 0,
//         "text": "Welcome to Zone 4!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7675,
//         "y": 475,
//         "angle": 0,
//         "text": "Some basic tips and tricks lie ahead!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8275,
//         "y": 550,
//         "angle": 0,
//         "text": "Sticking to walls helps sometimes.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8700,
//         "y": 775,
//         "angle": 0,
//         "text": "Remember - Shift!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7625,
//         "y": 900,
//         "angle": 0,
//         "text": "The following is a Timetrap!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7625,
//         "y": 950,
//         "angle": 0,
//         "text": "You have limited time before",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7625,
//         "y": 975,
//         "angle": 0,
//         "text": "it kills you. This one is very",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7625,
//         "y": 1000,
//         "angle": 0,
//         "text": "lenient, however.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8425,
//         "y": 1525,
//         "angle": 0,
//         "text": "Hold right!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9125,
//         "y": 925,
//         "angle": 0,
//         "text": "Welcome to Zone 5!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9125,
//         "y": 1325,
//         "angle": 0,
//         "text": "This zone has everything we've",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9125,
//         "y": 1350,
//         "angle": 0,
//         "text": "met so far! Good luck!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9300,
//         "y": 725,
//         "angle": 0,
//         "text": "Align on this corner",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9300,
//         "y": 750,
//         "angle": 0,
//         "text": "then hold W/up!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9725,
//         "y": 2075,
//         "angle": 0,
//         "text": "Welcome to Zone 6!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9725,
//         "y": 2475,
//         "angle": 0,
//         "text": "You are now in the second half!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9187.5,
//         "y": 2625,
//         "angle": 0,
//         "text": "this obstacle",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9187.5,
//         "y": 2662.5,
//         "angle": 0,
//         "text": "teleports you",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9725,
//         "y": 2975,
//         "angle": 0,
//         "text": "not all of them are good",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8425,
//         "y": 2925,
//         "angle": 0,
//         "text": "Welcome to Zone 7!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8425,
//         "y": 3325,
//         "angle": 0,
//         "text": "More complicated obstacles",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 8425,
//         "y": 3350,
//         "angle": 0,
//         "text": "start to appear now!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7800,
//         "y": 3575,
//         "angle": 0,
//         "text": "You can fight against conveyors",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7700,
//         "y": 2200,
//         "angle": -0.2,
//         "text": "the blue is bouncy",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7300,
//         "y": 2150,
//         "angle": 0,
//         "text": "it can even send you",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 7300,
//         "y": 2175,
//         "angle": 0,
//         "text": "through obstacles!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6975,
//         "y": 2075,
//         "angle": 0,
//         "text": "^ to go back to save",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6525,
//         "y": 2075,
//         "angle": 0,
//         "text": "Welcome to Zone 8!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6525,
//         "y": 2475,
//         "angle": 0,
//         "text": "You're getting close to the end!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6450,
//         "y": 2675,
//         "angle": 0,
//         "text": "Safes make you immune to",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6450,
//         "y": 2700,
//         "angle": 0,
//         "text": "many ways of death!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 6000,
//         "y": 3125,
//         "angle": -0.28,
//         "text": "Flashing lava pushes you, other lavas don't",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 5300,
//         "y": 2550,
//         "angle": 0.1,
//         "text": "Safes can move",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9300,
//         "y": 800,
//         "angle": 0,
//         "text": "Such alignments are",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 9300,
//         "y": 825,
//         "angle": 0,
//         "text": "useful in hard maps.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 4550,
//         "y": 2950,
//         "angle": 0,
//         "text": "-> then <-",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 3375,
//         "y": 3525,
//         "angle": 0,
//         "text": "Welcome to Zone 9!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 3375,
//         "y": 3925,
//         "angle": 0,
//         "text": "More advanced techniques lie here",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2875,
//         "y": 3375,
//         "angle": 0,
//         "text": "This is a wrap.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2875,
//         "y": 3400,
//         "angle": 0,
//         "text": "Use the fact that",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2875,
//         "y": 3425,
//         "angle": 0,
//         "text": "the player is circular.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2575,
//         "y": 4025,
//         "angle": 0,
//         "text": "Align in the bottom right block",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2575,
//         "y": 4050,
//         "angle": 0,
//         "text": "then hold up and left at the same time",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2575,
//         "y": 4100,
//         "angle": 0,
//         "text": "These are diagonals, and you",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2575,
//         "y": 4125,
//         "angle": 0,
//         "text": "won't be really seeing them for awhile",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2400,
//         "y": 3350,
//         "angle": 0,
//         "text": "This is a straightfly.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 2400,
//         "y": 3400,
//         "angle": 0,
//         "text": "Hold left and spam up!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 1875,
//         "y": 4025,
//         "angle": 0,
//         "text": "These gaps are rather tight.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 1875,
//         "y": 4050,
//         "angle": 0,
//         "text": "However, the player fits just right.",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 1300,
//         "y": 3775,
//         "angle": 0,
//         "text": "Go through when",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 1300,
//         "y": 3800,
//         "angle": 0,
//         "text": "they're far apart",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 925,
//         "y": 2925,
//         "angle": 0,
//         "text": "Welcome to Zone 10!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 925,
//         "y": 3325,
//         "angle": 0,
//         "text": "Good luck! This is it!",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 550,
//         "y": 4300,
//         "angle": 0,
//         "text": "final",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     },
//     {
//         "x": 550,
//         "y": 4325,
//         "angle": 0,
//         "text": "section",
//         "size": 30,
//         "story": false,
//         "element": {
//             "tWidth": 0,
//             "tHeight": 0
//         }
//     }
// ].map(p => {
//     p.type = "text";
//     return p;
// });

// obs.push(...safes, ...texts);

// var alreadyLogged = {};

// var str = '';

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
//         shared.C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = shared.players[shared.selfId];
//             if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {
//                 colors.background="${o.tileColor}"; colors.tile="${o.bgColor}";
//             }
//         },});\n`;
//         counter++;
//     } else if(o.type === 'block' || o.type === 'trans'){
//         o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
//         str += `shared.C(1,[],[20],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
//             cr:(e)=>{
//                 ctx.beginPath();
//                 ctx.lineWidth = 2;
//                 ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.tile" : '"' + (o.hex ?? o.color) + '"'};
//                 ctx.globalAlpha = ${o.type === 'trans' ? o.opaq ?? 1 : (o.color === "#ffffff" ? 0.5 : 1)};
//                 ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
//                 ctx.fill();
//                 ctx.stroke();
//                 ctx.closePath();
//                 ctx.globalAlpha = 1;
//             }
//         });\n`;
//         counter++;
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

