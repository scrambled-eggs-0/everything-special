window.loadMap((shared)=>{
    let counter = 0;
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, input} = shared;
    let xv1 = 3.2659339287611293;
    let yv1 = 0.0691858661722495;
    C(0,[3],[1],{r:24,y:820.3316121975762,x:7263.399943828049,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv1;
    e.pos.x += xv1;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv1 = xv1 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv1 = yv1 * -1;
    }
    }});

    let xv2 = -2.1767613063399254;
    let yv2 = -2.4357383534223076;
    C(0,[3],[1],{r:24,y:1418.5651442735157,x:7640.61624505366,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv2;
    e.pos.x += xv2;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv2 = xv2 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv2 = yv2 * -1;
    }
    }});

    let xv3 = 0.6114316207020216;
    let yv3 = -3.2089347896641356;
    C(0,[3],[1],{r:24,y:907.9412036325774,x:6878.381248677553,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv3;
    e.pos.x += xv3;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv3 = xv3 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv3 = yv3 * -1;
    }
    }});

    

    let xv4 = 1.8402195365008984;
    let yv4 = 2.699018927053223;
    C(0,[3],[1],{r:24,y:629.2482506282865,x:6913.569900197379,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv4;
    e.pos.x += xv4;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv4 = xv4 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv4 = yv4 * -1;
    }
    }});

    

    let xv5 = -0.30387744682416956;
    let yv5 = -3.252502053561648;
    C(0,[3],[1],{r:24,y:1196.1004090664774,x:7665.562185525524,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv5;
    e.pos.x += xv5;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv5 = xv5 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv5 = yv5 * -1;
    }
    }});

    

    let xv6 = 1.1251968271437451;
    let yv6 = 3.0667642901430754;
    C(0,[3],[1],{r:24,y:587.8399768135812,x:6948.768100715658,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv6;
    e.pos.x += xv6;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv6 = xv6 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv6 = yv6 * -1;
    }
    }});

    

    let xv7 = 0.46115088362126605;
    let yv7 = -3.2339528403559687;
    C(0,[3],[1],{r:24,y:1295.6963118742717,x:7616.841286842626,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7;
    e.pos.x += xv7;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv7 = xv7 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv7 = yv7 * -1;
    }
    }});

    

    let xv8 = 1.2515362135363712;
    let yv8 = 3.017410846623004;
    C(0,[3],[1],{r:24,y:717.6297416921509,x:6876.504079443149,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv8;
    e.pos.x += xv8;
    if ((e.pos.x - e.sat.r) < 6800 || e.pos.x + e.sat.r > 7900) {
        xv8 = xv8 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv8 = yv8 * -1;
    }
    }});

    

    let xv9 = 0;
    let yv9 = 0;
    let shootDirectionIndex9 = 0;
    let timer9 = 11.666666666667135;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:49,y:550,x:7950,sf:(e)=>{
    e.pos.y += yv9;
    e.pos.x += xv9;
    if ((e.pos.x - e.sat.r) < 7900 || e.pos.x + e.sat.r > 8600) {
        xv9 = xv9 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv9 = yv9 * -1;
    }

    timer9--;
    if(timer9 < 0){
        timer9 = 66.66666666666667;

        shootDirectionIndex9++;
        const shootDirections = [0.6632251157578452];
        if(shootDirectionIndex9 >= shootDirections.length){
            shootDirectionIndex9 = 0;
        }
        let dir = shootDirections[shootDirectionIndex9];

        counter++;
        /*scoped using let*/
        let xv9 = Math.cos(dir) * 3.0303030303030303;
        let yv9 = Math.sin(dir) * 3.0303030303030303;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:40,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv9;
        e.pos.x += xv9;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7900 || e.pos.x + e.sat.r > 8600 || (e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
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
    

    let xv10 = 0;
    let yv10 = 0;
    let shootDirectionIndex10 = 0;
    let timer10 = 11.666666666667135;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:49,y:1550,x:8550,sf:(e)=>{
    e.pos.y += yv10;
    e.pos.x += xv10;
    if ((e.pos.x - e.sat.r) < 8500 || e.pos.x + e.sat.r > 9200) {
        xv10 = xv10 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv10 = yv10 * -1;
    }

    timer10--;
    if(timer10 < 0){
        timer10 = 66.66666666666667;

        shootDirectionIndex10++;
        const shootDirections = [-0.6632251157578452];
        if(shootDirectionIndex10 >= shootDirections.length){
            shootDirectionIndex10 = 0;
        }
        let dir = shootDirections[shootDirectionIndex10];

        counter++;
        /*scoped using let*/
        let xv10 = Math.cos(dir) * 3.0303030303030303;
        let yv10 = Math.sin(dir) * 3.0303030303030303;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:40,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv10;
        e.pos.x += xv10;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 8500 || e.pos.x + e.sat.r > 9200 || (e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
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
    

    let xv11 = 0;
    let yv11 = 0;
    let shootDirectionIndex11 = 0;
    let timer11 = 11.666666666667135;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:49,y:550,x:9150,sf:(e)=>{
    e.pos.y += yv11;
    e.pos.x += xv11;
    if ((e.pos.x - e.sat.r) < 9100 || e.pos.x + e.sat.r > 9800) {
        xv11 = xv11 * -1;
    }
    if ((e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
        yv11 = yv11 * -1;
    }

    timer11--;
    if(timer11 < 0){
        timer11 = 66.66666666666667;

        shootDirectionIndex11++;
        const shootDirections = [0.6632251157578452];
        if(shootDirectionIndex11 >= shootDirections.length){
            shootDirectionIndex11 = 0;
        }
        let dir = shootDirections[shootDirectionIndex11];

        counter++;
        /*scoped using let*/
        let xv11 = Math.cos(dir) * 3.0303030303030303;
        let yv11 = Math.sin(dir) * 3.0303030303030303;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:40,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv11;
        e.pos.x += xv11;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 9100 || e.pos.x + e.sat.r > 9800 || (e.pos.y - e.sat.r) < 500 || e.pos.y + e.sat.r > 1600) {
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
    

    let xv12 = -1.3340157238400656;
    let yv12 = 2.860474805176138;
    C(1,[3],[1],{w:168,h:168,y:10087.455394900857,x:2437.301931826553,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv12;
    e.pos.x += xv12;
    if ((e.pos.x) < 1800) {
        xv12 = xv12 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv12 = xv12 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv12 = yv12 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv12 = yv12 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv13 = -0.5589273095923527;
    let yv13 = -3.106366740275825;
    C(1,[3],[1],{w:168,h:168,y:9811.139007847976,x:2641.8605511699006,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv13;
    e.pos.x += xv13;
    if ((e.pos.x) < 1800) {
        xv13 = xv13 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv13 = xv13 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv13 = yv13 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv13 = yv13 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv14 = -2.9852024005860436;
    let yv14 = 1.024929602477811;
    C(1,[3],[1],{w:168,h:168,y:10425.689250362333,x:2790.0635914241884,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv14;
    e.pos.x += xv14;
    if ((e.pos.x) < 1800) {
        xv14 = xv14 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv14 = xv14 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv14 = yv14 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv14 = yv14 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv15 = 1.4589784924056355;
    let yv15 = -2.7988025691709266;
    C(1,[3],[1],{w:168,h:168,y:10825.483037785752,x:4367.281805482709,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv15;
    e.pos.x += xv15;
    if ((e.pos.x) < 1800) {
        xv15 = xv15 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv15 = xv15 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv15 = yv15 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv15 = yv15 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv16 = 2.7937001891604183;
    let yv16 = 1.468725064668348;
    C(1,[3],[1],{w:168,h:168,y:10295.539108247569,x:3010.2882426252645,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv16;
    e.pos.x += xv16;
    if ((e.pos.x) < 1800) {
        xv16 = xv16 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv16 = xv16 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv16 = yv16 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv16 = yv16 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv17 = -1.2961035967857797;
    let yv17 = 2.877851547404585;
    C(1,[3],[1],{w:168,h:168,y:10105.045555906026,x:2239.8619489239013,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv17;
    e.pos.x += xv17;
    if ((e.pos.x) < 1800) {
        xv17 = xv17 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv17 = xv17 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv17 = yv17 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv17 = yv17 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv18 = -2.865009331406986;
    let yv18 = 1.3242490677553433;
    C(1,[3],[1],{w:168,h:168,y:10730.431992795126,x:3274.563924041415,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv18;
    e.pos.x += xv18;
    if ((e.pos.x) < 1800) {
        xv18 = xv18 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv18 = xv18 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv18 = yv18 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv18 = yv18 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv19 = -2.561057663512476;
    let yv19 = -1.8446944751540881;
    C(1,[3],[1],{w:168,h:168,y:10836.237453252124,x:2461.3300125777214,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv19;
    e.pos.x += xv19;
    if ((e.pos.x) < 1800) {
        xv19 = xv19 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv19 = xv19 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv19 = yv19 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv19 = yv19 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv20 = -2.3101611693764657;
    let yv20 = -2.1505974597783664;
    C(1,[3],[1],{w:168,h:168,y:9856.619029569045,x:3036.9216012162706,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv20;
    e.pos.x += xv20;
    if ((e.pos.x) < 1800) {
        xv20 = xv20 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv20 = xv20 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv20 = yv20 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv20 = yv20 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv21 = 2.112311687112648;
    let yv21 = -2.3452192645864303;
    C(1,[3],[1],{w:168,h:168,y:9817.608225227976,x:2678.657744930741,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv21;
    e.pos.x += xv21;
    if ((e.pos.x) < 1800) {
        xv21 = xv21 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv21 = xv21 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv21 = yv21 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv21 = yv21 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv22 = 2.3644362194664956;
    let yv22 = 2.0907786651329174;
    C(1,[3],[1],{w:168,h:168,y:9723.252120930703,x:2966.7857406630637,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv22;
    e.pos.x += xv22;
    if ((e.pos.x) < 1800) {
        xv22 = xv22 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv22 = xv22 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv22 = yv22 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv22 = yv22 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv23 = 3.1555592547842672;
    let yv23 = 0.06602917571316483;
    C(1,[3],[1],{w:168,h:168,y:10198.841543950879,x:3786.3482824899284,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv23;
    e.pos.x += xv23;
    if ((e.pos.x) < 1800) {
        xv23 = xv23 * -1;
        e.pos.x = 1800;
    } else if(e.pos.x + 168 > 4600){
        xv23 = xv23 * -1;
        e.pos.x = 4600 - 168;
    }
    if ((e.pos.y) < 9300) {
        yv23 = yv23 * -1;
        e.pos.y = 9300;
    } else if(e.pos.y + 168 > 11100){
        yv23 = yv23 * -1;
        e.pos.y = 11100 - 168;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 168, 168);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv24 = -2.7074690169916855;
    let yv24 = 1.44015831299011;
    C(0,[3],[1],{r:24,y:8331.744829169862,x:16201.291437542506,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv24;
    e.pos.x += xv24;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv24 = xv24 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv24 = yv24 * -1;
    }
    }});

    

    let xv25 = -1.7588675102751756;
    let yv25 = -2.512136446481928;
    C(0,[3],[1],{r:24,y:8409.280125165189,x:17079.74375454268,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv25;
    e.pos.x += xv25;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv25 = xv25 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv25 = yv25 * -1;
    }
    }});

    

    let xv26 = 1.7534669975245942;
    let yv26 = -2.5159089675575563;
    C(0,[3],[1],{r:24,y:8425.735277784974,x:16324.04473548641,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv26;
    e.pos.x += xv26;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv26 = xv26 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv26 = yv26 * -1;
    }
    }});

    

    let xv27 = -2.9196442138136063;
    let yv27 = -0.9381482341235704;
    C(0,[3],[1],{r:24,y:8697.828298126542,x:17768.405694443692,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv27;
    e.pos.x += xv27;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv27 = xv27 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv27 = yv27 * -1;
    }
    }});

    

    let xv28 = -2.905930463715769;
    let yv28 = -0.9798023190894691;
    C(0,[3],[1],{r:24,y:8724.770950333146,x:15656.021475108966,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv28;
    e.pos.x += xv28;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv28 = xv28 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv28 = yv28 * -1;
    }
    }});

    

    let xv29 = -2.906942875018693;
    let yv29 = 0.9767945361346471;
    C(0,[3],[1],{r:24,y:8413.997362547098,x:15843.606892680527,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv29;
    e.pos.x += xv29;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv29 = xv29 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv29 = yv29 * -1;
    }
    }});

    

    let xv30 = -1.799925549443795;
    let yv30 = 2.482883900004971;
    C(0,[3],[1],{r:24,y:8570.740957051556,x:16438.930487502974,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv30;
    e.pos.x += xv30;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv30 = xv30 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv30 = yv30 * -1;
    }
    }});

    

    let xv31 = 2.2573108561469746;
    let yv31 = 2.075811201233257;
    C(0,[3],[1],{r:24,y:8452.044686905156,x:16796.36879559271,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv31;
    e.pos.x += xv31;
    if ((e.pos.x - e.sat.r) < 15600 || e.pos.x + e.sat.r > 17800) {
        xv31 = xv31 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8300 || e.pos.y + e.sat.r > 8800) {
        yv31 = yv31 * -1;
    }
    }});

    

    let xv32 = 1.1595365169373066;
    let yv32 = 2.6989593023772884;
    C(1,[3],[1],{w:96,h:96,y:5862.905423278686,x:16326.48555059883,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv32;
    e.pos.x += xv32;
    if ((e.pos.x) < 15600) {
        xv32 = xv32 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv32 = xv32 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv32 = yv32 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv32 = yv32 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv33 = 2.8166138684868254;
    let yv33 = 0.8340219216829255;
    C(1,[3],[1],{w:96,h:96,y:5762.300775391415,x:16018.296937754487,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv33;
    e.pos.x += xv33;
    if ((e.pos.x) < 15600) {
        xv33 = xv33 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv33 = xv33 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv33 = yv33 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv33 = yv33 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv34 = 2.9202560063640433;
    let yv34 = 0.31782244617825334;
    C(1,[3],[1],{w:96,h:96,y:5764.824844490929,x:15819.567823579759,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv34;
    e.pos.x += xv34;
    if ((e.pos.x) < 15600) {
        xv34 = xv34 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv34 = xv34 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv34 = yv34 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv34 = yv34 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv35 = -2.925917326917187;
    let yv35 = -0.2606032349104308;
    C(1,[3],[1],{w:96,h:96,y:6026.168506991396,x:15833.959311602262,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv35;
    e.pos.x += xv35;
    if ((e.pos.x) < 15600) {
        xv35 = xv35 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv35 = xv35 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv35 = yv35 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv35 = yv35 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv36 = -0.1392055006798426;
    let yv36 = 2.9341997339275445;
    C(1,[3],[1],{w:96,h:96,y:5715.658443779817,x:17679.195037302197,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv36;
    e.pos.x += xv36;
    if ((e.pos.x) < 15600) {
        xv36 = xv36 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv36 = xv36 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv36 = yv36 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv36 = yv36 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv37 = 0.5366578255824691;
    let yv37 = 2.8880624349624258;
    C(1,[3],[1],{w:96,h:96,y:5659.505671591635,x:17124.41213821545,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv37;
    e.pos.x += xv37;
    if ((e.pos.x) < 15600) {
        xv37 = xv37 * -1;
        e.pos.x = 15600;
    } else if(e.pos.x + 96 > 17800){
        xv37 = xv37 * -1;
        e.pos.x = 17800 - 96;
    }
    if ((e.pos.y) < 5600) {
        yv37 = yv37 * -1;
        e.pos.y = 5600;
    } else if(e.pos.y + 96 > 6100){
        yv37 = yv37 * -1;
        e.pos.y = 6100 - 96;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 96, 96);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    let xv38 = 2.7448085231828925;
    let yv38 = 0.4881539787475334;
    let base38;
    
    C(0,[3],[1],{r:24,y:7861.888959726888,x:17832.3989992677,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv38;
        e.pos.x += xv38;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv38 = xv38 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv38 = yv38 * -1;
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

    base38 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base38.pos.x,"y":base38.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv38, xv38);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base38.pos.x;
        o.pos.y = base38.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv39 = -2.44769906139887;
    let yv39 = 1.3345551471301556;
    let base39;
    
    C(0,[3],[1],{r:24,y:7671.150366024887,x:17923.43395779396,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv39;
        e.pos.x += xv39;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv39 = xv39 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv39 = yv39 * -1;
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

    base39 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base39.pos.x,"y":base39.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv39, xv39);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base39.pos.x;
        o.pos.y = base39.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv40 = -0.40784576656965577;
    let yv40 = -2.7578850531876253;
    let base40;
    
    C(0,[3],[1],{r:24,y:7523.7106777916715,x:18122.285874448255,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv40;
        e.pos.x += xv40;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv40 = xv40 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv40 = yv40 * -1;
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

    base40 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base40.pos.x,"y":base40.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv40, xv40);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base40.pos.x;
        o.pos.y = base40.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv41 = -2.7761796779947043;
    let yv41 = -0.25513629963946466;
    let base41;
    
    C(0,[3],[1],{r:24,y:7911.073853827204,x:17883.469864047907,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv41;
        e.pos.x += xv41;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv41 = xv41 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv41 = yv41 * -1;
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

    base41 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base41.pos.x,"y":base41.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv41, xv41);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base41.pos.x;
        o.pos.y = base41.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv42 = -2.784729674288023;
    let yv42 = 0.1324717971653631;
    let base42;
    
    C(0,[3],[1],{r:24,y:7903.6719210334095,x:18101.618518217634,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv42;
        e.pos.x += xv42;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv42 = xv42 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv42 = yv42 * -1;
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

    base42 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base42.pos.x,"y":base42.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv42, xv42);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base42.pos.x;
        o.pos.y = base42.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv43 = 1.0650262262258472;
    let yv43 = -2.5764291710341327;
    let base43;
    
    C(0,[3],[1],{r:24,y:6893.4474799079135,x:18069.741063603477,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv43;
        e.pos.x += xv43;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv43 = xv43 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv43 = yv43 * -1;
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

    base43 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base43.pos.x,"y":base43.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv43, xv43);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base43.pos.x;
        o.pos.y = base43.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv44 = -2.7637284401810964;
    let yv44 = -0.36616013551267834;
    let base44;
    
    C(0,[3],[1],{r:24,y:8219.06316695792,x:17887.078524121087,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv44;
        e.pos.x += xv44;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv44 = xv44 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv44 = yv44 * -1;
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

    base44 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base44.pos.x,"y":base44.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv44, xv44);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base44.pos.x;
        o.pos.y = base44.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv45 = 2.6737232120543744;
    let yv45 = -0.7896026350172214;
    let base45;
    
    C(0,[3],[1],{r:24,y:6942.323493056643,x:17966.378620868694,boundPlayer:false,sf:(e)=>{
        e.pos.y += yv45;
        e.pos.x += xv45;
        if ((e.pos.x - e.sat.r) < 17800 || e.pos.x + e.sat.r > 18300) {
            xv45 = xv45 * -1;
        }
        if ((e.pos.y - e.sat.r) < 6100 || e.pos.y + e.sat.r > 8300) {
            yv45 = yv45 * -1;
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

    base45 = obstacles[obstacles.length-1];

    {let overrideAngle=undefined;let angle=0;C(4,[],[1],{"r":172.8*2/3,boundPlayer:false,"innerRadius":0,"startSliceAngle":0,"endSliceAngle":0,"startSliceAngleRotateSpeed":0,"endSliceAngleRotateSpeed":0,"x":base45.pos.x,"y":base45.pos.y,sf:(o,p)=>{
        angle = Math.atan2(yv45, xv45);

        if(overrideAngle !== undefined) angle = overrideAngle;

        o.startSliceAngle = angle - 0.5934119456780721;
        o.endSliceAngle = angle + 0.5934119456780721;

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

        o.pos.x = base45.pos.x;
        o.pos.y = base45.pos.y;
    },cr:(o)=>{
        const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, 0, o.pos.x, o.pos.y, 129.60000000000002);
            
        grd.addColorStop(0, "rgba(230, 230, 21, 0.8)");
        grd.addColorStop(1, "rgba(230, 230, 21, 0.0)");
        ctx.fillStyle = grd;

        ctx.beginPath();
        if((o.startSliceAngle - o.endSliceAngle) %(Math.PI*2) === 0) ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.startSliceAngle + Math.PI*2);
        else ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
        ctx.lineTo(o.pos.x, o.pos.y);
        ctx.fill();
        ctx.closePath();

        // const minX = 17550; const minY = 3850;
        // const maxX = 18650; const maxY = 4650

        if(!(false && o.pos.x > 17550 && o.pos.x < 18650 && o.pos.y > 3850 && o.pos.y < 4650)){
            if(Math.abs((o.startSliceAngle - o.endSliceAngle)%(Math.PI*2)) > 0.01){
                shared.colors.vignette.holeFunctions.push(()=>{
                    ctx.moveTo(o.pos.x,o.pos.y);
                    ctx.arc(o.pos.x, o.pos.y, 129.60000000000002, o.startSliceAngle, o.endSliceAngle);
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


    let xv46 = -7.784379940951872;
    let yv46 = -4.021741412820502;
    let switchTime46 = 119.21239900091358;
    let switchState46 = true;
    let pos46 = {
        x: 15166.30374496307, y: 6215.583912007705 
    }
    C(0,[3],[1],{r:24,y:6215.583912007705,x:15166.30374496307,sf:(e)=>{
        pos46.y += yv46;
        pos46.x += xv46;
        if ((pos46.x - e.sat.r) < 15100 || pos46.x + e.sat.r > 15600) {
            xv46 = xv46 * -1;
        }
        if ((pos46.y - e.sat.r) < 6100 || pos46.y + e.sat.r > 8300) {
            yv46 = yv46 * -1;
        }

        if(switchState46 === true){
            e.pos.x = pos46.x;
            e.pos.y = pos46.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime46--;
        if(switchTime46 <= 0){
            switchTime46 = 150;
            switchState46 = !switchState46;
            if(switchState46 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos46.x;
                e.pos.y = pos46.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState46 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos46.x, pos46.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv47 = -8.402760707811272;
    let yv47 = 2.482858744260806;
    let switchTime47 = 41.40495494591001;
    let switchState47 = true;
    let pos47 = {
        x: 15295.674321553033, y: 7767.85572952117 
    }
    C(0,[3],[1],{r:24,y:7767.85572952117,x:15295.674321553033,sf:(e)=>{
        pos47.y += yv47;
        pos47.x += xv47;
        if ((pos47.x - e.sat.r) < 15100 || pos47.x + e.sat.r > 15600) {
            xv47 = xv47 * -1;
        }
        if ((pos47.y - e.sat.r) < 6100 || pos47.y + e.sat.r > 8300) {
            yv47 = yv47 * -1;
        }

        if(switchState47 === true){
            e.pos.x = pos47.x;
            e.pos.y = pos47.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime47--;
        if(switchTime47 <= 0){
            switchTime47 = 150;
            switchState47 = !switchState47;
            if(switchState47 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos47.x;
                e.pos.y = pos47.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState47 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos47.x, pos47.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv48 = 4.64976270094118;
    let yv48 = 7.4263505089394695;
    let switchTime48 = 170.2152672715116;
    let switchState48 = true;
    let pos48 = {
        x: 15308.427239111877, y: 7008.381686693859 
    }
    C(0,[3],[1],{r:24,y:7008.381686693859,x:15308.427239111877,sf:(e)=>{
        pos48.y += yv48;
        pos48.x += xv48;
        if ((pos48.x - e.sat.r) < 15100 || pos48.x + e.sat.r > 15600) {
            xv48 = xv48 * -1;
        }
        if ((pos48.y - e.sat.r) < 6100 || pos48.y + e.sat.r > 8300) {
            yv48 = yv48 * -1;
        }

        if(switchState48 === true){
            e.pos.x = pos48.x;
            e.pos.y = pos48.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime48--;
        if(switchTime48 <= 0){
            switchTime48 = 150;
            switchState48 = !switchState48;
            if(switchState48 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos48.x;
                e.pos.y = pos48.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState48 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos48.x, pos48.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv49 = 7.828362177354255;
    let yv49 = -3.9354441524253265;
    let switchTime49 = 298.6280071671223;
    let switchState49 = true;
    let pos49 = {
        x: 15194.000009069672, y: 7041.952466853323 
    }
    C(0,[3],[1],{r:24,y:7041.952466853323,x:15194.000009069672,sf:(e)=>{
        pos49.y += yv49;
        pos49.x += xv49;
        if ((pos49.x - e.sat.r) < 15100 || pos49.x + e.sat.r > 15600) {
            xv49 = xv49 * -1;
        }
        if ((pos49.y - e.sat.r) < 6100 || pos49.y + e.sat.r > 8300) {
            yv49 = yv49 * -1;
        }

        if(switchState49 === true){
            e.pos.x = pos49.x;
            e.pos.y = pos49.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime49--;
        if(switchTime49 <= 0){
            switchTime49 = 150;
            switchState49 = !switchState49;
            if(switchState49 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos49.x;
                e.pos.y = pos49.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState49 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos49.x, pos49.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv50 = 8.524450600937021;
    let yv50 = 2.0260101206247256;
    let switchTime50 = 243.440924606735;
    let switchState50 = true;
    let pos50 = {
        x: 15161.766882379921, y: 6524.37790053833 
    }
    C(0,[3],[1],{r:24,y:6524.37790053833,x:15161.766882379921,sf:(e)=>{
        pos50.y += yv50;
        pos50.x += xv50;
        if ((pos50.x - e.sat.r) < 15100 || pos50.x + e.sat.r > 15600) {
            xv50 = xv50 * -1;
        }
        if ((pos50.y - e.sat.r) < 6100 || pos50.y + e.sat.r > 8300) {
            yv50 = yv50 * -1;
        }

        if(switchState50 === true){
            e.pos.x = pos50.x;
            e.pos.y = pos50.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime50--;
        if(switchTime50 <= 0){
            switchTime50 = 150;
            switchState50 = !switchState50;
            if(switchState50 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos50.x;
                e.pos.y = pos50.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState50 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos50.x, pos50.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv51 = -8.167464434422183;
    let yv51 = 3.1723019668906183;
    let switchTime51 = 101.62315627663125;
    let switchState51 = true;
    let pos51 = {
        x: 15445.398159936047, y: 7260.670179404405 
    }
    C(0,[3],[1],{r:24,y:7260.670179404405,x:15445.398159936047,sf:(e)=>{
        pos51.y += yv51;
        pos51.x += xv51;
        if ((pos51.x - e.sat.r) < 15100 || pos51.x + e.sat.r > 15600) {
            xv51 = xv51 * -1;
        }
        if ((pos51.y - e.sat.r) < 6100 || pos51.y + e.sat.r > 8300) {
            yv51 = yv51 * -1;
        }

        if(switchState51 === true){
            e.pos.x = pos51.x;
            e.pos.y = pos51.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime51--;
        if(switchTime51 <= 0){
            switchTime51 = 150;
            switchState51 = !switchState51;
            if(switchState51 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos51.x;
                e.pos.y = pos51.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState51 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos51.x, pos51.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv52 = 4.928059448487782;
    let yv52 = -7.24466735805445;
    let switchTime52 = 83.13542157133745;
    let switchState52 = true;
    let pos52 = {
        x: 15474.314120455147, y: 7373.658050906926 
    }
    C(0,[3],[1],{r:24,y:7373.658050906926,x:15474.314120455147,sf:(e)=>{
        pos52.y += yv52;
        pos52.x += xv52;
        if ((pos52.x - e.sat.r) < 15100 || pos52.x + e.sat.r > 15600) {
            xv52 = xv52 * -1;
        }
        if ((pos52.y - e.sat.r) < 6100 || pos52.y + e.sat.r > 8300) {
            yv52 = yv52 * -1;
        }

        if(switchState52 === true){
            e.pos.x = pos52.x;
            e.pos.y = pos52.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime52--;
        if(switchTime52 <= 0){
            switchTime52 = 150;
            switchState52 = !switchState52;
            if(switchState52 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos52.x;
                e.pos.y = pos52.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState52 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos52.x, pos52.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv53 = -2.680399230506818;
    let yv53 = 8.341848417574358;
    let switchTime53 = 39.43877916974357;
    let switchState53 = true;
    let pos53 = {
        x: 15273.831780287026, y: 8091.595424448941 
    }
    C(0,[3],[1],{r:24,y:8091.595424448941,x:15273.831780287026,sf:(e)=>{
        pos53.y += yv53;
        pos53.x += xv53;
        if ((pos53.x - e.sat.r) < 15100 || pos53.x + e.sat.r > 15600) {
            xv53 = xv53 * -1;
        }
        if ((pos53.y - e.sat.r) < 6100 || pos53.y + e.sat.r > 8300) {
            yv53 = yv53 * -1;
        }

        if(switchState53 === true){
            e.pos.x = pos53.x;
            e.pos.y = pos53.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime53--;
        if(switchTime53 <= 0){
            switchTime53 = 150;
            switchState53 = !switchState53;
            if(switchState53 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos53.x;
                e.pos.y = pos53.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState53 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos53.x, pos53.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv54 = 6.988814364089137;
    let yv54 = 5.284642735416529;
    let switchTime54 = 296.86473375491846;
    let switchState54 = true;
    let pos54 = {
        x: 15351.671818732562, y: 7255.4214200538145 
    }
    C(0,[3],[1],{r:24,y:7255.4214200538145,x:15351.671818732562,sf:(e)=>{
        pos54.y += yv54;
        pos54.x += xv54;
        if ((pos54.x - e.sat.r) < 15100 || pos54.x + e.sat.r > 15600) {
            xv54 = xv54 * -1;
        }
        if ((pos54.y - e.sat.r) < 6100 || pos54.y + e.sat.r > 8300) {
            yv54 = yv54 * -1;
        }

        if(switchState54 === true){
            e.pos.x = pos54.x;
            e.pos.y = pos54.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime54--;
        if(switchTime54 <= 0){
            switchTime54 = 150;
            switchState54 = !switchState54;
            if(switchState54 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos54.x;
                e.pos.y = pos54.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState54 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos54.x, pos54.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv55 = -1.1299752333182238;
    let yv55 = -8.68873587058421;
    let switchTime55 = 92.98240817258869;
    let switchState55 = true;
    let pos55 = {
        x: 15148.046299684032, y: 7298.686931348475 
    }
    C(0,[3],[1],{r:24,y:7298.686931348475,x:15148.046299684032,sf:(e)=>{
        pos55.y += yv55;
        pos55.x += xv55;
        if ((pos55.x - e.sat.r) < 15100 || pos55.x + e.sat.r > 15600) {
            xv55 = xv55 * -1;
        }
        if ((pos55.y - e.sat.r) < 6100 || pos55.y + e.sat.r > 8300) {
            yv55 = yv55 * -1;
        }

        if(switchState55 === true){
            e.pos.x = pos55.x;
            e.pos.y = pos55.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime55--;
        if(switchTime55 <= 0){
            switchTime55 = 150;
            switchState55 = !switchState55;
            if(switchState55 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos55.x;
                e.pos.y = pos55.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState55 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos55.x, pos55.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv56 = -1.133385492408891;
    let yv56 = -8.68829168377112;
    let switchTime56 = 71.2688884035446;
    let switchState56 = true;
    let pos56 = {
        x: 15293.557524300373, y: 6970.750594423338 
    }
    C(0,[3],[1],{r:24,y:6970.750594423338,x:15293.557524300373,sf:(e)=>{
        pos56.y += yv56;
        pos56.x += xv56;
        if ((pos56.x - e.sat.r) < 15100 || pos56.x + e.sat.r > 15600) {
            xv56 = xv56 * -1;
        }
        if ((pos56.y - e.sat.r) < 6100 || pos56.y + e.sat.r > 8300) {
            yv56 = yv56 * -1;
        }

        if(switchState56 === true){
            e.pos.x = pos56.x;
            e.pos.y = pos56.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime56--;
        if(switchTime56 <= 0){
            switchTime56 = 150;
            switchState56 = !switchState56;
            if(switchState56 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos56.x;
                e.pos.y = pos56.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState56 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos56.x, pos56.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    let xv57 = -0.4127532743437474;
    let yv57 = -8.752177431428585;
    let switchTime57 = 148.91721186356486;
    let switchState57 = true;
    let pos57 = {
        x: 15458.84213695403, y: 7703.594169640142 
    }
    C(0,[3],[1],{r:24,y:7703.594169640142,x:15458.84213695403,sf:(e)=>{
        pos57.y += yv57;
        pos57.x += xv57;
        if ((pos57.x - e.sat.r) < 15100 || pos57.x + e.sat.r > 15600) {
            xv57 = xv57 * -1;
        }
        if ((pos57.y - e.sat.r) < 6100 || pos57.y + e.sat.r > 8300) {
            yv57 = yv57 * -1;
        }

        if(switchState57 === true){
            e.pos.x = pos57.x;
            e.pos.y = pos57.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime57--;
        if(switchTime57 <= 0){
            switchTime57 = 150;
            switchState57 = !switchState57;
            if(switchState57 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos57.x;
                e.pos.y = pos57.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState57 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos57.x, pos57.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    C(1,[],[3],{x:6600,y:2400,w:4300,h:20,cr:()=>{},ef:(p)=>{
        p.touchingNormalIndexes.length = 0;
        p.lastTouchingNormalIndexes.length = 0;
        obstacles[140].canJump = false;
        obstacles[140].midairStoredJump = false;
    }})
C(1,[],[13],{type:[1,[],[13]],x:8600,y:2300,w:100,h:100,force:3000,dir:{"x":0,"y":3000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.1248499399759906,})
C(1,[],[3],{x:6600,y:2400,w:4300,h:20,cr:()=>{},ef:(p)=>{
        p.touchingNormalIndexes.length = 0;
        p.lastTouchingNormalIndexes.length = 0;
        obstacles[140].canJump = false;
        obstacles[140].midairStoredJump = false;
    }})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:1900,w:2200,h:500,canJump:true,inView:false,})
C(1,[],[14],{type:[1,[],[14]],x:4800,y:5100,w:1600,h:1200,force:2450,dir:{"x":0,"y":2450},direction:"down",jumpHeight:128,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.5294117647058824,jumpForce:37.12,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[17],{type:[1,[],[17]],x:4800,y:5100,w:1600,h:1200,time:0,maxTime:8,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:480,})
C(1,[],[12],{type:[1,[],[12]],x:4800,y:5100,w:1600,h:100,tpx:900,tpy:10200,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5800,y:5100,w:700,h:1200,points:[[2900,2550],[3150,2550]],speed:150,currentPoint:1.5899999999999999,collidable:true,pointOn:{"x":3150,"y":2550},pointTo:{"x":2900,"y":2550},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[5800,5100,5],[6300,5100,5]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4300,y:5100,w:600,h:1200,points:[[2150,2550],[2400,2550]],speed:150,currentPoint:1.5899999999999999,collidable:true,pointOn:{"x":2400,"y":2550},pointTo:{"x":2150,"y":2550},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[4300,5100,5],[4800,5100,5]],boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:100,y:2000,w:6500,h:1600,force:2875,dir:{"x":-2875,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.036314525810324,})
C(1,[],[15],{type:[1,[],[15]],x:100,y:2000,w:6500,h:1600,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[14],{type:[1,[],[14]],x:21900,y:7400,w:2000,h:4600,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:200,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:58,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[7],{type:[1,[],[7]],x:15200,y:3200,w:800,h:800,id:-100000,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[15],{type:[1,[],[15]],x:18300,y:0,w:5600,h:1200,rx:true,ry:false,inView:false,axisSpeedMultY:1,axisSpeedMultX:0,})
C(1,[],[17],{type:[1,[],[17]],x:18300,y:0,w:5600,h:1200,time:0,maxTime:15,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:900,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:400,w:400,h:400,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:18300,y:0,w:1000,h:1200,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:20500,y:0,w:3500,h:1200,force:5200,dir:{"x":5200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.683073229291717,})
C(1,[],[13],{type:[1,[],[13]],x:0,y:5100,w:1800,h:4200,force:3376.5,dir:{"x":0,"y":3376.5},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.391518607442977,})
C(1,[],[10],{type:[1,[],[10]],x:750,y:5200,w:200,h:200,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[12],{type:[1,[],[12]],x:23900,y:300,w:100,h:600,tpx:16700,tpy:7200,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:20300,y:500,w:200,h:200,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19500,y:0,w:800,h:400,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:300,w:200,h:100,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:800,w:200,h:100,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:400,w:400,h:400,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19500,y:800,w:800,h:400,force:3800,dir:{"x":3800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.6914765906362543,})
C(1,[],[13],{type:[1,[],[13]],x:19100,y:3300,w:200,h:600,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:18500,y:3100,w:200,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[20],{h:600,w:200,y:3300,x:19100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:200,y:3100,x:18500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[13],{type:[1,[],[13]],x:21900,y:3100,w:2000,h:1000,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:3100,w:1000,h:1000,force:4600,dir:{"x":4600,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.2581032412965185,})
C(1,[],[20],{h:1100,w:1100,y:500,x:6800,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 0.15;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[20],{h:500,w:200,y:3100,x:5000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:200,y:2000,x:5000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:750,w:200,y:2000,x:3800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:750,w:200,y:2850,x:3800,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:200,y:3200,x:4400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:200,y:2700,x:4400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:200,y:2200,x:4400,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:3450,y:3600,w:2250,h:1100,canJump:true,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:15100,y:5600,w:500,h:500,id:10,active:true,inView:false,color:"#00FF00",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:17800,y:8300,w:500,h:500,id:8,active:true,inView:false,color:"#00FF00",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:17800,y:5600,w:500,h:500,id:9,active:true,inView:false,color:"#00FF00",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15100,y:8300,w:500,h:500,id:7,active:true,inView:false,color:"#00FF00",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:6000,w:2050,h:5300,force:3500,dir:{"x":0,"y":3500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.478991596638655,})
C(1,[],[15],{type:[1,[],[15]],x:19900,y:6000,w:1850,h:5300,rx:false,ry:true,inView:false,axisSpeedMultY:0,axisSpeedMultX:1,})
C(1,[],[9],{type:[1,[],[9]],x:19900,y:6000,w:1800,h:400,spawn:{"x":10400,"y":3100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:20800,y:11300,w:1100,h:600,force:3750,dir:{"x":0,"y":3750},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.656062424969988,})
C(1,[],[14],{type:[1,[],[14]],x:19900,y:11300,w:900,h:600,force:2800,dir:{"x":0,"y":2800},direction:"down",jumpHeight:170,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.6050420168067228,jumpForce:49.3,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[7],{type:[1,[],[7]],x:16600,y:7100,w:200,h:200,id:-100,active:true,inView:false,color:"#00FF00",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:16100,y:3100,w:2400,h:1000,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[17],{type:[1,[],[17]],x:15100,y:0,w:1200,h:1200,time:0,maxTime:11,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:660,})
C(1,[],[14],{type:[1,[],[14]],x:8400,y:5100,w:3600,h:3300,force:2200,dir:{"x":0,"y":2200},direction:"down",jumpHeight:160,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.475390156062425,jumpForce:46.4,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:6800,w:3600,h:700,canJump:false,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:4800,y:9000,w:400,h:300,force:1750,dir:{"x":0,"y":-1750},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(4,[],[0],{type:[4,[],[0]],x:5100,y:9000,radius:300,startAngle:1.5707963267948966,endAngle:3.141592653589793,startPolygon:{"points":[[2550,4650],[2550,4800]],"type":"poly","props":{}},endPolygon:{"points":[[2400,4500],[2250,4500]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:1.5707963267948966,endSliceAngle:3.141592653589793,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:8300,y:9900,w:2100,h:2000,force:4444,dir:{"x":0,"y":4444},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.147611044417767,})
C(1,[],[13],{type:[1,[],[13]],x:7300,y:8400,w:400,h:600,force:1750,dir:{"x":0,"y":1750},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(1,[],[13],{type:[1,[],[13]],x:4800,y:8600,w:400,h:400,force:4000,dir:{"x":0,"y":-4000},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:2.833133253301321,})
C(1,[],[27],{type:[1,[],[27]],x:4800,y:8700,w:300,h:200,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[13],{type:[1,[],[13]],x:5900,y:9900,w:1200,h:600,force:1525,dir:{"x":0,"y":-1525},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0801320528211285,})
C(1,[],[7],{type:[1,[],[7]],x:7800,y:10000,w:400,h:400,id:5,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[9],{type:[1,[],[9]],x:2700,y:2000,w:200,h:350,spawn:{"x":1400,"y":1087.5},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[9],{type:[1,[],[9]],x:2700,y:3250,w:200,h:350,spawn:{"x":1400,"y":1712.5},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[13],{type:[1,[],[13]],x:2000,y:500,w:1800,h:1000,force:1250,dir:{"x":1250,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8853541416566625,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:10900,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:10900,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:10900,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:10900,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:10900,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:10900,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:10900,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[7],{type:[1,[],[7]],x:100,y:9400,w:1600,h:1600,id:3,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[17],{type:[1,[],[17]],x:1400,y:8900,w:400,h:400,time:0,maxTime:2.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:150,})
C(1,[],[14],{type:[1,[],[14]],x:6600,y:2400,w:4300,h:300,force:2450,dir:{"x":0,"y":2450},direction:"down",jumpHeight:128,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.5294117647058824,jumpForce:37.12,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(0,[],[1],{type:[0,[],[1]],x:8150,y:2400,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:8500,y:2700,r:100,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:500,w:1150,h:2200,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:10900,y:1650,w:1100,h:1050,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:10600,y:500,w:1400,h:1150,force:5000,dir:{"x":5000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:6800,y:500,w:3800,h:1100,force:1200,dir:{"x":1200,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8499399759903962,})
C(1,[],[7],{type:[1,[],[7]],x:6700,y:1000,w:100,h:100,id:1,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[13],{type:[1,[],[13]],x:5100,y:0,w:600,h:1100,force:1850,dir:{"x":0,"y":1850},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.3103241296518608,})
C(1,[],[13],{type:[1,[],[13]],x:4900,y:800,w:900,h:300,force:1850,dir:{"x":1850,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.3103241296518608,})
C(1,[],[13],{type:[1,[],[13]],x:4900,y:300,w:800,h:500,force:1850,dir:{"x":-1850,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.3103241296518608,})
C(1,[],[13],{type:[1,[],[13]],x:4900,y:0,w:800,h:300,force:1850,dir:{"x":1850,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.3103241296518608,})
C(1,[],[13],{type:[1,[],[13]],x:5800,y:1050,w:700,h:350,force:1400,dir:{"x":0,"y":1400},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9915966386554622,})
C(1,[],[13],{type:[1,[],[13]],x:5800,y:700,w:700,h:350,force:1400,dir:{"x":0,"y":-1400},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9915966386554622,})
C(1,[],[19],{type:[1,[],[19]],x:3700,y:750,w:100,h:500,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:0,w:200,h:1100,force:1300,dir:{"x":0,"y":-1300},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9207683073229292,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:0,w:1100,h:300,force:1300,dir:{"x":1300,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9207683073229292,})
C(1,[],[13],{type:[1,[],[13]],x:4600,y:0,w:300,h:1100,force:1300,dir:{"x":0,"y":-1300},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9207683073229292,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:900,w:1100,h:200,force:1300,dir:{"x":1300,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.9207683073229292,})
C(1,[],[13],{type:[1,[],[13]],x:2000,y:500,w:1800,h:500,force:1125,dir:{"x":0,"y":1125},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7968187274909964,})
C(1,[],[13],{type:[1,[],[13]],x:2000,y:1000,w:1800,h:500,force:1125,dir:{"x":0,"y":-1125},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.7968187274909964,})
C(1,[],[13],{type:[1,[],[13]],x:200,y:500,w:1800,h:1000,force:1250,dir:{"x":1250,"y":0},direction:"right",inView:true,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.8853541416566625,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:1100,w:200,h:900,canJump:true,inView:true,sat:{"pos":{"x":0,"y":550},"angle":0,"offset":{"x":0,"y":0},"calcPoints":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}],"edges":[{"x":100,"y":0},{"x":0,"y":450},{"x":-100,"y":0},{"x":0,"y":-450}],"normals":[{"x":0,"y":-1},{"x":1,"y":0},{"x":0,"y":1},{"x":-1,"y":0}],"points":[{"x":0,"y":0},{"x":100,"y":0},{"x":100,"y":450},{"x":0,"y":450}]},})
C(1,[],[0],{type:[1,[],[0]],x:1.5308084989341915e-15,y:0,w:200,h:900,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:1500,w:1800,h:500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:200,y:0,w:1800,h:500,canJump:true,inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[500,800],[500,1200],[300,1000]],most:{"left":150,"right":250,"top":400,"bottom":600},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,500],[600,500],[200,900]],most:{"left":100,"right":300,"top":250,"bottom":450},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,1100],[600,1500],[200,1500]],most:{"left":100,"right":300,"top":550,"bottom":750},renderType:"poly",inView:true,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:650,y:1000,r:250,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:1600,y:1000,r:200,renderType:"circle",inView:true,})
C(1,[],[20],{h:200,w:200,y:900,x:0,hex:'#FFFFFF',alpha:1,
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
C(0,[],[0],{type:[0,[],[0]],x:1000,y:650,r:125,renderType:"circle",inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[925,550],[925,750],[825,650]],most:{"left":412.5,"right":462.5,"top":275,"bottom":375},renderType:"poly",inView:true,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:1000,y:1375,r:125,renderType:"circle",inView:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[925,1275],[925,1475],[825,1375]],most:{"left":412.5,"right":462.5,"top":637.5,"bottom":737.5},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[10],{type:[1,[],[10]],x:1200,y:500,w:100,h:1000,maxStrength:50,currentStrength:50,time:0,timer:0,regenTime:200,inView:true,healSpeed:1,})
C(0,[],[0],{type:[0,[],[0]],x:1800,y:500,r:200,renderType:"circle",inView:true,})
C(0,[],[0],{type:[0,[],[0]],x:1800,y:1500,r:200,renderType:"circle",inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:1950,y:-50,w:1450,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1700,y:950,w:800,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,800],[2500,950],[1600,950]],most:{"left":800,"right":1250,"top":400,"bottom":475},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,1050],[2500,1050],[1600,1200]],most:{"left":800,"right":1250,"top":525,"bottom":600},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:1900,y:1500,w:1900,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3350,y:0,w:450,h:500,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[3800,1100],[3800,1500],[3300,1500]],most:{"left":1650,"right":1900,"top":550,"bottom":750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3300,500],[3800,500],[3800,900]],most:{"left":1650,"right":1900,"top":250,"bottom":450},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:1100,w:2000,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:150,w:200,h:1150,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4350,y:550,r:450,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:4350,y:550,radius:375,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[2450,275],[2550,275]],"type":"poly","props":{}},endPolygon:{"points":[[2175,550],[2175,650]],"type":"poly","props":{}},innerRadius:550,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:750,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:4350,y:550,radius:400,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[1900,274.99999999999994],[1775,274.99999999999994]],"type":"poly","props":{}},endPolygon:{"points":[[2175,0],[2175,-125]],"type":"poly","props":{}},innerRadius:550,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:800,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:-50,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4850,y:1050,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:1250,w:2100,h:750,canJump:true,inView:false,})
C(2,[],[0],{x:0,y:0,points:[[2500,1350],[2480.9016994374947,1379.3892626146237],[2430.9016994374947,1397.5528258147576],[2369.0983005625053,1397.5528258147576],[2319.0983005625053,1379.3892626146237],[2300,1350],[2319.0983005625053,1320.6107373853763],[2369.0983005625053,1302.4471741852424],[2430.9016994374947,1302.4471741852424],[2480.9016994374947,1320.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(2400,1350,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[3200,1050],[3180.9016994374947,1079.3892626146237],[3130.9016994374947,1097.5528258147576],[3069.0983005625053,1097.5528258147576],[3019.0983005625053,1079.3892626146237],[3000,1050],[3019.0983005625053,1020.6107373853763],[3069.0983005625053,1002.4471741852424],[3130.9016994374947,1002.4471741852424],[3180.9016994374947,1020.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(3100,1050,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[2750,850],[2730.9016994374947,879.3892626146237],[2680.9016994374947,897.5528258147576],[2619.0983005625053,897.5528258147576],[2569.0983005625053,879.3892626146237],[2550,850],[2569.0983005625053,820.6107373853763],[2619.0983005625053,802.4471741852424],[2680.9016994374947,802.4471741852424],[2730.9016994374947,820.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(2650,850,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[3300,750],[3280.9016994374947,779.3892626146237],[3230.9016994374947,797.5528258147576],[3169.0983005625053,797.5528258147576],[3119.0983005625053,779.3892626146237],[3100,750],[3119.0983005625053,720.6107373853763],[3169.0983005625053,702.4471741852424],[3230.9016994374947,702.4471741852424],[3280.9016994374947,720.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(3200,750,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[3250,1450],[3230.9016994374947,1479.3892626146237],[3180.9016994374947,1497.5528258147576],[3119.0983005625053,1497.5528258147576],[3069.0983005625053,1479.3892626146237],[3050,1450],[3069.0983005625053,1420.6107373853763],[3119.0983005625053,1402.4471741852424],[3180.9016994374947,1402.4471741852424],[3230.9016994374947,1420.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(3150,1450,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[2950,1250],[2930.9016994374947,1279.3892626146237],[2880.9016994374947,1297.5528258147576],[2819.0983005625053,1297.5528258147576],[2769.0983005625053,1279.3892626146237],[2750,1250],[2769.0983005625053,1220.6107373853763],[2819.0983005625053,1202.4471741852424],[2880.9016994374947,1202.4471741852424],[2930.9016994374947,1220.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(2850,1250,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[3550,1150],[3530.9016994374947,1179.3892626146237],[3480.9016994374947,1197.5528258147576],[3419.0983005625053,1197.5528258147576],[3369.0983005625053,1179.3892626146237],[3350,1150],[3369.0983005625053,1120.6107373853763],[3419.0983005625053,1102.4471741852424],[3480.9016994374947,1102.4471741852424],[3530.9016994374947,1120.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(3450,1150,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[3600,950],[3580.9016994374947,979.3892626146237],[3530.9016994374947,997.5528258147576],[3469.0983005625053,997.5528258147576],[3419.0983005625053,979.3892626146237],[3400,950],[3419.0983005625053,920.6107373853763],[3469.0983005625053,902.4471741852424],[3530.9016994374947,902.4471741852424],[3580.9016994374947,920.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(3500,950,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[2250,650],[2230.9016994374947,679.3892626146237],[2180.9016994374947,697.5528258147576],[2119.0983005625053,697.5528258147576],[2069.0983005625053,679.3892626146237],[2050,650],[2069.0983005625053,620.6107373853763],[2119.0983005625053,602.4471741852424],[2180.9016994374947,602.4471741852424],[2230.9016994374947,620.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(2150,650,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(2,[],[0],{x:0,y:0,points:[[2950,550],[2930.9016994374947,579.3892626146237],[2880.9016994374947,597.5528258147576],[2819.0983005625053,597.5528258147576],[2769.0983005625053,579.3892626146237],[2750,550],[2769.0983005625053,520.6107373853763],[2819.0983005625053,502.4471741852423],[2880.9016994374947,502.4471741852423],[2930.9016994374947,520.6107373853763]],cr:(o)=>{
            ctx.beginPath();
            ctx.fillStyle = colors.tile;
            ctx.ellipse(2850,550,100,50,0,0,Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }});
C(4,[],[0],{type:[4,[],[0]],x:5400,y:300,radius:200,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[2700,0],[2700,-50]],"type":"poly","props":{}},endPolygon:{"points":[[2700,300],[2700,350]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:5400,y:800,radius:200,startAngle:1.5707963267948966,endAngle:-1.5707963267948966,startPolygon:{"points":[[2700,550],[2700,600]],"type":"poly","props":{}},endPolygon:{"points":[[2700,250],[2700,200]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:400,startSliceAngle:1.5707963267948966,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:1050,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:100,w:350,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5050,y:450,w:100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5400,y:300,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5400,y:800,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5400,y:600,w:400,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:-50,w:100,h:1050,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:550,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5650,y:-50,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:500,w:700,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5800,y:1400,w:700,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:1200,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:500,w:200,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5750,y:-50,w:950,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5750,y:1550,w:950,h:450,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:5800,y:1400,r:300,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6500,y:1400,r:300,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6500,y:700,r:300,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:5800,y:700,radius:150,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[2900,350],[3050,350]],"type":"poly","props":{}},endPolygon:{"points":[[2900,350],[2900,500]],"type":"poly","props":{}},renderType:"circle",inView:false,r:300,innerRadius:0,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:1100,w:300,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6500,y:0,w:300,h:1000,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:6600,y:1000,w:200,h:100,spawn:{"x":3350,"y":525},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:6800,y:1600,w:3800,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6700,y:-50,w:5300,h:550,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:6500,y:1000,w:100,h:100,id:1,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:2,})
C(1,[],[7],{type:[1,[],[7]],x:6100,y:700,w:100,h:100,id:1,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:6100,y:1300,w:100,h:100,id:2,active:true,inView:false,color:"#d6d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:6500,y:1000,w:100,h:100,id:2,active:true,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(4,[],[0],{type:[4,[],[0]],x:10900,y:1600,radius:1000,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[5450,250],[5450,-200]],"type":"poly","props":{}},endPolygon:{"points":[[5450,1350],[5450,1800]],"type":"poly","props":{}},innerRadius:1100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:2000,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[6800,1100],[6900,1600],[6800,1600]],most:{"left":3400,"right":3450,"top":550,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6800,500],[6900,500],[6800,1000]],most:{"left":3400,"right":3450,"top":250,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:10900,y:1600,r:800,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[10550,900],[10500,1600],[9400,1600]],most:{"left":4700,"right":5275,"top":450,"bottom":800},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:1850,w:2000,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6600,y:2700,w:4300,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:2600,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10000,y:2500,w:100,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9550,2550],[9700,2700],[9400,2700]],most:{"left":4700,"right":4850,"top":1275,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9200,2400],[9400,2400],[9300,2500]],most:{"left":4600,"right":4700,"top":1200,"bottom":1250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9100,2600],[9200,2700],[9000,2700]],most:{"left":4500,"right":4600,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:7400,y:2550,w:100,h:50,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7000,y:2550,w:100,h:50,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[6650,2600],[6700,2700],[6600,2700]],most:{"left":3300,"right":3350,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6750,2600],[6800,2700],[6700,2700]],most:{"left":3350,"right":3400,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6850,2600],[6900,2700],[6800,2700]],most:{"left":3400,"right":3450,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6950,2600],[7000,2700],[6900,2700]],most:{"left":3450,"right":3500,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7050,2600],[7100,2700],[7000,2700]],most:{"left":3500,"right":3550,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7150,2600],[7200,2700],[7100,2700]],most:{"left":3550,"right":3600,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7250,2600],[7300,2700],[7200,2700]],most:{"left":3600,"right":3650,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7350,2600],[7400,2700],[7300,2700]],most:{"left":3650,"right":3700,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7450,2600],[7500,2700],[7400,2700]],most:{"left":3700,"right":3750,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[7550,2600],[7600,2700],[7500,2700]],most:{"left":3750,"right":3800,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[8700,2400],[9000,2400],[8850,2550]],most:{"left":4350,"right":4500,"top":1200,"bottom":1275},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:6600,y:2550,w:100,h:50,points:[[3300,1275],[3350,1275]],speed:35,currentPoint:1.1883333333056907,alongWith:false,pointOn:{"x":3350,"y":1275},pointTo:{"x":3300,"y":1275},xv:-35,yv:4.2862637970157365e-15,inView:false,path:[[6600,2550,1.1666666666666667],[6700,2550,1.1666666666666667]],})
C(1,[],[0],{type:[1,[],[0]],x:10900,y:3100,w:1300,h:500,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:1.9721522630525295e-30,y:2000,w:100,h:1600,tpx:850,tpy:5150,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:5100,w:700,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1000,y:5100,w:800,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:5100,w:1400,h:4200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[6200,2000],[6600,2000],[6600,2400]],most:{"left":3100,"right":3300,"top":1000,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,2700],[6600,3600],[5700,3600]],most:{"left":2850,"right":3300,"top":1350,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[5950,2150],[6350,2550],[5950,2950]],most:{"left":2975,"right":3175,"top":1075,"bottom":1475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:1700,w:200,h:200,points:[[2200,850],[2200,1100]],speed:120,currentPoint:1.472,collidable:true,pointOn:{"x":2200,"y":1100},pointTo:{"x":2200,"y":850},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[4400,1700,4],[4400,2200,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:1150,w:200,h:1000,points:[[1900,575],[1900,875]],speed:120,currentPoint:0.3933333333333333,collidable:true,pointOn:{"x":1900,"y":575},pointTo:{"x":1900,"y":875},xv:7.34788079488412e-15,yv:120,inView:false,path:[[3800,1150,4],[3800,1750,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:3800,y:2850,w:200,h:900,points:[[1900,1425],[1900,1725]],speed:120,currentPoint:0.3933333333333333,collidable:true,pointOn:{"x":1900,"y":1425},pointTo:{"x":1900,"y":1725},xv:7.34788079488412e-15,yv:120,inView:false,path:[[3800,2850,4],[3800,3450,4]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[2800,2200],[3300,2800],[2800,3400],[2300,2800]],most:{"left":1150,"right":1650,"top":1100,"bottom":1700},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3500,3200],[3950,3800],[3000,3800]],most:{"left":1500,"right":1975,"top":1600,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[3000,1800],[3950,1800],[3500,2400]],most:{"left":1500,"right":1975,"top":900,"bottom":1200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[5400,3300],[5700,3600],[5400,3600]],most:{"left":2700,"right":2850,"top":1650,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5400,2000],[5700,2000],[5400,2300]],most:{"left":2700,"right":2850,"top":1000,"bottom":1150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:400,y:8200,w:1000,h:1100,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[1800,8400],[1800,8900],[1600,8650]],most:{"left":800,"right":900,"top":4200,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[400,8200],[400,8500],[200,8300]],most:{"left":100,"right":200,"top":4100,"bottom":4250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:0,y:9200,w:100,h:100,points:[[0,4600],[150,4600]],speed:52,currentPoint:0.34088888888897745,collidable:true,pointOn:{"x":0,"y":4600},pointTo:{"x":150,"y":4600},xv:52,yv:0,inView:false,path:[[0,9200,1.7333333333333334],[300,9200,1.7333333333333334]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[0,8450],[250,8700],[0,8950]],most:{"left":0,"right":125,"top":4225,"bottom":4475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1400,8800],[1500,8900],[1400,8900]],most:{"left":700,"right":750,"top":4400,"bottom":4450},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[400,8900],[400,9100],[300,9000]],most:{"left":150,"right":200,"top":4450,"bottom":4550},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:1500,y:9000,w:300,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1400,y:9200,w:300,h:100,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:0,y:9300,w:1800,h:1800,spawn:{"x":450,"y":5100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:11100,w:4800,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3200,y:5100,w:1600,h:4200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:10400,w:200,h:700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4600,y:9300,w:200,h:700,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:9300,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:9300,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:9300,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:9700,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:9300,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:9700,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:9300,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:10100,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:9700,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:10100,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:1800,y:10500,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:10500,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:10100,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:10100,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2200,y:10500,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:10500,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:10500,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:10500,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:9700,w:400,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:9700,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:2600,y:9700,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:10100,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3000,y:9300,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:4200,y:10100,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:9700,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:10100,w:400,h:400,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3400,y:10500,w:400,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:3800,y:9300,w:400,h:400,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:10500,w:2900,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:9300,w:2900,h:600,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[700,5650],[900,5850],[700,6050],[500,5850]],most:{"left":250,"right":450,"top":2825,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[950,5900],[1150,6100],[950,6300],[750,6100]],most:{"left":375,"right":575,"top":2950,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1350,5400],[1550,5600],[1350,5800],[1150,5600]],most:{"left":575,"right":775,"top":2700,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1600,5650],[1800,5850],[1600,6050],[1400,5850]],most:{"left":700,"right":900,"top":2825,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1600,6300],[1800,6500],[1600,6700],[1400,6500]],most:{"left":700,"right":900,"top":3150,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[1350,6550],[1550,6750],[1350,6950],[1150,6750]],most:{"left":575,"right":775,"top":3275,"bottom":3475},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[700,6150],[900,6350],[700,6550],[500,6350]],most:{"left":250,"right":450,"top":3075,"bottom":3275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[450,6400],[650,6600],[450,6800],[250,6600]],most:{"left":125,"right":325,"top":3200,"bottom":3400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[450,5400],[650,5600],[450,5800],[250,5600]],most:{"left":125,"right":325,"top":2700,"bottom":2900},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[450,5900],[650,6100],[450,6300],[250,6100]],most:{"left":125,"right":325,"top":2950,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,5650],[400,5850],[200,6050],[0,5850]],most:{"left":0,"right":200,"top":2825,"bottom":3025},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,6150],[400,6350],[200,6550],[0,6350]],most:{"left":0,"right":200,"top":3075,"bottom":3275},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[200,6650],[400,6850],[200,7050],[0,6850]],most:{"left":0,"right":200,"top":3325,"bottom":3525},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[13],{type:[1,[],[13]],x:4600,y:10000,w:1300,h:400,force:1525,dir:{"x":0,"y":1525},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.0801320528211285,})
C(1,[],[13],{type:[1,[],[13]],x:7100,y:9900,w:600,h:600,force:2800,dir:{"x":-2800,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.9831932773109244,})
C(1,[],[9],{type:[1,[],[9]],x:7700,y:9900,w:600,h:600,spawn:{"x":4000,"y":5100},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[8],{type:[1,[],[8]],x:7100,y:9900,w:600,h:600,id:5,active:false,inView:false,coinDoorColor:"#d6d612",coindoorCoinAmount:1,})
C(1,[],[17],{type:[1,[],[17]],x:7100,y:9900,w:600,h:600,time:0,maxTime:5.5,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:330,})
C(2,[],[1],{type:[2,[],[1]],points:[[4800,10400],[7000,10400],[7100,10500],[7000,10500],[4800,10500]],most:{"left":2400,"right":3550,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:7700,y:10500,w:600,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7700,y:8400,w:2700,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10400,y:8400,w:1600,h:3600,canJump:true,inView:false,})
C(2,[],[1],{type:[2,[],[1]],points:[[4800,9900],[7100,9900],[7000,10000],[4800,10000]],most:{"left":2400,"right":3550,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:8300,y:10500,w:100,h:1400,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:10300,y:9900,w:100,h:2000,effect:30,inView:false,bounciness:20,decay:0.5,})
C(0,[],[0],{type:[0,[],[0]],x:8500,y:10050,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9550,y:10700,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9000,y:10900,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10100,y:11400,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10000,y:10950,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9450,y:11250,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8700,y:11350,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:10050,y:10450,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8700,y:10450,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9750,y:10050,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9150,y:10200,r:112,renderType:"circle",inView:false,})
C(1,[],[2],{type:[1,[],[2]],x:8700,y:11600,w:100,h:300,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:9500,y:11600,w:100,h:300,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:9900,y:11600,w:100,h:300,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:9100,y:11600,w:100,h:300,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[12],{type:[1,[],[12]],x:9550,y:11900,w:400,h:100,tpx:4850,tpy:8450,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4800,y:6300,w:1600,h:2100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:6400,y:5100,w:2000,h:3300,canJump:false,inView:false,})
C(1,[0],[12],{type:[1,[0],[12]],x:4800,y:8700,w:100,h:100,points:[[2400,4350],[2500,4350]],speed:34,currentPoint:1.834333333330569,tpx:15600,tpy:3600,pointOn:{"x":2500,"y":4350},pointTo:{"x":2400,"y":4350},xv:-34,yv:4.1637991171010006e-15,inView:false,path:[[4800,8700,1.1333333333333333],[5000,8700,1.1333333333333333]],})
C(1,[],[27],{type:[1,[],[27]],x:4800,y:8400,w:300,h:200,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:-1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[13],{type:[1,[],[13]],x:5100,y:8400,w:2200,h:200,force:1750,dir:{"x":1750,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(0,[],[0],{type:[0,[],[0]],x:5550,y:8350,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6000,y:8650,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:6550,y:8350,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7200,y:8700,r:150,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:7200,y:8300,r:150,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:7400,y:8700,radius:300,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[3700,4200],[3700,4050]],"type":"poly","props":{}},endPolygon:{"points":[[3850,4350],[4000,4350]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:5200,y:9000,w:2500,h:300,force:300,dir:{"x":-300,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.21248499399759904,})
C(1,[1],[0],{type:[1,[1],[0]],x:7350,y:8750,w:400,h:100,angle:1309.983333333352,rotateSpeed:0.01516835016835017,pivotX:7550,pivotY:8800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:103.07764064044152,unSim:51.2666666666644,inView:false,initialRotation:75056.51623248035,})
C(4,[],[0],{type:[4,[],[0]],x:7400,y:9000,radius:300,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[3850,4500],[4000,4500]],"type":"poly","props":{}},endPolygon:{"points":[[3700,4650],[3700,4800]],"type":"poly","props":{}},innerRadius:300,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[7000,9100],[7300,9300],[7000,9300]],most:{"left":3500,"right":3650,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[6600,9000],[6900,9000],[6600,9200]],most:{"left":3300,"right":3450,"top":4500,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[6200,9100],[6400,9300],[6000,9300]],most:{"left":3000,"right":3200,"top":4550,"bottom":4650},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5450,9000],[5850,9000],[5650,9200]],most:{"left":2725,"right":2925,"top":4500,"bottom":4600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5200,y:9000,w:100,h:100,points:[[2600,4500],[2600,4600]],speed:34,currentPoint:1.834333333372033,collidable:true,pointOn:{"x":2600,"y":4600},pointTo:{"x":2600,"y":4500},xv:2.0818995585505003e-15,yv:-34,inView:false,path:[[5200,9000,1.1333333333333333],[5200,9200,1.1333333333333333]],boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:5000,y:9100,r:66,renderType:"circle",inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9150,y:11900,w:400,h:100,tpx:8000,tpy:10200,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:8750,y:11900,w:400,h:100,tpx:9150,tpy:6650,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:8300,y:11900,w:450,h:100,tpx:8450,tpy:8250,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:8300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9100,y:8200,w:100,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9400,y:8100,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9800,y:8100,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10200,y:8000,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10700,y:8100,w:100,h:300,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:10800,y:8100,w:200,h:100,points:[[5400,4050],[5850,4050]],speed:150,currentPoint:1.3277777777777777,alongWith:false,pointOn:{"x":5850,"y":4050},pointTo:{"x":5400,"y":4050},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[10800,8100,5],[11700,8100,5]],})
C(1,[],[12],{type:[1,[],[12]],x:11900,y:7500,w:100,h:900,tpx:15600,tpy:3600,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9950,y:11600,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9550,y:11600,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9150,y:11600,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8750,y:11600,r:112,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12000,y:0,w:3100,h:12000,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:9950,y:11900,w:450,h:100,tpx:15150,tpy:50,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:1200,w:8900,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16300,y:0,w:2000,h:1200,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:0,w:600,h:600,force:2300,dir:{"x":2300,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[13],{type:[1,[],[13]],x:15700,y:0,w:600,h:600,force:2300,dir:{"x":0,"y":2300},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[13],{type:[1,[],[13]],x:15700,y:600,w:600,h:600,force:2300,dir:{"x":-2300,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:600,w:600,h:600,force:2300,dir:{"x":0,"y":-2300},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.6290516206482593,})
C(1,[],[12],{type:[1,[],[12]],x:15650,y:550,w:100,h:100,tpx:15600,tpy:3600,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:15600,y:500,w:200,h:200,coins:20,currentCoins:20,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:20,})
C(0,[],[7],{type:[0,[],[7]],x:15350,y:250,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15200,y:400,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15500,y:300,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15700,y:150,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15900,y:250,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15850,y:500,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:16150,y:650,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15900,y:900,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15600,y:800,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15200,y:1000,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15300,y:750,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15150,y:600,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:16100,y:50,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:16150,y:1050,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15600,y:100,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16250,y:350,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16100,y:550,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15950,y:750,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16150,y:950,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15750,y:1100,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15500,y:1000,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15200,y:900,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15400,y:600,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:15750,y:350,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:16000,y:1100,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15300,y:0,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:15100,y:200,w:100,h:100,collected:false,inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[9550,8300],[9600,8400],[9500,8400]],most:{"left":4750,"right":4800,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9650,8300],[9700,8400],[9600,8400]],most:{"left":4800,"right":4850,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9750,8300],[9800,8400],[9700,8400]],most:{"left":4850,"right":4900,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9850,8300],[9900,8400],[9800,8400]],most:{"left":4900,"right":4950,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[9950,8300],[10000,8400],[9900,8400]],most:{"left":4950,"right":5000,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10050,8300],[10100,8400],[10000,8400]],most:{"left":5000,"right":5050,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10150,8300],[10200,8400],[10100,8400]],most:{"left":5050,"right":5100,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10250,8300],[10300,8400],[10200,8400]],most:{"left":5100,"right":5150,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10350,8300],[10400,8400],[10300,8400]],most:{"left":5150,"right":5200,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10450,8300],[10500,8400],[10400,8400]],most:{"left":5200,"right":5250,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10550,8300],[10600,8400],[10500,8400]],most:{"left":5250,"right":5300,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10650,8300],[10700,8400],[10600,8400]],most:{"left":5300,"right":5350,"top":4150,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[10875,8250],[10950,8400],[10800,8400]],most:{"left":5400,"right":5475,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11025,8250],[11100,8400],[10950,8400]],most:{"left":5475,"right":5550,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11175,8250],[11250,8400],[11100,8400]],most:{"left":5550,"right":5625,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11325,8250],[11400,8400],[11250,8400]],most:{"left":5625,"right":5700,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11475,8250],[11550,8400],[11400,8400]],most:{"left":5700,"right":5775,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11625,8250],[11700,8400],[11550,8400]],most:{"left":5775,"right":5850,"top":4125,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[11800,8200],[11900,8400],[11700,8400]],most:{"left":5850,"right":5950,"top":4100,"bottom":4200},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:6300,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:6600,w:600,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:6600,w:600,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[9000,6600],[9100,6700],[9000,6700]],most:{"left":4500,"right":4550,"top":3300,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9300,6600],[9300,6700],[9200,6700]],most:{"left":4600,"right":4650,"top":3300,"bottom":3350},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:6100,w:200,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:9100,y:5800,r:100,renderType:"circle",inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:9150,y:5350,w:300,h:100,angle:-692.0666666666881,rotateSpeed:-0.008013468013468012,pivotX:9300,pivotY:5400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:79.05694150420949,unSim:51.2666666666644,inView:false,initialRotation:-39652.4991416884,})
C(0,[],[0],{type:[0,[],[0]],x:8500,y:4950,r:450,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8400,6200],[8800,6600],[8400,6600]],most:{"left":4200,"right":4400,"top":3100,"bottom":3300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[9900,6200],[9900,6600],[9500,6600]],most:{"left":4750,"right":4950,"top":3100,"bottom":3300},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[12],{type:[0,[],[12]],x:9950,y:5050,r:450,tpx:15600,tpy:3600,renderType:"circleR",radius:225,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9900,y:5100,w:2100,h:1600,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:6700,w:3600,h:100,canJump:true,inView:false,})
let minX68, minY68, maxX68, maxY68;
    minX68 = 2600;minY68 = 1900;maxX68 = 3000;maxY68 = 3700;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX68) && (player.pos.x) < md(maxX68) && (player.pos.y) > md(minY68) && (player.pos.y) < md(maxY68)) {
            colors.background="#7db290"; colors.tile="#407d6c";
        }
    },});
C(1,[],[9],{type:[1,[],[9]],x:15100,y:3100,w:1000,h:1000,spawn:{"x":7800,"y":1800},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:4100,w:8900,h:1500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:3800,w:200,h:300,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:16700,y:3800,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:16700,y:3400,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17300,y:3600,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17300,y:3300,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17850,y:3450,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17850,y:3750,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:3100,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17750,y:3100,w:200,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17750,y:3750,w:200,h:350,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:17300,y:3900,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:3900,w:200,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16600,y:3100,w:200,h:300,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:18500,y:3700,w:200,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:3100,w:200,h:100,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:3100,w:200,h:300,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20100,y:3100,w:200,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20300,y:3100,w:200,h:700,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20500,y:3100,w:200,h:900,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:3600,w:200,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:3800,w:200,h:300,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20100,y:4000,w:200,h:100,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20700,y:3800,w:700,h:200,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:21700,y:3300,w:200,h:800,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:21000,y:3300,w:700,h:200,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[16],{type:[1,[],[16]],x:22100,y:3100,w:1800,h:1000,snapDistance:50,snapWait:0.4,snapX:true,snapY:true,inView:false,snapAngleRotateSpeed:0,snapAngle:0,snapCooldown:24,snapDistanceY:100,snapDistanceX:100,toSnapX:true,toSnapY:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[22500,3100],[23900,3100],[23200,3800]],most:{"left":11250,"right":11950,"top":1550,"bottom":1900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[22500,3700],[22900,4100],[22100,4100]],most:{"left":11050,"right":11450,"top":1850,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[23900,3700],[23900,4100],[23500,4100]],most:{"left":11750,"right":11950,"top":1850,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:22000,y:4100,w:1950,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22050,y:3000,w:1950,h:100,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:23900,y:3100,w:100,h:600,tpx:18350,tpy:600,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:0,w:100,h:550,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22300,y:750,w:100,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22500,y:0,w:100,h:850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22500,y:1050,w:100,h:150,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22700,y:550,w:100,h:650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22700,y:0,w:100,h:350,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22900,y:0,w:100,h:400,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22900,y:800,w:100,h:400,canJump:true,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:23100,y:-200,w:100,h:600,points:[[11550,-100],[11550,0]],speed:75,currentPoint:0.9875,alongWith:false,pointOn:{"x":11550,"y":-100},pointTo:{"x":11550,"y":0},xv:4.592425496802574e-15,yv:75,inView:false,path:[[23100,-200,2.5],[23100,0,2.5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:23100,y:600,w:100,h:600,points:[[11550,300],[11550,400]],speed:75,currentPoint:0.9875,alongWith:false,pointOn:{"x":11550,"y":300},pointTo:{"x":11550,"y":400},xv:4.592425496802574e-15,yv:75,inView:false,path:[[23100,600,2.5],[23100,800,2.5]],})
C(1,[1],[0],{type:[1,[1],[0]],x:23425,y:350,w:550,h:100,angle:-1502.4333333333,rotateSpeed:-0.017744107744107743,pivotX:23700,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:51.2666666666644,inView:false,initialRotation:-86083.08899977007,})
C(2,[],[0],{type:[2,[],[0]],points:[[23200,0],[23600,0],[23200,400]],most:{"left":11600,"right":11800,"top":0,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[23200,800],[23600,1200],[23200,1200]],most:{"left":11600,"right":11800,"top":400,"bottom":600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[24000,800],[24000,1200],[23600,1200]],most:{"left":11800,"right":12000,"top":400,"bottom":600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[23600,0],[24000,0],[24000,400]],most:{"left":11800,"right":12000,"top":0,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:23425,y:750,w:550,h:100,angle:1502.4333333333,rotateSpeed:0.017744107744107743,pivotX:23700,pivotY:800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:51.2666666666644,inView:false,initialRotation:86083.08899977007,})
C(1,[],[10],{type:[1,[],[10]],x:18700,y:0,w:200,h:400,maxStrength:20,currentStrength:20,time:0,timer:0,regenTime:333.3333333333333,inView:false,healSpeed:1,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:0,w:200,h:300,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:900,w:200,h:300,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:400,w:200,h:400,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20300,y:700,w:200,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[13],{type:[1,[],[13]],x:20300,y:0,w:200,h:500,force:5000,dir:{"x":-5000,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(0,[],[0],{type:[0,[],[0]],x:20900,y:900,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20900,y:300,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21450,y:600,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22000,y:300,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22000,y:900,r:200,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15100,y:8800,w:4800,h:3200,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:18300,y:5600,w:1600,h:3200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:16500,y:7000,w:400,h:400,spawn:{"x":8350,"y":3600},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:23900,y:5500,w:200,h:6600,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:21700,y:5600,w:400,h:5600,canJump:false,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21900,y:11200,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21900,y:11900,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19900,y:5700,r:350,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20400,y:5700,r:502,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21050,y:5900,r:354,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21500,y:5950,r:460,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19650,y:6550,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20300,y:6500,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20800,y:6650,r:254,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20200,y:7100,r:206,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21250,y:7250,r:364,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20600,y:7450,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:21250,y:7850,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20300,y:7850,r:206,renderType:"circle",inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:22100,y:5600,w:1800,h:1800,inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:22000,y:7400,w:700,h:100,points:[[11000,3700],[11200,3700]],speed:150,currentPoint:0.9875,alongWith:false,pointOn:{"x":11000,"y":3700},pointTo:{"x":11200,"y":3700},xv:150,yv:0,inView:false,path:[[22000,7400,5],[22400,7400,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:22900,y:7400,w:800,h:100,points:[[11450,3700],[11650,3700]],speed:150,currentPoint:0.9875,alongWith:false,pointOn:{"x":11450,"y":3700},pointTo:{"x":11650,"y":3700},xv:150,yv:0,inView:false,path:[[22900,7400,5],[23300,7400,5]],})
C(1,[],[0],{type:[1,[],[0]],x:21950,y:7400,w:750,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:23700,y:7400,w:300,h:100,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:19950,y:8300,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20100,pivotY:8450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20200,y:8550,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20350,pivotY:8700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21350,y:8300,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21500,pivotY:8450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21100,y:8550,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21250,pivotY:8700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20625,y:9025,w:450,h:450,angle:45,rotateSpeed:0,pivotX:20850,pivotY:9250,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:159.0990257669732,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19950,y:9450,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20100,pivotY:9600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20200,y:9700,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20350,pivotY:9850,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20450,y:9950,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20600,pivotY:10100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21350,y:10050,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21500,pivotY:10200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21100,y:10300,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21250,pivotY:10450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20850,y:10900,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21000,pivotY:11050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20600,y:10650,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20750,pivotY:10800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20350,y:10900,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20500,pivotY:11050,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20100,y:11150,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20250,pivotY:11300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21100,y:11150,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21250,pivotY:11300,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21350,y:10550,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21500,pivotY:10700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20525,y:11225,w:450,h:450,angle:45,rotateSpeed:0,pivotX:20750,pivotY:11450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:159.0990257669732,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:20200,y:10200,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20350,pivotY:10350,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19950,y:10450,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20100,pivotY:10600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19950,y:9950,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20100,pivotY:10100,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:19950,y:8800,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20100,pivotY:8950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[1],[1],{type:[1,[1],[1]],x:21350,y:8800,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21500,pivotY:8950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:20000,y:11400,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:19850,y:11900,w:4050,h:250,canJump:true,inView:false,})
C(1,[1],[1],{type:[1,[1],[1]],x:20100,y:11750,w:300,h:300,angle:45,rotateSpeed:0,pivotX:20250,pivotY:11900,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
let minX69, minY69, maxX69, maxY69;
    minX69 = 7700;minY69 = 9900;maxX69 = 8300;maxY69 = 10500;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX69) && (player.pos.x) < md(maxX69) && (player.pos.y) > md(minY69) && (player.pos.y) < md(maxY69)) {
            colors.background="#884ca0"; colors.tile="#4c1968";
        }
    },});
C(1,[1],[1],{type:[1,[1],[1]],x:21350,y:9450,w:300,h:300,angle:45,rotateSpeed:0,pivotX:21500,pivotY:9600,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:106.06601717798213,unSim:51.2666666666644,inView:false,initialRotation:0.7853981633974483,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:22700,y:11500,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:23100,y:11300,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[23500,10950],[23700,10950],[23650,11150],[23550,11150]],most:{"left":11750,"right":11850,"top":5475,"bottom":5575},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[0],{type:[1,[0],[0]],x:23000,y:10500,w:100,h:100,points:[[11500,5250],[11650,5250],[11650,5400],[11500,5400]],speed:150,currentPoint:3.9833333333333334,alongWith:false,pointOn:{"x":11500,"y":5400},pointTo:{"x":11500,"y":5250},xv:9.184850993605149e-15,yv:-150,inView:false,path:[[23000,10500,5],[23300,10500,5],[23300,10800,5],[23000,10800,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:23000,y:10500,w:100,h:100,points:[[11500,5250],[11650,5250],[11650,5400],[11500,5400]],speed:150,currentPoint:0.9833333333333333,alongWith:false,pointOn:{"x":11500,"y":5250},pointTo:{"x":11650,"y":5250},xv:150,yv:0,inView:false,path:[[23000,10500,5],[23300,10500,5],[23300,10800,5],[23000,10800,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:23000,y:10500,w:100,h:100,points:[[11500,5250],[11650,5250],[11650,5400],[11500,5400]],speed:150,currentPoint:1.9833333333333334,alongWith:false,pointOn:{"x":11650,"y":5250},pointTo:{"x":11650,"y":5400},xv:9.184850993605149e-15,yv:150,inView:false,path:[[23000,10500,5],[23300,10500,5],[23300,10800,5],[23000,10800,5]],})
C(1,[0],[0],{type:[1,[0],[0]],x:23000,y:10500,w:100,h:100,points:[[11500,5250],[11650,5250],[11650,5400],[11500,5400]],speed:150,currentPoint:2.9833333333333334,alongWith:false,pointOn:{"x":11650,"y":5400},pointTo:{"x":11500,"y":5400},xv:-150,yv:1.8369701987210297e-14,inView:false,path:[[23000,10500,5],[23300,10500,5],[23300,10800,5],[23000,10800,5]],})
C(1,[1],[0],{type:[1,[1],[0]],x:22300,y:10400,w:500,h:100,angle:-1038.1000000000433,rotateSpeed:-0.012020202020202021,pivotX:22550,pivotY:10450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:51.2666666666644,inView:false,initialRotation:-59478.74871253324,})
C(1,[1],[0],{type:[1,[1],[0]],x:22300,y:10400,w:500,h:100,angle:-948.1000000000417,rotateSpeed:-0.012020202020202021,pivotX:22550,pivotY:10450,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:51.2666666666644,inView:false,initialRotation:-54322.12855635574,})
C(0,[],[0],{type:[0,[],[0]],x:22950,y:9950,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:23300,y:9550,r:158,renderType:"circle",inView:false,})
C(1,[0],[0],{type:[1,[0],[0]],x:22400,y:9300,w:200,h:100,points:[[11200,4650],[11400,4650]],speed:220,currentPoint:1.5816666666943093,alongWith:false,pointOn:{"x":11400,"y":4650},pointTo:{"x":11200,"y":4650},xv:-220,yv:2.694222958124177e-14,inView:false,path:[[22400,9300,7.333333333333333],[22800,9300,7.333333333333333]],})
C(1,[0],[0],{type:[1,[0],[0]],x:22400,y:9000,w:200,h:100,points:[[11200,4500],[11400,4500]],speed:220,currentPoint:0.5816666666943092,alongWith:false,pointOn:{"x":11200,"y":4500},pointTo:{"x":11400,"y":4500},xv:220,yv:0,inView:false,path:[[22400,9000,7.333333333333333],[22800,9000,7.333333333333333]],})
C(0,[],[0],{type:[0,[],[0]],x:23150,y:8750,r:158,renderType:"circle",inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:22600,y:8400,w:200,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:266.6666666666667,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:22950,y:8050,w:100,h:100,maxStrength:30,currentStrength:30,time:0,timer:0,regenTime:266.6666666666667,inView:false,healSpeed:1,})
C(0,[],[0],{type:[0,[],[0]],x:23000,y:7700,r:100,renderType:"circle",inView:false,})
C(1,[],[26],{type:[1,[],[26]],x:7800,y:10000,w:400,h:400,musicPath:"https://www.youtube.com/watch?v=DmGUZgnT1q4",volume:1,startTime:0,inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:15600,y:3600,radius:400,startAngle:1.5707963267948966,endAngle:4.71238898038469,startPolygon:{"points":[[7800,2050],[7800,2200]],"type":"poly","props":{}},endPolygon:{"points":[[7800,1550],[7800,1400]],"type":"poly","props":{}},innerRadius:500,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:800,startSliceAngle:1.5707963267948966,endSliceAngle:4.71238898038469,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[0],{type:[1,[],[0]],x:23900,y:3700,w:150,h:450,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:7400,w:900,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16900,y:7400,w:300,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:16900,y:6100,w:900,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:15600,y:6100,w:900,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:7400,w:300,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:8000,w:300,h:300,canJump:true,inView:false,})
C(1,[],[8],{type:[1,[],[8]],x:17200,y:7400,w:300,h:300,id:7,active:true,inView:false,coinDoorColor:"#00FF00",coindoorCoinAmount:5,})
C(1,[],[8],{type:[1,[],[8]],x:17200,y:7400,w:300,h:300,id:8,active:true,inView:false,coinDoorColor:"#00FF00",coindoorCoinAmount:5,})
C(1,[],[8],{type:[1,[],[8]],x:17200,y:7400,w:300,h:300,id:9,active:true,inView:false,coinDoorColor:"#00FF00",coindoorCoinAmount:5,})
C(1,[],[8],{type:[1,[],[8]],x:17200,y:7400,w:300,h:300,id:10,active:true,inView:false,coinDoorColor:"#00FF00",coindoorCoinAmount:5,})
C(1,[],[12],{type:[1,[],[12]],x:17200,y:7700,w:300,h:300,tpx:20800,tpy:6350,bgColor:"#24324c",tileColor:"#3c5f8c",changeColor:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:15600,y:7000,w:900,h:400,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16500,y:6100,w:400,h:900,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16900,y:7000,w:900,h:400,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16500,y:7400,w:400,h:900,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16700,y:5600,w:1100,h:500,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15600,y:5600,w:1100,h:500,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:6100,w:500,h:1000,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15100,y:7100,w:500,h:1200,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:15600,y:8300,w:1100,h:500,force:500,dir:{"x":-500,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:16700,y:8300,w:1100,h:500,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:17800,y:6100,w:500,h:1100,force:500,dir:{"x":0,"y":-500},direction:"up",inView:false,conveyorAngle:270,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[13],{type:[1,[],[13]],x:17800,y:7200,w:500,h:1100,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[0],[1],{type:[1,[0],[1]],x:16900,y:7000,w:200,h:200,points:[[8450,3500],[8800,3500]],speed:122,currentPoint:0.48561904761272934,collidable:true,pointOn:{"x":8450,"y":3500},pointTo:{"x":8800,"y":3500},xv:122,yv:0,inView:false,path:[[16900,7000,4.066666666666666],[17600,7000,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16900,y:7200,w:200,h:200,points:[[8450,3600],[8800,3600]],speed:122,currentPoint:1.4856190476127293,collidable:true,pointOn:{"x":8800,"y":3600},pointTo:{"x":8450,"y":3600},xv:-122,yv:1.494069094959771e-14,inView:false,path:[[16900,7200,4.066666666666666],[17600,7200,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15600,y:7000,w:200,h:200,points:[[7800,3500],[8150,3500]],speed:122,currentPoint:1.4856190476127293,collidable:true,pointOn:{"x":8150,"y":3500},pointTo:{"x":7800,"y":3500},xv:-122,yv:1.494069094959771e-14,inView:false,path:[[15600,7000,4.066666666666666],[16300,7000,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:15600,y:7200,w:200,h:200,points:[[7800,3600],[8150,3600]],speed:122,currentPoint:0.48561904761272934,collidable:true,pointOn:{"x":7800,"y":3600},pointTo:{"x":8150,"y":3600},xv:122,yv:0,inView:false,path:[[15600,7200,4.066666666666666],[16300,7200,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16500,y:6100,w:200,h:200,points:[[8250,3050],[8250,3400]],speed:122,currentPoint:1.485619047624576,collidable:true,pointOn:{"x":8250,"y":3400},pointTo:{"x":8250,"y":3050},xv:7.470345474798855e-15,yv:-122,inView:false,path:[[16500,6100,4.066666666666666],[16500,6800,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16700,y:6100,w:200,h:200,points:[[8350,3050],[8350,3400]],speed:122,currentPoint:0.48561904762457614,collidable:true,pointOn:{"x":8350,"y":3050},pointTo:{"x":8350,"y":3400},xv:7.470345474798855e-15,yv:122,inView:false,path:[[16700,6100,4.066666666666666],[16700,6800,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16700,y:7400,w:200,h:200,points:[[8350,3700],[8350,4050]],speed:122,currentPoint:1.485619047624576,collidable:true,pointOn:{"x":8350,"y":4050},pointTo:{"x":8350,"y":3700},xv:7.470345474798855e-15,yv:-122,inView:false,path:[[16700,7400,4.066666666666666],[16700,8100,4.066666666666666]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:16500,y:7400,w:200,h:200,points:[[8250,3700],[8250,4050]],speed:122,currentPoint:0.48561904762457614,collidable:true,pointOn:{"x":8250,"y":3700},pointTo:{"x":8250,"y":4050},xv:7.470345474798855e-15,yv:122,inView:false,path:[[16500,7400,4.066666666666666],[16500,8100,4.066666666666666]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[18300,8300],[18300,8800],[17800,8800]],most:{"left":8900,"right":9150,"top":4150,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15100,8300],[15600,8800],[15100,8800]],most:{"left":7550,"right":7800,"top":4150,"bottom":4400},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[15100,5600],[15600,5600],[15100,6100]],most:{"left":7550,"right":7800,"top":2800,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[17800,5600],[18300,5600],[18300,6100]],most:{"left":8900,"right":9150,"top":2800,"bottom":3050},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[23900,11400],[23900,11900],[23400,11900]],most:{"left":11700,"right":11950,"top":5700,"bottom":5950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:2200,w:200,h:200,points:[[2200,1100],[2200,1350]],speed:120,currentPoint:1.472,collidable:true,pointOn:{"x":2200,"y":1350},pointTo:{"x":2200,"y":1100},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[4400,2200,4],[4400,2700,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:2700,w:200,h:200,points:[[2200,1350],[2200,1600]],speed:120,currentPoint:1.472,collidable:true,pointOn:{"x":2200,"y":1600},pointTo:{"x":2200,"y":1350},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[4400,2700,4],[4400,3200,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:4400,y:3200,w:200,h:200,points:[[2200,1600],[2200,1850]],speed:120,currentPoint:1.472,collidable:true,pointOn:{"x":2200,"y":1850},pointTo:{"x":2200,"y":1600},xv:7.34788079488412e-15,yv:-120,inView:false,path:[[4400,3200,4],[4400,3700,4]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3800,y:1100,w:250,h:100,canJump:true,inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:5000,y:3100,w:200,h:900,points:[[2500,1550],[2500,1700]],speed:120,currentPoint:0.7866666666666666,collidable:true,pointOn:{"x":2500,"y":1550},pointTo:{"x":2500,"y":1700},xv:7.34788079488412e-15,yv:120,inView:false,path:[[5000,3100,4],[5000,3400,4]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5000,y:1300,w:200,h:900,points:[[2500,650],[2500,800]],speed:120,currentPoint:0.7866666666666666,collidable:true,pointOn:{"x":2500,"y":650},pointTo:{"x":2500,"y":800},xv:7.34788079488412e-15,yv:120,inView:false,path:[[5000,1300,4],[5000,1600,4]],boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:4950,y:100,w:150,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4950,y:150,r:50,renderType:"circle",inView:false,})
C(0,[],[1],{type:[0,[],[1]],x:10900,y:1600,r:700,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:3750,y:1150,w:1600,h:850,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3650,y:3600,w:1600,h:850,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5100,2650],[5250,2800],[5100,2950],[4950,2800]],most:{"left":2475,"right":2625,"top":1325,"bottom":1475},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:3000,y:11100,r:404,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3800,y:11100,r:404,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:4600,y:11100,r:404,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3000,y:9300,r:404,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:3800,y:9300,r:404,renderType:"circle",inView:false,})
C(4,[],[0],{type:[4,[],[0]],x:4600,y:9300,radius:200,startAngle:1.5707963267948966,endAngle:3.3161255787892263,startPolygon:{"points":[[2300,4650],[2300,4850]],"type":"poly","props":{}},endPolygon:{"points":[[2300,4650],[2103.0384493975585,4615.2703644666135]],"type":"poly","props":{}},renderType:"circle",inView:false,r:400,innerRadius:0,startSliceAngle:1.5707963267948966,endSliceAngle:3.3161255787892263,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:9300,radius:200,startAngle:0,endAngle:1.5707963267948966,startPolygon:{"points":[[1100,4650],[1300,4650]],"type":"poly","props":{}},endPolygon:{"points":[[1100,4650],[1100,4850]],"type":"poly","props":{}},renderType:"circle",inView:false,r:400,innerRadius:0,startSliceAngle:0,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:2200,y:11100,radius:200,startAngle:-1.5707963267948966,endAngle:0,startPolygon:{"points":[[1100,5550],[1100,5350]],"type":"poly","props":{}},endPolygon:{"points":[[1100,5550],[1300,5550]],"type":"poly","props":{}},renderType:"circle",inView:false,r:400,innerRadius:0,startSliceAngle:-1.5707963267948966,endSliceAngle:0,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(2,[],[0],{type:[2,[],[0]],points:[[2200,10700],[2200,11100],[1800,11100]],most:{"left":900,"right":1100,"top":5350,"bottom":5550},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1800,9300],[2200,9300],[2200,9700]],most:{"left":900,"right":1100,"top":4650,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4600,9350],[4600,10000],[4250,9500]],most:{"left":2125,"right":2300,"top":4675,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4600,10400],[4600,11050],[4250,10900]],most:{"left":2125,"right":2300,"top":5200,"bottom":5525},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:400,w:200,y:10000,x:5800,hex:'#FFFFFF',alpha:1,
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
C(2,[],[0],{type:[2,[],[0]],points:[[7800,10400],[7900,10500],[7700,10500]],most:{"left":3850,"right":3950,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7700,9900],[7900,9900],[7800,10000]],most:{"left":3850,"right":3950,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,10400],[8100,10500],[7900,10500]],most:{"left":3950,"right":4050,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8200,10400],[8300,10500],[8100,10500]],most:{"left":4050,"right":4150,"top":5200,"bottom":5250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[7900,9900],[8100,9900],[8000,10000]],most:{"left":3950,"right":4050,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8100,9900],[8300,9900],[8200,10000]],most:{"left":4050,"right":4150,"top":4950,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:3600,w:12000,h:1500,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[16100,3100],[16600,3100],[16600,3200]],most:{"left":8050,"right":8300,"top":1550,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16600,4000],[16600,4100],[16100,4100]],most:{"left":8050,"right":8300,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17200,4000],[17200,4100],[16800,4100]],most:{"left":8400,"right":8600,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17750,4000],[17750,4100],[17400,4100]],most:{"left":8700,"right":8875,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17400,3100],[17750,3100],[17750,3200]],most:{"left":8700,"right":8875,"top":1550,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[16800,3100],[17200,3100],[17200,3200]],most:{"left":8400,"right":8600,"top":1550,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17950,3100],[18450,3100],[17950,3200]],most:{"left":8975,"right":9225,"top":1550,"bottom":1600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[17950,4000],[18450,4100],[17950,4100]],most:{"left":8975,"right":9225,"top":2000,"bottom":2050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[13],{type:[1,[],[13]],x:18500,y:3500,w:200,h:200,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:18700,y:3100,w:400,h:1000,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:19100,y:3100,w:200,h:200,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:19100,y:3900,w:200,h:200,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:19300,y:3100,w:400,h:1000,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:19700,y:3200,w:200,h:400,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:19900,y:3400,w:200,h:400,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:20100,y:3600,w:200,h:400,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:20300,y:3800,w:200,h:300,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:20500,y:4000,w:900,h:100,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:20700,y:3500,w:1000,h:300,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:21400,y:3800,w:300,h:300,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:20700,y:3100,w:300,h:400,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[13],{type:[1,[],[13]],x:21000,y:3100,w:900,h:200,force:1800,dir:{"x":1800,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.274909963985594,})
C(1,[],[20],{h:400,w:200,y:3700,x:18500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:200,y:3600,x:19700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:1000,y:3100,x:19700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:800,y:3200,x:19900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:600,y:3400,x:20100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:400,y:3600,x:20300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:300,w:200,y:3800,x:19900,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:100,w:200,y:4000,x:20100,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:900,y:3800,x:20500,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:800,w:200,y:3300,x:21700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:200,w:700,y:3300,x:21000,hex:'#FFFFFF',alpha:1,
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
C(1,[],[10],{type:[1,[],[10]],x:18700,y:800,w:200,h:400,maxStrength:20,currentStrength:20,time:0,timer:0,regenTime:333.3333333333333,inView:false,healSpeed:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[18900,200],[18900,1000],[18500,600]],most:{"left":9250,"right":9450,"top":100,"bottom":500},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18300,700],[18800,1200],[18300,1200]],most:{"left":9150,"right":9400,"top":350,"bottom":600},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18300,0],[18800,0],[18300,500]],most:{"left":9150,"right":9400,"top":0,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[20],{h:300,w:200,y:0,x:19300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:400,w:200,y:400,x:19700,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:300,w:200,y:900,x:19300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:200,y:700,x:20300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[20],{h:500,w:200,y:0,x:20300,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:23300,y:900,w:600,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:23300,y:0,w:600,h:300,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:23125,y:750,w:550,h:100,angle:1532.433333333299,rotateSpeed:0.017744107744107743,pivotX:23400,pivotY:800,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:51.2666666666644,inView:false,initialRotation:87801.9623851625,})
C(1,[1],[0],{type:[1,[1],[0]],x:23125,y:350,w:550,h:100,angle:-1532.433333333299,rotateSpeed:-0.017744107744107743,pivotX:23400,pivotY:400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:139.75424859373686,unSim:51.2666666666644,inView:false,initialRotation:-87801.9623851625,})
C(0,[],[1],{type:[0,[],[1]],x:23400,y:400,r:30,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:23700,y:400,r:30,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:23700,y:800,r:30,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:23400,y:800,r:30,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:16500,y:7000,w:100,h:400,maxStrength:25,currentStrength:25,time:0,timer:0,regenTime:1333.3333333333333,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:16800,y:7000,w:100,h:400,maxStrength:25,currentStrength:25,time:0,timer:0,regenTime:1333.3333333333333,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:16500,y:7000,w:400,h:100,maxStrength:25,currentStrength:25,time:0,timer:0,regenTime:1333.3333333333333,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:16500,y:7300,w:400,h:100,maxStrength:25,currentStrength:25,time:0,timer:0,regenTime:1333.3333333333333,inView:false,healSpeed:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[700,5100],[800,5300],[700,5300]],most:{"left":350,"right":400,"top":2550,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1000,5100],[1000,5300],[900,5300]],most:{"left":450,"right":500,"top":2550,"bottom":2650},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:700,y:5300,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:900,y:5300,w:100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22350,y:750,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22350,y:550,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22550,y:850,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22550,y:1050,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22750,y:550,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22750,y:350,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22950,y:400,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22950,y:800,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:22950,y:600,r:50,renderType:"circle",inView:false,})
C(1,[0],[1],{type:[1,[0],[1]],x:1600,y:7000,w:200,h:200,points:[[800,3500],[800,3750]],speed:83,currentPoint:1.2264666666644553,collidable:true,pointOn:{"x":800,"y":3750},pointTo:{"x":800,"y":3500},xv:5.082284216461516e-15,yv:-83,inView:false,path:[[1600,7000,2.7666666666666666],[1600,7500,2.7666666666666666]],boundPlayer:true,})
C(2,[],[0],{type:[2,[],[0]],points:[[200,7700],[1600,7700],[1400,8200],[400,8200]],most:{"left":100,"right":800,"top":3850,"bottom":4100},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[1450,8076],[1600,8300],[1400,8500],[1400,8200]],most:{"left":700,"right":800,"top":4038,"bottom":4250},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[0],{type:[0,[],[0]],x:22950,y:10100,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:22850,y:9950,w:200,h:150,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:23100,y:10600,w:200,h:200,angle:2224.5,rotateSpeed:0.025757575757575757,pivotX:23200,pivotY:10700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:70.71067811865476,unSim:51.2666666666644,inView:false,initialRotation:127454.46152685162,})
C(0,[],[0],{type:[0,[],[0]],x:22550,y:10450,r:126,renderType:"circle",inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[23150,9600],[23450,9600],[23300,9900]],most:{"left":11575,"right":11725,"top":4800,"bottom":4950},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[1],{type:[1,[],[1]],x:22100,y:7500,w:100,h:3700,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:23800,y:7500,w:100,h:3900,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:0,y:7300,w:200,h:200,points:[[0,3650],[150,3650]],speed:83,currentPoint:0.04411111111102037,collidable:true,pointOn:{"x":0,"y":3650},pointTo:{"x":150,"y":3650},xv:83,yv:0,inView:false,path:[[0,7300,2.7666666666666666],[300,7300,2.7666666666666666]],boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[900,7000],[1600,7700],[200,7700]],most:{"left":100,"right":800,"top":3500,"bottom":3850},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:8325,y:2550,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:900,y:6800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[8400,7500],[8800,7500],[8400,7900]],most:{"left":4200,"right":4400,"top":3750,"bottom":3950},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[1],{type:[2,[],[1]],points:[[1600,6800],[1800,7000],[1600,7200],[1400,7000]],most:{"left":700,"right":900,"top":3400,"bottom":3600},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[100,3000],[2000,3000],[2500,3600],[100,3600]],most:{"left":50,"right":1250,"top":1500,"bottom":1800},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[100,2000],[2500,2000],[2000,2600],[100,2600]],most:{"left":50,"right":1250,"top":1000,"bottom":1300},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(0,[],[7],{type:[0,[],[7]],x:1800,y:2800,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:1550,y:2850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[1600,2600],[2000,2600],[1900,2700],[1700,2700]],most:{"left":800,"right":1000,"top":1300,"bottom":1350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1700,2900],[1900,2900],[2000,3000],[1600,3000]],most:{"left":800,"right":1000,"top":1450,"bottom":1500},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[7],{type:[0,[],[7]],x:1250,y:2650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:1150,y:2850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:750,y:2850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:850,y:2750,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:550,y:2850,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:1350,y:2950,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:1050,y:2650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:950,y:2950,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(0,[],[7],{type:[0,[],[7]],x:650,y:2650,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[8],{type:[1,[],[8]],x:100,y:2600,w:400,h:400,coins:10,currentCoins:10,inView:false,coinDoorColor:"#d5d612",coindoorCoinAmount:10,})
C(1,[],[12],{type:[1,[],[12]],x:500,y:2950,w:100,h:50,tpx:1850,tpy:2800,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:500,y:2600,w:100,h:50,tpx:1850,tpy:2800,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:8600,y:2200,w:100,h:100,tpx:2800,tpy:3025,bgColor:"#588293",tileColor:"#b6becd",changeColor:false,inView:false,collected:false,color:"#d5d612",coinAmount:1,})
C(1,[],[10],{type:[1,[],[10]],x:5400,y:6100,w:400,h:100,maxStrength:200,currentStrength:200,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(2,[],[1],{type:[2,[],[1]],points:[[4950,6200],[5000,6300],[4900,6300]],most:{"left":2450,"right":2500,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5050,6200],[5100,6300],[5000,6300]],most:{"left":2500,"right":2550,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5150,6200],[5200,6300],[5100,6300]],most:{"left":2550,"right":2600,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5250,6200],[5300,6300],[5200,6300]],most:{"left":2600,"right":2650,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[4850,6200],[4900,6300],[4800,6300]],most:{"left":2400,"right":2450,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5550,6200],[5600,6300],[5500,6300]],most:{"left":2750,"right":2800,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5450,6200],[5500,6300],[5400,6300]],most:{"left":2700,"right":2750,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5350,6200],[5400,6300],[5300,6300]],most:{"left":2650,"right":2700,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5650,6200],[5700,6300],[5600,6300]],most:{"left":2800,"right":2850,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5750,6200],[5800,6300],[5700,6300]],most:{"left":2850,"right":2900,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5850,6200],[5900,6300],[5800,6300]],most:{"left":2900,"right":2950,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[5950,6200],[6000,6300],[5900,6300]],most:{"left":2950,"right":3000,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6050,6200],[6100,6300],[6000,6300]],most:{"left":3000,"right":3050,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6150,6200],[6200,6300],[6100,6300]],most:{"left":3050,"right":3100,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6250,6200],[6300,6300],[6200,6300]],most:{"left":3100,"right":3150,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(2,[],[1],{type:[2,[],[1]],points:[[6350,6200],[6400,6300],[6300,6300]],most:{"left":3150,"right":3200,"top":3100,"bottom":3150},renderType:"poly",inView:false,x:null,y:null,boundPlayer:true,})
C(1,[],[10],{type:[1,[],[10]],x:4900,y:5950,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:5900,y:5950,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:4900,y:5650,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:5900,y:5650,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:4900,y:5300,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[10],{type:[1,[],[10]],x:5900,y:5300,w:400,h:100,maxStrength:40,currentStrength:40,time:0,timer:0,regenTime:200,inView:false,healSpeed:1,})
C(0,[],[0],{type:[0,[],[0]],x:5600,y:5700,r:168,renderType:"circle",inView:false,})
C(1,[],[20],{h:450,w:200,y:1950,x:8550,hex:'#FFFFFF',alpha:1,
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
C(1,[],[0],{type:[1,[],[0]],x:8550,y:1950,w:250,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10900,y:2700,w:1100,h:400,canJump:true,inView:false,})
C(1,[],[11],{type:[1,[],[11]],x:6600,y:1000,w:200,h:100,renderAbove:false,})
C(3,[],[20],{type:[3,[],[20]],x:750,y:450,angle:0,text:"No Pressure.",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9400,y:9800,angle:0,text:"Plinko!",size:63,story:false,fontSize:126,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:7400,y:10200,angle:0,text:"RESIST!",size:36,story:false,fontSize:72,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8550,y:11600,angle:0,text:"Parkour!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8950,y:11600,angle:0,text:"Platform!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9350,y:11650,angle:0,text:"Again!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9350,y:11600,angle:0,text:"Shoot",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9750,y:11600,angle:0,text:"Obstacle",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9750,y:11650,angle:0,text:"Course!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10150,y:11650,angle:0,text:"1000 coins!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10150,y:11600,angle:0,text:"Isle of",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:10750,y:2550,angle:0,text:"Platform!",size:32,story:false,fontSize:64,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:5050,y:10200,angle:90,text:"->",size:50,story:false,fontSize:100,hex:"#FFFFFF",pivotX:5050,pivotY:10200,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[1],[20],{type:[3,[1],[20]],x:6450,y:10200,angle:-90,text:"->",size:50,story:false,fontSize:100,hex:"#FFFFFF",pivotX:6450,pivotY:10200,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:875,y:6775,angle:0,text:"Press ",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:975,y:6775,angle:-90,text:"->",size:30,story:false,fontSize:60,hex:"#FFFFFF",pivotX:975,pivotY:6775,rotateSpeed:0,initialRotation:-1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:900,y:6825,angle:0,text:"To Wait.",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(0,[],[0],{type:[0,[],[0]],x:5200,y:8700,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:7300,y:8700,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:5200,y:8900,r:100,renderType:"circle",inView:false,toRender:false,})
C(0,[],[0],{type:[0,[],[0]],x:7300,y:8900,r:100,renderType:"circle",inView:false,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:5200,y:8600,w:2100,h:400,toRender:false,})
C(1,[],[0],{type:[1,[],[0]],x:5100,y:8700,w:2300,h:200,toRender:false,})


    spawnPosition.x=100;
    spawnPosition.y=1000;
    shared.respawnPlayer();
    colors.background='#b6becd'; colors.tile='#588293';

    shared.C(0,[],[26],{
        x: spawnPosition.x,
        y: spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=9DzYxEZpsLE'
    });

    mapDimensions.x=24000;
    mapDimensions.y=12000;
})