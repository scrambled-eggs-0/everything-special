(async()=>{

    if(window.isServer !== true) await import('/maps/_converter.js');
    else require('./_converter.js');
    {
        let counter = 3000;
    
        const obs = [
            {
                "x": 750,
                "y": 8300,
                "w": 250,
                "h": 450,
                "type": "trans",
                "collide": false,
                "opaq": 0.1,
                "inView": false
            },
            {
                "x": 800,
                "y": 3850,
                "w": 150,
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
                "x": 800,
                "y": 3650,
                "w": 150,
                "h": 200,
                "type": "grav",
                "force": 1000,
                "dir": {
                    "x": 0,
                    "y": 1000
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 800,
                "y": 3700,
                "w": 75,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        3650
                    ],
                    [
                        800,
                        3950
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 3950
                },
                "pointTo": {
                    "x": 800,
                    "y": 3650
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 875,
                "y": 3900,
                "w": 75,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        875,
                        3950
                    ],
                    [
                        875,
                        3650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 875,
                    "y": 3650
                },
                "pointTo": {
                    "x": 875,
                    "y": 3950
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 850,
                "y": 3725,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        3700
                    ],
                    [
                        950,
                        3775
                    ],
                    [
                        925,
                        3775
                    ],
                    [
                        925,
                        3725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 925,
                    "right": 950,
                    "top": 3700,
                    "bottom": 3775
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 800,
                "y": 3875,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        3875
                    ],
                    [
                        825,
                        3875
                    ],
                    [
                        825,
                        3925
                    ],
                    [
                        800,
                        3950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 825,
                    "top": 3875,
                    "bottom": 3950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1450,
                "y": 1100,
                "w": 25,
                "h": 25,
                "type": "tpmove",
                "points": [
                    [
                        1400,
                        1100
                    ],
                    [
                        1525,
                        1100
                    ],
                    [
                        1525,
                        1125
                    ],
                    [
                        1400,
                        1125
                    ]
                ],
                "speed": 750,
                "currentPoint": 0,
                "tpx": 1675,
                "tpy": 1125,
                "pointOn": {
                    "x": 1400,
                    "y": 1100
                },
                "pointTo": {
                    "x": 1525,
                    "y": 1100
                },
                "xv": 750,
                "yv": 0,
                "inView": true
            },
            {
                "x": 1475,
                "y": 1125,
                "w": 25,
                "h": 25,
                "type": "tpmove",
                "points": [
                    [
                        1525,
                        1125
                    ],
                    [
                        1400,
                        1125
                    ],
                    [
                        1400,
                        1100
                    ],
                    [
                        1525,
                        1100
                    ]
                ],
                "speed": 750,
                "currentPoint": 0,
                "tpx": 1975,
                "tpy": 1125,
                "pointOn": {
                    "x": 1525,
                    "y": 1125
                },
                "pointTo": {
                    "x": 1400,
                    "y": 1125
                },
                "xv": -750,
                "yv": 9.184850993605149e-14,
                "inView": true
            },
            {
                "x": 1400,
                "y": 1100,
                "w": 150,
                "h": 600,
                "type": "grav",
                "force": 10000,
                "dir": {
                    "x": 0,
                    "y": -10000
                },
                "direction": "up",
                "inView": true
            },
            {
                "x": 1400,
                "y": 1100,
                "w": 150,
                "h": 500,
                "type": "tornado",
                "spinRadius": 25,
                "inView": true
            },
            {
                "x": 1400,
                "y": 1100,
                "w": 150,
                "h": 550,
                "type": "raxis",
                "rx": true,
                "ry": true,
                "inView": true
            },
            {
                "x": 1375,
                "y": 1075,
                "w": 200,
                "h": 675,
                "color": "#c7c7c7",
                "type": "block",
                "inView": true
            },
            {
                "x": 350,
                "y": 1250,
                "w": 950,
                "h": 250,
                "type": "timetrap",
                "time": 0,
                "maxTime": 11,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 538.3333333334006,
                "y": 1400,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        1400
                    ],
                    [
                        550,
                        1450
                    ],
                    [
                        450,
                        1450
                    ],
                    [
                        450,
                        1400
                    ]
                ],
                "speed": 215,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 450,
                    "y": 1400
                },
                "pointTo": {
                    "x": 550,
                    "y": 1400
                },
                "xv": 215,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1750,
                "y": 941.6666666667743,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1750,
                        1000
                    ],
                    [
                        1750,
                        900
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 900
                },
                "pointTo": {
                    "x": 1750,
                    "y": 1000
                },
                "xv": 1.0715659492539341e-14,
                "yv": 175,
                "inView": true
            },
            {
                "x": 1350,
                "y": 941.6666666667743,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1350,
                        1000
                    ],
                    [
                        1350,
                        900
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1350,
                    "y": 900
                },
                "pointTo": {
                    "x": 1350,
                    "y": 1000
                },
                "xv": 1.0715659492539341e-14,
                "yv": 175,
                "inView": true
            },
            {
                "x": 1450,
                "y": 991.6666666667743,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1450,
                        950
                    ],
                    [
                        1450,
                        900
                    ],
                    [
                        1450,
                        1000
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1450,
                    "y": 900
                },
                "pointTo": {
                    "x": 1450,
                    "y": 1000
                },
                "xv": 1.0715659492539341e-14,
                "yv": 175,
                "inView": true
            },
            {
                "x": 1550,
                "y": 958.3333333332257,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1550,
                        900
                    ],
                    [
                        1550,
                        1000
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1550,
                    "y": 1000
                },
                "pointTo": {
                    "x": 1550,
                    "y": 900
                },
                "xv": 1.0715659492539341e-14,
                "yv": -175,
                "inView": true
            },
            {
                "points": [
                    [
                        1450,
                        900
                    ],
                    [
                        1887.5,
                        900
                    ],
                    [
                        1800,
                        975
                    ],
                    [
                        1350,
                        975
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1887.5,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1650,
                "y": 908.3333333332257,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        950
                    ],
                    [
                        1650,
                        1000
                    ],
                    [
                        1650,
                        900
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1650,
                    "y": 1000
                },
                "pointTo": {
                    "x": 1650,
                    "y": 900
                },
                "xv": 1.0715659492539341e-14,
                "yv": -175,
                "inView": true
            },
            {
                "points": [
                    [
                        1525,
                        900
                    ],
                    [
                        1800,
                        900
                    ],
                    [
                        1712.5,
                        975
                    ],
                    [
                        1612.5,
                        975
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1525,
                    "right": 1800,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 350,
                "y": 1250,
                "w": 50,
                "h": 250,
                "type": "push",
                "dir": "left",
                "max": 900,
                "pushBack": 10,
                "startX": 350,
                "startY": 1250,
                "pusherId": 0.849725518054214,
                "xv": 0,
                "yv": 0,
                "pushing": false,
                "inView": false
            },
            {
                "x": 0,
                "y": 1300,
                "w": 350,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": -850,
                "y": 1350,
                "w": 975,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 1900,
                "w": 362.5,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        900
                    ],
                    [
                        687.5,
                        900
                    ],
                    [
                        687.5,
                        925
                    ],
                    [
                        587.5,
                        912.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 587.5,
                    "right": 687.5,
                    "top": 900,
                    "bottom": 925
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": -50,
                "y": 15625,
                "w": 2100,
                "h": 2375,
                "type": "vinette",
                "ir": 0.05,
                "or": 0.4,
                "o": 1.1,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 1825,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1775,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1725,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1675,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1625,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1575,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1525,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1875,
                "y": 17125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1050,
                "y": 16600,
                "w": 950,
                "h": 100,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": false
            },
            {
                "x": 1000,
                "y": 16825,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 750,
                "y": 16825,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 350,
                "y": 16950,
                "w": 350,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        16900
                    ],
                    [
                        350,
                        17050
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 17050
                },
                "pointTo": {
                    "x": 350,
                    "y": 16900
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 350,
                "y": 16750,
                "w": 350,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        16700
                    ],
                    [
                        350,
                        16850
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 16850
                },
                "pointTo": {
                    "x": 350,
                    "y": 16700
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "points": [
                    [
                        437.5,
                        16700
                    ],
                    [
                        700,
                        16700
                    ],
                    [
                        475,
                        16775
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 437.5,
                    "right": 700,
                    "top": 16700,
                    "bottom": 16775
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        17050
                    ],
                    [
                        700,
                        17100
                    ],
                    [
                        587.5,
                        17100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 587.5,
                    "right": 700,
                    "top": 17050,
                    "bottom": 17100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        17050
                    ],
                    [
                        550,
                        17100
                    ],
                    [
                        350,
                        17100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 550,
                    "top": 17050,
                    "bottom": 17100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1250,
                "y": 16300,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 16375,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 38,
                "rotateSpeed": 90,
                "pivotX": 400,
                "pivotY": 16375,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 400,
                "y": 16375,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1300,
                "y": 15750,
                "w": 200,
                "h": 550,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1290,
                "y": 16150,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 1300,
                "y": 15900,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        15837.5
                    ],
                    [
                        1350,
                        16025
                    ],
                    [
                        1300,
                        16025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1300,
                    "right": 1350,
                    "top": 15837.5,
                    "bottom": 16025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1512.5,
                "y": 15837.5,
                "r": 38,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 38,
                "inView": false
            },
            {
                "x": 1337.5,
                "y": 15825,
                "r": 38,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 38,
                "inView": false
            },
            {
                "x": 1150,
                "y": 15750,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        15700
                    ],
                    [
                        1000,
                        15700
                    ],
                    [
                        1000,
                        15850
                    ],
                    [
                        1150,
                        15850
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 15850
                },
                "pointTo": {
                    "x": 1150,
                    "y": 15700
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1000,
                "y": 15800,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        15850
                    ],
                    [
                        1150,
                        15850
                    ],
                    [
                        1150,
                        15700
                    ],
                    [
                        1000,
                        15700
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1000,
                    "y": 15700
                },
                "pointTo": {
                    "x": 1000,
                    "y": 15850
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 1250,
                "y": 15950,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1125,
                "y": 15825,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 15700,
                "w": 200,
                "h": 200,
                "spawn": {
                    "x": 100,
                    "y": 15800
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        15775
                    ],
                    [
                        100,
                        15850
                    ],
                    [
                        100,
                        15950
                    ],
                    [
                        0,
                        15950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 100,
                    "top": 15775,
                    "bottom": 15950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        75,
                        15700
                    ],
                    [
                        250,
                        15700
                    ],
                    [
                        250,
                        15800
                    ],
                    [
                        150,
                        15800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 75,
                    "right": 250,
                    "top": 15700,
                    "bottom": 15800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1100,
                "y": 12911.666666667395,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1300,
                        13000
                    ],
                    [
                        1100,
                        13000
                    ],
                    [
                        1100,
                        12800
                    ],
                    [
                        1300,
                        12800
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1100,
                    "y": 13000
                },
                "pointTo": {
                    "x": 1100,
                    "y": 12800
                },
                "xv": 1.3164953090834047e-14,
                "yv": -215,
                "inView": false
            },
            {
                "x": 1300,
                "y": 12888.333333332605,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1100,
                        12800
                    ],
                    [
                        1300,
                        12800
                    ],
                    [
                        1300,
                        13000
                    ],
                    [
                        1100,
                        13000
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1300,
                    "y": 12800
                },
                "pointTo": {
                    "x": 1300,
                    "y": 13000
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": false
            },
            {
                "points": [
                    [
                        1187.5,
                        12800
                    ],
                    [
                        1300,
                        13000
                    ],
                    [
                        1200,
                        13000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1187.5,
                    "right": 1300,
                    "top": 12800,
                    "bottom": 13000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1337.5,
                        12787.5
                    ],
                    [
                        1300,
                        13000
                    ],
                    [
                        1187.5,
                        12800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1187.5,
                    "right": 1337.5,
                    "top": 12787.5,
                    "bottom": 13000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 650,
                "y": 14100,
                "w": 250,
                "h": 200,
                "type": "vinette",
                "ir": 0.15,
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
                "x": 650,
                "y": 13500,
                "w": 250,
                "h": 600,
                "type": "vinette",
                "ir": 0.2,
                "or": 0.7,
                "o": 1,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 1066.666666666506,
                "y": 13250,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        13250
                    ],
                    [
                        1000,
                        13250
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1000,
                    "y": 13250
                },
                "pointTo": {
                    "x": 1150,
                    "y": 13250
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1083.3333333334954,
                "y": 13150,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        13150
                    ],
                    [
                        1150,
                        13150
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 13150
                },
                "pointTo": {
                    "x": 1000,
                    "y": 13150
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        13150
                    ],
                    [
                        1250,
                        13150
                    ],
                    [
                        1250,
                        13350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1250,
                    "top": 13150,
                    "bottom": 13350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 550,
                "y": 12800,
                "w": 500,
                "h": 250,
                "type": "timetrap",
                "time": 0,
                "maxTime": 3.5,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 1050,
                "y": 12950,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        12950
                    ],
                    [
                        800,
                        12950
                    ],
                    [
                        725,
                        13000
                    ],
                    [
                        700,
                        13000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 800,
                    "top": 12950,
                    "bottom": 13000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 500,
                "y": 13075,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 875,
                "y": 12800,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1400,
                "y": 13100,
                "r": 62.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 62.5,
                "inView": false
            },
            {
                "x": 1300,
                "y": 12750,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1100,
                "y": 11250,
                "w": 150,
                "h": 300,
                "type": "trans",
                "collide": false,
                "opaq": 0.3,
                "inView": false
            },
            {
                "x": 1183.3333333335486,
                "y": 11250,
                "w": 150,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        1100,
                        11250
                    ],
                    [
                        1400,
                        11250
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1400,
                    "y": 11250
                },
                "pointTo": {
                    "x": 1100,
                    "y": 11250
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1237.5,
                "y": 11337.5,
                "r": 40,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 40,
                "inView": false
            },
            {
                "x": 1316.6666666664514,
                "y": 11400,
                "w": 150,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        1400,
                        11400
                    ],
                    [
                        1100,
                        11400
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1100,
                    "y": 11400
                },
                "pointTo": {
                    "x": 1400,
                    "y": 11400
                },
                "xv": 250,
                "yv": 0,
                "inView": false,
                specialLavaPOLS: true,
            },
            {
                "points": [
                    [
                        1100,
                        11525
                    ],
                    [
                        1150,
                        11550
                    ],
                    [
                        1187.5,
                        11662.5
                    ],
                    [
                        1100,
                        11650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1187.5,
                    "top": 11525,
                    "bottom": 11662.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1400,
                "y": 11700,
                "w": 300,
                "h": 50,
                "type": "rotate-lava",
                "angle": 6,
                "rotateSpeed": 180,
                "pivotX": 1400,
                "pivotY": 11700,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 152.0690632574555,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "points": [
                    [
                        1237.5,
                        11725
                    ],
                    [
                        1400,
                        11725
                    ],
                    [
                        1337.5,
                        11762.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1237.5,
                    "right": 1400,
                    "top": 11725,
                    "bottom": 11762.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1300,
                "y": 11250,
                "w": 250,
                "h": 295,
                "type": "trans",
                "collide": true,
                "opaq": 0.8,
                "inView": false
            },
            {
                "x": 1212.5,
                "y": 11362.5,
                "r": 40,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 40,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        11350
                    ],
                    [
                        1250,
                        11450
                    ],
                    [
                        1175,
                        11425
                    ],
                    [
                        1175,
                        11375
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1250,
                    "top": 11350,
                    "bottom": 11450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1216.6666666665674,
                "y": 10950,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        900,
                        10950
                    ],
                    [
                        1075,
                        10950
                    ],
                    [
                        1250,
                        10950
                    ],
                    [
                        1075,
                        10950
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1075,
                    "y": 10950
                },
                "pointTo": {
                    "x": 1250,
                    "y": 10950
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        10950
                    ],
                    [
                        1250,
                        11175
                    ],
                    [
                        1200,
                        11150
                    ],
                    [
                        1162.5,
                        11025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1162.5,
                    "right": 1250,
                    "top": 10950,
                    "bottom": 11175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        975,
                        11050
                    ],
                    [
                        1087.5,
                        11100
                    ],
                    [
                        975,
                        11100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 975,
                    "right": 1087.5,
                    "top": 11050,
                    "bottom": 11100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 975,
                "y": 11100,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 700,
                "y": 11066.666666668389,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        10750
                    ],
                    [
                        700,
                        11100
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 10750
                },
                "pointTo": {
                    "x": 700,
                    "y": 11100
                },
                "xv": 1.5308084989341916e-14,
                "yv": 250,
                "inView": false
            },
            {
                "x": 800,
                "y": 10783.333333331611,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        11100
                    ],
                    [
                        800,
                        10750
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 11100
                },
                "pointTo": {
                    "x": 800,
                    "y": 10750
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 725,
                "y": 10950,
                "w": 50,
                "h": 200,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        775,
                        11100
                    ],
                    [
                        1100,
                        11100
                    ],
                    [
                        1100,
                        11150
                    ],
                    [
                        725,
                        11150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 725,
                    "right": 1100,
                    "top": 11100,
                    "bottom": 11150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1187.5,
                "y": 10637.5,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 800,
                "y": 10250,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 850,
                "y": 10200,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 25,
                "y": 8075,
                "w": 1675,
                "h": 1875,
                "type": "vinette",
                "ir": 0.2,
                "or": 0.6,
                "o": 0.5,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 250,
                "y": 8800,
                "w": 50,
                "h": 250,
                "type": "lavamove",
                "points": [
                    [
                        200,
                        8800
                    ],
                    [
                        400,
                        8800
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 8800
                },
                "pointTo": {
                    "x": 200,
                    "y": 8800
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 200,
                "y": 9050,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        8800
                    ],
                    [
                        250,
                        8800
                    ],
                    [
                        250,
                        9050
                    ],
                    [
                        250,
                        9100
                    ],
                    [
                        200,
                        9050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 200,
                    "right": 250,
                    "top": 8800,
                    "bottom": 9100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 450,
                "y": 8950,
                "w": 50,
                "h": 250,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        8950
                    ],
                    [
                        600,
                        8950
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 600,
                    "y": 8950
                },
                "pointTo": {
                    "x": 400,
                    "y": 8950
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 300,
                "y": 4825,
                "w": 1675,
                "h": 3250,
                "type": "vinette",
                "ir": 0.3,
                "or": 0.8,
                "o": 0.5,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 675,
                "y": 4675,
                "w": 300,
                "h": 150,
                "type": "vinette",
                "ir": 0.4,
                "or": 0.9,
                "o": 0.5,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 975,
                "y": 3625,
                "w": 850,
                "h": 1150,
                "type": "vinette",
                "ir": 0.4,
                "or": 0.9,
                "o": 0.5,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 1250,
                "y": 17475,
                "w": 62.5,
                "h": 500,
                "type": "trans",
                "collide": false,
                "opaq": 0.3,
                "inView": false
            },
            {
                "x": 1250,
                "y": 9633.333333331611,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        9550
                    ],
                    [
                        1250,
                        9850
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 9850
                },
                "pointTo": {
                    "x": 1250,
                    "y": 9550
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1200,
                "y": 9350,
                "w": 50,
                "h": 200,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        9350
                    ],
                    [
                        1250,
                        9350
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 9350
                },
                "pointTo": {
                    "x": 1150,
                    "y": 9350
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        9362.5
                    ],
                    [
                        1300,
                        9362.5
                    ],
                    [
                        1300,
                        9587.5
                    ],
                    [
                        1250,
                        9612.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 9362.5,
                    "bottom": 9612.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1250,
                "y": 9350,
                "w": 50,
                "h": 12.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 9350,
                "w": 50,
                "h": 250,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 815,
                        "y": 9365,
                        "radius": 15
                    },
                    {
                        "x": 835,
                        "y": 9365,
                        "radius": 15
                    },
                    {
                        "x": 815,
                        "y": 9585,
                        "radius": 15
                    },
                    {
                        "x": 835,
                        "y": 9585,
                        "radius": 15
                    }
                ],
                "rects": [
                    {
                        "x": 815,
                        "y": 9350,
                        "w": 20,
                        "h": 250
                    },
                    {
                        "x": 800,
                        "y": 9365,
                        "w": 50,
                        "h": 220
                    }
                ],
                "roundRadius": 15,
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        9450
                    ],
                    [
                        800,
                        9450
                    ],
                    [
                        800,
                        9550
                    ],
                    [
                        700,
                        9550
                    ],
                    [
                        525,
                        9550
                    ],
                    [
                        550,
                        9500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 525,
                    "right": 800,
                    "top": 9450,
                    "bottom": 9550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        9300
                    ],
                    [
                        675,
                        9300
                    ],
                    [
                        650,
                        9350
                    ],
                    [
                        500,
                        9400
                    ],
                    [
                        475,
                        9400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 475,
                    "right": 675,
                    "top": 9300,
                    "bottom": 9400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 500,
                "y": 9250,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 8950,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        8950
                    ],
                    [
                        600,
                        8950
                    ],
                    [
                        600,
                        9000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 600,
                    "top": 8950,
                    "bottom": 9000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 380,
                "y": 8925,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 650,
                "y": 6666.666666665806,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        650,
                        6700
                    ],
                    [
                        650,
                        6500
                    ]
                ],
                "speed": 100,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 650,
                    "y": 6500
                },
                "pointTo": {
                    "x": 650,
                    "y": 6700
                },
                "xv": 6.123233995736766e-15,
                "yv": 100,
                "inView": false
            },
            {
                "x": 650,
                "y": 6725,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 8600,
                "w": 150,
                "h": 300,
                "type": "trans",
                "collide": false,
                "opaq": 0.5,
                "inView": false
            },
            {
                "x": 700,
                "y": 8800,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 600,
                "y": 8900,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 650,
                "y": 8850,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 550,
                "y": 8650,
                "w": 150,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        550,
                        8600
                    ],
                    [
                        550,
                        8900
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": false,
                "pointOn": {
                    "x": 550,
                    "y": 8900
                },
                "pointTo": {
                    "x": 550,
                    "y": 8600
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 750,
                "y": 8425,
                "w": 25,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        8437.5
                    ],
                    [
                        775,
                        8575
                    ],
                    [
                        750,
                        8550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 750,
                    "right": 775,
                    "top": 8437.5,
                    "bottom": 8575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 750,
                "y": 8575,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 950,
                "y": 8637.5,
                "w": 37.5,
                "h": 37.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 733.3333333332257,
                "y": 8100,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        650,
                        8100
                    ],
                    [
                        850,
                        8100
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 850,
                    "y": 8100
                },
                "pointTo": {
                    "x": 650,
                    "y": 8100
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 8125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        8100
                    ],
                    [
                        950,
                        8100
                    ],
                    [
                        950,
                        8150
                    ],
                    [
                        887.5,
                        8150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 950,
                    "top": 8100,
                    "bottom": 8150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 6687.5,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 687.5,
                "y": 6725,
                "r": 37.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 37.5,
                "inView": false
            },
            {
                "x": 550,
                "y": 6575,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 650,
                "y": 6533.333333334194,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        650,
                        6500
                    ],
                    [
                        650,
                        6700
                    ]
                ],
                "speed": 100,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 650,
                    "y": 6700
                },
                "pointTo": {
                    "x": 650,
                    "y": 6500
                },
                "xv": 6.123233995736766e-15,
                "yv": -100,
                "inView": false
            },
            {
                "x": 900,
                "y": 6450,
                "r": 20,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 20,
                "inView": false
            },
            {
                "x": 1025,
                "y": 6350,
                "r": 45,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 45,
                "inView": false
            },
            {
                "x": 875,
                "y": 6675,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 1000,
                "y": 6700,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 850,
                "y": 6675,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 1000,
                "y": 6350,
                "r": 13,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "x": 1000,
                "y": 6150,
                "w": 50,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        6150
                    ],
                    [
                        1050,
                        6300
                    ],
                    [
                        1050,
                        6750
                    ],
                    [
                        1000,
                        6750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 6150,
                    "bottom": 6750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 850,
                "y": 6150,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 6450,
                "r": 13,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "x": 900,
                "y": 6250,
                "r": 13,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "x": 550,
                "y": 5550,
                "w": 300,
                "h": 500,
                "type": "timetrap",
                "time": 0,
                "maxTime": 10,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        5600
                    ],
                    [
                        850,
                        5700
                    ],
                    [
                        825,
                        5675
                    ],
                    [
                        825,
                        5625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 5600,
                    "bottom": 5700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        5600
                    ],
                    [
                        575,
                        5650
                    ],
                    [
                        550,
                        5700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 575,
                    "top": 5600,
                    "bottom": 5700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 550,
                "y": 5625,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        5850
                    ],
                    [
                        725,
                        5850
                    ],
                    [
                        700,
                        5900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 725,
                    "top": 5850,
                    "bottom": 5900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 650,
                "y": 5800,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 5750,
                "w": 250,
                "h": 100,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 665,
                        "y": 5765,
                        "radius": 15
                    },
                    {
                        "x": 885,
                        "y": 5765,
                        "radius": 15
                    },
                    {
                        "x": 665,
                        "y": 5835,
                        "radius": 15
                    },
                    {
                        "x": 885,
                        "y": 5835,
                        "radius": 15
                    }
                ],
                "rects": [
                    {
                        "x": 665,
                        "y": 5750,
                        "w": 220,
                        "h": 100
                    },
                    {
                        "x": 650,
                        "y": 5765,
                        "w": 250,
                        "h": 70
                    }
                ],
                "roundRadius": 15,
                "inView": false
            },
            {
                "x": 764.6666666665806,
                "y": 4700,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        725,
                        4700
                    ],
                    [
                        900,
                        4700
                    ]
                ],
                "speed": 161,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 900,
                    "y": 4700
                },
                "pointTo": {
                    "x": 725,
                    "y": 4700
                },
                "xv": -161,
                "yv": 1.9716813466272387e-14,
                "inView": false
            },
            {
                "x": 854.6666666665806,
                "y": 4800,
                "w": 50,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        900,
                        4800
                    ],
                    [
                        700,
                        4800
                    ]
                ],
                "speed": 184,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 4800
                },
                "pointTo": {
                    "x": 900,
                    "y": 4800
                },
                "xv": 184,
                "yv": 0,
                "inView": false
            },
            {
                "x": 745.3333333334194,
                "y": 4950,
                "w": 50,
                "h": 250,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        4950
                    ],
                    [
                        900,
                        4950
                    ]
                ],
                "speed": 184,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 900,
                    "y": 4950
                },
                "pointTo": {
                    "x": 700,
                    "y": 4950
                },
                "xv": -184,
                "yv": 2.25335011043113e-14,
                "inView": false
            },
            {
                "x": 854.6666666665806,
                "y": 5200,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        900,
                        5200
                    ],
                    [
                        700,
                        5200
                    ]
                ],
                "speed": 184,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 5200
                },
                "pointTo": {
                    "x": 900,
                    "y": 5200
                },
                "xv": 184,
                "yv": 0,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        5125
                    ],
                    [
                        950,
                        5300
                    ],
                    [
                        937.5,
                        5300
                    ],
                    [
                        937.5,
                        5162.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 937.5,
                    "right": 950,
                    "top": 5125,
                    "bottom": 5300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        4925
                    ],
                    [
                        950,
                        4925
                    ],
                    [
                        950,
                        4950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 950,
                    "top": 4925,
                    "bottom": 4950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        4825
                    ],
                    [
                        950,
                        4925
                    ],
                    [
                        900,
                        4925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 950,
                    "top": 4825,
                    "bottom": 4925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1533.3333333335486,
                "y": 2700,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1350,
                        2700
                    ],
                    [
                        1450,
                        2700
                    ],
                    [
                        1550,
                        2700
                    ],
                    [
                        1450,
                        2700
                    ]
                ],
                "speed": 250,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 1550,
                    "y": 2700
                },
                "pointTo": {
                    "x": 1450,
                    "y": 2700
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1350,
                "y": 2700,
                "w": 100,
                "h": 100,
                "type": "cure",
                "inView": false
            },
            {
                "x": 1366.6666666664514,
                "y": 2900,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1350,
                        2900
                    ],
                    [
                        1450,
                        2900
                    ],
                    [
                        1550,
                        2900
                    ],
                    [
                        1450,
                        2900
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1350,
                    "y": 2900
                },
                "pointTo": {
                    "x": 1450,
                    "y": 2900
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1466.6666666664514,
                "y": 2800,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1350,
                        2800
                    ],
                    [
                        1450,
                        2800
                    ],
                    [
                        1550,
                        2800
                    ],
                    [
                        1450,
                        2800
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1450,
                    "y": 2800
                },
                "pointTo": {
                    "x": 1550,
                    "y": 2800
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1550,
                "y": 2700,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1700,
                "y": 2600,
                "w": 50,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1725,
                        2425
                    ],
                    [
                        1750,
                        2425
                    ],
                    [
                        1750,
                        2625
                    ],
                    [
                        1700,
                        2600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1700,
                    "right": 1750,
                    "top": 2425,
                    "bottom": 2625
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1725,
                "y": 2400,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1175,
                "y": 3125,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1000,
                "y": 3425,
                "w": 300,
                "h": 50,
                "type": "rotate-lava",
                "angle": -1064.2500000000155,
                "rotateSpeed": -90,
                "pivotX": 1000,
                "pivotY": 3425,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 152.0690632574555,
                "unSim": 11.841666666666635,
                "inView": false
            },
            {
                "x": 500,
                "y": 4050,
                "w": 200,
                "h": 50,
                "type": "rotate-lava",
                "angle": -2017.5000000000164,
                "rotateSpeed": -180,
                "pivotX": 500,
                "pivotY": 4050,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 103.07764064044152,
                "unSim": 12.458333333333266,
                "inView": false
            },
            {
                "x": 500,
                "y": 4025,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 100,
                "y": 4100,
                "w": 200,
                "h": 50,
                "type": "rotate-lava",
                "angle": 2011.500000000016,
                "rotateSpeed": 180,
                "pivotX": 100,
                "pivotY": 4100,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 103.07764064044152,
                "unSim": 12.491666666666598,
                "inView": false
            },
            {
                "x": 300,
                "y": 4050,
                "w": 200,
                "h": 50,
                "type": "rotate-lava",
                "angle": 2017.5000000000164,
                "rotateSpeed": 180,
                "pivotX": 300,
                "pivotY": 4050,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 103.07764064044152,
                "unSim": 12.458333333333266,
                "inView": false
            },
            {
                "x": 0,
                "y": 3850,
                "w": 600,
                "h": 50,
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
                        275,
                        3875
                    ],
                    [
                        250,
                        3900
                    ],
                    [
                        225,
                        3900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 225,
                    "right": 275,
                    "top": 3875,
                    "bottom": 3900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 500,
                "y": 3950,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 50,
                "y": 3900,
                "w": 750,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 100,
                "y": 3975,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 400,
                "y": 3800,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 300,
                "y": 2700,
                "w": 350,
                "h": 350,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 325,
                "y": 2725,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 250,
                "y": 2650,
                "w": 50,
                "h": 1000,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 625,
                "y": 2725,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 475,
                "y": 2875,
                "w": 300,
                "h": 55,
                "type": "rotatingsafe",
                "angle": 1826.2500000000177,
                "rotateSpeed": 150,
                "pivotX": 475,
                "pivotY": 2875,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 152.5,
                "unSim": 11.491666666666655,
                "inView": false
            },
            {
                "x": 462.5,
                "y": 2937.5,
                "w": 25,
                "h": 21.875,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 390.625,
                "y": 2862.5,
                "w": 21.875,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 462.5,
                "y": 2790.625,
                "w": 25,
                "h": 46.875,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 537.5,
                "y": 2862.5,
                "w": 21.875,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 475,
                "y": 2875,
                "radius": 75,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 300,
                "y": 3233.3333333331484,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        300,
                        3150
                    ],
                    [
                        400,
                        3150
                    ],
                    [
                        400,
                        3250
                    ],
                    [
                        300,
                        3250
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 300,
                    "y": 3250
                },
                "pointTo": {
                    "x": 300,
                    "y": 3150
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 500,
                "y": 3233.33333333308,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        500,
                        3150
                    ],
                    [
                        600,
                        3150
                    ],
                    [
                        600,
                        3250
                    ],
                    [
                        500,
                        3250
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 500,
                    "y": 3250
                },
                "pointTo": {
                    "x": 500,
                    "y": 3150
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 550,
                "y": 3150,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 0,
                "y": 2000,
                "w": 200,
                "h": 1650,
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
                "x": 0,
                "y": 2000,
                "w": 200,
                "h": 1650,
                "type": "raxis",
                "rx": false,
                "ry": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 2400,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 187.5,
                "y": 2662.5,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 2150,
                "w": 50,
                "h": 1500,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 3600,
                "r": 37.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 37.5,
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        2325
                    ],
                    [
                        200,
                        2400
                    ],
                    [
                        112.5,
                        2400
                    ],
                    [
                        112.5,
                        2350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 112.5,
                    "right": 200,
                    "top": 2325,
                    "bottom": 2400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1012.5,
                        2275
                    ],
                    [
                        1037.5,
                        2275
                    ],
                    [
                        1025,
                        2350
                    ],
                    [
                        1012.5,
                        2350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1012.5,
                    "right": 1037.5,
                    "top": 2275,
                    "bottom": 2350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1300,
                "y": 2450,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2287.5,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1300,
                "y": 2287.5,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1287.5,
                "y": 2262.5,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1162.5,
                "y": 2262.5,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2050,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 1200,
                "y": 2112.5,
                "w": 50,
                "h": 75,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        2112.5
                    ],
                    [
                        1250,
                        2112.5
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 2112.5
                },
                "pointTo": {
                    "x": 1150,
                    "y": 2112.5
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1225,
                "y": 2150,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1625,
                "y": 1075,
                "w": 400,
                "h": 950,
                "type": "vinette",
                "ir": 0.1,
                "or": 0.4,
                "o": 0.6,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": true
            },
            {
                "x": 1400,
                "y": 1700,
                "w": 150,
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
                "points": [
                    [
                        725,
                        1300
                    ],
                    [
                        750,
                        1300
                    ],
                    [
                        800,
                        1350
                    ],
                    [
                        687.5,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 687.5,
                    "right": 800,
                    "top": 1300,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 725,
                "y": 1350,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 587.5,
                "y": 1250,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": -50,
                "y": 1025,
                "w": 225,
                "h": 50,
                "type": "rotate-lava",
                "angle": 2308.7499999999877,
                "rotateSpeed": 150,
                "pivotX": -50,
                "pivotY": 1025,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 115.2443057161611,
                "unSim": 8.27500000000017,
                "inView": false
            },
            {
                "x": 300,
                "y": 900,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": 225,
                "y": 1050,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": 250.26000403571777,
                "y": 986.5899858749838,
                "w": 75,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        275,
                        900
                    ],
                    [
                        225,
                        1075
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 225,
                    "y": 1075
                },
                "pointTo": {
                    "x": 275,
                    "y": 900
                },
                "xv": 41.208169184606696,
                "yv": -144.22859214612348,
                "inView": true
            },
            {
                "x": 199.73999596428226,
                "y": 988.4100141250163,
                "w": 75,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        175,
                        1075
                    ],
                    [
                        225,
                        900
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 225,
                    "y": 900
                },
                "pointTo": {
                    "x": 175,
                    "y": 1075
                },
                "xv": -41.20816918460671,
                "yv": 144.22859214612348,
                "inView": true
            },
            {
                "x": 87.5,
                "y": 1025,
                "radius": 37.5,
                "radius2": 50,
                "type": "lava-oval",
                "canCollide": true,
                "renderType": "oval",
                "inView": false
            },
            {
                "x": 425,
                "y": 1075,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": true
            },
            {
                "points": [
                    [
                        225,
                        1100
                    ],
                    [
                        350,
                        1125
                    ],
                    [
                        275,
                        1150
                    ],
                    [
                        200,
                        1125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 200,
                    "right": 350,
                    "top": 1100,
                    "bottom": 1150
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        50,
                        1025
                    ],
                    [
                        525,
                        1100
                    ],
                    [
                        450,
                        1150
                    ],
                    [
                        50,
                        1075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 50,
                    "right": 525,
                    "top": 1025,
                    "bottom": 1150
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1225,
                "y": 1825,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 1089.375000000009,
                "rotateSpeed": 75,
                "pivotX": 1225,
                "pivotY": 1825,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 9.141666666666788,
                "inView": false
            },
            {
                "points": [
                    [
                        1225,
                        1775
                    ],
                    [
                        1300,
                        1825
                    ],
                    [
                        1225,
                        1875
                    ],
                    [
                        1150,
                        1825
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1300,
                    "top": 1775,
                    "bottom": 1875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 350,
                "y": 1700,
                "w": 650,
                "h": 200,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        1850
                    ],
                    [
                        600,
                        1900
                    ],
                    [
                        550,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 600,
                    "top": 1850,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1800,
                "y": 250,
                "w": 150,
                "h": 650,
                "type": "grav",
                "force": 9000,
                "dir": {
                    "x": 0,
                    "y": 9000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 1800,
                "y": 250,
                "w": 150,
                "h": 650,
                "type": "raxis",
                "rx": false,
                "ry": true,
                "inView": true
            },
            {
                "x": 1925,
                "y": 550,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 1600,
                "y": 0,
                "w": 150,
                "h": 750,
                "type": "grav",
                "force": 9000,
                "dir": {
                    "x": 0,
                    "y": -9000
                },
                "direction": "up",
                "inView": true
            },
            {
                "x": 1600,
                "y": 0,
                "w": 150,
                "h": 750,
                "type": "raxis",
                "rx": false,
                "ry": true,
                "inView": true
            },
            {
                "x": -25,
                "y": -25,
                "w": 250,
                "h": 250,
                "type": "speed",
                "speedInc": 0.15,
                "inView": false
            },
            {
                "x": 1400,
                "y": 50,
                "w": 150,
                "h": 100,
                "type": "timetrap",
                "time": 0,
                "maxTime": 0.75,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 1650,
                "y": 1100,
                "w": 350,
                "h": 900,
                "type": "size",
                "size": 5,
                "inView": true
            },
            {
                "x": 1870,
                "y": 1295,
                "r": 15,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1975,
                "y": 1325,
                "r": 15,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1250,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1700,
                        1200
                    ],
                    [
                        1700,
                        1350
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1700,
                    "y": 1350
                },
                "pointTo": {
                    "x": 1700,
                    "y": 1200
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1400,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1700,
                        1350
                    ],
                    [
                        1700,
                        1500
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1700,
                    "y": 1500
                },
                "pointTo": {
                    "x": 1700,
                    "y": 1350
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1500,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        1475
                    ],
                    [
                        1800,
                        1500
                    ],
                    [
                        1700,
                        1500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1700,
                    "right": 1800,
                    "top": 1475,
                    "bottom": 1500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1650,
                "y": 1600,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1650,
                        1670
                    ],
                    [
                        1662.5,
                        1662.5
                    ],
                    [
                        1650,
                        1680
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1662.5,
                    "top": 1662.5,
                    "bottom": 1680
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1650,
                        1575
                    ],
                    [
                        1675,
                        1600
                    ],
                    [
                        1650,
                        1600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1675,
                    "top": 1575,
                    "bottom": 1600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1775,
                        1550
                    ],
                    [
                        1800,
                        1550
                    ],
                    [
                        1800,
                        1575
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1775,
                    "right": 1800,
                    "top": 1550,
                    "bottom": 1575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1690,
                "y": 1710,
                "w": 10,
                "h": 30,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1787.5,
                "y": 1700,
                "r": 10,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "x": 1710,
                "y": 1650,
                "w": 30,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1650,
                "w": 20,
                "h": 20,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1770,
                "w": 10,
                "h": 30,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1660,
                        1770
                    ],
                    [
                        1675,
                        1800
                    ],
                    [
                        1660,
                        1800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1660,
                    "right": 1675,
                    "top": 1770,
                    "bottom": 1800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1775,
                        1900
                    ],
                    [
                        1800,
                        1900
                    ],
                    [
                        1800,
                        1950
                    ],
                    [
                        1775,
                        1950
                    ],
                    [
                        1760,
                        1925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1760,
                    "right": 1800,
                    "top": 1900,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1797.5,
                "y": 1755,
                "radius": 12.5,
                "radius2": 30,
                "type": "lava-oval",
                "canCollide": true,
                "renderType": "oval",
                "inView": false
            },
            {
                "x": 1625,
                "y": 1350,
                "w": 90,
                "h": 50,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 1640,
                        "y": 1365,
                        "radius": 15
                    },
                    {
                        "x": 1700,
                        "y": 1365,
                        "radius": 15
                    },
                    {
                        "x": 1640,
                        "y": 1385,
                        "radius": 15
                    },
                    {
                        "x": 1700,
                        "y": 1385,
                        "radius": 15
                    }
                ],
                "rects": [
                    {
                        "x": 1640,
                        "y": 1350,
                        "w": 60,
                        "h": 50
                    },
                    {
                        "x": 1625,
                        "y": 1365,
                        "w": 90,
                        "h": 20
                    }
                ],
                "roundRadius": 15,
                "inView": false
            },
            {
                "x": 800,
                "y": 1750,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 750,
                "y": 1725,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 675,
                "y": 1875,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 500,
                "y": 1725,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 0,
                "y": 1700,
                "w": 350,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 270,
                "y": 1800,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 190,
                "y": 1800,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        1400
                    ],
                    [
                        525,
                        1400
                    ],
                    [
                        500,
                        1425
                    ],
                    [
                        350,
                        1450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 525,
                    "top": 1400,
                    "bottom": 1450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        1310
                    ],
                    [
                        420,
                        1310
                    ],
                    [
                        450,
                        1350
                    ],
                    [
                        350,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 450,
                    "top": 1310,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        1450
                    ],
                    [
                        660,
                        1450
                    ],
                    [
                        700,
                        1500
                    ],
                    [
                        625,
                        1500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 600,
                    "right": 700,
                    "top": 1450,
                    "bottom": 1500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        1400
                    ],
                    [
                        1025,
                        1400
                    ],
                    [
                        975,
                        1450
                    ],
                    [
                        925,
                        1450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 1025,
                    "top": 1400,
                    "bottom": 1450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 950,
                "y": 1404,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 47,
                "inView": false
            },
            {
                "x": 550,
                "y": 1250,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": true
            },
            {
                "points": [
                    [
                        850,
                        1250
                    ],
                    [
                        1050,
                        1250
                    ],
                    [
                        1025,
                        1300
                    ],
                    [
                        900,
                        1300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 1050,
                    "top": 1250,
                    "bottom": 1300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 900,
                "y": 1225,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": true
            },
            {
                "points": [
                    [
                        0,
                        1150
                    ],
                    [
                        150,
                        1175
                    ],
                    [
                        150,
                        1200
                    ],
                    [
                        0,
                        1200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 150,
                    "top": 1150,
                    "bottom": 1200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 400,
                "y": 925,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": true
            },
            {
                "x": 0,
                "y": 887.5,
                "radius": 50,
                "radius2": 37.5,
                "type": "lava-oval",
                "canCollide": true,
                "renderType": "oval",
                "inView": false
            },
            {
                "x": 550,
                "y": 1037.5,
                "w": 50,
                "h": 125,
                "type": "rotate-lava",
                "angle": -22.5,
                "rotateSpeed": 0,
                "pivotX": 550,
                "pivotY": 1037.5,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 67.3145600891813,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 750,
                "y": 850,
                "w": 50,
                "h": 150,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 774,
                        "y": 874,
                        "radius": 24
                    },
                    {
                        "x": 776,
                        "y": 874,
                        "radius": 24
                    },
                    {
                        "x": 774,
                        "y": 976,
                        "radius": 24
                    },
                    {
                        "x": 776,
                        "y": 976,
                        "radius": 24
                    }
                ],
                "rects": [
                    {
                        "x": 774,
                        "y": 850,
                        "w": 2,
                        "h": 150
                    },
                    {
                        "x": 750,
                        "y": 874,
                        "w": 50,
                        "h": 102
                    }
                ],
                "roundRadius": 24,
                "inView": true
            },
            {
                "x": 925,
                "y": 1150,
                "w": 75,
                "h": 75,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 943,
                        "y": 1168,
                        "radius": 18
                    },
                    {
                        "x": 982,
                        "y": 1168,
                        "radius": 18
                    },
                    {
                        "x": 943,
                        "y": 1207,
                        "radius": 18
                    },
                    {
                        "x": 982,
                        "y": 1207,
                        "radius": 18
                    }
                ],
                "rects": [
                    {
                        "x": 943,
                        "y": 1150,
                        "w": 39,
                        "h": 75
                    },
                    {
                        "x": 925,
                        "y": 1168,
                        "w": 75,
                        "h": 39
                    }
                ],
                "roundRadius": 18,
                "inView": true
            },
            {
                "x": 1200,
                "y": 1150,
                "w": 75,
                "h": 75,
                "type": "roundedlava",
                "circles": [
                    {
                        "x": 1218,
                        "y": 1168,
                        "radius": 18
                    },
                    {
                        "x": 1257,
                        "y": 1168,
                        "radius": 18
                    },
                    {
                        "x": 1218,
                        "y": 1207,
                        "radius": 18
                    },
                    {
                        "x": 1257,
                        "y": 1207,
                        "radius": 18
                    }
                ],
                "rects": [
                    {
                        "x": 1218,
                        "y": 1150,
                        "w": 39,
                        "h": 75
                    },
                    {
                        "x": 1200,
                        "y": 1168,
                        "w": 75,
                        "h": 39
                    }
                ],
                "roundRadius": 18,
                "inView": true
            },
            {
                "x": 1450,
                "y": 150,
                "radius": 25,
                "radius2": 50,
                "type": "lava-oval",
                "canCollide": true,
                "renderType": "oval",
                "inView": false
            },
            {
                "x": 994.704327236937,
                "y": 17814.177379057288,
                "w": 100,
                "h": 50,
                "type": "rotate-lava",
                "angle": 132,
                "rotateSpeed": -90,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 120,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 175.90169943749476,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 901.0260423466968,
                "y": 17918.21765462412,
                "w": 25,
                "h": 50,
                "type": "rotate-lava",
                "angle": 132,
                "rotateSpeed": -90,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 260,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 287.95084971874735,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1200,
                "y": 16950,
                "w": 250,
                "h": 25,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 90,
                "pivotX": 1200,
                "pivotY": 16950,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 125.62344526401112,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1200,
                "y": 16950,
                "w": 250,
                "h": 25,
                "type": "rotate-lava",
                "angle": 93,
                "rotateSpeed": 90,
                "pivotX": 1200,
                "pivotY": 16950,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 125.62344526401112,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 200,
                "y": 16700,
                "w": 50,
                "h": 75,
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
                        950,
                        16975
                    ],
                    [
                        950,
                        17050
                    ],
                    [
                        825,
                        17050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 825,
                    "right": 950,
                    "top": 16975,
                    "bottom": 17050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 850,
                "y": 16425,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 7,
                "rotateSpeed": -90,
                "pivotX": 850,
                "pivotY": 16425,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 650,
                "y": 16475,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -3,
                "rotateSpeed": -90,
                "pivotX": 650,
                "pivotY": 16475,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 700,
                "y": 15975,
                "w": 300,
                "h": 50,
                "type": "rotate-lava",
                "angle": 3,
                "rotateSpeed": 90,
                "pivotX": 700,
                "pivotY": 15975,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 152.0690632574555,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 700,
                "y": 16000,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 750,
                "y": 15700,
                "w": 250,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 716.6666666667743,
                "y": 12250,
                "w": 25,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        650,
                        12250
                    ],
                    [
                        875,
                        12250
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 650,
                    "y": 12250
                },
                "pointTo": {
                    "x": 875,
                    "y": 12250
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 808.3333333332257,
                "y": 12400,
                "w": 25,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        875,
                        12400
                    ],
                    [
                        650,
                        12400
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 875,
                    "y": 12400
                },
                "pointTo": {
                    "x": 650,
                    "y": 12400
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 0,
                "y": 15000,
                "w": 2000,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 12900,
                "w": 400,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 12925,
                "r": 75,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 75,
                "inView": false
            },
            {
                "x": 400,
                "y": 10550,
                "w": 400,
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
                "x": 350,
                "y": 6950,
                "w": 250,
                "h": 1100,
                "type": "timetrap",
                "time": 0,
                "maxTime": 17,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 400,
                "y": 7600,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 7225,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 10025,
                "w": 100,
                "h": 100,
                "spawn": {
                    "x": 1275,
                    "y": 10075
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 8425,
                "w": 175,
                "h": 25,
                "type": "rotate-lava",
                "angle": 6,
                "rotateSpeed": 180,
                "pivotX": 887.5,
                "pivotY": 8425,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 88.38834764831844,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 8587.5,
                "w": 175,
                "h": 25,
                "type": "rotate-lava",
                "angle": -6,
                "rotateSpeed": -180,
                "pivotX": 887.5,
                "pivotY": 8587.5,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 88.38834764831844,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 8575,
                "w": 125,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 8587.5,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 750,
                "y": 8412.5,
                "w": 137.5,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 8425,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 850,
                "y": 8300,
                "r": 37.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 37.5,
                "inView": false
            },
            {
                "x": 700,
                "y": 5287.5,
                "w": 250,
                "h": 12.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 4900,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 2700,
                "w": 150,
                "h": 100,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 817.3333333332903,
                "y": 2187.5,
                "w": 25,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        850,
                        2187.5
                    ],
                    [
                        675,
                        2187.5
                    ]
                ],
                "speed": 238,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 850,
                    "y": 2187.5
                },
                "pointTo": {
                    "x": 675,
                    "y": 2187.5
                },
                "xv": -238,
                "yv": 2.914659381970701e-14,
                "inView": false
            },
            {
                "x": 775,
                "y": 2300,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 2125,
                "w": 25,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 2275,
                "w": 12.5,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 3500,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 3875,
                "w": 100,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 2850,
                "w": 50,
                "h": 250,
                "type": "push",
                "dir": "left",
                "max": 150,
                "pushBack": 10,
                "startX": 800,
                "startY": 2850,
                "pusherId": 0.1623077320458639,
                "xv": 0,
                "yv": 0,
                "pushing": false,
                "inView": false
            },
            {
                "x": 900,
                "y": 2550,
                "w": 250,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1775,
                "y": 2075,
                "w": 100,
                "h": 100,
                "spawn": {
                    "x": 1825,
                    "y": 2125
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 400,
                "y": 1950,
                "w": 250,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        1925
                    ],
                    [
                        400,
                        2000
                    ]
                ],
                "speed": 75,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 2000
                },
                "pointTo": {
                    "x": 400,
                    "y": 1925
                },
                "xv": 4.592425496802574e-15,
                "yv": -75,
                "inView": false
            },
            {
                "x": 400,
                "y": 1966.666666666457,
                "w": 250,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        1925
                    ],
                    [
                        400,
                        2050
                    ]
                ],
                "speed": 125,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 2050
                },
                "pointTo": {
                    "x": 400,
                    "y": 1925
                },
                "xv": 7.654042494670958e-15,
                "yv": -125,
                "inView": false
            },
            {
                "x": 400,
                "y": 1983.3333333333574,
                "w": 250,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        1925
                    ],
                    [
                        400,
                        2100
                    ]
                ],
                "speed": 175,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 2100
                },
                "pointTo": {
                    "x": 400,
                    "y": 1925
                },
                "xv": 1.0715659492539341e-14,
                "yv": -175,
                "inView": false
            },
            {
                "x": 400,
                "y": 2000,
                "w": 250,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        1925
                    ],
                    [
                        400,
                        2150
                    ]
                ],
                "speed": 225,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 2150
                },
                "pointTo": {
                    "x": 400,
                    "y": 1925
                },
                "xv": 1.3777276490407723e-14,
                "yv": -225,
                "inView": false
            },
            {
                "x": 0,
                "y": 1950,
                "w": 1350,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 2375,
                "w": 150,
                "h": 25,
                "type": "rotate-lava",
                "angle": 2518.5000000000064,
                "rotateSpeed": 180,
                "pivotX": 1225,
                "pivotY": 2375,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 76.03453162872775,
                "unSim": 9.675000000000091,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1600,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1700,
                        1550
                    ],
                    [
                        1750,
                        1550
                    ],
                    [
                        1750,
                        1650
                    ],
                    [
                        1700,
                        1650
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1700,
                    "y": 1650
                },
                "pointTo": {
                    "x": 1700,
                    "y": 1550
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1161.6666666664828,
                "y": 1300,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        1300
                    ],
                    [
                        1000,
                        1300
                    ]
                ],
                "speed": 215,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 1300
                },
                "pointTo": {
                    "x": 1000,
                    "y": 1300
                },
                "xv": -215,
                "yv": 2.6329906181668095e-14,
                "inView": false
            },
            {
                "x": 1050,
                "y": 1438.333333333388,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1050,
                        1450
                    ],
                    [
                        950,
                        1450
                    ],
                    [
                        950,
                        1400
                    ],
                    [
                        1050,
                        1400
                    ]
                ],
                "speed": 215,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1050,
                    "y": 1400
                },
                "pointTo": {
                    "x": 1050,
                    "y": 1450
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": false
            },
            {
                "x": 800,
                "y": 1411.6666666666672,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        1400
                    ],
                    [
                        900,
                        1400
                    ],
                    [
                        900,
                        1450
                    ],
                    [
                        800,
                        1450
                    ]
                ],
                "speed": 215,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 1450
                },
                "pointTo": {
                    "x": 800,
                    "y": 1400
                },
                "xv": 1.3164953090834047e-14,
                "yv": -215,
                "inView": false
            },
            {
                "x": 350,
                "y": 1350,
                "w": 850,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 1100,
                "w": 200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1075,
                "y": 900,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "x": -25,
                "y": -25,
                "w": 250,
                "h": 250,
                "type": "vinette",
                "ir": 0.02,
                "or": 0.06,
                "o": 1.06,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 0,
                "y": 100,
                "w": 50,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 125,
                "y": 0,
                "w": 25,
                "h": 75,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 150,
                "w": 100,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 175,
                "y": 0,
                "w": 25,
                "h": 125,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 0,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 200,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 0,
                "w": 1000,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 0,
                "y": 250,
                "w": 250,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": -50,
                "y": -75,
                "w": 50,
                "h": 325,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": -50,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 150,
                "w": 225,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 0,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 50,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1300,
                "y": 0,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 250,
                "w": 150,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1375,
                "y": 400,
                "w": 125,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1350,
                "y": 550,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1500,
                "y": 300,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1250,
                "y": 561.6666666667246,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        450
                    ],
                    [
                        1250,
                        650
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 650
                },
                "pointTo": {
                    "x": 1250,
                    "y": 450
                },
                "xv": 1.3164953090834047e-14,
                "yv": -215,
                "inView": true
            },
            {
                "x": 1300,
                "y": 538.3333333332774,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1300,
                        650
                    ],
                    [
                        1300,
                        450
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1300,
                    "y": 450
                },
                "pointTo": {
                    "x": 1300,
                    "y": 650
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": true
            },
            {
                "x": 1250,
                "y": 700,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1400,
                "y": 338.3333333333818,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1400,
                        250
                    ],
                    [
                        1400,
                        350
                    ]
                ],
                "speed": 215,
                "currentPoint": 0,
                "collidable": false,
                "pointOn": {
                    "x": 1400,
                    "y": 250
                },
                "pointTo": {
                    "x": 1400,
                    "y": 350
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": true
            },
            {
                "x": 1450,
                "y": 325,
                "r": 12,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12,
                "inView": true
            },
            {
                "x": 1400,
                "y": 600,
                "w": 150,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": true
            },
            {
                "x": 1447.49999999996,
                "y": 627.3686027918791,
                "w": 30,
                "h": 30,
                "type": "rotatingsafe",
                "angle": 8519.999999999953,
                "rotateSpeed": 360,
                "pivotX": 1475,
                "pivotY": 675,
                "distToPivot": 55,
                "canCollide": true,
                "cullingRadius": 76.21320343559643,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 1250,
                "y": 750,
                "w": 200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 0,
                "y": 850,
                "w": 1750,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1600,
                "y": 800,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1750,
                "y": 150,
                "w": 50,
                "h": 750,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1600,
                "y": 0,
                "w": 25,
                "h": 12.5,
                "type": "bounce",
                "effect": 300,
                "inView": false
            },
            {
                "x": 1950,
                "y": 0,
                "w": 50,
                "h": 1100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 200,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 1050,
                "w": 700,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1250,
                "y": 900,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1250,
                "y": 1100,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 350,
                "y": 1200,
                "w": 950,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 800,
                "y": 900,
                "w": 150,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1150,
                "y": 988.3333333333875,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        950,
                        900
                    ],
                    [
                        1150,
                        900
                    ],
                    [
                        1150,
                        1100
                    ],
                    [
                        950,
                        1100
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 900
                },
                "pointTo": {
                    "x": 1150,
                    "y": 1100
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": true
            },
            {
                "x": 850,
                "y": 1025,
                "w": 100,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 950,
                "y": 1011.6666666666091,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        1100
                    ],
                    [
                        950,
                        1100
                    ],
                    [
                        950,
                        900
                    ],
                    [
                        1150,
                        900
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 950,
                    "y": 1100
                },
                "pointTo": {
                    "x": 950,
                    "y": 900
                },
                "xv": 1.3164953090834047e-14,
                "yv": -215,
                "inView": true
            },
            {
                "x": 650,
                "y": 900,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 825,
                "y": 1050,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 700,
                "y": 1050,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 775,
                "y": 1125,
                "radius": 56,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 700,
                "y": 1000,
                "w": 150,
                "h": 100,
                "type": "move",
                "points": [
                    [
                        700,
                        1100
                    ],
                    [
                        700,
                        1000
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 700,
                    "y": 1100
                },
                "pointTo": {
                    "x": 700,
                    "y": 1000
                },
                "xv": 1.8369701987210297e-14,
                "yv": -300,
                "inView": true
            },
            {
                "x": 1.5308084989341915e-15,
                "y": 1200,
                "w": 250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1300,
                "y": 1200,
                "w": 50,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 350,
                "y": 1500,
                "w": 1000,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 137.5,
                "y": 1450,
                "w": 112.5,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 50,
                "y": 1650,
                "w": 1300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 1588.3333333333592,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        0,
                        1550
                    ],
                    [
                        250,
                        1550
                    ],
                    [
                        250,
                        1600
                    ],
                    [
                        0,
                        1600
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 250,
                    "y": 1550
                },
                "pointTo": {
                    "x": 250,
                    "y": 1600
                },
                "xv": 1.3164953090834047e-14,
                "yv": 215,
                "inView": false
            },
            {
                "x": 2.3472396983672515e-15,
                "y": 1561.6666666666408,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        250,
                        1600
                    ],
                    [
                        0,
                        1600
                    ],
                    [
                        0,
                        1550
                    ],
                    [
                        250,
                        1550
                    ]
                ],
                "speed": 215,
                "currentPoint": 1,
                "collidable": false,
                "pointOn": {
                    "x": 0,
                    "y": 1600
                },
                "pointTo": {
                    "x": 0,
                    "y": 1550
                },
                "xv": 1.3164953090834047e-14,
                "yv": -215,
                "inView": false
            },
            {
                "x": 0,
                "y": 1450,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 100,
                "y": 1725,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 1800,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 250,
                "y": 1700,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 210,
                "y": 1790,
                "w": 5,
                "h": 10,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 280,
                "y": 1745,
                "w": 5,
                "h": 5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 90,
                "y": 1755,
                "w": 5,
                "h": 5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 450,
                "y": 1700,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 1700,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 1850,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 1700,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 1800,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 1900,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 1700,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1351,
                "y": 1100,
                "w": 50,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1350,
                "y": 1900,
                "w": 250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 1100,
                "w": 50,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1600,
                "y": 1100,
                "w": 50,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1800,
                "y": 1100,
                "w": 50,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2000,
                "y": 1050,
                "w": 50,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 2000,
                "w": 275,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1875,
                "y": 2000,
                "w": 175,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1150,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1900,
                "y": 1150,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1700,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 1700,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1700,
                        1650
                    ],
                    [
                        1650,
                        1650
                    ],
                    [
                        1650,
                        1750
                    ],
                    [
                        1700,
                        1750
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1700,
                    "y": 1750
                },
                "pointTo": {
                    "x": 1700,
                    "y": 1650
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1650,
                "y": 1800,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1675,
                "y": 1850,
                "w": 50,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        1850
                    ],
                    [
                        1750,
                        1850
                    ]
                ],
                "speed": 75,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 1850
                },
                "pointTo": {
                    "x": 1650,
                    "y": 1850
                },
                "xv": -75,
                "yv": 9.184850993605149e-15,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1200,
                "w": 150,
                "h": 75,
                "type": "switchlava",
                "onTime": 0.65,
                "offTime": 0.65,
                "state": true,
                "timer": 0.38333333333332603,
                "collidable": true,
                "inView": false
            },
            {
                "x": 1975,
                "y": 1275,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1287.5,
                "w": 25,
                "h": 62.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1350,
                "w": 150,
                "h": 150,
                "type": "lava",
                "canCollide": false,
                "inView": false
            },
            {
                "x": 1925,
                "y": 1425,
                "w": 200,
                "h": 37.5,
                "type": "rotatingsafe",
                "angle": 985.5000000000063,
                "rotateSpeed": 60,
                "pivotX": 1925,
                "pivotY": 1425,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 101.74262872562316,
                "unSim": 7.241666666666816,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1400,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1975,
                "y": 1400,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1850,
                "y": 1500,
                "w": 150,
                "h": 450,
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
                "x": 1900,
                "y": 2050,
                "w": 150,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 2050,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1750,
                "y": 2200,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 2150,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1700,
                "y": 2100,
                "w": 50,
                "h": 50,
                "morphId": 0,
                "type": "morphbuttontimed",
                "active": true,
                "time": 4,
                "timer": 4,
                "inView": false
            },
            {
                "x": 1312.5,
                "y": 2062.5,
                "w": 25,
                "h": 25,
                "type": "morphnormal",
                "active": true,
                "morphId": 0,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2000,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 2100,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1525,
                        2100
                    ],
                    [
                        1625,
                        2100
                    ],
                    [
                        1550,
                        2200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1525,
                    "right": 1625,
                    "top": 2100,
                    "bottom": 2200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1700,
                        2175
                    ],
                    [
                        1700,
                        2250
                    ],
                    [
                        1662.5,
                        2225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1662.5,
                    "right": 1700,
                    "top": 2175,
                    "bottom": 2250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        2100
                    ],
                    [
                        1575,
                        2300
                    ],
                    [
                        1500,
                        2300
                    ],
                    [
                        1500,
                        2125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1500,
                    "right": 1575,
                    "top": 2100,
                    "bottom": 2300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1662.5,
                        2225
                    ],
                    [
                        1700,
                        2250
                    ],
                    [
                        1700,
                        2350
                    ],
                    [
                        1675,
                        2350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1662.5,
                    "right": 1700,
                    "top": 2225,
                    "bottom": 2350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1350,
                "y": 2350,
                "w": 400,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        2162.5
                    ],
                    [
                        1400,
                        2250
                    ],
                    [
                        1412.5,
                        2350
                    ],
                    [
                        1350,
                        2350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1412.5,
                    "top": 2162.5,
                    "bottom": 2350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        2125
                    ],
                    [
                        1500,
                        2300
                    ],
                    [
                        1475,
                        2200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1475,
                    "right": 1500,
                    "top": 2125,
                    "bottom": 2300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1450,
                        2050
                    ],
                    [
                        1425,
                        2100
                    ],
                    [
                        1350,
                        2162.5
                    ],
                    [
                        1350,
                        2125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1450,
                    "top": 2050,
                    "bottom": 2162.5
                },
                "renderType": "poly",
                "inView": false
            },
            // {
            //     "x": 1312.5,
            //     "y": 2062.5,
            //     "w": 25,
            //     "h": 25,
            //     "type": "trans",
            //     "collide": false,
            //     "opaq": 0.3,
            //     "inView": false
            // },
            {
                "x": 1100,
                "y": 2000,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2262.5,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1275,
                "y": 2262.5,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2325,
                "w": 62.5,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 2450,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 2475,
                "w": 125,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 2412.5,
                "w": 25,
                "h": 87.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 2400,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 2500,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1775,
                "y": 2075,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#201813",
                "tileColor": "#5c4337",
                "inView": false
            },
            {
                "points": [
                    [
                        1212.5,
                        2325
                    ],
                    [
                        1237.5,
                        2350
                    ],
                    [
                        1237.5,
                        2387.5
                    ],
                    [
                        1212.5,
                        2387.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1212.5,
                    "right": 1237.5,
                    "top": 2325,
                    "bottom": 2387.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1000,
                "y": 2350,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 2000,
                "w": 250,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 2250,
                "w": 162.5,
                "h": 25,
                "type": "rotatingsafe",
                "angle": -1753.125000000003,
                "rotateSpeed": -125,
                "pivotX": 1000,
                "pivotY": 2250,
                "distToPivot": 0,
                "canCollide": true,
                "cullingRadius": 82.2059152372869,
                "unSim": 9.64166666666676,
                "inView": false
            },
            {
                "x": 1000,
                "y": 2250,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        2125
                    ],
                    [
                        1100,
                        2125
                    ],
                    [
                        1100,
                        2212.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1050,
                    "right": 1100,
                    "top": 2125,
                    "bottom": 2212.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        2125
                    ],
                    [
                        1000,
                        2125
                    ],
                    [
                        900,
                        2175
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 1000,
                    "top": 2125,
                    "bottom": 2175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        887.5,
                        2212.5
                    ],
                    [
                        912.5,
                        2400
                    ],
                    [
                        875,
                        2400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 912.5,
                    "top": 2212.5,
                    "bottom": 2400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 750,
                "y": 2400,
                "w": 162.5,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 2550,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 2450,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        2450
                    ],
                    [
                        950,
                        2450
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 950,
                    "y": 2450
                },
                "pointTo": {
                    "x": 800,
                    "y": 2450
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 900,
                "y": 2500,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        950,
                        2500
                    ],
                    [
                        800,
                        2500
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 2500
                },
                "pointTo": {
                    "x": 950,
                    "y": 2500
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 900,
                "y": 2500,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 750,
                "y": 2450,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 2700,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 2800,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 2600,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 2600,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 2750,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        2600
                    ],
                    [
                        800,
                        2750
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 2600
                },
                "pointTo": {
                    "x": 800,
                    "y": 2750
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 700,
                "y": 2750,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        2600
                    ],
                    [
                        700,
                        2750
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 2600
                },
                "pointTo": {
                    "x": 700,
                    "y": 2750
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 775,
                "y": 2675,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 825,
                "y": 2575,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 700,
                "y": 2550,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        2400
                    ],
                    [
                        700,
                        2550
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 2400
                },
                "pointTo": {
                    "x": 700,
                    "y": 2550
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 650,
                "y": 2400,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 2350,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 675,
                "y": 2575,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 400,
                "y": 2600,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 2125,
                "w": 50,
                "h": 525,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 612.5,
                "y": 2325,
                "w": 25,
                "h": 37.5,
                "type": "lavamove",
                "points": [
                    [
                        612.5,
                        2300
                    ],
                    [
                        612.5,
                        2425
                    ],
                    [
                        612.5,
                        2562.5
                    ],
                    [
                        612.5,
                        2425
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 612.5,
                    "y": 2300
                },
                "pointTo": {
                    "x": 612.5,
                    "y": 2425
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 512.5,
                "y": 2550,
                "w": 25,
                "h": 37.5,
                "type": "lavamove",
                "points": [
                    [
                        512.5,
                        2300
                    ],
                    [
                        512.5,
                        2425
                    ],
                    [
                        512.5,
                        2562.5
                    ],
                    [
                        512.5,
                        2425
                    ]
                ],
                "speed": 450,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 512.5,
                    "y": 2562.5
                },
                "pointTo": {
                    "x": 512.5,
                    "y": 2425
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 462.5,
                "y": 2450,
                "w": 25,
                "h": 37.5,
                "type": "lavamove",
                "points": [
                    [
                        462.5,
                        2300
                    ],
                    [
                        462.5,
                        2425
                    ],
                    [
                        462.5,
                        2562.5
                    ],
                    [
                        462.5,
                        2425
                    ]
                ],
                "speed": 450,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 462.5,
                    "y": 2425
                },
                "pointTo": {
                    "x": 462.5,
                    "y": 2562.5
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 562.5,
                "y": 2412.5,
                "w": 25,
                "h": 37.5,
                "type": "lavamove",
                "points": [
                    [
                        562.5,
                        2300
                    ],
                    [
                        562.5,
                        2425
                    ],
                    [
                        562.5,
                        2562.5
                    ],
                    [
                        562.5,
                        2425
                    ]
                ],
                "speed": 450,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 562.5,
                    "y": 2425
                },
                "pointTo": {
                    "x": 562.5,
                    "y": 2300
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 400,
                "y": 2250,
                "w": 250,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 2650,
                "w": 350,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 2100,
                "w": 50,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 723.3333333332257,
                "y": 2250,
                "w": 25,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        2250
                    ],
                    [
                        825,
                        2250
                    ]
                ],
                "speed": 170,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 2250
                },
                "pointTo": {
                    "x": 825,
                    "y": 2250
                },
                "xv": 170,
                "yv": 0,
                "inView": false
            },
            {
                "x": 723.3333333332257,
                "y": 2100,
                "w": 25,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        2100
                    ],
                    [
                        825,
                        2100
                    ]
                ],
                "speed": 170,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 2100
                },
                "pointTo": {
                    "x": 825,
                    "y": 2100
                },
                "xv": 170,
                "yv": 0,
                "inView": false
            },
            {
                "x": 425,
                "y": 2300,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 525,
                "y": 2225,
                "r": 15,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 15,
                "inView": false
            },
            {
                "x": 650,
                "y": 2075,
                "w": 137.5,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 787.5,
                "y": 2050,
                "w": 12.5,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        787.5,
                        2050
                    ],
                    [
                        800,
                        2075
                    ],
                    [
                        675,
                        2075
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 675,
                    "right": 800,
                    "top": 2050,
                    "bottom": 2075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 1550,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 400,
                "y": 2275,
                "w": 50,
                "h": 325,
                "type": "timetrap",
                "time": 0,
                "maxTime": 5,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 800,
                "y": 2550,
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
                "x": 750,
                "y": 2650,
                "w": 50,
                "h": 50,
                "type": "timetrap",
                "time": 0,
                "maxTime": 2,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 650,
                "y": 2550,
                "w": 50,
                "h": 50,
                "type": "timetrap",
                "time": 0,
                "maxTime": 4,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 300,
                "y": 1500,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 1550,
                "w": 1000,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 1100,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": true
            },
            {
                "points": [
                    [
                        650,
                        2275
                    ],
                    [
                        700,
                        2275
                    ],
                    [
                        700,
                        2300
                    ],
                    [
                        687.5,
                        2300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 2275,
                    "bottom": 2300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 3750,
                "w": 600,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 7.654042494670958e-16,
                "y": 3650,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        50,
                        3650
                    ],
                    [
                        125,
                        3675
                    ],
                    [
                        200,
                        3750
                    ],
                    [
                        50,
                        3750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 50,
                    "right": 200,
                    "top": 3650,
                    "bottom": 3750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        2625
                    ],
                    [
                        87.5,
                        2650
                    ],
                    [
                        87.5,
                        2700
                    ],
                    [
                        0,
                        2787.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 87.5,
                    "top": 2625,
                    "bottom": 2787.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        2925
                    ],
                    [
                        200,
                        3000
                    ],
                    [
                        112.5,
                        3000
                    ],
                    [
                        112.5,
                        2950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 112.5,
                    "right": 200,
                    "top": 2925,
                    "bottom": 3000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        3525
                    ],
                    [
                        87.5,
                        3550
                    ],
                    [
                        87.5,
                        3600
                    ],
                    [
                        0,
                        3600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 87.5,
                    "top": 3525,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        3225
                    ],
                    [
                        200,
                        3312.5
                    ],
                    [
                        112.5,
                        3300
                    ],
                    [
                        93.75,
                        3250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 93.75,
                    "right": 200,
                    "top": 3225,
                    "bottom": 3312.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 300,
                "y": 3350,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 3500,
                "w": 50,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 3450,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        300,
                        3400
                    ],
                    [
                        300,
                        3700
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 300,
                    "y": 3700
                },
                "pointTo": {
                    "x": 300,
                    "y": 3400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 500,
                "y": 3450,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        500,
                        3400
                    ],
                    [
                        500,
                        3700
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 500,
                    "y": 3700
                },
                "pointTo": {
                    "x": 500,
                    "y": 3400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 400,
                "y": 3500,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        3400
                    ],
                    [
                        400,
                        3700
                    ]
                ],
                "speed": 300,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 3700
                },
                "pointTo": {
                    "x": 400,
                    "y": 3400
                },
                "xv": 1.8369701987210297e-14,
                "yv": -300,
                "inView": false
            },
            {
                "x": 508.33333333336464,
                "y": 3550,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        300,
                        3550
                    ],
                    [
                        550,
                        3550
                    ]
                ],
                "speed": 125,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 300,
                    "y": 3550
                },
                "pointTo": {
                    "x": 550,
                    "y": 3550
                },
                "xv": 125,
                "yv": 0,
                "inView": false
            },
            {
                "x": 341.6666666666374,
                "y": 3400,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        3400
                    ],
                    [
                        300,
                        3400
                    ]
                ],
                "speed": 125,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 3400
                },
                "pointTo": {
                    "x": 300,
                    "y": 3400
                },
                "xv": -125,
                "yv": 1.5308084989341916e-14,
                "inView": false
            },
            {
                "x": 341.6666666666374,
                "y": 3700,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        3700
                    ],
                    [
                        300,
                        3700
                    ]
                ],
                "speed": 125,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 3700
                },
                "pointTo": {
                    "x": 300,
                    "y": 3700
                },
                "xv": -125,
                "yv": 1.5308084989341916e-14,
                "inView": false
            },
            {
                "x": 700,
                "y": 3150,
                "w": 25,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 3100,
                "w": 400,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 3050,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 3050,
                "w": 300,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 2850,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 2850,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 3000,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 2800,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 2850,
                "w": 50,
                "h": 337.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 925,
                "y": 3100,
                "w": 75,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 825,
                "y": 2850,
                "w": 100,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        2950
                    ],
                    [
                        870,
                        3000
                    ],
                    [
                        825,
                        3100
                    ],
                    [
                        800,
                        3100
                    ],
                    [
                        800,
                        3000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 870,
                    "top": 2950,
                    "bottom": 3100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        880,
                        2850
                    ],
                    [
                        1000,
                        2850
                    ],
                    [
                        1000,
                        3025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 880,
                    "right": 1000,
                    "top": 2850,
                    "bottom": 3025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        2950
                    ],
                    [
                        1000,
                        3100
                    ],
                    [
                        925,
                        3100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 925,
                    "right": 1000,
                    "top": 2950,
                    "bottom": 3100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 750,
                "y": 2850,
                "w": 75,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 3340,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        750,
                        3200
                    ],
                    [
                        750,
                        3550
                    ]
                ],
                "speed": 420,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 750,
                    "y": 3200
                },
                "pointTo": {
                    "x": 750,
                    "y": 3550
                },
                "xv": 2.5717582782094416e-14,
                "yv": 420,
                "inView": false
            },
            {
                "x": 700,
                "y": 3540,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        3400
                    ],
                    [
                        700,
                        3750
                    ]
                ],
                "speed": 420,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 3400
                },
                "pointTo": {
                    "x": 700,
                    "y": 3750
                },
                "xv": 2.5717582782094416e-14,
                "yv": 420,
                "inView": false
            },
            {
                "x": 850,
                "y": 3250,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 3250,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 3600,
                "w": 75,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 3650,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 3800,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 3850,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 116.66666666666418,
                "y": 3800,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        0,
                        3800
                    ],
                    [
                        600,
                        3800
                    ]
                ],
                "speed": 350,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 600,
                    "y": 3800
                },
                "pointTo": {
                    "x": 0,
                    "y": 3800
                },
                "xv": -350,
                "yv": 4.2862637970157365e-14,
                "inView": false
            },
            {
                "x": 50,
                "y": 3950,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 4125,
                "w": 375,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 375,
                "y": 4175,
                "w": 175,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 4150,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 4100,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 4025,
                "w": 50,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 4100,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        912.5,
                        2400
                    ],
                    [
                        950,
                        2400
                    ],
                    [
                        950,
                        2412.5
                    ],
                    [
                        912.5,
                        2450
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 912.5,
                    "right": 950,
                    "top": 2400,
                    "bottom": 2450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        2550
                    ],
                    [
                        412.5,
                        2600
                    ],
                    [
                        400,
                        2600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 400,
                    "right": 412.5,
                    "top": 2550,
                    "bottom": 2600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 4000,
                "w": 250,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 3600,
                "w": 50,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 3600,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 3250,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 3575,
                "w": 250,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 3500,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 3400,
                "w": 175,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 3550,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1025,
                "y": 3275,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 3325,
                "w": 25,
                "h": 225,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 3300,
                "w": 100,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1025,
                "y": 3250,
                "w": 125,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 3000,
                "w": 50,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 3050,
                "w": 50,
                "h": 200,
                "type": "lavamove",
                "points": [
                    [
                        1050,
                        3050
                    ],
                    [
                        1150,
                        3050
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 3050
                },
                "pointTo": {
                    "x": 1050,
                    "y": 3050
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1100,
                "y": 3000,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 2800,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 2700,
                "w": 25,
                "h": 100,
                "type": "movingsafe",
                "points": [
                    [
                        900,
                        2700
                    ],
                    [
                        1025,
                        2700
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "pointOn": {
                    "x": 900,
                    "y": 2700
                },
                "pointTo": {
                    "x": 1025,
                    "y": 2700
                },
                "xv": 300,
                "yv": 0,
                "inView": false
            },
            {
                "x": 905,
                "y": 2707.5,
                "w": 15,
                "h": 50,
                "type": "button",
                "id": 1,
                "active": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2700,
                "w": 50,
                "h": 100,
                "type": "door",
                "id": 1,
                "active": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 2900,
                "w": 50,
                "h": 50,
                "type": "switchlava",
                "onTime": 0.6,
                "offTime": 0.6,
                "state": false,
                "timer": 0.3333333333333159,
                "collidable": true,
                "inView": false
            },
            {
                "x": 925,
                "y": 2800,
                "radius": 37.5,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1012.5,
                "y": 2700,
                "radius": 37.5,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1150,
                "y": 2800,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2650,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 2700,
                "w": 100,
                "h": 100,
                "type": "mark",
                "time": 13,
                "inView": false
            },
            {
                "x": 1300,
                "y": 2650,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 2650,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1233.3333333335486,
                "y": 2600,
                "w": 150,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        2600
                    ],
                    [
                        1450,
                        2600
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1450,
                    "y": 2600
                },
                "pointTo": {
                    "x": 1150,
                    "y": 2600
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1366.6666666664514,
                "y": 2550,
                "w": 150,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1450,
                        2550
                    ],
                    [
                        1150,
                        2550
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 2550
                },
                "pointTo": {
                    "x": 1450,
                    "y": 2550
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1600,
                "y": 2525,
                "w": 50,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 2500,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1533.3333333335486,
                "y": 2450,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1450,
                        2450
                    ],
                    [
                        1600,
                        2450
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1600,
                    "y": 2450
                },
                "pointTo": {
                    "x": 1450,
                    "y": 2450
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 1750,
                "y": 2250,
                "w": 50,
                "h": 800,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1650,
                "y": 2800,
                "w": 100,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 3050,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1166.6666666664514,
                "y": 2900,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1150,
                        2900
                    ],
                    [
                        1250,
                        2900
                    ],
                    [
                        1350,
                        2900
                    ],
                    [
                        1250,
                        2900
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 2900
                },
                "pointTo": {
                    "x": 1250,
                    "y": 2900
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1525,
                "y": 2400,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 2850,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 3100,
                "w": 50,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 3300,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 3400,
                "w": 125,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 3300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        3300
                    ],
                    [
                        1500,
                        3300
                    ]
                ],
                "speed": 300,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 3300
                },
                "pointTo": {
                    "x": 1500,
                    "y": 3300
                },
                "xv": 300,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1300,
                "y": 3300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        3300
                    ],
                    [
                        1500,
                        3300
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 3300
                },
                "pointTo": {
                    "x": 1500,
                    "y": 3300
                },
                "xv": 150,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1400,
                "y": 3300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        3300
                    ],
                    [
                        1500,
                        3300
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 3300
                },
                "pointTo": {
                    "x": 1500,
                    "y": 3300
                },
                "xv": 450,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1425,
                "y": 3400,
                "w": 125,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 3175,
                "w": 125,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 3175,
                "w": 125,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 3175,
                "w": 50,
                "h": 350,
                "type": "grav",
                "force": 30000,
                "dir": {
                    "x": 0,
                    "y": 30000
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 1350,
                "y": 3300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1500,
                        3300
                    ],
                    [
                        1250,
                        3300
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1500,
                    "y": 3300
                },
                "pointTo": {
                    "x": 1250,
                    "y": 3300
                },
                "xv": -450,
                "yv": 5.510910596163089e-14,
                "inView": false
            },
            {
                "x": 1300,
                "y": 3600,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 3675,
                "w": 100,
                "h": 100,
                "spawn": {
                    "x": 1275,
                    "y": 3725
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": 1350,
                "y": 3650,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 3800,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 3650,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 2250,
                "w": 200,
                "h": 1600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 3100,
                "w": 200,
                "h": 750,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 3650,
                "w": 200,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1075,
                "y": 3725,
                "w": 150,
                "h": 50,
                "type": "rotate-lava",
                "angle": 1432.1250000000143,
                "rotateSpeed": 135,
                "pivotX": 1075,
                "pivotY": 3725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 79.05694150420949,
                "unSim": 13.058333333333232,
                "inView": false
            },
            {
                "x": 1075,
                "y": 3725,
                "w": 150,
                "h": 50,
                "type": "rotate-lava",
                "angle": 2864.2500000000286,
                "rotateSpeed": 270,
                "pivotX": 1075,
                "pivotY": 3725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 79.05694150420949,
                "unSim": 13.058333333333232,
                "inView": false
            },
            {
                "x": 1000,
                "y": 3800,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 3850,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 3950,
                "w": 87.5,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        3950
                    ],
                    [
                        1262.5,
                        3950
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1262.5,
                    "y": 3950
                },
                "pointTo": {
                    "x": 1000,
                    "y": 3950
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 950,
                "y": 4050,
                "w": 400,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 3925,
                "w": 50,
                "h": 475,
                "type": "lavamove",
                "points": [
                    [
                        1350,
                        3925
                    ],
                    [
                        1550,
                        3925
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1550,
                    "y": 3925
                },
                "pointTo": {
                    "x": 1350,
                    "y": 3925
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1600,
                "y": 3850,
                "w": 50,
                "h": 550,
                "type": "lavamove",
                "points": [
                    [
                        1550,
                        3850
                    ],
                    [
                        1750,
                        3850
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 3850
                },
                "pointTo": {
                    "x": 1550,
                    "y": 3850
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1800,
                "y": 3850,
                "w": 200,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 4400,
                "w": 200,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 3925,
                "w": 50,
                "h": 475,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1750,
                "y": 3850,
                "w": 50,
                "h": 550,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 3925,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 4225,
                "w": 125,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1400,
                        4225
                    ],
                    [
                        1625,
                        4225
                    ]
                ],
                "speed": 75,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1625,
                    "y": 4225
                },
                "pointTo": {
                    "x": 1400,
                    "y": 4225
                },
                "xv": -75,
                "yv": 9.184850993605149e-15,
                "inView": false
            },
            {
                "x": 1300,
                "y": 4150,
                "w": 50,
                "h": 337.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 4450,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 4650,
                "w": 700,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1550,
                "y": 4500,
                "w": 450,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 4500,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1433.3333333335486,
                "y": 4500,
                "w": 50,
                "h": 150,
                "type": "lavamove",
                "points": [
                    [
                        1300,
                        4500
                    ],
                    [
                        1450,
                        4500
                    ]
                ],
                "speed": 400,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1450,
                    "y": 4500
                },
                "pointTo": {
                    "x": 1300,
                    "y": 4500
                },
                "xv": -400,
                "yv": 4.898587196589413e-14,
                "inView": false
            },
            {
                "x": 1250,
                "y": 4562.5,
                "w": 50,
                "h": 137.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 4150,
                "w": 600,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1.9900510486144484e-14,
                "y": 4200,
                "w": 700,
                "h": 1150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 4450,
                "w": 300,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 4450,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 4590,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        4450
                    ],
                    [
                        1000,
                        4650
                    ]
                ],
                "speed": 180,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1000,
                    "y": 4650
                },
                "pointTo": {
                    "x": 1000,
                    "y": 4450
                },
                "xv": 1.1021821192326179e-14,
                "yv": -180,
                "inView": false
            },
            {
                "x": 1100,
                "y": 4460,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1100,
                        4450
                    ],
                    [
                        1100,
                        4650
                    ]
                ],
                "speed": 270,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1100,
                    "y": 4650
                },
                "pointTo": {
                    "x": 1100,
                    "y": 4450
                },
                "xv": 1.6532731788489267e-14,
                "yv": -270,
                "inView": false
            },
            {
                "x": 1075,
                "y": 4700,
                "w": 925,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 4750,
                "w": 1000,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 762.5,
                "y": 5050,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 5050,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 5300,
                "w": 275,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 775,
                "y": 4912.5,
                "w": 175,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 5062.5,
                "w": 62.5,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 5000,
                "w": 950,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 5200,
                "w": 950,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 5150,
                "w": 100,
                "h": 50,
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
                "x": 1137.5,
                "y": 5150,
                "w": 37.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1175,
                "y": 5150,
                "w": 825,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 5083.333333334194,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        5000
                    ],
                    [
                        1000,
                        5300
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1000,
                    "y": 5300
                },
                "pointTo": {
                    "x": 1000,
                    "y": 5000
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 975,
                "y": 5025,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 916.6666666667743,
                "y": 5350,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        5350
                    ],
                    [
                        700,
                        5350
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 5350
                },
                "pointTo": {
                    "x": 1000,
                    "y": 5350
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 850,
                "y": 5400,
                "w": 50,
                "h": 100,
                "type": "grav",
                "force": 1000,
                "dir": {
                    "x": 0,
                    "y": 1000
                },
                "direction": "down",
                "inView": false
            },
            {
                "x": 1050,
                "y": 5350,
                "w": 950,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 5400,
                "w": 150,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 725,
                "y": 5400,
                "w": 125,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 5525,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 5487.5,
                "w": 50,
                "h": 37.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 5350,
                "w": 625,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 625,
                "y": 5450,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 5550,
                "w": 550,
                "h": 1400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 6050,
                "w": 337.5,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 5550,
                "w": 1150,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 5600,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        5550
                    ],
                    [
                        650,
                        5550
                    ],
                    [
                        650,
                        5650
                    ],
                    [
                        550,
                        5650
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 5650
                },
                "pointTo": {
                    "x": 550,
                    "y": 5550
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 550,
                "y": 5800,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        5750
                    ],
                    [
                        650,
                        5750
                    ],
                    [
                        650,
                        5850
                    ],
                    [
                        550,
                        5850
                    ]
                ],
                "speed": 150,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 5850
                },
                "pointTo": {
                    "x": 550,
                    "y": 5750
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 950,
                "y": 6000,
                "w": 1050,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 6200,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        900,
                        6150
                    ],
                    [
                        900,
                        6600
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 900,
                    "y": 6600
                },
                "pointTo": {
                    "x": 900,
                    "y": 6150
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 850,
                "y": 6600,
                "w": 50,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 6150,
                "w": 950,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 6150,
                "w": 300,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 6800,
                "w": 1400,
                "h": 1300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 6500,
                "w": 100,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 466.6666666666425,
                "y": 6950,
                "w": 50,
                "h": 225,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        6950
                    ],
                    [
                        350,
                        6950
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 6950
                },
                "pointTo": {
                    "x": 550,
                    "y": 6950
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 433.33333333335645,
                "y": 7200,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        7200
                    ],
                    [
                        550,
                        7200
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 7200
                },
                "pointTo": {
                    "x": 350,
                    "y": 7200
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 466.6666666666425,
                "y": 7325,
                "w": 50,
                "h": 225,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        7325
                    ],
                    [
                        350,
                        7325
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 7325
                },
                "pointTo": {
                    "x": 550,
                    "y": 7325
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 433.33333333335645,
                "y": 7575,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        7575
                    ],
                    [
                        550,
                        7575
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 7575
                },
                "pointTo": {
                    "x": 350,
                    "y": 7575
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 466.6666666666425,
                "y": 7700,
                "w": 50,
                "h": 225,
                "type": "lavamove",
                "points": [
                    [
                        550,
                        7700
                    ],
                    [
                        350,
                        7700
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 7700
                },
                "pointTo": {
                    "x": 550,
                    "y": 7700
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 433.33333333335645,
                "y": 7950,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        7950
                    ],
                    [
                        550,
                        7950
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 550,
                    "y": 7950
                },
                "pointTo": {
                    "x": 350,
                    "y": 7950
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 350,
                "y": 8050,
                "w": 150,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 6.123233995736765e-15,
                "y": 6950,
                "w": 350,
                "h": 1550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 375,
                "y": 6975,
                "w": 50,
                "h": 50,
                "type": "button",
                "id": 2,
                "active": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 8050,
                "w": 100,
                "h": 50,
                "type": "door",
                "id": 2,
                "active": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 6500,
                "w": 50,
                "h": 100,
                "type": "timetrap",
                "time": 0,
                "maxTime": 1.5,
                "cdmult": 3,
                "trapType": "death",
                "inView": false
            },
            {
                "x": 500,
                "y": 8200,
                "w": 250,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 8150,
                "w": 100,
                "h": 187.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 987.5,
                "y": 8100,
                "w": 1012.5,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 8750,
                "w": 250,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 8100,
                "w": 37.5,
                "h": 237.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 8500,
                "w": 500,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 8500,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 600,
                "y": 8850,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 380,
                "y": 8900,
                "w": 320,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 8800,
                "w": 1050,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 8800,
                "w": 200,
                "h": 1200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 8850,
                "r": 25,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "x": 650,
                "y": 8950,
                "w": 1350,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 9100,
                "w": 200,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 525,
                "y": 9200,
                "w": 1475,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 9550,
                "w": 850,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 483.3333333332848,
                "y": 9300,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        9300
                    ],
                    [
                        700,
                        9300
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 700,
                    "y": 9300
                },
                "pointTo": {
                    "x": 400,
                    "y": 9300
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 616.6666666667129,
                "y": 9450,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        700,
                        9450
                    ],
                    [
                        400,
                        9450
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 9450
                },
                "pointTo": {
                    "x": 700,
                    "y": 9450
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 900,
                "y": 9350,
                "w": 50,
                "h": 200,
                "type": "lavamove",
                "points": [
                    [
                        850,
                        9350
                    ],
                    [
                        950,
                        9350
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 950,
                    "y": 9350
                },
                "pointTo": {
                    "x": 850,
                    "y": 9350
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1050,
                "y": 9300,
                "w": 50,
                "h": 200,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        9300
                    ],
                    [
                        1100,
                        9300
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1100,
                    "y": 9300
                },
                "pointTo": {
                    "x": 1000,
                    "y": 9300
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": false
            },
            {
                "x": 1350,
                "y": 9300,
                "w": 650,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 9700,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 3675,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#201209",
                "tileColor": "#5c2e19",
                "inView": false
            },
            {
                "x": 1225,
                "y": 10025,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#301403",
                "tileColor": "#622509",
                "inView": false
            },
            {
                "x": 0,
                "y": 10000,
                "w": 1200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": -7.654042494670958e-16,
                "y": 10100,
                "w": 800,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 10150,
                "w": 800,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 9900,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 10100,
                "w": 100,
                "h": 100,
                "type": "mark",
                "time": 37,
                "inView": false
            },
            {
                "x": 800,
                "y": 10100,
                "w": 300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 587.5,
                "y": 7062.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 587.5,
                "y": 7412.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 7787.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 7412.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 7062.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 975,
                "y": 8350,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 8150,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        8150
                    ],
                    [
                        650,
                        8200
                    ],
                    [
                        500,
                        8200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 500,
                    "right": 650,
                    "top": 8150,
                    "bottom": 8200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        8150
                    ],
                    [
                        850,
                        8300
                    ],
                    [
                        812.5,
                        8300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 812.5,
                    "right": 850,
                    "top": 8150,
                    "bottom": 8300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 993.75,
                "y": 9300,
                "w": 12.5,
                "h": 250,
                "type": "trans",
                "collide": false,
                "opaq": 0.5,
                "inView": false
            },
            {
                "x": 1143.75,
                "y": 9300,
                "w": 12.5,
                "h": 250,
                "type": "trans",
                "collide": false,
                "opaq": 0.5,
                "inView": false
            },
            {
                "x": 1750,
                "y": 2050,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=5WXyCJ1w3Ks",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1200,
                "y": 3650,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=DBu1__I_2pY",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1300,
                "y": 9925,
                "w": 50,
                "h": 50,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=M8QzvaDqZgA",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1116.6666666666601,
                "y": 10200,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        10200
                    ],
                    [
                        975,
                        10200
                    ],
                    [
                        1150,
                        10200
                    ],
                    [
                        975,
                        10200
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 975,
                    "y": 10200
                },
                "pointTo": {
                    "x": 1150,
                    "y": 10200
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1008.3333333333485,
                "y": 10300,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        10300
                    ],
                    [
                        975,
                        10300
                    ],
                    [
                        1150,
                        10300
                    ],
                    [
                        975,
                        10300
                    ]
                ],
                "speed": 250,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 10300
                },
                "pointTo": {
                    "x": 975,
                    "y": 10300
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 833.3333333333417,
                "y": 10400,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        10400
                    ],
                    [
                        975,
                        10400
                    ],
                    [
                        1150,
                        10400
                    ],
                    [
                        975,
                        10400
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 975,
                    "y": 10400
                },
                "pointTo": {
                    "x": 800,
                    "y": 10400
                },
                "xv": -250,
                "yv": 3.061616997868383e-14,
                "inView": false
            },
            {
                "x": 941.6666666666652,
                "y": 10500,
                "w": 50,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        800,
                        10500
                    ],
                    [
                        975,
                        10500
                    ],
                    [
                        1150,
                        10500
                    ],
                    [
                        975,
                        10500
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 800,
                    "y": 10500
                },
                "pointTo": {
                    "x": 975,
                    "y": 10500
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 800,
                "y": 10600,
                "w": 400,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 541.666666666719,
                "y": 10550,
                "w": 50,
                "h": 200,
                "type": "lavamove",
                "points": [
                    [
                        400,
                        10550
                    ],
                    [
                        575,
                        10550
                    ],
                    [
                        750,
                        10550
                    ],
                    [
                        575,
                        10550
                    ]
                ],
                "speed": 250,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 400,
                    "y": 10550
                },
                "pointTo": {
                    "x": 575,
                    "y": 10550
                },
                "xv": 250,
                "yv": 0,
                "inView": false
            },
            {
                "x": 350,
                "y": 10550,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 10700,
                "w": 1150,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 10550,
                "w": 350,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 10800,
                "w": 350,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 10900,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 10950,
                "w": 700,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 11150,
                "w": 350,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 10950,
                "w": 750,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 11650,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1150,
                "y": 11700,
                "w": 100,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 11675,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        11650
                    ],
                    [
                        1225,
                        11675
                    ],
                    [
                        1225,
                        11700
                    ],
                    [
                        1150,
                        11700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1150,
                    "right": 1225,
                    "top": 11650,
                    "bottom": 11700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1550,
                "y": 11550,
                "w": 450,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 11850,
                "w": 675,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 11900,
                "w": 750,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1199.7564050259825,
                "y": 12006.975647374413,
                "w": 85,
                "h": 100,
                "type": "rotate-lava",
                "angle": 4,
                "rotateSpeed": 120,
                "pivotX": 1100,
                "pivotY": 12000,
                "distToPivot": 100,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 165.62202374203343,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1000.2435949740176,
                "y": 11993.024352625587,
                "w": 85,
                "h": 100,
                "type": "rotate-lava",
                "angle": 184,
                "rotateSpeed": 120,
                "pivotX": 1100,
                "pivotY": 12000,
                "distToPivot": 100,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 165.62202374203343,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 800.2435949740176,
                "y": 12006.975647374413,
                "w": 85,
                "h": 100,
                "type": "rotate-lava",
                "angle": 176,
                "rotateSpeed": -120,
                "pivotX": 900,
                "pivotY": 12000,
                "distToPivot": 100,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 165.62202374203343,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 999.7564050259824,
                "y": 11993.024352625587,
                "w": 85,
                "h": 100,
                "type": "rotate-lava",
                "angle": -4,
                "rotateSpeed": -120,
                "pivotX": 900,
                "pivotY": 12000,
                "distToPivot": 100,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 165.62202374203343,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 750,
                "y": 12150,
                "w": 500,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 875,
                "y": 11050,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 700,
                "y": 11150,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 11850,
                "w": 650,
                "h": 850,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        11850
                    ],
                    [
                        800,
                        11850
                    ],
                    [
                        650,
                        12250
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 650,
                    "right": 800,
                    "top": 11850,
                    "bottom": 12250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        12250
                    ],
                    [
                        800,
                        12700
                    ],
                    [
                        650,
                        12700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 800,
                    "top": 12250,
                    "bottom": 12700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        12250
                    ],
                    [
                        900,
                        12250
                    ],
                    [
                        900,
                        12550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 900,
                    "top": 12250,
                    "bottom": 12550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 900,
                "y": 12250,
                "w": 1100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 12700,
                "w": 1250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 12633.33333333243,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        900,
                        12550
                    ],
                    [
                        1000,
                        12550
                    ],
                    [
                        1000,
                        12650
                    ],
                    [
                        900,
                        12650
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 900,
                    "y": 12650
                },
                "pointTo": {
                    "x": 900,
                    "y": 12550
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1050,
                "y": 12633.333333332594,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1050,
                        12550
                    ],
                    [
                        1150,
                        12550
                    ],
                    [
                        1150,
                        12650
                    ],
                    [
                        1050,
                        12650
                    ]
                ],
                "speed": 250,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1050,
                    "y": 12650
                },
                "pointTo": {
                    "x": 1050,
                    "y": 12550
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1200,
                "y": 12550,
                "w": 800,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 12650,
                "w": 600,
                "h": 1050,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 12725,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 12750,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1075,
                "y": 13100,
                "w": 325,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 13050,
                "w": 450,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 12800,
                "w": 50,
                "h": 250,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 4.592425496802574e-15,
                "y": 12800,
                "w": 500,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 13150,
                "w": 150,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 13433.333333331611,
                "w": 100,
                "h": 100,
                "type": "lavamove",
                "points": [
                    [
                        1000,
                        13350
                    ],
                    [
                        1000,
                        13500
                    ]
                ],
                "speed": 250,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1000,
                    "y": 13500
                },
                "pointTo": {
                    "x": 1000,
                    "y": 13350
                },
                "xv": 1.5308084989341916e-14,
                "yv": -250,
                "inView": false
            },
            {
                "x": 1100,
                "y": 13375,
                "w": 150,
                "h": 325,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 13600,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 13475,
                "w": 100,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 13250,
                "w": 1000,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": -1.5308084989341913e-15,
                "y": 13375,
                "w": 800,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 13550,
                "w": 250,
                "h": 750,
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
                "x": 650,
                "y": 13550,
                "w": 250,
                "h": 750,
                "type": "raxis",
                "rx": false,
                "ry": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 13700,
                "w": 1100,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1.8369701987210294e-14,
                "y": 13550,
                "w": 650,
                "h": 1450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 14400,
                "w": 1100,
                "h": 50,
                "type": "raxis",
                "rx": true,
                "ry": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 14400,
                "w": 975,
                "h": 50,
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
                "x": 850,
                "y": 14450,
                "w": 1150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 14350,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 14500,
                "w": 1350,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 675,
                "y": 14325,
                "w": 150,
                "h": 150,
                "type": "cure",
                "inView": false
            },
            {
                "x": 650,
                "y": 14300,
                "w": 200,
                "h": 200,
                "type": "vinette",
                "ir": 0.1,
                "or": 0.3,
                "o": 1,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 850,
                "y": 14375,
                "w": 1150,
                "h": 50,
                "type": "vinette",
                "ir": 0.02,
                "or": 0.06,
                "o": 1,
                "vc": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                },
                "inView": false
            },
            {
                "x": 1825,
                "y": 14375,
                "w": 200,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.9,
                "inView": false
            },
            {
                "x": 900,
                "y": 14375,
                "w": 925,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 1,
                "inView": false
            },
            {
                "x": 875,
                "y": 14375,
                "w": 12.5,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.5,
                "inView": false
            },
            {
                "x": 875,
                "y": 14375,
                "w": 12.5,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.7,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 14375,
                "w": 12.5,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.8,
                "inView": false
            },
            {
                "x": 1995,
                "y": 14400,
                "w": 5,
                "h": 50,
                "type": "tp",
                "tpx": 200,
                "tpy": 15900,
                "bgColor": "#0d0d0d",
                "tileColor": "#383838",
                "changeColor": false,
                "inView": false
            },
            {
                "x": 150,
                "y": 15800,
                "w": 100,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 100,
                "y": 15850,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 7.654042494670958e-16,
                "y": 15950,
                "w": 125,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 15700,
                "w": 100,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3.061616997868383e-15,
                "y": 16000,
                "w": 400,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 15825,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 150,
                "y": 15850,
                "w": 100,
                "h": 100,
                "type": "color",
                "bgColor": "#662900",
                "tileColor": "#bd3900",
                "inView": false
            },
            {
                "x": 950,
                "y": 13150,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        13050
                    ],
                    [
                        1000,
                        13150
                    ],
                    [
                        950,
                        13150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 950,
                    "right": 1000,
                    "top": 13050,
                    "bottom": 13150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 850,
                "y": 10950,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 15950,
                "w": 237.5,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1825,
                "y": 14400,
                "w": 175,
                "h": 50,
                "type": "grav",
                "force": 400,
                "dir": {
                    "x": 400,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 1550,
                "y": 11250,
                "w": 450,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 11250,
                "w": 50,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 11545,
                "w": 250,
                "h": 5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 350,
                "y": 15850,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        350,
                        15900
                    ],
                    [
                        350,
                        15700
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 350,
                    "y": 15700
                },
                "pointTo": {
                    "x": 350,
                    "y": 15900
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 450,
                "y": 15700,
                "w": 300,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 400,
                "y": 16000,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 450,
                "y": 16100,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 16100,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 15950,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 16000,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 550,
                "y": 16250,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 16150,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 16150,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        16105
                    ],
                    [
                        575,
                        16105
                    ],
                    [
                        625,
                        16150
                    ],
                    [
                        700,
                        16250
                    ],
                    [
                        550,
                        16250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 700,
                    "top": 16105,
                    "bottom": 16250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        16105
                    ],
                    [
                        850,
                        16105
                    ],
                    [
                        850,
                        16250
                    ],
                    [
                        700,
                        16250
                    ],
                    [
                        775,
                        16150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 850,
                    "top": 16105,
                    "bottom": 16250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 450,
                "y": 16000,
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
                "x": 850,
                "y": 16000,
                "w": 100,
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
                "x": 1000,
                "y": 15800,
                "w": 150,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 15750,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 15700,
                "w": 50,
                "h": 650,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 16200,
                "w": 200,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1300,
                        15750
                    ],
                    [
                        1300,
                        16250
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1300,
                    "y": 16250
                },
                "pointTo": {
                    "x": 1300,
                    "y": 15750
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": false
            },
            {
                "x": 1300,
                "y": 15800,
                "w": 200,
                "h": 50,
                "type": "movingsafe",
                "points": [
                    [
                        1300,
                        16250
                    ],
                    [
                        1300,
                        15750
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "pointOn": {
                    "x": 1300,
                    "y": 15750
                },
                "pointTo": {
                    "x": 1300,
                    "y": 16250
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": false
            },
            {
                "x": 1250,
                "y": 16000,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 15775,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1475,
                "y": 15900,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 16025,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1425,
                "y": 16025,
                "w": 75,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 16150,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 16150,
                "w": 125,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 16300,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        16137.5
                    ],
                    [
                        1200,
                        16300
                    ],
                    [
                        1050,
                        16300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1050,
                    "right": 1200,
                    "top": 16137.5,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        16000
                    ],
                    [
                        1125,
                        16000
                    ],
                    [
                        1075,
                        16100
                    ],
                    [
                        1000,
                        16075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1125,
                    "top": 16000,
                    "bottom": 16100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1125,
                        16000
                    ],
                    [
                        1250,
                        16000
                    ],
                    [
                        1250,
                        16075
                    ],
                    [
                        1175,
                        16050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1250,
                    "top": 16000,
                    "bottom": 16075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1550,
                "y": 15700,
                "w": 450,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 16350,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 725,
                "y": 16400,
                "w": 825,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 500,
                "y": 16450,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        575,
                        16300
                    ],
                    [
                        750,
                        16300
                    ],
                    [
                        650,
                        16350
                    ],
                    [
                        600,
                        16350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 575,
                    "right": 750,
                    "top": 16300,
                    "bottom": 16350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 16150,
                "w": 500,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 275,
                "y": 16500,
                "w": 225,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 16450,
                "w": 75,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 16350,
                "w": 75,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 16250,
                "w": 175,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 225,
                "y": 16325,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 100,
                "y": 16433.333333334474,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        100,
                        16250
                    ],
                    [
                        100,
                        16550
                    ]
                ],
                "speed": 550,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 100,
                    "y": 16550
                },
                "pointTo": {
                    "x": 100,
                    "y": 16250
                },
                "xv": 3.3677786976552216e-14,
                "yv": -550,
                "inView": false
            },
            {
                "x": -7.654042494670958e-16,
                "y": 16250,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 50,
                "y": 16400,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 75,
                "y": 16375,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 7.143772994854621e-15,
                "y": 16533.333333336166,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        0,
                        16350
                    ],
                    [
                        0,
                        16650
                    ]
                ],
                "speed": 550,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 0,
                    "y": 16650
                },
                "pointTo": {
                    "x": 0,
                    "y": 16350
                },
                "xv": 3.3677786976552216e-14,
                "yv": -550,
                "inView": false
            },
            {
                "x": 100,
                "y": 16425,
                "w": 100,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 75,
                "y": 16500,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 50,
                "y": 16525,
                "w": 50,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": -5.35782974626967e-15,
                "y": 16700,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 16650,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 16600,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 225,
                "y": 16625,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 100,
                "y": 16733.333333336777,
                "w": 100,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        100,
                        16550
                    ],
                    [
                        100,
                        16850
                    ]
                ],
                "speed": 550,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 100,
                    "y": 16850
                },
                "pointTo": {
                    "x": 100,
                    "y": 16550
                },
                "xv": 3.3677786976552216e-14,
                "yv": -550,
                "inView": false
            },
            {
                "x": 150,
                "y": 16550,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 225,
                "y": 16750,
                "r": 12.5,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "x": 0,
                "y": 16750,
                "w": 100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 6.123233995736766e-15,
                "y": 16900,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 200,
                "y": 16775,
                "w": 50,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 16700,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 16900,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 17100,
                "w": 750,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 16700,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        16875
                    ],
                    [
                        625,
                        17100
                    ],
                    [
                        525,
                        17100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 525,
                    "right": 625,
                    "top": 16875,
                    "bottom": 17100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        16700
                    ],
                    [
                        500,
                        16700
                    ],
                    [
                        475,
                        16925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 500,
                    "top": 16700,
                    "bottom": 16925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 17050,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        16400
                    ],
                    [
                        200,
                        16425
                    ],
                    [
                        100,
                        16425
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 200,
                    "top": 16400,
                    "bottom": 16425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        16450
                    ],
                    [
                        200,
                        16450
                    ],
                    [
                        100,
                        16475
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 200,
                    "top": 16450,
                    "bottom": 16475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        16525
                    ],
                    [
                        125,
                        16525
                    ],
                    [
                        100,
                        16600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 125,
                    "top": 16525,
                    "bottom": 16600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 850,
                "y": 16700,
                "w": 50,
                "h": 250,
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
                "x": 750,
                "y": 16850,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 16850,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 16950,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 16700,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 16600,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1000,
                "y": 16700,
                "w": 50,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 763.3333333332257,
                "y": 16800,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        750,
                        16800
                    ],
                    [
                        950,
                        16800
                    ]
                ],
                "speed": 440,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 750,
                    "y": 16800
                },
                "pointTo": {
                    "x": 950,
                    "y": 16800
                },
                "xv": 440,
                "yv": 0,
                "inView": false
            },
            {
                "x": 756.6666666667743,
                "y": 16800,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        750,
                        16800
                    ],
                    [
                        950,
                        16800
                    ]
                ],
                "speed": 220,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 750,
                    "y": 16800
                },
                "pointTo": {
                    "x": 950,
                    "y": 16800
                },
                "xv": 220,
                "yv": 0,
                "inView": false
            },
            {
                "x": 1050,
                "y": 16350,
                "w": 500,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 50,
                "y": 16350,
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
                "x": 50,
                "y": 16475,
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
                "x": 200,
                "y": 16600,
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
                "points": [
                    [
                        200,
                        16700
                    ],
                    [
                        300,
                        16700
                    ],
                    [
                        300,
                        16750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 200,
                    "right": 300,
                    "top": 16700,
                    "bottom": 16750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1050,
                "y": 16600,
                "w": 950,
                "h": 100,
                "type": "grav",
                "force": 7500,
                "dir": {
                    "x": 7500,
                    "y": 0
                },
                "direction": "right",
                "inView": false
            },
            {
                "x": 1050,
                "y": 16700,
                "w": 900,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 16750,
                "w": 850,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1900,
                "y": 16950,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1800,
                "y": 16950,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1800,
                        16850
                    ],
                    [
                        1800,
                        16975
                    ],
                    [
                        1800,
                        17100
                    ],
                    [
                        1800,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1800,
                    "y": 16975
                },
                "pointTo": {
                    "x": 1800,
                    "y": 16850
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 1750,
                "y": 17075,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1750,
                        16850
                    ],
                    [
                        1750,
                        16975
                    ],
                    [
                        1750,
                        17100
                    ],
                    [
                        1750,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 1750,
                    "y": 17100
                },
                "pointTo": {
                    "x": 1750,
                    "y": 16975
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 1700,
                "y": 17000,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1700,
                        16850
                    ],
                    [
                        1700,
                        16975
                    ],
                    [
                        1700,
                        17100
                    ],
                    [
                        1700,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1700,
                    "y": 16975
                },
                "pointTo": {
                    "x": 1700,
                    "y": 17100
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 1850,
                "y": 16875,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1850,
                        16850
                    ],
                    [
                        1850,
                        16975
                    ],
                    [
                        1850,
                        17100
                    ],
                    [
                        1850,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1850,
                    "y": 16850
                },
                "pointTo": {
                    "x": 1850,
                    "y": 16975
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 1650,
                "y": 16875,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1650,
                        16850
                    ],
                    [
                        1650,
                        16975
                    ],
                    [
                        1650,
                        17100
                    ],
                    [
                        1650,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1650,
                    "y": 16850
                },
                "pointTo": {
                    "x": 1650,
                    "y": 16975
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 1600,
                "y": 16950,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1600,
                        16850
                    ],
                    [
                        1600,
                        16975
                    ],
                    [
                        1600,
                        17100
                    ],
                    [
                        1600,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 3,
                "collidable": true,
                "pointOn": {
                    "x": 1600,
                    "y": 16975
                },
                "pointTo": {
                    "x": 1600,
                    "y": 16850
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 1550,
                "y": 17075,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1550,
                        16850
                    ],
                    [
                        1550,
                        16975
                    ],
                    [
                        1550,
                        17100
                    ],
                    [
                        1550,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 2,
                "collidable": true,
                "pointOn": {
                    "x": 1550,
                    "y": 17100
                },
                "pointTo": {
                    "x": 1550,
                    "y": 16975
                },
                "xv": 2.7554552980815446e-14,
                "yv": -450,
                "inView": false
            },
            {
                "x": 1500,
                "y": 17000,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1500,
                        16850
                    ],
                    [
                        1500,
                        16975
                    ],
                    [
                        1500,
                        17100
                    ],
                    [
                        1500,
                        16975
                    ]
                ],
                "speed": 450,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1500,
                    "y": 16975
                },
                "pointTo": {
                    "x": 1500,
                    "y": 17100
                },
                "xv": 2.7554552980815446e-14,
                "yv": 450,
                "inView": false
            },
            {
                "x": 1450,
                "y": 16900,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1450,
                "y": 17150,
                "w": 550,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1500,
                "y": 17125,
                "w": 400,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        16850
                    ],
                    [
                        1400,
                        16850
                    ],
                    [
                        1050,
                        17150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1050,
                    "right": 1400,
                    "top": 16850,
                    "bottom": 17150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1450,
                        16900
                    ],
                    [
                        1450,
                        17200
                    ],
                    [
                        1100,
                        17200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1100,
                    "right": 1450,
                    "top": 16900,
                    "bottom": 17200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1100,
                "y": 17200,
                "w": 900,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 17150,
                "w": 1050,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "w": 550,
                "h": 50,
                "type": "rotate-lava",
                "angle": 1.5,
                "rotateSpeed": 45,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 276.1340254296815,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "radius": 325,
                "type": "circle-hollow-slice",
                "startAngle": -1.4835298641951802,
                "endAngle": 1.4835298641951802,
                "startPolygon": {
                    "points": [
                        [
                            1098.967829255606,
                            17451.04645802477
                        ],
                        [
                            1103.3256163929889,
                            17401.236723120182
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            1098.967829255606,
                            17998.95354197523
                        ],
                        [
                            1103.3256163929889,
                            18048.763276879818
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
                "x": 1075,
                "y": 17725,
                "radius": 325,
                "type": "circle-hollow-slice",
                "startAngle": 1.6580627893946132,
                "endAngle": 4.625122517784973,
                "startPolygon": {
                    "points": [
                        [
                            1051.032170744394,
                            17998.95354197523
                        ],
                        [
                            1046.6743836070111,
                            18048.763276879818
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            1051.032170744394,
                            17451.04645802477
                        ],
                        [
                            1046.6743836070111,
                            17401.236723120182
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
                "x": 0,
                "y": 17450,
                "w": 750,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1400,
                "y": 17450,
                "w": 600,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 17450,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1375,
                "y": 17650,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 17450,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1250,
                "y": 17425,
                "w": 75,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 17425,
                "w": 200,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 725,
                "y": 17475,
                "w": 75,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 775,
                "y": 17450,
                "w": 75,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 17750,
                "w": 50,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 800,
                "y": 17900,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 850,
                "y": 17950,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 900,
                "y": 18000,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 18000,
                "w": 300,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1350,
                "y": 17750,
                "w": 75,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1275,
                "y": 17925,
                "w": 75,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1325,
                "y": 17875,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 17975,
                "w": 100,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 18050,
                "w": 50,
                "h": 800,
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
                "x": 950,
                "y": 18850,
                "w": 250,
                "h": 150,
                "type": "winpad",
                "inView": false
            },
            {
                "x": 0,
                "y": 18050,
                "w": 950,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1200,
                "y": 18050,
                "w": 800,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 950,
                "y": 18050,
                "w": 100,
                "h": 800,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 18050,
                "w": 125,
                "h": 800,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "w": 550,
                "h": 50,
                "type": "rotate-lava",
                "angle": 46.5,
                "rotateSpeed": 45,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 276.1340254296815,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "w": 550,
                "h": 50,
                "type": "rotate-lava",
                "angle": 91.5,
                "rotateSpeed": 45,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 276.1340254296815,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "w": 550,
                "h": 50,
                "type": "rotate-lava",
                "angle": 136.5,
                "rotateSpeed": 45,
                "pivotX": 1075,
                "pivotY": 17725,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 276.1340254296815,
                "unSim": 23.633333333332633,
                "inView": false
            },
            {
                "x": 1075,
                "y": 17725,
                "r": 100,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 100,
                "inView": false
            },
            {
                "x": 137.5,
                "y": 15837.5,
                "w": 150,
                "h": 150,
                "type": "musicchange",
                "musicPath": "https://www.youtube.com/watch?v=oTqqymOURAE",
                "volume": 1,
                "startTime": 0,
                "inView": false
            },
            {
                "x": 1250,
                "y": 0,
                "w": 50,
                "h": 50,
                "spawn": {
                    "x": 1275,
                    "y": 25
                },
                "type": "check",
                "collected": false,
                "inView": false
            },
            {
                "x": -25,
                "y": -25,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 1,
                "inView": false
            },
            {
                "x": 1225,
                "y": -25,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 1,
                "inView": false
            },
            {
                "x": 1850,
                "y": 950,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 2,
                "inView": false
            },
            {
                "x": -25,
                "y": 1650,
                "w": 100,
                "h": 75,
                "type": "zone",
                "value": 3,
                "inView": false
            },
            {
                "x": 1775,
                "y": 2075,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 4,
                "inView": false
            },
            {
                "x": 250,
                "y": 2000,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 5,
                "inView": false
            },
            {
                "x": 625,
                "y": 3775,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 6,
                "inView": false
            },
            {
                "x": 1225,
                "y": 3675,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 7,
                "inView": false
            },
            {
                "x": 875,
                "y": 6025,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 8,
                "inView": false
            },
            {
                "x": 1225,
                "y": 10025,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 9,
                "inView": false
            },
            {
                "x": 150,
                "y": 15850,
                "w": 100,
                "h": 100,
                "type": "zone",
                "value": 10,
                "inView": false
            },
            {
                "points": [
                    [
                        1525,
                        50
                    ],
                    [
                        1550,
                        50
                    ],
                    [
                        1550,
                        100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1525,
                    "right": 1550,
                    "top": 50,
                    "bottom": 100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        50
                    ],
                    [
                        1375,
                        50
                    ],
                    [
                        1325,
                        100
                    ],
                    [
                        1300,
                        100
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1375,
                    "top": 50,
                    "bottom": 100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        350
                    ],
                    [
                        1500,
                        400
                    ],
                    [
                        1475,
                        400
                    ],
                    [
                        1475,
                        375
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1475,
                    "right": 1500,
                    "top": 350,
                    "bottom": 400
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1400,
                        250
                    ],
                    [
                        1425,
                        250
                    ],
                    [
                        1425,
                        275
                    ],
                    [
                        1400,
                        300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1400,
                    "right": 1425,
                    "top": 250,
                    "bottom": 300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        325
                    ],
                    [
                        1400,
                        325
                    ],
                    [
                        1300,
                        350
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1400,
                    "top": 325,
                    "bottom": 350
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1250,
                        350
                    ],
                    [
                        1300,
                        350
                    ],
                    [
                        1300,
                        450
                    ],
                    [
                        1250,
                        475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 350,
                    "bottom": 475
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1250,
                "y": 325,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1350,
                "y": 425,
                "w": 25,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1375,
                "y": 425,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1375,
                "y": 625,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 1350,
                "y": 600,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "points": [
                    [
                        1450,
                        750
                    ],
                    [
                        1500,
                        750
                    ],
                    [
                        1500,
                        850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1450,
                    "right": 1500,
                    "top": 750,
                    "bottom": 850
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1450,
                        750
                    ],
                    [
                        1500,
                        850
                    ],
                    [
                        1450,
                        850
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1450,
                    "right": 1500,
                    "top": 750,
                    "bottom": 850
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1600,
                        800
                    ],
                    [
                        1600,
                        850
                    ],
                    [
                        1500,
                        850
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1500,
                    "right": 1600,
                    "top": 800,
                    "bottom": 850
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1600,
                        125
                    ],
                    [
                        1637.5,
                        150
                    ],
                    [
                        1637.5,
                        200
                    ],
                    [
                        1600,
                        225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1600,
                    "right": 1637.5,
                    "top": 125,
                    "bottom": 225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1950,
                        475
                    ],
                    [
                        1950,
                        550
                    ],
                    [
                        1900,
                        550
                    ],
                    [
                        1912.5,
                        512.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1900,
                    "right": 1950,
                    "top": 475,
                    "bottom": 550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        825
                    ],
                    [
                        1862.5,
                        850
                    ],
                    [
                        1887.5,
                        900
                    ],
                    [
                        1800,
                        900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1800,
                    "right": 1887.5,
                    "top": 825,
                    "bottom": 900
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1100,
                "y": 1050,
                "r": 70,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 70,
                "inView": true
            },
            {
                "points": [
                    [
                        850,
                        1000
                    ],
                    [
                        950,
                        1025
                    ],
                    [
                        850,
                        1025
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 850,
                    "right": 950,
                    "top": 1000,
                    "bottom": 1025
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        800,
                        925
                    ],
                    [
                        950,
                        925
                    ],
                    [
                        850,
                        950
                    ],
                    [
                        800,
                        950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 800,
                    "right": 950,
                    "top": 925,
                    "bottom": 950
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        850,
                        1000
                    ],
                    [
                        850,
                        1050
                    ],
                    [
                        825,
                        1050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 1000,
                    "bottom": 1050
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        700,
                        1000
                    ],
                    [
                        725,
                        1050
                    ],
                    [
                        700,
                        1050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 700,
                    "right": 725,
                    "top": 1000,
                    "bottom": 1050
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 650,
                "y": 1000,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "points": [
                    [
                        650,
                        1000
                    ],
                    [
                        650,
                        1200
                    ],
                    [
                        350,
                        1200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 350,
                    "right": 650,
                    "top": 1000,
                    "bottom": 1200
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        0,
                        900
                    ],
                    [
                        650,
                        900
                    ],
                    [
                        350,
                        950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 0,
                    "right": 650,
                    "top": 900,
                    "bottom": 950
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": -200,
                "y": 850,
                "w": 200,
                "h": 325,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1475,
                "y": 150,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1475,
                        225
                    ],
                    [
                        1500,
                        225
                    ],
                    [
                        1475,
                        250
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1475,
                    "right": 1500,
                    "top": 225,
                    "bottom": 250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        100
                    ],
                    [
                        1800,
                        150
                    ],
                    [
                        1750,
                        150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1750,
                    "right": 1800,
                    "top": 100,
                    "bottom": 150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1750,
                        0
                    ],
                    [
                        1950,
                        0
                    ],
                    [
                        1950,
                        50
                    ],
                    [
                        1750,
                        25
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1750,
                    "right": 1950,
                    "top": 0,
                    "bottom": 50
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        100
                    ],
                    [
                        1875,
                        125
                    ],
                    [
                        1900,
                        200
                    ],
                    [
                        1800,
                        200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1800,
                    "right": 1900,
                    "top": 100,
                    "bottom": 200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        250
                    ],
                    [
                        1900,
                        250
                    ],
                    [
                        1800,
                        300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1800,
                    "right": 1900,
                    "top": 250,
                    "bottom": 300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1175,
                        900
                    ],
                    [
                        1250,
                        900
                    ],
                    [
                        1250,
                        975
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1250,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1250,
                        900
                    ],
                    [
                        1225,
                        975
                    ],
                    [
                        1175,
                        925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1250,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1250,
                        900
                    ],
                    [
                        1200,
                        975
                    ],
                    [
                        1175,
                        950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1250,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1100,
                "y": 1050,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": true
            },
            {
                "x": 1100,
                "y": 1050,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 525.125576896269,
                "y": 977.4478303867666,
                "w": 20,
                "h": 5,
                "type": "rotate-lava",
                "angle": -22.5,
                "rotateSpeed": 0,
                "pivotX": 525.125576896269,
                "pivotY": 977.4478303867666,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 10.307764064044152,
                "unSim": 0,
                "inView": true
            },
            {
                "points": [
                    [
                        1125,
                        1300
                    ],
                    [
                        1175,
                        1300
                    ],
                    [
                        1150,
                        1350
                    ],
                    [
                        1100,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1175,
                    "top": 1300,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1075,
                        1400
                    ],
                    [
                        1175,
                        1400
                    ],
                    [
                        1150,
                        1450
                    ],
                    [
                        1100,
                        1450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1075,
                    "right": 1175,
                    "top": 1400,
                    "bottom": 1450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        725,
                        1400
                    ],
                    [
                        825,
                        1400
                    ],
                    [
                        800,
                        1450
                    ],
                    [
                        760,
                        1450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 725,
                    "right": 825,
                    "top": 1400,
                    "bottom": 1450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        195,
                        1550
                    ],
                    [
                        245,
                        1550
                    ],
                    [
                        245,
                        1595
                    ],
                    [
                        240,
                        1600
                    ],
                    [
                        200,
                        1600
                    ],
                    [
                        195,
                        1595
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 195,
                    "right": 245,
                    "top": 1550,
                    "bottom": 1600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        60,
                        1600
                    ],
                    [
                        100,
                        1600
                    ],
                    [
                        105,
                        1605
                    ],
                    [
                        105,
                        1650
                    ],
                    [
                        55,
                        1650
                    ],
                    [
                        55,
                        1605
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 55,
                    "right": 105,
                    "top": 1600,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        120,
                        1495
                    ],
                    [
                        137.5,
                        1500
                    ],
                    [
                        137.5,
                        1550
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 120,
                    "right": 137.5,
                    "top": 1495,
                    "bottom": 1550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1950,
                        1025
                    ],
                    [
                        1950,
                        1050
                    ],
                    [
                        1925,
                        1050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1925,
                    "right": 1950,
                    "top": 1025,
                    "bottom": 1050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": -25,
                "y": 1500,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 1450,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        125,
                        1745
                    ],
                    [
                        125,
                        1755
                    ],
                    [
                        100,
                        1760
                    ],
                    [
                        100,
                        1750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 125,
                    "top": 1745,
                    "bottom": 1760
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        150,
                        1800
                    ],
                    [
                        350,
                        1800
                    ],
                    [
                        350,
                        1900
                    ],
                    [
                        0,
                        1900
                    ],
                    [
                        0,
                        1850
                    ],
                    [
                        75,
                        1820
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 350,
                    "top": 1800,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 220,
                "y": 1735,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 165,
                "y": 1735,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 190,
                "y": 1715,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 340,
                "y": 1770,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 40,
                "y": 1750,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "x": 30,
                "y": 1785,
                "r": 5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 5,
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        1750
                    ],
                    [
                        650,
                        1750
                    ],
                    [
                        675,
                        1900
                    ],
                    [
                        600,
                        1900
                    ],
                    [
                        575,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 575,
                    "right": 675,
                    "top": 1750,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        1875
                    ],
                    [
                        450,
                        1900
                    ],
                    [
                        400,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 450,
                    "top": 1875,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        425,
                        1700
                    ],
                    [
                        450,
                        1700
                    ],
                    [
                        450,
                        1775
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 425,
                    "right": 450,
                    "top": 1700,
                    "bottom": 1775
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        1825
                    ],
                    [
                        900,
                        1900
                    ],
                    [
                        800,
                        1900
                    ],
                    [
                        800,
                        1875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 900,
                    "top": 1825,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        1700
                    ],
                    [
                        900,
                        1700
                    ],
                    [
                        850,
                        1725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 900,
                    "top": 1700,
                    "bottom": 1725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        1825
                    ],
                    [
                        1050,
                        1850
                    ],
                    [
                        1125,
                        1900
                    ],
                    [
                        950,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 950,
                    "right": 1125,
                    "top": 1825,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        1900
                    ],
                    [
                        1300,
                        1950
                    ],
                    [
                        1275,
                        1950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1275,
                    "right": 1300,
                    "top": 1900,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1275,
                        1700
                    ],
                    [
                        1325,
                        1700
                    ],
                    [
                        1325,
                        1750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1275,
                    "right": 1325,
                    "top": 1700,
                    "bottom": 1750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1025,
                        1700
                    ],
                    [
                        1175,
                        1700
                    ],
                    [
                        1125,
                        1750
                    ],
                    [
                        1050,
                        1750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1025,
                    "right": 1175,
                    "top": 1700,
                    "bottom": 1750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1225,
                        1750
                    ],
                    [
                        1275,
                        1825
                    ],
                    [
                        1225,
                        1900
                    ],
                    [
                        1175,
                        1825
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1175,
                    "right": 1275,
                    "top": 1750,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1600,
                        1750
                    ],
                    [
                        1600,
                        1900
                    ],
                    [
                        1525,
                        1900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1525,
                    "right": 1600,
                    "top": 1750,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1600,
                        1825
                    ],
                    [
                        1600,
                        1900
                    ],
                    [
                        1475,
                        1900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1475,
                    "right": 1600,
                    "top": 1825,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1375,
                "y": 1750,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1560,
                "y": 1860,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 250,
                "y": 1450,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 250,
                "y": 1300,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1650,
                        1300
                    ],
                    [
                        1675,
                        1350
                    ],
                    [
                        1650,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1675,
                    "top": 1300,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1650,
                        1200
                    ],
                    [
                        1700,
                        1200
                    ],
                    [
                        1650,
                        1225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1700,
                    "top": 1200,
                    "bottom": 1225
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1650,
                        1400
                    ],
                    [
                        1675,
                        1400
                    ],
                    [
                        1650,
                        1425
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1675,
                    "top": 1400,
                    "bottom": 1425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1650,
                "y": 1100,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 2000,
                "y": 1100,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1860,
                "y": 1105,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1795,
                "y": 1105,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "points": [
                    [
                        1700,
                        1100
                    ],
                    [
                        1950,
                        1100
                    ],
                    [
                        1825,
                        1125
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1700,
                    "right": 1950,
                    "top": 1100,
                    "bottom": 1125
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1725,
                "y": 1150,
                "radius": 25,
                "radius2": 15,
                "type": "oval",
                "renderType": "oval",
                "inView": true
            },
            {
                "x": 1925,
                "y": 1150,
                "radius": 25,
                "radius2": 15,
                "type": "oval",
                "renderType": "oval",
                "inView": false
            },
            {
                "points": [
                    [
                        1850,
                        1250
                    ],
                    [
                        1925,
                        1275
                    ],
                    [
                        1887.5,
                        1300
                    ],
                    [
                        1850,
                        1295
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1850,
                    "right": 1925,
                    "top": 1250,
                    "bottom": 1300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1970,
                        1200
                    ],
                    [
                        2000,
                        1200
                    ],
                    [
                        2000,
                        1275
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1970,
                    "right": 2000,
                    "top": 1200,
                    "bottom": 1275
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1940,
                        1200
                    ],
                    [
                        2000,
                        1200
                    ],
                    [
                        2000,
                        1230
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1940,
                    "right": 2000,
                    "top": 1200,
                    "bottom": 1230
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1850,
                        1650
                    ],
                    [
                        1905,
                        1900
                    ],
                    [
                        1900,
                        1950
                    ],
                    [
                        1850,
                        1950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1850,
                    "right": 1905,
                    "top": 1650,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2000,
                        1650
                    ],
                    [
                        2000,
                        1950
                    ],
                    [
                        1950,
                        1950
                    ],
                    [
                        1945,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1945,
                    "right": 2000,
                    "top": 1650,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2000,
                        1550
                    ],
                    [
                        2000,
                        1950
                    ],
                    [
                        1975,
                        1950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1975,
                    "right": 2000,
                    "top": 1550,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1850,
                        1550
                    ],
                    [
                        1875,
                        1950
                    ],
                    [
                        1850,
                        1950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1850,
                    "right": 1875,
                    "top": 1550,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1900,
                "y": 2050,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1900,
                "y": 2200,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1750,
                "y": 2200,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1750,
                "y": 2050,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1775,
                "y": 2025,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1875,
                "y": 2025,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        1550
                    ],
                    [
                        1350,
                        1650
                    ],
                    [
                        350,
                        1650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 1350,
                    "top": 1550,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        1600
                    ],
                    [
                        1350,
                        1650
                    ],
                    [
                        350,
                        1650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 1350,
                    "top": 1600,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        1550
                    ],
                    [
                        1350,
                        1650
                    ],
                    [
                        350,
                        1650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 1350,
                    "top": 1550,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        1600
                    ],
                    [
                        1350,
                        1650
                    ],
                    [
                        650,
                        1650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 1350,
                    "top": 1600,
                    "bottom": 1650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 0,
                "y": 75,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 125,
                "w": 75,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 175,
                "w": 125,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 150,
                "y": 0,
                "w": 25,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 100,
                "y": 0,
                "w": 25,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 75,
                "y": 0,
                "w": 25,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 136.74302440406885,
                "y": 38.25697559593209,
                "w": 25,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        0,
                        175
                    ],
                    [
                        175,
                        0
                    ]
                ],
                "speed": 50,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 0,
                    "y": 175
                },
                "pointTo": {
                    "x": 175,
                    "y": 0
                },
                "xv": 35.35533905932738,
                "yv": -35.35533905932737,
                "inView": false
            },
            {
                "x": 38.25697559593209,
                "y": 136.74302440406885,
                "w": 25,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        175,
                        0
                    ],
                    [
                        0,
                        175
                    ]
                ],
                "speed": 50,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 175,
                    "y": 0
                },
                "pointTo": {
                    "x": 0,
                    "y": 175
                },
                "xv": -35.35533905932737,
                "yv": 35.35533905932738,
                "inView": false
            },
            {
                "x": 700,
                "y": 16950,
                "w": 100,
                "h": 100,
                "type": "mark",
                "time": 10,
                "inView": false
            },
            {
                "x": 850,
                "y": 16600,
                "w": 100,
                "h": 100,
                "type": "cure",
                "inView": false
            },
            {
                "x": 1225,
                "y": 16225,
                "w": 50,
                "h": 50,
                "type": "mark",
                "time": 3.5,
                "inView": false
            },
            {
                "x": 975,
                "y": 16225,
                "w": 50,
                "h": 50,
                "type": "cure",
                "inView": false
            },
            {
                "points": [
                    [
                        1775,
                        125
                    ],
                    [
                        1750,
                        225
                    ],
                    [
                        1725,
                        200
                    ],
                    [
                        1737.5,
                        150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1725,
                    "right": 1775,
                    "top": 125,
                    "bottom": 225
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1750,
                        400
                    ],
                    [
                        1750,
                        575
                    ],
                    [
                        1712.5,
                        550
                    ],
                    [
                        1712.5,
                        500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1712.5,
                    "right": 1750,
                    "top": 400,
                    "bottom": 575
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1600,
                        400
                    ],
                    [
                        1625,
                        500
                    ],
                    [
                        1625,
                        550
                    ],
                    [
                        1600,
                        575
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1600,
                    "right": 1625,
                    "top": 400,
                    "bottom": 575
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1800,
                        400
                    ],
                    [
                        1818.75,
                        500
                    ],
                    [
                        1818.75,
                        550
                    ],
                    [
                        1800,
                        562.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1800,
                    "right": 1818.75,
                    "top": 400,
                    "bottom": 562.5
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1525,
                        600
                    ],
                    [
                        1550,
                        600
                    ],
                    [
                        1550,
                        625
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1525,
                    "right": 1550,
                    "top": 600,
                    "bottom": 625
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1400,
                        600
                    ],
                    [
                        1425,
                        600
                    ],
                    [
                        1400,
                        625
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1400,
                    "right": 1425,
                    "top": 600,
                    "bottom": 625
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1400,
                        700
                    ],
                    [
                        1450,
                        750
                    ],
                    [
                        1400,
                        750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1400,
                    "right": 1450,
                    "top": 700,
                    "bottom": 750
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1275,
                        175
                    ],
                    [
                        1375,
                        175
                    ],
                    [
                        1375,
                        300
                    ],
                    [
                        1275,
                        325
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1275,
                    "right": 1375,
                    "top": 175,
                    "bottom": 325
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        500,
                        1850
                    ],
                    [
                        525,
                        1900
                    ],
                    [
                        500,
                        1900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 500,
                    "right": 525,
                    "top": 1850,
                    "bottom": 1900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 450,
                "y": 1850,
                "w": 50,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        1750
                    ],
                    [
                        1600,
                        1750
                    ],
                    [
                        1600,
                        1800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1550,
                    "right": 1600,
                    "top": 1750,
                    "bottom": 1800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        2100
                    ],
                    [
                        1550,
                        2100
                    ],
                    [
                        1500,
                        2125
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1500,
                    "right": 1550,
                    "top": 2100,
                    "bottom": 2125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        2000
                    ],
                    [
                        1375,
                        2000
                    ],
                    [
                        1350,
                        2025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1375,
                    "top": 2000,
                    "bottom": 2025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        2000
                    ],
                    [
                        1350,
                        2000
                    ],
                    [
                        1350,
                        2025
                    ],
                    [
                        1300,
                        2050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1350,
                    "top": 2000,
                    "bottom": 2050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1225,
                "y": 2150,
                "r": 12.5,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 12.5,
                "inView": false
            },
            {
                "points": [
                    [
                        1125,
                        2437.5
                    ],
                    [
                        1200,
                        2475
                    ],
                    [
                        1125,
                        2475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1200,
                    "top": 2437.5,
                    "bottom": 2475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1125,
                        2412.5
                    ],
                    [
                        1162.5,
                        2475
                    ],
                    [
                        1125,
                        2475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1162.5,
                    "top": 2412.5,
                    "bottom": 2475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        2450
                    ],
                    [
                        1250,
                        2475
                    ],
                    [
                        1175,
                        2475
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1175,
                    "right": 1250,
                    "top": 2450,
                    "bottom": 2475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        2400
                    ],
                    [
                        1125,
                        2412.5
                    ],
                    [
                        1100,
                        2412.5
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1100,
                    "right": 1125,
                    "top": 2400,
                    "bottom": 2412.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        925,
                        2125
                    ],
                    [
                        1100,
                        2125
                    ],
                    [
                        1100,
                        2162.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 925,
                    "right": 1100,
                    "top": 2125,
                    "bottom": 2162.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        2125
                    ],
                    [
                        950,
                        2125
                    ],
                    [
                        875,
                        2237.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 950,
                    "top": 2125,
                    "bottom": 2237.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        2125
                    ],
                    [
                        912.5,
                        2125
                    ],
                    [
                        875,
                        2375
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 912.5,
                    "top": 2125,
                    "bottom": 2375
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        2350
                    ],
                    [
                        950,
                        2400
                    ],
                    [
                        875,
                        2400
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 875,
                    "right": 950,
                    "top": 2350,
                    "bottom": 2400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        2150
                    ],
                    [
                        650,
                        2250
                    ],
                    [
                        625,
                        2250
                    ],
                    [
                        620,
                        2225
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 620,
                    "right": 650,
                    "top": 2150,
                    "bottom": 2250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        2150
                    ],
                    [
                        430,
                        2225
                    ],
                    [
                        425,
                        2250
                    ],
                    [
                        400,
                        2250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 430,
                    "top": 2150,
                    "bottom": 2250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        2000
                    ],
                    [
                        550,
                        2000
                    ],
                    [
                        575,
                        2087.5
                    ],
                    [
                        575,
                        2112.5
                    ],
                    [
                        550,
                        2170
                    ],
                    [
                        525,
                        2190
                    ],
                    [
                        500,
                        2170
                    ],
                    [
                        475,
                        2112.5
                    ],
                    [
                        475,
                        2087.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 475,
                    "right": 575,
                    "top": 2000,
                    "bottom": 2190
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        2000
                    ],
                    [
                        850,
                        2000
                    ],
                    [
                        850,
                        2025
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 2000,
                    "bottom": 2025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        2100
                    ],
                    [
                        400,
                        2125
                    ],
                    [
                        350,
                        2125
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 350,
                    "right": 400,
                    "top": 2100,
                    "bottom": 2125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 200,
                "y": 2100,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        2337.5
                    ],
                    [
                        25,
                        2350
                    ],
                    [
                        25,
                        2400
                    ],
                    [
                        0,
                        2412.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 25,
                    "top": 2337.5,
                    "bottom": 2412.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 250,
                "y": 2600,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 250,
                "y": 2150,
                "w": 100,
                "h": 475,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 300,
                "y": 2150,
                "w": 50,
                "h": 450,
                "type": "snap",
                "snapDistance": 5,
                "snapWait": 0.5,
                "snapX": true,
                "snapY": true,
                "inView": false
            },
            {
                "x": -9.375,
                "y": 2975,
                "radius": 28.125,
                "radius2": 62.5,
                "type": "lava-oval",
                "canCollide": true,
                "renderType": "oval",
                "inView": false
            },
            {
                "x": -62.5,
                "y": 2900,
                "w": 62.5,
                "h": 750,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        162.5,
                        3000
                    ],
                    [
                        200,
                        3000
                    ],
                    [
                        200,
                        3037.5
                    ],
                    [
                        175,
                        3025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 162.5,
                    "right": 200,
                    "top": 3000,
                    "bottom": 3037.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        3237.5
                    ],
                    [
                        12.5,
                        3250
                    ],
                    [
                        12.5,
                        3300
                    ],
                    [
                        0,
                        3312.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 12.5,
                    "top": 3237.5,
                    "bottom": 3312.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        3525
                    ],
                    [
                        200,
                        3650
                    ],
                    [
                        187.5,
                        3600
                    ],
                    [
                        187.5,
                        3550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 187.5,
                    "right": 200,
                    "top": 3525,
                    "bottom": 3650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        300,
                        3400
                    ],
                    [
                        425,
                        3400
                    ],
                    [
                        400,
                        3500
                    ],
                    [
                        300,
                        3550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 300,
                    "right": 425,
                    "top": 3400,
                    "bottom": 3550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        3600
                    ],
                    [
                        600,
                        3750
                    ],
                    [
                        525,
                        3750
                    ],
                    [
                        550,
                        3650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 525,
                    "right": 600,
                    "top": 3600,
                    "bottom": 3750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 275,
                "y": 3650,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        3350
                    ],
                    [
                        687.5,
                        3500
                    ],
                    [
                        650,
                        3500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 3350,
                    "bottom": 3500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 600,
                "y": 3375,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        3400
                    ],
                    [
                        675,
                        3500
                    ],
                    [
                        600,
                        3500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 600,
                    "right": 700,
                    "top": 3400,
                    "bottom": 3500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        375,
                        3325
                    ],
                    [
                        425,
                        3325
                    ],
                    [
                        450,
                        3350
                    ],
                    [
                        350,
                        3350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 450,
                    "top": 3325,
                    "bottom": 3350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 475,
                "y": 2875,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": false
            },
            {
                "x": 475,
                "y": 2875,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        3000
                    ],
                    [
                        700,
                        3000
                    ],
                    [
                        700,
                        3050
                    ],
                    [
                        625,
                        3050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 625,
                    "right": 700,
                    "top": 3000,
                    "bottom": 3050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        2875
                    ],
                    [
                        800,
                        2875
                    ],
                    [
                        750,
                        2900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 750,
                    "right": 800,
                    "top": 2875,
                    "bottom": 2900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 925,
                "y": 3200,
                "w": 25,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        3100
                    ],
                    [
                        825,
                        3100
                    ],
                    [
                        800,
                        3200
                    ],
                    [
                        750,
                        3200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 750,
                    "right": 825,
                    "top": 3100,
                    "bottom": 3200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        925,
                        3100
                    ],
                    [
                        925,
                        3250
                    ],
                    [
                        850,
                        3250
                    ],
                    [
                        875,
                        3150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 850,
                    "right": 925,
                    "top": 3100,
                    "bottom": 3250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        3475
                    ],
                    [
                        800,
                        3600
                    ],
                    [
                        775,
                        3600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 775,
                    "right": 800,
                    "top": 3475,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        3675
                    ],
                    [
                        750,
                        3800
                    ],
                    [
                        725,
                        3800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 725,
                    "right": 750,
                    "top": 3675,
                    "bottom": 3800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 737.5,
                "y": 3187.5,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 800,
                "y": 3600,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 750,
                "y": 3800,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 687.5,
                "y": 3400,
                "w": 12.5,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 3587.5,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        3775
                    ],
                    [
                        650,
                        3775
                    ],
                    [
                        625,
                        3800
                    ],
                    [
                        600,
                        3800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 600,
                    "right": 650,
                    "top": 3775,
                    "bottom": 3800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        3850
                    ],
                    [
                        300,
                        3850
                    ],
                    [
                        350,
                        3900
                    ],
                    [
                        250,
                        3900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 250,
                    "right": 350,
                    "top": 3850,
                    "bottom": 3900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        125,
                        3800
                    ],
                    [
                        225,
                        3800
                    ],
                    [
                        150,
                        3850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 125,
                    "right": 225,
                    "top": 3800,
                    "bottom": 3850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        75,
                        3875
                    ],
                    [
                        100,
                        3900
                    ],
                    [
                        50,
                        3900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 50,
                    "right": 100,
                    "top": 3875,
                    "bottom": 3900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        3950
                    ],
                    [
                        225,
                        3950
                    ],
                    [
                        175,
                        4000
                    ],
                    [
                        100,
                        3975
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 100,
                    "right": 225,
                    "top": 3950,
                    "bottom": 4000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        3950
                    ],
                    [
                        600,
                        3950
                    ],
                    [
                        550,
                        4025
                    ],
                    [
                        425,
                        3975
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 600,
                    "top": 3950,
                    "bottom": 4025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        325,
                        4025
                    ],
                    [
                        375,
                        4125
                    ],
                    [
                        200,
                        4125
                    ],
                    [
                        200,
                        4100
                    ],
                    [
                        250,
                        4050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 200,
                    "right": 375,
                    "top": 4025,
                    "bottom": 4125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        4150
                    ],
                    [
                        550,
                        4175
                    ],
                    [
                        400,
                        4175
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 550,
                    "top": 4150,
                    "bottom": 4175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        375,
                        4125
                    ],
                    [
                        400,
                        4150
                    ],
                    [
                        400,
                        4175
                    ],
                    [
                        375,
                        4175
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 375,
                    "right": 400,
                    "top": 4125,
                    "bottom": 4175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        600,
                        4100
                    ],
                    [
                        600,
                        4150
                    ],
                    [
                        550,
                        4150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 550,
                    "right": 600,
                    "top": 4100,
                    "bottom": 4150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        4025
                    ],
                    [
                        650,
                        4100
                    ],
                    [
                        625,
                        4100
                    ],
                    [
                        625,
                        4075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 625,
                    "right": 650,
                    "top": 4025,
                    "bottom": 4100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        4000
                    ],
                    [
                        700,
                        4025
                    ],
                    [
                        650,
                        4025
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 4000,
                    "bottom": 4025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        3950
                    ],
                    [
                        575,
                        3950
                    ],
                    [
                        550,
                        3975
                    ],
                    [
                        450,
                        4025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 575,
                    "top": 3950,
                    "bottom": 4025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        315,
                        4060
                    ],
                    [
                        350,
                        4125
                    ],
                    [
                        225,
                        4125
                    ],
                    [
                        225,
                        4100
                    ],
                    [
                        250,
                        4075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 225,
                    "right": 350,
                    "top": 4060,
                    "bottom": 4125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        3600
                    ],
                    [
                        950,
                        3600
                    ],
                    [
                        950,
                        3650
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 900,
                    "right": 950,
                    "top": 3600,
                    "bottom": 3650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        3600
                    ],
                    [
                        850,
                        3600
                    ],
                    [
                        825,
                        3650
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 3600,
                    "bottom": 3650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        3450
                    ],
                    [
                        1025,
                        3450
                    ],
                    [
                        1025,
                        3475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1025,
                    "top": 3450,
                    "bottom": 3475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1125,
                        3525
                    ],
                    [
                        1125,
                        3550
                    ],
                    [
                        1100,
                        3550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1125,
                    "top": 3525,
                    "bottom": 3550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        3325
                    ],
                    [
                        1125,
                        3325
                    ],
                    [
                        1125,
                        3350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1125,
                    "top": 3325,
                    "bottom": 3350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1075,
                        3275
                    ],
                    [
                        1150,
                        3275
                    ],
                    [
                        1150,
                        3350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1075,
                    "right": 1150,
                    "top": 3275,
                    "bottom": 3350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        3500
                    ],
                    [
                        1150,
                        3575
                    ],
                    [
                        1100,
                        3575
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1150,
                    "top": 3500,
                    "bottom": 3575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        3350
                    ],
                    [
                        950,
                        3450
                    ],
                    [
                        850,
                        3400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 950,
                    "top": 3350,
                    "bottom": 3450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        3300
                    ],
                    [
                        950,
                        3300
                    ],
                    [
                        950,
                        3325
                    ],
                    [
                        850,
                        3375
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 950,
                    "top": 3300,
                    "bottom": 3375
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 875,
                "y": 3550,
                "r": 10,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 10,
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        2700
                    ],
                    [
                        1070,
                        2700
                    ],
                    [
                        1050,
                        2800
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1050,
                    "right": 1070,
                    "top": 2700,
                    "bottom": 2800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1125,
                        3050
                    ],
                    [
                        1200,
                        3050
                    ],
                    [
                        1200,
                        3200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1200,
                    "top": 3050,
                    "bottom": 3200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        3050
                    ],
                    [
                        1200,
                        3250
                    ],
                    [
                        1125,
                        3250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1200,
                    "top": 3050,
                    "bottom": 3250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        3125
                    ],
                    [
                        1200,
                        3250
                    ],
                    [
                        1125,
                        3250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1200,
                    "top": 3125,
                    "bottom": 3250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        3050
                    ],
                    [
                        1200,
                        3050
                    ],
                    [
                        1200,
                        3175
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1200,
                    "top": 3050,
                    "bottom": 3175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        3200
                    ],
                    [
                        975,
                        3200
                    ],
                    [
                        950,
                        3250
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 950,
                    "right": 975,
                    "top": 3200,
                    "bottom": 3250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 900,
                "y": 2762.5,
                "w": 25,
                "h": 37.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        2775
                    ],
                    [
                        1300,
                        2800
                    ],
                    [
                        1275,
                        2800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1275,
                    "right": 1300,
                    "top": 2775,
                    "bottom": 2800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1200,
                "y": 2675,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1300,
                "y": 2675,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        3800
                    ],
                    [
                        1150,
                        3850
                    ],
                    [
                        1100,
                        3850
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1100,
                    "right": 1150,
                    "top": 3800,
                    "bottom": 3850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        3650
                    ],
                    [
                        1050,
                        3650
                    ],
                    [
                        1000,
                        3700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 3650,
                    "bottom": 3700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        3750
                    ],
                    [
                        1050,
                        3800
                    ],
                    [
                        1000,
                        3800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 3750,
                    "bottom": 3800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        3650
                    ],
                    [
                        1150,
                        3650
                    ],
                    [
                        1150,
                        3700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1100,
                    "right": 1150,
                    "top": 3650,
                    "bottom": 3700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1075,
                "y": 3725,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        3525
                    ],
                    [
                        1375,
                        3525
                    ],
                    [
                        1250,
                        3550
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1375,
                    "top": 3525,
                    "bottom": 3550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1425,
                        3525
                    ],
                    [
                        1550,
                        3525
                    ],
                    [
                        1550,
                        3575
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1425,
                    "right": 1550,
                    "top": 3525,
                    "bottom": 3575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        3150
                    ],
                    [
                        1375,
                        3175
                    ],
                    [
                        1250,
                        3175
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1375,
                    "top": 3150,
                    "bottom": 3175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        3150
                    ],
                    [
                        1550,
                        3175
                    ],
                    [
                        1425,
                        3175
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1425,
                    "right": 1550,
                    "top": 3150,
                    "bottom": 3175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1650,
                        3000
                    ],
                    [
                        1650,
                        3050
                    ],
                    [
                        1600,
                        3050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1600,
                    "right": 1650,
                    "top": 3000,
                    "bottom": 3050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        2900
                    ],
                    [
                        1200,
                        3000
                    ],
                    [
                        1150,
                        3000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1150,
                    "right": 1200,
                    "top": 2900,
                    "bottom": 3000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        3525
                    ],
                    [
                        1550,
                        3600
                    ],
                    [
                        1475,
                        3600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1475,
                    "right": 1550,
                    "top": 3525,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        3575
                    ],
                    [
                        1550,
                        3600
                    ],
                    [
                        1425,
                        3600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1425,
                    "right": 1550,
                    "top": 3575,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1325,
                        3650
                    ],
                    [
                        1350,
                        3650
                    ],
                    [
                        1350,
                        3700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1325,
                    "right": 1350,
                    "top": 3650,
                    "bottom": 3700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        3775
                    ],
                    [
                        1350,
                        3800
                    ],
                    [
                        1300,
                        3800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1350,
                    "top": 3775,
                    "bottom": 3800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        3650
                    ],
                    [
                        1250,
                        3650
                    ],
                    [
                        1200,
                        3675
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1200,
                    "right": 1250,
                    "top": 3650,
                    "bottom": 3675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        3650
                    ],
                    [
                        1225,
                        3650
                    ],
                    [
                        1200,
                        3700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1200,
                    "right": 1225,
                    "top": 3650,
                    "bottom": 3700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1300,
                        3650
                    ],
                    [
                        1350,
                        3650
                    ],
                    [
                        1350,
                        3675
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1350,
                    "top": 3650,
                    "bottom": 3675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        3750
                    ],
                    [
                        1350,
                        3800
                    ],
                    [
                        1325,
                        3800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1325,
                    "right": 1350,
                    "top": 3750,
                    "bottom": 3800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1950,
                        3575
                    ],
                    [
                        1550,
                        3600
                    ],
                    [
                        1300,
                        3600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1950,
                    "top": 3575,
                    "bottom": 3600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        2400
                    ],
                    [
                        1575,
                        2400
                    ],
                    [
                        1575,
                        2425
                    ],
                    [
                        1400,
                        2500
                    ],
                    [
                        1350,
                        2500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1575,
                    "top": 2400,
                    "bottom": 2500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1725,
                "y": 2425,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": false
            },
            {
                "points": [
                    [
                        1750,
                        2725
                    ],
                    [
                        1750,
                        2800
                    ],
                    [
                        1650,
                        2800
                    ],
                    [
                        1650,
                        2775
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1650,
                    "right": 1750,
                    "top": 2725,
                    "bottom": 2800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1450,
                        2700
                    ],
                    [
                        1550,
                        2700
                    ],
                    [
                        1525,
                        2950
                    ],
                    [
                        1500,
                        2975
                    ],
                    [
                        1475,
                        2950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1450,
                    "right": 1550,
                    "top": 2700,
                    "bottom": 2975
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        2700
                    ],
                    [
                        1375,
                        2700
                    ],
                    [
                        1350,
                        2725
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1350,
                    "right": 1375,
                    "top": 2700,
                    "bottom": 2725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        3100
                    ],
                    [
                        1550,
                        3175
                    ],
                    [
                        1525,
                        3175
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1525,
                    "right": 1550,
                    "top": 3100,
                    "bottom": 3175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        3050
                    ],
                    [
                        1275,
                        3175
                    ],
                    [
                        1250,
                        3175
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1275,
                    "top": 3050,
                    "bottom": 3175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1350,
                "y": 3075,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        3950
                    ],
                    [
                        1150,
                        3950
                    ],
                    [
                        1137.5,
                        4000
                    ],
                    [
                        1112.5,
                        4000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1150,
                    "top": 3950,
                    "bottom": 4000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        3900
                    ],
                    [
                        1350,
                        4050
                    ],
                    [
                        1250,
                        4050
                    ],
                    [
                        1287.5,
                        3912.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1350,
                    "top": 3900,
                    "bottom": 4050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        3850
                    ],
                    [
                        1200,
                        3850
                    ],
                    [
                        1187.5,
                        3875
                    ],
                    [
                        1150,
                        3900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1200,
                    "top": 3850,
                    "bottom": 3900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        3900
                    ],
                    [
                        1425,
                        3925
                    ],
                    [
                        1425,
                        3975
                    ],
                    [
                        1400,
                        4000
                    ],
                    [
                        1350,
                        4050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1425,
                    "top": 3900,
                    "bottom": 4050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        3875
                    ],
                    [
                        1800,
                        4025
                    ],
                    [
                        1700,
                        3975
                    ],
                    [
                        1725,
                        3925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1700,
                    "right": 1800,
                    "top": 3875,
                    "bottom": 4025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        4025
                    ],
                    [
                        1800,
                        4175
                    ],
                    [
                        1725,
                        4125
                    ],
                    [
                        1725,
                        4075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1725,
                    "right": 1800,
                    "top": 4025,
                    "bottom": 4175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1400,
                        4000
                    ],
                    [
                        1425,
                        4125
                    ],
                    [
                        1400,
                        4150
                    ],
                    [
                        1350,
                        4150
                    ],
                    [
                        1350,
                        4050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1425,
                    "top": 4000,
                    "bottom": 4150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1750,
                        4350
                    ],
                    [
                        1800,
                        4350
                    ],
                    [
                        1800,
                        4450
                    ],
                    [
                        1700,
                        4450
                    ],
                    [
                        1700,
                        4400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1700,
                    "right": 1800,
                    "top": 4350,
                    "bottom": 4450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        4150
                    ],
                    [
                        1400,
                        4262.5
                    ],
                    [
                        1400,
                        4400
                    ],
                    [
                        1350,
                        4312.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1400,
                    "top": 4150,
                    "bottom": 4400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1800,
                        4175
                    ],
                    [
                        1800,
                        4450
                    ],
                    [
                        1750,
                        4250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1750,
                    "right": 1800,
                    "top": 4175,
                    "bottom": 4450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        4450
                    ],
                    [
                        1550,
                        4500
                    ],
                    [
                        1500,
                        4500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1500,
                    "right": 1550,
                    "top": 4450,
                    "bottom": 4500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1600,
                        4400
                    ],
                    [
                        1600,
                        4450
                    ],
                    [
                        1550,
                        4450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1550,
                    "right": 1600,
                    "top": 4400,
                    "bottom": 4450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1750,
                        4400
                    ],
                    [
                        1800,
                        4450
                    ],
                    [
                        1600,
                        4450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1600,
                    "right": 1800,
                    "top": 4400,
                    "bottom": 4450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        4400
                    ],
                    [
                        1400,
                        4400
                    ],
                    [
                        1350,
                        4450
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1350,
                    "right": 1400,
                    "top": 4400,
                    "bottom": 4450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        4500
                    ],
                    [
                        1500,
                        4650
                    ],
                    [
                        1400,
                        4650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1400,
                    "right": 1500,
                    "top": 4500,
                    "bottom": 4650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        4550
                    ],
                    [
                        1500,
                        4650
                    ],
                    [
                        1350,
                        4650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1500,
                    "top": 4550,
                    "bottom": 4650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        4600
                    ],
                    [
                        1500,
                        4650
                    ],
                    [
                        1300,
                        4650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1300,
                    "right": 1500,
                    "top": 4600,
                    "bottom": 4650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1200,
                "y": 4575,
                "w": 50,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        4550
                    ],
                    [
                        1250,
                        4575
                    ],
                    [
                        1200,
                        4575
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1200,
                    "right": 1250,
                    "top": 4550,
                    "bottom": 4575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        4475
                    ],
                    [
                        1250,
                        4475
                    ],
                    [
                        1250,
                        4500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1200,
                    "right": 1250,
                    "top": 4475,
                    "bottom": 4500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1200,
                "y": 4450,
                "w": 50,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        4600
                    ],
                    [
                        1200,
                        4700
                    ],
                    [
                        1125,
                        4700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1125,
                    "right": 1200,
                    "top": 4600,
                    "bottom": 4700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        4675
                    ],
                    [
                        1200,
                        4700
                    ],
                    [
                        1075,
                        4700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1075,
                    "right": 1200,
                    "top": 4675,
                    "bottom": 4700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        4450
                    ],
                    [
                        1075,
                        4450
                    ],
                    [
                        1000,
                        4550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1075,
                    "top": 4450,
                    "bottom": 4550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        4450
                    ],
                    [
                        1125,
                        4450
                    ],
                    [
                        1000,
                        4475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1125,
                    "top": 4450,
                    "bottom": 4475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1075,
                        4700
                    ],
                    [
                        1075,
                        4750
                    ],
                    [
                        1025,
                        4750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1025,
                    "right": 1075,
                    "top": 4700,
                    "bottom": 4750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 4675,
                "w": 250,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        4675
                    ],
                    [
                        1000,
                        4675
                    ],
                    [
                        950,
                        4700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 950,
                    "right": 1000,
                    "top": 4675,
                    "bottom": 4700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        4700
                    ],
                    [
                        775,
                        4700
                    ],
                    [
                        700,
                        4800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 700,
                    "right": 775,
                    "top": 4700,
                    "bottom": 4800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        5050
                    ],
                    [
                        725,
                        5075
                    ],
                    [
                        700,
                        5100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 725,
                    "top": 5050,
                    "bottom": 5100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        5275
                    ],
                    [
                        950,
                        5300
                    ],
                    [
                        925,
                        5300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 925,
                    "right": 950,
                    "top": 5275,
                    "bottom": 5300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 950,
                "y": 4750,
                "w": 50,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        4975
                    ],
                    [
                        1000,
                        4975
                    ],
                    [
                        1000,
                        5000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 950,
                    "right": 1000,
                    "top": 4975,
                    "bottom": 5000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 4762.5,
                "w": 25,
                "h": 37.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 975,
                "y": 5300,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        975,
                        5325
                    ],
                    [
                        1000,
                        5325
                    ],
                    [
                        975,
                        5350
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 975,
                    "right": 1000,
                    "top": 5325,
                    "bottom": 5350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        5387.5
                    ],
                    [
                        1050,
                        5400
                    ],
                    [
                        1037.5,
                        5400
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1037.5,
                    "right": 1050,
                    "top": 5387.5,
                    "bottom": 5400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 5425,
                "w": 25,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        725,
                        5400
                    ],
                    [
                        725,
                        5425
                    ],
                    [
                        700,
                        5425
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 700,
                    "right": 725,
                    "top": 5400,
                    "bottom": 5425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        625,
                        5350
                    ],
                    [
                        650,
                        5450
                    ],
                    [
                        625,
                        5450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 625,
                    "right": 650,
                    "top": 5350,
                    "bottom": 5450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        5975
                    ],
                    [
                        612.5,
                        6050
                    ],
                    [
                        550,
                        6050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 612.5,
                    "top": 5975,
                    "bottom": 6050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        5850
                    ],
                    [
                        850,
                        5850
                    ],
                    [
                        850,
                        5875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 5850,
                    "bottom": 5875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        787.5,
                        5925
                    ],
                    [
                        800,
                        5962.5
                    ],
                    [
                        800,
                        6050
                    ],
                    [
                        775,
                        6050
                    ],
                    [
                        775,
                        5962.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 775,
                    "right": 800,
                    "top": 5925,
                    "bottom": 6050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        925,
                        6000
                    ],
                    [
                        950,
                        6000
                    ],
                    [
                        950,
                        6025
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 925,
                    "right": 950,
                    "top": 6000,
                    "bottom": 6025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 887.5,
                "y": 6062.5,
                "w": 12.5,
                "h": 87.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 887.5,
                "y": 6062.5,
                "radius": 13,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        6500
                    ],
                    [
                        750,
                        6500
                    ],
                    [
                        550,
                        6550
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 750,
                    "top": 6500,
                    "bottom": 6550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        6500
                    ],
                    [
                        600,
                        6500
                    ],
                    [
                        550,
                        6650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 600,
                    "top": 6500,
                    "bottom": 6650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        6650
                    ],
                    [
                        1000,
                        6700
                    ],
                    [
                        1000,
                        6750
                    ],
                    [
                        800,
                        6750
                    ],
                    [
                        700,
                        6750
                    ],
                    [
                        700,
                        6662.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 1000,
                    "top": 6650,
                    "bottom": 6750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        6650
                    ],
                    [
                        1050,
                        6750
                    ],
                    [
                        950,
                        6750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 950,
                    "right": 1050,
                    "top": 6650,
                    "bottom": 6750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        6150
                    ],
                    [
                        900,
                        6500
                    ],
                    [
                        850,
                        6500
                    ],
                    [
                        850,
                        6200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 900,
                    "top": 6150,
                    "bottom": 6500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1000,
                "y": 6125,
                "w": 1000,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        6125
                    ],
                    [
                        1000,
                        6125
                    ],
                    [
                        1000,
                        6150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 950,
                    "right": 1000,
                    "top": 6125,
                    "bottom": 6150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        6225
                    ],
                    [
                        900,
                        6450
                    ],
                    [
                        850,
                        6400
                    ],
                    [
                        850,
                        6275
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 900,
                    "top": 6225,
                    "bottom": 6450
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        6275
                    ],
                    [
                        900,
                        6325
                    ],
                    [
                        900,
                        6350
                    ],
                    [
                        850,
                        6400
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 900,
                    "top": 6275,
                    "bottom": 6400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        6300
                    ],
                    [
                        1050,
                        6375
                    ],
                    [
                        1050,
                        6400
                    ],
                    [
                        1000,
                        6425
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 6300,
                    "bottom": 6425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        6425
                    ],
                    [
                        1050,
                        6475
                    ],
                    [
                        1000,
                        6575
                    ],
                    [
                        1000,
                        6450
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 6425,
                    "bottom": 6575
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        6525
                    ],
                    [
                        1050,
                        6625
                    ],
                    [
                        1000,
                        6650
                    ],
                    [
                        1000,
                        6625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1050,
                    "top": 6525,
                    "bottom": 6650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 650,
                "y": 6750,
                "w": 1350,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        6750
                    ],
                    [
                        650,
                        6800
                    ],
                    [
                        600,
                        6800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 600,
                    "right": 650,
                    "top": 6750,
                    "bottom": 6800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        7700
                    ],
                    [
                        500,
                        7862.5
                    ],
                    [
                        450,
                        7837.5
                    ],
                    [
                        450,
                        7725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7700,
                    "bottom": 7862.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7575
                    ],
                    [
                        500,
                        7600
                    ],
                    [
                        500,
                        7650
                    ],
                    [
                        450,
                        7675
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7575,
                    "bottom": 7675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        7325
                    ],
                    [
                        500,
                        7550
                    ],
                    [
                        450,
                        7525
                    ],
                    [
                        450,
                        7350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7325,
                    "bottom": 7550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7200
                    ],
                    [
                        500,
                        7225
                    ],
                    [
                        500,
                        7275
                    ],
                    [
                        450,
                        7300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7200,
                    "bottom": 7300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        6950
                    ],
                    [
                        500,
                        6950
                    ],
                    [
                        500,
                        7175
                    ],
                    [
                        450,
                        7150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 6950,
                    "bottom": 7175
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 587.5,
                "y": 7787.5,
                "w": 12.5,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        8025
                    ],
                    [
                        400,
                        8050
                    ],
                    [
                        350,
                        8050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 400,
                    "top": 8025,
                    "bottom": 8050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7350
                    ],
                    [
                        500,
                        7450
                    ],
                    [
                        450,
                        7525
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7350,
                    "bottom": 7525
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7725
                    ],
                    [
                        500,
                        7800
                    ],
                    [
                        450,
                        7837.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7725,
                    "bottom": 7837.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        6950
                    ],
                    [
                        500,
                        7050
                    ],
                    [
                        450,
                        7150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 6950,
                    "bottom": 7150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7225
                    ],
                    [
                        500,
                        7250
                    ],
                    [
                        450,
                        7275
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7225,
                    "bottom": 7275
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7600
                    ],
                    [
                        500,
                        7625
                    ],
                    [
                        450,
                        7650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7600,
                    "bottom": 7650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7425
                    ],
                    [
                        500,
                        7450
                    ],
                    [
                        450,
                        7475
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7425,
                    "bottom": 7475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7025
                    ],
                    [
                        500,
                        7050
                    ],
                    [
                        450,
                        7075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7025,
                    "bottom": 7075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        7762.5
                    ],
                    [
                        500,
                        7800
                    ],
                    [
                        450,
                        7812.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 7762.5,
                    "bottom": 7812.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 775,
                "y": 900,
                "r": 50,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 50,
                "inView": true
            },
            {
                "points": [
                    [
                        700,
                        800
                    ],
                    [
                        850,
                        800
                    ],
                    [
                        775,
                        875
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 700,
                    "right": 850,
                    "top": 800,
                    "bottom": 875
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        825,
                        875
                    ],
                    [
                        850,
                        950
                    ],
                    [
                        800,
                        950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 800,
                    "right": 850,
                    "top": 875,
                    "bottom": 950
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        725,
                        875
                    ],
                    [
                        750,
                        950
                    ],
                    [
                        700,
                        950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 700,
                    "right": 750,
                    "top": 875,
                    "bottom": 950
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        700,
                        3350
                    ],
                    [
                        700,
                        3400
                    ],
                    [
                        687.5,
                        3400
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 687.5,
                    "right": 700,
                    "top": 3350,
                    "bottom": 3400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1025,
                "y": 3375,
                "w": 50,
                "h": 100,
                "type": "roundedcorners",
                "circles": [
                    {
                        "x": 1028,
                        "y": 3378,
                        "radius": 3
                    },
                    {
                        "x": 1072,
                        "y": 3378,
                        "radius": 3
                    },
                    {
                        "x": 1028,
                        "y": 3472,
                        "radius": 3
                    },
                    {
                        "x": 1072,
                        "y": 3472,
                        "radius": 3
                    }
                ],
                "rects": [
                    {
                        "x": 1028,
                        "y": 3375,
                        "w": 44,
                        "h": 100
                    },
                    {
                        "x": 1025,
                        "y": 3378,
                        "w": 50,
                        "h": 94
                    }
                ],
                "roundRadius": 3,
                "inView": false
            },
            {
                "x": 1025,
                "y": 3375,
                "w": 25,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        8337.5
                    ],
                    [
                        975,
                        8337.5
                    ],
                    [
                        975,
                        8350
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 850,
                    "right": 975,
                    "top": 8337.5,
                    "bottom": 8350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        987.5,
                        8512.5
                    ],
                    [
                        987.5,
                        8637.5
                    ],
                    [
                        950,
                        8637.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 950,
                    "right": 987.5,
                    "top": 8512.5,
                    "bottom": 8637.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 950,
                "y": 8675,
                "w": 37.5,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        975,
                        8400
                    ],
                    [
                        987.5,
                        8400
                    ],
                    [
                        987.5,
                        8512.5
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 975,
                    "right": 987.5,
                    "top": 8400,
                    "bottom": 8512.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 975,
                "y": 8337.5,
                "w": 12.5,
                "h": 12.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        8637.5
                    ],
                    [
                        950,
                        8675
                    ],
                    [
                        850,
                        8675
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 950,
                    "top": 8637.5,
                    "bottom": 8675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        987.5,
                        8637.5
                    ],
                    [
                        987.5,
                        8675
                    ],
                    [
                        950,
                        8675
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 950,
                    "right": 987.5,
                    "top": 8637.5,
                    "bottom": 8675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        8675
                    ],
                    [
                        950,
                        8675
                    ],
                    [
                        950,
                        8750
                    ],
                    [
                        700,
                        8750
                    ],
                    [
                        700,
                        8700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 950,
                    "top": 8675,
                    "bottom": 8750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 500,
                "y": 8500,
                "w": 50,
                "h": 275,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        8775
                    ],
                    [
                        550,
                        8775
                    ],
                    [
                        500,
                        8800
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 500,
                    "right": 550,
                    "top": 8775,
                    "bottom": 8800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        8500
                    ],
                    [
                        750,
                        8500
                    ],
                    [
                        750,
                        8600
                    ],
                    [
                        600,
                        8600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 750,
                    "top": 8500,
                    "bottom": 8600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        8650
                    ],
                    [
                        600,
                        8750
                    ],
                    [
                        550,
                        8750
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 550,
                    "right": 600,
                    "top": 8650,
                    "bottom": 8750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        8900
                    ],
                    [
                        700,
                        8900
                    ],
                    [
                        700,
                        8950
                    ],
                    [
                        600,
                        8950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 600,
                    "right": 700,
                    "top": 8900,
                    "bottom": 8950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        8850
                    ],
                    [
                        700,
                        8900
                    ],
                    [
                        650,
                        8900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 8850,
                    "bottom": 8900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        250,
                        9050
                    ],
                    [
                        475,
                        9050
                    ],
                    [
                        495,
                        9075
                    ],
                    [
                        475,
                        9100
                    ],
                    [
                        250,
                        9100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 250,
                    "right": 495,
                    "top": 9050,
                    "bottom": 9100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        9100
                    ],
                    [
                        450,
                        9100
                    ],
                    [
                        437.5,
                        9137.5
                    ],
                    [
                        400,
                        9150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 400,
                    "right": 450,
                    "top": 9100,
                    "bottom": 9150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        525,
                        9200
                    ],
                    [
                        525,
                        9250
                    ],
                    [
                        500,
                        9250
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 500,
                    "right": 525,
                    "top": 9200,
                    "bottom": 9250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1300,
                "y": 9700,
                "w": 50,
                "h": 12.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1300,
                "y": 9737.5,
                "w": 50,
                "h": 12.5,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        9820
                    ],
                    [
                        1300,
                        9900
                    ],
                    [
                        1250,
                        9900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 9820,
                    "bottom": 9900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        9975
                    ],
                    [
                        1300,
                        9975
                    ],
                    [
                        1250,
                        10000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 9975,
                    "bottom": 10000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1200,
                        10000
                    ],
                    [
                        1250,
                        10000
                    ],
                    [
                        1200,
                        10025
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1200,
                    "right": 1250,
                    "top": 10000,
                    "bottom": 10025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        10125
                    ],
                    [
                        1350,
                        10150
                    ],
                    [
                        1300,
                        10150
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1350,
                    "top": 10125,
                    "bottom": 10150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        4550
                    ],
                    [
                        1300,
                        4562.5
                    ],
                    [
                        1250,
                        4562.5
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 4550,
                    "bottom": 4562.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        655,
                        8800
                    ],
                    [
                        700,
                        8800
                    ],
                    [
                        700,
                        8850
                    ],
                    [
                        650,
                        8850
                    ],
                    [
                        650,
                        8805
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 8800,
                    "bottom": 8850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        562.5,
                        10637.5
                    ],
                    [
                        800,
                        10637.5
                    ],
                    [
                        800,
                        10662.5
                    ],
                    [
                        587.5,
                        10662.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 562.5,
                    "right": 800,
                    "top": 10637.5,
                    "bottom": 10662.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        400,
                        10750
                    ],
                    [
                        700,
                        10750
                    ],
                    [
                        700,
                        10800
                    ],
                    [
                        350,
                        10800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 700,
                    "top": 10750,
                    "bottom": 10800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        10750
                    ],
                    [
                        700,
                        10800
                    ],
                    [
                        650,
                        10800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 700,
                    "top": 10750,
                    "bottom": 10800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        350,
                        10550
                    ],
                    [
                        400,
                        10550
                    ],
                    [
                        350,
                        10600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 350,
                    "right": 400,
                    "top": 10550,
                    "bottom": 10600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        10700
                    ],
                    [
                        850,
                        10700
                    ],
                    [
                        850,
                        10812.5
                    ],
                    [
                        800,
                        10787.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 800,
                    "right": 850,
                    "top": 10700,
                    "bottom": 10812.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        10900
                    ],
                    [
                        800,
                        10900
                    ],
                    [
                        800,
                        10950
                    ],
                    [
                        775,
                        10975
                    ],
                    [
                        725,
                        10975
                    ],
                    [
                        700,
                        10950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 700,
                    "right": 800,
                    "top": 10900,
                    "bottom": 10975
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 700,
                "y": 11150,
                "radius": 38,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        10950
                    ],
                    [
                        937.5,
                        10950
                    ],
                    [
                        875,
                        11000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 937.5,
                    "top": 10950,
                    "bottom": 11000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1025,
                        10950
                    ],
                    [
                        1250,
                        10950
                    ],
                    [
                        1162.5,
                        11025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1025,
                    "right": 1250,
                    "top": 10950,
                    "bottom": 11025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1262.5,
                "y": 10937.5,
                "radius": 38,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        11600
                    ],
                    [
                        1387.5,
                        11600
                    ],
                    [
                        1400,
                        11675
                    ],
                    [
                        1325,
                        11675
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1325,
                    "right": 1400,
                    "top": 11600,
                    "bottom": 11675
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1325,
                        11725
                    ],
                    [
                        1400,
                        11725
                    ],
                    [
                        1387.5,
                        11800
                    ],
                    [
                        1350,
                        11800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1325,
                    "right": 1400,
                    "top": 11725,
                    "bottom": 11800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        11675
                    ],
                    [
                        1450,
                        11675
                    ],
                    [
                        1475,
                        11700
                    ],
                    [
                        1450,
                        11725
                    ],
                    [
                        1250,
                        11725
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1475,
                    "top": 11675,
                    "bottom": 11725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1550,
                        11762.5
                    ],
                    [
                        1550,
                        11850
                    ],
                    [
                        1450,
                        11850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1450,
                    "right": 1550,
                    "top": 11762.5,
                    "bottom": 11850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1450,
                        11550
                    ],
                    [
                        1550,
                        11550
                    ],
                    [
                        1550,
                        11637.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1450,
                    "right": 1550,
                    "top": 11550,
                    "bottom": 11637.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1325,
                        11850
                    ],
                    [
                        1325,
                        11900
                    ],
                    [
                        1300,
                        11900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1300,
                    "right": 1325,
                    "top": 11850,
                    "bottom": 11900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1150,
                "y": 11725,
                "w": 75,
                "h": 125,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1225,
                "y": 11825,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1075,
                        12075
                    ],
                    [
                        1125,
                        12075
                    ],
                    [
                        1137.5,
                        12150
                    ],
                    [
                        1062.5,
                        12150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1062.5,
                    "right": 1137.5,
                    "top": 12075,
                    "bottom": 12150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1062.5,
                        11850
                    ],
                    [
                        1137.5,
                        11850
                    ],
                    [
                        1125,
                        11925
                    ],
                    [
                        1075,
                        11925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1062.5,
                    "right": 1137.5,
                    "top": 11850,
                    "bottom": 11925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        12075
                    ],
                    [
                        925,
                        12075
                    ],
                    [
                        937.5,
                        12150
                    ],
                    [
                        862.5,
                        12150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 862.5,
                    "right": 937.5,
                    "top": 12075,
                    "bottom": 12150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        862.5,
                        11850
                    ],
                    [
                        937.5,
                        11850
                    ],
                    [
                        925,
                        11925
                    ],
                    [
                        875,
                        11925
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 862.5,
                    "right": 937.5,
                    "top": 11850,
                    "bottom": 11925
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1025,
                        11850
                    ],
                    [
                        1175,
                        11850
                    ],
                    [
                        1125,
                        11875
                    ],
                    [
                        1075,
                        11875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1025,
                    "right": 1175,
                    "top": 11850,
                    "bottom": 11875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        825,
                        11850
                    ],
                    [
                        975,
                        11850
                    ],
                    [
                        925,
                        11875
                    ],
                    [
                        875,
                        11875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 825,
                    "right": 975,
                    "top": 11850,
                    "bottom": 11875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1075,
                        12125
                    ],
                    [
                        1125,
                        12125
                    ],
                    [
                        1175,
                        12150
                    ],
                    [
                        1025,
                        12150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1025,
                    "right": 1175,
                    "top": 12125,
                    "bottom": 12150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        12125
                    ],
                    [
                        925,
                        12125
                    ],
                    [
                        975,
                        12150
                    ],
                    [
                        825,
                        12150
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 825,
                    "right": 975,
                    "top": 12125,
                    "bottom": 12150
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        12150
                    ],
                    [
                        750,
                        12250
                    ],
                    [
                        725,
                        12200
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 725,
                    "right": 750,
                    "top": 12150,
                    "bottom": 12250
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1000,
                "y": 11925,
                "r": 18,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 18,
                "inView": false
            },
            {
                "x": 1000,
                "y": 12075,
                "r": 18,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 18,
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        12575
                    ],
                    [
                        837.5,
                        12700
                    ],
                    [
                        650,
                        12700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 837.5,
                    "top": 12575,
                    "bottom": 12700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        762.5,
                        12250
                    ],
                    [
                        900,
                        12250
                    ],
                    [
                        900,
                        12350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 762.5,
                    "right": 900,
                    "top": 12250,
                    "bottom": 12350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        12612.5
                    ],
                    [
                        975,
                        12700
                    ],
                    [
                        950,
                        12700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 950,
                    "right": 975,
                    "top": 12612.5,
                    "bottom": 12700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1050,
                        12550
                    ],
                    [
                        1200,
                        12550
                    ],
                    [
                        1200,
                        12650
                    ],
                    [
                        1112.5,
                        12625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1050,
                    "right": 1200,
                    "top": 12550,
                    "bottom": 12650
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        12700
                    ],
                    [
                        1300,
                        12725
                    ],
                    [
                        1250,
                        12725
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1250,
                    "right": 1300,
                    "top": 12700,
                    "bottom": 12725
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1350,
                        12650
                    ],
                    [
                        1400,
                        12650
                    ],
                    [
                        1400,
                        12700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1350,
                    "right": 1400,
                    "top": 12650,
                    "bottom": 12700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        13037.5
                    ],
                    [
                        1145,
                        13055
                    ],
                    [
                        1162.5,
                        13100
                    ],
                    [
                        1100,
                        13100
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1162.5,
                    "top": 13037.5,
                    "bottom": 13100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        12875
                    ],
                    [
                        1025,
                        12900
                    ],
                    [
                        975,
                        12900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 975,
                    "right": 1025,
                    "top": 12875,
                    "bottom": 12900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        12800
                    ],
                    [
                        600,
                        12800
                    ],
                    [
                        500,
                        12850
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 500,
                    "right": 600,
                    "top": 12800,
                    "bottom": 12850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        875,
                        13025
                    ],
                    [
                        925,
                        13050
                    ],
                    [
                        850,
                        13050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 925,
                    "top": 13025,
                    "bottom": 13050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        12900
                    ],
                    [
                        1100,
                        13100
                    ],
                    [
                        1050,
                        13100
                    ],
                    [
                        1050,
                        12950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1050,
                    "right": 1100,
                    "top": 12900,
                    "bottom": 13100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        13150
                    ],
                    [
                        1250,
                        13350
                    ],
                    [
                        1200,
                        13350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1200,
                    "right": 1250,
                    "top": 13150,
                    "bottom": 13350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        13500
                    ],
                    [
                        1100,
                        13600
                    ],
                    [
                        1000,
                        13600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1100,
                    "top": 13500,
                    "bottom": 13600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        13550
                    ],
                    [
                        1100,
                        13600
                    ],
                    [
                        1000,
                        13600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1100,
                    "top": 13550,
                    "bottom": 13600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        13525
                    ],
                    [
                        1075,
                        13600
                    ],
                    [
                        1000,
                        13600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1075,
                    "top": 13525,
                    "bottom": 13600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        13300
                    ],
                    [
                        1250,
                        13350
                    ],
                    [
                        1150,
                        13350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1250,
                    "top": 13300,
                    "bottom": 13350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        13450
                    ],
                    [
                        1000,
                        13475
                    ],
                    [
                        900,
                        13475
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 900,
                    "right": 1000,
                    "top": 13450,
                    "bottom": 13475
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        13375
                    ],
                    [
                        1000,
                        13375
                    ],
                    [
                        800,
                        13425
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 800,
                    "right": 1000,
                    "top": 13375,
                    "bottom": 13425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        800,
                        13375
                    ],
                    [
                        850,
                        13375
                    ],
                    [
                        800,
                        13550
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 800,
                    "right": 850,
                    "top": 13375,
                    "bottom": 13550
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        13775
                    ],
                    [
                        775,
                        13800
                    ],
                    [
                        775,
                        13850
                    ],
                    [
                        650,
                        13875
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 775,
                    "top": 13775,
                    "bottom": 13875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        13750
                    ],
                    [
                        900,
                        13900
                    ],
                    [
                        875,
                        13850
                    ],
                    [
                        875,
                        13800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 875,
                    "right": 900,
                    "top": 13750,
                    "bottom": 13900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        650,
                        14200
                    ],
                    [
                        675,
                        14250
                    ],
                    [
                        675,
                        14300
                    ],
                    [
                        650,
                        14325
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 675,
                    "top": 14200,
                    "bottom": 14325
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        14200
                    ],
                    [
                        900,
                        14325
                    ],
                    [
                        775,
                        14300
                    ],
                    [
                        775,
                        14250
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 775,
                    "right": 900,
                    "top": 14200,
                    "bottom": 14325
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        14200
                    ],
                    [
                        900,
                        14350
                    ],
                    [
                        850,
                        14350
                    ],
                    [
                        850,
                        14312.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 850,
                    "right": 900,
                    "top": 14200,
                    "bottom": 14350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1275,
                "y": 11525,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1275,
                "y": 11525,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1325,
                "y": 12775,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1050,
                "y": 13100,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1075,
                "y": 13125,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1125,
                "y": 13350,
                "w": 125,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 13375,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 650,
                "y": 14500,
                "radius": 40,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        14450
                    ],
                    [
                        850,
                        14500
                    ],
                    [
                        825,
                        14500
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 825,
                    "right": 850,
                    "top": 14450,
                    "bottom": 14500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        850,
                        14350
                    ],
                    [
                        850,
                        14400
                    ],
                    [
                        837.5,
                        14375
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 837.5,
                    "right": 850,
                    "top": 14350,
                    "bottom": 14400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        150,
                        15800
                    ],
                    [
                        175,
                        15825
                    ],
                    [
                        125,
                        15875
                    ],
                    [
                        100,
                        15850
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 175,
                    "top": 15800,
                    "bottom": 15875
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        125,
                        15950
                    ],
                    [
                        150,
                        16000
                    ],
                    [
                        125,
                        16000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 125,
                    "right": 150,
                    "top": 15950,
                    "bottom": 16000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        15825
                    ],
                    [
                        300,
                        15825
                    ],
                    [
                        300,
                        15900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 275,
                    "right": 300,
                    "top": 15825,
                    "bottom": 15900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        300,
                        15950
                    ],
                    [
                        300,
                        16000
                    ],
                    [
                        250,
                        16000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 250,
                    "right": 300,
                    "top": 15950,
                    "bottom": 16000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": -112.5,
                "y": 15575,
                "w": 112.5,
                "h": 262.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        15700
                    ],
                    [
                        37.5,
                        15700
                    ],
                    [
                        0,
                        15737.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 37.5,
                    "top": 15700,
                    "bottom": 15737.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        15887.5
                    ],
                    [
                        550,
                        15950
                    ],
                    [
                        425,
                        15950
                    ],
                    [
                        450,
                        15900
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 425,
                    "right": 550,
                    "top": 15887.5,
                    "bottom": 15950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        750,
                        15700
                    ],
                    [
                        800,
                        15850
                    ],
                    [
                        750,
                        16000
                    ],
                    [
                        650,
                        16000
                    ],
                    [
                        650,
                        15800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 650,
                    "right": 800,
                    "top": 15700,
                    "bottom": 16000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        700,
                        15750
                    ],
                    [
                        650,
                        15850
                    ],
                    [
                        600,
                        15800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 600,
                    "right": 700,
                    "top": 15750,
                    "bottom": 15850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        537.5,
                        15950
                    ],
                    [
                        550,
                        15950
                    ],
                    [
                        537.5,
                        16000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 537.5,
                    "right": 550,
                    "top": 15950,
                    "bottom": 16000
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        450,
                        16000
                    ],
                    [
                        475,
                        16000
                    ],
                    [
                        450,
                        16100
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 450,
                    "right": 475,
                    "top": 16000,
                    "bottom": 16100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        16000
                    ],
                    [
                        950,
                        16100
                    ],
                    [
                        925,
                        16100
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 925,
                    "right": 950,
                    "top": 16000,
                    "bottom": 16100
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        950,
                        15925
                    ],
                    [
                        1000,
                        15925
                    ],
                    [
                        1000,
                        15950
                    ],
                    [
                        925,
                        15950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 925,
                    "right": 1000,
                    "top": 15925,
                    "bottom": 15950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1100,
                        15700
                    ],
                    [
                        1150,
                        15700
                    ],
                    [
                        1150,
                        15850
                    ],
                    [
                        1100,
                        15800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1100,
                    "right": 1150,
                    "top": 15700,
                    "bottom": 15850
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1300,
                "y": 15775,
                "w": 100,
                "h": 50,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        15987.5
                    ],
                    [
                        1500,
                        16025
                    ],
                    [
                        1462.5,
                        16025
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1462.5,
                    "right": 1500,
                    "top": 15987.5,
                    "bottom": 16025
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1450,
                        16075
                    ],
                    [
                        1500,
                        16075
                    ],
                    [
                        1425,
                        16200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1425,
                    "right": 1500,
                    "top": 16075,
                    "bottom": 16200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        16075
                    ],
                    [
                        1500,
                        16300
                    ],
                    [
                        1437.5,
                        16300
                    ],
                    [
                        1425,
                        16200
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1425,
                    "right": 1500,
                    "top": 16075,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1400,
                        16200
                    ],
                    [
                        1425,
                        16200
                    ],
                    [
                        1437.5,
                        16300
                    ],
                    [
                        1412.5,
                        16300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1400,
                    "right": 1437.5,
                    "top": 16200,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        16000
                    ],
                    [
                        1100,
                        16000
                    ],
                    [
                        1062.5,
                        16075
                    ],
                    [
                        1000,
                        16050
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1000,
                    "right": 1100,
                    "top": 16000,
                    "bottom": 16075
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1150,
                        16000
                    ],
                    [
                        1250,
                        16000
                    ],
                    [
                        1250,
                        16050
                    ],
                    [
                        1200,
                        16037.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1150,
                    "right": 1250,
                    "top": 16000,
                    "bottom": 16050
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1145,
                        16185
                    ],
                    [
                        1175,
                        16300
                    ],
                    [
                        1075,
                        16300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1075,
                    "right": 1175,
                    "top": 16185,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        900,
                        16150
                    ],
                    [
                        1000,
                        16150
                    ],
                    [
                        900,
                        16300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 900,
                    "right": 1000,
                    "top": 16150,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1050,
                "y": 16350,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1000,
                        16350
                    ],
                    [
                        1000,
                        16400
                    ],
                    [
                        900,
                        16400
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 900,
                    "right": 1000,
                    "top": 16350,
                    "bottom": 16400
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        16450
                    ],
                    [
                        500,
                        16500
                    ],
                    [
                        450,
                        16500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 450,
                    "right": 500,
                    "top": 16450,
                    "bottom": 16500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        16400
                    ],
                    [
                        350,
                        16500
                    ],
                    [
                        275,
                        16500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 275,
                    "right": 350,
                    "top": 16400,
                    "bottom": 16500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        275,
                        16350
                    ],
                    [
                        300,
                        16500
                    ],
                    [
                        275,
                        16500
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 275,
                    "right": 300,
                    "top": 16350,
                    "bottom": 16500
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        375,
                        16250
                    ],
                    [
                        425,
                        16250
                    ],
                    [
                        375,
                        16300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 375,
                    "right": 425,
                    "top": 16250,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        425,
                        16250
                    ],
                    [
                        425,
                        16375
                    ],
                    [
                        375,
                        16375
                    ],
                    [
                        375,
                        16300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 375,
                    "right": 425,
                    "top": 16250,
                    "bottom": 16375
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        16250
                    ],
                    [
                        200,
                        16250
                    ],
                    [
                        200,
                        16300
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 200,
                    "top": 16250,
                    "bottom": 16300
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        50,
                        16650
                    ],
                    [
                        50,
                        16712.5
                    ],
                    [
                        0,
                        16700
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 0,
                    "right": 50,
                    "top": 16650,
                    "bottom": 16712.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        16850
                    ],
                    [
                        200,
                        16900
                    ],
                    [
                        100,
                        16900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 200,
                    "top": 16850,
                    "bottom": 16900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        100,
                        16800
                    ],
                    [
                        125,
                        16900
                    ],
                    [
                        100,
                        16900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 100,
                    "right": 125,
                    "top": 16800,
                    "bottom": 16900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        250,
                        16850
                    ],
                    [
                        350,
                        16900
                    ],
                    [
                        250,
                        16900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 250,
                    "right": 350,
                    "top": 16850,
                    "bottom": 16900
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        16300
                    ],
                    [
                        1500,
                        16300
                    ],
                    [
                        1550,
                        16350
                    ],
                    [
                        1300,
                        16350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1250,
                    "right": 1550,
                    "top": 16300,
                    "bottom": 16350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        15700
                    ],
                    [
                        1550,
                        15700
                    ],
                    [
                        1550,
                        15750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1500,
                    "right": 1550,
                    "top": 15700,
                    "bottom": 15750
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        500,
                        16700
                    ],
                    [
                        700,
                        16700
                    ],
                    [
                        700,
                        16762.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 500,
                    "right": 700,
                    "top": 16700,
                    "bottom": 16762.5
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 850,
                "y": 16600,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "points": [
                    [
                        1250,
                        16650
                    ],
                    [
                        1300,
                        16650
                    ],
                    [
                        1312.5,
                        16700
                    ],
                    [
                        1200,
                        16700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1200,
                    "right": 1312.5,
                    "top": 16650,
                    "bottom": 16700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1500,
                        16600
                    ],
                    [
                        1625,
                        16600
                    ],
                    [
                        1600,
                        16612.5
                    ],
                    [
                        1550,
                        16625
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1500,
                    "right": 1625,
                    "top": 16600,
                    "bottom": 16625
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1812.5,
                        16675
                    ],
                    [
                        1900,
                        16675
                    ],
                    [
                        1912.5,
                        16700
                    ],
                    [
                        1800,
                        16700
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1800,
                    "right": 1912.5,
                    "top": 16675,
                    "bottom": 16700
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1975,
                        16825
                    ],
                    [
                        2000,
                        16825
                    ],
                    [
                        2000,
                        16950
                    ],
                    [
                        1962.5,
                        16950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1962.5,
                    "right": 2000,
                    "top": 16825,
                    "bottom": 16950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1900,
                        16750
                    ],
                    [
                        1937.5,
                        16750
                    ],
                    [
                        1900,
                        16800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1900,
                    "right": 1937.5,
                    "top": 16750,
                    "bottom": 16800
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        200,
                        150
                    ],
                    [
                        200,
                        200
                    ],
                    [
                        150,
                        200
                    ]
                ],
                "type": "poly-tp",
                "tpx": 1275,
                "tpy": 25,
                "most": {
                    "left": 150,
                    "right": 200,
                    "top": 150,
                    "bottom": 200
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": -50,
                "y": -50,
                "w": 25,
                "h": 300,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 225,
                "y": -50,
                "w": 25,
                "h": 300,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": -50,
                "y": 225,
                "w": 300,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": -50,
                "y": -50,
                "w": 300,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": -37.5,
                "y": -37.5,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 237.5,
                "y": -37.5,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": 237.5,
                "y": 237.5,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "x": -37.5,
                "y": 237.5,
                "r": 35,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 35,
                "inView": false
            },
            {
                "points": [
                    [
                        1887.5,
                        900
                    ],
                    [
                        1862.5,
                        962.5
                    ],
                    [
                        1800,
                        975
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1800,
                    "right": 1887.5,
                    "top": 900,
                    "bottom": 975
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1350,
                        900
                    ],
                    [
                        1450,
                        900
                    ],
                    [
                        1350,
                        1000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1350,
                    "right": 1450,
                    "top": 900,
                    "bottom": 1000
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1800,
                        875
                    ],
                    [
                        1862.5,
                        962.5
                    ],
                    [
                        1775,
                        900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1775,
                    "right": 1862.5,
                    "top": 875,
                    "bottom": 962.5
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 75,
                "y": 950,
                "r": 13,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "x": 75,
                "y": 1125,
                "r": 13,
                "type": "circle-safe",
                "renderType": "circleR",
                "radius": 13,
                "inView": false
            },
            {
                "points": [
                    [
                        0,
                        1900
                    ],
                    [
                        1125,
                        1900
                    ],
                    [
                        1175,
                        1950
                    ],
                    [
                        350,
                        1950
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 0,
                    "right": 1175,
                    "top": 1900,
                    "bottom": 1950
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        2000,
                        1325
                    ],
                    [
                        2000,
                        1350
                    ],
                    [
                        1912.5,
                        1350
                    ],
                    [
                        1912.5,
                        1337.5
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1912.5,
                    "right": 2000,
                    "top": 1325,
                    "bottom": 1350
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 300,
                "y": 1325,
                "w": 25,
                "h": 100,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "points": [
                    [
                        300,
                        1325
                    ],
                    [
                        300,
                        1425
                    ],
                    [
                        125,
                        1400
                    ],
                    [
                        125,
                        1350
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 125,
                    "right": 300,
                    "top": 1325,
                    "bottom": 1425
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        550,
                        2555
                    ],
                    [
                        575,
                        2600
                    ],
                    [
                        525,
                        2600
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 525,
                    "right": 575,
                    "top": 2555,
                    "bottom": 2600
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 875,
                "y": 2625,
                "w": 200,
                "h": 25,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 1100,
                "y": 2525,
                "w": 25,
                "h": 150,
                "type": "lava",
                "canCollide": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 1500,
                "w": 75,
                "h": 50,
                "type": "roundedcorners",
                "circles": [
                    {
                        "x": 3,
                        "y": 1503,
                        "radius": 3
                    },
                    {
                        "x": 72,
                        "y": 1503,
                        "radius": 3
                    },
                    {
                        "x": 3,
                        "y": 1547,
                        "radius": 3
                    },
                    {
                        "x": 72,
                        "y": 1547,
                        "radius": 3
                    }
                ],
                "rects": [
                    {
                        "x": 3,
                        "y": 1500,
                        "w": 69,
                        "h": 50
                    },
                    {
                        "x": 0,
                        "y": 1503,
                        "w": 75,
                        "h": 44
                    }
                ],
                "roundRadius": 3,
                "inView": false
            },
            {
                "x": 50,
                "y": 1500,
                "w": 25,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 725,
                "y": 3150,
                "w": 25,
                "h": 225,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 700,
                "y": 3350,
                "w": 50,
                "h": 50,
                "type": "roundedcorners",
                "circles": [
                    {
                        "x": 710,
                        "y": 3360,
                        "radius": 10
                    },
                    {
                        "x": 740,
                        "y": 3360,
                        "radius": 10
                    },
                    {
                        "x": 710,
                        "y": 3390,
                        "radius": 10
                    },
                    {
                        "x": 740,
                        "y": 3390,
                        "radius": 10
                    }
                ],
                "rects": [
                    {
                        "x": 710,
                        "y": 3350,
                        "w": 30,
                        "h": 50
                    },
                    {
                        "x": 700,
                        "y": 3360,
                        "w": 50,
                        "h": 30
                    }
                ],
                "roundRadius": 10,
                "inView": false
            },
            {
                "x": 675,
                "y": 3500,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 650,
                "y": 3550,
                "w": 50,
                "h": 50,
                "type": "roundedcorners",
                "circles": [
                    {
                        "x": 660,
                        "y": 3560,
                        "radius": 10
                    },
                    {
                        "x": 690,
                        "y": 3560,
                        "radius": 10
                    },
                    {
                        "x": 660,
                        "y": 3590,
                        "radius": 10
                    },
                    {
                        "x": 690,
                        "y": 3590,
                        "radius": 10
                    }
                ],
                "rects": [
                    {
                        "x": 660,
                        "y": 3550,
                        "w": 30,
                        "h": 50
                    },
                    {
                        "x": 650,
                        "y": 3560,
                        "w": 50,
                        "h": 30
                    }
                ],
                "roundRadius": 10,
                "inView": false
            },
            {
                "x": 1000,
                "y": 3187.5,
                "w": 37.5,
                "h": 12.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1037.5,
                "y": 3187.5,
                "radius": 13,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1600,
                "y": 2500,
                "w": 50,
                "h": 50,
                "type": "roundedcorners",
                "circles": [
                    {
                        "x": 1610,
                        "y": 2510,
                        "radius": 10
                    },
                    {
                        "x": 1640,
                        "y": 2510,
                        "radius": 10
                    },
                    {
                        "x": 1610,
                        "y": 2540,
                        "radius": 10
                    },
                    {
                        "x": 1640,
                        "y": 2540,
                        "radius": 10
                    }
                ],
                "rects": [
                    {
                        "x": 1610,
                        "y": 2500,
                        "w": 30,
                        "h": 50
                    },
                    {
                        "x": 1600,
                        "y": 2510,
                        "w": 50,
                        "h": 30
                    }
                ],
                "roundRadius": 10,
                "inView": false
            },
            {
                "points": [
                    [
                        1700,
                        3975
                    ],
                    [
                        1750,
                        4000
                    ],
                    [
                        1750,
                        4062.5
                    ],
                    [
                        1725,
                        4125
                    ],
                    [
                        1637.5,
                        4125
                    ],
                    [
                        1600,
                        4075
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1600,
                    "right": 1750,
                    "top": 3975,
                    "bottom": 4125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "points": [
                    [
                        1425,
                        3975
                    ],
                    [
                        1550,
                        3975
                    ],
                    [
                        1425,
                        4125
                    ],
                    [
                        1400,
                        4000
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 1400,
                    "right": 1550,
                    "top": 3975,
                    "bottom": 4125
                },
                "renderType": "poly",
                "inView": false
            },
            {
                "x": 1300,
                "y": 4487.5,
                "w": 37.5,
                "h": 12.5,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1337.5,
                "y": 4487.5,
                "radius": 13,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 750,
                "y": 8300,
                "w": 250,
                "h": 450,
                "type": "size",
                "size": 22,
                "inView": false
            }
        ]
        const enemies = [];
        const safes = [
            {
                "x": 1300,
                "y": 16200,
                "w": 25,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 1.5308084989341916e-16,
                "y": 1695,
                "w": 75,
                "h": 30,
                "renderAbove": true
            },
            {
                "x": 1000,
                "y": 1700,
                "w": 10,
                "h": 200,
                "renderAbove": true
            },
            {
                "x": 87,
                "y": 1755,
                "w": 24,
                "h": 14,
                "renderAbove": true
            },
            {
                "x": 152,
                "y": 1766,
                "w": 14,
                "h": 14,
                "renderAbove": true
            },
            {
                "x": 210,
                "y": 1784,
                "w": 14,
                "h": 15,
                "renderAbove": true
            },
            {
                "x": 254,
                "y": 1740,
                "w": 36,
                "h": 16,
                "renderAbove": true
            },
            {
                "x": 318,
                "y": 1708,
                "w": 25,
                "h": 22,
                "renderAbove": true
            },
            {
                "x": 1512.5,
                "y": 712.5,
                "w": 25,
                "h": 75,
                "renderAbove": true
            },
            {
                "x": 1375,
                "y": 662.5,
                "w": 50,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 600,
                "y": 2950,
                "w": 100,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 325,
                "y": 3000,
                "w": 25,
                "h": 100,
                "renderAbove": true
            },
            {
                "x": 650,
                "y": 3800,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1300,
                "y": 2850,
                "w": 50,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1500,
                "y": 2512.5,
                "w": 100,
                "h": 25,
                "renderAbove": true
            },
            {
                "x": 1300,
                "y": 15700,
                "w": 200,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 350,
                "y": 3000,
                "w": 25,
                "h": 50,
                "renderAbove": true
            }
        ]
        const texts = [
            {
                "x": 1275,
                "y": 125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "1",
                "angle": 0,
                "story": false
            },
            {
                "x": 1900,
                "y": 1000,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "2",
                "angle": 0,
                "story": false
            },
            {
                "x": 25,
                "y": 1675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "3",
                "angle": 0,
                "story": false
            },
            {
                "x": 1825,
                "y": 2125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "4",
                "angle": 0,
                "story": false
            },
            {
                "x": 300,
                "y": 2050,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "5",
                "angle": 0,
                "story": false
            },
            {
                "x": 1662.5,
                "y": 725,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": -90,
                "story": false
            },
            {
                "x": 1687.5,
                "y": 675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": -90,
                "story": false
            },
            {
                "x": 1862.5,
                "y": 325,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 1912.5,
                "y": 375,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 68.75,
                "y": 2075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 131.25,
                "y": 2125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 68.75,
                "y": 2175,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 62.5,
                "y": 2225,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 131.25,
                "y": 2275,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            // {
            //     "x": 975,
            //     "y": 2575,
            //     "w": 25,
            //     "h": 25,
            //     "size": 30,
            //     "text": "these are solid",
            //     "angle": 0,
            //     "story": false
            // },
            {
                "x": 675,
                "y": 3825,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "6",
                "angle": 0,
                "story": false
            },
            {
                "x": 1400,
                "y": 3120,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "the conveyor is",
                "angle": 0,
                "story": false
            },
            {
                "x": 1400,
                "y": 3145,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "very very fast",
                "angle": 0,
                "story": false
            },
            {
                "x": 925,
                "y": 6075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "8",
                "angle": 0,
                "story": false
            },
            {
                "x": 1275,
                "y": 3725,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "7",
                "angle": 0,
                "story": false
            },
            {
                "x": 1275,
                "y": 10075,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "9",
                "angle": 0,
                "story": false
            },
            {
                "x": 825,
                "y": 13625,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 725,
                "y": 13675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            {
                "x": 1900,
                "y": 14425,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "good luck",
                "angle": 0,
                "story": false
            },
            {
                "x": 212.5,
                "y": 15912.5,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "10",
                "angle": 0,
                "story": false
            },
            {
                "x": 875,
                "y": 3825,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": -90,
                "story": false
            },
            {
                "x": 1500,
                "y": 14425,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "dont fail... it's a softlock.",
                "angle": 0,
                "story": false
            },
            {
                "x": 925,
                "y": 17025,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "time it",
                "angle": -30,
                "story": false
            },
            {
                "x": 1125,
                "y": 16675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 16625,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 0,
                "story": false
            },
            {
                "x": 1175,
                "y": 16625,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1200,
                "y": 18750,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "gaming",
                "angle": 0,
                "story": false
            },
            {
                "x": 875,
                "y": 18700,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "no more skill issue",
                "angle": 0,
                "story": false
            },
            {
                "x": 1300,
                "y": 18600,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "first relentless?",
                "angle": 0,
                "story": false
            },
            {
                "x": 900,
                "y": 18575,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "extra ggs if solo!",
                "angle": 0,
                "story": false
            },
            {
                "x": 1325,
                "y": 18675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "no way dude",
                "angle": 0,
                "story": false
            },
            {
                "x": 900,
                "y": 18800,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "how many 10 fails",
                "angle": 0,
                "story": false
            },
            {
                "x": 850,
                "y": 18475,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "congrats its over",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18625,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18575,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18525,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18725,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18775,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18825,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 18925,
                "w": 25,
                "h": 25,
                "size": 120,
                "text": "GG",
                "angle": 0,
                "story": false
            },
            {
                "x": 1075,
                "y": 19025,
                "w": 25,
                "h": 25,
                "size": 15,
                "text": "next up: the heart wrenchings",
                "angle": 0,
                "story": false
            },
            {
                "x": 1275,
                "y": 18425,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "heres ur sanity back",
                "angle": 0,
                "story": false
            },
            {
                "x": 1250,
                "y": 18350,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "pink win message",
                "angle": 0,
                "story": false
            },
            {
                "x": 875,
                "y": 18275,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "that was hard",
                "angle": 0,
                "story": false
            },
            {
                "x": 1175,
                "y": 18275,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "W",
                "angle": 0,
                "story": false
            },
            {
                "x": 1925,
                "y": 1525,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "->",
                "angle": 90,
                "story": false
            },
            // {
            //     "x": 950,
            //     "y": 2600,
            //     "w": 25,
            //     "h": 25,
            //     "size": 30,
            //     "text": "just hold",
            //     "angle": 0,
            //     "story": false
            // },
            // {
            //     "x": 1025,
            //     "y": 2600,
            //     "w": 25,
            //     "h": 25,
            //     "size": 30,
            //     "text": "->",
            //     "angle": 135,
            //     "story": false
            // }
        ]
    
        const str = convertOldExMap(obs, enemies, safes, texts, counter, 'pols');
        
        eval(str);
    
        mapDimensions.x=4000;
        mapDimensions.y=38000;

        spawnPosition.x=50;
        spawnPosition.y=50;
        window.respawnPlayer();
        colors.background='#383838'; colors.tile='#0d0d0d';

        C(0,[],[26],{
            x: spawnPosition.x,
            y: spawnPosition.y,
            r: 50,
            musicPath: 'https://www.youtube.com/watch?v=p6XthttV1JM'//'https://www.youtube.com/watch?v=xy_NKN75Jhw'
        });

        // C(0,[],[26],{
        //     x: 2500,
        //     y: 0,
        //     r: 50,
        //     musicPath: 'https://www.youtube.com/watch?v=zCxn6Rz4dNE'
        // });

        if(window.isServer !== true){
            C(1,[],[0],{x:-150,y:3050,w:150,h:300})
            C(1,[],[0],{x:0,y:2900,w:150,h:200})
            const o = obstacles.splice(241,1)[0];

            C(1,[0],[11],{type:[1,[0],[11]],x:700,y:3400,w:100,h:400,points:[[350,1700],[950,1700]],speed:150,currentPoint:1.9166666666666665,pointOn:{"x":950,"y":1700},pointTo:{"x":350,"y":1700},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[700,3400,5],[1900,3400,5]],})
            C(1,[0],[11],{type:[1,[0],[11]],x:1900,y:3400,w:100,h:400,points:[[950,1700],[350,1700]],speed:150,currentPoint:1.9166666666666665,pointOn:{"x":350,"y":1700},pointTo:{"x":950,"y":1700},xv:150,yv:0,inView:false,path:[[1900,3400,5],[700,3400,5]],})

            let o1 = obstacles.pop();
            let o2 = obstacles.pop();

            obstacles.unshift(o1);
            obstacles.unshift(o2);

            obstacles.unshift(o);

            obstacles.unshift(obstacles.splice(1454,1)[0]);
        }
        // obstacles.push(
        //     convertOldExMap([{
        //         "x": 400,
        //         "y": 1700,
        //         "w": 50,
        //         "h": 200,
        //         "type": "movingsafe",
        //         "points": [
        //             [
        //                 350,
        //                 1700
        //             ],
        //             [
        //                 950,
        //                 1700
        //             ]
        //         ],
        //         "speed": 150,
        //         "currentPoint": 1,
        //         "pointOn": {
        //             "x": 950,
        //             "y": 1700
        //         },
        //         "pointTo": {
        //             "x": 350,
        //             "y": 1700
        //         },
        //         "xv": -150,
        //         "yv": 1.8369701987210297e-14,
        //         "inView": false
        //     },{
        //         "x": 900,
        //         "y": 1700,
        //         "w": 50,
        //         "h": 200,
        //         "type": "movingsafe",
        //         "points": [
        //             [
        //                 950,
        //                 1700
        //             ],
        //             [
        //                 350,
        //                 1700
        //             ]
        //         ],
        //         "speed": 150,
        //         "currentPoint": 1,
        //         "pointOn": {
        //             "x": 350,
        //             "y": 1700
        //         },
        //         "pointTo": {
        //             "x": 950,
        //             "y": 1700
        //         },
        //         "xv": 150,
        //         "yv": 0,
        //         "inView": false
        //     }],[],[],[],0)
        // );

        // {
        //     "x": 800,
        //     "y": 18375,
        //     "w": 25,
        //     "h": 25,
        //     "size": 30,
        //     "text": "only took you {Math.round(window.timer)} seconds!",
        //     "angle": 0,
        //     "story": false
        // },
        // {
        //     "x": 1400,
        //     "y": 18500,
        //     "w": 25,
        //     "h": 25,
        //     "size": 30,
        //     "text": "better give a huge gg to {me().name}",
        //     "angle": 0,
        //     "story": false
        // },

        C(3,[],[20],{x:800*2,y:18375*2,fontSize:30*2,hex:'#FFFFFF',alpha:1,sf:(o)=>{
            o.text = `only took you ${~~(window.frames/60)} seconds!`;
        }})
        C(3,[],[20],{x:1400*2,y:18500*2,fontSize:30*2,hex:'#FFFFFF',alpha:1,sf:(o)=>{
            o.text = `better give a huge gg to ${window.players[window.selfId].name}`;
        }})
    }
})();

// var counter = 1000;

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
//             p.conveyorFriction = 0.82;
//             p.conveyorAngleRotateSpeed = 0;
//             p.conveyorForce = params.force / 10000 * 3.5 * 5 / 16.66;
//             return p;
//         }
//     },
//     'trans': {
//         type: [1,[],[20]],
//         customMap: (params) => {
//             return {hex: '#000000', alpha: params.opaq};
//         }
//     },
//     'block': {
//         type: [1,[],[20]],
//         customMap: (params) => {
//             return {hex: params.color, alpha: 1};
//         }
//     },
//     'circle-normal': {
//         type: [0,[],[0]],
//         radius: 'r' // this means map radius to r
//         // all other params filled in 1:1, so x will be filled in from x, y from y, etc.
//     },
//     'circle-lava': {
//         type: [0,[],[0,1]],
//         radius: 'r',
//     },
//     'lava': {
//         customMap: (params) => {
//             if(params.canCollide === false){
//                 return {type: [1,[],[1]]};
//             }
//             return {type: [1,[],[0,1]]};
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
//         type: [2,[],[0,1]],
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

//             if(params.collidable) p.type = [1,[0],[0,1]]
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
//         type: [0,[],[0,1]],
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
//             return {bounciness: params.effect/1.2/10, decay: 0.5};
//         }
//     },
//     'rotate-lava': {
//         type: [1,[1],[0,1]],
//         customMap: (params) => {
//             let ir = 0;
//             const top = {
//                 "x": 897.9566748453753,
//                 "y": 34396.94275421676
//             };
//             const bottom = {
//                 "x": 3219.8553910401743,
//                 "y": 36707.73636911095
//             }
//             const x = params.x * 2;
//             const y = params.y * 2;
//             if(x > top.x && x < bottom.x && y > top.y && y < bottom.y){
//                 ir = params.angle * 180 / Math.PI;
//             }
//             return {
//                 x: params.x * 2 - params.w,
//                 y: params.y * 2 - params.h,
//                 initialRotation: ir,
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
//                 toSnapX: params.toSnapX,
//                 toSnapY: params.toSnapY
//             }
//         }
//     },
//     'button': {
//         type: [1,[],[7]],
//         customMap: (params) => {
//             let isCertainCoin = false;
//             if(params.x === 750/2 && params.y === 13950/2){
//                 isCertainCoin = true;
//             }
//                 // {
//                 //     "x": 755.8511901863116,
//                 //     "y": 13944.893319997613
//                 // }
//             return {
//                 color: isCertainCoin ? '#d6d613' : '#d6d612',
//                 coinAmount: 1
//             }
//         }
//     },
//     'door': {
//         type: [1,[],[8]],
//         customMap: (params) => {
//             let isCertainDoor = false;
//             if(params.x === 1000/2 && params.y === 16100/2){
//                 isCertainDoor = true;
//             }
//             return {
//                 coinDoorColor: isCertainDoor ? '#d6d613' : '#d6d612',
//                 coindoorCoinAmount: 1
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

// polsObs.push(...safes);

// var alreadyLogged = {};

// var str = '';


// for(let i = 0; i < polsObs.length; i++){
//     const o = polsObs[i];
//     const typeDef = typeMap[o.type];

//     if(o.type === 'roundedcorners' || o.type === 'roundedlava'){
//         const circleType = o.type === 'roundedcorners' ? 'circle-normal' : 'circle-lava';
//         for(let i = 0; i < o.circles.length; i++){
//             polsObs.push({
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
//             polsObs.push({
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

// eval(str);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------OLD ABOVE OLDER BELOW----------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// mapDimensions.x=4000;
// mapDimensions.y=38000;

// spawnPosition.x=50;
// spawnPosition.y=50;
// window.respawnPlayer();
// colors.background='#383838'; colors.tile='#0d0d0d'

// C(1,[],[20],{type:[1,[],[20]],x:1500,y:16600,w:500,h:900,collide:false,opaq:0.1,inView:false,hex:"#000000",})
// C(1,[],[13],{type:[1,[],[13]],x:1600,y:7700,w:300,h:300,force:1000,dir:{"x":-1000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.1,})
// C(1,[],[13],{type:[1,[],[13]],x:1600,y:7300,w:300,h:400,force:1000,dir:{"x":0,"y":1000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.1,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:7300,w:150,h:100,points:[[800,3650],[800,3950]],speed:150,currentPoint:1.8333333333333335,collidable:true,pointOn:{"x":800,"y":3950},pointTo:{"x":800,"y":3650},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,7300,0.3],[1600,7900,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1750,y:7900,w:150,h:100,points:[[875,3950],[875,3650]],speed:150,currentPoint:1.8333333333333335,collidable:true,pointOn:{"x":875,"y":3650},pointTo:{"x":875,"y":3950},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1750,7900,0.3],[1750,7300,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1700,y:7450,w:200,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,7400],[1900,7550],[1850,7550],[1850,7450]],most:{"left":925,"right":950,"top":3700,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1600,y:7750,w:200,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,7750],[1650,7750],[1650,7850],[1600,7900]],most:{"left":800,"right":825,"top":3875,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[0],[12],{type:[1,[0],[12]],x:2800,y:2200,w:50,h:50,points:[[1400,1100],[1525,1100],[1525,1125],[1400,1125]],speed:750,currentPoint:0,tpx:3350,tpy:2250,pointOn:{"x":1400,"y":1100},pointTo:{"x":1525,"y":1100},xv:750,yv:0,inView:true,path:[[2800,2200,1.5],[3050,2200,1.5],[3050,2250,1.5],[2800,2250,1.5]],})
// C(1,[0],[12],{type:[1,[0],[12]],x:3050,y:2250,w:50,h:50,points:[[1525,1125],[1400,1125],[1400,1100],[1525,1100]],speed:750,currentPoint:0,tpx:3950,tpy:2250,pointOn:{"x":1525,"y":1125},pointTo:{"x":1400,"y":1125},xv:-750,yv:9.184850993605149e-14,inView:true,path:[[3050,2250,1.5],[2800,2250,1.5],[2800,2200,1.5],[3050,2200,1.5]],})
// C(1,[],[13],{type:[1,[],[13]],x:2800,y:2200,w:300,h:1200,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1,})
// C(1,[],[23],{type:[1,[],[23]],x:2800,y:2200,w:300,h:1000,tornadoStrength:25,inView:true,})
// C(1,[],[15],{type:[1,[],[15]],x:2800,y:2200,w:300,h:1100,rx:true,ry:true,inView:true,axisSpeedMultY:0,axisSpeedMultX:0,})
// C(1,[],[20],{type:[1,[],[20]],x:2750,y:2150,w:400,h:1350,color:"#c7c7c7",inView:true,hex:"#c7c7c7",})
// C(1,[],[17],{type:[1,[],[17]],x:700,y:2500,w:1900,h:500,time:0,maxTime:11,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:11000,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:2800,w:100,h:100,points:[[550,1400],[550,1450],[450,1450],[450,1400]],speed:215,currentPoint:3.8833333333340057,collidable:true,pointOn:{"x":450,"y":1400},pointTo:{"x":550,"y":1400},xv:215,yv:0,inView:false,path:[[1100,2800,0.43],[1100,2900,0.43],[900,2900,0.43],[900,2800,0.43]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3500,y:2000,w:100,h:100,points:[[1750,1000],[1750,900]],speed:175,currentPoint:1.416666666667743,collidable:true,pointOn:{"x":1750,"y":900},pointTo:{"x":1750,"y":1000},xv:1.0715659492539341e-14,yv:175,inView:true,path:[[3500,2000,0.35],[3500,1800,0.35]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2700,y:2000,w:100,h:100,points:[[1350,1000],[1350,900]],speed:175,currentPoint:1.416666666667743,collidable:true,pointOn:{"x":1350,"y":900},pointTo:{"x":1350,"y":1000},xv:1.0715659492539341e-14,yv:175,inView:true,path:[[2700,2000,0.35],[2700,1800,0.35]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2900,y:1900,w:100,h:100,points:[[1450,950],[1450,900],[1450,1000]],speed:175,currentPoint:1.916666666667743,collidable:true,pointOn:{"x":1450,"y":900},pointTo:{"x":1450,"y":1000},xv:1.0715659492539341e-14,yv:175,inView:true,path:[[2900,1900,0.35],[2900,1800,0.35],[2900,2000,0.35]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3100,y:1800,w:100,h:100,points:[[1550,900],[1550,1000]],speed:175,currentPoint:1.416666666667743,collidable:true,pointOn:{"x":1550,"y":1000},pointTo:{"x":1550,"y":900},xv:1.0715659492539341e-14,yv:-175,inView:true,path:[[3100,1800,0.35],[3100,2000,0.35]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,1800],[3775,1800],[3600,1950],[2700,1950]],most:{"left":1350,"right":1887.5,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3300,y:1900,w:100,h:100,points:[[1650,950],[1650,1000],[1650,900]],speed:175,currentPoint:1.916666666667743,collidable:true,pointOn:{"x":1650,"y":1000},pointTo:{"x":1650,"y":900},xv:1.0715659492539341e-14,yv:-175,inView:true,path:[[3300,1900,0.35],[3300,2000,0.35],[3300,1800,0.35]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3050,1800],[3600,1800],[3425,1950],[3225,1950]],most:{"left":1525,"right":1800,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[],[25],{type:[1,[],[25]],x:700,y:2500,w:100,h:500,dir:"left",max:900,pushBack:10,startX:350,startY:1250,pusherId:0.849725518054214,xv:0,yv:0,pushing:false,inView:false,pushAngle:0,maxPushDistance:1800,idlePushBackSpeed:0.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:2600,w:700,h:300,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:-1700,y:2700,w:1950,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:3800,w:725,h:100,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,1800],[1375,1800],[1375,1850],[1175,1825]],most:{"left":587.5,"right":687.5,"top":900,"bottom":925},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[],[24],{type:[1,[],[24]],x:-100,y:31250,w:4200,h:4750,ir:0.05,or:0.4,o:1.1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.05,outerR:0,outerG:0,outerB:0,outerSize:0.4,innerOpacity:0,outerOpacity:1.1,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3650,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3550,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3450,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3350,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3250,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3150,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3050,y:34250,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3750,y:34250,r:50,renderType:"circleR",inView:false,})
// C(1,[],[15],{type:[1,[],[15]],x:2100,y:33200,w:1900,h:200,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:33650,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1500,y:33650,r:50,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:33800,w:700,h:100,points:[[350,16900],[350,17050]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":350,"y":17050},pointTo:{"x":350,"y":16900},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[700,33800,0.3],[700,34100,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:33400,w:700,h:100,points:[[350,16700],[350,16850]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":350,"y":16850},pointTo:{"x":350,"y":16700},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[700,33400,0.3],[700,33700,0.3]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[875,33400],[1400,33400],[950,33550]],most:{"left":437.5,"right":700,"top":16700,"bottom":16775},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,34100],[1400,34200],[1175,34200]],most:{"left":587.5,"right":700,"top":17050,"bottom":17100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,34100],[1100,34200],[700,34200]],most:{"left":350,"right":550,"top":17050,"bottom":17100},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:32600,w:100,h:100,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:550,y:32700,w:500,h:100,angle:38,rotateSpeed:0.0011363636363636363,pivotX:800,pivotY:32750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:800,y:32750,r:50,renderType:"circleR",inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:2600,y:31500,w:400,h:1100,canCollide:false,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2580,y:32300,r:70,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:31800,w:250,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2600,31675],[2700,32050],[2600,32050]],most:{"left":1300,"right":1350,"top":15837.5,"bottom":16025},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3025,y:31675,r:76,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2675,y:31650,r:76,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:31400,w:200,h:200,points:[[1150,15700],[1000,15700],[1000,15850],[1150,15850]],speed:150,currentPoint:3.6666666666666665,collidable:true,pointOn:{"x":1150,"y":15850},pointTo:{"x":1150,"y":15700},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[2300,31400,0.3],[2000,31400,0.3],[2000,31700,0.3],[2300,31700,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:31700,w:200,h:200,points:[[1000,15850],[1150,15850],[1150,15700],[1000,15700]],speed:150,currentPoint:3.6666666666666665,collidable:true,pointOn:{"x":1000,"y":15700},pointTo:{"x":1000,"y":15850},xv:9.184850993605149e-15,yv:150,inView:false,path:[[2000,31700,0.3],[2300,31700,0.3],[2300,31400,0.3],[2000,31400,0.3]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2500,y:31900,r:50,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2250,y:31650,w:100,h:100,canCollide:true,inView:false,})
// C(1,[],[9],{type:[1,[],[9]],x:0,y:31400,w:400,h:400,spawn:{"x":100,"y":15800},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,31550],[200,31700],[200,31900],[0,31900]],most:{"left":0,"right":100,"top":15775,"bottom":15950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[150,31400],[500,31400],[500,31600],[300,31600]],most:{"left":75,"right":250,"top":15700,"bottom":15800},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2600,y:26000,w:200,h:200,points:[[1300,13000],[1100,13000],[1100,12800],[1300,12800]],speed:215,currentPoint:1.4416666666630227,collidable:true,pointOn:{"x":1100,"y":13000},pointTo:{"x":1100,"y":12800},xv:1.3164953090834047e-14,yv:-215,inView:false,path:[[2600,26000,0.43],[2200,26000,0.43],[2200,25600,0.43],[2600,25600,0.43]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2200,y:25600,w:200,h:200,points:[[1100,12800],[1300,12800],[1300,13000],[1100,13000]],speed:215,currentPoint:1.4416666666630227,collidable:true,pointOn:{"x":1300,"y":12800},pointTo:{"x":1300,"y":13000},xv:1.3164953090834047e-14,yv:215,inView:false,path:[[2200,25600,0.43],[2600,25600,0.43],[2600,26000,0.43],[2200,26000,0.43]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2375,25600],[2600,26000],[2400,26000]],most:{"left":1187.5,"right":1300,"top":12800,"bottom":13000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2675,25575],[2600,26000],[2375,25600]],most:{"left":1187.5,"right":1337.5,"top":12787.5,"bottom":13000},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[24],{type:[1,[],[24]],x:1300,y:28200,w:500,h:400,ir:0.15,or:0.5,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.15,outerR:0,outerG:0,outerB:0,outerSize:0.5,innerOpacity:0,outerOpacity:1,})
// C(1,[],[24],{type:[1,[],[24]],x:1300,y:27000,w:500,h:1200,ir:0.2,or:0.7,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.2,outerR:0,outerG:0,outerB:0,outerSize:0.7,innerOpacity:0,outerOpacity:1,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:26500,w:200,h:200,points:[[1150,13250],[1000,13250]],speed:250,currentPoint:1.4444444444433733,collidable:true,pointOn:{"x":1000,"y":13250},pointTo:{"x":1150,"y":13250},xv:250,yv:0,inView:false,path:[[2300,26500,0.5],[2000,26500,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:26300,w:200,h:200,points:[[1000,13150],[1150,13150]],speed:250,currentPoint:1.4444444444433642,collidable:true,pointOn:{"x":1150,"y":13150},pointTo:{"x":1000,"y":13150},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2000,26300,0.5],[2300,26300,0.5]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,26300],[2500,26300],[2500,26700]],most:{"left":1150,"right":1250,"top":13150,"bottom":13350},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[17],{type:[1,[],[17]],x:1100,y:25600,w:1000,h:500,time:0,maxTime:3.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3500,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2100,y:25900,r:100,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,25900],[1600,25900],[1450,26000],[1400,26000]],most:{"left":700,"right":800,"top":12950,"bottom":13000},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1000,y:26150,r:150,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1750,y:25600,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2800,y:26200,r:125,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2600,y:25500,r:50,renderType:"circleR",inView:false,})
// C(1,[],[20],{type:[1,[],[20]],x:2200,y:22500,w:300,h:600,collide:false,opaq:0.3,inView:false,hex:"#000000",})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2200,y:22500,w:300,h:300,points:[[1100,11250],[1400,11250]],speed:250,currentPoint:1.7222222222215047,collidable:true,pointOn:{"x":1400,"y":11250},pointTo:{"x":1100,"y":11250},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2200,22500,0.5],[2800,22500,0.5]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2475,y:22675,r:80,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2800,y:22800,w:300,h:300,points:[[1400,11400],[1100,11400]],speed:250,currentPoint:1.7222222222215047,collidable:true,pointOn:{"x":1100,"y":11400},pointTo:{"x":1400,"y":11400},xv:250,yv:0,inView:false,path:[[2800,22800,0.5],[2200,22800,0.5]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,23050],[2300,23100],[2375,23325],[2200,23300]],most:{"left":1100,"right":1187.5,"top":11525,"bottom":11662.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2500,y:23350,w:600,h:100,angle:6,rotateSpeed:0.0022727272727272726,pivotX:2800,pivotY:23400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2475,23450],[2800,23450],[2675,23525]],most:{"left":1237.5,"right":1400,"top":11725,"bottom":11762.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[20],{type:[1,[],[20]],x:2600,y:22500,w:500,h:590,collide:true,opaq:0.8,inView:false,hex:"#000000",})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2425,y:22725,r:80,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,22700],[2500,22900],[2350,22850],[2350,22750]],most:{"left":1175,"right":1250,"top":11350,"bottom":11450},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1800,y:21900,w:100,h:200,points:[[900,10950],[1075,10950],[1250,10950],[1075,10950]],speed:250,currentPoint:1.8095238095232422,collidable:true,pointOn:{"x":1075,"y":10950},pointTo:{"x":1250,"y":10950},xv:250,yv:0,inView:false,path:[[1800,21900,0.5],[2150,21900,0.5],[2500,21900,0.5],[2150,21900,0.5]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,21900],[2500,22350],[2400,22300],[2325,22050]],most:{"left":1162.5,"right":1250,"top":10950,"bottom":11175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1950,22100],[2175,22200],[1950,22200]],most:{"left":975,"right":1087.5,"top":11050,"bottom":11100},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1950,y:22200,r:100,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:21500,w:200,h:100,points:[[700,10750],[700,11100]],speed:250,currentPoint:0.9047619047668247,collidable:true,pointOn:{"x":700,"y":10750},pointTo:{"x":700,"y":11100},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[1400,21500,0.5],[1400,22200,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:22200,w:100,h:100,points:[[800,11100],[800,10750]],speed:250,currentPoint:0.9047619047668247,collidable:true,pointOn:{"x":800,"y":11100},pointTo:{"x":800,"y":10750},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[1600,22200,0.5],[1600,21500,0.5]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1450,y:21900,w:100,h:400,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1550,22200],[2200,22200],[2200,22300],[1450,22300]],most:{"left":725,"right":1100,"top":11100,"bottom":11150},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2375,y:21275,r:200,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1600,y:20500,r:200,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1700,y:20400,r:200,renderType:"circleR",inView:false,})
// C(1,[],[24],{type:[1,[],[24]],x:50,y:16150,w:3350,h:3750,ir:0.2,or:0.6,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.2,outerR:0,outerG:0,outerB:0,outerSize:0.6,innerOpacity:0,outerOpacity:0.5,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:400,y:17600,w:100,h:500,points:[[200,8800],[400,8800]],speed:150,currentPoint:1.75,collidable:true,pointOn:{"x":400,"y":8800},pointTo:{"x":200,"y":8800},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[400,17600,0.3],[800,17600,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:18100,w:100,h:100,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[400,17600],[500,17600],[500,18100],[500,18200],[400,18100]],most:{"left":200,"right":250,"top":8800,"bottom":9100},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:17900,w:100,h:500,points:[[400,8950],[600,8950]],speed:150,currentPoint:1.75,collidable:true,pointOn:{"x":600,"y":8950},pointTo:{"x":400,"y":8950},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[800,17900,0.3],[1200,17900,0.3]],})
// C(1,[],[24],{type:[1,[],[24]],x:600,y:9650,w:3350,h:6500,ir:0.3,or:0.8,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.3,outerR:0,outerG:0,outerB:0,outerSize:0.8,innerOpacity:0,outerOpacity:0.5,})
// C(1,[],[24],{type:[1,[],[24]],x:1350,y:9350,w:600,h:300,ir:0.4,or:0.9,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.4,outerR:0,outerG:0,outerB:0,outerSize:0.9,innerOpacity:0,outerOpacity:0.5,})
// C(1,[],[24],{type:[1,[],[24]],x:1950,y:7250,w:1700,h:2300,ir:0.4,or:0.9,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.4,outerR:0,outerG:0,outerB:0,outerSize:0.9,innerOpacity:0,outerOpacity:0.5,})
// C(1,[],[20],{type:[1,[],[20]],x:2500,y:34950,w:125,h:1000,collide:false,opaq:0.3,inView:false,hex:"#000000",})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:19100,w:100,h:100,points:[[1250,9550],[1250,9850]],speed:250,currentPoint:1.7222222222279622,collidable:true,pointOn:{"x":1250,"y":9850},pointTo:{"x":1250,"y":9550},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[2500,19100,0.5],[2500,19700,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:18700,w:100,h:400,points:[[1150,9350],[1250,9350]],speed:150,currentPoint:1.5,collidable:true,pointOn:{"x":1250,"y":9350},pointTo:{"x":1150,"y":9350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2300,18700,0.3],[2500,18700,0.3]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,18725],[2600,18725],[2600,19175],[2500,19225]],most:{"left":1250,"right":1300,"top":9362.5,"bottom":9612.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2500,y:18700,w:100,h:25,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,18900],[1600,18900],[1600,19100],[1400,19100],[1050,19100],[1100,19000]],most:{"left":525,"right":800,"top":9450,"bottom":9550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,18600],[1350,18600],[1300,18700],[1000,18800],[950,18800]],most:{"left":475,"right":675,"top":9300,"bottom":9400},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:18500,w:50,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1200,y:17900,w:100,h:500,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,17900],[1200,17900],[1200,18000]],most:{"left":550,"right":600,"top":8950,"bottom":9000},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:760,y:17850,r:50,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1300,y:13400,w:100,h:100,points:[[650,6700],[650,6500]],speed:100,currentPoint:1.8333333333290285,collidable:true,pointOn:{"x":650,"y":6500},pointTo:{"x":650,"y":6700},xv:6.123233995736766e-15,yv:100,inView:false,path:[[1300,13400,0.2],[1300,13000,0.2]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1300,y:13450,w:100,h:50,canCollide:true,inView:false,})
// C(1,[],[20],{type:[1,[],[20]],x:1100,y:17200,w:300,h:600,collide:false,opaq:0.5,inView:false,hex:"#000000",})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1400,y:17600,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1200,y:17800,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1300,y:17700,r:50,renderType:"circleR",inView:false,})
// C(1,[0],[0],{type:[1,[0],[0]],x:1100,y:17200,w:300,h:100,points:[[550,8600],[550,8900]],speed:150,currentPoint:1,alongWith:false,pointOn:{"x":550,"y":8900},pointTo:{"x":550,"y":8600},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1100,17200,0.3],[1100,17800,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:16850,w:50,h:300,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1500,16875],[1550,17150],[1500,17100]],most:{"left":750,"right":775,"top":8437.5,"bottom":8575},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1500,y:17150,r:50,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1900,y:17275,w:75,h:75,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1300,y:16200,w:200,h:100,points:[[650,8100],[850,8100]],speed:250,currentPoint:1.5833333333338715,collidable:true,pointOn:{"x":850,"y":8100},pointTo:{"x":650,"y":8100},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[1300,16200,0.5],[1700,16200,0.5]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1775,y:16250,r:50,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,16200],[1900,16200],[1900,16300],[1775,16300]],most:{"left":875,"right":950,"top":8100,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1400,y:13375,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1375,y:13450,r:75,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1100,y:13150,r:100,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1300,y:13000,w:100,h:100,points:[[650,6500],[650,6700]],speed:100,currentPoint:1.8333333333290285,collidable:true,pointOn:{"x":650,"y":6700},pointTo:{"x":650,"y":6500},xv:6.123233995736766e-15,yv:-100,inView:false,path:[[1300,13000,0.2],[1300,13400,0.2]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1800,y:12900,r:40,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2050,y:12700,r:90,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1750,y:13350,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:13400,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1700,y:13350,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:12700,r:26,renderType:"circleR",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:12300,w:100,h:350,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,12300],[2100,12600],[2100,13500],[2000,13500]],most:{"left":1000,"right":1050,"top":6150,"bottom":6750},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:12300,w:100,h:100,canJump:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1800,y:12900,r:26,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1800,y:12500,r:26,renderType:"circleR",inView:false,})
// C(1,[],[17],{type:[1,[],[17]],x:1100,y:11100,w:600,h:1000,time:0,maxTime:10,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:10000,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1700,11200],[1700,11400],[1650,11350],[1650,11250]],most:{"left":825,"right":850,"top":5600,"bottom":5700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,11200],[1150,11300],[1100,11400]],most:{"left":550,"right":575,"top":5600,"bottom":5700},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1100,y:11250,w:400,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,11700],[1450,11700],[1400,11800]],most:{"left":700,"right":725,"top":5850,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1300,y:11600,w:100,h:300,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1450,y:9400,w:100,h:200,points:[[725,4700],[900,4700]],speed:161,currentPoint:1.7733333333338255,collidable:true,pointOn:{"x":900,"y":4700},pointTo:{"x":725,"y":4700},xv:-161,yv:1.9716813466272387e-14,inView:false,path:[[1450,9400,0.322],[1800,9400,0.322]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1800,y:9600,w:100,h:300,points:[[900,4800],[700,4800]],speed:184,currentPoint:1.7733333333329029,collidable:true,pointOn:{"x":700,"y":4800},pointTo:{"x":900,"y":4800},xv:184,yv:0,inView:false,path:[[1800,9600,0.368],[1400,9600,0.368]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:9900,w:100,h:500,points:[[700,4950],[900,4950]],speed:184,currentPoint:1.7733333333329029,collidable:true,pointOn:{"x":900,"y":4950},pointTo:{"x":700,"y":4950},xv:-184,yv:2.25335011043113e-14,inView:false,path:[[1400,9900,0.368],[1800,9900,0.368]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1800,y:10400,w:100,h:200,points:[[900,5200],[700,5200]],speed:184,currentPoint:1.7733333333329029,collidable:true,pointOn:{"x":700,"y":5200},pointTo:{"x":900,"y":5200},xv:184,yv:0,inView:false,path:[[1800,10400,0.368],[1400,10400,0.368]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,10250],[1900,10600],[1875,10600],[1875,10325]],most:{"left":937.5,"right":950,"top":5125,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,9850],[1900,9850],[1900,9900]],most:{"left":900,"right":950,"top":4925,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,9650],[1900,9850],[1800,9850]],most:{"left":900,"right":950,"top":4825,"bottom":4925},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2700,y:5400,w:200,h:200,points:[[1350,2700],[1450,2700],[1550,2700],[1450,2700]],speed:250,currentPoint:2.166666666664514,collidable:true,pointOn:{"x":1550,"y":2700},pointTo:{"x":1450,"y":2700},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2700,5400,0.5],[2900,5400,0.5],[3100,5400,0.5],[2900,5400,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2700,y:5800,w:200,h:200,points:[[1350,2900],[1450,2900],[1550,2900],[1450,2900]],speed:250,currentPoint:0.16666666666451418,collidable:true,pointOn:{"x":1350,"y":2900},pointTo:{"x":1450,"y":2900},xv:250,yv:0,inView:false,path:[[2700,5800,0.5],[2900,5800,0.5],[3100,5800,0.5],[2900,5800,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2700,y:5600,w:200,h:200,points:[[1350,2800],[1450,2800],[1550,2800],[1450,2800]],speed:250,currentPoint:1.1666666666645142,collidable:true,pointOn:{"x":1450,"y":2800},pointTo:{"x":1550,"y":2800},xv:250,yv:0,inView:false,path:[[2700,5600,0.5],[2900,5600,0.5],[3100,5600,0.5],[2900,5600,0.5]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3100,y:5400,r:50,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3400,y:5200,w:100,h:300,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3450,4850],[3500,4850],[3500,5250],[3400,5200]],most:{"left":1700,"right":1750,"top":2425,"bottom":2625},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:3450,y:4800,w:50,h:50,canJump:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2350,y:6250,r:50,renderType:"circleR",inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1700,y:6800,w:600,h:100,angle:-1064.2500000000155,rotateSpeed:-0.0011363636363636363,pivotX:2000,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:11.841666666666635,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:800,y:8050,w:400,h:100,angle:-2017.5000000000164,rotateSpeed:-0.0022727272727272726,pivotX:1000,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:12.458333333333266,inView:false,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1000,y:8050,r:100,renderType:"circleR",inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:0,y:8150,w:400,h:100,angle:2011.500000000016,rotateSpeed:0.0022727272727272726,pivotX:200,pivotY:8200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:12.491666666666598,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:400,y:8050,w:400,h:100,angle:2017.5000000000164,rotateSpeed:0.0022727272727272726,pivotX:600,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:12.458333333333266,inView:false,initialRotation:0,})
// C(1,[],[17],{type:[1,[],[17]],x:0,y:7700,w:1200,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[550,7750],[500,7800],[450,7800]],most:{"left":225,"right":275,"top":3875,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1000,y:7900,r:150,renderType:"circleR",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:7800,w:1500,h:100,canJump:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:200,y:7950,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:800,y:7600,r:50,renderType:"circleR",inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:600,y:5400,w:700,h:700,canCollide:false,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:650,y:5450,r:100,renderType:"circleR",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:5300,w:100,h:2000,canJump:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1250,y:5450,r:100,renderType:"circleR",inView:false,})
// C(1,[1],[11],{type:[1,[1],[11]],x:650,y:5695,w:600,h:110,angle:1826.2500000000177,rotateSpeed:0.001893939393939394,pivotX:950,pivotY:5750,distToPivot:0,canCollide:true,cullingRadius:152.5,unSim:11.491666666666655,inView:false,initialRotation:0,})
// C(1,[],[0],{type:[1,[],[0]],x:925,y:5875,w:50,h:43.75,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:781.25,y:5725,w:43.75,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:925,y:5581.25,w:50,h:93.75,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1075,y:5725,w:43.75,h:50,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:950,y:5750,r:150,renderType:"circle",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:600,y:6300,w:200,h:200,points:[[300,3150],[400,3150],[400,3250],[300,3250]],speed:250,currentPoint:3.166666666668516,collidable:true,pointOn:{"x":300,"y":3250},pointTo:{"x":300,"y":3150},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[600,6300,0.5],[800,6300,0.5],[800,6500,0.5],[600,6500,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1000,y:6300,w:200,h:200,points:[[500,3150],[600,3150],[600,3250],[500,3250]],speed:250,currentPoint:3.1666666666691983,collidable:true,pointOn:{"x":500,"y":3250},pointTo:{"x":500,"y":3150},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[1000,6300,0.5],[1200,6300,0.5],[1200,6500,0.5],[1000,6500,0.5]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1100,y:6300,r:50,renderType:"circleR",inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:0,y:4000,w:400,h:3300,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.6,})
// C(1,[],[15],{type:[1,[],[15]],x:0,y:4000,w:400,h:3300,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:400,y:4800,r:100,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:375,y:5325,w:100,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:400,y:4300,w:100,h:3000,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:0,y:7200,r:75,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[400,4650],[400,4800],[225,4800],[225,4700]],most:{"left":112.5,"right":200,"top":2325,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2025,4550],[2075,4550],[2050,4700],[2025,4700]],most:{"left":1012.5,"right":1037.5,"top":2275,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2600,y:4900,r:25,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2300,y:4575,r:25,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2600,y:4575,r:25,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2575,y:4525,r:25,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2325,y:4525,r:25,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2300,y:4100,r:25,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:4225,w:100,h:150,points:[[1150,2112.5],[1250,2112.5]],speed:150,currentPoint:1.5,collidable:true,pointOn:{"x":1250,"y":2112.5},pointTo:{"x":1150,"y":2112.5},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2300,4225,0.3],[2500,4225,0.3]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2450,y:4300,r:50,renderType:"circleR",inView:false,})
// C(1,[],[24],{type:[1,[],[24]],x:3250,y:2150,w:800,h:1900,ir:0.1,or:0.4,o:0.6,vc:{"r":0,"g":0,"b":0},inView:true,innerR:0,innerG:0,innerB:0,innerSize:0.1,outerR:0,outerG:0,outerB:0,outerSize:0.4,innerOpacity:0,outerOpacity:0.6,})
// C(1,[],[13],{type:[1,[],[13]],x:2800,y:3400,w:300,h:100,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1450,2600],[1500,2600],[1600,2700],[1375,2700]],most:{"left":687.5,"right":800,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1450,y:2700,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1175,y:2500,r:50,renderType:"circleR",inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:-325,y:2000,w:450,h:100,angle:2308.7499999999877,rotateSpeed:0.001893939393939394,pivotX:-100,pivotY:2050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:8.27500000000017,inView:false,initialRotation:0,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:600,y:1800,w:100,h:100,canCollide:true,inView:true,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:450,y:2100,w:50,h:100,canCollide:true,inView:true,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:550,y:1800,w:150,h:50,points:[[275,900],[225,1075]],speed:150,currentPoint:1.5052000807143768,collidable:true,pointOn:{"x":225,"y":1075},pointTo:{"x":275,"y":900},xv:41.208169184606696,yv:-144.22859214612348,inView:true,path:[[550,1800,0.3],[450,2150,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:350,y:2150,w:150,h:50,points:[[175,1075],[225,900]],speed:150,currentPoint:1.5052000807143773,collidable:true,pointOn:{"x":225,"y":900},pointTo:{"x":175,"y":1075},xv:-41.20816918460671,yv:144.22859214612348,inView:true,path:[[350,2150,0.3],[450,1800,0.3]],})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:175,y:2050,radius:37.5,radius2:50,canCollide:true,renderType:"oval",inView:false,r:75,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:850,y:2150,r:100,renderType:"circleR",inView:true,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[450,2200],[700,2250],[550,2300],[400,2250]],most:{"left":200,"right":350,"top":1100,"bottom":1150},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[100,2050],[1050,2200],[900,2300],[100,2150]],most:{"left":50,"right":525,"top":1025,"bottom":1150},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2200,y:3600,w:500,h:100,angle:1089.375000000009,rotateSpeed:0.000946969696969697,pivotX:2450,pivotY:3650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:9.141666666666788,inView:false,initialRotation:0,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2450,3550],[2600,3650],[2450,3750],[2300,3650]],most:{"left":1150,"right":1300,"top":1775,"bottom":1875},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[1],{type:[1,[],[1]],x:700,y:3400,w:1300,h:400,canCollide:false,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,3700],[1200,3800],[1100,3800]],most:{"left":550,"right":600,"top":1850,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[13],{type:[1,[],[13]],x:3600,y:500,w:300,h:1300,force:9000,dir:{"x":0,"y":9000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9,})
// C(1,[],[15],{type:[1,[],[15]],x:3600,y:500,w:300,h:1300,rx:false,ry:true,inView:true,axisSpeedMultY:0,axisSpeedMultX:1,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3850,y:1100,r:50,renderType:"circleR",inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:3200,y:0,w:300,h:1500,force:9000,dir:{"x":0,"y":-9000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9,})
// C(1,[],[15],{type:[1,[],[15]],x:3200,y:0,w:300,h:1500,rx:false,ry:true,inView:true,axisSpeedMultY:0,axisSpeedMultX:1,})
// C(1,[],[19],{type:[1,[],[19]],x:-50,y:-50,w:500,h:500,speedInc:0.15,inView:false,speedChangePermanent:false,speedMult:0.15,})
// C(1,[],[17],{type:[1,[],[17]],x:2800,y:100,w:300,h:200,time:0,maxTime:0.75,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:750,})
// C(1,[],[18],{type:[1,[],[18]],x:3300,y:2200,w:700,h:1800,size:5,inView:true,sizeChangePermanent:false,sizeMult:0.20408163265306123,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3740,y:2590,r:30,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3950,y:2650,r:30,renderType:"circleR",inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3400,y:2400,w:200,h:100,points:[[1700,1200],[1700,1350]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":1700,"y":1350},pointTo:{"x":1700,"y":1200},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[3400,2400,0.3],[3400,2700,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3400,y:2700,w:200,h:100,points:[[1700,1350],[1700,1500]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":1700,"y":1500},pointTo:{"x":1700,"y":1350},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[3400,2700,0.3],[3400,3000,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3400,y:3000,w:200,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,2950],[3600,3000],[3400,3000]],most:{"left":1700,"right":1800,"top":1475,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3300,y:3200,w:200,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3300,3340],[3325,3325],[3300,3360]],most:{"left":1650,"right":1662.5,"top":1662.5,"bottom":1680},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3300,3150],[3350,3200],[3300,3200]],most:{"left":1650,"right":1675,"top":1575,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3550,3100],[3600,3100],[3600,3150]],most:{"left":1775,"right":1800,"top":1550,"bottom":1575},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3380,y:3420,w:20,h:60,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3575,y:3400,r:20,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3420,y:3300,w:60,h:20,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3300,y:3300,w:40,h:40,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3300,y:3540,w:20,h:60,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3320,3540],[3350,3600],[3320,3600]],most:{"left":1660,"right":1675,"top":1770,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3550,3800],[3600,3800],[3600,3900],[3550,3900],[3520,3850]],most:{"left":1760,"right":1800,"top":1900,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3595,y:3510,radius:12.5,radius2:30,canCollide:true,renderType:"oval",inView:false,r:25,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1600,y:3500,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1500,y:3450,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1350,y:3750,r:50,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1000,y:3450,r:50,renderType:"circleR",inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:0,y:3400,w:700,h:300,canCollide:false,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:540,y:3600,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:380,y:3600,r:10,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,2800],[1050,2800],[1000,2850],[700,2900]],most:{"left":350,"right":525,"top":1400,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,2620],[840,2620],[900,2700],[700,2700]],most:{"left":350,"right":450,"top":1310,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,2900],[1320,2900],[1400,3000],[1250,3000]],most:{"left":600,"right":700,"top":1450,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,2800],[2050,2800],[1950,2900],[1850,2900]],most:{"left":875,"right":1025,"top":1400,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1900,y:2800,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1100,y:2500,r:100,renderType:"circleR",inView:true,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1700,2500],[2100,2500],[2050,2600],[1800,2600]],most:{"left":850,"right":1050,"top":1250,"bottom":1300},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1800,y:2450,r:150,renderType:"circleR",inView:true,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,2300],[300,2350],[300,2400],[0,2400]],most:{"left":0,"right":150,"top":1150,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:800,y:1850,r:70,renderType:"circleR",inView:true,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:0,y:1775,radius:50,radius2:37.5,canCollide:true,renderType:"oval",inView:false,r:75,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1050,y:1950,w:100,h:250,angle:-22.5,rotateSpeed:0,pivotX:1100,pivotY:2075,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:67.3145600891813,unSim:0,inView:true,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2900,y:300,radius:25,radius2:50,canCollide:true,renderType:"oval",inView:false,r:50,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1889.408654473874,y:35578.354758114576,w:200,h:100,angle:132,rotateSpeed:-0.0011363636363636363,pivotX:2150,pivotY:35450,distToPivot:120,canCollide:true,renderType:"rotating",cullingRadius:175.90169943749476,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1777.0520846933937,y:35786.43530924824,w:50,h:100,angle:132,rotateSpeed:-0.0011363636363636363,pivotX:2150,pivotY:35450,distToPivot:260,canCollide:true,renderType:"rotating",cullingRadius:287.95084971874735,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2150,y:33875,w:500,h:50,angle:3,rotateSpeed:0.0011363636363636363,pivotX:2400,pivotY:33900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2150,y:33875,w:500,h:50,angle:93,rotateSpeed:0.0011363636363636363,pivotX:2400,pivotY:33900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[],[17],{type:[1,[],[17]],x:400,y:33400,w:100,h:150,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,33950],[1900,34100],[1650,34100]],most:{"left":825,"right":950,"top":16975,"bottom":17050},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1450,y:32800,w:500,h:100,angle:7,rotateSpeed:-0.0011363636363636363,pivotX:1700,pivotY:32850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1050,y:32900,w:500,h:100,angle:-3,rotateSpeed:-0.0011363636363636363,pivotX:1300,pivotY:32950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1100,y:31900,w:600,h:100,angle:3,rotateSpeed:0.0011363636363636363,pivotX:1400,pivotY:31950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1400,y:32000,r:100,renderType:"circleR",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:31400,w:500,h:300,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1300,y:24500,w:50,h:300,points:[[650,12250],[875,12250]],speed:250,currentPoint:0.2962962962967746,collidable:true,pointOn:{"x":650,"y":12250},pointTo:{"x":875,"y":12250},xv:250,yv:0,inView:false,path:[[1300,24500,0.5],[1750,24500,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1750,y:24800,w:50,h:300,points:[[875,12400],[650,12400]],speed:250,currentPoint:0.2962962962967746,collidable:true,pointOn:{"x":875,"y":12400},pointTo:{"x":650,"y":12400},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[1750,24800,0.5],[1300,24800,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:30000,w:4000,h:1400,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1400,y:25800,w:800,h:100,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1400,y:25850,r:150,renderType:"circleR",inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:800,y:21100,w:800,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.05,})
// C(1,[],[17],{type:[1,[],[17]],x:700,y:13900,w:500,h:2200,time:0,maxTime:17,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:17000,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:800,y:15200,w:300,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:800,y:14450,w:300,h:100,canCollide:true,inView:false,})
// C(1,[],[9],{type:[1,[],[9]],x:2450,y:20050,w:200,h:200,spawn:{"x":1275,"y":10075},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:16825,w:350,h:50,angle:6,rotateSpeed:0.0022727272727272726,pivotX:1775,pivotY:16850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:17150,w:350,h:50,angle:-6,rotateSpeed:-0.0022727272727272726,pivotX:1775,pivotY:17175,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1775,y:17150,w:250,h:50,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1900,y:17175,r:100,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:16825,w:275,h:50,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1500,y:16850,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1700,y:16600,r:75,renderType:"circleR",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1400,y:10575,w:500,h:25,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:9800,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:1800,y:5400,w:300,h:200,canCollide:false,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1700,y:4375,w:50,h:50,points:[[850,2187.5],[675,2187.5]],speed:238,currentPoint:0.18666666666691267,collidable:true,pointOn:{"x":850,"y":2187.5},pointTo:{"x":675,"y":2187.5},xv:-238,yv:2.914659381970701e-14,inView:false,path:[[1700,4375,0.476],[1350,4375,0.476]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1550,y:4600,w:200,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:4250,w:50,h:550,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:4550,w:25,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:7000,w:50,h:200,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1000,y:7750,w:200,h:50,canCollide:true,inView:false,})
// C(1,[],[25],{type:[1,[],[25]],x:1600,y:5700,w:100,h:500,dir:"left",max:150,pushBack:10,startX:800,startY:2850,pusherId:0.1623077320458639,xv:0,yv:0,pushing:false,inView:false,pushAngle:0,maxPushDistance:300,idlePushBackSpeed:0.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:5100,w:500,h:300,canJump:true,inView:false,})
// C(1,[],[9],{type:[1,[],[9]],x:3550,y:4150,w:200,h:200,spawn:{"x":1825,"y":2125},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:3850,w:500,h:100,points:[[400,1925],[400,2000]],speed:75,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":400,"y":2000},pointTo:{"x":400,"y":1925},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[800,3850,0.15],[800,4000,0.15]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:3850,w:500,h:100,points:[[400,1925],[400,2050]],speed:125,currentPoint:1.6666666666683432,collidable:true,pointOn:{"x":400,"y":2050},pointTo:{"x":400,"y":1925},xv:7.654042494670958e-15,yv:-125,inView:false,path:[[800,3850,0.25],[800,4100,0.25]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:3850,w:500,h:100,points:[[400,1925],[400,2100]],speed:175,currentPoint:1.6666666666665293,collidable:true,pointOn:{"x":400,"y":2100},pointTo:{"x":400,"y":1925},xv:1.0715659492539341e-14,yv:-175,inView:false,path:[[800,3850,0.35],[800,4200,0.35]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:3850,w:500,h:100,points:[[400,1925],[400,2150]],speed:225,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":400,"y":2150},pointTo:{"x":400,"y":1925},xv:1.3777276490407723e-14,yv:-225,inView:false,path:[[800,3850,0.45],[800,4300,0.45]],})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:3900,w:2700,h:100,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2300,y:4725,w:300,h:50,angle:2518.5000000000064,rotateSpeed:0.0022727272727272726,pivotX:2450,pivotY:4750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:9.675000000000091,inView:false,initialRotation:0,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3400,y:3100,w:100,h:100,points:[[1700,1550],[1750,1550],[1750,1650],[1700,1650]],speed:150,currentPoint:3.5,collidable:true,pointOn:{"x":1700,"y":1650},pointTo:{"x":1700,"y":1550},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[3400,3100,0.3],[3500,3100,0.3],[3500,3300,0.3],[3400,3300,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:2600,w:100,h:100,points:[[1250,1300],[1000,1300]],speed:215,currentPoint:0.3533333333340688,collidable:true,pointOn:{"x":1250,"y":1300},pointTo:{"x":1000,"y":1300},xv:-215,yv:2.6329906181668095e-14,inView:false,path:[[2500,2600,0.43],[2000,2600,0.43]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2100,y:2900,w:100,h:100,points:[[1050,1450],[950,1450],[950,1400],[1050,1400]],speed:215,currentPoint:3.766666666667761,collidable:true,pointOn:{"x":1050,"y":1400},pointTo:{"x":1050,"y":1450},xv:1.3164953090834047e-14,yv:215,inView:false,path:[[2100,2900,0.43],[1900,2900,0.43],[1900,2800,0.43],[2100,2800,0.43]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:2800,w:100,h:100,points:[[800,1400],[900,1400],[900,1450],[800,1450]],speed:215,currentPoint:3.766666666666656,collidable:true,pointOn:{"x":800,"y":1450},pointTo:{"x":800,"y":1400},xv:1.3164953090834047e-14,yv:-215,inView:false,path:[[1600,2800,0.43],[1800,2800,0.43],[1800,2900,0.43],[1600,2900,0.43]],})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:2700,w:1700,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:2200,w:400,h:200,canJump:true,inView:true,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2150,y:1800,w:100,h:200,canCollide:true,inView:true,})
// C(1,[],[24],{type:[1,[],[24]],x:-50,y:-50,w:500,h:500,ir:0.02,or:0.06,o:1.06,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.02,outerR:0,outerG:0,outerB:0,outerSize:0.06,innerOpacity:0,outerOpacity:1.06,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:200,w:100,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:250,y:0,w:50,h:150,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:300,w:200,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:350,y:0,w:50,h:250,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:0,w:100,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:400,w:400,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:0,w:2000,h:1700,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:500,w:500,h:1200,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:-100,y:-150,w:100,h:650,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:-100,w:500,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:300,w:450,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2800,y:0,w:400,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:100,w:100,h:1400,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:0,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:500,w:300,h:150,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2750,y:800,w:250,h:300,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:1100,w:400,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3000,y:600,w:100,h:500,canJump:true,inView:true,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:900,w:100,h:100,points:[[1250,450],[1250,650]],speed:215,currentPoint:1.4416666666663769,collidable:true,pointOn:{"x":1250,"y":650},pointTo:{"x":1250,"y":450},xv:1.3164953090834047e-14,yv:-215,inView:true,path:[[2500,900,0.43],[2500,1300,0.43]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2600,y:1300,w:100,h:100,points:[[1300,650],[1300,450]],speed:215,currentPoint:1.441666666666387,collidable:true,pointOn:{"x":1300,"y":450},pointTo:{"x":1300,"y":650},xv:1.3164953090834047e-14,yv:215,inView:true,path:[[2600,1300,0.43],[2600,900,0.43]],})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:1400,w:300,h:100,canJump:true,inView:true,})
// C(1,[0],[1],{type:[1,[0],[1]],x:2800,y:500,w:200,h:100,points:[[1400,250],[1400,350]],speed:215,currentPoint:0.883333333333818,collidable:false,pointOn:{"x":1400,"y":250},pointTo:{"x":1400,"y":350},xv:1.3164953090834047e-14,yv:215,inView:true,path:[[2800,500,0.43],[2800,700,0.43]],})
// C(0,[],[11],{type:[0,[],[11]],x:2900,y:650,r:24,renderType:"circleR",radius:12,inView:true,})
// C(1,[],[1],{type:[1,[],[1]],x:2800,y:1200,w:300,h:300,canCollide:false,inView:true,})
// C(1,[1],[11],{type:[1,[1],[11]],x:2864.99999999992,y:1224.7372055837582,w:60,h:60,angle:8519.999999999953,rotateSpeed:0.004545454545454545,pivotX:2950,pivotY:1350,distToPivot:55,canCollide:true,cullingRadius:76.21320343559643,unSim:0,inView:true,initialRotation:0,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:1500,w:400,h:200,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:1700,w:3500,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3200,y:1600,w:300,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3500,y:300,w:100,h:1500,canJump:true,inView:true,})
// C(1,[],[2],{type:[1,[],[2]],x:3200,y:0,w:50,h:25,effect:300,inView:false,bounciness:100,decay:0.5,})
// C(1,[],[0],{type:[1,[],[0]],x:3900,y:0,w:100,h:2200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3600,y:400,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:2100,w:1400,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:1800,w:200,h:200,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:2200,w:100,h:200,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:2400,w:1900,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:1600,y:1800,w:300,h:50,canJump:true,inView:true,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1900,y:1800,w:200,h:200,points:[[950,900],[1150,900],[1150,1100],[950,1100]],speed:215,currentPoint:1.4416666666669373,collidable:true,pointOn:{"x":1150,"y":900},pointTo:{"x":1150,"y":1100},xv:1.3164953090834047e-14,yv:215,inView:true,path:[[1900,1800,0.43],[2300,1800,0.43],[2300,2200,0.43],[1900,2200,0.43]],})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:2050,w:200,h:350,canJump:true,inView:true,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:2200,w:200,h:200,points:[[1150,1100],[950,1100],[950,900],[1150,900]],speed:215,currentPoint:1.4416666666669544,collidable:true,pointOn:{"x":950,"y":1100},pointTo:{"x":950,"y":900},xv:1.3164953090834047e-14,yv:-215,inView:true,path:[[2300,2200,0.43],[1900,2200,0.43],[1900,1800,0.43],[2300,1800,0.43]],})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:1800,w:200,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:1650,y:2100,w:50,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:2100,w:50,h:100,canJump:true,inView:true,})
// C(0,[],[0],{type:[0,[],[0]],x:1550,y:2250,r:112,renderType:"circle",inView:true,})
// C(1,[0],[0],{type:[1,[0],[0]],x:1400,y:2200,w:300,h:200,points:[[700,1100],[700,1000]],speed:300,currentPoint:0,alongWith:false,pointOn:{"x":700,"y":1100},pointTo:{"x":700,"y":1000},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[1400,2200,0.6],[1400,2000,0.6]],})
// C(1,[],[0],{type:[1,[],[0]],x:3.061616997868383e-15,y:2400,w:500,h:200,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:2400,w:100,h:600,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:3000,w:2000,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:275,y:2900,w:225,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:3300,w:2600,h:100,canJump:true,inView:false,})
// C(1,[0],[1],{type:[1,[0],[1]],x:0,y:3100,w:100,h:100,points:[[0,1550],[250,1550],[250,1600],[0,1600]],speed:215,currentPoint:1.7666666666671835,collidable:false,pointOn:{"x":250,"y":1550},pointTo:{"x":250,"y":1600},xv:1.3164953090834047e-14,yv:215,inView:false,path:[[0,3100,0.43],[500,3100,0.43],[500,3200,0.43],[0,3200,0.43]],})
// C(1,[0],[1],{type:[1,[0],[1]],x:500,y:3200,w:100,h:100,points:[[250,1600],[0,1600],[0,1550],[250,1550]],speed:215,currentPoint:1.7666666666671835,collidable:false,pointOn:{"x":0,"y":1600},pointTo:{"x":0,"y":1550},xv:1.3164953090834047e-14,yv:-215,inView:false,path:[[500,3200,0.43],[0,3200,0.43],[0,3100,0.43],[500,3100,0.43]],})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:2900,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:200,y:3450,w:50,h:50,canCollide:true,inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:0,y:3600,w:300,h:100,canCollide:false,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:500,y:3400,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:420,y:3580,w:10,h:20,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:560,y:3490,w:10,h:10,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:180,y:3510,w:10,h:10,canCollide:true,inView:false,})
// C(1,[0],[11],{type:[1,[0],[11]],x:700,y:3400,w:100,h:400,points:[[350,1700],[950,1700]],speed:150,currentPoint:1,pointOn:{"x":950,"y":1700},pointTo:{"x":350,"y":1700},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[700,3400,0.3],[1900,3400,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:900,y:3400,w:100,h:200,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:3400,w:100,h:200,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:3700,w:100,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1800,y:3400,w:100,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1800,y:3600,w:100,h:200,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:3800,w:100,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2650,y:3400,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2702,y:2200,w:100,h:1300,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:3800,w:500,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:2200,w:100,h:1300,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3200,y:2200,w:100,h:1800,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3600,y:2200,w:100,h:1700,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:4000,y:2100,w:100,h:1900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3000,y:4000,w:550,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3750,y:4000,w:350,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3300,y:2300,w:200,h:100,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:3800,y:2300,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3400,y:3400,w:200,h:100,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3400,y:3300,w:100,h:100,points:[[1700,1650],[1650,1650],[1650,1750],[1700,1750]],speed:150,currentPoint:3.5,collidable:true,pointOn:{"x":1700,"y":1750},pointTo:{"x":1700,"y":1650},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[3400,3300,0.3],[3300,3300,0.3],[3300,3500,0.3],[3400,3500,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3300,y:3600,w:200,h:100,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3300,y:3700,w:100,h:300,points:[[1650,1850],[1750,1850]],speed:75,currentPoint:1.75,collidable:true,pointOn:{"x":1750,"y":1850},pointTo:{"x":1650,"y":1850},xv:-75,yv:9.184850993605149e-15,inView:false,path:[[3300,3700,0.15],[3500,3700,0.15]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3950,y:2550,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3700,y:2575,w:50,h:125,canCollide:true,inView:false,})
// C(1,[],[1],{type:[1,[],[1]],x:3700,y:2700,w:300,h:300,canCollide:false,inView:false,})
// C(1,[1],[11],{type:[1,[1],[11]],x:3650,y:2812.5,w:400,h:75,angle:985.5000000000063,rotateSpeed:0.0007575757575757576,pivotX:3850,pivotY:2850,distToPivot:0,canCollide:true,cullingRadius:101.74262872562316,unSim:7.241666666666816,inView:false,initialRotation:0,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3700,y:2800,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3950,y:2800,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:3700,y:3000,w:300,h:900,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.5,})
// C(1,[],[0],{type:[1,[],[0]],x:3800,y:4100,w:300,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3000,y:4100,w:500,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3500,y:4400,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3400,y:4300,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:4000,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:4200,w:100,h:700,canJump:true,inView:false,})
// C(1,[0],[11],{type:[1,[0],[11]],x:1900,y:3400,w:100,h:400,points:[[950,1700],[350,1700]],speed:150,currentPoint:1,pointOn:{"x":350,"y":1700},pointTo:{"x":950,"y":1700},xv:150,yv:0,inView:false,path:[[1900,3400,0.3],[700,3400,0.3]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3050,4200],[3250,4200],[3100,4400]],most:{"left":1525,"right":1625,"top":2100,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3400,4350],[3400,4500],[3325,4450]],most:{"left":1662.5,"right":1700,"top":2175,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3100,4200],[3150,4600],[3000,4600],[3000,4250]],most:{"left":1500,"right":1575,"top":2100,"bottom":2300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3325,4450],[3400,4500],[3400,4700],[3350,4700]],most:{"left":1662.5,"right":1700,"top":2225,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:4700,w:800,h:100,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,4325],[2800,4500],[2825,4700],[2700,4700]],most:{"left":1350,"right":1412.5,"top":2162.5,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,4250],[3000,4600],[2950,4400]],most:{"left":1475,"right":1500,"top":2125,"bottom":2300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,4100],[2850,4200],[2700,4325],[2700,4250]],most:{"left":1350,"right":1450,"top":2050,"bottom":2162.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[20],{type:[1,[],[20]],x:2625,y:4125,w:50,h:50,collide:false,opaq:0.3,inView:false,hex:"#000000",})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:4000,w:100,h:700,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2300,y:4525,w:50,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2550,y:4525,w:50,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2300,y:4650,w:125,h:50,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:4900,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2250,y:4950,w:250,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:4825,w:50,h:175,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:4800,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:5000,w:500,h:100,canJump:true,inView:false,})
// var minX0, minY0, maxX0, maxY0;
//         minX0 = 3450;minY0 = 4050;maxX0 = 3850;maxY0 = 4450;
//         C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = window.players[window.selfId];
//             if ((player.pos.x) > md(minX0) && (player.pos.x) < md(maxX0) && (player.pos.y) > md(minY0) && (player.pos.y) < md(maxY0)) {
//                 colors.background="#5c4337"; colors.tile="#201813";
//             }
//         },});
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2425,4650],[2475,4700],[2475,4775],[2425,4775]],most:{"left":1212.5,"right":1237.5,"top":2325,"bottom":2387.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:4700,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:4000,w:500,h:250,canJump:true,inView:false,})
// C(1,[1],[11],{type:[1,[1],[11]],x:1837.5,y:4475,w:325,h:50,angle:-1753.125000000003,rotateSpeed:-0.0015782828282828283,pivotX:2000,pivotY:4500,distToPivot:0,canCollide:true,cullingRadius:82.2059152372869,unSim:9.64166666666676,inView:false,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:4500,r:100,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2100,4250],[2200,4250],[2200,4425]],most:{"left":1050,"right":1100,"top":2125,"bottom":2212.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,4250],[2000,4250],[1800,4350]],most:{"left":900,"right":1000,"top":2125,"bottom":2175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1775,4425],[1825,4800],[1750,4800]],most:{"left":875,"right":912.5,"top":2212.5,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:4800,w:325,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:5100,w:400,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:4900,w:100,h:100,points:[[800,2450],[950,2450]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":950,"y":2450},pointTo:{"x":800,"y":2450},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[1600,4900,0.3],[1900,4900,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1900,y:5000,w:100,h:100,points:[[950,2500],[800,2500]],speed:150,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":800,"y":2500},pointTo:{"x":950,"y":2500},xv:150,yv:0,inView:false,path:[[1900,5000,0.3],[1600,5000,0.3]],})
// C(0,[],[11],{type:[0,[],[11]],x:1800,y:5000,r:50,renderType:"circleR",radius:25,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:4900,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:5400,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:5600,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:5200,w:100,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:5200,w:100,h:500,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:5200,w:100,h:100,points:[[800,2600],[800,2750]],speed:450,currentPoint:1,collidable:true,pointOn:{"x":800,"y":2600},pointTo:{"x":800,"y":2750},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[1600,5200,0.9],[1600,5500,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:5200,w:100,h:100,points:[[700,2600],[700,2750]],speed:450,currentPoint:1,collidable:true,pointOn:{"x":700,"y":2600},pointTo:{"x":700,"y":2750},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[1400,5200,0.9],[1400,5500,0.9]],})
// C(0,[],[11],{type:[0,[],[11]],x:1550,y:5350,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:1650,y:5150,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:4800,w:100,h:100,points:[[700,2400],[700,2550]],speed:450,currentPoint:1,collidable:true,pointOn:{"x":700,"y":2400},pointTo:{"x":700,"y":2550},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[1400,4800,0.9],[1400,5100,0.9]],})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:4800,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:4700,w:400,h:100,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:1350,y:5150,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:800,y:5200,w:500,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:4250,w:100,h:1050,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1225,y:4600,w:50,h:75,points:[[612.5,2300],[612.5,2425],[612.5,2562.5],[612.5,2425]],speed:450,currentPoint:0.2,collidable:true,pointOn:{"x":612.5,"y":2300},pointTo:{"x":612.5,"y":2425},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[1225,4600,0.9],[1225,4850,0.9],[1225,5125,0.9],[1225,4850,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1025,y:4600,w:50,h:75,points:[[512.5,2300],[512.5,2425],[512.5,2562.5],[512.5,2425]],speed:450,currentPoint:2.090909090909091,collidable:true,pointOn:{"x":512.5,"y":2562.5},pointTo:{"x":512.5,"y":2425},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[1025,4600,0.9],[1025,4850,0.9],[1025,5125,0.9],[1025,4850,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:925,y:4600,w:50,h:75,points:[[462.5,2300],[462.5,2425],[462.5,2562.5],[462.5,2425]],speed:450,currentPoint:1.1818181818181819,collidable:true,pointOn:{"x":462.5,"y":2425},pointTo:{"x":462.5,"y":2562.5},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[925,4600,0.9],[925,4850,0.9],[925,5125,0.9],[925,4850,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1125,y:4600,w:50,h:75,points:[[562.5,2300],[562.5,2425],[562.5,2562.5],[562.5,2425]],speed:450,currentPoint:3.1,collidable:true,pointOn:{"x":562.5,"y":2425},pointTo:{"x":562.5,"y":2300},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[1125,4600,0.9],[1125,4850,0.9],[1125,5125,0.9],[1125,4850,0.9]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:800,y:4500,w:500,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:600,y:5300,w:700,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:4200,w:100,h:350,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:4500,w:50,h:100,points:[[700,2250],[825,2250]],speed:170,currentPoint:0.18666666666580567,collidable:true,pointOn:{"x":700,"y":2250},pointTo:{"x":825,"y":2250},xv:170,yv:0,inView:false,path:[[1400,4500,0.34],[1650,4500,0.34]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:4200,w:50,h:100,points:[[700,2100],[825,2100]],speed:170,currentPoint:0.18666666666580567,collidable:true,pointOn:{"x":700,"y":2100},pointTo:{"x":825,"y":2100},xv:170,yv:0,inView:false,path:[[1400,4200,0.34],[1650,4200,0.34]],})
// C(0,[],[11],{type:[0,[],[11]],x:850,y:4600,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:1050,y:4450,r:30,renderType:"circleR",radius:15,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:4150,w:275,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1575,y:4100,w:25,h:100,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1575,4100],[1600,4150],[1350,4150]],most:{"left":675,"right":800,"top":2050,"bottom":2075},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[11],{type:[0,[],[11]],x:0,y:3100,r:50,renderType:"circleR",radius:25,inView:false,})
// C(1,[],[17],{type:[1,[],[17]],x:800,y:4550,w:100,h:650,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:5000,})
// C(1,[],[17],{type:[1,[],[17]],x:1600,y:5100,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(1,[],[17],{type:[1,[],[17]],x:1500,y:5300,w:100,h:100,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2000,})
// C(1,[],[17],{type:[1,[],[17]],x:1300,y:5100,w:100,h:100,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:4000,})
// C(1,[],[0],{type:[1,[],[0]],x:600,y:3000,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:700,y:3100,w:2000,h:200,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:2200,w:100,h:200,canCollide:true,inView:true,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1300,4550],[1400,4550],[1400,4600],[1375,4600]],most:{"left":650,"right":700,"top":2275,"bottom":2300},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:7500,w:1200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1.5308084989341915e-15,y:7300,w:100,h:200,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[100,7300],[250,7350],[400,7500],[100,7500]],most:{"left":50,"right":200,"top":3650,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,5250],[175,5300],[175,5400],[0,5575]],most:{"left":0,"right":87.5,"top":2625,"bottom":2787.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[400,5850],[400,6000],[225,6000],[225,5900]],most:{"left":112.5,"right":200,"top":2925,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,7050],[175,7100],[175,7200],[0,7200]],most:{"left":0,"right":87.5,"top":3525,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[400,6450],[400,6625],[225,6600],[187.5,6500]],most:{"left":93.75,"right":200,"top":3225,"bottom":3312.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:600,y:6700,w:600,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1200,y:7000,w:100,h:550,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:600,y:6800,w:200,h:100,points:[[300,3400],[300,3700]],speed:150,currentPoint:1.8333333333333335,collidable:true,pointOn:{"x":300,"y":3700},pointTo:{"x":300,"y":3400},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[600,6800,0.3],[600,7400,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1000,y:6800,w:200,h:100,points:[[500,3400],[500,3700]],speed:150,currentPoint:1.8333333333333335,collidable:true,pointOn:{"x":500,"y":3700},pointTo:{"x":500,"y":3400},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1000,6800,0.3],[1000,7400,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:6800,w:200,h:100,points:[[400,3400],[400,3700]],speed:300,currentPoint:1.6666666666666665,collidable:true,pointOn:{"x":400,"y":3700},pointTo:{"x":400,"y":3400},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[800,6800,0.6],[800,7400,0.6]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:600,y:7100,w:100,h:100,points:[[300,3550],[550,3550]],speed:125,currentPoint:0.8333333333334585,collidable:true,pointOn:{"x":300,"y":3550},pointTo:{"x":550,"y":3550},xv:125,yv:0,inView:false,path:[[600,7100,0.25],[1100,7100,0.25]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:6800,w:100,h:100,points:[[550,3400],[300,3400]],speed:125,currentPoint:0.8333333333334504,collidable:true,pointOn:{"x":550,"y":3400},pointTo:{"x":300,"y":3400},xv:-125,yv:1.5308084989341916e-14,inView:false,path:[[1100,6800,0.25],[600,6800,0.25]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:7400,w:100,h:100,points:[[550,3700],[300,3700]],speed:125,currentPoint:0.8333333333334504,collidable:true,pointOn:{"x":550,"y":3700},pointTo:{"x":300,"y":3700},xv:-125,yv:1.5308084989341916e-14,inView:false,path:[[1100,7400,0.25],[600,7400,0.25]],})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:6300,w:50,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:6200,w:800,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:6100,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:800,y:6100,w:600,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1300,y:5700,w:100,h:200,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:5700,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:6000,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:5600,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:5700,w:100,h:675,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1850,y:6200,w:150,h:200,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1650,y:5700,w:200,h:50,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1650,5900],[1740,6000],[1650,6200],[1600,6200],[1600,6000]],most:{"left":800,"right":870,"top":2950,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1760,5700],[2000,5700],[2000,6050]],most:{"left":880,"right":1000,"top":2850,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,5900],[2000,6200],[1850,6200]],most:{"left":925,"right":1000,"top":2950,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:5700,w:150,h:50,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1500,y:6400,w:100,h:100,points:[[750,3200],[750,3550]],speed:420,currentPoint:0.4,collidable:true,pointOn:{"x":750,"y":3200},pointTo:{"x":750,"y":3550},xv:2.5717582782094416e-14,yv:420,inView:false,path:[[1500,6400,0.84],[1500,7100,0.84]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:6800,w:100,h:100,points:[[700,3400],[700,3750]],speed:420,currentPoint:0.4,collidable:true,pointOn:{"x":700,"y":3400},pointTo:{"x":700,"y":3750},xv:2.5717582782094416e-14,yv:420,inView:false,path:[[1400,6800,0.84],[1400,7500,0.84]],})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:6500,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1600,y:6500,w:100,h:700,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:7200,w:150,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:7300,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:7600,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1200,y:7700,w:400,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:0,y:7600,w:100,h:100,points:[[0,3800],[600,3800]],speed:350,currentPoint:1.8055555555555598,collidable:true,pointOn:{"x":600,"y":3800},pointTo:{"x":0,"y":3800},xv:-350,yv:4.2862637970157365e-14,inView:false,path:[[0,7600,0.7],[1200,7600,0.7]],})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:7900,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:8250,w:750,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:750,y:8350,w:350,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1100,y:8300,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1200,y:8200,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:8050,w:100,h:350,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:8200,w:400,h:50,canCollide:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1825,4800],[1900,4800],[1900,4825],[1825,4900]],most:{"left":912.5,"right":950,"top":2400,"bottom":2450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[800,5100],[825,5200],[800,5200]],most:{"left":400,"right":412.5,"top":2550,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:8000,w:500,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:7200,w:100,h:900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:7200,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:6500,w:100,h:800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:7150,w:500,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:7000,w:100,h:150,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1700,y:6800,w:350,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1900,y:7100,w:400,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2050,y:6550,w:250,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2250,y:6650,w:50,h:450,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1700,y:6600,w:200,h:200,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2050,y:6500,w:250,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:6000,w:100,h:600,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2100,y:6100,w:100,h:400,points:[[1050,3050],[1150,3050]],speed:150,currentPoint:1.5,collidable:true,pointOn:{"x":1150,"y":3050},pointTo:{"x":1050,"y":3050},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2100,6100,0.3],[2300,6100,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:6000,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:5600,w:100,h:400,canJump:true,inView:false,})
// C(1,[0],[11],{type:[1,[0],[11]],x:1800,y:5400,w:50,h:200,points:[[900,2700],[1025,2700]],speed:300,currentPoint:0,pointOn:{"x":900,"y":2700},pointTo:{"x":1025,"y":2700},xv:300,yv:0,inView:false,path:[[1800,5400,0.6],[2050,5400,0.6]],})
// C(1,[],[7],{type:[1,[],[7]],x:1810,y:5415,w:30,h:100,id:1,active:true,inView:false,color:"#d6d612",coinAmount:1,})
// C(1,[],[8],{type:[1,[],[8]],x:2300,y:5400,w:100,h:200,id:1,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
// C(0,[],[0],{type:[0,[],[0]],x:1850,y:5600,r:75,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2025,y:5400,r:75,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:5600,w:400,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:5300,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:5300,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:5300,w:500,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:5200,w:300,h:100,points:[[1150,2600],[1450,2600]],speed:250,currentPoint:1.7222222222215047,collidable:true,pointOn:{"x":1450,"y":2600},pointTo:{"x":1150,"y":2600},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2300,5200,0.5],[2900,5200,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2900,y:5100,w:300,h:100,points:[[1450,2550],[1150,2550]],speed:250,currentPoint:1.7222222222215047,collidable:true,pointOn:{"x":1150,"y":2550},pointTo:{"x":1450,"y":2550},xv:250,yv:0,inView:false,path:[[2900,5100,0.5],[2300,5100,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:3200,y:5050,w:100,h:350,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:5000,w:300,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2900,y:4900,w:100,h:100,points:[[1450,2450],[1600,2450]],speed:250,currentPoint:1.4444444444430093,collidable:true,pointOn:{"x":1600,"y":2450},pointTo:{"x":1450,"y":2450},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2900,4900,0.5],[3200,4900,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:3500,y:4500,w:100,h:1600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3300,y:5600,w:200,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:6100,w:900,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2300,y:5800,w:100,h:200,points:[[1150,2900],[1250,2900],[1350,2900],[1250,2900]],speed:250,currentPoint:0.16666666666451418,collidable:true,pointOn:{"x":1150,"y":2900},pointTo:{"x":1250,"y":2900},xv:250,yv:0,inView:false,path:[[2300,5800,0.5],[2500,5800,0.5],[2700,5800,0.5],[2500,5800,0.5]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3050,y:4800,w:400,h:50,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:5700,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:6200,w:100,h:1000,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:6600,w:100,h:700,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:6800,w:250,h:250,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:6600,w:100,h:200,points:[[1250,3300],[1500,3300]],speed:300,currentPoint:0.4,collidable:true,pointOn:{"x":1250,"y":3300},pointTo:{"x":1500,"y":3300},xv:300,yv:0,inView:false,path:[[2500,6600,0.6],[3000,6600,0.6]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:6600,w:100,h:200,points:[[1250,3300],[1500,3300]],speed:150,currentPoint:0.2,collidable:true,pointOn:{"x":1250,"y":3300},pointTo:{"x":1500,"y":3300},xv:150,yv:0,inView:false,path:[[2500,6600,0.3],[3000,6600,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2500,y:6600,w:100,h:200,points:[[1250,3300],[1500,3300]],speed:450,currentPoint:0.6,collidable:true,pointOn:{"x":1250,"y":3300},pointTo:{"x":1500,"y":3300},xv:450,yv:0,inView:false,path:[[2500,6600,0.9],[3000,6600,0.9]],})
// C(1,[],[0],{type:[1,[],[0]],x:2850,y:6800,w:250,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2850,y:6350,w:250,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:6350,w:250,h:250,canJump:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:2750,y:6350,w:100,h:700,force:50000,dir:{"x":0,"y":50000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3000,y:6600,w:100,h:200,points:[[1500,3300],[1250,3300]],speed:450,currentPoint:0.6,collidable:true,pointOn:{"x":1500,"y":3300},pointTo:{"x":1250,"y":3300},xv:-450,yv:5.510910596163089e-14,inView:false,path:[[3000,6600,0.9],[2500,6600,0.9]],})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:7200,w:600,h:100,canJump:true,inView:false,})
// C(1,[],[9],{type:[1,[],[9]],x:2450,y:7350,w:200,h:200,spawn:{"x":1275,"y":3725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:7300,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:7600,w:400,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:7300,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3600,y:4500,w:400,h:3200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3200,y:6200,w:400,h:1500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2800,y:7300,w:400,h:400,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2000,y:7400,w:300,h:100,angle:1432.1250000000143,rotateSpeed:0.0017045454545454545,pivotX:2150,pivotY:7450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:13.058333333333232,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2000,y:7400,w:300,h:100,angle:2864.2500000000286,rotateSpeed:0.003409090909090909,pivotX:2150,pivotY:7450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:13.058333333333232,inView:false,initialRotation:0,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:7600,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:7700,w:100,h:200,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:7900,w:175,h:200,points:[[1000,3950],[1262.5,3950]],speed:150,currentPoint:1.5238095238095237,collidable:true,pointOn:{"x":1262.5,"y":3950},pointTo:{"x":1000,"y":3950},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2000,7900,0.3],[2525,7900,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:8100,w:800,h:200,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2700,y:7850,w:100,h:950,points:[[1350,3925],[1550,3925]],speed:150,currentPoint:1.75,collidable:true,pointOn:{"x":1550,"y":3925},pointTo:{"x":1350,"y":3925},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2700,7850,0.3],[3100,7850,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3100,y:7700,w:100,h:1100,points:[[1550,3850],[1750,3850]],speed:150,currentPoint:1.75,collidable:true,pointOn:{"x":1750,"y":3850},pointTo:{"x":1550,"y":3850},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[3100,7700,0.3],[3500,7700,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:3600,y:7700,w:400,h:1200,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3200,y:8800,w:400,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2700,y:7850,w:100,h:950,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3500,y:7700,w:100,h:1100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2800,y:7850,w:300,h:100,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2800,y:8450,w:250,h:100,points:[[1400,4225],[1625,4225]],speed:75,currentPoint:1.8888888888888888,collidable:true,pointOn:{"x":1625,"y":4225},pointTo:{"x":1400,"y":4225},xv:-75,yv:9.184850993605149e-15,inView:false,path:[[2800,8450,0.15],[3250,8450,0.15]],})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:8300,w:100,h:675,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:8900,w:900,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:9300,w:1400,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:9000,w:900,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3000,y:9000,w:100,h:300,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2600,y:9000,w:100,h:300,points:[[1300,4500],[1450,4500]],speed:400,currentPoint:1.111111111109676,collidable:true,pointOn:{"x":1450,"y":4500},pointTo:{"x":1300,"y":4500},xv:-400,yv:4.898587196589413e-14,inView:false,path:[[2600,9000,0.8],[2900,9000,0.8]],})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:9125,w:100,h:275,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:8300,w:1200,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3.980102097228897e-14,y:8400,w:1400,h:2300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:8900,w:600,h:450,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:8900,w:100,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:8900,w:200,h:100,points:[[1000,4450],[1000,4650]],speed:180,currentPoint:1.3,collidable:true,pointOn:{"x":1000,"y":4650},pointTo:{"x":1000,"y":4450},xv:1.1021821192326179e-14,yv:-180,inView:false,path:[[2000,8900,0.36],[2000,9300,0.36]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2200,y:8900,w:200,h:100,points:[[1100,4450],[1100,4650]],speed:270,currentPoint:1.95,collidable:true,pointOn:{"x":1100,"y":4650},pointTo:{"x":1100,"y":4450},xv:1.6532731788489267e-14,yv:-270,inView:false,path:[[2200,8900,0.54],[2200,9300,0.54]],})
// C(1,[],[0],{type:[1,[],[0]],x:2150,y:9400,w:1850,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:9500,w:2000,h:500,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1525,y:10100,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:10100,w:100,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:10600,w:550,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1550,y:9825,w:350,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1400,y:10125,w:125,h:50,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:10000,w:1900,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:10400,w:1900,h:300,canJump:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:2100,y:10300,w:200,h:100,force:1000,dir:{"x":1000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.1,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2275,y:10300,w:75,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2350,y:10300,w:1650,h:100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:10000,w:100,h:100,points:[[1000,5000],[1000,5300]],speed:250,currentPoint:1.7222222222193522,collidable:true,pointOn:{"x":1000,"y":5300},pointTo:{"x":1000,"y":5000},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[2000,10000,0.5],[2000,10600,0.5]],})
// C(0,[],[11],{type:[0,[],[11]],x:1950,y:10050,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:10700,w:100,h:100,points:[[1000,5350],[700,5350]],speed:250,currentPoint:1.722222222222581,collidable:true,pointOn:{"x":700,"y":5350},pointTo:{"x":1000,"y":5350},xv:250,yv:0,inView:false,path:[[2000,10700,0.5],[1400,10700,0.5]],})
// C(1,[],[13],{type:[1,[],[13]],x:1700,y:10800,w:100,h:200,force:1000,dir:{"x":0,"y":1000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.1,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:10700,w:1900,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:10800,w:300,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1450,y:10800,w:250,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:11050,w:100,h:50,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1700,y:10975,w:100,h:75,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:10700,w:1250,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1250,y:10900,w:50,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:11100,w:1100,h:2800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1100,y:12100,w:675,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:11100,w:2300,h:900,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:11100,w:200,h:200,points:[[550,5550],[650,5550],[650,5650],[550,5650]],speed:150,currentPoint:3.5,collidable:true,pointOn:{"x":550,"y":5650},pointTo:{"x":550,"y":5550},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1100,11100,0.3],[1300,11100,0.3],[1300,11300,0.3],[1100,11300,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:11500,w:200,h:200,points:[[550,5750],[650,5750],[650,5850],[550,5850]],speed:150,currentPoint:3.5,collidable:true,pointOn:{"x":550,"y":5850},pointTo:{"x":550,"y":5750},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1100,11500,0.3],[1300,11500,0.3],[1300,11700,0.3],[1100,11700,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:12000,w:2100,h:250,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1800,y:12300,w:200,h:200,points:[[900,6150],[900,6600]],speed:150,currentPoint:1.8888888888888888,collidable:true,pointOn:{"x":900,"y":6600},pointTo:{"x":900,"y":6150},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1800,12300,0.3],[1800,13200,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1700,y:13200,w:100,h:200,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:12300,w:1900,h:1200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1100,y:12300,w:600,h:700,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1200,y:13600,w:2800,h:2600,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1100,y:13000,w:200,h:200,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:13900,w:100,h:450,points:[[550,6950],[350,6950]],speed:250,currentPoint:1.5833333333332127,collidable:true,pointOn:{"x":350,"y":6950},pointTo:{"x":550,"y":6950},xv:250,yv:0,inView:false,path:[[1100,13900,0.5],[700,13900,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:14400,w:100,h:200,points:[[350,7200],[550,7200]],speed:250,currentPoint:1.5833333333332178,collidable:true,pointOn:{"x":550,"y":7200},pointTo:{"x":350,"y":7200},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[700,14400,0.5],[1100,14400,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:14650,w:100,h:450,points:[[550,7325],[350,7325]],speed:250,currentPoint:1.5833333333332127,collidable:true,pointOn:{"x":350,"y":7325},pointTo:{"x":550,"y":7325},xv:250,yv:0,inView:false,path:[[1100,14650,0.5],[700,14650,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:15150,w:100,h:200,points:[[350,7575],[550,7575]],speed:250,currentPoint:1.5833333333332178,collidable:true,pointOn:{"x":550,"y":7575},pointTo:{"x":350,"y":7575},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[700,15150,0.5],[1100,15150,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1100,y:15400,w:100,h:450,points:[[550,7700],[350,7700]],speed:250,currentPoint:1.5833333333332127,collidable:true,pointOn:{"x":350,"y":7700},pointTo:{"x":550,"y":7700},xv:250,yv:0,inView:false,path:[[1100,15400,0.5],[700,15400,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:15900,w:100,h:200,points:[[350,7950],[550,7950]],speed:250,currentPoint:1.5833333333332178,collidable:true,pointOn:{"x":550,"y":7950},pointTo:{"x":350,"y":7950},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[700,15900,0.5],[1100,15900,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:16100,w:300,h:900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1.224646799147353e-14,y:13900,w:700,h:3100,canJump:true,inView:false,})
// C(1,[],[7],{type:[1,[],[7]],x:750,y:13950,w:100,h:100,id:2,active:true,inView:false,color:"#d6d612",coinAmount:1,})
// C(1,[],[8],{type:[1,[],[8]],x:1000,y:16100,w:200,h:100,id:2,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
// C(1,[],[17],{type:[1,[],[17]],x:1700,y:13000,w:100,h:200,time:0,maxTime:1.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:1500,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:16400,w:500,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:16300,w:200,h:375,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1975,y:16200,w:2025,h:1400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:17500,w:500,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:16200,w:75,h:475,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:17000,w:1000,h:600,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1100,y:17000,w:100,h:500,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1200,y:17700,w:200,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:760,y:17800,w:640,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:17600,w:2100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:17600,w:400,h:2400,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:1000,y:17700,r:50,renderType:"circleR",radius:25,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:17900,w:2700,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:18200,w:400,h:1800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1050,y:18400,w:2950,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:800,y:19100,w:1700,h:900,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:18600,w:200,h:200,points:[[400,9300],[700,9300]],speed:250,currentPoint:1.722222222222384,collidable:true,pointOn:{"x":700,"y":9300},pointTo:{"x":400,"y":9300},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[800,18600,0.5],[1400,18600,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1400,y:18900,w:200,h:200,points:[[700,9450],[400,9450]],speed:250,currentPoint:1.7222222222223764,collidable:true,pointOn:{"x":400,"y":9450},pointTo:{"x":700,"y":9450},xv:250,yv:0,inView:false,path:[[1400,18900,0.5],[800,18900,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1700,y:18700,w:100,h:400,points:[[850,9350],[950,9350]],speed:150,currentPoint:1.5,collidable:true,pointOn:{"x":950,"y":9350},pointTo:{"x":850,"y":9350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[1700,18700,0.3],[1900,18700,0.3]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:18600,w:100,h:400,points:[[1000,9300],[1100,9300]],speed:150,currentPoint:1.5,collidable:true,pointOn:{"x":1100,"y":9300},pointTo:{"x":1000,"y":9300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2000,18600,0.3],[2200,18600,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:18600,w:1300,h:1700,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:19400,w:100,h:100,canCollide:true,inView:false,})
// var minX1, minY1, maxX1, maxY1;
//         minX1 = 2350;minY1 = 7250;maxX1 = 2750;maxY1 = 7650;
//         C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = window.players[window.selfId];
//             if ((player.pos.x) > md(minX1) && (player.pos.x) < md(maxX1) && (player.pos.y) > md(minY1) && (player.pos.y) < md(maxY1)) {
//                 colors.background="#5c2e19"; colors.tile="#201209";
//             }
//         },});
// var minX2, minY2, maxX2, maxY2;
//         minX2 = 2350;minY2 = 19950;maxX2 = 2750;maxY2 = 20350;
//         C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = window.players[window.selfId];
//             if ((player.pos.x) > md(minX2) && (player.pos.x) < md(maxX2) && (player.pos.y) > md(minY2) && (player.pos.y) < md(maxY2)) {
//                 colors.background="#622509"; colors.tile="#301403";
//             }
//         },});
// C(1,[],[0],{type:[1,[],[0]],x:0,y:20000,w:2400,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:-1.5308084989341915e-15,y:20200,w:1600,h:900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:20300,w:1600,h:1100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:19800,w:100,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1600,y:20200,w:600,h:200,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1175,y:14125,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1175,y:14825,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:700,y:15575,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:700,y:14825,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:700,y:14125,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1950,y:16700,w:25,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:16300,w:200,h:100,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1300,16300],[1300,16400],[1000,16400]],most:{"left":500,"right":650,"top":8150,"bottom":8200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,16300],[1700,16600],[1625,16600]],most:{"left":812.5,"right":850,"top":8150,"bottom":8300},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[20],{type:[1,[],[20]],x:1987.5,y:18600,w:25,h:500,collide:false,opaq:0.5,inView:false,hex:"#000000",})
// C(1,[],[20],{type:[1,[],[20]],x:2287.5,y:18600,w:25,h:500,collide:false,opaq:0.5,inView:false,hex:"#000000",})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:20400,w:100,h:200,points:[[800,10200],[975,10200],[1150,10200],[975,10200]],speed:250,currentPoint:1.8095238095237722,collidable:true,pointOn:{"x":975,"y":10200},pointTo:{"x":1150,"y":10200},xv:250,yv:0,inView:false,path:[[1600,20400,0.5],[1950,20400,0.5],[2300,20400,0.5],[1950,20400,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:20600,w:100,h:200,points:[[800,10300],[975,10300],[1150,10300],[975,10300]],speed:250,currentPoint:2.809523809523723,collidable:true,pointOn:{"x":1150,"y":10300},pointTo:{"x":975,"y":10300},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[1600,20600,0.5],[1950,20600,0.5],[2300,20600,0.5],[1950,20600,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:20800,w:100,h:200,points:[[800,10400],[975,10400],[1150,10400],[975,10400]],speed:250,currentPoint:3.809523809523762,collidable:true,pointOn:{"x":975,"y":10400},pointTo:{"x":800,"y":10400},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[1600,20800,0.5],[1950,20800,0.5],[2300,20800,0.5],[1950,20800,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1600,y:21000,w:100,h:200,points:[[800,10500],[975,10500],[1150,10500],[975,10500]],speed:250,currentPoint:0.8095238095238009,collidable:true,pointOn:{"x":800,"y":10500},pointTo:{"x":975,"y":10500},xv:250,yv:0,inView:false,path:[[1600,21000,0.5],[1950,21000,0.5],[2300,21000,0.5],[1950,21000,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:1600,y:21200,w:800,h:200,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:800,y:21100,w:100,h:400,points:[[400,10550],[575,10550],[750,10550],[575,10550]],speed:250,currentPoint:0.8095238095241087,collidable:true,pointOn:{"x":400,"y":10550},pointTo:{"x":575,"y":10550},xv:250,yv:0,inView:false,path:[[800,21100,0.5],[1150,21100,0.5],[1500,21100,0.5],[1150,21100,0.5]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:700,y:21100,w:100,h:500,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:21400,w:2300,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:21100,w:700,h:800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:700,y:21600,w:700,h:300,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1400,y:21800,w:200,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:21900,w:1400,h:1800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:22300,w:700,h:1400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:21900,w:1500,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:23300,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:23400,w:200,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2450,y:23350,w:50,h:50,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2300,23300],[2450,23350],[2450,23400],[2300,23400]],most:{"left":1150,"right":1225,"top":11650,"bottom":11700},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:23100,w:900,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2650,y:23700,w:1350,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:23800,w:1500,h:700,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:2314.512810051965,y:23913.951294748826,w:170,h:200,angle:4,rotateSpeed:0.0015151515151515152,pivotX:2200,pivotY:24000,distToPivot:100,canCollide:true,renderType:"rotating",cullingRadius:165.62202374203343,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1915.4871899480352,y:23886.048705251174,w:170,h:200,angle:184,rotateSpeed:0.0015151515151515152,pivotX:2200,pivotY:24000,distToPivot:100,canCollide:true,renderType:"rotating",cullingRadius:165.62202374203343,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1515.4871899480352,y:23913.951294748826,w:170,h:200,angle:176,rotateSpeed:-0.0015151515151515152,pivotX:1800,pivotY:24000,distToPivot:100,canCollide:true,renderType:"rotating",cullingRadius:165.62202374203343,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1914.5128100519648,y:23886.048705251174,w:170,h:200,angle:-4,rotateSpeed:-0.0015151515151515152,pivotX:1800,pivotY:24000,distToPivot:100,canCollide:true,renderType:"rotating",cullingRadius:165.62202374203343,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:24300,w:1000,h:200,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:1750,y:22100,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:22300,w:100,h:1400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:23700,w:1300,h:1700,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1300,23700],[1600,23700],[1300,24500]],most:{"left":650,"right":800,"top":11850,"bottom":12250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,24500],[1600,25400],[1300,25400]],most:{"left":650,"right":800,"top":12250,"bottom":12700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,24500],[1800,24500],[1800,25100]],most:{"left":800,"right":900,"top":12250,"bottom":12550},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:24500,w:2200,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:25400,w:2500,h:200,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1800,y:25100,w:100,h:100,points:[[900,12550],[1000,12550],[1000,12650],[900,12650]],speed:250,currentPoint:3.166666666675701,collidable:true,pointOn:{"x":900,"y":12650},pointTo:{"x":900,"y":12550},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[1800,25100,0.5],[2000,25100,0.5],[2000,25300,0.5],[1800,25300,0.5]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2100,y:25100,w:100,h:100,points:[[1050,12550],[1150,12550],[1150,12650],[1050,12650]],speed:250,currentPoint:3.1666666666740637,collidable:true,pointOn:{"x":1050,"y":12650},pointTo:{"x":1050,"y":12550},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[2100,25100,0.5],[2300,25100,0.5],[2300,25300,0.5],[2100,25300,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:25100,w:1600,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2800,y:25300,w:1200,h:2100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:25450,w:100,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:25500,w:50,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2150,y:26200,w:650,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:26100,w:900,h:400,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1000,y:25600,w:100,h:500,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:9.184850993605149e-15,y:25600,w:1000,h:900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:26300,w:300,h:1100,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:2000,y:26700,w:200,h:200,points:[[1000,13350],[1000,13500]],speed:250,currentPoint:1.4444444444559243,collidable:true,pointOn:{"x":1000,"y":13500},pointTo:{"x":1000,"y":13350},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[2000,26700,0.5],[2000,27000,0.5]],})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:26750,w:300,h:650,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:27200,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:26950,w:200,h:450,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:26500,w:2000,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:-3.0616169978683826e-15,y:26750,w:1600,h:350,canJump:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:1300,y:27100,w:500,h:1500,force:10000,dir:{"x":0,"y":10000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1,})
// C(1,[],[15],{type:[1,[],[15]],x:1300,y:27100,w:500,h:1500,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:27400,w:2200,h:1400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3.673940397442059e-14,y:27100,w:1300,h:2900,canJump:true,inView:false,})
// C(1,[],[15],{type:[1,[],[15]],x:1800,y:28800,w:2200,h:100,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
// C(1,[],[13],{type:[1,[],[13]],x:1700,y:28800,w:1950,h:100,force:1000,dir:{"x":1000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.1,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:28900,w:2300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:28700,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:29000,w:2700,h:1000,canJump:true,inView:false,})
// C(1,[],[24],{type:[1,[],[24]],x:1300,y:28600,w:400,h:400,ir:0.1,or:0.3,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.1,outerR:0,outerG:0,outerB:0,outerSize:0.3,innerOpacity:0,outerOpacity:1,})
// C(1,[],[24],{type:[1,[],[24]],x:1700,y:28750,w:2300,h:100,ir:0.02,or:0.06,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.02,outerR:0,outerG:0,outerB:0,outerSize:0.06,innerOpacity:0,outerOpacity:1,})
// C(1,[],[20],{type:[1,[],[20]],x:3650,y:28750,w:400,h:200,collide:false,opaq:0.9,inView:false,hex:"#000000",})
// C(1,[],[20],{type:[1,[],[20]],x:1800,y:28750,w:1850,h:200,collide:false,opaq:1,inView:false,hex:"#000000",})
// C(1,[],[20],{type:[1,[],[20]],x:1750,y:28750,w:25,h:200,collide:false,opaq:0.5,inView:false,hex:"#000000",})
// C(1,[],[20],{type:[1,[],[20]],x:1750,y:28750,w:25,h:200,collide:false,opaq:0.7,inView:false,hex:"#000000",})
// C(1,[],[20],{type:[1,[],[20]],x:1775,y:28750,w:25,h:200,collide:false,opaq:0.8,inView:false,hex:"#000000",})
// C(1,[],[12],{type:[1,[],[12]],x:3990,y:28800,w:10,h:100,tpx:400,tpy:31800,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:300,y:31600,w:200,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:200,y:31700,w:50,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1.5308084989341915e-15,y:31900,w:250,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:31400,w:200,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:6.123233995736766e-15,y:32000,w:800,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:600,y:31650,w:100,h:150,canJump:true,inView:false,})
// var minX3, minY3, maxX3, maxY3;
//         minX3 = 200;minY3 = 31600;maxX3 = 600;maxY3 = 32000;
//         C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
//             const player = window.players[window.selfId];
//             if ((player.pos.x) > md(minX3) && (player.pos.x) < md(maxX3) && (player.pos.y) > md(minY3) && (player.pos.y) < md(maxY3)) {
//                 colors.background="#bd3900"; colors.tile="#662900";
//             }
//         },});
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:26300,w:100,h:200,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,26100],[2000,26300],[1900,26300]],most:{"left":950,"right":1000,"top":13050,"bottom":13150},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:21900,w:50,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:600,y:31900,w:475,h:100,canJump:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:3650,y:28800,w:350,h:100,force:400,dir:{"x":400,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.04,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:22500,w:900,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:22500,w:100,h:550,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:23090,w:500,h:10,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:700,y:31800,w:200,h:100,points:[[350,15900],[350,15700]],speed:150,currentPoint:1.75,collidable:true,pointOn:{"x":350,"y":15700},pointTo:{"x":350,"y":15900},xv:9.184850993605149e-15,yv:150,inView:false,path:[[700,31800,0.3],[700,31400,0.3]],})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:900,y:31400,w:600,h:200,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:800,y:32000,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:900,y:32200,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:32200,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:31900,w:900,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:32000,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1100,y:32500,w:600,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:32300,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:32300,w:100,h:300,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,32210],[1150,32210],[1250,32300],[1400,32500],[1100,32500]],most:{"left":550,"right":700,"top":16105,"bottom":16250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1650,32210],[1700,32210],[1700,32500],[1400,32500],[1550,32300]],most:{"left":700,"right":850,"top":16105,"bottom":16250},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[13],{type:[1,[],[13]],x:900,y:32000,w:200,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.05,})
// C(1,[],[13],{type:[1,[],[13]],x:1700,y:32000,w:200,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.05,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2000,y:31600,w:300,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:31500,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3000,y:31400,w:100,h:1300,canCollide:true,inView:false,})
// C(1,[0],[11],{type:[1,[0],[11]],x:2600,y:31500,w:400,h:100,points:[[1300,15750],[1300,16250]],speed:150,currentPoint:1,pointOn:{"x":1300,"y":16250},pointTo:{"x":1300,"y":15750},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[2600,31500,0.3],[2600,32500,0.3]],})
// C(1,[0],[11],{type:[1,[0],[11]],x:2600,y:32500,w:400,h:100,points:[[1300,16250],[1300,15750]],speed:150,currentPoint:1,pointOn:{"x":1300,"y":15750},pointTo:{"x":1300,"y":16250},xv:9.184850993605149e-15,yv:150,inView:false,path:[[2600,32500,0.3],[2600,31500,0.3]],})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:32000,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2900,y:31550,w:100,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2950,y:31800,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:32050,w:150,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2850,y:32050,w:150,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:32300,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2750,y:32300,w:250,h:100,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:32600,w:400,h:100,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,32275],[2400,32600],[2100,32600]],most:{"left":1050,"right":1200,"top":16137.5,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,32000],[2250,32000],[2150,32200],[2000,32150]],most:{"left":1000,"right":1125,"top":16000,"bottom":16100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,32000],[2500,32000],[2500,32150],[2350,32100]],most:{"left":1125,"right":1250,"top":16000,"bottom":16075},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:3100,y:31400,w:900,h:1800,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:32700,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1450,y:32800,w:1650,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:32900,w:500,h:500,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1150,32600],[1500,32600],[1300,32700],[1200,32700]],most:{"left":575,"right":750,"top":16300,"bottom":16350},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:32300,w:1000,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:550,y:33000,w:450,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:32900,w:150,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:32700,w:150,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:32500,w:350,h:100,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:450,y:32650,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:200,y:32500,w:200,h:100,points:[[100,16250],[100,16550]],speed:550,currentPoint:1.3888888888850852,collidable:true,pointOn:{"x":100,"y":16550},pointTo:{"x":100,"y":16250},xv:3.3677786976552216e-14,yv:-550,inView:false,path:[[200,32500,1.1],[200,33100,1.1]],})
// C(1,[],[0],{type:[1,[],[0]],x:-1.5308084989341915e-15,y:32500,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:32800,w:100,h:150,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:150,y:32750,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:0,y:32700,w:100,h:100,points:[[0,16350],[0,16650]],speed:550,currentPoint:1.3888888888794464,collidable:true,pointOn:{"x":0,"y":16650},pointTo:{"x":0,"y":16350},xv:3.3677786976552216e-14,yv:-550,inView:false,path:[[0,32700,1.1],[0,33300,1.1]],})
// C(1,[],[0],{type:[1,[],[0]],x:200,y:32850,w:200,h:50,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:150,y:33000,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:33050,w:100,h:450,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:-1.071565949253934e-14,y:33400,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:33300,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:33200,w:100,h:100,canJump:true,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:450,y:33250,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:200,y:33100,w:200,h:100,points:[[100,16550],[100,16850]],speed:550,currentPoint:1.3888888888774091,collidable:true,pointOn:{"x":100,"y":16850},pointTo:{"x":100,"y":16550},xv:3.3677786976552216e-14,yv:-550,inView:false,path:[[200,33100,1.1],[200,33700,1.1]],})
// C(0,[],[11],{type:[0,[],[11]],x:300,y:33100,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:450,y:33500,r:25,renderType:"circleR",radius:12.5,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:33500,w:200,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1.2246467991473532e-14,y:33800,w:500,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:33550,w:100,h:250,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:600,y:33400,w:100,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:33800,w:200,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:34200,w:1500,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:33400,w:100,h:500,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,33750],[1250,34200],[1050,34200]],most:{"left":525,"right":625,"top":16875,"bottom":17100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,33400],[1000,33400],[950,33850]],most:{"left":350,"right":500,"top":16700,"bottom":16925},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:34100,w:500,h:100,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[200,32800],[400,32850],[200,32850]],most:{"left":100,"right":200,"top":16400,"bottom":16425},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[200,32900],[400,32900],[200,32950]],most:{"left":100,"right":200,"top":16450,"bottom":16475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[200,33050],[250,33050],[200,33200]],most:{"left":100,"right":125,"top":16525,"bottom":16600},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[13],{type:[1,[],[13]],x:1700,y:33400,w:100,h:500,force:50000,dir:{"x":0,"y":-50000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:33700,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:33700,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:33900,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:33400,w:200,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:33200,w:200,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:33400,w:100,h:900,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1500,y:33600,w:100,h:100,points:[[750,16800],[950,16800]],speed:440,currentPoint:0.06666666666612855,collidable:true,pointOn:{"x":750,"y":16800},pointTo:{"x":950,"y":16800},xv:440,yv:0,inView:false,path:[[1500,33600,0.88],[1900,33600,0.88]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:1500,y:33600,w:100,h:100,points:[[750,16800],[950,16800]],speed:220,currentPoint:0.03333333333387145,collidable:true,pointOn:{"x":750,"y":16800},pointTo:{"x":950,"y":16800},xv:220,yv:0,inView:false,path:[[1500,33600,0.44],[1900,33600,0.44]],})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:32700,w:1000,h:100,canJump:true,inView:false,})
// C(1,[],[17],{type:[1,[],[17]],x:100,y:32700,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(1,[],[17],{type:[1,[],[17]],x:100,y:32950,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(1,[],[17],{type:[1,[],[17]],x:400,y:33200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:3000,})
// C(2,[],[0],{type:[2,[],[0]],points:[[400,33400],[600,33400],[600,33500]],most:{"left":200,"right":300,"top":16700,"bottom":16750},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[13],{type:[1,[],[13]],x:2100,y:33200,w:1900,h:200,force:7500,dir:{"x":7500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.75,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:33400,w:1800,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:33500,w:1700,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3800,y:33900,w:200,h:400,canJump:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3600,y:33700,w:100,h:100,points:[[1800,16850],[1800,16975],[1800,17100],[1800,16975]],speed:450,currentPoint:3.2,collidable:true,pointOn:{"x":1800,"y":16975},pointTo:{"x":1800,"y":16850},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[3600,33700,0.9],[3600,33950,0.9],[3600,34200,0.9],[3600,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3500,y:33700,w:100,h:100,points:[[1750,16850],[1750,16975],[1750,17100],[1750,16975]],speed:450,currentPoint:2.2,collidable:true,pointOn:{"x":1750,"y":17100},pointTo:{"x":1750,"y":16975},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[3500,33700,0.9],[3500,33950,0.9],[3500,34200,0.9],[3500,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3400,y:33700,w:100,h:100,points:[[1700,16850],[1700,16975],[1700,17100],[1700,16975]],speed:450,currentPoint:1.2,collidable:true,pointOn:{"x":1700,"y":16975},pointTo:{"x":1700,"y":17100},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[3400,33700,0.9],[3400,33950,0.9],[3400,34200,0.9],[3400,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3700,y:33700,w:100,h:100,points:[[1850,16850],[1850,16975],[1850,17100],[1850,16975]],speed:450,currentPoint:0.2,collidable:true,pointOn:{"x":1850,"y":16850},pointTo:{"x":1850,"y":16975},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[3700,33700,0.9],[3700,33950,0.9],[3700,34200,0.9],[3700,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3300,y:33700,w:100,h:100,points:[[1650,16850],[1650,16975],[1650,17100],[1650,16975]],speed:450,currentPoint:0.2,collidable:true,pointOn:{"x":1650,"y":16850},pointTo:{"x":1650,"y":16975},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[3300,33700,0.9],[3300,33950,0.9],[3300,34200,0.9],[3300,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3200,y:33700,w:100,h:100,points:[[1600,16850],[1600,16975],[1600,17100],[1600,16975]],speed:450,currentPoint:3.2,collidable:true,pointOn:{"x":1600,"y":16975},pointTo:{"x":1600,"y":16850},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[3200,33700,0.9],[3200,33950,0.9],[3200,34200,0.9],[3200,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3100,y:33700,w:100,h:100,points:[[1550,16850],[1550,16975],[1550,17100],[1550,16975]],speed:450,currentPoint:2.2,collidable:true,pointOn:{"x":1550,"y":17100},pointTo:{"x":1550,"y":16975},xv:2.7554552980815446e-14,yv:-450,inView:false,path:[[3100,33700,0.9],[3100,33950,0.9],[3100,34200,0.9],[3100,33950,0.9]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:3000,y:33700,w:100,h:100,points:[[1500,16850],[1500,16975],[1500,17100],[1500,16975]],speed:450,currentPoint:1.2,collidable:true,pointOn:{"x":1500,"y":16975},pointTo:{"x":1500,"y":17100},xv:2.7554552980815446e-14,yv:450,inView:false,path:[[3000,33700,0.9],[3000,33950,0.9],[3000,34200,0.9],[3000,33950,0.9]],})
// C(1,[],[0],{type:[1,[],[0]],x:2900,y:33800,w:100,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2900,y:34300,w:1100,h:100,canJump:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3000,y:34250,w:800,h:50,canCollide:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2100,33700],[2800,33700],[2100,34300]],most:{"left":1050,"right":1400,"top":16850,"bottom":17150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2900,33800],[2900,34400],[2200,34400]],most:{"left":1100,"right":1450,"top":16900,"bottom":17200},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:34400,w:1800,h:500,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:34300,w:2100,h:600,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:35400,w:1100,h:100,angle:1.5,rotateSpeed:0.0005681818181818182,pivotX:2150,pivotY:35450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:276.1340254296815,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:34900,w:1500,h:1200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2800,y:34900,w:1200,h:1200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:34900,w:100,h:400,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2750,y:35300,w:50,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:34900,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:34850,w:150,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:34850,w:400,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1450,y:34950,w:150,h:450,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1550,y:34900,w:150,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1500,y:35500,w:100,h:600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1600,y:35800,w:100,h:300,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1700,y:35900,w:100,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:36000,w:300,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:36000,w:600,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:35500,w:150,h:550,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2550,y:35850,w:150,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2650,y:35750,w:50,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:35950,w:200,h:50,canJump:true,inView:false,})
// C(1,[],[13],{type:[1,[],[13]],x:2100,y:36100,w:100,h:1600,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4,})
// C(1,[],[6],{type:[1,[],[6]],x:1900,y:37700,w:500,h:300,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:36100,w:1900,h:1900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:36100,w:1600,h:1900,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:36100,w:200,h:1600,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2200,y:36100,w:250,h:1600,canJump:true,inView:false,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:35400,w:1100,h:100,angle:46.5,rotateSpeed:0.0005681818181818182,pivotX:2150,pivotY:35450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:276.1340254296815,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:35400,w:1100,h:100,angle:91.5,rotateSpeed:0.0005681818181818182,pivotX:2150,pivotY:35450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:276.1340254296815,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1600,y:35400,w:1100,h:100,angle:136.5,rotateSpeed:0.0005681818181818182,pivotX:2150,pivotY:35450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:276.1340254296815,unSim:23.633333333332633,inView:false,initialRotation:0,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2150,y:35450,r:200,renderType:"circleR",inView:false,})
// C(1,[],[9],{type:[1,[],[9]],x:2500,y:0,w:100,h:100,spawn:{"x":1275,"y":25},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3050,100],[3100,100],[3100,200]],most:{"left":1525,"right":1550,"top":50,"bottom":100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2600,100],[2750,100],[2650,200],[2600,200]],most:{"left":1300,"right":1375,"top":50,"bottom":100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,700],[3000,800],[2950,800],[2950,750]],most:{"left":1475,"right":1500,"top":350,"bottom":400},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2800,500],[2850,500],[2850,550],[2800,600]],most:{"left":1400,"right":1425,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2600,650],[2800,650],[2600,700]],most:{"left":1300,"right":1400,"top":325,"bottom":350},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,700],[2600,700],[2600,900],[2500,950]],most:{"left":1250,"right":1300,"top":350,"bottom":475},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2500,y:650,w:100,h:50,canJump:true,inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:850,w:50,h:250,canJump:true,inView:true,})
// C(0,[],[0],{type:[0,[],[0]],x:2750,y:850,r:50,renderType:"circle",inView:true,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2750,y:1250,r:50,renderType:"circleR",inView:true,})
// C(1,[],[0],{type:[1,[],[0]],x:2700,y:1200,w:100,h:50,canJump:true,inView:true,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,1500],[3000,1500],[3000,1700]],most:{"left":1450,"right":1500,"top":750,"bottom":850},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2900,1500],[3000,1700],[2900,1700]],most:{"left":1450,"right":1500,"top":750,"bottom":850},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3200,1600],[3200,1700],[3000,1700]],most:{"left":1500,"right":1600,"top":800,"bottom":850},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3200,250],[3275,300],[3275,400],[3200,450]],most:{"left":1600,"right":1637.5,"top":125,"bottom":225},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3900,950],[3900,1100],[3800,1100],[3825,1025]],most:{"left":1900,"right":1950,"top":475,"bottom":550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,1650],[3725,1700],[3775,1800],[3600,1800]],most:{"left":1800,"right":1887.5,"top":825,"bottom":900},renderType:"poly",inView:true,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2200,y:2100,r:140,renderType:"circleR",inView:true,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,2000],[1900,2050],[1700,2050]],most:{"left":850,"right":950,"top":1000,"bottom":1025},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1600,1850],[1900,1850],[1700,1900],[1600,1900]],most:{"left":800,"right":950,"top":925,"bottom":950},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,2000],[1700,2100],[1650,2100]],most:{"left":825,"right":850,"top":1000,"bottom":1050},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,2000],[1450,2100],[1400,2100]],most:{"left":700,"right":725,"top":1000,"bottom":1050},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:2000,w:100,h:200,canJump:true,inView:true,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1300,2000],[1300,2400],[700,2400]],most:{"left":350,"right":650,"top":1000,"bottom":1200},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[0,1800],[1300,1800],[700,1900]],most:{"left":0,"right":650,"top":900,"bottom":950},renderType:"poly",inView:true,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:-400,y:1700,w:400,h:650,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2950,y:300,w:50,h:150,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2950,450],[3000,450],[2950,500]],most:{"left":1475,"right":1500,"top":225,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3600,200],[3600,300],[3500,300]],most:{"left":1750,"right":1800,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3500,0],[3900,0],[3900,100],[3500,50]],most:{"left":1750,"right":1950,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3600,200],[3750,250],[3800,400],[3600,400]],most:{"left":1800,"right":1900,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3600,500],[3800,500],[3600,600]],most:{"left":1800,"right":1900,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2350,1800],[2500,1800],[2500,1950]],most:{"left":1175,"right":1250,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,1800],[2450,1950],[2350,1850]],most:{"left":1175,"right":1250,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,1800],[2400,1950],[2350,1900]],most:{"left":1175,"right":1250,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2200,y:2100,r:100,renderType:"circleR",inView:true,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2200,y:2100,r:50,renderType:"circleR",inView:true,})
// C(1,[1],[0,1],{type:[1,[1],[0,1]],x:1030.251153792538,y:1949.895660773533,w:40,h:10,angle:-22.5,rotateSpeed:0,pivotX:1050.251153792538,pivotY:1954.895660773533,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:10.307764064044152,unSim:0,inView:true,initialRotation:0,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,2600],[2350,2600],[2300,2700],[2200,2700]],most:{"left":1100,"right":1175,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2150,2800],[2350,2800],[2300,2900],[2200,2900]],most:{"left":1075,"right":1175,"top":1400,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1450,2800],[1650,2800],[1600,2900],[1520,2900]],most:{"left":725,"right":825,"top":1400,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[390,3100],[490,3100],[490,3190],[480,3200],[400,3200],[390,3190]],most:{"left":195,"right":245,"top":1550,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[120,3200],[200,3200],[210,3210],[210,3300],[110,3300],[110,3210]],most:{"left":55,"right":105,"top":1600,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[240,2990],[275,3000],[275,3100]],most:{"left":120,"right":137.5,"top":1495,"bottom":1550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3900,2050],[3900,2100],[3850,2100]],most:{"left":1925,"right":1950,"top":1025,"bottom":1050},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:-50,y:3000,w:50,h:200,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:2900,w:50,h:200,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[250,3490],[250,3510],[200,3520],[200,3500]],most:{"left":100,"right":125,"top":1745,"bottom":1760},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[300,3600],[700,3600],[700,3800],[0,3800],[0,3700],[150,3640]],most:{"left":0,"right":350,"top":1800,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:440,y:3470,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:330,y:3470,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:380,y:3430,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:680,y:3540,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:80,y:3500,r:10,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:60,y:3570,r:10,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,3500],[1300,3500],[1350,3800],[1200,3800],[1150,3800]],most:{"left":575,"right":675,"top":1750,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,3750],[900,3800],[800,3800]],most:{"left":400,"right":450,"top":1875,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[850,3400],[900,3400],[900,3550]],most:{"left":425,"right":450,"top":1700,"bottom":1775},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,3650],[1800,3800],[1600,3800],[1600,3750]],most:{"left":800,"right":900,"top":1825,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,3400],[1800,3400],[1700,3450]],most:{"left":800,"right":900,"top":1700,"bottom":1725},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,3650],[2100,3700],[2250,3800],[1900,3800]],most:{"left":950,"right":1125,"top":1825,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2600,3800],[2600,3900],[2550,3900]],most:{"left":1275,"right":1300,"top":1900,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2550,3400],[2650,3400],[2650,3500]],most:{"left":1275,"right":1325,"top":1700,"bottom":1750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2050,3400],[2350,3400],[2250,3500],[2100,3500]],most:{"left":1025,"right":1175,"top":1700,"bottom":1750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2450,3500],[2550,3650],[2450,3800],[2350,3650]],most:{"left":1175,"right":1275,"top":1750,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3200,3500],[3200,3800],[3050,3800]],most:{"left":1525,"right":1600,"top":1750,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3200,3650],[3200,3800],[2950,3800]],most:{"left":1475,"right":1600,"top":1825,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:2750,y:3500,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3120,y:3720,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:500,y:2900,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:500,y:2600,r:50,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3300,2600],[3350,2700],[3300,2700]],most:{"left":1650,"right":1675,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3300,2400],[3400,2400],[3300,2450]],most:{"left":1650,"right":1700,"top":1200,"bottom":1225},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3300,2800],[3350,2800],[3300,2850]],most:{"left":1650,"right":1675,"top":1400,"bottom":1425},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:3300,y:2200,r:50,renderType:"circle",inView:true,})
// C(0,[],[0],{type:[0,[],[0]],x:4000,y:2200,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3720,y:2210,r:50,renderType:"circle",inView:true,})
// C(0,[],[0],{type:[0,[],[0]],x:3590,y:2210,r:50,renderType:"circle",inView:true,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3400,2200],[3900,2200],[3650,2250]],most:{"left":1700,"right":1950,"top":1100,"bottom":1125},renderType:"poly",inView:true,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:3450,y:2300,radius:25,radius2:15,renderType:"oval",inView:true,r:30,})
// C(0,[],[0],{type:[0,[],[0]],x:3850,y:2300,radius:25,radius2:15,renderType:"oval",inView:false,r:30,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3700,2500],[3850,2550],[3775,2600],[3700,2590]],most:{"left":1850,"right":1925,"top":1250,"bottom":1300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3940,2400],[4000,2400],[4000,2550]],most:{"left":1970,"right":2000,"top":1200,"bottom":1275},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3880,2400],[4000,2400],[4000,2460]],most:{"left":1940,"right":2000,"top":1200,"bottom":1230},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3700,3300],[3810,3800],[3800,3900],[3700,3900]],most:{"left":1850,"right":1905,"top":1650,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[4000,3300],[4000,3900],[3900,3900],[3890,3800]],most:{"left":1945,"right":2000,"top":1650,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[4000,3100],[4000,3900],[3950,3900]],most:{"left":1975,"right":2000,"top":1550,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3700,3100],[3750,3900],[3700,3900]],most:{"left":1850,"right":1875,"top":1550,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:3800,y:4100,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3800,y:4400,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3500,y:4400,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3500,y:4100,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3550,y:4050,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3750,y:4050,r:50,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,3100],[2700,3300],[700,3300]],most:{"left":350,"right":1350,"top":1550,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,3200],[2700,3300],[700,3300]],most:{"left":350,"right":1350,"top":1600,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,3100],[2700,3300],[700,3300]],most:{"left":350,"right":1350,"top":1550,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,3200],[2700,3300],[1300,3300]],most:{"left":650,"right":1350,"top":1600,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:150,w:50,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:250,w:150,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:0,y:350,w:250,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:300,y:0,w:50,h:200,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:200,y:0,w:50,h:100,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:150,y:0,w:50,h:50,canCollide:true,inView:false,})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:0,y:350,w:50,h:50,points:[[0,175],[175,0]],speed:50,currentPoint:0.7813887108803906,collidable:true,pointOn:{"x":0,"y":175},pointTo:{"x":175,"y":0},xv:35.35533905932738,yv:-35.35533905932737,inView:false,path:[[0,350,0.1],[350,0,0.1]],})
// C(1,[0],[0,1],{type:[1,[0],[0,1]],x:350,y:0,w:50,h:50,points:[[175,0],[0,175]],speed:50,currentPoint:0.7813887108803906,collidable:true,pointOn:{"x":175,"y":0},pointTo:{"x":0,"y":175},xv:-35.35533905932737,yv:35.35533905932738,inView:false,path:[[350,0,0.1],[0,350,0.1]],})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3550,250],[3500,450],[3450,400],[3475,300]],most:{"left":1725,"right":1775,"top":125,"bottom":225},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3500,800],[3500,1150],[3425,1100],[3425,1000]],most:{"left":1712.5,"right":1750,"top":400,"bottom":575},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3200,800],[3250,1000],[3250,1100],[3200,1150]],most:{"left":1600,"right":1625,"top":400,"bottom":575},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,800],[3637.5,1000],[3637.5,1100],[3600,1125]],most:{"left":1800,"right":1818.75,"top":400,"bottom":562.5},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3050,1200],[3100,1200],[3100,1250]],most:{"left":1525,"right":1550,"top":600,"bottom":625},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2800,1200],[2850,1200],[2800,1250]],most:{"left":1400,"right":1425,"top":600,"bottom":625},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2800,1400],[2900,1500],[2800,1500]],most:{"left":1400,"right":1450,"top":700,"bottom":750},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2550,350],[2750,350],[2750,600],[2550,650]],most:{"left":1275,"right":1375,"top":175,"bottom":325},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,3700],[1050,3800],[1000,3800]],most:{"left":500,"right":525,"top":1850,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:900,y:3700,w:100,h:100,canCollide:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,3500],[3200,3500],[3200,3600]],most:{"left":1550,"right":1600,"top":1750,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3000,4200],[3100,4200],[3000,4250]],most:{"left":1500,"right":1550,"top":2100,"bottom":2125},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,4000],[2750,4000],[2700,4050]],most:{"left":1350,"right":1375,"top":2000,"bottom":2025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2600,4000],[2700,4000],[2700,4050],[2600,4100]],most:{"left":1300,"right":1350,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2450,y:4300,r:25,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,4875],[2400,4950],[2250,4950]],most:{"left":1125,"right":1200,"top":2437.5,"bottom":2475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,4825],[2325,4950],[2250,4950]],most:{"left":1125,"right":1162.5,"top":2412.5,"bottom":2475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,4900],[2500,4950],[2350,4950]],most:{"left":1175,"right":1250,"top":2450,"bottom":2475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2200,4800],[2250,4825],[2200,4825]],most:{"left":1100,"right":1125,"top":2400,"bottom":2412.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1850,4250],[2200,4250],[2200,4325]],most:{"left":925,"right":1100,"top":2125,"bottom":2162.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,4250],[1900,4250],[1750,4475]],most:{"left":875,"right":950,"top":2125,"bottom":2237.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,4250],[1825,4250],[1750,4750]],most:{"left":875,"right":912.5,"top":2125,"bottom":2375},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1750,4700],[1900,4800],[1750,4800]],most:{"left":875,"right":950,"top":2350,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,4300],[1300,4500],[1250,4500],[1240,4450]],most:{"left":620,"right":650,"top":2150,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,4300],[860,4450],[850,4500],[800,4500]],most:{"left":400,"right":430,"top":2150,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,4000],[1100,4000],[1150,4175],[1150,4225],[1100,4340],[1050,4380],[1000,4340],[950,4225],[950,4175]],most:{"left":475,"right":575,"top":2000,"bottom":2190},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1650,4000],[1700,4000],[1700,4050]],most:{"left":825,"right":850,"top":2000,"bottom":2025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[700,4200],[800,4250],[700,4250]],most:{"left":350,"right":400,"top":2100,"bottom":2125},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:400,y:4200,w:300,h:100,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,4675],[50,4700],[50,4800],[0,4825]],most:{"left":0,"right":25,"top":2337.5,"bottom":2412.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:5200,w:200,h:100,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:500,y:4300,w:200,h:950,canJump:true,inView:false,})
// C(1,[],[16],{type:[1,[],[16]],x:600,y:4300,w:100,h:900,snapDistance:5,snapWait:0.5,snapX:true,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:0.5,snapDistanceY:5,snapDistanceX:5,toSnapX:undefined,toSnapY:undefined,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:-18.75,y:5950,radius:28.125,radius2:62.5,canCollide:true,renderType:"oval",inView:false,r:56.25,})
// C(1,[],[0],{type:[1,[],[0]],x:-125,y:5800,w:125,h:1500,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[325,6000],[400,6000],[400,6075],[350,6050]],most:{"left":162.5,"right":200,"top":3000,"bottom":3037.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,6475],[25,6500],[25,6600],[0,6625]],most:{"left":0,"right":12.5,"top":3237.5,"bottom":3312.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[400,7050],[400,7300],[375,7200],[375,7100]],most:{"left":187.5,"right":200,"top":3525,"bottom":3650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[600,6800],[850,6800],[800,7000],[600,7100]],most:{"left":300,"right":425,"top":3400,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1200,7200],[1200,7500],[1050,7500],[1100,7300]],most:{"left":525,"right":600,"top":3600,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:550,y:7300,r:50,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,6700],[1375,7000],[1300,7000]],most:{"left":650,"right":700,"top":3350,"bottom":3500},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:1200,y:6750,r:50,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,6800],[1350,7000],[1200,7000]],most:{"left":600,"right":700,"top":3400,"bottom":3500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[750,6650],[850,6650],[900,6700],[700,6700]],most:{"left":350,"right":450,"top":3325,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:950,y:5750,r:100,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:950,y:5750,r:50,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,6000],[1400,6000],[1400,6100],[1250,6100]],most:{"left":625,"right":700,"top":3000,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1500,5750],[1600,5750],[1500,5800]],most:{"left":750,"right":800,"top":2875,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1850,y:6400,w:50,h:100,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1500,6200],[1650,6200],[1600,6400],[1500,6400]],most:{"left":750,"right":825,"top":3100,"bottom":3200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1850,6200],[1850,6500],[1700,6500],[1750,6300]],most:{"left":850,"right":925,"top":3100,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,6950],[1600,7200],[1550,7200]],most:{"left":775,"right":800,"top":3475,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1500,7350],[1500,7600],[1450,7600]],most:{"left":725,"right":750,"top":3675,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:1475,y:6375,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1600,y:7200,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1500,y:7600,r:50,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1375,y:6800,w:25,h:200,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1300,y:7175,r:50,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1200,7550],[1300,7550],[1250,7600],[1200,7600]],most:{"left":600,"right":650,"top":3775,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[550,7700],[600,7700],[700,7800],[500,7800]],most:{"left":250,"right":350,"top":3850,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[250,7600],[450,7600],[300,7700]],most:{"left":125,"right":225,"top":3800,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[150,7750],[200,7800],[100,7800]],most:{"left":50,"right":100,"top":3875,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[200,7900],[450,7900],[350,8000],[200,7950]],most:{"left":100,"right":225,"top":3950,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,7900],[1200,7900],[1100,8050],[850,7950]],most:{"left":400,"right":600,"top":3950,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[650,8050],[750,8250],[400,8250],[400,8200],[500,8100]],most:{"left":200,"right":375,"top":4025,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,8300],[1100,8350],[800,8350]],most:{"left":400,"right":550,"top":4150,"bottom":4175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[750,8250],[800,8300],[800,8350],[750,8350]],most:{"left":375,"right":400,"top":4125,"bottom":4175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1200,8200],[1200,8300],[1100,8300]],most:{"left":550,"right":600,"top":4100,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,8050],[1300,8200],[1250,8200],[1250,8150]],most:{"left":625,"right":650,"top":4025,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,8000],[1400,8050],[1300,8050]],most:{"left":650,"right":700,"top":4000,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,7900],[1150,7900],[1100,7950],[900,8050]],most:{"left":400,"right":575,"top":3950,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[630,8120],[700,8250],[450,8250],[450,8200],[500,8150]],most:{"left":225,"right":350,"top":4060,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1800,7200],[1900,7200],[1900,7300]],most:{"left":900,"right":950,"top":3600,"bottom":3650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1650,7200],[1700,7200],[1650,7300]],most:{"left":825,"right":850,"top":3600,"bottom":3650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,6900],[2050,6900],[2050,6950]],most:{"left":1000,"right":1025,"top":3450,"bottom":3475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,7050],[2250,7100],[2200,7100]],most:{"left":1100,"right":1125,"top":3525,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,6650],[2250,6650],[2250,6700]],most:{"left":1100,"right":1125,"top":3325,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2150,6550],[2300,6550],[2300,6700]],most:{"left":1075,"right":1150,"top":3275,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,7000],[2300,7150],[2200,7150]],most:{"left":1100,"right":1150,"top":3500,"bottom":3575},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,6700],[1900,6900],[1700,6800]],most:{"left":850,"right":950,"top":3350,"bottom":3450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1700,6600],[1900,6600],[1900,6650],[1700,6750]],most:{"left":850,"right":950,"top":3300,"bottom":3375},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[11],{type:[0,[],[11]],x:1750,y:7100,r:20,renderType:"circleR",radius:10,inView:false,})
// C(2,[],[11],{type:[2,[],[11]],points:[[2100,5400],[2140,5400],[2100,5600]],most:{"left":1050,"right":1070,"top":2700,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2250,6100],[2400,6100],[2400,6400]],most:{"left":1125,"right":1200,"top":3050,"bottom":3200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2400,6100],[2400,6500],[2250,6500]],most:{"left":1125,"right":1200,"top":3050,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2400,6250],[2400,6500],[2250,6500]],most:{"left":1125,"right":1200,"top":3125,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,6100],[2400,6100],[2400,6350]],most:{"left":1150,"right":1200,"top":3050,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,6400],[1950,6400],[1900,6500]],most:{"left":950,"right":975,"top":3200,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1800,y:5525,w:50,h:75,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2600,5550],[2600,5600],[2550,5600]],most:{"left":1275,"right":1300,"top":2775,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:2400,y:5350,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2600,y:5350,r:50,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2300,7600],[2300,7700],[2200,7700]],most:{"left":1100,"right":1150,"top":3800,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2000,7300],[2100,7300],[2000,7400]],most:{"left":1000,"right":1050,"top":3650,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2000,7500],[2100,7600],[2000,7600]],most:{"left":1000,"right":1050,"top":3750,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2200,7300],[2300,7300],[2300,7400]],most:{"left":1100,"right":1150,"top":3650,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2150,y:7450,r:50,renderType:"circleR",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,7050],[2750,7050],[2500,7100]],most:{"left":1250,"right":1375,"top":3525,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2850,7050],[3100,7050],[3100,7150]],most:{"left":1425,"right":1550,"top":3525,"bottom":3575},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,6300],[2750,6350],[2500,6350]],most:{"left":1250,"right":1375,"top":3150,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,6300],[3100,6350],[2850,6350]],most:{"left":1425,"right":1550,"top":3150,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3300,6000],[3300,6100],[3200,6100]],most:{"left":1600,"right":1650,"top":3000,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2300,5800],[2400,6000],[2300,6000]],most:{"left":1150,"right":1200,"top":2900,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,7050],[3100,7200],[2950,7200]],most:{"left":1475,"right":1550,"top":3525,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,7150],[3100,7200],[2850,7200]],most:{"left":1425,"right":1550,"top":3575,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2650,7300],[2700,7300],[2700,7400]],most:{"left":1325,"right":1350,"top":3650,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,7550],[2700,7600],[2600,7600]],most:{"left":1300,"right":1350,"top":3775,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2400,7300],[2500,7300],[2400,7350]],most:{"left":1200,"right":1250,"top":3650,"bottom":3675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2400,7300],[2450,7300],[2400,7400]],most:{"left":1200,"right":1225,"top":3650,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2600,7300],[2700,7300],[2700,7350]],most:{"left":1300,"right":1350,"top":3650,"bottom":3675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,7500],[2700,7600],[2650,7600]],most:{"left":1325,"right":1350,"top":3750,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3900,7150],[3100,7200],[2600,7200]],most:{"left":1300,"right":1950,"top":3575,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,4800],[3150,4800],[3150,4850],[2800,5000],[2700,5000]],most:{"left":1350,"right":1575,"top":2400,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3450,y:4850,r:50,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3500,5450],[3500,5600],[3300,5600],[3300,5550]],most:{"left":1650,"right":1750,"top":2725,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,5400],[3100,5400],[3050,5900],[3000,5950],[2950,5900]],most:{"left":1450,"right":1550,"top":2700,"bottom":2975},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,5400],[2750,5400],[2700,5450]],most:{"left":1350,"right":1375,"top":2700,"bottom":2725},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,6200],[3100,6350],[3050,6350]],most:{"left":1525,"right":1550,"top":3100,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,6100],[2550,6350],[2500,6350]],most:{"left":1250,"right":1275,"top":3050,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:2700,y:6150,r:50,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,7900],[2300,7900],[2275,8000],[2225,8000]],most:{"left":1100,"right":1150,"top":3950,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,7800],[2700,8100],[2500,8100],[2575,7825]],most:{"left":1250,"right":1350,"top":3900,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,7700],[2400,7700],[2375,7750],[2300,7800]],most:{"left":1150,"right":1200,"top":3850,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,7800],[2850,7850],[2850,7950],[2800,8000],[2700,8100]],most:{"left":1350,"right":1425,"top":3900,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,7750],[3600,8050],[3400,7950],[3450,7850]],most:{"left":1700,"right":1800,"top":3875,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,8050],[3600,8350],[3450,8250],[3450,8150]],most:{"left":1725,"right":1800,"top":4025,"bottom":4175},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2800,8000],[2850,8250],[2800,8300],[2700,8300],[2700,8100]],most:{"left":1350,"right":1425,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3500,8700],[3600,8700],[3600,8900],[3400,8900],[3400,8800]],most:{"left":1700,"right":1800,"top":4350,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,8300],[2800,8525],[2800,8800],[2700,8625]],most:{"left":1350,"right":1400,"top":4150,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3600,8350],[3600,8900],[3500,8500]],most:{"left":1750,"right":1800,"top":4175,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3100,8900],[3100,9000],[3000,9000]],most:{"left":1500,"right":1550,"top":4450,"bottom":4500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3200,8800],[3200,8900],[3100,8900]],most:{"left":1550,"right":1600,"top":4400,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3500,8800],[3600,8900],[3200,8900]],most:{"left":1600,"right":1800,"top":4400,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,8800],[2800,8800],[2700,8900]],most:{"left":1350,"right":1400,"top":4400,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,9000],[3000,9300],[2800,9300]],most:{"left":1400,"right":1500,"top":4500,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,9100],[3000,9300],[2700,9300]],most:{"left":1350,"right":1500,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,9200],[3000,9300],[2600,9300]],most:{"left":1300,"right":1500,"top":4600,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:9150,w:100,h:250,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,9100],[2500,9150],[2400,9150]],most:{"left":1200,"right":1250,"top":4550,"bottom":4575},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2400,8950],[2500,8950],[2500,9000]],most:{"left":1200,"right":1250,"top":4475,"bottom":4500},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2400,y:8900,w:100,h:50,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2400,9200],[2400,9400],[2250,9400]],most:{"left":1125,"right":1200,"top":4600,"bottom":4700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2400,9350],[2400,9400],[2150,9400]],most:{"left":1075,"right":1200,"top":4675,"bottom":4700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,8900],[2150,8900],[2000,9100]],most:{"left":1000,"right":1075,"top":4450,"bottom":4550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,8900],[2250,8900],[2000,8950]],most:{"left":1000,"right":1125,"top":4450,"bottom":4475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2150,9400],[2150,9500],[2050,9500]],most:{"left":1025,"right":1075,"top":4700,"bottom":4750},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:9350,w:500,h:50,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,9350],[2000,9350],[1900,9400]],most:{"left":950,"right":1000,"top":4675,"bottom":4700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,9400],[1550,9400],[1400,9600]],most:{"left":700,"right":775,"top":4700,"bottom":4800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,10100],[1450,10150],[1400,10200]],most:{"left":700,"right":725,"top":5050,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,10550],[1900,10600],[1850,10600]],most:{"left":925,"right":950,"top":5275,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:9500,w:100,h:450,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,9950],[2000,9950],[2000,10000]],most:{"left":950,"right":1000,"top":4975,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:9525,w:50,h:75,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1950,y:10600,w:50,h:50,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1950,10650],[2000,10650],[1950,10700]],most:{"left":975,"right":1000,"top":5325,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2100,10775],[2100,10800],[2075,10800]],most:{"left":1037.5,"right":1050,"top":5387.5,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:10850,w:50,h:250,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1450,10800],[1450,10850],[1400,10850]],most:{"left":700,"right":725,"top":5400,"bottom":5425},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1250,10700],[1300,10900],[1250,10900]],most:{"left":625,"right":650,"top":5350,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,11950],[1225,12100],[1100,12100]],most:{"left":550,"right":612.5,"top":5975,"bottom":6050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1650,11700],[1700,11700],[1700,11750]],most:{"left":825,"right":850,"top":5850,"bottom":5875},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1575,11850],[1600,11925],[1600,12100],[1550,12100],[1550,11925]],most:{"left":775,"right":800,"top":5925,"bottom":6050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1850,12000],[1900,12000],[1900,12050]],most:{"left":925,"right":950,"top":6000,"bottom":6025},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1775,y:12125,w:25,h:175,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1775,y:12125,r:26,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,13000],[1500,13000],[1100,13100]],most:{"left":550,"right":750,"top":6500,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,13000],[1200,13000],[1100,13300]],most:{"left":550,"right":600,"top":6500,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,13300],[2000,13400],[2000,13500],[1600,13500],[1400,13500],[1400,13325]],most:{"left":700,"right":1000,"top":6650,"bottom":6750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2100,13300],[2100,13500],[1900,13500]],most:{"left":950,"right":1050,"top":6650,"bottom":6750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,12300],[1800,13000],[1700,13000],[1700,12400]],most:{"left":850,"right":900,"top":6150,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:12250,w:2000,h:50,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,12250],[2000,12250],[2000,12300]],most:{"left":950,"right":1000,"top":6125,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,12450],[1800,12900],[1700,12800],[1700,12550]],most:{"left":850,"right":900,"top":6225,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1700,12550],[1800,12650],[1800,12700],[1700,12800]],most:{"left":850,"right":900,"top":6275,"bottom":6400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,12600],[2100,12750],[2100,12800],[2000,12850]],most:{"left":1000,"right":1050,"top":6300,"bottom":6425},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2100,12850],[2100,12950],[2000,13150],[2000,12900]],most:{"left":1000,"right":1050,"top":6425,"bottom":6575},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2100,13050],[2100,13250],[2000,13300],[2000,13250]],most:{"left":1000,"right":1050,"top":6525,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:13500,w:2700,h:100,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1300,13500],[1300,13600],[1200,13600]],most:{"left":600,"right":650,"top":6750,"bottom":6800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,15400],[1000,15725],[900,15675],[900,15450]],most:{"left":450,"right":500,"top":7700,"bottom":7862.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,15150],[1000,15200],[1000,15300],[900,15350]],most:{"left":450,"right":500,"top":7575,"bottom":7675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,14650],[1000,15100],[900,15050],[900,14700]],most:{"left":450,"right":500,"top":7325,"bottom":7550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,14400],[1000,14450],[1000,14550],[900,14600]],most:{"left":450,"right":500,"top":7200,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,13900],[1000,13900],[1000,14350],[900,14300]],most:{"left":450,"right":500,"top":6950,"bottom":7175},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1175,y:15575,w:25,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,16050],[800,16100],[700,16100]],most:{"left":350,"right":400,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,14700],[1000,14900],[900,15050]],most:{"left":450,"right":500,"top":7350,"bottom":7525},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,15450],[1000,15600],[900,15675]],most:{"left":450,"right":500,"top":7725,"bottom":7837.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,13900],[1000,14100],[900,14300]],most:{"left":450,"right":500,"top":6950,"bottom":7150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,14450],[1000,14500],[900,14550]],most:{"left":450,"right":500,"top":7225,"bottom":7275},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,15200],[1000,15250],[900,15300]],most:{"left":450,"right":500,"top":7600,"bottom":7650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,14850],[1000,14900],[900,14950]],most:{"left":450,"right":500,"top":7425,"bottom":7475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,14050],[1000,14100],[900,14150]],most:{"left":450,"right":500,"top":7025,"bottom":7075},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[900,15525],[1000,15600],[900,15625]],most:{"left":450,"right":500,"top":7762.5,"bottom":7812.5},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1550,y:1800,r:100,renderType:"circleR",inView:true,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,1600],[1700,1600],[1550,1750]],most:{"left":700,"right":850,"top":800,"bottom":875},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1650,1750],[1700,1900],[1600,1900]],most:{"left":800,"right":850,"top":875,"bottom":950},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1450,1750],[1500,1900],[1400,1900]],most:{"left":700,"right":750,"top":875,"bottom":950},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1400,6700],[1400,6800],[1375,6800]],most:{"left":687.5,"right":700,"top":3350,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2050,y:6750,w:50,h:200,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,16675],[1950,16675],[1950,16700]],most:{"left":850,"right":975,"top":8337.5,"bottom":8350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1975,17025],[1975,17275],[1900,17275]],most:{"left":950,"right":987.5,"top":8512.5,"bottom":8637.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1900,y:17350,w:75,h:250,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1950,16800],[1975,16800],[1975,17025]],most:{"left":975,"right":987.5,"top":8400,"bottom":8512.5},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1950,y:16675,w:25,h:25,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,17275],[1900,17350],[1700,17350]],most:{"left":850,"right":950,"top":8637.5,"bottom":8675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1975,17275],[1975,17350],[1900,17350]],most:{"left":950,"right":987.5,"top":8637.5,"bottom":8675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1700,17350],[1900,17350],[1900,17500],[1400,17500],[1400,17400]],most:{"left":700,"right":950,"top":8675,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:1000,y:17000,w:100,h:550,canJump:true,inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1000,17550],[1100,17550],[1000,17600]],most:{"left":500,"right":550,"top":8775,"bottom":8800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,17000],[1500,17000],[1500,17200],[1200,17200]],most:{"left":550,"right":750,"top":8500,"bottom":8600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,17300],[1200,17500],[1100,17500]],most:{"left":550,"right":600,"top":8650,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,17800],[1400,17800],[1400,17900],[1200,17900]],most:{"left":600,"right":700,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,17700],[1400,17800],[1300,17800]],most:{"left":650,"right":700,"top":8850,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[500,18100],[950,18100],[990,18150],[950,18200],[500,18200]],most:{"left":250,"right":495,"top":9050,"bottom":9100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,18200],[900,18200],[875,18275],[800,18300]],most:{"left":400,"right":450,"top":9100,"bottom":9150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1050,18400],[1050,18500],[1000,18500]],most:{"left":500,"right":525,"top":9200,"bottom":9250},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:19400,w:100,h:25,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:19475,w:100,h:25,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,19640],[2600,19800],[2500,19800]],most:{"left":1250,"right":1300,"top":9820,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,19950],[2600,19950],[2500,20000]],most:{"left":1250,"right":1300,"top":9975,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2400,20000],[2500,20000],[2400,20050]],most:{"left":1200,"right":1250,"top":10000,"bottom":10025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,20250],[2700,20300],[2600,20300]],most:{"left":1300,"right":1350,"top":10125,"bottom":10150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,9100],[2600,9125],[2500,9125]],most:{"left":1250,"right":1300,"top":4550,"bottom":4562.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1310,17600],[1400,17600],[1400,17700],[1300,17700],[1300,17610]],most:{"left":650,"right":700,"top":8800,"bottom":8850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1125,21275],[1600,21275],[1600,21325],[1175,21325]],most:{"left":562.5,"right":800,"top":10637.5,"bottom":10662.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[800,21500],[1400,21500],[1400,21600],[700,21600]],most:{"left":350,"right":700,"top":10750,"bottom":10800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,21500],[1400,21600],[1300,21600]],most:{"left":650,"right":700,"top":10750,"bottom":10800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[700,21100],[800,21100],[700,21200]],most:{"left":350,"right":400,"top":10550,"bottom":10600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1600,21400],[1700,21400],[1700,21625],[1600,21575]],most:{"left":800,"right":850,"top":10700,"bottom":10812.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,21800],[1600,21800],[1600,21900],[1550,21950],[1450,21950],[1400,21900]],most:{"left":700,"right":800,"top":10900,"bottom":10975},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:1400,y:22300,r:76,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,21900],[1875,21900],[1750,22000]],most:{"left":875,"right":937.5,"top":10950,"bottom":11000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2050,21900],[2500,21900],[2325,22050]],most:{"left":1025,"right":1250,"top":10950,"bottom":11025},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:2525,y:21875,r:76,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,23200],[2775,23200],[2800,23350],[2650,23350]],most:{"left":1325,"right":1400,"top":11600,"bottom":11675},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2650,23450],[2800,23450],[2775,23600],[2700,23600]],most:{"left":1325,"right":1400,"top":11725,"bottom":11800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,23350],[2900,23350],[2950,23400],[2900,23450],[2500,23450]],most:{"left":1250,"right":1475,"top":11675,"bottom":11725},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3100,23525],[3100,23700],[2900,23700]],most:{"left":1450,"right":1550,"top":11762.5,"bottom":11850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,23100],[3100,23100],[3100,23275]],most:{"left":1450,"right":1550,"top":11550,"bottom":11637.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2650,23700],[2650,23800],[2600,23800]],most:{"left":1300,"right":1325,"top":11850,"bottom":11900},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2300,y:23450,w:150,h:250,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2450,y:23650,r:50,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2150,24150],[2250,24150],[2275,24300],[2125,24300]],most:{"left":1062.5,"right":1137.5,"top":12075,"bottom":12150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2125,23700],[2275,23700],[2250,23850],[2150,23850]],most:{"left":1062.5,"right":1137.5,"top":11850,"bottom":11925},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,24150],[1850,24150],[1875,24300],[1725,24300]],most:{"left":862.5,"right":937.5,"top":12075,"bottom":12150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1725,23700],[1875,23700],[1850,23850],[1750,23850]],most:{"left":862.5,"right":937.5,"top":11850,"bottom":11925},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2050,23700],[2350,23700],[2250,23750],[2150,23750]],most:{"left":1025,"right":1175,"top":11850,"bottom":11875},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1650,23700],[1950,23700],[1850,23750],[1750,23750]],most:{"left":825,"right":975,"top":11850,"bottom":11875},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2150,24250],[2250,24250],[2350,24300],[2050,24300]],most:{"left":1025,"right":1175,"top":12125,"bottom":12150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,24250],[1850,24250],[1950,24300],[1650,24300]],most:{"left":825,"right":975,"top":12125,"bottom":12150},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1500,24300],[1500,24500],[1450,24400]],most:{"left":725,"right":750,"top":12150,"bottom":12250},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:23850,r:36,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2000,y:24150,r:36,renderType:"circleR",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,25150],[1675,25400],[1300,25400]],most:{"left":650,"right":837.5,"top":12575,"bottom":12700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1525,24500],[1800,24500],[1800,24700]],most:{"left":762.5,"right":900,"top":12250,"bottom":12350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,25225],[1950,25400],[1900,25400]],most:{"left":950,"right":975,"top":12612.5,"bottom":12700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2100,25100],[2400,25100],[2400,25300],[2225,25250]],most:{"left":1050,"right":1200,"top":12550,"bottom":12650},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2500,25400],[2600,25450],[2500,25450]],most:{"left":1250,"right":1300,"top":12700,"bottom":12725},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2700,25300],[2800,25300],[2800,25400]],most:{"left":1350,"right":1400,"top":12650,"bottom":12700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,26075],[2290,26110],[2325,26200],[2200,26200]],most:{"left":1100,"right":1162.5,"top":13037.5,"bottom":13100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,25750],[2050,25800],[1950,25800]],most:{"left":975,"right":1025,"top":12875,"bottom":12900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,25600],[1200,25600],[1000,25700]],most:{"left":500,"right":600,"top":12800,"bottom":12850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1750,26050],[1850,26100],[1700,26100]],most:{"left":850,"right":925,"top":13025,"bottom":13050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,25800],[2200,26200],[2100,26200],[2100,25900]],most:{"left":1050,"right":1100,"top":12900,"bottom":13100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,26300],[2500,26700],[2400,26700]],most:{"left":1200,"right":1250,"top":13150,"bottom":13350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,27000],[2200,27200],[2000,27200]],most:{"left":1000,"right":1100,"top":13500,"bottom":13600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,27100],[2200,27200],[2000,27200]],most:{"left":1000,"right":1100,"top":13550,"bottom":13600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,27050],[2150,27200],[2000,27200]],most:{"left":1000,"right":1075,"top":13525,"bottom":13600},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,26600],[2500,26700],[2300,26700]],most:{"left":1150,"right":1250,"top":13300,"bottom":13350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2000,26900],[2000,26950],[1800,26950]],most:{"left":900,"right":1000,"top":13450,"bottom":13475},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1600,26750],[2000,26750],[1600,26850]],most:{"left":800,"right":1000,"top":13375,"bottom":13425},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1600,26750],[1700,26750],[1600,27100]],most:{"left":800,"right":850,"top":13375,"bottom":13550},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,27550],[1550,27600],[1550,27700],[1300,27750]],most:{"left":650,"right":775,"top":13775,"bottom":13875},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,27500],[1800,27800],[1750,27700],[1750,27600]],most:{"left":875,"right":900,"top":13750,"bottom":13900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1300,28400],[1350,28500],[1350,28600],[1300,28650]],most:{"left":650,"right":675,"top":14200,"bottom":14325},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,28400],[1800,28650],[1550,28600],[1550,28500]],most:{"left":775,"right":900,"top":14200,"bottom":14325},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1800,28400],[1800,28700],[1700,28700],[1700,28625]],most:{"left":850,"right":900,"top":14200,"bottom":14350},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2550,y:23050,w:50,h:50,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2550,y:23050,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2650,y:25550,r:50,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2100,y:26200,w:50,h:50,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2150,y:26250,r:50,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2250,y:26700,w:250,h:50,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2250,y:26750,r:50,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1300,y:29000,r:80,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,28900],[1700,29000],[1650,29000]],most:{"left":825,"right":850,"top":14450,"bottom":14500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1700,28700],[1700,28800],[1675,28750]],most:{"left":837.5,"right":850,"top":14350,"bottom":14400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[300,31600],[350,31650],[250,31750],[200,31700]],most:{"left":100,"right":175,"top":15800,"bottom":15875},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[250,31900],[300,32000],[250,32000]],most:{"left":125,"right":150,"top":15950,"bottom":16000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[550,31650],[600,31650],[600,31800]],most:{"left":275,"right":300,"top":15825,"bottom":15900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[600,31900],[600,32000],[500,32000]],most:{"left":250,"right":300,"top":15950,"bottom":16000},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:-225,y:31150,w:225,h:525,canJump:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,31400],[75,31400],[0,31475]],most:{"left":0,"right":37.5,"top":15700,"bottom":15737.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,31775],[1100,31900],[850,31900],[900,31800]],most:{"left":425,"right":550,"top":15887.5,"bottom":15950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1500,31400],[1600,31700],[1500,32000],[1300,32000],[1300,31600]],most:{"left":650,"right":800,"top":15700,"bottom":16000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1400,31500],[1300,31700],[1200,31600]],most:{"left":600,"right":700,"top":15750,"bottom":15850},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1075,31900],[1100,31900],[1075,32000]],most:{"left":537.5,"right":550,"top":15950,"bottom":16000},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[900,32000],[950,32000],[900,32200]],most:{"left":450,"right":475,"top":16000,"bottom":16100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1900,32000],[1900,32200],[1850,32200]],most:{"left":925,"right":950,"top":16000,"bottom":16100},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1900,31850],[2000,31850],[2000,31900],[1850,31900]],most:{"left":925,"right":1000,"top":15925,"bottom":15950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2200,31400],[2300,31400],[2300,31700],[2200,31600]],most:{"left":1100,"right":1150,"top":15700,"bottom":15850},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2600,y:31550,w:200,h:100,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,31975],[3000,32050],[2925,32050]],most:{"left":1462.5,"right":1500,"top":15987.5,"bottom":16025},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2900,32150],[3000,32150],[2850,32400]],most:{"left":1425,"right":1500,"top":16075,"bottom":16200},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,32150],[3000,32600],[2875,32600],[2850,32400]],most:{"left":1425,"right":1500,"top":16075,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2800,32400],[2850,32400],[2875,32600],[2825,32600]],most:{"left":1400,"right":1437.5,"top":16200,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2000,32000],[2200,32000],[2125,32150],[2000,32100]],most:{"left":1000,"right":1100,"top":16000,"bottom":16075},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2300,32000],[2500,32000],[2500,32100],[2400,32075]],most:{"left":1150,"right":1250,"top":16000,"bottom":16050},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2290,32370],[2350,32600],[2150,32600]],most:{"left":1075,"right":1175,"top":16185,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[1800,32300],[2000,32300],[1800,32600]],most:{"left":900,"right":1000,"top":16150,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:2100,y:32700,r:100,renderType:"circle",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2000,32700],[2000,32800],[1800,32800]],most:{"left":900,"right":1000,"top":16350,"bottom":16400},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,32900],[1000,33000],[900,33000]],most:{"left":450,"right":500,"top":16450,"bottom":16500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[550,32800],[700,33000],[550,33000]],most:{"left":275,"right":350,"top":16400,"bottom":16500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[550,32700],[600,33000],[550,33000]],most:{"left":275,"right":300,"top":16350,"bottom":16500},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[750,32500],[850,32500],[750,32600]],most:{"left":375,"right":425,"top":16250,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[850,32500],[850,32750],[750,32750],[750,32600]],most:{"left":375,"right":425,"top":16250,"bottom":16375},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[200,32500],[400,32500],[400,32600]],most:{"left":100,"right":200,"top":16250,"bottom":16300},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[100,33300],[100,33425],[0,33400]],most:{"left":0,"right":50,"top":16650,"bottom":16712.5},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[400,33700],[400,33800],[200,33800]],most:{"left":100,"right":200,"top":16850,"bottom":16900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[200,33600],[250,33800],[200,33800]],most:{"left":100,"right":125,"top":16800,"bottom":16900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[500,33700],[700,33800],[500,33800]],most:{"left":250,"right":350,"top":16850,"bottom":16900},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,32600],[3000,32600],[3100,32700],[2600,32700]],most:{"left":1250,"right":1550,"top":16300,"bottom":16350},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3000,31400],[3100,31400],[3100,31500]],most:{"left":1500,"right":1550,"top":15700,"bottom":15750},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1000,33400],[1400,33400],[1400,33525]],most:{"left":500,"right":700,"top":16700,"bottom":16762.5},renderType:"poly",inView:false,x:null,y:null,})
// C(0,[],[0],{type:[0,[],[0]],x:1700,y:33200,r:50,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2500,33300],[2600,33300],[2625,33400],[2400,33400]],most:{"left":1200,"right":1312.5,"top":16650,"bottom":16700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3000,33200],[3250,33200],[3200,33225],[3100,33250]],most:{"left":1500,"right":1625,"top":16600,"bottom":16625},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3625,33350],[3800,33350],[3825,33400],[3600,33400]],most:{"left":1800,"right":1912.5,"top":16675,"bottom":16700},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3950,33650],[4000,33650],[4000,33900],[3925,33900]],most:{"left":1962.5,"right":2000,"top":16825,"bottom":16950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3800,33500],[3875,33500],[3800,33600]],most:{"left":1900,"right":1937.5,"top":16750,"bottom":16800},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[12],{type:[2,[],[12]],points:[[400,300],[400,400],[300,400]],tpx:2550,tpy:50,most:{"left":150,"right":200,"top":150,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:-100,y:-100,w:50,h:600,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:450,y:-100,w:50,h:600,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:-100,y:450,w:600,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:-100,y:-100,w:600,h:50,canCollide:true,inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:-75,y:-75,r:70,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:475,y:-75,r:70,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:475,y:475,r:70,renderType:"circleR",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:-75,y:475,r:70,renderType:"circleR",inView:false,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3775,1800],[3725,1925],[3600,1950]],most:{"left":1800,"right":1887.5,"top":900,"bottom":975},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[2700,1800],[2900,1800],[2700,2000]],most:{"left":1350,"right":1450,"top":900,"bottom":1000},renderType:"poly",inView:true,x:null,y:null,})
// C(2,[],[0],{type:[2,[],[0]],points:[[3600,1750],[3725,1925],[3550,1800]],most:{"left":1775,"right":1862.5,"top":875,"bottom":962.5},renderType:"poly",inView:true,x:null,y:null,})
// C(0,[],[11],{type:[0,[],[11]],x:150,y:1900,r:26,renderType:"circleR",radius:13,inView:false,})
// C(0,[],[11],{type:[0,[],[11]],x:150,y:2250,r:26,renderType:"circleR",radius:13,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[0,3800],[2250,3800],[2350,3900],[700,3900]],most:{"left":0,"right":1175,"top":1900,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[4000,2650],[4000,2700],[3825,2700],[3825,2675]],most:{"left":1912.5,"right":2000,"top":1325,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:600,y:2650,w:50,h:200,canCollide:true,inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[600,2650],[600,2850],[250,2800],[250,2700]],most:{"left":125,"right":300,"top":1325,"bottom":1425},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[1100,5110],[1150,5200],[1050,5200]],most:{"left":525,"right":575,"top":2555,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1750,y:5250,w:400,h:50,canCollide:true,inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2200,y:5050,w:50,h:300,canCollide:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:100,y:3000,w:50,h:50,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1450,y:6300,w:50,h:450,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1350,y:7000,w:50,h:150,canJump:true,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2000,y:6375,w:75,h:25,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2075,y:6375,r:26,renderType:"circle",inView:false,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[3400,7950],[3500,8000],[3500,8125],[3450,8250],[3275,8250],[3200,8150]],most:{"left":1600,"right":1750,"top":3975,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
// C(2,[],[0,1],{type:[2,[],[0,1]],points:[[2850,7950],[3100,7950],[2850,8250],[2800,8000]],most:{"left":1400,"right":1550,"top":3975,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
// C(1,[],[0],{type:[1,[],[0]],x:2600,y:8975,w:75,h:25,canJump:true,inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2675,y:8975,r:26,renderType:"circle",inView:false,})
// C(1,[],[18],{type:[1,[],[18]],x:1500,y:16600,w:500,h:900,size:22,inView:false,sizeChangePermanent:false,sizeMult:0.8979591836734694,})
// C(1,[],[11],{type:[1,[],[11]],x:2600,y:32400,w:50,h:200,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:3.061616997868383e-16,y:3390,w:150,h:60,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:2000,y:3400,w:20,h:400,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:174,y:3510,w:48,h:28,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:304,y:3532,w:28,h:28,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:420,y:3568,w:28,h:30,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:508,y:3480,w:72,h:32,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:636,y:3416,w:50,h:44,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:3025,y:1425,w:50,h:150,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:2750,y:1325,w:100,h:50,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:1200,y:5900,w:200,h:100,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:650,y:6000,w:50,h:200,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:1300,y:7600,w:100,h:100,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:2600,y:5700,w:100,h:100,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:3000,y:5025,w:200,h:50,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:2600,y:31400,w:400,h:100,renderAbove:true,})
// C(1,[],[11],{type:[1,[],[11]],x:700,y:6000,w:50,h:100,renderAbove:true,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1630,y:18730,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1670,y:18730,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1630,y:19170,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1670,y:19170,r:30,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1630,y:18700,w:40,h:500,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1600,y:18730,w:100,h:440,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1330,y:11530,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1770,y:11530,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1330,y:11670,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1770,y:11670,r:30,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1330,y:11500,w:440,h:200,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1300,y:11530,w:500,h:140,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3280,y:2730,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3400,y:2730,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3280,y:2770,r:30,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:3400,y:2770,r:30,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3280,y:2700,w:120,h:100,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:3250,y:2730,w:180,h:40,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1548,y:1748,r:48,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1552,y:1748,r:48,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1548,y:1952,r:48,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1552,y:1952,r:48,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1548,y:1700,w:4,h:300,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1500,y:1748,w:100,h:204,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1886,y:2336,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1964,y:2336,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1886,y:2414,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:1964,y:2414,r:36,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1886,y:2300,w:78,h:150,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:1850,y:2336,w:150,h:78,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2436,y:2336,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2514,y:2336,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2436,y:2414,r:36,renderType:"circle",inView:false,})
// C(0,[],[0,1],{type:[0,[],[0,1]],x:2514,y:2414,r:36,renderType:"circle",inView:false,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2436,y:2300,w:78,h:150,})
// C(1,[],[0,1],{type:[1,[],[0,1]],x:2400,y:2336,w:150,h:78,})
// C(0,[],[0],{type:[0,[],[0]],x:2056,y:6756,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2144,y:6756,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2056,y:6944,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:2144,y:6944,r:6,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:2056,y:6750,w:88,h:200,})
// C(1,[],[0],{type:[1,[],[0]],x:2050,y:6756,w:100,h:188,})
// C(0,[],[0],{type:[0,[],[0]],x:6,y:3006,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:144,y:3006,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:6,y:3094,r:6,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:144,y:3094,r:6,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:6,y:3000,w:138,h:100,})
// C(1,[],[0],{type:[1,[],[0]],x:0,y:3006,w:150,h:88,})
// C(0,[],[0],{type:[0,[],[0]],x:1420,y:6720,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1480,y:6720,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1420,y:6780,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1480,y:6780,r:20,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1420,y:6700,w:60,h:100,})
// C(1,[],[0],{type:[1,[],[0]],x:1400,y:6720,w:100,h:60,})
// C(0,[],[0],{type:[0,[],[0]],x:1320,y:7120,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1380,y:7120,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1320,y:7180,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:1380,y:7180,r:20,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:1320,y:7100,w:60,h:100,})
// C(1,[],[0],{type:[1,[],[0]],x:1300,y:7120,w:100,h:60,})
// C(0,[],[0],{type:[0,[],[0]],x:3220,y:5020,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3280,y:5020,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3220,y:5080,r:20,renderType:"circle",inView:false,})
// C(0,[],[0],{type:[0,[],[0]],x:3280,y:5080,r:20,renderType:"circle",inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:3220,y:5000,w:60,h:100,})
// C(1,[],[0],{type:[1,[],[0]],x:3200,y:5020,w:100,h:60,})