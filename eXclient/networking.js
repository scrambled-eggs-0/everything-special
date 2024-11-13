import './msgpackr.js';

// used for decoding chat messages
import Utils from '../client/utils.js';
const {decodeText} = Utils;

const HOST = location.origin.replace(/^http/, 'ws');
let ws, nextMsgFlag, gameStarted = false;

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
            return;//
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
        nextMsgFlag = undefined;
        console.log('Websocket closed.');// Attempting to reconnect...
        // TODO: reconnection.
    }
}

initWS();

// first byte encodes the message type
const messageMap = [
    // 0 - selfId / all data needed to start game 
    (data) => {
        // TODO
    },
    // 1 - reload page (for hot refresh)
    () => {
        location.reload();
    },
    // 2 - init planet
    (data) => {
        // unpack it
        data = msgpackr.unpack(data);
        const [players, obstacleData, mapName, dimensions, selfId] = data;
        fetch(location.origin + `/maps/${mapName}.js`, {method: 'GET'}).then(async (d) => {
            const levelData = await d.text();

            const prevScript = document.getElementById('gameScript');
            if(prevScript) prevScript.remove();

            window.resetGame();
            window.players.length = window.obstacles.length = 0;
            const s = document.createElement('script');
            s.id = "gameScript";
            s.text = levelData;
            document.body.appendChild(s);

            for(let i = 0; i < players.length; i++){
                if(players[i] === undefined) {window.players.push(undefined); continue;}
                const playerData = players[i];
                const p = createPlayerFromData(playerData);
    
                window.players.push(p);// pushing p!!
            }

            for(let i = 0; i < obstacleData.length; i++){
                const o = window.obstacles[i];
                for(let key in obstacleData[i]){
                    o[key] = obstacleData[i][key];
                }
            }

            window.mapDimensions = dimensions;
    
            window.selfId = selfId;
    
            window.won = false;
            if(!gameStarted) {
                window.startGame();
                gameStarted = true;
            } else {
                window.respawnPlayer();
            }
        })
    },
    // 3 - flag next message as type and don't decode it
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
    // 9 - change ship
    (data) => {
        const f32 = new Float32Array(data.buffer);
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;
        window.players[id].ship = data[1] === 1;
        window.players[id].shipAngle = f32[1];
    },
    // 10 - change ship angle
    (data) => {
        const f32 = new Float32Array(data.buffer);
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;
        window.players[id].shipAngle = f32[1];
    },
    // 11 - unused
    () => {},
    // 12 - change grapple
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const f32 = new Float32Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;
        if(f32[1] === Infinity){
            window.players[id].grapple = true;
            window.players[id].grappleX = window.players[id].grappleY = Infinity;
        } else if(f32[1] === -Infinity){
            window.players[id].grapple = false;
            window.players[id].grappleX = window.players[id].grappleY = Infinity;
        } else {
            window.players[id].grapple = true;
            window.players[id].grappleX = f32[1];
            window.players[id].grappleY = f32[2];
        }
    },
    // 13 - change death timer 
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;
        const f32 = new Float32Array(data.buffer);
        if(f32[1] === -Infinity) {window.players[id].deathTimer = false; window.players[id].deathTime = Infinity;}
        else {window.players[id].deathTimer = true; window.players[id].deathTime = f32[1]};
    },
    // 14 - change dead
    (data, me) => {
        const f32 = new Float32Array(data.buffer);
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === window.selfId) return;
        window.players[id].dead = f32[1] === 1;
    }
]

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