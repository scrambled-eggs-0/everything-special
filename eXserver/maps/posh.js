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

    var xv1 = 0;
    var yv1 = 0;
    var shootDirectionIndex1 = 0;
    var timer1 = 236.1111111111165;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:48,y:1950,x:2150,sf:(e)=>{
    e.pos.y += yv1;
    e.pos.x += xv1;
    if ((e.pos.x - e.sat.r) < 2100 || e.pos.x + e.sat.r > 2200) {
        xv1 = xv1 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1000 || e.pos.y + e.sat.r > 2000) {
        yv1 = yv1 * -1;
    }

    timer1--;
    if(timer1 < 0){
        timer1 = 266.6666666666667;

        shootDirectionIndex1++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex1 >= shootDirections.length){
            shootDirectionIndex1 = 0;
        }
        let dir = shootDirections[shootDirectionIndex1];

        counter++;
        /*scoped using let*/
        let xv1 = Math.cos(dir) * 7.151515151515151;
        let yv1 = Math.sin(dir) * 7.151515151515151;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:44,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv1;
        e.pos.x += xv1;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv1*dyingTimer < 2100 || e.pos.x + e.sat.r-xv1*dyingTimer > 2200 || (e.pos.y - e.sat.r)+yv1*dyingTimer < 1000 || e.pos.y + e.sat.r-yv1*dyingTimer > 2000) {
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
    

    var xv2 = 0;
    var yv2 = 0;
    var shootDirectionIndex2 = 0;
    var timer2 = 8.111111111111455;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:44,y:1950,x:250,sf:(e)=>{
    e.pos.y += yv2;
    e.pos.x += xv2;
    if ((e.pos.x - e.sat.r) < 200 || e.pos.x + e.sat.r > 300) {
        xv2 = xv2 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1750 || e.pos.y + e.sat.r > 2000) {
        yv2 = yv2 * -1;
    }

    timer2--;
    if(timer2 < 0){
        timer2 = 12;

        shootDirectionIndex2++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex2 >= shootDirections.length){
            shootDirectionIndex2 = 0;
        }
        let dir = shootDirections[shootDirectionIndex2];

        counter++;
        /*scoped using let*/
        let xv2 = Math.cos(dir) * 3.6363636363636362;
        let yv2 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:26,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv2;
        e.pos.x += xv2;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv2*dyingTimer < 200 || e.pos.x + e.sat.r-xv2*dyingTimer > 300 || (e.pos.y - e.sat.r)+yv2*dyingTimer < 1750 || e.pos.y + e.sat.r-yv2*dyingTimer > 2000) {
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
    

    var xv3 = 0;
    var yv3 = 0;
    var shootDirectionIndex3 = 0;
    var timer3 = 8.111111111111455;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:44,y:1950,x:850,sf:(e)=>{
    e.pos.y += yv3;
    e.pos.x += xv3;
    if ((e.pos.x - e.sat.r) < 800 || e.pos.x + e.sat.r > 900) {
        xv3 = xv3 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1750 || e.pos.y + e.sat.r > 2000) {
        yv3 = yv3 * -1;
    }

    timer3--;
    if(timer3 < 0){
        timer3 = 12;

        shootDirectionIndex3++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex3 >= shootDirections.length){
            shootDirectionIndex3 = 0;
        }
        let dir = shootDirections[shootDirectionIndex3];

        counter++;
        /*scoped using let*/
        let xv3 = Math.cos(dir) * 3.6363636363636362;
        let yv3 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:26,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv3;
        e.pos.x += xv3;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv3*dyingTimer < 800 || e.pos.x + e.sat.r-xv3*dyingTimer > 900 || (e.pos.y - e.sat.r)+yv3*dyingTimer < 1750 || e.pos.y + e.sat.r-yv3*dyingTimer > 2000) {
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
    

    var xv4 = 0;
    var yv4 = 0;
    var shootDirectionIndex4 = 0;
    var timer4 = 8.111111111111455;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:44,y:1650,x:550,sf:(e)=>{
    e.pos.y += yv4;
    e.pos.x += xv4;
    if ((e.pos.x - e.sat.r) < 500 || e.pos.x + e.sat.r > 600) {
        xv4 = xv4 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1600 || e.pos.y + e.sat.r > 1850) {
        yv4 = yv4 * -1;
    }

    timer4--;
    if(timer4 < 0){
        timer4 = 12;

        shootDirectionIndex4++;
        const shootDirections = [1.5707963267948966];
        if(shootDirectionIndex4 >= shootDirections.length){
            shootDirectionIndex4 = 0;
        }
        let dir = shootDirections[shootDirectionIndex4];

        counter++;
        /*scoped using let*/
        let xv4 = Math.cos(dir) * 3.6363636363636362;
        let yv4 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:26,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv4;
        e.pos.x += xv4;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv4*dyingTimer < 500 || e.pos.x + e.sat.r-xv4*dyingTimer > 600 || (e.pos.y - e.sat.r)+yv4*dyingTimer < 1600 || e.pos.y + e.sat.r+yv4*dyingTimer > 1850) {
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
    

    var xv5 = 0;
    var yv5 = 0;
    var shootDirectionIndex5 = 0;
    var timer5 = 136.11111111111614;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:1,y:2050,x:6750,sf:(e)=>{
    e.pos.y += yv5;
    e.pos.x += xv5;
    if ((e.pos.x - e.sat.r) < 6700 || e.pos.x + e.sat.r > 6800) {
        xv5 = xv5 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 2100) {
        yv5 = yv5 * -1;
    }

    timer5--;
    if(timer5 < 0){
        timer5 = 200;

        shootDirectionIndex5++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex5 >= shootDirections.length){
            shootDirectionIndex5 = 0;
        }
        let dir = shootDirections[shootDirectionIndex5];

        counter++;
        /*scoped using let*/
        let xv5 = Math.cos(dir) * 7.151515151515151;
        let yv5 = Math.sin(dir) * 7.151515151515151;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:44,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv5;
        e.pos.x += xv5;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv5*dyingTimer < 6700 || e.pos.x + e.sat.r-xv5*dyingTimer > 6800 || (e.pos.y - e.sat.r)+yv5*dyingTimer < 200 || e.pos.y + e.sat.r-yv5*dyingTimer > 2100) {
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

            

            ctx.globalAlpha = dyingTimer / 30 * 2;
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
    

    var xv6 = 0;
    var yv6 = 0;
    var shootDirectionIndex6 = 0;
    var timer6 = 36.11111111111613;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:1,y:2050,x:6650,sf:(e)=>{
    e.pos.y += yv6;
    e.pos.x += xv6;
    if ((e.pos.x - e.sat.r) < 6600 || e.pos.x + e.sat.r > 6700) {
        xv6 = xv6 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 2100) {
        yv6 = yv6 * -1;
    }

    timer6--;
    if(timer6 < 0){
        timer6 = 200;

        shootDirectionIndex6++;
        const shootDirections = [-1.5707963267948966];
        if(shootDirectionIndex6 >= shootDirections.length){
            shootDirectionIndex6 = 0;
        }
        let dir = shootDirections[shootDirectionIndex6];

        counter++;
        /*scoped using let*/
        let xv6 = Math.cos(dir) * 7.151515151515151;
        let yv6 = Math.sin(dir) * 7.151515151515151;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:44,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv6;
        e.pos.x += xv6;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv6*dyingTimer < 6600 || e.pos.x + e.sat.r-xv6*dyingTimer > 6700 || (e.pos.y - e.sat.r)+yv6*dyingTimer < 200 || e.pos.y + e.sat.r-yv6*dyingTimer > 2100) {
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

            

            ctx.globalAlpha = dyingTimer / 30 * 2;
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
    

    var xv7 = 0;
    var yv7 = 0;
    var switchTime7 = 160.34739538767064;
    var switchState7 = true;
    var pos7 = {
        x: 52, y: 1348 
    }
    C(0,[3],[1],{r:48,y:1348,x:52,sf:(e)=>{
        pos7.y += yv7;
        pos7.x += xv7;
        if ((pos7.x - e.sat.r) < 0 || pos7.x + e.sat.r > 100) {
            xv7 = xv7 * -1;
        }
        if ((pos7.y - e.sat.r) < 1300 || pos7.y + e.sat.r > 1400) {
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
    

    var xv8 = 0;
    var yv8 = 0;
    var switchTime8 = 125.22816631566037;
    var switchState8 = true;
    var pos8 = {
        x: 250, y: 1352 
    }
    C(0,[3],[1],{r:48,y:1352,x:250,sf:(e)=>{
        pos8.y += yv8;
        pos8.x += xv8;
        if ((pos8.x - e.sat.r) < 200 || pos8.x + e.sat.r > 300) {
            xv8 = xv8 * -1;
        }
        if ((pos8.y - e.sat.r) < 1300 || pos8.y + e.sat.r > 1400) {
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
    

    var xv9 = 0;
    var yv9 = 0;
    var shootDirectionIndex9 = 0;
    var timer9 = 2.777777777778558;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:44,y:1800,x:1150,sf:(e)=>{
    e.pos.y += yv9;
    e.pos.x += xv9;
    if ((e.pos.x - e.sat.r) < 1100 || e.pos.x + e.sat.r > 1200) {
        xv9 = xv9 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1650 || e.pos.y + e.sat.r > 1950) {
        yv9 = yv9 * -1;
    }

    timer9--;
    if(timer9 < 0){
        timer9 = 53.333333333333336;

        shootDirectionIndex9++;
        const shootDirections = [1.5707963267948966,-1.5707963267948966];
        if(shootDirectionIndex9 >= shootDirections.length){
            shootDirectionIndex9 = 0;
        }
        let dir = shootDirections[shootDirectionIndex9];

        counter++;
        /*scoped using let*/
        let xv9 = Math.cos(dir) * 3.6363636363636362;
        let yv9 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:26,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv9;
        e.pos.x += xv9;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv9*dyingTimer < 1100 || e.pos.x + e.sat.r-xv9*dyingTimer > 1200 || (e.pos.y - e.sat.r)+yv9*dyingTimer < 1650 || e.pos.y + e.sat.r+yv9*dyingTimer > 1950) {
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
    

    var xv10 = 0;
    var yv10 = 0;
    var shootDirectionIndex10 = 0;
    var timer10 = 22.777777777778567;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:44,y:1800,x:1150,sf:(e)=>{
    e.pos.y += yv10;
    e.pos.x += xv10;
    if ((e.pos.x - e.sat.r) < 1100 || e.pos.x + e.sat.r > 1200) {
        xv10 = xv10 * -1;
    }
    if ((e.pos.y - e.sat.r) < 1650 || e.pos.y + e.sat.r > 1950) {
        yv10 = yv10 * -1;
    }

    timer10--;
    if(timer10 < 0){
        timer10 = 53.333333333333336;

        shootDirectionIndex10++;
        const shootDirections = [1.5707963267948966,-1.5707963267948966];
        if(shootDirectionIndex10 >= shootDirections.length){
            shootDirectionIndex10 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10];

        counter++;
        /*scoped using let*/
        let xv10 = Math.cos(dir) * 3.6363636363636362;
        let yv10 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:26,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10;
        e.pos.x += xv10;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r)+xv10*dyingTimer < 1100 || e.pos.x + e.sat.r-xv10*dyingTimer > 1200 || (e.pos.y - e.sat.r)+yv10*dyingTimer < 1650 || e.pos.y + e.sat.r+yv10*dyingTimer > 1950) {
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
    

    var xv11 = 1.656211529431107;
    var yv11 = -6.457662720692675;
    C(0,[3],[1],{r:20,y:4757.270786036811,x:14280.294840623466,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv11;
    e.pos.x += xv11;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv11 = xv11 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv11 = yv11 * -1;
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

    

    var xv12 = 1.4296518767820305;
    var yv12 = 6.511569699823388;
    C(0,[3],[1],{r:20,y:4727.158171454202,x:14466.241023299379,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv12;
    e.pos.x += xv12;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv12 = xv12 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv12 = yv12 * -1;
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

    

    var xv13 = 4.194315026516687;
    var yv13 = -5.1819075544417785;
    C(0,[3],[1],{r:20,y:4765.3500774224385,x:14621.963456983727,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv13;
    e.pos.x += xv13;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv13 = xv13 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv13 = yv13 * -1;
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

    

    var xv14 = 2.6225956635725116;
    var yv14 = -6.129146468298429;
    C(0,[3],[1],{r:20,y:4738.356799429885,x:14593.404225641529,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv14;
    e.pos.x += xv14;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv14 = xv14 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv14 = yv14 * -1;
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

    

    var xv15 = -2.995458784515099;
    var yv15 = 5.955809862203106;
    C(0,[3],[1],{r:20,y:4760.8710438467915,x:14651.117888973045,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv15;
    e.pos.x += xv15;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv15 = xv15 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv15 = yv15 * -1;
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

    

    var xv16 = 6.350007123408633;
    var yv16 = -2.0302349561329245;
    C(0,[3],[1],{r:20,y:4764.280861086177,x:14590.136949517644,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv16;
    e.pos.x += xv16;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv16 = xv16 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv16 = yv16 * -1;
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

    

    var xv17 = -5.48566960831976;
    var yv17 = 3.788386647743519;
    C(0,[3],[1],{r:20,y:4727.018601590759,x:14603.789232045116,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv17;
    e.pos.x += xv17;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv17 = xv17 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv17 = yv17 * -1;
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

    

    var xv18 = -6.576401183915071;
    var yv18 = 1.0933397974302788;
    C(0,[3],[1],{r:20,y:4738.077510187999,x:14618.08701398014,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv18;
    e.pos.x += xv18;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv18 = xv18 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv18 = yv18 * -1;
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

    

    var xv19 = 6.637052418697703;
    var yv19 = 0.6276779714976619;
    C(0,[3],[1],{r:20,y:4762.929797186516,x:14277.655432363948,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv19;
    e.pos.x += xv19;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv19 = xv19 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv19 = yv19 * -1;
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

    

    var xv20 = -0.5937522845527965;
    var yv20 = -6.640173391488568;
    C(0,[3],[1],{r:20,y:4751.109135778656,x:14583.98054266324,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv20;
    e.pos.x += xv20;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv20 = xv20 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv20 = yv20 * -1;
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

    

    var xv21 = 4.6890648263652395;
    var yv21 = -4.738893910881397;
    C(0,[3],[1],{r:20,y:4750.505464497951,x:14647.906246227642,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv21;
    e.pos.x += xv21;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv21 = xv21 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv21 = yv21 * -1;
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

    

    var xv22 = 6.371081922245556;
    var yv22 = 1.963099484101687;
    C(0,[3],[1],{r:20,y:4751.09938457925,x:14405.489924569272,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv22;
    e.pos.x += xv22;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv22 = xv22 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv22 = yv22 * -1;
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

    

    var xv23 = 5.6855777949414055;
    var yv23 = 3.4811850830017175;
    C(0,[3],[1],{r:20,y:4753.68797673424,x:14601.556751015572,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv23;
    e.pos.x += xv23;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv23 = xv23 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv23 = yv23 * -1;
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

    

    var xv24 = -5.580018255537974;
    var yv24 = 3.647991325689714;
    C(0,[3],[1],{r:20,y:4753.505448844761,x:14283.519376332537,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv24;
    e.pos.x += xv24;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv24 = xv24 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv24 = yv24 * -1;
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

    

    var xv25 = 6.311905799541347;
    var yv25 = -2.145760849246895;
    C(0,[3],[1],{r:20,y:4742.486175387518,x:14344.221978732927,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv25;
    e.pos.x += xv25;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv25 = xv25 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv25 = yv25 * -1;
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

    

    var xv26 = -6.661094610972841;
    var yv26 = -0.2725124366208202;
    C(0,[3],[1],{r:20,y:4746.860387568821,x:14560.013790094112,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv26;
    e.pos.x += xv26;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv26 = xv26 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv26 = yv26 * -1;
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

    

    var xv27 = 5.287285686975048;
    var yv27 = 4.06067168197002;
    C(0,[3],[1],{r:20,y:4735.776746503542,x:14619.421739902655,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv27;
    e.pos.x += xv27;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv27 = xv27 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv27 = yv27 * -1;
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

    

    var xv28 = 6.566958565318264;
    var yv28 = 1.148694757469332;
    C(0,[3],[1],{r:20,y:4766.935455653488,x:14482.072993323478,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv28;
    e.pos.x += xv28;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv28 = xv28 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv28 = yv28 * -1;
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

    

    var xv29 = -2.3049388182259056;
    var yv29 = 6.255533669374645;
    C(0,[3],[1],{r:20,y:4779.65773037644,x:14293.465132425517,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv29;
    e.pos.x += xv29;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv29 = xv29 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv29 = yv29 * -1;
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

    

    var xv30 = -3.4836769026365366;
    var yv30 = -5.684051344110215;
    C(0,[3],[1],{r:20,y:4743.003870256614,x:14354.131995826527,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv30;
    e.pos.x += xv30;
    if ((e.pos.x - e.sat.r) < 14200 || e.pos.x + e.sat.r > 14700) {
        xv30 = xv30 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4700 || e.pos.y + e.sat.r > 4800) {
        yv30 = yv30 * -1;
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

    C(1,[],[18],{type:[1,[],[18]],x:3800,y:-50,w:850,h:500,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:3600,y:450,w:1100,h:1150,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:3600,y:1600,w:250,h:100,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:3850,y:1600,w:50,h:50,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:100,y:300,w:100,h:600,size:12,inView:true,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[18],{type:[1,[],[18]],x:5300,y:1000,w:1200,h:100,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:6400,y:0,w:100,h:1100,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:5300,y:900,w:1200,h:100,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:6300,y:0,w:100,h:1100,size:10,inView:false,sizeChangePermanent:false,sizeMult:0.40816326530612246,})
C(1,[],[18],{type:[1,[],[18]],x:14000,y:0,w:1100,h:700,size:12,inView:false,sizeChangePermanent:false,sizeMult:0.4897959183673469,})
C(1,[],[13],{type:[1,[],[13]],x:11200,y:0,w:500,h:2000,force:3000,dir:{"x":0,"y":-3000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:11750,y:1800,w:1300,h:250,canJump:true,inView:false,})
C(1,[],[14],{type:[1,[],[14]],x:7200,y:1000,w:1500,h:1000,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:120,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:28.8,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[17],{type:[1,[],[17]],x:7200,y:700,w:1100,h:300,time:0,maxTime:1,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:60,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:900,w:200,h:100,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[12],{type:[1,[],[12]],x:7350,y:900,w:50,h:100,tpx:7950,tpy:1950,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:700,w:200,h:200,force:2000,dir:{"x":0,"y":2000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
C(1,[],[13],{type:[1,[],[13]],x:8300,y:0,w:400,h:800,force:4500,dir:{"x":0,"y":4500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:7900,y:0,w:800,h:400,force:4500,dir:{"x":4500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:8300,y:400,w:400,h:400,force:4500,dir:{"x":-4500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.1872749099639854,})
C(1,[],[13],{type:[1,[],[13]],x:7400,y:700,w:900,h:100,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(4,[],[0],{type:[4,[],[0]],x:7350,y:850,radius:125,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[3675,500],[3675,550]],"type":"poly","props":{}},endPolygon:{"points":[[3675,350],[3675,300]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[1],{type:[1,[],[1]],x:7200,y:0,w:600,h:600,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[12],{type:[1,[],[12]],x:11200,y:0,w:100,h:700,tpx:12350,tpy:350,bgColor:"#4a1698",tileColor:"#6b53ac",changeColor:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[11300,1300],[11400,1450],[11300,1600],[11200,1550],[11200,1350]],most:{"left":5600,"right":5700,"top":650,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:800,w:1300,h:200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:7200,y:0,w:100,h:100,spawn:{"x":3625,"y":25},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{x:7200,y:0,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});var minX30, minY30, maxX30, maxY30;
    minX30 = 7100;minY30 = -100;maxX30 = 7400;maxY30 = 200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX30) && (player.pos.x) < md(maxX30) && (player.pos.y) > md(minY30) && (player.pos.y) < md(maxY30)) {
            colors.background="#0a4075"; colors.tile="#001224";
        }
    },});
    C(1,[],[11],{x:13950,y:0,w:50,h:600});
C(4,[],[0],{type:[4,[],[0]],x:8300,y:400,radius:275,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[4150,0],[4150,-75]],"type":"poly","props":{}},endPolygon:{"points":[[4150,400],[4150,475]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:550,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[1],{type:[1,[],[1]],x:3850,y:0,w:750,h:200,canCollide:false,inView:false,boundPlayer:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:3800,y:0,w:300,h:200,points:[[1900,0],[2200,0]],speed:160,currentPoint:1.9955555555600184,pointOn:{"x":2200,"y":0},pointTo:{"x":1900,"y":0},xv:-160,yv:1.9594348786357652e-14,inView:false,path:[[3800,0,5.333333333333333],[4400,0,5.333333333333333]],})
C(1,[0],[11],{type:[1,[0],[11]],x:3800,y:0,w:300,h:200,points:[[1900,0],[2200,0]],speed:160,currentPoint:0.9955555555600176,pointOn:{"x":1900,"y":0},pointTo:{"x":2200,"y":0},xv:160,yv:0,inView:false,path:[[3800,0,5.333333333333333],[4400,0,5.333333333333333]],})
C(1,[],[14],{type:[1,[],[14]],x:5300,y:1200,w:1200,h:800,force:2600,dir:{"x":0,"y":2600},direction:"down",jumpHeight:-100,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.561824729891957*0.6,jumpForce:-10,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:3800,y:0,w:300,h:200,points:[[1900,0],[2200,0]],speed:160,currentPoint:0.9955555555600176,pointOn:{"x":1900,"y":0},pointTo:{"x":2200,"y":0},xv:160,yv:0,inView:false,path:[[3800,0,5.333333333333333],[4400,0,5.333333333333333]],})
C(1,[0],[11],{type:[1,[0],[11]],x:3800,y:0,w:300,h:200,points:[[1900,0],[2200,0]],speed:160,currentPoint:1.9955555555600184,pointOn:{"x":2200,"y":0},pointTo:{"x":1900,"y":0},xv:-160,yv:1.9594348786357652e-14,inView:false,path:[[3800,0,5.333333333333333],[4400,0,5.333333333333333]],})
C(1,[],[15],{type:[1,[],[15]],x:3300,y:600,w:200,h:1300,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:3300,y:500,w:200,h:1400,force:2500,dir:{"x":0,"y":2500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.770708283313325,})
C(1,[],[19],{type:[1,[],[19]],x:5300,y:0,w:100,h:100,speedInc:0.65,inView:false,speedChangePermanent:false,speedMult:0.65,})
C(4,[],[0],{type:[4,[],[0]],x:650,y:1150,radius:175,startAngle:1.780235837034216,endAngle:3.141592653589793,startPolygon:{"points":[[299.0110386477801,697.2684500917258],[288.6154541068922,746.175830128416]],"type":"poly","props":{}},endPolygon:{"points":[[200,575],[150,575]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:350,startSliceAngle:1.780235837034216,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[7],{type:[1,[],[7]],x:2100,y:1200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2100,y:1500,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:2700,y:300,w:100,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:1400,w:200,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1200,y:0,w:600,h:300,force:1700,dir:{"x":1700,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2040816326530612,})
C(2,[],[1],{type:[2,[],[1]],points:[[4550,800],[4600,900],[4500,900]],most:{"left":2250,"right":2300,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4550,y:900,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:2650,y:1100,w:200,h:100,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[7],{type:[1,[],[7]],x:2100,y:1800,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:2900,y:1100,w:200,h:100,force:4000,dir:{"x":0,"y":4000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[1],[1],{type:[1,[1],[1]],x:2000,y:600,w:500,h:100,angle:-29439.666666679605,rotateSpeed:-0.031481481481481485,pivotX:2250,pivotY:650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:-513.819114023183,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:2000,y:200,w:500,h:100,angle:29439.666666679605,rotateSpeed:0.031481481481481485,pivotX:2250,pivotY:250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:513.819114023183,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:1550,y:350,radius:300,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[600,174.99999999999997],[475,174.99999999999997]],"type":"poly","props":{}},endPolygon:{"points":[[775,0],[775,-125]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:600,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:900,y:900,radius:150,startAngle:-1.9198621771937625,endAngle:1.0471975511965976,startPolygon:{"points":[[415.7979856674331,356.0307379214091],[398.6969785011497,309.04610688211375]],"type":"poly","props":{}},endPolygon:{"points":[[500,536.6025403784439],[525,579.9038105676658]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:300,startSliceAngle:-1.9198621771937625,endSliceAngle:1.0471975511965976,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[7],{type:[1,[],[7]],x:2750,y:1200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2400,y:1550,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2750,y:1900,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(4,[],[0],{type:[4,[],[0]],x:2800,y:1600,radius:250,startAngle:5.585053606381854,endAngle:4.4505895925855405,startPolygon:{"points":[[1553.2088886237955,671.4424780626921],[1591.5111107797445,639.3030975783652]],"type":"poly","props":{}},endPolygon:{"points":[[1348.2361909794959,606.8148347421863],[1335.29523872437,558.5185434277329]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:5.585053606381854,endSliceAngle:4.4505895925855405,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[7],{type:[1,[],[7]],x:3100,y:1550,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(4,[],[0],{type:[4,[],[0]],x:3000,y:1100,radius:100,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[1500,500],[1500,450]],"type":"poly","props":{}},endPolygon:{"points":[[1550,550],[1600,550]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
shared.morphsTriggered[2]=false;var x2=1000;C(1,[],[0],{y:850,x:1000,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x2, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[2] === false){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                } else {
                    o.pos.x = 1000;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[2] === false ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(4,[],[0],{type:[4,[],[0]],x:4100,y:1950,radius:200,startAngle:3.3161255787892263,endAngle:-0.17453292519943295,startPolygon:{"points":[[1902.2788370481687,948.9527733499605],[1853.0384493975585,940.270364466614]],"type":"poly","props":{}},endPolygon:{"points":[[2197.721162951831,948.9527733499605],[2246.9615506024415,940.270364466614]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:3.3161255787892263,endSliceAngle:-0.17453292519943295,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:4700,y:0,w:500,h:1400,force:1500,dir:{"x":0,"y":-1500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0624249699879953,})
C(1,[0],[1],{type:[1,[0],[1]],x:4700,y:750,w:100,h:100,points:[[2350,375],[2550,375]],speed:125,currentPoint:1.9479166666409173,collidable:true,pointOn:{"x":2550,"y":375},pointTo:{"x":2350,"y":375},xv:-125,yv:1.5308084989341916e-14,inView:false,path:[[4700,750,4.166666666666667],[5100,750,4.166666666666667]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:6300,y:0,w:200,h:1200,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[29],{type:[1,[],[29]],x:6400,y:100,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[15],{type:[1,[],[15]],x:6900,y:100,w:200,h:1900,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[12],{type:[1,[],[12]],x:5950,y:0,w:100,h:100,tpx:5350,tpy:1050,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:6000,y:0,w:100,h:500,angle:-29349.666666679484,rotateSpeed:-0.031481481481481485,pivotX:6050,pivotY:250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:-512.2483176963862,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:1200,y:300,w:600,h:1700,force:1700,dir:{"x":0,"y":-1700},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2040816326530612,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:600,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:0,w:200,h:700,canJump:true,inView:true,})
C(1,[],[12],{type:[1,[],[12]],x:100,y:300,w:100,h:100,tpx:50,tpy:1050,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:900,w:300,h:100,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:650,y:1150,radius:175,startAngle:0.17453292519943295,endAngle:1.361356816555577,startPolygon:{"points":[[448.100969126526,596.7060222083663],[497.3413567771364,605.3884310917128]],"type":"poly","props":{}},endPolygon:{"points":[[350.9889613522199,697.2684500917258],[361.3845458931079,746.175830128416]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:350,startSliceAngle:0.17453292519943295,endSliceAngle:1.361356816555577,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1100,y:0,w:100,h:1100,canJump:true,inView:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:600,y:925,w:100,h:450,angle:25455.5,rotateSpeed:0.025757575757575757,pivotX:650,pivotY:1150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:0,inView:true,initialRotation:444.28228774141655,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:200,y:700,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:11200,y:100,w:500,h:1900,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(0,[],[1],{type:[0,[],[1]],x:100,y:500,r:50,renderType:"circleR",inView:true,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:200,w:200,h:600,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:300,w:100,h:700,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1500,w:400,h:100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:200,y:1000,w:100,h:100,tpx:50,tpy:1800,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:1000,w:100,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:1500,w:600,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:100,y:400,w:100,h:500,force:1000,dir:{"x":0,"y":-1000},direction:"up",inView:true,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:1000,w:300,h:150,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1000,y:1200,w:200,h:400,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:1800,y:0,w:200,h:200,spawn:{"x":950,"y":50},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[1200,1100],[1500,1350],[1200,1600]],most:{"left":600,"right":750,"top":550,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1800,750],[1800,1250],[1500,1000]],most:{"left":750,"right":900,"top":375,"bottom":625},renderType:"poly",inView:true,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:1200,y:300,w:100,h:100,points:[[600,150],[850,150]],speed:150,currentPoint:0.87,collidable:true,pointOn:{"x":600,"y":150},pointTo:{"x":850,"y":150},xv:150,yv:0,inView:true,path:[[1200,300,5],[1700,300,5]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1200,400],[1500,650],[1200,900]],most:{"left":600,"right":750,"top":200,"bottom":450},renderType:"poly",inView:true,x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:200,y:1800,radius:150,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[100,1000],[100.00000000000001,1050]],"type":"poly","props":{}},endPolygon:{"points":[[99.99999999999999,800],[99.99999999999997,750]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:1600,y:1800,radius:150,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[900,900],[950,900]],"type":"poly","props":{}},endPolygon:{"points":[[800,1000],[800,1050]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[1500,1550],[1650,1700],[1500,1850],[1350,1700]],most:{"left":675,"right":825,"top":775,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:1200,y:300,w:100,h:100,points:[[600,150],[850,150]],speed:150,currentPoint:1.87,collidable:true,pointOn:{"x":850,"y":150},pointTo:{"x":600,"y":150},xv:-150,yv:1.8369701987210297e-14,inView:true,path:[[1200,300,5],[1700,300,5]],boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:150,y:50,r:50,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:350,y:150,r:50,renderType:"circle",inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:150,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:-50,w:100,h:100,canJump:true,inView:true,})
var minX31, minY31, maxX31, maxY31;
    minX31 = 1650;minY31 = -100;maxX31 = 1900;maxY31 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX31) && (player.pos.x) < md(maxX31) && (player.pos.y) > md(minY31) && (player.pos.y) < md(maxY31)) {
            colors.background="#5260ab"; colors.tile="#323c81";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:1800,y:200,w:200,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:900,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:1100,w:100,h:900,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:2600,y:800,w:100,h:100,coins:7,currentCoins:7,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:7,})
C(1,[],[12],{type:[1,[],[12]],x:2700,y:0,w:100,h:100,tpx:3350,tpy:50,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:2900,y:800,w:100,h:100,coins:8,currentCoins:8,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:8,})
C(0,[],[0],{type:[0,[],[0]],x:150,y:1350,r:50,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:2700,y:200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:3300,y:1900,w:200,h:100,tpx:3650,tpy:1950,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:3600,y:1900,w:100,h:100,spawn:{"x":1825,"y":975},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{x:3600,y:1900,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(4,[],[0],{type:[4,[],[0]],x:4100,y:1950,radius:200,startAngle:420.0120300511652,endAngle:422.1064251535545,startPolygon:{"points":[[2135.8576632339673,852.0021883771802],[2164.4768843119564,811.0029178362403]],"type":"poly","props":{}},endPolygon:{"points":[[2113.5903978588026,1110.8538232813462],[2134.78719714507,1156.1384310417948]],"type":"poly","props":{}},innerRadius:300,toRotate:true,rotateSpeed:1.4835298641951802,renderType:"circle",inView:false,r:400,startSliceAngle:420.0120300511652,endSliceAngle:422.1064251535545,startSliceAngleRotateSpeed:0.012362748868293168,endSliceAngleRotateSpeed:0.012362748868293168,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:1800,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:1600,w:100,h:300,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:3800,y:1900,w:600,h:100,angle:11464.416666663868,rotateSpeed:0.012163299663299664,pivotX:4100,pivotY:1950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:15.483333333333094,inView:false,initialRotation:200.09181765379773,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:2000,w:600,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4100,y:1950,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:1950,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:1400,w:100,h:600,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:1400,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5250,y:100,w:50,h:1350,canJump:true,inView:false,})
C(1,[],[20],{x:5300,y:0,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});var minX32, minY32, maxX32, maxY32;
    minX32 = 5200;minY32 = -100;maxX32 = 5500;maxY32 = 200;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX32) && (player.pos.x) < md(maxX32) && (player.pos.y) > md(minY32) && (player.pos.y) < md(maxY32)) {
            colors.background="#00468c"; colors.tile="#003367";
        }
    },});
C(1,[],[9],{type:[1,[],[9]],x:5300,y:0,w:100,h:100,spawn:{"x":2675,"y":25},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:1400,w:800,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:0,w:100,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:500,w:100,h:800,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:5372,y:200,w:456,h:100,angle:29439.666666679605,rotateSpeed:0.031481481481481485,pivotX:5600,pivotY:250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:116.70903992407786,unSim:15.483333333333094,inView:false,initialRotation:513.819114023183,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5350,y:600,w:500,h:100,angle:-29439.666666679605,rotateSpeed:-0.031481481481481485,pivotX:5600,pivotY:650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:-513.819114023183,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:5805,y:600,w:490,h:100,angle:29439.666666679605,rotateSpeed:0.031481481481481485,pivotX:6050,pivotY:650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:125.02499750049988,unSim:15.483333333333094,inView:false,initialRotation:513.819114023183,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1950,y:1100,w:100,h:50,canJump:true,inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:5300,y:0,w:100,h:100,time:12.5,inView:false,changeDeathTimerStateTo:true,deathTime:750,drainAmountWhileStandingOn:0,})
C(0,[],[0],{type:[0,[],[0]],x:5600,y:250,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:100,w:300,h:300,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5600,y:250,radius:175,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[2800,0],[2800,-50]],"type":"poly","props":{}},endPolygon:{"points":[[2800,250],[2800,300]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:5600,y:650,r:150,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5600,y:650,radius:175,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[2800,450],[2800,500]],"type":"poly","props":{}},endPolygon:{"points":[[2800,200],[2800,150]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:350,w:50,h:150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6050,y:650,r:150,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:6050,y:650,radius:175,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[2900,325],[2850,325]],"type":"poly","props":{}},endPolygon:{"points":[[3025,200],[3025,150]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5650,y:650,radius:175,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[2950,325],[3000,325]],"type":"poly","props":{}},endPolygon:{"points":[[2825,450],[2825,500]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5600,y:900,w:50,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5650,y:650,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6050,y:250,r:150,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:6050,y:250,radius:175,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[3025,0],[3025,-50]],"type":"poly","props":{}},endPolygon:{"points":[[3025,250],[3025,300]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:800,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:900,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:-50,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:100,w:50,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:900,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:800,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:250,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:500,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5950,y:550,w:350,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:900,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:600,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:1000,w:100,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:5300,y:900,w:1300,h:200,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:0,w:100,h:1200,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:6150,y:750,radius:225,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[3250,375],[3300,375]],"type":"poly","props":{}},endPolygon:{"points":[[3075,550],[3075,600]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:1100,w:1300,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:1000,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:1000,w:200,h:200,canJump:false,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6150,y:750,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5300,y:900,w:850,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6300,y:0,w:100,h:750,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6400,y:0,w:100,h:100,tpx:5350,tpy:1950,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:0,w:100,h:2000,canJump:false,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:150,y:1350,radius:125,startAngle:0,endAngle:3.141592653589793,startPolygon:{"points":[[150,675],[200,675]],"type":"poly","props":{}},endPolygon:{"points":[[0,675],[-50,675]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:0,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2300,y:1150,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2350,y:1900,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:1900,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2400,y:1100,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2250,y:1450,w:150,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:2000,w:300,h:150,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:2700,y:600,w:100,h:100,points:[[1350,300],[1550,300]],speed:150,currentPoint:0.3375,collidable:true,pointOn:{"x":1350,"y":300},pointTo:{"x":1550,"y":300},xv:150,yv:0,inView:false,path:[[2700,600,5],[3100,600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2900,y:800,w:100,h:100,points:[[1450,400],[1450,0]],speed:150,currentPoint:0.16875,collidable:true,pointOn:{"x":1450,"y":400},pointTo:{"x":1450,"y":0},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[2900,800,5],[2900,0,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:2700,y:200,w:100,h:100,points:[[1350,100],[1550,100]],speed:150,currentPoint:1.3375,collidable:true,pointOn:{"x":1550,"y":100},pointTo:{"x":1350,"y":100},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[2700,200,5],[3100,200,5]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:100,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:100,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3050,y:200,w:50,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:200,w:50,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:750,w:100,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3000,y:700,radius:141,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1600,350],[1641,350]],"type":"poly","props":{}},endPolygon:{"points":[[1500,450],[1500,491]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:282,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:3000,y:200,radius:135,startAngle:4.71238898038469,endAngle:0,startPolygon:{"points":[[1500,0],[1500,-35]],"type":"poly","props":{}},endPolygon:{"points":[[1600,100],[1635,100]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:270,startSliceAngle:4.71238898038469,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2900,y:200,radius:50,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[1450,100],[1400,100]],"type":"poly","props":{}},endPolygon:{"points":[[1450,100],[1450,50]],"type":"poly","props":{}},renderType:"circle",inView:false,r:100,innerRadius:0,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:3000,y:200,radius:50,startAngle:4.71238898038469,endAngle:0,startPolygon:{"points":[[1500,100],[1500,50]],"type":"poly","props":{}},endPolygon:{"points":[[1500,100],[1550,100]],"type":"poly","props":{}},renderType:"circle",inView:false,r:100,innerRadius:0,startSliceAngle:4.71238898038469,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:150,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:100,w:100,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3000,y:700,radius:50,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1500,350],[1550,350]],"type":"poly","props":{}},endPolygon:{"points":[[1500,350],[1500,400]],"type":"poly","props":{}},renderType:"circle",inView:false,r:100,innerRadius:0,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2900,y:700,radius:50,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[1450,350],[1450,400]],"type":"poly","props":{}},endPolygon:{"points":[[1450,350],[1400,350]],"type":"poly","props":{}},renderType:"circle",inView:false,r:100,innerRadius:0,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:700,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2900,y:700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:300,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:300,w:100,h:300,canJump:true,inView:false,})
C(1,[],[20],{h:500,w:200,y:200,x:2850,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:1000,y:1100,w:200,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1000,y:1200,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:1300,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:950,y:1250,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1060,1030],[1080,1220],[920,1140]],most:{"left":460,"right":540,"top":515,"bottom":610},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:950,w:100,h:400,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:3550,y:200,radius:150,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[1775,0],[1775,-50]],"type":"poly","props":{}},endPolygon:{"points":[[1775,200],[1775,250]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2250,y:900,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1950,y:900,w:250,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1950,y:950,w:150,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2300,y:1200,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:100,w:50,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3550,y:500,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3300,y:-100,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2600,y:0,w:100,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:100,w:100,h:2000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:-50,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3150,y:-50,w:50,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3100,y:500,radius:125,startAngle:0,endAngle:0.6981317007977318,startPolygon:{"points":[[1612.5,250],[1675,250]],"type":"poly","props":{}},endPolygon:{"points":[[1597.8777776949362,290.1742256054087],[1645.7555553898724,330.3484512108174]],"type":"poly","props":{}},innerRadius:125,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:0,endSliceAngle:0.6981317007977318,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:3550,y:700,radius:150,startAngle:3.141592653589793,endAngle:3.490658503988659,startPolygon:{"points":[[1650,350],[1625,350]],"type":"poly","props":{}},endPolygon:{"points":[[1657.5384224017614,307.2474820842914],[1634.0461068821137,298.6969785011497]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:300,startSliceAngle:3.141592653589793,endSliceAngle:3.490658503988659,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,750],[3400,800],[3300,850]],most:{"left":1650,"right":1700,"top":375,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,1200],[3500,1300],[3400,1250]],most:{"left":1700,"right":1750,"top":600,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,1650],[3400,1700],[3300,1750]],most:{"left":1650,"right":1700,"top":825,"bottom":875},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,850],[3400,900],[3300,950]],most:{"left":1650,"right":1700,"top":425,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,1300],[3500,1400],[3400,1350]],most:{"left":1700,"right":1750,"top":650,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,1750],[3400,1800],[3300,1850]],most:{"left":1650,"right":1700,"top":875,"bottom":925},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,800],[3350,850],[3300,900]],most:{"left":1650,"right":1675,"top":400,"bottom":450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3500,1250],[3500,1350],[3450,1300]],most:{"left":1725,"right":1750,"top":625,"bottom":675},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3300,1700],[3350,1750],[3300,1800]],most:{"left":1650,"right":1675,"top":850,"bottom":900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4250,y:1600,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4350,y:1600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:1300,w:500,h:150,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4650,y:1500,w:100,h:100,points:[[2325,750],[2325,950]],speed:175,currentPoint:1.7270833333397708,collidable:true,pointOn:{"x":2325,"y":950},pointTo:{"x":2325,"y":750},xv:1.0715659492539341e-14,yv:-175,inView:false,path:[[4650,1500,5.833333333333333],[4650,1900,5.833333333333333]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4950,y:1500,w:100,h:100,points:[[2475,750],[2475,950]],speed:175,currentPoint:0.7270833333397707,collidable:true,pointOn:{"x":2475,"y":750},pointTo:{"x":2475,"y":950},xv:1.0715659492539341e-14,yv:175,inView:false,path:[[4950,1500,5.833333333333333],[4950,1900,5.833333333333333]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5100,y:1700,w:100,h:100,points:[[2550,850],[2250,850]],speed:262.5,currentPoint:1.7270833333333333,collidable:true,pointOn:{"x":2250,"y":850},pointTo:{"x":2550,"y":850},xv:262.5,yv:0,inView:false,path:[[5100,1700,8.75],[4500,1700,8.75]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4550,y:1800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:1800,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4750,y:1600,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4550,y:1600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4450,y:1600,w:650,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:1600,w:50,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:1850,w:600,h:50,canJump:true,inView:false,})
C(1,[],[20],{h:200,w:500,y:1650,x:4550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:3500,y:1950,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:2050,w:1800,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:1400,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3500,y:550,w:100,h:1450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:1600,w:50,h:300,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[4050,1000],[4250,1000],[4150,1150]],most:{"left":2025,"right":2125,"top":500,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4200,550],[4200,850],[4000,700]],most:{"left":2000,"right":2100,"top":275,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4200,y:700,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4000,450],[4000,550],[3900,500]],most:{"left":1950,"right":2000,"top":225,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3950,500],[4050,500],[4000,600]],most:{"left":1975,"right":2025,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4000,y:500,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3750,350],[3900,450],[3750,550]],most:{"left":1875,"right":1950,"top":175,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3750,y:450,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:4100,y:800,radius:300,startAngle:3.141592653589793,endAngle:4.1887902047863905,startPolygon:{"points":[[1800,400.00000000000006],[1750,400.00000000000006]],"type":"poly","props":{}},endPolygon:{"points":[[1925,183.49364905389038],[1899.9999999999998,140.19237886466846]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:3.141592653589793,endSliceAngle:4.1887902047863905,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:-50,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:-150,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:300,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4550,y:400,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4050,y:200,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3850,y:-300,w:850,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:-100,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:0,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:-100,w:950,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:-50,w:100,h:350,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[4150,-50],[4350,-50],[4250,100]],most:{"left":2075,"right":2175,"top":-25,"bottom":50},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4100,100],[4200,250],[4000,250]],most:{"left":2000,"right":2100,"top":50,"bottom":125},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4450,-50],[4650,0],[4650,250]],most:{"left":2225,"right":2325,"top":-25,"bottom":125},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4400,100],[4500,250],[4300,250]],most:{"left":2150,"right":2250,"top":50,"bottom":125},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3850,-30],[4040,-30],[3820,320]],most:{"left":1910,"right":2020,"top":-15,"bottom":160},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:4000,y:250,w:500,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:200,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4050,y:200,w:450,h:50,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:4500,y:200,w:100,h:100,tpx:4950,tpy:1350,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:0,w:106,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4250,y:1300,w:450,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:1250,w:250,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4500,y:1150,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4550,y:1100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:100,w:100,h:1300,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:-50,w:100,h:250,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:4700,y:100,w:100,h:100,points:[[2350,50],[2550,50]],speed:125,currentPoint:0.9479166666409173,collidable:true,pointOn:{"x":2350,"y":50},pointTo:{"x":2550,"y":50},xv:125,yv:0,inView:false,path:[[4700,100,4.166666666666667],[5100,100,4.166666666666667]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[4700,800],[5100,1050],[4700,1300]],most:{"left":2350,"right":2550,"top":400,"bottom":650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5200,300],[5200,800],[4800,550]],most:{"left":2400,"right":2600,"top":150,"bottom":400},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:5150,y:350,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4650,y:850,w:100,h:400,canJump:true,inView:false,})
C(1,[],[20],{h:400,w:100,y:850,x:4700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:100,y:350,x:5100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[1],{type:[1,[],[1]],x:4300,y:1500,w:150,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3550,y:1700,w:250,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3850,1200],[3950,1200],[3900,1300]],most:{"left":1925,"right":1975,"top":600,"bottom":650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(4,[],[0],{type:[4,[],[0]],x:4100,y:800,radius:300,startAngle:3.141592653589793,endAngle:4.1887902047863905,startPolygon:{"points":[[1800,400.00000000000006],[1750,400.00000000000006]],"type":"poly","props":{}},endPolygon:{"points":[[1925,183.49364905389038],[1899.9999999999998,140.19237886466846]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:3.141592653589793,endSliceAngle:4.1887902047863905,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:4100,y:800,radius:300,startAngle:4.71238898038469,endAngle:2.234021442552742,startPolygon:{"points":[[2050,150],[2050,100]],"type":"poly","props":{}},endPolygon:{"points":[[1896.0846311685855,597.0026884016805],[1865.3015574023025,636.4032260820165]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:4.71238898038469,endSliceAngle:2.234021442552742,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[1],{type:[2,[],[1]],points:[[4150,850],[4250,1000],[4050,1000]],most:{"left":2025,"right":2125,"top":425,"bottom":500},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4150,y:1000,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[3900,1150],[3900,1250],[3800,1200]],most:{"left":1900,"right":1950,"top":575,"bottom":625},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3900,y:1200,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:700,w:100,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:100,w:200,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:0,w:100,h:150,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:6900,y:0,w:200,h:2000,force:3000,dir:{"x":0,"y":-3000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:-150,y:200,w:200,h:800,canJump:true,inView:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,1300],[6850,1550],[6850,1350]],most:{"left":3425,"right":3500,"top":650,"bottom":775},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6850,1300],[7000,1400],[6850,1450]],most:{"left":3425,"right":3500,"top":650,"bottom":725},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,800],[7150,850],[7150,1050]],most:{"left":3500,"right":3575,"top":400,"bottom":525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7150,800],[7150,950],[7000,900]],most:{"left":3500,"right":3575,"top":400,"bottom":475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:0,w:100,h:2000,canJump:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[7000,300],[6850,550],[6850,350]],most:{"left":3425,"right":3500,"top":150,"bottom":275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6850,300],[7000,400],[6850,450]],most:{"left":3425,"right":3500,"top":150,"bottom":225},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:0,w:100,h:1798,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6900,y:0,w:200,h:100,tpx:7250,tpy:50,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:6400,y:1200,w:100,h:100,tpx:6700,tpy:50,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:2000,w:1400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:300,y:1150,w:102,h:300,canJump:true,inView:false,})
shared.morphsTriggered[2]=false;var x2=400;C(1,[],[0],{y:900,x:400,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(300, 800, 100, 100);// 5 and -10

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
shared.morphsTriggered[2]=false;var x2=400;C(1,[],[0],{y:800,x:300,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(400,900, o.dimensions.x, o.dimensions.y);// 5 and -10

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
        }); var c = shared.obstacles[shared.obstacles.length-1];shared.linkDoors[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
        var x2 = 1000;
C(0,[],[0],{type:[0,[],[0]],x:2950,y:1150,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3150,y:1320,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2850,y:1100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:1000,w:150,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3150,y:1200,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[2600,1150],[2750,1150],[2750,1200],[2550,1250]],most:{"left":1275,"right":1375,"top":575,"bottom":625},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:2650,y:1100,w:100,h:100,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:2750,y:1100,w:100,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[1],[1],{type:[1,[1],[1]],x:2400,y:1550,w:800,h:100,angle:20340.133333341357,rotateSpeed:0.021750841750841753,pivotX:2800,pivotY:1600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:201.55644370746373,unSim:15.483333333333094,inView:false,initialRotation:355.002296961456,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:2800,y:1600,r:300,renderType:"circle",inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:600,y:25,w:100,h:450,angle:25480.5,rotateSpeed:0.025757575757575757,pivotX:650,pivotY:250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:0,inView:true,initialRotation:444.71862005441517,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:850,y:725,w:100,h:350,angle:25400.5,rotateSpeed:0.025757575757575757,pivotX:900,pivotY:900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:91.00137361600648,unSim:0,inView:true,initialRotation:443.3223566528196,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:600,y:425,w:100,h:450,angle:-25480.5,rotateSpeed:-0.025757575757575757,pivotX:650,pivotY:650,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:115.2443057161611,unSim:0,inView:true,initialRotation:-444.71862005441517,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:650,y:250,r:150,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:650,y:650,r:150,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:650,y:1150,r:150,renderType:"circle",inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:1000,y:1190,radius:175,startAngle:3.3161255787892263,endAngle:4.363323129985823,startPolygon:{"points":[[401.5192246987792,577.635182233307],[327.6586432228636,564.6115689082872]],"type":"poly","props":{}},endPolygon:{"points":[[465.79798566743307,501.0307379214092],[440.14647491800787,430.5537913624661]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:350,startSliceAngle:3.3161255787892263,endSliceAngle:4.363323129985823,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:950,w:300,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:900,w:400,h:100,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:900,y:910,radius:50,startAngle:-3.141592653589793,endAngle:1.5707963267948966,startPolygon:{"points":[[450,455],[400,455]],"type":"poly","props":{}},endPolygon:{"points":[[450,455],[450,505]],"type":"poly","props":{}},renderType:"circle",inView:true,r:100,innerRadius:0,startSliceAngle:-3.141592653589793,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:200,w:700,h:100,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:650,y:250,radius:225,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[325,0],[324.99999999999994,-100]],"type":"poly","props":{}},endPolygon:{"points":[[325,250],[325,350]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:450,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[1],[0],{type:[1,[1],[0]],x:670,y:700,w:200,h:50,angle:-28,rotateSpeed:0,pivotX:770,pivotY:725,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:0,inView:true,initialRotation:-1604.281826366305*Math.PI/180-0.8,})
C(1,[],[0],{type:[1,[],[0]],x:750,y:600,w:100,h:100,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:800,y:600,w:150,h:100,canJump:true,inView:true,})
C(4,[],[0],{type:[4,[],[0]],x:650,y:650,radius:225,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[200,325],[100,325]],"type":"poly","props":{}},endPolygon:{"points":[[325,200],[324.99999999999994,100]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:true,r:450,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2250,y:650,radius:175,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[1125,450],[1125,500]],"type":"poly","props":{}},endPolygon:{"points":[[1000,325],[950,325]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:200,w:250,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2250,y:650,radius:225,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[1000,325],[900,325]],"type":"poly","props":{}},endPolygon:{"points":[[1125,200],[1125,100]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:2250,y:650,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:2250,y:250,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:200,w:350,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2250,y:500,w:450,h:300,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2250,y:250,radius:225,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[1125,0],[1125,-100]],"type":"poly","props":{}},endPolygon:{"points":[[1125,250],[1125,350]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:450,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2150,y:950,w:100,h:50,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:2250,y:1150,radius:125,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[1050,575],[1000,575]],"type":"poly","props":{}},endPolygon:{"points":[[1125,500],[1125,450]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:900,w:150,h:100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[3850,750],[3900,850],[3800,850]],most:{"left":1900,"right":1950,"top":375,"bottom":425},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3850,y:850,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4550,y:-150,w:350,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:-50,w:100,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5600,1000],[5700,1000],[5650,1050]],most:{"left":2800,"right":2850,"top":500,"bottom":525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6200,950],[6200,1000],[6150,1050],[6100,1000]],most:{"left":3050,"right":3100,"top":475,"bottom":525},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5900,1050],[5950,1100],[5850,1100]],most:{"left":2925,"right":2975,"top":525,"bottom":550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6500,600],[6500,700],[6450,650]],most:{"left":3225,"right":3250,"top":300,"bottom":350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6400,350],[6450,400],[6400,450]],most:{"left":3200,"right":3225,"top":175,"bottom":225},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6500,100],[6500,200],[6450,150]],most:{"left":3225,"right":3250,"top":50,"bottom":100},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:6100,y:1600,radius:250,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[3250,800],[3300,800]],"type":"poly","props":{}},endPolygon:{"points":[[3050,1000],[3050,1050]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5700,y:1600,radius:250,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[2650,800],[2600,800]],"type":"poly","props":{}},endPolygon:{"points":[[2850,600],[2850,550]],"type":"poly","props":{}},innerRadius:400,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:500,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:1900,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5250,y:1150,w:150,h:150,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:6600,y:100,w:200,h:100,maxStrength:35,currentStrength:35,time:0,timer:0,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:1400,w:200,h:100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:3365,y:150,w:370,h:100,angle:24087,rotateSpeed:0.025757575757575757,pivotX:3550,pivotY:200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:95.818839483684,unSim:15.483333333333094,inView:false,initialRotation:420.39745692787415,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:3550,y:200,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3250,y:100,w:300,h:200,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:3550,y:500,radius:175,startAngle:3.141592653589793,endAngle:4.71238898038469,startPolygon:{"points":[[1675,250],[1600,250.00000000000003]],"type":"poly","props":{}},endPolygon:{"points":[[1775,150],[1775,75]],"type":"poly","props":{}},innerRadius:200,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:3.141592653589793,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:3700,y:1600,radius:100,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[1850,850],[1850,900]],"type":"poly","props":{}},endPolygon:{"points":[[1800,800],[1750,800]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:3750,y:1550,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:1450,w:100,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:3800,y:1500,w:50,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3600,y:1200,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:3650,y:800,w:50,h:200,canCollide:true,inView:false,boundPlayer:true,})
shared.morphsTriggered[2]=false;C(1,[],[3],{h:100,w:100,y:1400,x:600,
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
C(1,[],[0],{type:[1,[],[0]],x:5500,y:1800,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:1600,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6200,y:1600,w:200,h:100,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:5400,y:2000,w:100,h:100,points:[[2700,1000],[2700,900]],speed:124,currentPoint:1.064666666656367,alongWith:false,pointOn:{"x":2700,"y":900},pointTo:{"x":2700,"y":1000},xv:7.59281015471359e-15,yv:124,inView:false,path:[[5400,2000,4.133333333333334],[5400,1800,4.133333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5700,y:1800,w:200,h:100,points:[[2850,900],[2850,800]],speed:124,currentPoint:1.064666666656367,alongWith:false,pointOn:{"x":2850,"y":800},pointTo:{"x":2850,"y":900},xv:7.59281015471359e-15,yv:124,inView:false,path:[[5700,1800,4.133333333333334],[5700,1600,4.133333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6000,y:1800,w:200,h:100,points:[[3000,900],[3000,800]],speed:124,currentPoint:0.06466666665636694,alongWith:false,pointOn:{"x":3000,"y":900},pointTo:{"x":3000,"y":800},xv:7.59281015471359e-15,yv:-124,inView:false,path:[[6000,1800,4.133333333333334],[6000,1600,4.133333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6400,y:1600,w:100,h:100,points:[[3200,800],[3200,700]],speed:124,currentPoint:0.06466666665636694,alongWith:false,pointOn:{"x":3200,"y":800},pointTo:{"x":3200,"y":700},xv:7.59281015471359e-15,yv:-124,inView:false,path:[[6400,1600,4.133333333333334],[6400,1400,4.133333333333334]],})
C(1,[0],[0],{type:[1,[0],[0]],x:6300,y:1400,w:100,h:100,points:[[3150,700],[3150,600]],speed:124,currentPoint:1.064666666656367,alongWith:false,pointOn:{"x":3150,"y":600},pointTo:{"x":3150,"y":700},xv:7.59281015471359e-15,yv:124,inView:false,path:[[6300,1400,4.133333333333334],[6300,1200,4.133333333333334]],})
C(2,[],[1],{type:[2,[],[1]],points:[[4350,500],[4350,600],[4250,550]],most:{"left":2125,"right":2175,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4350,y:550,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:4700,y:0,w:500,h:100,tpx:5350,tpy:50,bgColor:"#6f5568",tileColor:"#9f8598",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4400,y:1650,w:150,h:200,canJump:true,inView:false,})
var minX37, minY37, maxX37, maxY37;
    minX37 = 1700;minY37 = -100;maxX37 = 2100;maxY37 = 300;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX37) && (player.pos.x) < md(maxX37) && (player.pos.y) > md(minY37) && (player.pos.y) < md(maxY37)) {
            colors.background="#4f5a96"; colors.tile="#30365f";
        }
    },});
var minX38, minY38, maxX38, maxY38;
    minX38 = 3500;minY38 = 1800;maxX38 = 3800;maxY38 = 2100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX38) && (player.pos.x) < md(maxX38) && (player.pos.y) > md(minY38) && (player.pos.y) < md(maxY38)) {
            colors.background="#34a1c7"; colors.tile="#026178";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:7150,y:100,w:350,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7150,y:-100,w:500,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:0,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:400,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:600,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:350,w:50,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7600,y:-50,w:100,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:100,w:500,h:600,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8300,y:400,r:300,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:-50,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8600,y:700,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:0,w:100,h:750,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:850,w:100,h:1200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3100,y:1150,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11100,y:2000,w:600,h:100,canJump:false,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[11200,1300],[11450,1450],[11200,1600]],most:{"left":5600,"right":5725,"top":650,"bottom":800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11600,850],[11700,900],[11700,1100],[11600,1150],[11500,1000]],most:{"left":5750,"right":5850,"top":425,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11700,850],[11700,1150],[11450,1000]],most:{"left":5725,"right":5850,"top":425,"bottom":575},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11300,450],[11400,600],[11300,750],[11200,700],[11200,500]],most:{"left":5600,"right":5700,"top":225,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11200,450],[11450,600],[11200,750]],most:{"left":5600,"right":5725,"top":225,"bottom":375},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11700,y:-50,w:100,h:2100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11050,y:-200,w:650,h:200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:-50,w:2500,h:2100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7200,y:1100,w:1500,h:100,tpx:11450,tpy:1950,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:2000,w:13150,h:1300,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:7200,y:0,w:100,h:100,points:[[3600,0],[3750,0]],speed:120,currentPoint:0.49333333333333335,pointOn:{"x":3600,"y":0},pointTo:{"x":3750,"y":0},xv:120,yv:0,inView:false,path:[[7200,0,4],[7500,0,4]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7500,y:0,w:100,h:100,points:[[3750,0],[3750,150]],speed:120,currentPoint:1.4933333333333334,pointOn:{"x":3750,"y":150},pointTo:{"x":3750,"y":0},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[7500,0,4],[7500,300,4]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7500,y:300,w:100,h:100,points:[[3750,150],[3600,150]],speed:120,currentPoint:0.49333333333333335,pointOn:{"x":3750,"y":150},pointTo:{"x":3600,"y":150},xv:-120,yv:1.469576158976824e-14,inView:false,path:[[7500,300,4],[7200,300,4]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7200,y:300,w:100,h:100,points:[[3600,150],[3600,250]],speed:80,currentPoint:1.4933333333301146,pointOn:{"x":3600,"y":250},pointTo:{"x":3600,"y":150},xv:4.898587196589413e-15,yv:-80,inView:false,path:[[7200,300,2.6666666666666665],[7200,500,2.6666666666666665]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7200,y:500,w:100,h:100,points:[[3600,250],[3725,250]],speed:100,currentPoint:0.4933333333745322,pointOn:{"x":3600,"y":250},pointTo:{"x":3725,"y":250},xv:100,yv:0,inView:false,path:[[7200,500,3.3333333333333335],[7450,500,3.3333333333333335]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7450,y:500,w:100,h:100,points:[[3725,250],[3850,250]],speed:100,currentPoint:1.4933333333745322,pointOn:{"x":3850,"y":250},pointTo:{"x":3725,"y":250},xv:-100,yv:1.2246467991473532e-14,inView:false,path:[[7450,500,3.3333333333333335],[7700,500,3.3333333333333335]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7700,y:500,w:100,h:100,points:[[3850,250],[3850,125]],speed:100,currentPoint:0.4933333333358055,pointOn:{"x":3850,"y":250},pointTo:{"x":3850,"y":125},xv:6.123233995736766e-15,yv:-100,inView:false,path:[[7700,500,3.3333333333333335],[7700,250,3.3333333333333335]],})
C(1,[0],[11],{type:[1,[0],[11]],x:7700,y:250,w:100,h:100,points:[[3850,125],[3850,0]],speed:100,currentPoint:1.493333333332833,pointOn:{"x":3850,"y":0},pointTo:{"x":3850,"y":125},xv:6.123233995736766e-15,yv:100,inView:false,path:[[7700,250,3.3333333333333335],[7700,0,3.3333333333333335]],})
C(0,[],[0],{type:[0,[],[0]],x:7350,y:850,r:50,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7350,y:800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7200,y:1000,w:1500,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7200,1100],[7600,1100],[7200,2000]],most:{"left":3600,"right":3800,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8300,1100],[8700,1100],[8700,2000]],most:{"left":4150,"right":4350,"top":550,"bottom":1000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7600,1800],[8300,1800],[8350,1900],[7550,1900]],most:{"left":3775,"right":4175,"top":900,"bottom":950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7750,1500],[8150,1500],[8200,1600],[7700,1600]],most:{"left":3850,"right":4100,"top":750,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7900,1200],[8000,1200],[8050,1300],[7850,1300]],most:{"left":3925,"right":4025,"top":600,"bottom":650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:7600,y:1700,w:100,h:100,points:[[3800,850],[4100,850]],speed:180,currentPoint:1.87,alongWith:false,pointOn:{"x":4100,"y":850},pointTo:{"x":3800,"y":850},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[7600,1700,6],[8200,1700,6]],})
C(1,[0],[0],{type:[1,[0],[0]],x:7700,y:1600,w:100,h:100,points:[[3850,800],[4050,800]],speed:120,currentPoint:1.87,alongWith:false,pointOn:{"x":4050,"y":800},pointTo:{"x":3850,"y":800},xv:-120,yv:1.469576158976824e-14,inView:false,path:[[7700,1600,4],[8100,1600,4]],})
C(1,[0],[0],{type:[1,[0],[0]],x:7750,y:1400,w:100,h:100,points:[[3875,700],[4025,700]],speed:90,currentPoint:1.87,alongWith:false,pointOn:{"x":4025,"y":700},pointTo:{"x":3875,"y":700},xv:-90,yv:1.1021821192326179e-14,inView:false,path:[[7750,1400,3],[8050,1400,3]],})
C(1,[0],[0],{type:[1,[0],[0]],x:7850,y:1300,w:100,h:100,points:[[3925,650],[3975,650]],speed:30,currentPoint:1.87,alongWith:false,pointOn:{"x":3975,"y":650},pointTo:{"x":3925,"y":650},xv:-30,yv:3.67394039744206e-15,inView:false,path:[[7850,1300,1],[7950,1300,1]],})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:100,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:100,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12500,y:150,w:200,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:500,w:650,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:150,w:200,h:500,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:13300,y:0,w:100,h:100,spawn:{"x":6675,"y":25},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:11200,y:0,w:500,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:0,w:100,h:100,points:[[5900,0],[5900,300]],speed:150,currentPoint:1.5583333333333333,collidable:true,pointOn:{"x":5900,"y":300},pointTo:{"x":5900,"y":0},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[11800,0,5],[11800,600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11900,y:0,w:100,h:100,points:[[5950,0],[5950,300]],speed:150,currentPoint:0.5583333333333333,collidable:true,pointOn:{"x":5950,"y":0},pointTo:{"x":5950,"y":300},xv:9.184850993605149e-15,yv:150,inView:false,path:[[11900,0,5],[11900,600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12700,y:0,w:100,h:100,points:[[6350,0],[6350,300]],speed:150,currentPoint:0.5583333333333333,collidable:true,pointOn:{"x":6350,"y":0},pointTo:{"x":6350,"y":300},xv:9.184850993605149e-15,yv:150,inView:false,path:[[12700,0,5],[12700,600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12800,y:0,w:100,h:100,points:[[6400,0],[6400,300]],speed:150,currentPoint:1.5583333333333333,collidable:true,pointOn:{"x":6400,"y":300},pointTo:{"x":6400,"y":0},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[12800,0,5],[12800,600,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12000,y:0,w:100,h:100,points:[[6000,0],[6300,0]],speed:150,currentPoint:1.5583333333333333,collidable:true,pointOn:{"x":6300,"y":0},pointTo:{"x":6000,"y":0},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[12000,0,5],[12600,0,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12000,y:900,w:200,h:200,points:[[6000,450],[6250,450],[6250,700],[6000,700]],speed:100,currentPoint:1.2466666666475532,collidable:true,pointOn:{"x":6250,"y":450},pointTo:{"x":6250,"y":700},xv:6.123233995736766e-15,yv:100,inView:false,path:[[12000,900,3.3333333333333335],[12500,900,3.3333333333333335],[12500,1400,3.3333333333333335],[12000,1400,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:700,w:200,h:200,points:[[5900,350],[6350,350],[6350,800],[5900,800]],speed:180,currentPoint:2.2466666666666666,collidable:true,pointOn:{"x":6350,"y":800},pointTo:{"x":5900,"y":800},xv:-180,yv:2.2043642384652358e-14,inView:false,path:[[11800,700,6],[12700,700,6],[12700,1600,6],[11800,1600,6]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11100,y:2000,w:700,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13250,y:100,w:400,h:300,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:13250,y:400,w:746,h:400,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[1],{type:[1,[],[1]],x:13650,y:-50,w:250,h:550,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[19],{type:[1,[],[19]],x:13300,y:1400,w:2300,h:1800,speedInc:2,inView:false,speedChangePermanent:false,speedMult:2,})
C(1,[1],[11],{type:[1,[1],[11]],x:13775,y:200,w:150,h:100,angle:24087 - Math.PI/2,rotateSpeed:Math.PI/120,pivotX:13650,pivotY:250,distToPivot:100,canCollide:true,cullingRadius:145.06939094329988,unSim:15.483333333333094,inView:false,initialRotation:420.39745692787415 - Math.PI/2,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:-150,w:800,h:150,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:13650,y:250,radius:175,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[6825,0],[6825,-50]],"type":"poly","props":{}},endPolygon:{"points":[[6825,250],[6825,300]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:450,w:200,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13900,y:0,w:100,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13450,y:500,w:450,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:13650,y:250,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13850,y:-50,w:100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:13450,y:550,r:50,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:13450,y:550,radius:125,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[6725,350],[6725,400]],"type":"poly","props":{}},endPolygon:{"points":[[6725,200],[6725,150]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[0],[11],{type:[1,[0],[11]],x:13200,y:600,w:100,h:100,points:[[6600,300],[7000,300]],speed:200,currentPoint:1.5583333333590828,pointOn:{"x":7000,"y":300},pointTo:{"x":6600,"y":300},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[13200,600,6 + 2/3],[14000,600,6 + 2/3]],})
C(1,[1],[11],{type:[1,[1],[11]],x:13500,y:500,w:100,h:100,angle:-23997 + Math.PI,rotateSpeed:-Math.PI/120,pivotX:13450,pivotY:550,distToPivot:50,canCollide:true,cullingRadius:85.35533905932738,unSim:15.483333333333094,inView:false,initialRotation:-418.82666060107925 + Math.PI/2,})
C(1,[],[0],{type:[1,[],[0]],x:13450,y:500,w:450,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:13450,y:550,radius:125,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[6725,350],[6725,400]],"type":"poly","props":{}},endPolygon:{"points":[[6725,200],[6725,150]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:700,w:950,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13250,y:700,w:1850,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:100,w:100,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:100,w:200,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:-50,w:200,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:100,w:200,h:650,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:15000,y:0,w:100,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[20],{x:15100,y:0,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[20],{x:13300,y:0,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[7],{type:[1,[],[7]],x:14900,y:600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:13250,y:100,w:400,h:300,canJump:true,inView:false,})
C(1,[],[15],{type:[1,[],[15]],x:15100,y:0,w:500,h:1400,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[15],{type:[1,[],[15]],x:13300,y:900,w:2300,h:500,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:1400,w:2300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:-50,w:100,h:1650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:-100,w:700,h:100,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:0,w:500,h:1400,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(2,[],[1],{type:[2,[],[1]],points:[[15200,450],[15250,450],[15350,600],[15100,700],[15100,500]],most:{"left":7550,"right":7675,"top":225,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15100,400],[15350,550],[15100,700]],most:{"left":7550,"right":7675,"top":200,"bottom":350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14350,1200],[14400,1400],[14150,1400]],most:{"left":7075,"right":7200,"top":600,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[14200,1100],[14400,1400],[14150,1400]],most:{"left":7075,"right":7200,"top":550,"bottom":700},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13600,900],[13850,900],[13800,1100]],most:{"left":6800,"right":6925,"top":450,"bottom":550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[13600,900],[13850,900],[13650,1200]],most:{"left":6800,"right":6925,"top":450,"bottom":600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:12900,y:-50,w:400,h:3350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:1600,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:2000,w:100,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13300,y:2800,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:3200,w:2300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:1600,w:100,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13450,y:2100,w:750,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13600,y:1700,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13700,y:1800,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13600,y:2500,w:400,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:2700,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:3000,w:650,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14000,y:2800,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:2300,w:100,h:800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13600,y:2300,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:2400,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:2000,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14000,y:1900,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:1700,w:100,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:1700,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13800,y:1600,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:3000,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:2500,w:500,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:2300,w:100,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:2000,w:100,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:2100,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14350,y:2300,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14400,y:1900,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:1700,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:1800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15000,y:2000,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:1700,w:400,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15200,y:1850,w:300,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15200,y:2500,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:2700,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15200,y:2900,w:450,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15200,y:3100,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15400,y:2950,w:100,h:150,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:15500,y:3200,w:100,h:100,spawn:{"x":7775,"y":1625},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:3250,w:100,h:1600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:3250,w:100,h:1450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15300,y:3600,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15100,y:4100,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:15450,y:4400,r:150,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:15500,y:4700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15000,y:3300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[0],{type:[0,[],[0]],x:15500,y:4000,r:100,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:15000,y:4300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{x:14800,y:4700,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[8],{type:[1,[],[8]],x:14900,y:4700,w:100,h:100,coins:3,currentCoins:3,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:3,})
C(0,[],[0],{type:[0,[],[0]],x:15100,y:4500,r:100,renderType:"circle",inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:15000,y:3550,w:600,h:100,angle:36130.5,rotateSpeed:0.03863636363636364,pivotX:15300,pivotY:3600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:152.0690632574555,unSim:15.483333333333094,inView:false,initialRotation:2070125.161697421,})
C(1,[1],[0],{type:[1,[1],[0]],x:15300,y:3950,w:400,h:100,angle:-35995.5,rotateSpeed:-0.03863636363636364,pivotX:15500,pivotY:4000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:15.483333333333094,inView:false,initialRotation:-2062390.2314631548,})
C(1,[1],[0],{type:[1,[1],[0]],x:15200,y:4350,w:500,h:100,angle:-35995.5,rotateSpeed:-0.03863636363636364,pivotX:15450,pivotY:4400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:-2062390.2314631548,})
C(0,[],[0],{type:[0,[],[0]],x:15550,y:4600,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15500,y:4400,w:150,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15500,y:3900,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14900,y:3900,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14950,y:4400,w:150,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15450,y:4250,w:250,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15550,y:4650,w:100,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14750,y:4850,w:50,h:50,canJump:true,inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:13300,y:1400,w:100,h:100,time:15,inView:false,changeDeathTimerStateTo:true,deathTime:900,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:15500,y:3200,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(0,[],[0],{type:[0,[],[0]],x:15300,y:4800,r:100,renderType:"circle",inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:13300,y:900,w:2300,h:500,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[0],[1],{type:[1,[0],[1]],x:12000,y:900,w:200,h:200,points:[[6000,450],[6250,450],[6250,700],[6000,700]],speed:100,currentPoint:3.24666666664757,collidable:true,pointOn:{"x":6000,"y":700},pointTo:{"x":6000,"y":450},xv:6.123233995736766e-15,yv:-100,inView:false,path:[[12000,900,3.3333333333333335],[12500,900,3.3333333333333335],[12500,1400,3.3333333333333335],[12000,1400,3.3333333333333335]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11800,y:700,w:200,h:200,points:[[5900,350],[6350,350],[6350,800],[5900,800]],speed:180,currentPoint:0.24666666666666667,collidable:true,pointOn:{"x":5900,"y":350},pointTo:{"x":6350,"y":350},xv:180,yv:0,inView:false,path:[[11800,700,6],[12700,700,6],[12700,1600,6],[11800,1600,6]],boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:14050,y:100,w:50,h:400,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14350,y:300,w:50,h:300,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14400,y:600,w:200,h:50,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14600,y:300,w:50,h:300,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14900,y:100,w:50,h:400,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14800,y:50,w:100,h:50,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:14100,y:50,w:100,h:50,tpx:14050,tpy:650,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:4600,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14300,y:4600,w:650,h:100,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:14200,y:4600,w:100,h:100,maxStrength:14,currentStrength:10,time:0.05,timer:0.05,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[2],{type:[1,[],[2]],x:14150,y:4500,w:50,h:100,effect:1000,inView:false,bounciness:400,decay:0.5,})

C(1,[],[0],{type:[1,[],[0]],x:14100,y:4400,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:4400,w:50,h:400,canJump:true,inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:14350,y:4500,w:300,h:100,time:0,maxTime:0.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:30,})
C(1,[],[13],{type:[1,[],[13]],x:14800,y:4500,w:100,h:100,force:5000,dir:{"x":0,"y":-5000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[0],{type:[1,[],[0]],x:14700,y:4200,w:250,h:100,canJump:true,inView:false,})
C(1,[],[1],{type:[1,[],[1]],x:13500,y:3300,w:1396,h:950,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:14500,y:4200,w:450,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:3400,w:50,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:3400,w:100,h:1050,canJump:true,inView:false,})
C(1,[0],[11],{type:[1,[0],[11]],x:13900,y:3300,w:100,h:100,points:[[6950,1650],[6950,1800]],speed:75,currentPoint:1.5583333333333333,pointOn:{"x":6950,"y":1800},pointTo:{"x":6950,"y":1650},xv:4.592425496802574e-15,yv:-75,inView:false,path:[[13900,3300,2.5],[13900,3600,2.5]],})
C(1,[0],[11],{type:[1,[0],[11]],x:13500,y:3800,w:100,h:100,points:[[6750,1900],[7000,1900]],speed:150,currentPoint:1.87,pointOn:{"x":7000,"y":1900},pointTo:{"x":6750,"y":1900},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[13500,3800,5],[14000,3800,5]],})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:4200,w:600,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:13850,y:4550,radius:175,startAngle:0.17453292519943295,endAngle:3.141592653589793,startPolygon:{"points":[[7048.100969126526,2296.7060222083664],[7097.341356777137,2305.388431091713]],"type":"poly","props":{}},endPolygon:{"points":[[6800,2275],[6750,2275]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:0.17453292519943295,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:13700,y:4400,w:300,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13500,y:4400,w:100,h:400,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:13850,y:4550,r:150,renderType:"circle",inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:13800,y:4300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:13500,y:4300,w:100,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[20],{x:13400,y:4300,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[1],[0],{type:[1,[1],[0]],x:13600,y:4500,w:500,h:100,angle:0,rotateSpeed:0.03863636363636364,pivotX:13850,pivotY:4550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:0,})
C(1,[1],[0],{type:[1,[1],[0]],x:13600,y:4500,w:500,h:100,angle:Math.PI/2,rotateSpeed:0.03863636363636364,pivotX:13850,pivotY:4550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:Math.PI/2,})
C(1,[],[9],{type:[1,[],[9]],x:13400,y:4300,w:100,h:100,spawn:{"x":6725,"y":2175},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[14],{type:[1,[],[14]],x:11700,y:3300,w:1800,h:1500,force:2000,dir:{"x":0,"y":2000},direction:"down",jumpHeight:150,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.43217286914765923,jumpForce:43.5,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[0],{type:[1,[],[0]],x:13400,y:3250,w:100,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13300,y:3300,w:100,h:1400,canJump:false,inView:false,})
C(1,[],[0],{x:15700,y:0,w:5000,h:12000}); C(1,[],[0],{x:0,y:4900,w:20000,h:12000});
C(1,[],[0],{type:[1,[],[0]],x:13000,y:4700,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11600,y:4700,w:1300,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11600,y:3400,w:100,h:1350,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:4300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12600,y:4400,w:300,h:100,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:3800,w:200,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11800,y:3150,w:200,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12100,y:3400,w:200,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:3250,w:200,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:3800,w:300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11650,y:3800,w:150,h:200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12550,y:3250,w:800,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12900,y:3650,w:400,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11650,y:4300,w:750,h:450,canJump:false,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:6021.75,rotateSpeed:0.006439393939393939,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:105.09936423196854,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:6141.75,rotateSpeed:0.006439393939393939,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:107.19375933436173,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:6261.75,rotateSpeed:0.006439393939393939,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:109.28815443675492,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:-5352.666666667462,rotateSpeed:-0.005723905723905725,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:-93.42165709509702,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:-5232.6666666672445,rotateSpeed:-0.005723905723905725,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:-91.32726199270003,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:11500,y:3800,w:100,h:100,angle:-5112.666666667021,rotateSpeed:-0.005723905723905725,pivotX:11050,pivotY:3850,distToPivot:250,canCollide:true,renderType:"rotating",cullingRadius:285.3553390593274,unSim:15.483333333333094,inView:false,initialRotation:-89.23286689030293,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:11000,y:3800,w:100,h:100,tpx:11550,tpy:4750,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:3250,w:100,h:1250,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:10950,y:3750,w:200,h:200,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[7],{type:[1,[],[7]],x:10500,y:3300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10500,y:4300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:11500,y:4300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{x:11500,y:4700,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[13],{type:[1,[],[13]],x:10400,y:4500,w:1200,h:300,force:1000,dir:{"x":-1000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7082833133253302,})
C(1,[0],[1],{type:[1,[0],[1]],x:10500,y:4450,w:100,h:100,points:[[5250,2225],[5250,2375]],speed:25,currentPoint:1.1861111111454434,collidable:true,pointOn:{"x":5250,"y":2375},pointTo:{"x":5250,"y":2225},xv:1.5308084989341915e-15,yv:-25,inView:false,path:[[10500,4450,0.8333333333333334],[10500,4750,0.8333333333333334]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:11000,y:4450,w:100,h:100,points:[[5500,2225],[5500,2375]],speed:25,currentPoint:0.18611111114544351,collidable:true,pointOn:{"x":5500,"y":2225},pointTo:{"x":5500,"y":2375},xv:1.5308084989341915e-15,yv:25,inView:false,path:[[11000,4450,0.8333333333333334],[11000,4750,0.8333333333333334]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:4400,w:1250,h:100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:10400,y:4500,w:100,h:300,tpx:10350,tpy:3350,bgColor:"#4d2353",tileColor:"#8a2aac",changeColor:false,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:9400,y:4700,w:100,h:100,spawn:{"x":4725,"y":2375},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:10300,y:3400,w:100,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:3250,w:200,h:1450,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:3250,w:700,h:100,points:[[4800,1625],[4800,2375]],speed:200,currentPoint:0.49777777777675447,collidable:false,pointOn:{"x":4800,"y":1625},pointTo:{"x":4800,"y":2375},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[9600,3250,6.666666666666667],[9600,4750,6.666666666666667]],boundPlayer:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:9600,y:3250,w:700,h:100,points:[[4800,1625],[4800,2375]],speed:200,currentPoint:1.4977777777766952,collidable:false,pointOn:{"x":4800,"y":2375},pointTo:{"x":4800,"y":1625},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[9600,3250,6.666666666666667],[9600,4750,6.666666666666667]],boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:9500,y:3200,w:900,h:100,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:11200,y:1800,w:500,h:100,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:12550,y:4000,w:150,h:100,canJump:true,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:9600,y:3300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:9600,y:4000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10200,y:4000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:10200,y:4700,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[20],{x:8800,y:3300,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[1],[1],{type:[1,[1],[1]],x:8900,y:4500,w:500,h:100,angle:21410.666666669847,rotateSpeed:0.0228956228956229,pivotX:9150,pivotY:4550,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:373.6866283803881,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:8900,y:4100,w:500,h:100,angle:-21410.666666669847,rotateSpeed:-0.0228956228956229,pivotX:9150,pivotY:4150,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:-373.6866283803881,boundPlayer:true,})
C(1,[],[15],{type:[1,[],[15]],x:500,y:3300,w:5000,h:1000,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[17],{type:[1,[],[17]],x:500,y:3300,w:4900,h:1000,time:0,maxTime:15,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:100,timeTrapMaxTime:900,})
C(1,[1],[1],{type:[1,[1],[1]],x:8900,y:3700,w:500,h:100,angle:21410.666666669847,rotateSpeed:0.0228956228956229,pivotX:9150,pivotY:3750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:15.483333333333094,inView:false,initialRotation:373.6866283803881,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:9150,y:3600,w:250,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:4000,w:250,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9150,y:4400,w:250,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:4500,w:150,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:3650,w:150,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:3400,w:450,h:100,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:9150,y:4150,radius:175,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[4575,1950],[4575,1900]],"type":"poly","props":{}},endPolygon:{"points":[[4575,2200],[4575,2250]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:9150,y:3750,radius:175,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[4575,2000],[4575,2050]],"type":"poly","props":{}},endPolygon:{"points":[[4575,1750],[4575,1700]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:9150,y:4150,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9150,y:3750,r:150,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:3400,w:100,h:1500,canJump:true,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:9150,y:4550,radius:175,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[4575,2400],[4575,2450]],"type":"poly","props":{}},endPolygon:{"points":[[4575,2150],[4575,2100]],"type":"poly","props":{}},innerRadius:250,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:350,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:9150,y:4550,r:150,renderType:"circle",inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:9125,y:3525,w:50,h:50,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(4,[],[0],{type:[4,[],[0]],x:9250,y:3450,radius:125,startAngle:4.71238898038469,endAngle:1.5707963267948966,startPolygon:{"points":[[4625,1650],[4625,1600]],"type":"poly","props":{}},endPolygon:{"points":[[4625,1800],[4625,1850]],"type":"poly","props":{}},innerRadius:150,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:250,startSliceAngle:4.71238898038469,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(0,[],[0],{type:[0,[],[0]],x:9250,y:3450,r:50,renderType:"circle",inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:9125,y:4325,w:50,h:50,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[6],{type:[1,[],[6]],x:0,y:3300,w:200,h:200,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:4800,w:15750,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8500,y:3300,w:100,h:1400,canJump:true,inView:false,})
C(1,[],[15],{type:[1,[],[15]],x:8600,y:3300,w:200,h:1500,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[13],{type:[1,[],[13]],x:8600,y:3300,w:200,h:1500,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[0],[12],{type:[1,[0],[12]],x:8700,y:3300,w:100,h:100,points:[[4350,1650],[4350,2000]],speed:100,currentPoint:0.8904761904688335,tpx:8850,tpy:3350,pointOn:{"x":4350,"y":1650},pointTo:{"x":4350,"y":2000},xv:6.123233995736766e-15,yv:100,inView:false,path:[[8700,3300,3.3333333333333335],[8700,4000,3.3333333333333335]],})
C(1,[0],[1],{type:[1,[0],[1]],x:8600,y:4000,w:100,h:100,points:[[4300,2000],[4300,2350]],speed:100,currentPoint:0.8904761904878523,collidable:true,pointOn:{"x":4300,"y":2000},pointTo:{"x":4300,"y":2350},xv:6.123233995736766e-15,yv:100,inView:false,path:[[8600,4000,3.3333333333333335],[8600,4700,3.3333333333333335]],boundPlayer:true,})
C(1,[],[7],{type:[1,[],[7]],x:11800,y:3850,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:11600,y:3300,w:100,h:100,coins:1,currentCoins:1,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:3800,w:100,h:200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11900,y:3798,w:200,h:20,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:4300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12400,y:4350,w:100,h:400,canJump:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:12400,y:4100,w:100,h:200,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[12],{type:[1,[],[12]],x:9500,y:4700,w:100,h:100,tpx:9450,tpy:4750,bgColor:"#4d2353",tileColor:"#8a2aac",changeColor:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:9500,y:4700,w:100,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(0,[],[1],{type:[0,[],[1]],x:8400,y:4650,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8100,y:4400,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8450,y:4300,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8250,y:3850,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8200,y:4000,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8000,y:3400,w:100,h:1450,canJump:true,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:8450,y:3500,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[29],{type:[1,[],[29]],x:8500,y:4700,w:100,h:100,time:10,inView:false,changeDeathTimerStateTo:true,deathTime:600,drainAmountWhileStandingOn:0,})
C(1,[],[29],{type:[1,[],[29]],x:8000,y:3300,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:3300,w:800,h:100,force:3000,dir:{"x":-3000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:3300,w:100,h:300,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7200,y:3500,w:300,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7400,y:3500,w:100,h:500,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7400,y:3900,w:400,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7700,y:3600,w:100,h:400,force:3000,dir:{"x":0,"y":-3000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7700,y:3600,w:300,h:100,force:3000,dir:{"x":3000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[13],{type:[1,[],[13]],x:7900,y:3600,w:100,h:500,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:3300,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:3600,w:300,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7350,y:4000,w:550,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7300,y:3400,w:700,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:3450,w:200,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7650,y:3500,w:350,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7800,y:3700,w:100,h:400,canJump:true,inView:false,})
var timer39 = 1.8833333333340887; var state39 =true; var x39 = 7300; 
    C(1,[],[1],{h:100,w:100,y:3500,x:7300,sf:(e)=>{
            timer39 -= 1 / 60;
            if(timer39 < 0){
                state39 = !state39;
                if(state39 === true){
                    // on
                    timer39 += 3;
                    e.pos.x = x39;
                } else {
                    // off
                    timer39 += 3;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state39) {
                if (timer39 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = timer39 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer39 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer39 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x39, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer40 = 1.8833333333340887; var state40 =false; var x40 = 7500; 
    C(1,[],[1],{h:100,w:100,y:3900,x:7500,sf:(e)=>{
            timer40 -= 1 / 60;
            if(timer40 < 0){
                state40 = !state40;
                if(state40 === true){
                    // on
                    timer40 += 3;
                    e.pos.x = x40;
                } else {
                    // off
                    timer40 += 3;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state40) {
                if (timer40 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = timer40 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer40 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer40 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x40, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
var timer41 = 1.8833333333340887; var state41 =true; var x41 = 7800; 
    C(1,[],[1],{h:100,w:100,y:3600,x:7800,sf:(e)=>{
            timer41 -= 1 / 60;
            if(timer41 < 0){
                state41 = !state41;
                if(state41 === true){
                    // on
                    timer41 += 3;
                    e.pos.x = x41;
                } else {
                    // off
                    timer41 += 3;
                    e.pos.x = -1E9;
                }
            }
        },
        cr:(e)=>{
            ctx.beginPath();
            
            if (state41) {
                if (timer41 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = timer41 / 0.2;
                }
            } else {
                ctx.globalAlpha = 0.3;
                if (timer41 < 0.2 && 3 > 0.2) {
                    ctx.globalAlpha = 0.9 * (1 - timer41 / 0.2) + 0.1;
                }
            }
            ctx.fillStyle = true ? '#c70000' : '#9e0000';
            /*if (obstacle.collidable) {
                ctx.fillStyle = '#c70000';
            }*/ 

            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.rect(x41, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[1],{type:[1,[],[1]],x:7200,y:4100,w:800,h:700,canCollide:false,inView:false,boundPlayer:false,})
C(1,[],[0],{type:[1,[],[0]],x:7100,y:4050,w:100,h:850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:4300,w:650,h:100,canJump:true,inView:false,})
C(1,[1],[11],{type:[1,[1],[11]],x:7475,y:4300,w:100,h:100,angle:-24087,rotateSpeed:-0.025757575757575757,pivotX:7400,pivotY:4350,distToPivot:62.5,canCollide:true,cullingRadius:97.85533905932738,unSim:15.483333333333094,inView:false,initialRotation:-420.39745692787415,})
C(1,[1],[11],{type:[1,[1],[11]],x:7475,y:4300,w:100,h:100,angle:-23907,rotateSpeed:-0.025757575757575757,pivotX:7400,pivotY:4350,distToPivot:62.5,canCollide:true,cullingRadius:97.85533905932738,unSim:15.483333333333094,inView:false,initialRotation:-417.25586427428436,})
C(1,[0],[11],{type:[1,[0],[11]],x:7900,y:4400,w:100,h:100,points:[[3950,2200],[3950,2350]],speed:150,currentPoint:1.1166666666666667,pointOn:{"x":3950,"y":2350},pointTo:{"x":3950,"y":2200},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[7900,4400,5],[7900,4700,5]],})
C(0,[],[0],{type:[0,[],[0]],x:7400,y:4350,r:50,renderType:"circle",inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7900,y:4700,w:100,h:100,tpx:5450,tpy:3350,bgColor:"#721d4f",tileColor:"#8d3399",changeColor:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:5400,y:3300,w:100,h:100,spawn:{"x":2725,"y":1675},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:3300,w:1650,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:11700,y:3798,w:100,h:50,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:7200,y:3500,w:100,h:100,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:7400,y:3900,w:100,h:100,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:7700,y:3600,w:100,h:100,maxStrength:14,currentStrength:5,time:0.1,timer:0.1,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[1],{type:[1,[],[1]],x:10500,y:3600,w:50,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:11550,y:3400,w:50,h:700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10600,y:3300,w:700,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:10800,y:4350,w:700,h:50,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:11650,y:3400,w:50,h:250,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:12300,y:1200,w:100,h:104,tpx:13350,tpy:50,bgColor:"#4a1698",tileColor:"#6b53ac",changeColor:false,inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:5200,y:3600,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4700,y:3450,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4800,y:3850,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:5200,y:4100,r:158,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4400,y:4200,r:50,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:4300,y:3700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3225+550/4,y:3550,w:550/2,h:100,angle:30831.359999979697,rotateSpeed:Math.PI/93.75,pivotX:3500,pivotY:3600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:15.483333333333094,inView:false,initialRotation:538.1087448673245,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:3225+550/4,y:3950,w:550/2,h:100,angle:-30831.359999979697,rotateSpeed:-Math.PI/93.75,pivotX:3500,pivotY:4000,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:15.483333333333094,inView:false,initialRotation:-538.1087448673245,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3900,y:3450,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:3900,y:4100,r:150,renderType:"circleR",inView:false,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[2650,3500],[2950,3800],[2650,4100],[2350,3800]],most:{"left":1175,"right":1475,"top":1750,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1950,3300],[2350,3300],[2050,3600],[1950,3600]],most:{"left":975,"right":1175,"top":1650,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1950,4000],[2050,4000],[2350,4300],[1950,4300]],most:{"left":975,"right":1175,"top":2000,"bottom":2150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[12],{type:[1,[],[12]],x:105,y:4100,w:90,h:90,tpx:5450,tpy:3350,bgColor:"#323c81",tileColor:"#5260ab",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:3500,w:100,h:600,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:0,y:4000,w:100,h:100,coins:4,currentCoins:4,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[7],{type:[1,[],[7]],x:3100,y:3750,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:2600,y:4200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:1300,y:3300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4300,y:3300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:4300,w:7000,h:1150,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[500,3300],[1100,3300],[500,4200]],most:{"left":250,"right":550,"top":1650,"bottom":2100},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:1.59733333333341,alongWith:false,pointOn:{"x":2125,"y":1650},pointTo:{"x":1500,"y":1650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:1.59733333333341,alongWith:false,pointOn:{"x":2125,"y":1650},pointTo:{"x":1500,"y":1650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:2.5973333333334265,alongWith:false,pointOn:{"x":1500,"y":1650},pointTo:{"x":875,"y":1650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:3.597333333333386,alongWith:false,pointOn:{"x":875,"y":1650},pointTo:{"x":250,"y":1650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:4.5973333333334265,alongWith:false,pointOn:{"x":250,"y":1650},pointTo:{"x":250,"y":1025},xv:1.2246467991473532e-14,yv:-200,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:5.5973333333334,alongWith:false,pointOn:{"x":250,"y":1025},pointTo:{"x":875,"y":1025},xv:200,yv:0,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:6.59733333333341,alongWith:false,pointOn:{"x":875,"y":1025},pointTo:{"x":1500,"y":1025},xv:200,yv:0,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:7.5973333333334265,alongWith:false,pointOn:{"x":1500,"y":1025},pointTo:{"x":2125,"y":1025},xv:200,yv:0,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:8.597333333333347,alongWith:false,pointOn:{"x":2125,"y":1025},pointTo:{"x":2750,"y":1025},xv:200,yv:0,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:0.5973333333333445,alongWith:false,pointOn:{"x":2750,"y":1650},pointTo:{"x":2125,"y":1650},xv:-200,yv:2.4492935982947064e-14,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5500,y:3300,w:100,h:1000,points:[[2750,1650],[2125,1650],[1500,1650],[875,1650],[250,1650],[250,1025],[875,1025],[1500,1025],[2125,1025],[2750,1025]],speed:200,currentPoint:9.597333333333427,alongWith:false,pointOn:{"x":2750,"y":1025},pointTo:{"x":2750,"y":1650},xv:1.2246467991473532e-14,yv:200,inView:false,path:[[5500,3300,6.666666666666667],[4250,3300,6.666666666666667],[3000,3300,6.666666666666667],[1750,3300,6.666666666666667],[500,3300,6.666666666666667],[500,2050,6.666666666666667],[1750,2050,6.666666666666667],[3000,2050,6.666666666666667],[4250,2050,6.666666666666667],[5500,2050,6.666666666666667]],})
C(1,[],[0],{type:[1,[],[0]],x:200,y:3300,w:300,h:900,canJump:true,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:100,y:4100,w:100,h:100,maxStrength:14,currentStrength:12,time:0.3,timer:0.3,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[11],{type:[1,[],[11]],x:7200,y:0,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7800,y:0,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:13300,y:0,w:100,h:100,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14400,y:4100,w:400,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14300,y:4100,w:50,h:200,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14700,y:3750,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14350,y:3750,w:300,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14250,y:3450,w:50,h:350,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:13900,y:3350,w:400,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:13650,y:3600,w:350,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:13550,y:3600,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:14000,y:3900,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:9925,y:3800,w:50,h:500,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:9600,y:3500,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7950,y:4000,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7350,y:4200,w:550,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7350,y:4450,w:50,h:300,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7450,y:4700,w:250,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7650,y:4500,w:50,h:150,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:7750,y:4500,w:200,h:50,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10200,y:3300,w:50,h:600,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:9600,y:4200,w:50,h:600,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10250,y:4200,w:50,h:400,renderAbove:true,})
C(1,[],[11],{type:[1,[],[11]],x:10300,y:3300,w:100,h:100,renderAbove:true,})
C(3,[],[20],{type:[3,[],[20]],x:8150,y:-50,w:50,h:50,size:30,text:"Speed Check!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
// C(3,[],[20],{type:[3,[],[20]],x:15400,y:3250,w:50,h:50,size:30,text:"Exit! > ",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
// C(3,[],[20],{type:[3,[],[20]],x:14250,y:4450,w:50,h:50,size:30,text:"Bounce!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
// C(3,[],[20],{type:[3,[],[20]],x:850,y:1450,w:50,h:50,size:30,text:"< Button",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
// C(3,[],[20],{type:[3,[],[20]],x:350,y:-290,w:50,h:50,size:30,text:"The First Community-Made Map!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:350,y:-220,w:50,h:50,size:30,text:/*"Planet of Slight Hurdles (PoSH)"*/"The First Community-Made Map!",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:350,y:-150,w:50,h:50,size:30,text:"Creator: Smelty",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:350,y:-80,w:50,h:50,size:30,text:"Difficulty: Low-Mid Moderate",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
// C(3,[],[20],{type:[3,[],[20]],x:5150,y:3250,w:50,h:50,size:30,text:"Approaching the end...",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:350,y:4050,w:50,h:50,size:30,text:"v Need Coins? ",angle:0,story:false,fontSize:60,hex:"#FFFFFF",})
C(0,[],[0],{type:[0,[],[0]],x:2020,y:1120,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2080,y:1120,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2020,y:2030,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2080,y:2030,r:20,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:2020,y:1100,w:60,h:950,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:2000,y:1120,w:100,h:910,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2220,y:1220,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2280,y:1220,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2220,y:2130,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:2280,y:2130,r:20,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:2220,y:1200,w:60,h:950,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:2200,y:1220,w:100,h:910,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:3820,y:220,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:3880,y:220,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:3820,y:380,r:20,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:3880,y:380,r:20,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:3820,y:200,w:60,h:200,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:220,w:100,h:160,toRender:false,})

C(1,[],[13],{type:[1,[],[13]],x:400,y:4200,w:100,h:100,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2,})


    spawnPosition.x=50;
    spawnPosition.y=50;
    shared.respawnPlayer();
    colors.background='#5260ab'; colors.tile='#323c81';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=2C4lFUpI_4U'
    });

    mapDimensions.x=24000;
    mapDimensions.y=12000;

    // invincibility powerup
    // safe rendering on the player
    {
        const maxInv = 150;// half a second
        let inv = maxInv;
        shared.C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
            if(p.pos.x < 14200 || p.pos.y < 4600 || p.pos.x > 14800 || p.pos.y > 4800){
                inv = maxInv;
                o.pos.x = -1E9;
                return;
            }

            if(p.pos.x > 14800){
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

    
C(1,[],[2],{type:[1,[],[2]],x:13500,y:3650,w:50,h:200,effect:1000,inView:false,bounciness:20,decay:0.9,})
});

// (async () => {
//     const shared = (await import('/shared/shared.js')).default;
//     await import('/maps/_converter.js');
//     const convertOldExMap = shared.convertOldExMap;
//     const C = shared.C;
//     let counter = 0;

//     const obs = [
//         {
//             "x": 5600,
//             "y": 0,
//             "w": 250,
//             "h": 1000,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": -3000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 5875,
//             "y": 900,
//             "w": 650,
//             "h": 125,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 500,
//             "w": 750,
//             "h": 500,
//             "type": "platformer",
//             "force": 2800,
//             "dir": {
//                 "x": 0,
//                 "y": 2800
//             },
//             "direction": "down",
//             "jumpHeight": 120,
//             "maxForce": 1000,
//             "variableJumpHeight": false,
//             "platformerFriction": 0.8,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 350,
//             "w": 550,
//             "h": 150,
//             "type": "timetrap",
//             "time": 0,
//             "maxTime": 1,
//             "cdmult": 3,
//             "trapType": "death",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 450,
//             "w": 100,
//             "h": 50,
//             "type": "grav",
//             "force": 2000,
//             "dir": {
//                 "x": 2000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 3675,
//             "y": 450,
//             "w": 25,
//             "h": 50,
//             "type": "tp",
//             "tpx": 3975,
//             "tpy": 975,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 350,
//             "w": 100,
//             "h": 100,
//             "type": "grav",
//             "force": 2000,
//             "dir": {
//                 "x": 0,
//                 "y": 2000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 4150,
//             "y": 0,
//             "w": 200,
//             "h": 400,
//             "type": "grav",
//             "force": 4500,
//             "dir": {
//                 "x": 0,
//                 "y": 4500
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 3950,
//             "y": 0,
//             "w": 400,
//             "h": 200,
//             "type": "grav",
//             "force": 4500,
//             "dir": {
//                 "x": 4500,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 4150,
//             "y": 200,
//             "w": 200,
//             "h": 200,
//             "type": "grav",
//             "force": 4500,
//             "dir": {
//                 "x": -4500,
//                 "y": 0
//             },
//             "direction": "left",
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 350,
//             "w": 450,
//             "h": 50,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": -3000,
//                 "y": 0
//             },
//             "direction": "left",
//             "inView": false
//         },
//         {
//             "x": 3675,
//             "y": 425,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         3675,
//                         500
//                     ],
//                     [
//                         3675,
//                         550
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         3675,
//                         350
//                     ],
//                     [
//                         3675,
//                         300
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 300,
//             "h": 300,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 5600,
//             "y": 0,
//             "w": 50,
//             "h": 350,
//             "type": "tp",
//             "tpx": 6175,
//             "tpy": 175,
//             "bgColor": "#4a1698",
//             "tileColor": "#6b53ac",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5650,
//                     650
//                 ],
//                 [
//                     5700,
//                     725
//                 ],
//                 [
//                     5650,
//                     800
//                 ],
//                 [
//                     5600,
//                     775
//                 ],
//                 [
//                     5600,
//                     675
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5600,
//                 "right": 5700,
//                 "top": 650,
//                 "bottom": 800
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 400,
//             "w": 650,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 3625,
//                 "y": 25
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "color",
//             "bgColor": "#001224",
//             "tileColor": "#0a4075",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 5,
//             "inView": false
//         },
//         {
//             "x": 4150,
//             "y": 200,
//             "radius": 275,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         4150,
//                         0
//                     ],
//                     [
//                         4150,
//                         -75
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         4150,
//                         400
//                     ],
//                     [
//                         4150,
//                         475
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 200,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1925,
//             "y": 0,
//             "w": 375,
//             "h": 100,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 1901.3333333319945,
//             "y": 3.6576117734697134e-14,
//             "w": 150,
//             "h": 100,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     1900,
//                     0
//                 ],
//                 [
//                     2200,
//                     0
//                 ]
//             ],
//             "speed": 160,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 2200,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 1900,
//                 "y": 0
//             },
//             "xv": -160,
//             "yv": 1.9594348786357652e-14,
//             "inView": false
//         },
//         {
//             "x": 2198.6666666680053,
//             "y": 0,
//             "w": 150,
//             "h": 100,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     1900,
//                     0
//                 ],
//                 [
//                     2200,
//                     0
//                 ]
//             ],
//             "speed": 160,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 1900,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 2200,
//                 "y": 0
//             },
//             "xv": 160,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 600,
//             "w": 600,
//             "h": 400,
//             "type": "platformer",
//             "force": 2600,
//             "dir": {
//                 "x": 0,
//                 "y": 2600
//             },
//             "direction": "down",
//             "jumpHeight": -200,
//             "maxForce": 1000,
//             "variableJumpHeight": false,
//             "platformerFriction": 0.8,
//             "inView": false
//         },
//         {
//             "x": 1900,
//             "y": -25,
//             "w": 425,
//             "h": 250,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 2198.6666666680053,
//             "y": 0,
//             "w": 150,
//             "h": 100,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     1900,
//                     0
//                 ],
//                 [
//                     2200,
//                     0
//                 ]
//             ],
//             "speed": 160,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 1900,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 2200,
//                 "y": 0
//             },
//             "xv": 160,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 1901.3333333319945,
//             "y": 3.6576117734697134e-14,
//             "w": 150,
//             "h": 100,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     1900,
//                     0
//                 ],
//                 [
//                     2200,
//                     0
//                 ]
//             ],
//             "speed": 160,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 2200,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 1900,
//                 "y": 0
//             },
//             "xv": -160,
//             "yv": 1.9594348786357652e-14,
//             "inView": false
//         },
//         {
//             "x": 1650,
//             "y": 300,
//             "w": 100,
//             "h": 650,
//             "type": "raxis",
//             "rx": false,
//             "ry": true,
//             "inView": false
//         },
//         {
//             "x": 1650,
//             "y": 250,
//             "w": 100,
//             "h": 700,
//             "type": "grav",
//             "force": 2500,
//             "dir": {
//                 "x": 0,
//                 "y": 2500
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 225,
//             "w": 550,
//             "h": 575,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "speed",
//             "speedInc": 0.65,
//             "inView": false
//         },
//         {
//             "x": 325,
//             "y": 575,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.780235837034216,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         299.0110386477801,
//                         697.2684500917258
//                     ],
//                     [
//                         288.6154541068922,
//                         746.175830128416
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         200,
//                         575
//                     ],
//                     [
//                         150,
//                         575
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 1800,
//             "y": 800,
//             "w": 125,
//             "h": 50,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 1925,
//             "y": 800,
//             "w": 25,
//             "h": 25,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 1050,
//             "y": 600,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1050,
//             "y": 750,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1350,
//             "y": 150,
//             "w": 50,
//             "h": 200,
//             "type": "grav",
//             "force": 500,
//             "dir": {
//                 "x": 0,
//                 "y": -500
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 200,
//             "y": 700,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 600,
//             "y": 0,
//             "w": 300,
//             "h": 150,
//             "type": "grav",
//             "force": 1700,
//             "dir": {
//                 "x": 1700,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": true
//         },
//         {
//             "points": [
//                 [
//                     2275,
//                     400
//                 ],
//                 [
//                     2300,
//                     450
//                 ],
//                 [
//                     2250,
//                     450
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 2250,
//                 "right": 2300,
//                 "top": 400,
//                 "bottom": 450
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 450,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 1325,
//             "y": 550,
//             "w": 100,
//             "h": 50,
//             "type": "grav",
//             "force": 4000,
//             "dir": {
//                 "x": 0,
//                 "y": -4000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 1050,
//             "y": 900,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 550,
//             "w": 100,
//             "h": 50,
//             "type": "grav",
//             "force": 4000,
//             "dir": {
//                 "x": 0,
//                 "y": 4000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 325,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -29439.666666679605,
//             "rotateSpeed": -110,
//             "pivotX": 1125,
//             "pivotY": 325,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 125,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 29439.666666679605,
//             "rotateSpeed": 110,
//             "pivotX": 1125,
//             "pivotY": 125,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 775,
//             "y": 175,
//             "radius": 300,
//             "type": "circle-hollow-slice",
//             "startAngle": -3.141592653589793,
//             "endAngle": -1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         600,
//                         174.99999999999997
//                     ],
//                     [
//                         475,
//                         174.99999999999997
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         775,
//                         0
//                     ],
//                     [
//                         775,
//                         -125
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 175,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 450,
//             "y": 450,
//             "radius": 150,
//             "type": "circle-hollow-slice",
//             "startAngle": -1.9198621771937625,
//             "endAngle": 1.0471975511965976,
//             "startPolygon": {
//                 "points": [
//                     [
//                         415.7979856674331,
//                         356.0307379214091
//                     ],
//                     [
//                         398.6969785011497,
//                         309.04610688211375
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         500,
//                         536.6025403784439
//                     ],
//                     [
//                         525,
//                         579.9038105676658
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 1375,
//             "y": 600,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1200,
//             "y": 775,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1375,
//             "y": 950,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 800,
//             "radius": 250,
//             "type": "circle-hollow-slice",
//             "startAngle": 5.585053606381854,
//             "endAngle": 4.4505895925855405,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1553.2088886237955,
//                         671.4424780626921
//                     ],
//                     [
//                         1591.5111107797445,
//                         639.3030975783652
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1348.2361909794959,
//                         606.8148347421863
//                     ],
//                     [
//                         1335.29523872437,
//                         558.5185434277329
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 200,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 775,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 550,
//             "radius": 100,
//             "type": "circle-hollow-slice",
//             "startAngle": -1.5707963267948966,
//             "endAngle": 0,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         500
//                     ],
//                     [
//                         1500,
//                         450
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1550,
//                         550
//                     ],
//                     [
//                         1600,
//                         550
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 50,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 500,
//             "y": 425,
//             "w": 50,
//             "h": 50,
//             "type": "door",
//             "id": 2,
//             "active": false,
//             "inView": true
//         },
//         {
//             "x": 2050,
//             "y": 975,
//             "radius": 200,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.3161255787892263,
//             "endAngle": -0.17453292519943295,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1902.2788370481687,
//                         948.9527733499605
//                     ],
//                     [
//                         1853.0384493975585,
//                         940.270364466614
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2197.721162951831,
//                         948.9527733499605
//                     ],
//                     [
//                         2246.9615506024415,
//                         940.270364466614
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 150,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2350,
//             "y": 0,
//             "w": 250,
//             "h": 700,
//             "type": "grav",
//             "force": 1500,
//             "dir": {
//                 "x": 0,
//                 "y": -1500
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 2360.4166666718165,
//             "y": 375,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     2350,
//                     375
//                 ],
//                 [
//                     2550,
//                     375
//                 ]
//             ],
//             "speed": 125,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 2550,
//                 "y": 375
//             },
//             "pointTo": {
//                 "x": 2350,
//                 "y": 375
//             },
//             "xv": -125,
//             "yv": 1.5308084989341916e-14,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 0,
//             "w": 100,
//             "h": 600,
//             "type": "grav",
//             "force": 5000,
//             "dir": {
//                 "x": 0,
//                 "y": -5000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 50,
//             "w": 50,
//             "h": 50,
//             "type": "cure",
//             "inView": false
//         },
//         {
//             "x": 3450,
//             "y": 50,
//             "w": 100,
//             "h": 950,
//             "type": "raxis",
//             "rx": false,
//             "ry": true,
//             "inView": false
//         },
//         {
//             "x": 2975,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 2675,
//             "tpy": 525,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 125,
//             "w": 50,
//             "h": 250,
//             "type": "rotate-lava",
//             "angle": -29349.666666679484,
//             "rotateSpeed": -110,
//             "pivotX": 3025,
//             "pivotY": 125,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 900,
//             "y": 0,
//             "w": 100,
//             "h": 100,
//             "type": "zone",
//             "value": 2,
//             "inView": false
//         },
//         {
//             "x": 600,
//             "y": 150,
//             "w": 300,
//             "h": 850,
//             "type": "grav",
//             "force": 1700,
//             "dir": {
//                 "x": 0,
//                 "y": -1700
//             },
//             "direction": "up",
//             "inView": true
//         },
//         {
//             "x": 350,
//             "y": 300,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 450,
//             "y": 0,
//             "w": 100,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 50,
//             "y": 150,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 25,
//             "tpy": 525,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": true
//         },
//         {
//             "x": 50,
//             "y": 150,
//             "w": 50,
//             "h": 300,
//             "type": "size",
//             "size": 12,
//             "inView": true
//         },
//         {
//             "x": 50,
//             "y": 450,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 575,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 0.17453292519943295,
//             "endAngle": 1.361356816555577,
//             "startPolygon": {
//                 "points": [
//                     [
//                         448.100969126526,
//                         596.7060222083663
//                     ],
//                     [
//                         497.3413567771364,
//                         605.3884310917128
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         350.9889613522199,
//                         697.2684500917258
//                     ],
//                     [
//                         361.3845458931079,
//                         746.175830128416
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 550,
//             "y": 0,
//             "w": 50,
//             "h": 550,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 575,
//             "w": 50,
//             "h": 225,
//             "type": "rotate-lava",
//             "angle": 25455.5,
//             "rotateSpeed": 90,
//             "pivotX": 325,
//             "pivotY": 575,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 115.2443057161611,
//             "unSim": 0,
//             "inView": true
//         },
//         {
//             "x": 100,
//             "y": 350,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": true
//         },
//         {
//             "x": 5600,
//             "y": 50,
//             "w": 250,
//             "h": 950,
//             "type": "raxis",
//             "rx": false,
//             "ry": true,
//             "inView": false
//         },
//         {
//             "x": 50,
//             "y": 200,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": true
//         },
//         {
//             "x": 100,
//             "y": 100,
//             "w": 100,
//             "h": 300,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 0,
//             "y": 150,
//             "w": 50,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 0,
//             "y": 750,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 100,
//             "y": 500,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 25,
//             "tpy": 900,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": true
//         },
//         {
//             "x": 150,
//             "y": 500,
//             "w": 50,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 200,
//             "y": 750,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 50,
//             "y": 200,
//             "w": 50,
//             "h": 250,
//             "type": "grav",
//             "force": 1000,
//             "dir": {
//                 "x": 0,
//                 "y": -1000
//             },
//             "direction": "up",
//             "inView": true
//         },
//         {
//             "x": 250,
//             "y": 500,
//             "w": 150,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 500,
//             "y": 600,
//             "w": 100,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 900,
//             "y": 0,
//             "w": 100,
//             "h": 100,
//             "spawn": {
//                 "x": 950,
//                 "y": 50
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     600,
//                     550
//                 ],
//                 [
//                     750,
//                     675
//                 ],
//                 [
//                     600,
//                     800
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 600,
//                 "right": 750,
//                 "top": 550,
//                 "bottom": 800
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     900,
//                     375
//                 ],
//                 [
//                     900,
//                     625
//                 ],
//                 [
//                     750,
//                     500
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 750,
//                 "right": 900,
//                 "top": 375,
//                 "bottom": 625
//             },
//             "renderType": "poly",
//             "inView": true
//         },
//         {
//             "x": 817.5,
//             "y": 150,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     600,
//                     150
//                 ],
//                 [
//                     850,
//                     150
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 600,
//                 "y": 150
//             },
//             "pointTo": {
//                 "x": 850,
//                 "y": 150
//             },
//             "xv": 150,
//             "yv": 0,
//             "inView": true
//         },
//         {
//             "points": [
//                 [
//                     600,
//                     200
//                 ],
//                 [
//                     750,
//                     325
//                 ],
//                 [
//                     600,
//                     450
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 600,
//                 "right": 750,
//                 "top": 200,
//                 "bottom": 450
//             },
//             "renderType": "poly",
//             "inView": true
//         },
//         {
//             "x": 100,
//             "y": 900,
//             "radius": 150,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         100,
//                         1000
//                     ],
//                     [
//                         100.00000000000001,
//                         1050
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         99.99999999999999,
//                         800
//                     ],
//                     [
//                         99.99999999999997,
//                         750
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 800,
//             "y": 900,
//             "radius": 150,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         900,
//                         900
//                     ],
//                     [
//                         950,
//                         900
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         800,
//                         1000
//                     ],
//                     [
//                         800,
//                         1050
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     750,
//                     775
//                 ],
//                 [
//                     825,
//                     850
//                 ],
//                 [
//                     750,
//                     925
//                 ],
//                 [
//                     675,
//                     850
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 675,
//                 "right": 825,
//                 "top": 775,
//                 "bottom": 925
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 632.5,
//             "y": 150,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     600,
//                     150
//                 ],
//                 [
//                     850,
//                     150
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 850,
//                 "y": 150
//             },
//             "pointTo": {
//                 "x": 600,
//                 "y": 150
//             },
//             "xv": -150,
//             "yv": 1.8369701987210297e-14,
//             "inView": true
//         },
//         {
//             "x": 75,
//             "y": 25,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 175,
//             "y": 75,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 150,
//             "y": 75,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 50,
//             "y": -25,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 875,
//             "y": 0,
//             "w": 25,
//             "h": 100,
//             "type": "color",
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "inView": false
//         },
//         {
//             "x": 900,
//             "y": 100,
//             "w": 100,
//             "h": 900,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 450,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1150,
//             "y": 550,
//             "w": 50,
//             "h": 450,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 400,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 7,
//             "currentCoins": 7,
//             "inView": false
//         },
//         {
//             "x": 1350,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 1675,
//             "tpy": 25,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 800,
//             "y": 0,
//             "w": 100,
//             "h": 100,
//             "type": "zone",
//             "value": 1,
//             "inView": true
//         },
//         {
//             "x": 1450,
//             "y": 400,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 8,
//             "currentCoins": 8,
//             "inView": false
//         },
//         {
//             "x": 75,
//             "y": 675,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1350,
//             "y": 100,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1650,
//             "y": 950,
//             "w": 100,
//             "h": 50,
//             "type": "tp",
//             "tpx": 1825,
//             "tpy": 975,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 950,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 3,
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 950,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 1825,
//                 "y": 975
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 950,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 975,
//             "radius": 200,
//             "type": "circle-hollow-slice",
//             "startAngle": 420.0120300511652,
//             "endAngle": 422.1064251535545,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2135.8576632339673,
//                         852.0021883771802
//                     ],
//                     [
//                         2164.4768843119564,
//                         811.0029178362403
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2113.5903978588026,
//                         1110.8538232813462
//                     ],
//                     [
//                         2134.78719714507,
//                         1156.1384310417948
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 150,
//             "toRotate": true,
//             "rotateSpeed": 1.4835298641951802,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 900,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 800,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 975,
//             "w": 300,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 11464.416666663868,
//             "rotateSpeed": 42.5,
//             "pivotX": 2050,
//             "pivotY": 975,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 152.0690632574555,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1900,
//             "y": 1000,
//             "w": 300,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 975,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2000,
//             "y": 975,
//             "w": 100,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": 700,
//             "w": 50,
//             "h": 300,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 2150,
//             "y": 700,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2625,
//             "y": 50,
//             "w": 25,
//             "h": 675,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 4,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "color",
//             "bgColor": "#003367",
//             "tileColor": "#00468c",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 2675,
//                 "y": 25
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 2250,
//             "y": 700,
//             "w": 400,
//             "h": 50,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": 0,
//             "w": 50,
//             "h": 400,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": 250,
//             "w": 50,
//             "h": 400,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 125,
//             "w": 228,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 29439.666666679605,
//             "rotateSpeed": 110,
//             "pivotX": 2800,
//             "pivotY": 125,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 116.70903992407786,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 325,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -29439.666666679605,
//             "rotateSpeed": -110,
//             "pivotX": 2800,
//             "pivotY": 325,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 325,
//             "w": 245,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 29439.666666679605,
//             "rotateSpeed": 110,
//             "pivotX": 3025,
//             "pivotY": 325,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 125.02499750049988,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1000,
//             "y": 550,
//             "w": 50,
//             "h": 475,
//             "type": "roundedcorners",
//             "circles": [
//                 {
//                     "x": 1010,
//                     "y": 560,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1040,
//                     "y": 560,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1010,
//                     "y": 1015,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1040,
//                     "y": 1015,
//                     "radius": 10
//                 }
//             ],
//             "rects": [
//                 {
//                     "x": 1010,
//                     "y": 550,
//                     "w": 30,
//                     "h": 475
//                 },
//                 {
//                     "x": 1000,
//                     "y": 560,
//                     "w": 50,
//                     "h": 455
//                 }
//             ],
//             "roundRadius": 10,
//             "inView": false
//         },
//         {
//             "x": 1100,
//             "y": 600,
//             "w": 50,
//             "h": 475,
//             "type": "roundedcorners",
//             "circles": [
//                 {
//                     "x": 1110,
//                     "y": 610,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1140,
//                     "y": 610,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1110,
//                     "y": 1065,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1140,
//                     "y": 1065,
//                     "radius": 10
//                 }
//             ],
//             "rects": [
//                 {
//                     "x": 1110,
//                     "y": 600,
//                     "w": 30,
//                     "h": 475
//                 },
//                 {
//                     "x": 1100,
//                     "y": 610,
//                     "w": 50,
//                     "h": 455
//                 }
//             ],
//             "roundRadius": 10,
//             "inView": false
//         },
//         {
//             "x": 975,
//             "y": 550,
//             "w": 50,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "mark",
//             "time": 12.5,
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 125,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 50,
//             "w": 150,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 125,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2800,
//                         0
//                     ],
//                     [
//                         2800,
//                         -50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2800,
//                         250
//                     ],
//                     [
//                         2800,
//                         300
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 325,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 325,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2800,
//                         450
//                     ],
//                     [
//                         2800,
//                         500
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2800,
//                         200
//                     ],
//                     [
//                         2800,
//                         150
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 175,
//             "w": 25,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 325,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 325,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2900,
//                         325
//                     ],
//                     [
//                         2850,
//                         325
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         3025,
//                         200
//                     ],
//                     [
//                         3025,
//                         150
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2825,
//             "y": 325,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2950,
//                         325
//                     ],
//                     [
//                         3000,
//                         325
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2825,
//                         450
//                     ],
//                     [
//                         2825,
//                         500
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2800,
//             "y": 450,
//             "w": 25,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2825,
//             "y": 325,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 125,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3025,
//             "y": 125,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         3025,
//                         0
//                     ],
//                     [
//                         3025,
//                         -50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         3025,
//                         250
//                     ],
//                     [
//                         3025,
//                         300
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 400,
//             "w": 50,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 450,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": -25,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 50,
//             "w": 25,
//             "h": 450,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2825,
//             "y": 450,
//             "w": 175,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2925,
//             "y": 400,
//             "w": 75,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 125,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3100,
//             "y": 250,
//             "w": 100,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 500,
//             "w": 600,
//             "h": 50,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 0,
//             "w": 50,
//             "h": 550,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 2975,
//             "y": 275,
//             "w": 175,
//             "h": 175,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2950,
//             "y": 450,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 300,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 450,
//             "w": 600,
//             "h": 50,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 0,
//             "w": 50,
//             "h": 550,
//             "type": "size",
//             "size": 10,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 500,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 450,
//             "w": 650,
//             "h": 100,
//             "type": "grav",
//             "force": 5000,
//             "dir": {
//                 "x": 5000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 3250,
//             "y": 0,
//             "w": 50,
//             "h": 600,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3075,
//             "y": 375,
//             "radius": 225,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         3250,
//                         375
//                     ],
//                     [
//                         3300,
//                         375
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         3075,
//                         550
//                     ],
//                     [
//                         3075,
//                         600
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 175,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 550,
//             "w": 650,
//             "h": 50,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 500,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 500,
//             "w": 100,
//             "h": 100,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 3075,
//             "y": 375,
//             "radius": 125,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2650,
//             "y": 450,
//             "w": 425,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 0,
//             "w": 50,
//             "h": 375,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 2675,
//             "tpy": 975,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 3250,
//             "y": 0,
//             "w": 50,
//             "h": 1000,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 75,
//             "y": 675,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         150,
//                         675
//                     ],
//                     [
//                         200,
//                         675
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         0,
//                         675
//                     ],
//                     [
//                         -50,
//                         675
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1150,
//             "y": 575,
//             "w": 100,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1175,
//             "y": 950,
//             "w": 75,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 950,
//             "w": 75,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1200,
//             "y": 550,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 725,
//             "w": 75,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 1000,
//             "w": 150,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1417.5,
//             "y": 300,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     1350,
//                     300
//                 ],
//                 [
//                     1550,
//                     300
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 1350,
//                 "y": 300
//             },
//             "pointTo": {
//                 "x": 1550,
//                 "y": 300
//             },
//             "xv": 150,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 332.5,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     1450,
//                     400
//                 ],
//                 [
//                     1450,
//                     0
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 1450,
//                 "y": 400
//             },
//             "pointTo": {
//                 "x": 1450,
//                 "y": 0
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": -150,
//             "inView": false
//         },
//         {
//             "x": 1482.5,
//             "y": 100,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     1350,
//                     100
//                 ],
//                 [
//                     1550,
//                     100
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 1550,
//                 "y": 100
//             },
//             "pointTo": {
//                 "x": 1350,
//                 "y": 100
//             },
//             "xv": -150,
//             "yv": 1.8369701987210297e-14,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 50,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 50,
//             "w": 100,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1525,
//             "y": 100,
//             "w": 25,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 100,
//             "w": 25,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 375,
//             "w": 50,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 350,
//             "radius": 141,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1600,
//                         350
//                     ],
//                     [
//                         1641,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         450
//                     ],
//                     [
//                         1500,
//                         491
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 100,
//             "radius": 135,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 0,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         0
//                     ],
//                     [
//                         1500,
//                         -35
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1600,
//                         100
//                     ],
//                     [
//                         1635,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 100,
//             "radius": 50,
//             "type": "circle-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1450,
//                         100
//                     ],
//                     [
//                         1400,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1450,
//                         100
//                     ],
//                     [
//                         1450,
//                         50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 100,
//             "radius": 50,
//             "type": "circle-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 0,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         100
//                     ],
//                     [
//                         1500,
//                         50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         100
//                     ],
//                     [
//                         1550,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1425,
//             "y": 75,
//             "w": 100,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 50,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 350,
//             "radius": 50,
//             "type": "circle-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         350
//                     ],
//                     [
//                         1550,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1500,
//                         350
//                     ],
//                     [
//                         1500,
//                         400
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 350,
//             "radius": 50,
//             "type": "circle-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1450,
//                         350
//                     ],
//                     [
//                         1450,
//                         400
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1450,
//                         350
//                     ],
//                     [
//                         1400,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1425,
//             "y": 350,
//             "w": 100,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1450,
//             "y": 350,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 150,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1500,
//             "y": 150,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1425,
//             "y": 100,
//             "w": 100,
//             "h": 250,
//             "type": "trans",
//             "collide": true,
//             "opaq": 0.8,
//             "inView": false
//         },
//         {
//             "x": 500,
//             "y": 550,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 500,
//             "y": 600,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 450,
//             "y": 650,
//             "w": 50,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 475,
//             "y": 625,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     530,
//                     515
//                 ],
//                 [
//                     540,
//                     610
//                 ],
//                 [
//                     460,
//                     570
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 460,
//                 "right": 540,
//                 "top": 515,
//                 "bottom": 610
//             },
//             "renderType": "poly",
//             "inView": true
//         },
//         {
//             "x": 50,
//             "y": 475,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 1775,
//             "y": 100,
//             "radius": 150,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1775,
//                         0
//                     ],
//                     [
//                         1775,
//                         -50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1775,
//                         200
//                     ],
//                     [
//                         1775,
//                         250
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 450,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 975,
//             "y": 450,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 975,
//             "y": 475,
//             "w": 75,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1150,
//             "y": 600,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 50,
//             "w": 25,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 250,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1650,
//             "y": -50,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 0,
//             "w": 50,
//             "h": 300,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1600,
//             "y": 50,
//             "w": 50,
//             "h": 1000,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1600,
//             "y": -25,
//             "w": 50,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1575,
//             "y": -25,
//             "w": 25,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 250,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 0.6981317007977318,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1612.5,
//                         250
//                     ],
//                     [
//                         1675,
//                         250
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1597.8777776949362,
//                         290.1742256054087
//                     ],
//                     [
//                         1645.7555553898724,
//                         330.3484512108174
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 62.5,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 350,
//             "radius": 150,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 3.490658503988659,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1650,
//                         350
//                     ],
//                     [
//                         1625,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1657.5384224017614,
//                         307.2474820842914
//                     ],
//                     [
//                         1634.0461068821137,
//                         298.6969785011497
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     375
//                 ],
//                 [
//                     1700,
//                     400
//                 ],
//                 [
//                     1650,
//                     425
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1700,
//                 "top": 375,
//                 "bottom": 425
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1750,
//                     600
//                 ],
//                 [
//                     1750,
//                     650
//                 ],
//                 [
//                     1700,
//                     625
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1700,
//                 "right": 1750,
//                 "top": 600,
//                 "bottom": 650
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     825
//                 ],
//                 [
//                     1700,
//                     850
//                 ],
//                 [
//                     1650,
//                     875
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1700,
//                 "top": 825,
//                 "bottom": 875
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     425
//                 ],
//                 [
//                     1700,
//                     450
//                 ],
//                 [
//                     1650,
//                     475
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1700,
//                 "top": 425,
//                 "bottom": 475
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1750,
//                     650
//                 ],
//                 [
//                     1750,
//                     700
//                 ],
//                 [
//                     1700,
//                     675
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1700,
//                 "right": 1750,
//                 "top": 650,
//                 "bottom": 700
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     875
//                 ],
//                 [
//                     1700,
//                     900
//                 ],
//                 [
//                     1650,
//                     925
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1700,
//                 "top": 875,
//                 "bottom": 925
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     400
//                 ],
//                 [
//                     1675,
//                     425
//                 ],
//                 [
//                     1650,
//                     450
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1675,
//                 "top": 400,
//                 "bottom": 450
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1750,
//                     625
//                 ],
//                 [
//                     1750,
//                     675
//                 ],
//                 [
//                     1725,
//                     650
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1725,
//                 "right": 1750,
//                 "top": 625,
//                 "bottom": 675
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1650,
//                     850
//                 ],
//                 [
//                     1675,
//                     875
//                 ],
//                 [
//                     1650,
//                     900
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1650,
//                 "right": 1675,
//                 "top": 850,
//                 "bottom": 900
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2125,
//             "y": 800,
//             "w": 100,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2175,
//             "y": 800,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": 650,
//             "w": 250,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2325,
//             "y": 804.5833333320459,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     2325,
//                     750
//                 ],
//                 [
//                     2325,
//                     950
//                 ]
//             ],
//             "speed": 175,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 2325,
//                 "y": 950
//             },
//             "pointTo": {
//                 "x": 2325,
//                 "y": 750
//             },
//             "xv": 1.0715659492539341e-14,
//             "yv": -175,
//             "inView": false
//         },
//         {
//             "x": 2475,
//             "y": 895.4166666679541,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     2475,
//                     750
//                 ],
//                 [
//                     2475,
//                     950
//                 ]
//             ],
//             "speed": 175,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 2475,
//                 "y": 750
//             },
//             "pointTo": {
//                 "x": 2475,
//                 "y": 950
//             },
//             "xv": 1.0715659492539341e-14,
//             "yv": 175,
//             "inView": false
//         },
//         {
//             "x": 2468.125,
//             "y": 850,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     2550,
//                     850
//                 ],
//                 [
//                     2250,
//                     850
//                 ]
//             ],
//             "speed": 262.5,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 2250,
//                 "y": 850
//             },
//             "pointTo": {
//                 "x": 2550,
//                 "y": 850
//             },
//             "xv": 262.5,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 900,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2375,
//             "y": 900,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2375,
//             "y": 800,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 800,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2225,
//             "y": 800,
//             "w": 325,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2250,
//             "y": 800,
//             "w": 25,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2250,
//             "y": 925,
//             "w": 300,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 825,
//             "w": 250,
//             "h": 100,
//             "type": "trans",
//             "collide": true,
//             "opaq": 0.5,
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 975,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 1025,
//             "w": 900,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1850,
//             "y": 700,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 275,
//             "w": 50,
//             "h": 725,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2525,
//             "y": 800,
//             "w": 25,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2025,
//                     500
//                 ],
//                 [
//                     2125,
//                     500
//                 ],
//                 [
//                     2075,
//                     575
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 2025,
//                 "right": 2125,
//                 "top": 500,
//                 "bottom": 575
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2100,
//                     275
//                 ],
//                 [
//                     2100,
//                     425
//                 ],
//                 [
//                     2000,
//                     350
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 2000,
//                 "right": 2100,
//                 "top": 275,
//                 "bottom": 425
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2100,
//             "y": 350,
//             "r": 75,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 75,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2000,
//                     225
//                 ],
//                 [
//                     2000,
//                     275
//                 ],
//                 [
//                     1950,
//                     250
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1950,
//                 "right": 2000,
//                 "top": 225,
//                 "bottom": 275
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1975,
//                     250
//                 ],
//                 [
//                     2025,
//                     250
//                 ],
//                 [
//                     2000,
//                     300
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1975,
//                 "right": 2025,
//                 "top": 250,
//                 "bottom": 300
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2000,
//             "y": 250,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1875,
//                     175
//                 ],
//                 [
//                     1950,
//                     225
//                 ],
//                 [
//                     1875,
//                     275
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1875,
//                 "right": 1950,
//                 "top": 175,
//                 "bottom": 275
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": 225,
//             "r": 50,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 50,
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 400,
//             "radius": 300,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.1887902047863905,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1800,
//                         400.00000000000006
//                     ],
//                     [
//                         1750,
//                         400.00000000000006
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1925,
//                         183.49364905389038
//                     ],
//                     [
//                         1899.9999999999998,
//                         140.19237886466846
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 250,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": 150,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1900,
//             "y": -25,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": -75,
//             "w": 50,
//             "h": 175,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 150,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 200,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2025,
//             "y": 100,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1925,
//             "y": -150,
//             "w": 425,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": -50,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": 0,
//             "w": 50,
//             "h": 175,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": -50,
//             "w": 475,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": -25,
//             "w": 50,
//             "h": 175,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2075,
//                     -25
//                 ],
//                 [
//                     2175,
//                     -25
//                 ],
//                 [
//                     2125,
//                     50
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2075,
//                 "right": 2175,
//                 "top": -25,
//                 "bottom": 50
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2050,
//                     50
//                 ],
//                 [
//                     2100,
//                     125
//                 ],
//                 [
//                     2000,
//                     125
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2000,
//                 "right": 2100,
//                 "top": 50,
//                 "bottom": 125
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2225,
//                     -25
//                 ],
//                 [
//                     2325,
//                     0
//                 ],
//                 [
//                     2325,
//                     125
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2225,
//                 "right": 2325,
//                 "top": -25,
//                 "bottom": 125
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2200,
//                     50
//                 ],
//                 [
//                     2250,
//                     125
//                 ],
//                 [
//                     2150,
//                     125
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2150,
//                 "right": 2250,
//                 "top": 50,
//                 "bottom": 125
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1925,
//                     -15
//                 ],
//                 [
//                     2020,
//                     -15
//                 ],
//                 [
//                     1910,
//                     160
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 1910,
//                 "right": 2020,
//                 "top": -15,
//                 "bottom": 160
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2000,
//             "y": 125,
//             "w": 250,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1900,
//             "y": 100,
//             "w": 50,
//             "h": 100,
//             "type": "roundedcorners",
//             "circles": [
//                 {
//                     "x": 1910,
//                     "y": 110,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1940,
//                     "y": 110,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1910,
//                     "y": 190,
//                     "radius": 10
//                 },
//                 {
//                     "x": 1940,
//                     "y": 190,
//                     "radius": 10
//                 }
//             ],
//             "rects": [
//                 {
//                     "x": 1910,
//                     "y": 100,
//                     "w": 30,
//                     "h": 100
//                 },
//                 {
//                     "x": 1900,
//                     "y": 110,
//                     "w": 50,
//                     "h": 80
//                 }
//             ],
//             "roundRadius": 10,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 100,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2025,
//             "y": 100,
//             "w": 225,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2250,
//             "y": 100,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 2475,
//             "tpy": 675,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 2300,
//             "y": 0,
//             "w": 53,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2125,
//             "y": 650,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 625,
//             "w": 125,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2250,
//             "y": 575,
//             "w": 75,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": 550,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": 50,
//             "w": 50,
//             "h": 650,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": -25,
//             "w": 50,
//             "h": 125,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2539.5833333281835,
//             "y": 50,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     2350,
//                     50
//                 ],
//                 [
//                     2550,
//                     50
//                 ]
//             ],
//             "speed": 125,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 2350,
//                 "y": 50
//             },
//             "pointTo": {
//                 "x": 2550,
//                 "y": 50
//             },
//             "xv": 125,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2350,
//                     400
//                 ],
//                 [
//                     2550,
//                     525
//                 ],
//                 [
//                     2350,
//                     650
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2350,
//                 "right": 2550,
//                 "top": 400,
//                 "bottom": 650
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2600,
//                     150
//                 ],
//                 [
//                     2600,
//                     400
//                 ],
//                 [
//                     2400,
//                     275
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2400,
//                 "right": 2600,
//                 "top": 150,
//                 "bottom": 400
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2575,
//             "y": 175,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2325,
//             "y": 425,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2350,
//             "y": 425,
//             "w": 50,
//             "h": 200,
//             "type": "trans",
//             "collide": true,
//             "opaq": 0.5,
//             "inView": false
//         },
//         {
//             "x": 2550,
//             "y": 175,
//             "w": 50,
//             "h": 200,
//             "type": "trans",
//             "collide": true,
//             "opaq": 0.5,
//             "inView": false
//         },
//         {
//             "x": 2150,
//             "y": 750,
//             "w": 75,
//             "h": 25,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 850,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1925,
//                     600
//                 ],
//                 [
//                     1975,
//                     600
//                 ],
//                 [
//                     1950,
//                     650
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1925,
//                 "right": 1975,
//                 "top": 600,
//                 "bottom": 650
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 400,
//             "radius": 300,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.1887902047863905,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1800,
//                         400.00000000000006
//                     ],
//                     [
//                         1750,
//                         400.00000000000006
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1925,
//                         183.49364905389038
//                     ],
//                     [
//                         1899.9999999999998,
//                         140.19237886466846
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 250,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2050,
//             "y": 400,
//             "radius": 300,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 2.234021442552742,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2050,
//                         150
//                     ],
//                     [
//                         2050,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1896.0846311685855,
//                         597.0026884016805
//                     ],
//                     [
//                         1865.3015574023025,
//                         636.4032260820165
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 250,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2075,
//                     425
//                 ],
//                 [
//                     2125,
//                     500
//                 ],
//                 [
//                     2025,
//                     500
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 2025,
//                 "right": 2125,
//                 "top": 425,
//                 "bottom": 500
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2075,
//             "y": 500,
//             "r": 50,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 50,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1950,
//                     575
//                 ],
//                 [
//                     1950,
//                     625
//                 ],
//                 [
//                     1900,
//                     600
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1900,
//                 "right": 1950,
//                 "top": 575,
//                 "bottom": 625
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 1950,
//             "y": 600,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 1850,
//             "y": 350,
//             "w": 50,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2925,
//             "y": 50,
//             "w": 100,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2925,
//             "y": 0,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3450,
//             "y": 0,
//             "w": 100,
//             "h": 1000,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": -3000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": -75,
//             "y": 100,
//             "w": 100,
//             "h": 400,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "points": [
//                 [
//                     3500,
//                     650
//                 ],
//                 [
//                     3425,
//                     775
//                 ],
//                 [
//                     3425,
//                     675
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3425,
//                 "right": 3500,
//                 "top": 650,
//                 "bottom": 775
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3425,
//                     650
//                 ],
//                 [
//                     3500,
//                     700
//                 ],
//                 [
//                     3425,
//                     725
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3425,
//                 "right": 3500,
//                 "top": 650,
//                 "bottom": 725
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3500,
//                     400
//                 ],
//                 [
//                     3575,
//                     425
//                 ],
//                 [
//                     3575,
//                     525
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3500,
//                 "right": 3575,
//                 "top": 400,
//                 "bottom": 525
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3575,
//                     400
//                 ],
//                 [
//                     3575,
//                     475
//                 ],
//                 [
//                     3500,
//                     450
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3500,
//                 "right": 3575,
//                 "top": 400,
//                 "bottom": 475
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 3550,
//             "y": 0,
//             "w": 50,
//             "h": 1000,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3500,
//                     150
//                 ],
//                 [
//                     3425,
//                     275
//                 ],
//                 [
//                     3425,
//                     175
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3425,
//                 "right": 3500,
//                 "top": 150,
//                 "bottom": 275
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3425,
//                     150
//                 ],
//                 [
//                     3500,
//                     200
//                 ],
//                 [
//                     3425,
//                     225
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 3425,
//                 "right": 3500,
//                 "top": 150,
//                 "bottom": 225
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 3400,
//             "y": 0,
//             "w": 50,
//             "h": 899,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3450,
//             "y": 0,
//             "w": 100,
//             "h": 50,
//             "type": "tp",
//             "tpx": 3625,
//             "tpy": 25,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 3325,
//             "y": 25,
//             "w": 0,
//             "h": 0,
//             "type": "invpu",
//             "amount": 0,
//             "maxAmount": 0,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 600,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 3350,
//             "tpy": 25,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": 1000,
//             "w": 700,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 150,
//             "y": 575,
//             "w": 51,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 200,
//             "y": 450,
//             "w": 50,
//             "h": 50,
//             "type": "door",
//             "id": 2,
//             "active": true,
//             "inView": true
//         },
//         {
//             "x": 150,
//             "y": 400,
//             "w": 50,
//             "h": 50,
//             "type": "door",
//             "id": 2,
//             "active": true,
//             "inView": true
//         },
//         {
//             "x": 1475,
//             "y": 575,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1575,
//             "y": 660,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1425,
//             "y": 550,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 500,
//             "w": 75,
//             "h": 125,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1575,
//             "y": 600,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1300,
//                     575
//                 ],
//                 [
//                     1375,
//                     575
//                 ],
//                 [
//                     1375,
//                     600
//                 ],
//                 [
//                     1275,
//                     625
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 1275,
//                 "right": 1375,
//                 "top": 575,
//                 "bottom": 625
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 1325,
//             "y": 550,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1375,
//             "y": 550,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 4,
//             "currentCoins": 4,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 800,
//             "w": 400,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 20340.133333341357,
//             "rotateSpeed": 76,
//             "pivotX": 1400,
//             "pivotY": 800,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 201.55644370746373,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1400,
//             "y": 800,
//             "radius": 150,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 325,
//             "y": 125,
//             "w": 50,
//             "h": 225,
//             "type": "rotate-lava",
//             "angle": 25480.5,
//             "rotateSpeed": 90,
//             "pivotX": 325,
//             "pivotY": 125,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 115.2443057161611,
//             "unSim": 0,
//             "inView": true
//         },
//         {
//             "x": 450,
//             "y": 450,
//             "w": 50,
//             "h": 175,
//             "type": "rotate-lava",
//             "angle": 25400.5,
//             "rotateSpeed": 90,
//             "pivotX": 450,
//             "pivotY": 450,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 91.00137361600648,
//             "unSim": 0,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 325,
//             "w": 50,
//             "h": 225,
//             "type": "rotate-lava",
//             "angle": -25480.5,
//             "rotateSpeed": -90,
//             "pivotX": 325,
//             "pivotY": 325,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 115.2443057161611,
//             "unSim": 0,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 125,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 325,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 575,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 500,
//             "y": 595,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.3161255787892263,
//             "endAngle": 4.363323129985823,
//             "startPolygon": {
//                 "points": [
//                     [
//                         401.5192246987792,
//                         577.635182233307
//                     ],
//                     [
//                         327.6586432228636,
//                         564.6115689082872
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         465.79798566743307,
//                         501.0307379214092
//                     ],
//                     [
//                         440.14647491800787,
//                         430.5537913624661
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 250,
//             "y": 475,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 250,
//             "y": 450,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 450,
//             "y": 455,
//             "radius": 50,
//             "type": "circle-slice",
//             "startAngle": -3.141592653589793,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         450,
//                         455
//                     ],
//                     [
//                         400,
//                         455
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         450,
//                         455
//                     ],
//                     [
//                         450,
//                         505
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 0,
//             "y": 100,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 125,
//             "radius": 225,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         325,
//                         0
//                     ],
//                     [
//                         324.99999999999994,
//                         -100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         325,
//                         250
//                     ],
//                     [
//                         325,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 385,
//             "y": 362.5,
//             "w": 100,
//             "h": 25,
//             "type": "rotate-normal",
//             "angle": -28,
//             "rotateSpeed": 0,
//             "pivotX": 385,
//             "pivotY": 362.5,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 51.53882032022076,
//             "unSim": 0,
//             "inView": true
//         },
//         {
//             "x": 375,
//             "y": 300,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 400,
//             "y": 300,
//             "w": 75,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": true
//         },
//         {
//             "x": 325,
//             "y": 325,
//             "radius": 225,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         200,
//                         325
//                     ],
//                     [
//                         100,
//                         325
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         325,
//                         200
//                     ],
//                     [
//                         324.99999999999994,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": true
//         },
//         {
//             "x": 1125,
//             "y": 325,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1125,
//                         450
//                     ],
//                     [
//                         1125,
//                         500
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1000,
//                         325
//                     ],
//                     [
//                         950,
//                         325
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 950,
//             "y": 100,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 325,
//             "radius": 225,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1000,
//                         325
//                     ],
//                     [
//                         900,
//                         325
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1125,
//                         200
//                     ],
//                     [
//                         1125,
//                         100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 325,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 125,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 950,
//             "y": 100,
//             "w": 175,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 250,
//             "w": 225,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 125,
//             "radius": 225,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1125,
//                         0
//                     ],
//                     [
//                         1125,
//                         -100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1125,
//                         250
//                     ],
//                     [
//                         1125,
//                         350
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1075,
//             "y": 475,
//             "w": 50,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1125,
//             "y": 575,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": -3.141592653589793,
//             "endAngle": -1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1050,
//                         575
//                     ],
//                     [
//                         1000,
//                         575
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1125,
//                         500
//                     ],
//                     [
//                         1125,
//                         450
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1100,
//             "y": 450,
//             "w": 75,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1925,
//                     375
//                 ],
//                 [
//                     1950,
//                     425
//                 ],
//                 [
//                     1900,
//                     425
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1900,
//                 "right": 1950,
//                 "top": 375,
//                 "bottom": 425
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 1925,
//             "y": 425,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 2275,
//             "y": -75,
//             "w": 175,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2900,
//             "y": -25,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2800,
//                     500
//                 ],
//                 [
//                     2850,
//                     500
//                 ],
//                 [
//                     2825,
//                     525
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2800,
//                 "right": 2850,
//                 "top": 500,
//                 "bottom": 525
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3100,
//                     475
//                 ],
//                 [
//                     3100,
//                     500
//                 ],
//                 [
//                     3075,
//                     525
//                 ],
//                 [
//                     3050,
//                     500
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3050,
//                 "right": 3100,
//                 "top": 475,
//                 "bottom": 525
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2950,
//                     525
//                 ],
//                 [
//                     2975,
//                     550
//                 ],
//                 [
//                     2925,
//                     550
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 2925,
//                 "right": 2975,
//                 "top": 525,
//                 "bottom": 550
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3250,
//                     300
//                 ],
//                 [
//                     3250,
//                     350
//                 ],
//                 [
//                     3225,
//                     325
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3225,
//                 "right": 3250,
//                 "top": 300,
//                 "bottom": 350
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3200,
//                     175
//                 ],
//                 [
//                     3225,
//                     200
//                 ],
//                 [
//                     3200,
//                     225
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3200,
//                 "right": 3225,
//                 "top": 175,
//                 "bottom": 225
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3250,
//                     50
//                 ],
//                 [
//                     3250,
//                     100
//                 ],
//                 [
//                     3225,
//                     75
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3225,
//                 "right": 3250,
//                 "top": 50,
//                 "bottom": 100
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 3050,
//             "y": 800,
//             "radius": 250,
//             "type": "circle-hollow-slice",
//             "startAngle": 0,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         3250,
//                         800
//                     ],
//                     [
//                         3300,
//                         800
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         3050,
//                         1000
//                     ],
//                     [
//                         3050,
//                         1050
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 200,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 2850,
//             "y": 800,
//             "radius": 250,
//             "type": "circle-hollow-slice",
//             "startAngle": -3.141592653589793,
//             "endAngle": -1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         2650,
//                         800
//                     ],
//                     [
//                         2600,
//                         800
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         2850,
//                         600
//                     ],
//                     [
//                         2850,
//                         550
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 200,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 950,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2625,
//             "y": 575,
//             "w": 75,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3300,
//             "y": 50,
//             "w": 100,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 35,
//             "currentStrength": 35,
//             "time": 0,
//             "timer": 0,
//             "regenTime": 8,
//             "inView": false
//         },
//         {
//             "x": 350,
//             "y": 700,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 100,
//             "w": 185,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 24087,
//             "rotateSpeed": 90,
//             "pivotX": 1775,
//             "pivotY": 100,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 95.818839483684,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 100,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1625,
//             "y": 50,
//             "w": 150,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1775,
//             "y": 250,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 3.141592653589793,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1675,
//                         250
//                     ],
//                     [
//                         1600,
//                         250.00000000000003
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1775,
//                         150
//                     ],
//                     [
//                         1775,
//                         75
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 100,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1850,
//             "y": 800,
//             "radius": 100,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         1850,
//                         850
//                     ],
//                     [
//                         1850,
//                         900
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         1800,
//                         800
//                     ],
//                     [
//                         1750,
//                         800
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 50,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1875,
//             "y": 775,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 1850,
//             "y": 725,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 1900,
//             "y": 750,
//             "w": 25,
//             "h": 25,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 600,
//             "w": 25,
//             "h": 100,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 1825,
//             "y": 400,
//             "w": 25,
//             "h": 100,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 300,
//             "y": 700,
//             "w": 50,
//             "h": 50,
//             "type": "button",
//             "id": 2,
//             "active": true,
//             "inView": false
//         },
//         {
//             "x": 2750,
//             "y": 900,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2950,
//             "y": 800,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3100,
//             "y": 800,
//             "w": 100,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2700,
//             "y": 906.4666666656367,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     2700,
//                     1000
//                 ],
//                 [
//                     2700,
//                     900
//                 ]
//             ],
//             "speed": 124,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2700,
//                 "y": 900
//             },
//             "pointTo": {
//                 "x": 2700,
//                 "y": 1000
//             },
//             "xv": 7.59281015471359e-15,
//             "yv": 124,
//             "inView": false
//         },
//         {
//             "x": 2850,
//             "y": 806.4666666656367,
//             "w": 100,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     2850,
//                     900
//                 ],
//                 [
//                     2850,
//                     800
//                 ]
//             ],
//             "speed": 124,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2850,
//                 "y": 800
//             },
//             "pointTo": {
//                 "x": 2850,
//                 "y": 900
//             },
//             "xv": 7.59281015471359e-15,
//             "yv": 124,
//             "inView": false
//         },
//         {
//             "x": 3000,
//             "y": 893.5333333343633,
//             "w": 100,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3000,
//                     900
//                 ],
//                 [
//                     3000,
//                     800
//                 ]
//             ],
//             "speed": 124,
//             "currentPoint": 0,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 3000,
//                 "y": 900
//             },
//             "pointTo": {
//                 "x": 3000,
//                 "y": 800
//             },
//             "xv": 7.59281015471359e-15,
//             "yv": -124,
//             "inView": false
//         },
//         {
//             "x": 3200,
//             "y": 793.5333333343633,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3200,
//                     800
//                 ],
//                 [
//                     3200,
//                     700
//                 ]
//             ],
//             "speed": 124,
//             "currentPoint": 0,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 3200,
//                 "y": 800
//             },
//             "pointTo": {
//                 "x": 3200,
//                 "y": 700
//             },
//             "xv": 7.59281015471359e-15,
//             "yv": -124,
//             "inView": false
//         },
//         {
//             "x": 3150,
//             "y": 606.4666666656367,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3150,
//                     700
//                 ],
//                 [
//                     3150,
//                     600
//                 ]
//             ],
//             "speed": 124,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 3150,
//                 "y": 600
//             },
//             "pointTo": {
//                 "x": 3150,
//                 "y": 700
//             },
//             "xv": 7.59281015471359e-15,
//             "yv": 124,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     2175,
//                     250
//                 ],
//                 [
//                     2175,
//                     300
//                 ],
//                 [
//                     2125,
//                     275
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 2125,
//                 "right": 2175,
//                 "top": 250,
//                 "bottom": 300
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 2175,
//             "y": 275,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 2350,
//             "y": 0,
//             "w": 250,
//             "h": 50,
//             "type": "tp",
//             "tpx": 2675,
//             "tpy": 25,
//             "bgColor": "#6f5568",
//             "tileColor": "#9f8598",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 825,
//             "w": 75,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 900,
//             "y": 0,
//             "w": 100,
//             "h": 100,
//             "type": "color",
//             "bgColor": "#30365f",
//             "tileColor": "#4f5a96",
//             "inView": false
//         },
//         {
//             "x": 1800,
//             "y": 950,
//             "w": 50,
//             "h": 50,
//             "type": "color",
//             "bgColor": "#026178",
//             "tileColor": "#34a1c7",
//             "inView": false
//         },
//         {
//             "x": 3575,
//             "y": 50,
//             "w": 175,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3575,
//             "y": -50,
//             "w": 250,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3800,
//             "y": 0,
//             "w": 50,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3650,
//             "y": 200,
//             "w": 175,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 300,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 2925,
//             "y": 175,
//             "w": 25,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3800,
//             "y": -25,
//             "w": 50,
//             "h": 275,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3900,
//             "y": 50,
//             "w": 250,
//             "h": 300,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4150,
//             "y": 200,
//             "radius": 150,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4300,
//             "y": -25,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4300,
//             "y": 350,
//             "w": 100,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4350,
//             "y": 0,
//             "w": 50,
//             "h": 375,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4350,
//             "y": 425,
//             "w": 50,
//             "h": 600,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 575,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5550,
//             "y": 1000,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5600,
//                     650
//                 ],
//                 [
//                     5725,
//                     725
//                 ],
//                 [
//                     5600,
//                     800
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5600,
//                 "right": 5725,
//                 "top": 650,
//                 "bottom": 800
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5800,
//                     425
//                 ],
//                 [
//                     5850,
//                     450
//                 ],
//                 [
//                     5850,
//                     550
//                 ],
//                 [
//                     5800,
//                     575
//                 ],
//                 [
//                     5750,
//                     500
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5750,
//                 "right": 5850,
//                 "top": 425,
//                 "bottom": 575
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5850,
//                     425
//                 ],
//                 [
//                     5850,
//                     575
//                 ],
//                 [
//                     5725,
//                     500
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5725,
//                 "right": 5850,
//                 "top": 425,
//                 "bottom": 575
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5650,
//                     225
//                 ],
//                 [
//                     5700,
//                     300
//                 ],
//                 [
//                     5650,
//                     375
//                 ],
//                 [
//                     5600,
//                     350
//                 ],
//                 [
//                     5600,
//                     250
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5600,
//                 "right": 5700,
//                 "top": 225,
//                 "bottom": 375
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     5600,
//                     225
//                 ],
//                 [
//                     5725,
//                     300
//                 ],
//                 [
//                     5600,
//                     375
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 5600,
//                 "right": 5725,
//                 "top": 225,
//                 "bottom": 375
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 5850,
//             "y": -25,
//             "w": 50,
//             "h": 1050,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5525,
//             "y": -100,
//             "w": 325,
//             "h": 100,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 4350,
//             "y": -25,
//             "w": 1250,
//             "h": 1050,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 550,
//             "w": 750,
//             "h": 50,
//             "type": "tp",
//             "tpx": 5725,
//             "tpy": 975,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 0,
//             "y": 1000,
//             "w": 6575,
//             "h": 650,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3674,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3600,
//                     0
//                 ],
//                 [
//                     3750,
//                     0
//                 ]
//             ],
//             "speed": 120,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 3600,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 3750,
//                 "y": 0
//             },
//             "xv": 120,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 3750,
//             "y": 76,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3750,
//                     0
//                 ],
//                 [
//                     3750,
//                     150
//                 ]
//             ],
//             "speed": 120,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 3750,
//                 "y": 150
//             },
//             "pointTo": {
//                 "x": 3750,
//                 "y": 0
//             },
//             "xv": 7.34788079488412e-15,
//             "yv": -120,
//             "inView": false
//         },
//         {
//             "x": 3676,
//             "y": 150,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3750,
//                     150
//                 ],
//                 [
//                     3600,
//                     150
//                 ]
//             ],
//             "speed": 120,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 3750,
//                 "y": 150
//             },
//             "pointTo": {
//                 "x": 3600,
//                 "y": 150
//             },
//             "xv": -120,
//             "yv": 1.469576158976824e-14,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 200.66666666698853,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3600,
//                     150
//                 ],
//                 [
//                     3600,
//                     250
//                 ]
//             ],
//             "speed": 80,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 3600,
//                 "y": 250
//             },
//             "pointTo": {
//                 "x": 3600,
//                 "y": 150
//             },
//             "xv": 4.898587196589413e-15,
//             "yv": -80,
//             "inView": false
//         },
//         {
//             "x": 3661.6666666718165,
//             "y": 250,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3600,
//                     250
//                 ],
//                 [
//                     3725,
//                     250
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 3600,
//                 "y": 250
//             },
//             "pointTo": {
//                 "x": 3725,
//                 "y": 250
//             },
//             "xv": 100,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 3788.3333333281835,
//             "y": 250,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3725,
//                     250
//                 ],
//                 [
//                     3850,
//                     250
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 3850,
//                 "y": 250
//             },
//             "pointTo": {
//                 "x": 3725,
//                 "y": 250
//             },
//             "xv": -100,
//             "yv": 1.2246467991473532e-14,
//             "inView": false
//         },
//         {
//             "x": 3850,
//             "y": 188.3333333330243,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3850,
//                     250
//                 ],
//                 [
//                     3850,
//                     125
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 0,
//             "pointOn": {
//                 "x": 3850,
//                 "y": 250
//             },
//             "pointTo": {
//                 "x": 3850,
//                 "y": 125
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": -100,
//             "inView": false
//         },
//         {
//             "x": 3850,
//             "y": 61.666666666604115,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3850,
//                     125
//                 ],
//                 [
//                     3850,
//                     0
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 3850,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 3850,
//                 "y": 125
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": 100,
//             "inView": false
//         },
//         {
//             "x": 3675,
//             "y": 425,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3675,
//             "y": 400,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 500,
//             "w": 750,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3600,
//                     550
//                 ],
//                 [
//                     3800,
//                     550
//                 ],
//                 [
//                     3600,
//                     1000
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3600,
//                 "right": 3800,
//                 "top": 550,
//                 "bottom": 1000
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     4150,
//                     550
//                 ],
//                 [
//                     4350,
//                     550
//                 ],
//                 [
//                     4350,
//                     1000
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 4150,
//                 "right": 4350,
//                 "top": 550,
//                 "bottom": 1000
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3800,
//                     900
//                 ],
//                 [
//                     4150,
//                     900
//                 ],
//                 [
//                     4175,
//                     950
//                 ],
//                 [
//                     3775,
//                     950
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3775,
//                 "right": 4175,
//                 "top": 900,
//                 "bottom": 950
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3875,
//                     750
//                 ],
//                 [
//                     4075,
//                     750
//                 ],
//                 [
//                     4100,
//                     800
//                 ],
//                 [
//                     3850,
//                     800
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3850,
//                 "right": 4100,
//                 "top": 750,
//                 "bottom": 800
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     3950,
//                     600
//                 ],
//                 [
//                     4000,
//                     600
//                 ],
//                 [
//                     4025,
//                     650
//                 ],
//                 [
//                     3925,
//                     650
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 3925,
//                 "right": 4025,
//                 "top": 600,
//                 "bottom": 650
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 3839,
//             "y": 850,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3800,
//                     850
//                 ],
//                 [
//                     4100,
//                     850
//                 ]
//             ],
//             "speed": 180,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 4100,
//                 "y": 850
//             },
//             "pointTo": {
//                 "x": 3800,
//                 "y": 850
//             },
//             "xv": -180,
//             "yv": 2.2043642384652358e-14,
//             "inView": false
//         },
//         {
//             "x": 3876,
//             "y": 800,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3850,
//                     800
//                 ],
//                 [
//                     4050,
//                     800
//                 ]
//             ],
//             "speed": 120,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 4050,
//                 "y": 800
//             },
//             "pointTo": {
//                 "x": 3850,
//                 "y": 800
//             },
//             "xv": -120,
//             "yv": 1.469576158976824e-14,
//             "inView": false
//         },
//         {
//             "x": 3894.5,
//             "y": 700,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3875,
//                     700
//                 ],
//                 [
//                     4025,
//                     700
//                 ]
//             ],
//             "speed": 90,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 4025,
//                 "y": 700
//             },
//             "pointTo": {
//                 "x": 3875,
//                 "y": 700
//             },
//             "xv": -90,
//             "yv": 1.1021821192326179e-14,
//             "inView": false
//         },
//         {
//             "x": 3931.5,
//             "y": 650,
//             "w": 50,
//             "h": 50,
//             "type": "move",
//             "points": [
//                 [
//                     3925,
//                     650
//                 ],
//                 [
//                     3975,
//                     650
//                 ]
//             ],
//             "speed": 30,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 3975,
//                 "y": 650
//             },
//             "pointTo": {
//                 "x": 3925,
//                 "y": 650
//             },
//             "xv": -30,
//             "yv": 3.67394039744206e-15,
//             "inView": false
//         },
//         {
//             "x": 6000,
//             "y": 50,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 50,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6250,
//             "y": 75,
//             "w": 100,
//             "h": 275,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6000,
//             "y": 250,
//             "w": 325,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6000,
//             "y": 75,
//             "w": 100,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 6675,
//                 "y": 25
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5600,
//             "y": 0,
//             "w": 250,
//             "h": 50,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 5900,
//             "y": 132.5,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5900,
//                     0
//                 ],
//                 [
//                     5900,
//                     300
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 5900,
//                 "y": 300
//             },
//             "pointTo": {
//                 "x": 5900,
//                 "y": 0
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": -150,
//             "inView": false
//         },
//         {
//             "x": 5950,
//             "y": 167.5,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5950,
//                     0
//                 ],
//                 [
//                     5950,
//                     300
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 5950,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 5950,
//                 "y": 300
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": 150,
//             "inView": false
//         },
//         {
//             "x": 6350,
//             "y": 167.5,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     6350,
//                     0
//                 ],
//                 [
//                     6350,
//                     300
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6350,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 6350,
//                 "y": 300
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": 150,
//             "inView": false
//         },
//         {
//             "x": 6400,
//             "y": 132.5,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     6400,
//                     0
//                 ],
//                 [
//                     6400,
//                     300
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6400,
//                 "y": 300
//             },
//             "pointTo": {
//                 "x": 6400,
//                 "y": 0
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": -150,
//             "inView": false
//         },
//         {
//             "x": 6132.5,
//             "y": 2.051283388571814e-14,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     6000,
//                     0
//                 ],
//                 [
//                     6300,
//                     0
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6300,
//                 "y": 0
//             },
//             "pointTo": {
//                 "x": 6000,
//                 "y": 0
//             },
//             "xv": -150,
//             "yv": 1.8369701987210297e-14,
//             "inView": false
//         },
//         {
//             "x": 6250,
//             "y": 511.6666666618883,
//             "w": 100,
//             "h": 100,
//             "type": "lavamove",
//             "points": [
//                 [
//                     6000,
//                     450
//                 ],
//                 [
//                     6250,
//                     450
//                 ],
//                 [
//                     6250,
//                     700
//                 ],
//                 [
//                     6000,
//                     700
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6250,
//                 "y": 450
//             },
//             "pointTo": {
//                 "x": 6250,
//                 "y": 700
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": 100,
//             "inView": false
//         },
//         {
//             "x": 6239,
//             "y": 800,
//             "w": 100,
//             "h": 100,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5900,
//                     350
//                 ],
//                 [
//                     6350,
//                     350
//                 ],
//                 [
//                     6350,
//                     800
//                 ],
//                 [
//                     5900,
//                     800
//                 ]
//             ],
//             "speed": 180,
//             "currentPoint": 2,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6350,
//                 "y": 800
//             },
//             "pointTo": {
//                 "x": 5900,
//                 "y": 800
//             },
//             "xv": -180,
//             "yv": 2.2043642384652358e-14,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 6,
//             "inView": false
//         },
//         {
//             "x": 5550,
//             "y": 1000,
//             "w": 350,
//             "h": 125,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6625,
//             "y": 50,
//             "w": 200,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6625,
//             "y": 200,
//             "w": 373,
//             "h": 200,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 6825,
//             "y": -25,
//             "w": 125,
//             "h": 275,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 700,
//             "w": 1150,
//             "h": 900,
//             "type": "speed",
//             "speedInc": 2,
//             "inView": false
//         },
//         {
//             "x": 6908.867056794541,
//             "y": 70.53609649849565,
//             "w": 75,
//             "h": 50,
//             "type": "rotatingsafe",
//             "angle": 24087,
//             "rotateSpeed": 90,
//             "pivotX": 6825,
//             "pivotY": 125,
//             "distToPivot": 100,
//             "canCollide": true,
//             "cullingRadius": 145.06939094329988,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 6600,
//             "y": -75,
//             "w": 400,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6825,
//             "y": 125,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         6825,
//                         0
//                     ],
//                     [
//                         6825,
//                         -50
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         6825,
//                         250
//                     ],
//                     [
//                         6825,
//                         300
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6900,
//             "y": 225,
//             "w": 100,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6950,
//             "y": 0,
//             "w": 50,
//             "h": 275,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 250,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6825,
//             "y": 125,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6925,
//             "y": -25,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 275,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 275,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         6725,
//                         350
//                     ],
//                     [
//                         6725,
//                         400
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         6725,
//                         200
//                     ],
//                     [
//                         6725,
//                         150
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6776.666666656367,
//             "y": 300,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     6600,
//                     300
//                 ],
//                 [
//                     7000,
//                     300
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 7000,
//                 "y": 300
//             },
//             "pointTo": {
//                 "x": 6600,
//                 "y": 300
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 6697.768048249248,
//             "y": 316.93352839727083,
//             "w": 50,
//             "h": 50,
//             "type": "rotatingsafe",
//             "angle": -23997,
//             "rotateSpeed": -90,
//             "pivotX": 6725,
//             "pivotY": 275,
//             "distToPivot": 50,
//             "canCollide": true,
//             "cullingRadius": 85.35533905932738,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 250,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 275,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         6725,
//                         350
//                     ],
//                     [
//                         6725,
//                         400
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         6725,
//                         200
//                     ],
//                     [
//                         6725,
//                         150
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6600,
//             "y": 350,
//             "w": 475,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6625,
//             "y": 350,
//             "w": 925,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 50,
//             "w": 50,
//             "h": 400,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 50,
//             "w": 100,
//             "h": 325,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7200,
//             "y": -25,
//             "w": 100,
//             "h": 325,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7350,
//             "y": 50,
//             "w": 100,
//             "h": 325,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 1,
//             "currentCoins": 1,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 300,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 6625,
//             "y": 50,
//             "w": 200,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 0,
//             "w": 250,
//             "h": 700,
//             "type": "raxis",
//             "rx": false,
//             "ry": true,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 450,
//             "w": 1150,
//             "h": 250,
//             "type": "raxis",
//             "rx": true,
//             "ry": false,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 700,
//             "w": 1150,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7800,
//             "y": -25,
//             "w": 50,
//             "h": 825,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": -50,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 0,
//             "w": 250,
//             "h": 700,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": 3000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     7600,
//                     225
//                 ],
//                 [
//                     7625,
//                     225
//                 ],
//                 [
//                     7675,
//                     300
//                 ],
//                 [
//                     7550,
//                     350
//                 ],
//                 [
//                     7550,
//                     250
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 7550,
//                 "right": 7675,
//                 "top": 225,
//                 "bottom": 350
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     7550,
//                     200
//                 ],
//                 [
//                     7675,
//                     275
//                 ],
//                 [
//                     7550,
//                     350
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 7550,
//                 "right": 7675,
//                 "top": 200,
//                 "bottom": 350
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     7175,
//                     600
//                 ],
//                 [
//                     7200,
//                     700
//                 ],
//                 [
//                     7075,
//                     700
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 7075,
//                 "right": 7200,
//                 "top": 600,
//                 "bottom": 700
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     7100,
//                     550
//                 ],
//                 [
//                     7200,
//                     700
//                 ],
//                 [
//                     7075,
//                     700
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 7075,
//                 "right": 7200,
//                 "top": 550,
//                 "bottom": 700
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     6800,
//                     450
//                 ],
//                 [
//                     6925,
//                     450
//                 ],
//                 [
//                     6900,
//                     550
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 6800,
//                 "right": 6925,
//                 "top": 450,
//                 "bottom": 550
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     6800,
//                     450
//                 ],
//                 [
//                     6925,
//                     450
//                 ],
//                 [
//                     6825,
//                     600
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 6800,
//                 "right": 6925,
//                 "top": 450,
//                 "bottom": 600
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 6450,
//             "y": -25,
//             "w": 200,
//             "h": 1675,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 800,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 1000,
//             "w": 50,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 1400,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6600,
//             "y": 1600,
//             "w": 1150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7800,
//             "y": 800,
//             "w": 50,
//             "h": 850,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6725,
//             "y": 1050,
//             "w": 375,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6800,
//             "y": 850,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6850,
//             "y": 900,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6800,
//             "y": 1250,
//             "w": 200,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6900,
//             "y": 1350,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6600,
//             "y": 1500,
//             "w": 325,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7000,
//             "y": 1400,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7100,
//             "y": 1150,
//             "w": 50,
//             "h": 400,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6800,
//             "y": 1150,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 1200,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6900,
//             "y": 1000,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7000,
//             "y": 950,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7150,
//             "y": 850,
//             "w": 50,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7100,
//             "y": 850,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6900,
//             "y": 800,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7100,
//             "y": 1500,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7200,
//             "y": 1250,
//             "w": 250,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 1150,
//             "w": 50,
//             "h": 450,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7400,
//             "y": 1000,
//             "w": 50,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7250,
//             "y": 1050,
//             "w": 175,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7175,
//             "y": 1150,
//             "w": 175,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7200,
//             "y": 950,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7250,
//             "y": 850,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 900,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 1000,
//             "w": 50,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 850,
//             "w": 200,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7600,
//             "y": 925,
//             "w": 150,
//             "h": 350,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7600,
//             "y": 1250,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 1350,
//             "w": 200,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7600,
//             "y": 1450,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7600,
//             "y": 1550,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7700,
//             "y": 1475,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 1600,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 7775,
//                 "y": 1625
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 1600,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 7,
//             "inView": false
//         },
//         {
//             "x": 7800,
//             "y": 1625,
//             "w": 50,
//             "h": 800,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 1625,
//             "w": 50,
//             "h": 725,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7650,
//             "y": 1800,
//             "radius": 100,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 2050,
//             "radius": 100,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7725,
//             "y": 2200,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 2000,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7500,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 7400,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 3,
//             "currentCoins": 3,
//             "inView": false
//         },
//         {
//             "x": 7550,
//             "y": 2250,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7650,
//             "y": 1800,
//             "w": 300,
//             "h": 50,
//             "type": "rotate-normal",
//             "angle": 36130.5,
//             "rotateSpeed": 135,
//             "pivotX": 7650,
//             "pivotY": 1800,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 152.0690632574555,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 2000,
//             "w": 200,
//             "h": 50,
//             "type": "rotate-normal",
//             "angle": -35995.5,
//             "rotateSpeed": -135,
//             "pivotX": 7750,
//             "pivotY": 2000,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 103.07764064044152,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 7725,
//             "y": 2200,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-normal",
//             "angle": -35995.5,
//             "rotateSpeed": -135,
//             "pivotX": 7725,
//             "pivotY": 2200,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 7775,
//             "y": 2300,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 2200,
//             "w": 75,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 1950,
//             "w": 100,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 1950,
//             "w": 100,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7475,
//             "y": 2200,
//             "w": 75,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7725,
//             "y": 2125,
//             "w": 125,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7775,
//             "y": 2325,
//             "w": 50,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7375,
//             "y": 2425,
//             "w": 25,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 700,
//             "w": 50,
//             "h": 50,
//             "type": "mark",
//             "time": 15,
//             "inView": false
//         },
//         {
//             "x": 7750,
//             "y": 1600,
//             "w": 50,
//             "h": 50,
//             "type": "cure",
//             "inView": false
//         },
//         {
//             "x": 7650,
//             "y": 2400,
//             "radius": 50,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 450,
//             "w": 1150,
//             "h": 250,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": -3000,
//                 "y": 0
//             },
//             "direction": "left",
//             "inView": false
//         },
//         {
//             "x": 6000,
//             "y": 638.3333333381075,
//             "w": 100,
//             "h": 100,
//             "type": "lavamove",
//             "points": [
//                 [
//                     6000,
//                     450
//                 ],
//                 [
//                     6250,
//                     450
//                 ],
//                 [
//                     6250,
//                     700
//                 ],
//                 [
//                     6000,
//                     700
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 3,
//             "collidable": true,
//             "pointOn": {
//                 "x": 6000,
//                 "y": 700
//             },
//             "pointTo": {
//                 "x": 6000,
//                 "y": 450
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": -100,
//             "inView": false
//         },
//         {
//             "x": 6011,
//             "y": 350,
//             "w": 100,
//             "h": 100,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5900,
//                     350
//                 ],
//                 [
//                     6350,
//                     350
//                 ],
//                 [
//                     6350,
//                     800
//                 ],
//                 [
//                     5900,
//                     800
//                 ]
//             ],
//             "speed": 180,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 5900,
//                 "y": 350
//             },
//             "pointTo": {
//                 "x": 6350,
//                 "y": 350
//             },
//             "xv": 180,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 7025,
//             "y": 50,
//             "w": 25,
//             "h": 200,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7175,
//             "y": 150,
//             "w": 25,
//             "h": 150,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7200,
//             "y": 300,
//             "w": 100,
//             "h": 25,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7300,
//             "y": 150,
//             "w": 25,
//             "h": 150,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7450,
//             "y": 50,
//             "w": 25,
//             "h": 200,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7400,
//             "y": 25,
//             "w": 50,
//             "h": 25,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 25,
//             "w": 50,
//             "h": 25,
//             "type": "tp",
//             "tpx": 7025,
//             "tpy": 325,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 7000,
//             "y": 0,
//             "w": 550,
//             "h": 350,
//             "type": "size",
//             "size": 12,
//             "inView": false
//         },
//         {
//             "x": 7350,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "invpu",
//             "amount": 15,
//             "maxAmount": 15,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 2300,
//             "w": 50,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7150,
//             "y": 2300,
//             "w": 325,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7100,
//             "y": 2300,
//             "w": 50,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 10,
//             "currentStrength": 10,
//             "time": 0.05,
//             "timer": 0.05,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 2200,
//             "w": 50,
//             "h": 100,
//             "type": "bounce",
//             "effect": 1000,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 2200,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 2200,
//             "w": 25,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7175,
//             "y": 2250,
//             "w": 150,
//             "h": 50,
//             "type": "timetrap",
//             "time": 0,
//             "maxTime": 0.5,
//             "cdmult": 3,
//             "trapType": "death",
//             "inView": false
//         },
//         {
//             "x": 7400,
//             "y": 2250,
//             "w": 50,
//             "h": 50,
//             "type": "grav",
//             "force": 5000,
//             "dir": {
//                 "x": 0,
//                 "y": -5000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 7350,
//             "y": 2100,
//             "w": 125,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6750,
//             "y": 1650,
//             "w": 698,
//             "h": 475,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 7250,
//             "y": 2100,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 1700,
//             "w": 25,
//             "h": 525,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 7050,
//             "y": 1700,
//             "w": 50,
//             "h": 525,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6950,
//             "y": 1716.25,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     6950,
//                     1650
//                 ],
//                 [
//                     6950,
//                     1800
//                 ]
//             ],
//             "speed": 75,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 6950,
//                 "y": 1800
//             },
//             "pointTo": {
//                 "x": 6950,
//                 "y": 1650
//             },
//             "xv": 4.592425496802574e-15,
//             "yv": -75,
//             "inView": false
//         },
//         {
//             "x": 6782.5,
//             "y": 1900,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     6750,
//                     1900
//                 ],
//                 [
//                     7000,
//                     1900
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 7000,
//                 "y": 1900
//             },
//             "pointTo": {
//                 "x": 6750,
//                 "y": 1900
//             },
//             "xv": -150,
//             "yv": 1.8369701987210297e-14,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 2100,
//             "w": 300,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6925,
//             "y": 2275,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 0.17453292519943295,
//             "endAngle": 3.141592653589793,
//             "startPolygon": {
//                 "points": [
//                     [
//                         7048.100969126526,
//                         2296.7060222083664
//                     ],
//                     [
//                         7097.341356777137,
//                         2305.388431091713
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         6800,
//                         2275
//                     ],
//                     [
//                         6750,
//                         2275
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6850,
//             "y": 2200,
//             "w": 150,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6750,
//             "y": 2200,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6925,
//             "y": 2275,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 6900,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 6750,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 1,
//             "currentCoins": 1,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 6925,
//             "y": 2275,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-normal",
//             "angle": 36130.5,
//             "rotateSpeed": 135,
//             "pivotX": 6925,
//             "pivotY": 2275,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 6925,
//             "y": 2275,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-normal",
//             "angle": 36220.5,
//             "rotateSpeed": 135,
//             "pivotX": 6925,
//             "pivotY": 2275,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 6725,
//                 "y": 2175
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 8,
//             "inView": false
//         },
//         {
//             "x": 5850,
//             "y": 1650,
//             "w": 900,
//             "h": 750,
//             "type": "platformer",
//             "force": 2000,
//             "dir": {
//                 "x": 0,
//                 "y": 2000
//             },
//             "direction": "down",
//             "jumpHeight": 150,
//             "maxForce": 1000,
//             "variableJumpHeight": false,
//             "platformerFriction": 0.8,
//             "inView": false
//         },
//         {
//             "x": 6700,
//             "y": 1625,
//             "w": 50,
//             "h": 525,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6650,
//             "y": 1650,
//             "w": 50,
//             "h": 700,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 6500,
//             "y": 2350,
//             "w": 50,
//             "h": 75,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5800,
//             "y": 2350,
//             "w": 650,
//             "h": 50,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 5800,
//             "y": 1700,
//             "w": 50,
//             "h": 675,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 6400,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6300,
//             "y": 2200,
//             "w": 150,
//             "h": 50,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 1900,
//             "w": 100,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5900,
//             "y": 1575,
//             "w": 100,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6050,
//             "y": 1700,
//             "w": 100,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 1625,
//             "w": 100,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6000,
//             "y": 1900,
//             "w": 150,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5825,
//             "y": 1900,
//             "w": 75,
//             "h": 100,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 6275,
//             "y": 1625,
//             "w": 400,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6450,
//             "y": 1825,
//             "w": 200,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5825,
//             "y": 2150,
//             "w": 375,
//             "h": 225,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 5489.126844502204,
//             "y": 1677.5871532950825,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 6021.75,
//             "rotateSpeed": 22.5,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5757.202388217982,
//             "y": 2017.6393593774574,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 6141.75,
//             "rotateSpeed": 22.5,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5328.670767279816,
//             "y": 2079.7734873274603,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 6261.75,
//             "rotateSpeed": 22.5,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5694.432999788983,
//             "y": 2108.827252012607,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -5352.666666667462,
//             "rotateSpeed": -20,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5281.084429954499,
//             "y": 1979.8196560494341,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -5232.6666666672445,
//             "rotateSpeed": -20,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5599.4825702581475,
//             "y": 1686.3530919376071,
//             "w": 50,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -5112.666666667021,
//             "rotateSpeed": -20,
//             "pivotX": 5525,
//             "pivotY": 1925,
//             "distToPivot": 250,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 285.3553390593274,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 5500,
//             "y": 1900,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 5775,
//             "tpy": 2375,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 5200,
//             "y": 1625,
//             "w": 50,
//             "h": 625,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5475,
//             "y": 1875,
//             "w": 100,
//             "h": 100,
//             "type": "coindoor",
//             "coins": 4,
//             "currentCoins": 4,
//             "inView": false
//         },
//         {
//             "x": 5250,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5250,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5750,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5750,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 5200,
//             "y": 2250,
//             "w": 600,
//             "h": 150,
//             "type": "grav",
//             "force": 1000,
//             "dir": {
//                 "x": -1000,
//                 "y": 0
//             },
//             "direction": "left",
//             "inView": false
//         },
//         {
//             "x": 5250,
//             "y": 2347.0833333281835,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5250,
//                     2225
//                 ],
//                 [
//                     5250,
//                     2375
//                 ]
//             ],
//             "speed": 25,
//             "currentPoint": 1,
//             "collidable": true,
//             "pointOn": {
//                 "x": 5250,
//                 "y": 2375
//             },
//             "pointTo": {
//                 "x": 5250,
//                 "y": 2225
//             },
//             "xv": 1.5308084989341915e-15,
//             "yv": -25,
//             "inView": false
//         },
//         {
//             "x": 5500,
//             "y": 2252.9166666718165,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     5500,
//                     2225
//                 ],
//                 [
//                     5500,
//                     2375
//                 ]
//             ],
//             "speed": 25,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 5500,
//                 "y": 2225
//             },
//             "pointTo": {
//                 "x": 5500,
//                 "y": 2375
//             },
//             "xv": 1.5308084989341915e-15,
//             "yv": 25,
//             "inView": false
//         },
//         {
//             "x": 5200,
//             "y": 2200,
//             "w": 625,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5200,
//             "y": 2250,
//             "w": 50,
//             "h": 150,
//             "type": "tp",
//             "tpx": 5175,
//             "tpy": 1675,
//             "bgColor": "#4d2353",
//             "tileColor": "#8a2aac",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 4700,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 4725,
//                 "y": 2375
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5150,
//             "y": 1700,
//             "w": 50,
//             "h": 750,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4700,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 9,
//             "inView": false
//         },
//         {
//             "x": 4700,
//             "y": 1625,
//             "w": 100,
//             "h": 725,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4800,
//             "y": 1998.3333333325659,
//             "w": 350,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     4800,
//                     1625
//                 ],
//                 [
//                     4800,
//                     2375
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 0,
//             "collidable": false,
//             "pointOn": {
//                 "x": 4800,
//                 "y": 1625
//             },
//             "pointTo": {
//                 "x": 4800,
//                 "y": 2375
//             },
//             "xv": 1.2246467991473532e-14,
//             "yv": 200,
//             "inView": false
//         },
//         {
//             "x": 4800,
//             "y": 2001.6666666674787,
//             "w": 350,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     4800,
//                     1625
//                 ],
//                 [
//                     4800,
//                     2375
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 1,
//             "collidable": false,
//             "pointOn": {
//                 "x": 4800,
//                 "y": 2375
//             },
//             "pointTo": {
//                 "x": 4800,
//                 "y": 1625
//             },
//             "xv": 1.2246467991473532e-14,
//             "yv": -200,
//             "inView": false
//         },
//         {
//             "x": 4750,
//             "y": 1600,
//             "w": 450,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5600,
//             "y": 900,
//             "w": 250,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 6275,
//             "y": 2000,
//             "w": 75,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4800,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 4800,
//             "y": 2000,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5100,
//             "y": 2000,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5100,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 4400,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "resetcoins",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2275,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 21410.666666669847,
//             "rotateSpeed": 80,
//             "pivotX": 4575,
//             "pivotY": 2275,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2075,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -21410.666666669847,
//             "rotateSpeed": -80,
//             "pivotX": 4575,
//             "pivotY": 2075,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 250,
//             "y": 1650,
//             "w": 2500,
//             "h": 500,
//             "type": "raxis",
//             "rx": true,
//             "ry": false,
//             "inView": false
//         },
//         {
//             "x": 250,
//             "y": 1650,
//             "w": 2450,
//             "h": 500,
//             "type": "timetrap",
//             "time": 0,
//             "maxTime": 15,
//             "cdmult": 3,
//             "trapType": "death",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 1875,
//             "w": 250,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 21410.666666669847,
//             "rotateSpeed": 80,
//             "pivotX": 4575,
//             "pivotY": 1875,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 127.47548783981962,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 1800,
//             "w": 125,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4450,
//             "y": 2000,
//             "w": 125,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2200,
//             "w": 125,
//             "h": 150,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4650,
//             "y": 2250,
//             "w": 75,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4650,
//             "y": 1825,
//             "w": 75,
//             "h": 100,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4400,
//             "y": 1700,
//             "w": 225,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2075,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         1950
//                     ],
//                     [
//                         4575,
//                         1900
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         2200
//                     ],
//                     [
//                         4575,
//                         2250
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 1875,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         2000
//                     ],
//                     [
//                         4575,
//                         2050
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         1750
//                     ],
//                     [
//                         4575,
//                         1700
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2075,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 1875,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4400,
//             "y": 1700,
//             "w": 50,
//             "h": 750,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2275,
//             "radius": 175,
//             "type": "circle-hollow-slice",
//             "startAngle": 1.5707963267948966,
//             "endAngle": 4.71238898038469,
//             "startPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         2400
//                     ],
//                     [
//                         4575,
//                         2450
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         4575,
//                         2150
//                     ],
//                     [
//                         4575,
//                         2100
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 125,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4575,
//             "y": 2275,
//             "radius": 75,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4562.5,
//             "y": 1762.5,
//             "w": 25,
//             "h": 25,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 4625,
//             "y": 1725,
//             "radius": 125,
//             "type": "circle-hollow-slice",
//             "startAngle": 4.71238898038469,
//             "endAngle": 1.5707963267948966,
//             "startPolygon": {
//                 "points": [
//                     [
//                         4625,
//                         1650
//                     ],
//                     [
//                         4625,
//                         1600
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "endPolygon": {
//                 "points": [
//                     [
//                         4625,
//                         1800
//                     ],
//                     [
//                         4625,
//                         1850
//                     ]
//                 ],
//                 "type": "poly",
//                 "props": {}
//             },
//             "innerRadius": 75,
//             "toRotate": false,
//             "rotateSpeed": 0,
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4625,
//             "y": 1725,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 4562.5,
//             "y": 2162.5,
//             "w": 25,
//             "h": 25,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 0,
//             "y": 1650,
//             "w": 100,
//             "h": 100,
//             "type": "winpad",
//             "inView": false
//         },
//         {
//             "x": -25,
//             "y": 2400,
//             "w": 7875,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4250,
//             "y": 1650,
//             "w": 50,
//             "h": 700,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4300,
//             "y": 1650,
//             "w": 100,
//             "h": 750,
//             "type": "raxis",
//             "rx": false,
//             "ry": true,
//             "inView": false
//         },
//         {
//             "x": 4300,
//             "y": 1650,
//             "w": 100,
//             "h": 750,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": 3000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 4350,
//             "y": 1961.6666666640917,
//             "w": 50,
//             "h": 50,
//             "type": "tpmove",
//             "points": [
//                 [
//                     4350,
//                     1650
//                 ],
//                 [
//                     4350,
//                     2000
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 0,
//             "tpx": 4425,
//             "tpy": 1675,
//             "pointOn": {
//                 "x": 4350,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 4350,
//                 "y": 2000
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": 100,
//             "inView": false
//         },
//         {
//             "x": 4300,
//             "y": 2311.6666666707483,
//             "w": 50,
//             "h": 50,
//             "type": "lavamove",
//             "points": [
//                 [
//                     4300,
//                     2000
//                 ],
//                 [
//                     4300,
//                     2350
//                 ]
//             ],
//             "speed": 100,
//             "currentPoint": 0,
//             "collidable": true,
//             "pointOn": {
//                 "x": 4300,
//                 "y": 2000
//             },
//             "pointTo": {
//                 "x": 4300,
//                 "y": 2350
//             },
//             "xv": 6.123233995736766e-15,
//             "yv": 100,
//             "inView": false
//         },
//         {
//             "x": 5900,
//             "y": 1925,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 5800,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 1,
//             "currentCoins": 1,
//             "inView": false
//         },
//         {
//             "x": 5950,
//             "y": 1900,
//             "w": 50,
//             "h": 100,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 5950,
//             "y": 1899,
//             "w": 100,
//             "h": 10,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 2150,
//             "w": 50,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 2175,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": false,
//             "inView": false
//         },
//         {
//             "x": 6200,
//             "y": 2050,
//             "w": 50,
//             "h": 100,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 3000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 4750,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 4725,
//             "tpy": 2375,
//             "bgColor": "#4d2353",
//             "tileColor": "#8a2aac",
//             "changeColor": true,
//             "inView": false
//         },
//         {
//             "x": 4750,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 4,
//             "currentCoins": 4,
//             "inView": false
//         },
//         {
//             "x": 4200,
//             "y": 2325,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4050,
//             "y": 2200,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4225,
//             "y": 2150,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4125,
//             "y": 1925,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4100,
//             "y": 2000,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4000,
//             "y": 1700,
//             "w": 50,
//             "h": 725,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 4225,
//             "y": 1750,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 4250,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "mark",
//             "time": 10,
//             "inView": false
//         },
//         {
//             "x": 4000,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "cure",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 1650,
//             "w": 400,
//             "h": 50,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": -3000,
//                 "y": 0
//             },
//             "direction": "left",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 1650,
//             "w": 50,
//             "h": 150,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": 3000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 1750,
//             "w": 150,
//             "h": 50,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 3000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 1750,
//             "w": 50,
//             "h": 250,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": 3000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 1950,
//             "w": 200,
//             "h": 50,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 3000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 3850,
//             "y": 1800,
//             "w": 50,
//             "h": 200,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": -3000
//             },
//             "direction": "up",
//             "inView": false
//         },
//         {
//             "x": 3850,
//             "y": 1800,
//             "w": 150,
//             "h": 50,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 3000,
//                 "y": 0
//             },
//             "direction": "right",
//             "inView": false
//         },
//         {
//             "x": 3950,
//             "y": 1800,
//             "w": 50,
//             "h": 250,
//             "type": "grav",
//             "force": 3000,
//             "dir": {
//                 "x": 0,
//                 "y": 3000
//             },
//             "direction": "down",
//             "inView": false
//         },
//         {
//             "x": 3550,
//             "y": 1650,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3550,
//             "y": 1800,
//             "w": 150,
//             "h": 250,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3675,
//             "y": 2000,
//             "w": 275,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3650,
//             "y": 1700,
//             "w": 350,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3750,
//             "y": 1725,
//             "w": 100,
//             "h": 225,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3825,
//             "y": 1750,
//             "w": 175,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3900,
//             "y": 1850,
//             "w": 50,
//             "h": 200,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3650,
//             "y": 1750,
//             "w": 50,
//             "h": 50,
//             "type": "switchlava",
//             "onTime": 3,
//             "offTime": 3,
//             "state": true,
//             "timer": 1.8833333333340887,
//             "collidable": true,
//             "inView": false
//         },
//         {
//             "x": 3750,
//             "y": 1950,
//             "w": 50,
//             "h": 50,
//             "type": "switchlava",
//             "onTime": 3,
//             "offTime": 3,
//             "state": false,
//             "timer": 1.8833333333340887,
//             "collidable": true,
//             "inView": false
//         },
//         {
//             "x": 3900,
//             "y": 1800,
//             "w": 50,
//             "h": 50,
//             "type": "switchlava",
//             "onTime": 3,
//             "offTime": 3,
//             "state": true,
//             "timer": 1.8833333333340887,
//             "collidable": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 2050,
//             "w": 400,
//             "h": 350,
//             "type": "lava",
//             "canCollide": false,
//             "inView": false
//         },
//         {
//             "x": 3550,
//             "y": 2025,
//             "w": 50,
//             "h": 425,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 2150,
//             "w": 325,
//             "h": 50,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3752.416910496588,
//             "y": 2209.0399396884404,
//             "w": 50,
//             "h": 50,
//             "type": "rotatingsafe",
//             "angle": -24087,
//             "rotateSpeed": -90,
//             "pivotX": 3700,
//             "pivotY": 2175,
//             "distToPivot": 62.5,
//             "canCollide": true,
//             "cullingRadius": 97.85533905932738,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 3647.5830895034132,
//             "y": 2140.9600603115573,
//             "w": 50,
//             "h": 50,
//             "type": "rotatingsafe",
//             "angle": -23907,
//             "rotateSpeed": -90,
//             "pivotX": 3700,
//             "pivotY": 2175,
//             "distToPivot": 62.5,
//             "canCollide": true,
//             "cullingRadius": 97.85533905932738,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 3950,
//             "y": 2332.5,
//             "w": 50,
//             "h": 50,
//             "type": "movingsafe",
//             "points": [
//                 [
//                     3950,
//                     2200
//                 ],
//                 [
//                     3950,
//                     2350
//                 ]
//             ],
//             "speed": 150,
//             "currentPoint": 1,
//             "pointOn": {
//                 "x": 3950,
//                 "y": 2350
//             },
//             "pointTo": {
//                 "x": 3950,
//                 "y": 2200
//             },
//             "xv": 9.184850993605149e-15,
//             "yv": -150,
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 2175,
//             "radius": 25,
//             "type": "circle-normal",
//             "renderType": "circle",
//             "inView": false
//         },
//         {
//             "x": 3950,
//             "y": 2350,
//             "w": 50,
//             "h": 50,
//             "type": "tp",
//             "tpx": 2725,
//             "tpy": 1675,
//             "bgColor": "#721d4f",
//             "tileColor": "#8d3399",
//             "changeColor": true,
//             "inView": false
//         },
//         {
//             "x": 2700,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "zone",
//             "value": 10,
//             "inView": false
//         },
//         {
//             "x": 2700,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "spawn": {
//                 "x": 2725,
//                 "y": 1675
//             },
//             "type": "check",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 2750,
//             "y": 1650,
//             "w": 825,
//             "h": 750,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 5850,
//             "y": 1899,
//             "w": 50,
//             "h": 25,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 3600,
//             "y": 1750,
//             "w": 50,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 3700,
//             "y": 1950,
//             "w": 50,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 3850,
//             "y": 1800,
//             "w": 50,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 5,
//             "currentStrength": 5,
//             "time": 0.1,
//             "timer": 0.1,
//             "regenTime": 3,
//             "inView": false
//         },
//         {
//             "x": 5250,
//             "y": 1800,
//             "w": 25,
//             "h": 350,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 5775,
//             "y": 1700,
//             "w": 25,
//             "h": 350,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 5300,
//             "y": 1650,
//             "w": 350,
//             "h": 25,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 5400,
//             "y": 2175,
//             "w": 350,
//             "h": 25,
//             "type": "lava",
//             "canCollide": true,
//             "inView": false
//         },
//         {
//             "x": 5825,
//             "y": 1700,
//             "w": 25,
//             "h": 125,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 6150,
//             "y": 600,
//             "w": 50,
//             "h": 52,
//             "type": "tp",
//             "tpx": 6675,
//             "tpy": 25,
//             "bgColor": "#4a1698",
//             "tileColor": "#6b53ac",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": 1800,
//             "r": 50,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 50,
//             "inView": false
//         },
//         {
//             "x": 2350,
//             "y": 1725,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 2400,
//             "y": 1925,
//             "r": 75,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 75,
//             "inView": false
//         },
//         {
//             "x": 2600,
//             "y": 2050,
//             "r": 79,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 79,
//             "inView": false
//         },
//         {
//             "x": 2200,
//             "y": 2100,
//             "r": 25,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 25,
//             "inView": false
//         },
//         {
//             "x": 2150,
//             "y": 1850,
//             "r": 50,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 50,
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 1800,
//             "w": 275,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": 30831.359999979697,
//             "rotateSpeed": 115.2,
//             "pivotX": 1750,
//             "pivotY": 1800,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 139.75424859373686,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1750,
//             "y": 2000,
//             "w": 275,
//             "h": 50,
//             "type": "rotate-lava",
//             "angle": -30831.359999979697,
//             "rotateSpeed": -115.2,
//             "pivotX": 1750,
//             "pivotY": 2000,
//             "distToPivot": 0,
//             "canCollide": true,
//             "renderType": "rotating",
//             "cullingRadius": 139.75424859373686,
//             "unSim": 15.483333333333094,
//             "inView": false
//         },
//         {
//             "x": 1950,
//             "y": 1725,
//             "r": 50,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 50,
//             "inView": false
//         },
//         {
//             "x": 1950,
//             "y": 2050,
//             "r": 75,
//             "type": "circle-lava",
//             "renderType": "circleR",
//             "radius": 75,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     1325,
//                     1750
//                 ],
//                 [
//                     1475,
//                     1900
//                 ],
//                 [
//                     1325,
//                     2050
//                 ],
//                 [
//                     1175,
//                     1900
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 1175,
//                 "right": 1475,
//                 "top": 1750,
//                 "bottom": 2050
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     975,
//                     1650
//                 ],
//                 [
//                     1175,
//                     1650
//                 ],
//                 [
//                     1025,
//                     1800
//                 ],
//                 [
//                     975,
//                     1800
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 975,
//                 "right": 1175,
//                 "top": 1650,
//                 "bottom": 1800
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     975,
//                     2000
//                 ],
//                 [
//                     1025,
//                     2000
//                 ],
//                 [
//                     1175,
//                     2150
//                 ],
//                 [
//                     975,
//                     2150
//                 ]
//             ],
//             "type": "poly-lava",
//             "most": {
//                 "left": 975,
//                 "right": 1175,
//                 "top": 2000,
//                 "bottom": 2150
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 52.5,
//             "y": 2050,
//             "w": 45,
//             "h": 45,
//             "type": "tp",
//             "tpx": 2725,
//             "tpy": 1675,
//             "bgColor": "#323c81",
//             "tileColor": "#5260ab",
//             "changeColor": false,
//             "inView": false
//         },
//         {
//             "x": 50,
//             "y": 1750,
//             "w": 50,
//             "h": 300,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 0,
//             "y": 2000,
//             "w": 50,
//             "h": 50,
//             "type": "coindoor",
//             "coins": 4,
//             "currentCoins": 4,
//             "inView": false
//         },
//         {
//             "x": 1550,
//             "y": 1875,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 1300,
//             "y": 2100,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 650,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": 2150,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "type": "coin",
//             "collected": false,
//             "inView": false
//         },
//         {
//             "x": -25,
//             "y": 2150,
//             "w": 3500,
//             "h": 575,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "points": [
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     550,
//                     1650
//                 ],
//                 [
//                     250,
//                     2100
//                 ]
//             ],
//             "type": "poly",
//             "most": {
//                 "left": 250,
//                 "right": 550,
//                 "top": 1650,
//                 "bottom": 2100
//             },
//             "renderType": "poly",
//             "inView": false
//         },
//         {
//             "x": 1751.6666666666188,
//             "y": 1650,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2125,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 1500,
//                 "y": 1650
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 1751.6666666666188,
//             "y": 1650,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 1,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2125,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 1500,
//                 "y": 1650
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 1126.6666666666085,
//             "y": 1650,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 2,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 1500,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 875,
//                 "y": 1650
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 501.6666666666336,
//             "y": 1650,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 3,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 875,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 250,
//                 "y": 1650
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 250,
//             "y": 1276.6666666666083,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 4,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 250,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 250,
//                 "y": 1025
//             },
//             "xv": 1.2246467991473532e-14,
//             "yv": -200,
//             "inView": false
//         },
//         {
//             "x": 623.3333333333751,
//             "y": 1025,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 5,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 250,
//                 "y": 1025
//             },
//             "pointTo": {
//                 "x": 875,
//                 "y": 1025
//             },
//             "xv": 200,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 1248.333333333381,
//             "y": 1025,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 6,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 875,
//                 "y": 1025
//             },
//             "pointTo": {
//                 "x": 1500,
//                 "y": 1025
//             },
//             "xv": 200,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 1873.3333333333915,
//             "y": 1025,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 7,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 1500,
//                 "y": 1025
//             },
//             "pointTo": {
//                 "x": 2125,
//                 "y": 1025
//             },
//             "xv": 200,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 2498.333333333342,
//             "y": 1025,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 8,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2125,
//                 "y": 1025
//             },
//             "pointTo": {
//                 "x": 2750,
//                 "y": 1025
//             },
//             "xv": 200,
//             "yv": 0,
//             "inView": false
//         },
//         {
//             "x": 2376.6666666666597,
//             "y": 1650,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 0,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2750,
//                 "y": 1650
//             },
//             "pointTo": {
//                 "x": 2125,
//                 "y": 1650
//             },
//             "xv": -200,
//             "yv": 2.4492935982947064e-14,
//             "inView": false
//         },
//         {
//             "x": 2750,
//             "y": 1398.3333333333921,
//             "w": 50,
//             "h": 500,
//             "type": "move",
//             "points": [
//                 [
//                     2750,
//                     1650
//                 ],
//                 [
//                     2125,
//                     1650
//                 ],
//                 [
//                     1500,
//                     1650
//                 ],
//                 [
//                     875,
//                     1650
//                 ],
//                 [
//                     250,
//                     1650
//                 ],
//                 [
//                     250,
//                     1025
//                 ],
//                 [
//                     875,
//                     1025
//                 ],
//                 [
//                     1500,
//                     1025
//                 ],
//                 [
//                     2125,
//                     1025
//                 ],
//                 [
//                     2750,
//                     1025
//                 ]
//             ],
//             "speed": 200,
//             "currentPoint": 9,
//             "alongWith": false,
//             "pointOn": {
//                 "x": 2750,
//                 "y": 1025
//             },
//             "pointTo": {
//                 "x": 2750,
//                 "y": 1650
//             },
//             "xv": 1.2246467991473532e-14,
//             "yv": 200,
//             "inView": false
//         },
//         {
//             "x": 100,
//             "y": 1650,
//             "w": 150,
//             "h": 450,
//             "type": "normal",
//             "canJump": true,
//             "inView": false
//         },
//         {
//             "x": 50,
//             "y": 2050,
//             "w": 50,
//             "h": 50,
//             "type": "breakable",
//             "maxStrength": 12,
//             "currentStrength": 12,
//             "time": 0.3,
//             "timer": 0.3,
//             "regenTime": 3,
//             "inView": false
//         }
//     ];
    
//     const enemies = [
//         {
//             "type": "turret",
//             "angle": 2.4235347361601702,
//             "shootSpeed": 4,
//             "timer": 3.5416666666667473,
//             "pRadius": 22,
//             "pSpeed": 236,
//             "projectiles": [
//                 {
//                     "x": 1075,
//                     "y": 866.8333333333317,
//                     "angle": -1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 -1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [],
//             "radius": 24,
//             "speed": 0,
//             "x": 1075,
//             "y": 975,
//             "renderX": 1075,
//             "renderY": 975,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 1050,
//                 "y": 500,
//                 "w": 50,
//                 "h": 500
//             },
//             "inView": true
//         },
//         {
//             "type": "turret",
//             "angle": 2.8357111416781473,
//             "shootSpeed": 0.18,
//             "timer": 0.12166666666667184,
//             "pRadius": 13,
//             "pSpeed": 120,
//             "projectiles": [
//                 {
//                     "x": 125,
//                     "y": 904,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 125,
//                     "y": 924,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 125,
//                     "y": 946,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 125,
//                     "y": 968,
//                     "angle": -1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 -1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [
//                 {
//                     "x": 125,
//                     "y": 861,
//                     "angle": -1.5707963267948966,
//                     "life": 0.2124999999999998
//                 },
//                 {
//                     "x": 125,
//                     "y": 881,
//                     "angle": -1.5707963267948966,
//                     "life": 0.7958333333333333
//                 }
//             ],
//             "radius": 22,
//             "speed": 0,
//             "x": 125,
//             "y": 975,
//             "renderX": 125,
//             "renderY": 975,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 100,
//                 "y": 875,
//                 "w": 50,
//                 "h": 125
//             },
//             "inView": false
//         },
//         {
//             "type": "turret",
//             "angle": 0.8274157468514435,
//             "shootSpeed": 0.18,
//             "timer": 0.12166666666667184,
//             "pRadius": 13,
//             "pSpeed": 120,
//             "projectiles": [
//                 {
//                     "x": 425,
//                     "y": 904,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 425,
//                     "y": 924,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 425,
//                     "y": 946,
//                     "angle": -1.5707963267948966
//                 },
//                 {
//                     "x": 425,
//                     "y": 968,
//                     "angle": -1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 -1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [
//                 {
//                     "x": 425,
//                     "y": 861,
//                     "angle": -1.5707963267948966,
//                     "life": 0.2124999999999998
//                 },
//                 {
//                     "x": 425,
//                     "y": 881,
//                     "angle": -1.5707963267948966,
//                     "life": 0.7958333333333333
//                 }
//             ],
//             "radius": 22,
//             "speed": 0,
//             "x": 425,
//             "y": 975,
//             "renderX": 425,
//             "renderY": 975,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 400,
//                 "y": 875,
//                 "w": 50,
//                 "h": 125
//             },
//             "inView": false
//         },
//         {
//             "type": "turret",
//             "angle": 4.013456957920454,
//             "shootSpeed": 0.18,
//             "timer": 0.12166666666667184,
//             "pRadius": 13,
//             "pSpeed": 120,
//             "projectiles": [
//                 {
//                     "x": 275,
//                     "y": 896,
//                     "angle": 1.5707963267948966
//                 },
//                 {
//                     "x": 275,
//                     "y": 876,
//                     "angle": 1.5707963267948966
//                 },
//                 {
//                     "x": 275,
//                     "y": 854,
//                     "angle": 1.5707963267948966
//                 },
//                 {
//                     "x": 275,
//                     "y": 832,
//                     "angle": 1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [
//                 {
//                     "x": 275,
//                     "y": 939,
//                     "angle": 1.5707963267948966,
//                     "life": 0.2124999999999998
//                 },
//                 {
//                     "x": 275,
//                     "y": 919,
//                     "angle": 1.5707963267948966,
//                     "life": 0.7958333333333333
//                 }
//             ],
//             "radius": 22,
//             "speed": 0,
//             "x": 275,
//             "y": 825,
//             "renderX": 275,
//             "renderY": 825,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 250,
//                 "y": 800,
//                 "w": 50,
//                 "h": 125
//             },
//             "inView": true
//         },
//         {
//             "type": "turret",
//             "angle": 2.298151798027445,
//             "shootSpeed": 3,
//             "timer": 2.041666666666742,
//             "pRadius": 22,
//             "pSpeed": 236,
//             "projectiles": [
//                 {
//                     "x": 3375,
//                     "y": 800.7999999999965,
//                     "angle": -1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 -1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [
//                 {
//                     "x": 3375,
//                     "y": 90.83333333332877,
//                     "angle": -1.5707963267948966,
//                     "life": 0.5624999999999999
//                 }
//             ],
//             "radius": 20,
//             "speed": 0,
//             "x": 3375,
//             "y": 1025,
//             "renderX": 3375,
//             "renderY": 1025,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 3350,
//                 "y": 100,
//                 "w": 50,
//                 "h": 950
//             },
//             "inView": false
//         },
//         {
//             "type": "turret",
//             "angle": 5.200365031059507,
//             "shootSpeed": 3,
//             "timer": 0.541666666666742,
//             "pRadius": 22,
//             "pSpeed": 236,
//             "projectiles": [
//                 {
//                     "x": 3325,
//                     "y": 446.799999999993,
//                     "angle": -1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 -1.5707963267948966
//             ],
//             "csd": 0,
//             "deadProjectiles": [],
//             "radius": 20,
//             "speed": 0,
//             "x": 3325,
//             "y": 1025,
//             "renderX": 3325,
//             "renderY": 1025,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 3300,
//                 "y": 100,
//                 "w": 50,
//                 "h": 950
//             },
//             "inView": false
//         },
//         {
//             "type": "switch",
//             "angle": 3.4042346702311117,
//             "switchTime": 2,
//             "switchTimer": 1.958333333333271,
//             "currentSwitch": false,
//             "radius": 24,
//             "speed": 0,
//             "x": 26,
//             "y": 674,
//             "renderX": 26,
//             "renderY": 674,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 0,
//                 "y": 650,
//                 "w": 50,
//                 "h": 50
//             },
//             "inView": false
//         },
//         {
//             "type": "switch",
//             "angle": 4.426178428559605,
//             "switchTime": 2,
//             "switchTimer": 1.958333333333271,
//             "currentSwitch": false,
//             "radius": 24,
//             "speed": 0,
//             "x": 125,
//             "y": 676,
//             "renderX": 125,
//             "renderY": 676,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 100,
//                 "y": 650,
//                 "w": 50,
//                 "h": 50
//             },
//             "inView": false
//         },
//         {
//             "type": "turret",
//             "angle": 6.085253293381526,
//             "shootSpeed": 0.8,
//             "timer": 0.04166666666667837,
//             "pRadius": 13,
//             "pSpeed": 120,
//             "projectiles": [],
//             "shootDirections": [
//                 1.5707963267948966,
//                 -1.5707963267948966
//             ],
//             "csd": 1,
//             "deadProjectiles": [
//                 {
//                     "x": 575,
//                     "y": 992,
//                     "angle": 1.5707963267948966,
//                     "life": 0.12499999999999978
//                 }
//             ],
//             "radius": 22,
//             "speed": 0,
//             "x": 575,
//             "y": 900,
//             "renderX": 575,
//             "renderY": 900,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 550,
//                 "y": 825,
//                 "w": 50,
//                 "h": 150
//             },
//             "inView": true
//         },
//         {
//             "type": "turret",
//             "angle": 2.2686891733984527,
//             "shootSpeed": 0.8,
//             "timer": 0.3416666666666785,
//             "pRadius": 13,
//             "pSpeed": 120,
//             "projectiles": [
//                 {
//                     "x": 575,
//                     "y": 955,
//                     "angle": 1.5707963267948966
//                 }
//             ],
//             "shootDirections": [
//                 1.5707963267948966,
//                 -1.5707963267948966
//             ],
//             "csd": 1,
//             "deadProjectiles": [],
//             "radius": 22,
//             "speed": 0,
//             "x": 575,
//             "y": 900,
//             "renderX": 575,
//             "renderY": 900,
//             "xv": 0,
//             "yv": 0,
//             "bound": {
//                 "x": 550,
//                 "y": 825,
//                 "w": 50,
//                 "h": 150
//             },
//             "inView": true
//         },
//         {
//             "type": "normal",
//             "angle": 1.319735436713421,
//             "radius": 10,
//             "speed": 200,
//             "x": 7140.147420311733,
//             "y": 2378.6353930184055,
//             "renderX": 7140.147420311733,
//             "renderY": 2378.6353930184055,
//             "xv": 49.68634588293321,
//             "yv": -193.72988162078025,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 1.7869227499167477,
//             "radius": 10,
//             "speed": 200,
//             "x": 7233.120511649689,
//             "y": 2363.579085727101,
//             "renderX": 7233.120511649689,
//             "renderY": 2363.579085727101,
//             "xv": 42.889556303460914,
//             "yv": 195.34709099470166,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.2512519693793913,
//             "radius": 10,
//             "speed": 200,
//             "x": 7310.981728491864,
//             "y": 2382.6750387112193,
//             "renderX": 7310.981728491864,
//             "renderY": 2382.6750387112193,
//             "xv": 125.8294507955006,
//             "yv": -155.45722663325336,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 1.9751116168838199,
//             "radius": 10,
//             "speed": 200,
//             "x": 7296.702112820764,
//             "y": 2369.1783997149423,
//             "renderX": 7296.702112820764,
//             "renderY": 2369.1783997149423,
//             "xv": 78.67786990717535,
//             "yv": -183.87439404895287,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 1.1047936190470171,
//             "radius": 10,
//             "speed": 200,
//             "x": 7325.558944486523,
//             "y": 2380.4355219233958,
//             "renderX": 7325.558944486523,
//             "renderY": 2380.4355219233958,
//             "xv": -89.86376353545296,
//             "yv": 178.67429586609316,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.832142195266307,
//             "radius": 10,
//             "speed": 200,
//             "x": 7295.068474758822,
//             "y": 2382.1404305430883,
//             "renderX": 7295.068474758822,
//             "renderY": 2382.1404305430883,
//             "xv": 190.500213702259,
//             "yv": -60.90704868398774,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.537205384381146,
//             "radius": 10,
//             "speed": 200,
//             "x": 7301.894616022558,
//             "y": 2363.5093007953797,
//             "renderX": 7301.894616022558,
//             "renderY": 2363.5093007953797,
//             "xv": -164.5700882495928,
//             "yv": 113.65159943230556,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.306337836711427,
//             "radius": 10,
//             "speed": 200,
//             "x": 7309.04350699007,
//             "y": 2369.0387550939995,
//             "renderX": 7309.04350699007,
//             "renderY": 2369.0387550939995,
//             "xv": -197.29203551745215,
//             "yv": 32.80019392290836,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.0473012980952734,
//             "radius": 10,
//             "speed": 200,
//             "x": 7138.827716181974,
//             "y": 2381.464898593258,
//             "renderX": 7138.827716181974,
//             "renderY": 2381.464898593258,
//             "xv": 199.11157256093108,
//             "yv": 18.83033914492986,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 4.623207971523909,
//             "radius": 10,
//             "speed": 200,
//             "x": 7291.99027133162,
//             "y": 2375.554567889328,
//             "renderX": 7291.99027133162,
//             "renderY": 2375.554567889328,
//             "xv": -17.812568536583896,
//             "yv": -199.20520174465702,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.9322760141269684,
//             "radius": 10,
//             "speed": 200,
//             "x": 7323.953123113821,
//             "y": 2375.2527322489755,
//             "renderX": 7323.953123113821,
//             "renderY": 2375.2527322489755,
//             "xv": 140.67194479095718,
//             "yv": -142.1668173264419,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.4404882217594173,
//             "radius": 10,
//             "speed": 200,
//             "x": 7202.744962284636,
//             "y": 2375.549692289625,
//             "renderX": 7202.744962284636,
//             "renderY": 2375.549692289625,
//             "xv": 191.13245766736668,
//             "yv": 58.892984523050615,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 0.5494025119513166,
//             "radius": 10,
//             "speed": 200,
//             "x": 7300.778375507786,
//             "y": 2376.84398836712,
//             "renderX": 7300.778375507786,
//             "renderY": 2376.84398836712,
//             "xv": 170.56733384824216,
//             "yv": 104.43555249005152,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.5625789158421464,
//             "radius": 10,
//             "speed": 200,
//             "x": 7141.7596881662685,
//             "y": 2376.7527244223807,
//             "renderX": 7141.7596881662685,
//             "renderY": 2376.7527244223807,
//             "xv": -167.4005476661392,
//             "yv": 109.43973977069142,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.469290384392925,
//             "radius": 10,
//             "speed": 200,
//             "x": 7172.110989366463,
//             "y": 2371.243087693759,
//             "renderX": 7172.110989366463,
//             "renderY": 2371.243087693759,
//             "xv": 189.3571739862404,
//             "yv": -64.37282547740685,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 3.1824809113002472,
//             "radius": 10,
//             "speed": 200,
//             "x": 7280.006895047056,
//             "y": 2373.4301937844107,
//             "renderX": 7280.006895047056,
//             "renderY": 2373.4301937844107,
//             "xv": -199.83283832918522,
//             "yv": -8.175373098624606,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.486666406228374,
//             "radius": 10,
//             "speed": 200,
//             "x": 7309.710869951327,
//             "y": 2367.888373251771,
//             "renderX": 7309.710869951327,
//             "renderY": 2367.888373251771,
//             "xv": 158.61857060925144,
//             "yv": 121.82015045910062,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 0.17316839207376214,
//             "radius": 10,
//             "speed": 200,
//             "x": 7241.036496661739,
//             "y": 2383.467727826744,
//             "renderX": 7241.036496661739,
//             "renderY": 2383.467727826744,
//             "xv": 197.00875695954792,
//             "yv": 34.46084272407996,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 1.9238245090626769,
//             "radius": 10,
//             "speed": 200,
//             "x": 7146.732566212759,
//             "y": 2389.82886518822,
//             "renderX": 7146.732566212759,
//             "renderY": 2389.82886518822,
//             "xv": -69.14816454677717,
//             "yv": 187.66601008123936,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         },
//         {
//             "type": "normal",
//             "angle": 2.120637167835834,
//             "radius": 10,
//             "speed": 200,
//             "x": 7177.065997913263,
//             "y": 2371.501935128307,
//             "renderX": 7177.065997913263,
//             "renderY": 2371.501935128307,
//             "xv": -104.5103070790961,
//             "yv": -170.52154032330645,
//             "bound": {
//                 "x": 7100,
//                 "y": 2350,
//                 "w": 250,
//                 "h": 50
//             },
//             "isLava": false,
//             "inView": false
//         }
//     ]
    
//     const safes = [
//         {
//             "x": 3600,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "renderAbove": true
//         },
//         {
//             "x": 3900,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "renderAbove": true
//         },
//         {
//             "x": 6650,
//             "y": 0,
//             "w": 50,
//             "h": 50,
//             "renderAbove": true
//         },
//         {
//             "x": 7200,
//             "y": 2050,
//             "w": 200,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 7150,
//             "y": 2050,
//             "w": 25,
//             "h": 100,
//             "renderAbove": true
//         },
//         {
//             "x": 7350,
//             "y": 1875,
//             "w": 25,
//             "h": 150,
//             "renderAbove": true
//         },
//         {
//             "x": 7175,
//             "y": 1875,
//             "w": 150,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 7125,
//             "y": 1725,
//             "w": 25,
//             "h": 175,
//             "renderAbove": true
//         },
//         {
//             "x": 6950,
//             "y": 1675,
//             "w": 200,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 6825,
//             "y": 1800,
//             "w": 175,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 6775,
//             "y": 1800,
//             "w": 25,
//             "h": 150,
//             "renderAbove": true
//         },
//         {
//             "x": 7000,
//             "y": 1950,
//             "w": 25,
//             "h": 200,
//             "renderAbove": true
//         },
//         {
//             "x": 4962.5,
//             "y": 1900,
//             "w": 25,
//             "h": 250,
//             "renderAbove": true
//         },
//         {
//             "x": 4800,
//             "y": 1750,
//             "w": 25,
//             "h": 200,
//             "renderAbove": true
//         },
//         {
//             "x": 3975,
//             "y": 2000,
//             "w": 25,
//             "h": 150,
//             "renderAbove": true
//         },
//         {
//             "x": 3675,
//             "y": 2100,
//             "w": 275,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 3675,
//             "y": 2225,
//             "w": 25,
//             "h": 150,
//             "renderAbove": true
//         },
//         {
//             "x": 3725,
//             "y": 2350,
//             "w": 125,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 3825,
//             "y": 2250,
//             "w": 25,
//             "h": 75,
//             "renderAbove": true
//         },
//         {
//             "x": 3875,
//             "y": 2250,
//             "w": 100,
//             "h": 25,
//             "renderAbove": true
//         },
//         {
//             "x": 5100,
//             "y": 1650,
//             "w": 25,
//             "h": 300,
//             "renderAbove": true
//         },
//         {
//             "x": 4800,
//             "y": 2100,
//             "w": 25,
//             "h": 300,
//             "renderAbove": true
//         },
//         {
//             "x": 5125,
//             "y": 2100,
//             "w": 25,
//             "h": 200,
//             "renderAbove": true
//         },
//         {
//             "x": 5150,
//             "y": 1650,
//             "w": 50,
//             "h": 50,
//             "renderAbove": true
//         }
//     ]
    
//     const texts = [
//         {
//             "x": 4075,
//             "y": -25,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Speed Check!",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 7700,
//             "y": 1625,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Exit! > ",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 7125,
//             "y": 2225,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Bounce!",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 425,
//             "y": 725,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "< Button",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 175,
//             "y": -110,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Planet of Slight Hurdles (PoSH)",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 175,
//             "y": -75,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Creator: Smelty",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 175,
//             "y": -40,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Difficulty: Low Moderate",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 2575,
//             "y": 1625,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "Approaching the end...",
//             "angle": 0,
//             "story": false
//         },
//         {
//             "x": 175,
//             "y": 2025,
//             "w": 25,
//             "h": 25,
//             "size": 30,
//             "text": "v Need Coins? ",
//             "angle": 0,
//             "story": false
//         }
//     ]
    
//     const str = convertOldExMap(obs, enemies, safes, texts, counter, 'posh');
    
//     // eval(str);
//     console.log(str);

//     spawnPosition.x=50;
//     spawnPosition.y=50;
//     shared.respawnPlayer();
//     colors.background='#5260ab'; colors.tile='#323c81';

//     shared.C(0,[],[26],{
//         x: spawnPosition.x,
//         y: spawnPosition.y,
//         r: 50,
//         musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
//     });

//     mapDimensions.x=24000;
//     mapDimensions.y=12000;
// })();