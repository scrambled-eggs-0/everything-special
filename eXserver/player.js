// this class is just to store player data so that other clients can get it if they're late to the map.
class Player {
    constructor(){
        this.id = -1;
        
        this.pos = {x: 0, y: 0};

        this.name = '';

        this.god = false;

        this.ship = false;
        this.shipAngle = 0;
    }
}

export default Player;