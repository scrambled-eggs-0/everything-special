// this class is just to store player data so that other clients can get it if they're late to the map.
class Player {
    constructor(){
        this.id = -1;
        
        this.pos = {x: 0, y: 0};

        this.name = '';

        this.reset();
    }
    // reset powerups
    reset(){
        this.dead = false;

        this.god = false;

        this.ship = false;
        this.shipAngle = 0;

        this.grapple = false;
        this.grappleX = -1;
        this.grappleY = -1;

        this.deathTimer = false;
        this.deathTime = 0;
    }
}

export default Player;