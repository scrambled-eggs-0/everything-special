const amountOfTutorialMapsNeededToWin = 6;
const tutorialMaps = [
    `C(1,[],[12],{h:100,w:100,y:1450,x:50,tpy:800,tpx:200,});C(1,[],[0],{h:500,w:900,y:0,x:0,});C(1,[],[0],{h:500,w:900,y:1100,x:0,});
    C(3,[],[20],{fontSize:80,text:'Welcome!',y:100,x:450,hex:'#ffffff',});
    C(3,[0],[20],{fontSize:62,text:'Hold tap anywhere to',y:340,x:-550,path:[[0,0,23],[1000,0,0]],currentPoint:0,hex:'#ffffff',});
    C(3,[0],[20],{fontSize:62,text:'make your player move there!',y:400,x:-550,path:[[0,0,23],[1000,0,0]],currentPoint:0,hex:'#ffffff',});
    C(3,[0],[20],{fontSize:80,text:'Good Luck!',y:4500,x:450,path:[[0,0,23],[0,-3000,0]],currentPoint:0,hex:'#ffffff',});
    C(0,[],[6],{r:50,y:800,x:700,});
    C(3,[0],[20],{fontSize:62,text:'The rainbow object is your',y:1200,x:2450,path:[[0,0,23],[-2000,0,0]],currentPoint:0,hex:'#ffffff',});
    C(3,[0],[20],{fontSize:62,text:'goal, hold tap on it to reach it.',y:1260,x:2450,path:[[0,0,23],[-2000,0,0]],currentPoint:0,hex:'#ffffff',});
    colors.background=colourRgb(22,22,22);colors.tile=colourRgb(5,5,5);`,

    `colors.tile=colourRgb(12,13,16);colors.background=colourRgb(19,21,27);
    C(0,[],[0],{r:100,y:1200,x:900,});C(0,[],[0],{r:100,y:1200,x:600,});C(0,[],[0],{r:100,y:1200,x:300,});C(0,[],[0],{r:100,y:1200,x:0,});
    C(0,[],[1],{r:100,y:900,x:800,});C(0,[],[1],{r:100,y:900,x:450,});C(0,[],[1],{r:100,y:900,x:100,});
    C(0,[],[2],{r:100,y:600,x:625,decay:0.9,bounciness:12,});C(0,[],[2],{r:100,y:600,x:275,decay:0.9,bounciness:12,});
    C(0,[],[12],{r:100,y:300,x:450,tpy:600,tpx:450,});
    C(1,[],[6],{h:100,w:900,y:0,x:0,});
    C(3,[],[20],{fontSize:58,text:'Sometimes, there are',y:1330,x:540,hex:'#ffffff',});C(3,[],[20],{fontSize:58,text:'things in your way.',y:1390,x:540,hex:'#ffffff',});C(3,[],[20],{fontSize:58,text:'Each color has a unique',y:1450,x:540,hex:'#ffffff',});C(3,[],[20],{fontSize:58,text:'effect. Try to dodge',y:1510,x:540,hex:'#ffffff',});C(3,[],[20],{fontSize:58,text:'them to reach the finish!',y:1570,x:540,hex:'#ffffff',});`,

    `C(0,[],[2,18],{r:212.13203435596427,y:0,x:50,decay:0.98,bounciness:1,sizeChangePermanent:false,sizeMult:1.5,});C(0,[],[6],{r:100,y:300,x:850,});C(0,[],[17],{r:206.15528128088303,y:100,x:550,timeTrapToShowTenth:false,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:300,});C(0,[],[13],{r:250,y:500,x:175,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorAngle:112,conveyorForce:0.3,});C(0,[],[12,9],{r:254.95097567963924,y:650,x:700,tpy:800,tpx:350,checkpointOffsetY:-250,checkpointOffsetX:-200,});C(0,[],[10],{r:180.27756377319946,y:1150,x:650,healSpeed:1,regenTime:100,maxStrength:60,});C(0,[],[15],{r:150,y:1450,x:450,axisSpeedMultY:1,axisSpeedMultX:0,});C(0,[],[16],{r:304.138126514911,y:1100,x:100,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:40,snapDistanceY:100,snapDistanceX:100,toSnapY:true,toSnapX:true,});colors.tile=colourRgb(30,53,46);colors.background=colourRgb(50,76,69);`,

    // idea: nearly impossible level, teaching the player about scrolling
    `var angle1, xv1, yv1;
    C(1,[],[6],{h:100,w:900,y:0,x:0,});
    C(2,[0,2],[1],{points:[[0,200],[300,200],[150,400]],path:[[0,0,5],[600,0,5]],currentPoint:0,toStartGrowing:true,startGrowth:1,minGrowth:1,maxGrowth:1.25,shrinkSpeed:0.006,growSpeed:0.006,});
    C(2,[0,2],[1],{points:[[0,1200],[300,1200],[150,1400]],path:[[0,0,5],[600,0,5]],currentPoint:0,toStartGrowing:true,startGrowth:1,minGrowth:1,maxGrowth:1.25,shrinkSpeed:0.006,growSpeed:0.006,});
    C(2,[0,2],[1],{points:[[600,700],[900,700],[750,900]],path:[[600,0,5],[0,0,5]],currentPoint:0,toStartGrowing:true,startGrowth:1,minGrowth:1,maxGrowth:1.25,shrinkSpeed:0.006,growSpeed:0.006,});
    C(1,[1],[1],{h:100,w:900,y:950,x:0,pivotY:1000,pivotX:450,rotateSpeed:0.01,});
    C(1,[1],[1],{h:100,w:900,y:450,x:0,pivotY:500,pivotX:450,rotateSpeed:-0.01,});
    C(3,[],[20],{fontSize:72,text:'If a level is too hard,',y:750,x:450,hex:'#ffffff',});
    C(3,[],[20],{fontSize:72,text:'Swipe the side to scroll!',y:850,x:450,hex:'#ffffff',});
    C(1,[],[11],{h:200,w:900,y:1400,x:0,});
    Math.random() * 360;

    angle1 = 45;
    xv1 = Math.cos(angle1 / 180 * Math.PI) * 20;
    yv1 = Math.sin(angle1 / 180 * Math.PI) * 20;
    C(0,[3],[1],{r:120,y:800,x:450,sf:(e)=>{
    e.pos.y = yv1 + (e.pos.y);
    e.pos.x = xv1 + (e.pos.x);
    if ((e.pos.x) < 120) {
        xv1 = xv1 * -1;
    } else if ((e.pos.x) > 900 - 120) {
        xv1 = xv1 * -1;
    }
    if ((e.pos.y) < 100 + 120) {
        yv1 = yv1 * -1;
    } else if ((e.pos.y) > 1400 - 120) {
        yv1 = yv1 * -1;
    }
    },});
    
    var pointery = 1200;
    C(1,[3],[4],{h:250,w:250,y:700,x:705,url:'https://www.svgrepo.com/show/349610/pointer.svg',sf:(e)=>{
    pointery = (typeof pointery === 'number' ? pointery : 0) + -15;
    if (pointery < 200) pointery = 1200;
    e.pos.y += pointery - generateTopLeftCoordinates(e)[1];
    },});
    colors.tile=colourRgb(44,3,3);colors.background=colourRgb(62,11,11);`,

    // idea: semi filler level semi teaching the player more mechanics. Padding before the final boss
    `C(0,[],[9],{r:75,y:500,x:100,checkpointOffsetY:0,checkpointOffsetX:0,});C(0,[],[8],{r:100,y:500,x:100,coinDoorColor:'#d6d611',coindoorCoinAmount:3,});
    C(1,[],[1],{h:400,w:900,y:0,x:0,});
    C(1,[],[14],{h:400,w:900,y:1200,x:0,jumpDecay:0.95,jumpForce:20,maxJumpCooldown:30,platformerFriction:0.875,platformerAngleRotateSpeed:0,platformerAngle:90,platformerForce:1,});
    C(1,[1],[11],{h:100,w:100,y:150,x:450,pivotY:200,pivotX:650,rotateSpeed:-0.02,});
    C(1,[1],[11],{h:100,w:100,y:150,x:750,pivotY:200,pivotX:650,rotateSpeed:-0.02,});
    C(1,[],[0],{h:300,w:200,y:1300,x:700,});C(1,[],[0],{h:200,w:200,y:1400,x:400,});C(1,[],[0],{h:100,w:100,y:1500,x:200,});
    C(0,[],[7],{r:70.71067811865476,y:900,x:800,color:'#d6d611',coinAmount:1,});C(0,[],[7],{r:150,y:700,x:100,color:'#d6d611',coinAmount:1,});C(0,[],[7],{r:110.355339059,y:800,x:500,color:'#d6d611',coinAmount:1,});
    C(0,[],[6],{r:70.71067811865476,y:200,x:650,});
    C(2,[],[0],{points:[[0,1200],[300,1200],[0,1400]],});C(2,[],[0],{points:[[600,600],[900,600],[900,700]],});C(2,[],[0],{points:[[0,900],[300,1000],[0,1000]],});
    C(1,[],[0],{h:200,w:600,y:400,x:300,});C(1,[],[0],{h:200,w:600,y:1000,x:0,});C(0,[],[0],{r:100,y:500,x:300,});C(0,[],[0],{r:100,y:1100,x:600,});
    C(2,[],[11],{points:[[50,400],[100,50],[200,50],[150,400]],});
    C(2,[0],[11],{points:[[200,50],[300,50],[287.5,150],[187.5,150]],path:[[0,0,2.5],[250,0,2.5],[200,250,2.5],[-37.5,250,2.5]],currentPoint:0,});
    C(2,[0],[11],{points:[[200,50],[300,50],[287.5,150],[187.5,150]],path:[[0,0,2.5],[-37.5,250,2.5],[200,250,2.5],[250,0,2.5]],currentPoint:0,});
    colors.tile=colourRgb(61,22,10);colors.background=colourRgb(80,38,26);`,

    // idea: filler level that teaches player about platformer
    `C(1,[],[14],{h:1600,w:900,y:0,x:0,jumpDecay:0.95,jumpForce:32,maxJumpCooldown:30,platformerFriction:0.875,platformerAngleRotateSpeed:0,platformerAngle:90,platformerForce:1,});
    C(1,[],[15],{h:1650,w:950,y:-50,x:-50,axisSpeedMultY:1,axisSpeedMultX:1.5,});
    C(3,[],[6],{fontSize:80,text:'Platform!',y:100,x:450,});
    C(1,[1],[0],{h:200,w:200,y:600,x:100,pivotY:700,pivotX:200,rotateSpeed:0.01,});
    C(1,[1],[0],{h:200,w:200,y:600,x:600,pivotY:700,pivotX:700,rotateSpeed:-0.01,});
    C(1,[0],[0],{h:100,w:200,y:300,x:0,path:[[0,0,3],[700,0,3]],currentPoint:0,});
    C(1,[0],[0],{h:100,w:200,y:300,x:700,path:[[0,0,3],[-700,0,3]],currentPoint:0,});
    C(0,[],[0],{r:80,y:1050,x:450,});C(0,[],[0],{r:50,y:1350,x:250,});C(0,[],[0],{r:50,y:1350,x:650,});
    C(2,[],[0],{points:[[350,950],[550,950],[450,1050]],});C(2,[],[0],{points:[[0,950],[200,1100],[0,1250]],});C(2,[],[0],{points:[[900,950],[900,1250],[700,1100]],});
    colors.tile=colourRgb(14,19,29);colors.background=colourRgb(23,37,54);`,
    // colors.tile=colourRgb(30,42,53);colors.background=colourRgb(50,55,76);`,
    //colors.tile=colourRgb(11,3,34);colors.background=colourRgb(19,5,60);`,

    // idea: final boss
    `C(1,[],[17],{h:300,w:700,y:900,x:0,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:1.5,timeTrapMaxTime:450,});
    C(0,[],[15],{r:158.11388300841898,y:1050,x:35,axisSpeedMultY:0,axisSpeedMultX:1,});C(0,[],[15],{r:150,y:1200,x:400,axisSpeedMultY:1,axisSpeedMultX:0,});C(0,[],[15],{r:141.4213562373096,y:900,x:650,axisSpeedMultY:0,axisSpeedMultX:1,});
    C(0,[],[9],{r:100,y:900,x:800,checkpointOffsetY:50,checkpointOffsetX:50,});
    C(0,[],[9],{r:75,y:300,x:800,checkpointOffsetY:0,checkpointOffsetX:0,});C(1,[],[15],{h:200,w:300,y:200,x:600,axisSpeedMultY:1,axisSpeedMultX:0,});C(0,[],[0],{r:100,y:800,x:300,});C(1,[],[0],{h:200,w:600,y:700,x:300,});C(1,[],[16],{h:300,w:900,y:400,x:0,snapAngleRotateSpeed:0.3,snapAngle:0,snapCooldown:30,snapDistanceY:50,snapDistanceX:50,toSnapY:true,toSnapX:true,});C(1,[],[17],{h:200,w:900,y:0,x:0,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:4.5,timeTrapMaxTime:300,});
    C(0,[],[13],{r:100,y:1100,x:800,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorAngle:90,conveyorForce:0.3,});C(0,[],[18],{r:100,y:1300,x:800,sizeChangePermanent:false,sizeMult:0.5,});C(0,[],[19],{r:100,y:1500,x:800,speedChangePermanent:false,speedMult:0.8,});
    C(0,[],[10],{r:50,y:950,x:250,healSpeed:1,regenTime:100,maxStrength:8,});C(0,[],[10],{r:50,y:1000,x:500,healSpeed:1,regenTime:100,maxStrength:8,});C(0,[],[10],{r:50,y:1100,x:650,healSpeed:1,regenTime:100,maxStrength:8,});
    C(0,[],[0],{r:100,y:300,x:600,});C(1,[],[0],{h:200,w:600,y:200,x:0,});C(2,[],[6],{points:[[100,100],[200,200],[100,200],[0,200],[0,100]],});C(3,[],[20],{fontSize:90,text:'Final Boss!',y:300,x:300,hex:'#ffffff',});
    C(2,[],[0],{points:[[0,1000],[200,1200],[0,1200]],});C(2,[],[0],{points:[[600,900],[800,900],[800,1100]],});C(2,[],[0],{points:[[900,1500],[900,1600],[800,1600]],});
    C(0,[],[0],{r:50,y:0,x:350,});C(0,[],[0],{r:50,y:200,x:550,});
    C(2,[],[0],{points:[[200,100],[300,200],[200,200],[100,100]],});
    C(2,[],[0],{points:[[700,0],[900,0],[900,100],[800,100]],});
    C(2,[],[1],{points:[[900,600],[900,700],[700,700]],});C(2,[],[1],{points:[[0,400],[200,400],[0,500]],});
    C(2,[],[7],{points:[[800,100],[900,100],[900,200]],color:'#d6d611',coinAmount:1,});
    C(1,[],[9],{h:100,w:100,y:750,x:50,checkpointOffsetY:0,checkpointOffsetX:0,});
    C(1,[],[14],{h:200,w:700,y:1400,x:0,jumpDecay:0.95,jumpForce:20,maxJumpCooldown:30,platformerFriction:0.875,platformerAngleRotateSpeed:0,platformerAngle:90,platformerForce:1,});
    C(0,[],[8],{r:92,y:96,x:650,coinDoorColor:'#d6d611',coindoorCoinAmount:1,});
    C(2,[],[0],{points:[[700,1200],[800,1300],[700,1400]],});C(2,[],[0],{points:[[650,1400],[700,1400],[700,1450]],});C(2,[],[0],{points:[[300,1400],[500,1400],[400,1500]],});C(2,[],[0],{points:[[0,1400],[100,1400],[0,1500]],});
    C(0,[],[0],{r:100,y:1600,x:600,});C(0,[],[0],{r:75,y:1600,x:200,});
    C(1,[],[0],{h:200,w:700,y:1200,x:0,});
    C(2,[],[1],{points:[[650,900],[775,900],[775,1025]],});
    C(2,[],[1],{points:[[0,1200],[0,1050],[150,1200]],});
    C(1,[1],[1],{h:80,w:600,y:1260,x:400,pivotY:1300,pivotX:700,rotateSpeed:-0.015,});
    C(1,[1],[1],{h:40,w:560,y:1280,x:420,pivotY:1300,pivotX:700,rotateSpeed:-0.015,});
    colors.tile=colourRgb(25,0,34);colors.background=colourRgb(36,12,56);`,
]

window.tutorial = true;
window.tutorialMapsBeaten = [];
window.numTutorialMapsBeaten = 0;

window.beatCurrentTutorialMap = () => {
    // we load codes 2 at a time, so we have to keep track of the current level which is the last level index.
    if(window.tutorialMapsBeaten[lastLevelIndex] === undefined){
        window.tutorialMapsBeaten[lastLevelIndex] = true;
        window.numTutorialMapsBeaten++;
        if(window.numTutorialMapsBeaten >= amountOfTutorialMapsNeededToWin){
            alert('Congrats! You beat the tutorial! Good luck in the main game!');
            localStorage.setItem('tutorialCompleted', 'true');
            location.reload();
        }
    }
}

window.playMusicIndefinitely('https://www.youtube.com/watch?v=A2AydJcUKR8');

let levelIndex = 0;
let lastLevelIndex = levelIndex;

// getNextCode injection
export default () => {
    lastLevelIndex = levelIndex - 1;
    if(levelIndex >= tutorialMaps.length) levelIndex = 0;
    while(window.tutorialMapsBeaten[levelIndex] === true) levelIndex++;
    return tutorialMaps[levelIndex++];
}

// tutorial ws's and such are on serum's pc in a file called Omni tutorial scrapped tutorial stuff.txt.