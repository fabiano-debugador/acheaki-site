import { Db, MongoClient } from 'mongodb';

let acheakiDB: Promise<Db>;

export async function getMongoClient(): Promise<Db> {
  if (acheakiDB) {
    return acheakiDB;
  }
  const mongoUri = process.env.DATABASE_URL;
  if (!mongoUri) {
    throw Error('No mongo URI');
  }

  acheakiDB = new Promise((resolve, reject) => {
    const mongoClientPromise = MongoClient.connect(mongoUri);

    mongoClientPromise
      .then((cli: MongoClient) => {
        const db = cli.db('acheaki');
        resolve(db);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return acheakiDB;
}
