import shared from '../../shared/shared.js';
shared.mapDifficulties = Object.freeze({
    winroom: 0,
    hub: 0,
    popb: 0.25,
    poca: 1.01,
    pospd: 2.8,
    pos: 3.01,
    pols: 5.01,
    povv: 2.3,
    poqt: 5.33,
    podc: 6.01,
    posc: 0.55,
    poph: 4.33,
    posh: 1.34,
    powc: 1.77
});

shared.mapLeaderboardNames = Object.freeze({
    winroom: 'Winroom',
    hub: 'Hub',
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