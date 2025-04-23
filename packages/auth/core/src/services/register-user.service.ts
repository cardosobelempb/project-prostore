import { IService } from '@shared/core'
import { IUser } from '../entities/user.interface'

export default class RegisterUserService
  implements IService<IUser.ICreateUser, void>
{
  async execute(input: IUser.ICreateUser): Promise<void | null> {
    throw new Error('Method not implemented.')
  }
}
