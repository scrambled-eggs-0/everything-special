import shared from '../../shared/shared.js';
// THIS IS A TEMPORARY FILE FOR IMPORTING UNIVERSE 1 MAPS. THIS FILE SHOULD EVENTUALLY BE DELETED IN FAVOR OF C STATEMENTING ALL OLD EDITOR MAPS
shared.convertOldExMap = (obs, enemies, safes, texts, counter, special=undefined) => {
    const typeMap = {
        'normal': {
            type: [1,[],[0]],
            customMap: (params) => {
                if(special === 'poqt'){
                    return {isNormal: true};
                }
                return {};
            }
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
                p.conveyorForce = params.force / 10000 * 7.08 * 5 / 16.66 * 2 * 5/3;

                if(params.x === 2000 && params.y === 11300/2){
                    p.conveyorForce /= 2;
                } else if(params.x === 3200/2 && params.y === 12000/2){
                    p.conveyorForce /= 2;
                }

                if(special === 'poqt') p.conveyorForce *= 1.05;
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
                if(params.toRender === false){
                    return {
                        boundPlayer: true,
                        type: [0,[],[1,3]],
                        cr:(o)=>{},
                    }
                }
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
                if(params.toRender === false){
                    return {
                        type: [1,[],[1,3]],
                        boundPlayer: params.canCollide,
                        cr:()=>{},
                    }
                }
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
                    innerSize: params.ir * 0.1,
                    outerR: params.vc.r,
                    outerG: params.vc.g,
                    outerB: params.vc.b,
                    outerSize: params.or * 0.6,
                    innerOpacity: 0,
                    outerOpacity: 1// params.o
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
                        params.speed * 2 / 60
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

                if(special === 'povv' && params.x <= 2000 && params.y === 8100){
                    p.currentPoint++;
                    if(p.currentPoint === p.path.length) p.currentPoint = 0;
                }

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
                        params.speed * 2 / 60
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
                    innerSize: params.ir * 0.1,
                    outerR: params.vc.r,
                    outerG: params.vc.g,
                    outerB: params.vc.b,
                    outerSize: params.or * 0.6,
                    innerOpacity: 0,
                    outerOpacity: 1// params.o
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
                        params.speed * 2 / 60
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
                        params.speed * 2 / 60
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
        'movingvinette': {
            type: [1,[0],[24]],
            customMap: (params) => {
                const p = {path: [],
                    innerR: params.vc.r,
                    innerG: params.vc.g,
                    innerB: params.vc.b,
                    innerSize: params.ir * 0.1,
                    outerR: params.vc.r,
                    outerG: params.vc.g,
                    outerB: params.vc.b,
                    outerSize: params.or * 0.6,
                    innerOpacity: 0,
                    outerOpacity: 1// params.o
                };
                for(let i = 0; i < params.points.length; i++){
                    p.path.push([
                        params.points[i][0]*2,
                        params.points[i][1]*2,
                        params.speed * 2 / 60
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
        'timetrap': {
            type: [1,[],[17]],
            customMap: (params) => {
                //C(1,[],[17],{h:200,w:300,y:700,x:300,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});
                const p = {timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:params.cdmult};

                p.timeTrapMaxTime = params.maxTime * 60;
                return p;
            }
        },
        // 'oval': {
        //     type: [0,[],[0]],
        //     customMap: (params) => {
        //         return {r: Math.min(params.radius, params.radius2)*2};
        //     }
        // },
        // 'lava-oval': {
        //     type: [0,[],[1]],
        //     customMap: (params) => {
        //         return {r: Math.min(params.radius, params.radius2)*2, boundPlayer: true};
        //     }
        // },
        'safe': {
            type: [1,[],[11]],
        },
        'circle-safe': {
            type: [0,[],[11]],
            r: 'r'
        },
        'stopforces': {
            type: [0,[],[5]],
            r: 'r'
        },
        'circle-vinette': {
            type: [0,[],[24]],
            customMap: (params) => {
                return {
                    innerR: params.vc.r,
                    innerG: params.vc.g,
                    innerB: params.vc.b,
                    innerSize: params.ir * 0.1,
                    outerR: params.vc.r,
                    outerG: params.vc.g,
                    outerB: params.vc.b,
                    outerSize: params.or * 0.6,
                    innerOpacity: 0,
                    outerOpacity: 1,// params.o
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
                return {bounciness: special === 'popb' ? params.effect / 1.5*10/16.66 : params.effect/1.5, decay: 0.5};
            }
        },
        'rotate-normal': {
            type: [1,[1],[0]],
            customMap: (params) => {
                if(special === 'popb'){
                    return {
                        x: params.x * 2 - params.w,
                        y: params.y * 2 - params.h,
                        initialRotation: 0,
                        rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                        pivotX: params.pivotX * 2,
                        pivotY: params.pivotY * 2
                    };
                } else if(special === 'posc' || special === 'povv' || special === 'posh' || (special === 'pospd' && params.x > 3750/2 && params.y >11400/2 && params.x < 6100/2 && params.y < 13450/2)){
                    params.x = params.distToPivot + params.pivotX;
                    params.y = params.pivotY;
                    return {
                        x: params.x * 2 - params.w,
                        y: params.y * 2 - params.h,
                        initialRotation: params.angle * Math.PI / 180,
                        rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                        pivotX: params.pivotX * 2,
                        pivotY: params.pivotY * 2
                    };
                }
                return {
                    x: params.x * 2 - params.w,
                    y: params.y * 2 - params.h,
                    initialRotation: params.angle * 180 / Math.PI,
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
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
                    initialRotation: params.angle * Math.PI / 180,
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                    pivotX: params.pivotX * 2,
                    pivotY: params.pivotY * 2,
                    boundPlayer: params.canCollide
                };
            }
        },
        'rotate-tp': {
            type: [1,[1],[12]],
            customMap: (params) => {
                params.x = params.distToPivot + params.pivotX;
                params.y = params.pivotY;
                return {
                    x: params.x * 2 - params.w,
                    y: params.y * 2 - params.h,
                    tpx: params.tpx * 2, tpy: params.tpy * 2,
                    initialRotation: params.angle * Math.PI / 180,
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                    pivotX: params.pivotX * 2,
                    pivotY: params.pivotY * 2,
                };
            }
        },
        'rotatingsafe': {
            type: [1,[1],[11]],
            customMap: (params) => {
                params.angle *= Math.PI / 180;

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
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                    pivotX: params.pivotX * 2,
                    pivotY: params.pivotY * 2
                };
            }
        },
        'rotatingvinette': {
            type: [1,[1],[24]],
            customMap: (params) => {
                params.angle *= Math.PI / 180;

                params.x = params.distToPivot + params.pivotX;
                params.y = params.pivotY;

                return {
                    x: params.x * 2 - params.w,
                    y: params.y * 2 - params.h,
                    initialRotation: params.angle,
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                    pivotX: params.pivotX * 2,
                    pivotY: params.pivotY * 2,
                    
                    innerR: params.vc.r,
                    innerG: params.vc.g,
                    innerB: params.vc.b,
                    innerSize: params.ir * 0.1,
                    outerR: params.vc.r,
                    outerG: params.vc.g,
                    outerB: params.vc.b,
                    outerSize: params.or * 0.6,
                    innerOpacity: 0,
                    outerOpacity: 1// params.o
                
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
                    snapCooldown: params.snapWait * 60,
                    snapDistanceY: params.snapDistance * 2,
                    snapDistanceX: params.snapDistance * 2,
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
                    pushAngle: {'right': 180, 'down': 270, 'left': 0, 'up': 90}[params.dir],
                    maxPushDistance: params.max * 2,
                    idlePushBackSpeed: params.pushBack / 20 * 1000 / 60,
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
                        initialRotation: params.angle * Math.PI / 180,
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
                p.platformerFriction = 0.972;
                p.platformerAngleRotateSpeed = 0;
                p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 5 / 16.66;
                p.jumpForce = params.jumpHeight / 20 * 5.8;
                p.jumpDecay = 0.96;
                p.maxJumpCooldown = 20;

                if(special === 'povv'){
                    if(params.y >= 9600){
                        p.platformerFriction = 0.962;
                        // p.platformerFriction = 0.981;
                        // p.platformerForce *= 0.6;
                        p.jumpDecay = 0.96 * 0.962 / 0.972;
                        p.jumpForce /= 1.2;
                        // p.jumpDecay = 0.952;
                    }
                    // p.platformerFriction = 0.96;
                    // p.platformerForce *= 1.2 / 3;
                    // p.jumpForces *= 0.56;
                    // p.jumpDecay = 0.92;
                    // p.platformerForce /= 1.2;


                    if(params.x === 3300 && params.y === 3300){
                        p.platformerFriction *= 0.972;
                        p.jumpForce *= 0.95;
                        p.jumpDecay *= 0.96;
                        // p.platformerForce *= 0.56;
                    }

                    p.canJumpMidair = true;
                } else if(special === 'pospd'){
                    p.canJumpMidair = true;
                    if(params.specialPOSPDPlatformer === true){
                        p.platformerForce *= 1.2;
                        p.jumpForce *= 0.65;
                        p.jumpDecay = 0.92;
                        p.platformerFriction = 0.9;
                    }
                } else if(special === 'poqt'){
                    p.canJumpMidair = true;
                    if(params.specialPOQTPlatformer === true){
                        p.platformerFriction = 0.98;
                        p.jumpForce *= 0.6;
                        p.jumpDecay = 0.98;
                        p.platformerForce *= 1.2;
                        p.maxJumpCooldown = 24;
                    }

                    if(params.overrideJC !== undefined){
                        p.maxJumpCooldown = params.overrideJC;
                    }
                } else {
                    p.canJumpMidair = false;
                }

                p.platformerForce *= 5/3;
                
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
                    maxStrength: Math.max(14,params.maxStrength * Math.max(1,params.timer / 1000)),
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
                    initialShipAngle: special === 'posc' ? Math.PI / 2 : -Math.PI / 2,
                    shipTurnSpeed: special === 'pospd' ? Math.PI / 20 / 16.66 / 2 : Math.PI / 80 / 12
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
        'musicchange': {
            type: [1,[],[26]],
            customMap: (params) => {
                if(params.startTime !== undefined && params.startTime !== 0 && special === 'poqt'){
                    return {
                        musicPath: params.musicPath,
                        musicStartTime: params.startTime 
                    }
                }
                return {
                    musicPath: params.musicPath,
                }
            }
            // C(0,[],[26],{
            //     x: spawnPosition.x,
            //     y: spawnPosition.y,
            //     r: 50,
            //     musicPath: 'https://www.youtube.com/watch?v=2C4lFUpI_4U'
            // });
        },

        'circle-hollow-slice': {
            type: [4,[],[0]],
            customMap: (params) => {
                return {
                    r: params.radius * 2,
                    innerRadius: params.innerRadius * 2,
                    startSliceAngle: params.startAngle,
                    endSliceAngle: params.endAngle,
                    startSliceAngleRotateSpeed: params.rotateSpeed / 120,
                    endSliceAngleRotateSpeed: params.rotateSpeed / 120
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

        'mark': {
            type:[1,[],[29]],
            customMap: (params) => {
                return {
                    changeDeathTimerStateTo: true,
                    deathTime: params.time * 60,
                    drainAmountWhileStandingOn: 0
                }
            }
        },
        'cure': {
            type:[1,[],[29]],
            customMap: (params) => {
                return {
                    changeDeathTimerStateTo: false,
                    deathTime: params.time * 60,
                    drainAmountWhileStandingOn: 0
                }
            }
        },
        'grpu': {
            type: [1,[],[28]],
            customMap: (params) => {
                return {
                    changeGrappleStateTo: params.state,       
                    grappleRange: 488,
                    grappleForce: (params.forceMult??1) * 0.003,// manually added
                    grappleFric: 0.97,
                };
            }
        },
        'portal': {
            type: [1,[],[22]],
            customMap: (params) => {
                return {
                    x: params.x * 2,
                    y: params.y * 2,
                    w: params.w * 2,
                    h: params.h * 2,
                    mapName: params.acronym.toLowerCase()
                };
            }
            // {
            //     "x": 3000,
            //     "y": 2600,
            //     "w": 100,
            //     "h": 100,
            //     "type": "portal",
            //     "name": "Planet of Peaceful Beginnings",
            //     "acronym": "PoPB",
            //     "difficulty": "Peaceful",
            //     "difficultyNumber": "0.3",
            //     "musicPath": null,
            //     "renderType": "portal",
            //     "inView": true
            // },
        },
    }

    if(special === 'pols' || special === 'povv' || special === 'poqt'){
        safes = safes.map(p => {
            p.type = "safe";
            return p;
        });
        const aboveSafes = [];
        const belowSafes = [];
        // for(let i = 0; i < obstacles.length; i++){
        //     if(obstacles[i].type.includes('safe')){
        //         safes.push(obstacles[i]);
        //     }
        // }
        // obstacles = obstacles.filter(o => !o.type.includes('safe'));
        for(let i = 0; i < safes.length; i++){
            if(safes[i].renderAbove === true) aboveSafes.push(safes[i]);
            else belowSafes.push(safes[i]);
        }
        obs.push(...aboveSafes);
        obs.unshift(...belowSafes);
        safes.length = 0;
    }

    if(special === 'pols'){
        typeMap.lava = {
            customMap: (params) => {
                if(params.canCollide === false || params.y < 15_000){
                    return {type: [1,[],[1]], boundPlayer: params.canCollide};
                }
                return {type: [1,[],[0,1]], boundPlayer: params.canCollide};
            }
        };
        typeMap["circle-lava"] = {
            customMap: (params) => {
                if(params.y > 15_000){
                    return {type: [0,[],[0,1]], boundPlayer: true};
                }
                return {type: [0,[],[1]], boundPlayer: true};
            },
            radius: 'r',
        },
        typeMap['poly-lava'] = {
            type: [2,[],[0,1]],
            customMap: (params) => {
                const p = {points: []};
                for(let i = 0; i < params.points.length; i++){
                    p.points.push([
                        params.points[i][0]*2,
                        params.points[i][1]*2
                    ])
                }
                if(params.points[0][1] < 15_000){
                    p.type = [2,[],[1]];
                }

                p.boundPlayer = true;
                return p;
            }
        };
        typeMap['lavamove'] = {
            customMap: (params) => {
                const p = {path: []};
                for(let i = 0; i < params.points.length; i++){
                    p.path.push([
                        params.points[i][0]*2,
                        params.points[i][1]*2,
                        params.speed * 2 / 60
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
    
                if(params.collidable && params.y > 15_000) {p.type = [1,[0],[0,1]];}
                else {p.type = [1,[0],[1]];}
                if(params.collidable) p.boundPlayer = true;
                else p.boundPlayer = false;
                return p;
            }
        };
        // typeMap['lava-oval'] = {
        //     type: [0,[],[0,1]],
        //     customMap: (params) => {
        //         if(params.y < 15_000) return {r: Math.min(params.radius, params.radius2)*2, canCollide: true, type: [0,[],[1]]};
        //         return {r: Math.min(params.radius, params.radius2)*2, canCollide: true};
        //     }
        // };
        typeMap['rotate-lava'] = {
            type: [1,[1],[0,1]],
            customMap: (params) => {
                params.x = params.distToPivot + params.pivotX;
                params.y = params.pivotY;
                let p = {};
                if(params.y < 15_000) p.type = [1,[1],[1]];
                p.boundPlayer = true;
                return {
                    ...p,
                    x: params.x * 2 - params.w,
                    y: params.y * 2 - params.h,
                    initialRotation: params.angle * Math.PI / 180,
                    rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
                    pivotX: params.pivotX * 2,
                    pivotY: params.pivotY * 2,
                    boundPlayer: params.canCollide
                };
            }
        };
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
            C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},boundPlayer:${special === 'podc'},sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
                xv${counter} = xv${counter} * -1;
            }
            if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                yv${counter} = yv${counter} * -1;
            }
            }${params.isLava === false ? `,cr:(o)=>{
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.fillStyle = '#7d7d7d';
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }`: ''}});\n
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
            const size = params.size * 2;
            counter++;
            return `
            var xv${counter} = ${params.xv/32};
            var yv${counter} = ${params.yv/32};
            C(1,[3],[1],{w:${size},h:${size},y:${params.y*2},x:${params.x*2},boundPlayer:false,sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            if ((e.pos.x) < ${bounds.x}) {
                xv${counter} = xv${counter} * -1;
                e.pos.x = ${bounds.x};
            } else if(e.pos.x + ${size} > ${bounds.x + bounds.w}){
                xv${counter} = xv${counter} * -1;
                e.pos.x = ${bounds.x + bounds.w} - ${size};
            }
            if ((e.pos.y) < ${bounds.y}) {
                yv${counter} = yv${counter} * -1;
                e.pos.y = ${bounds.y};
            } else if(e.pos.y + ${size} > ${bounds.y + bounds.h}){
                yv${counter} = yv${counter} * -1;
                e.pos.y = ${bounds.y + bounds.h} - ${size};
            }
            },cr:(o)=>{
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.fillStyle = '#ff4000';
                ctx.beginPath();
                ctx.rect(o.pos.x, o.pos.y, ${size}, ${size});
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
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
                speed: params.pSpeed / 33,
                radius: params.pRadius * 2,
                shootDirections: params.shootDirections,
            }
            const c = counter;
            return `
            var xv${c} = ${params.xv/42};
            var yv${c} = ${params.yv/42};
            var shootDirectionIndex${c} = 0;
            var timer${c} = ${params.timer * 1000 / 15};{
            let reusableIndexes = [];
            C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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

                let dyingTimer = 30;

                let index;

                C(0,[3],[1],{r:${projectileParams.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{
                e.pos.y += yv${counter};
                e.pos.x += xv${counter};
                /*delete obstacle*/
                if ((e.pos.x - e.sat.r)+xv${counter}*dyingTimer < ${bounds.x} || e.pos.x + e.sat.r-xv${counter}*dyingTimer > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r)+yv${counter}*dyingTimer < ${bounds.y} || e.pos.y + e.sat.r-yv${counter}*dyingTimer > ${bounds.y + bounds.h}) {
                    // shared.tickFns.push(()=>{
                    //     for(let i = 0; i < obstacles.length; i++){
                    //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
                    //     }
                    //     /*for(let key in shared.idToObs){
                    //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
                    //     }*/
                    // });
                    dyingTimer--;

                    if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                        e.pos.x = -1E9;
                        reusableIndexes.push(index);
                        dyingTimer = -Infinity;
                    }
                }
                },cr:(o)=>{
                    if(dyingTimer < 0) return;

                    if(${special === 'poqt'}){
                        shared.renderBelowFunctions.push(() => {
                            ctx.globalAlpha = dyingTimer / 30;
                            ctx.lineWidth = 4;
                            ctx.strokeStyle = 'black';
                            ctx.fillStyle = '#107691';

                            ctx.beginPath();
                            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();
                            ctx.closePath();
                            ctx.globalAlpha = 1;
                        });
                        return;
                    }

                    ${special === 'posc' ? `
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(7500,4400,1300,3800);
                    ctx.clip();
                    ctx.closePath();
                    ` : ''}

                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;

                    ${special === 'posc' ? `ctx.restore();` : ''}
                }});

                if(reusableIndexes.length === 0){
                    index = obstacles.length-1;
                } else {
                    index = reusableIndexes.pop();
                    obstacles[index] = obstacles.pop(); 
                }
            }

            },cr:(o)=>{
                ctx.lineWidth = 4;
                ctx.strokeStyle = 'black';
                ctx.fillStyle = '#053564';
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }})};
            `;
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
            const maxSwitchTime = special === 'poca' ? params.switchTime*60*2.5 : params.switchTime*60; 
            
            return `
            var xv${counter} = ${params.xv/42*4};
            var yv${counter} = ${params.yv/42*4};
            var switchTime${counter} = ${special === 'povv' ? maxSwitchTime : maxSwitchTime*Math.random()*2};
            var switchState${counter} = true;
            var pos${counter} = {
                x: ${params.x*2}, y: ${params.y*2} 
            }
            C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
                    switchTime${counter} = ${maxSwitchTime};
                    switchState${counter} = !switchState${counter};
                    if(switchState${counter} === true){
                        /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                        e.pos.x = pos${counter}.x;
                        e.pos.y = pos${counter}.y;
                    }
                }
            },cr:(o)=>{
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.fillStyle = '#8304cc';
                ctx.globalAlpha = 1;
                if (switchState${counter} === false) {
                    ctx.globalAlpha = 0.4;
                }
                ctx.beginPath();
                ctx.arc(pos${counter}.x, pos${counter}.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }});
            `
            /*C(0,[3],[0],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
                if(switchState${counter} === true){
                    e.pos.x = -100000;
                } else {
                    e.pos.x = pos${counter}.x;
                    e.pos.y = pos${counter}.y;
                }
            }});*/
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
        enemymove: (params) => {
            const x = params.x;
            const y = params.y;
            const pointTo = params.pointTo;
            const pointOn = params.pointOn;
            const pointsDist = Math.sqrt((pointOn.x-pointTo.x)**2 + (pointOn.y-pointTo.y)**2);
            const distToPointOn = Math.sqrt((x-pointOn.x)**2 + (y-pointOn.y)**2);
            const fractionalCurrentPt = distToPointOn / pointsDist;
            return `C(0,[0],[1],{x:${params.points[0][0]*2},y:${params.points[0][1]*2},r:${params.radius*2},currentPoint:${params.currentPoint + fractionalCurrentPt},path:[${params.points.map(p => `[${p[0]*2},${p[1]*2},${params.speed / 2 * 60 / 1000}]`)}],
            cr:(o)=>{
                ctx.lineWidth = 4;
                ctx.strokeStyle = 'black';
                ctx.fillStyle = '#0f0f0f';
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }});\n`
            // type: [1,[0],[0]],
            // customMap: (params) => {
            //     const p = {path: []};
            //     for(let i = 0; i < params.points.length; i++){
            //         p.path.push([
            //             params.points[i][0]*2,
            //             params.points[i][1]*2,
            //             params.speed * 2 / 60
            //         ])
            //     }

            //     p.currentPoint = params.currentPoint;
            //     p.x = p.path[0][0];
            //     p.y = p.path[0][1];
            //     return p;
            // }
        },
        // {
        //     "type": "enemymove",
        //     "parentId": 32,
        //     "angle": 1.5707963267948966,
        //     "points": [
        //         [
        //             6325,
        //             8975
        //         ],
        //         [
        //             6325,
        //             9125
        //         ]
        //     ],
        //     "speed": 117,
        //     "currentPoint": 0,
        //     "radius": 1,
        //     "x": 6325,
        //     "y": 9036.575000005172,
        //     "renderX": 6325,
        //     "renderY": 9036.575000005172,
        //     "xv": 7.164183775012016e-15,
        //     "yv": 117,
        //     "bound": {
        //         "x": 0,
        //         "y": 0,
        //         "w": 0.001,
        //         "h": 0
        //     },
        //     "pointTo": {
        //         "x": 6325,
        //         "y": 9125
        //     },
        //     "pointOn": {
        //         "x": 6325,
        //         "y": 8975
        //     },
        //     "inView": false
        // },
        flashlight: (params) => {
            const bounds = {
                x: params.bound.x * 2,
                y: params.bound.y * 2,
                w: params.bound.w * 2,
                h: params.bound.h * 2
            };
            if(special !== 'poqt'){
                params.flSize -= params.radius;
                params.flSize *= 1.5;
                params.flSize += params.radius * 1.2;
            } else {
                params.flSize *= 1.18;
            }
            
            counter++;
            if(shared.isServer === true) return `\n`;
            let alwaysOverrideAngle = undefined;
            if(special !== 'povv' && special !== 'poca' && params.flashlightDir !== undefined) alwaysOverrideAngle = params.flashlightDir;
            return `
            var xv${counter} = ${params.xv/33};
            var yv${counter} = ${params.yv/33};
            var base${counter};
            
            C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},boundPlayer:false,sf:(e)=>{
                e.pos.y += yv${counter};
                e.pos.x += xv${counter};
                if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
                    xv${counter} = xv${counter} * -1;
                }
                if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                    yv${counter} = yv${counter} * -1;
                }
            },cr:(o)=>{
                if(o.sat.r < 0.01) return;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.fillStyle = '#2b2b2b';
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }});

            base${counter} = obstacles[obstacles.length-1];

            {let overrideAngle=undefined;let angle=0;C(4,[],[${special === 'povv' && params.y*2 < 800 ? 3 : 1}],{"r":${params.flSize*2}*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base${counter}.pos.x,"y":base${counter}.pos.y,sf:(o,p)=>{
                angle = ${alwaysOverrideAngle !== undefined ? alwaysOverrideAngle : `Math.atan2(yv${counter}, xv${counter});`}

                if(overrideAngle !== undefined) angle = overrideAngle;

                o.startSliceAngle = angle - ${params.flAngle/2};
                o.endSliceAngle = angle + ${params.flAngle/2};

                o.startSliceAngle %= Math.PI * 2;
                o.endSliceAngle %= Math.PI * 2;
                if(o.startSliceAngle < 0) o.startSliceAngle += Math.PI * 2;
                if(o.endSliceAngle < 0) o.endSliceAngle += Math.PI * 2;
                o.startSlice.setPoints([
                    new SAT.Vector(Math.cos(o.startSliceAngle) * o.sat.r, Math.sin(o.startSliceAngle) * o.sat.r),
                    new SAT.Vector(Math.cos(o.startSliceAngle) * o.innerRadius, Math.sin(o.startSliceAngle) * o.innerRadius),
                ]);
                o.endSlice.setPoints([
                    new SAT.Vector(Math.cos(o.endSliceAngle) * o.sat.r, Math.sin(o.endSliceAngle) * o.sat.r),
                    new SAT.Vector(Math.cos(o.endSliceAngle) * o.innerRadius, Math.sin(o.endSliceAngle) * o.innerRadius),
                ])
                o.startSlice.pos = o.endSlice.pos = o.sat.pos;

                o.pos.x = base${counter}.pos.x;
                o.pos.y = base${counter}.pos.y;
            },cr:(o)=>{
                const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, ${params.flSize*1.5});
                    
                grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
                grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
                ctx.fillStyle = grd;

                ctx.beginPath();
                if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, ${params.flSize*1.5}, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
                else ctx.arc(o.pos.x, o.pos.y, ${params.flSize*1.5}, o.startSliceAngle, o.endSliceAngle);
                ctx.lineTo(o.pos.x, o.pos.y);
                ctx.fill();
                ctx.closePath();

                // const minX = 17550; const minY = 3850;
                // const maxX = 18650; const maxY = 4650

                if(!(${special === 'povv'} && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
                    if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                        shared.colors.vignette.holeFunctions.push(()=>{
                            ctx.moveTo(o.pos.x,o.pos.y);
                            ctx.arc(o.pos.x, o.pos.y, ${params.flSize*1.5}, o.startSliceAngle, o.endSliceAngle);
                            ctx.lineTo(o.pos.x, o.pos.y);
                        })
                    }
                } else if(${special !== 'poqt'}) {
                    if(o.pos.x < 18150){
                        overrideAngle = 0;
                    } else {
                        overrideAngle = Math.PI;
                    }
                }
            }})};\n`

            // {
            //     "type": "flashlight",
            //     "angle": 0.30583873606459216,
            //     "flSize": 99,
            //     "flAngle": 0.20943951023931953,
            //     "flashlightDir": 0,
            //     "radius": 1,
            //     "speed": 18,
            //     "x": 6060.411515081583,
            //     "y": 3351.0960804426245,
            //     "renderX": 6060.411515081583,
            //     "renderY": 3351.0960804426245,
            //     "xv": -17.164705506768293,
            //     "yv": 5.419675715937092,
            //     "bound": {
            //         "x": 3700,
            //         "y": 3300,
            //         "w": 2600,
            //         "h": 400
            //     },
            //     "inView": false
            // },
        },
        nokill: (params) => {
            const bounds = {
                x: params.bound.x * 2,
                y: params.bound.y * 2,
                w: params.bound.w * 2,
                h: params.bound.h * 2
            };
            counter++;
            return `
            var xv${counter} = ${params.xv/12};
            var yv${counter} = ${params.yv/12};
            C(0,[3],[0],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},boundPlayer:false,sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w}) {
                xv${counter} = xv${counter} * -1;
                if(e.pos.x - e.sat.r < ${bounds.x}) e.pos.x = ${bounds.x} + e.sat.r;
                else e.pos.x = -e.sat.r + ${bounds.x + bounds.w};
            }
            if ((e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                yv${counter} = yv${counter} * -1;
                if(e.pos.y - e.sat.r < ${bounds.y}) e.pos.x = ${bounds.y} + e.sat.r;
                else e.pos.y = -e.sat.r + ${bounds.y + bounds.h};
            }
            }});\n`
        }
    }

    safes = safes.map(p => {
        p.type = "safe";
        return p;
    });

    texts = texts.map(p => {
        p.type = "text";
        return p;
    });

    obs.push(...safes, ...texts);

    if(special === 'pos'){
        let a = obs.splice(86,1);
        obs.unshift(...a);

        let len = obs.length;
        for(let i = 0; i < len; i++){
            if(obs[i].type.includes('safe')){
                obs.push({
                    ...obs[i],
                    type: obs[i].type.replaceAll('safe', 'vinette'),
                    "ir": 1,
                    "or": 1,
                    "o": 1,
                    "vc": {
                        "r": 255,
                        "g": 255,
                        "b": 255
                    },
                })
            }
        }
    }

    const tmp = [];
    for(let i = 0; i < obs.length; i++){
        if(obs[i].type === 'size'){
            tmp.push(obs[i]);
            obs.splice(i,1);
            i--;
            continue;
        }
    }
    obs.unshift(...tmp);

    const alreadyLogged = {switchLava: true, color: true};

    let str = '';

    if((special === 'povv' || special === 'poqt') && shared.isServer !== true){
        // parent and child ids
        const alreadyLoggedEnemy = {};
        for(let i = 0; i < enemies.length; i++){
            if(enemyTypeMap[enemies[i].type] !== undefined){
                str += '\n' + enemyTypeMap[enemies[i].type](enemies[i]);
                if(enemies[i].parentId !== undefined){
                    str += `\nvar parent${enemies[i].parentId} = obstacles[obstacles.length-1];`
                }
                if(enemies[i].childId !== undefined){
                    str += `\n{
                        let child = obstacles[obstacles.length-1];
                        let parent = parent${enemies[i].childId};

                        C(0,[],[3],{x:-1E9,y:0,r:1,sf:()=>{
                            let childOffsetX = child.topLeft.x; let childOffsetY = child.topLeft.y;
                            childOffsetX = child.pos.x - childOffsetX;
                            childOffsetY = child.pos.y - childOffsetY;
                            let parentMiddleX = parent.topLeft.x + parent.dimensions.x/2;
                            let parentMiddleY = parent.topLeft.y + parent.dimensions.y/2;

                            child.pos.x = parent
                            child.pos.x = parentMiddleX + childOffsetX - child.dimensions.x/2;
                            child.pos.y = parentMiddleY + childOffsetY - child.dimensions.y/2;
                        }})
                    }`
                }
                if(special === 'poqt'){
                    str += `\nobstacles[obstacles.length-1].isEnemy = true;`
                }
            } else if(alreadyLoggedEnemy[enemies[i].type] === undefined){
                alreadyLoggedEnemy[enemies[i].type] = true;
                console.log(`no enemy type def for ${enemies[i].type}`);
            }
        }
        str += '\n';
    } else {
        const alreadyLoggedEnemy = {};
        for(let i = 0; i < enemies.length; i++){
            if(enemyTypeMap[enemies[i].type] !== undefined){
                str += '\n' + enemyTypeMap[enemies[i].type](enemies[i]);
            } else if(alreadyLoggedEnemy[enemies[i].type] === undefined){
                alreadyLoggedEnemy[enemies[i].type] = true;
                console.log(`no enemy type def for ${enemies[i].type}`);
            }
        }
    }

    for(let i = 0; i < obs.length; i++){
        const o = obs[i];
        const typeDef = typeMap[o.type];

        if(o.type === 'roundedcorners' || o.type === 'roundedlava'){
            const circleType = o.type === 'roundedcorners' ? 'circle-normal' : 'circle-lava';
            for(let i = 0; i < o.circles.length; i++){
                if(circleType === 'circle-lava') str += `C(0,[],[1],{boundPlayer:true,x:${o.circles[i].x*2},y:${o.circles[i].y*2},r:${o.circles[i].radius*2}, cr:()=>{}});\n`;
                else {
                    obs.push({
                        x: o.circles[i].x,
                        y: o.circles[i].y,
                        radius: o.circles[i].radius,
                        "renderType": "circle",
                        "inView": false,
                        type: circleType,
                        toRender: false,
                    })
                }
            }
            const rectType = o.type === 'roundedcorners' ? 'normal' : 'lava';
            for(let i = 0; i < o.rects.length; i++){
                if(rectType === 'lava') str += `C(1,[],[1],{boundPlayer:true,x:${o.rects[i].x*2},y:${o.rects[i].y*2},w:${o.rects[i].w*2},h:${o.rects[i].h*2}, cr:()=>{}});\n`;
                else {
                    obs.push({
                        x: o.rects[i].x,
                        y: o.rects[i].y,
                        w: o.rects[i].w,
                        h: o.rects[i].h,
                        type: rectType,
                        toRender: false,
                    })
                }
            }

            if(circleType === 'circle-lava'){
                str += `C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
                    ctx.beginPath();
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#c70000';
                    ctx.roundRect(${o.x*2},${o.y*2},${o.w*2},${o.h*2},${o.roundRadius*2});
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }})\n`
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
                const player = shared.players[shared.selfId];
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
                    timer${counter} -= 1 / 60;
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
            continue;
        } else if(o.type === 'switchnormal'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `var timer${counter} = ${o.timer}; var state${counter} =${o.state}; var x${counter} = ${o.x}; 
            C(1,[],[0],{h:${o.h},w:${o.w},y:${o.y},x:${o.state === true ? o.x : -1E9},sf:(e)=>{
                    timer${counter} -= 1 / 60;
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
                    ctx.fillStyle = colors.tile;
                    ctx.rect(x${counter}, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });\n`;
            counter++;
            continue;
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
            str += `C(1,[],[20],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.tile" : '"' + (o.hex ?? o.color) + '"'};
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
            str += `var morphTriggered${o.morphId} = false;var morphOffset${o.morphId} = Math.random() * Math.PI * 2;
            C(1,[],[${special === 'pols' ? '3':'0'}],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
                cr:(e)=>{
                    if(morphTriggered${o.morphId} === false){
                        e.pos.x = ${o.x};
                    }
                    else {
                        ${special === 'pols' ? 'ctx.globalAlpha = 0.3;' : `
                        e.pos.x = -1E9;
                        return;
                        `}
                    }
                    ctx.beginPath();
                    let middleX = e.topLeft.x + e.dimensions.x/2;
                    let middleY = e.topLeft.y + e.dimensions.y/2;
                    ctx.translate(middleX, middleY);
                    ctx.fillStyle = colors.tile;
                    for(let i = 0; i < 100; i++){
                        const t = Math.PI * 2 * i / 100;
                        const a = Math.sin(Date.now() / 1000 + morphOffset${o.morphId}) * 8;

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
                    ctx.globalAlpha = 1;
                }${special === 'pols' ? `,ef:(p,res,o)=>{if(!morphTriggered${o.morphId}){p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y;}}`: ''}
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
        } else if(o.type === 'morphmove' || o.type === 'morphlavamove'){
            o.x = o.points[o.currentPoint][0]*2;
            o.y = o.points[o.currentPoint][1]*2;
            o.w *= 2; o.h *= 2;
            str += `var morphTriggered${o.morphId} = false;var morphOffset${o.morphId} = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = ${o.currentPoint};
            C(1,[0],[${o.type === 'morphmove' ? 0:1}],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},${o.type ==='morphlavamove'?`boundPlayer:${o.collidable},`:''}
                path: [${o.points.map(p => `[${p[0]*2},${p[1]*2},0]`)}],
                currentPoint: ${o.currentPoint},
                sf:(o,p) => {
                    ${(o.type === 'morphlavamove' && o.x === 44200 && o.y === 19100) ? `
                        if(p.pos.y > 18800){
                            morphTriggered${o.morphId} = false;

                            lastCurrentPoint = -1;

                            o.currentPoint = 0;
                            o.pointOn = o.path[0];
                            o.pointTo = o.path[1];
                            moveActive = false;
                            o.pos.x = o.path[o.currentPoint][0];
                            o.pos.y = o.path[o.currentPoint][1];

                            for(let i = 0; i < o.path.length; i++){
                                o.path[i][2] = 0;
                            }

                            o.speed = o.pointOn[2];
                            let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                            o.xv = Math.cos(angle) * o.speed;
                            o.yv = Math.sin(angle) * o.speed;
                            o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
                        }   
                    `: ""}
                    o.morphMoveId = ${o.morphId};
                    if((moveActive === false && morphTriggered${o.morphId} !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered${o.morphId} === false)){
                        ${special === 'poqt' && o.x > 48000 && o.x < 51000 ? `morphsStillMoving${o.morphId}++;`: ''}
                        moveActive = true;
                        lastMorphTriggered = morphTriggered${o.morphId};

                        for(let i = 0; i < o.path.length; i++){
                            o.path[i][2] = ${o.speed/30};
                        }

                        o.speed = o.pointOn[2];
                        let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                        o.xv = Math.cos(angle) * o.speed;
                        o.yv = Math.sin(angle) * o.speed;
                        o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
                    }

                    if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                        lastMorphTriggered = ${special === 'poqt' && o.x > 48000 && o.x < 51000 ? "" : `morphTriggered${o.morphId} =`} false;
                        ${
                            special === 'poqt' && o.x > 48000 && o.x < 51000 ? `o.waitUntilTrue=true;morphsStillMoving${o.morphId}--;
                            if(morphsStillMoving${o.morphId} === 0) {
                                morphTriggered${o.morphId}=false;
                                for(let i = 0; i < obstacles.length; i++){
                                    if(obstacles[i].morphMoveId === o.morphMoveId){
                                        obstacles[i].waitUntilTrue = false;
                                    }
                                }

                                if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                                    p.pos.x = 48700;
                                    p.pos.y = 19150; 
                                }
                            }
                        ` : ""}
                        lastCurrentPoint = o.currentPoint;
                        moveActive = false;
                        o.pos.x = o.path[o.currentPoint][0];
                        o.pos.y = o.path[o.currentPoint][1];

                        for(let i = 0; i < o.path.length; i++){
                            o.path[i][2] = 0;
                        }

                        o.speed = o.pointOn[2];
                        let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                        o.xv = Math.cos(angle) * o.speed;
                        o.yv = Math.sin(angle) * o.speed;
                        o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
                    }
                }
            });obstacles[obstacles.length-1].waitUntilTrue = false;};\n`;
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
            str += `${special === 'poqt' && o.x > 48000 && o.x < 51000 ? `var morphsStillMoving${o.morphId}=0;`: ''}var morphTriggered${o.morphId} = false;
            C(1,[],[${special === 'poqt' ? 3 : 5}],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
                cr:(e)=>{
                    ctx.globalAlpha = 0.8;
                    if (morphTriggered${o.morphId} === true) {
                        ctx.globalAlpha = 0.3;
                    }

                    ctx.strokeStyle = ctx.fillStyle = 'white';

                    ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                    ctx.globalAlpha *= 1 / 0.8;
                    ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);


                    ctx.fillStyle = colors.tile; //'rgb(12, 12, 12)'//"#c4c4c4"//'#0652cc';
                    ctx.fillRect(
                        e.topLeft.x + 15,
                        e.topLeft.y + 15,
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
        } else if(o.type === 'morphbuttontimed'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `var morphTriggered${o.morphId} = false;{let timeActive = false; let time=${o.timer*60};let maxTime = ${o.timer*60};
            C(1,[],[${special === 'poqt' ? 3 : 5}],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
                cr:(e)=>{
                    ctx.globalAlpha = 0.8;
                    if (morphTriggered${o.morphId} === true) {
                        ctx.globalAlpha = 0.3;
                    }

                    ctx.strokeStyle = 'white';
                    ctx.fillStyle = '#a229ff';

                    ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                    ctx.globalAlpha *= 1 / 0.8;

                    ctx.fillStyle = colors.tile;
                    ctx.fillRect(
                        e.topLeft.x + 15,
                        e.topLeft.y + 15,
                        e.dimensions.x - 30,
                        e.dimensions.y - 30
                    );

                    ctx.globalAlpha = 1;
                    
                    if(timeActive === true){
                        ctx.fillStyle = 'white'
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.font = '40px Inter';
                        ctx.fillText(Math.round(time/60),e.topLeft.x + e.dimensions.x/2, e.topLeft.y + e.dimensions.y/2);
                    }

                    ctx.globalAlpha = 1;
                },
                sf:()=>{
                    if(timeActive === false) return;
                    
                    time--;

                    if(time < 0){
                        ${special === 'poqt' && o.x > 48000 && o.x < 51000 ? `return;`: ""}
                        morphTriggered${o.morphId} = false;
                        time = maxTime;
                        timeActive = false;
                    }
                },
                ef:(e) => {
                    if(timeActive === true) return;
                    morphTriggered${o.morphId} = true;
                    timeActive = true;
                    time = maxTime;
                }
            });}\n`;
            // {
            //     "x": 1700,
            //     "y": 2100,
            //     "w": 50,
            //     "h": 50,
            //     "morphId": 0,
            //     "type": "morphbuttontimed",
            //     "active": true,
            //     "time": 4,
            //     "timer": 4,
            //     "inView": false
            // },
            continue;
        } else if(o.type === 'lava-oval' || o.type === 'oval'){
            o.x *= 2; o.y *= 2;
            let pts = [];
            const x = o.x;
            const y = o.y;
            const r1 = Math.max(0.001,o.radius * 2);
            const r2 = Math.max(0.001,o.radius2 * 2);
            for(let i = 0; i < 10; i++){
                const angle = i / 10 * Math.PI * 2;
                pts.push([x + Math.cos(angle) * r1, y + Math.sin(angle) * r2]);
            }

            if(o.type === 'oval'){
                str += `C(2,[],[0],{x:0,y:0,points:[${pts.map(a => `[${a[0]},${a[1]}]`)}],cr:(o)=>{
                    ctx.beginPath();
                    ctx.fillStyle = colors.tile;
                    ctx.ellipse(${x},${y},${r1},${r2},0,0,Math.PI*2);
                    ctx.fill();
                    ctx.closePath();
                }});\n`;
            } else {
                str += `C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[${pts.map(a => `[${a[0]},${a[1]}]`)}],cr:(o)=>{
                    ctx.beginPath();
                    ctx.fillStyle = '#c70000';
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = 4;
                    ctx.ellipse(${x},${y},${r1},${r2},0,0,Math.PI*2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }});\n`;
            }
            
            continue;
        } else if(o.specialLavaPOLS === true){
            str += `C(1,[0],[1],{type:[1,[0],[1]],x:2800,y:22800,w:300,h:285,points:[[1400,11400],[1100,11400]],speed:250,currentPoint:1.7222222222215047,collidable:true,pointOn:{"x":1100,"y":11400},pointTo:{"x":1400,"y":11400},xv:250,yv:0,inView:false,specialLavaPOLS:true,path:[[2800,22800,8.333333333333334],[2200,22800,8.333333333333334]],boundPlayer:true,cr:(o)=>{
                ctx.beginPath();
                ctx.fillStyle = '#c70000';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.rect(o.pos.x, o.pos.y, o.dimensions.x, 300);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }});\n`
            continue;
        } else if(o.type === 'fulldeath'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `C(1,[],[3],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},cr:(o)=>{
                ctx.fillStyle = '#9e0000';
                ctx.globalAlpha = 0.08;
                ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);

                if(o.dimensions.x <= 0) return;

                ctx.globalAlpha = 0.6;
                ctx.setLineDash([30, 80]);
                ctx.lineDashOffset = -window.frames*(60/1000) * 150;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.lineCap = 'round';
                ctx.strokeRect(
                    o.pos.x + 4,
                    o.pos.y + 4,
                    o.dimensions.x - 8,
                    o.dimensions.y - 8
                );
                ctx.setLineDash([]);
                ctx.globalAlpha = 1;
            }});\n`;
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
        } else if(o.type === 'circle-sentry'){
            o.x *= 2; o.y *= 2; o.r *= 2;
            o.laser.x *= 2; o.laser.y *= 2; o.laser.w *= 2; o.laser.h *= 2;
            str += `C(1,[5],[1],{h:${o.laser.h},w:${o.laser.w},y:${o.y-o.laser.h/2},x:${o.x-o.laser.w/2},
                boundPlayer: ${o.overrideCanCollide !== undefined ? false : true},
                restAngles: [${o.rest*Math.PI/180}, ${o.rest*Math.PI/180+Math.PI}],
                toRest: true,
                homingRotateSpeed: ${o.speed / 86 / 60 * (special === 'povv' ? 0.888 : 1)},
                detectionRadius: ${Math.sqrt(o.laser.w**2+o.laser.h**2)/2},
                spokeAngles: [0, Math.PI],
                pivotX: ${o.x},
                pivotY: ${o.y}
            });
            C(0,[],[0],{x:${o.x},y:${o.y},r:${o.r},cr:(e)=>{
                ctx.fillStyle = shared.colors.tile;
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
        } else if(o.type === 'tptrap'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            counter++;
    
            str += `C(1,[],[17],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:${o.maxTime*60},
                sf:(e)=>{
                    if(e.timeTrapTime <= 0){
                        players[selfId].pos.x = ${o.tpx*2};
                        players[selfId].pos.y = ${o.tpy*2};
                    }
                },
                cr:(o)=>{
                    let middleX = o.topLeft.x + o.dimensions.x/2;
                    let middleY = o.topLeft.y + o.dimensions.y/2;

                    let grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (o.dimensions.x + o.dimensions.y)/3));

                    grd.addColorStop(0, "rgba(56, 171, 48,0)");
                    grd.addColorStop(1, "rgba(56, 171, 48,1)");

                    ctx.fillStyle = grd;
                    ctx.globalAlpha = Math.max(0.24, 1 - o.timeTrapTime / o.timeTrapMaxTime);

                    ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
                    
                    ctx.globalAlpha = Math.max(0.3, o.timeTrapTime / o.timeTrapMaxTime / 3);
                    ctx.fillStyle = 'white';
                    ctx.font = Math.min(o.dimensions.x, o.dimensions.y)/2 + "px Inter";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    ctx.fillText(o.timeTrapToShowTenth === true ? Math.round(o.timeTrapTime/60 * 10) / 10 : Math.round(o.timeTrapTime/60), middleX, middleY);
                    ctx.globalAlpha = 1;

                    ${(special === 'povv' || special === 'posc') ? `
                        if(o.timeTrapTime === o.timeTrapMaxTime){ return; }
                        const v = shared.colors.vignette;

                        const interpolate = (s,e,t) => {return (1-t)*s + e*t};
                        let t = Math.sqrt(Math.max(0,o.timeTrapTime) / o.timeTrapMaxTime);
                        let r = interpolate(56,0,t);
                        let g = interpolate(171,0,t);
                        let b = interpolate(48,0,t);
                        v.inner.r = r;
                        v.inner.g = g;
                        v.inner.b = b;
                        v.inner.size = 0;
                        v.inner.opacity = 0;

                        v.outer.r = r;
                        v.outer.g = g;
                        v.outer.b = b;
                        v.outer.size = interpolate(0.4,0.6,t);
                        v.outer.opacity = 1;
                    `: ''}
                }
            });`;
            continue;
        } else if(o.type === 'grapplepoint' || o.type === 'movinggrapplepoint'){
            o.x *= 2; o.y *= 2;
            if(o.type === 'grapplepoint'){
                // {
                //     "x": 1100,
                //     "y": 6050,
                //     "type": "grapplepoint",
                //     "renderType": "grapple",
                //     "inView": false
                // },
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
                // {
                //     "x": 8091.247854069336,
                //     "y": 6342.504291861353,
                //     "w": 0,
                //     "h": 0,
                //     "type": "movinggrapplepoint",
                //     "points": [
                //         [
                //             8050,
                //             6325
                //         ],
                //         [
                //             8075,
                //             6375
                //         ],
                //         [
                //             8100,
                //             6325
                //         ]
                //     ],
                //     "speed": 150,
                //     "currentPoint": 1,
                //     "alongWith": false,
                //     "renderType": "grapple",
                //     "pointOn": {
                //         "x": 8075,
                //         "y": 6375
                //     },
                //     "pointTo": {
                //         "x": 8100,
                //         "y": 6325
                //     },
                //     "xv": 67.0820393249937,
                //     "yv": -134.16407864998737,
                //     "inView": false
                // },
                const params = o;
                const p = {path: '['};
                for(let i = 0; i < params.points.length; i++){
                    p.path += `[${params.points[i][0]*2},[${params.points[i][1]*2}],${params.speed * 2 / 60}],`;
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
        } else if(o.type === 'typing'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            // {
            //     "x": 0,
            //     "y": 2250,
            //     "w": 250,
            //     "h": 250,
            //     "type": "typing",
            //     "text": "Relax. This planet will only get a little bit harder.",
            //     "active": true,
            //     "currentChar": 0,
            //     "inView": false
            // },

            str += `var typingVinette${counter};
            C(1,[],[24],{x:${o.x},y:${o.y},w: ${o.w},h:${o.h},innerR: 0, innerG: 0, innerB: 0, innerSize: 0, innerOpacity: 0, outerR: 0, outerG: 0, outerB: 0, outerSize: 0.42, outerOpacity: 0.9});typingVinette${counter}=shared.obstacles[shared.obstacles.length-1];\n`;
            str += `{let completed = false;let active = false;let curChar = 0;let text="${o.text}";let freezeX, freezeY;
            C(1,[],[3],{"x":${o.x},"y":${o.y},w:${o.w},h:${o.h},ef:(p)=>{
                if(completed === true) return;
                if(active === true) {
                    p.pos.x = freezeX;
                    p.pos.y = freezeY;
                    return;
                }
                active = true;

                freezeX = p.pos.x;
                freezeY = p.pos.y;

                let oldKeyDown = shared.onkeydown;
                let oldKeyUp = shared.onkeyup;

                for(let key in shared.input){shared.input[key] = false;}

                shared.onkeyup = () => {};
                shared.onkeydown = (e) => {
                    if(e.type !== 'keydown') return;
                    if(text[curChar] === e.key) curChar++;
                    if(curChar >= text.length) {shared.onkeydown = oldKeyDown; shared.onkeyup = oldKeyUp; completed = true; active = false;typingVinette${counter}.pos.x = -1E9;}
                }
            },cr:(o)=>{
                if (completed === true) ctx.globalAlpha = 0.2;
                ctx.fillStyle = 'white';
                ctx.font = (o.dimensions.x / 10) + "px Inter";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                const aheadChar = Math.min(
                    text.length,
                    curChar + 15
                );
                const textToDisplay = text.slice(curChar, aheadChar);
                ctx.fillText(
                    textToDisplay,
                    ${o.x+o.w/2}, ${o.y+o.h/2},
                );
                ctx.fillStyle = 'black';
                ctx.globalAlpha = 0.17;
                if (completed === true) ctx.globalAlpha = 0.05;

                // ctx.beginPath();
                // for(let i = 0; i < o.sat.points.length; i++){
                //     ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
                // }
                // ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
                // ctx.fill();
                // ctx.closePath();
                ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);

                ctx.globalAlpha = 1;
            }})};\n`;
            counter++;
            continue;
        } else if(o.type === 'pushbox'){
            // {
            //     "x": 8600,
            //     "y": 1800,
            //     "w": 50,
            //     "h": 50,
            //     "type": "pushbox",
            //     "weight": 22,
            //     "initX": 8600,
            //     "initY": 1800,
            //     "pusherId": 0.00603314892176221,
            //     "resetId": -1,
            //     "lastPos": {
            //         "x": 8600,
            //         "y": 1800
            //     },
            //     "inView": false
            // },
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            let weightPercent = o.weight / 100;
            if(special === 'posc') weightPercent = 0.6;
            str += `C(1,[],[3],{w:${o.w},h:${o.h},"x":${o.x},"y":${o.y},ef:(p, res, o)=>{
                p.pos.x += res.overlapV.x * ${weightPercent};
                p.pos.y += res.overlapV.y * ${weightPercent};
                o.pos.x -= res.overlapV.x * ${1-weightPercent};
                o.pos.y -= res.overlapV.y * ${1-weightPercent};

                ${special === 'posc' ? 'o.pos.x = Math.min(o.pos.x, 17500);' : ''}
            },cr:(e)=>{
                ctx.lineJoin = 'miter';
                ctx.fillStyle = shared.colors.tile;
                ctx.fillRect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);

                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 10;
                ctx.strokeStyle = 'white';
                ctx.strokeRect(e.pos.x+8, e.pos.y+8, e.dimensions.x-8*2, e.dimensions.y-8*2);
                ctx.globalAlpha = 1;
                ctx.lineJoin = 'round';
            }});\n`,
            counter++;
            continue;
        } else if(o.type === 'stopPlatJump' && special === 'poca'){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `C(1,[],[3],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},cr:()=>{},ef:(p)=>{
                p.touchingNormalIndexes.length = 0;
                p.lastTouchingNormalIndexes.length = 0;
                obstacles[140].canJump = false;
                obstacles[140].midairStoredJump = false;
            }})\n`;
            continue;
        } else if(special === 'poqt' && o.type === 'normal' && o.canJump === false && o.x > 46750/2 && o.x < 50350/2){
            o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
            str += `C(1,[],[3],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},cr:(o)=>{
                ctx.fillStyle = colors.tile;
                ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
            },ef:(p,res,o)=>{
                p.pos.x += res.overlapV.x;
                p.pos.y += res.overlapV.y;
            }});\n`;
            continue;
        }

        if(special === 'poqt' && o.type === 'invpu'){
            // powerup obj
            str += `var inv${i}=0;C(1,[],[3],{cr:()=>{},x:${o.x*2},y:${o.y*2},w:${o.w*2},h:${o.h*2},ef:()=>{
                inv${i} = ${o.maxAmount * 60};
            }});\n`
        }

        if(special === 'povv' || special === 'posc' || special === 'poqt' || special === 'posh'){
            if(special === 'poqt' && o.x < 2000 && o.y < 1200 && (o.type === 'door' || o.type === 'button')){
                if(o.type === 'door'){
                    o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
                    let resetX = o.x;
                    str += `shared.morphsTriggered[${o.id}]=false;var x${o.id}=${o.x};C(1,[],[0],{y:${o.y},x:${o.x},w:${o.w},h:${o.h},
                        cr:(o)=>{
                            ctx.beginPath();
                            ctx.rect(x${o.id}, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10
    
                            ctx.globalAlpha = 1;
                            if(shared.morphsTriggered[${o.id}] === true){
                                o.pos.x = -1E9;
                                ctx.globalAlpha = 0.3;
                            } else {
                                o.pos.x = ${resetX};
                            }
                            ctx.fillStyle = '#787878';
    
                            ctx.fill();
    
                            ctx.strokeStyle = 'rgb(0, 0, 0)';
                            ctx.lineWidth = 8;
                            ctx.globalAlpha = shared.morphsTriggered[${o.id}] === true ? 0.5 : 1;
    
                            ctx.stroke();
                            ctx.closePath();
                            ctx.globalAlpha = 1;// maybe a light effect like mirror?
                        }
                    }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[${o.id}] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};\n`;
                    continue;
                } else {
                    o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
                    str += `shared.morphsTriggered[${o.id}]=false;C(1,[],[3],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
                        cr:(e)=>{
                            ctx.globalAlpha = 0.8;
                            if (shared.morphsTriggered[${o.id}] === true) {
                                ctx.globalAlpha = 0.3;
                            }
    
                            ctx.strokeStyle = ctx.fillStyle = 'white';
    
                            ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                            ctx.globalAlpha *= 1 / 0.8;
                            ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
    
                            ctx.fillStyle = colors.tile;
                            ctx.fillRect(
                                e.topLeft.x + 15,
                                e.topLeft.y + 15,
                                e.dimensions.x - 30,
                                e.dimensions.y - 30
                            );
    
                            ctx.globalAlpha = 1;
                        },
                        ef:(e) => {
                            shared.morphsTriggered[${o.id}] = true;
                        },
                        sf:(o,p)=>{
                            if(p.pos.x < 250 && p.pos.y < 450){
                                shared.morphsTriggered[${o.id}]=false;
                            }    
                        }
                    }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[${o.id}] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};\n`
                }
                continue;
            }
            if(o.type === 'door'){
                o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
                str += `shared.morphsTriggered[${o.id}]=false;var x${o.id}=${o.x};C(1,[],[0],{y:${o.y},x:${o.x},w:${o.w},h:${o.h},
                    cr:(o)=>{
                        ctx.beginPath();
                        ctx.rect(x${o.id}, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                        ctx.globalAlpha = 1;
                        if(shared.morphsTriggered[${o.id}] === true){
                            o.pos.x = -1E9;
                            ctx.globalAlpha = 0.3;
                        }
                        ctx.fillStyle = '#787878';

                        ctx.fill();

                        ctx.strokeStyle = 'rgb(0, 0, 0)';
                        ctx.lineWidth = 8;
                        ctx.globalAlpha = shared.morphsTriggered[${o.id}] === true ? 0.5 : 1;

                        ctx.stroke();
                        ctx.closePath();
                        ctx.globalAlpha = 1;// maybe a light effect like mirror?
                    }
                }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[${o.id}] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};\n`;
                continue;
            } else if(o.type === 'button'){
                o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
                str += `shared.morphsTriggered[${o.id}]=false;C(1,[],[3],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
                    cr:(e)=>{
                        ctx.globalAlpha = 0.8;
                        if (shared.morphsTriggered[${o.id}] === true) {
                            ctx.globalAlpha = 0.3;
                        }

                        ctx.strokeStyle = ctx.fillStyle = 'white';

                        ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                        ctx.globalAlpha *= 1 / 0.8;
                        ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);

                        ctx.fillStyle = colors.tile;
                        ctx.fillRect(
                            e.topLeft.x + 15,
                            e.topLeft.y + 15,
                            e.dimensions.x - 30,
                            e.dimensions.y - 30
                        );

                        ctx.globalAlpha = 1;
                    },
                    ef:(e) => {
                        shared.morphsTriggered[${o.id}] = true;
                    }
                }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[${o.id}] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};\n`
                continue;
            } else if(o.type === 'gun'){
                // o.state
                o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
                str += `C(1,[],[3],{x:${o.x},y:${o.y},w:${o.w},h:${o.h},cr:(o)=>{
                    ctx.fillStyle = "${o.state === true ? '#bd8b0d' : '#6e7175'}";
                    ctx.setLineDash([30, 80]);
                    ctx.lineDashOffset = Math.sin(window.frames/60 * 0.6) * 350;
                    ctx.strokeStyle = ctx.fillStyle;
                    ctx.lineWidth = 4;
                    ctx.lineCap = 'round';
                    ctx.globalAlpha = 0.3;
                    ctx.fillRect(
                        o.pos.x,
                        o.pos.y,
                        o.dimensions.x,
                        o.dimensions.y
                    );
                    ctx.globalAlpha = 1;
                    ctx.strokeRect(
                        o.pos.x + 4,
                        o.pos.y + 4,
                        o.dimensions.x - 8,
                        o.dimensions.y - 8
                    );
                    ctx.setLineDash([]);
                },ef:(p,res,o)=>{
                    shared.gunActive = ${o.state};
                }});\n`;
                continue;
            } else if(o.type === 'zone'){// TEMP PLEASE REMOVE
                if(shared.zones === undefined) shared.zones = [];
                shared.zones.push({
                    x: o.x*2 + o.w,
                    y: o.y*2 + o.h,
                    zone: o.value
                })
                continue;
            }
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
    console.log(str);
    // return str;
}