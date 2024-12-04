window.loadMap((shared)=>{
	let counter = 0;
	const md = (a) => {return a;}
	const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, input} = shared;
	let selfId = shared.selfId;

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

	shared.linkDoors = {};
	shared.linkButtons = {};
	shared.morphsTriggered = {};

	shared.C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
			// render links
			// ctx.strokeStyle = '#969696';
			// ctx.setLineDash([50, 70]);
			// ctx.lineDashOffset = -window.frames / 60 * 100 * 2;
			// ctx.lineWidth = 10;
			// for(let id in shared.linkButtons){
			//     if(shared.linkDoors[id] === undefined) continue;
			//     const btnPos = {x: shared.linkButtons[id].pos.x + shared.linkButtons[id].dimensions.x/2, y: shared.linkButtons[id].pos.y + shared.linkButtons[id].dimensions.y/2};
			//     const doorPos = {x: shared.linkDoors[id].pos.x + shared.linkDoors[id].dimensions.x/2, y: shared.linkDoors[id].pos.y + shared.linkDoors[id].dimensions.y/2};
					
			//     ctx.globalAlpha = shared.morphsTriggered[id] === true ? 0.3 : 0.8;
					
			//     ctx.beginPath();
			//     ctx.lineTo(btnPos.x, btnPos.y);
			//     ctx.lineTo(doorPos.x, doorPos.y);
			//     ctx.stroke();
			//     ctx.closePath();
			// }
			// ctx.globalAlpha = 1;
			// ctx.setLineDash([]);

			selfId = shared.selfId;
	},sf:()=>{
			selfId = shared.selfId;
	}});



	

	var xv1 = -4.7087785028302545;
	var yv1 = 7.162177934566113;
	var switchTime1 = 120;
	var switchState1 = true;
	var pos1 = {
			x: 12701.56476317675, y: 651.7520205860351 
	}
	C(0,[3],[1],{r:50,y:651.7520205860351,x:12701.56476317675,sf:(e)=>{
			pos1.y += yv1;
			pos1.x += xv1;
			if ((pos1.x - e.sat.r) < 12100 || pos1.x + e.sat.r > 13100) {
					xv1 = xv1 * -1;
			}
			if ((pos1.y - e.sat.r) < 500 || pos1.y + e.sat.r > 1500) {
					yv1 = yv1 * -1;
			}

			if(switchState1 === true){
					e.pos.x = pos1.x;
					e.pos.y = pos1.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime1--;
			if(switchTime1 <= 0){
					switchTime1 = 120;
					switchState1 = !switchState1;
					if(switchState1 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos1.x;
							e.pos.y = pos1.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState1 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos1.x, pos1.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv2 = 6.560640622930078;
	var yv2 = 5.516102099477643;
	var switchTime2 = 120;
	var switchState2 = true;
	var pos2 = {
			x: 12438.996506660704, y: 1027.7108183593077 
	}
	C(0,[3],[1],{r:50,y:1027.7108183593077,x:12438.996506660704,sf:(e)=>{
			pos2.y += yv2;
			pos2.x += xv2;
			if ((pos2.x - e.sat.r) < 12100 || pos2.x + e.sat.r > 13100) {
					xv2 = xv2 * -1;
			}
			if ((pos2.y - e.sat.r) < 500 || pos2.y + e.sat.r > 1500) {
					yv2 = yv2 * -1;
			}

			if(switchState2 === true){
					e.pos.x = pos2.x;
					e.pos.y = pos2.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime2--;
			if(switchTime2 <= 0){
					switchTime2 = 120;
					switchState2 = !switchState2;
					if(switchState2 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos2.x;
							e.pos.y = pos2.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState2 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos2.x, pos2.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv3 = 2.575140464608761;
	var yv3 = 8.175453464037124;
	var switchTime3 = 120;
	var switchState3 = true;
	var pos3 = {
			x: 12163.065668552117, y: 1105.6398527366784 
	}
	C(0,[3],[1],{r:50,y:1105.6398527366784,x:12163.065668552117,sf:(e)=>{
			pos3.y += yv3;
			pos3.x += xv3;
			if ((pos3.x - e.sat.r) < 12100 || pos3.x + e.sat.r > 13100) {
					xv3 = xv3 * -1;
			}
			if ((pos3.y - e.sat.r) < 500 || pos3.y + e.sat.r > 1500) {
					yv3 = yv3 * -1;
			}

			if(switchState3 === true){
					e.pos.x = pos3.x;
					e.pos.y = pos3.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime3--;
			if(switchTime3 <= 0){
					switchTime3 = 120;
					switchState3 = !switchState3;
					if(switchState3 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos3.x;
							e.pos.y = pos3.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState3 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos3.x, pos3.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv4 = 7.0439928398268465;
	var yv4 = 4.8838051381653385;
	var switchTime4 = 120;
	var switchState4 = true;
	var pos4 = {
			x: 12321.982015363385, y: 817.8375593888925 
	}
	C(0,[3],[1],{r:50,y:817.8375593888925,x:12321.982015363385,sf:(e)=>{
			pos4.y += yv4;
			pos4.x += xv4;
			if ((pos4.x - e.sat.r) < 12100 || pos4.x + e.sat.r > 13100) {
					xv4 = xv4 * -1;
			}
			if ((pos4.y - e.sat.r) < 500 || pos4.y + e.sat.r > 1500) {
					yv4 = yv4 * -1;
			}

			if(switchState4 === true){
					e.pos.x = pos4.x;
					e.pos.y = pos4.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime4--;
			if(switchTime4 <= 0){
					switchTime4 = 120;
					switchState4 = !switchState4;
					if(switchState4 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos4.x;
							e.pos.y = pos4.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState4 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos4.x, pos4.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv5 = -7.820763905081959;
	var yv5 = -3.507854001532737;
	var switchTime5 = 120;
	var switchState5 = true;
	var pos5 = {
			x: 12389.744886823275, y: 953.8792481470828 
	}
	C(0,[3],[1],{r:50,y:953.8792481470828,x:12389.744886823275,sf:(e)=>{
			pos5.y += yv5;
			pos5.x += xv5;
			if ((pos5.x - e.sat.r) < 12100 || pos5.x + e.sat.r > 13100) {
					xv5 = xv5 * -1;
			}
			if ((pos5.y - e.sat.r) < 500 || pos5.y + e.sat.r > 1500) {
					yv5 = yv5 * -1;
			}

			if(switchState5 === true){
					e.pos.x = pos5.x;
					e.pos.y = pos5.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime5--;
			if(switchTime5 <= 0){
					switchTime5 = 120;
					switchState5 = !switchState5;
					if(switchState5 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos5.x;
							e.pos.y = pos5.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState5 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos5.x, pos5.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv6 = 0.7508614556744643;
	var yv6 = 8.538477313285107;
	var switchTime6 = 120;
	var switchState6 = true;
	var pos6 = {
			x: 12659.854400081378, y: 1345.6626248431703 
	}
	C(0,[3],[1],{r:50,y:1345.6626248431703,x:12659.854400081378,sf:(e)=>{
			pos6.y += yv6;
			pos6.x += xv6;
			if ((pos6.x - e.sat.r) < 12100 || pos6.x + e.sat.r > 13100) {
					xv6 = xv6 * -1;
			}
			if ((pos6.y - e.sat.r) < 500 || pos6.y + e.sat.r > 1500) {
					yv6 = yv6 * -1;
			}

			if(switchState6 === true){
					e.pos.x = pos6.x;
					e.pos.y = pos6.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime6--;
			if(switchTime6 <= 0){
					switchTime6 = 120;
					switchState6 = !switchState6;
					if(switchState6 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos6.x;
							e.pos.y = pos6.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState6 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos6.x, pos6.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv7 = -6.802310751266139;
	var yv7 = 5.215165979938809;
	var switchTime7 = 120;
	var switchState7 = true;
	var pos7 = {
			x: 12394.514066918928, y: 1436.2398678358195 
	}
	C(0,[3],[1],{r:50,y:1436.2398678358195,x:12394.514066918928,sf:(e)=>{
			pos7.y += yv7;
			pos7.x += xv7;
			if ((pos7.x - e.sat.r) < 12100 || pos7.x + e.sat.r > 13100) {
					xv7 = xv7 * -1;
			}
			if ((pos7.y - e.sat.r) < 500 || pos7.y + e.sat.r > 1500) {
					yv7 = yv7 * -1;
			}

			if(switchState7 === true){
					e.pos.x = pos7.x;
					e.pos.y = pos7.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime7--;
			if(switchTime7 <= 0){
					switchTime7 = 120;
					switchState7 = !switchState7;
					if(switchState7 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos7.x;
							e.pos.y = pos7.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState7 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos7.x, pos7.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

	var xv8 = -7.627762373835383;
	var yv8 = -3.909811878262591;
	var switchTime8 = 120;
	var switchState8 = true;
	var pos8 = {
			x: 12553.150238961323, y: 1360.1896897466706 
	}
	C(0,[3],[1],{r:50,y:1360.1896897466706,x:12553.150238961323,sf:(e)=>{
			pos8.y += yv8;
			pos8.x += xv8;
			if ((pos8.x - e.sat.r) < 12100 || pos8.x + e.sat.r > 13100) {
					xv8 = xv8 * -1;
			}
			if ((pos8.y - e.sat.r) < 500 || pos8.y + e.sat.r > 1500) {
					yv8 = yv8 * -1;
			}

			if(switchState8 === true){
					e.pos.x = pos8.x;
					e.pos.y = pos8.y;
			} else {
					e.pos.x = -100000;
			}

			switchTime8--;
			if(switchTime8 <= 0){
					switchTime8 = 120;
					switchState8 = !switchState8;
					if(switchState8 === true){
							/*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
							e.pos.x = pos8.x;
							e.pos.y = pos8.y;
					}
			}
	},cr:(o)=>{
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.fillStyle = '#8304cc';
			ctx.globalAlpha = 1;
			if (switchState8 === false) {
					ctx.globalAlpha = 0.4;
			}
			ctx.beginPath();
			ctx.arc(pos8.x, pos8.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.globalAlpha = 1;
	}});
	
obstacles[obstacles.length-1].isEnemy = true;

C(1,[],[18],{type:[1,[],[18]],x:3350,y:5000,w:3400,h:1250,size:15,inView:false,sizeChangePermanent:false,sizeMult:0.6122448979591837,})
C(1,[],[18],{type:[1,[],[18]],x:6500,y:1300,w:1000,h:3700,size:15,inView:false,sizeChangePermanent:false,sizeMult:0.3})
C(1,[],[18],{type:[1,[],[18]],x:4900,y:2700,w:1400,h:2200,size:35,inView:false,sizeChangePermanent:false,sizeMult:1.4285714285714286,})
C(1,[],[14],{type:[1,[],[14]],x:16700,y:6500,w:3300,h:3500,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:275,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:64.75,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})


C(1,[],[17],{x:9950,y:6050,w:300,h:300,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:50,timeTrapMaxTime:9660,
	sf:(e)=>{
			if(e.timeTrapTime <= 0){
					players[selfId].pos.x = 16900;
					players[selfId].pos.y = 6000;
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
});


C(1,[],[17],{x:19500,y:7800,w:500,h:1400,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:420,
			sf:(e)=>{
					if(e.timeTrapTime <= 0){
							players[selfId].pos.x = 18600;
							players[selfId].pos.y = 7900;
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
	});C(1,[],[15],{type:[1,[],[15]],x:16700,y:4400,w:3300,h:1000,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:16700,y:4400,w:1700,h:1000,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:18400,y:4400,w:1600,h:1000,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:100,w:1500,h:600,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[15],{type:[1,[],[15]],x:6400,y:100,w:1500,h:600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:14700,y:6000,w:1800,h:200,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:14600,y:6000,w:2000,h:200,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[1],{type:[1,[],[1]],x:14900,y:6000,w:1400,h:200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[14],{type:[1,[],[14]],x:9000,y:6500,w:3000,h:3500,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:225,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:65.25,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[1],{type:[1,[],[1]],x:10700,y:9600,w:500,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11800,y:6600,r:600,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9000,y:7000,r:364,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:9050,y:6050,w:300,h:300,spawn:{"x":4600,"y":3100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[17],{x:11400,y:4700,w:5100,h:400,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:330,
			sf:(e)=>{
					if(e.timeTrapTime <= 0){
							players[selfId].pos.x = 9200;
							players[selfId].pos.y = 6200;
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
	});C(1,[],[13],{type:[1,[],[13]],x:11400,y:4700,w:5200,h:400,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[15],{type:[1,[],[15]],x:11400,y:4700,w:5200,h:400,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[1],[1],{type:[1,[1],[1]],x:12200,y:4100,w:900,h:200,angle:-2376,rotateSpeed:-0.10303030303030303,pivotX:12650,pivotY:4200,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:230.4886114323222,unSim:0,inView:true,initialRotation:-41.46902302738527,boundPlayer:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:12200,y:3500,w:900,h:200,angle:2556,rotateSpeed:0.10303030303030303,pivotX:12650,pivotY:3600,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:230.4886114323222,unSim:0,inView:true,initialRotation:44.61061568097506,boundPlayer:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:14400,y:3850,w:900,h:200,angle:2556,rotateSpeed:0.10303030303030303,pivotX:14850,pivotY:3950,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:230.4886114323222,unSim:0,inView:true,initialRotation:44.61061568097506,boundPlayer:false,})
C(1,[],[14],{type:[1,[],[14]],x:11400,y:1700,w:2900,h:1600,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:225,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:65.25,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[1],{type:[1,[],[1]],x:9750,y:2300,w:150,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10400,y:1650,w:300,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[14],{type:[1,[],[14]],x:8100,y:3500,w:3000,h:1600,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:275,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6346938775510204,jumpForce:59.75,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[1],{type:[1,[],[1]],x:8150,y:5050,w:1350,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:7600,y:1800,w:1700,h:1200,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:8800,y:1800,w:500,h:1200,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.1155462184873952,})
C(1,[],[0],{type:[1,[],[0]],x:8850,y:2450,w:300,h:150,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9300,2400],[9300,2800],[8800,2600]],most:{"left":4400,"right":4650,"top":1200,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:7600,y:1800,w:500,h:1200,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.1155462184873952,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:1900,w:250,h:300,canJump:true,inView:false,isNormal:true,})
C(0,[],[1],{type:[0,[],[1]],x:6750,y:6000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6300,y:5800,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6100,y:6000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6550,y:5600,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6450,y:5250,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6100,y:5400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4100,y:5950,w:800,h:100,angle:822,rotateSpeed:Math.PI/90,pivotX:4500,pivotY:6000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:201.55644370746373,unSim:0,inView:true,initialRotation:14.34660645139339,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:6150,w:800,h:100,angle:857,rotateSpeed:Math.PI/90,pivotX:5000,pivotY:6200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:201.55644370746373,unSim:0,inView:true,initialRotation:14.957471689591403,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5100,y:6000,w:400,h:100,points:[[2550,3000],[2550,2700]],speed:200,currentPoint:1.5666666666662512,collidable:true,pointOn:{"x":2550,"y":2700},pointTo:{"x":2550,"y":3000},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[5100,6000,6.666666666666667],[5100,5400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5500,y:6300,w:300,h:100,points:[[2750,3150],[2750,2850]],speed:200,currentPoint:0.5666666666662513,collidable:true,pointOn:{"x":2750,"y":3150},pointTo:{"x":2750,"y":2850},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[5500,6300,6.666666666666667],[5500,5700,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5200,y:5600,w:100,h:200,points:[[2600,2800],[2900,2800]],speed:200,currentPoint:0.5666666666662513,collidable:true,pointOn:{"x":2600,"y":2800},pointTo:{"x":2900,"y":2800},xv:200,yv:0,inView:false,path:[[5200,5600,6.666666666666667],[5800,5600,6.666666666666667]],boundPlayer:true,})
var minX10, minY10, maxX10, maxY10;
	minX10 = 3100;minY10 = 5450;maxX10 = 3650;maxY10 = 6150;
	C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
			const player = shared.players[shared.selfId];
			if ((player.pos.x) > md(minX10) && (player.pos.x) < md(maxX10) && (player.pos.y) > md(minY10) && (player.pos.y) < md(maxY10)) {
					colors.background="#454545"; colors.tile="#000000";
			}
	},});
var minX11, minY11, maxX11, maxY11;
	minX11 = 6700;minY11 = 5450;maxX11 = 7300;maxY11 = 6150;
	C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
			const player = shared.players[shared.selfId];
			if ((player.pos.x) > md(minX11) && (player.pos.x) < md(maxX11) && (player.pos.y) > md(minY11) && (player.pos.y) < md(maxY11)) {
					colors.background="#9952a7"; colors.tile="#6b3c80";
			}
	},});
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:5400,w:100,h:200,points:[[2150,2700],[2450,2700]],speed:200,currentPoint:0.5666666666662513,collidable:true,pointOn:{"x":2150,"y":2700},pointTo:{"x":2450,"y":2700},xv:200,yv:0,inView:false,path:[[4300,5400,6.666666666666667],[4900,5400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3900,y:5900,w:200,h:100,points:[[1950,2950],[1950,2650]],speed:200,currentPoint:1.5666666666662512,collidable:true,pointOn:{"x":1950,"y":2650},pointTo:{"x":1950,"y":2950},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[3900,5900,6.666666666666667],[3900,5300,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3600,y:5600,w:100,h:200,points:[[1800,2800],[2100,2800]],speed:200,currentPoint:0.5666666666667796,collidable:true,pointOn:{"x":1800,"y":2800},pointTo:{"x":2100,"y":2800},xv:200,yv:0,inView:false,path:[[3600,5600,6.666666666666667],[4200,5600,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3600,y:5300,w:100,h:200,points:[[1800,2650],[2100,2650]],speed:200,currentPoint:1.566666666666757,collidable:true,pointOn:{"x":2100,"y":2650},pointTo:{"x":1800,"y":2650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[3600,5300,6.666666666666667],[4200,5300,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3900,y:5100,w:100,h:200,points:[[1950,2550],[2250,2550]],speed:200,currentPoint:0.5666666666664741,collidable:true,pointOn:{"x":1950,"y":2550},pointTo:{"x":2250,"y":2550},xv:200,yv:0,inView:false,path:[[3900,5100,6.666666666666667],[4500,5100,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:4900,w:200,h:100,points:[[2200,2450],[2200,2750]],speed:200,currentPoint:0.5666666666662513,collidable:true,pointOn:{"x":2200,"y":2450},pointTo:{"x":2200,"y":2750},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[4400,4900,6.666666666666667],[4400,5500,6.666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:5800,w:1000,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[14],{type:[1,[],[14]],x:0,y:2200,w:3000,h:3800,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:275,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:79.75,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1100,2700],[1550,3000],[1100,3100]],most:{"left":550,"right":775,"top":1350,"bottom":1550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2400,2700],[2400,3100],[1950,3000]],most:{"left":975,"right":1200,"top":1350,"bottom":1550},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:1750,y:3100,r:300,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:3400,y:2900,w:400,h:1800,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:2900,w:400,h:1800,force:1500,dir:{"x":-1500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.1155462184873952,})
C(1,[],[2],{type:[1,[],[2]],x:3400,y:2900,w:50,h:1800,effect:300,inView:false,bounciness:200,decay:0.5,})
C(1,[],[19],{type:[1,[],[19]],x:4900,y:2700,w:1400,h:2200,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[15],{type:[1,[],[15]],x:3100,y:2900,w:200,h:2000,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:3500,y:2200,w:1200,h:600,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:900,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:900,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:-50,w:200,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:7900,y:300,w:1500,h:600,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[15],{type:[1,[],[15]],x:7900,y:300,w:1500,h:600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(0,[],[1],{type:[0,[],[1]],x:11600,y:0,r:300,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:12750,y:50,w:300,h:300,spawn:{"x":6450,"y":100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[14],{type:[1,[],[14]],x:13200,y:0,w:4300,h:1500,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:275,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:69.75,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[0],{type:[1,[],[0]],x:16150,y:1050,w:450,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:19000,y:400,w:500,h:1600,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[0],{type:[1,[],[0]],x:18900,y:0,w:700,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:19550,y:400,w:50,h:1600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:400,w:1200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:700,w:500,h:2200,canJump:true,inView:false,isNormal:true,})
C(1,[],[15],{type:[1,[],[15]],x:19000,y:400,w:500,h:1600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:600,w:200,h:900,canJump:true,inView:false,isNormal:true,})
C(1,[],[6],{type:[1,[],[6]],x:19600,y:600,w:400,h:400,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19000,y:2500,w:1000,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:400,w:400,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11100,y:1500,w:5000,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:525,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:400,w:50,h:125,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:575,w:50,h:1425,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:200,w:200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:15600,y:1400,w:1900,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16900,0],[17300,0],[17200,600]],most:{"left":8450,"right":8650,"top":0,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:16700,y:1050,r:206,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16000,y:600,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:16100,y:0,w:100,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:16200,y:0,w:50,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:200,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:15400,y:300,w:200,h:1200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15300,y:200,w:100,h:1300,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:15600,y:600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:400,w:100,h:1100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:750,w:2100,h:750,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:450,w:100,h:300,canJump:true,inView:false,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13200,300],[13300,450],[13200,450]],most:{"left":6600,"right":6650,"top":150,"bottom":225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:3.425,alongWith:false,pointOn:{"x":6600,"y":300},pointTo:{"x":6600,"y":600},xv:9.184850993605149e-15,yv:150,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:4.425,alongWith:false,pointOn:{"x":6600,"y":600},pointTo:{"x":6900,"y":600},xv:150,yv:0,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:5.425,alongWith:false,pointOn:{"x":6900,"y":600},pointTo:{"x":7200,"y":600},xv:150,yv:0,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:6.425,alongWith:false,pointOn:{"x":7200,"y":600},pointTo:{"x":7500,"y":600},xv:150,yv:0,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:7.425,alongWith:false,pointOn:{"x":7500,"y":600},pointTo:{"x":7500,"y":300},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:0.425,alongWith:false,pointOn:{"x":7500,"y":300},pointTo:{"x":7200,"y":300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:1.425,alongWith:false,pointOn:{"x":7200,"y":300},pointTo:{"x":6900,"y":300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:600,w:300,h:100,points:[[7500,300],[7200,300],[6900,300],[6600,300],[6600,600],[6900,600],[7200,600],[7500,600]],speed:150,currentPoint:2.425,alongWith:false,pointOn:{"x":6900,"y":300},pointTo:{"x":6600,"y":300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15000,600,5],[14400,600,5],[13800,600,5],[13200,600,5],[13200,1200,5],[13800,1200,5],[14400,1200,5],[15000,1200,5]],})
C(2,[],[1],{type:[2,[],[1]],points:[[13900,500],[14100,700],[13700,700]],most:{"left":6850,"right":7050,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14600,450],[14750,700],[14450,700]],most:{"left":7225,"right":7375,"top":225,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13300,y:700,w:2000,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12900,y:400,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:300,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:0,w:800,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:500,w:200,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12100,y:500,w:100,h:100,points:[[6050,250],[6500,700]],speed:150,currentPoint:1.6145604837090115,collidable:true,pointOn:{"x":6500,"y":700},pointTo:{"x":6050,"y":250},xv:-106.06601717798212,yv:-106.06601717798213,inView:false,path:[[12100,500,5],[13000,1400,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12100,y:500,w:100,h:100,points:[[6050,250],[6500,700]],speed:150,currentPoint:0.6145604837089994,collidable:true,pointOn:{"x":6050,"y":250},pointTo:{"x":6500,"y":700},xv:106.06601717798213,yv:106.06601717798212,inView:false,path:[[12100,500,5],[13000,1400,5]],boundPlayer:true,})
var morphTriggered0 = false;
	C(1,[],[3],{h:100,w:100,y:1250,x:11650,
			cr:(e)=>{
					ctx.globalAlpha = 0.8;
					if (morphTriggered0 === true) {
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
					morphTriggered0 = true;    
			}
	});
var morphTriggered0 = false;var morphOffset0 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
	C(1,[0],[0],{h:100,w:400,y:1000,x:11500,
			path: [[11500,1000,0],[11100,1000,0]],
			currentPoint: 0,
			sf:(o,p) => {
					
					o.morphMoveId = 0;
					if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
							
							moveActive = true;
							lastMorphTriggered = morphTriggered0;

							for(let i = 0; i < o.path.length; i++){
									o.path[i][2] = 5;
							}

							o.speed = o.pointOn[2];
							let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
							o.xv = Math.cos(angle) * o.speed;
							o.yv = Math.sin(angle) * o.speed;
							o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
					}

					if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
							lastMorphTriggered = morphTriggered0 = false;
							
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
	});obstacles[obstacles.length-1].waitUntilTrue = false;};
C(1,[],[0],{type:[1,[],[0]],x:11100,y:500,w:400,h:1000,canJump:true,inView:false,isNormal:true,})
var morphTriggered0 = false;var morphOffset0 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 1;
	C(1,[0],[0],{h:100,w:400,y:500,x:11500,
			path: [[11500,500,0],[11100,500,0]],
			currentPoint: 1,
			sf:(o,p) => {
					
					o.morphMoveId = 0;
					if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
							
							moveActive = true;
							lastMorphTriggered = morphTriggered0;

							for(let i = 0; i < o.path.length; i++){
									o.path[i][2] = 5;
							}

							o.speed = o.pointOn[2];
							let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
							o.xv = Math.cos(angle) * o.speed;
							o.yv = Math.sin(angle) * o.speed;
							o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
					}

					if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
							lastMorphTriggered = morphTriggered0 = false;
							
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
	});obstacles[obstacles.length-1].waitUntilTrue = false;};
C(1,[],[1],{type:[1,[],[1]],x:11500,y:650,w:50,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:300,w:800,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:11900,y:200,w:800,h:100,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(1,[],[20],{h:200,w:200,y:1300,x:11900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:800,y:200,x:11900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:11250,y:-350,w:700,h:350,canJump:true,inView:false,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11100,y:400,w:200,h:100,points:[[5550,200],[5550,0]],speed:250,currentPoint:0.5625000000000097,collidable:true,pointOn:{"x":5550,"y":200},pointTo:{"x":5550,"y":0},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[11100,400,8.333333333333334],[11100,0,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10900,y:400,w:200,h:100,points:[[5450,200],[5450,0]],speed:250,currentPoint:1.562500000000008,collidable:true,pointOn:{"x":5450,"y":0},pointTo:{"x":5450,"y":200},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[10900,400,8.333333333333334],[10900,0,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10900,y:900,w:200,h:100,points:[[5450,450],[5450,250]],speed:250,currentPoint:1.5624999999999258,collidable:true,pointOn:{"x":5450,"y":250},pointTo:{"x":5450,"y":450},xv:1.5308084989341916e-14,yv:250,inView:false,path:[[10900,900,8.333333333333334],[10900,500,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10700,y:900,w:200,h:100,points:[[5350,450],[5350,250]],speed:250,currentPoint:0.5624999999999255,collidable:true,pointOn:{"x":5350,"y":450},pointTo:{"x":5350,"y":250},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[10700,900,8.333333333333334],[10700,500,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10700,y:400,w:200,h:100,points:[[5350,200],[5350,0]],speed:250,currentPoint:0.5625000000000097,collidable:true,pointOn:{"x":5350,"y":200},pointTo:{"x":5350,"y":0},xv:1.5308084989341916e-14,yv:-250,inView:false,path:[[10700,400,8.333333333333334],[10700,0,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:0,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:1000,w:600,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:700,w:200,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:500,w:200,h:200,points:[[4800,250],[5150,250]],speed:250,currentPoint:0.8928571428564308,collidable:true,pointOn:{"x":4800,"y":250},pointTo:{"x":5150,"y":250},xv:250,yv:0,inView:false,path:[[9600,500,8.333333333333334],[10300,500,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:700,w:200,h:200,points:[[4800,350],[5150,350]],speed:250,currentPoint:1.892857142856431,collidable:true,pointOn:{"x":5150,"y":350},pointTo:{"x":4800,"y":350},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[9600,700,8.333333333333334],[10300,700,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:300,w:200,h:200,points:[[4800,150],[5150,150]],speed:250,currentPoint:1.892857142856431,collidable:true,pointOn:{"x":5150,"y":150},pointTo:{"x":4800,"y":150},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[9600,300,8.333333333333334],[10300,300,8.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9600,y:0,w:900,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9600,y:900,w:900,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:0,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:700,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[2],{type:[1,[],[2]],x:7900,y:900,w:1500,h:100,effect:400,inView:false,bounciness:266.6666666666667,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:0,w:1500,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:1000,w:1500,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:8950,y:650,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8450,y:300,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8100,y:850,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7700,y:700,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:700,w:1500,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[2],{type:[1,[],[2]],x:6400,y:0,w:1500,h:100,effect:400,inView:false,bounciness:266.6666666666667,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:0,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:7750,y:100,w:150,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7400,y:100,w:150,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,500],[7400,700],[7150,700]],most:{"left":3550,"right":3700,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6900,500],[6850,700],[6750,700]],most:{"left":3375,"right":3450,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:900,w:200,h:1300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:2000,w:800,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:2000,w:1000,h:150,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:0,w:200,h:2150,canJump:true,inView:false,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:5200,y:1000,radius:550,startAngle:1.5707963267948966,endAngle:5.820673055401088,startPolygon:{"points":[[2600,1000],[2600,1050]],"type":"poly","props":{}},endPolygon:{"points":[[3047.4671808010125,276.9010934450953],[3092.2138988811134,254.59120278960478]],"type":"poly","props":{}},innerRadius:1000,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:1100,startSliceAngle:1.5707963267948966,endSliceAngle:5.820673055401088,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5200,y:1000,radius:550,startAngle:0,endAngle:1.3788101090755203,startPolygon:{"points":[[3100,500],[3150,500]],"type":"poly","props":{}},endPolygon:{"points":[[2695.4044976882724,990.8135917238319],[2704.9449474570997,1039.894950896215]],"type":"poly","props":{}},innerRadius:1000,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:1100,startSliceAngle:0,endSliceAngle:1.3788101090755203,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[5650,0],[6200,0],[6200,500],[6100,550]],most:{"left":2825,"right":3100,"top":0,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4200,0],[4750,0],[4200,550]],most:{"left":2100,"right":2375,"top":0,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4200,1450],[4750,2000],[4200,2000]],most:{"left":2100,"right":2375,"top":725,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6200,1450],[6200,2000],[5650,2000]],most:{"left":2825,"right":3100,"top":725,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:4200,y:900,w:2000,h:200,angle:-308.25,rotateSpeed:-0.012878787878787878,pivotX:5200,pivotY:1000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:502.4937810560445,unSim:0,inView:true,initialRotation:-5.379977419272521,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5300,y:900,w:600,h:200,angle:308.25,rotateSpeed:0.012878787878787878,pivotX:5200,pivotY:1000,distToPivot:200,canCollide:true,renderType:"rotating",cullingRadius:358.11388300841895,unSim:0,inView:true,initialRotation:5.379977419272521,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5600,y:900,w:600,h:200,angle:488.25,rotateSpeed:0.012878787878787878,pivotX:5200,pivotY:1000,distToPivot:350,canCollide:true,renderType:"rotating",cullingRadius:508.11388300841895,unSim:0,inView:true,initialRotation:8.521570072862314,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5200,y:1000,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:2200,w:900,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:2600,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:5150,y:2250,w:300,h:300,spawn:{"x":2650,"y":1200},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:2200,w:200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:0,w:4000,h:2150,canJump:true,sat:{"pos":{"x":0,"y":0},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":2000,"y":0},{"x":2000,"y":1075},{"x":0,"y":1075}],"edges":[{"x":2000,"y":0},{"x":0,"y":1075},{"x":-2000,"y":0},{"x":0,"y":-1075}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":2000,"y":0},{"x":2000,"y":1075},{"x":0,"y":1075}]},inView:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:2800,w:400,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4150,y:2800,w:50,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:2800,w:50,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:2800,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:2150,w:200,h:750,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:3500,y:2150,w:1200,h:50,tpx:5300,tpy:2400,bgColor:"#6b3c80",tileColor:"#9952a7",changeColor:false,inView:false,})
C(1,[],[3],{type:[1,[],[3]],x:0,y:2150,w:3500,h:50,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:2150,w:400,h:50,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:2600,w:100,h:3300,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:3050,y:2250,w:300,h:300,spawn:{"x":1600,"y":1200},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:3000,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:3000,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:3100,w:100,h:1600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:3100,w:100,h:1600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:2800,w:100,h:1900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3300,y:2600,w:100,h:2100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:4900,w:3400,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:900,w:200,h:4000,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:3100,y:2900,w:200,h:2000,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,2900],[3300,3100],[3250,3000]],most:{"left":1625,"right":1650,"top":1450,"bottom":1550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3100,3350],[3150,3450],[3100,3550]],most:{"left":1550,"right":1575,"top":1675,"bottom":1775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,3750],[3300,4050],[3250,3900]],most:{"left":1625,"right":1650,"top":1875,"bottom":2025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3100,4250],[3150,4350],[3100,4450]],most:{"left":1550,"right":1575,"top":2125,"bottom":2225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,3850],[3300,3950],[3200,3900]],most:{"left":1600,"right":1650,"top":1925,"bottom":1975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4900,y:3300,w:1400,h:200,angle:616.5,rotateSpeed:0.025757575757575757,pivotX:5600,pivotY:3400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:353.5533905932738,unSim:0,inView:true,initialRotation:10.759954838545042,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4900,y:4100,w:1400,h:200,angle:-616.5,rotateSpeed:-0.025757575757575757,pivotX:5600,pivotY:4200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:353.5533905932738,unSim:0,inView:true,initialRotation:-10.759954838545042,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:2600,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,4200],[6300,4900],[5600,4900]],most:{"left":2800,"right":3150,"top":2100,"bottom":2450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5600,2700],[6300,2700],[6300,3400]],most:{"left":2800,"right":3150,"top":1350,"bottom":1700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4900,3400],[5200,3800],[4900,4200]],most:{"left":2450,"right":2600,"top":1700,"bottom":2100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4900,2700],[5100,2700],[4900,2900]],most:{"left":2450,"right":2550,"top":1350,"bottom":1450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[19500,1250],[19500,1550],[19250,1400]],tpx:19800,tpy:200,most:{"left":9625,"right":9750,"top":625,"bottom":775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[19000,850],[19200,1000],[19000,1150]],tpx:19800,tpy:200,most:{"left":9500,"right":9600,"top":425,"bottom":575},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[19000,1650],[19200,1800],[19000,2500]],tpx:19800,tpy:200,most:{"left":9500,"right":9600,"top":825,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:4500,w:100,h:200,points:[[2200,2250],[2350,2250]],speed:150,currentPoint:0.85,collidable:true,pointOn:{"x":2200,"y":2250},pointTo:{"x":2350,"y":2250},xv:150,yv:0,inView:false,path:[[4400,4500,5],[4700,4500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:4300,w:100,h:200,points:[[2200,2150],[2350,2150]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":2350,"y":2150},pointTo:{"x":2200,"y":2150},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[4400,4300,5],[4700,4300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:4200,w:200,h:100,points:[[2200,2100],[2200,1650]],speed:225,currentPoint:0.425,collidable:true,pointOn:{"x":2200,"y":2100},pointTo:{"x":2200,"y":1650},xv:1.3777276490407723e-14,yv:-225,inView:false,path:[[4400,4200,7.5],[4400,3300,7.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4600,y:4200,w:200,h:100,points:[[2300,2100],[2300,1650]],speed:225,currentPoint:1.425,collidable:true,pointOn:{"x":2300,"y":1650},pointTo:{"x":2300,"y":2100},xv:1.3777276490407723e-14,yv:225,inView:false,path:[[4600,4200,7.5],[4600,3300,7.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:2900,w:100,h:200,points:[[2200,1450],[2350,1450]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":2350,"y":1450},pointTo:{"x":2200,"y":1450},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[4400,2900,5],[4700,2900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:3100,w:100,h:200,points:[[2200,1550],[2350,1550]],speed:150,currentPoint:0.85,collidable:true,pointOn:{"x":2200,"y":1550},pointTo:{"x":2350,"y":1550},xv:150,yv:0,inView:false,path:[[4400,3100,5],[4700,3100,5]],boundPlayer:true,})
C(1,[],[14],{type:[1,[],[14]],x:3900,y:3100,w:400,h:1800,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:200,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:58,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[1],{type:[1,[],[1]],x:3900,y:4100,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4250,y:3600,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3900,y:3100,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:3000,w:200,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:4300,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3400,3850],[3550,3900],[3550,4000],[3400,4050]],most:{"left":1700,"right":1775,"top":1925,"bottom":2025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3650,3550],[3800,3550],[3800,3600]],most:{"left":1825,"right":1900,"top":1775,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3400,3050],[3550,3150],[3550,3250],[3400,3300]],most:{"left":1700,"right":1775,"top":1525,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2950,y:2700,w:50,h:3150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:2700,w:400,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:3300,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:50,y:3300,w:750,h:100,canCollide:true,inView:false,boundPlayer:true,})

//Rng fixing
C(1,[],[11],{type:[1,[],[11]],x:350,y:3400,w:600,h:25})
C(1,[],[5],{type:[1,[],[5]],x:3100,y:5900,w:100,h:100})
C(1,[],[5],{type:[1,[],[5]],x:10400,y:3300,w:800,h:50})
C(1,[],[3],{type:[1,[],[3]],x:17100,y:6300,w:2900,h:200,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(1,[],[3],{type:[1,[],[3]],x:16700,y:5400,w:2900,h:400,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})

//Zoom out on 9
{
let lastColliding = false;
let colliding = false;
let scale;
shared.C(1,[],[3],{x:9000,y:6000,w:3000,h:3800,cr:()=>{},ef:(p)=>{
	const t = (p.pos.y - 6000) / 3800;
	scale = (1-t) * 0.4 + (t) * 1;
	shared.changeCameraScale(scale);
	colliding = true;
},sf:()=>{
	if(lastColliding === true && colliding === false){
			scale = 1;
			shared.changeCameraScale(scale);
	}
	lastColliding = colliding;
	colliding = false;
}})
}

C(2,[],[1],{type:[2,[],[1]],points:[[800,2800],[1100,2800],[1100,3000]],most:{"left":400,"right":550,"top":1400,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[50,2200],[350,2200],[50,3300]],most:{"left":25,"right":175,"top":1100,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2400,2700],[2950,3050],[2950,3450],[2400,3100]],most:{"left":1200,"right":1475,"top":1350,"bottom":1725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1000,2500],[1050,2700],[950,2700]],most:{"left":475,"right":525,"top":1250,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2050,3800],[2150,3800],[2300,4300],[1800,4300]],most:{"left":900,"right":1150,"top":1900,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1200,y:4300,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:3400,w:100,h:800,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2700,y:4900,w:250,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:2600,y:4950,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1800,y:4950,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:4900,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:4900,w:100,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:5250,w:1450,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:600,y:5400,w:2350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:600,y:4700,w:200,h:100,points:[[300,2350],[400,2350]],speed:100,currentPoint:0.8499999999998442,alongWith:false,pointOn:{"x":300,"y":2350},pointTo:{"x":400,"y":2350},xv:100,yv:0,inView:false,path:[[600,4700,3.3333333333333335],[800,4700,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:600,y:4250,w:200,h:100,points:[[300,2125],[400,2125]],speed:100,currentPoint:1.8499999999998442,alongWith:false,pointOn:{"x":400,"y":2125},pointTo:{"x":300,"y":2125},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[600,4250,3.3333333333333335],[800,4250,3.3333333333333335]],})
C(0,[],[1],{type:[0,[],[1]],x:450,y:4300,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:100,y:4750,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:450,y:5200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:600,y:5150,w:200,h:100,points:[[300,2575],[400,2575]],speed:100,currentPoint:1.8499999999998442,alongWith:false,pointOn:{"x":400,"y":2575},pointTo:{"x":300,"y":2575},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[600,5150,3.3333333333333335],[800,5150,3.3333333333333335]],})
C(2,[],[1],{type:[2,[],[1]],points:[[1000,4200],[1100,4200],[1200,4300],[1200,4400]],most:{"left":500,"right":600,"top":2100,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1100,3900],[1500,4300],[1400,4300],[1100,4000]],most:{"left":550,"right":750,"top":1950,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1100,4050],[1350,4300],[1250,4300],[1100,4150]],most:{"left":550,"right":675,"top":2025,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:2200,w:50,h:3800,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:500,y:3900,w:100,h:1600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[3],{type:[1,[],[3]],x:900,y:5500,w:200,h:50,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(2,[],[1],{type:[2,[],[1]],points:[[1000,5900],[1050,6000],[950,6000]],most:{"left":475,"right":525,"top":2950,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[3],{type:[1,[],[3]],x:1400,y:5500,w:200,h:50,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,5850],[1600,6000],[1400,6000]],most:{"left":700,"right":800,"top":2925,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[3],{type:[1,[],[3]],x:1900,y:5500,w:200,h:50,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(2,[],[1],{type:[2,[],[1]],points:[[1950,5950],[2000,6000],[1900,6000]],most:{"left":950,"right":1000,"top":2975,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2050,5900],[2100,6000],[2000,6000]],most:{"left":1000,"right":1050,"top":2950,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[3],{type:[1,[],[3]],x:2600,y:5500,w:350,h:50,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})


C(1,[],[1],{type:[1,[],[1]],x:2700,y:5750,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:3150,y:5650,w:300,h:300,spawn:{"x":1650,"y":2900},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:5100,w:500,h:500,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2550,3200],[2800,3350],[2650,3350]],most:{"left":1275,"right":1400,"top":1600,"bottom":1675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[50,3400],[350,3400],[50,3500]],most:{"left":25,"right":175,"top":1700,"bottom":1750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:5500,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:5500,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:5600,w:200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:5300,w:100,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:5100,w:500,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:5600,w:300,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5000,y:5400,w:100,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:5100,w:500,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:5400,w:100,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:5000,w:100,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:6850,y:5650,w:300,h:300,spawn:{"x":3500,"y":2900},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:5800,w:100,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:5100,w:300,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5900,y:5800,w:200,h:200,points:[[2950,2900],[2950,2600],[3250,2600],[3250,2900]],speed:400,currentPoint:1.1333333333337487,collidable:true,pointOn:{"x":2950,"y":2600},pointTo:{"x":3250,"y":2600},xv:400,yv:0,inView:false,path:[[5900,5800,13.333333333333334],[5900,5200,13.333333333333334],[6500,5200,13.333333333333334],[6500,5800,13.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5900,y:5800,w:200,h:200,points:[[2950,2900],[2950,2600],[3250,2600],[3250,2900]],speed:400,currentPoint:3.1333333333337485,collidable:true,pointOn:{"x":3250,"y":2900},pointTo:{"x":2950,"y":2900},xv:-400,yv:4.898587196589413e-14,inView:false,path:[[5900,5800,13.333333333333334],[5900,5200,13.333333333333334],[6500,5200,13.333333333333334],[6500,5800,13.333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:5400,w:400,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:5600,w:100,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:5000,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:5100,w:100,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:5100,w:800,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:6000,w:3350,h:650,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14200,0],[14300,0],[14250,100]],most:{"left":7100,"right":7150,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6800,y:5175,w:400,h:50,angle:-1233,rotateSpeed:-0.051515151515151514,pivotX:7000,pivotY:5200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:-21.519909677090084,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:5400,w:400,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:5000,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:1500,w:100,h:3600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:900,w:200,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:4800,w:200,h:200,points:[[3250,2400],[3650,2400]],speed:100,currentPoint:1.7125000000003117,collidable:true,pointOn:{"x":3650,"y":2400},pointTo:{"x":3250,"y":2400},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,4800,3.3333333333333335],[7300,4800,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:4600,w:100,h:200,points:[[3250,2300],[3450,2300]],speed:100,currentPoint:1.4250000000006229,collidable:true,pointOn:{"x":3450,"y":2300},pointTo:{"x":3250,"y":2300},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,4600,3.3333333333333335],[6900,4600,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:4600,w:100,h:200,points:[[3500,2300],[3700,2300]],speed:100,currentPoint:1.4250000000006229,collidable:true,pointOn:{"x":3700,"y":2300},pointTo:{"x":3500,"y":2300},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[7000,4600,3.3333333333333335],[7400,4600,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:4400,w:100,h:200,points:[[3500,2200],[3700,2200]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3700,"y":2200},pointTo:{"x":3500,"y":2200},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[7000,4400,6.666666666666667],[7400,4400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:4400,w:100,h:200,points:[[3250,2200],[3450,2200]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3450,"y":2200},pointTo:{"x":3250,"y":2200},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[6500,4400,6.666666666666667],[6900,4400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:4200,w:200,h:200,points:[[3250,2100],[3650,2100]],speed:100,currentPoint:0.7125000000003116,collidable:true,pointOn:{"x":3250,"y":2100},pointTo:{"x":3650,"y":2100},xv:100,yv:0,inView:false,path:[[6500,4200,3.3333333333333335],[7300,4200,3.3333333333333335]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7400,y:4300,w:100,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6500,y:4300,w:100,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:4000,w:100,h:200,points:[[3250,2000],[3350,2000]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3350,"y":2000},pointTo:{"x":3250,"y":2000},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,4000,3.3333333333333335],[6700,4000,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6850,y:4000,w:100,h:200,points:[[3425,2000],[3525,2000]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3525,"y":2000},pointTo:{"x":3425,"y":2000},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6850,4000,3.3333333333333335],[7050,4000,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:4000,w:100,h:200,points:[[3600,2000],[3700,2000]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3700,"y":2000},pointTo:{"x":3600,"y":2000},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[7200,4000,3.3333333333333335],[7400,4000,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:3800,w:200,h:200,points:[[3250,1900],[3650,1900]],speed:100,currentPoint:1.7125000000003117,collidable:true,pointOn:{"x":3650,"y":1900},pointTo:{"x":3250,"y":1900},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,3800,3.3333333333333335],[7300,3800,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:3600,w:200,h:200,points:[[3250,1800],[3650,1800]],speed:100,currentPoint:0.7125000000003116,collidable:true,pointOn:{"x":3250,"y":1800},pointTo:{"x":3650,"y":1800},xv:100,yv:0,inView:false,path:[[6500,3600,3.3333333333333335],[7300,3600,3.3333333333333335]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,3700],[7500,3900],[7400,3800]],most:{"left":3700,"right":3750,"top":1850,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,3700],[6600,3800],[6500,3900]],most:{"left":3250,"right":3300,"top":1850,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,4200],[6600,4300],[6500,4300]],most:{"left":3250,"right":3300,"top":2100,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,4200],[7500,4300],[7400,4300]],most:{"left":3700,"right":3750,"top":2100,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:3400,w:100,h:200,points:[[3500,1700],[3700,1700]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3700,"y":1700},pointTo:{"x":3500,"y":1700},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[7000,3400,6.666666666666667],[7400,3400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:3400,w:100,h:200,points:[[3250,1700],[3450,1700]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3450,"y":1700},pointTo:{"x":3250,"y":1700},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[6500,3400,6.666666666666667],[6900,3400,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:2700,w:250,h:100,points:[[3500,1350],[3500,1650]],speed:200,currentPoint:1.5666666666668743,collidable:true,pointOn:{"x":3500,"y":1650},pointTo:{"x":3500,"y":1350},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[7000,2700,6.666666666666667],[7000,3300,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7250,y:3300,w:250,h:100,points:[[3625,1650],[3625,1350]],speed:200,currentPoint:1.5666666666668743,collidable:true,pointOn:{"x":3625,"y":1350},pointTo:{"x":3625,"y":1650},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[7250,3300,6.666666666666667],[7250,2700,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6750,y:3300,w:250,h:100,points:[[3375,1650],[3375,1350]],speed:200,currentPoint:1.5666666666668743,collidable:true,pointOn:{"x":3375,"y":1350},pointTo:{"x":3375,"y":1650},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[6750,3300,6.666666666666667],[6750,2700,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:2700,w:250,h:100,points:[[3250,1350],[3250,1650]],speed:200,currentPoint:1.5666666666668743,collidable:true,pointOn:{"x":3250,"y":1650},pointTo:{"x":3250,"y":1350},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[6500,2700,6.666666666666667],[6500,3300,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6850,y:2500,w:100,h:200,points:[[3425,1250],[3525,1250]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3525,"y":1250},pointTo:{"x":3425,"y":1250},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6850,2500,3.3333333333333335],[7050,2500,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:2500,w:100,h:200,points:[[3600,1250],[3700,1250]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3700,"y":1250},pointTo:{"x":3600,"y":1250},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[7200,2500,3.3333333333333335],[7400,2500,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:2500,w:100,h:200,points:[[3250,1250],[3350,1250]],speed:100,currentPoint:1.850000000001246,collidable:true,pointOn:{"x":3350,"y":1250},pointTo:{"x":3250,"y":1250},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,2500,3.3333333333333335],[6700,2500,3.3333333333333335]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,2300],[7500,2500],[7400,2400]],most:{"left":3700,"right":3750,"top":1150,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,2300],[6600,2400],[6500,2500]],most:{"left":3250,"right":3300,"top":1150,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:2300,w:100,h:200,points:[[3500,1150],[3700,1150]],speed:100,currentPoint:1.4250000000006229,collidable:true,pointOn:{"x":3700,"y":1150},pointTo:{"x":3500,"y":1150},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[7000,2300,3.3333333333333335],[7400,2300,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:2300,w:100,h:200,points:[[3250,1150],[3450,1150]],speed:100,currentPoint:1.4250000000006229,collidable:true,pointOn:{"x":3450,"y":1150},pointTo:{"x":3250,"y":1150},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,2300,3.3333333333333335],[6900,2300,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:2100,w:200,h:200,points:[[3250,1050],[3650,1050]],speed:100,currentPoint:0.7125000000003116,collidable:true,pointOn:{"x":3250,"y":1050},pointTo:{"x":3650,"y":1050},xv:100,yv:0,inView:false,path:[[6500,2100,3.3333333333333335],[7300,2100,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7000,y:1900,w:100,h:200,points:[[3500,950],[3700,950]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3700,"y":950},pointTo:{"x":3500,"y":950},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[7000,1900,6.666666666666667],[7400,1900,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:1900,w:100,h:200,points:[[3250,950],[3450,950]],speed:200,currentPoint:1.849999999999377,collidable:true,pointOn:{"x":3450,"y":950},pointTo:{"x":3250,"y":950},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[6500,1900,6.666666666666667],[6900,1900,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:1700,w:200,h:200,points:[[3250,850],[3650,850]],speed:100,currentPoint:1.7125000000003117,collidable:true,pointOn:{"x":3650,"y":850},pointTo:{"x":3250,"y":850},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[6500,1700,3.3333333333333335],[7300,1700,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:1500,w:200,h:200,points:[[3250,750],[3650,750]],speed:300,currentPoint:1.1375,collidable:true,pointOn:{"x":3650,"y":750},pointTo:{"x":3250,"y":750},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[6500,1500,10],[7300,1500,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:1300,w:200,h:200,points:[[3250,650],[3650,650]],speed:200,currentPoint:1.4249999999996885,collidable:true,pointOn:{"x":3650,"y":650},pointTo:{"x":3250,"y":650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[6500,1300,6.666666666666667],[7300,1300,6.666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:900,w:1100,h:400,canJump:true,inView:false,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:7800,y:1500,radius:150,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[3900,850],[3900,900]],"type":"poly","props":{}},endPolygon:{"points":[[3800,750],[3750,750]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:7800,y:1500,radius:150,startAngle:3.9269908169872414,endAngle:0.7853981633974483,startPolygon:{"points":[[3829.289321881345,679.2893218813452],[3793.9339828220177,643.9339828220179]],"type":"poly","props":{}},endPolygon:{"points":[[3970.710678118655,820.7106781186548],[4006.0660171779823,856.0660171779821]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:3.9269908169872414,endSliceAngle:0.7853981633974483,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:1200,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:1200,w:100,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:1700,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:7600,y:1475,w:400,h:50,angle:2466,rotateSpeed:0.10303030303030303,pivotX:7800,pivotY:1500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:100.77822185373186,unSim:0,inView:true,initialRotation:43.03981935418017,})
C(1,[1],[1],{type:[1,[1],[1]],x:8100,y:2050,w:700,h:100,angle:1644,rotateSpeed:0.064,pivotX:8450,pivotY:2100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:28.69321290278678,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8100,y:1200,w:1200,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:1200,w:500,h:2300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:3000,w:1200,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8100,y:2650,w:700,h:100,angle:-1644,rotateSpeed:-0.064,pivotX:8450,pivotY:2700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:-28.69321290278678,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,2000],[8100,2200],[7600,2400]],most:{"left":3800,"right":4050,"top":1000,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,2950],[7900,3000],[7600,3000]],most:{"left":3800,"right":3950,"top":1475,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:9100,y:3100,w:100,h:300,angle:2466,rotateSpeed:0.10303030303030303,pivotX:9050,pivotY:3250,distToPivot:50,canCollide:true,renderType:"rotating",cullingRadius:129.05694150420948,unSim:0,inView:true,initialRotation:43.03981935418017,})
C(1,[1],[0],{type:[1,[1],[0]],x:8900,y:3100,w:100,h:300,angle:2466,rotateSpeed:0.10303030303030303,pivotX:9050,pivotY:3250,distToPivot:-50,canCollide:true,renderType:"rotating",cullingRadius:29.05694150420949,unSim:0,inView:true,initialRotation:43.03981935418017,})
C(0,[],[12],{type:[0,[],[12]],x:9050,y:3250,r:30,tpx:7800,tpy:3700,renderType:"circleR",radius:15,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:3900,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:3600,w:100,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:7650,y:3550,w:300,h:300,spawn:{"x":3900,"y":1850},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:5100,w:9400,h:900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:4000,w:500,h:1100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9800,y:1200,w:1300,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:2900,w:1500,h:1500,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:11100,y:3500,w:100,h:1600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8400,y:3700,w:200,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8100,y:4000,w:50,h:1100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8400,y:4600,w:200,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:8750,y:4750,w:200,h:100,maxStrength:17,currentStrength:17,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:9200,y:4450,w:100,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:9200,y:4400,w:100,h:50,maxStrength:24,currentStrength:24,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[10400,3500],[8600,3800],[8600,3600]],most:{"left":4300,"right":5200,"top":1750,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:8500,y:3500,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:3500,w:1100,h:100,canJump:true,inView:false,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9100,3600],[9650,3600],[9650,3750],[9100,3850]],most:{"left":4550,"right":4825,"top":1800,"bottom":1925},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:9050,y:3600,w:50,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:9500,y:4200,w:100,h:900,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:10100,y:4050,r:300,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9600,4600],[10100,5100],[9600,5100]],most:{"left":4800,"right":5050,"top":2300,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:10900,y:4700,w:200,h:100,maxStrength:32,currentStrength:32,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10800,y:4200,w:300,h:100,maxStrength:32,currentStrength:32,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10700,y:3700,w:400,h:100,maxStrength:32,currentStrength:32,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:10800,y:3500,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9800,y:3200,w:600,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:10800,y:3200,w:400,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9800,y:2350,w:1500,h:200,angle:616.5,rotateSpeed:0.025757575757575757,pivotX:10550,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:378.3186487605389,unSim:0,inView:true,initialRotation:10.759954838545042,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:3200,w:300,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:1700,w:100,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:2400,w:100,h:800,canJump:true,inView:false,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:10550,y:2450,radius:425,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[5650,1225],[5700,1225]],"type":"poly","props":{}},endPolygon:{"points":[[5275,1600],[5275,1650]],"type":"poly","props":{}},innerRadius:750,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:850,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:10550,y:2450,radius:425,startAngle:1.780235837034216,endAngle:-0.3141592653589793,startPolygon:{"points":[[5197.03311594334,1591.8053502751773],[5186.637531402453,1640.7127303118673]],"type":"poly","props":{}},endPolygon:{"points":[[5631.6461936106825,1109.1186271093948],[5679.19901942544,1093.6677773906474]],"type":"poly","props":{}},innerRadius:750,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:850,startSliceAngle:1.780235837034216,endSliceAngle:-0.3141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:3180,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9800,1700],[10150,1700],[9800,2050]],most:{"left":4900,"right":5075,"top":850,"bottom":1025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10950,1700],[11300,1700],[11300,2050]],most:{"left":5475,"right":5650,"top":850,"bottom":1025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11300,2850],[11300,3200],[10950,3200]],most:{"left":5475,"right":5650,"top":1425,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9800,2850],[10150,3200],[9800,3200]],most:{"left":4900,"right":5075,"top":1425,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:10000,y:2350,w:1100,h:200,angle:-616.5,rotateSpeed:-0.025757575757575757,pivotX:10550,pivotY:2450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:279.5084971874737,unSim:0,inView:true,initialRotation:-10.759954838545042,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:3.425,alongWith:false,pointOn:{"x":5850,"y":1350},pointTo:{"x":5850,"y":1650},xv:9.184850993605149e-15,yv:150,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[],[0],{type:[1,[],[0]],x:11400,y:2400,w:300,h:900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:2400,w:600,h:900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11400,y:3300,w:3000,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:4.425,alongWith:false,pointOn:{"x":5850,"y":1650},pointTo:{"x":6150,"y":1650},xv:150,yv:0,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:5.425,alongWith:false,pointOn:{"x":6150,"y":1650},pointTo:{"x":6450,"y":1650},xv:150,yv:0,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:6.425,alongWith:false,pointOn:{"x":6450,"y":1650},pointTo:{"x":6750,"y":1650},xv:150,yv:0,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:7.425,alongWith:false,pointOn:{"x":6750,"y":1650},pointTo:{"x":6750,"y":1350},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:0.425,alongWith:false,pointOn:{"x":6750,"y":1350},pointTo:{"x":6450,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:1.425,alongWith:false,pointOn:{"x":6450,"y":1350},pointTo:{"x":6150,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13500,y:2700,w:300,h:100,points:[[6750,1350],[6450,1350],[6150,1350],[5850,1350],[5850,1650],[6150,1650],[6450,1650],[6750,1650]],speed:150,currentPoint:2.425,alongWith:false,pointOn:{"x":6150,"y":1350},pointTo:{"x":5850,"y":1350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13500,2700,5],[12900,2700,5],[12300,2700,5],[11700,2700,5],[11700,3300,5],[12300,3300,5],[12900,3300,5],[13500,3300,5]],})
C(1,[],[1],{type:[1,[],[1]],x:11700,y:2800,w:2100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11700,y:2900,w:2100,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:13350,y:1700,w:50,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12250,2600],[12400,2800],[12100,2800]],most:{"left":6050,"right":6200,"top":1300,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12850,2500],[12950,2800],[12750,2800]],most:{"left":6375,"right":6475,"top":1250,"bottom":1400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,2200],[14400,2400],[14250,2400]],most:{"left":7100,"right":7200,"top":1100,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14000,1700],[14200,1700],[14200,2000],[14000,2200]],most:{"left":7000,"right":7100,"top":850,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:1700,w:400,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:2200,w:100,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:2200,w:100,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:1700,w:1300,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:14450,y:1850,w:300,h:300,spawn:{"x":7300,"y":1000},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,1700],[12750,1700],[12650,2100]],most:{"left":5700,"right":6375,"top":850,"bottom":1050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:17150,y:1200,r:100,renderType:"circle",inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:17700,y:0,w:1200,h:400,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
var timer14 = 0.1499999999999899; var state14 =false; var x14 = 17750; 
	C(1,[],[0],{h:100,w:100,y:50,x:-1000000000,sf:(e)=>{
					timer14 -= 1 / 60;
					if(timer14 < 0){
							state14 = !state14;
							if(state14 === true){
									// on
									timer14 += 0.5;
									e.pos.x = x14;
							} else {
									// off
									timer14 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state14) {
							if (timer14 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer14 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer14 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer14 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x14, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer15 = 0.15000000000000152; var state15 =false; var x15 = 17750; 
	C(1,[],[0],{h:100,w:100,y:250,x:-1000000000,sf:(e)=>{
					timer15 -= 1 / 60;
					if(timer15 < 0){
							state15 = !state15;
							if(state15 === true){
									// on
									timer15 += 0.25;
									e.pos.x = x15;
							} else {
									// off
									timer15 += 0.25;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state15) {
							if (timer15 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = timer15 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer15 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer15 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x15, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer16 = 0.1499999999999899; var state16 =false; var x16 = 17950; 
	C(1,[],[0],{h:100,w:100,y:250,x:-1000000000,sf:(e)=>{
					timer16 -= 1 / 60;
					if(timer16 < 0){
							state16 = !state16;
							if(state16 === true){
									// on
									timer16 += 0.5;
									e.pos.x = x16;
							} else {
									// off
									timer16 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state16) {
							if (timer16 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer16 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer16 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer16 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x16, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer17 = 0.15000000000000235; var state17 =false; var x17 = 17950; 
	C(1,[],[0],{h:100,w:100,y:50,x:-1000000000,sf:(e)=>{
					timer17 -= 1 / 60;
					if(timer17 < 0){
							state17 = !state17;
							if(state17 === true){
									// on
									timer17 += 0.25;
									e.pos.x = x17;
							} else {
									// off
									timer17 += 0.25;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state17) {
							if (timer17 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = timer17 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer17 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer17 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x17, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer18 = 0.1499999999999924; var state18 =false; var x18 = 18150; 
	C(1,[],[0],{h:100,w:100,y:50,x:-1000000000,sf:(e)=>{
					timer18 -= 1 / 60;
					if(timer18 < 0){
							state18 = !state18;
							if(state18 === true){
									// on
									timer18 += 0.5;
									e.pos.x = x18;
							} else {
									// off
									timer18 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state18) {
							if (timer18 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer18 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer18 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer18 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x18, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer19 = 0.1499999999999899; var state19 =true; var x19 = 18350; 
	C(1,[],[0],{h:100,w:100,y:250,x:18350,sf:(e)=>{
					timer19 -= 1 / 60;
					if(timer19 < 0){
							state19 = !state19;
							if(state19 === true){
									// on
									timer19 += 0.5;
									e.pos.x = x19;
							} else {
									// off
									timer19 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state19) {
							if (timer19 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer19 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer19 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer19 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x19, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer20 = 0.15000000000000072; var state20 =false; var x20 = 18350; 
	C(1,[],[0],{h:100,w:100,y:50,x:-1000000000,sf:(e)=>{
					timer20 -= 1 / 60;
					if(timer20 < 0){
							state20 = !state20;
							if(state20 === true){
									// on
									timer20 += 0.25;
									e.pos.x = x20;
							} else {
									// off
									timer20 += 0.25;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state20) {
							if (timer20 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = timer20 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer20 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer20 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x20, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer21 = 0.1499999999999899; var state21 =true; var x21 = 18150; 
	C(1,[],[0],{h:100,w:100,y:250,x:18150,sf:(e)=>{
					timer21 -= 1 / 60;
					if(timer21 < 0){
							state21 = !state21;
							if(state21 === true){
									// on
									timer21 += 0.5;
									e.pos.x = x21;
							} else {
									// off
									timer21 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state21) {
							if (timer21 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer21 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer21 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer21 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x21, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer22 = 0.1499999999999899; var state22 =false; var x22 = 18550; 
	C(1,[],[0],{h:100,w:100,y:250,x:-1000000000,sf:(e)=>{
					timer22 -= 1 / 60;
					if(timer22 < 0){
							state22 = !state22;
							if(state22 === true){
									// on
									timer22 += 0.5;
									e.pos.x = x22;
							} else {
									// off
									timer22 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state22) {
							if (timer22 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer22 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer22 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer22 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x22, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer23 = 0.1499999999999899; var state23 =false; var x23 = 18550; 
	C(1,[],[0],{h:100,w:100,y:50,x:-1000000000,sf:(e)=>{
					timer23 -= 1 / 60;
					if(timer23 < 0){
							state23 = !state23;
							if(state23 === true){
									// on
									timer23 += 0.5;
									e.pos.x = x23;
							} else {
									// off
									timer23 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state23) {
							if (timer23 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer23 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer23 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer23 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x23, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer24 = 0.15000000000000152; var state24 =false; var x24 = 18750; 
	C(1,[],[0],{h:100,w:100,y:250,x:-1000000000,sf:(e)=>{
					timer24 -= 1 / 60;
					if(timer24 < 0){
							state24 = !state24;
							if(state24 === true){
									// on
									timer24 += 0.25;
									e.pos.x = x24;
							} else {
									// off
									timer24 += 0.25;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state24) {
							if (timer24 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = timer24 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer24 < 0.2 && 0.25 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer24 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x24, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
var timer25 = 0.1499999999999899; var state25 =true; var x25 = 18750; 
	C(1,[],[0],{h:100,w:100,y:50,x:18750,sf:(e)=>{
					timer25 -= 1 / 60;
					if(timer25 < 0){
							state25 = !state25;
							if(state25 === true){
									// on
									timer25 += 0.5;
									e.pos.x = x25;
							} else {
									// off
									timer25 += 0.5;
									e.pos.x = -1E9;
							}
					}
			},
			cr:(e)=>{
					ctx.beginPath();
					
					if (state25) {
							if (timer25 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = timer25 / 0.2;
							}
					} else {
							ctx.globalAlpha = 0.3;
							if (timer25 < 0.2 && 0.5 > 0.2) {
									ctx.globalAlpha = 0.9 * (1 - timer25 / 0.2) + 0.1;
							}
					}
					ctx.fillStyle = colors.tile;
					ctx.rect(x25, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.fill();
					ctx.closePath();
					ctx.globalAlpha = 1;
			}
	});
C(1,[],[0],{type:[1,[],[0]],x:2900,y:2600,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[10],{type:[1,[],[10]],x:1350,y:4050,w:500,h:100,maxStrength:35,currentStrength:35,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:2200,y:5200,w:200,h:50,maxStrength:15,currentStrength:15,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:1100,y:5350,w:200,h:50,maxStrength:15,currentStrength:15,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:14400,y:2500,w:900,h:100,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:14400,y:2600,w:200,h:200,points:[[7200,1300],[7550,1300]],speed:150,currentPoint:0.9357142857142857,collidable:false,pointOn:{"x":7200,"y":1300},pointTo:{"x":7550,"y":1300},xv:150,yv:0,inView:false,path:[[14400,2600,5],[15100,2600,5]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:14400,y:2600,w:200,h:200,points:[[7200,1300],[7550,1300]],speed:150,currentPoint:1.9357142857142857,collidable:false,pointOn:{"x":7550,"y":1300},pointTo:{"x":7200,"y":1300},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14400,2600,5],[15100,2600,5]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:14400,y:2800,w:200,h:200,points:[[7200,1400],[7550,1400]],speed:300,currentPoint:0.8714285714285714,collidable:false,pointOn:{"x":7200,"y":1400},pointTo:{"x":7550,"y":1400},xv:300,yv:0,inView:false,path:[[14400,2800,10],[15100,2800,10]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:14400,y:3000,w:200,h:200,points:[[7200,1500],[7550,1500]],speed:450,currentPoint:1.8071428571428572,collidable:false,pointOn:{"x":7550,"y":1500},pointTo:{"x":7200,"y":1500},xv:-450,yv:5.510910596163089e-14,inView:false,path:[[14400,3000,15],[15100,3000,15]],boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:15300,y:2500,w:800,h:1800,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:11400,y:4300,w:4700,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:14400,y:3450,w:900,h:200,angle:2466,rotateSpeed:0.10303030303030303,pivotX:14850,pivotY:3550,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:230.4886114323222,unSim:0,inView:true,initialRotation:43.03981935418017,boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:3500,w:200,h:200,points:[[6750,1750],[7100,1750]],speed:600,currentPoint:0.7428571428571429,collidable:false,pointOn:{"x":6750,"y":1750},pointTo:{"x":7100,"y":1750},xv:600,yv:0,inView:false,path:[[13500,3500,20],[14200,3500,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:3700,w:200,h:200,points:[[6750,1850],[7100,1850]],speed:600,currentPoint:1.7428571428571429,collidable:false,pointOn:{"x":7100,"y":1850},pointTo:{"x":6750,"y":1850},xv:-600,yv:7.347880794884119e-14,inView:false,path:[[13500,3700,20],[14200,3700,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:3900,w:200,h:200,points:[[6750,1950],[7100,1950]],speed:600,currentPoint:0.7428571428571429,collidable:false,pointOn:{"x":6750,"y":1950},pointTo:{"x":7100,"y":1950},xv:600,yv:0,inView:false,path:[[13500,3900,20],[14200,3900,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:4100,w:200,h:200,points:[[6750,2050],[7100,2050]],speed:600,currentPoint:1.7428571428571429,collidable:false,pointOn:{"x":7100,"y":2050},pointTo:{"x":6750,"y":2050},xv:-600,yv:7.347880794884119e-14,inView:false,path:[[13500,4100,20],[14200,4100,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13100,y:4100,w:200,h:200,points:[[6550,2050],[6900,2050]],speed:600,currentPoint:1.7428571428571429,collidable:false,pointOn:{"x":6900,"y":2050},pointTo:{"x":6550,"y":2050},xv:-600,yv:7.347880794884119e-14,inView:false,path:[[13100,4100,20],[13800,4100,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13100,y:3900,w:200,h:200,points:[[6550,1950],[6900,1950]],speed:600,currentPoint:0.7428571428571429,collidable:false,pointOn:{"x":6550,"y":1950},pointTo:{"x":6900,"y":1950},xv:600,yv:0,inView:false,path:[[13100,3900,20],[13800,3900,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13100,y:3700,w:200,h:200,points:[[6550,1850],[6900,1850]],speed:600,currentPoint:1.7428571428571429,collidable:false,pointOn:{"x":6900,"y":1850},pointTo:{"x":6550,"y":1850},xv:-600,yv:7.347880794884119e-14,inView:false,path:[[13100,3700,20],[13800,3700,20]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13100,y:3500,w:200,h:200,points:[[6550,1750],[6900,1750]],speed:600,currentPoint:0.7428571428571429,collidable:false,pointOn:{"x":6550,"y":1750},pointTo:{"x":6900,"y":1750},xv:600,yv:0,inView:false,path:[[13100,3500,20],[13800,3500,20]],boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:12600,y:3500,w:100,h:800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:11400,y:3500,w:800,h:200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:11400,y:4100,w:800,h:200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:11400,y:3700,w:1200,h:100,points:[[5700,1850],[5700,2000]],speed:150,currentPoint:0.85,collidable:false,pointOn:{"x":5700,"y":1850},pointTo:{"x":5700,"y":2000},xv:9.184850993605149e-15,yv:150,inView:false,path:[[11400,3700,5],[11400,4000,5]],boundPlayer:false,})
C(0,[],[12],{type:[0,[],[12]],x:11400,y:3900,r:150,tpx:11600,tpy:4900,renderType:"circleR",radius:75,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11200,y:3200,w:200,h:1900,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:16500,y:4700,w:100,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:4700,w:100,h:400,canJump:true,inView:false,isNormal:true,})
C(0,[],[0],{type:[0,[],[0]],x:13300,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:13600,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:13900,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14200,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14500,y:5150,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14800,y:5150,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15100,y:5150,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15400,y:5150,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15600,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15900,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:16250,y:4900,r:100,renderType:"circle",inView:false,})
var inv465=0;C(1,[],[3],{cr:()=>{},x:11500,y:4800,w:200,h:200,ef:()=>{
			inv465 = 0;
	}});
C(1,[],[0],{type:[1,[],[0]],x:16100,y:4400,w:600,h:300,canJump:true,inView:false,isNormal:true,})
C(0,[],[0],{type:[0,[],[0]],x:13000,y:4650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:12850,y:4600,r:158,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6.123233995736764e-14,y:6000,w:9000,h:4000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:6000,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:6300,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:6400,w:900,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:6000,w:2300,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:9950,y:6050,w:100,h:100,points:[[4975,3025],[5075,3025],[5075,3125],[4975,3125]],speed:2000,currentPoint:1.0000000000006366,alongWith:false,pointOn:{"x":5075,"y":3025},pointTo:{"x":5075,"y":3125},xv:1.2246467991473532e-13,yv:2000,inView:false,path:[[9950,6050,66.66666666666667],[10150,6050,66.66666666666667],[10150,6250,66.66666666666667],[9950,6250,66.66666666666667]],})
var minX26, minY26, maxX26, maxY26;
	minX26 = 9850;minY26 = 5950;maxX26 = 10350;maxY26 = 6450;
	C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
			const player = shared.players[shared.selfId];
			if ((player.pos.x) > md(minX26) && (player.pos.x) < md(maxX26) && (player.pos.y) > md(minY26) && (player.pos.y) < md(maxY26)) {
					colors.background="#fe6262"; colors.tile="#ff0000";
			}
	},});
var minX27, minY27, maxX27, maxY27;
	minX27 = 8950;minY27 = 5950;maxX27 = 9450;maxY27 = 6450;
	C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
			const player = shared.players[shared.selfId];
			if ((player.pos.x) > md(minX27) && (player.pos.x) < md(maxX27) && (player.pos.y) > md(minY27) && (player.pos.y) < md(maxY27)) {
					colors.background="#80b792"; colors.tile="#588466";
			}
	},});
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:2.425,alongWith:false,pointOn:{"x":4800,"y":3700},pointTo:{"x":4500,"y":3700},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:3.425,alongWith:false,pointOn:{"x":4500,"y":3700},pointTo:{"x":4500,"y":4000},xv:9.184850993605149e-15,yv:150,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:4.425,alongWith:false,pointOn:{"x":4500,"y":4000},pointTo:{"x":4800,"y":4000},xv:150,yv:0,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:5.425,alongWith:false,pointOn:{"x":4800,"y":4000},pointTo:{"x":5100,"y":4000},xv:150,yv:0,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:6.425,alongWith:false,pointOn:{"x":5100,"y":4000},pointTo:{"x":5400,"y":4000},xv:150,yv:0,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:7.425,alongWith:false,pointOn:{"x":5400,"y":4000},pointTo:{"x":5400,"y":3700},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:0.425,alongWith:false,pointOn:{"x":5400,"y":3700},pointTo:{"x":5100,"y":3700},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:7400,w:300,h:100,points:[[5400,3700],[5100,3700],[4800,3700],[4500,3700],[4500,4000],[4800,4000],[5100,4000],[5400,4000]],speed:150,currentPoint:1.425,alongWith:false,pointOn:{"x":5100,"y":3700},pointTo:{"x":4800,"y":3700},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[10800,7400,5],[10200,7400,5],[9600,7400,5],[9000,7400,5],[9000,8000,5],[9600,8000,5],[10200,8000,5],[10800,8000,5]],})
C(1,[],[3],{type:[1,[],[3]],x:9000,y:7600,w:2100,h:600,ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:1.425,alongWith:false,pointOn:{"x":5550,"y":4350},pointTo:{"x":5250,"y":4350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:2.425,alongWith:false,pointOn:{"x":5250,"y":4350},pointTo:{"x":4950,"y":4350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:3.425,alongWith:false,pointOn:{"x":4950,"y":4350},pointTo:{"x":4950,"y":4650},xv:9.184850993605149e-15,yv:150,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:4.425,alongWith:false,pointOn:{"x":4950,"y":4650},pointTo:{"x":5250,"y":4650},xv:150,yv:0,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:5.425,alongWith:false,pointOn:{"x":5250,"y":4650},pointTo:{"x":5550,"y":4650},xv:150,yv:0,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:6.425,alongWith:false,pointOn:{"x":5550,"y":4650},pointTo:{"x":5850,"y":4650},xv:150,yv:0,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:7.425,alongWith:false,pointOn:{"x":5850,"y":4650},pointTo:{"x":5850,"y":4350},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:11700,y:8700,w:300,h:100,points:[[5850,4350],[5550,4350],[5250,4350],[4950,4350],[4950,4650],[5250,4650],[5550,4650],[5850,4650]],speed:150,currentPoint:0.425,alongWith:false,pointOn:{"x":5850,"y":4350},pointTo:{"x":5550,"y":4350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[11700,8700,5],[11100,8700,5],[10500,8700,5],[9900,8700,5],[9900,9300,5],[10500,9300,5],[11100,9300,5],[11700,9300,5]],})
C(1,[],[1],{type:[1,[],[1]],x:9900,y:8800,w:2100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11850,y:8600,r:350,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:8900,w:2100,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:6500,w:600,h:3000,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:9900,y:7200,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10300,y:6500,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9500,7300],[9600,7500],[9400,7500]],most:{"left":4700,"right":4800,"top":3650,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:9000,y:7500,w:2100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11150,y:7600,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10850,8650],[10950,8800],[10750,8800]],most:{"left":5375,"right":5475,"top":4325,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10350,8600],[10400,8800],[10300,8800]],most:{"left":5150,"right":5200,"top":4300,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10150,8200],[10250,8200],[10200,8400]],most:{"left":5075,"right":5125,"top":4100,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9000,8200],[9600,8200],[9000,9700]],most:{"left":4500,"right":4800,"top":4100,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9900,8800],[9900,9600],[9500,9200]],most:{"left":4750,"right":4950,"top":4400,"bottom":4800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9900,8900],[9900,9500],[9600,9200]],most:{"left":4800,"right":4950,"top":4450,"bottom":4750},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:9900,y:9500,w:2100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9000,9850],[9600,10000],[9000,10000]],most:{"left":4500,"right":4800,"top":4925,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[3],{type:[1,[0],[3]],x:9900,y:9600,w:400,h:100,points:[[4950,4800],[5800,4800]],speed:300,currentPoint:0.4176470588235294,alongWith:false,pointOn:{"x":4950,"y":4800},pointTo:{"x":5800,"y":4800},xv:300,yv:0,inView:false,path:[[9900,9600,10],[11600,9600,10]],ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(1,[],[1],{type:[1,[],[1]],x:10200,y:9900,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11500,y:9900,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[3],{type:[1,[0],[3]],x:9900,y:9600,w:400,h:100,points:[[4950,4800],[5800,4800]],speed:300,currentPoint:1.4176470588235295,alongWith:false,pointOn:{"x":5800,"y":4800},pointTo:{"x":4950,"y":4800},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[9900,9600,10],[11600,9600,10]],ef:(p,res,o) => {p.pos.x += res.overlapV.x; p.pos.y += res.overlapV.y; },cr:(o)=>{ctx.fillStyle = colors.tile; ctx.fillRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y)}})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:9500,w:100,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:12600,y:6000,w:500,h:4000,canJump:true,inView:false,isNormal:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:12400,y:9600,w:100,h:300,angle:-2466,rotateSpeed:-0.10303030303030303,pivotX:12350,pivotY:9750,distToPivot:50,canCollide:true,renderType:"rotating",cullingRadius:129.05694150420948,unSim:0,inView:true,initialRotation:-43.03981935418017,})
C(1,[1],[0],{type:[1,[1],[0]],x:12200,y:9600,w:100,h:300,angle:2466,rotateSpeed:0.10303030303030303,pivotX:12350,pivotY:9750,distToPivot:-50,canCollide:true,renderType:"rotating",cullingRadius:29.05694150420949,unSim:0,inView:true,initialRotation:43.03981935418017,})
C(1,[1],[0],{type:[1,[1],[0]],x:12200,y:9600,w:100,h:300,angle:-2466,rotateSpeed:-0.10303030303030303,pivotX:12350,pivotY:9750,distToPivot:-50,canCollide:true,renderType:"rotating",cullingRadius:29.05694150420949,unSim:0,inView:true,initialRotation:-43.03981935418017,})
C(0,[],[12],{type:[0,[],[12]],x:12350,y:9750,r:30,tpx:13350,tpy:9750,renderType:"circleR",radius:15,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13600,y:9500,w:1000,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:14600,y:6200,w:2100,h:3800,canJump:true,inView:false,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13100,9900],[13200,10000],[13100,10000]],most:{"left":6550,"right":6600,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13600,9900],[13600,10000],[13500,10000]],most:{"left":6750,"right":6800,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[17],{type:[1,[],[17]],x:13100,y:7300,w:1300,h:2200,time:0,maxTime:10,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:600,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:8500,w:200,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:6200,w:200,h:2100,canJump:true,inView:false,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:13100,y:9225,w:500,h:50,angle:-822,rotateSpeed:-Math.PI/90,pivotX:13350,pivotY:9250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:0,inView:true,initialRotation:-14.34660645139339,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:13600,y:9225,w:500,h:50,angle:822,rotateSpeed:Math.PI/90,pivotX:13850,pivotY:9250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.62344526401112,unSim:0,inView:true,initialRotation:14.34660645139339,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:8900,w:1000,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14100,y:9300,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14200,y:9350,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14300,y:8800,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14100,y:8500,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:13900,y:8200,w:200,h:200,points:[[6950,4100],[6950,4350]],speed:200,currentPoint:1.4800000000009967,collidable:true,pointOn:{"x":6950,"y":4350},pointTo:{"x":6950,"y":4100},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[13900,8200,6.666666666666667],[13900,8700,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:13600,y:8200,w:200,h:200,points:[[6800,4100],[6800,4350]],speed:200,currentPoint:0.4800000000009968,collidable:true,pointOn:{"x":6800,"y":4100},pointTo:{"x":6800,"y":4350},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[13600,8200,6.666666666666667],[13600,8700,6.666666666666667]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13400,y:8500,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:8500,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:8100,w:1100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13300,y:7500,w:1100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14000,y:7800,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13700,y:7600,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13400,y:7800,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:13400,y:7500,w:700,h:100,angle:616.5,rotateSpeed:0.025757575757575757,pivotX:13750,pivotY:7550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,unSim:0,inView:true,initialRotation:10.759954838545042,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:7000,w:800,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:13100,y:7900,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:13400,y:6450,w:1000,h:100,angle:2466,rotateSpeed:0.10303030303030303,pivotX:13900,pivotY:6500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.24689052802225,unSim:0,inView:true,initialRotation:43.03981935418017,})
C(1,[],[0],{type:[1,[],[0]],x:13100,y:6000,w:300,h:1100,canJump:true,inView:false,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:13900,y:6500,radius:300,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[6950,3500],[6950,3550]],"type":"poly","props":{}},endPolygon:{"points":[[6950,3000],[6950,2950]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:7000,w:300,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:6900,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:6800,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:6000,w:200,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:6100,w:100,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:6450,w:500,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:14600,y:6000,w:2000,h:50,points:[[7300,3000],[7300,3075]],speed:50,currentPoint:0.5666666666650053,pointOn:{"x":7300,"y":3000},pointTo:{"x":7300,"y":3075},xv:3.061616997868383e-15,yv:50,inView:false,path:[[14600,6000,1.6666666666666667],[14600,6150,1.6666666666666667]],})
C(1,[],[9],{type:[1,[],[9]],x:16750,y:5850,w:300,h:300,spawn:{"x":8450,"y":3000},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
var minX28, minY28, maxX28, maxY28;
	minX28 = 16650;minY28 = 5700;maxX28 = 17200;maxY28 = 6300;
	C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
			const player = shared.players[shared.selfId];
			if ((player.pos.x) > md(minX28) && (player.pos.x) < md(maxX28) && (player.pos.y) > md(minY28) && (player.pos.y) < md(maxY28)) {
					colors.background="#454545"; colors.tile="#000000";
			}
	},});
C(1,[],[14],{type:[1,[],[14]],x:17100,y:5800,w:2900,h:400,force:3400,dir:{"x":0,"y":3400},direction:"down",jumpHeight:275,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7346938775510204,jumpForce:79.75,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17400,6100],[17450,6200],[17350,6200]],most:{"left":8675,"right":8725,"top":3050,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17500,6050],[17550,6200],[17450,6200]],most:{"left":8725,"right":8775,"top":3025,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,6100],[17750,6200],[17650,6200]],most:{"left":8825,"right":8875,"top":3050,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17600,6050],[17650,6200],[17550,6200]],most:{"left":8775,"right":8825,"top":3025,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17950,5800],[18050,5800],[18000,6000]],most:{"left":8975,"right":9025,"top":2900,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18300,y:6100,w:200,h:100,points:[[9150,3050],[9150,2900]],speed:150,currentPoint:0.85,collidable:true,pointOn:{"x":9150,"y":3050},pointTo:{"x":9150,"y":2900},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[18300,6100,5],[18300,5800,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18500,y:6100,w:200,h:100,points:[[9250,3050],[9250,2900]],speed:150,currentPoint:1.85,collidable:true,pointOn:{"x":9250,"y":2900},pointTo:{"x":9250,"y":3050},xv:9.184850993605149e-15,yv:150,inView:false,path:[[18500,6100,5],[18500,5800,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18200,5800],[18300,5800],[18250,6000]],most:{"left":9100,"right":9150,"top":2900,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18700,5800],[18800,5800],[18750,6000]],most:{"left":9350,"right":9400,"top":2900,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18050,5800],[18200,5800],[18100,5900]],most:{"left":9025,"right":9100,"top":2900,"bottom":2950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19050,6100],[19100,6200],[19000,6200]],most:{"left":9500,"right":9550,"top":3050,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19150,6050],[19200,6200],[19100,6200]],most:{"left":9550,"right":9600,"top":3025,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19250,6050],[19300,6200],[19200,6200]],most:{"left":9600,"right":9650,"top":3025,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19350,6100],[19400,6200],[19300,6200]],most:{"left":9650,"right":9700,"top":3050,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,5800],[20000,6200],[19800,6000]],most:{"left":9900,"right":10000,"top":2900,"bottom":3100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:19600,y:5550,w:100,h:100,points:[[9800,2775],[9950,2775]],speed:150,currentPoint:0.85,alongWith:false,pointOn:{"x":9800,"y":2775},pointTo:{"x":9950,"y":2775},xv:150,yv:0,inView:false,path:[[19600,5550,5],[19900,5550,5]],})
C(1,[],[0],{type:[1,[],[0]],x:17100,y:4000,w:1400,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:16100,y:4000,w:600,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[2],{type:[1,[],[2]],x:18400,y:4400,w:1600,h:100,effect:900,inView:false,bounciness:400,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:16900,y:5300,w:1600,h:100,effect:900,inView:false,bounciness:400,decay:0.5,})
C(2,[],[1],{type:[2,[],[1]],points:[[19400,4400],[20000,4400],[20000,5100]],most:{"left":9700,"right":10000,"top":2200,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18600,4400],[19200,4400],[19200,4950]],most:{"left":9300,"right":9600,"top":2200,"bottom":2475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18500,5100],[19000,5400],[18400,5400]],most:{"left":9200,"right":9500,"top":2550,"bottom":2700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18100,y:4400,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17600,y:4400,w:200,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17600,y:5150,w:200,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16900,5050],[17400,5300],[16900,5300]],most:{"left":8450,"right":8700,"top":2525,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17150,4400],[17300,4400],[17250,4500]],most:{"left":8575,"right":8650,"top":2200,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:16700,y:5300,w:200,h:100,effect:600,inView:false,bounciness:550,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:16100,y:1500,w:1600,h:100,canJump:true,inView:false,isNormal:true,})
C(0,[],[1],{type:[0,[],[1]],x:17300,y:2800,r:800,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:308.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:5.379977419272521,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:368.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:6.427174970469118,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:428.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:7.474372521665717,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:488.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:8.521570072862314,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:548.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:9.56876762405891,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:18100,y:2600,w:400,h:400,angle:608.25,rotateSpeed:0.012878787878787878,pivotX:17300,pivotY:2800,distToPivot:500,canCollide:true,renderType:"rotating",cullingRadius:641.4213562373095,unSim:0,inView:true,initialRotation:10.615965175255509,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16100,1600],[16900,1600],[16100,2200]],most:{"left":8050,"right":8450,"top":800,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16100,1600],[16700,1600],[16100,2400]],most:{"left":8050,"right":8350,"top":800,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16100,3200],[16700,4000],[16100,4000]],most:{"left":8050,"right":8350,"top":1600,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18500,3200],[18500,4000],[17900,4000]],most:{"left":8950,"right":9250,"top":1600,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18500,3400],[18500,4000],[17700,4000]],most:{"left":8850,"right":9250,"top":1700,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17900,1600],[18500,1600],[18500,2300]],most:{"left":8950,"right":9250,"top":800,"bottom":1150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17900,y:1400,w:600,h:200,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,800],[18100,800],[17700,1200]],most:{"left":8850,"right":9050,"top":400,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18300,1000],[18300,1400],[17900,1400]],most:{"left":8950,"right":9150,"top":500,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:800,w:200,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:17100,y:6200,w:2900,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[8],{type:[1,[],[8]],x:17100,y:5800,w:200,h:400,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:18400,y:9700,w:1600,h:200,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:16700,y:9900,w:3300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18300,y:6500,w:100,h:3400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16700,y:7350,w:950,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:17400,y:7400,r:158,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:17650,y:7000,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17950,y:7000,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17750,y:7500,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18100,y:8250,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17650,y:8350,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:18050,y:8300,r:158,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:17550,y:8050,w:100,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17350,y:8250,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17150,y:8050,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18300,8500],[18300,9200],[18000,8800]],most:{"left":9000,"right":9150,"top":4250,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:16700,y:9700,w:200,h:200,points:[[8350,4850],[9050,4850]],speed:200,currentPoint:1.957142857142145,pointOn:{"x":9050,"y":4850},pointTo:{"x":8350,"y":4850},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[16700,9700,6.666666666666667],[18100,9700,6.666666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16700,y:9700,w:200,h:200,points:[[8350,4850],[9050,4850]],speed:200,currentPoint:0.9571428571421451,pointOn:{"x":8350,"y":4850},pointTo:{"x":9050,"y":4850},xv:200,yv:0,inView:false,path:[[16700,9700,6.666666666666667],[18100,9700,6.666666666666667]],})
C(1,[],[0],{type:[1,[],[0]],x:17300,y:9500,w:400,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:16700,y:9700,w:50,h:200,tpx:19850,tpy:6650,bgColor:"#6b3c80",tileColor:"#9952a7",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:6800,w:600,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:18950,y:6800,w:450,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18700,y:6800,w:250,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:6800,w:200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:18400,y:7600,w:1200,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:7700,w:1300,h:100,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19800,7350],[19700,7700],[19500,7700]],most:{"left":9750,"right":9900,"top":3675,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:8200,w:100,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:9200,w:500,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19400,y:7800,w:100,h:1500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19950,y:7800,w:50,h:1400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19500,y:7800,w:200,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:7800,w:100,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:8000,w:600,h:100,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:19000,y:8000,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:8500,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19000,y:8600,w:400,h:100,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18700,8300],[19000,8600],[18800,8600]],most:{"left":9350,"right":9500,"top":4150,"bottom":4300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,8100],[18600,8600],[18400,8750]],most:{"left":9200,"right":9300,"top":4050,"bottom":4375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18800,y:8600,w:200,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:18600,y:9400,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18950,y:9450,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19450,y:9500,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19800,y:9550,r:158,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17350,y:8200,w:100,h:50,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,7400],[17850,7550],[17700,7550]],most:{"left":8850,"right":8925,"top":3700,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16700,y:8150,w:150,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16950,y:8450,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:17550,y:9300,r:158,renderType:"circle",inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[17200,9150],[17700,9400],[17100,9400]],most:{"left":8550,"right":8850,"top":4575,"bottom":4700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16700,y:9400,w:1200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:16750,y:9450,r:158,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:1900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:8200,y:4850,w:150,h:100,maxStrength:17,currentStrength:17,time:0,timer:0,regenTime:133.33333333333334,inView:false,healSpeed:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[9650,3500],[10400,3500],[10200,4450],[9650,3750]],most:{"left":4825,"right":5200,"top":1750,"bottom":2225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:400,w:200,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:18700,y:400,w:100,h:200,force:15000,dir:{"x":0,"y":-15000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:11.15546218487395,})
C(1,[],[7],{type:[1,[],[7]],x:17750,y:650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:19600,y:1900,w:400,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[20],{x:3050,y:2250,w:300,h:300,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
			for(let i = 0; i < obstacles.length; i++){
					if(obstacles[i].collected !== undefined){
							obstacles[i].collected = false;
					} else if(obstacles[i].isCoindoor === true){
							obstacles[i].coins = obstacles[i].maxCoins; 
					}
			}    
	}});
	C(1,[],[20],{x:12700, y:0, w:800, h:800,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
		for(let i = 0; i < obstacles.length; i++){
				if(obstacles[i].collected !== undefined){
						obstacles[i].collected = false;
				} else if(obstacles[i].isCoindoor === true){
						obstacles[i].coins = obstacles[i].maxCoins; 
				}
		}    
}});

	
	
	
	C(1,[],[0],{type:[1,[],[0]],x:3400,y:2200,w:100,h:600,canJump:true,inView:false,isNormal:true,})
C(1,[],[7],{type:[1,[],[7]],x:3500,y:2200,w:525,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4025,y:2200,w:150,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4175,y:2200,w:525,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:3100,y:2700,w:200,h:200,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[11],{type:[1,[],[11]],x:18850,y:9000,w:100,h:50,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:19250,y:150,w:50,h:50,size:30,text:"Just go down to win!!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:12900,y:200,w:50,h:50,size:30,text:"2",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:11700,y:1550,w:50,h:50,size:30,text:"How will you get up?",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5300,y:2400,w:50,h:50,size:30,text:"3",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3200,y:2400,w:50,h:50,size:30,text:"4",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4100,y:4950,w:50,h:50,size:30,text:"complete three challenges",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3300,y:5800,w:50,h:50,size:30,text:"5",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:7000,y:5800,w:50,h:50,size:30,text:"6",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3300,y:6050,w:50,h:50,size:30,text:"Make a run for it!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:7800,y:3700,w:50,h:50,size:30,text:"7",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14600,y:2000,w:50,h:50,size:30,text:"8",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:15000,y:2350,w:50,h:50,size:30,text:"try not to use up",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:15000,y:2400,w:50,h:50,size:30,text:"all your invincibility!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:11900,y:5150,w:50,h:50,size:30,text:"USE THE BALLS TO SLOW YOURSELF!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9200,y:6200,w:50,h:50,size:30,text:"9",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9650,y:6050,w:50,h:50,size:30,text:"torture chamber",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9450,y:6350,w:50,h:50,size:30,text:"->",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9550,y:6350,w:50,h:50,size:30,text:"->",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9650,y:6350,w:50,h:50,size:30,text:"->",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9750,y:6350,w:50,h:50,size:30,text:"->",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9850,y:6350,w:50,h:50,size:30,text:"->",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16900,y:6000,w:50,h:50,size:30,text:"10",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:18500,y:4450,w:50,h:50,size:30,text:"!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:16550,y:9800,w:50,h:50,size:30,text:"touch this!",angle:45,story:false,fontSize:60,hex:"#FFFFFF",pivotX:16550,pivotY:9800,rotateSpeed:0,initialRotation:0.7853981633974483,})




    // invincibility powerup
    // safe rendering on the player
    {
			const maxInv = 145;
			let inv = maxInv;
			shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
					let inside = false;
					if (p.pos.x > 11300 && p.pos.y > 3300 && p.pos.x < 15400 && p.pos.y < 4400){
						inside = true;
					}
					if (p.pos.x > 14400 && p.pos.y > 2200 && p.pos.x < 15350 && p.pos.y < 4300){
						inside = true;
					}

					if(!inside){
							inv = maxInv;
							o.pos.x = -1E9;
							return;
					}

					if(inv <= 0){
							o.pos.x = -1E9;
							return;
					}

					if(p.dead === true){
							inv--;
					}

					o.sat.r = p.sat.r + inv; 
					o.pos.x = p.pos.x;
					o.pos.y = p.pos.y;
			}})
	} 


mapDimensions.x=20000;
mapDimensions.y=10000;

spawnPosition.x=19800;
spawnPosition.y=200;
shared.respawnPlayer();

shared.C(0,[],[26],{
	x: spawnPosition.x,
	y: spawnPosition.y,
	r: 50,
	musicPath: 'https://www.youtube.com/watch?v=7aGTqtjHhg0'
});
shared.C(1,[],[26],{
	x: 5150,
	y: 2250,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=92Eyg6ntieA'
});
shared.C(1,[],[26],{
	x: 6850,
	y: 5650,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=HWldp1P-ng4'
});
shared.C(1,[],[26],{
	x: 14450,
	y: 1850,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=_nyvKXeD7T4'
});
shared.C(1,[],[26],{
	x: 16750,
	y: 5850,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=jSQqoiBGhE4'
});
shared.C(1,[],[26],{
	x: 3150,
	y: 5650,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=gRLQ5C6Yfek'
});

shared.C(1,[],[26],{
	x: 9950,
	y: 6050,
	w: 600,
	h: 600,
	musicPath: 'https://www.youtube.com/watch?v=tXEPbotEjZE'
});


colors.background='#9f56ae'; colors.tile='#6e3e84';
});