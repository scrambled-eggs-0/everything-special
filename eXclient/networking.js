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

            resetGame();
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
    }
]

function createPlayerFromData(data){
    const p = window.createPlayer();

    p.pos.x = data.pos.x;
    p.pos.y = data.pos.y;
    p.name = data.name;
    p.id = data.id;

    return p;
}