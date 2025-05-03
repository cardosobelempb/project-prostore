import { IService } from '@shared/core'
import { IUser } from '../../interfaces'

export class UpdateUserService implements IService<IUser.IProps, void> {
  execute(request: IUser.IProps): Promise<void | null> {
    throw new Error('Method not implemented.')
  }
}
