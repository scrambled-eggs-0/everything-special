window.loadMap((shared)=>{
    shared.C(1,[],[6],{h:100,w:100,y:0,x:950,});
    shared.C(1,[],[6],{h:100,w:100,y:0,x:950,});
    shared.C(1,[],[6],{h:100,w:100,y:0,x:950,});
    shared.spawnPosition.x=1000;
    shared.spawnPosition.y=1000;
    shared.mapDimensions.x=2000;
    shared.mapDimensions.y=2000;

    shared.respawnPlayer();
    // shared.colors.background='#310f99'; shared.colors.tile='#1d0a57';

    shared.C(0,[],[26],{
        x: shared.spawnPosition.x,
        y: shared.spawnPosition.y,
        r: 50,
        musicPath: 'https://www.youtube.com/watch?v=subUfvBDmz4'
    })
});