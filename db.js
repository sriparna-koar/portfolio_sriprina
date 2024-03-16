// db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectDatabase() {
  if (!client.isConnected()) await client.connect();
  db = client.db('your-database-name');
}

export async function insertDocument(document) {
  if (!db) await connectDatabase();
  return db.collection('contacts').insertOne(document);
}
