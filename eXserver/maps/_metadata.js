import shared from '../../shared/shared.js';
shared.mapDifficulties = Object.freeze({
    winroom: 0,
    hub: 0,
    pom: 0,
    popb: 0.26,
    poca: 1.01,
    pospd: 2.77,
    pos: 3.01,
    pols: 5.01,
    povv: 2.26,
    poqt: 5.3,
    podc: 6.01,
    podd: 7.3,
    posc: 0.56,
    poph: 4.27,
    powc: 1.92,
    posh: 1.38,
});

shared.mapLeaderboardNames = Object.freeze({
    winroom: 'Winroom',
    hub: 'Hub',
    pom: 'Planet of 🗺️',
    popb: 'Planet of Peaceful Beginnings',
    poca: 'Planet of Conveyor Abuse',
    pospd: 'Planet of Speed (nyoom)',
    pos: 'Planet of Safezones',
    pols: 'Planet of Lost Sanity',
    povv: 'Planet of The Vibing Vault',
    poqt: 'Planet of Quick Thinking',
    podc: 'Planet of Difficulty Chart',
    posc: 'Planet of Simple Challenges',
    poph: 'Planet of Prehistory',
    posh: `Planet of ${Math.random() < 0.01 ? 'Suspicious' : 'Slight'} Hurdles`,
    powc: `Planet of Wacky Craze`
});