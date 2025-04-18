import { MongoClient, ServerApiVersion, GridFSBucket } from "mongodb";

const credentials = "cert.pem";
const client = new MongoClient(
    "mongodb+srv://omni.afimhbq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
    {
        tlsCertificateKeyFile: credentials,
        serverApi: ServerApiVersion.v1,
    },
);
const isReplit = process.env["isReplit"] === "y";

let db;
let connected = false;
let bucket;
let fileCollection;
let metadataCollection;
let creatorCollection;

async function run() {
    try {
        await client.connect();

        db = client.db("Omni");
        bucket = new GridFSBucket(db);
        fileCollection = db.collection("fs.files");
        metadataCollection = db.collection("metadata");
        creatorCollection = db.collection("creators");

        connected = true;
        console.log("connected to db!");

        // getAllFileNames().then((val) => fileNames = val);
    } catch (e) {
        console.log("mongo connecting error: ", e);
    }
}
async function connect() {
    // host the server right away if hosting locally to speed up development time
    if (isReplit === true) {
        await run().catch(console.dir);
    } else {
        run().catch(console.dir);
    }
}

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

async function uploadFileAnalytics(
    fileName,
    buffer,
    fileContent,
    textContent,
    username,
) {
    const metaData = {
        fileName: fileName,
        len: textContent.length, // length of code
        views: 0, // likes and views will be updated in batches
        likes: 0, // so they're close enough but not entirely accurate
        dislikes: 0, // we're not youtube lmao
        devRep: 0.5, // views to likes ratio of the creator's other levels. Start this at nonzero to give new creators a chance.
        devActivity: 0, // idk how this will be calculated
        commentAuthors: [], // usernames corresponding to comments array
        comments: [], // array of texts
        shares: 0, // number of
        relevance: 0.1, // controversial omnis go brr
        playTime: 0, // in integer seconds probably
        timeCreated: Date.now(), // Date.now() is sketch because system dependent but should be close enough
        creator: username, // username of the account that created this level
        difficulty: 5, // number from 1-10, 10 being the hardest
    };

    // addStatsToCreator(metaData);

    metadataCollection.insertOne(metaData);
}

async function addFileToCreator(fileName, username, hashedPassword) {
    await creatorCollection.updateOne(
        { username, hashedPassword },
        { $push: { levels: fileName } },
    );
}

// TODO once we have accounts and account ids.
// async function addStatsToCreator(metaData){

// }

// upload file to db from buffer
async function uploadFile(
    buffer,
    fileContent,
    textContent,
    username,
    hashedPassword,
) {
    const fileName = `${randomString(16)}.js`;
    uploadFileAnalytics(fileName, buffer, fileContent, textContent, username);
    addFileToCreator(fileName, username, hashedPassword);

    // the servable code
    const uploadStream = bucket.openUploadStream(fileName); // , {metadata: {field: 'testfield', value: 'testvalue'}}
    uploadStream.end(buffer);

    uploadStream.on("finish", () => {
        console.log("File uploaded to GridFS");
    });

    uploadStream.on("error", (error) => {
        console.error("Error uploading file to GridFS:", error);
    });

    // the exported data from the editor. Used for getting the block data back for remixing.
    const rawUploadStream = bucket.openUploadStream("raw_" + fileName);
    rawUploadStream.end(fileContent);

    rawUploadStream.on("error", (error) => {
        console.error("Error uploading ws raw file to GridFS:", error);
    });

    // TEMP
    // fileNames.push(fileName);
}

// async function addTestUserToDb(){
//     await until(isConnected);
//     const doc = {juicyData: [0, 1, 2], dateCreated: 1706501181592, weightedThemes: {games: 10, animations: 12, pron: 2}, iPromiseTheseNumbersMeanSomething: 1234, uploadedVideoIds: []};
//     const result = await collection.insertOne(doc);

//     console.log('inserted with userid: ' + result.insertedId, {result});
// }
// addTestUserToDb();

// TEMP!!!!!

// fileName will be determined by the python ai thing, later

const lastTime = {
    /*ip: fileName*/
};
const lastFile = {
    /*ip: timeThisFileServed*/
};
// we fetch 2 files from the client, so we actually want to update the playTime for the previous previous file
const lastLastFile = {
    /*ip: timeThisFileServed*/
};

function getFile(fileName, ip) {
    metadataCollection.updateOne({ fileName }, { $inc: { views: 1 } });
    // console.log('filename', filename);

    const now = Date.now();
    if (lastFile[ip] !== undefined) {
        if (lastLastFile[ip] !== undefined) {
            metadataCollection.updateOne(
                { fileName: lastLastFile },
                { $inc: { playTime: (now - lastTime[ip]) / 1000 } },
            );
        }
        lastLastFile[ip] = lastFile[ip];
    }
    lastTime[ip] = now;
    lastFile[ip] = fileName;

    return bucket.openDownloadStreamByName(fileName);
}

function getRaw(fileName) {
    return bucket.openDownloadStreamByName("raw_" + fileName);
}

// let fileNames = ['test.js'];
// async function getAllFileNames(){
//     const arr = await fileCollection.find({}).toArray((err, result) => {
//         if(err) console.log('err :(', err);
//         return result;
//     });
//     return arr.map(f => f.filename).filter(fn => !fn.startsWith('pfp_') && !fn.startsWith('raw_'));
// }

// function getRandomFileName(){
//     return fileNames[Math.floor(Math.random() * fileNames.length)];
// }

// returns if the level is a banger or not and if it should be served a lot
// {
//     _id: new ObjectId('6621d907c28bc7c587577ec1'),
//     fileName: 'djm6hl7GPRSH5jjJ.js',
//     len: 2541,
//     views: 66,
//     likes: 0,
//     dislikes: 0,
//     devRep: 0.5,
//     devActivity: 0,
//     commentAuthors: [],
//     comments: [],
//     shares: 0,
//     relevance: 0.1,
//     playTime: 0,
//     timeCreated: 1713494279170,
//     creator: 'yqxud'
// }
function isFit(d) {
    // if it's new (uploaded within the last hour)
    if (d.views < 50 || Date.now() - d.timeCreated < 3600) return true;
    // if it's a bad level, give it a chance sometimes
    if (Math.random() < 0.1) return true;
    // if it's hated, don't serve it
    if (d.dislikes > 5 && d.dislikes * 2 > d.likes) return false;
    // if it's scrolled past (less than 1.2s of average playtime), don't serve it
    if (d.views > 50 && d.playTime / d.views < 1.2) return false;
    // if it's a little timmy level (small amount of obstacles), don't serve it as much
    if (d.len < 200 && Math.random() < 0.3) return false;
    // if it's fine, it's fine.
    return true;
}

async function getRandomFileName() {
    // 10% of the time, serve a random level, 90% of the time, serve "fit" levels that are bangers
    if (Math.random() > 0.1) {
        // pick 3 and only serve the good ones
        const arr = (
            await metadataCollection
                .aggregate([{ $sample: { size: 3 } }])
                .toArray((err, result) => {
                    if (err) console.log("err :(", err);
                    return result;
                })
        )
            .filter((a) => isFit(a))
            .map((a) => a.fileName);
        if (arr.length !== 0)
            return arr[Math.floor(arr.length * Math.random())];
    }

    // any random level
    return (
        await metadataCollection
            .aggregate([{ $sample: { size: 1 } }])
            .toArray((err, result) => {
                if (err) console.log("err :(", err);
                return result;
            })
    )[0].fileName;
}

async function createAccount(
    username,
    hashedPassword,
    profilePic = undefined,
    pfpFileType = undefined,
) {
    const nameTaken = await creatorCollection.findOne({ username });
    if (nameTaken) return false;
    const newAccount = {
        username,
        hashedPassword,
        levels: [],
        trackRecord: 0.5,
        followers: 0,
        liked: {},
        disliked: {},
    };
    if (profilePic !== undefined) {
        const fileName = `pfp_${randomString(16)}.${pfpFileType}`;
        // upload profile pic
        const uploadStream = bucket.openUploadStream(fileName);
        uploadStream.end(profilePic);

        let finished = false;

        uploadStream.on("finish", () => {
            console.log("Pfp uploaded to GridFS");
            finished = true;
            newAccount.pfp = fileName;
        });

        uploadStream.on("error", (error) => {
            console.error("Error uploading pfp to GridFS:", error);
        });

        await until(() => {
            return finished === true;
        });
    }
    creatorCollection.insertOne(newAccount);
    return true;
}

async function getUserData(username, hashedPassword) {
    return await creatorCollection.findOne({ username, hashedPassword });
}

async function getRecentFileNames(username, amount = 5) {
    const userData = await creatorCollection.findOne({ username });
    if (!userData) return [];
    const fileNames = [];
    for (let i = 0; i < amount; i++) {
        if (userData.levels.length === 0) break;
        fileNames.push(userData.levels.pop());
    }
    return fileNames;
}

async function getCreator(fileName) {
    const file = await metadataCollection.findOne({ fileName });
    if (file === null) return null;
    return file.creator;
}

async function getProfilePic(creatorName) {
    const creator = await creatorCollection.findOne({ username: creatorName });
    if (creator?.pfp === undefined) return false;
    return bucket.openDownloadStreamByName(creator.pfp);
}

async function toggleLike(fileName, username, hashedPassword) {
    const user = await creatorCollection.findOne({ username, hashedPassword });
    if (!user) return false;

    // remove the .js
    fileName = fileName.slice(0, fileName.length - 3);

    // const fileData = await metadataCollection.findOne({fileName});
    if (user.liked[fileName] === undefined) {
        metadataCollection.updateOne({ fileName }, { $inc: { likes: 1 } });
        creatorCollection.updateOne(
            { username },
            { $set: { [`liked.${fileName}`]: true } },
        );
    } else {
        metadataCollection.updateOne({ fileName }, { $inc: { likes: -1 } });
        creatorCollection.updateOne(
            { username },
            { $unset: { [`liked.${fileName}`]: true } },
        );
    }
    return true;
}

async function toggleDislike(fileName, username, hashedPassword) {
    const user = await creatorCollection.findOne({ username, hashedPassword });
    if (!user) return false;

    // remove the .js
    fileName = fileName.slice(0, fileName.length - 3);

    // const fileData = await metadataCollection.findOne({fileName});
    if (user.disliked[fileName] === undefined) {
        metadataCollection.updateOne({ fileName }, { $inc: { dislikes: 1 } });
        creatorCollection.updateOne(
            { username },
            { $set: { [`disliked.${fileName}`]: true } },
        );
    } else {
        metadataCollection.updateOne({ fileName }, { $inc: { dislikes: -1 } });
        creatorCollection.updateOne(
            { username },
            { $unset: { [`disliked.${fileName}`]: true } },
        );
    }
    return true;
}

async function addShare(fileName) {
    // remove the .js
    fileName = fileName.slice(0, fileName.length - 3);
    metadataCollection.updateOne({ fileName }, { $inc: { shares: 1 } });
    return true;
}

async function deleteLevel(username, levelName) {
    const file = await fileCollection.findOne({ filename: levelName });
    if (file === null) return;

    bucket.delete(file._id);

    creatorCollection.updateOne({ username }, { $pull: { levels: levelName } });
    // fileNames = fileNames.filter(f => f !== levelName);

    metadataCollection.deleteOne({ fileName: levelName });
}

export default {
    uploadFile,
    getFile,
    getRandomFileName,
    createAccount,
    getUserData,
    getRecentFileNames,
    getCreator,
    getProfilePic,
    toggleLike,
    toggleDislike,
    addShare,
    deleteLevel,
    getRaw,
    connect,
};
