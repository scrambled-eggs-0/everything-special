function importMap(str){
    obstacles.length = 0;

    const o = JSON.parse(str);

    let {arena, safes, spawns, playerSpawn, tileColor, bgColor, texts} = o;

    // arena.width, arena.height

    mapDimensions.x=arena.width * 2;
    mapDimensions.y=arena.height * 2;

    spawnPosition.x=playerSpawn.x*2;
    spawnPosition.y=playerSpawn.y*2;
    window.respawnPlayer();
    colors.background=tileColor; colors.tile=bgColor;

    let counter = 0;

    let obs = o.obstacles;
    let enemies = o.enemy;

    safes = safes.map(p => {
        p.type = "safe";
        return p;
    });

    texts = texts.map(p => {
        p.type = "text";
        return p;
    });

    // -----------------------------------------------------------------------------------------------------------------

    const typeMap = {
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
                p.conveyorForce = params.force / 10000 * 7.08 * 5 / 16.66;
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
    
                const currentPoint = p.path[p.currentPoint];
                let nextPointIndex = p.currentPoint+1;
                if(nextPointIndex === p.path.length) nextPointIndex = 0;
                const nextPoint = p.path[nextPointIndex];
    
                const totalDist = Math.sqrt((nextPoint[0]-currentPoint[0])**2+(nextPoint[1]-currentPoint[1])**2);
                const fractionCovered = Math.sqrt((params.x*2-currentPoint[0])**2+(params.y*2-currentPoint[1])**2);
                
                p.currentPoint += fractionCovered / totalDist;
    
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
                const p = {timeTrapToShowTenth:false,timeTrapToKill:true,timeTrapRecoverySpeed:params.cdmult};
    
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
                return {bounciness: params.effect/3/10, decay: 0.5};
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
                p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 10 / 16.66;
                p.jumpForce = params.jumpHeight / 10 / 8.2 * 2.32 / 1.2 / 2;
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
        
    
        // {
        //     "x": 8550,
        //     "y": 9500,
        //     "radius": 300,
        //     "type": "circle-hollow-slice",
        //     "startAngle": 1.5707963267948966,
        //     "endAngle": -1.5707963267948966,
        //     "startPolygon": {
        //         "points": [
        //             [
        //                 8550,
        //                 9650
        //             ],
        //             [
        //                 8550,
        //                 9800
        //             ]
        //         ],
        //         "type": "poly",
        //         "props": {}
        //     },
        //     "endPolygon": {
        //         "points": [
        //             [
        //                 8550,
        //                 9350
        //             ],
        //             [
        //                 8550,
        //                 9200
        //             ]
        //         ],
        //         "type": "poly",
        //         "props": {}
        //     },
        //     "innerRadius": 150,
        //     "toRotate": false,
        //     "rotateSpeed": 0,
        //     "renderType": "circle",
        //     "inView": false
        // },
        'circle-hollow-slice': {
            type: [4,[],[0]],
            customMap: (params) => {
                return {
                    r: params.radius * 2,
                    innerRadius: params.innerRadius * 2,
                    startSliceAngle: params.startAngle,
                    endSliceAngle: params.endAngle,
                    startSliceAngleRotateSpeed: params.rotateSpeed / 2000,
                    endSliceAngleRotateSpeed: params.rotateSpeed / 2000
                }
            }
        },
    
        'circle-slice': {
            type: [4,[],[0]],
            customMap: (params) => {
                return {
                    r: params.radius * 2,
                    innerRadius: 0,
                    startSliceAngle: params.startAngle,
                    endSliceAngle: params.endAngle,
                    startSliceAngleRotateSpeed: 0,
                    endSliceAngleRotateSpeed: 0
                }
            }
        },
    
        'ship': {
            type: [1,[],[27]],
            customMap: (params) => {
                return {
                    changeShipStateTo: params.state,
                    initialShipAngle: -Math.PI / 2,
                    shipTurnSpeed: Math.PI / 20 / 16.66 / 2
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
        },
    
        'grpu': {
            type: [1,[],[28]],
            customMap: (params) => {
                return {
                    changeGrappleStateTo: params.state,       
                    grappleRange: 488,
                    grappleForce: 0.06,
                    grappleFric: 0.8,
                };
            }
        },
    }
    
    const enemyTypeMap = {
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

    // -----------------------------------------------------------------------------------------------------------------

    const alreadyLogged = {};

    var str = '';

    for(let i = 0; i < obs.length; i++){
        if(['spawner','square','switch','turret','flashlight'].includes(obs[i].type) === false) continue;
        const o = obs[i];

        const spawnData = obs[i].spawnData;
        spawnData.bound = {
            x: obs[i].x, y: obs[i].y, w: obs[i].w, h: obs[i].h
        }

        for(let i = 0; i < spawnData.amount; i++){
            const s = structuredClone(spawnData);

            s.x = o.x + Math.random() * o.w;
            s.y = o.y + Math.random() * o.h;
            s.angle = Math.random() * Math.PI * 2;
            s.xv = Math.cos(s.angle) * s.speed;
            s.yv = Math.sin(s.angle) * s.speed;

            enemies.push(s);
            console.log(s);
        }
    }

    let alreadyLoggedEnemy = {};
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

        if(o.type === 'spawner') continue;
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
        } else if(o.type === 'grapplepoint' || o.type === 'movinggrapplepoint'){
            o.x *= 2; o.y *= 2;
            if(o.type === 'grapplepoint'){
                str += `C(0,[],[0],{r:20+12/2,y:${o.y},x:${o.x},
                    cr:(e)=>{
                        e.isGrapplePoint = true;
                        ctx.strokeStyle = '#c9c9c9';
                        ctx.lineWidth = 12;
                        ctx.globalAlpha = 0.5;
                        ctx.beginPath();
                        ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.globalAlpha = 1;
                    }
                });\n`;
            } else {
                const params = o;
                const p = {path: '['};
                for(let i = 0; i < params.points.length; i++){
                    p.path += `[${params.points[i][0]*2},[${params.points[i][1]*2}],${params.speed * 2 / 1000}],`;
                }

                p.currentPoint = params.currentPoint;
                p.x = params.points[0][0] * 2;
                p.y = params.points[0][1] * 2;

                p.path = p.path.substring(0, p.path.length-1);
                p.path += ']';
                str += `C(0,[0],[0],{r:20+12/2,
                    cr:(e)=>{
                        e.isGrapplePoint = true;
                        ctx.strokeStyle = '#c9c9c9';
                        ctx.lineWidth = 12;
                        ctx.globalAlpha = 0.5;
                        ctx.beginPath();
                        ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.globalAlpha = 1;
                    },currentPoint:${p.currentPoint},x:${p.x},y:${p.y},path:${p.path}
                });\n`;
            }
            counter++;
            continue;
        } else if(o.type === 'circle-sentry'){
            o.x *= 2; o.y *= 2; o.r *= 2;
            o.laser.x *= 2; o.laser.y *= 2; o.laser.w *= 2; o.laser.h *= 2;
            str += `C(1,[5],[1],{h:${o.laser.h},w:${o.laser.w},y:${o.y-o.laser.h/2},x:${o.x-o.laser.w/2},
                boundPlayer: true,
                restAngles: [${o.rest*Math.PI/180}, ${o.rest*Math.PI/180+Math.PI}],
                toRest: true,
                homingRotateSpeed: ${o.speed / 86000},
                detectionRadius: ${Math.sqrt(o.laser.w**2+o.laser.h**2)/2},
                spokeAngles: [0, Math.PI],
                pivotX: ${o.x},
                pivotY: ${o.y}
            });
            C(0,[],[0],{x:${o.x},y:${o.y},r:${o.r},cr:(e)=>{
                ctx.fillStyle = window.colors.tile;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();

                ctx.strokeStyle = 'red';
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.arc(
                    e.pos.x,
                    e.pos.y,
                    Math.max(e.sat.r - 30, 0),
                    0,
                    Math.PI * 2
                );
                ctx.stroke();
                ctx.closePath();
            }});`
            counter++;
            continue;
        } else if(o.type === 'resetcoins'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `C(1,[],[20],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
                for(let i = 0; i < obstacles.length; i++){
                    if(obstacles[i].collected !== undefined){
                        obstacles[i].collected = false;
                    } else if(obstacles[i].isCoindoor === true){
                        obstacles[i].coins = obstacles[i].maxCoins; 
                    }
                }    
            }});`;
            continue;
        } else if(o.type === 'resettimetraps'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `C(1,[],[20],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
                for(let i = 0; i < obstacles.length; i++){
                    if(obstacles[i].timeTrapTime !== undefined){
                        obstacles[i].timeTrapTime = obstacles[i].timeTrapMaxTime;
                    }
                }    
            }});`;
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
}

export default importMap;