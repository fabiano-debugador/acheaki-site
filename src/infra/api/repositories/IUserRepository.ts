import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../entities/User';

export interface IUserRepository {
  // findByLogin(login: string): Promise<User | User[] | null>;
  // save(client: User): Promise<User>;
  // createProfile(idLogin: string): Promise<void>;
  findById(id: string): Promise<void>;
}

export interface IRequestHandler {
  handle(req: NextApiRequest, res: NextApiResponse): Promise<void>;
}

export interface ISave extends IUserRepository {
  save(user: User): Promise<void>;
}
