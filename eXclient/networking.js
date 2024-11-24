import './msgpackr.js';

// used for decoding chat messages
import Utils from '../client/utils.js';
const {decodeText} = Utils;

const HOST = location.origin.replace(/^http/, 'ws');
let ws, nextMsgFlag, iv, gameStarted = false;

const messageQueue = [];
window.send = (data) => {
    messageQueue.push(data);
}

function initWS() {
    ws = new WebSocket(HOST);
    ws.binaryType = "arraybuffer"; // sends messages with binary and stuff o-o yes i am very smart

    ws.addEventListener("message", function (data) {
        if(nextMsgFlag !== undefined){
            messageMap[nextMsgFlag](data.data);
            nextMsgFlag = undefined;
            return;
        }
        const decoded = new Uint8Array(data.data);
        messageMap[decoded[0]](decoded);
    });

    ws.onopen = () => {
        console.log('connected to the server!');
        window.send = (data) => {
            ws.send(data);
        }
        for(let i = 0; i < messageQueue.length; i++){
            send(messageQueue[i]);
        }
    }

    ws.onclose = () => {
        console.log('Websocket closed.');// Attempting to reconnect...
        // TODO: reconnection.
        window.send = () => {};
    }
}

initWS();

window.syncObs = [];
let mapEntryTime = 0;
window.changeMap = function changeMap(url=`/maps/hub`, method='GET', headers=new Headers()){
    mapEntryTime = window.frames;
    headers.append('id', window.authId);
    fetch(location.origin + url, {method, headers}).then(async (d) => {
        const levelData = await d.text();
        if(levelData === 'n') {console.error(`failed to load map url ${url}`); return;}
        const [players, selfId] = JSON.parse(d.headers.get("X-Init-Data"));

        const prevScript = document.getElementById('gameScript');
        if(prevScript !== null) prevScript.remove();

        window.resetGame();
        window.mapPath = url;
        window.players.length = window.obstacles.length = 0;
        const s = document.createElement('script');
        s.id = "gameScript";
        s.text = levelData;
        document.body.appendChild(s);

        for(let i = 0; i < players.length; i++){
            if(players[i] === undefined) {window.players[i] = undefined; continue;}
            const playerData = players[i];
            const p = createPlayerFromData(playerData);
            window.players[i] = p;
        }

        window.selfId = selfId;

        window.won = false;
        if(!gameStarted) {
            window.startGame();
            gameStarted = true;
        } else {
            window.respawnPlayer();
        }

        iv = setInterval(() => {
            if(obstacles.length === 0) return;

            clearInterval(iv);

            // push all obstacles to syncObs that have more than 1 simulate but not a custom simulate so that we can use it for requests later
            if(simulateToSync === undefined) generateFnToIndexMaps();

            let fn;
            mainLoop: for(let i = 0; i < obstacles.length; i++){
                if(obstacles[i].simulate.length === 0) continue;
                for(let j = obstacles[i].simulate.length-1; j >= 0; j--){
                    // if we have a custom simulate
                    fn = simulateToSync.get(obstacles[i].simulate[j]) ?? idleEffectToSync.get(obstacles[i].simulate[j]);
                    if(fn === undefined) continue mainLoop;
                    // if we have 0 rotate speed obviously dont need to add
                    if(fn(obstacles[i]) === undefined) continue mainLoop;
                }
                window.syncObs.push(obstacles[i]);
            }
        }, 1)
    })
}

// first byte encodes the message type
const messageMap = [
    // 0 - set auth id (not clientid)
    (data) => {
        const u32 = new Uint32Array(data.buffer);
        window.authId = u32[1];

        // TEMP
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if(username === null || password === null){
            // get tutorial
            window.onkeydown({code: 'KeyZ', repeat: false, type: 'keydown'});
            window.changeMap('/tutorial');
        } else {
            // log in
            const headers = new Headers();
            headers.append('u', username);
            headers.append('p', password);
            window.changeMap('/join', 'POST', headers);
        }
    },
    // 1 - reload page (for hot refresh)
    () => {
        location.reload();
    },
    // 2 - change to create account page
    (data) => {
        location.replace(location.origin + '/create');
    },
    // 3 - flag next message as type
    (data) => {
        nextMsgFlag = data[1];
    },
    // 4 - player x and y
    (data) => {
        const raw = data.buffer;
        const u16 = new Uint16Array(raw);
        const id = u16[1];

        if(id === window.selfId) return;

        const f32 = new Float32Array(raw);
        window.players[id].pos.x = f32[1];
        window.players[id].pos.y = f32[2];
    },
    // 5 - new player
    (data) => {
        let p = createPlayerFromData(msgpackr.unpack(data));
        window.players[p.id] = p;
    },
    // 6 - remove player
    (data) => {
        let id = new Uint16Array(data.buffer)[1];
        window.players[id] = undefined;// make america undefined again
    },
    // 7 - chat message
    (data) => {
        const chatMsg = decodeText(data, 2);
        const type = ['normal', 'system', 'dev', 'guest'][data[1]];

        const div = document.createElement('div');
        if (type !== 'system') {
            div.classList.add('chat-message');
        } else {
            div.classList.add('system-message');
            // if (data.difficulty != undefined) {
            //     div.classList.add(data.difficulty.toLowerCase());
            // }
        }
        div.innerHTML = `${type === 'system'
            ? '<span class="rainbow">[SERVER]</span>'
            : type === 'dev'
            ? '<span class="rainbow">[DEV]</span> '
            : ''}${type === 'guest' ? '<span class="guest">' : ''}${
                chatMsg
            }${type === 'guest' ? '</span>' : ''}`;
        const chatMessageDiv = document.querySelector('.chat-div');
        chatMessageDiv.appendChild(div);
        chatMessageDiv.scrollTop = chatMessageDiv.scrollHeight;
    },
    // 8 - toggle godmode
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];

        if(id === window.selfId) return;

        window.players[id].god = data[1] === 1;
    },
    // 9 - set ship angle
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        const f32 = new Float32Array(data.buffer);
        window.players[id].ship = true;
        window.players[id].shipAngle = f32[1];
    },
    // 10 - disable ship
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        window.players[id].ship = false;
    },
    // 11 - set grapple
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        const f32 = new Float32Array(data.buffer);
        window.players[id].grapple = true;
        window.players[id].grappleX = f32[1];
        window.players[id].grappleY = f32[2];
    },
    // 13 - disable grapple
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        window.players[id].grapple = false;
    },
    // 13 - set death timer
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        const f32 = new Float32Array(data.buffer);
        window.players[id].deathTimer = true;
        window.players[id].deathTime = f32[1];
    },
    // 14 - disable death timer
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        window.players[id].deathTimer = false;
    },
    // 15 - change dead
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;

        window.players[id].dead = data[1] === 1;
    },
    // 16 - map request
    (data) => {
        // generate function maps that map simulate functions to pack functions
        if(simulateToSync === undefined) generateFnToIndexMaps();

        // syncObs are guaranteed to not have a custom simulate
        let pack = [], len=0;
        for(let i = 0; i < window.syncObs.length; i++){
            len = pack.length;
            pack[len] = {};
            for(let j = 0; j < window.syncObs[i].simulate.length; j++){
                const simulateData = (simulateToSync.get(window.syncObs[i].simulate[j]) ?? idleEffectToSync.get(window.syncObs[i].simulate[j]))(window.syncObs[i]);
                if(simulateData === undefined) continue;
                for(let key in simulateData){
                    pack[len][key] = simulateData[key];
                }
            }
        }

        const buf = msgpackr.pack(pack);

        console.log(buf);

        // First byte is 220 always, so replace it with 0 and reconstruct when client recieves.
        buf[0] = 17;
        send(buf);
    },
    // 17 - map response
    (data) => {
        setTimeout(() => {
            data[0] = 220;
            let updateObs;
            try {
                updateObs = msgpackr.unpack(data);
            } catch(e){
                return;
            }

            console.log('map response!', updateObs);

            if(Array.isArray(updateObs) === false) return;
            for(let i = 0; i < updateObs.length; i++){
                if(typeof updateObs[i] !== 'object') return;
                for(let key in updateObs[i]){
                    if(window.syncObs[i] === undefined) break;
                    if(typeof window.syncObs[i][key] !== typeof updateObs[i][key] && window.syncObs[i][key] !== undefined) return;
                    window.syncObs[i][key] = updateObs[i][key];
                }
            }

            const ticksToSimulate = Math.round((window.frames - mapEntryTime) / 2);
            if(ticksToSimulate > 2000) return;
            window.accum += window.FRAME_TIME * ticksToSimulate;

            console.log(ticksToSimulate);
        }, 200)
    }
]

let simulateToSync, idleEffectToSync;
function generateFnToIndexMaps(){
    simulateToSync = new Map(); idleEffectToSync = new Map();
    for(let i = 0; i < window.simulateMap.length; i++){
        if(window.simulateSyncKeys[i] !== undefined){
            simulateToSync.set(window.simulateMap[i], window.simulateSyncKeys[i]);
        }
    }

    for(let i = 0; i < window.idleEffectMap.length; i++){
        if(window.idleEffectSyncKeys[i] !== undefined){
            idleEffectToSync.set(window.idleEffectMap[i], window.idleEffectSyncKeys[i]);
        }
    }
}

function createPlayerFromData(data){
    const p = window.createPlayer();

    // if this gets bigger we may want to
    // for(let key in data)
    p.pos.x = data.pos.x;
    p.pos.y = data.pos.y;
    p.name = data.name;
    p.dead = data.dead;
    p.id = data.id;
    p.god = data.god;
    p.ship = data.ship;
    p.shipAngle = data.shipAngle;
    p.grapple = data.grapple;
    p.grappleX = data.grappleX;
    p.grappleY = data.grappleY;
    p.deathTimer = data.deathTimer;
    p.deathTime = data.deathTime;

    return p;
}