import { MongoClient, ServerApiVersion, GridFSBucket } from "mongodb";

const uri = "mongodb+srv://joeinfinity:XRmBxoduGJPEvn8y@cluster0.ic4ay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  }
});

let db;
let connected = false;
// let bucket;
let userCollection;
// let mapCollection;

async function run() {
    try {
        await client.connect();

        db = client.db("Cluster0");
        userCollection = db.collection("User");
        // mapCollection = db.collections("Map");

        connected = true;
        console.log("connected to db!");
    } catch (e) {
        console.log("mongo connecting error: ", e);
    }
}

run().catch(console.dir);

function until(condition, checkInterval = 400) {
    if (!!condition()) return true;
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval);
    });
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function randomString(len = 16) {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

async function createAccount(
    username,
    password,
    email=''
) {
    await until(() => {return connected;});
    const nameTaken = await userCollection.findOne({ username });
    if (nameTaken) return false;
    const newAccount = {
        username,
        password,
        email: email,// '' means no email provided
        levelsBeaten: {/*posc: 3, levelName: numTimes*/},
        fastestTimes: {/*posc: 58, levelName: fastestTimeInSeconds*/},
        custom: {/*key: value api for level creators*/},
        cosmetics: [/*{type: 'sunglasses'},{type: 'snowball', color: 'white'}*/],
        unlockedPlanets: {/*pounlocked: true (only for planets that are locked)*/},
        unlockedUniverses: [1]
    };
    userCollection.insertOne(newAccount);
    return true;
}

async function beatMap(username, accountData, mapName, time) {
    await until(() => {return connected;});
    if(accountData.levelsBeaten[mapName] === undefined) accountData.levelsBeaten[mapName] = 1;
    else accountData.levelsBeaten[mapName]++;
    const update = {$set: {}};
    update['$set'][`levelsBeaten.${mapName}`] = accountData.levelsBeaten[mapName];
    if(accountData.fastestTimes[mapName] === undefined || accountData.fastestTime[mapName] < time){
        update['$set'][`fastestTimes.${mapName}`] = time;
    }
    await userCollection.updateOne({username}, update);
}

async function getAccount(username) {
    await until(() => {return connected;});
    return await userCollection.findOne({ username });
}

async function getAccountRequirePassword(username, password){
    await until(() => {return connected;});
    return await userCollection.findOne({ username, password });
}

export default {
    createAccount,
    getAccount,
    getAccountRequirePassword,
    beatMap
};
