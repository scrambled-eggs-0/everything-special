window.loadMap((shared)=> {
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, input} = shared;

    C(0,[],[3],{x:-1E9,y:0,r:1,sf:(o,p)=>{
        // revives
        if(p.dead === true){
            for(let i = 0; i < shared.players.length; i++){
                const p2 = shared.players[i];
                if(p2 === undefined) continue;
    
                if(p2.dead === false && (p2.pos.x-p.pos.x) ** 2 + (p2.pos.y-p.pos.y) ** 2 < (p2.sat.r + p.sat.r) ** 2){
                    p.dead = false;
                    p.renderRadius = 0;
                }
            }
        }
    }})
    
    let xv1 = 0.8581287450485479;
    let yv1 = 6.611207113785337;
    C(0,[3],[1],{r:30,y:4118.335052146999,x:2470.13464512848,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1;
    e.pos.x += xv1;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv1 = xv1 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv1 = yv1 * -1;
    }
    }});

    let xv2 = 6.666538391776752;
    let yv2 = 0.04135595980131985;
    C(0,[3],[1],{r:30,y:4648.807574306023,x:3051.8821174352624,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv2;
    e.pos.x += xv2;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv2 = xv2 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv2 = yv2 * -1;
    }
    }});

    let xv3 = 6.337044211815859;
    let yv3 = 2.0703417838452594;
    C(0,[3],[1],{r:30,y:4470.378022171619,x:2605.768459183727,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv3;
    e.pos.x += xv3;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv3 = xv3 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv3 = yv3 * -1;
    }
    }});

    let xv4 = -0.7434707544959185;
    let yv4 = 6.625080805669747;
    C(0,[3],[1],{r:30,y:4097.396642016646,x:2466.9261078900054,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv4;
    e.pos.x += xv4;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv4 = xv4 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv4 = yv4 * -1;
    }
    }});

    let xv5 = -4.548247526222386;
    let yv5 = -4.8742064876917555;
    C(0,[3],[1],{r:30,y:4402.413784969803,x:2350.159218304408,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5;
    e.pos.x += xv5;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv5 = xv5 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv5 = yv5 * -1;
    }
    }});

    let xv6 = -0.9886459276412352;
    let yv6 = -6.592952576365375;
    C(0,[3],[1],{r:30,y:4413.0564879130125,x:2718.9614116783055,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6;
    e.pos.x += xv6;
    if ((e.pos.x - e.sat.r) < 2300 || e.pos.x + e.sat.r > 3100) {
        xv6 = xv6 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4000 || e.pos.y + e.sat.r > 4700) {
        yv6 = yv6 * -1;
    }
    }});

    C(0,[],[0],{type:[0,[],[0]],x:2300,y:5200,r:100,renderType:"circle",inView:true,})
    C(1,[],[13],{type:[1,[],[13]],x:3200,y:4500,w:200,h:200,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
    C(1,[],[15],{type:[1,[],[15]],x:3400,y:4500,w:700,h:200,rx:true,ry:false,inView:true,axisSpeedMultY:1,axisSpeedMultX:0,})
    C(1,[],[13],{type:[1,[],[13]],x:3400,y:4500,w:700,h:200,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
    C(0,[],[12],{type:[0,[],[12]],x:3500,y:4700,r:50,tpx:4100,tpy:5200,renderType:"circleR",radius:25,inView:true,})
    C(0,[],[12],{type:[0,[],[12]],x:3800,y:4500,r:50,tpx:4100,tpy:5200,renderType:"circleR",radius:25,inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:4400,y:5800,r:100,renderType:"circle",inView:true,})
    C(4,[],[0],{type:[4,[],[0]],x:4600,y:5800,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[2250,2900],[2200,2900]],"type":"poly","props":{}},endPolygon:{"points":[[2300,2850],[2300,2800]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
    C(1,[],[19],{type:[1,[],[19]],x:3100,y:5700,w:600,h:400,speedInc:3,inView:true,speedChangePermanent:false,speedMult:3,})
    C(1,[],[0],{type:[1,[],[0]],x:4100,y:4500,w:400,h:500,canJump:true,inView:true,sat:{"pos":{"x":2050,"y":2250},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":250},{"x":0,"y":250}],"edges":[{"x":200,"y":0},{"x":0,"y":250},{"x":-200,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":250},{"x":0,"y":250}]},})
    C(1,[],[15],{type:[1,[],[15]],x:6750,y:6650,w:400,h:400,rx:true,ry:true,inView:true,axisSpeedMultY:0,axisSpeedMultX:0,})
    C(1,[],[0],{type:[1,[],[0]],x:3600,y:4000,w:700,h:500,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5500,y:3900,w:200,h:900,canJump:true,inView:true,sat:{"pos":{"x":2750,"y":1950},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}],"edges":[{"x":100,"y":0},{"x":0,"y":450},{"x":-100,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4500,y:5500,w:300,h:200,canJump:true,inView:true,sat:{"pos":{"x":2250,"y":2750},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":100},{"x":0,"y":100}],"edges":[{"x":150,"y":0},{"x":0,"y":100},{"x":-150,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4300,y:5200,w:200,h:600,canJump:true,inView:true,sat:{"pos":{"x":2150,"y":2600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}],"edges":[{"x":100,"y":0},{"x":0,"y":300},{"x":-100,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5500,y:5200,w:200,h:700,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5000,y:5500,w:500,h:500,canJump:true,inView:true,sat:{"pos":{"x":2500,"y":2750},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}],"edges":[{"x":250,"y":0},{"x":0,"y":250},{"x":-250,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}]},})
    C(2,[],[0],{type:[2,[],[0]],points:[[5700,5200],[5770,5360],[5700,5500]],most:{"left":2850,"right":2885,"top":2600,"bottom":2750},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[5900,4900],[5900,5200],[5850,5050]],most:{"left":2925,"right":2950,"top":2450,"bottom":2600},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[6000,5400],[6000,5600],[5950,5500]],most:{"left":2975,"right":3000,"top":2700,"bottom":2800},renderType:"poly",inView:true,x:null,y:null,})
    C(1,[],[0],{type:[1,[],[0]],x:5900,y:4900,w:100,h:300,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6000,y:5400,w:200,h:200,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6200,y:5200,w:100,h:400,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5700,y:5800,w:200,h:100,canJump:true,inView:true,})
    C(1,[],[12],{type:[1,[],[12]],x:5900,y:5850,w:200,h:50,tpx:5600,tpy:6100,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5500,y:5900,w:800,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6100,y:5800,w:250,h:100,canJump:true,inView:true,})
    C(1,[],[12],{type:[1,[],[12]],x:5450,y:6000,w:50,h:200,tpx:5800,tpy:5700,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5000,y:6000,w:450,h:200,canJump:true,inView:true,sat:{"pos":{"x":2500,"y":3000},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":225,"y":0},{"x":225,"y":100},{"x":0,"y":100}],"edges":[{"x":225,"y":0},{"x":0,"y":100},{"x":-225,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":225,"y":0},{"x":225,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5000,y:6200,w:1300,h:200,canJump:true,inView:true,sat:{"pos":{"x":2500,"y":3100},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":650,"y":0},{"x":650,"y":100},{"x":0,"y":100}],"edges":[{"x":650,"y":0},{"x":0,"y":100},{"x":-650,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":650,"y":0},{"x":650,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5300,y:3900,w:200,h:600,canJump:true,inView:true,sat:{"pos":{"x":2650,"y":1950},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}],"edges":[{"x":100,"y":0},{"x":0,"y":300},{"x":-100,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4300,y:4300,w:600,h:200,canJump:true,inView:true,sat:{"pos":{"x":2150,"y":2150},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":100},{"x":0,"y":100}],"edges":[{"x":300,"y":0},{"x":0,"y":100},{"x":-300,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5100,y:4300,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":2550,"y":2150},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[20],{h:400,w:100,y:4800,x:5550,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#459668";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[20],{h:100,w:200,y:5550,x:4800,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#456496";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[20],{h:200,w:100,y:5000,x:4350,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#8d4596";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[20],{h:100,w:200,y:4350,x:4900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#7a7a7a";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[0],{type:[1,[],[0]],x:6300,y:5900,w:100,h:500,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6700,y:5600,w:200,h:400,canJump:true,inView:true,sat:{"pos":{"x":3350,"y":2800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":200},{"x":0,"y":200}],"edges":[{"x":100,"y":0},{"x":0,"y":200},{"x":-100,"y":0},{"x":0,"y":-200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":200},{"x":0,"y":200}]},})
    C(4,[],[0],{type:[4,[],[0]],x:6550,y:5800,radius:125,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[3350,2900],[3400,2900]],"type":"poly","props":{}},endPolygon:{"points":[[3200,2900],[3150,2900]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:250,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
    C(1,[],[0],{type:[1,[],[0]],x:6800,y:5500,w:300,h:100,canJump:true,inView:true,sat:{"pos":{"x":3400,"y":2750},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":50},{"x":0,"y":50}],"edges":[{"x":150,"y":0},{"x":0,"y":50},{"x":-150,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6100,y:5000,w:300,h:200,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:7000,y:4900,w:100,h:600,canJump:true,inView:true,sat:{"pos":{"x":3500,"y":2450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":300},{"x":0,"y":300}],"edges":[{"x":50,"y":0},{"x":0,"y":300},{"x":-50,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":300},{"x":0,"y":300}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6400,y:4800,w:800,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6600,y:5100,w:200,h:200,canJump:true,inView:true,})
    C(1,[],[10],{type:[1,[],[10]],x:6800,y:5150,w:200,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:true,healSpeed:1,})
    C(1,[],[10],{type:[1,[],[10]],x:6650,y:4900,w:100,h:200,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:true,healSpeed:1,})
    C(1,[],[0],{type:[1,[],[0]],x:6400,y:6000,w:500,h:800,canJump:true,inView:true,sat:{"pos":{"x":3200,"y":3000},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":400},{"x":0,"y":400}],"edges":[{"x":250,"y":0},{"x":0,"y":400},{"x":-250,"y":0},{"x":0,"y":-400}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":400},{"x":0,"y":400}]},})
    C(1,[1],[0],{type:[1,[1],[0]],x:6400,y:5775,w:300,h:50,angle:-91298.99999999753,rotateSpeed:-0.10303030303030303,pivotX:6550,pivotY:5800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:-5231047.373764762,})
    C(1,[],[0],{type:[1,[],[0]],x:6300,y:5200,w:100,h:300,canJump:true,inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:6300,y:5500,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:6800,y:5600,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6000,y:4500,w:100,h:700,canJump:true,inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:6400,y:4800,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6300,y:4500,w:100,h:300,canJump:true,inView:true,})
    C(1,[],[10],{type:[1,[],[10]],x:6100,y:4600,w:200,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:true,healSpeed:1,})
    C(1,[],[0],{type:[1,[],[0]],x:5700,y:3600,w:700,h:600,canJump:true,inView:true,sat:{"pos":{"x":2850,"y":1800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":350,"y":0},{"x":350,"y":300},{"x":0,"y":300}],"edges":[{"x":350,"y":0},{"x":0,"y":300},{"x":-350,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":350,"y":0},{"x":350,"y":300},{"x":0,"y":300}]},})
    C(0,[],[0],{type:[0,[],[0]],x:7200,y:4800,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6300,y:4200,w:100,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:6400,y:3900,w:900,h:100,canJump:true,inView:false,sat:{"pos":{"x":3200,"y":1950},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":50},{"x":0,"y":50}],"edges":[{"x":450,"y":0},{"x":0,"y":50},{"x":-450,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":50},{"x":0,"y":50}]},})
    C(0,[],[0],{type:[0,[],[0]],x:7200,y:4000,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:6400,y:4000,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:7200,y:4000,w:100,h:900,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:5300,y:2100,w:200,h:1600,canJump:true,inView:false,sat:{"pos":{"x":2650,"y":1050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":800},{"x":0,"y":800}],"edges":[{"x":100,"y":0},{"x":0,"y":800},{"x":-100,"y":0},{"x":0,"y":-800}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":800},{"x":0,"y":800}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5500,y:3000,w:4500,h:200,canJump:true,inView:false,sat:{"pos":{"x":2750,"y":1500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":2250,"y":0},{"x":2250,"y":100},{"x":0,"y":100}],"edges":[{"x":2250,"y":0},{"x":0,"y":100},{"x":-2250,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":2250,"y":0},{"x":2250,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:5700,y:3500,w:700,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:5700,y:3300,w:800,h:200,canJump:true,inView:false,sat:{"pos":{"x":2850,"y":1650},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":100},{"x":0,"y":100}],"edges":[{"x":400,"y":0},{"x":0,"y":100},{"x":-400,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6500,y:3300,w:200,h:500,canJump:true,inView:false,sat:{"pos":{"x":3250,"y":1650},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":250},{"x":0,"y":250}],"edges":[{"x":100,"y":0},{"x":0,"y":250},{"x":-100,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":250},{"x":0,"y":250}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6800,y:3200,w:900,h:300,canJump:true,inView:false,sat:{"pos":{"x":3400,"y":1600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":150},{"x":0,"y":150}],"edges":[{"x":450,"y":0},{"x":0,"y":150},{"x":-450,"y":0},{"x":0,"y":-150}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":150},{"x":0,"y":150}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6700,y:3600,w:700,h:200,canJump:true,inView:false,})
    C(1,[],[13],{type:[1,[],[13]],x:6400,y:3500,w:100,h:300,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6400,y:3800,w:900,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7300,y:3800,w:100,h:1100,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7200,y:4900,w:200,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7100,y:4900,w:100,h:700,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:7400,y:3600,w:200,h:1600,canJump:true,inView:true,sat:{"pos":{"x":3700,"y":1800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":800},{"x":0,"y":800}],"edges":[{"x":100,"y":0},{"x":0,"y":800},{"x":-100,"y":0},{"x":0,"y":-800}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":800},{"x":0,"y":800}]},})
    C(1,[],[0],{type:[1,[],[0]],x:7200,y:5000,w:200,h:900,canJump:true,inView:true,sat:{"pos":{"x":3600,"y":2500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}],"edges":[{"x":100,"y":0},{"x":0,"y":450},{"x":-100,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}]},})
    C(1,[],[13],{type:[1,[],[13]],x:7000,y:5600,w:200,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6900,y:5600,w:100,h:1200,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:7000,y:5700,w:200,h:1100,canJump:true,inView:true,sat:{"pos":{"x":3500,"y":2850},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":550},{"x":0,"y":550}],"edges":[{"x":100,"y":0},{"x":0,"y":550},{"x":-100,"y":0},{"x":0,"y":-550}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":550},{"x":0,"y":550}]},})
    C(1,[],[13],{type:[1,[],[13]],x:5700,y:3200,w:1100,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6700,y:3300,w:100,h:300,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6800,y:3500,w:900,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7600,y:3600,w:100,h:1700,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:7700,y:3200,w:2300,h:6400,canJump:true,inView:true,sat:{"pos":{"x":3850,"y":1600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":3200},{"x":0,"y":3200}],"edges":[{"x":1150,"y":0},{"x":0,"y":3200},{"x":-1150,"y":0},{"x":0,"y":-3200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":3200},{"x":0,"y":3200}]},})
    C(1,[],[13],{type:[1,[],[13]],x:7400,y:5200,w:200,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7400,y:5300,w:100,h:700,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7200,y:5900,w:200,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7200,y:6000,w:100,h:900,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6100,y:7100,w:800,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:6300,y:6900,w:550,h:200,canJump:true,inView:true,sat:{"pos":{"x":3150,"y":3450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":275,"y":0},{"x":275,"y":100},{"x":0,"y":100}],"edges":[{"x":275,"y":0},{"x":0,"y":100},{"x":-275,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":275,"y":0},{"x":275,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:7000,y:6900,w:500,h:1200,canJump:true,inView:true,sat:{"pos":{"x":3500,"y":3450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":600},{"x":0,"y":600}],"edges":[{"x":250,"y":0},{"x":0,"y":600},{"x":-250,"y":0},{"x":0,"y":-600}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":600},{"x":0,"y":600}]},})
    C(1,[],[13],{type:[1,[],[13]],x:6900,y:6900,w:100,h:1200,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:6300,y:6800,w:600,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7000,y:6800,w:200,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:7500,y:5300,w:200,h:4300,canJump:true,inView:true,sat:{"pos":{"x":3750,"y":2650},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":2150},{"x":0,"y":2150}],"edges":[{"x":100,"y":0},{"x":0,"y":2150},{"x":-100,"y":0},{"x":0,"y":-2150}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":2150},{"x":0,"y":2150}]},})
    C(1,[],[0],{type:[1,[],[0]],x:7300,y:6000,w:200,h:900,canJump:true,inView:true,sat:{"pos":{"x":3650,"y":3000},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}],"edges":[{"x":100,"y":0},{"x":0,"y":450},{"x":-100,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}]},})
    C(1,[],[13],{type:[1,[],[13]],x:6300,y:6400,w:100,h:400,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:5000,y:6400,w:1300,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:6100,y:6500,w:200,h:600,canJump:true,inView:true,sat:{"pos":{"x":3050,"y":3250},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}],"edges":[{"x":100,"y":0},{"x":0,"y":300},{"x":-100,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}]},})
    C(1,[],[13],{type:[1,[],[13]],x:6000,y:6800,w:100,h:400,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:6000,y:7200,w:900,h:2800,canJump:true,inView:true,sat:{"pos":{"x":3000,"y":3600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":1400},{"x":0,"y":1400}],"edges":[{"x":450,"y":0},{"x":0,"y":1400},{"x":-450,"y":0},{"x":0,"y":-1400}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":1400},{"x":0,"y":1400}]},})
    C(1,[],[0],{type:[1,[],[0]],x:6850,y:6900,w:50,h:150,canJump:true,inView:true,sat:{"pos":{"x":3425,"y":3450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":25,"y":0},{"x":25,"y":75},{"x":0,"y":75}],"edges":[{"x":25,"y":0},{"x":0,"y":75},{"x":-25,"y":0},{"x":0,"y":-75}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":25,"y":0},{"x":25,"y":75},{"x":0,"y":75}]},})
    C(2,[],[0],{type:[2,[],[0]],points:[[6850,7050],[6900,7050],[6850,7100]],most:{"left":3425,"right":3450,"top":3525,"bottom":3550},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[7000,7100],[7000,7300],[6900,7200]],most:{"left":3450,"right":3500,"top":3550,"bottom":3650},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[6900,7350],[7000,7450],[6900,7550]],most:{"left":3450,"right":3500,"top":3675,"bottom":3775},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[7000,7600],[7000,7800],[6900,7700]],most:{"left":3450,"right":3500,"top":3800,"bottom":3900},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[1],{type:[2,[],[1]],points:[[6900,7250],[7000,7350],[7000,7400],[6900,7300]],most:{"left":3450,"right":3500,"top":3625,"bottom":3700},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
    C(2,[],[1],{type:[2,[],[1]],points:[[7000,7500],[7000,7550],[6900,7650],[6900,7600]],most:{"left":3450,"right":3500,"top":3750,"bottom":3825},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
    C(1,[],[13],{type:[1,[],[13]],x:5000,y:6700,w:1100,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:5000,y:6500,w:1100,h:200,canJump:true,inView:true,sat:{"pos":{"x":2500,"y":3250},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":550,"y":0},{"x":550,"y":100},{"x":0,"y":100}],"edges":[{"x":550,"y":0},{"x":0,"y":100},{"x":-550,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":550,"y":0},{"x":550,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5100,y:6800,w:900,h:600,canJump:true,inView:true,sat:{"pos":{"x":2550,"y":3400},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":300},{"x":0,"y":300}],"edges":[{"x":450,"y":0},{"x":0,"y":300},{"x":-450,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":300},{"x":0,"y":300}]},})
    C(1,[],[13],{type:[1,[],[13]],x:6900,y:8100,w:500,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:7400,y:8100,w:100,h:1500,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:6900,y:8200,w:500,h:1800,canJump:true,inView:true,sat:{"pos":{"x":3450,"y":4100},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":900},{"x":0,"y":900}],"edges":[{"x":250,"y":0},{"x":0,"y":900},{"x":-250,"y":0},{"x":0,"y":-900}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":900},{"x":0,"y":900}]},})
    C(1,[],[12],{type:[1,[],[12]],x:9900,y:9600,w:100,h:400,tpx:3850,tpy:3800,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3900,y:3100,w:400,h:900,canJump:true,inView:false,sat:{"pos":{"x":1950,"y":1550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":450},{"x":0,"y":450}],"edges":[{"x":200,"y":0},{"x":0,"y":450},{"x":-200,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":450},{"x":0,"y":450}]},})
    C(1,[1],[0],{type:[1,[1],[0]],x:3725,y:3775,w:250,h:50,angle:168978.0000000069,rotateSpeed:0.20606060606060606,pivotX:3850,pivotY:3800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:63.73774391990981,unSim:18.916666666666234,inView:false,initialRotation:9681726.23056202,})
    C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:4200,w:100,h:100,points:[[2750,2100],[2900,2100]],speed:150,currentPoint:1.6083333333333334,alongWith:false,pointOn:{"x":2900,"y":2100},pointTo:{"x":2750,"y":2100},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[5500,4200,5],[5800,4200,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:5700,y:4000,w:100,h:100,points:[[2850,2000],[2850,2150]],speed:150,currentPoint:0.6083333333333333,alongWith:false,pointOn:{"x":2850,"y":2000},pointTo:{"x":2850,"y":2150},xv:9.184850993605149e-15,yv:150,inView:true,path:[[5700,4000,5],[5700,4300,5]],})
    C(1,[],[13],{type:[1,[],[13]],x:4500,y:6100,w:200,h:400,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[0],{type:[1,[],[0]],x:4400,y:6100,w:100,h:400,canJump:true,inView:true,})
    C(1,[],[13],{type:[1,[],[13]],x:4200,y:6100,w:200,h:400,force:6000,dir:{"x":0,"y":-6000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[12],{type:[1,[],[12]],x:4500,y:6250,w:20,h:100,tpx:4800,tpy:5900,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(1,[],[12],{type:[1,[],[12]],x:4680,y:6250,w:20,h:100,tpx:4800,tpy:5900,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:4700,y:6100,w:100,h:800,canJump:true,inView:true,sat:{"pos":{"x":2350,"y":3050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":400},{"x":0,"y":400}],"edges":[{"x":50,"y":0},{"x":0,"y":400},{"x":-50,"y":0},{"x":0,"y":-400}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":400},{"x":0,"y":400}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4900,y:6800,w:200,h:600,canJump:true,inView:true,sat:{"pos":{"x":2450,"y":3400},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}],"edges":[{"x":100,"y":0},{"x":0,"y":300},{"x":-100,"y":0},{"x":0,"y":-300}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":300},{"x":0,"y":300}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4000,y:6100,w:200,h:1900,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:4400,y:6700,w:100,h:200,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:4200,y:6900,w:300,h:1100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3100,y:5600,w:1200,h:100,canJump:true,inView:true,sat:{"pos":{"x":1550,"y":2800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":50},{"x":0,"y":50}],"edges":[{"x":600,"y":0},{"x":0,"y":50},{"x":-600,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3300,y:5900,w:200,h:500,canJump:true,inView:true,sat:{"pos":{"x":1650,"y":2950},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":250},{"x":0,"y":250}],"edges":[{"x":100,"y":0},{"x":0,"y":250},{"x":-100,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":250},{"x":0,"y":250}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:6100,w:200,h:300,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":150},{"x":0,"y":150}],"edges":[{"x":100,"y":0},{"x":0,"y":150},{"x":-100,"y":0},{"x":0,"y":-150}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":150},{"x":0,"y":150}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:6400,w:800,h:200,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3200},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":100},{"x":0,"y":100}],"edges":[{"x":400,"y":0},{"x":0,"y":100},{"x":-400,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3500,y:5900,w:200,h:200,canJump:true,inView:true,})
    C(4,[],[0],{type:[4,[],[0]],x:4200,y:5800,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[2100,2850],[2100,2800]],"type":"poly","props":{}},endPolygon:{"points":[[2150,2900],[2200,2900]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
    C(0,[],[0],{type:[0,[],[0]],x:3700,y:6000,r:100,renderType:"circle",inView:true,})
    C(2,[],[0],{type:[2,[],[0]],points:[[3600,5800],[3650,5900],[3450,5900]],most:{"left":1725,"right":1825,"top":2900,"bottom":2950},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[3100,5700],[3450,5700],[3350,5800]],most:{"left":1550,"right":1725,"top":2850,"bottom":2900},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[3200,5900],[3300,5900],[3300,6000]],most:{"left":1600,"right":1650,"top":2950,"bottom":3000},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[3100,6000],[3200,6100],[3100,6200]],most:{"left":1550,"right":1600,"top":3000,"bottom":3100},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[3100,5700],[3150,5700],[3100,5800]],most:{"left":1550,"right":1575,"top":2850,"bottom":2900},renderType:"poly",inView:true,x:null,y:null,})
    C(1,[],[0],{type:[1,[],[0]],x:3700,y:6600,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":1850,"y":3300},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[1],{type:[1,[],[1]],x:3500,y:6100,w:500,h:500,canCollide:false,inView:true,sat:{"pos":{"x":1750,"y":3050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}],"edges":[{"x":250,"y":0},{"x":0,"y":250},{"x":-250,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}]},boundPlayer:false,})
    C(2,[],[11],{type:[2,[],[11]],points:[[3850,6050],[3950,6050],[3650,6650],[3550,6650]],most:{"left":1775,"right":1975,"top":3025,"bottom":3325},renderType:"poly",inView:true,x:null,y:null,})
    C(1,[],[0],{type:[1,[],[0]],x:3900,y:6600,w:100,h:1400,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3500,y:7000,w:400,h:1000,canJump:true,inView:true,sat:{"pos":{"x":1750,"y":3500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":500},{"x":0,"y":500}],"edges":[{"x":200,"y":0},{"x":0,"y":500},{"x":-200,"y":0},{"x":0,"y":-500}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":500},{"x":0,"y":500}]},})
    C(2,[],[0],{type:[2,[],[0]],points:[[6400,5250],[6450,5350],[6400,5450]],most:{"left":3200,"right":3225,"top":2625,"bottom":2725},renderType:"poly",inView:true,x:null,y:null,})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:6700,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3350},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(0,[],[0],{type:[0,[],[0]],x:4800,y:6800,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:7200,w:400,h:200,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":100},{"x":0,"y":100}],"edges":[{"x":200,"y":0},{"x":0,"y":100},{"x":-200,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:3900,y:4700,w:200,h:300,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
    C(1,[],[0],{type:[1,[],[0]],x:3100,y:4700,w:800,h:100,canJump:true,inView:true,sat:{"pos":{"x":1550,"y":2350},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":50},{"x":0,"y":50}],"edges":[{"x":400,"y":0},{"x":0,"y":50},{"x":-400,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":400,"y":0},{"x":400,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3100,y:4000,w:100,h:700,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3200,y:4000,w:400,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3400,y:4300,w:200,h:150,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3400,y:4300,w:200,h:200,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3800,y:4800,w:100,h:300,canJump:true,inView:true,sat:{"pos":{"x":1900,"y":2400},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":150},{"x":0,"y":150}],"edges":[{"x":50,"y":0},{"x":0,"y":150},{"x":-50,"y":0},{"x":0,"y":-150}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":150},{"x":0,"y":150}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3800,y:5300,w:100,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:3100,y:5000,w:100,h:400,canJump:true,inView:true,sat:{"pos":{"x":1550,"y":2500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":200},{"x":0,"y":200}],"edges":[{"x":50,"y":0},{"x":0,"y":200},{"x":-50,"y":0},{"x":0,"y":-200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":200},{"x":0,"y":200}]},})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:4800,w:100,h:100,points:[[1600,2400],[1850,2400]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1600,"y":2400},pointTo:{"x":1850,"y":2400},xv:150,yv:0,inView:true,path:[[3200,4800,5],[3700,4800,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:4900,w:100,h:100,points:[[1600,2450],[1850,2450]],speed:150,currentPoint:1.165,alongWith:true,pointOn:{"x":1850,"y":2450},pointTo:{"x":1600,"y":2450},xv:-150,yv:1.8369701987210297e-14,inView:true,sat:{"pos":{"x":1650,"y":2450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3200,4900,5],[3700,4900,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:5000,w:100,h:100,points:[[1600,2500],[1850,2500]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1600,"y":2500},pointTo:{"x":1850,"y":2500},xv:150,yv:0,inView:true,path:[[3200,5000,5],[3700,5000,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:5100,w:100,h:100,points:[[1600,2550],[1850,2550]],speed:150,currentPoint:1.165,alongWith:true,pointOn:{"x":1850,"y":2550},pointTo:{"x":1600,"y":2550},xv:-150,yv:1.8369701987210297e-14,inView:true,sat:{"pos":{"x":1670,"y":2550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3200,5100,5],[3700,5100,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:5200,w:100,h:100,points:[[1600,2600],[1850,2600]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1600,"y":2600},pointTo:{"x":1850,"y":2600},xv:150,yv:0,inView:true,sat:{"pos":{"x":1803.75,"y":2600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3200,5200,5],[3700,5200,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:5300,w:100,h:100,points:[[1600,2650],[1850,2650]],speed:150,currentPoint:1.165,alongWith:true,pointOn:{"x":1850,"y":2650},pointTo:{"x":1600,"y":2650},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[3200,5300,5],[3700,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3200,y:4800,w:100,h:100,points:[[1600,2400],[1600,2650]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1600,"y":2400},pointTo:{"x":1600,"y":2650},xv:9.184850993605149e-15,yv:150,inView:true,path:[[3200,4800,5],[3200,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3300,y:4800,w:100,h:100,points:[[1650,2400],[1650,2650]],speed:150,currentPoint:1.165,alongWith:false,pointOn:{"x":1650,"y":2650},pointTo:{"x":1650,"y":2400},xv:9.184850993605149e-15,yv:-150,inView:true,sat:{"pos":{"x":1650,"y":2480},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3300,4800,5],[3300,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3400,y:4800,w:100,h:100,points:[[1700,2400],[1700,2650]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1700,"y":2400},pointTo:{"x":1700,"y":2650},xv:9.184850993605149e-15,yv:150,inView:true,sat:{"pos":{"x":1700,"y":2637.5},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3400,4800,5],[3400,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3500,y:4800,w:100,h:100,points:[[1750,2400],[1750,2650]],speed:150,currentPoint:1.165,alongWith:false,pointOn:{"x":1750,"y":2650},pointTo:{"x":1750,"y":2400},xv:9.184850993605149e-15,yv:-150,inView:true,sat:{"pos":{"x":1750,"y":2525},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3500,4800,5],[3500,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3600,y:4800,w:100,h:100,points:[[1800,2400],[1800,2650]],speed:150,currentPoint:0.165,alongWith:false,pointOn:{"x":1800,"y":2400},pointTo:{"x":1800,"y":2650},xv:9.184850993605149e-15,yv:150,inView:true,sat:{"pos":{"x":1800,"y":2631.25},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3600,4800,5],[3600,5300,5]],})
    C(1,[0],[0],{type:[1,[0],[0]],x:3700,y:4800,w:100,h:100,points:[[1850,2400],[1850,2650]],speed:150,currentPoint:1.165,alongWith:false,pointOn:{"x":1850,"y":2650},pointTo:{"x":1850,"y":2400},xv:9.184850993605149e-15,yv:-150,inView:true,sat:{"pos":{"x":1850,"y":2551.25},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},path:[[3700,4800,5],[3700,5300,5]],})
    C(0,[],[0],{type:[0,[],[0]],x:3200,y:4100,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:3200,y:4700,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:4300,y:5400,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:3900,y:5400,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2300,y:4700,w:500,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2600,y:3100,w:1200,h:900,canJump:true,inView:false,sat:{"pos":{"x":1300,"y":1550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":450},{"x":0,"y":450}],"edges":[{"x":600,"y":0},{"x":0,"y":450},{"x":-600,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":450},{"x":0,"y":450}]},})
    C(1,[],[0],{type:[1,[],[0]],x:1300,y:3100,w:1300,h:600,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:1500,y:4650,w:550,h:50,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2100,y:5100,w:200,h:700,canJump:true,inView:true,sat:{"pos":{"x":1050,"y":2550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":350},{"x":0,"y":350}],"edges":[{"x":100,"y":0},{"x":0,"y":350},{"x":-100,"y":0},{"x":0,"y":-350}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":350},{"x":0,"y":350}]},})
    C(0,[],[0],{type:[0,[],[0]],x:2600,y:3700,r:100,renderType:"circle",inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:2500,y:5600,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":1250,"y":2800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2100,y:5800,w:600,h:200,canJump:true,inView:true,sat:{"pos":{"x":1050,"y":2900},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":100},{"x":0,"y":100}],"edges":[{"x":300,"y":0},{"x":0,"y":100},{"x":-300,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":100},{"x":0,"y":100}]},})
    C(4,[],[0],{type:[4,[],[0]],x:2500,y:5400,radius:150,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1350,2700],[1400,2700]],"type":"poly","props":{}},endPolygon:{"points":[[1250,2800],[1250,2850]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:300,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
    C(4,[],[0],{type:[4,[],[0]],x:2900,y:5200,radius:150,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1550,2600],[1600,2600]],"type":"poly","props":{}},endPolygon:{"points":[[1450,2700],[1450,2750]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:300,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
    C(1,[],[0],{type:[1,[],[0]],x:2600,y:4800,w:200,h:200,canJump:true,inView:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:2700,y:5175,w:400,h:50,angle:22824.74999999949,rotateSpeed:0.025757575757575757,pivotX:2900,pivotY:5200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:398.36703844456684,boundPlayer:true,})
    C(0,[],[0],{type:[0,[],[0]],x:2700,y:5000,r:100,renderType:"circle",inView:true,})
    C(1,[0],[1],{type:[1,[0],[1]],x:2500,y:4900,w:100,h:100,points:[[1250,2450],[1150,2450]],speed:150,currentPoint:0.4125,collidable:true,pointOn:{"x":1250,"y":2450},pointTo:{"x":1150,"y":2450},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[2500,4900,5],[2300,4900,5]],boundPlayer:true,})
    C(1,[0],[1],{type:[1,[0],[1]],x:2500,y:4800,w:100,h:100,points:[[1250,2400],[1150,2400]],speed:150,currentPoint:1.4125,collidable:true,pointOn:{"x":1150,"y":2400},pointTo:{"x":1250,"y":2400},xv:150,yv:0,inView:true,path:[[2500,4800,5],[2300,4800,5]],boundPlayer:true,})
    C(0,[],[0],{type:[0,[],[0]],x:2400,y:5300,r:100,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2300,y:5300,w:100,h:100,canJump:true,inView:true,})
    C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:5300,w:50,h:50,points:[[1200,2650],[1335,2785]],speed:150,currentPoint:1.2535247393617603,collidable:true,pointOn:{"x":1335,"y":2785},pointTo:{"x":1200,"y":2650},xv:-106.06601717798212,yv:-106.06601717798213,inView:true,path:[[2400,5300,5],[2670,5570,5]],boundPlayer:true,})
    C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:5250,w:50,h:50,points:[[1200,2625],[1335,2490]],speed:150,currentPoint:1.2535247393617603,collidable:true,pointOn:{"x":1335,"y":2490},pointTo:{"x":1200,"y":2625},xv:-106.06601717798212,yv:106.06601717798213,inView:true,path:[[2400,5250,5],[2670,4980,5]],boundPlayer:true,})
    C(1,[],[8],{type:[1,[],[8]],x:4100,y:2700,w:200,h:400,coins:3,currentCoins:2,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
    C(1,[],[0],{type:[1,[],[0]],x:4100,y:2100,w:200,h:600,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:5500,y:2100,w:4500,h:900,canJump:true,inView:false,sat:{"pos":{"x":2750,"y":1050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":2250,"y":0},{"x":2250,"y":450},{"x":0,"y":450}],"edges":[{"x":2250,"y":0},{"x":0,"y":450},{"x":-2250,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":2250,"y":0},{"x":2250,"y":450},{"x":0,"y":450}]},})
    C(1,[],[7],{type:[1,[],[7]],x:7050,y:4350,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
    C(1,[],[7],{type:[1,[],[7]],x:2950,y:7050,w:100,h:100,collected:true,inView:true,color:"#d5d612",coinAmount:1,})
    C(1,[],[7],{type:[1,[],[7]],x:1750,y:4950,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
    C(1,[],[0],{type:[1,[],[0]],x:2250,y:3900,w:50,h:900,canJump:true,inView:true,sat:{"pos":{"x":1125,"y":1950},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":25,"y":0},{"x":25,"y":450},{"x":0,"y":450}],"edges":[{"x":25,"y":0},{"x":0,"y":450},{"x":-25,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":25,"y":0},{"x":25,"y":450},{"x":0,"y":450}]},})
    C(1,[],[0],{type:[1,[],[0]],x:1300,y:3700,w:200,h:2600,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:1500,y:5300,w:600,h:1000,canJump:true,inView:true,sat:{"pos":{"x":750,"y":2650},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":500},{"x":0,"y":500}],"edges":[{"x":300,"y":0},{"x":0,"y":500},{"x":-300,"y":0},{"x":0,"y":-500}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":500},{"x":0,"y":500}]},})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:2500,w:3800,h:600,canJump:true,inView:false,})
    C(0,[],[0],{type:[0,[],[0]],x:1550,y:5250,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:2050,y:5250,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:2050,y:4750,r:100,renderType:"circle",inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:1550,y:4750,r:100,renderType:"circle",inView:true,})
    C(1,[],[13],{type:[1,[],[13]],x:3900,y:2500,w:200,h:600,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:400,y:2100,w:3700,h:400,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:400,y:1900,w:3900,h:200,canJump:true,inView:false,})
    C(1,[],[13],{type:[1,[],[13]],x:0,y:1900,w:400,h:600,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:5400,w:400,h:100,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":2700},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":50},{"x":0,"y":50}],"edges":[{"x":200,"y":0},{"x":0,"y":50},{"x":-200,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3100,y:5400,w:900,h:100,canJump:true,inView:true,sat:{"pos":{"x":1550,"y":2700},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":50},{"x":0,"y":50}],"edges":[{"x":450,"y":0},{"x":0,"y":50},{"x":-450,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":450,"y":0},{"x":450,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:4100,y:5400,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":2050,"y":2700},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:4000,y:5400,w:100,h:100,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[13],{type:[1,[],[13]],x:2900,y:5500,w:1200,h:100,force:6000,dir:{"x":-6000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[0],{type:[1,[],[0]],x:2800,y:5700,w:300,h:500,canJump:true,inView:true,sat:{"pos":{"x":1400,"y":2850},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":250},{"x":0,"y":250}],"edges":[{"x":150,"y":0},{"x":0,"y":250},{"x":-150,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":150,"y":0},{"x":150,"y":250},{"x":0,"y":250}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2900,y:5600,w:200,h:100,canJump:true,inView:true,sat:{"pos":{"x":1450,"y":2800},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":50},{"x":0,"y":50}],"edges":[{"x":100,"y":0},{"x":0,"y":50},{"x":-100,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":50},{"x":0,"y":50}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:5500,w:100,h:100,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":2750},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}],"edges":[{"x":50,"y":0},{"x":0,"y":50},{"x":-50,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":50},{"x":0,"y":50}]},})
    C(1,[],[13],{type:[1,[],[13]],x:2800,y:5500,w:100,h:100,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[13],{type:[1,[],[13]],x:2800,y:5600,w:100,h:100,force:6000,dir:{"x":-6000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[13],{type:[1,[],[13]],x:2700,y:5600,w:100,h:400,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[13],{type:[1,[],[13]],x:2200,y:6000,w:600,h:100,force:6000,dir:{"x":-6000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[13],{type:[1,[],[13]],x:2100,y:6000,w:100,h:300,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[0],{type:[1,[],[0]],x:2200,y:6100,w:500,h:500,canJump:true,inView:true,sat:{"pos":{"x":1100,"y":3050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}],"edges":[{"x":250,"y":0},{"x":0,"y":250},{"x":-250,"y":0},{"x":0,"y":-250}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":250,"y":0},{"x":250,"y":250},{"x":0,"y":250}]},})
    C(0,[],[0],{type:[0,[],[0]],x:4900,y:7200,r:200,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:4700,y:6800,w:200,h:400,canJump:true,inView:true,sat:{"pos":{"x":2350,"y":3400},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":200},{"x":0,"y":200}],"edges":[{"x":100,"y":0},{"x":0,"y":200},{"x":-100,"y":0},{"x":0,"y":-200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":200},{"x":0,"y":200}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3500,y:8000,w:2500,h:2000,canJump:true,inView:true,})
    C(2,[],[0],{type:[2,[],[0]],points:[[4700,6700],[4700,7000],[4650,6850]],most:{"left":2325,"right":2350,"top":3350,"bottom":3500},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[4500,7000],[4550,7150],[4500,7300]],most:{"left":2250,"right":2275,"top":3500,"bottom":3650},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[4400,6500],[4500,6500],[4450,6550]],most:{"left":2200,"right":2250,"top":3250,"bottom":3275},renderType:"poly",inView:true,x:null,y:null,})
    C(2,[],[0],{type:[2,[],[0]],points:[[4450,6050],[4500,6100],[4400,6100]],most:{"left":2200,"right":2250,"top":3025,"bottom":3050},renderType:"poly",inView:true,x:null,y:null,})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:0,w:700,h:1200,canJump:true,sat:{"pos":{"x":0,"y":0},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":350,"y":0},{"x":350,"y":600},{"x":0,"y":600}],"edges":[{"x":350,"y":0},{"x":0,"y":600},{"x":-350,"y":0},{"x":0,"y":-600}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":350,"y":0},{"x":350,"y":600},{"x":0,"y":600}]},inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:700,y:0,w:1000,h:1900,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:1250,w:350,h:100,canJump:true,sat:{"pos":{"x":0,"y":625},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":175,"y":0},{"x":175,"y":50},{"x":0,"y":50}],"edges":[{"x":175,"y":0},{"x":0,"y":50},{"x":-175,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":175,"y":0},{"x":175,"y":50},{"x":0,"y":50}]},inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:550,y:1550,w:100,h:350,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:1450,w:250,h:100,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:1650,w:150,h:100,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:3200,y:7200,w:200,h:2700,canJump:true,inView:true,sat:{"pos":{"x":1600,"y":3600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":1350},{"x":0,"y":1350}],"edges":[{"x":100,"y":0},{"x":0,"y":1350},{"x":-100,"y":0},{"x":0,"y":-1350}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":1350},{"x":0,"y":1350}]},})
    C(1,[],[0],{type:[1,[],[0]],x:100,y:9700,w:3100,h:200,canJump:true,inView:true,sat:{"pos":{"x":50,"y":4850},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1550,"y":0},{"x":1550,"y":100},{"x":0,"y":100}],"edges":[{"x":1550,"y":0},{"x":0,"y":100},{"x":-1550,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1550,"y":0},{"x":1550,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:100,y:6900,w:200,h:2800,canJump:true,inView:true,sat:{"pos":{"x":50,"y":3450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":1400},{"x":0,"y":1400}],"edges":[{"x":100,"y":0},{"x":0,"y":1400},{"x":-100,"y":0},{"x":0,"y":-1400}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":1400},{"x":0,"y":1400}]},})
    C(1,[],[0],{type:[1,[],[0]],x:100,y:6700,w:2600,h:200,canJump:true,inView:true,sat:{"pos":{"x":50,"y":3350},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1300,"y":0},{"x":1300,"y":100},{"x":0,"y":100}],"edges":[{"x":1300,"y":0},{"x":0,"y":100},{"x":-1300,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1300,"y":0},{"x":1300,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:100,y:6300,w:2100,h:100,force:6000,dir:{"x":-6000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[0],{type:[1,[],[0]],x:0,y:6400,w:2200,h:200,canJump:true,inView:true,sat:{"pos":{"x":0,"y":3200},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1100,"y":0},{"x":1100,"y":100},{"x":0,"y":100}],"edges":[{"x":1100,"y":0},{"x":0,"y":100},{"x":-1100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1100,"y":0},{"x":1100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:3400,y:7200,w:100,h:2700,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:100,y:9900,w:3400,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:0,y:6700,w:100,h:3300,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:0,y:6600,w:2900,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:7000,w:200,h:200,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}],"edges":[{"x":100,"y":0},{"x":0,"y":100},{"x":-100,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":100},{"x":0,"y":100}]},})
    C(1,[],[13],{type:[1,[],[13]],x:3100,y:7200,w:100,h:2500,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:300,y:9600,w:2800,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:300,y:6900,w:100,h:2700,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[13],{type:[1,[],[13]],x:400,y:6900,w:2500,h:100,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
    C(1,[],[0],{type:[1,[],[0]],x:400,y:7000,w:2300,h:400,canJump:true,inView:true,sat:{"pos":{"x":200,"y":3500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":200},{"x":0,"y":200}],"edges":[{"x":1150,"y":0},{"x":0,"y":200},{"x":-1150,"y":0},{"x":0,"y":-200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":200},{"x":0,"y":200}]},})
    C(1,[],[0],{type:[1,[],[0]],x:400,y:7400,w:400,h:2200,canJump:true,inView:true,sat:{"pos":{"x":200,"y":3700},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":1100},{"x":0,"y":1100}],"edges":[{"x":200,"y":0},{"x":0,"y":1100},{"x":-200,"y":0},{"x":0,"y":-1100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":1100},{"x":0,"y":1100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:800,y:9200,w:2300,h:400,canJump:true,inView:true,sat:{"pos":{"x":400,"y":4600},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":200},{"x":0,"y":200}],"edges":[{"x":1150,"y":0},{"x":0,"y":200},{"x":-1150,"y":0},{"x":0,"y":-200}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":1150,"y":0},{"x":1150,"y":200},{"x":0,"y":200}]},})
    C(1,[],[0],{type:[1,[],[0]],x:2700,y:7400,w:400,h:1800,canJump:true,inView:true,sat:{"pos":{"x":1350,"y":3700},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":900},{"x":0,"y":900}],"edges":[{"x":200,"y":0},{"x":0,"y":900},{"x":-200,"y":0},{"x":0,"y":-900}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":200,"y":0},{"x":200,"y":900},{"x":0,"y":900}]},})
    C(1,[],[13],{type:[1,[],[13]],x:0,y:6100,w:100,h:300,force:6000,dir:{"x":0,"y":-6000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
    C(1,[],[0],{type:[1,[],[0]],x:100,y:6100,w:1200,h:200,canJump:true,inView:true,sat:{"pos":{"x":50,"y":3050},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":100},{"x":0,"y":100}],"edges":[{"x":600,"y":0},{"x":0,"y":100},{"x":-600,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":600,"y":0},{"x":600,"y":100},{"x":0,"y":100}]},})
    C(1,[],[0],{type:[1,[],[0]],x:1700,y:0,w:2600,h:1900,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:5300,y:400,w:4300,h:1300,canJump:true,inView:false,sat:{"pos":{"x":2650,"y":200},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":2150,"y":0},{"x":2150,"y":650},{"x":0,"y":650}],"edges":[{"x":2150,"y":0},{"x":0,"y":650},{"x":-2150,"y":0},{"x":0,"y":-650}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":2150,"y":0},{"x":2150,"y":650},{"x":0,"y":650}]},})
    C(0,[],[0],{type:[0,[],[0]],x:5400,y:3700,r:100,renderType:"circle",inView:false,})
    C(0,[],[0],{type:[0,[],[0]],x:5700,y:3400,r:100,renderType:"circle",inView:false,})
    C(0,[],[0],{type:[0,[],[0]],x:5500,y:3200,r:100,renderType:"circle",inView:false,})
    C(0,[],[0],{type:[0,[],[0]],x:5700,y:3900,r:100,renderType:"circle",inView:false,})
    C(1,[],[19],{type:[1,[],[19]],x:4800,y:4800,w:400,h:400,speedInc:1.5,inView:true,speedChangePermanent:false,speedMult:1.5,})
    C(1,[],[0],{type:[1,[],[0]],x:3800,y:3850,w:100,h:150,canJump:true,inView:false,sat:{"pos":{"x":1900,"y":1925},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":75},{"x":0,"y":75}],"edges":[{"x":50,"y":0},{"x":0,"y":75},{"x":-50,"y":0},{"x":0,"y":-75}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":75},{"x":0,"y":75}]},})
    C(1,[],[0],{type:[1,[],[0]],x:3800,y:2500,w:100,h:1250,canJump:true,inView:false,sat:{"pos":{"x":1900,"y":1250},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":625},{"x":0,"y":625}],"edges":[{"x":50,"y":0},{"x":0,"y":625},{"x":-50,"y":0},{"x":0,"y":-625}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":50,"y":0},{"x":50,"y":625},{"x":0,"y":625}]},})
    C(1,[],[0],{type:[1,[],[0]],x:5800,y:1700,w:3800,h:400,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:5300,y:1700,w:100,h:400,canJump:true,inView:false,})
    C(1,[],[0],{type:[1,[],[0]],x:2100,y:4900,w:200,h:100,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2100,y:4750,w:50,h:150,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:2200,y:3900,w:50,h:600,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:1600,y:3900,w:600,h:300,canJump:true,inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:1500,y:3700,w:600,h:200,canJump:true,inView:false,})
    C(0,[],[0],{type:[0,[],[0]],x:2250,y:4500,r:50,renderType:"circle",inView:true,})
    C(1,[],[0],{type:[1,[],[0]],x:1500,y:4600,w:500,h:50,canJump:true,inView:true,})
    C(0,[],[0],{type:[0,[],[0]],x:2000,y:4650,r:50,renderType:"circle",inView:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:1800,y:4375,w:400,h:50,angle:-45649.50000000493,rotateSpeed:-0.051515151515151514,pivotX:2000,pivotY:4400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:-796.7340768892376,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:1500,y:4375,w:400,h:50,angle:45649.500000005224,rotateSpeed:0.051515151515151514,pivotX:1700,pivotY:4400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:796.7340768892426,boundPlayer:true,})
    C(1,[],[0],{type:[1,[],[0]],x:1500,y:3900,w:100,h:150,canJump:true,inView:false,})
    C(1,[],[12],{type:[1,[],[12]],x:1500,y:4050,w:100,h:50,tpx:5000,tpy:5000,bgColor:"#1f2229",tileColor:"#323645",changeColor:false,inView:true,})
    C(2,[],[1],{type:[2,[],[1]],points:[[1800,4200],[1900,4200],[1850,4250]],most:{"left":900,"right":950,"top":2100,"bottom":2125},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
    C(2,[],[1],{type:[2,[],[1]],points:[[1850,4550],[1900,4600],[1800,4600]],most:{"left":900,"right":950,"top":2275,"bottom":2300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
    C(1,[],[20],{h:100,w:150,y:4800,x:2150,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.7;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[20],{h:200,w:250,y:4600,x:2000,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.7;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[],[20],{h:550,w:750,y:4050,x:1500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.7;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
    C(1,[1],[1],{type:[1,[1],[1]],x:5350,y:350,w:500,h:100,angle:46391.99999999819,rotateSpeed:0.20606060606060606,pivotX:5600,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:189.17499999999228,inView:false,initialRotation:809.6931465851777,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:5350,y:-50,w:500,h:100,angle:-46391.99999999818,rotateSpeed:-0.20606060606060606,pivotX:5600,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:189.17499999999228,inView:false,initialRotation:-809.6931465851775,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:5750,y:-50,w:500,h:100,angle:-46523.99999999818,rotateSpeed:-0.20606060606060606,pivotX:6000,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.9916666666591,inView:false,initialRotation:-811.9969811978101,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:5750,y:350,w:500,h:100,angle:46523.99999999819,rotateSpeed:0.20606060606060606,pivotX:6000,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.9916666666591,inView:false,initialRotation:811.9969811978103,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6150,y:350,w:500,h:100,angle:46655.99999999819,rotateSpeed:0.20606060606060606,pivotX:6400,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.80833333332595,inView:false,initialRotation:814.3008158104428,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6550,y:350,w:500,h:100,angle:46835.99999999812,rotateSpeed:0.20606060606060606,pivotX:6800,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.55833333332617,inView:false,initialRotation:817.4424084640314,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6950,y:350,w:500,h:100,angle:47231.99999999811,rotateSpeed:0.20606060606060606,pivotX:7200,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.00833333332668,inView:false,initialRotation:824.3539123019287,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6150,y:-50,w:500,h:100,angle:-46655.99999999818,rotateSpeed:-0.20606060606060606,pivotX:6400,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.80833333332595,inView:false,initialRotation:-814.3008158104426,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6550,y:-50,w:500,h:100,angle:-46835.99999999812,rotateSpeed:-0.20606060606060606,pivotX:6800,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.55833333332617,inView:false,initialRotation:-817.4424084640314,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:6950,y:-50,w:500,h:100,angle:-47231.99999999811,rotateSpeed:-0.20606060606060606,pivotX:7200,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:188.00833333332668,inView:false,initialRotation:-824.3539123019287,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:7350,y:-50,w:500,h:100,angle:-47615.9999999981,rotateSpeed:-0.20606060606060606,pivotX:7600,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:187.47499999999383,inView:false,initialRotation:-831.0559766295867,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:7350,y:350,w:500,h:100,angle:47615.9999999981,rotateSpeed:0.20606060606060606,pivotX:7600,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:187.47499999999383,inView:false,initialRotation:831.0559766295867,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:7750,y:350,w:500,h:100,angle:48953.9999999981,rotateSpeed:0.20606060606060606,pivotX:8000,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:185.61666666666218,inView:false,initialRotation:854.4084820212709,boundPlayer:true,})
    C(1,[1],[1],{type:[1,[1],[1]],x:7750,y:-50,w:500,h:100,angle:-48569.9999999981,rotateSpeed:-0.20606060606060606,pivotX:8000,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:186.14999999999503,inView:false,initialRotation:-847.7064176936126,boundPlayer:true,})
    C(1,[],[22],{type:[1,[],[22]],x:6000,y:5200,w:200,h:200,name:"Planet of Peaceful Beginnings",acronym:"PoPB",difficulty:"Peaceful",difficultyNumber:"0.3",musicPath:null,renderType:"portal",inView:true,mapName:"popb",})
    C(1,[],[22],{type:[1,[],[22]],x:6100,y:6000,w:200,h:200,name:"Planet of Simple Challenges",acronym:"PoSC",difficulty:"Peaceful",difficultyNumber:"0.7",musicPath:null,renderType:"portal",inView:true,mapName:"posc",})
    C(1,[],[22],{type:[1,[],[22]],x:6800,y:4900,w:200,h:200,name:"Planet of the Vibing Vault",acronym:"PoVV",difficulty:"Moderate",difficultyNumber:"0.4",musicPath:null,renderType:"portal",inView:false,mapName:"povv",})
    C(1,[],[22],{type:[1,[],[22]],x:4200,y:6700,w:200,h:200,name:"Planet of Simple Challenges",acronym:"PoCA",difficulty:"Moderate",difficultyNumber:"0.5",musicPath:null,renderType:"portal",inView:false,mapName:"poca",})
    C(1,[],[22],{type:[1,[],[22]],x:2900,y:6200,w:200,h:200,name:"Planet of Speed",acronym:"PoSPD",difficulty:"Difficult",difficultyNumber:"0.6",musicPath:null,renderType:"portal",inView:false,mapName:"pospd",})
    C(1,[],[22],{type:[1,[],[22]],x:3700,y:6800,w:200,h:200,name:"Planet of Safezones",acronym:"PoS",difficulty:"Hardcore",difficultyNumber:"0.01",musicPath:null,renderType:"portal",inView:false,mapName:"pos",})
    C(1,[],[22],{type:[1,[],[22]],x:3400,y:4100,w:200,h:200,name:"Planet of Quick Thinking",acronym:"PoQT",difficulty:"Exhausting",difficultyNumber:"0.1",musicPath:null,renderType:"portal",inView:true,mapName:"poqt",})
    C(1,[],[22],{type:[1,[],[22]],x:2100,y:3700,w:200,h:200,name:"Planet of Prehistory",acronym:"PoPH",difficulty:"Exhausting",difficultyNumber:"0.7",musicPath:null,renderType:"portal",inView:false,mapName:"poph",})
    C(1,[],[22],{type:[1,[],[22]],x:2300,y:5600,w:200,h:200,name:"Planet of Lost Sanity",acronym:"PoLS",difficulty:"Relentless",difficultyNumber:"0.7",musicPath:null,renderType:"portal",inView:false,mapName:"pols",})
    C(1,[],[22],{type:[1,[],[22]],x:500,y:1200,w:200,h:200,name:"Planet of Difficulty Chart",acronym:"PoDC",difficulty:"Agonizing",difficultyNumber:"0.4",musicPath:null,renderType:"portal",inView:false,mapName:"podc",})
    C(1,[],[11],{type:[1,[],[11]],x:4550,y:4550,w:900,h:900,renderAbove:true,})
    C(1,[],[11],{type:[1,[],[11]],x:2800,y:4700,w:300,h:100,renderAbove:true,})
    C(1,[],[11],{type:[1,[],[11]],x:2300,y:3900,w:300,h:100,renderAbove:true,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5640,y:5310,w:50,h:50,size:30,text:"friendly",angle:20,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5640,pivotY:5310,rotateSpeed:0,initialRotation:0.3490658503988659,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5620,y:5360,w:50,h:50,size:30,text:"planets",angle:20,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5620,pivotY:5360,rotateSpeed:0,initialRotation:0.3490658503988659,})
    C(3,[1],[20],{type:[3,[1],[20]],x:4640,y:5570,w:50,h:50,size:30,text:"tricky",angle:-20,story:false,fontSize:60,hex:"#FFFFFF",pivotX:4640,pivotY:5570,rotateSpeed:0,initialRotation:-0.3490658503988659,})
    C(3,[1],[20],{type:[3,[1],[20]],x:4660,y:5620,w:50,h:50,size:30,text:"planets",angle:-20,story:false,fontSize:60,hex:"#FFFFFF",pivotX:4660,pivotY:5620,rotateSpeed:0,initialRotation:-0.3490658503988659,})
    C(3,[1],[20],{type:[3,[1],[20]],x:4320,y:4860,w:50,h:50,size:30,text:"dangerous",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:4320,pivotY:4860,rotateSpeed:0,initialRotation:0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:4310,y:4920,w:50,h:50,size:30,text:"planets",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:4310,pivotY:4920,rotateSpeed:0,initialRotation:0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5290,y:4370,w:50,h:50,size:30,text:"difficulty",angle:-10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5290,pivotY:4370,rotateSpeed:0,initialRotation:-0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5300,y:4420,w:50,h:50,size:30,text:"chart",angle:-10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5300,pivotY:4420,rotateSpeed:0,initialRotation:-0.17453292519943295,})
    C(3,[],[20],{type:[3,[],[20]],x:5950,y:3650,w:50,h:50,size:30,text:"rollercoaster!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7350,w:50,h:50,size:30,text:"WARNING",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7350,w:50,h:50,size:30,text:"WARNING",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7500,w:50,h:50,size:30,text:"Authorized",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7500,w:50,h:50,size:30,text:"Authorized",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7550,w:50,h:50,size:30,text:"Personnel",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7550,w:50,h:50,size:30,text:"Personnel",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7600,w:50,h:50,size:30,text:"Only",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7600,w:50,h:50,size:30,text:"Only",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7750,w:50,h:50,size:30,text:"Restricted",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7750,w:50,h:50,size:30,text:"Restricted",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:6700,y:7800,w:50,h:50,size:30,text:"Area",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7200,y:7800,w:50,h:50,size:30,text:"Area",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:7950,y:9800,w:50,h:50,size:30,text:"lol how did you get here??",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:5250,y:6350,w:50,h:50,size:30,text:"rollercoaster!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:650,y:5700,w:50,h:50,size:30,text:"multiplayer pong",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:5600,y:1600,w:50,h:50,size:30,text:"emergency",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[],[20],{type:[3,[],[20]],x:5600,y:1650,w:50,h:50,size:30,text:"shutdown",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
    C(3,[1],[20],{type:[3,[1],[20]],x:5600,y:550,w:50,h:50,size:30,text:"warning",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5600,pivotY:550,rotateSpeed:0,initialRotation:0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5600,y:650,w:50,h:50,size:30,text:"extremely",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5600,pivotY:650,rotateSpeed:0,initialRotation:0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5600,y:700,w:50,h:50,size:30,text:"dangerous",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5600,pivotY:700,rotateSpeed:0,initialRotation:0.17453292519943295,})
    C(3,[1],[20],{type:[3,[1],[20]],x:5600,y:750,w:50,h:50,size:30,text:"area",angle:10,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5600,pivotY:750,rotateSpeed:0,initialRotation:0.17453292519943295,})

    spawnPosition.x=5000;
    spawnPosition.y=5000;
    shared.respawnPlayer();
    colors.background="#323645"; colors.tile="#1f2229";

    const interpolate = (s,e,t) => {return (1-t) * s + e * t};

    // C(0,[],[26],{
    //     x: spawnPosition.x,
    //     y: spawnPosition.y,
    //     r: 50,
    //     musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
    // });

    mapDimensions.x=10000;
    mapDimensions.y=10000;

    // youtube video player
    {
        let createdYT = false;
        const dimensions = {x:800,y:7400,w:1900,h:1800};
        C(0,[],[3],{x:-1E9,y:0,r:1,sf:()=>{
            if(createdYT === true) return; 
            let cullingMinX = camera.x-canvas.w/2;
            let cullingMaxX = camera.x+canvas.w/2;
            let cullingMinY = camera.y-canvas.h/2;
            let cullingMaxY = camera.y+canvas.h/2;

            const o = {
                topLeft: {
                    x: dimensions.x, y: dimensions.y
                },
                dimensions: {
                    x: dimensions.w,
                    y: dimensions.h
                }
            }
            if(o.topLeft.x > cullingMaxX || o.topLeft.x + o.dimensions.x < cullingMinX || o.topLeft.y > cullingMaxY || o.topLeft.y + o.dimensions.y < cullingMinY) return;

            createdYT = true;

            (async()=>{
                const urls = ['https://www.youtube.com/watch?v=0Ogenr6hVDY', 'https://www.youtube.com/watch?v=HQgIzUTP9A4', 'https://www.youtube.com/watch?v=IipVhYNTM5w', 'https://www.youtube.com/watch?v=GF8GKCEAPRU'];// TODO: replace these last two with updated versions (reupload pre-trailer, all the planets that are really in the final game)
                const u = urls[Math.floor(Math.random() * urls.length)];
                await shared.importYoutube();
    
                const {iframe} = shared.playYoutubeVideo(u, {width: dimensions.w, height: dimensions.h, volume: 0});
                C(1,[],[3],{...dimensions, cr:()=>{
                    
                    const {a,b,c,d,e,f} = ctx.getTransform();
                    // according to docs, 
                    // const x = 
                    // if a point originally had coordinates (x,y) then after the
                    // transformation it will have coordinates (ax+cy+e,bx+dy+f)
                    const x = dimensions.x;
                    const y = dimensions.y;
                    const canvasDimensions = canvas.getBoundingClientRect();
                    const left = (a*x + c*y + e) / canvas.width * canvasDimensions.width;
                    const top = (b*x + d*y + f) / canvas.height * canvasDimensions.height;
                    // same thing for w and h
                    const w = dimensions.w; const h = dimensions.h;
                    const width = (a*(x+w) + c*(y+h) + e) / canvas.width * canvasDimensions.width - left;
                    const height = (b*(x+w) + d*(y+h) + f) / canvas.height * canvasDimensions.height - top;
                    iframe.style.top = `${top}px`;
                    iframe.style.left = `${left}px`;
                    iframe.style.width = `${width}px`;
                    iframe.style.height = `${height}px`;
                }});
                shared.resetFns.push(() => {
                    iframe.remove();
                })
            })();
        }});

        // setting scale
        {
            let collided = false; let fadeOutTimer=null;let interpScale = 1;
            C(1,[],[3],{x:0,y:6600,w:3500,h:3400,cr:()=>{},ef:(p,res,o)=>{
                collided = true;
                fadeOutTimer = 2000;
            },sf:()=>{
                if(collided === true){
                    interpScale = interpolate(interpScale, 0.5, 0.1);
                    shared.changeCameraScale(interpScale);
                } else {
                    if(fadeOutTimer !== null){
                        if(collided === false)fadeOutTimer -= 16.66;

                        interpScale = interpolate(interpScale, 1, 0.1);
                        shared.changeCameraScale(interpScale);

                        if(fadeOutTimer <= 0) {
                            shared.changeCameraScale(1);
                            fadeOutTimer = null;
                        }
                    }
                }

                collided = false;
            }})
        }
    }

    // music
    {
        const links = [
            'https://www.youtube.com/watch?v=9EHXqi0ez54',
        ];

        C(1,[],[26],{musicPath:links[Math.floor(Math.random() * links.length)],x:4800,y:4800,w:400,h:400});
    }

    // particles
    {
        let ps=[];
        let pcol=false;
        C(0,[],[3],{
            x: 4050, y: 5900, r: 100,
            cr:(o)=>{
                ps.push([
                    o.pos.x,
                    o.pos.y,
                    Math.PI * Math.random() * 2,
                    400,
                    pcol === true ? 'yellow' : 'white'
                ]);
                //0.012,     2,             3,            0.4
                //spawnRate, particleSpeed, particleSize, particleLifespan
                for (let p = 0; p < ps.length; p++) {
                    let speed = 8;
                    speed *= ps[p][3] / 400;
                    ps[p][0] += Math.cos(ps[p][2]) * speed;
                    ps[p][1] += Math.sin(ps[p][2]) * speed;
                    ps[p][3] -= 1000/60;
                    if (ps[p][3] < 0) {
                        ps.splice(p, 1);
                    }
                }
                ctx.globalAlpha = 1;
                for (let p = 0; p < ps.length; p++) {
                    ctx.fillStyle = ps[p][4];
                    ctx.globalAlpha = ps[p][3] / 400;
                    ctx.beginPath();
                    ctx.arc(
                        ps[p][0],
                        ps[p][1],
                        6,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();
                    ctx.closePath();
                }
                pcol = false;
                ctx.globalAlpha = 1;
            },
            ef:()=>{
                pcol = true;
            }
        });
    }

    // nonlinear flag distort
    {
        let collided = false;
        let distortionActive = false;
        let importingDistortion = false;
        let restoreDrawImgTo;
        let tOffset;
        C(1,[],[3],{x:1500,y:4700,w:600,h:600,cr:()=>{},ef:()=>{
            collided = true;
        },sf:()=>{
            if(distortionActive === false && collided === true && importingDistortion === false){
                (async() => {
                    importingDistortion = true;
                    await shared.initDistortion(`#version 300 es
                        in highp vec4 pos;
                        
                        uniform float uTime;
                        
                        out highp vec2 vTextureCoord;
                        
                        void main()
                        {
                            gl_Position = pos;
                            gl_Position.x += 0.1*sin(6.0*uTime + 3.0*pos.y);
                            gl_Position.y += 0.2*sin(6.0*uTime - 6.0*pos.x);
                        
                            // texture coordinate is just pos but within 0-1 instead of -1 to 1.
                            // So scale in that range.
                            vTextureCoord = (pos.xy+1.)*0.5;
                        }`,
                        `#version 300 es
                        in highp vec2 vTextureCoord;
                        
                        out highp vec4 outColor;
                        
                        uniform sampler2D uSampler;
                        
                        void main()
                        {
                            // outColor = vec4(vTextureCoord.x, 0.0, 0.0, 1.0);
                            outColor = texture(uSampler, vTextureCoord);//vec4(1, 0, 0.5, 1);
                    }`, ['uTime'], [() => {if(tOffset === undefined){tOffset = window.frames;} return (window.frames - tOffset) / 60;}]);
                    restoreDrawImgTo = ctx.drawImage;
                    ctx.drawImage = () => {};
                    distortionActive = true;
                    importingDistortion = false;
                })();
            } else if(distortionActive === true && collided === false){
                if(restoreDrawImgTo !== undefined) {
                    ctx.drawImage = restoreDrawImgTo;
                    restoreDrawImgTo = undefined;
                }
                tOffset = undefined;
                shared.unInitDistortion();
                distortionActive = false;
            }
            collided = false;
        }})
    }

    // art canvas
    {
        const circles=[];
        
        C(1,[],[3],{x:100,y:4900,w:1100,h:1100,cr:(o)=>{
            ctx.fillStyle = '#f0f0f0';

            ctx.save();
            ctx.beginPath();
            ctx.rect(o.pos.x,o.pos.y,o.dimensions.x,o.dimensions.y);
            ctx.fill();
            ctx.clip();
            ctx.closePath();

            ctx.fillStyle = 'black';

            for(let i = 0; i < circles.length; i+=4){
                ctx.fillStyle = circles[i+3] === 0 ? '#0f0f0f' : '#f0f0f0';
                ctx.beginPath();
                ctx.arc(circles[i], circles[i+1], circles[i+2], 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
            
            ctx.restore();
        },ef:(p)=>{
            circles.push(p.pos.x, p.pos.y, p.sat.r, 0);
        }});

        C(1,[],[3],{x:100,y:3700,w:1100,h:1100,cr:(o)=>{
            ctx.fillStyle = '#0f0f0f';

            ctx.save();
            ctx.beginPath();
            ctx.rect(o.pos.x,o.pos.y,o.dimensions.x,o.dimensions.y);
            ctx.fill();
            ctx.clip();
            ctx.closePath();

            ctx.fillStyle = 'black';

            for(let i = 0; i < circles.length; i+=4){
                ctx.fillStyle = circles[i+3] === 1 ? '#0f0f0f' : '#f0f0f0';
                ctx.beginPath();
                ctx.arc(circles[i], circles[i+1]-1200, circles[i+2], 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
            
            ctx.restore();
        },ef:(p)=>{
            circles.push(p.pos.x, p.pos.y+1200, p.sat.r, 1);
        }});

        // tp and wall extension
        C(1,[],[12],{x:100,y:3400,w:1100,h:200,tpx:5000,tpy:5000});
        C(1,[],[0],{x:-100,y:3000,w:1500,h:300});
    }

    // how the tables have turned (SCRAPPED)

    // let arcs = [];
    // for(let i = 0; i < 25; i++){
    //     arcs.push({
    //         radius: Math.random() * 98 * 4,
    //         startAngle: Math.random() * Math.PI * 2,
    //         endAngle: Math.random() * Math.PI * 2,
    //         startAngleRotateSpeed: 0.003,
    //         endAngleRotateSpeed: 0.003 * (Math.random()*0.67+0.34),
    //         thickness: (Math.random() ** 2) * 7 * 3 / 2,
    //         thicknessOverTimeVariance: Math.random() * 0.3 * 4// sine wave
    //     });
    // }
    // for(let i = 0; i < 4; i++){
    //     C(4,[],[3],{
    //         "r":400,"innerRadius":0,"startSliceAngle":i/4 * Math.PI * 2,
    //         "endSliceAngle":(i+.8)/4 * Math.PI * 2,"startSliceAngleRotateSpeed":0.005 * 8,
    //         "endSliceAngleRotateSpeed":0.005 * 8,"x":6800,"y":4400,
    //         cr:(o) => {
    //             // some arcs orbiting the center
    //             ctx.save();
    
    //             ctx.fillStyle = blendColor('#000000','#0000FF', (Math.sin(shared.time / 300)+1)/2 * 0.1);
    //             ctx.globalAlpha = 0.32;
                
    //             ctx.beginPath();
    //             ctx.moveTo(o.pos.x + Math.cos(o.startSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.startSliceAngle) * o.innerRadius);
    //             ctx.lineTo(o.pos.x + Math.cos(o.startSliceAngle) * o.sat.r, o.pos.y + Math.sin(o.startSliceAngle) * o.sat.r);
    //             ctx.arc(o.pos.x, o.pos.y, o.sat.r, o.startSliceAngle, o.endSliceAngle);
    //             ctx.lineTo(o.pos.x + Math.cos(o.endSliceAngle) * o.innerRadius, o.pos.y + Math.sin(o.endSliceAngle) * o.innerRadius);
    //             ctx.fill();
    //             ctx.clip();
    //             ctx.closePath();
    
    //             ctx.strokeStyle = 'white';
    //             ctx.globalAlpha = 1;
    //             for(let i = 0; i < arcs.length; i++){
    //                 const a = arcs[i];
    //                 ctx.lineWidth = (a.thickness + Math.sin(window.frames / 60) * a.thicknessOverTimeVariance);
    //                 ctx.beginPath();
    //                 ctx.arc(o.pos.x, o.pos.y, a.radius, a.startAngle, a.endAngle);
    //                 ctx.stroke();
    //                 ctx.closePath();
    
    //                 a.startAngle += a.startAngleRotateSpeed * 1000 / 60;
    //                 a.endAngle += a.endAngleRotateSpeed * 1000 / 60;
    //             }
    //             ctx.lineWidth = 5;
    
    //             ctx.restore();
    //         },ef:(p,res,o)=>{
    //             let angle = Math.atan2(p.pos.y - o.pos.y, p.pos.x - o.pos.x);
    //             let magnitude = Math.sqrt((o.pos.x-p.pos.x)**2+(o.pos.y-p.pos.y)**2);
    
    //             angle += o.startSliceAngleRotateSpeed;
    
    //             p.pos.x = o.pos.x + Math.cos(angle) * magnitude;
    //             p.pos.y = o.pos.y + Math.sin(angle) * magnitude;
    //         }
    //     })
    // }

    // those rotating doors you see at the malls
    {
        let angularVel=0;
        let angleDelta;
        for(let i = 0; i < 2; i++){
            const w = (400*Math.sqrt(2) - 100) * 2;
            const h = 100;
            C(1,[1],[0],{"w":w,"h":h,"x":6800-w/2,"y":4400-h/2,"initialRotation":i === 0 ? Math.PI/4 : Math.PI*3/4,"rotateSpeed":0,"pivotX":6800,"pivotY":4400,ef:(p,res,o)=>{
                const overlapAngle = Math.atan2(res.overlapN.y, res.overlapN.x);
                const angle = o.rotation;
        
                const relativeAngle = Math.atan2(p.pos.y - o.pivotY, p.pos.x - o.pivotX);
        
                const magMult = Math.cos(relativeAngle - angle) * Math.cos(overlapAngle - angle + Math.PI/2);
        
                // finding collision point
                const collisionPoint = [
                    p.pos.x + Math.cos(overlapAngle) * (p.sat.r - res.overlap),
                    p.pos.y + Math.sin(overlapAngle) * (p.sat.r - res.overlap),
                ]
        
                const dist = Math.sqrt((collisionPoint[0]-o.pivotX)**2 + (collisionPoint[1]-o.pivotY)**2);

                angularVel += magMult * res.overlap * dist / 10000000 / 6;
            },sf:(o,p)=>{
                if(i === 0){
                    o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
                    o.sat.rotate(angleDelta);
                    o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
                    
                    o.rotation += angleDelta;
                    o.dimensions = generateDimensions(o);
                    return;
                }
                angularVel += 0.0000038;

                function shortAngleDist(a0,a1) {
                    const max = Math.PI*2;
                    const da = (a1 - a0) % max;
                    return 2*da % max - da;
                }
                
                function interpolateDirection(a0,a1,t) {
                    return a0 + shortAngleDist(a0,a1)*t;
                }

                angularVel *= 0.99;
        
                angleDelta = angularVel * 16.66;
        
                o.sat.translate(o.pos.x-o.pivotX, o.pos.y-o.pivotY);
                o.sat.rotate(angleDelta);
                o.sat.translate(o.pivotX-o.pos.x, o.pivotY-o.pos.y);
                
                o.rotation += angleDelta;
                o.dimensions = generateDimensions(o);
            },cr:(o)=>{
                ctx.fillStyle = colors.tile;
                ctx.strokeStyle = '#f0f0f0';
        
                ctx.beginPath();
                for(let i = 0; i < o.sat.points.length; i++){
                    ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
                }
                ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
                ctx.fill();
                // ctx.stroke();
                ctx.closePath();
        
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(o.pivotX, o.pivotY, 42, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            }});
            let o = obstacles.pop();
            obstacles.unshift(o);
        }
    }

    // tileColor matrix obs
    // {
    //     "x": 1600,
    //     "y": 3450,
    //     "w": 150,
    //     "h": 150,
    //     "type": "rotate-normal",
    //     "angle": 11412.374999999789,
    //     "rotateSpeed": 45,
    //     "pivotX": 1600,
    //     "pivotY": 3450,
    //     "distToPivot": 0,
    //     "canCollide": true,
    //     "renderType": "rotating",
    //     "cullingRadius": 106.06601717798213,
    //     "unSim": 0,
    //     "inView": true
    // },

    // {
    //     x: params.x * 2 - params.w,
    //     y: params.y * 2 - params.h,
    //     initialRotation: params.angle * 180 / Math.PI,
    //     rotateSpeed: params.rotateSpeed / 360 / 220 * 1.36 * 1000/60,
    //     pivotX: params.pivotX * 2,
    //     pivotY: params.pivotY * 2
    // };
    C(1,[1],[0],{x:1600*2-150,y:3450*2-150,w:150*2,h:150*2,initialRotation:2.39,rotateSpeed:0.01287879,pivotX:1600*2,pivotY:3450*2,cr:(o)=>{
        let cullingMinX = camera.x-canvas.w/2;
        let cullingMaxX = camera.x+canvas.w/2;
        let cullingMinY = camera.y-canvas.h/2;
        let cullingMaxY = camera.y+canvas.h/2;
        if(o.topLeft.x > cullingMaxX || o.topLeft.x + o.dimensions.x < cullingMinX || o.topLeft.y > cullingMaxY || o.topLeft.y + o.dimensions.y < cullingMinY) return;

        const vec = new SAT.Vector(0,0);
        ctx.font = '1000 30px Inter';
        ctx.textAlign = 'middle'; ctx.textBaseline = 'center';
        // ctx.fillStyle = shared.tileColor;

        ctx.fillStyle = blendColor('#00ff41','#00ff41',0.5);
        
        let i = 0;
        for(let x = 2950/*+Math.sin(window.frames/60)*20*/; x < 3450; x += 20){
            for(let y = 6650/*+Math.cos(window.frames/60)*20*/; y < 7150; y += 20){
                vec.x = x; vec.y = y;
                if(SAT.pointInPolygon(vec, o.sat)){
                    ctx.fillText(String.fromCharCode((i-Math.round(window.frames*0.6)) % 256),x,y);
                }
                i++;
            }
        }
    }});

    // pong

    {
        // conveyors
        C(1,[],[13],{"w":600,"h":600,"conveyorForce":0.3,"conveyorAngle":180,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":4500,"y":7400});
        C(1,[],[13],{"w":600,"h":600,"conveyorForce":0.3,"conveyorAngle":0,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":5100,"y":7400});

        // C(1,[],[13],{"w":100,"h":100,"conveyorForce":0.3,"conveyorAngle":-90,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":7900,"y":3300});
        // C(1,[],[13],{"w":100,"h":100,"conveyorForce":0.3,"conveyorAngle":90,"conveyorAngleRotateSpeed":0,"conveyorFriction":0.8,"x":7900,"y":3400});

        // bounding circles
        // C(1,[],[18],{"w":1200,"h":600,"sizeMult":1,"sizeChangePermanent":false,"x":4500,"y":7400});

        C(1,[],[15],{x:4500,y:7400,w:1305,h:600,axisSpeedMultX:0,axisSpeedMultY:1,sf:(o)=>{
            o.pos.x = 4400 + (Math.sin(window.frames / 100) * 100 + 100) % 100 - 5;
        }});
        obstacles.unshift(obstacles.pop());
        // C(4,[],[15],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI/2,"endSliceAngle":-Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":8100,"y":3400,axisSpeedMultX:0, axisSpeedMultY:1});
        // C(4,[],[0],{"r":100,"innerRadius":0,"startSliceAngle":-Math.PI/2,"endSliceAngle":Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":8100,"y":3400});
        
        // C(4,[],[15],{"r":100,"innerRadius":0,"startSliceAngle":-Math.PI/2,"endSliceAngle":Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":7800,"y":3400,axisSpeedMultX:0, axisSpeedMultY:1});
        // C(4,[],[0],{"r":100,"innerRadius":0,"startSliceAngle":Math.PI/2,"endSliceAngle":-Math.PI/2,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":7800,"y":3400});

        // fix camera to position
        let scoreLeft=0;let scoreRight=0;let scoreObs;
        {
            let lastCollided=false;let collided=false;let fadeOutTimer=-1;let interpScale;C(1,[],[3],{
            x: 4500,y:7400,w:1200,h:600,
            cr:() => {},
            ef:()=>{
                if(lastCollided === false){
                    interpScale = shared.camera.scale;

                    scoreObs.text = '0 - 0';
                    scoreObs.alpha = 0;
                    scoreLeft = scoreRight = 0;
                }

                fadeOutTimer = -1;
                shared.camera.x = interpolate(shared.camera.x, 5100, 0.1);
                shared.camera.y = interpolate(shared.camera.y, 7700, 0.1);

                scoreObs.alpha = interpolate(scoreObs.alpha, 1, 0.01);

                interpScale = interpolate(interpScale, 2, 0.01);
                changeCameraScale(interpScale);

                shared.camera.numControlledBy = 1;

                collided = true;
            },
            sf:(o,p)=>{
                if(lastCollided === true && collided === false) {
                    fadeOutTimer = 2000;
                }

                if(fadeOutTimer !== -1){
                    fadeOutTimer -= 16.66;

                    scoreObs.alpha = interpolate(scoreObs.alpha, 0, 0.03);

                    const t = Math.max(0.1,1 - (fadeOutTimer / 2000) ** 2);

                    shared.camera.x = interpolate(shared.camera.x, p.pos.x, t);
                    shared.camera.y = interpolate(shared.camera.y, p.pos.y, t);

                    interpScale = interpolate(interpScale, 1, 0.1);
                    shared.changeCameraScale(interpScale);

                    if(fadeOutTimer <= 0) {
                        scoreObs.text = '';
                        shared.changeCameraScale(1);
                        shared.camera.numControlledBy = 0;
                        lastCameraX = lastCameraY = undefined;
                        fadeOutTimer = -1;
                    }
                }

                lastCollided = collided;
                collided = false;
            }
        })};

        // ball
        let pongPlayer;let pongBall;
        
        {
            let ang = Math.random() * Math.PI * 2;
            let mag = 0.3 * 3;
            let xv = Math.cos(ang);
            let yv = Math.sin(ang);
            const bounds = [4500, 7400, 5700, 8000];
            C(0,[],[3],{x: 5100, y: 7700, r: 49.5,collidable:false,sf:(e)=>{
                e.pos.y += yv * 1000/60 * mag;
                e.pos.x += xv * 1000/60 * mag;
                topX = e.pos.x; topY = e.pos.y;
                if ((e.pos.x - e.sat.r) < bounds[0] || e.pos.x + e.sat.r > bounds[2]) {
                    xv = xv * -1;
                    e.pos.x = Math.max(bounds[0] + e.sat.r, e.pos.x);
                    e.pos.x = Math.min(bounds[2] - e.sat.r, e.pos.x);

                    if(e.pos.x < 5250) scoreLeft++;
                    else scoreRight++;

                    if(scoreObs.text !== ''){
                        scoreObs.text = scoreRight + ' - ' + scoreLeft;
                        e.pos.x = 5100;
                        e.pos.y = 7700;
                    }
                    mag = 0.3 * 3;
                }
                if ((e.pos.y - e.sat.r) < bounds[1] || e.pos.y + e.sat.r > bounds[3]) {
                    yv = yv * -1;
                    e.pos.y = Math.max(bounds[1] + e.sat.r, e.pos.y);
                    e.pos.y = Math.min(bounds[3] - e.sat.r, e.pos.y);
                }

                if(pongPlayer !== undefined){
                    mag *= 1.0003;
                } else {
                    mag = 0.3 * 3;
                }
                

                if(pongPlayer !== undefined){
                    const res = new SAT.Response();
                    const col = SAT.testCircleCircle(e.sat, pongPlayer.sat, res);

                    if(col === true){
                        const angle = Math.atan2(e.pos.y - pongPlayer.pos.y, e.pos.x - pongPlayer.pos.x);

                        e.pos.x -= res.overlapV.x;
                        e.pos.y -= res.overlapV.y;

                        xv = Math.cos(angle) * mag;
                        yv = Math.sin(angle) * mag;
                    }
                }
                
            },ef:(p,res,o)=>{
                const angle = Math.atan2(o.pos.y - p.pos.y, o.pos.x - p.pos.x);

                o.pos.x -= res.overlapV.x;
                o.pos.y -= res.overlapV.y;

                xv = Math.cos(angle) * mag;
                yv = Math.sin(angle) * mag;
            },cr:(o)=>{
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }});
        }
        pongBall = obstacles[obstacles.length-1];

        // cloning thing that makes a clone on the other side
        {let collided=false;let lastCollided = false;let fadeOut=false;C(1,[],[3],{x: 4500, w: 1200, y: 7400, h: 600,cr: (o)=>{},
        ef:()=>{
            collided = true;

            if(lastCollided === false){
                if(pongPlayer !== undefined){
                    players[pongPlayer.id] = undefined;
                    pongPlayer = undefined;
                }
                pongPlayer = shared.createPlayer();
                pongPlayer.id = shared.players.length;
                pongPlayer.name = 'Opponent';
                pongPlayer.pos = pongPlayer.sat.pos;
                pongPlayer.renderRadius = 0;
                shared.players.push(pongPlayer);
                fadeOut = false;
            }
        },sf:(o,p)=>{
            if(pongPlayer !== undefined){
                pongPlayer.pos.x = (o.pos.x+o.dimensions.x/2) - (p.pos.x - (o.pos.x+o.dimensions.x/2));
                // pongPlayer.pos.y = p.pos.y;
                pongPlayer.pos.y = interpolate(pongPlayer.pos.y, pongBall.pos.y, 0.15);
                if(pongPlayer.pos.y < 7450) pongPlayer.pos.y = 7450;

                if(fadeOut === true){
                    pongPlayer.renderRadius *= 0.9;
                    if(pongPlayer.renderRadius < 5){
                        fadeOut = false;
                        players[pongPlayer.id] = undefined;
                        pongPlayer = undefined;
                    }
                } else {
                    pongPlayer.sat.r = pongPlayer.renderRadius = (49.5) * 0.1 + 0.9 * pongPlayer.renderRadius; 
                }
            }
            if(lastCollided === true && collided === false){
                fadeOut = true;
            }

            lastCollided = collided;
            collided = false;
        }})};

        // score text
        C(3,[],[20],{hex:"#FFFFFF",alpha:1,x:5100,y:7700,fontSize: 82,text:'',cr:(o)=>{
            ctx.fillStyle = 'white';
            ctx.globalAlpha = o.alpha;
            ctx.font = o.fontSize + "px Inter";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(o.text, 5100, 7700);
            ctx.globalAlpha = 1;
        }});scoreObs = obstacles[obstacles.length-1];

        // eliminating extra space at the right
        C(1,[],[0],{x:5700,y:7300,w:400,h:800});
    }

    // pushbox button
    {
        let pbButtonActivated = false; let pbButtonSteppedOn = false;
        C(1,[],[3],{
            x: 5550, y: 1850, w: 100, h: 100,
            cr: (o) => {
                ctx.globalAlpha = 0.8;
                if (pbButtonSteppedOn === true || pbButtonActivated === true) {
                    ctx.globalAlpha = 0.3;
                }
    
                ctx.fillStyle = 'white';
                if (pbButtonSteppedOn === true && pbButtonActivated === false) {ctx.fillStyle = blendColor('#FF0000','#FFFFFF',0.3); ctx.globalAlpha = 0.8;}
                else if(pbButtonActivated === true) {ctx.fillStyle = blendColor('#00FF00','#FFFFFF',0.5);}
    
                // outside
                ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    
                // grey inside
                if(!pbButtonActivated) ctx.globalAlpha = 1;
                ctx.fillStyle = colors.tile;
                ctx.fillRect(
                    o.pos.x + 12,
                    o.pos.y + 12,
                    o.dimensions.x - 24,
                    o.dimensions.y - 24
                );
    
                // rim
                ctx.globalAlpha = 0.5;
                ctx.lineWidth = 4;
                ctx.strokeStyle = 'white';
                ctx.strokeRect(
                    o.pos.x + 20,
                    o.pos.y + 20,
                    o.dimensions.x - 40,
                    o.dimensions.y - 40
                );
                ctx.globalAlpha = 1;
    
                pbButtonSteppedOn = false;
            },
            // TODO
            // sf: (o) => {
            //     const res = new SAT.Response();
            //     let collided = false;
    
            //     collided = SAT.testPolygonCircle(o.sat, pushCircle.sat, res);
    
            //     if(collided === false){
            //         res.clear();
    
            //         collided = SAT.testPolygonPolygon(pushBox.sat, o.sat, res);
            //     }
    
            //     if(collided === true && pbButtonActivated === false){
            //         pbButtonActivated = true;
            //         C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9900,y:4450,fontSize: 48, text: 'pro', alpha: 1});
            //         proTxt = obstacles[obstacles.length-1];
            //         btnsPressed++;
            //         if(btnsPressed === 3){
            //             proTxt.pos.x = -100;
            //             C(3,[],[20],{hex:'#FFFFFF',color:'white',x:9600,y:4550,fontSize: 48, text: 'super pro', alpha: 1})
            //         }
            //     }
            // },
            ef: (p,res,o) => {
                pbButtonSteppedOn = true;    
            }
        })
    }

    // difficulty chart
    {
        function smootherStep(t){
            return t * t * t * (t * (t * 6. - 15.) + 10.);
        }

        const renderPortal = (o) => {
            const p = shared.players[shared.selfId];
            
            let dx = Math.max(0,p.pos.x - (o.topLeft.x + o.dimensions.x/2));
            const dy = Math.abs(p.pos.y - (o.topLeft.y + o.dimensions.y/2));

            const ga = ctx.globalAlpha = smootherStep(1 - Math.min(1,dy / 600)) * smootherStep(Math.min(1,dx / 600));

            ctx.fillStyle = difficultyImageColors[o.difficulty];

            ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y);
    
            if(o.dimensions.x > o.dimensions.y){
                ctx.translate(o.dimensions.x - o.dimensions.y + o.topLeft.x, o.topLeft.y);
            } else {
                ctx.translate(o.topLeft.x, o.dimensions.y - o.dimensions.x + o.topLeft.y);
            }

            ctx.lineCap = 'round';
            // ctx.globalAlpha = t;
            // difficultyImageMap[Math.min(8,Math.ceil(o.difficulty))](Math.min(o.dimensions.x, o.dimensions.y));

            // ctx.globalAlpha = 1 - t;
            difficultyImageMap[o.difficulty](Math.min(o.dimensions.x, o.dimensions.y));
            ctx.globalAlpha = ga;
            ctx.lineCap = 'square';
            // ctx.globalAlpha = 1;

            if(o.dimensions.x > o.dimensions.y){
                ctx.translate(-(o.dimensions.x - o.dimensions.y + o.topLeft.x), -o.topLeft.y);
            } else {
                ctx.translate(-o.topLeft.x, -(o.dimensions.y - o.dimensions.x + o.topLeft.y));
            }

            ctx.font = `${o.dimensions.x / 3.5}px Inter`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            ctx.fillText(
                o.mapName,
                o.topLeft.x + o.dimensions.x / 2,
                o.topLeft.y - o.dimensions.y / 4
            );

            // const dimensions = ctx.measureText(o.comment);

            // let w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;

            // if(w > 600){
            //     const ratio = 600 / w;
            //     ctx.font = `${o.dimensions.x / 3.5 * ratio}px Inter`;
            //     w = 600;
            // }

            // 5250, 4650

            const textX = 5250;//(4800 * 2 - (o.topLeft.x + o.dimensions.x/2));
            dx = Math.max(0,textX - p.pos.x);

            ctx.globalAlpha = smootherStep(1 - Math.min(1,dy / 600)) * smootherStep(Math.min(1,dx / 600));

            ctx.textAlign = 'right';

            if(o.comment.length === 2){
                ctx.fillText(o.comment[0], textX, o.topLeft.y + o.dimensions.y/2 - 30);
                ctx.fillText(o.comment[1], textX, o.topLeft.y + o.dimensions.y/2 + 30);
            } else {
                ctx.fillText(o.comment, textX, o.topLeft.y + o.dimensions.y/2);
            }

            ctx.globalAlpha = 1;
        };
        const difficultyNames = [
            'Peaceful',
            'Moderate',
            'Difficult',
            'Hardcore',
            'Exhausting',
            'Relentless',
            'Agonizing',
            'Terrorizing',
            'Cataclysmic!!'
        ];
        const difficultyComments = [
            ['An Easy Stroll'],
            ['Getting somewhere!'],
            [`The challenge begins!`],
            [`Getting pretty`, `demanding, now.`],
            ['This is where', 'the fun begins :D'],
            ['AH MAKE IT STOP'],
            ['PLEASE'],
            ['IM BEGGING YOU'],
            ['AAAAAAAAAAAAAA']
        ]
        const difficultyColorsRgb = [
            {
                "r": 108,
                "g": 217,
                "b": 91
            },
            {
                "r": 88,
                "g": 204,
                "b": 179
            },
            {
                "r": 10,
                "g": 119,
                "b": 191
            },
            {
                "r": 53,
                "g": 40,
                "b": 224
            },
            {
                "r": 161,
                "g": 66,
                "b": 201
            },
            {
                "r": 227,
                "g": 45,
                "b": 139
            },
            {
                "r": 252,
                "g": 84,
                "b": 52
            },
            {
                "r": 252,
                "g": 58,
                "b": 58
            },
            {
                "r": 201,
                "g": 93,
                "b": 93
            }
        ];
        const x = 4300;
        const portalSize = 200;
        C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
            let cullingMinX = camera.x-canvas.w/2;
            let cullingMaxX = camera.x+canvas.w/2;
            let cullingMinY = camera.y-canvas.h/2;
            let cullingMaxY = camera.y+canvas.h/2;

            const o = {
                topLeft: {
                    x, y: 0
                },
                dimensions: {
                    x: 1000,
                    y: 4300
                }
            }
            if(o.topLeft.x > cullingMaxX || o.topLeft.x + o.dimensions.x < cullingMinX || o.topLeft.y > cullingMaxY || o.topLeft.y + o.dimensions.y < cullingMinY) return;

            const p = shared.players[shared.selfId];
            ctx.globalAlpha = 0.33 + Math.max(0, 4300 - p.pos.y) / 4300 * .035;// + Math.sin(window.frames / 60) * 0.1;

            const grad = ctx.createLinearGradient(x,4300,x,0);
            const yPositions = [];
            for(let i = 0; i < 9/*up to cata*/; i++){
                const t = (i+.5)/9;
                const y = (1-t) * x + (t) * 0;

                const {r,g,b} = difficultyColorsRgb[i];

                const a = 1 - Math.min(1,Math.abs(p.pos.y - y) / 800);
                grad.addColorStop(t, `rgba(${r},${g},${b},${a})`);

                yPositions.push(y);

                // text on the right

                // portals on the left
            }

            const portalObs = yPositions.map((y,i) => {
                return {
                    topLeft: {
                        x: x + portalSize / 4,
                        y: Math.round((y - portalSize / 2) / 100) * 100
                    },
                    dimensions: {
                        x: portalSize,
                        y: portalSize
                    },
                    difficulty: i,
                    mapName: difficultyNames[i],
                    comment: difficultyComments[i]
                }
            })

            ctx.fillStyle = grad;

            ctx.fillRect(x,0,1000,4300);// TODO: make portals fade out when player draws near
            ctx.globalAlpha = 1;

            // draw difficulty images and portals
            for(let i = 0; i < portalObs.length; i++){
                ctx.globalAlpha = 1;
                renderPortal(portalObs[i]);
            }
            ctx.globalAlpha = 1;
        }});

        // C(1,[],[19],{x:4300,y:0,w:1000,h:4300,speedMult:0.86,speedChangePermanent:false,cr:()=>{}});


        // red vignette at the end
        C(1,[],[24],{x:4300,y:0,w:1000,h:1800,innerR: 0, innerG: 0, innerB: 0, innerSize: 0.1, innerOpacity: 0, outerR: 0, outerG: 0, outerB: 0, outerSize: 0.5, outerOpacity: 1,ef:(p,res,o)=>{
            const y = Math.max(p.pos.y, 163);
            if(y < 1800){
                o.innerR = (1 - y / 1800) * 255;
                o.outerR = (1 - y / 1800) * 255;
            } else {
                o.innerR = o.outerR = 0;
            }
            
            if(y < 500){
                o.outerSize = interpolate(0.1, 1, y / 500);
            } else {
                o.outerSize = 1;
            }
            
            o.innerSize = 0;
        },cr:()=>{}})
    }
});