import { IService, left, ResourceNotFoundError, right } from '@shared/core'
import { UserRepository } from '../../infrastruecture/repositories'
import { IUser } from '../../interfaces/user.interface'

export class DeleteUserService
  implements IService<IUser.IDeleteRequest, IUser.IDeleteResponse>
{
  constructor(private readonly userRepository: UserRepository) {}
  async execute(input: IUser.IDeleteRequest): Promise<IUser.IDeleteResponse> {
    const { userId } = input
    console.log('DeleteUserService', userId)

    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new ResourceNotFoundError('Resource not fond'))
    }

    if (user.id.getValue() !== userId) {
      return left(new ResourceNotFoundError('Not allwerd'))
    }

    await this.userRepository.delete(user)

    return right({})
  }
}
