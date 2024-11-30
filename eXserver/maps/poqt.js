window.loadMap((shared)=>{
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, generateTopLeftCoordinates, input} = shared;
    let selfId = shared.selfId;
    let counter = 5000;

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

    shared.C(1,[],[0],{x:22400,y:0,w:4900,h:20000});
    shared.C(1,[],[0],{x:50000,y:0,w:5000,h:20000});
    shared.C(1,[],[5],{x:39600,y:0,w:300,h:300,cr:()=>{}});
    shared.C(1,[],[5],{x:36900,y:0,w:300,h:300,cr:()=>{}});
    shared.C(1,[],[11],{x:44750,y:18100,w:300,h:1000});

    var xv5001 = 0;
    var yv5001 = 0;
    var shootDirectionIndex5001 = 0;
    var timer5001 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:18300,x:71100,sf:(e)=>{
    e.pos.y += yv5001;
    e.pos.x += xv5001;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5001 = xv5001 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5001 = yv5001 * -1;
    }

    timer5001--;
    if(timer5001 < 0){
        timer5001 = 106.66666666666667;

        shootDirectionIndex5001++;
        const shootDirections = [0];
        if(shootDirectionIndex5001 >= shootDirections.length){
            shootDirectionIndex5001 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5001];

        counter++;
        /*scoped using let*/
        let xv5001 = Math.cos(dir) * 6.666666666666667;
        let yv5001 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5001;
        e.pos.x += xv5001;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5002 = 0;
    var yv5002 = 0;
    var shootDirectionIndex5002 = 0;
    var timer5002 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:18600,x:71100,sf:(e)=>{
    e.pos.y += yv5002;
    e.pos.x += xv5002;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5002 = xv5002 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5002 = yv5002 * -1;
    }

    timer5002--;
    if(timer5002 < 0){
        timer5002 = 106.66666666666667;

        shootDirectionIndex5002++;
        const shootDirections = [0];
        if(shootDirectionIndex5002 >= shootDirections.length){
            shootDirectionIndex5002 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5002];

        counter++;
        /*scoped using let*/
        let xv5002 = Math.cos(dir) * 6.666666666666667;
        let yv5002 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5002;
        e.pos.x += xv5002;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5003 = 0;
    var yv5003 = 0;
    var shootDirectionIndex5003 = 0;
    var timer5003 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:18900,x:71100,sf:(e)=>{
    e.pos.y += yv5003;
    e.pos.x += xv5003;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5003 = xv5003 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5003 = yv5003 * -1;
    }

    timer5003--;
    if(timer5003 < 0){
        timer5003 = 106.66666666666667;

        shootDirectionIndex5003++;
        const shootDirections = [0];
        if(shootDirectionIndex5003 >= shootDirections.length){
            shootDirectionIndex5003 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5003];

        counter++;
        /*scoped using let*/
        let xv5003 = Math.cos(dir) * 6.666666666666667;
        let yv5003 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5003;
        e.pos.x += xv5003;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5004 = 0;
    var yv5004 = 0;
    var shootDirectionIndex5004 = 0;
    var timer5004 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:19200,x:72200,sf:(e)=>{
    e.pos.y += yv5004;
    e.pos.x += xv5004;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5004 = xv5004 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5004 = yv5004 * -1;
    }

    timer5004--;
    if(timer5004 < 0){
        timer5004 = 106.66666666666667;

        shootDirectionIndex5004++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5004 >= shootDirections.length){
            shootDirectionIndex5004 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5004];

        counter++;
        /*scoped using let*/
        let xv5004 = Math.cos(dir) * 6.666666666666667;
        let yv5004 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5004;
        e.pos.x += xv5004;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5005 = 0;
    var yv5005 = 0;
    var shootDirectionIndex5005 = 0;
    var timer5005 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:19500,x:72200,sf:(e)=>{
    e.pos.y += yv5005;
    e.pos.x += xv5005;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5005 = xv5005 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5005 = yv5005 * -1;
    }

    timer5005--;
    if(timer5005 < 0){
        timer5005 = 106.66666666666667;

        shootDirectionIndex5005++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5005 >= shootDirections.length){
            shootDirectionIndex5005 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5005];

        counter++;
        /*scoped using let*/
        let xv5005 = Math.cos(dir) * 6.666666666666667;
        let yv5005 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5005;
        e.pos.x += xv5005;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5006 = 0;
    var yv5006 = 0;
    var shootDirectionIndex5006 = 0;
    var timer5006 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:19800,x:72200,sf:(e)=>{
    e.pos.y += yv5006;
    e.pos.x += xv5006;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5006 = xv5006 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
        yv5006 = yv5006 * -1;
    }

    timer5006--;
    if(timer5006 < 0){
        timer5006 = 106.66666666666667;

        shootDirectionIndex5006++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5006 >= shootDirections.length){
            shootDirectionIndex5006 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5006];

        counter++;
        /*scoped using let*/
        let xv5006 = Math.cos(dir) * 6.666666666666667;
        let yv5006 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5006;
        e.pos.x += xv5006;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5007 = 0;
    var yv5007 = 0;
    var shootDirectionIndex5007 = 0;
    var timer5007 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:15900,x:71100,sf:(e)=>{
    e.pos.y += yv5007;
    e.pos.x += xv5007;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5007 = xv5007 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
        yv5007 = yv5007 * -1;
    }

    timer5007--;
    if(timer5007 < 0){
        timer5007 = 106.66666666666667;

        shootDirectionIndex5007++;
        const shootDirections = [0.7853981633974483];
        if(shootDirectionIndex5007 >= shootDirections.length){
            shootDirectionIndex5007 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5007];

        counter++;
        /*scoped using let*/
        let xv5007 = Math.cos(dir) * 6.666666666666667;
        let yv5007 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5007;
        e.pos.x += xv5007;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5008 = 0;
    var yv5008 = 0;
    var shootDirectionIndex5008 = 0;
    var timer5008 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:16300,x:71100,sf:(e)=>{
    e.pos.y += yv5008;
    e.pos.x += xv5008;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5008 = xv5008 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
        yv5008 = yv5008 * -1;
    }

    timer5008--;
    if(timer5008 < 0){
        timer5008 = 106.66666666666667;

        shootDirectionIndex5008++;
        const shootDirections = [0];
        if(shootDirectionIndex5008 >= shootDirections.length){
            shootDirectionIndex5008 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5008];

        counter++;
        /*scoped using let*/
        let xv5008 = Math.cos(dir) * 6.666666666666667;
        let yv5008 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5008;
        e.pos.x += xv5008;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5009 = 0;
    var yv5009 = 0;
    var shootDirectionIndex5009 = 0;
    var timer5009 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:16700,x:71100,sf:(e)=>{
    e.pos.y += yv5009;
    e.pos.x += xv5009;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5009 = xv5009 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
        yv5009 = yv5009 * -1;
    }

    timer5009--;
    if(timer5009 < 0){
        timer5009 = 106.66666666666667;

        shootDirectionIndex5009++;
        const shootDirections = [-0.7853981633974483];
        if(shootDirectionIndex5009 >= shootDirections.length){
            shootDirectionIndex5009 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5009];

        counter++;
        /*scoped using let*/
        let xv5009 = Math.cos(dir) * 6.666666666666667;
        let yv5009 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5009;
        e.pos.x += xv5009;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 15500 || e.pos.y + e.sat.r > 16800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5010 = 0;
    var yv5010 = 0;
    var shootDirectionIndex5010 = 0;
    var timer5010 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:13050,x:68850,sf:(e)=>{
    e.pos.y += yv5010;
    e.pos.x += xv5010;
    if ((e.pos.x - e.sat.r) < 68800 || e.pos.x + e.sat.r > 68900) {
        xv5010 = xv5010 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 19900) {
        yv5010 = yv5010 * -1;
    }

    timer5010--;
    if(timer5010 < 0){
        timer5010 = 59.2;

        shootDirectionIndex5010++;
        const shootDirections = [1.5707963267948966];
        if(shootDirectionIndex5010 >= shootDirections.length){
            shootDirectionIndex5010 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5010];

        counter++;
        /*scoped using let*/
        let xv5010 = Math.cos(dir) * 6.666666666666667;
        let yv5010 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5010;
        e.pos.x += xv5010;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 68800 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5011 = 0;
    var yv5011 = 0;
    var shootDirectionIndex5011 = 0;
    var timer5011 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:13050,x:67650,sf:(e)=>{
    e.pos.y += yv5011;
    e.pos.x += xv5011;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 67700) {
        xv5011 = xv5011 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 19900) {
        yv5011 = yv5011 * -1;
    }

    timer5011--;
    if(timer5011 < 0){
        timer5011 = 59.2;

        shootDirectionIndex5011++;
        const shootDirections = [1.5707963267948966];
        if(shootDirectionIndex5011 >= shootDirections.length){
            shootDirectionIndex5011 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5011];

        counter++;
        /*scoped using let*/
        let xv5011 = Math.cos(dir) * 6.666666666666667;
        let yv5011 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5011;
        e.pos.x += xv5011;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 67700 || (e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5012 = 0;
    var yv5012 = 0;
    var shootDirectionIndex5012 = 0;
    var timer5012 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:12800,x:74500,sf:(e)=>{
    e.pos.y += yv5012;
    e.pos.x += xv5012;
    if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 75000) {
        xv5012 = xv5012 * -1;
    }
    if ((e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13300) {
        yv5012 = yv5012 * -1;
    }

    timer5012--;
    if(timer5012 < 0){
        timer5012 = 106.66666666666667;

        shootDirectionIndex5012++;
        const shootDirections = [0.39269908169872414];
        if(shootDirectionIndex5012 >= shootDirections.length){
            shootDirectionIndex5012 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5012];

        counter++;
        /*scoped using let*/
        let xv5012 = Math.cos(dir) * 4.363636363636363;
        let yv5012 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5012;
        e.pos.x += xv5012;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 75000 || (e.pos.y - e.sat.r) < 12700 || e.pos.y + e.sat.r > 13300) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5013 = 0;
    var yv5013 = 0;
    var shootDirectionIndex5013 = 0;
    var timer5013 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:13200,x:74900,sf:(e)=>{
    e.pos.y += yv5013;
    e.pos.x += xv5013;
    if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 75000) {
        xv5013 = xv5013 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13100 || e.pos.y + e.sat.r > 13700) {
        yv5013 = yv5013 * -1;
    }

    timer5013--;
    if(timer5013 < 0){
        timer5013 = 106.66666666666667;

        shootDirectionIndex5013++;
        const shootDirections = [2.748893571891069];
        if(shootDirectionIndex5013 >= shootDirections.length){
            shootDirectionIndex5013 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5013];

        counter++;
        /*scoped using let*/
        let xv5013 = Math.cos(dir) * 4.363636363636363;
        let yv5013 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5013;
        e.pos.x += xv5013;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 75000 || (e.pos.y - e.sat.r) < 13100 || e.pos.y + e.sat.r > 13700) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5014 = 0;
    var yv5014 = 0;
    var shootDirectionIndex5014 = 0;
    var timer5014 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:14200,x:74500,sf:(e)=>{
    e.pos.y += yv5014;
    e.pos.x += xv5014;
    if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 74600) {
        xv5014 = xv5014 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 14300) {
        yv5014 = yv5014 * -1;
    }

    timer5014--;
    if(timer5014 < 0){
        timer5014 = 106.66666666666667;

        shootDirectionIndex5014++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5014 >= shootDirections.length){
            shootDirectionIndex5014 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5014];

        counter++;
        /*scoped using let*/
        let xv5014 = Math.cos(dir) * 4.363636363636363;
        let yv5014 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5014;
        e.pos.x += xv5014;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 74600 || (e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 14300) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5015 = 0;
    var yv5015 = 0;
    var shootDirectionIndex5015 = 0;
    var timer5015 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:14200,x:74900,sf:(e)=>{
    e.pos.y += yv5015;
    e.pos.x += xv5015;
    if ((e.pos.x - e.sat.r) < 74800 || e.pos.x + e.sat.r > 75000) {
        xv5015 = xv5015 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 14300) {
        yv5015 = yv5015 * -1;
    }

    timer5015--;
    if(timer5015 < 0){
        timer5015 = 106.66666666666667;

        shootDirectionIndex5015++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5015 >= shootDirections.length){
            shootDirectionIndex5015 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5015];

        counter++;
        /*scoped using let*/
        let xv5015 = Math.cos(dir) * 4.363636363636363;
        let yv5015 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5015;
        e.pos.x += xv5015;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74800 || e.pos.x + e.sat.r > 75000 || (e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 14300) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5016 = 0;
    var yv5016 = 0;
    var shootDirectionIndex5016 = 0;
    var timer5016 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:14950,x:74300,sf:(e)=>{
    e.pos.y += yv5016;
    e.pos.x += xv5016;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050) {
        xv5016 = xv5016 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14850 || e.pos.y + e.sat.r > 15050) {
        yv5016 = yv5016 * -1;
    }

    timer5016--;
    if(timer5016 < 0){
        timer5016 = 106.66666666666667;

        shootDirectionIndex5016++;
        const shootDirections = [0];
        if(shootDirectionIndex5016 >= shootDirections.length){
            shootDirectionIndex5016 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5016];

        counter++;
        /*scoped using let*/
        let xv5016 = Math.cos(dir) * 4.363636363636363;
        let yv5016 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5016;
        e.pos.x += xv5016;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050 || (e.pos.y - e.sat.r) < 14850 || e.pos.y + e.sat.r > 15050) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5017 = 0;
    var yv5017 = 0;
    var shootDirectionIndex5017 = 0;
    var timer5017 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:15150,x:74300,sf:(e)=>{
    e.pos.y += yv5017;
    e.pos.x += xv5017;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050) {
        xv5017 = xv5017 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15050 || e.pos.y + e.sat.r > 15250) {
        yv5017 = yv5017 * -1;
    }

    timer5017--;
    if(timer5017 < 0){
        timer5017 = 106.66666666666667;

        shootDirectionIndex5017++;
        const shootDirections = [0];
        if(shootDirectionIndex5017 >= shootDirections.length){
            shootDirectionIndex5017 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5017];

        counter++;
        /*scoped using let*/
        let xv5017 = Math.cos(dir) * 4.363636363636363;
        let yv5017 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5017;
        e.pos.x += xv5017;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050 || (e.pos.y - e.sat.r) < 15050 || e.pos.y + e.sat.r > 15250) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5018 = 0;
    var yv5018 = 0;
    var shootDirectionIndex5018 = 0;
    var timer5018 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:15350,x:74300,sf:(e)=>{
    e.pos.y += yv5018;
    e.pos.x += xv5018;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050) {
        xv5018 = xv5018 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15250 || e.pos.y + e.sat.r > 15450) {
        yv5018 = yv5018 * -1;
    }

    timer5018--;
    if(timer5018 < 0){
        timer5018 = 106.66666666666667;

        shootDirectionIndex5018++;
        const shootDirections = [0];
        if(shootDirectionIndex5018 >= shootDirections.length){
            shootDirectionIndex5018 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5018];

        counter++;
        /*scoped using let*/
        let xv5018 = Math.cos(dir) * 4.363636363636363;
        let yv5018 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5018;
        e.pos.x += xv5018;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75050 || (e.pos.y - e.sat.r) < 15250 || e.pos.y + e.sat.r > 15450) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5019 = 0;
    var yv5019 = 0;
    var shootDirectionIndex5019 = 0;
    var timer5019 = 10.000000000003089;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:16000,x:74300,sf:(e)=>{
    e.pos.y += yv5019;
    e.pos.x += xv5019;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75100) {
        xv5019 = xv5019 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15900 || e.pos.y + e.sat.r > 16100) {
        yv5019 = yv5019 * -1;
    }

    timer5019--;
    if(timer5019 < 0){
        timer5019 = 160;

        shootDirectionIndex5019++;
        const shootDirections = [0];
        if(shootDirectionIndex5019 >= shootDirections.length){
            shootDirectionIndex5019 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5019];

        counter++;
        /*scoped using let*/
        let xv5019 = Math.cos(dir) * 4.363636363636363;
        let yv5019 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5019;
        e.pos.x += xv5019;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75100 || (e.pos.y - e.sat.r) < 15900 || e.pos.y + e.sat.r > 16100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5020 = 0;
    var yv5020 = 0;
    var shootDirectionIndex5020 = 0;
    var timer5020 = 10.000000000003089;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:16000,x:75100,sf:(e)=>{
    e.pos.y += yv5020;
    e.pos.x += xv5020;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75200) {
        xv5020 = xv5020 * -1;
    }
    if ((e.pos.y - e.sat.r) < 15900 || e.pos.y + e.sat.r > 16100) {
        yv5020 = yv5020 * -1;
    }

    timer5020--;
    if(timer5020 < 0){
        timer5020 = 160;

        shootDirectionIndex5020++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5020 >= shootDirections.length){
            shootDirectionIndex5020 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5020];

        counter++;
        /*scoped using let*/
        let xv5020 = Math.cos(dir) * 4.363636363636363;
        let yv5020 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5020;
        e.pos.x += xv5020;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75200 || (e.pos.y - e.sat.r) < 15900 || e.pos.y + e.sat.r > 16100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5021 = 0;
    var yv5021 = 0;
    var shootDirectionIndex5021 = 0;
    var timer5021 = 17.99999999999995;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:16600,x:74450,sf:(e)=>{
    e.pos.y += yv5021;
    e.pos.x += xv5021;
    if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75250) {
        xv5021 = xv5021 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16500 || e.pos.y + e.sat.r > 18600) {
        yv5021 = yv5021 * -1;
    }

    timer5021--;
    if(timer5021 < 0){
        timer5021 = 18.666666666666668;

        shootDirectionIndex5021++;
        const shootDirections = [1.5009831567151233];
        if(shootDirectionIndex5021 >= shootDirections.length){
            shootDirectionIndex5021 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5021];

        counter++;
        /*scoped using let*/
        let xv5021 = Math.cos(dir) * 4.363636363636363;
        let yv5021 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:24,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5021;
        e.pos.x += xv5021;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74200 || e.pos.x + e.sat.r > 75250 || (e.pos.y - e.sat.r) < 16500 || e.pos.y + e.sat.r > 18600) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5022 = 0;
    var yv5022 = 0;
    var shootDirectionIndex5022 = 0;
    var timer5022 = 17.99999999999995;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:16600,x:74950,sf:(e)=>{
    e.pos.y += yv5022;
    e.pos.x += xv5022;
    if ((e.pos.x - e.sat.r) < 74150 || e.pos.x + e.sat.r > 75200) {
        xv5022 = xv5022 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16500 || e.pos.y + e.sat.r > 18600) {
        yv5022 = yv5022 * -1;
    }

    timer5022--;
    if(timer5022 < 0){
        timer5022 = 18.666666666666668;

        shootDirectionIndex5022++;
        const shootDirections = [1.6406094968746698];
        if(shootDirectionIndex5022 >= shootDirections.length){
            shootDirectionIndex5022 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5022];

        counter++;
        /*scoped using let*/
        let xv5022 = Math.cos(dir) * 4.363636363636363;
        let yv5022 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:24,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5022;
        e.pos.x += xv5022;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74150 || e.pos.x + e.sat.r > 75200 || (e.pos.y - e.sat.r) < 16500 || e.pos.y + e.sat.r > 18600) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5023 = 0;
    var yv5023 = 0;
    var shootDirectionIndex5023 = 0;
    var timer5023 = 36.66666666667003;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:19800,x:74500,sf:(e)=>{
    e.pos.y += yv5023;
    e.pos.x += xv5023;
    if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 74600) {
        xv5023 = xv5023 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
        yv5023 = yv5023 * -1;
    }

    timer5023--;
    if(timer5023 < 0){
        timer5023 = 186.66666666666666;

        shootDirectionIndex5023++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5023 >= shootDirections.length){
            shootDirectionIndex5023 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5023];

        counter++;
        /*scoped using let*/
        let xv5023 = Math.cos(dir) * 4.363636363636363;
        let yv5023 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5023;
        e.pos.x += xv5023;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74400 || e.pos.x + e.sat.r > 74600 || (e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5024 = 0;
    var yv5024 = 0;
    var shootDirectionIndex5024 = 0;
    var timer5024 = 36.66666666667003;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:19800,x:74900,sf:(e)=>{
    e.pos.y += yv5024;
    e.pos.x += xv5024;
    if ((e.pos.x - e.sat.r) < 74800 || e.pos.x + e.sat.r > 75000) {
        xv5024 = xv5024 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
        yv5024 = yv5024 * -1;
    }

    timer5024--;
    if(timer5024 < 0){
        timer5024 = 186.66666666666666;

        shootDirectionIndex5024++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5024 >= shootDirections.length){
            shootDirectionIndex5024 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5024];

        counter++;
        /*scoped using let*/
        let xv5024 = Math.cos(dir) * 4.363636363636363;
        let yv5024 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5024;
        e.pos.x += xv5024;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74800 || e.pos.x + e.sat.r > 75000 || (e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5025 = 0;
    var yv5025 = 0;
    var shootDirectionIndex5025 = 0;
    var timer5025 = 130.00000000000318;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:19800,x:74700,sf:(e)=>{
    e.pos.y += yv5025;
    e.pos.x += xv5025;
    if ((e.pos.x - e.sat.r) < 74600 || e.pos.x + e.sat.r > 74800) {
        xv5025 = xv5025 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
        yv5025 = yv5025 * -1;
    }

    timer5025--;
    if(timer5025 < 0){
        timer5025 = 186.66666666666666;

        shootDirectionIndex5025++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5025 >= shootDirections.length){
            shootDirectionIndex5025 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5025];

        counter++;
        /*scoped using let*/
        let xv5025 = Math.cos(dir) * 4.363636363636363;
        let yv5025 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5025;
        e.pos.x += xv5025;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 74600 || e.pos.x + e.sat.r > 74800 || (e.pos.y - e.sat.r) < 18900 || e.pos.y + e.sat.r > 19900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5026 = 0;
    var yv5026 = 0;
    var shootDirectionIndex5026 = 0;
    var timer5026 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:13050,x:67650,sf:(e)=>{
    e.pos.y += yv5026;
    e.pos.x += xv5026;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5026 = xv5026 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 14700) {
        yv5026 = yv5026 * -1;
    }

    timer5026--;
    if(timer5026 < 0){
        timer5026 = 59.2;

        shootDirectionIndex5026++;
        const shootDirections = [1.0471975511965976];
        if(shootDirectionIndex5026 >= shootDirections.length){
            shootDirectionIndex5026 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5026];

        counter++;
        /*scoped using let*/
        let xv5026 = Math.cos(dir) * 6.666666666666667;
        let yv5026 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5026;
        e.pos.x += xv5026;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 14700) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5027 = 0;
    var yv5027 = 0;
    var shootDirectionIndex5027 = 0;
    var timer5027 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:14750,x:68850,sf:(e)=>{
    e.pos.y += yv5027;
    e.pos.x += xv5027;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5027 = xv5027 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14700 || e.pos.y + e.sat.r > 16400) {
        yv5027 = yv5027 * -1;
    }

    timer5027--;
    if(timer5027 < 0){
        timer5027 = 59.2;

        shootDirectionIndex5027++;
        const shootDirections = [2.0943951023931953];
        if(shootDirectionIndex5027 >= shootDirections.length){
            shootDirectionIndex5027 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5027];

        counter++;
        /*scoped using let*/
        let xv5027 = Math.cos(dir) * 6.666666666666667;
        let yv5027 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5027;
        e.pos.x += xv5027;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 14700 || e.pos.y + e.sat.r > 16400) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5028 = 0;
    var yv5028 = 0;
    var shootDirectionIndex5028 = 0;
    var timer5028 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:16450,x:67650,sf:(e)=>{
    e.pos.y += yv5028;
    e.pos.x += xv5028;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5028 = xv5028 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16400 || e.pos.y + e.sat.r > 18100) {
        yv5028 = yv5028 * -1;
    }

    timer5028--;
    if(timer5028 < 0){
        timer5028 = 59.2;

        shootDirectionIndex5028++;
        const shootDirections = [1.0471975511965976];
        if(shootDirectionIndex5028 >= shootDirections.length){
            shootDirectionIndex5028 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5028];

        counter++;
        /*scoped using let*/
        let xv5028 = Math.cos(dir) * 6.666666666666667;
        let yv5028 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5028;
        e.pos.x += xv5028;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 16400 || e.pos.y + e.sat.r > 18100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5029 = 0;
    var yv5029 = 0;
    var shootDirectionIndex5029 = 0;
    var timer5029 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:18150,x:68850,sf:(e)=>{
    e.pos.y += yv5029;
    e.pos.x += xv5029;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5029 = xv5029 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19800) {
        yv5029 = yv5029 * -1;
    }

    timer5029--;
    if(timer5029 < 0){
        timer5029 = 59.2;

        shootDirectionIndex5029++;
        const shootDirections = [2.0943951023931953];
        if(shootDirectionIndex5029 >= shootDirections.length){
            shootDirectionIndex5029 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5029];

        counter++;
        /*scoped using let*/
        let xv5029 = Math.cos(dir) * 6.666666666666667;
        let yv5029 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5029;
        e.pos.x += xv5029;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5030 = 0;
    var yv5030 = 0;
    var shootDirectionIndex5030 = 0;
    var timer5030 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:13050,x:68850,sf:(e)=>{
    e.pos.y += yv5030;
    e.pos.x += xv5030;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5030 = xv5030 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 14700) {
        yv5030 = yv5030 * -1;
    }

    timer5030--;
    if(timer5030 < 0){
        timer5030 = 59.2;

        shootDirectionIndex5030++;
        const shootDirections = [2.0943951023931953];
        if(shootDirectionIndex5030 >= shootDirections.length){
            shootDirectionIndex5030 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5030];

        counter++;
        /*scoped using let*/
        let xv5030 = Math.cos(dir) * 6.666666666666667;
        let yv5030 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5030;
        e.pos.x += xv5030;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 13000 || e.pos.y + e.sat.r > 14700) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5031 = 0;
    var yv5031 = 0;
    var shootDirectionIndex5031 = 0;
    var timer5031 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:14750,x:67650,sf:(e)=>{
    e.pos.y += yv5031;
    e.pos.x += xv5031;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5031 = xv5031 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14700 || e.pos.y + e.sat.r > 16400) {
        yv5031 = yv5031 * -1;
    }

    timer5031--;
    if(timer5031 < 0){
        timer5031 = 59.2;

        shootDirectionIndex5031++;
        const shootDirections = [1.0471975511965976];
        if(shootDirectionIndex5031 >= shootDirections.length){
            shootDirectionIndex5031 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5031];

        counter++;
        /*scoped using let*/
        let xv5031 = Math.cos(dir) * 6.666666666666667;
        let yv5031 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5031;
        e.pos.x += xv5031;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 14700 || e.pos.y + e.sat.r > 16400) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5032 = 0;
    var yv5032 = 0;
    var shootDirectionIndex5032 = 0;
    var timer5032 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:16450,x:68850,sf:(e)=>{
    e.pos.y += yv5032;
    e.pos.x += xv5032;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5032 = xv5032 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16400 || e.pos.y + e.sat.r > 18100) {
        yv5032 = yv5032 * -1;
    }

    timer5032--;
    if(timer5032 < 0){
        timer5032 = 59.2;

        shootDirectionIndex5032++;
        const shootDirections = [2.0943951023931953];
        if(shootDirectionIndex5032 >= shootDirections.length){
            shootDirectionIndex5032 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5032];

        counter++;
        /*scoped using let*/
        let xv5032 = Math.cos(dir) * 6.666666666666667;
        let yv5032 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5032;
        e.pos.x += xv5032;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 16400 || e.pos.y + e.sat.r > 18100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5033 = 0;
    var yv5033 = 0;
    var shootDirectionIndex5033 = 0;
    var timer5033 = 32.40000000000095;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:18150,x:67650,sf:(e)=>{
    e.pos.y += yv5033;
    e.pos.x += xv5033;
    if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900) {
        xv5033 = xv5033 * -1;
    }
    if ((e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19800) {
        yv5033 = yv5033 * -1;
    }

    timer5033--;
    if(timer5033 < 0){
        timer5033 = 59.2;

        shootDirectionIndex5033++;
        const shootDirections = [1.0471975511965976];
        if(shootDirectionIndex5033 >= shootDirections.length){
            shootDirectionIndex5033 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5033];

        counter++;
        /*scoped using let*/
        let xv5033 = Math.cos(dir) * 6.666666666666667;
        let yv5033 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:48,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5033;
        e.pos.x += xv5033;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 67600 || e.pos.x + e.sat.r > 68900 || (e.pos.y - e.sat.r) < 18100 || e.pos.y + e.sat.r > 19800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5034 = 0;
    var yv5034 = 0;
    var shootDirectionIndex5034 = 0;
    var timer5034 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:13000,x:71100,sf:(e)=>{
    e.pos.y += yv5034;
    e.pos.x += xv5034;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5034 = xv5034 * -1;
    }
    if ((e.pos.y - e.sat.r) < 12900 || e.pos.y + e.sat.r > 14200) {
        yv5034 = yv5034 * -1;
    }

    timer5034--;
    if(timer5034 < 0){
        timer5034 = 106.66666666666667;

        shootDirectionIndex5034++;
        const shootDirections = [0.7853981633974483];
        if(shootDirectionIndex5034 >= shootDirections.length){
            shootDirectionIndex5034 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5034];

        counter++;
        /*scoped using let*/
        let xv5034 = Math.cos(dir) * 6.666666666666667;
        let yv5034 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5034;
        e.pos.x += xv5034;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 12900 || e.pos.y + e.sat.r > 14200) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5035 = 0;
    var yv5035 = 0;
    var shootDirectionIndex5035 = 0;
    var timer5035 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:13400,x:71100,sf:(e)=>{
    e.pos.y += yv5035;
    e.pos.x += xv5035;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5035 = xv5035 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13300 || e.pos.y + e.sat.r > 14600) {
        yv5035 = yv5035 * -1;
    }

    timer5035--;
    if(timer5035 < 0){
        timer5035 = 106.66666666666667;

        shootDirectionIndex5035++;
        const shootDirections = [0.7853981633974483];
        if(shootDirectionIndex5035 >= shootDirections.length){
            shootDirectionIndex5035 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5035];

        counter++;
        /*scoped using let*/
        let xv5035 = Math.cos(dir) * 6.666666666666667;
        let yv5035 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5035;
        e.pos.x += xv5035;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 13300 || e.pos.y + e.sat.r > 14600) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5036 = 0;
    var yv5036 = 0;
    var shootDirectionIndex5036 = 0;
    var timer5036 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:13800,x:71100,sf:(e)=>{
    e.pos.y += yv5036;
    e.pos.x += xv5036;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5036 = xv5036 * -1;
    }
    if ((e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 15000) {
        yv5036 = yv5036 * -1;
    }

    timer5036--;
    if(timer5036 < 0){
        timer5036 = 106.66666666666667;

        shootDirectionIndex5036++;
        const shootDirections = [0.7853981633974483];
        if(shootDirectionIndex5036 >= shootDirections.length){
            shootDirectionIndex5036 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5036];

        counter++;
        /*scoped using let*/
        let xv5036 = Math.cos(dir) * 6.666666666666667;
        let yv5036 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5036;
        e.pos.x += xv5036;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 13700 || e.pos.y + e.sat.r > 15000) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5037 = 0;
    var yv5037 = 0;
    var shootDirectionIndex5037 = 0;
    var timer5037 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:14200,x:72200,sf:(e)=>{
    e.pos.y += yv5037;
    e.pos.x += xv5037;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5037 = xv5037 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14100 || e.pos.y + e.sat.r > 15400) {
        yv5037 = yv5037 * -1;
    }

    timer5037--;
    if(timer5037 < 0){
        timer5037 = 106.66666666666667;

        shootDirectionIndex5037++;
        const shootDirections = [2.356194490192345];
        if(shootDirectionIndex5037 >= shootDirections.length){
            shootDirectionIndex5037 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5037];

        counter++;
        /*scoped using let*/
        let xv5037 = Math.cos(dir) * 6.666666666666667;
        let yv5037 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5037;
        e.pos.x += xv5037;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 14100 || e.pos.y + e.sat.r > 15400) {
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5038 = 0;
    var yv5038 = 0;
    var shootDirectionIndex5038 = 0;
    var timer5038 = 10;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:14600,x:72200,sf:(e)=>{
    e.pos.y += yv5038;
    e.pos.x += xv5038;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5038 = xv5038 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 15800) {
        yv5038 = yv5038 * -1;
    }

    timer5038--;
    if(timer5038 < 0){
        timer5038 = 106.66666666666667;

        shootDirectionIndex5038++;
        const shootDirections = [2.356194490192345];
        if(shootDirectionIndex5038 >= shootDirections.length){
            shootDirectionIndex5038 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5038];

        counter++;
        /*scoped using let*/
        let xv5038 = Math.cos(dir) * 6.666666666666667;
        let yv5038 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5038;
        e.pos.x += xv5038;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 15800) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5039 = 0;
    var yv5039 = 0;
    var shootDirectionIndex5039 = 0;
    var timer5039 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:15000,x:72200,sf:(e)=>{
    e.pos.y += yv5039;
    e.pos.x += xv5039;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300) {
        xv5039 = xv5039 * -1;
    }
    if ((e.pos.y - e.sat.r) < 14900 || e.pos.y + e.sat.r > 16200) {
        yv5039 = yv5039 * -1;
    }

    timer5039--;
    if(timer5039 < 0){
        timer5039 = 106.66666666666667;

        shootDirectionIndex5039++;
        const shootDirections = [2.356194490192345];
        if(shootDirectionIndex5039 >= shootDirections.length){
            shootDirectionIndex5039 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5039];

        counter++;
        /*scoped using let*/
        let xv5039 = Math.cos(dir) * 6.666666666666667;
        let yv5039 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5039;
        e.pos.x += xv5039;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 14900 || e.pos.y + e.sat.r > 16200) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5040 = 0;
    var yv5040 = 0;
    var shootDirectionIndex5040 = 0;
    var timer5040 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:16900,x:72200,sf:(e)=>{
    e.pos.y += yv5040;
    e.pos.x += xv5040;
    if ((e.pos.x - e.sat.r) < 71650 || e.pos.x + e.sat.r > 72300) {
        xv5040 = xv5040 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16800 || e.pos.y + e.sat.r > 17450) {
        yv5040 = yv5040 * -1;
    }

    timer5040--;
    if(timer5040 < 0){
        timer5040 = 106.66666666666667;

        shootDirectionIndex5040++;
        const shootDirections = [2.356194490192345];
        if(shootDirectionIndex5040 >= shootDirections.length){
            shootDirectionIndex5040 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5040];

        counter++;
        /*scoped using let*/
        let xv5040 = Math.cos(dir) * 6.666666666666667;
        let yv5040 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5040;
        e.pos.x += xv5040;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71650 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 16800 || e.pos.y + e.sat.r > 17450) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5041 = 0;
    var yv5041 = 0;
    var shootDirectionIndex5041 = 0;
    var timer5041 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:18000,x:72200,sf:(e)=>{
    e.pos.y += yv5041;
    e.pos.x += xv5041;
    if ((e.pos.x - e.sat.r) < 71650 || e.pos.x + e.sat.r > 72300) {
        xv5041 = xv5041 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17450 || e.pos.y + e.sat.r > 18100) {
        yv5041 = yv5041 * -1;
    }

    timer5041--;
    if(timer5041 < 0){
        timer5041 = 106.66666666666667;

        shootDirectionIndex5041++;
        const shootDirections = [3.9269908169872414];
        if(shootDirectionIndex5041 >= shootDirections.length){
            shootDirectionIndex5041 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5041];

        counter++;
        /*scoped using let*/
        let xv5041 = Math.cos(dir) * 6.666666666666667;
        let yv5041 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5041;
        e.pos.x += xv5041;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71650 || e.pos.x + e.sat.r > 72300 || (e.pos.y - e.sat.r) < 17450 || e.pos.y + e.sat.r > 18100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5042 = 0;
    var yv5042 = 0;
    var shootDirectionIndex5042 = 0;
    var timer5042 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:18000,x:71100,sf:(e)=>{
    e.pos.y += yv5042;
    e.pos.x += xv5042;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 71650) {
        xv5042 = xv5042 * -1;
    }
    if ((e.pos.y - e.sat.r) < 17450 || e.pos.y + e.sat.r > 18100) {
        yv5042 = yv5042 * -1;
    }

    timer5042--;
    if(timer5042 < 0){
        timer5042 = 106.66666666666667;

        shootDirectionIndex5042++;
        const shootDirections = [5.497787143782138];
        if(shootDirectionIndex5042 >= shootDirections.length){
            shootDirectionIndex5042 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5042];

        counter++;
        /*scoped using let*/
        let xv5042 = Math.cos(dir) * 6.666666666666667;
        let yv5042 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5042;
        e.pos.x += xv5042;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 71650 || (e.pos.y - e.sat.r) < 17450 || e.pos.y + e.sat.r > 18100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5043 = 0;
    var yv5043 = 0;
    var shootDirectionIndex5043 = 0;
    var timer5043 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:98,y:16900,x:71100,sf:(e)=>{
    e.pos.y += yv5043;
    e.pos.x += xv5043;
    if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 71650) {
        xv5043 = xv5043 * -1;
    }
    if ((e.pos.y - e.sat.r) < 16800 || e.pos.y + e.sat.r > 17450) {
        yv5043 = yv5043 * -1;
    }

    timer5043--;
    if(timer5043 < 0){
        timer5043 = 106.66666666666667;

        shootDirectionIndex5043++;
        const shootDirections = [0.7853981633974483];
        if(shootDirectionIndex5043 >= shootDirections.length){
            shootDirectionIndex5043 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5043];

        counter++;
        /*scoped using let*/
        let xv5043 = Math.cos(dir) * 6.666666666666667;
        let yv5043 = Math.sin(dir) * 6.666666666666667;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:98,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5043;
        e.pos.x += xv5043;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 71000 || e.pos.x + e.sat.r > 71650 || (e.pos.y - e.sat.r) < 16800 || e.pos.y + e.sat.r > 17450) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5044 = 0;
    var yv5044 = 0;
    var shootDirectionIndex5044 = 0;
    var timer5044 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:2400,x:79400,sf:(e)=>{
    e.pos.y += yv5044;
    e.pos.x += xv5044;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5044 = xv5044 * -1;
    }
    if ((e.pos.y - e.sat.r) < 2300 || e.pos.y + e.sat.r > 2500) {
        yv5044 = yv5044 * -1;
    }

    timer5044--;
    if(timer5044 < 0){
        timer5044 = 106.66666666666667;

        shootDirectionIndex5044++;
        const shootDirections = [0];
        if(shootDirectionIndex5044 >= shootDirections.length){
            shootDirectionIndex5044 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5044];

        counter++;
        /*scoped using let*/
        let xv5044 = Math.cos(dir) * 4.363636363636363;
        let yv5044 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5044;
        e.pos.x += xv5044;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 2300 || e.pos.y + e.sat.r > 2500) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5045 = 0;
    var yv5045 = 0;
    var shootDirectionIndex5045 = 0;
    var timer5045 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:4000,x:79400,sf:(e)=>{
    e.pos.y += yv5045;
    e.pos.x += xv5045;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5045 = xv5045 * -1;
    }
    if ((e.pos.y - e.sat.r) < 3900 || e.pos.y + e.sat.r > 4100) {
        yv5045 = yv5045 * -1;
    }

    timer5045--;
    if(timer5045 < 0){
        timer5045 = 106.66666666666667;

        shootDirectionIndex5045++;
        const shootDirections = [0];
        if(shootDirectionIndex5045 >= shootDirections.length){
            shootDirectionIndex5045 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5045];

        counter++;
        /*scoped using let*/
        let xv5045 = Math.cos(dir) * 4.363636363636363;
        let yv5045 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5045;
        e.pos.x += xv5045;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 3900 || e.pos.y + e.sat.r > 4100) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5046 = 0;
    var yv5046 = 0;
    var shootDirectionIndex5046 = 0;
    var timer5046 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:5600,x:80100,sf:(e)=>{
    e.pos.y += yv5046;
    e.pos.x += xv5046;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5046 = xv5046 * -1;
    }
    if ((e.pos.y - e.sat.r) < 5500 || e.pos.y + e.sat.r > 5700) {
        yv5046 = yv5046 * -1;
    }

    timer5046--;
    if(timer5046 < 0){
        timer5046 = 106.66666666666667;

        shootDirectionIndex5046++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5046 >= shootDirections.length){
            shootDirectionIndex5046 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5046];

        counter++;
        /*scoped using let*/
        let xv5046 = Math.cos(dir) * 4.363636363636363;
        let yv5046 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5046;
        e.pos.x += xv5046;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 5500 || e.pos.y + e.sat.r > 5700) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5047 = 0;
    var yv5047 = 0;
    var shootDirectionIndex5047 = 0;
    var timer5047 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:7200,x:80100,sf:(e)=>{
    e.pos.y += yv5047;
    e.pos.x += xv5047;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5047 = xv5047 * -1;
    }
    if ((e.pos.y - e.sat.r) < 7100 || e.pos.y + e.sat.r > 7300) {
        yv5047 = yv5047 * -1;
    }

    timer5047--;
    if(timer5047 < 0){
        timer5047 = 106.66666666666667;

        shootDirectionIndex5047++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5047 >= shootDirections.length){
            shootDirectionIndex5047 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5047];

        counter++;
        /*scoped using let*/
        let xv5047 = Math.cos(dir) * 4.363636363636363;
        let yv5047 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5047;
        e.pos.x += xv5047;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 7100 || e.pos.y + e.sat.r > 7300) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5048 = 0;
    var yv5048 = 0;
    var shootDirectionIndex5048 = 0;
    var timer5048 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:3200,x:80100,sf:(e)=>{
    e.pos.y += yv5048;
    e.pos.x += xv5048;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5048 = xv5048 * -1;
    }
    if ((e.pos.y - e.sat.r) < 3100 || e.pos.y + e.sat.r > 3300) {
        yv5048 = yv5048 * -1;
    }

    timer5048--;
    if(timer5048 < 0){
        timer5048 = 106.66666666666667;

        shootDirectionIndex5048++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5048 >= shootDirections.length){
            shootDirectionIndex5048 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5048];

        counter++;
        /*scoped using let*/
        let xv5048 = Math.cos(dir) * 4.363636363636363;
        let yv5048 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5048;
        e.pos.x += xv5048;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 3100 || e.pos.y + e.sat.r > 3300) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5049 = 0;
    var yv5049 = 0;
    var shootDirectionIndex5049 = 0;
    var timer5049 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:4800,x:80100,sf:(e)=>{
    e.pos.y += yv5049;
    e.pos.x += xv5049;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5049 = xv5049 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4900) {
        yv5049 = yv5049 * -1;
    }

    timer5049--;
    if(timer5049 < 0){
        timer5049 = 106.66666666666667;

        shootDirectionIndex5049++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex5049 >= shootDirections.length){
            shootDirectionIndex5049 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5049];

        counter++;
        /*scoped using let*/
        let xv5049 = Math.cos(dir) * 4.363636363636363;
        let yv5049 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5049;
        e.pos.x += xv5049;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4900) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5050 = 0;
    var yv5050 = 0;
    var shootDirectionIndex5050 = 0;
    var timer5050 = 10.00000000000266;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:6400,x:79400,sf:(e)=>{
    e.pos.y += yv5050;
    e.pos.x += xv5050;
    if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200) {
        xv5050 = xv5050 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6300 || e.pos.y + e.sat.r > 6500) {
        yv5050 = yv5050 * -1;
    }

    timer5050--;
    if(timer5050 < 0){
        timer5050 = 106.66666666666667;

        shootDirectionIndex5050++;
        const shootDirections = [0];
        if(shootDirectionIndex5050 >= shootDirections.length){
            shootDirectionIndex5050 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5050];

        counter++;
        /*scoped using let*/
        let xv5050 = Math.cos(dir) * 4.363636363636363;
        let yv5050 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5050;
        e.pos.x += xv5050;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79300 || e.pos.x + e.sat.r > 80200 || (e.pos.y - e.sat.r) < 6300 || e.pos.y + e.sat.r > 6500) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5051 = 0;
    var yv5051 = 0;
    var shootDirectionIndex5051 = 0;
    var timer5051 = 17.99999999999995;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:14150,x:79600,sf:(e)=>{
    e.pos.y += yv5051;
    e.pos.x += xv5051;
    if ((e.pos.x - e.sat.r) < 79450 || e.pos.x + e.sat.r > 80050) {
        xv5051 = xv5051 * -1;
    }
    if ((e.pos.y - e.sat.r) < 9900 || e.pos.y + e.sat.r > 14250) {
        yv5051 = yv5051 * -1;
    }

    timer5051--;
    if(timer5051 < 0){
        timer5051 = 18.666666666666668;

        shootDirectionIndex5051++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5051 >= shootDirections.length){
            shootDirectionIndex5051 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5051];

        counter++;
        /*scoped using let*/
        let xv5051 = Math.cos(dir) * 4.363636363636363;
        let yv5051 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:24,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5051;
        e.pos.x += xv5051;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79450 || e.pos.x + e.sat.r > 80050 || (e.pos.y - e.sat.r) < 9900 || e.pos.y + e.sat.r > 14250) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5052 = 0;
    var yv5052 = 0;
    var shootDirectionIndex5052 = 0;
    var timer5052 = 17.99999999999995;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:14150,x:79900,sf:(e)=>{
    e.pos.y += yv5052;
    e.pos.x += xv5052;
    if ((e.pos.x - e.sat.r) < 79450 || e.pos.x + e.sat.r > 80050) {
        xv5052 = xv5052 * -1;
    }
    if ((e.pos.y - e.sat.r) < 9900 || e.pos.y + e.sat.r > 14250) {
        yv5052 = yv5052 * -1;
    }

    timer5052--;
    if(timer5052 < 0){
        timer5052 = 18.666666666666668;

        shootDirectionIndex5052++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5052 >= shootDirections.length){
            shootDirectionIndex5052 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5052];

        counter++;
        /*scoped using let*/
        let xv5052 = Math.cos(dir) * 4.363636363636363;
        let yv5052 = Math.sin(dir) * 4.363636363636363;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:24,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5052;
        e.pos.x += xv5052;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 79450 || e.pos.x + e.sat.r > 80050 || (e.pos.y - e.sat.r) < 9900 || e.pos.y + e.sat.r > 14250) {
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

            if(true){
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
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5053 = 0.19937189067208713;
    var yv5053 = -2.6487572391047536;
    C(1,[3],[1],{w:92,h:92,y:3818,x:33654,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5053;
    e.pos.x += xv5053;
    if ((e.pos.x) < 33200) {
        xv5053 = xv5053 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5053 = xv5053 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5053 = yv5053 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5053 = yv5053 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5054 = -0.580369494312446;
    var yv5054 = -2.592071625663827;
    C(1,[3],[1],{w:92,h:92,y:4338,x:34734,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5054;
    e.pos.x += xv5054;
    if ((e.pos.x) < 33200) {
        xv5054 = xv5054 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5054 = xv5054 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5054 = yv5054 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5054 = yv5054 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5055 = -0.47416326264330244;
    var yv5055 = -2.6135862837984627;
    C(1,[3],[1],{w:92,h:92,y:3748,x:34440,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5055;
    e.pos.x += xv5055;
    if ((e.pos.x) < 33200) {
        xv5055 = xv5055 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5055 = xv5055 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5055 = yv5055 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5055 = yv5055 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5056 = 0.6783833791453776;
    var yv5056 = -2.5681627778237304;
    C(1,[3],[1],{w:92,h:92,y:3592,x:33878,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5056;
    e.pos.x += xv5056;
    if ((e.pos.x) < 33200) {
        xv5056 = xv5056 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5056 = xv5056 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5056 = yv5056 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5056 = yv5056 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5057 = 2.110447043340603;
    var yv5057 = 1.6129715867785486;
    C(1,[3],[1],{w:92,h:92,y:3748,x:34410,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5057;
    e.pos.x += xv5057;
    if ((e.pos.x) < 33200) {
        xv5057 = xv5057 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5057 = xv5057 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5057 = yv5057 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5057 = yv5057 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5058 = -0.41633730712082195;
    var yv5058 = 2.6234190113665377;
    C(1,[3],[1],{w:92,h:92,y:4594,x:33520,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5058;
    e.pos.x += xv5058;
    if ((e.pos.x) < 33200) {
        xv5058 = xv5058 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5058 = xv5058 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5058 = yv5058 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5058 = yv5058 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5059 = -1.691445876436508;
    var yv5059 = -2.048090552096253;
    C(1,[3],[1],{w:92,h:92,y:4224,x:33514,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5059;
    e.pos.x += xv5059;
    if ((e.pos.x) < 33200) {
        xv5059 = xv5059 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5059 = xv5059 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5059 = yv5059 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5059 = yv5059 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5060 = -2.4230514339928946;
    var yv5060 = -1.0883408522723832;
    C(1,[3],[1],{w:92,h:92,y:3760,x:33374,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5060;
    e.pos.x += xv5060;
    if ((e.pos.x) < 33200) {
        xv5060 = xv5060 * -1;
        e.pos.x = 33200;
    } else if(e.pos.x + 92 > 34800){
        xv5060 = xv5060 * -1;
        e.pos.x = 34800 - 92;
    }
    if ((e.pos.y) < 3100) {
        yv5060 = yv5060 * -1;
        e.pos.y = 3100;
    } else if(e.pos.y + 92 > 4700){
        yv5060 = yv5060 * -1;
        e.pos.y = 4700 - 92;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 92, 92);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5061 = 0;
    var yv5061 = 0;
    var base5061;
    
    C(0,[3],[1],{r:0.00002,y:6812,x:8764,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5061;
        e.pos.x += xv5061;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5061 = xv5061 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5061 = yv5061 * -1;
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

    base5061 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5061.pos.x,"y":base5061.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5061.pos.x;
        o.pos.y = base5061.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5062 = 0;
    var yv5062 = 0;
    var base5062;
    
    C(0,[3],[1],{r:0.00002,y:6830,x:8782,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5062;
        e.pos.x += xv5062;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5062 = xv5062 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5062 = yv5062 * -1;
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

    base5062 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5062.pos.x,"y":base5062.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5062.pos.x;
        o.pos.y = base5062.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5063 = 0;
    var yv5063 = 0;
    var base5063;
    
    C(0,[3],[1],{r:0.00002,y:6814,x:8760,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5063;
        e.pos.x += xv5063;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5063 = xv5063 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5063 = yv5063 * -1;
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

    base5063 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5063.pos.x,"y":base5063.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5063.pos.x;
        o.pos.y = base5063.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5064 = 0;
    var yv5064 = 0;
    var base5064;
    
    C(0,[3],[1],{r:0.00002,y:6820,x:8750,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5064;
        e.pos.x += xv5064;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5064 = xv5064 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5064 = yv5064 * -1;
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

    base5064 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5064.pos.x,"y":base5064.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5064.pos.x;
        o.pos.y = base5064.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5065 = 0;
    var yv5065 = 0;
    var base5065;
    
    C(0,[3],[1],{r:0.00002,y:6836,x:8754,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5065;
        e.pos.x += xv5065;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5065 = xv5065 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5065 = yv5065 * -1;
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

    base5065 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5065.pos.x,"y":base5065.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5065.pos.x;
        o.pos.y = base5065.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5066 = 0;
    var yv5066 = 0;
    var base5066;
    
    C(0,[3],[1],{r:0.00002,y:6848,x:8794,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5066;
        e.pos.x += xv5066;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5066 = xv5066 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5066 = yv5066 * -1;
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

    base5066 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5066.pos.x,"y":base5066.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5066.pos.x;
        o.pos.y = base5066.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5067 = 0;
    var yv5067 = 0;
    var base5067;
    
    C(0,[3],[1],{r:0.00002,y:6832,x:8788,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5067;
        e.pos.x += xv5067;
        if ((e.pos.x - e.sat.r) < 8750 || e.pos.x + e.sat.r > 8800) {
            xv5067 = xv5067 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5067 = yv5067 * -1;
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

    base5067 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5067.pos.x,"y":base5067.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5067.pos.x;
        o.pos.y = base5067.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5068 = 0;
    var yv5068 = 0;
    var base5068;
    
    C(0,[3],[1],{r:0.00002,y:6836,x:8462,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5068;
        e.pos.x += xv5068;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5068 = xv5068 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5068 = yv5068 * -1;
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

    base5068 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5068.pos.x,"y":base5068.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5068.pos.x;
        o.pos.y = base5068.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5069 = 0;
    var yv5069 = 0;
    var base5069;
    
    C(0,[3],[1],{r:0.00002,y:6806,x:8458,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5069;
        e.pos.x += xv5069;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5069 = xv5069 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5069 = yv5069 * -1;
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

    base5069 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5069.pos.x,"y":base5069.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5069.pos.x;
        o.pos.y = base5069.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5070 = 0;
    var yv5070 = 0;
    var base5070;
    
    C(0,[3],[1],{r:0.00002,y:6804,x:8478,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5070;
        e.pos.x += xv5070;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5070 = xv5070 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5070 = yv5070 * -1;
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

    base5070 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5070.pos.x,"y":base5070.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5070.pos.x;
        o.pos.y = base5070.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5071 = 0;
    var yv5071 = 0;
    var base5071;
    
    C(0,[3],[1],{r:0.00002,y:6832,x:8494,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5071;
        e.pos.x += xv5071;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5071 = xv5071 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5071 = yv5071 * -1;
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

    base5071 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5071.pos.x,"y":base5071.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5071.pos.x;
        o.pos.y = base5071.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5072 = 0;
    var yv5072 = 0;
    var base5072;
    
    C(0,[3],[1],{r:0.00002,y:6836,x:8450,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5072;
        e.pos.x += xv5072;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5072 = xv5072 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5072 = yv5072 * -1;
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

    base5072 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5072.pos.x,"y":base5072.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5072.pos.x;
        o.pos.y = base5072.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5073 = 0;
    var yv5073 = 0;
    var base5073;
    
    C(0,[3],[1],{r:0.00002,y:6844,x:8494,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5073;
        e.pos.x += xv5073;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5073 = xv5073 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5073 = yv5073 * -1;
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

    base5073 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5073.pos.x,"y":base5073.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5073.pos.x;
        o.pos.y = base5073.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5074 = 0;
    var yv5074 = 0;
    var base5074;
    
    C(0,[3],[1],{r:0.00002,y:6802,x:8458,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5074;
        e.pos.x += xv5074;
        if ((e.pos.x - e.sat.r) < 8450 || e.pos.x + e.sat.r > 8500) {
            xv5074 = xv5074 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5074 = yv5074 * -1;
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

    base5074 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5074.pos.x,"y":base5074.pos.y,sf:(o,p)=>{
        angle = -0.7853981633974483

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

        o.pos.x = base5074.pos.x;
        o.pos.y = base5074.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5075 = 0;
    var yv5075 = 0;
    var base5075;
    
    C(0,[3],[1],{r:0.00002,y:6818,x:9052,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5075;
        e.pos.x += xv5075;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5075 = xv5075 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5075 = yv5075 * -1;
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

    base5075 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5075.pos.x,"y":base5075.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5075.pos.x;
        o.pos.y = base5075.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5076 = 0;
    var yv5076 = 0;
    var base5076;
    
    C(0,[3],[1],{r:0.00002,y:6836,x:9070,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5076;
        e.pos.x += xv5076;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5076 = xv5076 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5076 = yv5076 * -1;
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

    base5076 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5076.pos.x,"y":base5076.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5076.pos.x;
        o.pos.y = base5076.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5077 = 0;
    var yv5077 = 0;
    var base5077;
    
    C(0,[3],[1],{r:0.00002,y:6850,x:9092,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5077;
        e.pos.x += xv5077;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5077 = xv5077 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5077 = yv5077 * -1;
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

    base5077 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5077.pos.x,"y":base5077.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5077.pos.x;
        o.pos.y = base5077.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5078 = 0;
    var yv5078 = 0;
    var base5078;
    
    C(0,[3],[1],{r:0.00002,y:6826,x:9054,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5078;
        e.pos.x += xv5078;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5078 = xv5078 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5078 = yv5078 * -1;
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

    base5078 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5078.pos.x,"y":base5078.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5078.pos.x;
        o.pos.y = base5078.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5079 = 0;
    var yv5079 = 0;
    var base5079;
    
    C(0,[3],[1],{r:0.00002,y:6838,x:9062,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5079;
        e.pos.x += xv5079;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5079 = xv5079 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5079 = yv5079 * -1;
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

    base5079 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5079.pos.x,"y":base5079.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5079.pos.x;
        o.pos.y = base5079.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5080 = 0;
    var yv5080 = 0;
    var base5080;
    
    C(0,[3],[1],{r:0.00002,y:6844,x:9062,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5080;
        e.pos.x += xv5080;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5080 = xv5080 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5080 = yv5080 * -1;
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

    base5080 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5080.pos.x,"y":base5080.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5080.pos.x;
        o.pos.y = base5080.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5081 = 0;
    var yv5081 = 0;
    var base5081;
    
    C(0,[3],[1],{r:0.00002,y:6820,x:9060,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5081;
        e.pos.x += xv5081;
        if ((e.pos.x - e.sat.r) < 9050 || e.pos.x + e.sat.r > 9100) {
            xv5081 = xv5081 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 6850) {
            yv5081 = yv5081 * -1;
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

    base5081 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":472*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5081.pos.x,"y":base5081.pos.y,sf:(o,p)=>{
        angle = -2.356194490192345

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

        o.pos.x = base5081.pos.x;
        o.pos.y = base5081.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 354);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 354, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5082 = 0;
    var yv5082 = 0;
    var base5082;
    
    C(0,[3],[1],{r:0,y:4290,x:11558,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5082;
        e.pos.x += xv5082;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5082 = xv5082 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5082 = yv5082 * -1;
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

    base5082 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5082.pos.x,"y":base5082.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5082.pos.x;
        o.pos.y = base5082.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5083 = 0;
    var yv5083 = 0;
    var base5083;
    
    C(0,[3],[1],{r:0,y:4346,x:11554,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5083;
        e.pos.x += xv5083;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5083 = xv5083 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5083 = yv5083 * -1;
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

    base5083 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5083.pos.x,"y":base5083.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5083.pos.x;
        o.pos.y = base5083.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5084 = 0;
    var yv5084 = 0;
    var base5084;
    
    C(0,[3],[1],{r:0,y:4342,x:11560,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5084;
        e.pos.x += xv5084;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5084 = xv5084 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5084 = yv5084 * -1;
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

    base5084 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5084.pos.x,"y":base5084.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5084.pos.x;
        o.pos.y = base5084.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5085 = 0;
    var yv5085 = 0;
    var base5085;
    
    C(0,[3],[1],{r:0,y:4272,x:11552,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5085;
        e.pos.x += xv5085;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5085 = xv5085 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5085 = yv5085 * -1;
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

    base5085 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5085.pos.x,"y":base5085.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5085.pos.x;
        o.pos.y = base5085.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5086 = 0;
    var yv5086 = 0;
    var base5086;
    
    C(0,[3],[1],{r:0,y:4326,x:11528,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5086;
        e.pos.x += xv5086;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5086 = xv5086 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5086 = yv5086 * -1;
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

    base5086 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5086.pos.x,"y":base5086.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5086.pos.x;
        o.pos.y = base5086.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5087 = 0;
    var yv5087 = 0;
    var base5087;
    
    C(0,[3],[1],{r:0,y:4276,x:11536,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5087;
        e.pos.x += xv5087;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5087 = xv5087 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5087 = yv5087 * -1;
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

    base5087 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5087.pos.x,"y":base5087.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5087.pos.x;
        o.pos.y = base5087.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5088 = 0;
    var yv5088 = 0;
    var base5088;
    
    C(0,[3],[1],{r:0,y:4324,x:11546,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5088;
        e.pos.x += xv5088;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5088 = xv5088 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5088 = yv5088 * -1;
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

    base5088 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5088.pos.x,"y":base5088.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5088.pos.x;
        o.pos.y = base5088.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5089 = 0;
    var yv5089 = 0;
    var base5089;
    
    C(0,[3],[1],{r:0,y:4344,x:11520,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5089;
        e.pos.x += xv5089;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5089 = xv5089 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5089 = yv5089 * -1;
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

    base5089 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5089.pos.x,"y":base5089.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5089.pos.x;
        o.pos.y = base5089.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5090 = 0;
    var yv5090 = 0;
    var base5090;
    
    C(0,[3],[1],{r:0,y:4350,x:11568,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5090;
        e.pos.x += xv5090;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5090 = xv5090 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5090 = yv5090 * -1;
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

    base5090 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5090.pos.x,"y":base5090.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5090.pos.x;
        o.pos.y = base5090.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5091 = 0;
    var yv5091 = 0;
    var base5091;
    
    C(0,[3],[1],{r:0,y:4258,x:11568,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5091;
        e.pos.x += xv5091;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5091 = xv5091 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4350) {
            yv5091 = yv5091 * -1;
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

    base5091 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5091.pos.x,"y":base5091.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5091.pos.x;
        o.pos.y = base5091.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5092 = 0;
    var yv5092 = 0;
    var base5092;
    
    C(0,[3],[1],{r:0,y:5046,x:11532,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5092;
        e.pos.x += xv5092;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5092 = xv5092 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5092 = yv5092 * -1;
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

    base5092 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5092.pos.x,"y":base5092.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5092.pos.x;
        o.pos.y = base5092.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5093 = 0;
    var yv5093 = 0;
    var base5093;
    
    C(0,[3],[1],{r:0,y:5036,x:11584,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5093;
        e.pos.x += xv5093;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5093 = xv5093 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5093 = yv5093 * -1;
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

    base5093 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5093.pos.x,"y":base5093.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5093.pos.x;
        o.pos.y = base5093.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5094 = 0;
    var yv5094 = 0;
    var base5094;
    
    C(0,[3],[1],{r:0,y:5012,x:11566,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5094;
        e.pos.x += xv5094;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5094 = xv5094 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5094 = yv5094 * -1;
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

    base5094 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5094.pos.x,"y":base5094.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5094.pos.x;
        o.pos.y = base5094.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5095 = 0;
    var yv5095 = 0;
    var base5095;
    
    C(0,[3],[1],{r:0,y:5010,x:11568,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5095;
        e.pos.x += xv5095;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5095 = xv5095 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5095 = yv5095 * -1;
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

    base5095 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5095.pos.x,"y":base5095.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5095.pos.x;
        o.pos.y = base5095.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5096 = 0;
    var yv5096 = 0;
    var base5096;
    
    C(0,[3],[1],{r:0,y:5016,x:11546,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5096;
        e.pos.x += xv5096;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5096 = xv5096 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5096 = yv5096 * -1;
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

    base5096 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5096.pos.x,"y":base5096.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5096.pos.x;
        o.pos.y = base5096.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5097 = 0;
    var yv5097 = 0;
    var base5097;
    
    C(0,[3],[1],{r:0,y:5046,x:11554,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5097;
        e.pos.x += xv5097;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5097 = xv5097 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5097 = yv5097 * -1;
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

    base5097 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5097.pos.x,"y":base5097.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5097.pos.x;
        o.pos.y = base5097.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5098 = 0;
    var yv5098 = 0;
    var base5098;
    
    C(0,[3],[1],{r:0,y:5030,x:11544,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5098;
        e.pos.x += xv5098;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5098 = xv5098 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5098 = yv5098 * -1;
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

    base5098 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5098.pos.x,"y":base5098.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5098.pos.x;
        o.pos.y = base5098.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5099 = 0;
    var yv5099 = 0;
    var base5099;
    
    C(0,[3],[1],{r:0,y:4964,x:11548,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5099;
        e.pos.x += xv5099;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5099 = xv5099 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5099 = yv5099 * -1;
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

    base5099 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5099.pos.x,"y":base5099.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5099.pos.x;
        o.pos.y = base5099.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5100 = 0;
    var yv5100 = 0;
    var base5100;
    
    C(0,[3],[1],{r:0,y:4968,x:11524,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5100;
        e.pos.x += xv5100;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5100 = xv5100 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5100 = yv5100 * -1;
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

    base5100 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5100.pos.x,"y":base5100.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5100.pos.x;
        o.pos.y = base5100.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5101 = 0;
    var yv5101 = 0;
    var base5101;
    
    C(0,[3],[1],{r:0,y:5042,x:11530,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5101;
        e.pos.x += xv5101;
        if ((e.pos.x - e.sat.r) < 11500 || e.pos.x + e.sat.r > 11600) {
            xv5101 = xv5101 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5050) {
            yv5101 = yv5101 * -1;
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

    base5101 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5101.pos.x,"y":base5101.pos.y,sf:(o,p)=>{
        angle = -1.5707963267948966

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

        o.pos.x = base5101.pos.x;
        o.pos.y = base5101.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5102 = 0;
    var yv5102 = 0;
    var base5102;
    
    C(0,[3],[1],{r:0.0002,y:4622,x:17080,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5102;
        e.pos.x += xv5102;
        if ((e.pos.x - e.sat.r) < 17050 || e.pos.x + e.sat.r > 17100) {
            xv5102 = xv5102 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4600 || e.pos.y + e.sat.r > 4650) {
            yv5102 = yv5102 * -1;
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

    base5102 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5102.pos.x,"y":base5102.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base5102.pos.x;
        o.pos.y = base5102.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5103 = 0;
    var yv5103 = 0;
    var base5103;
    
    C(0,[3],[1],{r:0.0002,y:4408,x:17062,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5103;
        e.pos.x += xv5103;
        if ((e.pos.x - e.sat.r) < 17050 || e.pos.x + e.sat.r > 17100) {
            xv5103 = xv5103 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4400 || e.pos.y + e.sat.r > 4450) {
            yv5103 = yv5103 * -1;
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

    base5103 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5103.pos.x,"y":base5103.pos.y,sf:(o,p)=>{
        angle = 0

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

        o.pos.x = base5103.pos.x;
        o.pos.y = base5103.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5104 = 0;
    var yv5104 = 0;
    var base5104;
    
    C(0,[3],[1],{r:0.0002,y:4936,x:17892,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5104;
        e.pos.x += xv5104;
        if ((e.pos.x - e.sat.r) < 17850 || e.pos.x + e.sat.r > 17900) {
            xv5104 = xv5104 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4900 || e.pos.y + e.sat.r > 4950) {
            yv5104 = yv5104 * -1;
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

    base5104 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5104.pos.x,"y":base5104.pos.y,sf:(o,p)=>{
        angle = 3.141592653589793

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

        o.pos.x = base5104.pos.x;
        o.pos.y = base5104.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5105 = 0;
    var yv5105 = 0;
    var base5105;
    
    C(0,[3],[1],{r:0.0002,y:4614,x:17880,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5105;
        e.pos.x += xv5105;
        if ((e.pos.x - e.sat.r) < 17850 || e.pos.x + e.sat.r > 17900) {
            xv5105 = xv5105 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4600 || e.pos.y + e.sat.r > 4650) {
            yv5105 = yv5105 * -1;
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

    base5105 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5105.pos.x,"y":base5105.pos.y,sf:(o,p)=>{
        angle = 3.141592653589793

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

        o.pos.x = base5105.pos.x;
        o.pos.y = base5105.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5106 = 0;
    var yv5106 = 0;
    var base5106;
    
    C(0,[3],[1],{r:0.0002,y:4330,x:18268,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5106;
        e.pos.x += xv5106;
        if ((e.pos.x - e.sat.r) < 18250 || e.pos.x + e.sat.r > 18300) {
            xv5106 = xv5106 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 4350) {
            yv5106 = yv5106 * -1;
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

    base5106 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5106.pos.x,"y":base5106.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5106.pos.x;
        o.pos.y = base5106.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5107 = 0;
    var yv5107 = 0;
    var base5107;
    
    C(0,[3],[1],{r:0.0002,y:4580,x:18298,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5107;
        e.pos.x += xv5107;
        if ((e.pos.x - e.sat.r) < 18250 || e.pos.x + e.sat.r > 18300) {
            xv5107 = xv5107 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4550 || e.pos.y + e.sat.r > 4600) {
            yv5107 = yv5107 * -1;
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

    base5107 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5107.pos.x,"y":base5107.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5107.pos.x;
        o.pos.y = base5107.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5108 = 0;
    var yv5108 = 0;
    var base5108;
    
    C(0,[3],[1],{r:0.0002,y:4998,x:18806,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5108;
        e.pos.x += xv5108;
        if ((e.pos.x - e.sat.r) < 18800 || e.pos.x + e.sat.r > 18850) {
            xv5108 = xv5108 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4950 || e.pos.y + e.sat.r > 5000) {
            yv5108 = yv5108 * -1;
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

    base5108 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5108.pos.x,"y":base5108.pos.y,sf:(o,p)=>{
        angle = 4.71238898038469

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

        o.pos.x = base5108.pos.x;
        o.pos.y = base5108.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5109 = 0;
    var yv5109 = 0;
    var base5109;
    
    C(0,[3],[1],{r:0.0002,y:4728,x:18846,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5109;
        e.pos.x += xv5109;
        if ((e.pos.x - e.sat.r) < 18800 || e.pos.x + e.sat.r > 18850) {
            xv5109 = xv5109 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4750) {
            yv5109 = yv5109 * -1;
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

    base5109 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":354*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5109.pos.x,"y":base5109.pos.y,sf:(o,p)=>{
        angle = 4.71238898038469

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

        o.pos.x = base5109.pos.x;
        o.pos.y = base5109.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 265.5);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 265.5, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5110 = 0;
    var yv5110 = 0;
    var base5110;
    
    C(0,[3],[1],{r:0.0002,y:5030,x:19400,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5110;
        e.pos.x += xv5110;
        if ((e.pos.x - e.sat.r) < 19350 || e.pos.x + e.sat.r > 19400) {
            xv5110 = xv5110 * -1;
        }
        if ((e.pos.y - e.sat.r) < 5000 || e.pos.y + e.sat.r > 5050) {
            yv5110 = yv5110 * -1;
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

    base5110 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":413*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5110.pos.x,"y":base5110.pos.y,sf:(o,p)=>{
        angle = 4.71238898038469

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

        o.pos.x = base5110.pos.x;
        o.pos.y = base5110.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 309.75);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5111 = 0;
    var yv5111 = 0;
    var base5111;
    
    C(0,[3],[1],{r:0.0002,y:4286,x:19360,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv5111;
        e.pos.x += xv5111;
        if ((e.pos.x - e.sat.r) < 19350 || e.pos.x + e.sat.r > 19400) {
            xv5111 = xv5111 * -1;
        }
        if ((e.pos.y - e.sat.r) < 4250 || e.pos.y + e.sat.r > 4300) {
            yv5111 = yv5111 * -1;
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

    base5111 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":413*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base5111.pos.x,"y":base5111.pos.y,sf:(o,p)=>{
        angle = 1.5707963267948966

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

        o.pos.x = base5111.pos.x;
        o.pos.y = base5111.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 309.75);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 309.75, o.startSliceAngle, o.endSliceAngle);
                    ctx.lineTo(o.pos.x, o.pos.y);
                })
            }
        } else if(false) {
            if(o.pos.x < 18150){
                overrideAngle = 0;
            } else {
                overrideAngle = Math.PI;
            }
        }
    }})};

obstacles[obstacles.length-1].isEnemy = true;

    var xv5112 = 1.8909951338085744;
    var yv5112 = 2.1099562037374304;
    C(0,[3],[0],{r:112,y:14926,x:33608,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5112;
    e.pos.x += xv5112;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5112 = xv5112 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5112 = yv5112 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5113 = 0.689980163530281;
    var yv5113 = 2.7480365994128433;
    C(0,[3],[0],{r:112,y:15174,x:33684,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5113;
    e.pos.x += xv5113;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5113 = xv5113 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5113 = yv5113 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5114 = 1.0405751758965767;
    var yv5114 = -2.6353332011503947;
    C(0,[3],[0],{r:112,y:15402,x:33158,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5114;
    e.pos.x += xv5114;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5114 = xv5114 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5114 = yv5114 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5115 = -0.20624881069686804;
    var yv5115 = -2.825816555593074;
    C(0,[3],[0],{r:112,y:14618,x:32660,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5115;
    e.pos.x += xv5115;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5115 = xv5115 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5115 = yv5115 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5116 = -2.8327188046500886;
    var yv5116 = -0.05900806351297128;
    C(0,[3],[0],{r:112,y:16082,x:32852,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5116;
    e.pos.x += xv5116;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5116 = xv5116 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5116 = yv5116 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5117 = 2.6383594747113537;
    var yv5117 = 1.0328780470019723;
    C(0,[3],[0],{r:112,y:15688,x:32252,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5117;
    e.pos.x += xv5117;
    if ((e.pos.x - e.sat.r) < 32100 || e.pos.x + e.sat.r > 33700) {
        xv5117 = xv5117 * -1;
        if(e.pos.x - e.sat.r < 32100) e.pos.x = 32100 + e.sat.r;
        else e.pos.x = -e.sat.r + 33700;
    }
    if ((e.pos.y - e.sat.r) < 14500 || e.pos.y + e.sat.r > 16100) {
        yv5117 = yv5117 * -1;
        if(e.pos.y - e.sat.r < 14500) e.pos.x = 14500 + e.sat.r;
        else e.pos.y = -e.sat.r + 16100;
    }
    }});

obstacles[obstacles.length-1].isEnemy = true;

    var xv5118 = 0;
    var yv5118 = 0;
    C(0,[3],[1],{r:98,y:4572,x:36918,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5118;
    e.pos.x += xv5118;
    if ((e.pos.x - e.sat.r) < 36800 || e.pos.x + e.sat.r > 37000) {
        xv5118 = xv5118 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4400 || e.pos.y + e.sat.r > 4600) {
        yv5118 = yv5118 * -1;
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

    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5119 = 0.7577044172055378;
    var yv5119 = 4.752477276762848;
    C(1,[3],[1],{w:124,h:124,y:468.7729862444379,x:165484.67419455887,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5119;
    e.pos.x += xv5119;
    if ((e.pos.x) < 164900) {
        xv5119 = xv5119 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5119 = xv5119 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5119 = yv5119 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5119 = yv5119 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5120 = 0.6271639441586633;
    var yv5120 = 4.771459067952627;
    C(1,[3],[1],{w:124,h:124,y:150.63586978105246,x:166279.2059037058,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5120;
    e.pos.x += xv5120;
    if ((e.pos.x) < 164900) {
        xv5120 = xv5120 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5120 = xv5120 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5120 = yv5120 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5120 = yv5120 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5121 = -4.812467257224495;
    var yv5121 = -0.01775241229098626;
    C(1,[3],[1],{w:124,h:124,y:1476.5633505380047,x:166466.86428848119,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5121;
    e.pos.x += xv5121;
    if ((e.pos.x) < 164900) {
        xv5121 = xv5121 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5121 = xv5121 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5121 = yv5121 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5121 = yv5121 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5122 = -0.1591648473684864;
    var yv5122 = 4.809867233236503;
    C(1,[3],[1],{w:124,h:124,y:1744.855362293044,x:165001.20416680316,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5122;
    e.pos.x += xv5122;
    if ((e.pos.x) < 164900) {
        xv5122 = xv5122 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5122 = xv5122 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5122 = yv5122 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5122 = yv5122 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5123 = 4.799459333219012;
    var yv5123 = -0.3540428770317466;
    C(1,[3],[1],{w:124,h:124,y:939.4290103964995,x:166433.65508433396,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5123;
    e.pos.x += xv5123;
    if ((e.pos.x) < 164900) {
        xv5123 = xv5123 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5123 = xv5123 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5123 = yv5123 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5123 = yv5123 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5124 = 0.15610790859788345;
    var yv5124 = 4.809967418899342;
    C(1,[3],[1],{w:124,h:124,y:1323.8680122569995,x:164979.89711122913,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5124;
    e.pos.x += xv5124;
    if ((e.pos.x) < 164900) {
        xv5124 = xv5124 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5124 = xv5124 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5124 = yv5124 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5124 = yv5124 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5125 = 4.323487612380285;
    var yv5125 = -2.1136724239092075;
    C(1,[3],[1],{w:124,h:124,y:1293.5627851054394,x:165766.6598558399,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5125;
    e.pos.x += xv5125;
    if ((e.pos.x) < 164900) {
        xv5125 = xv5125 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5125 = xv5125 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5125 = yv5125 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5125 = yv5125 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5126 = -3.240495034678872;
    var yv5126 = -3.557997776871365;
    C(1,[3],[1],{w:124,h:124,y:1666.7072707917619,x:166521.94032138155,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5126;
    e.pos.x += xv5126;
    if ((e.pos.x) < 164900) {
        xv5126 = xv5126 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5126 = xv5126 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5126 = yv5126 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5126 = yv5126 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5127 = 4.613621267093132;
    var yv5127 = 1.369180431435522;
    C(1,[3],[1],{w:124,h:124,y:735.3106861680455,x:165203.25346874027,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5127;
    e.pos.x += xv5127;
    if ((e.pos.x) < 164900) {
        xv5127 = xv5127 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5127 = xv5127 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5127 = yv5127 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5127 = yv5127 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5128 = -2.288783747282316;
    var yv5128 = -4.233394053023686;
    C(1,[3],[1],{w:124,h:124,y:1695.9818171166798,x:166781.5842249099,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5128;
    e.pos.x += xv5128;
    if ((e.pos.x) < 164900) {
        xv5128 = xv5128 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5128 = xv5128 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5128 = yv5128 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5128 = yv5128 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5129 = 1.7546680379322956;
    var yv5129 = 4.481215942872964;
    C(1,[3],[1],{w:124,h:124,y:1810.9357596426385,x:166097.71661581914,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5129;
    e.pos.x += xv5129;
    if ((e.pos.x) < 164900) {
        xv5129 = xv5129 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5129 = xv5129 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5129 = yv5129 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5129 = yv5129 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5130 = 3.1933352780976905;
    var yv5130 = 3.6003841533448546;
    C(1,[3],[1],{w:124,h:124,y:663.7229195695014,x:165949.38143488474,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5130;
    e.pos.x += xv5130;
    if ((e.pos.x) < 164900) {
        xv5130 = xv5130 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5130 = xv5130 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5130 = yv5130 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5130 = yv5130 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5131 = -3.3363472102280687;
    var yv5131 = 3.4682767396508867;
    C(1,[3],[1],{w:124,h:124,y:1376.4164105943169,x:165229.09209163883,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5131;
    e.pos.x += xv5131;
    if ((e.pos.x) < 164900) {
        xv5131 = xv5131 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5131 = xv5131 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5131 = yv5131 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5131 = yv5131 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5132 = -4.7171310618683036;
    var yv5132 = -0.9533261745893775;
    C(1,[3],[1],{w:124,h:124,y:724.033247563231,x:166674.4971283211,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5132;
    e.pos.x += xv5132;
    if ((e.pos.x) < 164900) {
        xv5132 = xv5132 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5132 = xv5132 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5132 = yv5132 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5132 = yv5132 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5133 = 4.322534873118374;
    var yv5133 = -2.1156201267419266;
    C(1,[3],[1],{w:124,h:124,y:1437.875924259697,x:166645.029821506,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5133;
    e.pos.x += xv5133;
    if ((e.pos.x) < 164900) {
        xv5133 = xv5133 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5133 = xv5133 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5133 = yv5133 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5133 = yv5133 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5134 = 4.810949078451641;
    var yv5134 = 0.12216879530104648;
    C(1,[3],[1],{w:124,h:124,y:1550.849604558436,x:166659.7903651815,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5134;
    e.pos.x += xv5134;
    if ((e.pos.x) < 164900) {
        xv5134 = xv5134 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5134 = xv5134 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5134 = yv5134 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5134 = yv5134 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5135 = -0.8753981697097567;
    var yv5135 = 4.7322124101173655;
    C(1,[3],[1],{w:124,h:124,y:1313.941118157377,x:165333.70873999107,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5135;
    e.pos.x += xv5135;
    if ((e.pos.x) < 164900) {
        xv5135 = xv5135 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5135 = xv5135 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5135 = yv5135 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5135 = yv5135 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;

    var xv5136 = -4.051747962302165;
    var yv5136 = 2.596823963995299;
    C(1,[3],[1],{w:124,h:124,y:1698.0041416733404,x:166134.01206307136,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5136;
    e.pos.x += xv5136;
    if ((e.pos.x) < 164900) {
        xv5136 = xv5136 * -1;
        e.pos.x = 164900;
    } else if(e.pos.x + 124 > 166900){
        xv5136 = xv5136 * -1;
        e.pos.x = 166900 - 124;
    }
    if ((e.pos.y) < 0) {
        yv5136 = yv5136 * -1;
        e.pos.y = 0;
    } else if(e.pos.y + 124 > 2000){
        yv5136 = yv5136 * -1;
        e.pos.y = 2000 - 124;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 124, 124);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    
obstacles[obstacles.length-1].isEnemy = true;
C(1,[],[18],{type:[1,[],[18]],x:79500,y:0,w:500,h:1900,size:20.5,inView:false,sizeChangePermanent:false,sizeMult:0.8367346938775511,})
C(1,[],[18],{type:[1,[],[18]],x:59250,y:17300,w:200,h:500,size:12.2,inView:false,sizeChangePermanent:false,sizeMult:0.49795918367346936,})
C(1,[],[18],{type:[1,[],[18]],x:77400,y:16100,w:500,h:1450,size:25.01,inView:false,sizeChangePermanent:false,sizeMult:1.0208163265306123,})
C(1,[],[18],{type:[1,[],[18]],x:17750,y:10150,w:2150,h:600,size:15.5,sizeChangePermanent:false,sizeMult:0.6326530612244898,})
C(1,[],[18],{type:[1,[],[18]],x:154700,y:400,w:5600,h:1600,size:49.5,inView:false,sizeChangePermanent:false,sizeMult:2.020408163265306,})
C(1,[],[18],{type:[1,[],[18]],x:104600,y:700,w:1100,h:550,size:12.2,inView:false,sizeChangePermanent:false,sizeMult:0.49795918367346936,})
C(1,[],[18],{type:[1,[],[18]],x:176550,y:900,w:1450,h:200,size:10.5,inView:false,sizeChangePermanent:false,sizeMult:0.42857142857142855,})
C(1,[],[11],{type:[1,[],[11]],x:59350,y:19000,w:450,h:1150,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:45400,y:13950,w:200,h:250,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44200,y:12800,w:1400,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:3700,y:4900,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:3700,y:4300,w:200,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:5900,y:4300,w:300,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:5900,y:4900,w:300,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44200,y:13500,w:1400,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44200,y:13150,w:1400,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44550,y:14500,w:700,h:300,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44200,y:13950,w:200,h:250,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44700,y:19000,w:400,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:44750,y:15450,w:300,h:700,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:29900,y:17400,w:300,h:300,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:117550,y:1000,w:900,h:0,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:115400,y:600,w:500,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:115400,y:1300,w:500,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:165800,y:900,w:200,h:200,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:59350,y:19000,w:450,h:1150,renderAbove:false,})
C(1,[],[15],{type:[1,[],[15]],x:77400,y:0,w:500,h:17600,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:77400,y:0,w:500,h:17600,force:9200,dir:{"x":0,"y":9200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:6.842016806722689,})
C(1,[],[13],{type:[1,[],[13]],x:77400,y:8400,w:550,h:100,force:0,dir:{"x":0,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(1,[],[14],{type:[1,[],[14]],x:77400,y:3200,w:500,h:5200,force:10000,dir:{"x":10000,"y":0},direction:"right",jumpHeight:1300,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:0,platformerAngleRotateSpeed:0,platformerForce:2.1608643457382954,jumpForce:377,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[13],{type:[1,[],[13]],x:77400,y:8500,w:550,h:400,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(1,[],[15],{type:[1,[],[15]],x:79750,y:19400,w:0,h:500,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:77650,y:11250,w:0,h:450,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[16],{type:[1,[],[16]],x:77850,y:14450,w:0,h:400,snapDistance:50,snapWait:10,snapX:true,snapY:false,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:true,toSnapY:false,})
C(1,[],[15],{type:[1,[],[15]],x:77850,y:14400,w:0,h:450,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:77450,y:14400,w:0,h:450,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
var inv36=0;C(1,[],[3],{cr:()=>{},x:79500,y:1900,w:500,h:200,ef:()=>{
        inv36 = 52.8;
    }});
C(1,[],[13],{type:[1,[],[13]],x:79500,y:0,w:500,h:19900,force:9200,dir:{"x":0,"y":9200},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:6.842016806722689,})
C(1,[],[15],{type:[1,[],[15]],x:79500,y:0,w:500,h:19900,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:79500,y:0,w:500,h:19900,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:77400,y:8400,w:100,h:300,force:12000,dir:{"x":12000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:8.924369747899162,})
C(1,[],[15],{type:[1,[],[15]],x:67600,y:12100,w:7400,h:7800,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:71000,y:12100,w:1300,h:7800,force:5350,dir:{"x":0,"y":5350},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.9787815126050425,})
C(1,[],[13],{type:[1,[],[13]],x:67600,y:12100,w:1300,h:7800,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[15],{type:[1,[],[15]],x:55000,y:14300,w:4350,h:5700,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:55000,y:19100,w:4350,h:900,force:2875,dir:{"x":2875,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1381302521008405,})
C(1,[],[13],{type:[1,[],[13]],x:55000,y:15800,w:4500,h:300,force:5750,dir:{"x":5750,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.276260504201681,})
C(1,[],[14],{type:[1,[],[14]],x:55000,y:15800,w:4300,h:300,force:4800,dir:{"x":0,"y":4800},direction:"down",jumpHeight:162,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:1.037214885954382,jumpForce:46.98,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[15],{type:[1,[],[15]],x:58900,y:17400,w:150,h:0,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:58900,y:17700,w:150,h:0,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:58050,y:17550,w:600,h:0,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:56150,y:17550,w:250,h:0,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:57050,y:17550,w:250,h:0,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:55000,y:17300,w:4400,h:500,force:2875,dir:{"x":2875,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1381302521008405,})
var minX5136, minY5136, maxX5136, maxY5136;
    minX5136 = 54900;minY5136 = 28500;maxX5136 = 55700;maxY5136 = 29300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5136) && (player.pos.x) < md(maxX5136) && (player.pos.y) > md(minY5136) && (player.pos.y) < md(maxY5136)) {
            colors.background="#212121"; colors.tile="#000000";
        }
    },});
C(1,[],[13],{type:[1,[],[13]],x:55000,y:14300,w:4500,h:600,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[0],{type:[1,[],[0]],x:54650,y:11950,w:5100,h:2350,canJump:true,inView:false,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:74400,y:18600,w:600,h:1300,force:1350,dir:{"x":0,"y":1350},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0039915966386557,})
var inv58=0;C(1,[],[3],{cr:()=>{},x:74400,y:19700,w:600,h:200,ef:()=>{
        inv58 = 6;
    }});
C(1,[],[0],{type:[1,[],[0]],x:59500,y:19000,w:650,h:1150,canJump:true,inView:false,isNormal:true,})
C(1,[],[15],{type:[1,[],[15]],x:61800,y:12100,w:4400,h:900,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[0],{type:[1,[],[0]],x:59300,y:20000,w:200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:55700,y:19100,w:300,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:59600,y:12050,w:2200,h:8350,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:55000,y:14300,w:300,h:300,spawn:{"x":75,"y":7225},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:54900,y:10900,w:20350,h:1200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:75000,y:350,w:1350,h:1100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:54950,y:14600,w:4550,h:1200,canJump:true,inView:false,isNormal:true,})
C(1,[],[26],{type:[1,[],[26]],x:55300,y:14300,w:200,h:300,musicPath:"https://www.youtube.com/watch?v=Q4xgKR1QjMY",volume:1,startTime:1,inView:false,musicStartTime:1,})
C(1,[],[0],{type:[1,[],[0]],x:54900,y:20000,w:3650,h:300,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:59300,y:14300,w:100,h:300,tpx:55050,tpy:15950,bgColor:"#000000",tileColor:"#212121",changeColor:false,inView:false,})
C(1,[],[20],{h:1000,w:600,y:28400,x:63600,hex:'#FFFFFF',alpha:1,
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
C(1,[],[26],{type:[1,[],[26]],x:55050,y:14300,w:200,h:300,musicPath:"undefined",volume:1,startTime:0,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:54950,y:16100,w:4550,h:1200,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:54950,y:17800,w:4700,h:1300,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:59300,y:15800,w:100,h:300,tpx:55050,tpy:17550,bgColor:"#000000",tileColor:"#212121",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:59400,y:17300,w:100,h:500,tpx:55050,tpy:19550,bgColor:"#000000",tileColor:"#212121",changeColor:false,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:55150,y:15950,radius:150,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[75,8050],[75.00000000000001,8125]],"type":"poly","props":{}},endPolygon:{"points":[[74.99999999999999,7900],[74.99999999999997,7825]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[54900,17300],[55200,17300],[55000,17500],[54900,17500]],most:{"left":-50,"right":100,"top":8650,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[54900,17600],[55000,17600],[55200,17800],[55000,17800],[54900,17800]],most:{"left":-50,"right":100,"top":8800,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[57200,17600],[57400,17800],[57000,17800]],most:{"left":1000,"right":1200,"top":8800,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57000,17300],[57400,17300],[57200,17500]],most:{"left":1000,"right":1200,"top":8650,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:59500,y:16000,w:250,h:1900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:59450,y:14700,w:550,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:59350,y:19100,w:100,h:900,tpx:61850,tpy:12550,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[55000,19100],[55700,19100],[55000,19400]],most:{"left":0,"right":350,"top":9550,"bottom":9700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[55000,19700],[55700,20000],[55000,20000]],most:{"left":0,"right":350,"top":9850,"bottom":10000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:61800,y:12100,w:4400,h:900,force:2875,dir:{"x":2875,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1381302521008405,})
C(1,[],[0],{type:[1,[],[0]],x:66300,y:12100,w:1300,h:1900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:61750,y:13000,w:5850,h:1700,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:66200,y:12100,w:100,h:900,tpx:68250,tpy:12150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:61750,y:14700,w:5850,h:5300,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:68900,y:11900,w:2100,h:8150,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:67600,y:19900,w:1300,h:100,tpx:71650,tpy:12150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[20],{h:400,w:2800,y:39800,x:80100,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#1d1616";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:72300,y:11850,w:2100,h:8150,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:71000,y:19900,w:1300,h:100,tpx:74700,tpy:12150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:74400,y:12100,w:1300,h:6400,force:3075,dir:{"x":0,"y":3075},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.2868697478991593,})
C(1,[],[13],{type:[1,[],[13]],x:74400,y:18500,w:600,h:100,force:0,dir:{"x":0,"y":0},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[62350,12650],[62800,13000],[61900,13000]],most:{"left":3450,"right":3900,"top":6325,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[61900,12100],[62800,12100],[62350,12450]],most:{"left":3450,"right":3900,"top":6050,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[63100,12200],[63200,12400],[62900,12350]],most:{"left":3950,"right":4100,"top":6100,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[65700,11850],[66000,12100],[65700,12400],[65400,12100]],most:{"left":5200,"right":5500,"top":5925,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[65700,12700],[66000,13000],[65700,13250],[65400,13000]],most:{"left":5200,"right":5500,"top":6350,"bottom":6625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:64950,y:13000,w:1400,h:500,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:64800,y:11600,w:1400,h:500,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[62950,12600],[63200,12800],[63000,12850]],most:{"left":3975,"right":4100,"top":6300,"bottom":6425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[63400,12650],[63500,12800],[63300,12900]],most:{"left":4150,"right":4250,"top":6325,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64050,12100],[64150,12250],[63950,12300]],most:{"left":4475,"right":4575,"top":6050,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[63900,12800],[63800,13000],[63650,12900]],most:{"left":4325,"right":4450,"top":6400,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[63600,12100],[63550,12350],[63400,12250]],most:{"left":4200,"right":4300,"top":6050,"bottom":6175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[63950,12400],[63900,12600],[63700,12450]],most:{"left":4350,"right":4475,"top":6200,"bottom":6300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64700,12700],[64650,12950],[64400,12850]],most:{"left":4700,"right":4850,"top":6350,"bottom":6475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64750,12150],[64900,12300],[64700,12450]],most:{"left":4850,"right":4950,"top":6075,"bottom":6225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64300,12350],[64500,12450],[64200,12550]],most:{"left":4600,"right":4750,"top":6175,"bottom":6275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64000,12800],[64250,12950],[64050,13000]],most:{"left":4500,"right":4625,"top":6400,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64900,12650],[65100,12750],[65000,12900]],most:{"left":4950,"right":5050,"top":6325,"bottom":6450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[65150,12200],[65300,12300],[65100,12400]],most:{"left":5050,"right":5150,"top":6100,"bottom":6200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[65550,12600],[65350,12800],[65250,12650]],most:{"left":5125,"right":5275,"top":6300,"bottom":6400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[64500,12100],[64550,12300],[64400,12250]],most:{"left":4700,"right":4775,"top":6050,"bottom":6150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:75000,y:0,w:2400,h:20000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:77900,y:0,w:1600,h:17900,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:74400,y:19900,w:600,h:100,tpx:77650,tpy:50,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:77300,y:17600,w:2200,h:2450,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:77400,y:17550,w:500,h:50,tpx:79750,tpy:50,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[20],{h:500,w:1200,y:35000,x:99700,hex:'#FFFFFF',alpha:1,
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
var minX5140, minY5140, maxX5140, maxY5140;
    minX5140 = 99900;minY5140 = -100;maxX5140 = 100700;maxY5140 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5140) && (player.pos.x) < md(maxX5140) && (player.pos.y) > md(minY5140) && (player.pos.y) < md(maxY5140)) {
            colors.background="#4e0000"; colors.tile="#000000";
        }
    },});
C(1,[],[20],{h:400,w:2800,y:39800,x:86900,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#1d1616";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:400,w:2800,y:39800,x:93100,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#1d1616";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:1000,w:1200,y:31400,x:63600,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:1900,w:600,y:34000,x:63800,hex:'#FFFFFF',alpha:1,
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
var minX5145, minY5145, maxX5145, maxY5145;
    minX5145 = 55100;minY5145 = 28600;maxX5145 = 55600;maxY5145 = 29200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5145) && (player.pos.x) < md(maxX5145) && (player.pos.y) > md(minY5145) && (player.pos.y) < md(maxY5145)) {
            colors.background="#303030"; colors.tile="#16181d";
        }
    },});
C(1,[],[20],{h:2000,w:900,y:24100,x:77400,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var inv134=0;C(1,[],[3],{cr:()=>{},x:77650,y:0,w:0,h:100,ef:()=>{
        inv134 = 0;
    }});
C(1,[],[16],{type:[1,[],[16]],x:56200,y:17550,w:200,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(1,[],[16],{type:[1,[],[16]],x:57100,y:17550,w:200,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59000,17450],[59100,17550],[59000,17650],[58900,17550]],most:{"left":1950,"right":2050,"top":8725,"bottom":8825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58200,17650],[58850,17800],[57950,17800]],most:{"left":1475,"right":1925,"top":8825,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58950,17300],[59050,17300],[59000,17350]],most:{"left":1975,"right":2025,"top":8650,"bottom":8675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57300,17700],[57500,17800],[57400,17800]],most:{"left":1150,"right":1250,"top":8850,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57400,17300],[57500,17300],[57300,17400]],most:{"left":1150,"right":1250,"top":8650,"bottom":8700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59400,17600],[59400,17800],[59200,17800]],most:{"left":2100,"right":2200,"top":8800,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59200,17300],[59400,17300],[59400,17500]],most:{"left":2100,"right":2200,"top":8650,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57700,17450],[57850,17550],[57700,17650],[57550,17550]],most:{"left":1275,"right":1425,"top":8725,"bottom":8825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57950,17300],[58850,17300],[58200,17450]],most:{"left":1475,"right":1925,"top":8650,"bottom":8725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59000,17750],[59050,17800],[58950,17800]],most:{"left":1975,"right":2025,"top":8875,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57800,17450],[57950,17550],[57800,17650],[57650,17550]],most:{"left":1325,"right":1475,"top":8725,"bottom":8825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57750,17450],[57850,17550],[57750,17650],[57650,17550]],most:{"left":1325,"right":1425,"top":8725,"bottom":8825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58600,17650],[58850,17800],[57950,17800]],most:{"left":1475,"right":1925,"top":8825,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58400,17650],[58850,17800],[57950,17800]],most:{"left":1475,"right":1925,"top":8825,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57950,17300],[58850,17300],[58600,17450]],most:{"left":1475,"right":1925,"top":8650,"bottom":8725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57950,17300],[58850,17300],[58400,17450]],most:{"left":1475,"right":1925,"top":8650,"bottom":8725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56100,17300],[56500,17300],[56300,17500]],most:{"left":550,"right":750,"top":8650,"bottom":8750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56300,17600],[56500,17800],[56100,17800]],most:{"left":550,"right":750,"top":8800,"bottom":8900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[55750,17400],[55900,17550],[55750,17700],[55600,17550]],most:{"left":300,"right":450,"top":8700,"bottom":8850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56750,17400],[56900,17550],[56750,17700],[56600,17550]],most:{"left":800,"right":950,"top":8700,"bottom":8850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59000,17500],[59100,17550],[59000,17600],[58900,17550]],most:{"left":1950,"right":2050,"top":8750,"bottom":8800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59000,17500],[59050,17550],[59000,17600],[58950,17550]],most:{"left":1975,"right":2025,"top":8750,"bottom":8800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:58100,y:17550,w:550,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(1,[],[16],{type:[1,[],[16]],x:58950,y:17700,w:100,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(1,[],[16],{type:[1,[],[16]],x:58950,y:17400,w:100,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56100,16050],[56100,16100],[56000,16100]],most:{"left":500,"right":550,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56800,16000],[56800,16100],[56700,16100]],most:{"left":850,"right":900,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56850,16050],[56900,16100],[56800,16100]],most:{"left":900,"right":950,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:56800,y:16000,w:400,h:50,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:57500,y:15950,w:600,h:50,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59200,16020],[59300,16100],[59100,16100]],most:{"left":2050,"right":2150,"top":8010,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57500,15950],[57500,16100],[57300,16100]],most:{"left":1150,"right":1250,"top":7975,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56950,16050],[57000,16100],[56900,16100]],most:{"left":950,"right":1000,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57050,16050],[57100,16100],[57000,16100]],most:{"left":1000,"right":1050,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57150,16050],[57200,16100],[57100,16100]],most:{"left":1050,"right":1100,"top":8025,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57200,16000],[57300,16100],[57200,16100]],most:{"left":1100,"right":1150,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57550,16000],[57600,16100],[57500,16100]],most:{"left":1250,"right":1300,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57650,16000],[57700,16100],[57600,16100]],most:{"left":1300,"right":1350,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57750,16000],[57800,16100],[57700,16100]],most:{"left":1350,"right":1400,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57850,16000],[57900,16100],[57800,16100]],most:{"left":1400,"right":1450,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[57950,16000],[58000,16100],[57900,16100]],most:{"left":1450,"right":1500,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58050,16000],[58100,16100],[58000,16100]],most:{"left":1500,"right":1550,"top":8000,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:56100,y:16050,w:600,h:50,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[55150,15800],[55350,15800],[55250,15900]],most:{"left":75,"right":175,"top":7900,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[55350,15800],[55550,15800],[55450,15900]],most:{"left":175,"right":275,"top":7900,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[55550,15800],[55750,15800],[55650,15900]],most:{"left":275,"right":375,"top":7900,"bottom":7950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59100,15800],[59300,15800],[59200,15880]],most:{"left":2050,"right":2150,"top":7900,"bottom":7940},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:58200,y:15950,w:1100,h:0,snapDistance:50,snapWait:10,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[59000,16020],[59100,16100],[58900,16100]],most:{"left":1950,"right":2050,"top":8010,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58800,16020],[58900,16100],[58700,16100]],most:{"left":1850,"right":1950,"top":8010,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58700,15800],[58900,15800],[58800,15880]],most:{"left":1850,"right":1950,"top":7900,"bottom":7940},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58900,15800],[59100,15800],[59000,15880]],most:{"left":1950,"right":2050,"top":7900,"bottom":7940},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58600,16020],[58700,16100],[58500,16100]],most:{"left":1750,"right":1850,"top":8010,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:56150,y:19100,w:300,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:56600,y:19100,w:300,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:57050,y:19100,w:300,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:57500,y:19100,w:300,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:58000,y:19100,w:1350,h:900,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:58000,y:19100,w:100,h:200,points:[[29000,9550],[29000,9900]],speed:98,currentPoint:0.04633333333546034,pointOn:{"x":1500,"y":9550},pointTo:{"x":1500,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58000,19100,3.2666666666666666],[58000,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58100,y:19100,w:100,h:200,points:[[29050,9550],[29050,9575],[29050,9900]],speed:98,currentPoint:1.0498974358997266,pointOn:{"x":1550,"y":9575},pointTo:{"x":1550,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58100,19100,3.2666666666666666],[58100,19150,3.2666666666666666],[58100,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58200,y:19100,w:100,h:200,points:[[29100,9550],[29100,9600],[29100,9900]],speed:98,currentPoint:1.054055555558037,pointOn:{"x":1600,"y":9600},pointTo:{"x":1600,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58200,19100,3.2666666666666666],[58200,19200,3.2666666666666666],[58200,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58300,y:19100,w:100,h:200,points:[[29150,9550],[29150,9625],[29150,9900]],speed:98,currentPoint:1.058969696972404,pointOn:{"x":1650,"y":9625},pointTo:{"x":1650,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58300,19100,3.2666666666666666],[58300,19250,3.2666666666666666],[58300,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58400,y:19100,w:100,h:200,points:[[29200,9550],[29200,9650],[29200,9900]],speed:98,currentPoint:1.0648666666696445,pointOn:{"x":1700,"y":9650},pointTo:{"x":1700,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58400,19100,3.2666666666666666],[58400,19300,3.2666666666666666],[58400,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58500,y:19100,w:100,h:200,points:[[29250,9550],[29250,9675],[29250,9900]],speed:98,currentPoint:1.0720740740773826,pointOn:{"x":1750,"y":9675},pointTo:{"x":1750,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58500,19100,3.2666666666666666],[58500,19350,3.2666666666666666],[58500,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58600,y:19100,w:100,h:200,points:[[29300,9550],[29300,9700],[29300,9900]],speed:98,currentPoint:1.0810833333370555,pointOn:{"x":1800,"y":9700},pointTo:{"x":1800,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58600,19100,3.2666666666666666],[58600,19400,3.2666666666666666],[58600,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58700,y:19100,w:100,h:200,points:[[29350,9550],[29350,9725],[29350,9900]],speed:98,currentPoint:1.0926666666709206,pointOn:{"x":1850,"y":9725},pointTo:{"x":1850,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58700,19100,3.2666666666666666],[58700,19450,3.2666666666666666],[58700,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58800,y:19100,w:100,h:200,points:[[29400,9550],[29400,9750],[29400,9900]],speed:98,currentPoint:1.1081111111160742,pointOn:{"x":1900,"y":9750},pointTo:{"x":1900,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58800,19100,3.2666666666666666],[58800,19500,3.2666666666666666],[58800,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58900,y:19100,w:100,h:200,points:[[29450,9550],[29450,9775],[29450,9900]],speed:98,currentPoint:1.129733333339289,pointOn:{"x":1950,"y":9775},pointTo:{"x":1950,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[58900,19100,3.2666666666666666],[58900,19550,3.2666666666666666],[58900,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59000,y:19100,w:100,h:200,points:[[29500,9550],[29500,9800],[29500,9900]],speed:98,currentPoint:1.162166666674111,pointOn:{"x":2000,"y":9800},pointTo:{"x":2000,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[59000,19100,3.2666666666666666],[59000,19600,3.2666666666666666],[59000,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59100,y:19100,w:100,h:200,points:[[29550,9550],[29550,9825],[29550,9900]],speed:98,currentPoint:1.2162222222321482,pointOn:{"x":2050,"y":9825},pointTo:{"x":2050,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[59100,19100,3.2666666666666666],[59100,19650,3.2666666666666666],[59100,19800,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59200,y:19100,w:100,h:200,points:[[29600,9550],[29600,9850],[29600,9900]],speed:98,currentPoint:1.3243333333482223,pointOn:{"x":2100,"y":9850},pointTo:{"x":2100,"y":9900},xv:6.000769315822031e-15,yv:98,inView:false,path:[[59200,19100,3.2666666666666666],[59200,19700,3.2666666666666666],[59200,19800,3.2666666666666666]],})
C(2,[],[1],{type:[2,[],[1]],points:[[58100,15950],[58300,16100],[58100,16100]],most:{"left":1550,"right":1650,"top":7975,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56100,14500],[56200,14600],[56100,14600]],most:{"left":550,"right":600,"top":7250,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56100,14300],[56200,14300],[56100,14400]],most:{"left":550,"right":600,"top":7150,"bottom":7200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[56300,14300],[57800,14300],[57600,14500],[56500,14500]],most:{"left":650,"right":1400,"top":7150,"bottom":7250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58200,14400],[59100,14400],[59300,14600],[58000,14600]],most:{"left":1500,"right":2150,"top":7200,"bottom":7300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[58400,16020],[58500,16100],[58300,16100]],most:{"left":1650,"right":1750,"top":8010,"bottom":8050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:54950,y:14250,w:1150,h:150,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:54950,y:14500,w:1150,h:150,canJump:true,inView:false,isNormal:true,})
C(1,[0],[11],{type:[1,[0],[11]],x:55700,y:19100,w:750,h:300,points:[[27850,9550],[27850,9850]],speed:98,currentPoint:0.3873888888913704,pointOn:{"x":350,"y":9550},pointTo:{"x":350,"y":9850},xv:6.000769315822031e-15,yv:98,inView:false,path:[[55700,19100,3.2666666666666666],[55700,19700,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:56150,y:19100,w:750,h:300,points:[[28075,9550],[28075,9700],[28075,9850]],speed:98,currentPoint:1.7747777777827407,pointOn:{"x":575,"y":9700},pointTo:{"x":575,"y":9850},xv:6.000769315822031e-15,yv:98,inView:false,path:[[56150,19100,3.2666666666666666],[56150,19400,3.2666666666666666],[56150,19700,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:56600,y:19100,w:750,h:300,points:[[28300,9550],[28300,9850]],speed:98,currentPoint:1.3873888888913704,pointOn:{"x":800,"y":9850},pointTo:{"x":800,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[56600,19100,3.2666666666666666],[56600,19700,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:57050,y:19100,w:750,h:300,points:[[28525,9550],[28525,9850],[28525,9700]],speed:98,currentPoint:2.7747777777827407,pointOn:{"x":1025,"y":9700},pointTo:{"x":1025,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[57050,19100,3.2666666666666666],[57050,19700,3.2666666666666666],[57050,19400,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:57500,y:19100,w:500,h:300,points:[[28750,9550],[28750,9850]],speed:98,currentPoint:0.3873888888913704,pointOn:{"x":1250,"y":9550},pointTo:{"x":1250,"y":9850},xv:6.000769315822031e-15,yv:98,inView:false,path:[[57500,19100,3.2666666666666666],[57500,19700,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59200,y:19800,w:100,h:200,points:[[29600,9900],[29600,9600],[29600,9550]],speed:98,currentPoint:1.3243333333482223,pointOn:{"x":2100,"y":9600},pointTo:{"x":2100,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[59200,19800,3.2666666666666666],[59200,19200,3.2666666666666666],[59200,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59100,y:19800,w:100,h:200,points:[[29550,9900],[29550,9625],[29550,9550]],speed:98,currentPoint:1.2162222222321482,pointOn:{"x":2050,"y":9625},pointTo:{"x":2050,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[59100,19800,3.2666666666666666],[59100,19250,3.2666666666666666],[59100,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:59000,y:19800,w:100,h:200,points:[[29500,9900],[29500,9650],[29500,9550]],speed:98,currentPoint:1.162166666674111,pointOn:{"x":2000,"y":9650},pointTo:{"x":2000,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[59000,19800,3.2666666666666666],[59000,19300,3.2666666666666666],[59000,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58900,y:19800,w:100,h:200,points:[[29450,9900],[29450,9675],[29450,9550]],speed:98,currentPoint:1.129733333339289,pointOn:{"x":1950,"y":9675},pointTo:{"x":1950,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58900,19800,3.2666666666666666],[58900,19350,3.2666666666666666],[58900,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58800,y:19800,w:100,h:200,points:[[29400,9900],[29400,9700],[29400,9550]],speed:98,currentPoint:1.1081111111160742,pointOn:{"x":1900,"y":9700},pointTo:{"x":1900,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58800,19800,3.2666666666666666],[58800,19400,3.2666666666666666],[58800,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58700,y:19800,w:100,h:200,points:[[29350,9900],[29350,9725],[29350,9550]],speed:98,currentPoint:1.0926666666709206,pointOn:{"x":1850,"y":9725},pointTo:{"x":1850,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58700,19800,3.2666666666666666],[58700,19450,3.2666666666666666],[58700,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58600,y:19800,w:100,h:200,points:[[29300,9900],[29300,9750],[29300,9550]],speed:98,currentPoint:1.0810833333370555,pointOn:{"x":1800,"y":9750},pointTo:{"x":1800,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58600,19800,3.2666666666666666],[58600,19500,3.2666666666666666],[58600,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58500,y:19800,w:100,h:200,points:[[29250,9900],[29250,9775],[29250,9550]],speed:98,currentPoint:1.0720740740773826,pointOn:{"x":1750,"y":9775},pointTo:{"x":1750,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58500,19800,3.2666666666666666],[58500,19550,3.2666666666666666],[58500,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58400,y:19800,w:100,h:200,points:[[29200,9900],[29200,9800],[29200,9550]],speed:98,currentPoint:1.0648666666696445,pointOn:{"x":1700,"y":9800},pointTo:{"x":1700,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58400,19800,3.2666666666666666],[58400,19600,3.2666666666666666],[58400,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58300,y:19800,w:100,h:200,points:[[29150,9900],[29150,9825],[29150,9550]],speed:98,currentPoint:1.058969696972404,pointOn:{"x":1650,"y":9825},pointTo:{"x":1650,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58300,19800,3.2666666666666666],[58300,19650,3.2666666666666666],[58300,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58200,y:19800,w:100,h:200,points:[[29100,9900],[29100,9850],[29100,9550]],speed:98,currentPoint:1.054055555558037,pointOn:{"x":1600,"y":9850},pointTo:{"x":1600,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58200,19800,3.2666666666666666],[58200,19700,3.2666666666666666],[58200,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58100,y:19800,w:100,h:200,points:[[29050,9900],[29050,9875],[29050,9550]],speed:98,currentPoint:1.0498974358997266,pointOn:{"x":1550,"y":9875},pointTo:{"x":1550,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58100,19800,3.2666666666666666],[58100,19750,3.2666666666666666],[58100,19100,3.2666666666666666]],})
C(1,[0],[11],{type:[1,[0],[11]],x:58000,y:19800,w:100,h:200,points:[[29000,9900],[29000,9550]],speed:98,currentPoint:0.04633333333546034,pointOn:{"x":1500,"y":9900},pointTo:{"x":1500,"y":9550},xv:6.000769315822031e-15,yv:-98,inView:false,path:[[58000,19800,3.2666666666666666],[58000,19100,3.2666666666666666]],})
C(1,[],[20],{h:2500,w:1200,y:37800,x:63500,hex:'#FFFFFF',alpha:1,
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
C(2,[],[1],{type:[2,[],[1]],points:[[67600,12100],[68100,12600],[67600,13100]],most:{"left":6300,"right":6550,"top":6050,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[68900,12100],[68900,13100],[68400,12600]],most:{"left":6700,"right":6950,"top":6050,"bottom":6550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var minX5148, minY5148, maxX5148, maxY5148;
    minX5148 = 81200;minY5148 = 24100;maxX5148 = 81700;maxY5148 = 24700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5148) && (player.pos.x) < md(maxX5148) && (player.pos.y) > md(minY5148) && (player.pos.y) < md(maxY5148)) {
            colors.background="#303030"; colors.tile="#1d1616";
        }
    },});
var inv238=0;C(1,[],[3],{cr:()=>{},x:71000,y:12100,w:1300,h:100,ef:()=>{
        inv238 = 24.599999999999998;
    }});
C(2,[],[1],{type:[2,[],[1]],points:[[77400,0],[77550,1600],[77400,3200]],most:{"left":11200,"right":11275,"top":0,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77750,0],[77900,0],[77900,1600]],most:{"left":11375,"right":11450,"top":0,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,1600],[77900,3400],[77750,3200]],most:{"left":11375,"right":11450,"top":800,"bottom":1700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,5300],[77900,5600],[77700,5450]],most:{"left":11350,"right":11450,"top":2650,"bottom":2800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,8000],[77900,8300],[77700,8150]],most:{"left":11350,"right":11450,"top":4000,"bottom":4150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:77700,y:5600,w:250,h:900,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,6500],[77900,6800],[77700,6650]],most:{"left":11350,"right":11450,"top":3250,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,6800],[77900,7100],[77700,6950]],most:{"left":11350,"right":11450,"top":3400,"bottom":3550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:77700,y:7100,w:250,h:900,canJump:true,inView:false,isNormal:true,})
C(1,[],[7],{type:[1,[],[7]],x:77500,y:5400,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[77650,13250],[77800,14600],[77650,15950],[77500,14600]],most:{"left":11250,"right":11400,"top":6625,"bottom":7975},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77400,8900],[77600,11500],[77400,13000]],most:{"left":11200,"right":11300,"top":4450,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,8900],[77900,13000],[77700,11500]],most:{"left":11350,"right":11450,"top":4450,"bottom":6500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:77450,y:14450,w:0,h:400,snapDistance:50,snapWait:10,snapX:true,snapY:false,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:true,toSnapY:false,})
C(1,[],[0],{type:[1,[],[0]],x:77800,y:8500,w:100,h:1400,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:77400,y:8700,w:100,h:1200,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77400,3600],[77600,3750],[77400,3900]],most:{"left":11200,"right":11300,"top":1800,"bottom":1950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77400,3900],[77600,4050],[77400,4200]],most:{"left":11200,"right":11300,"top":1950,"bottom":2100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77400,4200],[77600,4350],[77400,4500]],most:{"left":11200,"right":11300,"top":2100,"bottom":2250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[77400,8600],[77500,8700],[77400,8800]],most:{"left":11200,"right":11250,"top":4300,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:77650,y:11300,w:0,h:400,snapDistance:100,snapWait:10,snapX:true,snapY:false,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:200,snapDistanceX:200,toSnapX:true,toSnapY:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[77900,8300],[77900,8600],[77700,8450]],most:{"left":11350,"right":11450,"top":4150,"bottom":4300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79650,0],[79700,350],[79500,300],[79500,100]],most:{"left":12250,"right":12350,"top":0,"bottom":175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[80000,400],[80000,750],[79850,800],[79800,600]],most:{"left":12400,"right":12500,"top":200,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79650,900],[79700,1250],[79500,1300],[79500,1050]],most:{"left":12250,"right":12350,"top":450,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79500,400],[79700,450],[79650,700],[79500,800]],most:{"left":12250,"right":12350,"top":200,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79900,900],[80000,1050],[80000,1350],[79850,1400]],most:{"left":12425,"right":12500,"top":450,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[80000,1450],[80000,1750],[79950,1900],[79800,1550]],most:{"left":12400,"right":12500,"top":725,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79600,1400],[79700,1600],[79500,1800],[79500,1500]],most:{"left":12250,"right":12350,"top":700,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[80000,0],[80000,350],[79800,350],[79850,100]],most:{"left":12400,"right":12500,"top":0,"bottom":175},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:77600,y:9400,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[1],{type:[1,[],[1]],x:77400,y:16100,w:500,h:1400,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:78700,y:1650,w:800,h:8250,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:80000,y:1250,w:400,h:6500,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[79500,14100],[79700,19900],[79500,19900]],most:{"left":12250,"right":12350,"top":7050,"bottom":9950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[80000,14100],[80000,19900],[79800,19900]],most:{"left":12400,"right":12500,"top":7050,"bottom":9950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[16],{type:[1,[],[16]],x:79750,y:19500,w:0,h:400,snapDistance:50,snapWait:10,snapX:true,snapY:false,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:600,snapDistanceY:100,snapDistanceX:100,toSnapX:true,toSnapY:false,})
C(1,[],[29],{type:[1,[],[29]],x:79500,y:7700,w:200,h:200,time:0.9,inView:false,changeDeathTimerStateTo:true,deathTime:54,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:79800,y:7700,w:200,h:200,time:0.9,inView:false,changeDeathTimerStateTo:true,deathTime:54,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:79650,y:7500,w:200,h:200,time:0.9,inView:false,changeDeathTimerStateTo:true,deathTime:54,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:79650,y:8700,w:200,h:200,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[79500,7900],[79650,8900],[79500,9900]],most:{"left":12250,"right":12325,"top":3950,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[80000,7900],[80000,9900],[79850,8900]],most:{"left":12425,"right":12500,"top":3950,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:79400,y:19900,w:300,h:150,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:79800,y:19900,w:400,h:150,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:54750,y:19050,w:250,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[11],{type:[1,[],[11]],x:61800,y:12100,w:100,h:900,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:57950,y:19100,w:50,h:900,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:55100,y:14400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77800,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77400,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77600,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16600,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16800,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17000,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17000,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16800,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16600,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16200,w:100,h:100,renderAbove:true,})
C(3,[1],[20],{type:[3,[1],[20]],x:77650,y:4850,w:50,h:50,size:128,text:"->",angle:180,story:false,fontSize:256,hex:"#FFFFFF",pivotX:77650,pivotY:4850,rotateSpeed:0,initialRotation:3.141592653589793,})
C(3,[],[20],{type:[3,[],[20]],x:77650,y:12600,w:50,h:50,size:128,text:"<->",angle:0,story:false,fontSize:256,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:3700,w:50,h:50,size:108,text:"J",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:3900,w:50,h:50,size:108,text:"U",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4100,w:50,h:50,size:108,text:"M",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4300,w:50,h:50,size:108,text:"P",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4500,w:50,h:50,size:108,text:"!",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:79750,y:19650,w:50,h:50,size:128,text:"GG",angle:0,story:false,fontSize:256,hex:"#FFFFFF",})
C(1,[],[3],{x:36800,y:4400,w:200,h:200,cr:(o)=>{
            ctx.fillStyle = "#6e7175";
            ctx.setLineDash([30, 80]);
            ctx.lineDashOffset = Math.sin(window.frames/60 * 0.6) * 350;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.globalAlpha = 0.3;
            ctx.fillRect(
                o.pos.x,
                o.pos.y,
                o.dimensions.x,
                o.dimensions.y
            );
            ctx.globalAlpha = 1;
            ctx.strokeRect(
                o.pos.x + 4,
                o.pos.y + 4,
                o.dimensions.x - 8,
                o.dimensions.y - 8
            );
            ctx.setLineDash([]);
        },ef:(p,res,o)=>{
            shared.gunActive = false;
        }});
C(1,[],[3],{x:36800,y:3100,w:200,h:100,cr:(o)=>{
            ctx.fillStyle = "#bd8b0d";
            ctx.setLineDash([30, 80]);
            ctx.lineDashOffset = Math.sin(window.frames/60 * 0.6) * 350;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.globalAlpha = 0.3;
            ctx.fillRect(
                o.pos.x,
                o.pos.y,
                o.dimensions.x,
                o.dimensions.y
            );
            ctx.globalAlpha = 1;
            ctx.strokeRect(
                o.pos.x + 4,
                o.pos.y + 4,
                o.dimensions.x - 8,
                o.dimensions.y - 8
            );
            ctx.setLineDash([]);
        },ef:(p,res,o)=>{
            shared.gunActive = true;
            resetGunCooldown();
        }});
C(1,[],[3],{x:33000,y:14300,w:700,h:100,cr:(o)=>{
            ctx.fillStyle = "#6e7175";
            ctx.setLineDash([30, 80]);
            ctx.lineDashOffset = Math.sin(window.frames/60 * 0.6) * 350;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.globalAlpha = 0.3;
            ctx.fillRect(
                o.pos.x,
                o.pos.y,
                o.dimensions.x,
                o.dimensions.y
            );
            ctx.globalAlpha = 1;
            ctx.strokeRect(
                o.pos.x + 4,
                o.pos.y + 4,
                o.dimensions.x - 8,
                o.dimensions.y - 8
            );
            ctx.setLineDash([]);
        },ef:(p,res,o)=>{
            shared.gunActive = false;
        }});
C(1,[],[3],{x:32000,y:14800,w:100,h:500,cr:(o)=>{
            ctx.fillStyle = "#bd8b0d";
            ctx.setLineDash([30, 80]);
            ctx.lineDashOffset = Math.sin(window.frames/60 * 0.6) * 350;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.globalAlpha = 0.3;
            ctx.fillRect(
                o.pos.x,
                o.pos.y,
                o.dimensions.x,
                o.dimensions.y
            );
            ctx.globalAlpha = 1;
            ctx.strokeRect(
                o.pos.x + 4,
                o.pos.y + 4,
                o.dimensions.x - 8,
                o.dimensions.y - 8
            );
            ctx.setLineDash([]);
        },ef:(p,res,o)=>{
            shared.gunActive = true;
        }});
C(1,[],[13],{type:[1,[],[13]],x:42000,y:8000,w:4100,h:100,force:3227,dir:{"x":3227,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.3999117647058825,})
C(1,[],[9],{type:[1,[],[9]],x:41900,y:10100,w:700,h:550,spawn:{"x":21125,"y":5187.5},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:42000,y:10100,w:8000,h:500,force:500,dir:{"x":500,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3718487394957984,})
C(1,[],[15],{type:[1,[],[15]],x:49000,y:10100,w:1000,h:500,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[12],{type:[1,[],[12]],x:49900,y:10100,w:150,h:450,tpx:42050,tpy:8050,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[15],{type:[1,[],[15]],x:42000,y:10100,w:6900,h:500,rx:true,ry:true,axisSpeedMultY:0,axisSpeedMultX:0,})
C(4,[],[0],{type:[4,[],[0]],x:42250,y:10350,radius:250,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[21125,5300],[21125,5425]],"type":"poly","props":{}},endPolygon:{"points":[[21125,5050],[21125,4925]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",r:500,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[14],{type:[1,[],[14]],x:42400,y:12550,w:3900,h:6500,force:3000,dir:{"x":0,"y":3000},direction:"down",jumpHeight:200,maxForce:1000,overrideJC:42,variableJumpHeight:false,platformerFriction:0.98,specialPOQTPlatformer:true,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7779111644657863*1.3,jumpForce:34.8*1.2,jumpDecay:0.98,maxJumpCooldown:30,canJumpMidair:true,})
C(1,[],[11],{x:44200,y:12600,w:1400,h:100});

C(1,[],[3],{ef:(p)=>{
    for(let i = 0; i < p.forces.length; i+=3){
        p.forces[i+1] = 0;// y comp = 0
    }
},cr:()=>{},type:[1,[],[14]],x:58700,y:15900,w:1100,h:100,platformerAngle:-90,platformerFriction:0.8,platformerAngleRotateSpeed:0,platformerForce:2,jumpDecay:0.95,jumpForce:0,maxJumpCooldown:20})

var morphTriggered40 = false;
    C(1,[],[3],{h:300,w:300,y:18400,x:44750,
        cr:(e)=>{
            ctx.globalAlpha = 0.8;
            if (morphTriggered40 === true) {
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
            morphTriggered40 = true;    
        }
    });
C(1,[1],[11],{type:[1,[1],[11]],x:45025,y:14150,w:450,h:100,angle:0,rotateSpeed:0.02632996632996633,pivotX:45250,pivotY:14200,distToPivot:0,canCollide:true,cullingRadius:115.2443057161611,initialRotation:0,})
C(1,[1],[11],{type:[1,[1],[11]],x:44825,y:14150,w:450,h:100,angle:0,rotateSpeed:0.02632996632996633,pivotX:45050,pivotY:14200,distToPivot:0,canCollide:true,cullingRadius:115.2443057161611,initialRotation:0,})
C(1,[1],[11],{type:[1,[1],[11]],x:44525,y:14150,w:450,h:100,angle:0,rotateSpeed:-0.02632996632996633,pivotX:44750,pivotY:14200,distToPivot:0,canCollide:true,cullingRadius:115.2443057161611,initialRotation:0,})
C(1,[1],[11],{type:[1,[1],[11]],x:44325,y:14150,w:450,h:100,angle:0,rotateSpeed:-0.02632996632996633,pivotX:44550,pivotY:14200,distToPivot:0,canCollide:true,cullingRadius:115.2443057161611,initialRotation:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[45050,14650],[45250,14650],[45150,14850]],most:{"left":22525,"right":22625,"top":7325,"bottom":7425},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44550,14650],[44750,14650],[44650,14850]],most:{"left":22275,"right":22375,"top":7325,"bottom":7425},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44900,12800],[45300,13000],[44900,13200],[44500,13000]],most:{"left":22250,"right":22650,"top":6400,"bottom":6600},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44900,13300],[45300,13600],[44500,13600]],most:{"left":22250,"right":22650,"top":6650,"bottom":6800},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[11],{type:[2,[],[11]],points:[[45150,16750],[45600,16750],[45600,17200]],most:{"left":22575,"right":22800,"top":8375,"bottom":8600},renderType:"poly",x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[44200,16750],[44650,16750],[44200,17200]],most:{"left":22100,"right":22325,"top":8375,"bottom":8600},renderType:"poly",x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:44000,y:15900,w:200,h:200,points:[[22000,7950],[22800,7950],[22800,7750],[22000,7750]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22000,"y":7950},pointTo:{"x":22800,"y":7950},xv:150,yv:0,path:[[44000,15900,5],[45600,15900,5],[45600,15500,5],[44000,15500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44400,y:15900,w:200,h:200,points:[[22200,7950],[22800,7950],[22800,7750],[22000,7750],[22000,7950]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22200,"y":7950},pointTo:{"x":22800,"y":7950},xv:150,yv:0,path:[[44400,15900,5],[45600,15900,5],[45600,15500,5],[44000,15500,5],[44000,15900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44800,y:15900,w:200,h:200,points:[[22400,7950],[22800,7950],[22800,7750],[22000,7750],[22000,7950]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22400,"y":7950},pointTo:{"x":22800,"y":7950},xv:150,yv:0,path:[[44800,15900,5],[45600,15900,5],[45600,15500,5],[44000,15500,5],[44000,15900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:45200,y:15900,w:200,h:200,points:[[22600,7950],[22800,7950],[22800,7750],[22000,7750],[22000,7950]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22600,"y":7950},pointTo:{"x":22800,"y":7950},xv:150,yv:0,path:[[45200,15900,5],[45600,15900,5],[45600,15500,5],[44000,15500,5],[44000,15900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:45600,y:15900,w:200,h:200,points:[[22800,7950],[22800,7750],[22000,7750],[22000,7950]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22800,"y":7950},pointTo:{"x":22800,"y":7750},xv:9.184850993605149e-15,yv:-150,path:[[45600,15900,5],[45600,15500,5],[44000,15500,5],[44000,15900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:45600,y:15500,w:200,h:200,points:[[22800,7750],[22000,7750],[22000,7950],[22800,7950]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22800,"y":7750},pointTo:{"x":22000,"y":7750},xv:-150,yv:1.8369701987210297e-14,path:[[45600,15500,5],[44000,15500,5],[44000,15900,5],[45600,15900,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:45200,y:15500,w:200,h:200,points:[[22600,7750],[22000,7750],[22000,7950],[22800,7950],[22800,7750]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22600,"y":7750},pointTo:{"x":22000,"y":7750},xv:-150,yv:1.8369701987210297e-14,path:[[45200,15500,5],[44000,15500,5],[44000,15900,5],[45600,15900,5],[45600,15500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44800,y:15500,w:200,h:200,points:[[22400,7750],[22000,7750],[22000,7950],[22800,7950],[22800,7750]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22400,"y":7750},pointTo:{"x":22000,"y":7750},xv:-150,yv:1.8369701987210297e-14,path:[[44800,15500,5],[44000,15500,5],[44000,15900,5],[45600,15900,5],[45600,15500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44400,y:15500,w:200,h:200,points:[[22200,7750],[22000,7750],[22000,7950],[22800,7950],[22800,7750]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22200,"y":7750},pointTo:{"x":22000,"y":7750},xv:-150,yv:1.8369701987210297e-14,path:[[44400,15500,5],[44000,15500,5],[44000,15900,5],[45600,15900,5],[45600,15500,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44000,y:15500,w:200,h:200,points:[[22000,7750],[22000,7950],[22800,7950],[22800,7750]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":22000,"y":7750},pointTo:{"x":22000,"y":7950},xv:9.184850993605149e-15,yv:150,path:[[44000,15500,5],[44000,15900,5],[45600,15900,5],[45600,15500,5]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[44900,17450],[45000,17600],[44900,17850],[44800,17600]],most:{"left":22400,"right":22500,"top":8725,"bottom":8925},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[44900,17050],[45000,17350],[44900,17450],[44800,17350]],most:{"left":22400,"right":22500,"top":8525,"bottom":8725},renderType:"poly",x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[45600,17250],[45600,17650],[45250,17450]],most:{"left":22625,"right":22800,"top":8625,"bottom":8825},renderType:"poly",x:null,y:null,})
C(2,[],[11],{type:[2,[],[11]],points:[[44200,17250],[44550,17450],[44200,17650]],most:{"left":22100,"right":22275,"top":8625,"bottom":8825},renderType:"poly",x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:45550,y:17650,w:100,h:100,points:[[22775,8825],[22500,9000]],speed:150,currentPoint:0,pointOn:{"x":22775,"y":8825},pointTo:{"x":22500,"y":9000},xv:-126.54922315981611,yv:80.53132382897391,path:[[45550,17650,5],[45000,18000,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:45550,y:17650,w:100,h:100,points:[[22775,8825],[22500,9000]],speed:150,currentPoint:1,pointOn:{"x":22500,"y":9000},pointTo:{"x":22775,"y":8825},xv:126.54922315981612,yv:-80.5313238289739,path:[[45550,17650,5],[45000,18000,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:44150,y:17650,w:100,h:100,points:[[22075,8825],[22350,9000]],speed:150,currentPoint:1,pointOn:{"x":22350,"y":9000},pointTo:{"x":22075,"y":8825},xv:-126.54922315981611,yv:-80.53132382897391,path:[[44150,17650,5],[44700,18000,5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:44150,y:17650,w:100,h:100,points:[[22075,8825],[22350,9000]],speed:150,currentPoint:0,pointOn:{"x":22075,"y":8825},pointTo:{"x":22350,"y":9000},xv:126.54922315981612,yv:80.5313238289739,path:[[44150,17650,5],[44700,18000,5]],})
var minX5149, minY5149, maxX5149, maxY5149;
    minX5149 = 44700;minY5149 = 18750;maxX5149 = 45100;maxY5149 = 19150;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5149) && (player.pos.x) < md(maxX5149) && (player.pos.y) > md(minY5149) && (player.pos.y) < md(maxY5149)) {
            colors.background="#520000"; colors.tile="#000000";
        }
    },});
C(1,[],[26],{type:[1,[],[26]],x:44750,y:18900,w:300,h:100,musicPath:"https://www.youtube.com/watch?v=vE5uEesakTU",volume:1,startTime:0,})
C(1,[],[9],{type:[1,[],[9]],x:44750,y:18800,w:300,h:300,spawn:{"x":22450,"y":9475},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:42800,y:19100,w:4100,h:400,canJump:true,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,17750],[44750,18100],[44750,19100],[44200,19100]],most:{"left":22100,"right":22375,"top":8875,"bottom":9550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45600,17750],[45600,19100],[45050,19100],[45050,18100]],most:{"left":22525,"right":22800,"top":8875,"bottom":9550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:44800,y:12600,w:200,h:100,tpx:42250,tpy:10350,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[14],{type:[1,[],[14]],x:48900,y:17800,w:1000,h:2000,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:105,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:30.45,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[13],{type:[1,[],[13]],x:48600,y:19100,w:200,h:200,force:4000,dir:{"x":0,"y":4000},direction:"down",conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.974789915966387,})
C(1,[],[12],{type:[1,[],[12]],x:48600,y:19300,w:200,h:100,tpx:49400,tpy:19750,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[9],{type:[1,[],[9]],x:41900,y:19700,w:8000,h:300,spawn:{"x":22950,"y":9925},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
var morphsStillMoving5=0;var morphTriggered5 = false;
    C(1,[],[3],{h:100,w:100,y:19800,x:49350,
        cr:(e)=>{
            ctx.globalAlpha = 0.8;
            if (morphTriggered5 === true) {
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
            morphTriggered5 = true;    
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:40000,y:0,w:2000,h:20000,canJump:true,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:48900,y:19900,w:1000,h:150,canCollide:true,boundPlayer:true,})
C(1,[],[26],{type:[1,[],[26]],x:29600,y:16800,w:200,h:200,musicPath:"https://www.youtube.com/watch?v=E8FQBjVlERk",volume:1,startTime:0,})
C(1,[],[19],{type:[1,[],[19]],x:31800,y:6500,w:200,h:1150,speedInc:0.65,speedChangePermanent:false,speedMult:0.65,})
C(1,[],[15],{type:[1,[],[15]],x:31800,y:6500,w:2000,h:1200,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:31800,y:6500,w:100,h:1200,rx:true,ry:true,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:35800,y:6500,w:1700,h:200,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[19],{type:[1,[],[19]],x:29400,y:300,w:2200,h:1450,speedInc:2,speedChangePermanent:false,speedMult:2,})
C(4,[],[0],{type:[4,[],[0]],x:30100,y:900,radius:500,startAngle:-1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[15050,150],[15050,-50]],"type":"poly","props":{}},endPolygon:{"points":[[14750,450.00000000000006],[14550,450.00000000000006]],"type":"poly","props":{}},innerRadius:600,toRotate:false,rotateSpeed:0,renderType:"circle",r:1000,startSliceAngle:-1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:29500,y:0,w:300,h:300,force:10000,dir:{"x":0,"y":-10000},direction:"up",conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(1,[],[12],{type:[1,[],[12]],x:33700,y:6850,w:100,h:450,tpx:35850,tpy:6600,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
var morphTriggered1 = false;
    C(1,[],[3],{h:100,w:100,y:7050,x:31800,
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
C(1,[],[17],{type:[1,[],[17]],x:27300,y:6600,w:2400,h:1100,time:0,maxTime:10,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:600,})
C(1,[],[14],{type:[1,[],[14]],x:27300,y:6600,w:2400,h:1100,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:180,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:52.199999999999996,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[12],{type:[1,[],[12]],x:27300,y:6500,w:2400,h:100,tpx:31850,tpy:7100,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[12],{type:[1,[],[12]],x:39200,y:4000,w:750,h:100,tpx:28500,tpy:6700,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[19],{type:[1,[],[19]],x:36800,y:3100,w:200,h:1600,speedInc:0.1,speedChangePermanent:false,speedMult:0.1,})
C(1,[],[17],{type:[1,[],[17]],x:33200,y:3100,w:1600,h:1600,time:0,maxTime:12,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:720,})
C(1,[],[26],{type:[1,[],[26]],x:27350,y:100,w:200,h:150,musicPath:"https://www.youtube.com/watch?v=PTZgxW_3LIQ",volume:1,startTime:0,})
C(1,[],[19],{type:[1,[],[19]],x:29900,y:3400,w:400,h:300,speedInc:0,speedChangePermanent:false,speedMult:0,})
C(1,[],[19],{type:[1,[],[19]],x:34500,y:4400,w:300,h:300,speedInc:0.65,speedChangePermanent:false,speedMult:0.65,})
C(1,[],[19],{type:[1,[],[19]],x:33000,y:0,w:500,h:300,speedInc:0,speedChangePermanent:false,speedMult:0,})
C(1,[],[19],{type:[1,[],[19]],x:38150,y:0,w:500,h:500,speedInc:0,speedChangePermanent:false,speedMult:0,})
C(1,[],[12],{type:[1,[],[12]],x:33200,y:3100,w:300,h:300,tpx:36900,tpy:3150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[20],{h:300,w:3100,y:3400,x:27300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#b40000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[13],{type:[1,[],[13]],x:27300,y:3400,w:3100,h:300,force:12000,dir:{"x":-12000,"y":0},direction:"left",conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:8.924369747899162,})
C(1,[],[20],{h:300,w:3100,y:3100,x:27300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#00b600";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[14],{type:[1,[],[14]],x:36800,y:0,w:3200,h:500,force:3600,dir:{"x":0,"y":3600},direction:"down",jumpHeight:240,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7779111644657865,jumpForce:69.6,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
var morphTriggered0 = false;
    C(1,[],[3],{h:500,w:500,y:0,x:38150,
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
C(1,[],[17],{type:[1,[],[17]],x:33000,y:0,w:1500,h:1500,time:0,maxTime:6,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[14],{type:[1,[],[14]],x:33000,y:0,w:1500,h:1500,force:3600,dir:{"x":0,"y":3600},direction:"down",jumpHeight:240,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.7779111644657865,jumpForce:69.6,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(0,[],[12],{type:[0,[],[12]],x:34500,y:0,r:250,tpx:38400,tpy:250,renderType:"circleR",})
C(1,[],[12],{type:[1,[],[12]],x:30000,y:250,w:200,h:450,tpx:33250,tpy:150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[13],{type:[1,[],[13]],x:29500,y:300,w:300,h:300,force:10000,dir:{"x":0,"y":10000},direction:"down",conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(1,[],[17],{x:25950,y:9300,w:14000,h:7350,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:3600,
        sf:(e)=>{
            const p = players[selfId];
            if(p.pos.x < 31200 && p.pos.y > 14800 && p.pos.y < 15300 && p.pos.x > 30300){
                e.timeTrapTime = e.timeTrapMaxTime;
            }
            if(e.timeTrapTime <= 0){
                players[selfId].pos.x = 30550;
                players[selfId].pos.y = 15050;
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
    });C(1,[],[0],{type:[1,[],[0]],x:35300,y:15700,w:4750,h:1400,canJump:true,isNormal:true,})
C(1,[],[14],{type:[1,[],[14]],x:35300,y:14100,w:4700,h:1600,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:152,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:44.08,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:true,})
C(1,[],[12],{type:[1,[],[12]],x:37300,y:11800,w:800,h:100,tpx:35650,tpy:15650,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[13],{type:[1,[],[13]],x:37300,y:11300,w:700,h:500,force:2500,dir:{"x":0,"y":-2500},direction:"up",conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.8592436974789912,})
C(1,[],[13],{type:[1,[],[13]],x:37300,y:9600,w:700,h:1700,force:4000,dir:{"x":0,"y":4000},direction:"down",conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.974789915966387,})
C(1,[],[25],{type:[1,[],[25]],x:37300,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18650,startY:5450,pusherId:0.37883095005885137,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[13],{type:[1,[],[13]],x:29600,y:9600,w:5700,h:700,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[2],{type:[1,[],[2]],x:35200,y:9750,w:150,h:300,effect:200,bounciness:133.33333333333334*16,decay:0.5,})
C(1,[],[13],{type:[1,[],[13]],x:31600,y:11100,w:2100,h:2000,force:2000,dir:{"x":0,"y":-2000},direction:"up",conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[12],{type:[1,[],[12]],x:30300,y:15400,w:500,h:450,tpx:27450,tpy:150,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,})
C(1,[],[13],{type:[1,[],[13]],x:33000,y:13100,w:700,h:1400,force:5000,dir:{"x":0,"y":-5000},direction:"up",conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[13],{type:[1,[],[13]],x:29500,y:11100,w:2100,h:3400,force:2000,dir:{"x":0,"y":2000},direction:"down",conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[12],{type:[1,[],[12]],x:29600,y:13000,w:750,h:100,tpx:29650,tpy:9950,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[13],{type:[1,[],[13]],x:29600,y:14800,w:2500,h:500,force:5000,dir:{"x":5000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[1],{type:[1,[],[1]],x:29600,y:14800,w:700,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:0,y:8100,w:19900,h:2800,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[12],{type:[1,[],[12]],x:19700,y:10000,w:200,h:900,tpx:100,tpy:12200,bgColor:"#16181d",tileColor:"#303030",changeColor:false,})
C(1,[],[20],{h:600,w:200,y:10050,x:19700,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#bc0000";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });

    C(1,[],[12],{x:36400,y:14700,w:2600,h:100,tpx:39400,tpy:14300});
C(1,[],[13],{type:[1,[],[13]],x:0,y:10000,w:20000,h:900,force:12000,dir:{"x":12000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:8.924369747899162,})
C(1,[],[15],{type:[1,[],[15]],x:0,y:4000,w:19600,h:1000,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:4000,w:16900,h:1000,force:6000,dir:{"x":6000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.462184873949581,})
C(1,[],[15],{type:[1,[],[15]],x:100,y:6000,w:19900,h:1100,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:200,y:400,w:19800,h:1100,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[15],{type:[1,[],[15]],x:100,y:2400,w:19600,h:1000,rx:true,ry:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:100,y:2400,w:19600,h:1000,force:6000,dir:{"x":6000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.462184873949581,})
C(1,[],[16],{type:[1,[],[16]],x:50,y:2400,w:12150,h:1200,snapDistance:100,snapWait:0.25,snapX:false,snapY:true,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:15,snapDistanceY:200,snapDistanceX:200,toSnapX:false,toSnapY:true,})
C(1,[],[1],{type:[1,[],[1]],x:10800,y:2800,w:200,h:200,canCollide:true,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:500,w:7900,h:800,force:5050,dir:{"x":5050,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7556722689075634,})
C(1,[],[17],{type:[1,[],[17]],x:12200,y:2400,w:7500,h:1000,time:0,maxTime:6,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(2,[],[1],{type:[2,[],[1]],points:[[9500,4500],[9850,4650],[9500,4800]],most:{"left":4750,"right":4925,"top":2250,"bottom":2400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:19000,y:6000,w:800,h:1100,rx:false,ry:true,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:6000,w:18000,h:1100,force:6500,dir:{"x":6500,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:4.834033613445379,})
C(1,[],[16],{type:[1,[],[16]],x:0,y:6250,w:10300,h:600,snapDistance:75,snapWait:0.2,snapX:false,snapY:true,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:12,snapDistanceY:150,snapDistanceX:150,toSnapX:false,toSnapY:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[300,2400],[1100,2400],[1000,2500],[300,2500]],most:{"left":150,"right":550,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:300,y:2400,w:700,h:100,canCollide:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[300,2400],[1100,2400],[1000,2500],[300,2500]],most:{"left":150,"right":550,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[300,3300],[1000,3300],[1100,3400],[300,3400]],most:{"left":150,"right":550,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:17000,y:4300,w:2800,h:700,force:875,dir:{"x":875,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.650735294117647,})
C(1,[],[13],{type:[1,[],[13]],x:7900,y:400,w:2500,h:1000,force:8000,dir:{"x":8000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.949579831932774,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:400,w:7100,h:1000,force:9000,dir:{"x":9000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:6.69327731092437,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:-800,w:200,h:1800,spawn:{"x":50,"y":50},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:1150,w:4800,h:400,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-150,y:-500,w:500,h:450,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:-100,w:21650,h:500,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:1300,w:5300,h:100,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1400,w:20050,h:1000,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:200,w:350,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-150,y:-750,w:700,h:750,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:-300,w:1500,h:700,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:-50,w:4800,h:300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:550,w:250,h:250,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:1000,w:300,h:150,canJump:true,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,650],[400,650],[200,800]],most:{"left":100,"right":200,"top":325,"bottom":400},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,1000],[400,1150],[200,1150]],most:{"left":100,"right":200,"top":500,"bottom":575},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:450,w:4600,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:400,w:300,h:250,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:-950,w:550,h:400,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:10400,y:400,w:2400,h:1000,force:5000,dir:{"x":5000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:2400,w:150,h:1000,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:3400,w:20100,h:900,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:5000,w:20100,h:1000,canJump:true,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:19600,y:4300,w:400,h:700,tpx:100,tpy:6550,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,})
C(1,[],[12],{type:[1,[],[12]],x:19700,y:2400,w:300,h:1000,tpx:50,tpy:4650,bgColor:"#0d0d0d",tileColor:"#202020",changeColor:false,})
C(1,[],[13],{type:[1,[],[13]],x:16900,y:4300,w:100,h:700,force:50,dir:{"x":50,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.03718487394957983,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:6000,w:10350,h:300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:6800,w:10350,h:300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:7100,w:20000,h:1000,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:1400,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:4000,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:5200,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:6500,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:10200,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:11500,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:13300,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:14000,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:7700,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:12100,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:8800,y:6300,w:100,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:12700,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:15200,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:15900,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:16600,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:17300,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:18000,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:14600,y:6000,w:100,h:1100,force:2000,dir:{"x":2000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[13],{type:[1,[],[13]],x:18000,y:6000,w:1900,h:1100,force:5000,dir:{"x":5000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.7184873949579824,})
C(1,[],[12],{type:[1,[],[12]],x:19800,y:6000,w:200,h:1100,tpx:50,tpy:8550,bgColor:"#0d0d0d",tileColor:"#202020",changeColor:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,6300],[100,6300],[0,6500]],most:{"left":0,"right":50,"top":3150,"bottom":3250},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[0,6600],[100,6800],[0,6800]],most:{"left":0,"right":50,"top":3300,"bottom":3400},renderType:"poly",x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:600,y:2900,radius:500,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[300,1700],[300.00000000000006,1950]],"type":"poly","props":{}},endPolygon:{"points":[[299.99999999999994,1200],[299.9999999999999,950]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",r:1000,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[4700,1150],[4850,1300],[4700,1300]],most:{"left":2350,"right":2425,"top":575,"bottom":650},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4700,500],[4850,500],[4700,650]],most:{"left":2350,"right":2425,"top":250,"bottom":325},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7900,1300],[8000,1400],[7900,1400]],most:{"left":3950,"right":4000,"top":650,"bottom":700},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7900,400],[8000,400],[7900,500]],most:{"left":3950,"right":4000,"top":200,"bottom":250},renderType:"poly",x:null,y:null,})
var minX5154, minY5154, maxX5154, maxY5154;
    minX5154 = -150;minY5154 = 550;maxX5154 = 300;maxY5154 = 1250;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5154) && (player.pos.x) < md(maxX5154) && (player.pos.y) > md(minY5154) && (player.pos.y) < md(maxY5154)) {
            colors.background="#303030"; colors.tile="#16181d";
        }
    },});
var minX5155, minY5155, maxX5155, maxY5155;
    minX5155 = -300;minY5155 = 8400;maxX5155 = 200;maxY5155 = 8700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5155) && (player.pos.x) < md(maxX5155) && (player.pos.y) > md(minY5155) && (player.pos.y) < md(maxY5155)) {
            colors.background="#bc0000"; colors.tile="#720000";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[500,6650],[700,6650],[750,6700],[700,6750],[500,6750],[450,6700]],most:{"left":225,"right":375,"top":3325,"bottom":3375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,6650],[1700,6650],[1750,6700],[1700,6750],[1500,6750],[1450,6700]],most:{"left":725,"right":875,"top":3325,"bottom":3375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,6650],[2700,6650],[2750,6700],[2700,6750],[2500,6750],[2450,6700]],most:{"left":1225,"right":1375,"top":3325,"bottom":3375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,6300],[3800,6300],[3850,6350],[3800,6400],[3600,6400],[3550,6350]],most:{"left":1775,"right":1925,"top":3150,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,6350],[6200,6350],[6250,6400],[6200,6450],[6000,6450],[5950,6400]],most:{"left":2975,"right":3125,"top":3175,"bottom":3225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4800,6650],[5000,6650],[5050,6700],[5000,6750],[4800,6750],[4750,6700]],most:{"left":2375,"right":2525,"top":3325,"bottom":3375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[500,6350],[700,6350],[750,6400],[700,6450],[500,6450],[450,6400]],most:{"left":225,"right":375,"top":3175,"bottom":3225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,6500],[1700,6500],[1750,6550],[1700,6600],[1500,6600],[1450,6550]],most:{"left":725,"right":875,"top":3250,"bottom":3300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2500,6300],[2700,6300],[2750,6350],[2700,6400],[2500,6400],[2450,6350]],most:{"left":1225,"right":1375,"top":3150,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,6500],[3800,6500],[3850,6550],[3800,6600],[3600,6600],[3550,6550]],most:{"left":1775,"right":1925,"top":3250,"bottom":3300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4800,6500],[5000,6500],[5050,6550],[5000,6600],[4800,6600],[4750,6550]],most:{"left":2375,"right":2525,"top":3250,"bottom":3300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,6650],[6200,6650],[6250,6700],[6200,6750],[6000,6750],[5950,6700]],most:{"left":2975,"right":3125,"top":3325,"bottom":3375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:6300,w:50,h:50,points:[[3600,3150],[3600,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3600,"y":3150},pointTo:{"x":3600,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7200,6300,5],[7200,6700,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9700,6300],[10300,6300],[10300,6500]],most:{"left":4850,"right":5150,"top":3150,"bottom":3250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6600],[10300,6800],[9700,6800]],most:{"left":4850,"right":5150,"top":3300,"bottom":3400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15300,6000],[19800,6000],[19800,6450]],most:{"left":7650,"right":9900,"top":3000,"bottom":3225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19800,6650],[19800,7100],[15300,7100]],most:{"left":7650,"right":9900,"top":3325,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:9000,w:20150,h:1000,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:8100,w:20000,h:900,force:12000,dir:{"x":12000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:8.924369747899162,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:10900,w:20250,h:1200,canJump:true,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,8100],[600,8100],[0,8500]],most:{"left":0,"right":300,"top":4050,"bottom":4250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,8600],[600,9000],[0,9000]],most:{"left":0,"right":300,"top":4300,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:100,y:8750,w:500,h:500,angle:0,rotateSpeed:0.10303030303030303,pivotX:350,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:500,y:8750,w:500,h:500,angle:0,rotateSpeed:0.10303030303030303,pivotX:750,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:900,y:8750,w:500,h:500,angle:0,rotateSpeed:0.10303030303030303,pivotX:1150,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1300,y:8750,w:500,h:500,angle:0,rotateSpeed:0.10303030303030303,pivotX:1550,pivotY:9000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:1250,y:7850,w:500,h:500,angle:0,rotateSpeed:-0.10303030303030303,pivotX:1500,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:900,y:7850,w:500,h:500,angle:0,rotateSpeed:-0.10303030303030303,pivotX:1150,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:500,y:7850,w:500,h:500,angle:0,rotateSpeed:-0.10303030303030303,pivotX:750,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:100,y:7850,w:500,h:500,angle:0,rotateSpeed:-0.10303030303030303,pivotX:350,pivotY:8100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:176.7766952966369,initialRotation:0,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:1000,y:6350,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2200,y:6500,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:3100,y:6650,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4300,y:6350,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:6050,y:6500,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[24],{type:[1,[],[24]],x:19000,y:6000,w:800,h:1100,ir:0.25,or:0.2,o:1,vc:{"r":0,"g":0,"b":0},innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.12,innerOpacity:0,outerOpacity:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[1800,8100],[2600,8100],[1800,8400]],most:{"left":900,"right":1300,"top":4050,"bottom":4200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2600,8600],[3600,9000],[1800,9000]],most:{"left":900,"right":1800,"top":4300,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2600,8100],[4600,8100],[3700,8500]],most:{"left":1300,"right":2300,"top":4050,"bottom":4250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5350,8400],[6600,9000],[3600,9000]],most:{"left":1800,"right":3300,"top":4200,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,8100],[8700,8100],[7300,8600]],most:{"left":3000,"right":4350,"top":4050,"bottom":4300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10100,8300],[12000,9000],[7600,9000]],most:{"left":3800,"right":6000,"top":4150,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11000,8100],[12900,8100],[12000,8500]],most:{"left":5500,"right":6450,"top":4050,"bottom":4250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14400,8200],[16500,9000],[12000,9000]],most:{"left":6000,"right":8250,"top":4100,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15400,8100],[18000,8100],[16600,8500]],most:{"left":7700,"right":9000,"top":4050,"bottom":4250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18050,8600],[19000,9000],[16700,9000]],most:{"left":8350,"right":9500,"top":4300,"bottom":4500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18000,8100],[20000,8100],[20000,8800],[19900,8800]],most:{"left":9000,"right":10000,"top":4050,"bottom":4400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:19900,y:8800,w:100,h:200,tpx:50,tpy:10350,bgColor:"#16181d",tileColor:"#303030",changeColor:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,4300],[500,4300],[0,4600]],most:{"left":0,"right":250,"top":2150,"bottom":2300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,4700],[500,5000],[0,5000]],most:{"left":0,"right":250,"top":2350,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1000,4550],[1200,4650],[1000,4750],[800,4650]],most:{"left":400,"right":600,"top":2275,"bottom":2375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1800,4550],[2000,4650],[1800,4750],[1600,4650]],most:{"left":800,"right":1000,"top":2275,"bottom":2375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,4300],[1600,4300],[1400,4450]],most:{"left":600,"right":800,"top":2150,"bottom":2225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2000,4300],[2400,4300],[2200,4450]],most:{"left":1000,"right":1200,"top":2150,"bottom":2225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1400,4850],[1600,5000],[1200,5000]],most:{"left":600,"right":800,"top":2425,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2200,4850],[2400,5000],[2000,5000]],most:{"left":1000,"right":1200,"top":2425,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,4600],[3500,4700],[2500,4650]],most:{"left":1250,"right":1750,"top":2300,"bottom":2350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:4600,w:250,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3500,y:4500,w:100,h:300,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4000,y:4400,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4100,y:4600,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4300,y:4400,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4600,y:4400,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:4400,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:4600,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:4700,y:4800,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5100,y:4400,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5200,y:4800,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5600,y:4400,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:5700,y:4800,w:200,h:100,canCollide:true,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:4100,w:100,h:100,points:[[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":1900,"y":2050},pointTo:{"x":1900,"y":2550},xv:2.039036920580343e-14,yv:333,path:[[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:4400,w:100,h:100,points:[[1900,2200],[1900,2550],[3000,2550],[3000,2050],[1900,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":1900,"y":2200},pointTo:{"x":1900,"y":2550},xv:2.039036920580343e-14,yv:333,path:[[3800,4400,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:4700,w:100,h:100,points:[[1900,2350],[1900,2550],[3000,2550],[3000,2050],[1900,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":1900,"y":2350},pointTo:{"x":1900,"y":2550},xv:2.039036920580343e-14,yv:333,path:[[3800,4700,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:5000,w:100,h:100,points:[[1900,2500],[1900,2550],[3000,2550],[3000,2050],[1900,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":1900,"y":2500},pointTo:{"x":1900,"y":2550},xv:2.039036920580343e-14,yv:333,path:[[3800,5000,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4000,y:5100,w:100,h:100,points:[[2000,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2000,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[4000,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:5100,w:100,h:100,points:[[2150,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2150,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[4300,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4600,y:5100,w:100,h:100,points:[[2300,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2300,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[4600,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:5100,w:100,h:100,points:[[2450,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2450,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[4900,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5200,y:5100,w:100,h:100,points:[[2600,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2600,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[5200,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5500,y:5100,w:100,h:100,points:[[2750,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2750,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[5500,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5800,y:5100,w:100,h:100,points:[[2900,2550],[3000,2550],[3000,2050],[1900,2050],[1900,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2900,"y":2550},pointTo:{"x":3000,"y":2550},xv:333,yv:0,path:[[5800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:6000,y:4900,w:100,h:100,points:[[3000,2450],[3000,2050],[1900,2050],[1900,2550],[3000,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":3000,"y":2450},pointTo:{"x":3000,"y":2050},xv:2.039036920580343e-14,yv:-333,path:[[6000,4900,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:6000,y:4600,w:100,h:100,points:[[3000,2300],[3000,2050],[1900,2050],[1900,2550],[3000,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":3000,"y":2300},pointTo:{"x":3000,"y":2050},xv:2.039036920580343e-14,yv:-333,path:[[6000,4600,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:6000,y:4300,w:100,h:100,points:[[3000,2150],[3000,2050],[1900,2050],[1900,2550],[3000,2550]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":3000,"y":2150},pointTo:{"x":3000,"y":2050},xv:2.039036920580343e-14,yv:-333,path:[[6000,4300,11.1],[6000,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5800,y:4100,w:100,h:100,points:[[2900,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2900,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[5800,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5500,y:4100,w:100,h:100,points:[[2750,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2750,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[5500,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5200,y:4100,w:100,h:100,points:[[2600,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2600,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[5200,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4900,y:4100,w:100,h:100,points:[[2450,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2450,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[4900,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4600,y:4100,w:100,h:100,points:[[2300,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2300,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[4600,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:4100,w:100,h:100,points:[[2150,2050],[1900,2050],[1900,2550],[3000,2550],[3000,2050]],speed:333,currentPoint:0,collidable:false,pointOn:{"x":2150,"y":2050},pointTo:{"x":1900,"y":2050},xv:-333,yv:4.078073841160686e-14,path:[[4300,4100,11.1],[3800,4100,11.1],[3800,5100,11.1],[6000,5100,11.1],[6000,4100,11.1]],boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:6300,y:4400,w:800,h:500,canCollide:true,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,4400],[7650,4650],[7100,4900]],most:{"left":3550,"right":3825,"top":2200,"bottom":2450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8200,4450],[8600,4650],[8200,4850],[7650,4650]],most:{"left":3825,"right":4300,"top":2225,"bottom":2425},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:7650,y:4650,r:30,renderType:"circleR",boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7450,4300],[7850,4300],[7650,4400]],most:{"left":3725,"right":3925,"top":2150,"bottom":2200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7650,4900],[7850,5000],[7450,5000]],most:{"left":3725,"right":3925,"top":2450,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10550,4550],[10850,4650],[10550,4750]],most:{"left":5275,"right":5425,"top":2275,"bottom":2375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10550,4550],[10550,4750],[10250,4650]],most:{"left":5125,"right":5275,"top":2275,"bottom":2375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:10550,y:4650,r:100,renderType:"circleR",boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9500,4500],[9500,4800],[9150,4650]],most:{"left":4575,"right":4750,"top":2250,"bottom":2400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:9500,y:4650,r:150,renderType:"circleR",boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:9500,y:4650,r:75,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:10550,y:4650,r:50,renderType:"circle",})
C(2,[],[1],{type:[2,[],[1]],points:[[9850,4300],[10350,4300],[10100,4450]],most:{"left":4925,"right":5175,"top":2150,"bottom":2225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10100,4850],[10350,5000],[9850,5000]],most:{"left":4925,"right":5175,"top":2425,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11350,4800],[11550,5000],[11150,5000]],most:{"left":5575,"right":5775,"top":2400,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11750,4800],[11950,5000],[11550,5000]],most:{"left":5775,"right":5975,"top":2400,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11150,4300],[11550,4300],[11350,4500]],most:{"left":5575,"right":5775,"top":2150,"bottom":2250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,4300],[11950,4300],[11750,4500]],most:{"left":5775,"right":5975,"top":2150,"bottom":2250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13050,4550],[14100,5000],[12000,5000]],most:{"left":6000,"right":7050,"top":2275,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13500,4300],[15600,4300],[14550,4700]],most:{"left":6750,"right":7800,"top":2150,"bottom":2350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15950,4600],[16900,5000],[14900,5000]],most:{"left":7450,"right":8450,"top":2300,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16150,4300],[17300,4300],[17100,4750]],most:{"left":8075,"right":8650,"top":2150,"bottom":2375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1450,3050],[1800,3400],[1100,3400]],most:{"left":550,"right":900,"top":1525,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1100,2400],[1800,2400],[1450,2750]],most:{"left":550,"right":900,"top":1200,"bottom":1375},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2050,2400],[2550,2400],[2300,2650]],most:{"left":1025,"right":1275,"top":1200,"bottom":1325},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2300,2900],[2800,3400],[1800,3400]],most:{"left":900,"right":1400,"top":1450,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2550,2400],[3550,2400],[3050,2900]],most:{"left":1275,"right":1775,"top":1200,"bottom":1450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3050,3150],[3300,3400],[2800,3400]],most:{"left":1400,"right":1650,"top":1575,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,3300],[4100,3400],[3900,3400]],most:{"left":1950,"right":2050,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4200,3300],[4300,3400],[4100,3400]],most:{"left":2050,"right":2150,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4400,3300],[4500,3400],[4300,3400]],most:{"left":2150,"right":2250,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4500,3300],[4600,3400],[4400,3400]],most:{"left":2200,"right":2300,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4300,3300],[4400,3400],[4200,3400]],most:{"left":2100,"right":2200,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4100,3300],[4200,3400],[4000,3400]],most:{"left":2000,"right":2100,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3900,3300],[4000,3400],[3800,3400]],most:{"left":1900,"right":2000,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3600,3100],[3900,3400],[3300,3400]],most:{"left":1650,"right":1950,"top":1550,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4850,2400],[5050,2400],[4950,2500]],most:{"left":2425,"right":2525,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5050,2400],[5250,2400],[5150,2500]],most:{"left":2525,"right":2625,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5250,2400],[5450,2400],[5350,2500]],most:{"left":2625,"right":2725,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5450,2400],[5650,2400],[5550,2500]],most:{"left":2725,"right":2825,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5650,2400],[5850,2400],[5750,2500]],most:{"left":2825,"right":2925,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5850,2400],[6050,2400],[5950,2500]],most:{"left":2925,"right":3025,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6050,2400],[6250,2400],[6150,2500]],most:{"left":3025,"right":3125,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6250,2400],[6450,2400],[6350,2500]],most:{"left":3125,"right":3225,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6350,2400],[6550,2400],[6450,2500]],most:{"left":3175,"right":3275,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6150,2400],[6350,2400],[6250,2500]],most:{"left":3075,"right":3175,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5950,2400],[6150,2400],[6050,2500]],most:{"left":2975,"right":3075,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5750,2400],[5950,2400],[5850,2500]],most:{"left":2875,"right":2975,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5550,2400],[5750,2400],[5650,2500]],most:{"left":2775,"right":2875,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5350,2400],[5550,2400],[5450,2500]],most:{"left":2675,"right":2775,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5150,2400],[5350,2400],[5250,2500]],most:{"left":2575,"right":2675,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4950,2400],[5150,2400],[5050,2500]],most:{"left":2475,"right":2575,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4750,2400],[4950,2400],[4850,2500]],most:{"left":2375,"right":2475,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3550,2400],[4850,2400],[4200,3050]],most:{"left":1775,"right":2425,"top":1200,"bottom":1525},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6250,2850],[6400,3000],[6250,3150],[6100,3000]],most:{"left":3050,"right":3200,"top":1425,"bottom":1575},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:6250,y:3000,r:112,renderType:"circleR",boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6250,2900],[6350,3050],[6150,3050]],most:{"left":3075,"right":3175,"top":1450,"bottom":1525},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6150,2950],[6350,2950],[6250,3100]],most:{"left":3075,"right":3175,"top":1475,"bottom":1550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:6250,y:3000,r:50,renderType:"circle",})
C(2,[],[1],{type:[2,[],[1]],points:[[6000,3300],[6100,3400],[5900,3400]],most:{"left":2950,"right":3050,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6200,3300],[6300,3400],[6100,3400]],most:{"left":3050,"right":3150,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6400,3300],[6500,3400],[6300,3400]],most:{"left":3150,"right":3250,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,3300],[6700,3400],[6500,3400]],most:{"left":3250,"right":3350,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6800,3300],[6900,3400],[6700,3400]],most:{"left":3350,"right":3450,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,3300],[7100,3400],[6900,3400]],most:{"left":3450,"right":3550,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7200,3300],[7300,3400],[7100,3400]],most:{"left":3550,"right":3650,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7400,3300],[7500,3400],[7300,3400]],most:{"left":3650,"right":3750,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7600,3300],[7700,3400],[7500,3400]],most:{"left":3750,"right":3850,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7800,3300],[7900,3400],[7700,3400]],most:{"left":3850,"right":3950,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8000,3300],[8100,3400],[7900,3400]],most:{"left":3950,"right":4050,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7900,3300],[8000,3400],[7800,3400]],most:{"left":3900,"right":4000,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7700,3300],[7800,3400],[7600,3400]],most:{"left":3800,"right":3900,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7500,3300],[7600,3400],[7400,3400]],most:{"left":3700,"right":3800,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7300,3300],[7400,3400],[7200,3400]],most:{"left":3600,"right":3700,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7100,3300],[7200,3400],[7000,3400]],most:{"left":3500,"right":3600,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6900,3300],[7000,3400],[6800,3400]],most:{"left":3400,"right":3500,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6700,3300],[6800,3400],[6600,3400]],most:{"left":3300,"right":3400,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6500,3300],[6600,3400],[6400,3400]],most:{"left":3200,"right":3300,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6300,3300],[6400,3400],[6200,3400]],most:{"left":3100,"right":3200,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6100,3300],[6200,3400],[6000,3400]],most:{"left":3000,"right":3100,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5900,3300],[6000,3400],[5800,3400]],most:{"left":2900,"right":3000,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5200,2700],[5900,3400],[4500,3400]],most:{"left":2250,"right":2950,"top":1350,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8700,2700],[9400,3400],[8000,3400]],most:{"left":4000,"right":4700,"top":1350,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7800,2400],[8000,2400],[7900,2500]],most:{"left":3900,"right":4000,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6450,2400],[7900,2400],[7200,3100]],most:{"left":3225,"right":3950,"top":1200,"bottom":1550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8000,2400],[8200,2400],[8100,2500]],most:{"left":4000,"right":4100,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8200,2400],[8400,2400],[8300,2500]],most:{"left":4100,"right":4200,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8400,2400],[8600,2400],[8500,2500]],most:{"left":4200,"right":4300,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8600,2400],[8800,2400],[8700,2500]],most:{"left":4300,"right":4400,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8500,2400],[8700,2400],[8600,2500]],most:{"left":4250,"right":4350,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8300,2400],[8500,2400],[8400,2500]],most:{"left":4150,"right":4250,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8100,2400],[8300,2400],[8200,2500]],most:{"left":4050,"right":4150,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7900,2400],[8100,2400],[8000,2500]],most:{"left":3950,"right":4050,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9350,2500],[9400,2600],[9350,2700],[9300,2600]],most:{"left":4650,"right":4700,"top":1250,"bottom":1350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9350,3100],[9400,3200],[9350,3300],[9300,3200]],most:{"left":4650,"right":4700,"top":1550,"bottom":1650},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9800,3300],[9850,3400],[9800,3500],[9750,3400]],most:{"left":4875,"right":4925,"top":1650,"bottom":1750},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9700,y:3400,w:200,h:150,canJump:true,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9800,2300],[9850,2400],[9800,2500],[9750,2400]],most:{"left":4875,"right":4925,"top":1150,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9700,y:2250,w:250,h:150,canJump:true,isNormal:true,})
C(0,[],[1],{boundPlayer:true,x:9770,y:2870,r:120, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:9830,y:2870,r:120, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:9770,y:2930,r:120, cr:()=>{}});
C(0,[],[1],{boundPlayer:true,x:9830,y:2930,r:120, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:9770,y:2750,w:60,h:300, cr:()=>{}});
C(1,[],[1],{boundPlayer:true,x:9650,y:2870,w:300,h:60, cr:()=>{}});
C(0,[],[3],{x:-1E9,y:1E9,r:1,cr:()=>{
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#c70000';
            ctx.roundRect(9650,2750,300,300,120);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }})
C(2,[],[1],{type:[2,[],[1]],points:[[9700,2800],[9800,2900],[9700,3000],[9600,2900]],most:{"left":4800,"right":4900,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9800,2900],[9900,3000],[9800,3100],[9700,3000]],most:{"left":4850,"right":4950,"top":1450,"bottom":1550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9900,2800],[10000,2900],[9900,3000],[9800,2900]],most:{"left":4900,"right":5000,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9800,2700],[9900,2800],[9800,2900],[9700,2800]],most:{"left":4850,"right":4950,"top":1350,"bottom":1450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9800,2800],[9900,2900],[9800,3000],[9700,2900]],most:{"left":4850,"right":4950,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:9800,y:2900,radius:30,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[4918,1450],[4930,1450]],"type":"poly","props":{}},endPolygon:{"points":[[4900,1468],[4900,1480]],"type":"poly","props":{}},innerRadius:36,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:60,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:9800,y:2900,radius:30,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[4882,1450],[4870,1450]],"type":"poly","props":{}},endPolygon:{"points":[[4900,1432],[4900,1420]],"type":"poly","props":{}},innerRadius:36,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:60,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(2,[],[1],{type:[2,[],[1]],points:[[10250,3100],[10300,3200],[10250,3300],[10200,3200]],most:{"left":5100,"right":5150,"top":1550,"bottom":1650},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10250,2500],[10300,2600],[10250,2700],[10200,2600]],most:{"left":5100,"right":5150,"top":1250,"bottom":1350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10800,2800],[11000,2900],[10900,3000]],most:{"left":5400,"right":5500,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,2750],[11450,2800],[11400,2900],[11350,2800]],most:{"left":5675,"right":5725,"top":1375,"bottom":1450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,2900],[11450,3000],[11400,3050],[11350,3000]],most:{"left":5675,"right":5725,"top":1450,"bottom":1525},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11400,2800],[11500,2900],[11400,3000],[11300,2900]],most:{"left":5650,"right":5750,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12200,2900],[12250,3000],[12200,3050],[12150,3000]],most:{"left":6075,"right":6125,"top":1450,"bottom":1525},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12200,2750],[12250,2800],[12200,2900],[12150,2800]],most:{"left":6075,"right":6125,"top":1375,"bottom":1450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12200,2800],[12300,2900],[12200,3000],[12100,2900]],most:{"left":6050,"right":6150,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12050,2400],[12250,2400],[12150,2500]],most:{"left":6025,"right":6125,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12250,2400],[12450,2400],[12350,2500]],most:{"left":6125,"right":6225,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12150,2400],[12350,2400],[12250,2500]],most:{"left":6075,"right":6175,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11950,2400],[12150,2400],[12050,2500]],most:{"left":5975,"right":6075,"top":1200,"bottom":1250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,2400],[12050,2400],[11800,2650]],most:{"left":5775,"right":6025,"top":1200,"bottom":1325},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12150,3300],[12250,3400],[12050,3400]],most:{"left":6025,"right":6125,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12050,3300],[12150,3400],[11950,3400]],most:{"left":5975,"right":6075,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12350,3300],[12450,3400],[12250,3400]],most:{"left":6125,"right":6225,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12250,3300],[12350,3400],[12150,3400]],most:{"left":6075,"right":6175,"top":1650,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11800,3150],[12050,3400],[11550,3400]],most:{"left":5775,"right":6025,"top":1575,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[16100,3100],[19700,3400],[12500,3400]],most:{"left":6250,"right":9850,"top":1550,"bottom":1700},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12500,2400],[19700,2400],[16100,2700]],most:{"left":6250,"right":9850,"top":1200,"bottom":1350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12600,2700],[15800,2900],[12600,3100],[12450,2900]],most:{"left":6225,"right":7900,"top":1350,"bottom":1550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[19700,2700],[19700,3100],[16400,2900]],most:{"left":8200,"right":9850,"top":1350,"bottom":1550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1400,750],[1550,900],[1400,1050],[1250,900]],most:{"left":625,"right":775,"top":375,"bottom":525},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2100,750],[2250,900],[2100,1050],[1950,900]],most:{"left":975,"right":1125,"top":375,"bottom":525},renderType:"poly",x:null,y:null,boundPlayer:true,})
shared.morphsTriggered[1]=false;C(1,[],[3],{h:100,w:100,y:650,x:1350,
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
                },
                sf:(o,p)=>{
                    if(p.pos.x < 250 && p.pos.y < 450){
                        shared.morphsTriggered[1]=false;
                    }    
                }
            }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[1] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[2]=false;C(1,[],[3],{h:100,w:100,y:1050,x:1350,
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
                },
                sf:(o,p)=>{
                    if(p.pos.x < 250 && p.pos.y < 450){
                        shared.morphsTriggered[2]=false;
                    }    
                }
            }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[2]=false;var x2=2050;C(1,[],[0],{y:650,x:2050,w:100,h:100,
                cr:(o)=>{
                    ctx.beginPath();
                    ctx.rect(x2, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                    ctx.globalAlpha = 1;
                    if(shared.morphsTriggered[2] === true){
                        o.pos.x = -1E9;
                        ctx.globalAlpha = 0.3;
                    } else {
                        o.pos.x = 2050;
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
shared.morphsTriggered[1]=false;var x1=2050;C(1,[],[0],{y:1050,x:2050,w:100,h:100,
                cr:(o)=>{
                    ctx.beginPath();
                    ctx.rect(x1, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                    ctx.globalAlpha = 1;
                    if(shared.morphsTriggered[1] === true){
                        o.pos.x = -1E9;
                        ctx.globalAlpha = 0.3;
                    } else {
                        o.pos.x = 2050;
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
C(1,[],[17],{type:[1,[],[17]],x:1200,y:650,w:1200,h:500,time:0,maxTime:1.24,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:74.4,})
C(2,[],[1],{type:[2,[],[1]],points:[[2900,850],[3100,1150],[2700,1150]],most:{"left":1350,"right":1550,"top":425,"bottom":575},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3550,800],[3700,900],[3550,1000],[3400,900]],most:{"left":1700,"right":1850,"top":400,"bottom":500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[5],[1],{h:50,w:400,y:875,x:3350,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 3550,
        pivotY: 900
    });
    C(0,[],[0],{x:3550,y:900,r:50,cr:(e)=>{
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
    }});C(2,[],[1],{type:[2,[],[1]],points:[[4000,650],[4400,650],[4200,950]],most:{"left":2000,"right":2200,"top":325,"bottom":475},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[5150,600],[5130.901699437495,629.3892626146237],[5080.901699437495,647.5528258147576],[5019.098300562505,647.5528258147576],[4969.098300562505,629.3892626146237],[4950,600],[4969.098300562505,570.6107373853763],[5019.098300562505,552.4471741852424],[5080.901699437495,552.4471741852424],[5130.901699437495,570.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5050,600,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[5150,900],[5130.901699437495,929.3892626146237],[5080.901699437495,947.5528258147576],[5019.098300562505,947.5528258147576],[4969.098300562505,929.3892626146237],[4950,900],[4969.098300562505,870.6107373853763],[5019.098300562505,852.4471741852424],[5080.901699437495,852.4471741852424],[5130.901699437495,870.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5050,900,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[5150,1200],[5130.901699437495,1229.3892626146237],[5080.901699437495,1247.5528258147576],[5019.098300562505,1247.5528258147576],[4969.098300562505,1229.3892626146237],[4950,1200],[4969.098300562505,1170.6107373853763],[5019.098300562505,1152.4471741852424],[5080.901699437495,1152.4471741852424],[5130.901699437495,1170.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5050,1200,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[5600,1050],[5580.901699437495,1079.3892626146237],[5530.901699437495,1097.5528258147576],[5469.098300562505,1097.5528258147576],[5419.098300562505,1079.3892626146237],[5400,1050],[5419.098300562505,1020.6107373853763],[5469.098300562505,1002.4471741852424],[5530.901699437495,1002.4471741852424],[5580.901699437495,1020.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5500,1050,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[5600,750],[5580.901699437495,779.3892626146237],[5530.901699437495,797.5528258147576],[5469.098300562505,797.5528258147576],[5419.098300562505,779.3892626146237],[5400,750],[5419.098300562505,720.6107373853763],[5469.098300562505,702.4471741852424],[5530.901699437495,702.4471741852424],[5580.901699437495,720.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5500,750,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6050,600],[6030.901699437495,629.3892626146237],[5980.901699437495,647.5528258147576],[5919.098300562505,647.5528258147576],[5869.098300562505,629.3892626146237],[5850,600],[5869.098300562505,570.6107373853763],[5919.098300562505,552.4471741852424],[5980.901699437495,552.4471741852424],[6030.901699437495,570.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5950,600,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6050,900],[6030.901699437495,929.3892626146237],[5980.901699437495,947.5528258147576],[5919.098300562505,947.5528258147576],[5869.098300562505,929.3892626146237],[5850,900],[5869.098300562505,870.6107373853763],[5919.098300562505,852.4471741852424],[5980.901699437495,852.4471741852424],[6030.901699437495,870.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5950,900,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6050,1200],[6030.901699437495,1229.3892626146237],[5980.901699437495,1247.5528258147576],[5919.098300562505,1247.5528258147576],[5869.098300562505,1229.3892626146237],[5850,1200],[5869.098300562505,1170.6107373853763],[5919.098300562505,1152.4471741852424],[5980.901699437495,1152.4471741852424],[6030.901699437495,1170.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(5950,1200,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6500,750],[6480.901699437495,779.3892626146237],[6430.901699437495,797.5528258147576],[6369.098300562505,797.5528258147576],[6319.098300562505,779.3892626146237],[6300,750],[6319.098300562505,720.6107373853763],[6369.098300562505,702.4471741852424],[6430.901699437495,702.4471741852424],[6480.901699437495,720.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6400,750,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6500,1050],[6480.901699437495,1079.3892626146237],[6430.901699437495,1097.5528258147576],[6369.098300562505,1097.5528258147576],[6319.098300562505,1079.3892626146237],[6300,1050],[6319.098300562505,1020.6107373853763],[6369.098300562505,1002.4471741852424],[6430.901699437495,1002.4471741852424],[6480.901699437495,1020.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6400,1050,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6750,1250],[6730.901699437495,1279.3892626146237],[6680.901699437495,1297.5528258147576],[6619.098300562505,1297.5528258147576],[6569.098300562505,1279.3892626146237],[6550,1250],[6569.098300562505,1220.6107373853763],[6619.098300562505,1202.4471741852424],[6680.901699437495,1202.4471741852424],[6730.901699437495,1220.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6650,1250,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[6750,550],[6730.901699437495,579.3892626146237],[6680.901699437495,597.5528258147576],[6619.098300562505,597.5528258147576],[6569.098300562505,579.3892626146237],[6550,550],[6569.098300562505,520.6107373853763],[6619.098300562505,502.4471741852423],[6680.901699437495,502.4471741852423],[6730.901699437495,520.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6650,550,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7050,750],[7030.901699437495,779.3892626146237],[6980.901699437495,797.5528258147576],[6919.098300562505,797.5528258147576],[6869.098300562505,779.3892626146237],[6850,750],[6869.098300562505,720.6107373853763],[6919.098300562505,702.4471741852424],[6980.901699437495,702.4471741852424],[7030.901699437495,720.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6950,750,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7050,1050],[7030.901699437495,1079.3892626146237],[6980.901699437495,1097.5528258147576],[6919.098300562505,1097.5528258147576],[6869.098300562505,1079.3892626146237],[6850,1050],[6869.098300562505,1020.6107373853763],[6919.098300562505,1002.4471741852424],[6980.901699437495,1002.4471741852424],[7030.901699437495,1020.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6950,1050,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7400,900],[7380.901699437495,929.3892626146237],[7330.901699437495,947.5528258147576],[7269.098300562505,947.5528258147576],[7219.098300562505,929.3892626146237],[7200,900],[7219.098300562505,870.6107373853763],[7269.098300562505,852.4471741852424],[7330.901699437495,852.4471741852424],[7380.901699437495,870.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(7300,900,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7750,750],[7730.901699437495,779.3892626146237],[7680.901699437495,797.5528258147576],[7619.098300562505,797.5528258147576],[7569.098300562505,779.3892626146237],[7550,750],[7569.098300562505,720.6107373853763],[7619.098300562505,702.4471741852424],[7680.901699437495,702.4471741852424],[7730.901699437495,720.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(7650,750,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7750,1050],[7730.901699437495,1079.3892626146237],[7680.901699437495,1097.5528258147576],[7619.098300562505,1097.5528258147576],[7569.098300562505,1079.3892626146237],[7550,1050],[7569.098300562505,1020.6107373853763],[7619.098300562505,1002.4471741852424],[7680.901699437495,1002.4471741852424],[7730.901699437495,1020.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(7650,1050,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(1,[],[29],{type:[1,[],[29]],x:8000,y:1100,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:8650,y:1100,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:8500,y:500,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:9150,y:750,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:9700,y:1200,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:10200,y:900,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:9800,y:500,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[11600,500],[12600,900],[11600,1300],[10700,900]],most:{"left":5350,"right":6300,"top":250,"bottom":650},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:12800,y:1100,w:8500,h:100,angle:-2.5,rotateSpeed:0,pivotX:17050,pivotY:1150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:2125.1470537353407,initialRotation:-0.04363323129985824,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:12800,y:600,w:8500,h:100,angle:2.5,rotateSpeed:0,pivotX:17050,pivotY:650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:2125.1470537353407,initialRotation:0.04363323129985824,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:19700,y:400,w:300,h:1000,tpx:150,tpy:2850,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,})
C(1,[],[0],{type:[1,[],[0]],x:20000,y:350,w:1350,h:1100,canJump:true,isNormal:true,})
var minX5157, minY5157, maxX5157, maxY5157;
    minX5157 = -250;minY5157 = 6200;maxX5157 = 250;maxY5157 = 6900;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5157) && (player.pos.x) < md(maxX5157) && (player.pos.y) > md(minY5157) && (player.pos.y) < md(maxY5157)) {
            colors.background="#613333"; colors.tile="#1d1616";
        }
    },});
C(0,[],[7],{type:[0,[],[7]],x:2200,y:4650,r:50,collected:false,renderType:"circle",color:"#d5d612",coinAmount:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6650],[10300,6800],[9900,6800]],most:{"left":4950,"right":5150,"top":3325,"bottom":3400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6700],[10300,6800],[10100,6800]],most:{"left":5050,"right":5150,"top":3350,"bottom":3400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6750],[10300,6800],[10250,6800]],most:{"left":5125,"right":5150,"top":3375,"bottom":3400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9900,6300],[10300,6300],[10300,6450]],most:{"left":4950,"right":5150,"top":3150,"bottom":3225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10100,6300],[10300,6300],[10300,6400]],most:{"left":5050,"right":5150,"top":3150,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10250,6300],[10300,6300],[10300,6350]],most:{"left":5125,"right":5150,"top":3150,"bottom":3175},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6600],[10950,6700],[10950,7100],[10300,7100]],most:{"left":5150,"right":5475,"top":3300,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,6600],[11550,7100],[10950,7100],[10950,6700]],most:{"left":5475,"right":5775,"top":3300,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12150,6500],[12150,7100],[11550,7100],[11550,6600]],most:{"left":5775,"right":6075,"top":3250,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12150,6500],[12750,6600],[12750,7100],[12150,7100]],most:{"left":6075,"right":6375,"top":3250,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12750,6600],[13350,6700],[13350,7100],[12750,7100]],most:{"left":6375,"right":6675,"top":3300,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13350,6700],[14050,6900],[14050,7100],[13350,7100]],most:{"left":6675,"right":7025,"top":3350,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14050,6900],[14650,6950],[14650,7100],[14050,7100]],most:{"left":7025,"right":7325,"top":3450,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14650,6950],[15250,7000],[15250,7100],[14650,7100]],most:{"left":7325,"right":7625,"top":3475,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14050,6500],[14150,6550],[14050,6600],[13950,6550]],most:{"left":6975,"right":7075,"top":3250,"bottom":3300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14650,6450],[14800,6550],[14650,6650],[14500,6550]],most:{"left":7250,"right":7400,"top":3225,"bottom":3325},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15250,6400],[15400,6550],[15250,6700],[15100,6550]],most:{"left":7550,"right":7700,"top":3200,"bottom":3350},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:10950,y:6900,r:200,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:11550,y:6850,r:250,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:12150,y:6800,r:300,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:12750,y:6850,r:250,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:13350,y:6900,r:200,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:14050,y:7000,r:100,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:14650,y:7025,r:75,renderType:"circle",})
C(2,[],[1],{type:[2,[],[1]],points:[[10300,6000],[10950,6000],[10950,6400],[10300,6500]],most:{"left":5150,"right":5475,"top":3000,"bottom":3250},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11000,2800],[10900,3000],[10800,2900]],most:{"left":5400,"right":5500,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10900,2800],[11000,2900],[10800,3000]],most:{"left":5400,"right":5500,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10900,2800],[11000,3000],[10800,2900]],most:{"left":5400,"right":5500,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[10900,2800],[11000,2900],[10900,3000],[10800,2900]],most:{"left":5400,"right":5500,"top":1400,"bottom":1500},renderType:"poly",x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:7250,y:6300,w:50,h:50,points:[[3625,3150],[3625,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3625,"y":3150},pointTo:{"x":3625,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7250,6300,5],[7250,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:6300,w:50,h:50,points:[[3650,3150],[3650,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3650,"y":3150},pointTo:{"x":3650,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7300,6300,5],[7300,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:6300,w:50,h:50,points:[[3650,3150],[3650,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3650,"y":3150},pointTo:{"x":3650,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7300,6300,5],[7300,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7350,y:6300,w:50,h:50,points:[[3675,3150],[3675,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3675,"y":3150},pointTo:{"x":3675,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7350,6300,5],[7350,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7400,y:6300,w:50,h:50,points:[[3700,3150],[3700,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3700,"y":3150},pointTo:{"x":3700,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7400,6300,5],[7400,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7450,y:6300,w:50,h:50,points:[[3725,3150],[3725,3350]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3725,"y":3150},pointTo:{"x":3725,"y":3350},xv:9.184850993605149e-15,yv:150,path:[[7450,6300,5],[7450,6700,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7450,y:6350,w:50,h:50,points:[[3725,3175],[3725,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3725,"y":3175},pointTo:{"x":3725,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7450,6350,5],[7450,6750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7400,y:6350,w:50,h:50,points:[[3700,3175],[3700,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3700,"y":3175},pointTo:{"x":3700,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7400,6350,5],[7400,6750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7350,y:6350,w:50,h:50,points:[[3675,3175],[3675,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3675,"y":3175},pointTo:{"x":3675,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7350,6350,5],[7350,6750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7300,y:6350,w:50,h:50,points:[[3650,3175],[3650,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3650,"y":3175},pointTo:{"x":3650,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7300,6350,5],[7300,6750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7250,y:6350,w:50,h:50,points:[[3625,3175],[3625,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3625,"y":3175},pointTo:{"x":3625,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7250,6350,5],[7250,6750,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:7200,y:6350,w:50,h:50,points:[[3600,3175],[3600,3375]],speed:150,currentPoint:0,collidable:true,pointOn:{"x":3600,"y":3175},pointTo:{"x":3600,"y":3375},xv:9.184850993605149e-15,yv:150,path:[[7200,6350,5],[7200,6750,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10950,6000],[11550,6000],[11550,6300],[10950,6400]],most:{"left":5475,"right":5775,"top":3000,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11550,6000],[12150,6000],[12150,6200],[11550,6300]],most:{"left":5775,"right":6075,"top":3000,"bottom":3150},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12150,6000],[12750,6000],[12750,6300],[12150,6200]],most:{"left":6075,"right":6375,"top":3000,"bottom":3150},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12750,6000],[13350,6000],[13350,6400],[12750,6300]],most:{"left":6375,"right":6675,"top":3000,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13350,6000],[14050,6000],[14050,6200],[13350,6400]],most:{"left":6675,"right":7025,"top":3000,"bottom":3200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14050,6000],[14650,6000],[14650,6150],[14050,6200]],most:{"left":7025,"right":7325,"top":3000,"bottom":3100},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14650,6000],[15250,6000],[15250,6100],[14650,6150]],most:{"left":7325,"right":7625,"top":3000,"bottom":3075},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:14650,y:6075,r:75,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:14050,y:6100,r:100,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:13350,y:6200,r:200,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:10950,y:6200,r:200,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:11550,y:6150,r:150,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:12150,y:6100,r:100,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:12750,y:6150,r:150,renderType:"circle",})
C(2,[],[1],{type:[2,[],[1]],points:[[0,10000],[2600,10000],[2100,10600]],most:{"left":0,"right":1300,"top":5000,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,10600],[1300,10900],[0,10900]],most:{"left":0,"right":650,"top":5300,"bottom":5450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4250,10400],[4700,10900],[2500,10900]],most:{"left":1250,"right":2350,"top":5200,"bottom":5450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4700,10000],[8100,10000],[6600,10300]],most:{"left":2350,"right":4050,"top":5000,"bottom":5150},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6600,10600],[8100,10900],[4700,10900]],most:{"left":2350,"right":4050,"top":5300,"bottom":5450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8550,10300],[9350,10450],[8550,10600],[7750,10450]],most:{"left":3875,"right":4675,"top":5150,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8750,10000],[12150,10000],[10650,10300]],most:{"left":4375,"right":6075,"top":5000,"bottom":5150},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10650,10600],[12150,10900],[8750,10900]],most:{"left":4375,"right":6075,"top":5300,"bottom":5450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[29],{type:[1,[],[29]],x:12400,y:10700,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:12400,y:10000,w:200,h:200,time:0,changeDeathTimerStateTo:true,deathTime:0,drainAmountWhileStandingOn:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[19900,10500],[19900,10900],[12800,10900]],most:{"left":6400,"right":9950,"top":5250,"bottom":5450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[12800,10000],[19900,10000],[19900,10400]],most:{"left":6400,"right":9950,"top":5000,"bottom":5200},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[0],{x:0,y:0,points:[[7100,4650],[7023.606797749979,4738.167787843871],[6823.606797749979,4792.658477444273],[6576.393202250021,4792.658477444273],[6376.393202250021,4738.167787843871],[6300,4650],[6376.393202250021,4561.832212156129],[6576.393202250021,4507.341522555727],[6823.606797749979,4507.341522555727],[7023.606797749979,4561.832212156129]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(6700,4650,400,150,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[7100,4650],[7023.606797749979,4738.167787843871],[6823.606797749979,4792.658477444273],[6576.393202250021,4792.658477444273],[6376.393202250021,4738.167787843871],[6300,4650],[6376.393202250021,4561.832212156129],[6576.393202250021,4507.341522555727],[6823.606797749979,4507.341522555727],[7023.606797749979,4561.832212156129]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(6700,4650,400,150,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[1],{boundPlayer:true,x:0,y:0,points:[[7050,4650],[6983.155948031232,4708.778525229247],[6808.155948031232,4745.105651629516],[6591.844051968768,4745.105651629516],[6416.844051968768,4708.778525229247],[6350,4650],[6416.844051968768,4591.221474770753],[6591.844051968768,4554.894348370484],[6808.155948031232,4554.894348370484],[6983.155948031232,4591.221474770753]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = '#c70000';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.ellipse(6700,4650,350,100,0,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }});
C(0,[],[0],{type:[0,[],[0]],x:6900,y:4650,r:100,renderType:"circle",})
C(2,[],[1],{type:[2,[],[1]],points:[[8900,4850],[9150,5000],[8650,5000]],most:{"left":4325,"right":4575,"top":2425,"bottom":2500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[8650,4300],[9150,4300],[8900,4450]],most:{"left":4325,"right":4575,"top":2150,"bottom":2225},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9800,y:11600,w:1400,h:500,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:20000,y:0,w:2400,h:20000,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:300,w:7900,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27300,y:7800,w:12850,h:1800,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27300,y:7700,w:12850,h:1900,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27300,y:8350,w:2300,h:12900,canJump:true,isNormal:true,})
C(1,[],[6],{type:[1,[],[6]],x:19900,y:10000,w:100,h:900,})
C(1,[],[9],{type:[1,[],[9]],x:30300,y:14800,w:500,h:1400,spawn:{"x":15275,"y":7750},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:29600,y:13100,w:2500,h:1700,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:30800,y:15300,w:1300,h:1800,canJump:true,isNormal:true,})
C(0,[],[0],{type:[0,[],[0]],x:31350,y:14650,r:316,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:31350,y:15450,r:316,renderType:"circle",})
C(2,[],[0],{type:[2,[],[0]],points:[[31350,14800],[32100,14800],[31450,14950]],most:{"left":15675,"right":16050,"top":7400,"bottom":7475},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[31450,15150],[32100,15300],[31350,15300]],most:{"left":15675,"right":16050,"top":7575,"bottom":7650},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:31900,y:16100,w:1900,h:1000,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:32100,y:13100,w:900,h:1400,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:33700,y:10300,w:1600,h:6800,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:29400,y:10300,w:4700,h:750,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:28400,y:10850,w:1850,h:700,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:33000,y:10850,w:1850,h:700,canJump:true,isNormal:true,})
C(1,[],[20],{h:750,w:1700,y:13000,x:29200,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#0d0d0d";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var minX5159, minY5159, maxX5159, maxY5159;
    minX5159 = 30300;minY5159 = 14800;maxX5159 = 30800;maxY5159 = 15300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5159) && (player.pos.x) < md(maxX5159) && (player.pos.y) > md(minY5159) && (player.pos.y) < md(maxY5159)) {
            colors.background="#383838"; colors.tile="#0d0d0d";
        }
    },});
C(1,[1],[12],{type:[1,[1],[12]],x:30100,y:13100,w:3100,h:100,tpx:30550,tpy:15050,angle:0,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:775.4031209635411,initialRotation:0,})
C(1,[1],[12],{type:[1,[1],[12]],x:33500,y:13100,w:200,h:100,tpx:30550,tpy:15050,angle:0,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:975,canCollide:true,renderType:"rotating",cullingRadius:1030.9016994374947,initialRotation:0,})
C(1,[],[0],{type:[1,[],[0]],x:30000,y:15800,w:850,h:1300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:30300,y:15300,w:500,h:100,canJump:true,isNormal:true,})
C(1,[],[20],{h:800,w:1700,y:15300,x:29500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#0d0d0d";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[1],[12],{type:[1,[1],[12]],x:33200,y:13100,w:300,h:100,tpx:30550,tpy:15050,angle:-157.5,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:850,canCollide:true,renderType:"rotating",cullingRadius:929.0569415042095,initialRotation:-2.748893571891069,})
C(1,[1],[12],{type:[1,[1],[12]],x:30000,y:13100,w:3300,h:100,tpx:30550,tpy:15050,angle:-45,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:825.3787009609589,initialRotation:-0.7853981633974483,})
C(1,[1],[12],{type:[1,[1],[12]],x:33400,y:13100,w:300,h:100,tpx:30550,tpy:15050,angle:-90,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:950,canCollide:true,renderType:"rotating",cullingRadius:1029.0569415042096,initialRotation:-1.5707963267948966,})
C(1,[1],[12],{type:[1,[1],[12]],x:33600,y:13100,w:100,h:100,tpx:30550,tpy:15050,angle:-45,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:1000,canCollide:true,renderType:"rotating",cullingRadius:1035.3553390593274,initialRotation:-0.7853981633974483,})
C(1,[1],[12],{type:[1,[1],[12]],x:33000,y:13100,w:100,h:100,tpx:30550,tpy:15050,angle:-90,rotateSpeed:0,pivotX:31650,pivotY:13150,distToPivot:700,canCollide:true,renderType:"rotating",cullingRadius:735.3553390593274,initialRotation:-1.5707963267948966,})
C(1,[0],[12],{type:[1,[0],[12]],x:30100,y:11500,w:100,h:100,points:[[15050,5750],[15400,6100]],speed:150,currentPoint:0,tpx:30550,tpy:15050,pointOn:{"x":15050,"y":5750},pointTo:{"x":15400,"y":6100},xv:106.06601717798213,yv:106.06601717798212,path:[[30100,11500,5],[30800,12200,5]],})
C(1,[0],[12],{type:[1,[0],[12]],x:30100,y:11500,w:100,h:100,points:[[15050,5750],[15400,6100]],speed:150,currentPoint:1,tpx:30550,tpy:15050,pointOn:{"x":15400,"y":6100},pointTo:{"x":15050,"y":5750},xv:-106.06601717798212,yv:-106.06601717798213,path:[[30100,11500,5],[30800,12200,5]],})
C(1,[0],[12],{type:[1,[0],[12]],x:30100,y:11500,w:100,h:100,points:[[15050,5750],[15225,5925],[15400,6100]],speed:150,currentPoint:1,tpx:30550,tpy:15050,pointOn:{"x":15225,"y":5925},pointTo:{"x":15400,"y":6100},xv:106.06601717798213,yv:106.06601717798212,path:[[30100,11500,5],[30450,11850,5],[30800,12200,5]],})
C(1,[0],[12],{type:[1,[0],[12]],x:30800,y:12200,w:100,h:100,points:[[15400,6100],[15225,5925],[15050,5750]],speed:150,currentPoint:1,tpx:30550,tpy:15050,pointOn:{"x":15225,"y":5925},pointTo:{"x":15050,"y":5750},xv:-106.06601717798212,yv:-106.06601717798213,path:[[30800,12200,5],[30450,11850,5],[30100,11500,5]],})
C(0,[],[0],{type:[0,[],[0]],x:31650,y:13150,r:1350,renderType:"circle",})
C(1,[],[0],{type:[1,[],[0]],x:29700,y:13050,w:1400,h:1550,canJump:true,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:31650,y:13150,radius:1325,startAngle:-3.3161255787892263,endAngle:0,startPolygon:{"points":[[14815.572053162487,6752.989382108603],[14520.129727258824,6805.083835408683]],"type":"poly","props":{}},endPolygon:{"points":[[16850,6575],[17150,6575]],"type":"poly","props":{}},innerRadius:2050,toRotate:false,rotateSpeed:0,renderType:"circle",r:2650,startSliceAngle:-3.3161255787892263,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[26],{type:[1,[],[26]],x:30800,y:14800,w:1300,h:500,musicPath:"https://www.youtube.com/watch?v=mrnipxEveG8",volume:1,startTime:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[30500,9900],[30700,10100],[30500,10100]],most:{"left":15250,"right":15350,"top":4950,"bottom":5050},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[30750,9600],[31550,9600],[31150,10000]],most:{"left":15375,"right":15775,"top":4800,"bottom":5000},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[31800,9900],[32200,10300],[31400,10300]],most:{"left":15700,"right":16100,"top":4950,"bottom":5150},renderType:"poly",x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:32950,y:9950,radius:175,startAngle:0,endAngle:0.7853981633974483,startPolygon:{"points":[[16475.01,4975],[16650,4975]],"type":"poly","props":{}},endPolygon:{"points":[[16475.007071067812,4975.007071067812],[16598.743686707647,5098.743686707646]],"type":"poly","props":{}},innerRadius:0.02,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:350,startSliceAngle:0,endSliceAngle:0.7853981633974483,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:32950,y:9950,radius:175,startAngle:1.5707963267948966,endAngle:2.356194490192345,startPolygon:{"points":[[16475,4975.01],[16475,5150]],"type":"poly","props":{}},endPolygon:{"points":[[16474.992928932188,4975.007071067812],[16351.256313292353,5098.743686707646]],"type":"poly","props":{}},innerRadius:0.02,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:350,startSliceAngle:1.5707963267948966,endSliceAngle:2.356194490192345,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:32950,y:9950,radius:175,startAngle:3.141592653589793,endAngle:3.9269908169872414,startPolygon:{"points":[[16474.99,4975],[16300,4975]],"type":"poly","props":{}},endPolygon:{"points":[[16474.992928932188,4974.992928932188],[16351.256313292353,4851.256313292354]],"type":"poly","props":{}},innerRadius:0.02,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:350,startSliceAngle:3.141592653589793,endSliceAngle:3.9269908169872414,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(4,[],[0],{type:[4,[],[0]],x:32950,y:9950,radius:175,startAngle:4.71238898038469,endAngle:5.497787143782138,startPolygon:{"points":[[16475,4974.99],[16475,4800]],"type":"poly","props":{}},endPolygon:{"points":[[16475.007071067812,4974.992928932188],[16598.743686707647,4851.256313292354]],"type":"poly","props":{}},innerRadius:0.02,toRotate:true,rotateSpeed:3.490658503988659,renderType:"circle",r:350,startSliceAngle:4.71238898038469,endSliceAngle:5.497787143782138,startSliceAngleRotateSpeed:0.02908882086657216,endSliceAngleRotateSpeed:0.02908882086657216,})
C(1,[0],[0],{type:[1,[0],[0]],x:33500,y:9400,w:200,h:200,points:[[16750,4700],[16750,5150],[16950,5150],[16950,4700]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16750,"y":4700},pointTo:{"x":16750,"y":5150},xv:3.429011037612589e-14,yv:560,path:[[33500,9400,18.666666666666668],[33500,10300,18.666666666666668],[33900,10300,18.666666666666668],[33900,9400,18.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:33500,y:9800,w:200,h:200,points:[[16750,4900],[16750,5150],[16950,5150],[16950,4700],[16750,4700]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16750,"y":4900},pointTo:{"x":16750,"y":5150},xv:3.429011037612589e-14,yv:560,path:[[33500,9800,18.666666666666668],[33500,10300,18.666666666666668],[33900,10300,18.666666666666668],[33900,9400,18.666666666666668],[33500,9400,18.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:33500,y:10200,w:200,h:200,points:[[16750,5100],[16750,5150],[16950,5150],[16950,4700],[16750,4700]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16750,"y":5100},pointTo:{"x":16750,"y":5150},xv:3.429011037612589e-14,yv:560,path:[[33500,10200,18.666666666666668],[33500,10300,18.666666666666668],[33900,10300,18.666666666666668],[33900,9400,18.666666666666668],[33500,9400,18.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:33800,y:10300,w:200,h:200,points:[[16900,5150],[16950,5150],[16950,4700],[16750,4700],[16750,5150]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16900,"y":5150},pointTo:{"x":16950,"y":5150},xv:560,yv:0,path:[[33800,10300,18.666666666666668],[33900,10300,18.666666666666668],[33900,9400,18.666666666666668],[33500,9400,18.666666666666668],[33500,10300,18.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:33900,y:10000,w:200,h:200,points:[[16950,5000],[16950,4700],[16750,4700],[16750,5150],[16950,5150]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16950,"y":5000},pointTo:{"x":16950,"y":4700},xv:3.429011037612589e-14,yv:-560,path:[[33900,10000,18.666666666666668],[33900,9400,18.666666666666668],[33500,9400,18.666666666666668],[33500,10300,18.666666666666668],[33900,10300,18.666666666666668]],})
C(1,[0],[0],{type:[1,[0],[0]],x:33900,y:9600,w:200,h:200,points:[[16950,4800],[16950,4700],[16750,4700],[16750,5150],[16950,5150]],speed:560,currentPoint:0,alongWith:false,pointOn:{"x":16950,"y":4800},pointTo:{"x":16950,"y":4700},xv:3.429011037612589e-14,yv:-560,path:[[33900,9600,18.666666666666668],[33900,9400,18.666666666666668],[33500,9400,18.666666666666668],[33500,10300,18.666666666666668],[33900,10300,18.666666666666668]],})
C(2,[],[0],{type:[2,[],[0]],points:[[34100,9600],[35300,9600],[35300,9900]],most:{"left":17050,"right":17650,"top":4800,"bottom":4950},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[35300,10000],[35300,10300],[34100,10300]],most:{"left":17050,"right":17650,"top":5000,"bottom":5150},renderType:"poly",x:null,y:null,})
C(2,[],[0],{x:0,y:0,points:[[29800,10300],[29761.80339887499,10476.335575687743],[29661.80339887499,10585.316954888545],[29538.19660112501,10585.316954888545],[29438.19660112501,10476.335575687743],[29400,10300],[29438.19660112501,10123.664424312257],[29538.19660112501,10014.683045111455],[29661.80339887499,10014.683045111455],[29761.80339887499,10123.664424312257]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(29600,10300,200,300,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[29800,9600],[29761.80339887499,9776.335575687743],[29661.80339887499,9885.316954888545],[29538.19660112501,9885.316954888545],[29438.19660112501,9776.335575687743],[29400,9600],[29438.19660112501,9423.664424312257],[29538.19660112501,9314.683045111455],[29661.80339887499,9314.683045111455],[29761.80339887499,9423.664424312257]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(29600,9600,200,300,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(1,[],[0],{type:[1,[],[0]],x:30350,y:10100,w:150,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:30250,y:10150,w:150,h:250,canJump:true,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[30250,10200],[30300,10350],[30100,10300]],most:{"left":15050,"right":15150,"top":5100,"bottom":5175},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[30500,9900],[30500,10100],[30100,10300]],most:{"left":15050,"right":15250,"top":4950,"bottom":5150},renderType:"poly",x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:30550,y:10100,w:50,h:200,tpx:37650,tpy:9750,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[0],{type:[1,[],[0]],x:35300,y:9600,w:2000,h:2300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:38000,y:9600,w:2000,h:2300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:35300,y:11900,w:4750,h:2200,canJump:false,isNormal:true,})
C(1,[],[20],{h:200,w:200,y:10100,x:30500,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#0d0d0d";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[8],{type:[1,[],[8]],x:30500,y:10100,w:200,h:200,coins:1,currentCoins:1,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[20],{x:30450,y:14950,w:200,h:200,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[7],{type:[1,[],[7]],x:35000,y:9900,w:100,h:100,collected:false,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{type:[0,[],[0]],x:36950,y:10200,r:750,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:38450,y:9450,r:750,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:38350,y:10350,r:500,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:36950,y:11650,r:452,renderType:"circle",})
C(0,[],[0],{type:[0,[],[0]],x:38350,y:11650,r:452,renderType:"circle",})
C(2,[],[0],{type:[2,[],[0]],points:[[37650,11550],[37750,11800],[37550,11800]],most:{"left":18775,"right":18875,"top":5775,"bottom":5900},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:37350,y:9550,w:500,h:150,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:35300,y:14800,w:4300,h:200,canJump:true,isNormal:true,})
C(0,[],[0],{type:[0,[],[0]],x:39600,y:14900,r:100,renderType:"circle",})
C(1,[],[0],{type:[1,[],[0]],x:39900,y:13950,w:300,h:1850,canJump:false,isNormal:true,})
C(4,[],[0],{type:[4,[],[0]],x:35650,y:15350,radius:252,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[17825,7850],[17825,7927]],"type":"poly","props":{}},endPolygon:{"points":[[17825,7500],[17825,7423]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",r:504,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[35350,14700],[35400,14800],[35300,14800]],most:{"left":17650,"right":17700,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[20],{h:250,w:850,y:11800,x:37300,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = "#0d0d0d";
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(2,[],[0],{type:[2,[],[0]],points:[[36200,15450],[36400,15700],[36000,15700]],most:{"left":18000,"right":18200,"top":7725,"bottom":7850},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:36600,y:15300,w:200,h:100,canJump:true,isNormal:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:37600,y:15200,w:200,h:100,points:[[18800,7600],[19250,7600]],speed:222,currentPoint:0,alongWith:false,pointOn:{"x":18800,"y":7600},pointTo:{"x":19250,"y":7600},xv:222,yv:0,path:[[37600,15200,7.4],[38500,15200,7.4]],})
C(1,[0],[0],{type:[1,[0],[0]],x:38600,y:15200,w:200,h:100,points:[[19300,7600],[19750,7600]],speed:222,currentPoint:1,alongWith:false,pointOn:{"x":19750,"y":7600},pointTo:{"x":19300,"y":7600},xv:-222,yv:2.718715894107124e-14,path:[[38600,15200,7.4],[39500,15200,7.4]],})
C(2,[],[0],{type:[2,[],[0]],points:[[39900,15050],[39900,15350],[39700,15200]],most:{"left":19850,"right":19950,"top":7525,"bottom":7675},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[37200,15200],[37400,15200],[37300,15300]],most:{"left":18600,"right":18700,"top":7600,"bottom":7650},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[39400,14400],[39650,14850],[39000,14800]],most:{"left":19500,"right":19825,"top":7200,"bottom":7425},renderType:"poly",x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:36750,y:14375,w:200,h:50,angle:0,rotateSpeed:-0.023468013468013468,pivotX:36850,pivotY:14400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,initialRotation:0,})
C(1,[1],[0],{type:[1,[1],[0]],x:37100,y:14375,w:200,h:50,angle:0,rotateSpeed:0.023468013468013468,pivotX:37200,pivotY:14400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,initialRotation:0,})
C(1,[0],[0],{type:[1,[0],[0]],x:37600,y:14400,w:200,h:100,points:[[18800,7200],[19450,7200]],speed:320.6666666666667,currentPoint:0,alongWith:false,pointOn:{"x":18800,"y":7200},pointTo:{"x":19450,"y":7200},xv:320.6666666666667,yv:0,path:[[37600,14400,10.68888888888889],[38900,14400,10.68888888888889]],})
C(1,[0],[0],{type:[1,[0],[0]],x:37600,y:14400,w:200,h:100,points:[[18800,7200],[19450,7200]],speed:320.6666666666667,currentPoint:1,alongWith:false,pointOn:{"x":19450,"y":7200},pointTo:{"x":18800,"y":7200},xv:-320.6666666666667,yv:3.927034069265846e-14,path:[[37600,14400,10.68888888888889],[38900,14400,10.68888888888889]],})
C(1,[],[0],{type:[1,[],[0]],x:36300,y:14300,w:100,h:100,canJump:true,isNormal:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[36150,14700],[36200,14800],[36100,14800]],tpx:35650,tpy:15650,most:{"left":18050,"right":18100,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[39650,14100],[39900,14100],[39900,14350]],most:{"left":19825,"right":19950,"top":7050,"bottom":7175},renderType:"poly",x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[35450,14700],[35500,14800],[35400,14800]],most:{"left":17700,"right":17750,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[35550,14700],[35600,14800],[35500,14800]],most:{"left":17750,"right":17800,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[12],{type:[2,[],[12]],points:[[36050,14700],[36100,14800],[36000,14800]],tpx:35650,tpy:15650,most:{"left":18000,"right":18050,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[35950,14700],[36000,14800],[35900,14800]],tpx:35650,tpy:15650,most:{"left":17950,"right":18000,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,})
C(2,[],[12],{type:[2,[],[12]],points:[[35850,14700],[35900,14800],[35800,14800]],tpx:35650,tpy:15650,most:{"left":17900,"right":17950,"top":7350,"bottom":7400},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:35600,y:14500,w:200,h:300,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:36300,y:14400,w:100,h:400,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:36200,y:14300,w:100,h:500,canJump:true,isNormal:true,})
C(1,[],[25],{type:[1,[],[25]],x:37400,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18700,startY:5450,pusherId:0.9903047454071776,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:37500,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18750,startY:5450,pusherId:0.5601322735221186,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:37600,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18800,startY:5450,pusherId:0.9836501521932559,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:37700,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18850,startY:5450,pusherId:0.27997317309338987,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:37800,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18900,startY:5450,pusherId:0.6259862316015967,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[25],{type:[1,[],[25]],x:37900,y:10900,w:100,h:100,dir:"up",max:150,pushBack:15,startX:18950,startY:5450,pusherId:0.17502818029997558,pushAngle:90,maxPushDistance:300,idlePushBackSpeed:12.5,positiveDirectionOnly:true,pushConversionRatio:0.86,})
C(1,[],[9],{type:[1,[],[9]],x:27300,y:0,w:300,h:300,spawn:{"x":13725,"y":75},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
var minX5163, minY5163, maxX5163, maxY5163;
    minX5163 = 27200;minY5163 = -100;maxX5163 = 27700;maxY5163 = 400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5163) && (player.pos.x) < md(maxX5163) && (player.pos.y) > md(minY5163) && (player.pos.y) < md(maxY5163)) {
            colors.background="#383838"; colors.tile="#000000";
        }
    },});
C(1,[0],[12],{type:[1,[0],[12]],x:27300,y:-300,w:300,h:300,points:[[13650,-150],[13650,-75]],speed:150,currentPoint:0,tpx:29650,tpy:150,pointOn:{"x":13650,"y":-150},pointTo:{"x":13650,"y":-75},xv:9.184850993605149e-15,yv:150,path:[[27300,-300,5],[27300,-150,5]],})
C(1,[],[0],{type:[1,[],[0]],x:27600,y:0,w:1900,h:400,canJump:true,isNormal:true,})
C(1,[0],[12],{type:[1,[0],[12]],x:27300,y:300,w:300,h:300,points:[[13650,150],[13650,75]],speed:150,currentPoint:0,tpx:29650,tpy:150,pointOn:{"x":13650,"y":150},pointTo:{"x":13650,"y":75},xv:9.184850993605149e-15,yv:-150,path:[[27300,300,5],[27300,150,5]],})
C(1,[],[0],{type:[1,[],[0]],x:27300,y:400,w:2200,h:2400,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27050,y:-400,w:900,h:350,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27250,y:1500,w:14300,h:1600,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:30700,y:-100,w:2300,h:1700,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:29800,y:-50,w:1200,h:350,canJump:true,isNormal:true,})
C(0,[],[0],{type:[0,[],[0]],x:30100,y:900,r:300,renderType:"circle",})
C(1,[],[0],{type:[1,[],[0]],x:29800,y:200,w:300,h:700,canJump:true,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:29500,y:800,w:1200,h:200,angle:-90,rotateSpeed:-0.051515151515151514,pivotX:30100,pivotY:900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:304.138126514911,initialRotation:-1.5707963267948966,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:29500,y:-600,w:300,h:600,points:[[14750,-300],[14750,-150]],speed:300,currentPoint:0,alongWith:false,pointOn:{"x":14750,"y":-300},pointTo:{"x":14750,"y":-150},xv:1.8369701987210297e-14,yv:300,path:[[29500,-600,10],[29500,-300,10]],})
C(1,[],[20],{h:350,w:400,y:-50,x:29450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:33500,y:0,w:300,h:900,canJump:false,isNormal:true,})
C(1,[],[10],{type:[1,[],[10]],x:33100,y:200,w:300,h:100,maxStrength:18,currentStrength:18,time:0,timer:0,regenTime:200,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:34000,y:1300,w:300,h:100,maxStrength:18,currentStrength:18,time:0,timer:0,regenTime:200,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:33000,y:1400,w:1500,h:100,canCollide:true,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[33000,0],[33200,0],[33000,200]],most:{"left":16500,"right":16600,"top":0,"bottom":100},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[33300,0],[33500,0],[33500,200]],most:{"left":16650,"right":16750,"top":0,"bottom":100},renderType:"poly",x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:33650,y:900,r:150,renderType:"circle",})
C(1,[],[10],{type:[1,[],[10]],x:34200,y:1000,w:300,h:100,maxStrength:18,currentStrength:18,time:0,timer:0,regenTime:200,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:34200,y:-300,w:600,h:300,canJump:true,isNormal:true,})
C(1,[],[10],{type:[1,[],[10]],x:33800,y:700,w:300,h:100,maxStrength:18,currentStrength:18,time:0,timer:0,regenTime:200,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:34000,y:400,w:300,h:100,maxStrength:18,currentStrength:18,time:0,timer:0,regenTime:200,healSpeed:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[33800,0],[34150,0],[33800,350]],most:{"left":16900,"right":17075,"top":0,"bottom":175},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:34500,y:-150,w:2300,h:1700,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:36750,y:500,w:3500,h:1150,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:40000,y:-350,w:500,h:1250,canJump:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:36700,y:-400,w:4300,h:400,canJump:false,isNormal:true,})
var morphTriggered0 = false;var morphOffset0 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:500,w:500,y:0,x:39500,
        path: [[39500,0,0],[36800,0,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 0;
            if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered0;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 28.666666666666668;
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
C(1,[],[12],{type:[1,[],[12]],x:36900,y:0,w:200,h:100,tpx:30250,tpy:3550,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[12],{type:[1,[],[12]],x:39700,y:0,w:200,h:100,tpx:30250,tpy:3550,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[1],{type:[1,[],[1]],x:36800,y:0,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:39900,y:0,w:100,h:500,canCollide:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:27300,y:3700,w:3100,h:1500,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:30400,y:3100,w:2800,h:2100,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:27300,y:3100,w:3100,h:300,force:13000,dir:{"x":13000,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:9.668067226890757,})
C(1,[],[0],{type:[1,[],[0]],x:30300,y:3400,w:200,h:400,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:27250,y:3050,w:150,h:350,canJump:true,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:27300,y:3400,w:100,h:300,canCollide:true,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:30300,y:3100,w:100,h:300,tpx:34650,tpy:4550,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[0],{type:[1,[],[0]],x:34800,y:3100,w:2000,h:1700,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:37000,y:3000,w:2000,h:1800,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:36800,y:3100,w:200,h:1600,force:8000,dir:{"x":0,"y":8000},direction:"down",conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:5.949579831932774,})
C(1,[],[12],{type:[1,[],[12]],x:36800,y:4600,w:200,h:100,tpx:39500,tpy:3250,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[10],{type:[1,[],[10]],x:36800,y:4300,w:200,h:100,maxStrength:48,currentStrength:48,time:0,timer:0,regenTime:333.3333333333333,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:38750,y:4150,w:1400,h:750,canJump:true,isNormal:true,})
C(1,[5],[1],{h:124,w:950,y:3538,x:39025,
        boundPlayer: true,
        restAngles: [0, 3.141592653589793],
        toRest: true,
        homingRotateSpeed: 0.03488372093023256,
        detectionRadius: 479.0292266657641,
        spokeAngles: [0, Math.PI],
        pivotX: 39500,
        pivotY: 3600
    });
    C(0,[],[0],{x:39500,y:3600,r:50,cr:(e)=>{
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
    }});C(0,[],[0],{type:[0,[],[0]],x:39500,y:3600,r:250,renderType:"circle",})
C(1,[],[0],{type:[1,[],[0]],x:29700,y:6250,w:1900,h:1550,canJump:true,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:29600,y:6600,w:100,h:1100,canCollide:true,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:27400,y:7500,w:300,h:100,points:[[13700,3750],[14650,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":13700,"y":3750},pointTo:{"x":14650,"y":3750},xv:240,yv:0,path:[[27400,7500,8],[29300,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:28000,y:7500,w:300,h:100,points:[[14000,3750],[14650,3750],[13700,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14000,"y":3750},pointTo:{"x":14650,"y":3750},xv:240,yv:0,path:[[28000,7500,8],[29300,7500,8],[27400,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:28600,y:7500,w:300,h:100,points:[[14300,3750],[14650,3750],[13700,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14300,"y":3750},pointTo:{"x":14650,"y":3750},xv:240,yv:0,path:[[28600,7500,8],[29300,7500,8],[27400,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:29200,y:7500,w:300,h:100,points:[[14600,3750],[14650,3750],[13700,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14600,"y":3750},pointTo:{"x":14650,"y":3750},xv:240,yv:0,path:[[29200,7500,8],[29300,7500,8],[27400,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:28800,y:7500,w:300,h:100,points:[[14400,3750],[13700,3750],[14650,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14400,"y":3750},pointTo:{"x":13700,"y":3750},xv:-240,yv:2.939152317953648e-14,path:[[28800,7500,8],[27400,7500,8],[29300,7500,8]],})
C(1,[],[1],{type:[1,[],[1]],x:27300,y:6600,w:100,h:1100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:27300,y:7600,w:2400,h:100,canCollide:true,boundPlayer:true,})
C(1,[0],[0],{type:[1,[0],[0]],x:28200,y:7500,w:300,h:100,points:[[14100,3750],[13700,3750],[14650,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14100,"y":3750},pointTo:{"x":13700,"y":3750},xv:-240,yv:2.939152317953648e-14,path:[[28200,7500,8],[27400,7500,8],[29300,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:27600,y:7500,w:300,h:100,points:[[13800,3750],[13700,3750],[14650,3750]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":13800,"y":3750},pointTo:{"x":13700,"y":3750},xv:-240,yv:2.939152317953648e-14,path:[[27600,7500,8],[27400,7500,8],[29300,7500,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:27400,y:6600,w:100,h:300,points:[[13700,3300],[13700,3600]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":13700,"y":3300},pointTo:{"x":13700,"y":3600},xv:1.469576158976824e-14,yv:240,path:[[27400,6600,8],[27400,7200,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:27500,y:6800,w:100,h:100,points:[[13750,3400],[13750,3700]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":13750,"y":3400},pointTo:{"x":13750,"y":3700},xv:1.469576158976824e-14,yv:240,path:[[27500,6800,8],[27500,7400,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:29500,y:6600,w:100,h:300,points:[[14750,3300],[14750,3600]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14750,"y":3300},pointTo:{"x":14750,"y":3600},xv:1.469576158976824e-14,yv:240,path:[[29500,6600,8],[29500,7200,8]],})
C(1,[0],[0],{type:[1,[0],[0]],x:29400,y:6800,w:100,h:100,points:[[14700,3400],[14700,3700]],speed:240,currentPoint:0,alongWith:false,pointOn:{"x":14700,"y":3400},pointTo:{"x":14700,"y":3700},xv:1.469576158976824e-14,yv:240,path:[[29400,6800,8],[29400,7400,8]],})
C(1,[],[0],{type:[1,[],[0]],x:27000,y:4700,w:14150,h:1800,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:33800,y:6400,w:2000,h:1350,canJump:true,isNormal:true,})
var morphTriggered1 = false;var morphOffset1 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:1200,w:200,y:6500,x:31600,
        path: [[31600,6500,0],[33500,6500,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 1;
            if((moveActive === false && morphTriggered1 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered1 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered1;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 15.333333333333334;
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
C(2,[],[1],{type:[2,[],[1]],points:[[32550,7100],[32800,7700],[32300,7700]],most:{"left":16150,"right":16400,"top":3550,"bottom":3850},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[33050,7400],[33300,7700],[32800,7700]],most:{"left":16400,"right":16650,"top":3700,"bottom":3850},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[33800,7200],[33800,7700],[33300,7700]],most:{"left":16650,"right":16900,"top":3600,"bottom":3850},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[32300,6500],[32800,6500],[32550,6800]],most:{"left":16150,"right":16400,"top":3250,"bottom":3400},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[32800,6500],[33300,6500],[33050,7100]],most:{"left":16400,"right":16650,"top":3250,"bottom":3550},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[33300,6500],[33800,6500],[33800,7000]],most:{"left":16650,"right":16900,"top":3250,"bottom":3500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:31750,y:6500,w:50,h:1200,canJump:true,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:31600,y:6500,w:150,h:1200,tpx:35850,tpy:6600,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[20],{h:1300,w:350,y:6450,x:31450,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:35750,y:6700,w:4300,h:1050,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:37500,y:6350,w:2950,h:500,canJump:true,isNormal:true,})
C(1,[],[13],{type:[1,[],[13]],x:35800,y:6500,w:1600,h:200,force:3500,dir:{"x":3500,"y":0},direction:"right",conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.602941176470588,})
C(1,[],[1],{type:[1,[],[1]],x:36200,y:6650,w:100,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36500,y:6500,w:100,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36800,y:6650,w:100,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37100,y:6500,w:100,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37300,y:6650,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37350,y:6600,w:50,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:37100,y:6550,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36850,y:6600,w:50,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36900,y:6650,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36600,y:6500,w:50,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36550,y:6550,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36250,y:6600,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:36150,y:6650,w:50,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[17],{type:[1,[],[17]],x:35800,y:6500,w:1600,h:200,time:0,maxTime:6,cdmult:3,trapType:"death",timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:360,})
C(1,[],[10],{type:[1,[],[10]],x:35900,y:6500,w:1500,h:200,maxStrength:200,currentStrength:200,time:0,timer:0,regenTime:300,healSpeed:1,})
C(1,[],[12],{type:[1,[],[12]],x:37400,y:6500,w:100,h:200,tpx:30050,tpy:17550,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[31800,7300],[32300,7700],[31800,7700]],most:{"left":15900,"right":16150,"top":3650,"bottom":3850},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[31800,6500],[32300,6500],[31800,6900]],most:{"left":15900,"right":16150,"top":3250,"bottom":3450},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[9],{type:[1,[],[9]],x:29900,y:17400,w:300,h:300,spawn:{"x":15025,"y":8775},collected:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:29350,y:18000,w:1850,h:2000,canJump:true,isNormal:true,})
C(1,[],[3],{x:46900,y:17700,w:1700,h:3000,cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
    }});
C(1,[],[0],{type:[1,[],[0]],x:29350,y:16100,w:700,h:600,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:29800,y:16650,w:250,h:450,canJump:true,isNormal:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:29600,y:17100,w:300,h:300,points:[[14800,8550],[15100,8550],[15100,8850],[14800,8850]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":14800,"y":8550},pointTo:{"x":15100,"y":8550},xv:340,yv:0,path:[[29600,17100,11.333333333333334],[30200,17100,11.333333333333334],[30200,17700,11.333333333333334],[29600,17700,11.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:29900,y:17100,w:300,h:300,points:[[14950,8550],[15100,8550],[15100,8850],[14800,8850],[14800,8550]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":14950,"y":8550},pointTo:{"x":15100,"y":8550},xv:340,yv:0,path:[[29900,17100,11.333333333333334],[30200,17100,11.333333333333334],[30200,17700,11.333333333333334],[29600,17700,11.333333333333334],[29600,17100,11.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:30200,y:17100,w:300,h:300,points:[[15100,8550],[15100,8850],[14800,8850],[14800,8550]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":15100,"y":8550},pointTo:{"x":15100,"y":8850},xv:2.0818995585505004e-14,yv:340,path:[[30200,17100,11.333333333333334],[30200,17700,11.333333333333334],[29600,17700,11.333333333333334],[29600,17100,11.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:30200,y:17400,w:300,h:300,points:[[15100,8700],[15100,8850],[14800,8850],[14800,8550],[15100,8550]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":15100,"y":8700},pointTo:{"x":15100,"y":8850},xv:2.0818995585505004e-14,yv:340,path:[[30200,17400,11.333333333333334],[30200,17700,11.333333333333334],[29600,17700,11.333333333333334],[29600,17100,11.333333333333334],[30200,17100,11.333333333333334]],boundPlayer:true,})
var minX5167, minY5167, maxX5167, maxY5167;
    minX5167 = 29800;minY5167 = 17400;maxX5167 = 30300;maxY5167 = 17700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5167) && (player.pos.x) < md(maxX5167) && (player.pos.y) > md(minY5167) && (player.pos.y) < md(maxY5167)) {
            colors.background="#322a2a"; colors.tile="#221616";
        }
    },});
C(1,[],[13],{type:[1,[],[13]],x:29600,y:17000,w:200,h:100,force:2000,dir:{"x":0,"y":-2000},direction:"up",conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[12],{type:[1,[],[12]],x:29600,y:16700,w:200,h:100,tpx:49400,tpy:19800,bgColor:"#000000",tileColor:"#d4d4d4",changeColor:false,})
C(1,[],[20],{h:100,w:100,y:16850,x:29650,hex:'#FFFFFF',alpha:1,
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
C(1,[0],[1],{type:[1,[0],[1]],x:30200,y:17700,w:300,h:300,points:[[15100,8850],[14800,8850],[14800,8550],[15100,8550]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":15100,"y":8850},pointTo:{"x":14800,"y":8850},xv:-340,yv:4.163799117101001e-14,path:[[30200,17700,11.333333333333334],[29600,17700,11.333333333333334],[29600,17100,11.333333333333334],[30200,17100,11.333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:29900,y:17700,w:300,h:300,points:[[14950,8850],[14800,8850],[14800,8550],[15100,8550],[15100,8850]],speed:340,currentPoint:0,collidable:true,pointOn:{"x":14950,"y":8850},pointTo:{"x":14800,"y":8850},xv:-340,yv:4.163799117101001e-14,path:[[29900,17700,11.333333333333334],[29600,17700,11.333333333333334],[29600,17100,11.333333333333334],[30200,17100,11.333333333333334],[30200,17700,11.333333333333334]],boundPlayer:true,})
C(1,[],[3],{x:49900,y:17600,w:2300,h:2650,cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
    }});
C(1,[],[0],{type:[1,[],[0]],x:48700,y:20050,w:3500,h:1000,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:48850,y:19850,w:1200,h:50,canJump:true,isNormal:true,})
C(1,[],[20],{h:400,w:1450,y:19900,x:48700,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:300,y:17700,x:49600,
        path: [[49600,17700,0],[49600,19700,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:17600,x:49600,
        path: [[49600,17600,0],[49600,19600,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:200,y:16800,x:49700,
        path: [[49700,16800,0],[49700,19500,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:400,w:100,y:17000,x:49000,
        path: [[49000,17000,0],[49000,19400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
C(1,[],[0],{type:[1,[],[0]],x:30500,y:16950,w:10400,h:3300,canJump:true,isNormal:true,})
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:16000,x:49200,
        path: [[49200,16000,0],[49200,19500,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:16100,x:49300,
        path: [[49300,16100,0],[49300,19600,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:400,w:100,y:15500,x:49800,
        path: [[49800,15500,0],[49800,19100,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:15500,x:49100,
        path: [[49100,15500,0],[49100,19400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:15500,x:49200,
        path: [[49200,15500,0],[49200,19400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:200,y:15100,x:49400,
        path: [[49400,15100,0],[49400,19600,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
C(1,[],[3],{x:48600,y:19400,w:300,h:650,cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
    }});
C(1,[],[3],{x:48800,y:17700,w:100,h:1750,cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
    }});
C(1,[],[0],{type:[1,[],[0]],x:48550,y:17700,w:300,h:1400,canJump:true,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:45850,y:19700,w:100,h:300,tpx:48700,tpy:19150,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[0],{type:[1,[],[0]],x:48550,y:19050,w:100,h:150,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:48750,y:19050,w:100,h:150,canJump:true,isNormal:true,})
C(1,[],[10],{type:[1,[],[10]],x:48600,y:19200,w:200,h:100,maxStrength:50,currentStrength:50,time:0,timer:0,regenTime:200,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:48900,y:19800,w:450,h:50,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:49450,y:19800,w:450,h:50,canJump:true,isNormal:true,})
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;
    C(1,[],[0],{h:50,w:1000,y:19800,x:48900,
        cr:(e)=>{
            if(morphTriggered5 === false){
                e.pos.x = 48900;
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
                const a = Math.sin(Date.now() / 1000 + morphOffset5) * 8;

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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:300,y:14500,x:49300,
        path: [[49300,14500,0],[49300,19400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:14600,x:49500,
        path: [[49500,14600,0],[49500,19500,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:14400,x:48900,
        path: [[48900,14400,0],[48900,19200,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:14500,x:49000,
        path: [[49000,14500,0],[49000,19300,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
C(1,[],[20],{h:650,w:1400,y:19500,x:45550,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:41800,y:19500,w:3800,h:600,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:41300,y:19850,w:4450,h:250,canJump:true,isNormal:true,})
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:13900,x:49600,
        path: [[49600,13900,0],[49600,19300,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:13900,x:49700,
        path: [[49700,13900,0],[49700,19300,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:400,y:13600,x:49000,
        path: [[49000,13600,0],[49000,19200,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:300,y:13400,x:49000,
        path: [[49000,13400,0],[49000,19100,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:13300,x:49100,
        path: [[49100,13300,0],[49100,19000,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:13200,x:49400,
        path: [[49400,13200,0],[49400,19100,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:13200,x:49500,
        path: [[49500,13200,0],[49500,19100,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:12700,x:49600,
        path: [[49600,12700,0],[49600,19000,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:100,y:12700,x:49700,
        path: [[49700,12700,0],[49700,19000,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:200,y:12700,x:48900,
        path: [[48900,12700,0],[48900,18900,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:100,y:12300,x:49300,
        path: [[49300,12300,0],[49300,19000,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:100,y:12200,x:49400,
        path: [[49400,12200,0],[49400,18900,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:300,y:11900,x:49600,
        path: [[49600,11900,0],[49600,18900,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:12000,x:49800,
        path: [[49800,12000,0],[49800,19000,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:11300,x:49000,
        path: [[49000,11300,0],[49000,18600,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:100,y:11100,x:49200,
        path: [[49200,11100,0],[49200,18400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:100,w:300,y:10900,x:49400,
        path: [[49400,10900,0],[49400,18200,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
var morphTriggered5 = false;var morphOffset5 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:200,w:100,y:10600,x:49800,
        path: [[49800,10600,0],[49800,17900,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 5;
            if((moveActive === false && morphTriggered5 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered5 === false)){
                morphsStillMoving5++;
                moveActive = true;
                lastMorphTriggered = morphTriggered5;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 11.666666666666666;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered =  false;
                o.waitUntilTrue=true;morphsStillMoving5--;
                    if(morphsStillMoving5 === 0) {
                        morphTriggered5=false;
                        for(let i = 0; i < obstacles.length; i++){
                            if(obstacles[i].morphMoveId === o.morphMoveId){
                                obstacles[i].waitUntilTrue = false;
                            }
                        }

                        if(p.pos.y > 19100 && p.pos.x > 48700 && p.pos.x < 50200){
                            p.pos.x = 48700;
                            p.pos.y = 19150; 
                        }
                    }
                
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
C(1,[],[12],{type:[1,[],[12]],x:48900,y:17700,w:1000,h:100,tpx:44900,tpy:18950,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[3],{x:46900,y:10600,w:3100,h:7100,cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    },ef:(p,res,o)=>{
        p.pos.x += res.overlapV.x;
        p.pos.y += res.overlapV.y;
    }});
var minX5171, minY5171, maxX5171, maxY5171;
    minX5171 = 49200;minY5171 = 19600;maxX5171 = 49600;maxY5171 = 20000;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5171) && (player.pos.x) < md(maxX5171) && (player.pos.y) > md(minY5171) && (player.pos.y) < md(maxY5171)) {
            colors.background="#525252"; colors.tile="#000000";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:41850,y:10600,w:5250,h:2000,canJump:true,isNormal:true,})
C(0,[],[1],{type:[0,[],[1]],x:44900,y:17450,r:150,renderType:"circleR",boundPlayer:true,})
C(2,[],[0],{x:0,y:0,points:[[45050,17450],[45021.35254915624,17479.389262614623],[44946.35254915624,17497.552825814757],[44853.64745084376,17497.552825814757],[44778.64745084376,17479.389262614623],[44750,17450],[44778.64745084376,17420.610737385377],[44853.64745084376,17402.447174185243],[44946.35254915624,17402.447174185243],[45021.35254915624,17420.610737385377]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(44900,17450,150,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(0,[],[1],{type:[0,[],[1]],x:44900,y:17450,r:50,renderType:"circleR",boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:44600,y:17000,w:100,h:100,points:[[22300,8500],[22300,8600]],speed:50,currentPoint:1,collidable:true,pointOn:{"x":22300,"y":8600},pointTo:{"x":22300,"y":8500},xv:3.061616997868383e-15,yv:-50,path:[[44600,17000,1.6666666666666667],[44600,17200,1.6666666666666667]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[44900,16200],[45150,16550],[44900,16900],[44650,16550]],most:{"left":22325,"right":22575,"top":8100,"bottom":8450},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:45600,y:11700,w:1500,h:7400,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:42000,y:12150,w:2200,h:7600,canJump:true,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,17150],[44500,17450],[44200,17750]],most:{"left":22100,"right":22250,"top":8575,"bottom":8875},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45600,17150],[45600,17750],[45300,17450]],most:{"left":22650,"right":22800,"top":8575,"bottom":8875},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:44000,y:18100,w:200,h:1000,canJump:true,isNormal:true,})
C(0,[],[11],{type:[0,[],[11]],x:44600,y:17700,r:100,renderType:"circleR",})
C(0,[],[1],{type:[0,[],[1]],x:44600,y:17700,r:50,renderType:"circleR",boundPlayer:true,})
C(0,[],[11],{type:[0,[],[11]],x:45200,y:17700,r:100,renderType:"circleR",})
C(0,[],[1],{type:[0,[],[1]],x:45200,y:17700,r:50,renderType:"circleR",boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:45100,y:17000,w:100,h:100,points:[[22550,8500],[22550,8600]],speed:50,currentPoint:0,collidable:true,pointOn:{"x":22550,"y":8500},pointTo:{"x":22550,"y":8600},xv:3.061616997868383e-15,yv:50,path:[[45100,17000,1.6666666666666667],[45100,17200,1.6666666666666667]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[44750,18500],[44900,18550],[44750,18600]],most:{"left":22375,"right":22450,"top":9250,"bottom":9300},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[45050,18700],[45050,18800],[44900,18750]],most:{"left":22450,"right":22525,"top":9350,"bottom":9400},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[45050,18300],[45050,18400],[44900,18350]],most:{"left":22450,"right":22525,"top":9150,"bottom":9200},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[44750,18100],[44850,18150],[44750,18200]],most:{"left":22375,"right":22425,"top":9050,"bottom":9100},renderType:"poly",x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:45100,y:16900,w:100,h:100,points:[[22550,8450],[22550,8550]],speed:50,currentPoint:0,pointOn:{"x":22550,"y":8450},pointTo:{"x":22550,"y":8550},xv:3.061616997868383e-15,yv:50,path:[[45100,16900,1.6666666666666667],[45100,17100,1.6666666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:44600,y:16900,w:100,h:100,points:[[22300,8450],[22300,8550]],speed:50,currentPoint:1,pointOn:{"x":22300,"y":8550},pointTo:{"x":22300,"y":8450},xv:3.061616997868383e-15,yv:-50,path:[[44600,16900,1.6666666666666667],[44600,17100,1.6666666666666667]],})
C(2,[],[0],{type:[2,[],[0]],points:[[45050,18100],[45050,18200],[44950,18150]],most:{"left":22475,"right":22525,"top":9050,"bottom":9100},renderType:"poly",x:null,y:null,})
C(1,[0],[11],{type:[1,[0],[11]],x:45100,y:17100,w:100,h:100,points:[[22550,8550],[22550,8650]],speed:50,currentPoint:0,pointOn:{"x":22550,"y":8550},pointTo:{"x":22550,"y":8650},xv:3.061616997868383e-15,yv:50,path:[[45100,17100,1.6666666666666667],[45100,17300,1.6666666666666667]],})
C(1,[0],[11],{type:[1,[0],[11]],x:44600,y:17100,w:100,h:100,points:[[22300,8550],[22300,8650]],speed:50,currentPoint:1,pointOn:{"x":22300,"y":8650},pointTo:{"x":22300,"y":8550},xv:3.061616997868383e-15,yv:-50,path:[[44600,17100,1.6666666666666667],[44600,17300,1.6666666666666667]],})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,16350],[44600,16750],[44200,17150]],most:{"left":22100,"right":22300,"top":8175,"bottom":8575},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45600,16350],[45600,17150],[45200,16750]],most:{"left":22600,"right":22800,"top":8175,"bottom":8575},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[1],[0],{type:[1,[1],[0]],x:45375,y:17075,w:150,h:150,angle:45,rotateSpeed:0,pivotX:45450,pivotY:17150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,initialRotation:2578.3100780887044,})
C(1,[1],[0],{type:[1,[1],[0]],x:44275,y:17075,w:150,h:150,angle:45,rotateSpeed:0,pivotX:44350,pivotY:17150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,initialRotation:2578.3100780887044,})
C(1,[],[0],{type:[1,[],[0]],x:44400,y:15100,w:200,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:44800,y:15100,w:200,h:200,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:45200,y:15100,w:200,h:200,canJump:true,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[44900,14950],[45000,15100],[44800,15100]],most:{"left":22400,"right":22500,"top":7475,"bottom":7550},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[44600,15000],[44600,15100],[44400,15100]],most:{"left":22200,"right":22300,"top":7500,"bottom":7550},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[45200,15000],[45400,15100],[45200,15100]],most:{"left":22600,"right":22700,"top":7500,"bottom":7550},renderType:"poly",x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:44400,y:13600,w:1000,h:200,canJump:true,isNormal:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[45600,14250],[45600,15050],[45000,14650]],most:{"left":22500,"right":22800,"top":7125,"bottom":7525},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[44800,15300],[45000,15300],[44900,15450]],most:{"left":22400,"right":22500,"top":7650,"bottom":7725},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[44400,15300],[44600,15300],[44500,15450]],most:{"left":22200,"right":22300,"top":7650,"bottom":7725},renderType:"poly",x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[45200,15300],[45400,15300],[45300,15450]],most:{"left":22600,"right":22700,"top":7650,"bottom":7725},renderType:"poly",x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,13000],[44500,13250],[44200,13500]],most:{"left":22100,"right":22250,"top":6500,"bottom":6750},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45600,13000],[45600,13500],[45300,13250]],most:{"left":22650,"right":22800,"top":6500,"bottom":6750},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44900,13200],[44950,13250],[44900,13300],[44850,13250]],most:{"left":22425,"right":22475,"top":6600,"bottom":6650},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,12600],[44800,12600],[44200,13000]],most:{"left":22100,"right":22400,"top":6300,"bottom":6500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45000,12600],[45600,12600],[45600,13000]],most:{"left":22500,"right":22800,"top":6300,"bottom":6500},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[44700,13800],[45100,13800],[44900,14050]],most:{"left":22350,"right":22550,"top":6900,"bottom":7025},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:44425,y:16225,w:150,h:150,angle:0,rotateSpeed:0.023468013468013468,pivotX:44500,pivotY:16300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:45225,y:16225,w:150,h:150,angle:0,rotateSpeed:-0.023468013468013468,pivotX:45300,pivotY:16300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:53.033008588991066,initialRotation:0,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[44200,14250],[44800,14650],[44200,15050]],most:{"left":22100,"right":22400,"top":7125,"bottom":7525},renderType:"poly",x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[44200,13950],[44800,14650],[44200,14250]],most:{"left":22100,"right":22400,"top":6975,"bottom":7325},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[45600,13950],[45600,14250],[45000,14650]],most:{"left":22500,"right":22800,"top":6975,"bottom":7325},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:44925,y:14150,w:450,h:100,angle:0,rotateSpeed:0.02632996632996633,pivotX:45150,pivotY:14200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:44425,y:14150,w:450,h:100,angle:0,rotateSpeed:-0.02632996632996633,pivotX:44650,pivotY:14200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,initialRotation:0,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:42000,y:8100,w:8300,h:2000,canJump:true,isNormal:true,})
var minX5172, minY5172, maxX5172, maxY5172;
    minX5172 = 42050;minY5172 = 10150;maxX5172 = 42450;maxY5172 = 10550;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5172) && (player.pos.x) < md(maxX5172) && (player.pos.y) > md(minY5172) && (player.pos.y) < md(maxY5172)) {
            colors.background="#000000"; colors.tile="#000000";
        }
    },});
C(1,[],[1],{type:[1,[],[1]],x:49100,y:10450,w:100,h:150,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:49100,y:10100,w:100,h:150,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:49400,y:10100,w:100,h:250,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:49400,y:10550,w:100,h:50,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:49700,y:10400,w:100,h:200,canCollide:true,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:49700,y:10100,w:100,h:100,canCollide:true,boundPlayer:true,})
C(1,[],[24],{type:[1,[],[24]],x:41850,y:10100,w:8150,h:750,ir:0.25,or:0.25,o:0.8,vc:{"r":0,"g":0,"b":0},innerR:0,innerG:0,innerB:0,innerSize:0.025,outerR:0,outerG:0,outerB:0,outerSize:0.15,innerOpacity:0,outerOpacity:1,})
var minX5173, minY5173, maxX5173, maxY5173;
    minX5173 = 41900;minY5173 = 7900;maxX5173 = 42200;maxY5173 = 8200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5173) && (player.pos.x) < md(maxX5173) && (player.pos.y) > md(minY5173) && (player.pos.y) < md(maxY5173)) {
            colors.background="#0d0d0d"; colors.tile="#000000";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[49200,10100],[49400,10100],[49400,10350],[49200,10250]],most:{"left":24600,"right":24700,"top":5050,"bottom":5175},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49200,10450],[49400,10550],[49400,10600],[49200,10600]],most:{"left":24600,"right":24700,"top":5225,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49700,10400],[49700,10600],[49500,10600],[49500,10550]],most:{"left":24750,"right":24850,"top":5200,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49500,10100],[49700,10100],[49700,10200],[49500,10350]],most:{"left":24750,"right":24850,"top":5050,"bottom":5175},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49000,10100],[49100,10100],[49100,10250]],most:{"left":24500,"right":24550,"top":5050,"bottom":5125},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49100,10450],[49100,10600],[49000,10600]],most:{"left":24500,"right":24550,"top":5225,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49800,10100],[49900,10100],[49800,10200]],most:{"left":24900,"right":24950,"top":5050,"bottom":5100},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[49800,10400],[49900,10600],[49800,10600]],most:{"left":24900,"right":24950,"top":5200,"bottom":5300},renderType:"poly",x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:49750,y:10350,radius:250,startAngle:-1.5707963267948966,endAngle:-4.71238898038469,startPolygon:{"points":[[24875,5050],[24875,4925]],"type":"poly","props":{}},endPolygon:{"points":[[24875,5300],[24875,5425]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",r:500,startSliceAngle:-1.5707963267948966,endSliceAngle:-4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:41950,y:6900,w:5650,h:1100,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:46100,y:6900,w:1800,h:1300,canJump:true,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:46000,y:8000,w:100,h:100,tpx:47950,tpy:8050,bgColor:"#0c0e13",tileColor:"#383838",changeColor:false,})
C(1,[],[26],{type:[1,[],[26]],x:41950,y:8050,w:200,h:50,musicPath:"https://www.youtube.com/watch?v=TgZjYIPPe50",volume:1,startTime:0,})
C(1,[],[0],{type:[1,[],[0]],x:47800,y:6900,w:300,h:1000,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:49300,y:-100,w:700,h:8200,canJump:true,isNormal:true,})
C(1,[],[19],{type:[1,[],[19]],x:42000,y:8000,w:4000,h:100,speedInc:0,speedChangePermanent:false,speedMult:0,})
C(1,[],[0],{type:[1,[],[0]],x:41900,y:-100,w:7400,h:8100,canJump:true,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:48000,y:7950,w:1300,h:150,canJump:true,isNormal:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:45275,y:13200,w:450,h:100,angle:0,rotateSpeed:0.02632996632996633,pivotX:45500,pivotY:13250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,initialRotation:0,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:44075,y:13200,w:450,h:100,angle:0,rotateSpeed:-0.02632996632996633,pivotX:44300,pivotY:13250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,initialRotation:0,boundPlayer:true,})
C(1,[],[20],{x:30500,y:15000,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].timeTrapTime !== undefined){
                obstacles[i].timeTrapTime = obstacles[i].timeTrapMaxTime;
            }
        }    
    }});var morphTriggered40 = false;var morphOffset40 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[1],{h:300,w:1400,y:19100,x:44200,boundPlayer:true,
        path: [[44200,19100,0],[44200,12700,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
                if(p.pos.y > 18800){
                    morphTriggered40 = false;

                    lastCurrentPoint = -1;

                    o.currentPoint = 0;
                    o.pointOn = o.path[0];
                    o.pointTo = o.path[1];
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
            
            o.morphMoveId = 40;
            if((moveActive === false && morphTriggered40 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered40 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered40;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 4;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered = morphTriggered40 = false;
                
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
C(1,[],[19],{type:[1,[],[19]],x:192700,y:0,w:5300,h:2000,speedInc:1.26,inView:false,speedChangePermanent:false,speedMult:1.26,})
C(1,[],[17],{type:[1,[],[17]],x:159700,y:1550,w:600,h:450,time:0,maxTime:2,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:120,})
C(1,[],[13],{type:[1,[],[13]],x:168900,y:900,w:100,h:100,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4873949579831935,})
C(1,[],[15],{type:[1,[],[15]],x:169000,y:0,w:43000,h:2000,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[17],{type:[1,[],[17]],x:164900,y:0,w:2000,h:2000,time:0,maxTime:5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[],[13],{type:[1,[],[13]],x:168900,y:0,w:56300,h:2000,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(0,[],[12],{type:[0,[],[12]],x:164900,y:0,r:600,tpx:168950,tpy:1000,renderType:"circleR",radius:300,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:166900,y:0,r:600,tpx:168950,tpy:1000,renderType:"circleR",radius:300,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:166900,y:2000,r:600,tpx:168950,tpy:1000,renderType:"circleR",radius:300,inView:false,})
C(0,[],[12],{type:[0,[],[12]],x:164900,y:2000,r:600,tpx:168950,tpy:1000,renderType:"circleR",radius:300,inView:false,})
C(1,[],[15],{type:[1,[],[15]],x:162500,y:0,w:400,h:2000,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:162500,y:0,w:400,h:2000,force:1000,dir:{"x":0,"y":1000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7436974789915968,})
C(1,[],[19],{type:[1,[],[19]],x:144700,y:0,w:5200,h:2000,speedInc:1.26,inView:false,speedChangePermanent:false,speedMult:1.26,})
C(1,[],[15],{type:[1,[],[15]],x:83600,y:0,w:78400,h:2000,rx:true,ry:false,inView:true,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[13],{type:[1,[],[13]],x:105700,y:0,w:56300,h:2000,force:10000,dir:{"x":10000,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:7.436974789915965,})
C(1,[],[13],{type:[1,[],[13]],x:123800,y:1650,w:200,h:200,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.602941176470588,})
C(1,[],[15],{type:[1,[],[15]],x:133800,y:800,w:1200,h:400,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[19],{type:[1,[],[19]],x:118400,y:0,w:12500,h:2000,speedInc:1.28,inView:false,speedChangePermanent:false,speedMult:1.28,})
C(1,[],[19],{type:[1,[],[19]],x:105500,y:750,w:100,h:500,speedInc:0.2,inView:false,speedChangePermanent:false,speedMult:0.2,})
C(1,[],[29],{type:[1,[],[29]],x:115450,y:600,w:100,h:100,time:1.5,inView:true,changeDeathTimerStateTo:true,deathTime:90,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:115450,y:1300,w:100,h:100,time:1.5,inView:true,changeDeathTimerStateTo:true,deathTime:90,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:118300,y:950,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[114900,1600],[115000,2000],[113700,2000]],most:{"left":15850,"right":16500,"top":800,"bottom":1000},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:91000,y:700,w:14700,h:600,force:8400,dir:{"x":8400,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:6.247058823529412,})
C(1,[],[1],{type:[1,[],[1]],x:115450,y:0,w:400,h:2000,canCollide:false,inView:true,boundPlayer:false,})
C(1,[],[13],{type:[1,[],[13]],x:102900,y:700,w:1400,h:300,force:750,dir:{"x":0,"y":-750},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5577731092436976,})
C(1,[],[13],{type:[1,[],[13]],x:102900,y:1000,w:1400,h:300,force:750,dir:{"x":0,"y":750},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5577731092436976,})
C(1,[],[19],{type:[1,[],[19]],x:89800,y:700,w:700,h:600,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[13],{type:[1,[],[13]],x:86000,y:700,w:5000,h:600,force:3600,dir:{"x":3600,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6773109243697477,})
C(1,[],[24],{type:[1,[],[24]],x:86000,y:700,w:4800,h:600,ir:0.1,or:0.8,o:0.8,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:0,outerG:0,outerB:0,outerSize:0.48,innerOpacity:0,outerOpacity:1,})
C(1,[],[16],{type:[1,[],[16]],x:82000,y:975,w:200,h:50,snapDistance:50,snapWait:2,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:120,snapDistanceY:100,snapDistanceX:100,toSnapX:false,toSnapY:true,})
C(1,[],[16],{type:[1,[],[16]],x:86000,y:700,w:3800,h:600,snapDistance:75,snapWait:0.22,snapX:false,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:13.2,snapDistanceY:150,snapDistanceX:150,toSnapX:false,toSnapY:true,})
C(1,[],[13],{type:[1,[],[13]],x:82000,y:700,w:4000,h:600,force:750,dir:{"x":750,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.5577731092436976,})
C(1,[],[0],{type:[1,[],[0]],x:83500,y:0,w:2500,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:83500,y:1200,w:2500,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[1],{type:[1,[],[1]],x:117600,y:750,w:800,h:450,canCollide:false,inView:true,boundPlayer:false,})
C(1,[],[15],{type:[1,[],[15]],x:82000,y:900,w:1600,h:200,rx:true,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:0,})
C(1,[],[0],{type:[1,[],[0]],x:81950,y:-50,w:1650,h:950,canJump:true,inView:false,isNormal:true,})
C(1,[],[9],{type:[1,[],[9]],x:82000,y:900,w:200,h:200,spawn:{"x":50,"y":500},collected:true,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[26],{type:[1,[],[26]],x:82000,y:900,w:100,h:200,musicPath:"null",volume:1,startTime:0,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:86000,y:-100,w:19700,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:86000,y:1300,w:19700,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:83450,y:-150,w:2800,h:850,canJump:true,inView:false,isNormal:true,})
C(1,[],[24],{type:[1,[],[24]],x:91000,y:700,w:4700,h:600,ir:0.1,or:0.1,o:1,vc:{"r":0,"g":0,"b":0},inView:false,innerR:0,innerG:0,innerB:0,innerSize:0.010000000000000002,outerR:0,outerG:0,outerB:0,outerSize:0.06,innerOpacity:0,outerOpacity:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[117000,0],[119000,0],[118400,900],[117600,900]],most:{"left":17500,"right":18500,"top":0,"bottom":450},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[117600,1100],[118400,1100],[119000,2000],[117000,2000]],most:{"left":17500,"right":18500,"top":550,"bottom":1000},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:131000,y:-50,w:2800,h:2200,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:130900,y:0,w:100,h:2000,tpx:133850,tpy:1000,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
var minX5174, minY5174, maxX5174, maxY5174;
    minX5174 = 95600;minY5174 = 600;maxX5174 = 96000;maxY5174 = 1400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5174) && (player.pos.x) < md(maxX5174) && (player.pos.y) > md(minY5174) && (player.pos.y) < md(maxY5174)) {
            colors.background="#383838"; colors.tile="#f50000";
        }
    },});
var minX5175, minY5175, maxX5175, maxY5175;
    minX5175 = 105500;minY5175 = 600;maxX5175 = 105800;maxY5175 = 1400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5175) && (player.pos.x) < md(maxX5175) && (player.pos.y) > md(minY5175) && (player.pos.y) < md(maxY5175)) {
            colors.background="#813232"; colors.tile="#ff0000";
        }
    },});
var minX5176, minY5176, maxX5176, maxY5176;
    minX5176 = 85900;minY5176 = 600;maxX5176 = 86300;maxY5176 = 1400;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5176) && (player.pos.x) < md(maxX5176) && (player.pos.y) > md(minY5176) && (player.pos.y) < md(maxY5176)) {
            colors.background="#a80000"; colors.tile="#140000";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[83900,900],[84000,1000],[83900,1100],[83750,1000]],most:{"left":875,"right":1000,"top":450,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[84000,800],[84300,800],[84150,900]],most:{"left":1000,"right":1150,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[84150,1100],[84300,1200],[84000,1200]],most:{"left":1000,"right":1150,"top":550,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[85100,1050],[86000,1200],[85000,1200]],most:{"left":1500,"right":2000,"top":525,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[85000,800],[86000,800],[85900,950]],most:{"left":1500,"right":2000,"top":400,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[85850,1100],[85950,1200],[85800,1200]],most:{"left":1900,"right":1975,"top":550,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[85050,800],[85200,800],[85150,900]],most:{"left":1525,"right":1600,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:84700,y:800,w:100,h:100,points:[[42350,400],[42350,350],[42200,350],[42200,600],[42350,600]],speed:32,currentPoint:3.943111111109077,collidable:true,pointOn:{"x":1200,"y":600},pointTo:{"x":1350,"y":600},xv:32,yv:0,inView:false,path:[[84700,800,1.0666666666666667],[84700,700,1.0666666666666667],[84400,700,1.0666666666666667],[84400,1200,1.0666666666666667],[84700,1200,1.0666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:84700,y:1200,w:100,h:100,points:[[42350,600],[42350,350],[42200,350],[42200,600]],speed:32,currentPoint:2.765866666665441,collidable:true,pointOn:{"x":1200,"y":350},pointTo:{"x":1200,"y":600},xv:1.959434878635765e-15,yv:32,inView:false,path:[[84700,1200,1.0666666666666667],[84700,700,1.0666666666666667],[84400,700,1.0666666666666667],[84400,1200,1.0666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:84400,y:1100,w:100,h:100,points:[[42200,550],[42200,600],[42350,600],[42350,350],[42200,350]],speed:32,currentPoint:3.943111111109077,collidable:true,pointOn:{"x":1350,"y":350},pointTo:{"x":1200,"y":350},xv:-32,yv:3.91886975727153e-15,inView:false,path:[[84400,1100,1.0666666666666667],[84400,1200,1.0666666666666667],[84700,1200,1.0666666666666667],[84700,700,1.0666666666666667],[84400,700,1.0666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:84400,y:700,w:100,h:100,points:[[42200,350],[42200,600],[42350,600],[42350,350]],speed:32,currentPoint:2.765866666665441,collidable:true,pointOn:{"x":1350,"y":600},pointTo:{"x":1350,"y":350},xv:1.959434878635765e-15,yv:-32,inView:false,path:[[84400,700,1.0666666666666667],[84400,1200,1.0666666666666667],[84700,1200,1.0666666666666667],[84700,700,1.0666666666666667]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:83400,y:1300,w:2800,h:850,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:81950,y:1100,w:1650,h:950,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[86400,1100],[86600,1300],[86200,1300]],most:{"left":2100,"right":2300,"top":550,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[86200,700],[86600,700],[86400,900]],most:{"left":2100,"right":2300,"top":350,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[86900,1000],[87200,1300],[86600,1300]],most:{"left":2300,"right":2600,"top":500,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[87200,700],[88000,700],[87600,1100]],most:{"left":2600,"right":3000,"top":350,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[90800,1075],[95650,1075],[95700,1125],[95650,1175],[90800,1175],[90750,1125]],most:{"left":4375,"right":6850,"top":537.5,"bottom":587.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[90800,825],[95650,825],[95700,875],[95650,925],[90800,925],[90750,875]],most:{"left":4375,"right":6850,"top":412.5,"bottom":462.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[88300,1000],[88600,1300],[88000,1300]],most:{"left":3000,"right":3300,"top":500,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[88800,950],[88850,1000],[88800,1050],[88750,1000]],most:{"left":3375,"right":3425,"top":475,"bottom":525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[89000,700],[90150,700],[90050,900],[89850,1000],[89400,1100]],most:{"left":3500,"right":4075,"top":350,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[90500,1000],[90500,1300],[90200,1300],[90300,1100]],most:{"left":4100,"right":4250,"top":500,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[97350,700],[98300,700],[98000,1000]],most:{"left":7675,"right":8150,"top":350,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[97500,1150],[97650,1300],[97150,1300]],most:{"left":7575,"right":7825,"top":575,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[86000,700],[86200,700],[86100,800]],most:{"left":2000,"right":2100,"top":350,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[86100,1200],[86200,1300],[86000,1300]],most:{"left":2000,"right":2100,"top":600,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83600,1100],[83650,1200],[83600,1200]],most:{"left":800,"right":825,"top":550,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83600,800],[83650,800],[83600,900]],most:{"left":800,"right":825,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var minX5177, minY5177, maxX5177, maxY5177;
    minX5177 = 81550;minY5177 = 800;maxX5177 = 82300;maxY5177 = 1100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX5177) && (player.pos.x) < md(maxX5177) && (player.pos.y) > md(minY5177) && (player.pos.y) < md(maxY5177)) {
            colors.background="#383838"; colors.tile="#0d0d0d";
        }
    },});
C(2,[],[1],{type:[2,[],[1]],points:[[82200,900],[82400,900],[82300,950]],most:{"left":100,"right":200,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82400,900],[82600,900],[82500,950]],most:{"left":200,"right":300,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82600,900],[82800,900],[82700,950]],most:{"left":300,"right":400,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82800,900],[83000,900],[82900,950]],most:{"left":400,"right":500,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83000,900],[83200,900],[83100,950]],most:{"left":500,"right":600,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83200,900],[83400,900],[83300,950]],most:{"left":600,"right":700,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83400,900],[83600,900],[83500,950]],most:{"left":700,"right":800,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82500,1050],[82600,1100],[82400,1100]],most:{"left":200,"right":300,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82300,1050],[82400,1100],[82200,1100]],most:{"left":100,"right":200,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82700,1050],[82800,1100],[82600,1100]],most:{"left":300,"right":400,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[82900,1050],[83000,1100],[82800,1100]],most:{"left":400,"right":500,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83100,1050],[83200,1100],[83000,1100]],most:{"left":500,"right":600,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83300,1050],[83400,1100],[83200,1100]],most:{"left":600,"right":700,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[83500,1050],[83600,1100],[83400,1100]],most:{"left":700,"right":800,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:90850,y:700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:90850,y:950,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:90850,y:1200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
var morphTriggered0 = false;
    C(1,[],[3],{h:600,w:600,y:700,x:95900,
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
    C(1,[0],[0],{h:300,w:400,y:700,x:96500,
        path: [[96500,700,0],[96500,400,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 0;
            if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered0;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 16;
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
var morphTriggered0 = false;var morphOffset0 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:400,y:1000,x:96500,
        path: [[96500,1000,0],[96500,1300,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 0;
            if((moveActive === false && morphTriggered0 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered0 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered0;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 16;
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
C(2,[],[1],{type:[2,[],[1]],points:[[98900,1000],[99200,1300],[98200,1300]],most:{"left":8100,"right":8600,"top":500,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[99200,700],[100600,700],[100400,900]],most:{"left":8600,"right":9300,"top":350,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[100400,1100],[100600,1300],[99250,1300]],most:{"left":8625,"right":9300,"top":550,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[102150,800],[102350,1000],[102150,1200],[101000,1000]],most:{"left":9500,"right":10175,"top":400,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var morphTriggered2 = false;
    C(1,[],[3],{h:200,w:200,y:700,x:102500,
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
var morphTriggered1 = false;
    C(1,[],[3],{h:200,w:200,y:1100,x:102500,
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
var morphTriggered2 = false;var morphOffset2 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:600,y:400,x:102300,
        path: [[102300,400,0],[102300,900,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 2;
            if((moveActive === false && morphTriggered2 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered2 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered2;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 29.666666666666668;
                }

                o.speed = o.pointOn[2];
                let angle = Math.atan2(o.pointTo[1] - o.pointOn[1], o.pointTo[0] - o.pointOn[0]);
                o.xv = Math.cos(angle) * o.speed;
                o.yv = Math.sin(angle) * o.speed;
                o.timeRemain = Math.sqrt((o.pointOn[0] - o.pointTo[0])**2 + (o.pointOn[1] - o.pointTo[1])**2) / o.speed;
            }

            if(moveActive === true && lastCurrentPoint !== o.currentPoint) {
                lastMorphTriggered = morphTriggered2 = false;
                
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
var morphTriggered1 = false;var morphOffset1 = Math.random() * Math.PI * 2;{let lastMorphTriggered = false;let moveActive = false;let lastCurrentPoint = 0;
    C(1,[0],[0],{h:300,w:600,y:1300,x:102300,
        path: [[102300,1300,0],[102300,800,0]],
        currentPoint: 0,
        sf:(o,p) => {
            
            o.morphMoveId = 1;
            if((moveActive === false && morphTriggered1 !== lastMorphTriggered && o.waitUntilTrue === false) || (moveActive === false && o.waitUntilTrue === true && morphTriggered1 === false)){
                
                moveActive = true;
                lastMorphTriggered = morphTriggered1;

                for(let i = 0; i < o.path.length; i++){
                    o.path[i][2] = 29.333333333333332;
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
C(2,[],[1],{type:[2,[],[1]],points:[[105550,1150],[105700,1300],[105200,1300]],most:{"left":11600,"right":11850,"top":575,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[105200,700],[105700,700],[105550,850]],most:{"left":11600,"right":11850,"top":350,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[106850,1100],[107500,1650],[106800,1850],[106150,1650]],most:{"left":12075,"right":12750,"top":550,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[106200,100],[107000,250],[106700,550],[106000,800]],most:{"left":12000,"right":12500,"top":50,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[107750,0],[108200,200],[108650,500],[107750,750]],most:{"left":12875,"right":13325,"top":0,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[108800,1150],[108950,1700],[108350,2000],[107850,1600]],most:{"left":12925,"right":13475,"top":575,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
var morphTriggered2 = false;
    C(1,[],[3],{h:200,w:200,y:1100,x:103900,
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
var morphTriggered1 = false;
    C(1,[],[3],{h:200,w:200,y:700,x:103900,
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
C(2,[],[1],{type:[2,[],[1]],points:[[110400,600],[111050,950],[110400,1300],[109300,950]],most:{"left":13650,"right":14525,"top":300,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[109000,1350],[110050,1900],[109400,1750]],most:{"left":13500,"right":14025,"top":675,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[109900,0],[108800,550],[109250,200]],most:{"left":13400,"right":13950,"top":0,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[115450,1500],[115850,1500],[116250,2000],[115000,2000]],most:{"left":16500,"right":17125,"top":750,"bottom":1000},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[115000,0],[116250,0],[115850,500],[115450,500]],most:{"left":16500,"right":17125,"top":0,"bottom":250},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[115450,800],[115850,800],[116050,1000],[115850,1200],[115450,1200],[115250,1000]],most:{"left":16625,"right":17025,"top":400,"bottom":600},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[111750,1200],[113050,2000],[110350,2000]],most:{"left":14175,"right":15525,"top":600,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[110350,0],[113050,0],[111750,600]],most:{"left":14175,"right":15525,"top":0,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[113800,750],[114450,950],[113800,1150],[112350,950]],most:{"left":15175,"right":16225,"top":375,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[113700,0],[115000,0],[114900,400]],most:{"left":15850,"right":16500,"top":0,"bottom":200},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114750,300],[114900,400],[114750,500],[114600,400]],most:{"left":16300,"right":16450,"top":150,"bottom":250},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114450,200],[114600,300],[114450,400],[114300,300]],most:{"left":16150,"right":16300,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114150,100],[114300,200],[114150,300],[114000,200]],most:{"left":16000,"right":16150,"top":50,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[113850,0],[114000,100],[113850,200],[113700,100]],most:{"left":15850,"right":16000,"top":0,"bottom":100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114750,1500],[114900,1600],[114750,1700],[114600,1600]],most:{"left":16300,"right":16450,"top":750,"bottom":850},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114450,1600],[114600,1700],[114450,1800],[114300,1700]],most:{"left":16150,"right":16300,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[114150,1700],[114300,1800],[114150,1900],[114000,1800]],most:{"left":16000,"right":16150,"top":850,"bottom":950},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[113850,1800],[114000,1900],[113850,2000],[113700,1900]],most:{"left":15850,"right":16000,"top":900,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[104100,975],[105600,975],[105600,1025],[104100,1025]],most:{"left":11050,"right":11800,"top":487.5,"bottom":512.5},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[104050,800],[104250,1000],[104050,1200],[102900,1000]],most:{"left":10450,"right":11125,"top":400,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[104600,850],[104750,1000],[104600,1150],[104250,1000]],most:{"left":11125,"right":11375,"top":425,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[116250,0],[117000,0],[117600,900],[115850,500]],most:{"left":16925,"right":17800,"top":0,"bottom":450},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[117600,1100],[117000,2000],[116250,2000],[115850,1500]],most:{"left":16925,"right":17800,"top":550,"bottom":1000},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[118900,1050],[119000,1250],[118600,1400],[118400,1100]],most:{"left":18200,"right":18500,"top":525,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119000,0],[119400,0],[119400,300],[119200,700],[118400,900]],most:{"left":18200,"right":18700,"top":0,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[118900,1050],[119550,1050],[119500,1200],[119000,1250]],most:{"left":18450,"right":18775,"top":525,"bottom":625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119550,1050],[120300,1100],[120250,1250],[119500,1200]],most:{"left":18750,"right":19150,"top":525,"bottom":625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[120300,1100],[121100,1250],[121050,1450],[120250,1250]],most:{"left":19125,"right":19550,"top":550,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119400,300],[119950,300],[120100,600],[119200,700]],most:{"left":18600,"right":19050,"top":150,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119950,300],[121100,500],[121000,700],[120100,600]],most:{"left":18975,"right":19550,"top":150,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121100,500],[122250,700],[121950,1000],[121000,700]],most:{"left":19500,"right":20125,"top":250,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121100,1250],[121950,1550],[121850,1750],[121050,1450]],most:{"left":19525,"right":19975,"top":625,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121950,1550],[122650,2000],[122350,2000],[121850,1750]],most:{"left":19925,"right":20325,"top":775,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122250,700],[123200,1150],[122900,1450],[121950,1000]],most:{"left":19975,"right":20600,"top":350,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122800,1900],[122900,2000],[122700,2000]],most:{"left":20350,"right":20450,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123000,1900],[123100,2000],[122900,2000]],most:{"left":20450,"right":20550,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123200,1900],[123300,2000],[123100,2000]],most:{"left":20550,"right":20650,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123400,1900],[123500,2000],[123300,2000]],most:{"left":20650,"right":20750,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123200,1150],[124500,1600],[124500,1800],[122900,1450]],most:{"left":20450,"right":21250,"top":575,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122900,1900],[123000,2000],[122800,2000]],most:{"left":20400,"right":20500,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123100,1900],[123200,2000],[123000,2000]],most:{"left":20500,"right":20600,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123300,1900],[123400,2000],[123200,2000]],most:{"left":20600,"right":20700,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122700,1900],[122800,2000],[122600,2000]],most:{"left":20300,"right":20400,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:124500,y:1600,w:200,h:200,canJump:true,inView:false,isNormal:true,})
C(1,[],[12],{type:[1,[],[12]],x:124500,y:1800,w:200,h:200,tpx:119550,tpy:150,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[120450,-300],[121600,-100],[121500,100],[120600,0]],most:{"left":19225,"right":19800,"top":-150,"bottom":50},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121600,-100],[122750,100],[122650,400],[121500,100]],most:{"left":19750,"right":20375,"top":-50,"bottom":200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[124650,0],[123700,750],[122650,400],[122750,100]],most:{"left":20325,"right":21325,"top":0,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[124200,1150],[124900,1150],[124500,1600],[123550,1300]],most:{"left":20775,"right":21450,"top":575,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[125100,750],[125300,850],[124900,1150],[124200,1150]],most:{"left":21100,"right":21650,"top":375,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123500,1900],[123600,2000],[123400,2000]],most:{"left":20700,"right":20800,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123850,1650],[124100,1700],[124000,1850]],most:{"left":20925,"right":21050,"top":825,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[120100,550],[120350,600],[120250,750]],most:{"left":19050,"right":19175,"top":275,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121200,1150],[121250,1300],[121000,1250]],most:{"left":19500,"right":19625,"top":575,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122350,1550],[122350,1850],[122150,1700]],most:{"left":20075,"right":20175,"top":775,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[120100,-50],[120350,0],[120250,100]],most:{"left":19050,"right":19175,"top":-25,"bottom":50},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[121250,50],[121500,100],[121300,200]],most:{"left":19625,"right":19750,"top":25,"bottom":100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[122500,700],[122550,850],[122300,800]],most:{"left":20150,"right":20275,"top":350,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[123650,1150],[123700,1300],[123450,1250]],most:{"left":20725,"right":20850,"top":575,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[124250,250],[124250,600],[124000,450]],most:{"left":21000,"right":21125,"top":125,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[126650,250],[127450,450],[126650,700],[125600,500]],most:{"left":21800,"right":22725,"top":125,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[125950,1000],[127250,1550],[126500,1850],[125550,1200]],most:{"left":21775,"right":22625,"top":500,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[128800,600],[130700,1250],[129150,1650],[127400,1050]],most:{"left":22700,"right":24350,"top":300,"bottom":825},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[125300,850],[125950,1000],[125550,1200],[124900,1050]],most:{"left":21450,"right":21975,"top":425,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[124550,0],[125450,0],[124650,300],[124350,200]],most:{"left":21175,"right":21725,"top":0,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[128050,0],[128750,0],[128450,150]],most:{"left":23025,"right":23375,"top":0,"bottom":75},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[127350,0],[128050,0],[127750,150]],most:{"left":22675,"right":23025,"top":0,"bottom":75},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[127250,1550],[128300,2000],[126500,2000],[126500,1850]],most:{"left":22250,"right":23150,"top":775,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[129250,0],[131000,0],[131000,750]],most:{"left":23625,"right":24500,"top":0,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119400,0],[119600,0],[119400,100]],most:{"left":18700,"right":18800,"top":0,"bottom":50},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[119400,200],[119600,300],[119400,300]],most:{"left":18700,"right":18800,"top":100,"bottom":150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[130900,1900],[130900,2000],[130700,2000]],most:{"left":24350,"right":24450,"top":950,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:124700,y:1000,w:950,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:125600,y:1250,w:900,h:800,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:124400,y:1250,w:500,h:400,canJump:true,inView:false,isNormal:true,})
C(1,[],[20],{h:20,w:750,y:280,x:119360,hex:'#FFFFFF',alpha:1,
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
C(2,[],[1],{type:[2,[],[1]],points:[[133800,0],[135600,0],[135600,800],[133800,900]],most:{"left":25900,"right":26800,"top":0,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[133800,1100],[135600,1200],[135600,2000],[133800,2000]],most:{"left":25900,"right":26800,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[137400,950],[137400,2000],[135600,2000],[135600,1200]],most:{"left":26800,"right":27700,"top":475,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[135600,0],[137400,0],[137400,450],[135600,800]],most:{"left":26800,"right":27700,"top":0,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[137400,0],[139200,0],[139200,450],[137400,450]],most:{"left":27700,"right":28600,"top":0,"bottom":225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[137400,950],[139200,950],[139200,2000],[137400,2000]],most:{"left":27700,"right":28600,"top":475,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[139200,0],[141000,0],[141000,850],[139200,450]],most:{"left":28600,"right":29500,"top":0,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[139200,950],[141000,1350],[141000,2000],[139200,2000]],most:{"left":28600,"right":29500,"top":475,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[141000,0],[142800,0],[142800,800],[141000,850]],most:{"left":29500,"right":30400,"top":0,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[142800,1300],[142800,2000],[141000,2000],[141000,1350]],most:{"left":29500,"right":30400,"top":650,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[142800,0],[144600,0],[144600,200],[142800,800]],most:{"left":30400,"right":31300,"top":0,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[142800,1300],[144600,1800],[144600,2000],[142800,2000]],most:{"left":30400,"right":31300,"top":650,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[137600,800],[137800,950],[137400,950]],most:{"left":27700,"right":27900,"top":400,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[139000,800],[139200,950],[138800,950]],most:{"left":28400,"right":28600,"top":400,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[138100,450],[138500,450],[138300,600]],most:{"left":28050,"right":28250,"top":225,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[140150,650],[140600,750],[140300,850]],most:{"left":29075,"right":29300,"top":325,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[139700,950],[139850,1100],[139450,1000]],most:{"left":28725,"right":28925,"top":475,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[140800,1200],[141000,1350],[140550,1250]],most:{"left":29275,"right":29500,"top":600,"bottom":675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[136100,1000],[136300,1100],[135900,1200]],most:{"left":26950,"right":27150,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[137000,500],[136850,700],[136550,600]],most:{"left":27275,"right":27500,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[141650,800],[142150,800],[141900,950]],most:{"left":29825,"right":30075,"top":400,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[141200,1200],[141450,1350],[141000,1350]],most:{"left":29500,"right":29725,"top":600,"bottom":675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[142550,1150],[142800,1300],[142300,1350]],most:{"left":30150,"right":30400,"top":575,"bottom":675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[142900,1350],[143300,1350],[143500,1500]],most:{"left":30450,"right":30750,"top":675,"bottom":750},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[143500,550],[143300,750],[142900,750]],most:{"left":30450,"right":30750,"top":275,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145100,500],[145300,500],[145400,600],[145300,700],[145100,700],[145000,600]],most:{"left":31500,"right":31700,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145100,1000],[145300,1000],[145400,1100],[145300,1200],[145100,1200],[145000,1100]],most:{"left":31500,"right":31700,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145100,1500],[145300,1500],[145400,1600],[145300,1700],[145100,1700],[145000,1600]],most:{"left":31500,"right":31700,"top":750,"bottom":850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145100,0],[145300,0],[145400,100],[145300,200],[145100,200],[145000,100]],most:{"left":31500,"right":31700,"top":0,"bottom":100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145900,250],[146100,250],[146200,350],[146100,450],[145900,450],[145800,350]],most:{"left":31900,"right":32100,"top":125,"bottom":225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145900,750],[146100,750],[146200,850],[146100,950],[145900,950],[145800,850]],most:{"left":31900,"right":32100,"top":375,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145900,1250],[146100,1250],[146200,1350],[146100,1450],[145900,1450],[145800,1350]],most:{"left":31900,"right":32100,"top":625,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[145900,1800],[146100,1800],[146200,1900],[146100,2000],[145900,2000],[145800,1900]],most:{"left":31900,"right":32100,"top":900,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[146700,0],[146900,0],[147000,100],[146900,200],[146700,200],[146600,100]],most:{"left":32300,"right":32500,"top":0,"bottom":100},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147100,200],[147300,200],[147400,300],[147300,400],[147100,400],[147000,300]],most:{"left":32500,"right":32700,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147500,400],[147700,400],[147800,500],[147700,600],[147500,600],[147400,500]],most:{"left":32700,"right":32900,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[146700,1800],[146900,1800],[147000,1900],[146900,2000],[146700,2000],[146600,1900]],most:{"left":32300,"right":32500,"top":900,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147100,1600],[147300,1600],[147400,1700],[147300,1800],[147100,1800],[147000,1700]],most:{"left":32500,"right":32700,"top":800,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147500,1400],[147700,1400],[147800,1500],[147700,1600],[147500,1600],[147400,1500]],most:{"left":32700,"right":32900,"top":700,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147900,1200],[148100,1200],[148200,1300],[148100,1400],[147900,1400],[147800,1300]],most:{"left":32900,"right":33100,"top":600,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147900,600],[148100,600],[148200,700],[148100,800],[147900,800],[147800,700]],most:{"left":32900,"right":33100,"top":300,"bottom":400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[147000,1000],[147200,1000],[147300,1100],[147200,1200],[147000,1200],[146900,1100]],most:{"left":32450,"right":32650,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[146700,1000],[146900,1000],[147000,1100],[146900,1200],[146700,1200],[146600,1100]],most:{"left":32300,"right":32500,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[148400,1100],[148600,1100],[148700,1200],[148600,1300],[148400,1300],[148300,1200]],most:{"left":33150,"right":33350,"top":550,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149000,1000],[149200,1000],[149300,1100],[149200,1200],[149000,1200],[148900,1100]],most:{"left":33450,"right":33650,"top":500,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149600,900],[149800,900],[149900,1000],[149800,1100],[149600,1100],[149500,1000]],most:{"left":33750,"right":33950,"top":450,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[148400,500],[148600,500],[148700,600],[148600,700],[148400,700],[148300,600]],most:{"left":33150,"right":33350,"top":250,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149000,400],[149200,400],[149300,500],[149200,600],[149000,600],[148900,500]],most:{"left":33450,"right":33650,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149600,350],[149800,350],[149900,450],[149800,550],[149600,550],[149500,450]],most:{"left":33750,"right":33950,"top":175,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149900,1000],[154500,1000],[159000,2000],[149600,2000]],most:{"left":33800,"right":38500,"top":500,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149700,0],[154800,0],[154500,450],[149900,450]],most:{"left":33850,"right":36400,"top":0,"bottom":225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[151500,900],[151500,1000],[149900,1000]],most:{"left":33950,"right":34750,"top":450,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[149900,450],[151500,450],[151500,550]],most:{"left":33950,"right":34750,"top":225,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:151500,y:750,w:3000,h:250,points:[[75750,375],[75750,500]],speed:85,currentPoint:0.568666666663602,collidable:true,pointOn:{"x":34750,"y":375},pointTo:{"x":34750,"y":500},xv:5.204748896376251e-15,yv:85,inView:false,path:[[151500,750,2.8333333333333335],[151500,1000,2.8333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:151500,y:200,w:3000,h:250,points:[[75750,100],[75750,225]],speed:85,currentPoint:0.5686666666676761,collidable:true,pointOn:{"x":34750,"y":100},pointTo:{"x":34750,"y":225},xv:5.204748896376251e-15,yv:85,inView:false,path:[[151500,200,2.8333333333333335],[151500,450,2.8333333333333335]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:160300,y:0,w:200,h:2000,tpx:162700,tpy:50,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:162500,y:700,w:400,h:100,tpx:165900,tpy:1000,bgColor:"#0d0d0d",tileColor:"#383838",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:162500,y:800,w:500,h:1300,canJump:true,inView:false,isNormal:true,})
C(0,[],[1],{type:[0,[],[1]],x:162500,y:100,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:162500,y:600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:162900,y:600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:162900,y:100,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:160500,y:0,w:2000,h:2000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:162900,y:0,w:2000,h:2000,canJump:true,inView:false,isNormal:true,})
C(0,[],[1],{type:[0,[],[1]],x:162700,y:350,r:66,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:166900,y:0,w:2000,h:2100,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:164050,y:-1050,w:3900,h:1050,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:163850,y:2000,w:3900,h:1350,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:164050,y:1750,w:850,h:450,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:166900,y:-500,w:950,h:2900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:163950,y:-650,w:950,h:2900,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:168800,y:1100,w:9200,h:950,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:168800,y:-100,w:9200,h:1000,canJump:true,inView:false,isNormal:true,})
C(1,[],[0],{type:[1,[],[0]],x:169000,y:850,w:300,h:300,active:false,morphId:69,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[169700,900],[169800,900],[169750,1000]],most:{"left":43850,"right":43900,"top":450,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[171150,1000],[171200,1100],[171100,1100]],most:{"left":44550,"right":44600,"top":500,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[172700,900],[172800,900],[172750,1000]],most:{"left":45350,"right":45400,"top":450,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[174550,1000],[174600,1100],[174500,1100]],most:{"left":46250,"right":46300,"top":500,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[176300,900],[176400,900],[176350,1000]],most:{"left":47150,"right":47200,"top":450,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[177900,900],[178000,900],[177950,950]],most:{"left":47950,"right":48000,"top":450,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[177950,1050],[178000,1100],[177900,1100]],most:{"left":47950,"right":48000,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[178000,0],[180100,0],[180100,1000],[178100,800]],most:{"left":48000,"right":49050,"top":0,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[180100,0],[182200,0],[182200,700],[180100,1000]],most:{"left":49050,"right":50100,"top":0,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[178100,1200],[180100,1300],[180100,2000],[178000,2000]],most:{"left":48000,"right":49050,"top":600,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[182200,1000],[182200,2000],[180100,2000],[180100,1300]],most:{"left":49050,"right":50100,"top":500,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[184300,800],[184300,2000],[182200,2000],[182200,1000]],most:{"left":50100,"right":51150,"top":400,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[184300,800],[186400,1300],[186400,2000],[184300,2000]],most:{"left":51150,"right":52200,"top":400,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[188500,1100],[188500,2000],[186400,2000],[186400,1300]],most:{"left":52200,"right":53250,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[188500,1100],[190600,1400],[190600,2000],[188500,2000]],most:{"left":53250,"right":54300,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[192700,1150],[192800,2000],[190600,2000],[190600,1400]],most:{"left":54300,"right":55400,"top":575,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[190600,0],[192800,0],[192700,850],[190600,1100]],most:{"left":54300,"right":55400,"top":0,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[188500,0],[190600,0],[190600,1100],[188500,800]],most:{"left":53250,"right":54300,"top":0,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[182200,0],[184300,0],[184300,500],[182200,700]],most:{"left":50100,"right":51150,"top":0,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[184300,0],[186400,0],[186400,1000],[184300,500]],most:{"left":51150,"right":52200,"top":0,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[186400,0],[188500,0],[188500,800],[186400,1000]],most:{"left":52200,"right":53250,"top":0,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[178000,1100],[178100,1200],[178000,2000]],most:{"left":48000,"right":48050,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[178000,0],[178100,800],[178000,900]],most:{"left":48000,"right":48050,"top":0,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:158950,y:1750,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:155650,y:1050,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:156550,y:1250,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:157450,y:1450,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:158250,y:1650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:159550,y:1850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:159900,y:1600,w:400,h:400,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(2,[],[1],{type:[2,[],[1]],points:[[154500,0],[160300,0],[160300,1600],[159900,1600],[154500,450]],most:{"left":36250,"right":39150,"top":0,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[20],{x:154500,y:450,w:100,h:550,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[20],{x:82050,y:500,w:100,h:550,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(0,[],[7],{type:[0,[],[7]],x:154950,y:850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[6],{type:[1,[],[6]],x:198000,y:0,w:7200,h:2000,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:198200,y:-50,w:7600,h:2200,canJump:true,inView:false,isNormal:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[197900,0],[198200,0],[198200,250]],most:{"left":57950,"right":58100,"top":0,"bottom":125},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,250],[198200,550],[197900,400]],most:{"left":57950,"right":58100,"top":125,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,550],[198200,850],[197900,700]],most:{"left":57950,"right":58100,"top":275,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,850],[198200,1150],[197900,1000]],most:{"left":57950,"right":58100,"top":425,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,1150],[198200,1450],[197900,1300]],most:{"left":57950,"right":58100,"top":575,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,1450],[198200,1750],[197900,1600]],most:{"left":57950,"right":58100,"top":725,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[198200,1750],[198200,2000],[197900,2000]],most:{"left":57950,"right":58100,"top":875,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:193700,y:1350,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:195950,y:1550,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:195950,y:350,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:196600,y:1800,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:197250,y:1900,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:195150,y:1900,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:194300,y:1800,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:193000,y:1600,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:193600,y:1900,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:195250,y:150,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:196600,y:150,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:197200,y:200,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:195900,y:2000,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:194950,y:500,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:194550,y:200,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:194000,y:150,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:193300,y:50,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:192750,y:350,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:197650,y:2150,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:197700,y:-50,r:452,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[11],{type:[1,[],[11]],x:61800,y:12100,w:100,h:900,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:57950,y:19100,w:50,h:900,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:55100,y:14400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77800,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77400,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77600,y:16100,w:100,h:1400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16600,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:16800,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17000,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77500,y:17400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:17000,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16800,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16600,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16400,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:77700,y:16200,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:34500,y:4400,w:300,h:300,renderAbove:true,})
C(3,[1],[20],{type:[3,[1],[20]],x:77650,y:4850,w:50,h:50,size:128,text:"->",angle:180,story:false,fontSize:256,hex:"#FFFFFF",pivotX:77650,pivotY:4850,rotateSpeed:0,initialRotation:3.141592653589793,})
C(3,[],[20],{type:[3,[],[20]],x:77650,y:12600,w:50,h:50,size:128,text:"<->",angle:0,story:false,fontSize:256,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:3700,w:50,h:50,size:108,text:"J",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:3900,w:50,h:50,size:108,text:"U",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4100,w:50,h:50,size:108,text:"M",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4300,w:50,h:50,size:108,text:"P",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:77800,y:4500,w:50,h:50,size:108,text:"!",angle:0,story:false,fontSize:216,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:79750,y:19650,w:50,h:50,size:128,text:"GG",angle:0,story:false,fontSize:256,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10700,y:2850,w:50,h:50,size:200,text:"!",angle:0,story:false,fontSize:400,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:12850,y:10450,w:50,h:50,size:80,text:"->",angle:0,story:false,fontSize:160,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:7200,y:6550,w:50,h:50,size:30,text:"- - - - - - - - - - - -",angle:90,story:false,fontSize:60,hex:"#FFFFFF",pivotX:7200,pivotY:6550,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[1],[20],{type:[3,[1],[20]],x:7500,y:6550,w:50,h:50,size:30,text:"- - - - - - - - - - - -",angle:90,story:false,fontSize:60,hex:"#FFFFFF",pivotX:7500,pivotY:6550,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:12500,y:10450,w:50,h:50,size:80,text:"->",angle:0,story:false,fontSize:160,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:7700,y:6700,w:50,h:50,size:50,text:"->",angle:-90,story:false,fontSize:100,hex:"#FFFFFF",pivotX:7700,pivotY:6700,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[1],[20],{type:[3,[1],[20]],x:6600,y:10450,w:50,h:50,size:80,text:"<->",angle:90,story:false,fontSize:160,hex:"#FFFFFF",pivotX:6600,pivotY:10450,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[1],[20],{type:[3,[1],[20]],x:19950,y:8900,w:50,h:50,size:28,text:"->",angle:90,story:false,fontSize:56,hex:"#FFFFFF",pivotX:19950,pivotY:8900,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:29950,y:15050,w:50,h:50,size:30,text:"Try To Die!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:35450,y:14500,w:50,h:50,size:55,text:"->",angle:90,story:false,fontSize:110,hex:"#FFFFFF",pivotX:35450,pivotY:14500,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:36200,y:15350,w:50,h:50,size:22,text:"Platform!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:32550,y:14400,w:50,h:50,size:30,text:"Kill All Enemies To Progess!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:29650,y:150,w:50,h:50,size:80,text:"!",angle:0,story:false,fontSize:160,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:30100,y:900,w:50,h:50,size:30,text:"Think Fast!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:36900,y:3300,w:50,h:50,size:30,text:"->",angle:90,story:false,fontSize:60,hex:"#FFFFFF",pivotX:36900,pivotY:3300,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:36900,y:4350,w:50,h:50,size:26,text:"SHOOT",angle:0,story:false,fontSize:52,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:36100,y:6450,w:50,h:50,size:30,text:"Don't Fail This...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:49400,y:19850,w:50,h:50,size:26,text:"Oh no, looks like you got trapped in the tetris machine!",angle:0,story:false,fontSize:52,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:44900,y:18950,w:50,h:50,size:82,text:"->",angle:-90,story:false,fontSize:164,hex:"#FFFFFF",pivotX:44900,pivotY:18950,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:42250,y:10050,w:50,h:50,size:22,text:"Press The Correct Arrow Key At The Right Time!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:44050,y:10050,w:50,h:50,size:22,text:"Keep Going!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:45700,y:10050,w:50,h:50,size:22,text:"Halfway done!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:48550,y:10050,w:50,h:50,size:22,text:"Watch Out for the last few arrows!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:47150,y:10050,w:50,h:50,size:22,text:"Don't look ahead of you!",angle:0,story:false,fontSize:44,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:750,y:550,w:50,h:50,size:30,text:"Welcome To PoQT!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:750,y:600,w:50,h:50,size:12,text:"~A collection of reaction-based games~",angle:0,story:false,fontSize:24,hex:"#FFFFFF",})


C(3,[],[20],{type:[3,[],[20]],x:85500,y:1000,w:50,h:50,size:30,text:"Good Luck.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:90200,y:1000,w:50,h:50,size:84,text:"!",angle:0,story:false,fontSize:168,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:100400,y:1000,w:50,h:50,size:62,text:"<->",angle:90,story:false,fontSize:124,hex:"#FFFFFF",pivotX:100400,pivotY:1000,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:82900,y:1000,w:50,h:50,size:30,text:"You don't know what you're getting yourself into.",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:150650,y:750,w:50,h:50,size:42,text:"You're not even halfway done.",angle:0,story:false,fontSize:84,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:175350,y:950,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:177750,y:1000,w:50,h:50,size:52,text:"!",angle:0,story:false,fontSize:104,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:173750,y:1050,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:171950,y:950,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:170550,y:1050,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:169450,y:950,w:50,h:50,size:48,text:"!",angle:0,story:false,fontSize:96,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:208900,y:1000,w:50,h:50,size:30,text:"Maybe ill make this a secret area, who knows :P",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})


    spawnPosition.x=100;
    spawnPosition.y=100;
    shared.respawnPlayer();
    colors.background="#383838"; colors.tile="#0c0e13";

    mapDimensions.x=198200;
    mapDimensions.y=20000;

    // rendering turrets in their place
    shared.renderBelowFunctions = [];
    shared.C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
        for(let i = 0; i < shared.renderBelowFunctions.length; i++){
            shared.renderBelowFunctions[i]();
        }
        shared.renderBelowFunctions.length = 0;
    }})

    const o = obstacles.pop();
    obstacles.splice(250,0,o);

    // handling stopping and starting music
    let colliding = false; let lastColliding = false;
    let state = 'allgood';
    shared.C(1,[],[3],{x:-50,y:-50,w:300,h:300,ef:()=>{
        colliding = true;
    },sf:(o,p)=>{
        if(state === 'allgood'){
            if(lastColliding === false && colliding === true){
                shared.stopMusic();
                shared.playMusic("https://www.youtube.com/watch?v=_tIM1JK1YpM");
                state = 'looking';
            }
        } else if(state === 'looking'){
            const el = document.getElementById("_tIM1JK1YpM");
            if(el !== null){
                state = 'loading';
                el.onload = () => {
                    state = 'allgood';
                    p.pos.x = 100;
                    p.pos.y = 900;
                    p.renderRadius = p.sat.r/2;
                }
            }
        }
        lastColliding = colliding;
        colliding = false;
    },cr:(o)=>{
        ctx.fillStyle = colors.tile;
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
    }})

    // temporary tp connecting z1 and z3. Prediction dodging replaced it.
    // shared.C(0,[],[12],{tpx:55150,tpy:14450,x:150,y:12250,r:150});

    // various gap-fillers
    shared.C(0,[],[3],{cr:()=>{},x:55150,y:14450,r:1,ef:()=>{
        shared.colors.background = '#212121';
        shared.colors.tile = '#000000';
    }});
    shared.C(1,[],[0],{x:59400,y:14300,w:200,h:400});
    shared.C(1,[],[0],{x:59400,y:15700,w:200,h:400});
    shared.C(1,[],[0],{x:59450,y:19100,w:100,h:900});

    shared.C(1,[],[0],{x:80000,y:0,w:2000,h:20000});

    // z3 (the second rythmn section) -> z4 (the reaction time sec)
    shared.C(1,[],[12],{tpx:30550,tpy:15050,x:79700,y:19900,w:100,h:100});
    // z9 -> z10 (final z)
    shared.C(1,[],[12],{x:47900,y:8000,w:100,h:100,tpx:82050,tpy:1000})

    // invincibility powerups

    // let str2 = '';
    // for(let i = 0; i < obs.length; i++){
    //     const o = obs[i];
    //     if(o.type !== 'invpu') continue;

    //     o.x *= 2; o.y *= 2; o.w *= 2; o.h *= 2;
    //     // invincibility powerup
    //     // safe rendering on the player

    //     // safe obj
    //     str2 += `shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
    //         if(inv${i} <= 0){
    //             o.pos.x = -1E9;
    //             return;
    //         }

    //         p.onSafe = false;
            
    //         shared.tickFns.push(() => {
    //             if(p.dead === true){
    //                 inv${i}--;
    //             }
    //             p.dead = false;
    //         })
            

    //         o.sat.r = p.sat.r + inv${i}; 
    //         o.pos.x = p.pos.x;
    //         o.pos.y = p.pos.y;
    //     }});\n`;

    //     // {
    //     //     "x": 9700,
    //     //     "y": 9850,
    //     //     "w": 300,
    //     //     "h": 100,
    //     //     "type": "invpu",
    //     //     "amount": 0.1,
    //     //     "maxAmount": 0.1
    //     // },
    //     continue;
    // }
    // eval(str2);

    for(let i = 0; i < shared.obstacles.length; i++){
        if(shared.obstacles[i].boundPlayer === undefined)continue;

        const oldEffect = shared.obstacles[i].effect[0];
        shared.obstacles[i].effect[0] = (p, res, o, id) => {
            oldEffect(p, res, o, id);
            p.touchingNormalIndexes.push(id);
        }
    }

    shared.gunActive = false;
    let deadEnemies = 0;
    let resetGunCooldown = () => {cooldown = 0;}
    {
        const enemies = obstacles.filter(o => o.isEnemy === true);
        // gun
        let bullets = [];
        let maxCooldown = 20;
        let cooldown = 0;
        let speed = 12;
        shared.C(0,[],[3],{x:-1E9,y:0,cr:()=>{
            if(shared.gunActive === false) return;
            // gun head on the player
            ctx.fillStyle = '#bd8b0d';

            const p = shared.players[shared.selfId];
            const angle = Math.sqrt(p.yv**2 + p.xv**2) < 0.01 ? 0 : Math.atan2(p.yv, p.xv);
            ctx.beginPath();
            ctx.arc(
                p.pos.x,
                p.pos.y,
                p.renderRadius / 1.7,
                0,
                Math.PI * 2
            );
            ctx.fill();
            ctx.translate(p.pos.x, p.pos.y);
            ctx.rotate(angle - Math.PI/2);
            ctx.fillRect(
                -p.renderRadius / 2.4,
                p.renderRadius / 2.4,
                p.renderRadius / 1.2,
                p.renderRadius / 1.25
            );
            ctx.rotate(-angle+Math.PI/2);
            ctx.translate(-p.pos.x, -p.pos.y);

            ctx.globalAlpha = 1;
            for (let i = 0; i < bullets.length; i++) {
                let bpos = bullets[i];
                if (bullets[i].life < 30) {
                    ctx.globalAlpha = bullets[i].life / 30;
                }
                ctx.beginPath();
                ctx.arc(
                    bpos.x,
                    bpos.y,
                    bullets[i].radius,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        },sf:(o,p)=>{
            if(shared.gunActive === false){
                bullets.length = 0;
                return;
            }
            // simulate bullets
            for(let i = 0; i < bullets.length; i++){
                bullets[i].x += bullets[i].xv;
                bullets[i].y += bullets[i].yv;
                bullets[i].life--;

                for(let j = 0; j < enemies.length; j++){
                    if(enemies[j].sat.r === undefined) continue;
                    // all enemies that im considering are circular,
                    // generalize w/ bound when adding powerup fr
                    let dist = Math.sqrt(
                        (enemies[j].pos.x - bullets[i].x) ** 2 +
                        (enemies[j].pos.y - bullets[i].y) ** 2
                    );

                    if(dist < enemies[j].sat.r + bullets[i].radius){
                        if(enemies[j].deadTime === undefined) deadEnemies++;
                        enemies[j].deadTime = 200;
                        const ef = enemies[j].effect;
                        enemies[j].effect = new Array(ef.length).fill(()=>{});
                        enemies[j].cr = () => {
                            enemies[j].deadTime--;
                            if(enemies[j].deadTime <= 0) {delete enemies[j].cr;deadEnemies--;enemies[j].deadTime = undefined;enemies[j].effect = ef;}

                            ctx.toFill = true;
                            ctx.toStroke = false;
                            ctx.lineWidth = 4; 
                            ctx.beginPath();
                            enemies[j].renderShape(enemies[j]);
                            enemies[j].renderEffect[0](enemies[j]); 
                            ctx.globalAlpha = (200 - enemies[j].deadTime) / 200;
                            if(ctx.toFill === true) ctx.fill();
                            if(ctx.toStroke === true) ctx.stroke();
                            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
                            ctx.closePath();
                            ctx.globalAlpha = 1;
                        }
                    }
                }
            }
            bullets = bullets.filter(b => b.life >= 0);

            if(input.shift === false) return;
            cooldown--;

            if(cooldown <= 0){
                cooldown += maxCooldown;

                const angle = Math.sqrt(p.yv**2 + p.xv**2) < 0.01 ? 0 : Math.atan2(p.yv, p.xv);
                bullets.push({
                    x: p.pos.x,
                    y: p.pos.y,
                    radius: p.sat.r / 1.2,
                    xv: Math.cos(angle) * speed,
                    yv: Math.sin(angle) * speed,
                    life: 180
                })
            }
        }})
    }

    // {
    //     "x": 16450,
    //     "y": 7650,
    //     "w": 25,
    //     "h": 25,
    //     "size": 85,
    //     "text": "Shoot {me().aliveEnemiesCustom} More",
    //     "angle": 0,
    //     "story": false
    // },

    // shoot door
    {
        let shootDoorOpen = false;
        shared.C(3,[],[20],{hex:"#FFFFFF", alpha: 1, x: 16450*2,y: 7650*2,fontSize: 170, text:`Shoot ${6 - deadEnemies} more!`,sf:(o,p)=>{
            o.text = `Shoot ${6 - deadEnemies} more!`;
            if(shootDoorOpen === true) o.text = "Door Unlocked!";
            o.dimensions = shared.generateDimensions(o);
            // o.topLeft = shared.generateTopLeftCoordinates(o);
            o.pos.x = 16450*2 - o.dimensions.x / 2;
            o.pos.y = 7650*2 - o.dimensions.y / 2;
            if(p.pos.x <= 31000){
                shootDoorOpen = false;
            } else if(deadEnemies === 6){
                shootDoorOpen = true;
            }
        }})

        shared.C(1,[],[0],{x:33000,y:13500,w:700,h:1000,sf:(o)=>{
            if(shootDoorOpen === true){
                o.pos.x = -1E9;
            } else {
                o.pos.x = 33000;
            }
        }})
    }
    
    // flip screen
    {
        let collided = false; let lastCollided = false;
        shared.C(1,[],[3],{x:33200,y:3100,w:1600,h:1600,cr:()=>{},ef:()=>{
            collided = true;
            canvas.style.transform = "scale(-1,-1)";
        },sf:()=>{
            if(lastCollided === true && collided === false){
                canvas.style.transform = "";
            }
            lastCollided = collided;
            collided = false;
        }})
    }

    // falling arrow
    // let start = 0;
    {
        let time = 0;
        let active = false;
        let looking = false;
        let loading = false;
        shared.C(1,[],[3],{x:42000,y:10100,w:600,h:500,cr:()=>{},ef:(p)=>{
            if(active === true) return;
            if(loading === true) return;
            if(looking === true){
                activeArrows.length = 0;
                p.pos.x = 42250;
                p.pos.y = 10350;

                const el = document.getElementById("817vQUJINd8");
                if(el !== null){
                    looking = false;
                    loading = true;
                    el.onload = () => {
                        start = window.frames;
                        loading = false;
                        active = true;
                        for(let i = 0; i < arrows.length; i++){
                            activeArrows[i] = arrows[i];
                        }
                        time = 0;
                    }
                }
                return;
            }

            shared.stopMusic();
            shared.playMusic("https://www.youtube.com/watch?v=817vQUJINd8");
            activeArrows.length = 0;
            p.pos.x = 42250;
            p.pos.y = 10350;
            looking = true;
        }})
        // {
        //     "x": 21249,
        //     "y": 5050,
        //     "w": 0,
        //     "h": 250,
        //     "type": "farrow",
        //     "notes": null,
        //     "active": true,
        //     "arrows": [...]
        // },

        // direction, time
        const arrows = [
            [
                "up",
                1.0666666666666667
            ],
            [
                "left",
                1.6166666666666667
            ],
            [
                "down",
                2.183333333333333
            ],
            [
                "right",
                2.6333333333333333
            ],
            [
                "left",
                3.816666666666667
            ],
            [
                "up",
                4.333333333333333
            ],
            [
                "down",
                4.783333333333333
            ],
            [
                "right",
                5.233333333333333
            ],
            [
                "up",
                6.5
            ],
            [
                "down",
                6.866666666666666
            ],
            [
                "left",
                7.383333333333334
            ],
            [
                "right",
                7.833333333333333
            ],
            [
                "up",
                8.966666666666667
            ],
            [
                "down",
                9.5
            ],
            [
                "left",
                10.016666666666667
            ],
            [
                "right",
                10.466666666666667
            ],
            [
                "right",
                11.533333333333333
            ],
            [
                "right",
                12.116666666666667
            ],
            [
                "left",
                12.633333333333333
            ],
            [
                "up",
                13.133333333333333
            ],
            [
                "right",
                14.016666666666667
            ],
            [
                "down",
                14.55
            ],
            [
                "left",
                14.966666666666667
            ],
            [
                "right",
                16.066666666666666
            ],
            [
                "left",
                16.583333333333332
            ],
            [
                "down",
                17.133333333333333
            ],
            [
                "up",
                17.55
            ],
            [
                "right",
                18.583333333333332
            ],
            [
                "left",
                19.15
            ],
            [
                "down",
                19.783333333333335
            ],
            [
                "up",
                20.116666666666667
            ],
            [
                "right",
                21.166666666666668
            ],
            [
                "left",
                21.783333333333335
            ],
            [
                "up",
                22.366666666666667
            ],
            [
                "down",
                22.65
            ],
            [
                "right",
                23.816666666666666
            ],
            [
                "down",
                24.983333333333334
            ],
            [
                "up",
                25.716666666666665
            ],
            [
                "left",
                26.35
            ],
            [
                "right",
                26.916666666666668
            ],
            [
                "down",
                27.416666666666668
            ],
            [
                "up",
                27.883333333333333
            ],
            [
                "left",
                28.95
            ],
            [
                "down",
                29.5
            ],
            [
                "right",
                30.066666666666666
            ],
            [
                "up",
                30.483333333333334
            ],
            [
                "up",
                31.533333333333335
            ],
            [
                "down",
                32.083333333333336
            ],
            [
                "left",
                32.61666666666667
            ],
            [
                "right",
                33.1
            ],
            [
                "down",
                34.11666666666667
            ],
            [
                "up",
                34.65
            ],
            [
                "left",
                35.233333333333334
            ],
            [
                "right",
                35.61666666666667
            ],
            [
                "up",
                36.65
            ],
            [
                "right",
                37.21666666666667
            ],
            [
                "left",
                37.233333333333334 + 12 / 60
            ],
            [
                "down",
                37.85
            ],
            [
                "up",
                38.18333333333333
            ],
            [
                "right",
                39.25
            ],
            [
                "left",
                39.88333333333333
            ],
            [
                "down",
                40.516666666666666
            ],
            [
                "up",
                41.13333333333333
            ],
            [
                "right",
                41.833333333333336
            ],
            [
                "left",
                42.4
            ],
            [
                "down",
                42.96666666666667
            ],
            [
                "up",
                43.35
            ],
            [
                "right",
                44.4
            ],
            [
                "down",
                44.95
            ],
            [
                "left",
                45.65
            ],
            [
                "up",
                46.1
            ],
            [
                "down",
                47
            ],
            [
                "left",
                47.583333333333336
            ],
            [
                "right",
                48.166666666666664
            ],
            [
                "up",
                48.46666666666667
            ],
            [
                "down",
                49.6
            ],
            [
                "up",
                50.2
            ],
            [
                "down",
                50.833333333333336
            ],
            [
                "left",
                51.45
            ],
            [
                "down",
                52.1
            ],
            [
                "right",
                52.766666666666666
            ],
            [
                "up",
                53.25
            ],
            [
                "down",
                53.666666666666664
            ],
            [
                "left",
                54.7
            ],
            [
                "right",
                55.35
            ],
            [
                "up",
                55.96666666666667
            ],
            [
                "down",
                56.583333333333336
            ],
            [
                "left",
                57.28333333333333
            ],
            [
                "right",
                57.9
            ],
            [
                "up",
                58.36666666666667
            ],
            [
                "down",
                58.85
            ],
        ];

        for(let i = 0; i < arrows.length; i++){
            arrows[i][2] = Math.random() * Math.PI * 2;
        }

        let activeArrows = [];

        shared.C(0,[],[3],{x:-1E9,y:0,r:1,sf:(o,p)=>{
            if(active === false) {time = 0; return;}
            if(p.dead === true) {
                active = false; time = 0;
                activeArrows = [];
                return;
            }
            time += 1/60;
        },cr:()=>{
            if(active === false) return;
            const p = shared.players[shared.selfId];
            const percentToInvert = (Math.sin(window.frames / 60 * 0.6)+1)/2*35+65;
            for(let i = 0; i < activeArrows.length; i++){
                const direction = activeArrows[i][0];
                const timeWhenZero = activeArrows[i][1];
                const speed = (320 + timeWhenZero * 5);

                const dist = (timeWhenZero - time) * speed;
                const angle = activeArrows[i][2];

                const x = p.pos.x + Math.cos(angle) * dist;
                const y = p.pos.y + Math.sin(angle) * dist;

                if(dist > 1.5*Math.max(canvas.w,canvas.h)) continue;
                else if(dist < 0) p.dead = true;

                if(shared.input[direction] === true && dist < 100){
                    const directions = ['down','up','left','right'];
                    let hitArrow = true;
                    for(let i = 0; i < directions.length; i++){
                        if(shared.input[directions[i]] === true && directions[i] !== direction){
                            hitArrow = false;
                            break;
                        }
                    }
                    if(hitArrow === true){
                        activeArrows.splice(i,1);
                        i--;
                        continue;   
                    }
                }

                ctx.translate(x,y);
                if(direction === 'down'){
                    ctx.rotate(Math.PI/2+Math.PI/2);
                } else if(direction === 'up'){
                    ctx.rotate(Math.PI*3/2+Math.PI/2);
                } else if(direction === 'left'){
                    ctx.rotate(Math.PI+Math.PI/2);
                } else if(direction === 'right'){
                    ctx.rotate(Math.PI/2);
                }
                ctx.filter = `invert(${percentToInvert}%)`;
                ctx.drawImage(shared.arrowImg, -50, -50, 100, 100);
                ctx.filter = 'none';
                if(direction === 'down'){
                    ctx.rotate(-(Math.PI/2+Math.PI/2));
                } else if(direction === 'up'){
                    ctx.rotate(-(Math.PI*3/2+Math.PI/2));
                } else if(direction === 'left'){
                    ctx.rotate(-(Math.PI+Math.PI/2));
                } else if(direction === 'right'){
                    ctx.rotate(-(Math.PI/2));
                }
                ctx.translate(-x,-y);

                shared.colors.vignette.holeFunctions.push(() => {
                    ctx.moveTo(x,y);
                    ctx.arc(x,y,70.71067811865476,0,Math.PI*2);
                })
            }
        }})
    }

    // z2 music
    shared.C(1,[],[26],{x:0,w:3200,y:12100,h:1800,musicPath:"https://www.youtube.com/watch?v=-afCVTd3OXs"});

    // code used to generate

    // setTimeout(() => {
    //     shared.onkeydown({repeat: false, type: 'keydown', code: 'KeyO', preventDefault:()=>{}});
    //     let arrows = [];
    //     let codeToDir = {
    //         'KeyW': 'up',
    //         'KeyA': 'left',
    //         'KeyS': 'down',
    //         'KeyD': 'right'
    //     };
    //     shared.onkeydown = (e) => {
    //         console.log(codeToDir[e.code], e.code, e.repeat);
    //         if(e.repeat === true || codeToDir[e.code] === undefined) return;
            
    //         arrows.push([
    //             codeToDir[e.code],
    //             320,
    //             (window.frames - start) / 60,
    //         ])
    //         console.log('pushing arrow');
    //     }
    //     shared.ar = arrows;
    // }, 3000)
    // Z10 OBS
    let z10active = false;
    shared.C(1,[],[3],{x:82000,y:900,w:100,h:100,musicPath:'https://www.youtube.com/watch?v=Okiynofp4zQ',ef:()=>{
        if(z10active === true) return;
        z10active = true;

        if(shared.skullImg === undefined){
            shared.skullImg = new Image();
            shared.skullImg.src = 'https://svgsilh.com/svg/1294357.svg';
            shared.skullImg.onload = () => {
                shared.skullImgLoaded = true;
            }
        }

        shared.players[shared.selfId].cr = (player) => {
            const lastR = player.sat.r;
            player.sat.r = player.renderRadius;
            ctx.save();
            ctx.beginPath();
            player.renderShape(player);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 8;
            ctx.stroke();
            ctx.clip();
            if(shared.skullImgLoaded === true)ctx.drawImage(shared.skullImg, player.pos.x - player.sat.r, player.pos.y - player.sat.r, player.sat.r * 2, player.sat.r * 2);
            ctx.closePath();
            ctx.restore();
            player.sat.r = lastR;
        }
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].isWinpad === true) continue;
            // if(obstacles[i].sat.r === undefined){
            //     if(obstacles[i].sat.points[0].x < 79000 || obstacles[i].isText !== undefined) continue;
            // } else {
            //     if(obstacles[i].sat.r < 79000) continue;
            // }
            

            // if(obstacles[i].isNormal === undefined && obstacles[i].boundPlayer === undefined) continue;

            // console.log(obstacles[i]);

            // check if is solid. Things like conveyor shouldnt render like this.
            ctx.globalAlpha = 1;
            obstacles[i].renderEffect[0](obstacles[i]);
            const a = ctx.globalAlpha;
            if(ctx.cleanUpFunction !== undefined) { ctx.cleanUpFunction(); ctx.cleanUpFunction = undefined; }
            if(a !== 1) {ctx.globalAlpha = 1; continue;}

            obstacles[i].cr = () => {
                ctx.strokeStyle = blendColor('#FF0000','#000000',((Math.sin(window.frames / 200)+1)/2) * 0.5);
                ctx.lineWidth = 5;
                ctx.fillStyle = 'black';
                ctx.beginPath();
                obstacles[i].renderShape(obstacles[i]);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        }
    }});

    shared.C(1,[],[3],{x:82100,y:900,w:100,h:100});
    shared.C(1,[],[3],{x:82000,y:1000,w:100,h:100});
    shared.C(1,[],[3],{x:82100,y:1000,w:100,h:100});
    

    shared.C(0,[],[26],{x:82100,y:1000,r:66,musicPath:'https://www.youtube.com/watch?v=Okiynofp4zQ'});
    shared.C(1,[],[0],{x:82000,y:2000,w:200000,h:18000})

    shared.C(0,[],[3],{x:162700,y:100,r:0.001,cr:()=>{},ef:(p)=>{
        for(let i = 0; i < p.forces.length; i+=3){
            p.forces[i] = 0;// set x component to 0
        }
    }})

    {
        let door = obstacles.filter(o => o.pos.x === 169000 && o.pos.y === 850)[0];
        let timeGoing = false;
        let time = 300;
        let lastTime = -1;
        shared.C(0,[],[3],{x:165900,y:1000,r:1,cr:()=>{},ef:()=>{
            timeGoing = true;
            lastTime = window.frames;
        },sf:(o,p)=>{
            if(p.dead === true){
                door.pos.x = 169000;
                return;
            }
            if(timeGoing === false) return;
            if(window.frames - time > lastTime){
                timeGoing = false;
                door.pos.x = -1E9;
            }
        }})
    }

    // prediction-dodging
{
    let lastW = canvas.w;
    let lastH = canvas.h;
    canvas.w = 3200;
    canvas.h = 1800;

    // OBSTACLE CLASSES
    class Turret {
        constructor (x,y,r,shootRadius,shootTime,shootSpeed,speedupMult){
            this.x = x;
            this.y = y;
            this.radius = r;
            this.shootRadius = shootRadius;
            this.shootTimer = shootTime;
            this.shootTime = shootTime;
            this.shootSpeed = shootSpeed;
            this.bullets = [];
            this.type = 'turret';
            this.speedUpMult = speedupMult;
        }
        render(){
            ctx.lineWidth = 6 * 2;
            ctx.strokeStyle = '#453232';
            ctx.fillStyle = '#291f1f';
            for(let bullet of this.bullets){
                ctx.beginPath();
                ctx.arc(bullet.x,bullet.y,bullet.radius,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            ctx.strokeStyle = '#323645';
            ctx.fillStyle = '#1f2229';
            ctx.beginPath();
            ctx.lineWidth = 4 * 2;
            ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
        simulate(pl){
            this.shootTimer --;
            if(this.shootTimer < 0){
                let angle = this.predictAngle(pl);
                this.bullets.push(new Bullet(this.x,this.y,this.shootRadius,this.shootSpeed,angle));
                this.shootTimer += this.shootTime;
                this.shootTime *= this.speedUpMult;
            }
            this.bullets.forEach((b,i) => {
                let toDestroy = b.simulate();
                if(toDestroy){
                    this.bullets.splice(i,1);
                }
            })
        }
        predictAngle(pl){
            let possibleAngles = [];
            for(let i = 0; i < Math.PI*2; i+=Math.PI/180){
                possibleAngles.push({
                    angle:i,
                    x: this.x,
                    y: this.y,
                    radius: this.shootRadius,
                    xv:Math.cos(i)*this.shootSpeed,
                    yv:Math.sin(i)*this.shootSpeed
                });
            }
            let futurepl = JSON.parse(JSON.stringify(pl));
            for(let i = 0; i < 2000; i++){
                // TODO: account for wall bounding
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                for(let shot of possibleAngles){
                    shot.x += shot.xv;
                    shot.y += shot.yv;
                    if(intersectingCircleCircle(shot,futurepl)){
                        return(shot.angle);
                    }
                }
            }
            return (Math.atan2(this.y-pl.y,this.x-pl.x)+Math.PI);
        }
    }
    
    class Bullet {
        constructor(x,y,r,speed,angle){
            this.x = x;
            this.y = y;
            this.radius = r;
            this.xv = Math.cos(angle)*speed;
            this.yv = Math.sin(angle)*speed;
            this.type = 'bullet'
        }
        simulate(){
            this.x += this.xv;
            this.y += this.yv;
            if(this.x + this.radius < 0){
                return true;
            } else if(this.x - this.radius > canvas.w){
                return true;
            }
            if(this.y + this.radius < 0){
                return true;
            } else if(this.y - this.radius > canvas.h){
                return true;
            }
        }
    }
    
    class LaserSpawner {
        constructor (spawnTime,speedupMult,warmUpTime,laserLife){
            this.spawnTime = spawnTime;
            this.laserLife = laserLife;
            this.spawnTimer = spawnTime;
            this.warmUpTime = warmUpTime;
            this.lasers = [];
            this.type = 'laserspawner';
            this.speedUpMult = speedupMult;
        }
        render(){
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#323645';
            ctx.fillStyle = '#1f2229';
            ctx.lineWidth = 20 * 2;
            ctx.globalAlpha = 0.5;
            for(let laser of this.lasers){
                ctx.globalAlpha = 0.5;
                if(!laser.active){
                    ctx.globalAlpha = 0.5*(1-laser.warmUpTime/this.warmUpTime);
                    ctx.strokeStyle = '#323645';
                } else {
                    ctx.strokeStyle = '#453232';//'#291f20';
                    if(laser.life < this.laserLife/5){
                        ctx.globalAlpha = 0.5*(laser.life*5/this.laserLife);
                    }
                }
                ctx.beginPath();
                ctx.moveTo(laser.firstPoint.x,laser.firstPoint.y);
                ctx.lineTo(laser.secondPoint.x,laser.secondPoint.y);
                ctx.stroke();
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
        simulate(pl){
            this.spawnTimer --;
            if(this.spawnTimer < 0){
                let points = this.predictPoints(pl);
                this.lasers.push(new Laser(points.firstPoint,points.secondPoint,this.warmUpTime,this.laserLife));
                this.spawnTimer += this.spawnTime;
                this.spawnTime *= this.speedUpMult;
            }
            this.lasers.forEach((l,i) => {
                let toDestroy = l.simulate();
                if(toDestroy){
                    this.lasers.splice(i,1);
                }
            })
        }
        intersectingLineCircle(line,circle){
            return lineCircleCollide([line.firstPoint.x,line.firstPoint.y],[line.secondPoint.x,line.secondPoint.y], circle, circle.radius);
        }
        predictPoints(pl){
            let possibleLasers = [];
            for(let i = 0; i < 250; i++){
                possibleLasers.push({
                    firstPoint: this.generateRandomWallPosition(),
                    secondPoint: this.generateRandomWallPosition(),
                });
                while(possibleLasers[possibleLasers.length-1].firstPoint.x === possibleLasers[possibleLasers.length-1].secondPoint.x || possibleLasers[possibleLasers.length-1].firstPoint.y === possibleLasers[possibleLasers.length-1].secondPoint.y){
                    possibleLasers[possibleLasers.length-1].firstPoint = this.generateRandomWallPosition();
                }
            }
            let futurepl = JSON.parse(JSON.stringify(pl));
            let futureWarmupTimer = JSON.parse(JSON.stringify(this.warmUpTime));
            // TODO: later do this.warmuptimer--;
            while(futureWarmupTimer > 0){
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                futureWarmupTimer--;
            }
            for(let laser of possibleLasers){
                if(this.intersectingLineCircle(laser,futurepl)){
                    return(laser);
                }
            }
            return possibleLasers[0];
        }
        generateRandomWallPosition(){
            let wall = Math.random()*4;
            if(wall < 1){
                return {
                    x: Math.random()*canvas.w,
                    y: 0
                }
            } else if(wall < 2){
                return {
                    x: Math.random()*canvas.w,
                    y: canvas.h
                }
            } else if(wall < 3){
                return {
                    x: 0,
                    y: Math.random()*canvas.h
                }
            } else {
                return {
                    x: canvas.w,
                    y: Math.random()*canvas.h
                }
            }
        }
    }
    
    class Laser {
        constructor(firstPoint, secondPoint, warmUpTime, life){
            this.firstPoint = firstPoint;
            this.secondPoint = secondPoint;
            this.warmUpTime = warmUpTime;
            this.life = life+warmUpTime;
            this.type = 'laser';
            this.active = false;
        }
        simulate(){
            this.life--;
            this.warmUpTime--;
            if(this.warmUpTime < 0){
                this.active = true;
            }
            if(this.life < 0){
                return true;
            }
        }
    }
    
    class NormalEnemySpawner {
        constructor (spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime){
            this.spawnRadius = spawnRadius;
            this.spawnTime = spawnTime;
            this.spawnSpeed = spawnSpeed;
            this.spawnLife = spawnLife;
            this.warmUpTime = warmUpTime;
            this.enemies = [];
            this.type = 'normalspawner';
            this.speedUpMult = speedupMult;
            this.spawnTimer = spawnTime;
        }
        render(){
            ctx.lineWidth = 6 * 2;
            ctx.strokeStyle = '#323645';
            ctx.fillStyle = '#1f2229';
            for(let enemy of this.enemies){
                ctx.globalAlpha = 1;
                if(!enemy.active){
                    ctx.fillStyle = '#1f2229';
                    ctx.strokeStyle = '#323645';
                    ctx.globalAlpha = 1-enemy.warmUpTime/this.warmUpTime;
                } else {
                    ctx.strokeStyle = '#453232';
                    ctx.fillStyle = '#291f1f';
                    if(enemy.life < this.spawnLife/5){
                        ctx.globalAlpha = enemy.life*5/this.spawnLife;
                    }
                }
                ctx.beginPath();
                ctx.arc(enemy.x,enemy.y,enemy.radius,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
        simulate(pl){
            this.spawnTimer--;
            if(this.spawnTimer < 0){
                let enemy = this.predictAngle(pl);
                
                this.enemies.push(new NormalEnemy(enemy.x,enemy.y,this.spawnRadius,this.spawnSpeed,this.warmUpTime,this.spawnLife,enemy.angle));
                this.spawnTimer += this.spawnTime;
                this.spawnTime *= this.speedUpMult;
            }
            this.enemies.forEach((e,i) => {
                let toDestroy = e.simulate();
                if(toDestroy){
                    this.enemies.splice(i,1);
                }
            })
        }
        predictAngle(pl){
            let possibleEnemies = [];
            for(let i = 0; i < 1000; i++){
                let angle = Math.random()*Math.PI*2;
                const dims = {
                    x: Math.random()*canvas.w,
                    y: Math.random()*canvas.h,
                }
                possibleEnemies.push({
                    angle: angle,
                    x: dims.x,
                    y: dims.y,
                    radius: this.spawnRadius,
                    xv:Math.cos(angle)*this.spawnSpeed,
                    yv:Math.sin(angle)*this.spawnSpeed,
                    originalx: dims.x,
                    originaly: dims.y,
                });
            }
            let futurepl = JSON.parse(JSON.stringify(pl));
            let futureWarmupTimer = this.warmUpTime;
            while(futureWarmupTimer > 0){
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                // will still be moving while warmuptimer is going; just wont collide
                for(let e of possibleEnemies){
                    e.x += e.xv;
                    e.y += e.yv;
                }
                futureWarmupTimer--;
            }
            for(let i = 0; i < this.spawnLife; i++){
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                for(let e of possibleEnemies){
                    e.x += e.xv;
                    e.y += e.yv;
                    if(intersectingCircleCircle(e,futurepl)){
                        return({...e, x: e.originalx, y: e.originaly});
                    }
                }
            }
            return possibleEnemies[0];
        }
    }
    
    class NormalEnemy {
        constructor(x,y,r,speed,warmUpTime,life,angle){
            this.x = x;
            this.y = y;
            this.life = life+warmUpTime;
            this.warmUpTime = warmUpTime;
            this.radius = r;
            this.xv = Math.cos(angle)*speed;
            this.yv = Math.sin(angle)*speed;
            this.type = 'normalenemy';
            this.active = false;
        }
        simulate(){
            this.warmUpTime--;
            if(this.warmUpTime < 0){
                this.active = true;
            }
            this.life --;
            if(this.life < 0){
                return true;
            }
            this.x += this.xv;
            this.y += this.yv;
            if(this.x - this.radius < 0){
                this.xv *= -1;
                this.x = this.radius;
            } else if(this.x + this.radius > canvas.w){
                this.xv *= -1;
                this.x = canvas.w-this.radius;
            }
            if(this.y - this.radius < 0){
                this.yv *= -1;
                this.y = this.radius;
            } else if(this.y + this.radius > canvas.h){
                this.yv *= -1;
                this.y = canvas.h-this.radius;
            }
        }
    }
    
    class HomingEnemySpawner {
        constructor (spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime,homingAngleIncrement){
            this.spawnRadius = spawnRadius;
            this.spawnTime = spawnTime;
            this.spawnSpeed = spawnSpeed;
            this.spawnLife = spawnLife;
            this.warmUpTime = warmUpTime;
            this.enemies = [];
            this.type = 'homingspawner';
            this.speedUpMult = speedupMult;
            this.spawnTimer = spawnTime;
            this.homingAngleIncrement = homingAngleIncrement
        }
        render(){
            ctx.lineWidth = 6 * 2;
            ctx.strokeStyle = '#454032';
            ctx.fillStyle = '#29281f';
            for(let enemy of this.enemies){
                ctx.globalAlpha = 1;
                if(!enemy.active){
                    ctx.strokeStyle = '#454032';
                    ctx.fillStyle = '#29281f';
                    ctx.globalAlpha = 1-enemy.warmUpTime/this.warmUpTime;
                } else {
                    ctx.strokeStyle = '#453a32';
                    ctx.fillStyle = '#291f1f';
                    if(enemy.life < this.spawnLife/5){
                        ctx.globalAlpha = enemy.life*5/this.spawnLife;
                    }
                }
                ctx.beginPath();
                ctx.arc(enemy.x,enemy.y,enemy.radius,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
        simulate(pl){
            this.spawnTimer--;
            if(this.spawnTimer < 0){
                let enemy = this.predictAngle(pl);
                
                this.enemies.push(new HomingEnemy(enemy.x,enemy.y,this.spawnRadius,this.spawnSpeed,this.warmUpTime,this.spawnLife,this.homingAngleIncrement,enemy.angle));
                this.spawnTimer += this.spawnTime;
                this.spawnTime *= this.speedUpMult;
            }
            this.enemies.forEach((e,i) => {
                let toDestroy = e.simulate(pl);
                if(toDestroy){
                    this.enemies.splice(i,1);
                }
            })
        }
        predictAngle(pl){
            let possibleEnemies = [];
            for(let i = 0; i < 1000; i++){
                let angle = Math.random()*Math.PI*2;
                const dims = {
                    x: Math.random()*canvas.w,
                    y: Math.random()*canvas.h,
                }
                possibleEnemies.push({
                    angle: angle,
                    x: dims.x,
                    y: dims.y,
                    radius: this.spawnRadius,
                    xv:Math.cos(angle)*this.spawnSpeed,
                    yv:Math.sin(angle)*this.spawnSpeed,
                    originalx: dims.x,
                    originaly: dims.y,
                });
            }
            let futurepl = JSON.parse(JSON.stringify(pl));
            let futureWarmupTimer = this.warmUpTime;
            while(futureWarmupTimer > 0){
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                // will still be moving while warmuptimer is going; just wont collide
                for(let e of possibleEnemies){
                    e.x += e.xv;
                    e.y += e.yv;
                }
                futureWarmupTimer--;
            }
            for(let i = 0; i < this.spawnLife; i++){
                futurepl.x += futurepl.xv;
                futurepl.y += futurepl.yv;
                futurepl.xv *= 0.99;
                futurepl.yv *= 0.99;
                for(let e of possibleEnemies){
                    e.x += e.xv;
                    e.y += e.yv;
                    if(intersectingCircleCircle(e,futurepl)){
                        return({...e, x: e.originalx, y: e.originaly});
                    }
                }
            }
            return possibleEnemies[0];
        }
    }
    
    class HomingEnemy {
        constructor(x,y,r,speed,warmUpTime,life,angleIncrement,angle){
            this.x = x;
            this.y = y;
            this.life = life+warmUpTime;
            this.warmUpTime = warmUpTime;
            this.radius = r;
            this.xv = Math.cos(angle)*speed;
            this.yv = Math.sin(angle)*speed;
            this.speed = speed;
            this.angle = Math.atan2(this.yv,this.xv);
            this.type = 'homingenemy';
            this.active = false;
            this.angleIncrement = angleIncrement;
        }
        simulate(pl){
            this.warmUpTime--;
            if(this.warmUpTime < 0){
                this.active = true;
            }
            this.life--;
            if(this.life < 0){
                return true;
            }
    
            let futurepl = JSON.parse(JSON.stringify(pl));
            for(let i = 0; i < 10; i++){
                let dist = Math.sqrt((futurepl.x-this.x)**2+(futurepl.y-this.y)**2);
                let time = dist/this.speed;
                for(let s = 0; s < time; s++){
                    futurepl.x += futurepl.xv;
                    futurepl.y += futurepl.yv;
                    futurepl.xv *= 0.99;
                    futurepl.yv *= 0.99;
                }
            }
            
            var dX = futurepl.x - this.x;
            var dY = futurepl.y - this.y;
            this.targetAngle = Math.atan2(dY, dX);
            var dif = this.targetAngle - this.angle;
            var angleDif = Math.atan2(Math.sin(dif), Math.cos(dif));
            if (Math.abs(angleDif) >= this.angleIncrement) {
                if (angleDif < 0) {
                    this.angle -= this.angleIncrement;
                } else {
                    this.angle += this.angleIncrement;
                }
            }
            this.xv = Math.cos(this.angle)*this.speed;
            this.yv = Math.sin(this.angle)*this.speed;
            this.x += this.xv;
            this.y += this.yv;
            if(this.x - this.radius < 0){
                this.xv *= -1;
                this.x = this.radius;
            } else if(this.x + this.radius > canvas.w){
                this.xv *= -1;
                this.x = canvas.w-this.radius;
            }
            if(this.y - this.radius < 0){
                this.yv *= -1;
                this.y = this.radius;
            } else if(this.y + this.radius > canvas.h){
                this.yv *= -1;
                this.y = canvas.h-this.radius;
            }
            this.angle = Math.atan2(this.yv,this.xv);
        }
    }

    // PHYSICS FUNCTIONS
    function runCollision(pl, obstacles) {
        pl.sat = new SAT.Circle(new SAT.Vector(pl.x, pl.y), pl.radius);
        for (let o of obstacles) {
            if (o.type === 'turret') {
                boundplCircle(pl, o);
                for (const bullet of o.bullets) {
                    if (intersectingCircleCircle(bullet, pl)) {
                        return true;
                    }
                }
            } else if (o.type === 'laserspawner') {
                for (const laser of o.lasers) {
                    if (!laser.active) {
                        continue;
                    }
                    if (o.intersectingLineCircle(laser, pl)) {
                        return true;
                    }
                }
            } else if (o.type.endsWith('spawner')) {
                for (const enemy of o.enemies) {
                    if (!enemy.active) {
                        continue;
                    }
                    if (intersectingCircleCircle(enemy, pl)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    function intersectingCircleCircle(circle1, circle2) {
        return Math.sqrt((circle2.x - circle1.x) ** 2 + (circle2.y - circle1.y) ** 2) < circle1.radius + circle2.radius;
    }
    
    function boundplCircle(pl, circle) {
        circle.sat = new SAT.Circle(new SAT.Vector(circle.x, circle.y), circle.radius);
    
        const response = new SAT.Response();
        const collided = SAT.testCircleCircle(pl.sat, circle.sat, response);
        if (collided) {
            pl.x -= response.overlapV.x;
            pl.y -= response.overlapV.y;
        }
    }
    
    function pointCircleCollide(po, pos, r) {
        if (!Array.isArray(po)) {
            return false;
        }
        const [x, y] = po;
        return (x - pos.x) * (x - pos.x) + (y - pos.y) * (y - pos.y) <= r * r;
    }
    
    const tmp = [0, 0]
    
    function lineCircleCollide(a, b, circle, radius, nearest) { // dont add nearest param when using dis fyunction
    
        if (pointCircleCollide(a, circle, radius)) {
            if (nearest) {
                nearest[0] = a[0]
                nearest[1] = a[1]
            }
            return true
        } if (pointCircleCollide(b, circle, radius)) {
            if (nearest) {
                nearest[0] = b[0]
                nearest[1] = b[1]
            }
            return true
        }
    
        let x1 = a[0],
            y1 = a[1],
            x2 = b[0],
            y2 = b[1],
            cx = circle.x,
            cy = circle.y;
    
        let dx = x2 - x1
        let dy = y2 - y1
    
        let lcx = cx - x1
        let lcy = cy - y1
        // projection
        let dLen2 = dx * dx + dy * dy;
        let px = dx
        let py = dy
        if (dLen2 > 0) {
            let dp = (lcx * dx + lcy * dy) / dLen2
            px *= dp
            py *= dp
        }
    
        if (!nearest)
            nearest = tmp
        nearest[0] = x1 + px
        nearest[1] = y1 + py
    
        let pLen2 = px * px + py * py
    
        return pointCircleCollide(nearest, circle, radius)
            && pLen2 <= dLen2 && (px * dx + py * dy) >= 0
    }

    // pl
    class Player {
        constructor(x,y,r,color,speed){
            this.x = x;
            this.y = y;
            this.xv = 0;
            this.yv = 0;
            this.radius = r;
            this.color = color;
            this.speed = speed;
        }
        handleInput(input){
            if(input.up){
                this.yv-=this.speed;
            }
            if(input.down){
                this.yv+=this.speed;
            }
            if(input.left){
                this.xv-=this.speed;
            }
            if(input.right){
                this.xv+=this.speed;
            }
        }
        move(){
            this.x += this.xv;
            this.y += this.yv;
            this.xv *= 0.99;
            this.yv *= 0.99;
            this.boundWalls();
        }
        boundWalls(){
            if(this.x - this.radius < 0){
                this.x = this.radius;
                this.xv *= 0.9;
            } else if(this.x + this.radius > canvas.w){
                this.x = canvas.w-this.radius;
                this.xv *= 0.9;
            }
            if(this.y - this.radius < 0){
                this.y = this.radius;
                this.yv *= 0.9;
            } else if(this.y + this.radius > canvas.h){
                this.y = canvas.h-this.radius;
                this.yv *= 0.9;
            }
        }
    }
    let p = new Player(canvas.w * Math.random(), canvas.h * Math.random(), 40, 'red', .2);

    // RENDER
    function renderPredictionDodging(pl, obs) {
        // ctx.fillStyle = 'black'
        // ctx.fillRect(0, 0, canvas.w, canvas.h);
        // ctx.fillStyle = pl.color;
        // ctx.beginPath();
        // ctx.arc(pl.x, pl.y, pl.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        ctx.fillStyle = 'grey';
        ctx.font = "56px Inter";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        if (currentWaveTime > 0) {
            ctx.fillText((currentWaveTime / 60).toFixed(2), canvas.w / 2, 10);
        }
        obs.forEach((o) => {
            o.render();
        })
    }
    shared.C(1,[],[5],{x:31800,y:7050,w:100,h:100});

    // WAVES
    function getWaves(){
        return [
            {
                obstacles: [
                    //x,y,r,shootRadius,shootTime,shootSpeed,speedupMult
                    new Turret(canvas.w / 2, canvas.h / 2, 120*1.5, 12*2, 50, 4.5, 0.96),
                    new Turret(20, 20, 80*2, 12*2, 100, 4.5, 0.96),
                    new Turret(canvas.w - 20, 20, 80*2, 12*2, 100, 4.5, 0.96),
                    new Turret(20, canvas.h - 20, 80*2, 12*2, 100, 4.5, 0.96),
                    new Turret(canvas.w - 20, canvas.h - 20, 80*2, 12*2, 100, 4.5, 0.96),
                ],
                time: 900,
            },
            {
                obstacles: [
                    //spawnTime,speedupMult,warmUpTime,laserLife
                    new LaserSpawner(88, 0.94, 120, 100)
                ],
                time: 1100,
            },
            {
                obstacles: [
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime
                    new NormalEnemySpawner(24*2, 68, 6*2, 300, 0.88, 200)
                ],
                time: 750,
            },
            {
                obstacles: [
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime,homingAngleIncrement
                    new HomingEnemySpawner(32*2, 100, 3*1.86, 200, 0.97, 200, 0.06)
                ],
                time: 1200,
            },
            {
                obstacles: [
                    //spawnTime,speedupMult,warmUpTime,laserLife
                    new LaserSpawner(200, 0.96, 150, 120),
                    //x,y,r,shootRadius,shootTime,shootSpeed,speedupMult
                    new Turret(canvas.w / 2, canvas.h / 2, 40*2, 12*2, 20, 3.2, 0.99),
                ],
                time: 1000,
            },
            {
                obstacles: [
                    //x,y,r,shootRadius,shootTime,shootSpeed,speedupMult
                    new Turret(canvas.w / 2, canvas.h / 2, 60*2, 24*2, 2, 3, 1),
                ],
                time: 400,
            },
            // new :)
            {
                obstacles: [
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime,homingAngleIncrement
                    new HomingEnemySpawner(80, 100, 5, 100, 0.98, 160, 0.012),
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime
                    new NormalEnemySpawner(40, 100, 10, 200, 0.98, 160)
                ],
                time: 2200,
            },
            {
                obstacles: [
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime
                    new NormalEnemySpawner(20, 20, 1, 400, 0.99, 180),
                    //x,y,r,shootRadius,shootTime,shootSpeed,speedupMult
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                    new Turret(Math.random() * canvas.w, Math.random() * canvas.h, 40, 20, 80, 1, 0.95),
                ],
                time: 1200,
            },
            {
                obstacles: [
        
                    //x,y,r,shootRadius,shootTime,shootSpeed,speedupMult
                    new Turret(canvas.w / 2, canvas.h / 2, 80, 20, 75, 5, 0.985),
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime,homingAngleIncrement
                    new HomingEnemySpawner(28*2, 260, 3, 200, 0.97, 200, 0.02),
                    //spawnRadius,spawnTime,spawnSpeed,spawnLife,speedupMult,warmUpTime
                    new NormalEnemySpawner(24*2, 210, 5, 220, 0.95, 200),
                    //spawnTime,speedupMult,warmUpTime,laserLife
                    new LaserSpawner(300, 0.96, 200, 60),
                ],
                time: 3600,
            },
        ];
    }
    let waves = getWaves();
    
    let currentWave = -1;
    let currentWaveTime = 0;

    let won = false;
    let obs = [];
    
    shared.win = () => {
        currentWave = waves.length;
        currentWaveTime = -1;
    }
    let hasReleased = false;
    function runWaves() {
        if(won === true) return;
        currentWaveTime--;
        if (currentWaveTime <= 0) {
            input.skip = false;
            currentWave++;
            if (currentWave >= waves.length) {
                ctx.fillStyle = 'red';
                ctx.font = "50px Inter";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                shared.players[shared.selfId].pos.x = 55150;
                shared.players[shared.selfId].pos.y = 14450;
                won = true;
                shared.camera.numControlledBy = 0;

                // ctx.fillText('You win! gg', canvas.w / 2, canvas.h / 3);
                // if (!wincookieset) {
                //     // communicating with parent as an iframe
                //     shared.top.postMessage('winpredictiondodging', '*');
                //     wincookieset = true;
                // }
                return;
            }
            try {
                currentWaveTime = waves[currentWave].time;
            } catch (e) {
                currentWaveTime = 1000;
            }
    
            obs = [];
            for (let o of waves[currentWave].obstacles) {
                obs.push(o);
            }
        }
    }

    // MAIN FUNCTIONS
    function simulatePlayer() {
        p.move();
        p.handleInput(input);
    }
    
    function simulateObstacles() {
        obs.forEach((o) => {
            o.simulate(p);
        })
    }
    
    function gameOver() {
        p = new Player(canvas.w * Math.random(), canvas.h * Math.random(), 40, 'red', .2);
        obs = [];
        currentWave = -1;
        currentWaveTime = 0;
        waves = getWaves();
    }

    function runPredictionDodging(){
        simulatePlayer();
        runWaves();
        simulateObstacles();
        let dead = runCollision(p, obs);
        if (dead === true) {
            p.radius -= 0.3;
            if(p.radius <= 0){
                gameOver();
            }
        }
    }

    let init = false;

    shared.C(0,[],[3],{x:-1E9,y:0,r:1,sf:(o,realPlayer)=>{
        if(won === true) {return;}
        if(init === false){
            if(realPlayer.pos.y >= 11900 && realPlayer.pos.y <= 12400 && realPlayer.pos.x < 500){
                init = true;
                colors.background = blendColor('#323645',"#000000",0.34);
                colors.tile = blendColor('#1f2229',"#000000",0.34);
            } else {
                return;
            }
        }
        // const topLeftX = p.pos.x - canvas.w/2;
        // const topLeftY = p.pos.y - canvas.h/2;
        runPredictionDodging();

        if(won === false){
            shared.camera.numControlledBy = 1;
            shared.camera.x = canvas.w/2;
            shared.camera.y = 12100 + canvas.h/2;

            realPlayer.pos.x = p.x;
            realPlayer.pos.y = p.y + 12100;
            realPlayer.renderRadius = p.radius;
        }
    },cr:()=>{
        if(init === false || won === true) return;
        lastW = canvas.w;
        lastH = canvas.h;
        canvas.w = 3200;
        canvas.h = 1800;
        ctx.translate(0,12100);
        // ctx.scale(8,8);
        renderPredictionDodging(p, obs);
        // ctx.scale(.25,.25);
        ctx.translate(0,-12100);
        canvas.w = lastW;
        canvas.h = lastH;
    }});
    canvas.w = lastW;
    canvas.h = lastH;

    shared.resizeFns.push(() => {
        if(init === true && won === false) gameOver();
    })

    let inv14=0;C(1,[],[3],{cr:()=>{},x:159000/2,y:3800/2,w:1000/2,h:400/2,ef:()=>{
        inv14 = 52.8;
    }});
    
    let inv36=0;C(1,[],[3],{cr:()=>{},x:148800/2,y:39400/2,w:1200/2,h:400/2,ef:()=>{
        inv36 = 6;
    }});
    
    let inv112=0;C(1,[],[3],{cr:()=>{},x:155300/2,y:0,w:0,h:200/2,ef:()=>{
        inv112 = 0;
    }});
    
    let inv216=0;C(1,[],[3],{cr:()=>{},x:142000/2,y:24200/2,w:2600/2,h:200/2,ef:()=>{
        inv216 = 46;
    }});

    C(1,[],[3],{x:30500,y:15000,w:100,h:100,cr:()=>{},ef:()=>{
        inv216 = inv112 = inv36 = inv14 = 0;
    }});

    // covering up area with a normal
    C(1,[],[0],{x:55000,y:0,w:20000,h:10900});

    // camera zoom!
    {
        const interpolate = (s,e,t) => {return (1-t)*s + e*t};
        let blackBarAlpha = 0;
        let toInterp = false;
        let curScale = 1;
        C(1,[],[3],{x:67600,y:12100,w:1300,h:700,cr:()=>{
            if(blackBarAlpha <= 0.001) return;
            shared.colors.vignette.holeFunctions.push(() => {
                ctx.save();
                ctx.resetTransform();
                ctx.fillStyle = shared.blendColor('#000000', '#FF0000', (Math.sin(window.frames/36)+1)/2 * 0.3);
                ctx.globalAlpha = blackBarAlpha;
                ctx.fillRect(0,0,canvas.width/3,canvas.height);
                ctx.fillRect(canvas.width*2/3,0,canvas.width/3,canvas.height);
                ctx.restore();
            })
        },ef:()=>{
            toInterp = true;
        },sf:()=>{
            if(toInterp === false) return;
            curScale = interpolate(curScale, 0.3, 0.03);
            blackBarAlpha = interpolate(blackBarAlpha, 1, 0.03);
            if(blackBarAlpha > 0.999){
                blackBarAlpha = 1;
                curScale = 0.3;
                toInterp = false;
            }
            shared.changeCameraScale(curScale);
        }})
        {
            let collided = false;
            let lastCollided = false;
            C(1,[],[3],{x:77400,y:10000,w:500,h:7500,cr:()=>{},ef:(p)=>{
                shared.changeCameraScale(interpolate(0.3, 1, (p.pos.y - 10000) / 7500));
                blackBarAlpha = interpolate(1, 0, (p.pos.y - 10000) / 7500);
            },sf:()=>{
                if(lastCollided === true && collided === false){
                    shared.changeCameraScale(1);
                    blackBarAlpha = 0;
                }
                collided = false;
            }})
        }
}

    shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
        if(inv14 <= 0){
            o.pos.x = -1E9;
            return;
        }

        p.onSafe = false;
        
        shared.tickFns.push(() => {
            if(p.dead === true){
                inv14--;
            }
            p.dead = false;
        })
        

        o.sat.r = p.sat.r + inv14; 
        o.pos.x = p.pos.x;
        o.pos.y = p.pos.y;
    }});
shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
        if(inv36 <= 0){
            o.pos.x = -1E9;
            return;
        }

        p.onSafe = false;
        
        shared.tickFns.push(() => {
            if(p.dead === true){
                inv36--;
            }
            p.dead = false;
        })
        

        o.sat.r = p.sat.r + inv36; 
        o.pos.x = p.pos.x;
        o.pos.y = p.pos.y;
    }});
shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
        if(inv112 <= 0){
            o.pos.x = -1E9;
            return;
        }

        p.onSafe = false;
        
        shared.tickFns.push(() => {
            if(p.dead === true){
                inv112--;
            }
            p.dead = false;
        })
        

        o.sat.r = p.sat.r + inv112; 
        o.pos.x = p.pos.x;
        o.pos.y = p.pos.y;
    }});
shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
        if(inv216 <= 0){
            o.pos.x = -1E9;
            return;
        }

        p.onSafe = false;
        
        shared.tickFns.push(() => {
            if(p.dead === true){
                inv216--;
            }
            p.dead = false;
        })
        

        o.sat.r = p.sat.r + inv216; 
        o.pos.x = p.pos.x;
        o.pos.y = p.pos.y;
    }});
}

// tetris iframe!

{
    let lastW = canvas.w;
    let lastH = canvas.h;
    canvas.w = 1600;
    canvas.h = 900
    let lastTransform;
    let started = false;
    let won = false;
    // let freezeX, freezeY;
    let onkdown = window.onkeydown;
    let onkup = window.onkeyup;
    let oldRender = shared.render;
    let lastResize = window.onresize;
    let interval1 = undefined;
    let scaledBy = undefined;
    C(1,[],[3],{x:29650,y:16850,w:100,h:100,ef:(p)=>{
        if(started === false) {
            interval1 = window.setInterval(() => {
                timer -= (performance.now() - lastTime) / 1000;
                lastTime = performance.now();
                if (timer < 0) {
                    won = true;
                }
            }, 1000 / 60)
        
            speedInterval = setInterval(() => {
                run();
            }, Math.max(10, 165 - level * 20))
            started = true;

            window.onkeydown = (event) => trackKeys(event, input);
            window.onkeyup = (event) => trackKeys(event, input);

            lastW = canvas.w;
            lastH = canvas.h;

            ctx.save();

            ctx.clearRect(0,0,canvas.w,canvas.h);
            ctx.resetTransform();
            const wRatio = window.innerWidth / canvas.width;
            const hRatio = window.innerHeight / canvas.height;

            if(wRatio > hRatio){
                ctx.scale(wRatio,wRatio);
            } else {
                ctx.scale(hRatio,hRatio);
            }
            canvas.w = 1600;
            canvas.h = 900;

            shared.render = () => {
                render();
            }

            window.onresize = () => {
                ctx.restore();
                hasResized = true;
                started = false;
                won = false;
                shared.players[shared.selfId].pos.x = 30000;
                shared.players[shared.selfId].pos.y = 17500;
                shared.render = oldRender;
                window.onkeyup = onkup;
                window.onkeydown = onkdown;
                clearInterval(speedInterval);
                clearInterval(interval1);
                if(lastTransform !== undefined) ctx.setTransform(lastTransform);
                realResize();
            }
        }
        // if(won === false){
        //     p.pos.x = freezeX;
        //     p.pos.y = freezeY;
        // }
        // if(freezeX === undefined){
        //     freezeX = p.pos.x;
        //     freezeY = p.pos.y;
        // }
    },sf:(_,p)=>{
        // if(freezeX !== undefined){
        //     p.pos.x = freezeX;
        //     p.pos.y = freezeY;
        // }
    },cr:()=>{
        if(started === false || won === true) return;
        
    }})
    function win(){
        ctx.restore();
        shared.render = oldRender;
        won = true;
        window.onkeyup = onkup;
        window.onkeydown = onkdown;
        clearInterval(speedInterval);
        clearInterval(interval1);
        window.onresize = lastResize;
        if(lastTransform !== undefined) ctx.setTransform(lastTransform);
        realResize();
    }

    function realResize(){
        let lastScale = shared.camera.scale;
        shared.changeCameraScale(1);
        const dpi = window.devicePixelRatio;
        canvas.style.width = Math.ceil(window.innerWidth) + 'px';
        canvas.style.height = Math.ceil(window.innerHeight) + 'px';
        canvas.width = Math.ceil(window.innerWidth) * dpi;
        canvas.height = Math.ceil(window.innerHeight) * dpi;
        // w and h are calced with zoom
        canvas.w = canvas.width / canvas.zoom;
        canvas.h = canvas.height / canvas.zoom;
        ctx.scale(canvas.zoom, canvas.zoom);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        for(let i = 0; i < shared.resizeFns.length; i++){
            shared.resizeFns[i]();
        }
        shared.changeCameraScale(lastScale);
    }

    let hasResized = false;

    // BLOCK
    const colorSchemes = [
        {//normal
            fill: '#1f2229',
        },
        {//lava
            fill: '#c70000',
            stroke: 'black'
        },
        {//breakable
            fill: '#14161A',
        },
        {//teleporter
            fill: '#38ab30',
        },
        {//bouncy
            fill: '#234acc',
        },
        {//coin
            fill: '#d6d611',
        },
        {// checkpoint
            fill: '#05962b',
            alpha: 0.8
        }
    ];
    
    function generateBlock(x, y, w) {// canvas dimensions
        let ind = Math.floor(Math.random() * 7);
        let basePiece = [{ x: 0, y: 0 }];
        switch (ind) {
            case 0:
                // t piece
                basePiece = [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
                break;
            case 1:
                // j piece
                basePiece = [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 0, y: 1 },
                    { x: 0, y: 2 }
                ]
                break;
            case 2:
                // reverse s piece
                basePiece = [
                    { x: 1, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 1 },
                    { x: 0, y: 2 }
                ]
                break;
            case 3:
                // square
                basePiece = [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 }
                ]
                break;
            case 4:
                // l piece
                basePiece = [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 0, y: 1 }
                ]
                break;
            case 5:
                // s piece
                basePiece = [
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 1 }
                ]
                break;
            case 6:
                // long bar
                basePiece = [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 3, y: 0 }
                ]
                break;
        }
        let maxBlockH = 0;
        for (let piece of basePiece) {
            if (piece.y > maxBlockH) {
                maxBlockH = piece.y;
            }
        }
        maxBlockH *= tileSize;
        maxBlockH += 100;
        return new Block(basePiece.map((b) => {
            return {
                x: x + Math.round((tileImg.width / 2) / 50) * 50 + b.x * tileSize,
                y: y - maxBlockH + b.y * tileSize,
                previewX: b.x * tileSize,
                previewY: b.y * tileSize,
            }
        }), ind === 0);//b.x*tileSize+x,b.y*tileSize+y
    }
    
    class Block {
        constructor(pts, tpiece) {
            this.points = pts;//[{x: 1, y: 1},{x: 2,y: 1}]
            this.colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
            this.toStroke = this.colorScheme.stroke !== undefined;
            this.angle = 0;
            this.snapped = 0;// amount of times the piece has been snapped to grid
            this.isTpiece = tpiece;
        }
        fall() {
            for (let point of this.points) {
                point.y += 50;
            }
        }
        checkCollision() {
            // checking collision
            for (let point of this.points) {
                if (point.y + tileSize >= canvas.h) {
                    return false;
                }
            }
            for (let block of blocks) {
                for (let point of this.points) {
                    for (let otherPoint of block.points) {
                        if (point.x === otherPoint.x && (point.y + tileSize === otherPoint.y || point.y === otherPoint.y)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        checkMoveCollision() {
            // checking collision
            for (let point of this.points) {
                if (point.y + tileSize > canvas.h) {
                    return false;
                }
            }
            for (let block of blocks) {
                for (let point of this.points) {
                    for (let otherPoint of block.points) {
                        if (point.x === otherPoint.x && point.y === otherPoint.y) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        render() {
            ctx.fillStyle = this.colorScheme.fill;
            ctx.globalAlpha = this.colorScheme.alpha || 1;
            if (this.toStroke) {
                ctx.strokeStyle = this.colorScheme.stroke;
            }
            for (let point of this.points) {
                ctx.beginPath();
                ctx.rect(point.x, point.y, tileSize, tileSize);
                ctx.fill();
                if (this.toStroke) {
                    ctx.stroke();
                }
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
        renderAsPreview(x, y) {
            ctx.fillStyle = this.colorScheme.fill;
            ctx.globalAlpha = this.colorScheme.alpha || 1;
            if (this.toStroke) {
                ctx.strokeStyle = this.colorScheme.stroke;
            }
            for (let point of this.points) {
                ctx.beginPath();
                ctx.rect(point.previewX + x, point.previewY + y, tileSize, tileSize);
                ctx.fill();
                if (this.toStroke) {
                    ctx.stroke();
                }
                ctx.closePath();
            }
            ctx.globalAlpha = 1;
        }
    }

    // UTIL
    const tileSize = 50;

    function createTileImg(w, h, backgroundColor, tileColor) {
        const canv = document.createElement('canvas');
        const cx = canv.getContext('2d');
        canv.width = w;
        canv.height = h;
        cx.imageSmoothingEnabled = false;

        cx.fillStyle = tileColor;
        cx.fillRect(0, 0, w, h);
        // tile background
        cx.globalAlpha = 0.75;
        cx.strokeStyle = backgroundColor;
        cx.lineWidth = 2;
        for (let y = 0; y < h; y += tileSize) {
            for (let x = 0; x < w; x += tileSize) {
                cx.strokeRect(x, y, tileSize, tileSize);
            }
        }
        cx.globalAlpha = 1;
        return canv;
    }

    function checkClearedLines() {
        let linesCleared = [];
        for (let y = 0; y < tileImg.height; y += tileSize) {
            let lineCleared = true;
            for (let x = canvas.w / 2 - tileImg.width / 2; x < canvas.w / 2 + tileImg.width / 2; x += tileSize) {
                if (!checkSpace(x, y)) {
                    lineCleared = false;
                    //break;
                }
            }
            if (lineCleared) {
                linesCleared.push(y);
            }
        }
        return linesCleared;
    }

    function checkSpace(x, y) {
        for (let block of blocks) {
            for (let point of block.points) {
                if (point.x === x && point.y === y) {
                    return true;
                }
            }
        }
        return false;
    }

    function clearLine(y) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].points = blocks[i].points.filter((p) => p.y !== y);
        }
        for (let block of blocks) {
            for (let point of block.points) {
                if (point.y < y) {
                    point.y += tileSize;
                }
            }
        }
    }

    function checkGameOver() {
        if(hasResized === true) {hasResized = false; return true;}
        for (let block of blocks) {
            for (let point of block.points) {
                if (point.y < 0) {
                    return true;
                }
            }
        }
        return false;
    }

    function getAllMethodNames(obj) {
        let methods = [];
        while (obj = Reflect.getPrototypeOf(obj)) {
            let keys = Reflect.ownKeys(obj)
            keys.forEach((k) => methods.push(k));
        }
        return methods;
    }

    function deepCopy(object) {
        let deepobj = JSON.parse(JSON.stringify(object));
        let otherFunctions = getAllMethodNames(object);
        // dynamically getting all functions (including helper functions)
        for (let otherfunc of otherFunctions) {
            if (!["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString"].includes(otherfunc)) {
                deepobj[otherfunc] = object[otherfunc];
            }
        }
        return deepobj;
    }

    function pushAgainstWallRotate(){
        if(!activeblock) return;
        for (let point of activeblock.points) {
            if (point.x + tileSize > canvas.w / 2 + tileImg.width / 2) {
                //intersectingWall = true;
                for(let changePoint of activeblock.points){
                    changePoint.x -= tileSize;
                }
                pushAgainstWallRotate()
                return;
            } else if (point.x < canvas.w / 2 - tileImg.width / 2) {
                //intersectingWall = true;
                for(let changePoint of activeblock.points){
                    changePoint.x += tileSize;
                }
                pushAgainstWallRotate()
                return;
            }
        }
    }

    // MAIN (script.js)
    let tileImg = createTileImg(500, 900, '#1f2229', '#323645');

    let blocks = [];

    let score = 0;

    let level = 1;

    let linesCleared = 0;

    let timer = 75;

    let activeblock = null;

    let nextblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000);

    function render() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.w, canvas.h);

        // let lastW = canvas.w;
        // let lastH = canvas.h;
        // ctx.save();

        // const wRatio = canvas.w / window.innerWidth;
        // const hRatio = canvas.h / window.innerHeight;

        // canvas.w = 1600;
        // canvas.h = 900;

        // if(wRatio > hRatio){
        //     // fat
        //     ctx.scale(wRatio, wRatio);
        //     // ctx.translate()
        // } else {
        //     // tall
        //     ctx.scale(hRatio, hRatio);
        // }

        ctx.drawImage(tileImg, canvas.w / 2 - tileImg.width / 2, 0);
        for (let block of blocks) {
            block.render();
        }
        if (activeblock !== null) {
            activeblock.render();
        }
        ctx.fillStyle = 'white';
        ctx.font = "30px inter";
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.fillText('Score: ' + score, canvas.w / 2 - tileImg.width / 2 - 10, 50);

        let timerText = ctx.measureText(Math.round(timer * 10) / 10);
        ctx.fillText('Time Left: ', canvas.w / 2 - tileImg.width / 2 - 10 - timerText.width, 120);
        ctx.fillStyle = timer < 0 ? 'green' : 'red';
        ctx.fillText(Math.round(timer * 10) / 10, canvas.w / 2 - tileImg.width / 2 - 10, 120);
        ctx.fillStyle = 'white';

        ctx.textAlign = 'left';
        ctx.fillText('Level: ' + level, canvas.w / 2 + tileImg.width / 2 + 10, 50);
        ctx.fillText('Lines Cleared: ' + linesCleared, canvas.w / 2 + tileImg.width / 2 + 10, 120);
        ctx.fillText('Next: ', canvas.w / 2 + tileImg.width / 2 + 10, 180);
        nextblock.renderAsPreview(canvas.w / 2 + tileImg.width / 2 + 10, 220);

        // ctx.restore();
        // canvas.w = lastW;
        // canvas.h = lastH;
    }
    function simulate() {
        // let lastW = canvas.w;
        // let lastH = canvas.h;

        // canvas.w = 1600;
        // canvas.h = 900;

        if (!nextblock) {
            nextblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000)
        }
        if (!activeblock) {
            activeblock = deepCopy(nextblock);
            nextblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000)
        }

        // its reached its end, time to turn it into a regular block
        activeblock.fall()
        for (let keypress of Object.keys(input)) {
            simulateInput(input[keypress], keypress);
        }
        checkActiveWillSettle();

        // canvas.w = lastW;
        // canvas.h = lastH;
    }

    function willSettle() {
        if (!activeblock) {
            return false;
        }
        if (!activeblock.checkCollision()) {
            return true;
        }
        return false;
    }

    function checkActiveWillSettle() {
        if (!activeblock) return;
        let collision = !activeblock.checkCollision();
        if (collision) {
            blocks.push(activeblock);
            activeblock = null;
            if (checkGameOver()) {
                if(timer < 0){
                    // won
                    win();
                    return;
                }
                // window.location.reload();
                blocks = [];
                score = 0;
                level = 1;
                linesCleared = 0;
                timer = 75;
                activeblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000);
                nextblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000);
                clearInterval(speedInterval);
                speedInterval = setInterval(() => {
                    run();
                }, Math.max(10, 165 - level * 20))
                return;
            }
            let clearedLines = checkClearedLines();
            switch (clearedLines.length) {
                case 1:
                    score += 100
                    break;
                case 2:
                    score += 300
                    break;
                case 3:
                    score += 500
                    break;
                case 4:
                    score += 800
                    break;
            }
            for (let line of clearedLines) {
                clearLine(line);
                linesCleared++;
            }
            if (linesCleared / 3 >= level) {
                level++;
                clearInterval(speedInterval);
                speedInterval = setInterval(() => {
                    run();
                }, Math.max(10, 165 - level * 20))
            }
        }
    }

    let lastTime = performance.now();
    function run() {
        simulate();
    }

    let speedInterval; 

    const Controls = {
        KeyA: { key: 'left' },
        KeyD: { key: 'right' },
        ArrowUp: { key: 'rotateright' },
        ArrowDown: { key: 'rotateleft' },
        ArrowLeft: { key: 'left' },
        ArrowRight: { key: 'right' },
        KeyW: { key: 'rotateright' },
        KeyS: { key: 'rotateleft' },
        Period: { key: 'rotateright' },
        Comma: { key: 'rotateleft' },
        Space: { key: 'harddrop' },
        Enter: { key: 'enterpress' },
    };
    
    function trackKeys(event) {
        if (event.repeat) return event.preventDefault();
        if (Controls[event.code] != undefined) {
            input[Controls[event.code].key] = event.type === 'keydown';
            // console.log(input[Controls[event.code].key], Controls[event.code].key);
            simulateInput(input[Controls[event.code].key], Controls[event.code].key, Controls[event.code].key);
            event.preventDefault();
        }
    }
    
    function simulateInput(state, key, keycode) {
        if (state === true && activeblock !== null) {
            let stuckAgainstWall = false;
            let laststate = JSON.parse(JSON.stringify(activeblock.points));
            let lastangle = activeblock.angle;
            let centerpoint;
            let shouldRefund = false;
            let snapped = false;
            switch (key) {
                case 'left':
                    for (let point of activeblock.points) {
                        if (point.x <= canvas.w / 2 - tileImg.width / 2) {
                            stuckAgainstWall = true;
                            break;
                        }
                    }
                    if (!stuckAgainstWall) {
                        activeblock.points.forEach((p) => {
                            p.x -= tileSize;
                        })
                    } else {
                        shouldRefund = true;
                    }
                    break;
                case 'right':
                    for (let point of activeblock.points) {
                        if (point.x + tileSize >= canvas.w / 2 + tileImg.width / 2) {
                            stuckAgainstWall = true;
                            break;
                        }
                    }
                    if (!stuckAgainstWall) {
                        activeblock.points.forEach((p) => {
                            p.x += tileSize;
                        })
                    } else {
                        shouldRefund = true;
                    }
                    break;
                case 'rotateright':
                    // finding a center point
                    centerPoint = { x: 0, y: 0 };
                    for (let point of activeblock.points) {
                        centerPoint.x += point.x;
                        centerPoint.y += point.y;
                    }
                    centerPoint.x /= activeblock.points.length;
                    centerPoint.y /= activeblock.points.length;
                    centerPoint.x += tileSize / 2;
                    centerPoint.y += tileSize / 2;
    
                    // transforming all points relative to this center point
                    for (let point of activeblock.points) {
                        point.x += tileSize / 2;
                        point.y += tileSize / 2;
                        point.x -= centerPoint.x;
                        point.y -= centerPoint.y;
                    }
    
                    // rotating (x,y) => (-y,x)
                    for (let point of activeblock.points) {
                        let desiredPoint = { x: -point.y, y: point.x };
                        point.x = desiredPoint.x;
                        point.y = desiredPoint.y;
                    }
    
                    // transforming back to normal grid
                    for (let point of activeblock.points) {
                        point.x -= tileSize / 2;
                        point.y -= tileSize / 2;
                        point.x += centerPoint.x;
                        point.y += centerPoint.y;
                    }
    
                    // snapping to the grid
                    for (let point of activeblock.points) {
                        if (point.x % 50 !== 0 || point.y % 50 !== 0) {
                            if (point.x % 50 !== 0) {
                                snapped = true;
                            }
                            point.x = Math.round(point.x / 50) * 50;
                            point.y = Math.round(point.y / 50) * 50;
                        }
                    }
    
                    if (snapped && activeblock.isTpiece === false) {
                        activeblock.snapped++;
                        if (activeblock.snapped % 2 === 1) {
                            for (let point of activeblock.points) {
                                point.x -= 50;
                            }
                        }
                    }
    
                    // making sure it isnt clipping into the ground or another block
                    activeblock.angle = (36000 + 90 + activeblock.angle) % 360;
                    for (let point of activeblock.points) {
                        if (point.y + tileSize >= canvas.h) {
                            activeblock.points = laststate;
                        }
                    }
    
                    pushAgainstWallRotate()
                    break;
                case 'rotateleft':
                    // finding a center point
                    centerPoint = { x: 0, y: 0 };
                    for (let point of activeblock.points) {
                        centerPoint.x += point.x;
                        centerPoint.y += point.y;
                    }
                    centerPoint.x /= activeblock.points.length;
                    centerPoint.y /= activeblock.points.length;
                    centerPoint.x += tileSize / 2;
                    centerPoint.y += tileSize / 2;
    
                    // transforming all points relative to this center point
                    for (let point of activeblock.points) {
                        point.x += tileSize / 2;
                        point.y += tileSize / 2;
                        point.x -= centerPoint.x;
                        point.y -= centerPoint.y;
                    }
    
                    // rotating (x,y) => (y,-x)
                    for (let point of activeblock.points) {
                        let desiredPoint = { x: point.y, y: -point.x };
                        point.x = desiredPoint.x;
                        point.y = desiredPoint.y;
                    }
    
                    // transforming back to normal grid
                    for (let point of activeblock.points) {
                        point.x -= tileSize / 2;
                        point.y -= tileSize / 2;
                        point.x += centerPoint.x;
                        point.y += centerPoint.y;
                    }
    
                    // snapping to the grid
                    for (let point of activeblock.points) {
                        if (point.x % 50 !== 0 || point.y % 50 !== 0) {
                            if (point.x % 50 !== 0 && point.y % 50 === 0) {
                                snapped = true;
                            }
                            point.x = Math.round(point.x / 50) * 50;
                            point.y = Math.round(point.y / 50) * 50;
                        }
                    }
    
                    if (snapped && activeblock.isTpiece === false) {
                        activeblock.snapped++;
                        if (activeblock.snapped % 2 === 1) {
                            for (let point of activeblock.points) {
                                point.x -= 50;
                            }
                        }
                    }
    
                    // making sure it isnt clipping into the ground or another block
                    activeblock.angle = (36000 - 90 + activeblock.angle) % 360;
                    for (let point of activeblock.points) {
                        if (point.y + tileSize >= canvas.h) {
                            activeblock.points = laststate;
                        }
                    }
    
                    pushAgainstWallRotate()
                    break;
                case 'harddrop':
                    while (activeblock.checkCollision()) {
                        for (let point of activeblock.points) {
                            point.y += 50;
                        }
                        score++;
                    }
                    break;
                case 'enterpress':
                    window.top.postMessage('enterpress', '*');
            }
            if (!activeblock.checkMoveCollision() && !shouldRefund && key !== 'harddrop') {
                // cant move in this direction
                activeblock.points = laststate;
            } else {
                input[keycode] = false;
                if (!activeblock) {
                    activeblock = deepCopy(nextblock);
                    nextblock = generateBlock(canvas.w / 2 - tileImg.width / 2, 0, 500, 1000)
                }
                // will settle if moved in this direction
                checkActiveWillSettle();
            }
    
            let isInSamePosition = true;
            for (let i = 0; i < laststate.length; i++) {
                if (activeblock.points[i] !== laststate[i]) {
                    isInSamePosition = false;
                    break;
                }
            }
            if (isInSamePosition) {
                // refund
                input[keycode] = true;
                activeblock.angle = lastangle;
            }
            render()
        }
    }
    
    let input = {
        left: false,
        right: false,
        rotateright: false,
        rotateleft: false,
        harddrop: false,
    };

    canvas.w = lastW;
    canvas.h = lastH;
}

// platformer top walls corrections
C(1,[],[3],{x:35650,y:15000,w:3900,h:20,cr:()=>{},ef:(p)=>{
    p.touchingNormalIndexes.length = 0;
    p.lastTouchingNormalIndexes.length = 0;
    // obstacles[140].canJump = false;
    // obstacles[140].midairStoredJump = false;
}})

C(1,[],[3],{x:35300,y:14100,w:39900-35300,h:20,cr:()=>{},ef:(p)=>{
    p.touchingNormalIndexes.length = 0;
    p.lastTouchingNormalIndexes.length = 0;
    // obstacles[140].canJump = false;
    // obstacles[140].midairStoredJump = false;
}})
})
