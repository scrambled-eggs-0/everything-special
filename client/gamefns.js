// functions required to run the game, e.g. the I function that inits entities

// Init
window.I = (e) => {
    e.id = entities.length;
    entities.push(e);
    tickFunctions[e.id] = [];
}