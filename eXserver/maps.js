// this might not be necessary...

import './utils.js';
import '../client/components.js';
global.C = window.C;

import { createCanvas, loadImage } from 'canvas';
global.canvas = createCanvas(1,1);
global.ctx = canvas.getContext('2d');

global.defaultMapName = 'hub';

global.maps = {};

global.spawnPosition = window.spawnPosition;
global.mapDimensions = window.mapDimensions;

window.defaultColors = {tile: '#1b9456',background: '#1fad64'};
window.colors = {tile: window.defaultColors.tile,background: window.defaultColors.background};
window.lastColors = {tile: window.defaultColors.tile,background: window.defaultColors.background};
global.colors = window.colors;

const validPaths = {};

// get all map files in /maps using fs magic
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const directory = fs.opendirSync(path.join(__dirname, "maps"));
let file;
while((file=directory.readSync()) !== null){validPaths[`./maps/${file.name}`] = true;}
directory.closeSync();

async function createMap(path){
    if(validPaths[path] === undefined) return undefined;
    // basically just add obstacles. We have the same blockly editor as omni so we can just run the code
    const map = new Map();
    await import(path);
    map.obstacles = window.obstacles;
    map.name = path.split('/')[2].split('.')[0];// ./maps/map.js -> map
    map.dimensions = {x: window.mapDimensions.x, y: window.mapDimensions.y};
    window.mapDimensions = {x: 2000, y: 2000};
    window.obstacles = [];
    return map;
}

const initPackExcludedKeys = {
    sat: true,
    renderShape: true,
    simulate: true,
    effect: true,
    renderEffect: true,
    renderEffectTimer: true,
    pos: true,
    dimensions: true
}

class Map {
    constructor(){
        this.players = [];
        this.obstacles = [];

        this.reusablePlayerIds = [];

        this.name = '';

        this.dimensions = {x: 2000, y: 2000};
    }
    addPlayer(p){
        const id = this.reusablePlayerIds.length === 0 ? this.players.length : this.reusablePlayerIds.pop();
        p.id = id;
        this.players[id] = p;
    }
    removePlayer(p){
        this.players[p.id] = undefined;
        this.reusablePlayerIds.push(p.id);
    }
    addClient(me){
        me.ws.subscribe(this.name);
    }
    removeClient(me){
        me.ws.unsubscribe(this.name);
    }
    getInitDataForPlayer(p){
        const obstacleData = [];
        for(let i = 0; i < this.obstacles.length; i++){
            const obs = {};
            for(let key in this.obstacles[i]){
                if(initPackExcludedKeys[key] === undefined){
                    obs[key] = this.obstacles[i][key];
                }
            }
            obstacleData.push(obs);
        }
        return [this.players, obstacleData, this.name, this.dimensions, p.id];
    }
    broadcast(msg){
        global.app.publish(this.name, msg, true, false);
    }
}

// we'll want to load/ unload maps probably
global.maps[global.defaultMapName] = await createMap('./maps/hub.js');

export default {createMap, defaultMapName}