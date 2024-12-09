window.loadMap((shared)=>{
    let counter = 1000;
    const md = (a) => {return a;}
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
    
    let xv1001 = 7.209740356263619;
    let yv1001 = 1.340679593729067;
    C(0,[3],[1],{r:24,y:1190.696103422144,x:10941.110460073949,boundPlayer:true,sf:(e)=>{
    e.pos.y += yv1001;
    e.pos.x += xv1001;
    if ((e.pos.x - e.sat.r) < 10300 || e.pos.x + e.sat.r > 11200) {
        xv1001 = xv1001 * -1;
    }
    if ((e.pos.y - e.sat.r) < 900 || e.pos.y + e.sat.r > 1600) {
        yv1001 = yv1001 * -1;
    }
    }});

    

    let xv1002 = 6.64933159886078;
    let yv1002 = 3.0925987560899855;
    C(0,[3],[1],{r:24,y:1271.5970919459407,x:10644.012067169824,boundPlayer:true,sf:(e)=>{
    e.pos.y += yv1002;
    e.pos.x += xv1002;
    if ((e.pos.x - e.sat.r) < 10300 || e.pos.x + e.sat.r > 11200) {
        xv1002 = xv1002 * -1;
    }
    if ((e.pos.y - e.sat.r) < 900 || e.pos.y + e.sat.r > 1600) {
        yv1002 = yv1002 * -1;
    }
    }});

    

    let xv1003 = 7.264921534207558;
    let yv1003 = 0.9993462260823649;
    C(0,[3],[1],{r:24,y:1131.5227450402854,x:11057.392719973199,boundPlayer:true,sf:(e)=>{
    e.pos.y += yv1003;
    e.pos.x += xv1003;
    if ((e.pos.x - e.sat.r) < 10300 || e.pos.x + e.sat.r > 11200) {
        xv1003 = xv1003 * -1;
    }
    if ((e.pos.y - e.sat.r) < 900 || e.pos.y + e.sat.r > 1600) {
        yv1003 = yv1003 * -1;
    }
    }});

    

    let xv1004 = 6.48991498981954;
    let yv1004 = 3.414495746474642;
    C(0,[3],[1],{r:24,y:1462.5818949267261,x:10953.637942568035,boundPlayer:true,sf:(e)=>{
    e.pos.y += yv1004;
    e.pos.x += xv1004;
    if ((e.pos.x - e.sat.r) < 10300 || e.pos.x + e.sat.r > 11200) {
        xv1004 = xv1004 * -1;
    }
    if ((e.pos.y - e.sat.r) < 900 || e.pos.y + e.sat.r > 1600) {
        yv1004 = yv1004 * -1;
    }
    }});

    

    let xv1005 = -1.8006110410768805;
    let yv1005 = -7.108837996222013;
    C(0,[3],[1],{r:24,y:1492.548262757893,x:10381.553940012469,boundPlayer:true,sf:(e)=>{
    e.pos.y += yv1005;
    e.pos.x += xv1005;
    if ((e.pos.x - e.sat.r) < 10300 || e.pos.x + e.sat.r > 11200) {
        xv1005 = xv1005 * -1;
    }
    if ((e.pos.y - e.sat.r) < 900 || e.pos.y + e.sat.r > 1600) {
        yv1005 = yv1005 * -1;
    }
    }});

    

    let xv1006 = 6.227170538491373;
    let yv1006 = -0.5337106749401406;
    C(1,[3],[1],{w:50,h:50,y:1434.834575559913,x:36239.78025194333,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1006;
    e.pos.x += xv1006;
    if ((e.pos.x) < 36000) {
        xv1006 = xv1006 * -1;
        e.pos.x = 36000;
    } else if(e.pos.x + 50 > 36300){
        xv1006 = xv1006 * -1;
        e.pos.x = 36300 - 50;
    }
    if ((e.pos.y) < 1200) {
        yv1006 = yv1006 * -1;
        e.pos.y = 1200;
    } else if(e.pos.y + 50 > 1500){
        yv1006 = yv1006 * -1;
        e.pos.y = 1500 - 50;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 50, 50);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv1007 = 6.224760077831337;
    let yv1007 = -0.5611256307077881;
    C(1,[3],[1],{w:50,h:50,y:1298.1403511109984,x:36134.02636120736,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1007;
    e.pos.x += xv1007;
    if ((e.pos.x) < 36000) {
        xv1007 = xv1007 * -1;
        e.pos.x = 36000;
    } else if(e.pos.x + 50 > 36300){
        xv1007 = xv1007 * -1;
        e.pos.x = 36300 - 50;
    }
    if ((e.pos.y) < 1200) {
        yv1007 = yv1007 * -1;
        e.pos.y = 1200;
    } else if(e.pos.y + 50 > 1500){
        yv1007 = yv1007 * -1;
        e.pos.y = 1500 - 50;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 50, 50);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv1008 = -1.551246727059369;
    let yv1008 = 6.054430905691103;
    C(1,[3],[1],{w:50,h:50,y:1328.7670637965039,x:36096.19176372088,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1008;
    e.pos.x += xv1008;
    if ((e.pos.x) < 36000) {
        xv1008 = xv1008 * -1;
        e.pos.x = 36000;
    } else if(e.pos.x + 50 > 36300){
        xv1008 = xv1008 * -1;
        e.pos.x = 36300 - 50;
    }
    if ((e.pos.y) < 1200) {
        yv1008 = yv1008 * -1;
        e.pos.y = 1200;
    } else if(e.pos.y + 50 > 1500){
        yv1008 = yv1008 * -1;
        e.pos.y = 1500 - 50;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 50, 50);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv1009 = -5.16776623500665;
    let yv1009 = -3.5152086908639144;
    C(1,[3],[1],{w:50,h:50,y:1427.6483320949064,x:36228.06538335391,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1009;
    e.pos.x += xv1009;
    if ((e.pos.x) < 36000) {
        xv1009 = xv1009 * -1;
        e.pos.x = 36000;
    } else if(e.pos.x + 50 > 36300){
        xv1009 = xv1009 * -1;
        e.pos.x = 36300 - 50;
    }
    if ((e.pos.y) < 1200) {
        yv1009 = yv1009 * -1;
        e.pos.y = 1200;
    } else if(e.pos.y + 50 > 1500){
        yv1009 = yv1009 * -1;
        e.pos.y = 1500 - 50;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 50, 50);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv1010 = 3.6068937279277526;
    let yv1010 = -5.1041960812096;
    C(1,[3],[1],{w:50,h:50,y:1303.0653028627712,x:36225.13583228731,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1010;
    e.pos.x += xv1010;
    if ((e.pos.x) < 36000) {
        xv1010 = xv1010 * -1;
        e.pos.x = 36000;
    } else if(e.pos.x + 50 > 36300){
        xv1010 = xv1010 * -1;
        e.pos.x = 36300 - 50;
    }
    if ((e.pos.y) < 1200) {
        yv1010 = yv1010 * -1;
        e.pos.y = 1200;
    } else if(e.pos.y + 50 > 1500){
        yv1010 = yv1010 * -1;
        e.pos.y = 1500 - 50;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 50, 50);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    C(1,[],[18],{type:[1,[],[18]],x:4900,y:0,w:600,h:600,size:10,inView:true,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:18200,y:900,w:400,h:500,size:22,inView:true,sizeChangePermanent:false,sizeMult:0.8979591836734694,})
C(1,[],[18],{type:[1,[],[18]],x:17800,y:1400,w:800,h:900,size:4,inView:true,sizeChangePermanent:false,sizeMult:0.16326530612244897,})
C(1,[],[18],{type:[1,[],[18]],x:18200,y:300,w:400,h:600,size:4,inView:true,sizeChangePermanent:false,sizeMult:0.16326530612244897,})
C(1,[],[18],{type:[1,[],[18]],x:23600,y:3100,w:900,h:100,size:5,inView:true,sizeChangePermanent:false,sizeMult:0.20408163265306123,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:1400,w:350,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4250,y:1100,w:550,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22750,y:900,w:200,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22750,y:800,w:150,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22900,y:950,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23750,y:-50,w:100,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23600,y:-50,w:250,h:100,canJump:true,inView:true,})
C(1,[],[17],{type:[1,[],[17]],x:12000,y:0,w:500,h:200,time:0,maxTime:2.5,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:150,})
C(1,[],[1],{type:[1,[],[1]],x:19700,y:1925,w:400,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:1250,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:1600,w:200,h:200,points:[[9550,800],[9850,800]],speed:300,currentPoint:0.425,collidable:true,pointOn:{"x":9550,"y":800},pointTo:{"x":9850,"y":800},xv:300,yv:0,inView:true,path:[[19100,1600,10],[19700,1600,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:2200,w:200,h:200,points:[[9550,1100],[9850,1100]],speed:300,currentPoint:0.425,collidable:true,pointOn:{"x":9550,"y":1100},pointTo:{"x":9850,"y":1100},xv:300,yv:0,inView:true,path:[[19100,2200,10],[19700,2200,10]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19750,y:750,w:150,h:250,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:9600,y:300,w:200,h:1400,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:300,w:200,h:1400,force:1500,dir:{"x":-1500,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[1],{type:[1,[],[1]],x:6500,y:1050,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6500,y:600,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6400,y:825,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6650,y:800,w:200,h:100,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:40800,y:2200,w:200,h:1000,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[0],{type:[1,[],[0]],x:39000,y:1600,w:1500,h:200,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:26600,y:100,w:3000,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
let minX1010, minY1010, maxX1010, maxY1010;
    minX1010 = 29100;minY1010 = 0;maxX1010 = 29700;maxY1010 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1010) && (player.pos.x) < md(maxX1010) && (player.pos.y) > md(minY1010) && (player.pos.y) < md(maxY1010)) {
            colors.background="#a34d4d"; colors.tile="#4f2222";
        }
    },});
C(1,[],[9],{type:[1,[],[9]],x:17500,y:1600,w:100,h:100,spawn:{"x":8775,"y":825},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:25600,y:1000,w:250,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[20],{h:150,w:100,y:1750,x:1002,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#bd0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:200,w:50,y:1700,x:1100,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#bd0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:100,w:100,y:1800,x:1150,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#bd0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[19],{type:[1,[],[19]],x:23600,y:3100,w:900,h:100,speedInc:0.25,inView:true,speedChangePermanent:false,speedMult:0.25,})
C(1,[1],[1],{type:[1,[1],[1]],x:22950,y:2625,w:400,h:50,angle:12188.250000004122,rotateSpeed:0.025757575757575757,pivotX:23150,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:212.7250925562708,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:22800,y:2600,w:700,h:100,angle:-12158.250000004122,rotateSpeed:-0.025757575757575757,pivotX:23150,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:-212.2014937806725,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:2600,w:350,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:23150,y:2650,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24200,y:2950,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:3000,w:23300,h:200,canJump:true,sat:{"pos":{"x":0,"y":1500},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":11650,"y":0},{"x":11650,"y":100},{"x":0,"y":100}],"edges":[{"x":11650,"y":0},{"x":0,"y":100},{"x":-11650,"y":0},{"x":0,"y":-100}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":11650,"y":0},{"x":11650,"y":100},{"x":0,"y":100}]},inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:21700,y:3050,w:500,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20700,y:2100,w:600,h:100,angle:6094.12500000084,rotateSpeed:0.012878787878787878,pivotX:21000,pivotY:2150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:0,inView:true,initialRotation:106.3625462781141,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:24900,y:900,w:200,h:700,spawn:{"x":12500,"y":625},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:500,w:500,y:1100,x:21700,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.2;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:21700,y:1100,w:200,h:200,canJump:true,inView:true,})
C(1,[],[24],{type:[1,[],[24]],x:21450,y:-50,w:900,h:900,ir:0.3,or:0.7,o:0.9,vc:{"r":0,"g":0,"b":0},inView:true,innerR:0,innerG:0,innerB:0,innerSize:0.03,outerR:0,outerG:0,outerB:0,outerSize:0.42,innerOpacity:0,outerOpacity:1,})
C(1,[],[17],{type:[1,[],[17]],x:21450,y:-50,w:900,h:900,time:0,maxTime:8,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(2,[],[1],{type:[2,[],[1]],points:[[21800,400],[21720,680],[21700,700]],most:{"left":10850,"right":10900,"top":200,"bottom":350},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21800,400],[21900,400],[21850,500],[21750,550]],most:{"left":10875,"right":10950,"top":200,"bottom":275},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:500,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22850,y:350,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22900,y:400,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23000,y:150,w:50,h:87.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23150,y:350,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23050,y:150,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23250,y:0,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23200,y:350,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23450,y:200,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23650,y:250,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23600,y:500,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23350,y:700,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23250,y:400,w:100,h:600,canCollide:true,inView:true,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:23300,y:500,radius:300,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[11650,500],[11650,550]],"type":"poly","props":{}},endPolygon:{"points":[[11400,250.00000000000003],[11350,250.00000000000003]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:23300,y:500,radius:300,startAngle:4.71238898038469,endAngle:6.283185307179586,startPolygon:{"points":[[11650,0],[11650,-50]],"type":"poly","props":{}},endPolygon:{"points":[[11900,249.99999999999994],[11950,249.99999999999991]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:600,startSliceAngle:4.71238898038469,endSliceAngle:6.283185307179586,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[1],[1],{type:[1,[1],[1]],x:24300,y:1150,w:200,h:100,angle:12188.250000000207,rotateSpeed:0.025757575757575757,pivotX:24300,pivotY:1200,distToPivot:50,canCollide:true,renderType:"rotating",cullingRadius:105.90169943749474,unSim:0,inView:true,initialRotation:212.72509255620247,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:24300,y:1150,w:200,h:100,angle:12308.250000000207,rotateSpeed:0.025757575757575757,pivotX:24300,pivotY:1200,distToPivot:50,canCollide:true,renderType:"rotating",cullingRadius:105.90169943749474,unSim:0,inView:true,initialRotation:214.81948765859568,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:24300,y:1150,w:200,h:100,angle:12428.250000000207,rotateSpeed:0.025757575757575757,pivotX:24300,pivotY:1200,distToPivot:50,canCollide:true,renderType:"rotating",cullingRadius:105.90169943749474,unSim:0,inView:true,initialRotation:216.91388276098886,boundPlayer:true,})
let minX1015, minY1015, maxX1015, maxY1015;
    minX1015 = 22600;minY1015 = -100;maxX1015 = 22900;maxY1015 = 3100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1015) && (player.pos.x) < md(maxX1015) && (player.pos.y) > md(minY1015) && (player.pos.y) < md(maxY1015)) {
            colors.background="#a34d4d"; colors.tile="#4f2222";
        }
    },});
C(1,[0],[1],{type:[1,[0],[1]],x:22700,y:1900,w:100,h:102,points:[[11350,950],[12050,950]],speed:700,currentPoint:1.4250000000140763,collidable:true,pointOn:{"x":12050,"y":950},pointTo:{"x":11350,"y":950},xv:-700,yv:8.572527594031473e-14,inView:true,path:[[22700,1900,23.333333333333332],[24100,1900,23.333333333333332]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23450,y:1100,w:150,h:50,points:[[11725,550],[11725,600]],speed:150,currentPoint:0.275,collidable:true,pointOn:{"x":11725,"y":550},pointTo:{"x":11725,"y":600},xv:9.184850993605149e-15,yv:150,inView:true,path:[[23450,1100,5],[23450,1200,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23450,y:1300,w:150,h:50,points:[[11725,650],[11725,700]],speed:150,currentPoint:0.275,collidable:true,pointOn:{"x":11725,"y":650},pointTo:{"x":11725,"y":700},xv:9.184850993605149e-15,yv:150,inView:true,path:[[23450,1300,5],[23450,1400,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20300,y:0,w:100,h:50,points:[[10150,0],[10150,-50]],speed:150,currentPoint:0.275,collidable:true,pointOn:{"x":10150,"y":0},pointTo:{"x":10150,"y":-50},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[20300,0,5],[20300,-100,5]],boundPlayer:true,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[21000,200],[20933.15594803123,258.7785252292473],[20758.15594803123,295.10565162951536],[20541.84405196877,295.10565162951536],[20366.84405196877,258.7785252292473],[20300,200],[20366.84405196877,141.2214747707527],[20541.84405196877,104.89434837048465],[20758.15594803123,104.89434837048464],[20933.15594803123,141.22147477075265]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(20650,200,350,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[1],{type:[1,[],[1]],x:20300,y:200,w:700,h:100,canCollide:true,inView:true,boundPlayer:true,})
let minX1016, minY1016, maxX1016, maxY1016;
    minX1016 = 22200;minY1016 = -100;maxX1016 = 22500;maxY1016 = 3100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1016) && (player.pos.x) < md(maxX1016) && (player.pos.y) > md(minY1016) && (player.pos.y) < md(maxY1016)) {
            colors.background="#dc5050"; colors.tile="#a13636";
        }
    },});
C(1,[],[9],{type:[1,[],[9]],x:20000,y:0,w:200,h:200,spawn:{"x":10050,"y":50},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:19750,y:650,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19250,y:150,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
let minX1017, minY1017, maxX1017, maxY1017;
    minX1017 = 17400;minY1017 = 1500;maxX1017 = 17700;maxY1017 = 1800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1017) && (player.pos.x) < md(maxX1017) && (player.pos.y) > md(minY1017) && (player.pos.y) < md(maxY1017)) {
            colors.background="#dc8150"; colors.tile="#a15636";
        }
    },});
C(1,[1],[1],{type:[1,[1],[1]],x:18050,y:1125,w:200,h:50,angle:454350.87499997363,rotateSpeed:0.9601851851851854,pivotX:18150,pivotY:1150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:0,inView:true,initialRotation:7929.918728066731,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:10300,y:2100,w:800,h:900,time:0,maxTime:7,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:420,})
C(1,[],[9],{type:[1,[],[9]],x:6000,y:0,w:400,h:100,spawn:{"x":3100,"y":25},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(0,[],[1],{type:[0,[],[1]],x:5700,y:700,r:150,renderType:"circleR",inView:true,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5950,y:1050,r:100,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[20],{h:150,w:100,y:950,x:2600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#c31818";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:2650,y:0,w:150,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2350,y:350,w:450,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:300,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:0,w:100,h:500,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:500,y:500,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:350,y:700,w:250,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:400,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6.123233995736766e-15,y:600,w:50,h:600,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:1000,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:400,w:100,h:1000,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:500,y:1000,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:500,y:1550,r:250,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:1850,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:50,y:1950,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:450,y:0,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:900,y:1900,w:350,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:1300,w:100,h:450,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:950,y:850,w:200,h:450,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:250,w:50,h:600,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:700,y:500,w:50,h:250,points:[[350,250],[525,250]],speed:100,currentPoint:1.3857142857129066,collidable:true,pointOn:{"x":525,"y":250},pointTo:{"x":350,"y":250},xv:-100,yv:1.2246467991473532e-14,inView:true,path:[[700,500,3.3333333333333335],[1050,500,3.3333333333333335]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:850,y:200,w:350,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:600,y:0,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:0,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:0,w:100,h:400,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:400,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1150,y:700,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:250,w:100,h:750,canJump:true,inView:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:1150,y:1075,w:400,h:50,angle:6094.125000001893,rotateSpeed:0.012878787878787878,pivotX:1350,pivotY:1100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:349167.6423252712,})
C(1,[],[0],{type:[1,[],[0]],x:1550,y:1000,w:50,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:1200,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1300,y:1400,w:300,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1100,y:1600,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1250,y:1800,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1350,y:1500,w:250,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:1600,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:1850,w:100,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:2000,w:8500,h:1000,canJump:true,sat:{"pos":{"x":0,"y":1000},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":4250,"y":0},{"x":4250,"y":500},{"x":0,"y":500}],"edges":[{"x":4250,"y":0},{"x":0,"y":500},{"x":-4250,"y":0},{"x":0,"y":-500}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":4250,"y":0},{"x":4250,"y":500},{"x":0,"y":500}]},inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:100,w:100,h:1900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:0,w:100,h:1900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:100,w:100,h:1900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:0,w:100,h:1300,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:1500,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1650,y:1275,w:300,h:50,angle:-8125.500000002515,rotateSpeed:-0.017171717171717175,pivotX:1800,pivotY:1300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:-141.81672837084312,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:950,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:500,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1900,y:500,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1700,y:100,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2100,y:100,w:400,h:100,canJump:true,inView:true,})
let minX1019, minY1019, maxX1019, maxY1019;
    minX1019 = 1900;minY1019 = -100;maxX1019 = 2150;maxY1019 = 200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1019) && (player.pos.x) < md(maxX1019) && (player.pos.y) > md(minY1019) && (player.pos.y) < md(maxY1019)) {
            colors.background="#82c4b0"; colors.tile="#4d8977";
        }
    },});
C(0,[],[1],{type:[0,[],[1]],x:2350,y:500,r:150,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2100,y:200,w:50,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:800,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2600,y:500,w:100,h:450,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2500,y:825,w:400,h:50,angle:-8125.500000002252,rotateSpeed:-0.017171717171717175,pivotX:2700,pivotY:850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:-141.81672837083855,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2900,y:700,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:1100,w:400,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:900,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:1200,w:100,h:700,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2100,y:1200,w:250,h:100,points:[[1050,600],[1050,950]],speed:70,currentPoint:1.0850000000017594,collidable:true,pointOn:{"x":1050,"y":950},pointTo:{"x":1050,"y":600},xv:4.2862637970157365e-15,yv:-70,inView:true,path:[[2100,1200,2.3333333333333335],[2100,1900,2.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2350,y:1900,w:250,h:100,points:[[1175,950],[1175,600]],speed:70,currentPoint:1.0850000000017594,collidable:true,pointOn:{"x":1175,"y":600},pointTo:{"x":1175,"y":950},xv:4.2862637970157365e-15,yv:70,inView:true,path:[[2350,1900,2.3333333333333335],[2350,1200,2.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:1000,w:100,h:1000,canCollide:true,inView:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2700,1350],[2750,1400],[2850,1650],[2700,1700]],most:{"left":1350,"right":1425,"top":675,"bottom":850},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,1100],[3000,1100],[3000,1450],[2900,1200]],most:{"left":1450,"right":1500,"top":550,"bottom":725},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:400,w:600,h:600,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:2950,y:400,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2800,y:0,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3000,y:0,w:200,h:200,points:[[1500,0],[1600,0],[1600,100],[1500,100]],speed:100,currentPoint:3.4249999999936604,collidable:true,pointOn:{"x":1500,"y":100},pointTo:{"x":1500,"y":0},xv:6.123233995736766e-15,yv:-100,inView:true,path:[[3000,0,3.3333333333333335],[3200,0,3.3333333333333335],[3200,200,3.3333333333333335],[3000,200,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:200,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3600,y:0,w:200,h:200,points:[[1800,0],[1800,300]],speed:100,currentPoint:1.141666666666689,collidable:true,pointOn:{"x":1800,"y":300},pointTo:{"x":1800,"y":0},xv:6.123233995736766e-15,yv:-100,inView:true,path:[[3600,0,3.3333333333333335],[3600,600,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3800,y:800,w:200,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3100,y:1000,w:200,h:100,points:[[1550,500],[1550,650]],speed:100,currentPoint:0.28333333333692207,collidable:true,pointOn:{"x":1550,"y":500},pointTo:{"x":1550,"y":650},xv:6.123233995736766e-15,yv:100,inView:true,path:[[3100,1000,3.3333333333333335],[3100,1300,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:1200,w:500,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3750,y:1150,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3300,y:1400,w:700,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:1800,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3300,y:1750,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3350,y:1800,w:150,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3550,y:1600,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:1850,w:350,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3800,y:1750,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3850,y:1950,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
let minX1020, minY1020, maxX1020, maxY1020;
    minX1020 = 25500;minY1020 = 600;maxX1020 = 25800;maxY1020 = 900;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1020) && (player.pos.x) < md(maxX1020) && (player.pos.y) > md(minY1020) && (player.pos.y) < md(maxY1020)) {
            colors.background="#828dc4"; colors.tile="#4d6c89";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:4100,y:1600,w:700,h:400,canCollide:false,inView:true,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:100,w:100,h:1900,canJump:true,inView:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:4500,y:1600,w:100,h:400,angle:-12188.250000003052,rotateSpeed:-0.025757575757575757,pivotX:4550,pivotY:1800,distToPivot:0,canCollide:true,cullingRadius:103.07764064044152,unSim:0,inView:true,initialRotation:-212.72509255625215,})
C(1,[],[1],{type:[1,[],[1]],x:4650,y:1400,w:150,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4100,y:900,w:100,h:200,points:[[2050,450],[2350,450]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2350,"y":450},pointTo:{"x":2050,"y":450},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[4100,900,5],[4700,900,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:700,w:300,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4650,y:700,w:50,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:700,w:250,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4100,y:300,w:700,h:100,angle:12188.250000002448,rotateSpeed:0.025757575757575757,pivotX:4450,pivotY:350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:212.7250925562416,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:550,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:0,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4450,y:300,w:350,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:900,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4575,y:800,w:75,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4350,y:325,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4250,y:0,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4250,y:650,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4750,y:400,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4750,y:200,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4900,y:300,w:300,h:300,angle:12188.25000000242,rotateSpeed:0.025757575757575757,pivotX:5050,pivotY:450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:0,inView:true,initialRotation:212.72509255624107,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5200,y:0,w:300,h:300,angle:-12188.25000000235,rotateSpeed:-0.025757575757575757,pivotX:5350,pivotY:150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:0,inView:true,initialRotation:-212.72509255623987,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:0,w:100,h:800,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:800,w:300,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:5300,y:750,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:600,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:850,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:900,w:100,h:200,points:[[2450,450],[2750,450]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2750,"y":450},pointTo:{"x":2450,"y":450},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[4900,900,5],[5500,900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5500,y:1100,w:100,h:200,points:[[2750,550],[2450,550]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2450,"y":550},pointTo:{"x":2750,"y":550},xv:150,yv:0,inView:true,path:[[5500,1100,5],[4900,1100,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:800,w:100,h:500,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:1300,w:100,h:200,points:[[2450,650],[2750,650]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2750,"y":650},pointTo:{"x":2450,"y":650},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[4900,1300,5],[5500,1300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5500,y:1500,w:100,h:200,points:[[2750,750],[2450,750]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2450,"y":750},pointTo:{"x":2750,"y":750},xv:150,yv:0,inView:true,path:[[5500,1500,5],[4900,1500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:1700,w:100,h:200,points:[[2450,850],[2750,850]],speed:150,currentPoint:1.7125,collidable:true,pointOn:{"x":2750,"y":850},pointTo:{"x":2450,"y":850},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[4900,1700,5],[5500,1700,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:1900,w:800,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:1500,w:100,h:400,canJump:true,inView:true,})
C(1,[],[7],{type:[1,[],[7]],x:4950,y:1750,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:5600,y:1300,w:100,h:200,coins:1,currentCoins:1,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:5900,y:1900,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:5800,y:1800,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5700,y:1600,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5850,y:1300,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5700,y:300,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:150,w:300,h:50,angle:16251.0000000031,rotateSpeed:0.03434343434343435,pivotX:5850,pivotY:175,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:283.6334567416526,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:100,w:300,h:100,canJump:true,inView:true,})
let minX1021, minY1021, maxX1021, maxY1021;
    minX1021 = 6000;minY1021 = -100;maxX1021 = 6400;maxY1021 = 200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1021) && (player.pos.x) < md(maxX1021) && (player.pos.y) > md(minY1021) && (player.pos.y) < md(maxY1021)) {
            colors.background="#7351d2"; colors.tile="#333286";
        }
    },});
C(1,[0],[1],{type:[1,[0],[1]],x:6400,y:0,w:300,h:50,points:[[3200,0],[3200,225]],speed:120,currentPoint:0.22666666666666666,collidable:true,pointOn:{"x":3200,"y":0},pointTo:{"x":3200,"y":225},xv:7.34788079488412e-15,yv:120,inView:true,path:[[6400,0,4],[6400,450,4]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:0,w:100,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:500,w:400,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6400,y:1050,w:300,h:50,points:[[3200,525],[3200,300]],speed:120,currentPoint:0.22666666666666666,collidable:true,pointOn:{"x":3200,"y":525},pointTo:{"x":3200,"y":300},xv:7.34788079488412e-15,yv:-120,inView:true,path:[[6400,1050,4],[6400,600,4]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:800,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:500,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:600,w:100,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:1100,w:800,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:200,w:150,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6250,y:550,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:750,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6900,y:600,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6900,y:1000,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6950,y:800,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:900,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6300,y:1200,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:1400,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:1500,w:400,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6425,y:1337.5,w:250,h:25,angle:24376.50000000457,rotateSpeed:0.051515151515151514,pivotX:6550,pivotY:1350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.81172263200556,unSim:0,inView:true,initialRotation:425.45018511247747,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6725,y:1337.5,w:250,h:25,angle:-24376.50000000453,rotateSpeed:-0.051515151515151514,pivotX:6850,pivotY:1350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.81172263200556,unSim:0,inView:true,initialRotation:-425.45018511247685,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:1300,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:1100,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:1200,w:100,h:600,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:1600,w:1000,h:400,canCollide:false,inView:true,boundPlayer:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:6800,y:1750,w:300,h:100,angle:12188.250000002912,rotateSpeed:0.025757575757575757,pivotX:6950,pivotY:1800,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:212.7250925562497,})
C(1,[1],[11],{type:[1,[1],[11]],x:6450,y:1750,w:300,h:100,angle:-24376.500000005843,rotateSpeed:-0.051515151515151514,pivotX:6600,pivotY:1800,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:-425.4501851124997,})
C(1,[1],[11],{type:[1,[1],[11]],x:6100,y:1750,w:300,h:100,angle:12188.250000003052,rotateSpeed:0.025757575757575757,pivotX:6250,pivotY:1800,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:212.72509255625215,})
C(1,[],[7],{type:[1,[],[7]],x:6100,y:1750,w:50,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:7200,y:1800,w:100,h:200,coins:3,currentCoins:3,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:100,w:100,h:1900,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:1500,w:50,h:200,points:[[3650,750],[3775,750]],speed:70,currentPoint:1.838000000019707,collidable:true,pointOn:{"x":3775,"y":750},pointTo:{"x":3650,"y":750},xv:-70,yv:8.572527594031473e-15,inView:true,path:[[7300,1500,2.3333333333333335],[7550,1500,2.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7550,y:1300,w:50,h:200,points:[[3775,650],[3650,650]],speed:70,currentPoint:1.838000000019707,collidable:true,pointOn:{"x":3650,"y":650},pointTo:{"x":3775,"y":650},xv:70,yv:0,inView:true,path:[[7550,1300,2.3333333333333335],[7300,1300,2.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:1100,w:50,h:200,points:[[3650,550],[3775,550]],speed:70,currentPoint:1.838000000019707,collidable:true,pointOn:{"x":3775,"y":550},pointTo:{"x":3650,"y":550},xv:-70,yv:8.572527594031473e-15,inView:true,path:[[7300,1100,2.3333333333333335],[7550,1100,2.3333333333333335]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:900,w:300,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:950,w:100,h:150,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:7100,y:800,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7100,y:500,w:500,h:200,angle:-10156.875000001844,rotateSpeed:-0.021464646464646464,pivotX:7350,pivotY:600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:134.6291201783626,unSim:0,inView:true,initialRotation:-177.27091046353127,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7250,y:250,w:350,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:7525,y:325,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6950,y:200,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7250,y:200,w:350,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7000,y:0,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7250,y:150,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7500,y:100,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6800,y:0,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6800,y:400,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6850,y:450,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7700,y:287.5,w:300,h:25,angle:-21668.00000000217,rotateSpeed:-0.0457912457912458,pivotX:7850,pivotY:300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.25996611745185,unSim:0,inView:true,initialRotation:-378.1779423221692,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7700,y:487.5,w:300,h:25,angle:21668.00000000217,rotateSpeed:0.0457912457912458,pivotX:7850,pivotY:500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.25996611745185,unSim:0,inView:true,initialRotation:378.1779423221692,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7700,y:687.5,w:300,h:25,angle:-21668.00000000217,rotateSpeed:-0.0457912457912458,pivotX:7850,pivotY:700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.25996611745185,unSim:0,inView:true,initialRotation:-378.1779423221692,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7700,y:1000,w:125,h:200,points:[[3850,500],[3937.5,500]],speed:75,currentPoint:0.07857142857142857,collidable:true,pointOn:{"x":3850,"y":500},pointTo:{"x":3937.5,"y":500},xv:75,yv:0,inView:true,path:[[7700,1000,2.5],[7875,1000,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7700,y:1400,w:100,h:100,points:[[3850,700],[3950,700],[3950,800],[3850,800]],speed:150,currentPoint:3.1375,collidable:true,pointOn:{"x":3850,"y":800},pointTo:{"x":3850,"y":700},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[7700,1400,5],[7900,1400,5],[7900,1600,5],[7700,1600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7900,y:1600,w:100,h:100,points:[[3950,800],[3850,800],[3850,700],[3950,700]],speed:150,currentPoint:3.1375,collidable:true,pointOn:{"x":3950,"y":700},pointTo:{"x":3950,"y":800},xv:9.184850993605149e-15,yv:150,inView:true,path:[[7900,1600,5],[7700,1600,5],[7700,1400,5],[7900,1400,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:1725,w:225,h:175,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7700,y:2050,w:350,h:50,angle:13542.500000004295,rotateSpeed:0.02861952861952862,pivotX:7875,pivotY:2075,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:0,inView:true,initialRotation:236.36121395140702,boundPlayer:true,})
let minX1022, minY1022, maxX1022, maxY1022;
    minX1022 = 7950;minY1022 = 1800;maxX1022 = 8200;maxY1022 = 2100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1022) && (player.pos.x) < md(maxX1022) && (player.pos.y) > md(minY1022) && (player.pos.y) < md(maxY1022)) {
            colors.background="#9978c9"; colors.tile="#6e4893";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:8025,y:1300,w:75,h:600,canJump:true,inView:true,})
C(1,[],[8],{type:[1,[],[8]],x:5700,y:1000,w:300,h:100,coins:2,currentCoins:2,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:2,})
C(1,[1],[1],{type:[1,[1],[1]],x:8125,y:1775,w:350,h:50,angle:-20313.750000005337,rotateSpeed:-0.04292929292929293,pivotX:8300,pivotY:1800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:0,inView:true,initialRotation:-354.54182092709124,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8450,y:1925,w:50,h:75,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8450,y:1600,w:50,h:75,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:1600,w:100,h:1400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:1500,w:400,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:8100,y:1750,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8250,y:1300,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8400,y:1000,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8100,y:900,w:500,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8300,y:1000,w:100,h:50,points:[[4150,500],[4150,725]],speed:200,currentPoint:0.37777777777528526,collidable:true,pointOn:{"x":4150,"y":500},pointTo:{"x":4150,"y":725},xv:1.2246467991473532e-14,yv:200,inView:true,path:[[8300,1000,6.666666666666667],[8300,1450,6.666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:1100,w:100,h:1900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:100,w:100,h:1100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8100,y:700,w:100,h:200,points:[[4050,350],[4300,350]],speed:160,currentPoint:0.67199999998583,collidable:true,pointOn:{"x":4050,"y":350},pointTo:{"x":4300,"y":350},xv:160,yv:0,inView:true,path:[[8100,700,5.333333333333333],[8600,700,5.333333333333333]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8100,y:500,w:100,h:200,points:[[4050,250],[4300,250]],speed:320,currentPoint:1.3440000000141992,collidable:true,pointOn:{"x":4300,"y":250},pointTo:{"x":4050,"y":250},xv:-320,yv:3.9188697572715304e-14,inView:true,path:[[8100,500,10.666666666666666],[8600,500,10.666666666666666]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:400,w:500,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8100,y:0,w:100,h:200,points:[[4050,0],[4300,0]],speed:270,currentPoint:0.259,collidable:true,pointOn:{"x":4050,"y":0},pointTo:{"x":4300,"y":0},xv:270,yv:0,inView:true,path:[[8100,0,9],[8600,0,9]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8100,y:200,w:100,h:200,points:[[4050,100],[4300,100]],speed:180,currentPoint:1.506,collidable:true,pointOn:{"x":4300,"y":100},pointTo:{"x":4050,"y":100},xv:-180,yv:2.2043642384652358e-14,inView:true,path:[[8100,200,6],[8600,200,6]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:0,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:700,w:200,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:600,w:200,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:350,w:400,h:100,angle:46044.500000011285,rotateSpeed:0.09730639730639731,pivotX:9000,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:0,inView:true,initialRotation:803.628127434726,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8900,y:950,w:400,h:100,angle:-46044.50000001127,rotateSpeed:-0.09730639730639731,pivotX:9100,pivotY:1000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:0,inView:true,initialRotation:-803.6281274347257,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:0,w:100,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:700,w:100,h:400,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:8900,y:1300,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8700,y:1400,w:200,h:100,points:[[4350,700],[4350,950]],speed:187.5,currentPoint:1.56875,collidable:true,pointOn:{"x":4350,"y":950},pointTo:{"x":4350,"y":700},xv:1.1481063742006436e-14,yv:-187.5,inView:true,path:[[8700,1400,6.25],[8700,1900,6.25]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8900,y:1800,w:200,h:200,points:[[4450,900],[4450,700]],speed:150,currentPoint:1.56875,collidable:true,pointOn:{"x":4450,"y":700},pointTo:{"x":4450,"y":900},xv:9.184850993605149e-15,yv:150,inView:true,path:[[8900,1800,5],[8900,1400,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:1400,w:300,h:600,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:2000,w:200,h:1000,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:2300,w:800,h:700,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9100,y:2200,w:400,h:100,angle:48753.00000001649,rotateSpeed:0.10303030303030303,pivotX:9300,pivotY:2250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:0,inView:true,initialRotation:850.9003702250832,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9700,y:1900,w:100,h:1100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:1700,w:200,h:200,points:[[4800,850],[4700,850]],speed:100,currentPoint:1.4249999999507326,collidable:true,pointOn:{"x":4700,"y":850},pointTo:{"x":4800,"y":850},xv:100,yv:0,inView:true,path:[[9600,1700,3.3333333333333335],[9400,1700,3.3333333333333335]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9800,y:300,w:100,h:2700,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:1500,w:200,h:200,points:[[4800,750],[4800,550]],speed:170,currentPoint:1.1112499999969208,collidable:true,pointOn:{"x":4800,"y":550},pointTo:{"x":4800,"y":750},xv:1.0409497792752502e-14,yv:170,inView:true,path:[[9600,1500,5.666666666666667],[9600,1100,5.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9400,y:1100,w:200,h:200,points:[[4700,550],[4700,350]],speed:170,currentPoint:1.1112500000006744,collidable:true,pointOn:{"x":4700,"y":350},pointTo:{"x":4700,"y":550},xv:1.0409497792752502e-14,yv:170,inView:true,path:[[9400,1100,5.666666666666667],[9400,700,5.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:700,w:200,h:200,points:[[4800,350],[4800,150]],speed:170,currentPoint:1.1112500000003116,collidable:true,pointOn:{"x":4800,"y":150},pointTo:{"x":4800,"y":350},xv:1.0409497792752502e-14,yv:170,inView:true,path:[[9600,700,5.666666666666667],[9600,300,5.666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:200,w:500,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9500,y:0,w:300,h:50,angle:8125.499999999874,rotateSpeed:0.017171717171717175,pivotX:9650,pivotY:25,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:141.81672837079702,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:700,w:50,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:9000,y:1250,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:9500,y:2200,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8900,y:2200,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:10200,y:0,w:100,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10200,y:800,w:100,h:300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:800,w:400,h:2200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:800,w:400,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:100,w:100,h:700,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10300,y:400,w:50,h:200,points:[[5150,200],[5275,200]],speed:190,currentPoint:1.8459999999605863,collidable:true,pointOn:{"x":5275,"y":200},pointTo:{"x":5150,"y":200},xv:-190,yv:2.326828918379971e-14,inView:true,path:[[10300,400,6.333333333333333],[10550,400,6.333333333333333]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10550,y:200,w:50,h:200,points:[[5275,100],[5150,100]],speed:190,currentPoint:1.8459999999605863,collidable:true,pointOn:{"x":5150,"y":100},pointTo:{"x":5275,"y":100},xv:190,yv:0,inView:true,path:[[10550,200,6.333333333333333],[10300,200,6.333333333333333]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10700,y:0,w:200,h:200,points:[[5350,0],[5450,0],[5450,100],[5350,100]],speed:250,currentPoint:2.5624999999753255,collidable:true,pointOn:{"x":5450,"y":100},pointTo:{"x":5350,"y":100},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[10700,0,8.333333333333334],[10900,0,8.333333333333334],[10900,200,8.333333333333334],[10700,200,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11100,y:0,w:200,h:200,points:[[5550,0],[5650,0],[5650,100],[5550,100]],speed:250,currentPoint:2.5624999999753255,collidable:true,pointOn:{"x":5650,"y":100},pointTo:{"x":5550,"y":100},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[11100,0,8.333333333333334],[11300,0,8.333333333333334],[11300,200,8.333333333333334],[11100,200,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11100,y:400,w:200,h:200,points:[[5550,200],[5650,200],[5650,300],[5550,300]],speed:250,currentPoint:2.5624999999753255,collidable:true,pointOn:{"x":5650,"y":300},pointTo:{"x":5550,"y":300},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[11100,400,8.333333333333334],[11300,400,8.333333333333334],[11300,600,8.333333333333334],[11100,600,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10700,y:400,w:200,h:200,points:[[5350,200],[5450,200],[5450,300],[5350,300]],speed:250,currentPoint:2.5624999999753255,collidable:true,pointOn:{"x":5450,"y":300},pointTo:{"x":5350,"y":300},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[10700,400,8.333333333333334],[10900,400,8.333333333333334],[10900,600,8.333333333333334],[10700,600,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11500,y:0,w:200,h:1000,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10700,y:800,w:600,h:100,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:10200,y:700,w:100,h:100,spawn:{"x":5125,"y":375},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
let minX1023, minY1023, maxX1023, maxY1023;
    minX1023 = 10100;minY1023 = 600;maxX1023 = 10400;maxY1023 = 900;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1023) && (player.pos.x) < md(maxX1023) && (player.pos.y) > md(minY1023) && (player.pos.y) < md(maxY1023)) {
            colors.background="#c48293"; colors.tile="#894d5f";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:11200,y:1000,w:500,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:11200,y:1200,w:100,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:1600,w:900,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:1700,w:200,h:300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:2000,w:200,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10400,y:1700,w:200,h:100,points:[[5200,850],[5200,950]],speed:100,currentPoint:1.4250000000061585,collidable:true,pointOn:{"x":5200,"y":950},pointTo:{"x":5200,"y":850},xv:6.123233995736766e-15,yv:-100,inView:true,path:[[10400,1700,3.3333333333333335],[10400,1900,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10400,y:1700,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10650,y:2000,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:2100,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:2300,w:250,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:900,w:700,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:950,w:50,h:450,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10600,y:1550,w:600,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11150,y:1200,w:50,h:350,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10700,y:2000,w:50,h:500,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10750,y:2000,w:50,h:700,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:2600,w:300,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10600,y:2850,w:400,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11000,y:2600,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10950,y:2500,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10800,y:2250,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11050,y:2450,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11100,y:2000,w:100,h:1000,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11050,y:2100,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10800,y:1700,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11300,y:1200,w:500,h:700,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11200,y:2100,w:500,h:100,angle:-24376.499999999498,rotateSpeed:-0.051515151515151514,pivotX:11450,pivotY:2150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:-425.45018511238897,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11200,y:2375,w:500,h:50,angle:24376.500000006166,rotateSpeed:0.051515151515151514,pivotX:11450,pivotY:2400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:0,inView:true,initialRotation:425.4501851125054,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11700,y:1900,w:100,h:800,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11200,y:2600,w:500,h:100,angle:-24376.500000006166,rotateSpeed:-0.051515151515151514,pivotX:11450,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:-425.4501851125054,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11700,y:2850,w:100,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11500,y:2900,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11200,y:2900,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11400,y:2950,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:2400,w:200,h:200,points:[[5900,1200],[6100,1200]],speed:200,currentPoint:1.4250000000246337,collidable:true,pointOn:{"x":6100,"y":1200},pointTo:{"x":5900,"y":1200},xv:-200,yv:2.4492935982947064e-14,inView:true,path:[[11800,2400,6.666666666666667],[12200,2400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:2000,w:200,h:200,points:[[5900,1000],[6100,1000]],speed:200,currentPoint:1.4250000000246337,collidable:true,pointOn:{"x":6100,"y":1000},pointTo:{"x":5900,"y":1000},xv:-200,yv:2.4492935982947064e-14,inView:true,path:[[11800,2000,6.666666666666667],[12200,2000,6.666666666666667]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12400,y:1000,w:200,h:2000,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:1600,w:200,h:200,points:[[5900,800],[6100,800]],speed:200,currentPoint:1.4250000000246337,collidable:true,pointOn:{"x":6100,"y":800},pointTo:{"x":5900,"y":800},xv:-200,yv:2.4492935982947064e-14,inView:true,path:[[11800,1600,6.666666666666667],[12200,1600,6.666666666666667]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:2200,w:600,h:200,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:1800,w:600,h:200,force:1800,dir:{"x":-1800,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:1200,w:200,h:200,force:1800,dir:{"x":-1800,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[1],{type:[1,[],[1]],x:12000,y:1200,w:400,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:11700,y:200,w:200,h:800,force:4100,dir:{"x":4100,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.903961584633853,})
C(1,[],[1],{type:[1,[],[1]],x:11950,y:200,w:650,h:800,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11900,y:650,w:50,h:350,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11900,y:200,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:11900,y:450,w:50,h:200,effect:90,inView:true,bounciness:60,decay:0.5,})
C(1,[],[1],{type:[1,[],[1]],x:12000,y:0,w:108,h:56,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12200,y:150,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12388,y:0,w:112,h:60,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12800,y:0,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12600,y:300,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12800,y:500,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:12700,y:300,w:700,h:100,angle:-10156.874999999769,rotateSpeed:-0.021464646464646464,pivotX:13050,pivotY:350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:-177.27091046349503,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:0,w:500,h:700,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:12575,y:1050,w:750,h:100,angle:6094.124999999909,rotateSpeed:0.012878787878787878,pivotX:12950,pivotY:1100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:189.15932438026945,unSim:0,inView:true,initialRotation:106.36254627809784,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12900,y:700,w:100,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:850,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:950,w:200,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13250,y:1100,w:50,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:1000,w:100,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:1250,w:100,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13300,y:1150,w:100,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:12700,y:1350,w:300,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:12700,y:1300,w:100,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:12600,y:1000,w:300,h:200,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:13300,y:700,w:100,h:450,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13000,y:1400,w:400,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12900,y:950,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13000,y:700,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:1000,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:1200,w:50,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:700,w:100,h:800,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:12700,y:1500,w:800,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:12700,y:1700,w:800,h:1300,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:12600,y:1700,w:100,h:1300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13500,y:1550,w:4000,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:13500,y:1700,w:4000,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:13500,y:0,w:4000,h:1550,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13500,y:1750,w:4000,h:1250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:12600,y:1600,w:4900,h:100,force:4500,dir:{"x":4500,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
let minX1024, minY1024, maxX1024, maxY1024;
    minX1024 = 12650;minY1024 = 1550;maxX1024 = 12900;maxY1024 = 1800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1024) && (player.pos.x) < md(maxX1024) && (player.pos.y) > md(minY1024) && (player.pos.y) < md(maxY1024)) {
            colors.background="#dc8150"; colors.tile="#a15636";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:17500,y:1700,w:200,h:1300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17600,y:1500,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17700,y:900,w:100,h:2100,canJump:true,inView:true,})
let minX1025, minY1025, maxX1025, maxY1025;
    minX1025 = -100;minY1025 = -100;maxX1025 = 400;maxY1025 = 400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1025) && (player.pos.x) < md(maxX1025) && (player.pos.y) > md(minY1025) && (player.pos.y) < md(maxY1025)) {
            colors.background="#8bc482"; colors.tile="#55894d";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:1500,y:0,w:50,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:1500,w:600,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:8475,y:1675,w:25,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11137.5,y:1837.5,w:25,h:162.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11137.5,y:1700,w:25,h:12.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10025,y:225,w:50,h:250,angle:54170.00000000729,rotateSpeed:0.11447811447811448,pivotX:10050,pivotY:350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:63.73774391990981,unSim:0,inView:true,initialRotation:945.4448558054555,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17500,y:1450,w:100,h:50,points:[[8750,725],[8750,500]],speed:375,currentPoint:1.7083333333333335,collidable:true,pointOn:{"x":8750,"y":500},pointTo:{"x":8750,"y":725},xv:2.2962127484012872e-14,yv:375,inView:true,path:[[17500,1450,12.5],[17500,1000,12.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17650,y:1000,w:50,h:50,points:[[8825,500],[8825,725]],speed:375,currentPoint:1.7083333333333335,collidable:true,pointOn:{"x":8825,"y":725},pointTo:{"x":8825,"y":500},xv:2.2962127484012872e-14,yv:-375,inView:true,path:[[17650,1000,12.5],[17650,1450,12.5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17650,y:950,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17650,y:900,w:50,h:50,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17500,y:600,w:300,h:300,points:[[8750,300],[8900,300],[8900,150],[8750,150]],speed:550,currentPoint:0.5583333333659417,collidable:true,pointOn:{"x":8750,"y":300},pointTo:{"x":8900,"y":300},xv:550,yv:0,inView:true,path:[[17500,600,18.333333333333332],[17800,600,18.333333333333332],[17800,300,18.333333333333332],[17500,300,18.333333333333332]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:900,w:400,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18100,y:200,w:100,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17650,y:200,w:475,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17650,y:100,w:50,h:100,points:[[8825,50],[9075,50]],speed:400,currentPoint:0.6800000000394139,collidable:true,pointOn:{"x":8825,"y":50},pointTo:{"x":9075,"y":50},xv:400,yv:0,inView:true,path:[[17650,100,13.333333333333334],[18150,100,13.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18150,y:0,w:50,h:100,points:[[9075,0],[8825,0]],speed:400,currentPoint:0.6800000000394139,collidable:true,pointOn:{"x":9075,"y":0},pointTo:{"x":8825,"y":0},xv:-400,yv:4.898587196589413e-14,inView:true,path:[[18150,0,13.333333333333334],[17650,0,13.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18200,y:0,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:100,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:200,w:300,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18200,y:500,w:200,h:200,angle:-24376.500000000095,rotateSpeed:-0.051515151515151514,pivotX:18300,pivotY:600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:0,inView:true,initialRotation:-425.45018511239937,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18400,y:300,w:200,h:200,angle:24376.500000000113,rotateSpeed:0.051515151515151514,pivotX:18500,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:0,inView:true,initialRotation:425.4501851123997,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18600,y:300,w:100,h:700,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18400,y:700,w:200,h:200,angle:24376.500000000116,rotateSpeed:0.051515151515151514,pivotX:18500,pivotY:800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:0,inView:true,initialRotation:425.45018511239977,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:900,w:200,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18425,y:1000,w:200,h:200,angle:454350.87499997404,rotateSpeed:0.9601851851851854,pivotX:18525,pivotY:1100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:0,inView:true,initialRotation:7929.9187280667375,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18050,y:1200,w:200,h:200,angle:454350.8749999737,rotateSpeed:0.9601851851851854,pivotX:18150,pivotY:1300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:0,inView:true,initialRotation:7929.918728066733,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:1000,w:400,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:1200,w:250,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:1400,w:550,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18600,y:1000,w:100,h:500,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18440,y:1225,w:200,h:50,angle:454350.8749999744,rotateSpeed:0.9601851851851854,pivotX:18540,pivotY:1250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:0,inView:true,initialRotation:7929.918728066744,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18450,y:1400,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18600,y:1500,w:100,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17900,y:1900,w:1200,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17800,y:1500,w:200,h:200,points:[[8900,750],[9200,750]],speed:350,currentPoint:1.9958333333004883,collidable:true,pointOn:{"x":9200,"y":750},pointTo:{"x":8900,"y":750},xv:-350,yv:4.2862637970157365e-14,inView:true,path:[[17800,1500,11.666666666666666],[18400,1500,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18150,y:1700,w:200,h:200,points:[[9075,850],[9200,850],[8900,850]],speed:350,currentPoint:2.9928571428008373,collidable:true,pointOn:{"x":8900,"y":850},pointTo:{"x":9075,"y":850},xv:350,yv:0,inView:true,path:[[18150,1700,11.666666666666666],[18400,1700,11.666666666666666],[17800,1700,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18200,y:2000,w:200,h:200,points:[[9100,1000],[9000,1000]],speed:350,currentPoint:1.9874999999014653,collidable:true,pointOn:{"x":9000,"y":1000},pointTo:{"x":9100,"y":1000},xv:350,yv:0,inView:true,path:[[18200,2000,11.666666666666666],[18000,2000,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17800,y:2000,w:200,h:200,points:[[8900,1000],[9000,1000]],speed:350,currentPoint:1.9874999999014653,collidable:true,pointOn:{"x":9000,"y":1000},pointTo:{"x":8900,"y":1000},xv:-350,yv:4.2862637970157365e-14,inView:true,path:[[17800,2000,11.666666666666666],[18000,2000,11.666666666666666]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:2100,w:300,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:2200,w:25,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17825,y:2250,w:575,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:2200,w:100,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:2050,w:50,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:2000,w:100,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18900,y:2000,w:200,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:17900,y:2600,w:1000,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17800,y:2300,w:100,h:200,points:[[8900,1150],[9400,1150]],speed:300,currentPoint:1.255,collidable:true,pointOn:{"x":9400,"y":1150},pointTo:{"x":8900,"y":1150},xv:-300,yv:3.6739403974420595e-14,inView:true,path:[[17800,2300,10],[18800,2300,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18800,y:2400,w:100,h:200,points:[[9400,1200],[8900,1200]],speed:300,currentPoint:1.255,collidable:true,pointOn:{"x":8900,"y":1200},pointTo:{"x":9400,"y":1200},xv:300,yv:0,inView:true,path:[[18800,2400,10],[17800,2400,10]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:2300,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18100,y:2400,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18200,y:2550,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18350,y:2300,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17800,y:2300,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18750,y:2450,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:17800,y:2700,w:100,h:150,points:[[8900,1350],[9400,1350]],speed:700,currentPoint:1.5950000000197069,collidable:true,pointOn:{"x":9400,"y":1350},pointTo:{"x":8900,"y":1350},xv:-700,yv:8.572527594031473e-14,inView:true,path:[[17800,2700,23.333333333333332],[18800,2700,23.333333333333332]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18800,y:2850,w:100,h:150,points:[[9400,1425],[8900,1425]],speed:700,currentPoint:1.5950000000197069,collidable:true,pointOn:{"x":8900,"y":1425},pointTo:{"x":9400,"y":1425},xv:700,yv:0,inView:true,path:[[18800,2850,23.333333333333332],[17800,2850,23.333333333333332]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:0,w:700,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:18700,y:200,w:400,h:1700,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:18900,y:2900,w:200,h:100,spawn:{"x":9500,"y":1475},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:20100,y:200,w:200,h:2800,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:19550,y:450,radius:225,startAngle:-0.7853981633974483,endAngle:1.4660765716752369,startPolygon:{"points":[[9898.743686707647,101.25631329235419],[9934.099025766973,65.90097423302683]],"type":"poly","props":{}},endPolygon:{"points":[[9793.29248107184,399.0413316894478],[9798.518904235221,448.76742645786146]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:450,startSliceAngle:-0.7853981633974483,endSliceAngle:1.4660765716752369,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:19550,y:450,radius:225,startAngle:2.356194490192345,endAngle:-1.5707963267948966,startPolygon:{"points":[[9651.256313292353,348.7436867076458],[9615.900974233027,384.0990257669732]],"type":"poly","props":{}},endPolygon:{"points":[[9775,50],[9775,0]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:450,startSliceAngle:2.356194490192345,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:19900,y:200,w:200,h:800,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19100,y:-50,w:100,h:1050,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19150,y:-50,w:150,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19250,y:-50,w:250,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19450,y:-50,w:100,h:150,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19200,y:400,w:700,h:100,angle:36564.75000000026,rotateSpeed:0.07727272727272728,pivotX:19550,pivotY:450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:638.1752776686012,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19450,y:350,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
let minX1026, minY1026, maxX1026, maxY1026;
    minX1026 = 19900;minY1026 = -100;maxX1026 = 20300;maxY1026 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1026) && (player.pos.x) < md(maxX1026) && (player.pos.y) > md(minY1026) && (player.pos.y) < md(maxY1026)) {
            colors.background="#dc5050"; colors.tile="#a13636";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:22300,y:1400,w:500,h:1000,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20900,y:0,w:100,h:200,points:[[10450,0],[10600,0]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10600,"y":0},pointTo:{"x":10450,"y":0},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[20900,0,5],[21200,0,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21150,y:200,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21300,y:0,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21350,y:0,w:150,h:300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:20250,y:-200,w:200,h:200,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21000,y:200,w:200,h:100,points:[[10500,100],[10500,250]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10500,"y":250},pointTo:{"x":10500,"y":100},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[21000,200,5],[21000,500,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20900,y:450,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21200,y:300,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21250,y:300,w:250,h:600,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:20900,y:500,w:350,h:400,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:300,w:425,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20550,y:350,w:100,h:50,points:[[10275,175],[10275,325]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10275,"y":325},pointTo:{"x":10275,"y":175},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[20550,350,5],[20550,650,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20550,y:350,w:100,h:50,points:[[10275,175],[10275,325]],speed:300,currentPoint:0.85,collidable:true,pointOn:{"x":10275,"y":175},pointTo:{"x":10275,"y":325},xv:1.8369701987210297e-14,yv:300,inView:true,path:[[20550,350,10],[20550,650,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20700,y:650,w:100,h:50,points:[[10350,325],[10350,175]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10350,"y":175},pointTo:{"x":10350,"y":325},xv:9.184850993605149e-15,yv:150,inView:true,path:[[20700,650,5],[20700,350,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:350,w:200,h:350,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20850,y:450,w:50,h:350,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20550,y:425,w:75,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20725,y:575,w:75,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20600,y:800,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:20650,y:850,w:250,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:20600,y:850,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:20400,y:900,w:900,h:100,points:[[10200,450],[10200,550]],speed:150,currentPoint:1.1375,alongWith:false,pointOn:{"x":10200,"y":550},pointTo:{"x":10200,"y":450},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[20400,900,5],[20400,1100,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:20400,y:1100,w:900,h:100,points:[[10200,550],[10200,650]],speed:150,currentPoint:1.1375,alongWith:false,pointOn:{"x":10200,"y":650},pointTo:{"x":10200,"y":550},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[20400,1100,5],[20400,1300,5]],})
C(1,[],[0],{type:[1,[],[0]],x:22800,y:1400,w:1050,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:20600,y:900,w:700,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:1350,w:1200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20650,y:950,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20800,y:1200,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20950,y:950,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21100,y:1200,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20700,y:950,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20900,y:950,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20850,y:1250,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21050,y:1250,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20750,y:1250,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20500,y:1250,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20450,y:1300,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20400,y:1200,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20350,y:1250,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:1300,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:700,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21300,y:900,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24000,y:1100,w:100,h:400,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:21350,y:900,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21400,y:900,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21450,y:900,w:50,h:275,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21000,y:950,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:23700,y:1500,w:100,h:300,points:[[11850,750],[11350,750]],speed:250,currentPoint:1.7125000000197068,alongWith:false,pointOn:{"x":11350,"y":750},pointTo:{"x":11850,"y":750},xv:250,yv:0,inView:true,path:[[23700,1500,8.333333333333334],[22700,1500,8.333333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:24000,y:1500,w:100,h:300,points:[[12000,750],[11500,750]],speed:250,currentPoint:1.7125000000197068,alongWith:false,pointOn:{"x":11500,"y":750},pointTo:{"x":12000,"y":750},xv:250,yv:0,inView:true,path:[[24000,1500,8.333333333333334],[23000,1500,8.333333333333334]],})
C(1,[],[0],{type:[1,[],[0]],x:23000,y:1800,w:1100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24100,y:1400,w:100,h:500,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:23750,y:1500,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23700,y:1500,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23500,y:1700,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23500,y:1500,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23350,y:1500,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23150,y:1612.5,w:50,h:187.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:1500,w:150,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:1650,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22950,y:1500,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22800,y:1000,w:1300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:200,w:500,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:1100,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:1300,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22600,y:1300,w:137.5,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22600,y:1100,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:22500,y:1100,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22500,y:1350,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:22500,y:1100,w:100,h:50,points:[[11250,550],[11250,675]],speed:150,currentPoint:0.51,collidable:true,pointOn:{"x":11250,"y":550},pointTo:{"x":11250,"y":675},xv:9.184850993605149e-15,yv:150,inView:true,path:[[22500,1100,5],[22500,1350,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:20300,y:1400,w:1600,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22000,y:1400,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22000,y:1200,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:21700,y:900,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22000,y:800,w:100,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22000,y:1500,w:300,h:300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:21800,y:1500,w:100,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21700,y:1300,w:100,h:100,points:[[10850,650],[10950,650],[10950,750],[10950,650]],speed:150,currentPoint:3.1375,collidable:true,pointOn:{"x":10950,"y":650},pointTo:{"x":10850,"y":650},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[21700,1300,5],[21900,1300,5],[21900,1500,5],[21900,1300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:22100,y:1300,w:100,h:100,points:[[11050,650],[10950,650],[10950,550],[10950,650]],speed:150,currentPoint:3.1375,collidable:true,pointOn:{"x":10950,"y":650},pointTo:{"x":11050,"y":650},xv:150,yv:0,inView:true,path:[[22100,1300,5],[21900,1300,5],[21900,1100,5],[21900,1300,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22100,y:800,w:200,h:400,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:21600,y:900,w:50,h:350,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21500,y:900,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21550,y:900,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21650,y:900,w:50,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21500,y:800,w:300,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:21350,y:1300,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:22650,y:1200,w:100,h:100,spawn:{"x":11350,"y":625},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[1],[1],{type:[1,[1],[1]],x:22100,y:1150,w:150,h:50,angle:-73129.50000000127,rotateSpeed:-0.15454545454545457,pivotX:22175,pivotY:1175,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:39.528470752104745,unSim:0,inView:true,initialRotation:-1276.3505553372152,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20825,y:450,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:22800,y:1100,w:152,h:100,points:[[11400,550],[11400,650]],speed:150,currentPoint:1.1375,collidable:true,pointOn:{"x":11400,"y":650},pointTo:{"x":11400,"y":550},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[22800,1100,5],[22800,1300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23048,y:1300,w:152,h:100,points:[[11524,650],[11524,550]],speed:150,currentPoint:1.1375,collidable:true,pointOn:{"x":11524,"y":550},pointTo:{"x":11524,"y":650},xv:9.184850993605149e-15,yv:150,inView:true,path:[[23048,1300,5],[23048,1100,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:1100,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23100,y:1300,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22737.5,y:1350,w:62.5,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:23200,y:1200,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23600,y:1312.5,w:100,h:87.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23300,y:1350,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:23800,y:1100,w:200,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23850,y:1350,w:150,h:50,points:[[11925,675],[11925,600]],speed:150,currentPoint:0.85,collidable:true,pointOn:{"x":11925,"y":675},pointTo:{"x":11925,"y":600},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[23850,1350,5],[23850,1200,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:23850,y:1450,w:50,h:50,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:23850,y:1400,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24050,y:1500,w:50,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22800,y:2200,w:1600,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:22900,y:2098,w:100,h:102,points:[[11450,1049],[12150,1049]],speed:700,currentPoint:1.4250000000140763,collidable:true,pointOn:{"x":12150,"y":1049},pointTo:{"x":11450,"y":1049},xv:-700,yv:8.572527594031473e-14,inView:true,path:[[22900,2098,23.333333333333332],[24300,2098,23.333333333333332]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24400,y:1800,w:100,h:500,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:24200,y:1800,w:200,h:100,spawn:{"x":12150,"y":925},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:1996,w:100,h:204,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23095,y:2100,w:40,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23250,y:1900,w:50,h:102,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23900,y:1900,w:50,h:102,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24062.5,y:2100,w:337.5,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23500,y:2175,w:200,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23300,y:1900,w:600,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24250,y:2048,w:150,h:52,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23950,y:1900,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24500,y:800,w:100,h:1100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24200,y:1700,w:100,h:100,points:[[12100,850],[12200,850]],speed:150,currentPoint:1.1375,collidable:true,pointOn:{"x":12200,"y":850},pointTo:{"x":12100,"y":850},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[24200,1700,5],[24400,1700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24400,y:1500,w:100,h:100,points:[[12200,750],[12100,750]],speed:150,currentPoint:1.1375,collidable:true,pointOn:{"x":12100,"y":750},pointTo:{"x":12200,"y":750},xv:150,yv:0,inView:true,path:[[24400,1500,5],[24200,1500,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24400,y:1700,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24200,y:1500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24200,y:1600,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24450,y:1650,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24200,y:1400,w:150,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24250,y:1150,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24100,y:1350,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24100,y:1000,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24350,y:1175,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24475,y:1125,w:25,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24000,y:900,w:400,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24600,y:800,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24200,y:150,w:100,h:750,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:24300,y:512.5,w:500,h:75,angle:-24376.50000000043,rotateSpeed:-0.051515151515151514,pivotX:24550,pivotY:550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:126.39842760097928,unSim:0,inView:true,initialRotation:-425.45018511240517,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:24300,y:512.5,w:500,h:75,angle:-24286.50000000043,rotateSpeed:-0.051515151515151514,pivotX:24550,pivotY:550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:126.39842760097928,unSim:0,inView:true,initialRotation:-423.87938878561033,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24450,y:450,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24550,y:787.5,w:250,h:12.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24787.5,y:300,w:12.5,h:487.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24400,y:0,w:400,h:300,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:24450,y:300,w:337.5,h:12.5,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24300,y:525,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24300,y:500,w:25,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24250,y:100,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24200,y:-100,w:100,h:50,points:[[12100,-50],[12100,25]],speed:250,currentPoint:1.4166666666667307,collidable:true,pointOn:{"x":12100,"y":25},pointTo:{"x":12100,"y":-50},xv:1.5308084989341916e-14,yv:-250,inView:true,path:[[24200,-100,8.333333333333334],[24200,50,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24100,y:0,w:50,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24000,y:0,w:100,h:200,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:24000,y:200,w:200,h:200,spawn:{"x":12050,"y":150},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:23900,y:0,w:100,h:800,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24000,y:400,w:100,h:100,points:[[12000,200],[12000,400]],speed:300,currentPoint:1.1375,collidable:true,pointOn:{"x":12000,"y":400},pointTo:{"x":12000,"y":200},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[24000,400,10],[24000,800,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24100,y:800,w:100,h:100,points:[[12050,400],[12050,325]],speed:112.5,currentPoint:1.1375,collidable:true,pointOn:{"x":12050,"y":325},pointTo:{"x":12050,"y":400},xv:6.8886382452038615e-15,yv:112.5,inView:true,path:[[24100,800,3.75],[24100,650,3.75]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24100,y:550,w:100,h:100,points:[[12050,275],[12050,200]],speed:112.5,currentPoint:1.1375,collidable:true,pointOn:{"x":12050,"y":200},pointTo:{"x":12050,"y":275},xv:6.8886382452038615e-15,yv:112.5,inView:true,path:[[24100,550,3.75],[24100,400,3.75]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:23800,y:0,w:100,h:900,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:22800,y:400,w:1000,h:200,angle:-16251.000000000304,rotateSpeed:-0.03434343434343435,pivotX:23300,pivotY:500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:0,inView:true,initialRotation:-283.63345674160377,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22450,y:-50,w:350,h:150,canJump:true,inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:22800,y:0,r:100,renderType:"circle",inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:21800,y:1600,w:200,h:200,spawn:{"x":10950,"y":850},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:21800,y:1800,w:500,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:23450,y:1100,w:150,h:12.5,canCollide:true,inView:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21800,150],[22300,200],[22000,450],[21800,400]],most:{"left":10900,"right":11150,"top":75,"bottom":225},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21500,0],[22300,0],[22300,50]],most:{"left":10750,"right":11150,"top":0,"bottom":25},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21500,0],[21700,0],[21650,350],[21500,800]],most:{"left":10750,"right":10850,"top":0,"bottom":400},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21900,650],[21900,800],[21800,800]],most:{"left":10900,"right":10950,"top":325,"bottom":400},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21800,y:800,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22200,500],[22100,700],[21900,700],[21900,650]],most:{"left":10950,"right":11100,"top":250,"bottom":350},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22300,600],[22300,800],[22250,800],[22250,750]],most:{"left":11125,"right":11150,"top":300,"bottom":400},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21400,y:-100,w:1050,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:0,w:150,h:50,canJump:true,inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:22450,y:0,r:100,renderType:"circle",inView:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21900,700],[21950,700],[21900,750]],most:{"left":10950,"right":10975,"top":350,"bottom":375},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21500,y:1500,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24000,y:2700,w:700,h:100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:24100,y:2530,w:300,h:40,angle:12188.250000004122,rotateSpeed:0.025757575757575757,pivotX:24250,pivotY:2550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.66372975210778,unSim:0,inView:true,initialRotation:212.7250925562708,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24100,y:2660,w:40,h:40,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24000,y:2500,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:23850,y:2430,w:300,h:40,angle:-12158.250000004122,rotateSpeed:-0.025757575757575757,pivotX:24000,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.66372975210778,unSim:0,inView:true,initialRotation:-212.2014937806725,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24110,y:2300,w:90,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23800,y:2300,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23800,y:2350,w:50,h:90,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23900,y:2600,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:23600,y:2630,w:300,h:40,angle:-12158.250000004122,rotateSpeed:-0.025757575757575757,pivotX:23750,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.66372975210778,unSim:0,inView:true,initialRotation:-212.2014937806725,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23600,y:2500,w:40,h:40,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23600,y:2300,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23550,y:2300,w:50,h:500,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23600,y:2750,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23550,y:2800,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:23850,y:2780,w:300,h:40,angle:-12158.250000004122,rotateSpeed:-0.025757575757575757,pivotX:24000,pivotY:2800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:75.66372975210778,unSim:0,inView:true,initialRotation:-212.2014937806725,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23800,y:2850,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23800,y:2950,w:330,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24130,y:2900,w:70,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:23500,y:2300,w:50,h:600,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23550,y:2850,w:250,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23700,y:2900,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23700,y:3000,w:500,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:24200,y:2300,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24400,y:2550,w:100,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:24500,y:2850,w:100,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:24200,y:3000,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24500,y:2800,w:100,h:50,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:24700,y:2700,w:100,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[0],[1],{type:[1,[0],[1]],x:24600,y:2800,w:200,h:200,points:[[12300,1400],[12300,1500]],speed:150,currentPoint:1.1375,collidable:true,pointOn:{"x":12300,"y":1500},pointTo:{"x":12300,"y":1400},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[24600,2800,5],[24600,3000,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:24800,y:0,w:200,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24800,y:1600,w:300,h:1250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24800,y:3150,w:300,h:50,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24900,y:2850,w:200,h:300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24500,y:2950,w:100,h:100,canJump:true,inView:true,})
C(1,[],[8],{type:[1,[],[8]],x:24500,y:2300,w:300,h:100,coins:6,currentCoins:6,active:true,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:6,})
C(1,[],[7],{type:[1,[],[7]],x:24300,y:2850,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:25100,y:1100,w:300,h:2100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:25000,y:0,w:200,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24800,y:1100,w:100,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24900,y:1100,w:200,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:24900,y:1400,w:200,h:200,canJump:true,inView:true,})
C(1,[],[20],{h:180,w:180,y:910,x:24910,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#950e0e";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:200,w:200,y:1200,x:24900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#000000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:21200,y:1800,w:600,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21200,y:1600,w:100,h:200,points:[[10600,800],[10850,800]],speed:250,currentPoint:1.4250000000394138,collidable:true,pointOn:{"x":10850,"y":800},pointTo:{"x":10600,"y":800},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[21200,1600,8.333333333333334],[21700,1600,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20900,y:1500,w:100,h:250,points:[[10450,750],[10700,750]],speed:250,currentPoint:1.4250000000394138,collidable:true,pointOn:{"x":10700,"y":750},pointTo:{"x":10450,"y":750},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[20900,1500,8.333333333333334],[21400,1500,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20900,y:1500,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21200,y:1900,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20400,y:2100,w:900,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20800,y:2050,w:300,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20700,y:2000,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20700,y:1800,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21100,y:2000,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20850,y:1500,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20600,y:1500,w:250,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:1500,w:300,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20300,y:1700,w:100,h:200,points:[[10150,850],[10300,850]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10300,"y":850},pointTo:{"x":10150,"y":850},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[20300,1700,5],[20600,1700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20600,y:1900,w:100,h:200,points:[[10300,950],[10150,950]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10150,"y":950},pointTo:{"x":10300,"y":950},xv:150,yv:0,inView:true,path:[[20600,1900,5],[20300,1900,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:1700,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20500,y:2050,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:2400,w:650,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20750,y:2350,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20950,y:2200,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21150,y:2350,w:150,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20300,y:2200,w:100,h:50,points:[[10150,1100],[10300,1100]],speed:300,currentPoint:0.85,collidable:true,pointOn:{"x":10150,"y":1100},pointTo:{"x":10300,"y":1100},xv:300,yv:0,inView:true,path:[[20300,2200,10],[20600,2200,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20600,y:2350,w:100,h:50,points:[[10300,1175],[10150,1175]],speed:300,currentPoint:0.85,collidable:true,pointOn:{"x":10300,"y":1175},pointTo:{"x":10150,"y":1175},xv:-300,yv:3.6739403974420595e-14,inView:true,path:[[20600,2350,10],[20300,2350,10]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21100,y:2400,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:20300,y:2500,w:650,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:20300,y:2600,w:1000,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:21100,y:2500,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:21300,y:2350,w:200,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21400,y:2300,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:21450,y:2050,w:50,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21500,y:2000,w:100,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:21300,y:2650,w:200,h:50,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:21600,y:1900,w:200,h:200,spawn:{"x":10850,"y":1000},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:21300,y:1900,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21800,y:1900,w:500,h:200,canJump:true,inView:true,})
C(1,[],[8],{type:[1,[],[8]],x:22300,y:2900,w:500,h:100,coins:4,currentCoins:4,active:true,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[7],{type:[1,[],[7]],x:20400,y:2800,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:21600,y:2400,w:700,h:100,angle:6094.125000000177,rotateSpeed:0.012878787878787878,pivotX:21950,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:106.36254627810253,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21600,y:2400,w:700,h:100,angle:6154.125000000177,rotateSpeed:0.012878787878787878,pivotX:21950,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:107.40974382929912,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21600,y:2400,w:700,h:100,angle:6214.125000000177,rotateSpeed:0.012878787878787878,pivotX:21950,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:108.45694138049572,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22050,2100],[22300,2100],[22200,2200]],most:{"left":11025,"right":11150,"top":1050,"bottom":1100},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22300,2100],[22300,2350],[22200,2200]],most:{"left":11100,"right":11150,"top":1050,"bottom":1175},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22300,2550],[22300,2800],[22200,2700]],most:{"left":11100,"right":11150,"top":1275,"bottom":1400},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[22200,2700],[22300,2800],[22050,2800]],most:{"left":11025,"right":11150,"top":1350,"bottom":1400},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[21600,2300],[21950,2450],[21600,2600]],most:{"left":10800,"right":10975,"top":1150,"bottom":1300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:21600,y:2800,w:700,h:100,canJump:true,inView:true,})
C(0,[],[1],{type:[0,[],[1]],x:21950,y:2450,r:100,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21200,y:2700,w:100,h:150,points:[[10600,1350],[10750,1350]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10750,"y":1350},pointTo:{"x":10600,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[21200,2700,5],[21500,2700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21500,y:2850,w:100,h:150,points:[[10750,1425],[10600,1425]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10600,"y":1425},pointTo:{"x":10750,"y":1425},xv:150,yv:0,inView:true,path:[[21500,2850,5],[21200,2850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20800,y:2700,w:100,h:150,points:[[10400,1350],[10550,1350]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10550,"y":1350},pointTo:{"x":10400,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[20800,2700,5],[21100,2700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:21100,y:2850,w:100,h:150,points:[[10550,1425],[10400,1425]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10400,"y":1425},pointTo:{"x":10550,"y":1425},xv:150,yv:0,inView:true,path:[[21100,2850,5],[20800,2850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20400,y:2700,w:100,h:150,points:[[10200,1350],[10350,1350]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10350,"y":1350},pointTo:{"x":10200,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[20400,2700,5],[20700,2700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:20700,y:2850,w:100,h:150,points:[[10350,1425],[10200,1425]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":10200,"y":1425},pointTo:{"x":10350,"y":1425},xv:150,yv:0,inView:true,path:[[20700,2850,5],[20400,2850,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20300,y:2700,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21750,y:3025,w:300,h:50,angle:58232.75000002263,rotateSpeed:0.12306397306397308,pivotX:21900,pivotY:3050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:1016.3532199911228,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:24500,y:2400,w:300,h:300,spawn:{"x":12325,"y":1275},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:22450,y:2900,w:200,h:100,spawn:{"x":11275,"y":1475},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:23100,y:2300,w:100,h:140,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23360,y:2600,w:140,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23100,y:2860,w:100,h:140,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:2300,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23400,y:2300,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:2400,w:200,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:22600,y:2500,w:200,h:400,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:22500,y:2400,w:100,h:500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:true,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:23300,y:3000,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:22600,y:2400,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:23400,y:2900,w:100,h:100,coins:5,currentCoins:5,active:true,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:5,})
C(1,[],[1],{type:[1,[],[1]],x:23050,y:2950,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:22800,y:2550,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23450,y:2550,w:50,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23050,y:2300,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23590,y:2900,w:110,h:110,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23400,y:3090,w:110,h:110,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[24],{type:[1,[],[24]],x:23600,y:3100,w:900,h:100,ir:0.1,or:0.3,o:1,vc:{"r":0,"g":0,"b":0},inView:true,innerR:0,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:0,outerG:0,outerB:0,outerSize:0.18,innerOpacity:0,outerOpacity:1,})
C(1,[0],[1],{type:[1,[0],[1]],x:23700,y:3100,w:10,h:50,points:[[11850,1550],[11945,1550]],speed:150,currentPoint:1.8289473684210527,collidable:true,pointOn:{"x":11945,"y":1550},pointTo:{"x":11850,"y":1550},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[23700,3100,5],[23890,3100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23890,y:3150,w:10,h:50,points:[[11945,1575],[11850,1575]],speed:150,currentPoint:1.8289473684210527,collidable:true,pointOn:{"x":11850,"y":1575},pointTo:{"x":11945,"y":1575},xv:150,yv:0,inView:true,path:[[23890,3150,5],[23700,3150,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23950,y:3100,w:50,h:40,points:[[11975,1550],[12050,1580]],speed:150,currentPoint:1.477911726253775,collidable:true,pointOn:{"x":12050,"y":1580},pointTo:{"x":11975,"y":1550},xv:-139.2715036327889,yv:-55.70860145311558,inView:true,path:[[23950,3100,5],[24100,3160,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:23950,y:3160,w:50,h:40,points:[[11975,1580],[12050,1550]],speed:150,currentPoint:1.477911726253775,collidable:true,pointOn:{"x":12050,"y":1550},pointTo:{"x":11975,"y":1580},xv:-139.2715036327889,yv:55.70860145311558,inView:true,path:[[23950,3160,5],[24100,3100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24200,y:3150,w:50,h:50,points:[[12100,1575],[12100,1550],[12125,1550],[12125,1575]],speed:150,currentPoint:0.55,collidable:true,pointOn:{"x":12100,"y":1575},pointTo:{"x":12100,"y":1550},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[24200,3150,5],[24200,3100,5],[24250,3100,5],[24250,3150,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24300,y:3150,w:50,h:50,points:[[12150,1575],[12150,1550],[12175,1550],[12175,1575]],speed:150,currentPoint:0.55,collidable:true,pointOn:{"x":12150,"y":1575},pointTo:{"x":12150,"y":1550},xv:9.184850993605149e-15,yv:-150,inView:true,path:[[24300,3150,5],[24300,3100,5],[24350,3100,5],[24350,3150,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24750,y:1200,w:50,h:208,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24600,y:900,w:160,h:100,canCollide:true,inView:true,boundPlayer:true,})
let minX1029, minY1029, maxX1029, maxY1029;
    minX1029 = 24800;minY1029 = 800;maxX1029 = 25200;maxY1029 = 1200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1029) && (player.pos.x) < md(maxX1029) && (player.pos.y) > md(minY1029) && (player.pos.y) < md(maxY1029)) {
            colors.background="#8bc482"; colors.tile="#55894d";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:25400,y:200,w:200,h:3000,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:25200,y:700,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:25350,y:300,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24600,y:2100,w:200,h:200,points:[[12300,1050],[12300,850]],speed:152,currentPoint:0.9229999999987684,collidable:true,pointOn:{"x":12300,"y":1050},pointTo:{"x":12300,"y":850},xv:9.307315673519884e-15,yv:-152,inView:true,path:[[24600,2100,5.066666666666666],[24600,1700,5.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24500,y:1900,w:100,h:40,points:[[12250,950],[12250,1125]],speed:133,currentPoint:0.9230000000014076,collidable:true,pointOn:{"x":12250,"y":950},pointTo:{"x":12250,"y":1125},xv:8.143901214329898e-15,yv:133,inView:true,path:[[24500,1900,4.433333333333334],[24500,2250,4.433333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24600,y:1500,w:50,h:50,points:[[12300,750],[12375,750]],speed:112.5,currentPoint:1.1375,collidable:true,pointOn:{"x":12375,"y":750},pointTo:{"x":12300,"y":750},xv:-112.5,yv:1.3777276490407723e-14,inView:true,path:[[24600,1500,3.75],[24750,1500,3.75]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:24600,y:1000,w:50,h:100,points:[[12300,500],[12300,575]],speed:112.5,currentPoint:1.1375,collidable:true,pointOn:{"x":12300,"y":575},pointTo:{"x":12300,"y":500},xv:6.8886382452038615e-15,yv:-112.5,inView:true,path:[[24600,1000,3.75],[24600,1150,3.75]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24850,y:1060,w:50,h:40,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24600,y:1850,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24750,y:1700,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24600,y:2110,w:200,h:40,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24600,y:1500,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:24600,y:1000,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
let minX1030, minY1030, maxX1030, maxY1030;
    minX1030 = 25300;minY1030 = -100;maxX1030 = 25700;maxY1030 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1030) && (player.pos.x) < md(maxX1030) && (player.pos.y) > md(minY1030) && (player.pos.y) < md(maxY1030)) {
            colors.background="#82c4b0"; colors.tile="#4d8977";
        }
    },});
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:600,w:200,h:200,points:[[1900,300],[1900,0]],speed:100,currentPoint:1.1416666666666924,collidable:true,pointOn:{"x":1900,"y":0},pointTo:{"x":1900,"y":300},xv:6.123233995736766e-15,yv:100,inView:true,path:[[3800,600,3.3333333333333335],[3800,0,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:1000,w:250,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[20],{h:150,w:2,y:1750,x:1000,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#000000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:102,w:2,y:1700,x:1148,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#000000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:2,w:108,y:1800,x:1148,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#000000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:25800,y:0,w:200,h:300,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:25600,y:450,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:25800,y:300,w:200,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25700,y:700,w:500,h:100,canJump:true,inView:true,})
let minX1034, minY1034, maxX1034, maxY1034;
    minX1034 = 3900;minY1034 = 1800;maxX1034 = 4150;maxY1034 = 2100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1034) && (player.pos.x) < md(maxX1034) && (player.pos.y) > md(minY1034) && (player.pos.y) < md(maxY1034)) {
            colors.background="#828dc4"; colors.tile="#4d6c89";
        }
    },});
C(1,[1],[1],{type:[1,[1],[1]],x:25600,y:1000,w:500,h:100,angle:12188.25000000016,rotateSpeed:0.025757575757575757,pivotX:25850,pivotY:1050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:212.72509255620167,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26050,y:800,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26050,y:1250,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:26100,y:800,w:100,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:25700,y:1300,w:500,h:100,canJump:true,inView:true,})
let minX1035, minY1035, maxX1035, maxY1035;
    minX1035 = 25500;minY1035 = 1200;maxX1035 = 25800;maxY1035 = 1500;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1035) && (player.pos.x) < md(maxX1035) && (player.pos.y) > md(minY1035) && (player.pos.y) < md(maxY1035)) {
            colors.background="#7351d2"; colors.tile="#333286";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:25200,y:0,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25600,y:1500,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:25900,y:1400,w:400,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25800,y:1700,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:25600,y:1600,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25600,y:1900,w:500,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:26000,y:1700,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26200,y:1800,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25700,y:2200,w:1200,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:25850,y:2000,w:100,h:50,points:[[12925,1000],[12925,1075]],speed:50,currentPoint:0.28333333334176586,collidable:true,pointOn:{"x":12925,"y":1000},pointTo:{"x":12925,"y":1075},xv:3.061616997868383e-15,yv:50,inView:true,path:[[25850,2000,1.6666666666666667],[25850,2150,1.6666666666666667]],boundPlayer:true,})
let minX1036, minY1036, maxX1036, maxY1036;
    minX1036 = 25500;minY1036 = 2100;maxX1036 = 25800;maxY1036 = 2400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1036) && (player.pos.x) < md(maxX1036) && (player.pos.y) > md(minY1036) && (player.pos.y) < md(maxY1036)) {
            colors.background="#9978c9"; colors.tile="#6e4893";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:25900,y:2300,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:25700,y:2600,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:25600,y:2800,w:600,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:26100,y:2300,w:100,h:400,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:25800,y:2300,w:100,h:50,points:[[12900,1150],[12900,1375]],speed:150,currentPoint:0.2833333333333333,collidable:true,pointOn:{"x":12900,"y":1150},pointTo:{"x":12900,"y":1375},xv:9.184850993605149e-15,yv:150,inView:true,path:[[25800,2300,5],[25800,2750,5]],boundPlayer:true,})
let minX1037, minY1037, maxX1037, maxY1037;
    minX1037 = 26000;minY1037 = 2600;maxX1037 = 26300;maxY1037 = 2900;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1037) && (player.pos.x) < md(maxX1037) && (player.pos.y) > md(minY1037) && (player.pos.y) < md(maxY1037)) {
            colors.background="#c48293"; colors.tile="#894d5f";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:26200,y:2300,w:700,h:200,canJump:true,inView:true,})
C(1,[],[17],{type:[1,[],[17]],x:26200,y:2500,w:800,h:700,time:0,maxTime:4,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[1],{type:[1,[],[1]],x:26300,y:2800,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26250,y:2500,w:200,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26550,y:3050,w:200,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26600,y:2500,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26900,y:2800,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26850,y:2500,w:50,h:150,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:26300,y:1600,w:500,h:600,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:26900,y:1600,w:100,h:900,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:26900,y:1500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:26800,y:2000,w:100,h:200,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:26300,y:1305,w:500,h:90,angle:18959.50000000788,rotateSpeed:0.04006734006734007,pivotX:26550,pivotY:1350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.00885795880538,unSim:0,inView:true,initialRotation:330.9056995320024,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26800,y:1300,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26300,y:1500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26300,y:1100,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26200,y:1000,w:100,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26300,y:1000,w:500,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26550,y:1300,w:250,h:100,canCollide:true,inView:true,boundPlayer:true,})
let minX1038, minY1038, maxX1038, maxY1038;
    minX1038 = 26750;minY1038 = 1500;maxX1038 = 27050;maxY1038 = 1800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1038) && (player.pos.x) < md(maxX1038) && (player.pos.y) > md(minY1038) && (player.pos.y) < md(maxY1038)) {
            colors.background="#dc8150"; colors.tile="#a15636";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:26300,y:1250,w:25,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26450,y:1575,w:100,h:25,canCollide:true,inView:true,boundPlayer:true,})
let minX1039, minY1039, maxX1039, maxY1039;
    minX1039 = 26700;minY1039 = 900;maxX1039 = 27100;maxY1039 = 1200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1039) && (player.pos.x) < md(maxX1039) && (player.pos.y) > md(minY1039) && (player.pos.y) < md(maxY1039)) {
            colors.background="#dc5050"; colors.tile="#a13636";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:26300,y:600,w:700,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:26200,y:700,w:100,h:150,points:[[13100,350],[13450,350]],speed:350,currentPoint:1.4249999999718472,collidable:true,pointOn:{"x":13450,"y":350},pointTo:{"x":13100,"y":350},xv:-350,yv:4.2862637970157365e-14,inView:true,path:[[26200,700,11.666666666666666],[26900,700,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:26900,y:850,w:100,h:150,points:[[13450,425],[13100,425]],speed:350,currentPoint:1.4249999999718472,collidable:true,pointOn:{"x":13100,"y":425},pointTo:{"x":13450,"y":425},xv:350,yv:0,inView:true,path:[[26900,850,11.666666666666666],[26200,850,11.666666666666666]],boundPlayer:true,})
let minX1040, minY1040, maxX1040, maxY1040;
    minX1040 = 26100;minY1040 = 500;maxX1040 = 26400;maxY1040 = 800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1040) && (player.pos.x) < md(maxX1040) && (player.pos.y) > md(minY1040) && (player.pos.y) < md(maxY1040)) {
            colors.background="#a34d4d"; colors.tile="#4f2222";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:26000,y:100,w:100,h:600,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26100,y:100,w:210,h:210,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:26390,y:390,w:210,h:210,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:26000,y:0,w:1000,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:26600,y:200,w:400,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:27000,y:200,w:2600,h:3000,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:27000,y:0,w:4000,h:100,canJump:true,inView:true,})
let minX1041, minY1041, maxX1041, maxY1041;
    minX1041 = 26500;minY1041 = 0;maxX1041 = 27000;maxY1041 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1041) && (player.pos.x) < md(maxX1041) && (player.pos.y) > md(minY1041) && (player.pos.y) < md(maxY1041)) {
            colors.background="#8bc482"; colors.tile="#55894d";
        }
    },});
let minX1042, minY1042, maxX1042, maxY1042;
    minX1042 = 26800;minY1042 = 0;maxX1042 = 27300;maxY1042 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1042) && (player.pos.x) < md(maxX1042) && (player.pos.y) > md(minY1042) && (player.pos.y) < md(maxY1042)) {
            colors.background="#82c4b0"; colors.tile="#4d8977";
        }
    },});
let minX1043, minY1043, maxX1043, maxY1043;
    minX1043 = 27100;minY1043 = 0;maxX1043 = 27600;maxY1043 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1043) && (player.pos.x) < md(maxX1043) && (player.pos.y) > md(minY1043) && (player.pos.y) < md(maxY1043)) {
            colors.background="#828dc4"; colors.tile="#4d6c89";
        }
    },});
let minX1044, minY1044, maxX1044, maxY1044;
    minX1044 = 27400;minY1044 = 0;maxX1044 = 27900;maxY1044 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1044) && (player.pos.x) < md(maxX1044) && (player.pos.y) > md(minY1044) && (player.pos.y) < md(maxY1044)) {
            colors.background="#7351d2"; colors.tile="#333286";
        }
    },});
let minX1045, minY1045, maxX1045, maxY1045;
    minX1045 = 27700;minY1045 = 0;maxX1045 = 28200;maxY1045 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1045) && (player.pos.x) < md(maxX1045) && (player.pos.y) > md(minY1045) && (player.pos.y) < md(maxY1045)) {
            colors.background="#9978c9"; colors.tile="#6e4893";
        }
    },});
let minX1046, minY1046, maxX1046, maxY1046;
    minX1046 = 28000;minY1046 = 0;maxX1046 = 28500;maxY1046 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1046) && (player.pos.x) < md(maxX1046) && (player.pos.y) > md(minY1046) && (player.pos.y) < md(maxY1046)) {
            colors.background="#c48293"; colors.tile="#894d5f";
        }
    },});
let minX1047, minY1047, maxX1047, maxY1047;
    minX1047 = 28300;minY1047 = 0;maxX1047 = 28900;maxY1047 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1047) && (player.pos.x) < md(maxX1047) && (player.pos.y) > md(minY1047) && (player.pos.y) < md(maxY1047)) {
            colors.background="#dc8150"; colors.tile="#a15636";
        }
    },});
let minX1048, minY1048, maxX1048, maxY1048;
    minX1048 = 28700;minY1048 = 0;maxX1048 = 29300;maxY1048 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1048) && (player.pos.x) < md(maxX1048) && (player.pos.y) > md(minY1048) && (player.pos.y) < md(maxY1048)) {
            colors.background="#dc5050"; colors.tile="#a13636";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:30100,y:200,w:900,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:29700,y:600,w:200,h:2600,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:29900,y:700,w:1100,h:2500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:30100,y:100,w:900,h:100,canJump:true,inView:true,})
C(1,[],[6],{type:[1,[],[6]],x:30900,y:600,w:100,h:100,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:30000,y:600,w:900,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:26450,y:1100,w:100,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[20],{h:2500,w:100,y:600,x:29600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.95;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:31000,y:0,w:5000,h:3200,canJump:true,inView:true,})
C(1,[],[12],{type:[1,[],[12]],x:29600,y:3100,w:100,h:100,tpx:36200,tpy:200,bgColor:"#55894d",tileColor:"#8bc482",changeColor:false,inView:true,})
C(1,[],[12],{type:[1,[],[12]],x:36000,y:0,w:100,h:100,tpx:29850,tpy:350,bgColor:"#55894d",tileColor:"#8bc482",changeColor:false,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:36000,y:400,w:600,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:36400,y:0,w:500,h:300,canJump:true,inView:true,})
let minX1050, minY1050, maxX1050, maxY1050;
    minX1050 = 29600;minY1050 = 150;maxX1050 = 30100;maxY1050 = 550;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1050) && (player.pos.x) < md(maxX1050) && (player.pos.y) > md(minY1050) && (player.pos.y) < md(maxY1050)) {
            colors.background="#a34d4d"; colors.tile="#4f2222";
        }
    },});
let minX1051, minY1051, maxX1051, maxY1051;
    minX1051 = 36000;minY1051 = 0;maxX1051 = 36400;maxY1051 = 400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1051) && (player.pos.x) < md(maxX1051) && (player.pos.y) > md(minY1051) && (player.pos.y) < md(maxY1051)) {
            colors.background="#4da34e"; colors.tile="#224f2b";
        }
    },});
C(1,[0],[1],{type:[1,[0],[1]],x:36600,y:300,w:100,h:100,points:[[18300,150],[18450,150]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18450,"y":150},pointTo:{"x":18300,"y":150},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[36600,300,5],[36900,300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:36600,y:500,w:100,h:100,points:[[18300,250],[18450,250]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18450,"y":250},pointTo:{"x":18300,"y":250},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[36600,500,5],[36900,500,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:36000,y:600,w:1000,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:36900,y:0,w:100,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:37000,y:300,w:100,h:400,canJump:true,inView:true,})
C(1,[],[9],{type:[1,[],[9]],x:36050,y:50,w:300,h:300,spawn:{"x":18100,"y":100},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[0],[1],{type:[1,[0],[1]],x:37000,y:0,w:100,h:100,points:[[18500,0],[18650,0]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18650,"y":0},pointTo:{"x":18500,"y":0},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37000,0,5],[37300,0,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37250,y:0,w:100,h:100,points:[[18625,0],[18775,0]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18775,"y":0},pointTo:{"x":18625,"y":0},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37250,0,5],[37550,0,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37275,y:100,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:37100,y:300,w:450,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:37650,y:0,w:150,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:37700,y:200,w:100,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:37200,y:600,w:500,h:500,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37100,y:400,w:100,h:100,points:[[18550,200],[18600,200],[18600,250],[18550,250]],speed:150,currentPoint:2.275,collidable:true,pointOn:{"x":18600,"y":250},pointTo:{"x":18550,"y":250},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37100,400,5],[37200,400,5],[37200,500,5],[37100,500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37300,y:400,w:100,h:100,points:[[18650,200],[18700,200],[18700,250],[18650,250]],speed:150,currentPoint:2.275,collidable:true,pointOn:{"x":18700,"y":250},pointTo:{"x":18650,"y":250},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37300,400,5],[37400,400,5],[37400,500,5],[37300,500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:400,w:100,h:100,points:[[18750,200],[18800,200],[18800,250],[18750,250]],speed:150,currentPoint:2.275,collidable:true,pointOn:{"x":18800,"y":250},pointTo:{"x":18750,"y":250},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37500,400,5],[37600,400,5],[37600,500,5],[37500,500,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:36100,y:1100,w:1700,h:100,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:36000,y:700,w:100,h:100,points:[[18000,350],[18550,350]],speed:150,currentPoint:0.9340909090909091,collidable:true,pointOn:{"x":18000,"y":350},pointTo:{"x":18550,"y":350},xv:150,yv:0,inView:true,path:[[36000,700,5],[37100,700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:36000,y:900,w:100,h:200,points:[[18000,450],[18550,450]],speed:150,currentPoint:0.9340909090909091,collidable:true,pointOn:{"x":18000,"y":450},pointTo:{"x":18550,"y":450},xv:150,yv:0,inView:true,path:[[36000,900,5],[37100,900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37100,y:700,w:100,h:200,points:[[18550,350],[18000,350]],speed:150,currentPoint:0.9340909090909091,collidable:true,pointOn:{"x":18550,"y":350},pointTo:{"x":18000,"y":350},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37100,700,5],[36000,700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37100,y:1000,w:100,h:100,points:[[18550,500],[18000,500]],speed:150,currentPoint:0.9340909090909091,collidable:true,pointOn:{"x":18550,"y":500},pointTo:{"x":18000,"y":500},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[37100,1000,5],[36000,1000,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:850,w:100,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:700,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36400,y:700,w:100,h:250,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36400,y:1050,w:100,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:36300,y:1200,w:100,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:36000,y:1500,w:200,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:36300,y:1600,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36000,y:1800,w:700,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:36300,y:1700,w:100,h:100,points:[[18150,850],[18300,850]],speed:150,currentPoint:1.425,alongWith:false,pointOn:{"x":18300,"y":850},pointTo:{"x":18150,"y":850},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[36300,1700,5],[36600,1700,5]],})
C(1,[],[1],{type:[1,[],[1]],x:36600,y:1600,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36500,y:1600,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37100,y:1200,w:100,h:900,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:1600,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37000,y:1600,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:36700,y:1200,w:400,h:400,time:0,maxTime:15,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:900,})
C(1,[0],[1],{type:[1,[0],[1]],x:36700,y:1700,w:100,h:200,points:[[18350,850],[18500,850]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18500,"y":850},pointTo:{"x":18350,"y":850},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[36700,1700,5],[37000,1700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:36700,y:2000,w:100,h:100,points:[[18350,1000],[18500,1000]],speed:150,currentPoint:1.425,collidable:true,pointOn:{"x":18500,"y":1000},pointTo:{"x":18350,"y":1000},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[36700,2000,5],[37000,2000,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36100,y:2100,w:1100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36400,y:1900,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36000,y:1900,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36200,y:2000,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:36000,y:1900,w:600,h:200,time:0,maxTime:3,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[0],{type:[1,[],[0]],x:37800,y:0,w:3200,h:1200,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:36000,y:2400,w:1200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36100,y:2200,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:2200,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37000,y:2300,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36400,y:2300,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:36000,y:2300,w:100,h:100,points:[[18000,1150],[18550,1150]],speed:250,currentPoint:1.556818181782351,collidable:true,pointOn:{"x":18550,"y":1150},pointTo:{"x":18000,"y":1150},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[36000,2300,8.333333333333334],[37100,2300,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37100,y:2200,w:100,h:100,points:[[18550,1100],[18000,1100]],speed:250,currentPoint:1.556818181782351,collidable:true,pointOn:{"x":18000,"y":1100},pointTo:{"x":18550,"y":1100},xv:250,yv:0,inView:true,path:[[37100,2200,8.333333333333334],[36000,2200,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:37200,y:1200,w:300,h:1000,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:37300,y:2200,w:200,h:900,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:36158,y:2802,w:385,h:100,angle:6094.125000002061,rotateSpeed:0.012878787878787878,pivotX:36352,pivotY:2852,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.16985574512923,unSim:0,inView:true,initialRotation:106.3625462781354,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:36650,y:2800,w:100,h:100,angle:6094.125000002061,rotateSpeed:0.012878787878787878,pivotX:36350,pivotY:2850,distToPivot:175,canCollide:true,renderType:"rotating",cullingRadius:210.35533905932738,unSim:0,inView:true,initialRotation:106.3625462781354,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:36650,y:2800,w:100,h:100,angle:6274.125000002061,rotateSpeed:0.012878787878787878,pivotX:36350,pivotY:2850,distToPivot:175,canCollide:true,renderType:"rotating",cullingRadius:210.35533905932738,unSim:0,inView:true,initialRotation:109.5041389317252,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:2500,w:200,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36700,y:3000,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36300,y:2700,w:100,h:500,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36000,y:2500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36600,y:2500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36300,y:2500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36000,y:2800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36200,y:2800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36400,y:2800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36600,y:2800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:36100,y:3000,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:37300,y:3100,w:200,h:100,coins:7,currentCoins:7,active:true,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:7,})
C(1,[],[1],{type:[1,[],[1]],x:36900,y:2500,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37000,y:2800,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37200,y:2600,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37000,y:2900,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36900,y:3100,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37200,y:2600,w:100,h:100,points:[[18600,1300],[18450,1300]],speed:250,currentPoint:1.7083333332019537,collidable:true,pointOn:{"x":18450,"y":1300},pointTo:{"x":18600,"y":1300},xv:250,yv:0,inView:true,path:[[37200,2600,8.333333333333334],[36900,2600,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37200,y:2800,w:100,h:100,points:[[18600,1400],[18450,1400]],speed:250,currentPoint:1.7083333332019537,collidable:true,pointOn:{"x":18450,"y":1400},pointTo:{"x":18600,"y":1400},xv:250,yv:0,inView:true,path:[[37200,2800,8.333333333333334],[36900,2800,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:37500,y:1200,w:900,h:1200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:38300,y:2500,w:100,h:700,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38200,y:2600,w:100,h:100,points:[[19100,1300],[18750,1300]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":19100,"y":1300},pointTo:{"x":18750,"y":1300},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[38200,2600,8.333333333333334],[37500,2600,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38200,y:2800,w:100,h:100,points:[[19100,1400],[18750,1400]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":19100,"y":1400},pointTo:{"x":18750,"y":1400},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[38200,2800,8.333333333333334],[37500,2800,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38200,y:3000,w:100,h:100,points:[[19100,1500],[18750,1500]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":19100,"y":1500},pointTo:{"x":18750,"y":1500},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[38200,3000,8.333333333333334],[37500,3000,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:2900,w:100,h:100,points:[[18750,1450],[19100,1450]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":18750,"y":1450},pointTo:{"x":19100,"y":1450},xv:250,yv:0,inView:true,path:[[37500,2900,8.333333333333334],[38200,2900,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:3100,w:100,h:100,points:[[18750,1550],[19100,1550]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":18750,"y":1550},pointTo:{"x":19100,"y":1550},xv:250,yv:0,inView:true,path:[[37500,3100,8.333333333333334],[38200,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:2700,w:100,h:100,points:[[18750,1350],[19100,1350]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":18750,"y":1350},pointTo:{"x":19100,"y":1350},xv:250,yv:0,inView:true,path:[[37500,2700,8.333333333333334],[38200,2700,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:2400,w:100,h:100,points:[[18750,1200],[18750,1550]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":18750,"y":1200},pointTo:{"x":18750,"y":1550},xv:1.5308084989341916e-14,yv:250,inView:true,path:[[37500,2400,8.333333333333334],[37500,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37700,y:2400,w:100,h:100,points:[[18850,1200],[18850,1550]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":18850,"y":1200},pointTo:{"x":18850,"y":1550},xv:1.5308084989341916e-14,yv:250,inView:true,path:[[37700,2400,8.333333333333334],[37700,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37900,y:2400,w:100,h:100,points:[[18950,1200],[18950,1550]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":18950,"y":1200},pointTo:{"x":18950,"y":1550},xv:1.5308084989341916e-14,yv:250,inView:true,path:[[37900,2400,8.333333333333334],[37900,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38000,y:3100,w:100,h:100,points:[[19000,1550],[19000,1200]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":19000,"y":1550},pointTo:{"x":19000,"y":1200},xv:1.5308084989341916e-14,yv:-250,inView:true,path:[[38000,3100,8.333333333333334],[38000,2400,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37800,y:3100,w:100,h:100,points:[[18900,1550],[18900,1200]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":18900,"y":1550},pointTo:{"x":18900,"y":1200},xv:1.5308084989341916e-14,yv:-250,inView:true,path:[[37800,3100,8.333333333333334],[37800,2400,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37600,y:3100,w:100,h:100,points:[[18800,1550],[18800,1200]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":18800,"y":1550},pointTo:{"x":18800,"y":1200},xv:1.5308084989341916e-14,yv:-250,inView:true,path:[[37600,3100,8.333333333333334],[37600,2400,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38200,y:3100,w:100,h:100,points:[[19100,1550],[19100,1200]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":19100,"y":1550},pointTo:{"x":19100,"y":1200},xv:1.5308084989341916e-14,yv:-250,inView:true,path:[[38200,3100,8.333333333333334],[38200,2400,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38100,y:2400,w:100,h:100,points:[[19050,1200],[19050,1550]],speed:250,currentPoint:0.732142857139338,collidable:true,pointOn:{"x":19050,"y":1200},pointTo:{"x":19050,"y":1550},xv:1.5308084989341916e-14,yv:250,inView:true,path:[[38100,2400,8.333333333333334],[38100,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:37500,y:2500,w:100,h:100,points:[[18750,1250],[19100,1250]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":18750,"y":1250},pointTo:{"x":19100,"y":1250},xv:250,yv:0,inView:true,path:[[37500,2500,8.333333333333334],[38200,2500,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:38200,y:2400,w:100,h:100,points:[[19100,1200],[18750,1200]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":19100,"y":1200},pointTo:{"x":18750,"y":1200},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[38200,2400,8.333333333333334],[37500,2400,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:38400,y:2500,w:500,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:38900,y:1300,w:100,h:1900,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:38400,y:1300,w:500,h:1200,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[13],{type:[1,[],[13]],x:38400,y:1200,w:600,h:100,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[9],{type:[1,[],[9]],x:39000,y:1200,w:300,h:300,spawn:{"x":19575,"y":675},collected:false,inView:true,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:39000,y:1500,w:400,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:39300,y:1200,w:100,h:200,canJump:true,inView:true,})
let minX1052, minY1052, maxX1052, maxY1052;
    minX1052 = 38950;minY1052 = 1150;maxX1052 = 39350;maxY1052 = 1550;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX1052) && (player.pos.x) < md(maxX1052) && (player.pos.y) > md(minY1052) && (player.pos.y) < md(maxY1052)) {
            colors.background="#cccccc"; colors.tile="#787878";
        }
    },});
C(1,[],[13],{type:[1,[],[13]],x:39400,y:1200,w:300,h:400,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[1],{type:[1,[],[1]],x:39400,y:1200,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39600,y:1300,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39400,y:1500,w:200,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40000,y:1200,w:200,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40400,y:1400,w:100,h:100,points:[[20200,700],[19950,700]],speed:250,currentPoint:1.4249999999211722,collidable:true,pointOn:{"x":19950,"y":700},pointTo:{"x":20200,"y":700},xv:250,yv:0,inView:true,path:[[40400,1400,8.333333333333334],[39900,1400,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40200,y:1400,w:100,h:100,points:[[20100,700],[19850,700]],speed:250,currentPoint:1.4249999999211722,collidable:true,pointOn:{"x":19850,"y":700},pointTo:{"x":20100,"y":700},xv:250,yv:0,inView:true,path:[[40200,1400,8.333333333333334],[39700,1400,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39700,y:1500,w:800,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40600,y:1200,w:400,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:40600,y:1600,w:400,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:39100,y:2100,w:1900,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:40200,y:1800,w:100,h:104,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40200,y:1996,w:100,h:104,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:39900,y:1800,w:100,h:200,points:[[19950,900],[19850,900]],speed:250,currentPoint:0.5624999998029306,collidable:true,pointOn:{"x":19950,"y":900},pointTo:{"x":19850,"y":900},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[39900,1800,8.333333333333334],[39700,1800,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:39700,y:1900,w:100,h:200,points:[[19850,950],[19750,950]],speed:250,currentPoint:0.5624999998029306,collidable:true,pointOn:{"x":19850,"y":950},pointTo:{"x":19750,"y":950},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[39700,1900,8.333333333333334],[39500,1900,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:39500,y:1800,w:100,h:200,points:[[19750,900],[19650,900]],speed:250,currentPoint:0.5624999998029306,collidable:true,pointOn:{"x":19750,"y":900},pointTo:{"x":19650,"y":900},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[39500,1800,8.333333333333334],[39300,1800,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39600,y:1800,w:100,h:8,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39100,y:2200,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39000,y:2400,w:300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39000,y:2350,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39250,y:2350,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39200,y:2200,w:200,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39400,y:2200,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39500,y:2200,w:100,h:900,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39000,y:2700,w:500,h:100,angle:6094.125000002061,rotateSpeed:0.012878787878787878,pivotX:39250,pivotY:2750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:106.3625462781354,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39000,y:2700,w:500,h:100,angle:12188.250000004122,rotateSpeed:0.025757575757575757,pivotX:39250,pivotY:2750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:212.7250925562708,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39000,y:2700,w:500,h:100,angle:18282.375000006185,rotateSpeed:0.03863636363636364,pivotX:39250,pivotY:2750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:319.0876388344062,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39000,y:2700,w:500,h:100,angle:24376.500000008244,rotateSpeed:0.051515151515151514,pivotX:39250,pivotY:2750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:425.4501851125416,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39100,y:3000,w:400,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40300,y:3100,w:100,h:100,points:[[20150,1550],[19800,1550]],speed:250,currentPoint:0.7321428570865516,collidable:true,pointOn:{"x":20150,"y":1550},pointTo:{"x":19800,"y":1550},xv:-250,yv:3.061616997868383e-14,inView:true,path:[[40300,3100,8.333333333333334],[39600,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40100,y:3100,w:100,h:100,points:[[20050,1550],[19800,1550]],speed:250,currentPoint:1.4249999999211722,collidable:true,pointOn:{"x":19800,"y":1550},pointTo:{"x":20050,"y":1550},xv:250,yv:0,inView:true,path:[[40100,3100,8.333333333333334],[39600,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:39900,y:3100,w:100,h:100,points:[[19950,1550],[19800,1550]],speed:250,currentPoint:1.7083333332019537,collidable:true,pointOn:{"x":19800,"y":1550},pointTo:{"x":19950,"y":1550},xv:250,yv:0,inView:true,path:[[39900,3100,8.333333333333334],[39600,3100,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:39700,y:3100,w:100,h:100,points:[[19850,1550],[19800,1550]],speed:250,currentPoint:1.1249999996058613,collidable:true,pointOn:{"x":19800,"y":1550},pointTo:{"x":19850,"y":1550},xv:250,yv:0,inView:true,path:[[39700,3100,8.333333333333334],[39600,3100,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39600,y:3000,w:800,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40600,y:2900,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:40400,y:3000,w:200,h:200,time:0,maxTime:0.01,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:0.6,})
C(1,[],[1],{type:[1,[],[1]],x:40300,y:2800,w:400,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2600,w:700,h:100,angle:6094.125000002061,rotateSpeed:0.012878787878787878,pivotX:39950,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:106.3625462781354,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39600,y:2200,w:700,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40300,y:2200,w:100,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2600,w:700,h:100,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39950,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39800,y:2400,w:300,h:100,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39950,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40000,y:2600,w:300,h:100,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40150,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39800,y:2800,w:300,h:100,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39950,pivotY:2850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2600,w:300,h:100,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39750,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2600,w:700,h:100,angle:-609412.5000002062,rotateSpeed:-1.2878787878787878,pivotX:39950,pivotY:2650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:-10636.254627813541,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40300,y:2500,w:100,h:300,canCollide:true,inView:true,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2425,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39750,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40000,y:2425,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40150,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40000,y:2825,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40150,pivotY:2850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:39600,y:2825,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:39750,pivotY:2850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40600,y:2200,w:100,h:200,points:[[20300,1100],[20200,1100]],speed:696969,currentPoint:0.26825000011824157,collidable:true,pointOn:{"x":20300,"y":1100},pointTo:{"x":20200,"y":1100},xv:-696969,yv:8.535408549549316e-11,inView:true,path:[[40600,2200,23232.3],[40400,2200,23232.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40400,y:2400,w:100,h:200,points:[[20200,1200],[20300,1200]],speed:696969,currentPoint:0.26825000011824157,collidable:true,pointOn:{"x":20200,"y":1200},pointTo:{"x":20300,"y":1200},xv:696969,yv:0,inView:true,path:[[40400,2400,23232.3],[40600,2400,23232.3]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40400,y:2600,w:300,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:40700,y:2300,w:100,h:900,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40900,y:2200,w:100,h:200,points:[[20450,1100],[20450,1500]],speed:696969,currentPoint:1.5670624999894744,collidable:true,pointOn:{"x":20450,"y":1500},pointTo:{"x":20450,"y":1100},xv:4.267704274774658e-11,yv:-696969,inView:true,path:[[40900,2200,23232.3],[40900,3000,23232.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40800,y:3000,w:100,h:200,points:[[20400,1500],[20400,1100]],speed:696969,currentPoint:1.5670624999896425,collidable:true,pointOn:{"x":20400,"y":1100},pointTo:{"x":20400,"y":1500},xv:4.267704274774658e-11,yv:696969,inView:true,path:[[40800,3000,23232.3],[40800,2200,23232.3]],boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:2425,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:2575,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:2600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:2725,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:2750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:2875,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:2900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:3025,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:3050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40750,y:2275,w:300,h:50,angle:1218825.0000004123,rotateSpeed:2.5757575757575757,pivotX:40900,pivotY:2300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:21272.509255627083,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40900,y:2350,w:100,h:200,points:[[20450,1175],[20400,1175]],speed:696969,currentPoint:0.5365000002364831,collidable:true,pointOn:{"x":20450,"y":1175},pointTo:{"x":20400,"y":1175},xv:-696969,yv:8.535408549549316e-11,inView:true,path:[[40900,2350,23232.3],[40800,2350,23232.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40800,y:2550,w:100,h:200,points:[[20400,1275],[20450,1275]],speed:696969,currentPoint:0.5365000002364831,collidable:true,pointOn:{"x":20400,"y":1275},pointTo:{"x":20450,"y":1275},xv:696969,yv:0,inView:true,path:[[40800,2550,23232.3],[40900,2550,23232.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40900,y:2750,w:100,h:200,points:[[20450,1375],[20400,1375]],speed:696969,currentPoint:0.5365000002364831,collidable:true,pointOn:{"x":20450,"y":1375},pointTo:{"x":20400,"y":1375},xv:-696969,yv:8.535408549549316e-11,inView:true,path:[[40900,2750,23232.3],[40800,2750,23232.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40800,y:2950,w:100,h:200,points:[[20400,1475],[20450,1475]],speed:696969,currentPoint:0.5365000002364831,collidable:true,pointOn:{"x":20400,"y":1475},pointTo:{"x":20450,"y":1475},xv:696969,yv:0,inView:true,path:[[40800,2950,23232.3],[40900,2950,23232.3]],boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40350,y:2650,w:700,h:100,angle:-609412.5000002062,rotateSpeed:-1.2878787878787878,pivotX:40700,pivotY:2700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:-10636.254627813541,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:40800,y:2600,w:200,h:200,time:0,maxTime:0.01,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:0.6,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:2600,w:100,h:100,points:[[20475,1300],[20400,1300]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1300},pointTo:{"x":20475,"y":1300},xv:250,yv:0,inView:true,path:[[40950,2600,8.333333333333334],[40800,2600,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:2750,w:100,h:100,points:[[20475,1375],[20400,1375]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1375},pointTo:{"x":20475,"y":1375},xv:250,yv:0,inView:true,path:[[40950,2750,8.333333333333334],[40800,2750,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:2900,w:100,h:100,points:[[20475,1450],[20400,1450]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1450},pointTo:{"x":20475,"y":1450},xv:250,yv:0,inView:true,path:[[40950,2900,8.333333333333334],[40800,2900,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:2450,w:100,h:100,points:[[20475,1225],[20400,1225]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1225},pointTo:{"x":20475,"y":1225},xv:250,yv:0,inView:true,path:[[40950,2450,8.333333333333334],[40800,2450,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:2300,w:100,h:100,points:[[20475,1150],[20400,1150]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1150},pointTo:{"x":20475,"y":1150},xv:250,yv:0,inView:true,path:[[40950,2300,8.333333333333334],[40800,2300,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:40950,y:3100,w:100,h:100,points:[[20475,1550],[20400,1550]],speed:250,currentPoint:1.4166666664039076,collidable:true,pointOn:{"x":20400,"y":1550},pointTo:{"x":20475,"y":1550},xv:250,yv:0,inView:true,path:[[40950,3100,8.333333333333334],[40800,3100,8.333333333333334]],boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:40650,y:2650,w:500,h:100,angle:24376.500000008244,rotateSpeed:0.051515151515151514,pivotX:40900,pivotY:2700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:0,inView:true,initialRotation:425.4501851125416,boundPlayer:true,})
C(1,[],[6],{type:[1,[],[6]],x:40800,y:3150,w:200,h:50,inView:true,})
C(1,[],[17],{x:38400,y:1600,w:500,h:500,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,
        sf:(e)=>{
            if(e.timeTrapTime <= 0){
                players[selfId].pos.x = 38650;
                players[selfId].pos.y = 1850;
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

            
        }
    });C(1,[],[1],{type:[1,[],[1]],x:7300,y:1650,w:50,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7525,y:825,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7875,y:0,w:125,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7700,y:1500,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:1500,w:100,h:100,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:9075,y:1400,w:25,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8700,y:1600,w:25,h:400,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:9375,y:2000,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6675,1200],[6725,1200],[6700,1225]],most:{"left":3337.5,"right":3362.5,"top":600,"bottom":612.5},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6700,1475],[6725,1500],[6675,1500]],most:{"left":3337.5,"right":3362.5,"top":737.5,"bottom":750},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5900,y:300,w:100,h:100,points:[[2950,150],[2950,200]],speed:50,currentPoint:1.4249999999969207,collidable:true,pointOn:{"x":2950,"y":200},pointTo:{"x":2950,"y":150},xv:3.061616997868383e-15,yv:-50,inView:true,path:[[5900,300,1.6666666666666667],[5900,400,1.6666666666666667]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12375,y:2200,w:25,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11800,y:1800,w:25,h:200,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19850,y:700,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:850,w:250,h:150,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:2200,w:200,h:200,points:[[9550,1100],[9550,1400]],speed:300,currentPoint:1.425,collidable:true,pointOn:{"x":9550,"y":1400},pointTo:{"x":9550,"y":1100},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[19100,2200,10],[19100,2800,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19700,y:2200,w:200,h:200,points:[[9850,1100],[9850,1400]],speed:300,currentPoint:1.425,collidable:true,pointOn:{"x":9850,"y":1400},pointTo:{"x":9850,"y":1100},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[19700,2200,10],[19700,2800,10]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19900,y:2000,w:200,h:1000,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19700,y:1600,w:200,h:200,points:[[9850,800],[9850,1100]],speed:300,currentPoint:1.425,collidable:true,pointOn:{"x":9850,"y":1100},pointTo:{"x":9850,"y":800},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[19700,1600,10],[19700,2200,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:1600,w:200,h:200,points:[[9550,800],[9550,1100]],speed:300,currentPoint:1.425,collidable:true,pointOn:{"x":9550,"y":1100},pointTo:{"x":9550,"y":800},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[19100,1600,10],[19100,2200,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:2800,w:200,h:200,points:[[9550,1400],[9850,1400]],speed:300,currentPoint:0.425,collidable:true,pointOn:{"x":9550,"y":1400},pointTo:{"x":9850,"y":1400},xv:300,yv:0,inView:true,path:[[19100,2800,10],[19700,2800,10]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:2400,w:200,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:2400,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:1800,w:200,h:400,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:1800,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:1400,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:1200,w:600,h:200,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19100,y:1000,w:200,h:200,points:[[9550,500],[9950,500],[9950,700],[9550,700]],speed:300,currentPoint:3.1375,collidable:true,pointOn:{"x":9550,"y":700},pointTo:{"x":9550,"y":500},xv:1.8369701987210297e-14,yv:-300,inView:true,path:[[19100,1000,10],[19900,1000,10],[19900,1400,10],[19100,1400,10]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19900,y:1600,w:200,h:200,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:2600,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19475,y:2000,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:1400,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20075,y:1800,w:25,h:25,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19850,y:2950,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19650,y:2200,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:2350,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19250,y:2500,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:2650,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:1950,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:1600,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19400,y:1750,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19950,y:1550,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20050,y:1000,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:1000,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19600,y:1150,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19800,y:1000,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19700,y:2000,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19100,y:2250,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[19200,700],[19300,700],[19200,800]],most:{"left":9600,"right":9650,"top":350,"bottom":400},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:20050,y:1400,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19900,y:1250,w:50,h:50,canCollide:true,inView:true,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:23200,y:1325,w:25,h:25,points:[[11600,662.5],[11650,662.5]],speed:150,currentPoint:0.275,pointOn:{"x":11600,"y":662.5},pointTo:{"x":11650,"y":662.5},xv:150,yv:0,inView:true,path:[[23200,1325,5],[23300,1325,5]],})
C(1,[1],[1],{type:[1,[1],[1]],x:21800,y:3025,w:300,h:50,angle:58232.75000002263,rotateSpeed:0.12306397306397308,pivotX:21950,pivotY:3050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:1016.3532199911228,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21850,y:3025,w:300,h:50,angle:58232.75000002263,rotateSpeed:0.12306397306397308,pivotX:22000,pivotY:3050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:1016.3532199911228,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:23650,y:0,w:150,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:23700,y:0,w:100,h:150,canJump:true,inView:true,})
C(0,[],[1],{type:[0,[],[1]],x:6950,y:1800,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6250,y:1800,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:1100,w:100,h:100,points:[[2150,550],[2150,725],[2325,725],[2325,550]],speed:120,currentPoint:0.8628571428571429,collidable:true,pointOn:{"x":2150,"y":550},pointTo:{"x":2150,"y":725},xv:7.34788079488412e-15,yv:120,inView:true,path:[[4300,1100,4],[4300,1450,4],[4650,1450,4],[4650,1100,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:1100,w:100,h:100,points:[[2150,550],[2150,725],[2325,725],[2325,550]],speed:120,currentPoint:1.862857142857143,collidable:true,pointOn:{"x":2150,"y":725},pointTo:{"x":2325,"y":725},xv:120,yv:0,inView:true,path:[[4300,1100,4],[4300,1450,4],[4650,1450,4],[4650,1100,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:1100,w:100,h:100,points:[[2150,550],[2150,725],[2325,725],[2325,550]],speed:120,currentPoint:2.862857142857143,collidable:true,pointOn:{"x":2325,"y":725},pointTo:{"x":2325,"y":550},xv:7.34788079488412e-15,yv:-120,inView:true,path:[[4300,1100,4],[4300,1450,4],[4650,1450,4],[4650,1100,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:1100,w:100,h:100,points:[[2150,550],[2150,725],[2325,725],[2325,550]],speed:120,currentPoint:3.862857142857143,collidable:true,pointOn:{"x":2325,"y":550},pointTo:{"x":2150,"y":550},xv:-120,yv:1.469576158976824e-14,inView:true,path:[[4300,1100,4],[4300,1450,4],[4650,1450,4],[4650,1100,4]],boundPlayer:true,})
C(1,[],[26],{type:[1,[],[26]],x:29600,y:100,w:500,h:500,musicPath:"https://www.youtube.com/watch?v=2ACyqve0L78",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:22700,y:-650,w:100,h:4300,musicPath:"https://www.youtube.com/watch?v=2ACyqve0L78",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:22300,y:-300,w:100,h:3850,musicPath:"https://www.youtube.com/watch?v=yJPewKpHDsQ",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:6050,y:0,w:300,h:100,musicPath:"https://www.youtube.com/watch?v=OHG77tPsw6M",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:16750,y:1600,w:300,h:100,musicPath:"https://www.youtube.com/watch?v=yJPewKpHDsQ",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:24950,y:950,w:100,h:100,musicPath:"https://www.youtube.com/watch?v=f55-fXTHQyQ",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:36000,y:0,w:400,h:400,musicPath:"https://www.youtube.com/watch?v=grd-K33tOSM",volume:1,startTime:0,inView:true,})
C(1,[],[11],{type:[1,[],[11]],x:4000,y:1900,w:450,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4500,y:1600,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7100,y:1750,w:50,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:6800,y:100,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8100,y:425,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:17500,y:200,w:150,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:17500,y:925,w:150,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:17800,y:2600,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:22800,y:1837.5,w:200,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:20300,y:2100,w:100,h:100,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:150,y:350,w:50,h:50,size:30,text:"Peaceful",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2250,y:150,w:50,h:50,size:30,text:"Moderate",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4050,y:2050,w:50,h:50,size:30,text:"Difficult",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:6200,y:150,w:50,h:50,size:30,text:"Hardcore",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8300,y:2050,w:50,h:50,size:30,text:"Exhausting",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10250,y:850,w:50,h:50,size:30,text:"Relentless",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:1800,w:50,h:50,size:30,text:"Welcome to the",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:1850,w:50,h:50,size:30,text:"truly tryhard",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:1900,w:50,h:50,size:30,text:"difficulties...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:2000,w:50,h:50,size:30,text:"good luck...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:1450,w:50,h:50,size:30,text:"AGONIZING",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:20100,y:-50,w:50,h:50,size:30,text:"TERRORIZING",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:20100,y:250,w:50,h:50,size:30,text:"Here we go.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:22550,y:1050,w:50,h:50,size:30,text:"CATACLYSMIC",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:22550,y:1450,w:50,h:50,size:30,text:"Keep fighting.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:25000,y:830,w:50,h:50,size:13,text:"Welcome to the Final Stretch",angle:0,story:false,fontSize:26,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:25000,y:860,w:50,h:50,size:13,text:"(It's on a softlock. Don't die)",angle:0,story:false,fontSize:26,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:25000,y:1300,w:50,h:50,size:25,text:"RIP",angle:0,story:false,fontSize:50,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:26950,y:1520,w:50,h:50,size:10,text:"if u died",angle:0,story:false,fontSize:20,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:26950,y:1540,w:50,h:50,size:10,text:"here,",angle:0,story:false,fontSize:20,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:26950,y:1580,w:50,h:50,size:14,text:"u suck",angle:0,story:false,fontSize:28,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:29850,y:350,w:50,h:50,size:150,text:"GG",angle:0,story:false,fontSize:300,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:29650,y:3250,w:50,h:50,size:50,text:"Turn back.",angle:0,story:false,fontSize:100,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:36200,y:-50,w:50,h:50,size:30,text:"GRASS",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:36200,y:450,w:50,h:50,size:30,text:"Top left to go back.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:36200,y:500,w:50,h:50,size:30,text:"You have no chance.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:39150,y:1150,w:50,h:50,size:30,text:"SNOW",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:39150,y:1550,w:50,h:50,size:30,text:"Have fun!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:39950,y:1150,w:50,h:50,size:10,text:"Low snow - looks possible but it's not due to friction",angle:0,story:false,fontSize:20,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:40250,y:1750,w:50,h:50,size:10,text:"Mid snow - just pixels off being possible",angle:0,story:false,fontSize:20,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:39350,y:2150,w:50,h:50,size:10,text:"High snow - Just no. No.",angle:0,story:false,fontSize:20,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:19450,y:3050,w:50,h:50,size:30,text:"let's not get too confused now...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(0,[],[0],{type:[0,[],[0]],x:29850,y:650,r:50,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:29950,y:650,r:50,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:29850,y:750,r:50,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:29950,y:750,r:50,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:29850,y:600,w:100,h:200,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:29800,y:650,w:200,h:100,toRender:false,})


    mapDimensions.x=20500 * 2;
    mapDimensions.y=1600 * 2;

    spawnPosition.x=150;
    spawnPosition.y=150;
    shared.respawnPlayer();
    colors.background='#55894d'; colors.tile='#8bc482';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=asTqGTrsB8M'
    });
});

// old converter loop:
/*
let alreadyLogged = {};

let str = '';

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
        str += `let minX${counter}, minY${counter}, maxX${counter}, maxY${counter};
        minX${counter} = ${minX};minY${counter} = ${minY};maxX${counter} = ${maxX};maxY${counter} = ${maxY};
        shared.C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
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
        str += `let timer${counter} = ${o.timer}; let state${counter} =${o.state}; let x${counter} = ${o.x}; 
        shared.C(1,[],[1],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},sf:(e)=>{
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
             str += `shared.C(1,[],[20],{h:${o.h},w:${o.w},y:${o.y},x:${o.x},
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
     
         //shared.C(1,[],[0],{h:100,w:1100,y:4300,x:4600,});
         str += `shared.C(${typeString},${paramString})\n`;
     }
*/

// Old type map
/*
let typeMap = {
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
            //shared.C(1,[],[17],{h:200,w:300,y:700,x:300,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});
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
        //shared.C(1,[],[18],{h:200,w:300,y:700,x:300,sizeChangePermanent:false,sizeMult:1.5,});
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
    },//shared.C(3,[],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,hex:colourRgb(100,100,100),});
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
            }//"shared.C(3,[1],[20],{fontSize:80,text:'I am a text :D',y:800,x:450,pivotY:800,pivotX:450,rotateSpeed:0,initialRotation:45,hex:colourRgb(100,100,100),});"
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
            p.platformerForce = params.force / 10000 * 1.5 * 1.8 * 1.6 * 5 / 16.66;
            p.jumpForce = params.jumpHeight / 8.2 * 2.32 / 1.2;
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
    'ship': {
        type: [1,[],[27]],
        customMap: (params) => {
            return {
                changeShipStateTo: params.state,
                initialShipAngle: -Math.PI / 2,
                shipTurnSpeed: Math.PI / 800
            }
        }
    },
    // shared.C(1,[],[10],{h:200,w:300,y:700,x:300,healSpeed:1,regenTime:100,maxStrength:60,});
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
            return {
                x: params.x * 2,
                y: params.y * 2,
                w: params.w * 2,
                h: params.h * 2,
                musicPath: params.musicPath
            };
        }
    }
}

let enemyTypeMap = {
    normal: (params) => {
        const bounds = {
            x: params.bound.x * 2,
            y: params.bound.y * 2,
            w: params.bound.w * 2,
            h: params.bound.h * 2
        };
        counter++;
        return `
        let xv${counter} = ${params.xv/30};
        let yv${counter} = ${params.yv/30};
        shared.C(0,[3],[1],{r:${params.radius*2},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
        let xv${counter} = ${params.xv/42};
        let yv${counter} = ${params.yv/42};
        shared.C(1,[3],[1],{w:${size},h:${size},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
        let xv${c} = ${params.xv/42};
        let yv${c} = ${params.yv/42};
        let shootDirectionIndex${c} = 0;
        let timer${c} = ${shootSpeed};
        shared.C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
            let xv${counter} = Math.cos(dir) * ${projectileParams.speed};
            let yv${counter} = Math.sin(dir) * ${projectileParams.speed};
            shared.C(0,[3],[1],{r:${projectileParams.radius},y:e.pos.y,x:e.pos.x,sf:(e)=>{
            e.pos.y += yv${counter};
            e.pos.x += xv${counter};
            if ((e.pos.x - e.sat.r) < ${bounds.x} || e.pos.x + e.sat.r > ${bounds.x + bounds.w} || (e.pos.y - e.sat.r) < ${bounds.y} || e.pos.y + e.sat.r > ${bounds.y + bounds.h}) {
                shared.tickFns.push(()=>{
                    for(let i = 0; i < obstacles.length; i++){
                        if(obstacles[i] === e) {obstacles.splice(i,1); break;}
                    }
                    /*for(let key in shared.idToObs){
                        if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
                    }
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
        let xv${counter} = ${params.xv/42*4};
        let yv${counter} = ${params.yv/42*4};
        let switchTime${counter} = ${maxSwitchTime*Math.random()*2};
        let switchState${counter} = true;
        let pos${counter} = {
            x: ${params.x*2}, y: ${params.y*2} 
        }
        shared.C(0,[3],[1],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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
                    e.pos.x = pos${counter}.x;
                    e.pos.y = pos${counter}.y;
                }
            }
        }});
        shared.C(0,[3],[0],{r:${params.radius},y:${params.y*2},x:${params.x*2},sf:(e)=>{
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

*/