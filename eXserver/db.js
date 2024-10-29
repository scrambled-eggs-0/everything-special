import { MongoClient, ServerApiVersion, GridFSBucket } from "mongodb";

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
let mapCollection;

async function run() {
    try {
        await client.connect();

        db = client.db("Cluster0");
        userCollection = db.collection("User");
        mapCollection = db.collections("Map");

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
    hashedPassword,
    profilePic = undefined,
    pfpFileType = undefined,
) {
    const nameTaken = await userCollection.findOne({ username });
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
    userCollection.insertOne(newAccount);
    return true;
}

// might want password for this?
async function getUserData(username) {
    return await userCollection.findOne({ username });
}

export default {
    createAccount,
    getUserData
};
