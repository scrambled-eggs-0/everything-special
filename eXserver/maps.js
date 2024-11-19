// this might not be necessary...

import './utils.js';
import '../client/components.js';
import './maps/_metadata.js';
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
delete validPaths[`./maps/_metadata.js`];
delete validPaths[`./maps/_converter.js`];
directory.closeSync();

function createMap(name){
    const path = `./maps/${name}.js`;
    if(validPaths[path] === undefined) return console.error('Trying to load undefined map name!', name);
    const map = new Map();
    map.name = name;
    return map;
}

function mapExists(name){
    return validPaths[`./maps/${name}.js`] !== undefined;
}

const buf2 = new Uint8Array(2);
buf2[0] = 3;
function addToMap(me, mapName){
    if(global.maps[mapName] === undefined) global.maps[mapName] = createMap(mapName);

    // add player up here for id
    console.log(mapName, global.maps[mapName])
    global.maps[mapName].addPlayer(me.player);

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
function removeFromMap(me, isConnected=true){
    global.maps[me.mapName].removePlayer(me.player);
    if(isConnected === true) global.maps[me.mapName].removeClient(me);

    if(global.maps[me.mapName].players.length === 0) delete global.maps[me.mapName];
    else {
        // send to all other clients removePlayer
        u8[0] = 6;// message type 6 - remove player
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(buf4);
    }
}

let str;
class Map {
    constructor(name){
        this.players = [];

        this.reusablePlayerIds = [];

        this.name = name;
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
        return [this.players, p.id];
    }
    broadcast(msg){
        global.app.publish(this.name, msg, true, false);
    }
}

export default {createMap, defaultMapName, tutorialMapName, addToMap, removeFromMap, mapExists}