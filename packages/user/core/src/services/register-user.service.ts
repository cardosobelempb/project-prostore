import { HashGenerator, HashPassword, IService } from '@shared/core'
import { User } from '../entities/user.entity'
import { IUser } from '../entities/user.interface'
import { UserRepository } from '../repositories'

export class RegisterUserService implements IService<IUser.Request, void> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}
  async execute(input: IUser.Request): Promise<void | null> {
    const { email, password, name } = input
    const userWithEmail = await this.userRepository.findByEmail(email.value)
    if (userWithEmail) {
      throw new Error('User with this email already exists')
    }
    const hashedPassword = await this.hashGenerator.hash(password.value)
    const user = User.create({
      name,
      email,
      password: new HashPassword(hashedPassword),
    })

    await this.userRepository.create(user)
  }
}
