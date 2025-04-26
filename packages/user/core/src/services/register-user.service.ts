import {
  ConflictError,
  HashGenerator,
  HashPassword,
  IService,
  left,
  MethodArgumentNotValidError,
  PasswordUtils,
  right,
  StandardError,
} from '@shared/core'
import { User } from '../entities/user.entity'
import { IUser } from '../entities/user.interface'
import { UserRepository } from '../repositories'

export class RegisterUserService
  implements IService<IUser.Request, IUser.Response>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}
  async execute(input: IUser.Request): Promise<IUser.Response> {
    const { email, password, name } = input

    const userWithEmail = await this.userRepository.findByEmail(email)

    if (userWithEmail) {
      return left(new ConflictError('User with this email already exists'))
    }

    // const strongpassword = PasswordUtils.getPasswordStrength(password)

    // if (strongpassword) {
    //   switch (strongpassword) {
    //     case 'Fraca':
    //       throw new MethodArgumentNotValidError(
    //         'A senha deve ter no mínimo 8 caracteres.',
    //       )
    //     case 'Média':
    //       throw new MethodArgumentNotValidError(
    //         'A senha deve conter pelo menos uma letra maiúscula.',
    //       )
    //     default:
    //       throw new MethodArgumentNotValidError(
    //         'A senha deve conter pelo menos um símbolo especial.',
    //       )
    //   }
    // }

    const hashedPassword = await this.hashGenerator.hash(password)
    const user = User.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.userRepository.create(user)

    return right({ user })
  }
}
