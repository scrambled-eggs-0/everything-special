from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
from gridfs import GridFS

db = None
fileCollection = None
metadataCollection = None
creatorCollection = None
bucket = None

# your task @Paul: from the user's database id, return the index of the best video from the database.
# you will likely want to use some sort of sublinear algorithm because we could have millions of entries in the db
def recommend(username):
    # here's how you would look up the user in the database
    print("User Data ", creatorCollection.find_one({"username": username})) # It would probably be better to cache things in a hashmap (or the equivalent in python. Dict?) instead of looking up stuff every time

    # here's how you get a game (stored as simply js code)
    print("Game Metadata ", metadataCollection.find_one({"fileName": "2DQsg9xXJpzcrbv0.js"}))

    # see https://pymongo.readthedocs.io/en/stable/api/gridfs/index.html for more db stuff

    # Goal: return the best video id
    # or if it would be faster to 
    # generate say, 10 videos at a
    # time you could return an array
    # instead.
    return "0"

# connecting to the db
def connect_to_mongo():
    uri = "mongodb+srv://omni.afimhbq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
    client = MongoClient(uri,
        tls=True,
        tlsCertificateKeyFile='../../cert.pem',
        server_api=ServerApi('1'))
    
    try:
        global db
        global creatorCollection
        global metadataCollection
        global bucket
        db = client['Omni']
        metadataCollection = db["metadata"]
        creatorCollection = db["creators"]
        bucket = GridFS(db)
        print('connected to the db in python!')

        # to develop without having to install node-gyp and all this other fancy build stuff, just uncomment the following function:
        recommend("chosen")
    except Exception as e:
        print("python mongo connecting error: " + e)

connect_to_mongo()

input("Press Enter to exit...")