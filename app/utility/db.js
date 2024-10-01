import { MongoClient, ObjectId } from "mongodb";
const dbURI = 'mongodb://127.0.0.1:27017';
export const dbClient = new MongoClient(dbURI);
export const dbDatabase = dbClient.db("techncloud");
export const dbPartner = dbDatabase.collection("partners");