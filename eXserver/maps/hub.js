// C(0,[3],[0],{r:120,y:800,x:450,sf:(e)=>{
//     colors.background=colourRgb(19,6,60); colors.tile=colourRgb(11,4,34);
//     if ((makeNumber(Math.sqrt(Math.pow(((e.sat.r) + (generateTopLeftCoordinates(e)[0])) - (players[selfId].pos.x), 2) + Math.pow(((generateTopLeftCoordinates(e)[1]) + (e.sat.r)) - (players[selfId].pos.y), 2)))) <= (e.sat.r) + 51) {
//       colors.background=colourRgb(20,20,20); colors.tile=colourRgb(0,0,0);
//     }
//   },});
//   C(0,[],[6],{r:120,y:100,x:450,});
//   C(3,[],[20],{fontSize:40,text:'Touch me!',y:800,x:450,hex:colourRgb(100,100,100),});

///               ^^^^^ OLD ^^^^^
///               vvvvv NEW vvvvv

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

C(1,[],[26],{musicPath:'https://www.youtube.com/watch?v=9EHXqi0ez54',x:4800,y:4800,w:400,h:400});