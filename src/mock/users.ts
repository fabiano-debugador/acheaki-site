import { getMongoClient } from '../infra/mongoClient';
import { ObjectId } from 'bson';
import { ISlugProps } from '../pages/[profile]';
export async function getUsers() {
  const maggieDb = await getMongoClient();
  const collection = maggieDb.collection('user');
  // let sortObject = {};
  const listOfUser = collection.find();

  const users = await listOfUser.toArray();
  return users;
}

export async function getAllPageProfiles() {
  const maggieDb = await getMongoClient();
  const collection = maggieDb.collection('profiles');
  const listOfUser = collection.aggregate([
    {
      $project: {
        _id: 0,
        slug: 1,
      },
    },
  ]);

  const pages = await listOfUser.toArray();
  return pages;
}

export async function getAllUserInfo(id: string) {
  const maggieDb = await getMongoClient();
  const collection = maggieDb.collection('user');

  const listOfUser = collection.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: 'addresses',
        localField: '_id',
        foreignField: 'id_login',
        as: 'address',
      },
    },
    {
      $lookup: {
        from: 'profiles',
        localField: '_id',
        foreignField: 'id_login',
        as: 'profile',
      },
    },

    { $unwind: { path: '$address', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$profile', preserveNullAndEmptyArrays: true } },
  ]);

  const users = await listOfUser.toArray();

  return users;
}

export async function getProfileBySlug(slug: ISlugProps) {
  const maggieDb = await getMongoClient();
  const collection = maggieDb.collection('profiles');

  const profileData = collection.aggregate([
    {
      $match: {
        slug: slug.profile,
      },
    },
    {
      $lookup: {
        from: 'addresses',
        localField: 'id_login',
        foreignField: 'id_login',
        as: 'address',
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'id_login',
        foreignField: '_id',
        as: 'user',
      },
    },

    { $unwind: { path: '$address', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },

    {
      $project: {
        _id: 1, //{ $toString: '$_id' },
        name: 1,
        description: 1,
        id_category: 1,
        id_categorys: 1,
        imgBanner: 1,
        imgProfile: 1,
        slug: 1,
        address: {
          _id: 1,
          city: 1,
          state: 1,
          cep: 1,
          neighborhood: 1,
          address: 1,
          number: 1,
          complement: 1,
          latitude: 1,
          longitude: 1,
        },
        user: {
          _id: 1,
          name: 1,
          age: 1,
          gender: 1,
        },
      },
    },
  ]);

  const profile = await profileData.toArray();

  return profile[0];
}
