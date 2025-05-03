import {
  ConflictError,
  EmailVO,
  HashGenerator,
  IService,
  left,
  NameVO,
  PasswordVO,
  right,
} from '@shared/core'
import { User } from '../../domain/entities/user.entity'
import { UserRepository } from '../../infrastruecture/repositories'
import { IUser } from '../../interfaces/user.interface'

export class RegisterUserService
  implements IService<IUser.ICreateRequest, IUser.ICreateResponse>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}
  async execute(input: IUser.ICreateRequest): Promise<IUser.ICreateResponse> {
    const { email, password, name } = input

    const userWithEmail = await this.userRepository.findByEmail(email)

    if (userWithEmail) {
      return left(new ConflictError('User with this email already exists'))
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const entity = User.create({
      name: new NameVO(name, { minLength: 3, maxLength: 60 }),
      email: new EmailVO(email),
      password: new PasswordVO(hashedPassword),
    })

    await this.userRepository.create(entity)

    return right({})
  }
}
