import { Db, MongoClient } from 'mongodb';

let acheakiDB: Promise<Db>;

export async function getMongoClient(): Promise<Db> {
  if (acheakiDB) {
    return acheakiDB;
  }
  const mongoUri =   "mongodb+srv://fabiano:programadorPHP14@cluster0.bthdnfp.mongodb.net/test";
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
      .catch(error => {
        reject(error);
      });
  });

  return acheakiDB;
}