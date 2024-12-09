import shared from '../shared/shared.js';
import './msgpackr.js';

// used for decoding chat messages
import Utils from '../client/utils.js';
const {decodeText, filterText, stringHTMLSafe} = Utils;

const HOST = location.origin.replace(/^http/, 'ws');
let ws, nextMsgFlag, gameStarted = false, canLoad=false;
let syncMapFn=undefined, lateSyncMap=false;
shared.mapEntryTime = 0;
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

if(shared.isEditor === false) initWS();

shared.changeMap = function changeMap(url=`/maps/hub`, method='GET', headers=new Headers(), onRejected=(url)=>{console.error(`failed to load map url ${url}`);}){
    lateSyncMap = false; shared.mapEntryTime = window.frames;
    headers.append('id', shared.authId);
    fetch(location.origin + url, {method, headers}).then(async (d) => {
        const levelData = await d.text();
        if(levelData === 'n') {onRejected(url); return;}
        const [players, selfId] = JSON.parse(d.headers.get("X-Init-Data"));

        const prevScript = document.getElementById('gameScript');
        if(prevScript !== null) prevScript.remove();

        shared.resetGame();
        shared.mapPath = url;
        shared.players.length = shared.obstacles.length = 0;

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

    if(syncMapFn !== undefined){
        syncMapFn();
        syncMapFn = undefined;
    } else lateSyncMap = true;
}

const customMapDifficulties = {};
function addToLeaderboard(playerName, mapName){
    let mapDiv = document.getElementById(`leaderboard-map-${mapName}`);
    if(mapDiv === null){
        // create mapDiv
        mapDiv = document.createElement('div');
        mapDiv.classList.add("lb-group");
        mapDiv.id = `leaderboard-map-${mapName}`;

        const difficulty = shared.mapDifficulties[mapName] ?? customMapDifficulties[mapName] ?? 0;
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

shared.addChatMessage = (message, type) => {
    const div = document.createElement('div');
    if (type !== 'system') div.classList.add('chat-message');
    else div.classList.add('system-message');

    const chatPrefixMap = {
        normal: '',
        system: '<span class="rainbow">[SERVER]</span>',
        dev: '<span class="rainbow">[DEV]</span>',
        guest: '<span class="guest">'
    };

    const chatSuffixMap = {
        normal: '',
        system: '',
        dev: '',
        guest: '</span>'
    };

    div.innerHTML = chatPrefixMap[type] + message + chatSuffixMap[type];
    const chatMessageDiv = document.querySelector('.chat-div');
    chatMessageDiv.appendChild(div);
    chatMessageDiv.scrollTop = chatMessageDiv.scrollHeight;
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
        shared.players[id] = undefined;
    },
    // 7 - chat message
    (data) => {
        shared.addChatMessage(
            stringHTMLSafe(filterText(decodeText(data, 2))),
            ['normal', 'system', 'dev', 'guest'][data[1]]
        )
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
        const padding = data[2];
        const mapName = decodeText(data, 8, len+8);
        const playerName = stringHTMLSafe(decodeText(data, len+8, data.byteLength - padding));

        const difficultyNumber = shared.mapDifficulties[mapName] ?? 0;
        const displayMapName = stringHTMLSafe(shared.mapLeaderboardNames[mapName] ?? mapName);
        const u32 = new Uint32Array(data.buffer);
        const timeToBeat = u32[1] / 1000;

        let ms = ((~~(timeToBeat*100))%100).toString();
        let seconds = (~~(timeToBeat%60)).toString();
        let minutes = (~~((timeToBeat / 60)%60)).toString();
        if(ms.length === 1) ms = '0' + ms;
        if(seconds.length === 1) seconds = '0' + seconds;

        let displayMapTime = `${minutes}:${seconds}.${ms}`;
        if(timeToBeat > 3600) {
            if(minutes.length === 1) minutes = '0' + minutes;
            const hours = (~~(timeToBeat / 3600)).toString();
            displayMapTime = `${hours}:${minutes}:${seconds}.${ms}`;
        }

        const div = document.createElement('div');
        div.classList.add('system-message');
        div.classList.add(`difficulty-${Math.floor(difficultyNumber)}`);
        div.innerHTML = `<span class="rainbow">[SƎRVƎR]</span>: ${playerName} ${['has beaten', 'completed', 'surmounted', 'finished'][Math.floor(Math.random()*4)]} the ${displayMapName} in ${displayMapTime}!`;

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
    },
    // 20 - map request
    (data) => {
        if(shared.obstacles.length === 0) return;
        // generate function maps that map simulate functions to pack functions
        shared.generateSyncMaps();

        let ind=0, pack=[], fn, packed=false, lastId=-2;
        for(let i = 0; i < shared.obstacles.length; i++){
            const o = shared.obstacles[i];
            if(o.customSync !== undefined){
                pack[ind] = o.customSync(o);
                packed = true;
            } else {
                pack[ind] = {}; packed = false;
                for(let j = 0; j < o.simulate.length; j++){
                    fn = shared.simulateToSync.get(o.simulate[j]);
                    if(fn !== undefined) {
                        packed ||= fn(o, pack[ind]) !== false;
                        continue;
                    }
                    fn = shared.idleEffectToSync.get(o.simulate[j]);
                    if(fn !== undefined) {
                        packed ||= fn(o, pack[ind]) !== false;
                        continue;
                    }
                    // custom simulate w/o customSync - dont pack
                    packed = false;
                }
            }

            if(packed === true){
                if(lastId !== i-1) pack[ind].id = i;
                lastId = i;
                ind++;
            }
        }

        if(pack.length === 0) return;

        if(packed === false){
            pack.length--;
        }

        const buf = msgpackr.pack(pack);

        // First byte is 220 always, so replace it with 0 and reconstruct when client recieves.
        buf[0] = 21;
        shared.send(buf);
    },
    // 21 - map response
    (data) => {
        syncMapFn = () => {
            shared.generateApplySyncMaps();

            data[0] = 220;
            let pack;
            try {
                pack = msgpackr.unpack(data);
            } catch(e){
                console.log('failed sync map parsing!', data);
                console.error(e);
                return;
            }

            if(Array.isArray(pack) === false || pack[0].id === undefined) return;
            let lastId = pack[0].id, id, fn;

            for(let i = 0; i < pack.length; i++){
                id = pack[i].id;
                if(id === undefined) id = ++lastId;
                else lastId = id;

                const o = shared.obstacles[id];
                if(o === undefined) continue;

                if(o.applyCustomSync !== undefined){
                    o.applyCustomSync(o, pack[i]);
                    continue;
                }

                for(let j = 0; j < o.simulate.length; j++){
                    fn = shared.simulateToApplySync.get(o.simulate[j]);
                    if(fn !== undefined) {
                        fn(o, pack[i]);
                        continue;
                    }
                    fn = shared.idleEffectToApplySync.get(o.simulate[j]);
                    if(fn !== undefined) {
                        fn(o, pack[i]);
                        continue;
                    }
                }
            }
        }

        const offtab = shared.offtabSync;
        
        if(lateSyncMap === true || shared.offtabSync === true){
            syncMapFn();
            syncMapFn = undefined;
            shared.offtabSync = false;
            lateSyncMap = false;
        }

        if(offtab === true) {
            shared.accum = 0;
        } else {
            const ticksToSimulate = (window.frames - shared.mapEntryTime) / 2;
            if(ticksToSimulate > 2000) return;
            shared.accum += shared.FRAME_TIME * ticksToSimulate;
        }
    },
    // 22 - change radius
    (data) => {
        const u16 = new Uint16Array(data.buffer);
        const id = u16[1];
        if(id === shared.selfId) return;
        const f32 = new Float32Array(data.buffer);
        shared.players[id].sat.r = f32[1];
    },
    // 23 - set custom map difficulty
    (data) => {
        const f32 = new Float32Array(data.buffer);
        const difficulty = f32[1];
        const mapName = decodeText(data, 8).replaceAll('\x00', '');
        customMapDifficulties[mapName] = difficulty;
    },
]

function createPlayerFromData(data){
    const p = shared.createPlayer();
    // if this gets bigger we may want to
    // for(let key in data)
    p.pos.x = data.pos.x;
    p.pos.y = data.pos.y;
    p.sat.r = data.r;
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