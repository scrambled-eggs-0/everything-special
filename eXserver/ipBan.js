global.bannedIps = {};

import fs from 'fs';
const bannedIps = fs.readFileSync('./ipBan.txt', 'utf8').split('\n');

for(let i = 0; i < bannedIps.length; i++){
    global.bannedIps[bannedIps[i].trim()] = true;
}
delete global.bannedIps[''];

export default function banIp(ip) {
    console.log('banning ip:', ip);
    if(ip === undefined) return;
    global.bannedIps[ip] = true;
    fs.writeFileSync('./ipBan.txt', ip + '\n'); 
}