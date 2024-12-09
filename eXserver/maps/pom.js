window.loadMap((shared)=>{
    const C = shared.C;

    shared.spawnPosition.x=1000;
    shared.spawnPosition.y=500;//1000;
    shared.mapDimensions.x=2000;
    shared.mapDimensions.y=1000//2000;

    shared.respawnPlayer();
    shared.colors.background = '#383838';
    shared.colors.tile = '#0d0d0d';
    // shared.colors.background='#310f99'; shared.colors.tile='#1d0a57';

    shared.C(0,[],[26],{
        x: shared.spawnPosition.x,
        y: shared.spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=GqeaFVsz30w'
    });

    // // sections text
    // C(3,[],[20],{hex:"#FFFFFF",alpha:1,x:1500,y:200,fontSize: 82,text:'Featured Levels'});

    // C(3,[],[20],{hex:"#FFFFFF",alpha:1,x:500,y:200,fontSize: 82,text:'Search'});
    // C(3,[],[20],{hex:"#FFFFFF",alpha:1,x:500,y:500,fontSize: 42,text:'[Coming soon]'});

    C(3,[],[20],{hex:"#FFFF00",alpha:1,x:1500,y:150,fontSize: 82,text:'Featured',sf:(o)=>{
        o.hex = shared.blendColor("#FFFF00","#FFFFFF",(Math.sin(window.frames / 32) + 1)/2)
    }});

    const featuredEdges = [
        'Planet of Creative Name',
        'Planet of WIP Escape Room',
        'Comet of Portal Avoidance',
        'Planet of ______'
    ]

    // Should be harder than all of the featuredEdges
    const featuredMiddle = 'Failed to load, try typing something else :(';

    // w,h = 200
    const topX = 1200;
    const topY = 300;
    const size = 200;
    const pathW = 600 - size;
    const pathH = 600 - size;
    const path = [[0, 0, 3], [pathW, 0, 3], [pathW, pathH, 3], [0, pathH, 3]];
    for(let i = 0; i < 4; i++){
        C(1,[0],[22],{path,currentPoint:i,x:topX,y:topY,w:size,h:size,mapName:featuredEdges[i],toCustomPlanet:true});
    }

    C(1,[],[22],{x:topX+size,y:topY+size,w:200,h:200,mapName:featuredMiddle,toCustomPlanet:true});

    // rendering is a portal with a spinning question mark (like undefined difficulty)
    // It renders as Planet of ______ and you can type in the _____s and add more if necessary
    // When enter is pressed you will enter a map or portal will become sad :( and top text will say "no map found"
    // This is just a day 1 solution but i think it wont look that bad.

    // Search. Right now it will only be by name and id. 
    {
        let disableUntilCollidedAgain = true;
        let active = false;
        let text = 'Planet of ______';
        let freezeX, freezeY;
        let canType = true;
        let colliding = false;

        C(1,[],[3],{x:100+15,y:100+15,w:800-15*2,h:800-15*2,
            ef:(p)=>{
                colliding = true;
                if(active === false && disableUntilCollidedAgain === false){
                    active = true;

                    freezeX = p.pos.x;
                    freezeY = p.pos.y;
    
                    let oldKeyDown = window.onkeydown;
                    let oldKeyUp = window.onkeyup;
    
                    for(let key in shared.input){shared.input[key] = false;}
    
                    window.onkeyup = () => {};
                    window.onkeydown = (e) => {
                        if(canType === false) return;
                        if(e.code === 'Escape' || e.code === 'Enter') {
                            window.onkeydown = oldKeyDown;
                            window.onkeyup = oldKeyUp;
                            completed = true;
                            active = false;
                            freezeX = freezeY = undefined;

                            if(e.code === 'Enter'){
                                canType = false;

                                const headers = new Headers();
                                headers.append('mapname', text);

                                shared.changeMap('/customPlanet', 'GET', headers, () => {
                                    text = 'Failed to load, try typing something else :(';
                                    canType = true;
                                });
                                text = 'Loading...';
                            } else {
                                disableUntilCollidedAgain = true;
                            }
                            return;
                        } else if(e.code === 'Backspace' && text.length !== 0){
                            if(e.ctrlKey === true) {
                                const split = text.split(' ');
                                split.pop();
                                split.join(' ');
                            }
                            else text = text.slice(0, text.length-1);
                        }

                        if(e.key.length === 1) text += e.key;
                    }
                    shared.resetFns.push(() => {
                        window.onkeydown = oldKeyDown;
                        window.onkeyup = oldKeyUp;
                    })
                } else if(disableUntilCollidedAgain === false){
                    p.pos.x = freezeX;
                    p.pos.y = freezeY;
                }
            },sf:()=>{
                if(colliding === false) disableUntilCollidedAgain = false;
                colliding = false;
            },cr:(o)=>{
                ctx.beginPath();
                ctx.fillStyle = shared.difficultyImageColors[0];
                ctx.shadowColor = ctx.fillStyle;
                ctx.shadowBlur = 10;
                ctx.roundRect(o.topLeft.x, o.topLeft.y, o.dimensions.x, o.dimensions.y, o.dimensions.x/12);
                ctx.fill();
                ctx.closePath();
                ctx.shadowBlur = 0;

                ctx.translate(o.topLeft.x, o.topLeft.y);

                ctx.lineCap = 'round';
                shared.difficultyImageMap[0](o.dimensions.x);
                ctx.lineCap = 'square';
                ctx.globalAlpha = 1;

                ctx.translate(-o.topLeft.x, -o.topLeft.y);

                ctx.font = `1px Inter`;
                ctx.fillStyle = 'white';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                const dimensions = ctx.measureText(text);
                const w = dimensions.actualBoundingBoxRight + dimensions.actualBoundingBoxLeft;
                ctx.font = `${Math.min(o.dimensions.x/3, o.dimensions.x / Math.min(40, w))}px Inter`;
                ctx.fillText(
                    text,
                    o.topLeft.x + o.dimensions.x / 2,
                    o.topLeft.y - o.dimensions.y / 4
                );
            }

            // some ideas:

            // circle-slice loading bar
            // is this what you're looking for? Then the planet smoothsteps from the left into view and you can enter.
            // planet fades into the actual difficulty and then you enter.
            // peaceful is a magnifying glass

            // search render is green perlin noise or maybe all 3 noises overlayed for each channel

            // if(importedNois===false) {
            //     (async()=>{
            //         noiseFns = await shared.importNoise();
            //     })();
            // }
            // if(noiseFns === undefined) return;
    
            // const t = (Date.now() / 1000) % 1000;
            // // ctx.fillStyle = 'black';
            // // ctx.fillRect(o.pos.x, o.pos.y, 200,200);
            // for(let x = 0; x < 200; x+=5){
            //     for(let y = 0; y < 200; y+=5){
            //         ctx.fillStyle = '#0000FF';
            //         ctx.globalAlpha = Math.max(0,Math.min(1,noiseFns.simplex3(x / 100 + 2, y / 100 + 3, t)));
            //         ctx.fillRect(o.pos.x + x, o.pos.y + y, 5, 5);
            //     }
            // }
            // ctx.globalAlpha = 1;
        });
    }
});