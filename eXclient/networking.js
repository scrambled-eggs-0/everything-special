import shared from '../shared/shared.js';
import './msgpackr.js';

// used for decoding chat messages
import Utils from '../client/utils.js';
const {decodeText, stringHTMLSafe} = Utils;

const HOST = location.origin.replace(/^http/, 'ws');
let ws, nextMsgFlag, gameStarted = false, canLoad=false;
shared.disconnected = false;
const messageQueue = [];
shared.send = (data) => {
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
        if(messageMap[decoded[0]] === undefined) console.log(decoded);
        messageMap[decoded[0]](decoded);
    });

    ws.onopen = () => {
        console.log('connected to the server!');
        shared.send = (data) => {
            ws.send(data);
        }
        for(let i = 0; i < messageQueue.length; i++){
            shared.send(messageQueue[i]);
        }
    }

    ws.onclose = () => {
        if(shared.username !== null) shared.disconnected = true;
        console.log('Websocket closed.');// Attempting to reconnect...
        // TODO: reconnection.
        shared.send = () => {};
    }
}

initWS();

shared.changeMap = function changeMap(url=`/maps/hub`, method='GET', headers=new Headers()){
    headers.append('id', shared.authId);
    fetch(location.origin + url, {method, headers}).then(async (d) => {
        const levelData = await d.text();
        if(levelData === 'n') {console.error(`failed to load map url ${url}`); return;}
        const [players, selfId] = JSON.parse(d.headers.get("X-Init-Data"));

        const prevScript = document.getElementById('gameScript');
        if(prevScript !== null) prevScript.remove();

        shared.resetGame();
        shared.mapPath = url;
        shared.players.length = shared.obstacles.length = 0;

        shared.mapReady = (fn) => {
            fn(shared);
        }

        canLoad = true;
        const s = document.createElement('script');
        s.id = "gameScript";
        s.text = levelData;
        document.body.appendChild(s);

        for(let i = 0; i < players.length; i++){
            if(players[i] === undefined || players[i] === null) {shared.players[i] = undefined; continue;}
            const playerData = players[i];
            const p = createPlayerFromData(playerData);
            shared.players[i] = p;
        }

        shared.selfId = selfId;

        shared.won = false;
        if(!gameStarted) {
            shared.startGame();
            gameStarted = true;
        } else {
            shared.respawnPlayer();
        }
    })
}

window.loadMap = (I) => {
    if(canLoad === false) return;
    canLoad = false;
    I(shared);
}


function addToLeaderboard(playerName, mapName){
    let mapDiv = document.getElementById(`leaderboard-map-${mapName}`);
    if(mapDiv === null){
        // create mapDiv
        mapDiv = document.createElement('div');
        mapDiv.classList.add("lb-group");
        mapDiv.id = `leaderboard-map-${mapName}`;

        const difficulty = shared.mapDifficulties[mapName] ?? 0;
        const displayMapName = stringHTMLSafe(shared.mapLeaderboardNames[mapName] ?? mapName);

        const mapNameDiv = document.createElement('span');
        mapDiv.appendChild(mapNameDiv);
        mapNameDiv.classList.add('lb-name');
        mapNameDiv.style.color = (mapName === 'winroom') ? '#3528e0' : shared.difficultyImageColors[Math.floor(difficulty)];
        mapNameDiv.innerHTML = displayMapName;

        leaderboard.appendChild(mapDiv);
    }

    // add the player to the mapDiv
    const playerContainer = document.createElement('div');
    playerContainer.id = `player-container-${playerName}-${mapName}`;
    playerContainer.classList.add('lb-players');
    mapDiv.appendChild(playerContainer);

    const playerDiv = document.createElement('div');
    playerContainer.appendChild(playerDiv);

    const playerNameDiv = document.createElement('span');
    playerNameDiv.classList.add('player-name');
    playerNameDiv.innerHTML = playerName;
    playerDiv.appendChild(playerNameDiv);
}

// first byte encodes the message type
const leaderboard = document.querySelector('.leaderboard-div');
const messageMap = [
    // 0 - set auth id (not clientid)
    (data) => {
        const u32 = new Uint32Array(data.buffer);
        shared.authId = u32[1];

        // TEMP
        const username = shared.username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if(username === null || password === null){
            // get tutorial
            window.onkeydown({code: 'KeyZ', repeat: false, type: 'keydown'});
            shared.changeMap('/tutorial');
        } else {
            // log in
            const headers = new Headers();
            headers.append('u', username);
            headers.append('p', password);
            shared.changeMap('/join', 'POST', headers);
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

        if(id === shared.selfId) return;

        const f32 = new Float32Array(raw);
        shared.players[id].pos.x = f32[1];
        shared.players[id].pos.y = f32[2];
    },
    // 5 - new player
    (data) => {
        let p = createPlayerFromData(msgpackr.unpack(data));
        shared.players[p.id] = p;
    },
    // 6 - remove player
    (data) => {
        let id = new Uint16Array(data.buffer)[1];
        shared.players[id] = undefined;// make america undefined again
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

        if(id === shared.selfId) return;

        shared.players[id].god = data[1] === 1;
    },
    // 9 - set ship angle
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        const f32 = new Float32Array(data.buffer);
        shared.players[id].ship = true;
        shared.players[id].shipAngle = f32[1];
    },
    // 10 - disable ship
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        shared.players[id].ship = false;
    },
    // 11 - set grapple
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        const f32 = new Float32Array(data.buffer);
        shared.players[id].grapple = true;
        shared.players[id].grappleX = f32[1];
        shared.players[id].grappleY = f32[2];
    },
    // 13 - disable grapple
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        shared.players[id].grapple = false;
    },
    // 13 - set death timer
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        const f32 = new Float32Array(data.buffer);
        shared.players[id].deathTimer = true;
        shared.players[id].deathTime = f32[1];
    },
    // 14 - disable death timer
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        shared.players[id].deathTimer = false;
    },
    // 15 - change dead
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;

        shared.players[id].dead = data[1] === 1;
    },
    // 16 - add to leaderboard
    (data) => {
        // [16, len, mapName, playerName]
        const len = data[1];
        const mapName = decodeText(data, 2, len+2);
        const playerName = stringHTMLSafe(decodeText(data, len+2));
        addToLeaderboard(playerName, mapName);
    },
    // 17 - remove from leaderboard
    (data) => {
        // [17, len, mapName, playerName]
        const len = data[1];
        const mapName = decodeText(data, 2, len+2);
        const playerName = stringHTMLSafe(decodeText(data, len+2));

        // remove the player from the mapDiv
        document.getElementById(`player-container-${playerName}-${mapName}`).remove();

        // if no more players then remove the mapDiv
        let mapDiv = document.getElementById(`leaderboard-map-${mapName}`);
        if(mapDiv.children.length === 1/*map name*/) mapDiv.remove();
    },
    // 18 - win msg
    (data) => {
        // [18, len, mapName, name]
        const len = data[1];
        const mapName = decodeText(data, 2, len+2);
        const playerName = stringHTMLSafe(decodeText(data, len+2));

        const difficultyNumber = shared.mapDifficulties[mapName] ?? 0;
        const displayMapName = stringHTMLSafe(shared.mapLeaderboardNames[mapName] ?? mapName);

        const div = document.createElement('div');
        div.classList.add('system-message');
        div.classList.add(`difficulty-${Math.floor(difficultyNumber)}`);
        div.innerHTML = `<span class="rainbow">[SƎRVƎR]</span>: ${playerName} ${['has beaten', 'completed', 'surmounted', 'finished'][Math.floor(Math.random()*4)]} the ${displayMapName}!`;

        const chatMessageDiv = document.querySelector('.chat-div');
        chatMessageDiv.appendChild(div);
        chatMessageDiv.scrollTop = chatMessageDiv.scrollHeight;
    },
    // 19 - init leaderboard
    (data) => {
        data[0] = 222;
        const lb = msgpackr.unpack(data);

        for(let mapName in lb){
            for(let id in lb[mapName]){
                addToLeaderboard(lb[mapName][id], mapName);
            }
        }
    }
]

function createPlayerFromData(data){
    const p = shared.createPlayer();

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