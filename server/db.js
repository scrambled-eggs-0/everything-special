import { MongoClient, ServerApiVersion, GridFSBucket } from 'mongodb';

const credentials = 'cert.pem';
const client = new MongoClient('mongodb+srv://omni.afimhbq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  tlsCertificateKeyFile: credentials,
  serverApi: ServerApiVersion.v1
});

let db;
let connected = false;
let bucket;
let fileCollection;
let metdataCollection;
let creatorCollection;

async function run() {
    try {
        await client.connect();

        db = client.db("Omni");
        bucket = new GridFSBucket(db);
        fileCollection = db.collection("fs.files");
        metdataCollection = db.collection("metadata");
        creatorCollection = db.collection("creators");

        connected = true;
        console.log('connected to db!');

        getAllFileNames().then((val) => fileNames = val);
    } catch(e){
        console.log('mongo connecting error: ', e);
    }
}
run().catch(console.dir);

const isConnected = () => {return connected === true};
function until (condition, checkInterval=400) {
    if(!!condition()) return true;
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    })
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function randomString(len=16){
    let str = '';
    for(let i = 0; i < len; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

async function uploadFileAnalytics(fileName, buffer, fileContent, textContent){
    const metaData = {
        fileName: fileName,
        len: textContent.length,// length of code
        views: 0,               // likes and views will be updated in batches
        likes: 0,               // so they're close enough but not entirely accurate
        dislikes: 0,            // we're not youtube lmao
        creatorTrackRecord: 0.5 // views to likes ratio of the creator's other levels. Start this at nonzero to give new creators a chance.
    }

    // addStatsToCreator(metaData);

    metdataCollection.insertOne(metaData);
}

// TODO once we have accounts and account ids.
// async function addStatsToCreator(metaData){

// }

// upload file to db from buffer
async function uploadFile(buffer, fileContent, textContent){
    const fileName = `${randomString(16)}.js`;
    uploadFileAnalytics(fileName, buffer, fileContent, textContent);
    const uploadStream = bucket.openUploadStream(fileName); // , {metadata: {field: 'testfield', value: 'testvalue'}}
    uploadStream.end(buffer);

    uploadStream.on('finish', () => {
        console.log('File uploaded to GridFS');
    });

    uploadStream.on('error', (error) => {
        console.error('Error uploading file to GridFS:', error);
    });

    // TEMP, VERY INEFFICIENT !!
    fileNames.push(fileName);
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
function getFile(filename){
    console.log('filename', filename);
    return bucket.openDownloadStreamByName(filename);
}

let fileNames = ['test.js'];
async function getAllFileNames(){
    const arr = await fileCollection.find({}).toArray((err, result) => {
        if(err) console.log('err :(', err);
        return result;
    });
    return arr.map(f => f.filename);
}

// temp, for mvp. TODO: remove for prod
function getRandomFileName(){
    return fileNames[Math.floor(Math.random() * fileNames.length)]
}

export default {
    uploadFile,
    getFile,
    getRandomFileName,
};