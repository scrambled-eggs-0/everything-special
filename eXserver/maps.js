import shared from '../shared/shared.js';
import './utils.js';
import '../client/components.js';
import './maps/_metadata.js';

// serializing messages
import { unpack, pack } from 'msgpackr';

import { createCanvas, loadImage } from 'canvas';
global.canvas = createCanvas(1,1);
global.ctx = canvas.getContext('2d');

global.defaultMapName = 'hub';
global.tutorialMapName = 'potb';

shared.isServer = true;

global.leaderboard = {/*mapName: {id: playerName, ...}*/};
global.customMapDifficulties = {};// for leaderboard
global.maps = {};

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
    global.leaderboard[name] = {};
    return new Map(name);
}

function mapExists(name){
    return validPaths[`./maps/${name}.js`] !== undefined;
}

function createCustomMap(name, metadata){
    // already assume it exists
    // because we have metadata.
    global.leaderboard[name] = {};
    global.customMapDifficulties[name] = metadata.difficulty;

    // send difficulty
    const buf = new Uint8Array(8 + Math.ceil(name.length/4)*4);
    buf[0] = 23;
    const f32 = new Float32Array(buf.buffer);
    f32[1] = metadata.difficulty;
    global.encoder.encodeInto(name, buf.subarray(8 | 0));
    global.broadcastEveryone(buf);

    return new Map(name);
}

const buf2 = new Uint8Array(2);
buf2[0] = 3;
function addToMap(me, mapName, metadata=null){
    // custom creation vs normal creation
    if(metadata !== null){
        if(global.maps[mapName] === undefined) {global.maps[mapName] = createCustomMap(mapName, metadata);}
    }
    else if(global.maps[mapName] === undefined) global.maps[mapName] = createMap(mapName);

    // add player up here for id
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
    global.maps[me.mapName].removeClient(me, isConnected);

    if(global.maps[me.mapName].players.length === 0) {delete global.maps[me.mapName]; delete global.leaderboard[me.mapName]; delete global.customMapDifficulties[me.mapName];}
    else {
        // send to all other clients removePlayer
        u8[0] = 6;// message type 6 - remove player
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(buf4);
    }
}

global.encoder = new TextEncoder();
class Map {
    constructor(name){
        this.players = [];

        this.clients = [];

        this.reusablePlayerIds = [];

        this.name = name;
    }
    addPlayer(p){
        const id = this.reusablePlayerIds.length === 0 ? this.players.length : this.reusablePlayerIds.pop();
        p.id = id;
        this.players[id] = p;

        global.leaderboard[this.name][p.id] = p.name;

        const buf = new Uint8Array(this.name.length + p.name.length + 2);
        buf[0] = 16;// 16 - add to lb
        buf[1] = this.name.length;
        global.encoder.encodeInto(this.name, buf.subarray(2 | 0));
        global.encoder.encodeInto(p.name, buf.subarray((this.name.length+2) | 0));
        global.broadcastEveryone(buf);
    }
    removePlayer(p){
        this.players[p.id] = undefined;
        while(this.players[this.players.length-1] === undefined && this.players.length > 0) this.players.length--;
        this.reusablePlayerIds.push(p.id);

        delete global.leaderboard[this.name][p.id];

        const buf = new Uint8Array(this.name.length + p.name.length + 2);
        buf[0] = 17;// 17 - remove from lb
        buf[1] = this.name.length;
        global.encoder.encodeInto(this.name, buf.subarray(2 | 0));
        global.encoder.encodeInto(p.name, buf.subarray((this.name.length+2) | 0));
        global.broadcastEveryone(buf);
    }
    addClient(me){
        me.ws.subscribe(this.name);
        this.clients.push(me);
    }
    removeClient(me, isConnected){
        this.clients = this.clients.filter(c => c !== me);
        if(isConnected === true) me.ws.unsubscribe(this.name);
    }
    getRandomClient(){
        return this.clients[Math.floor(Math.random() * this.clients.length)];
    }
    getInitDataForPlayer(p){
        return [this.players, p.id];
    }
    broadcast(msg){
        global.app.publish(this.name, msg, true, false);
    }
}

export default {createMap, defaultMapName, tutorialMapName, addToMap, removeFromMap, mapExists}