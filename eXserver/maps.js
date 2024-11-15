// this might not be necessary...

import './utils.js';
import '../client/components.js';
import './maps/_difficulty.js';
global.C = window.C;

// serializing messages
import { unpack, pack } from 'msgpackr';

import { createCanvas, loadImage } from 'canvas';
global.canvas = createCanvas(1,1);
global.ctx = canvas.getContext('2d');

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

global.defaultMapName = 'hub';
global.tutorialMapName = 'potb';

global.isServer = true;
global.window.isServer = true;

global.maps = {};

global.spawnPosition = window.spawnPosition;
global.mapDimensions = window.mapDimensions;

global.window.dt = global.dt = 1000 / 60;

global.window.mouseUpFunctions = [];
global.window.mouseDownFunctions = [];
global.window.mouseMoveFunctions = [];
global.window.resizeFns = [];

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
delete validPaths[`./maps/_difficulty.js`];
directory.closeSync();

async function createMap(name){
    const path = `./maps/${name}.js`;
    if(validPaths[path] === undefined) return console.error('Trying to load undefined map name!', name);
    // basically just add obstacles. We have the same blockly editor as omni so we can just run the code
    const map = new Map();
    require(path);
    map.obstacles = window.obstacles;
    map.name = name;
    map.dimensions = {x: window.mapDimensions.x, y: window.mapDimensions.y};
    window.resetGame();
    return map;
}

function mapExists(name){
    return validPaths[`./maps/${name}.js`] !== undefined;
}

const buf2 = new Uint8Array(2);
async function addToMap(me, mapName){
    if(global.maps[mapName] === undefined) global.maps[mapName] = await createMap(mapName);

    // add player up here for id
    global.maps[mapName].addPlayer(me.player);

    // send player's init data (one big)
    buf2[0] = 3;// message type 3 - flag next message as message type
    buf2[1] = 2;// byte[1] = 2 - flag next as init data
    send(me, buf2)// first a flag telling the client that the next message won't have a prefix
    send(me, pack(global.maps[mapName].getInitDataForPlayer(me.player)));

    // for all other players send them other player's init data (many small)
    buf2[1] = 5// reusing the buffer from earlier. byte[1] = 5 - flag next as new player msg
    global.maps[mapName].broadcast(buf2);
    global.maps[mapName].broadcast(pack(me.player));

    // add client down here so that we don't get the broadcast
    global.maps[mapName].addClient(me);
    me.mapName = mapName;
}

const buf4 = new ArrayBuffer(4);
const u8 = new Uint8Array(buf4);
const u16 = new Uint16Array(buf4);
function removeFromMap(me){
    global.maps[me.mapName].removePlayer(me.player);
    global.maps[me.mapName].removeClient(me);

    if(global.maps[me.mapName].players.length === 0) delete global.maps[me.mapName];
    else {
        // send to all other clients removePlayer
        u8[0] = 6;// message type 6 - remove player
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(buf4);
    }
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
            obstacleData.push(obs);// TODO: optimize with ".skip" for encoding skipping over obs with no params
        }
        return [this.players, obstacleData, this.name, this.dimensions, p.id];
    }
    broadcast(msg){
        global.app.publish(this.name, msg, true, false);
    }
}

export default {createMap, defaultMapName, tutorialMapName, addToMap, removeFromMap, mapExists}