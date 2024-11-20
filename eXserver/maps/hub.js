// C(0,[3],[0],{r:120,y:800,x:450,sf:(e)=>{
//     colors.background=colourRgb(19,6,60); colors.tile=colourRgb(11,4,34);
//     if ((makeNumber(Math.sqrt(Math.pow(((e.sat.r) + (generateTopLeftCoordinates(e)[0])) - (players[selfId].pos.x), 2) + Math.pow(((generateTopLeftCoordinates(e)[1]) + (e.sat.r)) - (players[selfId].pos.y), 2)))) <= (e.sat.r) + 51) {
//       colors.background=colourRgb(20,20,20); colors.tile=colourRgb(0,0,0);
//     }
//   },});
//   C(0,[],[6],{r:120,y:100,x:450,});
//   C(3,[],[20],{fontSize:40,text:'Touch me!',y:800,x:450,hex:colourRgb(100,100,100),});

///               ^^^^^ OLD ^^^^^^

///               ----- CURRENT --
(async()=>{

    if(window.isServer !== true) await import('/maps/_converter.js');
    else require('./_converter.js');
    {
        let counter = 0;
    
        const obs = [
            {
                "x": 1150,
                "y": 2600,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1600,
                "y": 2250,
                "w": 100,
                "h": 100,
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
                "x": 1700,
                "y": 2250,
                "w": 350,
                "h": 150,
                "type": "raxis",
                "rx": true,
                "ry": false,
                "inView": true
            },
            {
                "x": 1700,
                "y": 2250,
                "w": 350,
                "h": 100,
                "type": "grav",
                "force": 5000,
                "dir": {
                    "x": -5000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 1750,
                "y": 2350,
                "r": 25,
                "tpx": 2050,
                "tpy": 2600,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 1900,
                "y": 2250,
                "r": 25,
                "tpx": 2050,
                "tpy": 2600,
                "type": "circle-tp",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 2200,
                "y": 2900,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 2300,
                "y": 2900,
                "radius": 100,
                "type": "circle-hollow-slice",
                "startAngle": -3.141592653589793,
                "endAngle": -1.5707963267948966,
                "startPolygon": {
                    "points": [
                        [
                            2250,
                            2900
                        ],
                        [
                            2200,
                            2900
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            2300,
                            2850
                        ],
                        [
                            2300,
                            2800
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "innerRadius": 50,
                "toRotate": false,
                "rotateSpeed": 0,
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1550,
                "y": 2850,
                "w": 300,
                "h": 200,
                "type": "speed",
                "speedInc": 3,
                "inView": true
            },
            {
                "x": 2050,
                "y": 2250,
                "w": 200,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2050,
                        "y": 2250
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "x": 3375,
                "y": 3325,
                "w": 200,
                "h": 200,
                "type": "raxis",
                "rx": true,
                "ry": true,
                "inView": true
            },
            {
                "x": 1800,
                "y": 2000,
                "w": 350,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2750,
                "y": 1950,
                "w": 100,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2750,
                        "y": 1950
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
                "x": 2250,
                "y": 2750,
                "w": 150,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2250,
                        "y": 2750
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -150,
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2150,
                "y": 2600,
                "w": 100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2150,
                        "y": 2600
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 2750,
                "y": 2600,
                "w": 100,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2500,
                "y": 2750,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2500,
                        "y": 2750
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "points": [
                    [
                        2850,
                        2600
                    ],
                    [
                        2885,
                        2680
                    ],
                    [
                        2850,
                        2750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2850,
                    "right": 2885,
                    "top": 2600,
                    "bottom": 2750
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        2950,
                        2450
                    ],
                    [
                        2950,
                        2600
                    ],
                    [
                        2925,
                        2525
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2925,
                    "right": 2950,
                    "top": 2450,
                    "bottom": 2600
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3000,
                        2700
                    ],
                    [
                        3000,
                        2800
                    ],
                    [
                        2975,
                        2750
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2975,
                    "right": 3000,
                    "top": 2700,
                    "bottom": 2800
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 2950,
                "y": 2450,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3000,
                "y": 2700,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3100,
                "y": 2600,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2850,
                "y": 2900,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2950,
                "y": 2925,
                "w": 100,
                "h": 25,
                "type": "tp",
                "tpx": 2800,
                "tpy": 3050,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "x": 2750,
                "y": 2950,
                "w": 400,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3050,
                "y": 2900,
                "w": 125,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2725,
                "y": 3000,
                "w": 25,
                "h": 100,
                "type": "tp",
                "tpx": 2900,
                "tpy": 2850,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "x": 2500,
                "y": 3000,
                "w": 225,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2500,
                        "y": 3000
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
                            "x": 225,
                            "y": 0
                        },
                        {
                            "x": 225,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 225,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -225,
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
                            "x": 225,
                            "y": 0
                        },
                        {
                            "x": 225,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2500,
                "y": 3100,
                "w": 650,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2500,
                        "y": 3100
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
                            "x": 650,
                            "y": 0
                        },
                        {
                            "x": 650,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 650,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -650,
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
                            "x": 650,
                            "y": 0
                        },
                        {
                            "x": 650,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2650,
                "y": 1950,
                "w": 100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2650,
                        "y": 1950
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 2150,
                "y": 2150,
                "w": 300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2150,
                        "y": 2150
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
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -300,
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
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 300,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2550,
                "y": 2150,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2550,
                        "y": 2150
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
                }
            },
            {
                "x": 2775,
                "y": 2400,
                "w": 50,
                "h": 200,
                "color": "#459668",
                "type": "block",
                "inView": true
            },
            {
                "x": 2400,
                "y": 2775,
                "w": 100,
                "h": 50,
                "color": "#456496",
                "type": "block",
                "inView": true
            },
            {
                "x": 2175,
                "y": 2500,
                "w": 50,
                "h": 100,
                "color": "#8d4596",
                "type": "block",
                "inView": true
            },
            {
                "x": 2450,
                "y": 2175,
                "w": 100,
                "h": 50,
                "color": "#7a7a7a",
                "type": "block",
                "inView": true
            },
            {
                "x": 3150,
                "y": 2950,
                "w": 50,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3350,
                "y": 2800,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3350,
                        "y": 2800
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
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 200
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -200
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
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ]
                }
            },
            {
                "x": 3275,
                "y": 2900,
                "radius": 125,
                "type": "circle-hollow-slice",
                "startAngle": 0,
                "endAngle": 3.141592653589793,
                "startPolygon": {
                    "points": [
                        [
                            3350,
                            2900
                        ],
                        [
                            3400,
                            2900
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            3200,
                            2900
                        ],
                        [
                            3150,
                            2900
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "innerRadius": 75,
                "toRotate": false,
                "rotateSpeed": 0,
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3400,
                "y": 2750,
                "w": 150,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3400,
                        "y": 2750
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -150,
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 3050,
                "y": 2500,
                "w": 150,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3500,
                "y": 2450,
                "w": 50,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3500,
                        "y": 2450
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 3200,
                "y": 2400,
                "w": 400,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3300,
                "y": 2550,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3400,
                "y": 2575,
                "w": 100,
                "h": 50,
                "type": "breakable",
                "maxStrength": 40,
                "currentStrength": 40,
                "time": 0,
                "timer": 0,
                "regenTime": 3,
                "inView": true
            },
            {
                "x": 3325,
                "y": 2450,
                "w": 50,
                "h": 100,
                "type": "breakable",
                "maxStrength": 40,
                "currentStrength": 40,
                "time": 0,
                "timer": 0,
                "regenTime": 3,
                "inView": true
            },
            {
                "x": 3200,
                "y": 3000,
                "w": 250,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3200,
                        "y": 3000
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 400
                        },
                        {
                            "x": 0,
                            "y": 400
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 400
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -400
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 400
                        },
                        {
                            "x": 0,
                            "y": 400
                        }
                    ]
                }
            },
            {
                "x": 3275,
                "y": 2900,
                "w": 150,
                "h": 25,
                "type": "rotate-normal",
                "angle": -91298.99999999753,
                "rotateSpeed": -360,
                "pivotX": 3275,
                "pivotY": 2900,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 76.03453162872775,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 3150,
                "y": 2600,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3150,
                "y": 2750,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3400,
                "y": 2800,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3000,
                "y": 2250,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3200,
                "y": 2400,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3150,
                "y": 2250,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3050,
                "y": 2300,
                "w": 100,
                "h": 50,
                "type": "breakable",
                "maxStrength": 40,
                "currentStrength": 40,
                "time": 0,
                "timer": 0,
                "regenTime": 3,
                "inView": true
            },
            {
                "x": 2850,
                "y": 1800,
                "w": 350,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2850,
                        "y": 1800
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
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 350,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -350,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 350,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 3350,
                "y": 2150,
                "w": 100,
                "h": 100,
                "type": "bounce",
                "effect": 30,
                "inView": true
            },
            {
                "x": 3600,
                "y": 2400,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3150,
                "y": 2100,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 3200,
                "y": 1950,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 3200,
                        "y": 1950
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -450,
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 3600,
                "y": 2000,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3200,
                "y": 2000,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 3600,
                "y": 2000,
                "w": 50,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2650,
                "y": 1050,
                "w": 100,
                "h": 800,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 2650,
                        "y": 1050
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
                            "y": 800
                        },
                        {
                            "x": 0,
                            "y": 800
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 800
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -800
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
                            "y": 800
                        },
                        {
                            "x": 0,
                            "y": 800
                        }
                    ]
                }
            },
            {
                "x": 2750,
                "y": 1500,
                "w": 2250,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 2750,
                        "y": 1500
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
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 2250,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -2250,
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
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 2250,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2850,
                "y": 1750,
                "w": 350,
                "h": 50,
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
                "x": 2850,
                "y": 1650,
                "w": 400,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 2850,
                        "y": 1650
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -400,
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 3250,
                "y": 1650,
                "w": 100,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 3250,
                        "y": 1650
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
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "x": 3400,
                "y": 1600,
                "w": 450,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 3400,
                        "y": 1600
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ],
                    "edges": [
                        {
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 150
                        },
                        {
                            "x": -450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -150
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ]
                }
            },
            {
                "x": 3350,
                "y": 1800,
                "w": 350,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 3200,
                "y": 1750,
                "w": 50,
                "h": 150,
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
                "x": 3200,
                "y": 1900,
                "w": 450,
                "h": 50,
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
                "x": 3650,
                "y": 1900,
                "w": 50,
                "h": 550,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 3600,
                "y": 2450,
                "w": 100,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 3550,
                "y": 2450,
                "w": 50,
                "h": 350,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 3700,
                "y": 1800,
                "w": 100,
                "h": 800,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3700,
                        "y": 1800
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
                            "y": 800
                        },
                        {
                            "x": 0,
                            "y": 800
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 800
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -800
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
                            "y": 800
                        },
                        {
                            "x": 0,
                            "y": 800
                        }
                    ]
                }
            },
            {
                "x": 3600,
                "y": 2500,
                "w": 100,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3600,
                        "y": 2500
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
                "x": 3500,
                "y": 2800,
                "w": 100,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 3450,
                "y": 2800,
                "w": 50,
                "h": 600,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 3500,
                "y": 2850,
                "w": 100,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3500,
                        "y": 2850
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
                            "y": 550
                        },
                        {
                            "x": 0,
                            "y": 550
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 550
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -550
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
                            "y": 550
                        },
                        {
                            "x": 0,
                            "y": 550
                        }
                    ]
                }
            },
            {
                "x": 2850,
                "y": 1600,
                "w": 550,
                "h": 50,
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
                "x": 3350,
                "y": 1650,
                "w": 50,
                "h": 150,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": -15000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 3400,
                "y": 1750,
                "w": 450,
                "h": 50,
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
                "x": 3800,
                "y": 1800,
                "w": 50,
                "h": 850,
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
                "x": 3850,
                "y": 1600,
                "w": 1150,
                "h": 3200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3850,
                        "y": 1600
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 3200
                        },
                        {
                            "x": 0,
                            "y": 3200
                        }
                    ],
                    "edges": [
                        {
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 3200
                        },
                        {
                            "x": -1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -3200
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 3200
                        },
                        {
                            "x": 0,
                            "y": 3200
                        }
                    ]
                }
            },
            {
                "x": 3700,
                "y": 2600,
                "w": 100,
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
                "x": 3700,
                "y": 2650,
                "w": 50,
                "h": 350,
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
                "x": 3600,
                "y": 2950,
                "w": 100,
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
                "x": 3600,
                "y": 3000,
                "w": 50,
                "h": 450,
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
                "x": 3050,
                "y": 3550,
                "w": 400,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 3150,
                "y": 3450,
                "w": 275,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3150,
                        "y": 3450
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
                            "x": 275,
                            "y": 0
                        },
                        {
                            "x": 275,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 275,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -275,
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
                            "x": 275,
                            "y": 0
                        },
                        {
                            "x": 275,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 3500,
                "y": 3450,
                "w": 250,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3500,
                        "y": 3450
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 600
                        },
                        {
                            "x": 0,
                            "y": 600
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 600
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -600
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 600
                        },
                        {
                            "x": 0,
                            "y": 600
                        }
                    ]
                }
            },
            {
                "x": 3450,
                "y": 3450,
                "w": 50,
                "h": 600,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 3150,
                "y": 3400,
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
                "x": 3500,
                "y": 3400,
                "w": 100,
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
                "x": 3750,
                "y": 2650,
                "w": 100,
                "h": 2150,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3750,
                        "y": 2650
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
                            "y": 2150
                        },
                        {
                            "x": 0,
                            "y": 2150
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 2150
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -2150
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
                            "y": 2150
                        },
                        {
                            "x": 0,
                            "y": 2150
                        }
                    ]
                }
            },
            {
                "x": 3650,
                "y": 3000,
                "w": 100,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3650,
                        "y": 3000
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
                "x": 3150,
                "y": 3200,
                "w": 50,
                "h": 200,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 2500,
                "y": 3200,
                "w": 650,
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
                "x": 3050,
                "y": 3250,
                "w": 100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3050,
                        "y": 3250
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 3000,
                "y": 3400,
                "w": 50,
                "h": 200,
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
                "x": 3000,
                "y": 3600,
                "w": 450,
                "h": 1400,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3000,
                        "y": 3600
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 1400
                        },
                        {
                            "x": 0,
                            "y": 1400
                        }
                    ],
                    "edges": [
                        {
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 1400
                        },
                        {
                            "x": -450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -1400
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 1400
                        },
                        {
                            "x": 0,
                            "y": 1400
                        }
                    ]
                }
            },
            {
                "x": 3425,
                "y": 3450,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3425,
                        "y": 3450
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
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 25,
                            "y": 75
                        },
                        {
                            "x": 0,
                            "y": 75
                        }
                    ],
                    "edges": [
                        {
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 75
                        },
                        {
                            "x": -25,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -75
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
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 25,
                            "y": 75
                        },
                        {
                            "x": 0,
                            "y": 75
                        }
                    ]
                }
            },
            {
                "points": [
                    [
                        3425,
                        3525
                    ],
                    [
                        3450,
                        3525
                    ],
                    [
                        3425,
                        3550
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3425,
                    "right": 3450,
                    "top": 3525,
                    "bottom": 3550
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3500,
                        3550
                    ],
                    [
                        3500,
                        3650
                    ],
                    [
                        3450,
                        3600
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3450,
                    "right": 3500,
                    "top": 3550,
                    "bottom": 3650
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3450,
                        3675
                    ],
                    [
                        3500,
                        3725
                    ],
                    [
                        3450,
                        3775
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3450,
                    "right": 3500,
                    "top": 3675,
                    "bottom": 3775
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3500,
                        3800
                    ],
                    [
                        3500,
                        3900
                    ],
                    [
                        3450,
                        3850
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3450,
                    "right": 3500,
                    "top": 3800,
                    "bottom": 3900
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3450,
                        3625
                    ],
                    [
                        3500,
                        3675
                    ],
                    [
                        3500,
                        3700
                    ],
                    [
                        3450,
                        3650
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3450,
                    "right": 3500,
                    "top": 3625,
                    "bottom": 3700
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        3500,
                        3750
                    ],
                    [
                        3500,
                        3775
                    ],
                    [
                        3450,
                        3825
                    ],
                    [
                        3450,
                        3800
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 3450,
                    "right": 3500,
                    "top": 3750,
                    "bottom": 3825
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 2500,
                "y": 3350,
                "w": 550,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 2500,
                "y": 3250,
                "w": 550,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2500,
                        "y": 3250
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
                            "x": 550,
                            "y": 0
                        },
                        {
                            "x": 550,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 550,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -550,
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
                            "x": 550,
                            "y": 0
                        },
                        {
                            "x": 550,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 2550,
                "y": 3400,
                "w": 450,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2550,
                        "y": 3400
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 3450,
                "y": 4050,
                "w": 250,
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
                "x": 3700,
                "y": 4050,
                "w": 50,
                "h": 750,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 3450,
                "y": 4100,
                "w": 250,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 3450,
                        "y": 4100
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 900
                        },
                        {
                            "x": 0,
                            "y": 900
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 900
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -900
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 900
                        },
                        {
                            "x": 0,
                            "y": 900
                        }
                    ]
                }
            },
            {
                "x": 4950,
                "y": 4800,
                "w": 50,
                "h": 200,
                "type": "tp",
                "tpx": 1925,
                "tpy": 1900,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "x": 1950,
                "y": 1550,
                "w": 200,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 1950,
                        "y": 1550
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 450
                        },
                        {
                            "x": 0,
                            "y": 450
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 450
                        },
                        {
                            "x": -200,
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
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
                "x": 1925,
                "y": 1900,
                "w": 125,
                "h": 25,
                "type": "rotate-normal",
                "angle": 168978.0000000069,
                "rotateSpeed": 720,
                "pivotX": 1925,
                "pivotY": 1900,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 63.73774391990981,
                "unSim": 18.916666666666234,
                "inView": false
            },
            {
                "x": 2808.75,
                "y": 2100,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        2750,
                        2100
                    ],
                    [
                        2900,
                        2100
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": false,
                "pointOn": {
                    "x": 2900,
                    "y": 2100
                },
                "pointTo": {
                    "x": 2750,
                    "y": 2100
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true
            },
            {
                "x": 2850,
                "y": 2091.25,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        2850,
                        2000
                    ],
                    [
                        2850,
                        2150
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 2850,
                    "y": 2000
                },
                "pointTo": {
                    "x": 2850,
                    "y": 2150
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": true
            },
            {
                "x": 2250,
                "y": 3050,
                "w": 100,
                "h": 200,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": 6000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 2200,
                "y": 3050,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2100,
                "y": 3050,
                "w": 100,
                "h": 200,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": -6000
                },
                "direction": "up",
                "inView": true
            },
            {
                "x": 2250,
                "y": 3125,
                "w": 10,
                "h": 50,
                "type": "tp",
                "tpx": 2400,
                "tpy": 2950,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "x": 2340,
                "y": 3125,
                "w": 10,
                "h": 50,
                "type": "tp",
                "tpx": 2400,
                "tpy": 2950,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "x": 2350,
                "y": 3050,
                "w": 50,
                "h": 400,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2350,
                        "y": 3050
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 400
                        },
                        {
                            "x": 0,
                            "y": 400
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 400
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -400
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 400
                        },
                        {
                            "x": 0,
                            "y": 400
                        }
                    ]
                }
            },
            {
                "x": 2450,
                "y": 3400,
                "w": 100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2450,
                        "y": 3400
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 300
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -300
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
                            "y": 300
                        },
                        {
                            "x": 0,
                            "y": 300
                        }
                    ]
                }
            },
            {
                "x": 2000,
                "y": 3050,
                "w": 100,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2200,
                "y": 3350,
                "w": 50,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2100,
                "y": 3450,
                "w": 150,
                "h": 550,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1550,
                "y": 2800,
                "w": 600,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1550,
                        "y": 2800
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -600,
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1650,
                "y": 2950,
                "w": 100,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1650,
                        "y": 2950
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
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "x": 1350,
                "y": 3050,
                "w": 100,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3050
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
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 150
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -150
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
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ]
                }
            },
            {
                "x": 1350,
                "y": 3200,
                "w": 400,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3200
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -400,
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 1750,
                "y": 2950,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 2100,
                "y": 2900,
                "radius": 100,
                "type": "circle-hollow-slice",
                "startAngle": -1.5707963267948966,
                "endAngle": 0,
                "startPolygon": {
                    "points": [
                        [
                            2100,
                            2850
                        ],
                        [
                            2100,
                            2800
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            2150,
                            2900
                        ],
                        [
                            2200,
                            2900
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "innerRadius": 50,
                "toRotate": false,
                "rotateSpeed": 0,
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1850,
                "y": 3000,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "points": [
                    [
                        1800,
                        2900
                    ],
                    [
                        1825,
                        2950
                    ],
                    [
                        1725,
                        2950
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1725,
                    "right": 1825,
                    "top": 2900,
                    "bottom": 2950
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1550,
                        2850
                    ],
                    [
                        1725,
                        2850
                    ],
                    [
                        1675,
                        2900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1550,
                    "right": 1725,
                    "top": 2850,
                    "bottom": 2900
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1600,
                        2950
                    ],
                    [
                        1650,
                        2950
                    ],
                    [
                        1650,
                        3000
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1600,
                    "right": 1650,
                    "top": 2950,
                    "bottom": 3000
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1550,
                        3000
                    ],
                    [
                        1600,
                        3050
                    ],
                    [
                        1550,
                        3100
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1550,
                    "right": 1600,
                    "top": 3000,
                    "bottom": 3100
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        1550,
                        2850
                    ],
                    [
                        1575,
                        2850
                    ],
                    [
                        1550,
                        2900
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 1550,
                    "right": 1575,
                    "top": 2850,
                    "bottom": 2900
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1600,
                "y": 3450,
                "w": 150,
                "h": 150,
                "type": "rotate-normal",
                "angle": 11412.374999999789,
                "rotateSpeed": 45,
                "pivotX": 1600,
                "pivotY": 3450,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 106.06601717798213,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 2025,
                "y": 2950,
                "r": 25,
                "type": "circle-lava",
                "renderType": "circleR",
                "radius": 25,
                "inView": true
            },
            {
                "x": 1850,
                "y": 3300,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1850,
                        "y": 3300
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
                }
            },
            {
                "x": 1750,
                "y": 3050,
                "w": 250,
                "h": 250,
                "type": "lava",
                "canCollide": false,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1750,
                        "y": 3050
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "points": [
                    [
                        1925,
                        3025
                    ],
                    [
                        1975,
                        3025
                    ],
                    [
                        1825,
                        3325
                    ],
                    [
                        1775,
                        3325
                    ]
                ],
                "type": "poly-safe",
                "most": {
                    "left": 1775,
                    "right": 1975,
                    "top": 3025,
                    "bottom": 3325
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1950,
                "y": 3300,
                "w": 50,
                "h": 700,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1750,
                "y": 3500,
                "w": 200,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1750,
                        "y": 3500
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 500
                        },
                        {
                            "x": 0,
                            "y": 500
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 500
                        },
                        {
                            "x": -200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -500
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 500
                        },
                        {
                            "x": 0,
                            "y": 500
                        }
                    ]
                }
            },
            {
                "points": [
                    [
                        3200,
                        2625
                    ],
                    [
                        3225,
                        2675
                    ],
                    [
                        3200,
                        2725
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 3200,
                    "right": 3225,
                    "top": 2625,
                    "bottom": 2725
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1350,
                "y": 3350,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3350
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
                }
            },
            {
                "x": 2400,
                "y": 3400,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1350,
                "y": 3600,
                "w": 200,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3600
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -200,
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 1950,
                "y": 2350,
                "w": 100,
                "h": 150,
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
                "x": 1550,
                "y": 2350,
                "w": 400,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1550,
                        "y": 2350
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -400,
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
                            "x": 400,
                            "y": 0
                        },
                        {
                            "x": 400,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1550,
                "y": 2000,
                "w": 50,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1600,
                "y": 2000,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1700,
                "y": 2150,
                "w": 100,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1700,
                "y": 2150,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1900,
                "y": 2400,
                "w": 50,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1900,
                        "y": 2400
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 150
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -150
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 150
                        },
                        {
                            "x": 0,
                            "y": 150
                        }
                    ]
                }
            },
            {
                "x": 1900,
                "y": 2650,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1550,
                "y": 2500,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1550,
                        "y": 2500
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 200
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -200
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ]
                }
            },
            {
                "x": 1641.25,
                "y": 2400,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2400
                    ],
                    [
                        1850,
                        2400
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1600,
                    "y": 2400
                },
                "pointTo": {
                    "x": 1850,
                    "y": 2400
                },
                "xv": 150,
                "yv": 0,
                "inView": true
            },
            {
                "x": 1808.75,
                "y": 2450,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2450
                    ],
                    [
                        1850,
                        2450
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": true,
                "pointOn": {
                    "x": 1850,
                    "y": 2450
                },
                "pointTo": {
                    "x": 1600,
                    "y": 2450
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1650,
                        "y": 2450
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1641.25,
                "y": 2500,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2500
                    ],
                    [
                        1850,
                        2500
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1600,
                    "y": 2500
                },
                "pointTo": {
                    "x": 1850,
                    "y": 2500
                },
                "xv": 150,
                "yv": 0,
                "inView": true
            },
            {
                "x": 1808.75,
                "y": 2550,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2550
                    ],
                    [
                        1850,
                        2550
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": true,
                "pointOn": {
                    "x": 1850,
                    "y": 2550
                },
                "pointTo": {
                    "x": 1600,
                    "y": 2550
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1670,
                        "y": 2550
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1641.25,
                "y": 2600,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2600
                    ],
                    [
                        1850,
                        2600
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1600,
                    "y": 2600
                },
                "pointTo": {
                    "x": 1850,
                    "y": 2600
                },
                "xv": 150,
                "yv": 0,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1803.75,
                        "y": 2600
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1808.75,
                "y": 2650,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2650
                    ],
                    [
                        1850,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": true,
                "pointOn": {
                    "x": 1850,
                    "y": 2650
                },
                "pointTo": {
                    "x": 1600,
                    "y": 2650
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true
            },
            {
                "x": 1600,
                "y": 2441.25,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1600,
                        2400
                    ],
                    [
                        1600,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1600,
                    "y": 2400
                },
                "pointTo": {
                    "x": 1600,
                    "y": 2650
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": true
            },
            {
                "x": 1650,
                "y": 2608.75,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1650,
                        2400
                    ],
                    [
                        1650,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": false,
                "pointOn": {
                    "x": 1650,
                    "y": 2650
                },
                "pointTo": {
                    "x": 1650,
                    "y": 2400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1650,
                        "y": 2480
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1700,
                "y": 2441.25,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1700,
                        2400
                    ],
                    [
                        1700,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1700,
                    "y": 2400
                },
                "pointTo": {
                    "x": 1700,
                    "y": 2650
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1700,
                        "y": 2637.5
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1750,
                "y": 2608.75,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1750,
                        2400
                    ],
                    [
                        1750,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": false,
                "pointOn": {
                    "x": 1750,
                    "y": 2650
                },
                "pointTo": {
                    "x": 1750,
                    "y": 2400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1750,
                        "y": 2525
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1800,
                "y": 2441.25,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1800,
                        2400
                    ],
                    [
                        1800,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "alongWith": false,
                "pointOn": {
                    "x": 1800,
                    "y": 2400
                },
                "pointTo": {
                    "x": 1800,
                    "y": 2650
                },
                "xv": 9.184850993605149e-15,
                "yv": 150,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1800,
                        "y": 2631.25
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1850,
                "y": 2608.75,
                "w": 50,
                "h": 50,
                "type": "move",
                "points": [
                    [
                        1850,
                        2400
                    ],
                    [
                        1850,
                        2650
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "alongWith": false,
                "pointOn": {
                    "x": 1850,
                    "y": 2650
                },
                "pointTo": {
                    "x": 1850,
                    "y": 2400
                },
                "xv": 9.184850993605149e-15,
                "yv": -150,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1850,
                        "y": 2551.25
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1600,
                "y": 2050,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1600,
                "y": 2350,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 2150,
                "y": 2700,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1950,
                "y": 2700,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1150,
                "y": 2350,
                "w": 250,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1300,
                "y": 1550,
                "w": 600,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 1300,
                        "y": 1550
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
                            "y": 450
                        },
                        {
                            "x": 0,
                            "y": 450
                        }
                    ],
                    "edges": [
                        {
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 450
                        },
                        {
                            "x": -600,
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
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
                "x": 650,
                "y": 1550,
                "w": 650,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 2325,
                "w": 275,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1050,
                "y": 2550,
                "w": 100,
                "h": 350,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1050,
                        "y": 2550
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
                            "y": 350
                        },
                        {
                            "x": 0,
                            "y": 350
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 350
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -350
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
                            "y": 350
                        },
                        {
                            "x": 0,
                            "y": 350
                        }
                    ]
                }
            },
            {
                "x": 1300,
                "y": 1850,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 1250,
                "y": 2800,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1250,
                        "y": 2800
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
                }
            },
            {
                "x": 1050,
                "y": 2900,
                "w": 300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1050,
                        "y": 2900
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
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -300,
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
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 300,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 1250,
                "y": 2700,
                "radius": 150,
                "type": "circle-hollow-slice",
                "startAngle": 0,
                "endAngle": 1.5707963267948966,
                "startPolygon": {
                    "points": [
                        [
                            1350,
                            2700
                        ],
                        [
                            1400,
                            2700
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            1250,
                            2800
                        ],
                        [
                            1250,
                            2850
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
                "x": 1450,
                "y": 2600,
                "radius": 150,
                "type": "circle-hollow-slice",
                "startAngle": 0,
                "endAngle": 1.5707963267948966,
                "startPolygon": {
                    "points": [
                        [
                            1550,
                            2600
                        ],
                        [
                            1600,
                            2600
                        ]
                    ],
                    "type": "poly",
                    "props": {}
                },
                "endPolygon": {
                    "points": [
                        [
                            1450,
                            2700
                        ],
                        [
                            1450,
                            2750
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
                "x": 1300,
                "y": 2400,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1450,
                "y": 2600,
                "w": 200,
                "h": 25,
                "type": "rotate-lava",
                "angle": 22824.74999999949,
                "rotateSpeed": 90,
                "pivotX": 1450,
                "pivotY": 2600,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 100.77822185373186,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 1350,
                "y": 2500,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1208.75,
                "y": 2450,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        2450
                    ],
                    [
                        1150,
                        2450
                    ]
                ],
                "speed": 150,
                "currentPoint": 0,
                "collidable": true,
                "pointOn": {
                    "x": 1250,
                    "y": 2450
                },
                "pointTo": {
                    "x": 1150,
                    "y": 2450
                },
                "xv": -150,
                "yv": 1.8369701987210297e-14,
                "inView": true
            },
            {
                "x": 1191.25,
                "y": 2400,
                "w": 50,
                "h": 50,
                "type": "lavamove",
                "points": [
                    [
                        1250,
                        2400
                    ],
                    [
                        1150,
                        2400
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1150,
                    "y": 2400
                },
                "pointTo": {
                    "x": 1250,
                    "y": 2400
                },
                "xv": 150,
                "yv": 0,
                "inView": true
            },
            {
                "x": 1200,
                "y": 2650,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1150,
                "y": 2650,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1300.7741601861667,
                "y": 2750.774160186158,
                "w": 25,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        1200,
                        2650
                    ],
                    [
                        1335,
                        2785
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1335,
                    "y": 2785
                },
                "pointTo": {
                    "x": 1200,
                    "y": 2650
                },
                "xv": -106.06601717798212,
                "yv": -106.06601717798213,
                "inView": true
            },
            {
                "x": 1300.7741601861667,
                "y": 2524.225839813842,
                "w": 25,
                "h": 25,
                "type": "lavamove",
                "points": [
                    [
                        1200,
                        2625
                    ],
                    [
                        1335,
                        2490
                    ]
                ],
                "speed": 150,
                "currentPoint": 1,
                "collidable": true,
                "pointOn": {
                    "x": 1335,
                    "y": 2490
                },
                "pointTo": {
                    "x": 1200,
                    "y": 2625
                },
                "xv": -106.06601717798212,
                "yv": 106.06601717798213,
                "inView": true
            },
            {
                "x": 2050,
                "y": 1350,
                "w": 100,
                "h": 200,
                "type": "coindoor",
                "coins": 3,
                "currentCoins": 2,
                "inView": false
            },
            {
                "x": 2050,
                "y": 1050,
                "w": 100,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2750,
                "y": 1050,
                "w": 2250,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 2750,
                        "y": 1050
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
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 2250,
                            "y": 450
                        },
                        {
                            "x": 0,
                            "y": 450
                        }
                    ],
                    "edges": [
                        {
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 450
                        },
                        {
                            "x": -2250,
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
                            "x": 2250,
                            "y": 0
                        },
                        {
                            "x": 2250,
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
                "x": 3525,
                "y": 2175,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": true
            },
            {
                "x": 1475,
                "y": 3525,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": true,
                "inView": true
            },
            {
                "x": 875,
                "y": 2475,
                "w": 50,
                "h": 50,
                "type": "coin",
                "collected": false,
                "inView": true
            },
            {
                "x": 1125,
                "y": 1950,
                "w": 25,
                "h": 450,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1125,
                        "y": 1950
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
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 25,
                            "y": 450
                        },
                        {
                            "x": 0,
                            "y": 450
                        }
                    ],
                    "edges": [
                        {
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 450
                        },
                        {
                            "x": -25,
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
                            "x": 25,
                            "y": 0
                        },
                        {
                            "x": 25,
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
                "x": 650,
                "y": 1850,
                "w": 100,
                "h": 1300,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 750,
                "y": 2650,
                "w": 300,
                "h": 500,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 750,
                        "y": 2650
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
                            "y": 500
                        },
                        {
                            "x": 0,
                            "y": 500
                        }
                    ],
                    "edges": [
                        {
                            "x": 300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 500
                        },
                        {
                            "x": -300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -500
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
                            "y": 500
                        },
                        {
                            "x": 0,
                            "y": 500
                        }
                    ]
                }
            },
            {
                "x": 0,
                "y": 1250,
                "w": 1900,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 775,
                "y": 2625,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1025,
                "y": 2625,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1025,
                "y": 2375,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 775,
                "y": 2375,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1950,
                "y": 1250,
                "w": 100,
                "h": 300,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": -15000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 200,
                "y": 1050,
                "w": 1850,
                "h": 200,
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
                "x": 200,
                "y": 950,
                "w": 1950,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 950,
                "w": 200,
                "h": 300,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": -15000
                },
                "direction": "up",
                "inView": false
            },
            {
                "x": 1350,
                "y": 2700,
                "w": 200,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 2700
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -200,
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1550,
                "y": 2700,
                "w": 450,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1550,
                        "y": 2700
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -450,
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
                            "x": 450,
                            "y": 0
                        },
                        {
                            "x": 450,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 2050,
                "y": 2700,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2050,
                        "y": 2700
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
                }
            },
            {
                "x": 2000,
                "y": 2700,
                "w": 50,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": 6000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 1450,
                "y": 2750,
                "w": 600,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": -6000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 1400,
                "y": 2850,
                "w": 150,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1400,
                        "y": 2850
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "x": 150,
                            "y": 0
                        },
                        {
                            "x": 150,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "x": 1450,
                "y": 2800,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1450,
                        "y": 2800
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
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -100,
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
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 100,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1350,
                "y": 2750,
                "w": 50,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 2750
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -50,
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ]
                }
            },
            {
                "x": 1400,
                "y": 2750,
                "w": 50,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": 6000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 1400,
                "y": 2800,
                "w": 50,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": -6000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 1350,
                "y": 2800,
                "w": 50,
                "h": 200,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": 6000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 1100,
                "y": 3000,
                "w": 300,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": -6000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 1050,
                "y": 3000,
                "w": 50,
                "h": 150,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": 6000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 1100,
                "y": 3050,
                "w": 250,
                "h": 250,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1100,
                        "y": 3050
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ],
                    "edges": [
                        {
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 250
                        },
                        {
                            "x": -250,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -250
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
                            "x": 250,
                            "y": 0
                        },
                        {
                            "x": 250,
                            "y": 250
                        },
                        {
                            "x": 0,
                            "y": 250
                        }
                    ]
                }
            },
            {
                "x": 2450,
                "y": 3600,
                "radius": 100,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 2350,
                "y": 3400,
                "w": 100,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 2350,
                        "y": 3400
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
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 200
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -200
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
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ]
                }
            },
            {
                "x": 1750,
                "y": 4000,
                "w": 1250,
                "h": 1000,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "points": [
                    [
                        2350,
                        3350
                    ],
                    [
                        2350,
                        3500
                    ],
                    [
                        2325,
                        3425
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2325,
                    "right": 2350,
                    "top": 3350,
                    "bottom": 3500
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        2250,
                        3500
                    ],
                    [
                        2275,
                        3575
                    ],
                    [
                        2250,
                        3650
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2250,
                    "right": 2275,
                    "top": 3500,
                    "bottom": 3650
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        2200,
                        3250
                    ],
                    [
                        2250,
                        3250
                    ],
                    [
                        2225,
                        3275
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2200,
                    "right": 2250,
                    "top": 3250,
                    "bottom": 3275
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        2225,
                        3025
                    ],
                    [
                        2250,
                        3050
                    ],
                    [
                        2200,
                        3050
                    ]
                ],
                "type": "poly",
                "most": {
                    "left": 2200,
                    "right": 2250,
                    "top": 3025,
                    "bottom": 3050
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 0,
                "y": 0,
                "w": 350,
                "h": 600,
                "type": "normal",
                "canJump": true,
                "sat": {
                    "pos": {
                        "x": 0,
                        "y": 0
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
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 350,
                            "y": 600
                        },
                        {
                            "x": 0,
                            "y": 600
                        }
                    ],
                    "edges": [
                        {
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 600
                        },
                        {
                            "x": -350,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -600
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
                            "x": 350,
                            "y": 0
                        },
                        {
                            "x": 350,
                            "y": 600
                        },
                        {
                            "x": 0,
                            "y": 600
                        }
                    ]
                },
                "inView": false
            },
            {
                "x": 350,
                "y": 0,
                "w": 500,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 625,
                "w": 175,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "sat": {
                    "pos": {
                        "x": 0,
                        "y": 625
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
                            "x": 175,
                            "y": 0
                        },
                        {
                            "x": 175,
                            "y": 50
                        },
                        {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "edges": [
                        {
                            "x": 175,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 50
                        },
                        {
                            "x": -175,
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
                            "x": 175,
                            "y": 0
                        },
                        {
                            "x": 175,
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
                "x": 275,
                "y": 775,
                "w": 50,
                "h": 175,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 725,
                "w": 125,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 0,
                "y": 825,
                "w": 75,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1600,
                "y": 3600,
                "w": 100,
                "h": 1350,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1600,
                        "y": 3600
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
                            "y": 1350
                        },
                        {
                            "x": 0,
                            "y": 1350
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 1350
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -1350
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
                            "y": 1350
                        },
                        {
                            "x": 0,
                            "y": 1350
                        }
                    ]
                }
            },
            {
                "x": 50,
                "y": 4850,
                "w": 1550,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 50,
                        "y": 4850
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
                            "x": 1550,
                            "y": 0
                        },
                        {
                            "x": 1550,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 1550,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -1550,
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
                            "x": 1550,
                            "y": 0
                        },
                        {
                            "x": 1550,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 50,
                "y": 3450,
                "w": 100,
                "h": 1400,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 50,
                        "y": 3450
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
                            "y": 1400
                        },
                        {
                            "x": 0,
                            "y": 1400
                        }
                    ],
                    "edges": [
                        {
                            "x": 100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 1400
                        },
                        {
                            "x": -100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -1400
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
                            "y": 1400
                        },
                        {
                            "x": 0,
                            "y": 1400
                        }
                    ]
                }
            },
            {
                "x": 50,
                "y": 3350,
                "w": 1300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 50,
                        "y": 3350
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
                            "x": 1300,
                            "y": 0
                        },
                        {
                            "x": 1300,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 1300,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -1300,
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
                            "x": 1300,
                            "y": 0
                        },
                        {
                            "x": 1300,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 50,
                "y": 3150,
                "w": 1050,
                "h": 50,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": -6000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 0,
                "y": 3200,
                "w": 1100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 0,
                        "y": 3200
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
                            "x": 1100,
                            "y": 0
                        },
                        {
                            "x": 1100,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 1100,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -1100,
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
                            "x": 1100,
                            "y": 0
                        },
                        {
                            "x": 1100,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 1700,
                "y": 3600,
                "w": 50,
                "h": 1350,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 50,
                "y": 4950,
                "w": 1700,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 0,
                "y": 3350,
                "w": 50,
                "h": 1650,
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
                "x": 0,
                "y": 3300,
                "w": 1450,
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
                "x": 1350,
                "y": 3500,
                "w": 100,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3500
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
                }
            },
            {
                "x": 1550,
                "y": 3600,
                "w": 50,
                "h": 1250,
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
                "x": 150,
                "y": 4800,
                "w": 1400,
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
                "x": 150,
                "y": 3450,
                "w": 50,
                "h": 1350,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": 0,
                    "y": 15000
                },
                "direction": "down",
                "inView": true
            },
            {
                "x": 200,
                "y": 3450,
                "w": 1250,
                "h": 50,
                "type": "grav",
                "force": 15000,
                "dir": {
                    "x": -15000,
                    "y": 0
                },
                "direction": "left",
                "inView": true
            },
            {
                "x": 200,
                "y": 3500,
                "w": 1150,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 200,
                        "y": 3500
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ],
                    "edges": [
                        {
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 200
                        },
                        {
                            "x": -1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -200
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ]
                }
            },
            {
                "x": 200,
                "y": 3700,
                "w": 200,
                "h": 1100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 200,
                        "y": 3700
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 1100
                        },
                        {
                            "x": 0,
                            "y": 1100
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 1100
                        },
                        {
                            "x": -200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -1100
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 1100
                        },
                        {
                            "x": 0,
                            "y": 1100
                        }
                    ]
                }
            },
            {
                "x": 400,
                "y": 4600,
                "w": 1150,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 400,
                        "y": 4600
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ],
                    "edges": [
                        {
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 200
                        },
                        {
                            "x": -1150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -200
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
                            "x": 1150,
                            "y": 0
                        },
                        {
                            "x": 1150,
                            "y": 200
                        },
                        {
                            "x": 0,
                            "y": 200
                        }
                    ]
                }
            },
            {
                "x": 1350,
                "y": 3700,
                "w": 200,
                "h": 900,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 1350,
                        "y": 3700
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 900
                        },
                        {
                            "x": 0,
                            "y": 900
                        }
                    ],
                    "edges": [
                        {
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 900
                        },
                        {
                            "x": -200,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -900
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
                            "x": 200,
                            "y": 0
                        },
                        {
                            "x": 200,
                            "y": 900
                        },
                        {
                            "x": 0,
                            "y": 900
                        }
                    ]
                }
            },
            {
                "x": 0,
                "y": 3050,
                "w": 50,
                "h": 150,
                "type": "grav",
                "force": 6000,
                "dir": {
                    "x": 0,
                    "y": -6000
                },
                "direction": "up",
                "inView": true
            },
            {
                "x": 50,
                "y": 3050,
                "w": 600,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": true,
                "sat": {
                    "pos": {
                        "x": 50,
                        "y": 3050
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ],
                    "edges": [
                        {
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 100
                        },
                        {
                            "x": -600,
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
                            "x": 600,
                            "y": 0
                        },
                        {
                            "x": 600,
                            "y": 100
                        },
                        {
                            "x": 0,
                            "y": 100
                        }
                    ]
                }
            },
            {
                "x": 850,
                "y": 0,
                "w": 1300,
                "h": 950,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2650,
                "y": 200,
                "w": 2150,
                "h": 650,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 2650,
                        "y": 200
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
                            "x": 2150,
                            "y": 0
                        },
                        {
                            "x": 2150,
                            "y": 650
                        },
                        {
                            "x": 0,
                            "y": 650
                        }
                    ],
                    "edges": [
                        {
                            "x": 2150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 650
                        },
                        {
                            "x": -2150,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -650
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
                            "x": 2150,
                            "y": 0
                        },
                        {
                            "x": 2150,
                            "y": 650
                        },
                        {
                            "x": 0,
                            "y": 650
                        }
                    ]
                }
            },
            {
                "x": 2700,
                "y": 1850,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 2850,
                "y": 1700,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 2750,
                "y": 1600,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 2850,
                "y": 1950,
                "radius": 50,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": false
            },
            {
                "x": 2400,
                "y": 2400,
                "w": 200,
                "h": 200,
                "type": "speed",
                "speedInc": 1.5,
                "inView": true
            },
            {
                "x": 1900,
                "y": 1925,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 1900,
                        "y": 1925
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 75
                        },
                        {
                            "x": 0,
                            "y": 75
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 75
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -75
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 75
                        },
                        {
                            "x": 0,
                            "y": 75
                        }
                    ]
                }
            },
            {
                "x": 1900,
                "y": 1250,
                "w": 50,
                "h": 625,
                "type": "normal",
                "canJump": true,
                "inView": false,
                "sat": {
                    "pos": {
                        "x": 1900,
                        "y": 1250
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 625
                        },
                        {
                            "x": 0,
                            "y": 625
                        }
                    ],
                    "edges": [
                        {
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": 625
                        },
                        {
                            "x": -50,
                            "y": 0
                        },
                        {
                            "x": 0,
                            "y": -625
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
                            "x": 50,
                            "y": 0
                        },
                        {
                            "x": 50,
                            "y": 625
                        },
                        {
                            "x": 0,
                            "y": 625
                        }
                    ]
                }
            },
            {
                "x": 2900,
                "y": 850,
                "w": 1900,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 2775,
                "y": 925,
                "w": 50,
                "h": 50,
                "type": "bbutton",
                "id": 1,
                "active": true,
                "tempActive": false,
                "inView": false
            },
            {
                "x": 2650,
                "y": 850,
                "w": 50,
                "h": 200,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1050,
                "y": 2450,
                "w": 100,
                "h": 50,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1050,
                "y": 2375,
                "w": 25,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1100,
                "y": 1950,
                "w": 25,
                "h": 300,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 800,
                "y": 1950,
                "w": 300,
                "h": 150,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 750,
                "y": 1850,
                "w": 300,
                "h": 100,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 1125,
                "y": 2250,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 750,
                "y": 2300,
                "w": 250,
                "h": 25,
                "type": "normal",
                "canJump": true,
                "inView": true
            },
            {
                "x": 1000,
                "y": 2325,
                "radius": 25,
                "type": "circle-normal",
                "renderType": "circle",
                "inView": true
            },
            {
                "x": 1000,
                "y": 2200,
                "w": 200,
                "h": 25,
                "type": "rotate-lava",
                "angle": -45649.50000000493,
                "rotateSpeed": -180,
                "pivotX": 1000,
                "pivotY": 2200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 100.77822185373186,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 850,
                "y": 2200,
                "w": 200,
                "h": 25,
                "type": "rotate-lava",
                "angle": 45649.500000005224,
                "rotateSpeed": 180,
                "pivotX": 850,
                "pivotY": 2200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 100.77822185373186,
                "unSim": 0,
                "inView": true
            },
            {
                "x": 750,
                "y": 1950,
                "w": 50,
                "h": 75,
                "type": "normal",
                "canJump": true,
                "inView": false
            },
            {
                "x": 750,
                "y": 2025,
                "w": 50,
                "h": 25,
                "type": "tp",
                "tpx": 2500,
                "tpy": 2500,
                "bgColor": "#1f2229",
                "tileColor": "#323645",
                "changeColor": false,
                "inView": true
            },
            {
                "points": [
                    [
                        900,
                        2100
                    ],
                    [
                        950,
                        2100
                    ],
                    [
                        925,
                        2125
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 950,
                    "top": 2100,
                    "bottom": 2125
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "points": [
                    [
                        925,
                        2275
                    ],
                    [
                        950,
                        2300
                    ],
                    [
                        900,
                        2300
                    ]
                ],
                "type": "poly-lava",
                "most": {
                    "left": 900,
                    "right": 950,
                    "top": 2275,
                    "bottom": 2300
                },
                "renderType": "poly",
                "inView": true
            },
            {
                "x": 1075,
                "y": 2400,
                "w": 75,
                "h": 50,
                "type": "trans",
                "collide": false,
                "opaq": 0.7,
                "inView": true
            },
            {
                "x": 1000,
                "y": 2300,
                "w": 125,
                "h": 100,
                "type": "trans",
                "collide": false,
                "opaq": 0.7,
                "inView": true
            },
            {
                "x": 750,
                "y": 2025,
                "w": 375,
                "h": 275,
                "type": "trans",
                "collide": false,
                "opaq": 0.7,
                "inView": true
            },
            {
                "x": 2800,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 46391.99999999819,
                "rotateSpeed": 720,
                "pivotX": 2800,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 189.17499999999228,
                "inView": false
            },
            {
                "x": 2800,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -46391.99999999818,
                "rotateSpeed": -720,
                "pivotX": 2800,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 189.17499999999228,
                "inView": false
            },
            {
                "x": 3000,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -46523.99999999818,
                "rotateSpeed": -720,
                "pivotX": 3000,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.9916666666591,
                "inView": false
            },
            {
                "x": 3000,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 46523.99999999819,
                "rotateSpeed": 720,
                "pivotX": 3000,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.9916666666591,
                "inView": false
            },
            {
                "x": 3200,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 46655.99999999819,
                "rotateSpeed": 720,
                "pivotX": 3200,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.80833333332595,
                "inView": false
            },
            {
                "x": 3400,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 46835.99999999812,
                "rotateSpeed": 720,
                "pivotX": 3400,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.55833333332617,
                "inView": false
            },
            {
                "x": 3600,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 47231.99999999811,
                "rotateSpeed": 720,
                "pivotX": 3600,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.00833333332668,
                "inView": false
            },
            {
                "x": 3200,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -46655.99999999818,
                "rotateSpeed": -720,
                "pivotX": 3200,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.80833333332595,
                "inView": false
            },
            {
                "x": 3400,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -46835.99999999812,
                "rotateSpeed": -720,
                "pivotX": 3400,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.55833333332617,
                "inView": false
            },
            {
                "x": 3600,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -47231.99999999811,
                "rotateSpeed": -720,
                "pivotX": 3600,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 188.00833333332668,
                "inView": false
            },
            {
                "x": 3800,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -47615.9999999981,
                "rotateSpeed": -720,
                "pivotX": 3800,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 187.47499999999383,
                "inView": false
            },
            {
                "x": 3800,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 47615.9999999981,
                "rotateSpeed": 720,
                "pivotX": 3800,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 187.47499999999383,
                "inView": false
            },
            {
                "x": 4000,
                "y": 200,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": 48953.9999999981,
                "rotateSpeed": 720,
                "pivotX": 4000,
                "pivotY": 200,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 185.61666666666218,
                "inView": false
            },
            {
                "x": 4000,
                "y": 0,
                "w": 250,
                "h": 50,
                "type": "rotate-lava",
                "angle": -48569.9999999981,
                "rotateSpeed": -720,
                "pivotX": 4000,
                "pivotY": 0,
                "distToPivot": 0,
                "canCollide": true,
                "renderType": "rotating",
                "cullingRadius": 127.47548783981962,
                "unSim": 186.14999999999503,
                "inView": false
            }
        ]
        const enemies = [
            {
                "type": "normal",
                "angle": 4.583311540873361,
                "radius": 15,
                "speed": 200,
                "x": 1235.06732256424,
                "y": 2059.1675260734996,
                "renderX": 1235.06732256424,
                "renderY": 2059.1675260734996,
                "xv": 25.743862351456436,
                "yv": 198.3362134135601,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            },
            {
                "type": "normal",
                "angle": 6.276981873422098,
                "radius": 15,
                "speed": 200,
                "x": 1525.9410587176312,
                "y": 2324.4037871530113,
                "renderX": 1525.9410587176312,
                "renderY": 2324.4037871530113,
                "xv": 199.99615175330254,
                "yv": 1.2406787940395954,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            },
            {
                "type": "normal",
                "angle": 3.4573655729882167,
                "radius": 15,
                "speed": 200,
                "x": 1302.8842295918635,
                "y": 2235.1890110858094,
                "renderX": 1302.8842295918635,
                "renderY": 2235.1890110858094,
                "xv": 190.11132635447575,
                "yv": 62.11025351535778,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            },
            {
                "type": "normal",
                "angle": 4.600635903037499,
                "radius": 15,
                "speed": 200,
                "x": 1233.4630539450027,
                "y": 2048.698321008323,
                "renderX": 1233.4630539450027,
                "renderY": 2048.698321008323,
                "xv": -22.304122634877555,
                "yv": 198.7524241700924,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            },
            {
                "type": "normal",
                "angle": 5.463207083693735,
                "radius": 15,
                "speed": 200,
                "x": 1175.079609152204,
                "y": 2201.2068924849013,
                "renderX": 1175.079609152204,
                "renderY": 2201.2068924849013,
                "xv": -136.44742578667157,
                "yv": -146.22619463075267,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            },
            {
                "type": "normal",
                "angle": 4.563543083780114,
                "radius": 15,
                "speed": 200,
                "x": 1359.4807058391527,
                "y": 2206.5282439565062,
                "renderX": 1359.4807058391527,
                "renderY": 2206.5282439565062,
                "xv": -29.659377829237055,
                "yv": -197.78857729096126,
                "bound": {
                    "x": 1150,
                    "y": 2000,
                    "w": 400,
                    "h": 350
                },
                "isLava": true,
                "inView": true
            }
        ]
        const safes = [
            {
                "x": 2275,
                "y": 2275,
                "w": 450,
                "h": 450,
                "renderAbove": true
            },
            {
                "x": 1400,
                "y": 2350,
                "w": 150,
                "h": 50,
                "renderAbove": true
            },
            {
                "x": 1150,
                "y": 1950,
                "w": 150,
                "h": 50,
                "renderAbove": true
            }
        ]
        const texts = [
            {
                "x": 2820,
                "y": 2655,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "friendly",
                "angle": 20,
                "story": false
            },
            {
                "x": 2810,
                "y": 2680,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "planets",
                "angle": 20,
                "story": false
            },
            {
                "x": 2320,
                "y": 2785,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "tricky",
                "angle": -20,
                "story": false
            },
            {
                "x": 2330,
                "y": 2810,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "planets",
                "angle": -20,
                "story": false
            },
            {
                "x": 2160,
                "y": 2430,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "dangerous",
                "angle": 10,
                "story": false
            },
            {
                "x": 2155,
                "y": 2460,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "planets",
                "angle": 10,
                "story": false
            },
            {
                "x": 2645,
                "y": 2185,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "difficulty",
                "angle": -10,
                "story": false
            },
            {
                "x": 2650,
                "y": 2210,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "chart",
                "angle": -10,
                "story": false
            },
            {
                "x": 2975,
                "y": 1825,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "rollercoaster!",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "WARNING",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3675,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "WARNING",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3750,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Authorized",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3750,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Authorized",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3775,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Personnel",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3775,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Personnel",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3800,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Only",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3800,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Only",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3875,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Restricted",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3875,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Restricted",
                "angle": 0,
                "story": false
            },
            {
                "x": 3350,
                "y": 3900,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Area",
                "angle": 0,
                "story": false
            },
            {
                "x": 3600,
                "y": 3900,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "Area",
                "angle": 0,
                "story": false
            },
            {
                "x": 3975,
                "y": 4900,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "lol how did you get here??",
                "angle": 0,
                "story": false
            },
            {
                "x": 2625,
                "y": 3175,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "rollercoaster!",
                "angle": 0,
                "story": false
            },
            {
                "x": 2025,
                "y": 2900,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add a cool obs here",
                "angle": 0,
                "story": false
            },
            {
                "x": 1625,
                "y": 3325,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add a cool obs here",
                "angle": 0,
                "story": false
            },
            {
                "x": 3400,
                "y": 2125,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add a cool obs here",
                "angle": 0,
                "story": false
            },
            {
                "x": 900,
                "y": 2450,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add a cool obs here",
                "angle": 0,
                "story": false
            },
            {
                "x": 2725,
                "y": 3850,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add cool obs here",
                "angle": 0,
                "story": false
            },
            {
                "x": 875,
                "y": 4150,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "add a hella pretty nebula effect here (like the one on the account creation)",
                "angle": 0,
                "story": false
            },
            {
                "x": 325,
                "y": 2850,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "idk what to do here",
                "angle": 0,
                "story": false
            },
            {
                "x": 325,
                "y": 2900,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "maybe it's an rng test minigame?",
                "angle": 0,
                "story": false
            },
            {
                "x": 2800,
                "y": 800,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "emergency",
                "angle": 0,
                "story": false
            },
            {
                "x": 2800,
                "y": 825,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "shutdown",
                "angle": 0,
                "story": false
            },
            {
                "x": 2800,
                "y": 275,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "warning",
                "angle": 10,
                "story": false
            },
            {
                "x": 2800,
                "y": 325,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "extremely",
                "angle": 10,
                "story": false
            },
            {
                "x": 2800,
                "y": 350,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "dangerous",
                "angle": 10,
                "story": false
            },
            {
                "x": 2800,
                "y": 375,
                "w": 25,
                "h": 25,
                "size": 30,
                "text": "area",
                "angle": 10,
                "story": false
            }
        ]

        const portals = [
            {
                "x": 3000,
                "y": 2600,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Peaceful Beginnings",
                "acronym": "PoPB",
                "difficulty": "Peaceful",
                "difficultyNumber": "0.3",
                "musicPath": null,
                "renderType": "portal",
                "inView": true
            },
            {
                "x": 3050,
                "y": 3000,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Simple Challenges",
                "acronym": "PoSC",
                "difficulty": "Peaceful",
                "difficultyNumber": "0.7",
                "musicPath": null,
                "renderType": "portal",
                "inView": true
            },
            {
                "x": 3400,
                "y": 2450,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of the Vibing Vault",
                "acronym": "PoVV",
                "difficulty": "Moderate",
                "difficultyNumber": "0.4",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 2100,
                "y": 3350,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Simple Challenges",
                "acronym": "PoCA",
                "difficulty": "Moderate",
                "difficultyNumber": "0.5",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 1450,
                "y": 3100,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Speed",
                "acronym": "PoS",
                "difficulty": "Difficult",
                "difficultyNumber": "0.6",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 1850,
                "y": 3400,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Safezones",
                "acronym": "PoS",
                "difficulty": "Hardcore",
                "difficultyNumber": "0.01",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 1700,
                "y": 2050,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Quick Thinking",
                "acronym": "PoQT",
                "difficulty": "Exhausting",
                "difficultyNumber": "0.1",
                "musicPath": null,
                "renderType": "portal",
                "inView": true
            },
            {
                "x": 1050,
                "y": 1850,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Prehistory",
                "acronym": "PoP",
                "difficulty": "Exhausting",
                "difficultyNumber": "0.7",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 1150,
                "y": 2800,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "Planet of Lost Sanity",
                "acronym": "PoLS",
                "difficulty": "Relentless",
                "difficultyNumber": "0.7",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            },
            {
                "x": 250,
                "y": 600,
                "w": 100,
                "h": 100,
                "type": "portal",
                "name": "PoDC",
                "acronym": "Planet of Difficulty Chart",
                "difficulty": "Agonizing",
                "difficultyNumber": "0.4",
                "musicPath": null,
                "renderType": "portal",
                "inView": false
            }
        ]
        obs.push(...portals);
    
        const str = convertOldExMap(obs, enemies, safes, texts, counter);
        
        eval(str);

        // temp for poqt
        // spawnPosition.x = 3500;
        // spawnPosition.y = 4200;
    
        spawnPosition.x=5000;
        spawnPosition.y=5000;
        window.respawnPlayer();
        colors.background="#323645"; colors.tile="#1f2229";

        C(0,[],[26],{
            x: spawnPosition.x,
            y: spawnPosition.y,
            r: 50,
            musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
        });

        mapDimensions.x=10000;
        mapDimensions.y=10000;
    }

})();

///               vvvvv 2021 vvvvv
/*
mapDimensions.x=10000;
mapDimensions.y=10000;

spawnPosition.x=5000;
spawnPosition.y=5000;
window.respawnPlayer();

C(3,[],[20],{fontSize:62,text:'Tricky Planets',y:2725*2,x:1975*2,hex:colourRgb(100,100,100),})
C(3,[],[20],{fontSize:62,text:'Difficulty chart',y:2075*2,x:2275*2,hex:colourRgb(100,100,100),})
C(3,[],[20],{fontSize:62,text:'Dangerous Planets',y:2225*2,x:2975*2,hex:colourRgb(100,100,100),})
C(3,[],[20],{fontSize:62,text:'Friendly Planets',y:2975*2,x:2675*2,hex:colourRgb(100,100,100),})

C(1,[],[11],{h:600*2,w:600*2,y:2200*2,x:2200*2,});

C(1,[],[19],{h:200*2,w:200*2,y:2400*2,x:2400*2,speedChangePermanent:false,speedMult:1.5,});

// obstacles.push(new TransObstacle(250, 1900, 850, 300, false, 1));
// obstacles.push(new TransObstacle(2800, 3150, 200, 1850, false, 1));
// obstacles.push(new TransObstacle(3000, 3200, 50, 50, false, 1));

C(1,[],[13],{h:100*2,w:100*2,y:2100*2,x:4650*2,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorAngle:90,conveyorForce:0.6*5/16.66,});

C(1,[],[10],{h:100*2,w:150*2,y:3300*2,x:3050*2,healSpeed:1,regenTime:(600/16.66),maxStrength:~~(620/16.66),});

C(0,[],[0],{r:100*2,y:2050*2,x:500*2,});

C(1,[],[0],{h:200*2,w:300*2,y:700*2,x:300*2,});

C(1,[],[0],{h:100,w:1100,y:4300,x:4600,});
C(1,[],[0],{h:100,w:5400,y:5600,x:0,});
C(1,[],[0],{h:4100,w:5000,y:5700,x:0,});
C(1,[],[0],{h:3700,w:600,y:6300,x:5000,});
C(1,[],[0],{h:2700,w:4000,y:7300,x:6000,});
C(1,[],[0],{h:1200,w:3100,y:6100,x:6900,});
C(1,[],[0],{h:200,w:100,y:3800,x:2100,});
C(1,[],[0],{h:200,w:100,y:3800,x:2000,});
C(1,[],[0],{h:1100,w:100,y:4300,x:4300,});
C(1,[],[0],{h:1500,w:10000,y:4600,x:5600,});
C(1,[],[0],{h:700,w:100,y:5600,x:5000,});
C(1,[],[0],{h:100,w:1000,y:6200,x:5000,});
C(1,[],[0],{h:200,w:100,y:6200,x:6000,});
C(1,[],[0],{h:700,w:100,y:6500,x:6000,});
C(1,[],[0],{h:100,w:800,y:7200,x:6000,});
C(1,[],[0],{h:1300,w:100,y:6000,x:6800,});
C(1,[],[0],{h:4300,w:1100,y:0,x:5600,});
C(1,[],[0],{h:3400,w:2000,y:0,x:6700,});
C(1,[],[0],{h:300,w:100,y:3400,x:7100,});
C(1,[],[0],{h:500,w:700,y:3400,x:7600,});
C(1,[],[0],{h:2000,w:2000,y:0,x:8000,});
C(1,[],[0],{h:2600,w:2000,y:2000,x:9500,});
C(1,[],[0],{h:400,w:600,y:4200,x:8700,});
C(1,[],[0],{h:300,w:200,y:3400,x:6700,});
C(1,[],[0],{h:900,w:200,y:3400,x:7400,});
C(1,[],[0],{h:200,w:700,y:4200,x:6900,});
C(1,[],[0],{h:1100,w:900,y:2000,x:9100,});
C(1,[],[0],{h:200,w:300,y:6100,x:6500,});
C(1,[],[0],{h:300,w:300,y:6500,x:6500,});
C(1,[],[0],{h:100,w:300,y:6800,x:6500,});
C(1,[],[0],{h:100,w:700,y:7100,x:6100,});
C(1,[],[0],{h:5300,w:700,y:0,x:3600,});
C(1,[],[0],{h:100,w:300,y:6500,x:6100,});
C(1,[],[0],{h:100,w:300,y:6800,x:6100,});
C(1,[],[0],{h:1200,w:3300,y:4400,x:0,});
C(1,[],[0],{h:3800,w:3600,y:0,x:0,});
C(1,[],[0],{h:300,w:100,y:4100,x:2700,});
C(1,[],[0],{h:300,w:100,y:4100,x:3000,});
C(1,[],[0],{h:300,w:100,y:4100,x:2400,});
C(1,[],[0],{h:300,w:100,y:4100,x:2100,});
C(1,[],[0],{h:500,w:100,y:3800,x:1900,});
C(1,[],[0],{h:500,w:100,y:3900,x:1700,});
C(1,[],[0],{h:500,w:100,y:3800,x:1500,});
C(1,[],[0],{h:100,w:400,y:4200,x:8300,});
C(1,[],[0],{h:50,w:400,y:4500,x:8300,});
C(1,[],[0],{h:50,w:400,y:4550,x:8300,});

C(1,[],[0],{h:3700,w:500,y:6300,x:5600,});

// C(1,[],[12],{h:200,w:300,y:700,x:300,tpy:100,tpx:100,});

// C(1,[],[12],{h:0,w:0,y:1915,x:15,tpy:5000,tpx:0,});
C(1,[],[12],{h:35*2,w:50*2,y:2255*2,x:3100*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:35*2,w:50*2,y:2160*2,x:3200*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:35*2,w:50*2,y:2255*2,x:3300*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:10*2,w:500*2,y:2150*2,x:2850*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:10*2,w:1350*2,y:2290*2,x:2800*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:60*2,w:10*2,y:2150*2,x:2970*2,tpy:2500*2,tpx:2500*2,});
C(1,[],[12],{h:10*2,w:350*2,y:1950*2,x:3800*2,tpy:2500*2,tpx:2500*2,});

var fac = 1 / 360 / 360 * Math.PI / 2 * 16.66;
C(1,[1],[1],{h:40,w:1200,y:3480,x:8500,pivotY:3500,pivotX:9100,rotateSpeed:-160*fac,initialRotation:0,});
C(1,[1],[1],{h:40,w:300,y:4350,x:6300,pivotY:4370,pivotX:6450,rotateSpeed:-110*fac,initialRotation:0,});
C(1,[1],[1],{h:40,w:400,y:4500,x:5950,pivotY:4520,pivotX:6150,rotateSpeed:110*fac,initialRotation:45,});
C(1,[1],[1],{h:20,w:300,y:4730,x:3300,pivotY:4740,pivotX:3450,rotateSpeed:90*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:300,y:4950,x:3300,pivotY:4960,pivotX:3450,rotateSpeed:-90*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:300,y:5170,x:3300,pivotY:5180,pivotX:3450,rotateSpeed:90*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:300,y:5390,x:3300,pivotY:5400,pivotX:3450,rotateSpeed:-90*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:500,pivotY:10000,pivotX:700,rotateSpeed:240*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:800,pivotY:10000,pivotX:1000,rotateSpeed:240*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:1100,pivotY:10000,pivotX:1300,rotateSpeed:240*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:1400,pivotY:10000,pivotX:1600,rotateSpeed:240*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:2000,pivotY:10000,pivotX:2200,rotateSpeed:240*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:400,y:9990,x:2000,pivotY:10000,pivotX:2200,rotateSpeed:240*fac,initialRotation:90,});
C(1,[1],[1],{h:20,w:400,y:9990,x:2000,pivotY:10000,pivotX:2200,rotateSpeed:240*fac,initialRotation:45,});
C(1,[1],[1],{h:20,w:800,y:9990,x:2600,pivotY:10000,pivotX:3000,rotateSpeed:240*fac,initialRotation:45,});
C(1,[1],[1],{h:20,w:800,y:10030,x:3600,pivotY:10040,pivotX:4000,rotateSpeed:120*fac,initialRotation:0,});
C(1,[1],[1],{h:20,w:800,y:10030,x:3600,pivotY:10040,pivotX:4000,rotateSpeed:120*fac,initialRotation:120,});
C(1,[1],[1],{h:20,w:800,y:10030,x:3600,pivotY:10040,pivotX:4000,rotateSpeed:120*fac,initialRotation:60,});

C(1,[],[22],{h:200,w:200,y:3400,x:6900,mapName:'pols'});

C(1,[],[22],{h:200,w:200,y:4200,x:2500,mapName:'posc'});

C(1,[],[22],{h:200,w:200,y:6300,x:6600,mapName:'popb'});

C(1,[],[22],{h:200,w:200,y:6900,x:6100,mapName:'poca'});

C(1,[],[22],{h:200,w:200,y:6900,x:6600,mapName:'poph'});


C(1,[],[22],{h:200,w:200,y:4200,x:2800,mapName:'pos'});

C(1,[],[22],{h:200,w:200,y:6600,x:6100,mapName:'povv'});

C(1,[],[22],{h:200,w:200,y:4400,x:9300,mapName:'pospd'});

C(1,[],[22],{h:200,w:200,y:4200,x:2200,mapName:'poqt'});

var difficultyChangeTime, maxDifficultyChangeTime;
difficultyChangeTime = maxDifficultyChangeTime = 1000;
C(1,[],[22],{h:700,w:700,y:3300,x:4600,mapName:'podc',sf:(o) => {
        o.difficulty += 1 / 60;
        while(o.difficulty >= 9) o.difficulty -= 9;
    },
    cr:(o)=>{
        let t = (o.difficulty % 1);

        ctx.beginPath();
        ctx.fillStyle = window.blendColor(difficultyImageColors[Math.floor(o.difficulty)],difficultyImageColors[Math.ceil(o.difficulty)%9],t);
        o.renderShape(o);
        ctx.fill();
        ctx.closePath();

        let topX = o.topLeft.x;
        let topY = o.topLeft.y;

        if(o.dimensions.x > o.dimensions.y){
            ctx.translate(o.dimensions.x - o.dimensions.y + topX, topY);
        } else {
            ctx.translate(topX, o.dimensions.y - o.dimensions.x + topY);
        }

        ctx.lineCap = 'round';
        ctx.globalAlpha = t;
        difficultyImageMap[Math.ceil(o.difficulty)%9](Math.min(o.dimensions.x, o.dimensions.y));

        ctx.globalAlpha = 1 - t;
        difficultyImageMap[Math.floor(o.difficulty)](Math.min(o.dimensions.x, o.dimensions.y));
        ctx.lineCap = 'square';
        ctx.globalAlpha = 1;

        if(o.dimensions.x > o.dimensions.y){
            ctx.translate(-(o.dimensions.x - o.dimensions.y + topX), -topY);
        } else {
            ctx.translate(-topX, -(o.dimensions.y - o.dimensions.x + topY));
        }

        ctx.font = `${o.dimensions.x / 3.5}px Inter`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
            o.mapName.toUpperCase().replace('O','o'),
            topX + o.dimensions.x / 2,
            topY - o.dimensions.y / 4
        );
    }
});

C(1,[],[0],{h:3000,w:1500,y:0,x:4200});

C(1,[],[26],{musicPath:'https://www.youtube.com/watch?v=9EHXqi0ez54',x:4800,y:4800,w:400,h:400});*/