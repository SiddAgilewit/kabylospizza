
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://siddhu:8jAHxF8VcTA1Aj6T@cluster0.pi4fz.mongodb.net/nextauth?retryWrites=true&w=majority&appName=Cluster0"
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
