window.loadMap((shared)=>{
    shared.spawnPosition.x=100;
    shared.spawnPosition.y=100;
    shared.respawnPlayer();

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

    shared.C(0,[],[26],{
        x: shared.spawnPosition.x,
        y: shared.spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=eU8_LkwLq74'
    })
});