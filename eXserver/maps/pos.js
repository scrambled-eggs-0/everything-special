window.loadMap((shared)=>{
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, generateTopLeftCoordinates, input} = shared;
    let selfId = shared.selfId;
    let counter = 6000;

    let xv6001 = 0.36684863787511873;
    let yv6001 = 2.4729379444072532;
    C(0,[3],[1],{r:36,y:16817.994815772778,x:4064.293598405453,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6001;
    e.pos.x += xv6001;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6001 = xv6001 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6001 = yv6001 * -1;
    }
    selfId = shared.selfId;
    }});

    

    let xv6002 = -2.2190099396755314;
    let yv6002 = -1.1515185137987112;
    C(0,[3],[1],{r:36,y:16663.57525995793,x:3375.58652892799,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6002;
    e.pos.x += xv6002;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6002 = xv6002 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6002 = yv6002 * -1;
    }
    }});

    

    let xv6003 = -2.2504390332830053;
    let yv6003 = 1.088817779739224;
    C(0,[3],[1],{r:36,y:17181.145031401335,x:3958.9350230740674,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6003;
    e.pos.x += xv6003;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6003 = xv6003 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6003 = yv6003 * -1;
    }
    }});

    

    let xv6004 = -2.4551511876001246;
    let yv6004 = 0.4714155767745661;
    C(0,[3],[1],{r:36,y:17733.769505362317,x:3232.6376242352344,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6004;
    e.pos.x += xv6004;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6004 = xv6004 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6004 = yv6004 * -1;
    }
    }});

    

    let xv6005 = -2.44126099335308;
    let yv6005 = -0.5387436889029278;
    C(0,[3],[1],{r:36,y:17284.265934042865,x:2964.6933729837037,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6005;
    e.pos.x += xv6005;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6005 = xv6005 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6005 = yv6005 * -1;
    }
    }});

    

    let xv6006 = -1.3223717580922096;
    let yv6006 = 2.1216344957131796;
    C(0,[3],[1],{r:36,y:16804.001905365643,x:3998.288979802417,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6006;
    e.pos.x += xv6006;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6006 = xv6006 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6006 = yv6006 * -1;
    }
    }});

    

    let xv6007 = -1.7508110200621418;
    let yv6007 = 1.784561787114406;
    C(0,[3],[1],{r:36,y:16932.115144492796,x:3590.8799690307605,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6007;
    e.pos.x += xv6007;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6007 = xv6007 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6007 = yv6007 * -1;
    }
    }});

    

    let xv6008 = -1.4054573908763213;
    let yv6008 = 2.067532230082792;
    C(0,[3],[1],{r:36,y:17325.994770052028,x:3619.992306150336,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6008;
    e.pos.x += xv6008;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6008 = xv6008 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6008 = yv6008 * -1;
    }
    }});

    

    let xv6009 = 0.34704836421678337;
    let yv6009 = 2.4757943034295993;
    C(0,[3],[1],{r:36,y:16810.417556907254,x:3259.363157904085,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6009;
    e.pos.x += xv6009;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6009 = xv6009 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6009 = yv6009 * -1;
    }
    }});

    

    let xv6010 = 0.4476459159021627;
    let yv6010 = 2.459596132290038;
    C(0,[3],[1],{r:48,y:16426.02022757912,x:2962.251595553538,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6010;
    e.pos.x += xv6010;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6010 = xv6010 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6010 = yv6010 * -1;
    }
    }});

    

    let xv6011 = -0.06510605729957242;
    let yv6011 = -2.4991520964725025;
    C(0,[3],[1],{r:48,y:17194.12548972157,x:3252.3643035196,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6011;
    e.pos.x += xv6011;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6011 = xv6011 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6011 = yv6011 * -1;
    }
    }});

    

    let xv6012 = -0.13183889925378475;
    let yv6012 = -2.4965212806310206;
    C(0,[3],[1],{r:48,y:16972.514850466076,x:3748.487842910403,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6012;
    e.pos.x += xv6012;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6012 = xv6012 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6012 = yv6012 * -1;
    }
    }});

    

    let xv6013 = -2.350204675293386;
    let yv6013 = 0.8523719752720107;
    C(0,[3],[1],{r:48,y:17434.151052339992,x:3718.1697080565245,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6013;
    e.pos.x += xv6013;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6013 = xv6013 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6013 = yv6013 * -1;
    }
    }});

    

    let xv6014 = -1.6195909677521874;
    let yv6014 = -1.9044487646496384;
    C(0,[3],[1],{r:48,y:17056.14158283238,x:3644.300536772611,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6014;
    e.pos.x += xv6014;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6014 = xv6014 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6014 = yv6014 * -1;
    }
    }});

    

    let xv6015 = 2.2730293773591788;
    let yv6015 = 1.0408349771515868;
    C(0,[3],[1],{r:48,y:17402.043576618686,x:3400.4083478491775,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6015;
    e.pos.x += xv6015;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6015 = xv6015 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16300 || e.pos.y + e.sat.r > 17800) {
        yv6015 = yv6015 * -1;
    }
    }});

    

    let xv6016 = -0.0716782037313088;
    let yv6016 = 4.999486197111644;
    C(0,[3],[1],{r:24,y:16613.923957172796,x:2961.391625847722,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6016;
    e.pos.x += xv6016;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6016 = xv6016 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6016 = yv6016 * -1;
    }
    }});

    

    let xv6017 = -3.720651653341646;
    let yv6017 = -3.3401723420335783;
    C(0,[3],[1],{r:24,y:17027.65449337926,x:3263.343555305455,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6017;
    e.pos.x += xv6017;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6017 = xv6017 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6017 = yv6017 * -1;
    }
    }});

    

    let xv6018 = 1.305054876689053;
    let yv6018 = 4.826679165723585;
    C(0,[3],[1],{r:24,y:16930.348516526923,x:3385.1481217499277,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6018;
    e.pos.x += xv6018;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6018 = xv6018 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6018 = yv6018 * -1;
    }
    }});

    

    let xv6019 = 3.601645271234264;
    let yv6019 = -3.4681625308217416;
    C(0,[3],[1],{r:24,y:16834.71194543832,x:3623.043500142736,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6019;
    e.pos.x += xv6019;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6019 = xv6019 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6019 = yv6019 * -1;
    }
    }});

    

    let xv6020 = 4.863602618574833;
    let yv6020 = -1.159900671864629;
    C(0,[3],[1],{r:24,y:17412.334700563544,x:3465.813187549098,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6020;
    e.pos.x += xv6020;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6020 = xv6020 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6020 = yv6020 * -1;
    }
    }});

    

    let xv6021 = 4.697172619655543;
    let yv6021 = -1.7136421391755872;
    C(0,[3],[1],{r:24,y:17488.38096340181,x:3133.1815477089767,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6021;
    e.pos.x += xv6021;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6021 = xv6021 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6021 = yv6021 * -1;
    }
    }});

    

    let xv6022 = 0.06697870944252338;
    let yv6022 = 4.999551365120815;
    C(0,[3],[1],{r:24,y:17751.93360203819,x:3911.9128489974282,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6022;
    e.pos.x += xv6022;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6022 = xv6022 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6022 = yv6022 * -1;
    }
    }});

    

    let xv6023 = 2.7590996960797876;
    let yv6023 = 4.169816406880814;
    C(0,[3],[1],{r:24,y:16425.13282821828,x:3216.3467550198147,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6023;
    e.pos.x += xv6023;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6023 = xv6023 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6023 = yv6023 * -1;
    }
    }});

    

    let xv6024 = 3.141990987418517;
    let yv6024 = -3.8894591699850527;
    C(0,[3],[1],{r:24,y:17376.360042842018,x:3823.014666137933,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6024;
    e.pos.x += xv6024;
    if ((e.pos.x - e.sat.r) < 2800 || e.pos.x + e.sat.r > 4300) {
        xv6024 = xv6024 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16350 || e.pos.y + e.sat.r > 17800) {
        yv6024 = yv6024 * -1;
    }
    }});

    

    let xv6025 = -0.3796145795935375;
    let yv6025 = 4.985568450132845;
    C(0,[3],[1],{r:24,y:1393.8641306196296,x:663.817042220142,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6025;
    e.pos.x += xv6025;
    if ((e.pos.x - e.sat.r) < 200 || e.pos.x + e.sat.r > 800) {
        xv6025 = xv6025 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1200 || e.pos.y + e.sat.r > 1800) {
        yv6025 = yv6025 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    let xv6026 = 1.2855087455050251;
    let yv6026 = 4.831921694857036;
    C(0,[3],[1],{r:24,y:1305.124410838851,x:438.25529433474185,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6026;
    e.pos.x += xv6026;
    if ((e.pos.x - e.sat.r) < 200 || e.pos.x + e.sat.r > 800) {
        xv6026 = xv6026 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1200 || e.pos.y + e.sat.r > 1800) {
        yv6026 = yv6026 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    let xv6027 = -0.9527369255374226;
    let yv6027 = 4.908389995784514;
    C(0,[3],[1],{r:24,y:1356.4417193761128,x:306.99493502045516,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6027;
    e.pos.x += xv6027;
    if ((e.pos.x - e.sat.r) < 200 || e.pos.x + e.sat.r > 800) {
        xv6027 = xv6027 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1200 || e.pos.y + e.sat.r > 1800) {
        yv6027 = yv6027 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    let xv6028 = -3.958728710402304;
    let yv6028 = -3.054253918297644;
    C(0,[3],[1],{r:24,y:1461.9704200919714,x:528.108150860462,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6028;
    e.pos.x += xv6028;
    if ((e.pos.x - e.sat.r) < 200 || e.pos.x + e.sat.r > 800) {
        xv6028 = xv6028 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1200 || e.pos.y + e.sat.r > 1800) {
        yv6028 = yv6028 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    C(1,[],[18],{type:[1,[],[18]],x:1500,y:8000,w:300,h:650,size:5,inView:false,sizeChangePermanent:false,sizeMult:0.20408163265306123,})
C(1,[],[18],{type:[1,[],[18]],x:0,y:18050,w:4400,h:200,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:1900,w:1500,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:2300,y:600,w:700,h:600,force:1200,dir:{"x":0,"y":-1200},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8499399759903962,})
C(1,[0],[0],{type:[1,[0],[0]],x:1600,y:11600,w:800,h:400,points:[[800,5800],[800,5650]],speed:150,currentPoint:0.4666666666666667,alongWith:false,pointOn:{"x":800,"y":5800},pointTo:{"x":800,"y":5650},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,11600,5],[1600,11300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:1600,y:11100,w:800,h:400,points:[[800,5550],[800,5400]],speed:150,currentPoint:0.4666666666666667,alongWith:false,pointOn:{"x":800,"y":5550},pointTo:{"x":800,"y":5400},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,11100,5],[1600,10800,5]],})
C(1,[],[1],{type:[1,[],[1]],x:1850,y:11100,w:300,h:600,canCollide:false,inView:false,boundPlayer:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5100,8000],[5100,8200],[4900,8200]],most:{"left":2450,"right":2550,"top":4000,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2850,y:5000,w:50,h:500,canCollide:false,inView:false,boundPlayer:false,})

    C(1,[],[5],{h:100,w:100,y:2000,x:1100,
        cr:(e)=>{
            ctx.globalAlpha = 0.8;
            if (morphTriggered3 === true) {
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
            morphTriggered3 = true;    
        }
    });
let minX6028, minY6028, maxX6028, maxY6028;
    minX6028 = 100;minY6028 = 1750;maxX6028 = 400;maxY6028 = 2050;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6028) && (player.pos.x) < md(maxX6028) && (player.pos.y) > md(minY6028) && (player.pos.y) < md(maxY6028)) {
            colors.background="#48497a"; colors.tile="#1b2550";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:4000,y:12000,w:430,h:160,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:16800,w:3200,h:3200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[20],{h:400,w:2700,y:19550,x:5150,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:2700,w:400,y:17250,x:4750,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:400,w:2700,y:16850,x:4750,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:2700,w:400,y:16850,x:7450,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:300,w:1600,y:19050,x:5350,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:1600,w:300,y:17450,x:5350,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:300,w:1600,y:17450,x:5650,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:1600,w:300,y:17750,x:6950,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:200,w:700,y:18650,x:6050,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:700,w:200,y:17950,x:6550,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:700,w:200,y:18150,x:5850,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:200,w:700,y:17950,x:5850,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.25;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:200,y:18100,w:4100,h:100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:2550,y:17025,w:2000,h:50,angle:45,rotateSpeed:0,pivotX:3550,pivotY:17050,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:500.15622559356393,unSim:2.449999999999994,inView:false,initialRotation:0.7853981633974483,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:2850,y:16350,w:150,h:150,points:[[1425,8175],[2050,8800]],speed:150,currentPoint:0.4186072144623453,pointOn:{"x":1425,"y":8175},pointTo:{"x":2050,"y":8800},xv:106.06601717798213,yv:106.06601717798212,inView:false,path:[[2850,16350,5],[4100,17600,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2850,y:16350,w:150,h:150,points:[[1425,8175],[2050,8800]],speed:150,currentPoint:1.4186072144623456,pointOn:{"x":2050,"y":8800},pointTo:{"x":1425,"y":8175},xv:-106.06601717798212,yv:-106.06601717798213,inView:false,path:[[2850,16350,5],[4100,17600,5]],})
C(0,[],[1],{type:[0,[],[1]],x:7750,y:13750,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7750,y:13750,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:200,y:14250,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:200,y:14250,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:400,y:13400,w:7200,h:1100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[19],{type:[1,[],[19]],x:400,y:13400,w:7200,h:1100,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[17],{type:[1,[],[17]],x:450,y:13400,w:7100,h:1100,time:0,maxTime:5.65,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:339,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:11450,w:150,h:150,canCollide:false,inView:false,boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:5275,y:11525,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:5310,y:11490,r:25,renderType:"circleR",radius:12.5,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:2500,y:12000,w:300,h:300,spawn:{"x":1325,"y":6075},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:0,w:200,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:3.061616997868383e-15,y:200,w:200,h:200,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:200,y:0,w:200,h:100,points:[[100,0],[100,250]],speed:225,currentPoint:0.22,collidable:false,pointOn:{"x":100,"y":0},pointTo:{"x":100,"y":250},xv:1.3777276490407723e-14,yv:225,inView:true,path:[[200,0,7.5],[200,500,7.5]],boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:600,w:400,h:200,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:400,w:200,h:400,canCollide:false,inView:true,boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:200,y:500,r:50,renderType:"circleR",radius:25,inView:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:-325,y:570,w:450,h:60,angle:296,rotateSpeed:0.03434343434343435,pivotX:-100,pivotY:600,distToPivot:0,canCollide:true,cullingRadius:113.49559462816167,unSim:0,inView:true,initialRotation:5.1661745859032155,})
C(1,[],[0],{type:[1,[],[0]],x:2.7554552980815453e-14,y:900,w:200,h:1400,canJump:true,sat:{"pos":{"x":1.3777276490407726e-14,"y":450},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":700},{"x":0,"y":700}],"edges":[{"x":100,"y":0},{"x":0,"y":700},{"x":-100,"y":0},{"x":0,"y":-700}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":700},{"x":0,"y":700}]},inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:200,y:800,w:100,h:100,points:[[100,400],[300,400]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":300,"y":400},pointTo:{"x":100,"y":400},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[200,800,5],[600,800,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:200,y:1000,w:100,h:100,points:[[100,500],[300,500]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":300,"y":500},pointTo:{"x":100,"y":500},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[200,1000,5],[600,1000,5]],boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:950,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:1100,w:600,h:100,canJump:true,sat:{"pos":{"x":100,"y":550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":50},{"x":0,"y":50}],"edges":[{"x":300,"y":0},{"x":0,"y":50},{"x":-300,"y":0},{"x":0,"y":-50}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":300,"y":0},{"x":300,"y":50},{"x":0,"y":50}]},inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:700,y:1000,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:700,y:800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:700,w:200,h:100,canJump:true,inView:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,700],[1200,1000],[900,1000]],most:{"left":450,"right":600,"top":350,"bottom":500},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:1000,w:400,h:500,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:750,y:675,w:300,h:50,angle:370,rotateSpeed:0.04292929292929293,pivotX:900,pivotY:700,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:76.03453162872775,unSim:0,inView:true,initialRotation:6.457718232379019,boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:1000,y:800,r:30,renderType:"circleR",radius:15,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:500,w:500,h:100,canJump:true,inView:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[600,600],[1000,600],[800,700]],most:{"left":300,"right":500,"top":300,"bottom":350},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[600,600],[800,700],[600,700]],most:{"left":300,"right":400,"top":300,"bottom":350},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:0,w:500,h:500,canJump:true,inView:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1100,y:300,w:200,h:200,points:[[550,150],[550,0]],speed:200,currentPoint:1.2888888888888892,collidable:false,pointOn:{"x":550,"y":0},pointTo:{"x":550,"y":150},xv:1.2246467991473532e-14,yv:200,inView:true,path:[[1100,300,6.666666666666667],[1100,0,6.666666666666667]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1400,y:300,w:200,h:200,points:[[700,150],[700,0]],speed:200,currentPoint:1.2888888888888892,collidable:false,pointOn:{"x":700,"y":0},pointTo:{"x":700,"y":150},xv:1.2246467991473532e-14,yv:200,inView:true,path:[[1400,300,6.666666666666667],[1400,0,6.666666666666667]],boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:1350,y:300,r:30,renderType:"circleR",radius:15,inView:true,})
C(0,[],[1],{type:[0,[],[1]],x:1350,y:500,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:500,w:200,h:1000,canJump:true,inView:true,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:0,w:100,h:700,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:800,w:100,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:1200,w:300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:0,w:400,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2100,y:0,w:200,h:1900,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1700,y:700,w:400,h:800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:1800,y:750,w:100,h:100,points:[[900,375],[900,550]],speed:150,currentPoint:0.11428571428571428,pointOn:{"x":900,"y":375},pointTo:{"x":900,"y":550},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1800,750,5],[1800,1100,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:1900,y:1100,w:100,h:100,points:[[950,550],[950,725]],speed:150,currentPoint:1.1142857142857143,pointOn:{"x":950,"y":725},pointTo:{"x":950,"y":550},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1900,1100,5],[1900,1450,5]],})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:900,w:400,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:1100,w:100,h:400,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1700,y:1500,w:400,h:100,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(2,[],[1],{type:[2,[],[1]],points:[[2000,700],[2100,700],[2100,900]],most:{"left":1000,"right":1050,"top":350,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1100,0],[1600,0],[1250,100]],most:{"left":550,"right":800,"top":0,"bottom":50},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:1600,w:400,h:300,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1300,y:1500,w:200,h:150,points:[[650,750],[650,875]],speed:150,currentPoint:0.96,collidable:true,pointOn:{"x":650,"y":750},pointTo:{"x":650,"y":875},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1300,1500,5],[1300,1750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1100,y:1750,w:200,h:150,points:[[550,875],[550,750]],speed:150,currentPoint:0.96,collidable:true,pointOn:{"x":550,"y":875},pointTo:{"x":550,"y":750},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1100,1750,5],[1100,1500,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1000,y:1500,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:1500,w:100,h:300,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:1500,w:100,h:300,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(0,[],[1],{type:[0,[],[1]],x:1300,y:1900,r:20,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:1300,y:1900,r:50,renderType:"circleR",radius:25,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:1800,w:500,h:200,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:800,y:1500,w:200,h:50,points:[[400,750],[400,875]],speed:250,currentPoint:0.933333333333423,collidable:true,pointOn:{"x":400,"y":750},pointTo:{"x":400,"y":875},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[800,1500,8.333333333333334],[800,1750,8.333333333333334]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[500,1550],[550,1800],[450,1800]],most:{"left":225,"right":275,"top":775,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
let minX6041, minY6041, maxX6041, maxY6041;
    minX6041 = -100;minY6041 = -100;maxX6041 = 300;maxY6041 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6041) && (player.pos.x) < md(maxX6041) && (player.pos.y) > md(minY6041) && (player.pos.y) < md(maxY6041)) {
            colors.background="#414381"; colors.tile="#141f52";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:200,y:2200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:2000,w:200,h:400,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:400,y:2200,w:100,h:200,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[1],{type:[1,[],[1]],x:100,y:2400,w:600,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:0,y:2300,w:100,h:100,points:[[0,1150],[200,1150]],speed:150,currentPoint:1.85,pointOn:{"x":200,"y":1150},pointTo:{"x":0,"y":1150},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[0,2300,5],[400,2300,5]],})
C(1,[],[13],{type:[1,[],[13]],x:0,y:2300,w:400,h:100,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[0],[11],{type:[1,[0],[11]],x:400,y:2300,w:100,h:100,points:[[200,1150],[0,1150]],speed:150,currentPoint:1.85,pointOn:{"x":0,"y":1150},pointTo:{"x":200,"y":1150},xv:150,yv:0,inView:false,path:[[400,2300,5],[0,2300,5]],})
C(2,[],[0],{type:[2,[],[0]],points:[[0,2600],[300,2900],[0,2900]],most:{"left":0,"right":150,"top":1300,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:2900,w:1500,h:100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:300,y:2650,w:400,h:100,angle:-3,rotateSpeed:-0.051515151515151514,pivotX:500,pivotY:2700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:2.449999999999994,inView:false,initialRotation:-0.05235987755982988,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[300,2500],[700,2500],[500,2700]],most:{"left":150,"right":350,"top":1250,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:2000,w:100,h:800,canJump:true,inView:false,})
let timer6042 = 0.23333333333333534; let state6042 =true; let x6042 = 800; 
    C(1,[],[1],{h:800,w:300,y:2000,x:800,sf:(e)=>{
            timer6042 -= 1 / 60;
            if(timer6042 < 0){
                state6042 = !state6042;
                if(state6042 === true){
                    // on
                    timer6042 += 0.9;
                    e.pos.x = x6042;
                } else {
                    // off
                    timer6042 += 0.9;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state6042) {
                if (timer6042 < 0.2 && 0.9 > 0.2) {
                    ctx.globalAlpha = timer6042 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer6042 < 0.2 && 0.9 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer6042 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x6042, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:1100,y:2100,w:100,h:800,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:800,y:2350,w:100,h:100,points:[[400,1175],[500,1175]],speed:50,currentPoint:1.2333333333333893,pointOn:{"x":500,"y":1175},pointTo:{"x":400,"y":1175},xv:-50,yv:6.123233995736766e-15,inView:false,path:[[800,2350,1.6666666666666667],[1000,2350,1.6666666666666667]],})
C(1,[],[13],{type:[1,[],[13]],x:1100,y:2000,w:100,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[0],[1],{type:[1,[0],[1]],x:1200,y:2200,w:100,h:200,points:[[600,1100],[800,1100]],speed:150,currentPoint:1.85,collidable:false,pointOn:{"x":800,"y":1100},pointTo:{"x":600,"y":1100},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[1200,2200,5],[1600,2200,5]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1200,y:2400,w:100,h:200,points:[[600,1200],[800,1200]],speed:150,currentPoint:0.85,collidable:false,pointOn:{"x":600,"y":1200},pointTo:{"x":800,"y":1200},xv:150,yv:0,inView:false,path:[[1200,2400,5],[1600,2400,5]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1200,y:2600,w:100,h:200,points:[[600,1300],[800,1300]],speed:150,currentPoint:1.85,collidable:false,pointOn:{"x":800,"y":1300},pointTo:{"x":600,"y":1300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[1200,2600,5],[1600,2600,5]],boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:2000,w:300,h:900,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1250,y:2350,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1550,y:2350,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7.041719095097276e-14,y:3000,w:1500,h:3000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:2900,w:100,h:800,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:1500,y:3200,w:700,h:100,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:1850,pivotY:3250,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:176.7766952966369,unSim:2.449999999999994,inView:false,initialRotation:0.01308996938995747,boundPlayer:false,})
C(0,[],[1],{type:[0,[],[1]],x:1850,y:3250,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1800,y:2900,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:3600,w:700,h:2400,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:3500,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:3500,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:2025,y:3225,w:50,h:50,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:3250,distToPivot:100,canCollide:true,cullingRadius:117.67766952966369,unSim:2.449999999999994,inView:false,initialRotation:-0.026179938779914945,})
C(1,[1],[11],{type:[1,[1],[11]],x:2025,y:3225,w:50,h:50,angle:178.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:3250,distToPivot:100,canCollide:true,cullingRadius:117.67766952966369,unSim:2.449999999999994,inView:false,initialRotation:3.115412714809878,})
C(1,[],[1],{type:[1,[],[1]],x:2000,y:2000,w:900,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:2900,w:1000,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:1200,w:100,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:1800,w:400,h:200,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2760,w:140,h:80,points:[[1030,1380],[1360,1380]],speed:150,currentPoint:1.121212121212121,pointOn:{"x":1360,"y":1380},pointTo:{"x":1030,"y":1380},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2060,2760,5],[2720,2760,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2660,w:140,h:80,points:[[1030,1330],[1360,1330]],speed:75,currentPoint:0.5606060606060606,pointOn:{"x":1030,"y":1330},pointTo:{"x":1360,"y":1330},xv:75,yv:0,inView:false,path:[[2060,2660,2.5],[2720,2660,2.5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2560,w:140,h:80,points:[[1030,1280],[1360,1280]],speed:225,currentPoint:1.6818181818181817,pointOn:{"x":1360,"y":1280},pointTo:{"x":1030,"y":1280},xv:-225,yv:2.7554552980815446e-14,inView:false,path:[[2060,2560,7.5],[2720,2560,7.5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2460,w:140,h:80,points:[[1030,1230],[1360,1230]],speed:150,currentPoint:1.121212121212121,pointOn:{"x":1360,"y":1230},pointTo:{"x":1030,"y":1230},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2060,2460,5],[2720,2460,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2360,w:140,h:80,points:[[1030,1180],[1360,1180]],speed:150,currentPoint:0.12121212121212122,pointOn:{"x":1030,"y":1180},pointTo:{"x":1360,"y":1180},xv:150,yv:0,inView:false,path:[[2060,2360,5],[2720,2360,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2260,w:140,h:80,points:[[1030,1130],[1360,1130]],speed:100,currentPoint:0.7474747474746795,pointOn:{"x":1030,"y":1130},pointTo:{"x":1360,"y":1130},xv:100,yv:0,inView:false,path:[[2060,2260,3.3333333333333335],[2720,2260,3.3333333333333335]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2160,w:140,h:80,points:[[1030,1080],[1360,1080]],speed:200,currentPoint:1.494949494949563,pointOn:{"x":1360,"y":1080},pointTo:{"x":1030,"y":1080},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[2060,2160,6.666666666666667],[2720,2160,6.666666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2060,y:2060,w:140,h:80,points:[[1030,1030],[1360,1030]],speed:100,currentPoint:1.7474747474746795,pointOn:{"x":1360,"y":1030},pointTo:{"x":1030,"y":1030},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[2060,2060,3.3333333333333335],[2720,2060,3.3333333333333335]],})
C(2,[],[1],{type:[2,[],[1]],points:[[200,2150],[350,2200],[200,2200]],most:{"left":100,"right":175,"top":1075,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[350,2000],[500,2000],[500,2050]],most:{"left":175,"right":250,"top":1000,"bottom":1025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2300,1400],[2700,1800],[2300,1800]],most:{"left":1150,"right":1350,"top":700,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,1200],[2900,1200],[2900,1600]],most:{"left":1250,"right":1450,"top":600,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2300,y:1200,w:200,h:200,points:[[1150,600],[1350,800]],speed:250,currentPoint:0.18024590865855314,collidable:false,pointOn:{"x":1150,"y":600},pointTo:{"x":1350,"y":800},xv:176.7766952966369,yv:176.77669529663686,inView:false,path:[[2300,1200,8.333333333333334],[2700,1600,8.333333333333334]],boundPlayer:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[2700,1380],[2720,1400],[2500,1620],[2480,1600]],most:{"left":1240,"right":1360,"top":690,"bottom":810},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:1000,w:500,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2500,y:900,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:500,w:700,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2500,y:575,w:500,h:50,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:2750,pivotY:600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:2.449999999999994,inView:false,initialRotation:-0.02617993877991494,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:0,w:700,h:500,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:3350,y:700,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:0,w:400,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:0,w:2600,h:1300,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,1050],[3150,1200],[3000,1500]],most:{"left":1500,"right":1575,"top":525,"bottom":750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3250,1000],[3400,1000],[3400,1150]],most:{"left":1625,"right":1700,"top":500,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3000,y:1050,w:50,h:100,points:[[1500,525],[1675,525]],speed:150,currentPoint:0.11428571428571428,collidable:true,pointOn:{"x":1500,"y":525},pointTo:{"x":1675,"y":525},xv:150,yv:0,inView:false,path:[[3000,1050,5],[3350,1050,5]],boundPlayer:true,})
let timer6043 = 0.3333333333333335; let state6043 =false; let x6043 = 3400; 
    C(1,[],[1],{h:200,w:200,y:1300,x:3400,sf:(e)=>{
            timer6043 -= 1 / 60;
            if(timer6043 < 0){
                state6043 = !state6043;
                if(state6043 === true){
                    // on
                    timer6043 += 0.7;
                    e.pos.x = x6043;
                } else {
                    // off
                    timer6043 += 0.7;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state6043) {
                if (timer6043 < 0.2 && 0.7 > 0.2) {
                    ctx.globalAlpha = timer6043 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer6043 < 0.2 && 0.7 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer6043 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x6043, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:3000,y:1500,w:600,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3150,1200],[3200,1500],[3000,1500]],most:{"left":1500,"right":1600,"top":600,"bottom":750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:3600,y:1600,w:200,h:200,spawn:{"x":1850,"y":850},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:1300,w:2200,h:500,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:3600,y:1300,w:200,h:300,force:7500,dir:{"x":0,"y":7500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.312124849939976,})
let minX6044, minY6044, maxX6044, maxY6044;
    minX6044 = 3500;minY6044 = 1450;maxX6044 = 3900;maxY6044 = 1800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6044) && (player.pos.x) < md(maxX6044) && (player.pos.y) > md(minY6044) && (player.pos.y) < md(maxY6044)) {
            colors.background="#804181"; colors.tile="#4b1452";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:3600,y:1800,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:1600,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2000,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:1900,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2400,w:300,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3500,y:1700,w:100,h:100,points:[[1750,850],[1750,1150]],speed:650,currentPoint:1.3444444444444585,collidable:true,pointOn:{"x":1750,"y":1150},pointTo:{"x":1750,"y":850},xv:3.980102097228898e-14,yv:-650,inView:false,path:[[3500,1700,21.666666666666668],[3500,2300,21.666666666666668]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:1600,w:100,h:100,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3450,y:1950,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3350,y:1600,w:50,h:500,points:[[1675,800],[1500,800]],speed:175,currentPoint:0.4666666666665385,collidable:true,pointOn:{"x":1675,"y":800},pointTo:{"x":1500,"y":800},xv:-175,yv:2.1431318985078682e-14,inView:false,path:[[3350,1600,5.833333333333333],[3000,1600,5.833333333333333]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3300,y:2100,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:2100,w:100,h:500,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,1600],[3400,1600],[3000,1800]],most:{"left":1500,"right":1700,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3300,y:2300,w:100,h:100,points:[[1650,1150],[1650,1350]],speed:400,currentPoint:0.9333333333332212,collidable:true,pointOn:{"x":1650,"y":1150},pointTo:{"x":1650,"y":1350},xv:2.4492935982947064e-14,yv:400,inView:false,path:[[3300,2300,13.333333333333334],[3300,2700,13.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2700,w:100,h:100,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3450,y:2650,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:2600,w:300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:2800,w:500,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:2300,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2500,w:300,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3500,y:2600,w:100,h:100,points:[[1750,1300],[1750,1500]],speed:400,currentPoint:0.9333333333332212,collidable:true,pointOn:{"x":1750,"y":1300},pointTo:{"x":1750,"y":1500},xv:2.4492935982947064e-14,yv:400,inView:false,path:[[3500,2600,13.333333333333334],[3500,3000,13.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:2800,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:2600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2900,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:3100,w:200,h:100,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3650,y:2750,r:20,renderType:"circleR",radius:10,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3250,y:2550,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[],[25],{type:[1,[],[25]],x:3700,y:2600,w:300,h:100,dir:"down",max:350,pushBack:20,startX:1850,startY:1300,pusherId:0.720266595942173,xv:0,yv:0,pushing:false,inView:false,pushAngle:270,maxPushDistance:700,idlePushBackSpeed:16.666666666666668,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:2150,w:300,h:10,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:2500,w:300,h:10,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:2100,w:100,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3900,y:1800,w:2100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:1900,w:2000,h:100,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:3700,y:2100,w:50,h:100,points:[[1850,1050],[1975,1050]],speed:150,currentPoint:0.96,pointOn:{"x":1850,"y":1050},pointTo:{"x":1975,"y":1050},xv:150,yv:0,inView:false,path:[[3700,2100,5],[3950,2100,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:3950,y:2450,w:50,h:100,points:[[1975,1225],[1850,1225]],speed:150,currentPoint:0.96,pointOn:{"x":1975,"y":1225},pointTo:{"x":1850,"y":1225},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[3950,2450,5],[3700,2450,5]],})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:2800,w:400,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4100,y:2100,w:300,h:600,force:50000,dir:{"x":0,"y":50000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:35.414165666266506,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:2000,w:1600,h:1300,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:4150,y:2800,w:200,h:100,time:0,maxTime:0.09,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:5.3999999999999995,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:2350,w:300,h:100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:4100,y:2375,w:300,h:50,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:4250,pivotY:2400,distToPivot:0,canCollide:true,cullingRadius:76.03453162872775,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(2,[],[0],{type:[2,[],[0]],points:[[4400,2900],[4400,3300],[4100,3300],[4100,3200]],most:{"left":2050,"right":2200,"top":1450,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:3200,w:300,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3700,2900],[4100,2900],[3700,3100]],most:{"left":1850,"right":2050,"top":1450,"bottom":1550},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:3300,y:3200,w:100,h:100,points:[[1650,1600],[1850,1600]],speed:350,currentPoint:0.31666666666677884,collidable:true,pointOn:{"x":1650,"y":1600},pointTo:{"x":1850,"y":1600},xv:350,yv:0,inView:false,path:[[3300,3200,11.666666666666666],[3700,3200,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3300,y:3400,w:100,h:100,points:[[1650,1700],[1850,1700]],speed:350,currentPoint:0.31666666666677884,collidable:true,pointOn:{"x":1650,"y":1700},pointTo:{"x":1850,"y":1700},xv:350,yv:0,inView:false,path:[[3300,3400,11.666666666666666],[3700,3400,11.666666666666666]],boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:3600,y:3350,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:3300,w:2200,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3300,y:3500,w:500,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:3200,w:1000,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:3400,w:900,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:3500,w:900,h:100,canJump:true,inView:false,})
let timer6045 = 0.033333333333329745; let state6045 =true; let x6045 = 3000; 
    C(1,[],[1],{h:100,w:100,y:3300,x:3000,sf:(e)=>{
            timer6045 -= 1 / 60;
            if(timer6045 < 0){
                state6045 = !state6045;
                if(state6045 === true){
                    // on
                    timer6045 += 0.5;
                    e.pos.x = x6045;
                } else {
                    // off
                    timer6045 += 0.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state6045) {
                if (timer6045 < 0.2 && 0.5 > 0.2) {
                    ctx.globalAlpha = timer6045 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer6045 < 0.2 && 0.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer6045 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x6045, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[1],[1],{type:[1,[1],[1]],x:2550,y:3225,w:200,h:50,angle:3,rotateSpeed:0.051515151515151514,pivotX:2650,pivotY:3250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982988,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2300,y:3100,w:100,h:100,points:[[1150,1550],[1150,1650]],speed:150,currentPoint:1.7,collidable:true,pointOn:{"x":1150,"y":1650},pointTo:{"x":1150,"y":1550},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[2300,3100,5],[2300,3300,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:2900,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:3700,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:3600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:3800,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:3600,w:300,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:3900,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:3700,w:100,h:2300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:4000,w:550,h:2000,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:2700,y:3800,w:200,h:200,spawn:{"x":1400,"y":1950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
let minX6046, minY6046, maxX6046, maxY6046;
    minX6046 = 2550;minY6046 = 3700;maxX6046 = 2950;maxY6046 = 4050;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6046) && (player.pos.x) < md(maxX6046) && (player.pos.y) > md(minY6046) && (player.pos.y) < md(maxY6046)) {
            colors.background="#814141"; colors.tile="#521414";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[1700,1200],[1750,1200],[1700,1450]],most:{"left":850,"right":875,"top":600,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2900,y:3600,w:3100,h:2800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:6000,w:2900,h:2000,canJump:true,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:2900,y:3600,w:3100,h:2800,speedInc:1.37,inView:false,speedChangePermanent:false,speedMult:1.37,})
C(1,[],[17],{type:[1,[],[17]],x:2900,y:3600,w:3100,h:2800,time:0,maxTime:17,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:1020,})
C(2,[],[11],{type:[2,[],[11]],points:[[3250,3850],[3850,4450],[3750,4450],[3250,3950]],most:{"left":1625,"right":1925,"top":1925,"bottom":2225},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[11],{type:[0,[],[11]],x:3100,y:5250,r:230,renderType:"circleR",radius:115,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3150,y:5200,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3100,y:5250,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:4000,w:50,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:5500,w:50,h:500,canJump:true,inView:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[3250,5400],[3650,5800],[3600,5850],[3200,5450]],most:{"left":1600,"right":1825,"top":2700,"bottom":2925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[4180,4280],[4290,4280],[4100,5450],[4000,5450]],most:{"left":2000,"right":2145,"top":2140,"bottom":2725},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[11],{type:[1,[1],[11]],x:4150,y:4025,w:700,h:150,angle:2,rotateSpeed:0.03434343434343435,pivotX:4500,pivotY:4100,distToPivot:0,canCollide:true,cullingRadius:178.97276329095442,unSim:2.449999999999994,inView:false,initialRotation:0.03490658503988659,})
C(1,[1],[11],{type:[1,[1],[11]],x:4150,y:4025,w:700,h:150,angle:92,rotateSpeed:0.03434343434343435,pivotX:4500,pivotY:4100,distToPivot:0,canCollide:true,cullingRadius:178.97276329095442,unSim:2.449999999999994,inView:false,initialRotation:1.6057029118347832,})
C(0,[],[1],{type:[0,[],[1]],x:4500,y:4100,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[5150,4050],[5800,4700],[5700,4700],[5150,4150]],most:{"left":2575,"right":2900,"top":2025,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:4650,y:4650,w:800,h:100,points:[[2325,2325],[2325,2475]],speed:150,currentPoint:0.4666666666666667,pointOn:{"x":2325,"y":2325},pointTo:{"x":2325,"y":2475},xv:9.184850993605149e-15,yv:150,inView:false,path:[[4650,4650,5],[4650,4950,5]],})
C(0,[],[11],{type:[0,[],[11]],x:4700,y:5900,r:350,renderType:"circleR",radius:175,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:5600,w:150,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4700,y:5900,r:300,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4300,y:5850,w:800,h:100,angle:3,rotateSpeed:0.051515151515151514,pivotX:4700,pivotY:5900,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:201.55644370746373,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982988,boundPlayer:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[5550,5300],[5550,5400],[5050,5900],[5000,5800]],most:{"left":2500,"right":2775,"top":2650,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[11],{type:[0,[],[11]],x:5950,y:6450,r:20,renderType:"circleR",radius:10,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:5700,y:6400,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:6400,w:3000,h:100,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3250,y:5050,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:5700,y:6500,w:300,h:300,spawn:{"x":2925,"y":3325},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:5000,y:6800,w:800,h:400,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:6600,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:5400,y:6700,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:6500,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:6700,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5600,6650],[5650,6800],[5600,6800]],most:{"left":2800,"right":2825,"top":3325,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
let minX6047, minY6047, maxX6047, maxY6047;
    minX6047 = 5700;minY6047 = 6400;maxX6047 = 6100;maxY6047 = 6800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6047) && (player.pos.x) < md(maxX6047) && (player.pos.y) > md(minY6047) && (player.pos.y) < md(maxY6047)) {
            colors.background="#326247"; colors.tile="#163c28";
        }
    },});
C(1,[0],[1],{type:[1,[0],[1]],x:5000,y:6700,w:100,h:100,points:[[2500,3350],[2700,3350]],speed:150,currentPoint:0.85,collidable:true,pointOn:{"x":2500,"y":3350},pointTo:{"x":2700,"y":3350},xv:150,yv:0,inView:false,path:[[5000,6700,5],[5400,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5000,y:6700,w:100,h:100,points:[[2500,3350],[2700,3350]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":2700,"y":3350},pointTo:{"x":2500,"y":3350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[5000,6700,5],[5400,6700,5]],boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2400,y:3800,r:10,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2500,y:3900,r:10,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:6500,w:400,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:4600,y:6600,w:100,h:100,points:[[2300,3300],[2450,3300]],speed:150,currentPoint:0.4666666666666667,pointOn:{"x":2300,"y":3300},pointTo:{"x":2450,"y":3300},xv:150,yv:0,inView:false,path:[[4600,6600,5],[4900,6600,5]],})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:6915,w:400,h:70,angle:3,rotateSpeed:0.051515151515151514,pivotX:4800,pivotY:6950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:101.51970252123476,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982988,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:7200,w:1800,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5000,7150],[5000,7200],[4950,7200]],most:{"left":2475,"right":2500,"top":3575,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:6900,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:4550,y:7150,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:6500,w:100,h:100,points:[[2200,3250],[2200,3550]],speed:325,currentPoint:0.6722222222223718,collidable:true,pointOn:{"x":2200,"y":3250},pointTo:{"x":2200,"y":3550},xv:1.990051048614449e-14,yv:325,inView:false,path:[[4400,6500,10.833333333333334],[4400,7100,10.833333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:7000,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:6820,w:60,h:60,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:6600,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:6700,w:100,h:500,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:6500,w:1200,h:300,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[15],{type:[1,[],[15]],x:3000,y:6500,w:1200,h:300,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:6800,w:1200,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:6500,w:100,h:300,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:6500,w:100,h:300,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:3650,y:6500,w:200,h:75,points:[[1825,3250],[1825,3362.5]],speed:150,currentPoint:1.2888888888888888,pointOn:{"x":1825,"y":3362.5},pointTo:{"x":1825,"y":3250},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[3650,6500,5],[3650,6725,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:3150,y:6500,w:200,h:75,points:[[1575,3250],[1575,3362.5]],speed:150,currentPoint:0.28888888888888886,pointOn:{"x":1575,"y":3250},pointTo:{"x":1575,"y":3362.5},xv:9.184850993605149e-15,yv:150,inView:false,path:[[3150,6500,5],[3150,6725,5]],})
C(1,[],[13],{type:[1,[],[13]],x:2900,y:6500,w:100,h:300,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[1],{type:[1,[],[1]],x:3050,y:6900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3050,y:7100,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3350,y:6900,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3350,y:7200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3650,y:7100,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3650,y:6900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3950,y:6900,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3950,y:7200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:2900,y:6950,w:150,h:100,points:[[1450,3475],[2025,3475]],speed:250,currentPoint:0.07246376811590301,pointOn:{"x":1450,"y":3475},pointTo:{"x":2025,"y":3475},xv:250,yv:0,inView:false,path:[[2900,6950,8.333333333333334],[4050,6950,8.333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2900,y:7150,w:150,h:100,points:[[1450,3575],[2025,3575]],speed:250,currentPoint:1.072463768115903,pointOn:{"x":2025,"y":3575},pointTo:{"x":1450,"y":3575},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2900,7150,8.333333333333334],[4050,7150,8.333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2900,y:7150,w:150,h:100,points:[[1450,3575],[2025,3575]],speed:250,currentPoint:0.07246376811590301,pointOn:{"x":1450,"y":3575},pointTo:{"x":2025,"y":3575},xv:250,yv:0,inView:false,path:[[2900,7150,8.333333333333334],[4050,7150,8.333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2900,y:6950,w:150,h:100,points:[[1450,3475],[2025,3475]],speed:250,currentPoint:1.072463768115903,pointOn:{"x":2025,"y":3475},pointTo:{"x":1450,"y":3475},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[2900,6950,8.333333333333334],[4050,6950,8.333333333333334]],})
C(1,[1],[1],{type:[1,[1],[1]],x:4100,y:7500,w:500,h:100,angle:-2.6666666666666665,rotateSpeed:-0.0457912457912458,pivotX:4350,pivotY:7550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:2.449999999999994,inView:false,initialRotation:-0.04654211338651545,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4300,y:7300,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4100,y:7800,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4600,y:7800,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:7300,w:1200,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:7800,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:7700,w:100,h:300,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:7300,w:400,h:500,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:4500,y:7500,w:500,h:100,angle:92.66666666666666,rotateSpeed:0.0457912457912458,pivotX:4750,pivotY:7550,distToPivot:0,canCollide:true,cullingRadius:127.47548783981962,unSim:2.449999999999994,inView:false,initialRotation:1.617338440181412,})
C(0,[],[11],{type:[0,[],[11]],x:4920,y:7850,r:70,renderType:"circleR",radius:35,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:4750,y:7550,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4100,y:8000,w:200,h:200,points:[[2050,4000],[2650,4000]],speed:450,currentPoint:1.85,collidable:true,pointOn:{"x":2650,"y":4000},pointTo:{"x":2050,"y":4000},xv:-450,yv:5.510910596163089e-14,inView:false,path:[[4100,8000,15],[5300,8000,15]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4650,y:8000,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:8000,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4350,y:8000,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:8000,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:8200,w:1000,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:7300,w:900,h:2900,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:4000,y:8100,r:50,renderType:"circleR",radius:25,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:8000,w:700,h:300,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:8300,w:1600,h:1600,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:8300,w:300,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:9900,w:1700,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:8000,w:100,h:1000,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:4000,y:8300,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:4600,y:9000,w:200,h:200,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,initialRotation:0.013089969389957472,})
C(1,[1],[11],{type:[1,[1],[11]],x:4600,y:9000,w:200,h:200,angle:90.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,initialRotation:1.583886296184854,})
C(1,[1],[11],{type:[1,[1],[11]],x:4600,y:9000,w:200,h:200,angle:180.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,initialRotation:3.1546826229797507,})
C(1,[1],[11],{type:[1,[1],[11]],x:4600,y:9000,w:200,h:200,angle:270.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,initialRotation:4.725478949774647,})
C(1,[1],[11],{type:[1,[1],[11]],x:4400,y:9025,w:200,h:150,angle:-0.75,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,initialRotation:-0.013089969389957472,})
C(1,[1],[11],{type:[1,[1],[11]],x:4400,y:9025,w:200,h:150,angle:119.25,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,initialRotation:2.081305133003238,})
C(1,[1],[11],{type:[1,[1],[11]],x:4400,y:9025,w:200,h:150,angle:239.25,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,initialRotation:4.175700235396434,})
C(1,[1],[11],{type:[1,[1],[11]],x:4200,y:9050,w:200,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:4000,pivotY:9100,distToPivot:150,canCollide:true,cullingRadius:205.90169943749476,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(1,[1],[11],{type:[1,[1],[11]],x:4200,y:9050,w:200,h:100,angle:181.5,rotateSpeed:0.025757575757575757,pivotX:4000,pivotY:9100,distToPivot:150,canCollide:true,cullingRadius:205.90169943749476,unSim:2.449999999999994,inView:false,initialRotation:3.167772592369708,})
C(1,[1],[11],{type:[1,[1],[11]],x:3850,y:9050,w:300,h:100,angle:178,rotateSpeed:-0.03434343434343435,pivotX:4000,pivotY:9100,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:2.449999999999994,inView:false,initialRotation:3.1066860685499065,})
C(1,[],[12],{type:[1,[],[12]],x:3980,y:9080,w:40,h:40,tpx:2850,tpy:8050,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:8000,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:8300,w:200,h:300,canJump:true,inView:false,})
let minX6048, minY6048, maxX6048, maxY6048;
    minX6048 = 2550;minY6048 = 7900;maxX6048 = 3000;maxY6048 = 8350;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6048) && (player.pos.x) < md(maxX6048) && (player.pos.y) > md(minY6048) && (player.pos.y) < md(maxY6048)) {
            colors.background="#456352"; colors.tile="#223f2f";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:1800,y:8100,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:1900,y:8000,w:600,h:600,force:7000,dir:{"x":-7000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.95798319327731,})
C(1,[],[13],{type:[1,[],[13]],x:2500,y:8300,w:200,h:300,force:7000,dir:{"x":-7000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.95798319327731,})
C(1,[],[15],{type:[1,[],[15]],x:1900,y:8000,w:600,h:600,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:8300,w:300,h:100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:8000,w:100,h:1400,canJump:true,inView:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:1550,y:8290,w:600,h:120,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:8350,distToPivot:0,canCollide:true,cullingRadius:152.97058540778355,unSim:2.449999999999994,inView:false,initialRotation:-0.026179938779914945,})
let timer6049 = 0.6333333333333373; let state6049 =false; let x6049 = 1500; 
    C(1,[],[1],{h:500,w:1400,y:8700,x:1500,sf:(e)=>{
            timer6049 -= 1 / 60;
            if(timer6049 < 0){
                state6049 = !state6049;
                if(state6049 === true){
                    // on
                    timer6049 += 0.3;
                    e.pos.x = x6049;
                } else {
                    // off
                    timer6049 += 1.25;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state6049) {
                if (timer6049 < 0.2 && 0.3 > 0.2) {
                    ctx.globalAlpha = timer6049 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer6049 < 0.2 && 1.25 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer6049 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x6049, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:1500,y:9200,w:1300,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1850,y:8700,w:100,h:215,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1850,y:9100,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2250,y:8850,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2800,y:8700,w:100,h:290,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2606,y:9110,w:70,h:70,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:1775,y:9125,w:50,h:50,angle:3,rotateSpeed:0.051515151515151514,pivotX:1800,pivotY:9150,distToPivot:0,canCollide:true,cullingRadius:17.67766952966369,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982989,})
C(0,[],[11],{type:[0,[],[11]],x:2000,y:8750,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:2575,y:8650,w:50,h:200,angle:3,rotateSpeed:0.051515151515151514,pivotX:2600,pivotY:8750,distToPivot:0,canCollide:true,cullingRadius:51.53882032022076,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982989,})
C(0,[],[1],{type:[0,[],[1]],x:1600,y:8900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2350,8850],[2250,9200],[2150,9050]],most:{"left":1075,"right":1175,"top":4425,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,9000],[2550,9000],[2400,9200],[2350,9200]],most:{"left":1175,"right":1275,"top":4500,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:8600,w:1100,h:100,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:1600,y:8900,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,8850],[1700,9200],[1500,9200]],most:{"left":750,"right":850,"top":4425,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:2800,y:9200,w:100,h:200,force:7500,dir:{"x":0,"y":7500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.312124849939976,})
C(1,[],[13],{type:[1,[],[13]],x:1400,y:9400,w:1500,h:500,force:7500,dir:{"x":-7500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.312124849939976,})
C(1,[],[15],{type:[1,[],[15]],x:1400,y:9400,w:1500,h:500,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:9400,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:1400,y:9400,w:1100,h:125,points:[[700,4700],[700,4887.5]],speed:150,currentPoint:1.9733333333333334,pointOn:{"x":700,"y":4887.5},pointTo:{"x":700,"y":4700},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1400,9400,5],[1400,9775,5]],})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:9900,w:1400,h:100,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:1450,y:9950,r:26,renderType:"circleR",radius:13,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:8000,w:1400,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:9400,w:1300,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1300,y:9900,w:100,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,10000],[1300,10000],[200,11100]],most:{"left":100,"right":650,"top":5000,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,10200],[1500,11300],[400,11300]],most:{"left":200,"right":750,"top":5100,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:10100,w:100,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2.1431318985078682e-14,y:10000,w:200,h:2000,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:700,y:10175,w:600,h:50,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:1000,pivotY:10200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:150.5199322349037,unSim:2.449999999999994,inView:false,initialRotation:0.02617993877991494,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1025,y:10750,w:100,h:100,points:[[512.5,5375],[137.5,5375]],speed:350,currentPoint:0.30222222222223083,collidable:true,pointOn:{"x":512.5,"y":5375},pointTo:{"x":137.5,"y":5375},xv:-350,yv:4.2862637970157365e-14,inView:false,path:[[1025,10750,11.666666666666666],[275,10750,11.666666666666666]],boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:700,y:10175,w:600,h:50,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:1000,pivotY:10200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:150.5199322349037,unSim:2.449999999999994,inView:false,initialRotation:1.5969762655748114,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:690,y:11250,w:100,h:100,angle:-3,rotateSpeed:-0.051515151515151514,pivotX:500,pivotY:11300,distToPivot:120,canCollide:true,renderType:"rotating",cullingRadius:155.35533905932738,unSim:2.449999999999994,inView:false,initialRotation:-0.05235987755982988,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:650,y:10950,r:24,renderType:"circleR",radius:12,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:900,y:10600,r:24,renderType:"circleR",radius:12,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:690,y:11250,w:100,h:100,angle:177,rotateSpeed:-0.051515151515151514,pivotX:500,pivotY:11300,distToPivot:120,canCollide:true,renderType:"rotating",cullingRadius:155.35533905932738,unSim:2.449999999999994,inView:false,initialRotation:3.0892327760299634,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:475,y:11300,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,11550],[250,11600],[200,11600]],most:{"left":100,"right":125,"top":5775,"bottom":5800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:850,y:11500,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,11300],[1500,11300],[1500,11500]],most:{"left":600,"right":750,"top":5650,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1100,y:11650,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:11600,w:1400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:11700,w:1600,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:11500,w:800,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:10200,w:100,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:10100,w:800,h:1000,canJump:true,inView:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[1800,11225],[2200,11525],[2200,11575],[1800,11275]],most:{"left":900,"right":1100,"top":5612.5,"bottom":5787.5},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:10200,w:600,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:10200,w:100,h:1300,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:2450,y:11400,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:10950,w:500,h:500,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:2500,y:11300,w:200,h:200,points:[[1250,5650],[1450,5650],[1450,5450],[1250,5450]],speed:250,currentPoint:1.083333333333103,pointOn:{"x":1450,"y":5650},pointTo:{"x":1450,"y":5450},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[2500,11300,8.333333333333334],[2900,11300,8.333333333333334],[2900,10900,8.333333333333334],[2500,10900,8.333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2500,y:11300,w:200,h:200,points:[[1250,5650],[1450,5650],[1450,5450],[1250,5450]],speed:250,currentPoint:3.083333333333103,pointOn:{"x":1250,"y":5450},pointTo:{"x":1250,"y":5650},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[2500,11300,8.333333333333334],[2900,11300,8.333333333333334],[2900,10900,8.333333333333334],[2500,10900,8.333333333333334]],})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:10600,w:200,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:10600,w:200,h:300,canJump:true,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:2800,y:10700,r:70,tpx:4600,tpy:11600,renderType:"circleR",radius:35,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:12000,w:400,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:11300,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:11300,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4850,y:11700,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:11700,w:50,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:11400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:10900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2500,y:10900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2650,y:11150,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2750,y:11050,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2750,y:11150,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4350,y:11300,w:150,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4850,y:11350,w:50,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:11850,w:150,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4350,y:11850,w:150,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:11450,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:11450,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:11700,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:11700,w:50,h:50,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:4350,y:11450,w:100,h:50,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4350,y:11700,w:100,h:50,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4750,y:11700,w:100,h:50,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4750,y:11450,w:100,h:50,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4700,y:11350,w:50,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4450,y:11350,w:50,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4450,y:11750,w:50,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[8],{type:[1,[],[8]],x:4700,y:11750,w:50,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(2,[],[0],{type:[2,[],[0]],points:[[3200,10150],[4350,11300],[4300,11350],[3150,10200]],most:{"left":1575,"right":2175,"top":5075,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4300,11850],[4350,11900],[3200,13050],[3150,13000]],most:{"left":1575,"right":2175,"top":5925,"bottom":6525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4900,11850],[6050,13000],[6000,13050],[4850,11900]],most:{"left":2425,"right":3025,"top":5925,"bottom":6525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6000,10150],[6050,10200],[4900,11350],[4850,11300]],most:{"left":2425,"right":3025,"top":5075,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[12],{type:[0,[],[12]],x:4400,y:11400,r:30,tpx:2650,tpy:12150,renderType:"circleR",radius:15,inView:false,})
C(1,[],[20],{h:200,w:600,y:11100,x:4300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
let minX6051, minY6051, maxX6051, maxY6051;
    minX6051 = 4400;minY6051 = 11400;maxX6051 = 4800;maxY6051 = 11800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6051) && (player.pos.x) < md(maxX6051) && (player.pos.y) > md(minY6051) && (player.pos.y) < md(maxY6051)) {
            colors.background="#324848"; colors.tile="#142124";
        }
    },});
C(1,[],[20],{h:200,w:1000,y:10900,x:4100,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:200,w:1400,y:10700,x:3900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:11100,w:200,h:200,points:[[2150,5550],[2350,5550]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":2350,"y":5550},pointTo:{"x":2150,"y":5550},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[4300,11100,5],[4700,11100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:10900,w:200,h:200,points:[[2450,5450],[2050,5450]],speed:300,currentPoint:1.85,collidable:true,pointOn:{"x":2050,"y":5450},pointTo:{"x":2450,"y":5450},xv:300,yv:0,inView:false,path:[[4900,10900,10],[4100,10900,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3900,y:10700,w:200,h:200,points:[[1950,5350],[2550,5350]],speed:450,currentPoint:1.85,collidable:true,pointOn:{"x":2550,"y":5350},pointTo:{"x":1950,"y":5350},xv:-450,yv:5.510910596163089e-14,inView:false,path:[[3900,10700,15],[5100,10700,15]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:10700,w:1000,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5400,y:10400,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:10350,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3800,y:10400,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3800,y:10350,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:10350,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:10350,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5300,10600],[5600,10600],[5300,10900]],most:{"left":2650,"right":2800,"top":5300,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,10600],[3900,10600],[3900,10900]],most:{"left":1800,"right":1950,"top":5300,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5200,y:10375,w:400,h:50,angle:-3,rotateSpeed:-0.051515151515151514,pivotX:5400,pivotY:10400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,initialRotation:-0.05235987755982988,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5650,10200],[6000,10200],[5650,10550]],most:{"left":2825,"right":3000,"top":5100,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3200,10200],[3550,10200],[3550,10550]],most:{"left":1600,"right":1775,"top":5100,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3600,y:10375,w:400,h:50,angle:3,rotateSpeed:0.051515151515151514,pivotX:3800,pivotY:10400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982988,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:4000,y:10600,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:5200,y:10600,r:50,renderType:"circleR",radius:25,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:6800,w:100,h:400,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:5800,y:6900,w:100,h:100,tpx:2950,tpy:6550,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:7000,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:0,w:2000,h:6500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:6800,w:2000,h:6600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:6500,w:1800,h:300,canJump:true,inView:false,})
let morphTriggered1 = false;
    C(1,[],[5],{h:100,w:100,y:8000,x:2800,
        cr:(e)=>{
            ctx.globalAlpha = 0.8;
            if (morphTriggered1 === true) {
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
            morphTriggered1 = true;    
        }
    });
let morphOffset1 = Math.random() * Math.PI * 2;
    C(1,[],[0],{h:100,w:100,y:6800,x:5800,
        cr:(e)=>{
            if(morphTriggered1 === false){
                e.pos.x = 5800;
            }
            else {
                
                e.pos.x = -1E9;
                return;
                
            }
            ctx.beginPath();
            let middleX = e.topLeft.x + e.dimensions.x/2;
            let middleY = e.topLeft.y + e.dimensions.y/2;
            ctx.translate(middleX, middleY);
            ctx.fillStyle = colors.tile;
            for(let i = 0; i < 100; i++){
                const t = Math.PI * 2 * i / 100;
                const a = Math.sin(Date.now() / 1000 + morphOffset1) * 8;

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
        }
    });
let morphTriggered2 = false;let morphOffset2 = Math.random() * Math.PI * 2;
    C(1,[],[0],{h:100,w:100,y:6600,x:6000,
        cr:(e)=>{
            if(morphTriggered2 === false){
                e.pos.x = 6000;
            }
            else {
                
                e.pos.x = -1E9;
                return;
                
            }
            ctx.beginPath();
            let middleX = e.topLeft.x + e.dimensions.x/2;
            let middleY = e.topLeft.y + e.dimensions.y/2;
            ctx.translate(middleX, middleY);
            ctx.fillStyle = colors.tile;
            for(let i = 0; i < 100; i++){
                const t = Math.PI * 2 * i / 100;
                const a = Math.sin(Date.now() / 1000 + morphOffset2) * 8;

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
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:6000,y:6700,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:6500,w:200,h:100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6100,y:6600,w:100,h:100,tpx:1550,tpy:8600,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})

    C(1,[],[5],{h:100,w:100,y:11550,x:4550,
        cr:(e)=>{
            ctx.globalAlpha = 0.8;
            if (morphTriggered2 === true) {
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
            morphTriggered2 = true;    
        }
    });
C(0,[],[11],{type:[0,[],[11]],x:4100,y:10200,r:30,renderType:"circleR",radius:15,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:5100,y:10200,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4200,y:10200,w:200,h:100,points:[[2100,5100],[2100,5300]],speed:125,currentPoint:1.5416666666671155,collidable:true,pointOn:{"x":2100,"y":5300},pointTo:{"x":2100,"y":5100},xv:7.654042494670958e-15,yv:-125,inView:false,path:[[4200,10200,4.166666666666667],[4200,10600,4.166666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4800,y:10200,w:200,h:100,points:[[2400,5100],[2400,5300]],speed:125,currentPoint:1.5416666666671155,collidable:true,pointOn:{"x":2400,"y":5300},pointTo:{"x":2400,"y":5100},xv:7.654042494670958e-15,yv:-125,inView:false,path:[[4800,10200,4.166666666666667],[4800,10600,4.166666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:10200,w:400,h:100,points:[[2200,5100],[2200,5300]],speed:250,currentPoint:0.08333333333288465,collidable:true,pointOn:{"x":2200,"y":5100},pointTo:{"x":2200,"y":5300},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[4400,10200,8.333333333333334],[4400,10600,8.333333333333334]],boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:4550,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:4575,y:10400,w:50,h:50,tpx:4600,tpy:11600,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:4350,y:11500,w:100,h:200,maxStrength:14,currentStrength:3,time:0.1,timer:0.1,regenTime:666666666666600,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:4750,y:11500,w:100,h:200,maxStrength:14,currentStrength:3,time:0.1,timer:0.1,regenTime:666666666666600,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:4500,y:11350,w:200,h:100,maxStrength:14,currentStrength:3,time:0.1,timer:0.1,regenTime:666666666666600,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:4500,y:11750,w:200,h:100,maxStrength:14,currentStrength:3,time:0.1,timer:0.1,regenTime:666666666666600,inView:false,healSpeed:1,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:11300,w:300,h:600,force:8500,dir:{"x":0,"y":8500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.010204081632653,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,11000],[4300,11300],[4000,11300]],most:{"left":2000,"right":2150,"top":5500,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:4000,y:11300,w:300,h:600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[1],{type:[1,[],[1]],x:4000,y:11900,w:450,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3900,y:11000,w:100,h:800,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:3950,y:11950,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:3200,y:12000,w:700,h:300,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.312124849939976,})
C(1,[],[15],{type:[1,[],[15]],x:3200,y:12000,w:700,h:300,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:11800,w:100,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3800,y:11100,w:100,h:900,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:11900,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:3350,y:11850,r:30,renderType:"circleR",radius:15,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3350,y:12450,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:12300,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:3150,y:12850,w:100,h:100,id:1,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[20],{h:100,w:400,y:11800,x:3900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:500,w:100,y:11900,x:3300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:150,w:350,y:12550,x:3150,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[11],{type:[1,[0],[11]],x:3900,y:11800,w:150,h:100,points:[[1950,5900],[2075,5900]],speed:175,currentPoint:1.4533333333332865,pointOn:{"x":2075,"y":5900},pointTo:{"x":1950,"y":5900},xv:-175,yv:2.1431318985078682e-14,inView:false,path:[[3900,11800,5.833333333333333],[4150,11800,5.833333333333333]],})
C(1,[0],[11],{type:[1,[0],[11]],x:3300,y:11900,w:100,h:150,points:[[1650,5950],[1650,6125]],speed:250,currentPoint:1.523809523809011,pointOn:{"x":1650,"y":6125},pointTo:{"x":1650,"y":5950},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[3300,11900,8.333333333333334],[3300,12250,8.333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:3150,y:12550,w:50,h:150,points:[[1575,6275],[1725,6275]],speed:150,currentPoint:0.4666666666666667,collidable:true,pointOn:{"x":1575,"y":6275},pointTo:{"x":1725,"y":6275},xv:150,yv:0,inView:false,path:[[3150,12550,5],[3450,12550,5]],boundPlayer:true,})
C(1,[],[20],{h:500,w:500,y:11250,x:3250,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[1],{type:[1,[0],[1]],x:3250,y:11550,w:200,h:200,points:[[1625,5775],[1775,5775],[1775,5625],[1625,5625]],speed:250,currentPoint:2.1111111111107417,collidable:true,pointOn:{"x":1775,"y":5625},pointTo:{"x":1625,"y":5625},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[3250,11550,8.333333333333334],[3550,11550,8.333333333333334],[3550,11250,8.333333333333334],[3250,11250,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3250,y:11550,w:200,h:200,points:[[1625,5775],[1775,5775],[1775,5625],[1625,5625]],speed:250,currentPoint:0.11111111111074176,collidable:true,pointOn:{"x":1625,"y":5775},pointTo:{"x":1775,"y":5775},xv:250,yv:0,inView:false,path:[[3250,11550,8.333333333333334],[3550,11550,8.333333333333334],[3550,11250,8.333333333333334],[3250,11250,8.333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:11850,w:300,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:11100,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:11475,w:300,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:3400,y:10700,w:200,h:400,time:0,maxTime:0.2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:12,})
C(1,[],[13],{type:[1,[],[13]],x:3300,y:10850,w:400,h:100,force:20000,dir:{"x":20000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:14.1656662665066,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:10850,w:50,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3850,y:10900,w:50,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:10550,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3200,y:10400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3450,y:10750,w:100,h:300,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:3400,y:10700,w:200,h:50,points:[[1700,5350],[1700,5525]],speed:250,currentPoint:1.523809523809011,pointOn:{"x":1700,"y":5525},pointTo:{"x":1700,"y":5350},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[3400,10700,8.333333333333334],[3400,11050,8.333333333333334]],})
C(1,[],[7],{type:[1,[],[7]],x:3700,y:10850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:3725,y:11025,w:50,h:50,tpx:4600,tpy:11600,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:11800,w:200,h:50,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3800,y:11800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3800,y:11200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3350,y:12400,r:30,renderType:"circleR",radius:15,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:3350,y:11900,r:30,renderType:"circleR",radius:15,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:3300,y:11900,w:100,h:100,id:1,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:11300,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:11500,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5025,y:11800,w:50,h:250,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:4900,y:11300,w:100,h:50,points:[[2450,5650],[2450,5700]],speed:35,currentPoint:1.7266666666684614,pointOn:{"x":2450,"y":5700},pointTo:{"x":2450,"y":5650},xv:2.1431318985078682e-15,yv:-35,inView:false,path:[[4900,11300,1.1666666666666667],[4900,11400,1.1666666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4900,y:11300,w:100,h:50,points:[[2450,5650],[2450,5700]],speed:35,currentPoint:0.7266666666684614,pointOn:{"x":2450,"y":5650},pointTo:{"x":2450,"y":5700},xv:2.1431318985078682e-15,yv:35,inView:false,path:[[4900,11300,1.1666666666666667],[4900,11400,1.1666666666666667]],})
C(1,[],[0],{type:[1,[],[0]],x:5250,y:11500,w:50,h:50,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:11600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5450,y:11350,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:11300,w:400,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5350,11300],[5500,11300],[5500,11450]],most:{"left":2675,"right":2750,"top":5650,"bottom":5725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5000,y:11200,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4950,y:11250,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:11300,w:100,h:500,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5150,y:11800,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5450,y:11800,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5750,y:11800,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:11825,w:100,h:50,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:5150,y:11790,w:120,h:120,points:[[2575,5895],[2940,5895]],speed:150,currentPoint:0.0136986301369863,pointOn:{"x":2575,"y":5895},pointTo:{"x":2940,"y":5895},xv:150,yv:0,inView:false,path:[[5150,11790,5],[5880,11790,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5150,y:11790,w:120,h:120,points:[[2575,5895],[2940,5895]],speed:150,currentPoint:1.0136986301369864,pointOn:{"x":2940,"y":5895},pointTo:{"x":2575,"y":5895},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[5150,11790,5],[5880,11790,5]],})
C(1,[],[0],{type:[1,[],[0]],x:5450,y:11600,w:50,h:50,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:11900,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:12300,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:12450,w:100,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5800,y:12100,w:200,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:12750,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:12850,w:100,h:100,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:5900,y:12000,r:70,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5900,y:12000,r:44,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:12050,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:12050,w:100,h:50,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5450,y:12050,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:11400,w:250,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5950,y:11400,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5600,y:11200,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5750,y:11200,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:5650,y:10775,w:100,h:550,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5700,pivotY:11050,distToPivot:0,canCollide:true,cullingRadius:139.75424859373686,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(1,[1],[11],{type:[1,[1],[11]],x:5650,y:10775,w:100,h:550,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:5700,pivotY:11050,distToPivot:0,canCollide:true,cullingRadius:139.75424859373686,unSim:2.449999999999994,inView:false,initialRotation:1.5969762655748114,})
C(1,[],[1],{type:[1,[],[1]],x:5600,y:10950,w:200,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5450,y:10850,w:50,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5450,y:10750,w:50,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5430,10850],[5430,11180],[5100,11180]],most:{"left":2550,"right":2715,"top":5425,"bottom":5590},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:10750,w:400,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5800,y:11000,w:200,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5675,y:10900,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:5850,y:10550,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:5900,y:10450,w:50,h:50,tpx:4600,tpy:11600,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:11950,w:400,h:1050,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:12200,w:300,h:800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:4000,y:12160,w:430,h:840,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:12500,w:300,h:500,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:12500,w:300,h:500,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:12350,w:150,h:150,canCollide:false,inView:false,boundPlayer:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5550,12600],[5950,13000],[5550,13000]],most:{"left":2775,"right":2975,"top":6300,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4900,11950],[5150,12200],[4900,12200]],most:{"left":2450,"right":2575,"top":5975,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,12200],[4000,12500],[3700,12500]],most:{"left":1850,"right":2000,"top":6100,"bottom":6250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:12700,w:200,h:300,canCollide:false,inView:false,boundPlayer:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3700,12500],[3700,12700],[3500,12700]],most:{"left":1750,"right":1850,"top":6250,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4150,y:12250,w:100,h:200,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:12250,w:400,h:200,force:25000,dir:{"x":-25000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:17.707082833133253,})
C(2,[],[11],{type:[2,[],[11]],points:[[5150,12300],[5300,12450],[5150,12450]],most:{"left":2575,"right":2650,"top":6150,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:4575,y:12075,w:50,h:50,points:[[2287.5,6037.5],[2287.5,6112.5]],speed:150,currentPoint:0.9333333333333333,pointOn:{"x":2287.5,"y":6037.5},pointTo:{"x":2287.5,"y":6112.5},xv:9.184850993605149e-15,yv:150,inView:false,path:[[4575,12075,5],[4575,12225,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4575,y:12425,w:50,h:50,points:[[2287.5,6212.5],[2287.5,6287.5]],speed:150,currentPoint:0.9333333333333333,pointOn:{"x":2287.5,"y":6212.5},pointTo:{"x":2287.5,"y":6287.5},xv:9.184850993605149e-15,yv:150,inView:false,path:[[4575,12425,5],[4575,12575,5]],})
C(2,[],[11],{type:[2,[],[11]],points:[[4550,12700],[4650,12700],[4850,12950],[4850,13000]],most:{"left":2275,"right":2425,"top":6350,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:5050,y:13000,r:70,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:4950,y:12980,w:200,h:40,angle:3,rotateSpeed:0.051515151515151514,pivotX:5050,pivotY:13000,distToPivot:0,canCollide:true,cullingRadius:50.99019513592785,unSim:2.449999999999994,inView:false,initialRotation:0.05235987755982989,})
C(1,[],[1],{type:[1,[],[1]],x:5300,y:12960,w:50,h:40,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4800,y:12780,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:12550,w:50,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:5250,y:12450,w:600,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5550,pivotY:12500,distToPivot:0,canCollide:true,cullingRadius:152.0690632574555,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(1,[1],[11],{type:[1,[1],[11]],x:5250,y:12450,w:600,h:100,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:5550,pivotY:12500,distToPivot:0,canCollide:true,cullingRadius:152.0690632574555,unSim:2.449999999999994,inView:false,initialRotation:1.5969762655748114,})
C(1,[],[17],{type:[1,[],[17]],x:4440,y:12210,w:50,h:300,time:0,maxTime:0.1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:6,})
C(1,[],[20],{h:500,w:100,y:12450,x:4250,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:100,w:750,y:12850,x:3500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.4;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[11],{type:[1,[0],[11]],x:4200,y:12850,w:150,h:100,points:[[2100,6425],[1750,6425]],speed:300,currentPoint:0.11428571428571428,pointOn:{"x":2100,"y":6425},pointTo:{"x":1750,"y":6425},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[4200,12850,10],[3500,12850,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4250,y:12450,w:100,h:150,points:[[2125,6225],[2125,6400]],speed:150,currentPoint:1.1142857142857143,pointOn:{"x":2125,"y":6400},pointTo:{"x":2125,"y":6225},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[4250,12450,5],[4250,12800,5]],})
C(1,[],[7],{type:[1,[],[7]],x:3600,y:12850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:3525,y:12875,w:50,h:50,tpx:4600,tpy:11600,bgColor:"#141f52",tileColor:"#414381",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:8000,w:100,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:8000,w:100,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:9100,w:100,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:10100,w:700,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:10000,w:1400,h:100,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:9100,w:100,h:1000,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[20],{h:100,w:1600,y:10000,x:1500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.75;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:1000,w:100,y:9000,x:3000,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.75;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:100,w:100,y:9000,x:2900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.75;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(2,[],[1],{type:[2,[],[1]],points:[[3750,12550],[4000,12550],[3750,12700]],most:{"left":1875,"right":2000,"top":6275,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4150,12550],[4150,12750],[3800,12750]],most:{"left":1900,"right":2075,"top":6275,"bottom":6375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,12050],[4250,12250],[4100,12250]],most:{"left":2050,"right":2200,"top":6025,"bottom":6125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,12050],[4350,12050],[4100,12200]],most:{"left":2025,"right":2175,"top":6025,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:3650,y:12900,r:40,renderType:"circleR",radius:20,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:4400,y:11800,r:30,tpx:2650,tpy:12150,renderType:"circleR",radius:15,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:4800,y:11800,r:30,tpx:2650,tpy:12150,renderType:"circleR",radius:15,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:4800,y:11400,r:30,tpx:2650,tpy:12150,renderType:"circleR",radius:15,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:12300,w:300,h:1100,canJump:true,inView:false,})
C(1,[],[27],{type:[1,[],[27]],x:2550,y:12050,w:200,h:200,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
let minX6063, minY6063, maxX6063, maxY6063;
    minX6063 = 2450;minY6063 = 11900;maxX6063 = 2850;maxY6063 = 12400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6063) && (player.pos.x) < md(maxX6063) && (player.pos.y) > md(minY6063) && (player.pos.y) < md(maxY6063)) {
            colors.background="#483232"; colors.tile="#241414";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:0,y:12000,w:2100,h:900,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:12350,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2350,y:12400,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:12650,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:12750,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:13050,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2300,y:13150,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2200,y:13250,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1900,y:13100,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1900,y:12900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:1750,y:12925,w:400,h:50,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:1950,pivotY:12950,distToPivot:0,canCollide:true,cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(1,[1],[11],{type:[1,[1],[11]],x:1750,y:12925,w:400,h:50,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:1950,pivotY:12950,distToPivot:0,canCollide:true,cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,initialRotation:1.5969762655748114,})
C(1,[],[13],{type:[1,[],[13]],x:400,y:12900,w:1200,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:13150,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:500,y:12900,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[800,13550],[1450,13700],[1450,13850],[800,13700]],most:{"left":400,"right":725,"top":6775,"bottom":6925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[1450,13700],[2000,13950],[2000,14100],[1450,13850]],most:{"left":725,"right":1000,"top":6850,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[2000,13950],[2650,14050],[2650,14200],[2000,14100]],most:{"left":1000,"right":1325,"top":6975,"bottom":7100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[3750,13950],[3750,14100],[3100,14200],[3100,14050]],most:{"left":1550,"right":1875,"top":6975,"bottom":7100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[4300,13700],[4300,13850],[3750,14100],[3750,13950]],most:{"left":1875,"right":2150,"top":6850,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[4950,13600],[4950,13750],[4300,13850],[4300,13700]],most:{"left":2150,"right":2475,"top":6800,"bottom":6925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[5400,13600],[6050,13750],[6050,13900],[5400,13750]],most:{"left":2700,"right":3025,"top":6800,"bottom":6950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[6050,13750],[6600,14000],[6600,14150],[6050,13900]],most:{"left":3025,"right":3300,"top":6875,"bottom":7075},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[6600,14000],[7150,14250],[7150,14400],[6600,14150]],most:{"left":3300,"right":3575,"top":7000,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[7150,14250],[7700,14300],[7700,14450],[7150,14400]],most:{"left":3575,"right":3850,"top":7125,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:550,y:13850,w:150,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1100,y:14150,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1000,y:14200,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1000,y:14200,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[700,13850],[1050,14500],[700,14500]],most:{"left":350,"right":525,"top":6925,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[750,14050],[950,14450],[750,14450]],most:{"left":375,"right":475,"top":7025,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1450,14050],[1600,14050],[1550,14500],[1400,14500]],most:{"left":700,"right":800,"top":7025,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1650,14150],[1800,14150],[1750,14500],[1600,14500]],most:{"left":800,"right":900,"top":7075,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1850,14250],[2000,14250],[1950,14500],[1800,14500]],most:{"left":900,"right":1000,"top":7125,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1600,y:13500,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1650,y:13525,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1700,y:13550,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1650,13400],[1750,13400],[1950,13750],[1750,13750]],most:{"left":825,"right":975,"top":6700,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1800,13400],[2300,13400],[2100,13750],[2000,13750]],most:{"left":900,"right":1150,"top":6700,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:13450,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:13300,w:2100,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[2350,13400],[2850,13400],[2750,13900],[2100,13850]],most:{"left":1050,"right":1425,"top":6700,"bottom":6950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2400,13450],[2800,13450],[2700,13850],[2200,13800]],most:{"left":1100,"right":1400,"top":6725,"bottom":6925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2450,13500],[2750,13500],[2650,13800],[2300,13750]],most:{"left":1150,"right":1375,"top":6750,"bottom":6900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2550,y:13650,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2550,y:13650,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2100,14350],[2900,14350],[2200,14500],[2050,14500]],most:{"left":1025,"right":1450,"top":7175,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,14350],[3150,14350],[2450,14500],[2300,14500]],most:{"left":1150,"right":1575,"top":7175,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3250,14350],[3500,14400],[3500,14500],[2550,14500]],most:{"left":1275,"right":1750,"top":7175,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3550,y:14450,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3550,y:14450,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2950,y:13400,w:50,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2850,y:13400,w:50,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3050,y:13400,w:50,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3150,y:13400,w:50,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3250,y:13400,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3350,y:13400,w:50,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3450,y:13400,w:50,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2850,13400],[3650,13400],[3850,13500],[3550,13550]],most:{"left":1425,"right":1925,"top":6700,"bottom":6775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3750,13400],[4550,13400],[4750,13500],[4150,13600]],most:{"left":1875,"right":2375,"top":6700,"bottom":6800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3900,13550],[4050,13600],[3850,13650],[3650,13600]],most:{"left":1825,"right":2025,"top":6775,"bottom":6825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,14150],[4850,14400],[4100,14500],[3850,14500]],most:{"left":1925,"right":2425,"top":7075,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5050,14400],[5350,14500],[4600,14500],[4350,14500]],most:{"left":2175,"right":2675,"top":7200,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4600,13900],[5200,14350],[4950,14350],[4100,14100]],most:{"left":2050,"right":2600,"top":6950,"bottom":7175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4600,14000],[5050,14300],[4250,14100]],most:{"left":2125,"right":2525,"top":7000,"bottom":7150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,13900],[5050,13900],[5400,14400]],most:{"left":2350,"right":2700,"top":6950,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5600,y:14500,r:400,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5600,y:14500,r:350,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:14500,w:7600,h:400,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:5300,y:14000,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4900,y:13400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5150,y:13400,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5400,y:13400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:13000,w:2800,h:400,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5550,13400],[6350,13400],[5950,13550]],most:{"left":2775,"right":3175,"top":6700,"bottom":6775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,13400],[6600,13700],[6400,13750],[6000,13600]],most:{"left":3000,"right":3300,"top":6700,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6650,13750],[7050,13900],[6850,13950],[6450,13800]],most:{"left":3225,"right":3525,"top":6875,"bottom":6975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,13950],[7500,14100],[7300,14150],[6900,14000]],most:{"left":3450,"right":3750,"top":6975,"bottom":7075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6900,13650],[7300,13800],[7100,13850],[6700,13700]],most:{"left":3350,"right":3650,"top":6825,"bottom":6925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7350,13850],[7550,14050],[7150,13900]],most:{"left":3575,"right":3775,"top":6925,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7150,13550],[7550,13700],[7350,13750],[6950,13600]],most:{"left":3475,"right":3775,"top":6775,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6550,13450],[6950,13450],[7150,13500],[6650,13650]],most:{"left":3275,"right":3575,"top":6725,"bottom":6825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5500,y:14000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5600,14000],[5950,14000],[5800,14500]],most:{"left":2800,"right":2975,"top":7000,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,14000],[6200,14500],[5850,14500]],most:{"left":2925,"right":3100,"top":7000,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6100,14100],[7050,14500],[6250,14500]],most:{"left":3050,"right":3525,"top":7050,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6200,14200],[6950,14500],[6300,14500]],most:{"left":3100,"right":3475,"top":7100,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,14300],[6850,14500],[6350,14500]],most:{"left":3150,"right":3425,"top":7150,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[550,13850],[550,14500],[200,14500]],most:{"left":100,"right":275,"top":6925,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[500,14050],[500,14450],[300,14450]],most:{"left":150,"right":250,"top":7025,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[550,14250],[550,14500],[0,14500]],most:{"left":0,"right":275,"top":7125,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,14300],[400,14500],[0,14500]],most:{"left":0,"right":200,"top":7150,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,14050],[150,14500],[0,14500]],most:{"left":0,"right":75,"top":7025,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7700,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7750,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7800,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7850,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7900,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,13400],[8000,13400],[8000,14100],[7950,14100]],most:{"left":3800,"right":4000,"top":6700,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:6900,y:14900,w:600,h:800,speedInc:5,inView:false,speedChangePermanent:false,speedMult:5,})
C(1,[],[17],{type:[1,[],[17]],x:7000,y:14900,w:500,h:800,time:0,maxTime:1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,})
C(1,[],[1],{type:[1,[],[1]],x:6900,y:14900,w:100,h:800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:14900,w:200,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:15450,w:100,h:50,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:14900,w:1400,h:1400,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:5375,y:15425,w:1050,h:350,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5900,pivotY:15600,distToPivot:0,canCollide:true,cullingRadius:276.69929526473317,unSim:2.449999999999994,inView:false,initialRotation:0.026179938779914945,})
C(2,[],[11],{type:[2,[],[11]],points:[[6350,15450],[6700,15600],[6700,15650],[6350,15600]],most:{"left":3175,"right":3350,"top":7725,"bottom":7825},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[5450,15450],[5450,15650],[5100,15650],[5100,15550]],most:{"left":2550,"right":2725,"top":7725,"bottom":7825},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:5900,y:15600,r:254,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[7050,15400],[7050,15450],[6700,15650],[6700,15600]],most:{"left":3350,"right":3525,"top":7700,"bottom":7825},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:14900,w:100,h:500,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:15500,w:300,h:800,force:50000,dir:{"x":0,"y":50000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:35.414165666266506,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:14900,w:4500,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5000,y:15800,w:200,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:14900,w:700,h:500,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:16150,w:300,h:100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:4700,y:16100,w:50,h:200,points:[[2350,8050],[2475,8050]],speed:150,currentPoint:0.96,pointOn:{"x":2350,"y":8050},pointTo:{"x":2475,"y":8050},xv:150,yv:0,inView:false,path:[[4700,16100,5],[4950,16100,5]],})
C(1,[],[9],{type:[1,[],[9]],x:4700,y:16300,w:300,h:300,spawn:{"x":2425,"y":8225},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
let minX6064, minY6064, maxX6064, maxY6064;
    minX6064 = 4650;minY6064 = 16200;maxX6064 = 5050;maxY6064 = 16700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6064) && (player.pos.x) < md(maxX6064) && (player.pos.y) > md(minY6064) && (player.pos.y) < md(maxY6064)) {
            colors.background="#4d2346"; colors.tile="#280f2a";
        }
    },});
C(1,[],[27],{type:[1,[],[27]],x:4750,y:16350,w:200,h:200,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:15500,w:100,h:800,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4500,y:15400,w:100,h:900,force:50000,dir:{"x":0,"y":-50000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:35.414165666266506,})
C(1,[],[20],{h:900,w:100,y:15400,x:4500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.75;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:100,w:400,y:15400,x:4600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.75;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:4400,y:16300,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4600,y:16550,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,14600],[8000,15200],[7700,15200]],most:{"left":3850,"right":4000,"top":7300,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,14100],[8000,15200],[7900,15200]],most:{"left":3950,"right":4000,"top":7050,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[6900,14900],[7200,14900],[6900,15300]],most:{"left":3450,"right":3600,"top":7450,"bottom":7650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6900,14900],[7150,14900],[6900,15200]],most:{"left":3450,"right":3575,"top":7450,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7450,y:15600,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7450,y:15600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:15200,w:500,h:500,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,15600],[7500,15700],[7200,15700]],most:{"left":3600,"right":3750,"top":7800,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5200,14900],[5500,14900],[5200,15200]],most:{"left":2600,"right":2750,"top":7450,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,14900],[6600,14900],[6600,15200]],most:{"left":3150,"right":3300,"top":7450,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,16000],[6600,16300],[6300,16300]],most:{"left":3150,"right":3300,"top":8000,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5200,16000],[5500,16300],[5200,16300]],most:{"left":2600,"right":2750,"top":8000,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5250,14950],[5550,14950],[5250,15250]],most:{"left":2625,"right":2775,"top":7475,"bottom":7625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6250,14950],[6550,14950],[6550,15250]],most:{"left":3125,"right":3275,"top":7475,"bottom":7625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6550,15950],[6550,16250],[6250,16250]],most:{"left":3125,"right":3275,"top":7975,"bottom":8125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5260,15940],[5560,16240],[5260,16240]],most:{"left":2630,"right":2780,"top":7970,"bottom":8120},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5650,y:16250,w:500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5650,y:14900,w:500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5850,y:16200,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5850,y:14950,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5900,y:15600,r:170,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:16700,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:16300,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:17800,w:2400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:16800,w:100,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:16300,w:100,h:1400,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4250,y:16750,w:50,h:1050,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:17750,w:1150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2800,y:16300,w:50,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2850,y:16300,w:1450,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:16400,w:100,h:1400,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2100,y:16300,w:300,h:100,points:[[1050,8150],[1050,8850]],speed:476,currentPoint:1.6773333333335254,collidable:false,pointOn:{"x":1050,"y":8850},pointTo:{"x":1050,"y":8150},xv:2.914659381970701e-14,yv:-476,inView:false,path:[[2100,16300,15.866666666666667],[2100,17700,15.866666666666667]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:17700,w:300,h:100,points:[[1200,8850],[1200,8150]],speed:476,currentPoint:1.6773333333335099,collidable:false,pointOn:{"x":1200,"y":8150},pointTo:{"x":1200,"y":8850},xv:2.914659381970701e-14,yv:476,inView:false,path:[[2400,17700,15.866666666666667],[2400,16300,15.866666666666667]],boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:2350,y:17350,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:17350,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:16650,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:16650,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:2100,y:17250,w:150,h:300,points:[[1050,8625],[1275,8625]],speed:153,currentPoint:1.677333333333453,pointOn:{"x":1275,"y":8625},pointTo:{"x":1050,"y":8625},xv:-153,yv:1.8737096026954503e-14,inView:false,path:[[2100,17250,5.1],[2550,17250,5.1]],})
C(1,[0],[11],{type:[1,[0],[11]],x:2100,y:16550,w:150,h:300,points:[[1050,8275],[1275,8275]],speed:153,currentPoint:0.677333333333453,pointOn:{"x":1050,"y":8275},pointTo:{"x":1275,"y":8275},xv:153,yv:0,inView:false,path:[[2100,16550,5.1],[2550,16550,5.1]],})
C(0,[],[11],{type:[0,[],[11]],x:2750,y:17750,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:16300,w:2000,h:1600,canCollide:false,inView:false,boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:2050,y:16350,r:20,renderType:"circleR",radius:10,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1700,y:16300,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1780,y:16600,w:20,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1660,y:16680,w:20,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1620,y:16720,w:20,h:260,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1380,y:16820,w:140,h:140,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1420,y:16800,w:60,h:20,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1320,y:16920,w:20,h:20,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1280,y:16850,w:20,h:20,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1100,y:17040,w:120,h:120,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1030,y:17090,w:260,h:20,angle:2,rotateSpeed:0.03434343434343435,pivotX:1160,pivotY:17100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:65.19202405202648,unSim:2.449999999999994,inView:false,initialRotation:0.03490658503988659,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:700,y:17260,w:20,h:20,points:[[350,8630],[570,8630]],speed:150,currentPoint:0.6818181818181818,collidable:true,pointOn:{"x":350,"y":8630},pointTo:{"x":570,"y":8630},xv:150,yv:0,inView:false,path:[[700,17260,5],[1140,17260,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:700,y:17240,w:20,h:20,points:[[350,8620],[570,8620]],speed:150,currentPoint:1.6818181818181817,collidable:true,pointOn:{"x":570,"y":8620},pointTo:{"x":350,"y":8620},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[700,17240,5],[1140,17240,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,16300],[1700,16300],[0,17540]],most:{"left":0,"right":850,"top":8150,"bottom":8770},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2000,16880],[2000,17900],[300,17900]],most:{"left":150,"right":1000,"top":8440,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:680,y:17500,r:126,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[11],{type:[1,[1],[11]],x:240,y:17510,w:320,h:20,angle:2.5,rotateSpeed:0.04292929292929293,pivotX:400,pivotY:17520,distToPivot:0,canCollide:true,cullingRadius:80.15609770940699,unSim:2.449999999999994,inView:false,initialRotation:0.04363323129985824,})
C(1,[],[1],{type:[1,[],[1]],x:220,y:17720,w:160,h:20,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:100,y:17720,w:20,h:160,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1320,y:16520,w:20,h:40,points:[[660,8260],[750,8450]],speed:250,currentPoint:0.9331842139516263,collidable:true,pointOn:{"x":660,"y":8260},pointTo:{"x":750,"y":8450},xv:107.02158618476118,yv:225.9344597233847,inView:false,path:[[1320,16520,8.333333333333334],[1500,16900,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:17900,w:4300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:18200,w:4400,h:1800,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:18100,w:4400,h:100,force:6000,dir:{"x":6000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[15],{type:[1,[],[15]],x:0,y:18100,w:4300,h:100,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:16800,w:100,h:3200,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:16420,w:20,h:40,points:[[800,8210],[880,8390]],speed:250,currentPoint:1.1306506758279242,collidable:true,pointOn:{"x":880,"y":8390},pointTo:{"x":800,"y":8210},xv:-101.5346165133619,yv:-228.45288715506427,inView:false,path:[[1600,16420,8.333333333333334],[1760,16780,8.333333333333334]],boundPlayer:true,})
C(1,[],[20],{h:450,w:100,y:750,x:1800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:450,w:100,y:1100,x:1900,hex:'#FFFFFF',alpha:1,
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
C(1,[0],[11],{type:[1,[0],[11]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:0.5481481481481482,pointOn:{"x":2375,"y":8425},pointTo:{"x":2375,"y":9775},xv:1.8369701987210297e-14,yv:300,inView:false,path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:1.5481481481481483,pointOn:{"x":2375,"y":9775},pointTo:{"x":3725,"y":9775},xv:300,yv:0,inView:false,path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:2.5481481481481483,pointOn:{"x":3725,"y":9775},pointTo:{"x":3725,"y":8425},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:3.5481481481481483,pointOn:{"x":3725,"y":8425},pointTo:{"x":2375,"y":8425},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:0.925,pointOn:{"x":2675,"y":8725},pointTo:{"x":2675,"y":9525},xv:1.8369701987210297e-14,yv:300,inView:false,path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:1.925,pointOn:{"x":2675,"y":9525},pointTo:{"x":3475,"y":9525},xv:300,yv:0,inView:false,path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:2.925,pointOn:{"x":3475,"y":9525},pointTo:{"x":3475,"y":8725},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:3.925,pointOn:{"x":3475,"y":8725},pointTo:{"x":2675,"y":8725},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],})
C(1,[0],[11],{type:[1,[0],[11]],x:5850,y:17950,w:200,h:200,points:[[2925,8975],[2925,9325],[3275,9325],[3275,8975]],speed:300,currentPoint:2.1142857142857143,pointOn:{"x":3275,"y":9325},pointTo:{"x":3275,"y":8975},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[5850,17950,10],[5850,18650,10],[6550,18650,10],[6550,17950,10]],})
C(1,[],[6],{type:[1,[],[6]],x:6250,y:18350,w:100,h:100,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:18450,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:18750,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4900,y:19200,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4750,y:19200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:18300,w:300,h:1700,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,19150],[5000,19200],[4700,19450]],most:{"left":2350,"right":2500,"top":9575,"bottom":9725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5150,y:19450,w:100,h:190,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5150,y:19800,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5450,y:19700,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5850,y:19550,w:150,h:100,points:[[2925,9775],[2925,9925]],speed:150,currentPoint:0.4666666666666667,collidable:true,pointOn:{"x":2925,"y":9775},pointTo:{"x":2925,"y":9925},xv:9.184850993605149e-15,yv:150,inView:false,path:[[5850,19550,5],[5850,19850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6150,y:19550,w:150,h:100,points:[[3075,9775],[3075,9925]],speed:150,currentPoint:1.4666666666666668,collidable:true,pointOn:{"x":3075,"y":9925},pointTo:{"x":3075,"y":9775},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[6150,19550,5],[6150,19850,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6600,y:19500,w:100,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6800,y:19900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7000,y:19500,w:100,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6700,y:19600,w:300,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7450,y:19950,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7250,y:20000,w:400,h:150,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:7800,y:19650,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:19450,w:200,h:350,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:7400,y:19550,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7700,y:19100,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7400,y:18500,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7500,y:18550,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7750,y:18400,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7560,y:18050,w:300,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7450,y:17600,w:150,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7600,y:17350,w:250,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7400,y:17000,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7050,y:16800,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6450,y:16680,w:350,h:200,points:[[3225,8340],[3225,8440]],speed:150,currentPoint:1.7,collidable:true,pointOn:{"x":3225,"y":8440},pointTo:{"x":3225,"y":8340},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[6450,16680,5],[6450,16880,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6450,y:17010,w:350,h:200,points:[[3225,8505],[3225,8605]],speed:150,currentPoint:1.7,collidable:true,pointOn:{"x":3225,"y":8605},pointTo:{"x":3225,"y":8505},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[6450,17010,5],[6450,17210,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6450,y:17210,w:350,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6450,y:16680,w:350,h:210,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6110,y:16770,w:40,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5950,y:17240,w:25,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5550,y:16800,w:50,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5575,y:17090,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5210,y:16920,r:176,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4770,y:17270,r:176,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4900,y:17900,r:75,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:5350,y:17950,w:300,h:300,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:5350,y:18550,w:300,h:300,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
let minX6069, minY6069, maxX6069, maxY6069;
    minX6069 = 4350;minY6069 = 17900;maxX6069 = 4750;maxY6069 = 18400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6069) && (player.pos.x) < md(maxX6069) && (player.pos.y) > md(minY6069) && (player.pos.y) < md(maxY6069)) {
            colors.background="#843978"; colors.tile="#5e1d62";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:5850,y:19150,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6150,y:18950,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6450,y:19050,w:300,h:300,force:1000,dir:{"x":1000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[],[1],{type:[1,[],[1]],x:6750,y:19250,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6350,y:19050,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6950,y:18550,w:300,h:300,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[1],{type:[1,[],[1]],x:6850,y:18650,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6950,y:18100,w:300,h:300,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[1],{type:[1,[],[1]],x:7150,y:18200,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6850,y:17900,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6900,y:17600,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6750,y:17410,w:50,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6600,y:17650,w:50,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:17450,w:300,h:300,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[1],{type:[1,[],[1]],x:6000,y:18250,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5750,y:18400,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6000,y:18550,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6480,y:18550,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6650,y:18700,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6400,y:18600,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6150,y:18770,w:50,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6350,y:18700,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6200,y:18800,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5950,y:18600,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6000,y:18600,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6500,y:18100,w:150,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6350,y:17800,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6900,y:19000,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:5850,y:17950,w:200,h:200,points:[[2925,8975],[2925,9325],[3275,9325],[3275,8975]],speed:300,currentPoint:0.11428571428571428,pointOn:{"x":2925,"y":8975},pointTo:{"x":2925,"y":9325},xv:1.8369701987210297e-14,yv:300,inView:false,path:[[5850,17950,10],[5850,18650,10],[6550,18650,10],[6550,17950,10]],})
let minX6070, minY6070, maxX6070, maxY6070;
    minX6070 = 1300;minY6070 = 8350;maxX6070 = 1800;maxY6070 = 8850;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX6070) && (player.pos.x) < md(maxX6070) && (player.pos.y) > md(minY6070) && (player.pos.y) < md(maxY6070)) {
            colors.background="#456352"; colors.tile="#223f2f";
        }
    },});
C(1,[1],[11],{type:[1,[1],[11]],x:-325,y:570,w:450,h:60,angle:386,rotateSpeed:0.03434343434343435,pivotX:-100,pivotY:600,distToPivot:0,canCollide:true,cullingRadius:113.49559462816167,unSim:0,inView:true,initialRotation:6.736970912698112,})
C(0,[],[11],{type:[0,[],[11]],x:3950,y:12050,r:40,renderType:"circleR",radius:20,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:1930,y:1550,r:42,renderType:"circleR",radius:21,inView:false,})
let morphTriggered3 = false;let morphOffset3 = Math.random() * Math.PI * 2;
    C(1,[],[0],{h:100,w:100,y:500,x:400,
        cr:(e)=>{
            if(morphTriggered3 === false){
                e.pos.x = 400;
            }
            else {
                
                e.pos.x = -1E9;
                return;
                
            }
            ctx.beginPath();
            let middleX = e.topLeft.x + e.dimensions.x/2;
            let middleY = e.topLeft.y + e.dimensions.y/2;
            ctx.translate(middleX, middleY);
            ctx.fillStyle = colors.tile;
            for(let i = 0; i < 100; i++){
                const t = Math.PI * 2 * i / 100;
                const a = Math.sin(Date.now() / 1000 + morphOffset3) * 8;

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
        }
    });
C(0,[],[12],{type:[0,[],[12]],x:550,y:550,r:30,tpx:2050,tpy:1550,renderType:"circleR",radius:15,inView:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:4600,y:6600,w:100,h:100,points:[[2300,3300],[2450,3300]],speed:150,currentPoint:1.4666666666666668,pointOn:{"x":2450,"y":3300},pointTo:{"x":2300,"y":3300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[4600,6600,5],[4900,6600,5]],})
C(0,[],[11],{type:[0,[],[11]],x:4800,y:7925,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:4900,y:8000,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:4775,y:7800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:11250,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1950,y:11550,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:5150,y:10500,r:25,renderType:"circleR",radius:12.5,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:4050,y:10500,r:25,renderType:"circleR",radius:12.5,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:16300,w:1400,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:15700,w:1400,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:16600,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:16800,w:300,h:1200,canJump:true,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:-50,y:-50,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=qgdsW7bbG24",volume:1,startTime:0,inView:true,})
C(1,[],[26],{type:[1,[],[26]],x:3550,y:1550,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=4ySri_PGaf4",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:2700,y:3750,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=AzE0EgM_zVY",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:5700,y:6500,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=4nHf6gdiAMc",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:4450,y:11450,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=yHjj9fWTZdY",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:2500,y:12000,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=ZmwHJ3NWwdw",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:4700,y:16300,w:300,h:300,musicPath:"https://www.youtube.com/watch?v=4qe8FvP4RPA",volume:1,startTime:0,inView:false,})
C(1,[],[11],{type:[1,[],[11]],x:1425,y:2325,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1425,y:2625,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2050,y:2850,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2760,y:1820,w:80,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:200,y:280,w:200,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:800,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1650,y:775,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2850,y:3850,w:400,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3750,y:4450,w:100,h:550,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3150,y:4900,w:600,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3650,y:5850,w:100,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3750,y:6200,w:150,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3900,y:5600,w:100,h:700,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3950,y:5500,w:150,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4800,y:4050,w:350,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5700,y:4700,w:100,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5450,y:4800,w:250,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4600,y:4650,w:50,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4500,y:5150,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4600,y:5300,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4500,y:5450,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5550,y:5150,w:100,h:250,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5650,y:5150,w:250,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5800,y:5250,w:100,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5550,y:5700,w:350,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5550,y:5800,w:100,h:250,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5350,y:6050,w:300,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5350,y:6150,w:100,h:250,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5450,y:6300,w:550,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3050,y:5500,w:150,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4100,y:8075,w:675,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1500,y:8600,w:300,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5150,y:11450,w:40,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5310,y:11610,w:40,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4550,y:11900,w:100,h:150,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4250,y:12300,w:900,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4550,y:12650,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4850,y:12950,w:650,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5450,y:12875,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5450,y:12800,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4275,y:12400,w:50,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2650,y:14050,w:450,h:150,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4950,y:13600,w:450,h:150,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:350,y:13550,w:450,h:150,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1780,y:16500,w:100,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1900,y:16300,w:100,h:220,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1760,y:16560,w:20,h:140,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1680,y:16720,w:20,h:140,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1540,y:16900,w:80,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:16980,w:60,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1640,y:16900,w:80,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1320,y:16840,w:20,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1370,y:16780,w:180,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1280,y:16900,w:20,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1250,y:16780,w:20,h:80,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1220,y:16980,w:20,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1160,y:17160,w:60,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1160,y:17200,w:20,h:120,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:700,y:17240,w:460,h:40,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:680,y:17240,w:20,h:120,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:600,y:17360,w:20,h:120,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:540,y:17420,w:60,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:380,y:17640,w:20,h:120,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:200,y:17740,w:180,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:40,y:17700,w:160,h:20,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:40,y:17760,w:20,h:180,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:600,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:300,y:18175,w:300,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:18100,w:300,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:800,y:18100,w:300,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1900,y:18125,w:200,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1300,y:18175,w:400,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1100,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1700,y:18150,w:200,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2100,y:18100,w:200,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2300,y:18100,w:300,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4650,y:18125,w:200,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2800,y:18175,w:500,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:2600,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3500,y:18100,w:100,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3300,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3800,y:18100,w:100,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3600,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4100,y:18180,w:100,h:25,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:3900,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:4200,y:18100,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5050,y:17650,w:400,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:6200,y:17650,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:6400,y:18375,w:250,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:6200,y:18300,w:200,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:1210,y:17270,w:20,h:100,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:250,y:1900,w:50,h:50,size:30,text:"2",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3700,y:1700,w:50,h:50,size:30,text:"3",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4050,y:2750,w:50,h:50,size:30,text:"You need speed to pass",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2800,y:3900,w:50,h:50,size:30,text:"4",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5850,y:6650,w:50,h:50,size:30,text:"5",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2750,y:8150,w:50,h:50,size:30,text:"6",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2750,y:7950,w:50,h:50,size:30,text:"Look ahead!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4600,y:11600,w:50,h:50,size:30,text:"7",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5850,y:7050,w:50,h:50,size:30,text:"(6 button progress)",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:6250,y:6650,w:50,h:50,size:30,text:"(7 button progress)",angle:-90,story:false,fontSize:60,hex:"#FFFFFF",pivotX:6250,pivotY:6650,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:2650,y:12150,w:50,h:50,size:30,text:"8",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5050,y:13100,w:50,h:50,size:30,text:"Hold SHIFT",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:7750,y:15250,w:50,h:50,size:30,text:"Aim and GO!!!!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4850,y:16450,w:50,h:50,size:30,text:"9",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4550,y:18150,w:50,h:50,size:30,text:"10",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:700,y:450,w:50,h:50,size:30,text:"button progress",angle:5,story:false,fontSize:60,hex:"#FFFFFF",pivotX:700,pivotY:450,rotateSpeed:0,initialRotation:0.08726646259971647,})
C(3,[],[20],{type:[3,[],[20]],x:4180,y:11950,w:50,h:50,size:30,text:"!!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3250,y:12160,w:50,h:50,size:30,text:"!!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:4650,y:15900,w:50,h:50,size:30,text:"this conveyor is VERY fast",angle:-90,story:false,fontSize:60,hex:"#FFFFFF",pivotX:4650,pivotY:15900,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:2400,y:17850,w:50,h:50,size:30,text:"Hint: abuse the safes!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:350,y:18250,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:850,y:18050,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:1350,y:18250,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2350,y:18050,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:2850,y:18250,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3550,y:18050,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4150,y:18250,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(1,[0],[24],{type:[1,[0],[24]],x:2850,y:16350,w:150,h:150,points:[[1425,8175],[2050,8800]],speed:150,currentPoint:0.4186072144623453,pointOn:{"x":1425,"y":8175},pointTo:{"x":2050,"y":8800},xv:106.06601717798213,yv:106.06601717798212,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2850,16350,5],[4100,17600,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2850,y:16350,w:150,h:150,points:[[1425,8175],[2050,8800]],speed:150,currentPoint:1.4186072144623456,pointOn:{"x":2050,"y":8800},pointTo:{"x":1425,"y":8175},xv:-106.06601717798212,yv:-106.06601717798213,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2850,16350,5],[4100,17600,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5275,y:11525,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5310,y:11490,r:25,renderType:"circleR",radius:12.5,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:200,y:500,r:50,renderType:"circleR",radius:25,inView:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:-325,y:570,w:450,h:60,angle:296,rotateSpeed:0.03434343434343435,pivotX:-100,pivotY:600,distToPivot:0,canCollide:true,cullingRadius:113.49559462816167,unSim:0,inView:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:5.1661745859032155,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:500,y:950,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:1000,y:800,r:30,renderType:"circleR",radius:15,inView:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:1350,y:300,r:30,renderType:"circleR",radius:15,inView:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:1800,y:750,w:100,h:100,points:[[900,375],[900,550]],speed:150,currentPoint:0.11428571428571428,pointOn:{"x":900,"y":375},pointTo:{"x":900,"y":550},xv:9.184850993605149e-15,yv:150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[1800,750,5],[1800,1100,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:1900,y:1100,w:100,h:100,points:[[950,550],[950,725]],speed:150,currentPoint:1.1142857142857143,pointOn:{"x":950,"y":725},pointTo:{"x":950,"y":550},xv:9.184850993605149e-15,yv:-150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[1900,1100,5],[1900,1450,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:1300,y:1900,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:0,y:2300,w:100,h:100,points:[[0,1150],[200,1150]],speed:150,currentPoint:1.85,pointOn:{"x":200,"y":1150},pointTo:{"x":0,"y":1150},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[0,2300,5],[400,2300,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:400,y:2300,w:100,h:100,points:[[200,1150],[0,1150]],speed:150,currentPoint:1.85,pointOn:{"x":0,"y":1150},pointTo:{"x":200,"y":1150},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[400,2300,5],[0,2300,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:800,y:2350,w:100,h:100,points:[[400,1175],[500,1175]],speed:50,currentPoint:1.2333333333333893,pointOn:{"x":500,"y":1175},pointTo:{"x":400,"y":1175},xv:-50,yv:6.123233995736766e-15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[800,2350,1.6666666666666667],[1000,2350,1.6666666666666667]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:2025,y:3225,w:50,h:50,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:3250,distToPivot:100,canCollide:true,cullingRadius:117.67766952966369,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:-0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:2025,y:3225,w:50,h:50,angle:178.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:3250,distToPivot:100,canCollide:true,cullingRadius:117.67766952966369,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:3.115412714809878,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2760,w:140,h:80,points:[[1030,1380],[1360,1380]],speed:150,currentPoint:1.121212121212121,pointOn:{"x":1360,"y":1380},pointTo:{"x":1030,"y":1380},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2760,5],[2720,2760,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2660,w:140,h:80,points:[[1030,1330],[1360,1330]],speed:75,currentPoint:0.5606060606060606,pointOn:{"x":1030,"y":1330},pointTo:{"x":1360,"y":1330},xv:75,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2660,2.5],[2720,2660,2.5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2560,w:140,h:80,points:[[1030,1280],[1360,1280]],speed:225,currentPoint:1.6818181818181817,pointOn:{"x":1360,"y":1280},pointTo:{"x":1030,"y":1280},xv:-225,yv:2.7554552980815446e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2560,7.5],[2720,2560,7.5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2460,w:140,h:80,points:[[1030,1230],[1360,1230]],speed:150,currentPoint:1.121212121212121,pointOn:{"x":1360,"y":1230},pointTo:{"x":1030,"y":1230},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2460,5],[2720,2460,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2360,w:140,h:80,points:[[1030,1180],[1360,1180]],speed:150,currentPoint:0.12121212121212122,pointOn:{"x":1030,"y":1180},pointTo:{"x":1360,"y":1180},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2360,5],[2720,2360,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2260,w:140,h:80,points:[[1030,1130],[1360,1130]],speed:100,currentPoint:0.7474747474746795,pointOn:{"x":1030,"y":1130},pointTo:{"x":1360,"y":1130},xv:100,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2260,3.3333333333333335],[2720,2260,3.3333333333333335]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2160,w:140,h:80,points:[[1030,1080],[1360,1080]],speed:200,currentPoint:1.494949494949563,pointOn:{"x":1360,"y":1080},pointTo:{"x":1030,"y":1080},xv:-200,yv:2.4492935982947064e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2160,6.666666666666667],[2720,2160,6.666666666666667]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2060,y:2060,w:140,h:80,points:[[1030,1030],[1360,1030]],speed:100,currentPoint:1.7474747474746795,pointOn:{"x":1360,"y":1030},pointTo:{"x":1030,"y":1030},xv:-100,yv:1.2246467991473532e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2060,2060,3.3333333333333335],[2720,2060,3.3333333333333335]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[2700,1380],[2720,1400],[2500,1620],[2480,1600]],most:{"left":1240,"right":1360,"top":690,"bottom":810},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3450,y:1950,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3450,y:2650,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3650,y:2750,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3250,y:2550,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3700,y:2100,w:50,h:100,points:[[1850,1050],[1975,1050]],speed:150,currentPoint:0.96,pointOn:{"x":1850,"y":1050},pointTo:{"x":1975,"y":1050},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3700,2100,5],[3950,2100,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3950,y:2450,w:50,h:100,points:[[1975,1225],[1850,1225]],speed:150,currentPoint:0.96,pointOn:{"x":1975,"y":1225},pointTo:{"x":1850,"y":1225},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3950,2450,5],[3700,2450,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4100,y:2375,w:300,h:50,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:4250,pivotY:2400,distToPivot:0,canCollide:true,cullingRadius:76.03453162872775,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3600,y:3350,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[3250,3850],[3850,4450],[3750,4450],[3250,3950]],most:{"left":1625,"right":1925,"top":1925,"bottom":2225},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3100,y:5250,r:230,renderType:"circleR",radius:115,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[3250,5400],[3650,5800],[3600,5850],[3200,5450]],most:{"left":1600,"right":1825,"top":2700,"bottom":2925},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[4180,4280],[4290,4280],[4100,5450],[4000,5450]],most:{"left":2000,"right":2145,"top":2140,"bottom":2725},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4150,y:4025,w:700,h:150,angle:2,rotateSpeed:0.03434343434343435,pivotX:4500,pivotY:4100,distToPivot:0,canCollide:true,cullingRadius:178.97276329095442,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.03490658503988659,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4150,y:4025,w:700,h:150,angle:92,rotateSpeed:0.03434343434343435,pivotX:4500,pivotY:4100,distToPivot:0,canCollide:true,cullingRadius:178.97276329095442,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.6057029118347832,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[5150,4050],[5800,4700],[5700,4700],[5150,4150]],most:{"left":2575,"right":2900,"top":2025,"bottom":2350},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4650,y:4650,w:800,h:100,points:[[2325,2325],[2325,2475]],speed:150,currentPoint:0.4666666666666667,pointOn:{"x":2325,"y":2325},pointTo:{"x":2325,"y":2475},xv:9.184850993605149e-15,yv:150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4650,4650,5],[4650,4950,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4700,y:5900,r:350,renderType:"circleR",radius:175,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[5550,5300],[5550,5400],[5050,5900],[5000,5800]],most:{"left":2500,"right":2775,"top":2650,"bottom":2950},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5950,y:6450,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3250,y:5050,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5400,y:6700,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4600,y:6600,w:100,h:100,points:[[2300,3300],[2450,3300]],speed:150,currentPoint:0.4666666666666667,pointOn:{"x":2300,"y":3300},pointTo:{"x":2450,"y":3300},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4600,6600,5],[4900,6600,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4550,y:7150,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3650,y:6500,w:200,h:75,points:[[1825,3250],[1825,3362.5]],speed:150,currentPoint:1.2888888888888888,pointOn:{"x":1825,"y":3362.5},pointTo:{"x":1825,"y":3250},xv:9.184850993605149e-15,yv:-150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3650,6500,5],[3650,6725,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3150,y:6500,w:200,h:75,points:[[1575,3250],[1575,3362.5]],speed:150,currentPoint:0.28888888888888886,pointOn:{"x":1575,"y":3250},pointTo:{"x":1575,"y":3362.5},xv:9.184850993605149e-15,yv:150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3150,6500,5],[3150,6725,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2900,y:6950,w:150,h:100,points:[[1450,3475],[2025,3475]],speed:250,currentPoint:0.07246376811590301,pointOn:{"x":1450,"y":3475},pointTo:{"x":2025,"y":3475},xv:250,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2900,6950,8.333333333333334],[4050,6950,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2900,y:7150,w:150,h:100,points:[[1450,3575],[2025,3575]],speed:250,currentPoint:1.072463768115903,pointOn:{"x":2025,"y":3575},pointTo:{"x":1450,"y":3575},xv:-250,yv:3.061616997868383e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2900,7150,8.333333333333334],[4050,7150,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2900,y:7150,w:150,h:100,points:[[1450,3575],[2025,3575]],speed:250,currentPoint:0.07246376811590301,pointOn:{"x":1450,"y":3575},pointTo:{"x":2025,"y":3575},xv:250,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2900,7150,8.333333333333334],[4050,7150,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2900,y:6950,w:150,h:100,points:[[1450,3475],[2025,3475]],speed:250,currentPoint:1.072463768115903,pointOn:{"x":2025,"y":3475},pointTo:{"x":1450,"y":3475},xv:-250,yv:3.061616997868383e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2900,6950,8.333333333333334],[4050,6950,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4500,y:7500,w:500,h:100,angle:92.66666666666666,rotateSpeed:0.0457912457912458,pivotX:4750,pivotY:7550,distToPivot:0,canCollide:true,cullingRadius:127.47548783981962,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.617338440181412,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4920,y:7850,r:70,renderType:"circleR",radius:35,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4000,y:8100,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4000,y:8300,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4600,y:9000,w:200,h:200,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.013089969389957472,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4600,y:9000,w:200,h:200,angle:90.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.583886296184854,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4600,y:9000,w:200,h:200,angle:180.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:3.1546826229797507,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4600,y:9000,w:200,h:200,angle:270.75,rotateSpeed:0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:350,canCollide:true,cullingRadius:420.71067811865476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:4.725478949774647,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4400,y:9025,w:200,h:150,angle:-0.75,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:-0.013089969389957472,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4400,y:9025,w:200,h:150,angle:119.25,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:2.081305133003238,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4400,y:9025,w:200,h:150,angle:239.25,rotateSpeed:-0.012878787878787878,pivotX:4000,pivotY:9100,distToPivot:250,canCollide:true,cullingRadius:312.5,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:4.175700235396434,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4200,y:9050,w:200,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:4000,pivotY:9100,distToPivot:150,canCollide:true,cullingRadius:205.90169943749476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4200,y:9050,w:200,h:100,angle:181.5,rotateSpeed:0.025757575757575757,pivotX:4000,pivotY:9100,distToPivot:150,canCollide:true,cullingRadius:205.90169943749476,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:3.167772592369708,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:3850,y:9050,w:300,h:100,angle:178,rotateSpeed:-0.03434343434343435,pivotX:4000,pivotY:9100,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:3.1066860685499065,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:1550,y:8290,w:600,h:120,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:1850,pivotY:8350,distToPivot:0,canCollide:true,cullingRadius:152.97058540778355,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:-0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:1775,y:9125,w:50,h:50,angle:3,rotateSpeed:0.051515151515151514,pivotX:1800,pivotY:9150,distToPivot:0,canCollide:true,cullingRadius:17.67766952966369,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.05235987755982989,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:2000,y:8750,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:2575,y:8650,w:50,h:200,angle:3,rotateSpeed:0.051515151515151514,pivotX:2600,pivotY:8750,distToPivot:0,canCollide:true,cullingRadius:51.53882032022076,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.05235987755982989,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:1400,y:9400,w:1100,h:125,points:[[700,4700],[700,4887.5]],speed:150,currentPoint:1.9733333333333334,pointOn:{"x":700,"y":4887.5},pointTo:{"x":700,"y":4700},xv:9.184850993605149e-15,yv:-150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[1400,9400,5],[1400,9775,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:1450,y:9950,r:26,renderType:"circleR",radius:13,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:650,y:10950,r:24,renderType:"circleR",radius:12,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:900,y:10600,r:24,renderType:"circleR",radius:12,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[1800,11225],[2200,11525],[2200,11575],[1800,11275]],most:{"left":900,"right":1100,"top":5612.5,"bottom":5787.5},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:2450,y:11400,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2500,y:11300,w:200,h:200,points:[[1250,5650],[1450,5650],[1450,5450],[1250,5450]],speed:250,currentPoint:1.083333333333103,pointOn:{"x":1450,"y":5650},pointTo:{"x":1450,"y":5450},xv:1.5308084989341916e-14,yv:-250,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2500,11300,8.333333333333334],[2900,11300,8.333333333333334],[2900,10900,8.333333333333334],[2500,10900,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2500,y:11300,w:200,h:200,points:[[1250,5650],[1450,5650],[1450,5450],[1250,5450]],speed:250,currentPoint:3.083333333333103,pointOn:{"x":1250,"y":5450},pointTo:{"x":1250,"y":5650},xv:1.5308084989341916e-14,yv:250,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2500,11300,8.333333333333334],[2900,11300,8.333333333333334],[2900,10900,8.333333333333334],[2500,10900,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4000,y:10600,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5200,y:10600,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4100,y:10200,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5100,y:10200,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3950,y:11950,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3350,y:11850,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3350,y:12450,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3900,y:11800,w:150,h:100,points:[[1950,5900],[2075,5900]],speed:175,currentPoint:1.4533333333332865,pointOn:{"x":2075,"y":5900},pointTo:{"x":1950,"y":5900},xv:-175,yv:2.1431318985078682e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3900,11800,5.833333333333333],[4150,11800,5.833333333333333]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3300,y:11900,w:100,h:150,points:[[1650,5950],[1650,6125]],speed:250,currentPoint:1.523809523809011,pointOn:{"x":1650,"y":6125},pointTo:{"x":1650,"y":5950},xv:1.5308084989341916e-14,yv:-250,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3300,11900,8.333333333333334],[3300,12250,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:3400,y:10700,w:200,h:50,points:[[1700,5350],[1700,5525]],speed:250,currentPoint:1.523809523809011,pointOn:{"x":1700,"y":5525},pointTo:{"x":1700,"y":5350},xv:1.5308084989341916e-14,yv:-250,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[3400,10700,8.333333333333334],[3400,11050,8.333333333333334]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3800,y:11800,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3800,y:11200,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3350,y:12400,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3350,y:11900,r:30,renderType:"circleR",radius:15,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4900,y:11300,w:100,h:50,points:[[2450,5650],[2450,5700]],speed:35,currentPoint:1.7266666666684614,pointOn:{"x":2450,"y":5700},pointTo:{"x":2450,"y":5650},xv:2.1431318985078682e-15,yv:-35,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4900,11300,1.1666666666666667],[4900,11400,1.1666666666666667]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4900,y:11300,w:100,h:50,points:[[2450,5650],[2450,5700]],speed:35,currentPoint:0.7266666666684614,pointOn:{"x":2450,"y":5650},pointTo:{"x":2450,"y":5700},xv:2.1431318985078682e-15,yv:35,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4900,11300,1.1666666666666667],[4900,11400,1.1666666666666667]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5150,y:11790,w:120,h:120,points:[[2575,5895],[2940,5895]],speed:150,currentPoint:0.0136986301369863,pointOn:{"x":2575,"y":5895},pointTo:{"x":2940,"y":5895},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5150,11790,5],[5880,11790,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5150,y:11790,w:120,h:120,points:[[2575,5895],[2940,5895]],speed:150,currentPoint:1.0136986301369864,pointOn:{"x":2940,"y":5895},pointTo:{"x":2575,"y":5895},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5150,11790,5],[5880,11790,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:5650,y:10775,w:100,h:550,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5700,pivotY:11050,distToPivot:0,canCollide:true,cullingRadius:139.75424859373686,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:5650,y:10775,w:100,h:550,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:5700,pivotY:11050,distToPivot:0,canCollide:true,cullingRadius:139.75424859373686,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.5969762655748114,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[5150,12300],[5300,12450],[5150,12450]],most:{"left":2575,"right":2650,"top":6150,"bottom":6225},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4575,y:12075,w:50,h:50,points:[[2287.5,6037.5],[2287.5,6112.5]],speed:150,currentPoint:0.9333333333333333,pointOn:{"x":2287.5,"y":6037.5},pointTo:{"x":2287.5,"y":6112.5},xv:9.184850993605149e-15,yv:150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4575,12075,5],[4575,12225,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4575,y:12425,w:50,h:50,points:[[2287.5,6212.5],[2287.5,6287.5]],speed:150,currentPoint:0.9333333333333333,pointOn:{"x":2287.5,"y":6212.5},pointTo:{"x":2287.5,"y":6287.5},xv:9.184850993605149e-15,yv:150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4575,12425,5],[4575,12575,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[4550,12700],[4650,12700],[4850,12950],[4850,13000]],most:{"left":2275,"right":2425,"top":6350,"bottom":6500},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:4950,y:12980,w:200,h:40,angle:3,rotateSpeed:0.051515151515151514,pivotX:5050,pivotY:13000,distToPivot:0,canCollide:true,cullingRadius:50.99019513592785,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.05235987755982989,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:5250,y:12450,w:600,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5550,pivotY:12500,distToPivot:0,canCollide:true,cullingRadius:152.0690632574555,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:5250,y:12450,w:600,h:100,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:5550,pivotY:12500,distToPivot:0,canCollide:true,cullingRadius:152.0690632574555,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.5969762655748114,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4200,y:12850,w:150,h:100,points:[[2100,6425],[1750,6425]],speed:300,currentPoint:0.11428571428571428,pointOn:{"x":2100,"y":6425},pointTo:{"x":1750,"y":6425},xv:-300,yv:3.6739403974420595e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4200,12850,10],[3500,12850,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4250,y:12450,w:100,h:150,points:[[2125,6225],[2125,6400]],speed:150,currentPoint:1.1142857142857143,pointOn:{"x":2125,"y":6400},pointTo:{"x":2125,"y":6225},xv:9.184850993605149e-15,yv:-150,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4250,12450,5],[4250,12800,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3650,y:12900,r:40,renderType:"circleR",radius:20,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:1750,y:12925,w:400,h:50,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:1950,pivotY:12950,distToPivot:0,canCollide:true,cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:1750,y:12925,w:400,h:50,angle:91.5,rotateSpeed:0.025757575757575757,pivotX:1950,pivotY:12950,distToPivot:0,canCollide:true,cullingRadius:100.77822185373186,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:1.5969762655748114,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[800,13550],[1450,13700],[1450,13850],[800,13700]],most:{"left":400,"right":725,"top":6775,"bottom":6925},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[1450,13700],[2000,13950],[2000,14100],[1450,13850]],most:{"left":725,"right":1000,"top":6850,"bottom":7050},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[2000,13950],[2650,14050],[2650,14200],[2000,14100]],most:{"left":1000,"right":1325,"top":6975,"bottom":7100},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[3750,13950],[3750,14100],[3100,14200],[3100,14050]],most:{"left":1550,"right":1875,"top":6975,"bottom":7100},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[4300,13700],[4300,13850],[3750,14100],[3750,13950]],most:{"left":1875,"right":2150,"top":6850,"bottom":7050},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[4950,13600],[4950,13750],[4300,13850],[4300,13700]],most:{"left":2150,"right":2475,"top":6800,"bottom":6925},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[5400,13600],[6050,13750],[6050,13900],[5400,13750]],most:{"left":2700,"right":3025,"top":6800,"bottom":6950},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[6050,13750],[6600,14000],[6600,14150],[6050,13900]],most:{"left":3025,"right":3300,"top":6875,"bottom":7075},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[6600,14000],[7150,14250],[7150,14400],[6600,14150]],most:{"left":3300,"right":3575,"top":7000,"bottom":7200},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[7150,14250],[7700,14300],[7700,14450],[7150,14400]],most:{"left":3575,"right":3850,"top":7125,"bottom":7225},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:5375,y:15425,w:1050,h:350,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:5900,pivotY:15600,distToPivot:0,canCollide:true,cullingRadius:276.69929526473317,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.026179938779914945,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[6350,15450],[6700,15600],[6700,15650],[6350,15600]],most:{"left":3175,"right":3350,"top":7725,"bottom":7825},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[5450,15450],[5450,15650],[5100,15650],[5100,15550]],most:{"left":2550,"right":2725,"top":7725,"bottom":7825},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(2,[],[24],{type:[2,[],[24]],points:[[7050,15400],[7050,15450],[6700,15650],[6700,15600]],most:{"left":3350,"right":3525,"top":7700,"bottom":7825},renderType:"poly",inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},x:null,y:null,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4700,y:16100,w:50,h:200,points:[[2350,8050],[2475,8050]],speed:150,currentPoint:0.96,pointOn:{"x":2350,"y":8050},pointTo:{"x":2475,"y":8050},xv:150,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4700,16100,5],[4950,16100,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2100,y:17250,w:150,h:300,points:[[1050,8625],[1275,8625]],speed:153,currentPoint:1.677333333333453,pointOn:{"x":1275,"y":8625},pointTo:{"x":1050,"y":8625},xv:-153,yv:1.8737096026954503e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2100,17250,5.1],[2550,17250,5.1]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:2100,y:16550,w:150,h:300,points:[[1050,8275],[1275,8275]],speed:153,currentPoint:0.677333333333453,pointOn:{"x":1050,"y":8275},pointTo:{"x":1275,"y":8275},xv:153,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[2100,16550,5.1],[2550,16550,5.1]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:2750,y:17750,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:2050,y:16350,r:20,renderType:"circleR",radius:10,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:240,y:17510,w:320,h:20,angle:2.5,rotateSpeed:0.04292929292929293,pivotX:400,pivotY:17520,distToPivot:0,canCollide:true,cullingRadius:80.15609770940699,unSim:2.449999999999994,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:0.04363323129985824,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:0.5481481481481482,pointOn:{"x":2375,"y":8425},pointTo:{"x":2375,"y":9775},xv:1.8369701987210297e-14,yv:300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:1.5481481481481483,pointOn:{"x":2375,"y":9775},pointTo:{"x":3725,"y":9775},xv:300,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:2.5481481481481483,pointOn:{"x":3725,"y":9775},pointTo:{"x":3725,"y":8425},xv:1.8369701987210297e-14,yv:-300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4750,y:16850,w:400,h:400,points:[[2375,8425],[2375,9775],[3725,9775],[3725,8425]],speed:300,currentPoint:3.5481481481481483,pointOn:{"x":3725,"y":8425},pointTo:{"x":2375,"y":8425},xv:-300,yv:3.6739403974420595e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4750,16850,10],[4750,19550,10],[7450,19550,10],[7450,16850,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:0.925,pointOn:{"x":2675,"y":8725},pointTo:{"x":2675,"y":9525},xv:1.8369701987210297e-14,yv:300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:1.925,pointOn:{"x":2675,"y":9525},pointTo:{"x":3475,"y":9525},xv:300,yv:0,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:2.925,pointOn:{"x":3475,"y":9525},pointTo:{"x":3475,"y":8725},xv:1.8369701987210297e-14,yv:-300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5350,y:17450,w:300,h:300,points:[[2675,8725],[2675,9525],[3475,9525],[3475,8725]],speed:300,currentPoint:3.925,pointOn:{"x":3475,"y":8725},pointTo:{"x":2675,"y":8725},xv:-300,yv:3.6739403974420595e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5350,17450,10],[5350,19050,10],[6950,19050,10],[6950,17450,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5850,y:17950,w:200,h:200,points:[[2925,8975],[2925,9325],[3275,9325],[3275,8975]],speed:300,currentPoint:2.1142857142857143,pointOn:{"x":3275,"y":9325},pointTo:{"x":3275,"y":8975},xv:1.8369701987210297e-14,yv:-300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5850,17950,10],[5850,18650,10],[6550,18650,10],[6550,17950,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:5850,y:17950,w:200,h:200,points:[[2925,8975],[2925,9325],[3275,9325],[3275,8975]],speed:300,currentPoint:0.11428571428571428,pointOn:{"x":2925,"y":8975},pointTo:{"x":2925,"y":9325},xv:1.8369701987210297e-14,yv:300,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[5850,17950,10],[5850,18650,10],[6550,18650,10],[6550,17950,10]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:-325,y:570,w:450,h:60,angle:386,rotateSpeed:0.03434343434343435,pivotX:-100,pivotY:600,distToPivot:0,canCollide:true,cullingRadius:113.49559462816167,unSim:0,inView:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},initialRotation:6.736970912698112,innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:3950,y:12050,r:40,renderType:"circleR",radius:20,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:1930,y:1550,r:42,renderType:"circleR",radius:21,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[0],[24],{type:[1,[0],[24]],x:4600,y:6600,w:100,h:100,points:[[2300,3300],[2450,3300]],speed:150,currentPoint:1.4666666666666668,pointOn:{"x":2450,"y":3300},pointTo:{"x":2300,"y":3300},xv:-150,yv:1.8369701987210297e-14,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},path:[[4600,6600,5],[4900,6600,5]],innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4800,y:7925,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4900,y:8000,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4775,y:7800,r:50,renderType:"circleR",radius:25,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:5150,y:10500,r:25,renderType:"circleR",radius:12.5,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:4050,y:10500,r:25,renderType:"circleR",radius:12.5,inView:false,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1425,y:2325,w:50,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1425,y:2625,w:50,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2050,y:2850,w:100,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2760,y:1820,w:80,h:200,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:200,y:280,w:200,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:0,y:800,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1650,y:775,w:100,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2850,y:3850,w:400,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3750,y:4450,w:100,h:550,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3150,y:4900,w:600,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3650,y:5850,w:100,h:450,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3750,y:6200,w:150,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3900,y:5600,w:100,h:700,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3950,y:5500,w:150,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4800,y:4050,w:350,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5700,y:4700,w:100,h:200,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5450,y:4800,w:250,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4600,y:4650,w:50,h:450,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4500,y:5150,w:100,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4600,y:5300,w:100,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4500,y:5450,w:100,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5550,y:5150,w:100,h:250,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5650,y:5150,w:250,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5800,y:5250,w:100,h:450,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5550,y:5700,w:350,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5550,y:5800,w:100,h:250,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5350,y:6050,w:300,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5350,y:6150,w:100,h:250,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5450,y:6300,w:550,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3050,y:5500,w:150,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4100,y:8075,w:675,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1500,y:8600,w:300,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5150,y:11450,w:40,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5310,y:11610,w:40,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4550,y:11900,w:100,h:150,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4250,y:12300,w:900,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4550,y:12650,w:100,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4850,y:12950,w:650,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5450,y:12875,w:50,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5450,y:12800,w:50,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4275,y:12400,w:50,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2650,y:14050,w:450,h:150,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4950,y:13600,w:450,h:150,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:350,y:13550,w:450,h:150,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1780,y:16500,w:100,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1900,y:16300,w:100,h:220,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1760,y:16560,w:20,h:140,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1680,y:16720,w:20,h:140,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1540,y:16900,w:80,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1600,y:16980,w:60,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1640,y:16900,w:80,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1320,y:16840,w:20,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1370,y:16780,w:180,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1280,y:16900,w:20,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1250,y:16780,w:20,h:80,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1220,y:16980,w:20,h:200,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1160,y:17160,w:60,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1160,y:17200,w:20,h:120,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:700,y:17240,w:460,h:40,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:680,y:17240,w:20,h:120,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:600,y:17360,w:20,h:120,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:540,y:17420,w:60,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:380,y:17640,w:20,h:120,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:200,y:17740,w:180,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:40,y:17700,w:160,h:20,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:40,y:17760,w:20,h:180,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:600,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:300,y:18175,w:300,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:0,y:18100,w:300,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:800,y:18100,w:300,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1900,y:18125,w:200,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1300,y:18175,w:400,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1100,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1700,y:18150,w:200,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2100,y:18100,w:200,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2300,y:18100,w:300,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4650,y:18125,w:200,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2800,y:18175,w:500,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:2600,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3500,y:18100,w:100,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3300,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3800,y:18100,w:100,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3600,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4100,y:18180,w:100,h:25,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:3900,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:4200,y:18100,w:200,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:5050,y:17650,w:400,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:6200,y:17650,w:50,h:400,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:6400,y:18375,w:250,h:50,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:6200,y:18300,w:200,h:200,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:1210,y:17270,w:20,h:100,renderAbove:true,ir:1,or:1,o:1,vc:{"r":255,"g":255,"b":255},innerR:255,innerG:255,innerB:255,innerSize:0.1,outerR:255,outerG:255,outerB:255,outerSize:0.6,innerOpacity:0,outerOpacity:1,})


    mapDimensions.x=8000;
    mapDimensions.y=20000;

    spawnPosition.x=100;
    spawnPosition.y=100;
    shared.respawnPlayer();
    colors.background='#141f52'; colors.tile='#414381';

    // shared.C(0,[],[26],{
    //     x: spawnPosition.x,
    //     y: spawnPosition.y,
    //     r: 50,
    //     musicPath: 'https://www.youtube.com/watch?v=2C4lFUpI_4U'
    // });
});