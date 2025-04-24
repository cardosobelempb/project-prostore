import { Module } from '@nestjs/common';
import { HashGenerator } from '@shared/core';
import { RegisterUserService } from '@user/core';
import { UserPrismaRepository } from 'src/application/repositories/prisma/user.respository';
import { RegisterUserController } from '../infra/controllers/user/register-user.controller';
import { CryptoGraphyModule } from './cryptography.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule, CryptoGraphyModule],
  controllers: [RegisterUserController],
  providers: [
    {
      provide: RegisterUserService,
      useFactory: (
        hashGenerator: HashGenerator,
        userRepository: UserPrismaRepository,
      ) => {
        return new RegisterUserService(userRepository, hashGenerator);
      },
      inject: [HashGenerator, 'UserRepository'],
    },
  ],
})
export class UserModule {}
