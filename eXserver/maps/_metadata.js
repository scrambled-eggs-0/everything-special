import shared from '../../shared/shared.js';
shared.mapDifficulties = Object.freeze({
    winroom: 0,
    hub: 0,
    popb: 0.2,
    poca: 1.05,
    pospd: 2.8,
    pos: 3.3,
    pols: 5.01,
    povv: 1.99,
    poqt: 4.5,
    podc: 6.1,
    posc: 0.6,
    poph: 4.05,
    posh: 1.68
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
    posh: `Planet of ${Math.random() < 0.01 ? 'Suspicious' : 'Slight'} Hurdles`
});