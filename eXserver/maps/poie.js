window.loadMap((shared)=>{
    shared.spawnPosition.x=100;
    shared.spawnPosition.y=100;
    shared.respawnPlayer();

    shared.C(0,[],[26],{
        x: shared.spawnPosition.x,
        y: shared.spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=eU8_LkwLq74'
    })
});