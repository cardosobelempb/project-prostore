import { Module } from '@nestjs/common';
import { HashGenerator } from '@shared/core';
import { RegisterUserService, UserRepository } from '@user/core';
import { RegisterUserController } from '../infra/controllers/user/register-user.controller';
import { CryptoGraphyModule } from './cryptography.module';
import { DatabaseModule } from './database.module';
import { USER_REPOSITORY } from '../shared/constants/repositories.constants';

@Module({
  imports: [DatabaseModule, CryptoGraphyModule], // Importando o DatabaseModule para ter acesso ao USER_REPOSITORY
  controllers: [RegisterUserController],
  providers: [
    {
      provide: RegisterUserService,
      useFactory: (
        userRepository: UserRepository,
        hashGenerator: HashGenerator,
      ) => {
        return new RegisterUserService(userRepository, hashGenerator);
      },
      inject: [USER_REPOSITORY, HashGenerator], // Usando o token USER_REPOSITORY
    },
  ],
})
export class UserModule {}
