// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserController } from '../../infra/api/useCase/User/Create/CreateUserController';
import { CreateUserUseCase } from '../../infra/api/useCase/User/Create/CreateUserUseCase';
import { MongoUserRepository } from '../../infra/api/repositories/implementations/mongo/UserRepository';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mongoUserRepository = new MongoUserRepository();
  const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  await createUserController.handle(req, res);
}
