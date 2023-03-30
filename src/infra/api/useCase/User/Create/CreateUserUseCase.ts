// import { NextApiRequest } from 'next';
import { ISave } from '../../../repositories/IUserRepository';
import { IUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private userUseCase: ISave) {}

  async execute(user: IUserRequestDTO) {
    try {
      // await this.requestHandler.handle(req, res);
      return await this.userUseCase.save(user);
    } catch (error) {
      // const errorHandler = new ErrorHandler();
      // await errorHandler.handle(req, res);
      console.log('error');
    }
  }
}
