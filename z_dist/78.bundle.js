"use strict";(self.webpackChunkomniserver=self.webpackChunkomniserver||[]).push([[78],{78:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function importMap(str){obstacles.length=0;const o=JSON.parse(str);let{arena,safes,spawns,playerSpawn,tileColor,bgColor,texts}=o;mapDimensions.x=2*arena.width,mapDimensions.y=2*arena.height,spawnPosition.x=2*playerSpawn.x,spawnPosition.y=2*playerSpawn.y,shared.respawnPlayer(),colors.background=tileColor,colors.tile=bgColor;let counter=0,obs=o.obstacles,enemies=o.enemy;safes=safes.map((e=>(e.type="safe",e))),texts=texts.map((e=>(e.type="text",e)));const typeMap={normal:{type:[1,[],[0]]},grav:{type:[1,[],[13]],customMap:e=>{const t={};return"right"===e.direction?t.conveyorAngle=0:"down"===e.direction?t.conveyorAngle=90:"left"===e.direction?t.conveyorAngle=180:t.conveyorAngle=270,t.conveyorFriction=.8,t.conveyorAngleRotateSpeed=0,t.conveyorForce=e.force/1e4*7.08*5/16.66,t}},"circle-normal":{type:[0,[],[0]],radius:"r"},"circle-lava":{type:[0,[],[1]],radius:"r",customMap:e=>({boundPlayer:!0})},"circle-tp":{type:[0,[],[12]],customMap:e=>({tpx:2*e.tpx,tpy:2*e.tpy})},lava:{type:[1,[],[1]],customMap:e=>({boundPlayer:e.canCollide})},poly:{type:[2,[],[0]],customMap:e=>{const t={points:[]};for(let n=0;n<e.points.length;n++)t.points.push([2*e.points[n][0],2*e.points[n][1]]);return t}},"poly-tp":{type:[2,[],[12]],customMap:e=>{const t={points:[]};for(let n=0;n<e.points.length;n++)t.points.push([2*e.points[n][0],2*e.points[n][1]]);return t.tpx=2*e.tpx,t.tpy=2*e.tpy,t}},"poly-safe":{type:[2,[],[11]],customMap:e=>{const t={points:[]};for(let n=0;n<e.points.length;n++)t.points.push([2*e.points[n][0],2*e.points[n][1]]);return t}},"poly-vinette":{type:[2,[],[24]],customMap:e=>{const t={points:[],innerR:e.vc.r,innerG:e.vc.g,innerB:e.vc.b,innerSize:e.ir,outerR:e.vc.r,outerG:e.vc.g,outerB:e.vc.b,outerSize:e.or,innerOpacity:0,outerOpacity:e.o};for(let n=0;n<e.points.length;n++)t.points.push([2*e.points[n][0],2*e.points[n][1]]);return t}},"poly-lava":{type:[2,[],[1]],customMap:e=>{const t={points:[]};for(let n=0;n<e.points.length;n++)t.points.push([2*e.points[n][0],2*e.points[n][1]]);return t.boundPlayer=!0,t}},move:{type:[1,[0],[0]],customMap:e=>{const t={path:[]};for(let n=0;n<e.points.length;n++)t.path.push([2*e.points[n][0],2*e.points[n][1],2*e.speed/1e3]);t.currentPoint=e.currentPoint;const n=t.path[t.currentPoint];let o=t.currentPoint+1;o===t.path.length&&(o=0);const r=t.path[o],s=Math.sqrt((r[0]-n[0])**2+(r[1]-n[1])**2),i=Math.sqrt((2*e.x-n[0])**2+(2*e.y-n[1])**2);return t.currentPoint+=i/s,t.x=t.path[0][0],t.y=t.path[0][1],t}},lavamove:{type:[1,[0],[1]],customMap:e=>{const t={path:[]};for(let n=0;n<e.points.length;n++)t.path.push([2*e.points[n][0],2*e.points[n][1],2*e.speed/1e3]);t.currentPoint=e.currentPoint;const n=t.path[t.currentPoint];let o=t.currentPoint+1;o===t.path.length&&(o=0);const r=t.path[o],s=Math.sqrt((r[0]-n[0])**2+(r[1]-n[1])**2),i=Math.sqrt((2*e.x-n[0])**2+(2*e.y-n[1])**2);return t.currentPoint+=i/s,t.x=t.path[0][0],t.y=t.path[0][1],t.boundPlayer=!1,e.collidable&&(t.boundPlayer=!0),t}},tornado:{type:[1,[],[23]],spinRadius:"tornadoStrength"},vinette:{type:[1,[],[24]],customMap:e=>({innerR:e.vc.r,innerG:e.vc.g,innerB:e.vc.b,innerSize:e.ir,outerR:e.vc.r,outerG:e.vc.g,outerB:e.vc.b,outerSize:e.or,innerOpacity:0,outerOpacity:e.o})},tpmove:{type:[1,[0],[12]],customMap:e=>{const t={path:[]};for(let n=0;n<e.points.length;n++)t.path.push([2*e.points[n][0],2*e.points[n][1],2*e.speed/1e3]);return t.currentPoint=e.currentPoint,t.x=t.path[0][0],t.y=t.path[0][1],t.tpx=2*e.tpx,t.tpy=2*e.tpy,t}},movingsafe:{type:[1,[0],[11]],customMap:e=>{const t={path:[]};for(let n=0;n<e.points.length;n++)t.path.push([2*e.points[n][0],2*e.points[n][1],2*e.speed/1e3]);return t.currentPoint=e.currentPoint,t.x=t.path[0][0],t.y=t.path[0][1],t}},movingvinette:{type:[1,[0],[24]],customMap:e=>{const t={path:[],innerR:e.vc.r,innerG:e.vc.g,innerB:e.vc.b,innerSize:e.ir,outerR:e.vc.r,outerG:e.vc.g,outerB:e.vc.b,outerSize:e.or,innerOpacity:0,outerOpacity:e.o};for(let n=0;n<e.points.length;n++)t.path.push([2*e.points[n][0],2*e.points[n][1],2*e.speed/1e3]);return t.currentPoint=e.currentPoint,t.x=t.path[0][0],t.y=t.path[0][1],t}},timetrap:{type:[1,[],[17]],customMap:e=>{const t={timeTrapToShowTenth:!1,timeTrapToKill:!0,timeTrapRecoverySpeed:e.cdmult};return t.timeTrapMaxTime=1e3*e.maxTime,t}},oval:{type:[0,[],[0]],customMap:e=>({r:2*Math.min(e.radius,e.radius2)})},"lava-oval":{type:[0,[],[1]],customMap:e=>({r:2*Math.min(e.radius,e.radius2),boundPlayer:!0})},safe:{type:[1,[],[11]]},"circle-safe":{type:[0,[],[11]],r:"r"},"circle-vinette":{type:[0,[],[24]],customMap:e=>({innerR:e.vc.r,innerG:e.vc.g,innerB:e.vc.b,innerSize:e.ir,outerR:e.vc.r,outerG:e.vc.g,outerB:e.vc.b,outerSize:e.or,innerOpacity:0,outerOpacity:e.o,r:e.r??e.radius})},"circle-coin":{radius:"r",type:[0,[],[7]],customMap:e=>({color:"#d5d612",coinAmount:1})},bounce:{type:[1,[],[2]],customMap:e=>({bounciness:e.effect/3/10,decay:.5})},"rotate-normal":{type:[1,[1],[0]],customMap:e=>(e.x=e.distToPivot+e.pivotX,e.y=e.pivotY,{x:2*e.x-e.w,y:2*e.y-e.h,initialRotation:180*e.angle/Math.PI,rotateSpeed:e.rotateSpeed/360/220*1.36,pivotX:2*e.pivotX,pivotY:2*e.pivotY})},"rotate-lava":{type:[1,[1],[1]],customMap:e=>(e.x=e.distToPivot+e.pivotX,e.y=e.pivotY,{x:2*e.x-e.w,y:2*e.y-e.h,initialRotation:e.angle,rotateSpeed:e.rotateSpeed/360/220*1.36,pivotX:2*e.pivotX,pivotY:2*e.pivotY,boundPlayer:e.canCollide})},rotatingsafe:{type:[1,[1],[11]],customMap:e=>(e.x=e.distToPivot+e.pivotX,e.y=e.pivotY,{x:2*e.x-e.w,y:2*e.y-e.h,initialRotation:e.angle,rotateSpeed:e.rotateSpeed/360/220*1.36,pivotX:2*e.pivotX,pivotY:2*e.pivotY})},rotatingvinette:{type:[1,[1],[24]],customMap:e=>(e.x=e.distToPivot+e.pivotX,e.y=e.pivotY,{x:2*e.x-e.w,y:2*e.y-e.h,initialRotation:e.angle,rotateSpeed:e.rotateSpeed/360/220*1.36,pivotX:2*e.pivotX,pivotY:2*e.pivotY,innerR:e.vc.r,innerG:e.vc.g,innerB:e.vc.b,innerSize:e.ir,outerR:e.vc.r,outerG:e.vc.g,outerB:e.vc.b,outerSize:e.or,innerOpacity:0,outerOpacity:e.o})},check:{type:[1,[],[9]],customMap:e=>({checkpointOffsetX:0,checkpointOffsetY:0})},tp:{type:[1,[],[12]],customMap:e=>({tpx:2*e.tpx,tpy:2*e.tpy})},winpad:{type:[1,[],[6]]},speed:{type:[1,[],[19]],customMap:e=>({speedChangePermanent:!1,speedMult:e.speedInc})},size:{type:[1,[],[18]],customMap:e=>({sizeChangePermanent:!1,sizeMult:e.size/24.5})},snap:{type:[1,[],[16]],customMap:e=>({snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:e.snapWait,snapDistanceY:e.snapDistance,snapDistanceX:e.snapDistance,toSnapX:e.snapX,toSnapY:e.snapY})},coin:{type:[1,[],[7]],customMap:e=>({color:"#d5d612",coinAmount:1})},coindoor:{type:[1,[],[8]],customMap:e=>({coinDoorColor:"#d5d612",coindoorCoinAmount:e.coins})},button:{type:[1,[],[7]],customMap:e=>{const t=2*e.x,n=2*e.y;return{color:t>14941.438100925527&&t<18420.158621406357&&n>5495.870128796381&&n<8873.08670452917?"#00FF00":"#d6d612",coinAmount:1}}},door:{type:[1,[],[8]],customMap:e=>{const t=e.id;let n=0;for(let e=0;e<obs.length;e++)"button"===obs[e].type&&obs[e].id===t&&n++;const o=2*e.x,r=2*e.y,s=o>14941.438100925527&&o<18420.158621406357&&r>5495.870128796381&&r<8873.08670452917;return{coinDoorColor:s?"#00FF00":"#d6d612",coindoorCoinAmount:s?5:n}}},raxis:{type:[1,[],[15]],customMap:e=>({axisSpeedMultY:!0===e.ry?0:1,axisSpeedMultX:!0===e.rx?0:1})},push:{type:[1,[],[25]],customMap:e=>({pushAngle:{right:180,down:270,left:0,right:90}[e.dir],maxPushDistance:2*e.max,idlePushBackSpeed:e.pushBack/20,positiveDirectionOnly:!0,pushConversionRatio:.86})},text:{customMap:e=>0!==e.angle?{type:[3,[1],[20]],fontSize:2*e.size,text:e.text,hex:"#FFFFFF",pivotX:2*e.x,pivotY:2*e.y,rotateSpeed:0,initialRotation:e.angle}:{type:[3,[],[20]],fontSize:2*e.size,text:e.text,hex:"#FFFFFF"}},platformer:{type:[1,[],[14]],customMap:e=>{const t={};return"right"===e.direction?t.platformerAngle=0:"down"===e.direction?t.platformerAngle=90:"left"===e.direction?t.platformerAngle=180:t.platformerAngle=270,t.platformerFriction=.9,t.platformerAngleRotateSpeed=0,t.platformerForce=e.force/1e4*1.5*1.8*1.6*10/16.66,t.jumpForce=e.jumpHeight/10/8.2*2.32/1.2/2,t.jumpDecay=.9525,t.maxJumpCooldown=332,t}},breakable:{type:[1,[],[10]],customMap:e=>({maxStrength:Math.max(200,e.maxStrength*Math.max(1,1e3*e.timer/60)),regenTime:1e3*e.regenTime/15,healSpeed:1})},"circle-hollow-slice":{type:[4,[],[0]],customMap:e=>({r:2*e.radius,innerRadius:2*e.innerRadius,startSliceAngle:e.startAngle,endSliceAngle:e.endAngle,startSliceAngleRotateSpeed:e.rotateSpeed/2e3,endSliceAngleRotateSpeed:e.rotateSpeed/2e3})},"circle-slice":{type:[4,[],[0]],customMap:e=>({r:2*e.radius,innerRadius:0,startSliceAngle:e.startAngle,endSliceAngle:e.endAngle,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0})},ship:{type:[1,[],[27]],customMap:e=>({changeShipStateTo:e.state,initialShipAngle:-Math.PI/2,shipTurnSpeed:Math.PI/20/16.66/2})},musicchange:{type:[1,[],[26]],customMap:e=>({x:2*e.x,y:2*e.y,w:2*e.w,h:2*e.h,musicPath:e.musicPath})},grpu:{type:[1,[],[28]],customMap:e=>({changeGrappleStateTo:e.state,grappleRange:488,grappleForce:.06,grappleFric:.8})}},enemyTypeMap={normal:e=>{const t=2*e.bound.x,n=2*e.bound.y,o=2*e.bound.w,r=2*e.bound.h;return counter++,`\n            var xv${counter} = ${e.xv/30};\n            var yv${counter} = ${e.yv/30};\n            shared.C(0,[3],[1],{r:${2*e.radius},y:${2*e.y},x:${2*e.x},sf:(e)=>{\n            e.pos.y += yv${counter};\n            e.pos.x += xv${counter};\n            if ((e.pos.x - e.sat.r) < ${t} || e.pos.x + e.sat.r > ${t+o}) {\n                xv${counter} = xv${counter} * -1;\n            }\n            if ((e.pos.y - e.sat.r) < ${n} || e.pos.y + e.sat.r > ${n+r}) {\n                yv${counter} = yv${counter} * -1;\n            }\n            },});\n            `},square:e=>{const t=2*e.bound.x,n=2*e.bound.y,o=2*e.bound.w,r=2*e.bound.h,s=e.size;return counter++,`\n            var xv${counter} = ${e.xv/42};\n            var yv${counter} = ${e.yv/42};\n            shared.C(1,[3],[1],{w:${s},h:${s},y:${2*e.y},x:${2*e.x},sf:(e)=>{\n            e.pos.y += yv${counter};\n            e.pos.x += xv${counter};\n            if ((e.pos.x) < ${t} || e.pos.x + ${s} > ${t+o}) {\n                xv${counter} = xv${counter} * -1;\n            }\n            if ((e.pos.y) < ${n} || e.pos.y + ${s} > ${n+r}) {\n                yv${counter} = yv${counter} * -1;\n            }\n            },});\n            `},turret:e=>{const t=2*e.bound.x,n=2*e.bound.y,o=2*e.bound.w,r=2*e.bound.h;counter++;const s=1e3*e.shootSpeed/15,i={speed:e.pSpeed/42,radius:2*e.pRadius,shootDirections:e.shootDirections},a=counter;return`\n            var xv${a} = ${e.xv/42};\n            var yv${a} = ${e.yv/42};\n            var shootDirectionIndex${a} = 0;\n            var timer${a} = ${s};\n            shared.C(0,[3],[1],{r:${e.radius},y:${2*e.y},x:${2*e.x},sf:(e)=>{\n            e.pos.y += yv${a};\n            e.pos.x += xv${a};\n            if ((e.pos.x - e.sat.r) < ${t} || e.pos.x + e.sat.r > ${t+o}) {\n                xv${a} = xv${a} * -1;\n            }\n            if ((e.pos.y - e.sat.r) < ${n} || e.pos.y + e.sat.r > ${n+r}) {\n                yv${a} = yv${a} * -1;\n            }\n    \n            timer${a}--;\n            if(timer${a} < 0){\n                timer${a} = ${s};\n    \n                shootDirectionIndex${a}++;\n                const shootDirections = [${i.shootDirections.toString()}];\n                if(shootDirectionIndex${a} >= shootDirections.length){\n                    shootDirectionIndex${a} = 0;\n                }\n                let dir = shootDirections[shootDirectionIndex${a}];\n    \n                counter++;\n                /*scoped using let*/\n                let xv${counter} = Math.cos(dir) * ${i.speed};\n                let yv${counter} = Math.sin(dir) * ${i.speed};\n                shared.C(0,[3],[1],{r:${i.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{\n                e.pos.y += yv${counter};\n                e.pos.x += xv${counter};\n                /*delete obstacle*/\n                if ((e.pos.x - e.sat.r) < ${t} || e.pos.x + e.sat.r > ${t+o} || (e.pos.y - e.sat.r) < ${n} || e.pos.y + e.sat.r > ${n+r}) {\n                    shared.tickFns.push(()=>{\n                        for(let i = 0; i < obstacles.length; i++){\n                            if(obstacles[i] === e) {obstacles.splice(i,1); break;}\n                        }\n                        /*for(let key in shared.idToObs){\n                            if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}\n                        }*/\n                    });\n                }\n                },});\n            }\n    \n            },});\n            `},switch:e=>{const t=2*e.bound.x,n=2*e.bound.y,o=2*e.bound.w,r=2*e.bound.h;counter++;const s=1e3*e.switchTime/16;return`\n            var xv${counter} = ${e.xv/42*4};\n            var yv${counter} = ${e.yv/42*4};\n            var switchTime${counter} = ${s*Math.random()*2};\n            var switchState${counter} = true;\n            var pos${counter} = {\n                x: ${2*e.x}, y: ${2*e.y} \n            }\n            shared.C(0,[3],[1],{r:${e.radius},y:${2*e.y},x:${2*e.x},sf:(e)=>{\n                pos${counter}.y += yv${counter};\n                pos${counter}.x += xv${counter};\n                if ((pos${counter}.x - e.sat.r) < ${t} || pos${counter}.x + e.sat.r > ${t+o}) {\n                    xv${counter} = xv${counter} * -1;\n                }\n                if ((pos${counter}.y - e.sat.r) < ${n} || pos${counter}.y + e.sat.r > ${n+r}) {\n                    yv${counter} = yv${counter} * -1;\n                }\n    \n                if(switchState${counter} === true){\n                    e.pos.x = pos${counter}.x;\n                    e.pos.y = pos${counter}.y;\n                } else {\n                    e.pos.x = -100000;\n                }\n    \n                switchTime${counter}--;\n                if(switchTime${counter} <= 0){\n                    switchTime${counter} = ${1e3*e.switchTimer/15};\n                    switchState${counter} = !switchState${counter};\n                    if(switchState${counter} === true){\n                        /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/\n                        e.pos.x = pos${counter}.x;\n                        e.pos.y = pos${counter}.y;\n                    }\n                }\n            }});\n            shared.C(0,[3],[0],{r:${e.radius},y:${2*e.y},x:${2*e.x},sf:(e)=>{\n                if(switchState${counter} === true){\n                    e.pos.x = -100000;\n                } else {\n                    e.pos.x = pos${counter}.x;\n                    e.pos.y = pos${counter}.y;\n                }\n            }});\n            `},flashlight:e=>Math.random()<.5?"":enemyTypeMap.turret({type:"turret",angle:e.angle,shootSpeed:1.54,timer:0,pRadius:e.radius*(.8*Math.random()+.2),pSpeed:e.speed*(1.65+Math.random()),projectiles:[],shootDirections:[0,Math.PI/2,Math.PI,3*Math.PI/2],csd:0,deadProjectiles:[],radius:e.radius,speed:e.speed,x:e.x,y:e.y,renderX:e.renderX,renderY:e.renderY,xv:e.xv,yv:e.yv,bound:e.bound,inView:!1})},alreadyLogged={};var str="";for(let e=0;e<obs.length;e++){if(!1===["spawner","square","switch","turret","flashlight"].includes(obs[e].type))continue;const t=obs[e],n=obs[e].spawnData;n.bound={x:obs[e].x,y:obs[e].y,w:obs[e].w,h:obs[e].h};for(let e=0;e<n.amount;e++){const e=structuredClone(n);e.x=t.x+Math.random()*t.w,e.y=t.y+Math.random()*t.h,e.angle=Math.random()*Math.PI*2,e.xv=Math.cos(e.angle)*e.speed,e.yv=Math.sin(e.angle)*e.speed,enemies.push(e),console.log(e)}}let alreadyLoggedEnemy={};for(let e=0;e<enemies.length;e++)void 0!==enemyTypeMap[enemies[e].type]?str+="\n"+enemyTypeMap[enemies[e].type](enemies[e]):void 0===alreadyLoggedEnemy[enemies[e].type]&&(alreadyLoggedEnemy[enemies[e].type]=!0,console.log(`no enemy type def for ${enemies[e].type}`));for(let e=0;e<obs.length;e++){const t=obs[e],n=typeMap[t.type];if("spawner"===t.type)continue;if("roundedcorners"===t.type||"roundedlava"===t.type){const e="roundedcorners"===t.type?"circle-normal":"circle-lava";for(let n=0;n<t.circles.length;n++)obs.push({x:t.circles[n].x,y:t.circles[n].y,radius:t.circles[n].radius,renderType:"circle",inView:!1,type:e});const n="roundedcorners"===t.type?"normal":"lava";for(let e=0;e<t.rects.length;e++)obs.push({x:t.rects[e].x,y:t.rects[e].y,w:t.rects[e].w,h:t.rects[e].h,type:n});continue}if("color"===t.type){t.x*=2,t.y*=2,t.w*=2,t.h*=2;const e=t.x-100,n=t.y-100,o=t.x+t.w+100,r=t.y+t.h+100;str+=`var minX${counter}, minY${counter}, maxX${counter}, maxY${counter};\n            minX${counter} = ${e};minY${counter} = ${n};maxX${counter} = ${o};maxY${counter} = ${r};\n            shared.C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{\n                const player = shared.players[shared.selfId];\n                if ((player.pos.x) > md(minX${counter}) && (player.pos.x) < md(maxX${counter}) && (player.pos.y) > md(minY${counter}) && (player.pos.y) < md(maxY${counter})) {\n                    colors.background="${t.tileColor}"; colors.tile="${t.bgColor}";\n                }\n            },});\n`,counter++}else if("switchlava"===t.type)t.x*=2,t.y*=2,t.w*=2,t.h*=2,str+=`var timer${counter} = ${t.timer}; var state${counter} =${t.state}; var x${counter} = ${t.x}; \n            shared.C(1,[],[1],{h:${t.h},w:${t.w},y:${t.y},x:${t.x},sf:(e)=>{\n                    timer${counter} -= 1/60;\n                    if(timer${counter} < 0){\n                        state${counter} = !state${counter};\n                        if(state${counter} === true){\n                            // on\n                            timer${counter} += ${t.onTime};\n                            e.pos.x = x${counter};\n                        } else {\n                            // off\n                            timer${counter} += ${t.offTime};\n                            e.pos.x = -1E9;\n                        }\n                    }\n                },\n                cr:(e)=>{\n                    ctx.beginPath();\n                    \n                    if (state${counter}) {\n                        if (timer${counter} < 0.2 && ${t.onTime} > 0.2) {\n                            ctx.globalAlpha = timer${counter} / 0.2;\n                        }\n                    } else {\n                        ctx.globalAlpha = 0.3;\n                        if (timer${counter} < 0.2 && ${t.offTime} > 0.2) {\n                            ctx.globalAlpha = 0.9 * (1 - timer${counter} / 0.2) + 0.1;\n                        }\n                    }\n                    ctx.fillStyle = ${t.collidable} ? '#c70000' : '#9e0000';\n                    /*if (obstacle.collidable) {\n                        ctx.fillStyle = '#c70000';\n                    }*/ \n\n                    ctx.lineWidth = 4;\n                    ctx.strokeStyle = 'black';\n                    ctx.rect(x${counter}, e.pos.y, e.dimensions.x, e.dimensions.y);\n                    ctx.fill();\n                    ctx.stroke();\n                    ctx.closePath();\n                    ctx.globalAlpha = 1;\n                }\n            });\n`,counter++;else{if("block"===t.type||"trans"===t.type){t.x*=2,t.y*=2,t.w*=2,t.h*=2,str+=`shared.C(1,[],[20],{h:${t.h},w:${t.w},y:${t.y},x:${t.x},\n                cr:(e)=>{\n                    ctx.beginPath();\n                    ctx.lineWidth = 2;\n                    ctx.strokeStyle = ctx.fillStyle = ${"trans"===t.type?"colors.background":"'"+(t.hex??t.color)+"'"};\n                    ctx.globalAlpha = ${t.opaq??1};\n                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);\n                    ctx.fill();\n                    ctx.stroke();\n                    ctx.closePath();\n                    ctx.globalAlpha = 1;\n                }\n            });\n`,counter++;continue}if("grapplepoint"===t.type||"movinggrapplepoint"===t.type){if(t.x*=2,t.y*=2,"grapplepoint"===t.type)str+=`shared.C(0,[],[0],{r:20+12/2,y:${t.y},x:${t.x},\n                    cr:(e)=>{\n                        e.isGrapplePoint = true;\n                        ctx.strokeStyle = '#c9c9c9';\n                        ctx.lineWidth = 12;\n                        ctx.globalAlpha = 0.5;\n                        ctx.beginPath();\n                        ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);\n                        ctx.stroke();\n                        ctx.closePath();\n                        ctx.globalAlpha = 1;\n                    }\n                });\n`;else{const e=t,n={path:"["};for(let t=0;t<e.points.length;t++)n.path+=`[${2*e.points[t][0]},[${2*e.points[t][1]}],${2*e.speed/1e3}],`;n.currentPoint=e.currentPoint,n.x=2*e.points[0][0],n.y=2*e.points[0][1],n.path=n.path.substring(0,n.path.length-1),n.path+="]",str+=`shared.C(0,[0],[0],{r:20+12/2,\n                    cr:(e)=>{\n                        e.isGrapplePoint = true;\n                        ctx.strokeStyle = '#c9c9c9';\n                        ctx.lineWidth = 12;\n                        ctx.globalAlpha = 0.5;\n                        ctx.beginPath();\n                        ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);\n                        ctx.stroke();\n                        ctx.closePath();\n                        ctx.globalAlpha = 1;\n                    },currentPoint:${n.currentPoint},x:${n.x},y:${n.y},path:${n.path}\n                });\n`}counter++;continue}if("circle-sentry"===t.type){t.x*=2,t.y*=2,t.r*=2,t.laser.x*=2,t.laser.y*=2,t.laser.w*=2,t.laser.h*=2,str+=`shared.C(1,[5],[1],{h:${t.laser.h},w:${t.laser.w},y:${t.y-t.laser.h/2},x:${t.x-t.laser.w/2},\n                boundPlayer: true,\n                restAngles: [${t.rest*Math.PI/180}, ${t.rest*Math.PI/180+Math.PI}],\n                toRest: true,\n                homingRotateSpeed: ${t.speed/86e3},\n                detectionRadius: ${Math.sqrt(t.laser.w**2+t.laser.h**2)/2},\n                spokeAngles: [0, Math.PI],\n                pivotX: ${t.x},\n                pivotY: ${t.y}\n            });\n            shared.C(0,[],[0],{x:${t.x},y:${t.y},r:${t.r},cr:(e)=>{\n                ctx.fillStyle = shared.colors.tile;\n                ctx.beginPath();\n                ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);\n                ctx.fill();\n                ctx.closePath();\n\n                ctx.strokeStyle = 'red';\n                ctx.lineWidth = 15;\n                ctx.beginPath();\n                ctx.arc(\n                    e.pos.x,\n                    e.pos.y,\n                    Math.max(e.sat.r - 30, 0),\n                    0,\n                    Math.PI * 2\n                );\n                ctx.stroke();\n                ctx.closePath();\n            }});`,counter++;continue}if("resetcoins"===t.type){t.x*=2,t.y*=2,t.w*=2,t.h*=2,str+=`shared.C(1,[],[20],{x:${t.x},y:${t.y},w:${t.w},h:${t.h},hex:'#000000',alpha:0,cr:()=>{},ef:()=>{\n                for(let i = 0; i < obstacles.length; i++){\n                    if(obstacles[i].collected !== undefined){\n                        obstacles[i].collected = false;\n                    } else if(obstacles[i].isCoindoor === true){\n                        obstacles[i].coins = obstacles[i].maxCoins; \n                    }\n                }    \n            }});`;continue}if("resettimetraps"===t.type){t.x*=2,t.y*=2,t.w*=2,t.h*=2,str+=`shared.C(1,[],[20],{x:${t.x},y:${t.y},w:${t.w},h:${t.h},hex:'#000000',alpha:0,cr:()=>{},ef:()=>{\n                for(let i = 0; i < obstacles.length; i++){\n                    if(obstacles[i].timeTrapTime !== undefined){\n                        obstacles[i].timeTrapTime = obstacles[i].timeTrapMaxTime;\n                    }\n                }    \n            }});`;continue}}if(void 0===n){void 0===alreadyLogged[t.type]&&(alreadyLogged[t.type]=!0,console.log("no type def for "+t.type));continue}const o={type:n.type};for(let e in t)"type"!==e&&(void 0!==n[e]?o[n[e]]=t[e]:o[e]=t[e]);if(o.x*=2,o.y*=2,o.w&&(o.w*=2),o.h&&(o.h*=2),void 0!==o.r&&(o.r*=2),void 0!==n.customMap){const e=n.customMap(t);for(let t in e)o[t]=e[t]}let r="{";for(let e in o)r+=`${e}:${JSON.stringify(o[e])},`;r+="}";let s=JSON.stringify(o.type);s=s.slice(1,s.length-1),str+=`shared.C(${s},${r})\n`}eval(str)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=importMap}}]);