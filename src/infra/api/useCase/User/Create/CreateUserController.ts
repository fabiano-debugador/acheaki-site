import { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private test: CreateUserUseCase) {}
  async handle(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.method);
    try {
      await this.test.execute(req.body);
      const data = { data: 'User created succesfully!' };
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
