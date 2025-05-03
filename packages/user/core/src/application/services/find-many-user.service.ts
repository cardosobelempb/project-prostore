import { IService } from '@shared/core'
import { IUser } from '../../interfaces'

export class FindManyUserService
  implements IService<IUser.IProps, IUser.IProps>
{
  execute(request: IUser.IProps): Promise<IUser.IProps | null> {
    throw new Error('Method not implemented.')
  }
}
