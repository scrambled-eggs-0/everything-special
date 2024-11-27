window.loadMap((shared)=>{
    let counter = 4000;
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, input} = shared;
    C(1,[],[18],{type:[1,[],[18]],x:1300,y:4000,w:1100,h:1700,size:15,inView:false,sizeChangePermanent:false,sizeMult:0.6122448979591837,})
C(1,[],[18],{type:[1,[],[18]],x:13000,y:-200,w:1300,h:3300,size:18.5,inView:false,sizeChangePermanent:false,sizeMult:0.7551020408163265,})
C(1,[],[18],{type:[1,[],[18]],x:17700,y:5550,w:700,h:750,size:2,inView:false,sizeChangePermanent:false,sizeMult:0.08163265306122448,})
C(1,[],[18],{type:[1,[],[18]],x:18900,y:1050,w:1100,h:1100,size:12.5,inView:false,sizeChangePermanent:false,sizeMult:0.5102040816326531,})
C(1,[],[18],{type:[1,[],[18]],x:11150,y:1200,w:1000,h:500,size:12,inView:false,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[18],{type:[1,[],[18]],x:10600,y:1700,w:1550,h:1300,size:6,inView:false,sizeChangePermanent:false,sizeMult:0.24489795918367346,})
C(1,[],[9],{type:[1,[],[9]],x:400,y:6100,w:400,h:400,spawn:{"x":300,"y":3150},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[8],{type:[1,[],[8]],x:850,y:8850,w:300,h:300,id:4,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:850,y:8850,w:300,h:300,id:3,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:850,y:8850,w:300,h:300,id:2,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,8050],[250,8050],[0,8350]],most:{"left":0,"right":125,"top":4025,"bottom":4175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:550,y:8050,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:550,y:8650,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:5000,y:7700,w:300,h:300,speedInc:0.5,inView:false,speedChangePermanent:false,speedMult:0.5,})
C(1,[],[19],{type:[1,[],[19]],x:5400,y:6900,w:700,h:300,speedInc:0.5,inView:false,speedChangePermanent:false,speedMult:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:6100,w:400,h:400,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:5950,w:200,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:200,y:5750,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:850,y:5650,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4600,y:6900,w:400,h:300,force:1750,dir:{"x":0,"y":1750},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(1,[],[1],{type:[1,[],[1]],x:3.061616997868383e-15,y:4950,w:1200,h:200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[24],{type:[1,[],[24]],x:1300,y:4000,w:1100,h:1700,ir:0.2,or:0.4,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.020000000000000004,outerR:0,outerG:0,outerB:0,outerSize:0.24,innerOpacity:0,outerOpacity:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:500,y:4300,w:700,h:100,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:850,pivotY:4350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:34.92499999999866,inView:false,initialRotation:-0.02617993877991494,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:4900,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2200,y:4750,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:4350,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2250,y:4000,w:150,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2250,y:4200,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2000,y:5400,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:2400,y:6550,w:300,h:250,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[17],{type:[1,[],[17]],x:3350,y:6600,w:850,h:1400,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,6150],[7300,6825],[7100,6825],[6925,6300]],most:{"left":3462.5,"right":3650,"top":3075,"bottom":3412.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7200,y:3800,r:350,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8500,y:1450,w:800,h:100,angle:1,rotateSpeed:0.017171717171717175,pivotX:8900,pivotY:1500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:201.55644370746373,unSim:34.92499999999866,inView:false,initialRotation:0.017453292519943295,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8300,y:4700,w:200,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8500,y:4600,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7900,y:4550,w:750,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:8275,pivotY:4600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:189.15932438026945,unSim:34.92499999999866,inView:false,initialRotation:0.02617993877991494,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7650,y:4600,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7800,y:5600,w:400,h:325,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{h:550,w:200,y:6700,x:14550,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[0],[1],{type:[1,[0],[1]],x:14550,y:6600,w:200,h:50,points:[[7275,3300],[7275,3600]],speed:150,currentPoint:1.4708333333333332,collidable:true,pointOn:{"x":7275,"y":3600},pointTo:{"x":7275,"y":3300},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[14550,6600,5],[14550,7200,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14650,6550],[14550,6700],[14500,6600]],most:{"left":7250,"right":7325,"top":3275,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18800,7750],[18700,7850],[18600,7850]],most:{"left":9300,"right":9400,"top":3875,"bottom":3925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19100,7750],[19150,7800],[19100,7800]],most:{"left":9550,"right":9575,"top":3875,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19400,7400],[19350,7500],[19300,7500]],most:{"left":9650,"right":9700,"top":3700,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19700,7450],[19800,7450],[19650,7550]],most:{"left":9825,"right":9900,"top":3725,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18650,5950],[18600,6050],[18500,6000]],most:{"left":9250,"right":9325,"top":2975,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17400,2300],[17550,2350],[17650,2550],[17450,2450]],most:{"left":8700,"right":8825,"top":1150,"bottom":1275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9300,2450],[9100,2700],[9050,2550]],most:{"left":4525,"right":4650,"top":1225,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8550,y:5950,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8550,y:5500,w:100,h:325,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11850,y:6000,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12000,y:5750,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{h:200,w:850,y:7600,x:12550,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[20],{h:900,w:1100,y:6200,x:12500,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[0],[1],{type:[1,[0],[1]],x:12550,y:7600,w:100,h:200,points:[[6275,3800],[6650,3800]],speed:125,currentPoint:1.6472222222256119,collidable:true,pointOn:{"x":6650,"y":3800},pointTo:{"x":6275,"y":3800},xv:-125,yv:1.5308084989341916e-14,inView:false,path:[[12550,7600,4.166666666666667],[13300,7600,4.166666666666667]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8550,y:1450,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14450,7400],[14550,7600],[14350,7450]],most:{"left":7175,"right":7275,"top":3700,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:14350,y:7200,w:450,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:14300,y:6175,w:250,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14750,5850],[14950,5850],[14950,6250]],most:{"left":7375,"right":7475,"top":2925,"bottom":3125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:14300,y:6175,w:500,h:50,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:14550,pivotY:6200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:34.92499999999866,inView:false,initialRotation:0.01308996938995747,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:14350,y:5300,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14550,y:5650,w:100,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14400,y:5500,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14650,y:5650,r:100,renderType:"circle",inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:12550,y:1550,w:50,h:150,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[2],{type:[1,[],[2]],x:16000,y:4000,w:200,h:200,effect:360,inView:false,bounciness:144.0576230492197,decay:0.5,})
C(1,[],[20],{h:100,w:1200,y:4900,x:15000,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[0],[1],{type:[1,[0],[1]],x:15000,y:4900,w:100,h:100,points:[[7500,2450],[8050,2450]],speed:150,currentPoint:1.5295454545454545,collidable:true,pointOn:{"x":8050,"y":2450},pointTo:{"x":7500,"y":2450},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15000,4900,5],[16100,4900,5]],boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15975,y:5125,w:50,h:550,angle:-0.75,rotateSpeed:-0.012878787878787878,pivotX:16000,pivotY:5400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:138.06701271484076,unSim:34.92499999999866,inView:false,initialRotation:-0.01308996938995747,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19650,y:5650,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{h:800,w:300,y:7200,x:16300,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[20],{h:300,w:850,y:1200,x:15600,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[20],{h:200,w:500,y:800,x:9400,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.5;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[0],{type:[1,[],[0]],x:15100,y:7550,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15450,y:7200,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15750,y:7550,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15450,y:7850,w:100,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15500,7950],[15600,8000],[15400,8000]],most:{"left":7700,"right":7800,"top":3975,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15400,7200],[15600,7200],[15500,7250]],most:{"left":7700,"right":7800,"top":3600,"bottom":3625},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15900,7500],[15900,7700],[15850,7600]],most:{"left":7925,"right":7950,"top":3750,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15100,7500],[15150,7600],[15100,7700]],most:{"left":7550,"right":7575,"top":3750,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:16875,y:7225,w:550,h:50,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:17150,pivotY:7250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:138.06701271484076,unSim:34.92499999999866,inView:false,initialRotation:-0.02617993877991494,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16300,y:7200,w:300,h:100,points:[[8150,3600],[8150,3950]],speed:150,currentPoint:0.975,collidable:true,pointOn:{"x":8150,"y":3600},pointTo:{"x":8150,"y":3950},xv:9.184850993605149e-15,yv:150,inView:false,path:[[16300,7200,5],[16300,7900,5]],boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:18900,y:4000,w:1100,h:1100,spawn:{"x":9725,"y":2275},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[19],{type:[1,[],[19]],x:17700,y:5650,w:700,h:650,speedInc:0.35,inView:false,speedChangePermanent:false,speedMult:0.35,})
C(1,[],[1],{type:[1,[],[1]],x:18100,y:6650,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:17800,y:6650,w:600,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:18100,pivotY:6700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:34.92499999999866,inView:false,initialRotation:0.02617993877991494,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17800,y:7150,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19250,y:6700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18900,y:7000,r:56,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18912.5,y:6400,w:375,h:50,angle:-1.0833333333333333,rotateSpeed:-0.018602693602693603,pivotX:19100,pivotY:6425,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:94.57966219013473,unSim:34.92499999999866,inView:false,initialRotation:-0.0189077335632719,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19000,6100],[19100,6150],[18950,6200]],most:{"left":9475,"right":9550,"top":3050,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[12],{type:[0,[],[12]],x:19300,y:5850,r:50,tpx:19800,tpy:5940,renderType:"circleR",radius:25,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:19550,y:6050,r:50,tpx:19800,tpy:5940,renderType:"circleR",radius:25,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:19500,y:5450,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19200,y:5200,r:70,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:17700,y:5050,r:125,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18100,y:5025,r:75,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18050,y:4500,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18450,y:4900,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:18900,y:2200,w:1100,h:800,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[19],{type:[1,[],[19]],x:18875,y:2175,w:1150,h:850,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:0,w:100,h:450,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1200,w:1300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:750,w:100,h:450,canJump:true,inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,0],[200,0],[0,100]],most:{"left":0,"right":100,"top":0,"bottom":50},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1100,0],[1200,0],[1200,200]],most:{"left":550,"right":600,"top":0,"bottom":100},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1200,1100],[1200,1200],[1000,1200]],most:{"left":500,"right":600,"top":550,"bottom":600},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,1000],[100,1200],[0,1200]],most:{"left":0,"right":50,"top":500,"bottom":600},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1300,700],[1300,750],[1200,750]],most:{"left":600,"right":650,"top":350,"bottom":375},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1200,450],[1300,450],[1300,500]],most:{"left":600,"right":650,"top":225,"bottom":250},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[20],{h:450,w:50,y:375,x:575,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:200,y:325,x:500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:200,y:825,x:500,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[1300,0],[2100,0],[2100,400],[1300,500]],most:{"left":650,"right":1050,"top":0,"bottom":250},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2100,600],[2100,1300],[1300,1300],[1300,700]],most:{"left":650,"right":1050,"top":300,"bottom":650},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[1600,462.5],[1500,500],[1400,487.5]],most:{"left":700,"right":800,"top":231.25,"bottom":250},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1900,600],[2100,600],[1900,625]],most:{"left":950,"right":1050,"top":300,"bottom":312.5},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[2100,0],[2900,0],[2900,500],[2100,400]],most:{"left":1050,"right":1450,"top":0,"bottom":250},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,450],[2900,500],[2500,650]],most:{"left":1250,"right":1450,"top":225,"bottom":325},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,950],[2900,1100],[2750,1000]],most:{"left":1375,"right":1450,"top":475,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1300,w:2900,h:1700,canJump:true,inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[2900,0],[3300,0],[3300,300],[2900,500]],most:{"left":1450,"right":1650,"top":0,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3300,0],[3700,0],[3700,350],[3300,300]],most:{"left":1650,"right":1850,"top":0,"bottom":175},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3700,0],[3900,0],[3900,550],[3700,350]],most:{"left":1850,"right":1950,"top":0,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2900,1100],[3300,1250],[3300,1400],[2900,1400]],most:{"left":1450,"right":1650,"top":550,"bottom":700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3300,y:1250,w:350,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3900,1050],[3900,1400],[3650,1400],[3650,1250]],most:{"left":1825,"right":1950,"top":525,"bottom":700},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:3400,y:800,r:224,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:1400,w:1000,h:1600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4150,850],[4350,950],[3900,1200],[3900,1050]],most:{"left":1950,"right":2175,"top":425,"bottom":600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3900,0],[4800,0],[4550,750],[3900,550]],most:{"left":1950,"right":2400,"top":0,"bottom":375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4700,1000],[4850,1000],[4850,1100],[4700,1600]],most:{"left":2350,"right":2425,"top":500,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5000,1000],[5150,1000],[5150,1600],[5000,1100]],most:{"left":2500,"right":2575,"top":500,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5150,y:1000,w:650,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:0,w:100,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:1450,w:300,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5700,800],[5700,1000],[5600,1000]],most:{"left":2800,"right":2850,"top":400,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,300],[5400,500],[4600,600]],most:{"left":2300,"right":2700,"top":150,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5100,0],[5700,0],[5250,100]],most:{"left":2550,"right":2850,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[8],{type:[1,[],[8]],x:4850,y:1000,w:150,h:100,coins:2,currentCoins:2,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:2,})
C(1,[],[7],{type:[1,[],[7]],x:4900,y:150,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,1000],[4700,1450],[4200,1450]],most:{"left":2100,"right":2350,"top":500,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4100,y:2000,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:1600,w:100,h:1400,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4400,1600],[4600,1600],[4600,2450]],most:{"left":2200,"right":2300,"top":800,"bottom":1225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3900,2200],[4100,2200],[3900,3000]],most:{"left":1950,"right":2050,"top":1100,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4600,2450],[4600,3000],[3900,3000]],most:{"left":1950,"right":2300,"top":1225,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3900,y:2000,w:200,h:200,canJump:true,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:4050,y:2600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{h:40,w:40,y:500,x:940,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:40,w:260,y:580,x:800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:40,w:40,y:620,x:980,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:40,w:40,y:540,x:980,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:40,w:40,y:660,x:940,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:5150,y:1100,w:650,h:500,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:1600,w:1400,h:300,force:850,dir:{"x":850,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.6020408163265306,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:1900,w:1100,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:0,w:300,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:1900,w:300,h:1100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,1850],[5650,1900],[5350,1900]],most:{"left":2675,"right":2825,"top":925,"bottom":950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5700,1600],[5900,1600],[5800,1750]],most:{"left":2850,"right":2950,"top":800,"bottom":875},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,1750],[6100,1900],[5900,1900]],most:{"left":2950,"right":3050,"top":875,"bottom":950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:2500,w:1900,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:0,w:1100,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:0,w:100,h:2200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:6100,y:1400,w:1100,h:1100,spawn:{"x":3325,"y":975},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:400,w:50,y:1750,x:6700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:300,y:2150,x:6500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:300,y:1700,x:6500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:50,y:1750,x:6550,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[7050,1350],[7250,1350],[7250,1700]],most:{"left":3525,"right":3625,"top":675,"bottom":850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6050,1350],[6350,1350],[6050,1550]],most:{"left":3025,"right":3175,"top":675,"bottom":775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,2300],[6200,2500],[6100,2500]],most:{"left":3050,"right":3100,"top":1150,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7300,2400],[7300,2500],[7100,2500]],most:{"left":3550,"right":3650,"top":1200,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7200,2200],[7300,2200],[7300,2250]],most:{"left":3600,"right":3650,"top":1100,"bottom":1125},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:2400,w:700,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7300,1100],[7800,1100],[7300,2250]],most:{"left":3650,"right":3900,"top":550,"bottom":1125},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:7500,y:1900,r:212,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:7950,y:1650,w:50,h:550,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:8000,y:1550,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7950,y:2350,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7450,y:300,w:550,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7400,300],[7450,300],[7450,400]],most:{"left":3700,"right":3725,"top":150,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:7849.993389408044,y:701.8180352796054,w:100,h:100,angle:0.4166666666666667,rotateSpeed:0.007154882154882155,pivotX:7650,pivotY:750,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:0,})
C(1,[1],[0],{type:[1,[1],[0]],x:7350.006610591956,y:698.1819647203945,w:100,h:100,angle:180.41666666666669,rotateSpeed:0.007154882154882155,pivotX:7650,pivotY:750,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[7300,0],[8000,0],[7300,100]],most:{"left":3650,"right":4000,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:7600,y:25,w:200,h:50,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:7700,pivotY:50,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:34.92499999999866,inView:false,initialRotation:0,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:300,w:400,h:2700,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,0],[8700,0],[8400,100]],most:{"left":4000,"right":4350,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8700,0],[8800,0],[8800,400]],most:{"left":4350,"right":4400,"top":0,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8550,350],[8400,650],[8400,400]],most:{"left":4200,"right":4275,"top":175,"bottom":325},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:8325,y:325,w:450,h:50,angle:1.25,rotateSpeed:0.021464646464646464,pivotX:8550,pivotY:350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:113.19231422671771,unSim:34.92499999999866,inView:false,initialRotation:0,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:0,w:500,h:600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8800,600],[9300,600],[9300,1500]],most:{"left":4400,"right":4650,"top":300,"bottom":750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8400,650],[8600,1500],[8400,2300]],most:{"left":4200,"right":4300,"top":325,"bottom":1150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9300,1500],[9300,2400],[8500,2400]],most:{"left":4250,"right":4650,"top":750,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[8500,1100],[8750,1100],[8550,1300]],most:{"left":4250,"right":4375,"top":550,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8900,1950],[8650,2250],[8650,2150]],most:{"left":4325,"right":4450,"top":975,"bottom":1125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:0,w:100,h:2400,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8500,2400],[9400,2400],[8950,2600]],most:{"left":4250,"right":4700,"top":1200,"bottom":1300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9350,2700],[9500,3000],[9050,3000]],most:{"left":4525,"right":4750,"top":1350,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,2400],[9700,2400],[9700,2800]],most:{"left":4700,"right":4850,"top":1200,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,2000],[9700,2400],[9400,2400]],most:{"left":4700,"right":4850,"top":1000,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:8600,y:2900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[8400,2800],[8850,3000],[8400,3000]],most:{"left":4200,"right":4425,"top":1400,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[9400,2800],[9500,2950],[9500,3000]],most:{"left":4700,"right":4750,"top":1400,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9700,2400],[9800,2600],[9700,2800]],most:{"left":4850,"right":4900,"top":1200,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10000,1950],[10000,3000],[9900,2600]],most:{"left":4950,"right":5000,"top":975,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:10000,y:1200,w:600,h:1800,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9900,y:1850,r:250,renderType:"circle",inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[9400,1700],[9450,1800],[9500,2150],[9400,2000]],most:{"left":4700,"right":4750,"top":850,"bottom":1075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9650,y:1200,w:350,h:650,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:9550,y:1400,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9400,y:800,w:100,h:200,points:[[4700,400],[4900,400]],speed:50,currentPoint:0.7354166666730225,collidable:true,pointOn:{"x":4700,"y":400},pointTo:{"x":4900,"y":400},xv:50,yv:0,inView:false,path:[[9400,800,1.6666666666666667],[9800,800,1.6666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:550,w:300,h:650,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9900,1050],[9900,1200],[9650,1200]],most:{"left":4825,"right":4950,"top":525,"bottom":600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,550],[9650,550],[9400,700]],most:{"left":4700,"right":4825,"top":275,"bottom":350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:0,w:250,h:550,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9650,0],[9900,0],[9650,550]],most:{"left":4825,"right":4950,"top":0,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10200,150],[10200,550],[9900,550]],most:{"left":4950,"right":5100,"top":75,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:10200,y:1100,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:0,w:850,h:600,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:10200,y:0,w:1100,h:1100,spawn:{"x":5375,"y":275},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:500,w:50,y:300,x:10725,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:300,x:10625,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:300,x:10825,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:350,y:300,x:10575,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:350,y:800,x:10575,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[11300,1000],[11300,1100],[11000,1100]],most:{"left":5500,"right":5650,"top":500,"bottom":550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10200,950],[10350,1100],[10200,1100]],most:{"left":5100,"right":5175,"top":475,"bottom":550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11050,0],[11300,0],[11300,150]],most:{"left":5525,"right":5650,"top":0,"bottom":75},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9900,0],[10350,0],[10200,50]],most:{"left":4950,"right":5175,"top":0,"bottom":25},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:850,w:100,h:350,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[11400,800],[11400,850],[11300,850]],most:{"left":5650,"right":5700,"top":400,"bottom":425},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11300,600],[12150,600],[12150,900]],most:{"left":5650,"right":6075,"top":300,"bottom":450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,250],[8050,300],[7950,300]],most:{"left":3975,"right":4025,"top":125,"bottom":150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,1200],[11400,1200],[10600,3000]],most:{"left":5300,"right":5700,"top":600,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:12150,y:1700,w:850,h:1200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:11350,y:1500,w:800,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:12150,y:2900,w:850,h:100,speedInc:3,inView:false,speedChangePermanent:false,speedMult:3,})
C(1,[],[1],{type:[1,[],[1]],x:12000,y:2500,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11900,y:2550,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11200,y:2800,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11250,y:2800,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11150,1750],[11650,2750],[11000,2100]],most:{"left":5500,"right":5825,"top":875,"bottom":1375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[8],{type:[1,[],[8]],x:12200,y:2900,w:750,h:100,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[7],{type:[1,[],[7]],x:10750,y:2850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[14300,2600],[14300,3000],[13200,3000]],most:{"left":6600,"right":7150,"top":1300,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13000,1700],[13800,2400],[13000,2600]],most:{"left":6500,"right":6900,"top":850,"bottom":1300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[13400,2500],[13300,2750],[13200,2550]],most:{"left":6600,"right":6700,"top":1250,"bottom":1375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13750,2650],[13900,2750],[13500,2900]],most:{"left":6750,"right":6950,"top":1325,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[14300,2050],[14300,2750],[14000,2750]],most:{"left":7000,"right":7150,"top":1025,"bottom":1375},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:200,w:500,h:2800,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[13450,2100],[14050,2150],[13800,2400]],most:{"left":6725,"right":7025,"top":1050,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,1350],[14300,1900],[13350,1750]],most:{"left":6675,"right":7150,"top":675,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:13075,y:1000,w:1150,h:100,angle:-0.75,rotateSpeed:-0.012878787878787878,pivotX:13650,pivotY:1050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:288.5849095153799,unSim:34.92499999999866,inView:false,initialRotation:-0.01308996938995747,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13000,y:1000,w:650,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,1100],[13100,1500],[13000,1550]],most:{"left":6500,"right":6550,"top":550,"bottom":775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,200],[14300,900],[14000,450]],most:{"left":7000,"right":7150,"top":100,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,0],[13950,0],[13000,1000]],most:{"left":6500,"right":6975,"top":0,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[14800,100],[14800,200],[14300,200]],most:{"left":7150,"right":7400,"top":50,"bottom":100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:14800,y:0,w:1100,h:1100,spawn:{"x":7675,"y":275},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:1100,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:1050,w:400,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:0,w:100,h:850,canJump:true,inView:false,})
var minX4024, minY4024, maxX4024, maxY4024;
            minX4024 = 14650;minY4024 = -100;maxX4024 = 14950;maxY4024 = 250;
            C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
                const player = shared.players[shared.selfId];
                if ((player.pos.x) > md(minX4024) && (player.pos.x) < md(maxX4024) && (player.pos.y) > md(minY4024) && (player.pos.y) < md(maxY4024)) {
                    colors.background="#477655"; colors.tile="#16372d";
                }
            },});
C(1,[],[20],{h:500,w:50,y:300,x:15100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:150,y:800,x:15050,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:150,y:250,x:15050,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:250,x:15350,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:450,x:15400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:650,x:15450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:50,y:800,x:15500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:650,x:15550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:450,x:15600,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:250,x:15650,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:0,y:3000,w:19800,h:1000,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15900,850],[16000,850],[16000,900]],most:{"left":7950,"right":8000,"top":425,"bottom":450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,1000],[16000,1050],[15900,1050]],most:{"left":7950,"right":8000,"top":500,"bottom":525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,600],[16150,900],[16000,900]],most:{"left":8000,"right":8075,"top":300,"bottom":450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,100],[16300,1000],[16150,550]],most:{"left":8075,"right":8150,"top":50,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:16000,y:1000,w:300,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16300,y:100,w:100,h:1100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[16000,0],[16150,0],[16000,400]],most:{"left":8000,"right":8075,"top":0,"bottom":200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16400,y:1000,w:700,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:0,w:100,h:800,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[16400,200],[16500,300],[16400,800]],most:{"left":8200,"right":8250,"top":100,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16610,800],[16690,800],[16650,900]],most:{"left":8305,"right":8345,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[16400,900],[16550,1000],[16400,1000]],most:{"left":8200,"right":8275,"top":450,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[17000,850],[17100,1000],[16900,1000]],most:{"left":8450,"right":8550,"top":425,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16700,y:0,w:450,h:450,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16700,450],[17300,450],[17150,700],[16700,800]],most:{"left":8350,"right":8650,"top":225,"bottom":400},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17150,y:0,w:150,h:450,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[17100,1000],[17700,1100],[17100,1200]],most:{"left":8550,"right":8850,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17550,650],[17700,1100],[17100,1000]],most:{"left":8550,"right":8850,"top":325,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17300,y:0,w:550,h:450,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17300,450],[17850,450],[17850,550]],most:{"left":8650,"right":8925,"top":225,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:16450,y:1500,w:1650,h:200,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[17850,1400],[17850,1500],[16800,1450]],most:{"left":8400,"right":8925,"top":700,"bottom":750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17850,y:0,w:250,h:1500,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[16850,1200],[17050,1200],[16950,1250]],most:{"left":8425,"right":8525,"top":600,"bottom":625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17300,1400],[17400,1420],[17200,1430]],most:{"left":8600,"right":8700,"top":700,"bottom":715},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[16450,1200],[16750,1200],[16600,1400]],most:{"left":8225,"right":8375,"top":600,"bottom":700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:15600,y:1200,w:100,h:300,points:[[7800,600],[8175,600]],speed:150,currentPoint:1.9766666666666666,collidable:true,pointOn:{"x":8175,"y":600},pointTo:{"x":7800,"y":600},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15600,1200,5],[16350,1200,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:1650,w:850,h:50,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16450,1500],[16450,1650],[16200,1650]],most:{"left":8100,"right":8225,"top":750,"bottom":825},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15600,1500],[15850,1650],[15600,1650]],most:{"left":7800,"right":7925,"top":750,"bottom":825},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15650,1150],[16350,1150],[16100,1350],[15950,1350]],most:{"left":7825,"right":8175,"top":575,"bottom":675},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15550,y:1400,w:50,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15550,1400],[15550,1700],[15000,1550]],most:{"left":7500,"right":7775,"top":700,"bottom":850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[15100,1200],[15300,1200],[15200,1250]],most:{"left":7550,"right":7650,"top":600,"bottom":625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14800,1200],[15000,1200],[14800,1350]],most:{"left":7400,"right":7500,"top":600,"bottom":675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15050,1500],[15100,1525],[15000,1550]],most:{"left":7500,"right":7550,"top":750,"bottom":775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:2100,w:900,h:900,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:15700,y:1700,w:600,h:1300,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[0],{type:[1,[],[0]],x:16300,y:1700,w:800,h:1150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,1700],[16300,2400],[15800,2250]],most:{"left":7900,"right":8150,"top":850,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15700,2500],[16150,2600],[15700,2750]],most:{"left":7850,"right":8075,"top":1250,"bottom":1375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,2800],[16300,2900],[16200,2850]],most:{"left":8100,"right":8150,"top":1400,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[17],{type:[1,[],[17]],x:16700,y:2900,w:300,h:100,time:0,maxTime:0.6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:36,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,2850],[16450,2850],[16300,2900]],most:{"left":8150,"right":8225,"top":1425,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16450,2850],[16600,2850],[16600,2900]],most:{"left":8225,"right":8300,"top":1425,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:2850,w:500,h:50,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16450,2950],[16500,3000],[16400,3000]],most:{"left":8200,"right":8250,"top":1475,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17250,y:2900,w:450,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17350,2500],[17350,2900],[17250,2900]],most:{"left":8625,"right":8675,"top":1250,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17350,y:2500,w:350,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17600,y:1900,w:100,h:600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17100,1700],[17500,1700],[17100,2100]],most:{"left":8550,"right":8750,"top":850,"bottom":1050},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:17400,y:2300,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17400,1800],[17400,1850],[17300,1900]],most:{"left":8650,"right":8700,"top":900,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:17700,y:1700,w:1100,h:1100,spawn:{"x":9125,"y":1125},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:17700,y:2800,w:1200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:1400,w:100,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:1400,w:500,h:300,canJump:true,inView:false,})
C(1,[],[20],{h:200,w:50,y:2150,x:18125,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:2350,x:18175,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:50,y:2500,x:18225,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:2350,x:18275,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:2150,x:18325,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:1950,x:18375,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[18300,1400],[18300,1700],[18250,1600]],most:{"left":9125,"right":9150,"top":700,"bottom":850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:18100,y:1100,w:300,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:1100,w:200,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18700,y:600,w:100,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:1300,w:200,h:100,canJump:true,inView:false,})
C(1,[],[20],{h:100,w:100,y:1300,x:18400,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = "#ffffff";
                    ctx.globalAlpha = 1;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(2,[],[1],{type:[2,[],[1]],points:[[18700,600],[18700,1100],[18550,950]],most:{"left":9275,"right":9350,"top":300,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,750],[18250,1100],[18100,1100]],most:{"left":9050,"right":9125,"top":375,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19000,y:2100,w:1000,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,500],[18400,600],[18300,550]],most:{"left":9150,"right":9200,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18100,0],[18400,0],[18100,300]],most:{"left":9050,"right":9200,"top":0,"bottom":150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18300,100],[18350,250],[18200,200]],most:{"left":9100,"right":9175,"top":50,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18600,300],[18700,500],[18550,500]],most:{"left":9275,"right":9350,"top":150,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18700,0],[18850,0],[19050,250]],most:{"left":9350,"right":9525,"top":0,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19350,y:225,w:500,h:50,angle:1.4166666666666667,rotateSpeed:0.02432659932659933,pivotX:19600,pivotY:250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:34.92499999999866,inView:false,initialRotation:0.024725497736586336,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[19850,200],[19850,500],[18700,500]],most:{"left":9350,"right":9925,"top":100,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18900,0],[19000,0],[19100,250]],most:{"left":9450,"right":9550,"top":0,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[19900,0],[20000,0],[20000,150]],most:{"left":9950,"right":10000,"top":0,"bottom":75},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:19850,y:350,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:18850,y:700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[19850,600],[19900,800],[18800,650]],most:{"left":9400,"right":9950,"top":300,"bottom":400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,850],[19900,1000],[18800,1000]],most:{"left":9400,"right":9950,"top":425,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:500,w:1450,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[18800,650],[19150,700],[18950,700]],most:{"left":9400,"right":9575,"top":325,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19550,950],[19700,950],[19700,975]],most:{"left":9775,"right":9850,"top":475,"bottom":487.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[8],{type:[1,[],[8]],x:19900,y:1000,w:100,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(2,[],[0],{type:[2,[],[0]],points:[[18900,1100],[19500,1100],[18900,1700]],most:{"left":9450,"right":9750,"top":550,"bottom":850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:1100,w:100,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,1500],[20000,2100],[19400,2100]],most:{"left":9700,"right":10000,"top":750,"bottom":1050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[19400,1200],[19800,1450],[19200,1400]],most:{"left":9600,"right":9900,"top":600,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19800,1700],[19600,1900],[19500,1750]],most:{"left":9750,"right":9900,"top":850,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19150,1450],[19200,1700],[18950,1650]],most:{"left":9475,"right":9600,"top":725,"bottom":850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19500,2000],[19400,2100],[19050,2100]],most:{"left":9525,"right":9750,"top":1000,"bottom":1050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:1000,w:1100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:2550,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19500,y:2350,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19500,y:2650,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19200,y:2900,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19750,y:2650,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19850,y:2350,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19650,y:2950,r:100,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,600],[19850,600],[18800,650]],most:{"left":9400,"right":9925,"top":300,"bottom":325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19800,3000],[19850,4000],[19800,4000]],most:{"left":9900,"right":9925,"top":1500,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,3000],[20000,4000],[19950,4000]],most:{"left":9975,"right":10000,"top":1500,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[13],{type:[1,[],[13]],x:19800,y:3000,w:200,h:1000,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
var minX4042, minY4042, maxX4042, maxY4042;
            minX4042 = 19700;minY4042 = 3500;maxX4042 = 20100;maxY4042 = 3800;
            C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
                const player = shared.players[shared.selfId];
                if ((player.pos.x) > md(minX4042) && (player.pos.x) < md(maxX4042) && (player.pos.y) > md(minY4042) && (player.pos.y) < md(maxY4042)) {
                    colors.background="#475e76"; colors.tile="#162737";
                }
            },});
C(1,[],[20],{h:200,w:50,y:1950,x:18075,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4250,x:19100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4450,x:19150,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:4650,x:19200,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:50,y:4800,x:19250,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:4650,x:19300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4450,x:19350,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4250,x:19400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:4300,x:19650,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:250,y:4800,x:19550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:250,y:4250,x:19550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:18800,y:4000,w:100,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:4800,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18900,y:5100,w:1100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,2400],[18800,2800],[18700,2800]],most:{"left":9350,"right":9400,"top":1200,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17700,2650],[17800,2800],[17700,2800]],most:{"left":8850,"right":8900,"top":1325,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18700,1700],[18800,1700],[18800,1850]],most:{"left":9350,"right":9400,"top":850,"bottom":925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17400,1700],[17800,1700],[17400,1800]],most:{"left":8700,"right":8900,"top":850,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17650,1850],[17700,1900],[17600,1900]],most:{"left":8800,"right":8850,"top":925,"bottom":950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,4950],[20000,5100],[19900,5100]],most:{"left":9950,"right":10000,"top":2475,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18900,4950],[19000,5100],[18900,5100]],most:{"left":9450,"right":9500,"top":2475,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18900,4000],[19000,4000],[18900,4150]],most:{"left":9450,"right":9500,"top":2000,"bottom":2075},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:20000,y:2150,w:200,h:1000,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,4600],[18900,4600],[18800,4650]],most:{"left":9400,"right":9450,"top":2300,"bottom":2325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,4750],[18900,4800],[18800,4800]],most:{"left":9400,"right":9450,"top":2375,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18100,4000],[18800,4000],[18800,4650],[18100,4450]],most:{"left":9050,"right":9400,"top":2000,"bottom":2325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,4750],[18800,5200],[18100,5100],[18100,4950]],most:{"left":9050,"right":9400,"top":2375,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17400,4000],[18100,4000],[18100,4450],[17700,5200]],most:{"left":8700,"right":9050,"top":2000,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17400,y:4000,w:300,h:2100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[19800,5400],[19700,5900],[17700,5650],[17700,5500]],most:{"left":8850,"right":9900,"top":2700,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19150,6000],[20000,6100],[20000,6600],[19150,6800]],most:{"left":9575,"right":10000,"top":3000,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18500,5750],[19300,5850],[18500,6000]],most:{"left":9250,"right":9650,"top":2875,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19150,6100],[19150,6300],[18900,6200]],most:{"left":9450,"right":9575,"top":3050,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:5600,w:100,h:2300,canJump:true,inView:false,})
C(2,[],[12],{type:[2,[],[12]],points:[[18100,5100],[18600,5175],[18650,5450],[18150,5475]],tpx:18825,tpy:5320,most:{"left":9050,"right":9325,"top":2550,"bottom":2737.5},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18725,y:5175,w:50,h:300,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[19850,5200],[20000,5200],[20000,5350],[19900,5300]],most:{"left":9925,"right":10000,"top":2600,"bottom":2675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18562.5,y:6400,w:375,h:50,angle:1.0833333333333333,rotateSpeed:0.018602693602693603,pivotX:18750,pivotY:6425,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:94.57966219013473,unSim:34.92499999999866,inView:false,initialRotation:0.0189077335632719,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[18500,6200],[18750,6400],[18750,6450],[18500,6500]],most:{"left":9250,"right":9375,"top":3100,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19150,6600],[19150,6700],[18600,6700]],most:{"left":9300,"right":9575,"top":3300,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18600,y:6700,w:550,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18500,6900],[19900,7200],[18500,7900]],most:{"left":9250,"right":9950,"top":3450,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,7050],[19550,7125],[19450,7100]],most:{"left":9725,"right":9800,"top":3525,"bottom":3562.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,6600],[19900,6800],[19575,6700]],most:{"left":9787.5,"right":10000,"top":3300,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,6900],[20000,7000],[19950,6950]],most:{"left":9975,"right":10000,"top":3450,"bottom":3500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,7350],[20000,8000],[18700,8000]],most:{"left":9350,"right":10000,"top":3675,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,7200],[18000,8000],[17800,8000]],most:{"left":8900,"right":9000,"top":3600,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:17800,y:7150,w:600,h:100,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:18100,pivotY:7200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:34.92499999999866,inView:false,initialRotation:-0.02617993877991494,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,7550],[18400,7800],[18150,7700]],most:{"left":9075,"right":9200,"top":3775,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17700,y:6200,w:100,h:1800,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,6200],[18250,6300],[18250,6350],[17800,6450]],most:{"left":8900,"right":9125,"top":3100,"bottom":3225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18150,5950],[18200,6300],[18000,6250]],most:{"left":9000,"right":9100,"top":2975,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,5650],[18100,5700],[17950,6000]],most:{"left":8850,"right":9050,"top":2825,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[17700,6200],[17700,8000],[17400,8000],[17400,6300]],most:{"left":8700,"right":8850,"top":3100,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17400,6100],[17650,6100],[17400,6150]],most:{"left":8700,"right":8825,"top":3050,"bottom":3075},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:16300,y:5700,w:1100,h:1100,spawn:{"x":8425,"y":3125},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:200,w:50,y:6150,x:16525,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:50,y:6500,x:16625,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:6350,x:16575,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:5950,x:16475,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:6350,x:16675,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:6150,x:16725,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:5950,x:16775,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:6000,x:17000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:6000,x:17150,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:300,y:6500,x:16950,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:300,y:5950,x:16950,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:16300,y:4000,w:1100,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16200,y:4000,w:100,h:3900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16300,y:6800,w:900,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17450,6700],[17450,6900],[17350,6800]],most:{"left":8675,"right":8725,"top":3350,"bottom":3450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17200,5700],[17400,5700],[17400,5800]],most:{"left":8600,"right":8700,"top":2850,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,5700],[16500,5700],[16300,5800]],most:{"left":8150,"right":8250,"top":2850,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,6500],[16400,6800],[16300,6800]],most:{"left":8150,"right":8200,"top":3250,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17200,6800],[17250,6900],[17200,6900]],most:{"left":8600,"right":8625,"top":3400,"bottom":3450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,6900],[17250,6900],[16300,7350]],most:{"left":8150,"right":8625,"top":3450,"bottom":3675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[17150,7250],[17400,7250],[17400,8000],[16600,8000],[16600,7800]],most:{"left":8300,"right":8700,"top":3625,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16700,7150],[16600,7300],[16600,7200]],most:{"left":8300,"right":8350,"top":3575,"bottom":3650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[15900,7700],[16200,7700],[16200,7900]],most:{"left":7950,"right":8100,"top":3850,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:7200,w:300,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:7100,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:7400,w:100,h:600,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:15750,y:7550,w:100,h:100,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:15500,pivotY:7600,distToPivot:150,canCollide:true,renderType:"rotating",cullingRadius:185.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:0.01308996938995747,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15750,y:7550,w:100,h:100,angle:90.75,rotateSpeed:0.012878787878787878,pivotX:15500,pivotY:7600,distToPivot:150,canCollide:true,renderType:"rotating",cullingRadius:185.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:1.583886296184854,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15750,y:7550,w:100,h:100,angle:180.75,rotateSpeed:0.012878787878787878,pivotX:15500,pivotY:7600,distToPivot:150,canCollide:true,renderType:"rotating",cullingRadius:185.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:3.1546826229797507,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15750,y:7550,w:100,h:100,angle:270.75,rotateSpeed:0.012878787878787878,pivotX:15500,pivotY:7600,distToPivot:150,canCollide:true,renderType:"rotating",cullingRadius:185.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:4.725478949774647,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:15500,y:7600,r:75,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,7300],[15100,7400],[15000,7400]],most:{"left":7500,"right":7550,"top":3650,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:4300,w:100,h:3700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:5200,r:70,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:5800,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19450,y:6050,w:700,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:15000,y:6500,w:1200,h:600,force:700,dir:{"x":-700,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4957983193277311,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:6400,w:1000,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,6500],[15100,6500],[15000,6700]],most:{"left":7500,"right":7550,"top":3250,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16200,6900],[16200,7100],[16100,7100]],most:{"left":8050,"right":8100,"top":3450,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[15500,6850],[15500,7100],[15300,7100],[15300,6950]],most:{"left":7650,"right":7750,"top":3425,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15700,6500],[16000,6500],[15950,6700]],most:{"left":7850,"right":8000,"top":3250,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:15000,y:5800,w:1200,h:600,force:700,dir:{"x":0,"y":700},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4957983193277311,})
C(1,[],[0],{type:[1,[],[0]],x:15150,y:5700,w:1050,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[15150,5800],[16200,5800],[16200,5900],[15700,5900]],most:{"left":7575,"right":8100,"top":2900,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15000,6300],[15400,6300],[15950,6400],[15000,6400]],most:{"left":7500,"right":7975,"top":3150,"bottom":3200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,5200],[16000,5400],[15000,5600]],most:{"left":7500,"right":8000,"top":2600,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16200,4200],[16200,5000],[15200,4850]],most:{"left":7600,"right":8100,"top":2100,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[15900,4950],[16200,5000],[16200,5100]],most:{"left":7950,"right":8100,"top":2475,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16200,5650],[16200,5700],[16150,5700]],most:{"left":8075,"right":8100,"top":2825,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15500,5500],[15400,5550],[15250,5550]],most:{"left":7625,"right":7750,"top":2750,"bottom":2775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15350,5150],[15500,5300],[15250,5250]],most:{"left":7625,"right":7750,"top":2575,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:15000,y:4300,w:100,h:200,effect:360,inView:false,bounciness:144.0576230492197,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:4500,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:4200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:4200,w:600,h:50,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15100,4250],[15700,4250],[15100,4300]],most:{"left":7550,"right":7850,"top":2125,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:4200,w:250,h:200,canJump:true,inView:false,})
C(1,[],[2],{type:[1,[],[2]],x:14500,y:4000,w:200,h:100,effect:720,inView:false,bounciness:288.1152460984394,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:4000,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:4000,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:4100,w:100,h:3700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:4500,w:600,h:50,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:13600,y:4000,w:700,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:12150,y:0,w:850,h:1550,canJump:true,inView:false,})
C(1,[],[20],{h:150,w:850,y:1550,x:12150,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.98;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(2,[],[0],{type:[2,[],[0]],points:[[14300,4800],[14800,5200],[14300,5450]],most:{"left":7150,"right":7400,"top":2400,"bottom":2725},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14900,5600],[14900,6000],[14400,5850]],most:{"left":7200,"right":7450,"top":2800,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[14650,5500],[14800,5650],[14600,5750]],most:{"left":7300,"right":7400,"top":2750,"bottom":2875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,5400],[14400,5600],[14300,5650],[14300,5450]],most:{"left":7150,"right":7200,"top":2700,"bottom":2825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[14300,6100],[14500,6200],[14300,6750]],most:{"left":7150,"right":7250,"top":3050,"bottom":3375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14900,6000],[14900,6900],[14550,6700]],most:{"left":7275,"right":7450,"top":3000,"bottom":3450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14300,6900],[14800,7200],[14300,7550]],most:{"left":7150,"right":7400,"top":3450,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14900,7600],[14900,8000],[14400,8000]],most:{"left":7200,"right":7450,"top":3800,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:14375,y:7575,w:350,h:50,angle:1.0833333333333333,rotateSpeed:0.018602693602693603,pivotX:14550,pivotY:7600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:34.92499999999866,inView:false,initialRotation:0.0189077335632719,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13600,7800],[14300,7800],[14200,7900]],most:{"left":6800,"right":7150,"top":3900,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:13600,y:4100,w:600,h:3700,canJump:true,inView:false,})
C(1,[],[20],{h:400,w:700,y:3850,x:13600,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.9;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(0,[],[1],{type:[0,[],[1]],x:13750,y:8000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13650,y:8000,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13400,7500],[13500,8000],[13200,8000]],most:{"left":6600,"right":6750,"top":3750,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:12600,y:7100,w:1000,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[12900,7300],[13150,7300],[13050,7600],[12950,7600]],most:{"left":6450,"right":6575,"top":3650,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12950,7800],[13050,7800],[13150,8000],[12900,8000]],most:{"left":6450,"right":6575,"top":3900,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:12500,y:7600,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:6200,w:100,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:6100,w:1100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[12500,6200],[12700,6200],[12500,6300]],most:{"left":6250,"right":6350,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13600,7000],[13600,7100],[13400,7100]],most:{"left":6700,"right":6800,"top":3500,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:12500,y:6200,w:100,h:400,points:[[6250,3100],[6750,3100]],speed:100,currentPoint:0.988333333330791,collidable:true,pointOn:{"x":6250,"y":3100},pointTo:{"x":6750,"y":3100},xv:100,yv:0,inView:false,path:[[12500,6200,3.3333333333333335],[13500,6200,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:6700,w:100,h:400,points:[[6750,3350],[6250,3350]],speed:100,currentPoint:0.988333333330791,collidable:true,pointOn:{"x":6750,"y":3350},pointTo:{"x":6250,"y":3350},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[13500,6700,3.3333333333333335],[12500,6700,3.3333333333333335]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12500,y:6600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13500,y:6600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13300,y:5100,w:100,h:1000,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13400,5800],[13500,6100],[13400,6100]],most:{"left":6700,"right":6750,"top":2900,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:12500,y:4000,w:1100,h:1100,spawn:{"x":6525,"y":2275},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:5100,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:5100,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:4000,w:100,h:1100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13500,5100],[13600,5100],[13600,5400]],most:{"left":6750,"right":6800,"top":2550,"bottom":2700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:5550,w:50,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13550,y:5550,w:50,h:100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:13450,y:5550,w:100,h:100,tpx:13500,tpy:5350,bgColor:"#163721",tileColor:"#517647",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:5500,w:200,h:50,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13400,5400],[13600,5500],[13400,5500]],most:{"left":6700,"right":6800,"top":2700,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:13575,y:5650,w:25,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13500,4200],[13600,4200],[13600,4400]],most:{"left":6750,"right":6800,"top":2100,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13300,4000],[13400,4000],[13400,4100]],most:{"left":6650,"right":6700,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:200,w:100,y:4000,x:13500,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.8;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[20],{h:100,w:100,y:4000,x:13400,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.8;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(2,[],[0],{type:[2,[],[0]],points:[[12500,4000],[12700,4000],[12500,4200]],most:{"left":6250,"right":6350,"top":2000,"bottom":2100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12500,4800],[12650,5100],[12500,5100]],most:{"left":6250,"right":6325,"top":2400,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12800,5100],[12850,5200],[12800,5200]],most:{"left":6400,"right":6425,"top":2550,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13000,5100],[13000,5200],[12950,5200]],most:{"left":6475,"right":6500,"top":2550,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:200,w:50,y:4250,x:12650,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4450,x:12700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:4650,x:12750,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:50,y:4800,x:12800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:4650,x:12850,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4450,x:12900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:50,y:4250,x:12950,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:4300,x:13100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:4300,x:13200,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:50,y:4300,x:13300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:350,y:4250,x:13050,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:350,y:4800,x:13050,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:12400,y:5200,w:100,h:800,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:12500,y:5500,w:450,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12850,y:5700,w:450,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:5500,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12500,y:5700,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,5600],[13300,5600],[13300,5700]],most:{"left":6550,"right":6650,"top":2800,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12500,5600],[12700,5700],[12500,5700]],most:{"left":6250,"right":6350,"top":2800,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,5700],[12750,5800],[12700,5800]],most:{"left":6350,"right":6375,"top":2850,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13050,5500],[13100,5500],[13100,5600]],most:{"left":6525,"right":6550,"top":2750,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13300,6000],[13300,6100],[12600,6100]],most:{"left":6300,"right":6650,"top":3000,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[13300,5450],[13300,5500],[13050,5500]],most:{"left":6525,"right":6650,"top":2725,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12500,5800],[12750,5800],[12500,5950]],most:{"left":6250,"right":6375,"top":2900,"bottom":2975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[12400,6100],[12400,6800],[11600,6800],[11600,6300]],most:{"left":5800,"right":6200,"top":3050,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:6800,w:2100,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:4000,w:2000,h:1200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[11600,5200],[12400,5200],[12400,5900],[11600,5700]],most:{"left":5800,"right":6200,"top":2600,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:5300,w:100,h:1500,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:10400,y:5200,w:1200,h:1600,canCollide:false,inView:false,boundPlayer:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[10650,6050],[10800,6050],[10700,6550],[10550,6550]],most:{"left":5275,"right":5400,"top":3025,"bottom":3275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11200,5700],[11200,5850],[10800,6050],[10800,5900]],most:{"left":5400,"right":5600,"top":2850,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11000,5350],[11150,5350],[11350,5700],[11200,5700]],most:{"left":5500,"right":5675,"top":2675,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10400,5300],[10500,5300],[10500,5350]],most:{"left":5200,"right":5250,"top":2650,"bottom":2675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10500,5200],[10550,5300],[10500,5300]],most:{"left":5250,"right":5275,"top":2600,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10800,5900],[10800,6050],[10650,6050]],most:{"left":5325,"right":5400,"top":2950,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11200,5700],[11350,5700],[11200,5850]],most:{"left":5600,"right":5675,"top":2850,"bottom":2925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11100,5300],[11150,5350],[11100,5350]],most:{"left":5550,"right":5575,"top":2650,"bottom":2675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11350,6550],[11450,6550],[11350,6650]],most:{"left":5675,"right":5725,"top":3275,"bottom":3325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10550,6550],[10650,6550],[10650,6650]],most:{"left":5275,"right":5325,"top":3275,"bottom":3325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11450,6000],[11450,6100],[11350,6100]],most:{"left":5675,"right":5725,"top":3000,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:9100,y:4000,w:1200,h:1000,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:5000,w:1000,h:3000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10100,y:5300,w:200,h:2700,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[10100,5150],[10200,5300],[10100,5300]],most:{"left":5050,"right":5100,"top":2575,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10200,5000],[10300,5000],[10300,5150]],most:{"left":5100,"right":5150,"top":2500,"bottom":2575},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:9350,y:4500,w:300,h:300,points:[[4675,2250],[5025,2250]],speed:150,currentPoint:0.975,pointOn:{"x":4675,"y":2250},pointTo:{"x":5025,"y":2250},xv:150,yv:0,inView:false,path:[[9350,4500,5],[10050,4500,5]],})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:4000,w:100,h:1200,canJump:true,inView:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[9450,4200],[9550,4250],[9450,4250]],most:{"left":4725,"right":4775,"top":2100,"bottom":2125},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10150,4550],[10250,4650],[10150,4650]],most:{"left":5075,"right":5125,"top":2275,"bottom":2325},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[9450,4700],[9550,4700],[9550,4800]],most:{"left":4725,"right":4775,"top":2350,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[10150,5100],[10250,5100],[10250,5200]],most:{"left":5075,"right":5125,"top":2550,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[11650,6000],[11750,6100],[11650,6100]],most:{"left":5825,"right":5875,"top":3000,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[9000,4200],[9050,4200],[9050,4250]],most:{"left":4500,"right":4525,"top":2100,"bottom":2125},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:4000,w:600,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:4300,w:200,h:3700,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:8700,y:4300,w:200,h:950,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:4150,w:200,h:1250,canJump:true,inView:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[8750,4450],[8800,4500],[8750,4500]],most:{"left":4375,"right":4400,"top":2225,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[8750,4950],[8800,5000],[8750,5000]],most:{"left":4375,"right":4400,"top":2475,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[8800,5050],[8850,5050],[8850,5100]],most:{"left":4400,"right":4425,"top":2525,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[8800,4550],[8850,4550],[8850,4600]],most:{"left":4400,"right":4425,"top":2275,"bottom":2300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[8750,4800],[8800,4800],[8750,4850]],most:{"left":4375,"right":4400,"top":2400,"bottom":2425},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[8850,4700],[8850,4750],[8800,4750]],most:{"left":4400,"right":4425,"top":2350,"bottom":2375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8500,5400],[8700,5400],[8600,5700]],most:{"left":4250,"right":4350,"top":2700,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8600,6000],[8700,6200],[8500,6200]],most:{"left":4250,"right":4350,"top":3000,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:6200,w:400,h:1800,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[8900,5900],[8900,6200],[8850,6050]],most:{"left":4425,"right":4450,"top":2950,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[2100,600],[2900,1100],[2900,1300],[2100,1300]],most:{"left":1050,"right":1450,"top":300,"bottom":650},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4200,1450],[4400,1450],[4400,1600],[4200,1500]],most:{"left":2100,"right":2200,"top":725,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19700,5850],[19900,5850],[19700,5900]],most:{"left":9850,"right":9950,"top":2925,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:16000,y:6450,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:6200,w:900,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:4300,w:300,h:3700,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7600,4300],[8000,6200],[7600,6200]],most:{"left":3800,"right":4000,"top":2150,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:8000,y:6200,r:400,renderType:"circle",inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[8000,5100],[8500,5150],[8500,5400]],most:{"left":4000,"right":4250,"top":2550,"bottom":2700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8000,4000],[8500,4000],[8500,4400]],most:{"left":4000,"right":4250,"top":2000,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,4000],[7200,4000],[6600,4400]],most:{"left":3300,"right":3600,"top":2000,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:4000,w:400,h:2900,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:4800,w:100,h:100,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:6950,pivotY:4850,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:0.01308996938995747,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:4800,w:100,h:100,angle:120.75,rotateSpeed:0.012878787878787878,pivotX:6950,pivotY:4850,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:2.107485071783153,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:4800,w:100,h:100,angle:240.75,rotateSpeed:0.012878787878787878,pivotX:6950,pivotY:4850,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:4.201880174176348,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:5400,w:100,h:100,angle:239.25,rotateSpeed:-0.012878787878787878,pivotX:6950,pivotY:5450,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:4.175700235396434,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:5400,w:100,h:100,angle:119.25,rotateSpeed:-0.012878787878787878,pivotX:6950,pivotY:5450,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:2.081305133003238,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7150,y:5400,w:100,h:100,angle:-0.75,rotateSpeed:-0.012878787878787878,pivotX:6950,pivotY:5450,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:160.35533905932738,unSim:34.92499999999866,inView:false,initialRotation:-0.01308996938995747,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,5000],[6700,5150],[6600,5300]],most:{"left":3300,"right":3350,"top":2500,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,5000],[7300,5300],[7200,5150]],most:{"left":3600,"right":3650,"top":2500,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:7300,y:6050,r:364,renderType:"circle",inView:false,})
C(2,[],[11],{type:[2,[],[11]],points:[[6700,6000],[6800,6000],[7100,6900],[7000,6900]],most:{"left":3350,"right":3550,"top":3000,"bottom":3450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,6350],[6800,6350],[6950,6800],[6600,6800]],most:{"left":3300,"right":3475,"top":3175,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:6800,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7125,y:6850,w:175,h:50,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:6200,y:6900,w:1100,h:1100,spawn:{"x":3375,"y":3725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:450,w:50,y:7225,x:6550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:250,y:7175,x:6450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:50,w:250,y:7675,x:6450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7175,x:6800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7275,x:6850,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:150,w:50,y:7375,x:6900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7275,x:6950,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7175,x:7000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7525,x:6850,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7625,x:6800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7525,x:6950,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:7625,x:7000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:6100,y:4000,w:100,h:3500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:7800,w:100,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,7700],[6200,7800],[6100,7800]],most:{"left":3050,"right":3100,"top":3850,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,7500],[6200,7500],[6200,7600]],most:{"left":3050,"right":3100,"top":3750,"bottom":3800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:7700,w:300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:7100,w:100,h:900,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,7500],[5900,7700],[5800,7700]],most:{"left":2900,"right":2950,"top":3750,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:5400,y:6900,w:700,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:6600,w:700,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:6600,w:100,h:1200,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,6900],[6100,6900],[6100,7200]],most:{"left":3000,"right":3050,"top":3450,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5400,6900],[5500,6900],[5400,7200]],most:{"left":2700,"right":2750,"top":3450,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:5450,y:7550,w:200,h:200,spawn:{"x":2775,"y":3825},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:7900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:7700,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{h:100,w:100,y:7900,x:5200,hex:'#FFFFFF',alpha:1,
                cr:(e)=>{
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = ctx.fillStyle = colors.tile;
                    ctx.globalAlpha = 0.3;
                    ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                }
            });
C(1,[],[0],{type:[1,[],[0]],x:4600,y:7200,w:400,h:800,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:5050,y:7350,w:200,h:200,spawn:{"x":2575,"y":3725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:4600,y:7150,w:400,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4300,y:6600,w:1000,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:4000,w:1800,h:2600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:4000,w:200,h:3850,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:4350,y:7350,w:200,h:200,spawn:{"x":2225,"y":3725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:7800,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:7150,w:100,h:850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:7500,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:7500,w:100,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3800,y:7500,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4100,y:7500,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3750,y:7100,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3650,y:7100,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3950,y:6900,w:200,h:350,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4050,y:7250,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4050,y:6900,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:4000,w:1000,h:2700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3350,y:6900,w:200,h:350,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3450,y:6900,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3450,y:7250,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3700,y:7500,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:7500,w:100,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3400,y:7500,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:7500,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:6700,w:300,h:1200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3750,y:6700,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4050,y:6800,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3450,y:6800,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3400,y:7700,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4100,y:7700,r:100,renderType:"circle",inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:2850,y:7750,w:200,h:200,spawn:{"x":1475,"y":3925},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:6800,w:1500,h:1200,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2700,y:7400,w:200,h:100,points:[[1350,3700],[1350,3400]],speed:150,currentPoint:1.4708333333333332,collidable:true,pointOn:{"x":1350,"y":3400},pointTo:{"x":1350,"y":3700},xv:9.184850993605149e-15,yv:150,inView:false,path:[[2700,7400,5],[2700,6800,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:7500,w:600,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:7650,w:100,h:350,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2900,y:6800,w:200,h:100,points:[[1450,3400],[1450,3700]],speed:150,currentPoint:1.4708333333333332,collidable:true,pointOn:{"x":1450,"y":3700},pointTo:{"x":1450,"y":3400},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[2900,6800,5],[2900,7400,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:6600,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:4000,w:700,h:2550,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2700,6600],[2900,6600],[2900,6800]],most:{"left":1350,"right":1450,"top":3300,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2800,7650],[2900,7650],[2800,7750]],most:{"left":1400,"right":1450,"top":3825,"bottom":3875},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2800,7900],[2900,8000],[2800,8000]],most:{"left":1400,"right":1450,"top":3950,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3750,7950],[3900,8000],[3600,8000]],most:{"left":1800,"right":1950,"top":3975,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4300,6600],[4400,6600],[4300,7000]],most:{"left":2150,"right":2200,"top":3300,"bottom":3500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5200,6600],[5300,6600],[5300,7000]],most:{"left":2600,"right":2650,"top":3300,"bottom":3500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5700,7700],[5700,8000],[5600,8000]],most:{"left":2800,"right":2850,"top":3850,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,7800],[5400,7800],[5350,7850]],most:{"left":2650,"right":2700,"top":3900,"bottom":3925},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4100,7850],[4300,7850],[4250,7900],[4150,7900]],most:{"left":2050,"right":2150,"top":3925,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:1300,y:5700,w:1100,h:1100,spawn:{"x":925,"y":3125},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:4200,w:100,h:2600,canJump:true,inView:false,})
C(1,[],[20],{h:100,w:50,y:6200,x:1825,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6300,x:1875,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6400,x:1925,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6500,x:1975,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6100,x:1875,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6000,x:1925,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:5900,x:1975,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6100,x:1775,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6000,x:1725,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:5900,x:1675,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6300,x:1775,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6400,x:1725,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:50,y:6500,x:1675,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[7300,7900],[7300,8000],[7100,8000]],most:{"left":3550,"right":3650,"top":3950,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7200,6900],[7300,6900],[7300,7100]],most:{"left":3600,"right":3650,"top":3450,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6200,6900],[6350,6900],[6200,7100]],most:{"left":3100,"right":3175,"top":3450,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6200,7900],[6400,8000],[6200,8000]],most:{"left":3100,"right":3200,"top":3950,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1300,6600],[1400,6800],[1300,6800]],most:{"left":650,"right":700,"top":3300,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2200,5700],[2400,5700],[2400,5800]],most:{"left":1100,"right":1200,"top":2850,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:5500,w:900,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2450,y:6550,w:650,h:50,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2450,y:6550,r:50,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1500,5500],[1500,5700],[1450,5600]],most:{"left":725,"right":750,"top":2750,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:1500,y:5000,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:4800,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1650,y:4400,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[24],{type:[1,[],[24]],x:1300,y:5550,w:100,h:150,ir:0.25,or:0.75,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.44999999999999996,innerOpacity:0,outerOpacity:1,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:4300,w:400,h:100,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:850,y:4350,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:4000,w:500,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-1.5308084989341912e-14,y:4700,w:1000,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:500,y:4000,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:500,y:4700,r:112,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1250,4150],[1300,4200],[1200,4200]],most:{"left":600,"right":650,"top":2075,"bottom":2100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1000,4700],[1050,4800],[1000,4900]],most:{"left":500,"right":525,"top":2350,"bottom":2450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1150,4400],[1200,4400],[1200,4600]],most:{"left":575,"right":600,"top":2200,"bottom":2300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[1200,4900],[1200,5000],[0,5200],[0,5100]],most:{"left":0,"right":600,"top":2450,"bottom":2600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:4900,w:800,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:5150,w:800,h:50,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:800,y:4900,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:400,y:5200,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:350,y:5200,w:850,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:400,y:5300,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:5300,w:800,h:50,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,5400],[400,6100],[0,6100]],most:{"left":0,"right":200,"top":2700,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[500,5350],[1200,5350],[1200,6000]],most:{"left":250,"right":600,"top":2675,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:950,y:5850,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[12],{type:[0,[],[12]],x:600,y:6300,r:112,tpx:1000,tpy:8750,renderType:"circleR",radius:56,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:6100,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4.286263797015735e-14,y:6500,w:1200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:8000,w:18000,h:2000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:8000,w:200,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:9300,w:200,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1300,y:8900,w:700,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:8900,w:700,h:200,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:850,y:8850,w:300,h:300,id:1,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(1,[],[6],{type:[1,[],[6]],x:900,y:8900,w:200,h:200,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[450,8400],[650,8900],[200,8900]],most:{"left":100,"right":325,"top":4200,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[450,8000],[900,8000],[900,8500]],most:{"left":225,"right":450,"top":4000,"bottom":4250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,8000],[450,8000],[0,8200]],most:{"left":0,"right":225,"top":4000,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[350,8600],[200,8900],[0,8900]],most:{"left":0,"right":175,"top":4300,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:50,y:8550,w:100,h:100,id:1,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[2000,8600],[2000,8900],[1300,8900]],most:{"left":650,"right":1000,"top":4300,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:1300,y:8500,w:100,h:400,points:[[650,4250],[950,4250]],speed:150,currentPoint:1.4708333333333332,alongWith:false,pointOn:{"x":950,"y":4250},pointTo:{"x":650,"y":4250},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[1300,8500,5],[1900,8500,5]],})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:8500,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:8100,w:500,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:8400,w:200,h:100,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:1600,y:8150,w:400,h:100,angle:-1.5,rotateSpeed:-0.025757575757575757,pivotX:1800,pivotY:8200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:34.92499999999866,inView:false,initialRotation:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[2000,8300],[2000,8400],[1900,8400]],most:{"left":950,"right":1000,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1900,8000],[2000,8000],[2000,8100]],most:{"left":950,"right":1000,"top":4000,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:8150,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1100,8000],[1200,8100],[1100,8100]],most:{"left":550,"right":600,"top":4000,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[1100,8000],[1200,8000],[1300,8100],[1200,8100]],tpx:1250,tpy:8750,most:{"left":550,"right":650,"top":4000,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[7],{type:[1,[],[7]],x:1350,y:8000,w:100,h:100,id:2,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:0,y:9500,w:900,h:100,angle:1.25,rotateSpeed:0.021464646464646464,pivotX:450,pivotY:9550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:226.38462845343543,unSim:34.92499999999866,inView:false,initialRotation:0.02181661564992912,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[900,9700],[900,10000],[700,10000]],most:{"left":350,"right":450,"top":4850,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,9750],[250,10000],[0,10000]],most:{"left":0,"right":125,"top":4875,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,9100],[300,9100],[0,9300]],most:{"left":0,"right":150,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:150,y:9750,w:100,h:100,id:3,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:9300,w:700,h:700,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:9100,w:600,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1100,y:9400,w:200,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[1400,9300],[1950,9450],[1950,9550],[1400,9400]],most:{"left":700,"right":975,"top":4650,"bottom":4775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[1950,9700],[1950,9800],[1350,9950],[1350,9850]],most:{"left":675,"right":975,"top":4850,"bottom":4975},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:1900,y:9400,w:100,h:200,points:[[950,4700],[950,4825]],speed:100,currentPoint:1.953333333323164,pointOn:{"x":950,"y":4825},pointTo:{"x":950,"y":4700},xv:6.123233995736766e-15,yv:-100,inView:false,path:[[1900,9400,3.3333333333333335],[1900,9650,3.3333333333333335]],})
C(1,[1],[11],{type:[1,[1],[11]],x:1050,y:9850,w:300,h:100,angle:1.5,rotateSpeed:0.025757575757575757,pivotX:1200,pivotY:9900,distToPivot:0,canCollide:true,cullingRadius:79.05694150420949,unSim:34.92499999999866,inView:false,initialRotation:0.026179938779914945,})
C(1,[],[7],{type:[1,[],[7]],x:1150,y:9850,w:100,h:100,id:4,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[800,6400],[800,6500],[700,6500]],most:{"left":350,"right":400,"top":3200,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[400,6400],[500,6500],[400,6500]],most:{"left":200,"right":250,"top":3200,"bottom":3250},renderType:"poly",inView:false,x:null,y:null,})
var minX4107, minY4107, maxX4107, maxY4107;
            minX4107 = 13250;minY4107 = 5000;maxX4107 = 13650;maxY4107 = 5300;
            C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
                const player = shared.players[shared.selfId];
                if ((player.pos.x) > md(minX4107) && (player.pos.x) < md(maxX4107) && (player.pos.y) > md(minY4107) && (player.pos.y) < md(maxY4107)) {
                    colors.background="#635f9b"; colors.tile="#242656";
                }
            },});
var minX4108, minY4108, maxX4108, maxY4108;
            minX4108 = 6850;minY4108 = 6700;maxX4108 = 7250;maxY4108 = 7000;
            C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
                const player = shared.players[shared.selfId];
                if ((player.pos.x) > md(minX4108) && (player.pos.x) < md(maxX4108) && (player.pos.y) > md(minY4108) && (player.pos.y) < md(maxY4108)) {
                    colors.background="#6f5f9b"; colors.tile="#332456";
                }
            },});
var minX4109, minY4109, maxX4109, maxY4109;
            minX4109 = 2350;minY4109 = 6500;maxX4109 = 2750;maxY4109 = 6900;
            C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
                const player = shared.players[shared.selfId];
                if ((player.pos.x) > md(minX4109) && (player.pos.x) < md(maxX4109) && (player.pos.y) > md(minY4109) && (player.pos.y) < md(maxY4109)) {
                    colors.background="#9d75b8"; colors.tile="#653c80";
                }
            },});
C(1,[],[11],{type:[1,[],[11]],x:1200,y:9200,w:200,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:11900,y:6100,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:12500,y:5450,w:800,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:11450,y:6000,w:200,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10650,y:6550,w:700,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:11350,y:6100,w:100,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10400,y:5200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10500,y:5300,w:600,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:9050,y:4200,w:400,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10150,y:4650,w:100,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:9450,y:4250,w:100,h:450,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8700,y:4150,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8750,y:4500,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8850,y:4500,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8750,y:4750,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8700,y:4750,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8750,y:5000,w:100,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8850,y:5000,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:8800,y:5850,w:100,h:100,renderAbove:true,})


    mapDimensions.x=20000;
    mapDimensions.y=10000;

    spawnPosition.x=600;
    spawnPosition.y=600;
    shared.respawnPlayer();
    colors.background='#517647'; colors.tile='#163721';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=u9xSFk1ZDgw'
    });

    shared.C(1,[],[0],{x:12950,y:-250,w:2000,h:250});

    shared.C(0,[],[26],{
        x: 19900,
        y: 4100,
        r: 100,
        musicPath: 'https://www.youtube.com/watch?v=u9xSFk1ZDgw'
    });

    obstacles[788].maxCoins = obstacles[788].coins = 4;
});