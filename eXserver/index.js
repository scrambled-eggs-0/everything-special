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
const {defaultMapName, addToMap, removeFromMap, mapExists, tutorialMapName} = MapFunctions;

// player class
import Player from './player.js';

// bundling and hot reload
import '../webpack/webpack.js';

// serializing messages
import { unpack, pack } from 'msgpackr';

// connect to database and useful fns 
import db from './db.js';

const PORT = 3000;

import sendWebhookWinMessage from './webhook.js';

import banIp from './ipBan.js';

const clients = global.clients = {};
const randomBuf = new Uint32Array(2);

// create the server and set functions for when a connection opens, closes, and sends a message
global.app = uWS.App().ws('/*', {
    compression: 0,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 0,// disabled
    open: (ws) => {
        // create client and add to default map. 
        ws.me = {
            ws,
            mapName: '',
            player: new Player(),
            dev: true,
            accountData: undefined,
            enterMapTime: -1,
            mapRequestFor: undefined,
            ip: undefined
        }

        console.log(ws.context);

        if(global.bannedIps[ws.me.ip] !== undefined){
            ws.close();
            return;
        }

        do {
            crypto.getRandomValues(randomBuf);
        } while(clients[randomBuf[1]] !== undefined);
        clients[randomBuf[1]] = ws;
        ws.id = randomBuf[1];
        
        randomBuf[0] = 0;

        global.send(ws.me, randomBuf);

        ws.subscribe('global');

        // send leaderboard
        const lb = pack(global.leaderboard);
        lb[0] = 19;
        global.send(ws.me, lb);
    },
    message: (ws, data) => {
        if(ws.me.mapName === '') return;
        const decoded = new Uint8Array(data);
        if(messageMap[decoded[0]] !== undefined && decoded[0] < messageMap.length) messageMap[decoded[0]](decoded, ws.me);
    },
    close: (ws, code, message) => {
        ws.closed = true;
        if(ws.me.mapName !== '') removeFromMap(ws.me, false);
        delete clients[ws.id];
    }
}).listen(PORT, (token) => {
    if (token) {
        console.log('Server Listening to Port ' + PORT);
    } else {
        console.log('Failed to Listen to Child Server ' + PORT);
    }
});

// following functions are routes - they serve code (html, css, js) files to the client when the initial http request is made

if(global.env === 'dev'){
    app.get('/', (res, req) => {
        res.end(fs.readFileSync('z_dist/index.html'));
    });
} else {
    app.get('/', (res, req) => {
        res.end(fs.readFileSync('z_dev/index.html'));
    });
}


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

app.get("/eXclient/extras/:filename", (res, req) => {
    const path = 'eXclient/extras/' + req.getParameter(0);

    res.writeHeader("Content-Type", "text/javascript");

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

app.get("/shared/:filename", (res, req) => {
    const path = 'shared/' + req.getParameter(0);
    
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Read and serve the file
        const file = fs.readFileSync(path);
        res.cork(() => {
            res.writeHeader("Content-Type", "text/javascript");
            res.end(file);
        })
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

app.get('/create', (res, req) => {
    res.end(fs.readFileSync('eXaccount/index.html'));
});

app.get('/login', (res, req) => {
    res.end(fs.readFileSync('eXaccount/index.html'));
});

app.get("/eXaccount/:filename", (res, req) => {
    let path = "eXaccount/" + req.getParameter(0);

    const extension = path.slice(path.length - 3, path.length);

    res.cork(() => {
        if (extension === "css") {
            res.writeHeader("Content-Type", "text/css");
        } else {
            res.writeHeader("Content-Type", "text/javascript");
        }
    });

    // Check if the file exists
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

app.post("/create", async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const username = req.getHeader("u");
    const password = req.getHeader("p");
    const email = req.getHeader("e");

    if((email !== '' && validateEmail(email) === false) || username.length > 32 || password.length !== 64 || email.length > 320){
        res.cork(() => {
            res.end("n");
        });
        return;
    }
    
    const succeeded = await db.createAccount(username, password, email);

    if (aborted === false){
        if(succeeded === true){
            res.cork(() => {
                res.end("y");
            });  
        } else {
            res.cork(() => {
                res.end("n");
            });
        }
    }
});

const validateEmail = (email) => {
    return !!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

app.post("/login", async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const username = req.getHeader("u");
    const password = req.getHeader("p");

    const account = await db.getAccountRequirePassword(username, password);
    const succeeded = account !== undefined && account !== null;

    if (aborted === false){
        if(succeeded === true){
            res.cork(() => {
                res.end("y");
            });
        } else {
            res.cork(() => {
                res.end("n");
            });
        }
    }
});

app.get("/maps/:filename", (res, req) => {
    // use this to associate with wsId
    const authId = req.getHeader("id");
    
    const mapName = req.getParameter(0);

    if(mapName[0] === '_'){
        const path = 'eXserver/maps/' + mapName;
        if(fs.existsSync(path)){
            res.writeHeader("Content-Type", "text/javascript");
            res.end(fs.readFileSync(path));
        } else {
            res.writeStatus('404 Not Found');
            res.end();
        }
        return;
    }

    const ws = clients[authId];

    if(mapExists(mapName) === false || ws === undefined || ws.accountData === undefined){
        res.writeStatus('404 Not Found');
        res.end();
        return;
    }

    if(mapName === 'winroom' && ws.mapName !== ''){
        const len = ws.me.mapName.length + ws.me.player.name.length + 8;
        const padding = (4 - (len % 4)) % 4;
        const buf = new Uint8Array(len + padding);
        const u32 = new Uint32Array(buf.buffer);
        const timeToBeat = Date.now() - ws.me.enterMapTime;
        buf[0] = 18;// 18 - win message
        buf[1] = ws.me.mapName.length;
        buf[2] = padding;
        u32[1] = timeToBeat;
        global.encoder.encodeInto(ws.me.mapName, buf.subarray(8 | 0));
        global.encoder.encodeInto(ws.me.player.name, buf.subarray((ws.me.mapName.length+8) | 0));
        global.broadcastEveryone(buf);

        //Win msg discord:
        sendWebhookWinMessage(ws.me.mapName, ws.me.player.name, timeToBeat)

        db.beatMap(ws.me.player.name, ws.accountData, ws.me.mapName, timeToBeat);
        
        ws.me.enterMapTime = -1;
    } else {
        ws.me.enterMapTime = Date.now();

        if(global.maps[mapName] !== undefined){
            const otherClient = global.maps[mapName].getRandomClient();
            if(otherClient !== undefined){
                const buf = new Uint8Array(1);
                buf[0] = 20; // request map
                send(otherClient, buf);
                otherClient.mapRequestFor = authId;
                setTimeout(() => {
                    if(otherClient.mapRequestFor === authId) otherClient.mapRequestFor = undefined;
                }, 2000)
            }
        }
    }

    changeMap(ws.me, mapName, res);
});

app.get("/tutorial", (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const authId = req.getHeader("id");

    const ws = clients[authId];
    if(ws === undefined) return;

    // send tutorial map
    changeMap(ws.me, tutorialMapName, res);

    ws.close();
});

// login and get default map
app.post("/join",async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const username = req.getHeader("u");
    const password = req.getHeader("p");

    const authId = req.getHeader("id");
    const ws = clients[authId];

    if (bannedUsernames.includes(username)){
        res.end("n");
        return;
    }
    if(ws === undefined){
        res.end("n");
        return;
    }

    const ip = req.getHeader('x-forwarded-for')?.split(',').shift();
    if(ip !== undefined) ws.me.ip = ip;

    const account = await db.getAccountRequirePassword(username, password);
    const succeeded = account !== null;

    if(aborted === true) return;
    if(succeeded === false){
        res.end("n");
        return;
    }

    if(global.env === 'prod'){
        for(let id in global.clients){
            if(global.clients[id].me.player.name === username){
                const buf = new Uint8Array(1);
                buf[0] = 2; // send to create account page
                send(ws.me, buf);
                ws.close();
                return;
            }
        }
    }

    ws.accountData = account;
    ws.me.player.name = username;

    if(global.maps[global.defaultMapName] !== undefined){
        const otherClient = global.maps[global.defaultMapName].getRandomClient();
        if(otherClient !== undefined){
            const buf = new Uint8Array(1);
            buf[0] = 20; // request map
            send(otherClient, buf);
            otherClient.mapRequestFor = authId;
            setTimeout(() => {
                if(otherClient.mapRequestFor === authId) otherClient.mapRequestFor = undefined;
            }, 2000)
        }
    }

    // send default map
    changeMap(ws.me, global.defaultMapName, res);
});

// const decoder = new TextDecoder();

let mutedUsernames = [];
let bannedUsernames = [];

// functions that each correspond to a message. Tells the server what to do when processing the message
const messageMap = [
    // 0 - unused
    () => {},
    // 1 - unused
    () => {},
    // 2 - unused
    () => {},
    // 3 - unused
    () => {},
    // 4 - x and y
    (data, me) => {
        if(data.byteLength !== 12) return;
        // format (in bytes): [type]1 [blank]1 [u16 id]2 [float position x]4 [float position y]4
        const u16 = new Uint16Array(data.buffer);
        const f32 = new Float32Array(data.buffer);
        me.player.pos.x = f32[1];
        me.player.pos.y = f32[2];
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 5 - mute user
    (data, me) => {
        if(me.player.name !== 'Serum0017' && me.player.name !== 'trit') return;
        const decoder = new TextDecoder();
        const user = decoder.decode(data).slice(1);

        if (mutedUsernames.includes(user) === true) mutedUsernames = mutedUsernames.filter(u => u !== user);
        else mutedUsernames.push(user);

        for(let key in global.clients){
            const p = global.clients[key].me.player;
            if(p.name === user){
                p.chatMuted = !p.chatMuted;
                const str = `: Successfully ${p.chatMuted === true ? 'M' : 'unm'}uted ${user}`;
                const buf = new Uint8Array(str.length + 2);
                buf[0] = 7;// chat message
                buf[1] = 1;// system message
                global.encoder.encodeInto(str, buf.subarray(2 | 0));
                broadcastEveryone(buf);
            }
        }
        // chatMuted
    },
    // 6 - ban user
    (data, me) => {
        if(me.player.name !== 'Serum0017' && me.player.name !== 'trit') return;
        const decoder = new TextDecoder();
        const user = decoder.decode(data).slice(1);

        if (bannedUsernames.includes(user) === true) bannedUsernames = bannedUsernames.filter(u => u !== user);
        else bannedUsernames.push(user);

        for(let key in global.clients){
            const p = global.clients[key].me.player;
            if(p.name === user) {
                banIp(global.clients[key].me.ip);
                global.clients[key].close();
            }
        }
    },
    // 7 - chat message
    (data, me) => {
        if(data.byteLength > 1000 || me.mapName === '' || me.player.chatMuted === true || mutedUsernames.includes(me.player.name)) return;
        
        //Spaghetti chat ratelimit, TODO: fix
        if (me.lastChatMessage){
            if (Date.now() + 1250 < me.lastChatMessage) return;
        }
        me.lastChatMessage = Date.now();
        
        // const msg = decoder.decode(data).slice(1);
        // TODO: server side verification on chat msgs to make sure that data[1] is what it should be (we don't want random people sending "dev" and displaying that way)
        broadcastEveryone(data);
    },
    // 8 - toggle godmode
    (data, me) => {
        if(me.dev !== true) return;
        const buf = new ArrayBuffer(4);
        const u8 = new Uint8Array(buf);
        const u16 = new Uint16Array(buf);

        u8[0] = data[0];
        me.player.god = data[1] === 1;
        u8[1] = data[1];

        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(buf);
    },
    // 9 - set ship angle
    (data, me) => {
        if(data.byteLength !== 8) return;
        const f32 = new Float32Array(data.buffer);
        me.player.ship = true;
        me.player.shipAngle = f32[1];

        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 10 - disable ship
    (data, me) => {
        if(data.byteLength !== 4) return;
        me.player.ship = false;
        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 11 - set grapple position
    (data, me) => {
        if(data.byteLength !== 12) return;
        const f32 = new Float32Array(data.buffer);
        me.player.grapple = true;
        me.player.grappleX = f32[1];
        me.player.grappleY = f32[2];

        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 12 - disable grapple
    (data, me) => {
        if(data.byteLength !== 4) return;
        me.player.grapple = false;
        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 13 - set death timer
    (data, me) => {
        if(data.byteLength !== 8) return;
        const f32 = new Float32Array(data.buffer);
        me.player.deathTimer = true;
        me.player.deathTime = f32[1];

        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 14 - disable death timer
    (data, me) => {
        if(data.byteLength !== 4) return;
        me.player.deathTimer = false;
        const u16 = new Uint16Array(data.buffer);
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 15 - change dead
    (data, me) => {
        if(data.byteLength !== 4) return;
        const u16 = new Uint16Array(data.buffer);
        me.player.dead = data[1] === 1;

        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    },
    // 16 - unused
    () => {},
    // 17 - unused
    () => {},
    // 18 - unused
    () => {},
    // 19 - unused
    () => {},
    // 20 - unused
    () => {},
    // 21 - map request fulfilled
    (data, me) => {
        if(me.mapRequestFor === undefined || global.clients[me.mapRequestFor] === undefined) return;
        send(global.clients[me.mapRequestFor].me, data);
        me.mapRequestFor = undefined;
    },
    // 22 - change radius
    (data, me) => {
        const u16 = new Uint16Array(data.buffer);
        const f32 = new Float32Array(data.buffer);
        me.player.r = f32[1];
        u16[1] = me.player.id;
        global.maps[me.mapName].broadcast(data);
    }
]

global.send = (client, msg) => {
    client.ws.send(msg, true, false);
}

// TODO: subscribe clients to the rooms
global.broadcastRoom = (roomId, msg) => {
    app.publish(roomId, msg, true, false);
}

global.broadcastEveryone = (msg) => {
    app.publish('global', msg, true, false);
}

function changeMap(me, newMapName, res){
    // 1. remove from old map .1
    if(me.mapName !== '') removeFromMap(me);

    // 2. reset powerups .2
    me.player.reset();

    // 3. add to new map (winroom) .3
    me.mapName = newMapName;
    addToMap(me, newMapName);

    // 4. send as response (new system) .4
    res.cork(() => {
        res.writeHeader("Content-Type", "text/javascript");
        res.writeHeader("X-Init-Data", JSON.stringify(global.maps[newMapName].getInitDataForPlayer(me.player)));
        res.end(fs.readFileSync(`eXserver/maps/${newMapName}.js`));
    });
}