import { MongoClient, ServerApiVersion, GridFSBucket } from "mongodb";
import fs from 'fs';

const uri = "mongodb+srv://joeinfinity:XRmBxoduGJPEvn8y@cluster0.ic4ay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  }
});

let db;
let connected = false;
let bucket;
let userCollection;
let metadataCollection;

async function run() {
    try {
        await client.connect();

        db = client.db("Cluster0");
        userCollection = db.collection("User");
        metadataCollection = db.collection("Metadata");
        bucket = new GridFSBucket(db);

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
        unlockedUniverses: [1],
        uploadedLevelIds: {/*1024: true*/},
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
    if(accountData.fastestTimes[mapName] === undefined || accountData.fastestTimes[mapName] < time){
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

let levelId = BigInt(fs.readFileSync('./levelId.txt', 'utf8'));
function nextLevelId() {
    levelId++;
    fs.writeFileSync('./levelId.txt', levelId.toString());
    return levelId;
}

// upload file to db from buffer
async function uploadPlanet(
    compiled,
    raw,
    username,
    /*metaData: */{mapName, difficulty},
) {
    await until(() => {return connected;});

    const id = nextLevelId();

    const fileName = `${id}.js`;

    let mapAcronym = mapName.split(' ').map(word => word[0].toUpperCase()).join('');
    if(mapAcronym[0] === 'P' && mapAcronym[1] === 'O') mapAcronym = mapAcronym.replace('O','o');

    metadataCollection.insertOne({
        mapId: id,
        mapName,
        mapAcronym,
        creator: username,
        creationTime: Date.now(),
        difficulty,
        visibility: 0,// 0 - public, 1 - private, 2 - unlisted 
        plays: 0,
        likes: 0,
        dislikes: 0,
        comments: [],
        mapSize: compiled.length * 8,
    });

    userCollection.updateOne(
        { username },
        { $set: { [`uploadedLevelIds.${id}`]: true } },
    );

    // the servable code
    const uploadStream = bucket.openUploadStream(fileName);
    uploadStream.end(compiled);

    uploadStream.on("finish", () => {
        console.log("File uploaded to GridFS");
    });

    uploadStream.on("error", (error) => {
        console.error("Error uploading file to GridFS:", error);
    });

    // the exported data from the editor. Used for getting the block data back for remixing.
    const rawUploadStream = bucket.openUploadStream("raw_" + fileName);
    rawUploadStream.end(raw);

    rawUploadStream.on("error", (error) => {
        console.error("Error uploading ws raw file to GridFS:", error);
    });
}

async function getMetadataByName(mapName) {
    await until(() => {return connected;});
    return await metadataCollection.findOne({ mapName });
}

function getCustomMapStream(mapName, metadata) {
    metadataCollection.updateOne({ mapName }, { $inc: { plays: 1 } });
    return bucket.openDownloadStreamByName(metadata.mapId + '.js');
}

export default {
    createAccount,
    getAccount,
    getAccountRequirePassword,
    beatMap,
    uploadPlanet,
    getMetadataByName,
    getCustomMapStream
};