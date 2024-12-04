window.loadMap((shared)=>{
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, generateTopLeftCoordinates, input} = shared;
    let selfId = shared.selfId;
    let counter = 8000;

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

    shared.C(1,[],[19],{x:18500,y:14050,w:400,h:50,speedMult:1/3,speedChangePermanent:false});
    shared.C(1,[],[15],{x:9400,y:17700,w:100,h:200,axisSpeedMultX: 0, axisSpeedMultY:0})

    shared.C(1,[],[13],{x:9750,y:17700,w:100,h:200,conveyorForce:1,conveyorAngle:180,conveyorAngleRotateSpeed:0,conveyorFriction:0.1})

    shared.C(1,[],[12],{x:11950,y:17700,w:750,h:350,tpx:12450,tpy:18350});

    let xv8001 = -4.123736912800346;
    let yv8001 = -12.04069204607393;
    let base8001;
    
    C(0,[3],[1],{r:0,y:13154.293025838677,x:18668.817904836586,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8001;
        e.pos.x += xv8001;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8001 = xv8001 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8001 = yv8001 * -1;
        }
        selfId = shared.selfId;
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

    base8001 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8001.pos.x,"y":base8001.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8001.pos.x;
        o.pos.y = base8001.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8002 = 11.99362778348988;
    let yv8002 = -4.258680977189974;
    let base8002;
    
    C(0,[3],[1],{r:0,y:13054.331159076108,x:18405.28295200861,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8002;
        e.pos.x += xv8002;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8002 = xv8002 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8002 = yv8002 * -1;
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

    base8002 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8002.pos.x,"y":base8002.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8002.pos.x;
        o.pos.y = base8002.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8003 = -4.490688828161382;
    let yv8003 = 11.908702067102306;
    let base8003;
    
    C(0,[3],[1],{r:0,y:13039.155492648038,x:18453.111669792765,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8003;
        e.pos.x += xv8003;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8003 = xv8003 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8003 = yv8003 * -1;
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

    base8003 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8003.pos.x,"y":base8003.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8003.pos.x;
        o.pos.y = base8003.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8004 = 11.433271887460194;
    let yv8004 = 5.591400989179063;
    let base8004;
    
    C(0,[3],[1],{r:0,y:12923.621337131313,x:18710.054944100833,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8004;
        e.pos.x += xv8004;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8004 = xv8004 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8004 = yv8004 * -1;
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

    base8004 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8004.pos.x,"y":base8004.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8004.pos.x;
        o.pos.y = base8004.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8005 = 8.760039657854177;
    let yv8005 = 9.232831432838045;
    let base8005;
    
    C(0,[3],[1],{r:0,y:13163.231794891122,x:18897.218528935628,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8005;
        e.pos.x += xv8005;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8005 = xv8005 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8005 = yv8005 * -1;
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

    base8005 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8005.pos.x,"y":base8005.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8005.pos.x;
        o.pos.y = base8005.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8006 = -12.667610242868305;
    let yv8006 = 1.2309028431026423;
    let base8006;
    
    C(0,[3],[1],{r:0,y:12748.451217143913,x:18678.265365609084,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8006;
        e.pos.x += xv8006;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8006 = xv8006 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8006 = yv8006 * -1;
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

    base8006 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8006.pos.x,"y":base8006.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8006.pos.x;
        o.pos.y = base8006.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8007 = -11.20343391206554;
    let yv8007 = 6.03875315378597;
    let base8007;
    
    C(0,[3],[1],{r:0,y:13033.298721703577,x:18627.33582540427,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8007;
        e.pos.x += xv8007;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8007 = xv8007 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8007 = yv8007 * -1;
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

    base8007 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8007.pos.x,"y":base8007.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8007.pos.x;
        o.pos.y = base8007.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8008 = 2.558944099501394;
    let yv8008 = -12.467368454088746;
    let base8008;
    
    C(0,[3],[1],{r:0,y:13164.154858622584,x:18699.83564008592,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8008;
        e.pos.x += xv8008;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8008 = xv8008 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8008 = yv8008 * -1;
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

    base8008 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8008.pos.x,"y":base8008.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8008.pos.x;
        o.pos.y = base8008.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8009 = 12.212704829340645;
    let yv8009 = 3.58236120816702;
    let base8009;
    
    C(0,[3],[1],{r:0,y:12992.938677376806,x:18765.767712579807,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8009;
        e.pos.x += xv8009;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8009 = xv8009 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8009 = yv8009 * -1;
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

    base8009 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8009.pos.x,"y":base8009.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8009.pos.x;
        o.pos.y = base8009.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8010 = -10.843652831718872;
    let yv8010 = 6.663232274169605;
    let base8010;
    
    C(0,[3],[1],{r:0,y:12726.774534874436,x:18683.779763430444,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8010;
        e.pos.x += xv8010;
        if ((e.pos.x - e.sat.r) < 18400 || e.pos.x + e.sat.r > 18900) {
            xv8010 = xv8010 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13200) {
            yv8010 = yv8010 * -1;
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

    base8010 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8010.pos.x,"y":base8010.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8010.pos.x;
        o.pos.y = base8010.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8011 = -0.22495166996285096;
    let yv8011 = 12.725284587016555;
    let base8011;
    
    C(0,[3],[1],{r:0,y:13402.659457639966,x:18145.734824139043,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8011;
        e.pos.x += xv8011;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8011 = xv8011 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8011 = yv8011 * -1;
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

    base8011 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8011.pos.x,"y":base8011.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8011.pos.x;
        o.pos.y = base8011.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8012 = 12.724443391690107;
    let yv8012 = -0.2683494849150202;
    let base8012;
    
    C(0,[3],[1],{r:0,y:13119.159613623364,x:17840.399838751677,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8012;
        e.pos.x += xv8012;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8012 = xv8012 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8012 = yv8012 * -1;
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

    base8012 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8012.pos.x,"y":base8012.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8012.pos.x;
        o.pos.y = base8012.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8013 = 12.320016432062433;
    let yv8013 = 3.193848178622738;
    let base8013;
    
    C(0,[3],[1],{r:0,y:13113.314977412869,x:17874.02813981402,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8013;
        e.pos.x += xv8013;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8013 = xv8013 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8013 = yv8013 * -1;
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

    base8013 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8013.pos.x,"y":base8013.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8013.pos.x;
        o.pos.y = base8013.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8014 = 10.981835240264722;
    let yv8014 = 6.4329437919245045;
    let base8014;
    
    C(0,[3],[1],{r:0,y:13446.173613868785,x:18197.405822393688,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8014;
        e.pos.x += xv8014;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8014 = xv8014 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8014 = yv8014 * -1;
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

    base8014 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8014.pos.x,"y":base8014.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8014.pos.x;
        o.pos.y = base8014.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8015 = 10.51564214702672;
    let yv8015 = 7.16970998786251;
    let base8015;
    
    C(0,[3],[1],{r:0,y:12993.27496939581,x:18015.117935347647,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8015;
        e.pos.x += xv8015;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8015 = xv8015 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8015 = yv8015 * -1;
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

    base8015 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8015.pos.x,"y":base8015.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8015.pos.x;
        o.pos.y = base8015.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8016 = -12.347571681055136;
    let yv8016 = 3.0856028026279447;
    let base8016;
    
    C(0,[3],[1],{r:0,y:13072.546248422732,x:17911.952950353138,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8016;
        e.pos.x += xv8016;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8016 = xv8016 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8016 = yv8016 * -1;
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

    base8016 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8016.pos.x,"y":base8016.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8016.pos.x;
        o.pos.y = base8016.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8017 = 5.122262807671433;
    let yv8017 = 11.651004025556173;
    let base8017;
    
    C(0,[3],[1],{r:0,y:13310.927013448112,x:18235.422353959875,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8017;
        e.pos.x += xv8017;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8017 = xv8017 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8017 = yv8017 * -1;
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

    base8017 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8017.pos.x,"y":base8017.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8017.pos.x;
        o.pos.y = base8017.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8018 = 0.2538031635496658;
    let yv8018 = 12.72474184526163;
    let base8018;
    
    C(0,[3],[1],{r:0,y:13505.201544741132,x:17953.76605793131,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8018;
        e.pos.x += xv8018;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8018 = xv8018 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8018 = yv8018 * -1;
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

    base8018 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8018.pos.x,"y":base8018.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8018.pos.x;
        o.pos.y = base8018.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8019 = -12.604409082520126;
    let yv8019 = 1.7641833110151262;
    let base8019;
    
    C(0,[3],[1],{r:0,y:12998.949210047846,x:18086.036322534288,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8019;
        e.pos.x += xv8019;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8019 = xv8019 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8019 = yv8019 * -1;
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

    base8019 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8019.pos.x,"y":base8019.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8019.pos.x;
        o.pos.y = base8019.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8020 = 11.56060277785957;
    let yv8020 = -5.323150804450854;
    let base8020;
    
    C(0,[3],[1],{r:0,y:13456.952309085827,x:17852.091181886964,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8020;
        e.pos.x += xv8020;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18400) {
            xv8020 = xv8020 * -1;
        }
        if ((e.pos.y - e.sat.r) < 12950 || e.pos.y + e.sat.r > 13550) {
            yv8020 = yv8020 * -1;
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

    base8020 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8020.pos.x,"y":base8020.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8020.pos.x;
        o.pos.y = base8020.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8021 = 12.72571083205753;
    let yv8021 = -0.19938629148921408;
    let base8021;
    
    C(0,[3],[1],{r:0,y:13428.408543798738,x:17675.804437076324,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8021;
        e.pos.x += xv8021;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8021 = xv8021 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8021 = yv8021 * -1;
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

    base8021 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8021.pos.x,"y":base8021.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8021.pos.x;
        o.pos.y = base8021.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8022 = -10.144636592968219;
    let yv8022 = 7.685689264535117;
    let base8022;
    
    C(0,[3],[1],{r:0,y:13555.298502393147,x:17319.47718397656,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8022;
        e.pos.x += xv8022;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8022 = xv8022 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8022 = yv8022 * -1;
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

    base8022 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8022.pos.x,"y":base8022.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8022.pos.x;
        o.pos.y = base8022.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8023 = -0.7034380038906669;
    let yv8023 = 12.707818304062364;
    let base8023;
    
    C(0,[3],[1],{r:0,y:13441.741528373692,x:17230.424833946803,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8023;
        e.pos.x += xv8023;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8023 = xv8023 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8023 = yv8023 * -1;
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

    base8023 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8023.pos.x,"y":base8023.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8023.pos.x;
        o.pos.y = base8023.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8024 = -10.76597440469644;
    let yv8024 = 6.788023732412939;
    let base8024;
    
    C(0,[3],[1],{r:0,y:13495.989350007156,x:17256.43955409729,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8024;
        e.pos.x += xv8024;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8024 = xv8024 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8024 = yv8024 * -1;
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

    base8024 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8024.pos.x,"y":base8024.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8024.pos.x;
        o.pos.y = base8024.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8025 = -2.136244191610074;
    let yv8025 = -12.546710000163086;
    let base8025;
    
    C(0,[3],[1],{r:0,y:13451.02759756193,x:17671.62085249844,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8025;
        e.pos.x += xv8025;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8025 = xv8025 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8025 = yv8025 * -1;
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

    base8025 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8025.pos.x,"y":base8025.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8025.pos.x;
        o.pos.y = base8025.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8026 = -11.152969302746422;
    let yv8026 = -6.13145552103056;
    let base8026;
    
    C(0,[3],[1],{r:0,y:13625.684179409705,x:17254.893858967727,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8026;
        e.pos.x += xv8026;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8026 = xv8026 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8026 = yv8026 * -1;
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

    base8026 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8026.pos.x,"y":base8026.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8026.pos.x;
        o.pos.y = base8026.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8027 = 5.9641618139711925;
    let yv8027 = 11.243320013730287;
    let base8027;
    
    C(0,[3],[1],{r:0,y:13535.806220879247,x:17640.93146469204,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8027;
        e.pos.x += xv8027;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8027 = xv8027 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8027 = yv8027 * -1;
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

    base8027 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8027.pos.x,"y":base8027.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8027.pos.x;
        o.pos.y = base8027.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8028 = -1.7578919625666802;
    let yv8028 = -12.605288053921006;
    let base8028;
    
    C(0,[3],[1],{r:0,y:13441.675229555745,x:17637.95061015703,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8028;
        e.pos.x += xv8028;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8028 = xv8028 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8028 = yv8028 * -1;
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

    base8028 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8028.pos.x,"y":base8028.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8028.pos.x;
        o.pos.y = base8028.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8029 = 10.59253234501472;
    let yv8029 = -7.055616882611835;
    let base8029;
    
    C(0,[3],[1],{r:0,y:13461.20192992987,x:17223.66038518127,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8029;
        e.pos.x += xv8029;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8029 = xv8029 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8029 = yv8029 * -1;
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

    base8029 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8029.pos.x,"y":base8029.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8029.pos.x;
        o.pos.y = base8029.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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


    let xv8030 = 8.81376341709144;
    let yv8030 = -9.181560079960311;
    let base8030;
    
    C(0,[3],[1],{r:0,y:13710.493313211351,x:17501.53129098515,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv8030;
        e.pos.x += xv8030;
        if ((e.pos.x - e.sat.r) < 17200 || e.pos.x + e.sat.r > 17800) {
            xv8030 = xv8030 * -1;
        }
        if ((e.pos.y - e.sat.r) < 13400 || e.pos.y + e.sat.r > 13900) {
            yv8030 = yv8030 * -1;
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

    base8030 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":300*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base8030.pos.x,"y":base8030.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base8030.pos.x;
        o.pos.y = base8030.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 225);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 225, o.startSliceAngle, o.endSliceAngle);
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
C(1,[],[18],{type:[1,[],[18]],x:14300,y:12600,w:200,h:600,size:11.75,inView:false,sizeChangePermanent:false,sizeMult:0.47959183673469385,})
C(1,[],[18],{type:[1,[],[18]],x:12800,y:10000,w:200,h:1000,size:11.75,inView:false,sizeChangePermanent:false,sizeMult:0.47959183673469385,})
C(1,[],[18],{type:[1,[],[18]],x:2900,y:17700,w:300,h:1200,size:12.5,inView:false,sizeChangePermanent:false,sizeMult:0.5102040816326531,})
C(1,[],[18],{type:[1,[],[18]],x:2500,y:18900,w:700,h:300,size:12.5,inView:false,sizeChangePermanent:false,sizeMult:0.5102040816326531,})
C(1,[],[18],{type:[1,[],[18]],x:2400,y:15100,w:300,h:1700,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:3000,y:14300,w:2200,h:200,size:11.75,inView:false,sizeChangePermanent:false,sizeMult:0.47959183673469385,})
C(1,[],[18],{type:[1,[],[18]],x:0,y:15900,w:600,h:450,size:11.75,inView:false,sizeChangePermanent:false,sizeMult:0.47959183673469385,})
C(1,[],[18],{type:[1,[],[18]],x:7600,y:13100,w:1600,h:1200,size:12.75,inView:false,sizeChangePermanent:false,sizeMult:0.5204081632653061,})
C(1,[],[18],{type:[1,[],[18]],x:8300,y:14300,w:300,h:500,size:15,inView:false,sizeChangePermanent:false,sizeMult:0.6122448979591837,})
C(1,[],[18],{type:[1,[],[18]],x:7200,y:6400,w:400,h:800,size:14.5,inView:false,sizeChangePermanent:false,sizeMult:0.5918367346938775,})
C(1,[],[18],{type:[1,[],[18]],x:9600,y:6400,w:400,h:800,size:14.5,inView:false,sizeChangePermanent:false,sizeMult:0.5918367346938775,})
C(1,[],[18],{type:[1,[],[18]],x:9550,y:1100,w:450,h:500,size:4,inView:false,sizeChangePermanent:false,sizeMult:0.16326530612244897,})
C(1,[],[18],{type:[1,[],[18]],x:5500,y:7800,w:800,h:2200,size:20,inView:false,sizeChangePermanent:false,sizeMult:0.8163265306122449,})
C(1,[],[18],{type:[1,[],[18]],x:6400,y:0,w:900,h:900,size:12,inView:false,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[18],{type:[1,[],[18]],x:6400,y:900,w:1000,h:150,size:3,inView:false,sizeChangePermanent:false,sizeMult:0.12244897959183673,})
C(1,[],[18],{type:[1,[],[18]],x:6400,y:1050,w:100,h:50,size:3,inView:false,sizeChangePermanent:false,sizeMult:0.12244897959183673,})
C(1,[],[18],{type:[1,[],[18]],x:2700,y:15200,w:100,h:100,size:12,inView:false,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[12],{type:[1,[],[12]],x:11600,y:17600,w:350,h:350,tpx:12450,tpy:18350,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[11],{type:[1,[],[11]],x:17150,y:12600,w:1350,h:1700,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:18500,y:12500,w:400,h:500,renderAbove:false,})
C(1,[],[19],{type:[1,[],[19]],x:12800,y:10350,w:200,h:200,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})
C(1,[],[19],{type:[1,[],[19]],x:16500,y:17700,w:3500,h:2300,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[13],{type:[1,[],[13]],x:16100,y:12750,w:100,h:1000,force:700,dir:{"x":700,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.4957983193277311,})
C(1,[],[13],{type:[1,[],[13]],x:16800,y:18700,w:900,h:300,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16500,y:19600,w:1000,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:17100,y:19200,w:400,h:800,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16700,y:18700,w:400,h:600,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16500,y:19200,w:1000,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(4,[],[0],{type:[4,[],[0]],x:17100,y:19000,radius:300,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[8550,9650],[8550,9800]],"type":"poly","props":{}},endPolygon:{"points":[[8550,9350],[8550,9200]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:16800,y:19000,w:1000,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(4,[],[0],{type:[4,[],[0]],x:17100,y:19600,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[8550,9600],[8550,9500]],"type":"poly","props":{}},endPolygon:{"points":[[8550,10000],[8550,10100]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[17],{type:[1,[],[17]],x:10600,y:13300,w:700,h:1000,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:18800,y:11800,w:1000,h:900,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:19500,y:10000,w:200,h:400,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[17],{type:[1,[],[17]],x:17600,y:14100,w:900,h:200,time:0,maxTime:1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,})
C(1,[],[17],{type:[1,[],[17]],x:17200,y:12700,w:1700,h:1400,time:0,maxTime:2.75,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:165,})
C(1,[],[17],{type:[1,[],[17]],x:17800,y:14200,w:700,h:100,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[19],{type:[1,[],[19]],x:18800,y:12100,w:1000,h:600,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(4,[],[0],{type:[4,[],[0]],x:19500,y:12100,radius:300,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[9900,6050],[10050,6050]],"type":"poly","props":{}},endPolygon:{"points":[[9600,6050],[9450,6050]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[19],{type:[1,[],[19]],x:17200,y:12700,w:1700,h:1400,speedInc:3,inView:false,speedChangePermanent:false,speedMult:3,})
C(4,[],[0],{type:[4,[],[0]],x:18600,y:12700,radius:300,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[9450,6350],[9600,6350]],"type":"poly","props":{}},endPolygon:{"points":[[9300,6500],[9300,6650]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[28],{type:[1,[],[28]],x:4700,y:12600,w:400,h:100,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[28],{type:[1,[],[28]],x:5900,y:11400,w:100,h:100,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:12300,w:200,h:400,force:4350,dir:{"x":4350,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.081032412965186,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:12700,w:600,h:500,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:19000,y:12650,w:1050,h:1300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18900,y:12400,w:1150,h:300,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:19050,y:12450,w:950,h:1150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{h:1950,w:1050,y:12350,x:14250,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#ff0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[17],{x:14300,y:12400,w:1000,h:1200,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:330,
        sf:(e)=>{
            if(e.timeTrapTime <= 0){
                players[selfId].pos.x = 11550;
                players[selfId].pos.y = 11350;
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
    });C(1,[],[13],{type:[1,[],[13]],x:14900,y:14200,w:200,h:100,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:14700,y:13600,w:100,h:100,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:13600,w:400,h:700,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:14800,y:13600,w:100,h:700,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15000,y:13600,w:300,h:600,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:12700,y:11300,w:100,h:100,force:3500,dir:{"x":-3500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:12300,y:11300,w:500,h:100,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:12500,y:11300,w:200,h:300,force:3500,dir:{"x":-3500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:10700,w:100,h:100,force:4500,dir:{"x":-4500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[20],{h:100,w:700,y:14200,x:17800,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#ff0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[19],{type:[1,[],[19]],x:17600,y:14100,w:200,h:200,speedInc:3,inView:false,speedChangePermanent:false,speedMult:3,})
C(1,[],[19],{type:[1,[],[19]],x:18800,y:11800,w:500,h:300,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(4,[],[0],{type:[4,[],[0]],x:18600,y:13200,radius:300,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[9150,6600],[9000,6600]],"type":"poly","props":{}},endPolygon:{"points":[[9300,6450],[9300,6300]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[18800,11800],[18950,11800],[18800,12000]],most:{"left":9400,"right":9475,"top":5900,"bottom":6000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19150,11800],[19300,11800],[19300,12000]],most:{"left":9575,"right":9650,"top":5900,"bottom":6000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19050,11900],[19200,12100],[18900,12100]],most:{"left":9450,"right":9600,"top":5950,"bottom":6050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:11000,w:2150,h:800,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:17200,y:10400,w:900,h:350,force:2500,dir:{"x":0,"y":-2500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[1],{type:[1,[],[1]],x:18750,y:14250,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:19700,y:10400,w:300,h:1700,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:10400,w:300,h:1700,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(2,[],[0],{type:[2,[],[0]],points:[[19700,11000],[19900,11000],[19700,11200]],most:{"left":9850,"right":9950,"top":5500,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,11100],[20000,11500],[19800,11300]],most:{"left":9900,"right":10000,"top":5550,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[17],{type:[1,[],[17]],x:17050,y:10000,w:2650,h:700,time:0,maxTime:3.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:210,})
C(1,[],[13],{type:[1,[],[13]],x:17200,y:10000,w:2500,h:700,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[17],{type:[1,[],[17]],x:14300,y:12400,w:200,h:700,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[15],{type:[1,[],[15]],x:14300,y:12400,w:200,h:700,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[17],{type:[1,[],[17]],x:14300,y:13600,w:1000,h:750,time:0,maxTime:2.6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:156,})
C(1,[],[0],{type:[1,[],[0]],x:15950,y:9950,w:1250,h:1200,canJump:true,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:14300,y:13600,w:1000,h:700,speedInc:2.35,inView:false,speedChangePermanent:false,speedMult:2.35,})
C(1,[],[13],{type:[1,[],[13]],x:14700,y:12400,w:650,h:200,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:15000,y:12400,w:400,h:1200,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:13100,w:600,h:300,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:14600,y:12400,w:400,h:1000,force:3500,dir:{"x":0,"y":-3500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:13100,w:300,h:300,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:13100,y:11900,w:600,h:100,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:13400,y:11550,w:500,h:100,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:13300,y:11300,w:500,h:100,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:11300,w:500,h:100,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:12000,y:12150,w:600,h:100,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:11950,y:12200,w:100,h:200,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:11500,y:12150,w:500,h:100,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:11500,y:11300,w:800,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[17],{type:[1,[],[17]],x:11500,y:11300,w:2300,h:1100,time:0,maxTime:11.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:690,})
C(1,[],[19],{type:[1,[],[19]],x:11500,y:11300,w:2300,h:1100,speedInc:1.95,inView:false,speedChangePermanent:false,speedMult:1.95,})
C(1,[],[12],{type:[1,[],[12]],x:13200,y:12300,w:600,h:100,tpx:14400,tpy:12450,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:13600,y:11500,radius:150,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[6800,5650],[6800,5600]],"type":"poly","props":{}},endPolygon:{"points":[[6900,5750],[6950,5750]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:13300,w:200,h:700,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[19],{type:[1,[],[19]],x:11800,y:12500,w:1200,h:1800,speedInc:2.5,inView:false,speedChangePermanent:false,speedMult:2.5,})
C(1,[],[13],{type:[1,[],[13]],x:11800,y:12600,w:600,h:1750,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:12400,y:12600,w:600,h:400,force:15000,dir:{"x":0,"y":15000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[13],{type:[1,[],[13]],x:12000,y:12600,w:800,h:400,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[12],{type:[1,[],[12]],x:12500,y:12900,w:350,h:100,tpx:11550,tpy:11350,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:11950,y:14150,radius:150,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[6050,7075],[6125,7075]],"type":"poly","props":{}},endPolygon:{"points":[[5900,7075],[5825,7075]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[17],{type:[1,[],[17]],x:15700,y:12500,w:950,h:1200,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[15],{type:[1,[],[15]],x:15700,y:12600,w:900,h:1000,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:16200,y:12600,w:100,h:1200,force:1000,dir:{"x":0,"y":-1000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[],[13],{type:[1,[],[13]],x:15800,y:12000,w:100,h:500,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[19],{type:[1,[],[19]],x:15700,y:12500,w:350,h:100,speedInc:4,inView:false,speedChangePermanent:false,speedMult:4,})
C(1,[],[13],{type:[1,[],[13]],x:15700,y:12500,w:450,h:1200,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[13],{type:[1,[],[13]],x:15500,y:12600,w:500,h:1200,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:16300,y:12600,w:450,h:1200,force:6000,dir:{"x":0,"y":-6000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[12],{type:[1,[],[12]],x:16200,y:12500,w:450,h:100,tpx:11950,tpy:14150,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[28],{type:[1,[],[28]],x:15700,y:12500,w:400,h:100,state:true,grapplePoints:true,inView:false,forceMult:2,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.006,grappleFric:0.97,})
C(1,[],[28],{type:[1,[],[28]],x:16200,y:12600,w:400,h:100,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[17],{type:[1,[],[17]],x:14400,y:10000,w:1300,h:1500,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[13],{type:[1,[],[13]],x:15400,y:11400,w:300,h:100,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:14500,y:11100,w:1200,h:400,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[0],[0],{type:[1,[0],[0]],x:15575,y:11250,w:150,h:150,points:[[7800,5625],[7800,5825]],speed:400,currentPoint:1.0166666666655737,alongWith:false,pointOn:{"x":7800,"y":5825},pointTo:{"x":7800,"y":5625},xv:2.4492935982947064e-14,yv:-400,inView:false,path:[[15600,11250,13.333333333333334],[15600,11650,13.333333333333334]],})
C(1,[],[1],{type:[1,[],[1]],x:16050,y:13600,w:300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[19],{type:[1,[],[19]],x:15700,y:11400,w:1200,h:1100,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})
C(1,[],[17],{type:[1,[],[17]],x:15700,y:11400,w:1200,h:1100,time:0,maxTime:3.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:210,})
C(1,[],[13],{type:[1,[],[13]],x:15800,y:12200,w:200,h:300,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15800,y:12000,w:1100,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16700,y:11600,w:200,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15700,y:11400,w:1200,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[17],{type:[1,[],[17]],x:13000,y:10000,w:1150,h:1000,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[17],{type:[1,[],[17]],x:12800,y:10000,w:200,h:1000,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[0],{type:[1,[],[0]],x:16000,y:12200,w:900,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16900,y:11400,w:300,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16000,y:11100,w:1200,h:300,canJump:true,inView:false,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[17150,11250],[17040.184771765595,11308.778525229247],[16752.684771765595,11345.105651629516],[16397.315228234405,11345.105651629516],[16109.815228234405,11308.778525229247],[16000,11250],[16109.815228234405,11191.221474770753],[16397.315228234405,11154.894348370484],[16752.684771765595,11154.894348370484],[17040.184771765595,11191.221474770753]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(16575,11250,575,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[17150,12350],[17040.184771765595,12408.778525229247],[16752.684771765595,12445.105651629516],[16397.315228234405,12445.105651629516],[16109.815228234405,12408.778525229247],[16000,12350],[16109.815228234405,12291.221474770753],[16397.315228234405,12254.894348370484],[16752.684771765595,12254.894348370484],[17040.184771765595,12291.221474770753]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(16575,12350,575,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[1],{type:[1,[],[1]],x:15700,y:11600,w:1000,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15700,y:10000,w:300,h:1400,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:10000,w:1150,h:400,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:10000,w:300,h:100,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:14700,y:10000,w:800,h:1500,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:10400,w:1150,h:700,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:10800,w:300,h:200,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:10000,w:200,h:200,force:1200,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8499399759903962,})
C(1,[],[15],{type:[1,[],[15]],x:12800,y:10000,w:200,h:1050,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[14],{type:[1,[],[14]],x:12800,y:10000,w:200,h:1000,force:425.5,dir:{"x":0,"y":1850},direction:"down",jumpHeight:240,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.09194477791116445,jumpForce:69.6,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[14],{type:[1,[],[14]],x:13000,y:10000,w:1100,h:1000,force:3050,dir:{"x":0,"y":3050},direction:"down",jumpHeight:240,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6590636254501802,jumpForce:69.6,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[13],{type:[1,[],[13]],x:11000,y:11000,w:300,h:100,force:2500,dir:{"x":-2500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:11000,w:300,h:100,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:11100,y:11900,w:200,h:100,force:2500,dir:{"x":-2500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:11000,y:12400,w:100,h:100,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:11100,y:12200,w:200,h:500,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:12500,w:200,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10800,y:12400,w:100,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10800,y:12200,w:200,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:12200,w:200,h:500,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:13000,w:300,h:300,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[20],{x:10600,y:10000,w:700,h:700,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[13],{type:[1,[],[13]],x:10600,y:14200,w:100,h:100,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:10700,w:700,h:1300,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:12000,w:700,h:700,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:12700,w:700,h:500,force:1500,dir:{"x":-1500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[19],{type:[1,[],[19]],x:11300,y:10000,w:1250,h:700,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[20],{h:250,w:250,y:10000,x:12550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[17],{type:[1,[],[17]],x:11300,y:10000,w:1250,h:700,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:10600,y:10700,w:700,h:2600,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[19],{type:[1,[],[19]],x:10600,y:10700,w:700,h:3600,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(1,[],[13],{type:[1,[],[13]],x:10700,y:13500,w:600,h:300,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:14100,w:400,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:13800,w:400,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10700,y:13300,w:500,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:11100,y:13600,w:200,h:700,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10800,y:13800,w:200,h:500,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:13800,w:200,h:500,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[20],{x:0,y:0,w:1800,h:1500,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(4,[],[0],{type:[4,[],[0]],x:11100,y:14100,radius:200,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[5650,7050],[5750,7050]],"type":"poly","props":{}},endPolygon:{"points":[[5450,7050],[5350,7050]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:18800,y:18600,w:300,h:300,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:17700,w:300,h:1000,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18800,y:18600,w:700,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18800,y:18800,w:1200,h:200,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:18800,w:100,h:1100,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:19700,w:300,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:19200,y:19100,w:200,h:200,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:19400,y:19100,w:500,h:800,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18900,y:19100,w:500,h:300,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18900,y:19400,w:500,h:300,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18900,y:19300,w:500,h:200,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:18900,y:19500,w:500,h:500,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[0],{type:[1,[],[0]],x:16800,y:17700,w:2100,h:700,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:17700,y:18700,w:700,h:1200,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:17700,y:19300,w:700,h:600,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:17700,y:18700,w:700,h:600,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[0],{type:[1,[],[0]],x:16500,y:19300,w:600,h:600,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17100,y:19600,r:300,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:19150,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17100,y:18800,w:600,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17550,y:19200,w:150,h:800,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17700,18800],[18200,19300],[17700,19800]],most:{"left":8850,"right":9100,"top":9400,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:17100,y:19000,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16800,y:18400,w:1500,h:300,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:17700,y:19900,w:1650,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16000,y:17900,w:200,h:200,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(4,[],[0],{type:[4,[],[0]],x:17900,y:19800,radius:200,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[8950,10000],[8950,10100]],"type":"poly","props":{}},endPolygon:{"points":[[8850,9900],[8750,9900]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:16100,y:19200,w:200,h:200,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:16000,y:17700,w:400,h:1500,time:0,maxTime:2.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:150,})
C(1,[],[13],{type:[1,[],[13]],x:15400,y:18500,w:100,h:200,force:2500,dir:{"x":-2500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[19],{type:[1,[],[19]],x:14300,y:18100,w:650,h:600,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})
C(1,[],[19],{type:[1,[],[19]],x:14250,y:19000,w:50,h:600,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})

C(1,[],[13],{type:[1,[],[13]],x:14900,y:18700,w:600,h:900,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:18700,w:600,h:900,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[17],{type:[1,[],[17]],x:600,y:18900,w:2600,h:300,time:0,maxTime:3.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:210,})
C(1,[],[19],{type:[1,[],[19]],x:600,y:18900,w:2300,h:300,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(1,[],[19],{type:[1,[],[19]],x:1900,y:18900,w:1000,h:300,speedInc:1,inView:false,speedChangePermanent:false,speedMult:1,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:19200,w:400,h:400,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:1400,y:17700,w:1800,h:1200,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[15],{type:[1,[],[15]],x:2900,y:17700,w:300,h:1100,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[19],{type:[1,[],[19]],x:2800,y:17700,w:400,h:1200,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})
C(1,[],[19],{type:[1,[],[19]],x:2900,y:18900,w:300,h:300,speedInc:0.8,inView:false,speedChangePermanent:false,speedMult:0.8,})
C(1,[],[13],{type:[1,[],[13]],x:2900,y:18900,w:300,h:300,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:2900,y:17700,w:300,h:1500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[19],{type:[1,[],[19]],x:1400,y:17700,w:1400,h:1200,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[13],{type:[1,[],[13]],x:1400,y:17700,w:1300,h:700,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:17950,w:350,h:200,force:100,dir:{"x":0,"y":-100},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.07082833133253301,})
C(1,[],[13],{type:[1,[],[13]],x:2150,y:17950,w:350,h:200,force:100,dir:{"x":0,"y":100},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.07082833133253301,})
C(1,[],[23],{type:[1,[],[23]],x:15300,y:18100,w:600,h:450,tornadoStrength:1,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:15600,y:18100,w:300,h:500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:15300,y:18100,w:550,h:350,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:15300,y:18100,w:300,h:700,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[28],{type:[1,[],[28]],x:15700,y:18150,w:100,h:100,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[28],{type:[1,[],[28]],x:15300,y:18450,w:100,h:100,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(0,[],[11],{type:[0,[],[11]],x:15600,y:18400,r:400,renderType:"circleR",radius:200,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:18150,w:600,h:550,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:14400,y:18800,w:700,h:200,force:750,dir:{"x":-750,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5312124849939976,})
C(1,[],[13],{type:[1,[],[13]],x:14900,y:18800,w:100,h:100,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[19],{type:[1,[],[19]],x:14300,y:18700,w:1200,h:900,speedInc:1.75,inView:false,speedChangePermanent:false,speedMult:1.75,})
C(1,[],[17],{type:[1,[],[17]],x:14300,y:18700,w:1200,h:900,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[0],[0],{type:[1,[0],[0]],x:14900,y:18800,w:100,h:500,points:[[7450,9400],[7600,9400]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7450,"y":9400},pointTo:{"x":7600,"y":9400},xv:100,yv:0,inView:false,path:[[14900,18800,3.3333333333333335],[15200,18800,3.3333333333333335]],})
C(1,[],[13],{type:[1,[],[13]],x:12900,y:18100,w:200,h:100,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[13],{type:[1,[],[13]],x:12900,y:18500,w:200,h:100,force:8000,dir:{"x":0,"y":-8000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[19],{type:[1,[],[19]],x:600,y:18900,w:900,h:300,speedInc:1.4,inView:false,speedChangePermanent:false,speedMult:1.4,})
C(1,[],[19],{type:[1,[],[19]],x:1600,y:18900,w:200,h:300,speedInc:1.2,inView:false,speedChangePermanent:false,speedMult:1.2,})
C(4,[],[0],{type:[4,[],[0]],x:1400,y:19000,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[700,9450],[700,9400]],"type":"poly","props":{}},endPolygon:{"points":[[750,9500],[800,9500]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2500,y:19000,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[1200,9500],[1150,9500]],"type":"poly","props":{}},endPolygon:{"points":[[1250,9450],[1250,9400]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:750,y:19050,radius:125,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[375,9600],[375,9650]],"type":"poly","props":{}},endPolygon:{"points":[[375,9450],[375,9400]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1700,y:19000,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[900,9500],[950,9500]],"type":"poly","props":{}},endPolygon:{"points":[[850,9550],[850,9600]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1800,y:19000,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[850,9500],[800,9500]],"type":"poly","props":{}},endPolygon:{"points":[[900,9450],[900,9400]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[17],{type:[1,[],[17]],x:3500,y:19200,w:4700,h:800,time:0,maxTime:6,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[19],{type:[1,[],[19]],x:3500,y:19200,w:4700,h:800,speedInc:1.35,inView:false,speedChangePermanent:false,speedMult:1.35,})
C(1,[],[13],{type:[1,[],[13]],x:3700,y:19200,w:3900,h:600,force:0,dir:{"x":0,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:19200,w:300,h:600,force:1500,dir:{"x":1500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:12900,y:18000,w:2000,h:600,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(4,[],[0],{type:[4,[],[0]],x:14300,y:18700,radius:400,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[7150,9050],[7150,8950]],"type":"poly","props":{}},endPolygon:{"points":[[7450,9350],[7550,9350]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:800,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[23],{type:[1,[],[23]],x:12900,y:18100,w:1400,h:500,tornadoStrength:1,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:12900,y:18000,w:1400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12900,y:18600,w:1400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:12400,y:18000,w:500,h:600,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:10200,y:17700,w:1700,h:1000,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:11700,y:18700,w:200,h:1200,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[19],{type:[1,[],[19]],x:10200,y:17650,w:1750,h:1050,speedInc:5,inView:false,speedChangePermanent:false,speedMult:5,})
C(1,[],[19],{type:[1,[],[19]],x:11650,y:18700,w:250,h:1200,speedInc:5,inView:false,speedChangePermanent:false,speedMult:5,})
C(4,[],[0],{type:[4,[],[0]],x:10700,y:18900,radius:625,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[5350,8850],[5350,8825]],"type":"poly","props":{}},endPolygon:{"points":[[5950,9450],[5975,9450]],"type":"poly","props":{}},innerRadius:1200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:1250,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[28],{type:[1,[],[28]],x:10500,y:19700,w:100,h:100,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[28],{type:[1,[],[28]],x:7900,y:18100,w:150,h:100,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[13],{type:[1,[],[13]],x:7800,y:19300,w:400,h:300,force:4500,dir:{"x":4500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:8600,y:19600,w:2050,h:500,force:4000,dir:{"x":-4000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:7700,y:19900,w:300,h:100,force:4500,dir:{"x":-4500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:7900,y:19600,w:300,h:400,force:4500,dir:{"x":0,"y":4500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:19200,w:1000,h:100,force:4500,dir:{"x":4500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:7800,y:18100,w:400,h:900,force:6500,dir:{"x":0,"y":-6500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:8100,y:18700,w:2300,h:300,force:6000,dir:{"x":-6000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[13],{type:[1,[],[13]],x:10000,y:18700,w:400,h:900,force:5500,dir:{"x":0,"y":-5500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.8955582232893167,})
C(1,[],[13],{type:[1,[],[13]],x:8400,y:19200,w:1800,h:400,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:8300,y:19200,w:500,h:800,force:4500,dir:{"x":0,"y":-4500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(4,[],[0],{type:[4,[],[0]],x:10700,y:18900,radius:500,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[5350,9450],[5350,8950]],"type":"poly","props":{}},endPolygon:{"points":[[5350,9450],[5850,9450]],"type":"poly","props":{}},renderType:"circle",inView:false,r:1000,innerRadius:0,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[12],{type:[1,[],[12]],x:7800,y:19900,w:100,h:100,tpx:10550,tpy:19750,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:7800,y:17700,w:400,h:400,spawn:{"x":4000,"y":8950},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(4,[],[0],{type:[4,[],[0]],x:2900,y:18900,radius:300,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1600,9450],[1750,9450]],"type":"poly","props":{}},endPolygon:{"points":[[1450,9600],[1450,9750]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:3800,y:19500,radius:300,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[1900,9900],[1900,10050]],"type":"poly","props":{}},endPolygon:{"points":[[1900,9600],[1900,9450]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[19],{type:[1,[],[19]],x:2400,y:15100,w:300,h:1700,speedInc:0.5,inView:false,speedChangePermanent:false,speedMult:0.5,})
C(1,[],[17],{type:[1,[],[17]],x:2350,y:15100,w:350,h:1700,time:0,maxTime:3.99,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:239.4,})
C(1,[],[13],{type:[1,[],[13]],x:2400,y:16000,w:200,h:700,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:2400,y:15300,w:200,h:700,force:1750,dir:{"x":0,"y":-1750},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(1,[],[26],{type:[1,[],[26]],x:2700,y:15100,w:650,h:700,musicPath:"https://www.youtube.com/watch?v=IvYD-HLAl8E",volume:1,startTime:0,inView:false,})
C(1,[],[20],{x:400,y:17700,w:1000,h:1000,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[9],{type:[1,[],[9]],x:400,y:17700,w:1000,h:1000,spawn:{"x":450,"y":9100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:14300,w:10100,h:800,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:3350,y:15100,w:16650,h:700,time:0,maxTime:20,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:1200,})
C(1,[],[19],{type:[1,[],[19]],x:3400,y:15100,w:16600,h:700,speedInc:1.85,inView:false,speedChangePermanent:false,speedMult:1.85,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:11800,w:200,h:600,force:10000,dir:{"x":0,"y":10000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:12000,w:200,h:200,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:11900,w:200,h:1000,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:6300,y:11900,w:1300,h:1400,time:0,maxTime:1.4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:84,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:12400,w:400,h:800,force:10000,dir:{"x":0,"y":10000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:6500,y:12900,w:450,h:300,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:6700,y:12500,w:400,h:800,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[15],{type:[1,[],[15]],x:6300,y:12500,w:800,h:800,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[28],{type:[1,[],[28]],x:7200,y:12050,w:100,h:350,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:11900,w:1000,h:600,force:20000,dir:{"x":20000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:14.1656662665066,})
C(1,[],[28],{type:[1,[],[28]],x:6700,y:12400,w:500,h:100,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[23],{type:[1,[],[23]],x:6750,y:12050,w:550,h:450,tornadoStrength:3,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:6700,y:11400,w:500,h:1100,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:15600,w:700,h:200,force:1500,dir:{"x":0,"y":1500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[19],{type:[1,[],[19]],x:5700,y:16100,w:300,h:1200,speedInc:0.7,inView:false,speedChangePermanent:false,speedMult:0.7,})
C(1,[],[20],{x:2700,y:15200,w:700,h:600,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[13],{type:[1,[],[13]],x:2700,y:15200,w:700,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:3200,y:15200,w:200,h:300,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:15400,w:700,h:100,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:15400,w:200,h:300,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:15600,w:700,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[20],{x:2700,y:15100,w:700,h:700,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[15],{type:[1,[],[15]],x:2400,y:15100,w:300,h:1600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:2450,y:15100,w:250,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1050,y:15100,w:400,h:350,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:1050,y:15200,w:400,h:200,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[20],{h:450,w:1400,y:16350,x:800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[13],{type:[1,[],[13]],x:800,y:16400,w:500,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1300,y:16400,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2100,y:16700,w:300,h:500,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:2000,y:16400,w:100,h:400,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2100,y:16700,w:200,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:16700,w:100,h:200,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:16800,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[1100,8350],[1100,8300]],"type":"poly","props":{}},endPolygon:{"points":[[1150,8400],[1200,8400]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:1700,y:16400,w:300,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[24],{type:[1,[],[24]],x:800,y:16300,w:1400,h:550,ir:0.25,or:0.7,o:0.599,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.42,innerOpacity:0,outerOpacity:1,})
C(1,[],[17],{type:[1,[],[17]],x:800,y:16350,w:1400,h:450,time:0,maxTime:2.1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:126,})
C(1,[],[17],{type:[1,[],[17]],x:300,y:15100,w:1250,h:800,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:2400,y:16800,w:200,h:400,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:16900,w:400,h:300,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:700,y:16500,w:100,h:200,force:6000,dir:{"x":6000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[13],{type:[1,[],[13]],x:650,y:16600,w:150,h:100,force:7000,dir:{"x":0,"y":-7000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.95798319327731,})
C(4,[],[0],{type:[4,[],[0]],x:2400,y:17000,radius:150,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[1300,8500],[1350,8500]],"type":"poly","props":{}},endPolygon:{"points":[[1100,8500],[1050,8500]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:1100,y:16700,w:300,h:100,force:6000,dir:{"x":0,"y":-6000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[13],{type:[1,[],[13]],x:800,y:16400,w:300,h:100,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:16400,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1200,y:16400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:16400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1100,y:16400,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:16100,w:1000,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:15100,w:500,h:1300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[800,16300],[1800,16300],[1800,16400],[800,16500]],most:{"left":400,"right":900,"top":8150,"bottom":8250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:1700,y:16750,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:16700,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1500,y:16600,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:16650,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[800,16630],[1800,16820],[1800,16960],[800,16960]],most:{"left":400,"right":900,"top":8315,"bottom":8480},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:16800,w:400,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:16900,w:1000,h:400,canJump:true,inView:false,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[2150,16925],[2025.8610463437158,16998.47315653656],[1700.8610463437158,17043.882064536894],[1299.1389536562842,17043.882064536894],[974.1389536562842,16998.47315653656],[850,16925],[974.1389536562841,16851.52684346344],[1299.138953656284,16806.117935463106],[1700.8610463437158,16806.117935463106],[2025.8610463437158,16851.52684346344]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(1500,16925,650,125,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[2150,16225],[2025.8610463437158,16298.473156536558],[1700.8610463437158,16343.882064536894],[1299.1389536562842,16343.882064536894],[974.1389536562842,16298.47315653656],[850,16225],[974.1389536562841,16151.526843463442],[1299.138953656284,16106.117935463106],[1700.8610463437158,16106.117935463106],[2025.8610463437158,16151.52684346344]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(1500,16225,650,125,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[13],{type:[1,[],[13]],x:650,y:16600,w:200,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:300,y:16400,w:300,h:100,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:300,y:16400,w:300,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[17],{type:[1,[],[17]],x:0,y:16500,w:700,h:700,time:0,maxTime:1.2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:72,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:16550,w:350,h:700,force:6500,dir:{"x":0,"y":-6500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:250,y:16500,w:400,h:400,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:16800,w:700,h:350,force:6500,dir:{"x":-6500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:350,y:16600,w:350,h:600,force:6500,dir:{"x":0,"y":6500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.603841536614646,})
C(1,[],[13],{type:[1,[],[13]],x:300,y:16500,w:400,h:400,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:16500,w:350,h:300,force:15000,dir:{"x":15000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:16100,w:600,h:300,force:8000,dir:{"x":8000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:15100,w:300,h:1250,force:7000,dir:{"x":0,"y":7000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.95798319327731,})
C(1,[],[13],{type:[1,[],[13]],x:300,y:16100,w:300,h:300,force:9000,dir:{"x":0,"y":9000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:6.374549819927971,})
C(1,[],[1],{type:[1,[],[1]],x:14200,y:18950,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14200,y:18900,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:14200,y:18700,w:100,h:900,points:[[7100,9350],[7250,9350]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7100,"y":9350},pointTo:{"x":7250,"y":9350},xv:100,yv:0,inView:false,path:[[14200,18700,3.3333333333333335],[14500,18700,3.3333333333333335]],})
C(1,[],[1],{type:[1,[],[1]],x:15475,y:18900,w:25,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15450,y:18950,w:50,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[20],{x:8900,y:12700,w:300,h:300,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[20],{x:0,y:11400,w:1600,h:1600,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[17],{type:[1,[],[17]],x:0,y:14300,w:7900,h:200,time:0,maxTime:2.99,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:179.4,})
C(1,[],[15],{type:[1,[],[15]],x:0,y:14300,w:7900,h:200,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:14300,w:7900,h:200,force:15000,dir:{"x":-15000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:10.624249699879952,})
C(1,[],[13],{type:[1,[],[13]],x:7300,y:14400,w:200,h:100,force:30000,dir:{"x":0,"y":-30000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:21.248499399759904,})
C(1,[],[17],{type:[1,[],[17]],x:8300,y:14300,w:300,h:500,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[17],{type:[1,[],[17]],x:7600,y:13000,w:1600,h:1000,time:0,maxTime:5.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:330,})
C(4,[],[0],{type:[4,[],[0]],x:8500,y:14700,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[4300,7350],[4350,7350]],"type":"poly","props":{}},endPolygon:{"points":[[4250,7400],[4250,7450]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:8400,y:14700,radius:100,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[4200,7400],[4200,7450]],"type":"poly","props":{}},endPolygon:{"points":[[4150,7350],[4100,7350]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[20],{h:400,w:1000,y:13600,x:7600,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:1000,y:13100,x:7600,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:400,y:13100,x:8700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[13],{type:[1,[],[13]],x:7600,y:13200,w:100,h:600,force:4000,dir:{"x":4000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[0],[1],{type:[1,[0],[1]],x:7600,y:13600,w:200,h:200,points:[[3800,6800],[3900,6800],[3900,6900],[3800,6900]],speed:370.2,currentPoint:0.2428500000002623,collidable:true,pointOn:{"x":3800,"y":6800},pointTo:{"x":3900,"y":6800},xv:370.2,yv:0,inView:false,path:[[7600,13600,12.34],[7800,13600,12.34],[7800,13800,12.34],[7600,13800,12.34]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8000,y:13600,w:200,h:200,points:[[4000,6800],[4100,6800],[4100,6900],[4000,6900]],speed:370.2,currentPoint:2.2428500000002622,collidable:true,pointOn:{"x":4100,"y":6900},pointTo:{"x":4000,"y":6900},xv:-370.2,yv:4.5336424504435016e-14,inView:false,path:[[8000,13600,12.34],[8200,13600,12.34],[8200,13800,12.34],[8000,13800,12.34]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8400,y:13800,w:200,h:200,points:[[4200,6900],[4300,6900],[4300,6800],[4200,6800]],speed:370.2,currentPoint:3.2428500000002622,collidable:true,pointOn:{"x":4200,"y":6800},pointTo:{"x":4200,"y":6900},xv:2.2668212252217508e-14,yv:370.2,inView:false,path:[[8400,13800,12.34],[8600,13800,12.34],[8600,13600,12.34],[8400,13600,12.34]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8700,y:13100,w:200,h:200,points:[[4350,6550],[4450,6550],[4450,6650],[4350,6650]],speed:370.2,currentPoint:2.2428500000002622,collidable:true,pointOn:{"x":4450,"y":6650},pointTo:{"x":4350,"y":6650},xv:-370.2,yv:4.5336424504435016e-14,inView:false,path:[[8700,13100,12.34],[8900,13100,12.34],[8900,13300,12.34],[8700,13300,12.34]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:13100,w:300,h:200,canJump:true,inView:false,})
C(1,[],[19],{type:[1,[],[19]],x:8900,y:11400,w:1350,h:1300,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[17],{type:[1,[],[17]],x:8900,y:11400,w:1300,h:1300,time:0,maxTime:4.4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:264,})
C(1,[],[15],{type:[1,[],[15]],x:8900,y:11400,w:1100,h:100,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:5900,y:11400,w:700,h:500,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[17],{type:[1,[],[17]],x:5900,y:11400,w:700,h:500,time:0,maxTime:2.4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:144,})
C(1,[],[24],{type:[1,[],[24]],x:5900,y:11400,w:700,h:500,ir:0.25,or:0.75,o:0.8,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.44999999999999996,innerOpacity:0,outerOpacity:1,})
C(1,[],[13],{type:[1,[],[13]],x:6000,y:11800,w:600,h:100,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[17],{type:[1,[],[17]],x:7600,y:12100,w:950,h:800,time:0,maxTime:0.7,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:42,})
C(1,[],[13],{type:[1,[],[13]],x:7700,y:12500,w:900,h:400,force:10000,dir:{"x":-10000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:8200,y:12100,w:400,h:400,force:10000,dir:{"x":0,"y":10000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(4,[],[0],{type:[4,[],[0]],x:8150,y:12500,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[4075,6050],[4075,5950]],"type":"poly","props":{}},endPolygon:{"points":[[4075,6450],[4075,6550]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[15],{type:[1,[],[15]],x:3700,y:11500,w:1900,h:1500,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:11500,w:100,h:400,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[1],{type:[1,[],[1]],x:6550,y:13200,w:400,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:6000,y:11800,radius:100,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[3000,5950],[3000,6000]],"type":"poly","props":{}},endPolygon:{"points":[[2950,5900],[2900,5900]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:11500,w:1050,h:300,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4900,y:12300,w:500,h:100,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[28],{type:[1,[],[28]],x:8900,y:12700,w:300,h:300,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:12300,w:400,h:600,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:5100,y:12300,w:500,h:600,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:5400,y:12900,w:200,h:100,force:8000,dir:{"x":0,"y":-8000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[13],{type:[1,[],[13]],x:5100,y:12300,w:500,h:600,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:4500,y:12900,w:900,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:2800,y:12300,w:400,h:600,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:12600,w:1600,h:400,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:3700,y:11500,w:700,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:11900,w:450,h:200,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:11900,w:300,h:400,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:11600,w:250,h:400,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:11900,w:200,h:400,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:12300,w:600,h:300,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:4300,y:12300,w:200,h:500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:4300,y:12300,w:200,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:12700,w:600,h:100,force:4000,dir:{"x":-4000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:12700,w:100,h:300,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:12800,w:100,h:200,force:1000,dir:{"x":1000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:12900,w:1600,h:100,force:8000,dir:{"x":8000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[19],{type:[1,[],[19]],x:3700,y:11400,w:1900,h:1600,speedInc:1.25,inView:false,speedChangePermanent:false,speedMult:1.25,})
C(1,[],[17],{type:[1,[],[17]],x:3700,y:11450,w:1900,h:1550,time:0,maxTime:4.2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:252,})
C(1,[],[13],{type:[1,[],[13]],x:1900,y:11800,w:400,h:600,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:1900,y:12100,w:1700,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:1900,y:11400,w:1800,h:700,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[12],{type:[1,[],[12]],x:4700,y:12700,w:300,h:100,tpx:5974,tpy:11500,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:1600,y:11450,w:2100,h:1550,time:0,maxTime:2.75,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:165,})
C(1,[],[28],{type:[1,[],[28]],x:3825,y:11850,w:0,h:350,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(0,[],[0],{type:[0,[],[0]],x:2200,y:12100,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:12100,radius:250,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[1100,6200],[1100,6300]],"type":"poly","props":{}},endPolygon:{"points":[[1100,5900],[1100,5800]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:7150,y:11250,w:1750,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:12300,w:950,h:400,canJump:true,inView:false,})
C(1,[],[28],{type:[1,[],[28]],x:0,y:11400,w:1600,h:1600,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:11400,w:1600,h:1600,spawn:{"x":400,"y":6100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[19],{type:[1,[],[19]],x:1600,y:5800,w:200,h:500,speedInc:2.5,inView:false,speedChangePermanent:false,speedMult:2.5,})
C(1,[],[20],{h:500,w:200,y:5800,x:1600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#ff0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[17],{type:[1,[],[17]],x:1800,y:4950,w:1050,h:1350,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[19],{type:[1,[],[19]],x:1800,y:5000,w:1050,h:1300,speedInc:2.5,inView:false,speedChangePermanent:false,speedMult:2.5,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:6100,w:500,h:700,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[17],{type:[1,[],[17]],x:0,y:5800,w:1600,h:2050,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:5800,w:1600,h:600,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[19],{type:[1,[],[19]],x:0,y:5800,w:1600,h:500,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[17],{type:[1,[],[17]],x:0,y:5000,w:1800,h:600,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:5000,w:300,h:100,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:550,y:5000,w:100,h:600,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1150,y:5000,w:100,h:600,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1700,y:5000,w:100,h:600,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[17],{type:[1,[],[17]],x:1600,y:6600,w:1400,h:1100,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[17],{type:[1,[],[17]],x:5600,y:7600,w:4300,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[13],{type:[1,[],[13]],x:5600,y:7600,w:4400,h:100,force:10000,dir:{"x":-10000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[17],{type:[1,[],[17]],x:6300,y:9900,w:3600,h:100,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:9900,w:3700,h:100,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[17],{type:[1,[],[17]],x:6300,y:7900,w:700,h:2000,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[13],{type:[1,[],[13]],x:1600,y:7300,w:500,h:350,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:6600,w:2800,h:1200,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[19],{type:[1,[],[19]],x:0,y:6300,w:3000,h:1500,speedInc:1.8,inView:false,speedChangePermanent:false,speedMult:1.8,})
C(1,[],[17],{type:[1,[],[17]],x:3000,y:6600,w:1000,h:1950,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:6600,w:800,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:6600,w:200,h:600,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:8400,w:700,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:6800,w:800,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3400,y:7600,w:600,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:2500,y:8550,w:1500,h:1400,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[13],{type:[1,[],[13]],x:2500,y:8600,w:1100,h:1350,force:3200,dir:{"x":0,"y":3200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[],[13],{type:[1,[],[13]],x:2500,y:8600,w:1100,h:1350,force:3200,dir:{"x":-3200,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[],[13],{type:[1,[],[13]],x:3600,y:8200,w:600,h:800,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:8200,w:800,h:400,force:3200,dir:{"x":3200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:7400,w:400,h:800,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:7200,w:400,h:200,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:7200,w:600,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[7],{type:[1,[],[7]],x:3850,y:6650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3850,y:7250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3000,y:7400,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3150,y:8100,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3850,y:8350,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[17],{type:[1,[],[17]],x:300,y:9600,w:2200,h:400,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:6500,w:150,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:6450,w:200,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:950,y:6750,r:650,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2150,y:5650,radius:400,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[1075,2500],[1075,2425]],"type":"poly","props":{}},endPolygon:{"points":[[1075,3150],[1075,3225]],"type":"poly","props":{}},innerRadius:650,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:800,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:5750,w:300,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1700,y:5800,r:100,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:300,y:6100,radius:225,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[0,3050],[-75,3050]],"type":"poly","props":{}},endPolygon:{"points":[[150,2900],[150,2825]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,0],[6400,0],[6400,100]],most:{"left":3150,"right":3200,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:4700,w:300,h:300,spawn:{"x":75,"y":2425},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[17],{type:[1,[],[17]],x:7800,y:6400,w:1600,h:200,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[17],{type:[1,[],[17]],x:9600,y:6600,w:400,h:600,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:7200,y:6600,w:400,h:600,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[0],[1],{type:[1,[0],[1]],x:8400,y:6400,w:100,h:100,points:[[4200,3200],[4250,3200],[4250,3250],[4200,3250]],speed:75,currentPoint:3.0125,collidable:true,pointOn:{"x":4200,"y":3250},pointTo:{"x":4200,"y":3200},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[8400,6400,2.5],[8500,6400,2.5],[8500,6500,2.5],[8400,6500,2.5]],boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:8200,y:3300,w:1200,h:700,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[19],{type:[1,[],[19]],x:8200,y:3300,w:1200,h:700,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[],[13],{type:[1,[],[13]],x:8200,y:3300,w:1200,h:700,force:1000,dir:{"x":-1000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:7900,w:600,h:300,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[17],{type:[1,[],[17]],x:4200,y:5900,w:1100,h:4000,time:0,maxTime:7,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:420,})
C(1,[],[17],{type:[1,[],[17]],x:7000,y:3000,w:1200,h:1500,time:0,maxTime:1.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:90,})
C(1,[],[19],{type:[1,[],[19]],x:7000,y:3100,w:1200,h:1150,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(4,[],[0],{type:[4,[],[0]],x:7900,y:3800,radius:200,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[3950,2000],[3950,2100]],"type":"poly","props":{}},endPolygon:{"points":[[3850,1900],[3750,1900]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[17],{type:[1,[],[17]],x:3000,y:5200,w:1200,h:1100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:5900,w:1400,h:400,force:3500,dir:{"x":3500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:5800,w:1100,h:4000,force:3200,dir:{"x":0,"y":3200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2665066026410563,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:5200,w:900,h:500,force:3500,dir:{"x":-3500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:4200,y:4600,w:2900,h:1200,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:5200,w:2400,h:700,force:3500,dir:{"x":-3500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:5900,y:3100,w:1100,h:1100,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:3800,w:700,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(4,[],[0],{type:[4,[],[0]],x:6450,y:3650,radius:325,startAngle:-4.71238898038469,endAngle:0,startPolygon:{"points":[[3225,2100],[3225,2150]],"type":"poly","props":{}},endPolygon:{"points":[[3500,1825],[3550,1825]],"type":"poly","props":{}},innerRadius:550,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:650,startSliceAngle:-4.71238898038469,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:9550,y:1300,w:450,h:200,force:4500,dir:{"x":0,"y":-4500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:9500,y:1100,w:500,h:500,force:50,dir:{"x":-50,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.035414165666266505,})
C(1,[],[17],{type:[1,[],[17]],x:8900,y:1100,w:1100,h:500,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:8900,y:1100,w:1100,h:500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[17],{type:[1,[],[17]],x:8600,y:1600,w:1300,h:1200,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:0,y:3100,w:400,h:400,time:0,maxTime:10,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:600,})
let typingVinette8039;
    C(1,[],[24],{x:0,y:3100,w: 400,h:400,innerR: 0, innerG: 0, innerB: 0, innerSize: 0, innerOpacity: 0, outerR: 0, outerG: 0, outerB: 0, outerSize: 0.42, outerOpacity: 0.9});typingVinette8039=shared.obstacles[shared.obstacles.length-1];
{let completed = false;let active = false;let curChar = 0;let text="There's no way you're beating this next area.";let freezeX, freezeY;
    C(1,[],[3],{"x":0,"y":3100,w:400,h:400,ef:(p)=>{
        if(completed === true) return;
        if(active === true) {
            p.pos.x = freezeX;
            p.pos.y = freezeY;
            return;
        }
        active = true;

        freezeX = p.pos.x;
        freezeY = p.pos.y;

        let oldKeyDown = shared.onkeydown;
        let oldKeyUp = shared.onkeyup;

        for(let key in input){input[key] = false;}

        shared.onkeyup = () => {};
        shared.onkeydown = (e) => {
            if(e.type !== 'keydown') return;
            if(text[curChar] === e.key) curChar++;
            if(curChar >= text.length) {shared.onkeydown = oldKeyDown; shared.onkeyup = oldKeyUp; completed = true; active = false;typingVinette8039.pos.x = -1E9;}
        }
    },cr:(o)=>{
        if (completed === true) ctx.globalAlpha = 0.2;
        ctx.fillStyle = 'white';
        ctx.font = (o.dimensions.x / 10) + "px Inter";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const aheadChar = Math.min(
            text.length,
            curChar + 15
        );
        const textToDisplay = text.slice(curChar, aheadChar);
        ctx.fillText(
            textToDisplay,
            200, 3300,
        );
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.17;
        if (completed === true) ctx.globalAlpha = 0.05;

        // ctx.beginPath();
        // for(let i = 0; i < o.sat.points.length; i++){
        //     ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        // }
        // ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
        // ctx.fill();
        // ctx.closePath();
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);

        ctx.globalAlpha = 1;
    }})};
C(1,[],[17],{type:[1,[],[17]],x:9900,y:7600,w:100,h:2400,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:9900,y:7600,w:100,h:2400,force:10000,dir:{"x":0,"y":-10000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[17],{type:[1,[],[17]],x:5500,y:7800,w:800,h:2200,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[19],{type:[1,[],[19]],x:5500,y:7800,w:800,h:2200,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[1],{type:[1,[],[1]],x:9800,y:7800,w:100,h:2000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:3500,w:400,h:700,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:6600,y:3500,w:400,h:300,force:50000,dir:{"x":0,"y":50000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:35.414165666266506,})
C(4,[],[0],{type:[4,[],[0]],x:5900,y:9700,radius:200,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2950,4700],[2950,4650]],"type":"poly","props":{}},endPolygon:{"points":[[2950,5000],[2950,5050]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:6200,y:0,w:300,h:200,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[17],{type:[1,[],[17]],x:6400,y:0,w:900,h:1100,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[14],{type:[1,[],[14]],x:6400,y:0,w:1100,h:1600,force:3000,dir:{"x":0,"y":3000},direction:"down",jumpHeight:200,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6482593037214887,jumpForce:58,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[27],{type:[1,[],[27]],x:6250,y:50,w:100,h:100,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.004714274690260794,})
C(1,[],[1],{type:[1,[],[1]],x:3600,y:5700,w:400,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:5200,w:400,h:700,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[15],{type:[1,[],[15]],x:6600,y:4200,w:400,h:400,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[17],{type:[1,[],[17]],x:6600,y:4200,w:400,h:400,time:0,maxTime:0.3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:18,})
C(1,[],[13],{type:[1,[],[13]],x:6600,y:4200,w:400,h:400,force:6000,dir:{"x":0,"y":6000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.249699879951981,})
C(1,[],[17],{type:[1,[],[17]],x:3600,y:4050,w:1400,h:350,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:3600,y:3800,w:1900,h:600,force:4500,dir:{"x":-4500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[1],{type:[1,[],[1]],x:3600,y:4100,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6600,y:3100,w:400,h:400,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:7000,y:3800,w:200,h:400,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:3900,y:5200,w:100,h:500,force:3500,dir:{"x":-3500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[17],{type:[1,[],[17]],x:3500,y:3100,w:1500,h:600,time:0,maxTime:4.2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:252,})
C(1,[],[13],{type:[1,[],[13]],x:3500,y:3100,w:2000,h:600,force:4000,dir:{"x":4000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[17],{type:[1,[],[17]],x:9200,y:2800,w:200,h:500,time:0,maxTime:1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,})
C(1,[],[13],{type:[1,[],[13]],x:9200,y:2800,w:200,h:500,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:5000,y:3100,w:500,h:950,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:6600,y:4700,w:400,h:1000,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:5200,w:600,h:500,force:3300,dir:{"x":-3300,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.33733493397359,})
C(1,[],[13],{type:[1,[],[13]],x:7600,y:3500,w:500,h:200,force:3000,dir:{"x":0,"y":-3000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:3500,w:400,h:200,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:8000,y:3700,w:200,h:400,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7500,y:3100,w:200,h:400,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[17],{type:[1,[],[17]],x:4000,y:0,w:2200,h:1700,time:0,maxTime:15,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:900,})
C(1,[],[19],{type:[1,[],[19]],x:4000,y:0,w:2400,h:1700,speedInc:1.8,inView:true,speedChangePermanent:false,speedMult:1.8,})
C(1,[],[9],{type:[1,[],[9]],x:8900,y:0,w:1100,h:1100,spawn:{"x":4725,"y":275},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:6100,y:0,w:400,h:200,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[17],{type:[1,[],[17]],x:7500,y:0,w:1300,h:1500,time:0,maxTime:12,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:720,})
C(1,[],[14],{type:[1,[],[14]],x:7500,y:0,w:1300,h:800,force:4200,dir:{"x":0,"y":4200},direction:"down",jumpHeight:200,maxForce:1000,variableJumpHeight:false,platformerFriction:0.9,inView:false,specialPOSPDPlatformer:true,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:1.089075630252101,jumpForce:37.7,jumpDecay:0.92,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[17],{type:[1,[],[17]],x:6400,y:1100,w:1100,h:400,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[14],{type:[1,[],[14]],x:7500,y:800,w:1300,h:700,force:3050,dir:{"x":0,"y":3050},direction:"down",jumpHeight:160,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6590636254501802,jumpForce:46.4,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:1100,w:1100,h:400,force:900,dir:{"x":900,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.637454981992797,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:1050,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:1050,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6860,y:1350,w:280,h:200,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:5500,y:900,w:700,h:800,time:0,maxTime:4,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[13],{type:[1,[],[13]],x:5600,y:1000,w:500,h:600,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:5500,y:1000,w:100,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[17],{type:[1,[],[17]],x:4400,y:800,w:500,h:700,time:0,maxTime:2,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[12],{type:[1,[],[12]],x:4400,y:1400,w:500,h:100,tpx:4050,tpy:100,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:true,})
C(1,[],[19],{type:[1,[],[19]],x:2000,y:0,w:1800,h:1000,speedInc:2,inView:true,speedChangePermanent:false,speedMult:2,})
C(1,[],[19],{type:[1,[],[19]],x:3600,y:1000,w:200,h:500,speedInc:2,inView:true,speedChangePermanent:false,speedMult:2,})
C(1,[],[17],{type:[1,[],[17]],x:2000,y:0,w:1800,h:1000,time:0,maxTime:4,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:240,})
C(1,[],[17],{type:[1,[],[17]],x:2000,y:1200,w:1600,h:300,time:0,maxTime:3,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(0,[],[0],{type:[0,[],[0]],x:600,y:400,r:142,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:450,y:1000,r:70,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:350,y:250,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:250,y:700,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:850,y:800,r:70,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1150,y:500,r:180,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:850,y:1150,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1250,y:950,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1700,y:300,r:180,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:150,y:1300,r:180,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:550,y:1500,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1200,y:1450,r:206,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1800,y:850,r:200,renderType:"circle",inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1500,w:4000,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:0,w:200,h:1300,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:1200,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:1400,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:1400,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:1200,w:100,h:100,canJump:true,inView:true,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:1300,w:200,h:200,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:1950,y:1000,w:1650,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:200,w:200,h:1300,canJump:true,inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:3600,y:1100,r:100,renderType:"circle",inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[3800,1300],[3800,1500],[3600,1500]],most:{"left":1800,"right":1900,"top":650,"bottom":750},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,0],[5800,0],[5100,300],[5000,300]],most:{"left":2500,"right":2900,"top":0,"bottom":150},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[29],{type:[1,[],[29]],x:3600,y:1300,w:100,h:100,time:1,inView:true,changeDeathTimerStateTo:true,deathTime:60,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:3600,y:900,w:100,h:100,inView:true,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[0],{type:[1,[],[0]],x:3600,y:800,w:200,h:100,canJump:true,inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:3300,y:500,r:200,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:2600,y:500,r:200,renderType:"circle",inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:1900,y:500,radius:100,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[950,250],[950,150]],"type":"poly","props":{}},endPolygon:{"points":[[950,250],[950,350]],"type":"poly","props":{}},renderType:"circle",inView:true,r:200,innerRadius:0,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[1],{type:[1,[],[1]],x:2000,y:900,w:1300,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2000,y:0,w:1500,h:100,canCollide:true,inView:true,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:2200,y:450,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2900,y:450,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3600,y:450,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:3800,y:0,w:200,h:200,coins:3,currentCoins:3,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:0,w:400,h:200,force:8000,dir:{"x":8000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:200,w:400,h:1500,canJump:true,inView:true,})
C(1,[],[27],{type:[1,[],[27]],x:4000,y:0,w:0,h:200,state:true,shipAngle:1.5707963267948966,inView:true,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.004714274690260794,})
C(0,[],[0],{type:[0,[],[0]],x:5000,y:0,r:300,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:4400,y:500,r:300,renderType:"circle",inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:800,w:600,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:1500,w:650,h:200,canJump:true,inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4650,900],[4750,1000],[4650,1150],[4550,1000]],most:{"left":2275,"right":2375,"top":450,"bottom":575},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4900,1150],[4900,1250],[4800,1250]],most:{"left":2400,"right":2450,"top":575,"bottom":625},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4650,1250],[4750,1500],[4550,1500]],most:{"left":2275,"right":2375,"top":625,"bottom":750},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4400,1150],[4500,1250],[4400,1250]],most:{"left":2200,"right":2250,"top":575,"bottom":625},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[7],{type:[1,[],[7]],x:4450,y:1300,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4750,y:1300,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{type:[0,[],[0]],x:6100,y:500,r:300,renderType:"circle",inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:6198,y:0,w:202,h:200,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:200,w:200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:200,w:150,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1700,w:6400,h:1400,canJump:true,inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:5700,y:1100,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6000,y:1100,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6000,y:1500,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5700,y:1500,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:1100,w:500,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:1000,w:300,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:6100,y:800,w:100,h:800,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:5600,y:1600,w:600,h:100,force:2000,dir:{"x":-2000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:5500,y:1000,w:100,h:700,force:2000,dir:{"x":0,"y":-2000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:5500,y:800,w:600,h:200,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[7],{type:[1,[],[7]],x:5800,y:1600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:6100,y:1300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:5500,y:1300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{type:[0,[],[0]],x:6200,y:1700,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5500,y:1700,r:50,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3500,1200],[3600,1200],[3600,1300]],most:{"left":1750,"right":1800,"top":600,"bottom":650},renderType:"poly",inView:true,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:5400,y:800,w:300,h:100,angle:-11,rotateSpeed:-0.09444444444444446,pivotX:5550,pivotY:850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:5.975000000000087,inView:false,initialRotation:-630.2535746439056,})
C(1,[],[12],{type:[1,[],[12]],x:5400,y:700,w:200,h:100,tpx:4050,tpy:100,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5200,y:800,r:300,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:6200,y:800,r:112,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:0,w:200,h:1000,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6400,200],[7200,300],[6400,400]],most:{"left":3200,"right":3600,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6400,500],[7200,600],[6400,700]],most:{"left":3200,"right":3600,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6400,800],[7200,900],[6400,1000]],most:{"left":3200,"right":3600,"top":400,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7300,650],[7300,850],[6500,750]],most:{"left":3250,"right":3650,"top":325,"bottom":425},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7300,350],[7300,550],[6500,450]],most:{"left":3250,"right":3650,"top":175,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:200,w:800,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6750,y:100,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:0,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:0,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:1000,w:1000,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6350,y:1500,w:2550,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:100,w:100,h:1450,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:6600,y:1200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7000,y:1350,r:130,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7400,y:1200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7500,y:0,w:100,h:1100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:8700,y:200,w:100,h:1300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7600,y:700,w:900,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7750,y:200,w:1050,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:1100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:8400,y:1200,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7900,y:1200,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:1100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:500,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:0,w:50,h:500,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:7850,y:630,w:100,h:100,angle:3,rotateSpeed:0.025757575757575757,pivotX:7900,pivotY:680,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:35.35533905932738,unSim:5.975000000000087,inView:false,initialRotation:171.88733853924697,})
C(1,[1],[0],{type:[1,[1],[0]],x:8250,y:630,w:100,h:100,angle:-3,rotateSpeed:-0.025757575757575757,pivotX:8300,pivotY:680,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:35.35533905932738,unSim:5.975000000000087,inView:false,initialRotation:-171.88733853924697,})
C(0,[],[0],{type:[0,[],[0]],x:1200,y:50,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:700,y:-50,r:112,renderType:"circle",inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:8800,y:0,w:100,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:1600,w:100,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:2800,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:2800,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8550,y:2900,w:600,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9100,y:3200,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8450,y:3150,w:650,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:2850,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:2900,w:600,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7650,y:4000,w:1750,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:3250,w:200,h:450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8100,y:3700,r:100,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:9250,y:1850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9150,y:2200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9350,y:2450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:6400,y:1000,w:100,h:300,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:4200,w:1250,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:4200,w:700,h:400,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:3100,w:700,h:400,force:4000,dir:{"x":4000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:3050,w:400,h:1550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:1600,w:700,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:1550,w:550,h:1750,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6900,y:1600,w:1200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:3500,w:200,h:700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7600,y:3500,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:3100,w:200,h:700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7100,y:3800,r:100,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:7400,y:3300,radius:200,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[3600,1650],[3500,1650]],"type":"poly","props":{}},endPolygon:{"points":[[3700,1550],[3700,1450]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:7800,y:3300,radius:200,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[3900,1550],[3900,1450]],"type":"poly","props":{}},endPolygon:{"points":[[4000,1650],[4100,1650]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:4550,w:200,h:650,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6500,y:5200,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:4550,w:200,h:1150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:5700,w:3200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:4400,w:2350,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:6300,w:200,h:3700,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5700,y:5600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5600,y:5500,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:5450,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5400,y:5500,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5300,y:5600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3150,y:4550,w:3250,h:650,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:5200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5000,y:5200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4900,y:5200,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4800,y:5200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:5200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:5600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4400,y:5500,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4300,y:5450,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4200,y:5500,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5900,y:5200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6000,y:5200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6100,y:5200,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6200,y:5200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:6300,y:5200,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:3050,w:500,h:2150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:3700,w:1500,h:400,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7050,5450],[7050,5750],[6750,5750]],most:{"left":3375,"right":3525,"top":2725,"bottom":2875},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:3100,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:3550,w:200,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3500,3500],[3700,3550],[3500,3550]],most:{"left":1750,"right":1850,"top":1750,"bottom":1775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3500,3250],[3700,3250],[3500,3300]],most:{"left":1750,"right":1850,"top":1625,"bottom":1650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:5900,w:400,h:1700,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,5200],[3450,5200],[3000,5650]],most:{"left":1500,"right":1725,"top":2600,"bottom":2825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3000,5950],[3400,6350],[3000,6350]],most:{"left":1500,"right":1700,"top":2975,"bottom":3175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:5550,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3600,y:4050,w:500,h:100,angle:3,rotateSpeed:0.025757575757575757,pivotX:3850,pivotY:4100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.05235987755982988,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4100,y:4050,w:500,h:100,angle:43,rotateSpeed:0.025757575757575757,pivotX:4350,pivotY:4100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.7504915783575616,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4350,y:4050,w:500,h:100,angle:63,rotateSpeed:0.025757575757575757,pivotX:4600,pivotY:4100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.0995574287564276,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:4050,w:500,h:100,angle:83,rotateSpeed:0.025757575757575757,pivotX:4850,pivotY:4100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.4486232791552935,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3850,y:4100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4350,y:4100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4600,y:4100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4850,y:4100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:3100,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3700,y:3600,w:1300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:3700,y:3350,w:500,h:100,angle:3,rotateSpeed:0.025757575757575757,pivotX:3950,pivotY:3400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:171.88733853924697,})
C(1,[1],[0],{type:[1,[1],[0]],x:4100,y:3350,w:500,h:100,angle:93,rotateSpeed:0.025757575757575757,pivotX:4350,pivotY:3400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:5328.507494716656,})
C(1,[1],[0],{type:[1,[1],[0]],x:4500,y:3350,w:500,h:100,angle:3,rotateSpeed:0.025757575757575757,pivotX:4750,pivotY:3400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:171.88733853924697,})
C(0,[],[1],{type:[0,[],[1]],x:3950,y:3400,r:48,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4350,y:3400,r:48,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4750,y:3400,r:48,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[20],{h:100,w:50,y:5900,x:4600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:100,w:50,y:5900,x:4850,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(0,[],[1],{type:[0,[],[1]],x:8700,y:2000,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9050,y:2050,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8800,y:1750,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9500,y:1700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9700,y:1550,r:125,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9750,y:1900,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9500,y:2150,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8850,y:2300,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8800,y:2600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9100,y:2600,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9600,y:2450,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9650,y:2700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9900,y:2600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:1600,w:150,h:1700,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:9800,y:2300,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[20],{h:50,w:300,y:3450,x:3500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:5650,y:7300,w:4500,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:7600,w:200,h:2100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:4250,y:8850,w:300,h:300,angle:45,rotateSpeed:0,pivotX:4400,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4250,y:9400,w:300,h:300,angle:45,rotateSpeed:0,pivotX:4400,pivotY:9550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4950,y:8850,w:300,h:300,angle:45,rotateSpeed:0,pivotX:5100,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4950,y:9400,w:300,h:300,angle:45,rotateSpeed:0,pivotX:5100,pivotY:9550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4675,y:9200,w:150,h:150,angle:45,rotateSpeed:0,pivotX:4750,pivotY:9275,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:6450,y:3650,r:350,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5850,3950],[6200,4300],[5850,4300]],most:{"left":2925,"right":3100,"top":1975,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5850,3000],[6200,3050],[5850,3350]],most:{"left":2925,"right":3100,"top":1500,"bottom":1675},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6700,3050],[7050,3100],[7050,3350]],most:{"left":3350,"right":3525,"top":1525,"bottom":1675},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:5000,w:200,h:1350,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:7300,y:4000,radius:200,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[3750,2000],[3850,2000]],"type":"poly","props":{}},endPolygon:{"points":[[3650,2100],[3650,2200]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:6300,w:1200,h:300,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:4950,y:6700,w:300,h:300,angle:41,rotateSpeed:-0.03434343434343435,pivotX:5100,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.715584993317675,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4250,y:6700,w:300,h:300,angle:49,rotateSpeed:0.03434343434343435,pivotX:4400,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.8552113334772214,boundPlayer:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:3050,y:5750,w:1000,h:100,angle:-6,rotateSpeed:-Math.PI/60,pivotX:3550,pivotY:5800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.24689052802225,unSim:5.975000000000087,inView:false,initialRotation:-343.77467707849394,})
C(0,[],[0],{type:[0,[],[0]],x:3550,y:5800,r:150,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:5900,w:300,h:300,angle:41,rotateSpeed:-0.03434343434343435,pivotX:4750,pivotY:6050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.715584993317675,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:9800,w:1300,h:200,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.0828331332533,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:9650,w:100,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5400,y:9700,r:100,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5850,y:9200,radius:200,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[2925,4750],[2925,4800]],"type":"poly","props":{}},endPolygon:{"points":[[2925,4450],[2925,4400]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5900,y:8700,radius:200,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2950,4200],[2950,4150]],"type":"poly","props":{}},endPolygon:{"points":[[2950,4500],[2950,4550]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:9000,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:8500,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:7800,w:1300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6900,y:7900,w:200,h:1900,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,7800],[5900,7800],[5500,8050]],most:{"left":2750,"right":2950,"top":3900,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,8300],[6300,8700],[6050,8350]],most:{"left":3025,"right":3150,"top":4150,"bottom":4350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5900,9300],[6300,9300],[6200,9500]],most:{"left":2950,"right":3150,"top":4650,"bottom":4750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,9700],[6300,10000],[6100,10000]],most:{"left":3050,"right":3150,"top":4850,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,9250],[5650,9450],[5500,9800]],most:{"left":2750,"right":2825,"top":4625,"bottom":4900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,9300],[6300,9700],[6200,9500]],most:{"left":3100,"right":3150,"top":4650,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,8700],[6300,9300],[6050,9050]],most:{"left":3025,"right":3150,"top":4350,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6150,8950],[6300,9300],[5800,9300],[5800,9050]],most:{"left":2900,"right":3150,"top":4475,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5900,8300],[6300,8300],[6050,8350]],most:{"left":2950,"right":3150,"top":4150,"bottom":4175},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,8700],[5700,8850],[5500,9200]],most:{"left":2750,"right":2850,"top":4350,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5450,8450],[5600,8450],[5900,8600],[5900,8850],[5450,8900]],most:{"left":2725,"right":2950,"top":4225,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5450,8100],[5600,8400],[5650,8550],[5400,8500]],most:{"left":2700,"right":2825,"top":4050,"bottom":4275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:6850,y:7850,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,9800],[6450,10000],[6300,10000]],most:{"left":3150,"right":3225,"top":4900,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:3850,y:4050,w:500,h:100,angle:23,rotateSpeed:0.025757575757575757,pivotX:4100,pivotY:4100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.40142572795869574,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4100,y:4100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:7800,w:2700,h:2000,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:7000,y:9800,w:2800,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[6700,9800],[7000,9800],[7000,9900]],most:{"left":3350,"right":3500,"top":4900,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[1],{type:[0,[],[1]],x:9800,y:9800,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5500,y:7700,w:4300,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9800,y:7800,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:9900,y:7700,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[4950,3800],[4950,3750]],"type":"poly","props":{}},endPolygon:{"points":[[5000,3850],[5050,3850]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:9900,y:9900,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[5000,4950],[5050,4950]],"type":"poly","props":{}},endPolygon:{"points":[[4950,5000],[4950,5050]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:5850,y:9200,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5850,y:8200,radius:200,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[2925,4250],[2925,4300]],"type":"poly","props":{}},endPolygon:{"points":[[2925,3950],[2925,3900]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:9000,w:300,h:400,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5900,y:8700,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5850,y:8200,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:8000,w:450,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5450,y:9500,w:300,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5400,9800],[5750,9800],[5900,9898]],most:{"left":2700,"right":2950,"top":4900,"bottom":4949},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:5900,y:9700,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:9500,w:300,h:100,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:9850,y:1250,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9900,y:1500,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9550,y:1250,r:125,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:9975,y:1575,w:25,h:25,tpx:150,tpy:4850,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:3500,w:1350,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:2950,w:2650,h:1750,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:150,y:3450,w:100,h:50,tpx:150,tpy:4850,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:5500,y:7600,w:100,h:100,tpx:150,tpy:4850,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:4650,w:250,h:450,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6300,8000],[6500,8200],[6300,8250]],most:{"left":3150,"right":3250,"top":4000,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6900,8000],[6900,8250],[6700,8200]],most:{"left":3350,"right":3450,"top":4000,"bottom":4125},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:10,w:200,y:9800,x:6700,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:10,w:200,y:9800,x:6300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:7400,y:4800,w:2400,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:5850,w:1550,h:1500,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:4600,w:100,h:100,points:[[3600,2300],[4150,2300]],speed:300,currentPoint:1.2772727272727273,collidable:true,pointOn:{"x":4150,"y":2300},pointTo:{"x":3600,"y":2300},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[7200,4600,10],[8300,4600,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:4700,w:100,h:100,points:[[3600,2350],[4150,2350]],speed:300,currentPoint:0.2772727272727273,collidable:true,pointOn:{"x":3600,"y":2350},pointTo:{"x":4150,"y":2350},xv:300,yv:0,inView:false,path:[[7200,4700,10],[8300,4700,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9900,y:4600,w:100,h:100,points:[[4950,2300],[4400,2300]],speed:300,currentPoint:1.2772727272727273,collidable:true,pointOn:{"x":4400,"y":2300},pointTo:{"x":4950,"y":2300},xv:300,yv:0,inView:false,path:[[9900,4600,10],[8800,4600,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9900,y:4700,w:100,h:100,points:[[4950,2350],[4400,2350]],speed:300,currentPoint:0.2772727272727273,collidable:true,pointOn:{"x":4950,"y":2350},pointTo:{"x":4400,"y":2350},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[9900,4700,10],[8800,4700,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:4600,w:100,h:100,points:[[3600,2300],[3600,2950]],speed:300,currentPoint:0.7730769230769231,collidable:true,pointOn:{"x":3600,"y":2300},pointTo:{"x":3600,"y":2950},xv:1.8369701987210297e-14,yv:300,inView:false,path:[[7200,4600,10],[7200,5900,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:4600,w:100,h:100,points:[[3650,2300],[3650,2950]],speed:300,currentPoint:1.773076923076923,collidable:true,pointOn:{"x":3650,"y":2950},pointTo:{"x":3650,"y":2300},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[7300,4600,10],[7300,5900,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9900,y:4600,w:100,h:100,points:[[4950,2300],[4950,2950]],speed:300,currentPoint:0.7730769230769231,collidable:true,pointOn:{"x":4950,"y":2300},pointTo:{"x":4950,"y":2950},xv:1.8369701987210297e-14,yv:300,inView:false,path:[[9900,4600,10],[9900,5900,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9800,y:4600,w:100,h:100,points:[[4900,2300],[4900,2950]],speed:300,currentPoint:1.773076923076923,collidable:true,pointOn:{"x":4900,"y":2950},pointTo:{"x":4900,"y":2300},xv:1.8369701987210297e-14,yv:-300,inView:false,path:[[9800,4600,10],[9800,5900,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:6000,w:100,h:100,points:[[3600,3000],[3650,3000],[3650,3150],[3600,3150]],speed:300,currentPoint:2.05,collidable:true,pointOn:{"x":3650,"y":3150},pointTo:{"x":3600,"y":3150},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[7200,6000,10],[7300,6000,10],[7300,6300,10],[7200,6300,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9900,y:6000,w:100,h:100,points:[[4950,3000],[4900,3000],[4900,3150],[4950,3150]],speed:300,currentPoint:2.05,collidable:true,pointOn:{"x":4900,"y":3150},pointTo:{"x":4950,"y":3150},xv:300,yv:0,inView:false,path:[[9900,6000,10],[9800,6000,10],[9800,6300,10],[9900,6300,10]],boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:7750,y:100,w:200,h:100,points:[[3875,50],[4050,50]],speed:150,currentPoint:1.15,alongWith:false,pointOn:{"x":4050,"y":50},pointTo:{"x":3875,"y":50},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[7750,100,5],[8100,100,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:8250,y:100,w:200,h:100,points:[[4125,50],[4300,50]],speed:150,currentPoint:0.15,alongWith:false,pointOn:{"x":4125,"y":50},pointTo:{"x":4300,"y":50},xv:150,yv:0,inView:false,path:[[8250,100,5],[8600,100,5]],})
C(1,[],[0],{type:[1,[],[0]],x:6250,y:8200,w:250,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:8200,w:200,h:1600,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:8350,w:300,h:300,angle:45,rotateSpeed:0,pivotX:4750,pivotY:8500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4225,y:8675,w:150,h:150,angle:45,rotateSpeed:0,pivotX:4300,pivotY:8750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5125,y:8675,w:150,h:150,angle:45,rotateSpeed:0,pivotX:5200,pivotY:8750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4000,5900],[4200,5900],[4200,5950]],most:{"left":2000,"right":2100,"top":2950,"bottom":2975},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4200,6250],[4200,6300],[4000,6300]],most:{"left":2000,"right":2100,"top":3125,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:6600,y:8200,radius:200,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[3300,3950],[3300,3900]],"type":"poly","props":{}},endPolygon:{"points":[[3450,4100],[3500,4100]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:8800,y:3650,r:150,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:8200,y:3250,radius:150,startAngle:-1.5707963267948966,endAngle:1.5882496193148399,startPolygon:{"points":[[4100,1625],[4100,1475]],"type":"poly","props":{}},endPolygon:{"points":[[4100,1625],[4097.382139034407,1774.9771542734586]],"type":"poly","props":{}},renderType:"circle",inView:false,r:300,innerRadius:0,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5882496193148399,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:9400,y:4050,radius:150,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[4700,2025],[4550,2025]],"type":"poly","props":{}},endPolygon:{"points":[[4700,2025],[4700,1875]],"type":"poly","props":{}},renderType:"circle",inView:false,r:300,innerRadius:0,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[7],{type:[1,[],[7]],x:8500,y:3450,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:4600,y:7300,w:300,h:300,angle:49,rotateSpeed:0.03434343434343435,pivotX:4750,pivotY:7450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.8552113334772214,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4275,y:7875,w:150,h:150,angle:49,rotateSpeed:0.03434343434343435,pivotX:4350,pivotY:7950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.8552113334772214,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4425,y:8025,w:150,h:150,angle:49,rotateSpeed:0.03434343434343435,pivotX:4500,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.8552113334772214,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5075,y:7875,w:150,h:150,angle:41,rotateSpeed:-0.03434343434343435,pivotX:5150,pivotY:7950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.715584993317675,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4925,y:8025,w:150,h:150,angle:41,rotateSpeed:-0.03434343434343435,pivotX:5000,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.715584993317675,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:4225,y:8125,w:150,h:150,angle:49,rotateSpeed:0.03434343434343435,pivotX:4300,pivotY:8200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.8552113334772214,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5125,y:8125,w:150,h:150,angle:41,rotateSpeed:-0.03434343434343435,pivotX:5200,pivotY:8200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,unSim:5.975000000000087,inView:false,initialRotation:0.715584993317675,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:4700,y:8900,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:8600,y:6400,w:0,h:200,tpx:900,tpy:18200,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:6600,w:200,h:200,points:[[3600,3300],[3700,3300]],speed:75,currentPoint:0.50625,collidable:true,pointOn:{"x":3600,"y":3300},pointTo:{"x":3700,"y":3300},xv:75,yv:0,inView:false,path:[[7200,6600,2.5],[7400,6600,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:6800,w:200,h:200,points:[[3600,3400],[3700,3400]],speed:75,currentPoint:1.50625,collidable:true,pointOn:{"x":3700,"y":3400},pointTo:{"x":3600,"y":3400},xv:-75,yv:9.184850993605149e-15,inView:false,path:[[7200,6800,2.5],[7400,6800,2.5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:6400,w:200,h:700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7700,y:7100,r:100,renderType:"circle",inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:7000,w:200,h:200,points:[[3600,3500],[3700,3500]],speed:75,currentPoint:0.50625,collidable:true,pointOn:{"x":3600,"y":3500},pointTo:{"x":3700,"y":3500},xv:75,yv:0,inView:false,path:[[7200,7000,2.5],[7400,7000,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:6800,w:200,h:200,points:[[4800,3400],[4900,3400]],speed:75,currentPoint:0.50625,collidable:true,pointOn:{"x":4800,"y":3400},pointTo:{"x":4900,"y":3400},xv:75,yv:0,inView:false,path:[[9600,6800,2.5],[9800,6800,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:6600,w:200,h:200,points:[[4800,3300],[4900,3300]],speed:75,currentPoint:1.50625,collidable:true,pointOn:{"x":4900,"y":3300},pointTo:{"x":4800,"y":3300},xv:-75,yv:9.184850993605149e-15,inView:false,path:[[9600,6600,2.5],[9800,6600,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:7000,w:200,h:200,points:[[4800,3500],[4900,3500]],speed:75,currentPoint:1.50625,collidable:true,pointOn:{"x":4900,"y":3500},pointTo:{"x":4800,"y":3500},xv:-75,yv:9.184850993605149e-15,inView:false,path:[[9600,7000,2.5],[9800,7000,2.5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:6400,w:200,h:700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9500,y:7100,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:7200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:7200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:6600,w:200,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:7000,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:7000,w:600,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7800,y:6900,w:100,h:100,points:[[3900,3450],[4200,3450]],speed:200,currentPoint:1.0055555555555686,collidable:true,pointOn:{"x":4200,"y":3450},pointTo:{"x":3900,"y":3450},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[7800,6900,6.666666666666667],[8400,6900,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7800,y:6800,w:100,h:100,points:[[3900,3400],[4200,3400]],speed:200,currentPoint:0.005555555555567177,collidable:true,pointOn:{"x":3900,"y":3400},pointTo:{"x":4200,"y":3400},xv:200,yv:0,inView:false,path:[[7800,6800,6.666666666666667],[8400,6800,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7800,y:7100,w:100,h:100,points:[[3900,3550],[4200,3550]],speed:300,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":3900,"y":3550},pointTo:{"x":4200,"y":3550},xv:300,yv:0,inView:false,path:[[7800,7100,10],[8400,7100,10]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:6600,w:600,h:200,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7800,y:6400,w:100,h:100,points:[[3900,3200],[3950,3200],[3950,3250],[3900,3250]],speed:75,currentPoint:1.0125,collidable:true,pointOn:{"x":3950,"y":3200},pointTo:{"x":3950,"y":3250},xv:4.592425496802574e-15,yv:75,inView:false,path:[[7800,6400,2.5],[7900,6400,2.5],[7900,6500,2.5],[7800,6500,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8000,y:6400,w:100,h:100,points:[[4000,3200],[4050,3200],[4050,3250],[4000,3250]],speed:75,currentPoint:3.0125,collidable:true,pointOn:{"x":4000,"y":3250},pointTo:{"x":4000,"y":3200},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[8000,6400,2.5],[8100,6400,2.5],[8100,6500,2.5],[8000,6500,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8200,y:6400,w:100,h:100,points:[[4100,3200],[4150,3200],[4150,3250],[4100,3250]],speed:75,currentPoint:1.0125,collidable:true,pointOn:{"x":4150,"y":3200},pointTo:{"x":4150,"y":3250},xv:4.592425496802574e-15,yv:75,inView:false,path:[[8200,6400,2.5],[8300,6400,2.5],[8300,6500,2.5],[8200,6500,2.5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:6600,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:7200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:7200,w:200,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:9300,y:7100,w:100,h:100,points:[[4650,3550],[4350,3550]],speed:300,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":4650,"y":3550},pointTo:{"x":4350,"y":3550},xv:-300,yv:3.6739403974420595e-14,inView:false,path:[[9300,7100,10],[8700,7100,10]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9300,y:6900,w:100,h:100,points:[[4650,3450],[4350,3450]],speed:200,currentPoint:1.005555555556284,collidable:true,pointOn:{"x":4350,"y":3450},pointTo:{"x":4650,"y":3450},xv:200,yv:0,inView:false,path:[[9300,6900,6.666666666666667],[8700,6900,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9300,y:6800,w:100,h:100,points:[[4650,3400],[4350,3400]],speed:200,currentPoint:0.005555555556284162,collidable:true,pointOn:{"x":4650,"y":3400},pointTo:{"x":4350,"y":3400},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[9300,6800,6.666666666666667],[8700,6800,6.666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9300,y:6400,w:100,h:100,points:[[4650,3200],[4600,3200],[4600,3250],[4650,3250]],speed:75,currentPoint:1.0125,collidable:true,pointOn:{"x":4600,"y":3200},pointTo:{"x":4600,"y":3250},xv:4.592425496802574e-15,yv:75,inView:false,path:[[9300,6400,2.5],[9200,6400,2.5],[9200,6500,2.5],[9300,6500,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9100,y:6400,w:100,h:100,points:[[4550,3200],[4500,3200],[4500,3250],[4550,3250]],speed:75,currentPoint:3.0125,collidable:true,pointOn:{"x":4550,"y":3250},pointTo:{"x":4550,"y":3200},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[9100,6400,2.5],[9000,6400,2.5],[9000,6500,2.5],[9100,6500,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8900,y:6400,w:100,h:100,points:[[4450,3200],[4400,3200],[4400,3250],[4450,3250]],speed:75,currentPoint:1.0125,collidable:true,pointOn:{"x":4400,"y":3200},pointTo:{"x":4400,"y":3250},xv:4.592425496802574e-15,yv:75,inView:false,path:[[8900,6400,2.5],[8800,6400,2.5],[8800,6500,2.5],[8900,6500,2.5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:8700,y:6400,w:100,h:100,points:[[4350,3200],[4300,3200],[4300,3250],[4350,3250]],speed:75,currentPoint:3.0125,collidable:true,pointOn:{"x":4350,"y":3250},pointTo:{"x":4350,"y":3200},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[8700,6400,2.5],[8600,6400,2.5],[8600,6500,2.5],[8700,6500,2.5]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:7200,w:600,h:100,force:4000,dir:{"x":4000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:9400,y:7200,w:600,h:100,force:4000,dir:{"x":-4000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[13],{type:[1,[],[13]],x:9300,y:6600,w:100,h:200,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:7800,y:6600,w:100,h:200,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:8400,y:7000,w:100,h:100,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[13],{type:[1,[],[13]],x:8700,y:7000,w:100,h:100,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[],[17],{type:[1,[],[17]],x:7800,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:8100,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:8400,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:8700,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:9000,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[17],{type:[1,[],[17]],x:9300,y:7200,w:100,h:100,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:4700,w:2550,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:300,y:5300,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:900,y:5300,r:200,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:0,y:5250,w:600,h:100,angle:-6,rotateSpeed:-Math.PI/60,pivotX:300,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:5600,w:1900,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1500,y:5300,r:200,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:600,y:5250,w:600,h:100,angle:6,rotateSpeed:Math.PI/60,pivotX:900,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1200,y:5250,w:600,h:100,angle:-6,rotateSpeed:-Math.PI/60,pivotX:1500,pivotY:5300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[600,5500],[650,5600],[550,5600]],most:{"left":275,"right":325,"top":2750,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,5500],[1250,5600],[1150,5600]],most:{"left":575,"right":625,"top":2750,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[550,5000],[650,5000],[600,5100]],most:{"left":275,"right":325,"top":2500,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1150,5000],[1250,5000],[1200,5100]],most:{"left":575,"right":625,"top":2500,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,5500],[100,5600],[0,5600]],most:{"left":0,"right":50,"top":2750,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1850,5500],[1800,5600],[1700,5600]],most:{"left":850,"right":925,"top":2750,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1700,5000],[1800,5000],[1800,5100]],most:{"left":850,"right":900,"top":2500,"bottom":2550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:6300,w:2500,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2650,y:4900,w:200,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:5000,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:6100,w:150,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:6200,w:150,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2150,y:5650,r:350,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2000,y:8600,r:1000,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:7800,w:200,h:2200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:7800,w:200,h:1800,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1800,7600],[2000,9600],[700,9600],[700,7800]],most:{"left":350,"right":1000,"top":3800,"bottom":4800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:7600,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4000,8550],[4000,10000],[2450,10000]],most:{"left":1225,"right":2000,"top":4275,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:0,y:7800,r:200,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2050,9300],[2700,9300],[2500,9600],[2050,9600]],most:{"left":1025,"right":1350,"top":4650,"bottom":4800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,6100],[1800,6300],[1600,6300]],most:{"left":800,"right":900,"top":3050,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:6100,w:1100,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:500,y:6300,r:200,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:-175,y:6700,w:2250,h:100,angle:9,rotateSpeed:-Math.PI/60,pivotX:950,pivotY:6750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:563.0552814777604,unSim:5.975000000000087,inView:false,initialRotation:0.15707963267948966,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:7800,w:600,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:10000,w:10050,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:10000,w:10000,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10000,y:0,w:600,h:10500,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3000,6800],[3000,8500],[1800,7600]],most:{"left":900,"right":1500,"top":3400,"bottom":4250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:3000,y:6800,w:500,h:100,angle:66,rotateSpeed:Math.PI/60,pivotX:3250,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.1519173063162575,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3250,y:6800,w:500,h:100,angle:36,rotateSpeed:Math.PI/60,pivotX:3500,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.6283185307179586,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3500,y:6800,w:500,h:100,angle:6,rotateSpeed:Math.PI/60,pivotX:3750,pivotY:6850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965977,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[2050,7150],[2500,7150],[1900,7550]],most:{"left":950,"right":1250,"top":3575,"bottom":3775},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:3500,y:7050,w:500,h:100,angle:96,rotateSpeed:Math.PI/60,pivotX:3750,pivotY:7100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.6755160819145563,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3250,y:7050,w:500,h:100,angle:66,rotateSpeed:Math.PI/60,pivotX:3500,pivotY:7100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.1519173063162575,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3000,y:7050,w:500,h:100,angle:36,rotateSpeed:Math.PI/60,pivotX:3250,pivotY:7100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.6283185307179586,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3000,y:7800,w:1000,h:100,angle:144,rotateSpeed:-Math.PI/60,pivotX:3500,pivotY:7850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:251.24689052802225,unSim:5.975000000000087,inView:false,initialRotation:2.5132741228718345,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3500,y:7450,w:500,h:100,angle:84,rotateSpeed:-Math.PI/60,pivotX:3750,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.4660765716752369,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3500,y:7700,w:500,h:100,angle:174,rotateSpeed:-Math.PI/60,pivotX:3750,pivotY:7750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:3.036872898470133,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3500,y:7950,w:500,h:100,angle:204,rotateSpeed:-Math.PI/60,pivotX:3750,pivotY:8000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:3.560471674068432,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3000,y:8450,w:500,h:100,angle:46,rotateSpeed:Math.PI/60,pivotX:3250,pivotY:8500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.8028514559173915,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3200,y:8450,w:500,h:100,angle:16,rotateSpeed:Math.PI/60,pivotX:3450,pivotY:8500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.2792526803190927,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3250,y:7450,w:500,h:100,angle:114,rotateSpeed:-Math.PI/60,pivotX:3500,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:1.9896753472735356,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3000,y:7450,w:500,h:100,angle:144,rotateSpeed:-Math.PI/60,pivotX:3250,pivotY:7500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:2.5132741228718345,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:200,y:9600,w:100,h:400,tpx:800,tpy:12200,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:9600,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1700,y:9800,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1600,y:9900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:9600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:9600,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1000,y:9900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:900,y:9800,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:800,y:9700,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:400,y:9600,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:300,y:9600,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:500,y:9600,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:700,y:9900,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[29],{type:[1,[],[29]],x:1800,y:5250,w:100,h:100,time:5,inView:false,changeDeathTimerStateTo:true,deathTime:300,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:2900,y:6650,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[0],[0],{type:[1,[0],[0]],x:2800,y:6600,w:200,h:350,points:[[1400,3300],[1400,3600]],speed:600,currentPoint:0.016666666666666666,alongWith:false,pointOn:{"x":1400,"y":3300},pointTo:{"x":1400,"y":3600},xv:3.6739403974420595e-14,yv:600,inView:false,path:[[2800,6600,20],[2800,7200,20]],})

//Rng fixing...
//Zone 3
C(1,[],[11],{type:[1,[],[11]],x:2800,y:6560,w:200,h:10})
//Zone 6
C(1,[],[11],{type:[1,[],[11]],x:16800,y:15060,w:400,h:10})
//Zone 8
C(1,[],[5],{type:[1,[],[5]],x:8200,y:17700,w:100,h:200})
//Zone 10
C(1,[],[11],{type:[1,[],[11]],x:15650,y:11360,w:400,h:1})
C(1,[],[11],{type:[1,[],[11]],x:15650,y:11550,w:400,h:1})



C(1,[1],[1],{type:[1,[1],[1]],x:3400,y:8450,w:500,h:100,angle:-14,rotateSpeed:Math.PI/60,pivotX:3650,pivotY:8500,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-0.24434609527920614,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:6700,y:9800,radius:200,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[3350,5000],[3350,5100]],"type":"poly","props":{}},endPolygon:{"points":[[3250,4900],[3150,4900]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[1],[1],{type:[1,[1],[1]],x:1500,y:5600,w:1300,h:100,angle:96,rotateSpeed:Math.PI/60,pivotX:2150,pivotY:5650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:325.96012026013244,unSim:5.975000000000087,inView:false,initialRotation:1.6755160819145563,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:350,y:4700,w:1750,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:4350,w:300,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:350,y:4350,w:1750,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:4350,w:350,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:9150,w:2300,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:200,y:10050,w:3950,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:9150,w:550,h:1300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:5050,w:350,h:550,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:2150,y:5650,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:5650,w:2000,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:5800,w:350,h:1800,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:1300,y:6350,w:2850,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4050,y:6600,w:100,h:3400,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,8600],[4050,10000],[2550,10000]],most:{"left":1275,"right":2025,"top":4300,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:7850,w:2900,h:1250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:7200,w:400,h:1300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:7200,w:400,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-400,y:7650,w:350,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,7650],[150,7650],[150,7800],[0,7800]],most:{"left":0,"right":75,"top":3825,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1950,7600],[2050,7200],[2050,7800],[850,7800],[1850,7650]],most:{"left":425,"right":1025,"top":3600,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2950,6900],[2950,7150],[2550,7150]],most:{"left":1275,"right":1475,"top":3450,"bottom":3575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2150,4900],[2950,4900],[2950,6300],[2350,6300],[2550,6250],[2800,6000],[2850,5750],[2850,5400],[2700,5150],[2500,5000],[2350,4950]],most:{"left":1075,"right":1475,"top":2450,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:950,y:6750,r:550,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2550,8550],[2950,8550],[2850,9000],[2550,9450]],most:{"left":1275,"right":1475,"top":4275,"bottom":4725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-1750,y:4350,w:1300,h:6100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2150,y:4350,w:800,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3000,y:4350,w:450,h:800,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:-1750,y:3600,w:5200,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:4450,w:500,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2300,y:8200,w:200,h:200,points:[[1150,4100],[1850,4100],[1250,4800],[1150,4800]],speed:605.488611432,currentPoint:0.5943185161305402,collidable:true,pointOn:{"x":1150,"y":4100},pointTo:{"x":1850,"y":4100},xv:605.488611432,yv:0,inView:false,path:[[2300,8200,20.1829537144],[3700,8200,20.1829537144],[2500,9600,20.1829537144],[2300,9600,20.1829537144]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:10500,w:10650,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:11400,w:200,h:1400,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:350,y:11750,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1250,y:11750,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1250,y:12650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:350,y:12650,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:-150,y:12200,r:350,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:800,y:11300,r:350,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:800,y:13150,r:350,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1700,y:12200,radius:175,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[850,6100],[850,6275]],"type":"poly","props":{}},endPolygon:{"points":[[850,6100],[850,5925]],"type":"poly","props":{}},renderType:"circle",inView:false,r:350,innerRadius:0,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:-50,y:11350,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1650,y:11350,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:-50,y:13050,r:158,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:11300,w:1150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:11300,w:225,h:2200,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:6300,y:11500,w:0,h:0,maxStrength:14,currentStrength:10,time:0.016,timer:0.016,regenTime:666.6666666666666,inView:false,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:7050,y:12500,w:50,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8150,y:12500,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:11600,w:1000,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7250,y:12700,w:350,h:800,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2900,y:12600,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2200,y:12600,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2900,y:12600,radius:290,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[1450,6150],[1450,6010]],"type":"poly","props":{}},endPolygon:{"points":[[1450,6450],[1450,6590]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:580,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:3250,y:12900,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:12000,w:550,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:12100,w:250,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3550,11600],[3550,12000],[2900,12000]],most:{"left":1450,"right":1775,"top":5800,"bottom":6000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3400,y:11850,w:300,h:1150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2100,y:11700,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2900,y:12100,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:12400,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:11900,w:900,h:400,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:12100,x:2200,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:2200,y:12400,w:700,h:400,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:12600,x:2900,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:3200,y:12100,w:250,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3150,y:12100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2150,y:11600,w:850,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3000,11400],[3650,11400],[3000,11800]],most:{"left":1500,"right":1825,"top":5700,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1750,y:11350,w:1250,h:450,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2900,12900],[2900,13000],[1600,13000]],most:{"left":800,"right":1450,"top":6450,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,12800],[2900,12800],[1600,12900]],most:{"left":800,"right":1450,"top":6400,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3450,y:11350,w:1000,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6900,y:11900,w:1300,h:200,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7600,y:12700,w:100,h:200,tpx:8950,tpy:11450,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:12900,w:1400,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:11900,w:300,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8150,y:11850,w:500,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:13000,w:5800,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5750,y:11350,w:150,h:2150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:12300,w:450,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:12000,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:13300,w:1550,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:12450,w:250,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:12600,w:150,h:700,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6300,y:12400,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4200,y:12550,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4200,y:12150,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4200,y:11750,r:150,renderType:"circle",inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:4200,y:11950,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:3950,y:11750,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:4200,y:12350,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:3650,y:11800,w:150,h:1250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3550,y:11600,w:650,h:300,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:11750,x:4200,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[1],{type:[1,[],[1]],x:3800,y:11900,w:100,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4500,y:11900,w:100,h:950,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4200,y:12000,w:300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:12400,w:450,h:300,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:12550,x:4200,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:4500,y:11900,w:1150,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:11400,w:1150,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:11400,w:900,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:12800,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:12250,w:100,h:600,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3950,y:12850,radius:125,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[1975,6500],[1975,6550]],"type":"poly","props":{}},endPolygon:{"points":[[1975,6350],[1975,6300]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:3950,y:12850,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3950,y:12800,w:550,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:4250,y:12550,radius:175,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[2250,6275],[2300,6275]],"type":"poly","props":{}},endPolygon:{"points":[[2125,6400],[2125,6450]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:12550,w:150,h:350,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:12850,x:3950,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(0,[],[0],{type:[0,[],[0]],x:4900,y:12850,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5400,y:12850,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:12800,w:500,h:100,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:5050,y:12625,w:450,h:100,angle:55.0079798015,rotateSpeed:0,pivotX:5275,pivotY:12675,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:5.975000000000087,inView:false,initialRotation:0.9600703624067118,})
C(0,[],[0],{type:[0,[],[0]],x:5150,y:12500,r:52,renderType:"circle",inView:false,})
C(0,[],[0],{r:20+12/2,y:12850,x:5400,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[1],[0],{type:[1,[1],[0]],x:4800,y:12625,w:450,h:100,angle:-55.0079798015,rotateSpeed:0,pivotX:5025,pivotY:12675,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:5.975000000000087,inView:false,initialRotation:-0.9600703624067118,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:12550,w:100,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5000,y:12700,w:300,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:12650,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4950,y:12750,w:400,h:100,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:5250,y:12400,w:500,h:100,angle:55,rotateSpeed:0,pivotX:5500,pivotY:12450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.9599310885968813,})
C(1,[1],[0],{type:[1,[1],[0]],x:4550,y:12400,w:500,h:100,angle:-55,rotateSpeed:0,pivotX:4800,pivotY:12450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-0.9599310885968813,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:12750,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:12050,w:150,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5450,y:11350,w:200,h:600,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:4200,y:11750,radius:200,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2100,5750],[2100,5675]],"type":"poly","props":{}},endPolygon:{"points":[[2100,6000],[2100,6075]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{r:20+12/2,y:12150,x:4200,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[9],{type:[1,[],[9]],x:8900,y:12700,w:300,h:300,spawn:{"x":4525,"y":6425},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:7350,y:12650,w:250,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5500,y:12900,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[2800,6450],[2850,6450]],"type":"poly","props":{}},endPolygon:{"points":[[2750,6500],[2750,6550]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5284,y:12400,radius:75,startAngle:-1.5707963267948966,endAngle:-0.7853981633974483,startPolygon:{"points":[[2642,6150],[2642,6125]],"type":"poly","props":{}},endPolygon:{"points":[[2677.3553390593274,6164.644660940673],[2695.033008588991,6146.966991411009]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:150,startSliceAngle:-1.5707963267948966,endSliceAngle:-0.7853981633974483,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5016,y:12400,radius:75,startAngle:-2.356194490192345,endAngle:-1.5707963267948966,startPolygon:{"points":[[2472.6446609406726,6164.644660940673],[2454.966991411009,6146.966991411009]],"type":"poly","props":{}},endPolygon:{"points":[[2508,6150],[2508,6125]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:150,startSliceAngle:-2.356194490192345,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:10200,y:11400,w:300,h:2900,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,12300],[5000,12300],[4700,12700]],most:{"left":2350,"right":2500,"top":6150,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5300,12300],[5600,12300],[5600,12700]],most:{"left":2650,"right":2800,"top":6150,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:9950,y:11650,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{r:20+12/2,y:11650,x:9950,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(0,[],[0],{type:[0,[],[0]],x:9150,y:12050,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9150,y:11900,w:1100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:12300,w:1050,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9950,y:12450,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{r:20+12/2,y:12050,x:9150,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(0,[],[0],{r:20+12/2,y:12450,x:9950,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:9200,y:12700,w:1000,h:1600,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:9950,y:12450,radius:180,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[4975,6100],[4975,6045]],"type":"poly","props":{}},endPolygon:{"points":[[4975,6350],[4975,6405]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:360,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:9950,y:11650,radius:180,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[4975,5700],[4975,5645]],"type":"poly","props":{}},endPolygon:{"points":[[4975,5950],[4975,6005]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:360,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:9150,y:12050,radius:180,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[4575,6150],[4575,6205]],"type":"poly","props":{}},endPolygon:{"points":[[4575,5900],[4575,5845]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:360,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[8900,12600],[9000,12600],[8900,12700]],most:{"left":4450,"right":4500,"top":6300,"bottom":6350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[6100,12500],[6300,12500],[6700,13300],[6100,13300]],most:{"left":3050,"right":3350,"top":6250,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7050,12500],[7300,12700],[7300,13300],[6700,13300]],most:{"left":3350,"right":3650,"top":6250,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:12300,w:900,h:400,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,12400],[6800,12400],[6700,12800]],most:{"left":3300,"right":3400,"top":6200,"bottom":6400},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7050,y:12500,w:200,h:150,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:8600,y:12100,w:250,h:800,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{r:20+12/2,y:12650,x:6700,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(4,[],[0],{type:[4,[],[0]],x:6500,y:11500,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[3250,5700],[3250,5650]],"type":"poly","props":{}},endPolygon:{"points":[[3300,5750],[3350,5750]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:6000,y:11500,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[2950,5750],[2900,5750]],"type":"poly","props":{}},endPolygon:{"points":[[3000,5700],[3000,5650]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:11400,w:600,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:6500,y:11400,w:100,h:400,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(0,[],[7],{type:[0,[],[7]],x:6250,y:11450,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:6250,y:11850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:5950,y:11650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:6550,y:11650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{r:20+12/2,y:11650,x:6250,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(2,[],[0],{type:[2,[],[0]],points:[[7200,12300],[7200,12500],[7050,12500]],most:{"left":3525,"right":3600,"top":6150,"bottom":6250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[8],{type:[1,[],[8]],x:6350,y:11900,w:300,h:100,coins:6,currentCoins:6,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:6,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:11500,w:100,h:100,force:8000,dir:{"x":0,"y":-8000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[13],{type:[1,[],[13]],x:8900,y:11400,w:1100,h:100,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:6900,y:12050,w:250,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7150,12100],[7250,12100],[7150,12200]],most:{"left":3575,"right":3625,"top":6050,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6800,12000],[6950,12000],[7150,12200],[6800,12200]],most:{"left":3400,"right":3575,"top":6000,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:11900,w:600,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:11350,w:600,h:650,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6800,12200],[7150,12200],[6800,12300]],most:{"left":3400,"right":3575,"top":6100,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[28],{type:[1,[],[28]],x:6400,y:11950,w:200,h:0,state:false,grapplePoints:true,inView:false,changeGrappleStateTo:false,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[28],{type:[1,[],[28]],x:6400,y:12250,w:200,h:0,state:true,grapplePoints:true,inView:false,changeGrappleStateTo:true,grappleRange:488,grappleForce:0.003,grappleFric:0.97,})
C(1,[],[0],{type:[1,[],[0]],x:7250,y:13450,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:13500,w:7600,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:11400,w:100,h:2900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:13900,w:7600,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:13800,w:700,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:13600,w:600,h:700,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8900,13000],[9000,13100],[8900,13100]],most:{"left":4450,"right":4500,"top":6500,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:13500,w:1350,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:7600,y:13100,w:200,h:200,points:[[3800,6550],[4200,6550]],speed:370.2,currentPoint:0.5607125000000656,collidable:true,pointOn:{"x":3800,"y":6550},pointTo:{"x":4200,"y":6550},xv:370.2,yv:0,inView:false,path:[[7600,13100,12.34],[8400,13100,12.34]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7600,y:13300,w:200,h:200,points:[[3800,6650],[4200,6650]],speed:370.2,currentPoint:1.5607125000000655,collidable:true,pointOn:{"x":4200,"y":6650},pointTo:{"x":3800,"y":6650},xv:-370.2,yv:4.5336424504435016e-14,inView:false,path:[[7600,13300,12.34],[8400,13300,12.34]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[8500,13100],[8700,13100],[8700,13300]],most:{"left":4250,"right":4350,"top":6550,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8300,13200],[8400,13300],[8300,13400],[8200,13300]],most:{"left":4100,"right":4200,"top":6600,"bottom":6700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7600,13100],[8100,13100],[7600,13600]],most:{"left":3800,"right":4050,"top":6550,"bottom":6800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8600,13950],[8600,14000],[8550,14000]],most:{"left":4275,"right":4300,"top":6975,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:13100,w:200,h:950,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9200,13000],[9200,13100],[9100,13100]],most:{"left":4550,"right":4600,"top":6500,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8200,13700],[8200,13800],[8100,13800]],most:{"left":4050,"right":4100,"top":6850,"bottom":6900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8300,13900],[8400,13900],[8300,14000]],most:{"left":4150,"right":4200,"top":6950,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:13700,w:200,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7600,13600],[7800,13800],[7600,13800]],most:{"left":3800,"right":3900,"top":6800,"bottom":6900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[5],[1],{h:50,w:400,y:14425,x:8100,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8300,
        pivotY: 14450
    });
    C(0,[],[0],{x:8300,y:14450,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:14525,x:8100,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8300,
        pivotY: 14550
    });
    C(0,[],[0],{x:8300,y:14550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:14325,x:8100,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8300,
        pivotY: 14350
    });
    C(0,[],[0],{x:8300,y:14350,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:14325,x:8400,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8600,
        pivotY: 14350
    });
    C(0,[],[0],{x:8600,y:14350,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:14425,x:8400,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8600,
        pivotY: 14450
    });
    C(0,[],[0],{x:8600,y:14450,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:14525,x:8400,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.08333333333333333,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 8600,
        pivotY: 14550
    });
    C(0,[],[0],{x:8600,y:14550,r:50,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:8200,y:14300,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:14300,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:14800,w:500,h:100,canJump:true,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:8450,y:14750,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:14000,w:500,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8100,y:14200,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8100,y:14000,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8100,14300],[8200,14300],[8200,14900]],most:{"left":4050,"right":4100,"top":7150,"bottom":7450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8700,14300],[8800,14300],[8700,14900]],most:{"left":4350,"right":4400,"top":7150,"bottom":7450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[8],{type:[1,[],[8]],x:8200,y:14100,w:100,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:8100,y:14100,w:100,h:100,tpx:7850,tpy:14350,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:14300,w:100,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:7200,y:14400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:14300,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7100,y:14450,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5300,y:14300,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5350,y:14300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:14300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7200,y:14450,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7250,y:14400,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:7100,y:14450,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:14300,w:100,h:100,force:0,dir:{"x":0,"y":0},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[10],{type:[1,[],[10]],x:7400,y:14300,w:100,h:200,maxStrength:16,currentStrength:16,time:0.016,timer:0.016,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[12],{type:[1,[],[12]],x:300,y:14300,w:800,h:100,tpx:1150,tpy:15150,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:15900,w:1200,h:200,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:12500,x:8150,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:-300,y:15150,w:300,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-200,y:15250,w:200,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:16350,w:350,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:16350,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:16050,w:200,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:19500,w:400,h:100,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:18800,w:100,h:100,points:[[7300,9400],[7450,9400]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7300,"y":9400},pointTo:{"x":7450,"y":9400},xv:100,yv:0,inView:false,path:[[14600,18800,3.3333333333333335],[14900,18800,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14800,y:19000,w:100,h:400,points:[[7400,9500],[7550,9500]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7400,"y":9500},pointTo:{"x":7550,"y":9500},xv:100,yv:0,inView:false,path:[[14800,19000,3.3333333333333335],[15100,19000,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14400,y:18900,w:100,h:100,points:[[7200,9450],[7350,9450]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7200,"y":9450},pointTo:{"x":7350,"y":9450},xv:100,yv:0,inView:false,path:[[14400,18900,3.3333333333333335],[14700,18900,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14300,y:19300,w:400,h:300,points:[[7150,9650],[7300,9650]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7150,"y":9650},pointTo:{"x":7300,"y":9650},xv:100,yv:0,inView:false,path:[[14300,19300,3.3333333333333335],[14600,19300,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:19200,w:100,h:100,points:[[7300,9600],[7450,9600]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7300,"y":9600},pointTo:{"x":7450,"y":9600},xv:100,yv:0,inView:false,path:[[14600,19200,3.3333333333333335],[14900,19200,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14600,y:19500,w:600,h:100,points:[[7300,9750],[7450,9750]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7300,"y":9750},pointTo:{"x":7450,"y":9750},xv:100,yv:0,inView:false,path:[[14600,19500,3.3333333333333335],[14900,19500,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15000,y:19400,w:100,h:100,points:[[7500,9700],[7650,9700]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7500,"y":9700},pointTo:{"x":7650,"y":9700},xv:100,yv:0,inView:false,path:[[15000,19400,3.3333333333333335],[15300,19400,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:15100,y:18900,w:100,h:600,points:[[7550,9450],[7700,9450]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7550,"y":9450},pointTo:{"x":7700,"y":9450},xv:100,yv:0,inView:false,path:[[15100,18900,3.3333333333333335],[15400,18900,3.3333333333333335]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14400,y:19000,w:400,h:100,points:[[7200,9500],[7350,9500]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7200,"y":9500},pointTo:{"x":7350,"y":9500},xv:100,yv:0,inView:false,path:[[14400,19000,3.3333333333333335],[14700,19000,3.3333333333333335]],})
C(1,[],[9],{type:[1,[],[9]],x:2700,y:15100,w:700,h:700,spawn:{"x":1525,"y":7725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(0,[],[0],{r:20+12/2,y:16050,x:450,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[1],[11],{type:[1,[1],[11]],x:0,y:15850,w:200,h:200,angle:6,rotateSpeed:Math.PI/60,pivotX:100,pivotY:15950,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965978,})
C(1,[1],[11],{type:[1,[1],[11]],x:100,y:16100,w:200,h:200,angle:66,rotateSpeed:Math.PI/60,pivotX:200,pivotY:16200,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,initialRotation:1.1519173063162575,})
C(1,[1],[11],{type:[1,[1],[11]],x:350,y:16250,w:200,h:200,angle:126,rotateSpeed:Math.PI/60,pivotX:450,pivotY:16350,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,initialRotation:2.199114857512855,})
C(2,[],[0],{type:[2,[],[0]],points:[[300,16350],[350,16500],[300,16500]],most:{"left":150,"right":175,"top":8175,"bottom":8250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[550,16200],[750,16500],[550,16500]],most:{"left":275,"right":375,"top":8100,"bottom":8250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[11],{type:[1,[1],[11]],x:0,y:15550,w:200,h:200,angle:-54,rotateSpeed:Math.PI/60,pivotX:100,pivotY:15650,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,initialRotation:-0.9424777960769379,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:15700,w:200,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,16000],[300,16000],[300,16100]],most:{"left":100,"right":150,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,15650],[400,15700],[200,15700]],most:{"left":100,"right":200,"top":7825,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,15500],[400,15500],[200,15550]],most:{"left":100,"right":200,"top":7750,"bottom":7775},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:15700,w:200,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:15700,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-150,y:15550,w:150,h:300,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:100,y:15600,radius:125,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[0,7800],[-75,7800]],"type":"poly","props":{}},endPolygon:{"points":[[50,7750],[50.00000000000001,7675]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:300,y:16050,radius:225,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[150,8175],[150,8250]],"type":"poly","props":{}},endPolygon:{"points":[[0,8025],[-75,8025]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:-250,y:15750,w:250,h:350,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:350,y:16850,radius:225,startAngle:-0.5235987755982988,endAngle:4.6600291028248595,startPolygon:{"points":[[326.55444566227675,8337.5],[369.8557158514987,8312.5]],"type":"poly","props":{}},endPolygon:{"points":[[165.84120765748474,8250.23983141795],[163.22440984533753,8200.30835468022]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:-0.5235987755982988,endSliceAngle:4.6600291028248595,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:16500,w:150,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:300,y:16400,radius:225,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[150,8050],[150,7975]],"type":"poly","props":{}},endPolygon:{"points":[[300,8200],[375,8200]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:17200,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:17100,w:150,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:350,y:16850,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:16900,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:17200,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:600,y:17100,w:150,h:150,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:850,y:16700,w:100,h:100,points:[[425,8350],[625,8400]],speed:350,currentPoint:0.20064416298669693,collidable:true,pointOn:{"x":425,"y":8350},pointTo:{"x":625,"y":8400},xv:339.54987505086615,yv:84.88746876271654,inView:false,path:[[850,16700,11.666666666666666],[1250,16800,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:950,y:16750,w:100,h:100,points:[[475,8375],[675,8425]],speed:350,currentPoint:1.2006441629866966,collidable:true,pointOn:{"x":675,"y":8425},pointTo:{"x":475,"y":8375},xv:-339.54987505086615,yv:-84.88746876271661,inView:false,path:[[950,16750,11.666666666666666],[1350,16850,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1150,y:16750,w:100,h:100,points:[[575,8375],[775,8425]],speed:350,currentPoint:1.2006441629866966,collidable:true,pointOn:{"x":775,"y":8425},pointTo:{"x":575,"y":8375},xv:-339.54987505086615,yv:-84.88746876271661,inView:false,path:[[1150,16750,11.666666666666666],[1550,16850,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1400,y:16800,w:100,h:100,points:[[700,8400],[900,8450]],speed:350,currentPoint:1.2006441629866966,collidable:true,pointOn:{"x":900,"y":8450},pointTo:{"x":700,"y":8400},xv:-339.54987505086615,yv:-84.88746876271661,inView:false,path:[[1400,16800,11.666666666666666],[1800,16900,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1250,y:16800,w:100,h:100,points:[[625,8400],[825,8450]],speed:350,currentPoint:0.20064416298669666,collidable:true,pointOn:{"x":625,"y":8400},pointTo:{"x":825,"y":8450},xv:339.54987505086615,yv:84.88746876271654,inView:false,path:[[1250,16800,11.666666666666666],[1650,16900,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1500,y:16800,w:100,h:100,points:[[750,8400],[950,8450]],speed:350,currentPoint:0.20064416298669666,collidable:true,pointOn:{"x":750,"y":8400},pointTo:{"x":950,"y":8450},xv:339.54987505086615,yv:84.88746876271654,inView:false,path:[[1500,16800,11.666666666666666],[1900,16900,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:850,y:16350,w:100,h:100,points:[[425,8175],[625,8125]],speed:350,currentPoint:1.200644162986695,collidable:true,pointOn:{"x":625,"y":8125},pointTo:{"x":425,"y":8175},xv:-339.54987505086615,yv:84.88746876271661,inView:false,path:[[850,16350,11.666666666666666],[1250,16250,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1450,y:16300,w:100,h:100,points:[[725,8150],[775,8125]],speed:350,currentPoint:0.6181169414717188,collidable:true,pointOn:{"x":725,"y":8150},pointTo:{"x":775,"y":8125},xv:313.04951684997053,yv:-156.52475842498527,inView:false,path:[[1450,16300,11.666666666666666],[1550,16250,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1300,y:16300,w:100,h:100,points:[[650,8150],[850,8100]],speed:350,currentPoint:0.20064416298669396,collidable:true,pointOn:{"x":650,"y":8150},pointTo:{"x":850,"y":8100},xv:339.54987505086615,yv:-84.88746876271654,inView:false,path:[[1300,16300,11.666666666666666],[1700,16200,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1500,y:16250,w:100,h:100,points:[[750,8125],[950,8075]],speed:350,currentPoint:1.200644162986694,collidable:true,pointOn:{"x":950,"y":8075},pointTo:{"x":750,"y":8125},xv:-339.54987505086615,yv:84.88746876271661,inView:false,path:[[1500,16250,11.666666666666666],[1900,16150,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1700,y:16300,w:100,h:100,points:[[850,8150],[1050,8100]],speed:350,currentPoint:0.20064416298674428,collidable:true,pointOn:{"x":850,"y":8150},pointTo:{"x":1050,"y":8100},xv:339.54987505086615,yv:-84.88746876271654,inView:false,path:[[1700,16300,11.666666666666666],[2100,16200,11.666666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1000,y:16300,w:100,h:100,points:[[500,8150],[700,8100]],speed:350,currentPoint:0.20064416298669452,collidable:true,pointOn:{"x":500,"y":8150},pointTo:{"x":700,"y":8100},xv:339.54987505086615,yv:-84.88746876271654,inView:false,path:[[1000,16300,11.666666666666666],[1400,16200,11.666666666666666]],boundPlayer:true,})
C(0,[],[1],{boundPlayer:true,x:920,y:16170,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1130,y:16170,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:920,y:16330,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1130,y:16330,r:20, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:920,y:16150,w:210,h:200, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:900,y:16170,w:250,h:160, cr:()=>{}});
C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#c70000';
            ctx.roundRect(900,16150,250,200,20);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }})
C(0,[],[1],{boundPlayer:true,x:1620,y:16120,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1780,y:16120,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1620,y:16280,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1780,y:16280,r:20, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1620,y:16100,w:160,h:200, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1600,y:16120,w:200,h:160, cr:()=>{}});
C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#c70000';
            ctx.roundRect(1600,16100,200,200,20);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }})
C(0,[],[1],{boundPlayer:true,x:1070,y:16820,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1230,y:16820,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1070,y:16930,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1230,y:16930,r:20, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1070,y:16800,w:160,h:150, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1050,y:16820,w:200,h:110, cr:()=>{}});
C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#c70000';
            ctx.roundRect(1050,16800,200,150,20);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }})
C(0,[],[1],{boundPlayer:true,x:1670,y:16920,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1880,y:16920,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1670,y:17080,r:20, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:1880,y:17080,r:20, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1670,y:16900,w:210,h:200, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:1650,y:16920,w:250,h:160, cr:()=>{}});
C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#c70000';
            ctx.roundRect(1650,16900,250,200,20);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }})
C(1,[1],[1],{type:[1,[1],[1]],x:1025,y:16825,w:250,h:250,angle:13.333333333333334,rotateSpeed:0.11447811447811448,pivotX:1150,pivotY:16950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:5.975000000000087,inView:false,initialRotation:0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1575,y:16900,w:150,h:200,angle:-6,rotateSpeed:-Math.PI/60,pivotX:1650,pivotY:17000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1900,y:17000,w:100,h:100,angle:101.5,rotateSpeed:0.012878787878787878,pivotX:1950,pivotY:17050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:35.35533905932738,unSim:5.975000000000087,inView:false,initialRotation:1.7715091907742444,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1300,y:16875,w:200,h:150,angle:-13.333333333333334,rotateSpeed:-0.11447811447811448,pivotX:1400,pivotY:16950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1225,y:16075,w:250,h:250,angle:13.333333333333334,rotateSpeed:0.11447811447811448,pivotX:1350,pivotY:16200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:5.975000000000087,inView:false,initialRotation:0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1725,y:16875,w:250,h:250,angle:13.333333333333334,rotateSpeed:0.11447811447811448,pivotX:1850,pivotY:17000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:88.38834764831844,unSim:5.975000000000087,inView:false,initialRotation:0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:975,y:16150,w:150,h:200,angle:-6,rotateSpeed:-Math.PI/60,pivotX:1050,pivotY:16250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1675,y:16100,w:150,h:200,angle:-6,rotateSpeed:-Math.PI/60,pivotX:1750,pivotY:16200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1500,y:16125,w:200,h:150,angle:-13.333333333333334,rotateSpeed:-0.11447811447811448,pivotX:1600,pivotY:16200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1000,y:16225,w:200,h:150,angle:-13.333333333333334,rotateSpeed:-0.11447811447811448,pivotX:1100,pivotY:16300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1100,y:16250,w:200,h:200,angle:14,rotateSpeed:0.12020202020202021,pivotX:1200,pivotY:16350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,initialRotation:0.24434609527920614,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2000,y:16925,w:200,h:150,angle:-13.333333333333334,rotateSpeed:-0.11447811447811448,pivotX:2100,pivotY:17000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.23271056693257727,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1900,y:16125,w:200,h:150,angle:-13.333333333333334,rotateSpeed:-0.11447811447811448,pivotX:2000,pivotY:16200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:62.5,unSim:5.975000000000087,inView:false,initialRotation:-0.23271056693257727,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:15100,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:15100,w:200,h:200,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:8300,y:14000,w:300,h:300,time:0,maxTime:1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:16400,w:100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2000,y:16400,w:100,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:15100,w:100,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:17200,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:15400,w:100,h:1900,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2400,y:16800,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:16700,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1550,16400],[1800,16400],[2000,16550]],most:{"left":775,"right":1000,"top":8200,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1800,16400],[2000,16400],[2000,16550]],most:{"left":900,"right":1000,"top":8200,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:15400,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2600,y:15350,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2650,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2600,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2500,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2450,y:15100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15150,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15200,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15250,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2650,y:15350,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:15350,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2550,y:15450,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15350,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15400,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2400,y:15450,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2200,y:16400,w:100,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2600,y:15150,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2650,y:15300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2600,y:15300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2400,16500],[2450,16500],[2400,16550]],most:{"left":1200,"right":1225,"top":8250,"bottom":8275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2450,16650],[2500,16700],[2450,16700]],most:{"left":1225,"right":1250,"top":8325,"bottom":8350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2550,16400],[2600,16400],[2600,16450]],most:{"left":1275,"right":1300,"top":8200,"bottom":8225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,16250],[2550,16250],[2500,16300]],most:{"left":1250,"right":1275,"top":8125,"bottom":8150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:2575,y:16325,r:25,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[1],[1],{type:[1,[1],[1]],x:2400,y:16100,w:50,h:50,angle:45,rotateSpeed:0,pivotX:2425,pivotY:16125,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:17.67766952966369,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2550,y:16050,w:50,h:50,angle:45,rotateSpeed:0,pivotX:2575,pivotY:16075,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:17.67766952966369,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2475,y:15750,w:50,h:50,angle:45,rotateSpeed:0,pivotX:2500,pivotY:15775,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:17.67766952966369,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2400,15500],[2450,15500],[2400,15550]],most:{"left":1200,"right":1225,"top":7750,"bottom":7775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2550,15500],[2600,15500],[2600,15550]],most:{"left":1275,"right":1300,"top":7750,"bottom":7775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:550,y:16400,w:50,h:50,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:550,y:16450,r:50,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[550,16200],[550,16450],[500,16450]],most:{"left":250,"right":275,"top":8100,"bottom":8225},renderType:"poly",inView:false,x:null,y:null,})
C(1,[5],[1],{h:50,w:800,y:16825,x:-50,
        boundPlayer: true,
        restAngles: [-1.7453292519943295, 1.3962634015954636],
        toRest: true,
        homingRotateSpeed: 0.12596899224806202,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 350,
        pivotY: 16850
    });
    C(0,[],[0],{x:350,y:16850,r:50,cr:(e)=>{
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
    }});C(2,[],[0],{type:[2,[],[0]],points:[[800,16624],[800,16650],[658,16650]],most:{"left":329,"right":400,"top":8312,"bottom":8325},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:750,y:16650,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:650,y:16650,w:50,h:24,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4300,y:14300,w:100,h:100,force:0,dir:{"x":0,"y":0},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[13],{type:[1,[],[13]],x:4300,y:14400,w:100,h:100,force:0,dir:{"x":0,"y":0},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:14450,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:14300,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3150,y:14450,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3100,y:14300,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:0,y:14300,w:200,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[3700,14300],[3750,14300],[3700,14350]],most:{"left":1850,"right":1875,"top":7150,"bottom":7175},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3700,14450],[3750,14500],[3700,14500]],most:{"left":1850,"right":1875,"top":7225,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:14450,w:500,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:14300,w:500,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:14250,w:500,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[2300,14300],[2400,14300],[2350,14400]],most:{"left":1150,"right":1200,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1100,14300],[1200,14300],[1150,14400]],most:{"left":550,"right":600,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,14300],[1300,14300],[1250,14400]],most:{"left":600,"right":650,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1300,14300],[1400,14300],[1350,14400]],most:{"left":650,"right":700,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1400,14300],[1500,14300],[1450,14400]],most:{"left":700,"right":750,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,14300],[1600,14300],[1550,14400]],most:{"left":750,"right":800,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1600,14300],[1700,14300],[1650,14400]],most:{"left":800,"right":850,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1700,14300],[1800,14300],[1750,14400]],most:{"left":850,"right":900,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1800,14300],[1900,14300],[1850,14400]],most:{"left":900,"right":950,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1900,14300],[2000,14300],[1950,14400]],most:{"left":950,"right":1000,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2000,14300],[2100,14300],[2050,14400]],most:{"left":1000,"right":1050,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2100,14300],[2200,14300],[2150,14400]],most:{"left":1050,"right":1100,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2200,14300],[2300,14300],[2250,14400]],most:{"left":1100,"right":1150,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,14400],[300,14450],[200,14500]],most:{"left":100,"right":150,"top":7200,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,14300],[300,14350],[200,14400]],most:{"left":100,"right":150,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:14300,w:200,h:100,force:25000,dir:{"x":0,"y":25000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:17.707082833133253,})
C(1,[],[10],{type:[1,[],[10]],x:3800,y:14300,w:100,h:200,maxStrength:16,currentStrength:16,time:0.016,timer:0.016,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:15250,w:400,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:950,y:15100,w:100,h:400,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1000,y:15500,r:50,renderType:"circle",inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:700,y:15100,w:250,h:100,tpx:100,tpy:15550,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1050,y:15100,w:250,h:100,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[13],{type:[1,[],[13]],x:1050,y:15100,w:400,h:800,force:8000,dir:{"x":0,"y":8000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[13],{type:[1,[],[13]],x:600,y:15550,w:800,h:350,force:8000,dir:{"x":-8000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(1,[],[13],{type:[1,[],[13]],x:600,y:15200,w:350,h:700,force:8000,dir:{"x":0,"y":-8000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.666266506602642,})
C(2,[],[0],{type:[2,[],[0]],points:[[600,15100],[800,15100],[600,15300]],most:{"left":300,"right":400,"top":7550,"bottom":7650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[13],{type:[1,[],[13]],x:550,y:15250,w:350,h:650,force:0,dir:{"x":0,"y":0},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[13],{type:[1,[],[13]],x:1100,y:15050,w:400,h:800,force:0,dir:{"x":0,"y":0},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:15100,w:400,h:1000,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:650,y:15500,w:700,h:350,force:0,dir:{"x":0,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[1400,15700],[1400,15900],[1200,15900]],most:{"left":600,"right":700,"top":7850,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[600,15700],[800,15900],[600,15900]],most:{"left":300,"right":400,"top":7850,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:1000,y:15500,r:300,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1050,15100],[1100,15100],[1050,15250]],most:{"left":525,"right":550,"top":7550,"bottom":7625},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1200,15100],[1400,15100],[1400,15300]],most:{"left":600,"right":700,"top":7550,"bottom":7650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:14500,w:2900,h:600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[900,15100],[950,15100],[950,15250]],most:{"left":450,"right":475,"top":7550,"bottom":7625},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:15575,w:50,h:50,points:[[1200,7787.5],[1275,7787.5]],speed:25,currentPoint:1.0027777777770492,collidable:true,pointOn:{"x":1275,"y":7787.5},pointTo:{"x":1200,"y":7787.5},xv:-25,yv:3.061616997868383e-15,inView:false,path:[[2400,15575,0.8333333333333334],[2550,15575,0.8333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2400,y:15900,w:50,h:50,points:[[1200,7950],[1275,7950]],speed:25,currentPoint:0.0027777777770491715,collidable:true,pointOn:{"x":1200,"y":7950},pointTo:{"x":1275,"y":7950},xv:25,yv:0,inView:false,path:[[2400,15900,0.8333333333333334],[2550,15900,0.8333333333333334]],boundPlayer:true,})
C(1,[5],[1],{h:66,w:800,y:15467,x:600,
        boundPlayer: true,
        restAngles: [1.0471975511965976, 4.1887902047863905],
        toRest: true,
        homingRotateSpeed: 0.09302325581395349,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 1000,
        pivotY: 15500
    });
    C(0,[],[0],{x:1000,y:15500,r:50,cr:(e)=>{
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
    }});C(1,[],[13],{type:[1,[],[13]],x:2450,y:15200,w:200,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[1],[1],{type:[1,[1],[1]],x:2400,y:15150,w:150,h:50,angle:-8,rotateSpeed:-0.0686868686868687,pivotX:2475,pivotY:15175,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:39.528470752104745,unSim:5.975000000000087,inView:false,initialRotation:-0.13962634015954636,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:2500,y:16700,w:100,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:15000,w:3100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:14300,w:200,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:15800,w:3000,h:1500,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3200,y:15350,radius:100,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[1600,7600],[1600,7575]],"type":"poly","props":{}},endPolygon:{"points":[[1600,7750],[1600,7775]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:15100,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:15300,w:500,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:15500,w:500,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3400,15350],[3400,15500],[3300,15500]],most:{"left":1650,"right":1700,"top":7675,"bottom":7750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3400,15150],[3400,15350],[3300,15200]],most:{"left":1650,"right":1700,"top":7575,"bottom":7675},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:3200,y:15350,r:50,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2900,y:15550,radius:125,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[1450,7850],[1450,7900]],"type":"poly","props":{}},endPolygon:{"points":[[1450,7700],[1450,7650]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:15700,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2700,15550],[2800,15750],[2700,15700]],most:{"left":1350,"right":1400,"top":7775,"bottom":7875},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2700,15400],[2800,15400],[2700,15550]],most:{"left":1350,"right":1400,"top":7700,"bottom":7775},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:2900,y:15550,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4700,y:14500,w:3300,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4650,y:14950,w:1300,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2900,15700],[3400,15800],[2900,15800]],most:{"left":1450,"right":1700,"top":7850,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[2900,15600],[3400,15600],[3400,15700]],most:{"left":1450,"right":1700,"top":7800,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:14500,w:1800,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:14500,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:15800,w:13200,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2750,y:15000,w:150,h:100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:16425,w:300,h:50,angle:-6,rotateSpeed:-Math.PI/60,pivotX:5850,pivotY:16450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:16625,w:300,h:50,angle:6,rotateSpeed:Math.PI/60,pivotX:5850,pivotY:16650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:16825,w:300,h:50,angle:-6,rotateSpeed:-Math.PI/60,pivotX:5850,pivotY:16850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:5.975000000000087,inView:false,initialRotation:-0.10471975511965977,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5700,y:17000,w:100,h:100,points:[[2850,8500],[2950,8500]],speed:150,currentPoint:0.0125,collidable:true,pointOn:{"x":2850,"y":8500},pointTo:{"x":2950,"y":8500},xv:150,yv:0,inView:false,path:[[5700,17000,5],[5900,17000,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5700,y:17200,w:100,h:100,points:[[2850,8600],[2950,8600]],speed:150,currentPoint:1.0125,collidable:true,pointOn:{"x":2950,"y":8600},pointTo:{"x":2850,"y":8600},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[5700,17200,5],[5900,17200,5]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:2900,y:15000,w:100,h:100,tpx:8550,tpy:4700,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:2900,y:14900,w:100,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:6550,y:15550,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:15800,w:300,h:300,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:3100,y:16100,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3800,y:16450,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4100,y:16100,r:206,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3250,y:16450,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4350,y:16550,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4850,y:16300,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5250,y:16750,r:254,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5250,y:16150,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4500,y:15950,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3350,y:16000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3550,y:16150,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3600,y:16750,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3800,y:16750,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4150,y:16900,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4850,y:16750,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4700,y:16900,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4000,y:16500,r:70,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3300,y:16850,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3550,y:16500,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5500,y:16350,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5450,y:16000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4450,y:16200,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5050,y:15950,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[3400,15100],[4000,15100],[3400,15690]],tpx:2750,tpy:15250,most:{"left":1700,"right":2000,"top":7550,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[4300,15200],[4300,15800],[3700,15800]],tpx:2750,tpy:15250,most:{"left":1850,"right":2150,"top":7600,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:4300,y:15200,w:600,h:600,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[12],{type:[2,[],[12]],points:[[4900,15200],[5300,15200],[4900,15600]],tpx:2750,tpy:15250,most:{"left":2450,"right":2650,"top":7600,"bottom":7800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[5800,15100],[5800,15700],[5200,15700]],tpx:2750,tpy:15250,most:{"left":2600,"right":2900,"top":7550,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:5800,y:15100,w:500,h:600,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6700,y:15200,w:300,h:600,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[12],{type:[2,[],[12]],points:[[7350,15100],[8050,15100],[7700,15450]],tpx:2750,tpy:15250,most:{"left":3675,"right":4025,"top":7550,"bottom":7725},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[7000,15400],[7400,15800],[7000,15800]],tpx:2750,tpy:15250,most:{"left":3500,"right":3700,"top":7700,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[7150,15200],[7600,15650],[7550,15700],[7100,15250]],tpx:2750,tpy:15250,most:{"left":3550,"right":3800,"top":7600,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:6300,y:15200,w:100,h:500,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6300,y:15100,w:100,h:100,tpx:2850,tpy:14950,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[12],{type:[2,[],[12]],points:[[8300,15400],[8700,15800],[7900,15800]],tpx:2750,tpy:15250,most:{"left":3950,"right":4350,"top":7700,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[8500,15100],[9200,15100],[8850,15450]],tpx:2750,tpy:15250,most:{"left":4250,"right":4600,"top":7550,"bottom":7725},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[9350,15450],[9700,15800],[9000,15800]],tpx:2750,tpy:15250,most:{"left":4500,"right":4850,"top":7725,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[9350,15100],[9550,15100],[9450,15200]],tpx:2750,tpy:15250,most:{"left":4675,"right":4775,"top":7550,"bottom":7600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[9900,15250],[10100,15450],[9900,15650],[9700,15450]],tpx:2750,tpy:15250,most:{"left":4850,"right":5050,"top":7625,"bottom":7825},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[10100,15100],[10500,15100],[10300,15300]],tpx:2750,tpy:15250,most:{"left":5050,"right":5250,"top":7550,"bottom":7650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[10750,15200],[11000,15450],[10750,15700],[10500,15450]],tpx:2750,tpy:15250,most:{"left":5250,"right":5500,"top":7600,"bottom":7850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[11500,15400],[11900,15800],[11100,15800]],tpx:2750,tpy:15250,most:{"left":5550,"right":5950,"top":7700,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[10950,15100],[11250,15100],[11100,15250]],tpx:2750,tpy:15250,most:{"left":5475,"right":5625,"top":7550,"bottom":7625},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[11650,15100],[12550,15100],[12100,15550]],tpx:2750,tpy:15250,most:{"left":5825,"right":6275,"top":7550,"bottom":7775},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[12350,15650],[12500,15800],[12200,15800]],tpx:2750,tpy:15250,most:{"left":6100,"right":6250,"top":7825,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[12200,15100],[13000,15100],[12600,15500]],tpx:2750,tpy:15250,most:{"left":6100,"right":6500,"top":7550,"bottom":7750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[13050,15500],[13350,15800],[12750,15800]],tpx:2750,tpy:15250,most:{"left":6375,"right":6675,"top":7750,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[13100,15100],[14100,15100],[13600,15600]],tpx:2750,tpy:15250,most:{"left":6550,"right":7050,"top":7550,"bottom":7800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:13600,y:15100,w:500,h:500,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14050,y:15300,w:250,h:300,tpx:2750,tpy:15250,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:17500,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:18400,w:200,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:18700,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:17500,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:17500,w:200,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:17500,w:350,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:18400,w:200,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:18700,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:17500,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:17500,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:18700,w:500,h:200,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:14550,y:15450,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:14900,y:15700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:14950,y:15250,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:15750,y:15650,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:15700,y:15200,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:15350,y:15400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[10300,15650],[10450,15800],[10150,15800]],tpx:2750,tpy:15250,most:{"left":5075,"right":5225,"top":7825,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:700,w:1300,y:15100,x:16100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:16100,y:15100,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16100,y:15500,w:100,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16100,15500],[16100,15800],[15800,15800]],most:{"left":7900,"right":8050,"top":7750,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15800,15100],[16100,15100],[16100,15400]],most:{"left":7900,"right":8050,"top":7550,"bottom":7700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14300,15300],[14550,15450],[14300,15600]],most:{"left":7150,"right":7275,"top":7650,"bottom":7800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:16500,y:14900,w:200,h:200,points:[[8250,7450],[8250,7900],[8450,7900],[8450,7450]],speed:500,currentPoint:0.8981481481482458,alongWith:false,pointOn:{"x":8250,"y":7450},pointTo:{"x":8250,"y":7900},xv:3.061616997868383e-14,yv:500,inView:false,path:[[16500,14900,16.666666666666668],[16500,15800,16.666666666666668],[16900,15800,16.666666666666668],[16900,14900,16.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:16500,y:15300,w:200,h:200,points:[[8250,7650],[8250,7900],[8450,7900],[8450,7450],[8250,7450]],speed:500,currentPoint:1.770833333333385,alongWith:false,pointOn:{"x":8250,"y":7900},pointTo:{"x":8450,"y":7900},xv:500,yv:0,inView:false,path:[[16500,15300,16.666666666666668],[16500,15800,16.666666666666668],[16900,15800,16.666666666666668],[16900,14900,16.666666666666668],[16500,14900,16.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:16500,y:15700,w:200,h:200,points:[[8250,7850],[8250,7900],[8450,7900],[8450,7450],[8250,7450]],speed:500,currentPoint:2.3425925925925912,alongWith:false,pointOn:{"x":8450,"y":7900},pointTo:{"x":8450,"y":7450},xv:3.061616997868383e-14,yv:-500,inView:false,path:[[16500,15700,16.666666666666668],[16500,15800,16.666666666666668],[16900,15800,16.666666666666668],[16900,14900,16.666666666666668],[16500,14900,16.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:16900,y:15500,w:200,h:200,points:[[8450,7750],[8450,7450],[8250,7450],[8250,7900],[8450,7900]],speed:500,currentPoint:1.5208333333334394,alongWith:false,pointOn:{"x":8450,"y":7450},pointTo:{"x":8250,"y":7450},xv:-500,yv:6.123233995736766e-14,inView:false,path:[[16900,15500,16.666666666666668],[16900,14900,16.666666666666668],[16500,14900,16.666666666666668],[16500,15800,16.666666666666668],[16900,15800,16.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:16900,y:15100,w:200,h:200,points:[[8450,7550],[8450,7450],[8250,7450],[8250,7900],[8450,7900]],speed:500,currentPoint:2.23148148148148,alongWith:false,pointOn:{"x":8250,"y":7450},pointTo:{"x":8250,"y":7900},xv:3.061616997868383e-14,yv:500,inView:false,path:[[16900,15100,16.666666666666668],[16900,14900,16.666666666666668],[16500,14900,16.666666666666668],[16500,15800,16.666666666666668],[16900,15800,16.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:16800,y:15800,w:200,h:200,points:[[8400,7900],[8450,7900],[8450,7450],[8250,7450],[8250,7900]],speed:500,currentPoint:1.7870370370371105,alongWith:false,pointOn:{"x":8450,"y":7900},pointTo:{"x":8450,"y":7450},xv:3.061616997868383e-14,yv:-500,inView:false,path:[[16800,15800,16.666666666666668],[16900,15800,16.666666666666668],[16900,14900,16.666666666666668],[16500,14900,16.666666666666668],[16500,15800,16.666666666666668]],})
C(4,[],[0],{type:[4,[],[0]],x:19650,y:15450,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[9825,7550],[9825,7425]],"type":"poly","props":{}},endPolygon:{"points":[[9825,7900],[9825,8025]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:19650,y:15450,r:200,renderType:"circle",inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:19925,y:15450,r:75,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:14100,y:15100,w:198,h:200,tpx:900,tpy:18200,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[20],{h:200,w:200,y:15100,x:14100,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#23e743";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[8],{type:[1,[],[8]],x:14100,y:15100,w:200,h:200,coins:2,currentCoins:2,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:2,})
C(1,[5],[1],{h:50,w:2,y:15425,x:17449,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06782945736434108,
        detectionRadius: 25.019992006393608,
        spokeAngles: [0, Math.PI],
        pivotX: 17450,
        pivotY: 15450
    });
    C(0,[],[0],{x:17450,y:15450,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:15417,x:17450,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 17850,
        pivotY: 15450
    });
    C(0,[],[0],{x:17850,y:15450,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:15417,x:17850,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.07170542635658914,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 18250,
        pivotY: 15450
    });
    C(0,[],[0],{x:18250,y:15450,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:15417,x:18250,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.07364341085271317,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 18650,
        pivotY: 15450
    });
    C(0,[],[0],{x:18650,y:15450,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:15417,x:18650,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.0755813953488372,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 19050,
        pivotY: 15450
    });
    C(0,[],[0],{x:19050,y:15450,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:15417,x:19250,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.07751937984496124,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 19650,
        pivotY: 15450
    });
    C(0,[],[0],{x:19650,y:15450,r:70,cr:(e)=>{
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
    }});C(2,[],[0],{type:[2,[],[0]],points:[[16200,15100],[16500,15100],[16200,15400]],most:{"left":8100,"right":8250,"top":7550,"bottom":7700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16200,15500],[16500,15800],[16200,15800]],most:{"left":8100,"right":8250,"top":7750,"bottom":7900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:400,w:100,y:8200,x:6500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:400,w:100,y:8600,x:6600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:400,w:100,y:9000,x:6500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:400,w:100,y:9400,x:6600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[0],[1],{type:[1,[0],[1]],x:6600,y:8600,w:100,h:100,points:[[3300,4300],[3300,4450]],speed:150,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":3300,"y":4300},pointTo:{"x":3300,"y":4450},xv:9.184850993605149e-15,yv:150,inView:false,path:[[6600,8600,5],[6600,8900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:8200,w:100,h:100,points:[[3250,4100],[3250,4250]],speed:150,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":3250,"y":4100},pointTo:{"x":3250,"y":4250},xv:9.184850993605149e-15,yv:150,inView:false,path:[[6500,8200,5],[6500,8500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6500,y:9000,w:100,h:100,points:[[3250,4500],[3250,4650]],speed:150,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":3250,"y":4500},pointTo:{"x":3250,"y":4650},xv:9.184850993605149e-15,yv:150,inView:false,path:[[6500,9000,5],[6500,9300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:6600,y:9400,w:100,h:100,points:[[3300,4700],[3300,4850]],speed:150,currentPoint:0.008333333333333333,collidable:true,pointOn:{"x":3300,"y":4700},pointTo:{"x":3300,"y":4850},xv:9.184850993605149e-15,yv:150,inView:false,path:[[6600,9400,5],[6600,9700,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:18700,w:1600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:17300,w:400,h:1400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:17300,w:1200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:18700,w:800,h:200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:17300,w:18400,h:400,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:18300,w:650,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[400,17700],[700,17700],[400,18000]],most:{"left":200,"right":350,"top":8850,"bottom":9000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[400,18400],[700,18700],[400,18700]],most:{"left":200,"right":350,"top":9200,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1400,18400],[1400,18700],[1100,18700]],most:{"left":550,"right":700,"top":9200,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1100,17700],[1400,17700],[1400,18000]],most:{"left":550,"right":700,"top":8850,"bottom":9000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:18400,w:1100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2700,y:17900,w:200,h:800,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:2700,y:17700,w:200,h:200,coins:2,currentCoins:2,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:2,})
C(1,[],[1],{type:[1,[],[1]],x:1750,y:17700,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2100,y:18050,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:2450,y:17700,w:100,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:2500,y:18050,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2150,y:18050,r:100,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:2250,y:18300,w:450,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:1925,y:18000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2275,y:18000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:1400,y:18000,w:350,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:1800,y:18050,r:100,renderType:"circle",inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:1900,y:17700,w:500,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:17700,w:300,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:15800,w:400,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19150,y:15800,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:16000,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:16100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:16200,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:16100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:16000,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:16200,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:16300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:16300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19100,y:16400,w:500,h:950,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:14300,w:400,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19100,y:14900,w:550,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:14800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:14800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:14700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:14700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:14600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:14600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:14500,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:14500,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:14300,w:400,h:200,canJump:true,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:19200,y:14700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19300,y:14800,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19500,y:14800,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19400,y:14700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19500,y:14600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19400,y:14500,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19300,y:14600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19200,y:14500,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19200,y:16100,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19300,y:16200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19200,y:16300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19400,y:16300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19500,y:16200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19400,y:16100,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19300,y:16000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:19500,y:16000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:19200,w:1300,h:300,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:18950,w:300,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-650,y:19400,w:3950,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:18900,w:500,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4050,y:17700,w:3750,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:17650,w:800,h:1550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1600,y:19200,w:1300,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:19800,w:4300,h:350,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:5700,y:16100,w:300,h:100,tpx:8000,tpy:17900,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:5700,y:16225,w:300,h:50,angle:6,rotateSpeed:Math.PI/60,pivotX:5850,pivotY:16250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:76.03453162872775,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965977,boundPlayer:true,})
C(1,[],[20],{h:700,w:16600,y:15100,x:3400,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.24;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(0,[],[1],{type:[0,[],[1]],x:3200,y:17700,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18000],[3000,18050],[3050,18100],[2900,18100]],most:{"left":1450,"right":1525,"top":8975,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3050,18450],[3150,18450],[3200,18500],[3100,18550]],most:{"left":1525,"right":1600,"top":9225,"bottom":9275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3100,18400],[3200,18400],[3200,18500],[3050,18450]],most:{"left":1525,"right":1600,"top":9200,"bottom":9250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18000],[3000,18050],[2900,18100]],most:{"left":1450,"right":1500,"top":8975,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3100,18400],[3200,18400],[3200,18500]],most:{"left":1550,"right":1600,"top":9200,"bottom":9250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3050,18100],[3050,18150],[2900,18250],[2900,18100]],most:{"left":1450,"right":1525,"top":9025,"bottom":9125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3050,18100],[2900,18250],[2900,18100]],most:{"left":1450,"right":1525,"top":9025,"bottom":9125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3200,18250],[3200,18400],[3100,18400]],most:{"left":1550,"right":1600,"top":9125,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18650],[3000,18900],[2900,18800]],most:{"left":1450,"right":1500,"top":9325,"bottom":9450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18800],[3000,18900],[2900,18900]],most:{"left":1450,"right":1500,"top":9400,"bottom":9450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,18650],[3000,18800],[2950,18800]],most:{"left":1450,"right":1500,"top":9325,"bottom":9400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2950,18800],[3000,18800],[3000,18900]],most:{"left":1475,"right":1500,"top":9400,"bottom":9450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[20],{h:50,w:100,y:17900,x:2900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.01;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:1800,y:19000,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:19000,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:19100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:750,y:19000,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:18900,w:100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:750,y:19050,r:50,renderType:"circle",inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:800,y:18900,w:100,h:100,tpx:3550,tpy:19500,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3900,19200],[4400,19200],[4300,19600]],most:{"left":1950,"right":2200,"top":9600,"bottom":9800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4900,19450],[4900,19800],[4500,19800]],most:{"left":2250,"right":2450,"top":9725,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4450,19200],[4750,19200],[4600,19350]],most:{"left":2225,"right":2375,"top":9600,"bottom":9675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,19450],[6400,19800],[5600,19800]],most:{"left":2800,"right":3200,"top":9725,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6200,19200],[6800,19200],[7300,19700],[6800,19700],[6700,19700]],most:{"left":3100,"right":3650,"top":9600,"bottom":9850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7200,19300],[7800,19300],[7700,19800]],most:{"left":3600,"right":3900,"top":9650,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5000,19200],[5400,19200],[5200,19400]],most:{"left":2500,"right":2700,"top":9600,"bottom":9700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5200,19600],[5400,19800],[5000,19800]],most:{"left":2500,"right":2700,"top":9800,"bottom":9900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:18100,w:400,h:400,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:7800,y:19600,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[3900,9600],[3900,9500]],"type":"poly","props":{}},endPolygon:{"points":[[3900,10000],[3900,10100]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:8200,y:19000,w:200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:19000,w:550,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:10000,y:19100,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[5000,9350],[5000,9250]],"type":"poly","props":{}},endPolygon:{"points":[[5000,9750],[5000,9850]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:8800,y:19600,radius:300,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[4400,10000],[4400,10100]],"type":"poly","props":{}},endPolygon:{"points":[[4400,9600],[4400,9500]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:19000,w:1200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:19500,w:1900,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:18500,w:300,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:18500,w:2300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:19000,w:400,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:8200,y:18600,radius:300,startAngle:1.5707963267948966,endAngle:-3.141592653589793,startPolygon:{"points":[[4100,9500],[4100,9600]],"type":"poly","props":{}},endPolygon:{"points":[[3900,9300],[3800,9300]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:8200,y:18600,r:300,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10000,y:19100,r:300,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8800,y:19600,r:300,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[10500,19800],[10500,20000],[9100,20000]],most:{"left":4550,"right":5250,"top":9900,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9100,19700],[10500,19700],[9100,19900]],most:{"left":4550,"right":5250,"top":9850,"bottom":9950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:19700,w:300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10500,y:19800,w:100,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8900,19200],[9900,19200],[9900,19400]],most:{"left":4450,"right":4950,"top":9600,"bottom":9700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:19300,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8200,18700],[10000,18700],[8200,18900]],most:{"left":4100,"right":5000,"top":9350,"bottom":9450},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10000,18800],[10000,19000],[8200,19000]],most:{"left":4100,"right":5000,"top":9400,"bottom":9500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8200,17900],[8200,18400],[7900,18400]],most:{"left":3950,"right":4100,"top":8950,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7900,y:18400,w:100,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7800,18100],[7950,18100],[7800,18400]],most:{"left":3900,"right":3975,"top":9050,"bottom":9200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8900,19300],[9900,19500],[8900,19500]],most:{"left":4450,"right":4950,"top":9650,"bottom":9750},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:19300,w:100,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:18900,w:1100,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:20000,w:2100,h:250,canJump:true,inView:false,})
C(0,[],[0],{r:20+12/2,y:19600,x:8800,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(0,[],[0],{r:20+12/2,y:19100,x:10000,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(0,[],[0],{r:20+12/2,y:18650,x:8200,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:8200,y:17900,w:2500,h:600,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:9800,y:17700,w:100,h:100,points:[[4900,8850],[5050,8850],[5050,8900],[4900,8900]],speed:369,currentPoint:2.113833333333599,collidable:true,pointOn:{"x":5050,"y":8900},pointTo:{"x":4900,"y":8900},xv:-369,yv:4.518946688853733e-14,inView:false,path:[[9800,17700,12.3],[10100,17700,12.3],[10100,17800,12.3],[9800,17800,12.3]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:9800,y:17700,w:100,h:100,points:[[4900,8850],[5050,8850],[5050,8900],[4900,8900]],speed:369,currentPoint:0.11383333333359891,collidable:true,pointOn:{"x":4900,"y":8850},pointTo:{"x":5050,"y":8850},xv:369,yv:0,inView:false,path:[[9800,17700,12.3],[10100,17700,12.3],[10100,17800,12.3],[9800,17800,12.3]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[8300,17800],[8400,17900],[8200,17900]],most:{"left":4100,"right":4200,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8450,17700],[8650,17700],[8550,17800]],most:{"left":4225,"right":4325,"top":8850,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[8950,17700],[9050,17700],[9000,17750]],most:{"left":4475,"right":4525,"top":8850,"bottom":8875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8800,17850],[8850,17900],[8750,17900]],most:{"left":4375,"right":4425,"top":8925,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,17800],[10700,17900],[10300,17900]],most:{"left":5150,"right":5350,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,17700],[10900,17700],[11200,17800],[10900,17800]],most:{"left":5300,"right":5600,"top":8850,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:9400,y:17700,w:100,h:100,points:[[4700,8850],[4850,8850],[4850,8900],[4700,8900]],speed:369,currentPoint:2.113833333333599,alongWith:false,pointOn:{"x":4850,"y":8900},pointTo:{"x":4700,"y":8900},xv:-369,yv:4.518946688853733e-14,inView:false,path:[[9400,17700,12.3],[9700,17700,12.3],[9700,17800,12.3],[9400,17800,12.3]],})
C(1,[0],[0],{type:[1,[0],[0]],x:9400,y:17700,w:100,h:100,points:[[4700,8850],[4850,8850],[4850,8900],[4700,8900]],speed:369,currentPoint:0.11383333333359891,alongWith:false,pointOn:{"x":4700,"y":8850},pointTo:{"x":4850,"y":8850},xv:369,yv:0,inView:false,path:[[9400,17700,12.3],[9700,17700,12.3],[9700,17800,12.3],[9400,17800,12.3]],})
C(1,[0],[1],{type:[1,[0],[1]],x:10200,y:17500,w:200,h:200,points:[[5100,8750],[5100,8850],[5400,8850],[5400,8750]],speed:1476,currentPoint:2.682999999999556,collidable:true,pointOn:{"x":5400,"y":8850},pointTo:{"x":5400,"y":8750},xv:9.037893377707467e-14,yv:-1476,inView:false,path:[[10200,17500,49.2],[10200,17700,49.2],[10800,17700,49.2],[10800,17500,49.2]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:18400,w:500,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11950,y:17700,w:450,h:1200,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[10700,17900],[11000,17900],[11000,17950]],most:{"left":5350,"right":5500,"top":8950,"bottom":8975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11000,17950],[11300,18050],[11300,18100]],most:{"left":5500,"right":5650,"top":8975,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11300,18100],[11500,18250],[11500,18300]],most:{"left":5650,"right":5750,"top":9050,"bottom":9150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11504,18300],[11650,18500],[11626,18526]],most:{"left":5752,"right":5825,"top":9150,"bottom":9263},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11632,18528],[11738,18776],[11692,18786]],most:{"left":5816,"right":5869,"top":9264,"bottom":9393},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,18800],[11750,19050],[11700,19050]],most:{"left":5850,"right":5875,"top":9400,"bottom":9525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,19050],[11750,19300],[11700,19300]],most:{"left":5850,"right":5875,"top":9525,"bottom":9650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,19600],[11750,19900],[11700,19900]],most:{"left":5850,"right":5875,"top":9800,"bottom":9950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,19300],[11750,19600],[11700,19600]],most:{"left":5850,"right":5875,"top":9650,"bottom":9800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:11700,y:19900,w:200,h:100,effect:2000,inView:false,bounciness:1333.3333333333333,decay:0.5,})
C(1,[],[12],{type:[1,[],[12]],x:11600,y:17700,w:350,h:350,tpx:12450,tpy:18350,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[11050,17700],[11600,17700],[11600,17800],[11600,18050]],most:{"left":5525,"right":5800,"top":8850,"bottom":9025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11600,18050],[12250,18050],[12250,18550],[11900,18550]],most:{"left":5800,"right":6125,"top":9025,"bottom":9275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:12350,y:17600,w:550,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:18700,w:1900,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12700,y:17700,w:1600,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12350,y:17650,w:350,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:17900,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12350,y:18600,w:550,h:150,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[12900,18000],[13000,18000],[12900,18100]],most:{"left":6450,"right":6500,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12900,18600],[13000,18700],[12900,18700]],most:{"left":6450,"right":6500,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14200,18000],[14300,18000],[14300,18100]],most:{"left":7100,"right":7150,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,18600],[13200,18700],[13000,18700]],most:{"left":6500,"right":6600,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13300,18600],[13400,18700],[13200,18700]],most:{"left":6600,"right":6700,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13500,18600],[13600,18700],[13400,18700]],most:{"left":6700,"right":6800,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13700,18600],[13800,18700],[13600,18700]],most:{"left":6800,"right":6900,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13900,18600],[14000,18700],[13800,18700]],most:{"left":6900,"right":7000,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,18600],[14200,18700],[14000,18700]],most:{"left":7000,"right":7100,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,18600],[14300,18700],[14200,18700]],most:{"left":7100,"right":7150,"top":9300,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14000,18000],[14200,18000],[14100,18100]],most:{"left":7000,"right":7100,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13800,18000],[14000,18000],[13900,18100]],most:{"left":6900,"right":7000,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13600,18000],[13800,18000],[13700,18100]],most:{"left":6800,"right":6900,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13400,18000],[13600,18000],[13500,18100]],most:{"left":6700,"right":6800,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,18000],[13400,18000],[13300,18100]],most:{"left":6600,"right":6700,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,18000],[13200,18000],[13100,18100]],most:{"left":6500,"right":6600,"top":9000,"bottom":9050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:17700,w:1200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14950,y:18100,w:350,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:18000,w:200,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15500,y:18400,w:200,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:19000,w:1800,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:19600,w:1500,h:400,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:800,y:18025,x:12850,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 13250,
        pivotY: 18050
    });
    C(0,[],[0],{x:13250,y:18050,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18625,x:12850,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 13250,
        pivotY: 18650
    });
    C(0,[],[0],{x:13250,y:18650,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18625,x:13250,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 13650,
        pivotY: 18650
    });
    C(0,[],[0],{x:13650,y:18650,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18625,x:13850,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 14250,
        pivotY: 18650
    });
    C(0,[],[0],{x:14250,y:18650,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18025,x:13250,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 13650,
        pivotY: 18050
    });
    C(0,[],[0],{x:13650,y:18050,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18025,x:13650,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 14050,
        pivotY: 18050
    });
    C(0,[],[0],{x:14050,y:18050,r:50,cr:(e)=>{
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
    }});C(2,[],[0],{type:[2,[],[0]],points:[[12400,18400],[12900,18600],[12400,18600]],most:{"left":6200,"right":6450,"top":9200,"bottom":9300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12400,18100],[12900,18100],[12400,18300]],most:{"left":6200,"right":6450,"top":9050,"bottom":9150},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:14500,y:18750,w:200,h:50,points:[[7250,9375],[7400,9375]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7250,"y":9375},pointTo:{"x":7400,"y":9375},xv:100,yv:0,inView:false,path:[[14500,18750,3.3333333333333335],[14800,18750,3.3333333333333335]],})
C(1,[],[0],{type:[1,[],[0]],x:15500,y:17650,w:500,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15900,y:18050,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15850,y:18100,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:18450,w:400,h:750,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15850,y:18400,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15500,y:18450,w:150,h:200,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15400,y:18650,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[7700,9275],[7700,9225]],"type":"poly","props":{}},endPolygon:{"points":[[7750,9325],[7800,9325]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:18450,w:150,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15400,y:18600,radius:100,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[7700,9350],[7700,9400]],"type":"poly","props":{}},endPolygon:{"points":[[7650,9300],[7600,9300]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:15300,y:18050,w:50,h:100,canJump:true,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:15800,y:18300,r:100,tpx:16200,tpy:17750,renderType:"circleR",radius:50,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:18450,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15550,y:18500,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15600,y:18400,radius:200,startAngle:-3.141592653589793,endAngle:0.7853981633974483,startPolygon:{"points":[[7650,9200],[7600,9200]],"type":"poly","props":{}},endPolygon:{"points":[[7906.066017177982,9306.066017177982],[7941.42135623731,9341.42135623731]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-3.141592653589793,endSliceAngle:0.7853981633974483,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15600,y:18150,radius:200,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[7950,9075],[8000,9075]],"type":"poly","props":{}},endPolygon:{"points":[[7800,9225],[7800,9275]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:19000,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:19100,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1700,y:19100,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[800,9550],[750,9550]],"type":"poly","props":{}},endPolygon:{"points":[[850,9500],[850,9450]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1600,y:19100,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[850,9550],[900,9550]],"type":"poly","props":{}},endPolygon:{"points":[[800,9600],[800,9650]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1500,y:19100,radius:100,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[750,9600],[750,9650]],"type":"poly","props":{}},endPolygon:{"points":[[700,9550],[650,9550]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1300,y:19050,w:100,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:19050,w:250,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1350,y:19050,r:50,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1100,y:19000,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[500,9500],[450,9500]],"type":"poly","props":{}},endPolygon:{"points":[[550,9450],[550,9400]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:18850,w:100,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1150,y:19050,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1150,y:19000,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:18900,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:18950,w:50,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:1000,y:19100,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[550,9550],[600,9550]],"type":"poly","props":{}},endPolygon:{"points":[[500,9600],[500,9650]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2650,y:19100,radius:75,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[1325,9600],[1325,9625]],"type":"poly","props":{}},endPolygon:{"points":[[1325,9500],[1325,9475]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:150,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:18900,w:100,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2750,y:18950,radius:75,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[1375,9425],[1375,9400]],"type":"poly","props":{}},endPolygon:{"points":[[1375,9525],[1375,9550]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:150,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:18900,w:50,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:19100,w:50,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:18950,w:50,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2550,y:18950,w:100,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2400,y:19100,radius:75,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1250,9550],[1275,9550]],"type":"poly","props":{}},endPolygon:{"points":[[1200,9600],[1200,9625]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:150,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2750,y:19050,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:18700,w:300,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:18850,w:50,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:18700,w:450,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2650,y:19100,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2650,y:18950,w:150,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2100,y:19000,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[1050,9450],[1050,9400]],"type":"poly","props":{}},endPolygon:{"points":[[1100,9500],[1150,9500]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:18850,w:100,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2250,y:19050,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2250,y:19050,w:100,h:50,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2350,y:19050,r:50,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:19100,radius:100,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[1100,9600],[1100,9650]],"type":"poly","props":{}},endPolygon:{"points":[[1050,9550],[1000,9550]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2650,y:19050,w:100,h:100,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:9200,y:17700,w:100,h:100,points:[[4600,8850],[4750,8850],[4750,8900],[4600,8900]],speed:369,currentPoint:0.11383333333359891,alongWith:false,pointOn:{"x":4600,"y":8850},pointTo:{"x":4750,"y":8850},xv:369,yv:0,inView:false,path:[[9200,17700,12.3],[9500,17700,12.3],[9500,17800,12.3],[9200,17800,12.3]],})
C(1,[0],[0],{type:[1,[0],[0]],x:9200,y:17700,w:100,h:100,points:[[4600,8850],[4750,8850],[4750,8900],[4600,8900]],speed:369,currentPoint:2.113833333333599,alongWith:false,pointOn:{"x":4750,"y":8900},pointTo:{"x":4600,"y":8900},xv:-369,yv:4.518946688853733e-14,inView:false,path:[[9200,17700,12.3],[9500,17700,12.3],[9500,17800,12.3],[9200,17800,12.3]],})
C(1,[0],[0],{type:[1,[0],[0]],x:9200,y:17600,w:100,h:100,points:[[4600,8800],[4600,8900]],speed:369,currentPoint:0.17075000000524596,alongWith:false,pointOn:{"x":4600,"y":8800},pointTo:{"x":4600,"y":8900},xv:2.2594733444268666e-14,yv:369,inView:false,path:[[9200,17600,12.3],[9200,17800,12.3]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14400,y:19100,w:100,h:100,points:[[7200,9550],[7350,9550]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7200,"y":9550},pointTo:{"x":7350,"y":9550},xv:100,yv:0,inView:false,path:[[14400,19100,3.3333333333333335],[14700,19100,3.3333333333333335]],})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:18700,w:500,h:100,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:14300,y:18700,w:200,h:100,points:[[7150,9350],[7300,9350]],speed:100,currentPoint:0.005555555554098343,alongWith:false,pointOn:{"x":7150,"y":9350},pointTo:{"x":7300,"y":9350},xv:100,yv:0,inView:false,path:[[14300,18700,3.3333333333333335],[14600,18700,3.3333333333333335]],})
C(1,[0],[12],{type:[1,[0],[12]],x:14500,y:18700,w:200,h:50,points:[[7250,9350],[7400,9350]],speed:100,currentPoint:0.005555555554098343,tpx:15000,tpy:18850,pointOn:{"x":7250,"y":9350},pointTo:{"x":7400,"y":9350},xv:100,yv:0,inView:false,path:[[14500,18700,3.3333333333333335],[14800,18700,3.3333333333333335]],})
C(1,[],[0],{type:[1,[],[0]],x:450,y:18950,w:150,h:200,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[5500,19400],[5600,19500],[5500,19600],[5400,19500]],most:{"left":2700,"right":2800,"top":9700,"bottom":9800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5700,19200],[5900,19200],[5800,19300]],most:{"left":2850,"right":2950,"top":9600,"bottom":9650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,19250],[4350,19250],[4250,19450]],most:{"left":2000,"right":2175,"top":9625,"bottom":9725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4850,19550],[4850,19750],[4600,19750]],most:{"left":2300,"right":2425,"top":9775,"bottom":9875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5100,19250],[5300,19250],[5200,19350]],most:{"left":2550,"right":2650,"top":9625,"bottom":9675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5200,19650],[5300,19750],[5100,19750]],most:{"left":2550,"right":2650,"top":9825,"bottom":9875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5500,19450],[5550,19500],[5500,19550],[5450,19500]],most:{"left":2725,"right":2775,"top":9725,"bottom":9775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,19500],[6300,19750],[5700,19750]],most:{"left":2850,"right":3150,"top":9750,"bottom":9875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,19250],[6800,19250],[7200,19650],[6700,19650]],most:{"left":3150,"right":3600,"top":9625,"bottom":9825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,19350],[7650,19350],[7550,19550]],most:{"left":3650,"right":3825,"top":9675,"bottom":9775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7800,y:19600,r:300,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7800,y:19600,r:250,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4550,19250],[4650,19250],[4600,19300]],most:{"left":2275,"right":2325,"top":9625,"bottom":9650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[9200,17800],[9300,17900],[9100,17900]],most:{"left":4550,"right":4650,"top":8900,"bottom":8950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[5750,19200],[5850,19200],[5800,19250]],most:{"left":2875,"right":2925,"top":9600,"bottom":9625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:15600,y:18400,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{r:20+12/2,y:18450,x:15600,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        });
C(1,[],[0],{type:[1,[],[0]],x:15400,y:18400,w:50,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16400,y:17700,w:400,h:1500,canJump:true,inView:false,})
C(1,[],[15],{type:[1,[],[15]],x:16000,y:17700,w:400,h:1500,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:16000,y:17700,w:400,h:1500,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(2,[],[1],{type:[2,[],[1]],points:[[16000,17900],[16200,18100],[16000,18300]],most:{"left":8000,"right":8100,"top":8950,"bottom":9150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16400,18300],[16400,18700],[16200,18700]],most:{"left":8100,"right":8200,"top":9150,"bottom":9350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16000,18800],[16100,19200],[16000,19200]],most:{"left":8000,"right":8050,"top":9400,"bottom":9600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16400,18800],[16400,19150],[16300,19200]],most:{"left":8150,"right":8200,"top":9400,"bottom":9600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15700,y:19200,w:300,h:200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:15900,y:19400,w:600,h:600,spawn:{"x":8100,"y":9850},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:15650,y:19350,w:250,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10350,y:-200,w:10050,h:10200,canJump:true,inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:19800,y:14100,w:200,h:200,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:20000,w:350,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:20000,y:17750,w:350,h:2450,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:16000,y:19200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16300,y:19200,w:100,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:16400,y:19200,w:100,h:200,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:400,y:19125,x:16150,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 16350,
        pivotY: 19150
    });
    C(0,[],[0],{x:16350,y:19150,r:70,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:16500,y:19200,w:300,h:500,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:800,y:19575,x:16700,
        boundPlayer: true,
        restAngles: [-0.6981317007977318, 2.443460952792061],
        toRest: true,
        homingRotateSpeed: 0.07364341085271317,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17100,
        pivotY: 19600
    });
    C(0,[],[0],{x:17100,y:19600,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:19125,x:15850,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 16050,
        pivotY: 19150
    });
    C(0,[],[0],{x:16050,y:19150,r:70,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:600,y:18975,x:16800,
        boundPlayer: true,
        restAngles: [0.6981317007977318, 3.839724354387525],
        toRest: true,
        homingRotateSpeed: 0.10077519379844961,
        detectionRadius: 301.0398644698074,
        spokeAngles: [0, Math.PI],
        pivotX: 17100,
        pivotY: 19000
    });
    C(0,[],[0],{x:17100,y:19000,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:16700,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17100,
        pivotY: 18550
    });
    C(0,[],[0],{x:17100,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:16800,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17200,
        pivotY: 18550
    });
    C(0,[],[0],{x:17200,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:16900,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17300,
        pivotY: 18550
    });
    C(0,[],[0],{x:17300,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:17000,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17400,
        pivotY: 18550
    });
    C(0,[],[0],{x:17400,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:17100,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17500,
        pivotY: 18550
    });
    C(0,[],[0],{x:17500,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:17200,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17600,
        pivotY: 18550
    });
    C(0,[],[0],{x:17600,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:17300,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17700,
        pivotY: 18550
    });
    C(0,[],[0],{x:17700,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18525,x:17400,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 17800,
        pivotY: 18550
    });
    C(0,[],[0],{x:17800,y:18550,r:50,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:18000,y:19800,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:19600,w:200,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[18290,19480],[18430,19610],[18300,19600]],most:{"left":9145,"right":9215,"top":9740,"bottom":9805},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:19150,y:19750,radius:275,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[9575,9750],[9575,9600]],"type":"poly","props":{}},endPolygon:{"points":[[9575,10000],[9575,10150]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:550,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:19600,w:650,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:19750,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:18400,w:100,h:300,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:796,y:19085,x:17402,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 398.78440290462714,
        spokeAngles: [0, Math.PI],
        pivotX: 17800,
        pivotY: 19110
    });
    C(0,[],[0],{x:17800,y:19110,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:796,y:19475,x:17402,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 398.78440290462714,
        spokeAngles: [0, Math.PI],
        pivotX: 17800,
        pivotY: 19500
    });
    C(0,[],[0],{x:17800,y:19500,r:50,cr:(e)=>{
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
    }});C(2,[],[0],{type:[2,[],[0]],points:[[18400,19300],[18400,19900],[17900,19800]],most:{"left":8950,"right":9200,"top":9650,"bottom":9950},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:18000,y:19800,radius:50,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[9000,9900],[9000,9950]],"type":"poly","props":{}},endPolygon:{"points":[[9000,9900],[8950,9900]],"type":"poly","props":{}},renderType:"circle",inView:false,r:100,innerRadius:0,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:19150,y:19350,radius:175,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[9575,9800],[9575,9850]],"type":"poly","props":{}},endPolygon:{"points":[[9575,9550],[9575,9500]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:19350,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18750,y:19400,w:150,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18600,y:18400,w:250,h:1300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18850,y:18900,w:450,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18800,y:19000,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18850,y:19050,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:19150,y:19750,radius:375,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[9575,9550],[9575,9500]],"type":"poly","props":{}},endPolygon:{"points":[[9900,9875],[9950,9875]],"type":"poly","props":{}},innerRadius:650,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:750,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:18900,w:400,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19550,y:19050,w:250,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19650,y:19200,w:150,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:19050,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:19850,y:19750,radius:150,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[10000,9875],[10075,9875]],"type":"poly","props":{}},endPolygon:{"points":[[9850,9875],[9775,9875]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:19950,w:200,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19850,y:19750,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19800,y:19100,w:100,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:19200,w:150,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19700,y:19100,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16650,y:18400,w:150,h:300,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17800,18700],[18400,18700],[18400,19300]],most:{"left":8900,"right":9200,"top":9350,"bottom":9650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:18400,y:18400,w:200,h:1200,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:19800,y:19000,radius:150,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[9900,9400],[9900,9350]],"type":"poly","props":{}},endPolygon:{"points":[[10000,9500],[10050,9500]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:19000,y:18750,radius:125,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[9500,9450],[9500,9500]],"type":"poly","props":{}},endPolygon:{"points":[[9500,9300],[9500,9250]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:19000,y:18700,w:1100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19000,y:18750,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18850,y:18400,w:450,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:18400,w:400,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:18050,r:250,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19750,y:18050,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18850,y:17700,w:450,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19600,y:17700,w:550,h:800,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:800,y:20125,x:18000,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18400,
        pivotY: 20150
    });
    C(0,[],[0],{x:18400,y:20150,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:20125,x:18400,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18800,
        pivotY: 20150
    });
    C(0,[],[0],{x:18800,y:20150,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18975,x:17950,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.07364341085271317,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18350,
        pivotY: 19000
    });
    C(0,[],[0],{x:18350,y:19000,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19525,x:17950,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.07364341085271317,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18350,
        pivotY: 19550
    });
    C(0,[],[0],{x:18350,y:19550,r:50,cr:(e)=>{
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
    }});C(4,[],[0],{type:[4,[],[0]],x:19350,y:18550,radius:125,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[9750,9275],[9800,9275]],"type":"poly","props":{}},endPolygon:{"points":[[9675,9350],[9675,9400]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:19500,y:18050,w:550,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19250,y:18050,w:150,h:450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19300,y:18500,r:100,renderType:"circle",inView:false,})
C(1,[5],[1],{h:50,w:800,y:19275,x:18250,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.07364341085271317,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18650,
        pivotY: 19300
    });
    C(0,[],[0],{x:18650,y:19300,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19775,x:18000,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18400,
        pivotY: 19800
    });
    C(0,[],[0],{x:18400,y:19800,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19775,x:18400,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18800,
        pivotY: 19800
    });
    C(0,[],[0],{x:18800,y:19800,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:400,y:19725,x:19000,
        boundPlayer: true,
        restAngles: [-0.5235987755982988, 2.6179938779914944],
        toRest: true,
        homingRotateSpeed: 0.16085271317829455,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 19200,
        pivotY: 19750
    });
    C(0,[],[0],{x:19200,y:19750,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:500,y:19325,x:18900,
        boundPlayer: true,
        restAngles: [0.5235987755982988, 3.665191429188092],
        toRest: true,
        homingRotateSpeed: 0.12596899224806202,
        detectionRadius: 251.24689052802225,
        spokeAngles: [0, Math.PI],
        pivotX: 19150,
        pivotY: 19350
    });
    C(0,[],[0],{x:19150,y:19350,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18975,x:18750,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 19150,
        pivotY: 19000
    });
    C(0,[],[0],{x:19150,y:19000,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:600,y:19025,x:19200,
        boundPlayer: true,
        restAngles: [0.3490658503988659, 3.490658503988659],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 301.0398644698074,
        spokeAngles: [0, Math.PI],
        pivotX: 19500,
        pivotY: 19050
    });
    C(0,[],[0],{x:19500,y:19050,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:600,y:19125,x:19350,
        boundPlayer: true,
        restAngles: [0.6981317007977318, 3.839724354387525],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 301.0398644698074,
        spokeAngles: [0, Math.PI],
        pivotX: 19650,
        pivotY: 19150
    });
    C(0,[],[0],{x:19650,y:19150,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:20125,x:19450,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.09302325581395349,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 19850,
        pivotY: 20150
    });
    C(0,[],[0],{x:19850,y:20150,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19075,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19100
    });
    C(0,[],[0],{x:20200,y:19100,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19475,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19500
    });
    C(0,[],[0],{x:20200,y:19500,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19375,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19400
    });
    C(0,[],[0],{x:20200,y:19400,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19275,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19300
    });
    C(0,[],[0],{x:20200,y:19300,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19175,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19200
    });
    C(0,[],[0],{x:20200,y:19200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19575,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19600
    });
    C(0,[],[0],{x:20200,y:19600,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:19675,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 19700
    });
    C(0,[],[0],{x:20200,y:19700,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18725,x:19650,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20050,
        pivotY: 18750
    });
    C(0,[],[0],{x:20050,y:18750,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18425,x:18550,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.029069767441860465,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18950,
        pivotY: 18450
    });
    C(0,[],[0],{x:18950,y:18450,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:18725,x:18350,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18750,
        pivotY: 18750
    });
    C(0,[],[0],{x:18750,y:18750,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:18167,x:19350,
        boundPlayer: true,
        restAngles: [1.7453292519943295, 4.886921905584122],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 19750,
        pivotY: 18200
    });
    C(0,[],[0],{x:19750,y:18200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:800,y:18167,x:18750,
        boundPlayer: true,
        restAngles: [1.3962634015954636, 4.537856055185257],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 401.35894159716935,
        spokeAngles: [0, Math.PI],
        pivotX: 19150,
        pivotY: 18200
    });
    C(0,[],[0],{x:19150,y:18200,r:50,cr:(e)=>{
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
    }});C(0,[],[12],{type:[0,[],[12]],x:19450,y:17700,r:150,tpx:10650,tpy:14250,renderType:"circleR",radius:75,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19250,y:17500,w:400,h:200,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:10800,y:14000,radius:200,startAngle:-3.141592653589793,endAngle:0,startPolygon:{"points":[[5300,7000],[5200,7000]],"type":"poly","props":{}},endPolygon:{"points":[[5500,7000],[5600,7000]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-3.141592653589793,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:10700,y:14000,w:200,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10800,y:14000,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:11100,y:14100,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11000,y:14000,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:10700,w:200,h:3600,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:10800,y:14000,radius:300,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[5400,6750],[5400,6700]],"type":"poly","props":{}},endPolygon:{"points":[[5650,7000],[5700,7000]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:10600,y:13600,w:200,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:10800,y:13500,radius:100,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[5400,6800],[5400,6850]],"type":"poly","props":{}},endPolygon:{"points":[[5350,6750],[5300,6750]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:10550,y:13300,w:150,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10800,y:13300,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11100,y:13500,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11250,y:13550,w:100,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,13200],[10700,13300],[10600,13300]],most:{"left":5300,"right":5350,"top":6600,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10900,13200],[11300,13300],[10800,13300]],most:{"left":5400,"right":5650,"top":6600,"bottom":6650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:10900,y:13200,w:400,h:150,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:10600,y:10000,w:700,h:700,spawn:{"x":5475,"y":5175},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:11500,y:10700,w:1250,h:500,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:11500,y:10600,w:1050,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12550,y:10250,w:250,h:950,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:11950,y:10300,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:11600,y:10300,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:12300,y:10300,r:100,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:11725,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:12075,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:12425,y:10250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:12550,y:10000,w:250,h:250,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(2,[],[1],{type:[2,[],[1]],points:[[11200,12700],[11300,12800],[11200,12900],[11100,12800]],most:{"left":5550,"right":5650,"top":6350,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10700,12000],[10800,12100],[10700,12200],[10600,12100]],most:{"left":5300,"right":5400,"top":6000,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,11200],[11100,11350],[10950,11500],[10800,11350]],most:{"left":5400,"right":5550,"top":5600,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10850,12050],[10900,12100],[10850,12150],[10800,12100]],most:{"left":5400,"right":5450,"top":6025,"bottom":6075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,12050],[11000,12100],[10950,12150],[10900,12100]],most:{"left":5450,"right":5500,"top":6025,"bottom":6075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11050,12050],[11100,12100],[11050,12150],[11000,12100]],most:{"left":5500,"right":5550,"top":6025,"bottom":6075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11050,12750],[11100,12800],[11050,12850],[11000,12800]],most:{"left":5500,"right":5550,"top":6375,"bottom":6425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,12750],[11000,12800],[10950,12850],[10900,12800]],most:{"left":5450,"right":5500,"top":6375,"bottom":6425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10850,12750],[10900,12800],[10850,12850],[10800,12800]],most:{"left":5400,"right":5450,"top":6375,"bottom":6425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10750,11300],[10800,11350],[10750,11400],[10700,11350]],most:{"left":5350,"right":5400,"top":5650,"bottom":5700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10850,11200],[10900,11250],[10850,11300],[10800,11250]],most:{"left":5400,"right":5450,"top":5600,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,11100],[11000,11150],[10950,11200],[10900,11150]],most:{"left":5450,"right":5500,"top":5550,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11050,11200],[11100,11250],[11050,11300],[11000,11250]],most:{"left":5500,"right":5550,"top":5600,"bottom":5650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11150,11300],[11200,11350],[11150,11400],[11100,11350]],most:{"left":5550,"right":5600,"top":5650,"bottom":5700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11050,11400],[11100,11450],[11050,11500],[11000,11450]],most:{"left":5500,"right":5550,"top":5700,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,11500],[11000,11550],[10950,11600],[10900,11550]],most:{"left":5450,"right":5500,"top":5750,"bottom":5800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10850,11400],[10900,11450],[10850,11500],[10800,11450]],most:{"left":5400,"right":5450,"top":5700,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[8],{type:[1,[],[8]],x:10600,y:12700,w:200,h:200,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(1,[],[7],{type:[1,[],[7]],x:10700,y:13000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10900,y:13000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11100,y:13000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10750,y:12550,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10900,y:12400,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11050,y:12250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10900,y:11750,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10900,y:11000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:11100,y:12000,w:200,h:200,coins:6,currentCoins:6,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:6,})
C(1,[],[8],{type:[1,[],[8]],x:10500,y:10700,w:300,h:300,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(1,[],[8],{type:[1,[],[8]],x:11100,y:10700,w:300,h:300,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(1,[],[8],{type:[1,[],[8]],x:10800,y:10700,w:300,h:300,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(1,[],[0],{type:[1,[],[0]],x:10450,y:10650,w:150,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11300,y:10700,w:250,h:450,canJump:true,inView:false,})
C(1,[],[20],{x:10600,y:14200,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[0],{type:[1,[],[0]],x:11300,y:10200,w:200,h:500,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:11300,y:10000,w:200,h:200,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:11000,w:1500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:10000,w:200,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:10000,w:200,h:800,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[12800,10250],[12950,10350],[12800,10450]],most:{"left":6400,"right":6475,"top":5125,"bottom":5225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,10450],[13000,10650],[12850,10550]],most:{"left":6425,"right":6500,"top":5225,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12900,10700],[12950,10800],[12850,10800]],most:{"left":6425,"right":6475,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[12800,10000],[13000,10000],[13000,10200]],most:{"left":6400,"right":6500,"top":5000,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:13200,y:10700,w:100,h:100,points:[[6600,5350],[7000,5350]],speed:150,currentPoint:0.253125,alongWith:false,pointOn:{"x":6600,"y":5350},pointTo:{"x":7000,"y":5350},xv:150,yv:0,inView:false,path:[[13200,10700,5],[14000,10700,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13200,y:10500,w:100,h:100,points:[[6600,5250],[6650,5250],[7000,5250]],speed:150,currentPoint:1.2892857142857144,alongWith:false,pointOn:{"x":6650,"y":5250},pointTo:{"x":7000,"y":5250},xv:150,yv:0,inView:false,path:[[13200,10500,5],[13300,10500,5],[14000,10500,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13200,y:10300,w:100,h:100,points:[[6600,5150],[6700,5150],[7000,5150]],speed:150,currentPoint:1.3375,alongWith:false,pointOn:{"x":6700,"y":5150},pointTo:{"x":7000,"y":5150},xv:150,yv:0,inView:false,path:[[13200,10300,5],[13400,10300,5],[14000,10300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13200,y:10100,w:100,h:100,points:[[6600,5050],[6750,5050],[7000,5050]],speed:150,currentPoint:1.405,alongWith:false,pointOn:{"x":6750,"y":5050},pointTo:{"x":7000,"y":5050},xv:150,yv:0,inView:false,path:[[13200,10100,5],[13500,10100,5],[14000,10100,5]],})
C(1,[],[1],{type:[1,[],[1]],x:13200,y:10100,w:50,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14050,y:10000,w:50,h:800,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14050,10800],[14100,10800],[14100,11000],[13900,11000]],most:{"left":6950,"right":7050,"top":5400,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,10800],[13200,10800],[13100,10900]],most:{"left":6500,"right":6600,"top":5400,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10700],[13250,10750],[13200,10800],[13150,10750]],most:{"left":6575,"right":6625,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10600],[13250,10650],[13200,10700],[13150,10650]],most:{"left":6575,"right":6625,"top":5300,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10100],[14150,10150],[14100,10200],[14050,10150]],most:{"left":7025,"right":7075,"top":5050,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10500],[13250,10550],[13200,10600],[13150,10550]],most:{"left":6575,"right":6625,"top":5250,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10400],[13250,10450],[13200,10500],[13150,10450]],most:{"left":6575,"right":6625,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10300],[13250,10350],[13200,10400],[13150,10350]],most:{"left":6575,"right":6625,"top":5150,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10200],[13250,10250],[13200,10300],[13150,10250]],most:{"left":6575,"right":6625,"top":5100,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,10100],[13250,10150],[13200,10200],[13150,10150]],most:{"left":6575,"right":6625,"top":5050,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10200],[14150,10250],[14100,10300],[14050,10250]],most:{"left":7025,"right":7075,"top":5100,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10300],[14150,10350],[14100,10400],[14050,10350]],most:{"left":7025,"right":7075,"top":5150,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10400],[14150,10450],[14100,10500],[14050,10450]],most:{"left":7025,"right":7075,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10500],[14150,10550],[14100,10600],[14050,10550]],most:{"left":7025,"right":7075,"top":5250,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10600],[14150,10650],[14100,10700],[14050,10650]],most:{"left":7025,"right":7075,"top":5300,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10700],[14150,10750],[14100,10800],[14050,10750]],most:{"left":7025,"right":7075,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10800],[14100,11000],[13950,11000]],most:{"left":6975,"right":7050,"top":5400,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10850],[14100,11000],[14000,11000]],most:{"left":7000,"right":7050,"top":5425,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10900],[14100,11000],[14050,11000]],most:{"left":7025,"right":7050,"top":5450,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10650],[14250,10700],[14150,10750]],most:{"left":7075,"right":7125,"top":5325,"bottom":5375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10550],[14250,10600],[14150,10650]],most:{"left":7075,"right":7125,"top":5275,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10450],[14250,10500],[14150,10550]],most:{"left":7075,"right":7125,"top":5225,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10350],[14250,10400],[14150,10450]],most:{"left":7075,"right":7125,"top":5175,"bottom":5225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10250],[14250,10300],[14150,10350]],most:{"left":7075,"right":7125,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10150],[14250,10200],[14150,10250]],most:{"left":7075,"right":7125,"top":5075,"bottom":5125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,10050],[14250,10100],[14150,10150]],most:{"left":7075,"right":7125,"top":5025,"bottom":5075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12800,10300],[12950,10350],[12800,10400]],most:{"left":6400,"right":6475,"top":5150,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,10500],[13000,10600],[12850,10550]],most:{"left":6425,"right":6500,"top":5250,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13050,10800],[13150,10800],[13100,10900]],most:{"left":6525,"right":6575,"top":5400,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10650],[13150,10750],[13050,10700]],most:{"left":6525,"right":6575,"top":5325,"bottom":5375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10550],[13150,10650],[13050,10600]],most:{"left":6525,"right":6575,"top":5275,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10450],[13150,10550],[13050,10500]],most:{"left":6525,"right":6575,"top":5225,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10350],[13150,10450],[13050,10400]],most:{"left":6525,"right":6575,"top":5175,"bottom":5225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10250],[13150,10350],[13050,10300]],most:{"left":6525,"right":6575,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13150,10150],[13150,10250],[13050,10200]],most:{"left":6525,"right":6575,"top":5075,"bottom":5125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12850,10000],[13000,10000],[13000,10150]],most:{"left":6425,"right":6500,"top":5000,"bottom":5075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10000],[13200,10000],[13150,10150]],most:{"left":6550,"right":6600,"top":5000,"bottom":5075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,10000],[13100,10000],[13050,10150]],most:{"left":6500,"right":6550,"top":5000,"bottom":5075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10050],[14300,10150],[14250,10100]],most:{"left":7125,"right":7150,"top":5025,"bottom":5075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10150],[14300,10250],[14250,10200]],most:{"left":7125,"right":7150,"top":5075,"bottom":5125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13250,10000],[13250,10100],[13200,10100]],most:{"left":6600,"right":6625,"top":5000,"bottom":5050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12900,10700],[12950,10800],[12900,10800]],most:{"left":6450,"right":6475,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10250],[14300,10350],[14250,10300]],most:{"left":7125,"right":7150,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10350],[14300,10450],[14250,10400]],most:{"left":7125,"right":7150,"top":5175,"bottom":5225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10450],[14300,10550],[14250,10500]],most:{"left":7125,"right":7150,"top":5225,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10550],[14300,10650],[14250,10600]],most:{"left":7125,"right":7150,"top":5275,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10650],[14300,10750],[14250,10700]],most:{"left":7125,"right":7150,"top":5325,"bottom":5375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10800],[14200,10950],[14150,11000]],most:{"left":7050,"right":7100,"top":5400,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14300,10800],[14250,11000],[14200,10950]],most:{"left":7100,"right":7150,"top":5400,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10800],[14300,10800],[14200,10950]],most:{"left":7050,"right":7150,"top":5400,"bottom":5475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14200,10950],[14300,11050],[14100,11050]],most:{"left":7050,"right":7150,"top":5475,"bottom":5525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14200,11050],[14300,11200],[14100,11200]],most:{"left":7050,"right":7150,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14000,11050],[14100,11200],[13900,11200]],most:{"left":6950,"right":7050,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13800,11050],[13900,11200],[13700,11200]],most:{"left":6850,"right":6950,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13600,11050],[13700,11200],[13500,11200]],most:{"left":6750,"right":6850,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13400,11050],[13500,11200],[13300,11200]],most:{"left":6650,"right":6750,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13200,11050],[13300,11200],[13100,11200]],most:{"left":6550,"right":6650,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13000,11050],[13100,11200],[12900,11200]],most:{"left":6450,"right":6550,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12800,11050],[12900,11200],[12700,11200]],most:{"left":6350,"right":6450,"top":5525,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10900],[12800,11050],[12700,11200],[12600,11050]],most:{"left":6300,"right":6400,"top":5450,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10600],[12800,10750],[12700,10900],[12600,10750]],most:{"left":6300,"right":6400,"top":5300,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10300],[12800,10450],[12700,10600],[12600,10450]],most:{"left":6300,"right":6400,"top":5150,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12900,11050],[12950,11100],[12900,11150],[12850,11100]],most:{"left":6425,"right":6475,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,11050],[13150,11100],[13100,11150],[13050,11100]],most:{"left":6525,"right":6575,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13300,11050],[13350,11100],[13300,11150],[13250,11100]],most:{"left":6625,"right":6675,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13500,11050],[13550,11100],[13500,11150],[13450,11100]],most:{"left":6725,"right":6775,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13700,11050],[13750,11100],[13700,11150],[13650,11100]],most:{"left":6825,"right":6875,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,11050],[14150,11100],[14100,11150],[14050,11100]],most:{"left":7025,"right":7075,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10850],[12750,10900],[12700,10950],[12650,10900]],most:{"left":6325,"right":6375,"top":5425,"bottom":5475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10550],[12750,10600],[12700,10650],[12650,10600]],most:{"left":6325,"right":6375,"top":5275,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10250],[12750,10300],[12700,10350],[12650,10300]],most:{"left":6325,"right":6375,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10000],[14300,10000],[14250,10100]],most:{"left":7050,"right":7150,"top":5000,"bottom":5050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14250,10700],[14300,10800],[14100,10800]],most:{"left":7050,"right":7150,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:13200,y:10700,w:100,h:100,points:[[6600,5350],[7000,5350]],speed:150,currentPoint:1.253125,alongWith:false,pointOn:{"x":7000,"y":5350},pointTo:{"x":6600,"y":5350},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13200,10700,5],[14000,10700,5]],})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10700],[13150,10750],[13100,10800],[13050,10750]],most:{"left":6525,"right":6575,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10600],[13150,10650],[13100,10700],[13050,10650]],most:{"left":6525,"right":6575,"top":5300,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10450],[13150,10500],[13100,10700],[13050,10500]],most:{"left":6525,"right":6575,"top":5225,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10200],[13150,10400],[13100,10450],[13050,10400]],most:{"left":6525,"right":6575,"top":5100,"bottom":5225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13100,10100],[13150,10150],[13100,10200],[13050,10150]],most:{"left":6525,"right":6575,"top":5050,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:13200,y:10000,w:850,h:100,tpx:14450,tpy:10050,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:10000,w:100,h:1200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11400,y:11200,w:3000,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,10700],[12550,10850],[11550,11000],[11450,10850]],most:{"left":5725,"right":6275,"top":5350,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12450,10900],[12550,11050],[12450,11200],[11450,11050]],most:{"left":5725,"right":6275,"top":5450,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,10700],[12550,10700],[12650,10850]],most:{"left":5850,"right":6325,"top":5350,"bottom":5425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:14000,y:10500,w:100,h:100,points:[[7000,5250],[6950,5250],[6600,5250]],speed:150,currentPoint:1.2892857142857144,alongWith:false,pointOn:{"x":6950,"y":5250},pointTo:{"x":6600,"y":5250},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14000,10500,5],[13900,10500,5],[13200,10500,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14000,y:10300,w:100,h:100,points:[[7000,5150],[6900,5150],[6600,5150]],speed:150,currentPoint:1.3375,alongWith:false,pointOn:{"x":6900,"y":5150},pointTo:{"x":6600,"y":5150},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14000,10300,5],[13800,10300,5],[13200,10300,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14000,y:10100,w:100,h:100,points:[[7000,5050],[6850,5050],[6600,5050]],speed:150,currentPoint:1.405,alongWith:false,pointOn:{"x":6850,"y":5050},pointTo:{"x":6600,"y":5050},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14000,10100,5],[13700,10100,5],[13200,10100,5]],})
C(4,[],[0],{type:[4,[],[0]],x:15100,y:10400,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[7550,5000],[7550,4900]],"type":"poly","props":{}},endPolygon:{"points":[[7550,5400],[7550,5500]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:10100,w:700,h:600,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15100,y:10400,r:300,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15100,y:11100,radius:300,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[7550,5750],[7550,5850]],"type":"poly","props":{}},endPolygon:{"points":[[7550,5350],[7550,5250]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:15100,y:11100,r:300,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14350,y:10650,w:300,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:11500,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:10800,w:600,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:11500,w:600,h:200,canJump:true,inView:false,})
C(2,[],[0],{x:0,y:0,points:[[15250,10425],[15183.155948031232,10557.251681765807],[15008.155948031232,10638.98771616641],[14791.844051968768,10638.98771616641],[14616.844051968768,10557.251681765807],[14550,10425],[14616.844051968768,10292.748318234193],[14791.844051968768,10211.01228383359],[15008.155948031232,10211.01228383359],[15183.155948031232,10292.748318234193]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(14900,10425,350,225,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15350,10425],[15259.2830723281,10557.251681765807],[15021.7830723281,10638.98771616641],[14728.2169276719,10638.98771616641],[14490.7169276719,10557.251681765807],[14400,10425],[14490.7169276719,10292.748318234193],[14728.2169276719,10211.01228383359],[15021.7830723281,10211.01228383359],[15259.2830723281,10292.748318234193]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(14875,10425,475,225,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15850,11025],[15759.2830723281,11157.251681765807],[15521.7830723281,11238.98771616641],[15228.2169276719,11238.98771616641],[14990.7169276719,11157.251681765807],[14900,11025],[14990.7169276719,10892.748318234193],[15228.2169276719,10811.01228383359],[15521.7830723281,10811.01228383359],[15759.2830723281,10892.748318234193]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(15375,11025,475,225,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{type:[2,[],[1]],points:[[15900,10050],[15900,10850],[15400,10800]],most:{"left":7700,"right":7950,"top":5025,"bottom":5425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14550,10800],[14700,11650],[14400,11650]],most:{"left":7200,"right":7350,"top":5400,"bottom":5825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,10800],[14700,10800],[14550,11650]],most:{"left":7200,"right":7350,"top":5400,"bottom":5825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15950,11100],[15950,11350],[15650,11350]],most:{"left":7825,"right":7975,"top":5550,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:11700,w:300,h:800,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:15700,y:11650,w:500,h:100,angle:6,rotateSpeed:Math.PI/60,pivotX:15950,pivotY:11700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:0.10471975511965977,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15900,y:11650,w:500,h:100,angle:-24,rotateSpeed:Math.PI/60,pivotX:16150,pivotY:11700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-0.41887902047863906,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:16150,y:11650,w:500,h:100,angle:-54,rotateSpeed:Math.PI/60,pivotX:16400,pivotY:11700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-0.9424777960769379,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:16350,y:11650,w:500,h:100,angle:-84,rotateSpeed:Math.PI/60,pivotX:16600,pivotY:11700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-1.4660765716752369,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:16350,y:11850,w:500,h:100,angle:-104,rotateSpeed:Math.PI/60,pivotX:16600,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-1.8151424220741028,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:16100,y:11850,w:500,h:100,angle:-134,rotateSpeed:Math.PI/60,pivotX:16350,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-2.3387411976724013,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,11400],[17150,11400],[17050,11550]],most:{"left":8475,"right":8575,"top":5700,"bottom":5775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,11550],[17150,11550],[17050,11700]],most:{"left":8475,"right":8575,"top":5775,"bottom":5850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,11700],[17150,11700],[17050,11850]],most:{"left":8475,"right":8575,"top":5850,"bottom":5925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,11850],[17150,11850],[17050,12000]],most:{"left":8475,"right":8575,"top":5925,"bottom":6000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,12000],[17150,12000],[17050,12150]],most:{"left":8475,"right":8575,"top":6000,"bottom":6075},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16950,12150],[17150,12150],[17050,12300]],most:{"left":8475,"right":8575,"top":6075,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16550,12250],[17150,12350],[16550,12450],[16000,12350]],most:{"left":8000,"right":8575,"top":6125,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16550,11150],[17150,11250],[16550,11350],[16000,11250]],most:{"left":8000,"right":8575,"top":5575,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16300,y:12300,w:500,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16300,y:11200,w:500,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16450,11200],[16650,11200],[16550,11350]],most:{"left":8225,"right":8325,"top":5600,"bottom":5675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16550,12250],[16650,12400],[16450,12400]],most:{"left":8225,"right":8325,"top":6125,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15050,10950],[15700,10950],[15400,11250]],most:{"left":7525,"right":7850,"top":5475,"bottom":5625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14550,10300],[15200,10300],[14900,10600]],most:{"left":7275,"right":7600,"top":5150,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14550,y:10300,w:100,h:100,points:[[7275,5150],[7475,5150]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7475,"y":5150},pointTo:{"x":7275,"y":5150},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14550,10300,5],[14950,10300,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14650,y:10450,w:100,h:100,points:[[7325,5225],[7525,5225]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7325,"y":5225},pointTo:{"x":7525,"y":5225},xv:150,yv:0,inView:false,path:[[14650,10450,5],[15050,10450,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14800,y:10350,w:100,h:100,points:[[7400,5175],[7600,5175]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7400,"y":5175},pointTo:{"x":7600,"y":5175},xv:150,yv:0,inView:false,path:[[14800,10350,5],[15200,10350,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14800,y:10350,w:100,h:100,points:[[7400,5175],[7600,5175]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7400,"y":5175},pointTo:{"x":7600,"y":5175},xv:150,yv:0,inView:false,path:[[14800,10350,5],[15200,10350,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14700,y:10250,w:100,h:100,points:[[7350,5125],[7550,5125]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7350,"y":5125},pointTo:{"x":7550,"y":5125},xv:150,yv:0,inView:false,path:[[14700,10250,5],[15100,10250,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14800,y:10450,w:100,h:100,points:[[7400,5225],[7600,5225]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7600,"y":5225},pointTo:{"x":7400,"y":5225},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14800,10450,5],[15200,10450,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14850,y:10400,w:100,h:100,points:[[7425,5200],[7625,5200]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7625,"y":5200},pointTo:{"x":7425,"y":5200},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14850,10400,5],[15250,10400,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15050,y:10950,w:100,h:100,points:[[7525,5475],[7725,5475]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7525,"y":5475},pointTo:{"x":7725,"y":5475},xv:150,yv:0,inView:false,path:[[15050,10950,5],[15450,10950,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15000,y:11050,w:100,h:100,points:[[7500,5525],[7700,5525]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7700,"y":5525},pointTo:{"x":7500,"y":5525},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15000,11050,5],[15400,11050,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15300,y:11100,w:100,h:100,points:[[7650,5550],[7850,5550]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7650,"y":5550},pointTo:{"x":7850,"y":5550},xv:150,yv:0,inView:false,path:[[15300,11100,5],[15700,11100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15400,y:10950,w:100,h:100,points:[[7700,5475],[7900,5475]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7900,"y":5475},pointTo:{"x":7700,"y":5475},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15400,10950,5],[15800,10950,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15500,y:11100,w:100,h:100,points:[[7750,5550],[7950,5550]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7750,"y":5550},pointTo:{"x":7950,"y":5550},xv:150,yv:0,inView:false,path:[[15500,11100,5],[15900,11100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15500,y:11100,w:100,h:100,points:[[7750,5550],[7950,5550]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7750,"y":5550},pointTo:{"x":7950,"y":5550},xv:150,yv:0,inView:false,path:[[15500,11100,5],[15900,11100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15200,y:11000,w:100,h:100,points:[[7600,5500],[7800,5500]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7800,"y":5500},pointTo:{"x":7600,"y":5500},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15200,11000,5],[15600,11000,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15250,y:10900,w:100,h:100,points:[[7625,5450],[7825,5450]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7825,"y":5450},pointTo:{"x":7625,"y":5450},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15250,10900,5],[15650,10900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15550,y:11150,w:100,h:100,points:[[7775,5575],[7975,5575]],speed:150,currentPoint:1.50625,collidable:true,pointOn:{"x":7975,"y":5575},pointTo:{"x":7775,"y":5575},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[15550,11150,5],[15950,11150,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15550,y:11000,w:100,h:100,points:[[7775,5500],[7975,5500]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7775,"y":5500},pointTo:{"x":7975,"y":5500},xv:150,yv:0,inView:false,path:[[15550,11000,5],[15950,11000,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15550,y:11000,w:100,h:100,points:[[7775,5500],[7975,5500]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7775,"y":5500},pointTo:{"x":7975,"y":5500},xv:150,yv:0,inView:false,path:[[15550,11000,5],[15950,11000,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14450,y:10400,w:100,h:100,points:[[7225,5200],[7425,5200]],speed:150,currentPoint:0.50625,collidable:true,pointOn:{"x":7225,"y":5200},pointTo:{"x":7425,"y":5200},xv:150,yv:0,inView:false,path:[[14450,10400,5],[14850,10400,5]],boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14800,y:11550,w:850,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15700,y:12000,w:100,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[16700,11400],[16900,11400],[16900,11600]],most:{"left":8350,"right":8450,"top":5700,"bottom":5800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16900,12000],[16900,12200],[16700,12200]],most:{"left":8350,"right":8450,"top":6000,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[15800,12000],[16000,12000],[15800,12200]],most:{"left":7900,"right":8000,"top":6000,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:15850,y:11850,w:500,h:100,angle:-164,rotateSpeed:Math.PI/60,pivotX:16100,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-2.8623399732707,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[15400,12500],[15700,12500],[16150,13700],[15400,13700]],most:{"left":7700,"right":8075,"top":6250,"bottom":6850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16600,12500],[16900,12500],[16900,13700],[16150,13700]],most:{"left":8075,"right":8450,"top":6250,"bottom":6850},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:13700,w:1700,h:750,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16000,12500],[16300,12500],[16150,12900]],most:{"left":8000,"right":8150,"top":6250,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[1],{type:[1,[1],[1]],x:15850,y:12250,w:500,h:100,angle:-176,rotateSpeed:-Math.PI/60,pivotX:16100,pivotY:12300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-3.07177948351002,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14100,10000],[14150,10050],[14100,10100],[14050,10050]],most:{"left":7025,"right":7075,"top":5000,"bottom":5050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[0],[0],{r:20+12/2,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            },currentPoint:1,x:16100,y:12650,path:[[16100,[12650],5],[16150,[12750],5],[16200,[12650],5]]
        });
C(0,[0],[0],{r:20+12/2,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            },currentPoint:2,x:16100,y:12650,path:[[16100,[12650],5],[16150,[12750],5],[16200,[12650],5]]
        });
C(0,[0],[0],{r:20+12/2,
            cr:(e)=>{
                e.isGrapplePoint = true;
                ctx.strokeStyle = '#c9c9c9';
                ctx.lineWidth = 12;
                ctx.globalAlpha = 0.5;
                ctx.beginPath();
                ctx.arc(e.pos.x, e.pos.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            },currentPoint:0,x:16100,y:12650,path:[[16100,[12650],5],[16150,[12750],5],[16200,[12650],5]]
        });
C(0,[],[7],{type:[0,[],[7]],x:12975,y:10775,r:25,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[0],[1],{type:[1,[0],[1]],x:13200,y:9900,w:100,h:100,points:[[6600,4950],[6750,4950],[7000,4950]],speed:150,currentPoint:1.405,collidable:true,pointOn:{"x":6750,"y":4950},pointTo:{"x":7000,"y":4950},xv:150,yv:0,inView:false,path:[[13200,9900,5],[13500,9900,5],[14000,9900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:14000,y:9900,w:100,h:100,points:[[7000,4950],[6850,4950],[6600,4950]],speed:150,currentPoint:1.405,collidable:true,pointOn:{"x":6850,"y":4950},pointTo:{"x":6600,"y":4950},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[14000,9900,5],[13700,9900,5],[13200,9900,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12100,y:13300,w:700,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11500,y:13300,w:300,h:1000,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[11800,13300],[12000,13300],[11800,14000]],most:{"left":5900,"right":6000,"top":6650,"bottom":7000},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:12400,y:13000,radius:300,startAngle:3.141592653589793,endAngle:1.5707963267948966,startPolygon:{"points":[[6000,6500],[5900,6500]],"type":"poly","props":{}},endPolygon:{"points":[[6200,6700],[6200,6800]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:3.141592653589793,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:12400,y:13000,r:304,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12100,y:13000,w:300,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11450,y:12400,w:550,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:12400,w:400,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:13000,w:450,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:12400,w:200,h:1950,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12350,y:12400,w:500,h:150,canJump:true,inView:false,})
C(1,[5],[1],{h:50,w:800,y:12925,x:12000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.20348837209302326,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 12400,
        pivotY: 12950
    });
    C(0,[],[0],{x:12400,y:12950,r:50,cr:(e)=>{
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
    }});C(1,[],[0],{type:[1,[],[0]],x:14300,y:11300,w:50,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:11700,w:1100,h:700,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[13900,11050],[13950,11100],[13900,11150],[13850,11100]],most:{"left":6925,"right":6975,"top":5525,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:12400,w:200,h:700,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:12400,w:200,h:700,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:14600,y:13100,radius:250,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[7450,6550],[7550,6550]],"type":"poly","props":{}},endPolygon:{"points":[[7150,6550],[7050,6550]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:13400,w:800,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14950,y:13100,w:150,h:350,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14600,y:13100,r:100,renderType:"circle",inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:14300,y:12500,w:200,h:100,maxStrength:25,currentStrength:25,time:0.016,timer:0.016,regenTime:666.6666666666666,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:14300,y:12700,w:50,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14350,y:12750,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14300,y:12700,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14400,y:13000,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14450,y:12950,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14400,y:13050,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14450,y:13000,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14350,y:12700,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14300,y:12800,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14450,y:13000,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[11500,11500],[12200,11500],[11500,12200]],tpx:11550,tpy:11350,most:{"left":5750,"right":6100,"top":5750,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[11500,12200],[11700,12400],[11500,12400]],tpx:11550,tpy:11350,most:{"left":5750,"right":5850,"top":6100,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[11900,12200],[12100,12200],[12000,12300]],tpx:11550,tpy:11350,most:{"left":5950,"right":6050,"top":6100,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[13100,11600],[13100,12400],[12300,12400]],tpx:11550,tpy:11350,most:{"left":6150,"right":6550,"top":5800,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[13800,11750],[14000,11950],[13800,12150],[13600,11950]],tpx:11550,tpy:11350,most:{"left":6800,"right":7000,"top":5875,"bottom":6075},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[13100,12100],[13400,12400],[13100,12400],[12900,12300]],tpx:11550,tpy:11350,most:{"left":6450,"right":6700,"top":6050,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:12400,w:1300,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:11300,w:500,h:1100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:13850,y:10900,w:100,h:100,points:[[6925,5450],[6850,5450]],speed:150,currentPoint:1.0166666666666666,collidable:true,pointOn:{"x":6850,"y":5450},pointTo:{"x":6925,"y":5450},xv:150,yv:0,inView:false,path:[[13850,10900,5],[13700,10900,5]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[13700,10900],[13700,11000],[13600,11000]],most:{"left":6800,"right":6850,"top":5450,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:13850,y:10900,w:100,h:100,points:[[6925,5450],[6850,5450]],speed:150,currentPoint:0.016666666666666666,collidable:true,pointOn:{"x":6925,"y":5450},pointTo:{"x":6850,"y":5450},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13850,10900,5],[13700,10900,5]],boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[13300,11400],[13500,11600],[13050,12050],[13100,11600]],tpx:11550,tpy:11350,most:{"left":6525,"right":6750,"top":5700,"bottom":6025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,11100],[12500,11250],[11650,11250]],most:{"left":5775,"right":6250,"top":5550,"bottom":5625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:13700,y:12000,w:100,h:400,tpx:14400,tpy:12450,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[11500,11400],[12300,11400],[12200,11500],[11500,11500]],most:{"left":5750,"right":6150,"top":5700,"bottom":5750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[10600,11000],[10800,11000],[10600,11200]],most:{"left":5300,"right":5400,"top":5500,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[11100,11000],[11300,11000],[11300,11200]],most:{"left":5550,"right":5650,"top":5500,"bottom":5600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[12800,11300],[12950,11300],[12100,12200],[11900,12200]],tpx:11550,tpy:11350,most:{"left":5950,"right":6475,"top":5650,"bottom":6100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:1100,w:2300,y:11300,x:11500,hex:'#FFFFFF',alpha:1,
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
C(4,[],[0],{type:[4,[],[0]],x:15000,y:12700,radius:250,startAngle:3.141592653589793,endAngle:0,startPolygon:{"points":[[7350,6350],[7250,6350]],"type":"poly","props":{}},endPolygon:{"points":[[7650,6350],[7750,6350]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:3.141592653589793,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:15300,y:12700,w:200,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:12700,w:200,h:400,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15000,y:12700,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:14300,w:1500,h:150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15100,13200],[15150,13600],[15100,13600]],most:{"left":7550,"right":7575,"top":6600,"bottom":6800},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:15000,y:14200,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[7550,7100],[7600,7100]],"type":"poly","props":{}},endPolygon:{"points":[[7500,7150],[7500,7200]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:14900,y:14200,radius:100,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[7450,7150],[7450,7200]],"type":"poly","props":{}},endPolygon:{"points":[[7400,7100],[7350,7100]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:13600,w:50,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:13750,w:100,h:450,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:14800,y:13700,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[7400,6800],[7400,6750]],"type":"poly","props":{}},endPolygon:{"points":[[7450,6850],[7500,6850]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:14750,y:13750,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14950,y:14150,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:13600,w:100,h:600,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:14450,y:13750,radius:125,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[7225,6950],[7225,7000]],"type":"poly","props":{}},endPolygon:{"points":[[7225,6800],[7225,6750]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:14450,y:13700,w:300,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14450,y:13750,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14450,y:13900,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:14550,y:13950,radius:125,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[7275,6900],[7275,6850]],"type":"poly","props":{}},endPolygon:{"points":[[7275,7050],[7275,7100]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:14450,y:14150,radius:125,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[7225,7150],[7225,7200]],"type":"poly","props":{}},endPolygon:{"points":[[7225,7000],[7225,6950]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:14550,y:14100,w:200,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14450,y:14100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:13900,w:50,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14550,y:13950,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:14450,y:14150,r:50,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15300,13200],[15300,13600],[15250,13600]],most:{"left":7625,"right":7650,"top":6600,"bottom":6800},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:15150,y:13600,radius:100,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[7625,6800],[7675,6800]],"type":"poly","props":{}},endPolygon:{"points":[[7575,6850],[7575,6900]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:15150,y:13750,radius:100,startAngle:-4.71238898038469,endAngle:-1.5707963267948966,startPolygon:{"points":[[7575,6950],[7575,6975]],"type":"poly","props":{}},endPolygon:{"points":[[7575,6800],[7575,6775]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-4.71238898038469,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:13900,w:150,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[14900,13600],[15100,13600],[14900,13750]],most:{"left":7450,"right":7550,"top":6800,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:15150,y:13750,r:50,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[15000,13800],[15050,13950],[14950,13900]],most:{"left":7475,"right":7525,"top":6900,"bottom":6975},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:15150,y:13950,radius:125,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[7575,6900],[7575,6850]],"type":"poly","props":{}},endPolygon:{"points":[[7575,7050],[7575,7100]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:15150,y:13950,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:14150,w:250,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15150,y:14150,r:50,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15100,y:14100,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[7500,7050],[7450,7050]],"type":"poly","props":{}},endPolygon:{"points":[[7550,7000],[7550,6950]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[15250,13700],[15450,13700],[15300,13850]],most:{"left":7625,"right":7725,"top":6850,"bottom":6925},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:14500,y:14200,w:100,h:100,tpx:17250,tpy:10350,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16850,y:12500,w:350,h:1850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:10700,w:2500,h:300,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:17200,y:10000,w:300,h:700,force:2500,dir:{"x":2500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(2,[],[0],{type:[2,[],[0]],points:[[17200,10000],[17500,10000],[17200,10300]],most:{"left":8600,"right":8750,"top":5000,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17200,10400],[17500,10700],[17200,10700]],most:{"left":8600,"right":8750,"top":5200,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[18200,10300],[18800,10700],[17600,10700]],most:{"left":8800,"right":9400,"top":5150,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18200,10000],[19000,10000],[18800,10400]],most:{"left":9100,"right":9500,"top":5000,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19400,10400],[19700,10700],[18900,10700]],most:{"left":9450,"right":9850,"top":5200,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19400,10000],[19700,10000],[19700,10400]],most:{"left":9700,"right":9850,"top":5000,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:9950,w:300,h:450,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[17500,10000],[17900,10000],[17700,10200]],most:{"left":8750,"right":8950,"top":5000,"bottom":5100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[19700,10400],[20000,10400],[20000,10700]],most:{"left":9850,"right":10000,"top":5200,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19700,10700],[19900,10900],[19700,11000]],most:{"left":9850,"right":9950,"top":5350,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:19700,y:10900,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19300,y:11000,w:400,h:1100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[19700,11500],[19900,11700],[19700,11900]],most:{"left":9850,"right":9950,"top":5750,"bottom":5950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[20000,11900],[20000,12100],[19800,12100]],most:{"left":9900,"right":10000,"top":5950,"bottom":6050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:19800,y:12100,w:200,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19500,y:12100,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18900,y:12100,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:13900,w:1500,h:200,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:18800,y:14250,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19000,y:14100,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19750,y:14200,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19450,y:14100,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19200,y:14250,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:14100,w:50,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:14100,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19700,y:14250,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19450,y:14150,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19000,y:14150,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18950,y:14100,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:18500,y:14100,w:1300,h:200,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:11800,w:1600,h:900,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18600,y:12700,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18600,y:13200,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:18100,y:13200,radius:300,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[9200,6600],[9350,6600]],"type":"poly","props":{}},endPolygon:{"points":[[9050,6750],[9050,6900]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:17500,y:13700,radius:300,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[8750,7000],[8750,7150]],"type":"poly","props":{}},endPolygon:{"points":[[8750,6700],[8750,6550]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:17150,y:12700,w:1150,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:13500,w:600,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17500,y:13700,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:13200,w:600,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:18100,y:13200,r:200,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:17500,y:14100,radius:225,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[8750,6950],[8750,6825]],"type":"poly","props":{}},endPolygon:{"points":[[8850,7050],[8975,7050]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:17800,y:14100,radius:225,startAngle:-4.71238898038469,endAngle:-3.141592653589793,startPolygon:{"points":[[8900,7150],[8900,7275]],"type":"poly","props":{}},endPolygon:{"points":[[8800,7050],[8675,7050]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:-4.71238898038469,endSliceAngle:-3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:17100,y:14200,w:400,h:200,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17500,y:14100,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:14100,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18500,y:13150,w:500,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17800,y:13650,w:700,h:450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17800,y:14100,r:100,renderType:"circle",inView:false,})
C(1,[5],[1],{h:66,w:600,y:12067,x:19200,
        boundPlayer: true,
        restAngles: [2.0943951023931953, 5.235987755982988],
        toRest: true,
        homingRotateSpeed: 0.10465116279069767,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 19500,
        pivotY: 12100
    });
    C(0,[],[0],{x:19500,y:12100,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:12017,x:18800,
        boundPlayer: true,
        restAngles: [1.3962634015954636, 4.537856055185257],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19050,
        pivotY: 12050
    });
    C(0,[],[0],{x:19050,y:12050,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13117,x:18300,
        boundPlayer: true,
        restAngles: [2.6179938779914944, 5.759586531581288],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 18550,
        pivotY: 13150
    });
    C(0,[],[0],{x:18550,y:13150,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13667,x:17200,
        boundPlayer: false,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17500,
        pivotY: 13700
    });
    C(0,[],[0],{x:17500,y:13700,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13167,x:17450,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17750,
        pivotY: 13200
    });
    C(0,[],[0],{x:17750,y:13200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13167,x:17400,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17700,
        pivotY: 13200
    });
    C(0,[],[0],{x:17700,y:13200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13167,x:17350,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17650,
        pivotY: 13200
    });
    C(0,[],[0],{x:17650,y:13200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:12617,x:19050,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19300,
        pivotY: 12650
    });
    C(0,[],[0],{x:19300,y:12650,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:12617,x:19350,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19600,
        pivotY: 12650
    });
    C(0,[],[0],{x:19600,y:12650,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:12917,x:19050,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19300,
        pivotY: 12950
    });
    C(0,[],[0],{x:19300,y:12950,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:12917,x:19350,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19600,
        pivotY: 12950
    });
    C(0,[],[0],{x:19600,y:12950,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13217,x:19050,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19300,
        pivotY: 13250
    });
    C(0,[],[0],{x:19300,y:13250,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13217,x:19350,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19600,
        pivotY: 13250
    });
    C(0,[],[0],{x:19600,y:13250,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13517,x:19050,
        boundPlayer: true,
        restAngles: [0.7853981633974483, 3.9269908169872414],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19300,
        pivotY: 13550
    });
    C(0,[],[0],{x:19300,y:13550,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13517,x:19350,
        boundPlayer: true,
        restAngles: [-0.7853981633974483, 2.356194490192345],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 19600,
        pivotY: 13550
    });
    C(0,[],[0],{x:19600,y:13550,r:50,cr:(e)=>{
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
    }});C(1,[1],[1],{type:[1,[1],[1]],x:19300,y:13250,w:300,h:300,angle:45,rotateSpeed:0,pivotX:19450,pivotY:13400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19300,y:12650,w:300,h:300,angle:45,rotateSpeed:0,pivotX:19450,pivotY:12800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:5.975000000000087,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[],[20],{h:200,w:1300,y:14100,x:18500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.23;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:11450,y:10200,w:150,h:200,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:11600,y:10300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11500,y:10300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10400,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10600,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10800,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:11000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:11200,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11350,y:11250,w:100,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11950,y:10300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:12300,y:10300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[12800,9800],[12589.918693812442,9888.167787843871],[12039.918693812442,9942.658477444273],[11360.081306187558,9942.658477444273],[10810.081306187558,9888.167787843871],[10600,9800],[10810.081306187558,9711.832212156129],[11360.081306187558,9657.341522555727],[12039.918693812442,9657.341522555727],[12589.918693812442,9711.832212156129]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(11700,9800,1100,150,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[0],{type:[1,[],[0]],x:11400,y:9700,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11700,y:9700,w:250,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:11500,y:9750,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11800,y:9750,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11575,y:9625,w:50,h:150,angle:-62.5,rotateSpeed:0,pivotX:11600,pivotY:9700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:39.528470752104745,unSim:5.975000000000087,inView:false,initialRotation:-1.0908307824964558,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11875,y:9625,w:50,h:150,angle:-62.5,rotateSpeed:0,pivotX:11900,pivotY:9700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:39.528470752104745,unSim:5.975000000000087,inView:false,initialRotation:-1.0908307824964558,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,9700],[11450,9700],[11400,9750]],most:{"left":5700,"right":5725,"top":4850,"bottom":4875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,9700],[11750,9700],[11700,9750]],most:{"left":5850,"right":5875,"top":4850,"bottom":4875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11375,y:10250,w:50,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10900,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10700,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10500,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:10300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11400,y:11100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,10250],[11450,10300],[11350,10300]],most:{"left":5675,"right":5725,"top":5125,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,10450],[11450,10500],[11350,10500]],most:{"left":5675,"right":5725,"top":5225,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,10650],[11450,10700],[11350,10700]],most:{"left":5675,"right":5725,"top":5325,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,10850],[11450,10900],[11350,10900]],most:{"left":5675,"right":5725,"top":5425,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,11050],[11450,11100],[11350,11100]],most:{"left":5675,"right":5725,"top":5525,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11500,10250],[11550,10300],[11450,10300]],most:{"left":5725,"right":5775,"top":5125,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11600,10250],[11650,10300],[11550,10300]],most:{"left":5775,"right":5825,"top":5125,"bottom":5150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11950,10250],[12000,10300],[11950,10350],[11900,10300]],most:{"left":5950,"right":6000,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12300,10250],[12350,10300],[12300,10350],[12250,10300]],most:{"left":6125,"right":6175,"top":5125,"bottom":5175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10400],[12750,10450],[12700,10500],[12650,10450]],most:{"left":6325,"right":6375,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,10700],[12750,10750],[12700,10800],[12650,10750]],most:{"left":6325,"right":6375,"top":5350,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12700,11000],[12750,11050],[12700,11100],[12650,11050]],most:{"left":6325,"right":6375,"top":5500,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10050,9800],[10550,10450],[10050,11100]],most:{"left":5025,"right":5275,"top":4900,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10100,9900],[10550,10450],[10100,11000]],most:{"left":5050,"right":5275,"top":4950,"bottom":5500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10150,10000],[10550,10450],[10150,10900]],most:{"left":5075,"right":5275,"top":5000,"bottom":5450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10200,10100],[10550,10450],[10200,10800]],most:{"left":5100,"right":5275,"top":5050,"bottom":5400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10250,10200],[10550,10450],[10250,10700]],most:{"left":5125,"right":5275,"top":5100,"bottom":5350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,10300],[10550,10450],[10300,10600]],most:{"left":5150,"right":5275,"top":5150,"bottom":5300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10350,10350],[10550,10450],[10350,10550]],most:{"left":5175,"right":5275,"top":5175,"bottom":5275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10400,10400],[10550,10450],[10400,10500]],most:{"left":5200,"right":5275,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10550,10500],[10550,11800],[10050,11150]],most:{"left":5025,"right":5275,"top":5250,"bottom":5900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10050,9750],[10550,9750],[10550,10400]],most:{"left":5025,"right":5275,"top":4875,"bottom":5200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10200,y:11850,w:350,h:3200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10200,y:14700,w:8950,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19650,y:14700,w:8950,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:20050,y:5100,w:350,h:9950,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10250,y:9300,w:32000,h:350,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:13350,y:13800,r:802,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12800,y:13250,w:1100,h:1100,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13350,13250],[13900,13800],[13350,14350],[12800,13800]],most:{"left":6400,"right":6950,"top":6625,"bottom":7175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:13350,y:13800,r:350,renderType:"circleR",inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:13350,y:13800,radius:177,startAngle:31.459559767197604,endAngle:33.03035609399247,startPolygon:{"points":[[6763.415767609995,6903.860315781816],[6851.831535219991,6907.720631563631]],"type":"poly","props":{}},endPolygon:{"points":[[6671.1396842181875,6988.415767609995],[6667.279368436374,7076.831535219991]],"type":"poly","props":{}},innerRadius:177,toRotate:true,rotateSpeed:5.235987755982989,renderType:"circle",inView:false,r:354,startSliceAngle:31.459559767197604,endSliceAngle:33.03035609399247,startSliceAngleRotateSpeed:0.04363323129985824,endSliceAngleRotateSpeed:0.04363323129985824,})
C(4,[],[0],{type:[4,[],[0]],x:13350,y:13800,radius:177,startAngle:34.60115242078733,endAngle:36.1719487475822,startPolygon:{"points":[[6586.584232390004,6896.13968421819],[6498.168464780009,6892.2793684363805]],"type":"poly","props":{}},endPolygon:{"points":[[6678.860315781807,6811.584232390004],[6682.720631563615,6723.168464780009]],"type":"poly","props":{}},innerRadius:177,toRotate:true,rotateSpeed:5.235987755982989,renderType:"circle",inView:false,r:354,startSliceAngle:34.60115242078733,endSliceAngle:36.1719487475822,startSliceAngleRotateSpeed:0.04363323129985824,endSliceAngleRotateSpeed:0.04363323129985824,})
C(1,[],[1],{type:[1,[],[1]],x:13900,y:11700,w:1500,h:650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15450,y:11700,w:200,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:15450,y:12150,w:200,h:450,canCollide:true,inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:15450,y:12150,w:500,h:100,angle:-149,rotateSpeed:Math.PI/60,pivotX:15700,pivotY:12200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:5.975000000000087,inView:false,initialRotation:-2.600540585471551,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15400,12600],[15650,12600],[16100,13750],[15400,13750]],most:{"left":7700,"right":8050,"top":6300,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16650,12600],[16900,12600],[16900,13750],[16200,13750]],most:{"left":8100,"right":8450,"top":6300,"bottom":6875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16650,y:12500,w:200,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:16900,y:12450,w:250,h:1350,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:66,w:700,y:13667,x:16700,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 351.55227207344285,
        spokeAngles: [0, Math.PI],
        pivotX: 17050,
        pivotY: 13700
    });
    C(0,[],[0],{x:17050,y:13700,r:50,cr:(e)=>{
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
    }});C(1,[],[16],{type:[1,[],[16]],x:13900,y:11700,w:1500,h:650,snapDistance:10,snapWait:0.5,snapX:true,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:30,snapDistanceY:20,snapDistanceX:20,toSnapX:true,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16550,13800],[17000,14600],[16150,14600]],most:{"left":8075,"right":8500,"top":6900,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16200,13800],[16650,14600],[15800,14600]],most:{"left":7900,"right":8325,"top":6900,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15800,13800],[16250,14600],[15400,14600]],most:{"left":7700,"right":8125,"top":6900,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:15150,y:14200,w:150,h:150,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[19000,10000],[19400,10000],[19150,10250]],most:{"left":9500,"right":9700,"top":5000,"bottom":5125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11350,y:12450,w:600,h:750,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12850,y:12450,w:1400,h:500,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:15000,y:12700,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:14600,y:13100,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[14650,12800],[14640.450849718747,12946.946313073118],[14615.450849718747,13037.764129073788],[14584.549150281253,13037.764129073788],[14559.549150281253,12946.946313073118],[14550,12800],[14559.549150281253,12653.053686926882],[14584.549150281253,12562.235870926212],[14615.450849718747,12562.235870926212],[14640.450849718747,12653.053686926882]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(14600,12800,50,250,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[15050,13025],[15040.450849718747,13186.64094438043],[15015.450849718747,13286.540541981167],[14984.549150281253,13286.540541981167],[14959.549150281253,13186.64094438043],[14950,13025],[14959.549150281253,12863.35905561957],[14984.549150281253,12763.459458018833],[15015.450849718747,12763.459458018833],[15040.450849718747,12863.35905561957]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(15000,13025,50,275,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(0,[],[1],{type:[0,[],[1]],x:15000,y:13350,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:14600,y:12500,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:13950,w:1500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:14000,w:1500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:14350,w:1500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:18500,y:14400,w:1500,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18400,14350],[18500,14350],[18500,14450]],most:{"left":9200,"right":9250,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18500,13950],[18500,14050],[18400,14050]],most:{"left":9200,"right":9250,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18550,13950],[18650,13950],[18600,14050]],most:{"left":9275,"right":9325,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17200,13850],[17650,14300],[17350,14150]],most:{"left":8600,"right":8825,"top":6925,"bottom":7150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17700,14300],[18350,14350],[18000,14400]],most:{"left":8850,"right":9175,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16650,13800],[17100,13800],[17550,14600],[17100,14600]],most:{"left":8325,"right":8775,"top":6900,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17600,y:14500,w:1550,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19650,y:14500,w:350,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19000,y:13650,w:950,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17750,y:13950,w:600,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17300,y:10750,w:900,h:2300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:66,w:600,y:13167,x:17300,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.05813953488372093,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 17600,
        pivotY: 13200
    });
    C(0,[],[0],{x:17600,y:13200,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:500,y:13167,x:17850,
        boundPlayer: true,
        restAngles: [2.356194490192345, 5.497787143782138],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 252.16859439668534,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 13200
    });
    C(0,[],[0],{x:18100,y:13200,r:50,cr:(e)=>{
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
    }});C(1,[],[1],{type:[1,[],[1]],x:15950,y:9700,w:1200,h:1400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17200,y:9700,w:2800,h:250,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:19750,y:10000,w:250,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19800,10450],[20000,10450],[20000,10650]],most:{"left":9900,"right":10000,"top":5225,"bottom":5325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19700,10750],[19890,10950],[19700,11150]],most:{"left":9850,"right":9945,"top":5375,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19700,11550],[19850,11700],[19700,11850]],most:{"left":9850,"right":9925,"top":5775,"bottom":5925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[20000,11150],[20000,11450],[19850,11300]],most:{"left":9925,"right":10000,"top":5575,"bottom":5725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[5],[1],{h:50,w:800,y:11675,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 11700
    });
    C(0,[],[0],{x:20200,y:11700,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:11125,x:19800,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 20200,
        pivotY: 11150
    });
    C(0,[],[0],{x:20200,y:11150,r:50,cr:(e)=>{
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
    }});C(1,[],[1],{type:[1,[],[1]],x:18250,y:10750,w:1400,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:50,w:800,y:11675,x:19100,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 19500,
        pivotY: 11700
    });
    C(0,[],[0],{x:19500,y:11700,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:11125,x:19100,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.06976744186046512,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 19500,
        pivotY: 11150
    });
    C(0,[],[0],{x:19500,y:11150,r:50,cr:(e)=>{
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
    }});C(1,[],[1],{type:[1,[],[1]],x:18250,y:11800,w:500,h:1000,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:50,w:800,y:12425,x:18250,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18650,
        pivotY: 12450
    });
    C(0,[],[0],{x:18650,y:12450,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:12375,x:18300,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18700,
        pivotY: 12400
    });
    C(0,[],[0],{x:18700,y:12400,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:12375,x:18200,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18600,
        pivotY: 12400
    });
    C(0,[],[0],{x:18600,y:12400,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:50,w:800,y:12325,x:18250,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.046511627906976744,
        detectionRadius: 400.7804885470349,
        spokeAngles: [0, Math.PI],
        pivotX: 18650,
        pivotY: 12350
    });
    C(0,[],[0],{x:18650,y:12350,r:50,cr:(e)=>{
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
    }});C(1,[],[1],{type:[1,[],[1]],x:18500,y:13100,w:500,h:600,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:17800,y:13550,w:700,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:66,w:600,y:13717,x:17800,
        boundPlayer: true,
        restAngles: [1.7453292519943295e+98, 1.7453292519943295e+98],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18100,
        pivotY: 13750
    });
    C(0,[],[0],{x:18100,y:13750,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13717,x:18100,
        boundPlayer: true,
        restAngles: [1.7453292519943295e+98, 1.7453292519943295e+98],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18400,
        pivotY: 13750
    });
    C(0,[],[0],{x:18400,y:13750,r:50,cr:(e)=>{
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
    }});C(1,[5],[1],{h:66,w:600,y:13717,x:18400,
        boundPlayer: true,
        restAngles: [1.7453292519943295e+98, 1.7453292519943295e+98],
        toRest: true,
        homingRotateSpeed: 0.13953488372093023,
        detectionRadius: 301.8095425926755,
        spokeAngles: [0, Math.PI],
        pivotX: 18700,
        pivotY: 13750
    });
    C(0,[],[0],{x:18700,y:13750,r:50,cr:(e)=>{
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
    }});C(2,[],[1],{type:[2,[],[1]],points:[[11350,13250],[11950,13250],[11750,13950],[11350,13950]],most:{"left":5675,"right":5975,"top":6625,"bottom":6975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12150,y:13000,w:350,h:1650,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:50,w:600,y:14125,x:11950,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.07751937984496124,
        detectionRadius: 301.0398644698074,
        spokeAngles: [0, Math.PI],
        pivotX: 12250,
        pivotY: 14150
    });
    C(0,[],[0],{x:12250,y:14150,r:50,cr:(e)=>{
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
    }});C(2,[],[1],{type:[2,[],[1]],points:[[12550,13050],[12900,13050],[12550,13400]],most:{"left":6275,"right":6450,"top":6525,"bottom":6700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13700,13000],[14150,13000],[14150,13400]],most:{"left":6850,"right":7075,"top":6500,"bottom":6700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14150,14200],[14150,14600],[13700,14600]],most:{"left":6850,"right":7075,"top":7100,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12550,14250],[13000,14650],[12550,14650]],most:{"left":6275,"right":6500,"top":7125,"bottom":7325},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10600,y:14350,w:1500,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11350,y:13950,w:400,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[5],[1],{h:50,w:600,y:14125,x:11350,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.07751937984496124,
        detectionRadius: 301.0398644698074,
        spokeAngles: [0, Math.PI],
        pivotX: 11650,
        pivotY: 14150
    });
    C(0,[],[0],{x:11650,y:14150,r:50,cr:(e)=>{
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
    }});C(0,[],[1],{type:[0,[],[1]],x:11000,y:13350,r:112,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11200,y:13450,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11150,y:13350,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11300,y:13350,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11250,y:13550,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:10950,y:13400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11000,y:13300,r:70,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:11100,y:14100,r:90,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:10800,y:14000,r:90,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14250,y:14350,w:1100,h:300,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13900,y:11250,w:450,h:400,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:13850,y:11250,w:50,h:1200,canCollide:true,inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:14050,y:12400,r:200,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[29],{type:[1,[],[29]],x:13900,y:11250,w:450,h:400,time:7,inView:false,changeDeathTimerStateTo:true,deathTime:420,drainAmountWhileStandingOn:0,})
C(1,[],[1],{type:[1,[],[1]],x:12900,y:9700,w:2950,h:150,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:14150,y:9900,w:1750,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15900,9900],[15900,10850],[15400,10000]],most:{"left":7700,"right":7950,"top":4950,"bottom":5425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18700,13950],[18800,13950],[18750,14050]],most:{"left":9350,"right":9400,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18850,13950],[18950,13950],[18900,14050]],most:{"left":9425,"right":9475,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19000,13950],[19100,13950],[19050,14050]],most:{"left":9500,"right":9550,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19150,13950],[19250,13950],[19200,14050]],most:{"left":9575,"right":9625,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19300,13950],[19400,13950],[19350,14050]],most:{"left":9650,"right":9700,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19450,13950],[19550,13950],[19500,14050]],most:{"left":9725,"right":9775,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19600,13950],[19700,13950],[19650,14050]],most:{"left":9800,"right":9850,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19750,13950],[19850,13950],[19800,14050]],most:{"left":9875,"right":9925,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19900,13950],[20000,13950],[19950,14050]],most:{"left":9950,"right":10000,"top":6975,"bottom":7025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19950,14350],[20000,14450],[19900,14450]],most:{"left":9950,"right":10000,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19800,14350],[19850,14450],[19750,14450]],most:{"left":9875,"right":9925,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18600,14350],[18650,14450],[18550,14450]],most:{"left":9275,"right":9325,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18750,14350],[18800,14450],[18700,14450]],most:{"left":9350,"right":9400,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18900,14350],[18950,14450],[18850,14450]],most:{"left":9425,"right":9475,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19050,14350],[19100,14450],[19000,14450]],most:{"left":9500,"right":9550,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19200,14350],[19250,14450],[19150,14450]],most:{"left":9575,"right":9625,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19350,14350],[19400,14450],[19300,14450]],most:{"left":9650,"right":9700,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19500,14350],[19550,14450],[19450,14450]],most:{"left":9725,"right":9775,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19650,14350],[19700,14450],[19600,14450]],most:{"left":9800,"right":9850,"top":7175,"bottom":7225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,14000],[17900,14000],[17850,14100]],most:{"left":8900,"right":8950,"top":7000,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17900,14000],[18000,14000],[17950,14100]],most:{"left":8950,"right":9000,"top":7000,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18000,14000],[18100,14000],[18050,14100]],most:{"left":9000,"right":9050,"top":7000,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18100,14000],[18200,14000],[18150,14100]],most:{"left":9050,"right":9100,"top":7000,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18200,14000],[18300,14000],[18250,14100]],most:{"left":9100,"right":9150,"top":7000,"bottom":7050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[29],{type:[1,[],[29]],x:19550,y:10050,w:150,h:150,time:7,inView:false,changeDeathTimerStateTo:true,deathTime:420,drainAmountWhileStandingOn:0,})
C(1,[],[26],{type:[1,[],[26]],x:10600,y:10000,w:700,h:700,musicPath:"https://www.youtube.com/watch?v=R-xDEG8dpZg",volume:1,startTime:0,inView:false,})
C(1,[],[20],{x:3000,y:15400,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].timeTrapTime !== undefined){
                obstacles[i].timeTrapTime = obstacles[i].timeTrapMaxTime;
            }
        }    
    }});C(1,[],[24],{type:[1,[],[24]],x:17150,y:12600,w:1350,h:1700,renderAbove:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:18500,y:12500,w:400,h:500,renderAbove:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(0,[],[24],{type:[0,[],[24]],x:15600,y:18400,r:400,renderType:"circleR",radius:200,inView:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:0,y:15850,w:200,h:200,angle:6,rotateSpeed:Math.PI/60,pivotX:100,pivotY:15950,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},initialRotation:0.10471975511965978,innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:100,y:16100,w:200,h:200,angle:66,rotateSpeed:Math.PI/60,pivotX:200,pivotY:16200,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},initialRotation:1.1519173063162575,innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:350,y:16250,w:200,h:200,angle:126,rotateSpeed:Math.PI/60,pivotX:450,pivotY:16350,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},initialRotation:2.199114857512855,innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[1],[24],{type:[1,[1],[24]],x:0,y:15550,w:200,h:200,angle:-54,rotateSpeed:Math.PI/60,pivotX:100,pivotY:15650,distToPivot:0,canCollide:true,cullingRadius:70.71067811865476,unSim:5.975000000000087,inView:false,ir:0.1,or:0.6,o:1,vc:{"r":255,"g":0,"b":0},initialRotation:-0.9424777960769379,innerR:255,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:255,outerG:0,outerB:0,outerSize:0.36,innerOpacity:0,outerOpacity:1,})
C(1,[],[24],{type:[1,[],[24]],x:12800,y:10800,w:200,h:200,ir:0.1666,or:0.8,o:1,vc:{"r":0,"g":0,"b":0},innerR:0,innerG:0,innerB:0,innerSize:1,outerR:0,outerG:0,outerB:0,outerSize:0.1,innerOpacity:1,outerOpacity:0,})
C(1,[],[11],{type:[1,[],[11]],x:5800,y:17100,w:100,h:100,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:200,y:-100,w:50,h:50,size:30,text:"Good Luck!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:6300,y:-100,w:50,h:50,size:30,text:"Give up.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9450,y:550,w:50,h:50,size:200,text:"2",angle:0,story:false,fontSize:400,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:150,y:4850,w:50,h:50,size:100,text:"3",angle:0,story:false,fontSize:200,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:800,y:12200,w:50,h:50,size:200,text:"4",angle:0,story:false,fontSize:400,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:800,y:12400,w:50,h:50,size:30,text:"C or Y to grapple.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9450,y:750,w:50,h:50,size:30,text:"Stay focused.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9050,y:12850,w:50,h:50,size:100,text:"5",angle:0,story:false,fontSize:200,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9150,y:11300,w:50,h:50,size:30,text:"How's your execution?",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3050,y:15450,w:50,h:50,size:50,text:"6",angle:0,story:false,fontSize:100,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:900,y:18200,w:50,h:50,size:175,text:"7",angle:0,story:false,fontSize:350,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:900,y:18400,w:50,h:50,size:30,text:"Ready?",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3800,y:19500,w:50,h:50,size:35,text:"Feel The Energy!",angle:0,story:false,fontSize:70,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8000,y:17900,w:50,h:50,size:100,text:"8",angle:0,story:false,fontSize:200,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:11775,y:17875,w:50,h:50,size:80,text:"!",angle:0,story:false,fontSize:160,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:11800,y:19950,w:50,h:50,size:25,text:"!",angle:0,story:false,fontSize:50,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16200,y:19700,w:50,h:50,size:150,text:"9",angle:0,story:false,fontSize:300,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16200,y:19850,w:50,h:50,size:30,text:"Brace yourself...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10950,y:10350,w:50,h:50,size:100,text:"10",angle:0,story:false,fontSize:200,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10950,y:10200,w:50,h:50,size:30,text:"Good Luck.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10950,y:10500,w:50,h:50,size:30,text:"You'll need it.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:16150,y:12550,w:50,h:50,size:30,text:"Grapple!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:18150,y:14250,w:50,h:50,size:30,text:"! Get Ready. !",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(0,[],[0],{type:[0,[],[0]],x:6100,y:11600,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:6400,y:11600,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:6100,y:11700,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:6400,y:11700,r:100,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:6100,y:11500,w:300,h:300,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:6000,y:11600,w:500,h:100,toRender:false,})


    mapDimensions.x=20000;
    mapDimensions.y=20000;

    spawnPosition.x=100;
    spawnPosition.y=100;
    shared.respawnPlayer();
    colors.background='#383838'; colors.tile='#0d0d0d';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=0g2OB-y8bW4'
    });

    shared.C(2,[],[0],{x:0,y:0,points:[[8500,840],[8400,900]],cr:()=>{}});

    shared.C(2,[],[0,1],{boundPlayer: true,x:0,y:0,points:[[8200,1400],[8400,1500],[8000,1500]]});

    shared.C(1,[],[11],{x:8150,y:1300,w:100,h:100});

    shared.C(0,[],[5],{x:15750,y:11450,r:50});

    shared.C(1,[],[5],{x:7500,y:1400,w:1,h:100});

    // shared.C(1,[],[15],{cr:()=>{},x:7900,y:1100,w:100,h:100,axisSpeedMultX: 1, axisSpeedMultY: 0});

    shared.C(1,[],[15],{cr:()=>{},x:6750,y:1150,w:500,h:0,axisSpeedMultX: 1, axisSpeedMultY: 0});

    {
        const interpolate = (s,e,t) => {return (1-t) * s + t * e};
        let alpha = 0;
        let collided = false;
        shared.C(1,[],[11],{x:8400,y:300,w:300,h:200,cr:(o)=>{
            ctx.globalAlpha = alpha;
            ctx.fillStyle = 'rgba(140,140,140,.25)';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.rect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        },ef:()=>{collided = true;}, sf:()=>{
            if(collided === true) alpha = interpolate(alpha, 1, 0.1);
            else alpha = interpolate(alpha, 0, 0.1);
            collided = false;
        }})
    }

    C(0,[],[27],{x:100,y:100,r:0.0001,changeShipStateTo:false, initialShipAngle:0, shipTurnSpeed: 0,cr:()=>{}});
});