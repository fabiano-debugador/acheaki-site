import { getMongoClient } from '../../../../mongoClient';
import { User } from '../../../entities/User';
import { IUserRepository } from '../../IUserRepository';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongodb';
import { hash } from 'bcrypt';

export class MongoUserRepository implements IUserRepository {
  async findById(id: string): Promise<void> {
    console.log(id);
  }

  async save(user: User): Promise<void> {
    const { name, login, password } = user;
    const _id = uuidv4() as unknown as ObjectId;
    const passwordHash = await hash(password, 8);
    const newUser = {
      _id,
      name,
      login,
      password: passwordHash,
    };

    const maggieDb = await getMongoClient();
    const collection = maggieDb.collection('users');

    try {
      collection.insertOne(newUser);
      console.log(user);
      // return user;
    } catch (error) {
      console.log('error');
    }
  }
}
