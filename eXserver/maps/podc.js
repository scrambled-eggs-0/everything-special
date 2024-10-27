var counter = 9000;// add 1000 for every new map so color changers dont conflict
// var lastRotAngle = 0;
var obs = []
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
                ctx.strokeStyle = ctx.fillStyle = ${o.type === 'trans' ? "colors.background" : (o.hex ?? o.color)};
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

mapDimensions.x=8000;
mapDimensions.y=20000;

spawnPosition.x=100;
spawnPosition.y=100;
window.respawnPlayer();
colors.background='#141f52'; colors.tile='#414381';