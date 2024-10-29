mapDimensions.x=20000;
mapDimensions.y=20000;

spawnPosition.x=10000;
spawnPosition.y=10000;
window.respawnPlayer();

for(let x = 100; x < mapDimensions.x; x += 200){
    for(let y = 100; y < mapDimensions.y; y += 200){
        C(1,[],[0],{h:50,w:400,y:4550,x:8300,});
    }
}