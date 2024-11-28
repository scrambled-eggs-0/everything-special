window.loadMap((shared)=>{
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, generateTopLeftCoordinates, input} = shared;
    let selfId = shared.selfId;
    let counter = 10_000;

    shared.linkDoors = {};
    shared.linkButtons = {};
    shared.morphsTriggered = {};

    shared.C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
        // render links
        ctx.strokeStyle = '#969696';
        ctx.setLineDash([50, 70]);
        ctx.lineDashOffset = -window.frames / 60 * 100 * 2;
        ctx.lineWidth = 10;
        for(let id in shared.linkButtons){
            if(shared.linkDoors[id] === undefined) continue;
            const btnPos = {x: shared.linkButtons[id].pos.x + shared.linkButtons[id].dimensions.x/2, y: shared.linkButtons[id].pos.y + shared.linkButtons[id].dimensions.y/2};
            const doorPos = {x: shared.linkDoors[id].pos.x + shared.linkDoors[id].dimensions.x/2, y: shared.linkDoors[id].pos.y + shared.linkDoors[id].dimensions.y/2};
            
            ctx.globalAlpha = shared.morphsTriggered[id] === true ? 0.3 : 0.8;
            
            ctx.beginPath();
            ctx.lineTo(btnPos.x, btnPos.y);
            ctx.lineTo(doorPos.x, doorPos.y);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.globalAlpha = 1;
        ctx.setLineDash([]);
    },sf:()=>{
        selfId = shared.selfId;
    }});
    
C(0,[0],[1],{x:12650,y:17950,r:2,currentPoint:0.4105000000344808,path:[[12650,17950,3.51],[12650,18250,3.51]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent32 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:15150,y:17950,r:2,currentPoint:3.163166666669749,path:[[15150,17950,4.83],[15150,18250,4.83],[14850,18250,4.83],[14850,17950,4.83]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent31 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:15950,y:17950,r:2,currentPoint:0.61875,path:[[15950,17950,1.125],[15950,18250,1.125]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent33 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:17650,y:17950,r:2,currentPoint:1.61875,path:[[17650,17950,1.125],[17650,18250,1.125]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent34 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:4950,r:10,currentPoint:1.7861818181849527,path:[[10750,4950,5.76],[14050,4950,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent12 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:4950,r:10,currentPoint:0.7861818181849528,path:[[10750,4950,5.76],[14050,4950,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent13 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:4950,r:10,currentPoint:1.5723636363699056,path:[[10750,4950,5.76],[14050,4950,5.76],[12400,4950,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent17 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:12400,y:4950,r:10,currentPoint:2.5723636363699054,path:[[12400,4950,5.76],[14050,4950,5.76],[10750,4950,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent16 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:12400,y:5650,r:10,currentPoint:2.5723636363699054,path:[[12400,5650,5.76],[14050,5650,5.76],[10750,5650,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent14 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:5650,r:10,currentPoint:1.7861818181849527,path:[[10750,5650,5.76],[14050,5650,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent11 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:5650,r:10,currentPoint:0.7861818181849528,path:[[10750,5650,5.76],[14050,5650,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent10 = obstacles[obstacles.length-1];
C(0,[0],[1],{x:10750,y:5650,r:10,currentPoint:1.5723636363699056,path:[[10750,5650,5.76],[14050,5650,5.76],[12400,5650,5.76]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

var parent15 = obstacles[obstacles.length-1];

    var xv10001 = -0.007326875848502879;
    var yv10001 = -0.030378930038772352;
    C(1,[3],[1],{w:300,h:300,y:5650,x:13344.400000010344,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10001;
    e.pos.x += xv10001;
    if ((e.pos.x) < 10600) {
        xv10001 = xv10001 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10001 = xv10001 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10001 = yv10001 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10001 = yv10001 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent10;

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
            }

    var xv10002 = 0.03104305723066456;
    var yv10002 = -0.003590417492950469;
    C(1,[3],[1],{w:300,h:300,y:5650,x:11455.599999989656,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10002;
    e.pos.x += xv10002;
    if ((e.pos.x) < 10600) {
        xv10002 = xv10002 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10002 = xv10002 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10002 = yv10002 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10002 = yv10002 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent11;

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
            }

    var xv10003 = 0.02641733479267921;
    var yv10003 = 0.01669391872663517;
    C(1,[3],[1],{w:300,h:300,y:4950,x:11455.599999989656,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10003;
    e.pos.x += xv10003;
    if ((e.pos.x) < 10600) {
        xv10003 = xv10003 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10003 = xv10003 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10003 = yv10003 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10003 = yv10003 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent12;

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
            }

    var xv10004 = -0.0007114155361994567;
    var yv10004 = 0.031241901157497667;
    C(1,[3],[1],{w:300,h:300,y:4950,x:13344.400000010344,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10004;
    e.pos.x += xv10004;
    if ((e.pos.x) < 10600) {
        xv10004 = xv10004 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10004 = xv10004 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10004 = yv10004 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10004 = yv10004 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent13;

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
            }

    var xv10005 = -0.020872778882982633;
    var yv10005 = -0.02325703338136905;
    C(1,[3],[1],{w:300,h:300,y:5650,x:11694.400000010344,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10005;
    e.pos.x += xv10005;
    if ((e.pos.x) < 10600) {
        xv10005 = xv10005 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10005 = xv10005 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10005 = yv10005 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10005 = yv10005 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent14;

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
            }

    var xv10006 = -0.02801872823662404;
    var yv10006 = -0.013838835500222073;
    C(1,[3],[1],{w:300,h:300,y:5650,x:13105.599999989656,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10006;
    e.pos.x += xv10006;
    if ((e.pos.x) < 10600) {
        xv10006 = xv10006 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10006 = xv10006 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10006 = yv10006 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10006 = yv10006 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent15;

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
            }

    var xv10007 = -0.031195974029049143;
    var yv10007 = 0.0018367646498371715;
    C(1,[3],[1],{w:300,h:300,y:4950,x:11694.400000010344,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10007;
    e.pos.x += xv10007;
    if ((e.pos.x) < 10600) {
        xv10007 = xv10007 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10007 = xv10007 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10007 = yv10007 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10007 = yv10007 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent16;

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
            }

    var xv10008 = -0.5201425911141907;
    var yv10008 = 0.16423259745263913;
    var base10008;
    
    C(0,[3],[1],{r:2,y:6702.192160885249,x:12120.823030163167,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10008;
        e.pos.x += xv10008;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10008 = xv10008 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10008 = yv10008 * -1;
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

    base10008 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10008.pos.x,"y":base10008.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10008, xv10008);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10008.pos.x;
        o.pos.y = base10008.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10009 = -0.18255615524252045;
    var yv10009 = 0.5139979682256473;
    var base10009;
    
    C(0,[3],[1],{r:2,y:7017.130012851215,x:11280.529527506693,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10009;
        e.pos.x += xv10009;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10009 = xv10009 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10009 = yv10009 * -1;
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

    base10009 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10009.pos.x,"y":base10009.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10009, xv10009);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10009.pos.x;
        o.pos.y = base10009.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10010 = 0.3743742287947125;
    var yv10010 = 0.3966920694586533;
    var base10010;
    
    C(0,[3],[1],{r:2,y:7037.874133321874,x:9475.363125923832,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10010;
        e.pos.x += xv10010;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10010 = xv10010 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10010 = yv10010 * -1;
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

    base10010 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10010.pos.x,"y":base10010.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10010, xv10010);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10010.pos.x;
        o.pos.y = base10010.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10011 = -0.13833045573014768;
    var yv10011 = 0.5276223518526433;
    var base10011;
    
    C(0,[3],[1],{r:2,y:6607.663836957988,x:8796.345750998984,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10011;
        e.pos.x += xv10011;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10011 = xv10011 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10011 = yv10011 * -1;
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

    base10011 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10011.pos.x,"y":base10011.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10011, xv10011);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10011.pos.x;
        o.pos.y = base10011.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10012 = 0.540880003447372;
    var yv10012 = 0.07049456027095725;
    var base10012;
    
    C(0,[3],[1],{r:2,y:7285.221639853669,x:9247.330054955566,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10012;
        e.pos.x += xv10012;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10012 = xv10012 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10012 = yv10012 * -1;
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

    base10012 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10012.pos.x,"y":base10012.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10012, xv10012);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10012.pos.x;
        o.pos.y = base10012.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10013 = -0.48783660543617635;
    var yv10013 = -0.24400022039648495;
    var base10013;
    
    C(0,[3],[1],{r:2,y:6840.0768766455,x:12541.434839289315,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10013;
        e.pos.x += xv10013;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10013 = xv10013 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10013 = yv10013 * -1;
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

    base10013 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10013.pos.x,"y":base10013.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10013, xv10013);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10013.pos.x;
        o.pos.y = base10013.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10014 = -0.1863485841999623;
    var yv10014 = 0.5126352175998976;
    var base10014;
    
    C(0,[3],[1],{r:2,y:6636.474188737017,x:10270.87519812438,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10014;
        e.pos.x += xv10014;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10014 = xv10014 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10014 = yv10014 * -1;
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

    base10014 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10014.pos.x,"y":base10014.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10014, xv10014);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10014.pos.x;
        o.pos.y = base10014.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10015 = -0.27569517772655294;
    var yv10015 = -0.47065149541390944;
    var base10015;
    
    C(0,[3],[1],{r:2,y:7005.81122933222,x:8882.24291203953,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10015;
        e.pos.x += xv10015;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10015 = xv10015 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10015 = yv10015 * -1;
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

    base10015 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10015.pos.x,"y":base10015.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10015, xv10015);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10015.pos.x;
        o.pos.y = base10015.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10016 = -0.25033696115305976;
    var yv10016 = 0.48461538052116776;
    var base10016;
    
    C(0,[3],[1],{r:2,y:7327.377275676084,x:11852.527682800632,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10016;
        e.pos.x += xv10016;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10016 = xv10016 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10016 = yv10016 * -1;
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

    base10016 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10016.pos.x,"y":base10016.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10016, xv10016);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10016.pos.x;
        o.pos.y = base10016.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10017 = 0.48082173154610275;
    var yv10017 = -0.2575482937820251;
    var base10017;
    
    C(0,[3],[1],{r:2,y:7196.139749015047,x:11685.713406573392,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10017;
        e.pos.x += xv10017;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10017 = xv10017 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10017 = yv10017 * -1;
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

    base10017 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10017.pos.x,"y":base10017.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10017, xv10017);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10017.pos.x;
        o.pos.y = base10017.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10018 = 0.3748494490413888;
    var yv10018 = -0.3962430462612462;
    var base10018;
    
    C(0,[3],[1],{r:2,y:6901.636936220913,x:10329.079039367747,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10018;
        e.pos.x += xv10018;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10018 = xv10018 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10018 = yv10018 * -1;
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

    base10018 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10018.pos.x,"y":base10018.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10018, xv10018);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10018.pos.x;
        o.pos.y = base10018.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10019 = -0.5454527873289259;
    var yv10019 = -0.001384901487567001;
    var base10019;
    
    C(0,[3],[1],{r:2,y:6667.170970551865,x:9004.913747387163,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10019;
        e.pos.x += xv10019;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10019 = xv10019 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10019 = yv10019 * -1;
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

    base10019 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10019.pos.x,"y":base10019.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10019, xv10019);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10019.pos.x;
        o.pos.y = base10019.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10020 = -0.4628433318689241;
    var yv10020 = 0.28861169640452505;
    var base10020;
    
    C(0,[3],[1],{r:2,y:7296.755868281853,x:11696.8659929463,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10020;
        e.pos.x += xv10020;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10020 = xv10020 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10020 = yv10020 * -1;
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

    base10020 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10020.pos.x,"y":base10020.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10020, xv10020);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10020.pos.x;
        o.pos.y = base10020.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10021 = 0.5386058161513219;
    var yv10021 = -0.08616516677285137;
    var base10021;
    
    C(0,[3],[1],{r:2,y:7284.244403192178,x:8631.547388525894,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10021;
        e.pos.x += xv10021;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10021 = xv10021 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10021 = yv10021 * -1;
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

    base10021 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10021.pos.x,"y":base10021.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10021, xv10021);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10021.pos.x;
        o.pos.y = base10021.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10022 = 0.19349065379073396;
    var yv10022 = 0.5099823801394113;
    var base10022;
    
    C(0,[3],[1],{r:2,y:6869.730724139361,x:11670.971143719988,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10022;
        e.pos.x += xv10022;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10022 = xv10022 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10022 = yv10022 * -1;
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

    base10022 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10022.pos.x,"y":base10022.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10022, xv10022);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10022.pos.x;
        o.pos.y = base10022.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10023 = 0.3421984191618151;
    var yv10023 = -0.42475981810922214;
    var base10023;
    
    C(0,[3],[1],{r:2,y:7274.6543162639,x:8529.769208875134,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10023;
        e.pos.x += xv10023;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10023 = xv10023 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10023 = yv10023 * -1;
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

    base10023 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10023.pos.x,"y":base10023.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10023, xv10023);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10023.pos.x;
        o.pos.y = base10023.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10024 = 0.4229672424786726;
    var yv10024 = -0.3444116330018667;
    var base10024;
    
    C(0,[3],[1],{r:2,y:6912.924897484009,x:11885.328907469036,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10024;
        e.pos.x += xv10024;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10024 = xv10024 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10024 = yv10024 * -1;
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

    base10024 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10024.pos.x,"y":base10024.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10024, xv10024);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10024.pos.x;
        o.pos.y = base10024.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10025 = 0.11198436007533037;
    var yv10025 = -0.5338353344014833;
    var base10025;
    
    C(0,[3],[1],{r:2,y:6865.754677943444,x:9579.644905961059,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10025;
        e.pos.x += xv10025;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10025 = xv10025 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10025 = yv10025 * -1;
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

    base10025 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10025.pos.x,"y":base10025.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10025, xv10025);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10025.pos.x;
        o.pos.y = base10025.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10026 = 0.388627210640303;
    var yv10026 = -0.382739535855603;
    var base10026;
    
    C(0,[3],[1],{r:2,y:6839.225610301719,x:8752.812179525927,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10026;
        e.pos.x += xv10026;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10026 = xv10026 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10026 = yv10026 * -1;
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

    base10026 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10026.pos.x,"y":base10026.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10026, xv10026);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10026.pos.x;
        o.pos.y = base10026.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10027 = 0.11388748031317666;
    var yv10027 = -0.5334325664832815;
    var base10027;
    
    C(0,[3],[1],{r:2,y:7062.904061262736,x:11588.526069182359,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10027;
        e.pos.x += xv10027;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10027 = xv10027 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10027 = yv10027 * -1;
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

    base10027 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10027.pos.x,"y":base10027.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10027, xv10027);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10027.pos.x;
        o.pos.y = base10027.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10028 = -0.32736232946303606;
    var yv10028 = -0.43629642034465455;
    var base10028;
    
    C(0,[3],[1],{r:2,y:7174.445585581855,x:8270.23936910345,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10028;
        e.pos.x += xv10028;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10028 = xv10028 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10028 = yv10028 * -1;
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

    base10028 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10028.pos.x,"y":base10028.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10028, xv10028);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10028.pos.x;
        o.pos.y = base10028.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10029 = 0.36801635736482735;
    var yv10029 = 0.4025973445875525;
    var base10029;
    
    C(0,[3],[1],{r:2,y:7238.049546398542,x:9943.64870396173,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10029;
        e.pos.x += xv10029;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10029 = xv10029 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10029 = yv10029 * -1;
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

    base10029 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10029.pos.x,"y":base10029.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10029, xv10029);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10029.pos.x;
        o.pos.y = base10029.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10030 = 0.5003123015423551;
    var yv10030 = 0.21727462365038475;
    var base10030;
    
    C(0,[3],[1],{r:2,y:7282.9463284362555,x:7538.116995067083,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10030;
        e.pos.x += xv10030;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10030 = xv10030 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10030 = yv10030 * -1;
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

    base10030 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10030.pos.x,"y":base10030.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10030, xv10030);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10030.pos.x;
        o.pos.y = base10030.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10031 = -0.5031221964693989;
    var yv10031 = 0.21068629897749006;
    var base10031;
    
    C(0,[3],[1],{r:2,y:6963.429911904948,x:11419.911453032712,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10031;
        e.pos.x += xv10031;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10031 = xv10031 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10031 = yv10031 * -1;
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

    base10031 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10031.pos.x,"y":base10031.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10031, xv10031);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10031.pos.x;
        o.pos.y = base10031.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10032 = -0.45963837940618835;
    var yv10032 = 0.2936889874235629;
    var base10032;
    
    C(0,[3],[1],{r:2,y:6846.456983809379,x:7851.926637979439,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10032;
        e.pos.x += xv10032;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10032 = xv10032 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10032 = yv10032 * -1;
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

    base10032 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10032.pos.x,"y":base10032.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10032, xv10032);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10032.pos.x;
        o.pos.y = base10032.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10033 = 0.3027375145136993;
    var yv10033 = 0.453729719616307;
    var base10033;
    
    C(0,[3],[1],{r:2,y:7341.871483080211,x:10217.210584106231,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10033;
        e.pos.x += xv10033;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10033 = xv10033 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10033 = yv10033 * -1;
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

    base10033 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10033.pos.x,"y":base10033.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10033, xv10033);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10033.pos.x;
        o.pos.y = base10033.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10034 = 0.22725940666466776;
    var yv10034 = -0.4958566559394439;
    var base10034;
    
    C(0,[3],[1],{r:2,y:6966.723257374066,x:10105.020841502048,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10034;
        e.pos.x += xv10034;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10034 = xv10034 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10034 = yv10034 * -1;
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

    base10034 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10034.pos.x,"y":base10034.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10034, xv10034);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10034.pos.x;
        o.pos.y = base10034.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10035 = 0.537769090246502;
    var yv10035 = -0.09124180364544719;
    var base10035;
    
    C(0,[3],[1],{r:2,y:6908.548402666047,x:7595.004735825418,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10035;
        e.pos.x += xv10035;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10035 = xv10035 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10035 = yv10035 * -1;
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

    base10035 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10035.pos.x,"y":base10035.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10035, xv10035);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10035.pos.x;
        o.pos.y = base10035.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10036 = -0.4198562761677172;
    var yv10036 = -0.3481973126254744;
    var base10036;
    
    C(0,[3],[1],{r:2,y:7293.323343517281,x:10500.996826956043,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10036;
        e.pos.x += xv10036;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10036 = xv10036 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10036 = yv10036 * -1;
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

    base10036 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10036.pos.x,"y":base10036.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10036, xv10036);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10036.pos.x;
        o.pos.y = base10036.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10037 = -0.5308075357678974;
    var yv10037 = -0.1255548530684378;
    var base10037;
    
    C(0,[3],[1],{r:2,y:6960.242659657371,x:9175.430095197953,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10037;
        e.pos.x += xv10037;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10037 = xv10037 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10037 = yv10037 * -1;
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

    base10037 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10037.pos.x,"y":base10037.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10037, xv10037);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10037.pos.x;
        o.pos.y = base10037.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10038 = -0.14008493260116564;
    var yv10038 = -0.5271592480599687;
    var base10038;
    
    C(0,[3],[1],{r:2,y:7049.957333687114,x:8236.626882254206,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10038;
        e.pos.x += xv10038;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10038 = xv10038 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10038 = yv10038 * -1;
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

    base10038 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10038.pos.x,"y":base10038.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10038, xv10038);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10038.pos.x;
        o.pos.y = base10038.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10039 = 0.47312880839727595;
    var yv10039 = 0.2714217968800563;
    var base10039;
    
    C(0,[3],[1],{r:2,y:6908.342027436491,x:9895.559747944673,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10039;
        e.pos.x += xv10039;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10039 = xv10039 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10039 = yv10039 * -1;
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

    base10039 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":296.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10039.pos.x,"y":base10039.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10039, xv10039);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.10471975511965977;
        o.endSliceAngle = angle + 0.10471975511965977;

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

        o.pos.x = base10039.pos.x;
        o.pos.y = base10039.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 222.29999999999998);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 222.29999999999998, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10040 = -0.4852993115770177;
    var yv10040 = 0.7687202736851737;
    var base10040;
    
    C(0,[3],[1],{r:48,y:6906.892872037594,x:11087.274828031113,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10040;
        e.pos.x += xv10040;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10040 = xv10040 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10040 = yv10040 * -1;
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

    base10040 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10040.pos.x,"y":base10040.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10040, xv10040);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10040.pos.x;
        o.pos.y = base10040.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10041 = -0.0155487260872799;
    var yv10041 = -0.9089579297793702;
    var base10041;
    
    C(0,[3],[1],{r:48,y:7298.539811784726,x:9154.419068663448,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10041;
        e.pos.x += xv10041;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10041 = xv10041 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10041 = yv10041 * -1;
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

    base10041 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10041.pos.x,"y":base10041.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10041, xv10041);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10041.pos.x;
        o.pos.y = base10041.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10042 = 0.7855254343490115;
    var yv10042 = -0.4575981566642641;
    var base10042;
    
    C(0,[3],[1],{r:48,y:6671.879853683047,x:11086.298305082964,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10042;
        e.pos.x += xv10042;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10042 = xv10042 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10042 = yv10042 * -1;
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

    base10042 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10042.pos.x,"y":base10042.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10042, xv10042);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10042.pos.x;
        o.pos.y = base10042.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10043 = -0.6867636413530669;
    var yv10043 = 0.5956525681193792;
    var base10043;
    
    C(0,[3],[1],{r:48,y:7081.615908523733,x:8403.954720996448,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10043;
        e.pos.x += xv10043;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10043 = xv10043 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10043 = yv10043 * -1;
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

    base10043 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10043.pos.x,"y":base10043.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10043, xv10043);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10043.pos.x;
        o.pos.y = base10043.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10044 = 0.10103826357347517;
    var yv10044 = 0.9034586599760902;
    var base10044;
    
    C(0,[3],[1],{r:48,y:7348.459472880821,x:7812.053546271537,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10044;
        e.pos.x += xv10044;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10044 = xv10044 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10044 = yv10044 * -1;
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

    base10044 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10044.pos.x,"y":base10044.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10044, xv10044);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10044.pos.x;
        o.pos.y = base10044.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10045 = -0.15986372123400658;
    var yv10045 = -0.8949245061037001;
    var base10045;
    
    C(0,[3],[1],{r:48,y:7244.27206320439,x:8419.96961136864,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10045;
        e.pos.x += xv10045;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10045 = xv10045 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10045 = yv10045 * -1;
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

    base10045 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10045.pos.x,"y":base10045.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10045, xv10045);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10045.pos.x;
        o.pos.y = base10045.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10046 = 0.31515550979989704;
    var yv10046 = -0.8527152429941092;
    var base10046;
    
    C(0,[3],[1],{r:48,y:6990.32106468914,x:12090.311235547839,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10046;
        e.pos.x += xv10046;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10046 = xv10046 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10046 = yv10046 * -1;
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

    base10046 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10046.pos.x,"y":base10046.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10046, xv10046);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10046.pos.x;
        o.pos.y = base10046.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10047 = 0.35520924303969575;
    var yv10047 = 0.8368229649399578;
    var base10047;
    
    C(0,[3],[1],{r:48,y:6765.411650905724,x:12523.505394554542,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10047;
        e.pos.x += xv10047;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10047 = xv10047 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10047 = yv10047 * -1;
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

    base10047 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10047.pos.x,"y":base10047.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10047, xv10047);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10047.pos.x;
        o.pos.y = base10047.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10048 = -0.3643253898855181;
    var yv10048 = -0.8328945259013897;
    var base10048;
    
    C(0,[3],[1],{r:48,y:7251.306188889816,x:8791.212262601694,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10048;
        e.pos.x += xv10048;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10048 = xv10048 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10048 = yv10048 * -1;
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

    base10048 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10048.pos.x,"y":base10048.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10048, xv10048);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10048.pos.x;
        o.pos.y = base10048.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10049 = -0.8511547562072856;
    var yv10049 = 0.31934599101515515;
    var base10049;
    
    C(0,[3],[1],{r:48,y:7181.078074848915,x:10560.523057046894,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10049;
        e.pos.x += xv10049;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10049 = xv10049 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10049 = yv10049 * -1;
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

    base10049 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10049.pos.x,"y":base10049.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10049, xv10049);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10049.pos.x;
        o.pos.y = base10049.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10050 = 0.9062367272743374;
    var yv10050 = -0.07198107481021657;
    var base10050;
    
    C(0,[3],[1],{r:48,y:6803.154782676345,x:11692.182153416587,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10050;
        e.pos.x += xv10050;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10050 = xv10050 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10050 = yv10050 * -1;
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

    base10050 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10050.pos.x,"y":base10050.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10050, xv10050);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10050.pos.x;
        o.pos.y = base10050.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10051 = 0.6259123441102337;
    var yv10051 = 0.6593026759252293;
    var base10051;
    
    C(0,[3],[1],{r:48,y:6805.318378996048,x:11278.227687912535,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10051;
        e.pos.x += xv10051;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10051 = xv10051 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10051 = yv10051 * -1;
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

    base10051 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10051.pos.x,"y":base10051.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10051, xv10051);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10051.pos.x;
        o.pos.y = base10051.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10052 = -0.44148763832138205;
    var yv10052 = 0.7946917302961847;
    var base10052;
    
    C(0,[3],[1],{r:48,y:6743.972781292167,x:7501.853635285865,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10052;
        e.pos.x += xv10052;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10052 = xv10052 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10052 = yv10052 * -1;
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

    base10052 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10052.pos.x,"y":base10052.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10052, xv10052);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10052.pos.x;
        o.pos.y = base10052.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10053 = 0.4737023806166838;
    var yv10053 = -0.7759203152320616;
    var base10053;
    
    C(0,[3],[1],{r:48,y:7116.8074830888745,x:8834.044709871589,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10053;
        e.pos.x += xv10053;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10053 = xv10053 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10053 = yv10053 * -1;
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

    base10053 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10053.pos.x,"y":base10053.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10053, xv10053);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10053.pos.x;
        o.pos.y = base10053.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10054 = 0.3304559844983293;
    var yv10054 = 0.8469032549831034;
    var base10054;
    
    C(0,[3],[1],{r:48,y:6780.232966847014,x:8543.951002389349,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10054;
        e.pos.x += xv10054;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10054 = xv10054 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10054 = yv10054 * -1;
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

    base10054 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10054.pos.x,"y":base10054.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10054, xv10054);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10054.pos.x;
        o.pos.y = base10054.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10055 = 0.2405082414726882;
    var yv10055 = -0.8766995304980211;
    var base10055;
    
    C(0,[3],[1],{r:48,y:6722.779526194917,x:12344.618117967892,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10055;
        e.pos.x += xv10055;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10055 = xv10055 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10055 = yv10055 * -1;
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

    base10055 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10055.pos.x,"y":base10055.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10055, xv10055);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10055.pos.x;
        o.pos.y = base10055.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10056 = -0.3885201628558091;
    var yv10056 = 0.8218870749964566;
    var base10056;
    
    C(0,[3],[1],{r:48,y:7096.622699879036,x:9458.024864585881,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10056;
        e.pos.x += xv10056;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10056 = xv10056 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10056 = yv10056 * -1;
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

    base10056 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10056.pos.x,"y":base10056.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10056, xv10056);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10056.pos.x;
        o.pos.y = base10056.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10057 = -0.8600915338160098;
    var yv10057 = -0.2944296765778871;
    var base10057;
    
    C(0,[3],[1],{r:48,y:7145.751308448664,x:11990.643265059904,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10057;
        e.pos.x += xv10057;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10057 = xv10057 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10057 = yv10057 * -1;
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

    base10057 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10057.pos.x,"y":base10057.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10057, xv10057);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10057.pos.x;
        o.pos.y = base10057.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10058 = 0.8163922956856112;
    var yv10058 = 0.39993737076811564;
    var base10058;
    
    C(0,[3],[1],{r:48,y:6961.250280116474,x:11037.65709727675,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10058;
        e.pos.x += xv10058;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10058 = xv10058 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10058 = yv10058 * -1;
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

    base10058 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10058.pos.x,"y":base10058.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10058, xv10058);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10058.pos.x;
        o.pos.y = base10058.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10059 = 0.379513824877407;
    var yv10059 = 0.826084461613131;
    var base10059;
    
    C(0,[3],[1],{r:48,y:6791.4435349173145,x:10721.551426544784,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10059;
        e.pos.x += xv10059;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10059 = xv10059 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10059 = yv10059 * -1;
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

    base10059 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10059.pos.x,"y":base10059.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10059, xv10059);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10059.pos.x;
        o.pos.y = base10059.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10060 = 0.1002958139604177;
    var yv10060 = 0.9035413829447729;
    var base10060;
    
    C(0,[3],[1],{r:48,y:7319.106312735391,x:10906.248072882267,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10060;
        e.pos.x += xv10060;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10060 = xv10060 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10060 = yv10060 * -1;
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

    base10060 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10060.pos.x,"y":base10060.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10060, xv10060);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10060.pos.x;
        o.pos.y = base10060.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10061 = 0.5956848196314286;
    var yv10061 = -0.6867356672347869;
    var base10061;
    
    C(0,[3],[1],{r:48,y:6976.173460410732,x:7683.8680943758,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10061;
        e.pos.x += xv10061;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10061 = xv10061 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10061 = yv10061 * -1;
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

    base10061 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10061.pos.x,"y":base10061.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10061, xv10061);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10061.pos.x;
        o.pos.y = base10061.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10062 = -0.7976749845807397;
    var yv10062 = 0.4360744202150042;
    var base10062;
    
    C(0,[3],[1],{r:48,y:7297.818517706369,x:10352.700109330368,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10062;
        e.pos.x += xv10062;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10062 = xv10062 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10062 = yv10062 * -1;
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

    base10062 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10062.pos.x,"y":base10062.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10062, xv10062);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10062.pos.x;
        o.pos.y = base10062.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10063 = -0.4919210912801983;
    var yv10063 = 0.7644997847909666;
    var base10063;
    
    C(0,[3],[1],{r:48,y:6891.891392199367,x:8749.49681489767,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10063;
        e.pos.x += xv10063;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10063 = xv10063 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10063 = yv10063 * -1;
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

    base10063 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10063.pos.x,"y":base10063.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10063, xv10063);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10063.pos.x;
        o.pos.y = base10063.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10064 = 0.2541389845073346;
    var yv10064 = -0.8728457237939109;
    var base10064;
    
    C(0,[3],[1],{r:48,y:6684.913789655705,x:9379.201668510632,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10064;
        e.pos.x += xv10064;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10064 = xv10064 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10064 = yv10064 * -1;
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

    base10064 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10064.pos.x,"y":base10064.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10064, xv10064);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10064.pos.x;
        o.pos.y = base10064.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10065 = -0.3782511866449138;
    var yv10065 = -0.8266633660647181;
    var base10065;
    
    C(0,[3],[1],{r:48,y:6870.029808555809,x:10096.321583719524,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10065;
        e.pos.x += xv10065;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10065 = xv10065 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10065 = yv10065 * -1;
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

    base10065 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10065.pos.x,"y":base10065.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10065, xv10065);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10065.pos.x;
        o.pos.y = base10065.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10066 = 0.9083143118160867;
    var yv10066 = -0.037568496666811196;
    var base10066;
    
    C(0,[3],[1],{r:48,y:7306.238775585429,x:11014.427514093577,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10066;
        e.pos.x += xv10066;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10066 = xv10066 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10066 = yv10066 * -1;
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

    base10066 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10066.pos.x,"y":base10066.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10066, xv10066);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10066.pos.x;
        o.pos.y = base10066.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10067 = -0.7099465456239815;
    var yv10067 = 0.5678223167050688;
    var base10067;
    
    C(0,[3],[1],{r:48,y:7080.001432123108,x:10578.679478463931,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10067;
        e.pos.x += xv10067;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10067 = xv10067 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10067 = yv10067 * -1;
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

    base10067 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10067.pos.x,"y":base10067.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10067, xv10067);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10067.pos.x;
        o.pos.y = base10067.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10068 = -0.32345838016768574;
    var yv10068 = 0.8496004692154027;
    var base10068;
    
    C(0,[3],[1],{r:48,y:6769.323428953583,x:9744.765715045869,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10068;
        e.pos.x += xv10068;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10068 = xv10068 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10068 = yv10068 * -1;
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

    base10068 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10068.pos.x,"y":base10068.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10068, xv10068);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10068.pos.x;
        o.pos.y = base10068.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10069 = 0.25530293444728347;
    var yv10069 = 0.8725059843086129;
    var base10069;
    
    C(0,[3],[1],{r:48,y:7116.429668399605,x:7448.303000467854,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10069;
        e.pos.x += xv10069;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10069 = xv10069 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10069 = yv10069 * -1;
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

    base10069 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10069.pos.x,"y":base10069.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10069, xv10069);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10069.pos.x;
        o.pos.y = base10069.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10070 = 0.8531516369130933;
    var yv10070 = -0.31397223670930685;
    var base10070;
    
    C(0,[3],[1],{r:48,y:6838.941190892213,x:10057.091252104621,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10070;
        e.pos.x += xv10070;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10070 = xv10070 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10070 = yv10070 * -1;
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

    base10070 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10070.pos.x,"y":base10070.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10070, xv10070);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10070.pos.x;
        o.pos.y = base10070.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10071 = 0.33700334821059114;
    var yv10071 = -0.8443192667981625;
    var base10071;
    
    C(0,[3],[1],{r:48,y:6863.972141160981,x:12341.147130826037,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10071;
        e.pos.x += xv10071;
        if ((e.pos.x - e.sat.r) < 7400 || e.pos.x + e.sat.r > 12600) {
            xv10071 = xv10071 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 7400) {
            yv10071 = yv10071 * -1;
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

    base10071 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":105.6*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10071.pos.x,"y":base10071.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10071, xv10071);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 1.3962634015954636;
        o.endSliceAngle = angle + 1.3962634015954636;

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

        o.pos.x = base10071.pos.x;
        o.pos.y = base10071.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 79.19999999999999);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 79.19999999999999, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10072 = 0;
    var yv10072 = 0;
    var shootDirectionIndex10072 = 0;
    var timer10072 = 1.6666666666876384;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:17950,x:1750,sf:(e)=>{
    e.pos.y += yv10072;
    e.pos.x += xv10072;
    if ((e.pos.x - e.sat.r) < 1600 || e.pos.x + e.sat.r > 10800) {
        xv10072 = xv10072 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18100) {
        yv10072 = yv10072 * -1;
    }

    timer10072--;
    if(timer10072 < 0){
        timer10072 = 200;

        shootDirectionIndex10072++;
        const shootDirections = [0];
        if(shootDirectionIndex10072 >= shootDirections.length){
            shootDirectionIndex10072 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10072];

        counter++;
        /*scoped using let*/
        let xv10072 = Math.cos(dir) * 13.696969696969697;
        let yv10072 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10072;
        e.pos.x += xv10072;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 1600 || e.pos.x + e.sat.r > 10800 || (e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18100) {
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

            if(false){
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
    

    var xv10073 = 0;
    var yv10073 = 0;
    var shootDirectionIndex10073 = 0;
    var timer10073 = 101.6666666666878;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:18250,x:1750,sf:(e)=>{
    e.pos.y += yv10073;
    e.pos.x += xv10073;
    if ((e.pos.x - e.sat.r) < 1600 || e.pos.x + e.sat.r > 10800) {
        xv10073 = xv10073 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 18400) {
        yv10073 = yv10073 * -1;
    }

    timer10073--;
    if(timer10073 < 0){
        timer10073 = 200;

        shootDirectionIndex10073++;
        const shootDirections = [0];
        if(shootDirectionIndex10073 >= shootDirections.length){
            shootDirectionIndex10073 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10073];

        counter++;
        /*scoped using let*/
        let xv10073 = Math.cos(dir) * 13.696969696969697;
        let yv10073 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10073;
        e.pos.x += xv10073;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 1600 || e.pos.x + e.sat.r > 10800 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 18400) {
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

            if(false){
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
    

    var xv10074 = -3.7294021691169053;
    var yv10074 = -1.7627207552491464;
    C(1,[3],[1],{w:104,h:104,y:10190.346145405969,x:198.18099288782815,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10074;
    e.pos.x += xv10074;
    if ((e.pos.x) < 0) {
        xv10074 = xv10074 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10074 = xv10074 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10074 = yv10074 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10074 = yv10074 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10075 = 4.04814929001852;
    var yv10075 = -0.7925353782151014;
    C(1,[3],[1],{w:104,h:104,y:8446.679748222532,x:166.6871766363846,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10075;
    e.pos.x += xv10075;
    if ((e.pos.x) < 0) {
        xv10075 = xv10075 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10075 = xv10075 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10075 = yv10075 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10075 = yv10075 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10076 = 4.050275012368224;
    var yv10076 = 0.7815992094325491;
    C(1,[3],[1],{w:104,h:104,y:10186.397845607451,x:134.80525378087853,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10076;
    e.pos.x += xv10076;
    if ((e.pos.x) < 0) {
        xv10076 = xv10076 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10076 = xv10076 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10076 = yv10076 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10076 = yv10076 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10077 = 1.9525957004602974;
    var yv10077 = -3.6335925790523023;
    C(1,[3],[1],{w:104,h:104,y:10472.647628592726,x:107.36163917000609,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10077;
    e.pos.x += xv10077;
    if ((e.pos.x) < 0) {
        xv10077 = xv10077 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10077 = xv10077 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10077 = yv10077 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10077 = yv10077 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10078 = -4.122378396982176;
    var yv10078 = -0.14704200792514766;
    C(1,[3],[1],{w:104,h:104,y:8421.06867910133,x:630.4780427221611,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10078;
    e.pos.x += xv10078;
    if ((e.pos.x) < 0) {
        xv10078 = xv10078 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10078 = xv10078 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10078 = yv10078 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10078 = yv10078 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10079 = -2.192569757330038;
    var yv10079 = 3.494032463965053;
    C(1,[3],[1],{w:104,h:104,y:10951.15175477618,x:147.05907202075014,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10079;
    e.pos.x += xv10079;
    if ((e.pos.x) < 0) {
        xv10079 = xv10079 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10079 = xv10079 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10079 = yv10079 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10079 = yv10079 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10080 = 1.865241509141791;
    var yv10080 = 3.679198161634469;
    C(1,[3],[1],{w:104,h:104,y:8549.15214077422,x:317.0072189164479,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10080;
    e.pos.x += xv10080;
    if ((e.pos.x) < 0) {
        xv10080 = xv10080 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10080 = xv10080 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10080 = yv10080 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10080 = yv10080 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10081 = 3.290348970424081;
    var yv10081 = 2.487816040793449;
    C(1,[3],[1],{w:104,h:104,y:10889.616347711912,x:528.7420333434034,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10081;
    e.pos.x += xv10081;
    if ((e.pos.x) < 0) {
        xv10081 = xv10081 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10081 = xv10081 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10081 = yv10081 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10081 = yv10081 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10082 = 1.264508963137298;
    var yv10082 = -3.9264031991309087;
    C(1,[3],[1],{w:104,h:104,y:11166.440382901656,x:58.0127620920566,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10082;
    e.pos.x += xv10082;
    if ((e.pos.x) < 0) {
        xv10082 = xv10082 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10082 = xv10082 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10082 = yv10082 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10082 = yv10082 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10083 = 1.073940979341261;
    var yv10083 = 3.9827472645011675;
    C(1,[3],[1],{w:104,h:104,y:8960.7828583651,x:637.0500817570717,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10083;
    e.pos.x += xv10083;
    if ((e.pos.x) < 0) {
        xv10083 = xv10083 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10083 = xv10083 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10083 = yv10083 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10083 = yv10083 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10084 = -2.5132648885603883;
    var yv10084 = -3.270951635217118;
    C(1,[3],[1],{w:104,h:104,y:9014.33632113243,x:129.4203089797135,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10084;
    e.pos.x += xv10084;
    if ((e.pos.x) < 0) {
        xv10084 = xv10084 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10084 = xv10084 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10084 = yv10084 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10084 = yv10084 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10085 = 0.14488353001079446;
    var yv10085 = 4.122454822400314;
    C(1,[3],[1],{w:104,h:104,y:9574.10144535683,x:696.564877954075,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10085;
    e.pos.x += xv10085;
    if ((e.pos.x) < 0) {
        xv10085 = xv10085 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10085 = xv10085 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10085 = yv10085 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10085 = yv10085 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10086 = -4.045328562189435;
    var yv10086 = 0.8068096578093003;
    C(1,[3],[1],{w:104,h:104,y:8845.553549376333,x:724.7007100547805,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10086;
    e.pos.x += xv10086;
    if ((e.pos.x) < 0) {
        xv10086 = xv10086 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10086 = xv10086 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10086 = yv10086 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10086 = yv10086 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10087 = -1.0061041398559232;
    var yv10087 = 4.000422410166803;
    C(1,[3],[1],{w:104,h:104,y:10234.802882855038,x:405.3159699564633,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10087;
    e.pos.x += xv10087;
    if ((e.pos.x) < 0) {
        xv10087 = xv10087 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10087 = xv10087 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10087 = yv10087 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10087 = yv10087 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10088 = 2.3831179929869126;
    var yv10088 = 3.366953167405515;
    C(1,[3],[1],{w:104,h:104,y:8323.585696546977,x:729.7538700240576,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10088;
    e.pos.x += xv10088;
    if ((e.pos.x) < 0) {
        xv10088 = xv10088 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10088 = xv10088 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10088 = yv10088 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10088 = yv10088 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10089 = 0.10934061431648402;
    var yv10089 = -4.123550609615564;
    C(1,[3],[1],{w:104,h:104,y:11447.589857643196,x:541.0642739932772,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10089;
    e.pos.x += xv10089;
    if ((e.pos.x) < 0) {
        xv10089 = xv10089 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10089 = xv10089 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10089 = yv10089 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10089 = yv10089 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10090 = 2.144409207530216;
    var yv10090 = -3.523795418389046;
    C(1,[3],[1],{w:104,h:104,y:9643.173619607249,x:361.7683751769863,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10090;
    e.pos.x += xv10090;
    if ((e.pos.x) < 0) {
        xv10090 = xv10090 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10090 = xv10090 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10090 = yv10090 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10090 = yv10090 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10091 = 3.430317586769032;
    var yv10091 = -2.290970592107871;
    C(1,[3],[1],{w:104,h:104,y:8334.944582395912,x:312.0400699177403,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10091;
    e.pos.x += xv10091;
    if ((e.pos.x) < 0) {
        xv10091 = xv10091 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10091 = xv10091 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10091 = yv10091 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10091 = yv10091 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10092 = -2.4395123852440626;
    var yv10092 = 3.3263199368432415;
    C(1,[3],[1],{w:104,h:104,y:8593.488289130373,x:344.6412901256809,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10092;
    e.pos.x += xv10092;
    if ((e.pos.x) < 0) {
        xv10092 = xv10092 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10092 = xv10092 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10092 = yv10092 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10092 = yv10092 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10093 = 3.63081564703106;
    var yv10093 = 1.9577545140477717;
    C(1,[3],[1],{w:104,h:104,y:9628.477827314257,x:486.29656204849834,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10093;
    e.pos.x += xv10093;
    if ((e.pos.x) < 0) {
        xv10093 = xv10093 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10093 = xv10093 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10093 = yv10093 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10093 = yv10093 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10094 = 3.9260207991253804;
    var yv10094 = -1.2656957315385506;
    C(1,[3],[1],{w:104,h:104,y:11634.98868517752,x:466.66010728808067,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10094;
    e.pos.x += xv10094;
    if ((e.pos.x) < 0) {
        xv10094 = xv10094 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10094 = xv10094 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10094 = yv10094 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10094 = yv10094 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10095 = -0.8002099429496761;
    var yv10095 = -4.046639228693914;
    C(1,[3],[1],{w:104,h:104,y:8772.762712357904,x:248.48812857822122,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10095;
    e.pos.x += xv10095;
    if ((e.pos.x) < 0) {
        xv10095 = xv10095 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10095 = xv10095 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10095 = yv10095 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10095 = yv10095 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10096 = -0.21001602113731221;
    var yv10096 = 4.11965026074613;
    C(1,[3],[1],{w:104,h:104,y:8924.836137075938,x:681.5745213287742,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10096;
    e.pos.x += xv10096;
    if ((e.pos.x) < 0) {
        xv10096 = xv10096 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10096 = xv10096 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10096 = yv10096 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10096 = yv10096 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10097 = 0.4656160592334916;
    var yv10097 = -4.098637174157268;
    C(1,[3],[1],{w:104,h:104,y:8518.493490676017,x:362.4872075321463,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10097;
    e.pos.x += xv10097;
    if ((e.pos.x) < 0) {
        xv10097 = xv10097 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10097 = xv10097 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10097 = yv10097 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10097 = yv10097 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10098 = 0.596192411775596;
    var yv10098 = 4.081688328148194;
    C(1,[3],[1],{w:104,h:104,y:9662.993579340378,x:546.5693430475495,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10098;
    e.pos.x += xv10098;
    if ((e.pos.x) < 0) {
        xv10098 = xv10098 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10098 = xv10098 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10098 = yv10098 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10098 = yv10098 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10099 = -0.20527519661159796;
    var yv10099 = 4.1198892089055095;
    C(1,[3],[1],{w:104,h:104,y:10002.647937593249,x:575.52134921243,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10099;
    e.pos.x += xv10099;
    if ((e.pos.x) < 0) {
        xv10099 = xv10099 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10099 = xv10099 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10099 = yv10099 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10099 = yv10099 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10100 = -3.905121030649497;
    var yv10100 = -1.328779415847119;
    C(1,[3],[1],{w:104,h:104,y:10592.662957286379,x:717.8102972033615,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10100;
    e.pos.x += xv10100;
    if ((e.pos.x) < 0) {
        xv10100 = xv10100 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10100 = xv10100 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10100 = yv10100 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10100 = yv10100 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10101 = 4.066702428073082;
    var yv10101 = 0.6910545286042903;
    C(1,[3],[1],{w:104,h:104,y:11579.851857679312,x:513.3644906213649,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10101;
    e.pos.x += xv10101;
    if ((e.pos.x) < 0) {
        xv10101 = xv10101 * -1;
        e.pos.x = 0;
    } else if(e.pos.x + 104 > 800){
        xv10101 = xv10101 * -1;
        e.pos.x = 800 - 104;
    }
    if ((e.pos.y) < 8200) {
        yv10101 = yv10101 * -1;
        e.pos.y = 8200;
    } else if(e.pos.y + 104 > 11800){
        yv10101 = yv10101 * -1;
        e.pos.y = 11800 - 104;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 104, 104);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv10102 = 1.598402014845485;
    var yv10102 = -1.0439056940698463;
    var base10102;
    
    C(0,[3],[1],{r:0.002,y:261.33601107499896,x:9782.464794772235,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10102;
        e.pos.x += xv10102;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10102 = xv10102 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10102 = yv10102 * -1;
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

    base10102 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10102.pos.x,"y":base10102.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10102, xv10102);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10102.pos.x;
        o.pos.y = base10102.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10103 = 1.700165009972633;
    var yv10103 = -0.868370334614391;
    var base10103;
    
    C(0,[3],[1],{r:0.002,y:285.90842403293277,x:10054.185270735392,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10103;
        e.pos.x += xv10103;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10103 = xv10103 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10103 = yv10103 * -1;
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

    base10103 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10103.pos.x,"y":base10103.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10103, xv10103);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10103.pos.x;
        o.pos.y = base10103.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10104 = 1.025781717339562;
    var yv10104 = -1.6100931549278297;
    var base10104;
    
    C(0,[3],[1],{r:0.002,y:170.11808901514974,x:9836.946271476707,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10104;
        e.pos.x += xv10104;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10104 = xv10104 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10104 = yv10104 * -1;
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

    base10104 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10104.pos.x,"y":base10104.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10104, xv10104);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10104.pos.x;
        o.pos.y = base10104.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10105 = 1.612738058889923;
    var yv10105 = 1.0216183497674252;
    var base10105;
    
    C(0,[3],[1],{r:0.002,y:652.391443254054,x:10458.563340774439,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10105;
        e.pos.x += xv10105;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10105 = xv10105 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10105 = yv10105 * -1;
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

    base10105 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10105.pos.x,"y":base10105.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10105, xv10105);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10105.pos.x;
        o.pos.y = base10105.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10106 = -1.60045278911393;
    var yv10106 = -1.0407588428598606;
    var base10106;
    
    C(0,[3],[1],{r:0.002,y:109.94234208402025,x:9615.499483435695,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10106;
        e.pos.x += xv10106;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10106 = xv10106 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10106 = yv10106 * -1;
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

    base10106 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10106.pos.x,"y":base10106.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10106, xv10106);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10106.pos.x;
        o.pos.y = base10106.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10107 = -0.1832176084408966;
    var yv10107 = 1.900278770899352;
    var base10107;
    
    C(0,[3],[1],{r:0.002,y:622.9448072320747,x:10391.357393434337,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10107;
        e.pos.x += xv10107;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10107 = xv10107 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10107 = yv10107 * -1;
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

    base10107 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10107.pos.x,"y":base10107.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10107, xv10107);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10107.pos.x;
        o.pos.y = base10107.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10108 = 1.8033198527055259;
    var yv10108 = -0.6266303599504847;
    var base10108;
    
    C(0,[3],[1],{r:0.002,y:494.1578949212453,x:10074.789090240462,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10108;
        e.pos.x += xv10108;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10108 = xv10108 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10108 = yv10108 * -1;
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

    base10108 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10108.pos.x,"y":base10108.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10108, xv10108);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10108.pos.x;
        o.pos.y = base10108.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10109 = -1.1743595231801607;
    var yv10109 = -1.5051603932769488;
    var base10109;
    
    C(0,[3],[1],{r:0.002,y:404.6240788298445,x:10451.271862412626,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10109;
        e.pos.x += xv10109;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10109 = xv10109 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10109 = yv10109 * -1;
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

    base10109 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10109.pos.x,"y":base10109.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10109, xv10109);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10109.pos.x;
        o.pos.y = base10109.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10110 = 1.8425123615210652;
    var yv10110 = 0.4997762467501036;
    var base10110;
    
    C(0,[3],[1],{r:0.002,y:105.92539502530276,x:10429.249034067687,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10110;
        e.pos.x += xv10110;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10110 = xv10110 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10110 = yv10110 * -1;
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

    base10110 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10110.pos.x,"y":base10110.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10110, xv10110);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10110.pos.x;
        o.pos.y = base10110.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10111 = 1.7593926107960163;
    var yv10111 = 0.7410571774498455;
    var base10111;
    
    C(0,[3],[1],{r:0.002,y:32.58544049236429,x:9525.306611223086,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10111;
        e.pos.x += xv10111;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10111 = xv10111 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10111 = yv10111 * -1;
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

    base10111 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10111.pos.x,"y":base10111.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10111, xv10111);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10111.pos.x;
        o.pos.y = base10111.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10112 = -1.725914571001791;
    var yv10112 = 0.8159944808497529;
    var base10112;
    
    C(0,[3],[1],{r:0.002,y:476.54644383278685,x:9782.469899243259,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10112;
        e.pos.x += xv10112;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10112 = xv10112 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10112 = yv10112 * -1;
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

    base10112 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10112.pos.x,"y":base10112.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10112, xv10112);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10112.pos.x;
        o.pos.y = base10112.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10113 = -1.741224394288609;
    var yv10113 = 0.7827935282741041;
    var base10113;
    
    C(0,[3],[1],{r:0.002,y:108.93657531034364,x:10042.757032521324,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10113;
        e.pos.x += xv10113;
        if ((e.pos.x - e.sat.r) < 9400 || e.pos.x + e.sat.r > 10600) {
            xv10113 = xv10113 * -1;
        }
        if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 800) {
            yv10113 = yv10113 * -1;
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

    base10113 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[3],{"r":359.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10113.pos.x,"y":base10113.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10113, xv10113);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 3.141592653589793;
        o.endSliceAngle = angle + 3.141592653589793;

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

        o.pos.x = base10113.pos.x;
        o.pos.y = base10113.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 269.99955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 269.99955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10114 = 3.3272174925439635;
    var yv10114 = 1.467230129590184;
    var base10114;
    
    C(0,[3],[1],{r:12,y:16018.785913820935,x:746.6781003237788,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10114;
        e.pos.x += xv10114;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10114 = xv10114 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10114 = yv10114 * -1;
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

    base10114 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10114.pos.x,"y":base10114.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10114, xv10114);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10114.pos.x;
        o.pos.y = base10114.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10115 = 3.633165570763385;
    var yv10115 = 0.1524743627215264;
    var base10115;
    
    C(0,[3],[1],{r:12,y:16022.25040813972,x:106.99320574869499,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10115;
        e.pos.x += xv10115;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10115 = xv10115 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10115 = yv10115 * -1;
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

    base10115 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10115.pos.x,"y":base10115.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10115, xv10115);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10115.pos.x;
        o.pos.y = base10115.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10116 = -3.1984907458371277;
    var yv10116 = -1.729970359474989;
    var base10116;
    
    C(0,[3],[1],{r:12,y:15536.756269649813,x:197.8813865386009,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10116;
        e.pos.x += xv10116;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10116 = xv10116 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10116 = yv10116 * -1;
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

    base10116 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10116.pos.x,"y":base10116.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10116, xv10116);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10116.pos.x;
        o.pos.y = base10116.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10117 = 3.6277672554288034;
    var yv10117 = 0.24989044860965276;
    var base10117;
    
    C(0,[3],[1],{r:12,y:15433.980879335102,x:46.78188873739109,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10117;
        e.pos.x += xv10117;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10117 = xv10117 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10117 = yv10117 * -1;
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

    base10117 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10117.pos.x,"y":base10117.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10117, xv10117);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10117.pos.x;
        o.pos.y = base10117.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10118 = 0.8267909889243235;
    var yv10118 = 3.541123713809122;
    var base10118;
    
    C(0,[3],[1],{r:12,y:16139.285711579123,x:678.9681192454968,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10118;
        e.pos.x += xv10118;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10118 = xv10118 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10118 = yv10118 * -1;
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

    base10118 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10118.pos.x,"y":base10118.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10118, xv10118);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10118.pos.x;
        o.pos.y = base10118.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10119 = -3.6280347061140166;
    var yv10119 = 0.24597696457178383;
    var base10119;
    
    C(0,[3],[1],{r:12,y:15479.37997793153,x:101.12682074719211,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10119;
        e.pos.x += xv10119;
        if ((e.pos.x - e.sat.r) < 0 || e.pos.x + e.sat.r > 800) {
            xv10119 = xv10119 * -1;
        }
        if ((e.pos.y - e.sat.r) < 15400 || e.pos.y + e.sat.r > 16200) {
            yv10119 = yv10119 * -1;
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

    base10119 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":116.4*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10119.pos.x,"y":base10119.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10119, xv10119);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.6981317007977318;
        o.endSliceAngle = angle + 0.6981317007977318;

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

        o.pos.x = base10119.pos.x;
        o.pos.y = base10119.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 87.30000000000001);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 87.30000000000001, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

C(0,[0],[1],{x:19400,y:4100,r:200,currentPoint:2.4749999999729972,path:[[19400,4100,6],[19800,4100,6],[19800,4500,6],[19400,4500,6]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:19400,y:4100,r:200,currentPoint:0.4749999999729971,path:[[19400,4100,6],[19800,4100,6],[19800,4500,6],[19400,4500,6]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:19400,y:5900,r:200,currentPoint:3.8384615384558955,path:[[19400,5900,6],[19800,5900,6],[19800,7200,6],[19400,7200,6]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:19400,y:5900,r:200,currentPoint:1.8384615384558955,path:[[19400,5900,6],[19800,5900,6],[19800,7200,6],[19400,7200,6]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:19400,y:5900,r:200,currentPoint:1.6769230769287047,path:[[19400,5900,12],[19800,5900,12],[19800,7200,12],[19400,7200,12]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:19400,y:5900,r:200,currentPoint:3.6769230769287047,path:[[19400,5900,12],[19800,5900,12],[19800,7200,12],[19400,7200,12]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:200,y:8400,r:200,currentPoint:3.77125,path:[[200,8400,7.2],[600,8400,7.2],[600,11600,7.2],[200,11600,7.2]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:200,y:8400,r:200,currentPoint:1.77125,path:[[200,8400,7.2],[600,8400,7.2],[600,11600,7.2],[200,11600,7.2]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});


    var xv10120 = 0.09521099321534808;
    var yv10120 = 0.0022719057039059416;
    var switchTime10120 = 120;
    var switchState10120 = true;
    var pos10120 = {
        x: 9482.88257085574, y: 19471.652444603184 
    }
    C(0,[3],[1],{r:112,y:19471.652444603184,x:9482.88257085574,sf:(e)=>{
        pos10120.y += yv10120;
        pos10120.x += xv10120;
        if ((pos10120.x - e.sat.r) < 9350 || pos10120.x + e.sat.r > 9650) {
            xv10120 = xv10120 * -1;
        }
        if ((pos10120.y - e.sat.r) < 19300 || pos10120.y + e.sat.r > 19600) {
            yv10120 = yv10120 * -1;
        }

        if(switchState10120 === true){
            e.pos.x = pos10120.x;
            e.pos.y = pos10120.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime10120--;
        if(switchTime10120 <= 0){
            switchTime10120 = 120;
            switchState10120 = !switchState10120;
            if(switchState10120 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos10120.x;
                e.pos.y = pos10120.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState10120 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos10120.x, pos10120.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv10121 = 0.09523786412791621;
    var yv10121 = 0.00020981166094808737;
    var switchTime10121 = 120;
    var switchState10121 = true;
    var pos10121 = {
        x: 10522.949425012586, y: 19450.52200615228 
    }
    C(0,[3],[1],{r:112,y:19450.52200615228,x:10522.949425012586,sf:(e)=>{
        pos10121.y += yv10121;
        pos10121.x += xv10121;
        if ((pos10121.x - e.sat.r) < 10350 || pos10121.x + e.sat.r > 10650) {
            xv10121 = xv10121 * -1;
        }
        if ((pos10121.y - e.sat.r) < 19300 || pos10121.y + e.sat.r > 19600) {
            yv10121 = yv10121 * -1;
        }

        if(switchState10121 === true){
            e.pos.x = pos10121.x;
            e.pos.y = pos10121.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime10121--;
        if(switchTime10121 <= 0){
            switchTime10121 = 120;
            switchState10121 = !switchState10121;
            if(switchState10121 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos10121.x;
                e.pos.y = pos10121.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState10121 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos10121.x, pos10121.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv10122 = 0.04617365641907416;
    var yv10122 = 0.0832963879017199;
    var switchTime10122 = 120;
    var switchState10122 = true;
    var pos10122 = {
        x: 11616.878902820214, y: 19579.239330667875 
    }
    C(0,[3],[1],{r:112,y:19579.239330667875,x:11616.878902820214,sf:(e)=>{
        pos10122.y += yv10122;
        pos10122.x += xv10122;
        if ((pos10122.x - e.sat.r) < 11500 || pos10122.x + e.sat.r > 11750) {
            xv10122 = xv10122 * -1;
        }
        if ((pos10122.y - e.sat.r) < 19450 || pos10122.y + e.sat.r > 19700) {
            yv10122 = yv10122 * -1;
        }

        if(switchState10122 === true){
            e.pos.x = pos10122.x;
            e.pos.y = pos10122.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime10122--;
        if(switchTime10122 <= 0){
            switchTime10122 = 120;
            switchState10122 = !switchState10122;
            if(switchState10122 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos10122.x;
                e.pos.y = pos10122.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState10122 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos10122.x, pos10122.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv10123 = 0;
    var yv10123 = 0;
    var shootDirectionIndex10123 = 0;
    var timer10123 = 101.66666666668512;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:18064.375,x:17650,sf:(e)=>{
    e.pos.y += yv10123;
    e.pos.x += xv10123;
    if ((e.pos.x - e.sat.r) < 15800 || e.pos.x + e.sat.r > 17800) {
        xv10123 = xv10123 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
        yv10123 = yv10123 * -1;
    }

    timer10123--;
    if(timer10123 < 0){
        timer10123 = 133.33333333333334;

        shootDirectionIndex10123++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex10123 >= shootDirections.length){
            shootDirectionIndex10123 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10123];

        counter++;
        /*scoped using let*/
        let xv10123 = Math.cos(dir) * 13.696969696969697;
        let yv10123 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10123;
        e.pos.x += xv10123;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 15800 || e.pos.x + e.sat.r > 17800 || (e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
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

            if(false){
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
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent34;

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
            }

    var xv10124 = 0;
    var yv10124 = 0;
    var shootDirectionIndex10124 = 0;
    var timer10124 = 1.6666666666818652;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:17950,x:14898.950000000925,sf:(e)=>{
    e.pos.y += yv10124;
    e.pos.x += xv10124;
    if ((e.pos.x - e.sat.r) < 13300 || e.pos.x + e.sat.r > 15300) {
        xv10124 = xv10124 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
        yv10124 = yv10124 * -1;
    }

    timer10124--;
    if(timer10124 < 0){
        timer10124 = 100;

        shootDirectionIndex10124++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex10124 >= shootDirections.length){
            shootDirectionIndex10124 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10124];

        counter++;
        /*scoped using let*/
        let xv10124 = Math.cos(dir) * 13.696969696969697;
        let yv10124 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10124;
        e.pos.x += xv10124;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 13300 || e.pos.x + e.sat.r > 15300 || (e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
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

            if(false){
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
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent31;

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
            }

    var xv10125 = 0;
    var yv10125 = 0;
    var shootDirectionIndex10125 = 0;
    var timer10125 = 101.66666666668512;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:18073.150000010344,x:12650,sf:(e)=>{
    e.pos.y += yv10125;
    e.pos.x += xv10125;
    if ((e.pos.x - e.sat.r) < 10800 || e.pos.x + e.sat.r > 12800) {
        xv10125 = xv10125 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
        yv10125 = yv10125 * -1;
    }

    timer10125--;
    if(timer10125 < 0){
        timer10125 = 133.33333333333334;

        shootDirectionIndex10125++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex10125 >= shootDirections.length){
            shootDirectionIndex10125 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10125];

        counter++;
        /*scoped using let*/
        let xv10125 = Math.cos(dir) * 13.696969696969697;
        let yv10125 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10125;
        e.pos.x += xv10125;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 10800 || e.pos.x + e.sat.r > 12800 || (e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
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

            if(false){
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
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent32;

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
            }

    var xv10126 = 0;
    var yv10126 = 0;
    var shootDirectionIndex10126 = 0;
    var timer10126 = 101.66666666668512;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:124,y:18135.625,x:15950,sf:(e)=>{
    e.pos.y += yv10126;
    e.pos.x += xv10126;
    if ((e.pos.x - e.sat.r) < 15800 || e.pos.x + e.sat.r > 17800) {
        xv10126 = xv10126 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
        yv10126 = yv10126 * -1;
    }

    timer10126--;
    if(timer10126 < 0){
        timer10126 = 133.33333333333334;

        shootDirectionIndex10126++;
        const shootDirections = [0];
        if(shootDirectionIndex10126 >= shootDirections.length){
            shootDirectionIndex10126 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10126];

        counter++;
        /*scoped using let*/
        let xv10126 = Math.cos(dir) * 13.696969696969697;
        let yv10126 = Math.sin(dir) * 13.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:124,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10126;
        e.pos.x += xv10126;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 15800 || e.pos.x + e.sat.r > 17800 || (e.pos.y - e.sat.r) < 17800 || e.pos.y + e.sat.r > 18400) {
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

            if(false){
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
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent33;

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
            }
C(0,[0],[1],{x:14500,y:3200,r:200,currentPoint:0.7545833333369251,path:[[14500,3200,7.35],[14500,3800,7.35]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:14900,y:3200,r:200,currentPoint:1.754583333336925,path:[[14900,3200,7.35],[14900,3800,7.35]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:15300,y:3200,r:200,currentPoint:0.7545833333369251,path:[[15300,3200,7.35],[15300,3800,7.35]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:15700,y:3100,r:200,currentPoint:0,path:[[15700,3100,0],[15700,3200,0]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:15700,y:3900,r:200,currentPoint:0,path:[[15700,3900,0],[15700,4000,0]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});


    var xv10127 = -0.008630328636479268;
    var yv10127 = 0.030034645455313203;
    C(1,[3],[1],{w:300,h:300,y:4950,x:13105.599999989656,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv10127;
    e.pos.x += xv10127;
    if ((e.pos.x) < 10600) {
        xv10127 = xv10127 * -1;
        e.pos.x = 10600;
    } else if(e.pos.x + 300 > 14200){
        xv10127 = xv10127 * -1;
        e.pos.x = 14200 - 300;
    }
    if ((e.pos.y) < 4800) {
        yv10127 = yv10127 * -1;
        e.pos.y = 4800;
    } else if(e.pos.y + 300 > 5800){
        yv10127 = yv10127 * -1;
        e.pos.y = 5800 - 300;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 300, 300);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
{
                let child = obstacles[obstacles.length-1];
                let parent = parent17;

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
            }

    var xv10128 = 0;
    var yv10128 = 0;
    var base10128;
    
    C(0,[3],[1],{r:0.002,y:4200,x:17800,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10128;
        e.pos.x += xv10128;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 17820) {
            xv10128 = xv10128 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4220) {
            yv10128 = yv10128 * -1;
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

    base10128 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10128.pos.x,"y":base10128.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10128, xv10128);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10128.pos.x;
        o.pos.y = base10128.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10129 = 0;
    var yv10129 = 0;
    var base10129;
    
    C(0,[3],[1],{r:0.002,y:4200,x:17800,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10129;
        e.pos.x += xv10129;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 17820) {
            xv10129 = xv10129 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4220) {
            yv10129 = yv10129 * -1;
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

    base10129 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10129.pos.x,"y":base10129.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10129, xv10129);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10129.pos.x;
        o.pos.y = base10129.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10130 = 0;
    var yv10130 = 0;
    var base10130;
    
    C(0,[3],[1],{r:0.002,y:4200,x:18400,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10130;
        e.pos.x += xv10130;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18420) {
            xv10130 = xv10130 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4220) {
            yv10130 = yv10130 * -1;
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

    base10130 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10130.pos.x,"y":base10130.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10130, xv10130);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10130.pos.x;
        o.pos.y = base10130.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10131 = 0;
    var yv10131 = 0;
    var base10131;
    
    C(0,[3],[1],{r:0.002,y:4200,x:18400,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10131;
        e.pos.x += xv10131;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18420) {
            xv10131 = xv10131 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4200 || e.pos.y + e.sat.r > 4220) {
            yv10131 = yv10131 * -1;
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

    base10131 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10131.pos.x,"y":base10131.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10131, xv10131);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10131.pos.x;
        o.pos.y = base10131.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10132 = 0;
    var yv10132 = 0;
    var base10132;
    
    C(0,[3],[1],{r:0.002,y:4050,x:18400,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10132;
        e.pos.x += xv10132;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18420) {
            xv10132 = xv10132 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4050 || e.pos.y + e.sat.r > 4070) {
            yv10132 = yv10132 * -1;
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

    base10132 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10132.pos.x,"y":base10132.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10132, xv10132);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10132.pos.x;
        o.pos.y = base10132.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10133 = 0;
    var yv10133 = 0;
    var base10133;
    
    C(0,[3],[1],{r:0.002,y:4350,x:18400,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10133;
        e.pos.x += xv10133;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18420) {
            xv10133 = xv10133 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4350 || e.pos.y + e.sat.r > 4370) {
            yv10133 = yv10133 * -1;
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

    base10133 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10133.pos.x,"y":base10133.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10133, xv10133);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10133.pos.x;
        o.pos.y = base10133.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10134 = 0;
    var yv10134 = 0;
    var base10134;
    
    C(0,[3],[1],{r:0.002,y:4050,x:17800,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10134;
        e.pos.x += xv10134;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 17820) {
            xv10134 = xv10134 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4050 || e.pos.y + e.sat.r > 4070) {
            yv10134 = yv10134 * -1;
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

    base10134 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10134.pos.x,"y":base10134.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10134, xv10134);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10134.pos.x;
        o.pos.y = base10134.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};


    var xv10135 = 0;
    var yv10135 = 0;
    var base10135;
    
    C(0,[3],[1],{r:0.002,y:4350,x:17800,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv10135;
        e.pos.x += xv10135;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 17820) {
            xv10135 = xv10135 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4350 || e.pos.y + e.sat.r > 4370) {
            yv10135 = yv10135 * -1;
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

    base10135 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":342.9994*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base10135.pos.x,"y":base10135.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv10135, xv10135);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.7853981633974483;
        o.endSliceAngle = angle + 0.7853981633974483;

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

        o.pos.x = base10135.pos.x;
        o.pos.y = base10135.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 257.24955);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(true && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 257.24955, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(true) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

C(0,[0],[1],{x:16200,y:5200,r:200,currentPoint:0.4613333333390801,path:[[16200,5200,6.72],[16800,5200,6.72],[16800,5800,6.72],[16200,5800,6.72]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16200,y:5200,r:200,currentPoint:1.46133333333908,path:[[16200,5200,6.72],[16800,5200,6.72],[16800,5800,6.72],[16200,5800,6.72]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16200,y:5200,r:200,currentPoint:2.46133333333908,path:[[16200,5200,6.72],[16800,5200,6.72],[16800,5800,6.72],[16200,5800,6.72]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16200,y:5200,r:200,currentPoint:3.46133333333908,path:[[16200,5200,6.72],[16800,5200,6.72],[16800,5800,6.72],[16200,5800,6.72]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16500,y:5500,r:200,currentPoint:0,path:[[16500,5500,0],[16500,5550,0]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:17000,y:5000,r:112,currentPoint:0,path:[[17000,5000,0],[17000,5050,0]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16000,y:5000,r:130,currentPoint:0,path:[[16000,5000,0],[16000,5050,0]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16150,y:13150,r:50,currentPoint:3.4570000000147774,path:[[16150,13150,8.46],[16850,13150,8.46],[16850,13850,8.46],[16150,13850,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16150,y:13150,r:50,currentPoint:1.4570000000147774,path:[[16150,13150,8.46],[16850,13150,8.46],[16850,13850,8.46],[16150,13850,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16250,y:13250,r:50,currentPoint:1.6398000000206885,path:[[16250,13250,8.46],[16750,13250,8.46],[16750,13750,8.46],[16250,13750,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16250,y:13250,r:50,currentPoint:3.6398000000206885,path:[[16250,13250,8.46],[16750,13250,8.46],[16750,13750,8.46],[16250,13750,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16350,y:13350,r:50,currentPoint:2.7330000000344805,path:[[16350,13350,8.46],[16650,13350,8.46],[16650,13650,8.46],[16350,13650,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16350,y:13350,r:50,currentPoint:0.7330000000344807,path:[[16350,13350,8.46],[16650,13350,8.46],[16650,13650,8.46],[16350,13650,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16200,y:7500,r:100,currentPoint:1.3594409611630545,path:[[16200,7500,4.8],[16500,7800,4.8]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16500,y:7200,r:100,currentPoint:1.3594409611630545,path:[[16500,7200,4.8],[16200,7500,4.8]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16800,y:7500,r:100,currentPoint:1.3594409611630545,path:[[16800,7500,4.8],[16500,7200,4.8]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16500,y:7800,r:100,currentPoint:1.3594409611630545,path:[[16500,7800,4.8],[16800,7500,4.8]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16250,y:13250,r:50,currentPoint:2.6398000000206885,path:[[16250,13250,8.46],[16750,13250,8.46],[16750,13750,8.46],[16250,13750,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16250,y:13250,r:50,currentPoint:0.6398000000206885,path:[[16250,13250,8.46],[16750,13250,8.46],[16750,13750,8.46],[16250,13750,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16150,y:13150,r:50,currentPoint:0.4570000000147775,path:[[16150,13150,8.46],[16850,13150,8.46],[16850,13850,8.46],[16150,13850,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(0,[0],[1],{x:16150,y:13150,r:50,currentPoint:2.4570000000147774,path:[[16150,13150,8.46],[16850,13150,8.46],[16850,13850,8.46],[16150,13850,8.46]],
    cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#0f0f0f';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

C(1,[],[18],{type:[1,[],[18]],x:17800,y:4400,w:600,h:3050,size:20.5,inView:false,sizeChangePermanent:false,sizeMult:0.8367346938775511,})
C(1,[],[18],{type:[1,[],[18]],x:17800,y:9600,w:600,h:800,size:17.6069588515,inView:false,sizeChangePermanent:false,sizeMult:0.7186513816938775,})
C(1,[],[18],{type:[1,[],[18]],x:10600,y:4800,w:3600,h:1000,size:49.5,inView:false,sizeChangePermanent:false,sizeMult:2.020408163265306,})
C(1,[],[18],{type:[1,[],[18]],x:16000,y:15000,w:1000,h:1000,size:12.25,inView:false,sizeChangePermanent:false,sizeMult:0.5,})
C(1,[],[18],{type:[1,[],[18]],x:12100,y:1650,w:1300,h:500,size:18,inView:false,sizeChangePermanent:false,sizeMult:0.7346938775510204,})
C(1,[],[18],{type:[1,[],[18]],x:-2.4492935982947067e-14,y:800,w:800,h:6600,size:49.5,inView:false,sizeChangePermanent:false,sizeMult:2.020408163265306,})
C(1,[],[18],{type:[1,[],[18]],x:16500,y:0,w:2700,h:800,size:12.5,inView:false,sizeChangePermanent:false,sizeMult:0.5102040816326531,})
C(1,[],[18],{type:[1,[],[18]],x:11300,y:3000,w:400,h:1000,size:10.2,inView:false,sizeChangePermanent:false,sizeMult:0.4163265306122449,})
C(1,[],[18],{type:[1,[],[18]],x:1600,y:3900,w:600,h:1200,size:12,inView:false,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[18],{type:[1,[],[18]],x:14200,y:6200,w:1050,h:700,size:26.25,inView:false,sizeChangePermanent:false,sizeMult:1.0714285714285714,})
C(1,[],[11],{type:[1,[],[11]],x:9400,y:0,w:1200,h:800,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:13100,y:200,w:300,h:400,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:19200,y:0,w:800,h:800,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:0,w:800,h:800,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:19100,w:800,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:19200,y:3600,w:400,h:300,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:19800,y:5500,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:19200,y:2400,w:400,h:300,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:2600,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:300,y:4800,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:600,y:6300,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:0,y:6300,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:11600,w:600,h:600,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:9400,w:600,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:10800,w:600,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:8400,w:600,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:4000,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:2000,y:4200,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:2000,y:3900,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:1600,y:3100,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:2000,y:3500,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:2000,y:3100,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:15100,y:1800,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16400,y:11000,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16400,y:15000,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:14550,y:6900,w:300,h:50,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16800,y:15000,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:12100,y:14200,w:200,h:1000,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:13900,y:14200,w:300,h:1000,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:5800,y:14200,w:3700,h:1000,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16000,y:5800,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16400,y:7000,w:200,h:1000,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16000,y:7400,w:1000,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16000,y:9000,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:16000,y:16000,w:1000,h:1000,renderAbove:false,})
C(1,[],[13],{type:[1,[],[13]],x:9100,y:16000,w:400,h:1000,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[9],{type:[1,[],[9]],x:9100,y:15600,w:400,h:1400,spawn:{"x":4650,"y":8150},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:10500,y:15950,w:200,h:1050,spawn:{"x":5300,"y":8237.5},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[25],{type:[1,[],[25]],x:16000,y:9200,w:1000,h:200,dir:"up",max:400,pushBack:30,startX:8000,startY:4600,pusherId:0.9004933079280821,xv:0,yv:0,pushing:false,inView:false,pushAngle:90,maxPushDistance:800,idlePushBackSpeed:25,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:16200,y:9000,w:200,h:1000,dir:"left",max:400,pushBack:30,startX:8100,startY:4500,pusherId:0.5287050746740534,xv:0,yv:0,pushing:false,inView:false,pushAngle:0,maxPushDistance:800,idlePushBackSpeed:25,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[0],[1],{type:[1,[0],[1]],x:16850,y:9550,w:100,h:100,points:[[8425,4775],[8275,4925]],speed:150,currentPoint:0.7169788709260078,collidable:true,pointOn:{"x":8425,"y":4775},pointTo:{"x":8275,"y":4925},xv:-106.06601717798212,yv:106.06601717798213,inView:false,path:[[16850,9550,5],[16550,9850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16850,y:9550,w:100,h:100,points:[[8425,4775],[8275,4925]],speed:150,currentPoint:1.7169788709260079,collidable:true,pointOn:{"x":8275,"y":4925},pointTo:{"x":8425,"y":4775},xv:106.06601717798213,yv:-106.06601717798212,inView:false,path:[[16850,9550,5],[16550,9850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16350,y:9050,w:100,h:100,points:[[8175,4525],[8025,4675]],speed:150,currentPoint:1.7169788709260079,collidable:true,pointOn:{"x":8025,"y":4675},pointTo:{"x":8175,"y":4525},xv:106.06601717798213,yv:-106.06601717798212,inView:false,path:[[16350,9050,5],[16050,9350,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16350,y:9050,w:100,h:100,points:[[8175,4525],[8025,4675]],speed:150,currentPoint:0.7169788709260078,collidable:true,pointOn:{"x":8175,"y":4525},pointTo:{"x":8025,"y":4675},xv:-106.06601717798212,yv:106.06601717798213,inView:false,path:[[16350,9050,5],[16050,9350,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16600,y:9300,w:100,h:100,points:[[8300,4650],[8225,4725],[8150,4800],[8225,4725]],speed:150,currentPoint:0.4339577418520154,collidable:true,pointOn:{"x":8300,"y":4650},pointTo:{"x":8225,"y":4725},xv:-106.06601717798212,yv:106.06601717798213,inView:false,path:[[16600,9300,5],[16450,9450,5],[16300,9600,5],[16450,9450,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16600,y:9300,w:100,h:100,points:[[8300,4650],[8225,4725],[8150,4800],[8225,4725]],speed:150,currentPoint:2.4339577418520153,collidable:true,pointOn:{"x":8150,"y":4800},pointTo:{"x":8225,"y":4725},xv:106.06601717798213,yv:-106.06601717798212,inView:false,path:[[16600,9300,5],[16450,9450,5],[16300,9600,5],[16450,9450,5]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:16500,y:7500,w:0.002,h:0.002,tpx:16100,tpy:9100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:16000,y:13000,w:1000,h:1000,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[13],{type:[1,[],[13]],x:14700,y:8100,w:500,h:200,force:650,dir:{"x":0,"y":-650},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4603841536614646,})
C(1,[],[14],{type:[1,[],[14]],x:14200,y:5800,w:1000,h:9400,force:1800,dir:{"x":0,"y":1800},direction:"down",jumpHeight:132,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.3889555822328932,jumpForce:38.279999999999994,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[1],{type:[1,[],[1]],x:15150,y:8250,w:50,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:11600,w:600,h:200,force:650,dir:{"x":0,"y":-650},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:10850,w:600,h:200,force:650,dir:{"x":0,"y":-650},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:10200,w:800,h:200,force:1200,dir:{"x":0,"y":-1200},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8499399759903962,})
C(1,[],[1],{type:[1,[],[1]],x:14200,y:9000,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15150,y:8950,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:13900,y:14200,w:300,h:1000,force:3400,dir:{"x":0,"y":3400},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.4081632653061225,})
C(1,[],[13],{type:[1,[],[13]],x:13900,y:14200,w:300,h:1000,force:2300,dir:{"x":2300,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[9],{type:[1,[],[9]],x:13900,y:14200,w:300,h:1000,spawn:{"x":7025,"y":7350},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10200],[14400,10600],[14300,10450]],most:{"left":7150,"right":7200,"top":5100,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15100,10200],[15100,10450],[15000,10600]],most:{"left":7500,"right":7550,"top":5100,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,10850],[14600,10975],[14400,11100]],most:{"left":7200,"right":7300,"top":5425,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15000,10850],[15000,11100],[14800,10975]],most:{"left":7400,"right":7500,"top":5425,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:14200,y:14200,w:300,h:300,points:[[7100,7100],[7100,7450],[7400,7125],[7400,6800]],speed:222,currentPoint:3.9252540100503968,pointOn:{"x":7400,"y":6800},pointTo:{"x":7100,"y":7100},xv:-156.97770542341354,yv:156.97770542341357,inView:false,path:[[14200,14200,7.4],[14200,14900,7.4],[14800,14250,7.4],[14800,13600,7.4]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14200,y:14200,w:300,h:300,points:[[7100,7100],[7100,7450],[7400,7125],[7400,6800]],speed:222,currentPoint:1.8717778438800559,pointOn:{"x":7100,"y":7450},pointTo:{"x":7400,"y":7125},xv:150.5781828067406,yv:-163.12636470730232,inView:false,path:[[14200,14200,7.4],[14200,14900,7.4],[14800,14250,7.4],[14800,13600,7.4]],})
C(1,[0],[1],{type:[1,[0],[1]],x:14200,y:14200,w:300,h:300,points:[[7100,7100],[7100,7450],[7400,7125],[7400,6800]],speed:222,currentPoint:1.1369743992525905,collidable:true,pointOn:{"x":7100,"y":7450},pointTo:{"x":7400,"y":7125},xv:150.5781828067406,yv:-163.12636470730232,inView:false,path:[[14200,14200,7.4],[14200,14900,7.4],[14800,14250,7.4],[14800,13600,7.4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14200,y:14200,w:300,h:300,points:[[7100,7100],[7100,7450],[7400,7125],[7400,6800]],speed:222,currentPoint:3.100296098666055,collidable:true,pointOn:{"x":7400,"y":6800},pointTo:{"x":7100,"y":7100},xv:-156.97770542341354,yv:156.97770542341357,inView:false,path:[[14200,14200,7.4],[14200,14900,7.4],[14800,14250,7.4],[14800,13600,7.4]],boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[14900,12100],[14850,12350],[14700,12450],[14750,12150]],most:{"left":7350,"right":7450,"top":6050,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[14500,12100],[14650,12150],[14700,12450],[14550,12350]],most:{"left":7250,"right":7350,"top":6050,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:15100,y:12800,w:100,h:100,points:[[7550,6400],[7450,6350]],speed:84,currentPoint:1.7021157991023574,pointOn:{"x":7450,"y":6350},pointTo:{"x":7550,"y":6400},xv:75.13188404399293,yv:37.56594202199646,inView:false,path:[[15100,12800,2.8],[14900,12700,2.8]],})
C(1,[0],[11],{type:[1,[0],[11]],x:15100,y:12800,w:100,h:100,points:[[7550,6400],[7450,6350]],speed:84,currentPoint:0.7021157991023574,pointOn:{"x":7550,"y":6400},pointTo:{"x":7450,"y":6350},xv:-75.13188404399293,yv:-37.56594202199648,inView:false,path:[[15100,12800,2.8],[14900,12700,2.8]],})
C(1,[0],[11],{type:[1,[0],[11]],x:15100,y:12500,w:100,h:100,points:[[7550,6250],[7450,6300]],speed:84,currentPoint:0.7021157991023574,pointOn:{"x":7550,"y":6250},pointTo:{"x":7450,"y":6300},xv:-75.13188404399293,yv:37.56594202199648,inView:false,path:[[15100,12500,2.8],[14900,12600,2.8]],})
C(1,[0],[11],{type:[1,[0],[11]],x:15100,y:12500,w:100,h:100,points:[[7550,6250],[7450,6300]],speed:84,currentPoint:1.7021157991023574,pointOn:{"x":7450,"y":6300},pointTo:{"x":7550,"y":6250},xv:75.13188404399293,yv:-37.56594202199646,inView:false,path:[[15100,12500,2.8],[14900,12600,2.8]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14400,y:12700,w:200,h:200,points:[[7200,6350],[7400,6550]],speed:163,currentPoint:1.0493377798644723,pointOn:{"x":7400,"y":6550},pointTo:{"x":7200,"y":6350},xv:-115.25840533340724,yv:-115.25840533340725,inView:false,path:[[14400,12700,5.433333333333334],[14800,13100,5.433333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14400,y:12700,w:200,h:200,points:[[7200,6350],[7400,6550]],speed:163,currentPoint:0.049337779864472395,pointOn:{"x":7200,"y":6350},pointTo:{"x":7400,"y":6550},xv:115.25840533340725,yv:115.25840533340724,inView:false,path:[[14400,12700,5.433333333333334],[14800,13100,5.433333333333334]],})
C(0,[],[12],{type:[0,[],[12]],x:17000,y:6000,r:130,tpx:16500,tpy:7900,renderType:"circleR",radius:65,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:18000,y:8300,w:200,h:200,speedInc:0.5,inView:false,speedChangePermanent:false,speedMult:0.5,})
C(1,[0],[1],{type:[1,[0],[1]],x:17750,y:5500,w:50,h:600,points:[[8875,2750],[8900,2750]],speed:25,currentPoint:1.9916666671264829,collidable:true,pointOn:{"x":8900,"y":2750},pointTo:{"x":8875,"y":2750},xv:-25,yv:3.061616997868383e-15,inView:false,path:[[17750,5500,0.8333333333333334],[17800,5500,0.8333333333333334]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,7800],[18000,8000],[17800,8200]],most:{"left":8900,"right":9000,"top":3900,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18350,y:8350,w:50,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17800,y:8350,w:50,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[27],{type:[1,[],[27]],x:16000,y:16000,w:1000,h:1000,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[9],{type:[1,[],[9]],x:16000,y:16000,w:1000,h:1000,spawn:{"x":8250,"y":8250},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:17000,y:2150,w:800,h:15600,canJump:false,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:17850,y:3550,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18300,y:3550,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,3600],[18000,3800],[17800,4000]],most:{"left":8900,"right":9000,"top":1800,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,3650],[17950,3800],[17800,3950]],most:{"left":8900,"right":8975,"top":1825,"bottom":1975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,3600],[18400,4000],[18200,3800]],most:{"left":9100,"right":9200,"top":1800,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,3650],[18400,3950],[18250,3800]],most:{"left":9125,"right":9200,"top":1825,"bottom":1975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:18350,y:5500,w:50,h:600,points:[[9175,2750],[9200,2750]],speed:25,currentPoint:1.9916666671264829,collidable:true,pointOn:{"x":9200,"y":2750},pointTo:{"x":9175,"y":2750},xv:-25,yv:3.061616997868383e-15,inView:false,path:[[18350,5500,0.8333333333333334],[18400,5500,0.8333333333333334]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17800,y:6350,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18350,y:6350,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:17900,y:6200,w:400,h:1150,snapDistance:50,snapWait:0.2,snapX:true,snapY:false,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:12,snapDistanceY:100,snapDistanceX:100,toSnapX:true,toSnapY:false,})
C(1,[],[2],{type:[1,[],[2]],x:17850,y:3000,w:500,h:100,effect:120,inView:false,bounciness:80,decay:0.5,})
C(1,[],[15],{type:[1,[],[15]],x:17800,y:11700,w:600,h:700,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[24],{type:[1,[],[24]],x:17800,y:10300,w:600,h:2100,ir:0.25,or:0.75,o:0.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.44999999999999996,innerOpacity:0,outerOpacity:1,})
var morphTriggered0 = false;
    C(1,[],[5],{h:400,w:400,y:11900,x:17900,
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
C(1,[],[9],{type:[1,[],[9]],x:17800,y:11800,w:600,h:600,spawn:{"x":9050,"y":6050},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[12],{type:[1,[],[12]],x:17850,y:12350,w:500,h:100,tpx:18100,tpy:12100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
var morphTriggered1 = false;
    C(1,[],[5],{h:200,w:200,y:3200,x:18000,
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
C(1,[],[9],{type:[1,[],[9]],x:17800,y:9100,w:600,h:600,spawn:{"x":9050,"y":4700},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[12],{type:[2,[],[12]],points:[[18400,9400],[18404,9600],[18150,9700]],tpx:18100,tpy:8450,most:{"left":9075,"right":9202,"top":4700,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[17800,9400],[18050,9700],[17800,9600]],tpx:18100,tpy:8450,most:{"left":8900,"right":9025,"top":4700,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
var morphTriggered1 = false;
    C(1,[],[5],{h:200,w:200,y:8300,x:18000,
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
C(1,[],[23],{type:[1,[],[23]],x:10000,y:4800,w:600,h:1000,tornadoStrength:5,inView:false,})
shared.morphsTriggered[21]=false;var x21=13050;C(1,[],[0],{y:4800,x:13050,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x21, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[21] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[21] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[21] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[21]=false;var x21=13050;C(1,[],[0],{y:5500,x:13050,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x21, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[21] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[21] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[21] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[22]=false;var x22=12250;C(1,[],[0],{y:5500,x:12250,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x22, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[22] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[22] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[22] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[22]=false;var x22=12250;C(1,[],[0],{y:4800,x:12250,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x22, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[22] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[22] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[22] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[23]=false;var x23=11450;C(1,[],[0],{y:4800,x:11450,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x23, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[23] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[23] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[23] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[23]=false;var x23=11450;C(1,[],[0],{y:5500,x:11450,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x23, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[23] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[23] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[23] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[24]=false;var x24=10600;C(1,[],[0],{y:5500,x:10600,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x24, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[24] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[24] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[24] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[24]=false;var x24=10600;C(1,[],[0],{y:4800,x:10600,w:300,h:300,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x24, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[24] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[24] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[24] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[],[13],{type:[1,[],[13]],x:14200,y:6200,w:1000,h:700,force:800,dir:{"x":0,"y":800},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5666266506602641,})
C(1,[],[17],{x:14100,y:6100,w:1200,h:800,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,
        sf:(o)=>{
            if(o.timeTrapTime <= 0){
                players[selfId].pos.x = 14700;
                players[selfId].pos.y = 5300;
            }

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
    });C(1,[],[1],{type:[1,[],[1]],x:14200,y:6200,w:1000,h:700,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:14200,y:7400,w:1500,h:200,angle:9520.616666664913,rotateSpeed:0.017744107744107743,pivotX:14950,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:378.3186487605389,unSim:4.433333333333343,inView:false,initialRotation:166.1661076535502,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:14200,y:7400,w:1500,h:200,angle:9610.61666666487,rotateSpeed:0.017744107744107743,pivotX:14950,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:378.3186487605389,unSim:4.433333333333343,inView:false,initialRotation:167.73690398034435,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14250,y:11050,w:150,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15000,y:11050,w:150,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[8],{type:[1,[],[8]],x:14900,y:11600,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:14700,y:11600,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:14500,y:11600,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:14300,y:11600,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:14200,y:8400,w:100,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15100,y:8450,w:100,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2380,y:5115,w:140,h:870,angle:8855.987142856728,rotateSpeed:0.01633766233765825,pivotX:2450,pivotY:5550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:220.29809350060205,unSim:4.433333333333343,inView:false,initialRotation:154.5661341571353,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:5800,y:14200,w:3700,h:1000,force:1920,dir:{"x":-1920,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.359903961584634,})
C(1,[],[14],{type:[1,[],[14]],x:5800,y:14200,w:3700,h:1000,force:2780,dir:{"x":0,"y":2780},direction:"down",jumpHeight:152,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6007202881152462,jumpForce:44.08,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[15],{type:[1,[],[15]],x:5800,y:14200,w:3700,h:1000,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[1],[1],{type:[1,[1],[1]],x:5800,y:14200,w:3700,h:1000,angle:0,rotateSpeed:0,pivotX:7650,pivotY:14700,distToPivot:0,canCollide:false,renderType:"rotating",cullingRadius:958.18839483684,unSim:4.433333333333343,inView:false,initialRotation:0,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:14850,w:200,h:800,canJump:true,inView:false,})
var minX10136, minY10136, maxX10136, maxY10136;
    minX10136 = 9350;minY10136 = 18300;maxX10136 = 10750;maxY10136 = 19100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10136) && (player.pos.x) < md(maxX10136) && (player.pos.y) > md(minY10136) && (player.pos.y) < md(maxY10136)) {
            colors.background="#c39e22"; colors.tile="#926e03";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[9050,16500],[9150,16500],[9050,16550]],most:{"left":4525,"right":4575,"top":8250,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8700,16650],[8800,16700],[8700,16700]],most:{"left":4350,"right":4400,"top":8325,"bottom":8350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8650,16300],[8750,16300],[8650,16350]],most:{"left":4325,"right":4375,"top":8150,"bottom":8175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:13750,w:200,h:800,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:12100,y:14200,w:200,h:1000,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[1],{type:[1,[],[1]],x:12300,y:14200,w:1600,h:1000,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:13500,y:14900,w:400,h:300,points:[[6750,7450],[6150,7450],[6350,7450]],speed:161.5,currentPoint:2.7891354166867837,pointOn:{"x":6350,"y":7450},pointTo:{"x":6750,"y":7450},xv:161.5,yv:0,inView:false,path:[[13500,14900,5.383333333333334],[12300,14900,5.383333333333334],[12700,14900,5.383333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14200,w:400,h:300,points:[[6150,7100],[6750,7100]],speed:161.5,currentPoint:1.526090277791189,pointOn:{"x":6750,"y":7100},pointTo:{"x":6150,"y":7100},xv:-161.5,yv:1.9778045806229755e-14,inView:false,path:[[12300,14200,5.383333333333334],[13500,14200,5.383333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:13500,y:14550,w:400,h:300,points:[[6750,7275],[6350,7275],[6150,7275]],speed:161.6,currentPoint:2.219088888878926,pointOn:{"x":6150,"y":7275},pointTo:{"x":6750,"y":7275},xv:161.6,yv:0,inView:false,path:[[13500,14550,5.386666666666667],[12700,14550,5.386666666666667],[12300,14550,5.386666666666667]],})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:4800,w:1200,h:1000,force:3200,dir:{"x":0,"y":3200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
var timer10137 = 3.0083333333323408; var state10137 =false; var x10137 = 8800; 
    C(1,[],[1],{h:1000,w:1000,y:4800,x:8800,sf:(e)=>{
            timer10137 -= 1 / 60;
            if(timer10137 < 0){
                state10137 = !state10137;
                if(state10137 === true){
                    // on
                    timer10137 += 1;
                    e.pos.x = x10137;
                } else {
                    // off
                    timer10137 += 5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10137) {
                if (timer10137 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = timer10137 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10137 < 0.2 && 5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10137 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10137, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10138 = 0.5083333333323915; var state10138 =true; var x10138 = 7800; 
    C(1,[],[1],{h:1000,w:1000,y:4800,x:7800,sf:(e)=>{
            timer10138 -= 1 / 60;
            if(timer10138 < 0){
                state10138 = !state10138;
                if(state10138 === true){
                    // on
                    timer10138 += 1;
                    e.pos.x = x10138;
                } else {
                    // off
                    timer10138 += 5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10138) {
                if (timer10138 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = timer10138 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10138 < 0.2 && 5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10138 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10138, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10139 = 3.0083333333323408; var state10139 =false; var x10139 = 6800; 
    C(1,[],[1],{h:1000,w:1000,y:4800,x:6800,sf:(e)=>{
            timer10139 -= 1 / 60;
            if(timer10139 < 0){
                state10139 = !state10139;
                if(state10139 === true){
                    // on
                    timer10139 += 1;
                    e.pos.x = x10139;
                } else {
                    // off
                    timer10139 += 5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10139) {
                if (timer10139 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = timer10139 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10139 < 0.2 && 5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10139 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10139, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10140 = 0.5083333333323915; var state10140 =true; var x10140 = 5800; 
    C(1,[],[1],{h:1000,w:1000,y:4800,x:5800,sf:(e)=>{
            timer10140 -= 1 / 60;
            if(timer10140 < 0){
                state10140 = !state10140;
                if(state10140 === true){
                    // on
                    timer10140 += 1;
                    e.pos.x = x10140;
                } else {
                    // off
                    timer10140 += 5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10140) {
                if (timer10140 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = timer10140 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10140 < 0.2 && 5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10140 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10140, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(0,[],[7],{type:[0,[],[7]],x:6800,y:5300,r:100,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:7800,y:5300,r:100,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:8800,y:5300,r:100,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:9400,y:5200,w:600,h:600,coins:6,currentCoins:6,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:6,})
C(1,[],[14],{type:[1,[],[14]],x:6600,y:6600,w:800,h:6800,force:3200,dir:{"x":0,"y":3200},direction:"down",jumpHeight:148,maxForce:1000,variableJumpHeight:false,platformerFriction:0.944784,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6914765906362546,jumpForce:40.774,jumpDecay:0.9216,maxJumpCooldown:20,canJumpMidair:true,})
C(0,[],[1],{type:[0,[],[1]],x:7200,y:11600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6800,y:11600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[6800,11700],[7200,11700],[7000,12200]],most:{"left":3400,"right":3600,"top":5850,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,12400],[6800,12500],[6600,12600]],most:{"left":3300,"right":3400,"top":6200,"bottom":6300},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[16],{type:[1,[],[16]],x:4100,y:16100,w:5200,h:800,snapDistance:100,snapWait:0.36,snapX:true,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:21.599999999999998,snapDistanceY:200,snapDistanceX:200,toSnapX:true,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9050,16450],[9300,16450],[9350,16500],[9300,16550],[9050,16550],[9000,16500]],most:{"left":4500,"right":4675,"top":8225,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8500,16650],[8750,16650],[8800,16700],[8750,16750],[8500,16750],[8450,16700]],most:{"left":4225,"right":4400,"top":8325,"bottom":8375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8500,16250],[8750,16250],[8800,16300],[8750,16350],[8500,16350],[8450,16300]],most:{"left":4225,"right":4400,"top":8125,"bottom":8175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7900,16450],[8150,16450],[8200,16500],[8150,16550],[7900,16550],[7850,16500]],most:{"left":3925,"right":4100,"top":8225,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:12600,y:6600,w:800,h:6800,force:3800,dir:{"x":0,"y":3800},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[15],{type:[1,[],[15]],x:16000,y:15000,w:1000,h:900,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[19],{type:[1,[],[19]],x:16000,y:15000,w:1000,h:1000,speedInc:0.48,inView:false,speedChangePermanent:false,speedMult:0.48,})
C(1,[],[13],{type:[1,[],[13]],x:16000,y:15000,w:1000,h:1000,force:1200,dir:{"x":0,"y":1200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8499399759903962,})
C(1,[],[9],{type:[1,[],[9]],x:16800,y:15000,w:200,h:100,spawn:{"x":8450,"y":7525},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[17],{type:[1,[],[17]],x:4800,y:5800,w:1000,h:8400,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[19],{type:[1,[],[19]],x:4800,y:5800,w:1000,h:8400,speedInc:2.2,inView:false,speedChangePermanent:false,speedMult:2.2,})
C(1,[],[12],{type:[1,[],[12]],x:4750,y:8400,w:150,h:350,tpx:5300,tpy:8200,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:5200,y:11300,w:200,h:300,speedInc:0.5,inView:false,speedChangePermanent:false,speedMult:0.5,})
C(1,[],[12],{type:[1,[],[12]],x:5200,y:11100,w:200,h:200,tpx:4850,tpy:10000,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:5200,y:11160,w:200,h:200,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(4,[],[0],{type:[4,[],[0]],x:5300,y:12100,radius:300,startAngle:3.141592653589793,endAngle:4.511676116405342,startPolygon:{"points":[[2400,6050],[2350,6050]],"type":"poly","props":{}},endPolygon:{"points":[[2600.1580163957005,5805.018823844793],[2590.1896196748407,5756.022588613751]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:3.141592653589793,endSliceAngle:4.511676116405342,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5300,y:12100,radius:300,startAngle:4.9131018443640375,endAngle:0,startPolygon:{"points":[[2699.8419836042995,5805.018823844793],[2709.8103803251593,5756.022588613751]],"type":"poly","props":{}},endPolygon:{"points":[[2900,6050],[2950,6050]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:4.9131018443640375,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5300,y:12100,radius:200,startAngle:3.141592653589793,endAngle:0,startPolygon:{"points":[[2650,6050],[2450,6050]],"type":"poly","props":{}},endPolygon:{"points":[[2650,6050],[2850,6050]],"type":"poly","props":{}},renderType:"circle",inView:false,r:400,innerRadius:0,startSliceAngle:3.141592653589793,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[9],{type:[1,[],[9]],x:4800,y:4800,w:1000,h:1000,spawn:{"x":2650,"y":2650},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:4800,y:14200,w:1000,h:1000,spawn:{"x":2650,"y":7350},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[12600,12100],[12900,12100],[12600,12600]],most:{"left":6300,"right":6450,"top":6050,"bottom":6300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13400,12200],[13400,12600],[13050,12700]],most:{"left":6525,"right":6700,"top":6100,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:13400,y:13400,r:800,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:12600,y:11800,r:550,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:13400,y:13400,r:800,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:14200,y:4800,w:1000,h:1000,spawn:{"x":7350,"y":2650},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:14200,y:9600,w:1000,h:600,spawn:{"x":7350,"y":4950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:9500,y:15200,w:1000,h:1800,force:200,dir:{"x":0,"y":-200},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.14165666266506602,})
C(1,[],[13],{type:[1,[],[13]],x:10700,y:16000,w:5300,h:1000,force:3860,dir:{"x":0,"y":3860},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.733973589435774,})
C(1,[],[13],{type:[1,[],[13]],x:11600,y:16000,w:150,h:300,force:1600,dir:{"x":1600,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.1332533013205282,})
C(1,[0],[11],{type:[1,[0],[11]],x:11400,y:15900,w:200,h:100,points:[[5700,7950],[5700,8300]],speed:150,currentPoint:1.7107142857142859,pointOn:{"x":5700,"y":8300},pointTo:{"x":5700,"y":7950},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[11400,15900,5],[11400,16600,5]],})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:16000,w:300,h:1000,force:3400,dir:{"x":-3400,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.4081632653061225,})
C(1,[],[2],{type:[1,[],[2]],x:10900,y:16700,w:250,h:100,effect:60,inView:false,bounciness:40,decay:0.5,})
C(0,[],[1],{type:[0,[],[1]],x:13000,y:16900,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11200,y:16000,w:400,h:100,points:[[5600,8000],[5600,8350]],speed:150,currentPoint:1.7107142857142859,collidable:true,pointOn:{"x":5600,"y":8350},pointTo:{"x":5600,"y":8000},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[11200,16000,5],[11200,16700,5]],boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:16000,y:16000,radius:400,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[8000,8000],[8400,8000]],"type":"poly","props":{}},endPolygon:{"points":[[8000,8000],[7600,8000]],"type":"poly","props":{}},renderType:"circle",inView:false,r:800,innerRadius:0,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:10000,y:16500,radius:350,startAngle:148.1010772308089,endAngle:143.3886882504182,startPolygon:{"points":[[4774.479062231748,8142.109747297877],[4684.270687124446,8098.953646217027]],"type":"poly","props":{}},endPolygon:{"points":[[5107.890252700768,8024.479062231099],[5151.046353781076,7934.270687123539]],"type":"poly","props":{}},innerRadius:500,toRotate:true,rotateSpeed:0.9075712110370514,renderType:"circle",inView:false,r:700,startSliceAngle:148.1010772308089,endSliceAngle:143.3886882504182,startSliceAngleRotateSpeed:0.007563093425308762,endSliceAngleRotateSpeed:0.007563093425308762,})
C(4,[],[0],{type:[4,[],[0]],x:10000,y:16500,radius:350,startAngle:144.95948457721508,endAngle:146.530280904012,startPolygon:{"points":[[5225.520937768687,8357.890252701216],[5315.729312876161,8401.046353781701]],"type":"poly","props":{}},endPolygon:{"points":[[4892.109747298331,8475.52093776847],[4848.953646217663,8565.729312875857]],"type":"poly","props":{}},innerRadius:500,toRotate:true,rotateSpeed:0.9075712110370514,renderType:"circle",inView:false,r:700,startSliceAngle:144.95948457721508,endSliceAngle:146.530280904012,startSliceAngleRotateSpeed:0.007563093425308762,endSliceAngleRotateSpeed:0.007563093425308762,})
C(1,[],[9],{type:[1,[],[9]],x:16000,y:15000,w:200,h:100,spawn:{"x":8050,"y":7525},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[0],[1],{type:[1,[0],[1]],x:16500,y:15100,w:100,h:800,points:[[8250,7550],[8300,7550]],speed:25,currentPoint:0.9958333335632414,collidable:true,pointOn:{"x":8250,"y":7550},pointTo:{"x":8300,"y":7550},xv:25,yv:0,inView:false,path:[[16500,15100,0.8333333333333334],[16600,15100,0.8333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:14950,w:200,h:1100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:16300,y:15100,w:100,h:800,points:[[8150,7550],[8200,7550]],speed:25,currentPoint:0.9958333332729672,collidable:true,pointOn:{"x":8150,"y":7550},pointTo:{"x":8200,"y":7550},xv:25,yv:0,inView:false,path:[[16300,15100,0.8333333333333334],[16400,15100,0.8333333333333334]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:16350,y:15900,w:250,h:100,tpx:16900,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16000,y:15900,w:250,h:100,tpx:16500,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:16000,y:11200,w:1000,h:600,canCollide:false,inView:false,boundPlayer:false,})
C(1,[1],[12],{type:[1,[1],[12]],x:2700,y:10150,w:300,h:300,tpx:10350,tpy:9650,angle:45,rotateSpeed:0,pivotX:2850,pivotY:10300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,})
C(1,[],[20],{x:9000,y:1600,w:2000,h:1400,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[9],{type:[1,[],[9]],x:16000,y:3000,w:1000,h:1000,spawn:{"x":8250,"y":1750},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:4000,w:1000,h:12000,force:2600,dir:{"x":0,"y":2600},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[20],{h:400,w:1400,y:3300,x:12300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[10],{type:[1,[],[10]],x:12300,y:3300,w:1400,h:400,maxStrength:28,currentStrength:28,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[13],{type:[1,[],[13]],x:11000,y:3900,w:300,h:100,force:2500,dir:{"x":0,"y":-2500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[24],{type:[1,[],[24]],x:14300,y:3000,w:1400,h:1000,ir:0.25,or:0.65,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.39,innerOpacity:0,outerOpacity:1,})
C(1,[],[13],{type:[1,[],[13]],x:15700,y:3300,w:300,h:400,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[29],{type:[1,[],[29]],x:15700,y:3350,w:300,h:300,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[0],[1],{type:[1,[0],[1]],x:12300,y:2300,w:1400,h:700,points:[[6150,1150],[6150,1500]],speed:132,currentPoint:1.5854285714236447,collidable:true,pointOn:{"x":6150,"y":1500},pointTo:{"x":6150,"y":1150},xv:8.082668874372531e-15,yv:-132,inView:false,path:[[12300,2300,4.4],[12300,3000,4.4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12300,y:3300,w:1400,h:700,points:[[6150,1650],[6150,2000]],speed:132,currentPoint:1.5854285714236447,collidable:true,pointOn:{"x":6150,"y":2000},pointTo:{"x":6150,"y":1650},xv:8.082668874372531e-15,yv:-132,inView:false,path:[[12300,3300,4.4],[12300,4000,4.4]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:13700,y:3000,w:300,h:300,force:3200,dir:{"x":3200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[],[13],{type:[1,[],[13]],x:11700,y:3000,w:300,h:300,force:3200,dir:{"x":3200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[0],[1],{type:[1,[0],[1]],x:11300,y:4100,w:400,h:100,points:[[5650,2050],[5650,1950]],speed:120,currentPoint:1.5899999999999999,collidable:true,pointOn:{"x":5650,"y":1950},pointTo:{"x":5650,"y":2050},xv:7.34788079488412e-15,yv:120,inView:false,path:[[11300,4100,4],[11300,3900,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11300,y:2800,w:400,h:100,points:[[5650,1400],[5650,1500]],speed:120,currentPoint:1.5899999999999999,collidable:true,pointOn:{"x":5650,"y":1500},pointTo:{"x":5650,"y":1400},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[11300,2800,4],[11300,3000,4]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4300,y:3000,w:3400,h:1000,force:2800,dir:{"x":-2800,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.9831932773109244,})
C(1,[],[13],{type:[1,[],[13]],x:8700,y:3700,w:300,h:300,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[20],{x:3000,y:16000,w:1000,h:1000,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[15],{type:[1,[],[15]],x:4300,y:3000,w:3400,h:1000,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(2,[],[12],{type:[2,[],[12]],points:[[4300,3500],[4400,3600],[4300,3700],[4200,3600]],tpx:7550,tpy:3150,most:{"left":2100,"right":2200,"top":1750,"bottom":1850},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[7],{type:[0,[],[7]],x:5000,y:3920,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[17],{type:[1,[],[17]],x:7700,y:3000,w:1000,h:1000,time:0,maxTime:9,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:540,})
C(1,[],[27],{type:[1,[],[27]],x:7475,y:3075,w:150,h:150,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(0,[],[7],{type:[0,[],[7]],x:8450,y:3250,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(4,[],[0],{type:[4,[],[0]],x:8100,y:3600,radius:450,startAngle:4.71238898038469,endAngle:0,startPolygon:{"points":[[4050,1500],[4050,1350]],"type":"poly","props":{}},endPolygon:{"points":[[4350,1800],[4500,1800]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:900,startSliceAngle:4.71238898038469,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[7],{type:[0,[],[7]],x:7950,y:3750,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(4,[],[0],{type:[4,[],[0]],x:8300,y:3400,radius:450,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[4150,2000],[4150,2150]],"type":"poly","props":{}},endPolygon:{"points":[[3850,1700],[3700,1700]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:900,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:10000,y:3000,w:1000,h:1000,force:4200,dir:{"x":4200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.9747899159663866,})
C(1,[],[13],{type:[1,[],[13]],x:9000,y:3000,w:1000,h:1000,force:4200,dir:{"x":-4200,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.9747899159663866,})
C(1,[],[13],{type:[1,[],[13]],x:9000,y:3000,w:2000,h:1000,force:4200,dir:{"x":0,"y":4200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.9747899159663866,})
C(4,[],[0],{type:[4,[],[0]],x:6800,y:3400,radius:450,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[3700,1700],[3850,1700]],"type":"poly","props":{}},endPolygon:{"points":[[3400,2000],[3400,2150]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:900,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:4900,y:3600,radius:450,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[2150,1800],[2000,1800]],"type":"poly","props":{}},endPolygon:{"points":[[2450,1500],[2450,1350]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:900,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[20],{x:17800,y:13500,w:600,h:600,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(0,[],[1],{type:[0,[],[1]],x:18100,y:12850,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11700,y:1900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:11000,y:1700,w:500,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[0],[1],{type:[1,[0],[1]],x:11400,y:1050,w:550,h:400,points:[[5700,525],[5700,750]],speed:150,currentPoint:1.3277777777777777,collidable:true,pointOn:{"x":5700,"y":750},pointTo:{"x":5700,"y":525},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[11400,1050,5],[11400,1500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11400,y:2350,w:550,h:400,points:[[5700,1175],[5700,950]],speed:150,currentPoint:1.3277777777777777,collidable:true,pointOn:{"x":5700,"y":950},pointTo:{"x":5700,"y":1175},xv:9.184850993605149e-15,yv:150,inView:false,path:[[11400,2350,5],[11400,1900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14850,y:1850,w:100,h:100,points:[[7425,925],[7675,925]],speed:150,currentPoint:0.795,collidable:false,pointOn:{"x":7425,"y":925},pointTo:{"x":7675,"y":925},xv:150,yv:0,inView:false,path:[[14850,1850,5],[15350,1850,5]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:14850,y:1950,w:100,h:250,points:[[7425,975],[7675,975]],speed:150,currentPoint:0.795,collidable:true,pointOn:{"x":7425,"y":975},pointTo:{"x":7675,"y":975},xv:150,yv:0,inView:false,path:[[14850,1950,5],[15350,1950,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14850,y:1600,w:100,h:250,points:[[7425,800],[7675,800]],speed:150,currentPoint:0.795,collidable:true,pointOn:{"x":7425,"y":800},pointTo:{"x":7675,"y":800},xv:150,yv:0,inView:false,path:[[14850,1600,5],[15350,1600,5]],boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:12800,y:1600,w:600,h:600,snapDistance:25,snapWait:0.35,snapX:true,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:21,snapDistanceY:50,snapDistanceX:50,toSnapX:true,toSnapY:true,})
C(1,[],[1],{type:[1,[],[1]],x:13250,y:1750,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13250,y:1950,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12850,y:1750,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12850,y:1950,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13050,y:1650,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13050,y:2050,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:1600,w:600,h:100,points:[[6750,800],[6750,1050]],speed:105,currentPoint:1.3565,collidable:true,pointOn:{"x":6750,"y":1050},pointTo:{"x":6750,"y":800},xv:6.429395695523604e-15,yv:-105,inView:false,path:[[13500,1600,3.5],[13500,2100,3.5]],boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:12100,y:1650,w:600,h:500,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(2,[],[0],{type:[2,[],[0]],points:[[12750,2000],[13050,2200],[12450,2200]],most:{"left":6225,"right":6525,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[12400,1600],[12500,1650],[12400,1700],[12300,1650]],most:{"left":6150,"right":6250,"top":800,"bottom":850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12400,2100],[12500,2150],[12400,2200],[12300,2150]],most:{"left":6150,"right":6250,"top":1050,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12250,1650],[12350,1700],[12250,1750],[12150,1700]],most:{"left":6075,"right":6175,"top":825,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12550,1650],[12650,1700],[12550,1750],[12450,1700]],most:{"left":6225,"right":6325,"top":825,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12550,2050],[12650,2100],[12550,2150],[12450,2100]],most:{"left":6225,"right":6325,"top":1025,"bottom":1075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12250,2050],[12350,2100],[12250,2150],[12150,2100]],most:{"left":6075,"right":6175,"top":1025,"bottom":1075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:13500,y:1600,w:600,h:100,points:[[6750,800],[6750,1050]],speed:105,currentPoint:0.3565,collidable:true,pointOn:{"x":6750,"y":800},pointTo:{"x":6750,"y":1050},xv:6.429395695523604e-15,yv:105,inView:false,path:[[13500,1600,3.5],[13500,2100,3.5]],boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:14150,y:1600,w:700,h:550,spawn:{"x":7250,"y":937.5},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(4,[],[0],{type:[4,[],[0]],x:11700,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[5958.253175473054,1012.5],[6001.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[5741.746824526946,1012.5],[5698.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15900,y:1900,radius:150,startAngle:-330.89697288552446,endAngle:-329.3261765587319,startPolygon:{"points":[[7950,950],[7872.744288753144,1078.5750950990991]],"type":"poly","props":{}},endPolygon:{"points":[[7950,950],[7821.42490490072,872.7442887534443]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-2.0943951023931953,renderType:"circle",inView:false,r:300,startSliceAngle:-330.89697288552446,endSliceAngle:-329.3261765587319,startSliceAngleRotateSpeed:-0.017453292519943295,endSliceAngleRotateSpeed:-0.017453292519943295,})
C(4,[],[0],{type:[4,[],[0]],x:15900,y:1900,radius:150,startAngle:-327.75538023193934,endAngle:-326.1845839051467,startPolygon:{"points":[[7950,950],[8027.2557112462555,821.4249049005399]],"type":"poly","props":{}},endPolygon:{"points":[[7950,950],[8078.575095099636,1027.2557112459624]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-2.0943951023931953,renderType:"circle",inView:false,r:300,startSliceAngle:-327.75538023193934,endSliceAngle:-326.1845839051467,startSliceAngleRotateSpeed:-0.017453292519943295,endSliceAngleRotateSpeed:-0.017453292519943295,})
C(4,[],[0],{type:[4,[],[0]],x:17500,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[8858.253175473055,1012.5],[8901.554445662277,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[8641.746824526945,1012.5],[8598.445554337723,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:17500,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[8641.746824526945,887.5],[8598.445554337723,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[8858.253175473055,887.5],[8901.554445662277,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[9],{type:[1,[],[9]],x:9000,y:1600,w:2000,h:1400,spawn:{"x":5000,"y":1150},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:17800,y:1600,w:600,h:600,spawn:{"x":9050,"y":950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:1900,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[9050,800],[9050,650]],"type":"poly","props":{}},endPolygon:{"points":[[9050,1100],[9050,1250]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[15],{type:[1,[],[15]],x:2200,y:1600,w:6800,h:600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:3100,y:1600,w:900,h:600,force:2600,dir:{"x":0,"y":-2600},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[1],{type:[1,[],[1]],x:3300,y:1850,w:700,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:1600,w:900,h:600,force:2600,dir:{"x":0,"y":2600},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[1],{type:[1,[],[1]],x:2200,y:1600,w:700,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:1600,w:900,h:600,force:2600,dir:{"x":0,"y":2600},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[13],{type:[1,[],[13]],x:4900,y:1600,w:900,h:600,force:2600,dir:{"x":0,"y":-2600},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[13],{type:[1,[],[13]],x:5800,y:1600,w:300,h:600,force:2600,dir:{"x":0,"y":2600},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[13],{type:[1,[],[13]],x:6100,y:1600,w:1500,h:600,force:2600,dir:{"x":2600,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[],[13],{type:[1,[],[13]],x:7600,y:1600,w:1400,h:600,force:2600,dir:{"x":2600,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8415366146458585,})
C(1,[1],[1],{type:[1,[1],[1]],x:2380,y:5115,w:140,h:870,angle:8765.987142856706,rotateSpeed:0.01633766233765825,pivotX:2450,pivotY:5550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:220.29809350060205,unSim:4.433333333333343,inView:false,initialRotation:152.99533783034002,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2200,y:4700,w:200,h:400,points:[[1100,2350],[1000,2350]],speed:63.4285714286,currentPoint:1.2118571429076406,collidable:true,pointOn:{"x":1000,"y":2350},pointTo:{"x":1100,"y":2350},xv:63.4285714286,yv:0,inView:false,path:[[2200,4700,2.114285714286667],[2000,4700,2.114285714286667]],boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1800,y:5900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2000,y:5900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2200,y:5150,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[20],{x:1600,y:11600,w:600,h:600,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[0],[12],{type:[1,[0],[12]],x:2500,y:14600,w:500,h:1400,points:[[1250,7300],[1500,7300]],speed:150,currentPoint:0.795,tpx:3500,tpy:4100,pointOn:{"x":1250,"y":7300},pointTo:{"x":1500,"y":7300},xv:150,yv:0,inView:false,path:[[2500,14600,5],[3000,14600,5]],})
C(1,[1],[12],{type:[1,[1],[12]],x:3850,y:10000,w:300,h:300,tpx:3500,tpy:4100,angle:45,rotateSpeed:0,pivotX:4000,pivotY:10150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,})
C(1,[1],[12],{type:[1,[1],[12]],x:2400,y:9992,w:1000,h:116,tpx:3500,tpy:4100,angle:10441.966666669316,rotateSpeed:0.01946127946127946,pivotX:2900,pivotY:10050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.67637950352037,unSim:4.433333333333343,inView:false,initialRotation:182.2466987168768,})
C(1,[1],[12],{type:[1,[1],[12]],x:2850,y:10000,w:300,h:300,tpx:3500,tpy:4100,angle:45,rotateSpeed:0,pivotX:3000,pivotY:10150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,})
C(1,[1],[12],{type:[1,[1],[12]],x:2900,y:5850,w:600,h:600,tpx:3500,tpy:4100,angle:6910.125,rotateSpeed:0.012878787878787878,pivotX:3200,pivotY:6150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:212.13203435596427,unSim:4.433333333333343,inView:false,initialRotation:120.60443297437317,})
C(1,[1],[12],{type:[1,[1],[12]],x:2900,y:7350,w:300,h:300,tpx:3500,tpy:4100,angle:-6932.125,rotateSpeed:-0.012878787878787878,pivotX:3050,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:-120.98840540981192,})
C(1,[0],[1],{type:[1,[0],[1]],x:2200,y:4300,w:200,h:400,points:[[1100,2150],[1000,2150]],speed:63.4285714286,currentPoint:0.21185714290764054,collidable:true,pointOn:{"x":1100,"y":2150},pointTo:{"x":1000,"y":2150},xv:-63.4285714286,yv:7.767759697452425e-15,inView:false,path:[[2200,4300,2.114285714286667],[2000,4300,2.114285714286667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:2200,w:800,h:15600,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1400,y:4300,w:200,h:800,points:[[700,2150],[800,2150]],speed:63.4285714286,currentPoint:1.2118571429076406,collidable:true,pointOn:{"x":800,"y":2150},pointTo:{"x":700,"y":2150},xv:-63.4285714286,yv:7.767759697452425e-15,inView:false,path:[[1400,4300,2.114285714286667],[1600,4300,2.114285714286667]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:1850,y:2550,w:100,h:100,tpx:1900,tpy:1900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1850,y:2400,w:350,h:100,tpx:1900,tpy:6300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:2400,w:300,h:100,tpx:1900,tpy:6300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:1600,y:8600,w:600,h:600,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:8600,w:600,h:800,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:8600,w:600,h:600,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:11000,w:600,h:600,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:6600,w:600,h:1800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[2],{type:[1,[],[2]],x:2150,y:6600,w:50,h:1800,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:1600,y:6600,w:50,h:1800,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:5800,w:1200,h:200,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:6400,w:1200,h:200,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[9],{type:[1,[],[9]],x:9400,y:5800,w:1200,h:800,spawn:{"x":5000,"y":3100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[17],{x:3000,y:14600,w:1000,h:1400,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,
        sf:(o)=>{
            if(o.timeTrapTime <= 0){
                players[selfId].pos.x = 3500;
                players[selfId].pos.y = 4100;
            }

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
    });C(1,[],[17],{x:3000,y:13700,w:1000,h:900,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,
        sf:(o)=>{
            if(o.timeTrapTime <= 0){
                players[selfId].pos.x = 3500;
                players[selfId].pos.y = 4100;
            }

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
    });C(1,[],[10],{type:[1,[],[10]],x:3150,y:13500,w:750,h:200,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:800,inView:false,healSpeed:1,})
C(1,[1],[12],{type:[1,[1],[12]],x:3600,y:9992,w:1000,h:116,tpx:3500,tpy:4100,angle:-10441.966666669316,rotateSpeed:-0.01946127946127946,pivotX:4100,pivotY:10050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.67637950352037,unSim:4.433333333333343,inView:false,initialRotation:-182.2466987168768,})
C(1,[],[9],{type:[1,[],[9]],x:3000,y:3000,w:1000,h:1000,spawn:{"x":1750,"y":1750},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[1],[12],{type:[1,[1],[12]],x:3500,y:7400,w:600,h:600,tpx:3500,tpy:4100,angle:-6932.125,rotateSpeed:-0.012878787878787878,pivotX:3800,pivotY:7700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:212.13203435596427,unSim:4.433333333333343,inView:false,initialRotation:-120.98840540981192,})
C(1,[1],[12],{type:[1,[1],[12]],x:3500,y:6850,w:600,h:600,tpx:3500,tpy:4100,angle:-6932.125,rotateSpeed:-0.012878787878787878,pivotX:3800,pivotY:7150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:212.13203435596427,unSim:4.433333333333343,inView:false,initialRotation:-120.98840540981192,})
C(1,[0],[12],{type:[1,[0],[12]],x:3500,y:14600,w:500,h:1400,points:[[1750,7300],[2000,7300]],speed:150,currentPoint:0.795,tpx:3500,tpy:4100,pointOn:{"x":1750,"y":7300},pointTo:{"x":2000,"y":7300},xv:150,yv:0,inView:false,path:[[3500,14600,5],[4000,14600,5]],})
C(1,[],[9],{type:[1,[],[9]],x:3000,y:16000,w:1000,h:1000,spawn:{"x":1750,"y":8250},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:1300,w:800,h:17900,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:10500,y:19250,w:200,h:550,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:19200,w:200,h:550,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[9],{type:[1,[],[9]],x:9600,y:18400,w:800,h:800,spawn:{"x":5000,"y":9400},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[12],{type:[2,[],[12]],points:[[18100,13750],[18400,13750],[18400,14000]],tpx:18100,tpy:12100,most:{"left":9050,"right":9200,"top":6875,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18000,y:12850,w:200,h:900,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18100,13750],[18400,14000],[18300,14100]],most:{"left":9050,"right":9200,"top":6875,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:17800,y:15500,w:600,h:600,spawn:{"x":9050,"y":7900},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:17774,y:16658,w:130,h:92,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:16400,radius:200,startAngle:-1.0471975511965976,endAngle:1.0471975511965976,startPolygon:{"points":[[9125,8070.0961894323345],[9150,8026.794919243112]],"type":"poly","props":{}},endPolygon:{"points":[[9125,8329.903810567666],[9150,8373.205080756888]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.0471975511965976,endSliceAngle:1.0471975511965976,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:16400,radius:200,startAngle:2.0943951023931953,endAngle:4.1887902047863905,startPolygon:{"points":[[8975,8329.903810567666],[8950,8373.205080756888]],"type":"poly","props":{}},endPolygon:{"points":[[8975,8070.0961894323345],[8950,8026.794919243112]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:2.0943951023931953,endSliceAngle:4.1887902047863905,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[1],{type:[0,[],[1]],x:17898,y:16834,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:17742,y:17128,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:12700,radius:150,startAngle:-553.0657511359926,endAngle:-551.494954809196,startPolygon:{"points":[[950,6350],[1098.4162457902687,6328.2602211252615]],"type":"poly","props":{}},endPolygon:{"points":[[950,6350],[971.7397788744776,6498.416245790307]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-3.490658503988659,renderType:"circle",inView:false,r:300,startSliceAngle:-553.0657511359926,endSliceAngle:-551.494954809196,startSliceAngleRotateSpeed:-0.02908882086657216,endSliceAngleRotateSpeed:-0.02908882086657216,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:14900,w:600,h:300,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[19],{type:[1,[],[19]],x:1600,y:15200,w:600,h:2000,speedInc:0.4,inView:false,speedChangePermanent:false,speedMult:0.4,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:17800,w:16200,h:600,force:750,dir:{"x":750,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5312124849939976,})
C(1,[],[14],{type:[1,[],[14]],x:800,y:19200,w:4000,h:800,force:3200,dir:{"x":0,"y":3200},direction:"down",jumpHeight:180,maxForce:1000,variableJumpHeight:false,platformerFriction:0.962,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6914765906362546,jumpForce:43.5,jumpDecay:0.9501234567901233,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[19],{type:[1,[],[19]],x:800,y:19200,w:2100,h:800,speedInc:1.8,inView:false,speedChangePermanent:false,speedMult:1.8,})
C(1,[],[14],{type:[1,[],[14]],x:6200,y:19200,w:13000,h:800,force:3200,dir:{"x":0,"y":3200},direction:"down",jumpHeight:180,maxForce:1000,variableJumpHeight:false,platformerFriction:0.962,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6914765906362546,jumpForce:43.5,jumpDecay:0.9501234567901233,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[13],{type:[1,[],[13]],x:8400,y:19700,w:900,h:200,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[20],{h:200,w:950,y:19700,x:8400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[13],{type:[1,[],[13]],x:2200,y:19800,w:700,h:200,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:7950,y:19250,w:300,h:200,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[20],{h:300,w:400,y:19200,x:7900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[13],{type:[1,[],[13]],x:7950,y:19750,w:300,h:100,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[17],{type:[1,[],[17]],x:5100,y:19200,w:900,h:800,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[14],{type:[1,[],[14]],x:4800,y:19200,w:1200,h:800,force:1800,dir:{"x":0,"y":1800},direction:"down",jumpHeight:-1,maxForce:1000,variableJumpHeight:false,platformerFriction:0.962,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.3889555822328932,jumpForce:-0.24166666666666667,jumpDecay:0.9501234567901233,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[2],{type:[1,[],[2]],x:17300,y:19900,w:300,h:100,effect:50,inView:false,bounciness:33.333333333333336,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:17800,y:19900,w:300,h:100,effect:50,inView:false,bounciness:33.333333333333336,decay:0.5,})
C(1,[],[17],{type:[1,[],[17]],x:15600,y:19200,w:1100,h:200,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[10],{type:[1,[],[10]],x:12600,y:19800,w:200,h:200,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[13],{type:[1,[],[13]],x:3150,y:19200,w:300,h:700,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[1],{type:[1,[],[1]],x:6200,y:19900,w:5350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:13100,y:19800,radius:200,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[6650,9900],[6750,9900]],"type":"poly","props":{}},endPolygon:{"points":[[6550,10000],[6550,10100]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:13000,y:19400,radius:200,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[6400,9700],[6300,9700]],"type":"poly","props":{}},endPolygon:{"points":[[6500,9600],[6500,9500]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[17],{type:[1,[],[17]],x:0,y:12600,w:800,h:6600,time:0,maxTime:32,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:1920,})
C(4,[],[0],{type:[4,[],[0]],x:450,y:13250,radius:350,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[400,6625],[575,6625]],"type":"poly","props":{}},endPolygon:{"points":[[225,6800],[225.00000000000003,6975]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:700,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:19200,y:13200,w:800,h:6000,force:2022,dir:{"x":0,"y":2022},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4321488595438172,})
C(1,[],[15],{type:[1,[],[15]],x:19200,y:13200,w:800,h:6000,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(2,[],[12],{type:[2,[],[12]],points:[[19200,15700],[19400,15700],[19200,15900]],tpx:19950,tpy:15550,most:{"left":9600,"right":9700,"top":7850,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:19200,y:3600,w:400,h:300,spawn:{"x":9700,"y":1875},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[12],{type:[1,[],[12]],x:0,y:3800,w:200,h:200,tpx:400,tpy:4900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:300,y:6500,w:200,h:900,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[19],{type:[1,[],[19]],x:0,y:800,w:800,h:5700,speedInc:5,inView:false,speedChangePermanent:false,speedMult:5,})
C(1,[],[20],{x:0,y:0,w:800,h:800,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[24],{type:[1,[],[24]],x:-50,y:14500,w:900,h:4600,ir:0.01,or:0.36,o:1.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.001,outerR:0,outerG:0,outerB:0,outerSize:0.216,innerOpacity:0,outerOpacity:1,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:800,w:800,h:17900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:20000,y:14900,w:800,h:1450,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:19200,y:2700,w:400,h:300,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:5500,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:2200,w:800,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:18400,w:8800,h:800,canJump:true,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:550,y:17050,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:250,y:17050,r:100,renderType:"circleR",radius:50,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:19200,w:800,h:800,spawn:{"x":200,"y":9800},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{h:3600,w:100,y:8200,x:19200,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#d0a81b";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:3600,w:100,y:8200,x:19900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#d0a81b";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[0],{type:[1,[0],[0]],x:19300,y:8200,w:800,h:3600,points:[[9650,4100],[10000,4100]],speed:120,currentPoint:0.16857142857142857,alongWith:false,pointOn:{"x":9650,"y":4100},pointTo:{"x":10000,"y":4100},xv:120,yv:0,inView:false,path:[[19300,8200,4],[20000,8200,4]],})
C(1,[0],[0],{type:[1,[0],[0]],x:18400,y:8200,w:800,h:3600,points:[[9200,4100],[9550,4100]],speed:120,currentPoint:0.16857142857142857,alongWith:false,pointOn:{"x":9200,"y":4100},pointTo:{"x":9550,"y":4100},xv:120,yv:0,inView:false,path:[[18400,8200,4],[19100,8200,4]],})
C(1,[],[10],{type:[1,[],[10]],x:19100,y:8200,w:100,h:3600,maxStrength:1000,currentStrength:1000,time:100,timer:100,regenTime:0,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:20000,y:8200,w:100,h:3600,maxStrength:1000,currentStrength:1000,time:100,timer:100,regenTime:0,inView:false,healSpeed:1,})
C(1,[],[12],{type:[1,[],[12]],x:19400,y:1400,w:200,h:200,tpx:19400,tpy:2550,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:-250,w:1650,h:250,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:800,y:0,w:8600,h:800,force:1750,dir:{"x":-1750,"y":0},direction:"left",inView:true,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(1,[],[17],{x:900,y:200,w:450,h:100,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,
        sf:(o)=>{
            if(o.timeTrapTime <= 0){
                players[selfId].pos.x = 5200;
                players[selfId].pos.y = 350;
            }

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
    });C(1,[],[9],{type:[1,[],[9]],x:0,y:0,w:800,h:800,spawn:{"x":200,"y":200},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:19200,y:0,w:800,h:800,spawn:{"x":9800,"y":200},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
shared.morphsTriggered[3]=false;C(1,[],[3],{h:100,w:100,y:200,x:1050,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[3] === true) {
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
                shared.morphsTriggered[3] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[3] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(2,[],[1],{type:[2,[],[1]],points:[[3400,300],[3800,600],[3600,600]],most:{"left":1700,"right":1900,"top":150,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:13400,y:0,w:5800,h:800,force:1750,dir:{"x":1750,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15800,600],[15761.80339887499,658.7785252292473],[15661.80339887499,695.1056516295154],[15538.19660112501,695.1056516295154],[15438.19660112501,658.7785252292473],[15400,600],[15438.19660112501,541.2214747707527],[15538.19660112501,504.89434837048464],[15661.80339887499,504.89434837048464],[15761.80339887499,541.2214747707527]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(15600,600,200,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{type:[2,[],[1]],points:[[18700,500],[18900,600],[18700,700],[18200,600]],most:{"left":9100,"right":9450,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16700,450],[17300,600],[16550,600]],most:{"left":8275,"right":8650,"top":225,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:0,w:2500,h:800,force:1750,dir:{"x":1750,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:600,w:8400,h:200,canJump:true,inView:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18700,100],[18900,200],[18700,300],[18200,200]],most:{"left":9100,"right":9450,"top":50,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:-250,w:1400,h:250,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:800,w:18400,h:800,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:18400,w:8800,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:17000,w:15600,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:2200,w:6800,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11000,y:2200,w:7550,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:4000,w:800,h:12000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15200,y:4000,w:800,h:12000,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:15200,w:5500,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:15200,w:5500,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:13400,w:8400,h:800,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:5800,w:800,h:8400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:5800,w:800,h:8400,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:5800,w:3600,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:5800,w:3600,h:800,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:7400,w:800,h:5200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:7400,w:5200,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11800,y:7400,w:800,h:5200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:850,y:0,w:8550,h:200,canJump:true,inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,600],[9600,800],[9400,800]],most:{"left":4700,"right":4800,"top":300,"bottom":400},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,0],[9600,0],[9400,200]],most:{"left":4700,"right":4800,"top":0,"bottom":100},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10400,0],[10600,0],[10600,200]],most:{"left":5200,"right":5300,"top":0,"bottom":100},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,600],[10600,800],[10400,800]],most:{"left":5200,"right":5300,"top":300,"bottom":400},renderType:"poly",inView:true,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:19000,y:0,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19000,y:800,r:200,renderType:"circle",inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[11100,400],[11200,600],[11000,600]],most:{"left":5500,"right":5600,"top":200,"bottom":300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8800,200],[9000,200],[8900,400]],most:{"left":4400,"right":4500,"top":100,"bottom":200},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8350,350],[8500,600],[8200,600]],most:{"left":4100,"right":4250,"top":175,"bottom":300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7700,200],[7900,200],[7800,250]],most:{"left":3850,"right":3950,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7800,550],[7900,600],[7700,600]],most:{"left":3850,"right":3950,"top":275,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12100,400],[12200,600],[12000,600]],most:{"left":6000,"right":6100,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11500,200],[11700,200],[11600,400]],most:{"left":5750,"right":5850,"top":100,"bottom":200},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12700,y:200,w:100,h:100,points:[[6350,100],[6350,250],[6500,250],[6500,100]],speed:150,currentPoint:3.9916666666666667,collidable:true,pointOn:{"x":6500,"y":100},pointTo:{"x":6350,"y":100},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[12700,200,5],[12700,500,5],[13000,500,5],[13000,200,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12700,y:200,w:100,h:100,points:[[6350,100],[6350,250],[6500,250],[6500,100]],speed:150,currentPoint:1.9916666666666667,collidable:true,pointOn:{"x":6350,"y":250},pointTo:{"x":6500,"y":250},xv:150,yv:0,inView:false,path:[[12700,200,5],[12700,500,5],[13000,500,5],[13000,200,5]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13100,200],[13700,200],[13400,300]],most:{"left":6550,"right":6850,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13400,500],[13700,600],[13100,600]],most:{"left":6550,"right":6850,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:12900,y:400,r:100,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13900,300],[14200,400],[13900,500],[13600,400]],most:{"left":6800,"right":7100,"top":150,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14400,500],[14700,600],[14100,600]],most:{"left":7050,"right":7350,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14100,200],[14700,200],[14400,300]],most:{"left":7050,"right":7350,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:13900,y:500,w:0.002,h:100,tpx:13950,tpy:250,bgColor:"#d89002",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:13900,y:200,w:0.002,h:100,tpx:13950,tpy:550,bgColor:"#d89002",tileColor:"#fac203",changeColor:false,inView:false,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15200,400],[15161.80339887499,458.7785252292473],[15061.80339887499,495.10565162951536],[14938.19660112501,495.10565162951536],[14838.19660112501,458.7785252292473],[14800,400],[14838.19660112501,341.2214747707527],[14938.19660112501,304.89434837048464],[15061.80339887499,304.89434837048464],[15161.80339887499,341.22147477075265]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(15000,400,200,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[29],{type:[1,[],[29]],x:14350,y:350,w:100,h:100,time:8,inView:false,changeDeathTimerStateTo:true,deathTime:480,drainAmountWhileStandingOn:0,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15800,200],[15761.80339887499,258.7785252292473],[15661.80339887499,295.10565162951536],[15538.19660112501,295.10565162951536],[15438.19660112501,258.7785252292473],[15400,200],[15438.19660112501,141.2214747707527],[15538.19660112501,104.89434837048465],[15661.80339887499,104.89434837048464],[15761.80339887499,141.22147477075265]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(15600,200,200,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[0],{type:[1,[],[0]],x:10600,y:0,w:8400,h:200,canJump:true,inView:true,})
C(1,[],[29],{type:[1,[],[29]],x:16600,y:300,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[0],[1],{type:[1,[0],[1]],x:15900,y:200,w:300,h:100,points:[[7950,100],[7950,250]],speed:120,currentPoint:0.3933333333333333,collidable:true,pointOn:{"x":7950,"y":100},pointTo:{"x":7950,"y":250},xv:7.34788079488412e-15,yv:120,inView:false,path:[[15900,200,4],[15900,500,4]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,550],[7700,600],[7500,600]],most:{"left":3750,"right":3850,"top":275,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7400,550],[7500,600],[7300,600]],most:{"left":3650,"right":3750,"top":275,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,200],[7700,200],[7600,250]],most:{"left":3750,"right":3850,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,200],[7500,200],[7400,250]],most:{"left":3650,"right":3750,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6400,200],[6800,200],[6600,400]],most:{"left":3200,"right":3400,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,200],[6400,200],[6250,400]],most:{"left":3050,"right":3200,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:5400,y:200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5900,y:500,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[5700,300],[5900,300],[6200,600],[6000,600]],most:{"left":2850,"right":3100,"top":150,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
shared.morphsTriggered[1]=false;C(1,[],[3],{h:100,w:100,y:300,x:5150,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[1] === true) {
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
                shared.morphsTriggered[1] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[1] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(2,[],[0],{type:[2,[],[0]],points:[[5150,150],[5350,150],[5700,500],[5500,500]],most:{"left":2575,"right":2850,"top":75,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
shared.morphsTriggered[1]=false;var x1=5050;C(1,[],[0],{y:500,x:5050,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x1, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[1] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[1] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[1] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[1],[1],{type:[1,[1],[1]],x:3900,y:-50,w:1000,h:100,angle:-6910.125,rotateSpeed:-0.012878787878787878,pivotX:4400,pivotY:0,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.24689052802225,unSim:4.433333333333343,inView:false,initialRotation:-120.60443297437317,boundPlayer:true,})
shared.morphsTriggered[2]=false;C(1,[],[3],{h:100,w:100,y:300,x:4650,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[2] === true) {
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
                shared.morphsTriggered[2] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[2]=false;var x2=4550;C(1,[],[0],{y:500,x:4550,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x2, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[2] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[2] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(2,[],[1],{type:[2,[],[1]],points:[[2200,200],[3000,200],[2700,500],[2500,500]],most:{"left":1100,"right":1500,"top":100,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1750,300],[1950,300],[2250,600],[1450,600]],most:{"left":725,"right":1125,"top":150,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1300,200],[1500,200],[1200,500],[1000,500]],most:{"left":500,"right":750,"top":100,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
shared.morphsTriggered[3]=false;var x3=800;C(1,[],[0],{y:500,x:800,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x3, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[3] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[3] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[3] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[],[0],{type:[1,[],[0]],x:800,y:600,w:8600,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:0,w:100,h:500,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[300,0],[800,0],[800,500]],most:{"left":150,"right":400,"top":0,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[900,200],[1050,200],[900,350]],most:{"left":450,"right":525,"top":100,"bottom":175},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[12400,200],[12500,200],[12450,300]],most:{"left":6200,"right":6250,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12450,500],[12500,600],[12400,600]],most:{"left":6200,"right":6250,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16550,200],[17300,200],[17150,350]],most:{"left":8275,"right":8650,"top":100,"bottom":175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17900,300],[18100,400],[17900,500],[17400,400]],most:{"left":8700,"right":9050,"top":150,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19200,300],[19200,500],[19000,400]],most:{"left":9500,"right":9600,"top":150,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4600,200],[4800,200],[4700,300]],most:{"left":2300,"right":2400,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,200],[4600,200],[4500,300]],most:{"left":2200,"right":2300,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4500,200],[4700,200],[4600,300]],most:{"left":2250,"right":2350,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4100,200],[4300,200],[4500,500]],most:{"left":2050,"right":2250,"top":100,"bottom":250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4200,200],[4400,200],[4700,500],[4500,500]],most:{"left":2100,"right":2350,"top":100,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3200,300],[3400,300],[3700,600],[2900,600]],most:{"left":1450,"right":1850,"top":150,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,500],[7400,600],[7200,600]],most:{"left":3600,"right":3700,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,500],[7600,600],[7400,600]],most:{"left":3700,"right":3800,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7700,500],[7800,600],[7600,600]],most:{"left":3800,"right":3900,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7900,500],[8000,600],[7800,600]],most:{"left":3900,"right":4000,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,400],[7300,600],[6900,600]],most:{"left":3450,"right":3650,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7200,200],[7400,200],[7300,300]],most:{"left":3600,"right":3700,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7400,200],[7600,200],[7500,300]],most:{"left":3700,"right":3800,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,200],[7800,200],[7700,300]],most:{"left":3800,"right":3900,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7800,200],[8000,200],[7900,300]],most:{"left":3900,"right":4000,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8350,350],[8450,600],[8250,600]],most:{"left":4125,"right":4225,"top":175,"bottom":300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8850,200],[8950,200],[8900,400]],most:{"left":4425,"right":4475,"top":100,"bottom":200},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,250],[6700,250],[6600,350]],most:{"left":3250,"right":3350,"top":125,"bottom":175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,450],[7200,550],[7000,550]],most:{"left":3500,"right":3600,"top":225,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,200],[4600,200],[4500,250]],most:{"left":2200,"right":2300,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4600,200],[4800,200],[4700,250]],most:{"left":2300,"right":2400,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4500,200],[4700,200],[4600,250]],most:{"left":2250,"right":2350,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4650,150],[4850,150],[5200,500],[5000,500]],most:{"left":2325,"right":2600,"top":75,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:-650,w:1300,h:850,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3950,350],[4050,400],[3950,450],[3850,400]],most:{"left":1925,"right":2025,"top":175,"bottom":225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[11100,500],[11200,600],[11000,600]],most:{"left":5500,"right":5600,"top":250,"bottom":300},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12100,500],[12200,600],[12000,600]],most:{"left":6000,"right":6100,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11500,200],[11700,200],[11600,300]],most:{"left":5750,"right":5850,"top":100,"bottom":150},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12450,550],[12500,600],[12400,600]],most:{"left":6200,"right":6250,"top":275,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12400,200],[12500,200],[12450,250]],most:{"left":6200,"right":6250,"top":100,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:11800,w:800,h:800,spawn:{"x":200,"y":6100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:19200,y:7400,w:800,h:800,spawn:{"x":9800,"y":3900},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:19200,y:11800,w:800,h:800,spawn:{"x":9800,"y":6100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
var timer10149 = 2.0083333333337405; var state10149 =true; var x10149 = 19200; 
    C(1,[],[0],{h:200,w:200,y:800,x:19200,sf:(e)=>{
            timer10149 -= 1 / 60;
            if(timer10149 < 0){
                state10149 = !state10149;
                if(state10149 === true){
                    // on
                    timer10149 += 3.5;
                    e.pos.x = x10149;
                } else {
                    // off
                    timer10149 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10149) {
                if (timer10149 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10149 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10149 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10149 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10149, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10150 = 3.0083333333337383; var state10150 =true; var x10150 = 19200; 
    C(1,[],[0],{h:200,w:200,y:1000,x:19200,sf:(e)=>{
            timer10150 -= 1 / 60;
            if(timer10150 < 0){
                state10150 = !state10150;
                if(state10150 === true){
                    // on
                    timer10150 += 3.5;
                    e.pos.x = x10150;
                } else {
                    // off
                    timer10150 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10150) {
                if (timer10150 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10150 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10150 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10150 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10150, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10151 = 0.5083333333337408; var state10151 =false; var x10151 = 19400; 
    C(1,[],[0],{h:200,w:200,y:1000,x:-1000000000,sf:(e)=>{
            timer10151 -= 1 / 60;
            if(timer10151 < 0){
                state10151 = !state10151;
                if(state10151 === true){
                    // on
                    timer10151 += 3.5;
                    e.pos.x = x10151;
                } else {
                    // off
                    timer10151 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10151) {
                if (timer10151 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10151 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10151 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10151 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10151, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10152 = 0.008333333333740726; var state10152 =true; var x10152 = 19600; 
    C(1,[],[0],{h:200,w:200,y:1000,x:19600,sf:(e)=>{
            timer10152 -= 1 / 60;
            if(timer10152 < 0){
                state10152 = !state10152;
                if(state10152 === true){
                    // on
                    timer10152 += 3.5;
                    e.pos.x = x10152;
                } else {
                    // off
                    timer10152 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10152) {
                if (timer10152 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10152 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10152 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10152 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10152, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10153 = 1.0083333333337432; var state10153 =true; var x10153 = 19800; 
    C(1,[],[0],{h:200,w:200,y:1000,x:19800,sf:(e)=>{
            timer10153 -= 1 / 60;
            if(timer10153 < 0){
                state10153 = !state10153;
                if(state10153 === true){
                    // on
                    timer10153 += 3.5;
                    e.pos.x = x10153;
                } else {
                    // off
                    timer10153 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10153) {
                if (timer10153 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10153 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10153 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10153 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10153, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10154 = 2.0083333333337405; var state10154 =true; var x10154 = 19800; 
    C(1,[],[0],{h:200,w:200,y:1200,x:19800,sf:(e)=>{
            timer10154 -= 1 / 60;
            if(timer10154 < 0){
                state10154 = !state10154;
                if(state10154 === true){
                    // on
                    timer10154 += 3.5;
                    e.pos.x = x10154;
                } else {
                    // off
                    timer10154 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10154) {
                if (timer10154 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10154 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10154 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10154 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10154, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10155 = 3.0083333333337383; var state10155 =true; var x10155 = 19800; 
    C(1,[],[0],{h:200,w:200,y:1400,x:19800,sf:(e)=>{
            timer10155 -= 1 / 60;
            if(timer10155 < 0){
                state10155 = !state10155;
                if(state10155 === true){
                    // on
                    timer10155 += 3.5;
                    e.pos.x = x10155;
                } else {
                    // off
                    timer10155 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10155) {
                if (timer10155 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10155 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10155 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10155 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10155, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10156 = 0.5083333333337408; var state10156 =false; var x10156 = 19800; 
    C(1,[],[0],{h:200,w:200,y:1600,x:-1000000000,sf:(e)=>{
            timer10156 -= 1 / 60;
            if(timer10156 < 0){
                state10156 = !state10156;
                if(state10156 === true){
                    // on
                    timer10156 += 3.5;
                    e.pos.x = x10156;
                } else {
                    // off
                    timer10156 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10156) {
                if (timer10156 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10156 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10156 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10156 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10156, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10157 = 0.008333333333740726; var state10157 =true; var x10157 = 19800; 
    C(1,[],[0],{h:200,w:200,y:1800,x:19800,sf:(e)=>{
            timer10157 -= 1 / 60;
            if(timer10157 < 0){
                state10157 = !state10157;
                if(state10157 === true){
                    // on
                    timer10157 += 3.5;
                    e.pos.x = x10157;
                } else {
                    // off
                    timer10157 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10157) {
                if (timer10157 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10157 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10157 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10157 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10157, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10158 = 1.0083333333337432; var state10158 =true; var x10158 = 19600; 
    C(1,[],[0],{h:200,w:200,y:1800,x:19600,sf:(e)=>{
            timer10158 -= 1 / 60;
            if(timer10158 < 0){
                state10158 = !state10158;
                if(state10158 === true){
                    // on
                    timer10158 += 3.5;
                    e.pos.x = x10158;
                } else {
                    // off
                    timer10158 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10158) {
                if (timer10158 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10158 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10158 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10158 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10158, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10159 = 2.0083333333337405; var state10159 =true; var x10159 = 19400; 
    C(1,[],[0],{h:200,w:200,y:1800,x:19400,sf:(e)=>{
            timer10159 -= 1 / 60;
            if(timer10159 < 0){
                state10159 = !state10159;
                if(state10159 === true){
                    // on
                    timer10159 += 3.5;
                    e.pos.x = x10159;
                } else {
                    // off
                    timer10159 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10159) {
                if (timer10159 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10159 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10159 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10159 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10159, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10160 = 3.0083333333337383; var state10160 =true; var x10160 = 19200; 
    C(1,[],[0],{h:200,w:200,y:1800,x:19200,sf:(e)=>{
            timer10160 -= 1 / 60;
            if(timer10160 < 0){
                state10160 = !state10160;
                if(state10160 === true){
                    // on
                    timer10160 += 3.5;
                    e.pos.x = x10160;
                } else {
                    // off
                    timer10160 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10160) {
                if (timer10160 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10160 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10160 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10160 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10160, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10161 = 0.5083333333337408; var state10161 =false; var x10161 = 19200; 
    C(1,[],[0],{h:200,w:200,y:1600,x:-1000000000,sf:(e)=>{
            timer10161 -= 1 / 60;
            if(timer10161 < 0){
                state10161 = !state10161;
                if(state10161 === true){
                    // on
                    timer10161 += 3.5;
                    e.pos.x = x10161;
                } else {
                    // off
                    timer10161 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10161) {
                if (timer10161 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10161 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10161 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10161 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10161, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10162 = 0.008333333333740726; var state10162 =true; var x10162 = 19200; 
    C(1,[],[0],{h:200,w:200,y:1400,x:19200,sf:(e)=>{
            timer10162 -= 1 / 60;
            if(timer10162 < 0){
                state10162 = !state10162;
                if(state10162 === true){
                    // on
                    timer10162 += 3.5;
                    e.pos.x = x10162;
                } else {
                    // off
                    timer10162 += 1.5;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10162) {
                if (timer10162 < 0.2 && 3.5 > 0.2) {
                    ctx.globalAlpha = timer10162 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10162 < 0.2 && 1.5 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10162 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10162, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:19600,y:1400,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:2000,w:800,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19400,y:1600,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:1200,w:600,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19400,y:800,w:600,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[6],{type:[1,[],[6]],x:8400,y:8400,w:800,h:3200,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:9850,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9650,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9450,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9250,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9050,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8850,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8650,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8450,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11450,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11250,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11050,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10850,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10650,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10450,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10250,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10050,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:9250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:9450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:9650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:9050,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:8650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:8850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:8450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:8250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:9850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:10050,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:10450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11650,y:10650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:10650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:10450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:10050,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:9850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:9650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:9450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:9250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:9050,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:8850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:8650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:8250,y:8450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:8200,y:11865,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:8500,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8200,y:12265,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:8500,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:11865,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:9100,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:12265,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:9100,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9400,y:11865,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:9700,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9400,y:12265,w:600,h:70,angle:-27640.5,rotateSpeed:-0.051515151515151514,pivotX:9700,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:-482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11200,y:11865,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:11500,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11200,y:12265,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:11500,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10600,y:12265,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:10900,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10600,y:11865,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:10900,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10000,y:11865,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:10300,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10000,y:12265,w:600,h:70,angle:27640.5,rotateSpeed:0.051515151515151514,pivotX:10300,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:151.01738310538957,unSim:4.433333333333343,inView:false,initialRotation:482.4177318974927,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:8200,y:12600,w:3600,h:800,force:2300,dir:{"x":0,"y":-2300},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:12600,w:800,h:800,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:7400,y:12600,w:800,h:800,force:4000,dir:{"x":4000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[10],{type:[1,[],[10]],x:8200,y:10800,w:200,h:800,maxStrength:500,currentStrength:500,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:11600,y:10800,w:200,h:800,maxStrength:500,currentStrength:500,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:8200,w:100,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19900,y:8200,w:100,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:19300,y:9900,w:600,h:100,maxStrength:20,currentStrength:20,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:9400,w:100,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19900,y:9400,w:100,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,10100],[19750,10250],[19600,10400],[19450,10250]],most:{"left":9725,"right":9875,"top":5050,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19200,10600],[19400,10800],[19450,10950],[19400,11100],[19200,11300]],most:{"left":9600,"right":9725,"top":5300,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,10600],[20000,11300],[19800,11100],[19750,10950],[19800,10800]],most:{"left":9875,"right":10000,"top":5300,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,11300],[19800,11500],[19800,11800],[19400,11800],[19400,11500]],most:{"left":9700,"right":9900,"top":5650,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:19200,y:11500,w:100,h:300,points:[[9600,5750],[9950,5750]],speed:120,currentPoint:1.1685714285714286,collidable:true,pointOn:{"x":9950,"y":5750},pointTo:{"x":9600,"y":5750},xv:-120,yv:1.469576158976824e-14,inView:false,path:[[19200,11500,4],[19900,11500,4]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,10250],[19750,10400],[19600,10550],[19450,10400]],most:{"left":9725,"right":9875,"top":5125,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,10250],[19675,10325],[19600,10400],[19525,10325]],most:{"left":9762.5,"right":9837.5,"top":5125,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:12600,w:300,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:12600,w:300,h:600,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:19200,y:19200,w:800,h:800,spawn:{"x":9800,"y":9800},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:19500,y:12600,w:200,h:600,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(0,[],[1],{type:[0,[],[1]],x:19300,y:16750,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19750,y:17200,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19400,y:17750,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19850,y:16400,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:20000,y:17050,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:20000,y:17350,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19250,y:17600,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19250,y:17950,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19100,y:16900,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19150,y:16500,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19900,y:16200,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:20150,y:16350,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[20],{x:19250,y:11850,w:700,h:700,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[27],{type:[1,[],[27]],x:0,y:12600,w:800,h:100,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[27],{type:[1,[],[27]],x:0,y:19100,w:800,h:100,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:12600,w:800,h:100,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:19100,w:800,h:100,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(0,[],[0],{type:[0,[],[0]],x:400,y:13150,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:450,y:13800,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:12950,w:500,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:450,y:13600,w:350,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:14250,w:950,h:450,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:550,y:14000,w:250,h:250,tpx:400,tpy:14750,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[-50,14650],[350,14650],[-50,14950]],most:{"left":-25,"right":175,"top":7325,"bottom":7475},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[450,14650],[850,14650],[850,14950]],most:{"left":225,"right":425,"top":7325,"bottom":7475},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[400,14900],[600,15150],[400,15400],[200,15150]],most:{"left":100,"right":300,"top":7450,"bottom":7700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,16200],[300,16350],[200,16500],[100,16350]],most:{"left":50,"right":150,"top":8100,"bottom":8250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[600,16200],[700,16350],[600,16500],[500,16350]],most:{"left":250,"right":350,"top":8100,"bottom":8250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[400,16450],[500,16600],[400,16750],[300,16600]],most:{"left":150,"right":250,"top":8225,"bottom":8375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,16450],[100,16600],[0,16750],[-100,16600]],most:{"left":-50,"right":50,"top":8225,"bottom":8375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[800,16450],[900,16600],[800,16750],[700,16600]],most:{"left":350,"right":450,"top":8225,"bottom":8375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[600,16700],[700,16850],[600,17000],[500,16850]],most:{"left":250,"right":350,"top":8350,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:17100,w:800,h:2000,canCollide:false,inView:false,boundPlayer:false,})
C(0,[],[11],{type:[0,[],[11]],x:300,y:17200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:350,y:17350,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:650,y:17650,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:450,y:17950,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:150,y:18250,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:150,y:18950,r:100,renderType:"circleR",radius:50,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:18100,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:17500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17400,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:17500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:200,y:17200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:200,y:17300,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:17800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17600,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17700,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:300,y:18000,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:200,y:18000,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:17800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:17500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:17900,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:18000,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:17800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:200,y:18100,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:18200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:300,y:18200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:150,y:18600,r:100,renderType:"circleR",radius:50,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:100,y:18200,w:100,h:100,points:[[50,9100],[50,9450]],speed:100,currentPoint:1.1404761905090344,pointOn:{"x":50,"y":9450},pointTo:{"x":50,"y":9100},xv:6.123233995736766e-15,yv:-100,inView:false,path:[[100,18200,3.3333333333333335],[100,18900,3.3333333333333335]],})
C(1,[0],[11],{type:[1,[0],[11]],x:100,y:18200,w:100,h:100,points:[[50,9100],[50,9450]],speed:100,currentPoint:0.14047619050903448,pointOn:{"x":50,"y":9100},pointTo:{"x":50,"y":9450},xv:6.123233995736766e-15,yv:100,inView:false,path:[[100,18200,3.3333333333333335],[100,18900,3.3333333333333335]],})
C(0,[],[11],{type:[0,[],[11]],x:500,y:18500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:18600,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:18700,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:18900,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:18800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:18700,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:19000,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:18800,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:18600,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:18400,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:18300,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:18500,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:18900,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:700,y:19000,r:50,renderType:"circleR",radius:25,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,16700],[300,16850],[200,17000],[100,16850]],most:{"left":50,"right":150,"top":8350,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:600,y:17200,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:500,y:17300,r:50,renderType:"circleR",radius:25,inView:false,})
C(0,[],[11],{type:[0,[],[11]],x:400,y:17200,r:50,renderType:"circleR",radius:25,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[19850,18050],[20000,18050],[20000,18400],[20000,19200],[19300,18400],[19300,18300]],most:{"left":9650,"right":10000,"top":9025,"bottom":9600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19200,18450],[19850,19200],[19200,19200]],most:{"left":9600,"right":9925,"top":9225,"bottom":9600},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:20050,y:17950,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:19850,y:18200,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:2350,w:450,h:350,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:19600,y:2700,w:400,h:300,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:3000,w:400,h:300,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:19600,y:3300,w:400,h:300,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[17],{type:[1,[],[17]],x:19200,y:3300,w:400,h:300,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:3600,w:450,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:4700,w:900,h:800,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:19500,y:4200,w:200,h:200,tpx:19900,tpy:5600,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:19600,y:3300,w:400,h:300,maxStrength:140,currentStrength:140,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:19200,y:3300,w:400,h:300,maxStrength:140,currentStrength:140,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:19600,y:2700,w:400,h:300,maxStrength:140,currentStrength:140,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:19200,y:2700,w:400,h:300,maxStrength:140,currentStrength:140,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[17],{type:[1,[],[17]],x:19600,y:3000,w:400,h:300,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[10],{type:[1,[],[10]],x:19600,y:3000,w:400,h:300,maxStrength:140,currentStrength:140,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[0],[1],{type:[1,[0],[1]],x:19200,y:2700,w:200,h:200,points:[[9600,1350],[9600,1400],[9800,1400],[9800,1650],[9600,1650],[9600,1700],[9900,1700],[9900,1350]],speed:125,currentPoint:1.2447916666357104,collidable:false,pointOn:{"x":9600,"y":1400},pointTo:{"x":9800,"y":1400},xv:125,yv:0,inView:false,path:[[19200,2700,4.166666666666667],[19200,2800,4.166666666666667],[19600,2800,4.166666666666667],[19600,3300,4.166666666666667],[19200,3300,4.166666666666667],[19200,3400,4.166666666666667],[19800,3400,4.166666666666667],[19800,2700,4.166666666666667]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:19200,y:2700,w:200,h:200,points:[[9600,1350],[9900,1350],[9900,1700],[9600,1700],[9600,1650],[9800,1650],[9800,1400],[9600,1400]],speed:125,currentPoint:4.24479166663571,collidable:false,pointOn:{"x":9600,"y":1650},pointTo:{"x":9800,"y":1650},xv:125,yv:0,inView:false,path:[[19200,2700,4.166666666666667],[19800,2700,4.166666666666667],[19800,3400,4.166666666666667],[19200,3400,4.166666666666667],[19200,3300,4.166666666666667],[19600,3300,4.166666666666667],[19600,2800,4.166666666666667],[19200,2800,4.166666666666667]],boundPlayer:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[19200,14500],[19350,15000],[19200,15200]],most:{"left":9600,"right":9675,"top":7250,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19700,13200],[20000,13200],[20000,13900]],most:{"left":9850,"right":10000,"top":6600,"bottom":6950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19200,13200],[19500,13200],[19200,13900]],most:{"left":9600,"right":9750,"top":6600,"bottom":6950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,13700],[19750,14050],[19800,14400],[19600,14800],[19400,14400],[19450,14050]],most:{"left":9700,"right":9900,"top":6850,"bottom":7400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,15100],[20000,15300],[19200,16100],[19200,15900]],most:{"left":9600,"right":10000,"top":7550,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,14500],[20000,15200],[19850,15000]],most:{"left":9925,"right":10000,"top":7250,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:1400,w:200,h:200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:7400,w:800,h:800,spawn:{"x":200,"y":3900},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:1000,w:250,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:800,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:550,y:800,w:300,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:800,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:700,y:1100,r:70,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:600,y:1400,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:2000,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:2400,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:2200,w:250,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:-6.123233995736766e-15,y:2400,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:0,y:1800,w:200,h:200,tpx:100,tpy:2700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:1800,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:1600,w:250,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:1600,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:6500,w:350,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:6500,w:400,h:900,canJump:true,inView:false,})
var timer10163 = 0.4083333333335682; var state10163 =false; var x10163 = 400; 
    C(1,[],[0],{h:200,w:200,y:2600,x:-1000000000,sf:(e)=>{
            timer10163 -= 1 / 60;
            if(timer10163 < 0){
                state10163 = !state10163;
                if(state10163 === true){
                    // on
                    timer10163 += 1.2;
                    e.pos.x = x10163;
                } else {
                    // off
                    timer10163 += 1.2;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10163) {
                if (timer10163 < 0.2 && 1.2 > 0.2) {
                    ctx.globalAlpha = timer10163 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10163 < 0.2 && 1.2 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10163 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10163, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[11],{type:[1,[0],[11]],x:400,y:2800,w:200,h:200,points:[[200,1400],[200,1600]],speed:150,currentPoint:0.49375,pointOn:{"x":200,"y":1400},pointTo:{"x":200,"y":1600},xv:9.184850993605149e-15,yv:150,inView:false,path:[[400,2800,5],[400,3200,5]],})
C(1,[],[1],{type:[1,[],[1]],x:600,y:2200,w:200,h:1200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:3000,w:200,h:200,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:200,y:3200,w:200,h:200,points:[[100,1600],[100,1800]],speed:150,currentPoint:0.49375,pointOn:{"x":100,"y":1600},pointTo:{"x":100,"y":1800},xv:9.184850993605149e-15,yv:150,inView:false,path:[[200,3200,5],[200,3600,5]],})
C(1,[],[1],{type:[1,[],[1]],x:-6.123233995736767e-15,y:2800,w:200,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:600,y:3600,w:200,h:200,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:400,y:3400,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:400,y:4000,w:200,h:200,maxStrength:14,currentStrength:7,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:400,y:4400,w:200,h:200,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:600,y:3800,w:200,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:3800,w:400,h:800,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:-6.123233995736766e-15,y:4400,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:4600,w:600,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:3800,w:200,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:600,y:5200,w:200,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:-3.061616997868383e-15,y:5700,w:200,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:-3.061616997868383e-15,y:5200,w:200,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:6000,w:400,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:600,y:5700,w:200,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:5500,w:400,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:5000,w:400,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:0,y:6300,w:200,h:200,points:[[0,3150],[300,3150]],speed:250,currentPoint:1.6597222222222476,collidable:false,pointOn:{"x":300,"y":3150},pointTo:{"x":0,"y":3150},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[0,6300,8.333333333333334],[600,6300,8.333333333333334]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:0,y:5800,w:200,h:200,points:[[0,2900],[300,2900]],speed:250,currentPoint:0.6597222222222477,collidable:true,pointOn:{"x":0,"y":2900},pointTo:{"x":300,"y":2900},xv:250,yv:0,inView:false,path:[[0,5800,8.333333333333334],[600,5800,8.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:0,y:5300,w:200,h:200,points:[[0,2650],[300,2650]],speed:250,currentPoint:1.6597222222222476,collidable:true,pointOn:{"x":300,"y":2650},pointTo:{"x":0,"y":2650},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[0,5300,8.333333333333334],[600,5300,8.333333333333334]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:0,y:3800,w:200,h:200,tpx:100,tpy:3900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[24],{type:[1,[],[24]],x:0,y:8200,w:800,h:3600,ir:0.25,or:0.75,o:0.6,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.44999999999999996,innerOpacity:0,outerOpacity:1,})
C(0,[],[0],{type:[0,[],[0]],x:19200,y:12600,r:300,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20000,y:12600,r:300,renderType:"circle",inView:false,})
C(1,[],[20],{h:800,w:800,y:15400,x:0,hex:'#FFFFFF',alpha:1,
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
var minX10165, minY10165, maxX10165, maxY10165;
    minX10165 = -100;minY10165 = 19100;maxX10165 = 900;maxY10165 = 20100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10165) && (player.pos.x) < md(maxX10165) && (player.pos.y) > md(minY10165) && (player.pos.y) < md(maxY10165)) {
            colors.background="#fac203"; colors.tile="#a67c00";
        }
    },});
C(4,[],[0],{type:[4,[],[0]],x:450,y:13800,radius:375,startAngle:1.5707963267948966,endAngle:4.625122517784973,startPolygon:{"points":[[225,7125],[225.00000000000003,7275]],"type":"poly","props":{}},endPolygon:{"points":[[205.3899578817769,6675.856192929357],[192.31659646962817,6526.426988215595]],"type":"poly","props":{}},innerRadius:450,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:750,startSliceAngle:1.5707963267948966,endSliceAngle:4.625122517784973,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:300,y:12650,radius:350,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[150,6475],[150.00000000000003,6675]],"type":"poly","props":{}},endPolygon:{"points":[[0,6325],[-200,6325]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:700,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
var minX10166, minY10166, maxX10166, maxY10166;
    minX10166 = -50;minY10166 = 11700;maxX10166 = 850;maxY10166 = 12650;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10166) && (player.pos.x) < md(maxX10166) && (player.pos.y) > md(minY10166) && (player.pos.y) < md(maxY10166)) {
            colors.background="#fac203"; colors.tile="#a67c00";
        }
    },});
C(2,[],[0],{type:[2,[],[0]],points:[[18800,19800],[19200,20000],[18400,20000]],most:{"left":9200,"right":9600,"top":9900,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,19200],[19200,19200],[18800,19400]],most:{"left":9200,"right":9600,"top":9600,"bottom":9700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{x:0,y:0,points:[[18900,19600],[18880.901699437494,19629.389262614623],[18830.901699437494,19647.552825814757],[18769.098300562506,19647.552825814757],[18719.098300562506,19629.389262614623],[18700,19600],[18719.098300562506,19570.610737385377],[18769.098300562506,19552.447174185243],[18830.901699437494,19552.447174185243],[18880.901699437494,19570.610737385377]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(18800,19600,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(1,[],[0],{type:[1,[],[0]],x:18100,y:19400,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17600,y:19600,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17100,y:19500,w:200,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:15800,y:19900,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17200,19600],[17300,19700],[17300,20000],[17100,20000],[17100,19700]],most:{"left":8550,"right":8650,"top":9800,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18200,19500],[18300,19600],[18300,20000],[18100,20000],[18100,19600]],most:{"left":9050,"right":9150,"top":9750,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:15800,y:19800,w:200,h:100,points:[[7900,9900],[8450,9900]],speed:180,currentPoint:1.7063636363636365,pointOn:{"x":8450,"y":9900},pointTo:{"x":7900,"y":9900},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[15800,19800,6],[16900,19800,6]],})
C(1,[0],[11],{type:[1,[0],[11]],x:15800,y:19800,w:200,h:100,points:[[7900,9900],[8450,9900]],speed:180,currentPoint:0.7063636363636364,pointOn:{"x":7900,"y":9900},pointTo:{"x":8450,"y":9900},xv:180,yv:0,inView:false,path:[[15800,19800,6],[16900,19800,6]],})
C(1,[],[1],{type:[1,[],[1]],x:14400,y:19800,w:1200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14550,19650],[14700,19800],[14400,19800]],most:{"left":7200,"right":7350,"top":9825,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15150,19650],[15300,19800],[15000,19800]],most:{"left":7500,"right":7650,"top":9825,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[14850,19650],[15000,19800],[14700,19800]],most:{"left":7350,"right":7500,"top":9825,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[15450,19650],[15600,19800],[15300,19800]],most:{"left":7650,"right":7800,"top":9825,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:19200,w:200,h:400,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13300,y:19300,w:200,h:750,canJump:false,inView:false,})
var timer10167 = 0.008333333333701646; var state10167 =true; var x10167 = 13500; 
    C(1,[],[0],{h:100,w:300,y:19900,x:13500,sf:(e)=>{
            timer10167 -= 1 / 60;
            if(timer10167 < 0){
                state10167 = !state10167;
                if(state10167 === true){
                    // on
                    timer10167 += 2;
                    e.pos.x = x10167;
                } else {
                    // off
                    timer10167 += 2;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10167) {
                if (timer10167 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = timer10167 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10167 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10167 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10167, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10168 = 0.008333333333701646; var state10168 =false; var x10168 = 13600; 
    C(1,[],[0],{h:100,w:300,y:19700,x:-1000000000,sf:(e)=>{
            timer10168 -= 1 / 60;
            if(timer10168 < 0){
                state10168 = !state10168;
                if(state10168 === true){
                    // on
                    timer10168 += 2;
                    e.pos.x = x10168;
                } else {
                    // off
                    timer10168 += 2;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10168) {
                if (timer10168 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = timer10168 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10168 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10168 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10168, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10169 = 0.008333333333701646; var state10169 =true; var x10169 = 13500; 
    C(1,[],[0],{h:100,w:300,y:19500,x:13500,sf:(e)=>{
            timer10169 -= 1 / 60;
            if(timer10169 < 0){
                state10169 = !state10169;
                if(state10169 === true){
                    // on
                    timer10169 += 2;
                    e.pos.x = x10169;
                } else {
                    // off
                    timer10169 += 2;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10169) {
                if (timer10169 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = timer10169 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10169 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10169 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10169, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10170 = 0.008333333333701646; var state10170 =false; var x10170 = 13600; 
    C(1,[],[0],{h:100,w:300,y:19300,x:-1000000000,sf:(e)=>{
            timer10170 -= 1 / 60;
            if(timer10170 < 0){
                state10170 = !state10170;
                if(state10170 === true){
                    // on
                    timer10170 += 2;
                    e.pos.x = x10170;
                } else {
                    // off
                    timer10170 += 2;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10170) {
                if (timer10170 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = timer10170 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10170 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10170 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10170, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:12600,y:19200,w:200,h:600,canJump:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[10000,19400],[11200,20000],[8800,20000]],most:{"left":4400,"right":5600,"top":9700,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,19200],[9600,19200],[8800,19600]],most:{"left":4000,"right":4800,"top":9600,"bottom":9800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10400,19200],[12000,19200],[11200,19600]],most:{"left":5200,"right":6000,"top":9600,"bottom":9800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12100,19400],[12100,20000],[11200,20000]],most:{"left":5600,"right":6050,"top":9700,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:12100,y:19900,w:100,h:100,points:[[6050,9950],[6250,9950]],speed:150,currentPoint:0.49375,alongWith:false,pointOn:{"x":6050,"y":9950},pointTo:{"x":6250,"y":9950},xv:150,yv:0,inView:false,path:[[12100,19900,5],[12500,19900,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:12100,y:19700,w:100,h:100,points:[[6050,9850],[6250,9850]],speed:150,currentPoint:1.49375,alongWith:false,pointOn:{"x":6250,"y":9850},pointTo:{"x":6050,"y":9850},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[12100,19700,5],[12500,19700,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:12100,y:19500,w:100,h:100,points:[[6050,9750],[6250,9750]],speed:150,currentPoint:0.49375,alongWith:false,pointOn:{"x":6050,"y":9750},pointTo:{"x":6250,"y":9750},xv:150,yv:0,inView:false,path:[[12100,19500,5],[12500,19500,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:12100,y:19900,w:100,h:100,points:[[6050,9950],[6250,9950]],speed:150,currentPoint:0.49375,alongWith:false,pointOn:{"x":6050,"y":9950},pointTo:{"x":6250,"y":9950},xv:150,yv:0,inView:false,path:[[12100,19900,5],[12500,19900,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:12100,y:19300,w:100,h:100,points:[[6050,9650],[6250,9650]],speed:150,currentPoint:1.49375,alongWith:false,pointOn:{"x":6250,"y":9650},pointTo:{"x":6050,"y":9650},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[12100,19300,5],[12500,19300,5]],})
C(1,[0],[1],{type:[1,[0],[1]],x:12300,y:19200,w:100,h:100,points:[[6150,9600],[6150,9950]],speed:262.5,currentPoint:0.49375,collidable:true,pointOn:{"x":6150,"y":9600},pointTo:{"x":6150,"y":9950},xv:1.607348923880901e-14,yv:262.5,inView:false,path:[[12300,19200,8.75],[12300,19900,8.75]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12300,y:19200,w:100,h:100,points:[[6150,9600],[6150,9950]],speed:262.5,currentPoint:1.49375,collidable:true,pointOn:{"x":6150,"y":9950},pointTo:{"x":6150,"y":9600},xv:1.607348923880901e-14,yv:-262.5,inView:false,path:[[12300,19200,8.75],[12300,19900,8.75]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[12050,19750],[12350,20050],[12050,20050]],most:{"left":6025,"right":6175,"top":9875,"bottom":10025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12350,19150],[12650,19150],[12650,19450]],most:{"left":6175,"right":6325,"top":9575,"bottom":9725},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14100,19350],[14200,19450],[14100,19550]],most:{"left":7050,"right":7100,"top":9675,"bottom":9775},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:14450,y:19300,w:100,h:50,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:14700,y:19300,w:100,h:50,points:[[7350,9650],[7550,9650]],speed:180,currentPoint:0.1925,alongWith:false,pointOn:{"x":7350,"y":9650},pointTo:{"x":7550,"y":9650},xv:180,yv:0,inView:false,path:[[14700,19300,6],[15100,19300,6]],})
C(1,[],[1],{type:[1,[],[1]],x:15300,y:19200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:19300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16000,y:19300,w:200,h:100,canJump:true,inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:9150,y:8400,w:2450,h:800,inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:9150,y:10800,w:2450,h:800,inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:10800,y:9100,w:800,h:1750,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:9600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:9600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:9700,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9700,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9600,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:9700,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9600,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9700,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:9400,w:50,h:500,tpx:13850,tpy:19950,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9850,y:9400,w:50,h:500,tpx:13850,tpy:19950,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:9400,w:500,h:50,tpx:13850,tpy:19950,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:9850,w:500,h:50,tpx:13850,tpy:19950,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:9550,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9700,y:9550,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:9550,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:9700,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,19700],[17800,19800],[17800,20000],[17600,20000],[17600,19800]],most:{"left":8800,"right":8900,"top":9850,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:9200,w:200,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:9900,w:1600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:9200,w:200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:9200,w:1600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:9250,w:200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:10600,w:1600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6150,y:20000,w:6050,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[800,19200],[1400,19200],[800,19800]],most:{"left":400,"right":700,"top":9600,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,19400],[2200,19400],[1600,20000],[1000,20000]],most:{"left":500,"right":1100,"top":9700,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2800,19200],[3500,19200],[2900,19800],[2200,19800]],most:{"left":1100,"right":1750,"top":9600,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:700,w:300,y:19200,x:3150,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:14000,y:19600,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:19550,w:150,h:350,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16500,y:19300,w:300,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16800,y:19200,w:100,h:200,canJump:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16700,y:19200,w:100,h:100,tpx:9650,tpy:9650,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[20],{h:200,w:250,y:19150,x:16600,hex:'#FFFFFF',alpha:1,
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
C(1,[1],[1],{type:[1,[1],[1]],x:12625,y:19550,w:450,h:100,angle:17198.533333327166,rotateSpeed:0.03205387205387205,pivotX:12850,pivotY:19600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:4.433333333333343,inView:false,initialRotation:300.17103318055445,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:13025,y:19550,w:450,h:100,angle:-17198.533333327166,rotateSpeed:-0.03205387205387205,pivotX:13250,pivotY:19600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:4.433333333333343,inView:false,initialRotation:-300.17103318055445,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:5300,y:19900,w:300,h:100,effect:460,inView:false,bounciness:306.6666666666667,decay:0.5,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:19400,w:100,h:200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:19500,w:400,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:19150,w:200,h:950,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4450,y:19300,w:300,h:700,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[20],{h:700,w:350,y:19300,x:4450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[1],{type:[1,[],[1]],x:3100,y:19900,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[3100,19900],[3100,20000],[3000,20000]],most:{"left":1500,"right":1550,"top":9950,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4400,19900],[4500,20000],[4400,20000]],most:{"left":2200,"right":2250,"top":9950,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:5900,y:19600,w:100,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5600,y:19900,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:19900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:19400,w:300,h:650,canJump:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5100,19500],[5200,19600],[5200,20000],[5100,20000]],most:{"left":2550,"right":2600,"top":9750,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:5500,y:19200,w:200,h:200,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[20],{h:200,w:200,y:19200,x:5500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[12],{type:[1,[],[12]],x:5700,y:19200,w:300,h:300,tpx:6250,tpy:19450,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:19500,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:19200,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:19800,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:19600,w:400,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:19100,w:400,h:300,canJump:true,inView:false,})
C(1,[],[20],{h:200,w:400,y:19700,x:7900,hex:'#FFFFFF',alpha:1,
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
C(1,[0],[1],{type:[1,[0],[1]],x:800,y:19800,w:200,h:200,points:[[400,9900],[700,9600]],speed:172,currentPoint:0.05106788604287866,collidable:false,pointOn:{"x":400,"y":9900},pointTo:{"x":700,"y":9600},xv:121.62236636408618,yv:-121.62236636408616,inView:false,path:[[800,19800,5.733333333333333],[1400,19200,5.733333333333333]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:19200,w:200,h:200,points:[[1200,9600],[900,9900]],speed:172,currentPoint:0.05106788604346434,collidable:false,pointOn:{"x":1200,"y":9600},pointTo:{"x":900,"y":9900},xv:-121.62236636408616,yv:121.62236636408618,inView:false,path:[[2400,19200,5.733333333333333],[1800,19800,5.733333333333333]],boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:1400,y:19200,w:200,h:200,points:[[700,9600],[400,9900]],speed:172,currentPoint:0.05106788604287999,pointOn:{"x":700,"y":9600},pointTo:{"x":400,"y":9900},xv:-121.62236636408616,yv:121.62236636408618,inView:false,path:[[1400,19200,5.733333333333333],[800,19800,5.733333333333333]],})
C(1,[0],[11],{type:[1,[0],[11]],x:1800,y:19800,w:200,h:200,points:[[900,9900],[1200,9600]],speed:172,currentPoint:0.051067886043464523,pointOn:{"x":900,"y":9900},pointTo:{"x":1200,"y":9600},xv:121.62236636408618,yv:-121.62236636408616,inView:false,path:[[1800,19800,5.733333333333333],[2400,19200,5.733333333333333]],})
C(1,[],[26],{type:[1,[],[26]],x:9650,y:18500,w:700,h:650,musicPath:"https://www.youtube.com/watch?v=dkYHgxfQZBA",volume:1,startTime:0,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9600,17800],[10400,17800],[10000,18200]],most:{"left":4800,"right":5200,"top":8900,"bottom":9100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:1600,y:17200,w:600,h:600,spawn:{"x":950,"y":8750},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[9750,17900],[10250,17900],[10000,18150]],most:{"left":4875,"right":5125,"top":8950,"bottom":9075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:17800,y:17800,w:600,h:600,spawn:{"x":9050,"y":9050},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[9200,18000],[9600,18400],[8800,18400]],most:{"left":4400,"right":4800,"top":9000,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10800,18000],[11200,18400],[10400,18400]],most:{"left":5200,"right":5600,"top":9000,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[6400,18000],[6800,18400],[6000,18400]],most:{"left":3000,"right":3400,"top":9000,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4500,17800],[5300,17800],[4900,18200]],most:{"left":2250,"right":2650,"top":8900,"bottom":9100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,17800],[3400,17800],[3200,17900]],most:{"left":1500,"right":1700,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2600,17800],[3000,17800],[2800,17900]],most:{"left":1300,"right":1500,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3400,17800],[3800,17800],[3600,17900]],most:{"left":1700,"right":1900,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2600,17800],[2800,17800],[2700,17900]],most:{"left":1300,"right":1400,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2800,17800],[3000,17800],[2900,17900]],most:{"left":1400,"right":1500,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,17800],[3200,17800],[3100,17900]],most:{"left":1500,"right":1600,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3200,17800],[3400,17800],[3300,17900]],most:{"left":1600,"right":1700,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3400,17800],[3600,17800],[3500,17900]],most:{"left":1700,"right":1800,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,17800],[3800,17800],[3700,17900]],most:{"left":1800,"right":1900,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2800,18300],[3000,18400],[2600,18400]],most:{"left":1300,"right":1500,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3200,18300],[3400,18400],[3000,18400]],most:{"left":1500,"right":1700,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,18300],[3800,18400],[3400,18400]],most:{"left":1700,"right":1900,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2700,18300],[2800,18400],[2600,18400]],most:{"left":1300,"right":1400,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18300],[3000,18400],[2800,18400]],most:{"left":1400,"right":1500,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3100,18300],[3200,18400],[3000,18400]],most:{"left":1500,"right":1600,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,18300],[3400,18400],[3200,18400]],most:{"left":1600,"right":1700,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,18300],[3600,18400],[3400,18400]],most:{"left":1700,"right":1800,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3700,18300],[3800,18400],[3600,18400]],most:{"left":1800,"right":1900,"top":9150,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:1600,y:16200,w:100,h:1000,points:[[800,8100],[1050,8100]],speed:90,currentPoint:1.877,alongWith:false,pointOn:{"x":800,"y":8100},pointTo:{"x":1050,"y":8100},xv:90,yv:0,inView:false,path:[[1600,16200,3],[2100,16200,3]],})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:16200,w:50,h:200,tpx:2100,tpy:16300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:16400,w:50,h:200,tpx:2100,tpy:16500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:16600,w:50,h:200,tpx:2100,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:16800,w:50,h:200,tpx:2100,tpy:16900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:17000,w:50,h:200,tpx:2100,tpy:17100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:16200,w:50,h:200,tpx:1700,tpy:16300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:16400,w:50,h:200,tpx:1700,tpy:16500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:16600,w:50,h:200,tpx:1700,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:16800,w:50,h:200,tpx:1700,tpy:16900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:17000,w:50,h:200,tpx:1700,tpy:17100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:15200,w:100,h:1000,points:[[800,7600],[1050,7600]],speed:90,currentPoint:0.877,collidable:true,pointOn:{"x":800,"y":7600},pointTo:{"x":1050,"y":7600},xv:90,yv:0,inView:false,path:[[1600,15200,3],[2100,15200,3]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:16000,w:50,h:250,tpx:2100,tpy:16100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:15800,w:50,h:200,tpx:2100,tpy:15900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:15600,w:50,h:200,tpx:2100,tpy:15700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:15400,w:50,h:200,tpx:2100,tpy:15500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1600,y:15200,w:50,h:200,tpx:2100,tpy:15300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:16000,w:50,h:250,tpx:1700,tpy:16100,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:15800,w:50,h:200,tpx:1700,tpy:15900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:15600,w:50,h:200,tpx:1700,tpy:15700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:15400,w:50,h:200,tpx:1700,tpy:15500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2150,y:15200,w:50,h:200,tpx:1700,tpy:15300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1950,14950],[2200,14950],[2200,15200]],most:{"left":975,"right":1100,"top":7475,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,14950],[1850,14950],[1600,15200]],most:{"left":800,"right":925,"top":7475,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:14500,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:14950,radius:125,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[1100,7475],[975,7475]],"type":"poly","props":{}},endPolygon:{"points":[[1100,7475],[1100,7350]],"type":"poly","props":{}},renderType:"circle",inView:false,r:250,innerRadius:0,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:14950,radius:225,startAngle:3.141592653589793,endAngle:4.101523742186674,startPolygon:{"points":[[925,7475],[875,7475]],"type":"poly","props":{}},endPolygon:{"points":[[999.6241236385669,7331.648392249426],[970.9453018210146,7290.690790034977]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:3.141592653589793,endSliceAngle:4.101523742186674,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:14500,radius:225,startAngle:4.71238898038469,endAngle:0.8377580409572781,startPolygon:{"points":[[950,7100],[950,7025]],"type":"poly","props":{}},endPolygon:{"points":[[1050.3695909538287,7361.471723821609],[1100.554386430743,7417.2075857324135]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:4.71238898038469,endSliceAngle:0.8377580409572781,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:14300,w:350,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:14300,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:14000,radius:225,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[950,7150],[950,7225]],"type":"poly","props":{}},endPolygon:{"points":[[950,6850],[950,6775]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:14000,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:13500,w:300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:13800,w:250,h:400,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:13500,radius:225,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1100,6750],[1175,6750]],"type":"poly","props":{}},endPolygon:{"points":[[950,6900],[950,6975]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:13500,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[950,6750],[1050,6750]],"type":"poly","props":{}},endPolygon:{"points":[[950,6750],[950,6850]],"type":"poly","props":{}},renderType:"circle",inView:false,r:200,innerRadius:0,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1850,y:15200,w:100,h:2000,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:15200,r:50,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1650,y:16600,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1950,y:15950,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1650,y:15200,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:1600,y:11600,w:600,h:600,spawn:{"x":950,"y":5950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:13200,radius:150,startAngle:551.494954809196,endAngle:553.0657511359926,startPolygon:{"points":[[950,6600],[971.7397788744776,6451.583754209693]],"type":"poly","props":{}},endPolygon:{"points":[[950,6600],[1098.4162457902687,6621.7397788747385]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",inView:false,r:300,startSliceAngle:551.494954809196,endSliceAngle:553.0657511359926,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:12700,radius:150,startAngle:-549.9241584823993,endAngle:-548.3533621556027,startPolygon:{"points":[[950,6350],[801.5837542096548,6371.739778874216]],"type":"poly","props":{}},endPolygon:{"points":[[950,6350],[928.2602211260439,6201.583754209617]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-3.490658503988659,renderType:"circle",inView:false,r:300,startSliceAngle:-549.9241584823993,endSliceAngle:-548.3533621556027,startSliceAngleRotateSpeed:-0.02908882086657216,endSliceAngleRotateSpeed:-0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:13200,radius:225,startAngle:1.5707963267948966,endAngle:3.979350694547071,startPolygon:{"points":[[950,6750],[950,6825]],"type":"poly","props":{}},endPolygon:{"points":[[849.6304090461713,6488.528276178391],[799.4456135692568,6432.7924142675865]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:1.5707963267948966,endSliceAngle:3.979350694547071,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:12700,radius:225,startAngle:4.71238898038469,endAngle:0.8377580409572781,startPolygon:{"points":[[950,6200],[950,6125]],"type":"poly","props":{}},endPolygon:{"points":[[1050.3695909538287,6461.471723821609],[1100.554386430743,6517.2075857324135]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:4.71238898038469,endSliceAngle:0.8377580409572781,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:12200,w:350,h:200,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:1000,y:12200,w:300,h:200,points:[[500,6100],[725,6100]],speed:250,currentPoint:1.5462962962992242,alongWith:false,pointOn:{"x":725,"y":6100},pointTo:{"x":500,"y":6100},xv:-250,yv:3.061616997868383e-14,inView:false,path:[[1000,12200,8.333333333333334],[1450,12200,8.333333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:2200,y:12200,w:300,h:200,points:[[1100,6100],[875,6100]],speed:250,currentPoint:1.5462962962963063,alongWith:false,pointOn:{"x":875,"y":6100},pointTo:{"x":1100,"y":6100},xv:250,yv:0,inView:false,path:[[2200,12200,8.333333333333334],[1750,12200,8.333333333333334]],})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:13200,radius:150,startAngle:554.6365474627893,endAngle:556.2073437895859,startPolygon:{"points":[[950,6600],[928.260221125001,6748.41624579023]],"type":"poly","props":{}},endPolygon:{"points":[[950,6600],[801.5837542098076,6578.26022112474]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",inView:false,r:300,startSliceAngle:554.6365474627893,endSliceAngle:556.2073437895859,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:13200,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:12700,r:200,renderType:"circle",inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:17954,y:17672,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18256,y:17448,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18296,y:17676,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:17906,y:17404,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18090,y:17118,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18286,y:17200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:18282,y:16860,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:18318,y:17032,r:52,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[5],[1],{h:66,w:600,y:16367,x:17800,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.020651162790697675,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 16400
    });
    C(0,[],[0],{x:18100,y:16400,r:70,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:18300,y:16054,w:130,h:92,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17770,y:16054,w:130,h:92,canJump:true,inView:false,})
C(1,[5],[1],{h:66,w:600,y:15167,x:17550,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.030976744186046512,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17850,
        pivotY: 15200
    });
    C(0,[],[0],{x:17850,y:15200,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:15167,x:18050,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.030976744186046512,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18350,
        pivotY: 15200
    });
    C(0,[],[0],{x:18350,y:15200,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:14417,x:17800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.030976744186046512,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 14450
    });
    C(0,[],[0],{x:18100,y:14450,r:70,cr:(e)=>{
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
    }});C(0,[],[0],{type:[0,[],[0]],x:17800,y:14800,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17800,y:14100,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18400,y:14100,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18400,y:14800,r:100,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:12850,radius:225,startAngle:3.141592653589793,endAngle:0,startPolygon:{"points":[[8900,6425],[8825,6425]],"type":"poly","props":{}},endPolygon:{"points":[[9200,6425],[9275,6425]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:3.141592653589793,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:17700,y:12400,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18350,y:12450,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17750,y:12450,w:150,h:100,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:10400,y:9550,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:9550,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:9550,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:9700,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:9700,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:9600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10300,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10400,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:9600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:9700,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10400,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10300,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:9500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:9800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:9400,w:50,h:500,tpx:3500,tpy:9450,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10550,y:9400,w:50,h:500,tpx:3500,tpy:9450,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:9400,w:500,h:50,tpx:3500,tpy:9450,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:9850,w:500,h:50,tpx:3500,tpy:9450,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:12400,w:200,h:150,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:1600,y:1600,w:600,h:600,spawn:{"x":950,"y":950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[1],[0],{type:[1,[1],[0]],x:3500,y:19500,w:500,h:100,angle:14127.366666664027,rotateSpeed:0.02632996632996633,pivotX:3750,pivotY:19550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:4.433333333333343,inView:false,initialRotation:246.56906296978352,})
C(1,[1],[0],{type:[1,[1],[0]],x:3900,y:19500,w:500,h:100,angle:14127.366666664027,rotateSpeed:0.02632996632996633,pivotX:4150,pivotY:19550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:4.433333333333343,inView:false,initialRotation:246.56906296978352,})
C(2,[],[12],{type:[2,[],[12]],points:[[3000,4000],[3400,4300],[3000,5500]],tpx:3500,tpy:4100,most:{"left":1500,"right":1700,"top":2000,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4000,4000],[4000,5500],[3600,4300]],tpx:3500,tpy:4100,most:{"left":1800,"right":2000,"top":2000,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3100,8400],[3900,8400],[3500,8800]],most:{"left":1550,"right":1950,"top":4200,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[12],{type:[1,[0],[12]],x:3000,y:8900,w:200,h:200,points:[[1500,4450],[1900,4450],[1900,4600],[1500,4600]],speed:180,currentPoint:2.97125,tpx:3500,tpy:4100,pointOn:{"x":1900,"y":4600},pointTo:{"x":1500,"y":4600},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[3000,8900,6],[3800,8900,6],[3800,9200,6],[3000,9200,6]],})
C(1,[0],[12],{type:[1,[0],[12]],x:3000,y:8900,w:200,h:200,points:[[1500,4450],[1500,4600],[1900,4600],[1900,4450]],speed:180,currentPoint:1.59625,tpx:3500,tpy:4100,pointOn:{"x":1500,"y":4600},pointTo:{"x":1900,"y":4600},xv:180,yv:0,inView:false,path:[[3000,8900,6],[3000,9200,6],[3800,9200,6],[3800,8900,6]],})
C(1,[0],[12],{type:[1,[0],[12]],x:3000,y:8900,w:200,h:200,points:[[1500,4450],[1500,4600],[1900,4600],[1900,4450]],speed:180,currentPoint:3.59625,tpx:3500,tpy:4100,pointOn:{"x":1900,"y":4450},pointTo:{"x":1500,"y":4450},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[3000,8900,6],[3000,9200,6],[3800,9200,6],[3800,8900,6]],})
C(1,[0],[12],{type:[1,[0],[12]],x:3000,y:8900,w:200,h:200,points:[[1500,4450],[1900,4450],[1900,4600],[1500,4600]],speed:180,currentPoint:0.97125,tpx:3500,tpy:4100,pointOn:{"x":1500,"y":4450},pointTo:{"x":1900,"y":4450},xv:180,yv:0,inView:false,path:[[3000,8900,6],[3800,8900,6],[3800,9200,6],[3000,9200,6]],})
C(2,[],[0],{type:[2,[],[0]],points:[[3100,9500],[3900,9500],[3500,9900]],most:{"left":1550,"right":1950,"top":4750,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[3000,9800],[3400,10200],[3300,10300],[3000,10000]],tpx:3500,tpy:4100,most:{"left":1500,"right":1700,"top":4900,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4000,9800],[4000,10000],[3700,10300],[3600,10200]],tpx:3500,tpy:4100,most:{"left":1800,"right":2000,"top":4900,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[12],{type:[1,[1],[12]],x:3350,y:10600,w:300,h:300,tpx:3500,tpy:4100,angle:45,rotateSpeed:0,pivotX:3500,pivotY:10750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,})
C(2,[],[12],{type:[2,[],[12]],points:[[3000,11000],[3400,11400],[3000,11800]],tpx:3500,tpy:4100,most:{"left":1500,"right":1700,"top":5500,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4000,11000],[4000,11800],[3600,11400]],tpx:3500,tpy:4100,most:{"left":1800,"right":2000,"top":5500,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[3500,11700],[3850,12050],[3500,13100],[3150,12050]],tpx:3500,tpy:4100,most:{"left":1575,"right":1925,"top":5850,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[3000,12500],[3400,13700],[3000,14000]],tpx:3500,tpy:4100,most:{"left":1500,"right":1700,"top":6250,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4000,12500],[4000,14000],[3600,13700]],tpx:3500,tpy:4100,most:{"left":1800,"right":2000,"top":6250,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[3000,14200],[3100,14600],[3000,14700]],tpx:3500,tpy:4100,most:{"left":1500,"right":1550,"top":7100,"bottom":7350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4000,14200],[4000,14700],[3900,14600]],tpx:3500,tpy:4100,most:{"left":1950,"right":2000,"top":7100,"bottom":7350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[3500,14000],[3700,14200],[3500,14350],[3300,14200]],tpx:3500,tpy:4100,most:{"left":1650,"right":1850,"top":7000,"bottom":7175},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[24],{type:[1,[],[24]],x:3000,y:13700,w:1000,h:2250,ir:0.25,or:0.5,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.3,innerOpacity:0,outerOpacity:1,})
C(1,[0],[11],{type:[1,[0],[11]],x:1600,y:11000,w:300,h:300,points:[[800,5500],[950,5500],[950,5650],[800,5650]],speed:150,currentPoint:1.9916666666666667,pointOn:{"x":950,"y":5500},pointTo:{"x":950,"y":5650},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1600,11000,5],[1900,11000,5],[1900,11300,5],[1600,11300,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:1600,y:11000,w:300,h:300,points:[[800,5500],[950,5500],[950,5650],[800,5650]],speed:150,currentPoint:3.9916666666666667,pointOn:{"x":800,"y":5650},pointTo:{"x":800,"y":5500},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,11000,5],[1900,11000,5],[1900,11300,5],[1600,11300,5]],})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:9600,w:600,h:1200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:1600,y:10200,w:300,h:300,points:[[800,5100],[800,5250]],speed:150,currentPoint:1.9916666666666667,pointOn:{"x":800,"y":5250},pointTo:{"x":800,"y":5100},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,10200,5],[1600,10500,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:1900,y:9900,w:300,h:300,points:[[950,4950],[950,5100]],speed:150,currentPoint:0.9916666666666667,pointOn:{"x":950,"y":4950},pointTo:{"x":950,"y":5100},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1900,9900,5],[1900,10200,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:1600,y:9600,w:300,h:300,points:[[800,4800],[800,4950]],speed:150,currentPoint:1.9916666666666667,pointOn:{"x":800,"y":4950},pointTo:{"x":800,"y":4800},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1600,9600,5],[1600,9900,5]],})
C(1,[1],[11],{type:[1,[1],[11]],x:1500,y:8000,w:800,h:200,angle:13820.25,rotateSpeed:0.025757575757575757,pivotX:1900,pivotY:8100,distToPivot:0,canCollide:true,cullingRadius:206.15528128088303,unSim:4.433333333333343,inView:false,initialRotation:241.20886594874634,})
C(1,[1],[11],{type:[1,[1],[11]],x:1500,y:6800,w:800,h:200,angle:13820.25,rotateSpeed:0.025757575757575757,pivotX:1900,pivotY:6900,distToPivot:0,canCollide:true,cullingRadius:206.15528128088303,unSim:4.433333333333343,inView:false,initialRotation:241.20886594874634,})
C(1,[1],[11],{type:[1,[1],[11]],x:1500,y:7400,w:800,h:200,angle:-13820.25,rotateSpeed:-0.025757575757575757,pivotX:1900,pivotY:7500,distToPivot:0,canCollide:true,cullingRadius:206.15528128088303,unSim:4.433333333333343,inView:false,initialRotation:-241.20886594874634,})
C(1,[],[9],{type:[1,[],[9]],x:1600,y:6000,w:600,h:600,spawn:{"x":950,"y":3150},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(0,[],[1],{type:[0,[],[1]],x:1900,y:6900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1900,y:7500,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1900,y:8100,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:7900,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:7100,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1750,y:7300,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1750,y:7700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:8300,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2050,y:6700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1850,y:10200,w:100,h:300,points:[[925,5100],[925,5250]],speed:150,currentPoint:0.9916666666666667,collidable:true,pointOn:{"x":925,"y":5100},pointTo:{"x":925,"y":5250},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1850,10200,5],[1850,10500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1850,y:9600,w:100,h:300,points:[[925,4800],[925,4950]],speed:150,currentPoint:0.9916666666666667,collidable:true,pointOn:{"x":925,"y":4800},pointTo:{"x":925,"y":4950},xv:9.184850993605149e-15,yv:150,inView:false,path:[[1850,9600,5],[1850,9900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1850,y:9900,w:100,h:300,points:[[925,4950],[925,5100]],speed:150,currentPoint:1.9916666666666667,collidable:true,pointOn:{"x":925,"y":5100},pointTo:{"x":925,"y":4950},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[1850,9900,5],[1850,10200,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1650,8250],[1800,8400],[1650,8400]],most:{"left":825,"right":900,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1650,6600],[1800,6600],[1650,6750]],most:{"left":825,"right":900,"top":3300,"bottom":3375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,11300],[1700,11600],[1600,11700]],most:{"left":800,"right":850,"top":5650,"bottom":5850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,10900],[1700,11000],[1600,11300]],most:{"left":800,"right":850,"top":5450,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2200,10900],[2200,11300],[2100,11000]],most:{"left":1050,"right":1100,"top":5450,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2200,11300],[2200,11700],[2100,11600]],most:{"left":1050,"right":1100,"top":5650,"bottom":5850},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:1750,y:8900,r:152,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1750,8750],[1900,8900],[1750,9050],[1600,8900]],most:{"left":800,"right":950,"top":4375,"bottom":4525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:1750,y:8900,r:108,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:9150,r:152,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:8650,r:152,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2150,9000],[2300,9150],[2150,9300],[2000,9150]],most:{"left":1000,"right":1150,"top":4500,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2150,8500],[2300,8650],[2150,8800],[2000,8650]],most:{"left":1000,"right":1150,"top":4250,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:9150,r:108,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:8650,r:108,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[1850,8600],[1950,8600],[2050,8900],[1950,8900]],most:{"left":925,"right":1025,"top":4300,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[1950,8900],[2050,8900],[1950,9200],[1850,9200]],most:{"left":925,"right":1025,"top":4450,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:9500,y:14200,w:1000,h:1000,spawn:{"x":5000,"y":7350},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[5],[1],{h:100,w:600,y:13700,x:17800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04646511627906976,
        detectionRadius: 304.138126514911,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 13750
    });
    C(0,[],[0],{x:18100,y:13750,r:100,cr:(e)=>{
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
    }});C(1,[5],[1],{h:100,w:600,y:13400,x:17800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04646511627906976,
        detectionRadius: 304.138126514911,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 13450
    });
    C(0,[],[0],{x:18100,y:13450,r:100,cr:(e)=>{
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
    }});C(1,[5],[1],{h:100,w:600,y:13100,x:17800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04646511627906976,
        detectionRadius: 304.138126514911,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 13150
    });
    C(0,[],[0],{x:18100,y:13150,r:100,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:1800,y:5700,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1800,5800],[2000,5800],[1900,6000]],most:{"left":900,"right":1000,"top":2900,"bottom":3000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[8],{type:[1,[],[8]],x:1800,y:2500,w:200,h:200,coins:2,currentCoins:2,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:2,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:2200,w:750,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:5100,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:4500,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:3900,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:3300,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:2700,w:200,h:400,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:5100,w:200,h:200,points:[[800,2550],[800,2900]],speed:222,currentPoint:0.21185714285221627,collidable:true,pointOn:{"x":800,"y":2550},pointTo:{"x":800,"y":2900},xv:1.359357947053562e-14,yv:222,inView:false,path:[[1600,5100,7.4],[1600,5800,7.4]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:2800,w:0.002,h:2950,canJump:true,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:1700,y:2600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:2100,y:2600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:2700,w:200,h:200,points:[[800,1350],[1000,1350]],speed:242,currentPoint:0.16991666666522975,collidable:true,pointOn:{"x":800,"y":1350},pointTo:{"x":1000,"y":1350},xv:242,yv:0,inView:false,path:[[1600,2700,8.066666666666666],[2000,2700,8.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:2900,w:200,h:200,points:[[800,1450],[1000,1450]],speed:242,currentPoint:1.1699166666652299,collidable:true,pointOn:{"x":1000,"y":1450},pointTo:{"x":800,"y":1450},xv:-242,yv:2.963645253936595e-14,inView:false,path:[[1600,2900,8.066666666666666],[2000,2900,8.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:3900,w:100,h:100,points:[[800,1950],[800,2100]],speed:112,currentPoint:1.9671111111187747,collidable:false,pointOn:{"x":800,"y":2100},pointTo:{"x":800,"y":1950},xv:6.858022075225178e-15,yv:-112,inView:false,path:[[1600,3900,3.7333333333333334],[1600,4200,3.7333333333333334]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1700,y:3900,w:100,h:100,points:[[850,1950],[850,2100]],speed:112,currentPoint:0.9671111111187747,collidable:false,pointOn:{"x":850,"y":1950},pointTo:{"x":850,"y":2100},xv:6.858022075225178e-15,yv:112,inView:false,path:[[1700,3900,3.7333333333333334],[1700,4200,3.7333333333333334]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2000,y:3900,w:100,h:100,points:[[1000,1950],[1050,1950],[1050,2100],[1000,2100]],speed:112,currentPoint:1.3004444444502952,collidable:false,pointOn:{"x":1050,"y":1950},pointTo:{"x":1050,"y":2100},xv:6.858022075225178e-15,yv:112,inView:false,path:[[2000,3900,3.7333333333333334],[2100,3900,3.7333333333333334],[2100,4200,3.7333333333333334],[2000,4200,3.7333333333333334]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2000,y:3900,w:100,h:100,points:[[1000,1950],[1050,1950],[1050,2100],[1000,2100]],speed:112,currentPoint:3.3004444444502923,collidable:false,pointOn:{"x":1000,"y":2100},pointTo:{"x":1000,"y":1950},xv:6.858022075225178e-15,yv:-112,inView:false,path:[[2000,3900,3.7333333333333334],[2100,3900,3.7333333333333334],[2100,4200,3.7333333333333334],[2000,4200,3.7333333333333334]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:3100,w:200,h:200,points:[[800,1550],[1000,1550],[1000,1850],[800,1850]],speed:180,currentPoint:1.795,collidable:false,pointOn:{"x":1000,"y":1550},pointTo:{"x":1000,"y":1850},xv:1.1021821192326179e-14,yv:180,inView:false,path:[[1600,3100,6],[2000,3100,6],[2000,3700,6],[1600,3700,6]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:3100,w:200,h:200,points:[[800,1550],[1000,1550],[1000,1850],[800,1850]],speed:180,currentPoint:2.6925,collidable:false,pointOn:{"x":1000,"y":1850},pointTo:{"x":800,"y":1850},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[1600,3100,6],[2000,3100,6],[2000,3700,6],[1600,3700,6]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:3100,w:200,h:200,points:[[800,1550],[1000,1550],[1000,1850],[800,1850]],speed:180,currentPoint:3.795,collidable:false,pointOn:{"x":800,"y":1850},pointTo:{"x":800,"y":1550},xv:1.1021821192326179e-14,yv:-180,inView:false,path:[[1600,3100,6],[2000,3100,6],[2000,3700,6],[1600,3700,6]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:3100,w:200,h:200,points:[[800,1550],[1000,1550],[1000,1850],[800,1850]],speed:180,currentPoint:0.6925,collidable:false,pointOn:{"x":800,"y":1550},pointTo:{"x":1000,"y":1550},xv:180,yv:0,inView:false,path:[[1600,3100,6],[2000,3100,6],[2000,3700,6],[1600,3700,6]],boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:1450,y:2400,w:100,h:3600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1450,y:2250,w:900,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2250,y:2400,w:100,h:3600,canCollide:true,inView:false,boundPlayer:true,})
var timer10183 = 0.008333333333367636; var state10183 =true; var x10183 = 8600; 
    C(1,[],[1],{h:600,w:400,y:1600,x:8600,sf:(e)=>{
            timer10183 -= 1 / 60;
            if(timer10183 < 0){
                state10183 = !state10183;
                if(state10183 === true){
                    // on
                    timer10183 += 0.5;
                    e.pos.x = x10183;
                } else {
                    // off
                    timer10183 += 1;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10183) {
                if (timer10183 < 0.2 && 0.5 > 0.2) {
                    ctx.globalAlpha = timer10183 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10183 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10183 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10183, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10184 = 0.25833333333336844; var state10184 =false; var x10184 = 7900; 
    C(1,[],[1],{h:600,w:400,y:1600,x:7900,sf:(e)=>{
            timer10184 -= 1 / 60;
            if(timer10184 < 0){
                state10184 = !state10184;
                if(state10184 === true){
                    // on
                    timer10184 += 0.5;
                    e.pos.x = x10184;
                } else {
                    // off
                    timer10184 += 1;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10184) {
                if (timer10184 < 0.2 && 0.5 > 0.2) {
                    ctx.globalAlpha = timer10184 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10184 < 0.2 && 1 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10184 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x10184, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(2,[],[1],{type:[2,[],[1]],points:[[4000,1850],[4100,1900],[4000,1950]],most:{"left":2000,"right":2050,"top":925,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4150,2100],[4200,2200],[4100,2200]],most:{"left":2050,"right":2100,"top":1050,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,2100],[4100,2200],[4000,2200]],most:{"left":2000,"right":2050,"top":1050,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4250,2100],[4300,2200],[4200,2200]],most:{"left":2100,"right":2150,"top":1050,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,1600],[5300,1600],[4900,1950],[4400,1950]],most:{"left":2200,"right":2650,"top":800,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,1850],[4400,1950],[4300,1900]],most:{"left":2150,"right":2200,"top":925,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,1750],[4400,1850],[4300,1800]],most:{"left":2150,"right":2200,"top":875,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,1650],[4400,1750],[4300,1700]],most:{"left":2150,"right":2200,"top":825,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5600,1700],[6100,2200],[5100,2200]],most:{"left":2550,"right":3050,"top":850,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6100,1600],[7300,1600],[7100,1800],[6300,1800]],most:{"left":3050,"right":3650,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,2000],[7100,2000],[7300,2200],[6100,2200]],most:{"left":3050,"right":3650,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7400,y:1600,w:200,h:200,points:[[3700,800],[3700,1000]],speed:106,currentPoint:1.735583333332615,collidable:true,pointOn:{"x":3700,"y":1000},pointTo:{"x":3700,"y":800},xv:6.490628035480972e-15,yv:-106,inView:false,path:[[7400,1600,3.533333333333333],[7400,2000,3.533333333333333]],boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2375,y:1775,r:175,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2725,y:1775,r:175,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3475,y:2025,r:175,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3825,y:2025,r:175,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2350,1600],[2550,1750],[2400,1950],[2200,1800]],most:{"left":1100,"right":1275,"top":800,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2750,1600],[2900,1800],[2700,1950],[2550,1750]],most:{"left":1275,"right":1450,"top":800,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,1850],[3650,2050],[3450,2200],[3300,2000]],most:{"left":1650,"right":1825,"top":925,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3800,1850],[4000,2000],[3850,2200],[3650,2050]],most:{"left":1825,"right":2000,"top":925,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,7950],[18000,8300],[17800,8450]],most:{"left":8900,"right":9000,"top":3975,"bottom":4225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17750,y:2900,w:750,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17650,y:2900,w:300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18250,y:2900,w:300,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,2080],[17900,2200],[17650,2200]],most:{"left":8825,"right":8950,"top":1040,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17580,1600],[17900,1600],[17800,1720]],most:{"left":8790,"right":8950,"top":800,"bottom":860},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:16700,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[8241.746824526945,887.5],[8198.445554337723,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[8458.253175473055,887.5],[8501.554445662277,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:16700,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[8458.253175473055,1012.5],[8501.554445662277,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[8241.746824526945,1012.5],[8198.445554337723,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[16800,1600],[17400,1600],[17100,1800]],most:{"left":8400,"right":8700,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17100,2000],[17400,2200],[16800,2200]],most:{"left":8400,"right":8700,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16300,2000],[16600,2200],[16000,2200]],most:{"left":8000,"right":8300,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:17250,y:1850,w:500,h:100,angle:8292.149999997824,rotateSpeed:0.015454545454545453,pivotX:17500,pivotY:1900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:4.433333333333343,inView:false,initialRotation:144.7253195692098,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16650,y:1850,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:17250,y:1850,w:500,h:100,angle:8312.149999997857,rotateSpeed:0.015454545454545453,pivotX:17500,pivotY:1900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:4.433333333333343,inView:false,initialRotation:145.07438541960926,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:17250,y:1850,w:500,h:100,angle:8332.14999999789,rotateSpeed:0.015454545454545453,pivotX:17500,pivotY:1900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:4.433333333333343,inView:false,initialRotation:145.42345127000868,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:17500,y:1900,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16450,y:1850,w:100,h:100,points:[[8225,925],[8425,925]],speed:150,currentPoint:0.49375,collidable:true,pointOn:{"x":8225,"y":925},pointTo:{"x":8425,"y":925},xv:150,yv:0,inView:false,path:[[16450,1850,5],[16850,1850,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16650,y:1650,w:100,h:100,points:[[8325,825],[8325,1025]],speed:150,currentPoint:0.49375,collidable:true,pointOn:{"x":8325,"y":825},pointTo:{"x":8325,"y":1025},xv:9.184850993605149e-15,yv:150,inView:false,path:[[16650,1650,5],[16650,2050,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16650,y:1650,w:100,h:100,points:[[8325,825],[8325,1025]],speed:150,currentPoint:1.49375,collidable:true,pointOn:{"x":8325,"y":1025},pointTo:{"x":8325,"y":825},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[16650,1650,5],[16650,2050,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16450,y:1850,w:100,h:100,points:[[8225,925],[8425,925]],speed:150,currentPoint:1.49375,collidable:true,pointOn:{"x":8425,"y":925},pointTo:{"x":8225,"y":925},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[16450,1850,5],[16850,1850,5]],boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:15200,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[7708.253175473054,1012.5],[7751.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[7491.746824526946,1012.5],[7448.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:11700,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[5741.746824526946,887.5],[5698.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[5958.253175473054,887.5],[6001.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15900,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[8058.253175473054,1012.5],[8101.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[7841.746824526946,1012.5],[7798.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15900,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[7841.746824526946,887.5],[7798.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[8058.253175473054,887.5],[8101.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,1600],[16600,1600],[16300,1800]],most:{"left":8000,"right":8300,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:15900,y:1900,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[15550,2000],[15850,2200],[15250,2200]],most:{"left":7625,"right":7925,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:14500,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[7358.253175473054,1012.5],[7401.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[7141.746824526946,1012.5],[7098.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[14850,2000],[15150,2200],[14550,2200]],most:{"left":7275,"right":7575,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14150,2000],[14450,2200],[13850,2200]],most:{"left":6925,"right":7225,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:13800,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[7008.253175473054,1012.5],[7051.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[6791.746824526946,1012.5],[6748.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[13450,2000],[13750,2200],[13150,2200]],most:{"left":6575,"right":6875,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:13100,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[6658.253175473054,1012.5],[6701.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[6441.746824526946,1012.5],[6398.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:12400,y:1900,radius:175,startAngle:0.5235987755982988,endAngle:2.6179938779914944,startPolygon:{"points":[[6308.253175473054,1012.5],[6351.5544456622765,1037.5]],"type":"poly","props":{}},endPolygon:{"points":[[6091.746824526946,1012.5],[6048.4455543377235,1037.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.5235987755982988,endSliceAngle:2.6179938779914944,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[12050,2000],[12350,2200],[11750,2200]],most:{"left":5875,"right":6175,"top":1000,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11000,1950],[11800,2200],[11000,2200]],most:{"left":5500,"right":5900,"top":975,"bottom":1100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11000,1600],[11800,1600],[11000,1850]],most:{"left":5500,"right":5900,"top":800,"bottom":925},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:12400,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[6091.746824526946,887.5],[6048.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[6308.253175473054,887.5],[6351.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:13100,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[6441.746824526946,887.5],[6398.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[6658.253175473054,887.5],[6701.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:13800,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[6791.746824526946,887.5],[6748.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[7008.253175473054,887.5],[7051.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:14500,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[7141.746824526946,887.5],[7098.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[7358.253175473054,887.5],[7401.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15200,y:1900,radius:175,startAngle:-2.6179938779914944,endAngle:-0.5235987755982988,startPolygon:{"points":[[7491.746824526946,887.5],[7448.4455543377235,862.5]],"type":"poly","props":{}},endPolygon:{"points":[[7708.253175473054,887.5],[7751.5544456622765,862.5]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:-2.6179938779914944,endSliceAngle:-0.5235987755982988,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[15250,1600],[15850,1600],[15550,1800]],most:{"left":7625,"right":7925,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14550,1600],[15150,1600],[14850,1800]],most:{"left":7275,"right":7575,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13850,1600],[14450,1600],[14150,1800]],most:{"left":6925,"right":7225,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13150,1600],[13750,1600],[13450,1800]],most:{"left":6575,"right":6875,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12450,1600],[13050,1600],[12750,1800]],most:{"left":6225,"right":6525,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11750,1600],[12350,1600],[12050,1800]],most:{"left":5875,"right":6175,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[12500,1850],[12600,1900],[12500,1950],[12400,1900]],most:{"left":6200,"right":6300,"top":925,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12300,1850],[12400,1900],[12300,1950],[12200,1900]],most:{"left":6100,"right":6200,"top":925,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12400,1850],[12500,1900],[12400,1950],[12300,1900]],most:{"left":6150,"right":6250,"top":925,"bottom":975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13050,y:1850,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:100,w:600,y:12800,x:17800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04646511627906976,
        detectionRadius: 304.138126514911,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 12850
    });
    C(0,[],[0],{x:18100,y:12850,r:100,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:8700,y:2850,w:300,h:850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:3300,w:300,h:850,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:7400,y:3000,w:300,h:300,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:2850,w:300,h:850,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:4000,y:3700,w:300,h:300,coins:10,currentCoins:10,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:10,})
C(2,[],[0],{type:[2,[],[0]],points:[[10000,3200],[11000,4000],[9000,4000]],most:{"left":4500,"right":5500,"top":1600,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:11000,y:2750,w:300,h:950,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:6500,y:3100,w:400,h:400,angle:45,rotateSpeed:0,pivotX:6700,pivotY:3300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:141.4213562373095,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6150,y:3750,w:200,h:200,angle:45,rotateSpeed:0,pivotX:6250,pivotY:3850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6250,y:3050,w:200,h:200,angle:45,rotateSpeed:0,pivotX:6350,pivotY:3150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6950,y:3050,w:200,h:200,angle:45,rotateSpeed:0,pivotX:7050,pivotY:3150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4900,y:3050,w:200,h:200,angle:45,rotateSpeed:0,pivotX:5000,pivotY:3150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5450,y:3750,w:200,h:200,angle:45,rotateSpeed:0,pivotX:5550,pivotY:3850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:3050,w:200,h:200,angle:45,rotateSpeed:0,pivotX:5800,pivotY:3150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:3500,w:400,h:400,angle:45,rotateSpeed:0,pivotX:5900,pivotY:3700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:141.4213562373095,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6800,y:3750,w:200,h:200,angle:45,rotateSpeed:0,pivotX:6900,pivotY:3850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:7150,y:3700,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:5450,y:3450,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:8250,y:3850,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:8500,y:3800,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:7900,y:3200,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:8150,y:3150,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:8550,y:3550,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:7850,y:3450,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[1],[0],{type:[1,[1],[0]],x:8025,y:3325,w:350,h:350,angle:6910.125,rotateSpeed:0.012878787878787878,pivotX:8200,pivotY:3500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:123.74368670764582,unSim:4.433333333333343,inView:false,initialRotation:120.60443297437317,})
C(1,[1],[0],{type:[1,[1],[0]],x:8025,y:3325,w:350,h:350,angle:-6910.125,rotateSpeed:-0.012878787878787878,pivotX:8200,pivotY:3500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:123.74368670764582,unSim:4.433333333333343,inView:false,initialRotation:-120.60443297437317,})
C(0,[],[1],{type:[0,[],[1]],x:8200,y:3500,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[27],{type:[1,[],[27]],x:8700,y:3700,w:300,h:300,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[1],[1],{type:[1,[1],[1]],x:4900,y:3600,w:200,h:200,angle:45,rotateSpeed:0,pivotX:5000,pivotY:3700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4450,y:3250,w:200,h:200,angle:45,rotateSpeed:0,pivotX:4550,pivotY:3350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4450,y:3750,w:200,h:200,angle:45,rotateSpeed:0,pivotX:4550,pivotY:3850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:4.433333333333343,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:6075,y:3150,r:76,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{h:300,w:300,y:3700,x:8700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[29],{type:[1,[],[29]],x:11000,y:3700,w:300,h:300,time:6,inView:false,changeDeathTimerStateTo:true,deathTime:360,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:11700,y:3000,w:300,h:300,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[0],{type:[1,[],[0]],x:11700,y:3300,w:600,h:700,canJump:true,inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:12000,y:3000,w:300,h:300,time:10,inView:false,changeDeathTimerStateTo:true,deathTime:600,drainAmountWhileStandingOn:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[11500,3600],[11600,3750],[11500,3900],[11400,3750]],most:{"left":5700,"right":5800,"top":1800,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11500,3100],[11600,3250],[11500,3400],[11400,3250]],most:{"left":5700,"right":5800,"top":1550,"bottom":1700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11600,y:3400,w:100,h:100,points:[[5800,1700],[5650,1700]],speed:180,currentPoint:1.5899999999999999,collidable:true,pointOn:{"x":5650,"y":1700},pointTo:{"x":5800,"y":1700},xv:180,yv:0,inView:false,path:[[11600,3400,6],[11300,3400,6]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11600,y:3500,w:100,h:100,points:[[5800,1750],[5650,1750]],speed:180,currentPoint:0.59,collidable:true,pointOn:{"x":5800,"y":1750},pointTo:{"x":5650,"y":1750},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[11600,3500,6],[11300,3500,6]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[12300,3000],[13700,3000],[13000,3700]],most:{"left":6150,"right":6850,"top":1500,"bottom":1850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12300,3300],[13000,4000],[12300,4000]],most:{"left":6150,"right":6500,"top":1650,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13700,3300],[13700,4000],[13000,4000]],most:{"left":6500,"right":6850,"top":1650,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:9650,y:2150,r:354,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10550,y:2150,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10300,y:2700,r:304,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9100,y:2800,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10150,y:1600,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:11050,y:2800,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9200,y:1650,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9650,y:2850,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10950,y:1700,r:150,renderType:"circle",inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:13700,y:3000,w:300,h:300,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[0],{type:[1,[],[0]],x:13700,y:3300,w:600,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15700,y:3000,w:300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15700,y:3700,w:300,h:300,canJump:true,inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:14000,y:3000,w:300,h:300,time:6,inView:false,changeDeathTimerStateTo:true,deathTime:360,drainAmountWhileStandingOn:0,})
C(2,[],[0],{x:0,y:0,points:[[16000,3700],[15971.352549156241,3758.7785252292474],[15896.352549156241,3795.1056516295153],[15803.647450843759,3795.1056516295153],[15728.647450843759,3758.7785252292474],[15700,3700],[15728.647450843759,3641.2214747707526],[15803.647450843759,3604.8943483704847],[15896.352549156241,3604.8943483704847],[15971.352549156241,3641.2214747707526]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(15850,3700,150,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[16000,3300],[15971.352549156241,3358.7785252292474],[15896.352549156241,3395.1056516295153],[15803.647450843759,3395.1056516295153],[15728.647450843759,3358.7785252292474],[15700,3300],[15728.647450843759,3241.2214747707526],[15803.647450843759,3204.8943483704847],[15896.352549156241,3204.8943483704847],[15971.352549156241,3241.2214747707526]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(15850,3300,150,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{type:[2,[],[0]],points:[[14300,3300],[14500,4000],[14300,4000]],most:{"left":7150,"right":7250,"top":1650,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14800,3000],[15200,3000],[15000,3300]],most:{"left":7400,"right":7600,"top":1500,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,3700],[15200,4000],[14800,4000]],most:{"left":7400,"right":7600,"top":1850,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:4000,w:1200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15850,y:6000,w:1200,h:1000,canJump:true,inView:false,})
C(2,[],[12],{type:[2,[],[12]],points:[[17000,3600],[17000,4000],[16600,4000]],tpx:16100,tpy:5900,most:{"left":8300,"right":8500,"top":1800,"bottom":2000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[16600,3000],[17000,3000],[17000,3400]],tpx:16100,tpy:5900,most:{"left":8300,"right":8500,"top":1500,"bottom":1700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:8000,w:1200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:10000,w:1200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:12000,w:1200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:14000,w:1200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:10950,w:450,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:10900,w:450,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:11800,w:450,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:11800,w:450,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16200,y:11400,w:600,h:200,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16400,y:11800,w:200,h:200,tpx:16500,tpy:13500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16000,y:13900,w:1000,h:100,tpx:16100,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:16000,y:11200,w:200,h:200,points:[[8000,5600],[8200,5600]],speed:150,currentPoint:0.49375,pointOn:{"x":8000,"y":5600},pointTo:{"x":8200,"y":5600},xv:150,yv:0,inView:false,path:[[16000,11200,5],[16400,11200,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16400,y:11200,w:200,h:200,points:[[8200,5600],[8400,5600]],speed:150,currentPoint:0.49375,pointOn:{"x":8200,"y":5600},pointTo:{"x":8400,"y":5600},xv:150,yv:0,inView:false,path:[[16400,11200,5],[16800,11200,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16800,y:11200,w:200,h:200,points:[[8400,5600],[8400,5800]],speed:150,currentPoint:0.49375,pointOn:{"x":8400,"y":5600},pointTo:{"x":8400,"y":5800},xv:9.184850993605149e-15,yv:150,inView:false,path:[[16800,11200,5],[16800,11600,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16800,y:11600,w:200,h:200,points:[[8400,5800],[8200,5800]],speed:150,currentPoint:0.49375,pointOn:{"x":8400,"y":5800},pointTo:{"x":8200,"y":5800},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[16800,11600,5],[16400,11600,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16400,y:11600,w:200,h:200,points:[[8200,5800],[8000,5800]],speed:150,currentPoint:0.49375,pointOn:{"x":8200,"y":5800},pointTo:{"x":8000,"y":5800},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[16400,11600,5],[16000,11600,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:16000,y:11600,w:200,h:200,points:[[8000,5800],[8000,5600]],speed:150,currentPoint:0.49375,pointOn:{"x":8000,"y":5800},pointTo:{"x":8000,"y":5600},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[16000,11600,5],[16000,11200,5]],})
C(2,[],[1],{type:[2,[],[1]],points:[[4100,16900],[9400,16900],[9500,17000],[4000,17000]],most:{"left":2000,"right":4750,"top":8450,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,16000],[9500,16000],[9400,16100],[4100,16100]],most:{"left":2000,"right":4750,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10000,y:16400,w:500,h:200,angle:6910.125,rotateSpeed:0.012878787878787878,pivotX:10000,pivotY:16500,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:259.6291201783626,unSim:4.433333333333343,inView:false,initialRotation:120.60443297437317,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,15100],[16150,15250],[16000,15400]],most:{"left":8000,"right":8075,"top":7550,"bottom":7700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[16200,15400],[16200,15700],[16050,15550]],most:{"left":8025,"right":8100,"top":7700,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16000,15700],[16050,15900],[16000,15900]],most:{"left":8000,"right":8025,"top":7850,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16200,15700],[16200,15900],[16150,15900]],most:{"left":8075,"right":8100,"top":7850,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16800,15500],[16850,15600],[16800,15700]],most:{"left":8400,"right":8425,"top":7750,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17000,15500],[17000,15700],[16950,15600]],most:{"left":8475,"right":8500,"top":7750,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16900,15250],[16950,15350],[16900,15450],[16850,15350]],most:{"left":8425,"right":8475,"top":7625,"bottom":7725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16900,15750],[16950,15850],[16900,15950],[16850,15850]],most:{"left":8425,"right":8475,"top":7875,"bottom":7975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16800,15950],[16825,16000],[16800,16000]],most:{"left":8400,"right":8412.5,"top":7975,"bottom":8000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17000,15950],[17000,16000],[16975,16000]],most:{"left":8487.5,"right":8500,"top":7975,"bottom":8000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16200,y:14950,w:200,h:1100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:10000,y:16400,w:500,h:200,angle:20730.375,rotateSpeed:0.03863636363636364,pivotX:10000,pivotY:16500,distToPivot:125,canCollide:true,renderType:"rotating",cullingRadius:259.6291201783626,unSim:4.433333333333343,inView:false,initialRotation:361.8132989231195,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:10000,y:16500,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:16000,y:15100,w:200,h:900,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:16400,y:15100,w:200,h:900,maxStrength:62,currentStrength:62,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[14750,16500],[15250,17000],[14250,17000]],most:{"left":7125,"right":7625,"top":8250,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:13150,y:16800,radius:200,startAngle:1.5707963267948966,endAngle:3.0543261909900763,startPolygon:{"points":[[6575,8500],[6575,8600]],"type":"poly","props":{}},endPolygon:{"points":[[6475.380530190825,8408.715574274765],[6375.761060381651,8417.431148549531]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:1.5707963267948966,endSliceAngle:3.0543261909900763,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:12750,y:16850,w:150,h:250,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[12404,16696],[12750,16850],[12750,17000],[12150,17000]],most:{"left":6075,"right":6375,"top":8348,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12076,16736],[12350,16800],[12350,17000],[11750,17000]],most:{"left":5875,"right":6175,"top":8368,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11712,16608],[12000,16800],[12000,17000],[11300,17000]],most:{"left":5650,"right":6000,"top":8304,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11190,16534],[11600,16800],[11600,17000],[10900,17000]],most:{"left":5450,"right":5800,"top":8267,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13500,16700],[14000,17000],[13250,17000]],most:{"left":6625,"right":7000,"top":8350,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:14150,y:17000,r:364,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[12850,16700],[12948,16818],[12732,16850]],most:{"left":6366,"right":6474,"top":8350,"bottom":8425},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10700,16600],[10900,16600],[11300,17000],[10500,17000]],most:{"left":5250,"right":5650,"top":8300,"bottom":8500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[27],{type:[1,[],[27]],x:10700,y:16000,w:200,h:600,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[0],{type:[1,[],[0]],x:12900,y:16900,w:600,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[13150,16700],[13350,16900],[12982,16900]],most:{"left":6491,"right":6675,"top":8350,"bottom":8450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10500,16000],[10900,16000],[10700,16400]],most:{"left":5250,"right":5450,"top":8000,"bottom":8200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:12450,y:16550,w:400,h:100,angle:16584.29999999565,rotateSpeed:0.030909090909090907,pivotX:12650,pivotY:16600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:289.4506391384196,})
C(2,[],[0],{type:[2,[],[0]],points:[[12150,16100],[12300,16300],[12000,16300]],most:{"left":6000,"right":6150,"top":8050,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11750,16100],[11900,16300],[11600,16300]],most:{"left":5800,"right":5950,"top":8050,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12600,16100],[12700,16100],[12700,16300],[12400,16300]],most:{"left":6200,"right":6350,"top":8050,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:12700,y:16100,w:200,h:200,points:[[6350,8050],[6550,8050]],speed:150,currentPoint:0.49375,alongWith:false,pointOn:{"x":6350,"y":8050},pointTo:{"x":6550,"y":8050},xv:150,yv:0,inView:false,path:[[12700,16100,5],[13100,16100,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13100,y:16100,w:200,h:200,points:[[6550,8050],[6750,8050]],speed:150,currentPoint:1.49375,alongWith:false,pointOn:{"x":6750,"y":8050},pointTo:{"x":6550,"y":8050},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13100,16100,5],[13500,16100,5]],})
C(1,[],[0],{type:[1,[],[0]],x:13700,y:16100,w:700,h:200,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14400,y:16200,w:350,h:100,tpx:9650,tpy:10350,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:15950,w:650,h:350,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,16150],[14550,16300],[14400,16300]],most:{"left":7200,"right":7275,"top":8075,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14700,16150],[14700,16300],[14550,16300]],most:{"left":7275,"right":7350,"top":8075,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[14600,16000],[14700,16000],[14700,16100]],most:{"left":7300,"right":7350,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:10100,w:50,h:500,tpx:12000,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9850,y:10100,w:50,h:500,tpx:12000,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:10550,w:500,h:50,tpx:12000,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9400,y:10100,w:500,h:50,tpx:12000,tpy:16700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:10400,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:10250,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9550,y:10250,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:9700,y:10250,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:10400,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9600,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:10400,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9700,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9600,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9800,y:10300,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9700,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:9500,y:10300,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
shared.morphsTriggered[6]=false;var x6=4800;C(1,[],[0],{y:16400,x:4800,w:200,h:200,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x6, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[6] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[6] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[6] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[6]=false;C(1,[],[3],{h:200,w:200,y:16400,x:4200,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[6] === true) {
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
                shared.morphsTriggered[6] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[6] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[0],[12],{type:[1,[0],[12]],x:5200,y:16200,w:200,h:200,points:[[2600,8100],[2600,8300]],speed:82,currentPoint:0.776583333292765,tpx:3500,tpy:16500,pointOn:{"x":2600,"y":8100},pointTo:{"x":2600,"y":8300},xv:5.021051876504148e-15,yv:82,inView:false,path:[[5200,16200,2.7333333333333334],[5200,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:5250,y:16250,w:100,h:100,points:[[2625,8125],[2625,8325]],speed:82,currentPoint:0.7765833332818601,collidable:true,pointOn:{"x":2625,"y":8125},pointTo:{"x":2625,"y":8325},xv:5.021051876504148e-15,yv:82,inView:false,path:[[5250,16250,2.7333333333333334],[5250,16650,2.7333333333333334]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,16250],[4950,16250],[5000,16300],[4950,16350],[4050,16350],[4000,16300]],most:{"left":2000,"right":2500,"top":8125,"bottom":8175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,16650],[4950,16650],[5000,16700],[4950,16750],[4050,16750],[4000,16700]],most:{"left":2000,"right":2500,"top":8325,"bottom":8375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9500,y:15200,w:300,h:300,angle:-12284.666666664434,rotateSpeed:-0.0228956228956229,pivotX:9650,pivotY:15350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:-214.4078808432911,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9500,y:15500,w:300,h:300,angle:-12284.666666664434,rotateSpeed:-0.0228956228956229,pivotX:9650,pivotY:15650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:-214.4078808432911,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:9500,y:15800,w:300,h:300,angle:-12284.666666664434,rotateSpeed:-0.0228956228956229,pivotX:9650,pivotY:15950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:-214.4078808432911,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10200,y:15200,w:300,h:300,angle:12284.666666664434,rotateSpeed:0.0228956228956229,pivotX:10350,pivotY:15350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:214.4078808432911,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10200,y:15500,w:300,h:300,angle:12284.666666664434,rotateSpeed:0.0228956228956229,pivotX:10350,pivotY:15650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:214.4078808432911,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:10200,y:15800,w:300,h:300,angle:12284.666666664434,rotateSpeed:0.0228956228956229,pivotX:10350,pivotY:15950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:4.433333333333343,inView:false,initialRotation:214.4078808432911,boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:5400,y:16200,w:200,h:200,points:[[2700,8100],[2700,8300]],speed:82,currentPoint:1.776583333292474,tpx:3500,tpy:16500,pointOn:{"x":2700,"y":8300},pointTo:{"x":2700,"y":8100},xv:5.021051876504148e-15,yv:-82,inView:false,path:[[5400,16200,2.7333333333333334],[5400,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:5450,y:16250,w:100,h:100,points:[[2725,8125],[2725,8325]],speed:82,currentPoint:1.7765833332815646,collidable:true,pointOn:{"x":2725,"y":8325},pointTo:{"x":2725,"y":8125},xv:5.021051876504148e-15,yv:-82,inView:false,path:[[5450,16250,2.7333333333333334],[5450,16650,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:5600,y:16200,w:200,h:200,points:[[2800,8100],[2800,8300]],speed:82,currentPoint:0.776583333292765,tpx:3500,tpy:16500,pointOn:{"x":2800,"y":8100},pointTo:{"x":2800,"y":8300},xv:5.021051876504148e-15,yv:82,inView:false,path:[[5600,16200,2.7333333333333334],[5600,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:5650,y:16250,w:100,h:100,points:[[2825,8125],[2825,8325]],speed:82,currentPoint:0.7765833332818601,collidable:true,pointOn:{"x":2825,"y":8125},pointTo:{"x":2825,"y":8325},xv:5.021051876504148e-15,yv:82,inView:false,path:[[5650,16250,2.7333333333333334],[5650,16650,2.7333333333333334]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:6200,y:16400,w:200,h:200,tpx:3500,tpy:16500,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:6250,y:16450,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:6000,y:16200,w:200,h:200,points:[[3000,8100],[3200,8100],[3200,8300],[3000,8300]],speed:82,currentPoint:0.7765833333161026,tpx:3500,tpy:16500,pointOn:{"x":3000,"y":8100},pointTo:{"x":3200,"y":8100},xv:82,yv:0,inView:false,path:[[6000,16200,2.7333333333333334],[6400,16200,2.7333333333333334],[6400,16600,2.7333333333333334],[6000,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6050,y:16250,w:100,h:100,points:[[3025,8125],[3225,8125],[3225,8325],[3025,8325]],speed:82,currentPoint:0.7765833333108276,collidable:true,pointOn:{"x":3025,"y":8125},pointTo:{"x":3225,"y":8125},xv:82,yv:0,inView:false,path:[[6050,16250,2.7333333333333334],[6450,16250,2.7333333333333334],[6450,16650,2.7333333333333334],[6050,16650,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:6000,y:16200,w:200,h:200,points:[[3000,8100],[3200,8100],[3200,8300],[3000,8300]],speed:82,currentPoint:2.77658333331608,tpx:3500,tpy:16500,pointOn:{"x":3200,"y":8300},pointTo:{"x":3000,"y":8300},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6000,16200,2.7333333333333334],[6400,16200,2.7333333333333334],[6400,16600,2.7333333333333334],[6000,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6050,y:16250,w:100,h:100,points:[[3025,8125],[3225,8125],[3225,8325],[3025,8325]],speed:82,currentPoint:2.776583333310841,collidable:true,pointOn:{"x":3225,"y":8325},pointTo:{"x":3025,"y":8325},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6050,16250,2.7333333333333334],[6450,16250,2.7333333333333334],[6450,16650,2.7333333333333334],[6050,16650,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:6800,y:16200,w:200,h:200,points:[[3400,8100],[3700,8100]],speed:82,currentPoint:1.1843888888927208,tpx:3500,tpy:16500,pointOn:{"x":3700,"y":8100},pointTo:{"x":3400,"y":8100},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6800,16200,2.7333333333333334],[7400,16200,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6850,y:16250,w:100,h:100,points:[[3425,8125],[3725,8125]],speed:82,currentPoint:1.1843888888927208,collidable:true,pointOn:{"x":3725,"y":8125},pointTo:{"x":3425,"y":8125},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6850,16250,2.7333333333333334],[7450,16250,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:6800,y:16400,w:200,h:200,points:[[3400,8200],[3700,8200]],speed:82,currentPoint:0.1843888888927207,tpx:3500,tpy:16500,pointOn:{"x":3400,"y":8200},pointTo:{"x":3700,"y":8200},xv:82,yv:0,inView:false,path:[[6800,16400,2.7333333333333334],[7400,16400,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6850,y:16450,w:100,h:100,points:[[3425,8225],[3725,8225]],speed:82,currentPoint:0.1843888888927207,collidable:true,pointOn:{"x":3425,"y":8225},pointTo:{"x":3725,"y":8225},xv:82,yv:0,inView:false,path:[[6850,16450,2.7333333333333334],[7450,16450,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:6800,y:16600,w:200,h:200,points:[[3400,8300],[3700,8300]],speed:82,currentPoint:1.1843888888927208,tpx:3500,tpy:16500,pointOn:{"x":3700,"y":8300},pointTo:{"x":3400,"y":8300},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6800,16600,2.7333333333333334],[7400,16600,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6850,y:16650,w:100,h:100,points:[[3425,8325],[3725,8325]],speed:82,currentPoint:1.1843888888927208,collidable:true,pointOn:{"x":3725,"y":8325},pointTo:{"x":3425,"y":8325},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6850,16650,2.7333333333333334],[7450,16650,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:7800,y:16200,w:200,h:200,points:[[3900,8100],[4400,8100],[4400,8200],[3900,8200]],speed:222,currentPoint:0.5483000000080083,tpx:3500,tpy:16500,pointOn:{"x":3900,"y":8100},pointTo:{"x":4400,"y":8100},xv:222,yv:0,inView:false,path:[[7800,16200,7.4],[8800,16200,7.4],[8800,16400,7.4],[7800,16400,7.4]],})
C(1,[0],[12],{type:[1,[0],[12]],x:7800,y:16400,w:200,h:200,points:[[3900,8200],[3900,8300],[4400,8300],[4400,8200]],speed:222,currentPoint:1.5483000000080738,tpx:3500,tpy:16500,pointOn:{"x":3900,"y":8300},pointTo:{"x":4400,"y":8300},xv:222,yv:0,inView:false,path:[[7800,16400,7.4],[7800,16600,7.4],[8800,16600,7.4],[8800,16400,7.4]],})
C(1,[0],[1],{type:[1,[0],[1]],x:7850,y:16250,w:100,h:100,points:[[3925,8125],[4425,8125],[4425,8225],[3925,8225]],speed:222,currentPoint:0.5483000000088396,collidable:true,pointOn:{"x":3925,"y":8125},pointTo:{"x":4425,"y":8125},xv:222,yv:0,inView:false,path:[[7850,16250,7.4],[8850,16250,7.4],[8850,16450,7.4],[7850,16450,7.4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7850,y:16450,w:100,h:100,points:[[3925,8225],[3925,8325],[4425,8325],[4425,8225]],speed:222,currentPoint:1.5483000000088396,collidable:true,pointOn:{"x":3925,"y":8325},pointTo:{"x":4425,"y":8325},xv:222,yv:0,inView:false,path:[[7850,16450,7.4],[7850,16650,7.4],[8850,16650,7.4],[8850,16450,7.4]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[15200,14200],[15200,15200],[14200,15200]],most:{"left":7100,"right":7600,"top":7100,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,13200],[14700,13700],[14200,14200]],most:{"left":7100,"right":7350,"top":6600,"bottom":7100},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:15200,y:14000,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:14000,w:250,h:450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14200,y:12400,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15200,y:12400,r:100,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,9750],[14400,9750],[14600,9900],[14400,10050],[14200,10050]],most:{"left":7100,"right":7300,"top":4875,"bottom":5025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,9750],[15200,9750],[15200,10050],[15000,10050],[14800,9900]],most:{"left":7400,"right":7600,"top":4875,"bottom":5025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,10050],[14400,10050],[14300,10200],[14200,10200]],most:{"left":7100,"right":7200,"top":5025,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,9500],[14300,9600],[14400,9750],[14200,9750]],most:{"left":7100,"right":7200,"top":4750,"bottom":4875},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15200,9500],[15200,9750],[15000,9750],[15100,9600]],most:{"left":7500,"right":7600,"top":4750,"bottom":4875},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:14700,y:9450,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:9100,w:200,h:200,points:[[7300,4550],[7425,4675],[7300,4800],[7175,4675]],speed:150,currentPoint:2.0603746451112093,alongWith:false,pointOn:{"x":7300,"y":4800},pointTo:{"x":7175,"y":4675},xv:-106.06601717798212,yv:-106.06601717798213,inView:false,path:[[14600,9100,5],[14850,9350,5],[14600,9600,5],[14350,9350,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:9100,w:200,h:200,points:[[7300,4550],[7175,4675],[7300,4800],[7425,4675]],speed:150,currentPoint:2.0603746451112093,alongWith:false,pointOn:{"x":7300,"y":4800},pointTo:{"x":7425,"y":4675},xv:106.06601717798213,yv:-106.06601717798212,inView:false,path:[[14600,9100,5],[14350,9350,5],[14600,9600,5],[14850,9350,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:9100,w:200,h:200,points:[[7300,4550],[7175,4675],[7300,4800],[7425,4675]],speed:150,currentPoint:0.06037464511120925,alongWith:false,pointOn:{"x":7300,"y":4550},pointTo:{"x":7175,"y":4675},xv:-106.06601717798212,yv:106.06601717798213,inView:false,path:[[14600,9100,5],[14350,9350,5],[14600,9600,5],[14850,9350,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:9100,w:200,h:200,points:[[7300,4550],[7425,4675],[7300,4800],[7175,4675]],speed:150,currentPoint:0.06037464511120925,alongWith:false,pointOn:{"x":7300,"y":4550},pointTo:{"x":7425,"y":4675},xv:106.06601717798213,yv:106.06601717798212,inView:false,path:[[14600,9100,5],[14850,9350,5],[14600,9600,5],[14350,9350,5]],})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,8750],[14600,8900],[14200,9050]],most:{"left":7100,"right":7300,"top":4375,"bottom":4525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15200,8750],[15200,9050],[14800,8900]],most:{"left":7400,"right":7600,"top":4375,"bottom":4525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,7500],[14700,8100],[14800,8300],[14200,8500]],most:{"left":7100,"right":7400,"top":3750,"bottom":4250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,5800],[14600,5800],[14200,6700]],most:{"left":7100,"right":7300,"top":2900,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14800,5800],[15200,5800],[15200,6700]],most:{"left":7400,"right":7600,"top":2900,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:5800,w:1050,h:400,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[14200,6700],[14600,6900],[14200,7500]],most:{"left":7100,"right":7300,"top":3350,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15200,6700],[15200,8300],[14900,8100],[14400,7500],[14800,6900]],most:{"left":7200,"right":7600,"top":3350,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14600,8600],[14800,8600],[14700,8750]],most:{"left":7300,"right":7400,"top":4300,"bottom":4375},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[12600,6600],[13400,6600],[13400,7400]],most:{"left":6300,"right":6700,"top":3300,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12600,7400],[13200,8000],[12600,9650]],most:{"left":6300,"right":6600,"top":3700,"bottom":4825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13400,8300],[13400,9900],[12950,9650]],most:{"left":6475,"right":6700,"top":4150,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12600,10000],[12850,10150],[12600,10300]],most:{"left":6300,"right":6425,"top":5000,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10300],[13300,10500],[12950,10600]],most:{"left":6475,"right":6650,"top":5150,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,9800],[13300,10050],[12950,9900]],most:{"left":6475,"right":6650,"top":4900,"bottom":5025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12800,10800],[12950,10950],[12700,11050]],most:{"left":6350,"right":6475,"top":5400,"bottom":5525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13250,11000],[13300,11350],[13050,11150]],most:{"left":6525,"right":6650,"top":5500,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,13200],[5200,14200],[4800,14200]],most:{"left":2400,"right":2600,"top":6600,"bottom":7100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,13200],[5800,14200],[5400,14200]],most:{"left":2700,"right":2900,"top":6600,"bottom":7100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,12700],[5700,13100],[5300,14100],[4900,13100]],most:{"left":2450,"right":2850,"top":6350,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,12200],[5200,12600],[4800,13000]],most:{"left":2400,"right":2600,"top":6100,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,12200],[5800,13000],[5400,12600]],most:{"left":2700,"right":2900,"top":6100,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4900,12100],[5700,12100],[5300,12500]],most:{"left":2450,"right":2850,"top":6050,"bottom":6250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:11500,w:450,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:11550,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:11600,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:11700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4850,y:11600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:11500,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5750,y:11550,w:100,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:11550,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:11600,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:11650,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,11000],[5200,11500],[4800,11500]],most:{"left":2400,"right":2600,"top":5500,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,11000],[5800,11500],[5400,11500]],most:{"left":2700,"right":2900,"top":5500,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:5300,y:10800,radius:350,startAngle:3.141592653589793,endAngle:0,startPolygon:{"points":[[2400,5400],[2300,5400]],"type":"poly","props":{}},endPolygon:{"points":[[2900,5400],[3000,5400]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:700,startSliceAngle:3.141592653589793,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:10100,w:1100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:10200,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:10200,w:200,h:150,canJump:true,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:4850,y:10800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:5750,y:10800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:5300,y:10350,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{type:[0,[],[0]],x:5300,y:10800,r:400,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5200,10850],[5200,11350],[4900,10950]],most:{"left":2450,"right":2600,"top":5425,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5700,10800],[5400,11350],[5400,11050]],most:{"left":2700,"right":2850,"top":5400,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:10800,w:100,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5400,10850],[5700,10950],[5400,11350]],most:{"left":2700,"right":2850,"top":5425,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:10800,w:100,h:150,canJump:true,inView:false,})
C(1,[],[20],{x:4850,y:14250,w:900,h:900,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(4,[],[0],{type:[4,[],[0]],x:4800,y:9300,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2400,4650],[2400,4350]],"type":"poly","props":{}},endPolygon:{"points":[[2400,4650],[2400,4950]],"type":"poly","props":{}},renderType:"circle",inView:false,r:600,innerRadius:0,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:4800,y:9300,radius:500,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2400,4250],[2400,4150]],"type":"poly","props":{}},endPolygon:{"points":[[2400,5050],[2400,5150]],"type":"poly","props":{}},innerRadius:800,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:1000,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:8300,w:250,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:8300,w:1000,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:8350,w:450,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:8600,w:250,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5550,y:9750,w:150,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5350,y:9900,w:300,h:250,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,8000],[5300,8300],[4800,8300]],most:{"left":2400,"right":2650,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,8000],[5800,8300],[5300,8300]],most:{"left":2650,"right":2900,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,5800],[5100,5800],[4800,6300]],most:{"left":2400,"right":2550,"top":2900,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,5800],[5800,5800],[5800,6300]],most:{"left":2750,"right":2900,"top":2900,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,5800],[5600,6300],[5300,6800],[5000,6300]],most:{"left":2500,"right":2800,"top":2900,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,6300],[5100,6800],[4800,7200]],most:{"left":2400,"right":2550,"top":3150,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5800,6300],[5800,7200],[5500,6800]],most:{"left":2750,"right":2900,"top":3150,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:4400,y:6900,w:800,h:800,angle:-12591.783333328467,rotateSpeed:-0.023468013468013468,pivotX:4800,pivotY:7300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:282.842712474619,unSim:4.433333333333343,inView:false,initialRotation:-219.76807786432838,})
C(1,[1],[0],{type:[1,[1],[0]],x:5400,y:6900,w:800,h:800,angle:12591.783333328467,rotateSpeed:0.023468013468013468,pivotX:5800,pivotY:7300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:282.842712474619,unSim:4.433333333333343,inView:false,initialRotation:219.76807786432838,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,7600],[5700,7850],[5300,8100],[4900,7850]],most:{"left":2450,"right":2850,"top":3800,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,15100],[17000,15100],[17000,15200]],most:{"left":8475,"right":8500,"top":7550,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16800,15100],[16850,15100],[16800,15200]],most:{"left":8400,"right":8425,"top":7550,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:16800,y:15100,w:200,h:900,maxStrength:62,currentStrength:62,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
var minX10187, minY10187, maxX10187, maxY10187;
    minX10187 = 9300;minY10187 = 5900;maxX10187 = 10700;maxY10187 = 6700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10187) && (player.pos.x) < md(maxX10187) && (player.pos.y) > md(minY10187) && (player.pos.y) < md(maxY10187)) {
            colors.background="#c39e22"; colors.tile="#56430b";
        }
    },});
var minX10188, minY10188, maxX10188, maxY10188;
    minX10188 = 8900;minY10188 = 1500;maxX10188 = 11100;maxY10188 = 3100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10188) && (player.pos.x) < md(maxX10188) && (player.pos.y) > md(minY10188) && (player.pos.y) < md(maxY10188)) {
            colors.background="#c39e22"; colors.tile="#7e6006";
        }
    },});
var minX10189, minY10189, maxX10189, maxY10189;
    minX10189 = 9400;minY10189 = 14100;maxX10189 = 10600;maxY10189 = 15300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10189) && (player.pos.x) < md(maxX10189) && (player.pos.y) > md(minY10189) && (player.pos.y) < md(maxY10189)) {
            colors.background="#c39e22"; colors.tile="#6a5108";
        }
    },});
C(4,[],[0],{type:[4,[],[0]],x:7400,y:7400,radius:600,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[3300,3700],[3100,3700]],"type":"poly","props":{}},endPolygon:{"points":[[3700,3300],[3700,3100]],"type":"poly","props":{}},innerRadius:800,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:1200,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,12600],[7400,13400],[6600,13400]],most:{"left":3300,"right":3700,"top":6300,"bottom":6700},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:7200,y:7800,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6800,y:7800,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:7700,w:400,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,8000],[6900,8150],[6600,8300]],most:{"left":3300,"right":3450,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7400,8000],[7400,8300],[7100,8150]],most:{"left":3550,"right":3700,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,8350],[7200,8500],[7100,8700],[7000,8800],[6900,8700],[6800,8500]],most:{"left":3400,"right":3600,"top":4175,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:7000,y:8550,radius:300,startAngle:1.8325957145940461,endAngle:3.141592653589793,startPolygon:{"points":[[3448.236190979496,4468.185165257813],[3422.3542864692436,4564.77774788672]],"type":"poly","props":{}},endPolygon:{"points":[[3300,4275],[3200,4275]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.8325957145940461,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:7000,y:8550,radius:300,startAngle:0,endAngle:1.3089969389957472,startPolygon:{"points":[[3700,4275],[3800,4275]],"type":"poly","props":{}},endPolygon:{"points":[[3551.763809020504,4468.185165257813],[3577.6457135307564,4564.77774788672]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:1.3089969389957472,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:6542,y:8942,w:304,h:194,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7158,y:8936,w:304,h:194,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,9100],[6844,9136],[6600,9300]],most:{"left":3300,"right":3422,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7400,9100],[7400,9300],[7160,9130]],most:{"left":3580,"right":3700,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:6800,y:9600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7200,y:9600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:9500,w:400,h:200,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,9350],[7200,9500],[6800,9500]],most:{"left":3400,"right":3600,"top":4675,"bottom":4750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6800,9700],[7200,9700],[7000,9850]],most:{"left":3400,"right":3600,"top":4850,"bottom":4925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:6400,y:10000,w:200,h:200,points:[[3200,5000],[3700,5000]],speed:102,currentPoint:0.23029999999655137,alongWith:false,pointOn:{"x":3200,"y":5000},pointTo:{"x":3700,"y":5000},xv:102,yv:0,inView:false,path:[[6400,10000,3.4],[7400,10000,3.4]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6400,y:10000,w:200,h:200,points:[[3200,5000],[3700,5000]],speed:102,currentPoint:1.2302999999965514,alongWith:false,pointOn:{"x":3700,"y":5000},pointTo:{"x":3200,"y":5000},xv:-102,yv:1.2491397351303002e-14,inView:false,path:[[6400,10000,3.4],[7400,10000,3.4]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6000,y:10400,w:400,h:200,points:[[3000,5200],[3300,5200]],speed:82,currentPoint:1.1843888888927208,alongWith:false,pointOn:{"x":3300,"y":5200},pointTo:{"x":3000,"y":5200},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6000,10400,2.7333333333333334],[6600,10400,2.7333333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:7000,y:10400,w:400,h:200,points:[[3500,5200],[3800,5200]],speed:82,currentPoint:1.1843888888927208,alongWith:false,pointOn:{"x":3800,"y":5200},pointTo:{"x":3500,"y":5200},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[7000,10400,2.7333333333333334],[7600,10400,2.7333333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6000,y:10400,w:400,h:200,points:[[3000,5200],[3300,5200]],speed:82,currentPoint:1.1843888888927208,alongWith:false,pointOn:{"x":3300,"y":5200},pointTo:{"x":3000,"y":5200},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6000,10400,2.7333333333333334],[6600,10400,2.7333333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6000,y:11100,w:400,h:200,points:[[3000,5550],[3300,5550]],speed:82,currentPoint:0.1843888888927207,alongWith:false,pointOn:{"x":3000,"y":5550},pointTo:{"x":3300,"y":5550},xv:82,yv:0,inView:false,path:[[6000,11100,2.7333333333333334],[6600,11100,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6400,y:11100,w:200,h:200,points:[[3200,5550],[3500,5550]],speed:82,currentPoint:0.1843888888927207,collidable:true,pointOn:{"x":3200,"y":5550},pointTo:{"x":3500,"y":5550},xv:82,yv:0,inView:false,path:[[6400,11100,2.7333333333333334],[7000,11100,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:7000,y:11100,w:400,h:200,points:[[3500,5550],[3800,5550]],speed:82,currentPoint:0.1843888888927207,alongWith:false,pointOn:{"x":3500,"y":5550},pointTo:{"x":3800,"y":5550},xv:82,yv:0,inView:false,path:[[7000,11100,2.7333333333333334],[7600,11100,2.7333333333333334]],})
C(1,[0],[1],{type:[1,[0],[1]],x:6800,y:11100,w:200,h:200,points:[[3400,5550],[3700,5550]],speed:82,currentPoint:0.1843888888927207,collidable:true,pointOn:{"x":3400,"y":5550},pointTo:{"x":3700,"y":5550},xv:82,yv:0,inView:false,path:[[6800,11100,2.7333333333333334],[7400,11100,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6400,y:10400,w:200,h:200,points:[[3200,5200],[3500,5200]],speed:82,currentPoint:1.1843888888927208,collidable:true,pointOn:{"x":3500,"y":5200},pointTo:{"x":3200,"y":5200},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6400,10400,2.7333333333333334],[7000,10400,2.7333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6800,y:10400,w:200,h:200,points:[[3400,5200],[3700,5200]],speed:82,currentPoint:1.1843888888927208,collidable:true,pointOn:{"x":3700,"y":5200},pointTo:{"x":3400,"y":5200},xv:-82,yv:1.0042103753008296e-14,inView:false,path:[[6800,10400,2.7333333333333334],[7400,10400,2.7333333333333334]],boundPlayer:true,})
C(2,[],[0],{x:0,y:0,points:[[7200,10800],[7161.803398874989,10858.778525229247],[7061.803398874989,10895.105651629516],[6938.196601125011,10895.105651629516],[6838.196601125011,10858.778525229247],[6800,10800],[6838.196601125011,10741.221474770753],[6938.196601125011,10704.894348370484],[7061.803398874989,10704.894348370484],[7161.803398874989,10741.221474770753]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(7000,10800,200,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(0,[],[0],{type:[0,[],[0]],x:6600,y:10800,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7400,y:10800,r:100,renderType:"circle",inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:6275,y:12000,w:650,h:200,angle:14741.599999995356,rotateSpeed:0.027474747474747475,pivotX:6600,pivotY:12100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:170.01838135919303,unSim:4.433333333333343,inView:false,initialRotation:257.28945701191503,})
C(1,[1],[1],{type:[1,[1],[1]],x:7075,y:12000,w:650,h:200,angle:-14741.599999995356,rotateSpeed:-0.027474747474747475,pivotX:7400,pivotY:12100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:170.01838135919303,unSim:4.433333333333343,inView:false,initialRotation:-257.28945701191503,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6275,y:12000,w:650,h:200,angle:14831.599999995276,rotateSpeed:0.027474747474747475,pivotX:6600,pivotY:12100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:170.01838135919303,unSim:4.433333333333343,inView:false,initialRotation:258.8602533387085,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:11500,w:400,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7400,12400],[7400,12600],[7200,12500]],most:{"left":3600,"right":3700,"top":6200,"bottom":6300},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:7150,y:12750,r:150,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:6950,y:12700,w:400,h:100,angle:-17198.533333327166,rotateSpeed:-0.03205387205387205,pivotX:7150,pivotY:12750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:-300.17103318055445,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7050,y:7100,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
var timer10190 = 2.0083333333337405; var state10190 =false; var x10190 = 13900; 
    C(1,[],[0],{h:200,w:500,y:19800,x:-1000000000,sf:(e)=>{
            timer10190 -= 1 / 60;
            if(timer10190 < 0){
                state10190 = !state10190;
                if(state10190 === true){
                    // on
                    timer10190 += 2;
                    e.pos.x = x10190;
                } else {
                    // off
                    timer10190 += 3;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10190) {
                if (timer10190 < 0.2 && 2 > 0.2) {
                    ctx.globalAlpha = timer10190 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10190 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10190 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10190, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[1],[0],{type:[1,[1],[0]],x:7075,y:12000,w:650,h:200,angle:-14651.59999999544,rotateSpeed:-0.027474747474747475,pivotX:7400,pivotY:12100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:170.01838135919303,unSim:4.433333333333343,inView:false,initialRotation:-255.7186606851216,})
C(2,[],[0],{type:[2,[],[0]],points:[[9400,4800],[10600,4800],[10000,5800]],most:{"left":4700,"right":5300,"top":2400,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:4000,w:12000,h:800,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:10600,y:5100,w:3600,h:400,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(2,[],[0],{type:[2,[],[0]],points:[[14000,5100],[14200,5100],[14200,5500],[14000,5500],[13800,5300]],most:{"left":6900,"right":7100,"top":2550,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13200,5100],[13400,5300],[13200,5500],[13000,5300]],most:{"left":6500,"right":6700,"top":2550,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12400,5100],[12600,5300],[12400,5500],[12200,5300]],most:{"left":6100,"right":6300,"top":2550,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11600,5100],[11800,5300],[11600,5500],[11400,5300]],most:{"left":5700,"right":5900,"top":2550,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,5100],[10800,5100],[11000,5300],[10800,5500],[10600,5500]],most:{"left":5300,"right":5500,"top":2550,"bottom":2750},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:5800,y:5200,w:1000,h:200,angle:8138.591666665749,rotateSpeed:0.01516835016835017,pivotX:6300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:142.04522105869015,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5800,y:5200,w:1000,h:200,angle:8228.59166666581,rotateSpeed:0.01516835016835017,pivotX:6300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:143.61601738548612,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6800,y:5200,w:1000,h:200,angle:-8048.59166666576,rotateSpeed:-0.01516835016835017,pivotX:7300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-140.47442473189545,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:6800,y:5200,w:1000,h:200,angle:-8138.591666665749,rotateSpeed:-0.01516835016835017,pivotX:7300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-142.04522105869015,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7800,y:5200,w:1000,h:200,angle:8138.591666665749,rotateSpeed:0.01516835016835017,pivotX:8300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:142.04522105869015,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7800,y:5200,w:1000,h:200,angle:8183.591666665742,rotateSpeed:0.01516835016835017,pivotX:8300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:142.83061922208748,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:5200,w:1000,h:200,angle:-8138.591666665749,rotateSpeed:-0.01516835016835017,pivotX:9300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-142.04522105869015,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:5200,w:1000,h:200,angle:-8093.591666665754,rotateSpeed:-0.01516835016835017,pivotX:9300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-141.25982289529279,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5800,4800],[6000,4800],[5800,5000]],most:{"left":2900,"right":3000,"top":2400,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,4800],[7000,4800],[6800,5000]],most:{"left":3300,"right":3500,"top":2400,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6800,5600],[7000,5800],[6600,5800]],most:{"left":3300,"right":3500,"top":2800,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7800,5600],[8000,5800],[7600,5800]],most:{"left":3800,"right":4000,"top":2800,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8800,5600],[9000,5800],[8600,5800]],most:{"left":4300,"right":4500,"top":2800,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8600,4800],[9000,4800],[8800,5000]],most:{"left":4300,"right":4500,"top":2400,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,4800],[8000,4800],[7800,5000]],most:{"left":3800,"right":4000,"top":2400,"bottom":2500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5800,5600],[6000,5800],[5800,5800]],most:{"left":2900,"right":3000,"top":2800,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6300,y:5300,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7300,y:5300,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7800,y:5200,w:1000,h:200,angle:8273.591666665898,rotateSpeed:0.01516835016835017,pivotX:8300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:144.4014155488851,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:7800,y:5200,w:1000,h:200,angle:8318.591666665985,rotateSpeed:0.01516835016835017,pivotX:8300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:145.18681371228408,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8300,y:5300,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:5200,w:1000,h:200,angle:-8003.591666665767,rotateSpeed:-0.01516835016835017,pivotX:9300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-139.68902656849812,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8800,y:5200,w:1000,h:200,angle:-7958.591666665772,rotateSpeed:-0.01516835016835017,pivotX:9300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:254.95097567963924,unSim:4.433333333333343,inView:false,initialRotation:-138.90362840510076,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9300,y:5300,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14200,w:400,h:300,points:[[6150,7100],[6750,7100]],speed:161.5,currentPoint:0.5260902777911891,pointOn:{"x":6150,"y":7100},pointTo:{"x":6750,"y":7100},xv:161.5,yv:0,inView:false,path:[[12300,14200,5.383333333333334],[13500,14200,5.383333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14550,w:400,h:300,points:[[6150,7275],[6550,7275],[6750,7275]],speed:161.6,currentPoint:2.219088888878926,pointOn:{"x":6750,"y":7275},pointTo:{"x":6150,"y":7275},xv:-161.6,yv:1.9790292274221226e-14,inView:false,path:[[12300,14550,5.386666666666667],[13100,14550,5.386666666666667],[13500,14550,5.386666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14900,w:400,h:300,points:[[6150,7450],[6750,7450],[6550,7450]],speed:161.5,currentPoint:2.7891354166867837,pointOn:{"x":6550,"y":7450},pointTo:{"x":6150,"y":7450},xv:-161.5,yv:1.9778045806229755e-14,inView:false,path:[[12300,14900,5.383333333333334],[13500,14900,5.383333333333334],[13100,14900,5.383333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14500,w:1600,h:50,points:[[6150,7250],[6175,7250]],speed:0,currentPoint:0,pointOn:{"x":6150,"y":7250},pointTo:{"x":6175,"y":7250},xv:0,yv:0,inView:false,path:[[12300,14500,0],[12350,14500,0]],})
C(1,[0],[11],{type:[1,[0],[11]],x:12300,y:14850,w:1600,h:50,points:[[6150,7425],[6175,7425]],speed:0,currentPoint:0,pointOn:{"x":6150,"y":7425},pointTo:{"x":6175,"y":7425},xv:0,yv:0,inView:false,path:[[12300,14850,0],[12350,14850,0]],})
C(2,[],[1],{type:[2,[],[1]],points:[[12550,14350],[12750,14700],[12550,15050],[12350,14700]],most:{"left":6175,"right":6375,"top":7175,"bottom":7525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,14350],[13350,14700],[13150,15050],[12950,14700]],most:{"left":6475,"right":6675,"top":7175,"bottom":7525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13750,14350],[13950,14700],[13750,15050],[13550,14700]],most:{"left":6775,"right":6975,"top":7175,"bottom":7525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13450,14900],[13650,15200],[13250,15200]],most:{"left":6625,"right":6825,"top":7450,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12850,14900],[13050,15200],[12650,15200]],most:{"left":6325,"right":6525,"top":7450,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12650,14200],[13050,14200],[12850,14500]],most:{"left":6325,"right":6525,"top":7100,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13250,14200],[13650,14200],[13450,14500]],most:{"left":6625,"right":6825,"top":7100,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[3],{x:10500,y:14850,w:1600,h:50,cr:(o)=>{
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
    }});
C(1,[],[3],{x:10500,y:14500,w:1600,h:50,cr:(o)=>{
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
    }});
C(1,[0],[1],{type:[1,[0],[1]],x:10500,y:14550,w:400,h:300,points:[[5250,7275],[5650,7275],[5850,7275]],speed:323,currentPoint:2.7188472222203064,collidable:true,pointOn:{"x":5850,"y":7275},pointTo:{"x":5250,"y":7275},xv:-323,yv:3.955609161245951e-14,inView:false,path:[[10500,14550,10.766666666666667],[11300,14550,10.766666666666667],[11700,14550,10.766666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10500,y:14200,w:400,h:300,points:[[5250,7100],[5850,7100]],speed:323,currentPoint:1.0521805555536397,collidable:true,pointOn:{"x":5850,"y":7100},pointTo:{"x":5250,"y":7100},xv:-323,yv:3.955609161245951e-14,inView:false,path:[[10500,14200,10.766666666666667],[11700,14200,10.766666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:10500,y:14900,w:400,h:300,points:[[5250,7450],[5850,7450],[5650,7450]],speed:323,currentPoint:0.38551388888697297,collidable:true,pointOn:{"x":5250,"y":7450},pointTo:{"x":5850,"y":7450},xv:323,yv:0,inView:false,path:[[10500,14900,10.766666666666667],[11700,14900,10.766666666666667],[11300,14900,10.766666666666667]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12200,14350],[12300,14450],[12350,14700],[12300,14950],[12200,15050],[12100,14950],[12050,14700],[12100,14450]],most:{"left":6025,"right":6175,"top":7175,"bottom":7525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:14100,w:200,h:900,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:8550,y:14200,w:200,h:400,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:6150,y:14300,r:66,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:9950,y:8250,w:100,h:100,tpx:10350,tpy:10350,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10300,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10400,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:10200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:10300,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:10400,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10500,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10400,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10300,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:10500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:10400,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:10200,y:10300,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:10550,w:500,h:50,tpx:10200,tpy:8300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:10100,w:500,h:50,tpx:9800,tpy:8300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10550,y:10100,w:50,h:500,tpx:10200,tpy:8300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10100,y:10100,w:50,h:500,tpx:9800,tpy:8300,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:10400,y:10250,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:10250,w:50,h:200,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:10250,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:10250,y:10400,w:200,h:50,maxStrength:60,currentStrength:60,time:0,timer:0,regenTime:6.666666666666666e+100,inView:false,healSpeed:1,})
C(1,[],[26],{type:[1,[],[26]],x:9550,y:14250,w:900,h:900,musicPath:"https://www.youtube.com/watch?v=P0_kuFlM9wI",volume:1,startTime:0,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7050,y:14900,w:200,h:300,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7050,y:14200,w:200,h:300,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7800,y:14750,w:200,h:450,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7800,y:14200,w:200,h:150,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:8550,y:15000,w:200,h:200,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
var minX10191, minY10191, maxX10191, maxY10191;
    minX10191 = -100;minY10191 = 12550;maxX10191 = 950;maxY10191 = 12850;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX10191) && (player.pos.x) < md(maxX10191) && (player.pos.y) > md(minY10191) && (player.pos.y) < md(maxY10191)) {
            colors.background="#c39e22"; colors.tile="#56430b";
        }
    },});
C(1,[],[12],{type:[1,[],[12]],x:18050,y:8750,w:100,h:100,tpx:18100,tpy:1900,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:18100,y:3600,r:70,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:18000,y:8700,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[18100,8500],[18250,8700],[17950,8700]],most:{"left":8975,"right":9125,"top":4250,"bottom":4350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13050,18200],[13300,18400],[12800,18400]],most:{"left":6400,"right":6650,"top":9100,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12800,17800],[13300,17800],[13050,18000]],most:{"left":6400,"right":6650,"top":8900,"bottom":9000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15300,17800],[15800,17800],[15550,18000]],most:{"left":7650,"right":7900,"top":8900,"bottom":9000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15550,18200],[15800,18400],[15300,18400]],most:{"left":7650,"right":7900,"top":9100,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:17950,radius:62,startAngle:943.0563727237735,endAngle:943.8417708871704,startPolygon:{"points":[[875,8975],[926.9089937047404,9008.903633618851]],"type":"poly","props":{}},endPolygon:{"points":[[875,8975],[887.731712214475,9035.678690691937]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:943.0563727237735,endSliceAngle:943.8417708871704,startSliceAngleRotateSpeed:0.04974188368183839,endSliceAngleRotateSpeed:0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:18250,radius:62,startAngle:-943.8417708871704,endAngle:-943.0563727237735,startPolygon:{"points":[[875,9125],[887.731712214475,9064.321309308063]],"type":"poly","props":{}},endPolygon:{"points":[[875,9125],[926.9089937047404,9091.096366381149]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:-943.8417708871704,endSliceAngle:-943.0563727237735,startSliceAngleRotateSpeed:-0.04974188368183839,endSliceAngleRotateSpeed:-0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:17950,radius:62,startAngle:944.6271690505673,endAngle:945.4125672139642,startPolygon:{"points":[[875,8975],[841.0963663812063,9026.908993704777]],"type":"poly","props":{}},endPolygon:{"points":[[875,8975],[814.3213093080766,8987.731712214541]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:944.6271690505673,endSliceAngle:945.4125672139642,startSliceAngleRotateSpeed:0.04974188368183839,endSliceAngleRotateSpeed:0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:18250,radius:62,startAngle:-942.2709745603765,endAngle:-941.4855763969796,startPolygon:{"points":[[875,9125],[935.678690691951,9137.731712214409]],"type":"poly","props":{}},endPolygon:{"points":[[875,9125],[908.9036336189006,9176.908993704708]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:-942.2709745603765,endSliceAngle:-941.4855763969796,startSliceAngleRotateSpeed:-0.04974188368183839,endSliceAngleRotateSpeed:-0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:18250,radius:62,startAngle:-940.7001782335827,endAngle:-939.9147800701859,startPolygon:{"points":[[875,9125],[862.2682877856568,9185.678690691964]],"type":"poly","props":{}},endPolygon:{"points":[[875,9125],[823.0910062953333,9158.903633618962]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:-940.7001782335827,endSliceAngle:-939.9147800701859,startSliceAngleRotateSpeed:-0.04974188368183839,endSliceAngleRotateSpeed:-0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:18250,radius:62,startAngle:-939.1293819067889,endAngle:-938.343983743392,startPolygon:{"points":[[875,9125],[814.3213093080213,9112.268287785722]],"type":"poly","props":{}},endPolygon:{"points":[[875,9125],[841.0963663809868,9073.091006295366]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:-939.1293819067889,endSliceAngle:-938.343983743392,startSliceAngleRotateSpeed:-0.04974188368183839,endSliceAngleRotateSpeed:-0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:17950,radius:62,startAngle:946.1979653773611,endAngle:946.983363540758,startPolygon:{"points":[[875,8975],[823.091006295186,8941.096366381262]],"type":"poly","props":{}},endPolygon:{"points":[[875,8975],[862.2682877853933,8914.32130930809]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:946.1979653773611,endSliceAngle:946.983363540758,startSliceAngleRotateSpeed:0.04974188368183839,endSliceAngleRotateSpeed:0.04974188368183839,})
C(4,[],[0],{type:[4,[],[0]],x:1750,y:17950,radius:62,startAngle:947.7687617041549,endAngle:948.5541598675518,startPolygon:{"points":[[875,8975],[908.903633618681,8923.09100629515]],"type":"poly","props":{}},endPolygon:{"points":[[875,8975],[935.6786906918958,8962.268287785328]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:5.969026041820607,renderType:"circle",inView:false,r:124,startSliceAngle:947.7687617041549,endSliceAngle:948.5541598675518,startSliceAngleRotateSpeed:0.04974188368183839,endSliceAngleRotateSpeed:0.04974188368183839,})
C(2,[],[0],{type:[2,[],[0]],points:[[15200,8350],[15200,8550],[15000,8450]],most:{"left":7500,"right":7600,"top":4175,"bottom":4275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{x:0,y:0,points:[[15450,11650],[15402.254248593737,11914.503363531612],[15277.254248593737,12077.97543233282],[15122.745751406263,12077.97543233282],[14997.745751406263,11914.503363531612],[14950,11650],[14997.745751406263,11385.496636468388],[15122.745751406263,11222.02456766718],[15277.254248593737,11222.02456766718],[15402.254248593737,11385.496636468388]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(15200,11650,250,450,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{type:[2,[],[0]],points:[[15000,10050],[15200,10050],[15200,10200],[15100,10200]],most:{"left":7500,"right":7600,"top":5025,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[7],{type:[0,[],[7]],x:14700,y:8500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[0],{x:0,y:0,points:[[14450,10850],[14402.254248593737,11114.503363531612],[14277.254248593737,11277.97543233282],[14122.745751406263,11277.97543233282],[13997.745751406263,11114.503363531612],[13950,10850],[13997.745751406263,10585.496636468388],[14122.745751406263,10422.02456766718],[14277.254248593737,10422.02456766718],[14402.254248593737,10585.496636468388]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(14200,10850,250,450,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[15450,10850],[15402.254248593737,11114.503363531612],[15277.254248593737,11277.97543233282],[15122.745751406263,11277.97543233282],[14997.745751406263,11114.503363531612],[14950,10850],[14997.745751406263,10585.496636468388],[15122.745751406263,10422.02456766718],[15277.254248593737,10422.02456766718],[15402.254248593737,10585.496636468388]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(15200,10850,250,450,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(4,[],[0],{type:[4,[],[0]],x:14700,y:11250,radius:132,startAngle:-366.25559820172015,endAngle:-361.71774214653897,startPolygon:{"points":[[7330.7150405161465,5552.521794050169],[7316.058471308417,5497.438357528297]],"type":"poly","props":{}},endPolygon:{"points":[[7281.971698927071,5656.57768600026],[7230.270190111646,5680.576727360457]],"type":"poly","props":{}},innerRadius:150,toRotate:true,rotateSpeed:-2.303834612632515,renderType:"circle",inView:false,r:264,startSliceAngle:-366.25559820172015,endSliceAngle:-361.71774214653897,startSliceAngleRotateSpeed:-0.019198621771937627,endSliceAngleRotateSpeed:-0.019198621771937627,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:10150,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:10100,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:12000,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:12000,w:100,h:400,canJump:true,inView:false,})
C(2,[],[0],{x:0,y:0,points:[[14450,11650],[14402.254248593737,11914.503363531612],[14277.254248593737,12077.97543233282],[14122.745751406263,12077.97543233282],[13997.745751406263,11914.503363531612],[13950,11650],[13997.745751406263,11385.496636468388],[14122.745751406263,11222.02456766718],[14277.254248593737,11222.02456766718],[14402.254248593737,11385.496636468388]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(14200,11650,250,450,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(1,[],[26],{type:[1,[],[26]],x:9400,y:5850,w:1200,h:700,musicPath:"https://www.youtube.com/watch?v=6DpNIql7uPk",volume:1,startTime:0,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:14700,y:12000,r:70,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{x:13950,y:14200,w:200,h:1000,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[0],[11],{type:[1,[0],[11]],x:14276,y:6538,w:200,h:200,points:[[7138,3269],[7211,3100],[7385,3103],[7461,3268],[7300,3350]],speed:112,currentPoint:3.1397604026266537,pointOn:{"x":7461,"y":3268},pointTo:{"x":7300,"y":3350},xv:-99.80115380961655,yv:50.83040131918358,inView:false,path:[[14276,6538,3.7333333333333334],[14422,6200,3.7333333333333334],[14770,6206,3.7333333333333334],[14922,6536,3.7333333333333334],[14600,6700,3.7333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14276,y:6538,w:200,h:200,points:[[7138,3269],[7211,3100],[7385,3103],[7461,3268],[7300,3350]],speed:112,currentPoint:4.158263383139714,pointOn:{"x":7300,"y":3350},pointTo:{"x":7138,"y":3269},xv:-100.17584539199058,yv:-50.0879226959953,inView:false,path:[[14276,6538,3.7333333333333334],[14422,6200,3.7333333333333334],[14770,6206,3.7333333333333334],[14922,6536,3.7333333333333334],[14600,6700,3.7333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14276,y:6538,w:200,h:200,points:[[7138,3269],[7211,3100],[7385,3103],[7461,3268],[7300,3350]],speed:112,currentPoint:0.11716540189630288,pointOn:{"x":7138,"y":3269},pointTo:{"x":7211,"y":3100},xv:44.41248751101985,yv:-102.81795053921036,inView:false,path:[[14276,6538,3.7333333333333334],[14422,6200,3.7333333333333334],[14770,6206,3.7333333333333334],[14922,6536,3.7333333333333334],[14600,6700,3.7333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14276,y:6538,w:200,h:200,points:[[7138,3269],[7211,3100],[7385,3103],[7461,3268],[7300,3350]],speed:112,currentPoint:1.1099759644639193,pointOn:{"x":7211,"y":3100},pointTo:{"x":7385,"y":3103},xv:111.98335686148772,yv:1.9307475320946161,inView:false,path:[[14276,6538,3.7333333333333334],[14422,6200,3.7333333333333334],[14770,6206,3.7333333333333334],[14922,6536,3.7333333333333334],[14600,6700,3.7333333333333334]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14276,y:6538,w:200,h:200,points:[[7138,3269],[7211,3100],[7385,3103],[7461,3268],[7300,3350]],speed:112,currentPoint:2.1419785516843377,pointOn:{"x":7385,"y":3103},pointTo:{"x":7461,"y":3268},xv:46.85630790509703,yv:101.72751058343431,inView:false,path:[[14276,6538,3.7333333333333334],[14422,6200,3.7333333333333334],[14770,6206,3.7333333333333334],[14922,6536,3.7333333333333334],[14600,6700,3.7333333333333334]],})
C(0,[],[1],{type:[0,[],[1]],x:14700,y:6550,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
shared.morphsTriggered[21]=false;C(1,[],[3],{h:300,w:300,y:5150,x:13450,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[21] === true) {
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
                shared.morphsTriggered[21] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[21] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[22]=false;C(1,[],[3],{h:300,w:300,y:5150,x:12650,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[22] === true) {
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
                shared.morphsTriggered[22] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[22] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[23]=false;C(1,[],[3],{h:300,w:300,y:5150,x:11850,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[23] === true) {
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
                shared.morphsTriggered[23] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[23] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[24]=false;C(1,[],[3],{h:300,w:300,y:5150,x:11050,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[24] === true) {
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
                shared.morphsTriggered[24] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[24] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(2,[],[1],{type:[2,[],[1]],points:[[17800,11400],[18000,11800],[17800,11900]],most:{"left":8900,"right":9000,"top":5700,"bottom":5950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,11400],[18400,11900],[18200,11800]],most:{"left":9100,"right":9200,"top":5700,"bottom":5950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var morphTriggered0 = false;var morphOffset0 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:150,w:700,y:12400,x:17750,
        path: [[17750,12400,0],[17750,9700,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 0;
            if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered0;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 10.666666666666666;
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
C(2,[],[1],{type:[2,[],[1]],points:[[18100,10900],[18250,11200],[18100,11500],[17950,11200]],most:{"left":8975,"right":9125,"top":5450,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,10500],[18400,11000],[18200,10600]],most:{"left":9100,"right":9200,"top":5250,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,10500],[18000,10600],[17800,11050]],most:{"left":8900,"right":9000,"top":5250,"bottom":5525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:17875,y:11200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:18325,y:11200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:18000,y:10500,w:200,h:200,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,10050],[18050,10300],[17800,10500]],most:{"left":8900,"right":9025,"top":5025,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,10050],[18400,10500],[18150,10300]],most:{"left":9075,"right":9200,"top":5025,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18150,10100],[18350,10100],[18150,10300],[18050,10200]],most:{"left":9025,"right":9175,"top":5050,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17750,10000],[17950,10000],[18050,10100],[17950,10200]],most:{"left":8875,"right":9025,"top":5000,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18150,9900],[18400,9900],[18400,10100],[18150,10100],[18050,10000]],most:{"left":9025,"right":9200,"top":4950,"bottom":5050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,9800],[17950,9800],[18050,9900],[17950,10000],[17800,10000]],most:{"left":8900,"right":9025,"top":4900,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,9600],[18400,9900],[18150,9900],[18050,9800],[18150,9700]],most:{"left":9025,"right":9200,"top":4800,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,9600],[18050,9700],[17950,9800],[17800,9800]],most:{"left":8900,"right":9025,"top":4800,"bottom":4900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,10950],[18250,11200],[18100,11450],[17950,11200]],most:{"left":8975,"right":9125,"top":5475,"bottom":5725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,11000],[18250,11200],[18100,11400],[17950,11200]],most:{"left":8975,"right":9125,"top":5500,"bottom":5700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,11050],[18250,11200],[18100,11350],[17950,11200]],most:{"left":8975,"right":9125,"top":5525,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,11100],[18250,11200],[18100,11300],[17950,11200]],most:{"left":8975,"right":9125,"top":5550,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,11150],[18250,11200],[18100,11250],[17950,11200]],most:{"left":8975,"right":9125,"top":5575,"bottom":5625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,11150],[18250,11200],[17950,11200]],most:{"left":8975,"right":9125,"top":5575,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var morphTriggered1 = false;var morphOffset1 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:600,y:8900,x:17800,
        path: [[17800,8900,0],[17800,2800,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 1;
            if((moveActive === false && morphTriggered1 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered1 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered1;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 9;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered = morphTriggered1 = false;
                
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
C(1,[5],[1],{h:66,w:600,y:10417,x:17600,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.044744186046511626,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17900,
        pivotY: 10450
    });
    C(0,[],[0],{x:17900,y:10450,r:66,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:10417,x:18000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.044744186046511626,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18300,
        pivotY: 10450
    });
    C(0,[],[0],{x:18300,y:10450,r:66,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:490,y:10642,x:17605,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.043023255813953484,
        detectionRadius: 247.212459232944,
        spokeAngles: [0, Math.PI],
        pivotX: 17850,
        pivotY: 10675
    });
    C(0,[],[0],{x:17850,y:10675,r:66,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:490,y:10642,x:18105,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.043023255813953484,
        detectionRadius: 247.212459232944,
        spokeAngles: [0, Math.PI],
        pivotX: 18350,
        pivotY: 10675
    });
    C(0,[],[0],{x:18350,y:10675,r:66,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:11617,x:18050,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04130232558139535,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18350,
        pivotY: 11650
    });
    C(0,[],[0],{x:18350,y:11650,r:66,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:11617,x:17550,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.04130232558139535,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17850,
        pivotY: 11650
    });
    C(0,[],[0],{x:17850,y:11650,r:66,cr:(e)=>{
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
    }});C(4,[],[0],{type:[4,[],[0]],x:18100,y:12100,radius:225,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[9200,6050],[9275,6050]],"type":"poly","props":{}},endPolygon:{"points":[[8900,6050],[8825,6050]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,8600],[17950,8900],[17800,9000]],most:{"left":8900,"right":8975,"top":4300,"bottom":4500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,8600],[18400,9000],[18250,8900]],most:{"left":9125,"right":9200,"top":4300,"bottom":4500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,7350],[18100,7650],[17800,7950]],most:{"left":8900,"right":9050,"top":3675,"bottom":3975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,7200],[17900,7300],[17800,7400]],most:{"left":8900,"right":8950,"top":3600,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,7050],[17900,7150],[17800,7250]],most:{"left":8900,"right":8950,"top":3525,"bottom":3625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,6900],[17900,7000],[17800,7100]],most:{"left":8900,"right":8950,"top":3450,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,7150],[18400,7550],[18200,7350]],most:{"left":9100,"right":9200,"top":3575,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,7800],[18400,8200],[18200,8000]],most:{"left":9100,"right":9200,"top":3900,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,7950],[18400,8450],[18200,8300]],most:{"left":9100,"right":9200,"top":3975,"bottom":4225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,6500],[18200,6600],[18100,6700],[18000,6600]],most:{"left":9000,"right":9100,"top":3250,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,6000],[18000,6200],[17800,6400]],most:{"left":8900,"right":9000,"top":3000,"bottom":3200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,6000],[18400,6400],[18200,6200]],most:{"left":9100,"right":9200,"top":3000,"bottom":3200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,7000],[18400,7200],[18300,7100]],most:{"left":9150,"right":9200,"top":3500,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,6850],[18400,7050],[18300,6950]],most:{"left":9150,"right":9200,"top":3425,"bottom":3525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,4800],[18000,5000],[17800,5700]],most:{"left":8900,"right":9000,"top":2400,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,4800],[18400,5700],[18200,5000]],most:{"left":9100,"right":9200,"top":2400,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,5300],[18200,5600],[18100,5800],[18000,5600]],most:{"left":9000,"right":9100,"top":2650,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,4750],[18150,4800],[18100,4850],[18050,4800]],most:{"left":9025,"right":9075,"top":2375,"bottom":2425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,4400],[18000,4600],[17800,4800]],most:{"left":8900,"right":9000,"top":2200,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,4400],[18400,4800],[18200,4600]],most:{"left":9100,"right":9200,"top":2200,"bottom":2400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[18150,3000],[18400,3000],[18400,3950]],most:{"left":9075,"right":9200,"top":1500,"bottom":1975},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,3000],[18050,3000],[17800,3950]],most:{"left":8900,"right":9025,"top":1500,"bottom":1975},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17750,y:3550,w:50,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:3550,w:100,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:7950,w:50,h:500,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[17850,7450],[18050,7650],[17850,7850]],most:{"left":8925,"right":9025,"top":3725,"bottom":3925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,7200],[18400,7500],[18250,7350]],most:{"left":9125,"right":9200,"top":3600,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:6600,radius:25,startAngle:441.1959638475308,endAngle:442.7667601743259,startPolygon:{"points":[[9050,3300],[9054.912915236911,3324.512512394182]],"type":"poly","props":{}},endPolygon:{"points":[[9050,3300],[9025.487487605817,3304.9129152369055]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:2.792526803190927,renderType:"circle",inView:false,r:50,startSliceAngle:441.1959638475308,endSliceAngle:442.7667601743259,startSliceAngleRotateSpeed:0.023271056693257727,endSliceAngleRotateSpeed:0.023271056693257727,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:6600,radius:25,startAngle:444.337556501121,endAngle:445.90835282791613,startPolygon:{"points":[[9050,3300],[9045.0870847631,3275.4874876058157]],"type":"poly","props":{}},endPolygon:{"points":[[9050,3300],[9074.512512394185,3295.0870847631054]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:2.792526803190927,renderType:"circle",inView:false,r:50,startSliceAngle:444.337556501121,endSliceAngle:445.90835282791613,startSliceAngleRotateSpeed:0.023271056693257727,endSliceAngleRotateSpeed:0.023271056693257727,})
C(2,[],[1],{type:[2,[],[1]],points:[[17850,4900],[17950,5000],[17850,5400]],most:{"left":8925,"right":8975,"top":2450,"bottom":2700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18350,4900],[18350,5400],[18250,5000]],most:{"left":9125,"right":9175,"top":2450,"bottom":2700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,5450],[18150,5600],[18100,5700],[18050,5600]],most:{"left":9025,"right":9075,"top":2725,"bottom":2850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18350,4500],[18350,4700],[18250,4600]],most:{"left":9125,"right":9175,"top":2250,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17850,4500],[17950,4600],[17850,4700]],most:{"left":8925,"right":8975,"top":2250,"bottom":2350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:8900,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:8600,w:75,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17725,y:8600,w:75,h:500,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:4800,radius:15,startAngle:-496.3454593285255,endAngle:-494.77466300172955,startPolygon:{"points":[[9050,2400],[9064.99485987468,2400.3926542228473]],"type":"poly","props":{}},endPolygon:{"points":[[9050,2400],[9049.607345777136,2414.994859874679]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-3.141592653589793,renderType:"circle",inView:false,r:30,startSliceAngle:-496.3454593285255,endSliceAngle:-494.77466300172955,startSliceAngleRotateSpeed:-0.02617993877991494,endSliceAngleRotateSpeed:-0.02617993877991494,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:4800,radius:15,startAngle:-493.2038666749336,endAngle:-491.6330703481376,startPolygon:{"points":[[9050,2400],[9035.00514012532,2399.607345777121]],"type":"poly","props":{}},endPolygon:{"points":[[9050,2400],[9050.392654222895,2385.0051401253213]],"type":"poly","props":{}},innerRadius:0,toRotate:true,rotateSpeed:-3.141592653589793,renderType:"circle",inView:false,r:30,startSliceAngle:-493.2038666749336,endSliceAngle:-491.6330703481376,startSliceAngleRotateSpeed:-0.02617993877991494,endSliceAngleRotateSpeed:-0.02617993877991494,})
C(1,[],[20],{x:17950,y:9250,w:300,h:200,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[1],[0],{type:[1,[1],[0]],x:14600,y:12600,w:300,h:100,angle:16584.29999999565,rotateSpeed:0.030909090909090907,pivotX:14750,pivotY:12650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:4.433333333333343,inView:false,initialRotation:289.4506391384196,})
C(1,[0],[11],{type:[1,[0],[11]],x:14500,y:12000,w:100,h:100,points:[[7250,6000],[7400,6000]],speed:92,currentPoint:0.9015555555249012,pointOn:{"x":7250,"y":6000},pointTo:{"x":7400,"y":6000},xv:92,yv:0,inView:false,path:[[14500,12000,3.066666666666667],[14800,12000,3.066666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:14500,y:12000,w:100,h:100,points:[[7250,6000],[7400,6000]],speed:92,currentPoint:1.9015555555249013,pointOn:{"x":7400,"y":6000},pointTo:{"x":7250,"y":6000},xv:-92,yv:1.126675055215565e-14,inView:false,path:[[14500,12000,3.066666666666667],[14800,12000,3.066666666666667]],})
C(1,[1],[0],{type:[1,[1],[0]],x:15000,y:13450,w:400,h:100,angle:11670.433333331654,rotateSpeed:0.021750841750841753,pivotX:15200,pivotY:13500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:203.68748680113427,})
C(1,[1],[0],{type:[1,[1],[0]],x:15000,y:13450,w:400,h:100,angle:11760.433333331635,rotateSpeed:0.021750841750841753,pivotX:15200,pivotY:13500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:205.25828312792882,})
C(1,[1],[0],{type:[1,[1],[0]],x:14000,y:12850,w:400,h:100,angle:-11670.433333331654,rotateSpeed:-0.021750841750841753,pivotX:14200,pivotY:12900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:-203.68748680113427,})
C(1,[1],[0],{type:[1,[1],[0]],x:14000,y:12850,w:400,h:100,angle:-11580.43333333167,rotateSpeed:-0.021750841750841753,pivotX:14200,pivotY:12900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:4.433333333333343,inView:false,initialRotation:-202.11669047433963,})
C(4,[],[0],{type:[4,[],[0]],x:14700,y:10700,radius:132,startAngle:361.71774214653897,endAngle:366.25559820172015,startPolygon:{"points":[[7281.971698927071,5318.42231399974],[7230.270190111646,5294.423272639543]],"type":"poly","props":{}},endPolygon:{"points":[[7330.7150405161465,5422.478205949831],[7316.058471308417,5477.561642471703]],"type":"poly","props":{}},innerRadius:150,toRotate:true,rotateSpeed:2.303834612632515,renderType:"circle",inView:false,r:264,startSliceAngle:361.71774214653897,endSliceAngle:366.25559820172015,startSliceAngleRotateSpeed:0.019198621771937627,endSliceAngleRotateSpeed:0.019198621771937627,})
C(2,[],[1],{type:[2,[],[1]],points:[[14500,10200],[14700,10350],[14600,10400]],most:{"left":7250,"right":7350,"top":5100,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14900,10200],[14800,10400],[14700,10350]],most:{"left":7350,"right":7450,"top":5100,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[14700,10050],[14900,10200],[14700,10350],[14500,10200]],most:{"left":7250,"right":7450,"top":5025,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[14800,13900],[14800,14250],[14200,14900],[14200,14500]],most:{"left":7100,"right":7400,"top":6950,"bottom":7450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,12700],[15000,13300],[15000,13700],[14400,13100]],most:{"left":7200,"right":7500,"top":6350,"bottom":6850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15200,12500],[15200,12900],[14900,12700]],most:{"left":7450,"right":7600,"top":6250,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14500,12100],[14900,12100],[14700,12450]],most:{"left":7250,"right":7450,"top":6050,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:16000,y:13000,w:1000,h:100,tpx:16100,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16000,y:13000,w:100,h:1000,tpx:16100,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:16900,y:13000,w:100,h:1000,tpx:16100,tpy:15050,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6300,y:14200,w:200,h:500,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6300,y:15100,w:200,h:100,tpx:10000,tpy:14700,bgColor:"#a67c00",tileColor:"#fac203",changeColor:false,inView:false,})
C(1,[0],[12],{type:[1,[0],[12]],x:6000,y:14000,w:350,h:200,points:[[3000,7000],[3000,7100]],speed:92,currentPoint:1.3523333332873517,tpx:10000,tpy:14700,pointOn:{"x":3000,"y":7100},pointTo:{"x":3000,"y":7000},xv:5.633375276077825e-15,yv:-92,inView:false,path:[[6000,14000,3.066666666666667],[6000,14200,3.066666666666667]],})
C(1,[],[0],{type:[1,[],[0]],x:5950,y:13900,w:3350,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,7000],[16500,7000],[16000,7500]],most:{"left":8000,"right":8250,"top":3500,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,7500],[16500,8000],[16000,8000]],most:{"left":8000,"right":8250,"top":3750,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17000,7500],[17000,8000],[16500,8000]],most:{"left":8250,"right":8500,"top":3750,"bottom":4000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16500,7000],[17000,7000],[17000,7500]],most:{"left":8250,"right":8500,"top":3500,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16400,7450],[16400,7550],[16350,7500]],most:{"left":8175,"right":8200,"top":3725,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16500,7350],[16550,7400],[16450,7400]],most:{"left":8225,"right":8275,"top":3675,"bottom":3700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16600,7450],[16650,7500],[16600,7550]],most:{"left":8300,"right":8325,"top":3725,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16450,7600],[16550,7600],[16500,7650]],most:{"left":8225,"right":8275,"top":3800,"bottom":3825},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[8],{type:[1,[],[8]],x:16400,y:7400,w:200,h:200,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(0,[],[7],{type:[0,[],[7]],x:16200,y:7500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16500,y:7200,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16800,y:7500,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[12],{type:[2,[],[12]],points:[[17000,9800],[17000,10000],[16800,10000]],tpx:16500,tpy:11100,most:{"left":8400,"right":8500,"top":4900,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[16200,9000],[17000,9000],[17000,9800]],most:{"left":8100,"right":8500,"top":4500,"bottom":4900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16000,9200],[16800,10000],[16000,10000]],most:{"left":8000,"right":8400,"top":4600,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5700,18000],[5800,18100],[5700,18200],[5600,18100]],most:{"left":2800,"right":2900,"top":9000,"bottom":9100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:10850,w:100,h:950,canJump:true,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:9050,y:1650,w:1900,h:1300,musicPath:"https://www.youtube.com/watch?v=hUpV1872pWs",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:9300,y:16000,w:1400,h:1000,musicPath:"https://www.youtube.com/watch?v=hUpV1872pWs",volume:1,startTime:0,inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:13650,y:16100,w:1600,h:900,musicPath:"https://www.youtube.com/watch?v=MOznJh6T5gE",volume:1,startTime:0,inView:false,})
var timer10198 = 42.00833333328029; var state10198 =false; var x10198 = 9000; 
    C(1,[],[0],{h:1100,w:1000,y:2900,x:-1000000000,sf:(e)=>{
            timer10198 -= 1 / 60;
            if(timer10198 < 0){
                state10198 = !state10198;
                if(state10198 === true){
                    // on
                    timer10198 += 100;
                    e.pos.x = x10198;
                } else {
                    // off
                    timer10198 += 100;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10198) {
                if (timer10198 < 0.2 && 100 > 0.2) {
                    ctx.globalAlpha = timer10198 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10198 < 0.2 && 100 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10198 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10198, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer10199 = 42.00833333328029; var state10199 =true; var x10199 = 10000; 
    C(1,[],[0],{h:1100,w:1000,y:2900,x:10000,sf:(e)=>{
            timer10199 -= 1 / 60;
            if(timer10199 < 0){
                state10199 = !state10199;
                if(state10199 === true){
                    // on
                    timer10199 += 100;
                    e.pos.x = x10199;
                } else {
                    // off
                    timer10199 += 100;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state10199) {
                if (timer10199 < 0.2 && 100 > 0.2) {
                    ctx.globalAlpha = timer10199 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer10199 < 0.2 && 100 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer10199 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = colors.tile;
            ctx.rect(x10199, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[24],{type:[1,[],[24]],x:6600,y:6600,w:6900,h:6900,ir:0,or:0.09,o:1.5,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0,outerR:0,outerG:0,outerB:0,outerSize:0.054,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:9000,y:9000,w:2000,h:2000,ir:0.2,or:1.2,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.020000000000000004,outerR:0,outerG:0,outerB:0,outerSize:0.72,innerOpacity:0,outerOpacity:1,})
C(1,[],[11],{type:[1,[],[11]],x:50,y:4250,w:500,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:50,y:3850,w:100,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:15200,y:19200,w:100,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:15400,y:19200,w:100,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:16400,y:13400,w:200,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7600,y:16100,w:200,h:800,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:6600,y:16100,w:200,h:800,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5800,y:16100,w:200,h:800,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:5000,y:16100,w:200,h:800,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:-100,w:50,h:50,size:30,text:"Welcome to PoVV!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:-50,w:50,h:50,size:14,text:"Infiltrate the vault as fast as possible.",angle:0,story:false,fontSize:28,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:4700,y:350,w:50,h:50,size:22,text:"Watch Out!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:19300,y:900,w:50,h:50,size:36,text:"!",angle:0,story:false,fontSize:72,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:400,y:6400,w:50,h:50,size:32,text:"Diagonal FTW!",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:400,y:10000,w:50,h:50,size:32,text:"The Land of Giants...",angle:90,story:true,fontSize:64,hex:"#FFFFFF",pivotX:400,pivotY:10000,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:19600,y:5800,w:50,h:50,size:32,text:"There's A Right Timing",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:19600,y:5900,w:50,h:50,size:32,text:"And A Wrong Timing...",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:100,y:900,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:10000,w:50,h:50,size:42,text:"Secrets!",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9650,y:9650,w:50,h:50,size:42,text:"1",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10350,y:9650,w:50,h:50,size:42,text:"2",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9650,y:10350,w:50,h:50,size:42,text:"3",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10350,y:10350,w:50,h:50,size:42,text:"4",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5550,y:19700,w:50,h:50,size:30,text:"Shoot a basket!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:17850,w:50,h:50,size:30,text:"To Defy or Accept...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:1900,y:16950,w:50,h:50,size:32,text:"Wrap Around!",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17900,y:13950,w:50,h:50,size:32,text:"Run!",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:17900,y:13850,w:50,h:50,size:48,text:"->",angle:-90,story:false,fontSize:96,hex:"#FFFFFF",pivotX:17900,pivotY:13850,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:3900,y:9700,w:50,h:50,size:38,text:"!",angle:0,story:false,fontSize:76,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3100,y:9700,w:50,h:50,size:38,text:"!",angle:0,story:false,fontSize:76,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:1900,y:2450,w:50,h:50,size:22,text:"Collect Both and Come back!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:11700,y:1900,w:50,h:50,size:30,text:"Watch Out!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:9400,y:3250,w:50,h:50,size:180,text:"->",angle:180,story:false,fontSize:360,hex:"#FFFFFF",pivotX:9400,pivotY:3250,rotateSpeed:0,initialRotation:3.141592653589793,})
C(3,[],[20],{type:[3,[],[20]],x:10600,y:3250,w:50,h:50,size:180,text:"->",angle:0,story:false,fontSize:360,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:3700,w:50,h:50,size:42,text:"Your path is predetermined.",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:3800,w:50,h:50,size:42,text:"Do not try and fight it.",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:15000,y:3500,w:50,h:50,size:38,text:"Don't Choke this...",angle:0,story:false,fontSize:76,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:16700,w:50,h:50,size:34,text:"You're late!",angle:0,story:false,fontSize:68,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:16300,w:50,h:50,size:34,text:"Hurry up!",angle:0,story:false,fontSize:68,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14750,y:16750,w:50,h:50,size:42,text:"Hill Climb",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14750,y:16850,w:50,h:50,size:42,text:"Racing!",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14900,y:8250,w:50,h:50,size:42,text:"!",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10000,y:6200,w:50,h:50,size:48,text:"Almost there!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16500,y:3250,w:50,h:50,size:36,text:"Welcome to the Boxes!",angle:0,story:false,fontSize:72,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16500,y:3450,w:50,h:50,size:28,text:"Survive each one in order",angle:0,story:false,fontSize:56,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16500,y:3550,w:50,h:50,size:28,text:"To proceed to the next!",angle:0,story:false,fontSize:56,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16500,y:3750,w:50,h:50,size:36,text:"Good Luck!",angle:0,story:false,fontSize:72,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:5500,y:4750,w:50,h:50,size:30,text:"Good Luck on the hardest section of the map lol",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14700,y:6550,w:50,h:50,size:30,text:"Survive!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:13600,y:4750,w:50,h:50,size:32,text:"And Finally... Here we go into the vault!",angle:0,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17950,y:8800,w:50,h:50,size:34,text:"->",angle:0,story:false,fontSize:68,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:18250,y:8800,w:50,h:50,size:34,text:"->",angle:180,story:false,fontSize:68,hex:"#FFFFFF",pivotX:18250,pivotY:8800,rotateSpeed:0,initialRotation:3.141592653589793,})
C(3,[1],[20],{type:[3,[1],[20]],x:18100,y:3050,w:50,h:50,size:42,text:"->",angle:90,story:false,fontSize:84,hex:"#FFFFFF",pivotX:18100,pivotY:3050,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:18100,y:5950,w:50,h:50,size:16,text:"You Might Want to use Shift here...",angle:0,story:false,fontSize:32,hex:"#FFFFFF",})


    shared.C(1,[],[15],{
        x:0,y:19100,w:800,h:100,
        axisSpeedMultX: 1.5,
        axisSpeedMultY: 0
    })

    shared.C(1,[],[18],{
        x: 16400, y: 7400,
        w: 200, h: 200,
        sizeChangePermanent: false,
        sizeMult: 0.75
    })

    spawnPosition.x=10000;
    spawnPosition.y=400;
    shared.respawnPlayer();
    colors.background="#fac203"; colors.tile="#a67c00";

    mapDimensions.x=20000;
    mapDimensions.y=20000;

    // for platformer

    for(let i = 0; i < shared.obstacles.length; i++){
        if(shared.obstacles[i].boundPlayer === undefined)continue;

        const oldEffect = shared.obstacles[i].effect[0];
        shared.obstacles[i].effect[0] = (p, res, o, id) => {
            oldEffect(p, res, o, id);
            p.touchingNormalIndexes.push(id);
        }
        if(shared.obstacles[i].cr !== undefined) continue;
        shared.obstacles[i].cr = (o) => {
            // base render
            ctx.lineWidth = 4; 
            ctx.beginPath();
            o.renderShape(o);
            o.renderEffect[0](o);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            // spooky
            if(shared.colors.vignette.outer.size < 0.4){
                let middleX = o.topLeft.x + o.dimensions.x/2;
                let middleY = o.topLeft.y + o.dimensions.y/2;

                ctx.globalAlpha = 1 - shared.colors.vignette.outer.size / 0.4;
                const grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.sqrt(o.dimensions.x**2+o.dimensions.y**2));
                grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
                grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
                ctx.fillStyle = grd;

                ctx.beginPath();
                o.renderShape(o);

                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = 1;

                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x, o.pos.y);
                    o.renderShape(o);
                })
            }
        }
    }

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=q9LqCb8WnSw'
    });

    shared.C(1,[],[3],{x:16900,y:19200,w:2000,h:0,cr:()=>{},ef:(p)=>{
        p.axisSpeedMultY = 0;
        p.touchingNormalIndexes.length = 0;
    }})

    if(shared.isServer !== true){
        const ids = [1809, 1793, 1806, 1791];
        for(let i = 0; i < ids.length; i++){
            const id = ids[i];
            obstacles[id].pivotX = obstacles[id].pos.x = -1E9;
            obstacles[id].pos.y = obstacles[id].pivotY = 0;
        }
        // 1809 1793 1806 1791
        // shared.obstacles[1924].pivotX = shared.obstacles[1940].pivotX = shared.obstacles[1922].pivotX = shared.obstacles[1937].pivotX = -1E9;
        // shared.obstacles[1924].pivotY = shared.obstacles[1940].pivotY = shared.obstacles[1922].pivotY = shared.obstacles[1937].pivotY = 0;
        // shared.obstacles[1924].pos.x = shared.obstacles[1940].pos.x = shared.obstacles[1922].pos.x = shared.obstacles[1937].pos.x = -1E9;
        // shared.obstacles[1924].pos.y = shared.obstacles[1940].pos.y = shared.obstacles[1922].pos.y = shared.obstacles[1937].pos.y = 0;

        // invincibility powerup
        // safe rendering on the player
        {
            const maxInv = 30;// half a second
            let inv = maxInv;
            shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
                if(p.pos.x > 800 || p.pos.y < 7400 || p.pos.y > 11850){
                    inv = maxInv;
                    o.pos.x = -1E9;
                    return;
                }

                if(p.pos.y < 8200){
                    inv = maxInv;
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

        {
            let scale = 1; let colliding = false; let lastColliding = false;
            // custom obs that slowly zooms out, resets on death
            shared.C(1,[],[3],{x:6600,y:6600,w:6900,h:6800,cr:()=>{},ef:(p)=>{
                if(p.pos.x > 8850 && p.pos.x < 11150 && p.pos.y < 11200 && p.pos.y > 8750) return; /*inside middle secrets*/
                const t = (p.pos.y - 6600) / 6600;
                scale = (1-t) * 1 + (t) * 0.15;
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
    }
})