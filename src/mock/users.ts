import { getMongoClient } from "../infra/mongoClient";

export async function getUsers() {
  const maggieDb = await getMongoClient();
  const collection = maggieDb.collection('user');
  // let sortObject = {};
  const k = collection.find()



  const blogs = await k.toArray();
  return blogs;
}