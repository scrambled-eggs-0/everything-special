// plan is every time the server is restarted, recompile the client. When client files are updated, also recompile the client and have the website hotfix itself.

// // Old package.json scripts
// "build": "webpack --mode production",
// "bundle": "webpack --mode production",
// "start": "webpack serve --open --mode development"

// for file system management
import fs from 'fs';

// uWebSockets runs server and routing
import uWS from 'uWebSockets.js';

// map data
import MapFunctions from './maps.js';
const {defaultMapName} = MapFunctions;

// player class
import Player from './player.js';

// bundling and hot reload
import '../webpack/webpack.js';

// serializing messages
import { unpack, pack } from 'msgpackr';

const PORT = 3000;

const clients = global.clients = [];

const reusableClientIndexes = [];
// create the server and has functions for when a connection opens, closes, and sends a message
global.app = uWS.App().ws('/*', {
    compression: 0,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 0,// disabled
    open: (ws) => {
        // create client and add to default map. 
        ws.me = {
            ws,
            mapName: undefined,
            player: new Player()
        }
        
        const ind = reusableClientIndexes.length === 0 ? clients.length : reusableClientIndexes.pop();
        clients[ind] = ws;
        ws.clientArrayIndex = ind;
    },
    message: (ws, data) => {
        const decoded = new Uint8Array(data);
        if(messageMap[decoded[0]] !== undefined) messageMap[decoded[0]](decoded, ws.me);
    },
    close: (ws, code, message) => {
        ws.closed = true;
        if(ws.me.mapName !== undefined) {
            global.maps[ws.me.mapName].removePlayer(ws.me.player);
            // global.maps[ws.me.mapName].removeClient(ws.me); // we don't have to unsub, ws already closed

            // send to all other clients removePlayer
            const buf = new ArrayBuffer(4);
            const u8 = new Uint8Array(buf);
            const u16 = new Uint16Array(buf);

            u8[0] = 6;// message type 6 - remove player
            u16[1] = ws.me.player.id;

            global.maps[ws.me.mapName].broadcast(buf);
        }

        clients[ws.clientArrayIndex] = undefined;
        reusableClientIndexes.push(ws.clientArrayIndex);
    }
}).listen(PORT, (token) => {
    if (token) {
        console.log('Server Listening to Port ' + PORT);
    } else {
        console.log('Failed to Listen to Child Server ' + PORT);
    }
});

// following functions are routes - they serve code (html, css, js) files to the client when the initial http request is made
app.get('/', (res, req) => {
    res.end(fs.readFileSync('z_dev/index.html'));
});

app.get("/:filename", (res, req) => {
    const path = 'z_dev' + req.getUrl();
    
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Read and serve the file
        const file = fs.readFileSync(path);
        res.end(file);
    } else {
        // File not found
        res.writeStatus('404 Not Found');
        res.end();
    }
});

app.get("/maps/:filename", (res, req) => {
    const path = 'eXserver' + req.getUrl();
    
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Read and serve the file
        const file = fs.readFileSync(path);
        res.end(file);
    } else {
        // File not found
        res.writeStatus('404 Not Found');
        res.end();
    }
});

// DUPLICATE FROM OMNI SERVER. REMOVE WHEN MERGE
app.get("/gfx/:filename", (res, req) => {
    let path = "client" + req.getUrl();

    if (fs.existsSync(path)) {
        // Read and serve the file
        res.end(fs.readFileSync(path));
    } else {
        // File not found
        res.cork(() => {
            res.writeStatus("404 Not Found");
            res.end();
        });
    }
});

app.get("/gfx/decorations/:filename", (res, req) => {
    let path = "client" + req.getUrl();

    if (fs.existsSync(path)) {
        // Read and serve the file
        res.end(fs.readFileSync(path));
    } else {
        // File not found
        res.cork(() => {
            res.writeStatus("404 Not Found");
            res.end();
        });
    }
});


const decoder = new TextDecoder();

// functions that each correspond to a message. Tells the server what to do when processing the message
const messageMap = [
    // 0 - set username and join game
    (data, me) => {
        if(data.byteLength > 33) return;
        // this should never fail
        me.player.name = decoder.decode(data).slice(1);

        global.maps[defaultMapName].addPlayer(me.player);
        me.mapName = defaultMapName;

        // send init data
        const buf = new Uint8Array(2);
        buf[0] = 3;// message type 3 - flag next message as message type
        buf[1] = 2;// byte[1] = 2 - flag next as init data
        send(me, buf)// first a flag telling the client that the next message won't have a prefix
        send(me, pack(global.maps[defaultMapName].getInitDataForPlayer(me.player)));

        // for all other players send them the news that there's a new player
        buf[1] = 5// reusing the buffer from earlier. byte[1] = 5 - flag next as new player msg
        global.maps[defaultMapName].broadcast(buf);
        global.maps[defaultMapName].broadcast(pack(me.player));

        // subscribe after the broadcasts so that we don't send the newplayer stuff
        global.maps[defaultMapName].addClient(me);
    },
    // 1 (ONE = WON same thing !! it pronounces the same!) - won map
    (data, me) => {
        console.log('win map!!', me.mapName);// TODO!
        if(me.mapName === 'winroom') changeMap(me, defaultMapName);
        else changeMap(me, 'winroom');
    },
    // 2 - unused
    () => {},
    // 3 - unused
    () => {},
    // 4 - x and y
    (data, me) => {
        if(me.mapName === undefined) return;
        if(data.byteLength !== 12) return;

        // format (in bytes): [type]1 [blank]1 [u16 id]2 [float position x]4 [float position y]4
        const u16view = new Uint16Array(data.buffer);
        u16view[1] = me.player.id;
        global.maps[defaultMapName].broadcast(data);
    }
]

global.send = (client, msg) => {
    client.ws.send(msg, true, false);
}

// TODO: subscribe clients to the rooms
global.broadcastRoom = (roomId, msg) => {
    app.publish(roomId, msg, true, false);
}

function changeMap(me, newMapName='winroom'){
    // 1. remove from old map .1
    global.maps[me.mapName].removePlayer(me.player);
    global.maps[ws.me.mapName].removeClient(me);

    // send to all other clients removePlayer
    const buf = new ArrayBuffer(4);
    const u8 = new Uint8Array(buf);
    const u16 = new Uint16Array(buf);

    u8[0] = 6;// message type 6 - remove player
    u16[1] = ws.me.player.id;

    // 2. add to new map (winroom) .2
    global.maps[newMapName].addClient(me);
    global.maps[newMapName].addPlayer(me.player);
    me.mapName = newMapName;

    // send init data
    const buf2 = new Uint8Array(2);
    buf2[0] = 3;// message type 3 - flag next message as message type
    buf2[1] = 2;// byte[1] = 2 - flag next as init data
    send(me, buf2)// first a flag telling the client that the next message won't have a prefix
    send(me, pack(global.maps[newMapName].getInitDataForPlayer(me.player)));

    // for all other players send them the news that there's a new player
    buf2[1] = 5// reusing the buffer from earlier. byte[1] = 5 - flag next as new player msg
    global.maps[newMapName].broadcast(buf2);
    global.maps[newMapName].broadcast(pack(me.player));

    // subscribe after the broadcasts so that we don't send the newplayer stuff
    global.maps[newMapName].addClient(me);
}